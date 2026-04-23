# V-SMASH-LITE MANUFACTURING PROCUREMENT PACKAGE
## Ready-to-Execute Prototype Build Documentation

**Document**: VS-MFG-001 | **Version**: 1.0 | **Date**: 2026-01-19
**Project**: V-SMASH-LITE AI-Powered Smart Sight
**Purpose**: Complete procurement and manufacturing package for 3× Alpha prototype build

---

# EXECUTIVE SUMMARY

This document provides **ready-to-execute** procurement and manufacturing documentation for building 3× V-SMASH-LITE Alpha prototypes. All specifications, supplier contacts, RFQ templates, and work instructions are included.

**Build Scope**: 3 units (Alpha-1, Alpha-2, Alpha-3)
**Total BOM Cost**: $10,152 (3× $3,384)
**Total Tooling/NRE**: $7,630
**Total Build Budget**: ~$18,000
**Build Timeline**: 8 weeks from procurement start

---

# TABLE OF CONTENTS

1. [Procurement Summary](#1-procurement-summary)
2. [Long Lead Items - Order Immediately](#2-long-lead-items)
3. [RFQ Package - CNC Machining](#3-rfq-cnc-machining)
4. [RFQ Package - PCB Fabrication](#4-rfq-pcb-fabrication)
5. [RFQ Package - Optical Components](#5-rfq-optical-components)
6. [Electronics BOM with Sources](#6-electronics-bom)
7. [Fasteners & Hardware BOM](#7-fasteners-hardware)
8. [Supplier Contact Database](#8-supplier-database)
9. [Incoming Inspection Checklist](#9-incoming-inspection)
10. [Assembly Work Instructions](#10-assembly-work-instructions)
11. [Test Equipment List](#11-test-equipment)
12. [Quality Control Points](#12-quality-control)

---

# 1. PROCUREMENT SUMMARY

## 1.1 Cost Breakdown (3 Units)

| Category | Per Unit | 3 Units | Tooling/NRE | Total |
|----------|----------|---------|-------------|-------|
| Mechanical (CNC) | $720 | $2,160 | $2,280 | $4,440 |
| Optical | $713 | $2,139 | $2,510 | $4,649 |
| Electronics | $1,079 | $3,237 | $1,250 | $4,487 |
| Fasteners/Hardware | $72 | $216 | - | $216 |
| Battery | $150 | $450 | - | $450 |
| Cables/Connectors | $50 | $150 | - | $150 |
| Consumables | $100 | $300 | $1,590 | $1,890 |
| **TOTAL** | **$2,884** | **$8,652** | **$7,630** | **$16,282** |

*Note: Contingency 10% = $1,628 → **Total Budget: $18,000***

## 1.2 Procurement Timeline

```
WEEK:     1    2    3    4    5    6    7    8
          │    │    │    │    │    │    │    │
LONG LEAD ████████████████████░░░░░░░░░░░░░░░░  (Jetson, Camera, Optics)
CNC RFQ   ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  (Issue RFQ)
CNC FAB   ░░░░████████████████░░░░░░░░░░░░░░░░  (Machining)
ANODIZE   ░░░░░░░░░░░░░░░░░░░░████░░░░░░░░░░░░  (Surface finish)
PCB RFQ   ████░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░  (Issue RFQ)
PCB FAB   ░░░░████████░░░░░░░░░░░░░░░░░░░░░░░░  (Fabrication)
PCB ASSY  ░░░░░░░░░░░░████░░░░░░░░░░░░░░░░░░░░  (Assembly)
OPTICAL   ░░░░░░░░░░░░░░░░████████░░░░░░░░░░░░  (Optical assembly)
INTEGRATE ░░░░░░░░░░░░░░░░░░░░░░░░████████░░░░  (System integration)
TEST      ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░████  (Functional test)
          │    │    │    │    │    │    │    │
          Order     Parts    Assy      Test   Ship
```

## 1.3 Critical Path Items

| Item | Lead Time | Order By | Arrival | Critical? |
|------|-----------|----------|---------|-----------|
| Jetson Nano 4GB | 2-3 weeks | Day 1 | Week 3 | ✅ YES |
| IMX477 Camera | 2 weeks | Day 1 | Week 2 | ✅ YES |
| Beam Combiner Glass | 3 weeks | Day 1 | Week 3 | ✅ YES |
| CNC Housing | 3 weeks | Day 3 | Week 4 | ✅ YES |
| PCB Assembly | 2 weeks | Day 7 | Week 4 | ✅ YES |

---

# 2. LONG LEAD ITEMS - ORDER IMMEDIATELY

## 2.1 Jetson Nano 4GB Developer Kit

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PURCHASE ORDER REQUEST                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ Item: NVIDIA Jetson Nano 4GB Developer Kit                                  │
│ Part Number: 945-13450-0000-100                                             │
│ Quantity: 4 (3 for build + 1 spare)                                         │
│ Unit Price: ~$149 USD                                                       │
│ Total: ~$596 USD                                                            │
│                                                                             │
│ APPROVED SUPPLIERS:                                                         │
│ 1. Arrow Electronics: https://www.arrow.com                                 │
│    Contact: Online order                                                    │
│    Lead Time: 2-3 weeks (check stock)                                       │
│                                                                             │
│ 2. Seeed Studio: https://www.seeedstudio.com                               │
│    Contact: Online order                                                    │
│    Lead Time: 1-2 weeks (ships from Shenzhen)                              │
│                                                                             │
│ 3. SparkFun: https://www.sparkfun.com                                      │
│    Contact: Online order                                                    │
│    Lead Time: In-stock ships same day                                       │
│                                                                             │
│ NOTES:                                                                      │
│ - Check NVIDIA official distributors for Vietnam                            │
│ - Alternative: Jetson Orin Nano if Nano 4GB unavailable                    │
│ - Requires 5V/4A power supply (order separately if not included)           │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2.2 IMX477 Camera Module

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PURCHASE ORDER REQUEST                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ Item: Raspberry Pi High Quality Camera (IMX477)                             │
│ Part Number: SC0261                                                         │
│ Quantity: 4 (3 for build + 1 spare)                                         │
│ Unit Price: ~$50 USD                                                        │
│ Total: ~$200 USD                                                            │
│                                                                             │
│ ALSO REQUIRED:                                                              │
│ - C/CS Mount Lens 6mm f/1.2: 4× @ $25 = $100                               │
│ - CSI Cable 200mm: 4× @ $5 = $20                                           │
│                                                                             │
│ APPROVED SUPPLIERS:                                                         │
│ 1. Raspberry Pi Official Resellers                                          │
│ 2. Arducam: https://www.arducam.com                                        │
│ 3. Waveshare: https://www.waveshare.com                                    │
│                                                                             │
│ NOTES:                                                                      │
│ - Ensure CSI-2 compatibility with Jetson Nano                              │
│ - Order lens separately (C-mount, 6mm, f/1.2 or faster)                    │
│ - Alternative: Arducam IMX477 with integrated lens                         │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 2.3 Optical Components

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PURCHASE ORDER REQUEST                                   │
├─────────────────────────────────────────────────────────────────────────────┤
│ BEAM COMBINER:                                                              │
│ - Type: 50/50 Plate Beamsplitter, 25mm × 36mm                              │
│ - Coating: Visible 400-700nm                                                │
│ - Qty: 4 @ $85 = $340                                                       │
│ - Supplier: Edmund Optics (47-009 or similar)                              │
│             Thorlabs (BSW10 or similar)                                     │
│                                                                             │
│ PROTECTIVE WINDOW:                                                          │
│ - Type: N-BK7 or Gorilla Glass, 30mm diameter                              │
│ - Coating: AR both sides, visible                                           │
│ - Qty: 4 @ $35 = $140                                                       │
│ - Supplier: Edmund Optics, Thorlabs, or local optical shop                 │
│                                                                             │
│ MICRO OLED DISPLAY:                                                         │
│ - Type: 0.39" 1920×1080 OLED (reticle display)                             │
│ - Interface: MIPI DSI or HDMI                                               │
│ - Qty: 4 @ $180 = $720                                                      │
│ - Supplier: AliExpress (search "0.39 inch OLED 1080p")                     │
│             Kopin, Sony (premium)                                           │
│                                                                             │
│ COLLIMATING LENS:                                                           │
│ - Type: Doublet, f=25mm, 12.5mm diameter                                   │
│ - Qty: 4 @ $45 = $180                                                       │
│ - Supplier: Edmund Optics, Thorlabs                                         │
│                                                                             │
│ TOTAL OPTICAL: ~$1,380 + shipping                                           │
│ LEAD TIME: 2-3 weeks (Edmund/Thorlabs ship internationally)                │
└─────────────────────────────────────────────────────────────────────────────┘
```

---

# 3. RFQ PACKAGE - CNC MACHINING

## 3.1 RFQ Cover Letter

```
═══════════════════════════════════════════════════════════════════════════════
                         REQUEST FOR QUOTATION
                      CNC MACHINING SERVICES
═══════════════════════════════════════════════════════════════════════════════

Date: [DATE]
RFQ Number: VS-RFQ-CNC-001

To: [SUPPLIER NAME]

RE: CNC Machining for V-SMASH-LITE Prototype Components

Dear Sir/Madam,

We are requesting a quotation for CNC machining services for an electro-optical
device prototype. Please provide pricing for the following:

SCOPE:
- Quantity: 3 sets (each set = 1 complete unit)
- Material: Aluminum 6061-T6
- Finish: Black anodize (Type II, Class 2)
- Tolerance: General ±0.1mm, critical features per drawing

DELIVERABLES:
- Machined parts per attached drawings
- First Article Inspection Report (FAIR)
- Material certificates (mill certs)

TIMELINE:
- Quote due: [DATE + 5 days]
- Delivery required: [DATE + 4 weeks]

Please include:
1. Unit price per part
2. Setup/tooling charges (one-time)
3. Lead time from PO
4. Any design-for-manufacturing suggestions

Attached:
- Drawing package (15 parts)
- 3D STEP files
- Material specification

Contact: [YOUR NAME]
Email: [YOUR EMAIL]
Phone: [YOUR PHONE]

═══════════════════════════════════════════════════════════════════════════════
```

## 3.2 CNC Part List

| Part # | Description | Material | Qty/Set | 3 Sets | Est. Price/Set |
|--------|-------------|----------|---------|--------|----------------|
| VS-M-001 | Main Housing Body | AL6061-T6 | 1 | 3 | $180 |
| VS-M-002 | Front Cover | AL6061-T6 | 1 | 3 | $45 |
| VS-M-003 | Rear Cover | AL6061-T6 | 1 | 3 | $40 |
| VS-M-004 | Picatinny Clamp Base | AL6061-T6 | 1 | 3 | $65 |
| VS-M-005 | Picatinny Clamp Lever | AL6061-T6 | 1 | 3 | $35 |
| VS-M-006 | Battery Compartment | AL6061-T6 | 1 | 3 | $55 |
| VS-M-007 | Optical Barrel | AL6061-T6 | 1 | 3 | $75 |
| VS-M-008 | Lens Mount Ring | AL6061-T6 | 1 | 3 | $25 |
| VS-M-009 | Camera Mount Bracket | AL6061-T6 | 1 | 3 | $30 |
| VS-M-010 | PCB Mounting Plate | AL6061-T6 | 1 | 3 | $35 |
| VS-M-011 | Heatsink Fins | AL6061-T6 | 1 | 3 | $45 |
| VS-M-012 | Button Caps (3×) | AL6061-T6 | 3 | 9 | $15 |
| VS-M-013 | Cable Gland Nut | AL6061-T6 | 2 | 6 | $10 |
| VS-M-014 | Adjustment Screw | SS 303 | 2 | 6 | $20 |
| VS-M-015 | Dowel Pins | SS 303 | 4 | 12 | $10 |
| | **MACHINING SUBTOTAL** | | | | **$685** |
| | Anodize (Black, Type II) | | | | $35 |
| | **TOTAL PER SET** | | | | **$720** |
| | **3 SETS TOTAL** | | | | **$2,160** |
| | Setup/Programming (one-time) | | | | **$800** |
| | Fixture (one-time) | | | | **$480** |
| | First Article Inspection | | | | **$200** |
| | **TOTAL WITH NRE** | | | | **$3,640** |

## 3.3 Recommended CNC Suppliers (Vietnam)

| Supplier | Location | Capability | Contact | Notes |
|----------|----------|------------|---------|-------|
| **Công ty CNC Precision VN** | HCM | 5-axis, tight tolerance | [phone] | Defense experience |
| **Vinashin Mechanical** | Hải Phòng | Large capacity | [phone] | Naval parts |
| **Thaco Auto Parts** | Quảng Nam | High volume | [phone] | Automotive quality |
| **Hòa Phát Machinery** | Hưng Yên | General machining | [phone] | Cost effective |

## 3.4 CNC Drawing Checklist

| Drawing | Title | Rev | Released | Notes |
|---------|-------|-----|----------|-------|
| ☐ VS-M-001 | Main Housing Body | A | ☐ | Complex, 5-axis preferred |
| ☐ VS-M-002 | Front Cover | A | ☐ | O-ring groove critical |
| ☐ VS-M-003 | Rear Cover | A | ☐ | Connector cutouts |
| ☐ VS-M-004 | Picatinny Clamp Base | A | ☐ | MIL-STD-1913 profile |
| ☐ VS-M-005 | Picatinny Clamp Lever | A | ☐ | Cam profile |
| ☐ VS-M-006 | Battery Compartment | A | ☐ | Cell fit critical |
| ☐ VS-M-007 | Optical Barrel | A | ☐ | Bore concentricity |
| ☐ VS-M-008 | Lens Mount Ring | A | ☐ | Thread accuracy |
| ☐ VS-M-009 | Camera Mount Bracket | A | ☐ | Adjustment slots |
| ☐ VS-M-010 | PCB Mounting Plate | A | ☐ | Standoff holes |
| ☐ VS-M-011 | Heatsink Fins | A | ☐ | Fin thickness |
| ☐ VS-M-012 | Button Caps | A | ☐ | Knurling |
| ☐ VS-M-013 | Cable Gland Nut | A | ☐ | Thread |
| ☐ VS-M-014 | Adjustment Screw | A | ☐ | Fine thread |
| ☐ VS-M-015 | Dowel Pins | A | ☐ | h6 tolerance |

---

# 4. RFQ PACKAGE - PCB FABRICATION

## 4.1 PCB Specifications

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    PCB FABRICATION SPECIFICATION                            │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│ BOARD NAME: V-SMASH Carrier Board                                           │
│ PART NUMBER: VS-PCB-001                                                     │
│ REVISION: A                                                                 │
│                                                                             │
│ PHYSICAL:                                                                   │
│ ├── Dimensions: 65mm × 55mm                                                │
│ ├── Layers: 4                                                               │
│ ├── Thickness: 1.6mm                                                        │
│ ├── Material: FR-4 TG150                                                   │
│ └── Finish: ENIG (Immersion Gold)                                          │
│                                                                             │
│ ELECTRICAL:                                                                 │
│ ├── Min Trace/Space: 0.15mm / 0.15mm (6/6 mil)                            │
│ ├── Min Via: 0.3mm drill, 0.6mm pad                                        │
│ ├── Copper Weight: 1oz outer, 0.5oz inner                                  │
│ ├── Impedance Control: 50Ω ±10% for CSI traces                            │
│ └── Solder Mask: Green, both sides                                         │
│                                                                             │
│ QUANTITY:                                                                   │
│ ├── Bare PCB: 10 pcs (3 build + 7 spare)                                   │
│ └── Assembled: 5 pcs (3 build + 2 spare)                                   │
│                                                                             │
│ STANDARDS:                                                                  │
│ ├── Fabrication: IPC-6012 Class 2                                          │
│ └── Assembly: IPC-A-610 Class 2                                            │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 4.2 PCB Assembly BOM (for PCBA quote)

| Ref | Description | Package | Qty | MPN | Notes |
|-----|-------------|---------|-----|-----|-------|
| U1 | 40-pin Header (Jetson) | 2×20 2.54mm | 1 | - | Through-hole |
| U2 | IMU ICM-42688-P | LGA-14 | 1 | ICM-42688-P | Sensitive, ESD |
| U3 | Solenoid Driver DRV8837 | WSON-8 | 1 | DRV8837DSGR | |
| U4 | USB-C Controller | QFN-24 | 1 | TUSB320 | |
| U5 | LDO 3.3V 500mA | SOT-223 | 2 | AMS1117-3.3 | |
| U6 | LDO 1.8V 300mA | SOT-23-5 | 1 | AP2112K-1.8 | |
| U7 | ESD Protection | SOT-23-6 | 4 | USBLC6-2SC6 | |
| J1 | CSI Connector 15-pin | FFC 0.5mm | 1 | 52271-1579 | Camera |
| J2 | USB-C Receptacle | USB-C | 1 | USB4110-GF-A | |
| J3 | JST-PH 2-pin | 2.0mm | 3 | B2B-PH-K-S | Power, trigger |
| J4 | JST-SH 4-pin | 1.0mm | 2 | SM04B-SRSS-TB | I2C, UART |
| SW1 | Tactile Switch | 6×6mm | 3 | SKHHAJA010 | |
| LED1-3 | LED RGB Common Cathode | 0805 | 3 | LTST-C295 | Status |
| R1-20 | Resistors (various) | 0402 | 20 | - | See schematic |
| C1-30 | Capacitors (various) | 0402/0603 | 30 | - | See schematic |
| L1-2 | Inductor 10uH | 0805 | 2 | - | Power filter |
| Q1-2 | N-MOSFET | SOT-23 | 2 | 2N7002 | |

**Assembly Notes:**
- Provide stencil (included in PCBA quote)
- X-ray inspection for QFN packages
- Functional test points marked on silkscreen

## 4.3 Recommended PCB Suppliers

| Supplier | Location | Capability | Lead Time | Notes |
|----------|----------|------------|-----------|-------|
| **JLCPCB** | Shenzhen | 4L, assembly | 7-10 days | Budget friendly |
| **PCBWay** | Shenzhen | 4L+, assembly | 7-14 days | Good quality |
| **Seeed Fusion** | Shenzhen | Full service | 10-14 days | DFM support |
| **Vietnam PCB** | HCM | 4L max | 14 days | Local support |

---

# 5. RFQ PACKAGE - OPTICAL COMPONENTS

## 5.1 Optical BOM

| Item | Specification | Qty | Source | Unit $ | Total |
|------|---------------|-----|--------|--------|-------|
| Beam Combiner | 50/50, 25×36mm, AR coat | 4 | Edmund | $85 | $340 |
| Collimator Lens | f=25mm, Ø12.5mm doublet | 4 | Edmund | $45 | $180 |
| Protective Window | Ø30mm, N-BK7, AR coat | 4 | Thorlabs | $35 | $140 |
| Micro OLED | 0.39" 1920×1080, MIPI | 4 | AliExpress | $180 | $720 |
| Reticle Generator | Driver board for OLED | 4 | Custom/Ali | $25 | $100 |
| IR Filter | 650nm longpass, Ø25mm | 4 | Edmund | $30 | $120 |
| Optical Adhesive | UV cure, Norland 61 | 1 | Norland | $45 | $45 |
| **TOTAL** | | | | | **$1,645** |

## 5.2 Edmund Optics Order Template

```
Edmund Optics Order
Customer: [YOUR COMPANY]
Ship To: [ADDRESS]

Line 1: Stock# 47-009 | 50/50 Plate Beamsplitter | Qty: 4
Line 2: Stock# 45-345 | Achromatic Doublet f=25mm | Qty: 4  
Line 3: Stock# 48-123 | N-BK7 Window Ø30mm AR | Qty: 4
Line 4: Stock# 65-234 | 650nm Longpass Filter | Qty: 4

Shipping: DHL Express to Vietnam
Payment: Credit Card / Wire Transfer

Note: Request Certificate of Conformance for all items
```

---

# 6. ELECTRONICS BOM - COMPLETE SOURCING

## 6.1 Electronics Component List with Sources

| Qty | Description | MPN | Supplier | Unit $ | Ext $ | Link |
|-----|-------------|-----|----------|--------|-------|------|
| 4 | Jetson Nano 4GB | 945-13450 | Arrow | $149 | $596 | arrow.com |
| 4 | IMX477 HQ Camera | SC0261 | RPi | $50 | $200 | raspberrypi.com |
| 4 | 6mm f/1.2 Lens | CS1612 | Arducam | $25 | $100 | arducam.com |
| 4 | IMU ICM-42688-P | ICM-42688-P | Mouser | $8 | $32 | mouser.com |
| 4 | Solenoid 12V push | JF-0530B | AliExpress | $5 | $20 | aliexpress.com |
| 4 | Li-ion 18650 3400mAh | NCR18650B | 18650batterystore | $8 | $32 | - |
| 4 | 2S BMS 7.4V 20A | HX-2S-D20 | AliExpress | $3 | $12 | aliexpress.com |
| 4 | DC-DC 5V/5A | LM2596 module | AliExpress | $2 | $8 | aliexpress.com |
| 10 | Carrier PCB assembled | VS-PCB-001 | JLCPCB | $25 | $250 | jlcpcb.com |
| 4 | USB-C cable 0.3m | - | AliExpress | $2 | $8 | - |
| 4 | CSI cable 200mm | - | Arducam | $5 | $20 | - |
| 4 | Wire harness set | Custom | Local | $15 | $60 | - |
| | **ELECTRONICS SUBTOTAL** | | | | **$1,338** | |

---

# 7. FASTENERS & HARDWARE BOM

## 7.1 Fastener Kit (Per Unit)

| Qty | Description | Size | Material | Source | $/unit |
|-----|-------------|------|----------|--------|--------|
| 8 | Socket Head Cap Screw | M3×8mm | SS A2-70 | McMaster | $0.15 |
| 6 | Socket Head Cap Screw | M3×12mm | SS A2-70 | McMaster | $0.18 |
| 4 | Socket Head Cap Screw | M2.5×6mm | SS A2-70 | McMaster | $0.12 |
| 4 | Socket Head Cap Screw | M2×4mm | SS A2-70 | McMaster | $0.10 |
| 8 | Hex Nut | M3 | SS A2-70 | McMaster | $0.05 |
| 4 | Hex Nut | M2.5 | SS A2-70 | McMaster | $0.04 |
| 8 | Split Lock Washer | M3 | SS | McMaster | $0.03 |
| 4 | Flat Washer | M3 | SS | McMaster | $0.02 |
| 6 | Nylon Standoff | M3×10mm | Nylon | McMaster | $0.25 |
| 4 | Nylon Standoff | M2.5×8mm | Nylon | McMaster | $0.20 |
| 2 | O-Ring | 28mm ID × 2mm | Viton | McMaster | $0.50 |
| 1 | O-Ring | 30mm ID × 2mm | Viton | McMaster | $0.55 |
| 4 | Thread Insert | M3×6mm | Brass | McMaster | $0.35 |
| 2 | Spring Pin | 3mm × 10mm | SS | McMaster | $0.20 |
| 1 | Thermal Pad | 50×50×1mm | Silicone | Amazon | $2.00 |
| 1 | Thermal Paste | 1g | Arctic MX-4 | Amazon | $1.50 |
| | **FASTENER KIT TOTAL** | | | | **~$12** |

## 7.2 Hardware Kit Order (for 5 units)

```
McMaster-Carr Order:
─────────────────────────────────────────────────────────────
91292A111 | M3×8 SHCS SS      | 1 pack (100)  | $8.45
91292A113 | M3×12 SHCS SS     | 1 pack (100)  | $9.12
91292A007 | M2.5×6 SHCS SS    | 1 pack (100)  | $7.89
91292A003 | M2×4 SHCS SS      | 1 pack (100)  | $6.54
90591A111 | M3 Hex Nut SS     | 1 pack (100)  | $4.23
90591A107 | M2.5 Hex Nut SS   | 1 pack (100)  | $3.89
92146A150 | M3 Split Washer   | 1 pack (100)  | $3.45
91166A210 | M3 Flat Washer    | 1 pack (100)  | $2.78
93655A100 | M3×10 Standoff    | 1 pack (50)   | $12.34
94639A143 | M2.5×8 Standoff   | 1 pack (50)   | $10.56
9452K22   | Viton O-Ring 28mm | 1 pack (10)   | $8.90
9452K25   | Viton O-Ring 30mm | 1 pack (10)   | $9.45
92395A113 | M3 Thread Insert  | 1 pack (50)   | $15.67
─────────────────────────────────────────────────────────────
SUBTOTAL:                                       ~$103
SHIPPING (to Vietnam):                          ~$45
TOTAL:                                          ~$148
─────────────────────────────────────────────────────────────
```

---

# 8. SUPPLIER CONTACT DATABASE

## 8.1 Primary Suppliers

| Category | Supplier | Contact | Account # | Terms | Notes |
|----------|----------|---------|-----------|-------|-------|
| **Electronics** | Arrow | asia.arrow.com | [#] | Net 30 | Jetson |
| **Electronics** | Mouser | mouser.vn | [#] | CC | Components |
| **Electronics** | JLCPCB | jlcpcb.com | [#] | Prepay | PCB+PCBA |
| **Optical** | Edmund Optics | edmundoptics.com | [#] | Net 30 | Optics |
| **Optical** | Thorlabs | thorlabs.com | [#] | CC | Optics |
| **Mechanical** | [Local CNC] | [phone] | - | 50/50 | Machining |
| **Hardware** | McMaster-Carr | mcmaster.com | [#] | CC | Fasteners |
| **General** | AliExpress | aliexpress.com | - | Prepay | Misc |

## 8.2 Backup Suppliers

| Category | Primary | Backup 1 | Backup 2 |
|----------|---------|----------|----------|
| Jetson Nano | Arrow | Seeed Studio | SparkFun |
| Camera | RPi Official | Arducam | Waveshare |
| PCB | JLCPCB | PCBWay | Seeed Fusion |
| Optics | Edmund | Thorlabs | Newport |
| CNC | [Primary] | [Backup] | [Backup 2] |

---

# 9. INCOMING INSPECTION CHECKLIST

## 9.1 Mechanical Parts Inspection

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║              INCOMING INSPECTION - CNC PARTS                                  ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║ PO#: _____________ | Supplier: _____________ | Date: _____________           ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║ □ Packing slip matches PO quantity                                            ║
║ □ Material certificates received                                              ║
║ □ First Article Inspection Report received                                    ║
║ □ Visual inspection - no scratches, dents, tool marks                        ║
║ □ Anodize quality - uniform color, no bare spots                             ║
║                                                                               ║
║ DIMENSIONAL CHECKS (sample 1 of each part):                                  ║
║                                                                               ║
║ Part: VS-M-001 Housing Body                                                   ║
║ □ Overall length: _______ mm (spec: 150 ±0.2)                                ║
║ □ Overall width: _______ mm (spec: 80 ±0.2)                                  ║
║ □ Bore diameter: _______ mm (spec: 35 H7)                                    ║
║ □ Picatinny slot: _______ mm (spec: per MIL-STD-1913)                       ║
║                                                                               ║
║ Part: VS-M-004 Picatinny Clamp                                               ║
║ □ Rail engagement: _______ mm (spec: per MIL-STD-1913)                       ║
║ □ Cam profile: PASS / FAIL                                                   ║
║                                                                               ║
║ DISPOSITION:                                                                  ║
║ □ ACCEPT - Move to stock                                                      ║
║ □ ACCEPT WITH DEVIATION - Document deviation #_______                        ║
║ □ REJECT - Return to supplier, NCR #_______                                  ║
║                                                                               ║
║ Inspector: _____________ | Date: _____________ | Signature: _____________    ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

## 9.2 Electronics Inspection

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║              INCOMING INSPECTION - ELECTRONICS                                ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║ JETSON NANO:                                                                  ║
║ □ Qty received: _____ | Qty ordered: _____                                   ║
║ □ S/N recorded: __________________, __________________, __________________   ║
║ □ Power on test - boot to Ubuntu PASS / FAIL                                 ║
║ □ CSI camera test PASS / FAIL                                                ║
║                                                                               ║
║ IMX477 CAMERA:                                                               ║
║ □ Qty received: _____ | Qty ordered: _____                                   ║
║ □ Visual - lens clear, no scratches                                          ║
║ □ Connector pins straight                                                     ║
║ □ Functional test with Jetson PASS / FAIL                                    ║
║                                                                               ║
║ CARRIER PCB (ASSEMBLED):                                                     ║
║ □ Qty received: _____ | Qty ordered: _____                                   ║
║ □ Visual - no solder bridges, components present                             ║
║ □ Power test - 3.3V rail: _______ V (spec: 3.3 ±0.1)                        ║
║ □ Power test - 1.8V rail: _______ V (spec: 1.8 ±0.1)                        ║
║ □ IMU communication test PASS / FAIL                                         ║
║                                                                               ║
║ DISPOSITION: □ ACCEPT □ REJECT                                               ║
║ Inspector: _____________ | Date: _____________                               ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

# 10. ASSEMBLY WORK INSTRUCTIONS

## 10.1 Assembly Sequence Overview

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                    V-SMASH-LITE ASSEMBLY SEQUENCE                           │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  STAGE 1: SUB-ASSEMBLY PREPARATION (2 hours)                               │
│  ├── 1.1 Optical sub-assembly (beam combiner + OLED + collimator)          │
│  ├── 1.2 Electronics sub-assembly (Jetson + carrier PCB + camera)          │
│  ├── 1.3 Power sub-assembly (battery + BMS + DC-DC)                        │
│  └── 1.4 Mechanical preparation (thread inserts, O-rings)                  │
│                                                                             │
│  STAGE 2: MAIN ASSEMBLY (3 hours)                                          │
│  ├── 2.1 Install PCB mounting plate in housing                             │
│  ├── 2.2 Mount Jetson + carrier PCB assembly                               │
│  ├── 2.3 Install camera module                                              │
│  ├── 2.4 Install optical sub-assembly                                       │
│  ├── 2.5 Install solenoid and trigger mechanism                            │
│  ├── 2.6 Install battery compartment                                        │
│  ├── 2.7 Wire harness routing and connection                               │
│  └── 2.8 Close housing (front and rear covers)                             │
│                                                                             │
│  STAGE 3: FINAL ASSEMBLY (1 hour)                                          │
│  ├── 3.1 Install protective window                                          │
│  ├── 3.2 Install Picatinny clamp                                           │
│  ├── 3.3 Install buttons and indicators                                     │
│  └── 3.4 Final torque and visual inspection                                │
│                                                                             │
│  STAGE 4: CALIBRATION (2 hours)                                            │
│  ├── 4.1 Firmware load and configuration                                    │
│  ├── 4.2 IMU calibration                                                    │
│  ├── 4.3 Optical boresight alignment                                        │
│  └── 4.4 Camera focus adjustment                                            │
│                                                                             │
│  STAGE 5: FUNCTIONAL TEST (2 hours)                                        │
│  ├── 5.1 Power on sequence test                                             │
│  ├── 5.2 AI detection test                                                  │
│  ├── 5.3 Trigger mechanism test                                             │
│  ├── 5.4 Environmental seal test (IP65 spray)                              │
│  └── 5.5 Documentation and labeling                                         │
│                                                                             │
│  TOTAL ASSEMBLY TIME: ~10 hours per unit                                   │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## 10.2 Detailed Work Instruction: Optical Sub-Assembly

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║     WORK INSTRUCTION: WI-VS-001 - OPTICAL SUB-ASSEMBLY                       ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║ REQUIRED TOOLS:                                                               ║
║ □ Clean room gloves (lint-free)                                              ║
║ □ Optical cleaning kit (lens tissue, isopropyl alcohol)                      ║
║ □ UV curing lamp (365nm)                                                     ║
║ □ Optical adhesive (Norland 61)                                              ║
║ □ Alignment fixture (VS-FIX-002)                                             ║
║ □ Torque screwdriver 0.3 N·m                                                 ║
║                                                                               ║
║ PROCEDURE:                                                                    ║
║                                                                               ║
║ STEP 1: Prepare components                                                    ║
║ 1.1 Clean beam combiner with lens tissue and IPA                             ║
║ 1.2 Clean collimating lens                                                    ║
║ 1.3 Inspect OLED display for defects                                         ║
║ 1.4 Clean all mounting surfaces                                              ║
║                                                                               ║
║ STEP 2: Mount OLED display                                                    ║
║ 2.1 Place OLED in optical barrel (VS-M-007)                                  ║
║ 2.2 Align display to reference marks                                         ║
║ 2.3 Apply small bead of optical adhesive around perimeter                    ║
║ 2.4 Cure with UV lamp for 60 seconds                                         ║
║ ⚠️ CAUTION: Avoid adhesive on active display area                           ║
║                                                                               ║
║ STEP 3: Install collimating lens                                             ║
║ 3.1 Thread lens mount ring (VS-M-008) onto barrel                           ║
║ 3.2 Place collimating lens in mount                                          ║
║ 3.3 Adjust focus distance to infinity (25mm from OLED)                      ║
║ 3.4 Lock with set screw, torque 0.3 N·m                                     ║
║                                                                               ║
║ STEP 4: Install beam combiner                                                 ║
║ 4.1 Place beam combiner in alignment fixture                                 ║
║ 4.2 Position at 45° angle to optical axis                                    ║
║ 4.3 Secure with retaining clips                                              ║
║ 4.4 Verify alignment with laser pointer                                      ║
║                                                                               ║
║ STEP 5: Quality check                                                         ║
║ □ Visual: No dust, fingerprints, or debris on optical surfaces              ║
║ □ Functional: OLED displays test pattern                                     ║
║ □ Alignment: Reticle centered in eyepiece view                              ║
║                                                                               ║
║ RECORD: S/N _________ | Operator _________ | Date _________ | QC _________  ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

## 10.3 Detailed Work Instruction: Electronics Integration

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║     WORK INSTRUCTION: WI-VS-002 - ELECTRONICS INTEGRATION                    ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║ REQUIRED TOOLS:                                                               ║
║ □ ESD wrist strap and mat                                                    ║
║ □ Torque screwdriver 0.5 N·m                                                 ║
║ □ Thermal paste applicator                                                   ║
║ □ Multimeter                                                                 ║
║ □ Soldering station (for wire connections)                                   ║
║                                                                               ║
║ PROCEDURE:                                                                    ║
║                                                                               ║
║ STEP 1: Prepare Jetson Nano                                                   ║
║ 1.1 Connect to PC, verify boot to Ubuntu                                     ║
║ 1.2 Flash V-SMASH firmware image                                             ║
║ 1.3 Record serial number: _______________                                    ║
║ ⚠️ CAUTION: Handle Jetson by edges, avoid touching components               ║
║                                                                               ║
║ STEP 2: Attach carrier PCB                                                    ║
║ 2.1 Align 40-pin header                                                       ║
║ 2.2 Press firmly until fully seated                                          ║
║ 2.3 Secure with 4× M2.5×6 screws, torque 0.5 N·m                            ║
║                                                                               ║
║ STEP 3: Connect camera                                                        ║
║ 3.1 Insert CSI ribbon cable into Jetson (contacts facing heatsink)          ║
║ 3.2 Lock connector latch                                                      ║
║ 3.3 Route cable through housing channel                                      ║
║ 3.4 Connect to IMX477 camera module                                          ║
║ ⚠️ CAUTION: Do not bend CSI cable sharply                                   ║
║                                                                               ║
║ STEP 4: Install thermal management                                            ║
║ 4.1 Apply thermal paste to Jetson SoC (pea-sized amount)                    ║
║ 4.2 Place thermal pad on heatsink fins (VS-M-011)                           ║
║ 4.3 Secure heatsink to housing with M3×8 screws                             ║
║                                                                               ║
║ STEP 5: Wire harness connection                                               ║
║ 5.1 Connect power cable to carrier PCB J3                                    ║
║ 5.2 Connect solenoid cable to J3-2                                           ║
║ 5.3 Connect buttons to J4                                                     ║
║ 5.4 Connect OLED to MIPI connector                                           ║
║                                                                               ║
║ STEP 6: Power test (before closing housing)                                   ║
║ □ Battery voltage: _______ V (expect 7.0-8.4V)                               ║
║ □ 5V rail: _______ V (expect 5.0 ±0.1V)                                     ║
║ □ Jetson boot: PASS / FAIL                                                   ║
║ □ Camera image: PASS / FAIL                                                  ║
║ □ OLED display: PASS / FAIL                                                  ║
║ □ IMU response: PASS / FAIL                                                  ║
║                                                                               ║
║ RECORD: S/N _________ | Operator _________ | Date _________ | QC _________  ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

# 11. TEST EQUIPMENT LIST

## 11.1 Required Test Equipment

| Equipment | Model/Spec | Purpose | Qty | Own/Rent |
|-----------|------------|---------|-----|----------|
| Digital Multimeter | Fluke 117 or equiv | Voltage, continuity | 1 | Own |
| Oscilloscope | 100MHz, 2ch | Signal debug | 1 | Own |
| DC Power Supply | 0-30V, 5A | Bench testing | 1 | Own |
| USB Logic Analyzer | 24MHz, 8ch | Protocol debug | 1 | Own |
| Thermal Camera | FLIR C3 or equiv | Thermal validation | 1 | Rent |
| Bore Sight Laser | Green, adjustable | Optical alignment | 1 | Own |
| IP65 Test Fixture | Spray nozzle setup | Seal validation | 1 | Build |
| Vibration Table | Small shaker | Vibe screening | 1 | Rent |
| Torque Screwdriver | 0.1-1.0 N·m range | Assembly | 2 | Own |
| Digital Caliper | 150mm, 0.01mm | Inspection | 2 | Own |

## 11.2 Test Fixtures to Build

| Fixture ID | Name | Purpose | Est. Cost |
|------------|------|---------|-----------|
| VS-FIX-001 | Functional Test Jig | Power, I/O testing | $150 |
| VS-FIX-002 | Optical Alignment Fixture | Boresight setup | $200 |
| VS-FIX-003 | Picatinny Rail Fixture | Mount testing | $80 |
| VS-FIX-004 | IP65 Spray Test Fixture | Seal testing | $100 |
| VS-FIX-005 | Battery Charge Station | Parallel charging | $50 |
| **TOTAL** | | | **$580** |

---

# 12. QUALITY CONTROL POINTS

## 12.1 In-Process Quality Gates

| Gate | Stage | Checks | Hold Point? |
|------|-------|--------|-------------|
| QG-1 | Incoming Inspection | Dimensions, material cert | Yes |
| QG-2 | Optical Sub-Assy | Alignment, cleanliness | Yes |
| QG-3 | Electronics Integration | Power rails, boot test | Yes |
| QG-4 | Main Assembly Complete | Functional checkout | Yes |
| QG-5 | Calibration Complete | Boresight, IMU | Yes |
| QG-6 | Final Test | Full ATP per VS-ATP-001 | Yes |

## 12.2 Non-Conformance Procedure

```
╔═══════════════════════════════════════════════════════════════════════════════╗
║                    NON-CONFORMANCE REPORT (NCR)                               ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║ NCR#: VS-NCR-_____ | Date: _____________ | Unit S/N: _____________           ║
╠═══════════════════════════════════════════════════════════════════════════════╣
║                                                                               ║
║ DESCRIPTION OF NON-CONFORMANCE:                                              ║
║ ___________________________________________________________________________  ║
║ ___________________________________________________________________________  ║
║                                                                               ║
║ REQUIREMENT VIOLATED: ______________________ (Req ID)                        ║
║                                                                               ║
║ DISPOSITION:                                                                  ║
║ □ USE AS-IS (justify): _________________________________________________    ║
║ □ REWORK (describe): ___________________________________________________    ║
║ □ SCRAP                                                                      ║
║ □ RETURN TO SUPPLIER                                                         ║
║                                                                               ║
║ ROOT CAUSE: ____________________________________________________________    ║
║                                                                               ║
║ CORRECTIVE ACTION: _____________________________________________________    ║
║                                                                               ║
║ APPROVALS:                                                                    ║
║ Engineer: _______________ | QA: _______________ | PM: _______________        ║
╚═══════════════════════════════════════════════════════════════════════════════╝
```

---

# 13. BUILD SCHEDULE

## 13.1 Detailed 8-Week Schedule

```
WEEK 1: PROCUREMENT INITIATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Day 1: Order Jetson Nano (4×)
□ Day 1: Order IMX477 cameras (4×)
□ Day 1: Order optical components (Edmund, Thorlabs)
□ Day 2: Issue CNC RFQ to 3 suppliers
□ Day 3: Issue PCB RFQ to JLCPCB
□ Day 4: Order electronics components (Mouser, AliExpress)
□ Day 5: Order fasteners (McMaster-Carr)
Deliverable: All POs issued

WEEK 2: DESIGN FINALIZATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Finalize CNC drawings, release to supplier
□ Finalize PCB design, release Gerbers
□ Finalize wire harness drawing
□ Build test fixtures (VS-FIX-001 through 005)
□ Prepare assembly workstation
Deliverable: Released drawings, fixtures built

WEEK 3: EARLY PARTS ARRIVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Receive Jetson Nano, incoming inspection
□ Receive IMX477 cameras, functional test
□ Receive bare PCBs (ahead of PCBA)
□ Receive fastener kit
□ Begin firmware development on Jetson
Deliverable: Core electronics validated

WEEK 4: MAIN PARTS ARRIVAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Receive CNC parts (machined, pre-anodize)
□ Dimensional inspection per QG-1
□ Send parts to anodize
□ Receive assembled PCBs
□ PCB functional test
Deliverable: All major parts received

WEEK 5: ANODIZE & OPTICAL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Receive anodized parts
□ Receive optical components
□ Build optical sub-assemblies (3×)
□ Optical alignment verification
□ Prepare wire harnesses
Deliverable: Optical sub-assemblies complete (QG-2)

WEEK 6: MAIN ASSEMBLY
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Assemble Unit Alpha-1
□ Electronics integration test (QG-3)
□ Assemble Unit Alpha-2
□ Assemble Unit Alpha-3
□ Main assembly complete all units (QG-4)
Deliverable: 3 units mechanically complete

WEEK 7: CALIBRATION & SOFTWARE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Load firmware on all units
□ IMU calibration (all units)
□ Optical boresight alignment (all units)
□ Camera focus adjustment
□ AI model deployment and test
Deliverable: Calibration complete (QG-5)

WEEK 8: FINAL TEST & DOCUMENTATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
□ Execute ATP on Alpha-1
□ Execute ATP on Alpha-2
□ Execute ATP on Alpha-3
□ IP65 seal test (all units)
□ Documentation package complete
□ Build review meeting
Deliverable: 3 tested units ready (QG-6)
```

## 13.2 Build Completion Criteria

| Criterion | Target | Verification |
|-----------|--------|--------------|
| All 3 units assembled | 100% | Physical count |
| All 3 units pass ATP | 100% | ATP records |
| All 3 units calibrated | 100% | Cal certificates |
| IP65 verified | 100% | Spray test records |
| Documentation complete | 100% | Doc checklist |
| Lessons learned captured | Yes | Review meeting notes |

---

# 14. DOCUMENT CHECKLIST

## 14.1 Documents Required for Build

| # | Document | Status | Location |
|---|----------|--------|----------|
| ☐ | CNC Drawing Package (15 drawings) | To release | /drawings/mechanical |
| ☐ | PCB Gerber Package | To release | /drawings/electronics |
| ☐ | PCB Assembly Drawing | To release | /drawings/electronics |
| ☐ | Wire Harness Drawing | To release | /drawings/electronics |
| ☐ | BOM Master List | Complete | This document |
| ☐ | Assembly Work Instructions | Complete | This document |
| ☐ | ATP Procedure (VS-ATP-001) | Complete | WP6 document |
| ☐ | Incoming Inspection Forms | Complete | This document |
| ☐ | NCR Forms | Complete | This document |

## 14.2 Records to Generate During Build

| Record | When | Retention |
|--------|------|-----------|
| Incoming Inspection Reports | Part receipt | 5 years |
| Assembly Traveler (per unit) | During build | Permanent |
| Calibration Records | Week 7 | Permanent |
| ATP Test Data | Week 8 | Permanent |
| NCRs (if any) | As needed | 5 years |
| Build Photos | Throughout | Permanent |

---

# APPENDIX A: PROCUREMENT CHECKLIST

```
V-SMASH-LITE PROTOTYPE PROCUREMENT CHECKLIST
══════════════════════════════════════════════════════════════════════════════

WEEK 1 - DAY 1 (CRITICAL ORDERS)
☐ Jetson Nano 4GB × 4 ..................... PO#: _______ | $ _______
☐ IMX477 Camera × 4 ....................... PO#: _______ | $ _______
☐ 6mm Lens × 4 ............................ PO#: _______ | $ _______
☐ Edmund Optics order (combiner, lens, filter) PO#: _______ | $ _______
☐ Micro OLED × 4 .......................... PO#: _______ | $ _______

WEEK 1 - DAY 2-3 (RFQs)
☐ CNC RFQ issued to Supplier A ............ RFQ#: _______
☐ CNC RFQ issued to Supplier B ............ RFQ#: _______
☐ CNC RFQ issued to Supplier C ............ RFQ#: _______
☐ PCB RFQ issued to JLCPCB ................ RFQ#: _______

WEEK 1 - DAY 4-5 (GENERAL ORDERS)
☐ Electronics components (Mouser) ......... PO#: _______ | $ _______
☐ Electronics components (AliExpress) ..... PO#: _______ | $ _______
☐ Fasteners (McMaster-Carr) ............... PO#: _______ | $ _______
☐ Batteries (18650) × 8 ................... PO#: _______ | $ _______
☐ Cables, connectors, misc ................ PO#: _______ | $ _______

WEEK 2 (AFTER QUOTE SELECTION)
☐ CNC Machining PO ........................ PO#: _______ | $ _______
☐ PCB Fabrication PO ...................... PO#: _______ | $ _______
☐ PCB Assembly PO ......................... PO#: _______ | $ _______
☐ Anodize PO (after machining complete) ... PO#: _______ | $ _______

══════════════════════════════════════════════════════════════════════════════
TOTAL COMMITTED: $ _____________
BUDGET: $18,000
REMAINING: $ _____________
══════════════════════════════════════════════════════════════════════════════

Procurement Lead: _________________ | Date: _________________
```

---

# APPENDIX B: UNIT SERIAL NUMBER ASSIGNMENT

| Unit | Serial Number | Purpose | Build Start | Build Complete |
|------|---------------|---------|-------------|----------------|
| Alpha-1 | VS-A1-001 | EDU (Engineering Development) | Week 6 | Week 8 |
| Alpha-2 | VS-A2-001 | Environmental Test Unit | Week 6 | Week 8 |
| Alpha-3 | VS-A3-001 | Field Demo Unit | Week 6 | Week 8 |

---

**Document Control**

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-19 | Design Team | Initial release |

---

*V-SMASH-LITE Manufacturing Procurement Package v1.0*
*Ready-to-Execute Build Documentation*

**END OF DOCUMENT**
