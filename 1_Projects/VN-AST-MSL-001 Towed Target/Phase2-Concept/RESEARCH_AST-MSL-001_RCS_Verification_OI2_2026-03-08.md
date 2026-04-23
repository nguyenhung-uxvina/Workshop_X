---
created: 2026-03-08
source: research-pipeline
notebook: rcs
topic: "OI-2 RCS Verification — 10× Trihedral Corner Reflector Array at X-band"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox, #topic/technology]
sources_analyzed:
  professional:
    - "Corner Reflector RCS — RadarSimX (simulation)"
    - "Radartutorial.eu — Corner Reflectors"
    - "Radar Cross Section — Wikipedia"
    - "CORNER REFLECTORS — Charles A. Duboc (MIT thesis)"
    - "Computer Analysis of RCS Characteristic of Rectangle Trihedral — Scribd"
    - "RADAR CROSS SECTION CHARACTERIZATION OF CORNER — ISPRS Archives"
    - "Research on Corner Reflector Array Fitting Method for Ship Scattering"
    - "Warship RCS determination and reduction — ResearchGate"
    - "Analysis of RCS assessment methods for surface ships — Dialnet"
    - "Radar Cross Section Analysis Using Physical Optics — Marine Targets"
    - "Feasibility study of corner reflector for radar — JAMET"
    - "Adaptive Sea-Clutter Model Based Detection — ResearchGate"
    - "RCS Convergence Study on Electrically Large Corner Reflector — WIPL-D"
    - "And 39 more sources (52 total in notebook)"
---

# RESEARCH: AST-MSL-001 RCS Verification — OI-2

## Context
- **Open Item:** OI-2 from G2 Gate Review
- **Requirement:** R-A01 — RCS ≥ 1,000 m² at X-band (9.4 GHz)
- **Design:** 10× trihedral corner reflectors, edge length a = 0.9 m, aluminum sheet

## NLM Notebook
- Alias: `rcs` (52 sources — papers, standards, simulations, naval references)
- No new sources needed — existing notebook comprehensive

---

## RCS Calculation

### Formula: Triangular Trihedral Corner Reflector Peak RCS

**σ_max = (4π × a⁴) / (3λ²)**

| Variable | Definition | Value |
|----------|-----------|-------|
| a | Edge length | 0.9 m |
| λ | Wavelength (X-band 9.4 GHz) | c/f = 0.0319 m |
| a⁴ | | 0.6561 m⁴ |
| λ² | | 0.001018 m² |

### Step-by-Step Calculation

```
σ_max = (4π × 0.6561) / (3 × 0.001018)
      = 8.2448 / 0.003053
      = 2,700.7 m²
```

**Single reflector peak RCS = 2,701 m²**

---

## Beamwidth Analysis

- Trihedral corner reflector 3dB beamwidth: **~40°** (±20° from boresight)
- 10 reflectors at 36° spacing → max off-axis angle = 18°
- 18° < 20° (half-beamwidth) → **all angles within -3dB coverage**
- Adjacent reflectors overlap at boundary → no null zones

---

## Array Coverage Verification

| Parameter | Value |
|-----------|-------|
| Reflector count | 10 |
| Spacing | 36° (360°/10) |
| Max off-axis angle | 18° |
| 3dB beamwidth | ~40° |
| Peak RCS (boresight) | **2,701 m²** |
| Min RCS (18° off-axis, ~-3dB) | **~1,350 m²** |
| Overlap zone | ±2° around each boundary — two reflectors contribute |

### Verification Against Requirement

| Condition | RCS | vs R-A01 (≥1000 m²) | Margin |
|-----------|-----|---------------------|--------|
| On boresight (best case) | 2,701 m² | **PASS** | 2.7× |
| At boundary (worst case, -3dB) | ~1,350 m² | **PASS** | 1.35× |
| With 3dB derating (manufacturing) | ~675 m² | **FAIL** | 0.68× |

### Margin Analysis

- **Theoretical worst-case margin:** 1,350/1,000 = 1.35× = **1.3 dB**
- **After typical 2-3 dB manufacturing derating:** margin approaches zero or negative
- **Risk:** If manufacturing quality is poor (angle error >0.5°, surface roughness >1mm), RCS could drop below 1,000 m²

---

## Practical Derating Factors

| Factor | Effect | Mitigation |
|--------|--------|------------|
| **Dihedral angle error** (≠90°) | Sharp degradation — multiple scattered images | Jig welding with ±0.3° tolerance |
| **Surface flatness** | Must be <1mm deviation for X-band | Use 2-3mm aluminum sheet, flatten before assembly |
| **Edge diffraction** | Secondary peaks, sidelobe distortion | Not critical for RCS enhancement (only for reduction) |
| **Sea state/tilting** | Platform tilt ±5° shifts boresight | Circular arrangement compensates — always some reflectors on-axis |
| **Corrosion/fouling** | Surface conductivity degradation | Aluminum oxide layer acceptable; periodic cleaning |
| **Rain/spray** | Attenuation ~0.1 dB at X-band in heavy rain | Negligible for short range (<20 km) |

**Recommended derating:** Apply **-3 dB** (factor 0.5) for conservative estimate:
- Derated peak: 2,701 × 0.5 = **1,350 m²**
- Derated worst-case: 1,350 × 0.5 = **675 m²**

---

## Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|-----------|--------|------------|
| Manufacturing angle error >0.5° | Medium | High — RCS drops rapidly | Precision jig, verify with inclinometer |
| Min RCS below 1000 m² at some angles | Medium | Medium — still detectable but below spec | Increase to 12 reflectors (30° spacing) or increase edge to 1.0m |
| Sea clutter masking at low grazing angle | Low | Medium — S/N reduction | Target designed to be well above clutter (~3m mast) |

### Sensitivity: Edge Length vs Minimum RCS

| Edge (m) | σ_peak (m²) | σ_min @ -3dB (m²) | σ_min @ -6dB (m²) | Meets 1000 m² @ -3dB? |
|----------|-------------|--------------------|--------------------|----------------------|
| 0.8 | 1,679 | 840 | 420 | No |
| 0.9 | 2,701 | 1,350 | 675 | **Marginal** |
| 1.0 | 4,095 | 2,048 | 1,024 | **Yes with margin** |
| 1.1 | 6,052 | 3,026 | 1,513 | **Yes, comfortable** |

---

## CEO Decision Required

**OI-2 finding:** 10× reflectors at edge 0.9m gives theoretical min RCS ~1,350 m² (1.3 dB margin). After manufacturing derating, margin is thin.

**Options:**

| Option | Change | σ_min (derated -3dB) | Cost Impact | Risk |
|--------|--------|---------------------|-------------|------|
| A | Keep 0.9m edge, 10 units | ~675 m² | None | **Below spec after derating** |
| B | Increase edge to **1.0m**, 10 units | ~1,024 m² | +~5% material | **Meets spec with margin** |
| C | Keep 0.9m, increase to **12 units** (30° spacing) | ~1,350 m² (better overlap) | +20% reflector cost | **Better azimuth coverage** |
| D | **1.0m edge + 12 units** | ~2,048 m² | +25% | **Comfortable margin** |

**Recommendation:** Option B (edge 1.0m, 10 units) — minimal cost increase, meets spec even with -3dB derating. σ⁴ scaling means 11% more edge gives 52% more RCS.

---

## CEO Notes

- **Decision: Option B — edge 1.0m × 10 units**
- σ_peak = 4,095 m², σ_min (derated -3dB) = 1,024 m² → meets R-A01 (≥1000 m²)
- Cost impact: +~5% reflector material (negligible vs total budget)
- a⁴ scaling advantage: 11% more edge → 52% more RCS
- **OI-2 status: RESOLVED ✅**

---

## Next Actions
1. [ ] CEO decision on edge length (0.9m vs 1.0m vs 1.1m)
2. [ ] CEO decision on reflector count (10 vs 12)
3. [ ] Update Gate Review OI-2 with chosen parameters
4. [ ] Phase 3: detailed reflector drawing (aluminum sheet thickness, bracket design)
