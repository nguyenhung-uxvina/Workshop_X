---
description: Code review — check for bugs, security, performance, style
---
Review the following for quality issues: $ARGUMENTS

Check for:
1. **Bugs**: Logic errors, off-by-one, null references, race conditions
2. **Security**: Input validation, injection, sensitive data exposure
3. **Performance**: N+1 queries, unnecessary loops, memory leaks
4. **Style**: Naming conventions, code organization, readability
5. **Missing**: Error handling, edge cases, tests, documentation

Output format:
- 🔴 Critical (must fix)
- 🟡 Warning (should fix)
- 🟢 Suggestion (nice to have)
- Include line numbers and suggested fixes

Example: /project:review src/detection/classifier.py
