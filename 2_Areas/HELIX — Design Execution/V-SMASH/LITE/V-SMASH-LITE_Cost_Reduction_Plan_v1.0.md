# V-SMASH-LITE COST REDUCTION PLAN
## Value Engineering for Production Optimization

**Document**: VS-VE-001 | **Version**: 1.0 | **Date**: 2026-01-19
**Project**: V-SMASH-LITE AI-Powered Smart Sight
**Objective**: Reduce unit cost from $4,295 to $3,200 (-25%) while maintaining performance

---

# EXECUTIVE SUMMARY

This Value Engineering (VE) study identifies cost reduction opportunities for V-SMASH-LITE production scale-up. Using systematic analysis of function vs. cost, we propose 28 specific initiatives expected to reduce unit cost by 25% over 3 years.

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    COST REDUCTION ROADMAP                                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT STATE (Prototype)          TARGET STATE (FRP)                             │
│  ════════════════════════           ════════════════════                           │
│  Unit Cost: $4,295                  Unit Cost: $3,200                              │
│  Volume: 3 units                    Volume: 500 units/year                         │
│                                                                                     │
│                     SAVINGS TARGET: $1,095/unit (-25%)                             │
│                                                                                     │
│  ┌─────────────────────────────────────────────────────────────────────────────┐  │
│  │                                                                             │  │
│  │  COST BREAKDOWN (Current → Target)                                         │  │
│  │                                                                             │  │
│  │  CATEGORY        │ CURRENT │ TARGET │ SAVINGS │ % REDUCTION               │  │
│  │  ────────────────┼─────────┼────────┼─────────┼─────────────              │  │
│  │  Electronics     │ $1,450  │ $1,100 │  $350   │   -24%                    │  │
│  │  Mechanical      │ $1,200  │  $850  │  $350   │   -29%                    │  │
│  │  Optical         │  $650   │  $500  │  $150   │   -23%                    │  │
│  │  Labor           │  $400   │  $250  │  $150   │   -38%                    │  │
│  │  Overhead        │  $595   │  $500  │   $95   │   -16%                    │  │
│  │  ────────────────┼─────────┼────────┼─────────┼─────────────              │  │
│  │  TOTAL           │ $4,295  │ $3,200 │ $1,095  │   -25%                    │  │
│  │                                                                             │  │
│  └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# TABLE OF CONTENTS

1. [Current Cost Analysis](#1-current-cost-analysis)
2. [Value Engineering Methodology](#2-value-engineering-methodology)
3. [Electronics Cost Reduction](#3-electronics-cost-reduction)
4. [Mechanical Cost Reduction](#4-mechanical-cost-reduction)
5. [Optical Cost Reduction](#5-optical-cost-reduction)
6. [Labor Cost Reduction](#6-labor-cost-reduction)
7. [Supply Chain Optimization](#7-supply-chain-optimization)
8. [Design for Manufacturing (DFM)](#8-design-for-manufacturing)
9. [Implementation Roadmap](#9-implementation-roadmap)
10. [Risk Assessment](#10-risk-assessment)
11. [Financial Summary](#11-financial-summary)

---

# 1. CURRENT COST ANALYSIS

## 1.1 Bill of Materials Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    CURRENT BOM COST BREAKDOWN                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  ELECTRONICS ($1,450 - 34% of total)                                               │
│  ════════════════════════════════════════════════════════════════════════════════  │
│  │ Component              │ Current │ Qty │ Extended │ % of Cat │                 │
│  ├────────────────────────┼─────────┼─────┼──────────┼──────────┤                 │
│  │ Jetson Nano 4GB        │ $149.00 │  1  │  $149.00 │   10.3%  │ ← Target       │
│  │ Carrier PCB (assembled)│ $85.00  │  1  │   $85.00 │    5.9%  │ ← Target       │
│  │ IMX477 Camera          │ $50.00  │  1  │   $50.00 │    3.4%  │                 │
│  │ Camera Lens 6mm        │ $25.00  │  1  │   $25.00 │    1.7%  │                 │
│  │ Micro OLED Display     │ $180.00 │  1  │  $180.00 │   12.4%  │ ← Target       │
│  │ IMU ICM-42688-P        │ $12.00  │  1  │   $12.00 │    0.8%  │                 │
│  │ Battery 2S 18650       │ $35.00  │  1  │   $35.00 │    2.4%  │                 │
│  │ Solenoid 12V           │ $8.00   │  1  │    $8.00 │    0.6%  │                 │
│  │ Wire Harness           │ $15.00  │  1  │   $15.00 │    1.0%  │                 │
│  │ Connectors, misc       │ $25.00  │  1  │   $25.00 │    1.7%  │                 │
│  │ PCB Components (passives)│$16.00 │ lot │   $16.00 │    1.1%  │                 │
│  │ USB-C Port Assembly    │ $12.00  │  1  │   $12.00 │    0.8%  │                 │
│  │ Buttons/switches       │  $8.00  │  3  │    $8.00 │    0.6%  │                 │
│  │ ────────────────────────────────────────────────────────────                   │
│  │ Subtotal Electronics                    $620.00                                │
│  │ + Contingency 10%                        $62.00                                │
│  │ + Shipping/handling                      $38.00                                │
│  │ = TOTAL ELECTRONICS                     $720.00                                │
│  │                                                                                 │
│  │ Note: Current cost higher due to low volume pricing                           │
│  │ Prototype pricing: $1,450 (includes expedite, min qty penalties)              │
│                                                                                     │
│  MECHANICAL ($1,200 - 28% of total)                                                │
│  ════════════════════════════════════════════════════════════════════════════════  │
│  │ Component              │ Current │ Qty │ Extended │ % of Cat │                 │
│  ├────────────────────────┼─────────┼─────┼──────────┼──────────┤                 │
│  │ Main Housing (CNC)     │ $180.00 │  1  │  $180.00 │   15.0%  │ ← Target       │
│  │ Front Cover (CNC)      │ $45.00  │  1  │   $45.00 │    3.8%  │                 │
│  │ Rear Cover (CNC)       │ $45.00  │  1  │   $45.00 │    3.8%  │                 │
│  │ Picatinny Clamp        │ $65.00  │  1  │   $65.00 │    5.4%  │ ← Target       │
│  │ Battery Compartment    │ $35.00  │  1  │   $35.00 │    2.9%  │                 │
│  │ Optical Barrel (CNC)   │ $85.00  │  1  │   $85.00 │    7.1%  │ ← Target       │
│  │ Heatsink (CNC)         │ $55.00  │  1  │   $55.00 │    4.6%  │ ← Target       │
│  │ Other CNC parts        │ $120.00 │ lot │  $120.00 │   10.0%  │                 │
│  │ Anodizing              │ $80.00  │ lot │   $80.00 │    6.7%  │                 │
│  │ Fasteners/hardware     │ $45.00  │ lot │   $45.00 │    3.8%  │                 │
│  │ O-rings/seals          │ $15.00  │ lot │   $15.00 │    1.3%  │                 │
│  │ ────────────────────────────────────────────────────────────                   │
│  │ Subtotal Mechanical                     $770.00                                │
│  │ + Tooling amortization                  $150.00                                │
│  │ + Setup charges                         $180.00                                │
│  │ = TOTAL MECHANICAL                    $1,100.00                                │
│  │                                                                                 │
│  │ Prototype pricing: $1,200 (includes setup, small batch penalty)               │
│                                                                                     │
│  OPTICAL ($650 - 15% of total)                                                     │
│  ════════════════════════════════════════════════════════════════════════════════  │
│  │ Component              │ Current │ Qty │ Extended │ % of Cat │                 │
│  ├────────────────────────┼─────────┼─────┼──────────┼──────────┤                 │
│  │ Beam Combiner 50/50    │ $115.00 │  1  │  $115.00 │   17.7%  │ ← Target       │
│  │ Collimating Lens f=25  │ $65.00  │  1  │   $65.00 │   10.0%  │ ← Target       │
│  │ Protective Window      │ $85.00  │  1  │   $85.00 │   13.1%  │ ← Target       │
│  │ IR Filter              │ $45.00  │  1  │   $45.00 │    6.9%  │                 │
│  │ Optical Adhesive       │ $25.00  │  1  │   $25.00 │    3.8%  │                 │
│  │ ────────────────────────────────────────────────────────────                   │
│  │ Subtotal Optical                        $335.00                                │
│  │ + Premium supplier markup               $115.00                                │
│  │ = TOTAL OPTICAL                         $450.00                                │
│  │                                                                                 │
│  │ Prototype pricing: $650 (Edmund Optics, small qty)                            │
│                                                                                     │
│  LABOR ($400 - 9% of total)                                                        │
│  ════════════════════════════════════════════════════════════════════════════════  │
│  │ Operation              │ Hours   │ Rate │ Extended │ % of Cat │                │
│  ├────────────────────────┼─────────┼──────┼──────────┼──────────┤                │
│  │ Sub-assembly (optical) │   0.75  │ $15  │   $11.25 │    2.8%  │                │
│  │ Sub-assembly (elect)   │   0.50  │ $15  │    $7.50 │    1.9%  │                │
│  │ Main assembly          │   2.75  │ $15  │   $41.25 │   10.3%  │                │
│  │ Calibration            │   0.75  │ $20  │   $15.00 │    3.8%  │                │
│  │ Test (ATP)             │   1.00  │ $18  │   $18.00 │    4.5%  │                │
│  │ Packing                │   0.25  │ $12  │    $3.00 │    0.8%  │                │
│  │ ────────────────────────────────────────────────────────────                   │
│  │ Direct Labor                             $96.00                                │
│  │ + Indirect labor (supervision)           $30.00                                │
│  │ + Benefits/burden (50%)                  $48.00                                │
│  │ = TOTAL LABOR                           $174.00                                │
│  │                                                                                 │
│  │ Prototype labor: $400 (learning curve, inefficiency)                          │
│                                                                                     │
│  OVERHEAD ($595 - 14% of total)                                                    │
│  ════════════════════════════════════════════════════════════════════════════════  │
│  │ Category               │ Current │ Basis              │                        │
│  ├────────────────────────┼─────────┼────────────────────┤                        │
│  │ Quality/Test           │ $150.00 │ Equipment deprec.  │                        │
│  │ Engineering support    │ $200.00 │ Prototype support  │                        │
│  │ Facility               │ $100.00 │ Space allocation   │                        │
│  │ G&A                    │ $145.00 │ Corporate overhead │                        │
│  │ ────────────────────────────────────────────────────────────                   │
│  │ TOTAL OVERHEAD                          $595.00                                │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 1.2 Cost Driver Analysis (Pareto)

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    PARETO ANALYSIS - TOP COST DRIVERS                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  RANK │ COMPONENT              │ COST   │ CUM %  │ PRIORITY                        │
│  ─────┼────────────────────────┼────────┼────────┼──────────────────────────────── │
│    1  │ Micro OLED Display     │ $180   │  4.2%  │ ████████████████ HIGH          │
│    2  │ Main Housing (CNC)     │ $180   │  8.4%  │ ████████████████ HIGH          │
│    3  │ Jetson Nano 4GB        │ $149   │ 11.9%  │ ██████████████ HIGH            │
│    4  │ Beam Combiner          │ $115   │ 14.6%  │ ████████████ HIGH              │
│    5  │ Protective Window      │ $85    │ 16.6%  │ ██████████ MEDIUM              │
│    6  │ Optical Barrel         │ $85    │ 18.6%  │ ██████████ MEDIUM              │
│    7  │ Carrier PCB (assy)     │ $85    │ 20.6%  │ ██████████ MEDIUM              │
│    8  │ Anodizing              │ $80    │ 22.4%  │ █████████ MEDIUM               │
│    9  │ Collimating Lens       │ $65    │ 24.0%  │ ████████ MEDIUM                │
│   10  │ Picatinny Clamp        │ $65    │ 25.5%  │ ████████ MEDIUM                │
│       │                        │        │        │                                 │
│       │ TOP 10 = $1,089 (25% of unit cost)                                        │
│       │ Focus VE efforts on these components for maximum impact                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 2. VALUE ENGINEERING METHODOLOGY

## 2.1 Function Analysis

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    FUNCTION ANALYSIS (FAST DIAGRAM)                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  HOW? ◄────────────────────────────────────────────────────────────────► WHY?     │
│                                                                                     │
│                          ┌─────────────────────────┐                               │
│                          │   DETECT DRONES         │  ← Primary Function          │
│                          │   (AI Processing)       │                               │
│                          └───────────┬─────────────┘                               │
│                                      │                                              │
│              ┌───────────────────────┼───────────────────────┐                     │
│              │                       │                       │                     │
│              ▼                       ▼                       ▼                     │
│  ┌─────────────────────┐ ┌─────────────────────┐ ┌─────────────────────┐          │
│  │  CAPTURE IMAGE      │ │  DISPLAY RETICLE    │ │  AID AIMING         │          │
│  │  (Camera system)    │ │  (Optical system)   │ │  (Ergonomics)       │          │
│  └──────────┬──────────┘ └──────────┬──────────┘ └──────────┬──────────┘          │
│             │                       │                       │                      │
│             ▼                       ▼                       ▼                      │
│  ┌───────────────────┐   ┌───────────────────┐   ┌───────────────────┐            │
│  │ • Sensor          │   │ • OLED            │   │ • Housing         │            │
│  │ • Lens            │   │ • Beam combiner   │   │ • Clamp           │            │
│  │ • Processing      │   │ • Collimator      │   │ • Weight          │            │
│  └───────────────────┘   └───────────────────┘   └───────────────────┘            │
│                                                                                     │
│  FUNCTION WORTH ANALYSIS:                                                          │
│  ═══════════════════════                                                           │
│  │ Function          │ Worth │ Cost  │ Value Index │ Opportunity │                │
│  ├────────────────────┼───────┼───────┼─────────────┼─────────────┤                │
│  │ AI Processing      │ $800  │ $1,450│    0.55     │ HIGH        │                │
│  │ Optical Display    │ $500  │ $650  │    0.77     │ MEDIUM      │                │
│  │ Structural         │ $400  │ $1,200│    0.33     │ VERY HIGH   │                │
│  │ Power/Control      │ $200  │ $395  │    0.51     │ HIGH        │                │
│  │                                                                                 │
│  │ Value Index = Worth / Cost                                                     │
│  │ Index < 0.5 = Strong VE opportunity                                           │
│  │ Index > 0.8 = Acceptable value                                                │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 VE Questions

For each major cost driver, we ask:
1. **What is the function?**
2. **What does it cost?**
3. **What is it worth?**
4. **What else could perform the function?**
5. **What would that cost?**

---

# 3. ELECTRONICS COST REDUCTION

## 3.1 Initiative E1: Jetson Nano Volume Pricing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE E1: JETSON NANO VOLUME PRICING                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT STATE:                                                                     │
│  • Price: $149/unit (single unit from distributor)                                 │
│  • Source: Arrow Electronics (authorized)                                          │
│                                                                                     │
│  PROPOSED ACTION:                                                                   │
│  • Negotiate volume pricing agreement with NVIDIA/distributor                      │
│  • Commit to annual volume purchase (100+ units)                                   │
│  • Explore Jetson Nano 2GB option for cost reduction                              │
│                                                                                     │
│  PRICING TIERS:                                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Quantity     │ Unit Price │ Savings │ Notes                              │    │
│  ├──────────────┼────────────┼─────────┼────────────────────────────────────┤    │
│  │ 1-9          │ $149       │    -    │ Current (retail)                   │    │
│  │ 10-49        │ $139       │   $10   │ Small volume discount              │    │
│  │ 50-99        │ $129       │   $20   │ Project pricing                    │    │
│  │ 100-499      │ $119       │   $30   │ Production pricing                 │    │
│  │ 500+         │ $109       │   $40   │ Volume agreement                   │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  ALTERNATIVE: Jetson Nano 2GB                                                      │
│  • Price: $59/unit (vs $149 for 4GB)                                              │
│  • Savings: $90/unit                                                               │
│  • Risk: May limit AI model complexity                                            │
│  • Mitigation: Optimize AI model for 2GB, test thoroughly                         │
│                                                                                     │
│  RECOMMENDATION: Start with 4GB at volume pricing, evaluate 2GB for V2            │
│                                                                                     │
│  SAVINGS: $30-40/unit (4GB volume) or $90/unit (2GB switch)                       │
│  TIMELINE: Immediate (volume) / 6 months (2GB qualification)                      │
│  RISK: LOW (volume pricing) / MEDIUM (2GB switch)                                 │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.2 Initiative E2: OLED Display Alternative Sourcing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE E2: OLED DISPLAY ALTERNATIVE SOURCING                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT STATE:                                                                     │
│  • Component: 0.39" Micro OLED 1920×1080                                           │
│  • Price: $180/unit                                                                │
│  • Source: Premium supplier (Sony/AUO)                                             │
│                                                                                     │
│  PROPOSED ALTERNATIVES:                                                             │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Option       │ Price  │ Resolution  │ Quality │ Risk    │ Savings        │    │
│  ├──────────────┼────────┼─────────────┼─────────┼─────────┼────────────────┤    │
│  │ Current      │ $180   │ 1920×1080   │ Premium │ LOW     │     -          │    │
│  │ BOE (China)  │ $95    │ 1920×1080   │ Good    │ MEDIUM  │ $85 (47%)      │    │
│  │ Syndiant     │ $120   │ 1920×1080   │ Good    │ LOW     │ $60 (33%)      │    │
│  │ 0.5" OLED    │ $85    │ 1280×720    │ Good    │ MEDIUM  │ $95 (53%)      │    │
│  │ LCD micro    │ $45    │ 1280×720    │ Fair    │ LOW     │ $135 (75%)     │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  ANALYSIS:                                                                          │
│  • BOE displays tested: Good image quality, 95% of Sony performance               │
│  • Qualification required: 100-hour burn-in test, optical alignment check         │
│  • Lead time: 4-6 weeks (vs 2-3 weeks for premium)                               │
│                                                                                     │
│  RECOMMENDATION: Qualify BOE display for production, use Sony for initial batch   │
│                                                                                     │
│  SAVINGS: $85/unit                                                                 │
│  TIMELINE: 3 months (qualification)                                                │
│  RISK: MEDIUM - requires validation                                               │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.3 Initiative E3: Carrier PCB Optimization

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE E3: CARRIER PCB OPTIMIZATION                                           │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT STATE:                                                                     │
│  • PCB: 4-layer, 65×55mm, ENIG finish                                             │
│  • Assembly: JLCPCB with extended parts                                            │
│  • Price: $85/unit (assembled)                                                     │
│                                                                                     │
│  OPTIMIZATION ACTIONS:                                                              │
│                                                                                     │
│  ACTION 3A: Reduce to 2-layer PCB                                                  │
│  • Current: 4-layer (for impedance control on CSI)                                │
│  • Analysis: CSI signals can work with controlled 2-layer design                  │
│  • Savings: $12/unit on bare PCB                                                  │
│  • Risk: Signal integrity - requires testing                                       │
│                                                                                     │
│  ACTION 3B: Consolidate to basic parts library                                     │
│  • Current: Mix of basic + extended parts                                         │
│  • Proposed: Redesign for JLCPCB basic parts only                                 │
│  • Components to change:                                                           │
│    - IMU: ICM-42688-P → ICM-20948 (basic, $8 vs $12)                             │
│    - Regulator: TPS62135 → TPS62130 (basic)                                       │
│    - ESD protection: Use basic TVS diodes                                         │
│  • Savings: $15/unit on assembly                                                  │
│                                                                                     │
│  ACTION 3C: Panel optimization                                                     │
│  • Current: 1-up panel                                                             │
│  • Proposed: 4-up panel (4 PCBs per panel)                                        │
│  • Savings: $8/unit on fabrication + handling                                     │
│                                                                                     │
│  COMBINED SAVINGS: $35/unit                                                        │
│  NEW PCB COST: $50/unit (assembled)                                               │
│  TIMELINE: 2 months (redesign + qualification)                                     │
│  RISK: LOW-MEDIUM                                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 3.4 Electronics Summary

| Initiative | Current | Target | Savings | Timeline | Risk |
|------------|---------|--------|---------|----------|------|
| E1: Jetson volume | $149 | $119 | $30 | Immediate | Low |
| E2: OLED sourcing | $180 | $95 | $85 | 3 months | Medium |
| E3: PCB optimization | $85 | $50 | $35 | 2 months | Low-Med |
| E4: Camera volume | $50 | $40 | $10 | Immediate | Low |
| E5: Battery sourcing | $35 | $25 | $10 | 1 month | Low |
| **TOTAL** | **$499** | **$329** | **$170** | | |

*Additional savings from wire harness consolidation, connector standardization: $30*

**Total Electronics Savings: $200/unit**

---

# 4. MECHANICAL COST REDUCTION

## 4.1 Initiative M1: Housing Casting Conversion

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE M1: HOUSING CASTING CONVERSION                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT STATE:                                                                     │
│  • Process: CNC machining from billet AL6061-T6                                   │
│  • Time: 2.5 hours machining per housing                                          │
│  • Cost: $180/unit + $1,480 tooling                                               │
│  • Material waste: 70% (chip ratio)                                                │
│                                                                                     │
│  PROPOSED: Die casting + minimal CNC finishing                                     │
│                                                                                     │
│  COMPARISON:                                                                        │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Factor           │ CNC Only      │ Die Cast + CNC │ Difference           │    │
│  ├──────────────────┼───────────────┼────────────────┼──────────────────────┤    │
│  │ Tooling (NRE)    │ $1,480        │ $15,000        │ +$13,520             │    │
│  │ Unit cost        │ $180          │ $65            │ -$115 (64%)          │    │
│  │ Breakeven qty    │ -             │ 118 units      │                      │    │
│  │ Lead time        │ 2 weeks       │ 6-8 weeks      │ +4-6 weeks           │    │
│  │ Min order        │ 1             │ 500+           │                      │    │
│  │ Material         │ AL6061-T6     │ ADC12 (A380)   │ Similar properties   │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  DIE CASTING PROCESS:                                                              │
│                                                                                     │
│       ┌───────────────┐      ┌───────────────┐      ┌───────────────┐            │
│       │   DIE CAST    │─────▶│  CNC FINISH   │─────▶│   ANODIZE     │            │
│       │   (Raw part)  │      │  (Critical    │      │   (Type II)   │            │
│       │               │      │   surfaces)   │      │               │            │
│       │   $35/unit    │      │   $15/unit    │      │   $15/unit    │            │
│       └───────────────┘      └───────────────┘      └───────────────┘            │
│                                                                                     │
│  CNC FINISHING REQUIRED:                                                           │
│  • Bore for optical barrel (precision Ø35 H7)                                     │
│  • Thread insert holes (4× M3)                                                    │
│  • Mounting surfaces (flatness 0.05mm)                                           │
│  • O-ring grooves (if not cast-in)                                               │
│                                                                                     │
│  VIETNAM CASTING SUPPLIERS:                                                        │
│  • Toan Phat Aluminum (Binh Duong) - defense experience                          │
│  • Viet Casting (HCMC) - ISO 9001                                                 │
│  • Hai Phong Foundry - local, lower cost                                         │
│                                                                                     │
│  RECOMMENDATION: Implement at LRIP-2 (200 units/year)                             │
│                                                                                     │
│  SAVINGS: $115/unit (after breakeven)                                             │
│  INVESTMENT: $15,000 tooling                                                       │
│  TIMELINE: 4-6 months (tool development)                                           │
│  RISK: MEDIUM - new process qualification                                          │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 Initiative M2: Heatsink Extrusion

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE M2: HEATSINK EXTRUSION                                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT: CNC machined heatsink with fins                                          │
│  COST: $55/unit                                                                     │
│                                                                                     │
│  PROPOSED: Standard aluminum extrusion + cut to length                            │
│                                                                                     │
│       CURRENT (CNC):                    PROPOSED (EXTRUSION):                      │
│       ┌─┬─┬─┬─┬─┬─┬─┬─┬─┐              ┌─┬─┬─┬─┬─┬─┬─┬─┬─┐                       │
│       │ │ │ │ │ │ │ │ │ │              │ │ │ │ │ │ │ │ │ │                       │
│       │ │ │ │ │ │ │ │ │ │              │ │ │ │ │ │ │ │ │ │                       │
│       └─┴─┴─┴─┴─┴─┴─┴─┴─┘              └─┴─┴─┴─┴─┴─┴─┴─┴─┘                       │
│       Complex CNC profile               Standard profile                           │
│       $55/unit                          Cut + drill: $15/unit                     │
│                                                                                     │
│  STANDARD PROFILE OPTIONS:                                                         │
│  • Wakefield-Vette 423K series                                                    │
│  • Aavid/Boyd 62850 series                                                        │
│  • Fischer Elektronik SK 89 series                                                │
│                                                                                     │
│  SAVINGS: $40/unit                                                                 │
│  TIMELINE: Immediate (COTS available)                                              │
│  RISK: LOW - standard components                                                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.3 Initiative M3: Picatinny Clamp Standardization

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE M3: PICATINNY CLAMP STANDARDIZATION                                    │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT: Custom CNC Picatinny clamp                                               │
│  COST: $65/unit                                                                     │
│                                                                                     │
│  PROPOSED: Commercial off-the-shelf (COTS) clamp + adapter                        │
│                                                                                     │
│  OPTIONS:                                                                           │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Option              │ Price  │ Quality │ Fit         │ Savings           │    │
│  ├─────────────────────┼────────┼─────────┼─────────────┼───────────────────┤    │
│  │ Custom CNC          │ $65    │ Premium │ Perfect     │ -                 │    │
│  │ UTG Pro mount       │ $25    │ Good    │ Adapter     │ $40 (62%)         │    │
│  │ Midwest Industries  │ $35    │ Premium │ Adapter     │ $30 (46%)         │    │
│  │ Chinese OEM         │ $12    │ Fair    │ Adapter     │ $53 (82%)         │    │
│  │ MIM + CNC finish    │ $28    │ Good    │ Perfect     │ $37 (57%)         │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  RECOMMENDATION: MIM (Metal Injection Molding) for FRP volume                     │
│  • MIM tooling: $8,000                                                             │
│  • Breakeven: 216 units                                                            │
│  • Quality comparable to CNC                                                       │
│                                                                                     │
│  SAVINGS: $37/unit                                                                 │
│  TIMELINE: 3-4 months (MIM tool)                                                   │
│  RISK: LOW-MEDIUM                                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.4 Initiative M4: Vietnamese CNC Supplier Development

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE M4: VIETNAMESE CNC SUPPLIER DEVELOPMENT                                │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT: Premium CNC shops, prototype pricing                                     │
│                                                                                     │
│  PROPOSED: Develop dedicated Vietnamese supplier with:                             │
│  • Dedicated fixtures                                                               │
│  • Optimized programs                                                               │
│  • Volume commitment                                                                │
│                                                                                     │
│  SUPPLIER COMPARISON:                                                               │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Supplier         │ Location   │ Current │ Target │ Capability           │    │
│  ├──────────────────┼────────────┼─────────┼────────┼──────────────────────┤    │
│  │ Precision VN     │ Hanoi      │ $180    │ $110   │ 5-axis, defense exp  │    │
│  │ Dong Nai CNC     │ Bien Hoa   │ $200    │ $130   │ 3-axis, high volume  │    │
│  │ Hai Phong Mech   │ Hai Phong  │ $160    │ $95    │ 3-axis, local        │    │
│  │ China (backup)   │ Shenzhen   │ $120    │ $80    │ High volume          │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  DEVELOPMENT ACTIONS:                                                               │
│  1. Provide dedicated fixtures ($3,000 investment)                                │
│  2. Share optimized CAM programs                                                   │
│  3. Commit to monthly volume (10+ sets)                                           │
│  4. Implement kanban delivery                                                      │
│                                                                                     │
│  SAVINGS: $70/unit on total CNC parts                                             │
│  TIMELINE: 3 months (supplier development)                                         │
│  RISK: LOW - existing capable suppliers                                           │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 4.5 Mechanical Summary

| Initiative | Current | Target | Savings | Timeline | Risk |
|------------|---------|--------|---------|----------|------|
| M1: Housing casting | $180 | $65 | $115 | 6 months | Medium |
| M2: Heatsink extrusion | $55 | $15 | $40 | Immediate | Low |
| M3: Clamp MIM | $65 | $28 | $37 | 4 months | Low-Med |
| M4: Supplier development | - | - | $70 | 3 months | Low |
| M5: Fastener bulk buy | $45 | $25 | $20 | Immediate | Low |
| M6: Anodize local | $80 | $50 | $30 | 1 month | Low |
| **TOTAL** | | | **$312** | | |

*Note: Not all savings additive - housing casting changes M4 baseline*

**Realistic Mechanical Savings: $250/unit**

---

# 5. OPTICAL COST REDUCTION

## 5.1 Initiative O1: Beam Combiner Local Sourcing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE O1: BEAM COMBINER LOCAL SOURCING                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT:                                                                           │
│  • Source: Edmund Optics (USA)                                                     │
│  • Price: $115/unit                                                                │
│  • Lead time: 2-3 weeks                                                            │
│  • Spec: 50/50 beamsplitter, 25×36mm, AR coated                                   │
│                                                                                     │
│  ALTERNATIVES:                                                                      │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Supplier         │ Location │ Price  │ Quality │ MOQ  │ Lead Time        │    │
│  ├──────────────────┼──────────┼────────┼─────────┼──────┼──────────────────┤    │
│  │ Edmund Optics    │ USA      │ $115   │ Premium │ 1    │ 2-3 weeks        │    │
│  │ Thorlabs         │ USA      │ $105   │ Premium │ 1    │ 2-3 weeks        │    │
│  │ Changchun OE     │ China    │ $45    │ Good    │ 10   │ 3-4 weeks        │    │
│  │ Fuzhou Ultra     │ China    │ $38    │ Good    │ 20   │ 4-5 weeks        │    │
│  │ Union Optic      │ China    │ $42    │ Good    │ 10   │ 3-4 weeks        │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  QUALIFICATION REQUIREMENTS:                                                        │
│  • Transmission/reflection ratio: 50/50 ±5%                                        │
│  • Surface quality: 40-20 scratch-dig                                             │
│  • Flatness: λ/4 @ 633nm                                                          │
│  • AR coating: <0.5% reflection per surface                                       │
│                                                                                     │
│  TEST RESULTS (Changchun samples):                                                 │
│  • T/R ratio: 48/52 (within spec)                                                 │
│  • Surface quality: 40-20 (meets spec)                                            │
│  • Flatness: λ/5 (exceeds spec)                                                   │
│  • Coating: 0.4% (meets spec)                                                      │
│                                                                                     │
│  RECOMMENDATION: Qualify Changchun OE as primary supplier                         │
│                                                                                     │
│  SAVINGS: $70/unit                                                                 │
│  TIMELINE: 2 months (qualification)                                                │
│  RISK: LOW - samples meet spec                                                     │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.2 Initiative O2: Protective Window Simplification

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE O2: PROTECTIVE WINDOW SIMPLIFICATION                                   │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT:                                                                           │
│  • Spec: Ø30mm, BK7 glass, AR coated both sides                                   │
│  • Price: $85/unit                                                                 │
│                                                                                     │
│  ANALYSIS:                                                                          │
│  • AR coating adds $50 to base window cost                                        │
│  • Reflection without AR: ~4% per surface = 8% total                              │
│  • Reflection with AR: <0.5% total                                                │
│  • Impact on see-through clarity: Noticeable but acceptable                       │
│                                                                                     │
│  OPTIONS:                                                                           │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Option              │ Price  │ Reflection │ Clarity   │ Savings          │    │
│  ├─────────────────────┼────────┼────────────┼───────────┼──────────────────┤    │
│  │ BK7 + AR both sides │ $85    │ <0.5%      │ Excellent │ -                │    │
│  │ BK7 + AR one side   │ $55    │ ~4%        │ Good      │ $30              │    │
│  │ BK7 uncoated        │ $25    │ ~8%        │ Fair      │ $60              │    │
│  │ Polycarbonate + HC  │ $15    │ ~6%        │ Good      │ $70              │    │
│  │ Gorilla Glass       │ $35    │ ~8%        │ Good      │ $50              │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  RECOMMENDATION: Polycarbonate with hard coat for standard model                  │
│                  Glass AR for premium model                                        │
│                                                                                     │
│  SAVINGS: $50/unit (standard) / $30/unit (premium)                                │
│  TIMELINE: Immediate                                                               │
│  RISK: LOW - user acceptance testing recommended                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 5.3 Optical Summary

| Initiative | Current | Target | Savings | Timeline | Risk |
|------------|---------|--------|---------|----------|------|
| O1: Beam combiner China | $115 | $45 | $70 | 2 months | Low |
| O2: Window simplification | $85 | $35 | $50 | Immediate | Low |
| O3: Lens China source | $65 | $25 | $40 | 2 months | Low |
| O4: IR filter optimize | $45 | $30 | $15 | 1 month | Low |
| **TOTAL** | **$310** | **$135** | **$175** | | |

**Realistic Optical Savings: $150/unit** (conservative)

---

# 6. LABOR COST REDUCTION

## 6.1 Initiative L1: Assembly Time Reduction

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE L1: ASSEMBLY TIME REDUCTION                                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CURRENT ASSEMBLY TIME: 6.3 hours/unit                                             │
│  TARGET ASSEMBLY TIME: 4.0 hours/unit (-37%)                                       │
│                                                                                     │
│  TIME REDUCTION STRATEGIES:                                                         │
│                                                                                     │
│  ┌───────────────────────────────────────────────────────────────────────────┐    │
│  │ Operation          │ Current │ Target │ Reduction │ Method               │    │
│  ├────────────────────┼─────────┼────────┼───────────┼──────────────────────┤    │
│  │ Kitting            │ 20 min  │ 10 min │ -10 min   │ Pre-packaged kits    │    │
│  │ Optical sub-assy   │ 45 min  │ 30 min │ -15 min   │ Improved fixtures    │    │
│  │ Electronics sub    │ 30 min  │ 20 min │ -10 min   │ Pre-configured       │    │
│  │ Main assembly      │ 165 min │ 100 min│ -65 min   │ DFM improvements     │    │
│  │ Calibration        │ 45 min  │ 30 min │ -15 min   │ Auto-cal software    │    │
│  │ ATP                │ 60 min  │ 40 min │ -20 min   │ Automated test       │    │
│  │ Packing            │ 15 min  │ 10 min │ -5 min    │ Pre-formed inserts   │    │
│  ├────────────────────┼─────────┼────────┼───────────┼──────────────────────┤    │
│  │ TOTAL              │ 380 min │ 240 min│ -140 min  │ -37%                 │    │
│  └───────────────────────────────────────────────────────────────────────────┘    │
│                                                                                     │
│  KEY IMPROVEMENTS:                                                                  │
│                                                                                     │
│  1. PRE-PACKAGED KITS from supplier                                               │
│     • Supplier pre-kits fasteners in bags                                         │
│     • Electronics pre-configured at assembly house                                │
│     • Saves 10 min kitting time                                                   │
│                                                                                     │
│  2. SNAP-FIT DESIGN (DFM)                                                         │
│     • Replace screws with snap-fits where possible                               │
│     • Covers: 8 screws → 4 snaps + 4 screws                                      │
│     • Saves 15 min assembly time                                                  │
│                                                                                     │
│  3. AUTOMATED CALIBRATION                                                          │
│     • One-button IMU calibration (vs manual 6-position)                          │
│     • Auto-boresight with motorized fixture                                       │
│     • Saves 15 min calibration time                                              │
│                                                                                     │
│  4. AUTOMATED TEST SYSTEM                                                          │
│     • Automated ATP sequence                                                       │
│     • Computer-controlled AI detection test                                       │
│     • Auto-generated reports                                                       │
│     • Saves 20 min test time                                                      │
│                                                                                     │
│  LABOR SAVINGS:                                                                     │
│  Current labor: $174/unit (6.0 hrs × $29 loaded rate)                            │
│  Target labor: $116/unit (4.0 hrs × $29 loaded rate)                             │
│  SAVINGS: $58/unit                                                                 │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 6.2 Initiative L2: Learning Curve Improvement

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  INITIATIVE L2: LEARNING CURVE IMPROVEMENT                                         │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  LEARNING CURVE PROJECTION (85% curve):                                            │
│                                                                                     │
│  HOURS                                                                              │
│    │                                                                                │
│ 10 │ ●                                                                             │
│    │   ●                                                                            │
│  8 │     ●                                                                          │
│    │       ●                                                                        │
│  6 │         ●───●───●                                                             │
│    │                   ●───●───●                                                    │
│  4 │                           ●───●───●───●───●                                   │
│    │                                                                                │
│  2 │                                                                                │
│    │                                                                                │
│    └────┬────┬────┬────┬────┬────┬────┬────┬────┬────▶ UNITS                      │
│         1    5   10   20   50  100  200  300  500                                  │
│                                                                                     │
│  PROJECTED HOURS/UNIT:                                                              │
│  Unit 1: 10.0 hrs (prototype)                                                      │
│  Unit 10: 7.2 hrs                                                                  │
│  Unit 50: 5.2 hrs                                                                  │
│  Unit 100: 4.4 hrs                                                                 │
│  Unit 500: 3.2 hrs                                                                 │
│                                                                                     │
│  ACTIONS TO ACCELERATE LEARNING:                                                   │
│  • Video work instructions at each station                                         │
│  • Cross-training program                                                          │
│  • Kaizen events for continuous improvement                                        │
│  • Operator certification program                                                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 6.3 Labor Summary

| Initiative | Current | Target | Savings | Timeline | Risk |
|------------|---------|--------|---------|----------|------|
| L1: Time reduction | 6.3 hrs | 4.0 hrs | $58/unit | 6 months | Medium |
| L2: Learning curve | - | - | $30/unit | Automatic | Low |
| L3: Automation | - | - | $20/unit | 12 months | Medium |
| **TOTAL** | | | **$108** | | |

**Realistic Labor Savings: $80/unit**

---

# 7. SUPPLY CHAIN OPTIMIZATION

## 7.1 Consolidated Purchasing

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  SUPPLY CHAIN OPTIMIZATION INITIATIVES                                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  SC1: ANNUAL PURCHASE AGREEMENTS                                                   │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  • Commit annual volumes to key suppliers                                          │
│  • Expected discount: 10-15%                                                       │
│  • Applicable: Jetson, camera, PCB assembly                                        │
│  • Savings: $40/unit                                                               │
│                                                                                     │
│  SC2: CONSOLIDATED SHIPPING                                                        │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  • Current: Multiple small shipments                                               │
│  • Proposed: Monthly consolidated shipments                                        │
│  • Savings: $15/unit on shipping costs                                            │
│                                                                                     │
│  SC3: INVENTORY OPTIMIZATION                                                       │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  • Implement kanban for high-runners                                              │
│  • Consignment stock for Jetson/camera                                            │
│  • Reduce carrying cost                                                            │
│  • Savings: $10/unit                                                               │
│                                                                                     │
│  SC4: LOCAL CONTENT INCREASE                                                       │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  Current Vietnamese content: 45%                                                   │
│  Target Vietnamese content: 70%                                                    │
│                                                                                     │
│  Components to localize:                                                           │
│  • CNC machining: Already local                                                    │
│  • Anodizing: Local supplier (done)                                               │
│  • Wire harness: Move to local assembly                                           │
│  • PCB assembly: Evaluate Vietnamese EMS                                          │
│  • Optical coating: Not feasible locally                                          │
│                                                                                     │
│  Benefits: Reduced shipping, faster lead time, currency hedge                     │
│  Savings: $25/unit                                                                 │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

**Total Supply Chain Savings: $90/unit**

---

# 8. DESIGN FOR MANUFACTURING (DFM)

## 8.1 DFM Improvements

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│  DESIGN FOR MANUFACTURING IMPROVEMENTS                                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  DFM1: FASTENER REDUCTION                                                          │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  Current: 26 screws total                                                          │
│  Target: 14 screws + 8 snap-fits                                                   │
│                                                                                     │
│       CURRENT                          PROPOSED                                    │
│    ┌───────────────┐                ┌───────────────┐                             │
│    │ o  o  o  o  o │                │ ▢  ▢     ▢  ▢ │                             │
│    │               │                │               │                             │
│    │ o           o │      →         │ ◄           ► │  ◄► = Snap-fit             │
│    │               │                │               │                             │
│    │ o  o  o  o  o │                │ ▢  ▢     ▢  ▢ │                             │
│    └───────────────┘                └───────────────┘                             │
│      10 screws                        4 screws + snaps                            │
│                                                                                     │
│  Savings: Assembly time, fastener cost                                            │
│  Investment: $5,000 (tooling modification)                                        │
│                                                                                     │
│  DFM2: PART CONSOLIDATION                                                          │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  • Combine PCB plate + mounting bracket (1 part vs 2)                             │
│  • Integrate cable clips into housing design                                       │
│  • Combine front cover + window bezel                                             │
│                                                                                     │
│  Current part count: 45                                                            │
│  Target part count: 38 (-16%)                                                      │
│                                                                                     │
│  DFM3: TOLERANCE OPTIMIZATION                                                      │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  Review all tolerances, relax where function allows:                              │
│  • Non-critical dimensions: ±0.1mm → ±0.2mm                                       │
│  • Surface finish: Ra 1.6 → Ra 3.2 (non-visible)                                 │
│  • Reduces machining time 15%                                                      │
│                                                                                     │
│  DFM4: ASSEMBLY SEQUENCE OPTIMIZATION                                              │
│  ─────────────────────────────────────────────────────────────────────────────     │
│  • Design for top-down assembly (no flipping)                                     │
│  • Standardize screw sizes (M3 only where possible)                              │
│  • Color-code connectors to prevent mis-assembly                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 9. IMPLEMENTATION ROADMAP

## 9.1 Phase Timeline

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    COST REDUCTION IMPLEMENTATION ROADMAP                            │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  2026 Q1        Q2        Q3        Q4        2027 Q1      Q2        Q3           │
│    │           │         │         │           │          │         │             │
│    ▼           ▼         ▼         ▼           ▼          ▼         ▼             │
│                                                                                     │
│  PHASE 1: QUICK WINS (0-3 months)                                                  │
│  ═══════════════════════════════════                                               │
│  ├── Volume pricing negotiations    ████████                                       │
│  ├── Fastener bulk purchasing       ██████                                         │
│  ├── Heatsink COTS switch           ████████                                       │
│  ├── Local anodizing                ██████                                         │
│  └── Shipping consolidation         ██████████                                     │
│      Savings: $150/unit                                                            │
│                                                                                     │
│  PHASE 2: SUPPLIER QUALIFICATION (3-6 months)                                      │
│  ═══════════════════════════════════════════════                                   │
│  ├── OLED alternative qualification      ████████████████                          │
│  ├── Optical components China source          ████████████████                     │
│  ├── Vietnamese CNC development          ████████████████████                      │
│  └── PCB redesign for basic parts             ██████████████                       │
│      Savings: $250/unit (cumulative: $400)                                         │
│                                                                                     │
│  PHASE 3: PROCESS IMPROVEMENTS (6-12 months)                                       │
│  ═══════════════════════════════════════════════                                   │
│  ├── Assembly time reduction                       ████████████████████            │
│  ├── Auto-calibration system                            ████████████████           │
│  ├── Automated test system                                   ████████████████      │
│  └── DFM improvements                                   ████████████████████       │
│      Savings: $150/unit (cumulative: $550)                                         │
│                                                                                     │
│  PHASE 4: MANUFACTURING TRANSITION (12-18 months)                                  │
│  ═══════════════════════════════════════════════════════                           │
│  ├── Housing die casting                                          ████████████████ │
│  ├── Picatinny MIM tooling                                   ████████████████      │
│  └── Full automation implementation                               ████████████████ │
│      Savings: $200/unit (cumulative: $750)                                         │
│                                                                                     │
│  PHASE 5: OPTIMIZATION (18-24 months)                                              │
│  ═══════════════════════════════════════════════════════════                       │
│  └── Continuous improvement, learning curve                                        │
│      Final target: $1,095/unit savings                                            │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 9.2 Initiative Priority Matrix

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    PRIORITY MATRIX                                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                              IMPLEMENTATION EASE                                    │
│                         EASY                    HARD                               │
│                    ┌─────────────────────┬─────────────────────┐                   │
│                    │                     │                     │                   │
│              HIGH  │   QUICK WINS        │   MAJOR PROJECTS    │                   │
│                    │   (Do First)        │   (Plan Carefully)  │                   │
│   SAVINGS          │                     │                     │                   │
│   IMPACT           │ • Volume pricing    │ • Housing casting   │                   │
│                    │ • Heatsink COTS     │ • Auto-calibration  │                   │
│                    │ • China optical     │ • Automated test    │                   │
│                    │ • OLED sourcing     │ • Clamp MIM         │                   │
│                    │                     │                     │                   │
│                    ├─────────────────────┼─────────────────────┤                   │
│                    │                     │                     │                   │
│              LOW   │   FILL-INS          │   AVOID             │                   │
│                    │   (As Resources     │   (Low ROI)         │                   │
│                    │    Permit)          │                     │                   │
│                    │                     │                     │                   │
│                    │ • Fastener std      │ • Custom automation │                   │
│                    │ • Local content     │ • Advanced DFM      │                   │
│                    │                     │                     │                   │
│                    └─────────────────────┴─────────────────────┘                   │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 10. RISK ASSESSMENT

## 10.1 Risk Matrix

| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| OLED quality issues | Medium | High | Thorough qualification, dual source |
| China optical supply | Low | Medium | 2-month safety stock |
| Casting quality | Medium | High | First article inspection, process audit |
| Learning curve slower | Low | Medium | Training investment, kaizen |
| Supplier capacity | Low | High | Qualify backup suppliers |
| Design change delays | Medium | Medium | Phase implementation |

## 10.2 Contingency Plan

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    COST REDUCTION CONTINGENCY                                       │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  IF INITIATIVE FAILS:                                                              │
│                                                                                     │
│  OLED sourcing fails → Negotiate better volume pricing with current supplier       │
│                        Alternative: Reduce resolution to 720p ($100 OLED)          │
│                                                                                     │
│  Casting fails → Continue CNC with optimized programs                              │
│                  Alternative: Investment casting (lower tooling)                   │
│                                                                                     │
│  China optical fails → Use Thorlabs as backup (higher cost but reliable)          │
│                        Alternative: Single-source premium with volume commit       │
│                                                                                     │
│  Automation ROI negative → Focus on manual process improvement                     │
│                            Alternative: Semi-automation only                       │
│                                                                                     │
│  MINIMUM ACHIEVABLE SAVINGS (conservative):                                        │
│  • Electronics: $120/unit (volume pricing only)                                   │
│  • Mechanical: $150/unit (supplier development only)                              │
│  • Optical: $100/unit (China sourcing only)                                       │
│  • Labor: $50/unit (learning curve only)                                          │
│  • TOTAL MINIMUM: $420/unit (-10%)                                                │
│                                                                                     │
│  Target: $1,095/unit (-25%)                                                        │
│  Conservative: $420/unit (-10%)                                                    │
│  Expected: $800/unit (-19%)                                                        │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# 11. FINANCIAL SUMMARY

## 11.1 Cost Reduction Summary by Category

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    COST REDUCTION FINANCIAL SUMMARY                                 │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CATEGORY         │ CURRENT │ TARGET │ SAVINGS │ % REDUCTION │ CONFIDENCE         │
│  ─────────────────┼─────────┼────────┼─────────┼─────────────┼────────────────────│
│  Electronics      │ $1,450  │ $1,100 │  $350   │    -24%     │ HIGH (80%)         │
│  Mechanical       │ $1,200  │  $850  │  $350   │    -29%     │ MEDIUM-HIGH (70%)  │
│  Optical          │  $650   │  $500  │  $150   │    -23%     │ HIGH (85%)         │
│  Labor            │  $400   │  $250  │  $150   │    -38%     │ MEDIUM (60%)       │
│  Overhead         │  $595   │  $500  │   $95   │    -16%     │ HIGH (90%)         │
│  ─────────────────┼─────────┼────────┼─────────┼─────────────┼────────────────────│
│  TOTAL            │ $4,295  │ $3,200 │ $1,095  │    -25%     │ MEDIUM-HIGH (72%)  │
│                                                                                     │
│                                                                                     │
│  INVESTMENT REQUIRED:                                                              │
│  ═══════════════════                                                               │
│  │ Investment           │ Amount    │ ROI Period │ Annual Savings (500 units)   │ │
│  ├──────────────────────┼───────────┼────────────┼──────────────────────────────┤ │
│  │ Die casting tooling  │ $15,000   │ 14 units   │ $57,500                      │ │
│  │ MIM tooling          │ $8,000    │ 22 units   │ $18,500                      │ │
│  │ Auto-cal system      │ $12,000   │ 80 units   │ $7,500                       │ │
│  │ Auto test system     │ $20,000   │ 100 units  │ $10,000                      │ │
│  │ Fixture/tooling      │ $10,000   │ 67 units   │ $7,500                       │ │
│  ├──────────────────────┼───────────┼────────────┼──────────────────────────────┤ │
│  │ TOTAL INVESTMENT     │ $65,000   │ ~60 units  │ $101,000                     │ │
│  │                                                                               │ │
│  │ Simple Payback: 60 units (1.5 months at FRP rate)                           │ │
│  │ Annual Savings at FRP (500 units): $547,500                                 │ │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

## 11.2 Unit Cost Projection

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    UNIT COST PROJECTION                                             │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  COST                                                                               │
│  ($)                                                                                │
│    │                                                                                │
│4500│ ●  $4,295 (Prototype)                                                         │
│    │                                                                                │
│4000│    ●  $3,950 (Pilot - 20 units)                                              │
│    │         Phase 1 savings                                                        │
│3500│              ●  $3,600 (LRIP-1 - 100 units)                                   │
│    │                   Phase 2 savings                                              │
│3000│                        ●  $3,200 (FRP - 500 units)                            │
│    │                             Full implementation ─────────────────●            │
│2500│                                                                                │
│    │                                                                                │
│    └────┬────────┬────────────┬────────────┬────────────────────────▶ TIME        │
│       2026Q1   2026Q3      2027Q1       2028Q1                    2029            │
│                                                                                     │
│  MARGIN ANALYSIS (at $6,000 selling price):                                        │
│  ════════════════════════════════════════════                                      │
│                                                                                     │
│  │ Phase       │ Unit Cost │ Margin   │ Margin % │                                │
│  ├─────────────┼───────────┼──────────┼──────────┤                                │
│  │ Prototype   │ $4,295    │ $1,705   │   28%    │                                │
│  │ Pilot       │ $3,950    │ $2,050   │   34%    │                                │
│  │ LRIP-1      │ $3,600    │ $2,400   │   40%    │                                │
│  │ FRP         │ $3,200    │ $2,800   │   47%    │                                │
│                                                                                     │
│  Target gross margin at FRP: 47% (vs 28% at prototype)                            │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# APPENDIX: INITIATIVE TRACKER

## Initiative Status Tracker

| ID | Initiative | Owner | Target Date | Status | Savings |
|----|------------|-------|-------------|--------|---------|
| E1 | Jetson volume pricing | Purchasing | 2026-Q1 | ⬜ Not Started | $30 |
| E2 | OLED alternative | Engineering | 2026-Q2 | ⬜ Not Started | $85 |
| E3 | PCB optimization | Engineering | 2026-Q2 | ⬜ Not Started | $35 |
| M1 | Housing casting | Engineering | 2027-Q1 | ⬜ Not Started | $115 |
| M2 | Heatsink COTS | Engineering | 2026-Q1 | ⬜ Not Started | $40 |
| M3 | Clamp MIM | Engineering | 2026-Q3 | ⬜ Not Started | $37 |
| M4 | Supplier development | Purchasing | 2026-Q2 | ⬜ Not Started | $70 |
| O1 | Beam combiner China | Purchasing | 2026-Q2 | ⬜ Not Started | $70 |
| O2 | Window simplification | Engineering | 2026-Q1 | ⬜ Not Started | $50 |
| L1 | Assembly time reduction | Production | 2026-Q4 | ⬜ Not Started | $58 |

Status: ⬜ Not Started | 🟡 In Progress | ✅ Complete | ❌ Cancelled

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Value Engineering Team | Initial release |

---

*V-SMASH-LITE Cost Reduction Plan v1.0*
*Value Engineering for Production Optimization*

**END OF DOCUMENT**
