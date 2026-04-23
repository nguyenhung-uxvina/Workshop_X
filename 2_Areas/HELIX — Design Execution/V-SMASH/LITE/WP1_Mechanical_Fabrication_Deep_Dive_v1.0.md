# WP1: MECHANICAL FABRICATION - Deep Dive
## V-SMASH-LITE Prototype Build

**Work Package**: WP1 - Mechanical Fabrication
**Version**: 1.0
**Date**: 2026-01-18
**Parent Document**: V-SMASH-LITE Prototype Build Plan v1.0

---

# 1. WORK PACKAGE OVERVIEW

## 1.1 Scope

WP1 covers all mechanical component fabrication, surface treatment, and mechanical assembly for the V-SMASH-LITE Alpha prototype build (3 units + spares).

**Included:**
- Housing upper shell (CNC machining)
- Housing lower shell (CNC machining)
- Battery door (CNC machining)
- Picatinny clamp assembly (CNC + assembly)
- Internal brackets and mounts (CNC)
- Surface finishing (anodizing)
- Hardware procurement
- Mechanical sub-assembly

**Excluded:**
- Optical assembly (WP2)
- Electronics (WP3)
- Final system integration (WP5)

## 1.2 WP1 Task Breakdown

```
WP1: MECHANICAL FABRICATION
│
├── WP1.1: Housing CNC Machining
│   ├── WP1.1.1: Upper shell machining
│   ├── WP1.1.2: Lower shell machining
│   └── WP1.1.3: Battery door machining
│
├── WP1.2: Picatinny Clamp Fabrication
│   ├── WP1.2.1: Clamp body machining
│   ├── WP1.2.2: Lever and cam machining
│   └── WP1.2.3: Clamp sub-assembly
│
├── WP1.3: Internal Brackets
│   ├── WP1.3.1: Jetson mount bracket
│   ├── WP1.3.2: Camera mount bracket
│   └── WP1.3.3: PCB standoffs
│
├── WP1.4: Surface Finishing
│   ├── WP1.4.1: Pre-treatment (cleaning, deburring)
│   ├── WP1.4.2: Hard anodizing
│   └── WP1.4.3: Laser engraving
│
└── WP1.5: Mechanical Assembly
    ├── WP1.5.1: Hardware kit preparation
    ├── WP1.5.2: Sub-assembly
    └── WP1.5.3: Inspection
```

## 1.3 Schedule

| Task | Duration | Start | End | Predecessor |
|------|----------|-------|-----|-------------|
| WP1.1 Housing CNC | 10 days | Week 2, Day 1 | Week 3, Day 5 | PCB fit-check model |
| WP1.2 Picatinny Clamp | 5 days | Week 3, Day 1 | Week 3, Day 5 | - |
| WP1.3 Internal Brackets | 3 days | Week 3, Day 3 | Week 4, Day 1 | - |
| WP1.4 Surface Finishing | 5 days | Week 4, Day 1 | Week 4, Day 5 | WP1.1, WP1.2, WP1.3 |
| WP1.5 Assembly | 3 days | Week 5, Day 1 | Week 5, Day 3 | WP1.4 |
| **TOTAL** | **18 days** | **Week 2** | **Week 5** | |

---

# 2. MATERIAL SPECIFICATIONS

## 2.1 Primary Material: Aluminum 6061-T6

| Property | Value | Unit | Test Standard |
|----------|-------|------|---------------|
| Density | 2.70 | g/cm³ | ASTM B311 |
| Ultimate Tensile Strength | 310 | MPa | ASTM E8 |
| Yield Strength (0.2%) | 276 | MPa | ASTM E8 |
| Elongation at Break | 12 | % | ASTM E8 |
| Modulus of Elasticity | 68.9 | GPa | - |
| Thermal Conductivity | 167 | W/m·K | - |
| Coefficient of Thermal Expansion | 23.6 | 10⁻⁶/°C | - |
| Hardness (Brinell) | 95 | HB | ASTM E10 |
| Machinability Rating | 90 | % (relative to 2011-T3) | - |

**Procurement Specification:**
- Material: Aluminum 6061-T6 per ASTM B209 (sheet/plate) or ASTM B211 (bar)
- Temper: T6 (solution heat treated and artificially aged)
- Mill certification required
- Vietnamese suppliers: Hòa Phát, Nam Kim Steel, or equivalent

**Stock Sizes Required:**

| Part | Stock Size (L×W×H mm) | Qty | Weight (kg) |
|------|----------------------|-----|-------------|
| Upper shell | 200×100×50 | 4 | 2.7 each |
| Lower shell | 200×100×35 | 4 | 1.9 each |
| Battery door | 60×50×15 | 4 | 0.1 each |
| Picatinny clamp | 80×40×30 | 4 | 0.3 each |
| Internal brackets | 100×50×10 | 4 | 0.1 each |

**Total Aluminum Required:** ~25 kg (including machining waste ~60%)

## 2.2 Secondary Materials

| Material | Application | Specification |
|----------|-------------|---------------|
| Stainless Steel 316 | Fasteners | ASTM A193 B8M, passivated |
| Stainless Steel 4140 | Clamp lever, cam | ASTM A322, hardened to HRC 35-40 |
| Silicone Rubber 70A | O-rings, gaskets | Per MIL-R-25988 or equivalent |
| Sorbothane 30A | Vibration pads | Proprietary, 30 durometer |
| RTV Silicone | Bonding, sealing | MIL-A-46146 or Dow 732 |

---

# 3. DETAILED PART SPECIFICATIONS

## 3.1 PART: UPPER SHELL (VS-001-001)

### 3.1.1 Engineering Drawing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  V-SMASH-LITE UPPER SHELL                                                           │
│  Part Number: VS-001-001                                                            │
│  Material: Aluminum 6061-T6, Hard Anodized Black                                    │
│  Scale: 1:2                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  TOP VIEW:                                                                          │
│                                                                                      │
│       ┌─────────────────────────────────────────────────────────────────┐           │
│       │  ○                                                          ○  │ ↑         │
│       │   ◁───────────────── 176 ─────────────────▷                   │ │         │
│       │                                                                │ │         │
│       │     ┌───────┐        ┌─────────────┐       ┌───────┐          │ │         │
│       │     │ OPTIC │        │  PROCESSOR  │       │ I/O   │          │ 81        │
│       │     │CUTOUT │        │   CUTOUT    │       │CUTOUT │          │ │         │
│       │     │ 28×20 │        │   50×72     │       │ 25×15 │          │ │         │
│       │     └───────┘        └─────────────┘       └───────┘          │ │         │
│       │                                                                │ │         │
│       │  ○                                                          ○  │ ↓         │
│       └─────────────────────────────────────────────────────────────────┘           │
│       ◁────────────────────────── 180 ──────────────────────────────▷               │
│                                                                                      │
│  FRONT VIEW (SECTION A-A):                                                          │
│                                                                                      │
│       ┌─────────────────────────────────────────────────────────────────┐ ↑        │
│       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ │        │
│       │░░┌─────────────────────────────────────────────────────────┐░░│ │        │
│       │░░│                                                         │░░│ 70       │
│       │░░│              INTERNAL CAVITY                            │░░│ │        │
│       │░░│                (electronics bay)                        │░░│ │        │
│       │░░│                                                         │░░│ │        │
│       │░░└─────────────────────────────────────────────────────────┘░░│ │        │
│       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│ ↓        │
│       └────┴────────────────────────────────────────────────────┴────┘           │
│           ◁2.5▷                                                  ◁2.5▷            │
│                               WALL THICKNESS                                        │
│                                                                                      │
│  DETAIL B - O-RING GROOVE (SCALE 4:1):                                             │
│                                                                                      │
│            ┌───────────────┐                                                        │
│            │               │                                                        │
│            │    ▼ 1.5 ▼   │  Groove depth                                          │
│            │   ┌─────────┐ │                                                        │
│            │   │ O-RING  │ │  2.0 dia cord                                         │
│            │   │ 2.0 dia │ │                                                        │
│            │   └─────────┘ │                                                        │
│            │   ◁── 2.4 ──▷ │  Groove width                                         │
│            └───────────────┘                                                        │
│                                                                                      │
│  NOTES:                                                                             │
│  1. All dimensions in mm unless otherwise specified                                 │
│  2. General tolerance: ±0.3 mm                                                      │
│  3. Surface finish: Ra 3.2 general, Ra 1.6 on O-ring groove                        │
│  4. Break all sharp edges 0.3 × 45°                                                │
│  5. Hard anodize per MIL-A-8625F Type III, 25μm min, black                         │
│  6. Mask O-ring groove and mating surface during anodize                           │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.1.2 Dimension Table

| Feature | Dimension | Tolerance | Note |
|---------|-----------|-----------|------|
| Overall length | 180 | ±0.5 | Envelope |
| Overall width | 85 | ±0.5 | Envelope |
| Overall height | 70 | ±0.5 | Envelope |
| Internal length | 176 | ±0.3 | Cavity |
| Internal width | 81 | ±0.3 | Cavity |
| Internal depth | 65 | ±0.3 | Cavity |
| Wall thickness | 2.5 | ±0.2 | Structural |
| O-ring groove width | 2.4 | ±0.1 | Sealing critical |
| O-ring groove depth | 1.5 | ±0.1 | Sealing critical |
| Optic cutout | 28 × 20 | ±0.2 | Optical alignment |
| Processor cutout | 50 × 72 | ±0.3 | Jetson clearance |
| I/O cutout | 25 × 15 | ±0.2 | USB-C access |
| Corner radius (internal) | R3 | ±0.5 | Tool radius |
| Mounting holes (4×) | Ø3.4 thru | +0.1/-0 | M3 clearance |

### 3.1.3 Machining Sequence

| Op | Description | Tool | Speed (RPM) | Feed (mm/min) | Notes |
|----|-------------|------|-------------|---------------|-------|
| 10 | Face top surface | Ø63 face mill | 4000 | 800 | Ra 3.2 |
| 20 | Rough internal cavity | Ø12 end mill | 6000 | 1200 | Leave 0.5mm |
| 30 | Semi-finish cavity | Ø10 end mill | 8000 | 600 | Leave 0.2mm |
| 40 | Finish cavity walls | Ø10 end mill | 8000 | 400 | Ra 3.2 |
| 50 | Finish cavity floor | Ø10 end mill | 8000 | 400 | Ra 3.2 |
| 60 | Machine O-ring groove | Ø2 ball mill | 10000 | 200 | Ra 1.6, critical |
| 70 | Machine cutouts | Ø6 end mill | 8000 | 500 | Thru pockets |
| 80 | Drill mounting holes | Ø3.4 drill | 4000 | 300 | 4× corners |
| 90 | Flip part, face bottom | Ø63 face mill | 4000 | 800 | Reference |
| 100 | Machine external profile | Ø10 end mill | 6000 | 600 | Finish profile |
| 110 | Chamfer edges | Chamfer tool | 3000 | 400 | 0.3 × 45° |
| 120 | Deburr | Manual | - | - | All edges |

**Estimated Machining Time:** 4.5 hours per part

---

## 3.2 PART: LOWER SHELL (VS-001-002)

### 3.2.1 Engineering Drawing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  V-SMASH-LITE LOWER SHELL                                                           │
│  Part Number: VS-001-002                                                            │
│  Material: Aluminum 6061-T6, Hard Anodized Black                                    │
│  Scale: 1:2                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  TOP VIEW:                                                                          │
│                                                                                      │
│       ┌─────────────────────────────────────────────────────────────────┐           │
│       │  ⊕                                                          ⊕  │           │
│       │                                                                │           │
│       │     ┌───────────────────────────────────────────────────┐     │           │
│       │     │                                                   │     │           │
│       │     │            ELECTRONICS RECESS                     │     │           │
│       │     │               (5mm deep)                          │     │           │
│       │     │                                                   │     │           │
│       │     │   ⊙    ⊙    ⊙    ⊙    ⊙    ⊙    ⊙    ⊙          │     │           │
│       │     │        PCB STANDOFF HOLES (M3 × 8)               │     │           │
│       │     └───────────────────────────────────────────────────┘     │           │
│       │                                                                │           │
│       │  ⊕    ⬒ ⬒      ALIGNMENT PINS (2×)      ⬒ ⬒            ⊕  │           │
│       └─────────────────────────────────────────────────────────────────┘           │
│                                                                                      │
│  BOTTOM VIEW:                                                                       │
│                                                                                      │
│       ┌─────────────────────────────────────────────────────────────────┐           │
│       │                                                                │           │
│       │  ┌──────────────────────────────────────────────────────────┐  │           │
│       │  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │           │
│       │  │▓  PICATINNY RAIL INTERFACE (MIL-STD-1913)              ▓│  │           │
│       │  │▓  ╔════╗    ╔════╗    ╔════╗    ╔════╗    ╔════╗      ▓│  │           │
│       │  │▓  ║    ║    ║    ║    ║    ║    ║    ║    ║    ║      ▓│  │           │
│       │  │▓  ╚════╝    ╚════╝    ╚════╝    ╚════╝    ╚════╝      ▓│  │           │
│       │  │▓    ◁─20─▷    ◁─20─▷    ◁─20─▷    ◁─20─▷              ▓│  │           │
│       │  │▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓│  │           │
│       │  └──────────────────────────────────────────────────────────┘  │           │
│       │       ◁─────────────── 140 ───────────────▷                    │           │
│       │                    RAIL LENGTH                                 │           │
│       └─────────────────────────────────────────────────────────────────┘           │
│                                                                                      │
│  SECTION C-C (PICATINNY DETAIL):                                                    │
│                                                                                      │
│                        ◁────── 20.00 ±0.05 ──────▷                                  │
│                        ┌───────────────────────────┐                                │
│                    ↑   │                           │                                │
│                  4.80  │      ╲         ╱         │  ← 45° chamfer                  │
│                 ±0.05  │       ╲───────╱          │                                │
│                    ↓   │                           │                                │
│                        └───────────────────────────┘                                │
│                        ◁──▷                                                         │
│                        4.80                                                         │
│                       ±0.05                                                         │
│                     SLOT WIDTH                                                      │
│                                                                                      │
│  NOTES:                                                                             │
│  1. Picatinny interface per MIL-STD-1913                                           │
│  2. Slot pitch: 20.00 ±0.05 mm (CRITICAL)                                          │
│  3. Slot width: 4.80 ±0.05 mm (CRITICAL)                                           │
│  4. Alignment pins: Ø3 × 5 press-fit, 2 locations                                  │
│  5. PCB standoffs: M3 × 0.5 tapped, 8mm deep, 8 locations                          │
│  6. O-ring land surface: Ra 1.6                                                     │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.2 MIL-STD-1913 Picatinny Interface Detail

**Critical Dimensions per MIL-STD-1913:**

| Parameter | Nominal | Tolerance | Note |
|-----------|---------|-----------|------|
| Slot pitch | 20.00 | ±0.05 | **CRITICAL** |
| Slot width | 4.80 | ±0.05 | **CRITICAL** |
| Slot depth | 3.50 | ±0.10 | Minimum |
| Rail width | 20.00 | ±0.10 | At base |
| Rail angle | 45° | ±0.5° | Both sides |
| Surface finish | Ra 1.6 | - | Slot surfaces |

**Verification Method:** Go/No-Go gauge per MIL-STD-1913

### 3.2.3 Dimension Table

| Feature | Dimension | Tolerance | Note |
|---------|-----------|-----------|------|
| Overall length | 180 | ±0.5 | Match upper shell |
| Overall width | 85 | ±0.5 | Match upper shell |
| Overall height | 25 | ±0.3 | Base plate |
| Electronics recess | 170 × 77 × 5 | ±0.3 | PCB mounting area |
| Alignment pin holes | Ø3.00 | +0.01/+0.02 | Press fit for Ø3 pin |
| Alignment pin spacing | 150 | ±0.05 | Reference |
| Standoff holes (M3) | 8 locations | Per pattern | Tapped M3 × 0.5, 8mm deep |
| Picatinny rail length | 140 | ±0.5 | 7 slots |
| Fastener holes | Ø3.4 thru, ↓Ø6.5 CSK | - | M3 FHCS counterbore |

---

## 3.3 PART: BATTERY DOOR (VS-001-003)

### 3.3.1 Engineering Drawing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  V-SMASH-LITE BATTERY DOOR                                                          │
│  Part Number: VS-001-003                                                            │
│  Material: Aluminum 6061-T6, Hard Anodized Black                                    │
│  Scale: 2:1                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  TOP VIEW:                                 SECTION D-D:                             │
│                                                                                      │
│       ┌───────────────────────┐            ┌───────────────────┐                    │
│       │                       │            │░░░░░░░░░░░░░░░░░░░│ ↑                  │
│       │  ⊕              ⊕    │            │░░┌───────────┐░░░░│ │                  │
│       │                       │            │░░│   CAVITY  │░░░░│ 10                 │
│       │   ○─────────────────○ │  O-RING    │░░│           │░░░░│ │                  │
│       │   │                 │ │  GROOVE    │░░└───────────┘░░░░│ ↓                  │
│       │   │                 │ │            └───────────────────┘                    │
│       │   │                 │ │                  ◁──▷                               │
│       │   ○─────────────────○ │                   2.5                               │
│       │                       │                  WALL                               │
│       │  ⊕              ⊕    │                                                      │
│       │                       │            O-RING DETAIL (4:1):                     │
│       └───────────────────────┘                                                      │
│       ◁────────── 50 ─────────▷            ┌─────────┐                              │
│                                            │  ◠      │                              │
│       ↑                                    │ ╱ ╲     │  2.0 dia cord                │
│       │                                    │╱   ╲    │  1.5 deep groove             │
│       40                                   └─────────┘  2.4 wide groove             │
│       │                                                                              │
│       ↓                                                                              │
│                                                                                      │
│  NOTES:                                                                             │
│  1. Captive fastener option: M3 shoulder screw × 2                                 │
│  2. Tool-free access preferred (quarter-turn fasteners)                            │
│  3. O-ring provides IP65 seal                                                       │
│  4. Lanyard attachment point on door                                               │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.3.2 Dimension Table

| Feature | Dimension | Tolerance | Note |
|---------|-----------|-----------|------|
| Overall size | 50 × 40 × 10 | ±0.3 | Door envelope |
| O-ring groove | 46 × 36 × 1.5 deep | ±0.1 | Perimeter seal |
| Fastener holes | Ø3.4 thru, 4 locations | ±0.1 | Captive screws |
| Lanyard hole | Ø3 | ±0.2 | Optional |

---

## 3.4 PART: PICATINNY CLAMP (VS-001-004)

### 3.4.1 Assembly Drawing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  V-SMASH-LITE PICATINNY CLAMP ASSEMBLY                                              │
│  Assembly Number: VS-001-004                                                        │
│  Scale: 1:1                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  EXPLODED VIEW:                                                                     │
│                                                                                      │
│                    ┌─────────────────────┐                                          │
│                    │   CLAMP BODY        │  VS-001-004-01                           │
│                    │   (Al 6061-T6)      │                                          │
│                    └──────────┬──────────┘                                          │
│                               │                                                      │
│                    ┌──────────┴──────────┐                                          │
│                    │     ╔═══════╗       │                                          │
│                    │     ║ PIVOT ║       │  ← Pivot pin (SS 316)                    │
│                    │     ╚═══════╝       │    VS-001-004-04                         │
│                    │          │          │                                          │
│                    │   ┌──────┴──────┐   │                                          │
│                    │   │    LEVER    │   │  VS-001-004-02                           │
│                    │   │  (Steel)    │   │  (Steel 4140, HRC 35-40)                 │
│                    │   └──────┬──────┘   │                                          │
│                    │          │          │                                          │
│                    │      ┌───┴───┐      │                                          │
│                    │      │  CAM  │      │  VS-001-004-03                           │
│                    │      │(Steel)│      │  (Steel 4140, HRC 35-40)                 │
│                    │      └───────┘      │                                          │
│                    │                      │                                          │
│                    │   ═══════════════   │  ← Clamping surfaces                     │
│                    │   ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓   │    (engages Picatinny slots)             │
│                    └─────────────────────┘                                          │
│                                                                                      │
│  ASSEMBLED VIEW (SIDE):                                                             │
│                                                                                      │
│        LEVER (OPEN)              LEVER (CLOSED)                                     │
│            ╱                          │                                             │
│           ╱                           │                                             │
│       ┌──╱────────────┐          ┌────┴───────────┐                                │
│       │ ●             │          │ ●══════════════│                                │
│       │   CLAMP BODY  │          │   CLAMP BODY   │                                │
│       └───────────────┘          └────────────────┘                                │
│       ═══════════════════        ═══════════════════                               │
│          RAIL (FREE)                RAIL (LOCKED)                                   │
│                                                                                      │
│  NOTES:                                                                             │
│  1. Clamp force when locked: >100N vertical                                         │
│  2. Lever operates with gloved hand                                                 │
│  3. Over-center lock prevents accidental release                                   │
│  4. Recoil lug engages rail slot for anti-rotation                                 │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.4.2 Parts List - Picatinny Clamp

| Item | Part Number | Description | Material | Qty |
|------|-------------|-------------|----------|-----|
| 1 | VS-001-004-01 | Clamp body | Al 6061-T6 | 1 |
| 2 | VS-001-004-02 | Lever | Steel 4140, HRC 35-40 | 1 |
| 3 | VS-001-004-03 | Cam | Steel 4140, HRC 35-40 | 1 |
| 4 | VS-001-004-04 | Pivot pin | SS 316, Ø4 × 25 | 1 |
| 5 | VS-001-004-05 | E-clip | SS 304, Ø4 | 2 |

---

## 3.5 PART: INTERNAL BRACKETS

### 3.5.1 Jetson Mount Bracket (VS-001-005)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  JETSON MOUNT BRACKET                                                               │
│  Part Number: VS-001-005                                                            │
│  Material: Aluminum 6061-T6                                                         │
│  Scale: 1:1                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  TOP VIEW:                                                                          │
│                                                                                      │
│       ┌─────────────────────────────────────────┐                                   │
│       │  ⊕                              ⊕      │  ← Housing mount holes (M3 clr)   │
│       │                                         │                                   │
│       │     ┌───────────────────────────┐      │                                   │
│       │     │  ○      ○      ○      ○   │      │  ← Jetson mount holes            │
│       │     │                           │      │    (M2.5 × 0.45 tap)              │
│       │     │      JETSON FOOTPRINT     │      │                                   │
│       │     │        (45 × 70)          │      │                                   │
│       │     │                           │      │                                   │
│       │     │  ○      ○      ○      ○   │      │                                   │
│       │     └───────────────────────────┘      │                                   │
│       │                                         │                                   │
│       │  ⊕                              ⊕      │                                   │
│       └─────────────────────────────────────────┘                                   │
│       ◁─────────────── 80 ──────────────▷                                          │
│                                                                                      │
│  SIDE VIEW:                                                                         │
│                                                                                      │
│       ┌─────────────────────────────────────────┐                                   │
│       │                                         │ ↑                                 │
│       │  ═══════════════════════════════════   │ 8                                 │
│       │         VIBRATION ISOLATION PADS       │ ↓                                 │
│       └─────────────────────────────────────────┘                                   │
│                                                                                      │
│  NOTE: Mount Sorbothane pads (10×10×3mm) under Jetson                              │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.5.2 Camera Mount Bracket (VS-001-006)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  CAMERA MOUNT BRACKET                                                               │
│  Part Number: VS-001-006                                                            │
│  Material: Aluminum 6061-T6                                                         │
│  Scale: 2:1                                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  FRONT VIEW:                              SIDE VIEW:                                │
│                                                                                      │
│       ┌─────────────────┐                 ┌─────────┐                               │
│       │                 │                 │         │                               │
│       │    ┌───────┐    │                 │   ┌─┐   │                               │
│       │    │ ○     │    │  ← Camera       │   │○│   │  ← Camera lens               │
│       │    │ LENS  │    │    aperture     │   │ │   │    protrudes                 │
│       │    │ HOLE  │    │    Ø14          │   └─┘   │                               │
│       │    └───────┘    │                 │    │    │                               │
│       │                 │                 │    │    │                               │
│       │  ⊕         ⊕   │  ← Adjustment   │ ───┴─── │  ← Slotted holes              │
│       │  ╱           ╲  │    slots        │ SLOTS   │    for alignment              │
│       └─────────────────┘                 └─────────┘                               │
│       ◁────── 40 ──────▷                                                            │
│                                                                                      │
│  ADJUSTMENT RANGE: ±2mm vertical, ±1mm horizontal                                   │
│  PURPOSE: Fine-tune camera-to-bore alignment                                        │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 4. SURFACE FINISHING SPECIFICATIONS

## 4.1 Hard Anodizing (MIL-A-8625F Type III)

### 4.1.1 Specification

| Parameter | Requirement | Verification |
|-----------|-------------|--------------|
| Standard | MIL-A-8625F Type III | Certification |
| Coating thickness | 25 μm minimum | Eddy current gauge |
| Color | Black | Visual |
| Hardness | 60 HRC minimum equivalent | Microhardness test |
| Corrosion resistance | 336 hours salt spray (ASTM B117) | Certification |
| Abrasion resistance | Taber abrasion <1.5 mg/1000 cycles | Certification |

### 4.1.2 Masking Requirements

| Area | Reason | Method |
|------|--------|--------|
| O-ring grooves | Dimensional control | Silicone plug |
| Mating surfaces | Conductivity for EMC | Tape mask |
| Threaded holes | Thread fit | Silicone plug |
| Alignment pin holes | Press fit tolerance | Tight tape |

### 4.1.3 Process Flow

```
ANODIZING PROCESS FLOW:

INCOMING INSPECTION
        │
        ▼
    CLEANING
    (alkaline degrease)
        │
        ▼
    ETCHING
    (caustic etch, light)
        │
        ▼
    DESMUT
    (acid desmut)
        │
        ▼
    MASKING
    (per masking drawing)
        │
        ▼
    ANODIZING
    (sulfuric acid, Type III)
    (2-3 hrs depending on thickness)
        │
        ▼
    SEALING
    (hot DI water or nickel acetate)
        │
        ▼
    DYEING (BLACK)
    (organic black dye)
        │
        ▼
    FINAL SEAL
    (hot DI water)
        │
        ▼
    INSPECTION
    (thickness, color, adhesion)
        │
        ▼
    LASER ENGRAVING
    (P/N, S/N, logo)
```

## 4.2 Laser Engraving

| Feature | Content | Location | Size |
|---------|---------|----------|------|
| Part number | VS-001-00X | Top surface | 3mm height |
| Serial number | YYMMDD-XXX | Top surface | 2mm height |
| Project logo | V-SMASH | Side (optional) | 5mm height |
| Caution labels | As required | Near hazards | Per standard |

---

# 5. HARDWARE SPECIFICATIONS

## 5.1 Fastener Schedule

| Item | Description | Specification | Qty/Unit | Supplier |
|------|-------------|---------------|----------|----------|
| F-001 | M3×8 SHCS | SS 316, DIN 912 | 8 | Local |
| F-002 | M3×12 SHCS | SS 316, DIN 912 | 4 | Local |
| F-003 | M3 flat washer | SS 316, DIN 125A | 12 | Local |
| F-004 | M3 split washer | SS 316, DIN 127B | 12 | Local |
| F-005 | M2.5×6 SHCS | SS 316, DIN 912 | 8 | Local |
| F-006 | Alignment pin | SS 316, Ø3×8 | 2 | Local |

## 5.2 Sealing Components

| Item | Description | Specification | Qty/Unit | Supplier |
|------|-------------|---------------|----------|----------|
| S-001 | Perimeter O-ring | Silicone 70A, 2×180mm ID | 1 | Local |
| S-002 | Battery door O-ring | Silicone 70A, 2×40mm ID | 1 | Local |
| S-003 | RTV sealant | Dow 732, clear | As needed | Import |

## 5.3 Vibration Isolation

| Item | Description | Specification | Qty/Unit | Supplier |
|------|-------------|---------------|----------|----------|
| V-001 | Sorbothane pad | 30A, 10×10×3mm | 8 | Import |

---

# 6. INSPECTION & QUALITY CONTROL

## 6.1 Incoming Material Inspection

| Check | Requirement | Method | Accept/Reject |
|-------|-------------|--------|---------------|
| Material cert | 6061-T6 per ASTM B209 | Review | Cert required |
| Hardness | 95 HB minimum | Portable hardness tester | Reject if <90 HB |
| Dimensions | Per stock size ±2mm | Caliper | Reject if out |
| Surface defects | No cracks, voids, inclusions | Visual | Reject if defects |

## 6.2 In-Process Inspection

| Operation | Check | Method | Frequency |
|-----------|-------|--------|-----------|
| After Op 50 | Cavity dimensions | Caliper, gauge | 100% |
| After Op 60 | O-ring groove | Profile gauge | 100% |
| After Picatinny | Slot pitch, width | Go/No-Go gauge | 100% |
| After drilling | Hole positions | CMM or template | First article |

## 6.3 Final Inspection Checklist

| Item | Requirement | Method | Result |
|------|-------------|--------|--------|
| Overall dimensions | Per drawing ±tol | Caliper/CMM | ☐ Pass ☐ Fail |
| O-ring groove | 2.4 ±0.1 wide, 1.5 ±0.1 deep | Gauge | ☐ Pass ☐ Fail |
| Picatinny slots | MIL-STD-1913 gauge | Go/No-Go | ☐ Pass ☐ Fail |
| Surface finish | Ra 3.2 general, Ra 1.6 critical | Profilometer | ☐ Pass ☐ Fail |
| Anodize thickness | ≥25 μm | Eddy current | ☐ Pass ☐ Fail |
| Anodize adhesion | No flaking | Tape test | ☐ Pass ☐ Fail |
| Thread fit | M3 tap gauge | Go/No-Go | ☐ Pass ☐ Fail |
| Edge break | 0.3 × 45° all edges | Visual | ☐ Pass ☐ Fail |
| Cleanliness | No chips, oil, debris | Visual | ☐ Pass ☐ Fail |
| Marking | P/N, S/N legible | Visual | ☐ Pass ☐ Fail |

## 6.4 Non-Conformance Handling

| Severity | Definition | Action |
|----------|------------|--------|
| **Minor** | Cosmetic, does not affect fit/function | Document, use as-is |
| **Major** | Affects fit but repairable | Rework, re-inspect |
| **Critical** | Affects function, not repairable | Scrap, root cause analysis |

---

# 7. ASSEMBLY PROCEDURE

## 7.1 Pre-Assembly Checklist

- [ ] All parts cleaned and inspected
- [ ] Hardware kit complete
- [ ] O-rings lubricated with silicone grease
- [ ] Work area clean, ESD precautions in place
- [ ] Assembly drawing available
- [ ] Torque wrench calibrated

## 7.2 Assembly Sequence

| Step | Operation | Tools | Torque | Notes |
|------|-----------|-------|--------|-------|
| 1 | Install alignment pins in lower shell | Press or mallet | - | Ø3 pins, 2 locations |
| 2 | Install PCB standoffs (M3 nylon) | 5mm hex driver | Hand tight | 8 locations |
| 3 | Place Sorbothane pads | - | - | 8 pads per pattern |
| 4 | Install Jetson mount bracket | M3×8 SHCS | 0.5 Nm | 4 fasteners |
| 5 | Install camera mount bracket | M3×8 SHCS | 0.5 Nm | 2 fasteners |
| 6 | Lubricate O-ring | Silicone grease | - | Light coat |
| 7 | Install perimeter O-ring | - | - | Ensure seated |
| 8 | Test-fit upper shell | - | - | Check alignment pins |
| 9 | Install upper shell | M3×8 SHCS | 0.8 Nm | 8 fasteners, star pattern |
| 10 | Install Picatinny clamp | M3×12 SHCS | 1.0 Nm | 4 fasteners |
| 11 | Install battery door | M3×8 SHCS | 0.5 Nm | 4 fasteners |
| 12 | Final inspection | - | - | Per checklist |

## 7.3 Torque Specifications

| Fastener | Torque (Nm) | Torque (in-lb) | Notes |
|----------|-------------|----------------|-------|
| M3 into aluminum | 0.5 | 4.4 | Light duty |
| M3 into aluminum (structural) | 0.8 | 7.0 | Primary fasteners |
| M3 into steel (clamp) | 1.0 | 8.8 | High strength |
| M2.5 into aluminum | 0.3 | 2.6 | Delicate |

---

# 8. COST SUMMARY

## 8.1 WP1 Cost Breakdown

| Item | Unit Cost | Qty | Extended | Notes |
|------|-----------|-----|----------|-------|
| **Raw Material** | | | | |
| Al 6061-T6 stock | $8/kg | 25 kg | $200 | Including waste |
| Steel 4140 bar | $5/kg | 2 kg | $10 | Clamp parts |
| SS 316 rod | $10/kg | 0.5 kg | $5 | Pins |
| **CNC Machining** | | | | |
| Upper shell | $80 | 4 | $320 | |
| Lower shell | $60 | 4 | $240 | |
| Battery door | $15 | 4 | $60 | |
| Picatinny clamp parts | $25 | 4 | $100 | |
| Internal brackets | $15 | 4 | $60 | |
| **Surface Finishing** | | | | |
| Hard anodize | $15/part | 16 | $240 | All Al parts |
| Laser engraving | $3/part | 16 | $48 | |
| **Hardware** | | | | |
| Fastener kit | $10 | 3 | $30 | Per unit |
| O-ring kit | $5 | 3 | $15 | Per unit |
| Sorbothane pads | $8 | 3 | $24 | Per unit |
| **Labor** | | | | |
| Assembly (3 hrs/unit) | $20/hr | 9 hrs | $180 | |
| Inspection (1 hr/unit) | $20/hr | 3 hrs | $60 | |
| | | | | |
| **WP1 TOTAL** | | | **$1,592** | |

## 8.2 Schedule Summary

| Task | Start | End | Duration |
|------|-------|-----|----------|
| WP1.1 Housing CNC | Week 2, Day 1 | Week 3, Day 5 | 10 days |
| WP1.2 Clamp Fab | Week 3, Day 1 | Week 3, Day 5 | 5 days |
| WP1.3 Brackets | Week 3, Day 3 | Week 4, Day 1 | 3 days |
| WP1.4 Anodizing | Week 4, Day 1 | Week 4, Day 5 | 5 days |
| WP1.5 Assembly | Week 5, Day 1 | Week 5, Day 3 | 3 days |
| **WP1 TOTAL** | **Week 2** | **Week 5** | **18 days** |

---

# 9. DELIVERABLES CHECKLIST

## 9.1 Hardware Deliverables

- [ ] Upper shell × 4 (3 + 1 spare)
- [ ] Lower shell × 4 (3 + 1 spare)
- [ ] Battery door × 4 (3 + 1 spare)
- [ ] Picatinny clamp assembly × 4 (3 + 1 spare)
- [ ] Jetson mount bracket × 4
- [ ] Camera mount bracket × 4
- [ ] Hardware kits × 3

## 9.2 Documentation Deliverables

- [ ] Engineering drawings (PDF + CAD)
- [ ] Material certifications
- [ ] Anodizing certifications
- [ ] Inspection reports (per part)
- [ ] Assembly procedure
- [ ] First Article Inspection Report (FAIR)

---

# DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-18 | Design Team | Initial release - WP1 deep dive |

---

*WP1: Mechanical Fabrication Deep Dive v1.0*
*V-SMASH-LITE Prototype Build*
*Detail Design Level Documentation per Pahl & Beitz Phase 4*
