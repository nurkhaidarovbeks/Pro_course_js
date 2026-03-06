# Implementation Notes

## Static imports
Static imports are used for core application modules:
- core.mjs
- utils.mjs
- constants.mjs

These modules are essential for application startup.

## Dynamic imports
Dynamic imports are used for optional features:
- advanced_feature.mjs is loaded on button click
- lazy_component.mjs is loaded when the target element becomes visible

## Error handling
Both dynamic imports use try...catch to handle module loading failures and display fallback messages.

## Import patterns demonstrated
- Named import: import { add } from "./core.mjs"
- Default import: import formatResult from "./utils.mjs"
- Module object: import * as Constants from "./constants.mjs"