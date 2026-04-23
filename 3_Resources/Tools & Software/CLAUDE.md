# CLAUDE.md — Agentic Skills Mastery Workspace

**Version:** 1.3
**Created:** 2026-02-20
**Owner:** KN Nguyen

---

## 🎯 Purpose

This workspace tracks the systematic mastery of 9 skills required to deploy the IRONMESH defense AI platform and activate the R2 revenue loop via VN-RANGE-001.

**Constraint:** 25h/week total capacity (evening sessions, Vietnam time)
**Horizon:** Q1 2026 — VN-RANGE-001 operational deployment

---

## 📁 Workspace Structure

```
Agentic_Skills_Mastery/
├── projects/                  ← Project-specific outputs (one folder per project)
│   ├── V-SMASH/
│   │   ├── PHASE_0/           ← ODI, P09, P10, P11 artifacts
│   │   ├── PHASE_1/           ← (future) Requirements, stakeholders
│   │   ├── PHASE_2/           ← (future) Concepts, morpho, evaluation
│   │   ├── PHASE_3/           ← (future) Layout, DfX, materials
│   │   ├── PHASE_4/           ← Detail design, B-series DCTRS, gate review
│   │   ├── TOOLING/           ← Production jigs & test equipment sub-projects
│   │   ├── SOFTWARE/          ← Software sub-projects (SW-FW, SW-AI, SW-BAL, SW-COM)
│   │   ├── V-SMASH_Family_Orchestration_Design_v1.0.md  ← Cross-phase meta stays at root
│   │   └── V-SMASH_Orchestration_Design_v1.0.md
│   ├── VN-12.7MM-SIM/
│   │   ├── PHASE_0/
│   │   └── VN-12.7MM-SIM_Family_Orchestration_Design_v1.0.md
│   ├── VN-RANGE-001/
│   │   ├── PHASE_A/           ← Deployment Phase A (survey→FAT→pre-arrival)
│   │   ├── PHASE_B/           ← (future) Installation
│   │   ├── PHASE_C/           ← (future) Commissioning
│   │   ├── VN-RANGE-001_Deployment_State.md   ← Cross-phase state tracker
│   │   └── VN-RANGE-001_Deployment_Map_v1.0.md
│   └── IRONMESH/              ← Skill practice / framework docs (flat — no phases)
├── prompt_library/            ← Cross-project prompt templates (P01–P43)
├── Agentic_Skills_Mastery_Priority.md  ← Master plan
├── agentic_ai_skills_analysis.md       ← Skill gap analysis
└── progress.md                ← Session checkpoint
```

## 📝 File Naming Convention (MANDATORY)

1. **Project documents** → `projects/{{project_name}}/PHASE_{{N}}/{{PROJECT_NAME}}_{{doc_type}}_v{{N}}.md`
   - Example: `projects/V-SMASH/PHASE_0/V-SMASH-L_ODI_Report_v1.0.md`
   - Always prefix with product/project name in UPPERCASE
   - **Phase subdirectories:** `PHASE_0` (ODI/Planning), `PHASE_1` (Clarification), `PHASE_2` (Conceptual), `PHASE_3` (Embodiment), `PHASE_4` (Detail)
   - **Deployment projects:** `PHASE_A`, `PHASE_B`, `PHASE_C` (deployment execution phases)
   - **Software sub-projects:** `SOFTWARE/` directory at project root (SW sub-projects follow SW-SDLC, not Pahl & Beitz phases)
   - **Tooling sub-projects:** `TOOLING/` directory at project root (simplified Spec→Design→Build→Validate pipeline)
2. **Cross-phase meta-artifacts** (orchestration designs, state trackers) → stay at project root
3. **Prompt library files** → `prompt_library/{{Phase}}_{{topic}}.md` (no project prefix — cross-project)
4. **Never place project outputs directly in `prompt_library/`**

## 📁 Key Files

| File | Purpose |
|------|---------|
| `Agentic_Skills_Mastery_Priority.md` | Master plan: leverage points, interventions, 30-day milestones |
| `agentic_ai_skills_analysis.md` | Underlying skill gap analysis |
| `prompt_library/INDEX.md` | Master index — 43 prompts across 8 files |

---

## 🧠 The 9-Skill Architecture

### Agentic Skills (5)
| Skill | Score | Status |
|-------|-------|--------|
| S1: AI Literacy | 8/10 | MAINTAIN — **27 prompts across 5 files** → `prompt_library/INDEX.md` |
| S2: Multi-Agent Orchestration | 8/10 | SYSTEMATIZE — document patterns |
| S3: Critical Reasoning / QC | 9/10 | AUTOMATE — build Defense AI QC Gate |
| S4: Process Automation Design | 6/10 | IMPROVE NOW — blocking R2 |
| S5: Ethical Governance | 7/10 | SYSTEMATIZE — TCVN compliance matrix |

### Broader Human Skills (4)
| Skill | Score | Status |
|-------|-------|--------|
| B-EI: Emotional Intelligence | 7/10 | MAINTAIN |
| B-CP: Creative Problem Solving | 9/10 | MAINTAIN |
| B-AL: Adaptability / Self-Directed Learning | 9/10 | MAINTAIN |
| B-NS: Negotiation / Storytelling | 6/10 | INVEST NOW — blocking procurement |

---

## 🔑 Top 5 Leverage Points (from Priority Plan)

1. **L6 — Build Defense AI QC Gate** (S3→S4): automate manual QC, recover 3h/week
2. **L2 — Radical Focus**: freeze all products except VN-RANGE-001 + BB-01
3. **L7 — Deployment Map as S4 practice**: build while learning
4. **L9 — 30-second General Briefing** (B-NS): compress trust-building delay
5. **L4 — Weekly Skill Allocation Review**: meta-orchestration of own capabilities

---

## 📅 30-Day Milestones

| Week | Deliverable |
|------|-------------|
| W1 | Defense AI QC Gate skill live + Product Freeze Order written |
| W2 | VN-RANGE-001 Deployment Map Phases 1-3 documented |
| W3 | 30-second briefing polished + 1 military touchpoint completed |
| W4 | First retrospective — actual vs planned time log reviewed |

---

## ⚠️ Critical Rules (from Priority Plan)

1. **Never unfreeze non-critical products** — B1 Complexity Ceiling is real. Clawdbot handles maintenance.
2. **Ship 60% QC Gate now** — don't wait for perfect. Iterate on misses.
3. **3h buffer is non-negotiable** — zero-slack systems fail. Buffer prevents B3 Skill Depletion.
4. **B-NS practice ≠ non-productive** — it's the bottleneck to R2 activation.
5. **Learn by building** — VN-RANGE-001 deployment map IS the S4 practice, not a side activity.

---

## 🔄 Weekly Rhythm

```
Session open  → Review last week's allocation vs actual
During week   → S4 primary: VN-RANGE-001 critical path only
               S3 secondary: run QC Gate, review output (≤2h)
               B-NS: 30-min briefing practice 3x/week
Friday close  → Skill Allocation Review (1h) + D-M-I-R reflection
```

---

## 🚫 Mistakes Not To Repeat
<!-- After every correction, tell Claude:
     "Update CLAUDE.md so you don't make that mistake again."
     Ruthlessly edit this section. Mistake rates drop over time. -->

### File placement (2026-02-20, updated 2026-02-21)
- **Never place project outputs in `prompt_library/`** — that folder is for prompt TEMPLATES only
- **Never place project outputs in `VN-Projects/`** — that's the engineering product docs, not the mastery workspace
- **Always use `projects/{{project_name}}/PHASE_{{N}}/` within Agentic_Skills_Mastery** — files go into the phase subdirectory they were created in
- **Always prefix filename with project name** — `V-SMASH-L_ODI_Report_v1.0.md`, not `ODI_Report_v1.0.md`
- **Never place phase artifacts at project root** — only cross-phase meta-artifacts (orchestration designs, state trackers) stay at root

---

## 🔗 Parent Context

See `d:/UxV/engineering-projects/CLAUDE.md` for:
- Full engineering design system (Pahl & Beitz, ODI, VDI 2225)
- Slash command reference
- Vietnamese defense context (suppliers, standards)
- Gate review process
