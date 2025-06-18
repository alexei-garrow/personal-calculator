# Change Log

## ~~Saving eval as a variable indirectly~~ 

Upon consulting copilot: 
### Security Risks Remain:

  - "eval() executes any string as JavaScript code. If users input malicious code (e.g., alert('Hacked!')), your application would execute it, leading to significant vulnerabilities."

  - "Even wrapping eval() in try...catch helps with syntax errors but doesn't fully mitigate the risk of executing harmful code."

### Indirect Use Doesn't Change Behavior:

  - "Saving eval() as a variable (e.g., let scope = eval) or aliasing it simply creates another way to call it. The risks remain identical."
 
## Considerations:

### Debugging Challenges:

  - "If something goes wrong, debugging code that heavily relies on eval() can be much harder because the executed string is dynamic and not pre-parsed."

