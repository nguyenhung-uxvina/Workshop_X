---
project: V-SMASH-M
phase: 2
type: concept-sketch-review
prompt: P19
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Morphological_Matrix_v1.0.md, V-SMASH-M_Function_Structure_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
qc_run: 16 (12 PASS, 0 FLAG, 0 FAIL — clean pass)
---

# V-SMASH-M (Micro-Sight) — Concept Sketch Review (P19)

> **Purpose:** Pre-evaluation quality check on 5 concepts before formal VDI 2225 scoring. Catch non-viability before spending effort on detailed scoring.
> **Rule:** ≥2 concepts must survive to VDI evaluation for comparison to be meaningful.

---

## Review Checklist (6 criteria per concept)

### Concept α — "Proven Baseline"

**Architecture:** Sony IMX global shutter → YOLOv8-nano (integrated classify) → threshold+temporal gate → size-based range → see-through OLED → BLE 5.0

| # | Criterion | Assessment | Notes |
|---|-----------|------------|-------|
| 1 | **Completeness** — All 7 SFs from P17 addressed? | ✅ YES | SF1(A1) SF2(A2) SF3(A3) SF4(B4) SF5(A5) SF6(A6) SF7(A7) — all 7 main SFs covered. Supporting SFS1-3 are cross-cutting (apply equally). |
| 2 | **Physics** — Principles work at these parameters? | ✅ YES | YOLOv8-nano on Jetson-class SoC: proven 30ms inference at INT8. Global shutter handles 30°/s target motion. OLED beam-splitter: mature technology (Aimpoint, Holosun lineage). Monocular range ±30% at 200m — physics-limited but documented. |
| 3 | **Local content est.** | **~62%** | Housing (PA6-GF30 injection, local: ~$15), PCB assembly (local SMT: ~$40), lens mount (local machining: ~$8), OLED assembly labor (local: ~$10), software (local: ~$30 amortized). Imports: Sony sensor (~$20), Jetson SoC (~$40), OLED module (~$25), BLE module (~$3). Total BOM ~$300. Local value ~$103/$300 ≈ 62%. |
| 4 | **Detail equivalence** | ✅ Baseline | Reference concept — all others measured against this depth. |
| 5 | **Workshop X feasibility** | ✅ HIGH | WX has injection molding, SMT, YOLO experience from V-L. OLED optical assembly is new but leverages red-dot sight design (commercially available optical train). No new capital equipment needed beyond OLED alignment jig (~$2K). |
| 6 | **ACH potential** | MEDIUM | AI compensates for optical limitations (small aperture, low resolution) through temporal integration and multi-frame tracking. AI model updates at depot can improve performance without hardware change. |

**Decision: PROCEED to VDI**

---

### Concept β — "Budget Fighter"

**Architecture:** OV2640 rolling shutter → Hybrid detect (classical+CNN) → separate classifier → simple threshold → fixed 150m → LED ring → on-device storage only

| # | Criterion | Assessment | Notes |
|---|-----------|------------|-------|
| 1 | **Completeness** — All 7 SFs addressed? | ⚠ PARTIAL | SF6 (Present aiming reference) is **functionally non-compliant** [QC-RUN15]. LED ring provides directional cueing (~90-170 mrad sectors), not precision aiming (VM-S06 ≤1.0 mrad). β does not fulfill SF6 as specified. |
| 2 | **Physics** — Principles work? | ⚠ CONDITIONAL | Detection + classification: works. Fixed 150m range: works but lead is only correct at exactly 150m. At 100m: lead over-estimates by ~50%. At 200m: under-estimates by ~25%. LED ring: physics works for direction, but resolution is insufficient for aiming. |
| 3 | **Local content est.** | **~75%** | Housing (local: ~$10), PCB (local: ~$25), LED ring (local: ~$3), software (local: ~$20 amortized). Imports: OV2640 (~$8), SoC (~$25), passive components (~$5). Total BOM ~$140. Local value ~$58/$140 ≈ 75%. Highest local content of all concepts. |
| 4 | **Detail equivalence** | ⚠ LOWER | Less complex than α — fewer components, simpler optics (none). May appear to score better on simplicity criteria but is missing core functionality (precision aiming). |
| 5 | **Workshop X feasibility** | ✅ HIGHEST | Simplest to manufacture. LED ring is trivial. No optical assembly. Smallest PCB. |
| 6 | **ACH potential** | LOW | AI can't compensate for LED ring resolution — display hardware is the bottleneck, not software. |

**Decision: ELIMINATE at P20** — VM-S06 (≤1.0 mrad, DEMAND) is not met. LED ring is 2 orders of magnitude too coarse. β cannot fulfill SF6 as a precision aiming reference. **Documented as "directional cueing variant" for potential future V-SMASH family product** (different product definition, not V-M).

> **[HITL NOTE]** Per user decision, carrying β to P20 for formal elimination on criterion B. Elimination rationale documented here for traceability.

---

### Concept γ — "Smart Compact"

**Architecture:** Sony IMX global shutter → MobileNet-SSD (integrated classify) → threshold+temporal gate → pre-set range bands (rocker) → see-through OLED → BLE 5.0

| # | Criterion | Assessment | Notes |
|---|-----------|------------|-------|
| 1 | **Completeness** — All 7 SFs addressed? | ✅ YES | All 7 SFs covered. SF5 uses operator input (range rocker) instead of AI range estimation — still computes ballistic lead, just with different range source. |
| 2 | **Physics** — Principles work? | ✅ YES | MobileNet-SSD: proven architecture, ~20ms inference. Lighter than YOLO — may run on Hailo-8 Mini or lower-power SoC. Range bands (50/100/150/200m): if operator selects correct band, lead is more accurate than monocular size estimation. If wrong band: lead error is bounded (50m increment = known worst case). |
| 3 | **Local content est.** | **~63%** | Similar to α but slightly different SoC (potentially cheaper if Hailo-8 Mini: ~$30 vs Jetson ~$40). Total BOM ~$280. Local value ~$96/$280 ≈ 63%. |
| 4 | **Detail equivalence** | ✅ EQUIVALENT | Same depth as α. Additional detail: rocker switch interface adds 1 physical control. |
| 5 | **Workshop X feasibility** | ✅ HIGH | Same as α except: (a) MobileNet training requires less compute than YOLO fine-tuning, (b) rocker switch is standard component, (c) Hailo-8 integration is new but SDK is mature. |
| 6 | **ACH potential** | HIGH | AI detection+classification is fully automated. Only range is operator-assisted. AI model updates improve detection without hardware change. Operator range input could be auto-corrected by AI in future firmware (suggest range based on angular size) — upgrade path exists. |

**Decision: PROCEED to VDI**

**Key trade-off vs α:** γ trades AI range estimation accuracy (±30%) for operator range input accuracy (±25m step). γ adds 1 control (rocker) which slightly conflicts with VM-H06 ("zero menu selections") but is a single physical action, not a menu. The rocker could be a 4-position detent — no cognitive load beyond "roughly how far."

---

### Concept δ — "Night Edge"

**Architecture:** NIR-enhanced CMOS → YOLOv8-nano (NIR-trained) → integrated classify → Bayesian gate → size-based range → see-through OLED → BLE 5.0

| # | Criterion | Assessment | Notes |
|---|-----------|------------|-------|
| 1 | **Completeness** — All 7 SFs addressed? | ✅ YES | All 7 SFs covered. SF1 uses dual-band sensor (visible + NIR). SF4 uses Bayesian posterior instead of fixed threshold — mathematically optimal for noisy inputs. |
| 2 | **Physics** — Principles work? | ⚠ CONDITIONAL | Visible band: same as α (proven). NIR band: physics works — drones have thermal/reflective signatures in 700-900nm. But: (a) NIR detection range depends on ambient NIR illumination (twilight has some, full dark has none — NIR-enhanced ≠ night vision), (b) SNR degrades in NIR → more false detections → Bayesian gate helps. **δ extends to dusk/dawn, NOT full darkness.** |
| 3 | **Local content est.** | **~65%** [QC-RUN15] | Detailed breakdown: housing 15% + PCB assembly 20% + lens mount 10% + NIR filter assembly 5% + software 15% = 65% local. Imports: NIR sensor (~$35), SoC (~$40). HC-6 achievable. |
| 4 | **Detail equivalence** | ✅ EQUIVALENT | Same depth as α. Additional detail: NIR training data requirement, Bayesian gate algorithm complexity. |
| 5 | **Workshop X feasibility** | ⚠ MEDIUM | New capabilities needed: (a) NIR training data collection — need drone flight captures in NIR band at dusk/dawn, (b) Bayesian gate implementation — more complex than threshold, needs probability lib, (c) NIR optical filter integration — slightly different lens assembly. None are blocking, but ~2 months additional development vs α. |
| 6 | **ACH potential** | HIGHEST | Dual-band AI leverages additional spectral information that human eye cannot see. Bayesian gate is the mathematically optimal decision boundary. AI compensates for noisy NIR inputs through temporal integration. Future firmware could add more spectral processing without hardware change. |

**Decision: PROCEED to VDI**

**Key risks:**
1. **Power budget** [QC-RUN15]: NIR sensor +150-300mW → 7.1h battery (below VM-E02 8h demand). Mitigation: larger 21700 cell (+15g, still within HC-2) or power-optimized NIR mode (activate NIR only when ambient light drops below threshold).
2. **NIR training data**: No existing dataset. Need ~500-1000 annotated NIR drone images for fine-tuning. Estimated 2-3 weeks of dedicated data collection.
3. **Development schedule**: +2 months vs α. Tight for VM-D04 (Q4 2026 first article).

---

### Concept ε — "Innovation Probe"

**Architecture:** Sony IMX global shutter → YOLOv8-nano (integrated classify) → threshold+temporal gate → temporal parallax range → see-through OLED → BLE 5.0

| # | Criterion | Assessment | Notes |
|---|-----------|------------|-------|
| 1 | **Completeness** — All 7 SFs addressed? | ✅ YES | All 7 SFs covered. Identical to α except SF5 uses temporal parallax instead of size-based range. |
| 2 | **Physics** — Principles work? | ⚠ UNCERTAIN | Temporal parallax from weapon micro-sway: principle is sound (Structure from Motion). But: (a) weapon sway amplitude in shooting position is ~0.5-2° — very small baseline, (b) at 200m range, 1° sway = 3.5m baseline → parallax angle = 0.001° = 17 µrad, near sensor noise floor, (c) recoil events corrupt IMU data, (d) requires precise IMU-camera synchronization. **TRL 2-3. No known military implementation.** Physics is theoretically possible but SNR at 200m is marginal. |
| 3 | **Local content est.** | **~62%** | Same as α — identical hardware except IMU addition (~$2, imported). Negligible impact on local content. |
| 4 | **Detail equivalence** | ⚠ LOWER for SF5 | SF5 range estimation method is conceptual — no proven implementation to reference. Other SFs are identical to α (equivalent detail). |
| 5 | **Workshop X feasibility** | ⚠ LOW for SF5 | Workshop X has no SfM or visual-inertial odometry experience. Would require external expertise or significant R&D investment. IMU-camera calibration in a recoil environment is non-trivial. |
| 6 | **ACH potential** | HIGHEST (if it works) | True monocular depth estimation without physical-size assumptions. Would make V-M effective against any size target at any range. But probability of success within timeline is low. |

**Decision: PROCEED to VDI as innovation probe** — Document for future reference. Expected to be eliminated at P20 on criterion C (technically realizable within timeline) but worth scoring to quantify the gap.

---

## Summary Table

| Concept | Complete? | Physics OK? | Local% est. | Equiv. Detail? | WX Feasible? | ACH? | Decision |
|---------|-----------|------------|-------------|----------------|--------------|------|---------|
| **α Proven Baseline** | ✅ 7/7 | ✅ Proven | 62% ✅ | ✅ Baseline | ✅ High | MED | **PROCEED** |
| **β Budget Fighter** | ⚠ SF6 fail | ⚠ LED resolution | 75% ✅ | ⚠ Lower | ✅ Highest | LOW | **PROCEED to P20 → expected ELIMINATE** |
| **γ Smart Compact** | ✅ 7/7 | ✅ Proven | 63% ✅ | ✅ Equiv | ✅ High | HIGH | **PROCEED** |
| **δ Night Edge** | ✅ 7/7 | ⚠ NIR conditional | 65% ✅ | ✅ Equiv | ⚠ Medium | HIGHEST | **PROCEED** |
| **ε Innovation Probe** | ✅ 7/7 | ⚠ TRL 2-3 | 62% ✅ | ⚠ SF5 lower | ⚠ Low for SF5 | HIGHEST* | **PROCEED → expected ELIMINATE** |

**5 concepts reviewed. 3 strong candidates (α, γ, δ). 2 expected eliminations (β on criterion B, ε on criterion C). ≥2 survivors guaranteed → proceed to P20.**

---

## HITL CHECKPOINT

Review focus before P20 Selection Chart:
1. **Concept γ rocker switch vs VM-H06** — "zero menu selections." Is a 4-position range rocker acceptable? It's a single physical action, not a menu. Your call.
2. **Concept δ schedule risk** — +2 months vs α. VM-D04 (Q4 2026) already tight. Can δ's development be parallelized with α?
3. **Eliminating β and ε** — agreed that β fails on VM-S06 and ε fails on TRL/timeline?

**Proceeding to P20 with all 5 concepts for formal elimination.**
