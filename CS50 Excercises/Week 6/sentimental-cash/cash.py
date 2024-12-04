# TODO

quarters = 0.25
dimes = 0.10
nickels = 0.05
pennies = 0.01
coinsNeeded = 0

while True:
    try:
        change = float(input("Change owed: "))
    except ValueError:
        continue
    else:
        break

change = round(change,2)

coinsNeeded += int(change/quarters)
change -= quarters*int(change/quarters)
coinsNeeded += int(change/dimes)
change -= dimes*int(change/dimes)
coinsNeeded += int(change/nickels)
change -= nickels*int(change/nickels)
coinsNeeded += int(change/pennies)
change -= pennies*int(change/pennies)


print(coinsNeeded)
    

"""while change > 0:

    if change%quarters == 0.00:
        coinsNeeded += int(change/quarters)
        change -= quarters* (int(change/quarters))
    elif change%dimes == 0.00:
        coinsNeeded += int(change/dimes)
        change -= dimes* (int(change/dimes))
    elif change%nickels == 0.00:
        coinsNeeded += int(change/nickels)
        change -= nickels * (int(change/nickels))
    else:
        coinsNeeded += int(change/pennies)
        change = 0"""