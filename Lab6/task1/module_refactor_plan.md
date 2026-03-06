# Module Refactor Plan

## Problems in Legacy Code
- Global variables
- No module separation
- Business logic mixed with UI
- Hard to maintain

## Refactoring Strategy
Split application into modules:

constants.js → configuration values  
utils.js → helper functions  
product.js → Product class  
cart.js → Cart logic  
main.js → application entry point

## Benefits
- better code organization
- reusable modules
- no global pollution
- easier maintenance