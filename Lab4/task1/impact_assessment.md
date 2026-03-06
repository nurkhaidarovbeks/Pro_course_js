# Impact Assessment

| Anti-Pattern | Maintainability | Scalability | Performance | Team Collaboration | Severity |
|---|---|---|---|---|---|
| Global Namespace Pollution | Very poor | Poor | Medium | Poor | Critical |
| Tight Coupling | Very poor | Very poor | Medium | Poor | High |
| Code Duplication | Poor | Poor | Medium | Medium | High |
| setTimeout/setInterval with Strings | Medium | Medium | Poor | Medium | Medium |
| Spaghetti Code | Very poor | Very poor | Medium | Very poor | Critical |
| Inline JavaScript / DOM-Coupled Logic | Poor | Poor | Medium | Poor | Medium |

## Summary
Knowledge of anti-patterns is critical for software quality. As Chapter 4 states, once anti-patterns are recognized, code can be refactored so that the overall quality of solutions improves instantly.

## Priority Order
1. Spaghetti Code — Critical  
2. Global Namespace Pollution — Critical  
3. Tight Coupling — High  
4. Code Duplication — High  
5. Inline JavaScript / DOM-Coupled Logic — Medium  
6. setTimeout/setInterval with Strings — Medium