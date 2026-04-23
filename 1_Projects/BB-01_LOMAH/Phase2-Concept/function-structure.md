# Function Structure: BB-01

> **Version**: 1.0
> **Date**: 2026-01-26
> **Phase**: Conceptual Design (PB2a)
> **Skill Used**: [[skills/pb2a-function-structure]]
> **Input**: [[requirements/srs-v2.0]]

---

## 1. Overall Function

**Transform** bullet impact **into** wireless notification

### System Boundary

| Aspect | Description |
|--------|-------------|
| **Inputs** | Bullet kinetic energy, Solar radiation (optional), Shore power (charging) |
| **Outputs** | Hit notification (target ID, timestamp, signal strength), Status heartbeat |
| **Constraints** | Marine environment, 400m wireless range, Sea State 3, 8hr autonomy |

### Input/Output Classification

| Item | Type | Description |
|------|------|-------------|
| Bullet impact | Energy (Mechanical) | 5.56/7.62mm projectile @ 150-400m |
| Solar radiation | Energy (Optical) | Up to 1120 W/m² (optional) |
| Shore power | Energy (Electrical) | Charging via cable |
| Hit notification | Signal (Digital) | Target ID + timestamp + strength |
| Status heartbeat | Signal (Digital) | System alive every 60s |

---

## 2. Function Decomposition

### Level 1 Functions

| ID | Function | Input | Output | Req Trace |
|----|----------|-------|--------|-----------|
| F1 | Detect mechanical impact | Bullet energy | Electrical signal | KPP.01, SEN.01-08 |
| F2 | Amplify sensor signal | Weak signal | Amplified signal | SEN.06 |
| F3 | Digitize analog signal | Amplified signal | Digital samples | CTP.01, CTP.02 |
| F4 | Process impact data | Digital samples | Hit decision | KPP.03, CTP.04 |
| F5 | Identify target | Hit event | Target ID | KPP.06 |
| F6 | Format notification | Target ID + time | Data packet | COM.04-07 |
| F7 | Transmit data wirelessly | Data packet | RF signal | KPP.05, COM.01-03 |
| F8 | Store electrical energy | External power | Stored energy | PWR.01-03 |
| F9 | Convert solar energy | Solar radiation | Electrical power | PWR.04 |
| F10 | Regulate power supply | Stored energy | Regulated voltage | PWR.08 |
| F11 | Protect electronics | Environment | Safe electronics | ENV.05, EMC.01-03 |
| F12 | Support target plates | Target weight | Positioned targets | MNT.01-05 |
| F13 | Provide platform stability | Wave forces | Stable platform | PLT.01-07, KSA.06 |

### Level 2 Functions

| ID | Function | Parent | Input | Output |
|----|----------|--------|-------|--------|
| F4.1 | Filter noise | F4 | Digital samples | Clean samples |
| F4.2 | Detect threshold crossing | F4 | Clean samples | Trigger event |
| F4.3 | Validate hit pattern | F4 | Trigger event | Confirmed hit |
| F4.4 | Reject false positives | F4 | Trigger event | Filtered events |
| F5.1 | Correlate sensor channels | F5 | Multi-channel data | Source channel |
| F5.2 | Map channel to target | F5 | Source channel | Target ID |
| F10.1 | Step down voltage | F10 | Battery voltage | 3.3V logic |
| F10.2 | Monitor battery state | F10 | Battery voltage | SOC estimate |
| F10.3 | Signal low battery | F10 | SOC estimate | Warning flag |
| F11.1 | Seal enclosure | F11 | Environment | IP67 protection |
| F11.2 | Shield RF interference | F11 | EMI | Clean signals |
| F11.3 | Dissipate heat | F11 | Component heat | Ambient transfer |
| F12.1 | Suspend targets freely | F12 | Target weight | Swinging targets |
| F12.2 | Maintain target spacing | F12 | Multiple targets | Aligned array |
| F13.1 | Provide buoyancy | F13 | System weight | Flotation |
| F13.2 | Resist capsize | F13 | Wave moment | Righting moment |

---

## 3. Function Structure Diagram

```
                              SYSTEM BOUNDARY (BB-01)
┌─────────────────────────────────────────────────────────────────────────────────┐
│                                                                                 │
│   INPUTS                                                              OUTPUTS   │
│                                                                                 │
│                        ═══ Energy flow                                         │
│                        ─── Material flow                                       │
│                        - - Signal flow                                         │
│                                                                                 │
│                     SIGNAL PROCESSING CHAIN                                    │
│   ┌──────────────────────────────────────────────────────────────────────┐    │
│   │                                                                      │    │
│   │  Bullet     ┌─────────┐    ┌─────────┐    ┌─────────┐               │    │
│   │  Impact ═══►│   F1    │───►│   F2    │───►│   F3    │               │    │
│   │             │ Detect  │    │ Amplify │    │Digitize │               │    │
│   │             │ impact  │    │ signal  │    │ signal  │               │    │
│   │             └─────────┘    └─────────┘    └────┬────┘               │    │
│   │                                                │                     │    │
│   │                                                ▼                     │    │
│   │             ┌─────────┐    ┌─────────┐    ┌─────────┐               │    │
│   │             │   F6    │◄───│   F5    │◄───│   F4    │               │    │
│   │             │ Format  │    │Identify │    │ Process │               │    │
│   │             │ packet  │    │ target  │    │  data   │               │    │
│   │             └────┬────┘    └─────────┘    └─────────┘               │    │
│   │                  │                                                   │    │
│   │                  ▼                                                   │    │
│   │             ┌─────────┐                                             │    │
│   │             │   F7    │- - - - - - - - - - - - - - - - - - - ►Hit   │    │
│   │             │Transmit │                                     Notif   │    │
│   │             │  data   │                                             │    │
│   │             └─────────┘                                             │    │
│   │                                                                      │    │
│   └──────────────────────────────────────────────────────────────────────┘    │
│                  ▲                                                             │
│                  ║ (regulated power to all signal chain)                      │
│                  ║                                                             │
│                     POWER SUBSYSTEM                                           │
│   ┌──────────────────────────────────────────────────────────────────────┐    │
│   │                                                                      │    │
│   │  Shore    ┌─────────┐    ┌─────────┐                                │    │
│   │  Power ══►│   F8    │═══►│   F10   │═══► Regulated                  │    │
│   │           │ Store   │    │Regulate │     Power                      │    │
│   │  Solar ══►│ energy  │    │ supply  │- - - - - - - - - - - - ►Low    │    │
│   │     ▲     └─────────┘    └─────────┘                         Batt   │    │
│   │     ║                                                               │    │
│   │  ┌─────────┐                                                        │    │
│   │  │   F9    │                                                        │    │
│   │  │ Convert │                                                        │    │
│   │  │  solar  │                                                        │    │
│   │  └─────────┘                                                        │    │
│   │                                                                      │    │
│   └──────────────────────────────────────────────────────────────────────┘    │
│                                                                                 │
│                     STRUCTURAL SUBSYSTEM                                       │
│   ┌──────────────────────────────────────────────────────────────────────┐    │
│   │                                                                      │    │
│   │  Wave     ┌─────────┐    ┌─────────┐    ┌─────────┐                 │    │
│   │  Forces══►│   F13   │═══►│   F12   │═══►│   F11   │                 │    │
│   │           │Platform │    │ Support │    │ Protect │                 │    │
│   │           │stability│    │ targets │    │ electr. │                 │    │
│   │           └─────────┘    └─────────┘    └─────────┘                 │    │
│   │                                                                      │    │
│   └──────────────────────────────────────────────────────────────────────┘    │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

## 4. Flow Summary

### Energy Flows

| From | To | Type | Description |
|------|-----|------|-------------|
| Bullet | F1 | Mechanical | Projectile kinetic energy → plate vibration |
| Solar | F9 | Optical | Sunlight → electrical (20W max) |
| Shore | F8 | Electrical | 12.8V charging current |
| F8 | F10 | Electrical | 12.8V nominal battery voltage |
| F10 | F1-F7 | Electrical | 3.3V regulated logic power |
| F13 | F12 | Mechanical | Platform stability → frame support |
| F12 | F1 | Mechanical | Frame → target mounting |

### Signal Flows

| From | To | Type | Description |
|------|-----|------|-------------|
| F1 | F2 | Analog | Piezo voltage (mV) |
| F2 | F3 | Analog | Amplified signal (0-3.3V) |
| F3 | F4 | Digital | 16-bit ADC samples @ 50kSPS |
| F4 | F5 | Digital | Hit confirmed + channel |
| F5 | F6 | Digital | Target ID (1-4) |
| F6 | F7 | Digital | LoRa packet (16 bytes) |
| F7 | External | RF | 433MHz LoRa modulation |
| F10 | F7 | Digital | Low battery warning flag |

### Material Flows

| From | To | Type | Description |
|------|-----|------|-------------|
| (None in operational mode) | | | System is self-contained |
| External | F12 | Steel | Target plates (maintenance) |

---

## 5. Requirements Traceability

### KPP Coverage

| Requirement | Function(s) | Covered? |
|-------------|-------------|----------|
| KPP.01 Hit detection 90/95% | F1, F4, F5 | ✅ |
| KPP.02 False positive ≤10/5% | F4.3, F4.4 | ✅ |
| KPP.03 Latency ≤200/100ms | F3, F4, F6 | ✅ |
| KPP.04 SNR ≥15/20dB | F1, F2 | ✅ |
| KPP.05 Range ≥400/600m | F7 | ✅ |
| KPP.06 Target ID 90/95% | F5 | ✅ |

### KSA Coverage

| Requirement | Function(s) | Covered? |
|-------------|-------------|----------|
| KSA.01 Operating time ≥8/24hr | F8, F9, F10 | ✅ |
| KSA.02 Unit cost ≤60/30M VND | All (BOM driven) | ✅ |
| KSA.03 MTBF ≥2000/3000hr | F11 (protection) | ✅ |
| KSA.04 Local content ≥50/70% | All (sourcing driven) | ✅ |
| KSA.05 Setup time ≤30/15min | F12, F13 | ✅ |
| KSA.06 Sea State 3/4 | F13 | ✅ |

### Other Key Requirements

| Category | Requirements | Functions |
|----------|--------------|-----------|
| SEN | SEN.01-08 | F1, F2 |
| COM | COM.01-08 | F6, F7 |
| PWR | PWR.01-08 | F8, F9, F10 |
| ENV | ENV.01-12 | F11 |
| MNT | MNT.01-05 | F12 |
| PLT | PLT.01-07 | F13 |

---

## 6. Function-Solution Independence Check

| Function | Abstract? | No Solution Embedded? |
|----------|-----------|----------------------|
| F1: Detect mechanical impact | ✅ | ✅ (not "PZT sensor") |
| F2: Amplify sensor signal | ✅ | ✅ (not "op-amp") |
| F3: Digitize analog signal | ✅ | ✅ (not "ADC") |
| F4: Process impact data | ✅ | ✅ (not "DSP algorithm") |
| F5: Identify target | ✅ | ✅ (not "channel mapping") |
| F6: Format notification | ✅ | ✅ (not "LoRa packet") |
| F7: Transmit data wirelessly | ✅ | ✅ (not "LoRa radio") |
| F8: Store electrical energy | ✅ | ✅ (not "LiFePO4 battery") |
| F9: Convert solar energy | ✅ | ✅ (not "solar panel") |
| F10: Regulate power supply | ✅ | ✅ (not "buck converter") |
| F11: Protect electronics | ✅ | ✅ (not "IP67 enclosure") |
| F12: Support target plates | ✅ | ✅ (not "chain mount") |
| F13: Provide platform stability | ✅ | ✅ (not "catamaran") |

---

## 7. Validation Checklist

- [x] Overall function captures system purpose
- [x] All KPPs traceable to functions
- [x] All KSAs traceable to functions
- [x] Sub-functions use Verb + Noun format
- [x] No solutions embedded in function names
- [x] All inputs accounted for (bullet, solar, shore power)
- [x] All outputs accounted for (notification, heartbeat, warnings)
- [x] Energy flows conserved (in = out + losses)
- [x] Signal flows show processing chain
- [x] Appropriate level of detail (2 levels sufficient)

---

## 8. Next Steps

- [ ] Proceed to morphological matrix (PB2b)
- [ ] Generate 3-5 solution principles for each function
- [ ] Check physical compatibility between solutions
- [ ] Generate 3-5 concept variants

---

## Appendix: Function Dictionary

| ID | Function | Definition | Examples of Solutions |
|----|----------|------------|----------------------|
| F1 | Detect mechanical impact | Convert mechanical vibration to electrical signal | Piezo, accelerometer, strain gauge, microphone |
| F2 | Amplify sensor signal | Increase signal amplitude to usable level | Op-amp, instrumentation amp, charge amp |
| F3 | Digitize analog signal | Convert continuous signal to discrete samples | ADC (SAR, sigma-delta, pipeline) |
| F4 | Process impact data | Analyze samples to determine hit/no-hit | MCU, DSP, FPGA, threshold comparator |
| F5 | Identify target | Determine which of 4 targets was hit | Channel correlation, timing analysis |
| F6 | Format notification | Package hit data for transmission | Protocol encoding, packet formatting |
| F7 | Transmit data wirelessly | Send data over RF link | LoRa, WiFi, Zigbee, cellular, radio |
| F8 | Store electrical energy | Hold energy for later use | Battery (Li-ion, LiFePO4, lead-acid), supercap |
| F9 | Convert solar energy | Transform sunlight to electricity | Solar panel (mono, poly, thin-film) |
| F10 | Regulate power supply | Provide stable voltage from variable source | Buck, boost, LDO, charge pump |
| F11 | Protect electronics | Shield from environment and EMI | Enclosure, potting, conformal coating |
| F12 | Support target plates | Hold targets in position for firing | Chain, cable, rigid mount, spring mount |
| F13 | Provide platform stability | Keep system upright in waves | Catamaran, trimaran, monohull, raft |

---

---

## Related Documents

### Inputs
- [[requirements/srs-v2.0]] - System requirements (KPP, KSA)
- [[requirements/requirements-summary]] - Quick reference

### Outputs
- [[design/morphological-matrix]] - Solution principles (PB2b)
- [[design/vdi-2225-evaluation]] - Concept evaluation (PB2c)

### Quality
- [[quality/fmea-bb01]] - Failure modes per function
- [[quality/dfx-review-mcu-box]] - MCU box design review

---

*Function Structure v1.0*
*BB-01 Naval Target System*
*Ready for PB2b Morphological Matrix*
