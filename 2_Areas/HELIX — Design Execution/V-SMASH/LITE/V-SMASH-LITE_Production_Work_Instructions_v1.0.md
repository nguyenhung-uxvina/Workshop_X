# V-SMASH-LITE PRODUCTION WORK INSTRUCTIONS
## Complete Assembly Procedures Manual

**Document**: VS-WI-000 | **Version**: 1.0 | **Date**: 2026-01-19
**Project**: V-SMASH-LITE AI-Powered Smart Sight

---

# WORK INSTRUCTION INDEX

| WI # | Title | Station | Time | Page |
|------|-------|---------|------|------|
| VS-WI-001 | Kitting Procedure | WS-02 | 20 min | 2 |
| VS-WI-002 | Optical Sub-Assembly | WS-03 | 45 min | 4 |
| VS-WI-003 | Electronics Sub-Assembly | WS-04 | 30 min | 7 |
| VS-WI-004 | Main Mechanical Assembly | WS-05A | 60 min | 9 |
| VS-WI-005 | Electronics Integration | WS-05B | 45 min | 11 |
| VS-WI-006 | Optical Installation | WS-05C | 30 min | 13 |
| VS-WI-007 | Final Assembly & Close | WS-05D | 30 min | 14 |
| VS-WI-008 | Calibration Procedure | WS-06 | 45 min | 16 |
| VS-WI-009 | ATP Execution | WS-07 | 60 min | 18 |
| VS-WI-010 | Packing Procedure | WS-08 | 15 min | 20 |

**Total Assembly Time: ~6.5 hours per unit**

---

# SAFETY REQUIREMENTS

```
┌─────────────────────────────────────────────────────────────────────────────────┐
│                    SAFETY REQUIREMENTS - ALL STATIONS                           │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│  PPE REQUIRED:                                                                  │
│  □ Safety glasses (all stations)                                               │
│  □ ESD wrist strap (WS-03, WS-04, WS-05B, WS-06, WS-07)                       │
│  □ Lint-free gloves (WS-03 optical)                                           │
│  □ Closed-toe shoes (all stations)                                            │
│                                                                                 │
│  HAZARDS:                                                                       │
│  ⚡ ELECTRICAL: Live circuits during test                                      │
│  ⚠️ ESD: Handle electronics on ESD mat                                        │
│  🔦 UV LIGHT: Avoid eye exposure during curing                                │
│  ⚗️ CHEMICAL: IPA is flammable                                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

---

# VS-WI-001: KITTING PROCEDURE

**Station**: WS-02 | **Time**: 20 min | **Skill**: Level 2

## Purpose
Prepare complete material kit for one V-SMASH-LITE unit assembly.

## Kit Contents

| Tray | Contents | Items |
|------|----------|-------|
| **1** | Mechanical | Housing, covers, brackets, clamp (12 pcs) |
| **2** | Optical | Beam combiner, lens, OLED, window, filter (5 pcs) |
| **3** | Electronics | Jetson, PCB, camera, solenoid, battery (8 items) |
| **4** | Fasteners | Screws, nuts, standoffs, O-rings (40+ pcs) |
| **5** | Consumables | Thermal pad, paste, adhesive, wipes |

## Procedure

```
STEP 1: PREPARE KIT TRAY (2 min)
─────────────────────────────────────────────────────────────────
□ Obtain clean 5-compartment kit tray
□ Generate kit label: KIT-[YYYYMMDD]-[SEQ]
□ Attach label to tray

STEP 2: PICK MECHANICAL PARTS (5 min)
─────────────────────────────────────────────────────────────────
□ Go to Mechanical shelf (Shelf A)
□ Scan each part barcode to verify P/N
□ Visual inspect: no scratches, dents, thread damage
□ Place in Tray 1
□ Verify count: 12 parts

STEP 3: PICK OPTICAL COMPONENTS (4 min)
─────────────────────────────────────────────────────────────────
⚠️ Wear lint-free gloves - handle by edges only

□ Go to Optical cabinet (Cabinet B)
□ Pick: combiner, lens, OLED, window, filter
□ Keep in protective sleeves
□ Place in Tray 2
□ Verify count: 5 parts

STEP 4: PICK ELECTRONICS (5 min)
─────────────────────────────────────────────────────────────────
⚡ ESD wrist strap required

□ Go to Electronics cage (Cage C)
□ Pick Jetson Nano - record S/N: ______________
□ Pick Carrier PCB - record Lot: ______________
□ Pick: camera, lens, CSI cable, solenoid, battery, harness
□ Place all in ESD tray (Tray 3)
□ Verify count: 8 items

STEP 5: PICK FASTENERS & CONSUMABLES (3 min)
─────────────────────────────────────────────────────────────────
□ Pick fastener kit (pre-packaged VS-FK-001) OR individual parts
□ Pick consumables kit (VS-CK-001)
□ Place in Bags 4 and 5

STEP 6: FINAL VERIFICATION (1 min)
─────────────────────────────────────────────────────────────────
□ All 5 trays/bags present
□ Check off all items on pick list
□ Sign: _____________ Date: _____________ Time: _____________
□ Move kit to staging area
```

---

# VS-WI-002: OPTICAL SUB-ASSEMBLY

**Station**: WS-03 | **Time**: 45 min | **Skill**: Level 3 (Specialized)

## Purpose
Assemble OLED display, collimating lens, and beam combiner into optical barrel.

## Required Tools
- Laminar flow hood (ISO Class 7)
- Stereo microscope (10-40×)
- UV curing lamp (365nm)
- Optical alignment fixture (VS-FIX-002)
- Torque screwdriver (0.1-0.5 N·m)
- Lens cleaning kit

## Procedure

```
PREPARATION (5 min)
─────────────────────────────────────────────────────────────────
□ Turn on laminar flow hood (15 min warm-up if cold)
□ Put on lint-free gloves
□ Verify tools calibrated
□ Retrieve optical components from kit

STEP 1: CLEAN COMPONENTS (5 min)
─────────────────────────────────────────────────────────────────
□ Inspect each component at 10× magnification
□ Clean with air blower (45° angle, center outward)
□ If smudges: IPA on lens tissue, single-direction wipe
□ Final inspection at 20× - no particles >50μm

  CLEANING TECHNIQUE:
  ┌──────────────────────────────────────┐
  │     AIR BLOWER       TISSUE WIPE     │
  │                                      │
  │      ╱╱╱              ───────►       │
  │   ──► ○              ○               │
  │      ╲╲╲             Single direction│
  └──────────────────────────────────────┘

□ QC CHECK: All components clean

STEP 2: INSTALL OLED DISPLAY (10 min)
─────────────────────────────────────────────────────────────────
□ Place barrel in fixture (display end up)
□ Test OLED with test cable - verify all pixels working
□ Position OLED in barrel:
  • Active side facing DOWN (toward lens)
  • Connector aligned with cable slot
□ Apply adhesive around perimeter ONLY

  ⚠️ NO adhesive on active display area!
  
  ┌─────────────────────┐
  │ ╭─────────────────╮ │
  │ │   ACTIVE AREA   │ │ ← NO adhesive!
  │ │   (display)     │ │
  │ ╰─────────────────╯ │
  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Adhesive edge only
  └─────────────────────┘

□ UV cure: 60 seconds at 50mm distance
□ QC CHECK: OLED secured, no adhesive contamination

STEP 3: INSTALL COLLIMATING LENS (10 min)
─────────────────────────────────────────────────────────────────
□ Thread lens mount ring onto barrel (lens end)
□ Place collimating lens in mount:
  • Convex side facing OLED
  
  CORRECT:        INCORRECT:
  ┌───┐           ┌───┐
  │ ( │ →OLED     │ ) │ →OLED
  └───┘           └───┘

□ Adjust focus:
  • Power on OLED (crosshair pattern)
  • Look through lens end
  • Adjust for SHARP focus at infinity
  • Distance OLED to lens: ~25mm
□ Lock with set screw: 0.3 N·m + thread locker
□ QC CHECK: Focus at infinity verified

STEP 4: INSTALL BEAM COMBINER (10 min)
─────────────────────────────────────────────────────────────────
□ Place barrel in alignment fixture (VS-FIX-002)
□ Position beam combiner:
  • 45° angle to optical axis
  • Reflective coating facing lens end

  BEAM COMBINER FUNCTION:
  ┌─────────────────────────────────┐
  │       OLED Image                │
  │           │                     │
  │           ▼                     │
  │        ╱                        │
  │ Eye ◄─╱────────────────► Scene │
  │      ╱ 45° Combiner             │
  │     ╱                           │
  └─────────────────────────────────┘

□ Secure with retaining clips
□ Verify 45° with fixture gauge
□ Power on OLED, check reticle centered in view
□ QC CHECK: Beam combiner at 45°±0.5°

STEP 5: FINAL INSPECTION (5 min)
─────────────────────────────────────────────────────────────────
□ Visual at microscope: no dust, debris, adhesive
□ Functional test: all patterns display correctly
□ Install temporary dust caps on both ends
□ Place in ESD bag with label
□ Record on traveler: Optical sub-assembly complete
□ Sign: _____________ Date: _____________
```

---

# VS-WI-003: ELECTRONICS SUB-ASSEMBLY

**Station**: WS-04 | **Time**: 30 min | **Skill**: Level 3

## Purpose
Integrate Jetson Nano with carrier PCB and verify electronic functions.

## Required Tools
- ESD workbench with mat and wrist strap
- Digital multimeter (4.5 digit)
- DC power supply (0-30V, 5A)
- Programming PC
- Torque screwdriver (0.3-0.8 N·m)

## Procedure

```
⚡ ESD CRITICAL - Wrist strap MUST be connected

PREPARATION (3 min)
─────────────────────────────────────────────────────────────────
□ Verify ESD: wrist strap connected, mat in place
□ Test wrist strap with monitor (green light)
□ Retrieve electronics from kit (Tray 3)
□ Visual inspect: no bent pins, solder defects

STEP 1: MATE JETSON TO CARRIER PCB (5 min)
─────────────────────────────────────────────────────────────────
□ Orient Jetson: USB ports facing outward
□ Align 40-pin header with carrier connector

  JETSON ORIENTATION:
  ┌─────────────────────────────────┐
  │ [USB] [USB] [HDMI]              │ ← Ports out
  │                                 │
  │ ┌───────────────────────────┐   │
  │ │       HEATSINK            │   │
  │ └───────────────────────────┘   │
  │ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │ ← 40-pin
  └─────────────────────────────────┘
              ↓
  ┌─────────────────────────────────┐
  │       CARRIER PCB               │
  └─────────────────────────────────┘

□ Press down evenly until fully seated
□ Install 4× M2.5×6 screws (cross pattern)
□ Torque: 0.5 N·m
□ QC CHECK: Fully seated, screws torqued

STEP 2: CONNECT CAMERA MODULE (5 min)
─────────────────────────────────────────────────────────────────
□ Install lens on IMX477 module (C-mount, hand tight)
□ Connect CSI cable to camera:
  • Open latch (flip up)
  • Insert cable (contacts facing PCB)
  • Close latch

  CSI CONNECTION:
  LATCH OPEN    INSERT      LATCH CLOSED
    ┌───┐       ┌───┐         ┌───┐
    │ ↑ │       │ ↑ │         │───│
    ├───┤       ├───┤         ├───┤
    │   │       │▓▓▓│         │▓▓▓│
    └───┘       └───┘         └───┘

□ Connect CSI cable to Jetson CAM0
□ QC CHECK: Cable secure both ends

STEP 3: POWER TEST (10 min)
─────────────────────────────────────────────────────────────────
□ Set bench supply: 5.0V, 4.0A limit, output OFF
□ Connect power cable to carrier PCB J1
□ Turn on power supply
□ Observe current: <0.5A initially, wait for boot

VOLTAGE MEASUREMENTS:
┌────────────────────────────────────────────────────┐
│ Test Point │ Spec          │ Measured   │ Pass?   │
├────────────┼───────────────┼────────────┼─────────┤
│ TP1 (5V)   │ 4.9 - 5.1V    │ _______V   │ □       │
│ TP2 (3.3V) │ 3.2 - 3.4V    │ _______V   │ □       │
│ TP3 (1.8V) │ 1.7 - 1.9V    │ _______V   │ □       │
│ Current    │ 0.8 - 1.5A    │ _______A   │ □       │
└────────────────────────────────────────────────────┘

□ QC CHECK: All rails within spec

STEP 4: FUNCTIONAL TEST (7 min)
─────────────────────────────────────────────────────────────────
□ Connect HDMI monitor
□ Verify Ubuntu desktop displayed
□ Test camera: nvgstcapture-1.0
□ Verify live image, clear, proper exposure
□ Test IMU: i2cdetect -y 1 (verify 0x68)
□ Run IMU test script, verify motion response

□ Boot test: PASS / FAIL
□ Camera test: PASS / FAIL
□ IMU test: PASS / FAIL

□ Shutdown: sudo shutdown now
□ Wait for LED off, turn off power supply
□ Disconnect all cables

□ QC CHECK: All functional tests passed

STEP 5: PREPARE FOR MAIN ASSEMBLY (2 min)
─────────────────────────────────────────────────────────────────
□ Attach "Electronics Sub-Assy Complete" label
□ Place in ESD tray
□ Route to WS-05 staging
□ Record on traveler: Electronics complete
□ Sign: _____________ Date: _____________
```

---

# VS-WI-004: MAIN MECHANICAL ASSEMBLY

**Station**: WS-05A | **Time**: 60 min | **Skill**: Level 2

## Procedure

```
STEP 1: INSTALL THREAD INSERTS (15 min)
─────────────────────────────────────────────────────────────────
□ Retrieve main housing (VS-M-001)
□ Clean thread insert holes with compressed air
□ Install 4× M3×6 brass thread inserts:

  INSERT LOCATIONS (BOTTOM VIEW):
  ┌─────────────────────────────┐
  │  ①                     ②  │
  │   ○                     ○   │
  │                             │
  │        HOUSING BOTTOM       │
  │                             │
  │   ○                     ○   │
  │  ③                     ④  │
  └─────────────────────────────┘

□ Heat insert to 200°C, press into hole (or press-fit tool)
□ Verify flush with surface
□ Test each thread with M3 screw
□ QC CHECK: All inserts installed, threads verified

STEP 2: INSTALL O-RINGS (10 min)
─────────────────────────────────────────────────────────────────
□ Apply silicone grease to O-ring grooves (thin coat)
□ Install front cover O-ring (28mm ID)
□ Install rear cover O-ring (28mm ID)
□ Install window O-ring (30mm ID)

  O-RING CHECK:
  CORRECT:              INCORRECT:
  ╭───────────╮         ╭───╮
  │           │         │   ╲──╮  ← Twisted!
  ╰───────────╯         ╰───────╯

□ QC CHECK: All 3 O-rings properly seated, no twists

STEP 3: INSTALL PCB MOUNTING PLATE (10 min)
─────────────────────────────────────────────────────────────────
□ Install 6× M3×10 nylon standoffs on PCB plate (hand tight)
□ Position plate in housing, align mounting holes
□ Install 4× M3×8 screws from outside
□ Tighten cross pattern, torque 0.5 N·m
□ QC CHECK: Plate secure, standoffs vertical

STEP 4: INSTALL HEATSINK (15 min)
─────────────────────────────────────────────────────────────────
□ Place thermal pad on heatsink contact area
□ Remove protective film from both sides
□ Position heatsink in housing:
  • Fins facing ventilation slots
  • Thermal pad aligned with Jetson SoC position
□ Install 2× M3×8 screws, torque 0.5 N·m
□ Verify thermal pad compressed
□ QC CHECK: Heatsink installed, thermal interface good

STEP 5: INSTALL BATTERY COMPARTMENT (10 min)
─────────────────────────────────────────────────────────────────
□ Position battery compartment in housing
□ Verify power cable routing path clear
□ Install 2× M3×12 screws, torque 0.5 N·m
□ QC CHECK: Battery compartment secure

□ Record on traveler: Mechanical assembly complete
□ Sign: _____________ Date: _____________
□ Move to WS-05B staging
```

---

# VS-WI-005: ELECTRONICS INTEGRATION

**Station**: WS-05B | **Time**: 45 min | **Skill**: Level 3

```
⚡ ESD wrist strap required

STEP 1: INSTALL ELECTRONICS SUB-ASSEMBLY (10 min)
─────────────────────────────────────────────────────────────────
□ Connect ESD wrist strap
□ Apply thermal paste to Jetson SoC (pea-sized)
□ Position assembly on standoffs, align with heatsink
□ Install 4× M3×8 screws, torque 0.5 N·m
□ QC CHECK: Assembly seated, thermal aligned

STEP 2: INSTALL CAMERA (10 min)
─────────────────────────────────────────────────────────────────
□ Mount camera in bracket (2× M2.5×6 screws)
□ Route CSI cable (no sharp bends)
□ Install bracket in housing (2× M3×8 screws)
□ QC CHECK: Camera secure, cable not pinched

STEP 3: INSTALL SOLENOID (10 min)
─────────────────────────────────────────────────────────────────
□ Position solenoid, verify plunger direction
□ Secure with mounting hardware
□ Connect solenoid wires to J3-2
□ QC CHECK: Solenoid secure, wires connected

STEP 4: WIRE HARNESS ROUTING (15 min)
─────────────────────────────────────────────────────────────────
  ROUTING DIAGRAM:
  ┌─────────────────────────────────────────┐
  │ BATTERY ─────────────────────► J1 POWER │
  │ SOLENOID ────────────────────► J3-2     │
  │ BUTTONS ─────────────────────► J4       │
  │ OLED ────────────────────────► MIPI     │
  │ USB-C ───────────────────────► J2       │
  └─────────────────────────────────────────┘

□ Connect power cable (battery to J1)
□ Connect button wires to J4
□ Route OLED cable (connect later)
□ Verify USB-C aligned with housing cutout
□ Secure all cables with ties
□ QC CHECK: All connections secure, tug test passed

□ Record on traveler, sign, move to WS-05C
```

---

# VS-WI-006: OPTICAL INSTALLATION

**Station**: WS-05C | **Time**: 30 min | **Skill**: Level 3

```
⚠️ Clean gloves required for optical handling

STEP 1: INSTALL OPTICAL SUB-ASSEMBLY (15 min)
─────────────────────────────────────────────────────────────────
□ Put on lint-free gloves
□ Remove dust caps from optical module
□ Final inspection - no dust on surfaces
□ Position barrel in housing bore
□ Align OLED cable with routing path
□ Seat fully, install retaining ring (hand + 1/8 turn)
□ Connect OLED cable to MIPI connector
□ QC CHECK: Optical module secure, aligned

STEP 2: INSTALL IR FILTER (5 min)
─────────────────────────────────────────────────────────────────
□ Position IR filter in camera path
□ Secure with retaining ring
□ QC CHECK: Filter installed, no dust

STEP 3: PRELIMINARY ALIGNMENT CHECK (10 min)
─────────────────────────────────────────────────────────────────
□ Connect test power
□ Power on, verify reticle displayed
□ Verify camera image
□ Check reticle visible through eyepiece
□ Power off
□ QC CHECK: Optical system functional

□ Record on traveler, sign, move to WS-05D
```

---

# VS-WI-007: FINAL ASSEMBLY & CLOSE

**Station**: WS-05D | **Time**: 30 min | **Skill**: Level 2

```
STEP 1: INSTALL PROTECTIVE WINDOW (5 min)
─────────────────────────────────────────────────────────────────
□ Clean window (both sides)
□ Verify O-ring in place (30mm)
□ Position window, apply sealant bead
□ Install retaining ring
□ Wipe excess sealant
□ QC CHECK: Window sealed, clean

STEP 2: INSTALL COVERS (10 min)
─────────────────────────────────────────────────────────────────
FRONT COVER:
□ Verify O-ring in place
□ Align with locating pins
□ Install 4× M3×8 screws, cross pattern, 0.7 N·m

REAR COVER:
□ Verify O-ring, USB-C alignment
□ Install 4× M3×8 screws, 0.7 N·m

□ QC CHECK: Covers flush, gap ≤0.3mm

STEP 3: INSTALL PICATINNY CLAMP (10 min)
─────────────────────────────────────────────────────────────────
□ Position clamp base on housing bottom
□ Install 4× M3×12 screws (into thread inserts), 0.7 N·m
□ Install clamp lever and spring
□ Test operation (smooth, locks securely)
□ QC CHECK: Clamp functional

STEP 4: INSTALL BUTTONS (5 min)
─────────────────────────────────────────────────────────────────
□ Install 3× button caps (Mode, Brightness, Power)
□ Verify button click feel
□ QC CHECK: All buttons functional

STEP 5: TORQUE VERIFICATION
─────────────────────────────────────────────────────────────────
Sample 3 fasteners:
□ Front cover #2: 0.7 N·m _____ Initial: _____
□ Rear cover #3: 0.7 N·m _____ Initial: _____
□ Clamp #1: 0.7 N·m _____ Initial: _____

STEP 6: VISUAL INSPECTION
─────────────────────────────────────────────────────────────────
□ No scratches or damage
□ All labels present
□ No gaps or misalignment
□ Window clean
□ QC CHECK: Visual passed

□ Apply serial number label
□ Record on traveler: Final assembly complete
□ Sign: _____________ Date: _____________
□ Move to WS-06 (Calibration)
```

---

# VS-WI-008: CALIBRATION PROCEDURE

**Station**: WS-06 | **Time**: 45 min | **Skill**: Level 4 (Specialist)

```
STEP 1: FIRMWARE LOAD (10 min)
─────────────────────────────────────────────────────────────────
□ Connect USB-C to calibration PC
□ Power on unit
□ Run: ./flash_vsmash.sh
□ Wait ~5 min for completion
□ Verify firmware version: v__________
□ Program serial number in EEPROM
□ QC CHECK: Firmware loaded, S/N programmed

STEP 2: IMU CALIBRATION (15 min)
─────────────────────────────────────────────────────────────────
□ Place unit on calibration turntable (VS-FIX-003)
□ Run: ./calibrate_imu.sh

6-POSITION STATIC CALIBRATION:
┌─────────────────────────────────────────────────────────────┐
│ Position 1: Level (Z up) ............ Hold 10s  □         │
│ Position 2: Level (Z down) .......... Hold 10s  □         │
│ Position 3: Pitch +90° (X up) ....... Hold 10s  □         │
│ Position 4: Pitch -90° (X down) ..... Hold 10s  □         │
│ Position 5: Roll +90° (Y up) ........ Hold 10s  □         │
│ Position 6: Roll -90° (Y down) ...... Hold 10s  □         │
└─────────────────────────────────────────────────────────────┘

□ Verify results:
  • Accel offsets: X=_____ Y=_____ Z=_____ (expect <0.05g)
  • Gyro offsets: X=_____ Y=_____ Z=_____ (expect <1°/s)
□ Store calibration data in unit
□ QC CHECK: IMU calibration stored

STEP 3: BORESIGHT ALIGNMENT (20 min)
─────────────────────────────────────────────────────────────────
□ Mount unit on boresight fixture
□ Position 3m from target board
□ Power on, enable alignment mode (Mode + Brightness 3s)

  BORESIGHT SETUP:
  ┌────────┐                         ┌─────────┐
  │V-SMASH │◄───── 3 meters ────────►│ TARGET  │
  │ Unit   │                         │  + Grid │
  └────────┘                         └─────────┘

□ Aim at target center
□ View through eyepiece
□ Read reticle position vs target
□ Adjust if needed using adjustment screws

BORESIGHT DATA:
□ Horizontal error: _____ MOA (spec: ±1.0 MOA)  □ PASS
□ Vertical error: _____ MOA (spec: ±1.0 MOA)    □ PASS

□ QC CHECK: Boresight within ±1.0 MOA

□ Generate calibration certificate
□ Record on traveler: Calibration complete
□ Sign: _____________ Date: _____________
□ Move to WS-07 (ATP)
```

---

# VS-WI-009: ATP EXECUTION

**Station**: WS-07 | **Time**: 60 min | **Skill**: Level 3

Refer to VS-FM-004 (ATP Form) for complete procedure.

```
ATP TEST SEQUENCE SUMMARY:
═══════════════════════════════════════════════════════════════════

ATP-01: VISUAL INSPECTION (5 min)
─────────────────────────────────────────────────────────────────
□ Housing finish - no scratches
□ Labels present and readable
□ Optical window clean
□ All fasteners present
□ Picatinny clamp functional
Result: □ PASS  □ FAIL

ATP-02: ELECTRICAL TEST (15 min)
─────────────────────────────────────────────────────────────────
□ Battery voltage: _____V (7.0-8.4V)
□ Standby current: _____A (<0.5A)
□ Active current: _____A (<3.0A)
□ 5V rail: _____V (4.9-5.1V)
□ 3.3V rail: _____V (3.2-3.4V)
Result: □ PASS  □ FAIL

ATP-03: FUNCTIONAL TEST (20 min)
─────────────────────────────────────────────────────────────────
□ Power on sequence (<30s boot)
□ Display test pattern
□ Reticle display
□ Button 1 (Mode)
□ Button 2 (Brightness)
□ Button 3 (Power)
□ Trigger mechanism (<50ms)
□ IMU motion detection
□ Camera live view
□ Power off sequence
Result: □ PASS  □ FAIL

ATP-04: AI DETECTION TEST (15 min)
─────────────────────────────────────────────────────────────────
Setup: Drone target display at 3m

□ Detection rate: _____/20 (≥19/20 = 95%)
□ False positive: _____/20 (≤1/20 = 5%)
□ Detection latency: _____ms (<500ms)
□ Tracking stability: □ Good
□ Fire permission logic: □ Correct
Result: □ PASS  □ FAIL

ATP-05: SEAL TEST (5 min)
─────────────────────────────────────────────────────────────────
□ Unit powered on
□ IP65 spray test (12.5 L/min, 3 min)
□ No water ingress
□ Unit continues functioning
Result: □ PASS  □ FAIL

═══════════════════════════════════════════════════════════════════
FINAL DISPOSITION:

□ ALL TESTS PASSED → Release to packing
□ ANY TEST FAILED → NCR #_________, route to rework

ATP Completed by: _____________ Date: _____________ 
QC Approval: __________________ Date: _____________
```

---

# VS-WI-010: PACKING PROCEDURE

**Station**: WS-08 | **Time**: 15 min | **Skill**: Level 1

```
STEP 1: FINAL WEIGHT CHECK (2 min)
─────────────────────────────────────────────────────────────────
□ Place unit on scale
□ Weight: _______g (spec: 580 ±20g)
□ If out of spec, investigate before packing

STEP 2: PREPARE DOCUMENTATION (5 min)
─────────────────────────────────────────────────────────────────
□ Calibration certificate
□ ATP test report
□ User manual
□ Warranty card
□ Quick start guide

STEP 3: PREPARE ACCESSORIES (3 min)
─────────────────────────────────────────────────────────────────
□ USB-C charging cable
□ Lens cleaning cloth
□ Desiccant pack

STEP 4: PACK UNIT (5 min)
─────────────────────────────────────────────────────────────────
  PACKING ARRANGEMENT:
  ┌───────────────────────────────────────┐
  │ ┌─────────────────────────────────┐   │
  │ │         FOAM TOP                │   │
  │ └─────────────────────────────────┘   │
  │ ┌─────────────┐ ┌─────────────────┐   │
  │ │   V-SMASH   │ │  ACCESSORIES    │   │
  │ │   (foam     │ │  Cable, cloth   │   │
  │ │   cutout)   │ │  desiccant      │   │
  │ └─────────────┘ └─────────────────┘   │
  │ ┌─────────────────────────────────┐   │
  │ │      DOCUMENTATION              │   │
  │ └─────────────────────────────────┘   │
  │ ┌─────────────────────────────────┐   │
  │ │         FOAM BOTTOM             │   │
  │ └─────────────────────────────────┘   │
  └───────────────────────────────────────┘

□ Place foam bottom
□ Place unit in cutout
□ Add accessories
□ Place documentation
□ Add desiccant
□ Place foam top
□ Close and latch case

STEP 5: LABELING (2 min)
─────────────────────────────────────────────────────────────────
□ Shipping label
□ "THIS SIDE UP" label
□ "FRAGILE" label
□ Packing slip in envelope

STEP 6: SHIP VERIFICATION
─────────────────────────────────────────────────────────────────
□ S/N matches shipping documents
□ Record in shipping log
□ Move to shipping staging

UNIT SHIPPED: S/N _____________ Date: _____________
```

---

# APPENDIX A: TORQUE SPECIFICATIONS

| Fastener | Application | Torque | Notes |
|----------|-------------|--------|-------|
| M2×4 | OLED mounting | 0.2 N·m | Do not overtorque |
| M2.5×6 | PCB, Camera | 0.5 N·m | ESD area |
| M3×8 | PCB plate, Heatsink, Covers | 0.5-0.7 N·m | Cross pattern |
| M3×12 | Picatinny, Battery | 0.7 N·m | Thread inserts |
| Set screw | Lens lock | 0.3 N·m | With thread locker |

---

# APPENDIX B: TROUBLESHOOTING

| Symptom | Cause | Solution |
|---------|-------|----------|
| Won't power on | Dead battery | Charge/replace |
| No display | OLED cable loose | Reseat MIPI |
| Blurry reticle | Focus wrong | Recalibrate optical |
| Camera fail | CSI cable loose | Reseat both ends |
| IMU no response | I2C issue | Check PCB solder |
| Boresight off | Alignment shifted | Re-calibrate |
| Water ingress | O-ring failure | Replace, re-seal |
| Buttons fail | Wire disconnected | Check J4 |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Production Eng | Initial release |

---

*V-SMASH-LITE Production Work Instructions v1.0*

**END OF DOCUMENT**
