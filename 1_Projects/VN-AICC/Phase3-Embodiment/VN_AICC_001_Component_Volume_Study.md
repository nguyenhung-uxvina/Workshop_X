---
project: VN-AICC-001
phase: 3
type: component_volume_study
version: 1.0
created: 2026-02-20
status: approved — FreeCAD model created
---

# VN-AICC-001: COMPONENT VOLUME STUDY
## AICC MAKER — Exact Bounding Box Dimensions per Datasheet
### Version 1.0 | 20/02/2026

---

**Document ID:** VN-AICC-001-P3-VolumeStudy-v1.0
**Phase:** 3 — Embodiment Design
**Input:** Spatial Layout v1.2, Preliminary Layout v2.0
**Purpose:** Confirm exact hardware dimensions from datasheets before FreeCAD detailed model
**Method:** Datasheet research + web sources, flagging items requiring physical measurement

---

## 1. DIMENSION TABLE — ALL COMPONENTS

### Confidence Levels
- ✅ **Confirmed** — from official datasheet or official STEP file
- ⚠️ **Estimated** — from training knowledge / secondary sources, verify before PCB layout
- ❌ **Requires measurement** — no authoritative source found, must measure physical unit

---

### 1.1 Compute & Carrier Boards

| # | Component | L (mm) | W (mm) | H (mm) | PCB (mm) | Notes | Confidence |
|---|---|---|---|---|---|---|---|
| A1 | **CM4 IO Board** | **160.0** | **90.0** | 1.6 | 1.6 | Official RPi datasheet. FR-4, 4-layer | ✅ |
| A2 | **CM4 IO Board** (with tallest connector) | 160.0 | 90.0 | **15.1** | — | 1.6 PCB + 13.5 RJ45 height | ✅ |
| A3 | **CM4 IO Board** (bottom clearance) | — | — | **2.0** | — | MicroSD slot below PCB | ✅ |
| A4 | **CM4 Module** | **55.0** | **40.0** | **1.0** | 1.0 | 6-layer PCB, rounded corners R=1mm | ✅ |
| A5 | **CM4 Module** (total Z above IO Board) | — | — | **6.4** | — | 3.0 mated gap + 1.0 PCB + 2.4 top components | ✅ |
| A6 | **Custom I/O Carrier PCB** | **80.0** | **55.0** | **1.6** | 1.6 | Revised: 80×55 (was 80×50). FR-4 2L. TPTPCB | ⚠️ |

**CM4 Z-Stack Correction (vs Spatial Layout v1.2):**

| Layer | Old (v1.2) | Corrected (v1.0 Study) | Delta |
|---|---|---|---|
| IO Board PCB top → CM4 bottom | 1.6mm (PCB only) | **+3.0mm mated gap** above IO Board | +3.0 |
| CM4 module height (above IO Board top) | 4.7mm | **6.4mm** | **+1.7mm** |
| Heatsink base Z | 20.9mm | **22.6mm** | +1.7mm |
| Heatsink top Z | 30.9mm | **32.6mm** | +1.7mm |
| Air gap (heatsink top to display bottom) | 31.6mm | **29.9mm** | -1.7mm |
| **Enclosure height** | 75mm | **75mm** | ✅ No change needed |

> The +1.7mm Z correction is within the original margin. Enclosure envelope unchanged.

---

### 1.2 Display & User Interface

| # | Component | L (mm) | W (mm) | H (mm) | Notes | Confidence |
|---|---|---|---|---|---|---|
| B1 | **Waveshare 3.5" HDMI LCD** (standard) | **~86** | **~57** | **~9** | See §3 for model recommendation. Download 3D_Drawing.zip to confirm | ⚠️ |
| B2 | Waveshare 3.5" HDMI LCD (E) | **76.6** | **63.6** | ~9 | Alt model: 640×480 capacitive, $43.99. From Waveshare product page | ⚠️ |
| B3 | SPI OLED 1.3" (SH1106) | **35.0** | **18.0** | **3.5** | Standard 128×64 OLED module | ✅ |
| B4 | Tactile button 12mm | **12.0** | **12.0** | **12.0** | Panel-mount. Body extends 7mm behind panel | ✅ |
| B5 | E-stop 16mm NC mushroom | **Ø16** | — | **35.0** | Mounting depth ≥25mm, front face diameter 40mm | ✅ |

---

### 1.3 Thermal Management

| # | Component | L (mm) | W (mm) | H (mm) | Notes | Confidence |
|---|---|---|---|---|---|---|
| C1 | **Heatsink 40×40×10 Al 6063-T5** | **40.0** | **40.0** | **10.0** | Pre-made, standard size. Fin pitch ~2mm | ✅ |
| C2 | Thermal pad (CM4 SoC) | **~15** | **~15** | **0.5** | SoC package is ~15×15mm | ⚠️ |

---

### 1.4 Audio & Power

| # | Component | L (mm) | W (mm) | H (mm) | Notes | Confidence |
|---|---|---|---|---|---|---|
| D1 | Speaker 28mm 8Ω 1W | **Ø28** | — | **12.0** | Mylar cone, depth includes magnet | ✅ |
| D2 | PAM8403 audio amp module | **20.0** | **18.0** | **6.0** | SOP-16 IC + filter caps on small breakout | ⚠️ |
| D3 | Power supply (mini buck+LDO) | **30.0** | **20.0** | **10.0** | E.g. MP2315 + LP2985 on breakout. Confirm against actual module | ⚠️ |

---

### 1.5 Mounting Hardware

| # | Component | Thread | Body Ø (mm) | Length (mm) | Notes | Confidence |
|---|---|---|---|---|---|---|
| E1 | M2.5×5mm hex standoff | M2.5 | 5.0 | 5.0 | Base → I/O Carrier PCB | ✅ |
| E2 | M2.5×11.6mm hex standoff | M2.5 | 5.0 | 11.6 | Base → CM4 IO Board | ✅ |
| E3 | M2.5 screw | M2.5 | — | 6.0 | Pan head, × 14 total | ✅ |

---

## 2. CM4 IO BOARD — CONNECTOR HEIGHT PROFILE

All heights measured from IO Board PCB **top surface**.

| Connector | Edge | Height (mm) | Protrusion beyond PCB edge (mm) | Notes |
|---|---|---|---|---|
| RJ45 Ethernet | Left/rear | **13.5** | ~1-2 | Tallest component. Includes LEDs |
| 12V DC barrel jack | Left/rear | **11.0** | ~2 | 7-28V input, 2.5mm pin |
| GPIO 40-pin header | Top surface | **8.5** | — | 2×20, 2.54mm pitch |
| USB-A × 2 (stacked) | Left/rear | **~7.5** | ~2-3 | Stacked double-stack USB-A |
| HDMI0 (full-size) | Left/rear | **6.5** | ~1-2 | Full-size HDMI Type-A |
| HDMI1 (full-size) | Left/rear | **6.5** | ~1-2 | Full-size HDMI Type-A |
| Micro-USB | Left/rear | **~4.0** | ~1 | RPIBOOT/flashing only |
| CM4 Hirose sockets (×2) | Surface (center) | **~1.5** | — | DF40HC(3.0)-100DS-0.4V(51) |
| PCIe FFC | Surface | **~2.5** | — | For PCIe cable |
| DSI0, DSI1 FFC | Surface | **~2.5** | — | 22-pin each |
| CSI0, CSI1 FFC | Surface | **~2.5** | — | 22-pin each |
| Fan header | Surface | **~8.5** | — | 4-pin JST or 0.1" |
| MicroSD slot | Right edge, bottom | **~2.0 below** | ~3 when card inserted | Bottom-mount slot |

**IO Board mounting hole pattern:**

| Hole | X (mm) | Y (mm) | Diameter | Notes |
|---|---|---|---|---|
| H1 (front-left) | 3.5 | 3.5 | 2.7 (M2.5) | 3.5mm from each edge |
| H2 (front-right) | 156.5 | 3.5 | 2.7 | — |
| H3 (rear-right) | 156.5 | 86.5 | 2.7 | — |
| H4 (rear-left) | 3.5 | 86.5 | 2.7 | — |
| **X spacing** | **153.0mm** | | | |
| **Y spacing** | **83.0mm** | | | |

---

## 3. CONNECTOR USAGE AUDIT — CM4 IO BOARD

**Context:** AICC MAKER product. Classify each connector for prototype function.

### Classification
- 🟢 **USED** — required for MAKER prototype operation
- 🔵 **FUTURE** — needed for PRO/TAC/RACK variants or future firmware
- ⚫ **UNUSED** — not used in any planned variant; connector still physically present

---

### 3.1 Edge Connectors (Rear Panel — Y=0 face of enclosure)

| # | Connector | Type | Board Position | MAKER Status | Justification | Custom Carrier Implication |
|---|---|---|---|---|---|---|
| 1 | **HDMI0** | Full-size HDMI | Left of rear edge | 🟢 **USED** | Internal cable → 3.5" display | Must route HDMI0 to display window |
| 2 | **HDMI1** | Full-size HDMI | Center of rear edge | 🔵 **FUTURE** | PRO/TAC: external monitor output | Expose through rear panel |
| 3 | **USB-A (×2 stacked)** | USB 2.0 Type-A | Right-center of rear edge | 🔵 **FUTURE** | Debug keyboard, USB storage | Expose through rear panel |
| 4 | **RJ45 Ethernet** | Gigabit, with LEDs | Far right of rear edge | 🟢 **USED** | IRONMESH network connection | Must expose at rear panel |
| 5 | **DC barrel jack** | 12V, 2.5mm pin | Left of rear edge | 🟢 **USED** | Primary power input | Must expose at rear panel |
| 6 | **Micro-USB** | Micro-USB B | Far left of rear edge | 🟢 **USED** | CM4 RPIBOOT flashing (service port) | Expose at rear panel for field service |

> **MAKER rear panel:** 5 connectors exposed (HDMI0 internal-only, HDMI1 exposed, 2×USB-A exposed, RJ45, DC, micro-USB).
> Note: HDMI0 exits via internal cable only, not via the rear panel.

---

### 3.2 On-Board Connectors (Surface-Mounted)

| # | Connector | Type | MAKER Status | Justification | Custom Carrier Implication |
|---|---|---|---|---|---|
| 7 | **GPIO 40-pin** | 2×20 header, 2.54mm | 🟢 **USED** | I2C (SDA/SCL) to I/O carrier, SPI to OLED, GPIO4 E-stop, GPIO17 WDT | Critical signal path. I/O carrier connects here via JST-PH cable |
| 8 | **PCIe x1 FFC** | FFC/FPC | ⚫ **UNUSED** | No PCIe device in MAKER | TAC/RACK: PCIe to M.2 NVMe via FFC adapter board |
| 9 | **DSI0 FFC** | 22-pin FFC | ⚫ **UNUSED** | Using HDMI for display (not DSI) | Could replace HDMI display with DSI in future (lower cable hassle) |
| 10 | **DSI1 FFC** | 22-pin FFC | ⚫ **UNUSED** | Same as DSI0 | — |
| 11 | **CSI0 FFC** | 22-pin FFC | 🔵 **FUTURE** | TAC variant: front-facing camera for situation awareness | Keep accessible in TAC enclosure |
| 12 | **CSI1 FFC** | 22-pin FFC | 🔵 **FUTURE** | TAC variant: second camera (rear/thermal) | — |
| 13 | **Fan header** | 4-pin | 🔵 **FUTURE** | TAC/RACK: active cooling fan PWM control | Leave accessible; add fan in TAC |
| 14 | **RTC battery** | 2-pin JST | 🔵 **FUTURE** | Real-time clock backup (CR2032). Important for IRONMESH time-sync | Populate in PRO+. Add CR2032 holder to I/O carrier |
| 15 | **MicroSD slot** | Push-push | ⚫ **UNUSED** | CM4 with eMMC selected (16GB). No SD card needed | — |
| 16 | **PoE header** | 4-pin | ⚫ **UNUSED** | No PoE in any planned variant | — |

---

### 3.3 Connector Summary

| Status | Count | List |
|---|---|---|
| 🟢 USED | 5 | HDMI0 (internal), RJ45, DC barrel, Micro-USB, GPIO 40-pin |
| 🔵 FUTURE | 7 | HDMI1, 2×USB-A, CSI0, CSI1, Fan, RTC battery |
| ⚫ UNUSED | 5 | PCIe FFC, DSI0, DSI1, MicroSD, PoE header |
| **Total** | **17** | |

---

### 3.4 Custom I/O Carrier PCB — Scope Definition

Based on the connector audit, the custom I/O carrier PCB must provide:

| Function | Signal | Connection to IO Board |
|---|---|---|
| 6× tactile buttons (B1-B6) | GPIO via MCP23017 I2C | I2C on GPIO 40-pin (SDA=pin3, SCL=pin5) |
| 4× RGB LEDs (WS2812B) | GPIO via PCA9685 I2C | I2C shared bus |
| E-stop input | GPIO4 (pin7, active LOW) | GPIO 40-pin |
| Hardware watchdog | GPIO17 (pin11, WDT kick) | GPIO 40-pin |
| OLED display (SPI) | SPI0 (MOSI/CLK/CE/DC/RST) | GPIO 40-pin SPI pins |
| Speaker amplifier | GPIO PWM or HDMI audio | PAM8403 takes audio from mini-jack on display |
| Piezo buzzer | GPIO12 (PWM) | GPIO 40-pin |
| Power indicator | 3.3V from GPIO 40-pin | Pin 1 or 17 |

**Custom carrier does NOT need to replicate:**
- HDMI, USB-A, RJ45, DC barrel (all on IO Board)
- PCIe, DSI, CSI (unused/future only)

---

### 3.5 Custom I/O Carrier PCB — Size Estimate

**Component footprint breakdown:**

| Component | Footprint (mm) | Qty | Notes |
|---|---|---|---|
| MCP23017 I/O Expander | SOIC-28: 18×8 | 1 | Covers GPIO for all 6 buttons + LEDs |
| 74HC14 Schmitt (debounce) | SOIC-14: 9×4 | 1 | 6 inputs |
| TPL5010 HW Watchdog | SOT-23-5: 3×3 | 1 | |
| PCA9685 LED driver | TSSOP-28: 10×4.4 | 1 | 16-ch PWM |
| PAM8403 audio amp | SOP-16: 10×6 | 1 | |
| WS2812B LEDs (×4) | 5×5 each | 4 | 25mm² each × 4 = 100mm² total |
| JST-PH connectors (×5) | 7×5 each | 5 | Buttons, E-stop, speaker, LEDs, power |
| I2C to GPIO header 6-pin | 15×5 | 1 | To IO Board GPIO |
| RC debounce circuits (6×) | 5×3 each | 6 | Per button channel |
| Bypass caps (0805 × 8) | 2×1.25 each | 8 | |
| Piezo pad | 12×12 | 1 | Panel-mount buzzer |
| M2.5 mounting holes (×4) | Ø5 keepout each | 4 | |

**Raw component area:** ~1,800 mm²
**With ×2.5 routing factor:** ~4,500 mm²
**Board options:**

| Option | Area (mm²) | Fill Factor | Assessment |
|---|---|---|---|
| 80×50 = 4,000 | 4,000 | 4,500/4,000 = 113% | ❌ Too tight |
| **80×55 = 4,400** | 4,400 | 4,500/4,400 = 102% | ✅ Tight but feasible with careful layout |
| 80×60 = 4,800 | 4,800 | 4,500/4,800 = 94% | ✅ Comfortable |

**Recommendation: 80×55mm** — update from current 80×50mm placeholder.
Fits within Z=8-9.6mm in current spatial layout (no Z change needed, 1.6mm PCB same).

---

## 4. CABLE CLEARANCE VOLUMES

### 4.1 HDMI Cable (IO Board → Display)

| Parameter | Value | Notes |
|---|---|---|
| Cable type | HDMI flat cable or right-angle adapter | Must be ≤20cm internal |
| HDMI port height | Z ≈ 16.2 + 6.5 = 22.7mm | IO Board top + HDMI connector height |
| Display HDMI height | Z ≈ 62.5mm | Display bottom face |
| Vertical run | ~40mm | From rear to top |
| Bend radius needed | ≥30mm (HDMI spec) | Standard HDMI cable |
| Routing path | Left wall (X=3-15), Y=15-100 | Along side wall, up to display |
| Clearance volume | 12mm W × 30mm D × 40mm H | Left side of enclosure interior |
| **Conflict check** | No conflict with I/O carrier (X=50-130) | ✅ Left lane is clear |

### 4.2 GPIO Cable (IO Board → I/O Carrier)

| Parameter | Value | Notes |
|---|---|---|
| Cable type | 6-pin JST-PH, 100mm |  |
| Connector height | JST-PH header: 6mm above PCB | Use right-angle header on I/O carrier |
| Gap available | 5mm vertical (Z=8.0 to Z=14.6 = 6.6mm gap minus connector body) | Tight — right-angle header essential |
| Horizontal run | X: 62.5-130mm (GPIO header area) → X: 50-130mm (I/O carrier) | Very short run, ≤50mm |
| Bend radius | ≥5mm (JST-PH silicone) | Achievable |
| **Risk** | Low. Right-angle header + short cable handles 5mm gap | ✅ |

### 4.3 Button & LED Cables (Panel → I/O Carrier)

| Parameter | Value | Notes |
|---|---|---|
| Cable type | 2-pin flying leads per button, or JST-PH | |
| Cable length | 50-80mm | Panel at Y=112, carrier at Y=61-110 |
| Bend radius | ≥3mm (small gauge wire) | Fine |
| Routing | Bundled along front-left wall | X=3-15, Y=50-115 |
| **Risk** | Cable clutter if not bundled | Bundle with spiral wrap or adhesive clip |

---

## 5. WIRELESS CM4 ANTENNA KEEP-OUT

**Important for WiFi/BT functionality:**

| Parameter | Value |
|---|---|
| CM4 antenna type | On-board PCB antenna (corner of CM4 module) |
| Antenna location | Corner of CM4 module, along 40mm edge |
| Keep-out zone on IO Board | ~25×15mm: no copper pour, no metal enclosure wall within this zone |
| AICC MAKER enclosure material | PETG (non-metal) → **antenna keep-out NOT critical** |
| WiFi variant | CM4 with WiFi selected (IRONMESH wireless link) |
| **Risk** | PETG walls have no effect on 2.4/5GHz RF | ✅ |

---

## 6. STATUS & CHECKPOINT

### Research Completion

| Item | Status | Confidence |
|---|---|---|
| CM4 IO Board dimensions | ✅ Done | ✅ Official datasheet |
| CM4 IO Board connector positions | ✅ Done | ⚠️ Verify STEP file for exact XY |
| CM4 Module Z-stack | ✅ Done | ✅ Hirose DF40HC(3.0) spec confirmed |
| CM4 Module dimensions | ✅ Done | ✅ Official datasheet |
| Waveshare 3.5" HDMI LCD | ⚠️ Partial | ⚠️ Board dims need 3D file download |
| Custom I/O PCB estimate | ✅ Done | ⚠️ Estimate, confirm after schematic |
| Connector usage audit | ✅ Done | ✅ |
| Cable clearance volumes | ✅ Done | ⚠️ Verify with physical routing |

### CHECKPOINT — 3 Deliverables (see §7)

Per user's TASK delegation, the following 3 items require approval before FreeCAD model creation:

1. **Dimension table** → §1 (with Z-stack correction noted)
2. **Connector usage audit** → §3 (17 connectors, 5 used / 7 future / 5 unused)
3. **Display model recommendation** → §7.3

---

## 7. CHECKPOINT DELIVERABLES

### 7.1 Dimension Table Summary (Top Components)

| Component | L × W × H (mm) | Source | Flag |
|---|---|---|---|
| CM4 IO Board | **160.0 × 90.0 × 1.6** | Official RPi datasheet | ✅ |
| CM4 IO Board (with RJ45) | 160.0 × 90.0 × 15.1 | Derived | ✅ |
| CM4 Module | **55.0 × 40.0 × 1.0 PCB** | Official RPi datasheet | ✅ |
| CM4 Module (total Z above IO Board) | — × — × **6.4** | Hirose DF40HC(3.0) spec | ✅ |
| CM4 Heatsink (pre-made) | **40.0 × 40.0 × 10.0** | Standard product | ✅ |
| Waveshare 3.5" HDMI LCD (standard) | **~86 × 57 × 9** | Training data [VERIFY] | ⚠️ |
| Waveshare 3.5" HDMI LCD (E) | **76.6 × 63.6 × ~9** | Waveshare product page | ⚠️ |
| SPI OLED 1.3" | **35.0 × 18.0 × 3.5** | Standard module | ✅ |
| E-stop 16mm NC | **Ø40 front, 35mm depth** | Standard product | ✅ |
| Custom I/O Carrier PCB | **80.0 × 55.0 × 1.6** | Estimated (×2.5 routing factor) | ⚠️ |
| Speaker 28mm 8Ω | **Ø28 × 12** | Standard product | ✅ |
| Power supply module | **30.0 × 20.0 × 10.0** | Estimated | ⚠️ |

**Z-Stack Correction (+1.7mm):** Heatsink top moves from Z=30.9 to **Z=32.6**. Air gap changes from 31.6mm to **29.9mm**. Enclosure height (75mm) unchanged.

---

### 7.2 Connector Usage Audit Summary

| Status | Count | Connectors |
|---|---|---|
| 🟢 USED | 5 | HDMI0 (→display internal), RJ45, DC barrel, Micro-USB, GPIO 40-pin |
| 🔵 FUTURE | 7 | HDMI1, 2×USB-A, CSI0, CSI1, Fan header, RTC battery |
| ⚫ UNUSED | 5 | PCIe FFC, DSI0, DSI1, MicroSD, PoE header |

**Custom I/O Carrier scope:** I2C (MCP23017, PCA9685) + SPI (OLED) + GPIO4 (E-stop) + GPIO17 (WDT) + GPIO12 (buzzer) + 3.3V/GND. All via GPIO 40-pin header on IO Board. No custom carrier connectors needed for HDMI/USB/RJ45 (all on IO Board directly).

---

### 7.3 Display Model Recommendation

#### Option A — Waveshare 3.5inch HDMI LCD (Standard) ← **RECOMMENDED**

| Parameter | Value |
|---|---|
| **Model** | Waveshare 3.5inch HDMI LCD (SKU: 13503) |
| **Resolution** | 480×320 px, IPS, 160° viewing angle |
| **Interface** | HDMI (includes micro-HDMI adapter) |
| **Touch** | Resistive (stylus included) |
| **Audio** | 3.5mm jack |
| **Board dimensions** | ~86×57×9mm [VERIFY: download 3.5inch_HDMI_LCD_3D_Drawing.zip] |
| **Active area** | ~70×53mm (estimated from 3.5" diagonal) |
| **Mounting** | 4× mounting screws (included) |
| **Weight** | 142g |
| **Price** | **$35.99 USD** (~900,000 VND) |
| **Vietnam availability** | Shopee.vn, Lazada.vn, Nhật Tảo market HCMC. Search "Waveshare 3.5 HDMI LCD" |
| **Power** | 5V/500mA via HDMI |
| **Why recommended** | Lowest cost, sufficient 480×320 for AICC status display, IPS viewing angle, resistive touch not needed for MAKER (using dedicated buttons) |

#### Option B — Waveshare 3.5inch HDMI LCD (E)

| Parameter | Value |
|---|---|
| **Model** | Waveshare 3.5inch HDMI LCD (E) |
| **Resolution** | 640×480 px, IPS, 170° viewing angle |
| **Interface** | HDMI + USB-C (touch) |
| **Touch** | Capacitive 5-point (toughened glass 6H) |
| **Board dimensions** | 76.6×63.6×~9mm |
| **Price** | **$43.99 USD** (~1,100,000 VND) |
| **Why NOT recommended for MAKER** | $8 more, capacitive touch not needed (we have buttons), USB-C cable adds wiring complexity, smaller board (76.6mm vs 86mm) means re-checking enclosure window size |

#### Recommendation: **Option A — Standard model, $35.99**

The 480×320 IPS is sufficient for the AICC MAKER status display (threat icons, system status, alert banners). Resistive touch is not used — all input via dedicated buttons and E-stop. $8 saved per unit.

**Action Required:** Download dimensional drawing to confirm exact board size:
- `https://www.waveshare.com/wiki/3.5inch_HDMI_LCD` → Resources → "3D Drawing"

---

### CHECKPOINT STATUS: ✅ APPROVED (2026-02-20)

---

## 8. FREECAD VOLUME STUDY MODEL

**File:** `AICC_MAKER_VolumeStudy_v1.0.py`
**Components modeled:** 14 bounding boxes / cylinders
**Layout:** 4-column display grid (NOT assembled position)

| ID | Object Name | Geometry | Grid |
|---|---|---|---|
| A1 | CM4 IO Board PCB | Box 160×90×1.6 | col 0, row 0 |
| A2 | CM4 IO Board Envelope (w/ connectors) | Box 160×90×15.1 | col 1, row 0 |
| A3 | CM4 Module Envelope (**CORRECTED 6.4mm**) | Box 55×40×6.4 | col 2, row 0 |
| A4 | Custom I/O Carrier PCB (**REVISED 80×55**) | Box 80×55×1.6 | col 3, row 0 |
| B1 | Waveshare 3.5" HDMI LCD Standard [VERIFY] | Box 86×57×9 | col 0, row 1 |
| B1e | Waveshare 3.5" HDMI LCD (E) [alt] | Box 76.6×63.6×9 | col 1, row 1 |
| B2 | OLED 1.3" SPI | Box 35×18×3.5 | col 2, row 1 |
| B3 | Tactile Button 12mm | Box 12×12×12 | col 3, row 1 |
| C1 | E-stop 16mm NC | Cyl Ø40×35 | col 0, row 2 |
| C2 | WS2812B LED | Box 5×5×1.7 | col 1, row 2 |
| D1 | Heatsink Al 6063-T5 | Box 40×40×10 | col 0, row 3 |
| D2 | Speaker 28mm | Cyl Ø28×12 | col 1, row 3 |
| D3 | PAM8403 Audio Amp | Box 20×18×6 | col 2, row 3 |
| D4 | Power Supply Module [VERIFY] | Box 30×20×10 | col 3, row 3 |

### Volume Report (from macro output)

| Component | Volume (cm³) |
|---|---|
| CM4 IO Board PCB | 23.04 |
| CM4 IO Board Envelope | 218.64 |
| CM4 Module Envelope | 14.08 |
| Custom I/O Carrier PCB | 7.04 |
| Display 3.5" HDMI (standard) | 44.17 |
| OLED 1.3" | 2.21 |
| Tactile Button (×1) | 1.73 |
| E-stop (bounding cyl) | 43.98 |
| Heatsink | 16.00 |
| Speaker | 7.54 |
| PAM8403 module | 2.16 |
| Power module | 6.00 |
| **Enclosure envelope** | **1,552.50** |
| **Enclosure internal** | **1,366.01** |
| **Fill ratio** | **~28%** |

**Fill ratio ~28%** — 72% of internal volume is air (routing, thermal, cable clearance). Healthy for first-pass layout.

---

## 9. CORRECTIONS FLAGGED BY VOLUME STUDY

| Item | Old Value | Corrected Value | Impact |
|---|---|---|---|
| CM4 Module height above IO Board | 4.7mm | **6.4mm** | Heatsink base +1.7mm. Air gap: 31.6→29.9mm. Enclosure: unchanged |
| Custom I/O Carrier PCB width | 80×50mm | **80×55mm** | Component fill: 113%→102%. Z-position: unchanged |

**Next step:** Apply Z-stack correction to `AICC_MAKER_Layout_v1.py` (update CM4 height from 4.7 to 6.4, heatsink Z from 20.9 to 22.6).

---

*Document ID: VN-AICC-001-P3-VolumeStudy-v1.0*
*FreeCAD Model: AICC_MAKER_VolumeStudy_v1.0.py*
*Status: Approved — Volume study complete*
*Next: Step 3.4 Tolerance & Interface | Step 3.5 Local Content | Step 3.6 Gate 3 Review*
