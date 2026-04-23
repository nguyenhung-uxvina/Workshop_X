# Acceptance Test Procedure - BB-01 MCU Box

> **Document ID**: ATP-BB01-MCU-001
> **Issue ID**: DfT-003
> **Status**: ✅ COMPLETE
> **Revision**: A
> **Date**: 2026-01-28

---

## 1. Scope

| Item | Value |
|------|-------|
| **Product** | BB-01 MCU Box Assembly |
| **Test Type** | Production Acceptance Test |
| **Applies To** | 100% of production units |
| **Test Time** | ~15 minutes per unit |

---

## 2. Reference Documents

- [[v1.3-summary]] - Product requirements
- [[WI-MCU-Box-Assembly]] - Assembly procedure
- [[FMEA-MCU-Box]] - Failure modes to detect

---

## 3. Test Equipment Required

| Equipment | Specification | Calibration |
|-----------|---------------|-------------|
| Digital Multimeter | 0.5% accuracy | Annual |
| LoRa Test Receiver | 433 MHz, RSSI display | Annual |
| Sound Source | 1kHz tone, 80-90 dB SPL | N/A |
| Power Supply | 12V/5A (for battery simulation) | Annual |
| Stopwatch | ±1 sec accuracy | N/A |

---

## 4. Test Procedure

### TEST 1: Visual Inspection

| Step | Check | Accept | Reject |
|------|-------|--------|--------|
| 1.1 | Enclosure: no cracks, damage | ✅ | Any visible damage |
| 1.2 | Coating: complete coverage, correct color | ✅ | Bare spots, wrong color |
| 1.3 | Cable glands: all installed, tight | ✅ | Missing or loose |
| 1.4 | Antenna: installed, vertical | ✅ | Missing or damaged |
| 1.5 | Labels: serial number, QC sticker | ✅ | Missing labels |
| 1.6 | Strain relief: clamps installed | ✅ | Missing clamps |

**Result**: ☐ PASS ☐ FAIL

---

### TEST 2: Power-On Test

**Setup**: Connect 12V power supply OR use internal battery

| Step | Action | Expected | Actual | P/F |
|------|--------|----------|--------|-----|
| 2.1 | Apply power | Power LED GREEN | | ☐ |
| 2.2 | Measure TP1 (3.3V rail) | 3.3V ±5% (3.14-3.46V) | ___V | ☐ |
| 2.3 | Measure TP2 (12V input) | 12V ±10% (10.8-13.2V) | ___V | ☐ |
| 2.4 | Observe boot sequence | LED blinks 3×, then solid | | ☐ |
| 2.5 | Measure boot time | <5 seconds | ___s | ☐ |
| 2.6 | Measure idle current | <200 mA @ 12V | ___mA | ☐ |

**Result**: ☐ PASS ☐ FAIL

---

### TEST 3: Self-Test (Automated)

**Method**: Press TEST button OR send serial command "AT+TEST"

| Step | Check | Expected | Actual | P/F |
|------|-------|----------|--------|-----|
| 3.1 | MCU status | OK | | ☐ |
| 3.2 | ADC status | OK | | ☐ |
| 3.3 | LoRa status | OK | | ☐ |
| 3.4 | MIC1 status | OK | | ☐ |
| 3.5 | MIC2 status | OK | | ☐ |
| 3.6 | MIC3 status | OK | | ☐ |
| 3.7 | MIC4 status | OK | | ☐ |
| 3.8 | MIC5 status | OK | | ☐ |
| 3.9 | MIC6 status | OK | | ☐ |
| 3.10 | Battery voltage | >11.5V | ___V | ☐ |
| 3.11 | Overall result | ALL PASS | | ☐ |

**Result**: ☐ PASS ☐ FAIL

---

### TEST 4: Microphone Response Test

**Setup**: Hold sound source (phone playing 1kHz tone) near each microphone

| Step | Microphone | Action | Expected | P/F |
|------|------------|--------|----------|-----|
| 4.1 | MIC1 (RED) | Play tone near mic | LED1 blinks | ☐ |
| 4.2 | MIC2 (ORANGE) | Play tone near mic | LED2 blinks | ☐ |
| 4.3 | MIC3 (YELLOW) | Play tone near mic | LED3 blinks | ☐ |
| 4.4 | MIC4 (GREEN) | Play tone near mic | LED4 blinks | ☐ |
| 4.5 | MIC5 (BLUE) | Play tone near mic | LED5 blinks | ☐ |
| 4.6 | MIC6 (PURPLE) | Play tone near mic | LED6 blinks | ☐ |
| 4.7 | Crosstalk check | Sound at MIC1 only | Only LED1 blinks | ☐ |

**Result**: ☐ PASS ☐ FAIL

---

### TEST 5: RF Communication Test

**Setup**: 
1. Power on LoRa Test Receiver
2. Place receiver 10m from DUT
3. Ensure clear line of sight

| Step | Action | Expected | Actual | P/F |
|------|--------|----------|--------|-----|
| 5.1 | Trigger test transmission | Receiver shows packet | | ☐ |
| 5.2 | Read RSSI | ≥ -100 dBm | ___dBm | ☐ |
| 5.3 | Check packet content | Correct device ID | | ☐ |
| 5.4 | Send 10 packets | ≥9 received (90%) | ___/10 | ☐ |

**Result**: ☐ PASS ☐ FAIL

---

### TEST 6: Functional Integration Test

**Setup**: Simulate hit detection scenario

| Step | Action | Expected | Actual | P/F |
|------|--------|----------|--------|-----|
| 6.1 | Tap MIC1 sharply | "HIT" transmitted, LED1 flash | | ☐ |
| 6.2 | Tap MIC3 sharply | "HIT" transmitted, LED3 flash | | ☐ |
| 6.3 | Tap surface away from mics | No "HIT" (false positive check) | | ☐ |
| 6.4 | Rapid tap MIC2 (3× in 1s) | 3 separate "HIT" events | | ☐ |
| 6.5 | Latency check | HIT report <100ms after tap | ≤100ms | ☐ |

**Latency Measurement Method**: 
- Use oscilloscope: trigger on mic signal, measure to RF TX

**Result**: ☐ PASS ☐ FAIL

---

### TEST 7: Environmental Seal Check (Sample Test)

**Frequency**: 1 per 10 units (10% sample)

| Step | Action | Expected | P/F |
|------|--------|----------|-----|
| 7.1 | Water spray test (IP65) | No water inside after 3 min spray | ☐ |
| 7.2 | Open enclosure | All internal components dry | ☐ |
| 7.3 | Power-on after test | All functions normal | ☐ |

**Result**: ☐ PASS ☐ FAIL ☐ N/A (not sampled)

---

## 5. Pass/Fail Criteria Summary

| Test | Mandatory | Pass Criteria |
|------|-----------|---------------|
| TEST 1: Visual | Yes | All checks pass |
| TEST 2: Power-On | Yes | All measurements in spec |
| TEST 3: Self-Test | Yes | "ALL PASS" result |
| TEST 4: Microphone | Yes | All 6 mics respond, no crosstalk |
| TEST 5: RF | Yes | RSSI ≥-100dBm, ≥90% packets |
| TEST 6: Functional | Yes | All integration checks pass |
| TEST 7: Seal | Sample | No water ingress |

**Overall PASS**: All mandatory tests pass
**Overall FAIL**: Any mandatory test fails

---

## 6. Test Record

### Unit Information

| Field | Value |
|-------|-------|
| Serial Number | |
| Production Date | |
| Test Date | |
| Tester Name | |
| Tester ID | |

### Test Results Summary

| Test | Result | Notes |
|------|--------|-------|
| TEST 1: Visual | ☐ PASS ☐ FAIL | |
| TEST 2: Power-On | ☐ PASS ☐ FAIL | |
| TEST 3: Self-Test | ☐ PASS ☐ FAIL | |
| TEST 4: Microphone | ☐ PASS ☐ FAIL | |
| TEST 5: RF | ☐ PASS ☐ FAIL | |
| TEST 6: Functional | ☐ PASS ☐ FAIL | |
| TEST 7: Seal | ☐ PASS ☐ FAIL ☐ N/A | |

### Final Disposition

| Result | Action |
|--------|--------|
| ☐ **PASS** | Apply QC PASS label, proceed to packaging |
| ☐ **FAIL** | Quarantine, document failure, route to repair |

### Signatures

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Tester | | | |
| QC Approval | | | |

---

## 7. Failure Handling

### 7.1 Common Failures & Corrective Actions

| Failure | Likely Cause | Action |
|---------|--------------|--------|
| Power LED not on | Battery disconnected | Check connector |
| | Fuse blown | Replace F1 |
| Mic not responding | Cable disconnected | Reseat connector |
| | Wrong color routing | Re-route per WI |
| | Mic damaged | Replace mic |
| Low RSSI | Antenna loose | Tighten SMA |
| | Antenna damaged | Replace antenna |
| Self-test FAIL | Firmware issue | Re-flash firmware |
| Water ingress | Gasket misaligned | Re-assemble with new gasket |

### 7.2 Failure Documentation

All failures must be logged with:
- Serial number
- Test step failed
- Failure description
- Root cause (if known)
- Corrective action taken
- Re-test result

---

## 8. Revision History

| Rev | Date | Author | Changes |
|-----|------|--------|---------|
| A | 2026-01-28 | Design Team | Initial release |

---

## 9. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Design Lead | | | ☐ |
| QC Manager | | | ☐ |
| Production Manager | | | ☐ |

---

## 10. References

- [[v1.3-summary]] - Requirements (SP.03 latency, AS.08 SNR)
- [[WI-MCU-Box-Assembly]] - Assembly procedure
- [[FMEA-MCU-Box]] - Failure modes
- [[DfX-Review-MCU-Box]] - Test point locations

---

*ATP closes DfT-003*
*Per Workshop X 3-Gate Quality System*
