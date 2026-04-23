---
created: 2026-03-08
updated: 2026-03-08
type: morphological-matrix
status: draft
document-id: VN-AST-MSL-001-MM-001
version: "1.0"
tags: [#type/project, #status/active]
---

# MORPHOLOGICAL MATRIX — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Phase** | 2 — Conceptual Design |
| **Date** | 2026-03-08 |
| **Status** | Draft — awaiting CEO review |
| **Input** | WP-001 v1.0 (26 working principles, 7 sub-functions) |

---

## 1. Morphological Matrix

Rows = key sub-functions (solution-neutral). Columns = working principles (solution-specific).

| Sub-Function | **S1** | **S2** | **S3** | **S4** |
|:-------------|:-------|:-------|:-------|:-------|
| **SF-01: RCS (≥ 1,000 m²)** | Trihedral corner array (8-12×, edge ~1.0m) | Octahedral cluster (multiple units) | Flat plate array (many plates) | Dihedral + trihedral combo |
| **SF-02: Buoyancy** | HDPE pipe ring, foam-filled | Steel pontoon barge (welded) | GRP (fiberglass) hull | COTS pontoon array (modular) |
| **SF-03: Stability** | Wide circular waterplane (D ≥ 5m) | Outrigger pontoons (offset buoyancy) | Low COG / ballast | Multi-hull (catamaran/trimaran) |
| **SF-04: Mooring (125 kN)** | Drag anchor + chain catenary | Drag anchor + chain/nylon hybrid | Helix screw anchor | Concrete sinker (deadweight) |
| **SF-05: Structure / material** | HDPE (polymer) | Marine steel hot-dip galv | Aluminum 5083 | GRP composite |
| **SF-08: Transport** | Bolted flanged joints | Pin + clevis connections | Fold-down / hinged | (Integral — no disassembly) |
| **SF-13: Towing (64 kN)** | V-bridle (2-point, 37 kN/pt) | Single towing eye (center) | Through-hull tow bar | — |

---

## 2. Compatibility Analysis

Before combining, eliminate incompatible pairs:

| Pair | Issue | Verdict |
|------|-------|---------|
| SF-02:S4 (COTS pontoon) + SF-11 (R-B04 chống chìm) | COTS pontoon = hollow, sinks if punctured | **FAILS D-requirement** → eliminate from any concept that needs unsinkability as standalone |
| SF-01:S3 (flat plate) + R-A01 (1,000 m²) | Flat plate RCS = πA²/λ² but narrow beam → need impractical number | **Marginal** → carry but flag risk |
| SF-05:S1 (HDPE) + SF-04 (125 kN mooring) | HDPE creep under sustained mooring load → needs steel reinforcement at attachment | **Compatible with local reinforcement** |
| SF-03:S4 (multi-hull) + SF-13 (tow SS 5) | Catamaran tow stability uncertain for blunt platform | **Uncertain** → carry but flag |
| SF-08:S4 (integral) + R-G03 (≤ 2.4m module) | If hull > 2.4m diameter → can't transport integral | **Incompatible** for concepts with D > 2.4m |

---

## 3. Concept Variants

### Concept C1: "TRÒN HDPE" — Circular HDPE Foam Platform

```
Rationale: Maximum simplicity. Single circular HDPE hull, foam-filled, inherent
omnidirectional stability. Draws on Galaxy: Foam-Filled HDPE, 6-Fold Symmetry.
Closest to DMIR V1 but with updated specs.
```

| Sub-Function | Selected WP | Rationale |
|:-------------|:------------|:----------|
| SF-01 RCS | **S1** Trihedral array (10×, edge 0.9m) | Proven, high RCS, local fabrication |
| SF-02 Buoyancy | **S1** HDPE foam-filled ring (D=6.0m, 2-tier) | Unsinkable, corrosion-free |
| SF-03 Stability | **S1** Wide circular waterplane | Inherent GM from 6m diameter |
| SF-04 Mooring | **S2** Chain/nylon hybrid | Solves weight trap (1,440 kg vs 2,500 kg) |
| SF-05 Structure | **S1** HDPE hull + galv steel mast/frame | HDPE hull, steel for load-bearing |
| SF-08 Transport | **S1** Bolted flanges (hull splits 2 halves + mast) | 3 modules ≤ 2.4m wide |
| SF-13 Towing | **S1** V-bridle (2-point) | Balanced tow load, 37 kN/point |

**Character:** Simple, round, unsinkable, proven materials. All local. Moderate cost.

---

### Concept C2: "THÉP HỘP" — Steel Box Barge

```
Rationale: Traditional naval approach. Welded steel barge with watertight compartments.
Maximum structural strength for 125 kN mooring + 64 kN towing. Highest payload capacity.
```

| Sub-Function | Selected WP | Rationale |
|:-------------|:------------|:----------|
| SF-01 RCS | **S1** Trihedral array (10×, edge 0.9m) | Same reflector solution (material-agnostic) |
| SF-02 Buoyancy | **S2** Steel barge (compartmented) | High buoyancy from large sealed volume |
| SF-03 Stability | **S1** Wide rectangular waterplane (5×5m) | Beam provides GM |
| SF-04 Mooring | **S1** Drag anchor + chain catenary | Steel handles heavy chain |
| SF-05 Structure | **S2** Marine steel hot-dip galvanized | Proven, high strength |
| SF-08 Transport | **S1** Bolted flanges (barge splits 2 halves) | Heavy but feasible |
| SF-13 Towing | **S2** Single towing eye (center bow) | Steel can take 64 kN at one point |

**Character:** Heavy, strong, traditional. Highest fabrication capability in VN. But corrosion + weight penalty. No foam = not inherently unsinkable (needs compartmentation to pass R-B04).

---

### Concept C3: "HYBRID HDPE+OUTRIGGER" — Circular Core + Folding Outriggers

```
Rationale: Evolution of DMIR V5. Central HDPE foam hull + deployable outrigger pontoons
for enhanced stability. Outriggers fold for transport, deploy for operations.
Addresses SF-13↔SF-03 coupling (stability under tow) with extra waterplane area.
```

| Sub-Function | Selected WP | Rationale |
|:-------------|:------------|:----------|
| SF-01 RCS | **S4** Dihedral + trihedral combo | Better elevation coverage for approaching missiles |
| SF-02 Buoyancy | **S1** HDPE foam-filled core (D=5.0m) + **S4** COTS outrigger pontoons | Core unsinkable, outriggers are bonus |
| SF-03 Stability | **S2** Outrigger pontoons (4-6 arms) | Very high GM, galaxy: 6-Fold Symmetry |
| SF-04 Mooring | **S2** Chain/nylon hybrid | Weight-optimized |
| SF-05 Structure | **S1** HDPE core + **S2** galv steel arms | Mixed: polymer hull, steel connections |
| SF-08 Transport | **S3** Fold-down arms + bolted mast | Arms fold against hull, compact transport |
| SF-13 Towing | **S1** V-bridle | Outriggers fold during tow → reduced drag |

**Character:** Highest stability, clever transport solution. But complexity: hinges, mixed materials, more assembly steps. Risk: outrigger arms under tow SS 5 wave slamming.

---

### Concept C4: "NHÔM GỌN" — Aluminum Compact Platform

```
Rationale: Lightest option. Aluminum 5083 welded hull — lightweight, corrosion-resistant,
high strength-to-weight. Enables smaller platform (lighter = less buoyancy needed =
smaller hull = less drag = easier to tow). Trades cost for performance.
```

| Sub-Function | Selected WP | Rationale |
|:-------------|:------------|:----------|
| SF-01 RCS | **S1** Trihedral array (8×, edge 1.0m) | Fewer, larger reflectors (fewer mounts) |
| SF-02 Buoyancy | **S3** Aluminum hull, foam-filled compartments | Light hull = more payload margin |
| SF-03 Stability | **S1** Wide circular waterplane (D=4.5m) | Smaller diameter OK because lighter |
| SF-04 Mooring | **S3** Helix screw anchor | Light platform = lighter mooring loads? No — wave drift still high. Keep 125 kN. |
| SF-05 Structure | **S3** Aluminum 5083 | Light, corrosion-resistant, TIG welding |
| SF-08 Transport | **S2** Pin + clevis (quick-connect hull segments) | Fast assembly, aluminum is machinable |
| SF-13 Towing | **S3** Through-hull tow bar | Aluminum allows clean structural tow path |

**Character:** Lightest, most elegant. But: aluminum more expensive, TIG welding specialized, helix anchor needs equipment, local content ~60% (aluminum often imported). Foam-filling aluminum hull = good but unconventional.

---

## 4. Concept Comparison Overview

| Attribute | C1 TRÒN HDPE | C2 THÉP HỘP | C3 HYBRID | C4 NHÔM GỌN |
|:----------|:-------------|:------------|:----------|:-------------|
| Hull material | HDPE + steel frame | Marine steel | HDPE + steel arms | Aluminum 5083 |
| Shape | Circular D≈6m | Rectangular 5×5m | Circular D≈5m + outriggers | Circular D≈4.5m |
| Est. dry weight | ~3,500 kg | ~5,000 kg | ~3,000 kg | ~2,000 kg |
| Est. cost (M VND) | 600-900 | 800-1,200 | 700-1,100 | 1,000-1,500 |
| Local content | ≥ 85% | ≥ 95% | ≥ 75% | ≥ 60% |
| Unsinkable (R-B04) | **Yes** (foam) | No (compartments only) | **Yes** (core foam) | **Yes** (foam-filled) |
| Tow drag @ 5 kt | ~17 kN (blunt) | ~20 kN (flat face) | ~14 kN (outriggers folded) | ~12 kN (smallest) |
| Complexity | Low | Low-Medium | High | Medium |
| Fabrication time | ~6 weeks | ~8 weeks | ~8 weeks | ~7 weeks |
| Key risk | HDPE weld quality | Corrosion, weight | Outrigger hinge reliability | Aluminum cost, TIG availability |
| DMIR lineage | V1 (simplified) | V3 (steel) | V5 (hybrid, evolved) | New concept |

---

## 5. Concept Sketches (Functional Layout)

### C1: TRÒN HDPE
```
          PLAN VIEW                      SIDE VIEW

        ┌──10 reflectors──┐                  ▲ Mast H=3.5m
       ╱  ╲    ○    ╱  ╲                    │
      │ ╲  ╱ Mast ╲  ╱ │               ┌───┤ Reflectors
      │   ○────○────○   │               │   │ (fold-down)
      │ ╱  ╲       ╱  ╲ │           ────┤   ├────  Deck
      │╱    ╲     ╱    ╲│           ████│   │████  HDPE ring
       ╲    ○─────○    ╱            ████│   │████  (foam-filled)
        ╲  ╱   V   ╲  ╱            ~~~~│   │~~~~  WL
         ─────bridle──              ~~~~└───┘~~~~
              ↓                         │
           Tow line                 Chain/nylon
                                        │
                                      Anchor
     D = 6.0m                    Draft ≈ 0.8m
     2 halves (transport)        Height above WL ≈ 3.5m
```

### C2: THÉP HỘP
```
          PLAN VIEW                      SIDE VIEW

      ┌─────────────────┐                ▲ Mast H=3.5m
      │  ○   ○   ○   ○  │               │
      │                  │           ┌───┤ Reflectors
      │    ┌──Mast──┐    │           │   │
      │    │        │    │       ────┤   ├────  Deck
      │    └────────┘    │       ▓▓▓▓│   │▓▓▓▓  Steel hull
      │  ○   ○   ○   ○  │       ▓▓▓▓│   │▓▓▓▓  (compartments)
      │       ●          │       ~~~~│   │~~~~  WL
      └──────tow─────────┘           └───┘
              ↓                       │
           Tow line               Chain catenary
                                      │
     5.0 × 5.0m                    Anchor
     2 halves (transport)
```

### C3: HYBRID HDPE+OUTRIGGER
```
          PLAN VIEW                      SIDE VIEW

           ○                              ▲ Mast
     ○ ╲   │   ╱ ○                       │
       ╲ ╲ │ ╱ ╱                     ┌───┤ Reflectors
        ╲──┼──╱                      │   │
    ○────( ● )────○  D=5m        ────┤   ├────  Deck
        ╱──┼──╲   outriggers     ████│   │████  HDPE core
       ╱ ╱ │ ╲ ╲  (fold for     ~~~~│   │~~~~  WL
     ○ ╱   │   ╲ ○  transport)  ----│   │----  Outrigger arms
           ○                        └───┘
           │                          │
        V-bridle                  Chain/nylon
                                      │
     Core D=5m + arms 2m          Anchor
     Span ~9m deployed
     ~5m folded (transport)
```

### C4: NHÔM GỌN
```
          PLAN VIEW                      SIDE VIEW

       ┌──8 reflectors──┐                ▲ Mast H=3.5m
      ╱       ○        ╲                │
     │    ○  Mast  ○    │           ┌───┤ Reflectors
     │   ○────○────○    │           │   │ (larger, fewer)
     │    ○       ○     │       ────┤   ├────  Deck
      ╲       ○        ╱        ░░░░│   │░░░░  Alu hull
       └────────────────┘        ~~~~│   │~~~~  WL
           ║                         └───┘
        Tow bar                       │
           ↓                      Helix anchor
        Tow line                      │

     D = 4.5m                    Lightest option
     Pin+clevis segments         Draft ≈ 0.6m
```

---

## 6. Critical Questions for CEO Decision

Before VDI 2225 evaluation, these trade-offs need CEO awareness:

1. **Unsinkability:** C2 (steel) is the only concept that does NOT inherently meet R-B04 without foam. Compartmentation alone may suffice per SOLAS one-compartment standard — but is this acceptable for a defense target that gets shot at?

2. **Local content threshold:** C4 (aluminum) at ~60% is at the R-H03 boundary. Acceptable risk, or must exceed 60% with margin?

3. **Complexity vs robustness:** C3 (hybrid) has highest stability but most moving parts (hinges). In a sea environment with salt spray, hinges = maintenance. Is operational simplicity worth trading some stability margin?

4. **Budget allocation:** All concepts fit within 2,000M VND budget with margin. Should we optimize for minimum cost, or invest margin in robustness/quality?

---

*Morphological Matrix v1.0 | VN-AST-MSL-001 | HELIX Phase 2*
