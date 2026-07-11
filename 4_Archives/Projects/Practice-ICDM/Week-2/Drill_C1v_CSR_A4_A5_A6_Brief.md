---
drill: C1v
topic: CSR Function Construction — Variation (A4, A5, A6)
date_scheduled: 2026-04-23
time_target: 25m
reference: Week-1/CSR_Function_Study_Guide.md
anchor: VN-CUAV-SIM-001 LITE-PA2
---

# Drill C1v — CSR Function Construction on A4, A5, A6

## Challenge

Construct 3 CSR functions from scratch for LITE-PA2 criteria A4, A5, A6. Apply Week 1 insights — especially [[CSR Linear Trap]] and [[CSR Subjectivity Trap]].

## Input Data (from ICDM BE / Requirements v1.0)

### A4 — Scenario Flexibility (W = 10.7%)
- **Target Value (TV):** ≥10 scenarios, no coding required
- **Current label:** LINEAR
- **Question to answer:** Is this truly linear? Does satisfaction scale evenly from 1 scenario to 10? Or is there a step (e.g., <3 scenarios = training useless)?

### A5 — Logistics Independence (W = 8.9%)
- **Target Value (TV):** ≤$18K BOM cost, footprint 6×8 m, operating cost ≤$5/hour
- **Current label:** LINEAR
- **Complication:** Multi-dimensional PC (3 sub-parameters). How do you build ONE CSR function for 3 different physical quantities?
- **Options:** (a) Separate CSR per sub-parameter, weighted. (b) Composite index. (c) Worst-of-three (most conservative).

### A6 — Visual Immersion (W = 8.4%)
- **Target Value (TV):** ≤50 ms latency, ≥150° FOV, ≥60 fps
- **Current label:** CLIFF
- **Question to answer:** Where exactly is the cliff? What CSR% below the cliff? Is it the same cliff for all 3 sub-parameters?

## Deliverables (25 minutes)

1. **3 CSR curves** — one per PC, with:
   - TV, poorest end, baseline %
   - Curve shape + justification (WHY this shape, not just "linear")
   - Mark any assumption as "assumed, not validated"

2. **DQM fragment** — estimate LITE-PA2 C4 actual values for A4/A5/A6 → look up CSR% → compute W×CSR for each

3. **Reflection:** For each curve, answer: "Would I draw this differently if I had customer data?"

## Scoring (30 points max)

| Criteria | Points |
|---|:-:|
| 3 curves with correct TV/poorest/baseline | 9 (3 per curve) |
| Curve shape justified (not just "default linear") | 9 (3 per curve) |
| Multi-dimensional A5 handled explicitly | 3 |
| A6 cliff position + below-cliff CSR specified | 3 |
| DQM fragment computed correctly | 3 |
| "Assumed vs validated" marked on each curve | 3 |

**Bonus:** Cross-reference with C1 curves (A1/A2/A3) — any pattern in which PCs are linear vs threshold?

## New Wrinkle vs C1

Week 1 C1 had relatively clean PCs (Weight, Fidelity, Cost — single-dimension each). C1v introduces:
- **Multi-dimensional PCs** (A5 has 3 sub-parameters, A6 has 3 sub-parameters)
- **Discrete vs continuous** (A4 scenario count = integer, not continuous)
- **Applying your own Galaxy insight** (CSR Linear Trap) to question existing labels

This is where the Dreyfus 3→3.5 push happens.
