# DELEGATION TEMPLATE: E1-WEEKLY
## Weekly Strategic Review Preparation

**Category:** Strategic & Portfolio | **HITL:** 10min review | **Time Saved:** 1h | **Frequency:** Weekly (non-negotiable)

---

## Invocation

```
agent.run({
  task: "Prepare weekly strategic review for Workshop X portfolio",

  context: {
    current_date: "[date]",
    active_products: "VN-RANGE-001 (priority), [others as applicable]",
    constraint: "25h/week engineering capacity",
    deployment_target: "VN-RANGE-001 first deployment",
    source_data: [
      "RCWS-127-NAVAL_00_project_brief.md",
      "V-SMASH_00_project_brief.md",
      "VN-TRN-001-conceptual_design.md",
      "[recent conversation history with KN]"
    ]
  },

  constraints: {
    structure: [
      "1. PROGRESS: What was accomplished this week (bullet points)",
      "2. CONSTRAINT CHECK: Is 25h/week being used on highest-leverage work?",
      "3. R2 LOOP STATUS: How close to VN-RANGE-001 deployment activation?",
      "4. SKILL ALLOCATION: Hours spent on Skill 1-5 this week — balanced?",
      "5. NEXT WEEK PRIORITIES: Top 3 actions ranked by leverage point impact",
      "6. RISK FLAGS: Anything threatening deployment timeline?"
    ],
    tone: "Direct, honest, no-BS. Flag problems clearly.",
    prohibited: [
      "Do NOT generate optimistic narrative if progress was poor",
      "Do NOT suggest adding products to queue (Musk Sequence)",
      "Do NOT recommend solutions requiring hiring (R2 loop inactive)"
    ]
  },

  test_criteria: {
    honest: "Progress assessment matches actual work done",
    focused: "Priorities align with deployment critical path",
    constraint_aware: "All suggestions fit within 25h/week"
  },

  review: "KN reviews in 10 minutes, adjusts next week's focus",

  fallback: "If insufficient data for assessment, state what's missing"
})
```

---

## Weekly Review Template Output

```
WORKSHOP X WEEKLY REVIEW — [DATE]
═══════════════════════════════════

1. PROGRESS
   - [accomplishment 1]
   - [accomplishment 2]
   - [accomplishment 3]

2. CONSTRAINT CHECK (25h/week)
   Hours this week: [X]h
   Allocation: Routine [X]h | Ambiguous [X]h
   Assessment: [ON TRACK / LEAKING TIME TO ROUTINE / UNDER-UTILIZED]

3. R2 LOOP STATUS
   VN-RANGE-001 deployment readiness: [X]%
   Next milestone: [description]
   Blocking issues: [list or "none"]

4. SKILL ALLOCATION
   Skill 1 (AI Literacy):    [X]h
   Skill 2 (Domain):         [X]h
   Skill 3 (Engineering):    [X]h
   Skill 4 (Process):        [X]h
   Skill 5 (Governance):     [X]h

5. NEXT WEEK PRIORITIES
   #1: [action] — Leverage point: [L#]
   #2: [action] — Leverage point: [L#]
   #3: [action] — Leverage point: [L#]

6. RISK FLAGS
   [risks or "No new risks identified"]
```

---

## KN Review Checklist (10 minutes)

- [ ] Progress honestly reflects what was actually done?
- [ ] Am I spending time on highest-leverage work?
- [ ] VN-RANGE-001 still on track?
- [ ] Next week's priorities correctly ordered?
- [ ] Any risks I need to address immediately?
