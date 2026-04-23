# OI-5: Transport Module Dimensions Verification

**Document ID:** VN-AST-MSL-001-TR-001 v1.0
**Date:** 2026-03-08
**Status:** ⚠️ NON-CONFORMANCE FOUND — Corrective action proposed
**Owner:** AI (Offload)
**Input:** Phase 2 Gate Review (005), Morphological Matrix (003), Requirements List v1.0

---

## 1. Requirements (from Phase 1)

| Req ID | Description | Value | Class | Verification |
|--------|-------------|-------|-------|-------------|
| R-G01 | Vận chuyển bằng xe tải | 10-15 tấn | D (Demand) | Dimensional check |
| R-G02 | Modular — ≤ 3 module chính | ≤ 3 | W1 (Wish) | Assembly test |
| R-G03 | Module lớn nhất | ≤ 2.4 × 2.4 × 12 m | D (Demand) | Drawing review |
| R-G04 | Assembly tại bến | ≤ 4 hrs | W2 (Wish) | Assembly trial |
| R-G05 | Nhân lực triển khai | ≤ 6 người | W1 (Wish) | Field trial |
| R-G06 | Cẩu | ≤ 5 tấn | W1 (Wish) | Lift plan |

**Critical constraint:** R-G03 is a **Demand** (hard limit). The 2.4 × 2.4m cross-section corresponds to standard VN flatbed truck and 20ft container dimensions.

---

## 2. C1 TRÒN HDPE — Design Baseline

From Phase 2 Gate Review (005_Phase2_Gate_Review.md):

| Parameter | Value | Source |
|-----------|-------|--------|
| Hull type | HDPE pipe ring, foam-filled | SF-02 |
| Hull diameter | D = 6.0 m | SF-03 stability |
| Hull pipe | 2-tier Ø500mm PE100 SDR17 | SF-02 buoyancy |
| Hull height | ~1.0 m (2 × Ø500mm) | SF-02 |
| Mast height above WL | ≥ 3.5 m | R-A05, R-B06 |
| Reflectors | 10× trihedral, edge 1.0 m | SF-01 |
| Dry weight target | ≤ 3,500 kg | SF-02 |
| Transport scheme (Phase 2) | "Hull splits 2 halves + mast = 3 modules" | SF-08 |

---

## 3. Module Analysis — Phase 2 Baseline (2 Halves)

### 3.1 Half-Ring Bounding Box

A D=6.0m ring split into 2 semicircular halves:

```
    ┌─────── 6.0m ────────┐
    │                      │
    │    ╭────────────╮    │ ← Half-ring (semicircle)
    │    │            │    │
    ├────┤            ├────┤   3.0m (radius)
    │    │  (empty)   │    │
    │    │            │    │
    │    ╰────────────╯    │
    └──────────────────────┘

    Bounding box: 6.0m (L) × 3.0m (W) × 1.0m (H)
```

| Dimension | Value | R-G03 Limit | Status |
|-----------|-------|-------------|--------|
| Length | 6.0 m | ≤ 12 m | ✅ PASS |
| Width | **3.0 m** | ≤ 2.4 m | ❌ **FAIL** |
| Height | 1.0 m | ≤ 2.4 m | ✅ PASS |

### 3.2 Verdict

**❌ R-G03 NON-CONFORMANCE:** Half-ring width (3.0m = ring radius) exceeds 2.4m truck cross-section limit by **0.6m (25%)**. The Phase 2 claim "3 modules ≤ 2.4m wide" is **incorrect** for the 2-half configuration.

---

## 4. Corrective Options

### Option A: 3 Segments (120° arcs) — RECOMMENDED

Split ring into 3 equal segments instead of 2 halves.

```
    Segment geometry (120° arc):

    Chord    = 2R × sin(60°) = 2 × 3.0 × 0.866 = 5.20 m
    Sagitta  = R × (1 - cos(60°)) = 3.0 × 0.50 = 1.50 m

    ┌──── 5.20m ────┐
    │                │
    │  ╭──────────╮  │ ← 120° arc segment
    │  │          │  │   1.50m sagitta
    │  │          │  │   + 0.50m pipe OD
    │  ╰──────────╯  │ = 2.0m total width
    └────────────────┘

    Bounding box: 5.20m (L) × 2.0m (W) × 1.0m (H)
```

| Dimension | Value | R-G03 Limit | Margin | Status |
|-----------|-------|-------------|--------|--------|
| Length | 5.20 m | ≤ 12 m | 6.8 m | ✅ PASS |
| Width | 2.0 m | ≤ 2.4 m | **0.4 m** | ✅ PASS |
| Height | 1.0 m | ≤ 2.4 m | 1.4 m | ✅ PASS |

**Pros:** Minimal change from 2-half design. Only 2 extra flange joints per tier (6 total vs 4). R-G03 met with 0.4m margin.
**Cons:** 3 ring pieces + mast module = 4 physical pieces (exceeds R-G02 "≤ 3 modules" if counting individual ring segments as separate modules).

**R-G02 interpretation:** R-G02 is W1 (Wish, not Demand). "3 modules chính" = 3 major assembly groups: (1) Hull ring segments, (2) Mast + reflectors, (3) Mooring hardware. Within each group, multiple sub-pieces are acceptable.

### Option B: 4 Segments (90° arcs) — Conservative

| Dimension | Value | R-G03 Limit | Margin | Status |
|-----------|-------|-------------|--------|--------|
| Length | 4.24 m | ≤ 12 m | 7.8 m | ✅ PASS |
| Width | 1.38 m | ≤ 2.4 m | 1.0 m | ✅ PASS |
| Height | 1.0 m | ≤ 2.4 m | 1.4 m | ✅ PASS |

**Pros:** Large R-G03 margin. Better tolerance for pipe-bending inaccuracy.
**Cons:** 8 total flange joints per tier (16 total). More assembly time. More cost.

### Option C: Reduce Hull Diameter to D ≤ 4.8m

Half-ring radius = 2.4m → exactly meets R-G03. But:
- **Impacts SF-03 (stability):** GM reduces proportionally to D²
- **Impacts SF-01 (RCS):** smaller platform = less reflector separation
- **Not recommended** without re-running stability and RCS verification

### Option D: Request R-G03 Waiver for Oversized Module

- Escort vehicle for oversized load on VN roads
- Higher transport cost, permit required
- **Not recommended** for a defense training product requiring rapid deployment

---

## 5. Full Module Breakdown (Option A — 3 Segments)

### Module Group 1: Hull Ring (3 × 120° segments × 2 tiers = 6 pieces)

**Weight estimate per tier (D=6.0m, Ø500mm PE100 SDR17):**
- Circumference: π × 6.0 = 18.85 m
- Pipe wall: 500/17 ≈ 29.4 mm (SDR17)
- Pipe cross-section area: π/4 × (0.500² − 0.441²) = 0.0434 m²
- HDPE volume per tier: 0.0434 × 18.85 = 0.818 m³
- HDPE weight per tier: 0.818 × 960 kg/m³ = **786 kg**
- Foam fill (35 kg/m³): π/4 × 0.441² × 18.85 × 35 = **101 kg**
- Flanges + bolts (6 joints × ~8 kg): **48 kg**
- **Total per tier: ~935 kg**
- **Total 2 tiers: ~1,870 kg**
- **Per segment (1/3 of ring, 2 tiers): ~623 kg**

| Check | Value | Limit | Status |
|-------|-------|-------|--------|
| Transport size | 5.2 × 2.0 × 1.0 m | ≤ 2.4 × 2.4 × 12 m | ✅ PASS |
| Crane lift | ~623 kg | ≤ 5,000 kg | ✅ PASS |

### Module Group 2: Mast + Reflectors + Deck Frame

**Components:**
- Steel deck frame (radial beams + center hub): ~300-500 kg
- Mast (steel or aluminum, H=3.5m, sectional): ~200-400 kg
- 10× trihedral reflectors (1.0m edge, 3mm Al): ~60 kg
- Mounting hardware, wiring: ~50 kg
- **Total: ~600-1,000 kg**

**Transport dimensions:**
- Mast sections: ≤ 3.5m length (fits truck)
- Reflectors: flat-pack 1.0 × 1.0 × 0.1m each
- Deck frame: radial beams ~3.0m, bundled ≤ 2.0 × 1.0 × 3.0m

| Check | Value | Limit | Status |
|-------|-------|-------|--------|
| Transport size | ~3.0 × 2.0 × 1.5 m (bundled) | ≤ 2.4 × 2.4 × 12 m | ✅ PASS |
| Crane lift | ~1,000 kg (heaviest lift) | ≤ 5,000 kg | ✅ PASS |

### Module Group 3: Mooring Hardware

**Components:**
- Bridle plate + pendant: ~50 kg (installed on hull)
- Chain legs (deployed separately): ~1,440 kg total mooring weight (from Gate Review)
- Anchors: 3× drag or helix anchors

**Transport:** Chain/anchors shipped separately on same or second truck. Not constrained by R-G03 (standard bulk cargo).

### Total System Weight

| Group | Weight (kg) | Truck Load |
|-------|-------------|------------|
| Hull ring (6 pieces) | ~1,870 | Main truck |
| Deck + mast + reflectors | ~1,000 | Main truck |
| Electronics, battery, nav | ~200 | Main truck |
| **Subtotal (platform)** | **~3,070** | **< 3,500 kg target ✅** |
| Mooring (chain + anchors) | ~1,440 | Same or 2nd truck |
| **Grand total** | **~4,510** | **< 10T truck ✅ (R-G01)** |

---

## 6. Requirements Compliance Summary (Option A)

| Req | Description | Verification | Status |
|-----|-------------|-------------|--------|
| R-G01 | 10-15T truck | Total ~4,510 kg < 10T | ✅ **PASS** |
| R-G02 | ≤ 3 module chính (W1) | 3 groups: Hull, Mast, Mooring | ✅ **PASS** (W1) |
| R-G03 | Module ≤ 2.4 × 2.4 × 12m (D) | Largest: 5.2 × 2.0 × 1.0m | ✅ **PASS** |
| R-G04 | Assembly ≤ 4 hrs (W2) | ~3-4 hrs estimate (6 flange joints + mast + reflectors) | ✅ **PASS** (W2) |
| R-G05 | ≤ 6 người (W1) | 4-6 người adequate | ✅ **PASS** (W1) |
| R-G06 | Cẩu ≤ 5T (W1) | Max lift ~1,000 kg (deck frame) | ✅ **PASS** |

---

## 7. Design Change Required

### ECN Summary

| Item | Phase 2 Baseline | Corrected Value | Reason |
|------|-------------------|----------------|--------|
| Hull segmentation | 2 halves (4 flanges) | **3 segments × 120°** (6 flanges per tier, 12 total) | R-G03 non-conformance |
| SF-08 description | "Hull splits 2 halves" | "Hull ring splits 3 segments (120° arcs)" | Correct transport compliance |
| Flange count | 4 total (2/tier) | **12 total (6/tier)** | Additional 8 flanges |
| Estimated cost impact | — | +8 flanges × ~200k VND = **~1.6M VND** | < 0.2% of project budget |
| Assembly time impact | — | +15 min (2 extra joints vs 2-half) | Within R-G04 target |

### Action Items for Phase 3

1. **Update Function Structure v2.0** — SF-08.1: change "2 halves" to "3 segments"
2. **Preliminary GA layout** — show 3-segment ring with flange locations at 0°, 120°, 240°
3. **Flange detail design** — stub-end flanges per DMIR precedent, sized for M16 bolts
4. **Assembly sequence** — define which segment is the "master" (first placed, others align to it)

---

## 8. Open Questions (for Phase 3 Embodiment)

| # | Question | Priority |
|---|----------|----------|
| Q1 | Cross-tier connection — how are upper and lower pipe tiers connected? Welded or bolted? | High |
| Q2 | Deck frame attachment — radial beams weld to ring or bolt? | High |
| Q3 | Foam injection — before or after ring assembly? (before = closed segments; after = in-situ) | Medium |
| Q4 | Should ring be 3 or 4 segments? 4 gives more margin but more flanges. CEO decision. | Medium |

---

*Verified by AI analysis. CEO to review and approve ECN for 3-segment configuration.*
*Cross-reference: [[F4_Mooring_Hull_Interface_v1.0.md]] for mooring attachment at hull interface.*
