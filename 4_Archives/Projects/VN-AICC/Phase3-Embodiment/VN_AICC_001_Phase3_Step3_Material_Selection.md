---
project: VN-AICC-001
phase: 3
type: material_selection
version: 1.0
created: 2026-02-19
status: draft
---

# VN-AICC-001: PHASE 3 — MATERIAL SELECTION
## MAKER Prototype — Step 3.3 per P&B §7.1 Step 6
### Version 1.0 | 19/02/2026

---

**Document ID:** VN-AICC-001-P3-MatSel-v1.0
**Input:** Spatial Layout v1.2 (approved), DfX Scorecard (GO for prototype)
**Method:** Weighted scoring matrix per SKILL_embodiment_design Step 6

---

## 1. MATERIAL REQUIREMENTS SUMMARY

### From Phase 1 Requirements & DfX:

| Req ID | Requirement | Material Impact |
|---|---|---|
| ER.04 | Weight ≤ 500g | Low-density enclosure material |
| ER.05 | Indoor, 0-45°C ambient | Moderate heat resistance needed |
| MF.07 | FDM printable (220×220mm) | Standard FDM filament |
| DfM-02 | Standard tooling only | No exotic materials |
| DfC-01 | Prototype BOM ≤ $80 (waived to $110) | Low-cost materials |
| DfT-01 | Test point access | PCB with standard via/pad |
| DfS-01 | E-stop always functional | Enclosure doesn't deform under normal use |
| Thermal | CM4 ≤5W TDP, passive cooling | Thermally conductive heatsink |

### Operating Conditions (MAKER variant — indoor only):

| Parameter | Value |
|---|---|
| Temperature | 0°C to +45°C ambient |
| Humidity | Up to 80% RH, non-condensing |
| UV exposure | Minimal (indoor) |
| Shock/vibration | Light (desktop, occasional transport) |
| Chemical exposure | None |
| IP rating | None required (open vents) |

---

## 2. COMPONENT-MATERIAL DECISIONS

### 2.1 Standard COTS (No Selection Needed)

These components come with fixed materials — selection is at component level, not material level:

| Component | Material (inherent) | Notes |
|---|---|---|
| CM4 module | FR-4 PCB, BGA silicon | Fixed by Raspberry Pi |
| CM4 IO Board | FR-4 PCB, tin-plated | Fixed by Raspberry Pi |
| HDMI Display | Glass, FR-4, PMMA bezel | Fixed by module vendor |
| SPI OLED | Glass, FR-4 | Fixed by module vendor |
| Tactile buttons | PBT housing, SS spring | Standard 12mm switches |
| E-stop | PA66 housing, brass contacts | Standard 16mm mushroom NC |
| Speaker | Steel frame, paper cone | Standard 28mm 8Ω |
| JST-PH connectors | PA66 housing, phosphor bronze | Standard series |
| HDMI cable | Cu conductors, PVC jacket | Standard internal 20cm |
| WS2812B LEDs | Epoxy lens, gold wire | Standard 5050 package |

### 2.2 Decisions Required (4 items)

| # | Component | Decision | Candidates |
|---|---|---|---|
| **A** | Enclosure (FDM) | Filament material | PLA, PETG, ABS |
| **B** | Custom I/O PCB | Substrate & finish | FR-4, surface finish |
| **C** | Heatsink | Aluminum alloy | 6061-T6, 6063-T5 |
| **D** | Fasteners/Standoffs | Metal alloy | Brass, SS 304, Nylon |

---

## 3. DECISION A: ENCLOSURE FILAMENT

### 3.1 Candidates

| Property | PLA | PETG | ABS |
|---|---|---|---|
| **Heat deflection (°C)** | 52-60 | 70-80 | 88-105 |
| **Tensile strength (MPa)** | 50-60 | 45-55 | 35-45 |
| **Impact strength** | Low (brittle) | Medium-High | Medium |
| **Layer adhesion** | Good | Excellent | Good |
| **Warping tendency** | Very low | Low | High |
| **Print bed temp (°C)** | 50-60 | 70-80 | 100-110 |
| **Enclosed printer needed** | No | No | Yes |
| **UV resistance** | Low | Good | Low (yellows) |
| **Chemical resistance** | Low | Good | Moderate |
| **Cost ($/kg, VN local)** | $8-12 | $12-18 | $10-15 |
| **Local availability** | Excellent | Good | Good |
| **Surface finish (FDM)** | Good | Good (slight stringing) | Good (post-ABS smoothing) |

### 3.2 Thermal Analysis for Enclosure Wall

At worst case (CM4 5W sustained, 45°C ambient):
- Heatsink top: ~106°C (throttling zone)
- Air gap: 31.6mm, air temp at top: ~55-60°C
- Enclosure inner wall (near vents): ~50-55°C
- Enclosure outer wall: ~45-50°C

**PLA softening at 52-60°C is marginal.** In normal operation (2-3W), wall stays below 45°C (safe). But in sustained 5W load at 45°C ambient, walls near vents could approach PLA softening point.

### 3.3 Weighted Scoring (1-4 scale, 4=best)

| Factor | Weight | PLA | PETG | ABS |
|---|---|---|---|---|
| Heat resistance | 0.20 | 1 | 3 | 4 |
| Print ease (no enclosed printer) | 0.20 | 4 | 3 | 1 |
| Impact/durability | 0.15 | 1 | 4 | 3 |
| Cost | 0.15 | 4 | 2 | 3 |
| Dimensional accuracy | 0.15 | 4 | 3 | 2 |
| Local availability | 0.10 | 4 | 3 | 3 |
| Surface finish | 0.05 | 3 | 3 | 3 |
| **Weighted Score** | **1.00** | **2.65** | **3.00** | **2.55** |

### 3.4 Decision: PETG

**Selected: PETG** (score 3.00/4.00)

**Rationale:**
- Heat deflection 70-80°C provides adequate margin over worst-case 50-55°C wall temperature
- Excellent layer adhesion → stronger snap-fit clips
- Better impact resistance than PLA → survives accidental desk drops
- No enclosed printer needed (unlike ABS)
- Slight cost premium ($12-18/kg vs $8-12/kg) acceptable for 150g enclosure (~$2 material cost difference)
- Available from Vietnamese 3D printing suppliers (Creality, eSUN filament at Hanoi/HCMC distributors)

**Trade-off accepted:** Minor stringing during printing → post-process with heat gun.

---

## 4. DECISION B: CUSTOM I/O PCB

### 4.1 Specification

| Parameter | Value | Rationale |
|---|---|---|
| **Substrate** | FR-4, Tg 130°C | Standard, all VN fabs support |
| **Layers** | 2 | Sufficient for I2C + GPIO + power routing |
| **Thickness** | 1.6mm | Standard, matches standoff calculations |
| **Copper weight** | 1 oz (35µm) | Adequate for ≤500mA power traces |
| **Surface finish** | HASL (lead-free) | Cheapest, adequate for through-hole + SOI components |
| **Solder mask** | Green | Standard |
| **Silkscreen** | White, top side only | Component reference + test point labels |
| **Min trace/space** | 0.2mm / 0.2mm | Conservative for 2-layer VN fabs |
| **Min via** | 0.3mm drill | Standard capability |

### 4.2 Vietnamese PCB Fabrication

| Supplier | Capability | Lead Time | Cost (5pcs) | Notes |
|---|---|---|---|---|
| **TPTPCB (HCMC)** | 2-layer, HASL, standard | 3-5 days | ~$2/board | Recommended for prototype |
| **Viet Circuits (Hanoi)** | 2-layer, HASL/ENIG | 3-5 days | ~$2-3/board | Alternative |
| **JLCPCB (import)** | Any, HASL/ENIG | 7-14 days | ~$0.50/board | Backup if VN quality insufficient |

### 4.3 Decision: FR-4 / 2L / 1.6mm / HASL / TPTPCB

Standard specification. No exotic requirements. Local fabrication confirmed available.

---

## 5. DECISION C: HEATSINK MATERIAL

### 5.1 Candidates

| Property | Al 6061-T6 | Al 6063-T5 | Cu C110 |
|---|---|---|---|
| Thermal conductivity (W/m·K) | 167 | 201 | 388 |
| Density (g/cm³) | 2.70 | 2.69 | 8.94 |
| Cost ($/kg, VN) | $3-5 | $3-5 | $8-12 |
| Machinability | Excellent | Good | Good |
| Weight (40×40×10mm) | 43g | 43g | 143g |
| Local availability | Excellent | Excellent | Good |

### 5.2 Thermal Requirement

CM4 TDP: 2-3W typical, 5W max. With 40×40×10mm finned heatsink:
- Al 6063-T5: ΔT ≈ 33°C at 3W (passive) → adequate
- Al 6061-T6: ΔT ≈ 36°C at 3W → adequate
- Cu: ΔT ≈ 18°C at 3W → overkill, 3× heavier

### 5.3 Decision: Al 6063-T5

**Selected: Aluminum 6063-T5** (standard heatsink alloy)

**Rationale:**
- Best thermal conductivity among aluminum alloys (201 W/m·K)
- Standard heatsink material — pre-made 40×40×10mm heatsinks readily available
- Light (43g vs 143g copper)
- Locally available (standard aluminum extrusion stock in Vietnam)
- Cost: ~$1.50 for pre-made heatsink with thermal pad

**Alternative:** Off-the-shelf Pi heatsink (anodized 6063) — $1-2, no custom machining needed.

---

## 6. DECISION D: FASTENERS & STANDOFFS

### 6.1 Requirements

| Parameter | Value |
|---|---|
| Thread size | M2.5 (matching CM4 IO Board holes) |
| Types needed | Male-female standoffs (5mm, 11.6mm), screws, nuts |
| Total count | 14 pieces (4 I/O + 4 IO Board + 4 display + 2 speaker) |
| Environment | Indoor, non-corrosive |
| Electrical | Standoffs may provide grounding path |

### 6.2 Candidates

| Property | Brass (CuZn37) | SS 304 | Nylon (PA66) |
|---|---|---|---|
| Corrosion resistance | Good | Excellent | Excellent |
| Conductivity | Good (grounding) | Fair | None |
| Weight (set of 14) | ~15g | ~20g | ~5g |
| Thread durability | Excellent | Excellent | Fair (limited re-use) |
| Cost (M2.5 set, VN) | $1.00 | $1.50 | $0.50 |
| Local availability | Excellent | Good | Good |
| Risk of PCB damage | Low | Low | None |

### 6.3 Decision: Brass (CuZn37)

**Selected: Brass M2.5 standoffs**

**Rationale:**
- Provides chassis grounding path (PCB ground plane → standoff → enclosure not conductive, but brass-to-brass is good practice for future metal enclosure variants)
- Excellent thread durability for prototype iteration (many assembly/disassembly cycles)
- Standard off-the-shelf in Vietnam electronics markets (Nhật Tảo, Bến Thành)
- Low cost ($1.00/set)
- Will not damage PCB pads during tightening

**Speaker screws:** M2.5×6mm Phillips pan head, SS 304 (2 pcs, $0.10)
**Display screws:** M2.5×8mm Phillips pan head, SS 304 (4 pcs, $0.20)

---

## 7. MATERIAL SELECTION SUMMARY

| Component | Material | Grade/Spec | Source | Cost | Lead |
|---|---|---|---|---|---|
| **Enclosure** | **PETG** | eSUN PETG, 1.75mm | **Local** (VN distributor) | $4.00 | 1-3 d |
| **I/O PCB** | **FR-4** | 2L, 1.6mm, HASL LF | **Local** (TPTPCB HCMC) | $2.00 | 3-5 d |
| **Heatsink** | **Al 6063-T5** | 40×40×10mm pre-made | **Local** (electronics market) | $1.50 | 1-3 d |
| **Standoffs** | **Brass CuZn37** | M2.5 set (14 pcs) | **Local** (electronics market) | $1.00 | 1 d |
| **Screws** | **SS 304** | M2.5×6/8mm (6 pcs) | **Local** | $0.30 | 1 d |
| **Thermal pad** | **Silicone** | 1mm, 6 W/m·K | Import (with heatsink) | incl. | — |

### Local Content Impact (Material Decisions Only)

All 4 material decisions select **locally sourced** options:
- Enclosure PETG filament: VN distributor
- PCB fabrication: VN fab house
- Heatsink: VN electronics market
- Fasteners: VN electronics market

**Material local content: 100%** (all selected materials available locally)
**Overall prototype local content** still limited by imported compute modules ($70 import).

---

## 8. BOM UPDATE IMPACT

No change to prototype BOM total ($110.10). Material selections confirm existing cost estimates:

| Component | Previous Estimate | After Selection | Change |
|---|---|---|---|
| Enclosure (3D print) | $4.00 | $4.00 (150g PETG) | — |
| I/O PCB | $2.00 | $2.00 (TPTPCB) | — |
| Heatsink | $1.50 | $1.50 (pre-made Al) | — |
| Fasteners | $1.50 | $1.30 (brass + SS) | -$0.20 |
| **Revised BOM** | **$110.10** | **$109.90** | **-$0.20** |

---

## 9. RISK ASSESSMENT

| Risk | Prob | Impact | Mitigation |
|---|---|---|---|
| PETG snap-fit clips too flexible | Low | Medium | Tune clip geometry (wall thickness, hook depth). Fallback: add 2 M2.5 screws |
| PETG stringing on front panel cutouts | Medium | Low | Post-process with heat gun, or reduce print speed at cutout layers |
| VN PCB fab quality (trace shorts) | Low | Medium | Visual inspection + continuity test. Fallback: JLCPCB import |
| Pre-made heatsink doesn't fit CM4 module exactly | Low | Low | Thermal pad compensates gap. Or sand heatsink base flat |

---

## 10. DECISION CHECKPOINT

### Decision:

```
A) ✅ APPROVE materials — proceed to Step 3.4 Tolerance & Interface
B) 🔄 REVISE — change material selection
C) ⏸️ PAUSE
```

---

*Document ID: VN-AICC-001-P3-MatSel-v1.0*
*Status: Draft, awaiting approval*
*Next: Upon approval → Tolerance & Interface (Step 3.4)*
