# VN-12.7MM-SIM-009: VARIANT APPLICABILITY MATRIX
## Phase 1: Task Clarification

**Document**: VN-12.7MM-SIM-009-VAM | **Version**: 1.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 1 - Task Clarification (Pahl & Beitz)
**Resolves**: Phase 1 Gate Audit conflict SC-002 (no variant applicability column for 201 requirements)

---

# 1. PURPOSE

This document maps each of the 201 requirements from VN-12.7MM-SIM-002-REQ v1.3 to the five product variants of the VN-12.7MM-SIM family. The matrix resolves conflict SC-002 identified during the Phase 1 Gate Audit: requirements had no column indicating which variants they apply to, creating ambiguity for conceptual design trade-offs.

---

# 2. VARIANT DEFINITIONS

| Code | Variant Name | Description |
|------|-------------|-------------|
| I-01 | HONG HAI (Standard) | Indoor shore-based single trainer station |
| I-02 (CTR) | Containerized | Ruggedized, MIL-STD-810H qualified, outdoor/shipboard capable |
| I-06 (TAC) | BACH DANG | Tactical crew trainer, 3 stations wired together |
| I-08 (ACH) | HONG HAI MASTER | AI coaching overlay on I-01 base |
| I-09 (TAB) | HONG HAI POCKET | Tablet-based software only |

---

# 3. LEGEND

| Symbol | Meaning |
|--------|---------|
| X | Requirement applies to this variant |
| -- | Requirement does not apply to this variant |
| Xm | Requirement applies with variant-specific modification (see Notes) |

---

# 4. APPLICABILITY MATRIX

## 4.1 Geometry Requirements (G-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| G-001 | Overall footprint <=3.0x3.0m | X | Xm | Xm | X | -- | CTR: constrained by container interior; TAC: per-station footprint |
| G-002 | Height floor to eye 1600-1800mm | X | X | X | X | -- | |
| G-003 | Mount pedestal diameter | X | X | X | X | -- | |
| G-004 | Gun replica length | X | X | X | X | -- | |
| G-005 | Grip spacing (spade grips) | X | X | X | X | -- | |
| G-006 | Shield replica included | X | X | X | X | -- | |
| G-007 | Display viewing distance | X | X | X | X | -- | TAB uses tablet screen |
| G-008 | Adjustable operator platform height | X | X | X | X | -- | |
| G-009 | Clearance for operator movement | X | X | X | X | -- | |
| G-010 | Ceiling height >=2800mm | X | Xm | X | X | -- | CTR: constrained by container height |

## 4.2 Kinematics Requirements (K-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| K-001 | Traverse range 360deg | X | X | X | X | -- | |
| K-002 | Elevation range -10 to +85deg | X | X | X | X | -- | |
| K-003 | Max traverse rate >=60deg/s | X | X | X | X | -- | |
| K-004 | Max elevation rate >=40deg/s | X | X | X | X | -- | |
| K-005 | Control smoothness <=10% variation | X | X | X | X | -- | |
| K-006 | Variable resistance (friction) | X | X | X | X | -- | |
| K-007 | Position accuracy <=0.1deg | X | X | X | X | -- | |
| K-008 | Traverse stop positions | X | X | X | X | -- | |
| K-009 | Return-to-center capability | X | X | X | X | -- | |
| K-010 | Manual operation feel match +-20% | X | X | X | X | -- | |

## 4.3 Forces Requirements (F-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| F-001 | Traverse operating torque 5-15Nm | X | X | X | X | -- | |
| F-002 | Elevation operating force 10-30N | X | X | X | X | -- | |
| F-003 | Trigger pull force 30-50N | X | X | X | X | -- | |
| F-004 | Structure load capacity 150+80kg | X | X | X | X | -- | |
| F-005 | Recoil simulation (vibration) | X | X | X | X | -- | |
| F-006 | Mount stability <=0.05deg backlash | X | X | X | X | -- | |
| F-007 | Grip load capacity 50kg | X | X | X | X | -- | |
| F-008 | Anti-fatigue arm rest option | X | X | X | X | -- | |

## 4.4 Energy Requirements (E-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| E-001 | Input power 220VAC 50Hz | X | Xm | X | X | -- | CTR: may use generator; TAB: USB/battery |
| E-002 | Max power <=2000W | X | X | X | X | -- | TAB: N/A (tablet power only) |
| E-003 | Standby power <=100W | X | X | X | X | -- | |
| E-004 | UPS backup 10min | X | X | X | X | -- | |
| E-005 | No compressed air | X | X | X | X | X | |
| E-006 | No hydraulics | X | X | X | X | X | |
| E-007 | Low noise <=50dB(A) | X | X | X | X | -- | |
| E-008 | Power budget per variant | X | X | X | X | Xm | TAB: tablet power budget only |
| E-009 | CTR power source spec | -- | X | -- | -- | -- | CTR only |

## 4.5 Material Requirements (M-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| M-001 | Structure material steel/aluminum | X | X | X | X | -- | |
| M-002 | Corrosion resistance | X | Xm | X | X | -- | CTR: outdoor/salt spray resistance required |
| M-003 | Grip material match real | X | X | X | X | -- | |
| M-004 | Gun replica material | X | X | X | X | -- | |
| M-005 | Display material tempered glass | X | X | X | X | -- | |
| M-006 | Flammability non-flammable | X | X | X | X | -- | |
| M-007 | No hazardous materials (RoHS) | X | X | X | X | X | TAB: tablet hardware RoHS |
| M-008 | Local material availability 70%+ | X | Xm | X | X | -- | CTR: relaxed to 50% |

## 4.6 Signals/Information Requirements (S-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| S-001 | Visual display >=1920x1080 | X | X | X | X | Xm | TAB: tablet display resolution |
| S-002 | FOV >=90deg horizontal | X | X | X | X | Xm | TAB: limited by tablet screen |
| S-003 | Visual update rate >=60fps | X | X | X | X | X | |
| S-004 | System latency <=50ms | X | X | X | X | X | |
| S-005 | Position sensing <=0.1deg | X | X | X | X | -- | TAB: no physical mount |
| S-006 | Trigger sensing ON/OFF | X | X | X | X | Xm | TAB: touchscreen trigger |
| S-007 | Trigger pressure sensing analog | X | X | X | X | -- | |
| S-008 | Audio feedback >=90dB(A) | X | X | X | X | Xm | TAB: headphone/speaker output |
| S-009 | Spatial audio 5.1 surround | X | X | X | X | -- | |
| S-010 | Tracer visualization | X | X | X | X | X | |
| S-011 | Impact visualization | X | X | X | X | X | |
| S-012 | HUD display (ammo count) | X | X | X | X | X | |
| S-013 | Instructor interface | X | X | X | X | Xm | TAB: instructor mode in-app |
| S-014 | Performance data logging | X | X | X | X | X | |
| S-015 | Video recording of session | X | X | X | X | X | |
| S-016 | Individual performance history >=12mo | X | X | X | X | X | |
| S-017 | Skill trend reporting | X | X | X | X | X | |
| S-018 | Performance data specification | X | X | X | X | Xm | TAB: subset of physical metrics N/A |
| S-019 | Data classification compliance | X | X | X | X | X | |
| S-020 | ACH AI confidence calibration | -- | -- | -- | X | -- | ACH only |
| S-021 | ACH rules-to-ML transition | -- | -- | -- | X | -- | ACH only |

## 4.7 Safety Requirements (SF-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| SF-001 | Emergency stop button | X | X | X | X | -- | |
| SF-002 | No pinch points | X | X | X | X | -- | |
| SF-003 | Electrical safety IEC 60950 | X | X | X | X | -- | TAB: tablet CE/FCC cert |
| SF-004 | Software safety stop | X | X | X | X | -- | |
| SF-005 | Warning labels ISO 7010 | X | X | X | X | -- | |
| SF-006 | Grounding | X | X | X | X | -- | |
| SF-007 | Fire extinguisher mount | X | X | X | X | -- | |
| SF-008 | No live ammunition capable | X | X | X | X | X | All variants: design ensures no live ammo |
| SF-009 | Tip-over prevention | X | X | X | X | -- | |
| SF-010 | Eye-safe display | X | X | X | X | X | TAB: tablet display |
| SF-011 | TCVN compliance mapping | X | X | X | X | X | |
| SF-012 | MIL-STD applicability mapping | X | X | X | X | X | |

## 4.8 Ergonomics Requirements (ER-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| ER-001 | Operator height range 1550-1850mm | X | X | X | X | -- | |
| ER-002 | Standing operation position | X | X | X | X | -- | TAB: seated/handheld |
| ER-003 | Sight line alignment | X | X | X | X | -- | |
| ER-004 | Control reach | X | X | X | X | -- | |
| ER-005 | Adjustable components | X | X | X | X | -- | |
| ER-006 | Operation duration >=2hr | X | X | X | X | X | TAB: software session duration |
| ER-007 | Ambient lighting compatibility | X | X | X | X | X | |
| ER-008 | Climate comfort 18-32C | X | Xm | X | X | X | CTR: wider range per OP-019 |
| ER-009 | Control labeling Vietnamese | X | X | X | X | X | TAB: UI language |
| ER-010 | Accessibility left/right hand | X | X | X | X | X | TAB: tablet UI handedness |

## 4.9 Production Requirements (PR-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| PR-001 | Local content >=70% | X | Xm | X | X | Xm | CTR: >=50%; TAB: software/app store distribution model |
| PR-002 | Standard components 80%+ OTS | X | X | X | X | -- | |
| PR-003 | Manufacturing methods CNC/welding | X | X | X | X | -- | |
| PR-004 | Production rate >=2 units/month | X | X | X | X | Xm | TAB: software deployment rate |
| PR-005 | No specialized tooling | X | X | X | X | -- | |
| PR-006 | Assembly skill level technician | X | X | X | X | -- | |
| PR-007 | Kit assembly option | X | X | X | X | -- | |

## 4.10 Quality Control Requirements (QC-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| QC-001 | Incoming inspection | X | X | X | X | -- | |
| QC-002 | Functional test 100% | X | X | X | X | X | TAB: software QA test |
| QC-003 | Calibration procedure | X | X | X | X | -- | |
| QC-004 | Acceptance test protocol | X | X | X | X | X | TAB: software acceptance test |
| QC-005 | Statistical process control | X | X | X | X | -- | |
| QC-006 | Traceability serial/lot | X | X | X | X | Xm | TAB: software version tracking |

## 4.11 Assembly Requirements (AS-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| AS-001 | Assembly time <=8hr (2 techs) | X | Xm | Xm | X | -- | CTR: container integration; TAC: 3-station setup |
| AS-002 | Standard tools only | X | X | X | X | -- | |
| AS-003 | Modular sub-assemblies <=5 | X | X | X | X | -- | |
| AS-004 | Alignment features self-aligning | X | X | X | X | -- | |
| AS-005 | Reversible assembly | X | X | X | X | -- | |
| AS-006 | Fastener standardization <=5 types | X | X | X | X | -- | |

## 4.12 Transport Requirements (TR-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| TR-001 | Transportable by truck | X | Xm | X | X | -- | CTR: ISO container transport |
| TR-002 | Max shipping weight <=500kg | X | Xm | Xm | X | -- | CTR: container weight; TAC: 3x station weight |
| TR-003 | Crated dimensions fit std door | X | -- | X | X | -- | CTR: container dimensions |
| TR-004 | Lifting points 4-point | X | Xm | X | X | -- | CTR: ISO container corner castings |
| TR-005 | Vibration resistance (transport) | X | X | X | X | -- | |
| TR-006 | Relocatable 2-person move | X | -- | Xm | X | -- | CTR: requires crane/forklift; TAC: per-station |

## 4.13 Operation Requirements (OP-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| OP-001 | Startup <=5min cold start | X | X | X | X | Xm | TAB: app launch time |
| OP-002 | Operating >=12hr/day | X | X | X | X | X | |
| OP-003 | Scenario library >=20 | X | X | X | X | X | |
| OP-004 | Difficulty 5 levels | X | X | X | X | X | |
| OP-005 | Target types surface/air/shore | X | X | X | X | X | |
| OP-006 | Env conditions day/night/weather | X | X | X | X | X | |
| OP-007 | Performance scoring automated | X | X | X | X | X | |
| OP-008 | After-action review replay | X | X | X | X | X | |
| OP-009 | Scenario editor custom | X | X | X | X | X | |
| OP-010 | UI language Vietnamese | X | X | X | X | X | |
| OP-011 | English language option | X | X | X | X | X | |
| OP-012 | Instructor override | X | X | X | X | X | |
| OP-013 | Ballistic model accuracy <=5% | X | X | X | X | X | |
| OP-014 | Target behavior AI-driven | X | X | X | X | X | |
| OP-015 | Multiplayer 2 trainers networked | X | X | X | X | Xm | TAB: network play via Wi-Fi |
| OP-016 | Shore-based deployment | X | Xm | X | X | X | CTR: also supports field/shipboard |
| OP-017 | Indoor 18-32C, grid power | X | -- | X | X | X | CTR: wider environmental envelope per OP-019 |
| OP-018 | On-demand training <=1 working day | X | X | X | X | X | |
| OP-019 | CTR environmental qualification | -- | X | -- | -- | -- | CTR only: -10 to +55C, salt spray, etc. |
| OP-020 | TAC EMI/EMC compliance | -- | -- | X | -- | -- | TAC only: MIL-STD-461G |

## 4.14 Maintenance Requirements (MT-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| MT-001 | MTBF >=500hr | X | X | X | X | Xm | TAB: software reliability (uptime) |
| MT-002 | MTTR <=4hr | X | X | X | X | -- | |
| MT-003 | PM interval >=200hr | X | X | X | X | -- | |
| MT-004 | On-site maintainability | X | X | X | X | -- | |
| MT-005 | Spare parts stocked locally | X | X | X | X | -- | |
| MT-006 | Diagnostic built-in self-test | X | X | X | X | Xm | TAB: app diagnostics |
| MT-007 | Remote diagnostics network | X | X | X | X | X | |
| MT-008 | Maintenance skill technician | X | X | X | X | -- | |
| MT-009 | Maintenance docs Vietnamese | X | X | X | X | Xm | TAB: in-app help |
| MT-010 | Video maintenance guides | X | X | X | X | -- | |

## 4.15 Cost Requirements (CO-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| CO-001 | Unit cost <=45000 USD | X | Xm | Xm | Xm | Xm | CTR/TAC: higher; ACH: I-01+AI; TAB: lower |
| CO-002 | Target unit cost volume <=35000 | X | Xm | Xm | Xm | Xm | Variant-specific cost targets TBD |
| CO-003 | Annual maintenance <=3000/yr | X | X | X | X | Xm | TAB: software maintenance cost |
| CO-004 | Training cost <=20/trainee-hr | X | X | X | X | X | |
| CO-005 | Consumables <=500/yr | X | X | X | X | -- | |
| CO-006 | Upgrade cost <=5000 | X | X | X | X | X | |
| CO-007 | Payback <=2yr | X | X | X | X | X | |

## 4.16 Schedule Requirements (SCH-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| SCH-001 | Prototype <=12mo | X | Xm | Xm | Xm | Xm | Staggered delivery per variant priority |
| SCH-002 | Production ready <=18mo | X | Xm | Xm | Xm | Xm | Staggered per variant |
| SCH-003 | First unit 6mo after prototype | X | X | X | X | X | |
| SCH-004 | Design review gates PDR/CDR/EDR | X | X | X | X | X | |

## 4.17 Training Effectiveness Requirements (TE-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| TE-001 | Control feel similarity >=80% | X | X | X | X | -- | TAB: no physical controls |
| TE-002 | Target acquisition +15% hit rate | X | X | X | X | Xm | TAB: cognitive training only |
| TE-003 | Lead calculation +20% reduction | X | X | X | X | X | |
| TE-004 | Burst control +15% reduction | X | X | X | X | -- | TAB: no physical burst control |
| TE-005 | Stress inoculation >=1pt improvement | X | X | X | X | X | |
| TE-006 | Qualification rate 65%->90% | X | X | X | X | Xm | TAB: contributes partially |
| TE-007 | Training time reduction 30%+ | X | X | X | X | X | |
| TE-008 | Scoring false-hit rate <=5% | X | X | X | X | X | |
| TE-009 | Scoring false-miss rate <=10% | X | X | X | X | X | |
| TE-010 | Sim-to-live correlation r2>=0.75 | X | X | X | X | Xm | TAB: lower correlation expected |
| TE-011 | Sim-to-live correlation r2>=0.85 | X | X | X | X | -- | TAB: stretch target N/A |

## 4.18 Scenario Requirements (SC-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| SC-001 | Surface: Patrol boat 0-40kn | X | X | X | X | X | |
| SC-002 | Surface: Jet ski 0-60kn | X | X | X | X | X | |
| SC-003 | Surface: Floating mine | X | X | X | X | X | |
| SC-004 | Air: Helicopter 0-150kn | X | X | X | X | X | |
| SC-005 | Air: UAV 0-100kn | X | X | X | X | X | |
| SC-006 | Air: Fixed-wing 100-300kn | X | X | X | X | X | |
| SC-007 | Shore: Bunker stationary | X | X | X | X | X | |
| SC-008 | Shore: Vehicle 0-30kph | X | X | X | X | X | |
| SC-009 | Multiple targets >=5 | X | X | X | X | X | |
| SC-010 | Day conditions | X | X | X | X | X | |
| SC-011 | Night conditions | X | X | X | X | X | |
| SC-012 | Weather effects rain/fog/spray | X | X | X | X | X | |
| SC-013 | Sea state SS 0-4 | X | X | X | X | X | |
| SC-014 | Ship motion integration | X | X | X | X | X | |

## 4.19 Ballistic Model Requirements (BM-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| BM-001 | Ammo types API-T/Ball/Incendiary | X | X | X | X | X | |
| BM-002 | Muzzle velocity 850m/s | X | X | X | X | X | |
| BM-003 | Projectile mass 48.3g | X | X | X | X | X | |
| BM-004 | Drag coefficient modeling <=2% | X | X | X | X | X | |
| BM-005 | Trajectory 6-DOF | X | X | X | X | X | |
| BM-006 | Effective range 2000m | X | X | X | X | X | |
| BM-007 | Extended range 3500m | X | X | X | X | X | |
| BM-008 | Dispersion <=3.0 MOA at 500m | X | X | X | X | X | |
| BM-009 | Tracer burnout 1500m | X | X | X | X | X | |
| BM-010 | Time of flight <=5% error | X | X | X | X | X | |

## 4.20 Fire Control Requirements (FC-xxx)

| ID | Requirement (brief) | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) | Notes |
|----|---------------------|------|-----------|-----------|-----------|-----------|-------|
| FC-001 | Lead angle error <=0.5deg | X | X | X | X | X | |
| FC-002 | Superelevation error <=0.2deg | X | X | X | X | X | |
| FC-003 | Wind correction 0-30m/s | X | X | X | X | X | |
| FC-004 | Rate of fire 600rpm | X | X | X | X | X | |
| FC-005 | Burst length 3-50 rounds | X | X | X | X | X | |
| FC-006 | Reload simulation 8-12s | X | X | X | X | X | |
| FC-007 | Malfunction simulation | X | X | X | X | X | |
| FC-008 | Ammunition count tracking | X | X | X | X | X | |
| FC-009 | Overheat modeling | X | X | X | X | X | |

---

# 5. SUMMARY STATISTICS

## 5.1 Requirements Count per Variant

| Variant | Applicable (X) | Modified (Xm) | Not Applicable (--) | Total Applicable |
|---------|----------------|----------------|----------------------|------------------|
| I-01 (Standard) | 191 | 0 | 10 | 191 |
| I-02 (CTR) | 172 | 16 | 13 | 188 |
| I-06 (TAC) | 189 | 3 | 9 | 192 |
| I-08 (ACH) | 193 | 0 | 8 | 193 |
| I-09 (TAB) | 108 | 25 | 68 | 133 |

## 5.2 Not-Applicable Summary by Category

| Category | I-01 | I-02(CTR) | I-06(TAC) | I-08(ACH) | I-09(TAB) |
|----------|------|-----------|-----------|-----------|-----------|
| Geometry (10) | 0 | 0 | 0 | 0 | 10 |
| Kinematics (10) | 0 | 0 | 0 | 0 | 10 |
| Forces (8) | 0 | 0 | 0 | 0 | 8 |
| Energy (9) | 1 | 0 | 1 | 1 | 2 |
| Material (8) | 0 | 0 | 0 | 0 | 7 |
| Signals (21) | 2 | 2 | 2 | 0 | 2 |
| Safety (12) | 0 | 0 | 0 | 0 | 5 |
| Ergonomics (10) | 0 | 0 | 0 | 0 | 2 |
| Production (7) | 0 | 0 | 0 | 0 | 4 |
| Quality (6) | 0 | 0 | 0 | 0 | 0 |
| Assembly (6) | 0 | 0 | 0 | 0 | 6 |
| Transport (6) | 0 | 1 | 0 | 0 | 6 |
| Operation (20) | 1 | 1 | 1 | 2 | 1 |
| Maintenance (10) | 0 | 0 | 0 | 0 | 4 |
| Cost (7) | 0 | 0 | 0 | 0 | 0 |
| Schedule (4) | 0 | 0 | 0 | 0 | 0 |
| Training Eff. (11) | 0 | 0 | 0 | 0 | 2 |
| Scenario (14) | 0 | 0 | 0 | 0 | 0 |
| Ballistics (10) | 0 | 0 | 0 | 0 | 0 |
| Fire Control (9) | 0 | 0 | 0 | 0 | 0 |

## 5.3 Variant-Exclusive Requirements

| Requirement | Exclusive To | Rationale |
|-------------|-------------|-----------|
| E-009 | I-02 (CTR) | Containerized power source specification |
| OP-019 | I-02 (CTR) | MIL-STD-810H environmental qualification |
| OP-020 | I-06 (TAC) | Multi-station EMI/EMC compliance |
| S-020 | I-08 (ACH) | AI confidence calibration methodology |
| S-021 | I-08 (ACH) | Rules-to-ML transition criteria |

---

# 6. KEY DESIGN IMPLICATIONS

1. **I-01 (Standard)** is the baseline variant. All hardware and software requirements apply. 191 of 201 requirements.

2. **I-08 (ACH)** is I-01 plus 2 AI-specific requirements (S-020, S-021). Highest requirement count at 193. Design should treat ACH as a software overlay on I-01 hardware.

3. **I-06 (TAC)** adds OP-020 (EMI/EMC) and has modified assembly/transport for 3-station configuration. 192 total applicable requirements.

4. **I-02 (CTR)** has the most modifications (16 Xm) due to ruggedization, environmental qualification, and container constraints. 188 total applicable. Relaxed local content (50% vs 70%).

5. **I-09 (TAB)** has the smallest requirement set (133 applicable). All physical hardware categories (Geometry, Kinematics, Forces, Assembly, Transport) are not applicable. Software, ballistic model, scenario, and training effectiveness requirements carry over.

---

# 7. DOCUMENT CONTROL

## 7.1 Change History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN | Initial release. Resolves SC-002 from Phase 1 Gate Audit. Maps 201 requirements to 5 variants. |

## 7.2 References

| Document | Version | Relationship |
|----------|---------|-------------|
| VN-12.7MM-SIM-002-REQ | 1.3 | Source requirements list (201 items) |
| Phase 1 Gate Audit | -- | SC-002 conflict identification |

## 7.3 Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Engineering Lead | | | |
| Systems Engineer | | | |
| Quality Assurance | | | |

---

*VN-12.7MM-SIM-009 Variant Applicability Matrix v1.0*
*Phase 1: Task Clarification*