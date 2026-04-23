---
created: 2026-04-11
type: icdm-evaluation-criteria
block: BE (ICDM supplement — Step 5)
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "ICDM Step 5 — Designation of Concept Evaluation Criteria (Hari & Weiss)"
status: COMPLETE
feeds_to:
  - Phase 2 helix-concept-generate BC (Pugh Group A screening)
  - Phase 2 helix-concept-generate BC (CSR-weighted Group B evaluation)
  - Phase 2 helix-concept-generate BE (DQM final comparison)
---

# ICDM Evaluation Criteria — VN-MGM V5-MOTORIZED

> **ICDM Step 5:** Define concept evaluation criteria BEFORE synthesizing concepts (Steps 6-7).
> This prevents post-hoc rationalization — criteria are set by customer needs, not fitted to concepts.
> **Source:** CSR_Functions.md (this session), HOQ_Design_Parameters_v1.0.md (FORGE).

---

## 1. Evaluation Strategy (2-Stage)

### Stage 1: Pugh Screening (Group A — ≥70% weight)

| Purpose | Method | Criteria | Outcome |
|---------|--------|----------|---------|
| Eliminate clearly inferior concepts | Pugh matrix with best concept as datum | Group A (6 criteria, 71.2%) | ≤3 surviving concepts |

**Group A Criteria for Pugh:**

| # | Criterion | Weight | CSR Type | Fail Threshold | Target | WTP |
|---|----------|:------:|:--------:|:--------------:|:------:|:---:|
| C1 | Motor traverse speed | 17.5% | LINEAR | ≤30°/s | 90°/s | E |
| C2 | First hit accuracy | 14.9% | EXPONENTIAL | ±5 mrad | ±0.5° | E |
| C3 | Corrosion endurance | 14.0% | STEP | <200h | ≥500h | E |
| C4 | Elevation precision | 10.8% | LINEAR | ≤15°/s | 45°/s | E |
| C8 | Manual fallback | 8.0% | EXPONENTIAL | >10s | ≤1s auto | E |
| C10 | Unit cost | 6.0% | LINEAR | >$20K | ≤$10K BOM | E |

**Pugh Rules:**
- Datum = concept with highest estimated DQM (or CEO-selected reference).
- Score: +1 (better than datum), 0 (same), -1 (worse).
- Concepts with net negative AND any C8 = -1 (fail-safe) → **ELIMINATE**.
- Surviving concepts proceed to Stage 2.

### Stage 2: CSR-Weighted Evaluation (Group B — ≥95% weight)

| Purpose | Method | Criteria | Outcome |
|---------|--------|----------|---------|
| Rank surviving concepts with quantitative DQM | CSR function lookup × weight | Group B (9 criteria, 97.4%) | DQM score per concept |

**Group B Criteria (Group A + 3 additional):**

| # | Criterion | Weight | CSR Type | Target | WTP |
|---|----------|:------:|:--------:|:------:|:---:|
| C1-C4, C8, C10 | (Group A — 6 criteria) | 71.2% | (see above) | (see above) | E |
| C5 | Night capability (data port) | 10.4% | STEP | Port + protocol defined | B |
| C6 | Maintenance burden | 10.0% | ASYMPTOTIC | MTBF ≥2000h | B |
| C9 | Traverse effort | 5.8% | ASYMPTOTIC | Joystick ≤0.5 N | E |

**DQM Calculation:**
```
DQM = Σ (weight_i × CSR_i) for i in Group B

Where:
  weight_i = from HOQ (normalized to Group B total)
  CSR_i = satisfaction % from CSR function lookup (0-100%)

DQM range: 0-100%
  ≥80% = Excellent
  70-79% = Good (viable)
  50-69% = Weak (needs improvement)
  <50% = Eliminate
```

---

## 2. Additional Evaluation Dimensions (ICDM Step 8)

Beyond DQM, Phase 2 BD evaluates each surviving concept on:

| Dimension | Tool | Output | Phase 2 Block |
|-----------|------|--------|:-------------:|
| **Failure robustness** | CFMA (function-based SFD) | Rev SFD score (lower = better) | BD |
| **Cost realism** | CDTC (Pareto cost model) | Cost vs target (under/over %) | BD |
| **Time to market** | RTA (Knowledge Gap analysis) | TTM estimate (weeks) + risk level | BD |
| **Misuse tolerance** | Robustool | Pass/Fail per scenario | BD |

**Final Selection Table (Phase 2 BE):**

| Concept | DQM (%) | Rev SFD | CDTC Cost vs Target | RTA TTM | Robustool | CEO Decision |
|---------|:-------:|:-------:|:-------------------:|:-------:|:---------:|:------------:|
| A | — | — | — | — | — | — |
| B | — | — | — | — | — | — |
| C | — | — | — | — | — | — |

CEO selects based on **balance of all 5 dimensions** — not just highest DQM.

---

## 3. IRL (Innovation Readiness Level) — Gate 1 Snapshot

| Factor | Score (1-5) | Evidence |
|--------|:----------:|---------|
| Technology maturity | 4 | All TRL ≥6, base TRL 9. 2 gaps = bench-testable |
| Market understanding | 5 | 300 V1 customers, direct trắc thủ feedback, RE v1.0 (8 competitors) |
| Manufacturing capability | 4 | CNC proven, servo integration = new but COTS |
| Team competence | 3 | Mechanical = 5/5. Servo/control = 2/5 (gaps 1-3) |
| IP/regulatory | 5 | No ITAR, no restricted tech |
| **Overall IRL** | **4.2 / 5** | **READY — proceed with controlled gaps** |

---

## 4. Traceability: ICDM Steps 1-5 → Phase 2

```
ICDM Step 1 (Customer Needs)
  → FORGE Job_Map + Desired_Outcomes + Opportunity_Landscape
  → Operator_Analysis_v1.0 (trắc thủ field validation)

ICDM Step 2 (EQFD → Product Definition)
  → Requirements_List v1.0 (86 base) + ICDM Extension (18) + FD (6) = 110 total
  → TVDT.md (top 15 target values)
  → CSR_Functions.md (THIS FILE's companion)
  → WTP classification (Essential/Beneficial/Luxurious)

ICDM Step 5 (Evaluation Criteria) — THIS DOCUMENT
  → Group A (6 criteria, 71.2%) → Phase 2 BC Pugh screening
  → Group B (9 criteria, 97.4%) → Phase 2 BC CSR-weighted DQM
  → CFMA + CDTC + RTA + Robustool → Phase 2 BD multi-dimensional analysis
  → Final Selection Table → Phase 2 BE CEO decision

ICDM Steps 3-4 (Abstraction + Solution Creation) → Phase 2 BA/BB
ICDM Steps 6-7 (Synthesis + Main Selection) → Phase 2 BB/BC
ICDM Steps 8-9 (Analysis + Final Selection) → Phase 2 BD/BE
ICDM Step 10 (Launch) → Phase 3 B0 (Gap Closing Plan)
```

---

*ICDM Evaluation Criteria | Step 5 | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
