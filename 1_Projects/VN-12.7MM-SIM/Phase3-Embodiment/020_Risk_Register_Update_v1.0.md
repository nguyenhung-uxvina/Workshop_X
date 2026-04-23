# VN-12.7MM-SIM-020: RISK REGISTER UPDATE
## Phase 3: Embodiment Design

**Document**: VN-12.7MM-SIM-020-RISK | **Version**: 1.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 3 - Embodiment Design
**Input**: Risk register from Doc 012 (Concept Evaluation, Section 9) + Phase 3 embodiment-specific risks

---

# 1. UPDATED RISK REGISTER

## 1.1 Risks Carried from Phase 2

| ID | Risk | P | I | Score | Mitigation Update | Status |
|----|------|---|---|-------|-------------------|--------|
| R1 | 6-DOF ballistic model fails BM-004 validation (drag error >2%) | M | H | 6 | Published B-32 aero data identified. Validation test suite planned for Month 5. STANAG 4355 BALCO as reference. | OPEN -- mitigation on track |
| R2 | Unit cost exceeds CO-001 ($45K) | M | H | 6 | BOM v1.0 (Doc 017): prototype $42,183 (6.3% margin). Internal target $40K exceeded by $2,183. Weekly BOM tracking starts. Top cost drivers: PC ($1,590), monitors ($990), brakes ($605). | **WATCH** -- margin tighter than planned |
| R3 | Magnetic brake torque variation >10% (K-005) | L-M | M | 4 | **Prototype test (Doc 014) in progress.** Brake ordered. Test rig assembly by D20. GO-1/GO-2/GO-3 tests by D27. Physical gate 2026-04-05. | ACTIVE -- prototype underway |
| R4 | Statistical scoring fails TE-010 (r-sq >=0.75) | M | H | 6 | Scoring algorithm designed as calibration-tunable. Live-fire correlation trial planned Month 8-9 with 20+ gunners. Accept r-sq >=0.60 for prototype delivery; post-delivery calibration. | OPEN -- no change |
| R5 | Local content falls below PR-001 (70%) | L-M | M | 4 | BOM v1.0 shows 66.9% raw. Remediation plan: Samsung VN monitors as local + local PC assembly = 74-78%. Requires MoD classification confirmation. | **ACTION NEEDED** -- confirm classification |

## 1.2 New Risks from Embodiment Design

| ID | Risk | P | I | Score | Mitigation |
|----|------|---|---|-------|-----------|
| R6 | Slip ring electrical noise degrades encoder signal quality | L | M | 3 | Use shielded pairs for encoder circuits. Test during prototype rig. If noise >1 LSB, upgrade to optical slip ring or wireless encoder. |
| R7 | Slip ring 12 circuits insufficient for future features (e-stop through ring, additional sensors) | L | L | 2 | Upgrade to 16-circuit slip ring at production (+$30). Prototype uses 12-circuit. |
| R8 | Prototype cost exceeds internal $40K target by $2,183 (cost creep during development) | M | M | 4 | Monitor cost reduction options available (-$300 FHD downgrade). Stereo audio fallback saves $350. Apply only if cost exceeds $43K during development. |
| R9 | Solo engineer bandwidth -- 12-month SW development timeline vs. other active projects | H | H | 9 | **HIGHEST RISK.** SW is critical path. Musk Sequence: VN-12.7MM-SIM is priority after AST-MSL-001 physical gate. Consider outsourcing Unity scene development (F2.1/F2.2) to freelancer. |
| R10 | Elevation counterbalance design (TBD-006) affects operator feel | L-M | M | 3 | Two options: spring counterbalance (simpler, position-dependent force) or counterweight (constant, heavier). Decide during mechanical detail design. Test with operators. |
| R11 | Samsung VN monitors may not qualify as "local content" per MoD procurement rules | M | M | 4 | Obtain written clarification from procurement office before CDR. If denied, need alternative local content sources (see BOM Doc 017 Section 6.3). |
| R12 | I/O board latency exceeds budget (1ms USB polling) during sustained encoder count at high traverse rates | L | L | 2 | Max count rate: 60 deg/s x 65536/360 = 10,922 counts/s -- well within USB HID capability. Low risk. |

---

# 2. RISK MATRIX

```
IMPACT →     Low (1)     Medium (2)    High (3)
PROB ↓
High (3)                                R9 (9)

Medium (2)              R8 (4)         R1 (6)
                        R10 (3)        R2 (6)
                        R11 (4)        R4 (6)

Low (1)      R7 (2)     R3 (4)
             R12 (2)    R5 (4)
                        R6 (3)
```

**Critical risks (score >=6)**: R1, R2, R4, R9
**Watch items (score 4)**: R3, R5, R8, R10, R11

---

# 3. TOP RISK: R9 -- SOLO ENGINEER BANDWIDTH

**Why this is the #1 risk:**
- 12 months of software development (SW is 85% of NRE cost)
- CEO/Engineer is sole developer for ALL active projects
- VN-AST-MSL-001 (Tier 1) has Phase 4 gate at 2026-04-04
- BB-01 LOMAH (Tier 2) Phase 1 needs attention
- ACH-Thesis (Tier 3) has 2026-06-30 deadline
- dP/dt = 0 across all projects currently

**Mitigation plan:**
1. **Musk Sequence**: Complete AST-MSL-001 Phase 4 gate first (April), then VN-12.7MM-SIM becomes primary focus
2. **Outsource candidates**: Unity scene development (F2.1/F2.2 -- rendering, target models, terrain) can be outsourced to VN game dev freelancer ($8-15/hr). CEO retains ballistics, scoring, I/O (Core).
3. **Parallel tracks**: Mechanical fabrication (local machine shop) runs in parallel with SW dev
4. **Accept scope reduction**: Defer F2.3 behavior tree AI to post-prototype; use scripted paths (Sol-A) for prototype. Does not affect training effectiveness validation.

---

# 4. PHYSICAL PROTOTYPE TEST PLAN

## 4.1 Prototype Test Sequence

| Phase | Test | Document | Gate Date | Priority |
|-------|------|----------|-----------|----------|
| **P1** | Magnetic brake prototype | Doc 014 | 2026-04-05 | ACTIVE |
| P2 | Encoder + brake integration (backlash, noise) | TBD (015-derived) | 2026-04-20 | After P1 PASS |
| P3 | 6-DOF ballistic model validation (vs. firing table) | TBD | 2026-06-15 | Month 5 |
| P4 | Operator feel evaluation (5 testers) | TBD | 2026-06-30 | After P2 |
| P5 | System integration test (full trainer station) | TBD | 2026-09-15 | Month 8 |
| P6 | Training effectiveness pilot (20 gunners) | TBD | 2026-11-15 | Month 10 |

## 4.2 dP/dt Target

| Month | Physical Milestone | dP/dt |
|-------|-------------------|-------|
| March 2026 | Brake ordered | 0 (prep) |
| April 2026 | P1: Brake test complete, GO/NO-GO | 1 |
| May 2026 | P2: Encoder-brake integration bench test | 1 |
| June 2026 | P3: Ballistic model desktop validation | 0 (SW only) |
| July 2026 | Mechanical frame fabrication starts | 1 |
| Aug 2026 | P4: Operator feel test on partial rig | 1 |
| Sep 2026 | P5: Full system integration | 1 |
| Oct 2026 | Software feature complete, internal test | 0 (SW) |
| Nov 2026 | P6: Pilot training trial | 1 |
| Dec 2026 | Prototype delivery / CDR | 1 |

**Target dP/dt: >= 1 physical iteration/month starting April 2026.**

---

# 5. RISK REVIEW SCHEDULE

| Review | Date | Focus |
|--------|------|-------|
| Post-brake-test review | 2026-04-06 | R3 resolution, R6 assessment |
| Monthly BOM review | 1st of each month | R2, R5, R8 tracking |
| Ballistic validation review | 2026-06-20 | R1 resolution |
| CDR risk review | 2026-09-01 | All risks, GO for integration |

---

# 6. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN (Phase 3 Embodiment) | Initial release. 12 risks tracked (5 from Phase 2, 7 new). R9 (bandwidth) is highest risk (score 9). Physical prototype test sequence defined. |

---

*VN-12.7MM-SIM-020 Risk Register Update v1.0*
*Phase 3: Embodiment Design -- I-01 (HONG HAI) Base Variant*
