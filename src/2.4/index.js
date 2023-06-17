/****************************************************** */
/* ******************** QUESTION 1 ******************** */
/****************************************************** */

/* Q1. Create a function called fizzBuzz that would print the result based on the following conditions:
    If the number is divisible by 3, print 'Fizz'.
    If the number is divisible by 5, print 'Buzz'.
    If the number is divisible by 3 AND 5, print 'FizzBuzz'.
    If the number is not divisible by 3 or 5, print 'Pop'.

Use the following test scenarios:
fizzBuzz(49); //Pop
fizzBuzz(55); //Buzz
fizzBuzz(120); //FizzBuzz
fizzBuzz(9999); //Fizz
*/


/* *** MY NOTES **** */
//when I put the condition for divisibility by both 3 and 5 as the third condition, the test fails for fizzBuzz(120) and fizzBuzz(9999)

//the gotcha in the instructions is the condition for the number being divisible by both 3 and 5 should come first, 
//because JavaScript executes conditions from top to bottom. 
//If a number is divisible by both 3 and 5, it would fall into the first or second condition in your current setup 
//and would never reach the third condition that checks for divisibility by both.


function fizzBuzz (num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return 'Pop';
    }
}

let result = console.log(fizzBuzz(9999));


/****************************************************** */
/* ******************** QUESTION 2 ******************** */
/****************************************************** */

/* Q2. Create a function called averager that gets the average (mean) of an array. */

// Declare an array of prices.
const prices = [12.99, 17.75, 88.12, 111.11, 77.09, 53.45];

// Define a function to calculate the average of an array of numbers.
function averager (arr) {
    // Initialize a variable to hold the sum of the numbers.
    let sum = 0;

    // Use a for loop to iterate over each number in the array.
    for (let i = 0; i < arr.length; i++) {
        // Add the current number to the sum.
        sum = sum + arr[i]; 
    }
    
    // Calculate the average by dividing the sum by the number of elements in the array.
    let average = sum / arr.length;
    
    // Return the calculated average.
    return average;
}

// Call the averager function with the prices array, and assign the result to the variable outcome.
let outcome = averager(prices);

// Log the outcome (the average price) to the console.
console.log(`The average of the array is ${outcome}`);

// Lets round the value for practice fun.
console.log(`The average of the array rounded is ${Math.round(outcome)}`);




/****************************************************** */
/* ******************** QUESTION 3 ******************** */
/****************************************************** */

/* Q3. Create functions that would convert temperature from Celsius to Fahrenheit and Kelvin. Round the result to two decimal places. 

celToFah(37.5);
celToFah(-40);
celToFah(0);
celToFah(100);
celToKel(173.13);
celToKel(-13);
*/


/*
The formulas to convert Celsius to Fahrenheit and Kelvin:

1. Celsius to Fahrenheit:
   The formula to convert Celsius to Fahrenheit is: `(Celsius * 9/5) + 32 = Fahrenheit`.
   For example, if you want to convert 25 degrees Celsius to Fahrenheit, the calculation would be `(25 * 9/5) + 32 = 77`, so 25 degrees Celsius is equal to 77 degrees Fahrenheit.

2. Celsius to Kelvin:
   The formula to convert Celsius to Kelvin is: `Celsius + 273.15 = Kelvin`.
   For example, if you want to convert 25 degrees Celsius to Kelvin, the calculation would be `25 + 273.15 = 298.15`, so 25 degrees Celsius is equal to 298.15 Kelvin.

*/

//Declare a function to convert Celsius to Fahrenheit.
function celToFah (celsius) {
    //Calculate the Fahrenheit value.
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}

function celToKel (celsius) {
    //Calculate the Kelvin value.
    let kelvin = celsius + 273.15;
    return kelvin;
}

// Call the function and assign the result.
//put in test values to test the function
//let Celsius_to_Fahrenheit = celToFah(37.5); //37.5, -40, 0, 100
//let Celsius_to_Kelvin = celToKel(-13); //173.13, -13

//now figure out how to get this value rounded to 2 deciminal places

//Math.round doesn't round to 2 decimal places
//let Celsius_to_Fahrenheit = Math.round(celToFah(37.5)); //37.5, -40, 0, 100
//let Celsius_to_Kelvin = Math.round(celToKel(-13)); //173.13, -13

/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed */

let Celsius_to_Fahrenheit = celToFah(37.5).toFixed(2); //37.5, -40, 0, 100
let Celsius_to_Kelvin = celToKel(-13).toFixed(2); //173.13, -13


// Log the outcome (the average price) to the console.
console.log(`The temperature in Fahrenheit is ${Celsius_to_Fahrenheit}`);
console.log(`The temperature in Kelvin is ${Celsius_to_Kelvin}`);



/****************************************************** */
/* ******************** QUESTION 4 ******************** */
/****************************************************** */

/* Q4. Create a function called pow that gets two values and computes for the power value of the two numbers
pow(2, 3) -> 2 * 2 * 2 -> 8

Note: You can not use Math.pow function. You need to write your own implementation of the function.
*/

//trying to figure out what the question is asking
//The Math.pow() method returns the value of x to the power of y (xy).

//whats the operand for power?
//The exponentiation operator (**) raises the first operand to the power of the second operand.

let value1 = 2;
let value2 = 3;

function pow (value1, value2) {
    let result = value1 ** value2;
    return result;
}

let outcome2 = console.log(`The power value of the two numbers is: ${pow(value1, value2)}`);
