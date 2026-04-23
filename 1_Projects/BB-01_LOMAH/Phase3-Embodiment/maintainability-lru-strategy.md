# Maintainability & LRU Strategy: BB-01

> **Document**: MAINT-BB01-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Closes**: DfR-002 (No field-replaceable parts)
> **Input**: [[quality/dfx-review-mcu-box]], [[requirements/srs-v2.0]]

---

## 1. Issue Background

### DfR-002: No Field-Replaceable Parts

| Aspect | Value |
|--------|-------|
| **Issue** | MCU Box has no field-replaceable parts at component level |
| **Severity** | Low |
| **Original Mitigation** | Entire box is replaceable unit |
| **Status** | Requires formal analysis |

### Concern

If a component fails (e.g., op-amp, capacitor), the entire MCU Box must be replaced rather than repairing individual parts in the field.

---

## 2. Requirements Analysis

### From SRS v2.0 (MAINT Requirements)

| ID | Requirement | Threshold | Objective | Status |
|----|-------------|-----------|-----------|--------|
| MAINT.01 | MTTR (field) | ≤60 min | ≤30 min | Design |
| MAINT.02 | No special tools | Yes | - | ✅ Met |
| MAINT.03 | Modular LRU design | Yes | - | ✅ Met |
| MAINT.04 | Built-in test (BIT) | ≥70% | ≥90% | Design |
| MAINT.05 | Torque spec documented | Yes | - | ✅ Met |

### Key Insight

**MAINT.03 requires modular LRU design, NOT component-level repair.**

The requirement is satisfied by making the MCU Box itself an LRU, not by enabling field repair of individual components.

---

## 3. LRU Strategy

### 3.1 System LRU Breakdown

```
BB-01 SYSTEM
│
├── LRU-1: MCU Box Assembly ◄── DfR-002 scope
│   ├── PCB with all components
│   ├── IP67 enclosure
│   ├── Cable glands
│   └── LoRa antenna
│
├── LRU-2: Battery Pack
│   ├── LiFePO4 cells
│   ├── BMS
│   └── Enclosure
│
├── LRU-3: Solar Panel Assembly
│   ├── 20W panel
│   ├── Charge controller
│   └── Mounting bracket
│
├── LRU-4: PZT Sensor (×4)
│   ├── Sensor with potting
│   └── Cable assembly
│
├── LRU-5: Target Plate (×4)
│   └── AR400 steel plate
│
└── LRU-6: Antenna Assembly
    ├── LoRa antenna
    └── SMA cable
```

### 3.2 LRU Specifications

| LRU | MTTR | Tools Required | Spares Strategy |
|-----|------|----------------|-----------------|
| LRU-1: MCU Box | 15 min | Screwdriver, wrench | 1 per 5 systems |
| LRU-2: Battery | 5 min | None (quick-connect) | 1 per 3 systems |
| LRU-3: Solar Panel | 10 min | Screwdriver | 1 per 10 systems |
| LRU-4: PZT Sensor | 20 min | Wrench, sealant | 2 per system |
| LRU-5: Target Plate | 15 min | Wrench | 1 per 10 systems |
| LRU-6: Antenna | 5 min | None (SMA) | 2 per 5 systems |

### 3.3 MCU Box Replacement Procedure

```
FIELD REPLACEMENT: LRU-1 MCU Box
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Time: 15 minutes
Tools: Phillips screwdriver, 19mm wrench
Personnel: 1 technician (basic training)

Step 1: Power down system (switch off)          [1 min]
Step 2: Disconnect battery cable (XT60)         [1 min]
Step 3: Disconnect 4× PZT sensor cables (M12)   [4 min]
Step 4: Disconnect antenna (SMA)                [1 min]
Step 5: Remove mounting bolts (4× M6)           [2 min]
Step 6: Remove faulty MCU Box                   [1 min]
Step 7: Install replacement MCU Box             [1 min]
Step 8: Reconnect all cables                    [3 min]
Step 9: Power on, verify (LED + LoRa test)      [1 min]
                                         Total: 15 min ✅
```

---

## 4. Maintainability FMEA

### 4.1 Field Maintenance Failure Modes

| ID | Failure Mode | Effect | S | O | D | RPN | Mitigation |
|----|--------------|--------|---|---|---|-----|------------|
| MNT-01 | Wrong LRU diagnosed | Unnecessary replacement | 4 | 3 | 4 | 48 | BIT diagnostics, troubleshooting guide |
| MNT-02 | Spare LRU not available | Extended downtime | 6 | 3 | 3 | 54 | Spares stocking policy |
| MNT-03 | Connector damage during swap | New fault introduced | 5 | 3 | 4 | 60 | Keyed connectors, training |
| MNT-04 | Incorrect cable routing | Interference, damage | 4 | 3 | 3 | 36 | Color-coded cables, diagram |
| MNT-05 | Gasket not sealed properly | Water ingress | 7 | 3 | 5 | **105** | Torque spec, checklist |
| MNT-06 | Firmware mismatch | System malfunction | 5 | 2 | 4 | 40 | Version label, update procedure |
| MNT-07 | ESD damage during swap | Latent failure | 6 | 3 | 6 | **108** | ESD procedures, training |
| MNT-08 | Calibration lost after swap | Degraded accuracy | 5 | 4 | 4 | 80 | Auto-calibration on boot |

### 4.2 High-Risk Items (RPN ≥ 100)

| ID | Failure Mode | RPN | Action |
|----|--------------|-----|--------|
| MNT-07 | ESD damage during swap | 108 | ESD wrist strap in spares kit; training required |
| MNT-05 | Gasket not sealed | 105 | Torque spec on enclosure; silicone grease included |

### 4.3 Mitigation Actions

| ID | Action | Owner | Status |
|----|--------|-------|--------|
| M-01 | Include ESD wrist strap in field spares kit | Logistics | 🟡 Open |
| M-02 | Create field replacement checklist | Doc Lead | 🟡 Open |
| M-03 | Include silicone grease sachet with spare MCU Box | Production | 🟡 Open |
| M-04 | Add auto-calibration routine to firmware | SW Lead | 🟡 Open |
| M-05 | Create troubleshooting guide (fault → LRU mapping) | Doc Lead | 🟡 Open |

---

## 5. Trade-off Analysis

### Component-Level Repair vs. LRU Replacement

| Aspect | Component Repair | LRU Replacement |
|--------|------------------|-----------------|
| **MTTR** | 60-120 min | **15 min** ✅ |
| **Skill required** | Electronics technician | Basic training |
| **Tools required** | Soldering, test equipment | Screwdriver, wrench |
| **Environment** | Workshop (ESD, lighting) | **Field** ✅ |
| **Success rate** | 70-80% | **>99%** ✅ |
| **Spare cost** | Lower (components) | Higher (complete LRU) |
| **Inventory complexity** | High (many SKUs) | **Low (few SKUs)** ✅ |
| **Downtime cost** | High (extended) | **Low (minimal)** ✅ |

### Cost Analysis

| Strategy | Spare Inventory | Annual Maint Cost | Downtime Cost |
|----------|-----------------|-------------------|---------------|
| Component repair | ~200K VND | ~500K VND labor | High |
| **LRU replacement** | ~520K VND | ~100K VND labor | **Low** |

**Conclusion**: LRU replacement is **operationally superior** despite higher spare unit cost.

---

## 6. Spares Provisioning

### Recommended Spares per 10 Systems

| LRU | Qty | Unit Cost | Total | Rationale |
|-----|-----|-----------|-------|-----------|
| MCU Box | 2 | 520K | 1,040K | MTBF-based (2,817hr) |
| Battery Pack | 3 | 450K | 1,350K | Consumable (2yr life) |
| PZT Sensor | 8 | 60K | 480K | Exposed to impact |
| LoRa Antenna | 4 | 30K | 120K | Exposed, fragile |
| Cable Set | 2 | 100K | 200K | Connector wear |
| **Total** | | | **3,190K VND** | (~$127/10 systems) |

**Per-system spares cost**: ~319K VND (~$13)

---

## 7. Built-In Test (BIT) Coverage

### Fault Detection Capability

| Fault | BIT Detection | Method | Coverage |
|-------|---------------|--------|----------|
| MCU failure | Yes | Watchdog, heartbeat | 100% |
| ADC failure | Yes | Channel self-test | 100% |
| LoRa failure | Yes | SPI check, RSSI | 100% |
| Preamp failure | Yes | Noise floor check | 90% |
| Power failure | Yes | Voltage monitoring | 100% |
| PZT sensor failure | Partial | Signal level check | 70% |
| Antenna degradation | Partial | RSSI trending | 60% |
| Connector corrosion | No | - | 0% |

**Overall BIT Coverage**: ~75% (meets MAINT.04 Threshold ≥70%) ✅

### Fault → LRU Mapping

| BIT Indication | Probable LRU | Confidence |
|----------------|--------------|------------|
| No heartbeat | LRU-1 MCU Box | High |
| ADC error | LRU-1 MCU Box | High |
| LoRa TX fail | LRU-1 or LRU-6 | Medium |
| Low RSSI | LRU-6 Antenna | High |
| Channel X no signal | LRU-4 PZT Sensor X | High |
| Low battery | LRU-2 Battery | High |
| No solar charge | LRU-3 Solar Panel | High |

---

## 8. DfR-002 Closure

### Assessment

| Criterion | Evaluation |
|-----------|------------|
| MTTR requirement (≤60 min) | **15 min** ✅ |
| No special tools | **Met** ✅ |
| Modular LRU design | **Met** ✅ |
| BIT coverage (≥70%) | **75%** ✅ |
| Field serviceability | **Excellent** ✅ |

### Conclusion

**DfR-002 is CLOSED** ✅

The "no field-replaceable parts" concern is **not a deficiency** but a deliberate design choice aligned with:
1. MAINT.03 requirement for modular LRU design
2. Operational environment (marine, field conditions)
3. Skill level of maintenance personnel (basic training)
4. Minimizing downtime (15 min MTTR vs 60+ min for component repair)

The MCU Box as an LRU provides:
- Faster repair time (4× better than requirement)
- Higher repair success rate (>99%)
- Simpler training requirements
- Reduced inventory complexity
- Lower total cost of ownership

---

## 9. Related Documents

- [[quality/dfx-review-mcu-box]] - Source of DfR-002
- [[quality/fmea-bb01]] - System-level failure modes
- [[design/mcu-box-assembly-instructions]] - Assembly/disassembly reference
- [[design/mtbf-improvement-plan]] - Reliability roadmap (DfR-001)
- [[requirements/srs-v2.0]] - MAINT requirements

---

## 10. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-27 | Initial release, closes DfR-002 |

---

*Maintainability & LRU Strategy MAINT-BB01-001*
*Closes DfR-002*
*MTTR: 15 min (4× better than 60 min requirement)*
