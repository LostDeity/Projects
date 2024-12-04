import os


from cs50 import SQL
from flask import Flask, flash, redirect, render_template, request, session
from flask_session import Session
from werkzeug.security import check_password_hash, generate_password_hash

from helpers import apology, login_required, lookup, usd

# Import date class from datetime module
from datetime import datetime

# Configure application
app = Flask(__name__)

# Custom filter
app.jinja_env.filters["usd"] = usd

# Configure session to use filesystem (instead of signed cookies)
app.config["SESSION_PERMANENT"] = False
app.config["SESSION_TYPE"] = "filesystem"
Session(app)

# Configure CS50 Library to use SQLite database
db = SQL("sqlite:///finance.db")


@app.after_request
def after_request(response):
    """Ensure responses aren't cached"""
    response.headers["Cache-Control"] = "no-cache, no-store, must-revalidate"
    response.headers["Expires"] = 0
    response.headers["Pragma"] = "no-cache"
    return response


@app.route("/")
@login_required
def index():
    """Show portfolio of stocks"""
    #store user information and the users shares inorder to be used to display them.
    user_info = db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
    user_shares = db.execute("SELECT * FROM shares WHERE user_id = ?", session["user_id"])

    #db.execute("UPDATE users SET cash = 10000 WHERE id = %s", session["user_id"])# this is just for when resetting users cash to 10000 while testing


    #declare the option variable which will change which type of home page needs to be displayed (1 is without any shares and 2 is with shares)
    option = 1
    #converting user cash to a float inorder to convert it to USD for display purposes.
    user_cash = usd(float(user_info[0]["cash"]))

    if len(user_shares) == 0:
        option = 1
        #To the template "home.html" set the values of the different variables that are going to be displayed in a table as well as the option as to which type of home page needs to be displayed
        return render_template("home.html", Option = option, cash = user_cash , Total = user_cash)
    else:
        option = 2

        #declare empty lists that will be used inorder to display the necessary stocks
        current_cost = []
        total_Cost = []
        company_name = []
        shares_Owned = []
        percentages_change = []

        total_Cost_All_Shares = 0

        #Loop through user_shares and get the pricing of the shares, the symbol/name of company , then also calculate total cost of shares per company
        for i in user_shares:
            cost_Of_Shares = lookup(i["symbol"])["price"]
            company_name.append(i["symbol"])
            current_cost.append(cost_Of_Shares)
            shares_Owned.append(i["AmountOfShares"])
            total_Cost.append(cost_Of_Shares * float(i["AmountOfShares"]))
            

        #Sum up the full total that all the Shares have together
        for i in total_Cost:
            total_Cost_All_Shares += i 
        
        #Get how many different stocks the user owns
        length = len(company_name)
        #Round the total value by 3 decimal places to look good of . Total sum of user's cash and the cost of all their shares
        total_Value = round(user_info[0]["cash"] + total_Cost_All_Shares,3)
        total_Value = usd(total_Value)
        
        #Loop through each stock inorder to convert the current cost of shares and total cost of shares to proper format and also calculate the percantage that the user has gained or lost after the user's last bought shares
        for i in range(len(total_Cost)):
            total_Cost[i] = usd(total_Cost[i])
            percentages_change.append(round(((float(current_cost[i])-float(user_shares[i]["ValueOfShares"]))/float(user_shares[i]["ValueOfShares"]))*100,3))
            current_cost[i] = usd(current_cost[i])
            percentages_change[i] = str(percentages_change[i]) + "%"
            
            
        #Send the required values to "home.html" in order for them to be displayed correctly in the table format    
        return render_template("home.html", Option = option, length = length, name = company_name, cost = current_cost, shares = shares_Owned, total = total_Cost , cash = user_cash, Total = total_Value , percentage = percentages_change)


@app.route("/buy", methods=["GET", "POST"])
@login_required
def buy():
    """Buy shares of stock"""
    if request.method == "POST":

        rows =  db.execute("SELECT * FROM users WHERE id = ?", session["user_id"])
        symbolInput = request.form.get("symbol")

        #Retrieve the current date and time of transaction to be put into table to keep a record of when the purchase of stocks took place
        dateToday = datetime.now()

        session_id = session["user_id"]

        #basic Error handling for the form (If form is empty) and whether user has enough funds.
        if not request.form.get("symbol"): 
            return apology("Please input the symbol for the stocks you would like to acquire",403)
        elif not request.form.get("amount"):
            return apology("Please input a valid amount of stocks that you would like to acquire",403)
        elif not lookup(request.form.get("symbol")):
            return apology("Please input the symbol for a valid company who's stocks you would like to acquire",403)
        else:
            
            #selecting the user inorder to check if user previously bought shares or not
            sharesOwned = db.execute("SELECT * FROM shares WHERE symbol = %s AND user_id = %s ", symbolInput, session["user_id"])

            #Store the user's current cash inorder to check if user has enough funds
            cash_Held = float(rows[0]["cash"])
            shares_Requested = int(request.form.get("amount"))
            cost_singular_share = lookup(request.form.get("symbol"))["price"]

            #calculating the full amount that the user would need to pay for the requested shares
            cost_Shares = float(cost_singular_share) * float(request.form.get("amount"))
            leftOver = cash_Held - cost_Shares
            db.execute("UPDATE users SET cash = %s WHERE id = %s", str(leftOver),session["user_id"])
            #check if user has enough funds
            if (cash_Held - cost_Shares) < 0:
                return apology("Insufficients Funds")
            

            #Check if user already has shares in company requested or has bought shares previously
            if len(sharesOwned) > 0: 
                if int((sharesOwned[0]["AmountOfShares"])) > 0:
                    currentShares = int(sharesOwned[0]["AmountOfShares"])

                    #If shares are previously owned then calculate the new amount of shares that the user now has and update this
                    newShares = currentShares + shares_Requested
                    db.execute("UPDATE shares SET AmountOfShares = %s WHERE symbol = %s AND user_id = %s", str(newShares), symbolInput, session["user_id"])
                    db.execute("UPDATE shares SET ValueOfShares = %s WHERE symbol = %s AND user_id = %s", cost_singular_share, symbolInput, session["user_id"])

                    #create an entry in the history table which stores the transaction and when it took place inorder to be display in the history.html page.
                    db.execute("INSERT INTO history (dateOfTransaction, amount_Shares, user_id, symbol, price) VALUES (%s, %s, %s, %s, %s)", dateToday, str(shares_Requested), session["user_id"], symbolInput, cost_singular_share)
                    return redirect("/")
                else: #User might have already bought shares previously but sold all of them, so they currently have 0 shares. (This doesn't happen because in sell we completely delete the shares when all of them is sold)
                    db.execute("INSERT INTO shares (symbol, AmountOfShares, ValueOfShares , user_id) VALUES (%s,%s,%s,%s)", symbolInput, str(shares_Requested), cost_singular_share, session["user_id"])
                    db.execute("INSERT INTO history (dateOfTransaction, amount_Shares, user_id, symbol, price) VALUES (%s, %s, %s, %s, %s)", dateToday, str(shares_Requested), session["user_id"], symbolInput, cost_singular_share)
                    return redirect("/")
                  
            else:
                #Create a new entry in the shares table that contains all relevant information to be displayed on the home screen later
                db.execute("INSERT INTO shares (symbol, AmountOfShares, ValueOfShares , user_id) VALUES (%s, %s, %s, %s)", symbolInput, str(shares_Requested), cost_singular_share, session_id)
                db.execute("INSERT INTO history (dateOfTransaction, amount_Shares, user_id, symbol, price) VALUES (%s, %s, %s, %s, %s)", dateToday, str(shares_Requested), session["user_id"], symbolInput, cost_singular_share)
                return redirect("/")
               
            
    else:
        return render_template("buy.html")


@app.route("/history")
@login_required
def history():
    """Show history of transactions"""
    #Select all  transaction history information regarding currently logged in user in order for it to be displayed and order it in descending order
    transaction_history = db.execute("SELECT * FROM history WHERE user_id = ? ORDER BY dateOfTransaction DESC", session["user_id"])
    
    #set default option to 1 which assumes user has not bought or sold any stocks yet
    option = 1
    if len(transaction_history) == 0:
        return render_template("history.html", Option = option)
    else:
        
        option = 2

        #Create Empty lists to store the different collumns of the different transactions that the currently logged in user did.
        shares_pricing = []
        company_Symbols = []
        date_of_transaction = []
        amount_of_shares = []

        #Loop through transaction history which is a dictionary and grab the pricing,symbol,amount of share and date of the transaction and put it in the relevant list
        for i in transaction_history:
            shares_pricing.append(usd(i["price"]))
            company_Symbols.append(i["symbol"])
            date_of_transaction.append(i["dateOfTransaction"])
            amount_of_shares.append(i["amount_Shares"])

        return render_template("history.html", Option = option, name = company_Symbols, shares = amount_of_shares, cost = shares_pricing, date = date_of_transaction, length = len(date_of_transaction))


@app.route("/login", methods=["GET", "POST"])
def login():
    """Log user in"""

    # Forget any user_id
    session.clear()

    # User reached route via POST (as by submitting a form via POST)
    if request.method == "POST":

        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)

        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Ensure username exists and password is correct
        if len(rows) != 1 or not check_password_hash(rows[0]["hash"], request.form.get("password")):
            return apology("invalid username and/or password", 403)

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")

    # User reached route via GET (as by clicking a link or via redirect)
    else:
        return render_template("login.html")


@app.route("/logout")
def logout():
    """Log user out"""

    # Forget any user_id
    session.clear()

    # Redirect user to login form
    return redirect("/")


@app.route("/quote", methods=["GET", "POST"])
@login_required
def quote():
    """Get stock quote."""

    if request.method == "POST":
        #Check if user filled in the required field
        if not request.form.get("symbol"):
            return apology("please provide  a symbol of the stocks you would like see", 403)
        else:
            #Check whether the symbol is valid and exists in the database that the lookup function sends the query to.
            if not lookup(request.form.get("symbol")):
                return apology("Please provide a valid symbol for the stocks you would like to see",403)
            else:
                #return the name ,price and symbol of the company inorder to displayed it on the "quoted.html" page
                quote = lookup(request.form.get("symbol"))
                name = quote["name"]
                price = quote["price"]
                symbol = quote["symbol"]     
                return render_template("quoted.html", name = name , price = usd(float(price)), symbol = symbol)
        
            
        
    else:
        return render_template("quote.html")
  


@app.route("/register", methods=["GET", "POST"])
def register():
    """Register user"""

    if request.method == "POST":


        # Ensure username was submitted
        if not request.form.get("username"):
            return apology("must provide username", 403)

        # Ensure password was submitted
        elif not request.form.get("password"):
            return apology("must provide password", 403)
        
        #ensure password was filled in again
        elif not request.form.get ("confirmation"):
            return apology("please confirm password", 403)
        
        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        #check if username already exists (search through database if username exists already tell user to try a different username)
        if len(rows) == 1:
            return apology("Username already exists", 403)
        
        #Check if passwords match.
        if request.form.get("password") != request.form.get("confirmation"):
            return apology("Passwords don't match", 403)

        #Check if password contains atleast a lower letter, uppercase letter, a symbol, and a number and a minimum of 8 characters for password
        
        userpass = request.form.get("password")

        if len(userpass) < 8:
            return apology("Password needs to be of length of atleast 8 characters")
        #Converts your userpass to uppercase then compares it to the original , if the uppercase version = the original version it means that there is no lowercase characters in the password which sets has_lower to False. 
        has_lower = userpass.upper() != userpass
        #Does the same as has_lower but checks instead if there is any uppercase characters in userpass and returns True or False
        has_upper = userpass.lower() != userpass
        # Iterate through every character in userpass and check if that character is a digit, and the any will return has_number to true if any digit is found the following loop explains what it does
        """ 
        for ch in userpass:
            if ch.isdigit():
            has_number = True
            break  # Once a digit is found, no need to continue  
        """

        has_number = any(ch.isdigit() for ch in userpass)

        #Works in the same way that has_number does but it uses a list of symbols to compare each character in the userpass too.
        has_symbol = any(ch in "!$%^&*()-_=+" for ch in userpass)

        # If any one of the following : has_lower,has_upper,has_number or has_symbol is false then the password is not accepted and user is informed that they need to provide the correct type of password
        if (has_lower and has_upper and has_number and has_symbol) == False:
            return apology("Password needs to contain atleast 1 symbol,number,lower & uppercase letter.", 403)
        
        username = request.form.get("username")
        #Convert password to a unique fixed length string of characters  using a one way algorithm to make it nearly impossible for users passwords to get leaked
        passwordHash = generate_password_hash(request.form.get("password"))
        db.execute("INSERT INTO users (username,hash) VALUES (%s,%s)",username,passwordHash)
        
        # Query database for username
        rows = db.execute("SELECT * FROM users WHERE username = ?", request.form.get("username"))

        # Remember which user has logged in
        session["user_id"] = rows[0]["id"]

        # Redirect user to home page
        return redirect("/")
    
    else:        
        return render_template("register.html")

    

@app.route("/sell", methods=["GET", "POST"])
@login_required
def sell():
    """Sell shares of stock"""
    #Get Current date and time inorder for user's transaction to be kept.
    dateToday = datetime.now()
    session_id = session["user_id"]
    if request.method == "POST":

        user_info = db.execute("SELECT * FROM users where id = %s", session_id)
        company_symbol = request.form.get("Symbol")
        shares_to_sell = request.form.get("amount")
        user_cash = user_info[0]["cash"]
        user_cash = float(user_cash)
        
        #Check if user inputed an amount of shares to sell
        if not shares_to_sell:
            return apology("Please input the amount of shares you'd like to sell", 403)
        #Try and check if User correctly selected a valid company symbol and not just left it on the disabled option "Symbol"
        try:
            company_shares = lookup(company_symbol)
            owned_shares = db.execute("SELECT * FROM shares WHERE user_id = ? and symbol = ?", session["user_id"], company_shares["symbol"])
        except:
            return apology("Please select a Symbol for the company's shares you'd like to sell", 403)
        

        company_shares = lookup(company_symbol)
        #Calculate how much money the user is going to be getting from the shares that they would like to sell
        current_cost = round(company_shares["price"],3) * int(shares_to_sell)
        #Check if user is trying to sell more shares that is currently owned.
        if int(owned_shares[0]["AmountOfShares"]) < int(shares_to_sell):
            return apology("Insufficient amount of shares.", 403)
        
        #User would like to share all shares currently owned therefore we're removing the entry of this company in the shares table.
        elif int(owned_shares[0]["AmountOfShares"]) == int(shares_to_sell):

            #Add an entry into the history table and make sure that it's shown that the shares are being sold at this specific date and time.
            db.execute("INSERT INTO history (dateOfTransaction, amount_Shares, symbol, user_id, price) VALUES (%s, %s, %s, %s, %s)", dateToday, ("-" + str(shares_to_sell)), company_shares["symbol"], owned_shares[0]["user_id"], company_shares["price"])
            #Completely remove the shares from the user_id that the user is selling. They aren't needed as all the shares are being sold
            db.execute("DELETE FROM shares WHERE user_id = ? AND symbol = ?", owned_shares[0]["user_id"],  company_shares["symbol"])
            #Calculate the new amount cash the user now has and update the relevant user's cash in the user's table
            user_cash = user_cash + current_cost
            db.execute("UPDATE users SET cash = %s WHERE id = %s", str(user_cash), owned_shares[0]["user_id"])

            return redirect("/")
        
        else:
            #Calulate the amount of shares that the user has left aswell as the amount of cash the user now has after the sale
            shares_left = int(owned_shares[0]["AmountOfShares"]) - int(shares_to_sell)
            user_cash = user_cash + current_cost
            #Add an entry into the history table and make sure that it's shown that the shares are being sold at this specific date and time.
            db.execute("INSERT INTO history (dateOfTransaction, amount_Shares, symbol,user_id, price) VALUES (%s, %s, %s, %s, %s)", dateToday, ("-" + str(shares_to_sell)), company_shares["symbol"], owned_shares[0]["user_id"], company_shares["price"])
            #Update the amount of shares the currently logged in user has in the company in the shares table as well as the amount of cash they have in the users table
            db.execute("UPDATE shares SET AmountOfShares = %s WHERE user_id = %s AND symbol = %s", shares_left, owned_shares[0]["user_id"],  company_shares["symbol"])
            db.execute("UPDATE users SET cash = %s WHERE id = %s", str(user_cash), owned_shares[0]["user_id"])
            return redirect("/")
        
    else:
        #Get all the shares that the user has stocks in
        user_shares = db.execute("SELECT * FROM shares WHERE user_id = ?", session["user_id"])
        option = 1
        #create an empty list to store these companies names
        company_name = []

        #If user has shares then give then display the correct "sell.html".
        if len(user_shares) > 0: 
            
            option = 1
            #Loop through and populate the list with the symbols that these companies have so that the currently logged in user can select what they would like to sell
            for i in user_shares:
                company_name.append(i["symbol"])
                
            return render_template("sell.html", Option = option , name = company_name)
        else:
            #Display the "sell.html" that will inform the user to first buy shares inorder for them to sell.
            option = 2
            return render_template("sell.html", Option = option)
        
