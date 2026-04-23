---
description: Research files/topics using cheap subagent — read only, never modify
---
Launch a subagent to:
1. Read all files matching $ARGUMENTS
2. Extract key findings into a structured summary
3. Return findings only — do NOT modify any files

Rules:
- Read-only operation
- Output structured markdown with headings
- Include file paths for every finding
- Flag anything unusual or noteworthy

Example: /project:research src/acoustic/*.py
