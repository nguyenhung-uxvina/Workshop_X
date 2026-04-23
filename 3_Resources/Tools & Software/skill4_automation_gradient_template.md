# Skill 4: Process Automation Design
## Automation Gradient Template × Workshop X Defense Context

**Created:** 2026-02-20
**Framework:** "The 5 Skills AI Still Can't Replace" — Skill 4 Formalized
**Applies to:** All Workshop X product development and deployment workflows

---

## The Core Framework

```
AUTOMATION GRADIENT PRINCIPLE:
═══════════════════════════════════════════════════════════════
Automation % = f(consequence level)

Where consequence is defined by:
  - What fails if AI gets this wrong?
  - Can the failure be reversed?
  - Who bears accountability for the decision?
  - Does Vietnamese military trust require human sign-off?

SCALE:
  NEGLIGIBLE  → 95-100% automated  (no meaningful harm if wrong)
  LOW         → 80-95% automated   (reversible, low cost to fix)
  MEDIUM      → 60-80% automated   (significant rework if wrong)
  HIGH        → 30-60% automated   (safety/legal/trust impact)
  CRITICAL    → 0-20% automated    (safety-critical, life/mission)
  ABSOLUTE    → 0% automated       (always human, no exceptions)
═══════════════════════════════════════════════════════════════
```

---

## Automation Gradient Map: VN-RANGE-001

```
STEP                          │ CONSEQUENCE │ AUTO % │ MODE        │ FALLBACK
──────────────────────────────┼─────────────┼────────┼─────────────┼──────────────────
Requirements drafting          │ LOW         │ 90%    │ AI-ASSIST   │ Human drafts
Supplier research (local VN)   │ LOW         │ 85%    │ AI-ASSIST   │ Manual search
DfX checklist generation       │ LOW         │ 90%    │ AI-ASSIST   │ Template fill
Architecture documentation     │ MEDIUM      │ 70%    │ SEMI-AUTO   │ Human writes
Integration sequence design    │ MEDIUM      │ 75%    │ SEMI-AUTO   │ Human designs
Gate readiness scoring         │ MEDIUM      │ 65%    │ SEMI-AUTO   │ Human scores
Physical sensor placement      │ HIGH        │ 40%    │ HUMAN-LED   │ Senior engineer
Commissioning sequence exec    │ HIGH        │ 45%    │ HUMAN-LED   │ Manual procedure
TCVN compliance verification   │ HIGH        │ 50%    │ HUMAN-LED   │ Standards body
Go/No-Go gate decision         │ CRITICAL    │ 5%     │ HUMAN-ONLY  │ N/A (IS fallback)
Safety interlock testing       │ CRITICAL    │ 10%    │ HUMAN-ONLY  │ Manual test
Range officer qualification    │ ABSOLUTE    │ 0%     │ HUMAN-ONLY  │ N/A
Military acceptance sign-off   │ ABSOLUTE    │ 0%     │ HUMAN-ONLY  │ N/A
```

---

## Generic Workshop X Template

```
ANY PRODUCT — Automation Decision Worksheet:

Step: [describe the step]
─────────────────────────────────────────────────────
Question 1: "What fails if AI gets this wrong?"
  → [describe failure mode]

Question 2: "Can the failure be reversed?"
  → YES (cost <X) → consider automating
  → NO (safety/trust/legal) → reduce automation %

Question 3: "Who bears accountability?"
  → AI company → lower automation
  → KN Nguyen → medium automation
  → Vietnamese military → HITL required
  → Range Safety Officer → human-only

Question 4: "What's the fallback?"
  → [describe what happens when automation fails]
  → If no clear fallback → do NOT automate

RESULT: Auto % = ____%  |  Mode: AI-ASSIST / SEMI-AUTO / HUMAN-LED / HUMAN-ONLY
─────────────────────────────────────────────────────
```

---

## Automation Modes — Definitions

| Mode | Automation % | AI Role | Human Role | HITL Checkpoint? |
|------|-------------|---------|------------|-----------------|
| **AI-ASSIST** | 80-95% | AI executes, drafts, generates | Reviews output, approves at end | End of batch |
| **SEMI-AUTO** | 60-80% | AI prepares, suggests, analyzes | Confirms each significant decision | Per decision |
| **HUMAN-LED** | 30-60% | AI supports, documents, checks | Human executes, AI validates | Continuous |
| **HUMAN-ONLY** | 0-20% | AI observes and logs only | Human executes and decides | N/A (human IS checkpoint) |

---

## Where AI Adds Value at Each Mode

### AI-ASSIST (High Automation)
- First draft generation (requirements, docs, code)
- Research synthesis (standards, suppliers, precedents)
- Repetitive calculations (DfX scoring, cost estimation)
- Template population (gate reports, BOM drafts)

### SEMI-AUTO (Medium Automation)
- Architecture validation (AI checks, human approves)
- Compliance mapping (AI identifies gaps, human verifies)
- Test case generation (AI proposes, human selects)
- Risk assessment drafts (AI scores, human judges)

### HUMAN-LED (Low Automation)
- Physical integration (AI provides instructions, human executes)
- Edge case resolution (AI flags, human decides)
- Stakeholder negotiation prep (AI drafts talking points)
- Gate review facilitation (AI presents data, human decides)

### HUMAN-ONLY (Zero Automation)
- Safety-critical GO/NO-GO decisions
- Military acceptance and sign-off
- Rules of Engagement interpretation
- Ethical/legal accountability decisions

---

## Anti-Patterns to Avoid

| Anti-Pattern | Why It Fails | Correct Approach |
|-------------|-------------|-----------------|
| Automate everything for speed | Edge cases in defense = dangerous | Apply gradient; reduce auto for high-consequence |
| Rigid pipeline for edge-heavy domains | Pipeline breaks at first unusual case | Master-clone: main agent decides routing dynamically |
| AI generates safety documentation | AI confident ≠ AI correct | Human validates ALL safety docs, AI is scribe only |
| Skip HITL to save time | Trust cycle broken if military catches error | HITL at every gate, non-negotiable |
| Same automation % for all steps | Ignores consequence variation | Use gradient map per step |
| No fallback protocols | System halts when AI fails | Every automated step needs explicit fallback |

---

## Workshop X Products — Gradient Quick Reference

| Product | Highest-consequence step | Auto % for that step |
|---------|--------------------------|---------------------|
| VN-RANGE-001 | Military range safety validation | 0% |
| RCWS-127-NAVAL | Fire control GO decision | 0% |
| VN-SMASH | Engagement solution approval | 0% |
| VN-LOMAH | Shot detection (acoustic) | 75% (SEMI-AUTO, fusion with vision) |
| VN-CAM | Hit scoring | 70% (SEMI-AUTO, RSO reviews) |
| VN-TRN | Training report generation | 90% (AI-ASSIST, human signs) |
| UAV Catapult | Launch GO/NO-GO | 0% |
| TARGET-DRONE-001 | Mission abort command | 0% |
| Training Grenade | Safety distance check | 0% |
| VN-CUA | Intrusion force response | 0% |

---

## Skill 4 Self-Assessment Rubric (from agentic_ai_skills_analysis.md)

**Current score: 6/10 → Target: 8/10**

| Criterion | 6/10 (Current) | 8/10 (Target) |
|-----------|---------------|---------------|
| Automation gradient | Conceptual understanding | Applied to all Workshop X products with documented maps |
| Workflow documentation | Informal, mental model only | Formal docs: this template + product-specific maps |
| Deployment process design | Conceptual (Musk Sequence) | Implemented: VN-RANGE-001 pipeline document + SDK script |
| Fallback protocols | Known but undocumented | Documented for every automated step in each product |
| HITL checkpoint design | Intuitive | Systematic: checkpoint per consequence level |

**Evidence of 8/10 mastery:**
- [ ] This automation gradient template exists and is used consistently
- [ ] VN-RANGE-001 pipeline document complete (pipeline_VN-RANGE-001.md ✅)
- [ ] SDK pipeline script runs Phase 1 successfully (sdk_pipeline_VN-RANGE-001.py ✅)
- [ ] Gradient map applied to ≥3 other Workshop X products
- [ ] Fallback protocols documented for all automated steps in VN-RANGE-001

---

*Skill 4 mastery test: "Can you design an automation gradient for any new Workshop X product in 15 minutes?"*
*If yes → 8/10. If not yet → keep applying this template until it's instinct.*
