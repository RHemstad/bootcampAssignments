/*
    You are to use arrow functions for this task.

    Every second, change the background color of <span> according to the elements in `colours` array. The display of color should repeat from the top.

    Hint:
    - Look for interval setting functions.
    - You should use DOM Manipulation to update the style of <div> element.

    Code Challenge:
    - Provide a checkbox "stop". When it is checked, the colour change will not repeat and end at the last element.
*/

//to create a span inside the div use createElement
//to add the span to the div use appendChild
//create function to change the background color of the span according to the elements in the array
//use setInterval to change the background color of the span every second
//use DOM Manipulation to update the style of the div element



const div = document.querySelector("div");
const span = document.createElement("span");

div.appendChild(span);
let i = 0; //initialize a counter variable i to 0.

//******************************* */
//**** FUNCTION CHANGECOLOR  *****/
//******************************* */

const changeColor = () => {
	//change the background color of the span to a color specified by the value property of the i-th element of the colours array. 
	span.style.backgroundColor = colours[i].value;
	i++; //increment i by 1 each time changeColor is called.

	//check if i is equal to the length of the colours array, reset i back to 0. This allows the array loop
	if (i === colours.length) {
			i = 0;
	}
};

//Call the changeColor function every 1000 milliseconds (or 1 second) and store it in intervalId
//let intervalId = setInterval(changeColor, 1000); //commented out because I don't want the color to change automatically when the page loads

let intervalId = null;  // initialize intervalId as null


//******************************* */
//**** START AND STOP BUTTONS  *****/
//******************************* */

let start = document.querySelector("button[id=start]");
start.addEventListener("click", () => {
	 intervalId = setInterval(changeColor, 1000);
});

let stop = document.querySelector("button[id=stop]");
stop.addEventListener("click", () => {
	 clearInterval(intervalId); 
});

//******************************* */
//**** CHECKBOX  *****/
//******************************* */
//todo: end at the last element in array

let checkbox = document.querySelector("input[id=toggleSwitch]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
    //console.log("Checkbox is checked..");
	intervalId = setInterval(changeColor, 1000);
  } else {
    //console.log("Checkbox is not checked..");
	clearInterval(intervalId);
			intervalId = null;
  }
});


const colours = [
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];