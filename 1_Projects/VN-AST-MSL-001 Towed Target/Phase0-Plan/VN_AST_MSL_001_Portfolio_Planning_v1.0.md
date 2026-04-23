---
created: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio + Musk First Principles + Hwang Disruptive Innovation
version: v1.0
project: VN-AST-MSL-001
status: approved
scope: PORTFOLIO --ex (combined — retroactive Phase 0 for Phase 2+ project)
lead_product: V1-STANDARD (C1 TRÒN HDPE, 6m, anchored, $60-80K)
variants: 10
variant_sequence: "V1→V2→N10→N5→V3→N8→N7→N11→N9→N6"
export: "2028+ (after V1 VN Navy reference)"
platform_reuse: "≥70% hull construction shared, ≥60% mooring hardware shared"
design_paradigm: "SIGNATURE-CENTERED (RCS fidelity on water surface)"
physics_function: "Present a detectable object at a controlled position on the water surface"
---

# Portfolio Planning — VN-AST-MSL-001 Sea Surface Target Platform

> **Retroactive Phase 0 portfolio planning** for project already at Phase 2 (G2 PASS 3.85/4.0). C1 TRÒN HDPE selected.

> **Physics-level function (Musk reframe):** "Present a detectable object at a controlled position on the water surface so weapon systems can practice detection, tracking, and engagement"

---

## 1. Portfolio Overview

```
Price ($K)
  120 ┤                                                         ● N6-SONAR
  110 ┤                                                   ● N11-IR-AUG
  100 ┤                                    ● V3-SCORED
   80 ┤  ● V1-STANDARD
   70 ┤                                              ● N9-EXPORT
   60 ┤      ● V2-TOW-ONLY
   40 ┤                          ● N8-HULL-ONLY
   25 ┤                              ● N7-NAV-MARKER
   15 ┤              ● N5-COASTAL-MINI
    2 ┤ ● N10-MAINT-KIT
      │
    0 ├──────────────────────────────────────────────────────────────
      CONSUMABLE  MINI    TOW     ANCHORED   SCORED    PREMIUM   EXPORT
      (L-1)       (L-1)   (L1)    (L1)       (L1)      (L1)      (L1)
```

### Layer Architecture

```
L2: New Markets   — N7-NAV-MARKER (civilian maritime), N6-SONAR (ASW domain)
L1: Target Line   — V1-STANDARD, V2-TOW, V3-SCORED, N11-IR-AUG, N9-EXPORT
L0: Core Cell     — N8-HULL-ONLY (bare HDPE hull platform)
L-1: Entry/Consumable — N5-COASTAL-MINI, N10-MAINT-KIT
```

### All 10 Products

| # | ID | Name | BOM | Price | Margin | Layer | Target Segment |
|---|---|---|---|---|---|---|---|
| 1 | **V1** | **STANDARD** | $30-40K | $60-80K | 50-55% | L1 | VN Navy, anti-ship missile training |
| 2 | **V2** | **TOW-ONLY** | $20-30K | $40-60K | 50-55% | L1 | Navy tow exercises, no anchoring needed |
| 3 | **N10** | **MAINT-KIT** | $100-300 | $500-2K | 75-80% | L-1 | All deployed targets, annual consumable |
| 4 | **N5** | **COASTAL-MINI** | $2-6K | $5-15K | 55-60% | L-1 | Coastal patrol, harbor defense, small ranges |
| 5 | **V3** | **SCORED** | $40-55K | $70-100K | 45-50% | L1 | Live fire scoring via BB-01 integration |
| 6 | **N8** | **HULL-ONLY** | $15-25K | $20-40K | 30-40% | L0 | OEM platform for shipyards/integrators |
| 7 | **N7** | **NAV-MARKER** | $5-12K | $10-25K | 50-55% | L2 | Navigation aids, channel markers, civilian |
| 8 | **N11** | **IR-AUGMENTED** | $45-60K | $80-110K | 44-46% | L1 | MANPADS / IR missile training |
| 9 | **N9** | **EXPORT-LITE** | $25-35K | $50-70K | 50% | L1 | ASEAN navies, English docs, simplified |
| 10 | **N6** | **SONAR-TARGET** | $50-70K | $80-120K | 38-42% | L2 | ASW training, underwater acoustic reflector |

---

## 2. Variant Comparison Matrix

| Attribute | V1 STD | V2 TOW | N10 MAINT | N5 MINI | V3 SCORED | N8 HULL | N7 MARKER | N11 IR | N9 EXPORT | N6 SONAR |
|---|---|---|---|---|---|---|---|---|---|---|
| **Diameter** | 6.0m | 6.0m | N/A | 2-3m | 6.0m | 3-6m | 3-4m | 6.0m | 5-6m | 6.0m |
| **Hull** | HDPE foam | HDPE foam | N/A | HDPE foam | HDPE foam | HDPE foam | HDPE foam | HDPE foam | HDPE foam | HDPE foam |
| **RCS (X-band)** | ≥1,000 m² | ≥1,000 m² | N/A | 50-200 m² | ≥1,000 m² | None | None | ≥1,000 m² | 500-1,000 m² | ≥1,000 m² |
| **Corner reflectors** | 10× 1.0m | 10× 1.0m | N/A | 2-4× 0.5m | 10× 1.0m | None | None | 10× 1.0m | 6-8× 0.8m | 10× 1.0m |
| **IR signature** | None | None | N/A | None | None | None | None | Solar IR emitter | None | None |
| **Scoring** | None | None | N/A | None | BB-01 sensors | None | None | None | None | None |
| **Sonar** | None | None | N/A | None | None | None | None | None | None | Acoustic reflector |
| **Mooring** | Chain/nylon hybrid | None (tow only) | Replacement parts | Lightweight anchor | Chain/nylon | None | Lightweight anchor | Chain/nylon | Chain/nylon | Chain/nylon |
| **Towing** | V-bridle | V-bridle (primary) | N/A | Single-point | V-bridle | None | None | V-bridle | V-bridle | V-bridle |
| **Lights** | SOLAS + GPS | SOLAS + GPS | Battery replacement | SOLAS | SOLAS + GPS + status | None | SOLAS + AIS + sector | SOLAS + GPS | SOLAS + GPS | SOLAS + GPS |
| **CDM telemetry** | GPS position | GPS position | N/A | GPS position | Scoring + position | None | AIS | GPS + IR status | GPS position | GPS + sonar |
| **Local content** | ≥85% | ≥85% | ≥95% | ≥90% | ≥80% | ≥90% | ≥85% | ≥75% | ≥80% | ≥70% |
| **Price** | $60-80K | $40-60K | $500-2K | $5-15K | $70-100K | $20-40K | $10-25K | $80-110K | $50-70K | $80-120K |

---

## 3. Điểm Khác Biệt

### V1-STANDARD: "TRÒN" (Standard Sea Target)
**Unique:** C1 TRÒN HDPE selected via VDI 2225 (86.8%). 6m circular HDPE foam-filled hull, 10× trihedral corner reflectors (edge 1.0m, σ_peak=4,095 m²), chain/nylon hybrid mooring, V-bridle towing. GM=12.234m (81× IMO margin). Unsinkable (foam-filled). ≤2,000M VND. Phase 2 complete.
**Role:** Foundation platform. All variants derive from this hull construction.

### V2-TOW-ONLY: "TRÒN KÉO" (Tow-Only Target)
**Unique:** Same hull + reflectors as V1, no mooring system. Towed by naval vessel. Simpler ops — no anchor deployment/recovery. Cheaper (no chain, no anchor). For exercises where vessel can tow target to position.
**Delta from V1:** Remove mooring system (-$10-15K). Add reinforced V-bridle (+$1K).

### N10-MAINT-KIT: "Bộ Bảo Trì Mục Tiêu" (Target Maintenance Kit)
**Unique:** Annual consumable: anti-fouling paint (hull + reflectors), SOLAS battery replacement, mooring hardware inspection gauge set, reflector tape roll, shackle pin replacements, zinc anode set, maintenance checklist card.
**Revenue model:** Every deployed target = 1 kit/year. $500-2K recurring.

### N5-COASTAL-MINI: "TRÒN NHỎ" (Mini Coastal Target)
**Unique:** 2-3m diameter scaled-down V1. 2-4 corner reflectors (edge 0.5m, RCS 50-200 m²). Lightweight anchor. For coastal patrol boat gunnery, harbor defense training, small-caliber weapon exercises. Deployable from small craft by 2 persons. 10× cheaper than V1.
**Source:** [Musk: 10×] [Hwang: non-consumption — coastal units can't afford $80K targets]

### V3-SCORED: "TRÒN CHẤM ĐIỂM" (Scored Sea Target)
**Unique:** V1 hull + BB-01 LOMAH sensors integrated. Detects projectile impacts and near-misses on target structure. Real-time scoring telemetry via CDM to AICC. Feeds HYBRID-BRIDGE for sim↔live correlation. **The key ecosystem integration product.**
**Delta from V1:** BB-01 V5-NAVAL sensor array (+$5-10K), telemetry upgrade (+$2K), AICC CDM module (+$1K).
**Source:** [WX: BB-01 cross-pollination]

### N8-HULL-ONLY: "THÂN NỔI" (Bare Hull Platform)
**Unique:** HDPE foam-filled hull ring only. No reflectors, no mooring, no lights, no towing hardware. OEM platform for shipyards and marine integrators. Customer configures for own purpose: aquaculture pen float, breakwater section, work platform, equipment base.
**Source:** [Musk: platform cell] [Hwang: modular]

### N7-NAV-MARKER: "PHAO BÁO HIỆU" (Navigation Marker Buoy)
**Unique:** Non-target. Smaller hull (3-4m), high-visibility paint (IALA standard), SOLAS navigation lights, AIS transponder, solar-powered. Replaces imported navigation/channel markers. Civilian maritime market — ports, shipping channels, aquaculture zones.
**Source:** [Musk: first principles — same hull, different job] [Hwang: non-consumption]

### N11-IR-AUGMENTED: "TRÒN HỒNG NGOẠI" (IR-Augmented Target)
**Unique:** V1 hull + solar-powered IR emitter array. Generates IR signature for MANPADS training (Igla, Stinger) and IR-guided missile exercises. Pairs with TARGET-DRONE N8-EW for combined air+sea IR target scenario.
**Delta from V1:** Solar panels (+$3K), IR emitter array (+$5-8K), thermal management (+$2K).

### N9-EXPORT-LITE: "TRÒN XUẤT KHẨU" (Export Target)
**Unique:** Simplified V1 for ASEAN export. English documentation, metric/imperial dual dimensions, reduced RCS configuration (6-8 reflectors vs 10), simplified mooring (chain-only, no hybrid). Lower cost, easier logistics. Target: Philippines, Indonesia, Thailand navies.
**Delta from V1:** Fewer reflectors (-$5K), simplified mooring (-$3K), English docs (+$2K translation NRE).

### N6-SONAR-TARGET: "TRÒN SONAR" (ASW Training Target)
**Unique:** V1 hull + underwater acoustic reflector (passive corner reflector or active transponder). For anti-submarine warfare (ASW) sonar training. Dual-use: surface RCS for radar training + underwater acoustic signature for sonar training. Unique product — no competitor offers combined radar+sonar sea target.
**Source:** [Musk: first principles — different detection domain] [Hwang: related job — ASW training]
**Risk:** Underwater acoustics = new domain for WX. Acoustic reflector design needs research. Highest complexity.

---

## 4. Common Platform — Shared Components

| Component | V1 | V2 | N10 | N5 | V3 | N8 | N7 | N11 | N9 | N6 | Shared |
|---|---|---|---|---|---|---|---|---|---|---|---|
| HDPE foam hull | ✓ | ✓ | ✗ | ✓s | ✓ | ✓ | ✓s | ✓ | ✓ | ✓ | **9/10** |
| HDPE welding process | ✓ | ✓ | ✗ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | ✓ | **9/10** |
| Corner reflectors | ✓ | ✓ | ✗ | ✓s | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | **7/10** |
| Chain/nylon mooring | ✓ | ✗ | parts | ✓s | ✓ | ✗ | ✓s | ✓ | ✓c | ✓ | **7/10** |
| V-bridle towing | ✓ | ✓ | ✗ | ✓s | ✓ | ✗ | ✗ | ✓ | ✓ | ✓ | **7/10** |
| SOLAS lights + GPS | ✓ | ✓ | batt | ✓ | ✓ | ✗ | ✓+AIS | ✓ | ✓ | ✓ | **8/10** |
| CDM telemetry | ✓ | ✓ | ✗ | ✓ | ✓+ | ✗ | AIS | ✓ | ✓ | ✓ | **7/10** |

(✓s = smaller, ✓c = chain-only, ✓+ = enhanced)

### Reuse Summary

| Variant | Hull Shared | Hardware Shared | Mfg Process | NRE Savings |
|---|---|---|---|---|
| V1-STANDARD (lead) | reference | reference | reference | — |
| V2-TOW-ONLY | 100% | 80% | 95% | 70% |
| N10-MAINT-KIT | N/A | 100% (spares) | 100% | 90% |
| N5-COASTAL-MINI | 60% (scaled) | 50% | 80% | 50% |
| V3-SCORED | 100% | 85% (+ BB-01) | 90% | 60% |
| N8-HULL-ONLY | 100% (bare) | 0% | 90% | 75% |
| N7-NAV-MARKER | 70% (smaller) | 30% | 80% | 55% |
| N11-IR-AUGMENTED | 100% | 80% (+ IR) | 85% | 55% |
| N9-EXPORT-LITE | 90% | 75% | 90% | 65% |
| N6-SONAR-TARGET | 100% | 70% (+ acoustic) | 80% | 40% |

**HDPE foam-filled hull construction = 100% shared across 9/10 products (N10 excluded). Manufacturing process reuse ≥80% for all. Same HDPE welding workshop, same tools, same workers.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

```
2026        Q3   Q4  │ 2027 Q1   Q2   Q3   Q4  │ 2028
────────────────────┼──────────────────────────┼───────
V1-STANDARD          │                          │
  Ph3 ██ Ph4 █ Proto█│●                        │
  V2-TOW ●           │                          │
  N10-MAINT ●        │                          │
                     │ N5-COASTAL ██ ●          │
                     │ V3-SCORED (BB-01 ready) ██│●
                     │    N8-HULL █ ●           │
                     │    N7-NAV-MARKER ██ ●    │
                     │         N11-IR ██ ●      │
                     │              N9-EXPORT █ │●
                     │                          │ N6-SONAR
                     │                          │ Acoustics ████ ●
```

| # | Variant | Start Trigger | Duration | Delivery | R&D [L5] |
|---|---|---|---|---|---|
| 1 | V1-STANDARD | Phase 3 in progress | 16-20 wk (Ph3+Ph4) | Q4 2026 | $60K (incl. prototype) |
| 2 | V2-TOW-ONLY | V1 hull proven | 2-3 wk delta | Q4 2026 | $5K |
| 3 | N10-MAINT-KIT | V1 deployed | 1-2 wk | Q4 2026 | $1K |
| 4 | N5-COASTAL-MINI | V1 proven + coastal demand | 6-8 wk | Q1 2027 | $20K |
| 5 | V3-SCORED | V1 proven + BB-01 scoring ready | 6-8 wk | Q2 2027 | $15K |
| 6 | N8-HULL-ONLY | V1 hull manufacturing stable | 2-3 wk | Q2 2027 | $3K |
| 7 | N7-NAV-MARKER | V1 hull proven + civilian partner | 4-6 wk | Q3 2027 | $12K |
| 8 | N11-IR-AUGMENTED | V1 proven + MANPADS demand | 6-8 wk | Q3-Q4 2027 | $20K |
| 9 | N9-EXPORT-LITE | V1 Navy reference established | 4-6 wk | Q1 2028 | $8K |
| 10 | N6-SONAR-TARGET | V1 proven + ASW research | 12-16 wk | Q2 2028 | $40K |
| | **Total NRE** | | | | **$184K** |

---

## 6. Phạm Vi Ứng Dụng

### By Military Unit

| Unit | Exercise Type | Target Variant | Qty/yr [L5] |
|---|---|---|---|
| Navy anti-ship missile | Missile tracking + engagement | V1-STANDARD, N11-IR | 3-5 |
| Navy gunnery (ship guns) | Live fire scoring | V3-SCORED | 2-4 |
| Coastal patrol | Small-caliber gunnery | N5-COASTAL-MINI | 10-20 |
| ASW training | Sonar detection exercise | N6-SONAR | 1-2 |
| Maritime navigation | Channel/port marking | N7-NAV-MARKER | 10-30 |
| Export navies (ASEAN) | Anti-ship training | N9-EXPORT-LITE | 3-8 |
| All deployed targets | Annual maintenance | N10-MAINT-KIT | = installed base |

### By WX Ecosystem

| WX Product | VN-AST Role | Variants |
|---|---|---|
| **BB-01 LOMAH** | V3-SCORED = BB-01 V5-NAVAL sensors ON AST target | V3 |
| **VN-CUAV-SIM** | Sea target scenario data feeds sim | V1 (via HYBRID-BRIDGE) |
| **TARGET-DRONE-001** | Air + sea target pair for combined exercises | V1 + TARGET-DRONE V4 |
| **HYBRID-BRIDGE** | Live sea engagement data → sim AAR correlation | V3 scoring data |
| **VN-AICC** | Target deployment console | AICC V3-TAC |
| **VN-XUONG-UUV** | Vessel deploys/recovers targets. Shared hull concept. | V2-TOW via XUONG |
| **VN-MGM** | Same naval vessels carry both mounts and targets | Deck hardware commonality |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION]**

### 5-Year Revenue Projection

| Year | V1 STD | V2 TOW | N10 MAINT | N5 MINI | V3 SCORED | N8 HULL | N7 MARKER | N11 IR | N9 EXPORT | N6 SONAR | Total |
|---|---|---|---|---|---|---|---|---|---|---|---|
| 2027 | $200K (3) | $50K (1) | $3K | $30K (3) | — | $20K (1) | — | — | — | — | **$303K** |
| 2028 | $280K (4) | $100K (2) | $10K | $80K (8) | $170K (2) | $40K (2) | $50K (3) | $90K (1) | — | — | **$820K** |
| 2029 | $280K (4) | $100K (2) | $20K | $120K (12) | $255K (3) | $60K (3) | $100K (6) | $180K (2) | $120K (2) | — | **$1,235K** |
| 2030 | $210K (3) | $100K (2) | $30K | $100K (10) | $255K (3) | $40K (2) | $125K (8) | $180K (2) | $180K (3) | $100K (1) | **$1,320K** |
| 2031 | $140K (2) | $50K (1) | $35K | $80K (8) | $170K (2) | $40K (2) | $100K (6) | $90K (1) | $240K (4) | $200K (2) | **$1,145K** |
| **5yr** | **$1,110K** | **$400K** | **$98K** | **$410K** | **$850K** | **$200K** | **$375K** | **$540K** | **$540K** | **$300K** | **$4,823K** |

### Revenue Mix

| Category | Products | 5yr | % |
|---|---|---|---|
| Core targets (V1, V2) | STANDARD + TOW | $1,510K | 31% |
| Scored targets (V3) | SCORED | $850K | 18% |
| Entry/consumable (N5, N10) | MINI + MAINT | $508K | 11% |
| Premium (N11, N6) | IR + SONAR | $840K | 17% |
| New markets (N7, N8) | MARKER + HULL | $575K | 12% |
| Export (N9) | EXPORT-LITE | $540K | 11% |

**Balanced.** No single category >31%. Export becomes significant from 2029.

---

## 8. Development Efficiency

### NRE per Variant

| Variant | Standalone NRE | Platform NRE | Savings % |
|---|---|---|---|
| V1-STANDARD (lead) | $60K | $60K | — |
| V2-TOW-ONLY | $15K | $5K | 67% |
| N10-MAINT-KIT | $2K | $1K | 50% |
| N5-COASTAL-MINI | $35K | $18K | 49% |
| V3-SCORED | $30K | $12K | 60% |
| N8-HULL-ONLY | $10K | $3K | 70% |
| N7-NAV-MARKER | $25K | $11K | 56% |
| N11-IR-AUGMENTED | $35K | $16K | 54% |
| N9-EXPORT-LITE | $20K | $7K | 65% |
| N6-SONAR-TARGET | $60K | $36K | 40% |
| **Total** | **$292K** | **$169K** | **42% avg** |

### Platform ROI

- V1 NRE = $60K
- Platform savings (V2-N6) = $123K
- **Platform ROI: 205%**
- Revenue ROI: $60K → $4.82M = **7,938%** [L5]

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Fallback |
|---|---|---|---|---|
| V1-STANDARD | HDPE weld quality (OI-1 open) | MED | HIGH | Weld test coupon program. Over-engineer wall thickness. |
| V2-TOW-ONLY | Tow loads in rough sea | MED | MED | V-bridle reinforcement. Speed limit in Sea State 4+. |
| N10-MAINT-KIT | Customers skip maintenance | MED | LOW | Bundle 1st year with purchase. Annual service contract option. |
| N5-COASTAL-MINI | Small target = harder to find/recover | MED | LOW | GPS beacon + AIS. High-vis paint. |
| V3-SCORED | BB-01 sensor integration on floating platform | MED | MED | Vibration isolation mount. BB-01 team validates interface. |
| N8-HULL-ONLY | Low margin, competes with local HDPE fabricators | MED | LOW | Value is certified marine construction, not just hull shape. |
| N7-NAV-MARKER | Different regulation (IALA, maritime authority) | MED | MED | Partner with VN maritime authority for certification. |
| N11-IR-AUGMENTED | Solar-powered IR emitter output in tropical rain | MED | MED | Battery backup for overcast. Test in wet season. |
| N9-EXPORT-LITE | Export license and compliance | MED | HIGH | Defense export requires government approval. Start with friendly ASEAN (Philippines). |
| N6-SONAR-TARGET | Underwater acoustics = new domain | HIGH | HIGH | Partner with acoustic lab. Or: passive corner reflector (no electronics underwater). |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|---|---|---|---|
| D1 | 10-variant portfolio | ALL INCLUDE | 2026-04-09 | Full spectrum: mini → standard → premium → export |
| D2 | Sequence | V1→V2→N10→N5→V3→N8→N7→N11→N9→N6 | 2026-04-09 | Hull first, derivatives, then new markets |
| D3 | V3-SCORED = ecosystem key | BB-01 integration when ready | 2026-04-09 | Creates train→test→score→correlate loop |
| D4 | N6-SONAR = last | Highest complexity, new domain | 2026-04-09 | Only after all other variants proven |
| D5 | N7-NAV-MARKER = civilian partner | After military targets proven | 2026-04-09 | Different market, different channel |

---

## --ex Success Criteria Check

| Criterion | Result |
|---|---|
| ≥3 new variant candidates from ≥2 lenses | **PASS** — 9 candidates from 3 lenses |
| Layer 0 core mechanism identified | **PASS** — HDPE foam hull = L0. Reflectors, mooring, scoring = payload layers |
| ≥1 cross-pollination with WX product | **PASS** — V3 × BB-01, V2 × VN-XUONG, N11 × TARGET-DRONE |
| Revenue model recalculated | **PASS** — $4.82M / 5yr |
| Platform ROI calculated | **PASS** — 205% |

---

## Cross-Product Ecosystem Map

```
                    VN-AST-MSL-001 (10 products)
                              │
     ┌──────────┬─────────┬───┼───┬──────────┬──────────┐
     ▼          ▼         ▼   ▼   ▼          ▼          ▼
  BB-01      CUAV-SIM   XUONG  AICC TARGET   VN-MGM    Civilian
  V5-NAVAL   HYBRID-    V7-   TAC  DRONE     Same      Maritime
  ON V3      BRIDGE     MULTI (GCS) Air+Sea  ships     N7-MARKER
  SCORED     AAR data   tow         pair                N8-HULL
```

**V3-SCORED is the keystone product** — it connects BB-01 scoring (live fire measurement) to HYBRID-BRIDGE (sim↔live correlation) to VN-CUAV-SIM (training improvement). Without V3, the sea target is just a floating reflector. With V3, it's a node in the WX training ecosystem.

---

*Portfolio Planning v1.0 | VN-AST-MSL-001 Sea Surface Target Platform | Combined --portfolio --ex | 2026-04-09*
