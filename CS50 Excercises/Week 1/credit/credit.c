#include <cs50.h>
#include <stdio.h>
#include <stdlib.h>
#include <math.h>



int completeCalc(long lNum);
bool checkValidity(int c2);

int main(void) 
{
    int c = 0; // lets us know which digit we currently have as well as the size of the array
    long iCredit = 0;
    long temp = 0;
    bool control = true; // controls the while loop inorder to exit
    int* iCreditArr = malloc(12*sizeof(int));//p = (int *)malloc(5*sizeof(int));
    

    if (iCreditArr == NULL){ //Error Handling for allocation of memory.
        printf("failed to allocate.");
    }

    // While loop to make sure that the length of the credit cards matches that of Visa,Master or AmEx
    do{
        iCredit = get_long("Please enter in your credit card number: \n");
         
        temp = iCredit; // need to create this as iCredit gets changed in first loop for checking length of array

        c = 0;


        while (temp != 0){//tells us the length of the array
        
            temp /= 10; //moves "decimal point" to the left
            c++;
        }
        //int iCreditArr[c]; //initializes array iCreditArr with length of c
        iCreditArr = realloc(iCreditArr,sizeof(int)*c); // reallocates memory to correct size of credit card number
        if (iCreditArr == NULL){
            printf("Unable to reallocate memory");
        }

        c = 0;
        temp = iCredit;
        while (temp != 0){        
            iCreditArr[c] = temp % 10; //places each number of the credit card into an array
            temp /= 10;
            c++;
        }

        // Conditional to check if credit card is the correct length , and if it starts with the correct number
        if ((c == 13 && iCreditArr[c-1] == 4)  || (c == 15 && iCreditArr[c-1] == 5 && (iCreditArr[c-2] == 1 || iCreditArr[c-2] == 2 || iCreditArr[c-2] == 3 || iCreditArr[c-2] == 4 || iCreditArr[c-2] == 5 ) ) || (c == 16 && iCreditArr[c-1] == 4) || (c == 16 && iCreditArr[c-1] == 3 && (iCreditArr[c-2] == 4 || iCreditArr[c-2] == 7))){ // can do this as a function passing c and an array through.        
            // control = false;
            break;
        } 

    } while (control);




    int checkSum = completeCalc(iCredit); //call function to do complete calculation inorder to verify card

    printf("%d\n" , checkSum);


    if (checkValidity(checkSum) == true )
    {
        switch (iCreditArr[c-1]) // States whether it is a visa ,master card or amex card , no need to validate first number because that has already been done
        {
            case 3:
                printf("American Express\n");
                break;
            case 4:
                printf("Visa\n");
                break;
            case 5:
                printf("Master Card\n");
                break;

        }
    }
    else
    {
        printf("Your card is an invalid card.\n");
    }

    free(iCreditArr);// frees up the memory that iCreditArr took from the stack
    
}



// for traversing from 2nd last element  down , (i = (s.length-1); i > 0 ; i -=2) 

//Completely calculates value to be passed through check validity inorder to verify card
int completeCalc(long lNum) 
{
    long iNumber = lNum;
    int iSumTotal = 0;
    int iTemp1; // will hold last digit and every 2nd one
    int iTemp2;// will hold 2nd last digit and every 2nd one after
    int d1; // used to hold the 2nd last digit and every other consecutive one incase it is > 9 so the digits can be split up
    int d2; // to hold the other part of d1's digit where applicable


    do
    {
        //First removes last digit of iNumber
        iTemp1 = iNumber%10;
        iNumber /= 10;
        iSumTotal += iTemp1;

        //Will First remove the second  last digit of iNumber as the while loop is executed through the credit card number
        iTemp2 = iNumber%10;
        iNumber /= 10;

        //Double the second last and every 2nd consecutive number after that , when number > 9 eg. 12 iTemp is split into 2 therefore d1= 2 and d2 = 1 then added to sum
        iTemp2 *= 2;
        d1 = iTemp2 % 10; //gives you 2 if iTemp2 = 12
        d2 = iTemp2/10;// gives you 1 if iTemp2 = 1
        iSumTotal += d1 + d2; // running total (d1+d2+iTemp1)

    } while (iNumber > 0);

    return iSumTotal;

}




//Just validates if number ends in 0,
bool checkValidity(int c2)
{
    if((c2 % 10) != 0)
    {
        return false;
    }
    else
    {
        return true;
    }
}


