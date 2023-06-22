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

//adding the event listeners to the buttons
//creating an anonymous function to pass the operation operator as a parameter to the doMath function
additionBtn.addEventListener("click", function () {
  doMath("addition");
});
subtractionBtn.addEventListener("click", function () {
  doMath("subtraction");
});
multiplicationBtn.addEventListener("click", function () {
  doMath("multiplication");
});
divisionBtn.addEventListener("click", function () {
  doMath("division");
});
moduloBtn.addEventListener("click", function () {
  doMath("modulo");
});

// **** CREATE THE FUNCTION ****

function doMath(operation) {
  /* get the values from the input fields */
  let num1 = parseInt(firstNumber.value);
  let num2 = parseInt(secondNumber.value);

  /* check if the values are numbers */
  if (isNaN(num1) || isNaN(num2)) {
    result.innerHTML = "Please enter valid numbers";
  } else {
    /* do the math */
    switch (operation) {
      case "addition":
        result.innerHTML = num1 + num2;
        break;
      case "subtraction":
        result.innerHTML = num1 - num2;
        break;
      case "multiplication":
        result.innerHTML = num1 * num2;
        break;
      case "division":
        if (num2 !== 0) {
          // prevent division by zero so result is not NaN
          result.innerHTML = num1 / num2;
        } else {
          result.innerHTML = "Error: Division by zero";
        }
        break;
      case "modulo":
        if (num2 !== 0) {
          // prevent division by zero so result is not NaN
          result.innerHTML = num1 % num2;
        } else {
          result.innerHTML = "Error: Division by zero";
        }
        break;

      default:
        result.innerHTML = "Please enter valid numbers";
        break;
    }

    return result.innerHTML;
  }
}
