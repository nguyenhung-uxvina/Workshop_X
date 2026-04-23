---
created: 2026-04-16
updated: 2026-04-16
type: project
status: active
tags: [#type/project, #status/active, #pahl, #meta]
tier: 3
---

# Practice-ICDM — ICDM Deep Mastery

## Overview

| Field | Value |
|-------|-------|
| **Project ID** | Practice-ICDM |
| **Tier** | 3 — Strategic (knowledge deliverable) |
| **Duration** | 6 tuần (2026-04-16 → 2026-05-28) |
| **Hours** | 2.3h/tuần × 6 tuần = **~14 giờ** (3 sessions/tuần × 30-60 phút) |
| **Schedule** | Mon/Wed/Fri — flexible 20-60 min per session |
| **Anchor project** | VN-CUAV-SIM-001 LITE-PA2 (Phase 2 done, Phase 3 starting) |
| **Physical gate** | 2026-05-07 SS1 PoC — physical data feeds ICDM practice drills |
| **Done criteria** | Capstone: Apply ICDM Steps 5-10 to VN-USV-SS-001 in <90 min, no reference docs |
| **Prerequisite** | Practice-PB (P&B systematic design foundation) |

## Mục Tiêu

CEO master ICDM ở mức Proficient (Dreyfus 4/5):
1. **ICDM 10 Steps:** Hiểu full flow, biết Steps 1-4 (= P&B overlap) vs Steps 5-10 (ICDM adds)
2. **Deep Step 5-7:** Group A/B criteria selection + DSO pre-ranking + Pugh w/ CSR = reflex
3. **Deep Step 8:** CFMA + CDTC + RTA + Roobustool = full concept-level risk toolbox
4. **Deep Step 9-10:** DQM quantitative scoring + Project Launch presentation = CEO delivery skill

## Three Laws (to be validated during practice)

1. **Two-Stage Evaluation Law** — Pugh nhanh (Group A screening) rồi VDI sâu (Group B DQM) = ít effort + better decisions
2. **DSO Pre-Ranking Law** — Performance × Risk trước khi tổ hợp, tránh combinatorial explosion
3. **[TBD — CEO extracts during Week 5-6]** — third law emerges from integration practice

## Source Materials

| Source | Location | Type |
|--------|----------|------|
| ICDM Research (15 sources, 80% Tier S/A) | `3_Resources/Deep-Content-Analyzer-Outputs/RESEARCH_ICDM_*.md` | NLM output |
| NLM Notebook `icdm` | 11 sources ingested | Query partner |
| NLM Notebook `eqfd` | 19 sources | EQFD deep reference |
| Galaxy: Two-Stage Evaluation Law | `5_Galaxy/` | Permanent note |
| Galaxy: DSO Pre-Ranking | `5_Galaxy/` | Permanent note |
| VN-CUAV-SIM-001 ICDM Artifacts | `Phase1-Task/ICDM_B0..BE` + `Phase2-Concept/LITE-PA2/` | Real outputs |
| VN-MGM V5 ICDM Artifacts | `Phase1-Task/V5-MOTORIZED/` | Cross-product reference |
| Hari & Weiss papers (via NLM) | NLM `icdm` notebook | Original method |
| Mayda & Börklü 2014 extension | NLM `icdm` notebook | CFMA/DSO additions |

## Meta-Learning Frameworks Applied

### DMIR Cycle (per week)

```
D (Diagnosis)    → Self-assess: what ICDM steps can I do from memory?
M (Modeling)     → Mental model: draw ICDM 10-step flow from scratch
I (Intervention) → Targeted drill on weakest step, using anchor project
R (Reflection)   → What changed in my thinking? Galaxy candidate?
```

### Dreyfus Skill Model (tracking per ICDM step)

| Level | Description | Evidence |
|---|---|---|
| 1 Novice | Follows rules, needs reference | Can't do without doc open |
| 2 Adv. Beginner | Recognizes patterns | Applies with reference nearby |
| 3 Competent | Plans approach, prioritizes | Completes drill in time, correct |
| 4 Proficient | Sees situation holistically | Adapts method to novel project |
| 5 Expert | Intuitive, flows | Teaches others, creates new tools |

### Feynman Technique (per drill)

1. **Explain** the ICDM step as if teaching WX engineer (write 1 paragraph, no jargon)
2. **Identify gaps** — where did explanation feel vague?
3. **Return to source** — re-read Hari & Weiss or NLM query
4. **Simplify** — rewrite explanation, now crisp and concrete

### Interleaving (schedule structure)

- Never same topic in consecutive sessions
- 3 topics rotated Mon/Wed/Fri
- Every 4th week = integration (no new content)

### Spaced Repetition (built into schedule)

- Week 1-2: Foundation — canonical examples with reference visible
- Week 3-4: Application — from scratch, timed, varied projects (FIXED, FULL)
- Week 5-6: Integration — no notes, defend to skeptic, teach others

### Deliberate Practice (Ericsson)

- Each drill has **specific scoring criteria** (not just "do it")
- Drills target **weakness zone** (Steps 6/8/10, not Steps 1-4)
- **Immediate feedback** — compare output to reference pipeline results
- **Progressive difficulty** — same method, harder variant each week

### Physical × Analytical Convergence (Analyst Trap Guard)

| Week | Physical Action | ICDM Connection |
|---|---|---|
| 2 | Order solenoid (real procurement) | CDTC real vendor quote |
| 3 | Bench-test solenoid (oscilloscope) | CSR-1 real fidelity data → DQM |
| 4 | CNC cradle prototype (PX2) | CDTC real manufacturing cost |
| 5 | Elastomer bumper test | Roobustool real robustness data |

## Deliverables (Real — feed into products)

| Week | Deliverable | Feeds Into |
|:----:|------------|-----------|
| 1 | DSO pre-ranked morpho for SS1 + Roobustool assessment C4 | VN-CUAV-SIM Phase 3 |
| 2 | CSR functions for 6 criteria (new + variations) | ICDM evaluation library |
| 3 | Full DSO+Pugh for FIXED-PA8 + CDTC for LITE C4 | VN-CUAV-SIM FIXED variant |
| 4 | RTA for LITE C4 + DQM for FIXED variant | Risk/schedule assessment |
| 5 | Full Step 8 Suite for FULL-PA6 + Step 10 Presentation | VN-CUAV-SIM FULL variant |
| 6 | **Capstone: ICDM Steps 5-10 on VN-USV-SS-001** | VN-USV-SS-001 Phase 2 kickoff |

## Success Criteria

1. **Capstone:** Apply ICDM Steps 5-10 to VN-USV-SS-001 in <90 min, no reference docs
2. **Dreyfus:** ≥ Proficient (4/5) on Steps 5-9; ≥ Competent (3/5) on Step 10
3. **Deliverables:** 6 real outputs produced (one per week, feeding into products)
4. **Galaxy:** ≥ 3 new permanent notes created during practice (ICDM-specific insights)
5. **Three Laws:** 3rd ICDM Law identified and validated by CEO
6. **Physical convergence:** ≥ 3 of 4 physical drills completed (not just analysis)
