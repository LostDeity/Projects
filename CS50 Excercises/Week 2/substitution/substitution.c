#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <ctype.h>

const string lower_case_alphabet = "abcdefghijklmnopqrstuvwxyz";
const string upper_case_alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
string toUpperCase(string str);

int main(int argc, string argv[]) 
{
    char usedLetters[strlen(argv[1])];
    
    if (argc != 2)
    {
        printf("Usage: ./substitution key\n");
        return 1;
    }
    else if (strlen(argv[1]) != 26  )
    {
        printf("Key must contain 26 characters.\n");
        return 1;
    }

    string testString = argv[1];
    string upperKey = toUpperCase(testString);

    for (int i = 0 ; i < strlen(argv[1]); i++)
    {
        if (!((argv[1][i] >= 'a' && argv[1][i] <= 'z') || (argv[1][i] >= 'A' && argv[1][i] <= 'Z')) )
        {
            printf("Letters may only be used for the key.\n");
            return 1;
        }
        for (int j = 0; j < 26; j++)
        {
            if (argv[1][i] == usedLetters[j])
            {
                printf("Can't repeat any letters.");
                return 1;
            }
        }

        usedLetters[i] = argv[1][i];
    }

    string user_input = get_string("Plaintext: ");
    int charLength = strlen(user_input);
    char encrypted[charLength+1];

    for ( int i = 0; i < strlen(user_input); i++)
    {
        if (isupper(user_input[i]) != 0) //checks if character is Upper case
        {
            for ( int j = 0; j < strlen(upper_case_alphabet); j++)
            {
                if (user_input[i] == upper_case_alphabet[j])
                {
                    encrypted[i] = argv[1][j];
                    break;
                }
            }
        }
        else if (islower(user_input[i]) != 0) //Check if it a lowercase letter
        {
            for ( int j = 0; j < strlen(lower_case_alphabet); j++)
            {
                if (user_input[i] == lower_case_alphabet[j])
                {
                    encrypted[i] = tolower(argv[1][j]);
                    break;
                }
            }
        }
        else //if it reaches this point then it is not in the alphabet
        {
            encrypted[i] = user_input[i];
        }

    }

    // have to add null character in order to make it a string , will add wierd ass character at end without the null character
    encrypted[charLength] = '\0';
    printf("%s\n", encrypted);
    return 0;
    

}


//converts any given string to upper case
string toUpperCase(string str)
{
    int sLength = strlen(str);

    for (int i = 0; str[i] != '\0'; i++)
    {
        if (str[i] >= 'a' && str[i] <= 'z' )
        {
            str[i] = str[i] - 32;
        }
    }
    return str;
}