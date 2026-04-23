---
description: Generate technical documentation for a module or component
---
Launch a subagent to:
1. Read all source files for: $ARGUMENTS
2. Generate technical documentation including:
   - Purpose and overview
   - Public interfaces and APIs
   - Parameters with types and constraints
   - Dependencies and relationships
   - Usage examples
3. Output to docs/ directory as markdown
4. Return summary of what was documented

Rules:
- Use clear section headings
- Include code examples where helpful
- Document edge cases and limitations
- Link to related modules when referenced

Example: /project:gen-doc src/acoustic/
