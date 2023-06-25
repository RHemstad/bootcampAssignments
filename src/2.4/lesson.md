## Brief

### Lesson Overview

The lesson focuses on functions. The learners will be learning how to create functions with parameters and return statements, as well as calling or invoking the functions with different arguments.

---

## Part 1 - What are functions

Functions are one of the fundamental building blocks in JavaScript. It is a set of statements that performs a task or calculates a value. A function is executed when "something" invokes it (calls it).

Functions are useful as it allows for:
- Code reusability
- Simplifying complex problems

Using functions, a complex problem can be divided into smaller chunks of tasks  making a program easier to understand and reusable.

There are two main types of functions
1. Built-in functions
2. User-defined functions

---

## Part 2 - Built-in functions

JavaScript has a huge number of built-in functions. These functions come with pre-existing JavaScript objects. 

For example, console.log() is a function that prints values to the console.

Another example, Math.sqrt() is a function to calculate the square root of a number.

```js
console.log("Hello World");

let arr1 = ["John", "Paul", "George", "Ringo"];
console.log(arr1.toString());

console.log(Math.sqrt(121));
```

### Mini activity

Research and give at least 10 built-in functions and show simple use cases for each.

---

## Part 3 - User-defined functions

User-defined functions are functions that are created by the developer to achieve specific tasks.

### Declaring a function

Syntax
```
function <name>(<parameter1>, <parameter2>, ...){
    Code to be executed
    Return statement
}
```

- A function is declared using the `function` keyword.
- The basic rules of naming a function are similar to naming a variable. 
- It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, the function name could be *add* or *addNumbers*.
- The body of function is written within {}.

```js
function multiplyNumbers(a, b){
    console.log(a * b);
}
```

### Function parameters

In the function above, `a` and `b` are parameters. They are values that are passed when declaring a function. Think of parameters as inputs that function needs in order to work.

Note that parameters are optional. A function can be declared without any parameters.

### Function return statement

The return statement can be used to return the value to a function call. The value then can be used by other operations and functions.

Change the function declaration to the following:

```js
function multiplyNumbers(a, b){
    return (a * b);
}
```

The function result can then be stored in a varible or used in other operations and functions.

The return statement also denotes the end of a function execution. Any code after return is not executed.

### Function Calls or Invocations

To call a function, use the function name and provide any values as arguments.

```js
console.log(multiplyNumbers(30, 123));

let x = 9;
let y = 7;
let product = multiplyNumbers(x, y);
console.log(`The result of ${x} multiplied by ${y} is ${product}`);
```

*Note: Parameters vs Arguments*

*Function parameters are listed inside the parentheses () in the function definition.*

*Function arguments are the values received by the function when it is invoked.*

--- 

## Part 4 - Object methods

Object methods are functions that are created inside an object. Each method has a key as well an anonymous (function with no name) as its value.

```js
const pet = {
    name: "Cody",
    species: "Dog",
    greet: function(){
        console.log(`Hi, my name is ${this.name}!`);
    },
    eat: function(food){
        console.log(`Thank you! I love eating ${food}`);
    }
}
```

To call an object's method, use the dot notation followed by the desired method.

```js
pet.greet();
pet.eat("Beef");
```