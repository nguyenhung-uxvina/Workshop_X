---
description: Generate unit tests for a source file using subagent
---
Launch a subagent to:
1. Read the source file: $ARGUMENTS
2. Detect the language and test framework in use (check package.json, pyproject.toml, go.mod, etc.)
3. Analyze all public functions, classes, and methods
4. Generate comprehensive unit tests matching the detected framework
5. Place tests in a mirrored path under tests/ (or __tests__/ for JS/TS)
6. Return: list of test cases generated, framework used, output file path

Rules:
- Match existing test framework — never impose pytest if project uses jest, vitest, go test, etc.
- Test file naming: test_[name].py / [name].test.ts / [name]_test.go (language-appropriate)
- Cover: happy path, edge cases, error/exception paths
- Use descriptive test names that read as sentences
- Do NOT run tests — generate only

Example: /project:gen-tests src/detection/classifier.py
