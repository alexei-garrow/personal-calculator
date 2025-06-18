# Things to add:

1.	Implement a safe evaluation method (Function constructor or mathjs library).
2.	Add a history cache to track calculations dynamically.
3.	Consider more advanced styling or animations to enhance user experience.


How to Safely Replace eval()
The main goal of eval() in your code is to parse and evaluate mathematical expressions. A safer alternative is to write a simple parser or leverage JavaScript safely.
Here’s how you can achieve this:
________________________________________
~~1. Use the Function Constructor for Math Only
The Function constructor can evaluate math expressions without executing arbitrary code:
function safeEvaluate(expression) {
  // Replace invalid characters (only allow numbers, operators, and decimals)
  const sanitizedExpression = expression.replace(/[^0-9+\-*/().]/g, "");
  try {
    return Function(`"use strict"; return (${sanitizedExpression})`)();
  } catch {
    return "Error"; // Handle invalid expressions gracefully
  }
}
Replace your solve() function with:
function solve() {
  displayedNumber.value = safeEvaluate(displayedNumber.value);
}~~
•	Why This is Safer: 
o	Only numbers, operators, and valid math symbols are allowed.
o	Malicious or unexpected strings like alert('Hacked!') are sanitized.
________________________________________
2. Using a Pre-built Library for Calculations
To avoid building your own parser, you can use a library like mathjs, which is specifically designed for safely evaluating mathematical expressions:
1.	Install mathjs using npm or include it via CDN: 
2.	<script src="https://cdn.jsdelivr.net/npm/mathjs/lib/browser/math.min.js"></script>
3.	Update your solve() function: 
4.	function solve() {
5.	  try {
6.	    displayedNumber.value = math.evaluate(displayedNumber.value);
7.	  } catch (e) {
8.	    displayedNumber.value = "Error";
9.	  }
10.	}
•	Why Use a Library? 
o	It supports more advanced operations (e.g., trigonometry, logarithms).
o	It’s already optimized for safety and correctness.
________________________________________
3. Implementing a Manual Parser
For a learning opportunity, you can create your own math parser to handle basic operations:
function evaluateExpression(expression) {
  // Match numbers and operators
  const tokens = expression.match(/[+\-*/()]|\d+(\.\d+)?/g);
  if (!tokens) return "Error";

  try {
    // Use a stack-based approach or shunting-yard algorithm (advanced but educational)
    // Evaluate tokens here
    return calculateTokens(tokens); // Custom function
  } catch {
    return "Error";
  }
}
This is more complex but gives you full control over how expressions are evaluated.
________________________________________
Dynamic Display & Cache
Your idea of showing the ongoing calculation and a cache of previous calculations is great! Here’s how to implement it:
1. Displaying Ongoing Calculation
You already have this functionality in your dis() function:
function dis(value) {
  displayedNumber.value += value; // Appends value to the screen
}
2. Adding a History Cache
You can store completed calculations in an array and display them:
let history = [];

function solve() {
  const result = safeEvaluate(displayedNumber.value);
  if (result !== "Error") {
    history.push(`${displayedNumber.value} = ${result}`);
    updateHistoryDisplay();
  }
  displayedNumber.value = result;
}

function updateHistoryDisplay() {
  const historyElement = document.getElementById("history");
  historyElement.innerHTML = history.map(entry => `<p>${entry}</p>`).join("");
}
Add this to your HTML for displaying history:
<div id="history" style="margin-top: 20px; color: white;"></div>
