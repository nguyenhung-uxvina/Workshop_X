# PZT Sensor Installation Work Instructions

> **Document**: WI-BB01-PZT-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Closes**: DfA-007
> **Skill Level**: Technician (basic training)

---

## 1. Scope

Installation of piezoelectric (PZT) impact sensors on AR400 steel target plates for BB-01 naval target system.

| Parameter | Value |
|-----------|-------|
| Sensors per target | 1 (primary) |
| Total sensors | 4 (one per target) |
| Sensor type | PZT ceramic disc 27mm |
| Mounting method | Epoxy bond + potting |
| Protection | IP68 (marine epoxy) |

---

## 2. Required Materials

### 2.1 Bill of Materials (per sensor)

| Item | Part Number | Qty | Check |
|------|-------------|-----|-------|
| PZT disc 27mm | PZT-27-2K | 1 | ☐ |
| Shielded cable 2m | CBL-SHD-2C | 1 | ☐ |
| M12 connector (panel mount) | M12-4P-PM | 1 | ☐ |
| M12 connector (cable) | M12-4P-F | 1 | ☐ |
| Marine epoxy (2-part) | EPX-MARINE | 50g | ☐ |
| Silicone sealant | SIL-RTV | 10g | ☐ |
| Heat shrink tubing | HST-6MM | 50mm | ☐ |
| Cable tie | CT-100 | 2 | ☐ |

### 2.2 Tools Required

| Tool | Purpose | Check |
|------|---------|-------|
| Isopropyl alcohol (IPA) | Surface cleaning | ☐ |
| Lint-free wipes | Surface prep | ☐ |
| 120-grit sandpaper | Surface roughening | ☐ |
| Mixing cups (disposable) | Epoxy mixing | ☐ |
| Mixing sticks | Epoxy mixing | ☐ |
| Soldering iron + solder | Wire connections | ☐ |
| Wire strippers | Cable prep | ☐ |
| Heat gun | Heat shrink | ☐ |
| Multimeter | Continuity test | ☐ |
| Marker pen | Position marking | ☐ |
| Masking tape | Area protection | ☐ |
| Nitrile gloves | Hand protection | ☐ |
| Safety glasses | Eye protection | ☐ |

### 2.3 Consumables

| Item | Qty per sensor |
|------|----------------|
| IPA | 20ml |
| Lint-free wipes | 5 |
| Mixing cups | 2 |
| Mixing sticks | 2 |
| Nitrile gloves | 2 pairs |

---

## 3. Safety Precautions

| Hazard | Precaution |
|--------|------------|
| Epoxy fumes | Work in ventilated area |
| Epoxy skin contact | Wear nitrile gloves |
| Soldering fumes | Use fume extractor |
| Sharp steel edges | Wear work gloves for handling |
| Eye hazard | Wear safety glasses |

**First Aid**:
- Epoxy on skin: Wash with soap and water immediately
- Epoxy in eyes: Flush with water 15 min, seek medical attention

---

## 4. Sensor Location

### 4.1 Target Plate Layout

```
┌─────────────────────────────────────┐
│           TARGET PLATE              │
│          (Front - facing shooter)   │
│                                     │
│                                     │
│                                     │
│                                     │
│                                     │
│              ┌───┐                  │
│              │ ● │ Chain mount hole │
│              └───┘                  │
│                                     │
└─────────────────────────────────────┘

┌─────────────────────────────────────┐
│           TARGET PLATE              │
│          (Back - sensor side)       │
│                                     │
│         ╔═══════════════╗           │
│         ║   SENSOR      ║           │
│         ║   ZONE        ║           │
│         ║    ┌───┐      ║           │
│         ║    │PZT│      ║           │
│         ║    └───┘      ║           │
│         ║   (center)    ║           │
│         ╚═══════════════╝           │
│              ┌───┐                  │
│              │   │ Chain mount      │
│              └───┘                  │
│                                     │
│    ┌───┐                            │
│    │M12│ Connector mount            │
│    └───┘ (bottom corner)            │
│                                     │
└─────────────────────────────────────┘
```

### 4.2 Sensor Position

| Parameter | Value |
|-----------|-------|
| Location | Center of plate (back side) |
| Distance from edges | ≥50mm |
| Distance from chain hole | ≥100mm |
| Orientation | Flat side to plate |

### 4.3 Connector Position

| Parameter | Value |
|-----------|-------|
| Location | Bottom corner (back side) |
| Distance from edge | 30mm |
| Orientation | Cable exit downward |

---

## 5. Installation Procedure

### Phase 1: Surface Preparation (15 min)

#### Step 1.1: Clean Target Plate

| # | Action | Check |
|---|--------|-------|
| 1 | Place target plate face-down on clean work surface | ☐ |
| 2 | Mark sensor position (center of plate) with marker | ☐ |
| 3 | Mark connector position (bottom corner, 30mm from edges) | ☐ |
| 4 | Apply masking tape around sensor area (50mm border) | ☐ |

#### Step 1.2: Surface Roughening

| # | Action | Check |
|---|--------|-------|
| 1 | Sand sensor area with 120-grit sandpaper | ☐ |
| 2 | Sand in cross-hatch pattern | ☐ |
| 3 | Sand area ~40mm diameter (larger than sensor) | ☐ |
| 4 | Remove all sanding dust with brush | ☐ |

#### Step 1.3: Degrease

| # | Action | Check |
|---|--------|-------|
| 1 | Dampen lint-free wipe with IPA | ☐ |
| 2 | Wipe sanded area thoroughly | ☐ |
| 3 | Wipe in one direction (not circular) | ☐ |
| 4 | Allow to dry completely (~2 min) | ☐ |
| 5 | Do not touch cleaned area | ☐ |

**Quality Check**: Surface should be dull gray, no shiny spots, no oil residue.

---

### Phase 2: PZT Preparation (10 min)

#### Step 2.1: Inspect PZT Disc

| # | Check | Pass Criteria | Result |
|---|-------|---------------|--------|
| 1 | Visual | No cracks, chips | ☐ Pass ☐ Fail |
| 2 | Electrodes | Silver coating intact | ☐ Pass ☐ Fail |
| 3 | Flatness | No warping | ☐ Pass ☐ Fail |

#### Step 2.2: Prepare Wires

| # | Action | Check |
|---|--------|-------|
| 1 | Cut shielded cable to 300mm length (for initial work) | ☐ |
| 2 | Strip outer jacket 30mm | ☐ |
| 3 | Separate shield braid, twist into wire | ☐ |
| 4 | Strip inner conductors 5mm | ☐ |
| 5 | Tin all wire ends with solder | ☐ |

#### Step 2.3: Solder Wires to PZT

```
PZT Disc (top view)
┌─────────────────┐
│    ┌───────┐    │
│    │ TOP   │    │  ← Signal (inner conductor)
│    │ELECTRODE   │
│    └───────┘    │
│                 │
│  BOTTOM ELECTRODE   ← Ground (shield)
│  (wraps to back)│
└─────────────────┘
```

| # | Action | Check |
|---|--------|-------|
| 1 | Solder signal wire (red/white) to TOP electrode | ☐ |
| 2 | Solder ground wire (shield) to BOTTOM electrode | ☐ |
| 3 | Use minimal solder, avoid heat damage | ☐ |
| 4 | Solder time: <3 seconds per joint | ☐ |
| 5 | Apply heat shrink over solder joints | ☐ |

#### Step 2.4: Continuity Test

| # | Test | Expected | Measured | Result |
|---|------|----------|----------|--------|
| 1 | Signal to Ground (DC) | >1MΩ | _____ | ☐ Pass |
| 2 | Signal continuity | <1Ω | _____ | ☐ Pass |
| 3 | Ground continuity | <1Ω | _____ | ☐ Pass |

**If fail**: Inspect solder joints, check for shorts.

---

### Phase 3: Sensor Bonding (20 min)

#### Step 3.1: Mix Epoxy

| # | Action | Check |
|---|--------|-------|
| 1 | Put on fresh nitrile gloves | ☐ |
| 2 | Dispense Part A (resin) into mixing cup: 5g | ☐ |
| 3 | Dispense Part B (hardener) into cup: 5g | ☐ |
| 4 | Mix thoroughly for 2 minutes | ☐ |
| 5 | Scrape sides and bottom of cup while mixing | ☐ |

**Working time**: 30 minutes at 25°C

#### Step 3.2: Apply Bonding Layer

| # | Action | Check |
|---|--------|-------|
| 1 | Apply thin epoxy layer to sensor area on plate | ☐ |
| 2 | Layer thickness: ~0.5mm | ☐ |
| 3 | Apply thin epoxy layer to PZT bottom (flat side) | ☐ |
| 4 | Do NOT get epoxy on top electrode | ☐ |

#### Step 3.3: Position Sensor

| # | Action | Check |
|---|--------|-------|
| 1 | Place PZT on marked position, flat side down | ☐ |
| 2 | Press gently and twist slightly to spread epoxy | ☐ |
| 3 | Center sensor on marked position | ☐ |
| 4 | Route cable toward connector position | ☐ |
| 5 | Ensure no air bubbles under sensor | ☐ |

#### Step 3.4: Secure During Cure

| # | Action | Check |
|---|--------|-------|
| 1 | Place small weight on sensor (~100g) | ☐ |
| 2 | Use soft pad between weight and sensor | ☐ |
| 3 | Verify sensor hasn't shifted | ☐ |
| 4 | Do not disturb for 4 hours minimum | ☐ |

**Cure time**: 4 hours (handling) / 24 hours (full strength)

---

### Phase 4: Connector Installation (15 min)

*Perform after bonding epoxy has cured (4+ hours)*

#### Step 4.1: Drill Connector Hole

| # | Action | Check |
|---|--------|-------|
| 1 | Mark hole position (from Step 1.1) | ☐ |
| 2 | Center punch mark | ☐ |
| 3 | Drill pilot hole (3mm) | ☐ |
| 4 | Drill final hole (12mm for M12 connector) | ☐ |
| 5 | Deburr hole edges | ☐ |
| 6 | Clean metal shavings | ☐ |

#### Step 4.2: Install Panel Connector

| # | Action | Check |
|---|--------|-------|
| 1 | Apply thread sealant to connector threads | ☐ |
| 2 | Insert connector from back side | ☐ |
| 3 | Install locknut from front side | ☐ |
| 4 | Tighten to 2-3 Nm | ☐ |
| 5 | Verify connector orientation (cable exit down) | ☐ |

#### Step 4.3: Wire Connector

| # | Action | Check |
|---|--------|-------|
| 1 | Route cable to connector | ☐ |
| 2 | Trim cable to length (leave 50mm slack) | ☐ |
| 3 | Strip and prepare cable ends | ☐ |
| 4 | Solder wires to connector pins per pinout | ☐ |
| 5 | Apply heat shrink to joints | ☐ |

**M12 Connector Pinout**:

| Pin | Signal | Wire Color |
|-----|--------|------------|
| 1 | Signal+ | Red/White |
| 2 | Signal- (Ground) | Shield |
| 3 | NC | - |
| 4 | NC | - |

#### Step 4.4: Continuity Retest

| # | Test | Expected | Result |
|---|------|----------|--------|
| 1 | Pin 1 to PZT top | <2Ω | ☐ Pass |
| 2 | Pin 2 to PZT bottom | <2Ω | ☐ Pass |
| 3 | Pin 1 to Pin 2 | >1MΩ | ☐ Pass |

---

### Phase 5: Potting (20 min)

*Waterproofing the sensor assembly*

#### Step 5.1: Prepare Potting Dam

| # | Action | Check |
|---|--------|-------|
| 1 | Create dam around sensor using masking tape | ☐ |
| 2 | Dam diameter: ~50mm | ☐ |
| 3 | Dam height: ~10mm | ☐ |
| 4 | Seal dam edges with silicone | ☐ |
| 5 | Allow silicone to cure (15 min) | ☐ |

#### Step 5.2: Mix Potting Epoxy

| # | Action | Check |
|---|--------|-------|
| 1 | Mix fresh batch of marine epoxy (20g total) | ☐ |
| 2 | Mix thoroughly for 2 minutes | ☐ |
| 3 | Allow bubbles to rise (2 min) | ☐ |

#### Step 5.3: Pour Potting

| # | Action | Check |
|---|--------|-------|
| 1 | Pour epoxy slowly into dam | ☐ |
| 2 | Fill to ~5mm above sensor surface | ☐ |
| 3 | Cover cable exit from sensor | ☐ |
| 4 | Pop any visible bubbles with toothpick | ☐ |
| 5 | Do not overfill (leave 3mm to dam top) | ☐ |

#### Step 5.4: Cure

| # | Action | Check |
|---|--------|-------|
| 1 | Keep plate level during cure | ☐ |
| 2 | Protect from dust/debris | ☐ |
| 3 | Cure time: 24 hours minimum | ☐ |
| 4 | Temperature: 20-30°C | ☐ |

---

### Phase 6: Final Assembly (10 min)

*After potting has fully cured (24+ hours)*

#### Step 6.1: Remove Dam

| # | Action | Check |
|---|--------|-------|
| 1 | Carefully peel masking tape dam | ☐ |
| 2 | Trim any epoxy overflow with knife | ☐ |
| 3 | Smooth edges with fine sandpaper if needed | ☐ |

#### Step 6.2: Cable Strain Relief

| # | Action | Check |
|---|--------|-------|
| 1 | Apply silicone sealant around cable entry | ☐ |
| 2 | Secure cable with cable tie to frame mount point | ☐ |
| 3 | Leave service loop (~100mm) | ☐ |

#### Step 6.3: Assemble Mating Cable

| # | Action | Check |
|---|--------|-------|
| 1 | Cut cable to required length (per installation) | ☐ |
| 2 | Install M12 female connector on one end | ☐ |
| 3 | Install appropriate connector for MCU box on other end | ☐ |
| 4 | Test continuity end-to-end | ☐ |

---

## 6. Quality Verification

### 6.1 Visual Inspection

| # | Check | Pass Criteria | Result |
|---|-------|---------------|--------|
| 1 | Potting coverage | Sensor fully covered | ☐ Pass ☐ Fail |
| 2 | Potting surface | No cracks, voids | ☐ Pass ☐ Fail |
| 3 | Connector seal | No gaps | ☐ Pass ☐ Fail |
| 4 | Cable routing | No sharp bends | ☐ Pass ☐ Fail |

### 6.2 Electrical Test

| # | Test | Method | Pass Criteria | Result |
|---|------|--------|---------------|--------|
| 1 | Continuity | Multimeter | <2Ω signal path | ☐ Pass |
| 2 | Insulation | Multimeter | >1MΩ sig-gnd | ☐ Pass |
| 3 | Tap test | Tap sensor, measure voltage | >10mV peak | ☐ Pass |

### 6.3 Submersion Test (Optional)

| # | Step | Duration | Pass Criteria |
|---|------|----------|---------------|
| 1 | Submerge in fresh water | 30 min | No bubbles |
| 2 | Dry and retest electrically | - | All tests pass |

---

## 7. Troubleshooting

| Symptom | Likely Cause | Solution |
|---------|--------------|----------|
| No signal | Broken wire, bad solder | Retest continuity, resolder |
| Weak signal | Poor bond to plate | Rebond with proper prep |
| Intermittent | Cracked solder joint | Resolder connections |
| Signal + noise | Shield not connected | Check ground connection |
| Water ingress | Potting incomplete | Remove and re-pot |

---

## 8. Record

| Field | Value |
|-------|-------|
| Target ID | ☐ T1 ☐ T2 ☐ T3 ☐ T4 |
| PZT Serial | _____________ |
| Installation Date | _____________ |
| Technician | _____________ |
| Epoxy Batch | _____________ |
| Visual Inspection | ☐ Pass ☐ Fail |
| Electrical Test | ☐ Pass ☐ Fail |
| Submersion Test | ☐ Pass ☐ Fail ☐ N/A |
| Final Result | ☐ **PASS** ☐ FAIL |

---

## 9. Related Documents

- [[quality/dfx-review-mcu-box]] - DfA-007 source
- [[decisions/DEC-002-acoustic-sensor-analysis]] - PZT selection rationale
- [[design/mcu-box-assembly-instructions]] - MCU box assembly
- [[quality/test-procedure-checklist]] - System integration test
- [[quality/fmea-bb01]] - DET-01 to DET-04 sensor failure modes

---

## 10. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-27 | Initial release |

---

*Work Instructions WI-BB01-PZT-001*
*Closes DfA-007*
*PZT Sensor Installation for BB-01 Naval Target System*
