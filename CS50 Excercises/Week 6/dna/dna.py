import csv
import sys

dnaPeople = {
}

longest_Sequence_Count = {
    "AGATC": 0,
    "TTTTTTCT": 0,
    "AATG": 0,
    "TCTAG": 0,
    "GATA": 0,
    "TATC": 0,
    "GAAA": 0,
    "TCTG": 0
}

def main():

    # TODO: Check for command-line usage
    while True:
        if len(sys.argv) == 3:
            break
        else:
            print("Usage python dna.py databases/data.csv sequences/sequence.txt")
            quit()
    csvName = sys.argv[1]
    txtName = sys.argv[2]

    dataBase = []
    # TODO: Read database file into a variable
    with open(csvName) as csv_file:
        csv_reader = csv.reader(csv_file, delimiter = ",")
        line_count = 0
        for row in csv_reader:
            if line_count == 0:
                line_count += 1
            else:
                dnaPeople.update({row[0]: []})
                for i in range(1,len(row)):
                    dnaPeople[row[0]].append(row[i])



    # TODO: Read DNA sequence file into a variable
    with open(txtName , 'r') as file:
        dnaSequence = " ".join(line.rstrip() for line in file)


    # TODO: Find longest match of each STR in DNA sequence
    lls = []
    
    if csvName == "databases/large.csv":
        lls.append(longest_match(dnaSequence,"AGATC"))
        lls.append(longest_match(dnaSequence,"TTTTTTCT"))
        lls.append(longest_match(dnaSequence,"AATG"))
        lls.append(longest_match(dnaSequence,"TCTAG"))
        lls.append(longest_match(dnaSequence,"GATA"))
        lls.append(longest_match(dnaSequence,"TATC"))
        lls.append(longest_match(dnaSequence,"GAAA"))
        lls.append(longest_match(dnaSequence,"TCTG"))
    else:
        lls.append(longest_match(dnaSequence,"AGATC"))
        lls.append(longest_match(dnaSequence,"AATG"))
        lls.append(longest_match(dnaSequence,"TATC"))
    # TODO: Check database for matching profiles
    found = False
    nameFound = ""
    for key, value in dnaPeople.items():
        if  csvName == "databases/large.csv":

            if int(int(value[0]) == int(lls[0]) and int(value[1]) == int(lls[1]) and int(value[2]) == int(lls[2]) and int(value[3]) == int(lls[3]) and int(value[4]) == int(lls[4]) and int(value[5]) == int(lls[5]) and int(value[6]) == int(lls[6]) and int(value[7]) == int(lls[7])):
                found = True
                nameFound = key
                print("in here")
                break
        elif csvName == "databases/small.csv":
            if int(value[0]) == int(lls[0]) and int(value[1]) == int(lls[1]) and int(value[2]) == int(lls[2]):
                found = True
                nameFound = key
                print("in here 2")
                break
    if found == True:
        print(nameFound,":",dnaPeople[nameFound])
    else:
        print("No match.")
    return 0



def longest_match(sequence, subsequence):
    """Returns length of longest run of subsequence in sequence."""

    # Initialize variables
    longest_run = 0
    subsequence_length = len(subsequence)
    sequence_length = len(sequence)

    # Check each character in sequence for most consecutive runs of subsequence
    for i in range(sequence_length):

        # Initialize count of consecutive runs
        count = 0

        # Check for a subsequence match in a "substring" (a subset of characters) within sequence
        # If a match, move substring to next potential match in sequence
        # Continue moving substring and checking for matches until out of consecutive matches
        while True:

            # Adjust substring start and end
            start = i + count * subsequence_length
            end = start + subsequence_length

            # If there is a match in the substring
            if sequence[start:end] == subsequence:
                count += 1
            
            # If there is no match in the substring
            else:
                break
        
        # Update most consecutive matches found
        longest_run = max(longest_run, count)

    # After checking for runs at each character in seqeuence, return longest run found
    return longest_run


main()
