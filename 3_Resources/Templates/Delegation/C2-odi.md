# DELEGATION TEMPLATE: C2-ODI
## ODI Opportunity Analysis

**Category:** Analysis & Research | **HITL:** Yes — validate outcomes | **Time Saved:** 3-4h | **Frequency:** 1x/product/quarter

---

## Invocation

```
agent.run({
  task: "Perform ODI opportunity analysis for [product/segment]",

  context: {
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    job_executor: "[Vietnamese military training officer | Range officer |
                    Unit commander | Procurement officer]",
    job_to_be_done: "[describe the job in outcome-driven terms]",
    source_data: [
      "DMIR_ODI_Complete_Framework.md",
      "[product_brief or conceptual_design]"
    ],
    competitive_landscape: "Imported alternatives: Saab, Polytronic, Australian ADI, Israeli Elbit"
  },

  constraints: {
    framework: "Ulwick ODI — Importance × Satisfaction scoring",
    outcome_format: "Direction + metric + object of control (no solutions)",
    example: "Minimize THE TIME it takes TO VERIFY soldier qualification status",
    minimum_outcomes: "Generate ≥ 30 desired outcomes for the job",
    scoring_note: "If no survey data, estimate scores with [ESTIMATED] tag",
    prohibited: [
      "Do NOT include solutions in outcome statements",
      "Do NOT bias toward Workshop X's current product features",
      "Do NOT ignore consumption chain jobs (purchase, setup, maintain, dispose)"
    ]
  },

  test_criteria: {
    format_correct: "All outcomes follow Direction + Metric + Object pattern",
    coverage: "Outcomes cover entire job map (core + consumption chain)",
    unbiased: "Outcomes not skewed toward current product capabilities",
    scoreable: "Each outcome can be scored on 1-10 Importance and Satisfaction"
  },

  review: "HITL required — KN validates against actual military user experience",

  fallback: "If job definition ambiguous, generate job map first then outcomes"
})
```

---

## Workshop X Job Executors

```
Primary Job Executors:
  1. Range Officer — manages live-fire training exercises
     Job: "Conduct marksmanship qualification safely and accurately"
  2. Training Officer — plans and evaluates training programs
     Job: "Assess and improve unit combat readiness"
  3. Unit Commander — responsible for unit readiness
     Job: "Ensure soldiers meet qualification standards on schedule"
  4. Procurement Officer — acquires equipment
     Job: "Source training equipment meeting requirements within budget"

Consumption Chain Jobs (often overlooked):
  - Purchase: procurement process, approval chain, budget allocation
  - Setup: installation, calibration, site preparation
  - Operate: daily use, session management, data capture
  - Maintain: cleaning, repair, recalibration, spare parts
  - Dispose: end-of-life, data migration, decommissioning
```

---

## KN Review Checklist (45-60 minutes)

- [ ] All outcomes follow Direction + Metric + Object format?
- [ ] No solutions embedded in outcome statements?
- [ ] Consumption chain covered (not just core job)?
- [ ] Outcomes match actual field experience?
- [ ] No bias toward current Workshop X product features?
- [ ] Scores marked [ESTIMATED] where no survey data exists?
