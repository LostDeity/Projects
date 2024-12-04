#include <cs50.h>
#include <stdio.h>
#include <string.h>
#include <math.h>

float avgLetters(int letter,int words);
float avgSentences(int sentences, int words);
int indexCalc(float avgL , float avgS);
int count_letters(string text);
int count_words(string text);
int count_sentences(string text);

int main(void) 
{
    string user_input = get_string("Text:\n");


    float L = avgLetters(count_letters(user_input),count_words(user_input)); //Calculates average number of letters per 100 words
    float S = avgSentences(count_sentences(user_input),count_words(user_input)); //Calculates average number of sentences per 100 words
    int index = indexCalc(L,S);

    //Conditional to calculate if index is greater than 16+
    if (index < 16)
    {
        printf("Grade: %d", index);
    }
    else
    {
        printf("Grade: 16+");
    }
    
    printf("\n");
}

// index = 0.0588 * L - 0.296 * S - 15.8 ;  L = average number of letters per 100 words (letters/words * 100 words); S = average number of sentences per 100 words (sentences/words *100);

float avgLetters(int letter,int words)
{
    return  (float) letter/words * 100; //formula to find average number of letters per 100 words
}

float avgSentences(int sentences, int words)
{
    return  (float) sentences/words * 100; // formula to get average number of sentences per 100 words
}

int indexCalc(float avgL , float avgS)
{
    return (0.0588*avgL) - (0.296*avgS) - 15.8 + 0.5; // Coleman-Liau index formula used
}

//counts all alphabetical letters in given string
int count_letters(string text)
{
    int letters = 0;
    for (int i = 0 ; i < strlen(text); i++)
    {
        
        if ((text[i] >= 'a' && text[i] <= 'z') || (text[i] >= 'A' && text[i] <= 'Z')) 
        {
            letters++;
        }       
    }
    return letters;
}

//will count whitespaces and the end of the string inorder to get the amount of words
int count_words(string text)
{
    int words = 0;
    for (int i = 0; i < strlen(text); i++)
    {
        if (text[i] == ' ' || i == strlen(text)-1)
        {
            words++;
        }
    }
    return words;
}


//Counts the amount of sentences by finding '!','?' or '.' which indicates end of a sentence
int count_sentences(string text)
{
    int sentences = 0;
    for (int i = 0; i < strlen(text); i++)
    {
        if (text[i] == '!' || text[i] == '?' || '.' == text[i])
        {
            sentences++;
        }
    }

    return sentences;
}