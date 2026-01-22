# Learning Journal

## Date: January 22, 2026

### Topic: Managing Your Repository with `.gitignore`

Today, we took important steps to clean up the `personal-calculator` repository and set up a proper Git workflow. Here's a breakdown of what we did and the key concepts we learned.

### What We Did: A Step-by-Step Recap

1.  **Identified the Problem**: We noticed that the `node_modules` directory was being tracked by Git and was uploaded to GitHub.
2.  **Created `.gitignore`**: We created a `.gitignore` file to tell Git which files and directories to ignore.
3.  **Removed `node_modules` from Git's Tracking**: We ran `git rm -r --cached node_modules` to remove the directory from Git's tracking list without deleting it locally.
4.  **Amended a Commit**: We learned how to use `git commit --amend` to fix a mistake where we forgot to include the new `.gitignore` file in our initial commit.

---

## Date: January 22, 2026

### Topic: Comparing Git Branches

We started exploring how to compare different branches in Git, a crucial skill for understanding project evolution.

### What We Did: Initial Branch Comparison

1.  **Listing Branches**: We used `git branch -a` to list all local and remote branches to get a complete overview of the repository.
2.  **Introducing `git diff`**: We discussed using `git diff <branch1>..<branch2>` as the primary command to see the line-by-line differences between two branches.
3.  **Changing Strategy**: We found that the `diff` output was too large for the terminal, so we smartly switched our strategy to `git checkout manual-parser` to inspect the code directly.

---

## Date: January 22, 2026

### Topic: Analyzing the `manual-parser` Branch

We analyzed the `main.js` file on the `manual-parser` branch and discussed its implementation. This is a summary of our conversation.

#### Tutor's Questions:

1.  **Understanding the Goal**: Based on the modifications in `main.js`, what is the main purpose of the `manual-parser` branch? What specific problem does it solve?
2.  **Order of Operations**: The `evaluateExpression` function now processes operations sequentially. What are the implications for complex expressions like `2 + 3 * 4`?
3.  **Type Coercion**: Why was it important to explicitly convert inputs to `Number()` in the `performOperation` function?

#### Your Insights & Analysis:

*   You recalled that the previous version had errors in the evaluation loop.
*   You correctly identified that the `manual-parser` implements a sequential, left-to-right calculation, like a basic calculator.
*   You astutely pointed out that because of this sequential approach, the parser does not respect the mathematical order of operations (BODMAS/PEMDAS).
*   You also concluded that the best-practice solution for a robust calculator would be to use a dedicated math library, and that the `manual-parser` was primarily a valuable learning exercise.

#### Tutor's Confirmation:

Your analysis is excellent. Building a manual parser is a fantastic way to learn about the complexities of code evaluation, and you've correctly identified both its current functionality (left-to-right calculation) and its major limitation (no order of operations). This understanding is a crucial step in the learning process.
