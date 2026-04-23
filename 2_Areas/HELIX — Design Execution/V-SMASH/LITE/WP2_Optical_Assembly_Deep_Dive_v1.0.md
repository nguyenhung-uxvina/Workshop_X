# WP2: OPTICAL ASSEMBLY - Deep Dive
## V-SMASH-LITE Prototype Build

**Work Package**: WP2 - Optical Assembly
**Version**: 1.0
**Date**: 2026-01-19
**Parent Document**: V-SMASH-LITE Prototype Build Plan v1.0

---

# 1. WORK PACKAGE OVERVIEW

## 1.1 Scope

WP2 covers all optical component fabrication, assembly, alignment, and testing for the V-SMASH-LITE see-through reflex display system.

**Included:**
- Reticle display module (OLED + driver)
- Collimating optics (lens assembly)
- Beam combiner (dichroic mirror)
- Protective window (BK7 glass)
- Optical housing/tube
- Alignment and collimation
- Optical testing and verification

**Excluded:**
- Camera optics (Part of WP3 Electronics)
- Housing integration (WP5)
- Software reticle generation (WP4)

## 1.2 Optical System Requirements

From V-SMASH-LITE Requirements List:

| Req ID | Parameter | Value | Tolerance | Verification |
|--------|-----------|-------|-----------|--------------|
| R-OPT-01 | Magnification | 1× (unity) | - | Inspection |
| R-OPT-02 | Field of View (direct view) | ≥15° | - | Test |
| R-OPT-03 | Eye relief | Unlimited | - | Design |
| R-OPT-04 | Reticle type | Electronic OLED | - | Design |
| R-OPT-05 | Reticle brightness | 0-100% adjustable | ±5% | Test |
| R-OPT-06 | Daylight visibility | 50,000 lux ambient | - | Test |
| R-OPT-07 | Reticle collimation | At optical infinity | ±0.5 diopter | Test |
| R-OPT-08 | Parallax | <2 MOA at 100m | - | Test |
| R-OPT-09 | Transmission (combiner) | ≥85% | - | Test |
| R-OPT-10 | Protective window | BK7 or equivalent | - | Inspection |
| R-OPT-11 | Environmental | MIL-STD-810H | - | Test |
| R-OPT-12 | Shock survival | 500g, 11ms | - | Test |

## 1.3 WP2 Task Breakdown

```
WP2: OPTICAL ASSEMBLY
│
├── WP2.1: Optical Design Finalization
│   ├── WP2.1.1: Optical layout optimization
│   ├── WP2.1.2: Ray tracing analysis
│   └── WP2.1.3: Tolerance analysis
│
├── WP2.2: Component Procurement
│   ├── WP2.2.1: OLED display sourcing
│   ├── WP2.2.2: Collimating lens procurement
│   ├── WP2.2.3: Beam combiner sourcing
│   └── WP2.2.4: Protective window
│
├── WP2.3: Optical Housing Fabrication
│   ├── WP2.3.1: Optical tube machining
│   ├── WP2.3.2: Lens cell fabrication
│   └── WP2.3.3: Display mount fabrication
│
├── WP2.4: Sub-Assembly
│   ├── WP2.4.1: Display module assembly
│   ├── WP2.4.2: Collimator assembly
│   └── WP2.4.3: Beam combiner mounting
│
├── WP2.5: Alignment & Collimation
│   ├── WP2.5.1: Collimation adjustment
│   ├── WP2.5.2: Boresight alignment
│   └── WP2.5.3: Focus verification
│
└── WP2.6: Optical Testing
    ├── WP2.6.1: Collimation test
    ├── WP2.6.2: Parallax test
    └── WP2.6.3: Brightness/contrast test
```

## 1.4 Schedule

| Task | Duration | Start | End | Predecessor |
|------|----------|-------|-----|-------------|
| WP2.1 Design Finalization | 3 days | Week 1, Day 1 | Week 1, Day 3 | - |
| WP2.2 Component Procurement | 14 days | Week 1, Day 1 | Week 2, Day 5 | - |
| WP2.3 Housing Fabrication | 5 days | Week 3, Day 1 | Week 3, Day 5 | WP2.1 |
| WP2.4 Sub-Assembly | 3 days | Week 4, Day 1 | Week 4, Day 3 | WP2.2, WP2.3 |
| WP2.5 Alignment | 2 days | Week 4, Day 3 | Week 4, Day 5 | WP2.4 |
| WP2.6 Testing | 2 days | Week 5, Day 1 | Week 5, Day 2 | WP2.5 |
| **TOTAL** | **~25 days** | **Week 1** | **Week 5** | |

---

# 2. OPTICAL SYSTEM ARCHITECTURE

## 2.1 Reflex Sight Principle

The V-SMASH-LITE optical system is based on the **collimated reflex sight** principle:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    REFLEX SIGHT OPTICAL PRINCIPLE                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  OPTICAL LAYOUT (TOP VIEW):                                                         │
│                                                                                      │
│                                                                                      │
│         RETICLE                                                                     │
│         DISPLAY     COLLIMATING        BEAM           PROTECTIVE                    │
│         (OLED)      LENS               COMBINER       WINDOW                        │
│            │            │                  │              │                         │
│            │            │                  │              │                         │
│            ▼            ▼                  ▼              ▼                         │
│                                                                                      │
│        ┌─────┐      ┌─────┐           ╱╲            ┌─────┐                        │
│        │░░░░░│      │     │          ╱  ╲           │     │                        │
│        │░LED░│ ───▶ │LENS │ ───────▶╱    ╲─────────▶│GLASS│ ───▶  EYE             │
│        │░░░░░│      │     │        ╱      ╲         │     │       👁               │
│        └─────┘      └─────┘       ╱   45°  ╲        └─────┘                        │
│                                  ╱          ╲                                       │
│                                 ╱            ╲                                      │
│                                ╱   DICHROIC   ╲                                    │
│                               ╱     MIRROR     ╲                                   │
│                                                  ╲                                  │
│                                                   ╲                                 │
│                                                    ╲                                │
│                                                     ▼                               │
│                                                                                      │
│                                               TARGET SCENE                          │
│                                               (see-through)                         │
│                                                    ⊕                                │
│                                                                                      │
│  PRINCIPLE:                                                                         │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  1. OLED display generates reticle image (red, 630-660nm)                   │   │
│  │  2. Collimating lens makes light rays parallel (image at infinity)          │   │
│  │  3. Dichroic beam combiner:                                                 │   │
│  │     - REFLECTS red light (reticle) toward eye                               │   │
│  │     - TRANSMITS other wavelengths (target scene)                            │   │
│  │  4. Eye sees reticle superimposed on target scene                          │   │
│  │  5. Both reticle and scene appear in focus (at infinity)                   │   │
│  │  6. Unlimited eye relief (no fixed eye position required)                  │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Optical System Block Diagram

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE OPTICAL BLOCK DIAGRAM                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  RETICLE GENERATION PATH:                                                           │
│                                                                                      │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐    ┌──────────────┐      │
│  │   JETSON     │    │    OLED      │    │ COLLIMATING  │    │    BEAM      │      │
│  │   NANO       │───▶│   DRIVER     │───▶│    LENS      │───▶│  COMBINER    │      │
│  │  (SPI out)   │    │  (SSD1351)   │    │   (f=25mm)   │    │  (dichroic)  │      │
│  └──────────────┘    └──────────────┘    └──────────────┘    └──────┬───────┘      │
│                                                                      │              │
│  TARGET SCENE PATH:                                                  │              │
│                                                                      │              │
│  ┌──────────────┐                                                    │              │
│  │   TARGET     │                                                    │              │
│  │   SCENE      │────────────────────────────────────────────────────┼─────────┐   │
│  │  (ambient)   │                                                    │         │   │
│  └──────────────┘                                                    │         │   │
│                                                                      │         │   │
│  COMBINED OUTPUT:                                                    ▼         │   │
│                                                                                 │   │
│                              ┌──────────────┐    ┌──────────────┐              │   │
│                              │  PROTECTIVE  │    │    USER      │◀─────────────┘   │
│                              │   WINDOW     │───▶│    EYE       │                  │
│                              │   (BK7)      │    │              │                  │
│                              └──────────────┘    └──────────────┘                  │
│                                                                                      │
│  KEY PARAMETERS:                                                                    │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Display:     0.96" OLED, 128×64 pixels, SSD1351 driver                     │   │
│  │  Wavelength:  Red (630-660nm) for dichroic selectivity                      │   │
│  │  Brightness:  500-1000 cd/m² (adjustable for daylight)                      │   │
│  │  Focal length: 25mm collimating lens                                        │   │
│  │  Combiner:    45° dichroic mirror, 85% VIS transmission                     │   │
│  │  Collimation: ±0.5 diopter (appears at optical infinity)                    │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.3 Key Optical Design Decisions

| Decision | Selected Option | Rationale |
|----------|-----------------|-----------|
| Display type | OLED (red) | High brightness, fast response, narrow spectrum for dichroic |
| Collimation method | Single plano-convex lens | Simple, compact, sufficient for small reticle |
| Combiner type | Dichroic flat mirror | High transmission (>85%), selective reflection |
| Combiner angle | 45° | Standard, simplifies geometry |
| Protective window | BK7 glass, AR coated | Durable, high transmission, standard material |

---

# 3. COMPONENT SPECIFICATIONS

## 3.1 OLED Display Module

### 3.1.1 Part: Reticle Display (VS-002-001)

**Selected Component:** 0.96" OLED, 128×64 pixels, SSD1351 driver, RED monochrome

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  VS-002-001: OLED RETICLE DISPLAY MODULE                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  PHYSICAL LAYOUT:                                                                   │
│                                                                                      │
│       ┌─────────────────────────────────────────┐                                   │
│       │                                         │ ↑                                 │
│       │    ┌───────────────────────────────┐    │ │                                 │
│       │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    │ │                                 │
│       │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    │ │                                 │
│       │    │░░░░░░░░░ ACTIVE ░░░░░░░░░░░░░░│    │ 26.7                              │
│       │    │░░░░░░░░░  AREA  ░░░░░░░░░░░░░░│    │ │                                 │
│       │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    │ │                                 │
│       │    │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│    │ │                                 │
│       │    └───────────────────────────────┘    │ │                                 │
│       │         ◁────── 21.7 ──────▷           │ ↓                                 │
│       │                                         │                                   │
│       │    ═══════════════════════════════     │  ← FPC connector                  │
│       └─────────────────────────────────────────┘                                   │
│            ◁──────────── 27.3 ─────────────▷                                       │
│                                                                                      │
│  SPECIFICATIONS:                                                                    │
│                                                                                      │
│  │ Parameter              │ Value                  │ Notes                    │     │
│  ├────────────────────────┼────────────────────────┼──────────────────────────┤     │
│  │ Display size           │ 0.96 inch diagonal     │ 24.4mm                   │     │
│  │ Resolution             │ 128 × 64 pixels        │ Sufficient for reticle   │     │
│  │ Pixel pitch            │ 0.17 × 0.17 mm         │ ~150 DPI                 │     │
│  │ Active area            │ 21.7 × 10.9 mm         │                          │     │
│  │ Color                  │ RED (630-660nm)        │ For dichroic selectivity │     │
│  │ Brightness             │ 800 cd/m² (typical)    │ Adjustable 0-100%        │     │
│  │ Contrast ratio         │ 10,000:1               │                          │     │
│  │ Viewing angle          │ >160°                  │                          │     │
│  │ Response time          │ <10 μs                 │                          │     │
│  │ Driver IC              │ SSD1351                │ SPI interface            │     │
│  │ Supply voltage         │ 3.3V                   │                          │     │
│  │ Operating temp         │ -40°C to +70°C         │ Industrial grade         │     │
│  │ Interface              │ SPI (4-wire)           │                          │     │
│  └────────────────────────┴────────────────────────┴──────────────────────────┘     │
│                                                                                      │
│  RETICLE PATTERN OPTIONS:                                                           │
│                                                                                      │
│      STANDARD DOT        CROSSHAIR          BRACKET              AI DYNAMIC         │
│                                                                                      │
│         ┌───┐             ┌───┐             ┌───┐                ┌───┐              │
│         │   │             │ │ │             │┌─┐│                │ ┌─┐ │            │
│         │ ● │             │─●─│             ││●││                │ │●│◁│            │
│         │   │             │ │ │             │└─┘│                │ └─┘ │            │
│         └───┘             └───┘             └───┘                └───┘              │
│        2-6 MOA           Mil-dot            BDC               Target box            │
│                                           style                + prediction         │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.1.2 Electrical Specifications

| Parameter | Min | Typ | Max | Unit |
|-----------|-----|-----|-----|------|
| VDD | 2.8 | 3.3 | 3.5 | V |
| VCC (OLED drive) | 12 | 15 | 16 | V |
| IDD (standby) | - | 5 | 10 | μA |
| IDD (operating) | - | 20 | 40 | mA |
| SPI clock | - | 10 | 20 | MHz |

### 3.1.3 SPI Interface Pinout

| Pin | Name | Function | Connection |
|-----|------|----------|------------|
| 1 | GND | Ground | Common GND |
| 2 | VCC | Power supply | 3.3V |
| 3 | D0 (SCK) | SPI clock | Jetson GPIO (SPI CLK) |
| 4 | D1 (MOSI) | SPI data | Jetson GPIO (SPI MOSI) |
| 5 | RES | Reset | Jetson GPIO |
| 6 | DC | Data/Command | Jetson GPIO |
| 7 | CS | Chip select | Jetson GPIO (SPI CS) |

---

## 3.2 Collimating Lens

### 3.2.1 Part: Collimating Lens (VS-002-002)

**Selected Component:** Plano-convex lens, BK7, f=25mm, Ø12.7mm

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  VS-002-002: COLLIMATING LENS                                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  LENS CROSS-SECTION (SCALE 2:1):                                                    │
│                                                                                      │
│                          CURVED FACE                                                │
│                         (toward OLED)                                               │
│                               │                                                      │
│                               ▼                                                      │
│                        ╭─────────────╮                                              │
│                       ╱               ╲                                             │
│                      │                 │                                            │
│                      │                 │   ← Ø12.7mm                               │
│                      │     BK7         │                                            │
│                      │    GLASS        │                                            │
│                      │                 │                                            │
│                       ╲               ╱                                             │
│                        ├─────────────┤                                              │
│                               ▲                                                      │
│                               │                                                      │
│                          FLAT FACE                                                  │
│                       (toward combiner)                                             │
│                                                                                      │
│  SPECIFICATIONS:                                                                    │
│                                                                                      │
│  │ Parameter              │ Value                  │ Tolerance              │       │
│  ├────────────────────────┼────────────────────────┼────────────────────────┤       │
│  │ Focal length           │ 25.0 mm                │ ±1%                    │       │
│  │ Diameter               │ 12.7 mm (0.5")         │ +0/-0.1 mm             │       │
│  │ Center thickness       │ 5.3 mm                 │ ±0.1 mm                │       │
│  │ Edge thickness         │ 2.5 mm                 │ Reference              │       │
│  │ Material               │ BK7 (N-BK7)            │ Schott equivalent      │       │
│  │ Refractive index       │ 1.5168 @ 587.6nm       │                        │       │
│  │ Abbe number            │ 64.17                  │                        │       │
│  │ Surface quality        │ 40-20 scratch-dig      │ MIL-PRF-13830B         │       │
│  │ Surface flatness       │ λ/4 @ 633nm            │ Flat side              │       │
│  │ AR coating             │ Single layer MgF₂      │ R<1.5% @ 630nm         │       │
│  │ Clear aperture         │ >90% of diameter       │                        │       │
│  └────────────────────────┴────────────────────────┴────────────────────────┘       │
│                                                                                      │
│  OPTICAL PROPERTIES:                                                                │
│                                                                                      │
│  F-number:           f/1.97 (25mm / 12.7mm)                                        │
│  Numerical aperture: 0.25                                                           │
│  Back focal length:  22.5mm (approximate)                                          │
│  Field curvature:    Minimal for central reticle                                   │
│                                                                                      │
│  MOUNTING:                                                                          │
│                                                                                      │
│  - Press fit into aluminum lens cell (VS-002-006)                                  │
│  - Retention ring with RTV adhesive                                                │
│  - Curved face toward OLED, flat face toward combiner                              │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.2.2 Collimation Geometry

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    COLLIMATION OPTICAL PATH                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│                                                                                      │
│        OLED              LENS                              TO COMBINER              │
│       (at focus)        (f=25mm)                                                    │
│          │                 │                                                        │
│          │                 │                                                        │
│          ●─────────────────┼───────────────────────────────────────────▶            │
│         ╱│                 │                                           (parallel)   │
│        ╱ │                 │                                                        │
│       ●──┼─────────────────┼───────────────────────────────────────────▶            │
│        ╲ │                 │                                           (parallel)   │
│         ╲│                 │                                                        │
│          ●─────────────────┼───────────────────────────────────────────▶            │
│          │                 │                                           (parallel)   │
│          │                 │                                                        │
│          │◀─── f=25mm ────▶│                                                        │
│                                                                                      │
│  KEY RELATIONSHIP:                                                                  │
│                                                                                      │
│  When object (OLED) is placed at focal distance (f) from lens:                     │
│  → Light rays emerge PARALLEL (collimated)                                         │
│  → Image appears at OPTICAL INFINITY                                               │
│  → Eye can focus on reticle AND distant target simultaneously                      │
│                                                                                      │
│  COLLIMATION TOLERANCE:                                                             │
│                                                                                      │
│  Requirement: ±0.5 diopter                                                         │
│  Diopter = 1/focal_distance (meters)                                               │
│  ±0.5 diopter ≈ ±0.5mm positioning error at f=25mm                                 │
│                                                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  OLED position:    25.0 ±0.5 mm from lens principal plane                   │   │
│  │  Adjustment:       Shim or threaded focus ring                              │   │
│  │  Verification:     Autocollimator or parallax test                          │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3.3 Beam Combiner

### 3.3.1 Part: Dichroic Beam Combiner (VS-002-003)

**Selected Component:** Dichroic mirror, 25×18×1.1mm, reflects 630-660nm, transmits other VIS

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  VS-002-003: DICHROIC BEAM COMBINER                                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  FUNCTION:                                                                          │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  REFLECTS:    Red light (630-660nm) from reticle OLED                       │   │
│  │  TRANSMITS:   Other visible wavelengths (target scene)                      │   │
│  │  RESULT:      User sees reticle overlaid on target                          │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  OPTICAL DIAGRAM:                                                                   │
│                                                                                      │
│                     COLLIMATED                                                      │
│                     RED LIGHT                                                       │
│                     (from OLED)                                                     │
│                         │                                                           │
│                         │                                                           │
│                         ▼                                                           │
│                    ╱╲╱╲╱╲╱╲                                                        │
│                   ╱        ╲                                                       │
│                  ╱ DICHROIC ╲                                                      │
│    TARGET ─────▶╱   MIRROR   ╲─────────────────▶  TO EYE                          │
│    SCENE       ╱  (reflects   ╲                    👁                              │
│   (transmits) ╱    red only)   ╲                                                   │
│              ╱        45°       ╲                                                  │
│                                                                                      │
│  SPECTRAL RESPONSE:                                                                 │
│                                                                                      │
│       100%│      ┌──────┐                                                          │
│           │      │ REFLECT                                                         │
│        R  │      │ RED   │                                                         │
│        e  │      │       │                                                         │
│        f  │──────┘       └──────────────────────────                               │
│        l  │                                                                         │
│        e  │                                                                         │
│        c 0%└────────────────────────────────────────▶                              │
│        t     400   500   600   700   800  λ(nm)                                    │
│        i          ◁────▷                                                           │
│        o          TRANSMIT                                                         │
│        n          (>85%)                                                           │
│                                                                                      │
│  SPECIFICATIONS:                                                                    │
│                                                                                      │
│  │ Parameter              │ Value                  │ Notes                    │     │
│  ├────────────────────────┼────────────────────────┼──────────────────────────┤     │
│  │ Size                   │ 25 × 18 × 1.1 mm       │ Rectangle               │     │
│  │ Substrate              │ BK7 glass              │                          │     │
│  │ Coating                │ Dichroic multilayer    │ Front surface            │     │
│  │ Reflection band        │ 630-660 nm             │ R > 95%                  │     │
│  │ Transmission band      │ 400-600nm, 680-700nm   │ T > 85%                  │     │
│  │ Angle of incidence     │ 45°                    │ Design angle             │     │
│  │ Surface quality        │ 60-40 scratch-dig      │                          │     │
│  │ Flatness               │ λ/4 @ 633nm            │ Transmitted wavefront    │     │
│  │ Parallelism            │ < 3 arcmin             │                          │     │
│  │ AR coating (back)      │ Single layer MgF₂      │ Reduce ghost images      │     │
│  └────────────────────────┴────────────────────────┴──────────────────────────┘     │
│                                                                                      │
│  MOUNTING:                                                                          │
│                                                                                      │
│  - Bonded into machined pocket at 45° angle                                        │
│  - RTV silicone adhesive (Dow 732) at edges only                                   │
│  - Do NOT apply adhesive on optical surfaces                                       │
│  - Allow thermal expansion (coefficient mismatch Al vs glass)                      │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.3.2 Dichroic Coating Specification

| Wavelength Range | Reflectance | Transmittance | Note |
|------------------|-------------|---------------|------|
| 400-600 nm | <10% | >85% | Pass through (scene) |
| 630-660 nm | >95% | <5% | Reflect (reticle) |
| 660-700 nm | <15% | >80% | Pass through |
| AOI | 45° | - | Design angle |

---

## 3.4 Protective Window

### 3.4.1 Part: Protective Window (VS-002-004)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  VS-002-004: PROTECTIVE WINDOW                                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  SPECIFICATIONS:                                                                    │
│                                                                                      │
│  │ Parameter              │ Value                  │ Notes                    │     │
│  ├────────────────────────┼────────────────────────┼──────────────────────────┤     │
│  │ Size                   │ 28 × 20 × 2.0 mm       │ Rectangle               │     │
│  │ Material               │ BK7 optical glass      │ Or N-BK7                 │     │
│  │ Surface quality        │ 60-40 scratch-dig      │                          │     │
│  │ Flatness               │ λ/2 @ 633nm            │ Both surfaces            │     │
│  │ Parallelism            │ < 5 arcmin             │                          │     │
│  │ AR coating             │ Broadband BBAR         │ Both surfaces            │     │
│  │ Reflectance            │ < 0.5% per surface     │ 400-700nm                │     │
│  │ Transmission           │ > 98% total            │                          │     │
│  │ Edge treatment         │ Ground, 0.3mm chamfer  │ Prevent chipping         │     │
│  └────────────────────────┴────────────────────────┴──────────────────────────┘     │
│                                                                                      │
│  MOUNTING:                                                                          │
│                                                                                      │
│  - Seated in machined recess in upper housing (VS-001-001)                         │
│  - RTV silicone seal around perimeter (IP65)                                       │
│  - Slight interference fit (0.05mm) for retention                                  │
│  - O-ring seal behind window for environmental protection                          │
│                                                                                      │
│  CROSS-SECTION:                                                                     │
│                                                                                      │
│       ┌──────────────────────────────────────────┐                                  │
│       │░░░░░░░░░░░ HOUSING WALL ░░░░░░░░░░░░░░░░│                                  │
│       │░░░░┌────────────────────────────┐░░░░░░░│                                  │
│       │░░░░│    PROTECTIVE WINDOW       │░░░░░░░│                                  │
│       │░░░░│         (BK7)              │░░░░░░░│                                  │
│       │░░░░└────────────────────────────┘░░░░░░░│                                  │
│       │░░░░        ◯ O-RING ◯          ░░░░░░░│                                  │
│       │░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░│                                  │
│       └──────────────────────────────────────────┘                                  │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

## 3.5 Optical Housing Components

### 3.5.1 Part: Optical Tube (VS-002-005)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  VS-002-005: OPTICAL TUBE ASSEMBLY                                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  ASSEMBLY CROSS-SECTION:                                                            │
│                                                                                      │
│                 OLED        LENS         COMBINER       WINDOW                      │
│                  │           │              │              │                         │
│                  │           │              │              │                         │
│                  ▼           ▼              ▼              ▼                         │
│                                                                                      │
│       ┌──────────────────────────────────────────────────────────────┐              │
│       │  ┌─────┐    ┌─────┐         ╱╲             ┌─────────┐       │              │
│       │  │░OLED│    │LENS │        ╱  ╲            │ WINDOW  │       │              │
│       │  │░░░░░│────│     │───────╱    ╲───────────│         │───────│───▶ EYE     │
│       │  │░░░░░│    │     │      ╱      ╲          │         │       │              │
│       │  └─────┘    └─────┘     ╱   45°  ╲         └─────────┘       │              │
│       │     │          │       ╱          ╲             │            │              │
│       │     │          │                   │            │            │              │
│       │  DISPLAY    LENS                COMBINER     WINDOW          │              │
│       │  MOUNT      CELL                 MOUNT       MOUNT           │              │
│       │                                                              │              │
│       │                    OPTICAL TUBE BODY                         │              │
│       │                      (Aluminum)                              │              │
│       └──────────────────────────────────────────────────────────────┘              │
│                                                                                      │
│  DIMENSIONS:                                                                        │
│                                                                                      │
│  Overall length:      45mm                                                          │
│  Tube OD:            18mm                                                           │
│  Tube ID:            14mm (light path)                                              │
│  Wall thickness:     2mm                                                            │
│  Material:           Aluminum 6061-T6, black anodized                              │
│                                                                                      │
│  INTERNAL FEATURES:                                                                 │
│                                                                                      │
│  - OLED mount: Threaded M14×0.5 for focus adjustment                               │
│  - Lens cell: Press-fit Ø12.7mm bore                                               │
│  - Combiner pocket: 45° machined slot, 25×18mm                                     │
│  - Baffles: 2× internal light baffles (reduce stray light)                         │
│  - Finish: Internal matte black (reduce reflections)                               │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

### 3.5.2 Part: Lens Cell (VS-002-006)

| Feature | Dimension | Tolerance | Note |
|---------|-----------|-----------|------|
| Outer diameter | 14.00 | -0.02/-0.04 | Press fit into tube |
| Inner diameter | 12.72 | +0.02/+0.04 | Slip fit for lens |
| Length | 8.0 | ±0.1 | - |
| Material | Aluminum 6061-T6 | - | Black anodized |
| Retention | Threaded ring M14×0.5 | - | With RTV |

### 3.5.3 Part: Display Mount (VS-002-007)

| Feature | Dimension | Tolerance | Note |
|---------|-----------|-----------|------|
| Thread | M14×0.5 external | Class 6g | Focus adjustment |
| OLED pocket | 27.5 × 27.0 × 2.0 | ±0.1 | Board recess |
| FPC slot | 12 × 1.5 thru | - | Cable exit |
| Travel range | 2.0 | - | ±1mm focus adjustment |

---

# 4. OPTICAL ASSEMBLY PROCEDURE

## 4.1 Assembly Sequence

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    OPTICAL ASSEMBLY SEQUENCE                                        │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  STEP 1: PREPARE COMPONENTS                                                         │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Clean all optical components with optical tissue + isopropyl alcohol      │   │
│  │  - Inspect for scratches, contamination (use bright light)                   │   │
│  │  - Verify lens focal length with focimeter if available                     │   │
│  │  - Test OLED display function before assembly                               │   │
│  │  - Prepare RTV adhesive (Dow 732), mixing if required                       │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 2: ASSEMBLE LENS CELL                                                        │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Insert collimating lens into lens cell (curved side out)                 │   │
│  │  - Apply small bead of RTV at lens edge (3 points, 120° apart)              │   │
│  │  - Install retention ring, hand tight                                       │   │
│  │  - Allow RTV to cure 24 hours before handling                               │   │
│  │  - Verify lens is centered (visual inspection)                              │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 3: INSTALL LENS CELL IN TUBE                                                 │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Press lens cell into optical tube bore                                   │   │
│  │  - Ensure lens cell seats against internal shoulder                         │   │
│  │  - Apply threadlocker (Loctite 243) to retention threads if present        │   │
│  │  - Verify lens is perpendicular to tube axis (±0.5°)                        │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 4: MOUNT BEAM COMBINER                                                       │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Apply RTV adhesive to combiner pocket edges (NOT optical surfaces)       │   │
│  │  - Carefully place dichroic mirror in 45° pocket                           │   │
│  │  - Coated side facing lens (reflective side)                               │   │
│  │  - Press gently to seat against pocket walls                                │   │
│  │  - Allow RTV to cure 24 hours                                               │   │
│  │  - Verify combiner angle with protractor (45° ±1°)                          │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 5: INSTALL OLED DISPLAY                                                      │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Connect OLED FPC cable to display mount                                  │   │
│  │  - Secure OLED board in display mount pocket                                │   │
│  │  - Apply small RTV beads at corners for retention                           │   │
│  │  - Thread display mount into optical tube (preliminary)                     │   │
│  │  - Route FPC cable through exit slot                                        │   │
│  │  - Do NOT final tighten - focus adjustment required                         │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 6: COLLIMATION ADJUSTMENT (See Section 4.2)                                  │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Power on OLED, display test pattern                                      │   │
│  │  - Use autocollimator or parallax test                                      │   │
│  │  - Adjust display mount thread position for infinity focus                  │   │
│  │  - Lock position with jam nut or threadlocker                               │   │
│  │  - Verify collimation (±0.5 diopter)                                        │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 7: INTEGRATE INTO HOUSING                                                    │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  - Install optical tube assembly into upper shell                           │   │
│  │  - Align to housing datum features                                          │   │
│  │  - Secure with set screws or adhesive                                       │   │
│  │  - Install protective window with O-ring seal                               │   │
│  │  - Apply RTV sealant around window perimeter                                │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                    │                                                │
│                                    ▼                                                │
│  STEP 8: FINAL OPTICAL TEST (See Section 5)                                        │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Collimation Adjustment Procedure

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    COLLIMATION ADJUSTMENT PROCEDURE                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  METHOD 1: PARALLAX TEST (Field Method)                                            │
│  ─────────────────────────────────────                                              │
│                                                                                      │
│  SETUP:                                                                             │
│                                                                                      │
│       OPTICAL           TARGET                                                      │
│       ASSEMBLY          (at 25m+)                                                   │
│          │                  │                                                       │
│          │                  │                                                       │
│          ▼                  ▼                                                       │
│                                                                                      │
│       ┌─────┐              ⊕                                                        │
│       │     │    ════════════════════════════════════▶                             │
│       │  ◎  │              SIGHTLINE                                               │
│       │     │                                                                       │
│       └─────┘                                                                       │
│                                                                                      │
│  PROCEDURE:                                                                         │
│                                                                                      │
│  1. Mount optical assembly on stable platform                                       │
│  2. Power on OLED, display centered dot                                             │
│  3. Aim at distant target (>25m, ideally >50m)                                      │
│  4. Move head side-to-side while viewing through optic                             │
│  5. Observe if reticle dot moves relative to target:                               │
│                                                                                      │
│       PARALLAX PRESENT (not collimated):                                           │
│       ┌─────────┐    ┌─────────┐    ┌─────────┐                                    │
│       │  ●      │    │    ●    │    │      ●  │   Dot moves with head              │
│       │    ⊕    │    │    ⊕    │    │    ⊕    │   = NOT at infinity               │
│       └─────────┘    └─────────┘    └─────────┘                                    │
│       Head LEFT      Head CENTER   Head RIGHT                                      │
│                                                                                      │
│       PARALLAX FREE (collimated):                                                  │
│       ┌─────────┐    ┌─────────┐    ┌─────────┐                                    │
│       │    ●    │    │    ●    │    │    ●    │   Dot stays on target             │
│       │    ⊕    │    │    ⊕    │    │    ⊕    │   = at infinity                   │
│       └─────────┘    └─────────┘    └─────────┘                                    │
│       Head LEFT      Head CENTER   Head RIGHT                                      │
│                                                                                      │
│  6. If parallax present:                                                           │
│     - Dot moves SAME direction as head → OLED too close to lens, unscrew          │
│     - Dot moves OPPOSITE direction → OLED too far, screw in                        │
│  7. Adjust display mount thread in small increments (~0.1mm)                       │
│  8. Re-test until parallax is <2 MOA at 50m                                        │
│  9. Lock adjustment with jam nut                                                   │
│                                                                                      │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                      │
│  METHOD 2: AUTOCOLLIMATOR TEST (Laboratory Method)                                 │
│  ─────────────────────────────────────────────────                                  │
│                                                                                      │
│  SETUP:                                                                             │
│                                                                                      │
│       OPTICAL          AUTOCOLLIMATOR                                               │
│       ASSEMBLY               │                                                      │
│          │                   │                                                      │
│          ▼                   ▼                                                      │
│                                                                                      │
│       ┌─────┐          ┌─────────┐                                                 │
│       │     │◀────────▶│  AUTO   │                                                 │
│       │  ◎  │          │  COLL   │                                                 │
│       │     │          │         │                                                 │
│       └─────┘          └─────────┘                                                 │
│                                                                                      │
│  PROCEDURE:                                                                         │
│                                                                                      │
│  1. Set up autocollimator aligned to optical assembly                              │
│  2. Power on OLED, display test pattern                                            │
│  3. View autocollimator reticle and OLED image simultaneously                      │
│  4. Adjust display mount until OLED image is in focus                              │
│     at same plane as autocollimator infinity reference                             │
│  5. Measure diopter offset (should be ±0.5 diopter)                                │
│  6. Lock adjustment                                                                │
│                                                                                      │
│  ACCEPTANCE CRITERIA:                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Collimation error: ±0.5 diopter maximum                                    │   │
│  │  Parallax at 50m:   <2 MOA (30mm)                                           │   │
│  │  Parallax at 100m:  <2 MOA (60mm)                                           │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 5. OPTICAL TESTING & VERIFICATION

## 5.1 Test Matrix

| Test ID | Test Name | Requirement | Method | Equipment |
|---------|-----------|-------------|--------|-----------|
| OT-001 | Collimation | ±0.5 diopter | Autocollimator | Autocollimator |
| OT-002 | Parallax | <2 MOA at 100m | Field parallax | Target at 100m |
| OT-003 | Reticle brightness | 0-100% adjustable | Luminance meter | Luminance meter |
| OT-004 | Daylight visibility | 50,000 lux | Outdoor test | Light meter |
| OT-005 | Combiner transmission | >85% | Spectrophotometer | Spectrometer |
| OT-006 | Boresight | ±0.5° to datum | Laser bore sight | JIG-010 |
| OT-007 | Image quality | No distortion | Visual inspection | Collimator target |
| OT-008 | Environmental | MIL-STD-810H | Chamber test | Test chamber |

## 5.2 Test Procedure: OT-001 Collimation Test

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    TEST PROCEDURE: OT-001 COLLIMATION                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  PURPOSE: Verify reticle image is at optical infinity (±0.5 diopter)               │
│                                                                                      │
│  EQUIPMENT REQUIRED:                                                                │
│  - Autocollimator (or infinity collimator with target)                             │
│  - Optical bench or stable fixture                                                 │
│  - Power supply for OLED (3.3V, 5V)                                                │
│  - Diopter scale (if autocollimator has one)                                       │
│                                                                                      │
│  PROCEDURE:                                                                         │
│                                                                                      │
│  1. Mount optical assembly on optical bench, aligned to autocollimator             │
│                                                                                      │
│  2. Power on OLED display                                                          │
│     - Display bright centered dot pattern                                           │
│     - Set brightness to 50%                                                        │
│                                                                                      │
│  3. Look through autocollimator eyepiece                                           │
│     - Observe autocollimator reticle (reference at infinity)                       │
│     - Observe OLED reticle image                                                   │
│                                                                                      │
│  4. Assess focus:                                                                  │
│     - If OLED image in focus with autocollimator reticle → PASS                    │
│     - If OLED image out of focus → measure diopter offset                          │
│                                                                                      │
│  5. Record diopter reading:                                                        │
│     - Positive diopter = OLED image in front of infinity                           │
│     - Negative diopter = OLED image behind infinity                                │
│     - Acceptance: -0.5 to +0.5 diopter                                             │
│                                                                                      │
│  6. If OUT OF SPEC:                                                                │
│     - Adjust display mount position                                                │
│     - Re-test until within spec                                                    │
│     - Lock adjustment                                                              │
│                                                                                      │
│  ACCEPTANCE CRITERIA:                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Collimation: ±0.5 diopter                                                  │   │
│  │                                                                             │   │
│  │  PASS: Diopter reading within -0.5 to +0.5                                  │   │
│  │  FAIL: Diopter reading outside -0.5 to +0.5                                 │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
│  TEST RECORD:                                                                       │
│                                                                                      │
│  Unit S/N: ____________    Date: ____________    Technician: ____________          │
│                                                                                      │
│  Initial diopter reading: ____________                                             │
│  Adjustment made: ☐ Yes  ☐ No                                                      │
│  Final diopter reading: ____________                                               │
│                                                                                      │
│  Result: ☐ PASS  ☐ FAIL                                                            │
│                                                                                      │
│  Signature: ________________________                                               │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.3 Test Procedure: OT-003 Brightness Test

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    TEST PROCEDURE: OT-003 BRIGHTNESS                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                      │
│  PURPOSE: Verify reticle brightness adjustment range and daylight visibility       │
│                                                                                      │
│  EQUIPMENT REQUIRED:                                                                │
│  - Luminance meter (cd/m² capability)                                              │
│  - Light meter (lux meter) for ambient                                             │
│  - Controllable light source or outdoor environment                                │
│  - Dark room capability                                                            │
│                                                                                      │
│  TEST CONDITIONS:                                                                   │
│                                                                                      │
│  │ Condition       │ Ambient Light │ Expected Reticle │ Pass Criteria       │      │
│  ├─────────────────┼───────────────┼──────────────────┼─────────────────────┤      │
│  │ Night/indoor    │ <100 lux      │ Dim (min setting)│ Visible, not blinding│     │
│  │ Overcast day    │ 10,000 lux    │ Medium           │ Clearly visible     │      │
│  │ Bright sunlight │ 50,000 lux    │ Maximum          │ Visible against sky │      │
│  │ Direct sun glare│ 100,000 lux   │ Maximum          │ Still discernible   │      │
│                                                                                      │
│  PROCEDURE:                                                                         │
│                                                                                      │
│  1. Set up in dark room (ambient <100 lux)                                         │
│     - Set OLED brightness to minimum                                               │
│     - Verify reticle visible but not uncomfortable                                 │
│     - Measure luminance: _______ cd/m²                                             │
│                                                                                      │
│  2. Increase brightness in 10% increments                                          │
│     - Record luminance at each step                                                │
│     - Verify smooth adjustment (no flicker, steps)                                 │
│                                                                                      │
│  3. Set up outdoors or with 50,000 lux light source                               │
│     - Set OLED brightness to maximum                                               │
│     - View reticle against bright background                                       │
│     - Record visibility: ☐ Clear ☐ Marginal ☐ Not visible                         │
│                                                                                      │
│  4. Test automatic brightness (if implemented)                                     │
│     - Cover ambient sensor, verify dim                                             │
│     - Expose to bright light, verify brightens                                     │
│                                                                                      │
│  ACCEPTANCE CRITERIA:                                                              │
│  ┌─────────────────────────────────────────────────────────────────────────────┐   │
│  │  Minimum brightness:  <50 cd/m² (comfortable in dark)                       │   │
│  │  Maximum brightness:  >800 cd/m² (visible in sunlight)                      │   │
│  │  Adjustment range:    >10:1 ratio                                           │   │
│  │  Daylight visibility: Visible at 50,000 lux ambient                         │   │
│  └─────────────────────────────────────────────────────────────────────────────┘   │
│                                                                                      │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 6. BILL OF MATERIALS

## 6.1 WP2 Component List

| Item | Part Number | Description | Qty/Unit | Unit Cost | Extended | Supplier |
|------|-------------|-------------|----------|-----------|----------|----------|
| **Optical Components** | | | | | | |
| 1 | VS-002-001 | OLED display 0.96" red | 1 | $25 | $25 | Import (China) |
| 2 | VS-002-002 | Collimating lens f=25mm | 1 | $15 | $15 | Import (Edmund) |
| 3 | VS-002-003 | Dichroic beam combiner | 1 | $35 | $35 | Import (China) |
| 4 | VS-002-004 | Protective window BK7 | 1 | $20 | $20 | **Local** optical |
| **Mechanical Components** | | | | | | |
| 5 | VS-002-005 | Optical tube assembly | 1 | $40 | $40 | **Local** CNC |
| 6 | VS-002-006 | Lens cell | 1 | $10 | $10 | **Local** CNC |
| 7 | VS-002-007 | Display mount | 1 | $15 | $15 | **Local** CNC |
| 8 | VS-002-008 | Retention ring | 1 | $5 | $5 | **Local** CNC |
| **Assembly Materials** | | | | | | |
| 9 | - | RTV silicone (Dow 732) | 1 tube | $10 | $10 | Import |
| 10 | - | Optical cleaning kit | 1 | $15 | $15 | Import |
| 11 | - | Threadlocker Loctite 243 | 1 | $8 | $8 | Import |
| | | | | | | |
| | | **SUBTOTAL (per unit)** | | | **$198** | |
| | | **× 3 units** | | | **$594** | |
| | | **Spares (20%)** | | | **$119** | |
| | | **TOTAL WP2** | | | **$713** | |

## 6.2 Local Content Analysis

| Category | Local | Import | Local % |
|----------|-------|--------|---------|
| Optical components | $20 | $75 | 21% |
| Mechanical components | $70 | $0 | 100% |
| Assembly materials | $0 | $33 | 0% |
| **TOTAL** | **$90** | **$108** | **45%** |

**Note:** Local content for WP2 is lower than overall target (70%) due to specialty optical components. This is offset by higher local content in WP1 (Mechanical) and WP3 (Electronics assembly).

---

# 7. RISK ASSESSMENT

## 7.1 WP2 Technical Risks

| Risk ID | Risk Description | Probability | Impact | Mitigation |
|---------|------------------|-------------|--------|------------|
| R-OPT-1 | OLED brightness insufficient for daylight | Medium | High | Order high-brightness variant, test early |
| R-OPT-2 | Dichroic coating quality poor | Low | High | Specify coating, inspect on receipt |
| R-OPT-3 | Collimation adjustment range insufficient | Low | Medium | Design adequate thread travel |
| R-OPT-4 | Shock causes optical misalignment | Medium | High | RTV bond all components, vibration test |
| R-OPT-5 | Combiner transmission below spec | Low | Medium | Verify with spectrometer before assembly |
| R-OPT-6 | Focus drift with temperature | Medium | Medium | Use matched CTE materials, test thermal |

## 7.2 Mitigation Actions

| Risk | Mitigation Action | Owner | Status |
|------|-------------------|-------|--------|
| R-OPT-1 | Source OLED with >800 cd/m² spec | Procurement | Pending |
| R-OPT-4 | Use Sorbothane mounts + RTV bond | Design | Implemented in v1.1 |
| R-OPT-6 | Include thermal cycle test in OT-008 | Test | Planned |

---

# 8. DELIVERABLES CHECKLIST

## 8.1 WP2 Deliverables

**Hardware:**
- [ ] Optical tube assembly × 4 (3 + 1 spare)
- [ ] OLED display module × 4 (assembled, tested)
- [ ] Collimating lens (installed in cell) × 4
- [ ] Beam combiner (installed) × 4
- [ ] Protective window × 4

**Documentation:**
- [ ] Optical assembly drawing (this document)
- [ ] Component specifications
- [ ] Assembly procedure
- [ ] Test procedures (OT-001 through OT-008)
- [ ] Inspection reports (per unit)
- [ ] Collimation certificates

**Test Data:**
- [ ] Collimation test results
- [ ] Brightness test results
- [ ] Parallax test results
- [ ] Transmission measurement

---

# 9. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Design Team | Initial release - WP2 deep dive |

---

*WP2: Optical Assembly Deep Dive v1.0*
*V-SMASH-LITE Prototype Build*
*Detail Design Level Documentation per Pahl & Beitz Phase 4*
