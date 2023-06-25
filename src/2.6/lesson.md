## Brief

### Lesson Overview

This lesson describes some of the most important features of ES6.

---

## Part 1 - JavaScript ES6

ECMAScript 2015 was the second major revision to JavaScript. ECMAScript 2015 is also known as ES6 or ECMAScript 6.

Some of the important features of ES6 are:
- let and const
- Spread operator
- Rest parameter
- Arrow functions
- Iterators

This list is not exhaustive as there are more features that ES6 added.

---

## Part 2 - Spread Operator and Rest parameter

### Spread Operator
Spread Operator (...) is used to expand or spread an iterable or an array.

```js
const nameArray = ["My", "name", "is", "Brandon"];
console.log(nameArray);
console.log(...nameArray);
```

It can also be used copy array and object values.

```js
const names1 = ["Kelly", "Mary", "Larry"];
const names2 = ["Keith", "Mary", "David"];
const mergedNames = [...names1, ...names2];
console.log('new array', mergedNames);
//Note how Mary is repeated


const item = {
    id:1,
    name:"Apple",
    price:0.55,
};

const itemDetails = {
    id:2, 
    color:"Red",
    weight:0.1
};

const combined = {...item, ...itemDetails};
console.log("new object", combined);
//Note how id becomes 2
```

The spread operator can also be used in function arguments:

```js
function sum (num1, num2, num3){
    console.log('parameters value', num1, num2, num3);
}

const nums = [1,2,3];

sum(...nums);
```

### Rest Parameter

The spread operator can be used in a function parameter, it is known as the rest parameter

It allows functions to take in multiple arguments, and all arguments will be passed into the function as array elements.

```js
function concat (...strings){
    for(let item of strings){
        console.log(`This is ${item}`);
    }
}

concat("apple", "orange", "banana");
concat("singapore", "malaysia", "indonesia", "thailand", "myanmar");
```

---

## Part 3 - Array and Object Destructuring

The destructuring assignment allows assigning of array values and object properties to distinct values

### Array destructuring

Before ES6, you need to get the individual values of arrays and manually assign them to each variable.

Example:
```js
//No need to put in index.js
const arrValue = [1, 2, 3];

let a = arrValue[0];
let b = arrValue[1];
let c = arrValue[2];

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

But with array destructuring, an array of variables can be made to match the content and each variable can be used:

```js
const arrValue = [1, 2, 3];

// destructuring assignment in arrays
const [a, b, c] = arrValue;

console.log(a); // 1
console.log(b); // 2
console.log(c); // 3
```

Object destructuring can also be done to take specific keys of the object.

```js
let person = {
 name: "Brandon",
 age: 29,
 gender: "Male",
};

// destructuring assignment
let { name, age, gender } = person;

console.log(name); // Brandon
console.log(age); // 29
console.log(gender); // Male
```
Note: The order of the name does not matter in object destructuring. You can also choose to omit values that you do not require. 

The spread operator can also be used for the other values as needed.

---

## Part 4 - Arrow functions

Arrow function allows creation of functions in a cleaner way / shorter syntax compared to function expression.

```js
const printSomethingArrow = (msg) => {
    console.log(msg);
    return true;
}
printSomethingArrow("Hello from arrow function");
```

Compare and contrast the function expression way vs the arrow function way of writing functions.

```js
function printSomething(msg){
    console.log(msg);
    return true;
}
printSomething("print something");
```

### Arrow function shorthands

Shorthands can be done for arrow functions

1. Functions containing only one parameter
```js
const print = msg => {
    console.log(msg);
}
print("a message");
```

2. Functions with one-line for return statement
```js
const produce = () => ("producing");
console.log(produce());
```

---

## Part 5 - Iterators and Array methods

ES6 introduces several iterators for objects and arrays

1. forEach - calls a function (a callback function) once for each array element.
2. For-in - loops through the properties/ keys of an Object
3. For-of - loops through the values of an iterable object.

### forEach method

The forEach iterator runs through the array and applies a function to each of the elements of the array.

```js
const numbers = [1, 2, 3, 4, 5];

numbers.forEach((val) => {
 console.log(val*2);
});
```

### For-of loop

For-of - loops through the values of an iterable object (ex. arrays)

```js
for (num of numbers) {
 console.log(num);
}
```

### For-in loop

For-in - loops through the properties/ keys of an Object
```js
for (key in person) {
 console.log(key);
}
```

### Array methods

There are some array methods that can be useful when working with arrays.

1. map()
2. filter()

The list is not exhaustive and there are more functions in the documentation.

### Array map

The map method creates a new array by performing a function on each array element. It does not execute the function for array elements without values and does not change the original array.

```js
const sampleArr1 = [45, 4, 9, 16, 25];
const sampleArr2 = sampleArr1.map((value) => {
    return value * 3;
});

console.log(sampleArr2);
```

### Array filter

The filter method creates a new array with array elements that pass a condition.

```js
const sampleArr3 = sampleArr1.filter((value) => {
    return value > 10;
})
console.log(sampleArr3);
```

---