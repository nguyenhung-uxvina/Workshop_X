---
project: V-SMASH-M
phase: 4
type: vnv-master-plan
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
inputs:
  - V-SMASH-M_Verification_Plan_v1.0.md (78 requirements, methods A/I/T/D)
  - V-SMASH-M_Test_Requirements_v1.0.md (T01-T14)
  - V-SMASH-SW-INT_Integration_Test_Plan_v1.0.md (9 SW ICD boundaries)
  - V-SMASH-M_System_Architecture_v1.0.md
  - V-SMASH-M_System_ICD_v1.0.md (22 HW interfaces)
  - V-SMASH-SW-ICD_v1.0.md (9 SW interface boundaries)
  - IRONMESH_S5_TCVN_Compliance_Matrix_v1.0.md
---

# V-SMASH-M (Micro-Sight) — Verification & Validation Master Plan v1.0

**Version 1.0 | 2026-03-02**
**Status: Draft — Pending QC Gate review**

---

## 1. Purpose and Scope

### 1.1 Purpose

This document is the top-level V&V planning document for V-SMASH-M. It defines the overall strategy, hierarchy, document map, test environments, configuration management rules, and acceptance criteria spanning all six test levels from SW unit test to site acceptance.

All subordinate V&V documents (module test plans, FAT/HAT/SAT procedures) derive from this plan. Any conflict between a subordinate document and this plan shall be resolved in favor of this plan.

### 1.2 Scope

| In Scope | Out of Scope |
|----------|-------------|
| SW module unit testing (4 modules) | AI model training and dataset curation |
| SW integration testing | Production process qualification |
| HW-SW integration testing | Supply chain and component qualification |
| Environmental qualification (T01–T14) | Host weapon system integration testing |
| EMC/EMI qualification | Long-term field reliability (MTBF validation) |
| Factory Acceptance Test (FAT) | BLE interoperability (Bluetooth SIG) |
| Hardware Acceptance Test (HAT) | |
| Site Acceptance Test (SAT) | |

### 1.3 Product Identification

| Item | Value |
|------|-------|
| Product name | V-SMASH-M (Micro-Sight) |
| Configuration | Jetson Orin Nano 8GB + OV9281 + SSD1331 OLED + nRF52840 |
| Intended use | Counter-UAS engagement aid — small arms (7.62mm–12.7mm) |
| Standards basis | MIL-STD + TCVN (Vietnamese military procurement hybrid) |
| Qualification authority | Cục Kỹ thuật / Bộ Quốc phòng |

### 1.4 Applicable Documents

| Ref-ID | Document | Version |
|--------|----------|---------|
| VP-01 | V-SMASH-M_Verification_Plan_v1.0.md | 1.0 |
| TR-01 | V-SMASH-M_Test_Requirements_v1.0.md | 1.0 |
| ITP-01 | V-SMASH-SW-INT_Integration_Test_Plan_v1.0.md | 1.0 |
| MTP-01 | V-SMASH-SW_Module_Test_Plans_v1.0.md | 1.0 |
| ICD-HW | V-SMASH-M_System_ICD_v1.0.md | 1.0 |
| ICD-SW | V-SMASH-SW-ICD_v1.0.md | 1.0 |
| ARCH-01 | V-SMASH-M_System_Architecture_v1.0.md | 1.0 |
| FMEA-01 | V-SMASH-M_FMEA_v1.0.md | 1.0 |
| SCM-01 | V-SMASH-M_Standards_Compliance_Matrix_v1.0.md | 1.0 |
| FAT-01 | V-SMASH-M_FAT_Procedure_v1.0.md | 1.0 |
| HAT-01 | V-SMASH-M_HAT_Procedure_v1.0.md | 1.0 |
| SAT-01 | V-SMASH-M_SAT_Procedure_v1.0.md | 1.0 |

---

## 2. V&V Hierarchy

```
LEVEL 6: SAT — Site Acceptance Test (tại đơn vị sử dụng)
  ↑  Entry: HAT passed. Unit commander present. Operators trained.
LEVEL 5: HAT — Hardware Acceptance Test (tại kho / điểm giao hàng)
  ↑  Entry: FAT passed. Documentation package complete. Transport complete.
LEVEL 4: FAT — Factory Acceptance Test (tại Workshop X)
  ↑  Entry: L3 qualification complete. All T01–T14 reports issued.
LEVEL 3: SYSTEM QUALIFICATION — Environmental, EMC, Performance (T01–T14)
  ↑  Entry: L2 HW-SW integration passed. SW baseline frozen.
LEVEL 2: HW-SW INTEGRATION — Full pipeline on target hardware (ENV-FULL)
  ↑  Entry: L1b SW integration passed. Production prototype available.
LEVEL 1b: SW INTEGRATION — Interface contracts + E2E pipeline (ENV-SIM/GPU/BLE)
  ↑  Entry: L1a unit tests passed. ICD frozen.
LEVEL 1a: SW UNIT TESTS — Per-module (SW-FW, SW-AI, SW-BAL, SW-COM)
  Entry: Module implementation complete.
```

### 2.1 Level Summary

| Level | Governing Document | Coverage | Gate Authority |
|-------|--------------------|----------|----------------|
| L1a: SW Unit | MTP-01 (§2–§5) | Critical + functional per SRS | SW Lead |
| L1b: SW Integration | ITP-01 | 9 ICD boundaries, E2E pipeline | SW Lead |
| L2: HW-SW Integration | This plan §6 | 7 integration scenarios on real HW | HW+SW Lead |
| L3: System Qualification | VP-01 + TR-01 | 78 HW requirements, T01–T14 | KN (Chief Engineer) |
| L4: FAT | FAT-01 | Production unit acceptance | KN + Customer Rep |
| L5: HAT | HAT-01 | Delivery inspection + functional verify | Customer Kỹ thuật |
| L6: SAT | SAT-01 | Operational acceptance | Customer Commander |

---

## 3. Requirements Traceability Summary

### 3.1 Hardware Requirements (ref: VP-01)

| Category | Count | Verification Methods | Primary Level |
|----------|-------|---------------------|---------------|
| Geometry (VM-G) | 5 | 4×I, 1×D | L3 + FAT |
| Kinematics (VM-K) | 2 | 2×T | L3 Field |
| Forces (VM-F) | 3 | 3×T (MIL-STD-810H) | L3 External Lab |
| Energy (VM-E) | 7 | 2×A, 5×T | L3 Bench |
| Material (VM-M) | 5 | 3×I, 2×T | L3 |
| Safety (VM-Y) | 4 | 2×T, 2×D **[SAFETY-CRITICAL]** | L3 + L6 SAT |
| Signals (VM-S) | 3 | 3×T | L3 Field |
| Operator UX (VM-O) | 11 | 4×T, 4×I, 2×A, 1×D | L3 + FAT |
| Quality/Production (VM-Q) | 4 | 4×T | FAT + Production |
| Maintenance (VM-N) | 4 | 2×I, 1×T, 1×D | FAT + L5 HAT |
| **Total** | **78** | 29T, 17I, 12D, 7A, 13 multi | All levels |

**Safety-critical rule:** VM-Y01–VM-Y04 must be verified at both L3 (test) AND re-confirmed at L6 (SAT operational test). Single-level verification is not sufficient for [SAFETY-CRITICAL] requirements.

### 3.2 Software Requirements (ref: 4× SRS + ICD-SW)

| Module | SRS Count | L1a Unit | L1b Integration | L2 HW-SW |
|--------|-----------|----------|----------------|---------|
| SW-FW | ~25 | All: HAL, FSM, WDG, THERM, T1/T2 | ICD-01, 02, 03, 06 | Full pipeline |
| SW-AI | ~20 | Detection, gate logic, latency | ICD-04, 01 input | Inference timing |
| SW-BAL | ~18 | Ballistic accuracy, error budget | ICD-04, 05 | Lead angle accuracy |
| SW-COM | ~22 | SPI driver, GATT, logger, health | ICD-07, 08, 09 | BLE data rate |
| **Total** | **~85** | 100% critical (safety A/B/C) | 9 ICD boundaries | 7 L2 scenarios |

---

## 4. Test Environments

### 4.1 Software Environments

| Env | Hardware | Purpose | Level |
|-----|----------|---------|-------|
| ENV-SIM | x86 workstation (Linux) | SW unit tests, interface stubs, CI/CD | L1a, L1b |
| ENV-GPU | Jetson devkit OR x86+CUDA GPU | AI inference timing (TensorRT on target) | L1b |
| ENV-BLE | Jetson devkit + nRF52840-DK | SPI + BLE stack integration | L1b |
| ENV-FULL | Jetson Orin Nano + nRF52840 + OV9281 + SSD1331 | Full pipeline, HW-SW integration | L2 |

### 4.2 Hardware / Environmental Environments

| Env | Equipment | Tests | Level |
|-----|-----------|-------|-------|
| ENV-BENCH | Workshop X bench: calipers, scale, torque wrench, bore-sight jig PR-11 | VM-G01–G05, VM-F03, T13 | L3 + FAT |
| ENV-SHOCK | Accredited shock/vibration table | T01 (10,000G), T02 (drop 1.5m) | L3 External Lab |
| ENV-CHAMBER | Temp/humidity chamber: −20°C to +70°C, 10–95% RH | T03, T04, T11 (battery) | L3 External Lab |
| ENV-IP | Water immersion tank (min 1.2m) | T05, T06 (IP67) | L3 |
| ENV-EMC | Accredited EMC anechoic chamber (CISPR, IEC) | T07 (immunity), T08 (emissions) | L3 External Lab |
| ENV-FIELD | Drone range / military test range | T09 (detection ≥90%), T10 (lead ≤1.0 mrad) | L3 + SAT |
| ENV-PROD | Production line with PR-10 EOL jig + PR-11 bore-sight jig | T12, T13, T14 | Production |

### 4.3 Test Hardware Configuration Baseline

The following hardware configuration shall be locked before L3 begins. Any deviation requires formal change request.

| CI-ID | Item | Specification | Lock Point |
|-------|------|--------------|------------|
| CI-HW-01 | SoC module | Jetson Orin Nano 8GB production (non-devkit) | L3 start |
| CI-HW-02 | Camera sensor | OV9281 with production lens assembly, calibrated | L3 start |
| CI-HW-03 | Display | SSD1331 OLED, production bracket + AR coating | L3 start |
| CI-HW-04 | RF module | nRF52840 (nRF9160 fallback) with production antenna | L3 start |
| CI-HW-05 | Battery | VM-6101 (21700 5000 mAh, ≥2A CDR, UN38.3 certified) | L3 start |
| CI-HW-06 | Housing | PA6-GF30 production mold, MIL-A-8625 Type III rail | L3 start |

---

## 5. Software Configuration Management

### 5.1 SW Release Baseline

| SW-ID | Module | Tag | Build Hash | Frozen At |
|-------|--------|-----|------------|-----------|
| SW-001 | SW-FW (Firmware stack) | v1.0.0 | TBD | L3 start |
| SW-002 | SW-AI (Inference + Gate) | v1.0.0 | TBD | L3 start |
| SW-003 | SW-AI model weights | model-v1.0 + dataset-v1.0 | TBD | L3 start |
| SW-004 | SW-BAL (Ballistic) | v1.0.0 | TBD | L3 start |
| SW-005 | SW-COM (Communications) | v1.0.0 | TBD | L3 start |
| SW-006 | nRF52840 firmware | v1.0.0 | TBD | L3 start |

### 5.2 SW Change Control Rule

- SW baseline frozen before L3 qualification begins.
- Any SW change after freeze requires: (1) defect report filed, (2) change impact analysis, (3) re-run of all affected test cases, (4) KN sign-off.
- SW changes during L3 restart qualification from the affected test level.
- SW changes during FAT or later require customer notification and joint decision on re-test scope.

---

## 6. HW-SW Integration Test (Level 2)

Level 2 tests are executed on ENV-FULL after L1b SW integration passes. No separate document — these test cases are owned by this plan.

### 6.1 L2 Test Cases

| TC-ID | Test Name | Pass Criteria | HW Required | Safety Class |
|-------|-----------|--------------|-------------|-------------|
| L2-01 | Full pipeline end-to-end | Detect simulated drone target → BAL output → OLED overlay displayed. Pipeline latency ≤150ms (end-to-end, measured by timestamp). | ENV-FULL | B |
| L2-02 | FSM all-states traversal | All 10 FSM states reachable. State transitions complete within ≤500ms (commanded input → new state). State machine recovers from all fault states. | ENV-FULL | B |
| L2-03 | Watchdog cascade — kill AI | Kill SW-AI process → WDG timeout fires in ≤2s → FSM transitions to FAULT → OLED shows MANUAL indicator. System recoverable: restart SW-AI → return to STANDBY. | ENV-FULL | B |
| L2-04 | Thermal throttling | Force Tj = 87°C on Jetson (heater or synthetic load — 2°C above throttle trigger of 85°C, well below shutdown at 101°C) → AI frame rate drops from 30 Hz to 10 Hz → OLED thermal warning visible. On cooling (Tj < 80°C) → frame rate restored automatically. | ENV-FULL + heat source | B |
| L2-05 | BLE engagement log delivery | Execute simulated engagement cycle → engagement_log_record_t written to eMMC → COM module transmits via BLE → phone app receives record within 5s. All 11 GATT characteristics readable. | ENV-FULL + phone | A |
| L2-06 | Low battery behavior | PSU simulate battery at 10% SoC (3.3V) → OLED low-battery indicator activates → BLE health_telemetry_t shows `battery_pct = 10`. No brownout reset. System continues operation. | ENV-FULL + programmable PSU | A |
| L2-07 | Cold boot to ready | Power-on from cold start → all modules initialized → FSM in STANDBY state → OLED displays startup screen: ≤30s elapsed. Clean shutdown: power-off command → all eMMC writes flushed → graceful halt (verify: no filesystem corruption on next boot). | ENV-FULL | B |

### 6.2 L2 Entry and Exit Criteria

| Gate | Criteria |
|------|----------|
| **Entry** | L1b integration tests: all CRITICAL pass. SW baseline frozen (§5.1). ENV-FULL hardware assembled and verified functional. ICD-HW configuration baseline locked (§4.3). |
| **Exit** | All 7 L2 test cases pass. No open CRITICAL defects. Pipeline latency ≤150ms verified by measurement on production SoC (not devkit). |

---

## 7. Test Schedule and Milestones

| Milestone | Level | Duration | Predecessor | Status |
|-----------|-------|----------|-------------|--------|
| M1 | SW unit: SW-AI + SW-BAL | 2 weeks | SW-Phase 3 start | Open |
| M2 | SW unit: SW-FW + SW-COM | 2 weeks | SW-Phase 3 (parallel M1) | Open |
| M3 | SW integration (ENV-SIM) | 1 week | M1, M2 complete | Open |
| M4 | GPU + BLE integration (ENV-GPU/BLE) | 1 week | M3 | Open |
| **M5** | **HW-SW integration (ENV-FULL)** | **1 week** | M4 + HW prototype available | **Blocked: Jetson Orin Nano** |
| M6 | System qualification (T01–T14) | 4 weeks | M5 + lab booked | Open — long lead |
| M7 | Factory Acceptance Test | 1 week | M6 + docs package | Open |
| M8 | Hardware Acceptance Test (delivery) | 1 day | M7 + shipment | Open |
| M9 | Site Acceptance Test | 2 days | M8 + operator training | Open |

**Critical path:** M1/M2 → M3 → M4 → M5 → M6 → M7 → M8 → M9

**Longest lead item:** External lab for MIL-STD-810H shock + EMC (4 weeks test time, 8-week booking lead). Schedule lab booking before M5 begins.

---

## 8. Overall System Acceptance Criteria

V-SMASH-M is accepted for delivery when **all** of the following conditions are simultaneously met:

| Criterion | Standard | Evidence Document |
|-----------|----------|-------------------|
| 78/78 HW requirements verified | As defined in VP-01 | VP-01 with all method columns completed |
| ~85 SW requirements verified | As defined in MTP-01 + ITP-01 | Module test reports, integration test report |
| VM-Y01–VM-Y04 safety-critical: verified by T or D | T or D only (not A) | Test reports (L3) + SAT record (L6) |
| **VM-Y04 AI False Positive Rate: ≤2% at 150m** | **[SAFETY-CRITICAL] T09 — ≥100 passes, field conditions, dual-signature (WX + Customer)** | **T09 test report with statistical analysis** |
| T01–T14 system tests: all pass | MIL-STD-810H, IEC 60529, IEC 61000, CISPR 32 | Accredited lab certificates |
| SW baseline: tagged, hash-verified | §5.1 | Build manifest |
| FAT: all mandatory tests pass | FAT-01 | FAT sign-off record |
| HAT: delivery inspection pass | HAT-01 | HAT sign-off record |
| SAT: operational test pass | SAT-01 | SAT acceptance certificate |
| B-series documentation: complete | B1–B6 delivered | Delivery package checklist |

**Non-negotiable:** Any single [SAFETY-CRITICAL] requirement (VM-Y01–VM-Y04) failing at any level automatically blocks delivery regardless of overall test status.

---

## 9. V&V Metrics and Quality Indicators

| Metric | Target | Measured At |
|--------|--------|-------------|
| SW unit test coverage (line) | ≥80% for safety class B/C modules | L1a exit |
| SW unit test coverage (branch) | ≥70% for safety class B/C modules | L1a exit |
| L1b integration: critical test pass rate | 100% | L1b exit |
| L1b integration: important test pass rate | ≥90% | L1b exit |
| L3 first-pass qualification success | ≥12/14 tests pass on first run | L3 run |
| FAT defect closure rate | 100% CAT-1 defects closed | FAT exit |
| Defect escape rate (L→L+1) | 0 CRITICAL defects escape to next level | Each level exit |

---

## 10. Roles and Responsibilities

| Role | Responsibility | Signature Authority |
|------|---------------|---------------------|
| KN (Chief Engineer) | Master plan ownership, L3 gate, FAT sign-off | System acceptance |
| SW Lead | L1a, L1b execution, sign-off | SW level acceptance |
| HW Lead | L2, L3 execution, configuration | HW level acceptance |
| External Test Lab | T01–T08 (environmental, EMC) | Qualified test reports |
| Quality (QA) | Defect tracking, test independence (§6.2 ITP-01) | Quality certification |
| Customer Kỹ thuật | HAT inspection | Delivery acceptance |
| Customer Commander | SAT final | Operational acceptance |

---

## 11. Open Issues

| OI-ID | Issue | Impact | Action |
|-------|-------|--------|--------|
| OI-VnV-01 | Jetson Orin Nano production unit not available | Blocks L2, M5, ENV-FULL | Hardware procurement critical path — ETA TBD |
| OI-VnV-02 | External lab (MIL-STD-810H + EMC) not yet selected | Blocks M6 | Book lab ≥8 weeks before M5 exit |
| OI-VnV-03 | Military test range access for T09, T10 | Blocks field testing (drone detection, lead accuracy) | Coordinate with QĐND range authority. **T09 (VM-Y04 safety-critical FPR test) requires Customer Kỹ thuật co-witness. T09 test report requires dual signature: WX HW Lead + Customer Kỹ thuật.** |
| OI-VnV-04 | Inrush ESR mismatch (flagged S58) | May cause T11 battery life fail | Validate Jetson direct 3.7V input option before L3 |
| OI-VnV-05 | OLED SPI vs MIPI DSI selection (flagged Phase 4 OI-01) | Affects L2 display test + FAT | Resolve in SW-FW Phase 3 |

---

*V-SMASH-M VnV Master Plan v1.0 — 2026-03-02*
*6 test levels: SW unit → SW integration → HW-SW integration → System qual → FAT → HAT → SAT*
*Synthesizes 49 hardware artifacts + 4 SW sub-projects. 78 HW reqs + ~85 SW reqs in scope.*
*Critical path bottleneck: External lab booking (8-week lead). Book before M5 exit.*
