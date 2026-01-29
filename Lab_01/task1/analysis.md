# Lab 1.1 - Pattern Audit (Rule of Three Analysis)

Student Name: Nurkhaidarov Beksultan
Student ID: 250752
Date: 30.01.2026

## Task 1 - Code Analysis and Pattern  Identification
### Candidate 1 - "User Manager / Repository" (Recurring structure across implementation)
- **Code section (which implementation):** Appears in 1st, 2nd, and 3rd implementations
- **Potential pattern name:** Repository / Manager (data + operations), "Collection + Operations Encapsulation"
- **Context:** When an app needs to store and manage a set of entities (users) and provide basic operations (add, find, list) in one place
- **Problem:** If user storage and operations are spread across codebase, logic becomes duplicated, inconsistent, and hard to maintain (e.g, multiple "add user" versions, different search rules)
- **Solution:** Encapsulate the collection  (users array) together with operations (add/find/getAll) behind a single API (manager/repository). Other parts of the program  call a consistent interface instead of manipulating the array directly

---

### Candidate 2 - Object Literal Module (simple module-style object)
- **Code section (which implementation):** 1st implementation (`var userManager = { users: [], addUser, findUser, getAllUsers }`)
- **Potential pattern name:** Module (Object Literal Module / Simple Module)
- **Context:** Small scripts or simple apps where a single object is enough to group state and methods without needing complex construction
- **Problem:** Global functions and global variables create naming collisions and make code hard to reason about
- **Solution:** Put state (`users`) and behaviours (`addUser`, `findUser`, `getAllUsers`) into one object so the API is namespaced and organized

---

### Candidate 3 - Factory Function + Closure (encapsulation via lexical scope)
- **Code section (which implementation):** 2nd implementation (`function createUserManager() { var users=[]; return {add, find} }`)
- **Potential pattern name:** Factory (factory function) + Module via Closure
- **Context:** When you need multiple independent managers (for different modules/tenants/tests) each with its own private state
- **Problem:** If internal state is publicly accessible, external code can mutate it and break invariants (e.g., users array changed accidentally)
- **Solution:** Use a factory function that returns an object API while keeping `users` private inside a closure. Each call creates an independent instance with its own private storage

---

### Candidate 4 - Singleton (lazy instance, LIFE)
- **Code section (which implementation):** 3rd  implementation (`var UserManager=(function(){ var instance; ... return { getInstance } })();`)
- **Potential pattern name:** Singleton (lazy initialization) + Module (IIFE)
- **Context:** When exactly one shared manager should exist across the entire app (one source of truth)
- **Problem:** If multiple instances exist, state becomes inconsistent (different places store different user lists)
- **Solution:** Use a IIFE module that hides `instance` and exposes `getInstance()`. The first call creates the instance; later calls return the same shared object

---

##Task2 - Rule of Three Evaluation 

### Candidate 1 - "User Manager / Repository" recurring structure 
- **Count of independent implementations in provided code:** 3(1st, 2nd, 3rd all implement "store users + operations")
- **Appears in 3+ different contexts?** in this snippet: 3 separate implementations 
- **Rule of Three result:** **TRUE PATTERN**

**Reasoning:** Even though the code style differs (object literal vs closure factory cs singleton module), the recurring "collection + operations in one API" repeats 3 times, showing a recurring solution

---

### Candidate 2 - Object Literal Module 
- **Count of independent implementations:** 1
- **Appears 3+ times?** No
- **Rule of Three result:** **PROTO-PATTERN**

---

### Candidate 3 - Factory Function + Closure Module 
- **Count of independent implementations:** 1
- **Appears 3+ times?** No
- **Rule of Three result:** **PROTO-PATTERN**

---

### Candidate 4 - Singleton 
- **Count of independent implementations:** 1
- **Appears 3+ times?** No
- **Rule of Three result:** **PROTO-PATTERN**

--- 

## Task 3 - Pattern vs Proto-Pattern Classification
### Candidate 1 - "User Manager / Repository" recurring structure 
- **Classification:** **proven pattern**
- **Evidence:** Commonly documented as Repository/Manager style (encapsulating data access + operations). In this snippet, it is validated by the Rule of Three(3 independent implementations)

---

### Candidate 2 - Object Literal Module 
- **Classification:** **proto-pattern**
- **Evidence:** It is a recognizable "module-style object" approach, but only appears once in provided snippet; not enough implementations here to confirm by Rule of Three

---

### Candidate 3 - Factory Function + Closure Module 
- **Classification:** **proto-pattern**
- **Evidence:** Closure-based encapsulation and factory functions are well-known in JavaScript, but in this snippet it appears only once, not enough repetition

---

### Candidate 4 - Singleton
- **Classification:** **proto-pattern**
- **Evidence:** Singleton is a well-known pattern, and this implementation matches lazy singleton structure. Appears only once.