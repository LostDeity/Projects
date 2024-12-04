def min_coins(coins, amount):
    # Create a list to store the minimum number of coins needed for each amount from 0 to 'amount'.
    dp = [float('inf')] * (amount + 1)
    dp[0] = 0  # Base case: 0 coins needed to make change for 0.

    for coin in coins:
        for i in range(coin, amount + 1):
            dp[i] = min(dp[i], dp[i - coin] + 1)

    return dp[amount]

# Define the available coin denominations.
coin_denominations = [1, 5, 10, 25]

# Take user input for the amount.
amount = float(input("Change owed: "))
amount = int(amount*100)

minimum_coins = min_coins(coin_denominations, amount)

print(minimum_coins)