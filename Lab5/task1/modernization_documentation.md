# Modernization Documentation

## What was changed
- Replaced var with const
- Split code into ES6 modules
- Converted constructor functions into classes
- Replaced prototype methods with class methods
- Added private fields using #
- Used arrow functions in utility module
- Replaced string concatenation with template literals
- Used module object import in main.mjs

## Why it is better
- Better encapsulation
- No global namespace pollution
- Easier maintenance
- Cleaner code organization
- Better alignment with modern JavaScript standards

## Modules
- config.mjs — constants
- utils.mjs — formatting helpers
- core.mjs — Product and Cart classes
- main.mjs — application entry point