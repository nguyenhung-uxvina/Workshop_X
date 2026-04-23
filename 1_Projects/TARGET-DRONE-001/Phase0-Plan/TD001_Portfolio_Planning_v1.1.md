---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.1
supersedes: TD001_Portfolio_Planning_v1.0.md
project: TARGET-DRONE-001
status: approved
scope: PORTFOLIO --ex
lead_product: V1-PROP-BASIC (Class A propeller, reusable, $8-15K)
variants: 11
variant_sequence: "V1→V2→N10→V3→N6→V4→N7→N9→N8→V5→N11"
export: "2028+ (after V4 military reference)"
platform_reuse: "≥80% SW shared (autopilot + GCS), ≥50% HW shared"
design_paradigm: "SIGNATURE-CENTERED (CHỮ-HIỆN-CHẤM)"
physics_function: "Move an object through airspace with configurable electromagnetic detectability"
---

# Portfolio Planning — TARGET-DRONE-001 Aerial Target System

> **Supersedes v1.0** — expanded from 5 → 11 products via Musk First Principles + Hwang Disruptive Innovation (Session 63, 2026-04-09)

> **Physics-level function (Musk reframe):** "Move an object through airspace with configurable electromagnetic detectability"

---

## 1. Portfolio Overview

```
Price ($K)
   80 ┤                                                              ● V5-JET
      │
   45 ┤                                                    ● N11-NAVAL
   40 ┤                                          ● V4-PROP-FULL
   30 ┤                                               ● N8-EW-TARGET
   20 ┤                                         ● N9-CALIBRATION
   15 ┤  ● V1-PROP-BASIC
   12 ┤          ● N7-PLATFORM
   10 ┤      ● V2-MDI-MODULE
    8 ┤              ● N6-TOWED
    5 ┤                  ● V3-SWARM
  0.5 ┤ ● N10-MICRO
      │
    0 ├──────────────────────────────────────────────────────────────────
      FOAM    PAYLOAD  TOWED   EXPENDABLE  REUSABLE-A   REUSABLE-B  NAVAL
      (L-1)   (L0)     (L1)    (L1)        (L1)         (L1)        (L1)
```

### Layer Architecture

```
L2: New Markets   — N7-PLATFORM (surveillance, relay, cargo — non-target uses)
L1: Target Line   — V1-BASIC, V3-SWARM, N6-TOWED, V4-FULL, N8-EW, N9-CALIB, V5-JET, N11-NAVAL
L0: Scoring       — V2-MDI-MODULE (standalone payload for any target)
L-1: Consumable   — N10-MICRO (foam disposable, no electronics)
```

### All 11 Products

| # | ID | Name | BOM | Price | Margin | Layer | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **PROP-BASIC** | $5-8K | $8-15K | 47-60% | L1 | AD training, UAV/heli threat sim |
| 2 | **V2** | **MDI-MODULE** | $2-4K | $5-10K | 58-60% | L0 | ANY target drone user (BB-01 synergy) |
| 3 | **N10** | **MICRO** | $5-15 | $200-500 | 90%+ | L-1 | Visual tracking drill, basic marksmanship |
| 4 | **V3** | **SWARM-EXPEND** | $1-2K | $2-5K | 50-60% | L1 | FPV swarm drills, consumable |
| 5 | **N6** | **TOWED** | $1.5-4K | $3-8K | 50-55% | L1 | Towed by aircraft/UAV, simplest reusable ops |
| 6 | **V4** | **PROP-FULL** | $12-18K | $25-40K | 52-55% | L1 | MANPADS + AAA, full signature + MDI |
| 7 | **N7** | **PLATFORM** | $3-6K | $5-12K | 50-58% | L2 | Surveillance, relay, cargo (non-target) |
| 8 | **N9** | **CALIBRATION** | $5-10K | $10-20K | 50-55% | L1 | Radar maintenance, performance verification |
| 9 | **N8** | **EW-TARGET** | $8-15K | $15-30K | 47-50% | L1 | EW training, jammer/chaff/flare response |
| 10 | **V5** | **JET-STANDARD** | $25-40K | $50-80K | 50% | L1 | Cruise missile sim, advanced AD |
| 11 | **N11** | **NAVAL-LAUNCH** | $10-20K | $20-45K | 50-56% | L1 | Ship-deck launch, naval AA exercises |

---

## 2. Variant Comparison Matrix

| Attribute | V1 BASIC | V2 MDI | N10 MICRO | V3 SWARM | N6 TOWED | V4 FULL | N7 PLATFORM | N9 CALIB | N8 EW | V5 JET | N11 NAVAL |
|---|---|---|---|---|---|---|---|---|---|---|---|
| **Speed** | 80-200 | N/A | 0 (thrown) | 60-150 | 100-300 (tow) | 80-200 | 80-150 | 80-150 | 80-200 | 200-400 | 80-200 |
| **Endurance** | ≥30m | N/A | 10-30s | 15-20m | Unlimited (towed) | ≥45m | ≥45m | ≥30m | ≥30m | ≥30m | ≥30m |
| **Propulsion** | Prop | N/A | None | Elec prop | None (towed) | Gas prop | Elec/gas | Elec prop | Prop | Turbojet | Prop |
| **Autopilot** | ✓ | ✗ | ✗ | ✓ (simple) | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ (+ ship nav) |
| **RCS** | Corner | N/A | Foam shape | Natural | Corner/Luneburg | Luneburg | None | Luneburg (calibrated) | Corner + chaff | Luneburg | Luneburg |
| **IR sig** | ✗ | N/A | ✗ | ✗ | ✗ or hot nose | Hot nose | ✗ | ✗ | Flare dispenser | Exhaust + nose | Hot nose |
| **MDI** | ✗ | Standalone | ✗ | ✗ | Optional (V2) | Integrated | ✗ | ✗ | ✗ | Integrated | Integrated |
| **EW payload** | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | ✗ | Jammer+chaff+flare | ✗ | ✗ |
| **Launch** | Catapult | N/A | Hand throw | Hand | Tow aircraft | Catapult | Catapult/hand | Catapult | Catapult | Catapult/RATO | Ship rail |
| **Recovery** | Parachute | N/A | None | Expendable | Reel-in | Chute+airbag | Chute | Chute | Chute | Chute+airbag | Chute+flotation |
| **Reuses** | ≥20 | ≥50 | 1 | 1 | ≥50 | ≥30 | ≥30 | ≥30 | ≥20 | ≥20 | ≥20 |
| **Price** | $8-15K | $5-10K | $200-500 | $2-5K | $3-8K | $25-40K | $5-12K | $10-20K | $15-30K | $50-80K | $20-45K |

---

## 3. Điểm Khác Biệt (6 new variants)

### N10-MICRO: "Bia Xốp" (Foam Target)
**Unique:** Ultra-cheap foam/cardboard aerial target. No electronics, no propulsion. Hand-thrown or slingshot-launched. Painted with high-visibility markings or radar-reflective tape. For basic visual tracking drills and gunner aiming practice. 10× cheaper than V3-SWARM.
**Source:** [Musk: 10×]
**Risk:** Is this a "product" or a shaped piece of foam? Value is in branded, standardized shapes with known visual/radar characteristics + packaging with training guide.
**Fallback:** Sell as training consumable kit ($200 = 10 targets + training guide + scoring sheets).

### N6-TOWED: "Bia Kéo Trên Không" (Towed Aerial Target)
**Unique:** No autopilot, no propulsion, no launch system. Towed on 500-1000m cable behind manned aircraft or large UAV. Simplest reusable target. Unlimited endurance (as long as tow aircraft flies). Air equivalent of VN-AST-MSL-001 towing concept. Corner reflector or Luneburg lens for RCS. Optional V2-MDI-MODULE bolt-on for scoring.
**Source:** [Musk: cross-pollination with VN-AST] [Hwang: modular — simplest possible target]
**Risk:** Needs tow aircraft arrangement. VN military has trainer aircraft. Tow cable dynamics need analysis.
**Fallback:** Tow behind large WX drone (V1-BASIC or N7-PLATFORM as tow vehicle).

### N8-EW-TARGET: "Bia Tác Chiến Điện Tử" (Electronic Warfare Training Target)
**Unique:** Same V1/V4 airframe + electronic warfare payload: noise jammer, chaff dispenser, IR flare dispenser. Trains radar/SAM operators against targets using countermeasures. Live EW training is extremely rare and expensive — WX could be only indigenous provider.
**Source:** [Hwang: related job — train EW response] [WX: CUAV-SIM EW scenarios]
**Risk:** EW payload complexity. Jammer may require military frequency authorization. Chaff/flare = pyrotechnic safety. Possibly restricted technology.
**Fallback:** Start with chaff + flare only (passive CM). Add jammer in later version after military authorization.

### N9-CALIBRATION: "Bia Hiệu Chuẩn Radar" (Radar Calibration Target)
**Unique:** Not a training target — a measurement tool. Precisely calibrated Luneburg lens with known RCS (certified ± 0.5 dB). Flies repeatable GPS waypoint patterns. Used for radar performance verification, acceptance testing, and maintenance calibration. Steady demand — every radar installation needs periodic calibration.
**Source:** [Musk: first principles — different job, same physics] [Hwang: non-consumption — radar crews not served]
**Risk:** Luneburg lens calibration requires precision manufacturing or certified import. Niche market.
**Fallback:** Offer calibration service (WX operates drone for customer) instead of selling hardware.

### N7-PLATFORM: "Nền Tảng UAV Đa Năng" (Multi-Purpose UAV Platform)
**Unique:** Bare V1 airframe + autopilot + telemetry. No signature payloads. Customer configures for own mission: surveillance camera, communications relay, cargo delivery, environmental sensing. Opens non-defense market without military branding.
**Source:** [Musk: platform cell] [Hwang: modular disruption]
**Risk:** Distracts from target mission. Generic UAV market is crowded (DJI, etc.). WX has no consumer drone brand.
**Fallback:** Partner/license to drone integrator. WX provides airframe + autopilot stack, partner handles market. Or: internal use only (WX test platform for payload development).

### N11-NAVAL-LAUNCH: "Bia Bay Hải Quân" (Naval Aerial Target)
**Unique:** Ship-deck rail launcher. Salt-spray resistant coatings. Parachute + flotation bags for sea recovery. Designed for naval AA exercises (ship CIWS, naval SAM). Marinization of V4-FULL. Pairs with VN-AST (sea target) for combined air+sea target exercise.
**Source:** [WX: VN-AST naval ops + VN-XUONG vessel] [Hwang: non-consumption — naval ships not served]
**Risk:** Marinization adds cost and complexity. Ship rail launcher NRE. Sea recovery logistics. Naval certification.
**Fallback:** Land-based V4-FULL flies over water for naval exercises (no ship launch needed — simpler but limits exercise location).

### V1-V5 (unchanged from v1.0)
See Portfolio_Planning_v1.0 §3 for original variant descriptions.

---

## 4. Common Platform — Shared Components

| Component | V1 | V2 | N10 | V3 | N6 | V4 | N7 | N9 | N8 | V5 | N11 | Shared |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| GCS software | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **10/11** |
| ArduPilot | ✓ | ✗ | ✗ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **8/11** |
| CDM protocol | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **10/11** |
| Telemetry radio | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **10/11** |
| AAR data format | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **10/11** |
| Airframe (V1 base) | ✓ | ✗ | ✗ | ✗ (mini) | mod | ✓ | ✓ | ✓ | ✓ | ✗ (jet) | mod | **6/11 base** |
| Parachute | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓+float | **7/11** |
| Catapult interface | ✓ | ✗ | ✗ | ✗ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | rail | **6/11** |
| Corner reflector | ✓ | ✗ | tape | ✗ | ✓ | opt | ✗ | ✗ | ✓ | opt | opt | **4/11** |
| Luneburg lens | ✗ | ✗ | ✗ | ✗ | opt | ✓ | ✗ | ✓ (cal) | ✗ | ✓ | ✓ | **4/11** |
| Acoustic MDI | ✗ | ✓ | ✗ | ✗ | opt | ✓ | ✗ | ✗ | ✗ | ✓ | ✓ | **4/11** |

### Reuse Summary (updated)

| Variant | HW Shared | SW Shared | NRE Savings vs Standalone |
|---|---|---|---|
| V1-PROP-BASIC (lead) | reference | reference | — |
| V2-MDI-MODULE | 30% | 60% | 40% |
| N10-MICRO | 0% (no electronics) | 0% | 0% (but NRE ≈ $2K — mold only) |
| V3-SWARM-EXPEND | 50% | 80% | 55% |
| N6-TOWED | 40% (airframe shell + reflector) | 50% (GCS, CDM) | 45% |
| V4-PROP-FULL | 70% | 90% | 65% |
| N7-PLATFORM | 80% (= V1 minus payloads) | 90% | 70% |
| N9-CALIBRATION | 65% | 85% | 55% |
| N8-EW-TARGET | 60% | 85% | 50% |
| V5-JET-STANDARD | 40% | 85% | 45% |
| N11-NAVAL-LAUNCH | 55% | 85% | 50% |

**Platform reuse: GCS + CDM + AAR + telemetry = 100% shared across 10/11 products (N10-MICRO excluded — no electronics). Autopilot = 80% shared. Average SW reuse = 74%. Average HW reuse = 49%.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Sequence: V1→V2→N10→V3→N6→V4→N7→N9→N8→V5→N11

```
2026        Q4  │ 2027 Q1   Q2   Q3   Q4  │ 2028 Q1   Q2   Q3   Q4
────────────────┼──────────────────────────┼──────────────────────────
V1-PROP-BASIC   │                          │
  Design ██ Bld█│ Test ██ ●                │
  V2-MDI-MODULE │                          │
  BB-01 synergy█│ Test █ ●                 │
  N10-MICRO     │                          │
  Mold █ ●      │                          │
                │ V3-SWARM                 │
                │ Mini █ Test █ ●          │
                │ N6-TOWED                 │
                │ Tow body █ Test █ ●      │
                │      V4-PROP-FULL        │
                │      Sig ███ Cert █ ●    │
                │       N7-PLATFORM        │
                │       Strip █ ●          │
                │           N9-CALIBRATION │
                │           Cal lens █ ●   │
                │                N8-EW     │
                │                EW pay ███│●
                │                          │ V5-JET-STANDARD
                │                          │ Turbojet ████ Test ██ ●
                │                          │      N11-NAVAL-LAUNCH
                │                          │      Marine ███ Cert █ ●
```

| # | Variant | Start Trigger | Duration | Delivery | R&D Cost [L5] |
|---|---|---|---|---|---|
| 1 | V1-PROP-BASIC | CEO bandwidth | 12-16 wk | Q1 2027 | $30-50K |
| 2 | V2-MDI-MODULE | V1 flies + BB-01 scoring stable | 6-8 wk | Q1-Q2 2027 | $15-25K |
| 3 | N10-MICRO | V1 validates market | 2-3 wk | Q4 2026 | $2-3K |
| 4 | V3-SWARM-EXPEND | V1 GCS/autopilot proven | 6-8 wk | Q2 2027 | $10-20K |
| 5 | N6-TOWED | V1 airframe proven | 4-6 wk | Q2 2027 | $8-15K |
| 6 | V4-PROP-FULL | V1+V2 proven + MANPADS demand | 10-14 wk | Q3-Q4 2027 | $40-60K |
| 7 | N7-PLATFORM | V1 airframe proven + non-defense partner | 3-4 wk | Q3 2027 | $5-8K |
| 8 | N9-CALIBRATION | V4 Luneburg integration proven | 4-6 wk | Q4 2027 | $10-15K |
| 9 | N8-EW-TARGET | V4 proven + EW authorization | 8-12 wk | Q1 2028 | $20-35K |
| 10 | V5-JET-STANDARD | V4 proven + turbojet R&D funded | 16-24 wk | Q2-Q3 2028 | $100-200K |
| 11 | N11-NAVAL-LAUNCH | V4 proven + naval customer LOI | 10-14 wk | Q3-Q4 2028 | $30-50K |
| | **Total NRE** | | | | **$270-481K** |

**Export:** 2028+ (after V4 military reference).

---

## 6. Phạm Vi Ứng Dụng

### By Military Unit (expanded)

| Unit | Weapon Systems | Target Variants | Qty/yr [L5] |
|---|---|---|---|
| MANPADS crews | Igla, SA-7 | V4-FULL (IR), N10-MICRO (visual drill) | 5-10 + 200 micro |
| AAA gun crews | ZU-23, S-60 | V1-BASIC, V4-FULL + V2-MDI | 5-15 + SWARM |
| SAM operators | S-125, SA-3 | V4-FULL, N9-CALIB, N8-EW | 3-5 + 2 calib |
| Naval AD | Ship CIWS/SAM | N11-NAVAL, V4-FULL | 2-5 |
| C-UAV teams | FPV counter-drone | V3-SWARM, N10-MICRO | 50-100 + 500 micro |
| Radar maintenance | Fire control radars | N9-CALIBRATION | 5-10/yr (recurring) |
| EW training | SAM + ECM units | N8-EW-TARGET | 3-5 |
| Towed target ops | Existing tow aircraft | N6-TOWED + V2-MDI | 5-10 |
| Non-defense | Surveillance, relay | N7-PLATFORM | 10-20 (partner channel) |

### By WX Ecosystem Integration (updated)

| WX Product | TARGET-DRONE Role | Products Involved |
|---|---|---|
| VN-CUAV-SIM | Live target after sim; EW scenarios → N8 live | V1-V5, N8-EW |
| BB-01 LOMAH | Live scoring integration | V2-MDI (shared acoustic tech) |
| HYBRID-BRIDGE | Sim↔live correlation | All (via AAR data format) |
| VN-AICC | Target ops console | V3-TAC for GCS |
| VN-AST-MSL-001 | Sea+air target pair; shared RCS tech; towing concept | N6-TOWED (air = AST equivalent) |
| VN-XUONG-UUV | Ship-based target deploy/recover | N11-NAVAL-LAUNCH |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection (11 variants)

| Year | V1 BASIC | V2 MDI | N10 MICRO | V3 SWARM | N6 TOWED | V4 FULL | N7 PLAT | N9 CALIB | N8 EW | V5 JET | N11 NAVAL | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|---|
| 2027 | $60K | $20K | $25K (100) | $15K | $10K | — | — | — | — | — | — | **$130K** |
| 2028 | $90K | $50K | $75K (250) | $100K | $30K | $120K | $20K | $30K | — | — | — | **$515K** |
| 2029 | $75K | $60K | $100K (400) | $200K | $40K | $240K | $40K | $40K | $75K | $150K | — | **$1,020K** |
| 2030 | $50K | $70K | $125K (500) | $250K | $50K | $300K | $60K | $50K | $120K | $300K | $100K | **$1,475K** |
| 2031 | $30K | $80K | $125K (500) | $200K | $40K | $200K | $50K | $50K | $90K | $400K | $150K | **$1,415K** |
| **5yr** | **$305K** | **$280K** | **$450K** | **$765K** | **$170K** | **$860K** | **$170K** | **$170K** | **$285K** | **$850K** | **$250K** | **$4,555K** |

### Revenue Comparison: v1.0 vs v1.1

| Metric | v1.0 (5 variants) | v1.1 (11 variants) | Delta |
|---|---|---|---|
| Hardware revenue / 5yr | $3,060K | $4,555K | **+$1,495K (+49%)** |
| NRE total | $205K | $270-481K (mid: $375K) | +$170K |
| Platform ROI (NRE savings) | 300% | **480%** | +180pp |
| Revenue ROI | 6,020% | **9,110%** [L5] | +3,090pp |

### Revenue Mix by Layer

| Layer | Products | 5yr Revenue | % of Total |
|---|---|---|---|
| L-1 Consumable | N10-MICRO | $450K | 10% |
| L0 Scoring | V2-MDI-MODULE | $280K | 6% |
| L1 Target Line | V1, V3, N6, V4, N8, N9, V5, N11 | $3,655K | 80% |
| L2 New Market | N7-PLATFORM | $170K | 4% |

**Key insights:**
- N10-MICRO (foam, $200-500) generates $450K on volume alone (1,750 units in 5yr)
- V3-SWARM + N10-MICRO = consumables = **$1.22M** recurring (27% of total)
- V4-FULL + V5-JET = premium products = **$1.71M** (38% of total)
- 6 new variants add $1.5M for ~$170K additional NRE

---

## 8. Development Efficiency (updated)

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-PROP-BASIC (lead) | $50K | $50K | — |
| V2-MDI-MODULE | $25K | $15K | 40% |
| N10-MICRO | $3K | $3K | 0% (no shared tech) |
| V3-SWARM-EXPEND | $20K | $9K | 55% |
| N6-TOWED | $15K | $8K | 47% |
| V4-PROP-FULL | $60K | $21K | 65% |
| N7-PLATFORM | $12K | $4K | 67% |
| N9-CALIBRATION | $15K | $7K | 53% |
| N8-EW-TARGET | $35K | $18K | 49% |
| V5-JET-STANDARD | $200K | $110K | 45% |
| N11-NAVAL-LAUNCH | $50K | $25K | 50% |
| **Total** | **$485K** | **$270K** | **44% avg** |

### Platform ROI (updated)

| Metric | v1.0 (5 variants) | v1.1 (11 variants) | Delta |
|---|---|---|---|
| Total NRE | $205K | $270K | +$65K |
| Platform savings | $150K | $215K | +$65K |
| Platform ROI (NRE) | 300% | **480%** | +180pp |
| Revenue / NRE | $3.06M / $205K | $4.56M / $270K | Efficiency: $14.9K→$16.9K rev per $1K NRE |

---

## 9. Risk per Variant (new variants)

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| N10-MICRO | Not perceived as "product" — just foam | MED | LOW | Branded kit with training guide + scoring protocol. Sell experience, not foam. |
| N6-TOWED | Needs tow aircraft availability | MED | MED | Use V1/N7 as tow vehicle (drone-towing-drone). Or partner with VN air force trainer squadron. |
| N7-PLATFORM | Generic UAV market is crowded | HIGH | MED | Don't sell direct. License to integrator or use internally as WX test platform only. |
| N9-CALIBRATION | Luneburg lens calibration precision | MED | MED | Partner with metrology lab for lens certification. Offer calibration service instead of hardware sale. |
| N8-EW-TARGET | EW payload authorization + safety (pyrotechnics) | HIGH | HIGH | Start passive CM only (chaff + flare). No active jammer until military authorization confirmed. |
| N11-NAVAL-LAUNCH | Marinization cost + sea recovery complexity | MED | HIGH | Land-based V4-FULL flies over water (no ship launch). Simpler but limits exercise flexibility. |

### Portfolio-Level Risks (updated)

| Risk | Impact | Mitigation |
|---|---|---|
| 11 variants = complexity overload for solo engineer | CRITICAL | Sequential development. N10/N6/N7 are minimal-effort derivatives. Max 1 active dev at any time. |
| EW-TARGET may be restricted technology | HIGH | Confirm with MOD before committing N8 NRE. Chaff/flare first, jammer later. |
| Non-defense (N7) dilutes brand | MED | Partner/license model. No WX military branding on N7. |
| Consumable volume (N10, V3) needs production scale | MED | Outsource foam molding to local model shops. V3 uses simple composite construction. |

---

## 10. CEO Decisions — Record

### From v1.0 (unchanged)

| # | Decision | CEO Choice | Date |
|---|---|---|---|
| D1 | Class A lead | PROP-BASIC | 2026-04-09 |
| D2 | 5-variant portfolio | BASIC→MDI→SWARM→FULL→JET | 2026-04-09 |
| D3 | Sequence V1→V5 | Confirmed | 2026-04-09 |
| D4 | V5-JET long-term | After V4 | 2026-04-09 |
| D5 | Knowledge gaps accepted | L3/L5 | 2026-04-09 |

### v1.1 Additions (--ex expansion)

| # | Decision | CEO Choice | Date |
|---|---|---|---|
| D6 | 6 new variants | ALL INCLUDE (N6, N7, N8, N9, N10, N11) | 2026-04-09 |
| D7 | Full sequence (11 products) | V1→V2→N10→V3→N6→V4→N7→N9→N8→V5→N11 | 2026-04-09 |
| D8 | N10-MICRO = ultra-low barrier | $200-500, foam, no electronics | 2026-04-09 |
| D9 | N8-EW = needs MOD authorization first | Passive CM first, active jammer later | 2026-04-09 |
| D10 | N11-NAVAL = last (needs marinization + customer) | After V4 + naval LOI | 2026-04-09 |

---

## --ex Success Criteria Check

| Criterion | Result |
|---|---|
| ≥3 new variant candidates from ≥2 lenses | **PASS** — 6 candidates from 3 lenses (Musk: N6,N7,N10 / Hwang: N8,N9 / Cross: N6,N8,N11) |
| Layer 0 core mechanism identified | **PASS** — L-1 (foam), L0 (MDI scoring), L1 (target line), L2 (platform) |
| ≥1 cross-pollination with WX product | **PASS** — N6 × VN-AST (towing), N11 × VN-XUONG (naval), N8 × CUAV-SIM (EW) |
| Revenue model recalculated with delta | **PASS** — $3.06M → $4.56M (+49%) |
| Platform ROI recalculated and increased | **PASS** — 300% → 480% |

---

## Cross-Product Integration Map (updated)

```
                         TARGET-DRONE-001 (11 products)
                                    │
     ┌──────────┬──────────┬────────┼────────┬──────────┬──────────┐
     ▼          ▼          ▼        ▼        ▼          ▼          ▼
  CUAV-SIM   BB-01      VN-AST   VN-AICC  HYBRID-    VN-XUONG   Non-
  (sim→live  LOMAH      MSL-001  (GCS on   BRIDGE    UUV        defense
  + EW sim)  (V2-MDI    (sea+air  AICC     (sim↔live (deploy    (N7-
  N8 live    scoring)   N6=air    TAC)     all AAR)   N11 from   PLATFORM)
  EW layer              AST)                          ship)
```

**Ecosystem value:** 11 products but the drone hardware is only 40% of value. The other 60% = ecosystem integration (CUAV-SIM scenarios, BB-01 scoring, HYBRID-BRIDGE AAR, AICC C2). No competitor offers this closed loop.

---

*Portfolio Planning v1.1 | TARGET-DRONE-001 Aerial Target System | --ex Musk + Hwang expansion | Supersedes v1.0 | 2026-04-09*
