---
created: 2026-04-09
updated: 2026-04-09
type: portfolio-planning
method: Pahl & Beitz §3.1 + FORGE Portfolio
version: v1.0
project: VN-XUONG-UUV
status: approved
scope: PORTFOLIO
lead_product: VN-XUONG-UUV-001 (BASE)
variants: 3 (V2-AUTON, V3-HEAVY, V4-LARS-MOD)
variant_sequence: V4 → V2 → V3
export: deferred
platform_reuse: "≥70% SW shared, ≥50% HW shared"
---

# Portfolio Planning — VN-XUONG-UUV Product Line

> Xuồng Triển Khai/Thu Hồi UUV — từ sản phẩm đơn lẻ đến dòng sản phẩm LARS cho Hải Quân Việt Nam.

---

## 1. Portfolio Overview

```
                LARS-MOD (V4)          BASE (V1)            AUTON (V2)          HEAVY (V3)
                Module only            8m Tethered           8m Autonomous        10m Heavy-class
  Price  $150-200K ─────────── $517K ─────────── ~$400K ─────────── ~$700K
                │                      │                     │                    │
  Complexity   LOW ──────────── MEDIUM ──────────── MEDIUM-LOW ──────── HIGH
                │                      │                     │                    │
  UUV class    Any ≤550kg              550kg tethered        550kg autonomous     ≤1000kg any
  (on existing vessel)                 (25km tether)         (no tether)          (tethered/auto)
```

**Product line map (complexity × price):**

```
Price ($K)
  700 ┤                                              ● V3-HEAVY
      │
  517 ┤                     ● V1-BASE
      │
  400 ┤                              ● V2-AUTON
      │
  200 ┤   ● V4-LARS-MOD
      │
    0 ├──────────────────────────────────────────────
      LOW              MEDIUM              HIGH
                    Complexity
```

**Strategy:** Start with modular LARS (V4) to prove mechanism at lowest risk, then scale to full vessel variants. Each variant expands addressable market without cannibalizing lead product.

---

## 2. Variant Comparison Matrix

| Attribute | V1-BASE (Lead) | V4-LARS-MOD | V2-AUTON | V3-HEAVY |
|-----------|---------------|-------------|----------|----------|
| **Vessel** | 8m aluminum monohull | Customer's existing vessel | 8m aluminum monohull | 10m aluminum monohull |
| **Hull** | New build, Al 5083 | N/A (no hull) | Same as V1 | New build, Al 5083, wider beam |
| **LOA** | 8.0 m | N/A | 8.0 m | 10.0 m |
| **Beam** | 2.8 m | N/A | 2.8 m | 3.2 m |
| **Propulsion** | Twin outboard 2×40-60 HP | N/A | Twin outboard 2×40-60 HP | Twin outboard 2×75-115 HP |
| **LARS type** | Stern ramp + V-funnel + electric winch | Stern ramp + V-funnel + electric winch | Stern ramp + V-funnel + electric winch | Stern ramp + V-funnel + hydraulic winch |
| **TMS** | Yes (25 km tether management) | Optional | **No** | Yes (up to 30 km) |
| **UUV capacity** | 550 kg, D=400 mm | ≤ 550 kg (vessel-dependent) | 550 kg, D=400 mm | ≤ 1000 kg, D ≤ 600 mm |
| **UUV type** | Tethered | Any (tethered/autonomous) | **Autonomous only** | Any (tethered/autonomous) |
| **Winch SWL** | 10 kN (electric, VFD) | 10 kN (electric, VFD) | 10 kN (electric, VFD) | 20 kN (hydraulic) |
| **USBL** | Yes | Optional (vessel may have) | Yes | Yes |
| **UUV control station** | Yes (OEM portable) | No (vessel has own) | **No** (UUV autonomous) | Yes (OEM portable) |
| **Crew** | 3 (Helmsman + LARS Op + UUV Op) | 1-2 (LARS Op only, vessel has crew) | **2** (Helmsman + LARS Op) | 3-4 |
| **Sea State (recovery)** | SS 3 | Vessel-dependent | SS 3 | SS 3-4 |
| **Lightship** | ~2,820 kg | ~400-600 kg (module only) | ~2,400 kg (lighter, no TMS) | ~4,500 kg |
| **Target price** | $517K | **$150-200K** | ~$400K | ~$700K |
| **Local content** | 48-55% | 60-70% (fabrication-heavy) | 50-60% | 45-55% |
| **Target segment** | Seg A: Navy UUV Ops (tethered) | Navy units with existing workboats | Seg A (autonomous UUV) + Seg C (research) | Seg B: MCM Unit (heavy UUVs) |
| **Development status** | Phase 2 (in progress) | Concept only | Concept only | Concept only |

---

## 3. Điểm Khác Biệt — What Makes Each Variant Unique

### V4-LARS-MOD: "Bộ LARS Lắp Rời"
**Unique value:** LARS capability WITHOUT buying a new vessel. Navy units that already have 7-10m workboats can bolt on a LARS module to gain UUV deploy/recover capability. Lowest entry cost ($150-200K), fastest delivery, lowest risk for WX (no hull construction).

**Key differentiator vs V1:** No vessel = no naval architecture risk, no shipyard dependency, no hull certification. Pure mechanical + electrical engineering — WX core competence.

**Critical assumption:** [L5-ASSUMPTION] Existing Navy workboats have adequate stern structure, stability margin, and deck space for a ~500 kg LARS module + 550 kg UUV. Requires survey of target vessel types.

### V2-AUTON: "Xuồng LARS cho UUV Tự Hành"
**Unique value:** Same proven 8m hull as V1, but removes TMS complexity entirely. No cable drum, no tether guide, no synchronization logic. Simpler vessel, lower cost, broader UUV compatibility (any autonomous UUV ≤ 550 kg). Only 2 crew needed (no UUV operator — UUV operates autonomously).

**Key differentiator vs V1:** ~$117K cheaper (TMS removal saves $80K hardware + $37K integration). 420 kg lighter (no TMS weight). Simpler operations (no cable management during mission).

**Critical assumption:** [L5-ASSUMPTION] VN Navy will acquire autonomous UUVs (not just tethered). Market timing uncertain.

### V3-HEAVY: "Xuồng LARS Hạng Nặng"
**Unique value:** Handles UUVs up to 1000 kg (vs 550 kg limit on V1/V2). Hydraulic LARS provides higher power and smoother control for heavy payloads. Larger vessel (10m) = better seakeeping = SS 3-4 recovery. Target: MCM-class UUVs (ECA A18-M class, ~800-1000 kg).

**Key differentiator vs V1:** 2× UUV weight capacity, hydraulic power, larger operational envelope. Positioned against imported LARS systems ($1-3M) with clear cost advantage.

**Critical assumption:** [L5-ASSUMPTION] VN Navy MCM modernization will require heavy-class UUV LARS. Timeline unknown. V3 depends on V1 proving the stern ramp + V-funnel architecture.

---

## 4. Common Platform — Shared Components

### 4.1 Platform Reuse Analysis

| Component / Subsystem | V1-BASE | V4-LARS-MOD | V2-AUTON | V3-HEAVY | Shared? |
|----------------------|---------|-------------|----------|----------|---------|
| **LARS ramp mechanism** | ✓ | ✓ (identical) | ✓ (identical) | ✓ (scaled up) | **V1=V4=V2, V3=scaled** |
| **V-funnel geometry** | ✓ | ✓ (identical) | ✓ (identical) | Wider (D≤600mm) | **V1=V4=V2, V3=wider** |
| **Cradle + rail + pin** | ✓ | ✓ (identical) | ✓ (identical) | Larger cradle | **V1=V4=V2, V3=scaled** |
| **Electric winch (10 kN)** | ✓ | ✓ (identical) | ✓ (identical) | — (hydraulic 20 kN) | **V1=V4=V2** |
| **USBL system** | ✓ | Optional | ✓ (identical) | ✓ (identical) | **V1=V2=V3** |
| **IRONMESH control SW** | ✓ | ✓ (LARS subset) | ✓ (no TMS module) | ✓ (+ hydraulic control) | **Core shared, modules differ** |
| **Hull design (8m Al)** | ✓ | N/A | ✓ (identical) | N/A (10m new design) | **V1=V2** |
| **Propulsion (twin OB)** | ✓ | N/A | ✓ (identical) | ✓ (larger engines) | **V1=V2** |
| **TMS cable management** | ✓ | Optional add-on | — | ✓ (scaled for 30km) | **V1=V3 (scaled)** |
| **Stern structure (mounting)** | ✓ | Adapter plate (custom per vessel) | ✓ (identical) | ✓ (new, larger) | **V1=V2** |
| **SOPs / training materials** | ✓ | ✓ (LARS subset) | ✓ (simplified) | ✓ (extended) | **Core shared** |
| **Wiring / electrical** | ✓ | ✓ (LARS subset) | ✓ (simplified) | ✓ (+ hydraulic power) | **Core shared** |

### 4.2 Reuse Summary

| Variant | HW Shared with V1 | SW Shared with V1 | Development NRE Savings |
|---------|-------------------|-------------------|------------------------|
| **V4-LARS-MOD** | **80%** (identical LARS mechanism) | **70%** (LARS control SW, no vessel SW) | 60-70% vs standalone |
| **V2-AUTON** | **85%** (same hull + LARS, remove TMS) | **80%** (remove TMS module) | 70-80% vs standalone |
| **V3-HEAVY** | **40%** (scaled LARS, new hull, hydraulic) | **60%** (core LARS SW + new hydraulic module) | 30-40% vs standalone |

**Platform reuse target: ≥70% SW, ≥50% HW — ACHIEVED for V4 and V2. V3 below HW target (40%) due to new hull + hydraulic system.**

---

## 5. Lộ Trình Phát Triển (Roadmap)

### Development Sequence: V4 → V2 → V3

**Rationale for V4 first:**
- Lowest risk: no hull design, pure LARS mechanism
- Lowest cost: $150-200K prototype vs $517K for full vessel
- Fastest to market: 4-6 months development (no shipyard needed)
- **Proves the LARS mechanism** — the core technology — before committing to full vessel builds
- Revenue possible sooner: Navy units can upgrade existing boats immediately
- **De-risks V1:** if LARS module works on existing vessel, V1 hull integration is lower risk

```
Timeline (from V1 prototype completion):

2026  Q3   Q4  │ 2027  Q1   Q2   Q3   Q4  │ 2028  Q1   Q2
──────────────┼───────────────────────────┼──────────────
V1-BASE       │                           │
  Phase 2-4 ██│██ Build ██ Sea Trial      │
              │    ↓ LARS proven          │
              │ V4-LARS-MOD               │
              │    Design █ Build █ Test   │
              │         ↓ Module proven    │
              │              V2-AUTON      │
              │              Design █ Build █ Test
              │                            │ V3-HEAVY
              │                            │ Design ████
```

| Variant | Start | Gate 0 | Prototype | Sea Trial | Notes |
|---------|-------|--------|-----------|-----------|-------|
| **V1-BASE** | 2026-03 (active) | PASSED | Q4 2026 | Q1 2027 | Lead product, in Phase 2 now |
| **V4-LARS-MOD** | After V1 LARS proven | Q1 2027 | Q2 2027 | Q2 2027 | 4-6 months. Reuses V1 LARS design directly. |
| **V2-AUTON** | After V4 validated | Q2 2027 | Q3-Q4 2027 | Q4 2027 | 6-8 months. Same hull as V1, remove TMS. |
| **V3-HEAVY** | After V2 or market demand | Q4 2027 | Q2-Q3 2028 | Q3 2028 | 8-12 months. New hull + hydraulic = highest NRE. |

**Key gates:**
- V1 sea trial success → triggers V4 development start
- V4 module proven on existing vessel → de-risks V2 hull integration
- V2 autonomous UUV market confirmation → triggers V2 development
- MCM UUV procurement signal from Navy → triggers V3 development

### Sequential Development Rule
All variants are SEQUENTIAL, not parallel. WX solo engineer constraint (25h/week) means only 1 active product development at a time. V4 → V2 → V3 is the priority order. CEO can reprioritize based on market signals.

---

## 6. Phạm Vi Ứng Dụng (Application Scope)

### By Military Unit

| Unit Type | V1-BASE | V4-LARS-MOD | V2-AUTON | V3-HEAVY |
|-----------|---------|-------------|----------|----------|
| UUV Operations Division (tethered) | ★★★ Primary | ★★ If existing boat available | ✗ | ★★ If heavy UUV |
| MCM Unit (mine countermeasures) | ★ (if UUV ≤550kg) | ★★ Quick capability add | ★★ (autonomous MCM UUV) | ★★★ Primary |
| Naval Research Institute | ★ (overkill for research) | ★★ Cost-effective | ★★★ Primary (autonomous survey UUV) | ✗ |
| Coast Guard | ✗ | ★ (SAR UUV possible) | ★★ (autonomous patrol UUV) | ✗ |
| Training Command | ✗ | ★★ (trainer vessel) | ★ | ✗ |

### By Training Scenario / Mission Type

| Mission | V1 | V4 | V2 | V3 |
|---------|----|----|----|----|
| Tethered ISR (Intelligence, Surveillance, Recon) | ★★★ | ★★ | ✗ | ★★★ |
| Autonomous survey/mapping | ✗ | ★ | ★★★ | ★★ |
| MCM (mine detection/neutralization) | ★ | ★ | ★★ | ★★★ |
| Training/qualification | ★★ | ★★★ | ★★ | ★ |
| Coastal patrol (UUV-assisted) | ★ | ★ | ★★★ | ✗ |

### By Market

| Market | V1 | V4 | V2 | V3 |
|--------|----|----|----|----|
| VN Navy (primary) | ★★★ | ★★★ | ★★ | ★★ |
| VN Coast Guard | ✗ | ★ | ★★ | ✗ |
| VN Research | ★ | ★★ | ★★★ | ✗ |
| Export (deferred) | — | — | — | — |

---

## 7. Revenue Model

**Evidence tier: [L5-ASSUMPTION] — all revenue projections are estimates. No confirmed orders.**

### 5-Year Revenue Projection (2027-2031)

| Year | V1-BASE | V4-LARS-MOD | V2-AUTON | V3-HEAVY | Total |
|------|---------|-------------|----------|----------|-------|
| 2027 | 1 × $517K = $517K | 2 × $175K = $350K | — | — | **$867K** |
| 2028 | 1 × $517K = $517K | 3 × $175K = $525K | 1 × $400K = $400K | — | **$1,442K** |
| 2029 | 1 × $517K = $517K | 2 × $175K = $350K | 2 × $400K = $800K | — | **$1,667K** |
| 2030 | 1 × $517K = $517K | 2 × $175K = $350K | 1 × $400K = $400K | 1 × $700K = $700K | **$1,967K** |
| 2031 | — | 2 × $175K = $350K | 1 × $400K = $400K | 1 × $700K = $700K | **$1,450K** |
| **Total** | **$2,068K** | **$1,925K** | **$2,000K** | **$1,400K** | **$7,393K** |

**Assumptions:**
- V1: 1 unit/year for 4 years (prototype + 3 production), then plateau
- V4: 2-3 modules/year (lower barrier = higher volume), starts 2027
- V2: 1-2 units/year starting 2028 (autonomous UUV market dependent)
- V3: 1 unit/year starting 2030 (MCM modernization dependent)
- No export revenue included (deferred per CEO decision)
- Prices assume learning curve reduction: V4 drops to $150K at volume

### Revenue Streams per Variant

| Stream | V1 | V4 | V2 | V3 |
|--------|----|----|----|----|
| Unit sale | $517K | $150-200K | $400K | $700K |
| Annual maintenance contract (5%) | $26K/yr | $9K/yr | $20K/yr | $35K/yr |
| Spare parts | $10K/yr | $5K/yr | $8K/yr | $15K/yr |
| Training package | $15K (one-time) | $8K (one-time) | $12K (one-time) | $20K (one-time) |
| IRONMESH SW upgrade (future) | $10K/yr | $10K/yr | $10K/yr | $10K/yr |

**Recurring revenue potential (Year 5, all variants deployed):**
- Maintenance: ~$90K/yr (across fleet)
- Spare parts: ~$38K/yr
- SW upgrades: ~$40K/yr
- **Total recurring: ~$168K/yr** [L5-ASSUMPTION]

---

## 8. Development Efficiency

### NRE (Non-Recurring Engineering) per Variant

| Variant | Standalone NRE | Platform NRE (with reuse) | Savings | Savings % |
|---------|---------------|--------------------------|---------|-----------|
| V1-BASE (lead) | $120K | $120K (reference) | — | — |
| V4-LARS-MOD | $80K | $30K (adapter plate + installation engineering) | $50K | 63% |
| V2-AUTON | $100K | $25K (remove TMS, simplify controls) | $75K | 75% |
| V3-HEAVY | $150K | $90K (new hull + hydraulic, reuse SW core) | $60K | 40% |
| **Total** | **$450K** | **$265K** | **$185K** | **41%** |

**Platform investment ROI:**
- V1 NRE = $120K (one-time)
- Platform savings across V4+V2+V3 = $185K
- **ROI: 154%** — V1 platform investment pays for itself 1.5× through variant efficiency

### Engineer-Hours per Variant

| Variant | Design | Build Supervision | Test | Total | Calendar (25h/week) |
|---------|--------|-------------------|------|-------|-------------------|
| V1-BASE | 600 h | 200 h | 200 h | 1,000 h | ~10 months |
| V4-LARS-MOD | 150 h | 50 h | 100 h | 300 h | ~3 months |
| V2-AUTON | 200 h | 150 h | 150 h | 500 h | ~5 months |
| V3-HEAVY | 400 h | 200 h | 200 h | 800 h | ~8 months |

---

## 9. Risk per Variant

| Variant | Primary Risk | P | I | Mitigation | Fallback |
|---------|------------|---|---|-----------|---------|
| **V1-BASE** | LARS+TMS integration complexity on 8m vessel | MED | HIGH | Systematic Phase 2-4 design; V-funnel geometry optimization | Simplify TMS (if UUV OEM takes cable drum) |
| **V4-LARS-MOD** | Existing Navy vessels may lack stern structure/stability for LARS module | MED | HIGH | Survey target vessel types BEFORE design; design for worst-case | Offer structural reinforcement package (+$20-30K) |
| **V2-AUTON** | Market timing — VN Navy may not acquire autonomous UUVs soon | HIGH | MED | Defer V2 until market signal confirmed; no NRE until demand exists | Sell to research segment (Seg C) earlier |
| **V3-HEAVY** | Hydraulic system = new capability for WX; 10m hull = new design | MED | MED | Leverage V1 lessons; partner with hydraulic specialist | Stay at electric LARS, accept 750 kg limit |

### Portfolio-Level Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| V1 prototype fails → entire portfolio stops | CRITICAL | V4 (module only) can proceed independently if LARS mechanism itself works but vessel integration fails |
| Solo engineer bottleneck delays all variants | HIGH | Sequential development (confirmed). Consider contract engineer for V3 hull design. |
| Navy procurement cycle slower than projected | HIGH | V4 has lowest barrier (module price + existing vessel = faster procurement approval) |
| Competitor enters VN market before portfolio matures | MED | First-mover V1 + V4 establishes reference customer. Local support moat. |

---

## 10. CEO Decisions — Record

| # | Decision | CEO Choice | Date | Rationale |
|---|----------|-----------|------|-----------|
| D1 | Variants included | V2 (AUTON), V3 (HEAVY), V4 (LARS-MOD) | 2026-04-09 | Covers 3 segments + module option |
| D2 | Variant sequence | V4 → V2 → V3 | 2026-04-09 | V4 lowest risk/cost, proves LARS. V3 highest NRE = last. |
| D3 | Export timing | Deferred (not yet) | 2026-04-09 | Focus domestic first. Export after fleet reference. |
| D4 | Platform reuse target | ≥70% SW, ≥50% HW | 2026-04-09 | Confirmed. V4 (80%/70%) and V2 (85%/80%) exceed. V3 (40% HW) below — accepted due to new hull. |
| D5 | V5-EXPORT | Not included in portfolio (deferred) | 2026-04-09 | Focus VN market. Revisit after 3+ domestic units delivered. |

### Pending Decisions (future sessions)

| # | Decision Needed | Trigger | Timeline |
|---|----------------|---------|----------|
| P1 | V4 target vessel types (which Navy workboats?) | V1 LARS mechanism proven | After V1 sea trial |
| P2 | V2 start trigger (autonomous UUV procurement signal) | Navy announces autonomous UUV acquisition | Market-dependent |
| P3 | V3 start trigger (MCM modernization signal) | Navy MCM UUV program confirmed | Market-dependent |
| P4 | Export market selection (which ASEAN countries?) | 3+ domestic units delivered | 2028+ |
| P5 | Contract engineer for V3 hull design? | V3 triggered, solo capacity insufficient | Before V3 start |

---

## TNKCT (Tính Năng Kỹ Chiến Thuật) — Per Variant

Each variant needs own TNKCT. Lead product TNKCT exists in `Phase2-Concept/`. Variant TNKCTs to be generated when each variant enters Phase 0.

| Variant | TNKCT Status | Reference |
|---------|-------------|-----------|
| V1-BASE | ✓ Exists | `Phase2-Concept/VN_XUONG_UUV_TNKCT_*.md` |
| V4-LARS-MOD | Pending (at V4 Phase 0) | Delta from V1 TNKCT |
| V2-AUTON | Pending (at V2 Phase 0) | Delta from V1 TNKCT (remove TMS section) |
| V3-HEAVY | Pending (at V3 Phase 0) | New TNKCT (different vessel + hydraulic) |

---

*Portfolio Planning v1.0 | VN-XUONG-UUV Product Line | Pahl & Beitz §3.1 + FORGE Portfolio | 2026-04-09*
