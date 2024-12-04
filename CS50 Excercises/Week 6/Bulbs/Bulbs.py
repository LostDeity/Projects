print("\N{black circle}") #On
print("\N{white circle}") #Off

userInput = input("Message: ")

a_byte_array = bytearray(userInput, "utf8")
outputString = ""
byte_list = []

for byte in a_byte_array:
    binary_representation = bin(byte)
    byte_list.append(binary_representation)



for i in range(0,len(byte_list),1):
    
    for j in range(1,len(byte_list[i]),1):
        if byte_list[i][j] is '1':
            outputString += "\N{black circle}" #On
        else:
            outputString += "\N{white circle}" #Off
    print(outputString)
    outputString = ""

