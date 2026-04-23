# MCU Box Assembly Work Instructions

> **Document**: WI-BB01-MCU-001
> **Version**: 1.0
> **Date**: 2026-01-26
> **Closes**: DfA-004

---

## 1. Scope

Assembly instructions for BB-01 MCU Box (Impact Detection Module).

**Output**: Fully assembled, tested MCU Box ready for field installation.

---

## 2. Required Materials

### 2.1 Bill of Materials

| Item | Part Number | Qty | Check |
|------|-------------|-----|-------|
| PCB Assembly (populated) | BB01-MCU-PCB | 1 | ☐ |
| IP67 Enclosure 200×150×100mm | ENC-IP67-200 | 1 | ☐ |
| PG9 Cable Glands | PG9-NYL | 6 | ☐ |
| M3×8 Standoffs | STD-M3-8 | 4 | ☐ |
| M3×6 Screws | SCR-M3-6 | 8 | ☐ |
| LoRa Antenna (433MHz) | ANT-433-SMA | 1 | ☐ |
| Gasket (included with enclosure) | - | 1 | ☐ |
| Conformal Coating (acrylic) | CC-ACRYLIC | - | ☐ |
| Kapton Tape | TAPE-KAPTON | - | ☐ |

### 2.2 Tools Required

| Tool | Purpose |
|------|---------|
| Phillips screwdriver #1 | Lid screws |
| 19mm wrench | Cable glands |
| Drill + 15.5mm bit | Gland holes (if not pre-drilled) |
| Drill template | Hole positioning |
| Wire strippers | Cable prep |
| Heat shrink + heat gun | Cable termination |
| Multimeter | Continuity check |
| ST-Link V2 | Firmware programming |
| ESD wrist strap | Static protection |

---

## 3. Assembly Procedure

### Step 1: Enclosure Preparation (10 min)

```
┌─────────────────────────────────────┐
│           ENCLOSURE LID             │
│                                     │
│   (no modifications needed)         │
│                                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│          ENCLOSURE BASE             │
│                                     │
│  ○    ○    ○    ○    ○    ○        │  ← 6× PG9 holes (15.5mm)
│  1    2    3    4    5    6        │
│                                     │
│  Hole 1-4: PZT sensor cables       │
│  Hole 5:   Power input (12V)       │
│  Hole 6:   Antenna                 │
└─────────────────────────────────────┘
```

| # | Action | Check |
|---|--------|-------|
| 1.1 | Place drill template on enclosure side | ☐ |
| 1.2 | Mark 6 hole positions with center punch | ☐ |
| 1.3 | Drill 15.5mm holes (wear safety glasses) | ☐ |
| 1.4 | Deburr holes with file or deburring tool | ☐ |
| 1.5 | Clean enclosure (remove plastic shavings) | ☐ |
| 1.6 | Install 6× PG9 cable glands (hand tight) | ☐ |
| 1.7 | Torque glands to **2-3 Nm** (per DfR-004) | ☐ |

**Quality Check**: Glands should not rotate when tugged.

---

### Step 2: PCB Preparation (5 min)

| # | Action | Check |
|---|--------|-------|
| 2.1 | Verify PCB passed functional test | ☐ |
| 2.2 | Inspect for solder bridges, cold joints | ☐ |
| 2.3 | Verify STM32 Pin 1 orientation (corner dot) | ☐ |
| 2.4 | Check all connectors seated properly | ☐ |

---

### Step 3: Conformal Coating (30 min including cure)

| # | Action | Check |
|---|--------|-------|
| 3.1 | Put on ESD wrist strap | ☐ |
| 3.2 | Mask connectors with Kapton tape | ☐ |
| 3.3 | Mask SWD header (for future debug access) | ☐ |
| 3.4 | Apply acrylic conformal coating (2 thin coats) | ☐ |
| 3.5 | Allow 15 min cure between coats | ☐ |
| 3.6 | Inspect under UV light (if UV tracer added) | ☐ |
| 3.7 | Remove masking tape | ☐ |

**Note**: Work in ventilated area. Coating is flammable.

---

### Step 4: PCB Mounting (5 min)

```
┌─────────────────────────────────────┐
│          ENCLOSURE BASE             │
│                                     │
│    [STD]─────────────[STD]          │
│      │                 │            │
│      │   ┌─────────┐   │            │
│      │   │   PCB   │   │            │
│      │   │         │   │            │
│      │   └─────────┘   │            │
│      │                 │            │
│    [STD]─────────────[STD]          │
│                                     │
└─────────────────────────────────────┘
```

| # | Action | Check |
|---|--------|-------|
| 4.1 | Install 4× M3×8 standoffs in enclosure base | ☐ |
| 4.2 | Place PCB on standoffs (component side up) | ☐ |
| 4.3 | Secure with 4× M3×6 screws | ☐ |
| 4.4 | Verify PCB is level and secure | ☐ |

---

### Step 5: Cable Routing (15 min)

| # | Action | Check |
|---|--------|-------|
| 5.1 | Route PZT1 cable through gland 1 | ☐ |
| 5.2 | Route PZT2 cable through gland 2 | ☐ |
| 5.3 | Route PZT3 cable through gland 3 | ☐ |
| 5.4 | Route PZT4 cable through gland 4 | ☐ |
| 5.5 | Route 12V power cable through gland 5 | ☐ |
| 5.6 | Route antenna coax through gland 6 | ☐ |
| 5.7 | Connect all cables to PCB connectors | ☐ |
| 5.8 | Apply strain relief (cable ties to standoffs) | ☐ |
| 5.9 | Tighten all cable gland nuts | ☐ |

**Connector Pinout**:
| Connector | Pin 1 | Pin 2 | Pin 3 |
|-----------|-------|-------|-------|
| J1-J4 (PZT) | Signal | Shield | GND |
| J5 (Power) | +12V | GND | - |

---

### Step 6: Antenna Installation (5 min)

| # | Action | Check |
|---|--------|-------|
| 6.1 | Connect SMA cable to LoRa module | ☐ |
| 6.2 | Route antenna through gland 6 | ☐ |
| 6.3 | Mount antenna externally (vertical preferred) | ☐ |
| 6.4 | Ensure antenna is outside enclosure | ☐ |

**Warning**: Operating LoRa without antenna can damage the module.

---

### Step 7: Final Assembly (5 min)

| # | Action | Check |
|---|--------|-------|
| 7.1 | Verify gasket is in lid groove | ☐ |
| 7.2 | Inspect gasket for damage or debris | ☐ |
| 7.3 | Place lid on enclosure | ☐ |
| 7.4 | Install lid screws (diagonal pattern) | ☐ |
| 7.5 | Torque lid screws evenly (do not overtighten) | ☐ |

---

### Step 8: Final Test (15 min)

| # | Test | Method | Pass Criteria | Result |
|---|------|--------|---------------|--------|
| 8.1 | Visual | Inspect all connections | No loose wires | ☐ |
| 8.2 | Power on | Apply 12V | Current <50mA idle | ☐ |
| 8.3 | LED check | Observe status LED | Blink pattern correct | ☐ |
| 8.4 | LoRa test | TX to test receiver | Packet received | ☐ |
| 8.5 | PZT test | Tap each sensor | Detection triggers | ☐ |
| 8.6 | Seal check | Visual | All glands tight | ☐ |

---

## 4. Quality Records

| Field | Value |
|-------|-------|
| Unit Serial Number | _____________ |
| Assembly Date | _____________ |
| Assembled By | _____________ |
| Inspected By | _____________ |
| Test Result | ☐ PASS / ☐ FAIL |
| Notes | _____________ |

---

## 5. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-26 | Initial release |

---

---

## Related Documents

- [[quality/dfx-review-mcu-box]] - Source of DfA-004 requirement
- [[quality/test-procedure-checklist]] - Test after assembly (TP-BB01-MCU-001)
- [[design/lora-test-receiver]] - Test receiver for LoRa verification
- [[decisions/log]] - DEC-005 MCU selection

---

*Work Instructions WI-BB01-MCU-001*
*Closes DfA-004*
