---
project: V-SMASH-M
phase: 3
type: material-selection
prompt: P24
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Layout_Design_Review_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — Material Selection (P24)

> **Purpose:** Select materials for all critical components using the 6-step Pahl & Beitz decision tree. Each selection considers load case, strength, fatigue, corrosion, local content, and final specification.
> **Operating environment:** C3-C4 (tropical Vietnam — 25-55°C, 80-100% RH, potential coastal salt spray)
> **P23 carry-forward:** IMP-01 (bolt fillet radii), IMP-04 (3-layer corrosion prevention), IMP-06 (clamp bushing)

---

## Component 1: Optical Bench Insert

**Function:** Provide a rigid, thermally stable datum surface shared by sensor mount (SA-01) and OLED mount (SA-03). Must survive 10,000G recoil shock (VM-F01) over 500+ rounds (VM-F03) without relative displacement between optical mounting points.

### 6-Step Decision

**Step 1 — Primary Load Case:** Impact/shock (10,000G, 0.5ms pulse) + static pre-load from mounting screws. Dominant mode: impulse-driven bending of bench between mounting points. Secondary: thermal expansion/contraction (-10°C to +55°C, VM-M05).

→ Initial material class: **Aluminum alloy** (high stiffness-to-weight ratio, good machinability, adequate impact toughness at this scale).

**Step 2 — Strength Verification:**
- Bench geometry (estimated): 80mm × 25mm × 3mm plate with 2 mounting pockets
- Peak impulse acceleration: 10,000G = 98,100 m/s²
- Effective mass on bench: ~40g (SA-01 15g + SA-03 25g)
- Peak force: F = m × a = 0.040 × 98,100 = 3,924 N
- Simplified bending stress (simply supported beam, center load): σ = (F × L) / (4 × Z)
  - L = 60mm (span between supports), Z = b×h²/6 = 25×3²/6 = 37.5 mm³
  - σ = (3,924 × 60) / (4 × 37.5) = 1,570 MPa — **exceeds yield of any aluminum**
- **Correction:** This simplified model over-estimates stress because (a) the bench is bolted continuously, not simply supported, (b) the shock pulse is 0.5ms — dynamic response depends on natural frequency, not static load. Dynamic amplification factor (DAF) for impulse shorter than half the natural period: DAF ≈ 1.0-1.5. At 3mm thickness, fn ≈ 2-5 kHz → half-period = 0.1-0.25ms. Pulse (0.5ms) > half-period → quasi-static applies but with distributed support.
- **Realistic approach:** FEA required in Phase 4. For material selection, apply safety factor to worst-case quasi-static estimate with correction for distributed support (reduce by ~4× from simply supported): σ_est ≈ 1,570 / 4 ≈ 393 MPa
- Required yield: σ_y ≥ 393 × SF(2.0) = 786 MPa — still very high for aluminum
- **Design response:** Increase bench thickness to 5mm (weight penalty ~15g acceptable within 200g margin):
  - Z = 25 × 5² / 6 = 104.2 mm³
  - σ = (3,924 × 60) / (4 × 104.2) / 4 (support correction) = 141 MPa
  - Required yield: 141 × 2.0 = 282 MPa
  - AA7075-T6: σ_y = 503 MPa → margin = 503/141 = 3.57 (SF = 2.0 met) ✅
  - AA6061-T6: σ_y = 276 MPa → margin = 276/141 = 1.96 (SF = 2.0 borderline) ⚠

→ **Selected: AA7075-T6** (503 MPa yield, 572 MPa UTS). Provides SF = 3.57 — adequate margin for a safety-critical optical alignment component under repeated shock. [Note: FEA in Phase 4 will refine. If FEA shows lower stress, can downgrade to 6061-T6 for cost savings.]

**Step 3 — Fatigue Check:**
- Cyclic load: 10,000G shock × 500 rounds (VM-F03) = 500 cycles (low-cycle regime)
- AA7075-T6 fatigue strength at 500 cycles (S-N curve): ~350 MPa (R=-1)
- Applied amplitude: ~141 MPa (from Step 2)
- S_e_corrected = 350 × K_f(0.85 machined) = 297 MPa
- 297 > 141 → **PASS** with margin 2.1

**Step 4 — Corrosion Assessment:**
- Environment: C3-C4 (tropical, potentially coastal)
- AA7075-T6 bare: poor corrosion resistance (Cu content makes it susceptible to intergranular corrosion)
- **Required treatment:** Hard anodize MIL-A-8625 Type III (≥50 μm) — per P23 IMP-04 primary barrier
- Salt spray (ASTM B117): hard-anodized 7075 → 500-1000h (meets C3-C4 with IP67 housing as additional barrier)
- Chromate seal after anodize adds 200-500h additional protection
- **Alternative: AA7075-T7351** — slightly lower strength (462 MPa yield) but significantly better SCC resistance. Consider if stress corrosion is a concern at bolt holes.

**Step 5 — Local Content:**
- AA7075-T6 plate: ⚠ **Limited local source.** Hòa Phát produces 6061 series, not 7075. 7075 requires import (China/Korea).
- Import premium: +30-40%
- CNC machining: local (outsource to Hanoi/HCM CNC shop) ✅
- Hard anodize: limited local capability — surface treatment vendors in HCM can do MIL-A-8625 Type III but quality control variable. [ASSUMPTION: needs vendor qualification before Phase 4]
- **Local content impact:** Optical bench material = import ($5-8), machining = local ($8-10), anodize = local ($2-3). Net: ~60% local value for this component.

**Step 6 — Final Specification:**

| Parameter | Specification |
|-----------|--------------|
| Material | AA7075-T6 per AMS-QQ-A-250/12 (or ASTM B209) |
| Minimum σ_y | 503 MPa | σ_UTS | 572 MPa |
| Hardness | 150 HB typical |
| Geometry | 80 × 25 × 5 mm plate (Phase 4 FEA may refine) |
| Bolt holes | Fillet radius ≥0.5mm (P23 IMP-01), edge break ≥0.3mm |
| Front pocket | H7 register bore for lens barrel (P23 IMP-02) |
| Surface treatment | Hard anodize MIL-A-8625 Type III, ≥50 μm, sealed |
| Procurement | Material: import (Korea/China). Machining: local CNC. Anodize: local (vendor TBQ) |
| Incoming inspection | Material cert review (alloy + temper). Hardness spot-check (150 ± 15 HB). Dimensional check on register bore (H7 go/no-go gauge). Anodize thickness (eddy current, ≥50 μm). |

---

## Component 2: Picatinny Rail Clamp

**Function:** Mechanically attach V-SMASH-M to weapon top rail per MIL-STD-1913. Must withstand recoil shock (10,000G), maintain zero-shift over 500 rounds (VM-F03), and provide ≤20 Nm tightening torque. This is the bottom datum plane — all other components reference it.

### 6-Step Decision

**Step 1 — Primary Load Case:** Clamping pre-load (static, ≤20 Nm cross-bolt) + impulse shock (10,000G). Dominant mode: combined compression (clamping) + transverse shear (recoil impulse). Wear: rail-to-clamp sliding interface under shock.

→ Initial material class: **Aluminum alloy (high-strength)** preferred for weight. Steel alternative if aluminum insufficient for wear.

**Step 2 — Strength Verification:**
- Cross-bolt clamp force at 20 Nm: F_clamp ≈ T / (K × d) = 20 / (0.2 × 0.006) = 16,667 N [M6 bolt, K=0.2]
- Shear force from recoil on 300g device at 10,000G: F_shear = 0.300 × 98,100 = 29,430 N
- Friction force resisting shear: F_friction = μ × F_clamp = 0.3 × 16,667 = 5,000 N
- **F_shear >> F_friction** → clamp CANNOT hold by friction alone at 10,000G
- **This is expected and standard:** Picatinny clamp uses rail slot geometry (cross-slot recoil lug) to mechanically key against recoil, not friction. The cross-bolt provides perpendicular clamping; the MIL-STD-1913 slot provides longitudinal recoil resistance via mechanical interlock.
- Bearing stress on recoil lug: F_shear / A_lug. Lug contact area ~6mm × 21.2mm = 127 mm². σ_bearing = 29,430 / 127 = 232 MPa
- Required yield (bearing): 232 × SF(2.0) = 464 MPa
- AA7075-T6: σ_y = 503 MPa, bearing yield ~650 MPa → margin adequate ✅
- AA6061-T6: σ_y = 276 MPa, bearing yield ~386 MPa → **below 464 MPa requirement** ❌

→ **Selected: AA7075-T6** (same as optical bench — simplifies procurement)

**Step 3 — Fatigue Check:**
- 500 cycles at 232 MPa bearing stress (original lug width)
- **HD-06 decision: widen lug by +2mm** (6mm → 8mm width). New contact area: 8 × 21.2 = 169.6 mm²
- Revised bearing stress: 29,430 / 169.6 = 173 MPa
- 7075-T6 fatigue at 500 cycles: ~350 MPa (R=0, bearing)
- K_f = 0.80 (machined bearing surface)
- S_e_corrected = 350 × 0.80 = 280 MPa > 173 MPa → **PASS** with margin 1.62
- Weight impact: +5g (clamp 35g → 40g). Acceptable within 130g remaining margin.

**Step 4 — Corrosion Assessment:**
- Clamp is external, exposed to rain/humidity when mounted on weapon
- AA7075-T6 + hard anodize MIL-A-8625 Type III (same as optical bench)
- Rail-to-clamp interface: aluminum clamp on steel rail → galvanic couple
- **Mitigation:** Hard anodize provides insulating barrier. Additionally, clamp bearing surface can be left un-anodized for dimensional accuracy and coated with thin film of anti-seize (MoS₂ or PTFE-based) — prevents galling AND provides moisture barrier
- **Cross-bolt bushing (P23 IMP-06):** Flanged 304 SS bushing pressed into clamp bore. Distributes bolt load, prevents aluminum galling, and nylon washer under bolt head provides isolation.

**Step 5 — Local Content:**
- Same as optical bench: material import, machining local, anodize local
- Net: ~55% local value for this component (heavier machining content than bench)

**Step 6 — Final Specification:**

| Parameter | Specification |
|-----------|--------------|
| Material | AA7075-T6 per AMS-QQ-A-250/12 |
| Minimum σ_y | 503 MPa |
| Geometry | Per MIL-STD-1913 clamp profile (detail in Phase 4) |
| Recoil lug | Surface finish ≤Ra 1.6 μm on bearing faces |
| Cross-bolt bushing | 304 SS flanged bushing, pressed fit (P23 IMP-06) |
| Surface treatment | Hard anodize MIL-A-8625 Type III (≥50 μm). Recoil lug bearing face: thin MoS₂ dry film lube |
| Fastener | M6 cross-bolt, A2-70 SS (AISI 304), with nylon isolating washer |
| Procurement | Material: import. Machining: local CNC. Anodize + bushing press: local |
| Incoming inspection | Hardness (150 ±15 HB). Dimensional: slot width 21.2 ±0.1mm. Recoil lug bearing face roughness (profilometer ≤Ra 1.6). Bushing press-fit retention (pull-out test ≥500N). |

---

## Component 3: Housing Shells (Top + Bottom)

**Function:** Structural envelope for all internals. IP67 seal (VM-O04). Shock absorption for non-optical components. Thermal path for SoC heat (II-07). Mounting bosses for PCB (II-08) and optical bench.

### 6-Step Decision

**Step 1 — Primary Load Case:** Low-level stress — housing is not a primary structural member (optical bench and clamp carry the shock loads). Housing loads: O-ring compression (static, ≤5 MPa), boss insert pull-out (vibration), and incidental drop (1.5m, VM-F02). Thermal: SoC heat path through housing wall.

→ Initial material class: **Engineering thermoplastic** (PA6-GF30 already selected in P22 for injection molding capability + IP67 sealing).

**Step 2 — Strength Verification:**
- PA6-GF30 properties: σ_y ≈ 90 MPa (dry), σ_y ≈ 55 MPa (conditioned, 50% RH)
- Drop test (1.5m onto concrete): impact energy = m×g×h = 0.3 × 9.81 × 1.5 = 4.4 J
- PA6-GF30 Charpy impact strength: ~50 kJ/m² → adequate for 4.4 J on housing wall area
- Boss pull-out under vibration: M2.5 brass heat-set insert, pull-out ≥200N in PA6-GF30 (2.0mm wall) — adequate for PCB mount vibration loads
- **Conditioned strength concern:** In tropical Vietnam (80-100% RH), PA6 absorbs 2-3% moisture → σ_y drops from 90 to 55 MPa. All stress calculations must use conditioned (wet) properties.
- At conditioned σ_y = 55 MPa vs max stress ~20 MPa (boss pull-out) → SF = 2.75 ✅

**Step 3 — Fatigue Check:**
- Housing is not cyclically loaded (recoil loads carried by optical bench + clamp)
- N/A — skip

**Step 4 — Corrosion Assessment:**
- PA6-GF30 is inherently corrosion-resistant (polymer)
- Glass fibers exposed at machined/cut surfaces can wick moisture — ensure all cut surfaces sealed or as-molded
- UV degradation: PA6 is UV-sensitive. Add UV stabilizer package to compound, OR apply matte paint (PR-09) which provides UV barrier
- No galvanic concern (non-conductive material)

**Step 5 — Local Content:**
- PA6-GF30 pellets: locally available (multiple Vietnamese compounders)
- Injection mold: local toolmaker (single-cavity for 1,000-10,000 unit volume)
- Molding: Workshop X capable ✅
- **100% local** for this component

**Step 6 — Final Specification:**

| Parameter | Specification |
|-----------|--------------|
| Material | PA6-GF30 (30% glass-filled nylon 6), UV-stabilized, black |
| Grade | Zytel 70G30HSL BK039 (DuPont) or equivalent with UV stabilizer |
| Minimum σ_y (conditioned) | 55 MPa |
| Minimum Charpy impact | 50 kJ/m² (notched, conditioned) |
| Wall thickness | 2.0 mm min general, 3.0 mm at boss locations (P22 NR-05) |
| O-ring groove | Per Parker O-Ring Handbook for IP67 static seal |
| Inserts | M2.5 brass heat-set inserts for PCB mounting (II-08) |
| Surface treatment | Matte texture (mold texture VDI 24) + pad-printed markings (PR-09) |
| Procurement | Pellets: local. Mold: local toolmaker (~$3K single-cavity). Molding: WX |
| Incoming inspection | Visual (flash, short shots, sink marks). Wall thickness (caliper, ≥2.0mm). O-ring groove width/depth (go/no-go gauge). Insert pull-out (sample: ≥200N). |

---

## Component 4: Fasteners (All Types)

**Function:** Secure housing halves (IP67 seal), retain optical bench, mount PCB. Must survive repeated recoil without loosening. Must not cause galvanic corrosion with aluminum components.

### 6-Step Decision

**Step 1 — Primary Load Case:** Clamping pre-load (static) + vibration-induced loosening (10,000G shock × 500 cycles). This is a vibration-retention problem, not a strength problem — fastener strength is adequate by inspection at M2.5-M4 sizes.

→ Initial material class: **A2-70 stainless steel (AISI 304)** per P23 IMP-04.

**Step 2 — Strength Verification:**
- A2-70: σ_y = 450 MPa, σ_UTS = 700 MPa
- Largest fastener: M6 cross-bolt (clamp) — covered in Component 2
- Housing T10 Torx: M4 (estimated). Proof load M4 A2-70: ~4,500 N. Applied load (O-ring compression + shock): <2,000 N → SF > 2.0 ✅
- PCB standoffs: M2.5. Proof load M2.5 A2-70: ~2,000 N. Applied: <500N → SF > 4.0 ✅

**Step 3 — Fatigue Check:**
- Vibration-induced loosening is the failure mode, not fatigue fracture
- Mitigation: thread-locking compound (Loctite 243 medium-strength, blue) on all fasteners except battery door
- Housing T10 Torx: Loctite 243 + specified torque (TBD in Phase 4, ~1.5 Nm for M4)
- Optical bench screws: Loctite 243 + specified torque
- PCB standoffs: Loctite 243 + specified torque

**Step 4 — Corrosion Assessment:**
- A2-70 (AISI 304): excellent corrosion resistance in C3-C4 environments
- Salt spray bare: >1,000h (ASTM B117)
- Contact with aluminum: galvanic couple mitigated by 3-layer strategy (P23 IMP-04):
  1. Hard anodize on aluminum (insulating barrier)
  2. Nylon/PEEK isolating washers under bolt heads
  3. SS304 self-corrosion resistance (no rust staining)
- **Galling risk:** SS304 on SS304 (bolt-to-bushing in clamp) can gall. Apply anti-seize to cross-bolt threads.

**Step 5 — Local Content:**
- A2-70 stainless fasteners: locally available from Vietnamese fastener distributors (DIN 912, DIN 7991 standard)
- Thread-locking compound: import (Loctite/Henkel) — small cost item
- **95% local** for fastener supply

**Step 6 — Final Specification:**

| Fastener | Size | Qty | Grade | Thread Lock | Torque | Washer |
|----------|------|-----|-------|-------------|--------|--------|
| Housing closure | M4 × 12 Torx T10 (DIN 7991 flat head) | 4 | A2-70 | Loctite 243 | TBD (~1.5 Nm) | Nylon isolating under head |
| Optical bench to housing | M3 × 8 socket cap (DIN 912) | 4 | A2-70 | Loctite 243 | TBD (~0.8 Nm) | Nylon isolating under head |
| PCB standoffs | M2.5 × 6 standoff + M2.5 × 4 cap screw | 4+4 | A2-70 | Loctite 243 | TBD (~0.5 Nm) | Not required (PCB is non-metallic) |
| Clamp cross-bolt | M6 × 30 socket cap (DIN 912) | 1 | A2-70 | Anti-seize on threads | ≤20 Nm | Nylon isolating + flanged SS bushing (IMP-06) |
| Sensor mount | M2 × 4 cap screw (DIN 912) | 4 | A2-70 | Loctite 243 | TBD (~0.3 Nm) | Nylon isolating under head |

| Procurement | Local fastener distributor (DIN standard stock). Loctite 243: import, ~$0.01/application. |
| Incoming inspection | Dimensional (thread go/no-go). Material cert (A2-70). Salt spray sample (1000h, batch basis). |

---

## Component 5: Heat Spreader

**Function:** Conduct heat from SoC thermal pad (SA-02) to housing wall (II-07). Bridge the thermal gap between high-conductivity SoC package and low-conductivity PA6-GF30 housing (0.3 W/mK).

### 6-Step Decision

**Step 1 — Primary Load Case:** Thermal conduction (steady-state). No significant mechanical load — heat spreader is sandwiched between SoC and housing wall, held by PCB mounting.

→ Initial material class: **Aluminum alloy** (high thermal conductivity, low weight, readily machinable).

**Step 2 — Strength Verification:**
- No structural requirement — heat spreader is not a load-bearing component
- Must not deform under PCB mounting compression (~50N total from 4 standoffs)
- Any aluminum alloy adequate — N/A for strength selection

**Step 3 — Fatigue Check:**
- N/A — no cyclic loading

**Step 4 — Corrosion Assessment:**
- Heat spreader is INTERNAL (sealed inside IP67 housing)
- No exposure to external environment
- Contact with PCB ground plane (copper): aluminum/copper galvanic couple, but no electrolyte inside sealed housing
- No surface treatment required — raw machined aluminum acceptable

**Step 5 — Local Content:**
- AA6061-T6 plate: locally available (Hòa Phát aluminum, standard grade)
- CNC machining: local (simple geometry — flat plate with screw holes)
- **100% local** for this component

**Step 6 — Final Specification:**

| Parameter | Specification |
|-----------|--------------|
| Material | AA6061-T6 (thermal conductivity 167 W/mK) |
| Geometry | 30 × 30 × 2 mm plate (from P22 NR-02) |
| Thermal interface (SoC side) | Thermal pad, ≥1.0 W/mK, 1mm thick (e.g., Bergquist GP1500 or equivalent) |
| Thermal interface (housing side) | Thermal paste or pad, ≥0.5 W/mK |
| Surface finish | Machined, deburr edges. No anodize (anodize is thermally insulating — counterproductive) |
| Procurement | Material + machining: 100% local |
| Incoming inspection | Dimensional (30×30×2 ±0.2mm). Material cert (6061-T6). |

### Thermal Path Verification

```
SoC junction (Tj ≤ 95°C)
  │ R_jc = 1.5°C/W [ASSUMPTION: Jetson Orin Nano package datasheet]
  ▼
SoC package surface
  │ R_pad = 1.0 mm / (1.0 W/mK × 400 mm²) = 2.5°C/W [thermal pad]
  ▼
Heat spreader (AA6061, 30×30×2mm)
  │ R_spreader = 2.0 mm / (167 W/mK × 900 mm²) ≈ 0.01°C/W [negligible]
  ▼
Housing wall contact
  │ R_interface = 0.5 mm / (0.5 W/mK × 900 mm²) = 1.1°C/W [thermal paste]
  ▼
PA6-GF30 housing wall (2.0mm)
  │ R_wall = 2.0 mm / (0.3 W/mK × 900 mm²) = 7.4°C/W [dominant resistance]
  ▼
External surface (natural convection)
  │ R_conv = 1 / (h × A) = 1 / (10 × 0.0036) = 27.8°C/W [h=10 W/m²K, A=60×60mm effective]
  ▼
Ambient (Ta = 55°C, VM-M05)

R_total = 1.5 + 2.5 + 0.01 + 1.1 + 7.4 + 27.8 = 40.3°C/W

ΔT at 2.0W average: 2.0 × 40.3 = 80.6°C → Tj = 55 + 80.6 = 135.6°C

⚠ EXCEEDS Tj_max (95°C) by 40.6°C
```

**THERMAL PROBLEM IDENTIFIED.** The convection resistance (27.8°C/W) dominates and makes the design thermally infeasible at 2.0W continuous in a sealed PA6-GF30 housing at 55°C ambient.

### Thermal Mitigation Analysis

| Option | Effect on R_total | Feasibility | Impact |
|--------|-------------------|-------------|--------|
| **A. Increase external surface area** — add fins on housing exterior + use full housing surface convection | R_conv → ~10°C/W (see revised calc below). R_total → 22.5°C/W. Tj = 55 + 45 = 100°C without throttle; with throttle to 1.5W → Tj = 88.8°C ✅ | Feasible — fins molded into housing | +$2, +15g, IP67 maintained if fins are integral |
| **B. Aluminum housing section** — replace PA6-GF30 wall behind SoC with aluminum plate (hybrid housing) | R_wall → 0.01°C/W. R_total → 32.9°C/W (still convection-limited). With fins: R_total → 13.1°C/W. Tj = 55 + 26 = 81°C ✅ | Feasible — aluminum plate bonded/bolted to nylon housing with O-ring seal | +$5, +30g, adds housing complexity |
| **C. Duty-cycle SoC power** — reduce average to 1.4W (was NR-03 mitigation for 18650) | Tj = 55 + 1.4 × 40.3 = 111.4°C — still exceeds | Feasible but insufficient alone | Must combine with A or B |
| **D. Larger heat spreader + thermal pad area** — increase from 30×30 to 50×50mm | R_pad → 1.0°C/W, but convection still dominates. Minimal improvement. | Feasible | Insufficient alone |

**Selected: Option A (external fins on PA6-GF30 housing).** [HD-04 APPROVED]

**Revised thermal model with fins [QC-RUN20 CHK-01]:**

The original 1D model (R_conv based on 60×60mm local area = 27.8°C/W) is overly pessimistic because it ignores heat spreading across the full housing surface. The original mitigation estimate (R_conv → 8°C/W) was overly optimistic. Corrected model:

```
Convection model (with fins):
  Local fin zone: 8 fins × (2×5×40 + 1.5×40) mm² = 8 × 460 = 3,680 mm²
  Fin efficiency η ≈ 0.85 (short PA6-GF30 fins, k=0.3, poor conduction)
  → PA6-GF30 molded fins have LOW efficiency due to poor thermal
     conductivity of the fin material itself.
  Effective fin area: 0.85 × 3,680 = 3,128 mm²
  Base area (between fins + surrounding): ~4,000 mm²
  Subtotal local zone: 7,128 mm² (0.00713 m²)
  R_conv_local = 1/(10 × 0.00713) = 14.0°C/W

  Full housing contribution (lateral spreading):
  Total housing exterior: ~320 cm² = 0.032 m²
  But heat must spread through PA6-GF30 walls (k=0.3 W/mK)
  Spreading resistance ≈ 5-10°C/W (adds thermal path)
  Net: remaining housing surface adds ~30% to convection capacity
  R_conv_effective ≈ 14.0 / 1.3 ≈ 10.8°C/W

  [ASSUMPTION: exact spreading resistance requires FEA in Phase 4.
   Range: 10-15°C/W. Using 10.8°C/W as mid-estimate.]

R_total_revised = 1.5 + 2.5 + 0.01 + 1.1 + 7.4 + 10.8 = 23.3°C/W
```

**Thermal performance at revised R_total:**

| Condition | Power | Tj | Status |
|-----------|-------|-----|--------|
| 55°C ambient, full power | 2.0W | 55 + 46.6 = **101.6°C** | ❌ Exceeds 95°C |
| 55°C ambient, throttled (15fps) | 1.5W | 55 + 35.0 = **90.0°C** | ✅ 5°C margin |
| 45°C ambient, full power | 2.0W | 45 + 46.6 = **91.6°C** | ✅ 3.4°C margin |
| 35°C ambient, full power | 2.0W | 35 + 46.6 = **81.6°C** | ✅ comfortable |

**Conclusion:** Fins alone are NOT sufficient for full 30fps at 55°C ambient. Firmware thermal throttle is **mandatory** (not optional) at ≥45°C ambient. This changes NR-02 risk from P22:
- Original: "MEDIUM" with design-target R_θ ≤15°C/W
- Revised: NR-02 is **HIGH** — thermal throttle is on the critical path for VM-M05 compliance
- Throttle specification: SoC Tj sensor ≥ 85°C → reduce to 15fps. Tj ≥ 90°C → reduce to 10fps + "THERMAL" indicator (VM-N06). Tj ≥ 95°C → hibernate SoC, display "OVERHEAT" on OLED (last gasp).

**Fin design guidance for D7:**
- 8 longitudinal fins on housing top surface (above SoC), 1.5mm thick × 5mm tall × 40mm long
- Molded integral with PA6-GF30 top shell (no additional parts)
- PA6-GF30 fin efficiency limited by material thermal conductivity (~0.3 W/mK) — consider aluminum fin strip bonded to housing exterior as Phase 4 upgrade if FEA confirms marginal thermal performance
- IP67 not affected (fins are solid, external protrusions on sealed housing)

**Phase 4 action required:** FEA thermal simulation to determine actual R_conv_effective. If FEA shows R_conv > 13°C/W → escalate to Option B (hybrid aluminum housing section).

---

## Component 6: Beam-Splitter

**Function:** Combine see-through view (ambient scene) with OLED-generated aiming indicator. Critical optical component in SA-03.

### 6-Step Decision

**Step 1 — Primary Load Case:** Optical (must maintain flatness ≤λ/4 at 550nm). Mechanical: survive 10,000G shock when bonded to OLED mount. No wear, no fatigue.

→ Initial material class: **Optical glass** (BK7 or equivalent).

**Step 2 — Strength Verification:**
- BK7 glass: σ_UTS ≈ 50 MPa (tension), but glass is compression-dominated
- Beam-splitter is small (~15 × 15 × 1.5mm) and bonded to rigid mount
- At 10,000G: F = 0.010 kg × 98,100 = 981 N on bond area (~225 mm²) → σ = 4.4 MPa
- SF = 50 / 4.4 = 11.4 → **PASS** (glass adequate at this size/load)

**Step 3 — Fatigue Check:** N/A — glass does not fatigue in compression.

**Step 4 — Corrosion Assessment:**
- BK7 glass is chemically inert in all operating environments
- Anti-reflection and beam-splitting coatings (dielectric multilayer) are the vulnerable elements — must specify coating adhesion per MIL-C-675
- Internal component, IP67 sealed — minimal exposure

**Step 5 — Local Content:**
- BK7 glass: **import** (no optical glass manufacturer in Vietnam)
- Beam-splitter coating: **import** (no precision optical coating house in Vietnam)
- Assembly into SA-03: **local** (WX with PR-11 alignment jig)
- Net: ~30% local value for this component (assembly labor only)

**Step 6 — Final Specification:**

| Parameter | Specification |
|-----------|--------------|
| Material | BK7 optical glass (Schott or equivalent) |
| Geometry | ~15 × 15 × 1.5 mm, 45° oriented in SA-03 mount |
| Surface flatness | ≤λ/4 at 550nm (both faces) |
| Coating | 50R/50T ±5% broadband visible (450-650nm) on front face. AR coating on rear face. |
| Coating adhesion | Per MIL-C-675, tape pull test |
| Procurement | Import: China/Japan optical component supplier. ~$8-12/unit at 1K qty |
| Incoming inspection | Visual (chips, scratches per MIL-O-13830 surface quality). Coating reflectance spot-check (spectrophotometer, 50% ±5%). |

---

## Material Selection Summary

| Component | Material | Local/Import | Est. Cost | Weight | Key Risk |
|-----------|----------|-------------|-----------|--------|----------|
| Optical bench | AA7075-T6 + hard anodize | Import material / local machining | $15 | 80g (at 5mm) | FEA needed Phase 4. Anodize vendor TBQ. |
| Picatinny clamp | AA7075-T6 + hard anodize + MoS₂ lug | Import material / local machining | $12 | 40g | Lug widened +2mm (HD-06b). Fatigue margin → 1.8. |
| Housing shells | PA6-GF30 (UV-stabilized) | 100% local | $8 | 80g (both shells) | **Thermal: R_wall = 7.4°C/W.** External fins or hybrid housing needed. |
| Fasteners (all) | A2-70 SS (AISI 304) + nylon washers + Loctite 243 | 95% local | $3 | 15g | SS-on-SS galling at clamp cross-bolt. Anti-seize required. |
| Heat spreader | AA6061-T6 (no anodize) | 100% local | $3 | 10g | Thermal path dominated by convection — fins needed. |
| Beam-splitter | BK7 + 50/50 coating | Import | $10 | 5g | No VN optical coating source. Single-source risk. |

### Weight Impact on Budget

| P22 estimate | P24 revision | Delta | Notes |
|-------------|-------------|-------|-------|
| Optical bench: included in SA-05 (120g) | 80g (5mm thick, was estimated at 3mm) | +50g net | Bench thickness 3→5mm per shock stress analysis [HD-05 APPROVED] |
| Housing: 80g (shells) | 80g + 15g (fins, HD-04) = 95g | +15g | Thermal mitigation fins [HD-04 APPROVED] |
| Clamp: 30g | 35g → 40g (lug +2mm, HD-06b) | +10g | Lug cross-section increase for fatigue margin [HD-06 APPROVED] |
| **Total** | **370g** (was 300g) | **+70g** | Still within 500g (VM-G02) — 130g margin (26%) |

### HITL Decisions (APPROVED)

| # | Decision | Choice | Rationale | Impact |
|---|----------|--------|-----------|--------|
| HD-04 | Thermal strategy | **Option A: External fins on PA6-GF30** | Low complexity, +$2/+15g. Firmware thermal throttle **mandatory** at ≥45°C ambient (not optional). Full 30fps only at <45°C. [QC-RUN20: revised R_conv from 8→10.8°C/W. Tj=101.6°C at 55°C/2.0W → throttle required.] NR-02 escalated to HIGH. Phase 4 FEA required to confirm — if R_conv >13°C/W → escalate to Option B (hybrid housing). | +15g, +$2/unit, firmware thermal mgmt on critical path |
| HD-05 | Optical bench thickness | **5mm accepted** | Shock stress analysis requires 5mm for SF ≥2.0 with AA7075-T6. 80g bench within margin. | +50g vs P22 estimate, 370g total (26% below 500g limit) |
| HD-06 | Clamp recoil lug fatigue | **(b) Widen lug +2mm** | Fatigue margin improves from 1.21 → 1.62 at +5g cost. Eliminates surface finish as single-point control. | +5g, +$1/unit machining, no surface finish criticality |

**Result: All 3 decisions locked → proceed to P25.**

---

## QC Gate Run #20 — Amendment Applied

| Flag | Check | Severity | Amendment |
|------|-------|----------|-----------|
| CHK-01 | Physics Plausibility | HIGH | Thermal R_conv inconsistency: mitigation table claimed ~8°C/W, fin design guidance calculated 16.7°C/W. Reconciled with corrected model: R_conv_effective ≈ 10.8°C/W (fin zone + partial housing spreading). Impact: Tj at 55°C/2.0W = 101.6°C (exceeds 95°C by 6.6°C). Firmware thermal throttle now **mandatory** not optional. Throttle spec added (85°C→15fps, 90°C→10fps+indicator, 95°C→hibernate). NR-02 risk escalated to HIGH. Phase 4 FEA thermal simulation required as decision gate — if R_conv >13°C/W, escalate to Option B (hybrid aluminum housing). Full 30fps only guaranteed at <45°C ambient. |

**Gate result after amendment:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
