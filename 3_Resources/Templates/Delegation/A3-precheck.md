# DELEGATION TEMPLATE: A3-PRECHECK
## Code Review and Pre-Check (AI reviews AI)

**Category:** Software Development | **HITL:** Review the report | **Time Saved:** 10-15min | **Frequency:** 5-10x/week

---

## Invocation

```
agent.run({
  task: "Review [code_file] for correctness and defense-grade quality",

  context: {
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    code_purpose: "[what the code is supposed to do]",
    operating_environment: {
      physical: "[indoor lab | outdoor range | naval vessel | vehicle]",
      climate: "Vietnam tropical — 25-45°C, 40-100% humidity",
      power: "[stable grid | military generator ±10% | battery]",
      network: "[reliable LAN | intermittent WiFi | no network]"
    },
    safety_criticality: "[scoring | fire control | flight control | monitoring]"
  },

  constraints: {
    review_protocol: "Apply PLAUSIBLE check systematically",
    check_list: [
      "P — Physics: Does it obey physical laws in THIS environment?",
      "L — Logic: Does reasoning chain hold end-to-end?",
      "A — Assumptions: List ALL hidden assumptions found",
      "U — Units: Are all units consistent? (mils/degrees, m/mm/cm)",
      "S — Scale: Works at 0.1x and 10x expected conditions?",
      "I — Integration: Compatible with IRONMESH CDM?",
      "B — Boundary: What happens at min/max/zero/null?",
      "L — Lethality: If WRONG, could someone get hurt?",
      "E — Endurance: Will it work in 2 years?"
    ],
    output_format: "Structured report with: PASS/FAIL per check + explanation"
  },

  test_criteria: {
    completeness: "All 9 PLAUSIBLE checks addressed",
    specificity: "Each finding references specific line numbers",
    actionable: "Each issue has recommended fix"
  },

  review: "KN reviews the PRE-CHECK REPORT (5 min) instead of raw code (30 min)",

  fallback: "If code purpose unclear, ASK before reviewing"
})
```

---

## Expected Output Format

```
PLAUSIBLE PRE-CHECK REPORT: [filename]
═══════════════════════════════════════

P — Physics:     [PASS/FAIL] [explanation]
L — Logic:       [PASS/FAIL] [explanation]
A — Assumptions: [PASS/FAIL] [list of hidden assumptions found]
U — Units:       [PASS/FAIL] [explanation]
S — Scale:       [PASS/FAIL] [explanation]
I — Integration: [PASS/FAIL] [explanation]
B — Boundary:    [PASS/FAIL] [explanation]
L — Lethality:   [PASS/FAIL] [explanation]
E — Endurance:   [PASS/FAIL] [explanation]

ISSUES FOUND: [count]
[For each issue: line number + description + recommended fix]

VERDICT: [APPROVE / APPROVE WITH CHANGES / REJECT]
```

---

## KN Review Checklist (5 minutes)

- [ ] All 9 PLAUSIBLE checks present?
- [ ] Focus on Layer 4-5 (Physics + Lethality) — AI handles Layer 1-3
- [ ] Any issues AI flagged that I disagree with?
- [ ] Any issues AI MISSED that I can see?
