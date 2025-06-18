//use eval() so we don't do the calculations ourselves
//Getting the string out of the calculator, displaying
//going to need 2 variables
//be able to type and or use the buttons.

let displayedNumber = document.getElementById('result')
let scope = eval

function safeEvaluate(expression) {
  // Replace invalid characters (only allow numbers, operators, and decimals)
  const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, "");
  try {
    return Function(`"use strict"; return (${sanitizedExpression})`)();
  } catch {
    return "Error"; // Handle invalid expressions gracefully
  }
}

//appending to our current displayed number

function dis(value) {
  displayedNumber.value += value //displayerNumber is an object therefore has a value. Element is the HTML word for obj
}

function clr() {
  displayedNumber.value = '' //empty string not a number
}

// function solve() {
//   //needs to use scope and apply eval to each dis / value press.
//   try {
//     displayedNumber.value = scope(displayedNumber.value)
//   } catch (e) {
//     displayedNumber.value = 'error no letters you fool!'
//   }
// }

function solve() {
  displayedNumber.value = safeEvaluate(displayedNumber.value);
}


//try and do the typed letter function!

