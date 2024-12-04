#include <stdio.h>
#include <cs50.h>

int main()
{
    string name = get_string("Please enter in your name: "); 
    //name = scanf("Please enter your name %s",name); //prompts user for their name 
    printf("hello, %s\n", name); //%s is a place holder
}