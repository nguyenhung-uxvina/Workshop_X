---
project: V-SMASH-L
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: approved
family: V-SMASH
position: foundation
note: Retrospective P11 — product is at Phase 4
---

# V-SMASH-L (LITE) — Product Proposal (P11)

> **Retrospective** — V-L is at Phase 4 (Detail Design). This P11 formalizes the product proposal implicit in 133 requirements + VDI 88% conceptual design + embodiment layout.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-L |
| **Product code** | V-L |
| **Family position** | Foundation — all 7 variants depend on V-L |
| **Primary function** | AI-assisted fire control enabling single-shot-single-hit against low-altitude drone threats |
| **Customer** | Vietnamese Army infantry command (procurement) |
| **End-user** | Infantry soldier, training unit instructor |
| **Target market** | Volume equipping of infantry battalions for baseline C-UAS capability |

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **WX capability** | ACH philosophy — AI (YOLOv8 + Kalman + 3DOF ballistic) compensates for no thermal, no LRF |
| **IRONMESH** | V-L is the first IRONMESH-connected field device. Fleet data feeds family AI improvement. |
| **R2 loop** | Hardware margin ($2,216/unit) funds family R&D. Volume drives IRONMESH data flywheel. |
| **Local content** | 70% by value. Housing 100% local (Hòa Phát), assembly 100%, SW 100%. Imported: Jetson Nano, IMX290, optics. |

---

## 3. PRELIMINARY REQUIREMENTS (133 total — Phase 1 complete)

| # | Requirement | Target | Verification |
|---|-------------|--------|--------------|
| 1 | Drone detection range (daylight) | ≥300m | Test |
| 2 | Detection accuracy | ≥95% | Test |
| 3 | First-shot Pk @ 200m | ≥60% | Test |
| 4 | System latency (acq → fire solution) | ≤100ms | Test |
| 5 | Trigger gate timing | ≤5ms | Test |
| 6 | Weight (with battery) | ≤1.2 kg | Inspection |
| 7 | Battery life | ≥8 hours continuous | Test |
| 8 | Unit cost | ≤$900 (actual: $784) | Analysis |
| 9 | Environmental | IP65, -10°C to +55°C, MIL-STD-810H | Test |
| 10 | Recoil endurance | 10,000 rounds (5.56mm) | Test |
| 11 | **IFF: AI confidence gating** | FR-IFF-01/02/03/04 (family requirement — see P10) | Test + Analysis |
| 10 | Recoil endurance | 10,000 rounds (5.56mm) | Test |

- **Cost target:** $784 unit cost (17% of SMASH 2000+ at $18K)
- **Delivery target:** Prototype Q3'26, LRIP Q1'27
- **Key constraint:** MIL-STD-1913 Picatinny mount, single soldier portable

---

## 4. WORKING PRINCIPLE OPTIONS (Phase 2 selected)

| Option | Description | VDI 2225 | Status |
|--------|-------------|----------|--------|
| **A: CMOS + Kalman + 3DOF (SELECTED)** | YOLOv8-nano, 6-state Kalman, point-mass ballistic, solenoid gate | **88%** | Phase 3 DONE |
| B: CMOS + Extended Kalman + 6DOF | More accurate tracking/ballistic, higher compute | 81% | Not selected |
| C: Thermal + CMOS fusion | 24/7 ops but doubles sensor cost | 79% | → V-P variant |

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| Technical | MEDIUM | YOLOv8-nano inference ≤30ms on Jetson Nano — unconfirmed on production hardware |
| Schedule | LOW | Phase 4 in progress, well-defined path to prototype |
| Market | LOW | No Vietnamese competitor. 6× cost advantage vs import. |

**Kill condition:** Pk < 40% at 200m after 3 tuning iterations during DVT.

---

## 6. NEXT STEP

Phase 4 is IN PROGRESS. Immediate actions:
1. Complete CAD models (Mar 2026)
2. Finalize BOM + supplier quotes (Mar 2026)
3. MIL-STD-810H test plan approval (Apr 2026)
4. Prototype component procurement (Apr 2026)
5. EVT build: 10 units (Q3 2026)

---

## DETAILED REFERENCES

| Document | Location |
|----------|----------|
| Requirements List (133 items) | `vault/projects/V-SMASH/products/V-SMASH_LITE_P1_requirements_list.md` |
| Conceptual Design (VDI 88%) | `vault/projects/V-SMASH/products/V-SMASH_LITE_P2_conceptual_design.md` |
| Embodiment Design (BOM, DfX) | `vault/projects/V-SMASH/products/V-SMASH_LITE_P3_embodiment_design.md` |
| Product Spec | `vault/projects/V-SMASH/products/V-SMASH_LITE_product_spec.md` |
| ODI Report (22 outcomes) | `projects/V-SMASH/PHASE_0/V-SMASH-L_ODI_Report_v1.0.md` |
