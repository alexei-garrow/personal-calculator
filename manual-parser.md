# Understanding the Manual Parser: A Line-by-Line Guide

This document breaks down the `main.js` file from the `manual-parser` branch to explain how it works, piece by piece.

## Global Scope: Connecting to the HTML

```javascript
let displayedNumber = document.getElementById('result');
```

*   **Purpose**: This is the crucial link between our JavaScript code and the HTML page.
*   **How it Works**:
    *   `document`: This is a built-in JavaScript object that represents our entire HTML page. It's the entry point to interacting with the page's content, an API called the **DOM** (Document Object Model).
    *   `.getElementById('result')`: This is a method that searches the HTML document for any element with the unique `id` of "result". In our `index.html`, this is the `<input>` tag that serves as the calculator's screen.
    *   By storing this element in the `displayedNumber` variable, we create a reusable reference. Now, anytime we need to read from or write to the calculator's screen, we can simply use this `displayedNumber` variable.

## The `evaluateExpression` Function

This function is the heart of our calculator's logic. It takes a string like `"10+5*2"` and calculates the result.

### Step 1: Tokenization

```javascript
const tokens = expression.match(/[+\-*/()]|\d+(\.\d+)?/g);
```

*   **Purpose**: To break the raw input string into a structured list (an array) of its individual components: numbers and operators. This process is called **tokenization**.
*   **How it Works**:
    *   `.match()`: This is a string method that finds all parts of the string that match a given pattern.
    *   `/[...]/g`: This is a **Regular Expression** (or "regex"), a special pattern for matching text. The `/g` at the end means "global," telling it to find *all* matches, not just the first one.
    *   **The Pattern**: `[+\-*/()]|\d+(\.\d+)?`
        *   The `|` acts like an "OR". It looks for things that match the pattern on its left OR the pattern on its right.
        *   `[+\-*/()]`: Matches any single operator or parenthesis character.
        *   `\d+(\.\d+)?`: Matches a full number, including decimals. It looks for one or more digits (`\d+`), optionally followed by a decimal point and more digits.
*   **Example**: For an input of `"10+5*2"`, the `tokens` array will be `['10', '+', '5', '*', '2']`.

### Step 2: The Calculation Loop

```javascript
  try {
    runningTotal = tokens[0]; // Initialize with the first number

    for(let i = 1; i < tokens.length; i++){
      if(i % 2 === 0){ // Even indices are numbers
        modify = tokens[i];
        runningTotal = performOperation(runningTotal, operator, modify);
      }else{ // Odd indices are operators
        operator = tokens[i];
      }
    }
    return runningTotal;
```

*   **Purpose**: To process the `tokens` array and calculate a final result.
*   **How it Works**:
    1.  **Initialization**: It assumes the first token (`tokens[0]`) is always a number and sets it as the initial `runningTotal`.
    2.  **Iteration**: It then loops through the rest of the tokens, starting from the second token (`i = 1`).
    3.  **Pattern Matching**: It uses the `i % 2 === 0` logic to enforce a strict `number, operator, number, operator...` pattern.
        *   If the index `i` is **odd** (1, 3, 5, ...), it assumes the token is an `operator` and stores it.
        *   If the index `i` is **even** (2, 4, 6, ...), it assumes the token is a number (`modify`), and immediately calls the `performOperation` function with the stored `runningTotal`, `operator`, and the new `modify` number. The result is then saved back into `runningTotal`.
    4.  **Return**: After the loop finishes, the final `runningTotal` is returned.
*   **Key Insight**: As you correctly deduced, this simple loop structure is what causes the calculator to evaluate expressions strictly from left to right, without considering the mathematical order of operations (BODMAS/PEMDAS).

## Tying it all Together: `solve()` and `clr()`

These functions connect our parser logic to the user's actions.

### The `clr()` Function

```javascript
function clr() {
  displayedNumber.value = ''
}
```
*   **How it Works**: This function directly sets the value of the calculator's screen to an empty string.
*   **Key Insight**: As you correctly deduced, this works by clearing the *source* of the tokens. The `tokens` array doesn't exist until `evaluateExpression` is called, so by clearing the display, you ensure that the next time `solve()` is triggered, there's nothing to parse.

### The `solve()` Function & History

```javascript
function solve() {
  displayedNumber.value = evaluateExpression(displayedNumber.value);
}
```
*   **How it Works**: When the user hits the `=` button, this function is called. It reads the expression from the display, sends it to `evaluateExpression()` for calculation, and then updates the display with the returned result.
*   **Storing vs. Using History**: Your implementation, `let lastEntry = runningTotal;`, successfully *stores* the last result in a variable. As you astutely noted, this is only the first half of the feature. The next challenge, which you can tackle next time, is to figure out how to *use* that stored value, for example, by creating an "Ans" button that appends the `lastEntry` value to the display.
