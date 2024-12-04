# TODO
while True:
    try:
        height = int(input("Height: "))
    except ValueError:
        continue
    else:
        if height > 1 and height < 8:
            break
        else:
            continue
    



hashAmounts = 1
whiteSpaceAmt = height - hashAmounts

for i in range(height):
    print((" "*whiteSpaceAmt) + ("#"*hashAmounts))
    hashAmounts += 1
    whiteSpaceAmt -= 1
