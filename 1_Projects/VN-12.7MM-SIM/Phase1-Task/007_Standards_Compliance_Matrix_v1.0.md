# VN-12.7MM-SIM-007: STANDARDS COMPLIANCE MATRIX
## Phase 1: Task Clarification

**Document**: VN-12.7MM-SIM-007-SCM | **Version**: 1.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 1 - Task Clarification (Pahl & Beitz)

---

# 1. PURPOSE

Map applicable standards to specific requirements per SF-011 (TCVN) and SF-012 (MIL-STD).
This matrix identifies which standards apply to which variants and requirements.

---

# 2. APPLICABLE STANDARDS

## 2.1 International Military Standards

| Standard | Title | Applicability | Variants |
|----------|-------|---------------|----------|
| **MIL-STD-810H** | Environmental Engineering Considerations | Environmental qualification | CTR (mandatory), I-01/TAC (selected methods) |
| **MIL-STD-461G** | EMI/EMC Requirements | Electromagnetic compatibility | TAC (mandatory — 3-station wired), all variants (good practice) |
| **MIL-STD-1472H** | Human Factors Engineering | Ergonomics and human-machine interface | All variants |
| **MIL-STD-882E** | System Safety | Safety analysis (FMEA, FTA) | All variants |
| **MIL-HDBK-217F** | Reliability Prediction | MTBF calculation methodology | All variants |

## 2.2 IEC / ISO Standards

| Standard | Title | Applicability | Variants |
|----------|-------|---------------|----------|
| **IEC 60950-1** | IT Equipment Safety | Electrical safety | All variants (SF-003) |
| **IEC 62368-1** | Audio/Video/IT Equipment Safety | Successor to 60950 | All variants |
| **ISO 7010** | Safety Signs | Warning labels | All variants (SF-005) |
| **ISO 9241** | Ergonomics of HCI | Display and interface design | All variants |

## 2.3 Vietnamese Standards (TCVN)

| Standard | Title | Applicability | Notes |
|----------|-------|---------------|-------|
| **TCVN 7383:2004** | Machine Safety - General Principles | Machine safety design | All variants |
| **TCVN 6592 (IEC 60204)** | Machine Electrical Equipment | Electrical safety | All variants |
| **TCVN 7384 (ISO 13849)** | Safety-related Parts of Control Systems | Software safety stops | All variants (SF-004) |
| **TCVN 12540:2018** | Electromagnetic Compatibility | EMC limits | TAC, CTR |
| **TCVN 5699 (IEC 60335)** | Household Appliance Safety | General electrical safety reference | TAB (tablet) |
| **QCVN 09:2012/BCT** | National Technical Regulation on Electrical Equipment | Mandatory for electrical products sold in Vietnam | All variants |

> **Note:** Vietnam does not have specific TCVN for military training simulators. MIL-STD is the de facto standard for defense procurement. TCVN applies to general electrical safety and EMC.

---

# 3. REQUIREMENTS-TO-STANDARDS TRACEABILITY

## 3.1 Safety Requirements

| Req ID | Requirement | Standard | Method | Section |
|--------|-------------|----------|--------|---------|
| SF-001 | Emergency stop | TCVN 7383, ISO 13850 | I | E-stop design per standard |
| SF-002 | No pinch points | TCVN 7383, MIL-STD-1472H | I | Guard design |
| SF-003 | Electrical safety | IEC 60950-1 / IEC 62368-1, TCVN 6592 | Certificate | Third-party test |
| SF-004 | Software safety stop | TCVN 7384 (ISO 13849) | T | SIL analysis |
| SF-005 | Warning labels | ISO 7010 | I | Label design per standard |
| SF-006 | Grounding | TCVN 6592 (IEC 60204) | T | Earth continuity test |
| SF-008 | No live ammo capable | MIL-STD-882E | Design | FMEA hazard analysis |
| SF-009 | Tip-over prevention | MIL-STD-1472H | Calculation | Stability analysis |
| SF-010 | Eye-safe display | IEC 62471 | Certificate | Photobiological safety |

## 3.2 Environmental Qualification (MIL-STD-810H)

| Req ID | Requirement | MIL-STD-810H Method | Variants | Severity |
|--------|-------------|---------------------|----------|----------|
| OP-017 | Deployment scope (shore) | Method 501.7 (High Temp), 502.7 (Low Temp) | I-01 | Indoor only: 18-32C |
| OP-019 | CTR environmental qual | Method 501.7, 502.7, 509.7, 514.8 | CTR | Full qualification required |
| ER-008 | Climate comfort | Method 507.6 (Humidity) | All | 18-32C, <85% RH |
| TR-005 | Transport vibration | Method 514.8 (Vibration) | CTR, all (transport) | Transport profile |

### CTR-Specific Environmental Test Matrix

| Test | Method | Condition | Duration | Pass Criteria |
|------|--------|-----------|----------|---------------|
| High Temperature | 501.7 | +55C operational, +70C storage | 72h operational | No degradation |
| Low Temperature | 502.7 | +5C operational, -10C storage | 72h operational | No degradation |
| Salt Fog | 509.7 | 5% NaCl, 35C, 95% RH | 48h exposure | No corrosion on connectors |
| Transport Vibration | 514.8 | Common carrier, Cat 4 | Per MIL profile | No damage, functional post-test |
| Humidity | 507.6 | 95% RH, 30-60C cycling | 10 cycles | No condensation damage |

> **I-01/TAC Note:** Shore-based variants only need to demonstrate 18-32C, <85% RH operation. Full MIL-STD-810H is NOT required for indoor-only variants.

## 3.3 EMI/EMC (MIL-STD-461G)

| Req ID | Requirement | MIL-STD-461G Test | Variants | Notes |
|--------|-------------|-------------------|----------|-------|
| OP-020 | TAC EMI/EMC | CE102, RE102 | TAC (mandatory) | 3-station wired — inter-station interference |
| — | General EMC | CE102 (conducted), RE102 (radiated) | All (good practice) | TCVN 12540 for commercial compliance |

## 3.4 Human Factors (MIL-STD-1472H)

| Req ID | Requirement | MIL-STD-1472H Section | Variants |
|--------|-------------|----------------------|----------|
| ER-001 | Operator height range | 5.6 (Anthropometry) | All |
| ER-002 | Standing operation | 5.6.3 (Workplace layout) | I-01, CTR, TAC |
| ER-003 | Sight line alignment | 5.2.2 (Visual displays) | All |
| ER-006 | 2hr continuous operation | 5.7 (Workload) | All |
| ER-009 | Vietnamese language controls | 5.2.6 (Labeling) | All |
| K-010 | Manual operation feel | 5.4 (Controls) | I-01, CTR, TAC |

## 3.5 Reliability (MIL-HDBK-217F)

| Req ID | Requirement | Approach | Variants |
|--------|-------------|----------|----------|
| MT-001 | MTBF ≥500h | Parts count prediction per MIL-HDBK-217F | All HW variants |
| MT-002 | MTTR ≤4h | Maintainability analysis | All HW variants |

---

# 4. COMPLIANCE APPROACH BY VARIANT

| Variant | MIL-STD-810H | MIL-STD-461G | MIL-STD-1472H | MIL-STD-882E | TCVN |
|---------|-------------|-------------|---------------|-------------|------|
| I-01 (Standard) | Indoor subset only | Good practice | Full | FMEA | Full electrical |
| I-02 (CTR) | **Full qualification** | Full | Full | FMEA | Full electrical + EMC |
| I-06 (TAC) | Indoor subset | **Full (3-station)** | Full (3 roles) | FMEA | Full electrical + EMC |
| I-08 (ACH) | Per base variant | Per base variant | Full + AI interface | FMEA + AI safety | Full electrical |
| I-09 (TAB) | N/A (tablet) | N/A | ISO 9241 (HCI) | N/A | TCVN 5699 |

---

# 5. OPEN ITEMS

| ID | Issue | Owner | Target |
|----|-------|-------|--------|
| SCM-001 | Confirm QCVN 09:2012/BCT applicability to defense training equipment | KN | Phase 2 |
| SCM-002 | Identify if any TCVN for simulation/training equipment exists (likely none) | KN | Phase 2 |
| SCM-003 | CTR environmental profile: confirm operating temperature range with Navy | KN | Phase 2 |

---

# 6. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN (HELIX Phase 1 audit) | Initial release per SF-011/SF-012 |
