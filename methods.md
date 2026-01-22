# Calculator Evaluation Methods

This document outlines the different methods we've explored for evaluating mathematical expressions in the calculator, along with their respective advantages and disadvantages.

## Method 1: Using `eval()`

This was the initial approach considered for the calculator.

### How it Works
The `eval()` function is a built-in JavaScript function that takes a string of code as an argument and executes it. For a calculator, you can pass it a string like `"2+3*4"` and it will return the result, `14`.

### Shortfalls
*   **Major Security Risk**: `eval()` can execute *any* JavaScript code, not just mathematical expressions. A malicious user could input code to steal data or harm your application. This is known as a Code Injection vulnerability.
*   **Difficult to Debug**: When things go wrong, debugging `eval()` can be very difficult because the code being executed is dynamic and not part of your original source code.
*   **Performance**: `eval()` is generally slower than other methods because the JavaScript engine has to parse and compile the code at runtime.

## Method 2: Using the `Function` Constructor

This method is a close relative of `eval()` and was considered as a potentially safer alternative.

### How it Works
You can create a new function from a string and then execute it: `new Function('return ' + expression)();`. This creates an anonymous function and immediately calls it.

### Advantages
*   **Slightly Safer Scope**: Unlike `eval()`, which runs in the local scope, code executed by `new Function()` runs in its own, separate scope. This prevents it from automatically accessing your local variables, which can be a minor security benefit.

### Disadvantages
*   **Still a Security Risk**: It can still execute arbitrary code passed into the expression string, making it vulnerable to injection attacks if the input isn't perfectly sanitized.
*   **Performance**: Like `eval()`, it's slower than pre-compiled code.
*   **Content Security Policy (CSP)**: Many modern security policies for websites explicitly disallow `new Function()` (using the `unsafe-eval` directive), making this method unusable in many environments.

## Method 3: Incomplete Manual Parser (`pvt-colab` branch)

This was our first attempt at building a custom evaluation engine.

### How it Works
The goal was to:
1.  Tokenize the input string into a list of numbers and operators.
2.  Loop through the tokens and perform the calculations.

### Shortfalls
*   **Incomplete Implementation**: The logic for processing the tokens and calculating the running total was not fully implemented, leading to errors.
*   **No Order of Operations**: This approach did not account for the mathematical order of operations (BODMAS/PEMDAS).

## Method 4: Sequential Manual Parser (`manual-parser` branch)

This is a more complete version of the manual parser, developed as a learning exercise.

### How it Works
This parser tokenizes the input string and then iterates through the tokens, applying each operation sequentially from left to right.

### Shortfalls
*   **No Order of Operations**: This is the most significant limitation. An expression like `2 + 3 * 4` will be calculated as `(2 + 3) * 4 = 20`, instead of the correct `2 + (3 * 4) = 14`. It behaves like a simple, non-scientific calculator.
*   **No Parentheses Support**: This parser cannot handle grouped expressions using parentheses, like `(2 + 3) * 4`.
*   **Limited Functionality**: It only supports basic arithmetic operations and doesn't have built-in functions like `sin()`, `cos()`, etc.

## Method 5: Using a Purpose-Built Math Library (Best Practice)

This is the recommended approach for a production-ready calculator.

### How it Works
Libraries like `math.js` or `expr-eval` are specifically designed to safely parse and evaluate mathematical expressions. You would typically use them like this:
```javascript
import { evaluate } from 'mathjs';

const result = evaluate('2 + 3 * 4'); // result will be 14
```

### Advantages
*   **Secure**: These libraries are designed to prevent arbitrary code execution and are much safer than `eval()`.
*   **Correct and Robust**: They correctly handle order of operations, parentheses, variables, and a wide range of mathematical functions.
*   **Easier to Implement**: Using a library saves you from the complex and error-prone task of writing your own math parser. It allows you to focus on building the user interface and features of your calculator.
