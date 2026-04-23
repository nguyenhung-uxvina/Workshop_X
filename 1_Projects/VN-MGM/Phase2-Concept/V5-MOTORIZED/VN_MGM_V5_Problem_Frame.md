---
created: 2026-04-11
type: problem-frame
block: BA
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: COMPLETE
solution_determining_sf: F8.1 (Couple motor to elevation)
triz_contradictions: 3 TC + 1 PC
cars_structures: 2 (α Symmetric, δ Asymmetric)
feeds_to:
  - VN_MGM_V5_Morphological_Matrix.md (BB)
  - VN_MGM_V5_Concept_Variants.md (BB)
---

# BA Problem Frame — VN-MGM V5-MOTORIZED (ICDM)

## 1. Solution-Determining Subfunction Analysis

### Cascade × Breadth Scoring

| Rank | SF | Sub-Function | Cascade (1-5) | Novelty (1-5) | Constraint Density (1-5) | **Score** | Search Depth |
|:----:|-----|-------------|:-------------:|:-------------:|:------------------------:|:---------:|:------------:|
| **1** | **F8.1** | **Couple motor to elevation** | **5** | **4** | **4** | **13** | **DEEP** |
| 2 | F9.1 | Clutch disengage | 4 | 2 | 5 | 11 | MEDIUM |
| **2** | **F7.1** | **Couple motor to azimuth** | **5** | **4** | **3** | **12** | **DEEP** |
| 4 | F7.2 | Mount az motor (permanent) | 3 | 3 | 2 | 8 | MEDIUM |
| 5 | F8.2 | Mount el motor to structure | 3 | 3 | 2 | 8 | MEDIUM |
| 6 | F10.3 | Power/signal through 360° | 3 | 2 | 2 | 7 | MEDIUM |
| 7 | F7.4 | Az speed reduction | 3 | 1 | 2 | 6 | SHALLOW |
| 8 | F9.2 | Fault detection | 2 | 1 | 3 | 6 | SHALLOW |
| 9-16 | F9.3, F10.1, F10.2, F11.*, F12.* | (remaining) | 1-2 | 1 | 1-2 | 3-5 | SHALLOW |

### Why F8.1 Is Solution-Determining

F8.1 (elevation coupling) **cascades to 5 other morpho rows:**

```
F8.1 choice ──→ F8.4 (el gearbox: needed or not?)
            ──→ F8.2 (el bracket: depends on coupling geometry)
            ──→ F9.1 integration (clutch in rotary or linear path?)
            ──→ F7.3/F8.3 (isolation: different forces per coupling type)
            ──→ Overall architecture (symmetric vs asymmetric)
```

**Contrast with "settled" SFs:**
- F9.1: SC-V5-1 locks EM clutch NC (constraint resolves choice)
- F11.2: Modbus + CANopen selected (protocol standard)

**F7.1 AND F8.1 are both genuinely open design questions.** F7.1 was confirmed for N12 (pinion on V1 ring teeth) but NOT confirmed for V5. V5 is a new product — azimuth coupling can be different from N12. Concept variants will differ at both F7.1 and F8.1.

---

## 2. TRIZ Contradiction Analysis

### 2a. Technical Contradictions (from HOQ roof + V5-specific)

#### TC-1: Motor Speed vs Manual Feel (HOQ K1 derivative)

| Parameter | Improving | Worsening |
|-----------|----------|-----------|
| TRIZ # | #9 Speed (motor ≥60°/s) | #33 Ease of operation (manual ≥80% V1) |
| Conflict | Adding motor mechanism to V1 could degrade manual operation — residual drag, changed balance, added mass on handles |

**Recommended principles:** #1 Segmentation, #2 Taking out, #15 Dynamicity

**V5 resolution path:** **Principle #1 Segmentation + #2 Taking out** — EM clutch completely REMOVES motor from drivetrain in manual mode. Motor drag = 0. Manual mode IS V1 (identical). This is already resolved by SC-V5-1, confirming the architectural choice.

**Innovation level:** Altshuller Level 2 (minor improvement using known solution within same domain).

#### TC-2: Platform Extensibility vs Unit Cost

| Parameter | Improving | Worsening |
|-----------|----------|-----------|
| TRIZ # | #35 Adaptability (7 IX requirements) | #36 Device complexity (BOM ≤$10K) |
| Conflict | Every connector, reserved I/O pin, power headroom adds cost. ICDM features could push BOM over $10K target. |

**Recommended principles:** #3 Local quality, #15 Dynamicity, #1 Segmentation

**V5 resolution path:** **Principle #3 Local quality** — Platform features are NOT distributed across all components. They are concentrated in ONE module (controller box): data port connector, reserved GPIO, firmware update port, SD card slot. Rest of V5 (motors, gearbox, clutch, brackets) = zero ICDM overhead. **Bounded by IM-03: ≤$500 ICDM budget = 5% of BOM.**

**Innovation level:** Altshuller Level 2.

#### TC-3: Recoil Survival vs Motor Precision

| Parameter | Improving | Worsening |
|-----------|----------|-----------|
| TRIZ # | #11 Stress/Pressure (50 kN recoil) | #29 Manufacturing precision (encoder ±0.5°, gearbox backlash ≤0.3°) |
| Conflict | Recoil shock damages precision components (encoder, gearbox teeth). Isolation reduces shock but adds compliance → reduces positional accuracy. |

**Recommended principles:** #11 Beforehand cushioning, #24 Intermediary, #35 Parameter changes

**V5 resolution path:** **Principle #11 Beforehand cushioning + #24 Intermediary** — Elastomer bushing (WP-ISO1) is an intermediary that absorbs shock BEFORE it reaches motor/encoder. The bushing is compliant for shock (high-frequency) but rigid for positioning (low-frequency). This is the same as RE Pattern 3 from competitor analysis. **TG-2 bench test validates ≥40% attenuation.**

**Innovation level:** Altshuller Level 1 (standard solution within field).

### 2b. Physical Contradiction

#### PC-1: Motor Connection Paradox

> **The motor MUST be connected to the mount** (to drive it) **AND MUST be disconnected from the mount** (for manual mode) — at the same physical location.

**Separation principle:** Separation in TIME — motor connected during powered mode, disconnected during manual mode. **Device: EM clutch** (engaged = connected, released = disconnected). Time-domain switching at ≤1s.

**Status:** Already resolved by SC-V5-1. Confirms EM clutch as architecturally mandatory.

### 2c. TRIZ Summary for BB

| ID | Contradiction | Principles | Status | BB Action |
|----|--------------|-----------|:------:|-----------|
| TC-1 | Speed vs Manual Feel | #1, #2, #15 | ✅ Resolved (EM clutch) | Verify residual drag spec in WP-C1 |
| TC-2 | Extensibility vs Cost | #3, #15, #1 | ✅ Bounded (IM-03 ≤$500) | Controller box = single ICDM module |
| TC-3 | Recoil vs Precision | #11, #24, #35 | ⚠️ TG-2 open | BB: elastomer WP search, bench test design |
| PC-1 | Connected AND Disconnected | Separation in time | ✅ Resolved (EM clutch) | — |

**No unresolved contradictions block BB.** TC-3 is managed by bench test (Phase A).

---

## 3. CARS Function Structure Variants (§6.3.3 G7)

### Method: Rearrange (R) + Shift boundary (S) applied to V5 delta F7-F12

#### Structure α: SYMMETRIC (same approach both axes)

```
STRUCTURE α — SYMMETRIC

  Az axis:  Motor → Gearbox → EM Clutch → [Coupling] → V1 slewing ring
  El axis:  Motor → Gearbox → EM Clutch → [Coupling] → V1 elevation axis
                                                         ↑
                                              Same motor module ×2

  Controller:  STM32 master → 2× servo drives → 2× motors
  Data port:   RS485 + CAN from STM32
  UPS:         Single LiFePO4 → powers controller + clutch release on fault
```

**Characteristics:**
- Maximum parts commonality (PC-01 to PC-06 fully satisfied)
- Both axes use identical motor + gearbox + clutch modules
- Elevation coupling method varies (WP-E1/E2/E4) but MODULE is same
- 2 EM clutches = 2 independent fallback paths
- Spares: 1 motor module covers either axis

**Elevation coupling options within α:**
- α-E1: Motor → gearbox → clutch → jaw coupling to V1 worm input shaft
- α-E2: Motor → gearbox → clutch → pinion to clamped sector gear on trunnion
- α-E4: N/A (linear actuator is fundamentally asymmetric → goes to Structure δ)

#### Structure δ: ASYMMETRIC (different mechanism per axis)

```
STRUCTURE δ — ASYMMETRIC

  Az axis:  Motor → Worm Gearbox → EM Clutch → Pinion → V1 ring teeth
            (rotary drive, same as α)

  El axis:  Linear Actuator [Motor+Screw integrated] → Clevis → V1 elevation arm
            (linear-to-rotary conversion, self-locking screw)
            EM Clutch → between motor and screw (rotary stage)

  Controller:  STM32 master → servo drive (az) + actuator driver (el)
  Data port:   RS485 + CAN from STM32
  UPS:         Single LiFePO4
```

**Characteristics:**
- Optimized per-axis: rotary for az (360° continuous), linear for el (limited arc)
- Linear actuator = self-locking (screw) → holds position without power (backup to clutch)
- LESS commonality: az motor ≠ el actuator, different spares
- PC-01 partially violated (different motor types az vs el)
- Linear actuator limits el range to actuator stroke (verify ≥ -15° to +85° = 100° arc)
- Clutch integration in linear path is non-standard (clutch before screw, rotary stage)

**Elevation coupling within δ:**
- δ-E4: Linear actuator between pedestal bracket and elevation arm (push/pull)

### Structure Comparison

| Criterion | α Symmetric | δ Asymmetric |
|-----------|:----------:|:------------:|
| Parts commonality (ICDM PC-01 to PC-06) | ★★★★★ | ★★☆☆☆ |
| Elevation coupling flexibility | ★★★★ (3 options) | ★★☆☆☆ (1 option) |
| El range (-15° to +85°) | ✅ (rotary = unlimited) | ⚠️ (verify actuator stroke) |
| Self-locking (el hold without power) | Depends on gearbox | ✅ (screw inherent) |
| Manual fallback simplicity | ✅ (clutch release → free) | ⚠️ (actuator disconnect more complex) |
| Spares kit simplicity | ★★★★★ (1 module fits both) | ★★☆☆☆ (2 different modules) |
| BOM cost (estimated) | $5-8K | $6-9K (+$500-1K actuator premium) |
| N12 compatibility | ★★★★★ (same modules) | ★★☆☆☆ (az only shared) |

### CARS Recommendation

**α (Symmetric) is strongly preferred** for V5 because:
1. ICDM commonality (PC-01 to PC-06) is a Phase 1 DEMAND — δ partially violates this
2. N12 compatibility = same motor module serves both products
3. Spares kit = 1 module type, not 2
4. 3 elevation coupling options within α vs 1 within δ

**δ (Asymmetric) is kept as backup** in case α elevation options all fail feasibility in BB.

**CEO checkpoint: Select which structure(s) proceed to BB.**

---

## 4. TESE Stalled Trend Check

**SKIPPED** — V5 is ADAPTIVE design (not Original). TESE is for identifying innovation directions in Original designs. V5's innovation is in the EM clutch architecture (already identified) and ICDM platform features (already specified).

---

## 5. DSO Pre-Ranking Setup (ICDM Extension)

For BB, each Working Principle will be scored on 2 dimensions:

| Dimension | Scale | Meaning |
|-----------|:-----:|---------|
| **Quality (Q)** | 1-4 | How well does WP satisfy the SF's CSR target? (4=exceeds, 1=barely meets) |
| **Risk (R)** | 1-4 | How mature/proven is this WP? (4=COTS proven, 1=requires new R&D) |
| **DSO = Q × R** | 1-16 | ≥12 Strong, 6-11 Viable, ≤5 Weak |

**Left-path rule:** After DSO scoring, morpho matrix columns sorted left-to-right by DSO. Column-1 (all highest DSO) = strongest baseline concept. Reduces combinatorial explosion.

**CEO override:** CEO may adjust Risk scores based on field knowledge (e.g., WX has worm gear experience → R score higher than generic estimate).

---

## 6. Essential Problems for BB (Solution Search Targets)

| ID | Essential Problem | Source | Innovation Level | BB Priority |
|----|------------------|--------|:----------------:|:-----------:|
| **P1a** | **How to couple motor torque to AZIMUTH axis: (a) 360° continuous, (b) survives 50 kN recoil, (c) ≥60°/s, (d) allows manual fallback via clutch** | F7.1 + SC-V5-1 | **Level 2** | ★★★ DEEP |
| **P1b** | **How to couple motor torque to ELEVATION axis: (a) survives 50 kN recoil, (b) allows manual fallback, (c) fits within V1 envelope + brackets** | F8.1 + SC-V5-1 + P-05 | **Level 2-3** | ★★★ DEEP |
| P2 | How to permanently mount motor modules to V1 pedestal (az) and elevation structure (el) for ≥50,000 recoil cycles | F7.2, F8.2 | Level 2 | ★★ MEDIUM |
| P3 | How to route power and signal through continuous 360° azimuth rotation reliably in marine environment | F10.3 | Level 1-2 | ★★ MEDIUM |
| P4 | How to isolate precision components (motor, encoder, gearbox) from 50 kN recoil shock with ≥40% attenuation | F7.3/F8.3 + TC-3 | Level 1 | ★ BENCH TEST |

---

## 7. BA Summary

| Deliverable | Content |
|-------------|---------|
| Solution-determining SFs | **F8.1** (elevation, score 13) + **F7.1** (azimuth, score 12, NOT confirmed for V5) |
| TRIZ contradictions | 3 TC + 1 PC. TC-1, TC-2, PC-1 = resolved. TC-3 = bench test. |
| CARS structures | **α Symmetric (preferred)** + δ Asymmetric (backup) |
| TESE | Skipped (ADAPTIVE) |
| Essential problems | P1 (elevation, DEEP) + P2-P4 (MEDIUM/SHALLOW) |
| DSO setup | Q×R scoring ready for BB |

---

*BA Problem Frame | helix-concept-generate v3.1 (ICDM) | 2026-04-11*
