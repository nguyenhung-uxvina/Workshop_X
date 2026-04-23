# FMEA: BB-01 Naval Target System

> **Document**: FMEA-BB01-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Status**: COMPLETE
> **Gate**: Gate 2 Preparation
> **Input**: [[requirements/srs-v2.0]], [[design/function-structure]], [[quality/dfx-review-mcu-box]]

---

## Document History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0 | 2026-01-27 | Initial FMEA | - |

---

## 1. Scope

### System Boundary

| Aspect | Description |
|--------|-------------|
| **System** | BB-01 Floating Naval Target with Automatic Hit Detection |
| **Subsystems** | Impact Detection, Signal Processing, Communication, Power, Structural |
| **Operating Environment** | Marine (Sea State 3), 0-50°C, 95% RH, salt spray |
| **Mission Duration** | 8-24 hours continuous operation |
| **Engagement** | 5.56/7.62mm projectiles at 150-400m range |

### FMEA Methodology

| Parameter | Definition |
|-----------|------------|
| **Severity (S)** | Impact on mission/safety (1=negligible, 10=catastrophic) |
| **Occurrence (O)** | Likelihood of failure (1=extremely unlikely, 10=almost certain) |
| **Detection (D)** | Ability to detect before mission impact (1=certain, 10=impossible) |
| **RPN** | Risk Priority Number = S × O × D (max 1000) |
| **Action Threshold** | RPN ≥ 100 requires mitigation action |

---

## 2. System Block Diagram Reference

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           BB-01 SYSTEM                                       │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ IMPACT DETECTION SUBSYSTEM                                            │  │
│  │  [PZT Sensor ×4] → [Preamp TL074] → [STM32H743 ADC] → [Processing]   │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                          │                                   │
│                                          ▼                                   │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ COMMUNICATION SUBSYSTEM                                               │  │
│  │  [Data Packet] → [SX1276 LoRa] → [RF 433MHz] → [Shore Station]       │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ POWER SUBSYSTEM                                                       │  │
│  │  [Solar 20W] → [LiFePO4 12.8V] → [MP1584 Buck] → [AMS1117 LDO] → 3.3V│  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ STRUCTURAL SUBSYSTEM                                                  │  │
│  │  [Catamaran] → [Steel Frame] → [Chain Mount] → [Target Plates ×4]    │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
│  ┌───────────────────────────────────────────────────────────────────────┐  │
│  │ ENCLOSURE SUBSYSTEM                                                   │  │
│  │  [IP67 Box] + [Cable Glands ×6] + [Conformal Coating]                │  │
│  └───────────────────────────────────────────────────────────────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

## 3. FMEA Worksheet

### 3.1 Impact Detection Subsystem

| ID | Component | Function | Failure Mode | Failure Effect | S | O | D | RPN | Recommended Action |
|----|-----------|----------|--------------|----------------|---|---|---|-----|-------------------|
| DET-01 | PZT Sensor | Detect impact vibration | Sensor cracked/broken | No detection on affected target | 8 | 3 | 6 | **144** | Marine epoxy potting; spare sensors |
| DET-02 | PZT Sensor | Detect impact vibration | Sensor debonded from plate | Weak/no signal | 7 | 4 | 5 | **140** | Qualified bonding adhesive; pull test |
| DET-03 | PZT Sensor | Detect impact vibration | Reduced sensitivity (aging) | Missed impacts at distance | 6 | 3 | 7 | **126** | Annual calibration check |
| DET-04 | PZT Sensor | Detect impact vibration | Water ingress to potting | Short circuit, erratic output | 7 | 3 | 5 | **105** | IP68 potting; insulation test |
| DET-05 | PZT Cable | Transmit signal to MCU box | Cable severed (bullet/abrasion) | No signal from target | 8 | 3 | 3 | 72 | Armored cable jacket; routing protection |
| DET-06 | PZT Cable | Transmit signal to MCU box | Connector corrosion | Intermittent signal | 6 | 4 | 5 | **120** | Gold-plated M12 connectors |
| DET-07 | TL074 Preamp | Amplify PZT signal | Op-amp failure (open) | No signal amplification | 8 | 2 | 4 | 64 | Quality parts; burn-in test |
| DET-08 | TL074 Preamp | Amplify PZT signal | Gain drift | Incorrect threshold detection | 5 | 3 | 6 | 90 | Temperature compensation; auto-cal |
| DET-09 | TL074 Preamp | Amplify PZT signal | Oscillation/instability | False triggers | 6 | 3 | 4 | 72 | Proper layout; decoupling caps |
| DET-10 | STM32 ADC | Digitize analog signal | ADC channel failure | No data from affected target | 8 | 2 | 3 | 48 | Use multiple ADC peripherals |
| DET-11 | STM32 ADC | Digitize analog signal | ADC saturation | Clipped waveform, missed hits | 6 | 3 | 5 | 90 | Input protection; gain limiting |
| DET-12 | STM32 ADC | Digitize analog signal | Noise/interference | False triggers | 5 | 4 | 4 | 80 | Shielded cables; filtered supply |

### 3.2 Signal Processing Subsystem

| ID | Component | Function | Failure Mode | Failure Effect | S | O | D | RPN | Recommended Action |
|----|-----------|----------|--------------|----------------|---|---|---|-----|-------------------|
| MCU-01 | STM32H743 | Process impact data | MCU lockup (firmware) | System unresponsive | 9 | 3 | 4 | **108** | Watchdog timer; fail-safe reset |
| MCU-02 | STM32H743 | Process impact data | MCU latch-up (ESD/overvoltage) | System dead | 9 | 2 | 7 | **126** | ESD protection; TVS diodes |
| MCU-03 | STM32H743 | Process impact data | Flash corruption | Incorrect operation | 8 | 2 | 6 | 96 | CRC check; dual-bank flash |
| MCU-04 | STM32H743 | Process impact data | Clock failure | System dead or erratic | 9 | 2 | 5 | 90 | External crystal; clock monitoring |
| MCU-05 | Algorithm | Detect hits | Threshold too high | Missed impacts (false negative) | 7 | 3 | 5 | **105** | Adaptive threshold; field calibration |
| MCU-06 | Algorithm | Detect hits | Threshold too low | False triggers (false positive) | 5 | 4 | 4 | 80 | Debounce logic; pattern validation |
| MCU-07 | Algorithm | Identify target | Channel misidentification | Wrong target reported | 6 | 3 | 4 | 72 | Channel mapping verification |
| MCU-08 | Firmware | System operation | Firmware bug | Unpredictable behavior | 7 | 3 | 5 | **105** | Code review; regression testing |

### 3.3 Communication Subsystem

| ID | Component | Function | Failure Mode | Failure Effect | S | O | D | RPN | Recommended Action |
|----|-----------|----------|--------------|----------------|---|---|---|-----|-------------------|
| COM-01 | SX1276 LoRa | Transmit data | Module failure | No communication to shore | 9 | 2 | 3 | 54 | Quality module; spare |
| COM-02 | SX1276 LoRa | Transmit data | TX power degradation | Reduced range | 6 | 3 | 6 | **108** | Periodic range test; RSSI monitoring |
| COM-03 | SX1276 LoRa | Transmit data | SPI bus failure | Module not responding | 8 | 2 | 4 | 64 | Bus timeout; module reset |
| COM-04 | LoRa Antenna | Radiate RF signal | Antenna disconnected | Severely reduced range | 8 | 3 | 5 | **120** | Secure SMA connection; inspection |
| COM-05 | LoRa Antenna | Radiate RF signal | Antenna damaged (bullet) | Reduced range or no TX | 8 | 3 | 5 | **120** | Protected mounting; spare antenna |
| COM-06 | LoRa Antenna | Radiate RF signal | Antenna corrosion | Gradual range degradation | 5 | 4 | 6 | **120** | Marine-grade antenna; protective coating |
| COM-07 | RF Channel | Carry data | Interference (external) | Packet loss | 5 | 4 | 5 | **100** | Frequency hopping; error correction |
| COM-08 | RF Channel | Carry data | Multi-path fading | Intermittent reception | 5 | 4 | 5 | **100** | Diversity antenna (v2); retransmit |
| COM-09 | Protocol | Data integrity | Packet corruption | Invalid data at shore | 4 | 3 | 3 | 36 | CRC validation; ACK/retry |
| COM-10 | Shore Station | Receive data | Receiver failure | All data lost | 9 | 2 | 2 | 36 | Redundant receiver (recommended) |

### 3.4 Power Subsystem

| ID | Component | Function | Failure Mode | Failure Effect | S | O | D | RPN | Recommended Action |
|----|-----------|----------|--------------|----------------|---|---|---|-----|-------------------|
| PWR-01 | LiFePO4 Battery | Store energy | Cell failure (open) | Reduced capacity or dead | 9 | 2 | 4 | 72 | Quality cells; BMS protection |
| PWR-02 | LiFePO4 Battery | Store energy | Cell failure (short) | Thermal event | 9 | 1 | 4 | 36 | LiFePO4 chemistry (inherently safe) |
| PWR-03 | LiFePO4 Battery | Store energy | Deep discharge | Permanent damage | 7 | 3 | 3 | 63 | BMS low-voltage cutoff |
| PWR-04 | LiFePO4 Battery | Store energy | Over-discharge in storage | Reduced life | 5 | 4 | 6 | **120** | Storage charge protocol; reminder |
| PWR-05 | BMS | Protect battery | BMS failure | No protection active | 7 | 2 | 6 | 84 | Quality BMS; redundant protection |
| PWR-06 | Solar Panel | Convert solar | Panel cracked (impact) | No solar charging | 5 | 3 | 2 | 30 | Protected mounting; spare |
| PWR-07 | Solar Panel | Convert solar | Partial shading | Reduced charging | 4 | 5 | 2 | 40 | Clear mounting area |
| PWR-08 | Solar Panel | Convert solar | Connector failure | No solar charging | 5 | 3 | 4 | 60 | Weatherproof connectors |
| PWR-09 | MP1584 Buck | Regulate 5V | Regulator failure | No 5V rail | 9 | 2 | 3 | 54 | Dual regulator (v2) |
| PWR-10 | MP1584 Buck | Regulate 5V | Output noise | ADC interference | 5 | 4 | 5 | **100** | LC filter; layout optimization |
| PWR-11 | AMS1117 LDO | Regulate 3.3V | LDO failure | System dead | 9 | 2 | 3 | 54 | Quality LDO; thermal management |
| PWR-12 | AMS1117 LDO | Regulate 3.3V | Thermal shutdown | System resets | 6 | 3 | 4 | 72 | Adequate heatsinking; derating |
| PWR-13 | Power Cable | Deliver power | Cable severed | System dead | 9 | 2 | 3 | 54 | Protected routing; strain relief |
| PWR-14 | Power Connector | Deliver power | Connector corrosion | Intermittent power | 7 | 4 | 5 | **140** | Weatherproof M12; contact grease |
| PWR-15 | TVS Diode | Protect from surge | TVS failure (short) | Continuous current draw | 6 | 2 | 5 | 60 | Fused input; quality TVS |
| PWR-16 | TVS Diode | Protect from surge | TVS failure (open) | No surge protection | 5 | 2 | 7 | 70 | Redundant TVS |

### 3.5 Structural Subsystem

| ID | Component | Function | Failure Mode | Failure Effect | S | O | D | RPN | Recommended Action |
|----|-----------|----------|--------------|----------------|---|---|---|-----|-------------------|
| STR-01 | Catamaran Hull | Provide buoyancy | Hull puncture | Water ingress, sinking | 9 | 2 | 4 | 72 | Foam-filled compartments |
| STR-02 | Catamaran Hull | Provide buoyancy | Hull delamination | Reduced structural integrity | 6 | 3 | 6 | **108** | Quality construction; inspection |
| STR-03 | Catamaran Hull | Provide stability | Capsize | System loss | 9 | 2 | 3 | 54 | Design for SS4; buoyancy reserve |
| STR-04 | Steel Frame | Support targets | Frame weld failure | Target misalignment/loss | 7 | 2 | 4 | 56 | Qualified welding; inspection |
| STR-05 | Steel Frame | Support targets | Corrosion (galvanize failure) | Structural weakness | 6 | 3 | 5 | 90 | Hot-dip galvanize ≥65µm; touch-up |
| STR-06 | Chain Mount | Suspend targets | Chain link failure | Target falls into water | 7 | 3 | 4 | 84 | SS316 chain; monthly inspection |
| STR-07 | Chain Mount | Suspend targets | Chain seized (corrosion) | Target doesn't swing freely | 6 | 4 | 3 | 72 | SS316 chain; lubrication |
| STR-08 | Chain Mount | Suspend targets | Shackle failure | Target falls | 7 | 2 | 4 | 56 | Rated shackles; inspection |
| STR-09 | Target Plate | Present target | Plate penetration | Unsafe backstop | 8 | 2 | 2 | 32 | AR400+ steel; thickness adequate |
| STR-10 | Target Plate | Present target | Plate deformation | PZT sensor damage | 6 | 3 | 3 | 54 | Sensor mounting location |
| STR-11 | Tow Point | Enable repositioning | Tow point failure | System adrift | 7 | 2 | 3 | 42 | Rated 2× system weight; inspection |
| STR-12 | Anchor System | Hold position | Anchor dragging | System drift | 5 | 4 | 3 | 60 | Adequate anchor size; bottom type |

### 3.6 Enclosure Subsystem

| ID | Component | Function | Failure Mode | Failure Effect | S | O | D | RPN | Recommended Action |
|----|-----------|----------|--------------|----------------|---|---|---|-----|-------------------|
| ENC-01 | IP67 Box | Protect electronics | Lid gasket failure | Water ingress | 8 | 3 | 6 | **144** | Quality gasket; silicone grease |
| ENC-02 | IP67 Box | Protect electronics | Box cracked (impact) | Water ingress | 8 | 2 | 3 | 48 | Mounting protection |
| ENC-03 | Cable Gland | Seal cable entry | Gland not torqued | Water ingress | 8 | 3 | 4 | 96 | Torque spec (2-3Nm); checklist |
| ENC-04 | Cable Gland | Seal cable entry | Gland degradation (UV) | Seal failure | 6 | 4 | 5 | **120** | UV-resistant nylon; inspection |
| ENC-05 | Cable Gland | Seal cable entry | Wrong cable diameter | Seal bypass | 7 | 2 | 3 | 42 | BOM cable spec; incoming QC |
| ENC-06 | Conformal Coat | Secondary protection | Coating incomplete | Local corrosion | 5 | 3 | 5 | 75 | UV tracer in coating; inspection |
| ENC-07 | Conformal Coat | Secondary protection | Coating cracked | Moisture path | 5 | 3 | 6 | 90 | Flexible acrylic; thermal cycling test |
| ENC-08 | Vent/Breather | Pressure equalization | Vent blocked | Pressure differential damage | 5 | 3 | 6 | 90 | Gore-Tex vent; inspection |

---

## 4. Risk Summary

### 4.1 RPN Distribution

| RPN Range | Risk Level | Count | Percentage |
|-----------|------------|-------|------------|
| 1-50 | Low | 15 | 28% |
| 51-99 | Medium | 22 | 42% |
| **100-199** | **High** | **16** | **30%** |
| 200+ | Critical | 0 | 0% |
| **Total** | | **53** | 100% |

### 4.2 High-Risk Items (RPN ≥ 100)

| Rank | ID | Component | Failure Mode | RPN | Priority |
|------|-----|-----------|--------------|-----|----------|
| 1 | DET-01 | PZT Sensor | Cracked/broken | 144 | **HIGH** |
| 2 | ENC-01 | IP67 Box | Gasket failure | 144 | **HIGH** |
| 3 | DET-02 | PZT Sensor | Debonded from plate | 140 | **HIGH** |
| 4 | PWR-14 | Power Connector | Corrosion | 140 | **HIGH** |
| 5 | DET-03 | PZT Sensor | Reduced sensitivity | 126 | HIGH |
| 6 | MCU-02 | STM32H743 | Latch-up | 126 | HIGH |
| 7 | DET-06 | PZT Cable | Connector corrosion | 120 | HIGH |
| 8 | COM-04 | LoRa Antenna | Disconnected | 120 | HIGH |
| 9 | COM-05 | LoRa Antenna | Damaged | 120 | HIGH |
| 10 | COM-06 | LoRa Antenna | Corrosion | 120 | HIGH |
| 11 | ENC-04 | Cable Gland | UV degradation | 120 | HIGH |
| 12 | PWR-04 | Battery | Over-discharge storage | 120 | HIGH |
| 13 | MCU-01 | STM32H743 | Lockup | 108 | HIGH |
| 14 | COM-02 | SX1276 LoRa | TX power degradation | 108 | HIGH |
| 15 | STR-02 | Catamaran Hull | Delamination | 108 | HIGH |
| 16 | DET-04 | PZT Sensor | Water ingress | 105 | HIGH |
| 17 | MCU-05 | Algorithm | Threshold too high | 105 | HIGH |
| 18 | MCU-08 | Firmware | Bug | 105 | HIGH |
| 19 | COM-07 | RF Channel | Interference | 100 | HIGH |
| 20 | COM-08 | RF Channel | Multi-path fading | 100 | HIGH |
| 21 | PWR-10 | MP1584 Buck | Output noise | 100 | HIGH |

---

## 5. Mitigation Action Plan

### 5.1 Design Actions (Before Prototype)

| ID | Risk ID | Action | Owner | Due | Status |
|----|---------|--------|-------|-----|--------|
| A-01 | DET-01,02 | Specify qualified PZT bonding adhesive (marine epoxy) | HW Lead | Week 2 | 🟡 Open |
| A-02 | DET-01,02 | Define PZT pull test acceptance criteria (>5N) | QC Lead | Week 2 | 🟡 Open |
| A-03 | DET-04 | Specify IP68 sensor potting procedure | HW Lead | Week 2 | 🟡 Open |
| A-04 | MCU-02 | Add TVS diodes on all external signal lines | HW Lead | PCB Rev | 🟡 Open |
| A-05 | MCU-01 | Implement watchdog timer in firmware | SW Lead | Week 3 | 🟡 Open |
| A-06 | COM-04,05,06 | Specify marine-grade SMA antenna with protective radome | HW Lead | Week 2 | 🟡 Open |
| A-07 | PWR-14 | Specify weatherproof M12 power connectors with contact grease | HW Lead | Week 2 | 🟡 Open |
| A-08 | PWR-10 | Add LC filter on buck converter output | HW Lead | PCB Rev | 🟡 Open |
| A-09 | ENC-01 | Specify silicone gasket grease for box seal | Proc. | Week 2 | 🟡 Open |
| A-10 | ENC-04 | Specify UV-resistant PG glands (black nylon PA66) | Proc. | Week 2 | 🟡 Open |

### 5.2 Process Actions (During Production)

| ID | Risk ID | Action | Owner | Due | Status |
|----|---------|--------|-------|-----|--------|
| P-01 | DET-02 | Add PZT pull test to incoming QC | QC Lead | Week 4 | 🟡 Open |
| P-02 | ENC-03 | Add cable gland torque verification to assembly checklist | QC Lead | Week 3 | 🟡 Open |
| P-03 | DET-03 | Define annual calibration procedure | SW Lead | Week 6 | 🟡 Open |
| P-04 | PWR-04 | Create battery storage protocol (50% SOC) | Ops Lead | Week 4 | 🟡 Open |
| P-05 | MCU-08 | Implement firmware code review process | SW Lead | Week 3 | 🟡 Open |

### 5.3 Operational Actions (During Use)

| ID | Risk ID | Action | Owner | Due | Status |
|----|---------|--------|-------|-----|--------|
| O-01 | STR-06,07 | Create monthly chain inspection checklist | Ops Lead | Week 5 | 🟡 Open |
| O-02 | COM-02 | Add RSSI monitoring to shore station display | SW Lead | Week 4 | 🟡 Open |
| O-03 | ENC-01,04 | Create pre-deployment visual inspection checklist | Ops Lead | Week 5 | 🟡 Open |
| O-04 | MCU-05 | Define field calibration procedure | SW Lead | Week 6 | 🟡 Open |

### 5.4 Design Improvements (Version 2)

| ID | Risk ID | Action | Benefit | Status |
|----|---------|--------|---------|--------|
| V2-01 | COM-01,02 | Add redundant LoRa module | SPOF elimination | Planned |
| V2-02 | COM-07,08 | Implement frequency hopping spread spectrum | Interference immunity | Planned |
| V2-03 | PWR-09 | Add redundant buck converter | Power redundancy | Planned |
| V2-04 | MCU-01 | Implement dual-bank firmware with CRC | Firmware resilience | Planned |

---

## 6. Criticality Matrix

```
              OCCURRENCE
              1    2    3    4    5    6    7    8    9    10
         ┌────────────────────────────────────────────────────
       10│
        9│      MCU-01   DET-01       COM-08
S       8│      ENC-01   DET-02
E       7│      MCU-02   MCU-05       PWR-14
V       6│              DET-03       ENC-04
E       5│              DET-04       PWR-10
R       4│
I       3│
T       2│
Y       1│
         └────────────────────────────────────────────────────

Legend: Items shown are high-RPN (≥100) failures
```

---

## 7. Summary Statistics

### By Subsystem

| Subsystem | Items | High Risk (≥100) | Avg RPN |
|-----------|-------|------------------|---------|
| Impact Detection | 12 | 5 | 98 |
| Signal Processing | 8 | 4 | 96 |
| Communication | 10 | 6 | 90 |
| Power | 16 | 3 | 70 |
| Structural | 12 | 1 | 63 |
| Enclosure | 8 | 2 | 88 |
| **Total** | **53** | **21** | **79** |

### Risk Reduction Targets

| Phase | Current RPN Sum | Target RPN Sum | Reduction |
|-------|-----------------|----------------|-----------|
| Before Prototype | 4,187 | 3,350 | 20% |
| After V2 Improvements | - | 2,500 | 40% |

---

## 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Hardware Lead | | | ☐ |
| Software Lead | | | ☐ |
| QC Lead | | | ☐ |
| Project Lead | | | ☐ |

---

## 9. References

| Document | Description |
|----------|-------------|
| [[requirements/srs-v2.0]] | System Requirements Specification |
| [[design/function-structure]] | Function decomposition |
| [[quality/dfx-review-mcu-box]] | DfX analysis |
| [[design/mtbf-improvement-plan]] | MTBF improvement roadmap |
| MIL-STD-1629A | FMEA methodology reference |

---

## Appendix A: Severity Rating Scale

| Rating | Description | Criteria |
|--------|-------------|----------|
| 10 | Hazardous without warning | Failure affects safe operation without warning |
| 9 | Hazardous with warning | Failure affects safe operation with warning |
| 8 | Very high | System inoperable, mission failure |
| 7 | High | System operable but significantly degraded |
| 6 | Moderate | System operable with degraded performance |
| 5 | Low | System operable with minor performance impact |
| 4 | Very low | Minor system impact, fit/finish issue |
| 3 | Minor | Slight inconvenience, no performance impact |
| 2 | Very minor | Negligible effect |
| 1 | None | No effect |

## Appendix B: Occurrence Rating Scale

| Rating | Description | Probability |
|--------|-------------|-------------|
| 10 | Almost certain | >1 in 2 |
| 9 | Very high | 1 in 3 |
| 8 | High | 1 in 8 |
| 7 | Moderately high | 1 in 20 |
| 6 | Moderate | 1 in 80 |
| 5 | Low | 1 in 400 |
| 4 | Very low | 1 in 2,000 |
| 3 | Remote | 1 in 15,000 |
| 2 | Very remote | 1 in 150,000 |
| 1 | Nearly impossible | <1 in 1,500,000 |

## Appendix C: Detection Rating Scale

| Rating | Description | Criteria |
|--------|-------------|----------|
| 10 | Impossible | No known detection method |
| 9 | Very remote | Very remote chance of detection |
| 8 | Remote | Remote chance of detection |
| 7 | Very low | Very low chance of detection |
| 6 | Low | Low chance of detection |
| 5 | Moderate | Moderate chance of detection |
| 4 | Moderately high | Moderately high chance of detection |
| 3 | High | High chance of detection |
| 2 | Very high | Very high chance of detection |
| 1 | Almost certain | Detection almost certain |

---

*FMEA-BB01-001 Version 1.0*
*BB-01 Naval Target System*
*53 failure modes analyzed, 21 high-risk items identified*
*Gate 2 Preparation*
