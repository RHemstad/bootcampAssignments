## Brief

### Lesson Overview

This lesson will be focusing on adding interactivity to webpages using JavaScript. The first part of the lesson will be dealing with how to target and change elements using HTML DOM and JavaScript. The second part of the lesson will be dealing with events which can make the pages interactive.

---

## Part 1 - What is DOM

The Document Object Model (DOM) is an API for manipulating HTML and XML documents. It can represent a document as a tree of nodes.
It provides API functionality that allows you to add, remove, and modify parts of the document effectively.

When a web page is loaded, the browser creates a Document Object Model of the page. The model defines 
- The HTML elements as objects
- The properties of all HTML elements
- The methods to access all HTML elements
- The events for all HTML elements

With the object model, JavaScript gets all the power it needs to create dynamic HTML:

- JavaScript can add / remove / change all the HTML elements and attributes in the page
- JavaScript can change all the CSS styles in the page
- JavaScript can react to all existing HTML events in the page
- JavaScript can create new HTML events in the page

### Creating Elements

With JavaScript, you are able to create HTML dynamically without having to write any code in the HTML files. To do so, you can make use of the following methods:
- document.createElement()
- innerHTML
- innerText

```js
const firstH1Element = document.createElement("h1"); // Create a <h1>
document.body.append(firstH1Element); // Append it to <body>
firstH1Element.innerText = "JS DOM Manipulation"; // Add <h1>inner text</h1>
```

### Selecting Elements

To manipulate elements, you have to first find and select the elements and there are several ways to do so: 
- getElementById() - Targets elements by their ID
- getElementsByClassName() - Targets a group of elements by their class name. The result is an array.
- getElementsByTagName() - Targets a group of elements by their tag name. The result is an array.
- querySelector() - Targets an element or the first elements in a group of elements based on the CSS selector used.
- querySelectorAll() - Targets a group of elements based on the CSS selector used

```html
<h2>About Me</h2>
<p id='p1'>This is a paragraph where I share about me.</p>
<p id='p2'>This is second paragraph where I share about me.</p>
<div id="div1"></div>
<button class='btn'>Contact Me</button>
```

```js
/* 1. Using some standard document.getElement*() functions. */

const h2 = document.getElementsByTagName("h2");
console.log('h2', h2); // Collection
console.log('h2[0]', h2[0]); // The actual h1 element

const p = document.getElementById("p1");
console.log('p',p); // Single HTML Element

const button = document.getElementsByClassName("btn");
console.log('button',button); // Collection

/* 2. Using document.querySelector to return the first occurence. */ 

const firstPara = document.querySelector("p");
console.log('firstPara', firstPara);

const selectP2 = document.querySelector("#p2");
console.log('selectP2', selectP2);

const selectBtn = document.querySelector(".btn");
console.log('selectBtn', selectBtn);
```

### Manipulating Elements

Once the element has been targeted, the attributes can be changed as needed.

```js
/*  Demonstrate changing the HTML content using innerHTML and innerText.
    <p>html content</p>
*/

document.querySelector("#p1").innerText = "<b>This is first paragraph</b>";
document.querySelector("#p2").innerHTML = "<b>This is second paragraph</b>";

```

Note the difference between innerText and innerHTML.

There are other properties and attributes that can be manipulated or set.

```js
const image = document.createElement("img"); 

// Set properties of <img>
image.src = 'https://hbr.org/resources/images/article_assets/2020/05/May20_27_933445788_464881289-2.jpg';
image.width = 300;
image.style.display = 'block';
image.style.marginTop = 10;

// Append it
document.querySelector("#div1").append(image);
```

As seen in the last example, there are different attributes that can be manipulated after the element has been targetted.

---

## Part 2 - JavaScript Event Handling 

Events are "things" that happen to HTML elements. These can arise from user interactions such as using a mouse or resizing a window, changes in the environment, and other causes.

When JavaScript is used in HTML pages, JavaScript can "react" on these events. 

There are many types of events, and many DOM elements can be set up to accept (or "listen" for) these events, and execute code in response to process (or "handle") them. Event-handlers are usually connected (or "attached") to various HTML elements.

Here are some common events encountered in webpages:
1. Click
2. Mouse over/out
3. Key up/down
4. Change (for input forms)

There are two ways of handling events in JavaScript:
1. Event Attributes - attributes that correspond to specific events.
2. Event Listeners - attaches a customizable event handler to specified elements.

### Event Attributes

To execute code when a user performs an action on an element, add JavaScript code to an HTML event attribute:

```html
<button onclick="alert('Hello')">Hello</button>
```

This can also be done using JS code:

Example:
```js
document.getElementById("myBtn").onclick = displayDate;

function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}
```

In the example above, a function named displayDate is assigned to an HTML element with the id="myBtn". Note that the displayDate is a function, however, when using it as a function for events, it is not with () as it won't be immediately invoked.

### Event listeners

Event listeners can be made using the `addEventListener` method. The method attaches an event handler to an element without overwriting existing event handlers.

You can add many event handlers to one element. And you can add many event handlers of the same type to one element, i.e two "click" events.

Syntax:
```
element.addEventListener(event, function, useCapture);
```
The first parameter is the type of the event (like "click" or "mousedown" or any other HTML DOM Event.)

The second parameter is the function we want to call when the event occurs.

The third parameter is a boolean value specifying whether to use event bubbling or event capturing. This parameter is optional.

*Research on event bubbling and event capturing*

Example:
```html
<button id="counter">Click me</button>
    <br/>
<p>You have clicked <span id="result">0</span></p>
```

```js
const counterBtn = document.querySelector("#counter");
const resultSpan = document.querySelector("#result");
let count = 0;

counterBtn.addEventListener("click", function(){
    count++;
    result.innerHTML = count;
})
```

### Mini Exercise: Add another button to reset the value of the counter to 0.

### Form input handling

Form inputs can also have events attached to it. Values in the input can read using the event.target property. The event.target.value allows reading of the value of the input form.

```html
<input type="text" name="name" id="name"/>
<button id="greet">Greet!</button>
```

```js
const inputForm = document.querySelector("#name");
const greetBtn = document.querySelector("#greet");
let nameOutput = "";

inputForm.addEventListener("change", function(event){
    nameOutput = event.target.value;
    console.log(nameOutput);
});

greetBtn.addEventListener("click", function(){
    alert(`Hello ${nameOutput}`);
})
```

---
