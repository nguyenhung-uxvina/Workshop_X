# FMEA - BB-01 MCU Box Assembly

> **Issue ID**: DfR-002
> **Status**: ✅ COMPLETE
> **Owner**: Design Lead
> **Date**: 2026-01-27

---

## 1. Scope

| Item | Value |
|------|-------|
| **Assembly** | MCU Box (Electronics Enclosure) |
| **Subsystems** | Power, Processing, Sensing, Communication |
| **FMEA Type** | Design FMEA (DFMEA) |
| **Standard** | Based on AIAG FMEA 4th Edition |

---

## 2. Severity / Occurrence / Detection Scales

### Severity (S)
| Rating | Effect | Description |
|--------|--------|-------------|
| 10 | Hazardous | Safety issue, no warning |
| 9 | Hazardous | Safety issue, with warning |
| 8 | Very High | System inoperable |
| 7 | High | System degraded significantly |
| 6 | Moderate | System degraded, still functional |
| 5 | Low | Reduced performance |
| 4 | Very Low | Minor inconvenience |
| 3 | Minor | Slight annoyance |
| 2 | Very Minor | Negligible effect |
| 1 | None | No effect |

### Occurrence (O)
| Rating | Probability | MTBF Equivalent |
|--------|-------------|-----------------|
| 10 | Very High | <100 hrs |
| 8 | High | 100-500 hrs |
| 6 | Moderate | 500-2000 hrs |
| 4 | Low | 2000-10000 hrs |
| 2 | Very Low | >10000 hrs |
| 1 | Remote | >100000 hrs |

### Detection (D)
| Rating | Detection | Description |
|--------|-----------|-------------|
| 10 | None | Cannot detect before failure |
| 8 | Low | Detected only by customer |
| 6 | Moderate | Detected at final test |
| 4 | High | Detected during assembly |
| 2 | Very High | Detected automatically |
| 1 | Certain | Error-proofed |

---

## 3. FMEA Analysis

### 3.1 Power Subsystem

| ID | Component | Function | Failure Mode | Effect | S | Cause | O | Current Control | D | RPN | Action |
|----|-----------|----------|--------------|--------|---|-------|---|-----------------|---|-----|--------|
| P01 | Battery | Supply 12V | No output | System dead | 8 | Cell failure | 4 | BMS protection | 4 | 128 | Add voltage monitor |
| P02 | Battery | Supply 12V | Low capacity | Short runtime | 6 | Aging | 6 | None | 8 | 288 | **Add capacity warning** |
| P03 | PMIC | Regulate 3.3V | No output | MCU dead | 8 | IC failure | 3 | Power-on test | 4 | 96 | Acceptable |
| P04 | PMIC | Regulate 3.3V | Over-voltage | MCU damage | 9 | Regulator fail | 2 | None | 6 | 108 | Add OVP circuit |
| P05 | Connector | Power input | Open circuit | No power | 8 | Corrosion | 5 | Visual inspect | 6 | 240 | **IP68 connector** |
| P06 | Connector | Power input | High resistance | Voltage drop | 5 | Oxidation | 6 | None | 8 | 240 | **Gold plating** |

### 3.2 Processing Subsystem

| ID | Component | Function | Failure Mode | Effect | S | Cause | O | Current Control | D | RPN | Action |
|----|-----------|----------|--------------|--------|---|-------|---|-----------------|---|-----|--------|
| C01 | ESP32 | Processing | No boot | System dead | 8 | Firmware corrupt | 3 | Watchdog | 4 | 96 | Acceptable |
| C02 | ESP32 | Processing | Crash/hang | Miss hits | 7 | SW bug | 5 | Watchdog reset | 4 | 140 | Improve testing |
| C03 | ESP32 | Processing | Overheating | Shutdown | 6 | Poor cooling | 4 | None | 6 | 144 | Add thermal pad |
| C04 | ADC | Signal capture | Wrong reading | False detection | 7 | Calibration drift | 4 | Factory cal | 6 | 168 | Add self-cal routine |
| C05 | ADC | Signal capture | Channel fail | Miss 1 mic | 6 | IC failure | 3 | Self-test | 4 | 72 | Acceptable |

### 3.3 Sensing Subsystem (Microphones)

| ID | Component | Function | Failure Mode | Effect | S | Cause | O | Current Control | D | RPN | Action |
|----|-----------|----------|--------------|--------|---|-------|---|-----------------|---|-----|--------|
| M01 | Microphone | Detect impact | No output | Miss all hits | 8 | Open circuit | 5 | Self-test | 4 | 160 | **Add backup mic** |
| M02 | Microphone | Detect impact | Low sensitivity | Miss soft hits | 6 | Membrane damage | 5 | None | 8 | 240 | **Periodic cal check** |
| M03 | Microphone | Detect impact | High noise | False positives | 5 | Water ingress | 4 | IP67 rating | 6 | 120 | Acceptable |
| M04 | Mic cable | Signal path | Open circuit | Mic dead | 7 | Vibration fatigue | 6 | None | 6 | 252 | **Add strain relief** |
| M05 | Mic cable | Signal path | Short circuit | Wrong signal | 6 | Chafing | 4 | None | 6 | 144 | Add cable clips |
| M06 | Mic connector | Signal path | Intermittent | Random misses | 7 | Corrosion | 5 | Visual inspect | 8 | 280 | **IP68 connector** |

### 3.4 Communication Subsystem

| ID | Component | Function | Failure Mode | Effect | S | Cause | O | Current Control | D | RPN | Action |
|----|-----------|----------|--------------|--------|---|-------|---|-----------------|---|-----|--------|
| R01 | LoRa module | Transmit data | No TX | No hit report | 7 | IC failure | 3 | Link test | 4 | 84 | Acceptable |
| R02 | LoRa module | Transmit data | Weak signal | Lost packets | 5 | Antenna issue | 4 | RSSI check | 4 | 80 | Acceptable |
| R03 | Antenna | Radiate RF | Broken | No communication | 7 | Physical damage | 3 | Visual inspect | 4 | 84 | Acceptable |
| R04 | Antenna connector | RF path | High VSWR | Weak signal | 5 | Loose connection | 5 | None | 6 | 150 | Add thread lock |

### 3.5 Enclosure & Environmental

| ID | Component | Function | Failure Mode | Effect | S | Cause | O | Current Control | D | RPN | Action |
|----|-----------|----------|--------------|--------|---|-------|---|-----------------|---|-----|--------|
| E01 | Enclosure | Protect electronics | Water ingress | Short circuit | 9 | Gasket fail | 4 | IP65 test | 4 | 144 | Improve gasket |
| E02 | Enclosure | Protect electronics | Corrosion | Structural fail | 6 | Salt spray | 5 | None | 6 | 180 | **Marine coating** |
| E03 | Cable gland | Seal cables | Leak | Water damage | 8 | Improper install | 4 | Assembly check | 4 | 128 | Add torque spec |
| E04 | Mounting bracket | Attach to frame | Break | Unit lost | 7 | Vibration fatigue | 3 | Visual inspect | 6 | 126 | Acceptable |

---

## 4. RPN Summary & Prioritization

### 4.1 High RPN Items (≥200) - MUST ADDRESS

| Rank | ID | Failure Mode | RPN | Recommended Action |
|------|-----|--------------|-----|-------------------|
| 1 | M06 | Mic connector intermittent | **280** | Upgrade to IP68 gold connector |
| 2 | M04 | Mic cable open circuit | **252** | Add strain relief + cable clips |
| 3 | P02 | Battery low capacity | **288** | Add capacity monitoring + warning |
| 4 | M02 | Mic low sensitivity | **240** | Add periodic calibration check |
| 5 | P05 | Power connector open | **240** | Upgrade to IP68 connector |
| 6 | P06 | Power connector resistance | **240** | Gold-plated contacts |

### 4.2 Medium RPN Items (150-199)

| ID | Failure Mode | RPN | Action |
|----|--------------|-----|--------|
| E02 | Enclosure corrosion | 180 | Marine coating spec |
| C04 | ADC calibration drift | 168 | Self-calibration routine |
| M01 | Microphone no output | 160 | Redundant microphone |
| R04 | Antenna connector loose | 150 | Thread lock compound |

### 4.3 Acceptable Items (<150)

All other failure modes have RPN <150 and are considered acceptable with current controls.

---

## 5. Action Summary

### 5.1 Design Changes Required

| Priority | Action | Addresses | Status |
|----------|--------|-----------|--------|
| 🔴 HIGH | IP68 gold connectors | M06, P05, P06 | In [[MTBF-Improvement-Plan]] |
| 🔴 HIGH | Cable strain relief | M04 | DfA-002 |
| 🔴 HIGH | Battery capacity monitor | P02 | New requirement |
| 🟡 MED | Marine coating | E02 | DfM-001 |
| 🟡 MED | Redundant microphone | M01 | In [[MTBF-Improvement-Plan]] |
| 🟡 MED | Self-calibration routine | C04, M02 | Firmware update |
| 🟢 LOW | Thread lock on antenna | R04 | Assembly instruction |

### 5.2 Firmware Updates Required

| Item | Description |
|------|-------------|
| Battery monitor | Add low capacity warning at 20% |
| Self-test | Verify all mics at power-on |
| Self-calibration | Periodic sensitivity check |
| Watchdog | Ensure proper reset on hang |

---

## 6. FMEA Metrics

| Metric | Value |
|--------|-------|
| Total failure modes analyzed | 24 |
| High RPN (≥200) | 6 (25%) |
| Medium RPN (150-199) | 4 (17%) |
| Acceptable (<150) | 14 (58%) |
| Average RPN | 162 |
| Max RPN | 288 |

---

## 7. Conclusion

**FMEA Status**: ✅ COMPLETE

**Key Findings**:
1. **Connectors** are the dominant failure mode (consistent with MTBF analysis)
2. **Microphone reliability** is second concern
3. **Environmental protection** needs improvement (coating, sealing)

**Integration with MTBF Plan**:
FMEA confirms the [[MTBF-Improvement-Plan]] priorities:
- IP68 connectors → Addresses 3 high-RPN items
- Redundant microphone → Addresses M01
- Conformal coating → Addresses moisture-related failures

---

## 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Design Lead | | | ☐ |
| Quality Lead | | | ☐ |

---

## 9. References

- [[MTBF-Improvement-Plan]] - Reliability improvement actions
- [[DfX-Review-MCU-Box]] - DfX analysis
- [[DfX-Dashboard]] - Issue tracking
- [[v1.3-summary]] - Requirements

---

## 10. Revision History

| Rev | Date | Author | Changes |
|-----|------|--------|---------|
| A | 2026-01-27 | Claude | Initial FMEA |

---

*FMEA per Workshop X 3-Gate Quality System*
*Closes: DfR-002*
