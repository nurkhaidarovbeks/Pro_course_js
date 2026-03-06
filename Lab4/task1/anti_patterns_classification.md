# Anti-Pattern Classification

## 1. Global Namespace Pollution
Bad solution: Storing application state and helpers in global variables.  
Unfavorable situation: Naming conflicts and accidental overwrites.  
How to fix: Use Module Pattern (Ch. 7) and Namespace Pattern (Ch. 11).  
Good solution: Encapsulate state inside modules and expose only public API.

## 2. Tight Coupling
Bad solution: Functions directly depend on each other and shared mutable state.  
Unfavorable situation: Small changes break multiple parts of the application.  
How to fix: Separate responsibilities into modules with clear interfaces.  
Good solution: Module Pattern with dependency separation.

## 3. Code Duplication
Bad solution: Copy-pasting similar validation and utility logic.  
Unfavorable situation: Repeated bugs and inconsistent fixes.  
How to fix: Extract shared functions into utility modules.  
Good solution: Reusable helper functions inside a Utils module.

## 4. setTimeout/setInterval with Strings
Bad solution: Using string-based execution such as setTimeout("fn()", 1000).  
Unfavorable situation: Eval-like behavior, lower safety, difficult debugging.  
How to fix: Pass function references instead of strings.  
Good solution: setTimeout(fn, 1000).

## 5. Spaghetti Code
Bad solution: Mixing unrelated logic in one long script.  
Unfavorable situation: Hard to understand, modify, and scale.  
How to fix: Split code into modules by responsibility.  
Good solution: Core module, Utils module, Config module under a namespace.

## 6. Inline JavaScript / DOM-Coupled Logic
Bad solution: Mixing DOM updates with business rules.  
Unfavorable situation: UI and logic become inseparable.  
How to fix: Separate DOM helpers from application logic.  
Good solution: Put DOM helpers in utility or UI-specific module.

## Chapter References
- Ch. 4: Anti-Patterns  
- Ch. 7: Module Pattern  
- Ch. 11: Namespace Pattern