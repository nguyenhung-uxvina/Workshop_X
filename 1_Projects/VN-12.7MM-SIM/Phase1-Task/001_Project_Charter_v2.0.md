# VN-12.7MM-SIM-001: PROJECT CHARTER
## 12.7mm Naval Mount Training Simulator

**Document**: VN-12.7MM-SIM-001-Charter | **Version**: 2.0 | **Date**: 2026-03-20
**Project Code**: VN-12.7MM-SIM-001
**Classification**: Defense Training Equipment

---

# 1. PROJECT IDENTIFICATION

## 1.1 Project Title

**HỆ THỐNG MÔ PHỎNG HUẤN LUYỆN BẮN SÚNG MÁY 12.7mm GẮN TÀU**
*12.7mm Naval Mount Gunnery Training Simulator*

## 1.2 Project Codename

**VN-12.7MM-SIM-001** (Short: "HỒNG HẢI" - Red Sea)

## 1.3 Document Index

| Doc # | Title | Phase | Version | Status |
|-------|-------|-------|---------|--------|
| 001 | Project Charter | 0 | v2.0 | ✅ This document |
| 002 | Requirements List | 1 | v1.3 | ✅ 201 reqs baselined |
| 003 | Function Structure | 1 | v1.0 | ✅ |
| 004 | Morphological Matrix | 1 | v1.0 | ✅ |
| 005 | Concept Evaluation (VDI 2225) | 1 | v1.0 | ✅ |
| 006 | System Architecture | 1 | v1.0 | ✅ (superseded by 015) |
| 007 | Standards Compliance Matrix | 1 | v1.0 | ✅ |
| 008 | Phase 1 Gate Audit | 1 | v1.0 | ✅ CONDITIONAL PASS |
| 009 | Variant Applicability Matrix | 1 | v1.0 | ✅ |
| 010 | Function Structure | 2 | v2.0 | ✅ |
| 011 | Morphological Matrix | 2 | v2.0 | ✅ |
| 012 | Concept Evaluation (VDI 2225) | 2 | v2.0 | ✅ V2 Standard 76.3% |
| 013 | Phase 2 Gate Review | 2 | v1.0 | ✅ PASSED |
| 014 | Magnetic Brake Prototype Test Plan | 3 | v1.0 | ✅ Brake ordered |
| 015 | System Architecture | 3 | v2.1 | ✅ 9 subsystems |
| 016 | Interface Control Document | 3 | v1.1 | ✅ 33 interfaces |
| 017 | Preliminary BOM | 3 | v1.1 | ✅ $43,608 prototype |
| 018 | Power Budget | 3 | v1.1 | ✅ 1,036W trainer |
| 019 | DfX Review | 3 | v1.0 | ✅ |
| 020 | Risk Register Update | 3 | v1.0 | ✅ |
| 021 | Galaxy Reference Map | 3 | v1.0 | ✅ |
| 022 | Recoil Subsystem Concept Design | 2b | v1.1 | ✅ RC-A Pneumatic SELECTED |

---

# 2. STRATEGIC CONTEXT

## 2.1 Problem Statement

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    TRAINING PROBLEM ANALYSIS                                        │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT SITUATION:                                                                 │
│  ═══════════════════                                                                │
│                                                                                     │
│  Vietnamese Navy operates 50+ vessels equipped with 12.7mm DShK/DShKM              │
│  heavy machine guns on manual naval mounts. These crew-served weapons              │
│  require significant operator skill for:                                           │
│                                                                                     │
│  • Target acquisition and tracking                                                 │
│  • Lead angle calculation for moving targets                                       │
│  • Burst fire control and ammunition management                                    │
│  • Coordination with ship movement and other weapons                               │
│                                                                                     │
│  TRAINING CHALLENGES:                                                               │
│  ════════════════════                                                               │
│                                                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │                                                                           │    │
│  │  CHALLENGE 1: AMMUNITION COST                                            │    │
│  │  ├── 12.7×108mm round: $3-5/round                                       │    │
│  │  ├── Training requirement: 200-500 rounds/qualification                  │    │
│  │  ├── Annual training: 2-3 qualifications × 1000+ gunners                │    │
│  │  └── Cost: $600,000-1,500,000/year ammunition alone                     │    │
│  │                                                                           │    │
│  │  CHALLENGE 2: SHIP AVAILABILITY                                          │    │
│  │  ├── Operational tempo: High (continuous patrol requirements)            │    │
│  │  ├── Fuel cost: $3,000-5,000/training sortie                           │    │
│  │  ├── Weather windows: Limited safe firing conditions                    │    │
│  │  └── Result: Only 4-6 live-fire exercises/year per crew                 │    │
│  │                                                                           │    │
│  │  CHALLENGE 3: SAFETY & ENVIRONMENTAL                                     │    │
│  │  ├── Restricted firing zones required                                   │    │
│  │  ├── Risk of accidents with live ammunition                             │    │
│  │  ├── Barrel wear: $2,000-3,000 per barrel replacement                  │    │
│  │  └── Environmental impact concerns                                       │    │
│  │                                                                           │    │
│  │  CHALLENGE 4: TRAINING EFFECTIVENESS                                     │    │
│  │  ├── Limited feedback on aiming errors                                  │    │
│  │  ├── Cannot practice against realistic threats                          │    │
│  │  ├── No night/adverse weather training capability                       │    │
│  │  └── Skill degradation between live-fire exercises                      │    │
│  │                                                                           │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  IMPACT:                                                                           │
│  ════════                                                                           │
│  • Gunners average only 15-20 live-fire hours before first deployment             │
│  • Qualification rates: 60-70% (vs 90%+ target)                                   │
│  • Combat readiness gaps: Identified in operational assessments                    │
│  • Re-training costs: High due to skill degradation                               │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Proposed Solution

**SIMULATOR-BASED TRAINING SYSTEM** that provides:

1. **Unlimited Practice** - No ammunition consumption
2. **Realistic Scenarios** - Moving targets, multiple threats, adverse conditions
3. **Immediate Feedback** - Shot placement analysis, performance scoring
4. **Safe Environment** - No live ammunition hazards
5. **Cost Effective** - Reduces ammunition and fuel costs

## 2.3 Strategic Alignment

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    STRATEGIC ALIGNMENT                                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  NAVY TRAINING MODERNIZATION PROGRAM:                                              │
│  • Simulator-based training: National directive                                    │
│  • Indigenous development: Priority for defense self-sufficiency                   │
│  • Technology transfer: Build local capability                                     │
│                                                                                     │
│  INTEGRATED TRAINING SYSTEM:                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                             │  │
│  │    CLASSROOM        SIMULATOR           LIVE-FIRE         OPERATIONAL      │  │
│  │   (Theory)      (VN-12.7MM-SIM-001)    (with BMT-01)      (At Sea)        │  │
│  │       │                │                    │                 │            │  │
│  │       ▼                ▼                    ▼                 ▼            │  │
│  │   ┌───────┐       ┌───────┐           ┌───────┐         ┌───────┐        │  │
│  │   │Week   │──────▶│Week   │──────────▶│Week   │────────▶│Combat │        │  │
│  │   │ 1-2   │       │ 3-8   │           │ 9-10  │         │Ready  │        │  │
│  │   └───────┘       └───────┘           └───────┘         └───────┘        │  │
│  │                                                                             │  │
│  │   20% Training      60% Training        15% Training     5% Validation    │  │
│  │   Time              Time                Time             Time             │  │
│  │                                                                             │  │
│  └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                     │
│  SYNERGY WITH OTHER PROJECTS:                                                      │
│  • BMT-01-HN (Naval Target): Live-fire validation system                          │
│  • VN-NGT-001 (Gunnery Trainer): Shared software platform                        │
│  • Combined training package for Navy                                              │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 3. WEAPON SYSTEM REFERENCE

## 3.1 12.7mm DShK/DShKM Specifications

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    WEAPON SYSTEM: DShK/DShKM 12.7mm                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                             │  │
│  │                         DShKM ON NAVAL MOUNT                                │  │
│  │                                                                             │  │
│  │                              ┌───────────────┐                              │  │
│  │                              │   REAR SIGHT  │                              │  │
│  │                    ┌─────────┴───────────────┴─────────┐                    │  │
│  │                    │████████████████████████████████████│                    │  │
│  │         RECEIVER ──│▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│── BARREL          │  │
│  │                    │████████████████████████████████████│    (1070mm)       │  │
│  │                    └──────────────┬────────────────────┘                    │  │
│  │                                   │                                          │  │
│  │                         ┌─────────┴─────────┐                               │  │
│  │           SPADE GRIPS ──┤    ├─────┤       │── TRIGGER                     │  │
│  │                         │    │     │       │                                │  │
│  │                         └────┴─────┴───────┘                               │  │
│  │                                   │                                          │  │
│  │                         ┌─────────┴─────────┐                               │  │
│  │                         │                   │                               │  │
│  │                         │   CRADLE/MOUNT    │                               │  │
│  │                         │                   │                               │  │
│  │                         └─────────┬─────────┘                               │  │
│  │                                   │                                          │  │
│  │                         ┌─────────┴─────────┐                               │  │
│  │                         │                   │                               │  │
│  │                         │  PEDESTAL/BASE    │                               │  │
│  │                         │  (Ship-mounted)   │                               │  │
│  │                         │                   │                               │  │
│  │                         └───────────────────┘                               │  │
│  │                                                                             │  │
│  └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                     │
│  SPECIFICATIONS:                                                                    │
│  ═══════════════                                                                    │
│                                                                                     │
│  │ Parameter              │ DShKM              │ Notes                        │   │
│  ├────────────────────────┼────────────────────┼──────────────────────────────┤   │
│  │ Caliber                │ 12.7×108mm         │ Soviet standard              │   │
│  │ Rate of Fire           │ 600 rpm (cyclic)   │ 80-100 rpm practical        │   │
│  │ Muzzle Velocity        │ 850 m/s            │ API-T round                  │   │
│  │ Effective Range        │ 2,000m (ground)    │ 1,500m (air)                │   │
│  │ Maximum Range          │ 7,000m             │ Indirect fire               │   │
│  │ Weight (gun)           │ 34 kg              │ Without mount               │   │
│  │ Weight (complete)      │ 157 kg             │ With naval mount            │   │
│  │ Barrel Length          │ 1,070mm            │ 84 calibers                 │   │
│  │ Feed                   │ 50-round belt      │ Left side                   │   │
│  │ Cooling                │ Air-cooled         │ Quick-change barrel         │   │
│  └────────────────────────┴────────────────────┴──────────────────────────────┘   │
│                                                                                     │
│  NAVAL MOUNT SPECIFICATIONS:                                                        │
│  ═══════════════════════════                                                        │
│                                                                                     │
│  │ Parameter              │ Value              │ Notes                        │   │
│  ├────────────────────────┼────────────────────┼──────────────────────────────┤   │
│  │ Traverse               │ 360°               │ Manual operation            │   │
│  │ Elevation              │ -10° to +85°       │ Anti-surface/air            │   │
│  │ Traverse Rate (max)    │ 60°/s              │ Operator dependent          │   │
│  │ Elevation Rate (max)   │ 40°/s              │ Operator dependent          │   │
│  │ Mount Height           │ 1,200mm            │ From deck                   │   │
│  │ Shield                 │ Optional           │ Splinter protection         │   │
│  │ Ammunition Storage     │ 200-500 rounds     │ Ready ammunition            │   │
│  └────────────────────────┴────────────────────┴──────────────────────────────┘   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Operational Context

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    OPERATIONAL CONTEXT                                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  SHIP CLASSES WITH 12.7mm:                                                         │
│  ═══════════════════════════                                                        │
│                                                                                     │
│  │ Ship Class       │ Type        │ Qty  │ 12.7mm Mounts │ Role              │   │
│  ├──────────────────┼─────────────┼──────┼───────────────┼───────────────────┤   │
│  │ TT-400TP         │ Patrol      │ 12+  │ 2-4           │ Coastal patrol    │   │
│  │ Project 10412    │ Patrol      │ 10+  │ 2             │ Fishery protect   │   │
│  │ Various PB       │ Patrol      │ 30+  │ 1-2           │ River/coastal     │   │
│  │ Auxiliary        │ Support     │ 20+  │ 2-4           │ Logistics         │   │
│  │ Landing craft    │ Amphibious  │ 10+  │ 2-4           │ Beach assault     │   │
│  └──────────────────┴─────────────┴──────┴───────────────┴───────────────────┘   │
│                                                                                     │
│  TOTAL: 100+ 12.7mm mount positions requiring trained gunners                     │
│                                                                                     │
│  TYPICAL ENGAGEMENT SCENARIOS:                                                      │
│  ═══════════════════════════════                                                    │
│                                                                                     │
│  SCENARIO 1: SURFACE TARGET (Primary)                                              │
│  ├── Target: Small boat, jet ski, floating mine                                   │
│  ├── Range: 200-1,500m                                                            │
│  ├── Relative velocity: 0-40 knots                                                │
│  └── Training priority: ⭐⭐⭐⭐⭐                                                  │
│                                                                                     │
│  SCENARIO 2: AERIAL TARGET (Secondary)                                             │
│  ├── Target: Helicopter, low-flying aircraft, UAV                                 │
│  ├── Range: 300-1,000m                                                            │
│  ├── Crossing speed: 50-200 m/s                                                   │
│  └── Training priority: ⭐⭐⭐⭐                                                    │
│                                                                                     │
│  SCENARIO 3: SHORE TARGET (Tertiary)                                               │
│  ├── Target: Beach obstacles, defensive positions                                 │
│  ├── Range: 500-1,500m                                                            │
│  ├── Stationary or slow-moving                                                    │
│  └── Training priority: ⭐⭐⭐                                                      │
│                                                                                     │
│  SCENARIO 4: FORCE PROTECTION (Defensive)                                          │
│  ├── Target: Approaching small craft (asymmetric threat)                          │
│  ├── Range: 100-500m                                                              │
│  ├── High-speed, unpredictable                                                    │
│  └── Training priority: ⭐⭐⭐⭐⭐                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 4. PROJECT OBJECTIVES

## 4.1 Primary Objectives

| # | Objective | Success Criteria | Priority |
|---|-----------|------------------|----------|
| O1 | Reduce ammunition consumption | 50% reduction in live rounds | HIGH |
| O2 | Increase training throughput | 3× more training hours/year | HIGH |
| O3 | Improve qualification rates | From 65% to 90%+ | HIGH |
| O4 | Enable night/weather training | 24/7 availability | MEDIUM |
| O5 | Provide performance metrics | Quantified scoring system | MEDIUM |
| O6 | Indigenous production | 70%+ local content | HIGH |

## 4.2 Technical Objectives (v2.0 — updated per Galaxy research + Phase 2/3 results)

| # | Objective | Target Specification | v1.0 | Change Rationale |
|---|-----------|---------------------|------|-----------------|
| T1 | Realistic controls | **≥70% mount resistance feel** (L3 fidelity) | 90% | Galaxy: [[Recoil Fidelity Threshold]] — 70% sufficient for positive training transfer. Over-engineering wastes budget. |
| T1b | Recoil fidelity | **≥70% peak force OR zero** (never 10-50%) | N/A (was out of scope) | Galaxy: [[Haptic Congruency Rule]]. RC-A Pneumatic ≥1,400 N. |
| T2 | Visual fidelity | Sufficient for target tracking training | Same | -- |
| T3 | Ballistic accuracy | 6-DOF trajectory model | Same | -- |
| T4 | Latency | **≤50ms** end-to-end (S-004) | <100ms | Phase 1 requirements refined. Actual budget: 35.5ms visual, 15.5ms recoil. |
| T5 | Reliability | >500 hours MTBF | Same | DfX review (Doc 019): ~2,500h estimated. |
| T6 | Affordability | **≤$45,000**/trainer unit (CO-001) | <$50,000 | Phase 1 refined. Actual: $43,608 prototype. |
| T7 | Data capture | Sensor pipeline for I-08 ACH flywheel | N/A (new) | MOUNT "T": Track data from day 1. $50 added cost. |

## 4.3 Training Objectives

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    TRAINING SKILL MATRIX                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  SKILL LEVEL 1: BASIC OPERATOR (Weeks 1-3)                                         │
│  ═════════════════════════════════════════════                                      │
│  □ Weapon familiarization (controls, safety, procedures)                          │
│  □ Mount operation (traverse, elevation, locking)                                 │
│  □ Sight alignment and picture                                                     │
│  □ Trigger control and burst discipline                                           │
│  □ Ammunition handling simulation                                                  │
│                                                                                     │
│  SKILL LEVEL 2: TARGET ENGAGEMENT (Weeks 4-6)                                      │
│  ═════════════════════════════════════════════                                      │
│  □ Stationary target acquisition                                                  │
│  □ Range estimation                                                                │
│  □ Lead calculation for moving targets                                            │
│  □ Surface target engagement (boats)                                              │
│  □ Air target engagement (basics)                                                 │
│                                                                                     │
│  SKILL LEVEL 3: TACTICAL GUNNERY (Weeks 7-10)                                      │
│  ═════════════════════════════════════════════                                      │
│  □ Multiple target prioritization                                                 │
│  □ Fire discipline under pressure                                                 │
│  □ Night gunnery (with NVG simulation)                                           │
│  □ Adverse weather conditions                                                     │
│  □ Coordinated fire (multiple gunners)                                           │
│                                                                                     │
│  SKILL LEVEL 4: COMBAT READINESS (Certification)                                   │
│  ═════════════════════════════════════════════                                      │
│  □ Force protection scenarios                                                     │
│  □ Rules of engagement compliance                                                 │
│  □ Stress inoculation (time pressure, chaos)                                     │
│  □ Battle damage/malfunction response                                            │
│  □ Combat assessment and scoring                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 5. SCOPE DEFINITION

## 5.1 In Scope

| # | Item | Description |
|---|------|-------------|
| 1 | Hardware trainer | Physical mount replica with controls |
| 2 | Visual system | Display/projection for target scene |
| 3 | Software | Simulation engine, ballistics, scenarios |
| 4 | Instructor station | Control, monitoring, AAR |
| 5 | Training curriculum | 10-week program with exercises |
| 6 | Documentation | User manual, maintenance guide |

## 5.2 Out of Scope

| # | Item | Reason |
|---|------|--------|
| 1 | Full motion platform | Cost/complexity — deferred |
| ~~2~~ | ~~Recoil simulation~~ | ~~Cost - Phase 2 enhancement~~ **NOW IN SCOPE (v2.0):** RC-A Pneumatic selected, Doc 022 v1.1, integrated into I-01. Two-Channel architecture: Channel A (magnetic brake) + Channel B (pneumatic recoil). $850 added cost. |
| 3 | Multi-station networking | I-06 TAC variant (DG-1 gated) |
| 4 | Actual weapon integration | Safety — training only |
| 5 | Ship bridge integration | Separate system |
| 6 | AI coaching (I-08 ACH) | DG-2 + DG-3 gated. Data capture pipeline in I-01 enables future activation. |

## 5.3 Product Variant Family (v2.0 — IRONMESH Orchestration)

| Variant | Codename | Description | Gate Dependency | Gate 0 Score |
|---------|----------|-------------|-----------------|-------------|
| **I-01** | HỒNG HẢI | Standard indoor trainer (single station) | None — **LEAD VARIANT** | 3.75 |
| I-02 | CTR | Containerized (ISO 20ft, deployable) | DG-1: I-01 Phase 3 | 3.30 |
| I-06 | BẠCH ĐẰNG | Tactical crew (3-station networked) | DG-1: I-01 Phase 3 | 3.55 |
| I-08 | HỒNG HẢI MASTER | AI Coach (ACH principle) | DG-2 + DG-3 | 3.15 |
| I-09 | HỒNG HẢI POCKET | Tablet trainer (portable) | None | 3.75 |

**Strategy:** I-01 → validate → I-06/I-02 → I-08 (ACH data compound). See [Orchestration Design](../Orchestration/VN-12.7MM-SIM_Family_Orchestration_Design_v1.0.md).

**3-Phase Product Strategy (Doc 022):**
1. **Phase 1:** I-01 HỒNG HẢI — VN military, $43K/unit, pneumatic recoil
2. **Phase 2:** I-08 ACH — VN military + export, AI coaching, $8-12K premium
3. **Phase 3:** Export — ASEAN/Africa/ME, electric recoil swap, multi-platform ($5-15K)

## 5.4 Constraints

| # | Constraint | Limit | Impact |
|---|------------|-------|--------|
| C1 | Budget | <$50,000/unit | Material choices |
| C2 | Timeline | 12 months to prototype | Design complexity |
| C3 | Local content | >70% | Sourcing options |
| C4 | Space | <10m² footprint | Layout design |
| C5 | Power | 220VAC single phase | Equipment selection |

---

# 6. STAKEHOLDER ANALYSIS

## 6.1 Key Stakeholders

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    STAKEHOLDER MAP                                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                              HIGH INFLUENCE                                         │
│                                    │                                                │
│              ┌─────────────────────┼─────────────────────┐                         │
│              │                     │                     │                         │
│              │    NAVY COMMAND     │   TRAINING CENTER   │                         │
│              │    (Sponsor)        │   (User)            │                         │
│              │    • Budget         │   • Requirements    │                         │
│              │    • Priorities     │   • Acceptance      │                         │
│              │                     │                     │                         │
│   LOW        │─────────────────────┼─────────────────────│        HIGH             │
│   INTEREST   │                     │                     │        INTEREST         │
│              │                     │                     │                         │
│              │    PRODUCTION       │   GUNNER TRAINEES   │                         │
│              │    (Manufacturer)   │   (End User)        │                         │
│              │    • Capability     │   • Usability       │                         │
│              │    • Constraints    │   • Realism         │                         │
│              │                     │                     │                         │
│              └─────────────────────┼─────────────────────┘                         │
│                                    │                                                │
│                              LOW INFLUENCE                                          │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 6.2 Stakeholder Requirements Summary

| Stakeholder | Key Needs | Success Measure |
|-------------|-----------|-----------------|
| Navy Command | Cost-effective training solution | ROI within 2 years |
| Training Center | Easy to use, maintain | >95% availability |
| Instructors | Control over scenarios | Flexible curriculum |
| Trainees | Realistic, engaging | Skill transfer to real |
| Maintenance | Reliable, serviceable | <4 hrs MTTR |

---

# 7. PRELIMINARY COST-BENEFIT ANALYSIS

## 7.1 Development Cost Estimate

| Item | Estimate | Notes |
|------|----------|-------|
| Design & Engineering | $15,000 | 6 months |
| Prototype Hardware | $25,000 | First article |
| Software Development | $20,000 | Simulation + UI |
| Testing & Validation | $10,000 | Acceptance testing |
| Documentation | $5,000 | Training materials |
| **TOTAL DEVELOPMENT** | **$75,000** | |

## 7.2 Unit Production Cost (v2.0 — from Doc 017 BOM v1.1)

| Item | v1.0 Estimate | Actual (Doc 017) | Notes |
|------|--------------|------------------|-------|
| SS1 Mechanical | $8,000 | $1,265 | Local fab, much lower than estimated |
| SS2 Sensing | $5,000 (w/ controls) | $323 | Encoders + FSR only |
| SS3 Resistance (brakes) | -- | $605 | Was not in original scope |
| SS4 Computing | $5,000 | $1,590 | PC + GPU + I/O |
| SS5 Visual | $10,000 | $990 | 3x 27" QHD = $280 each |
| SS6 Audio | -- | $530 | 5.1 surround |
| SS7 Feedback | -- | $10 | Status LEDs only |
| SS8 Instructor | -- | $175 | Monitor + KB/mouse |
| SS10 Recoil (v2.0) | -- | $850 | Pneumatic ($485 station + $365 facility) |
| HW-ELEC | -- | $170 | Cabling, connectors |
| Software (NRE, qty 1) | $23,000 | $36,500 | More complex than estimated |
| Integration/test | $4,000 | $600 | Efficient for solo engineer |
| **PROTOTYPE (qty 1)** | **$75,000 total** | **$43,608** | **42% under original estimate** |
| **UNIT COST (qty 10)** | **$35,000-45,000** | **$11,432** | **SW amortized, no facility cost** |

**Key insight:** v1.0 massively overestimated hardware costs. Actual hardware = $6,508 (vs $33,000 estimated). Software is the dominant cost driver.

## 7.3 Return on Investment

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    ROI ANALYSIS                                                     │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ANNUAL COST WITHOUT SIMULATOR:                                                    │
│  ═══════════════════════════════                                                    │
│  Ammunition: 200 rounds × 1000 gunners × $4 ............... $800,000              │
│  Fuel/operations: 50 sorties × $4,000 ..................... $200,000              │
│  Barrel replacement: 20 barrels × $2,500 .................. $50,000               │
│  Range operations: 50 days × $1,000 ....................... $50,000               │
│  ────────────────────────────────────────────────────────────────────              │
│  TOTAL ANNUAL COST: $1,100,000                                                     │
│                                                                                     │
│  ANNUAL COST WITH SIMULATOR (6 units):                                             │
│  ══════════════════════════════════════                                             │
│  Simulator maintenance: 6 × $3,000 ....................... $18,000                │
│  Reduced ammunition (50%): 100 rounds × 1000 × $4 ........ $400,000               │
│  Reduced fuel/operations (60%): 20 sorties × $4,000 ...... $80,000                │
│  Reduced barrel replacement: 8 barrels × $2,500 .......... $20,000                │
│  Reduced range operations: 20 days × $1,000 .............. $20,000                │
│  ────────────────────────────────────────────────────────────────────              │
│  TOTAL ANNUAL COST: $538,000                                                       │
│                                                                                     │
│  ANNUAL SAVINGS: $562,000                                                          │
│                                                                                     │
│  INVESTMENT:                                                                        │
│  Development: $75,000                                                              │
│  6 units × $45,000: $270,000                                                       │
│  TOTAL: $345,000                                                                   │
│                                                                                     │
│  PAYBACK PERIOD: 7.4 months                                                        │
│  5-YEAR ROI: 714%                                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 8. PROJECT APPROACH

## 8.1 Design Methodology

**Pahl & Beitz Systematic Design** with D-M-I-R learning framework:

| Phase | Activities | Deliverables | Duration |
|-------|------------|--------------|----------|
| **Phase 1** | Task Clarification | Requirements List | 2 weeks |
| **Phase 2** | Conceptual Design | Selected Concept | 3 weeks |
| **Phase 3** | Embodiment Design | Layout + BOM | 4 weeks |
| **Phase 4** | Detail Design | Production Docs | 4 weeks |

## 8.2 Design Principles

1. **Modularity** - Upgradeable for future enhancements
2. **Maintainability** - Field serviceable with standard tools
3. **Affordability** - Cost-conscious material selection
4. **Local Content** - Maximize Vietnamese manufacturing
5. **Training Transfer** - Skills must transfer to real weapon

## 8.3 Risk-Based Approach

| Risk Area | Mitigation Strategy |
|-----------|---------------------|
| Fidelity vs Cost | Define minimum acceptable fidelity |
| Software complexity | Use proven game engine |
| Control feel | User testing with experienced gunners |
| Integration | Incremental integration testing |

---

# 9. PRELIMINARY SCHEDULE

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│              PROJECT SCHEDULE (v2.0 — actual progress + forecast)                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  2026        Jan   Feb   Mar   Apr   May   Jun   Jul   Aug   Sep   Oct   Nov       │
│               │     │     │     │     │     │     │     │     │     │     │        │
│  PHASE 0      ████                                                                  │
│  ODI + Gate 0    │  ✅ DONE (4 variants scored)                                     │
│                  ▼                                                                  │
│  PHASE 1         ████████                                                           │
│  Task Clarif.         │  ✅ DONE (201 reqs, Gate CONDITIONAL PASS)                  │
│                       ▼                                                             │
│  PHASE 2              ████████                                                      │
│  Conceptual                │  ✅ DONE (V2 Standard 76.3%, Gate PASSED)              │
│                            ▼                                                        │
│  PHASE 2b                  ██                                                       │
│  Recoil Subsys              │  ✅ DONE (RC-A Pneumatic, Doc 022)                    │
│                             ▼                                                       │
│  PHASE 3                    ████████████████                                        │
│  Embodiment                 ←── WE ARE HERE (Docs 014-022 complete)                 │
│                                   │                                                 │
│  PHYSICAL     ◆ Brake test  ◆ Valve test  ◆ Integration test                      │
│  GATES         2026-04-05    2026-04-15    2026-04-20                               │
│                                                         │                           │
│  PHASE 4                                           ████████████████                │
│  Detail Design                                          │                           │
│                                                         ▼                           │
│  PROTOTYPE                                                  ████████████████       │
│  Build & Test                                                    │                  │
│                                                                  ▼                  │
│  MILESTONE  ◆      ◆       ◆      ◆ ◆ ◆           ◆          ◆          ◆        │
│            G0     PDR     CDR    T1 T2 T3         EDR        FAI       DELIVERY    │
│            ✅     ✅      ✅     ↑                                                  │
│                                 NEXT                                                │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 10. APPROVAL

## 10.1 Project Charter Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Sponsor | | | |
| Project Manager | | | |
| Technical Lead | | | |
| Customer Representative | | | |

## 10.2 Document Control

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Engineering Team | Initial release |
| 2.0 | 2026-03-20 | KN + AI | Major update: doc index (7→22 docs), recoil IN scope (RC-A Pneumatic), 5 variant family + 3-phase strategy, technical objectives corrected (70% fidelity, ≤50ms latency), actual BOM costs ($43,608 vs $75K estimated), schedule updated with actual progress + physical gates, data capture objective T7 added |

---

**CURRENT PHASE**: Phase 3 Embodiment Design — 9 docs complete (014-022). Next physical gate: brake test 2026-04-05.

---

*VN-12.7MM-SIM-001 Project Charter v2.0*
*12.7mm Naval Mount Gunnery Training Simulator — I-01 HỒNG HẢI*
