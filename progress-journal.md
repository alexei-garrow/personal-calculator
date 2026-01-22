# Learning Journal

## Date: January 22, 2026

### Topic: Managing Your Repository with `.gitignore`

- **The Goal**: To stop tracking `node_modules` and other unnecessary files.
- **What We Did**:
    1. Created a `.gitignore` file.
    2. Used `git rm -r --cached <directory>` to untrack already-committed files.
    3. Learned to amend commits with `git commit --amend` to fix mistakes.

---

## Date: January 22, 2026

### Topic: Comparing Git Branches

- **The Goal**: To understand the differences between the `pvt-colab` and `manual-parser` branches.
- **What We Did**:
    1. Used `git branch -a` to see all branches.
    2. Discussed `git diff` for comparing branches.
    3. Switched to `git checkout manual-parser` to inspect the code directly when the diff was too large.

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