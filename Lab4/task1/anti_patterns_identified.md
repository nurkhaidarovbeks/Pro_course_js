# Anti-Patterns Identified

## Overview
In the provided legacy JavaScript code, several anti-patterns from Chapter 4 were identified. These anti-patterns reduce maintainability, scalability, and readability.

---

## 1. Global Namespace Pollution
Code section: global variables such as users, config, currentUser, isAdmin  
Anti-pattern name: Global Namespace Pollution  
Why it is an anti-pattern:  
Chapter 4 explains that placing too many variables in the global scope increases the risk of naming conflicts and makes code harder to maintain.  
Problems caused:  
- Variables can be overwritten accidentally  
- Harder debugging  
- Weak modularity  
Impact on maintainability and scalability:  
High negative impact because the whole application becomes tightly connected through global state.

---

## 2. Tight Coupling Between Functions
Code section: functions like loginUser(), showDashboard(), loadProfile() directly depend on each other  
Anti-pattern name: Tight Coupling  
Why it is an anti-pattern:  
Functions are too dependent on shared state and direct calls, so changing one function may break others.  
Problems caused:  
- Difficult testing  
- Difficult reuse  
- High risk when changing logic  
Impact on maintainability and scalability:  
High negative impact because the code cannot be extended safely.

---

## 3. Code Duplication
Code section: repeated validation logic, repeated loops, repeated DOM updates  
Anti-pattern name: Code Duplication  
Why it is an anti-pattern:  
The same logic appears in multiple places, violating the DRY principle.  
Problems caused:  
- Bugs fixed in one place but remain in others  
- Larger codebase  
- Harder maintenance  
Impact on maintainability and scalability:  
Medium to high negative impact because updates become inconsistent.

---

## 4. Inappropriate Use of setTimeout/setInterval with Strings
Code section: setTimeout("showMessage()", 1000)  
Anti-pattern name: Eval-like string execution  
Why it is an anti-pattern:  
Passing strings to setTimeout() behaves similarly to eval() and is discouraged in Chapter 4.  
Problems caused:  
- Security risks  
- Worse performance  
- Harder debugging  
Impact on maintainability and scalability:  
Medium negative impact because execution becomes less predictable.

---

## 5. Spaghetti Code / Lack of Structure
Code section: long procedural flow with unrelated logic mixed together  
Anti-pattern name: Spaghetti Code  
Why it is an anti-pattern:  
The code lacks clear modules, structure, and separation of concerns.  
Problems caused:  
- Hard to read  
- Hard to refactor  
- Hard to onboard new developers  
Impact on maintainability and scalability:  
Critical impact because complexity grows quickly.

---

## 6. Inline JavaScript / DOM-Coupled Logic
Code section: direct DOM manipulation mixed with business logic  
Anti-pattern name: Inline JavaScript / DOM-coupled logic  
Why it is an anti-pattern:  
Business logic should be separated from UI manipulation.  
Problems caused:  
- Poor separation of concerns  
- Harder testing  
- UI changes affect logic  
Impact on maintainability and scalability:  
Medium negative impact because presentation and logic are tightly mixed.