# Learning Journal

## Date: January 22, 2026

### Topic: Managing Your Repository with `.gitignore`

Today, we took important steps to clean up the `personal-calculator` repository and set up a proper Git workflow. Here's a breakdown of what we did and the key concepts we learned.

### What We Did: A Step-by-Step Recap

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
---

## Date: January 22, 2026

### Topic: Analyzing the `manual-parser` Branch

- **The Goal**: To understand the implementation of the manual parser.
- **Your Insights**:
    - You correctly identified that the parser works sequentially (left-to-right) and does not handle the order of operations (BODMAS/PEMDAS).
    - You recognized that this was a learning exercise and that a dedicated math library is the best practice.

---

## Date: January 22, 2026

### Topic: The Grand Merge Adventure!

- **The Goal**: To merge the `.gitignore` changes from `pvt-colab` into `manual-parser`.
- **What We Did (The "Wild 10 Minutes")**:
    1.  **First Hurdle (Uncommitted Changes)**: Our first `git merge pvt-colab` attempt failed because we had uncommitted work. We learned that Git protects us from losing work and that we must commit our changes before merging.
    2.  **Second Hurdle (Merge Conflicts!)**: After committing, we hit a real merge conflict.
        - We used `git status` to get a clear "to-do list" of the conflicts.
        - We resolved the `node_modules` conflict by accepting the deletion with `git rm`.
        - We resolved the `progress-journal.md` conflict by manually editing the file to remove the conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`).
    3.  **Third Hurdle (The Commit Editor)**: We learned how to finalize a merge commit and how to exit the terminal editor (`vim`/`nano`) that pops up.
    4.  **Final Hurdle (`.gitignore` on a branch)**: We discovered that even after the merge, `alexei-ai-tutor` was still tracked on `manual-parser`. We reinforced our learning by running `git rm -r --cached alexei-ai-tutor` again on the current branch to finalize the process.
- **Key Takeaway**: Merging branches can be complex, but by reading the error messages, using `git status`, and tackling each problem step-by-step, we can resolve any issue.

---

## Date: January 22, 2026

### Topic: Finalizing the Documentation

- **The Goal**: To create a complete and accurate record of our learning journey.
- **What We Did**:
    1.  **Corrected a Misunderstanding**: We clarified that the journal on the `manual-parser` branch was different from the one on `pvt-colab`.
    2.  **`git checkout <branch> -- <file>`**: We learned how to use this powerful command to "rescue" a specific version of a file from another branch.
    3.  **The `cat` Command Saga**: We discussed why the `cat << 'EOF' >> filename` command was confusing and learned that it's a "here document" used for appending multiline text.
    4.  **Documenting the `Function` Constructor**: We've now updated `methods.md` to include a discussion of the `new Function()` method.
- **Key Takeaway**: Documentation is an iterative process. It's okay to go back, correct mistakes, and add more detail as you learn more.

---

## Date: January 22, 2026

### Topic: Deep Dive into the Parser's Logic

We dug into the specifics of how the parser works and what its limitations are. This Q&A captures that discussion.

#### How does `solve()` running `evaluateExpression()` actually work?

This is a classic example of the **function call stack**:
1.  An event (like clicking the `=` button) calls the `solve()` function.
2.  `solve()` gets the expression string from the calculator screen.
3.  `solve()` then calls `evaluateExpression()`, passing the string to it. At this point, `solve()` **pauses** and waits for a result.
4.  `evaluateExpression()` runs its full logic (tokenizing, looping) and calculates a final number.
5.  It uses the `return` keyword to send that final number back to `solve()`.
6.  `solve()` receives the returned value and finishes its job by updating the calculator screen.

#### What are the gaps and missing features?

We identified several key limitations in this simple parser:

*   **No Order of Operations (BODMAS/PEMDAS)**: This is the biggest gap. The parser evaluates strictly from left to right. An expression like `2+3*2` will be incorrectly calculated as `10` instead of `8`.
*   **No Parentheses Support**: The parser tokenizes `(` and `)` but the loop logic doesn't know how to handle them, so it cannot prioritize calculations within parentheses.
*   **No Unary Operator Support**: It cannot handle expressions starting with a negative number (e.g., `-5 + 10`) or operations with negative numbers (e.g., `5 * -2`).
*   **No Floating-Point Precision Handling**: Like all JavaScript, it's susceptible to floating-point errors (e.g., `0.1 + 0.2` not being exactly `0.3`).

This analysis is crucial for understanding the difference between a simple educational parser and a production-ready one.

---

## Date: January 22, 2026

### Topic: Session Wrap-up and Next Steps

- **The Goal**: To finalize our documentation and set a clear plan for future work.
- **What We Did**:
    1.  **Completed `manual-parser.md`**: We finished our deep dive into the parser's logic, documenting how `solve()` and `clr()` work, and the important concept of storing vs. using a result.
    2.  **Identified Next Features**: You decided to tackle two new features next: an "Answer" button to reuse the last result, and a "Backspace" button.
    3.  **Created "Tickets"**: We've added these tasks to the `todo.md` file to track them for our next session.
- **Key Takeaway**: We've thoroughly analyzed the current state of the manual parser, documented its functionality and limitations, and have a clear, exciting path forward for adding new features.
