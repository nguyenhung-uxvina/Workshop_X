# V-SMASH-LITE MANUFACTURING PROCESS FLOW
## Production Line Design for Scale-Up

**Document**: VS-MFG-002 | **Version**: 1.0 | **Date**: 2026-01-19
**Project**: V-SMASH-LITE AI-Powered Smart Sight
**Purpose**: Production line design for 100-500 units/year capacity

---

# EXECUTIVE SUMMARY

This document defines the manufacturing process flow for V-SMASH-LITE production scale-up from prototype (3 units) to low-rate initial production (LRIP: 100 units/year) and full-rate production (FRP: 500 units/year).

**Key Metrics**:
| Parameter | Prototype | LRIP | FRP |
|-----------|-----------|------|-----|
| Annual Volume | 3 | 100 | 500 |
| Takt Time | N/A | 20 hrs | 4 hrs |
| Assembly Time/Unit | 10 hrs | 6 hrs | 4 hrs |
| Unit Cost | $4,295 | $3,800 | $3,200 |
| Workers Required | 2 | 4 | 8 |
| Floor Space | 20 m² | 80 m² | 200 m² |

---

# TABLE OF CONTENTS

1. [Production Volume Planning](#1-production-volume-planning)
2. [Manufacturing Strategy](#2-manufacturing-strategy)
3. [Process Flow Overview](#3-process-flow-overview)
4. [Workstation Design](#4-workstation-design)
5. [Production Line Layout](#5-production-line-layout)
6. [Equipment & Tooling](#6-equipment-tooling)
7. [Quality Control Integration](#7-quality-control)
8. [Material Flow & Inventory](#8-material-flow)
9. [Workforce Planning](#9-workforce-planning)
10. [Production Metrics & KPIs](#10-production-metrics)
11. [Scale-Up Roadmap](#11-scale-up-roadmap)
12. [Cost Analysis](#12-cost-analysis)

---

# 1. PRODUCTION VOLUME PLANNING

## 1.1 Demand Forecast

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE PRODUCTION FORECAST                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  UNITS                                                                              │
│    ▲                                                                                │
│ 500│                                              ████████████ FRP                  │
│    │                                         █████            (500/yr)              │
│ 400│                                    █████                                       │
│    │                               █████                                            │
│ 300│                          █████                                                 │
│    │                     █████      LRIP-2 (200/yr)                                │
│ 200│                █████                                                           │
│    │           █████        LRIP-1 (100/yr)                                        │
│ 100│      █████                                                                     │
│    │  ████      Pilot (20/yr)                                                      │
│  20│██ Alpha (3)                                                                    │
│    └────┬────┬────┬────┬────┬────┬────┬────┬────▶ TIME                             │
│       2026 2026 2027 2027 2027 2028 2028 2028 2029                                 │
│        Q1   Q3   Q1   Q3   Q4   Q2   Q4   Q4                                       │
│                                                                                     │
│  PHASES:                                                                            │
│  ═══════                                                                            │
│  Phase 0: Alpha Prototype (Q1 2026)     →  3 units                                 │
│  Phase 1: Pilot Production (Q3 2026)    →  20 units                                │
│  Phase 2: LRIP-1 (2027)                 →  100 units/year                          │
│  Phase 3: LRIP-2 (2028)                 →  200 units/year                          │
│  Phase 4: FRP (2029+)                   →  500 units/year                          │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.2 Production Rate Calculation

| Phase | Units/Year | Working Days | Units/Day | Takt Time | Shifts |
|-------|------------|--------------|-----------|-----------|--------|
| Pilot | 20 | 50 | 0.4 | 20 hrs | 1 |
| LRIP-1 | 100 | 250 | 0.4 | 20 hrs | 1 |
| LRIP-2 | 200 | 250 | 0.8 | 10 hrs | 1 |
| FRP | 500 | 250 | 2.0 | 4 hrs | 1-2 |

**Takt Time Calculation**:
- Available time/day: 8 hours × 60 min = 480 min
- FRP takt time: 480 min / 2 units = 240 min = 4 hours

---

# 2. MANUFACTURING STRATEGY

## 2.1 Make vs Buy Decisions

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    MAKE VS BUY MATRIX                                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                           STRATEGIC IMPORTANCE                                      │
│                        LOW                    HIGH                                  │
│                    ┌─────────────────────┬─────────────────────┐                   │
│                    │                     │                     │                   │
│              HIGH  │      PARTNER        │       MAKE          │                   │
│                    │                     │                     │                   │
│   MANUFACTURING    │  • CNC machining    │  • System integr.   │                   │
│   COMPLEXITY       │  • PCB assembly     │  • Final assembly   │                   │
│                    │  • Anodizing        │  • Calibration      │                   │
│                    │                     │  • Testing          │                   │
│                    │                     │  • Optical assy     │                   │
│                    ├─────────────────────┼─────────────────────┤                   │
│                    │                     │                     │                   │
│              LOW   │       BUY           │     DEVELOP         │                   │
│                    │                     │                     │                   │
│                    │  • Fasteners        │  • AI software      │                   │
│                    │  • Cables           │  • Firmware         │                   │
│                    │  • Std components   │  • Test fixtures    │                   │
│                    │  • Batteries        │                     │                   │
│                    │                     │                     │                   │
│                    └─────────────────────┴─────────────────────┘                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 Core Competencies (MAKE In-House)

| Activity | Rationale | Investment |
|----------|-----------|------------|
| **Final Assembly** | Quality control, IP protection | Workstations, fixtures |
| **Optical Assembly** | Critical alignment, know-how | Clean bench, fixtures |
| **Calibration** | Product performance, data | Test equipment |
| **System Test** | Quality assurance | Test systems |
| **Software Load** | Security, configuration | Programming stations |

## 2.3 Outsourced Activities (BUY/PARTNER)

| Activity | Supplier Type | Qualification Criteria |
|----------|---------------|------------------------|
| CNC Machining | Tier 1 local | ISO 9001, defense experience |
| PCB Fabrication | PCBA house | IPC-A-610 Class 2 |
| Anodizing | Surface finish specialist | MIL-A-8625 certified |
| Optical Components | Optical supplier | ISO certified |
| Electronics Components | Authorized distributors | Authentic parts guarantee |

---

# 3. PROCESS FLOW OVERVIEW

## 3.1 High-Level Process Flow

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE MANUFACTURING PROCESS FLOW                          │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────┐                                                                    │
│  │  RECEIVING  │                                                                    │
│  │   & IQC     │                                                                    │
│  └──────┬──────┘                                                                    │
│         │                                                                           │
│         ▼                                                                           │
│  ┌─────────────┐    ┌─────────────┐    ┌─────────────┐                            │
│  │   KITTING   │───▶│ SUB-ASSY 1  │───▶│ SUB-ASSY 2  │                            │
│  │             │    │  (Optical)  │    │(Electronics)│                            │
│  └─────────────┘    └──────┬──────┘    └──────┬──────┘                            │
│                            │                   │                                    │
│                            └─────────┬─────────┘                                    │
│                                      ▼                                              │
│                            ┌─────────────┐                                         │
│                            │    MAIN     │                                         │
│                            │  ASSEMBLY   │                                         │
│                            └──────┬──────┘                                         │
│                                   │                                                 │
│                                   ▼                                                 │
│                            ┌─────────────┐                                         │
│                            │ CALIBRATION │                                         │
│                            │  & CONFIG   │                                         │
│                            └──────┬──────┘                                         │
│                                   │                                                 │
│                                   ▼                                                 │
│                            ┌─────────────┐                                         │
│                            │    TEST     │                                         │
│                            │   (ATP)     │                                         │
│                            └──────┬──────┘                                         │
│                                   │                                                 │
│                          ┌───────┴───────┐                                         │
│                          ▼               ▼                                          │
│                   ┌─────────────┐  ┌─────────────┐                                 │
│                   │    PASS     │  │    FAIL     │                                 │
│                   │  Packing    │  │   Rework    │                                 │
│                   └──────┬──────┘  └──────┬──────┘                                 │
│                          │                │                                         │
│                          ▼                └──────▶ Return to appropriate station   │
│                   ┌─────────────┐                                                   │
│                   │  SHIPPING   │                                                   │
│                   └─────────────┘                                                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Detailed Process Steps

| Step | Station | Operation | Time (min) | QC Point |
|------|---------|-----------|------------|----------|
| 1 | Receiving | Incoming inspection | 15 | IQC |
| 2 | Kitting | Kit preparation | 20 | Kit verify |
| 3 | SA-1 | Optical sub-assembly | 45 | Visual |
| 4 | SA-2 | Electronics sub-assembly | 30 | Power test |
| 5 | SA-3 | Power sub-assembly | 15 | - |
| 6 | MA-1 | Mechanical assembly | 60 | Torque |
| 7 | MA-2 | Electronics integration | 45 | Functional |
| 8 | MA-3 | Optical integration | 30 | Alignment |
| 9 | MA-4 | Final assembly | 30 | Visual |
| 10 | CAL | Calibration | 45 | Cal data |
| 11 | TEST | ATP execution | 60 | ATP pass |
| 12 | PACK | Packing | 15 | Ship verify |
| | **TOTAL** | | **410 min** | |
| | **~6.8 hours** | | | |

---

# 4. WORKSTATION DESIGN

## 4.1 Station WS-01: Receiving & IQC

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-01: RECEIVING & IQC                             ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Incoming inspection, quarantine, release to stock                     ║
║  CYCLE TIME: 15 min/kit                                                          ║
║  OPERATOR: 1 (shared with kitting)                                               ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐                     │ ║
║  │   │   INCOMING   │  │  INSPECTION  │  │   RELEASE    │                     │ ║
║  │   │    AREA      │  │    BENCH     │  │    AREA      │                     │ ║
║  │   │              │  │              │  │              │                     │ ║
║  │   │  [Pallet]    │  │  [Caliper]   │  │  [To Stock]  │                     │ ║
║  │   │  [Boxes]     │  │  [Scale]     │  │              │                     │ ║
║  │   │              │  │  [Magnifier] │  │              │                     │ ║
║  │   └──────────────┘  └──────────────┘  └──────────────┘                     │ ║
║  │                                                                             │ ║
║  │   ┌──────────────┐                                                          │ ║
║  │   │  QUARANTINE  │  ← NCR items held here                                   │ ║
║  │   │    CAGE      │                                                          │ ║
║  │   └──────────────┘                                                          │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  EQUIPMENT:                                                                       ║
║  • Digital caliper 150mm                                                         ║
║  • Digital scale 5kg × 0.1g                                                      ║
║  • Magnifying lamp 5×                                                            ║
║  • Computer + barcode scanner                                                    ║
║  • Shelving (incoming, released, quarantine)                                     ║
║                                                                                   ║
║  FLOOR SPACE: 12 m² (3m × 4m)                                                    ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.2 Station WS-02: Kitting

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-02: KITTING                                     ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Prepare complete kit for one unit assembly                            ║
║  CYCLE TIME: 20 min/kit                                                          ║
║  OPERATOR: 1 (shared with receiving)                                             ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌──────────────────────────────────────────────────────────────────┐     │ ║
║  │   │                    COMPONENT SHELVING                            │     │ ║
║  │   │  [Mech]  [Elect]  [Optical]  [Fasteners]  [Cables]  [Battery]   │     │ ║
║  │   └──────────────────────────────────────────────────────────────────┘     │ ║
║  │                                                                             │ ║
║  │   ┌────────────────────────┐    ┌────────────────────────┐                 │ ║
║  │   │      KITTING BENCH     │    │      KIT STAGING       │                 │ ║
║  │   │                        │    │                        │                 │ ║
║  │   │   [Kit Tray]           │    │   [Kit 1] [Kit 2]      │                 │ ║
║  │   │   [Pick List]          │    │   [Kit 3] [Kit 4]      │                 │ ║
║  │   │   [Scanner]            │    │                        │                 │ ║
║  │   │                        │    │                        │                 │ ║
║  │   └────────────────────────┘    └────────────────────────┘                 │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  KIT CONTENTS (per unit):                                                        ║
║  • Mechanical parts (housing, covers, brackets) - 1 bag                          ║
║  • Optical components (combiner, lens, OLED) - 1 anti-static tray               ║
║  • Electronics (Jetson, PCB, camera) - 1 ESD tray                               ║
║  • Fastener kit - 1 bag                                                          ║
║  • Wire harness - 1 set                                                          ║
║  • Battery pack - 1 unit                                                         ║
║  • Consumables (thermal paste, adhesive) - 1 kit                                ║
║                                                                                   ║
║  FLOOR SPACE: 15 m² (3m × 5m)                                                    ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.3 Station WS-03: Optical Sub-Assembly

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-03: OPTICAL SUB-ASSEMBLY                        ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Assemble beam combiner + OLED + collimator module                     ║
║  CYCLE TIME: 45 min                                                              ║
║  OPERATOR: 1 (skilled optical technician)                                        ║
║  ENVIRONMENT: Clean bench (ISO Class 7)                                          ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌────────────────────────────────────────────────────────────────────┐   │ ║
║  │   │                    LAMINAR FLOW HOOD                                │   │ ║
║  │   │   ┌─────────────────────────────────────────────────────────────┐  │   │ ║
║  │   │   │                                                             │  │   │ ║
║  │   │   │   [Alignment Fixture]      [UV Cure Station]                │  │   │ ║
║  │   │   │                                                             │  │   │ ║
║  │   │   │   [Microscope]             [Clean Tools]                    │  │   │ ║
║  │   │   │                                                             │  │   │ ║
║  │   │   └─────────────────────────────────────────────────────────────┘  │   │ ║
║  │   └────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                             │ ║
║  │   ┌────────────────────┐    ┌────────────────────┐                         │ ║
║  │   │   INPUT STAGING    │    │   OUTPUT STAGING   │                         │ ║
║  │   │   (Optical parts)  │    │   (Completed assy) │                         │ ║
║  │   └────────────────────┘    └────────────────────┘                         │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  EQUIPMENT:                                                                       ║
║  • Laminar flow clean bench (ISO 7)                                              ║
║  • Stereo microscope 10-40×                                                      ║
║  • UV curing lamp 365nm                                                          ║
║  • Optical alignment fixture (VS-FIX-002)                                        ║
║  • Lens cleaning kit (IPA, lens tissue, blower)                                  ║
║  • Torque screwdriver 0.1-0.5 N·m                                                ║
║  • ESD mat and wrist strap                                                       ║
║                                                                                   ║
║  CRITICAL PROCESS PARAMETERS:                                                     ║
║  • UV cure time: 60 seconds minimum                                              ║
║  • Beam combiner angle: 45° ± 0.5°                                              ║
║  • Collimator focus: Infinity (verify with collimator tester)                   ║
║  • Cleanliness: No particles >50μm visible                                       ║
║                                                                                   ║
║  FLOOR SPACE: 9 m² (3m × 3m)                                                     ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.4 Station WS-04: Electronics Sub-Assembly

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-04: ELECTRONICS SUB-ASSEMBLY                    ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Integrate Jetson + Carrier PCB + Camera                               ║
║  CYCLE TIME: 30 min                                                              ║
║  OPERATOR: 1 (electronics technician)                                            ║
║  ENVIRONMENT: ESD Protected Area (EPA)                                           ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌────────────────────────────────────────────────────────────────────┐   │ ║
║  │   │                    ESD PROTECTED WORKBENCH                          │   │ ║
║  │   │                                                                     │   │ ║
║  │   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │   │ ║
║  │   │   │   ASSEMBLY   │  │    TEST      │  │   PROGRAM    │             │   │ ║
║  │   │   │    AREA      │  │    AREA      │  │    AREA      │             │   │ ║
║  │   │   │              │  │              │  │              │             │   │ ║
║  │   │   │  [Fixture]   │  │  [DMM]       │  │  [PC]        │             │   │ ║
║  │   │   │  [Tools]     │  │  [PSU]       │  │  [Cable]     │             │   │ ║
║  │   │   │              │  │  [Scope]     │  │              │             │   │ ║
║  │   │   └──────────────┘  └──────────────┘  └──────────────┘             │   │ ║
║  │   │                                                                     │   │ ║
║  │   └────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                             │ ║
║  │   [ESD Mat]  [Wrist Strap]  [Ionizer]                                      │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  EQUIPMENT:                                                                       ║
║  • ESD workbench with mat                                                        ║
║  • Wrist strap with continuous monitor                                           ║
║  • Ionizing fan                                                                   ║
║  • DC power supply 0-30V/5A                                                      ║
║  • Digital multimeter                                                            ║
║  • Oscilloscope 100MHz                                                           ║
║  • PC with programming software                                                   ║
║  • Torque screwdriver set                                                        ║
║  • Soldering station (rework)                                                    ║
║                                                                                   ║
║  TEST CHECKLIST (before release):                                                ║
║  □ 5V rail: 5.0V ± 0.1V                                                         ║
║  □ 3.3V rail: 3.3V ± 0.1V                                                       ║
║  □ Jetson boot: Success                                                          ║
║  □ Camera image: Good                                                            ║
║  □ IMU response: Good                                                            ║
║                                                                                   ║
║  FLOOR SPACE: 9 m² (3m × 3m)                                                     ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.5 Station WS-05: Main Assembly

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-05: MAIN ASSEMBLY                               ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Final mechanical and system integration                               ║
║  CYCLE TIME: 120 min (can split to 2 stations for FRP)                           ║
║  OPERATOR: 1-2                                                                   ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌─────────────────────────────────────────────────────────────────────┐  │ ║
║  │   │                    ASSEMBLY LINE                                     │  │ ║
║  │   │                                                                      │  │ ║
║  │   │   ┌────────────┐  ┌────────────┐  ┌────────────┐  ┌────────────┐   │  │ ║
║  │   │   │  STATION   │  │  STATION   │  │  STATION   │  │  STATION   │   │  │ ║
║  │   │   │    5A      │─▶│    5B      │─▶│    5C      │─▶│    5D      │   │  │ ║
║  │   │   │            │  │            │  │            │  │            │   │  │ ║
║  │   │   │ Mechanical │  │ Elect Int  │  │ Optical    │  │ Final      │   │  │ ║
║  │   │   │ Assembly   │  │            │  │ Install    │  │ Close      │   │  │ ║
║  │   │   │            │  │            │  │            │  │            │   │  │ ║
║  │   │   │  (60 min)  │  │  (45 min)  │  │  (30 min)  │  │  (30 min)  │   │  │ ║
║  │   │   └────────────┘  └────────────┘  └────────────┘  └────────────┘   │  │ ║
║  │   │                                                                      │  │ ║
║  │   └─────────────────────────────────────────────────────────────────────┘  │ ║
║  │                                                                             │ ║
║  │   ┌─────────────────────────────────────────────────────────────────────┐  │ ║
║  │   │                    TOOL WALL                                         │  │ ║
║  │   │   [Torque Drivers]  [Hex Keys]  [Tweezers]  [Pliers]               │  │ ║
║  │   └─────────────────────────────────────────────────────────────────────┘  │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  STATION BREAKDOWN (FRP Mode - 4 positions):                                     ║
║                                                                                   ║
║  5A - Mechanical Assembly (60 min):                                              ║
║       • Install thread inserts in housing                                        ║
║       • Install O-rings                                                          ║
║       • Mount PCB plate                                                          ║
║       • Install heatsink                                                         ║
║                                                                                   ║
║  5B - Electronics Integration (45 min):                                          ║
║       • Mount Jetson + carrier assembly                                          ║
║       • Install camera module                                                    ║
║       • Route wire harness                                                       ║
║       • Connect all cables                                                       ║
║                                                                                   ║
║  5C - Optical Installation (30 min):                                             ║
║       • Install optical sub-assembly                                             ║
║       • Install solenoid/trigger mechanism                                       ║
║       • Install battery compartment                                              ║
║                                                                                   ║
║  5D - Final Close (30 min):                                                      ║
║       • Install protective window                                                ║
║       • Install front/rear covers                                                ║
║       • Install Picatinny clamp                                                  ║
║       • Final torque all fasteners                                               ║
║       • Visual inspection                                                        ║
║                                                                                   ║
║  FLOOR SPACE: 24 m² (4m × 6m) - expandable to 40 m² for FRP                     ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.6 Station WS-06: Calibration

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-06: CALIBRATION                                 ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Firmware load, IMU calibration, optical boresight                     ║
║  CYCLE TIME: 45 min                                                              ║
║  OPERATOR: 1 (trained calibration technician)                                    ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌────────────────────────────────────────────────────────────────────┐   │ ║
║  │   │                    CALIBRATION BENCH                                │   │ ║
║  │   │                                                                     │   │ ║
║  │   │   ┌──────────────────────────────────────────────────────────────┐ │   │ ║
║  │   │   │                                                              │ │   │ ║
║  │   │   │         BORESIGHT ALIGNMENT RANGE (3m minimum)              │ │   │ ║
║  │   │   │                                                              │ │   │ ║
║  │   │   │   [Unit Under Test]  ───────────────────▶  [Target Board]   │ │   │ ║
║  │   │   │                                                              │ │   │ ║
║  │   │   │         (Collimator)           (3m)        (Grid Pattern)   │ │   │ ║
║  │   │   │                                                              │ │   │ ║
║  │   │   └──────────────────────────────────────────────────────────────┘ │   │ ║
║  │   │                                                                     │   │ ║
║  │   │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐             │   │ ║
║  │   │   │  FIRMWARE    │  │     IMU      │  │   DATA       │             │   │ ║
║  │   │   │  STATION     │  │ CALIBRATION  │  │  LOGGING     │             │   │ ║
║  │   │   │              │  │   FIXTURE    │  │              │             │   │ ║
║  │   │   │  [PC]        │  │  [Turntable] │  │  [PC]        │             │   │ ║
║  │   │   │  [Cable]     │  │  [Level]     │  │  [Storage]   │             │   │ ║
║  │   │   └──────────────┘  └──────────────┘  └──────────────┘             │   │ ║
║  │   │                                                                     │   │ ║
║  │   └────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  CALIBRATION PROCEDURE:                                                          ║
║                                                                                   ║
║  Step 1: Firmware Load (10 min)                                                  ║
║          • Connect USB                                                            ║
║          • Flash production firmware image                                        ║
║          • Verify boot sequence                                                   ║
║          • Set serial number in EEPROM                                           ║
║                                                                                   ║
║  Step 2: IMU Calibration (15 min)                                                ║
║          • Place unit on calibration turntable                                   ║
║          • Run 6-position static calibration                                     ║
║          • Run dynamic rotation calibration                                      ║
║          • Store calibration data in unit                                        ║
║                                                                                   ║
║  Step 3: Boresight Alignment (20 min)                                            ║
║          • Mount unit on boresight fixture                                       ║
║          • Aim at 3m target                                                       ║
║          • Adjust mechanical zero (if needed)                                    ║
║          • Verify reticle alignment < 1 MOA                                      ║
║          • Record boresight data                                                 ║
║                                                                                   ║
║  EQUIPMENT:                                                                       ║
║  • Calibration PC with software                                                  ║
║  • IMU turntable fixture                                                         ║
║  • Precision level                                                               ║
║  • Boresight target (3m range)                                                   ║
║  • Collimator (optional, for infinite focus)                                    ║
║  • Data logging system                                                           ║
║                                                                                   ║
║  FLOOR SPACE: 12 m² (3m × 4m) + 3m range space                                  ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.7 Station WS-07: Test (ATP)

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-07: TEST (ATP)                                  ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Execute Acceptance Test Procedure                                     ║
║  CYCLE TIME: 60 min                                                              ║
║  OPERATOR: 1 (QC technician)                                                     ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐   │ ║
║  │   │   FUNCTIONAL TEST  │  │     AI TEST        │  │    SEAL TEST       │   │ ║
║  │   │                    │  │                    │  │                    │   │ ║
║  │   │  [Test Fixture]    │  │  [Target Display]  │  │  [IP65 Spray Box]  │   │ ║
║  │   │  [Power Analyzer]  │  │  [Drone Targets]   │  │  [Nozzle Array]    │   │ ║
║  │   │  [DMM]             │  │  [Camera]          │  │  [Pressure Gauge]  │   │ ║
║  │   │                    │  │                    │  │                    │   │ ║
║  │   └────────────────────┘  └────────────────────┘  └────────────────────┘   │ ║
║  │                                                                             │ ║
║  │   ┌────────────────────────────────────────────────────────────────────┐   │ ║
║  │   │                    TEST DATA STATION                                │   │ ║
║  │   │                                                                     │   │ ║
║  │   │   [PC with Test Software]  [Printer]  [Label Maker]                │   │ ║
║  │   │                                                                     │   │ ║
║  │   └────────────────────────────────────────────────────────────────────┘   │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  ATP TEST SEQUENCE:                                                              ║
║                                                                                   ║
║  ATP-01: Visual Inspection (5 min)                                               ║
║          □ No cosmetic defects                                                   ║
║          □ Labels correct and readable                                           ║
║          □ All fasteners present                                                 ║
║                                                                                   ║
║  ATP-02: Electrical Test (15 min)                                                ║
║          □ Battery voltage: 7.0-8.4V                                            ║
║          □ Current draw (idle): < 1A                                            ║
║          □ Current draw (active): < 3A                                          ║
║          □ All rails within spec                                                 ║
║                                                                                   ║
║  ATP-03: Functional Test (20 min)                                                ║
║          □ Power on/off sequence                                                 ║
║          □ Display functions                                                     ║
║          □ Button functions                                                      ║
║          □ Trigger mechanism (dry fire)                                          ║
║          □ IMU response                                                          ║
║                                                                                   ║
║  ATP-04: AI Detection Test (15 min)                                              ║
║          □ Drone detection at 3m (target display)                               ║
║          □ Detection rate > 95%                                                  ║
║          □ Tracking stability                                                    ║
║          □ Fire permission logic                                                 ║
║                                                                                   ║
║  ATP-05: Seal Test (5 min)                                                       ║
║          □ IP65 spray test (30 sec)                                             ║
║          □ No water ingress                                                      ║
║          □ Continued function after spray                                        ║
║                                                                                   ║
║  EQUIPMENT:                                                                       ║
║  • Functional test fixture (VS-FIX-001)                                          ║
║  • Power analyzer                                                                ║
║  • AI test target display system                                                 ║
║  • IP65 spray test chamber                                                       ║
║  • Test PC with automated test software                                          ║
║  • Label printer                                                                 ║
║                                                                                   ║
║  FLOOR SPACE: 15 m² (3m × 5m)                                                    ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

## 4.8 Station WS-08: Packing & Shipping

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    WORKSTATION WS-08: PACKING & SHIPPING                          ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  FUNCTION: Final packing, documentation, shipping                                ║
║  CYCLE TIME: 15 min                                                              ║
║  OPERATOR: 1 (shared)                                                            ║
║                                                                                   ║
║  LAYOUT:                                                                          ║
║  ┌─────────────────────────────────────────────────────────────────────────────┐ ║
║  │                                                                             │ ║
║  │   ┌────────────────────┐  ┌────────────────────┐  ┌────────────────────┐   │ ║
║  │   │   PACKING BENCH    │  │    DOC STATION     │  │  SHIPPING STAGING  │   │ ║
║  │   │                    │  │                    │  │                    │   │ ║
║  │   │  [Foam Inserts]    │  │  [Printer]         │  │  [Packed Units]    │   │ ║
║  │   │  [Pelican Cases]   │  │  [Manuals]         │  │  [Ready to Ship]   │   │ ║
║  │   │  [Desiccant]       │  │  [Certificates]    │  │                    │   │ ║
║  │   │                    │  │                    │  │                    │   │ ║
║  │   └────────────────────┘  └────────────────────┘  └────────────────────┘   │ ║
║  │                                                                             │ ║
║  └─────────────────────────────────────────────────────────────────────────────┘ ║
║                                                                                   ║
║  PACKING LIST (per unit):                                                        ║
║  □ V-SMASH-LITE unit (tested, calibrated)                                       ║
║  □ Battery (charged to 50%)                                                      ║
║  □ USB-C charging cable                                                          ║
║  □ User manual                                                                   ║
║  □ Calibration certificate                                                       ║
║  □ ATP test report                                                               ║
║  □ Warranty card                                                                 ║
║  □ Desiccant pack                                                                ║
║                                                                                   ║
║  FLOOR SPACE: 10 m² (2m × 5m)                                                    ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

# 5. PRODUCTION LINE LAYOUT

## 5.1 LRIP Layout (100 units/year)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE PRODUCTION FLOOR LAYOUT                             │
│                    LRIP Configuration (100 units/year)                              │
│                    Total Floor Space: 80 m² (8m × 10m)                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│   ┌─────────────────────────────────────────────────────────────────────────────┐  │
│   │                                                                             │  │
│   │   ┌──────────┐  ┌──────────┐                                               │  │
│   │   │  WS-01   │  │  WS-02   │     RECEIVING                                 │  │
│   │   │ RECEIVING│──│ KITTING  │     & MATERIAL                                │  │
│   │   │          │  │          │     AREA                                      │  │
│   │   └──────────┘  └──────────┘                                               │  │
│   │        │                                                                    │  │
│   │        ▼                                                                    │  │
│   │   ┌──────────┐  ┌──────────┐                                               │  │
│   │   │  WS-03   │  │  WS-04   │     SUB-ASSEMBLY                              │  │
│   │   │ OPTICAL  │  │ ELECT    │     AREA                                      │  │
│   │   │          │  │          │     (Clean/ESD)                               │  │
│   │   └──────────┘  └──────────┘                                               │  │
│   │        │             │                                                      │  │
│   │        └──────┬──────┘                                                      │  │
│   │               ▼                                                             │  │
│   │   ┌─────────────────────────────────────────────────────────────────────┐  │  │
│   │   │                         WS-05                                        │  │  │
│   │   │                    MAIN ASSEMBLY                                     │  │  │
│   │   │    [5A: Mech] ──▶ [5B: Elect] ──▶ [5C: Opt] ──▶ [5D: Close]        │  │  │
│   │   └─────────────────────────────────────────────────────────────────────┘  │  │
│   │                                      │                                      │  │
│   │                                      ▼                                      │  │
│   │   ┌──────────┐  ┌──────────┐  ┌──────────┐                                │  │
│   │   │  WS-06   │──│  WS-07   │──│  WS-08   │     FINAL                      │  │
│   │   │ CALIBR.  │  │  TEST    │  │ PACKING  │     PROCESSING                 │  │
│   │   │          │  │  (ATP)   │  │          │                                 │  │
│   │   └──────────┘  └──────────┘  └──────────┘                                │  │
│   │                                      │                                      │  │
│   │                                      ▼                                      │  │
│   │                              [SHIPPING DOCK]                               │  │
│   │                                                                             │  │
│   └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                     │
│   LEGEND:                                                                          │
│   ═══════                                                                          │
│   ──▶  Material flow                                                               │
│   [  ]  Workstation                                                                │
│                                                                                     │
│   MATERIAL FLOW: Single-piece flow with WIP limit = 3 units                       │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 FRP Layout (500 units/year)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE PRODUCTION FLOOR LAYOUT                             │
│                    FRP Configuration (500 units/year)                               │
│                    Total Floor Space: 200 m² (10m × 20m)                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────────┐ │
│  │                                                                               │ │
│  │  RECEIVING/KITTING AREA (30 m²)                                              │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────────────────────┐                   │ │
│  │  │  WS-01   │  │  WS-02A  │  │      WS-02B             │                   │ │
│  │  │ RECEIVING│  │ KITTING  │  │   KIT STAGING           │                   │ │
│  │  │   IQC    │  │   #1     │  │   (Buffer: 10 kits)     │                   │ │
│  │  └────┬─────┘  └────┬─────┘  └──────────────────────────┘                   │ │
│  │       │             │                                                        │ │
│  │       └──────┬──────┘                                                        │ │
│  │              ▼                                                               │ │
│  │  SUB-ASSEMBLY AREA (40 m²)                                                   │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐                    │ │
│  │  │  WS-03A  │  │  WS-03B  │  │  WS-04A  │  │  WS-04B  │                    │ │
│  │  │ OPTICAL  │  │ OPTICAL  │  │ ELECT    │  │ ELECT    │                    │ │
│  │  │   #1     │  │   #2     │  │   #1     │  │   #2     │                    │ │
│  │  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘                    │ │
│  │       │             │             │             │                            │ │
│  │       └──────┬──────┴──────┬──────┴──────┬──────┘                            │ │
│  │              │             │             │                                    │ │
│  │              ▼             ▼             ▼                                    │ │
│  │  MAIN ASSEMBLY LINE (80 m²)                                                  │ │
│  │  ┌────────────────────────────────────────────────────────────────────────┐ │ │
│  │  │                                                                        │ │ │
│  │  │   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐         │ │ │
│  │  │   │  5A    │─▶│  5B    │─▶│  5C    │─▶│  5D    │─▶│  5E    │         │ │ │
│  │  │   │ MECH   │  │ ELECT  │  │ OPTICAL│  │ CLOSE  │  │ BUFFER │         │ │ │
│  │  │   │ 60min  │  │ 45min  │  │ 30min  │  │ 30min  │  │        │         │ │ │
│  │  │   └────────┘  └────────┘  └────────┘  └────────┘  └───┬────┘         │ │ │
│  │  │                                                        │              │ │ │
│  │  │   ┌────────┐  ┌────────┐  ┌────────┐  ┌────────┐      │              │ │ │
│  │  │   │  5A'   │─▶│  5B'   │─▶│  5C'   │─▶│  5D'   │──────┘              │ │ │
│  │  │   │ MECH   │  │ ELECT  │  │ OPTICAL│  │ CLOSE  │   (Parallel Line)   │ │ │
│  │  │   │ 60min  │  │ 45min  │  │ 30min  │  │ 30min  │                     │ │ │
│  │  │   └────────┘  └────────┘  └────────┘  └────────┘                     │ │ │
│  │  │                                                                        │ │ │
│  │  └────────────────────────────────────────────────────────────────────────┘ │ │
│  │                                      │                                       │ │
│  │                                      ▼                                       │ │
│  │  FINAL PROCESSING AREA (50 m²)                                              │ │
│  │  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐     │ │
│  │  │  WS-06A  │  │  WS-06B  │  │  WS-07A  │  │  WS-07B  │  │  WS-08   │     │ │
│  │  │ CALIBR   │  │ CALIBR   │  │  TEST    │  │  TEST    │  │ PACKING  │     │ │
│  │  │   #1     │  │   #2     │  │   #1     │  │   #2     │  │          │     │ │
│  │  └──────────┘  └──────────┘  └──────────┘  └──────────┘  └────┬─────┘     │ │
│  │                                                                │           │ │
│  │                                                                ▼           │ │
│  │                                                        [SHIPPING DOCK]    │ │
│  │                                                                           │ │
│  └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│  FRP CONFIGURATION:                                                            │
│  • 2× Parallel assembly lines                                                  │
│  • 2× Calibration stations                                                     │
│  • 2× Test stations                                                            │
│  • Takt time: 4 hours/unit (2 units/day from combined lines)                  │
│  • Workers: 8 direct + 2 support                                               │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 6. EQUIPMENT & TOOLING

## 6.1 Equipment List by Station

| Station | Equipment | Qty | Unit Cost | Total |
|---------|-----------|-----|-----------|-------|
| **WS-01 Receiving** | | | | |
| | Digital caliper 150mm | 2 | $50 | $100 |
| | Digital scale 5kg | 1 | $100 | $100 |
| | Magnifying lamp | 1 | $80 | $80 |
| | Barcode scanner | 1 | $150 | $150 |
| **WS-03 Optical** | | | | |
| | Laminar flow hood | 1 | $3,000 | $3,000 |
| | Stereo microscope | 1 | $800 | $800 |
| | UV curing lamp | 1 | $200 | $200 |
| | Optical alignment fixture | 1 | $500 | $500 |
| **WS-04 Electronics** | | | | |
| | ESD workbench | 1 | $500 | $500 |
| | ESD monitor | 1 | $150 | $150 |
| | DC power supply | 1 | $200 | $200 |
| | Oscilloscope 100MHz | 1 | $400 | $400 |
| | Soldering station | 1 | $300 | $300 |
| **WS-05 Assembly** | | | | |
| | Assembly workbench (4) | 4 | $300 | $1,200 |
| | Torque screwdriver set | 4 | $150 | $600 |
| | Hand tools set | 4 | $100 | $400 |
| **WS-06 Calibration** | | | | |
| | Calibration PC | 1 | $800 | $800 |
| | IMU turntable | 1 | $1,500 | $1,500 |
| | Boresight target system | 1 | $500 | $500 |
| **WS-07 Test** | | | | |
| | Functional test fixture | 1 | $500 | $500 |
| | Power analyzer | 1 | $300 | $300 |
| | AI test target display | 1 | $1,000 | $1,000 |
| | IP65 spray test chamber | 1 | $800 | $800 |
| | Test PC + software | 1 | $1,000 | $1,000 |
| **WS-08 Packing** | | | | |
| | Packing bench | 1 | $200 | $200 |
| | Label printer | 1 | $300 | $300 |
| | | | | |
| **TOTAL EQUIPMENT (LRIP)** | | | | **$15,580** |

## 6.2 Tooling & Fixtures

| Fixture ID | Name | Purpose | Cost |
|------------|------|---------|------|
| VS-FIX-001 | Functional Test Jig | ATP electrical test | $500 |
| VS-FIX-002 | Optical Alignment Fixture | Beam combiner setup | $500 |
| VS-FIX-003 | IMU Calibration Turntable | 6-axis calibration | $1,500 |
| VS-FIX-004 | Boresight Target Board | Optical alignment | $300 |
| VS-FIX-005 | IP65 Spray Chamber | Seal test | $800 |
| VS-FIX-006 | Assembly Holding Fixture | Main assembly | $200 |
| VS-FIX-007 | Cable Routing Guide | Wire harness | $100 |
| VS-FIX-008 | Torque Verification Block | Fastener check | $150 |
| **TOTAL FIXTURES** | | | **$4,050** |

---

# 7. QUALITY CONTROL INTEGRATION

## 7.1 In-Process Inspection Points

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    QUALITY CONTROL INTEGRATION                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  PROCESS FLOW WITH QC GATES                                                        │
│                                                                                     │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐          │
│  │RECEIVING│───▶│ KITTING │───▶│SUB-ASSY │───▶│MAIN ASSY│───▶│  FINAL  │          │
│  └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘    └────┬────┘          │
│       │              │              │              │              │                 │
│       ▼              ▼              ▼              ▼              ▼                 │
│  ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐    ┌─────────┐          │
│  │  IQC    │    │KIT CHECK│    │SUB CHECK│    │FUNC TEST│    │   ATP   │          │
│  │         │    │         │    │         │    │         │    │         │          │
│  │ • Dims  │    │ • Count │    │ • Visual│    │ • Power │    │ • Full  │          │
│  │ • Visual│    │ • P/N   │    │ • Elect │    │ • Boot  │    │   test  │          │
│  │ • Certs │    │ • Lot   │    │ • Align │    │ • Torque│    │ • IP65  │          │
│  └─────────┘    └─────────┘    └─────────┘    └─────────┘    └─────────┘          │
│       │              │              │              │              │                 │
│   HOLD POINT     VERIFY        HOLD POINT     VERIFY         HOLD POINT           │
│   (100% IQC)     (100%)       (100% check)    (100%)        (100% ATP)            │
│                                                                                     │
│  INSPECTION CRITERIA:                                                              │
│  ═══════════════════════════════════════════════════════════════════════════════  │
│                                                                                     │
│  IQC (Incoming):                                                                   │
│  • Mechanical: Dimensions per drawing, surface finish                              │
│  • Electronics: Visual, power-on test for Jetson/PCB                              │
│  • Optical: Visual cleanliness, no scratches                                       │
│                                                                                     │
│  Sub-Assembly Check:                                                               │
│  • Optical: Alignment within 0.5°, no dust                                        │
│  • Electronics: All rails within spec, camera image OK                            │
│                                                                                     │
│  Functional Test (after main assembly):                                            │
│  • Power on/off sequence                                                           │
│  • All functions operational                                                       │
│  • Torque verification (sampling)                                                  │
│                                                                                     │
│  ATP (Final):                                                                      │
│  • Full acceptance test per VS-ATP-001                                            │
│  • IP65 seal test                                                                  │
│  • AI detection test                                                               │
│  • Data logging and certificate                                                    │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 7.2 Defect Categories and Response

| Category | Description | Response | Escalation |
|----------|-------------|----------|------------|
| **Critical** | Safety, function failure | Stop line, NCR | Engineering |
| **Major** | Performance degradation | Rework, NCR | QC Manager |
| **Minor** | Cosmetic, documentation | Rework or accept | Technician |

## 7.3 SPC Control Points

| Parameter | Station | Method | Frequency | Limits |
|-----------|---------|--------|-----------|--------|
| Bore alignment | WS-06 | Measurement | 100% | ±1 MOA |
| Power consumption | WS-07 | Test | 100% | <3A active |
| Detection rate | WS-07 | Test | 100% | >95% |
| Battery voltage | WS-07 | Test | 100% | 7.0-8.4V |
| Weight | WS-08 | Scale | 100% | 580 ±20g |

---

# 8. MATERIAL FLOW & INVENTORY

## 8.1 Inventory Strategy

| Category | Strategy | Buffer | Reorder Point |
|----------|----------|--------|---------------|
| **Jetson Nano** | MRP, safety stock | 2 weeks | 8 units |
| **Camera modules** | MRP, safety stock | 2 weeks | 8 units |
| **CNC parts** | Kanban, 2-bin | 10 sets | 5 sets |
| **PCBs** | Kanban, 2-bin | 15 pcs | 8 pcs |
| **Optical components** | MRP, long lead | 3 weeks | Per forecast |
| **Fasteners** | Kanban, bulk | 50 sets | 25 sets |
| **Consumables** | Kanban, bulk | 1 month | 50% level |

## 8.2 Kit Configuration

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    KIT CONFIGURATION (1 UNIT)                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐  │
│  │                         MASTER KIT TRAY                                      │  │
│  │                                                                              │  │
│  │   ┌──────────────┐  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐   │  │
│  │   │  MECHANICAL  │  │  ELECTRONIC  │  │   OPTICAL    │  │  HARDWARE    │   │  │
│  │   │    TRAY      │  │    TRAY      │  │    TRAY      │  │    BAG       │   │  │
│  │   │              │  │   (ESD)      │  │   (Clean)    │  │              │   │  │
│  │   │ • Housing    │  │ • Jetson     │  │ • Combiner   │  │ • Fasteners  │   │  │
│  │   │ • Covers     │  │ • Carrier PCB│  │ • Collimator │  │ • O-rings    │   │  │
│  │   │ • Brackets   │  │ • Camera     │  │ • OLED       │  │ • Thermal    │   │  │
│  │   │ • Clamp      │  │ • Battery    │  │ • Window     │  │ • Adhesive   │   │  │
│  │   │ • Heatsink   │  │ • Harness    │  │ • Filter     │  │              │   │  │
│  │   │              │  │ • Solenoid   │  │              │  │              │   │  │
│  │   └──────────────┘  └──────────────┘  └──────────────┘  └──────────────┘   │  │
│  │                                                                              │  │
│  │   ┌──────────────────────────────────────────────────────────────────────┐  │  │
│  │   │  KIT LABEL: VS-KIT-[SERIAL]  |  Date: ____  |  Kitted by: ____      │  │  │
│  │   └──────────────────────────────────────────────────────────────────────┘  │  │
│  │                                                                              │  │
│  └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 9. WORKFORCE PLANNING

## 9.1 Staffing by Phase

| Role | Pilot | LRIP | FRP | Skills Required |
|------|-------|------|-----|-----------------|
| Production Manager | 0.2 | 0.5 | 1.0 | Management, planning |
| Quality Engineer | 0.2 | 0.5 | 1.0 | QC, statistics |
| Assembly Technician | 1 | 2 | 4 | Mechanical assembly |
| Electronics Technician | 0.5 | 1 | 2 | ESD handling, soldering |
| Optical Technician | 0.5 | 1 | 1 | Clean room, precision |
| Calibration Tech | 0.5 | 1 | 2 | Instruments, software |
| Test Technician | 0.5 | 1 | 2 | Test procedures |
| Material Handler | 0.2 | 0.5 | 1 | Inventory, kitting |
| **TOTAL FTE** | **3.6** | **7.5** | **14** | |

## 9.2 Training Matrix

| Skill | Training Duration | Certification |
|-------|-------------------|---------------|
| ESD Handling | 2 hours | Annual |
| IPC-A-610 Workmanship | 16 hours | 2 years |
| Optical Assembly | 40 hours | Practical test |
| Calibration | 24 hours | Practical test |
| ATP Execution | 8 hours | Practical test |
| Soldering (J-STD-001) | 24 hours | 2 years |

---

# 10. PRODUCTION METRICS & KPIs

## 10.1 Key Performance Indicators

| KPI | Definition | Target LRIP | Target FRP |
|-----|------------|-------------|------------|
| **First Pass Yield** | Units passing ATP first time | >95% | >98% |
| **Throughput** | Units completed per day | 0.4 | 2.0 |
| **Cycle Time** | Total time per unit | 8 hrs | 4 hrs |
| **On-Time Delivery** | % shipped on schedule | >95% | >98% |
| **Defect Rate** | Defects per unit | <0.5 | <0.2 |
| **Inventory Turns** | Annual turns | 6 | 12 |
| **Labor Efficiency** | Actual vs standard time | >85% | >90% |
| **Equipment OEE** | Overall equipment effectiveness | >70% | >85% |

## 10.2 Production Dashboard

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE PRODUCTION DASHBOARD                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  TODAY'S STATUS                           MONTH-TO-DATE                            │
│  ═══════════════                          ═══════════════                          │
│                                                                                     │
│  Units Completed:  [██████████░░] 2/2     Completed:    [████████░░░░] 18/25      │
│  First Pass Yield: [████████████] 100%    FPY Average:  [██████████░░] 96%        │
│  On Schedule:      [████████████] YES     On-Time:      [██████████░░] 94%        │
│                                                                                     │
│  STATION STATUS                                                                    │
│  ══════════════                                                                    │
│  WS-01 Receiving:  🟢 IDLE                                                         │
│  WS-02 Kitting:    🟡 IN PROGRESS (Kit #19)                                       │
│  WS-03 Optical:    🟢 COMPLETE                                                    │
│  WS-04 Elect:      🟢 COMPLETE                                                    │
│  WS-05 Assembly:   🟡 IN PROGRESS (Unit #18)                                      │
│  WS-06 Calibration:🟢 COMPLETE                                                    │
│  WS-07 Test:       🟡 IN PROGRESS (Unit #17)                                      │
│  WS-08 Packing:    🟢 READY                                                       │
│                                                                                     │
│  QUALITY ALERTS                            INVENTORY ALERTS                        │
│  ══════════════                            ════════════════                        │
│  🔴 NCR #003: IMU cal fail (Unit #15)     ⚠️ Jetson Nano: 6 remaining            │
│  🟡 Minor: Cosmetic scratch (Unit #16)    ⚠️ Beam combiner: Reorder needed        │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 11. SCALE-UP ROADMAP

## 11.1 Phase Transition Plan

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    PRODUCTION SCALE-UP ROADMAP                                      │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  PHASE 0: PROTOTYPE (Q1 2026)                                                      │
│  ═════════════════════════════                                                      │
│  Volume: 3 units                                                                    │
│  Location: Engineering lab                                                          │
│  Staff: Engineering team                                                            │
│  Focus: Design validation                                                          │
│                                                                                     │
│           │                                                                         │
│           ▼  Gate: Design freeze, ATP procedure validated                          │
│                                                                                     │
│  PHASE 1: PILOT (Q3-Q4 2026)                                                       │
│  ═════════════════════════════                                                      │
│  Volume: 20 units                                                                   │
│  Location: Pilot production area (20 m²)                                           │
│  Staff: 2-3 FTE + engineering support                                              │
│  Focus: Process validation, training                                               │
│  Investment: $20,000 (equipment, fixtures)                                         │
│                                                                                     │
│           │                                                                         │
│           ▼  Gate: FPY >90%, process documented, training complete                 │
│                                                                                     │
│  PHASE 2: LRIP-1 (2027)                                                            │
│  ═════════════════════════════                                                      │
│  Volume: 100 units/year                                                            │
│  Location: Dedicated production area (80 m²)                                       │
│  Staff: 4-5 FTE                                                                    │
│  Focus: Steady state production, cost reduction                                    │
│  Investment: $30,000 (additional equipment)                                        │
│                                                                                     │
│           │                                                                         │
│           ▼  Gate: FPY >95%, customer acceptance, cost target met                  │
│                                                                                     │
│  PHASE 3: LRIP-2 (2028)                                                            │
│  ═════════════════════════════                                                      │
│  Volume: 200 units/year                                                            │
│  Location: Expanded area (120 m²)                                                  │
│  Staff: 6-8 FTE                                                                    │
│  Focus: Capacity expansion, automation opportunities                               │
│  Investment: $50,000 (line expansion)                                              │
│                                                                                     │
│           │                                                                         │
│           ▼  Gate: Demand forecast supports FRP, automation ROI positive           │
│                                                                                     │
│  PHASE 4: FRP (2029+)                                                              │
│  ═════════════════════════════                                                      │
│  Volume: 500 units/year                                                            │
│  Location: Full production facility (200 m²)                                       │
│  Staff: 12-15 FTE                                                                  │
│  Focus: Efficiency, automation, export                                             │
│  Investment: $100,000+ (automation, second line)                                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 11.2 Automation Opportunities

| Process | Current | Automation Option | Volume Trigger | ROI |
|---------|---------|-------------------|----------------|-----|
| Firmware load | Manual USB | Auto programmer | 200/yr | 1 year |
| Functional test | Manual | Auto test system | 300/yr | 2 years |
| Labeling | Manual | Auto printer/apply | 200/yr | 1 year |
| Calibration | Semi-auto | Full auto station | 500/yr | 3 years |
| Optical alignment | Manual | Vision-guided | 500/yr | 3 years |

---

# 12. COST ANALYSIS

## 12.1 Unit Cost by Volume

| Cost Element | Prototype | LRIP (100) | FRP (500) |
|--------------|-----------|------------|-----------|
| **BOM Cost** | $3,384 | $3,000 | $2,600 |
| **Labor** (direct) | $400 | $300 | $200 |
| **Overhead** | $511 | $400 | $300 |
| **Quality/Test** | $0 | $100 | $100 |
| **UNIT COST** | **$4,295** | **$3,800** | **$3,200** |
| **Reduction** | - | -12% | -26% |

## 12.2 Cost Reduction Drivers

| Driver | Mechanism | Savings |
|--------|-----------|---------|
| **Volume purchasing** | Jetson, camera bulk pricing | 10-15% on BOM |
| **Learning curve** | Assembly efficiency improvement | 20-30% on labor |
| **Process optimization** | Reduced rework, better yield | 5-10% overall |
| **Automation** | Firmware, test automation | 10-15% on labor |
| **Local sourcing** | More Vietnamese content | 5-10% on import |

## 12.3 Investment Summary

| Phase | Equipment | Fixtures | Facility | Training | Total |
|-------|-----------|----------|----------|----------|-------|
| Pilot | $10,000 | $4,000 | $5,000 | $2,000 | $21,000 |
| LRIP-1 | $15,000 | $2,000 | $10,000 | $3,000 | $30,000 |
| LRIP-2 | $20,000 | $3,000 | $20,000 | $5,000 | $48,000 |
| FRP | $50,000 | $10,000 | $30,000 | $10,000 | $100,000 |
| **TOTAL** | **$95,000** | **$19,000** | **$65,000** | **$20,000** | **$199,000** |

---

# 13. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Design Team | Initial release |

---

# APPENDIX: WORKSTATION CHECKLIST

## Daily Production Startup Checklist

```
╔═══════════════════════════════════════════════════════════════════════════════════╗
║                    DAILY PRODUCTION STARTUP CHECKLIST                             ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║  Date: ____________  Shift: ____________  Supervisor: ____________               ║
╠═══════════════════════════════════════════════════════════════════════════════════╣
║                                                                                   ║
║  GENERAL                                                                          ║
║  □ Previous shift handover reviewed                                              ║
║  □ Production schedule confirmed                                                 ║
║  □ All personnel present and qualified                                           ║
║  □ Safety equipment available                                                    ║
║                                                                                   ║
║  WS-03 OPTICAL                                                                   ║
║  □ Laminar flow hood running (15 min warm-up)                                   ║
║  □ Clean room supplies stocked                                                   ║
║  □ UV lamp functional                                                            ║
║                                                                                   ║
║  WS-04 ELECTRONICS                                                               ║
║  □ ESD monitor verified (wrist strap test)                                      ║
║  □ Equipment calibration current                                                 ║
║  □ Programming station ready                                                     ║
║                                                                                   ║
║  WS-06 CALIBRATION                                                               ║
║  □ Calibration fixtures verified                                                 ║
║  □ Reference targets in place                                                    ║
║  □ Software loaded and ready                                                     ║
║                                                                                   ║
║  WS-07 TEST                                                                      ║
║  □ Test equipment powered on                                                     ║
║  □ Test fixtures connected                                                       ║
║  □ IP65 chamber ready                                                            ║
║                                                                                   ║
║  MATERIALS                                                                        ║
║  □ Kits available for today's schedule                                          ║
║  □ Consumables stocked                                                           ║
║  □ No material shortages anticipated                                             ║
║                                                                                   ║
║  Approved to Start: □ YES  □ NO (explain: _________________________________)   ║
║                                                                                   ║
║  Signature: ________________________  Time: ____________                         ║
║                                                                                   ║
╚═══════════════════════════════════════════════════════════════════════════════════╝
```

---

*V-SMASH-LITE Manufacturing Process Flow v1.0*
*Production Line Design for Scale-Up*

**END OF DOCUMENT**
