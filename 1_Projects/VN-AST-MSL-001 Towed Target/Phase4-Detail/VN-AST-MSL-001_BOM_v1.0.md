---
project: VN-AST-MSL-001 "THANH TRI"
type: bill-of-materials
version: 1.0
created: 2026-03-08
phase: 4 - Detail Design
input: Phase 3 Embodiment Design v2.0
design_decisions:
  Q1: Bolted HDPE joints (mechanical flanges, NOT butt fusion)
  Q3: PU foam 35 kg/m3 (closed-cell, marine grade)
local_content_target: ">=60% by value"
---

# VN-AST-MSL-001 "THANH TRI" — Bill of Materials v1.0

## Design Decisions Applied

| # | Question | Decision | Rationale |
|:-:|----------|----------|-----------|
| Q1 | HDPE joining method | **Bolted flanges** | No PE-certified fusion welder available locally. Bolted = field-repairable, no special equipment. |
| Q3 | Foam density | **35 kg/m3** | Sufficient buoyancy margin (SF=2.47). 45 kg/m3 adds cost without structural benefit. |

---

## BOM Summary

| Subsystem | Items | Weight (kg) | Cost (M VND) | Local % |
|-----------|:-----:|:-----------:|:------------:|:-------:|
| F1 Buoyancy | 8 | 3,500 | 365 | 95% |
| F2 Structure | 9 | 1,500 | 108 | 90% |
| F3 Stability | 3 | 100 | 15 | 100% |
| F4 Mooring | 6 | 550 | 109 | 75% |
| F5 RCS | 5 | 295 | 46 | 100% |
| F6 Position ID | 5 | 15 | 35 | 30% |
| F8 Power | 6 | 105 | 65 | 40% |
| F9 Hardware/Paint | 3 | 100 | 25 | 90% |
| **TOTAL** | **45** | **6,165** | **768** | **83%** |

**Local content: 83% by value >> 60% target.** Only F6 (electronics) and F8 (battery, MPPT) below 60%.

---

## F1 BUOYANCY SYSTEM (365M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 1.1 | F1-RING-001 | HDPE ring pipe Ø600mm PE100 SDR17, L=3.14m | 20 | pc | PE100 SDR17 PN10 | Buy | VN | 8.0 | 160.0 | 2w |
| 1.2 | F1-FLNG-001 | HDPE stub-end flange Ø600mm (bolted joint Q1) | 40 | pc | PE100 + SS316 backing ring | Buy | VN | 2.5 | 100.0 | 3w |
| 1.3 | F1-BOLT-001 | Flange bolt set M20x80 SS316L (8 per joint) | 20 | set | SS316L, ISO 4014 | Buy | VN | 0.3 | 6.0 | 1w |
| 1.4 | F1-GSKT-001 | EPDM gasket Ø600mm flange face | 20 | pc | EPDM shore 60A | Buy | VN | 0.1 | 2.0 | 1w |
| 1.5 | F1-FOAM-001 | PU foam 35 kg/m3 closed-cell, 2-component (Q3) | 800 | kg | Polyurethane, marine grade | Buy | VN | 0.08 | 64.0 | 2w |
| 1.6 | F1-SPAC-001 | Inter-tier spacer block HDPE 100x100x400 | 20 | pc | PE100 solid | Make | VN | 0.15 | 3.0 | 1w |
| 1.7 | F1-PONT-001 | HDPE dock float pontoon Ø400x2000mm | 8 | pc | HDPE rotomolded | Buy | VN | 2.5 | 20.0 | 2w |
| 1.8 | F1-STRP-001 | Pontoon strap SS316L 50x5mm with EPDM pad | 16 | pc | SS316L + EPDM | Make | VN | 0.6 | 10.0 | 1w |

**F1 Notes:**
- Q1 impact: Butt fusion joints (20 joints) replaced by bolted stub-end flanges (40 flanges + 20 bolt sets + 20 gaskets). Cost +~45M VND vs fusion but eliminates need for PE-certified welder and special equipment.
- Q3 impact: 35 kg/m3 foam vs 45 = ~800 kg needed. Cost saving ~15M VND.
- Ring segments: 10 per tier x 2 tiers = 20 pipes, joined by flanges at each joint.
- Foam injection after ring assembly on site.

---

## F2 STRUCTURE SYSTEM (108M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 2.1 | F2-BEAM-001 | Radial beam HEA 120 x L=4200mm | 8 | pc | S355J2, EN 10025-2 | Make | VN | 3.0 | 24.0 | 2w |
| 2.2 | F2-HUB-001 | Center hub plate Ø1000x20mm + stiffeners | 1 | set | S355J2, EN 10025-2 | Make | VN | 8.0 | 8.0 | 2w |
| 2.3 | F2-HDG-001 | Hot-dip galvanizing for deck frame (850 kg) | 1 | lot | ISO 1461, 85 um min | Buy | VN | 12.0 | 12.0 | 1w |
| 2.4 | F2-LEG-L-001 | Tower main leg lower 60x60x5 Al angle, L=3500 | 4 | pc | Al 6082-T6, EN 755 | Buy | VN/Import | 1.5 | 6.0 | 3w |
| 2.5 | F2-LEG-U-001 | Tower main leg upper 50x50x4 Al angle, L=4500 | 4 | pc | Al 6082-T6, EN 755 | Buy | VN/Import | 1.2 | 4.8 | 3w |
| 2.6 | F2-DIAG-L-001 | Tower diagonal lower 40x40x4 Al angle | 24 | pc | Al 6082-T6, EN 755 | Make | VN | 0.4 | 9.6 | 2w |
| 2.7 | F2-DIAG-U-001 | Tower diagonal upper 30x30x3 Al angle | 32 | pc | Al 6082-T6, EN 755 | Make | VN | 0.3 | 9.6 | 2w |
| 2.8 | F2-TBOLT-001 | Tower bolt set M12x40 SS316L (module joints) | 56 | set | SS316L, ISO 4014 | Buy | VN | 0.05 | 2.8 | 1w |
| 2.9 | F2-SADD-001 | Saddle bracket assembly (ring-to-deck) | 8 | set | SS316L 6mm plate + EPDM + straps | Make | VN | 3.9 | 31.2 | 2w |

**F2 Notes:**
- Tower: 8 modules x 1.0m, bolted assembly (field-assemblable, max 4.5m transport).
- Al 6082-T6 angle may need import if VN stock insufficient. Check Dong A Aluminum, Ho Chi Minh.
- HDG at local galvanizing plant (multiple sources in HCMC/Hanoi).

---

## F3 STABILITY SYSTEM (15M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 3.1 | F3-TANK-001 | Ballast tank HDPE 500L with valve | 2 | pc | HDPE rotomolded | Buy | VN | 5.0 | 10.0 | 2w |
| 3.2 | F3-PUMP-001 | Bilge/ballast pump 12V 300W submersible | 1 | pc | Rule 2000 equiv. | Buy | Import | 3.0 | 3.0 | 2w |
| 3.3 | F3-VALV-001 | Solenoid valve 1" 12V normally closed | 2 | pc | SS316L, marine grade | Buy | Import | 1.0 | 2.0 | 2w |

---

## F4 MOORING SYSTEM (109M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 4.1 | F4-CHAI-001 | Mooring chain Ø16mm G3 HDG studlink, 60m | 3 | roll | G3 HDG, BL 220kN | Buy | VN | 18.0 | 54.0 | 3w |
| 4.2 | F4-ANCH-001 | Dual helix screw anchor Ø400+300, shaft Ø50x2000 | 3 | pc | S355 HDG | Make | VN | 8.0 | 24.0 | 3w |
| 4.3 | F4-SHAK-001 | Anchor shackle Ø22mm bow type, WLL 6.5t | 6 | pc | Drop-forged HDG | Buy | VN | 0.5 | 3.0 | 1w |
| 4.4 | F4-SWIV-001 | Anchor swivel Ø22mm, WLL 6.5t | 3 | pc | Drop-forged HDG | Buy | Import | 2.0 | 6.0 | 2w |
| 4.5 | F4-BRDL-001 | Bridle plate Ø600x25mm with 3 eyes + pendant | 1 | set | S355 HDG, welded | Make | VN | 12.0 | 12.0 | 2w |
| 4.6 | F4-BUOY-001 | Pickup buoy 300mm dia with 10m polyprop line | 3 | set | Polyethylene, orange | Buy | VN | 3.3 | 10.0 | 1w |

**F4 Notes:**
- Chain: order 180m total (3x60m) with 10% contingency.
- Helix anchors: fabricate locally, HDG after welding. Pull-test 1 sample to 80 kN before deployment.
- Swivels may need marine-grade import (Crosby or equivalent).

---

## F5 RCS SYSTEM (46M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 5.1 | F5-REFL-001 | Trihedral corner reflector 800mm edge, triangular | 12 | pc | Al 6082-T6, 3mm sheet | Make | VN | 1.5 | 18.0 | 2w |
| 5.2 | F5-RING-001 | RCS mounting ring Ø2200mm, 50x50x4 Al angle | 1 | set | Al 6082-T6 | Make | VN | 5.0 | 5.0 | 2w |
| 5.3 | F5-BRKT-001 | Reflector mounting bracket with adjustment | 12 | pc | Al 6082-T6, 5mm plate | Make | VN | 0.3 | 3.6 | 1w |
| 5.4 | F5-SILH-001 | Visual silhouette panel EPS foam 5.0x3.0x0.5m | 1 | set | EPS 30 kg/m3 + FRP coating | Make | VN | 12.0 | 12.0 | 2w |
| 5.5 | F5-PANT-001 | International Orange marine paint | 10 | L | 2-component polyurethane | Buy | VN | 0.7 | 7.0 | 1w |

**F5 Notes:**
- 100% local fabrication. Trihedrals: CNC bend 3mm Al sheet, rivet 3 panels per unit.
- RCS performance depends on surface flatness <= 1mm deviation. QC check each reflector.
- Silhouette: EPS foam blocks bonded, CNC hot-wire shaped, FRP coated, painted.

---

## F6 POSITION ID SYSTEM (35M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 6.1 | F6-LANT-001 | IALA Yellow LED lantern Fl Y 4s, solar self-contained | 1 | pc | Sealite SL-60 equiv. | Buy | Import | 8.0 | 8.0 | 4w |
| 6.2 | F6-GPS-001 | GPS receiver u-blox NEO-M9N + active antenna | 1 | set | Multi-GNSS | Buy | Import | 1.5 | 1.5 | 2w |
| 6.3 | F6-AIS-001 | AIS transponder Type 1 Real AtoN (IEC 62320-2) | 1 | pc | Vesper equiv. | Buy | Import | 21.5 | 21.5 | 4w |
| 6.4 | F6-MCU-001 | Controller ESP32 + PCB + sensors + wiring | 1 | set | Custom PCB | Make | VN | 2.0 | 2.0 | 2w |
| 6.5 | F6-ENCL-001 | Pelican 1200 enclosure IP67 | 1 | pc | Polycarbonate | Buy | Import | 2.0 | 2.0 | 2w |

**F6 Notes:**
- AIS is OPTIONAL. Without AIS: 13.5M VND, 70% lower cost.
- IALA lantern: 4-week lead time from marine supplier (Singapore/China).
- GPS + ESP32 controller: assemble locally, firmware in-house.

---

## F8 POWER SYSTEM (65M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 8.1 | F8-SOLR-001 | Solar panel 250W monocrystalline IP67 | 4 | pc | 60-cell, MC4 | Buy | VN | 3.0 | 12.0 | 1w |
| 8.2 | F8-BATT-001 | LiFePO4 battery 51.2V 80Ah with BMS | 1 | pc | 16S, prismatic cells | Buy | Import | 25.0 | 25.0 | 3w |
| 8.3 | F8-MPPT-001 | MPPT solar charger 60A 150V input 48V output | 1 | pc | Victron equiv. | Buy | Import | 8.0 | 8.0 | 2w |
| 8.4 | F8-DCDC-001 | DC-DC converter 48V to 24V 15A (pump) | 1 | pc | Isolated, marine | Buy | Import | 3.0 | 3.0 | 2w |
| 8.5 | F8-DCDC-002 | DC-DC converter 48V to 12V 10A (controls) | 1 | pc | Isolated, marine | Buy | Import | 2.0 | 2.0 | 2w |
| 8.6 | F8-WIRE-001 | Marine cable, connectors, terminals, fuses | 1 | lot | Tinned copper, UV-rated | Buy | VN | 15.0 | 15.0 | 1w |

---

## F9 HARDWARE, PAINT, MISCELLANEOUS (25M VND)

| # | Part No. | Description | Qty | Unit | Material/Spec | Make/Buy | Local | Unit Cost (M VND) | Total (M VND) | Lead Time |
|:-:|----------|-------------|:---:|:----:|---------------|:--------:|:-----:|:-----------------:|:-------------:|:---------:|
| 9.1 | F9-HDWR-001 | General hardware: bolts, nuts, washers SS316L | 1 | lot | Various sizes | Buy | VN | 8.0 | 8.0 | 1w |
| 9.2 | F9-PANT-001 | Marine paint system (primer + topcoat) for steel | 1 | lot | 2-coat epoxy + PU topcoat | Buy | VN | 10.0 | 10.0 | 1w |
| 9.3 | F9-TOOL-001 | Consumables: welding rod, cutting discs, etc. | 1 | lot | Various | Buy | VN | 7.0 | 7.0 | 1w |

---

## LOCAL CONTENT ANALYSIS

| Subsystem | Total (M VND) | Local (M VND) | Import (M VND) | Local % |
|-----------|:------------:|:-------------:|:--------------:|:-------:|
| F1 Buoyancy | 365 | 365 | 0 | 100% |
| F2 Structure | 108 | 97 | 11 | 90% |
| F3 Stability | 15 | 10 | 5 | 67% |
| F4 Mooring | 109 | 103 | 6 | 94% |
| F5 RCS | 46 | 46 | 0 | 100% |
| F6 Position ID | 35 | 2 | 33 | 6% |
| F8 Power | 65 | 27 | 38 | 42% |
| F9 Misc | 25 | 25 | 0 | 100% |
| **TOTAL** | **768** | **675** | **93** | **88%** |

**Local content: 88% by value. Target >=60%: PASS.**

**Import-dependent items (long lead time):**

| Item | Cost (M VND) | Lead Time | Risk | Mitigation |
|------|:------------:|:---------:|:----:|------------|
| IALA Lantern | 8.0 | 4w | Medium | Order first; multiple suppliers (Sealite, Tideland) |
| AIS Transponder | 21.5 | 4w | Medium | Optional item; can ship without AIS initially |
| LiFePO4 Battery | 25.0 | 3w | Low | Multiple VN distributors (EVE, CATL cells) |
| MPPT Charger | 8.0 | 2w | Low | Victron has VN distributor |
| Al 6082-T6 angle | 11.0 | 3w | Medium | Check Dong A Aluminum stock first |

---

## CRITICAL PATH ITEMS

```
WEEK 1: Order immediately (longest lead time)
  +-- F6-LANT-001  IALA Lantern (4w)
  +-- F6-AIS-001   AIS Transponder (4w) [if included]
  +-- F1-FLNG-001  HDPE flanges (3w) [Q1 decision: 40 flanges]
  +-- F4-CHAI-001  Mooring chain (3w)
  +-- F8-BATT-001  LiFePO4 battery (3w)
  +-- F2-LEG-*     Al 6082-T6 angle stock (3w)

WEEK 1-2: Order standard items
  +-- F1-RING-001  HDPE pipe (2w)
  +-- F1-FOAM-001  PU foam (2w)
  +-- F1-PONT-001  Dock floats (2w)
  +-- F8-SOLR-001  Solar panels (1w)
  +-- All SS316L hardware (1w)

WEEK 2-3: Begin fabrication
  +-- F2 Deck frame: cut, weld, send to HDG
  +-- F4-ANCH-001  Helix anchors: fabricate + HDG
  +-- F5-REFL-001  Trihedral reflectors: sheet cutting + bending

WEEK 3-4: Assembly
  +-- F1 Ring assembly: bolt segments + foam injection
  +-- F2 Deck + tower modules
  +-- F5 Silhouette fabrication

WEEK 4: Integration
  +-- Mount deck on ring
  +-- Erect tower
  +-- Install systems (F5, F6, F8)
  +-- Ballast + stability check
```

**Total fabrication + assembly: 4 weeks from first material delivery.**
**Total with procurement: 5-6 weeks from order.**

---

## COST COMPARISON

| Item | Phase 3 v2.0 Estimate | BOM v1.0 (Q1 bolted, Q3 35) | Delta |
|------|:--------------------:|:---------------------------:|:-----:|
| F1 Buoyancy | 355M | 365M | +10M (flanges vs fusion) |
| F2 Structure | 103M | 108M | +5M (refined) |
| F4 Mooring | 109M | 109M | 0 |
| F5 RCS | 46M | 46M | 0 |
| F6 Position ID | 35M | 35M | 0 |
| F8 Power | 60M | 65M | +5M (refined) |
| Other | — | 40M | (F3+F9) |
| **TOTAL** | **810M** | **768M** | **-42M (-5%)** |

Phase 3 estimate included 810M with margin. BOM v1.0 at 768M is within budget. Remaining 42M = contingency.

---

*BOM v1.0 generated 2026-03-08. 45 line items, 6 subsystems, 88% local content.*
*Next: Sourcing list with vendor names + contact → place orders → dP/dt > 0.*
