---
project: V-SMASH-M
phase: 3
type: test-requirements
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Material_Selection_v1.0.md, V-SMASH-M_DfX_Analysis_v1.0.md, V-SMASH-M_FMEA_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — Test Requirements Derived from Design

> **Purpose:** Map design requirements and FMEA mitigations to specific test methods with acceptance criteria. Extracted from P27 Gate Review §D for standalone use in Phase 4 verification planning.

---

## Test Matrix

| # | Test | Standard/Method | Acceptance Criteria | Phase | Derived From |
|---|------|----------------|---------------------|-------|-------------|
| T01 | Shock (recoil) | MIL-STD-810H 516.8, Procedure I | Function after 500× 10,000G half-sine 0.5ms. Optical alignment ≤0.5 mrad drift. Zero solder cracks (X-ray sample). | Phase 4 Qualification | VM-F01, VM-F03 |
| T02 | Drop | MIL-STD-810H 516.8, Procedure IV | Function after 1.5m drop onto concrete, 26 faces. No housing crack. IP67 maintained. | Phase 4 Qualification | VM-F02 |
| T03 | Temperature operation | MIL-STD-810H 501.7/502.7 | Function at -10°C (≥5h battery, VM-E06) and +55°C (thermal throttle activates, Tj ≤95°C). | Phase 4 Qualification | VM-M05, VM-E06 |
| T04 | Humidity | MIL-STD-810H 507.6 | 10 cycles 95% RH at 40°C. Function maintained. No internal corrosion (open housing, inspect). | Phase 4 Qualification | VM-O04 |
| T05 | IP67 immersion | IEC 60529 | 1m depth, 30 min. No water ingress (mass change <0.1g). | Phase 4 Qualification | VM-O04 |
| T06 | IP67 post-shock | IEC 60529 after T01 | IP67 retest after 500-round shock sequence. Seal integrity maintained. | Phase 4 Qualification | DfCorr action |
| T07 | EMC immunity | IEC 61000-4-3 | Function at 3 V/m, 80 MHz–2.7 GHz. No false indicators, no resets. | Phase 4 EMC Lab | VM-O10 |
| T08 | EMC emissions | CISPR 32 Class B | Radiated emissions below Class B limits. | Phase 4 EMC Lab | VM-O11 |
| T09 | AI detection performance | Custom field test | ≥90% detection of medium drone at 150m (VM-S01). ≤2% FPR (VM-Y04). Test with ≥100 passes. | Phase 4 Field Test | VM-S01, VM-Y04 |
| T10 | Lead accuracy | Custom bench test | ≤1.0 mrad total accuracy (VM-S06) at 100m range. Test with calibrated target on drone sled. | Phase 4 Field Test | VM-S06 |
| T11 | Battery life | Custom bench test | ≥8h at 25°C continuous (VM-E02). ≥5h at -10°C (VM-E06). Measure actual power draw. | Phase 4 Bench Test | VM-E02, VM-E06 |
| T12 | EOL production test | PR-10 jig | Power-on + AI detect (test pattern) + OLED indicator + BLE handshake + thermal sensor read. Pass/fail per VM-Q01. | Production (every unit) | VM-Q01 |
| T13 | Bore-sight verification | PR-11 jig procedure | ≤0.2 mrad sensor-to-OLED alignment. Checked at factory and at L2 depot (every 500 rounds). | Production + L2 Depot | VM-S06 |
| T14 | Burn-in | Custom | 24h power-on at 55°C. No faults, no degradation. Screens infant mortality. | Production (every unit) | DfR action |

---

## Summary by Test Category

| Category | Tests | Count |
|----------|-------|-------|
| Environmental (MIL-STD-810H) | T01, T02, T03, T04 | 4 |
| Sealing (IEC 60529) | T05, T06 | 2 |
| EMC (IEC 61000 / CISPR 32) | T07, T08 | 2 |
| Functional performance | T09, T10, T11 | 3 |
| Production screening | T12, T13, T14 | 3 |
| **Total** | | **14** |

---

## Test Phases

| Phase | Tests | Samples | Notes |
|-------|-------|---------|-------|
| Phase 4 Qualification | T01-T08 | 3-5 units (destructive subset) | External lab for MIL-STD-810H + EMC |
| Phase 4 Field Test | T09, T10 | 2+ units | Requires drone sled or live drone flights |
| Phase 4 Bench Test | T11 | 3 units | Temperature-controlled chamber |
| Production (every unit) | T12, T14 | 100% | PR-10 jig + burn-in rack |
| Production (every unit) | T13 | 100% | PR-11 jig at factory; repeat at L2 depot |

---

## FMEA Traceability

| Test | Validates Mitigation For |
|------|------------------------|
| T01 | F03 (lens misalignment), F18 (clamp loosening), F19 (bench fatigue), F22 (contact fatigue) |
| T02 | F17 (housing crack) |
| T03 | F05 (thermal shutdown), F20 (battery depletion at cold) |
| T04 | F16 (seal failure) |
| T05, T06 | F16 (seal failure — pre/post shock) |
| T07, T08 | F13 (BLE interference) |
| T09 | F06 (misclassification), F07 (missed detection) |
| T10 | F03 (alignment), F08 (wrong lead), F11 (OLED alignment) |
| T11 | F20 (battery depletion) |
| T12 | F01 (sensor failure), F04 (SoC hang), F09 (OLED failure), F12 (regulator failure) |
| T13 | F03 (alignment), F11 (OLED alignment) |
| T14 | F01 (infant mortality), F04 (firmware bug), F12 (regulator defect) |
