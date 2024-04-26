//create a variable entries (they've used an array) I'm guessing this is where we type things to be
//calculated.

//There is a variable for the total, they've used a 0;

//A temporary variable string? $ ? is a concatonation, insert a piece of script.
//This has has a onclick, text insert function. Creates intteractivity

//This next bit grabs a number and adds it to the temp, checks via an if and a === for '.' does this mean decimal number?
//It then concatonates. Maybe if decimal do this, otherwise reset? So maybe
//It's like if it's a number not sure on the "." else clear / reset
//We are making buttons on the calculator.
//So the next one is the CE button //clear last entry. Take you back one.

//eval() method? Can add a string together?!? Seems to be something that will stop being a thing soon.

//They then change the multiply symbol to work with the eval method?>

//The same with divide

//Create the equals '=' button? Seems like a for loop something like this, taken from
//stack overflow:
// var operators = {
//   '+': function(x, y) { return x + y; },
//   '-': function(x, y) { return x - y; },
//   '*': function(x, y) { return x * y; },
//   '/': function(x, y) { return x / y; }
//};
//
//
//Under this swap the - symbol so it handles correctly?

//answer entry, a new blank array and a temp

//else push number to temp and val (with a new empty temp string)

//Math.abs should be super useful

//This outline is like one giant function? We could make smaller ones..

/* 
a variable to hold an array 
let temp = [] //what date type should we use?
a variable to hold the sum of an array
const sum = [] //SImilar question with this one?
//or
const sum = ; //define it later?

//could do like:

function addition(num1, num2) {
  return num1 + num2
}

function multiply(num1, num2) {
  return num1 * num2
}

function subtract(num1, num2) {
  return num1 - num2
}

function divide(num1, num2) {
  return num1 / num2
  //return num1 + num2 //???
}

//example some ai help to finish the example.
function performOperation(num1, num2, operator) {
    if (operator === '+') {
        return num1 + num2;
    } else if (operator === '-') {
        return num1 - num2;
    } else if (operator === '*') {
        return num1 * num2;
    } else if (operator === '/') {
        if (num2 !== 0) {
            return num1 / num2;
        } else {
            return 'Error: Division by zero';
        }
    } else {
        return 'Invalid operator';
    }
}


/*
let one = docutment.getElementById('one')
one = performOperation()

//Or should we put these all in one function?

variable to create interactivity for user to use 
virtual calculator

if statement ( if val is a number and/or val is exactly equal to a decimal
 to allow for numerals and decimal points)

 "else if (val === 'AC') {
    entries = [];
    temp = '';
    total = 0;
    $("#answer").val('')"

  creates a reset button 'AC' which resets values of variables to base line


  else if (val === 'CE') {
    temp = '';
    $("#answer").val('')

  creates a virtual 'CE' that resets to last displayed input 
  if val is absolutely equal to CE then the temp variable is reset to baseline
  Jquery sets "answer" element  to hold a clear string. 

  else if (val === 'x') {
    entries.push(temp);
    entries.push('*');
    temp = '';

    creates a functional 'X' button for multiplications (*) which by use of the 
    .eval()  method can interact with numerals held as a string.

   else if (val === '÷') {
    entries.push(temp);
    entries.push('/');
    temp = '';

    creates a functional "division" button which uses the eval() method to interacts
    with numerals within a string

  else if (val === '=') {
  	entries.push(temp);

    var nt = Number(entries[0]);
    for (var i = 1; i < entries.length; i++) {
      var nextNum = Number(entries[i+1])
      var symbol = entries[i];
      
      if (symbol === '+') { nt += nextNum; } 
      else if (symbol === '-') { nt -= nextNum; } 
      else if (symbol === '*') { nt *= nextNum; } 
      else if (symbol === '/') { nt /= nextNum; }
      
      i++;

    if the value string is equal to "=" the array held within the 'entries' variable will have 
    temp  string pushed into it. 

    evaluates arithmetic operations based on input stored in the 'entries' variable array.

    
     if (nt < 0) {
      nt = Math.abs(nt) + '-';
    }
    
    $("#answer").val(nt);
		entries = [];
    temp = '';
    
  // Push number
  } else {
    entries.push(temp);
    entries.push(val);
    temp = '';
  }
});
    
    */

/* 
Calculator JS
*/

/*
let entries [];
let total = 0;
let temp = ''

const screen = (value) =>
{document.getElementById("screen").value = value;}

const clearCalc = () => {
  let entries [];
  let total = 0;
  let temp = ''
}

/*let display = document.getElementById("screen")

*/

/*let display = document.getElementById('screen')
let button = document.getElementsByTagName('button')

Array.from(button).foreach((elem) => {
  elem.addEventListener('click', calculate)
})
/*
/*
variable to create interactivity for user to use 
virtual calculator

if statement ( if val is a number and/or val is exactly equal to a decimal
 to allow for numerals and decimal points)
 
creates a reset button 'AC' which resets values of variables to base line
   
creates a virtual 'CE' that resets to last displayed input 
if val is absolutely equal to CE then the temp variable is reset to baseline
Jquery sets "answer" element  to hold a clear string. 

creates a functional 'X' button for multiplications (*) which by use of the 
.eval()  method can interact with numerals held as a string.

creates a functional "division" button which uses the eval() method to interacts
with numerals within a string

if the value string is equal to "=" the array held within the 'entries' variable will have 
temp  string pushed into it. 

evaluates arithmetic operations based on input stored in the 'entries' variable array.




IDEAS????
Joel: want to have the buttons of calculator react to user input (clicks) and pass their values to the "display", then have the '=' button act as catalyst
for mathematical operations to be calculated. Have the AC button act as a reset, which wil discard all input. Use CE to regress "one stage" to previous state of user input.#answer

1. ensure that buttons are fully functional via use of Jscript functions.
2. have variables declared globally to store entries [], to store calculated totals = 0 & to store temporary collections of inputs 
  (the values to be stored during mathematical calculations as a string, allows use if CE etc. (? is that correct) )
3. Create functions to handle these variables and apply mathematical methods to them when user uses '='  sign and then return requested output to 'screen' 
4. since the values will be calculated through the temp string, will need a function to deconstruct the string into its parts.
5. will then need function to calculate (in correct order) these deconstructed parts of string into meaningful & correct output array [?] (would we use the .map function?)

Button functionality:

function buttonClick takes a value:
 if val is a number or a decimal point:
 if (!NaN)
 If val is !NaN (a number) or val is a '.' decimal point:
 Add val to the end of Temp '' 
 Update the display with value of temp ''



create a function to go through the temp string and evaluate its seprate factors, either numerals or operators, then correctly handle the matematics according to the operators identified?

*/
let entries = []
let total = 0
let temp = ''

function handleVariables(value) {
  if (value === '=') {
    entries.push(temp)
    total = evaluateExpression(entries) + displayResult(total)
    entries = []
    temp = ''
  } else {
    temp += value //(displayInput temp)
  }
  displayInput(temp)
}

document.querySelectorAll('button').forEach((button) => {
  button.addEventListener('click', function () {
    handleVariables(this.value)
  })
})

function displayInput(input) {
  document.getElementById('screen').value = input
}

function displayResult() {
  document.getElementById('screen').value = total
}

const clearButton = document.getElementById('clearButton') //Helped by ai
clearButton.addEventListener('click', clearInput)

function clearInput() {
  //Helped by ai
  // Reset any relevant variables (e.g., temp, entries, total)
  temp = ''
  entries = []
  total = 0
  displayInput('') // Clear the input display
}

/*
function evaluateExpression(entries) {
  // Implement the calculation logic here
  math.add(x, y) //: Add two numbers.
  Math.subtract(x, y) //: Subtract y from x.
  Math.multiply(x, y) //: Multiply two numbers.
  Math.divide(x, y) //: Divide x by y.
  Math.sqrt(x)

  // Return the calculated result
  //return
}

/*function clear() {
  let ac = document.getElementById('ac')
  let clear = value || total
  ac = clear
  if (value || total != '') {
    return 0
  } else {
    return 0
  }
}
*/

//clear()

/*function clear() {
  if (value === 'AC') {
    entries = []
    temp = ''
    total = 0
  }
}
*/

/*function clear() {
  document.getElementById('screen').reset()
}

clear()
*/
//Typing number state.
//When you move into operator state. Accumlator or previous result
//Next state = ( maybe clear or AC)

//state importance!

//Previous or left hand side. RHS right hand side, you're always typing into rhs.
//Switch case

//const buttons = document.querySelectorAll('button')

/*function interface(button) {
  let button = buttons
  buttons = interface
  if (id === 'nine') {
    return '9'
  } else if (id === 'eight') {
    return '8'
  } else if (id === 'seven') {
    return '7'
  } else if (id === 'six') {
    return '6'
  } else if (id === 'five') {
    return '5'
  } else if (id === 'four') {
    return '4'
  } else if (id === 'three') {
    return '3'
  } else if (id === 'two') {
    return '2'
  } else if (id === 'one') {
    return '1'
  } else id === 'zero'
  {
    return '0'
  }
}

/*  
const seven = document.getElementsById('seven')
function sevenClick () {
  return = seven + '7'
}

element.addEventListener('click', seven , false); //The false seems to link to listener reacts bubbling :https://www.w3.org/TR/DOM-Level-3-Events/#event-flow
//https://stackoverflow.com/questions/6348494/addeventlistener-vs-onclick
*/
