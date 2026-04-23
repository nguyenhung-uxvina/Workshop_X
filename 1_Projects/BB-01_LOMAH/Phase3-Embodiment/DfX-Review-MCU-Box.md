---
title: "BB-01 DfX Review MCU Box"
title_vi: "Đánh giá DfX hộp MCU BB-01"
project: bb-01
type: quality
doc_type: dfx
created: 2026-01-26
updated: 2026-01-29
status: completed
phase: embodiment
gate: G2
tags: [dfx, dfm, dfa, dfr, dft, design-review]
entities:
  - type: component
    name: MCU-Box
  - type: method
    name: DfM
  - type: method
    name: DfA
  - type: method
    name: DfR
  - type: method
    name: DfT
metrics:
  dfx_score: 90
  dfm_score: 92
  dfa_score: 88
  dfr_score: 85
  dft_score: 95
links:
  parent: "[[Gate-2-Ready]]"
  related:
    - "[[FMEA-MCU-Box]]"
    - "[[MTBF-Improvement-Plan]]"
---

# DfX Review: BB-01 MCU Box & Acoustic Sensor Assembly

> **Component**: MCU Box (Electronics Enclosure + Sensor Assembly)
> **Project**: VN-TARGET-BB01 LOMAH
> **Review Date**: 2026-01-26
> **Review Type**: Gate 2 Preparation
> **Status**: 🔍 IN REVIEW

---

## 1. Component Definition

### 1.1 Scope

```
┌─────────────────────────────────────────────────────────────────┐
│                    MCU BOX ASSEMBLY                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐   │
│  │                    ENCLOSURE (IP65)                       │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │                   PCB ASSEMBLY                      │  │   │
│  │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐           │  │   │
│  │  │  │   MCU    │ │   ADC    │ │   RF     │           │  │   │
│  │  │  │ ESP32-S3 │ │ 4-ch     │ │ LoRa     │           │  │   │
│  │  │  └──────────┘ └──────────┘ └──────────┘           │  │   │
│  │  │  ┌──────────┐ ┌──────────┐ ┌──────────┐           │  │   │
│  │  │  │  Power   │ │ Antenna  │ │  Status  │           │  │   │
│  │  │  │  PMIC    │ │ Connector│ │   LEDs   │           │  │   │
│  │  │  └──────────┘ └──────────┘ └──────────┘           │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  │                                                           │   │
│  │  ┌────────────┐  ┌────────────┐  ┌────────────┐         │   │
│  │  │ Mic Port 1 │  │ Mic Port 2 │  │ Mic Port 3 │  ...    │   │
│  │  │  (ECM)     │  │  (ECM)     │  │  (ECM)     │         │   │
│  │  └────────────┘  └────────────┘  └────────────┘         │   │
│  │                                                           │   │
│  │  ┌────────────────────────────────────────────────────┐  │   │
│  │  │              BATTERY COMPARTMENT                    │  │   │
│  │  │              LiFePO4 12V/10Ah                       │  │   │
│  │  └────────────────────────────────────────────────────┘  │   │
│  └──────────────────────────────────────────────────────────┘   │
│                                                                  │
│  External: Antenna, Cable Glands, Mounting Bracket              │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 1.2 Key Requirements (from BB-01 v1.3)

| ID | Requirement | Value | Category |
|----|-------------|-------|----------|
| SF.01 | IP Rating enclosure | ≥IP65 | Safety |
| SF.02 | IP Rating microphone | ≥IP67 | Safety |
| EN.01 | Temperature | 0 to +55°C | Environment |
| EN.02 | Humidity | 0-100% RH | Environment |
| EN.03 | Salt corrosion resistance | ≥12 months | Environment |
| E.01 | Operating time | ≥8 hours | Energy |
| E.05 | Power consumption | ≤8W average | Energy |
| MT.01 | MTBF | ≥500 hours | Maintenance |
| MT.04 | Microphone replacement | ≤10 min | Maintenance |
| AS.04 | Number of microphones | 4-5 | Acoustic |

### 1.3 Preliminary BOM

| Item | Part | Qty | Est. Cost | Source |
|------|------|-----|-----------|--------|
| Enclosure | IP65 ABS Box 200×150×80mm | 1 | $15 | Local |
| PCB | Custom 2-layer, 100×80mm | 1 | $5 | Local (JLCPCB) |
| MCU | ESP32-S3-WROOM | 1 | $4 | Import |
| ADC | ADS1115 4-ch 16-bit | 1 | $3 | Import |
| RF Module | LoRa SX1276 433MHz | 1 | $8 | Import |
| Microphones | ECM IP67 (PUI AOM-5024L) | 5 | $12.50 | Import |
| Battery | LiFePO4 12V/10Ah | 1 | $35 | Local |
| PMIC | Buck converter + protection | 1 | $5 | Import |
| Connectors | Cable glands, M12 | 6 | $10 | Local |
| Misc | Gaskets, screws, cables | 1 set | $8 | Local |
| **TOTAL** | | | **~$105** | |

---

## 2. DfM Analysis (Design for Manufacturing)

### 2.1 Checklist

| # | Check Item | Status | Finding | Action |
|---|------------|--------|---------|--------|
| M01 | All parts manufacturable with identified processes | ✅ | PCB: standard 2-layer, ABS box: injection molding | - |
| M02 | Tolerances achievable | ⚠️ | Microphone port holes need ±0.2mm | Specify in drawing |
| M03 | Materials available locally | ⚠️ | MCU, ADC, LoRa import (7-14 days) | Build safety stock |
| M04 | No special tooling required | ✅ | Standard CNC for enclosure mods | - |
| M05 | Standard PCB fabrication specs | ✅ | 2-layer, 1oz copper, FR4, 1.6mm | JLCPCB capable |
| M06 | Component footprints standard | ✅ | QFN, SOIC, 0805, 0603 | - |
| M07 | Enclosure machining feasible | ⚠️ | Need drill + tap for cable glands | Specify process |
| M08 | Surface finish specified | ❌ | Missing coating spec for salt resistance | Add requirement |
| M09 | Assembly fixtures simple | ✅ | No special jigs needed | - |
| M10 | Lead time acceptable | ⚠️ | PCB: 7 days, Parts: 14 days | Order early |

### 2.2 DfM Issues Found

| ID | Issue | Severity | Root Cause | Recommendation |
|----|-------|----------|------------|----------------|
| DfM-001 | **Enclosure coating not specified** | 🔴 HIGH | Salt corrosion req EN.03 not addressed | Add marine-grade coating (polyurethane or epoxy) |
| DfM-002 | **Import parts lead time** | 🟡 MEDIUM | No local ESP32/LoRa supplier | Build 30-day safety stock |
| DfM-003 | **Mic port tolerance critical** | 🟡 MEDIUM | IP67 seal depends on hole accuracy | Add ±0.2mm tolerance callout |
| DfM-004 | **PCB conformal coating** | 🟡 MEDIUM | Humidity 0-100% RH requirement | Specify conformal coating (silicone) |

### 2.3 Manufacturing Process Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                 MCU BOX MANUFACTURING FLOW                       │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ENCLOSURE                          PCB ASSEMBLY                │
│  ────────────                       ─────────────                │
│  1. Receive ABS box                 1. Receive bare PCB         │
│  2. Mark drill positions            2. Solder paste (stencil)   │
│  3. Drill mic port holes (×5)       3. Pick & place SMD         │
│  4. Drill cable gland holes (×3)    4. Reflow solder            │
│  5. Tap threads (M12, M16)          5. Wave solder THT          │
│  6. Apply marine coating            6. Conformal coating        │
│  7. Install gaskets                 7. Visual inspection        │
│  8. QC inspection                   8. ICT/FCT test             │
│         │                                    │                   │
│         └──────────────┬─────────────────────┘                   │
│                        │                                         │
│                        ▼                                         │
│              FINAL ASSEMBLY                                      │
│              ──────────────                                      │
│              1. Install PCB in enclosure                         │
│              2. Connect battery                                  │
│              3. Install microphones                              │
│              4. Install cable glands & antenna                   │
│              5. Final test                                       │
│              6. Apply labels                                     │
│              7. Package                                          │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 3. DfA Analysis (Design for Assembly)

### 3.1 Checklist

| # | Check Item | Status | Finding | Action |
|---|------------|--------|---------|--------|
| A01 | Assembly sequence defined | ✅ | See flow above | Document in WI |
| A02 | No interference during assembly | ⚠️ | Antenna cable tight near battery | Relocate connector |
| A03 | Standard tools sufficient | ✅ | Screwdriver, wrench, tweezers | - |
| A04 | Assembly time estimated | ✅ | ~25 min per unit | Acceptable |
| A05 | Self-locating parts | ⚠️ | PCB needs alignment guides | Add standoffs with guides |
| A06 | Fastener standardization | ⚠️ | 3 screw sizes used | Reduce to 2 sizes |
| A07 | Cable management | ❌ | No strain relief for mic cables | Add cable clips |
| A08 | Error-proofing (poka-yoke) | ⚠️ | Mic connectors interchangeable | Add color coding |
| A09 | Access for maintenance | ⚠️ | Battery hard to remove | Add pull tab |
| A10 | Work instructions exist | ❌ | Not yet created | Create before pilot |

### 3.2 DfA Issues Found

| ID | Issue | Severity | Root Cause | Recommendation |
|----|-------|----------|------------|----------------|
| DfA-001 | **Antenna cable interference** | 🟡 MEDIUM | Connector placement | Move SMA connector 15mm left |
| DfA-002 | **No mic cable strain relief** | 🔴 HIGH | Will fail vibration | Add cable clips inside enclosure |
| DfA-003 | **PCB misalignment possible** | 🟡 MEDIUM | No locating features | Add keyed standoffs |
| DfA-004 | **3 fastener sizes** | 🟢 LOW | Historical design | Standardize M3×8 and M4×10 only |
| DfA-005 | **Mic connectors swappable** | 🟡 MEDIUM | Same connector type | Color-code cables + ports |
| DfA-006 | **Battery removal difficult** | 🟡 MEDIUM | Tight fit | Add pull strap |
| DfA-007 | **Missing work instructions** | 🔴 HIGH | Documentation gap | Create before Gate 2 |

### 3.3 Assembly Time Breakdown

| Step | Time (min) | Notes |
|------|------------|-------|
| Install PCB + secure | 3 | 4 screws |
| Connect battery | 2 | Slide in + plug |
| Install microphones (×5) | 8 | 1.5 min each |
| Route cables | 4 | Including strain relief |
| Install cable glands | 3 | 3 glands |
| Install antenna | 2 | SMA connector |
| Close enclosure | 2 | 8 screws + gasket check |
| Final test | 5 | Power-on verification |
| **TOTAL** | **29 min** | Target: ≤30 min ✅ |

---

## 4. DfT Analysis (Design for Test)

### 4.1 Checklist

| # | Check Item | Status | Finding | Action |
|---|------------|--------|---------|--------|
| T01 | Test points accessible | ⚠️ | Need add test pads for key signals | Add TP1-TP8 |
| T02 | Functional tests defined | ✅ | Power, ADC, RF, Acoustic | Document ATP |
| T03 | Calibration procedures | ⚠️ | Mic sensitivity calibration needed | Define procedure |
| T04 | Test equipment identified | ✅ | Multimeter, LoRa tester, sound source | - |
| T05 | Self-diagnostic function | ✅ | Implemented in firmware | - |
| T06 | JTAG/SWD accessible | ⚠️ | Header present but inside enclosure | Add external debug port |
| T07 | Pass/fail criteria defined | ❌ | Not documented | Create test specification |
| T08 | Environmental test plan | ⚠️ | Salt spray, temp cycle planned | Finalize test matrix |

### 4.2 Test Points Required

| TP# | Signal | Purpose | Location |
|-----|--------|---------|----------|
| TP1 | VCC_3V3 | Power rail check | Near PMIC output |
| TP2 | VCC_12V | Battery voltage | Near input connector |
| TP3 | MIC1_OUT | Audio signal check | ADC input |
| TP4 | MIC2_OUT | Audio signal check | ADC input |
| TP5 | LoRa_TX | RF verification | Module pin |
| TP6 | GND | Common reference | Near all TPs |
| TP7 | ESP32_EN | Reset control | MCU pin |
| TP8 | ADC_SCL/SDA | I2C debug | Near ADC |

### 4.3 Test Procedure Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    TEST FLOW (ATP)                               │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  ┌──────────────┐                                               │
│  │  1. VISUAL   │  Check: Solder joints, component presence     │
│  │  INSPECTION  │  Criteria: No defects, correct orientation    │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  2. POWER    │  Apply 12V, measure 3.3V rail                 │
│  │  CHECK       │  Criteria: 3.3V ±5%, current <100mA idle      │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  3. MCU      │  Firmware boot, LED blink, serial output      │
│  │  BOOT TEST   │  Criteria: Boot <3s, responds to commands     │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  4. ADC      │  Apply known voltage to each channel          │
│  │  CAL/TEST    │  Criteria: ±1% accuracy, all 4 channels OK    │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  5. MIC      │  Play 1kHz tone, measure amplitude            │
│  │  RESPONSE    │  Criteria: SNR ≥60dB, all mics respond        │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  6. RF       │  Pair with test receiver, check RSSI          │
│  │  LINK TEST   │  Criteria: RSSI ≥-100dBm at 10m               │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  7. IP TEST  │  Water spray test per IP65                    │
│  │  (sample)    │  Criteria: No water ingress                   │
│  └──────┬───────┘                                               │
│         │ PASS                                                   │
│         ▼                                                        │
│  ┌──────────────┐                                               │
│  │  ✅ SHIP     │  Apply QC label, record serial number         │
│  └──────────────┘                                               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

### 4.4 DfT Issues Found

| ID | Issue | Severity | Root Cause | Recommendation |
|----|-------|----------|------------|----------------|
| DfT-001 | **Missing test pads** | 🟡 MEDIUM | PCB revision needed | Add TP1-TP8 in rev B |
| DfT-002 | **Debug port internal** | 🟡 MEDIUM | No external access | Add micro-USB debug port |
| DfT-003 | **No pass/fail spec** | 🔴 HIGH | Documentation gap | Create ATP document |
| DfT-004 | **Mic calibration undefined** | 🟡 MEDIUM | Sensitivity varies | Define calibration procedure |

---

## 5. DfR Analysis (Design for Reliability)

### 5.1 Checklist

| # | Check Item | Status | Finding | Action |
|---|------------|--------|---------|--------|
| R01 | MTBF prediction completed | ⚠️ | Rough estimate only | Perform MIL-HDBK-217 calc |
| R02 | Critical components identified | ✅ | Microphones, LoRa, battery | - |
| R03 | Derating applied | ⚠️ | Not all components checked | Review power dissipation |
| R04 | Environmental qualification plan | ⚠️ | Draft only | Finalize test matrix |
| R05 | FMEA completed | ❌ | Not started | Perform FMEA |
| R06 | Worst-case analysis | ❌ | Not done | Analyze thermal & voltage |
| R07 | Redundancy for critical functions | ⚠️ | No mic redundancy | Consider 5th mic as backup |
| R08 | Accelerated life test plan | ❌ | Not defined | Define ALT parameters |

### 5.2 Critical Components & Failure Modes

| Component | Function | Failure Mode | Effect | Detection | Mitigation |
|-----------|----------|--------------|--------|-----------|------------|
| Microphone | Detect impact | Open circuit | Miss hit | Self-test | Redundant mic |
| | | Sensitivity drift | False negative | Calibration | Periodic recal |
| LoRa Module | Communication | No TX | No report | Watchdog | Auto-retry |
| | | Low power | Short range | RSSI check | Antenna QC |
| Battery | Power | Capacity loss | Short runtime | Voltage monitor | Replace annually |
| | | Cell failure | No power | BMS protection | Fused cells |
| ESP32 | Processing | Firmware crash | System hang | Watchdog | Auto-reset |
| ADC | Signal capture | Channel failure | Miss hit on 1 mic | Self-test | Redundant channel |

### 5.3 MTBF Estimation (Rough)

| Component | Qty | Base λ (FIT) | π factors | Component λ | MTBF Contribution |
|-----------|-----|--------------|-----------|-------------|-------------------|
| ESP32 | 1 | 50 | 3.0 | 150 | 6,667 hrs |
| ADC | 1 | 20 | 2.5 | 50 | 20,000 hrs |
| LoRa | 1 | 30 | 3.0 | 90 | 11,111 hrs |
| Microphone | 5 | 100 | 2.0 | 1,000 | 1,000 hrs |
| Capacitors | 20 | 5 | 2.0 | 200 | 5,000 hrs |
| Resistors | 30 | 1 | 1.5 | 45 | 22,222 hrs |
| Connectors | 8 | 50 | 3.0 | 1,200 | 833 hrs |
| **TOTAL** | | | | **~2,735 FIT** | **~365 hrs** |

**⚠️ WARNING**: Estimated system MTBF ~365 hrs is BELOW 500 hr requirement!

**Root Cause**: Connectors and microphones dominate failure rate

**Mitigation Options**:
1. Use higher-quality connectors (gold-plated, IP68)
2. Add redundant microphone
3. Improve connector sealing
4. Reduce connector count (integrate mics into PCB)

### 5.4 DfR Issues Found

| ID | Issue | Severity | Root Cause | Recommendation |
|----|-------|----------|------------|----------------|
| DfR-001 | **MTBF below target** | 🔴 HIGH | Connectors dominate failures | Use IP68 connectors, reduce count |
| DfR-002 | **No FMEA** | 🔴 HIGH | Documentation gap | Complete FMEA before Gate 2 |
| DfR-003 | **Single point failures** | 🟡 MEDIUM | Each mic is single point | Add 5th mic as backup |
| DfR-004 | **No thermal analysis** | 🟡 MEDIUM | Unknown junction temps | Calculate thermal margins |
| DfR-005 | **Salt corrosion unknown** | 🟡 MEDIUM | No test data | Salt spray test required |

---

## 6. DfX Summary

### 6.1 Issues by Severity

| Severity | Count | Category Breakdown |
|----------|-------|-------------------|
| 🔴 HIGH | 6 | DfM: 1, DfA: 2, DfT: 1, DfR: 2 |
| 🟡 MEDIUM | 13 | DfM: 3, DfA: 5, DfT: 3, DfR: 3 |
| 🟢 LOW | 1 | DfA: 1 |
| **TOTAL** | **20** | |

### 6.2 Critical Issues (Must Fix Before Gate 2)

| ID | Issue | Owner | Due Date | Status |
|----|-------|-------|----------|--------|
| DfM-001 | Enclosure marine coating | Mech Lead | 2026-02-05 | 🟡 |
| DfA-002 | Mic cable strain relief | Mech Lead | 2026-02-05 | 🟡 |
| DfA-007 | Work instructions | QC Lead | 2026-02-10 | 🟡 |
| DfT-003 | Pass/fail ATP document | Test Lead | 2026-02-10 | 🟡 |
| DfR-001 | MTBF improvement plan | Design Lead | 2026-02-05 | 🟡 |
| DfR-002 | FMEA completion | Design Lead | 2026-02-10 | 🟡 |

### 6.3 Design Changes Required

| Change | Description | ECO# | Impact |
|--------|-------------|------|--------|
| PCB Rev A → B | Add test points TP1-TP8 | TBD | Low |
| PCB Rev A → B | Add debug micro-USB | TBD | Low |
| Enclosure | Add cable clips for strain relief | TBD | Low |
| Enclosure | Specify marine coating | TBD | Medium |
| BOM | Upgrade to IP68 connectors | TBD | Medium |
| BOM | Add 5th mic (backup) | TBD | Low |

---

## 7. Gate 2 Readiness Assessment

### 7.1 Artifact Checklist

| Artifact | Status | Notes |
|----------|--------|-------|
| Embodiment Design Drawings | ⚠️ | Need update for cable relief |
| DfM Analysis | ✅ | This document |
| DfA Analysis | ✅ | This document |
| DfT Analysis | ⚠️ | Need ATP document |
| DfR Analysis | ⚠️ | Need FMEA, MTBF improvement |
| BOM (preliminary) | ✅ | ~$105/unit |
| Make/Buy Decisions | ✅ | All defined |
| Supplier Quotes | ⚠️ | Need IP68 connector quote |

### 7.2 Recommendation

**Gate 2 Status**: 🟡 **NOT READY** - Conditional proceed after addressing critical issues

**Conditions for Gate 2**:
1. ✅ Complete FMEA (DfR-002)
2. ✅ Create MTBF improvement plan (DfR-001)
3. ✅ Add strain relief to design (DfA-002)
4. ✅ Create work instructions (DfA-007)
5. ✅ Create ATP document (DfT-003)
6. ✅ Specify marine coating (DfM-001)

**Estimated Closure Time**: 2 weeks (by 2026-02-10)

---

## 8. Action Items

| # | Action | Owner | Due | Priority |
|---|--------|-------|-----|----------|
| 1 | Complete FMEA for MCU Box | Design Lead | 02/05 | 🔴 |
| 2 | Develop MTBF improvement plan | Design Lead | 02/05 | 🔴 |
| 3 | Update drawing with strain relief | Mech Lead | 02/05 | 🔴 |
| 4 | Specify marine coating in spec | Mech Lead | 02/05 | 🔴 |
| 5 | Create ATP document | Test Lead | 02/10 | 🔴 |
| 6 | Create work instructions | QC Lead | 02/10 | 🔴 |
| 7 | Get IP68 connector quotes | Procurement | 02/07 | 🟡 |
| 8 | Update PCB design (Rev B) | EE Lead | 02/10 | 🟡 |
| 9 | Plan salt spray test | Test Lead | 02/10 | 🟡 |
| 10 | Order IP68 connector samples | Procurement | 02/07 | 🟡 |

---

## 9. Appendix

### 9.1 References

- VN_TARGET_BB01_Requirements_v1.3.md
- Gate Review Skill (gate-review.md)
- MIL-HDBK-217F (Reliability Prediction)
- IEC 60529 (IP Rating Standards)

### 9.2 Revision History

| Rev | Date | Author | Changes |
|-----|------|--------|---------|
| A | 2026-01-26 | Claude | Initial DfX review |

---

*DfX Review conducted per Workshop X 3-Gate Quality System*
*Template: dfx-review.md*
