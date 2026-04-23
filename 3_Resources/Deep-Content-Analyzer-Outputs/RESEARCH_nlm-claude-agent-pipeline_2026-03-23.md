---
created: 2026-03-23
source: research-pipeline-v3
notebook: nlm-agent
topic: "AI Agent chuyên sâu bằng NotebookLM + Claude Code — Đề xuất cải tiến cho Workshop X"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #topic/ai-tools]
source_quality:
  tier_s: 3
  tier_a: 5
  tier_b: 10
  tier_c: 4
  pro_ratio: "36%"
sources_analyzed:
  - title: "NLM Enterprise API — Notebooks"
    tier: S
    url: "https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks"
  - title: "NLM Enterprise API — Sources"
    tier: S
    url: "https://docs.cloud.google.com/gemini/enterprise/notebooklm-enterprise/docs/api-notebooks-sources"
  - title: "Context Engineering for Multi-Agent LLM Code Assistants"
    tier: S
    url: "https://arxiv.org/html/2508.08322v1"
  - title: "notebooklm-py (teng-lin)"
    tier: A
    url: "https://github.com/teng-lin/notebooklm-py"
  - title: "notebooklm-mcp (PleasePrompto)"
    tier: A
    url: "https://github.com/PleasePrompto/notebooklm-mcp"
  - title: "notebooklm-skill (PleasePrompto)"
    tier: A
    url: "https://github.com/PleasePrompto/notebooklm-skill"
  - title: "notebooklm-mcp-cli (jacob-bd)"
    tier: A
    url: "https://github.com/jacob-bd/notebooklm-mcp-cli"
  - title: "Stop Paying AI Agents to Do Research (Fadi Shaar)"
    tier: A
    url: "https://medium.com/ai-mindset/stop-paying-ai-agents-to-do-research"
---

# Research: NLM + Claude Code AI Agent Pipeline — Cải Tiến Workshop X

## Executive Summary

NLM + Claude Code integration đang phát triển nhanh (2026 Q1) theo 3 hướng: **MCP server** (persistent, multi-client), **CLI** (scripting, batch), **Skill** (stateless, per-query). WX đã đi trước community với nlm-cli v2.0 + 21 notebooks + /research v3.0, nhưng có 6 cải tiến cụ thể đáng implement.

---

## Insight 1: 4 Architectural Patterns cho NLM + Claude Code
- **Source tier:** A (multiple GitHub repos + articles)
- **Confidence:** ★★★ HIGH — confirmed across 5+ sources
- **Pattern 1 — Offsite RAG:** Claude scrapes → NLM ingests → NLM analyzes (free Gemini) → Claude retrieves results. **WX đã có pattern này** trong /research v3.0.
- **Pattern 2 — Self-Improving Memory Loop (NLM + Claude + Obsidian):** NLM query → results saved to Obsidian vault → Claude reads vault for context. **WX đã có** (IPARAG vault + Galaxy + CLAUDE.md).
- **Pattern 3 — Ground and Build:** NLM = zero-hallucination home base, Claude = builder. Use NLM output as strict foundation. **WX partially has** — but could formalize more.
- **Pattern 4 — Autonomous Iterative Research:** Claude asks sequential follow-up questions to NLM via MCP, building deep understanding. **WX doesn't have** — nlm-cli is single-query, no conversational persistence.
- **Galaxy candidate:** NO — WX already implements patterns 1-3.

## Insight 2: MCP > CLI > Skill for robustness
- **Source tier:** A (PleasePrompto, jacob-bd repos)
- **Confidence:** ★★★ HIGH
- MCP-based: persistent sessions, multi-client, iterative queries. Best for pipelines.
- CLI-based: batch ops, scripting, quick tasks. Good for automation.
- Skill-based: stateless, fresh browser per query. Least robust.
- **WX current:** CLI-based (nlm-cli by jacob-bd). Good for batch ops but misses conversational persistence.
- **Recommendation:** Keep CLI for batch ops, ADD MCP for iterative research queries.
- **Galaxy candidate:** NO — tool comparison, not insight.

## Insight 3: Hidden NLM Capabilities WX Isn't Using
- **Source tier:** A (notebooklm-py, multiple sources)
- **Confidence:** ★★★ HIGH
- **Mind maps → JSON export** — could feed into CLD/archetype skills
- **Quizzes/Flashcards → Markdown** — could embed in Obsidian for learning pipeline
- **Slide decks → editable PPTX** — could use for Viettel/HD128 presentations
- **Data tables → CSV** — could feed into VDI 2225 evaluation matrices
- **Individual slide revision** — AI edits specific slides
- **Deep Research mode** — NLM auto-browses hundreds of sites, produces cited report
- **Galaxy candidate:** NO — feature list, not insight.

## Insight 4: Cross-Notebook Queries via Gemini App
- **Source tier:** A (Fadi Shaar + ShareUHack guide)
- **Confidence:** ★★★ HIGH
- Can mount multiple NLM notebooks in Gemini App → query across all simultaneously
- jacob-bd CLI also offers `cross_notebook_query` tool
- **WX impact:** Currently 21 notebooks are siloed. Cross-notebook would enable: "Compare BB-01 LOMAH sensor approach with VN-12.7MM-SIM tracking approach"
- **Galaxy candidate:** MAYBE — "Cross-Notebook Synthesis" could be a design principle note.

## Insight 5: 10,000 Character Custom Instructions per Notebook
- **Source tier:** B (ShareUHack guide + NLM docs)
- **Confidence:** ★★ MED
- Notebooks can have up to 10K chars of custom instructions = "persona"
- Could enforce: "You are a defense systems engineer. Always cite MIL-STD numbers. Flag any claim not backed by uploaded source."
- **WX impact:** None of 21 notebooks currently has custom instructions configured.
- **Galaxy candidate:** NO — feature, not insight.

## Insight 6: Audio Overview as Learning Audit Tool
- **Source tier:** B (Chase AI videos + XDA articles)
- **Confidence:** ★★ MED
- Audio Overview modes: Quiz, Critique, Debate, Language Immersion
- Interactive Mode: pause → ask question → source-backed answer → resume
- "Audit workflow": After Claude writes code/analysis → bring output to NLM → generate Audio Overview → listen to catch gaps
- **WX impact:** Could integrate into THỊNH learning pipeline. Audio overviews of project research notebooks → listen during commute/workshop.
- **Galaxy candidate:** NO — technique, not principle.

## Insight 7: Cost Optimization — NLM = Free RAG
- **Source tier:** A (Fadi Shaar + multiple sources)
- **Confidence:** ★★★ HIGH — cross-validated
- NLM uses FREE Gemini tokens for all analysis. Claude only sends short queries + receives synthesized answers.
- Replaces: Claude reading thousands of files directly (expensive input tokens).
- **WX already knows this** — /research v3.0 explicitly routes heavy analysis to NLM.
- **Galaxy candidate:** NO — WX already practices this.

## Insight 8: Failure Modes of Programmatic NLM Access
- **Source tier:** A (multiple repos + articles)
- **Confidence:** ★★★ HIGH
- All community tools use **undocumented Google APIs** — can break anytime
- Auth tokens expire ~20 min (WX already knows — gotcha #4 in /research)
- Google may **ban automated browser usage** — use dedicated account
- Context window bloat: MCP with 35 tools = massive token consumption
- Document truncation: extremely long docs → NLM ignores end content
- **WX impact:** Confirms WX gotchas are correct. Adds: use dedicated Google account for NLM automation.
- **Galaxy candidate:** NO — operational warning, already captured in /research gotchas.

## Insight 9: Official NLM Enterprise API (Google Cloud) — The Real Solution
- **Source tier:** S (Google Cloud Docs)
- **Confidence:** ★★★ HIGH — official
- Enterprise API: REST-based, stable, official. Notebook CRUD + Source management + Audio generation + Queries.
- Requires: Google Workspace Enterprise license + Google Cloud project.
- **WX impact:** If WX scales or needs reliability, Enterprise API eliminates all community tool fragility. But requires paid license.
- **Galaxy candidate:** NO — reference, not insight.

---

## WX IMPROVEMENT PROPOSALS (6 cải tiến cụ thể)

### U1: Add notebooklm-mcp (PleasePrompto) for Iterative Research
**What:** Install notebooklm-mcp alongside existing nlm-cli. Use MCP for deep iterative research (Pattern 4), keep CLI for batch ops.
**Why:** Current nlm-cli is single-query. MCP enables Claude to ask sequential follow-up questions = deeper analysis.
**Effort:** 1-2 hours install + config
**Impact:** HIGH — unlocks Pattern 4 (Autonomous Iterative Research)
**Risk:** Browser automation fragility, need dedicated Google account

### U2: Configure Custom Instructions for Top 5 Notebooks
**What:** Add 10K-char custom instructions to: lomah, 127sim, ast, ach, stability notebooks.
**Why:** Forces NLM to act as domain-specific expert. "You are a defense systems engineer reviewing Pahl-Beitz Phase 2 concepts. Always cite MIL-STD. Flag unverified claims."
**Effort:** 30 min per notebook
**Impact:** MED — improves query quality, reduces generic answers

### U3: Enable Cross-Notebook Queries
**What:** Use jacob-bd's `cross_notebook_query` or Gemini App mount for cross-project synthesis.
**Why:** 21 siloed notebooks = missed cross-project insights. E.g., "What sensor approaches across BB-01, VN-12.7MM, and AST-MSL share common failure modes?"
**Effort:** 1 hour to test and document workflow
**Impact:** HIGH — breaks notebook silos, enables IRONMESH-level cross-product learning

### U4: Integrate NLM Artifacts into /learning Pipeline
**What:** Use notebooklm-py to export quizzes → Markdown (for Obsidian), mind maps → JSON (for CLD skill), slides → PPTX (for presentations).
**Why:** NLM generates these for free. Currently unused.
**Effort:** 2-3 hours to install notebooklm-py + add export step to /learning skill
**Impact:** MED — adds multimodal learning artifacts to THỊNH pipeline

### U5: Audio Overview Integration for THỊNH Learning
**What:** Generate Audio Overviews (Quiz mode or Debate mode) for project notebooks → download MP3 → embed in Obsidian → listen during commute.
**Why:** Passive learning from active research. Catches gaps CEO missed in text review.
**Effort:** 1 hour to add audio generation step to /nlm skill
**Impact:** MED — CEO compound learning during non-work time

### U6: Dedicated Google Account for NLM Automation
**What:** Create separate Google account for all NLM CLI/MCP operations.
**Why:** Multiple sources warn Google may ban automated access. Protect primary account.
**Effort:** 30 min
**Impact:** LOW effort, HIGH safety — prevents losing access to primary Google account

---

## Galaxy Candidates (THỊNH H — Hóa)

### ★★★/★★ — Ready for Promotion
None of the individual insights are atomic enough or novel enough for Galaxy promotion. WX already has the core concepts embedded in /research v3.0 and existing Galaxy notes.

### ★ — Needs Verification Before Galaxy
1. "Cross-Notebook Synthesis as Design Principle" — potential note: "Cross-Notebook Query — Khi Kiến Thức Siloed Là Kiến Thức Chết"
   - Only becomes Galaxy-worthy after WX actually uses cross-notebook queries and discovers a non-obvious insight from the cross-pollination.
   - Don't create note from theory — create from practice.

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 22 |
| Tier S (Official/Academic) | 3 |
| Tier A (Authority/OEM) | 5 |
| Tier B (Professional) | 10 |
| Tier C (Community) | 4 |
| Pro ratio (S+A/total) | 36% |
| Insights extracted | 9 |
| ★★★ HIGH confidence | 6 |
| ★★ MED confidence | 2 |
| ★ LOW confidence | 1 |
| Galaxy candidates | 0 ready, 1 needs verification |
| WX improvement proposals | 6 |

### NLM Status
- NLM notebook: nlm-agent (13 sources ingested)
- NLM gaps: 0 sources failed
- Conversation ID: a8406c6c-ce17-4820-bae7-101a0ab99fb1

### Coverage Gaps
- NLM Enterprise API pricing — không tìm được giá cụ thể
- Defense engineering-specific NLM use cases — chưa ai document (WX là pioneer)
- notebooklm-py Windows compatibility — chưa verify
