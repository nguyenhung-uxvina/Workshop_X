---
project: VN-XUONG-UUV
phase: 1
type: requirements-list
document: "002"
version: 1.1
created: 2026-03-06
updated: 2026-03-06
status: draft
quantification_rate: 92%
data_confidence: MEDIUM (30% L2 user-confirmed, 30% L4 reference/ODI, 40% L5 assumptions — 4/7 stakeholders uninterviewed)
changelog: "v1.2 — Added SA-09 (emergency tether cable release) from QC Gate Flag 07. Total: 107 reqs. v1.1 — Added HC-8 to HC-11 (tethered UUV, 25km range, suitcase controller on vessel). Added 21 new requirements for tether management, control station. Removed S-03 (USBL not needed)."
---

# VN-XUONG-UUV — Doc 002: Requirements List v1.0

## Legend

| Symbol | Meaning |
|--------|---------|
| **D** | Demand — must be met (from ODI HARD CONSTRAINT + MUST) |
| **W** | Wish — desirable (from ODI WISH) |
| **[Q]** | Quantified — has measurable target |
| **[GAP]** | Not yet quantified — needs data or decision |
| **Source** | ODI outcome ID or hard constraint ID |

---

## 1. GEOMETRY

| ID   | D/W   | Requirement                             | Target Value                                              | Source                 | Verification |
| ---- | ----- | --------------------------------------- | --------------------------------------------------------- | ---------------------- | ------------ |
| G-01 | **D** | Hull length overall (LOA)               | <= 8.5 m [Q]                                              | HC-1, O27              | Measurement  |
| G-02 | **D** | Hull beam overall                       | <= 2.8 m [Q]                                              | HC-1, O27              | Measurement  |
| G-03 | **D** | Draft (full load)                       | <= 0.8 m [Q]                                              | Path 3 analysis        | Measurement  |
| G-04 | **D** | Stern ramp length                       | >= 5.5 m (UUV L + margin) [Q]                             | O10, HC-7              | Measurement  |
| G-05 | **D** | Stern ramp angle                        | 15-20 deg from horizontal [Q]                             | Reference consensus    | Measurement  |
| G-06 | **D** | V-funnel mouth width                    | >= 2.0 m [Q]                                              | O17, O14               | Measurement  |
| G-07 | **D** | V-funnel mouth height                   | >= 1.0 m (UUV H_max 850mm + margin) [Q]                   | HC-7, O15              | Measurement  |
| G-08 | **D** | Cradle internal diameter                | 400 +10/-0 mm [Q]                                         | HC-7 (D=400mm)         | Measurement  |
| G-09 | **D** | Cradle length                           | >= 5,000 mm [Q]                                           | HC-7 (L=5000mm)        | Measurement  |
| G-10 | **D** | Working deck length (aft of wheelhouse) | >= 2.0 m [Q]                                              | O26, crew safety       | Measurement  |
| G-11 | **W** | Freeboard at stern (full load)          | >= 0.5 m [Q]                                              | Stability              | Calculation  |
| G-12 | **D** | Tether cable drum space                 | Sufficient for 25 km cable on drum [Q]                    | HC-8, HC-9             | Measurement  |
| G-13 | **D** | UUV control station space               | >= 0.8 x 0.6 m deck area for suitcase controller [Q]      | HC-10, HC-11           | Measurement  |
| G-14 | **D** | Cable fairlead at stern                 | Aligned with ramp centerline, smooth radius >= 300 mm [Q] | HC-8, cable protection | Measurement  |

---

## 2. KINEMATICS

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| K-01 | **D** | Winch line speed (recovery) | 3-10 m/min, variable [Q] | O18, reference | Test |
| K-02 | **D** | Winch line speed (launch — controlled descent) | 1-5 m/min [Q] | O10 | Test |
| K-03 | **D** | Ramp tilt mechanism (if applicable) | [GAP] — depends on concept | Phase 2 TBD | — |
| K-04 | **W** | UUV cradle traverse (lateral fine adjustment) | +/- 50 mm [Q] | O07 | Test |
| K-05 | **D** | Tether cable pay-out speed (launch/operation) | Matching UUV speed, up to 5 kts [Q] | HC-8, operational | Test |
| K-06 | **D** | Tether cable reel-in speed (recovery) | 3-10 m/min, synchronized with LARS winch [Q] | HC-8, OP-03 | Test |

---

## 3. FORCES

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| F-01 | **D** | Winch SWL (static) | >= 1,000 kg [Q] | 550 kg UUV + dynamic factor 1.5 + ramp friction | Calculation + test |
| F-02 | **D** | Winch dynamic capacity | >= 1,500 kg peak [Q] | SS 3 wave loads | Calculation |
| F-03 | **D** | UUV water entry impact | <= 2g vertical at UUV CG [Q] | O10, O15 | Instrumented test |
| F-04 | **D** | Cradle clamping force | Secure UUV (550 kg) at 30 deg heel, 1g lateral [Q] | O12, safety | Calculation + test |
| F-05 | **D** | Tow bridle breaking strength | >= 5x static tow load [Q] | Towing safety factor | Certificate |
| F-06 | **D** | Bollard pull (propulsion) | [GAP] — depends on hull resistance calc | Phase 2-3 | Sea trial |
| F-07 | **D** | Stability — GM (metacentric height) | >= 0.5 m at full load [Q] | Classification rules | Inclining test |
| F-08 | **D** | Stability — GZ curve | Positive to >= 60 deg [Q] | Classification rules | Calculation |
| F-09 | **D** | Tether cable tension (operating) | [GAP] — depends on cable type, depth, current, range | HC-8, HC-9 | Calculation |
| F-10 | **D** | Cable drum brake holding force | >= 1.5x max cable tension [Q] | HC-8, safety | Test |

---

## 4. ENERGY

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| E-01 | **D** | Fuel capacity | Sufficient for 8 hr operation at cruise speed [Q] | O03, operational | Calculation |
| E-02 | **D** | LARS power supply | Sufficient to operate winch + hydraulic pump simultaneously [Q] | O05, O08 | Test |
| E-03 | **W** | Auxiliary power (12V/24V) | >= 500W for electronics + lighting [Q] | Navigation, comms | Test |
| E-04 | **W** | Range (self-transit mode) | >= 70 nm [Q] | Path 3 analysis | Sea trial |
| E-05 | **D** | Power for UUV control station | 220VAC or 24VDC, [GAP] — wattage TBD from controller spec | HC-10, HC-11 | Test |
| E-06 | **D** | Power for tether cable drum (TMS) | Sufficient for continuous pay-out/reel-in [Q] | HC-8, K-05, K-06 | Test |

---

## 5. MATERIAL

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| M-01 | **D** | Hull material | Marine aluminum 5083-H321 or equivalent [Q] | Path 3, O23 | Material cert |
| M-02 | **D** | UUV contact surfaces | UHMWPE or equivalent soft material [Q] | O15, HC-3 | Material cert |
| M-03 | **D** | Corrosion protection | Marine-grade anodizing or paint system, cathodic protection [Q] | O23 | Inspection |
| M-04 | **D** | All fasteners below waterline | 316 stainless steel or marine bronze [Q] | O23, tropical | Material cert |
| M-05 | **D** | Nội địa hóa rate (by value) | >= 50% [Q] | HC-5 | BOM analysis |

---

## 6. SIGNALS (Electronics & Control)

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| S-01 | **D** | GPS navigation | Accuracy <= 5 m CEP [Q] | Navigation min | Test |
| S-02 | **D** | Speed measurement | Speed log or GPS-derived [Q] | Navigation min | Test |
| S-03 | ~~W~~ | ~~USBL receiver for UUV tracking~~ | ~~Range >= 500 m~~ | ~~O19, O14~~ | **REMOVED — UUV is tethered, USBL not needed** |
| S-04 | **W** | Sea state sensor (wave height) | [GAP] — type TBD | O09, O02 | — |
| S-05 | **W** | IR camera (night recovery) | [GAP] — spec TBD | O21 | — |
| S-06 | **D** | VHF radio | Standard marine VHF [Q] | Safety regulation | Inspection |
| S-07 | **W** | Winch load cell (overload protection) | Display + alarm at >= 80% SWL [Q] | O08, O25 | Test |
| S-08 | **D** | UUV control station (suitcase controller) | Portable, operated from vessel deck/wheelhouse [Q] | HC-10, HC-11 | Inspection |
| S-09 | **D** | Tether cable — signal & control | Control commands + data transmitted via tether [Q] | HC-8 | Test |
| S-10 | **D** | Tether cable length counter | Real-time display of cable paid out, accuracy <= 1% [Q] | HC-9, operational | Test |
| S-11 | **W** | Tether cable tension display | Real-time at helm/control station [Q] | F-09, safety | Test |

---

## 7. SAFETY

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| SA-01 | **D** | Crew capacity | 3 persons [Q] | Path 3, O06 | Design review |
| SA-02 | **D** | Crew stern deck exposure time per recovery | <= 10 min [Q] | O26, HC-4 | Timed trial |
| SA-03 | **D** | Handrails on working deck | Continuous, >= 1.0 m height [Q] | Safety regulation | Inspection |
| SA-04 | **D** | Non-skid deck surface | All working areas [Q] | HC-4 | Inspection |
| SA-05 | **D** | Life-saving equipment | Life jackets x3, lifebuoy x2 min [Q] | SOLAS/VN reg | Inspection |
| SA-06 | **D** | Emergency tow release | Quick-release operable by 1 person in < 5 sec [Q] | Towing safety | Test |
| SA-07 | **D** | UUV capture abort procedure | Defined SOP, no manual intervention at stern needed [Q] | O20, HC-4 | Drill |
| SA-08 | **D** | Bilge pump | Automatic + manual backup [Q] | Safety | Inspection |
| SA-09 | **D** | Emergency tether cable release | Operable from helm/control station, release in < 30 sec, no stern deck access needed [Q] | QC Flag 07, HC-8, safety | Test |

---

## 8. ERGONOMICS

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| ER-01 | **D** | Winch control position | From wheelhouse or protected station (NOT stern deck) [Q] | O26, HC-4 | Design review |
| ER-02 | **D** | LARS status visible from helm | Direct line of sight or camera feed [Q] | O19 | Design review |
| ER-03 | **W** | Canopy/shelter for helm station | Protection from sun and spray [Q] | Tropical ops | Inspection |
| ER-04 | **W** | UUV loading from mother ship crane | Requires <= 2 crew on tender deck [Q] | O06 | Trial |
| ER-05 | **D** | UUV controller operator position | Sheltered, seated, with clear view of cable/stern [Q] | HC-10, HC-11 | Design review |
| ER-06 | **D** | Controller accessible while seated | Within arm's reach, stable mounting for suitcase [Q] | HC-10 | Design review |

---

## 9. PRODUCTION (Manufacturing)

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| PR-01 | **D** | Hull fabrication | VN aluminum shipyard capable [Q] | Nội địa hóa | Supplier audit |
| PR-02 | **D** | Welding standard | AWS D1.2 or equivalent for marine aluminum [Q] | Structural | Weld inspection |
| PR-03 | **W** | Modular LARS assembly | LARS removable as single module for maintenance [Q] | O24 | Design review |
| PR-04 | **W** | Standard pipe/fitting sizes | Use VN-available metric sizes [Q] | Nội địa hóa | BOM review |

---

## 10. QUALITY CONTROL

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| QC-01 | **D** | Watertight integrity | Pass hydrostatic test per classification rules [Q] | Safety | Test |
| QC-02 | **D** | Winch function test | 10 full-load cycles without failure [Q] | O08, O12 | Test |
| QC-03 | **D** | V-funnel alignment | Centerline deviation <= 5 mm from hull CL [Q] | O14, O17 | Measurement |

---

## 11. ASSEMBLY & TRANSPORT

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| AT-01 | **D** | Vessel transportable by road trailer | LOA <= 8.5 m, beam <= 2.8 m (VN road limit) [Q] | Logistics | Measurement |
| AT-02 | **D** | Vessel launch by standard slipway or crane | Weight full load <= 3,700 kg [Q] | Path 3 analysis | Weigh |

---

## 12. OPERATION

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| OP-01 | **D** | Recovery sea state ceiling | >= Sea State 3 (Hs = 0.5-1.25 m) [Q] | O13, HC-6 | Sea trial |
| OP-02 | **D** | Launch sea state ceiling | >= Sea State 3 [Q] | O10 | Sea trial |
| OP-03 | **D** | Recovery time (UUV surfaced to secured) | <= 30 min [Q] | O18, SC-3 | Timed trial |
| OP-04 | **D** | Launch time (LARS ready to UUV autonomous) | <= 15 min [Q] | O11 | Timed trial |
| OP-05 | **D** | Setup time (tender waterborne to LARS ready) | <= 20 min [Q] | O05 | Timed trial |
| OP-06 | **D** | Capture success rate (first attempt, SS 2) | >= 80% [Q] | O14 | Statistical trial (n>=10) |
| OP-07 | **W** | Capture success rate (first attempt, SS 3) | >= 60% [Q] | O14 | Statistical trial (n>=10) |
| OP-08 | **D** | Number of UUVs per sortie | 1 [Q] | Phase 0 decision | Design review |
| OP-09 | **D** | Crew size for full operation | <= 3 persons [Q] | Path 3 | Trial |
| OP-10 | **W** | Night/low-vis recovery | Capable with tether guidance + lighting [GAP] | O21 | Trial |
| OP-11 | **D** | Towing speed (alongside mother ship) | 5-8 knots [Q] | Path 3 analysis | Sea trial |
| OP-12 | **D** | Self-transit speed (cruise) | >= 15 knots [Q] | Path 3 analysis | Sea trial |
| OP-13 | **W** | Self-transit speed (max) | >= 20 knots [Q] | User confirmed | Sea trial |
| OP-14 | **D** | Continuous operation endurance | >= 5 hours at max speed [Q] | User confirmed | Sea trial |
| OP-15 | **D** | Tether pay-out during launch | Synchronized with UUV descent on ramp [Q] | HC-8, F2 sequence | Trial |
| OP-16 | **D** | Tether reel-in during recovery | Synchronized with LARS winch, no slack buildup [Q] | HC-8, F3 sequence | Trial |
| OP-17 | **D** | Maximum tether operating range | 25 km [Q] | HC-9 | Cable drum capacity |
| OP-18 | **D** | UUV control from vessel | Continuous real-time control via tether throughout mission [Q] | HC-11 | Trial |

---

## 13. MAINTENANCE

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| MA-01 | **D** | LARS inspection interval | Defined in SOP, <= 50 operating hours [Q] | O25, O08 | SOP document |
| MA-02 | **D** | Freshwater washdown capability | After every sea operation [Q] | O23 | SOP + inspection |
| MA-03 | **W** | Specialist tools required | <= 5 non-standard tools [Q] | O24 | Tool list review |
| MA-04 | **D** | Cathodic protection survey | Every 12 months [Q] | O23, corrosion | Inspection |
| MA-05 | **W** | LARS hydraulic/electric components | Standard VN-market available [Q] | Nội địa hóa, O24 | BOM review |
| MA-06 | **D** | Tether cable inspection | Visual + continuity test every 50 operating hours [Q] | HC-8, cable integrity | SOP document |
| MA-07 | **W** | Tether cable replacement | Field-replaceable without specialized equipment [Q] | HC-8, logistics | Trial |

---

## 14. COST

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| C-01 | **D** | Capital cost (prototype) | <= $670K ($517K + 30% contingency) [Q] | Budget | Financial records |
| C-02 | **W** | Capital cost (production unit) | <= $517K [Q] | Budget target | Financial records |
| C-03 | **W** | Annual operating cost | [GAP] — needs lifecycle analysis | Phase 3 | — |

---

## 15. SCHEDULE

| ID | D/W | Requirement | Target Value | Source | Verification |
|----|-----|-------------|-------------|--------|-------------|
| SC-01 | **W** | Design completion (Phase 1-4) | <= 6 months from Gate 1 [Q] | Timeline | Schedule review |
| SC-02 | **W** | Prototype delivery (fabrication + trials) | <= 12 months from Gate 1 [Q] | Timeline | Schedule review |

---

## Quantification Summary

| Category | Total Reqs | Quantified [Q] | Gap [GAP] | Rate |
|----------|-----------|----------------|-----------|------|
| Geometry | 14 | 14 | 0 | 100% |
| Kinematics | 6 | 5 | 1 | 83% |
| Forces | 10 | 8 | 2 | 80% |
| Energy | 6 | 5 | 1 | 83% |
| Material | 5 | 5 | 0 | 100% |
| Signals | 11 | 8 | 2 | 73% |
| Safety | 9 | 9 | 0 | 100% |
| Ergonomics | 6 | 6 | 0 | 100% |
| Production | 4 | 4 | 0 | 100% |
| Quality | 3 | 3 | 0 | 100% |
| Assembly | 2 | 2 | 0 | 100% |
| Operation | 19 | 18 | 1 | 95% |
| Maintenance | 7 | 7 | 0 | 100% |
| Cost | 3 | 2 | 1 | 67% |
| Schedule | 2 | 2 | 0 | 100% |
| **TOTAL** | **107** | **98** | **8** | **92%** |

> Target >= 80% quantified: **PASS (92%)**
> S-03 (USBL) REMOVED — tethered UUV does not need acoustic tracking (1 req removed from original 85)

### Open Gaps (8 items)

| ID | Gap | Resolution Path |
|----|-----|----------------|
| K-03 | Ramp tilt mechanism | Phase 2 concept selection |
| F-06 | Bollard pull | Phase 2-3 hull resistance calculation |
| F-09 | Tether cable tension (operating) | Phase 2 — depends on cable type, depth, current |
| E-05 | UUV controller power spec | From UUV OEM controller datasheet |
| S-04 | Sea state sensor spec | Phase 2 — WISH, lower priority |
| S-05 | IR camera spec | Phase 2 — WISH, lower priority |
| OP-10 | Night recovery capability | Phase 2 — WISH |
| C-03 | Annual operating cost | Phase 3 lifecycle analysis |

---

## ODI Outcome Traceability

| ODI ID | Opp Score | Mapped to Requirement(s) |
|--------|-----------|-------------------------|
| O01 | 13 | OP-05 (setup time) |
| O02 | 17 | S-04 (sea state sensor) |
| O03 | 13 | E-04 (range) |
| O04 | 11 | OP-11, OP-12 (tow/transit speed) |
| O05 | 15 | OP-05 (setup time) |
| O06 | 13 | SA-01, ER-04 (crew size) |
| O07 | 15 | G-08, G-09, K-04 (cradle geometry + traverse) |
| O08 | 17 | QC-02, MA-01, S-07 (reliability + inspection) |
| O09 | 15 | S-04 (sea state sensor) |
| O10 | 17 | G-05, F-03, K-02 (ramp angle + impact + descent speed) |
| O11 | 13 | OP-04 (launch time) |
| O12 | 17 | F-04, QC-02 (clamp force + function test) |
| O13 | 19 | OP-01 (recovery SS ceiling) |
| O14 | 17 | OP-06, OP-07, G-06 (capture rate + funnel width) |
| O15 | 19 | F-03, M-02, G-06, G-07 (impact + UHMWPE + funnel) |
| O16 | 17 | F-07, F-08 (stability during recovery) |
| O17 | 15 | G-06 (funnel width) |
| O18 | 17 | OP-03 (recovery time) |
| O19 | 17 | S-03, ER-02 (USBL + helm visibility) |
| O20 | 15 | SA-07 (abort procedure) |
| O21 | 13 | OP-10, S-05 (night ops + IR camera) |
| O22 | 13 | OP-03 (recovery time includes securing) |
| O23 | 15 | M-01, M-03, M-04, MA-02, MA-04 (materials + maintenance) |
| O24 | 13 | MA-03, MA-05, PR-04 (standard tools + parts) |
| O25 | 15 | MA-01, S-07 (inspection + load monitoring) |
| O26 | 17 | SA-02, ER-01, SA-07 (exposure time + remote control + abort) |
| O27 | 19 | G-01, G-02, AT-01 (LOA + beam + transport) |
| O28 | 19 | AT-02, F-07 (weight + stability) |
| O29 | 17 | G-10, PR-03 (deck space + modular LARS) |

**Coverage:** 29/29 ODI outcomes mapped to >= 1 requirement. No orphan outcomes.

---

*Doc 002 Requirements List v1.0 | VN-XUONG-UUV Phase 1 Task Clarification | COD: Offload*
