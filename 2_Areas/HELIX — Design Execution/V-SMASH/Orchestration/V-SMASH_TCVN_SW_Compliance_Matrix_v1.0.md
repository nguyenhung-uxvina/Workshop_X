---
project: V-SMASH
type: compliance-matrix
version: 1.0
created: 2026-02-24
status: draft
scope: All SW sub-projects (SW-FW, SW-AI, SW-BAL, SW-COM)
origin: QC Gate batch SG-1 — 4/4 proposals FLAG on Check 03 (TCVN/Regulatory)
---

# V-SMASH — TCVN / Standards Compliance Matrix for Software

**Purpose:** Single-source compliance mapping referenced by all 4 SW sub-project proposals and SRS documents. Eliminates systemic Check 03 FLAG by providing specific clause references.

---

## 1. Applicable Standards

### 1.1 Vietnamese National Standards (TCVN)

| Standard | Title | Applies To | SW Modules Affected |
|----------|-------|-----------|-------------------|
| TCVN 7699-2-1:2007 | Environmental testing — Cold/dry heat | FW behavior at ambient extremes (−10 to +55°C) | FW-THERM, FW-PWR (cold-start SoC%), SW-AI (inference accuracy vs temp) |
| TCVN 7699-2-6:2009 | Environmental testing — Vibration | Data integrity under vibration (I2C/SPI bus errors) | FW-HAL (bus retries), SW-BAL (Kalman filter robustness) |
| TCVN 7699-2-29:2012 | Environmental testing — EMC radiated emission | SPI/I2C clock EMI, BLE coexistence | FW-HAL (clock rates), SW-COM (BLE channel selection) |
| TCVN 7699-2-78:2009 | Environmental testing — Damp heat | Humidity 80–100% RH, condensation recovery | FW-THERM (condensation on sensor → SENSOR_FAULT handling) |
| TCVN 13726:2023 | Defense procurement — AI systems | Safety classification, V&V methodology, HITL requirements | SW-AI (Class C V&V), FW-SAFE (Class B V&V) |
| TCVN 12808:2019 | Software quality — Requirements and evaluation | Software quality attributes (reliability, maintainability) | All SW modules (SWR-FW-R01 72h soak, branch coverage) |
| TCVN 11930:2017 | Information security — Basic requirements | Firmware update authentication, BLE security | SW-COM (COM-SEC signing, COM-BLE pairing) |

### 1.2 International Standards (directly applicable or via TCVN adoption)

| Standard | Title | Applies To | SW Modules |
|----------|-------|-----------|------------|
| IEC 62443-4-1:2018 | Security for IACS — Secure development lifecycle | Coding standard, static analysis, security review | All — MISRA C, cppcheck, clang-tidy |
| IEC 62443-4-2:2019 | Security for IACS — Component security | Firmware update, diagnostic access control | FW-HAL USB, SW-COM (COM-UPDATE, COM-SEC) |
| IEC 61508-3:2010 | Functional safety — Software requirements | Safety-critical SW development process | FW-SAFE (SIL determination), SW-AI (AI-GATE confidence gating) |
| MIL-STD-882E:2012 | System safety | Hazard analysis for AI classification | SW-AI (AI-SAFE module, SWR-AI-S05) |
| MIL-STD-498:1994 | Software development and documentation | SRS/SAD document structure | All SW documentation |
| MIL-STD-810H:2019 | Environmental engineering considerations | Operating environment definition | FW-THERM, FW-PWR — Methods 501/502/514 |
| MIL-STD-461G:2015 | EMI/EMC requirements | Radiated emission limits | FW-HAL (SPI/PWM frequencies), SW-COM (BLE) |
| IEEE 830:1998 | Software requirements specification | SRS structure and content | All SRS documents |
| MISRA C:2012 | C coding guidelines | Code safety and reliability | FW-SAFE (required subset), others (advisory subset) |

### 1.3 De Facto Standards

| Standard | Applies To | SW Modules |
|----------|-----------|------------|
| Ultralytics YOLOv8 Model Card template | AI model documentation | SW-AI (Model Card) |
| NVIDIA TensorRT optimization guide | AI inference quantization | SW-AI (INT8 deployment) |
| Bluetooth SIG GATT specification v5.0 | BLE profile definition | SW-COM (COM-BLE) |
| Nordic nRF5 SDK / Zephyr RTOS coding conventions | BLE firmware | SW-COM (nRF52840 firmware) |

---

## 2. Compliance Matrix — Requirements × Standards

### 2.1 SW-FW (Safety Class B)

| SWR ID | Requirement | Standard | Clause | Compliance Method |
|--------|-------------|----------|--------|------------------|
| SWR-FW-S01 | No stale indicator in fault state | IEC 61508-3 §7.4.4 | Fault reaction time | T: fault injection + camera |
| SWR-FW-S02 | Power-fail display blank ≤100 ms | IEC 61508-3 §7.4.4, TCVN 13726 §5.3 | Safe state on power loss | T: battery pull, 10 trials |
| SWR-FW-S03 | Thermal shutdown stable display-off | MIL-STD-810H Method 501.7 | High-temp operating limit | T: thermal chamber |
| SWR-FW-S05 | Power-loss ISR (not polled) | IEC 61508-3 §7.4.3.2 | Independence of safety function | D: code review + T: block test |
| SWR-FW-A06 | Real-time scheduling | IEC 62443-4-2 §CR 7.2 | Deterministic output | T: worst-case latency measurement |
| SWR-FW-A07 | No dynamic alloc after boot | MISRA C:2012 Dir 4.12 | Dynamic memory | T: 72h soak + heap monitor |
| SWR-FW-R03 | Signed firmware images | IEC 62443-4-2 §CR 3.4, TCVN 11930 §6.2 | Software integrity | T: reject unsigned image |
| SWR-FW-R04 | ≥80% branch coverage | IEC 61508-3 Table B.2 | SIL 1–2 test coverage | T: CI coverage report |
| SWR-FW-E06 | MISRA C:2012 coding standard | MISRA C:2012 (all rules) | Code reliability | I: static analysis report |

### 2.2 SW-AI (Safety Class C — highest)

| SWR ID | Requirement | Standard | Clause | Compliance Method |
|--------|-------------|----------|--------|------------------|
| SWR-AI-S01 | Confidence gate ≥70% | TCVN 13726 §5.4, IEC 61508-3 §7.4.5 | AI safety gating | T: controlled confidence sweep |
| SWR-AI-S02 | FPR ≤2% at ≥90% confidence | TCVN 13726 §6.2, MIL-STD-882E Table A-II | Detection error rate | T: ≥500 non-drone presentations (Wilson CI) |
| SWR-AI-S03 | No stale detection after hang | IEC 61508-3 §7.4.4 | Fault reaction time | T: fault injection via FW-WDG |
| SWR-AI-S04 | Confidence gate not field-overridable | TCVN 13726 §5.4.3 | Safety function integrity | I: code review + D: field mode audit |
| SWR-AI-S05 | MIL-STD-882E hazard analysis | MIL-STD-882E §4.4 | Hazard identification | D: independent safety review |
| SWR-AI-12 | FPR dual-direction | IEC 61508-3 §7.4.7 | Diagnostic coverage | T: FPR + FNR test protocol |
| SWR-AI-T01 | Training dataset ≥16,000 images | Best practice (ML community) | — | I: dataset manifest review |

### 2.3 SW-BAL (Safety Class B)

| SWR ID | Requirement | Standard | Clause | Compliance Method |
|--------|-------------|----------|--------|------------------|
| SWR-BAL-S01 | Lead angle bounds check | IEC 61508-3 §7.4.5 | Output range check | T: out-of-bounds injection |
| SWR-BAL-S03 | Range reasonableness bounds | IEC 61508-3 §7.4.5 | Plausibility check | T: extreme range injection |
| SWR-BAL-S04 | No stale lead after detection loss | IEC 61508-3 §7.4.4 | Fault reaction time | T: via FW-WDG timeout |
| SWR-BAL-01 | Lead accuracy ≤1.0 mrad | MIL-STD-810H (implied) | Accuracy under conditions | T: PR-11 jig + drone sled |
| SWR-BAL-20 | Auto bore-sight ≤3 s | TCVN 13726 §5.2 (operational readiness) | Boot-time self-calibration | T: 10 cold starts |

### 2.4 SW-COM (Safety Class A — lowest)

| SWR ID | Requirement | Standard | Clause | Compliance Method |
|--------|-------------|----------|--------|------------------|
| SWR-COM-02 | Optional BLE operation | IEC 61508-3 §7.4.2 | Non-interference of comms on safety | T: BLE disconnected, all functions work |
| SWR-COM-07 | EMC immunity | TCVN 7699-2-29 §5, MIL-STD-461G CS114 | Conducted susceptibility | T: EMC lab 3 V/m, 80 MHz–2.7 GHz |
| SWR-COM-08 | EMC emissions | TCVN 7699-2-29 §4, MIL-STD-461G RE102 | Radiated emission | T: EMC lab measurement |
| SWR-COM-13 | Signed firmware update | IEC 62443-4-2 §CR 3.4, TCVN 11930 §6.2 | Firmware integrity | T: reject unsigned, accept signed |
| SWR-COM-14 | Rollback protection | IEC 62443-4-2 §CR 3.4 | Version enforcement | T: attempt downgrade, verify reject |

---

## 3. Safety Class V&V Requirements

| Safety Class | Standard Basis | V&V Methodology | Independence |
|-------------|---------------|-----------------|-------------|
| **C (SW-AI)** | IEC 61508 SIL 2–3 analogy, MIL-STD-882E Severity II | Independent V&V mandatory. Model validator ≠ model trainer. Hazard analysis by safety engineer. | **Full independence:** separate person, separate test dataset |
| **B (SW-FW, SW-BAL)** | IEC 61508 SIL 1–2 analogy | Independent V&V for safety-critical requirements (SWR-xx-Sxx). Self-V&V acceptable for non-safety. | **Partial independence:** safety reqs by QA, non-safety by developer |
| **A (SW-COM)** | IEC 62443 SL 1 | Developer self-test acceptable. Security review by separate person for COM-SEC. | **Minimal:** security review independent, rest by developer |

---

## 4. How to Reference This Document

In each SW proposal and SRS, replace the Check 03 FLAG with:

```markdown
### Standards Compliance
See [[V-SMASH_TCVN_SW_Compliance_Matrix_v1.0]] for complete standards
mapping. This sub-project complies with Section 2.X (SW-XX) of the matrix.
```

---

*V-SMASH TCVN SW Compliance Matrix v1.0*
*Origin: QC Gate Batch SG-1 — systemic fix for Check 03 (4/4 FLAG)*
*Cross-reference: [[V-SMASH-SW-FW_SAD_v1.0|FW SAD §10]], [[V-SMASH_Family_Orchestration_Design_v1.0|Orchestration]]*
