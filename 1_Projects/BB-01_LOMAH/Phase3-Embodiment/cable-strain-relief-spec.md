# Cable & Strain Relief Specification: BB-01

> **Document**: SPEC-BB01-CABLE-001
> **Version**: 1.0
> **Date**: 2026-01-27
> **Closes**: DfA-002 (Cable gland drilling)
> **Scope**: Cable glands, strain relief, routing for MCU Box

---

## 1. Overview

### 1.1 Purpose

Define cable entry, strain relief, and routing for BB-01 MCU Box to ensure:
- IP67 seal integrity
- Mechanical strain protection
- Consistent assembly
- Field serviceability

### 1.2 Cable Summary

| Cable | Function | Type | OD | Gland |
|-------|----------|------|-----|-------|
| PZT1-4 | Sensor signals | 2-core shielded | 5mm | PG9 |
| PWR | 12V power | 2-core | 6mm | PG9 |
| ANT | LoRa antenna | RG174 coax | 3mm | PG7 or SMA |

**Total Cable Glands**: 6 (4× PZT + 1× PWR + 1× ANT)

---

## 2. Enclosure Drill Template

### 2.1 Enclosure Specification

| Parameter | Value |
|-----------|-------|
| Type | IP67 ABS Junction Box |
| External Size | 200 × 150 × 100 mm |
| Wall Thickness | 4mm |
| Gland Thread | Metric (PG series) |

### 2.2 Hole Layout

```
ENCLOSURE BOTTOM VIEW (Cable Entry Side)
┌─────────────────────────────────────────────────────────┐
│                                                         │
│    200mm                                                │
│  ◄──────────────────────────────────────────────────►   │
│                                                         │
│  ┌─────────────────────────────────────────────────┐   │
│  │                                                 │ ▲ │
│  │   ○ PZT1      ○ PZT2      ○ PZT3      ○ PZT4   │ │ │
│  │   (15.5)      (15.5)      (15.5)      (15.5)   │ │ │
│  │                                                 │ │ │
│  │      25    50    50    50    25                │150│
│  │   ◄────►◄────►◄────►◄────►◄────►               │mm│
│  │                                                 │ │ │
│  │                                                 │ │ │
│  │   ○ PWR                            ○ ANT       │ │ │
│  │   (15.5)                           (12.5)      │ ▼ │
│  │                                                 │   │
│  │      30                               30        │   │
│  │   ◄────►                           ◄────►       │   │
│  │                                                 │   │
│  └─────────────────────────────────────────────────┘   │
│                                                         │
└─────────────────────────────────────────────────────────┘

DIMENSIONS (from left edge):
  PZT1: X=25mm,  Y=25mm    Hole: Ø15.5mm (PG9)
  PZT2: X=75mm,  Y=25mm    Hole: Ø15.5mm (PG9)
  PZT3: X=125mm, Y=25mm    Hole: Ø15.5mm (PG9)
  PZT4: X=175mm, Y=25mm    Hole: Ø15.5mm (PG9)
  PWR:  X=30mm,  Y=125mm   Hole: Ø15.5mm (PG9)
  ANT:  X=170mm, Y=125mm   Hole: Ø12.5mm (PG7) or Ø16mm (SMA)
```

### 2.3 Drill Template Drawing

```
┌─────────────────────────────────────────────────────────┐
│                   DRILL TEMPLATE                        │
│                   BB-01 MCU BOX                         │
│                   DWG: DT-BB01-001                      │
├─────────────────────────────────────────────────────────┤
│                                                         │
│    ┌───┐         ┌───┐         ┌───┐         ┌───┐     │
│    │ 1 │         │ 2 │         │ 3 │         │ 4 │     │
│    │   │         │   │         │   │         │   │     │
│    └─┬─┘         └─┬─┘         └─┬─┘         └─┬─┘     │
│      │             │             │             │        │
│   ───┼─────────────┼─────────────┼─────────────┼───    │
│      │    50mm     │    50mm     │    50mm     │        │
│   25mm                                         25mm     │
│                                                         │
│                                                         │
│         100mm                                           │
│                                                         │
│    ┌───┐                                     ┌───┐     │
│    │ 5 │                                     │ 6 │     │
│    │   │                                     │   │     │
│    └───┘                                     └───┘     │
│   30mm                                       30mm      │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  HOLE SCHEDULE:                                         │
│  1-4: Ø15.5mm (PG9 gland) - PZT sensors                │
│  5:   Ø15.5mm (PG9 gland) - Power                      │
│  6:   Ø12.5mm (PG7) or Ø16mm (SMA bulkhead) - Antenna  │
├─────────────────────────────────────────────────────────┤
│  Material: 3mm Acrylic or Aluminum                      │
│  Align template to enclosure corner                     │
│  Center punch before drilling                           │
└─────────────────────────────────────────────────────────┘
```

### 2.4 Drill Template Fabrication

| Method | Material | Cost | Accuracy |
|--------|----------|------|----------|
| Laser cut (recommended) | 3mm Acrylic | ~50K VND | ±0.1mm |
| CNC mill | 3mm Aluminum | ~100K VND | ±0.05mm |
| Manual drill + print | Paper template | ~5K VND | ±1mm |

**Recommended**: Laser-cut acrylic template for production use.

### 2.5 Drilling Procedure

```
ENCLOSURE DRILLING PROCEDURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Tools Required:
☐ Drill template (DT-BB01-001)
☐ Center punch
☐ Drill press (preferred) or hand drill
☐ Step drill or hole saw
☐ Deburring tool
☐ Safety glasses
☐ Clamps

Procedure:

STEP 1: Prepare Enclosure
☐ Remove lid and internal parts
☐ Clean surface
☐ Position template on bottom face (cable entry)
☐ Align to corner reference
☐ Clamp or tape securely

STEP 2: Mark Holes
☐ Center punch all 6 hole positions
☐ Remove template
☐ Verify positions (measure from edges)

STEP 3: Drill Pilot Holes
☐ Drill Ø3mm pilot holes at all marks
☐ Use low speed, steady pressure
☐ Support material to prevent cracking

STEP 4: Drill Final Holes
☐ Holes 1-5: Step drill to Ø15.5mm (PG9)
☐ Hole 6: Step drill to Ø12.5mm (PG7) or Ø16mm (SMA)
☐ Go slowly to prevent ABS melting
☐ Clear chips frequently

STEP 5: Finish
☐ Deburr all holes (inside and outside)
☐ Clean all debris
☐ Test fit cable glands
☐ Document in traveler

QUALITY CHECK:
☐ All holes centered (±1mm)
☐ No cracks or chips
☐ Glands thread in smoothly
☐ Gasket surface undamaged
```

---

## 3. Cable Gland Specification

### 3.1 Gland Selection

| Position | Gland | Thread | Cable OD Range | Torque |
|----------|-------|--------|----------------|--------|
| PZT1-4 | PG9 Nylon | M16×1.5 | 4-8mm | 2-3 Nm |
| PWR | PG9 Nylon | M16×1.5 | 4-8mm | 2-3 Nm |
| ANT | PG7 Nylon | M12×1.5 | 2-5mm | 1-2 Nm |

### 3.2 Approved Parts

| Part | Manufacturer | Material | IP Rating | Source |
|------|--------------|----------|-----------|--------|
| PG9-BK | Generic | PA66 Nylon | IP68 | Nhật Tảo |
| PG7-BK | Generic | PA66 Nylon | IP68 | Nhật Tảo |
| Locknut PG9 | Generic | PA66 Nylon | - | Nhật Tảo |
| Locknut PG7 | Generic | PA66 Nylon | - | Nhật Tảo |

**Requirements**:
- Material: Black PA66 nylon (UV resistant)
- IP Rating: IP68 minimum
- Temperature: -40°C to +100°C

### 3.3 Installation

```
CABLE GLAND INSTALLATION
━━━━━━━━━━━━━━━━━━━━━━━━

Components:
┌─────────────┐
│   Gland     │  ← Body (external)
│   Body      │
├─────────────┤
│   Seal      │  ← Rubber seal (inside gland)
├─────────────┤
│   Insert    │  ← Clamping insert
├─────────────┤
│   Locknut   │  ← Internal locknut
└─────────────┘

Installation Steps:

1. Disassemble gland (remove cap, insert, seal)

2. Thread locknut onto gland body
   ☐ Locknut goes INSIDE enclosure

3. Insert gland body through hole from OUTSIDE
   ☐ Threads protrude inside

4. Hand-tighten locknut from inside
   ☐ Gland shoulder seats against enclosure

5. Final torque: 2-3 Nm (PG9) or 1-2 Nm (PG7)
   ☐ Use wrench, do not over-tighten
   ☐ Nylon can crack if over-torqued

6. Thread cable through gland
   ☐ Ensure cable OD matches gland range
   ☐ Seal must grip cable, not jacket

7. Tighten gland cap
   ☐ Hand-tight + 1/4 turn
   ☐ Check seal compression

8. Verify IP rating
   ☐ No visible gaps
   ☐ Cable cannot be pulled out
```

---

## 4. Strain Relief Design

### 4.1 Strain Relief Requirements

| Requirement | Value | Rationale |
|-------------|-------|-----------|
| Pull strength | >10N | Prevent cable pullout |
| Bend radius | ≥5× cable OD | Prevent conductor damage |
| Flex cycles | >1000 | Maintenance access |
| Service loop | 50-100mm | Allow connector mate/unmate |

### 4.2 External Strain Relief (Primary)

```
EXTERNAL STRAIN RELIEF DETAIL
━━━━━━━━━━━━━━━━━━━━━━━━━━━━

                        Cable to sensor
                             │
                             │
                     ┌───────┴───────┐
                     │   Cable Tie   │ ← Anchor point
                     │   Saddle      │
                     └───────┬───────┘
                             │
                      ┌──────┴──────┐
                      │  Service    │
                      │   Loop      │ ← 50-100mm slack
                      │  (coiled)   │
                      └──────┬──────┘
                             │
                 ┌───────────┴───────────┐
                 │     Cable Gland       │
                 │  ┌─────────────────┐  │
    Enclosure    │  │    IP68 Seal    │  │
    Wall ────────┼──┼─────────────────┼──┼────
                 │  └─────────────────┘  │
                 └───────────────────────┘
                             │
                             ▼
                      To PCB connector
```

**Components**:

| Item | Part Number | Qty/Box | Source |
|------|-------------|---------|--------|
| Cable tie saddle | CTS-25-BK | 6 | Local |
| Cable tie 100mm | CT-100-BK | 12 | Local |
| Adhesive mount | AM-25-BK | 6 | Local |

### 4.3 Internal Strain Relief (Secondary)

```
INTERNAL CABLE ROUTING
━━━━━━━━━━━━━━━━━━━━━━

Inside Enclosure (Top View):

┌─────────────────────────────────────────────┐
│                                             │
│  ┌─────┐                         ┌─────┐   │
│  │ J1  │                         │ J2  │   │
│  └──┬──┘                         └──┬──┘   │
│     │                               │       │
│     │    ┌───────────────────┐     │       │
│     └────┤                   ├─────┘       │
│          │    PCB Assembly   │             │
│     ┌────┤                   ├─────┐       │
│     │    └───────────────────┘     │       │
│     │                               │       │
│  ┌──┴──┐                         ┌──┴──┐   │
│  │ J3  │                         │ J4  │   │
│  └─────┘                         └─────┘   │
│                                             │
│  ════════════════════════════════════════  │
│  Cable tie anchor rail (self-adhesive)     │
│                                             │
│  ○────○────○────○────○────○                │
│  G1   G2   G3   G4   G5   G6               │
│  PZT1 PZT2 PZT3 PZT4 PWR  ANT              │
│                                             │
└─────────────────────────────────────────────┘

Internal Routing Rules:
1. Route cables along edges (not over PCB)
2. Secure with cable tie every 50mm
3. Maintain 25mm min bend radius
4. Leave 30mm service loop at connector
```

### 4.4 Strain Relief Assembly Procedure

```
STRAIN RELIEF ASSEMBLY
━━━━━━━━━━━━━━━━━━━━━━

Step 1: Install External Saddles
☐ Clean enclosure surface with IPA
☐ Apply adhesive saddle 100mm from gland (each cable)
☐ Allow adhesive to cure (24hr or heat accelerate)

Step 2: Route External Cables
☐ Form service loop (50-100mm)
☐ Secure loop with cable tie to saddle
☐ Ensure cable exits gland downward (drip loop)

Step 3: Install Internal Anchor Rail
☐ Apply self-adhesive cable tie rail inside enclosure
☐ Position along bottom edge
☐ Press firmly, allow to cure

Step 4: Route Internal Cables
☐ Connect cables to PCB connectors
☐ Form 30mm service loop at each connector
☐ Route along edges to anchor rail
☐ Secure with cable ties (50mm spacing)

Step 5: Verify
☐ Tug test each cable (10N pull, no movement at connector)
☐ Flex test (bend cable at gland, no strain on PCB)
☐ Check all cable ties secure
```

---

## 5. Cable Routing Diagram

### 5.1 System Cable Layout

```
BB-01 SYSTEM CABLE ROUTING
━━━━━━━━━━━━━━━━━━━━━━━━━━

                    ┌───────────┐
                    │  TARGET 1 │
                    │   (7e)    │
                    └─────┬─────┘
                          │ PZT Cable 1 (2m)
    ┌───────────┐         │         ┌───────────┐
    │  TARGET 2 │         │         │  TARGET 4 │
    │   (7e)    │         │         │  (số 10)  │
    └─────┬─────┘         │         └─────┬─────┘
          │               │               │
          │ PZT Cable 2   │   PZT Cable 4 │
          │    (2m)       │      (2m)     │
          │               │               │
          │    ┌──────────┴──────────┐    │
          └────┤                     ├────┘
               │      MCU BOX        │
          ┌────┤    ┌─────────┐      ├────┐
          │    │    │   PCB   │      │    │
          │    │    └─────────┘      │    │
          │    │                     │    │
          │    └──────────┬──────────┘    │
          │               │               │
    PZT Cable 3      PWR Cable      LoRa Antenna
       (2m)           (1m)            (0.3m)
          │               │               │
    ┌─────┴─────┐   ┌─────┴─────┐   ┌─────┴─────┐
    │  TARGET 3 │   │  BATTERY  │   │  ANTENNA  │
    │   (6c)    │   │    BOX    │   │   MAST    │
    └───────────┘   └───────────┘   └───────────┘
```

### 5.2 Cable Specifications

| Cable | Length | Type | Conductor | Shield | Connector (Box) | Connector (Device) |
|-------|--------|------|-----------|--------|-----------------|-------------------|
| PZT 1-4 | 2m | Shielded | 2×0.5mm² | Braid | M12-4P male | Potted to sensor |
| PWR | 1m | Power | 2×1.0mm² | None | XT60 male | XT60 female |
| ANT | 0.3m | RG174 | 50Ω coax | Braid | SMA male | SMA female |

---

## 6. Drip Loop and Water Management

### 6.1 Drip Loop Requirements

```
DRIP LOOP DETAIL
━━━━━━━━━━━━━━━━

Incorrect (water enters gland):
                    ┌─────┐
            ────────┤Gland├──────
                    └──┬──┘
                       │
                       ▼
                    Cable

Correct (water drips away):
                    ┌─────┐
            ────────┤Gland├──────
                    └──┬──┘
                       │
                    ┌──┴──┐
                    │     │  ← Drip loop (lowest point)
                    │  ○  │     below gland
                    │     │
                    └──┬──┘
                       │
                       ▼
                    Cable to device
```

### 6.2 Enclosure Orientation

| Orientation | Gland Position | Status |
|-------------|----------------|--------|
| Glands DOWN | ✅ Correct | Water drains away |
| Glands SIDE | ⚠️ Acceptable | Add drip loops |
| Glands UP | ❌ Avoid | Water pools in glands |

**BB-01 Design**: Glands on BOTTOM face (correct)

---

## 7. Quality Checklist

### 7.1 Assembly Verification

| # | Check | Method | Accept | Reject |
|---|-------|--------|--------|--------|
| 1 | Hole positions | Measure from edge | ±1mm | >1mm |
| 2 | Hole diameter | Go/no-go gauge | Gland threads | Too tight/loose |
| 3 | Gland torque | Torque wrench | 2-3 Nm | Under/over |
| 4 | Cable OD | Caliper | Within gland range | Outside range |
| 5 | Seal compression | Visual | Uniform grip | Gap visible |
| 6 | Strain relief | 10N pull test | No movement | Cable pulls through |
| 7 | Bend radius | Visual | ≥5× OD | Sharp bend |
| 8 | Service loop | Measure | 50-100mm | <50mm |

### 7.2 IP67 Verification

| Test | Method | Duration | Pass Criteria |
|------|--------|----------|---------------|
| Dust | IP6X chamber | 8 hours | No dust ingress |
| Water | 1m submersion | 30 min | No water ingress |

**Production**: Sample test 1 per 10 units

---

## 8. Maintenance

### 8.1 Inspection Schedule

| Interval | Check | Action if Failed |
|----------|-------|------------------|
| Before use | Visual gland condition | Replace if cracked |
| Before use | Cable tie integrity | Replace if broken |
| 6 months | Gland seal | Re-torque or replace |
| 6 months | Strain relief | Resecure if loose |
| Annual | IP67 test (sample) | Investigate and repair |

### 8.2 Replacement Parts

| Part | Qty to Stock | Part Number |
|------|--------------|-------------|
| PG9 Gland | 10 | PG9-BK-IP68 |
| PG7 Gland | 5 | PG7-BK-IP68 |
| Cable tie 100mm | 50 | CT-100-BK |
| Cable tie saddle | 20 | CTS-25-BK |

---

## 9. Related Documents

- [[design/mcu-box-assembly-instructions]] - Assembly procedure
- [[design/pzt-sensor-installation]] - PZT cable termination
- [[quality/dfx-review-mcu-box]] - DfA-002 source
- [[quality/fmea-bb01]] - ENC-03, ENC-04 gland failure modes
- [[design/marine-coating-spec]] - Enclosure protection

---

## 10. Revision History

| Version | Date | Changes |
|---------|------|---------|
| 1.0 | 2026-01-27 | Initial release, closes DfA-002 |

---

*Cable & Strain Relief Specification SPEC-BB01-CABLE-001*
*Closes DfA-002 (Cable gland drilling)*
*IP67 compliant design*
