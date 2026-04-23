---
created: 2026-03-05
updated: 2026-04-09
type: project
status: on-hold
tags: [#type/project, #status/on-hold]
tier: 2-product-dev
paused: 2026-04-09
pause_reason: "Trùng lặp phạm vi với VN-CUAV-SIM-001 — CEO quyết định tạm dừng"
---

# VN-12.7MM-SIM --- Status

## Tier
**Tier 2 --- Product Dev** (Pahl-Beitz tracked, IRONMESH family)

## ⏸️ ON HOLD (2026-04-09)
**Lý do:** Trùng lặp phạm vi với VN-CUAV-SIM-001 (cả hai đều là hệ thống mô phỏng huấn luyện vũ khí). CEO quyết định tạm dừng VN-12.7MM-SIM để tập trung nguồn lực.

**Trạng thái khi dừng:** Phase 3 Embodiment Design — 8 docs complete (014-021), magnetic brake ordered, physical gate chưa thực hiện.

**Điều kiện resume:** CEO quyết định khi VN-CUAV-SIM-001 đạt milestone đủ hoặc có nhu cầu thị trường riêng cho 12.7mm simulator.

## Current Phase (PAUSED)
**Phase 3: Embodiment Design** (ready to start --- V2 Standard confirmed at 76.3%, Phase 2 Gate PASSED)

## Pahl-Beitz Progress
- [x] Phase 0: ODI + 4 Variant Gate Reviews (ACH 3.15, CTR 3.30, TAB 3.75, TAC 3.55)
- [x] Phase 0 QC Gate: HUMAN REVIEW REQUIRED --- 4 flags incorporated into Requirements v1.2
- [x] Phase 1: Task Clarification (Charter + Requirements v1.2 [201 reqs] + Function Structure + TNKCT)
- [x] Phase 1 HELIX Gate Audit: CONDITIONAL PASS — 62% quantified (target 80%), 6 HIGH conflicts, stakeholder review pending
- [x] Phase 2: Conceptual Design -- GATE PASSED (V2 Standard 76.3%, 10 criteria, robust across 3 sensitivity scenarios)
- [ ] Phase 3: Embodiment Design (IN PROGRESS --- 6 docs complete: 015-020. Physical gate: brake test, deadline 2026-04-05)
- [ ] Phase 4: Detail Design

## QC Gate Phase 0 Results (2026-03-05)
- **Decision:** HUMAN REVIEW REQUIRED (4 FLAGS, 0 FAILS)
- **CEO Decision:** ACCEPTED --- flags tracked as Phase 1 requirements
- 8 new requirements added to v1.2:
  - SF-011/012: TCVN + MIL-STD mapping
  - E-008/009: Power budget per variant, CTR power source
  - OP-019/020: CTR environmental qualification, TAC EMI/EMC
  - S-020/021: ACH AI confidence calibration, rules-to-ML transition

## 4 Product Variants

| Variant | Name | Gate 0 | Phase 1 | DG Dependency |
|---------|------|--------|---------|---------------|
| I-01 (Standard) | HONG HAI | 3.75 (TAB scored) | Done | None |
| I-02 (CTR) | Containerized | 3.30 | Blocked on DG-1 | DG-1: I-01 Phase 3 |
| I-06 (TAC) | BACH DANG (Tactical Crew) | 3.55 | Open | DG-1: I-01 Phase 3 |
| I-08 (ACH) | HONG HAI MASTER (AI Coach) | 3.15 | Partial | DG-2 + DG-3 |
| I-09 (TAB) | HONG HAI POCKET (Tablet) | 3.75 | Open | None |

## Phase 3 Embodiment Documents

| Doc # | Title | Version | Status |
|-------|-------|---------|--------|
| 014 | Magnetic Brake Prototype Test Plan | v1.0 | Complete -- brake ordered |
| 015 | System Architecture | v2.0 | Complete -- 8 subsystems, 201 reqs traced |
| 016 | Interface Control Document | v1.0 | Complete -- 26 interfaces, 7 TBDs |
| 017 | Preliminary BOM | v1.0 | Complete -- $42,183 prototype, 66.9% local (74-78% w/ remediation) |
| 018 | Power Budget | v1.0 | Complete -- 1018W peak (49% margin vs 2000W), resolves MC-005 |
| 019 | DfX Review | v1.0 | Complete -- 64 parts, MTBF ~2500h, MTTR <=3.5h |
| 020 | Risk Register Update | v1.0 | Complete -- 12 risks, R9 bandwidth highest (score 9) |
| 021 | Galaxy Reference Map | v1.0 | Complete -- 25 Galaxy notes mapped to 6 domains, cross-ref to 014-020 |

## Physical Validation
- **dP/dt this month:** 0 (target: >0 by 2026-04-05)
- **Next physical milestone:** Magnetic brake prototype test (Doc 014)
- **Brake ordered:** 2026-03-05 (critical path unblocked)
- **Physical gate deadline:** 2026-04-05 (30 days from 2026-03-06)
- **Gate document:** [014_Magnetic_Brake_Prototype_Test_Plan_v1.0.md](Phase3-Embodiment/014_Magnetic_Brake_Prototype_Test_Plan_v1.0.md)
- **Budget:** $1,165-2,030 (CEO approved: TBD)
- **Go/No-Go criteria:** GO-1 torque <=10% var, GO-2 range 5-15 Nm, GO-3 backlash <=0.05 deg

## Phase 1 Gate Audit Results (2026-03-05)
- **Document:** [008_Phase1_Gate_Audit_v1.0.md](Phase1-Task/008_Phase1_Gate_Audit_v1.0.md)
- **Decision:** CONDITIONAL PASS
- **Open items:**
  1. Quantification: 62% vs 80% target — 13 HIGH gaps with proposed values (CEO review needed)
  2. Conflicts: 6 HIGH (SC-001 to SC-006), most critical: variant column missing + CTR infeasibility triangle
  3. Stakeholder review: gunnery instructor interview not yet scheduled
- **CEO decisions (2026-03-05):**
  - [x] 13 proposed quantifications APPROVED (requirements updated to v1.3)
  - [x] CTR constraint: option (a) selected — local content relaxed to ≥50% for CTR
  - [x] Variant applicability column APPROVED (009_VAM created)
  - [x] SC-001 ID collision fixed (Schedule SC→SCH)

## Blocking Constraints
1. ~~No physical gate defined~~ RESOLVED: Magnetic brake prototype test (Doc 014, deadline 2026-04-05)
2. I-01 must reach Phase 3 before CTR/TAC can proceed (DG-1)
3. IRONMESH platform readiness for ACH (DG-3)
4. Consolidated gunnery instructor interview needed (FLAG-TAB-01, FLAG-TAC-01, FLAG-ACH-01)
5. ~~Phase 1 gate audit: 3 CEO decisions pending~~ RESOLVED (v1.3)

## Outstanding Flags (from Gate Reviews + QC)

| Flag | Product | Issue | Status |
|------|---------|-------|--------|
| FLAG-ACH-01 | ACH | Military AI trust unvalidated | Open |
| FLAG-ACH-02 | ACH | Recurring license model untested in VN procurement | Open |
| FLAG-ACH-03 | ACH | ML coaching TRL 3-4 | Tracked |
| FLAG-CTR-01 | CTR | Deployable vs permanent demand unknown | Open |
| FLAG-CTR-02 | CTR | Local content 65% below 70% target | Open |
| FLAG-TAB-01 | TAB | Doctrine acceptance of tablet training | Open |
| FLAG-TAC-01 | TAC | Crew doctrine SME interview pending | Open |

## Deadline
None stated --- IRONMESH sequencing applies. **Physical gate needed.**
