# System Requirements Specification: BB-01

> **Document**: SRS-BB01-001
> **Version**: 2.0
> **Date**: 2026-01-26
> **Classification**: CONTROLLED
> **Status**: 🟡 DRAFT
> **Skill Used**: [[skills/pb1-clarify-task]]
> **Reference**: Điều 124, Bài 3: Bắn mục tiêu trên mặt nước

---

## Document History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.4 | 2026-01-26 | Requirements with DfX integration | - |
| 2.0 | 2026-01-26 | Defense standards format (KPP/T/O/MIL-STD) | - |

---

## 1. Key Performance Parameters (KPP)

**KPPs are mission-critical. Failure = system rejection.**

| ID | Requirement | Threshold (T) | Objective (O) | Unit | Verification |
|----|-------------|---------------|---------------|------|--------------|
| KPP.01 | Hit detection probability | 90% | 95% | Pd | T |
| KPP.02 | False positive rate | ≤10% | ≤5% | per hour | T |
| KPP.03 | Detection latency | ≤200ms | ≤100ms | ms | T |
| KPP.04 | Signal-to-noise ratio | ≥15dB | ≥20dB | dB | T |
| KPP.05 | Wireless communication range | ≥400m | ≥600m | m | T |
| KPP.06 | Target identification accuracy | 90% | 95% | % | T |

---

## 2. Key System Attributes (KSA)

**KSAs are important but may be traded.**

| ID | Requirement | Threshold | Objective | Unit | Verification |
|----|-------------|-----------|-----------|------|--------------|
| KSA.01 | Operating time (battery) | ≥8 | ≥24 | hours | T |
| KSA.02 | Unit cost | ≤60M | ≤30M | VND | A |
| KSA.03 | MTBF | ≥2,000 | ≥3,000 | hours | A |
| KSA.04 | Local content | ≥50% | ≥70% | % value | A |
| KSA.05 | Setup time | ≤30 | ≤15 | minutes | D |
| KSA.06 | Platform stability | Sea State 3 | Sea State 4 | Beaufort | T |

---

## 3. Target Configuration Requirements (TGT)

| ID | Requirement | Value | Unit | T/O | Source | Verification |
|----|-------------|-------|------|-----|--------|--------------|
| TGT.01 | Bia số 7e (hình người đứng) | 2 | units | T | Điều 124 | I |
| TGT.02 | Bia số 6c (địch nằm bắn) | 1 | unit | T | Điều 124 | I |
| TGT.03 | Bia số 10 (75cm) | 1 | unit | T | Điều 124 | I |
| TGT.04 | Total targets per cluster | 4 | units | T | Điều 124 | I |
| TGT.05 | Target material | AR400+ steel | - | T | Ballistic | T |
| TGT.06 | Target spacing | ≥50cm | mm | T | Safety | I |
| TGT.07 | Reflective paint | Yes | - | O | Night ops | I |

### Target Specifications

| Target | Designation | Dimensions | Quantity |
|--------|-------------|------------|----------|
| Bia 7e | Hình người đứng/di chuyển | Standard silhouette | 2 |
| Bia 6c | Hình địch nằm bắn | Prone position | 1 |
| Bia số 10 | Tên địch bắn trung/đại liên | 75cm diameter | 1 |

---

## 4. Mounting System Requirements (MNT)

| ID | Requirement | Value | Unit | T/O | Source | Verification |
|----|-------------|-------|------|-----|--------|--------------|
| MNT.01 | Mounting method | Chain-suspended | - | T | Acoustic | I |
| MNT.02 | Target arrangement | Horizontal line | - | T | Ops | I |
| MNT.03 | Free swing capability | Required | - | T | Sensor | D |
| MNT.04 | Chain inspection interval | Monthly | - | O | Maint | A |
| MNT.05 | Chain material | Galvanized steel | - | T | Marine | I |

---

## 5. Impact Sensor Requirements (SEN)

> **Decision**: DEC-002 - Piezoelectric (PZT) selected
> **Rationale**: No SPL saturation, local sourcing, 58% cost reduction

| ID | Requirement | Threshold | Objective | Unit | Source | Verification |
|----|-------------|-----------|-----------|------|--------|--------------|
| SEN.01 | Sensor type | Piezoelectric (PZT) | - | - | DEC-002 | I |
| SEN.02 | Sensors per target | 1 | 2 | units | Design | I |
| SEN.03 | Total sensors | 4 | 5 | units | Design | I |
| SEN.04 | Frequency response | 100Hz-10kHz | 50Hz-20kHz | Hz | Impact | T |
| SEN.05 | Impact saturation | None | - | - | KPP.01 | T |
| SEN.06 | SNR | ≥15dB | ≥20dB | dB | KPP.04 | T |
| SEN.07 | Detection latency | ≤200ms | ≤100ms | ms | KPP.03 | T |
| SEN.08 | Sensor waterproofing | IP67 | IP68 | - | Marine | T |

### Sensor Technical Specifications

```yaml
sensor:
  type: "Piezoelectric ceramic disc (PZT)"
  diameter: "27mm"
  resonant_freq: "2-4 kHz"
  output: "Analog voltage (mV range)"
  mounting: "Epoxy-bonded to steel plate"
  protection: "Marine epoxy potting"

signal_conditioning:
  preamp: "High-impedance buffer (10MΩ)"
  filter: "Bandpass 500Hz - 10kHz"
  gain: "100× (40dB)"
  adc: "STM32H743 internal 16-bit"
```

---

## 6. Ballistic Requirements (BAL)

| ID | Requirement | Threshold | Objective | Unit | Source | Verification |
|----|-------------|-----------|-----------|------|--------|--------------|
| BAL.01 | Engagement range minimum | 150 | 100 | m | Điều 124 | A |
| BAL.02 | Engagement range maximum | 400 | 500 | m | Điều 124 | A |
| BAL.03 | Caliber: 5.56×45mm | Required | - | - | VPA | T |
| BAL.04 | Caliber: 7.62×39mm | Required | - | - | VPA | T |
| BAL.05 | Caliber: 7.62×54mmR | Required | - | - | VPA | T |
| BAL.06 | Target penetration resistance | No through-holes | - | - | Safety | T |

### Supported Weapons

| Weapon | Caliber | Range | Priority |
|--------|---------|-------|----------|
| AK-47/AKM | 7.62×39mm | 150-400m | High |
| AK-101/M16 | 5.56×45mm | 150-400m | High |
| PKM/SVD | 7.62×54mmR | 150-400m | High |

---

## 7. Communication Requirements (COM)

| ID | Requirement | Threshold | Objective | Unit | Source | Verification |
|----|-------------|-----------|-----------|------|--------|--------------|
| COM.01 | Wireless range | ≥400m | ≥600m | m | KPP.05 | T |
| COM.02 | Protocol | LoRa | - | - | Design | D |
| COM.03 | Frequency | 433MHz | - | MHz | Local reg | A |
| COM.04 | Data: Hit notification | Required | - | - | Ops | D |
| COM.05 | Data: Target ID | Required | - | - | Ops | D |
| COM.06 | Data: Timestamp | Required | - | - | Scoring | D |
| COM.07 | Data: Miss zone | Optional | Required | - | Training | D |
| COM.08 | Packet loss rate | ≤5% | ≤1% | % | KPP.05 | T |

### Communication Specifications

```yaml
radio:
  module: "SX1276 LoRa"
  frequency: "433 MHz"
  power: "+20 dBm"
  sensitivity: "-137 dBm"
  data_rate: "250 bps - 50 kbps"
  range: "500m (line of sight)"

protocol:
  format: "Target ID + Timestamp + Signal strength"
  packet_size: "16 bytes"
  tx_interval: "On-event (hit detection)"
  heartbeat: "Every 60 seconds"
```

---

## 8. Environmental Requirements (ENV)

### 8.1 Climatic (MIL-STD-810H Tailored)

| ID | Requirement | Min | Max | Unit | MIL-STD-810H | T/O |
|----|-------------|-----|-----|------|--------------|-----|
| ENV.01 | Operating temperature | 0 | +50 | °C | 501.7/502.7 | T |
| ENV.02 | Storage temperature | -10 | +60 | °C | 501.7/502.7 | T |
| ENV.03 | Humidity (operating) | 30 | 95 | %RH | 507.6 | T |
| ENV.04 | Solar radiation | - | 1120 | W/m² | 505.7 | T |

### 8.2 Marine Environment

| ID | Requirement | Value | Unit | Standard | T/O |
|----|-------------|-------|------|----------|-----|
| ENV.05 | IP rating (electronics) | IP67 (T) / IP68 (O) | - | IEC 60529 | T |
| ENV.06 | Salt spray resistance | 500 | hours | ASTM B117 | T |
| ENV.07 | UV resistance | 5 | years | - | T |
| ENV.08 | Sea state operation | 3 (T) / 4 (O) | Beaufort | - | T |
| ENV.09 | Wave height tolerance | 1.0 (T) / 1.5 (O) | m | - | T |

### 8.3 Mechanical (MIL-STD-810H Tailored)

| ID | Requirement | Value | Unit | MIL-STD-810H | T/O |
|----|-------------|-------|------|--------------|-----|
| ENV.10 | Shock - bullet impact | Continuous | - | 516.8 | T |
| ENV.11 | Vibration - wave motion | Continuous | - | 514.8 | T |
| ENV.12 | Drop (packaged) | 1.0 | m | 516.8 Proc IV | T |

### Marine Protection Strategy

| Component | Protection | Method |
|-----------|------------|--------|
| MCU Box | IP67 | Sealed enclosure + conformal coating |
| PZT Sensors | IP68 | Marine epoxy potting |
| Connectors | IP68 | M12 marine-grade |
| Frame | Corrosion | Hot-dip galvanize + marine paint |
| Cables | Marine | Polyurethane jacket |

---

## 9. Power Requirements (PWR)

> **Decision**: DEC-004 - LiFePO4 12.8V 6Ah + Solar 20W
> **Performance**: 85 hours runtime (10× requirement)

| ID | Requirement | Threshold | Objective | Unit | Source | Verification |
|----|-------------|-----------|-----------|------|--------|--------------|
| PWR.01 | Battery chemistry | LiFePO4 | - | - | Safety | I |
| PWR.02 | Battery capacity | ≥50 | ≥75 | Wh | Runtime | I |
| PWR.03 | Operating time | ≥8 | ≥24 | hours | KSA.01 | T |
| PWR.04 | Solar charging | Optional | 20W | W | Autonomy | D |
| PWR.05 | Shore charging | Required | - | - | Ops | D |
| PWR.06 | Charge time (0-80%) | ≤4 | ≤2 | hours | Ops | T |
| PWR.07 | Low battery warning | Yes | - | - | Ops | D |
| PWR.08 | System power consumption | ≤2.0 | ≤1.0 | W | Runtime | T |

### Power Budget

| Subsystem | Current (mA) | Power (W) | Duty | Avg Power |
|-----------|--------------|-----------|------|-----------|
| STM32H743 MCU | 90 | 0.30 | 100% | 0.30W |
| PZT Preamps (4×) | 20 | 0.10 | 100% | 0.10W |
| SX1276 LoRa (avg) | 50 | 0.17 | 100% | 0.17W |
| Status LEDs | 20 | 0.10 | 10% | 0.01W |
| DC-DC losses | - | - | - | 0.32W |
| **TOTAL** | **~300** | | | **~0.9W** |

**Runtime**: 76.8Wh ÷ 0.9W = **85 hours** ✅ (10× requirement)

---

## 10. Platform Requirements (PLT)

| ID | Requirement | Value | Unit | T/O | Source | Verification |
|----|-------------|-------|------|-----|--------|--------------|
| PLT.01 | Platform type | Catamaran | - | T | Stability | I |
| PLT.02 | Hull spacing | 3.5-4.0 | m | T | Target array | I |
| PLT.03 | Buoyancy reserve | ≥100% | - | T | Safety | A |
| PLT.04 | Stability (no capsize) | Sea State 4 | - | T | Safety | T |
| PLT.05 | Towing capability | Required | - | T | Ops | D |
| PLT.06 | Anchor system | Optional | - | O | Shallow water | I |
| PLT.07 | Draft | ≤0.5 | m | O | Beach launch | I |

---

## 11. Reliability Requirements (REL)

> **DfX Review**: MTBF 2,817 hours achieved (DEC-005 update)

| ID | Requirement | Threshold | Objective | Unit | Basis |
|----|-------------|-----------|-----------|------|-------|
| REL.01 | MTBF (operational) | 2,000 | 3,000 | hours | MIL-HDBK-217F |
| REL.02 | Design life | 5 | 10 | years | - |
| REL.03 | Power cycles | ≥500 | ≥1,000 | cycles | - |
| REL.04 | Component derating | ≥20% | ≥30% | % | MIL-HDBK-217F |
| REL.05 | Maintenance interval | ≥3 | ≥6 | months | - |

### MTBF Analysis (per DfX Review v1.1)

| Component | FIT | Qty | Total FIT |
|-----------|-----|-----|-----------|
| STM32H743 MCU | 50 | 1 | 50 |
| SX1276 LoRa | 40 | 1 | 40 |
| TL074 Preamp | 20 | 1 | 20 |
| Voltage regulators | 25 | 2 | 50 |
| Passives | 10 | 1 | 10 |
| Connectors | 30 | 6 | 180 |
| PCB | 5 | 1 | 5 |
| **TOTAL** | | | **355 FIT** |

**MTBF = 10⁶ ÷ 355 = 2,817 hours** ✅

### Single Points of Failure (SPOF)

| Component | Impact | v1 Mitigation | v2 Plan |
|-----------|--------|---------------|---------|
| LoRa SX1276 | No comms | Accepted | Redundant LoRa |
| MCU | System dead | Watchdog | - |
| Power | System dead | BMS protection | Redundant buck |

---

## 12. Maintainability Requirements (MAINT)

| ID | Requirement | Threshold | Objective | Unit | T/O |
|----|-------------|-----------|-----------|------|-----|
| MAINT.01 | MTTR (field) | ≤60 | ≤30 | min | T |
| MAINT.02 | No special tools | Yes | - | - | T |
| MAINT.03 | Modular LRU design | Yes | - | - | T |
| MAINT.04 | Built-in test (BIT) | ≥70% | ≥90% | fault coverage | T |
| MAINT.05 | Torque spec documented | Yes | - | - | I |

### Line Replaceable Units (LRU)

| LRU | Level | MTTR Target |
|-----|-------|-------------|
| Battery pack | Field | 5 min |
| MCU Box | Field | 15 min |
| PZT Sensor | Field | 20 min |
| LoRa antenna | Field | 5 min |
| Complete electronics swap | Field | 30 min |

---

## 13. Safety Requirements (SAFE)

| ID | Requirement | Hazard Cat | Standard | T/O |
|----|-------------|------------|----------|-----|
| SAFE.01 | No Cat I hazards unmitigated | I | MIL-STD-882E | T |
| SAFE.02 | Battery thermal safety | II | UN38.3 | T |
| SAFE.03 | No sharp edges (handling) | III | - | T |
| SAFE.04 | Visibility markings | III | COLREGS | T |
| SAFE.05 | Towing point rated | II | 2× system weight | T |
| SAFE.06 | Bullet ricochet prevention | II | Steel angle | A |

### Hazard Analysis Summary

| Hazard ID | Description | Severity | Probability | Risk | Mitigation |
|-----------|-------------|----------|-------------|------|------------|
| HAZ-01 | Battery fire (water ingress) | II | D | 10 | LiFePO4, IP67 enclosure |
| HAZ-02 | Capsize/sinking | II | D | 10 | Buoyancy reserve ≥100% |
| HAZ-03 | Bullet ricochet | II | C | 6 | Angled steel plates |
| HAZ-04 | Towing failure | III | D | 14 | Rated tow point, inspection |
| HAZ-05 | Collision hazard | III | D | 14 | Reflective markings |

---

## 14. EMC Requirements (EMC)

| ID | Requirement | Standard | Limit | T/O |
|----|-------------|----------|-------|-----|
| EMC.01 | Radiated emissions | EN 55032 Class B | Per curve | T |
| EMC.02 | ESD immunity | IEC 61000-4-2 | ±4kV contact | T |
| EMC.03 | LoRa interference | - | No self-interference | T |

---

## 15. Physical Requirements (PHYS)

| ID | Requirement | Threshold | Objective | Unit | T/O |
|----|-------------|-----------|-----------|------|-----|
| PHYS.01 | Total system weight | ≤150 | ≤100 | kg | T |
| PHYS.02 | Frame dimensions | 4.0 × 2.5 × 0.5 | - | m | T |
| PHYS.03 | MCU Box size | 200×150×100 | 150×100×80 | mm | T |
| PHYS.04 | Color (frame) | Safety orange/white | - | - | T |
| PHYS.05 | Color (targets) | Standard military | - | - | T |

---

## 16. Cost Requirements (COST)

| ID | Requirement | Threshold | Objective | Unit |
|----|-------------|-----------|-----------|------|
| COST.01 | Unit production cost | ≤60,000,000 | ≤30,000,000 | VND |
| COST.02 | R&D budget | ≤350,000,000 | - | VND |
| COST.03 | Local content | ≥50% | ≥70% | % value |

### Verified BOM Summary

| Subsystem | Cost (VND) | Cost (USD) | Decision |
|-----------|------------|------------|----------|
| Impact Sensors (PZT) | 1,025,000 | $41 | DEC-002 |
| Frame (Steel + Galv) | 4,275,000 | $170 | DEC-003 |
| Power System | 1,090,000 | $44 | DEC-004 |
| MCU Box Electronics | 520,000 | $21 | DEC-005 |
| **Subtotal (verified)** | **6,910,000** | **$276** | |
| Targets, hulls, misc | ~20,000,000 | ~$800 | Est. |
| **Estimated Total** | **~27,000,000** | **~$1,076** | ✅ Under budget |

---

## 17. Production Requirements (PROD)

| ID | Requirement | Threshold | Objective | Unit |
|----|-------------|-----------|-----------|------|
| PROD.01 | Local content | ≥50% | ≥70% | % value |
| PROD.02 | COTS component ratio | ≥60% | ≥80% | % |
| PROD.03 | Assembly time | ≤8 | ≤4 | hours |
| PROD.04 | No ITAR components | Required | - | - |
| PROD.05 | Vietnamese documentation | Required | - | - |

---

## 18. Schedule Requirements (SCHED)

| ID | Milestone | Date | T/O |
|----|-----------|------|-----|
| SCHED.01 | Gate 2 Review | 2026-02 | T |
| SCHED.02 | Prototype complete | 2026-04 | T |
| SCHED.03 | Sea trials | 2026-06 | T |
| SCHED.04 | Gate 3 (Production) | 2026-08 | O |

---

## 19. Critical Technical Parameters (CTP)

| ID | Parameter | Threshold | Margin | Derived From |
|----|-----------|-----------|--------|--------------|
| CTP.01 | ADC sample rate | ≥50 kSPS | ≥100 kSPS | SEN.04 |
| CTP.02 | ADC resolution | 12-bit | 16-bit | KPP.04 |
| CTP.03 | LoRa TX power | +17 dBm | +20 dBm | KPP.05 |
| CTP.04 | MCU processing time | ≤50ms | ≤20ms | KPP.03 |
| CTP.05 | Battery energy density | ≥100 Wh/kg | ≥150 Wh/kg | PWR.02, PHYS.01 |
| CTP.06 | Galvanize thickness | ≥65 µm | ≥85 µm | ENV.06 |

---

## 20. Constraints

| ID | Constraint | Limit | Reason | Negotiable |
|----|------------|-------|--------|------------|
| CON.01 | Local content | ≥50% | Policy | No |
| CON.02 | No ITAR components | Yes | Sovereignty | No |
| CON.03 | LiFePO4 battery only | Yes | Marine safety | No |
| CON.04 | Vietnamese language UI | Required | Operations | No |
| CON.05 | Standard military targets | Điều 124 format | Regulation | No |

---

## 21. Assumptions

| ID | Assumption | Impact if Wrong |
|----|------------|-----------------|
| A.01 | STM32H743 available locally | Source from LCSC (+2 weeks) |
| A.02 | Sea State 3 typical training conditions | Redesign flotation |
| A.03 | LoRa 433MHz permitted | Change to 868MHz |
| A.04 | AR400 steel available | Import or substitute AR500 |
| A.05 | Shore power available at range | Increase solar capacity |

---

## 22. Open Questions

| ID | Question | Answer | Date |
|----|----------|--------|------|
| Q.01 | Exact target dimensions per Điều 124? | Pending VPA docs | - |
| Q.02 | Required scoring data format? | TBD | - |
| Q.03 | Night training capability required? | TBD | - |
| Q.04 | Integration with range management system? | TBD | - |

---

## 23. Verification Matrix Summary

| Category | Total | Test | Analysis | Demo | Inspection |
|----------|-------|------|----------|------|------------|
| KPP | 6 | 6 | 0 | 0 | 0 |
| KSA | 6 | 3 | 2 | 1 | 0 |
| TGT | 7 | 1 | 0 | 0 | 6 |
| SEN | 8 | 5 | 0 | 0 | 3 |
| ENV | 12 | 9 | 1 | 0 | 2 |
| REL | 5 | 0 | 5 | 0 | 0 |
| **Total** | **44** | **24** | **8** | **1** | **11** |

---

## Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Manager | | | ☐ |
| Chief Engineer | | | ☐ |
| Customer Rep (VPA) | | | ☐ |
| QA Manager | | | ☐ |

---

## References

| Standard | Title |
|----------|-------|
| MIL-STD-810H | Environmental Engineering (tailored) |
| MIL-HDBK-217F | Reliability Prediction |
| MIL-STD-882E | System Safety |
| IEC 60529 | IP Rating |
| ASTM B117 | Salt Spray Testing |
| Điều 124 | Bắn mục tiêu trên mặt nước |

---

---

## Related Documents

### Requirements
- [[requirements/requirements-summary]] - Quick reference card
- [[requirements/v1.3-summary]] - Detailed requirements (legacy)

### Design (Requirements Implementation)
- [[design/function-structure]] - Function decomposition from requirements
- [[design/morphological-matrix]] - Solution options for each function
- [[design/vdi-2225-evaluation]] - Concept selection against requirements

### Decisions (Requirements-Driven)
- [[decisions/log]] - Design decisions (DEC-001 to DEC-006)
- [[decisions/DEC-002-acoustic-sensor-analysis]] - Sensor selection

### Verification
- [[quality/dfx-review-mcu-box]] - DfX analysis (verifies MAINT, REL)
- [[quality/fmea-bb01]] - Failure mode analysis
- [[quality/test-procedure-checklist]] - Production test procedure
- [[quality/gate-2-prep]] - Gate 2 readiness

---

*SRS-BB01-001 Version 2.0*
*Defense standards compliant per [[skills/pb1-clarify-task]]*
*46 requirements → 6 KPP + 6 KSA + classified by defense categories*
