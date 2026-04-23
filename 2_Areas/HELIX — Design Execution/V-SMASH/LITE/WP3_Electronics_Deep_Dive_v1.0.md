# WP3: ELECTRONICS - Deep Dive
## V-SMASH-LITE Carrier PCB Design

**Work Package**: WP3 - Electronics Integration
**Version**: 1.0
**Date**: 2026-01-19
**Parent Document**: V-SMASH-LITE Prototype Build Plan v1.0

---

# 1. WORK PACKAGE OVERVIEW

## 1.1 Scope

WP3 covers all electronics design, fabrication, and assembly for the V-SMASH-LITE system, centered on a custom carrier PCB for the NVIDIA Jetson Nano compute module.

**Included:**
- Custom carrier PCB design and fabrication
- Power management system (PMIC)
- Camera interface (MIPI CSI-2)
- Sensor interfaces (IMU, trigger sensor)
- Display interfaces (OLED reticle, status LEDs)
- Solenoid driver circuit
- USB-C charging system
- Wiring harness design

**Excluded:**
- Jetson Nano module itself (COTS)
- Camera module (COTS)
- Mechanical integration (WP1)
- Software (WP4)

## 1.2 Electronics Requirements Summary

| Req ID | Parameter | Value | Source |
|--------|-----------|-------|--------|
| R-ELC-01 | Operating voltage | 7.4V nominal (2S Li-ion) | Battery pack |
| R-ELC-02 | System power consumption | ≤5W average | Runtime target |
| R-ELC-03 | Peak power | ≤10W | AI inference + actuation |
| R-ELC-04 | Runtime | ≥8 hours | Operational requirement |
| R-ELC-05 | Camera interface | MIPI CSI-2, 2-lane | Jetson Nano spec |
| R-ELC-06 | Camera resolution | 1920×1080 @ 60fps | Detection requirement |
| R-ELC-07 | IMU interface | I²C, 400kHz | Sensor spec |
| R-ELC-08 | IMU sample rate | ≥200 Hz | Orientation tracking |
| R-ELC-09 | Trigger sensor | Analog input, 0-3.3V | Force sensing |
| R-ELC-10 | OLED display | SPI, 10MHz | Reticle display |
| R-ELC-11 | Solenoid drive | 12V, 1A pulse | Trigger actuator |
| R-ELC-12 | EMC compliance | MIL-STD-461G (target) | Defense requirement |
| R-ELC-13 | Operating temp | -20°C to +55°C | Environmental |
| R-ELC-14 | Shock survival | 500g, 11ms | Weapon recoil |

## 1.3 WP3 Task Breakdown

```
WP3: ELECTRONICS
│
├── WP3.1: System Architecture
│   ├── WP3.1.1: Block diagram finalization
│   ├── WP3.1.2: Power budget analysis
│   └── WP3.1.3: Interface definition
│
├── WP3.2: Carrier PCB Design
│   ├── WP3.2.1: Schematic capture
│   ├── WP3.2.2: PCB layout
│   ├── WP3.2.3: Design rule check (DRC)
│   └── WP3.2.4: Design for manufacturing (DFM)
│
├── WP3.3: PCB Fabrication
│   ├── WP3.3.1: Gerber generation
│   ├── WP3.3.2: PCB manufacturing
│   └── WP3.3.3: Incoming inspection
│
├── WP3.4: Component Assembly
│   ├── WP3.4.1: Component procurement
│   ├── WP3.4.2: SMT assembly
│   └── WP3.4.3: Manual soldering (connectors)
│
├── WP3.5: Wiring Harness
│   ├── WP3.5.1: Harness design
│   ├── WP3.5.2: Connector selection
│   └── WP3.5.3: Harness fabrication
│
└── WP3.6: Electronics Testing
    ├── WP3.6.1: Power-on test
    ├── WP3.6.2: Functional test
    └── WP3.6.3: Integration test
```

## 1.4 Schedule

| Task | Duration | Start | End | Predecessor |
|------|----------|-------|-----|-------------|
| WP3.1 System Architecture | 3 days | Week 1, Day 1 | Week 1, Day 3 | - |
| WP3.2 PCB Design | 10 days | Week 1, Day 4 | Week 3, Day 3 | WP3.1 |
| WP3.3 PCB Fabrication | 10 days | Week 3, Day 4 | Week 5, Day 3 | WP3.2 |
| WP3.4 Component Assembly | 5 days | Week 5, Day 4 | Week 6, Day 3 | WP3.3 |
| WP3.5 Wiring Harness | 5 days | Week 4, Day 1 | Week 4, Day 5 | WP3.2 |
| WP3.6 Testing | 5 days | Week 6, Day 4 | Week 7, Day 3 | WP3.4, WP3.5 |
| **TOTAL** | **~35 days** | **Week 1** | **Week 7** | |

---

# 2. SYSTEM ARCHITECTURE

## 2.1 Electronics Block Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE ELECTRONICS BLOCK DIAGRAM                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  POWER SYSTEM                           COMPUTE                                     │
│  ════════════                           ═══════                                     │
│                                                                                      │
│  ┌─────────────┐                        ┌─────────────────────────────────────────┐ │
│  │   BATTERY   │                        │                                         │ │
│  │  2S 18650   │                        │           NVIDIA JETSON NANO            │ │
│  │  7.4V 6.8Ah │                        │             (SOM Module)                │ │
│  └──────┬──────┘                        │                                         │ │
│         │                               │  ┌─────────────────────────────────────┐│ │
│         ▼                               │  │  Tegra X1 SoC                       ││ │
│  ┌─────────────┐    5V @ 4A             │  │  - 4× Cortex-A57 CPU                ││ │
│  │    PMIC     │────────────────────────▶  │  - 128-core Maxwell GPU             ││ │
│  │  (TPS65988) │    3.3V @ 0.5A         │  │  - 4GB LPDDR4                       ││ │
│  │             │────────────────────────▶  │  - MIPI CSI-2 (up to 4 lanes)       ││ │
│  └──────┬──────┘                        │  │  - SPI, I²C, UART, GPIO             ││ │
│         │                               │  └─────────────────────────────────────┘│ │
│         │ 12V @ 0.5A                    │                                         │ │
│         │ (boost)                       │  Interfaces:                            │ │
│         ▼                               │  - CSI-2 (2-lane) ──▶ Camera           │ │
│  ┌─────────────┐                        │  - I²C Bus 1 ──────▶ IMU               │ │
│  │   SOLENOID  │                        │  - SPI Bus 0 ──────▶ OLED              │ │
│  │   DRIVER    │                        │  - GPIO ───────────▶ Trigger sensor    │ │
│  │  (DRV8871)  │                        │  - GPIO ───────────▶ LEDs              │ │
│  └─────────────┘                        │  - UART ───────────▶ Debug             │ │
│                                         │                                         │ │
│  ┌─────────────┐                        └─────────────────────────────────────────┘ │
│  │  USB-C      │                                        │                           │
│  │  CHARGING   │                                        │                           │
│  │  (BQ25895)  │                                        │                           │
│  └─────────────┘                                        │                           │
│                                                         │                           │
│  ═══════════════════════════════════════════════════════╪═══════════════════════   │
│                                                         │                           │
│  SENSORS                                                │           OUTPUTS         │
│  ═══════                                                │           ═══════         │
│                                                         │                           │
│  ┌─────────────┐    MIPI CSI-2 (2-lane)                │                           │
│  │   CAMERA    │────────────────────────────────────────┤                           │
│  │  IMX290     │    1080p60, 1.5Gbps/lane              │                           │
│  │  (1080p60)  │                                        │                           │
│  └─────────────┘                                        │                           │
│                                                         │                           │
│  ┌─────────────┐    I²C @ 400kHz                       │    ┌─────────────┐        │
│  │     IMU     │────────────────────────────────────────┼───▶│    OLED     │        │
│  │   BMI160    │    Addr: 0x68                         │    │  RETICLE    │        │
│  │  (6-axis)   │                                        │    │  (SPI)      │        │
│  └─────────────┘                                        │    └─────────────┘        │
│                                                         │                           │
│  ┌─────────────┐    Analog (ADC)                       │    ┌─────────────┐        │
│  │   TRIGGER   │────────────────────────────────────────┼───▶│  SOLENOID   │        │
│  │   SENSOR    │    0-3.3V, 12-bit                     │    │  ACTUATOR   │        │
│  │  (FSR402)   │                                        │    └─────────────┘        │
│  └─────────────┘                                        │                           │
│                                                         │    ┌─────────────┐        │
│  ┌─────────────┐    GPIO                               │    │  STATUS     │        │
│  │   BUTTONS   │────────────────────────────────────────┼───▶│   LEDS      │        │
│  │  (×2)       │    Digital input (pull-up)            │    │  (RGB ×3)   │        │
│  └─────────────┘                                        │    └─────────────┘        │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Power Budget Analysis

### 2.2.1 Component Power Consumption

| Component | Voltage | Typical Current | Peak Current | Typical Power | Peak Power |
|-----------|---------|-----------------|--------------|---------------|------------|
| Jetson Nano (10W mode) | 5V | 2.0A | 4.0A | 10.0W | 20.0W |
| Jetson Nano (5W mode) | 5V | 1.0A | 2.0A | 5.0W | 10.0W |
| Camera module | 3.3V | 150mA | 200mA | 0.50W | 0.66W |
| IMU (BMI160) | 3.3V | 1mA | 5mA | 0.003W | 0.016W |
| OLED display | 3.3V | 20mA | 40mA | 0.066W | 0.132W |
| Solenoid (pulsed) | 12V | 0mA | 1000mA | 0W | 12W (100ms) |
| Status LEDs | 3.3V | 30mA | 60mA | 0.10W | 0.20W |
| PMIC + misc | - | - | - | 0.30W | 0.50W |
| **TOTAL (5W mode)** | | | | **6.0W** | **23.5W** |

### 2.2.2 Battery Runtime Calculation

```
Battery capacity: 2 × 3400mAh = 6800mAh @ 3.7V nominal
Energy: 6800mAh × 7.4V = 50.3 Wh

Average power (5W mode, no solenoid): 6.0W
Estimated runtime: 50.3 Wh / 6.0W = 8.4 hours ✓ (meets R-ELC-04)

With 20% margin: 8.4 × 0.8 = 6.7 hours minimum guaranteed
```

### 2.2.3 Power Rail Definition

| Rail | Voltage | Max Current | Source | Loads |
|------|---------|-------------|--------|-------|
| VBAT | 7.4V (6.0-8.4V) | 3A | Battery pack | PMIC input |
| 5V_SYS | 5.0V ±5% | 4A | Buck regulator | Jetson Nano |
| 3V3_SYS | 3.3V ±3% | 500mA | LDO from 5V | Sensors, peripherals |
| 12V_SOL | 12V ±10% | 1A (pulsed) | Boost regulator | Solenoid driver |
| 15V_OLED | 15V | 50mA | OLED module internal | OLED panel drive |

---

# 3. SCHEMATIC DESIGN

## 3.1 Carrier PCB Block Architecture

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    CARRIER PCB FUNCTIONAL BLOCKS                                    │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────────┐│
│  │                        JETSON NANO SO-DIMM CONNECTOR                            ││
│  │                            (260-pin, DDR4 style)                                ││
│  │  ┌─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┬─────┐     ││
│  │  │ PWR │ GND │ CSI │ I2C │ SPI │ UART│ GPIO│ USB │ DP  │ SDIO│ PWM │ AUX │     ││
│  │  └──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┴──┬──┘     ││
│  │     │     │     │     │     │     │     │     │     │     │     │              ││
│  └─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼──────────────┘│
│        │     │     │     │     │     │     │     │     │     │     │               │
│        ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼     ▼               │
│                                                                                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │
│  │   POWER     │ │   CAMERA    │ │   SENSOR    │ │   DISPLAY   │ │  ACTUATOR   │   │
│  │   SECTION   │ │  INTERFACE  │ │  INTERFACE  │ │  INTERFACE  │ │  INTERFACE  │   │
│  │             │ │             │ │             │ │             │ │             │   │
│  │ • Buck 5V   │ │ • CSI-2 FPC │ │ • I²C bus   │ │ • SPI OLED  │ │ • MOSFET    │   │
│  │ • LDO 3.3V  │ │ • ESD prot  │ │ • IMU conn  │ │ • LED driver│ │ • 12V boost │   │
│  │ • Boost 12V │ │ • MCLK gen  │ │ • Trigger   │ │ • Buttons   │ │ • Flyback   │   │
│  │ • USB-C PD  │ │             │ │   ADC       │ │             │ │   diode     │   │
│  │ • Battery   │ │             │ │             │ │             │ │             │   │
│  │   monitor   │ │             │ │             │ │             │ │             │   │
│  └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘   │
│                                                                                      │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────────────────────────────────────────┐│
│  │    DEBUG    │ │   STORAGE   │ │                CONNECTORS                       ││
│  │  INTERFACE  │ │  INTERFACE  │ │                                                 ││
│  │             │ │             │ │  J1: Power input (JST)                          ││
│  │ • UART      │ │ • microSD   │ │  J2: Camera FPC (22-pin)                        ││
│  │   console   │ │   socket    │ │  J3: IMU connector (4-pin)                      ││
│  │ • JTAG      │ │             │ │  J4: Trigger sensor (3-pin)                     ││
│  │   (optional)│ │             │ │  J5: OLED FPC (7-pin)                           ││
│  │             │ │             │ │  J6: Solenoid (2-pin)                           ││
│  │             │ │             │ │  J7: USB-C (charging + debug)                   ││
│  │             │ │             │ │  J8: Status LEDs (6-pin)                        ││
│  │             │ │             │ │  J9: Buttons (4-pin)                            ││
│  └─────────────┘ └─────────────┘ └─────────────────────────────────────────────────┘│
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Detailed Schematic Sections

### 3.2.1 Power Management Section

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SHEET 1: POWER MANAGEMENT                                                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  BATTERY INPUT & PROTECTION                                                         │
│  ══════════════════════════                                                         │
│                                                                                      │
│                   D1                                                                │
│  J1 ─────┬──────│◀├──────┬───────────────────── VBAT (7.4V)                        │
│  (VBAT)  │      SS34     │                                                          │
│          │  (reverse     │                                                          │
│          │   protection) │                                                          │
│          │               │                                                          │
│         ─┴─             ─┴─                                                        │
│         GND             GND                                                         │
│                          │                                                          │
│                          │    F1 (2A polyfuse)                                      │
│                          ├──────────────────────┬─────────────────── VBAT_PROT     │
│                          │                      │                                   │
│                          │    ┌─────────────────┴─────────────────┐                │
│                          │    │         U1: BQ25895              │                │
│                          │    │    (Battery Charger + PMIC)      │                │
│                          │    │                                   │                │
│                          │    │  VBUS ────────────────── USB-C 5V │                │
│                          │    │  BAT ─────────────────── VBAT     │                │
│                          │    │  SYS ─────────────────── VSYS     │                │
│                          │    │  PMID ────────────────── VPMID    │                │
│                          └────┤  I2C ─────────────────── I2C_PM   │                │
│                               │  INT ─────────────────── GPIO_INT │                │
│                               │                                   │                │
│                               └───────────────────────────────────┘                │
│                                                                                      │
│  5V BUCK REGULATOR (Jetson Nano power)                                             │
│  ═════════════════════════════════════                                              │
│                                                                                      │
│                  VSYS (7.4V)                                                        │
│                      │                                                              │
│                      ▼                                                              │
│              ┌───────────────┐                                                      │
│              │  U2: TPS62180 │                                                      │
│              │  (5V/4A Buck) │                                                      │
│              │               │                                                      │
│  VIN ────────┤ VIN     VOUT ├────────────────────────────────── 5V_SYS            │
│              │               │    │                                                 │
│  EN ─────────┤ EN       FB  ├────┼──┐                                              │
│              │               │    │  │                                              │
│  PGOOD ──────┤ PGOOD   GND  ├────┼──┼──── GND                                      │
│              └───────────────┘    │  │                                              │
│                                   │  │   R_FB network                               │
│                               L1  │  └──[100k]──┐                                   │
│                             4.7µH │             │                                   │
│                              ═══  │            ─┴─                                 │
│                               │   │            GND                                  │
│                              ─┴─  │                                                 │
│                           C_OUT   │                                                 │
│                           100µF   │                                                 │
│                                   │                                                 │
│  SPECIFICATIONS:                  │                                                 │
│  - Input: 6.0-8.4V (2S Li-ion)   │                                                 │
│  - Output: 5.0V ±2%              │                                                 │
│  - Max current: 4A continuous    │                                                 │
│  - Efficiency: >95%              │                                                 │
│  - Switching freq: 2.2MHz        │                                                 │
│                                                                                      │
│  3.3V LDO REGULATOR (Peripherals)                                                  │
│  ════════════════════════════════                                                   │
│                                                                                      │
│              5V_SYS                                                                 │
│                │                                                                    │
│                ▼                                                                    │
│        ┌───────────────┐                                                           │
│        │  U3: AP2112K  │                                                           │
│        │  (3.3V/600mA) │                                                           │
│        │               │                                                           │
│  VIN ──┤ VIN     VOUT ├──────────────────────────────────────── 3V3_SYS           │
│        │               │                                                           │
│  EN ───┤ EN       GND ├──── GND                                                   │
│        └───────────────┘                                                           │
│                                                                                      │
│  12V BOOST REGULATOR (Solenoid drive)                                              │
│  ════════════════════════════════════                                               │
│                                                                                      │
│              5V_SYS                                                                 │
│                │                                                                    │
│                ▼                                                                    │
│        ┌───────────────┐                                                           │
│        │  U4: TPS61088 │                                                           │
│        │ (12V/1.5A Bst)│                                                           │
│        │               │                                                           │
│  VIN ──┤ VIN     VOUT ├──────────────────────────────────────── 12V_SOL           │
│        │               │                                                           │
│  EN ───┤ EN       FB  ├──── FB network                                            │
│        │               │                                                           │
│        │         GND  ├──── GND                                                   │
│        └───────────────┘                                                           │
│                                                                                      │
│  NOTE: 12V boost only enabled during solenoid actuation                            │
│        to minimize power consumption                                               │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.2 Camera Interface Section

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SHEET 2: CAMERA INTERFACE (MIPI CSI-2)                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  MIPI CSI-2 INTERFACE (2-lane)                                                     │
│  ═════════════════════════════                                                      │
│                                                                                      │
│  JETSON NANO                                        J2: CAMERA FPC                  │
│  SO-DIMM                                            (22-pin, 0.5mm)                 │
│  ┌───────────┐                                      ┌───────────────┐               │
│  │           │                                      │               │               │
│  │  CSI0_D0+ ├─────────[100Ω diff]─────────────────┤ 1  CSI_D0+    │               │
│  │  CSI0_D0- ├─────────[100Ω diff]─────────────────┤ 2  CSI_D0-    │               │
│  │           │         ▲                           │               │               │
│  │  CSI0_D1+ ├─────────┼───[100Ω diff]─────────────┤ 3  CSI_D1+    │               │
│  │  CSI0_D1- ├─────────┼───[100Ω diff]─────────────┤ 4  CSI_D1-    │               │
│  │           │         │                           │               │               │
│  │ CSI0_CLK+ ├─────────┼───[100Ω diff]─────────────┤ 5  CSI_CLK+   │               │
│  │ CSI0_CLK- ├─────────┼───[100Ω diff]─────────────┤ 6  CSI_CLK-   │               │
│  │           │         │                           │               │               │
│  │  CAM_I2C  │         │ AC coupling               │               │               │
│  │  _SDA     ├─────────┼───────────────────────────┤ 7  I2C_SDA    │               │
│  │  CAM_I2C  │         │ (no coupling needed       │               │               │
│  │  _SCL     ├─────────┼───  for I2C)              ┤ 8  I2C_SCL    │               │
│  │           │         │                           │               │               │
│  │  CAM_MCLK ├─────────┼───────────────────────────┤ 9  MCLK       │               │
│  │           │         │                           │               │               │
│  │  GPIO_CAM │         │                           │               │               │
│  │  _RST     ├─────────┼───────────────────────────┤ 10 CAM_RST    │               │
│  │           │         │                           │               │               │
│  │  GPIO_CAM │         │                           │               │               │
│  │  _PWDN    ├─────────┼───────────────────────────┤ 11 CAM_PWDN   │               │
│  │           │         │                           │               │               │
│  └───────────┘         │                           │ 12 VDD_CAM    ├───── 3V3_SYS │
│                        │                           │ 13 GND        ├───── GND     │
│                        │                           │ ...           │               │
│                        │                           └───────────────┘               │
│                        │                                                            │
│  MIPI CSI-2 ROUTING REQUIREMENTS:                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • Differential impedance: 100Ω ±10%                                        │   │
│  │  • Length matching: ±0.5mm within pair                                      │   │
│  │  • Lane-to-lane skew: <1mm                                                  │   │
│  │  • AC coupling: 100nF on each lane (optional, check camera spec)            │   │
│  │  • ESD protection: TVS diodes (PESD5V0S1BB) on each lane                    │   │
│  │  • Route on inner layers with ground planes above/below                     │   │
│  │  • Keep away from clock lines and switching regulators                      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  ESD PROTECTION:                                                                    │
│                                                                                      │
│      CSI_D0+ ──┬──│◁├──┬── GND                                                     │
│                │  D2   │                                                            │
│      CSI_D0- ──┴──│◁├──┴── GND                                                     │
│                   D3                                                                │
│                   (PESD5V0S1BB - TVS diode array)                                  │
│                                                                                      │
│  CAMERA MODULE SUPPORTED: Sony IMX290 (1080p60)                                    │
│  - Interface: MIPI CSI-2, 2-lane                                                   │
│  - Data rate: 1.5 Gbps/lane max                                                    │
│  - I2C address: 0x1A                                                               │
│  - MCLK: 37.125 MHz (from Jetson)                                                  │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.3 Sensor Interface Section

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SHEET 3: SENSOR INTERFACES                                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  IMU INTERFACE (BMI160 - 6-axis)                                                   │
│  ═══════════════════════════════                                                    │
│                                                                                      │
│  JETSON NANO                             J3: IMU CONNECTOR                          │
│  ┌───────────┐                           (4-pin JST-SH)                             │
│  │           │                           ┌───────────────┐                          │
│  │  I2C1_SDA ├───────[4.7kΩ]───┬────────┤ 1  SDA        │                          │
│  │           │                 │ 3V3    │               │                          │
│  │  I2C1_SCL ├───────[4.7kΩ]───┼────────┤ 2  SCL        │                          │
│  │           │                 │        │               │                          │
│  │  GPIO_IMU │                 │        │ 3  VDD        ├───── 3V3_SYS             │
│  │  _INT     ├──────────────────────────┤ 4  GND        ├───── GND                 │
│  │           │                          └───────────────┘                          │
│  └───────────┘                                                                      │
│                                                                                      │
│  BMI160 SPECIFICATIONS:                                                            │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • I2C address: 0x68 (SDO to GND) or 0x69 (SDO to VDD)                      │   │
│  │  • I2C speed: 400 kHz (fast mode)                                           │   │
│  │  • Accelerometer: ±2g to ±16g, 14-bit                                       │   │
│  │  • Gyroscope: ±125°/s to ±2000°/s, 16-bit                                   │   │
│  │  • ODR: up to 1600 Hz (accel), 3200 Hz (gyro)                               │   │
│  │  • Current: 925µA (normal mode)                                             │   │
│  │  • Interrupt: Data ready, motion detect                                     │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                      │
│  TRIGGER SENSOR INTERFACE (FSR402)                                                 │
│  ═════════════════════════════════                                                  │
│                                                                                      │
│  JETSON NANO                             J4: TRIGGER CONNECTOR                      │
│  ┌───────────┐                           (3-pin JST-SH)                             │
│  │           │                           ┌───────────────┐                          │
│  │  ADC_IN0  ├───────────────────────────┤ 1  SIG        │                          │
│  │ (GPIO/ADC)│                           │               │                          │
│  │           │                           │ 2  VDD        ├───── 3V3_SYS             │
│  │           │                           │ 3  GND        ├───── GND                 │
│  └───────────┘                           └───────────────┘                          │
│                                                   │                                 │
│  VOLTAGE DIVIDER CIRCUIT:                         │                                 │
│                                                   │                                 │
│       3V3_SYS ────[10kΩ]────┬────[R_FSR]────── GND                                 │
│                             │                                                       │
│                             └──────────────────── ADC_IN0                          │
│                                                                                      │
│  FSR402 SPECIFICATIONS:                                                            │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • Resistance range: 1MΩ (no force) to <1kΩ (max force)                     │   │
│  │  • Force range: 0.1N to 10N                                                 │   │
│  │  • Response time: <3ms                                                      │   │
│  │  • Operating voltage: DC 3.3V (via voltage divider)                         │   │
│  │  • Output: 0V (no force) to ~3V (max force)                                 │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                      │
│  USER BUTTONS (×2)                                                                 │
│  ═════════════════                                                                  │
│                                                                                      │
│  JETSON NANO                             J9: BUTTON CONNECTOR                       │
│  ┌───────────┐                           (4-pin JST-SH)                             │
│  │           │                           ┌───────────────┐                          │
│  │  GPIO_BTN1├───────[10kΩ]───┬──────────┤ 1  BTN1       │                          │
│  │           │         ↑      │          │               │                          │
│  │           │       3V3     ─┴─ 100nF   │               │                          │
│  │           │      (pull-up) GND        │               │                          │
│  │           │                           │               │                          │
│  │  GPIO_BTN2├───────[10kΩ]───┬──────────┤ 2  BTN2       │                          │
│  │           │         ↑      │          │               │                          │
│  │           │       3V3     ─┴─ 100nF   │ 3  GND        ├───── GND                 │
│  │           │      (pull-up) GND        │ 4  NC         │                          │
│  └───────────┘                           └───────────────┘                          │
│                                                                                      │
│  Button functions:                                                                  │
│  • BTN1: Mode select (single press), Power on/off (long press)                     │
│  • BTN2: Zero reticle / calibration                                                │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.4 Display & LED Interface Section

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SHEET 4: DISPLAY & LED INTERFACES                                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  OLED RETICLE DISPLAY INTERFACE (SPI)                                              │
│  ════════════════════════════════════                                               │
│                                                                                      │
│  JETSON NANO                             J5: OLED FPC CONNECTOR                     │
│  ┌───────────┐                           (7-pin, 0.5mm FPC)                         │
│  │           │                           ┌───────────────┐                          │
│  │  SPI0_SCK ├───────────────────────────┤ 1  CLK        │                          │
│  │           │                           │               │                          │
│  │ SPI0_MOSI ├───────────────────────────┤ 2  DIN        │                          │
│  │           │                           │               │                          │
│  │ SPI0_CS0  ├───────────────────────────┤ 3  CS         │                          │
│  │           │                           │               │                          │
│  │ GPIO_OLED │                           │               │                          │
│  │ _DC       ├───────────────────────────┤ 4  DC         │                          │
│  │           │                           │               │                          │
│  │ GPIO_OLED │                           │               │                          │
│  │ _RST      ├───────────────────────────┤ 5  RST        │                          │
│  │           │                           │               │                          │
│  └───────────┘                           │ 6  VCC        ├───── 3V3_SYS             │
│                                          │ 7  GND        ├───── GND                 │
│                                          └───────────────┘                          │
│                                                                                      │
│  OLED SPI TIMING:                                                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • SPI Mode: Mode 0 (CPOL=0, CPHA=0)                                        │   │
│  │  • Clock frequency: 10 MHz max                                              │   │
│  │  • Data format: MSB first                                                   │   │
│  │  • CS active low                                                            │   │
│  │  • DC pin: Low = command, High = data                                       │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                      │
│  STATUS LED DRIVER                                                                 │
│  ═════════════════                                                                  │
│                                                                                      │
│  JETSON NANO                             J8: LED CONNECTOR                          │
│  ┌───────────┐                           (6-pin JST-SH)                             │
│  │           │      LED DRIVER                                                      │
│  │  GPIO_LED1├──────[330Ω]─────┬─────────┤ 1  LED1_R     │ (Track lock status)     │
│  │           │                 │         │               │                          │
│  │  GPIO_LED2├──────[330Ω]─────┼─────────┤ 2  LED1_G     │                          │
│  │           │                 │         │               │                          │
│  │  GPIO_LED3├──────[330Ω]─────┼─────────┤ 3  LED1_B     │                          │
│  │           │                 │         │               │                          │
│  │  GPIO_LED4├──────[330Ω]─────┼─────────┤ 4  LED2_G     │ (System status)         │
│  │           │                 │         │               │                          │
│  │  GPIO_LED5├──────[330Ω]─────┼─────────┤ 5  LED3_R     │ (Battery status)        │
│  │           │                 │         │               │                          │
│  └───────────┘                 │         │ 6  GND        ├───── GND                 │
│                                │         └───────────────┘                          │
│                               ─┴─                                                   │
│                               GND                                                   │
│                               (common cathode LEDs)                                 │
│                                                                                      │
│  LED FUNCTIONS:                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  LED1 (RGB): Track lock indicator                                           │   │
│  │    - Red: No target                                                         │   │
│  │    - Yellow: Target detected, tracking                                      │   │
│  │    - Green: Locked, ready to fire                                           │   │
│  │                                                                             │   │
│  │  LED2 (Green): System status                                                │   │
│  │    - Off: System off                                                        │   │
│  │    - Blinking: Booting / initializing                                       │   │
│  │    - Solid: Ready                                                           │   │
│  │                                                                             │   │
│  │  LED3 (Red): Battery warning                                                │   │
│  │    - Off: Battery OK (>20%)                                                 │   │
│  │    - Blinking: Low battery (10-20%)                                         │   │
│  │    - Solid: Critical (<10%)                                                 │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.5 Solenoid Driver Section

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SHEET 5: SOLENOID DRIVER                                                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  TRIGGER SOLENOID DRIVER CIRCUIT                                                   │
│  ═══════════════════════════════                                                    │
│                                                                                      │
│  JETSON NANO                                                                        │
│  ┌───────────┐                                                                      │
│  │           │      ┌──────────────────────────────────────┐                       │
│  │ GPIO_SOL  │      │         U5: DRV8871                  │                       │
│  │ _CTRL     ├──────┤ IN1                                  │                       │
│  │           │      │                                      │                       │
│  │ GPIO_SOL  │      │         H-BRIDGE DRIVER              │                       │
│  │ _EN       ├──────┤ IN2                                  │                       │
│  │           │      │                                      │                       │
│  └───────────┘      │                                      │                       │
│                     │      OUT1 ├───────────────────┬──── J6 Pin 1                 │
│  12V_SOL ───────────┤ VM                            │    (SOLENOID+)               │
│                     │                               │                               │
│  GND ───────────────┤ GND  OUT2 ├───────────────────┼──── J6 Pin 2                 │
│                     │                               │    (SOLENOID-)               │
│                     │                               │                               │
│                     │      ISEN ├──[0.1Ω]──── GND   │                               │
│                     │                               │                               │
│                     └──────────────────────────────────────┘                       │
│                                                     │                               │
│                                                     │   D5 (flyback)               │
│                                        ┌────────────┼───│◀├────┐                   │
│                                        │            │          │                   │
│                                        │         ┌──┴──┐       │                   │
│                                        │         │ SOL │       │                   │
│                                        │         │12V  │       │                   │
│                                        │         │     │       │                   │
│                                        │         └──┬──┘       │                   │
│                                        │            │          │                   │
│                                        └────────────┴──────────┘                   │
│                                                                                      │
│  DRV8871 SPECIFICATIONS:                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • Operating voltage: 6.5V to 45V                                           │   │
│  │  • Peak output current: 3.6A                                                │   │
│  │  • RDS(on): 565mΩ (high + low side)                                         │   │
│  │  • Built-in protection: overcurrent, thermal shutdown                       │   │
│  │  • PWM frequency: up to 200kHz                                              │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  SOLENOID CONTROL MODES:                                                           │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  IN1  IN2  │ Function                                                       │   │
│  │ ─────┼───── │ ───────────────────────────────────────────                    │   │
│  │  0    0    │ Coast (H-Z)                                                    │   │
│  │  0    1    │ Reverse (not used)                                             │   │
│  │  1    0    │ Forward → ACTUATE SOLENOID                                     │   │
│  │  1    1    │ Brake (low-side on)                                            │   │
│  │                                                                             │   │
│  │  Actuation sequence:                                                        │   │
│  │  1. Assert IN1=1, IN2=0 (energize solenoid)                                 │   │
│  │  2. Wait 50-100ms (solenoid stroke time)                                    │   │
│  │  3. Release IN1=0, IN2=0 (coast)                                            │   │
│  │  4. Spring return resets trigger block                                      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  SOLENOID SPECIFICATIONS:                                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • Type: Push-pull solenoid                                                 │   │
│  │  • Voltage: 12V DC                                                          │   │
│  │  • Current: 800mA @ 12V (10Ω coil)                                          │   │
│  │  • Stroke: 10mm                                                             │   │
│  │  • Force: >5N                                                               │   │
│  │  • Response time: <15ms                                                     │   │
│  │  • Duty cycle: <10% (pulsed operation)                                      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  SAFETY CONSIDERATIONS:                                                            │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • Software watchdog required to prevent stuck-on condition                 │   │
│  │  • Hardware timeout using RC + comparator (backup safety)                   │   │
│  │  • Max pulse duration: 200ms (hardware limited)                             │   │
│  │  • Current sense monitors for overcurrent detection                         │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.6 USB-C & Debug Interface Section

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SHEET 6: USB-C & DEBUG INTERFACE                                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  USB TYPE-C CONNECTOR (Charging + Data)                                            │
│  ══════════════════════════════════════                                             │
│                                                                                      │
│                              J7: USB-C RECEPTACLE                                   │
│                              ┌─────────────────────┐                                │
│                              │         ═══         │                                │
│                              │      USB TYPE-C     │                                │
│  To BQ25895 ◀────────────────┤ VBUS (5V, 3A max)   │                                │
│  (Charger IC)                │                     │                                │
│                              │ CC1, CC2            │───── CC detection              │
│  To Jetson ◀─────────────────┤ D+, D-              │      (5.1kΩ to GND)            │
│  USB 2.0                     │ (USB 2.0 data)      │                                │
│                              │                     │                                │
│  GND ◀───────────────────────┤ GND                 │                                │
│                              │                     │                                │
│                              │ SHIELD              │───── Chassis GND               │
│                              └─────────────────────┘                                │
│                                                                                      │
│  USB-C CONFIGURATION:                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • USB 2.0 data lines connected to Jetson Nano USB port                     │   │
│  │  • VBUS connected to BQ25895 charger IC input                               │   │
│  │  • CC1, CC2 with 5.1kΩ pull-down (UFP/sink configuration)                   │   │
│  │  • Supports 5V/3A charging (15W)                                            │   │
│  │  • No USB-PD negotiation (fixed 5V)                                         │   │
│  │  • ESD protection on all lines (TPD4E02B04)                                 │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                      │
│  DEBUG UART INTERFACE                                                              │
│  ════════════════════                                                               │
│                                                                                      │
│  JETSON NANO                                                                        │
│  ┌───────────┐       Level Shifter          DEBUG HEADER                           │
│  │           │       (1.8V ↔ 3.3V)          (unpopulated)                          │
│  │  UART0_TX ├──────────────────────────────┤ TXD                                  │
│  │  (1.8V)   │                              │                                      │
│  │           │                              │                                      │
│  │  UART0_RX ├──────────────────────────────┤ RXD                                  │
│  │  (1.8V)   │                              │                                      │
│  │           │                              │ GND ├───── GND                       │
│  └───────────┘                              │                                      │
│                                             (3.3V logic level)                     │
│                                                                                      │
│  NOTE: Debug UART exposed via USB-C using FTDI chip in Jetson devkit mode,        │
│        or via separate debug header for production.                                │
│                                                                                      │
│  UART SPECIFICATIONS:                                                              │
│  • Baud rate: 115200                                                               │
│  • Data bits: 8                                                                    │
│  • Parity: None                                                                    │
│  • Stop bits: 1                                                                    │
│  • Flow control: None                                                              │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 4. PCB LAYOUT SPECIFICATION

## 4.1 PCB Stack-up

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    4-LAYER PCB STACK-UP                                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  LAYER    THICKNESS    MATERIAL           FUNCTION                                  │
│  ═════    ═════════    ════════           ════════                                  │
│                                                                                      │
│  ┌────────────────────────────────────────────────────────────────────────────┐    │
│  │ TOP (L1)    35µm Cu    Signal + Components                                 │    │
│  ├────────────────────────────────────────────────────────────────────────────┤    │
│  │ Prepreg     0.2mm      FR-4 (Tg 170°C)                                     │    │
│  ├────────────────────────────────────────────────────────────────────────────┤    │
│  │ L2          35µm Cu    GROUND PLANE (solid)                                │    │
│  ├────────────────────────────────────────────────────────────────────────────┤    │
│  │ Core        0.8mm      FR-4                                                │    │
│  ├────────────────────────────────────────────────────────────────────────────┤    │
│  │ L3          35µm Cu    POWER PLANE (split)                                 │    │
│  ├────────────────────────────────────────────────────────────────────────────┤    │
│  │ Prepreg     0.2mm      FR-4                                                │    │
│  ├────────────────────────────────────────────────────────────────────────────┤    │
│  │ BOT (L4)    35µm Cu    Signal + Components                                 │    │
│  └────────────────────────────────────────────────────────────────────────────┘    │
│                                                                                      │
│  TOTAL THICKNESS: ~1.6mm (standard)                                                │
│                                                                                      │
│  IMPEDANCE CONTROL:                                                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Single-ended (L1/L4 over L2):     50Ω ±10%   (trace width ~0.2mm)         │   │
│  │  Differential (MIPI CSI-2):       100Ω ±10%   (pair width/gap = 0.1/0.15mm)│   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 PCB Dimensions & Mounting

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    PCB OUTLINE & MOUNTING                                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  TOP VIEW:                                                                          │
│                                                                                      │
│      ◁─────────────────── 80mm ───────────────────▷                                │
│                                                                                      │
│      ┌───────────────────────────────────────────────┐  ↑                          │
│      │ ○                                           ○ │  │                          │
│      │   ┌─────────────────────────────────────┐     │  │                          │
│      │   │                                     │     │  │                          │
│      │   │      JETSON NANO SO-DIMM            │     │  │                          │
│      │   │         (footprint)                 │     │  │                          │
│      │   │                                     │     │  │                          │
│      │   └─────────────────────────────────────┘     │  │                          │
│      │                                               │  │ 55mm                     │
│      │   ┌─────┐  ┌─────┐  ┌─────┐  ┌─────┐         │  │                          │
│      │   │PMIC │  │BUCK │  │ LDO │  │BOOST│         │  │                          │
│      │   └─────┘  └─────┘  └─────┘  └─────┘         │  │                          │
│      │                                               │  │                          │
│      │ ○                                           ○ │  │                          │
│      └───────────────────────────────────────────────┘  ↓                          │
│                                                                                      │
│      Mounting holes: 4× M3, Ø3.2mm, corner placement                               │
│      Hole centers: 5mm from edges                                                  │
│                                                                                      │
│  CONNECTOR PLACEMENT:                                                               │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  EDGE     CONNECTOR        TYPE              FUNCTION                       │   │
│  │ ─────────────────────────────────────────────────────────────────────────── │   │
│  │  LEFT     J1 (Battery)     JST-XH 2-pin      Power input                    │   │
│  │  LEFT     J7 (USB-C)       USB-C receptacle  Charging + debug               │   │
│  │  TOP      J2 (Camera)      22-pin FPC 0.5mm  MIPI CSI-2                      │   │
│  │  RIGHT    J5 (OLED)        7-pin FPC 0.5mm   SPI display                     │   │
│  │  RIGHT    J6 (Solenoid)    JST-XH 2-pin      Actuator output                 │   │
│  │  BOTTOM   J3 (IMU)         JST-SH 4-pin      I2C sensor                      │   │
│  │  BOTTOM   J4 (Trigger)     JST-SH 3-pin      Analog input                    │   │
│  │  BOTTOM   J8 (LEDs)        JST-SH 6-pin      Status LEDs                     │   │
│  │  BOTTOM   J9 (Buttons)     JST-SH 4-pin      User buttons                    │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.3 Layout Guidelines

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    PCB LAYOUT GUIDELINES                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  CRITICAL ROUTING AREAS:                                                            │
│                                                                                      │
│  1. MIPI CSI-2 (Camera)                                                            │
│     ┌─────────────────────────────────────────────────────────────────────────┐    │
│     │  • Route on L1 (top) or L4 (bottom) with solid ground reference (L2)    │    │
│     │  • Differential impedance: 100Ω ±10%                                    │    │
│     │  • Pair spacing: constant throughout length                             │    │
│     │  • Length match within pair: ±0.25mm                                    │    │
│     │  • Lane-to-lane skew: <1mm                                              │    │
│     │  • Keep >3× trace width from other signals                              │    │
│     │  • Avoid crossing power planes or signal traces                         │    │
│     │  • Route away from switching regulators (>10mm)                         │    │
│     └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                      │
│  2. Power Section                                                                   │
│     ┌─────────────────────────────────────────────────────────────────────────┐    │
│     │  • Place buck regulator close to Jetson Nano power pins                 │    │
│     │  • Short, wide traces for high-current paths (≥1mm for 4A)              │    │
│     │  • Input and output capacitors close to regulator IC                    │    │
│     │  • Inductor placement for minimum EMI (keep loop area small)            │    │
│     │  • Thermal vias under power ICs for heat dissipation                    │    │
│     │  • Isolate analog ground from digital ground (single point connection) │    │
│     └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                      │
│  3. SPI (OLED Display)                                                             │
│     ┌─────────────────────────────────────────────────────────────────────────┐    │
│     │  • Maximum trace length: 100mm                                          │    │
│     │  • 10MHz operation - standard routing acceptable                        │    │
│     │  • Series termination resistor (33Ω) on CLK if >50mm                    │    │
│     │  • Keep CLK, MOSI, MISO traces similar length (±10mm)                   │    │
│     └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                      │
│  4. I²C (IMU, PMIC)                                                                │
│     ┌─────────────────────────────────────────────────────────────────────────┐    │
│     │  • Pull-up resistors close to master (Jetson Nano)                      │    │
│     │  • Maximum bus length: 500mm at 400kHz                                  │    │
│     │  • Route SDA and SCL together (not differential)                        │    │
│     └─────────────────────────────────────────────────────────────────────────┘    │
│                                                                                      │
│  GROUND PLANE GUIDELINES:                                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • L2 is SOLID ground plane - no splits                                    │   │
│  │  • Ground vias near every IC ground pin                                    │   │
│  │  • Via stitching around board perimeter (5mm spacing)                      │   │
│  │  • Thermal relief on large ground pads for soldering                       │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  EMC CONSIDERATIONS:                                                               │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  • Filter capacitors (100nF) on all power pins                             │   │
│  │  • Ferrite beads on power input                                            │   │
│  │  • TVS diodes on all external connectors                                   │   │
│  │  • Shield can over buck regulator (optional for MIL-STD-461G)             │   │
│  │  • Ground guard ring around sensitive analog circuits                      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 5. BILL OF MATERIALS

## 5.1 Component Summary

| Category | Component | Qty | Unit Cost | Extended | Supplier |
|----------|-----------|-----|-----------|----------|----------|
| **ICs** | | | | | |
| | BQ25895 (charger + PMIC) | 1 | $3.50 | $3.50 | TI/Distrib |
| | TPS62180 (5V buck) | 1 | $2.80 | $2.80 | TI/Distrib |
| | AP2112K (3.3V LDO) | 1 | $0.30 | $0.30 | Diodes Inc |
| | TPS61088 (12V boost) | 1 | $2.50 | $2.50 | TI/Distrib |
| | DRV8871 (H-bridge) | 1 | $1.80 | $1.80 | TI/Distrib |
| **Connectors** | | | | | |
| | SO-DIMM 260-pin | 1 | $3.00 | $3.00 | Amphenol |
| | USB-C receptacle | 1 | $0.80 | $0.80 | Generic |
| | FPC 22-pin 0.5mm | 1 | $0.50 | $0.50 | Molex |
| | FPC 7-pin 0.5mm | 1 | $0.30 | $0.30 | Molex |
| | JST-XH 2-pin (×2) | 2 | $0.10 | $0.20 | JST |
| | JST-SH 4-pin (×2) | 2 | $0.15 | $0.30 | JST |
| | JST-SH 3-pin | 1 | $0.12 | $0.12 | JST |
| | JST-SH 6-pin | 1 | $0.18 | $0.18 | JST |
| **Passives** | | | | | |
| | Inductor 4.7µH 5A | 1 | $1.20 | $1.20 | Wurth |
| | Capacitors (kit) | Set | $5.00 | $5.00 | Various |
| | Resistors (kit) | Set | $2.00 | $2.00 | Various |
| | TVS diode arrays | 3 | $0.50 | $1.50 | Nexperia |
| | Schottky diode SS34 | 1 | $0.20 | $0.20 | Various |
| **PCB** | | | | | |
| | 4-layer PCB (80×55mm) | 3 | $15.00 | $45.00 | **Local** PCB |
| **Assembly** | | | | | |
| | SMT assembly | 3 | $10.00 | $30.00 | **Local** |
| | | | | | |
| | **SUBTOTAL (per unit)** | | | **$33.90** | |
| | **× 3 units** | | | **$101.70** | |
| | **Spares (30%)** | | | **$30.50** | |
| | **TOTAL WP3 (PCB only)** | | | **$132.20** | |

## 5.2 Complete Electronics BOM

Including all electronics (carrier PCB + COTS components):

| Item | Description | Qty/Unit | Unit Cost | Per Unit | Source |
|------|-------------|----------|-----------|----------|--------|
| Carrier PCB | VS-003-001 (assembled) | 1 | $33.90 | $33.90 | Local |
| Jetson Nano | 4GB Module | 1 | $150.00 | $150.00 | Import |
| Camera module | IMX290, 1080p60 | 1 | $30.00 | $30.00 | Import |
| IMU module | BMI160 breakout | 1 | $5.00 | $5.00 | Import |
| Trigger sensor | FSR402 | 1 | $3.00 | $3.00 | Import |
| OLED display | 0.96" red | 1 | $25.00 | $25.00 | Import |
| Solenoid | 12V push-pull | 1 | $5.00 | $5.00 | Import |
| Battery pack | 2S 18650, 6800mAh | 1 | $16.00 | $16.00 | Import |
| Status LEDs | RGB × 3 | 3 | $0.30 | $0.90 | Import |
| Buttons | Tactile × 2 | 2 | $0.50 | $1.00 | Import |
| SD card | 32GB industrial | 1 | $15.00 | $15.00 | Import |
| Wiring harness | Complete set | 1 | $15.00 | $15.00 | **Local** |
| | **TOTAL PER UNIT** | | | **$299.80** | |
| | **× 3 units** | | | **$899.40** | |
| | **Spares (20%)** | | | **$179.90** | |
| | **TOTAL WP3 ELECTRONICS** | | | **$1,079.30** | |

## 5.3 Local Content Analysis

| Category | Local | Import | Local % |
|----------|-------|--------|---------|
| Carrier PCB (fab + assembly) | $75.00 | $26.70 | 74% |
| Wiring harness | $45.00 | $0 | 100% |
| COTS components | $0 | $778.60 | 0% |
| **TOTAL WP3** | **$120.00** | **$805.30** | **13%** |

**Note:** Electronics has lowest local content due to specialized ICs. This is balanced by high local content in mechanical (WP1) and assembly (WP5).

---

# 6. WIRING HARNESS DESIGN

## 6.1 Harness Schematic

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    WIRING HARNESS SCHEMATIC                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  CARRIER PCB                              EXTERNAL COMPONENTS                        │
│  (MAIN BOARD)                                                                        │
│                                                                                      │
│  ┌─────────────┐                                                                    │
│  │             │                                                                    │
│  │  J1 ───────────────────────[30mm]──────────────────── Battery Pack             │
│  │  (VBAT)     │              AWG 20, Red/Black          2S 18650                   │
│  │             │                                                                    │
│  │  J2 ───────────────────────[50mm]──────────────────── Camera Module             │
│  │ (Camera)    │              22-pin FPC                 IMX290                     │
│  │             │                                                                    │
│  │  J3 ───────────────────────[80mm]──────────────────── IMU Board                 │
│  │  (IMU)      │              4-wire, AWG 28             BMI160                     │
│  │             │                                                                    │
│  │  J4 ───────────────────────[100mm]─────────────────── Trigger Sensor            │
│  │ (Trigger)   │              3-wire, AWG 28             FSR402                     │
│  │             │                                                                    │
│  │  J5 ───────────────────────[40mm]──────────────────── OLED Module               │
│  │  (OLED)     │              7-pin FPC                  Reticle display           │
│  │             │                                                                    │
│  │  J6 ───────────────────────[120mm]─────────────────── Solenoid                  │
│  │(Solenoid)   │              2-wire, AWG 22             Trigger actuator          │
│  │             │                                                                    │
│  │  J7 ───────────────────────[Panel Mount]────────────── USB-C Port               │
│  │ (USB-C)     │              Extension cable            External access           │
│  │             │                                                                    │
│  │  J8 ───────────────────────[60mm]──────────────────── LED Board                 │
│  │  (LEDs)     │              6-wire, AWG 28             Status LEDs               │
│  │             │                                                                    │
│  │  J9 ───────────────────────[40mm]──────────────────── Button Board              │
│  │(Buttons)    │              4-wire, AWG 28             User buttons              │
│  │             │                                                                    │
│  └─────────────┘                                                                    │
│                                                                                      │
│  WIRE SPECIFICATIONS:                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Application          │ Wire Gauge │ Insulation │ Notes                     │   │
│  │ ──────────────────────┼────────────┼────────────┼───────────────────────────│   │
│  │  Battery power        │ AWG 20     │ Silicone   │ 3A continuous            │   │
│  │  Solenoid power       │ AWG 22     │ Silicone   │ 1A pulsed                │   │
│  │  Signal (I2C, GPIO)   │ AWG 28     │ PVC        │ Low current              │   │
│  │  FPC cables           │ -          │ Polyimide  │ Pre-made assemblies      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  CONNECTOR SUMMARY:                                                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Connector │ Mating Type      │ Retention │ Notes                          │   │
│  │ ───────────┼──────────────────┼───────────┼────────────────────────────────│   │
│  │  JST-XH    │ Friction lock    │ Good      │ Battery, solenoid              │   │
│  │  JST-SH    │ Friction lock    │ Fair      │ Low-current signals            │   │
│  │  FPC 0.5mm │ ZIF latch        │ Excellent │ Camera, OLED                   │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 7. ELECTRONICS TESTING

## 7.1 Test Sequence

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    ELECTRONICS TEST FLOW                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  STAGE 1: VISUAL INSPECTION                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  [ ] Solder quality (no bridges, cold joints)                               │   │
│  │  [ ] Component placement (correct orientation)                              │   │
│  │  [ ] PCB quality (no scratches, delamination)                               │   │
│  │  [ ] Connector seating                                                      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STAGE 2: POWER-ON TEST (No Jetson)                                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Test Equipment: Power supply (8V/2A), multimeter                           │   │
│  │                                                                             │   │
│  │  [ ] Apply 7.4V to J1 (battery input)                                       │   │
│  │  [ ] Measure 5V rail: ______V (spec: 5.0V ±5%)                             │   │
│  │  [ ] Measure 3.3V rail: ______V (spec: 3.3V ±3%)                           │   │
│  │  [ ] Measure 12V rail (boost enabled): ______V (spec: 12V ±10%)            │   │
│  │  [ ] Quiescent current: ______mA (spec: <100mA without Jetson)             │   │
│  │                                                                             │   │
│  │  PASS: All rails within spec    FAIL: Debug power section                   │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STAGE 3: JETSON MODULE INSTALLATION                                               │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  [ ] Power off, disconnect battery                                          │   │
│  │  [ ] Insert Jetson Nano module into SO-DIMM socket                          │   │
│  │  [ ] Verify secure seating (both latches engaged)                          │   │
│  │  [ ] Insert microSD card with JetPack image                                 │   │
│  │  [ ] Reconnect battery                                                      │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STAGE 4: BOOT TEST                                                                │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  [ ] Apply power                                                            │   │
│  │  [ ] Observe Jetson power LED (green)                                       │   │
│  │  [ ] Connect USB-C for console access                                       │   │
│  │  [ ] Verify boot messages (115200 baud)                                     │   │
│  │  [ ] Linux login prompt appears: ______                                     │   │
│  │  [ ] Boot time: ______s (spec: <60s)                                        │   │
│  │  [ ] Measure 5V current during boot: ______A (spec: <2A)                    │   │
│  │                                                                             │   │
│  │  PASS: System boots to login    FAIL: Debug Jetson/SD card                  │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STAGE 5: PERIPHERAL TEST                                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │                                                                             │   │
│  │  [ ] Camera test: v4l2-ctl --list-devices                                   │   │
│  │      Camera detected: ☐ Yes  ☐ No                                          │   │
│  │      gst-launch captures image: ☐ Yes  ☐ No                                │   │
│  │                                                                             │   │
│  │  [ ] IMU test: i2cdetect -y 1                                              │   │
│  │      Device at 0x68: ☐ Yes  ☐ No                                           │   │
│  │      Read accelerometer: ☐ Pass  ☐ Fail                                    │   │
│  │                                                                             │   │
│  │  [ ] OLED test: SPI loopback or display test pattern                       │   │
│  │      Display shows pattern: ☐ Yes  ☐ No                                    │   │
│  │                                                                             │   │
│  │  [ ] LED test: GPIO toggle                                                  │   │
│  │      All LEDs illuminate: ☐ Yes  ☐ No                                      │   │
│  │                                                                             │   │
│  │  [ ] Button test: GPIO read                                                │   │
│  │      BTN1 press detected: ☐ Yes  ☐ No                                      │   │
│  │      BTN2 press detected: ☐ Yes  ☐ No                                      │   │
│  │                                                                             │   │
│  │  [ ] Solenoid test: Pulse GPIO                                             │   │
│  │      Click heard: ☐ Yes  ☐ No                                              │   │
│  │      Current during pulse: ______mA (spec: 800mA ±20%)                     │   │
│  │                                                                             │   │
│  │  [ ] Trigger sensor test: ADC read                                         │   │
│  │      No pressure: ______V (spec: <0.5V)                                    │   │
│  │      With pressure: ______V (spec: >2.0V)                                  │   │
│  │                                                                             │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STAGE 6: SYSTEM POWER TEST                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  [ ] Idle power consumption: ______W (spec: <3W)                           │   │
│  │  [ ] AI inference power: ______W (spec: <6W in 5W mode)                    │   │
│  │  [ ] Peak power (all active): ______W (spec: <10W)                         │   │
│  │  [ ] Battery runtime test: ______hrs (spec: >8 hrs)                        │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STAGE 7: FINAL ACCEPTANCE                                                         │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  All tests PASS: ☐    Serial number assigned: ______                       │   │
│  │  Any test FAIL: ☐     Failure mode: ______________________________         │   │
│  │                                                                             │   │
│  │  Technician: ________________    Date: ________________                    │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 8. DELIVERABLES CHECKLIST

## 8.1 WP3 Deliverables

**Design Files:**
- [ ] Schematic (PDF + native format)
- [ ] PCB layout (Gerber + native format)
- [ ] Bill of Materials (Excel)
- [ ] Assembly drawing
- [ ] Pick-and-place file

**Hardware:**
- [ ] Assembled carrier PCB × 4 (3 + 1 spare)
- [ ] Wiring harness × 4
- [ ] Test adapter boards (if needed)

**Documentation:**
- [ ] Electronics design document (this document)
- [ ] Test procedure
- [ ] Test reports (per unit)

**Software Support:**
- [ ] Device tree overlay for custom carrier
- [ ] GPIO pin mapping document
- [ ] Test scripts

---

# 9. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Design Team | Initial release - WP3 deep dive |

---

*WP3: Electronics Deep Dive v1.0*
*V-SMASH-LITE Carrier PCB Design*
*Detail Design Level Documentation per Pahl & Beitz Phase 4*
