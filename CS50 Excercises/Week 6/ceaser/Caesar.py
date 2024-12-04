import sys


if len(sys.argv) != 2:
        exit("Usage: python3 Caeser.py Key")


userInput = input("Plaintext: ")
   
caeserOutput = ''.join(chr(ord(char)+int(sys.argv[1])) for char in userInput)          
print(caeserOutput)