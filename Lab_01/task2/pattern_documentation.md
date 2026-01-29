# Lab 1.2: Pattern Documentation — Formal Pattern Specification

Student Name: Nurkhaidarov Beksultan
Student ID: 250752
Date: 30.01.2026

## Task 1 - Pattern Selection
**Selected pattern:** Lazy Singleton Module (IIFE + getInstance)

**Why i chose it:**
This pattern enforces a single shared instance and demonstrates encapsulation, controlled initialization, and a clear public API

---

##Task 2 - Formal Pattern Specification 

### 1) Pattern Name
**Lazy Singleton Module (JavaScript IIFE Singleton)**

---

### 2) Context
Use this pattern when:
- The application requires exactly one shared service or manager
- Multiple modules must access the same state
- Object creation must be controlled

---

### 3) Problem 
-Multiple instances of a manager lead to:
- Inconsistent shared state
- Harder debugging and maintenance
- Loss of a single source of truth

---

### 4) Solution 
Create a module that:
- Stores a private `instance`
- Exposes `getInstance()` to return the same object
- Uses lazy initialization to create the instance only when needed

Key elements:
- IIFE module
- Private state
- Public accessor (`getInstance()`)

---

### 5) Example
A `UserManager` singleton that:
- Adds users
- Finds users by id
- Returns a safe copy of stored data

(Provided in `example.js`)

---

### 6) Consequences

**Benefits**
- Ensures a single shared instance
- Prevents duplicated state
- Improves consistency

**Drawbacks**
- Shared state can reduce flexibility 
- Harder to test without isolation

**When to avoid**
- When multiple independent instances are required

---

## Task 3 - Apply pattern to New scenario 
**New domain** Application Configuration Manager

- One shared configuration is required
- All modules must read consistent settings
- The singleton prevents configuration conflicts

(Provided in `new_scenario.js`)






