# Work Instructions - BB-01 MCU Box Assembly

> **Document ID**: WI-BB01-MCU-001
> **Issue ID**: DfA-007
> **Status**: ✅ COMPLETE
> **Revision**: A
> **Date**: 2026-01-27

---

## 1. Scope & Purpose

| Item | Value |
|------|-------|
| **Assembly** | MCU Box (Electronics Enclosure) |
| **Product** | VN-TARGET-BB01 LOMAH |
| **Skill Level** | Technician (basic electronics) |
| **Est. Time** | 30 minutes per unit |

---

## 2. Required Materials

### 2.1 BOM Checklist

| # | Item | Part Number | Qty | Check |
|---|------|-------------|-----|-------|
| 1 | Enclosure IP65 ABS | ENC-200-150-80 | 1 | ☐ |
| 2 | PCB Assembly (tested) | PCB-BB01-MCU-A | 1 | ☐ |
| 3 | Battery LiFePO4 12V/10Ah | BAT-12V-10AH | 1 | ☐ |
| 4 | Microphone ECM IP67 | MIC-AOM-5024L | 6 | ☐ |
| 5 | Cable gland M12 IP68 | CG-M12-IP68 | 3 | ☐ |
| 6 | Cable gland M16 IP68 | CG-M16-IP68 | 1 | ☐ |
| 7 | Antenna 433MHz | ANT-433-SMA | 1 | ☐ |
| 8 | Mic cable assembly | CBL-MIC-500 | 6 | ☐ |
| 9 | Gasket set | GSK-BB01-SET | 1 | ☐ |
| 10 | Fastener kit | FST-BB01-KIT | 1 | ☐ |
| 11 | Cable clips | CLIP-6MM | 6 | ☐ |
| 12 | Strain relief clamps | SR-CLAMP-5 | 2 | ☐ |

### 2.2 Tools Required

| Tool | Size/Type | Purpose |
|------|-----------|---------|
| Screwdriver Phillips | #2 | Enclosure screws |
| Screwdriver Phillips | #1 | PCB mounting |
| Wrench | 19mm | Cable glands |
| Wrench | 22mm | M16 cable gland |
| Torque screwdriver | 0.5-2 Nm | Critical fasteners |
| Wire strippers | 22-28 AWG | If needed |
| Multimeter | DMM | Verification |
| ESD wrist strap | - | PCB handling |

---

## 3. Safety Precautions

⚠️ **WARNING**:
- Always wear ESD wrist strap when handling PCB
- Battery contains lithium - do not puncture or short circuit
- Ensure power is OFF before connecting battery

---

## 4. Assembly Procedure

### Step 1: Prepare Enclosure (5 min)

```
┌─────────────────────────────────────────────────────────────┐
│  ENCLOSURE PREPARATION                                       │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  1.1 Verify enclosure is clean and free of debris           │
│                                                              │
│  1.2 Check all holes are properly drilled:                  │
│      □ Mic ports (5×) - Ø6mm                                │
│      □ Cable gland holes (3×) - M12                         │
│      □ Antenna hole (1×) - M16                              │
│      □ Mounting holes (4×) - Ø5mm                           │
│                                                              │
│  1.3 Install gasket in lid groove                           │
│      → Ensure gasket sits flat, no twists                   │
│                                                              │
│  1.4 Apply marine coating if not pre-coated                 │
│      → Allow 24hr cure before assembly                      │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Quality Check**: ☐ All holes present ☐ Gasket seated ☐ Coating applied

---

### Step 2: Install Cable Glands (3 min)

```
┌─────────────────────────────────────────────────────────────┐
│  CABLE GLAND INSTALLATION                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  2.1 Install M12 cable glands (×3) for mic cables:          │
│      → Hand tighten + 1/4 turn with wrench                  │
│      → DO NOT over-tighten (may crack housing)              │
│                                                              │
│  2.2 Install M16 cable gland (×1) for antenna:              │
│      → Hand tighten + 1/4 turn with wrench                  │
│                                                              │
│  2.3 Verify O-rings are present on all glands               │
│                                                              │
│       ┌─────┐                                               │
│       │ M12 │ ← Mic cables (×3)                             │
│       └─────┘                                               │
│       ┌─────┐                                               │
│       │ M16 │ ← Antenna                                     │
│       └─────┘                                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Torque**: M12 = 1.5 Nm, M16 = 2.0 Nm

**Quality Check**: ☐ All glands installed ☐ O-rings present ☐ Torque verified

---

### Step 3: Mount PCB Assembly (3 min)

```
┌─────────────────────────────────────────────────────────────┐
│  PCB MOUNTING                                                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ⚠️ WEAR ESD STRAP                                          │
│                                                              │
│  3.1 Verify PCB has passed ICT/FCT test                     │
│      → Check "PASSED" sticker on PCB                        │
│                                                              │
│  3.2 Place PCB on standoffs (pre-installed in enclosure)    │
│      → Align with mounting holes                            │
│      → Note: Antenna connector should face M16 gland        │
│                                                              │
│  3.3 Secure with 4× M3×8 screws                             │
│      → Tighten in diagonal pattern (1-3-2-4)                │
│      → Torque: 0.5 Nm                                       │
│                                                              │
│       ┌─────────────────────┐                               │
│       │  [1]           [3]  │                               │
│       │                     │                               │
│       │      [PCB]          │                               │
│       │                     │                               │
│       │  [2]           [4]  │                               │
│       └─────────────────────┘                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Quality Check**: ☐ ESD strap worn ☐ PCB tested ☐ 4 screws installed ☐ Diagonal pattern

---

### Step 4: Install Battery (2 min)

```
┌─────────────────────────────────────────────────────────────┐
│  BATTERY INSTALLATION                                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ⚠️ DO NOT CONNECT POWER YET                                │
│                                                              │
│  4.1 Attach pull strap to battery (if not pre-attached)     │
│                                                              │
│  4.2 Slide battery into compartment                         │
│      → Pull strap should face upward for easy removal       │
│                                                              │
│  4.3 Verify battery is seated securely                      │
│      → Should not move when enclosure is tilted             │
│                                                              │
│       ┌─────────────────────┐                               │
│       │  ┌───────────────┐  │                               │
│       │  │   BATTERY     │  │                               │
│       │  │  [pull strap] │  │ ← Pull strap UP               │
│       │  └───────────────┘  │                               │
│       └─────────────────────┘                               │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Quality Check**: ☐ Pull strap attached ☐ Battery seated ☐ Not connected yet

---

### Step 5: Route & Connect Microphone Cables (8 min)

```
┌─────────────────────────────────────────────────────────────┐
│  MICROPHONE CABLE ROUTING                                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  5.1 Thread mic cables through cable glands                 │
│      → 2 cables per M12 gland (total 6 mics, 3 glands)      │
│                                                              │
│  5.2 Connect cables to PCB headers:                         │
│      → MIC1 (J3) - Color: RED                               │
│      → MIC2 (J4) - Color: ORANGE                            │
│      → MIC3 (J5) - Color: YELLOW                            │
│      → MIC4 (J6) - Color: GREEN                             │
│      → MIC5 (J7) - Color: BLUE                              │
│      → MIC6 (J8) - Color: PURPLE (backup)                   │
│                                                              │
│  5.3 Install strain relief clamps                           │
│      → Position clamp 50mm from PCB connector               │
│      → Secure to enclosure wall                             │
│                                                              │
│  5.4 Install cable clips along routing path                 │
│      → Space clips every 100mm                              │
│      → Ensure no cable tension on connectors                │
│                                                              │
│       ┌─────────────────────────────────────────┐           │
│       │  [Gland]──○──○──[Clip]──[SR]──[PCB]    │           │
│       │           ↑              ↑               │           │
│       │        Cable          Strain            │           │
│       │        Clip           Relief            │           │
│       └─────────────────────────────────────────┘           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Color Code Verification**:
| Port | Color | Connected |
|------|-------|-----------|
| J3 (MIC1) | RED | ☐ |
| J4 (MIC2) | ORANGE | ☐ |
| J5 (MIC3) | YELLOW | ☐ |
| J6 (MIC4) | GREEN | ☐ |
| J7 (MIC5) | BLUE | ☐ |
| J8 (MIC6) | PURPLE | ☐ |

**Quality Check**: ☐ All 6 mics connected ☐ Color code correct ☐ Strain relief installed ☐ Clips installed

---

### Step 6: Install Antenna (2 min)

```
┌─────────────────────────────────────────────────────────────┐
│  ANTENNA INSTALLATION                                        │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  6.1 Thread antenna cable through M16 gland                 │
│                                                              │
│  6.2 Connect SMA connector to PCB RF port                   │
│      → Hand tighten only (finger tight + 1/8 turn)          │
│      → DO NOT use pliers on SMA                             │
│                                                              │
│  6.3 Tighten M16 cable gland                                │
│      → Torque: 2.0 Nm                                       │
│                                                              │
│  6.4 Position antenna vertically when installed             │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Quality Check**: ☐ SMA connected ☐ Gland tightened ☐ Antenna vertical

---

### Step 7: Connect Battery & Power Test (3 min)

```
┌─────────────────────────────────────────────────────────────┐
│  POWER CONNECTION & TEST                                     │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  7.1 Connect battery cable to PCB power connector           │
│      → RED to + (positive)                                  │
│      → BLACK to - (negative)                                │
│      → Connector is keyed - cannot reverse                  │
│                                                              │
│  7.2 Verify power LED illuminates (GREEN)                   │
│      → If RED or no LED: STOP, check connections            │
│                                                              │
│  7.3 Check voltage at test point TP1:                       │
│      → Expected: 3.3V ±5% (3.14V - 3.46V)                   │
│                                                              │
│  7.4 Verify boot sequence:                                  │
│      → Status LED blinks 3× then solid GREEN                │
│      → Boot time: <5 seconds                                │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Power Test Results**:
| Check | Expected | Actual | Pass |
|-------|----------|--------|------|
| Power LED | GREEN | | ☐ |
| TP1 Voltage | 3.3V ±5% | ___V | ☐ |
| Boot time | <5s | ___s | ☐ |
| Status LED | Solid GREEN | | ☐ |

---

### Step 8: Functional Test (4 min)

```
┌─────────────────────────────────────────────────────────────┐
│  FUNCTIONAL TEST                                             │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  8.1 Run self-test via serial command (optional):           │
│      → Connect USB, send "AT+TEST"                          │
│      → Response: "OK: ALL PASS" or lists failures           │
│                                                              │
│  8.2 Microphone test:                                       │
│      → Tap near each microphone                             │
│      → Verify corresponding LED flashes                     │
│      → MIC1-6 should all respond                            │
│                                                              │
│  8.3 RF link test:                                          │
│      → Power on test receiver                               │
│      → Verify RSSI ≥ -100 dBm at 10m distance              │
│                                                              │
│  8.4 Record serial number:                                  │
│      → Read from label on PCB                               │
│      → Enter in test log                                    │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Functional Test Results**:
| Test | Expected | Result | Pass |
|------|----------|--------|------|
| Self-test | ALL PASS | | ☐ |
| MIC1 | Responds | | ☐ |
| MIC2 | Responds | | ☐ |
| MIC3 | Responds | | ☐ |
| MIC4 | Responds | | ☐ |
| MIC5 | Responds | | ☐ |
| MIC6 | Responds | | ☐ |
| RF RSSI | ≥-100 dBm | ___dBm | ☐ |

**Serial Number**: ________________

---

### Step 9: Close Enclosure (2 min)

```
┌─────────────────────────────────────────────────────────────┐
│  FINAL ASSEMBLY                                              │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  9.1 Verify all cables are routed clear of lid              │
│                                                              │
│  9.2 Check gasket is properly seated in groove              │
│                                                              │
│  9.3 Close lid and install 8× M4×10 screws                  │
│      → Tighten in star pattern                              │
│      → Torque: 1.0 Nm                                       │
│                                                              │
│       ┌─────────────────────┐                               │
│       │  [1]    [5]    [2]  │                               │
│       │                     │                               │
│       │  [8]          [6]   │  ← Star pattern              │
│       │                     │                               │
│       │  [4]    [7]    [3]  │                               │
│       └─────────────────────┘                               │
│                                                              │
│  9.4 Apply QC passed label with date and initials           │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

**Quality Check**: ☐ Cables clear ☐ Gasket seated ☐ 8 screws installed ☐ Star pattern ☐ QC label applied

---

## 5. Final Inspection Checklist

| # | Check | Pass |
|---|-------|------|
| 1 | All screws installed and torqued | ☐ |
| 2 | All cable glands tight | ☐ |
| 3 | Power test passed | ☐ |
| 4 | All 6 microphones respond | ☐ |
| 5 | RF link test passed | ☐ |
| 6 | Serial number recorded | ☐ |
| 7 | QC label applied | ☐ |
| 8 | No visible defects | ☐ |

---

## 6. Troubleshooting

| Symptom | Possible Cause | Action |
|---------|----------------|--------|
| No power LED | Battery not connected | Check connector |
| | Battery dead | Replace battery |
| | Fuse blown | Check F1 on PCB |
| RED power LED | Reverse polarity | Check wiring (shouldn't happen with keyed connector) |
| Mic not responding | Cable disconnected | Check J3-J8 |
| | Wrong color code | Re-route cable |
| | Mic damaged | Replace microphone |
| Weak RF signal | Antenna loose | Check SMA connection |
| | Antenna damaged | Replace antenna |
| Boot fails | Firmware corrupt | Re-flash via USB |

---

## 7. Document Control

| Field | Value |
|-------|-------|
| **Document ID** | WI-BB01-MCU-001 |
| **Revision** | A |
| **Date** | 2026-01-27 |
| **Author** | Design Team |
| **Approved** | ☐ Pending |

---

## 8. References

- [[FMEA-MCU-Box]] - Failure mode analysis
- [[MTBF-Improvement-Plan]] - Reliability requirements
- [[DfX-Review-MCU-Box]] - Design review
- [[v1.3-summary]] - Product requirements

---

*Work Instructions per Workshop X 3-Gate Quality System*
*Closes: DfA-007*
