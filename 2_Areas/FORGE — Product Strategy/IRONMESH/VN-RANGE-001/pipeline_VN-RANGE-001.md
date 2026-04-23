# VN-RANGE-001 Deployment Pipeline
## Master-Clone Architecture × Skill 4 (Process Automation Design)

**Created:** 2026-02-20
**Session:** CC-Mastery × Agentic Skills convergence
**Framework:** Automation Gradient (Skill 4) + Master-Clone (Module 7)
**Product:** IRONMESH RANGE — Smart Range Integration System

---

## Core Design Principle: Automation Gradient

```
RULE: Automation % DECREASES as consequence increases.

VN-RANGE-001 Deployment Phases:
┌─────────────────────────────────────────────────────┐
│ Phase              │ Consequence │ Automation %      │
├────────────────────┼─────────────┼───────────────────┤
│ Requirements doc   │ Low         │ 90% (AI drafts)   │
│ Architecture spec  │ Medium      │ 70% (HITL review) │
│ Integration design │ Medium      │ 75% (HITL review) │
│ DfX gate review    │ High        │ 50% (HITL+domain) │
│ Safety validation  │ Critical    │ 20% (human-led)   │
│ Go/No-Go decision  │ Critical    │  0% (always human)│
└─────────────────────────────────────────────────────┘
```

---

## Why Master-Clone, NOT Rigid 3-Agent Pipeline

**Anti-pattern (original mastery plan):**
```
[spec-writer] → [architect-reviewer] → [implementer-tester]
      ↑ Context gating + forced routing = brittle for edge cases
```

**Correct pattern (Module 7 lesson applied):**
```
MASTER AGENT (main CC session)
    │
    ├── IF low-consequence → Task("spec-writer", scoped_context)
    ├── IF medium-consequence → Task("architect-reviewer", scoped_context) + HITL
    ├── IF high-consequence → Human judgment FIRST, then Task("implementer")
    └── ALWAYS: master holds state, makes routing decisions, own HITL checkpoints

Formula: (X + Y) * N + Z
  X = shared context in CLAUDE.md (always loaded)
  Y = phase-specific context loaded on demand
  N = parallel Task() delegation where safe
  Z = human gate review checkpoint
```

**Why this works for defense:** Real VN-RANGE-001 deployment has edge cases that break rigid graphs:
- Sensor calibration fails → need ad-hoc troubleshooting, not pre-defined next node
- Military review requests changes → need backtrack, not forward-only pipeline
- Environmental conditions differ → need adaptive decision-making, not scripted paths

---

## Pipeline Architecture

```
VN-RANGE-001 DEPLOYMENT PIPELINE
══════════════════════════════════════════════════════════════════

TRIGGER: /run-pipeline --product VN-RANGE-001 --phase [1-5]
                │
                ▼
        ┌───────────────┐
        │ MASTER AGENT  │  ← Main Claude Code session
        │               │    CLAUDE.md loaded (always)
        │   Reads:       │    Project context injected
        │   - Gate status│    via session_start hook
        │   - Phase req  │
        │   - Constraints│
        └───────┬───────┘
                │
    ┌───────────┼────────────┬──────────────┐
    ▼           ▼            ▼              ▼
PHASE 1      PHASE 2      PHASE 3        PHASES 4-5
Requirements  Architecture  Integration    Gate Review
(90% auto)   (70% auto)   (75% auto)     (50%/0% auto)
    │           │            │              │
    ▼           ▼            ▼              ▼
Task(          Task(        Task(          HITL ONLY
 spec-writer,   architect,   integrator,   No Task()
 scoped_tools)  scoped_tools) scoped_tools) delegation
    │           │            │
    ▼           ▼            ▼
 spec.md     arch.md      integration.md
    └───────────┴────────────┘
                │
                ▼
        HITL CHECKPOINT ← Gate decision A/B/C/D
                │
            APPROVED?
            ├── YES → Next phase
            ├── REVISE → Back to current phase
            └── CANCEL → Stop pipeline

CONDITIONAL EDGES (master agent decides):
  IF spec.md confidence < threshold → Add Task(domain-researcher)
  IF arch.md has DfX conflicts → Add Task(dfx-checker) + HITL
  IF integration has Vietnamese supplier gap → Flag to human immediately
  IF any safety-critical issue detected → HALT, escalate
```

---

## Task() Delegation Specs

### Spec-Writer Task (Phase 1)
```python
# Master agent spawns this for requirements generation
Task(
    subagent_type="general-purpose",
    prompt=f"""
    Generate VN-RANGE-001 deployment requirements specification.

    CONTEXT:
    - Product: IRONMESH RANGE smart range integration
    - Components: VN-LOMAH + VN-CAM + VN-TRN + CORTEX
    - Deployment site: [SITE_DETAILS]
    - Standards: MIL-STD + TCVN + Vietnamese MoD requirements

    TASK: Draft requirements list covering:
    1. Functional requirements (sensing, scoring, reporting)
    2. Performance requirements (detection accuracy, latency)
    3. Environmental requirements (maritime/field conditions)
    4. Integration requirements (existing range infrastructure)
    5. Safety requirements (TCVN compliance, fail-safe modes)

    FORMAT: Numbered list, each requirement QUANTIFIED.
    Vague requirements are not acceptable.

    OUTPUT: requirements_VN-RANGE-001.md
    TOOLS ALLOWED: Read, Write, Glob (no Bash, no network)
    """,
    description="Generate quantified requirements spec"
)
```

### Architect-Reviewer Task (Phase 2)
```python
# Master agent spawns this AFTER human reviews Phase 1 output
Task(
    subagent_type="general-purpose",
    prompt=f"""
    Review and validate VN-RANGE-001 architecture against DfX criteria.

    INPUT: requirements_VN-RANGE-001.md (read this first)

    VALIDATE AGAINST:
    - DfX: Corrosion, Thermal, Maintainability (maritime environment)
    - Local content: ≥60% by value (Vietnamese suppliers preferred)
    - Cost target: ≤70% of import equivalent
    - Gate 2 checklist: all items with ✅/❌

    OUTPUT: architecture_review_VN-RANGE-001.md with:
    - Approved items ✅
    - Flagged items ❌ (with specific issues)
    - Recommended changes
    - Readiness score (0-100)

    STOP IF: readiness < 70. Flag to human for decision.
    TOOLS ALLOWED: Read, Write (no external calls)
    """,
    description="Validate architecture against DfX + Gate 2"
)
```

### Integration-Designer Task (Phase 3)
```python
# Master agent spawns this only if Gate 2 approved
Task(
    subagent_type="general-purpose",
    prompt=f"""
    Design integration architecture for VN-RANGE-001 deployment.

    INPUT: requirements_VN-RANGE-001.md + architecture_review_VN-RANGE-001.md

    DESIGN:
    1. Physical integration map (sensor placement, cable routing)
    2. Software integration sequence (CORTEX → LOMAH → CAM → TRN)
    3. Data flow diagram (ASCII art)
    4. Commissioning sequence (step-by-step, who does what)
    5. Fallback protocols (what if each component fails during commissioning)

    AUTOMATION GRADIENT CONSTRAINT:
    - Steps with consequence HIGH → Mark as [HUMAN-LED]
    - Steps with consequence LOW → Mark as [AI-ASSIST]
    - Safety steps → Mark as [HUMAN-ONLY], no AI delegation

    OUTPUT: integration_design_VN-RANGE-001.md
    TOOLS ALLOWED: Read, Write
    """,
    description="Design component integration and commissioning sequence"
)
```

---

## HITL Checkpoints (Non-Negotiable)

```
CHECKPOINT 1: After Phase 1 (Requirements)
  Present: requirements_VN-RANGE-001.md
  Question: "Are requirements sufficiently quantified? Any missing categories?"
  Required: Explicit A/B/C/D decision before Phase 2 starts

CHECKPOINT 2: After Phase 2 (Architecture Review)
  Present: architecture_review_VN-RANGE-001.md + readiness score
  Question: "Gate 2 readiness: [score/100]. Proceed to Phase 3?"
  Required: Explicit A/B/C/D decision. NEVER auto-proceed.

CHECKPOINT 3: After Phase 3 (Integration Design)
  Present: integration_design_VN-RANGE-001.md
  Question: "Integration design complete. Ready for on-site commissioning?"
  Required: Explicit approval from Range Safety Officer + KN

CHECKPOINT 4: Pre-Deployment (Phases 4-5)
  0% automation. Human-led safety validation only.
  AI role: documentation and record-keeping only.
```

---

## Slash Command: /run-pipeline

```markdown
# /run-pipeline command definition
# Save to: ~/.claude/commands/run-pipeline.md

Run the VN-RANGE-001 deployment pipeline for the specified phase.

Usage: /run-pipeline --product [PRODUCT] --phase [1-5]

PHASE MAPPING:
  1 = Requirements generation (90% auto)
  2 = Architecture review (70% auto, needs Phase 1 output)
  3 = Integration design (75% auto, needs Phase 2 approval)
  4 = DfX gate review (50% auto, HITL intensive)
  5 = Safety validation (0% auto, human-led)

BEFORE RUNNING:
  1. Confirm previous phase output exists and is approved
  2. Check CLAUDE.md for any deployment-specific constraints
  3. Set site-specific variables (deployment location, unit, date)

AFTER EACH PHASE:
  1. Present output to human for HITL checkpoint
  2. Wait for explicit A/B/C/D decision
  3. NEVER auto-proceed to next phase

FALLBACK PROTOCOL:
  IF Task() fails → Retry once with more explicit constraints
  IF Retry fails → Flag to human, switch to manual mode
  IF Safety issue detected → HALT immediately, log incident
```

---

## Session Hook: session_start for VN-RANGE-001

```python
# Add to ~/.claude/hooks/session_start.py (or create new hook)
# Injects VN-RANGE-001 context when pipeline keywords detected

import json, sys

data = json.load(sys.stdin)
prompt = data.get("prompt", "").lower()

if "vn-range" in prompt or "ironmesh" in prompt or "run-pipeline" in prompt:
    print("""
=== VN-RANGE-001 PIPELINE CONTEXT ===
Active Product: IRONMESH RANGE Smart Range System
Components: VN-LOMAH (acoustic) + VN-CAM (vision) + VN-TRN (analytics) + CORTEX (orchestration)
Standards: MIL-STD-810G + TCVN equivalent + Vietnamese MoD range safety regs
Local Content Target: ≥60% by value
Cost Target: ≤70% of import equivalent
HITL Rule: NEVER auto-proceed past any gate. Always present A/B/C/D options.
Automation Gradient: Reduce automation % as consequence increases.
======================================
""")
```

---

## Skill 4 Learning Capture

### What This Pipeline Teaches About Process Automation Design

1. **Automation gradient is the design constraint**, not an afterthought
   - Start with consequence mapping BEFORE deciding what to automate
   - Defense systems: safety consequence → 0% automation (always)

2. **Master-clone beats rigid graphs for edge-heavy domains**
   - Defense deployment has too many edge cases for pre-defined routing
   - Main agent's judgment IS the pipeline intelligence

3. **HITL checkpoints are architectural decisions**, not UX polish
   - Where you place checkpoints defines what the system can and cannot do autonomously
   - For VN-RANGE-001: checkpoints at every gate = safety-critical design

4. **Fallback protocols are first-class citizens**
   - Every automated step needs: What if this fails?
   - For safety-critical: fallback = human takes over, not AI retry loop

5. **The pipeline is a PRODUCT**, not just a workflow
   - IRONMESH OS value = orchestration design, not individual sensors
   - This document IS a deliverable (procurement narrative + technical spec)

---

*Generated: 2026-02-20 | Framework: Skill 4 (Process Automation Design) × Module 7 (Master-Clone)*
*Next: Create SDK script to implement Phase 1 automation → sdk_pipeline_VN-RANGE-001.py*
