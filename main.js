
let displayedNumber = document.getElementById('result')
//let scope = eval
let lastEntry = null; //Would effecively be a integer / number, not an array with current implimentation

function performOperation(runningTotal, operator, modify){
    if(operator === "+"){
      return Number(runningTotal) + Number(modify);
    }else if(operator === "-"){
      return Number(runningTotal) - Number(modify);
    }else if(operator === "*"){
      return Number(runningTotal) * Number(modify);
    }else if(operator === "/"){
      return Number(runningTotal) / Number(modify);
    }else if(operator === "^" || operator === "**"){
       return Number(runningTotal) ** Number(modify);
     }
  }

//For a learning opportunity, you can create your own math parser to handle basic operations:

function evaluateExpression(expression) {
  // Match numbers and operators
  let runningTotal = null;
  let modify = null;
  let operator = "";
  const tokens = expression.match(/[+\-*/()]|\d+(\.\d+)?/g); //technically a list / js "array" ?
  if (!tokens) return "Error";

  try {
    runningTotal = tokens[0]; //token[0] is a number token[1] is an operator


    for(let i = 1; i < tokens.length; i++){
      if(i % 2 === 0){
        modify = tokens[i];
        runningTotal = performOperation(runningTotal, operator, modify);
      }else{
        operator = tokens[i];
      }
    }
    console.log(typeof runningTotal);
    lastEntry = runningTotal;
    return runningTotal;
    

    
    //if(expression.match === "+"){
    //  return RunningTotal += modify}

    //runningTotal modify  

    //assuming first total = a number
    //operator use the operator 
    //else if - 
    //



    //bedmas () ^ ** / * + - 

    // const orderOfOp = new Map();

    // orderOfOp.set("(", ")", 1);
    // orderOfOp.set("^","**", 2);
    // orderOfOp.set("/","*", 3);


    //match displayedNumber.value with exprrssion.match
    //then perform the evaulation / operation 
    

    // Use a stack-based approach or shunting-yard algorithm (advanced but educational)
  } catch {
    return "Error hey";
  }
}


//appending to our current displayed number

function dis(value) {
  displayedNumber.value += value //displayerNumber is an object therefore has a value. Element is the HTML word for obj
}

function clr() {
  displayedNumber.value = '' //empty string not a number
}


function solve() {
  displayedNumber.value = evaluateExpression(displayedNumber.value);
}



