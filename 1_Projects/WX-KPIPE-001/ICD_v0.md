---
created: 2026-03-08
updated: 2026-03-08
type: icd
version: 0
status: skeleton
project: WX-KPIPE-001
---

# ICD v0 — WX-KPIPE-001 "GOD MODE"

## System Boundaries

```
+------------------+     MCP (IF-001/003)     +------------------+
|                  | <======================> |                  |
|   Claude Code    |                          |   NotebookLM     |
|   (Orchestrator) |                          |   (Analyzer)     |
|                  |                          |   Gemini engine  |
+--------+---------+                          +------------------+
         |
         | FileSystem (IF-002/005)
         v
+------------------+
|                  |
|   Obsidian       |
|   IPARAG Vault   |
|   (Storage)      |
|                  |
+------------------+
```

## Interface Register

| IF-ID | From | To | Type | Description | Status |
|-------|------|----|------|-------------|--------|
| IF-001 | CC | NLM | MCP | nlm MCP server: create notebook, add sources, query | TBD |
| IF-002 | CC | Obsidian | FileSystem | Write markdown to vault (0_Inbox/ or target folder) | KNOWN |
| IF-003 | NLM | CC | MCP Response | Analysis results, structured data, summaries | TBD |
| IF-004 | CC | YouTube | yt-dlp CLI | Search + download transcripts/metadata | TBD |
| IF-005 | CC | CLAUDE.md | FileSystem | Self-improvement: update rules from session learning | KNOWN |
| IF-006 | NLM | NLM | Internal | Gemini processing (opaque, no control) | EXTERNAL |

## Data Flow

```
Input sources (YouTube, URLs, PDFs, text)
  --> CC skill collects + formats
  --> IF-001: CC sends to NLM via MCP
  --> NLM analyzes (Gemini, free tokens)
  --> IF-003: NLM returns structured output
  --> IF-002: CC writes to Obsidian vault (markdown)
  --> IF-005: CC updates CLAUDE.md if new patterns learned
```

## Constraints

- NLM notebook size limit: ~500,000 words per notebook
- NLM source limit: 50 sources per notebook
- Auth: Google OAuth, token refresh needed periodically
- CC must run FROM vault directory for Obsidian integration
- NLM processing time: 1-15 minutes depending on output type

## ICD Evolution Plan

| Version | Phase | Content |
|---------|-------|---------|
| v0 | Phase 0 | Skeleton — this document |
| v1 | G1 | MCP connection verified, actual API capabilities documented |
| v2 | G2 | Skill I/O formats defined, error handling specified |
| v3 | G3 | Super skill data flow frozen, rate limits documented |
