// ParseInt() is a built-in function in JavaScript that converts a string to an integer.
// ***** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt *****

//NAN is a property of the global object. The initial value of NaN is Not-A-Number
// 0/0 is NaN
// **** https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN ****

// **** DECLARE THE VARIABLES ****

/* get/set the input contents */
let firstNumber = document.querySelector("#firstNumber");
let secondNumber = document.querySelector("#secondNumber");

/* get/set the buttons info */
let additionBtn = document.querySelector("#addition");
let subtractionBtn = document.querySelector("#subtraction");
let multiplicationBtn = document.querySelector("#multiplication");
let divisionBtn = document.querySelector("#division");
let moduloBtn = document.querySelector("#modulo");

/* this is going to be our outcome value */
let result = document.querySelector("#result");

// **** USE THE EVENT LISTENERS ****

/* addition */
additionBtn.addEventListener("click", addition);
subtractionBtn.addEventListener("click", subtraction);
multiplicationBtn.addEventListener("click", multiplication);
divisionBtn.addEventListener("click", division);
moduloBtn.addEventListener("click", modulo);

// **** CREATE THE FUNCTIONS ****

/* addition */
function addition() {
  /* if u dont use parseInt, it will concatenate the numbers instead of adding them */
  let num1 = parseInt(firstNumber.value);
  let num2 = parseInt(secondNumber.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.innerHTML = "Please enter valid numbers";
  } else {
    result.innerHTML = num1 + num2;
  }
  return result.innerHTML;
}

/* subtraction */
function subtraction() {
  let num1 = parseInt(firstNumber.value);
  let num2 = parseInt(secondNumber.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.innerHTML = "Please enter valid numbers";
  } else {
    result.innerHTML = num1 - num2;
  }
  return result.innerHTML;
}

/* multiplication */
function multiplication() {
  let num1 = parseInt(firstNumber.value);
  let num2 = parseInt(secondNumber.value);
  if (isNaN(num1) || isNaN(num2)) {
    result.innerHTML = "Please enter valid numbers";
  } else {
    result.innerHTML = num1 * num2;
  }
  return result.innerHTML;
}

/* division */
function division() {
  let num1 = parseInt(firstNumber.value);
  let num2 = parseInt(secondNumber.value);

  if (num2 !== 0) {
    // prevent division by zero so result is not NaN
    result.innerHTML = num1 / num2;
  } else {
    result.innerHTML = "Error: Division by zero";
  }
  return result.innerHTML;
}

/* modulo */
function modulo() {
  let num1 = parseInt(firstNumber.value);
  let num2 = parseInt(secondNumber.value);
  if (num2 !== 0) {
    // prevent division by zero so result is not NaN
    result.innerHTML = num1 % num2;
  } else {
    result.innerHTML = "Error: Division by zero";
  }
  return result.innerHTML;
}
