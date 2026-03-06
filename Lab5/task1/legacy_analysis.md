# Legacy Code Analysis

## Legacy patterns found
1. var is used instead of let / const
2. All variables and functions are in the global scope
3. Constructor functions are used instead of ES6 classes
4. Prototype methods are used instead of class methods
5. No module system is used
6. All properties are public
7. String concatenation is used instead of template literals
8. Traditional loops are used instead of modern array methods where possible

## Anti-patterns
- Global namespace pollution
- Weak encapsulation
- Tight dependency on global variables (taxRate, currency)
- Outdated constructor/prototype style
- Limited maintainability due to lack of modules

## Modernization goals
- Replace var with const / let
- Split code into modules
- Convert constructor functions to classes
- Add private fields
- Use template literals
- Improve encapsulation and readability

## Chapter references
- Ch. 5: The Importance of Decoupling Applications
- Ch. 5: Modules with Imports and Exports
- Ch. 5: Module Objects
- Ch. 5: Classes with Constructors, Getters, and Setters