/*Q1: 
1. Create an array called grades and put the following values: 56, 87, 99, 40
2. Add another element at the end of the array with value: 68
3. Remove the 1st element of the array
4. Change 40 to 60.
5. Create a variable called average and compute for the average of the grades array.
    Tip: you can create another variable as a placeholder for the sum first.
*/

//note: I'm also watching the javascript course at frontend masters and there was a section on mutable and immutable data types.
//it was recommended to use const for arrays

const grades = [56, 87, 99, 40]; //create array
grades.push(68); //adds to end of array
grades.shift(); //removes first element of array
console.log(grades.indexOf(40)); //determine the index of 40
grades[2] = 60; //change 40 to 60

let average; //placeholder for average
let sum = 0; //placeholder for sum

//make a loop to add all the grades together
for (let i = 0; i < grades.length; i++) {
  sum += grades[i];
}

average = sum / grades.length; //calculate average
console.log(average);

/*Q2:
1. Create an object called vehicle with following properties:
    a. name (String)
    b. brand (String)
    c. year of make (Number)
    b. number of wheels (Number)
    e. isEnvironmentFriendly (Boolean)
Feel free to put any value.
2. Use the for-in loop to display both the properties and values of the object.
*/

let vehicle = {
  name: "car",
  brand: "toyota",
  yearOfMake: 2010,
  numberOfWheels: 4,
  isEnvironmentFriendly: false,
};

for (let prop in vehicle) {
  console.log(`${prop}: ${vehicle[prop]}`);
}
