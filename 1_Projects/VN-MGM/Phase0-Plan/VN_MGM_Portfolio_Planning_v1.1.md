---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.1
supersedes: VN_MGM_Portfolio_Planning_v1.0.md
project: VN-MGM
status: approved
scope: PORTFOLIO --ex
lead_product: V1-NAVAL-12.7 (manual pedestal mount, $5-8K)
variants: 12
variant_sequence: "V1→N10→N12→V5→V3→N6→N8→V4→N7→N9→N11"
variant_sequence_v1.0: "V1→V2→N10→V3→N6→N8→V4→N7→N9→V5→N12→N11 (superseded)"
sequence_change_reason: "CEO 2026-04-10: N12 before V5 (retrofit 300 installed base first, fund V5 with N12 revenue). V2-SIM-CRADLE removed from early sequence (CUAV-SIM not ready)."
export: "2028+"
platform_reuse: "≥60% HW, ≥90% manufacturing process"
design_paradigm: "FORCE-CENTERED"
physics_function: "Point a heavy object in a controlled direction and hold it there despite disturbances"
---

# Portfolio Planning — VN-MGM Precision Heavy Pointing Platform

> **Supersedes v1.0** — expanded from 5 → 12 products via Musk First Principles + Hwang Disruptive Innovation (Session 63, 2026-04-09)

> **Physics-level function (Musk reframe):** "Point a heavy object in a controlled direction and hold it there despite disturbances (recoil, vibration, wave motion)"

---

## 1. Portfolio Overview

```
Price ($K)
   30 ┤                                                              ● N11-STABILIZED
   18 ┤                                                    ● V5-MOTORIZED
      │
    8 ┤  ● V1-NAVAL               ● N9-VEHICLE
    6 ┤              ● V4-TRIPOD           ● N12-RETROFIT
    5 ┤                      ● N7-SENSOR
    4 ┤      ● V2-SIM
    3 ┤          ● V3-ADAPTER
    2 ┤              ● N6-MINI
  1.5 ┤                  ● N8-OEM-BEARING
  0.5 ┤ ● N10-MAINT-KIT
      │
    0 ├──────────────────────────────────────────────────────────────────
      CONSUMABLE  ENTRY   TRAINING  OEM    MANUAL    SENSOR  MOTORIZED  STABILIZED
      (L-1)       (L-1)   (L1)     (L0)   (L1)      (L2)    (L1)       (L1)
```

### Layer Architecture

```
L2: New Markets   — N7-SENSOR-MOUNT (surveillance, civilian, non-weapon)
L1: Mount Line    — V1-NAVAL, V2-SIM, V4-TRIPOD, V5-MOTOR, N9-VEHICLE, N11-STAB, N12-RETROFIT
L0: Core Cell     — N8-OEM-BEARING (bearing + flange assembly)
L-1: Consumable   — V3-ADAPTER-KIT, N6-MINI, N10-MAINT-KIT
```

### All 12 Products

| # | ID | Name | BOM | Price | Margin | Layer | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **NAVAL-12.7** | $2.5-4K | $5-8K | 50-55% | L1 | VN Navy, coast guard, DK1 |
| 2 | **V2** | **SIM-CRADLE** | $1-2K | $2-4K | 50-55% | L1 | CUAV-SIM WEAPON-MOD |
| 3 | **N10** | **MAINT-KIT** | $50-100 | $200-500 | 75-80% | L-1 | All mount users, annual consumable |
| 4 | **V3** | **ADAPTER-KIT** | $0.5-1K | $1-3K | 55-67% | L-1 | Multi-weapon users |
| 5 | **N6** | **MINI** | $0.5-1K | $1-2K | 50-55% | L-1 | Small boats <20m, cameras, light weapons |
| 6 | **N8** | **OEM-BEARING** | $200-500 | $0.5-1.5K | 60-67% | L0 | OEM manufacturers, launcher bases |
| 7 | **V4** | **TRIPOD** | $1.5-3K | $3-6K | 50-55% | L1 | Army, border guard, portable |
| 8 | **N7** | **SENSOR-MOUNT** | $1-2.5K | $2-5K | 50-55% | L2 | Surveillance, searchlight, civilian |
| 9 | **N9** | **VEHICLE-TURRET** | $2-4K | $4-8K | 50-55% | L1 | APC/truck roof ring, army vehicles |
| 10 | **V5** | **MOTORIZED** | $5-9K | $10-18K | 50-55% | L1 | Pre-RCWS, remote operation |
| 11 | **N12** | **RETROFIT-KIT** | $1.5-3K | $3-6K | 50-55% | L1 | Upsell V1/V4 → motorized |
| 12 | **N11** | **STABILIZED** | $8-15K | $15-30K | 50-55% | L1 | Moving platforms, high sea state |

---

## 2. Variant Comparison Matrix

| Attribute | V1 NAVAL | V2 SIM | N10 MAINT | V3 ADAPT | N6 MINI | N8 OEM | V4 TRIPOD | N7 SENSOR | N9 VEHICLE | V5 MOTOR | N12 RETRO | N11 STAB |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| **Payload class** | 12.7-14.5mm | Sim mockup | N/A | Multi-weapon | 7.62mm/camera | N/A (bearing) | 12.7mm | Camera/radar/light | 12.7mm | 12.7-23mm | Upgrade kit | 12.7-14.5mm |
| **Azimuth** | 360° | 360° | N/A | N/A | 360° | 360° | ±120° | 360° | 360° | 360° | Adds to V1/V4 | 360° |
| **Elevation** | -15/+85° | -10/+60° | N/A | N/A | -10/+45° | N/A | -10/+70° | -15/+90° | -15/+60° | -15/+85° | Adds to V1/V4 | -15/+85° |
| **Recoil** | 50 kN | 0 | N/A | N/A | 15 kN | N/A | 50 kN | 0 | 50 kN | 80 kN | N/A | 50 kN |
| **Drive** | Manual | Manual+enc | N/A | N/A | Manual | N/A | Manual | Manual/motor | Manual | Servo | Servo add-on | Servo+IMU |
| **Weight** | ≤75 kg | ≤30 kg | 2-5 kg | 5-15 kg | ≤25 kg | 5-10 kg | ≤45 kg | ≤35 kg | ≤60 kg | ≤100 kg | 10-15 kg | ≤110 kg |
| **Environment** | Marine IP65 | Indoor IP20 | N/A | Match parent | Marine IP54 | Industrial | Tropical IP54 | Outdoor IP54 | Vehicle IP54 | Marine IP65 | Match parent | Marine IP65 |
| **Price** | $5-8K | $2-4K | $200-500 | $1-3K | $1-2K | $0.5-1.5K | $3-6K | $2-5K | $4-8K | $10-18K | $3-6K | $15-30K |

---

## 3. Điểm Khác Biệt (7 new variants)

### N10-MAINT-KIT: "Bộ Bảo Trì" (Maintenance Kit)
**Unique:** Annual consumable kit: PTFE lubricant, SS316 replacement fastener set, bearing grease, wear gauge, inspection checklist card, corrosion inhibitor spray. Every deployed mount = 1 kit/year. Zero R&D once V1 BOM finalized — just package spare parts.
**Source:** [Hwang: consumption chain — after use]
**Revenue model:** Razor-blade. $200-500/yr/mount × installed base. Compounds with every mount sold.
**Risk:** Low margin per kit. Value is in recurring revenue + customer retention.

### N6-MINI: "Giá Nhỏ" (Miniature Mount)
**Unique:** Scaled-down V1 for loads ≤25 kg. Fits patrol boats <20m, small fishing vessels, VN-XUONG-UUV work boat. Supports 7.62mm MG or PTZ camera. Hand-installable by 1 person. Cheapest entry mount at $1-2K — 10× cheaper than imported naval mounts.
**Source:** [Musk: 10×] [Hwang: non-consumption — small boats can't afford standard mounts]
**Delta from V1:** Smaller bearing (-$1K), lighter structure (-$0.5K), reduced recoil (15 kN vs 50 kN), no heavy-weapon cradle.

### N8-OEM-BEARING: "Cụm Ổ Quay" (OEM Bearing Assembly)
**Unique:** Not a mount — just the core rotating assembly: slewing ring bearing + top/bottom interface flanges + lubrication fittings. OEM component for other manufacturers, shipyards, or WX's own TARGET-DRONE catapult base. Lowest price point ($0.5-1.5K). High margin on machined flanges.
**Source:** [Musk: platform cell] [Hwang: modular disruption]
**Risk:** Low margin per unit. IP exposure (customer sees core mechanism). But bearing is COTS — value is in machined flanges + QC.

### N9-VEHICLE-TURRET: "Giá Xe" (Vehicle Turret Ring Mount)
**Unique:** Integrated hatch ring + weapon mount for APC/truck roof installation. Different from V4-TRIPOD (permanent install vs portable). Includes armored collar, rain seal, crew protection interface. Army market — different customer base than Navy.
**Source:** [Hwang: non-consumption — vehicle crews not served by pedestal or tripod]
**Delta from V1:** Turret ring replaces pedestal base (+$0.5K), hatch seal (+$0.3K), reduced elevation for roof clearance.

### N7-SENSOR-MOUNT: "Giá Cảm Biến" (Sensor Pointing Mount)
**Unique:** Non-weapon mount for camera, radar, searchlight, antenna. No recoil structure needed (0 kN). No weapon cradle — universal plate with standard bolt patterns. IP54 outdoor. Manual or optional small motor. Opens civilian market: port security, border surveillance, maritime navigation aids.
**Source:** [Musk: first principles — same physics, different payload] [Hwang: related job]
**Delta from V1:** Remove recoil structure (-$1.5K), remove weapon cradle (-$0.5K), add universal payload plate (+$0.1K). Lighter, cheaper.
**Risk:** Civilian market = different sales channel. No military premium pricing.

### N12-RETROFIT-KIT: "Bộ Nâng Cấp Điện" (Motorization Retrofit Kit)
**Unique:** Bolt-on servo motor + controller for existing V1-NAVAL or V4-TRIPOD mounts. Converts manual mount to motorized without replacing the base. Includes: 2× servo motor, motor brackets, controller box, cable harness, installation manual. Upsell path for installed base.
**Source:** [Hwang: consumption chain — upgrade phase]
**Delta from V5:** Uses V5 servo/controller tech but packaged as retrofit. No new base structure.
**Risk:** Retrofit quality may not match purpose-built V5. Structural analysis needed per mount variant.

### N11-STABILIZED: "Giá Ổn Định" (Gyro-Stabilized Mount)
**Unique:** 2-axis gyroscopic stabilization for moving platforms (ships in high sea state, vehicles on rough terrain). IMU sensor + servo actuators + stabilization algorithm. Maintains aim point ±0.5° despite platform motion up to ±15°. Premium product. Highest complexity.
**Source:** [Hwang: non-consumption — moving platforms can't use manual mounts effectively]
**Delta from V5:** Add IMU (+$1K), stabilization controller (+$1K), higher-torque servos (+$1K), reinforced structure (+$0.5K). Software = major NRE.
**Risk:** Stabilization algorithm is new domain for WX. High R&D. IMU + servo closed-loop control = complex.
**Fallback:** Partner with stabilization specialist (e.g., FLIR/Elbit gyro module OEM). Or: software stabilization via AICC (AI-compensated aiming).

---

## 4. Common Platform — Shared Components

| Component | V1 | V2 | N10 | V3 | N6 | N8 | V4 | N7 | N9 | V5 | N12 | N11 | Shared |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| Slewing ring | ✓ | ✓s | ✗ | ✗ | ✓s | ✓ | ✓s | ✓s | ✓ | ✓ | ✗ | ✓ | **9/12** |
| Weapon cradle | ✓ | ✓sim | ✗ | ✓ | ✓mini | ✗ | ✓ | ✗ | ✓ | ✓ | ✗ | ✓ | **8/12** |
| Elevation mech | ✓ | ✓s | ✗ | ✗ | ✓s | ✗ | ✓ | ✓s | ✓ | ✓m | ✓m | ✓m | **9/12** |
| Recoil struct | ✓ | ✗ | ✗ | ✗ | ✓s | ✗ | ✓ | ✗ | ✓ | ✓+ | ✗ | ✓ | **6/12** |
| Marine coating | ✓ | ✗ | ✗ | ✗ | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✗ | ✓ | **4/12** |
| CNC machining | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **11/12** |
| SS316 fasteners | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **11/12** |
| Servo motors | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | opt | ✗ | ✓ | ✓ | ✓ | **3/12** |
| IMU | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✓ | **1/12** |

(✓s = smaller version, ✓m = motorized version, ✓+ = upgraded)

### Reuse Summary

| Variant | HW Shared | Mfg Process Shared | NRE Savings |
|---|---|---|---|
| V1-NAVAL (lead) | reference | reference | — |
| V2-SIM-CRADLE | 55% | 80% | 50% |
| N10-MAINT-KIT | 100% (spare parts from V1 BOM) | 100% | 95% |
| V3-ADAPTER-KIT | 30% | 90% | 60% |
| N6-MINI | 50% (scaled) | 85% | 55% |
| N8-OEM-BEARING | 40% (bearing + flanges) | 70% | 50% |
| V4-TRIPOD | 60% | 85% | 55% |
| N7-SENSOR-MOUNT | 45% (no recoil/weapon) | 80% | 50% |
| N9-VEHICLE-TURRET | 55% | 80% | 45% |
| V5-MOTORIZED | 65% | 75% | 40% |
| N12-RETROFIT-KIT | 30% (uses V5 servo tech) | 50% | 35% |
| N11-STABILIZED | 60% | 70% | 30% |

**Manufacturing process reuse is consistently higher than HW reuse** — same CNC shop, same operators, same QC procedures. Different geometry but same skills.

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Sequence: V1→V2→N10→V3→N6→N8→V4→N7→N9→V5→N12→N11

```
2026        Q4  │ 2027 Q1   Q2   Q3   Q4  │ 2028 Q1   Q2
────────────────┼──────────────────────────┼──────────────
V1-NAVAL        │                          │
  Proto ███ Test█│●                        │
  V2-SIM █ ●   │                          │
  N10-MAINT ●   │                          │
                │ V3-ADAPTER █ ●          │
                │ N6-MINI ██ ●            │
                │ N8-OEM █ ●              │
                │    V4-TRIPOD ██ ●       │
                │    N7-SENSOR ██ ●       │
                │         N9-VEHICLE ██ ● │
                │              V5-MOTOR ███│●
                │                    N12-RE│█ ●
                │                          │ N11-STABILIZED
                │                          │ Gyro ████ ●
```

| # | Variant | Start Trigger | Duration | Delivery | R&D [L5] |
|---|---|---|---|---|---|
| 1 | V1-NAVAL | CEO bandwidth | 10-14 wk | Q4 2026 | $45K |
| 2 | V2-SIM-CRADLE | V1 weapon interface proven | 4-6 wk | Q1 2027 | $12K |
| 3 | N10-MAINT-KIT | V1 BOM finalized | 1-2 wk | Q1 2027 | $1K |
| 4 | V3-ADAPTER-KIT | V1 delivered + weapon access | 3-4 wk/kit | Q1 2027 | $8K |
| 5 | N6-MINI | V1 proven | 4-6 wk | Q2 2027 | $10K |
| 6 | N8-OEM-BEARING | V1 bearing assembly stable | 2-3 wk | Q2 2027 | $3K |
| 7 | V4-TRIPOD | V1 proven + Army demand | 6-8 wk | Q2-Q3 2027 | $20K |
| 8 | N7-SENSOR-MOUNT | V1 proven + civilian partner | 4-6 wk | Q3 2027 | $10K |
| 9 | N9-VEHICLE-TURRET | V4 proven + vehicle access | 6-8 wk | Q3-Q4 2027 | $18K |
| 10 | V5-MOTORIZED | V1+V4 proven + servo R&D | 12-16 wk | Q4 2027 | $50K |
| 11 | N12-RETROFIT-KIT | V5 servo proven | 4-6 wk | Q1 2028 | $8K |
| 12 | N11-STABILIZED | V5 proven + IMU R&D | 14-18 wk | Q2 2028 | $65K |
| | **Total NRE** | | | | **$250K** |

---

## 6. Phạm Vi Ứng Dụng (expanded)

### By Customer Segment

| Segment | Variants | Qty/yr [L5] |
|---|---|---|
| VN Navy (ships, DK1) | V1, N10, V3, N11 | 15-25 mounts + kits |
| Coast guard | V1, N6, N10 | 10-15 |
| Army | V4, N9, V3, N10 | 15-30 |
| Border guard | V4, N6, N10 | 5-10 |
| Training centers (CUAV-SIM) | V2 | 10-20 (= CUAV-SIM units) |
| Port/border security (civilian) | N7, N6 | 10-20 |
| OEM manufacturers | N8 | 20-50 assemblies |
| Vehicle fleet (Army/Police) | N9, N12 | 10-20 |
| Upgrade customers (installed base) | N12, N10 | 5-10/yr (growing with base) |

### By WX Ecosystem

| WX Product | VN-MGM Variant | Role |
|---|---|---|
| VN-CUAV-SIM WEAPON-MOD | V2-SIM-CRADLE | Training weapon station |
| VN-AICC + V5-MOTORIZED | V5 + AICC-TAC | Pre-RCWS system |
| VN-AST-MSL-001 | V1 (same ships) | Deck hardware commonality |
| VN-XUONG-UUV | N6-MINI (on work boat) | Equipment mount on deck |
| TARGET-DRONE catapult | N8-OEM-BEARING | Launcher base bearing |
| Future RCWS | V5/N11 + optics + AICC | Full indigenous RCWS |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection (12 variants)

| Year | V1 | V2 | N10 | V3 | N6 | N8 | V4 | N7 | N9 | V5 | N12 | N11 | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2027 | $60K | $20K | $5K | $10K | $5K | $5K | — | — | — | — | — | — | **$105K** |
| 2028 | $90K | $40K | $15K | $25K | $15K | $15K | $30K | $10K | $20K | — | — | — | **$260K** |
| 2029 | $90K | $50K | $25K | $30K | $20K | $25K | $60K | $20K | $30K | $30K | $10K | — | **$390K** |
| 2030 | $75K | $40K | $35K | $35K | $25K | $30K | $75K | $30K | $40K | $75K | $20K | $45K | **$525K** |
| 2031 | $60K | $30K | $40K | $30K | $20K | $25K | $60K | $30K | $35K | $120K | $25K | $75K | **$550K** |
| **5yr** | **$375K** | **$180K** | **$120K** | **$130K** | **$85K** | **$100K** | **$225K** | **$90K** | **$125K** | **$225K** | **$55K** | **$120K** | **$1,830K** |

### Revenue Comparison: v1.0 vs v1.1

| Metric | v1.0 (5 variants) | v1.1 (12 variants) | Delta |
|---|---|---|---|
| Revenue / 5yr | $1,135K | **$1,830K** | **+$695K (+61%)** |
| NRE total | $111K | $250K | +$139K |
| Platform ROI (NRE) | 131% | **192%** | +61pp |
| Revenue ROI | 2,422% | **7,220%** [L5] | +4,798pp |

### Revenue Mix by Layer

| Layer | Products | 5yr Revenue | % |
|---|---|---|---|
| L-1 Consumable/Entry | N10, V3, N6 | $335K | 18% |
| L0 Core Cell | N8-OEM | $100K | 5% |
| L1 Mount Line | V1, V2, V4, N9, V5, N12 | $1,215K | 67% |
| L2 New Market | N7-SENSOR + N11-STAB | $210K | 11% |

**Key insights:**
- N10-MAINT-KIT ($120K / 5yr) costs $1K to develop — **12,000% ROI** on that single product
- Consumable layer (N10 + V3 + N6) = $335K recurring, 18% of revenue
- V5-MOTORIZED + N11-STABILIZED + N12-RETROFIT = $400K (motorization family, 22%)
- Installed base compounds: every mount sold = N10 recurring + N12 upsell potential

---

## 8. Development Efficiency (updated)

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-NAVAL (lead) | $45K | $45K | — |
| V2-SIM-CRADLE | $20K | $10K | 50% |
| N10-MAINT-KIT | $2K | $1K | 50% |
| V3-ADAPTER-KIT | $15K | $6K | 60% |
| N6-MINI | $18K | $8K | 56% |
| N8-OEM-BEARING | $8K | $3K | 63% |
| V4-TRIPOD | $30K | $14K | 53% |
| N7-SENSOR-MOUNT | $18K | $9K | 50% |
| N9-VEHICLE-TURRET | $25K | $14K | 44% |
| V5-MOTORIZED | $60K | $36K | 40% |
| N12-RETROFIT-KIT | $15K | $8K | 47% |
| N11-STABILIZED | $80K | $50K | 38% |
| **Total** | **$336K** | **$204K** | **39% avg** |

### Platform ROI

| Metric | v1.0 (5 variants) | v1.1 (12 variants) |
|---|---|---|
| Total NRE | $111K | $204K |
| Platform savings | $59K | $132K |
| Platform ROI (NRE) | 131% | **192%** |

---

## 9. Risk per Variant (new variants)

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| N10-MAINT-KIT | Customers may not buy consumable kits (DIY maintenance) | MED | LOW | Bundle 1st year kit with mount purchase. Sell as SOP requirement. |
| N6-MINI | Small boat market fragmented, hard to reach | MED | MED | Sell through shipyard partners. Bundle with VN-XUONG work boats. |
| N8-OEM-BEARING | Low margin, IP exposure | LOW | LOW | Bearing is COTS. Value is machined flanges + QC. Volume compensates margin. |
| N7-SENSOR-MOUNT | Civilian market = different channel | MED | MED | Partner with security integrator. WX provides mount, partner handles installation + sales. |
| N9-VEHICLE-TURRET | Vehicle access for fitment testing | MED | MED | Coordinate with Army vehicle maintenance depot. |
| N12-RETROFIT-KIT | Structural compatibility across mount variants | MED | MED | Design universal bracket. Test on V1 and V4 before release. |
| N11-STABILIZED | Stabilization algorithm = new domain | HIGH | HIGH | Partner with stabilization specialist. Or: AI-compensated via AICC (ACH approach). |

---

## 10. CEO Decisions — Record

### From v1.0 (unchanged)

| # | Decision | CEO Choice | Date |
|---|---|---|---|
| D1 | V1 = NAVAL-12.7 | Credibility-first | 2026-04-09 |
| D2 | 5-variant portfolio | Confirmed | 2026-04-09 |
| D3 | Archive VN-MGM-001A as foundation | Use existing Phase 1 | 2026-04-09 |

### v1.1 Additions (--ex expansion)

| # | Decision | CEO Choice | Date |
|---|---|---|---|
| D4 | 7 new variants | ALL INCLUDE (N6-N12) | 2026-04-09 |
| D5 | Full sequence (12 products) | V1→V2→N10→V3→N6→N8→V4→N7→N9→V5→N12→N11 | 2026-04-09 |
| D6 | N10-MAINT-KIT = near-zero R&D | Package spare parts from V1 BOM | 2026-04-09 |
| D7 | N11-STABILIZED = last (highest complexity) | After V5 motorized proven | 2026-04-09 |
| D8 | N7-SENSOR-MOUNT = partner/civilian model | After weapon mounts proven | 2026-04-09 |

---

## --ex Success Criteria Check

| Criterion | Result |
|---|---|
| ≥3 new variant candidates from ≥2 lenses | **PASS** — 7 candidates from 3 lenses (Musk: N6,N7,N8 / Hwang: N9,N10,N11,N12 / Cross: N6,N8) |
| Layer 0 core mechanism identified | **PASS** — L-1 (consumable), L0 (OEM bearing), L1 (mount line), L2 (sensor/civilian) |
| ≥1 cross-pollination with WX product | **PASS** — N6 × VN-XUONG, N8 × TARGET-DRONE catapult, V2 × CUAV-SIM |
| Revenue model recalculated with delta | **PASS** — $1.14M → $1.83M (+61%) |
| Platform ROI recalculated and increased | **PASS** — 131% → 192% |

---

## Strategic Trajectory

```
Phase 1: MANUAL MOUNTS (2026-2027)
  V1-NAVAL → N6-MINI → V4-TRIPOD → N9-VEHICLE
  = Establish WX as mount manufacturer

Phase 2: ECOSYSTEM (2027)
  V2-SIM → V3-ADAPTER → N7-SENSOR → N8-OEM → N10-MAINT
  = Training integration + consumable revenue + OEM channel

Phase 3: MOTORIZATION (2027-2028)
  V5-MOTOR → N12-RETROFIT → N11-STABILIZED
  = Transform from manual to electromechanical

Phase 4: RCWS (2028+)
  V5/N11 + VN-AICC fire control + optics
  = Full indigenous Remote Weapon Station
  = WX becomes defense systems company, not just mount maker
```

---

*Portfolio Planning v1.1 | VN-MGM Precision Heavy Pointing Platform | --ex Musk + Hwang expansion | Supersedes v1.0 | 2026-04-09*
