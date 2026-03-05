# DELEGATION TEMPLATE: C1-SYSTEMS
## Systems Thinking Analysis

**Category:** Analysis & Research | **HITL:** Yes — validate model | **Time Saved:** 2-3h | **Frequency:** 1-2x/month

---

## Invocation

```
agent.run({
  task: "Perform [analysis_type] for [system/problem]",

  context: {
    analysis_type: "[Stock-Flow Map | Feedback Loop Detection |
                     Leverage Point Analysis | Constraint Identification |
                     Archetype Detection]",
    system: "[product_name | business process | organizational challenge]",
    scope: "[single product | cross-product | portfolio level | enterprise]",
    source_data: [
      "DMIR_ODI_Engineering_Design_Framework.md",
      "[relevant_product_docs]"
    ],
    known_constraints: {
      engineering_capacity: "25h/week — KN solo engineer",
      deployment_status: "[pre-deploy | deployed | multiple installations]",
      revenue_status: "[pre-revenue | early revenue | established]"
    }
  },

  constraints: {
    framework: "Use Meadows 12 leverage points (L1-L12)",
    output_structure: [
      "1. Stock-Flow Map (identify stocks, flows, delays, buffers)",
      "2. Feedback Loops (label R1, R2... B1, B2... with status)",
      "3. Archetype Detection (Shifting the Burden, Limits to Growth, etc.)",
      "4. Leverage Point Ranking (L1-L12 with specific interventions)",
      "5. Intervention Cascade (Phase 1: Quick wins → Phase 3: Paradigm shift)"
    ],
    rigor: "Quantify where possible (hours, dollars, percentages)",
    prohibited: [
      "Do NOT suggest interventions that require >25h/week capacity",
      "Do NOT ignore the 25h/week constraint as 'solvable later'",
      "Do NOT recommend parallel product development (Musk Sequence applies)",
      "Do NOT suggest hiring without revenue to fund it (R2 loop inactive)"
    ]
  },

  test_criteria: {
    stocks_identified: "All major stocks named with units and current level",
    loops_labeled: "Each loop labeled R/B with dominance status",
    leverage_ranked: "Top 3 leverage points with specific actions",
    actionable: "Phase 1 actions achievable within current 25h/week constraint"
  },

  review: "HITL required — KN validates system model against operational reality",

  fallback: "If system is too complex for single analysis, decompose and state what was excluded"
})
```

---

## Workshop X Key System Variables

```
Stocks:
  - Engineering hours available: 25h/week (hard cap)
  - Product portfolio: 5 products (VN-LOMAH, VN-CAM, VN-TRN, VN-SMASH, CORTEX)
  - Revenue: pre-revenue (R2 reinforcing loop inactive)
  - Deployment readiness: VN-RANGE-001 is priority gate

Key Loops:
  - R1: Learning loop (more builds → more knowledge → better builds)
  - R2: Revenue loop (deploy → revenue → hire → more capacity) — INACTIVE
  - B1: Capacity constraint (25h/week ceiling)
  - B2: Complexity growth (more products → more integration work)

Key Archetypes:
  - Limits to Growth: B1 caps R1 until R2 activates
  - Musk Sequence: Serial focus > parallel product development
```

---

## KN Review Checklist (30-45 minutes)

- [ ] System model matches operational reality?
- [ ] All 25h/week constraints respected?
- [ ] No suggestions requiring parallel product dev?
- [ ] Leverage points ranked with specific actions?
- [ ] Phase 1 actions actually achievable NOW?
