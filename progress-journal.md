# Learning Journal

## Date: January 22, 2026

### Topic: Managing Your Repository with `.gitignore`

Today, we took important steps to clean up the `personal-calculator` repository and set up a proper Git workflow. Here's a breakdown of what we did and the key concepts we learned.

### What We Did: A Step-by-Step Recap


1.  **Identified the Problem**: We noticed that the `node_modules` directory was being tracked by Git and was uploaded to GitHub.
2.  **Created `.gitignore`**: We created a `.gitignore` file to tell Git which files and directories to ignore.
3.  **Removed `node_modules` from Git's Tracking**: We ran `git rm -r --cached node_modules` to remove the directory from Git's tracking list without deleting it locally.
4.  **Amended a Commit**: We learned how to use `git commit --amend` to fix a mistake where we forgot to include the new `.gitignore` file in our initial commit.
=======
1.  **Identified the Problem**: We noticed that the `node_modules` directory was being tracked by Git and was uploaded to GitHub. This is not ideal because this directory can be very large and is not part of the project's source code.
2.  **Created `.gitignore`**: We created a `.gitignore` file in the project's root directory. This file tells Git which files and directories to ignore.
3.  **Removed `node_modules` from Git's Tracking**: We ran the command `git rm -r --cached node_modules`. This command removed the `node_modules` directory from Git's tracking list (the "index" or "staging area") without deleting the files from our local machine.
4.  **Committed the Changes**: We committed our changes, intending to finalize the process.
5.  **Spotted and Fixed a Mistake**: We realized the new `.gitignore` file wasn't included in the commit! This is a common mistake.
6.  **Amended the Commit**: To fix this, we first staged the new file with `git add .gitignore`, and then used `git commit --amend --no-edit` to add it to our last commit without changing the commit message.

### Key Concepts & Commands Explained

#### The `.gitignore` file

This is a simple text file that tells Git which files and folders it should not track. It's essential for keeping your repository clean and avoiding committing large, unnecessary, or sensitive files.

#### `git rm -r --cached node_modules`

This command might look complex, but it's doing something very specific and useful. Let's break it down:
*   `git rm`: The command to remove files from Git.
*   `-r`: Stands for "recursive". It's needed to remove a whole directory.
*   `--cached`: This is the most important part. It tells Git to only remove the file from its **index** (also known as the staging area), but to **leave the file in your working directory**.

**What does this mean?**

To understand `--cached`, it helps to know that Git has three main "areas":

1.  **Working Directory**: The folder on your computer where you edit your files.
2.  **Staging Area (Index)**: A "waiting room" where you put changes you want to include in your next commit. You use `git add` to move files here.
3.  **Repository (`.git` directory)**: The permanent history of your project, made up of all your commits.

By using `--cached`, we told Git: "Stop tracking `node_modules` and remove it from the staging area, but don't delete it from my computer, because I still need it to run my project." After we did this, the `.gitignore` file prevents Git from accidentally tracking it again.

#### `git commit --amend`

This command is a powerful tool for fixing mistakes in your last commit. It lets you "amend" or change the most recent commit. In our case, we used it to add the `.gitignore` file that we forgot.

*   `--no-edit`: This option tells Git to amend the commit without opening an editor to change the commit message.

It's a great way to fix small mistakes before you push your changes to a remote repository like GitHub.


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

Today, we started exploring how to compare different branches in Git, a crucial skill for understanding project evolution and collaborating effectively.

### What We Did: Initial Branch Comparison

1.  **Listing Branches**: We began by using `git branch -a` to list all local and remote branches. This helped us confirm the existence and names of the branches we wanted to compare (`pvt-colab` and `manual-parser`).
    *   **Command**: `git branch -a`
    *   **Purpose**: Shows all local branches (without `remotes/`) and all remote-tracking branches (starting with `remotes/`). This gives you a complete overview of your repository's branch structure.

2.  **Introducing `git diff`**: We discussed using `git diff <branch1>..<branch2>` as the primary command to see the differences between two branches. This command highlights additions, deletions, and modifications to files and lines of code.
    *   **Command**: `git diff manual-parser` (when on `pvt-colab` branch, this compares `pvt-colab` with `manual-parser`)
    *   **Purpose**: Displays the line-by-line differences between the specified branches. Lines starting with `+` are additions, and lines starting with `-` are deletions. This is invaluable for understanding how code has evolved between different development paths.

### Next Steps

We are now ready for you to run the `git diff manual-parser` command. We will then analyze its output together to understand the specific code changes between your `pvt-colab` and `manual-parser` branches.

