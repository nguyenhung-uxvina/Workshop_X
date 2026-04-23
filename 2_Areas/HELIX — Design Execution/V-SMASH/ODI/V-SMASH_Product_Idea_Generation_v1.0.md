---
project: V-SMASH-L
phase: 0
type: idea-generation
prompt: P10
version: 1.0
created: 2026-02-21
status: approved
---

# V-SMASH-L — Product Idea Generation (P10)

> **Retrospective** — V-SMASH-L has a selected design (Phase 3 done). This P10 maps the full solution space to verify coverage and surface missed opportunities for the product family.

---

## Context

- **Opportunity:** AI-assisted counter-UAS fire control for Vietnamese military, replacing $18K imports
- **Customer segment:** Vietnamese Army infantry, training units, reserve forces
- **Budget target:** $784 unit cost / $3,000 unit price (LITE tier)
- **Timeline:** Phase 4 in progress, prototype Q3'26
- **Domain:** Vietnamese defense training → operational C-UAS
- **P09 result:** PROCEED — all 7 criteria pass

---

## 3-DIMENSION IDEA MATRIX

### Dimensions

- **D1 — Function:** Same (FCS) / Extended (FCS+) / New function
- **D2 — Working Principle:** Same physics (EO) / Different physics / Combined physics
- **D3 — Embodiment:** Same form / Miniaturized / Integrated-IRONMESH / New form

### Ideas

| ID       | Function                | Working Principle       | Embodiment           | Description                                                                   | TRL | Local% | Feasibility | ACH Potential                                 |
| -------- | ----------------------- | ----------------------- | -------------------- | ----------------------------------------------------------------------------- | --- | ------ | ----------- | --------------------------------------------- |
| **I-01** | Same (FCS)              | Same (EO)               | Same (rifle sight)   | **AI smart sight** — CMOS daylight, Jetson Nano, solenoid gate                | 5-6 | 70%    | MEDIUM      | YES: AI compensates no thermal, no LRF        |
| **I-02** | Same (FCS)              | Same (EO)               | Miniaturized         | **Micro-sight** — detection + aiming only, no fire gate, clip-on red dot form | 4   | 75%    | EASY        | YES: AI provides lead indicator only          |
| **I-03** | Same (FCS)              | Different (EO+thermal)  | Same form            | **Dual-sensor sight** — CMOS + uncooled LWIR, 24/7 ops                        | 4-5 | 55%    | HARD        | YES: Thermal fills CMOS night gap             |
| **I-04** | Same (FCS)              | Combined (EO+LRF+IMU)   | Same form            | **Full-spectrum FCS** — adds laser rangefinder, eliminates ±20% passive error | 5   | 60%    | MEDIUM      | PARTIAL: LRF reduces AI range estimation need |
| **I-05** | Extended (FCS+C4I)      | Same (EO)               | Integrated/IRONMESH  | **Networked sight** — V-L core + UDP/CoT, squad-level target handoff          | 3-4 | 65%    | HARD        | YES: AI enables multi-shooter coordination    |
| **I-06** | Extended (FCS+training) | Same (EO)               | Same + SW overlay    | **Training mode** — live weapon + AI scoring overlay, after-action review     | 5   | 75%    | EASY        | YES: Same hardware, SW-only addition          |
| **I-07** | Same (FCS)              | Different (acoustic+EO) | Same + external mic  | **Acoustic-cued sight** — mic array detects drone by sound, cues EO           | 3   | 70%    | HARD        | YES: Acoustic extends detection beyond LOS    |
| **I-08** | Extended (FCS+IFF)      | Combined (EO+RF)        | Same + RF module     | **IFF-enabled sight** — cooperative IFF interrogator                          | 3   | 50%    | HARD        | PARTIAL: IFF is protocol-dependent, not ACH   |
| **I-09** | New (detection only)    | Same (EO)               | New (tripod/pole)    | **Sentry detector** — AI detection + alert, no weapon interface               | 5   | 75%    | EASY        | YES: Same AI core, no weapon interface        |
| **I-10** | Same (FCS)              | Same (EO)               | New (vehicle mount)  | **Vehicle FCS** — V-L core on stabilized mount for vehicles/boats             | 4   | 60%    | MEDIUM      | YES: AI compensates vehicle motion via IMU    |
| **I-11** | Extended (FCS+sim)      | Same (EO)               | Same + laser emitter | **Laser trainer** — eye-safe laser, AI scores virtual engagements             | 4   | 70%    | MEDIUM      | YES: Realistic scoring without ammunition     |
| **I-12** | New (drone capture)     | Different (EO+net)      | New (shoulder-mount) | **Net-capture system** — AI tracks + guides net launcher                      | 2-3 | 55%    | HARD        | PARTIAL: Different ballistics domain          |

---

## SCREENING TABLE

| ID | Name | TRL | Local% | Delivery | Feasibility | Screen Result |
|----|------|-----|--------|----------|-------------|---------------|
| **I-01** | AI Smart Sight (CMOS) | 5-6 | 70% | 18 mo | MEDIUM | **✅ PASS — this IS V-SMASH-L** |
| **I-02** | Micro-sight (clip-on) | 4 | 75% | 12 mo | EASY | **✅ PASS — new family opportunity** |
| **I-03** | Dual-sensor (CMOS+thermal) | 4-5 | 55% | 24 mo | HARD | **✅ PASS — this IS V-SMASH-PRO** |
| **I-04** | Full-spectrum (EO+LRF+IMU) | 5 | 60% | 20 mo | MEDIUM | ✅ PASS — PRO variant option |
| **I-05** | Networked sight (C4I) | 3-4 | 65% | 30 mo | HARD | ⚠️ FLAG: TRL <4, >24 mo |
| **I-06** | Training mode (SW overlay) | 5 | 75% | 6 mo | EASY | **✅ PASS — maps to V-T** |
| **I-07** | Acoustic-cued | 3 | 70% | 30 mo | HARD | ⚠️ FLAG: TRL <4 |
| **I-08** | IFF-enabled | 3 | 50% | 30 mo | HARD | ❌ SCREEN OUT: TRL <4, local% <60%, not ACH |
| **I-09** | Sentry detector | 5 | 75% | 10 mo | EASY | **✅ PASS — new family opportunity** |
| **I-10** | Vehicle FCS | 4 | 60% | 24 mo | MEDIUM | **✅ PASS — maps to V-R (RWS)** |
| **I-11** | Laser trainer | 4 | 70% | 15 mo | MEDIUM | **✅ PASS — maps to V-T** |
| **I-12** | Net-capture | 2-3 | 55% | 36 mo | HARD | ❌ SCREEN OUT: TRL <4, >3 years |

**Result: 8 PASS, 2 FLAG (future roadmap), 2 SCREEN OUT**

---

## FAMILY COVERAGE CROSS-CHECK

| Family Product | P10 Idea Match | Coverage |
|----------------|----------------|----------|
| **V-L (LITE)** | I-01 | ✅ Exact match |
| **V-P (PRO)** | I-03 + I-04 | ✅ Covered by 2 ideas |
| **V-R (RWS)** | I-10 | ✅ Covered |
| **V-T (Trainer)** | I-06 + I-11 | ✅ Covered by 2 ideas |
| **V-X (Export)** | I-01 downgraded | ✅ Derivative |
| **V-NV (Night Vision)** | I-03 subset | ✅ Covered |
| **V-M (Micro) — NEW** | I-02 | ⭐ **Selected for P11** — v1.2: PARALLEL with V-L (DG-8 removed) |
| **V-D (Detector) — NEW** | I-09 | ⭐ **Selected for P11** |

---

## KEY FINDINGS

1. **Current 6-product family covers 10 of 12 ideas** — well-designed, no major blind spots.

2. **Two new opportunities selected for P11:**
   - **I-02 → V-M (Micro-sight)** — stripped clip-on, no fire gate, lead-indicator only. Lowest cost, highest volume, fastest to market.
   - **I-09 → V-D (Sentry Detector)** — standalone AI detection, no weapon interface. Perimeter security, different customer segment.

3. **I-06 + I-11 confirm V-T is two sub-options** — SW overlay (fast, V-L hardware) vs laser emitter (hardware variant).

4. **I-08 (IFF) correctly excluded** — protocol-dependent, not ACH-solvable, no VN drone IFF standards exist.

---

## FAMILY-LEVEL REQUIREMENT: IFF / MISCLASSIFICATION MITIGATION

> **QC FLAG-04 resolution.** P10 correctly screened out I-08 (cooperative IFF) as "protocol-dependent, not ACH." But the NEED for drone discrimination remains — ODI O02 (minimize hostile/civilian misclassification, Opp Score 17) is the family's second-highest priority.

**Resolution: AI confidence gating (not cooperative IFF)**

Since cooperative IFF requires a protocol that doesn't exist for drones in Vietnam, the family addresses O02 through AI confidence thresholds:

| ID | Requirement | Applies To | Specification |
|----|-------------|-----------|---------------|
| FR-IFF-01 | AI confidence threshold | V-L, V-M, V-NV, V-P, V-R | Below configurable threshold (default 70%) → engagement BLOCKED. Operator sees "UNCONFIRMED" overlay. |
| FR-IFF-02 | Classification categories | V-L, V-M, V-NV, V-P, V-R | Minimum 4 classes: HOSTILE_DRONE, FRIENDLY_DRONE, BIRD, UNKNOWN. UNKNOWN or FRIENDLY → engagement blocked. |
| FR-IFF-03 | Civilian proximity check | V-L, V-P, V-R | Person detected within 10m of target → "CIVILIAN PROXIMITY" warning. Not blocked but mandatory warning. |
| FR-IFF-04 | Engagement log | All fire control | Every engagement decision logged: classification, confidence %, operator ID, timestamp. Auditable. |

**Phase 1 action:** FR-IFF-01 through FR-IFF-04 must be included in Phase 1 requirements for ALL fire control products.

---

## HITL DECISION

**User selected: D) ADD BOTH I-02 + I-09 — expand family to 8 products.**

Next: Write P11 for V-M (Micro-sight) and V-D (Sentry Detector).
