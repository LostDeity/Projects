# TODO

"""0.0588 * L - 0.296 * S - 15.8  where l = letters/words * 100 and s = sentences/words * 100"""
user_Input = input("Text: ")
letters = 0
words = 0
sentences = 0
l = 0.0
s = 0.0
index = 0


def count_Letters(sInput):
    letters = 0
    for i in range(0,len(sInput)):
        if (sInput[i] >= 'a' and sInput[i] <= 'z') or (sInput[i] >= 'A' and sInput[i] <= 'Z'):
            letters += 1
    return letters

def count_Words(sInput):
    words = 0
    for i in range(0,len(sInput)):
        if sInput[i] == ' ' or i == len(sInput)-1:
            words += 1
    return words

def count_Sentences(sInput):
    sentences = 0
    for i in range(0,len(sInput)):
        if sInput[i] == '!' or sInput[i] == '.' or sInput[i] == '?':
            sentences += 1
    return sentences

l = count_Letters(user_Input)/count_Words(user_Input) * 100
s = count_Sentences(user_Input)/count_Words(user_Input) * 100

def index_Calculator(L,S):
    return 0.0588*L - 0.296*S -15.8


index = int(index_Calculator(l,s))

if index < 16:
    print("Grade "+ str(index))
else:
    print("Grade 16+")
