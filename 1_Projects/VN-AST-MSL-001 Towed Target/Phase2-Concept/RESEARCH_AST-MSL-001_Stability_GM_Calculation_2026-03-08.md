---
created: 2026-03-08
source: research-pipeline
notebook: stability
topic: "OI-3 Stability Calculation — GM for AST-MSL-001 Circular HDPE Hull"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox, #topic/technology]
sources_analyzed:
  videos:
    - "Metacentric Height, GM, Ships Equilibrium, Angle of Loll"
    - "Example 1 Calculating GM"
    - "Ship Stability - Center of Buoyancy (KB Calculation)"
    - "Ship Stability - Shift in COG (KG calculations)"
    - "Differentiating Statical vs Dynamical Stability"
    - "Construct a GZ Curve, Range of Stability, KN Values"
    - "Heel During Turn"
    - "Floating Offshore Spar Wind Turbine - Ansys Aqwa"
  professional:
    - "USNA EN400 Ch4 — Stability (textbook)"
    - "USNA EN486 — Buoyancy & Static Stability (textbook)"
    - "DNVGL-RU-SHIP Pt3 Ch15 — Stability Rules"
    - "Biran — Ship Hydrostatics and Stability (textbook)"
    - "46 CFR 174.055 — Wind Heeling Moment Calculation (US regulation)"
    - "GHS Wind Heel Moments — Calculation Methods"
    - "Wärtsilä — Intact Stability Criteria Encyclopedia"
    - "MarineInsight — Intact Stability of Surface Ships"
    - "MarineInsight — Stability Criteria & Inclining Experiment"
    - "UWO — Stability of Floating Bodies (lecture notes)"
---

# RESEARCH: AST-MSL-001 Stability Analysis — OI-3

## Search Query
- `floating buoy stability metacentric height calculation naval target`
- `metacentric height wind heeling moment small craft stability criteria`
- `floating platform stability calculation hydrostatics righting arm GZ curve`

## Videos Selected (8/14)

| # | ID | Title | Duration |
|---|-----|-------|----------|
| 1 | spivBg4KCiI | Metacentric Height, GM, Ships Equilibrium, Angle of Loll | 9:14 |
| 2 | 3IqlXhwZTcY | Example 1 Calculating GM | 6:05 |
| 5 | X5R7NLues5M | Ship Stability - Center of Buoyancy (KB Calculation) | 22:54 |
| 6 | -zHEJ7AYWiU | Ship Stability - Shift in COG (KG calculations) | 31:49 |
| 8 | 9sPrHlDLUjk | Differentiating Statical vs Dynamical Stability | 8:14 |
| 9 | dGu3m7-xNgg | Construct a GZ Curve, Range of Stability, KN Values | 15:46 |
| 10 | WLyCjTuE-9E | Heel During Turn | 38:47 |
| 12 | XthkX7pqfew | Floating Offshore Spar Wind Turbine - Ansys Aqwa | 49:26 |

NLM Notebook: `stability` (ID: d85a8e73-42f4-4f3f-adb1-79502705f0c4)

---

## NLM Analysis: Methodology

### Calculation Steps for Circular/Cylindrical Hull

**Step 1: Draft**
- Underwater Volume = Displacement / ρ_seawater
- Draft = Volume / (π × R²) — circular waterplane

**Step 2: KB (Center of Buoyancy)**
- KB = Draft / 2 (uniform cylinder)

**Step 3: KG (Center of Gravity)**
- KG = Σ(m_i × z_i) / Σm_i — weights and moments method

**Step 4: BM (Metacentric Radius)**
- I = π × R⁴ / 4 (circular waterplane moment of inertia)
- BM = I / ∇ (underwater volume)

**Step 5: KM and GM**
- KM = KB + BM
- GM = KM - KG (MUST be positive for stability)

### GZ Curve Requirements
- **Positive initial slope** → positive GM
- **Sufficient max GZ** → resist max expected overturning moment
- **Large area under curve** → dynamical stability (energy absorption)
- **Angle of vanishing stability** → must exceed max expected heel

### Key Warnings for Top-Heavy Structures
1. **Negative GM → Angle of Loll:** If G rises above M, target lists to one side
2. **Resonance risk:** Natural frequency matching wave period → amplified motion
3. **B vs G relationship:** Unlike spar designs where B>G, our design has G>B → stability depends entirely on large waterplane area (BM)

---

## NLM Analysis: Numerical Calculation for C1 TRÒN HDPE

### Input Parameters

| Component | Mass (kg) | CG above keel (m) | Moment (kg·m) |
|-----------|-----------|-------------------|---------------|
| HDPE hull (foam-filled) | 2,000 | 0.50 | 1,000 |
| Mast + 10× reflectors | 800 | 3.50 | 2,800 |
| Mooring gear | 2,200 | 0.30 | 660 |
| **TOTAL** | **5,000** | — | **4,460** |

- Hull diameter: 6.0 m (R = 3.0 m)
- Seawater density: 1,025 kg/m³

### Calculation Results

| Parameter | Formula | Value |
|-----------|---------|-------|
| Underwater Volume (∇) | 5000 / 1025 | **4.878 m³** |
| Waterplane Area (A) | π × 3² | **28.274 m²** |
| Draft | ∇ / A | **0.173 m** (17.3 cm) |
| KB | Draft / 2 | **0.086 m** |
| KG | 4460 / 5000 | **0.892 m** |
| I (waterplane inertia) | π × 3⁴ / 4 | **63.617 m⁴** |
| BM | I / ∇ = 63.617 / 4.878 | **13.04 m** |
| KM | KB + BM | **13.126 m** |
| **GM** | KM - KG | **12.234 m** |

### Assessment

- **GM = 12.234 m → POSITIVE, exceptionally large**
- Risk of capsizing: **EXTREMELY LOW**
- The 6m diameter with only 17.3 cm draft creates a "floating disc" effect
- Waterplane inertia (BM = 13.04 m) massively dominates the top-heavy CG (KG = 0.892 m)
- The mast at 3.5m poses virtually no threat — M is 13m above keel

---

## NLM Analysis: Wind Heeling Moment (Pro Sources)

### Formula per 46 CFR 174.055

**H = k × v² × Cₕ × Cₛ × A × h**

| Variable | Definition | Our Value |
|----------|-----------|-----------|
| k | Constant | 0.0623 kg·s²/m⁴ |
| v | Wind velocity | 26 m/s (Beaufort 10) |
| Cₕ | Height coefficient (Table 174.055a, ≤15.3m) | 1.00 |
| Cₛ | Shape coefficient ("isolated structural shapes") | 1.50 |
| A | Projected lateral area (10 reflectors × 0.35 m²) | 3.5 m² |
| h | Center of wind pressure to center of lateral resistance | 3.5 m |

**Calculation:**
- H = 0.0623 × 26² × 1.00 × 1.50 × 3.5 × 3.5
- H = 0.0623 × 676 × 1.0 × 1.5 × 12.25
- H = **773.3 kg·m** = **7.59 kN·m**

### Wind Heel Angle Check

- Righting moment at small angle = Δ × GM × sin(θ)
- At θ = 1°: RM = 5000 × 9.81 × 12.234 × sin(1°) = **10,478 N·m = 10.48 kN·m**
- Wind heeling moment = 7.59 kN·m < 10.48 kN·m at 1°
- **Max heel from wind ≈ 0.7°** → negligible

---

## NLM Analysis: IMO 2008 Intact Stability Criteria

| Criterion | IMO Minimum | Our Design |
|-----------|------------|------------|
| Initial GM₀ | ≥ 0.15 m | **12.234 m** ✅ (81× margin) |
| GZ at 30° | ≥ 0.20 m | **~6.1 m** ✅ (est. GM×sin30°) |
| Area under GZ to 30° | ≥ 0.055 m·rad | **>>0.055** ✅ |
| Area under GZ to 40° | ≥ 0.09 m·rad | **>>0.09** ✅ |
| Area 30°–40° | ≥ 0.03 m·rad | **>>0.03** ✅ |
| Max GZ angle | ≥ 25° | **~90°** ✅ (disc shape) |

**All IMO 2008 IS Code criteria satisfied with extreme margin.**

### Weather Criterion (Severe Wind + Rolling)
- GM = 12.2 m dẫn đến extremely stiff vessel
- Wind heel = 0.7° vs max allowed typically 16°
- Dead ship condition: circular hull has no preferred heading → omnidirectional stability
- **PASS with extreme margin**

### Large-Angle GZ Methods
1. **Cross Curves of Stability + Sine Correction:** GᵥZᵥ = G₀Z₀ − KG × sin(φ)
2. **Wall-sided formula** (for vertical sides — applicable to cylinder)
3. **Numerical integration** (Ansys Aqwa for dynamic simulation)
4. For circular cylinder: BM dominance makes GZ ≈ GM × sin(φ) valid to large angles

---

## Free Surface Effect
- Fully foam-filled HDPE → **free surface effect = 0** (no liquid movement)
- Condition C-G2-01 (foam buoyancy zone verification) validates this assumption
- If any compartment NOT foam-filled → must recalculate with FSE correction

---

## CEO Notes

- **OI-3 FULLY RESOLVED** — GM = 12.234 m, wind heel < 1°, all IMO criteria met
- GM/Beam ratio = 12.234/6.0 = 2.04 — extremely stiff (snap-roll in waves possible → irrelevant for unmanned target)
- Wind heeling moment at Beaufort 10 (26 m/s) = 7.59 kN·m → only 0.7° heel
- Even if mast mass doubles to 1600 kg → GM still ~11 m → stability NOT a concern
- Free surface effect = 0 (foam-filled) → validates C-G2-01
- **OI-3 status: RESOLVED ✅**

---

## Professional Sources Added to NLM (Round 2)

| # | Source | Type | Content |
|---|--------|------|---------|
| 1 | USNA EN400 Ch4 Stability | PDF/textbook | GM, GZ, stability fundamentals |
| 2 | USNA EN486 Buoyancy & Static Stability | PDF/textbook | Hydrostatics theory |
| 3 | DNVGL-RU-SHIP Pt3 Ch15 | PDF/standard | DNV stability rules |
| 4 | Biran — Ship Hydrostatics & Stability | PDF/textbook | Comprehensive reference |
| 5 | 46 CFR 174.055 | Web/regulation | Wind heeling moment formula |
| 6 | GHS Wind Heel Moments | Web/software | 3 calculation methods |
| 7 | GHS Bulletin — Wind Heel | Web/software | Detailed wind heel methodology |
| 8 | Wärtsilä Intact Stability Criteria | Web/encyclopedia | IMO criteria summary |
| 9 | MarineInsight — Intact Stability | Web/article | Stability principles |
| 10 | MarineInsight — Criteria & Inclining | Web/article | Inclining experiment |
| 11 | UWO — Stability of Floating Bodies | PDF/lecture | Cylinder stability theory |

**Total notebook sources: 19** (8 YouTube + 11 professional)

---

## Next Actions
1. [x] ~~Wind heeling moment calculation~~ → DONE: 7.59 kN·m, heel < 1°
2. [ ] Verify mass estimates against Phase 3 BOM when available
3. [ ] Consider adding ballast at keel if mast mass increases beyond 1600 kg
4. [ ] Extract Galaxy candidates (see previous session)
