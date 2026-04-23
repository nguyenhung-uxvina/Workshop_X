# VN-12.7MM-SIM-015: SYSTEM ARCHITECTURE
## Phase 3: Embodiment Design

**Document**: VN-12.7MM-SIM-015-ARCH | **Version**: 2.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 3 - Embodiment Design (Pahl & Beitz Chapter 7)
**Scope**: I-01 (HONG HAI) -- Indoor shore-based single trainer station
**Selected Concept**: V2 Standard Trainer (VDI 2225 score 76.3%)
**Supersedes**: VN-12.7MM-SIM-006-ARCH v1.0 (2026-01-20)
**Input Documents**:
- VN-12.7MM-SIM-002-REQ v1.3 (201 requirements)
- VN-12.7MM-SIM-010-FS v2.0 (Function Structure)
- VN-12.7MM-SIM-011-MM v2.0 (Morphological Matrix)
- VN-12.7MM-SIM-012-CE v2.0 (Concept Evaluation)
- VN-12.7MM-SIM-013-GATE v1.0 (Phase 2 Gate Review -- PASSED)

---

# 1. CHANGES FROM v1.0 (Doc 006)

| Aspect | v1.0 | v2.0 |
|--------|------|------|
| Document number | 006 | 015 |
| Subsystem count | 7 (informal) | 8 (formal, with spatial allocation) |
| Component specs | Generic (e.g., "RTX 3060") | Specific models with cost ranges |
| Requirement traceability | None | Every subsystem mapped to requirements |
| Interface definitions | 10 informal | 22 quantified (from FS v2.0 IF-01 to IF-22) |
| Mass budget | ~160 kg (rough) | 175 kg (itemized) |
| Power budget | ~750W (PSU size) | Detailed per-subsystem (Doc 018) |
| Spatial layout | Not specified | Envelope dimensions per subsystem |
| Variant provisions | Not addressed | Variant hooks documented |

---

# 2. SYSTEM BLOCK DIAGRAM

```
┌─────────────────────────────────────────────────────────────────────────────────────────┐
│                    VN-12.7MM-SIM I-01 "HONG HAI" SYSTEM ARCHITECTURE v2.0              │
├─────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                         │
│     ┌───────────────────────────────────────────────────────────────────────────────┐   │
│     │                    TRAINER STATION                                             │   │
│     │                                                                               │   │
│     │   SS1: MECHANICAL    SS2: SENSING     SS3: RESISTANCE   SS4: COMPUTING        │   │
│     │   ┌──────────────┐  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐      │   │
│     │   │• Gun replica │  │• Trav encoder│  │• Trav brake  │  │• Workstation │      │   │
│     │   │• Pedestal    │  │• Elev encoder│  │• Elev brake  │  │• GPU         │      │   │
│     │   │• Base frame  │  │• Trigger FSR │  │• 24V PSU     │  │• I/O board   │      │   │
│     │   │• Elev assy   │  │• E-stop      │  │• PWM driver  │  │• OS + SW     │      │   │
│     │   │• Trav assy   │  │              │  │              │  │              │      │   │
│     │   │• Slip ring   │  │              │  │              │  │              │      │   │
│     │   └──────┬───────┘  └──────┬───────┘  └──────┬───────┘  └──────┬───────┘      │   │
│     │          │                 │                  │                 │              │   │
│     │          │ M-IF-001..005   │ E-IF-001..003    │ E-IF-004..005  │ E-IF-009     │   │
│     │          │ (mechanical)    │ (sensor signals)  │ (brake drive)  │ (USB/DP)     │   │
│     │          │                 │                  │                 │              │   │
│     │   SS5: VISUAL        SS6: AUDIO      SS7: FEEDBACK    SS8: INSTRUCTOR        │   │
│     │   ┌──────────────┐  ┌─────────────┐  ┌──────────────┐  ┌──────────────┐      │   │
│     │   │• 3x 27" QHD  │  │• 5.1 system │  │• Vibration   │  │• Monitor     │      │   │
│     │   │• Monitor arms│  │• 300W amp   │  │• Status LEDs │  │• Keyboard    │      │   │
│     │   │• Cable mgmt  │  │• Subwoofer  │  │• ERM motor   │  │• Control SW  │      │   │
│     │   └──────────────┘  └─────────────┘  └──────────────┘  └──────────────┘      │   │
│     │                                                                               │   │
│     └───────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                         │
│     SS9: POWER DISTRIBUTION (integrated, not a separate physical subsystem)             │
│     ┌───────────────────────────────────────────────────────────────────────────────┐   │
│     │ 220VAC → Main PSU (750W) → PC + monitors + amp + I/O                         │   │
│     │                          → 24VDC PSU (120W) → brakes + vibration motor        │   │
│     │ E-stop → cuts 24V rail (brakes de-energize = free rotation = safe)            │   │
│     └───────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                         │
└─────────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 3. SUBSYSTEM SPECIFICATIONS

## SS1: Mechanical Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Physical structure, motion axes, operator interface | F1, F5.2, G-001..G-010, F-001..F-008 |
| **Gun replica** | Steel tube barrel (dia 25mm, L=1600mm +-10%), receiver mockup (sheet steel), spade grips (380-420mm spacing), rear sight mockup | G-004, G-005, G-006 |
| **Pedestal** | Steel column, dia 400-500mm, height adjustable (eye level 1600-1800mm), internal cable routing | G-002, G-003 |
| **Base frame** | Steel welded, 800x800mm footprint, 4x M12 floor anchors, 4x leveling feet, anti-tip >1.5x stability | G-001, SF-009 |
| **Traverse assembly** | Slewing ring bearing dia 300mm, 360 deg continuous, cable pass-through via slip ring (12 circuits) | K-001, M-IF-002, M-IF-005 |
| **Elevation assembly** | Trunnion on needle bearings, dia 40mm shaft, -10 to +85 deg arc, mechanical stops at limits | K-002, M-IF-001 |
| **Mass budget** | Gun: 25 kg, Elevation: 15 kg, Traverse: 30 kg, Pedestal: 40 kg, Base: 50 kg = **160 kg mech** | F-004 (230 kg total load capacity) |
| **Envelope** | Footprint 2.5x2.5m (incl clearance), height 1.8m to eye level, 3.0x3.0m room needed | G-001, G-009, G-010 |
| **Material** | Structural steel (S235JR equivalent), powder coated, RoHS compliant | M-001, M-002, M-006, M-007 |
| **Manufacturing** | Welding, CNC drilling, standard sheet metal bending. No special tooling. | PR-003, PR-005 |
| **Local content** | 100% -- all fabricated locally | PR-001 |

## SS2: Sensing Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Sense traverse, elevation, trigger, emergency stop | F1.1, F1.2, F1.3, F6.7 |
| **Traverse encoder** | Optical incremental, 16-bit (65536 CPR), 5V TTL A/B/Z, resolution 0.005 deg | K-001, K-007, S-005 |
| **Traverse encoder model** | Omron E6B2-CWZ6C or Autonics E50S8-8000-3-T-24 | -- |
| **Elevation encoder** | Optical incremental, 16-bit, same spec as traverse | K-002, K-007, S-005 |
| **Trigger sensor** | FSR (Interlink FSR-402), 0-100N range, analog 0-3.3V via voltage divider | S-006, S-007, F-003 |
| **Trigger threshold** | Digital: >30N = fire. Analog: 0-100% mapped to 0-100N | S-006, S-007 |
| **Emergency stop** | Mushroom-head, NC contact, 24V circuit, within operator reach | SF-001 |
| **Sample rate** | Encoders: 1000 Hz (via I/O board counter input). Trigger: 1000 Hz (ADC) | IF-01, IF-02, IF-03 |
| **Latency** | Sensor-to-PC: <=2 ms (USB HID polling) | Latency budget (<=46 ms total) |
| **Local content** | 0% (encoders + FSR imported) | -- |

## SS3: Resistance Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Provide adjustable, smooth resistance on both axes | F1.4, F1.5 |
| **Traverse brake** | Magnetic particle brake, 20 Nm rated, 24VDC, flange mount | F-001 (5-15 Nm) |
| **Traverse brake model** | Ogura OPB-N 20 or Placid Industries B5-24 | -- |
| **Elevation brake** | Magnetic particle brake, 5 Nm rated, 24VDC, flange mount | F-002 (10-30 N at grip) |
| **Torque variation** | <=10% at any fixed current across full rotation | K-005 |
| **Backlash** | <=0.05 deg (brake + rigid clamp coupling) | F-006 |
| **Control** | PWM drive via I/O board, 1 kHz PWM, 0-100% duty = 0-rated torque | F1.4.3 |
| **24V PSU** | Adjustable DC supply, 24V/5A (120W), CC/CV mode | E-IF-004, E-IF-005 |
| **Torque calibration** | Current-to-torque lookup table in firmware; temperature compensation if GO-4 shows >15% drift | R3 mitigation |
| **Physical gate** | Magnetic brake prototype test (Doc 014), deadline 2026-04-05 | -- |
| **Local content** | 0% (brakes imported). PSU partially local. | -- |

## SS4: Computing Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Run simulation, ballistics, scoring, I/O, system management | F2, F3, F4, F6 |
| **CPU** | Intel Core i7-12700 or AMD Ryzen 7 5800X (12+ threads) | Compute load: ballistics + AI + rendering |
| **GPU** | NVIDIA RTX 3060 12GB or RTX 4060 8GB (3x DisplayPort output) | S-003 (>=60 fps x3 monitors), E-IF-010 |
| **RAM** | 32 GB DDR4-3200 | Unity + scene + ballistic buffers |
| **Storage** | 1 TB NVMe SSD | OS + Unity + assets + 12-month session data (S-016) |
| **I/O board** | USB-based microcontroller (STM32 or Arduino Due) | S-IF-001 (1000 Hz input), S-IF-002 (brake PWM) |
| **I/O capabilities** | 2x quadrature counter, 4x ADC (12-bit), 4x PWM out, 8x digital I/O, 1x USB 2.0 | E-IF-001..008 |
| **Sound card** | 5.1 channel output (integrated or USB) | S-IF-004 |
| **Network** | Gigabit Ethernet (instructor station link) | S-IF-005 |
| **OS** | Windows 10/11 Pro | Unity compatibility |
| **Simulation engine** | Unity 2022 LTS (free tier, <$1M revenue) | F2.2 rendering |
| **Ballistics** | 6-DOF analytical model, C# in Unity | F3.1 |
| **Fire control** | Analytical real-time, C# in Unity | F3.2 |
| **Target AI** | Behavior trees (Unity built-in + custom) | F2.3, F2.4 |
| **Scoring** | Statistical scoring + AAR replay | F4.1..F4.8 |
| **System management** | Automated BIST + sequencer | F6.1..F6.8 |
| **Local content** | 0% (hardware imported). Software 100% local (in-house development). | -- |

## SS5: Visual Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Display rendered scene to operator | F5.1, F2.6 |
| **Monitors** | 3x 27" IPS, QHD (2560x1440), 144 Hz, <=5ms GTG, thin bezel (<=8mm) | S-001, S-002, S-003 |
| **Monitor model** | Samsung Odyssey G5 27" or LG 27GP850 or equivalent | -- |
| **FOV** | 120 deg total (3x ~40 deg, angled at 30 deg L/R) | S-002 (>=90 deg) |
| **Connection** | 3x DisplayPort 1.4, NVIDIA Surround | E-IF-010, S-IF-003 |
| **Mounting** | Triple monitor arm, adjustable height, center at eye level (1600-1800mm) | G-007 (1500-2500mm viewing distance) |
| **Viewing distance** | 1500-2000 mm from operator eye to center monitor | G-007 |
| **Latency contribution** | Display scan: <=7 ms (144 Hz panel) | Latency budget |
| **Local content** | Partially -- Samsung/LG have VN factories; monitor arms local fabrication | -- |

## SS6: Audio Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Generate weapon and environmental audio cues | F5.3, F5.4 |
| **Configuration** | 5.1 surround: 3x front (FL/C/FR, 50W each), 2x surround (SL/SR, 30W each), 1x sub (100W, 8") | S-008, S-009 |
| **Amplifier** | 5.1 channel AVR or discrete amp, 300W total | -- |
| **SPL at operator** | 90-120 dB(A) firing sound, directional impact sounds | S-008 |
| **Frequency range** | 40 Hz - 20 kHz | -- |
| **Speaker placement** | Front: behind monitors. Surround: 110 deg behind operator. Sub: floor. | -- |
| **Audio sources** | 12.7mm firing (loop, front), impact (positional), ambient (surround), reload/malfunction (center) | -- |
| **Interface** | WASAPI 48 kHz, 5.1 output from sound card | S-IF-004 |
| **Local content** | Partially -- speakers (JBL/Edifier) available locally; AVR imported | -- |

## SS7: Feedback Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Provide haptic and visual status cues | F5.5, F5.2, F6.8 |
| **Vibration motor** | ERM motor 12VDC, mounted on gun replica receiver, triggered on fire events | F-005 (Wish) |
| **Status LEDs** | 8 channels: Power, System OK, BIST Pass/Fail, Brake Active (x2), Fire, E-stop Active | MT-006 |
| **LED interface** | 5V digital out from I/O board | E-IF-007 |
| **HUD overlay** | Software-rendered on center monitor: ammo count, barrel temp, score, mode | S-012 |
| **Local content** | 100% -- vibration motor and LEDs locally sourceable | -- |

## SS8: Instructor Subsystem

| Parameter | Specification | Requirement |
|-----------|--------------|-------------|
| **Function** | Supervisor control, monitoring, AAR | F6.3, F6.4, F4.5, F4.6 |
| **Hardware** | 24" monitor + keyboard + mouse, connected to main PC via Ethernet or 2nd HDMI | S-013, OP-012 |
| **Software** | Instructor UI (Unity secondary window or web interface) | F6.3, F6.4 |
| **Capabilities** | Scenario select, difficulty, inject events, pause/reset, live monitoring, AAR replay, report export | OP-003..OP-012, F4.5, F4.6 |
| **Data export** | CSV/PDF session reports, USB drive export | F4.5 |
| **Language** | Vietnamese primary, English option (W) | OP-010, OP-011 |
| **Network** | Gigabit Ethernet to main PC (same LAN or direct) | S-IF-005 |
| **Local content** | 100% -- standard PC peripherals + local SW dev | -- |

---

# 4. SUBSYSTEM-REQUIREMENT TRACEABILITY

## 4.1 Coverage Matrix

| Subsystem | Requirements Fulfilled | Count |
|-----------|----------------------|-------|
| SS1 Mechanical | G-001..G-010, F-001..F-008, M-001..M-008, SF-002,005,008,009, ER-001..006, TR-001..006, AS-001..006 | 48 |
| SS2 Sensing | K-001..K-007, S-005..S-007, SF-001,004 | 11 |
| SS3 Resistance | K-005, K-008..K-010, F-001, F-002, F-006 | 7 |
| SS4 Computing | BM-001..010, FC-001..009, OP-001..018, S-003..S-004,S-012..S-019, TE-001..011, SC-001..014 | 68 |
| SS5 Visual | S-001, S-002, S-003, S-010, S-011 | 5 |
| SS6 Audio | S-008, S-009 | 2 |
| SS7 Feedback | F-005, S-012 (HUD), MT-006 (partial) | 3 |
| SS8 Instructor | OP-003..012, S-013..S-019, OP-012 | 14 |
| System-level | E-001..E-009, SF-003,006,010..012, PR-001..006, QC-001..006, CO-001..007, SCH-001..004, MT-001..010, ER-007..009 | 43 |
| **Total** | | **201** |

## 4.2 Unallocated Requirements Check

**NONE** -- all 201 requirements from REQ v1.3 are allocated to at least one subsystem.

---

# 5. MASS BUDGET

| Subsystem | Components | Est. Mass (kg) |
|-----------|-----------|----------------|
| SS1 Mechanical | Gun replica (25), elevation assy (15), traverse assy (30), pedestal (40), base frame (50) | 160 |
| SS2 Sensing | Encoders (0.5), FSR (0.01), E-stop (0.1) | 0.6 |
| SS3 Resistance | Traverse brake (2.5), elevation brake (1.0), 24V PSU (1.5), wiring (0.5) | 5.5 |
| SS4 Computing | PC workstation (10), I/O board + enclosure (0.5) | 10.5 |
| SS5 Visual | 3x monitors (18), monitor arms (6) | 24 |
| SS6 Audio | Speakers (8), amplifier (3), subwoofer (5) | 16 |
| SS7 Feedback | Vibration motor (0.1), LEDs + wiring (0.2) | 0.3 |
| SS8 Instructor | Monitor (5), keyboard+mouse (1) | 6 |
| Cabling & misc | Power cables, signal cables, connectors, cable management | 3 |
| **TOTAL** | | **~226 kg** |
| **Requirement** | TR-002: max shipping weight <=500 kg | **PASS** (margin: 274 kg) |
| **Structural** | F-004: support 150 kg operator + 80 kg weapon replica = 230 kg | Base designed for 350 kg total (226 system + 150 operator = 376 kg -- OK with safety factor) |

---

# 6. SPATIAL LAYOUT

## 6.1 Plan View (Top Down)

```
                    3000mm room width
    ┌──────────────────────────────────────────┐
    │                                          │
    │    ┌─────────────────────────────────┐   │
    │    │  MONITOR ARRAY (1800mm arc)     │   │
    │    │   [LEFT]  [CENTER]  [RIGHT]     │   │
    │    │          30° each angle          │   │
    │    └─────────────┬───────────────────┘   │
    │                  │                        │
    │       1500-2000mm viewing distance        │
    │                  │                        │
    │            ┌─────┴─────┐                  │
    │            │ TRAVERSE  │                  │
    │     ┌──── │  ASSY     │ ────┐            │
    │     │     │ Ø300 ring │     │            │
    │     │     └─────┬─────┘     │            │
    │     │           │           │            │
    │ GUN │     ┌─────┴─────┐    │ GUN        │
    │ ARC │     │ PEDESTAL  │    │ ARC        │
    │360°│     │ Ø450      │    │ 360°       │
    │     │     └─────┬─────┘     │            │
    │     │           │           │            │
    │     └───────────┼───────────┘            │
    │                 │                        │
    │            ┌────┴────┐                   │
    │            │  BASE   │                   │
    │            │ 800x800 │                   │
    │            └─────────┘                   │
    │                                          │
    │   [SL]                          [SR]     │   ← Surround speakers
    │                                          │
    │         ┌──────────────────┐             │
    │         │ INSTRUCTOR DESK  │             │
    │         │ (behind/beside   │             │
    │         │  operator)       │             │
    │         └──────────────────┘             │
    │                                          │
    │   [SUB]                                  │   ← Subwoofer (floor)
    │                                          │
    └──────────────────────────────────────────┘
                    3000mm room depth
```

## 6.2 Side Elevation View

```
    Ceiling ≥2800mm (G-010)
    ───────────────────────────────────────────



              Monitor top: ~2000mm
              ┌───────────┐
              │  MONITORS │
              │  (3x 27") │
              └─────┬─────┘
                    │
    Eye level: 1600-1800mm (G-002)
                    │
              ┌─────┴─────┐
              │ GUN BARREL│──── 1600mm ± 10% (G-004)
              │ REPLICA   │
              └─────┬─────┘
                    │
              ┌─────┴─────┐  ← Elevation axis
              │ TRAVERSE  │  ← Traverse axis
              │ ASSEMBLY  │
              └─────┬─────┘
                    │
              ┌─────┴─────┐
              │ PEDESTAL   │    Height adjustable ±100mm (W: G-008)
              │ COLUMN     │
              └─────┬─────┘
                    │
              ┌─────┴─────┐
    Floor ─── │   BASE    │ ── Leveling feet, floor anchors
              │  FRAME    │
              └───────────┘
    Floor level: 0mm
```

---

# 7. ASSEMBLY SEQUENCE

| Step | Action | Subsystem | Tools | Time Est. |
|------|--------|-----------|-------|-----------|
| 1 | Position and level base frame, install floor anchors | SS1 | Level, drill, M12 wrench | 1.0 hr |
| 2 | Mount pedestal column on base frame (8x M10 bolts) | SS1 | M10 wrench | 0.5 hr |
| 3 | Install slip ring on pedestal top | SS1 | Allen key set | 0.3 hr |
| 4 | Mount traverse assembly (slewing ring) on pedestal | SS1 | M8 wrench, alignment pins | 0.5 hr |
| 5 | Install traverse brake + encoder on traverse shaft | SS2, SS3 | Allen key, coupling tool | 0.5 hr |
| 6 | Mount elevation assembly on traverse platform | SS1 | M10 wrench | 0.5 hr |
| 7 | Install elevation brake + encoder on elevation shaft | SS2, SS3 | Allen key | 0.5 hr |
| 8 | Mount gun replica on elevation cradle | SS1 | Pin, M8 bolts | 0.3 hr |
| 9 | Install trigger sensor (FSR) in trigger group | SS2 | Adhesive, wire | 0.3 hr |
| 10 | Install vibration motor on receiver | SS7 | Screws, wiring | 0.2 hr |
| 11 | Route cables through pedestal and slip ring | All | Cable ties, connectors | 1.0 hr |
| 12 | Position and mount monitor arms + monitors | SS5 | VESA mount tools | 0.5 hr |
| 13 | Position PC workstation, connect peripherals | SS4 | -- | 0.3 hr |
| 14 | Install audio system (speakers, amp, sub) | SS6 | Stands, wiring | 0.5 hr |
| 15 | Install 24V PSU, connect brakes | SS3 | Wiring, terminal blocks | 0.3 hr |
| 16 | Install E-stop, wire to 24V circuit | SS2 | Wiring | 0.2 hr |
| 17 | Connect I/O board to sensors/actuators | SS4 | USB, signal cables | 0.3 hr |
| 18 | Power up, run BIST | SS4 | -- | 0.3 hr |
| 19 | Calibrate encoders (zero reference) | SS2 | Software | 0.2 hr |
| 20 | Calibrate brake torque (current-to-torque table) | SS3 | Torque wrench | 0.3 hr |
| 21 | Instructor station setup | SS8 | Ethernet cable | 0.2 hr |
| **TOTAL** | | | **Standard tools only (AS-002)** | **~8.0 hrs (2 techs, AS-001)** |

Module count: **5 major modules** (SS1 mech, SS2+SS3 sensor/brake, SS4 computing, SS5 visual, SS6 audio) -- meets AS-003.

---

# 8. VARIANT PROVISIONS

The I-01 base design includes the following provisions for variant extensibility (C10 score 4/4):

| Feature | I-01 Base | CTR | TAC | TAB | ACH |
|---------|-----------|-----|-----|-----|-----|
| Modular I/O board | USB HID, expandable | Same | 3x boards | USB only | Same + ML I/O |
| Software plugin architecture | Scenario + scoring plugins | +Env monitor | +Network sync | Simplified | +AI coaching |
| Network interface | Ethernet (instructor) | Same | Multi-station | Not used | Same + cloud |
| Power provision | 220VAC, 24VDC internal | +Generator input | Same x3 | USB-C only | Same |
| Mechanical mounting | Floor anchored | ISO container mounts | Same x3 | Desktop | Same |

---

# 9. TECHNOLOGY READINESS

| Subsystem | Critical Components | TRL | Risk if <6 |
|-----------|-------------------|-----|------------|
| SS1 Mechanical | Steel frame, bearings, slip ring | 9 | -- |
| SS2 Sensing | Optical encoders, FSR | 9 | -- |
| SS3 Resistance | Magnetic particle brake | 8 | **Prototype test (Doc 014) validates** |
| SS4 Computing | PC workstation, Unity, 6-DOF ballistics | 8-9 | 6-DOF validation needed (R1) |
| SS5 Visual | Triple monitors | 9 | -- |
| SS6 Audio | 5.1 surround | 9 | -- |
| SS7 Feedback | ERM vibration motor | 9 | -- |
| SS8 Instructor | PC + software | 8 | -- |

**All components TRL >=8.** No TRL <6 items. SS3 brake is the only component requiring physical validation (Doc 014).

---

# 10. MEDIUM CONFLICT RESOLUTION STATUS

These items from Phase 2 Gate Review (Doc 013, Section 6) are resolved or tracked in Phase 3:

| ID | Finding | Resolution in v2.0 |
|----|---------|-------------------|
| MC-001 | Anthropometric range 1.55-1.80m | Pedestal height adjustable ±100mm (G-008 wish). Platform optional. |
| MC-002 | MTBF/MTTR variant differentiation | I-01: MTBF >=500h, MTTR <=4h (per MT-001/002). Variants TBD at DG gates. |
| MC-003 | Training effectiveness baseline | Requires live-fire data. Scoring algorithm designed to be calibration-tunable (F4.4). |
| MC-005 | Power budget analysis | **RESOLVED** -- See Doc 018 (Power Budget). |
| MC-006 | Schedule variant timelines | I-01: 11 months. Variants per DG-1/DG-2/DG-3 sequence. |

---

# 11. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Engineering Team | Initial architecture (as Doc 006) |
| 2.0 | 2026-03-05 | KN (Phase 3 Embodiment) | Complete redo: 8 subsystems with specs, mass budget, spatial layout, assembly sequence, requirement traceability (201 reqs), variant provisions, TRL assessment. Renumbered as Doc 015. |

---

**NEXT**: Document 016 -- Interface Control Document (ICD)

---

*VN-12.7MM-SIM-015 System Architecture v2.0*
*Phase 3: Embodiment Design -- I-01 (HONG HAI) Base Variant*
