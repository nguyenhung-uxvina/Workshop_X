---
project: VN-AICC-001
phase: 3
type: spatial_layout
version: 1.2
created: 2026-02-19
status: Placement APPROVED, enclosure shell designed
---

# VN-AICC-001: PHASE 3 — SPATIAL LAYOUT (PRELIMINARY)
## MAKER Prototype — 3D Bounding Box Layout & Dimensional Verification
### Version 1.2 | 19/02/2026

---

**Document ID:** VN-AICC-001-P3-Layout-v1.2
**Phase:** 3 — Embodiment Design
**Input:** Hybrid C+ approved concept, DfX Scorecard (GO for prototype)
**Method:** P&B §7.1 Step 4 — Preliminary Layout
**3D Model:** `AICC_MAKER_Layout_v1.py` (FreeCAD Python macro v1.2)
**Changes:**
- v1.0→v1.1: Corrected CM4 IO Board from 85×56mm to **160×90mm** (official Raspberry Pi)
- v1.1→v1.2: Added enclosure shell (base + snap-fit cover), panel cutouts, corrected vent placement

---

## 1. ENCLOSURE ENVELOPE

| Parameter | Value | Constraint |
|---|---|---|
| Width (X) | **180 mm** | 160mm IO Board + 2×(3mm wall + 7mm clearance) |
| Depth (Y) | **115 mm** | 90mm IO Board + 8mm rear connector zone + front zone + walls |
| Height (Z) | **75 mm** | Z-stack: base(3)+standoffs+PCBs+CM4+heatsink+air gap+display+top(3) |
| Wall | **3 mm** | FDM minimum (PLA/PETG) |
| Volume | **1,552 cm³** | 180×115×75 |
| Weight | **~400 g** | Under 500g (ER.04) ✅ |
| Envelope | **180×115×75** | ≤ 200×150×80 ✅ |

---

## 2. COMPONENT PLACEMENT TABLE

### Coordinate System

X = width (left-right), Y = depth (Y=0 rear, Y=115 front), Z = height (Z=0 bottom)

### All Components (14 objects)

| # | Component | Size W×D×H (mm) | Position X,Y,Z (mm) | Zone |
|---|---|---|---|---|
| 1 | I/O Carrier PCB (custom) | 80×50×1.6 | 50, 11, 8.0 | Internal bottom, on 5mm standoffs |
| 2 | **CM4 IO Board (160×90)** | 160×90×1.6 | 10, 11, 14.6 | Internal mid, on 11.6mm standoffs |
| 3 | CM4 Module | 55×40×**6.4** | 62.5, 36, 16.2 | On IO Board socket. **CORRECTED**: 3.0mm Hirose gap + 1.0mm PCB + 2.4mm components |
| 4 | CM4 Heatsink | 40×40×10 | 70, 36, **22.6** | On CM4 top surface. **CORRECTED**: Z = 16.2+6.4 |
| 5 | Rear Connectors zone | 120×14×13.5 | 30, 8, 16.2 | Above IO Board rear edge |
| 6 | HDMI Display 3.5" | 86×56×9.5 | 47, 26, 62.5 | Top surface (behind window) |
| 7 | SPI OLED 1.3" | 35×3×18 | 10, 109, 54 | Front panel upper-left |
| 8 | LED Array (4×RGB) | 48×8×6 | 55, 104, 60 | Front panel upper-right |
| 9 | Button Row 1 (B1-B3) | 46×8×12 | 67, 104, 38 | Front panel mid |
| 10 | Button Row 2 (B4-B6) | 46×8×12 | 67, 104, 23 | Front panel lower |
| 11 | E-Stop 16mm NC | 16×20×16 | 82, 92, 3 | Front panel bottom-center |
| 12 | Speaker 28mm | 28×28×12 | 144, 5, 3 | Internal bottom-rear-right |
| 13 | Power Supply | 30×20×10 | 5, 5, 3 | Internal bottom-rear-left |
| 14 | Thermal Vent Zone | 60×60×31.6 | 60, 26, 30.9 | Reference: above heatsink |

**Note:** I/O Carrier Board (80×50mm) sits BELOW the CM4 IO Board (160×90mm). Both have independent standoffs from the base plate. Connected via 6-pin JST-PH cable (I2C SDA/SCL + GPIO4 E-stop + GPIO17 WDT + 3.3V + GND).

---

## 3. DIMENSIONED VIEWS

### 3.1 FRONT VIEW (Operator-Facing, Y=115 plane)

```
  X=0   X=10     X=45  X=55      X=103 X=113     X=180
   │      │        │     │          │     │          │
   │      │        │     │          │     │          │
Z=75├──────┴────────┴─────┴──────────┴─────┴──────────┤ ── Top
   │                                                   │
Z=72│  ┌──OLED─────┐   ┌──LED──LED──LED──LED──┐       │
   │  │ SPI 1.3"  │   │  ○    ○     ○    ○   │       │
   │  │ 35×18mm   │   │ 4× RGB (6mm each)    │       │
   │  │ 128×64px  │   └──────────────────────-┘       │
Z=54│  └───────────┘                                   │
   │                                                   │
   │              ┌──────────────────────────┐         │
Z=50│              │  [B1:ACK] [B2:DIS] [B3] │         │
Z=38│              │   12mm    12mm    12mm   │         │
   │              └──────────────────────────┘         │
   │              ┌──────────────────────────┐         │
Z=35│              │  [B4:MOD] [B5:CFG] [B6] │         │
Z=23│              │   12mm    12mm    12mm   │         │
   │              └──────────────────────────┘         │
   │                                                   │
Z=19│                    ┌──────────┐                   │
   │                    │ 🔴E-STOP │                   │
   │                    │  16mm Ø  │                   │
Z= 3│                    └──────────┘                   │
   │                                                   │
Z= 0└─────────────────────────────────────────────────┘ ── Bottom
   │                                                   │
   ←─────────────────── 180mm width ──────────────────→
```

### 3.2 TOP VIEW (Looking Down, Z=75 plane)

```
  X=0         X=10                            X=170  X=180
   │            │                                │      │
Y= 0├────────────┴────────────────────────────────┴──────┤ ── Rear panel
   │  [PSU]     ┌─2×HDMI─┬─ETH─┬─2×USB─┬─DC─┬─µUSB┐  │
Y= 8│            └────────┴─────┴───────┴────┴─────┘   │  Rear connectors
   │                                                    │
   │  ┌──────── CM4 IO Board 160×90mm ───────────────┐ │
   │  │                                               │ │
Y=11│  │    ┌──── CM4 Module 55×40 ────┐              │ │
   │  │    │  ┌─ Heatsink 40×40 ─┐    │              │ │
   │  │    │  │ VENT ZONE ▓▓▓▓▓▓ │    │  GPIO hdr    │ │
   │  │    │  │ (top vent holes)  │    │  (40-pin)    │ │
   │  │    │  └───────────────────┘    │              │ │
   │  │    └───────────────────────────┘              │ │
   │  │                                               │ │
   │  │    ┌── I/O Carrier 80×50 ──┐  (below, Z=8)   │ │
   │  │    └───────────────────────┘                  │ │
   │  │                                               │ │
Y=101│ └───────────────────────────────────────────────┘ │
   │                                                    │
   │     ┌──── HDMI Display 86×56 ──────────┐          │
   │     │  ┌────────────────────────────┐  │ ← Top    │
   │     │  │     DISPLAY WINDOW         │  │   window  │
   │     │  │     3.5" IPS LCD           │  │          │
   │     │  └────────────────────────────┘  │          │
   │     └──────────────────────────────────┘          │
   │                                                    │
Y=112│ [Front: OLED + LEDs + Buttons + E-stop]           │
Y=115├──────────────────────────────────────────────────┤ ── Front panel
   │                                                    │
   ←──────────────────── 180mm ────────────────────────→
                  ↕ 115mm depth
```

### 3.3 RIGHT SIDE VIEW (Looking from X=180)

```
  Y=0                     Y=57                    Y=115
   │     Rear              │                  Front │
Z=75├─────────────────────────────────────────────────┤ ── Top
   │                                                  │
   │    ┌─── Display 86×56×9.5 ──────────────┐       │
Z=72│    │         HDMI 3.5" IPS              │       │
Z=62│    └────────────────────────────────────┘       │
   │                                                  │
   │    ~~~~~~~~~~~~ AIR GAP 31.6mm ~~~~~~~~~~~~      │ ← Vent
   │    ~~~~~~~~~~~~ (convection path) ~~~~~~~~~      │   zone
   │                                                  │
Z=31│    ┌── Heatsink ──┐                             │
Z=21│    └──────────────┘                             │
   │    ┌── CM4 Module ──┐                            │
Z=16│    ├───── CM4 IO Board 160×90 ──────────────┐   │
Z=15│    └────────────────────────────────────────┘   │
   │                                           ┌─OLED─┤ Z=72
   │         ┌── I/O Carrier 80×50 ──┐         │ LED  │ Z=66
Z=10│         └───────────────────────┘         ├─BTN1─┤ Z=50
Z= 8│                                           ├─BTN2─┤ Z=35
   │                                           │      │
   │    ┌SPK─┐  ┌─PSU─┐                       │ESTOP │ Z=19
Z= 3│    └────┘  └─────┘                       └──────┤ Z= 3
Z= 0└─────────────────────────────────────────────────┘ ── Bottom
   │                                                  │
   ←──────────────── 115mm depth ────────────────────→
   REAR ←                                    → FRONT
```

---

## 4. CRITICAL INTERFACES

### Interface 1: CM4 IO Board ↔ HDMI Display

| Parameter | Value |
|---|---|
| Connection | Standard HDMI cable, 20cm, internal routing |
| Cable route | From IO Board HDMI port (rear edge, Z≈16) → along enclosure side wall → UP to display (Z≈62.5) |
| Clearance | 31.6mm air gap between heatsink top and display → ample cable room |
| Constraint | Route cable away from heatsink fins to avoid blocking airflow |

### Interface 2: CM4 IO Board ↔ I/O Carrier Board

| Parameter | Value |
|---|---|
| Connection | 6-pin JST-PH cable: I2C SDA, I2C SCL, GPIO4 (E-stop), GPIO17 (WDT), 3.3V, GND |
| Cable route | From IO Board GPIO header (interior of board, Z≈16) → DOWN 5mm to I/O board connector (Z≈10) |
| Clearance | 5mm vertical gap between boards. JST-PH header height ≈6mm → use right-angle header or side-exit connector |
| Alternative | Plug I/O board directly into GPIO header as a HAT (eliminates cable, but reduces serviceability) |

### Interface 3: Enclosure ↔ Operator

| Parameter | Value |
|---|---|
| Display | Top surface window, 86×56mm opening. Optional 15° tilt via wedge base |
| Viewing distance | 30-60cm (desk, ER.02: ≥300 nit) |
| One-hand reach | Front face 180mm wide, buttons in 46mm zone centered at X=90. Thumb reaches all 6 buttons ✅ |
| E-stop | Bottom-center of front face, recessed + guarded. Not blocked by any other control |
| Rear connectors | USB-C, 2×HDMI, Ethernet, 2×USB-A, DC barrel, micro-USB (flashing) — all rear panel |

### Interface 4: Thermal

| Parameter | Value |
|---|---|
| Source | CM4 BCM2711, ≤5W TDP (typical 2-3W for AICC workload) |
| Heatsink | 40×40×10mm passive aluminum, on CM4 |
| Convection | Bottom vents (≥5cm²) → past PCBs → past heatsink → top vents (≥10cm²) |
| Air gap | 31.6mm — excellent chimney effect |
| At 3W typical | ΔT ≈ 36°C → Tj ≈ 81°C at 45°C ambient ✅ |
| At 5W sustained | ΔT ≈ 60°C → Tj ≈ 105°C ⚠️ (throttling). Add 25mm fan for TAC/RACK |

---

## 5. Z-STACKING VERIFICATION

```
Z (mm)  Component                                    Status
──────  ─────────────────────────────────────────    ──────
 75.0   Top surface
 72.0   Inner top / Display top (62.5+9.5=72.0)     ✅ Flush with inner top
 62.5   Display bottom
        ┄┄┄ AIR GAP: **29.9mm** ┄┄┄                  ✅ >> 5mm  [CORRECTED from 31.6]
 **32.6**   Heatsink top                                     **CORRECTED +1.7mm**
 29.7   Rear connectors top (RJ45)                   ✅ Below heatsink
 **22.6**   CM4 module top / Heatsink base               **CORRECTED +1.7mm**
 16.2   CM4 base = IO Board top (3.0mm Hirose gap above)
 14.6   CM4 IO Board bottom (on 11.6mm standoffs)
        ┄┄┄ 5.0mm gap ┄┄┄                           ✅ Clears I/O board
  9.6   I/O Carrier top
  8.0   I/O Carrier bottom (on 5mm standoffs)
  3.0   Inner bottom
  0.0   Enclosure bottom                             ✅ No overlap
```

---

## 6. ASSEMBLY SEQUENCE

| Step | Action | Tool | Time |
|---|---|---|---|
| 1 | Place 4× M2.5×5mm standoffs in base (for I/O board) | Hex key | 1 min |
| 2 | Place 4× M2.5×11.6mm standoffs in base (IO Board corners) | Hex key | 1 min |
| 3 | Seat I/O Carrier Board on short standoffs | Hand | 0.5 min |
| 4 | Connect 6-pin JST cable to I/O board top connector | Hand | 0.5 min |
| 5 | Seat CM4 IO Board on tall standoffs, connect JST cable to GPIO header | Hand | 1 min |
| 6 | Push-fit CM4 module into IO Board socket | Hand | 0.5 min |
| 7 | Attach heatsink with thermal pad (peel + press) | Hand | 0.5 min |
| 8 | Route HDMI cable from IO Board to display | Hand | 0.5 min |
| 9 | Seat display on support shelves (4× screws) | Phillips | 1.5 min |
| 10 | Mount speaker in bottom bracket (2× screws) | Phillips | 1 min |
| 11 | Connect speaker, E-stop, button JST cables to I/O board | Hand | 1 min |
| 12 | Route OLED FFC cable to IO Board SPI | Hand | 0.5 min |
| 13 | Snap-fit top cover (press down, 4 clips engage) | Hand | 0.5 min |
| | **TOTAL** | **2 tools** | **~10 min** |

**MF.05 (≤30 min): PASS** — estimated 10 min.
**DfA-02 (≤20 fasteners):** 4 I/O standoffs + 4 IO Board standoffs + 4 display + 2 speaker + 0 cover (snap-fit) = **14 fasteners ✅**

---

## 7. PRELIMINARY BOM — MAKER PROTOTYPE

| # | Component | Dimensions | Qty | Cost | Source | Lead |
|---|---|---|---|---|---|---|
| 1 | CM4 (2GB/16GB/WiFi) | 55×40mm | 1 | $35.00 | Import | 1-2 wk |
| 2 | **CM4 IO Board (official)** | **160×90mm** | 1 | **$35.00** | Import | 1-2 wk |
| 3 | HDMI Display 3.5" IPS | 86×56mm | 1 | $12.00 | Import | 1-2 wk |
| 4 | SPI OLED 1.3" SH1106 | 35×18mm | 1 | $3.00 | Import | 1-2 wk |
| 5 | Custom I/O Carrier PCB | 80×50mm | 1 | $2.00 | **Local** | 3-5 d |
| 6 | MCP23017 I/O Expander | SOIC-28 | 1 | $1.50 | Import | 1-2 wk |
| 7 | Tactile buttons 12mm | 12×12mm | 6 | $1.80 | **Local** | 1-3 d |
| 8 | E-stop 16mm NC mushroom | 16mm Ø | 1 | $2.00 | **Local** | 1-3 d |
| 9 | HW debounce (RC+74HC14) | On PCB | 1 | $0.50 | **Local** | w/PCB |
| 10 | TPL5010 HW WDT | SOT-23 | 1 | $1.00 | Import | 1-2 wk |
| 11 | RGB LEDs (WS2812B) | 5mm | 4 | $1.00 | **Local** | 1-3 d |
| 12 | PCA9685 LED driver | TSSOP-28 | 1 | $1.00 | Import | 1-2 wk |
| 13 | PAM8403 audio amp | 20×18mm | 1 | $0.50 | **Local** | 1-3 d |
| 14 | Speaker 8Ω 1W | 28mm Ø | 1 | $0.50 | **Local** | 1-3 d |
| 15 | Piezo buzzer | 12mm | 1 | $0.30 | **Local** | 1-3 d |
| 16 | Power (buck+LDO) | 30×20mm | 1 | $1.50 | **Local** | 1-3 d |
| 17 | Connectors set | Various | 1 | $2.00 | **Local** | 1-3 d |
| 18 | CM4 Heatsink (passive Al) | 40×40mm | 1 | $1.50 | **Local** | 1-3 d |
| 19 | Enclosure (3D print PLA) | 180×115×75 | 1 | $4.00 | **Local** | 1 d |
| 20 | Fasteners (M2.5 standoffs) | Various | 1 set | $1.50 | **Local** | 1-3 d |
| 21 | JST-PH cables (5 sets) | 2-8 pin | 5 | $1.00 | **Local** | 1-3 d |
| 22 | HDMI cable internal 20cm | Standard | 1 | $1.50 | Import | 1-2 wk |
| | **TOTAL** | | | **$110.10** | | |

### Cost Impact Analysis

| Metric | Old (85×56) | New (160×90) | Change |
|---|---|---|---|
| CM4 IO Board cost | $5.00 | **$35.00** | +$30.00 |
| Enclosure cost | $3.00 | $4.00 | +$1.00 |
| Fasteners | $1.00 | $1.50 | +$0.50 |
| **Total BOM** | **$75.60** | **$110.10** | **+$34.50** |
| DfC-01 (≤$80) | ✅ PASS | **❌ FAIL** | Prototype over budget |

### Options to Address DfC-01 Failure:

| Option | Impact | Recommendation |
|---|---|---|
| **A) Accept for prototype** | $110 one-time cost, production will use $15 custom carrier | ✅ Recommended — validates the full architecture |
| **B) Use cheaper clone carrier** | Third-party CM4 carriers exist at $15-25 (160×90 compatible) | Lower risk but less proven |
| **C) Use compact carrier (85×56)** | Returns to $75 BOM, but lose official board's full I/O | Loses HDMI×2, PCIe, DSI/CSI ports |

**Recommendation: Option A** — Accept $110 prototype cost. The official IO Board provides full I/O for architecture validation. Production uses a custom $15 carrier → production BOM meets $50 MAKER target.

### Local Content (Prototype)

| Category | Local | Import |
|---|---|---|
| PCB fab + assembly | $2.00 | — |
| Mechanical (enclosure, heatsink, fasteners) | $7.00 | — |
| Buttons, LEDs, passives | $5.60 | — |
| Audio | $1.30 | — |
| Connectors, cables | $3.00 | $1.50 |
| Compute + IO Board + displays + ICs | — | **$89.50** |
| **TOTAL** | **$18.90 (17%)** | **$91.00 (83%)** |

**Prototype local content: ~17%** (below 60% target — expected, production path via custom carrier).

---

## 8. SPATIAL CHECKS SUMMARY

| Check | Result | Detail |
|---|---|---|
| Envelope ≤ 200×150×80 | ✅ | 180×115×75 |
| Weight ≤ 500g | ✅ | ~400g |
| IO Board fits width | ✅ | 160 < 174mm internal |
| IO Board fits depth | ✅ | 90 < 101mm available |
| Z-stack no overlap | ✅ | All layers separated |
| Air gap ≥ 5mm | ✅ | 31.6mm |
| Display fits | ✅ | Flush with inner top |
| Front panel controls fit | ✅ | 75mm height, all elements placed |
| Rear connectors accessible | ✅ | Full IO Board edge exposed at rear |
| One-hand operation (ER.01) | ✅ | 46mm button zone, centered |
| Assembly ≤ 30 min (MF.05) | ✅ | ~10 min |
| Fasteners ≤ 20 (DfA-02) | ✅ | 14 (snap-fit cover, 4 IO Board mounts) |
| FDM printable (MF.07) | ✅ | 180×115mm < 220×220mm build volume |
| Prototype BOM ≤ $80 (DfC-01) | ❌ | $110.10 — accept or use cheaper carrier |

---

## 9. ENCLOSURE SHELL DESIGN (v1.2)

### 9.1 Two-Piece Design

| Parameter | Base Shell | Top Cover |
|---|---|---|
| **Z range** | 0 – 72 mm | 72 – 75 mm |
| **Construction** | Box + 4 walls, open top | Flat plate + 2mm alignment lip |
| **Attachment** | — | 4× snap-fit cantilever clips |
| **FDM print orientation** | Upside down (open face on build plate) | Right-side up (flat plate on build plate) |
| **Material** | PETG (all variants, per MatSel v1.0) | Same |

### 9.2 Panel Cutout Inventory

#### Front Panel (Y = 112–115 mm, operator-facing)

| ID | Feature | Size (mm) | Position X, Z | Shape |
|---|---|---|---|---|
| F1 | E-stop mounting hole | Ø17 | 90, 11 (center) | Circular |
| F2 | Button B1:ACK | 12.5 × 12.5 | 67, 38 | Square |
| F3 | Button B2:DIS | 12.5 × 12.5 | 84, 38 | Square |
| F4 | Button B3:DTL | 12.5 × 12.5 | 101, 38 | Square |
| F5 | Button B4:MOD | 12.5 × 12.5 | 67, 23 | Square |
| F6 | Button B5:CFG | 12.5 × 12.5 | 84, 23 | Square |
| F7 | Button B6:NAV | 12.5 × 12.5 | 101, 23 | Square |
| F8 | OLED window | 35.5 × 18.5 | 10, 54 | Rectangular |
| F9 | LED window | 48.5 × 6.5 | 55, 60 | Rectangular |

#### Rear Panel (Y = 0–3 mm)

| ID | Feature | Size (mm) | Position X, Z |
|---|---|---|---|
| R1 | Connector zone | 124 × 15.5 | 28, 15.2 |

**Note:** Single large cutout for prototype. Production version will have individual cutouts per connector (2×HDMI, 2×USB-A, RJ45, DC barrel, µUSB).

#### Bottom Plate (Z = 0–3 mm)

| ID | Feature | Size (mm) | Position X, Y |
|---|---|---|---|
| V1 | Speaker grille | 32 × 32 | 140, 3 |
| V2 | Front intake vent | 160 × 10 | 10, 100 |

#### Top Cover (Z = 72–75 mm)

| ID | Feature | Size (mm) | Position X, Y |
|---|---|---|---|
| C1 | Display window | 77 × 52 | 51.5, 28 |
| C2 | Left thermal vent | 39 × 40 | 5, 31 |
| C3 | Right thermal vent | 39 × 40 | 136, 31 |

### 9.3 Thermal Vent Design

**Key finding:** Heatsink (X:70-110, Y:36-76) overlaps with display (X:47-133, Y:26-82) in top view. Top vents placed on LEFT and RIGHT sides of the display instead.

```
TOP VIEW — Vent Placement
┌────────────────────────────────────────────────────────────┐
│                                                            │ Y=0
│  ┌──────────┐    ┌─────── Display Window ──────┐  ┌──────────┐
│  │ LEFT VENT│    │   77×52 (active area)       │  │RIGHT VENT│
│  │  39×40   │    │  ┌───────────────────────┐  │  │  39×40   │
│  │  (C2)    │    │  │                       │  │  │  (C3)    │
│  │  exhaust │    │  │    3.5" IPS LCD       │  │  │  exhaust │
│  │          │    │  │                       │  │  │          │
│  └──────────┘    │  └───────────────────────┘  │  └──────────┘
│                  └─────────────────────────────┘             │
│                                                              │
│    [Front intake V2: 160×10mm across bottom plate]           │ Y=100
└──────────────────────────────────────────────────────────────┘ Y=115
X=0                      X=90                            X=180
```

**Airflow path:** Bottom front intake (V2) → up past PCB edges → through 31.6mm air gap → past heatsink fins → laterally to side vents (C2, C3) → exhaust.

| Metric | Value | Requirement | Status |
|---|---|---|---|
| Bottom intake (gross) | 2,624 mm² (26.2 cm²) | ≥ 5 cm² | ✅ |
| Top exhaust (gross) | 3,120 mm² (31.2 cm²) | ≥ 10 cm² | ✅ |
| Bottom intake (effective, 50% grille) | 13.1 cm² | ≥ 5 cm² | ✅ |
| Top exhaust (effective, 50% grille) | 15.6 cm² | ≥ 10 cm² | ✅ |

### 9.4 Snap-Fit Cover Design

| Parameter | Value |
|---|---|
| Clip type | Cantilever, molded into cover lip |
| Clip count | 4 (2 per long side, at Y=40 and Y=75) |
| Clip dimensions | 2mm wide × 8mm long × 0.5mm hook |
| Mating feature | Rectangular slot in base inner wall |
| Engagement force | ~5N per clip (finger-press) |
| Release | Pry tool at any clip location |
| Lip depth | 2mm (alignment + clip engagement) |
| Fit tolerance | 0.3mm clearance (FDM standard) |

### 9.5 Internal Features

| Feature | Location | Purpose |
|---|---|---|
| Display shelf (left) | X=3, Y=21-87, Z=60.5 | Supports display module (5mm wide, 2mm thick) |
| Display shelf (right) | X=172, Y=21-87, Z=60.5 | Supports display module (5mm wide, 2mm thick) |
| Standoff bosses (4×) | Base corners, Z=3 | M2.5 threaded inserts for I/O board |
| Standoff bosses (4×) | IO Board corners, Z=3 | M2.5 threaded inserts for IO Board |

### 9.6 FDM Printing Notes

| Parameter | Base Shell | Top Cover |
|---|---|---|
| Print orientation | Upside down (open top on plate) | Right-side up |
| Support needed | Minimal (front panel cutouts may need supports) | None |
| Layer height | 0.2mm | 0.2mm |
| Infill | 20% gyroid | 20% gyroid |
| Estimated print time | ~8 hours | ~2 hours |
| Estimated material | ~120g PETG | ~30g PETG |
| Build volume needed | 180×115×72 mm | 180×115×5 mm |
| Fits 220×220 bed | ✅ | ✅ |

---

## 10. STATUS & NEXT STEPS

### Placement: APPROVED ✅

Component placement verified against all spatial constraints. Enclosure shell designed with all panel cutouts and vent openings.

### Completed in v1.2:

- [x] Component bounding-box placement (14 objects)
- [x] Z-stacking verification (no overlap)
- [x] Enclosure shell design (base + snap-fit cover)
- [x] Front panel cutouts (E-stop, 6 buttons, OLED, LED)
- [x] Rear panel connector cutout
- [x] Vent placement corrected (side vents, not above heatsink)
- [x] Display support shelves
- [x] Snap-fit cover (DfA-02 now PASS: 14 fasteners)

### Remaining Phase 3 Steps:

| Step | Description | Status |
|---|---|---|
| 3.1 Preliminary Layout | Component placement + shell | ✅ Complete |
| 3.2 DfX Review | Scorecard evaluated, GO for prototype | ✅ Complete |
| 3.3 Material Selection | PETG / FR-4 / Al 6063-T5 / Brass M2.5 | ✅ Complete |
| 3.4 Tolerance & Interface | Dimensional tolerances, mating features | Pending |
| 3.5 Local Content Assessment | Production local content ≥60% | Pending |
| 3.6 Gate 3 Review | Phase 3→4 gate checklist | Pending |

### Decision Required:

```
A) ✅ APPROVE shell design — proceed to Step 3.3 Material Selection
B) 🔄 REVISE — adjust cutout positions, vent layout, or shell design
C) ⏸️ PAUSE — stop here, resume later
```

---

*Document ID: VN-AICC-001-P3-Layout-v1.2*
*3D Model: AICC_MAKER_Layout_v1.py v1.2*
*Status: Placement approved, shell designed, awaiting approval*
*Next: Upon approval → Material Selection (Step 3.3)*
