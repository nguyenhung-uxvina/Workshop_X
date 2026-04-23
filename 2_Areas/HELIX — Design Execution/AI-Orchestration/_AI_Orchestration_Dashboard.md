---
created: 2026-03-20
updated: 2026-03-20
type: dashboard
status: active
tags: [#status/active, #topic/ai-tools]
---

# AI Orchestration Dashboard — Workshop X

## S1-S5 Agentic Skills Status

| ID | Skill | Score | Infrastructure | Gap |
|----|-------|:-----:|----------------|-----|
| **S1** | AI Literacy | 8/10 | 56 prompts (P01-P56) in `S1_prompt_library.md` v5.2. Schema v3.0 (DCTRS). P-templates referenced in all 5 HELIX phase skills. | None critical |
| **S2** | Multi-Agent Orchestration | 8/10 | 33 CLI skills (BRIDGE 10, FORGE 11, HELIX 12). 53 Obsidian commands. SessionStart + Stop + UserPromptSubmit hooks. | Next Step consistency across skills |
| **S3** | Critical Reasoning / QC | 9/10 | PLAUSIBLE 9-check in quality-gate + embody-realize. P02 QC in prompt-templates for all phases. Defense AI QC Gate SOP. 6 binary evals with autoresearch. | P02 not yet enforced in task-clarify/concept-generate output |
| **S4** | Process Automation | 6/10 | `run-eval.sh` + `_meta/evals/` (6 skills). `/loop` for recurring tasks. Usage tracking hook. Autoresearch proven (2 skills → 100%). | 27 skills without evals. `claude -p` headless ceiling. |
| **S5** | Ethical Governance | 7/10 | `credential-management.md`, `mcp-security.md` SOPs. TCVN compliance in quality-gate references. | No per-project compliance tracking |

## Skill Architecture — 4 Layers

```
╔═══════════════════════════════════════════════════════════════╗
║ LAYER 0: META-INFRASTRUCTURE                                 ║
║   Hooks: SessionStart, Stop, UserPromptSubmit                ║
║   Evals: 6 binary eval JSONs + run-eval.sh                  ║
║   Config: .claude/settings.json, .claude/rules/ (4 files)   ║
╠═══════════════════════════════════════════════════════════════╣
║ LAYER 1: OPERATIONAL SKILLS (33 CLI)                         ║
║   BRIDGE (10): dashboard, risk-radar, judgment, deploy-gate, ║
║     signal-extract, automate, cross-learn, flywheel, KB,     ║
║     talent-map                                               ║
║   FORGE (11): job-map, scout, shift, fallback, validate,     ║
║     trust, library, flywheel, portfolio, cost, evolve        ║
║   HELIX (30): project-init,                                  ║
║     task-clarify (orchestrator) + 6 block-skills:            ║
║       p1-preflight, p1-requirements, p1-validate,            ║
║       p1-abstract, p1-structure, p1-compile                  ║
║     concept-generate (orchestrator) + 6 block-skills:        ║
║       p2-preflight, p2-frame, p2-search, p2-develop,         ║
║       p2-risk, p2-select                                     ║
║     embody-realize (orchestrator) + 6 block-skills:          ║
║       p3-preflight, p3-layout, p3-dfx, p3-integrate,         ║
║       p3-bom, p3-compile                                     ║
║     detail-finalize, quality-gate, 6flow,                    ║
║     design-journal, integration-debt, shadow-dev, dfach,     ║
║     sync-protocol                                            ║
╠═══════════════════════════════════════════════════════════════╣
║ LAYER 2: KNOWLEDGE PIPELINE (6 CLI)                          ║
║   research, nlm, yt-search, learning, pipeline, galaxy-links ║
╠═══════════════════════════════════════════════════════════════╣
║ LAYER 3: GUARD RAILS + LEARNING (7 CLI)                      ║
║   galaxy-gate, analyst-trap, ratio-check, session-exit        ║
║   learn-methodology, learn-practice, learn-track             ║
╠═══════════════════════════════════════════════════════════════╣
║ LAYER 4: PROMPT LIBRARY (S1)                                 ║
║   56 prompts (P01-P56) in S1_prompt_library.md v5.2         ║
║   Schema v3.0: DCTRS + HITL + SUCCESS_CRITERIA              ║
║   Referenced in: 5 HELIX phase skills via prompt-templates/  ║
╚═══════════════════════════════════════════════════════════════╝
```

## HELIX × P&B × S1 Integration Map

| P&B Phase | HELIX Skill | P-Templates | References |
|-----------|-------------|-------------|------------|
| Phase 0 | `/helix-project-init` | — | pb-product-planning |
| Phase 1 | `/helix-task-clarify` **v3.1 PIPELINE** (orchestrator → 6 block-skills: p1-preflight, p1-requirements, p1-validate, p1-abstract, p1-structure, p1-compile) | P01-P06 | pb-task-clarification, prompt-templates |
| Phase 2 | `/helix-concept-generate` **v3.1 PIPELINE** (orchestrator → 6 block-skills: p2-preflight, p2-frame, p2-search, p2-develop, p2-risk, p2-select) | P01-P03, P05, P06, P08 | pb-conceptual-design (Ch6), prompt-templates, triz-40, triz-sufield, ch6-galaxy-insights |
| Phase 3 | `/helix-embody-realize` **v3.1 PIPELINE** (orchestrator → 6 block-skills: p3-preflight, p3-layout, p3-dfx, p3-integrate, p3-bom, p3-compile) | P01-P03, P05, P07, P47, P50-P55 | pb-embodiment-design, prompt-templates |
| Phase 4 | `/helix-detail-finalize` | P01-P04, P49, P52 | pb-detail-design, prompt-templates |
| Gates | `/helix-quality-gate` | P02, P04, P05, P55, P56 | prompt-templates |

## Autoresearch Status

| Skill | Eval | Baseline | Best | Rounds |
|-------|:----:|:--------:|:----:|:------:|
| analyst-trap | ✅ | 86% | 100% | 1 |
| helix-task-clarify | ✅ v3.1 | 86% | 100%→TBD* | 2→reset |
| helix-embody-realize | ✅ v3.1 | 86% | 100%→TBD* | 2→reset |
| helix-quality-gate | ✅ | 71% | 86% | 2 |
| research | ✅ | 71% | 86% | 2 |
| helix-concept-generate | ✅ v3.0 | 86% | 71%→TBD* | 3→reset |

*concept-generate v3.0 mega-skill: 10 required + 5 optional assertions (was 4+3). Needs re-eval.

## Obsidian Plugin

- **53 commands** across 8 groups
- Source: `3_Resources/Tools & Software/obsidian-claude-bridge/`
- Build: `npm run build` → deployed to `.obsidian/plugins/`

## Key Files

| File | Purpose |
|------|---------|
| `3_Resources/SOPs/S1_prompt_library.md` | S1: 56 prompts, Schema v3.0 |
| `3_Resources/SOPs/Defense_AI_QC_Gate.md` | S3: QC Gate SOP |
| `3_Resources/SOPs/credential-management.md` | S5: Security SOP |
| `3_Resources/SOPs/mcp-security.md` | S5: MCP security SOP |
| `_meta/evals/*.json` | S4: Binary eval definitions |
| `_meta/evals/run-eval.sh` | S4: Eval runner + --improve |
| `.claude/settings.json` | Hooks: SessionStart, Stop, UserPromptSubmit |
| `.claude/rules/*.md` | Path rules: projects, galaxy, areas-helix, resources |
| `.claude/hooks/*.sh` | Hook scripts: session-briefing, check-learnings, track-skill-usage |

## Next Actions

1. **S3:** ~~Enforce P02 QC output in concept-generate SKILL.md~~ ✅ DONE (v3.0 mega-skill, Block E1). Still needed: task-clarify
2. **S4:** Write binary evals for forge-job-map, forge-shift, forge-scout, helix-project-init, helix-detail-finalize
3. **S5:** Add per-project compliance tracking (MIL-STD/TCVN/STANAG status)
4. **S2:** Add consistent "Next Step" section to all phase skill outputs
