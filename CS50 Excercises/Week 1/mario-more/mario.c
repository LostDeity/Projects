#include <cs50.h>
#include <stdio.h>

void pyramid(int n);

int main(void) 
{
    
    int space , i , k,height = 0;
    do {
        height = get_int("Height: "); //User inputs height of mario wall
    }
    while (height > 8 || height < 1); //Makes sure user inputs a number between 1-8 inclusive;

    for (i = 0 ; i <= height;i++) // loops through each level of #'s
    {
        for (space = 1 ; space+i <= height; space++) // loop to print the amount of spaces before the #'s
        {
            printf(" ");
        }
        for (k = 0 ; k < i ; k++) // loop to print the right alligned #'s 
        {
            printf("#");
        }
        printf("  "); // 2 spaces between the "stairs"
        for (k= 0 ; k < i ; k++)
        {
            printf("#"); // prints the left aligned #'s
        }
        printf("\n"); //moves to next level
    }

    
}
