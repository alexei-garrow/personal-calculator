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

//eval() method? Can add a string together?!?

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



*/
