//Write JS code that solve the following problems

//* ************ QUESTION 1   ********* */
//Q1. Using an if-else statement, determine if a number is divisible by 3, by 5, or both.

let q1test = 15;

//to figure out if a number is divsible by another number, use the modulus operator (if no remainder it is divsible)

if (q1test % 3 === 0 && q1test % 5 === 0) {
  console.log(`${q1test} is divisible by 3 and 5`);
} else if (q1test % 3 === 0 || q1test % 5 === 0) {
  console.log(`${q1test} is divisible by 3 or 5`);
} else {
  console.log(`${q1test} is not divisible by 3, by 5, or both`);
}

//* ************ QUESTION 2   ********* */
//Q2. Using an if-else statement, determin is a year is a leap year or not.
//Research what are the conditions to be considered a leap year.

/*  In the Gregorian calendar, a normal year consists of 365 days. Because the actual length of a sidereal year (the time required for the Earth to revolve once about the Sun) is actually 365.2425 days, a "leap year" of 366 days is used once every four years to eliminate the error caused by three normal (but short) years. Any year that is evenly divisible by 4 is a leap year: for example, 1988, 1992, and 1996 are leap years.

However, there is still a small error that must be accounted for. To eliminate this error, the Gregorian calendar stipulates that a year that is evenly divisible by 100 (for example, 1900) is a leap year only if it is also evenly divisible by 400.

For this reason, the following years are not leap years:
1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600

This is because they are evenly divisible by 100 but not by 400.
The following years are leap years: 1600, 2000, 2400
This is because they are evenly divisible by both 100 and 400.
*/

/* LOGIC
Step 1: If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
Step 2: If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
Step 3: If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
Step 4: The year is a leap year (it has 366 days).
Step 5: The year is not a leap year (it has 365 days).
*/

// **** leap years for testing
//1600, 1988, 1992, 1996, 2000, 2400, 2024

// ***** not leap years for testing
// 1999, 1700, 1800, 1900, 2100, 2200, 2300, 2500, 2600

let year = 2200;

if(year % 4 === 0) {
    if (year % 100 === 0  && year % 400 === 0) {
        console.log(`${year} is a leap year`);
    } else {  
        console.log(`${year} is not a leap year`); 
    }
} else {
    console.log(`${year} is not a leap year`); 
}



//* ************ QUESTION 3   ********* */
//Q3. Use a loop to print all the numbers from 1 to 100 that are divisible by 3 or 4.


for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 || i % 4 === 0) {
    console.log(i);
    }
}

