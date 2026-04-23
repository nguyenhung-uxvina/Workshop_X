# BB-01 MCU Box Test Procedure Checklist

> **Document**: TP-BB01-MCU-001
> **Version**: 1.0
> **Date**: 2026-01-26
> **Closes**: DfT-004
> **Scope**: Production test for MCU Box assembly

---

## 1. Test Overview

| Field | Value |
|-------|-------|
| Unit Under Test | BB-01 MCU Box |
| Test Duration | ~30 minutes |
| Test Equipment | See Section 2 |
| Pass Rate Target | 100% (rework if fail) |

### Test Flow

```
┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐
│ Stage 1 │──►│ Stage 2 │──►│ Stage 3 │──►│ Stage 4 │──►│ Stage 5 │
│ Visual  │   │ Power   │   │  MCU    │   │  ADC    │   │ Preamp  │
└─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘
                                                              │
┌─────────┐   ┌─────────┐                                     │
│ Stage 7 │◄──│ Stage 6 │◄────────────────────────────────────┘
│ System  │   │  LoRa   │
└─────────┘   └─────────┘
```

---

## 2. Test Equipment Required

| Equipment | Model/Spec | Cal Due | Check |
|-----------|------------|---------|-------|
| Multimeter | Fluke 87V or equiv | _______ | ☐ |
| Oscilloscope | 100MHz, 2ch min | _______ | ☐ |
| Power Supply | 12V 2A adjustable | _______ | ☐ |
| ST-Link V2 | Programmer | N/A | ☐ |
| LoRa Test Receiver | TE-BB01-LORA-001 | N/A | ☐ |
| Signal Generator | 1kHz sine, 100mV | _______ | ☐ |
| PZT Test Fixture | Tap hammer | N/A | ☐ |
| Serial Terminal | PC + USB cable | N/A | ☐ |

---

## 3. Test Record

| Field | Value |
|-------|-------|
| Serial Number | _________________ |
| PCB Rev | _________________ |
| Firmware Ver | _________________ |
| Test Date | _________________ |
| Technician | _________________ |
| Approved By | _________________ |

---

## 4. Stage 1: Visual Inspection (2 min)

| # | Check | Criteria | Result |
|---|-------|----------|--------|
| 1.1 | Solder joints | No bridges, cold joints, or voids | ☐ Pass ☐ Fail |
| 1.2 | Component placement | All ICs correct orientation | ☐ Pass ☐ Fail |
| 1.3 | STM32 Pin 1 | Dot aligned with silkscreen | ☐ Pass ☐ Fail |
| 1.4 | Connectors | Fully seated, no damage | ☐ Pass ☐ Fail |
| 1.5 | PCB | No cracks, scratches, contamination | ☐ Pass ☐ Fail |
| 1.6 | Conformal coating | Even coverage (if applied) | ☐ Pass ☐ Fail ☐ N/A |

**Stage 1 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 5. Stage 2: Power-On Test (3 min)

### Setup
1. Connect 12V power supply (current limit 500mA)
2. Do NOT connect any sensors yet

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 2.1 | Input current (off) | Measure before power-on | <1mA | _____ mA | ☐ Pass ☐ Fail |
| 2.2 | 12V input | Apply 12V, measure TP1 | 12.0V ±0.5V | _____ V | ☐ Pass ☐ Fail |
| 2.3 | Inrush current | Observe on power-on | <500mA peak | _____ mA | ☐ Pass ☐ Fail |
| 2.4 | 5V rail | Measure TP2 | 5.0V ±0.25V | _____ V | ☐ Pass ☐ Fail |
| 2.5 | 3.3V rail | Measure TP3 | 3.3V ±0.1V | _____ V | ☐ Pass ☐ Fail |
| 2.6 | Idle current | Stable after 5s | 30-80mA | _____ mA | ☐ Pass ☐ Fail |
| 2.7 | Thermal check | Touch ICs | No hot spots | ☐ OK | ☐ Pass ☐ Fail |

**Stage 2 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 6. Stage 3: MCU Test (5 min)

### Setup
1. Connect ST-Link to SWD header
2. Open STM32CubeProgrammer

| # | Test | Method | Criteria | Result |
|---|------|--------|----------|--------|
| 3.1 | SWD connect | Connect in Programmer | Device ID: 0x450 (H743) | ☐ Pass ☐ Fail |
| 3.2 | Flash read | Read first 1KB | No errors | ☐ Pass ☐ Fail |
| 3.3 | Flash firmware | Program BB01_vX.X.hex | Verify OK | ☐ Pass ☐ Fail |
| 3.4 | UART output | Open serial 115200 | Boot message appears | ☐ Pass ☐ Fail |
| 3.5 | Status LED | Observe after boot | Blink pattern: 1Hz | ☐ Pass ☐ Fail |
| 3.6 | Watchdog | Wait 30s | No reset (LED steady) | ☐ Pass ☐ Fail |

### Expected Boot Message
```
BB-01 MCU Box v1.0
STM32H743 @ 480MHz
ADC: OK
LoRa: OK
Ready.
```

**Stage 3 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 7. Stage 4: ADC Test (5 min)

### Setup
1. Power on unit
2. Connect signal generator to PZT1 input (J1)

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 4.1 | ADC init | Check serial output | "ADC: OK" | ☐ Yes | ☐ Pass ☐ Fail |
| 4.2 | Ch1 zero | Short J1 input to GND | <10mV (50 counts) | _____ mV | ☐ Pass ☐ Fail |
| 4.3 | Ch1 1V test | Apply 1.000V DC | 1.00V ±1% | _____ V | ☐ Pass ☐ Fail |
| 4.4 | Ch1 noise | Shorted input, 100 samples | <2mV RMS | _____ mV | ☐ Pass ☐ Fail |
| 4.5 | Ch2 zero | Short J2 input | <10mV | _____ mV | ☐ Pass ☐ Fail |
| 4.6 | Ch3 zero | Short J3 input | <10mV | _____ mV | ☐ Pass ☐ Fail |
| 4.7 | Ch4 zero | Short J4 input | <10mV | _____ mV | ☐ Pass ☐ Fail |

**Stage 4 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 8. Stage 5: PZT Preamp Test (5 min)

### Setup
1. Connect signal generator: 1kHz sine, 10mV p-p
2. Connect to J1 (PZT1 input)

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 5.1 | Gain Ch1 | 10mV in → measure TP8 | 1.0V ±10% (100× gain) | _____ V | ☐ Pass ☐ Fail |
| 5.2 | Gain Ch2 | Move gen to J2, measure TP9 | 1.0V ±10% | _____ V | ☐ Pass ☐ Fail |
| 5.3 | Gain Ch3 | Move gen to J3, measure TP10 | 1.0V ±10% | _____ V | ☐ Pass ☐ Fail |
| 5.4 | Gain Ch4 | Move gen to J4, measure TP11 | 1.0V ±10% | _____ V | ☐ Pass ☐ Fail |
| 5.5 | Bandwidth | Sweep to 10kHz | -3dB at ≥8kHz | _____ kHz | ☐ Pass ☐ Fail |
| 5.6 | Noise floor | No input, measure output | <50mV RMS | _____ mV | ☐ Pass ☐ Fail |

**Stage 5 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 9. Stage 6: LoRa Test (5 min)

### Setup
1. Connect antenna to SMA connector
2. Power on LoRa Test Receiver (TE-BB01-LORA-001)
3. Position receiver 3m away

| # | Test | Method | Criteria | Measured | Result |
|---|------|--------|----------|----------|--------|
| 6.1 | LoRa init | Check serial output | "LoRa: OK" | ☐ Yes | ☐ Pass ☐ Fail |
| 6.2 | SPI comms | Firmware reads chip ver | Version: 0x12 | ☐ Yes | ☐ Pass ☐ Fail |
| 6.3 | TX test | Send test packet | Receiver shows packet | ☐ Yes | ☐ Pass ☐ Fail |
| 6.4 | RSSI @ 3m | Read from receiver | > -60 dBm | _____ dBm | ☐ Pass ☐ Fail |
| 6.5 | Packet content | Verify payload | "TEST:SN:xxxxx" | ☐ Yes | ☐ Pass ☐ Fail |
| 6.6 | 10 packet test | Send 10, count received | 10/10 (100%) | ___/10 | ☐ Pass ☐ Fail |

**Stage 6 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 10. Stage 7: System Integration Test (5 min)

### Setup
1. Connect 4× PZT sensors to J1-J4
2. Mount PZT on test plate (or use tap test)
3. LoRa Test Receiver ready

| # | Test | Method | Criteria | Result |
|---|------|--------|----------|--------|
| 7.1 | PZT1 tap | Tap sensor with finger | Serial: "HIT:T1:xxxx" | ☐ Pass ☐ Fail |
| 7.2 | PZT2 tap | Tap sensor | Serial: "HIT:T2:xxxx" | ☐ Pass ☐ Fail |
| 7.3 | PZT3 tap | Tap sensor | Serial: "HIT:T3:xxxx" | ☐ Pass ☐ Fail |
| 7.4 | PZT4 tap | Tap sensor | Serial: "HIT:T4:xxxx" | ☐ Pass ☐ Fail |
| 7.5 | LoRa TX on hit | Tap any sensor | Receiver shows HIT packet | ☐ Pass ☐ Fail |
| 7.6 | False positive | Wait 60s, no tap | No triggers | ☐ Pass ☐ Fail |
| 7.7 | Threshold cal | Run calibration cmd | "CAL: OK" | ☐ Pass ☐ Fail |
| 7.8 | Current (active) | Measure during TX | <150mA | _____ mA | ☐ Pass ☐ Fail |

**Stage 7 Result**: ☐ PASS ☐ FAIL

**Notes**: _________________________________________________

---

## 11. Final Summary

| Stage | Description | Result |
|-------|-------------|--------|
| 1 | Visual Inspection | ☐ Pass ☐ Fail |
| 2 | Power-On Test | ☐ Pass ☐ Fail |
| 3 | MCU Test | ☐ Pass ☐ Fail |
| 4 | ADC Test | ☐ Pass ☐ Fail |
| 5 | Preamp Test | ☐ Pass ☐ Fail |
| 6 | LoRa Test | ☐ Pass ☐ Fail |
| 7 | System Integration | ☐ Pass ☐ Fail |

### Overall Result

| Result | Action |
|--------|--------|
| ☐ **ALL PASS** | Apply "QC PASSED" label, proceed to enclosure assembly |
| ☐ **FAIL** | Tag with failure stage, route to rework |

---

## 12. Failure Codes

| Code | Stage | Description | Common Cause |
|------|-------|-------------|--------------|
| F1-1 | Visual | Solder bridge | Reflow issue |
| F1-2 | Visual | Wrong orientation | Assembly error |
| F2-1 | Power | No 5V output | Buck converter |
| F2-2 | Power | High idle current | Short circuit |
| F3-1 | MCU | SWD no connect | Bad solder on MCU |
| F3-2 | MCU | Flash fail | MCU damaged |
| F4-1 | ADC | High noise | Layout issue |
| F4-2 | ADC | Wrong reading | ADC config |
| F5-1 | Preamp | Low gain | Op-amp issue |
| F5-2 | Preamp | Oscillation | Layout/bypass caps |
| F6-1 | LoRa | No init | SPI connection |
| F6-2 | LoRa | Low RSSI | Antenna/matching |
| F7-1 | System | No detection | Threshold setting |
| F7-2 | System | False triggers | Noise/grounding |

---

## 13. Sign-Off

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Test Technician | | | |
| QC Inspector | | | |

---

## 14. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-26 | Initial release |

---

---

## Related Documents

- [[quality/dfx-review-mcu-box]] - Source of DfT-004 requirement
- [[design/lora-test-receiver]] - LoRa test receiver design (TE-BB01-LORA-001)
- [[design/mcu-box-assembly-instructions]] - Assembly before test
- [[quality/fmea-bb01]] - Failure modes reference
- [[decisions/log]] - DEC-005 MCU selection

---

*Test Procedure TP-BB01-MCU-001*
*Closes DfT-004*
