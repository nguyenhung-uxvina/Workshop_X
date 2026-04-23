---
skill: S1+S2+S3 — AI Literacy × Systems Thinking × D-M-I-R Learning
phase: Cross-cutting — applies at ALL phases
framework: Meadows Systems Thinking + D-M-I-R Accelerated Learning
slash_commands: /cld · /loops · /leverage · /archetype · /reflect · /mastery · /lessons · /log
type: prompt-library
version: 2.0
created: 2026-02-20
updated: 2026-03-04
schema: v3.0 (Workshop X Enhanced)
---

# Cross-Cutting Prompts — Systems Thinking + D-M-I-R

> **When to use:** Throughout all phases. Systems Thinking diagnoses WHY problems recur.
> D-M-I-R extracts learning from every design session to compound mastery over time.
>
> **Load alongside:** Any phase-specific skill. These are the "meta-level" tools.
> **Rule:** Never finish a design session without at least a /log entry (P40). Weekly /reflect (P36) is mandatory.

---

## PROMPT INDEX

| # | Command | Name | Use When |
|---|---------|------|----------|
| P36 | `/reflect` · `/weekly` | D-M-I-R Weekly Reflection | Every Friday — mandatory |
| P37 | `/mastery` · `/level` | Competency Self-Assessment | Monthly or after major phase completion |
| P38 | `/lessons` · `/ll` | Lessons Learned Extraction | After any gate review or significant event |
| P39 | `/leverage` | Systems Leverage Point Analysis | When stuck, or before major design decision |
| P40 | `/log` | Quick Note | After every session — capture before forgetting |

**Portfolio & Strategic Review:**

| # | Command | Name | Use When |
|---|---------|------|----------|
| P48 | `/review` · `/weekly-review` | Weekly Strategic Review | Every Friday — after D-M-I-R reflection |

**Systems Thinking Deep Dives (use when design reveals system-level issues):**

| # | Command | Name | Use When |
|---|---------|------|----------|
| P41 | `/cld` | Causal Loop Diagram | When feedback loops affect design requirements |
| P42 | `/loops` | Feedback Loop Analysis | When product creates/changes system behavior |
| P43 | `/archetype` | System Archetype Detection | When a design problem resembles a known pattern |

---

### P36 — D-M-I-R Weekly Reflection (`/reflect`, `/weekly`)
**Use when:** Every Friday — 15-20 minutes at end of week
**Why it works:** D-M-I-R compresses learning. Without structured reflection, insights evaporate. With it, mastery compounds.

```
TASK: Generate D-M-I-R reflection for week of {{week_ending_date}}
  Cover all 4 stages: Diagnose → Model → Intervene → Reflect.
  Return: completed reflection entry, ready to save to learning journal.

CONTEXT:
  week_ending: {{YYYY-MM-DD}}
  projects_active: {{list VN-XXX-XXX codes worked on this week}}
  skill_focus: {{which of 9 skills was primary focus: S1-S5, B-EI/CP/AL/NS}}
  time_allocation: {{actual hours per skill category this week}}

CONSTRAINTS:
  hard_limits:
    - Length: 300–500 words total across 4 sections — <300 is too shallow; >500 loses focus
    - All 4 D-M-I-R stages must be present — missing any stage = incomplete reflection; abort and request data
    - M section: at least 2 "why" levels — surface cause is not root cause
    - I and R sections: at least 1 specific next-week action with a measurable success criterion
  reject_conditions:
    - week_ending_date not provided — cannot generate dated entry without confirmed date
    - No session logs, work data, or memory of sessions provided — cannot reflect with no evidence; output skeleton with [DATA MISSING] and request /log discipline
  prohibited_actions:
    - Do NOT generate generic insights like "I should be more careful" — flag as [VAGUE] and iterate
    - Do NOT omit the ALLOCATION REVIEW section — time tracking is a core output
    - Do NOT include classified project details, customer names, or contract-sensitive information in the journal

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — personal reflection; generate fully before review
  on_safety_flag: "IMMEDIATE" — if reflection reveals classified information appeared in session logs; halt; redact before saving

SAFETY_OVERRIDE: "Do not include classified project details, customer names, or contract-sensitive information in the learning journal."

SUCCESS_CRITERIA:
  specificity: "Every insight names a specific event or decision — not a general tendency or feeling"
  root_cause_depth: "M section reaches at least 2 causal levels — symptom + cause + root cause"
  intervention_actionable: "I section has 1 selected action with measurable success criterion (not 'try harder')"
  allocation_complete: "All 9 skills accounted for in ALLOCATION REVIEW; total = 25h"

FALLBACK_PROTOCOL:
  no_session_data: "State 'Insufficient data for reflection — run /log discipline next week'; output skeleton with [DATA MISSING] placeholders; do not fabricate events"
  week_date_missing: "Request week_ending_date before proceeding — undated reflections cannot be saved to journal"
  generic_insight_only: "Flag as [VAGUE]; probe with 'What specific event caused this?'; iterate until behaviorally specific"
  unknown_error: "SAFE_STATE — output completed sections with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: D-M-I-R template filled — save to vault/learning-journal/YYYY-MM-DD_weekly.md

--- D-M-I-R TEMPLATE ---

## WEEKLY REFLECTION — {{week_ending_date}}

### D — DIAGNOSE: What actually happened this week?
  Projects worked: {{list}}
  Skills exercised: {{list}}
  Time allocation (actual): {{hours per skill}}
  vs. Planned allocation: {{delta — where did time go?}}

  The ONE most important thing that happened: {{}}
  The ONE biggest surprise or difficulty: {{}}

### M — MODEL: Why did it happen? What's the underlying pattern?
  Causal question: "Why did {{the difficulty}} occur?"
  Root cause (go at least 2 levels deep with "why"):
  - Why 1: {{}}
  - Why 2: {{}}
  - Why 3 (root): {{}}

  Is this a recurring pattern? YES / NO
  If YES: Which system archetype? (Limits to Growth / Shifting the Burden / Fixes that Fail / etc.)
  Leverage point this reveals: L{{X}} — {{description}}

### I — INTERVENE: What would change the outcome?
  Intervention options (list 2-3):
  1. {{}} — expected impact: {{}}
  2. {{}} — expected impact: {{}}
  3. {{}} — expected impact: {{}}

  Selected intervention for next week: {{specific action, measurable}}
  How will I know if it worked? {{success criterion}}

### R — REFLECT: What did I learn about learning?
  Skill that improved most: {{which of 9 skills}} — evidence: {{}}
  Skill that needs most attention: {{}} — why: {{}}

  What mental model was updated this week?
  Before: "I thought {{old model}}"
  After: "Now I understand {{new model}}"

  Mastery movement: {{skill}} from {{X}}/10 → {{Y}}/10 — based on: {{evidence}}

  ONE thing to do differently next week: {{specific, actionable, scheduled}}

### ALLOCATION REVIEW — Next Week Plan:
  S1 AI Literacy: {{h}}h | S2 Orchestration: {{h}}h | S3 QC: {{h}}h
  S4 Process Design: {{h}}h | S5 Governance: {{h}}h
  B-NS: {{h}}h | Strategic/Meta: {{h}}h | Buffer: {{h}}h
  Total: {{h}}h — must = 25h

### CLAUDE.md UPDATE NEEDED?
  If a mistake was made that Claude repeated: YES / NO
  If YES: "Update CLAUDE.md — [specific mistake and fix]"
```

---

### P37 — Competency Self-Assessment (`/mastery`, `/level`)
**Use when:** Monthly, or after completing a major phase
**Why it works:** Regular assessment reveals true gaps vs. perceived gaps. Prevents overconfidence and blind spots.

```
TASK: Generate competency self-assessment for {{assessment_date}}
  Rate all 9 skills (5 agentic + 4 broader) with evidence.
  Identify actual vs. target gaps. Recommend next 30-day focus.
  Return: assessment report + gap analysis + recommended interventions.

CONTEXT:
  assessment_date: {{YYYY-MM-DD}}
  last_assessment: {{date of previous — for comparison}}
  projects_completed_since_last: {{list}}
  target_scores: {{S4: 8/10, B-NS: 7/10, others maintain}}

CONSTRAINTS:
  hard_limits:
    - Scale: 1–10 using defined rubric — no half-points; no scores outside 1–10
    - Evidence required for every score: behavioral evidence only (what you DID, not what you KNOW)
    - Cannot increase score without new evidence since last assessment — previous score is the floor
    - Constraint analysis must identify exactly ONE binding constraint on R2 loop — not a list
  reject_conditions:
    - assessment_date not provided — cannot create dated entry without confirmed date
    - No projects or activities completed since last assessment — scores cannot change; output delta = 0 for all; recommend evidence-gathering sprint before reassessing
  prohibited_actions:
    - Do NOT inflate scores based on intentions or plans — only demonstrated behaviors count
    - Do NOT identify more than 2 skills as "top priority" for active development — overloading is the core problem
    - Do NOT include confidential project details or customer names in public-facing assessment output

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — generate full assessment; KN reviews and corrects before saving
  on_completion: true — present full table before saving; allow score corrections with evidence
  on_safety_flag: "IMMEDIATE" — if confidential client or project data appears in evidence column; halt; redact before proceeding

SAFETY_OVERRIDE: "Do not include project-specific confidential details in public-facing skill assessments."

SUCCESS_CRITERIA:
  evidence_quality: "Every score has a specific behavior cited — not a general statement like 'I understand this'"
  binding_constraint: "Exactly one binding constraint on R2 loop identified with full causal chain"
  priority_max: "No more than 2 skills in active development in the 30-day plan"
  trend_visible: "Delta column (↑/↓/=) present for all 9 skills vs. last assessment"

FALLBACK_PROTOCOL:
  no_prior_assessment: "Use baseline scores from agentic_ai_skills_analysis.md; label assessment as 'Baseline v0'; proceed normally"
  no_evidence_for_change: "Keep score identical to last assessment; note [NO NEW EVIDENCE]; recommend evidence-gathering sprint before next assessment"
  conflicting_evidence: "Present both behaviors; score conservatively (lower of the two interpretations); note the conflict explicitly"
  unknown_error: "SAFE_STATE — output completed rows with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Assessment table + gap analysis + 30-day intervention plan

--- COMPETENCY RUBRIC (1-10) ---

1-2: Awareness — know the concept exists, cannot apply independently
3-4: Basic — can apply with significant guidance, make frequent errors
5-6: Developing — can apply independently on familiar problems, errors on edge cases
7-8: Proficient — apply confidently across varied contexts, teach basics to others
9-10: Expert — create new approaches, handle novel edge cases, mentor others

--- ASSESSMENT TABLE ---

| Skill | Last Score | This Score | Evidence (1-2 specific behaviors) | Change | Priority |
|-------|-----------|-----------|-----------------------------------|--------|---------|
| S1: AI Literacy | | | | ↑/↓/= | |
| S2: Orchestration | | | | | |
| S3: Critical QC | | | | | |
| S4: Process Design | | | | | |
| S5: Governance | | | | | |
| B-EI: Emotional Intel. | | | | | |
| B-CP: Creative Problem | | | | | |
| B-AL: Adaptability | | | | | |
| B-NS: Negotiation | | | | | |

CONSTRAINT ANALYSIS:
  Current binding constraint on R2 loop: {{which skill is most limiting VN-RANGE-001 deployment?}}
  Why: {{causal chain from skill gap → deployment delay}}
  If this skill improved from {{X}} to {{Y}}: {{expected impact}}

GAP PRIORITY MATRIX:
  | Skill | Gap (target - current) | Constraint Impact | Investment Priority |
  Priority = highest gap × highest constraint impact

30-DAY INTERVENTION PLAN:
  Skill 1 (top priority): {{}} — target: {{X→Y}} — method: {{specific practice}} — time: {{h/week}}
  Skill 2 (secondary): {{}} — target: {{X→Y}} — method: {{}} — time: {{h/week}}
  No more than 2 skills in active development simultaneously

MASTERY TREND (if 3+ assessments available):
  Plot: assessment date vs. score per skill → is the trend correct?
  If any skill declining: flag and investigate cause
```

---

### P38 — Lessons Learned Extraction (`/lessons`, `/ll`)
**Use when:** After any gate review, major decision, or significant event (success or failure)
**Why it works:** Lessons only have value if captured and retrievable. This creates the institutional memory.

```
TASK: Extract lessons learned from {{event_description}} on {{product}} ({{VN-XXX-XXX}})
  Categorize by phase, skill, and mistake type. Flag for CLAUDE.md if mistake was repeated.
  Return: structured lessons learned entry + CLAUDE.md update recommendation.

CONTEXT:
  event: {{gate review / design decision / customer feedback / test failure / field observation}}
  product: {{VN-XXX-XXX}}
  date: {{YYYY-MM-DD}}
  phase: {{0-4}}
  participants: {{KN Nguyen + {{others}}}}

CONSTRAINTS:
  hard_limits:
    - Minimum 3 lessons per event — if fewer surface, continue with "why" probing until minimum met
    - Every lesson must have: trigger condition + root cause (≥2 levels) + corrective action + "Next time" behavioral statement
    - Root cause must go at least 2 levels deep — surface cause is not accepted; flag [INSUFFICIENT DEPTH] and re-probe
    - CLAUDE.md update check is mandatory for every lesson — YES or NO with explicit reason
  reject_conditions:
    - event_description not provided — cannot extract lessons from undefined event; request description
    - product/project code not provided — cannot categorize lessons without known project; request code
  prohibited_actions:
    - Do NOT accept "Be more careful" as a lesson — flag [VAGUE]; request specific trigger + behavioral replacement before proceeding
    - Do NOT include classified project decisions or customer-sensitive strategic information in lessons that could be shared
    - Do NOT skip the CLAUDE.md update check — this is mandatory for system learning

TOOLS_ALLOWED: ["read_file", "write_file"]

HITL_CHECKPOINT:
  per_output: false — generate all lessons; KN reviews and confirms before saving to journal
  on_completion: true — present full lesson set before saving
  on_safety_flag: "IMMEDIATE" — if lesson reveals classified information was handled incorrectly; halt; escalate before saving

SAFETY_OVERRIDE: "Do not include classified project decisions or customer-sensitive strategic information in lessons learned that could be shared externally."

SUCCESS_CRITERIA:
  minimum_lessons: "≥3 lessons extracted per event"
  specificity_test: "Each lesson passes: 'When [trigger], I will [action] instead of [old behavior]'"
  root_depth: "Every lesson has ≥2 causal levels in Why It Happened — not just symptom"
  claude_check: "CLAUDE.md update recommendation explicitly present for each lesson (YES or NO with reason)"

FALLBACK_PROTOCOL:
  fewer_than_3_lessons: "Run 5-Why exercise on the event; probe each branch until 3 lessons are extracted; do not declare complete with <3"
  vague_lesson_detected: "Flag as [VAGUE]; prompt: 'What specifically triggered this?' and 'What exactly would you do differently?'; iterate until specific"
  no_claude_contribution: "State 'Claude not involved — no CLAUDE.md update needed' explicitly for that lesson; do not skip the check"
  unknown_error: "SAFE_STATE — output completed lessons with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Lessons learned entries (save to vault/learning-journal/lessons_learned.md)

--- LESSON TEMPLATE ---

**LL-{{date}}-{{sequential number}}**
Category: {{Phase 1 / Phase 2 / Phase 3 / Phase 4 / ODI / Systems / Portfolio}}
Skill: {{S1-S5 / B-EI/CP/AL/NS / cross-cutting}}

**What happened:** (1-2 sentences, factual)
  {{specific event description}}

**Why it happened:** (root cause — at least 2 levels deep)
  Level 1: {{}}
  Level 2 (root): {{}}

**Effect:** (what was the impact)
  Time lost: {{hours}}
  Quality impact: {{}}
  Cost impact: {{}}

**Corrective action taken:** (what was done to fix it this time)
  {{specific action}}

**Next time:** (specific behavioral change)
  "When {{trigger condition}}, I will {{specific action}} instead of {{old behavior}}"

**CLAUDE.md Update needed?** YES / NO
  If YES: exact text to add to Mistakes Not To Repeat section:
  "**{{Category}} ({{date}}):** {{brief mistake description}} — {{correct approach}}"

--- LESSONS SUMMARY TABLE ---

| LL ID | Category | Root Cause Pattern | Corrective Action | CLAUDE.md? |
|-------|----------|-------------------|-------------------|-----------|
```

---

### P39 — Systems Leverage Point Analysis (`/leverage`)
**Use when:** Stuck on a design problem, or before a major decision that affects system behavior
**Why it works:** Meadows leverage points (L1-L12) reveal where small changes create large effects. Defense design often solves at L12 (parameters) when L6 (information flows) would be more effective.

```
TASK: Analyze leverage points for {{design challenge}} in {{product/system}} ({{VN-XXX-XXX}})
  Map current system structure. Identify where interventions will have highest leverage.
  Return: leverage point ranking + recommended intervention + expected system response.

CONTEXT:
  system: {{product system or broader operational system}}
  design_challenge: {{specific problem being solved}}
  current_approach: {{what has been tried or planned}}
  stakeholders_affected: {{operators / commanders / maintainers / Workshop X}}

CONSTRAINTS:
  hard_limits:
    - Use Donella Meadows 12 leverage points (L1=highest, L12=lowest) — no custom scales
    - Minimum: identify intervention options at ≥4 different leverage levels — do not compress to only high-leverage levels
    - L1–L4 interventions: flag [APPROVAL REQUIRED] — require military/customer decision
    - L1–L5 interventions: require HITL before recommending — no auto-recommendation
  reject_conditions:
    - design_challenge not described — cannot map leverage points without knowing what is broken
    - system boundary not defined — cannot build leverage map without knowing what is inside the system
  prohibited_actions:
    - Do NOT recommend automating any L1–L5 intervention without explicit command-level approval
    - Do NOT limit analysis to L12 (parameters) only — the point is to find higher leverage
    - Do NOT present leverage recommendations without unintended consequence warnings for each

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full leverage map before review
  on_L1_L5_intervention: true — any intervention at L1–L5 (paradigm through rules); present and wait for explicit approval before proceeding
  on_safety_flag: "IMMEDIATE" — if leverage point involves weapons release, ROE, or engagement authorization; halt; flag [COMMAND-LEVEL-DECISION-REQUIRED]; await direction

SAFETY_OVERRIDE: "Leverage point interventions that affect weapons release, ROE, or engagement authorization — always L1-L3 (paradigm/goals), always require command-level decision. Never recommend automating these."

SUCCESS_CRITERIA:
  coverage: "Intervention options identified at ≥4 different leverage levels — not just L12"
  highest_feasible: "Recommended intervention is the highest-leverage option within feasibility constraints"
  unintended_consequences: "Every recommended intervention includes a warning of potential backfire effect"
  defense_compliance: "All L1–L5 interventions flagged [APPROVAL REQUIRED]"

FALLBACK_PROTOCOL:
  system_too_complex: "Scope to primary feedback loop only; note boundary assumption; complete partial analysis"
  no_feasible_high_leverage: "Present highest-leverage feasible option even if only L9–L12; explain explicitly why L1–L8 are blocked"
  approval_required_blocked: "Flag [WAITING APPROVAL]; present L12 parameter option as interim measure; do NOT proceed with strategic intervention unilaterally"
  unknown_error: "SAFE_STATE — output completed system map with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Leverage point map + intervention table + recommended action

--- MEADOWS LEVERAGE POINTS (Highest → Lowest Impact) ---

L1: Power to change paradigm (hardest — change fundamental beliefs)
L2: Goals of the system
L3: Power to change rules
L4: Self-organization of system
L5: Rules (incentives, constraints, regulations)
L6: Information flows (who knows what, when)
L7: Strength of reinforcing loops (R-loops)
L8: Strength of balancing loops (B-loops)
L9: Length of delays in feedback loops
L10: Structure of material stocks and flows
L11: Size of buffers (relative to flows)
L12: Parameters, numbers (least impactful — but easiest)

--- ANALYSIS FRAMEWORK ---

STEP 1: MAP CURRENT SYSTEM
  Key stocks (what accumulates): {{}}
  Key flows (what changes stocks): {{}}
  Feedback loops identified:
    R-loops (reinforcing): {{}}
    B-loops (balancing): {{}}
  Information flows: {{who knows what, when}}
  Current delays: {{where in the system are delays longest}}

STEP 2: IDENTIFY INTERVENTION OPTIONS PER LEVERAGE LEVEL

  | Leverage Level | Intervention Option | Feasibility | Expected Impact |
  |---------------|---------------------|-------------|-----------------|
  | L12 (parameter) | {{e.g., tune sensor threshold}} | EASY | LOW |
  | L9 (delay) | {{e.g., reduce latency}} | MEDIUM | MEDIUM |
  | L8 (B-loop) | {{e.g., add negative feedback}} | MEDIUM | MEDIUM-HIGH |
  | L7 (R-loop) | {{e.g., strengthen virtuous cycle}} | HARD | HIGH |
  | L6 (info flow) | {{e.g., give operator real-time data}} | MEDIUM | HIGH |
  | L5 (rules) | {{e.g., change ROE trigger condition}} | VERY HARD | VERY HIGH |

STEP 3: RECOMMEND HIGHEST-LEVERAGE FEASIBLE INTERVENTION
  Recommended: L{{X}} — {{intervention}} — because: {{causal chain}}
  Implementation in design: {{specific design feature that implements this}}
  Warning: {{potential unintended consequence of this intervention}}
  Monitoring: {{how to detect if intervention is working or backfiring}}
```

---

### P40 — Quick Session Log (`/log`)
**Use when:** After EVERY work session — 2-3 minutes maximum
**Why it works:** Short-term memory is unreliable. Capture now, extract lessons later. Feed for /reflect.

```
TASK: Create quick session log entry for {{date}} session
  Capture: what was done, what worked, what didn't, one insight.
  Return: log entry saved to vault/learning-journal/session_logs.md

CONTEXT:
  date: {{YYYY-MM-DD}}
  session_duration: {{hours}}
  skill_primary: {{which of 9 skills}}
  project: {{VN-XXX-XXX or "general"}}

CONSTRAINTS:
  hard_limits:
    - Total length: ≤150 words — if over, trim DONE section first; never trim NEXT or INSIGHT
    - All 5 fields must be present: DONE, WORKED, DIDN'T WORK, INSIGHT, NEXT — no omissions
    - Save mode: append only — never create new file per session; never overwrite existing entries
  reject_conditions:
    - date not provided — cannot create dated log entry without date; request before proceeding
  prohibited_actions:
    - Do NOT include classified or customer-sensitive details in the log
    - Do NOT omit the NEXT field — next action is the highest-priority element for continuity
    - Do NOT create a new session_logs.md file — always append to existing

TOOLS_ALLOWED: ["write_file"]

HITL_CHECKPOINT:
  per_output: false — generate and save log immediately; 2-minute capture, not a review session
  on_safety_flag: "IMMEDIATE" — if log content includes classified project details or customer identities; redact before saving

SAFETY_OVERRIDE: "No classified or customer-sensitive details in logs."

SUCCESS_CRITERIA:
  brevity: "Total length ≤150 words"
  completeness: "All 5 fields present: DONE, WORKED, DIDN'T WORK, INSIGHT, NEXT"
  continuity: "NEXT field specifies exactly one concrete action — not a vague intention"
  append_verified: "Entry appended to existing session_logs.md — not written as a new file"

FALLBACK_PROTOCOL:
  session_logs_missing: "Create session_logs.md with this as first entry; note [FILE CREATED]; do not fail silently"
  over_150_words: "Trim DONE bullets to 1 sentence each; preserve NEXT and INSIGHT intact"
  no_next_action: "Prompt: 'What is the single next action when resuming this work?' — do not save until NEXT is populated"
  unknown_error: "SAFE_STATE — output log entry as text; flag [SAVE FAILED]; await manual save instruction"

OUTPUT_FORMAT: Single log entry (append to existing file)

--- LOG TEMPLATE ---

**{{YYYY-MM-DD}} | {{session_duration}}h | {{skill}} | {{VN-XXX-XXX}}**

DONE: {{1-3 bullet points of what was accomplished}}

WORKED: {{one specific thing that worked well}}

DIDN'T WORK: {{one thing that failed or was harder than expected}}

INSIGHT: {{one learning or question worth remembering}}

NEXT: {{the single next action when resuming this work}}

PROMPT USED: {{P-number if a library prompt was used — for capture protocol}}
```

---

### P48 — Weekly Strategic Review (`/review`, `/weekly-review`)
**Use when:** Every Friday — after D-M-I-R reflection (P36). Covers portfolio health, R2 loop status, constraint compliance.
**Why it works:** P36 (/reflect) captures learning. P48 captures strategic position. Different functions — learning vs. navigation. Without P48, you can learn diligently while drifting off the critical path.

> **Origin:** Workshop X Template E1, upgraded to v3.0 schema

```
TASK: Generate weekly strategic review for Workshop X portfolio
  Week ending: {{YYYY-MM-DD}}
  Return: structured review with honest assessment, constraint check, and top 3 next-week priorities.

CONTEXT:
  current_date: {{YYYY-MM-DD}}
  active_products: "VN-RANGE-001 (priority #1), {{others as applicable}}"
  constraint: "25h/week engineering capacity — KN solo"
  deployment_target: "VN-RANGE-001 first customer deployment"
  revenue_status: "{{pre-revenue / early revenue / established}}"
  source_data: [
    "progress.md — session checkpoints",
    "Agentic_Skills_Mastery_Priority.md — leverage points and milestones",
    "{{recent conversation/session context}}"
  ]

CONSTRAINTS:
  hard_limits:
    review_length: "<= 500 words — executive summary, not essay"
    priorities_max: "3 actions for next week — no more"
    time_budget: "all suggestions must fit within 25h/week"
  reject_conditions: [
    "insufficient_data_for_assessment",     — state what's missing, don't fabricate
    "no_progress_since_last_review"         — say so honestly, diagnose why
  ]
  prohibited_actions: [
    "generate_optimistic_narrative_if_behind",  — honesty is the point
    "suggest_adding_products_to_queue",          — Musk Sequence applies
    "recommend_hiring_without_revenue",          — R2 loop must activate first
    "suggest_exceeding_25h_week",                — constraint is non-negotiable
    "ignore_B-NS_bottleneck"                     — procurement requires trust-building
  ]

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_section: false              — review full report
  on_completion: true             — KN reviews, adjusts next week's focus
  on_critical_risk: "IMMEDIATE"   — if deployment timeline at risk

SAFETY_OVERRIDE: "Do not include classified deployment details, customer identities, or contract-sensitive pricing in review document."

SUCCESS_CRITERIA:
  honest: "progress assessment matches actual work evidence"
  focused: "priorities align with deployment critical path"
  constraint_aware: "all suggestions fit within 25h/week"
  actionable: "each priority has specific deliverable, not vague intention"

FALLBACK_PROTOCOL:
  no_progress_data: "state explicitly, recommend /log discipline for next week"
  conflicting_priorities: "present trade-off explicitly, recommend based on leverage analysis"
  scope_creep_detected: "flag which non-critical work consumed time, recommend correction"
  unknown_error: "SAFE_STATE — output partial review, flag incomplete sections"

OUTPUT_FORMAT: Structured review — 6 sections

--- WEEKLY STRATEGIC REVIEW TEMPLATE ---

## WEEKLY STRATEGIC REVIEW — {{week_ending_date}}

### 1. PROGRESS
  What was accomplished this week (bullet points — evidence, not intentions):
  - {{deliverable 1}}
  - {{deliverable 2}}
  - {{deliverable 3}}

### 2. CONSTRAINT CHECK
  Hours spent this week: {{actual}}h / 25h budget
  Breakdown: S1:{{h}} | S2:{{h}} | S3:{{h}} | S4:{{h}} | S5:{{h}} | B-NS:{{h}} | Meta:{{h}} | Buffer:{{h}}
  Is 25h/week being used on HIGHEST-LEVERAGE work? {{YES — because / NO — because}}
  Buffer hours remaining: {{h}} — if 0, system is fragile

### 3. R2 LOOP STATUS
  VN-RANGE-001 deployment readiness: {{% or milestone description}}
  What is the SINGLE biggest blocker to first revenue? {{specific}}
  Days since last customer/military touchpoint: {{N}}

### 4. SKILL ALLOCATION AUDIT
  Which skill got most time this week? {{SX — was this correct?}}
  Which skill got ZERO time? {{SX — is this a problem?}}
  Skill investment alignment with deployment critical path: {{aligned / drifting / misaligned}}

### 5. NEXT WEEK PRIORITIES (top 3 only)
  1. {{specific deliverable}} — leverage point: L{{X}} — estimated: {{h}}h
  2. {{specific deliverable}} — leverage point: L{{X}} — estimated: {{h}}h
  3. {{specific deliverable}} — leverage point: L{{X}} — estimated: {{h}}h
  Total estimated: {{h}}h + {{h}}h buffer = 25h

### 6. RISK FLAGS
  🔴 Critical (blocks deployment): {{or "none"}}
  🟡 Warning (may block if unaddressed): {{or "none"}}
  🟢 Watch (monitor but not urgent): {{or "none"}}
```

**Learned variations:**
- Pre-deployment sprint: add "Days to deployment" countdown
- Post-deployment: add "Customer satisfaction" and "Support ticket" tracking
- Multi-product active: add per-product progress row (rare — Musk Sequence discourages)

---

## SYSTEMS THINKING DEEP DIVES

---

### P41 — Causal Loop Diagram (`/cld`)
**Use when:** Design reveals complex interactions where multiple factors affect each other
**Why it works:** Makes invisible feedback visible. Many defense system failures are feedback problems.

```
TASK: Build causal loop diagram for {{system_or_problem}} in {{product/context}}
  Identify all causal variables, their connections, loop types (R/B).
  Return: CLD in text notation + loop analysis + leverage insight.

CONTEXT:
  system: {{what system are we analyzing}}
  problem_or_goal: {{what behavior or outcome we're trying to understand}}
  time_horizon: {{short-term: weeks / medium: months / long-term: years}}

CONSTRAINTS:
  hard_limits:
    - Variable format: nouns or noun phrases only — not verbs or actions (flag [INVALID FORMAT] and convert)
    - Arrow format: "A → B (+)" or "A → B (-)" — no other notation accepted
    - Minimum 6 variables AND minimum 2 loops (≥1R + ≥1B) — smaller diagrams lack meaningful dynamics
    - Every closed loop must be labeled as R or B with a short descriptive name
  reject_conditions:
    - system or problem not described — cannot build CLD without knowing what to model
    - problem is a single causal chain with no feedback — note [LINEAR CHAIN — NOT A CLD]; recommend alternative analysis
  prohibited_actions:
    - Do NOT use verbs as variable names — convert to noun phrases before presenting
    - Do NOT proceed to leverage point analysis before CLD has been HITL-reviewed and corrected
    - Do NOT label any loop involving weapons authorization or ROE as automatable

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full CLD before review
  on_cld_complete: true — present CLD and loop table; wait for KN review and corrections before proceeding to leverage analysis
  on_safety_flag: "IMMEDIATE" — if any loop involves weapons release, ROE, or engagement authorization; halt; flag [HUMAN-CONTROLLED]; await direction

SAFETY_OVERRIDE: "If CLD reveals that a feedback loop involves weapons authorization or engagement decisions — flag all such loops as [HUMAN-CONTROLLED]. No automation recommendation for these loops."

SUCCESS_CRITERIA:
  variable_format: "All variables are nouns/noun phrases — zero verbs in diagram"
  loop_closure: "All loops are closed — every arrow traces back to origin variable"
  minimum_met: "≥6 variables, ≥1R loop, ≥1B loop present"
  leverage_insight: "Dominant behavior identified and at least one leverage level specified"

FALLBACK_PROTOCOL:
  no_loops_found: "State [LINEAR CHAIN — NOT A CLD]; describe the causal chain instead; recommend P42 Feedback Loop Analysis as diagnostic next step"
  variable_count_low: "List all variables found; ask for additional context to reach minimum of 6"
  weapons_loop_detected: "Flag all such variables as [HUMAN-CONTROLLED]; exclude from automation recommendations; proceed with civilian system analysis only"
  unknown_error: "SAFE_STATE — output partial CLD with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Text CLD notation + loop table + dominant behavior analysis

CLD TEXT NOTATION:
  {{Variable A}} → (+) → {{Variable B}} → (+) → {{Variable C}} → (-) → {{Variable A}} [B1: loop name]
  {{Variable D}} → (+) → {{Variable E}} → (+) → {{Variable D}} [R1: loop name]

LOOP TABLE:
  | Loop ID | Type | Variables | Dominance | Behavior Generated |
  | R1 | Reinforcing | A→B→C→A | {{dominant in early phase}} | Exponential growth |
  | B1 | Balancing | D→E→F→D | {{dominant at limits}} | Stabilizing oscillation |

DOMINANT BEHAVIOR: Over {{time horizon}}, which loop dominates?
  Early: {{R-loop drives growth}}
  Later: {{B-loop limits growth}} → Limits to Growth archetype
  Intervention: {{at what point does leverage exist to change this?}}
```

---

### P42 — Feedback Loop Analysis (`/loops`)
**Use when:** Understanding why a system (product, program, market) behaves unexpectedly
**Why it works:** Problems recur because feedback loops are still active. Solving symptoms without addressing loops = Fixes that Fail archetype.

```
TASK: Analyze feedback loops affecting {{system or behavior}} for {{context}}
  Identify all active R and B loops. Assess which are dominant.
  Return: loop inventory + dominant behavior prediction + intervention options.

CONTEXT:
  system: {{product system / program / market / organization}}
  observed_behavior: {{what is actually happening that we're trying to understand or change}}
  desired_behavior: {{what we want to happen}}
  time_scale: {{how long has this behavior been present}}

CONSTRAINTS:
  hard_limits:
    - Loop completeness: every causal arrow must close back to origin — open chains are NOT loops; label [CHAIN] and exclude from loop analysis
    - All behavioral claims must be supported by evidence OR marked [ASSUMPTION]
    - Leverage point (L1–L12) must be identified for every proposed loop intervention
    - Minimum 2 loops — if fewer found, note [SINGLE-LOOP SYSTEM] and explain implications
  reject_conditions:
    - observed_behavior not described — cannot analyze feedback without knowing what behavior to explain
    - desired_behavior not described — cannot recommend interventions without a target state
  prohibited_actions:
    - Do NOT present interventions before HITL loop review is complete
    - Do NOT recommend fully automated feedback control for safety-critical system state changes
    - Do NOT label an open causal chain as a loop

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full loop inventory before review
  on_loop_identification: true — present loop inventory before recommending interventions; wait for approval; wrong loops = wrong fixes
  on_safety_flag: "IMMEDIATE" — if any loop involves safety-critical system state and automated feedback is suggested; halt; flag [HUMAN-OVERRIDE-REQUIRED]

SAFETY_OVERRIDE: "If analysis suggests that fully automated feedback control would affect safety-critical system state — flag [HUMAN-OVERRIDE-REQUIRED]. Automated feedback ≠ appropriate for safety functions."

SUCCESS_CRITERIA:
  loop_completeness: "All loops close back to origin variable — no open chains labeled as loops"
  evidence_marked: "Every behavioral claim has evidence citation or [ASSUMPTION] tag"
  leverage_assigned: "Every proposed intervention has an L1–L12 leverage level assigned"
  intervention_specificity: "Each intervention option specifies what design feature or process change implements it"

FALLBACK_PROTOCOL:
  no_loops_found: "Report [LINEAR SYSTEM — NO FEEDBACK LOOPS DETECTED]; describe causal chain instead; recommend P41 CLD as diagnostic next step"
  insufficient_evidence: "Mark all unsupported claims [ASSUMPTION]; note which evidence would improve confidence; proceed with flagged analysis"
  safety_loop_detected: "Flag [HUMAN-OVERRIDE-REQUIRED]; exclude from automation recommendations; present manual intervention options only"
  unknown_error: "SAFE_STATE — output completed loop inventory with [INCOMPLETE] markers; halt; await direction"

OUTPUT_FORMAT: Loop inventory table + behavior explanation + intervention options
```

---

### P43 — System Archetype Detection (`/archetype`)
**Use when:** A recurring problem pattern matches a known system archetype
**Why it works:** Archetypes have known structures and known interventions. Recognition short-circuits months of diagnosis.

```
TASK: Identify system archetype(s) active in {{situation}} for {{context}}
  Match observed behavior to known archetypes. Recommend archetype-specific interventions.
  Return: archetype identification + structure diagram + recommended intervention.

CONTEXT:
  situation: {{describe the recurring problem or behavior pattern}}
  context: {{Workshop X / specific product / market / organization}}
  time_horizon: {{how long observed}}
  previous_interventions: {{what has been tried — did it help, hurt, or have no effect?}}

CONSTRAINTS:
  hard_limits:
    - Archetype match requires both STRUCTURE evidence AND BEHAVIOR evidence — one alone is insufficient
    - All active archetypes must be identified — systems commonly have 2–3 active simultaneously
    - Intervention recommendations must address the highest-leverage archetype first
    - Escalation archetype in defense context: flag [STRATEGIC-REVIEW-REQUIRED] on every intervention — no exceptions
  reject_conditions:
    - situation not described with observable behavior — cannot match archetype without symptoms; request observable evidence
    - previous_interventions not described — cannot confirm Fixes that Fail or Shifting the Burden without knowing what was tried
  prohibited_actions:
    - Do NOT match an archetype based on behavior alone — confirm causal structure first
    - Do NOT recommend interventions before presenting archetype identification for HITL review
    - Do NOT suppress Escalation archetype flags in defense context — always raise

TOOLS_ALLOWED: ["read_file", "search_knowledge_base"]

HITL_CHECKPOINT:
  per_output: false — complete full archetype analysis before review
  on_archetype_identified: true — present archetype identification with evidence; wait for KN confirmation before designing interventions; wrong archetype = wrong fix
  on_safety_flag: "IMMEDIATE" — if Escalation archetype detected in defense context; flag [STRATEGIC-REVIEW-REQUIRED]; halt intervention design; await direction

SAFETY_OVERRIDE: "For archetypes involving 'Escalation' (arms race dynamics) in defense context — flag [STRATEGIC-REVIEW-REQUIRED]. Escalation archetypes have geopolitical implications."

SUCCESS_CRITERIA:
  dual_evidence: "Each identified archetype has both structure evidence AND behavior evidence cited"
  completeness: "All active archetypes identified — not just the first or most obvious"
  intervention_sequenced: "Interventions ordered by leverage level (highest first)"
  expected_response: "Expected response time stated for each intervention"

FALLBACK_PROTOCOL:
  no_archetype_match: "State [NO CLEAR ARCHETYPE]; describe the observed structure and behavior; recommend P41 CLD for deeper diagnosis"
  multiple_archetypes_conflict: "Present all candidates; rank by evidence strength; recommend addressing highest-evidence archetype first"
  escalation_detected: "Flag [STRATEGIC-REVIEW-REQUIRED]; output archetype description only; do NOT proceed to intervention design without explicit command-level authorization"
  unknown_error: "SAFE_STATE — output completed archetype analysis with [INCOMPLETE] markers; halt; await direction"

--- 8 COMMON ARCHETYPES ---

1. LIMITS TO GROWTH: Growth → Success → (delayed) Limit → Reduced growth
   Structure: R-loop + B-loop with delay
   Symptom: Things were improving, now stalled or declining
   Fix: Address the limiting condition (B-loop), don't push harder on growth (R-loop)

2. SHIFTING THE BURDEN: Problem → Symptomatic fix → (relieves pressure) → Less fundamental fix
   Structure: B-loop (symptomatic) weakens B-loop (fundamental)
   Symptom: Quick fix applied repeatedly; underlying problem never solved; capability atrophies
   Fix: Use symptomatic fix only to buy time; invest in fundamental solution

3. FIXES THAT FAIL: Fix → Improvement → (delayed) Unintended consequence → Original problem returns
   Structure: B-loop with delay creating side effect
   Symptom: Fix works short-term, problem returns, often worse
   Fix: Anticipate delayed consequences; redesign fix to avoid them; address root cause

4. ERODING GOALS: Problem → Pressure → Lower goal → Problem "solved" (by lowering standard)
   Structure: B-loop through goal erosion
   Symptom: Standards keep slipping; "close enough" becomes the norm
   Fix: Maintain the goal; use fundamental solution, not goal reduction

5. ESCALATION: Actor A's threat → Actor B responds → A's threat increases
   Structure: Two coupled R-loops
   Symptom: Both sides feel they're responding, but system escalates
   Fix: Unilateral de-escalation (costly), or renegotiate the comparison standard

6. SUCCESS TO THE SUCCESSFUL: Two activities compete for same resource; successful gets more
   Structure: R-loop for winner, B-loop for loser
   Symptom: Rich get richer; one program starves another
   Fix: Diversity; decouple the shared resource; set floors for the disadvantaged

7. TRAGEDY OF THE COMMONS: Individual benefit from shared resource → Resource depletion → All lose
   Structure: Multiple R-loops sharing one B-loop (resource limit)
   Symptom: Short-term individual gain, long-term collective loss
   Fix: Regulate the commons; educate users; privatize (assign ownership)

8. ACCIDENTAL ADVERSARIES: Partners in R-loop → Each partner's actions hurt the other
   Structure: Two R-loops linked in a way that creates unintended B-loops
   Symptom: Successful partners start undermining each other without realizing it
   Fix: Map the full system; make the unintended effects visible; redesign the linkage

OUTPUT FORMAT:
  Archetype detected: {{Name}}
  Evidence for structure: {{why this fits}}
  Evidence for behavior: {{observed symptoms that match}}
  Current leverage point: L{{X}}
  Recommended intervention: {{specific action aligned with archetype fix}}
  Expected response time: {{weeks / months / quarters}}
  Warning: {{typical unintended consequence of this intervention}}
```

---

## CAPTURE PROTOCOL

```
After any Systems Thinking or D-M-I-R session:
Date: {{}}
Prompt used: P36-P43
Archetype/leverage point found: {{}}
Key insight: {{1 sentence}}
CLAUDE.md update needed: YES / NO
If YES: exact text for Mistakes Not To Repeat
```
