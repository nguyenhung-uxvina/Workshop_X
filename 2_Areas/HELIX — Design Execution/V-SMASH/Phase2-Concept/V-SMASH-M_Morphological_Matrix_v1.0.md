---
project: V-SMASH-M
phase: 2
type: morphological-matrix
prompt: P18
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Function_Structure_v1.0.md, V-SMASH-M_Problem_Abstraction_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
qc_run: 15 (3 FLAGs resolved — CHK-06 LED ring non-compliance, CHK-09 NIR power, CHK-10 NIR local content)
---

# V-SMASH-M (Micro-Sight) — Morphological Matrix (P18)

> **Essential function:** "Transform visual scene information into a spatial aiming reference to enable effective small-arms engagement of small, moving aerial targets."
> **Hard constraints:** HC-1 (no fire gate) / HC-2 (≤0.5 kg) / HC-3 (Picatinny) / HC-4 (≤$500) / HC-5 (MIL-STD env) / HC-6 (≥60% local content)
> **Sub-functions:** 7 main (SF1-SF7) from P17. Supporting functions (SFS1-SFS3) constrain all concepts equally.

---

## 1. Morphological Matrix

| Sub-Function                               | Option A                                                                                                                                                                                          | Option B                                                                                                                                                                                       | Option C                                                                                                                                                                                                            | Option D                                                                                                                                                                                                         |
| ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **SF1: Capture visual scene**              | **A1: Visible CMOS (global shutter)** — 2MP+ Sony IMX global shutter. Fixed f/1.8 lens, 12° FOV. Known-good for drone detection. ~$15-25 module.                                                  | **B1: Visible CMOS (rolling shutter)** — 2MP+ OV2640 or similar. Fixed f/2.0 lens, 10° FOV. Cheaper (~$5-10) but rolling shutter distortion on fast targets.                                   | **C1: Near-IR enhanced CMOS** — NIR-optimized sensor (700-900nm) + visible. Dual-band. Extends dusk detection. ~$30-40 module. Heavier filter assembly.                                                             | **D1: Thermal (LWIR microbolometer)** — 160×120 LWIR. Detects heat signature. Works at night. ~$150-200 module. Lower resolution. HC-4 budget pressure.                                                          |
| **SF2: Detect aerial object**              | **A2: YOLOv8-nano (on-device)** — Quantized INT8 CNN. Proven detection architecture. ~30ms inference on edge SoC. Needs GPU/NPU.                                                                  | **B2: Classical CV (background subtraction + tracking)** — Frame differencing + Kalman filter. No neural network. Runs on MCU. ~10ms. No classification built-in.                              | **C2: Lightweight CNN (custom MobileNet)** — Custom-trained MobileNet-SSD. Smaller than YOLO. ~20ms. Less accurate at range.                                                                                        | **D2: Hybrid (classical detection + CNN verify)** — BG subtraction finds ROI fast, CNN classifies ROI only. Saves power. ~25ms total. More complex pipeline.                                                     |
| **SF3: Classify object type**              | **A3: Same CNN as SF2 (integrated)** — YOLO classification head outputs class + confidence. Single model, no extra compute. Accuracy depends on training data.                                    | **B3: Separate classifier CNN** — Dedicated lightweight classifier (EfficientNet-Lite) on cropped ROI from SF2. Better accuracy, extra ~10ms latency.                                          | **C3: Rule-based + feature extraction** — Wing aspect ratio, motion pattern (hover vs. glide), size. No neural network. Interpretable. Lower accuracy on novel targets.                                             | **D3: Two-stage ensemble** — CNN + rule-based vote. Highest accuracy. Most compute. ~20ms extra. May exceed power budget on low-end SoC.                                                                         |
| **SF4: Gate on classification confidence** | **A4: Threshold gate (SW)** — Software comparator: confidence ≥70% → enable SF5. Zero hardware cost. Configurable threshold.                                                                      | **B4: Threshold + temporal filter** — Require ≥70% for N consecutive frames (e.g., 3 frames = 100ms) before enabling. Reduces transient false positives. Adds ~100ms latency.                  | **C4: Bayesian gate** — Maintains running posterior over class. Requires ≥70% posterior (not per-frame). Mathematically optimal but complex implementation.                                                         |                                                                                                                                                                                                                  |
| **SF5: Compute ballistic lead**            | **A5: Monocular size-based range + ballistic lookup** — Range from angular size × class physical size. Pre-computed ballistic table for 7.62×39mm. ±30% range error at 200m. Simple.              | **B5: Monocular temporal parallax range** — Exploit weapon micro-sway to derive depth from motion parallax. No physical-size assumption needed. Noise-sensitive. Novel — TRL 2-3.              | **C5: Pre-set range bands (operator select)** — 4 range buttons (50/100/150/200m). Operator estimates range. Eliminates AI range error. Adds controls (violates VM-H06 zero-menu ideal but could be single rocker). | **D5: Fixed range assumption (150m)** — Assume all targets at 150m. Simplest. Lead is angular offset for 7.62×39 at 150m only. Inaccurate at other ranges. Baseline/fallback.                                    |
| **SF6: Present aiming reference**          | **A6: See-through OLED micro-display** — Beam-splitter overlays lead dot on real scene. Direct "follow the dot." Requires optical assembly. ~$20-40 display. Mature tech (red dot sight lineage). | **B6: LED ring / pointer array** — Ring of LEDs around objective lens. Illuminated sector indicates lead direction. No see-through optics. Simpler, cheaper (~$5). Coarser angular resolution. | **C6: Projected reticle (holographic)** — Holographic waveguide projects reticle into FOV. Compact. Expensive ($50-100). Fragile. Cutting-edge — TRL 3-4 for military ruggedization.                                | **D6: Smartphone HUD (phone-bridged)** — Stream lead overlay to phone mounted on weapon. Phone provides display. V-M is sensor+compute only. Lowest V-M weight. Adds phone dependency (single point of failure). |
| **SF7: Store & transfer data**             | **A7: BLE 5.0 to IRONMESH** — Standard BLE module. ~$3. Low power. Proven. Sufficient bandwidth for engagement summary. Optional — system works without it.                                       | **B7: WiFi Direct (burst upload)** — Higher bandwidth. Post-mission bulk upload. Higher power (~100mW burst). Faster transfer.                                                                 | **C7: On-device storage only (no wireless)** — MicroSD or flash. Download via USB-C at depot. Zero RF emission. Simplest. No fleet integration until docked.                                                        | **D7: LoRa (long-range low-power)** — 1-2 km range. Very low data rate. Good for status/alerts, not full engagement data. Useful for distributed C-UAS network.                                                  |

### Combination Count

m₁(4) × m₂(4) × m₃(4) × m₄(3) × m₅(4) × m₆(4) × m₇(4) = **12,288 theoretical combinations**

→ Compatibility filter required to reduce to viable paths.

---

## 2. Compatibility Pre-Filter

### Adjacent SF pair compatibility analysis

#### SF1 → SF2 (Capture → Detect)

| | A2 (YOLO) | B2 (Classical CV) | C2 (MobileNet) | D2 (Hybrid) |
|---|---|---|---|---|
| **A1 (Vis global)** | ✓ Ideal input | ✓ Works | ✓ Works | ✓ Works |
| **B1 (Vis rolling)** | ✓ Works (minor distortion at >15°/s) | ✓ Works | ✓ Works | ✓ Works |
| **C1 (NIR enhanced)** | ✓ Needs NIR training data | ✓ BG subtraction wavelength-agnostic | ✓ Needs NIR data | ✓ Works |
| **D1 (Thermal)** | ? YOLO needs thermal-trained model (different feature space) | ✓ BG subtraction works on thermal | ? MobileNet needs thermal data | ? Hybrid detection OK, CNN needs thermal training |

**Key incompatibility:** D1 (thermal) with CNN-based SF2 options requires thermal-specific training data and model architecture changes. Not impossible but significantly increases development effort and cost. **Mark D1+A2/C2/D2 as ? BRIDGE-NEEDED.**

#### SF2 → SF3 (Detect → Classify)

| | A3 (Integrated) | B3 (Separate CNN) | C3 (Rule-based) | D3 (Ensemble) |
|---|---|---|---|---|
| **A2 (YOLO)** | ✓ Built-in | ✓ Crop → classify | ✓ Crop → features | ✓ Both paths |
| **B2 (Classical CV)** | ✗ No CNN to integrate with | ✓ Needs CNN added | ✓ Natural fit | ? Needs CNN added anyway |
| **C2 (MobileNet)** | ✓ Built-in (single-stage) | ✓ Crop → classify | ✓ Features available | ✓ Both paths |
| **D2 (Hybrid)** | ✗ Classical detection has no CNN head | ✓ CNN verify IS the classifier | ✓ Rule-based on features | ✓ CNN verify IS the classifier |

**Key incompatibility:** B2 + A3 = ✗ (classical CV has no CNN classification head to integrate). D2 + A3 = ✗ (same reason — classical detection stage has no class output).

#### SF3 → SF4 (Classify → Gate)

All SF3 options output a confidence score (neural network softmax, feature-based heuristic score, or ensemble agreement). **All SF3 × SF4 combinations compatible.** ✓

#### SF4 → SF5 (Gate → Compute Lead)

All SF4 options output a binary enable/suppress signal. **All SF4 × SF5 combinations compatible.** ✓

#### SF5 → SF6 (Compute Lead → Present)

| | A6 (See-through OLED) | B6 (LED ring) | C6 (Holographic) | D6 (Phone HUD) |
|---|---|---|---|---|
| **A5 (Size-based range)** | ✓ Angular offset → dot position | ✓ Angular offset → LED sector | ✓ Angular offset → reticle position | ✓ Angular offset → phone overlay |
| **B5 (Temporal parallax)** | ✓ Same output format | ✓ Same | ✓ Same | ✓ Same |
| **C5 (Pre-set range)** | ✓ Same | ✓ Same | ✓ Same | ✓ Same |
| **D5 (Fixed 150m)** | ✓ Same | ✓ Same | ✓ Same | ✓ Same |

**All SF5 × SF6 combinations compatible** — SF5 outputs angular offset regardless of range estimation method. ✓

#### SF6 → SF7 (Present → Store/Transfer)

**All combinations compatible** — SF7 is independent (parallel, non-blocking). ✓

### Cross-cutting constraint filter

| Option | HC-2 (≤0.5 kg) | HC-4 (≤$500) | HC-5 (MIL env) | HC-6 (≥60% local) | Verdict |
|--------|----------------|--------------|----------------|-------------------|---------|
| D1 (Thermal) | ⚠ Adds ~40g vs visible, still within budget | ✗ $150-200 module eats 30-40% of total BOM | ✓ | ⚠ No VN thermal sensor production | **ELIMINATE — HC-4 budget killer** |
| B5 (Temporal parallax) | ✓ | ✓ | ⚠ Weapon micro-sway sensing in recoil env? | ✓ | **FLAG — TRL 2-3, high development risk** |
| C6 (Holographic) | ✓ | ⚠ $50-100 waveguide, 10-20% of BOM | ✗ TRL 3-4 for mil ruggedization | ⚠ No VN holographic mfg | **ELIMINATE — HC-5 not achievable at TRL 3-4** |
| D6 (Phone HUD) | ✓ (lightest V-M) | ✓ | ⚠ Phone is NOT mil-rated | ⚠ Phone not local content | **ELIMINATE — phone is single point of failure in combat** |

**Eliminated options:**
- **D1** (Thermal sensor) — HC-4 budget violation. $150-200 sensor + $300-350 remaining for everything else = impossible.
- **C6** (Holographic display) — HC-5 TRL too low for military deployment timeline (Q4 2026).
- **D6** (Phone HUD) — combat reliability. Phone dependency = single point of failure. Not ruggedized.

**Flagged (carry forward with caution):**
- **B5** (Temporal parallax range) — TRL 2-3. Include in one concept as an innovation probe but not as the primary path.

---

## 3. Revised Matrix (Post-Filter)

| Sub-Function | Option A | Option B | Option C | Option D |
|-------------|----------|----------|----------|----------|
| **SF1: Capture** | A1: Vis global shutter | B1: Vis rolling shutter | C1: NIR enhanced | ~~D1: Thermal~~ ✗ |
| **SF2: Detect** | A2: YOLOv8-nano | B2: Classical CV | C2: MobileNet-SSD | D2: Hybrid |
| **SF3: Classify** | A3: Integrated CNN | B3: Separate classifier | C3: Rule-based | D3: Ensemble |
| **SF4: Gate** | A4: Threshold (SW) | B4: Threshold + temporal | C4: Bayesian | |
| **SF5: Compute lead** | A5: Size-based range | B5: Temporal parallax ⚠ | C5: Pre-set range bands | D5: Fixed 150m |
| **SF6: Present** | A6: See-through OLED | B6: LED ring/pointer | ~~C6: Holographic~~ ✗ | ~~D6: Phone~~ ✗ |
| **SF7: Store/transfer** | A7: BLE 5.0 | B7: WiFi Direct | C7: On-device only | D7: LoRa |

**Remaining combinations:** 3 × 4 × 4 × 3 × 4 × 2 × 4 = **4,608** → still need concept path selection.

---

## 4. Concept Paths (5 selected)

### Concept α — "Proven Baseline" (lowest risk, Workshop X familiar)

| SF | Selection | Rationale |
|----|-----------|-----------|
| SF1 | **A1** Vis global shutter | Best image quality for fast targets. Sony IMX proven. |
| SF2 | **A2** YOLOv8-nano | Workshop X has YOLO experience from V-L. Proven accuracy. |
| SF3 | **A3** Integrated CNN (YOLO head) | Zero extra compute. Single model simplicity. |
| SF4 | **B4** Threshold + temporal filter | Reduces false positives vs. single-frame. ~100ms acceptable (within 150ms budget). |
| SF5 | **A5** Size-based range | Simple, no extra hardware. ±30% acceptable for infantry engagement. |
| SF6 | **A6** See-through OLED | Direct "follow the dot" UX. Red dot sight lineage = soldier familiarity. |
| SF7 | **A7** BLE 5.0 | IRONMESH integration. Standard. Low power. |

**Profile:** Maximum reuse of V-SMASH-L AI stack. Lowest development risk. OLED overlay is the main new hardware compared to V-L (which has a screen, not a sight). Estimated BOM: $250-350. Local content achievable through housing, PCB, optics assembly (lens/mount locally sourceable).

---

### Concept β — "Budget Fighter" (minimum cost, maximum simplicity)

| SF | Selection | Rationale |
|----|-----------|-----------|
| SF1 | **B1** Vis rolling shutter | Cheapest sensor (~$5-10). Rolling shutter OK if tracking smoothing applied. |
| SF2 | **D2** Hybrid (classical + CNN verify) | Classical detection is fast and cheap. CNN only on ROI saves compute → smaller SoC → cheaper. |
| SF3 | **B3** Separate classifier | CNN only classifies detected ROI. Small model. |
| SF4 | **A4** Simple threshold | Simplest. No extra latency. |
| SF5 | **D5** Fixed 150m | Eliminates range estimation entirely. Lead pre-computed for 7.62×39 at 150m. One lookup. |
| SF6 | **B6** LED ring/pointer | ~$5. No optics assembly. LED sector indicates direction. **[QC-RUN15, CHK-06] Cannot meet VM-S06 (≤1.0 mrad): LED ring ≈90-170 mrad per sector — non-compliant by ~100×. Reframe β as directional cueing, not precision aiming. Will fail P20 criterion B (fulfills all DEMANDS) on VM-S06.** |
| SF7 | **C7** On-device only | No wireless. USB-C download at depot. Zero RF cost/power/complexity. |

**Profile:** Strips to absolute minimum. No OLED, no BLE, no range estimation. **[QC-RUN15, CHK-06] Reframed:** β is a *directional cueing device* ("drone is THAT way"), not a precision aiming aid ("follow the dot"). LED ring angular resolution ≈90-170 mrad per sector — cannot meet VM-S06 (≤1.0 mrad). This changes β's functional claim: it does NOT fulfill SF6 as specified in P17. Carry to P20 for formal elimination on criterion B. Estimated BOM: $120-180. Highest local content (LED ring, PCB, housing all locally producible, est. 70-80%).

---

### Concept γ — "Smart Compact" (balanced performance + cost)

| SF | Selection | Rationale |
|----|-----------|-----------|
| SF1 | **A1** Vis global shutter | Same as α — image quality matters. |
| SF2 | **C2** MobileNet-SSD | Smaller than YOLO. Runs on lower-power SoC (Hailo-8 mini or equivalent). |
| SF3 | **A3** Integrated (MobileNet class head) | Single-stage detection + classification. |
| SF4 | **B4** Threshold + temporal | Same as α — safety benefit worth 100ms. |
| SF5 | **C5** Pre-set range bands | Operator selects range via single rocker switch (50/100/150/200m). Eliminates AI range error. Adds 1 control — slight VM-H06 concern but single action, no menu. |
| SF6 | **A6** See-through OLED | "Follow the dot" — same UX as α. |
| SF7 | **A7** BLE 5.0 | IRONMESH integration. |

**Profile:** Trades AI range estimation for operator input (simpler AI, more accurate lead at known range). MobileNet is lighter than YOLO → potentially smaller/cheaper SoC. Risk: operator may not estimate range correctly under stress — but range bands (50m increments) are coarser than continuous estimation, so "close enough" is often sufficient.

---

### Concept δ — "Night Edge" (extended envelope with NIR)

| SF | Selection | Rationale |
|----|-----------|-----------|
| SF1 | **C1** NIR enhanced CMOS | Extends detection into dusk/dawn. Addresses VM-O07 (low-light range ≥100m). |
| SF2 | **A2** YOLOv8-nano | Same proven pipeline. Needs NIR-augmented training data. |
| SF3 | **A3** Integrated CNN | Same as α. |
| SF4 | **C4** Bayesian gate | More sophisticated — handles noisy NIR detections better than fixed threshold. Running posterior smooths flickering detections at range in low light. |
| SF5 | **A5** Size-based range | Same as α. |
| SF6 | **A6** See-through OLED | Same UX as α. |
| SF7 | **A7** BLE 5.0 | IRONMESH integration. |

**Profile:** Premium variant. NIR sensor adds ~$15-20 and ~10g. Bayesian gate is more complex software but same hardware. Addresses the biggest operational gap (VM-O07: dusk/dawn detection). Estimated BOM: $280-380. **[QC-RUN15, CHK-09] Power risk:** NIR-enhanced CMOS draws ~150-300mW more than visible-only. Worst case: 2.3W + 0.3W = 2.6W → battery life drops to ~7.1h, below VM-E02 (≥8h DEMAND). Mitigation: lower-power NIR sensor selection, or accept 7h with larger 21700 cell (adds ~15g, still within HC-2). **[QC-RUN15, CHK-10] Local content breakdown:** housing (local injection mold, ~15%), PCB assembly (local SMT, ~20%), lens mount assembly (local machining, ~10%), NIR filter assembly (local optical coating, ~5%), software/firmware (local, ~15%) = **~65% local content** even with imported NIR sensor (~$35, 9%) and imported SoC (~$40, 10%). HC-6 achievable. Risk: NIR training data availability — need drone captures in NIR band. Higher development effort (NIR data collection, Bayesian gate implementation).

---

### Concept ε — "Innovation Probe" (temporal parallax — highest risk/reward)

| SF | Selection | Rationale |
|----|-----------|-----------|
| SF1 | **A1** Vis global shutter | Global shutter essential for parallax measurement (no rolling shutter skew). |
| SF2 | **A2** YOLOv8-nano | Proven. |
| SF3 | **A3** Integrated CNN | Same. |
| SF4 | **B4** Threshold + temporal | Temporal filter especially important with novel range method. |
| SF5 | **B5** Temporal parallax ⚠ | Novel range estimation from weapon micro-sway. If it works: no physical-size assumption = accurate range for any target size. TRL 2-3. |
| SF6 | **A6** See-through OLED | Same UX. |
| SF7 | **A7** BLE 5.0 | Same. |

**Profile:** Identical to Concept α except SF5. If temporal parallax works, it solves the biggest accuracy limitation (monocular range estimation). But TRL 2-3 means high risk of failure. **Carry as innovation probe only — not primary selection.** Would require a proof-of-concept phase before committing. Risk: weapon sway in shooting position may be too small or too noisy for reliable depth estimation. Recoil environment makes IMU readings unreliable during engagement.

---

## 5. Concept Path Summary

| Concept | Archetype | Risk | Est. BOM | Local Content Est. | Key Trade-off |
|---------|-----------|------|----------|-------------------|---------------|
| **α** | Proven Baseline | LOW | $250-350 | 60-65% | Full capability, proven stack. Conservative. |
| **β** | Budget Fighter | LOW-MED | $120-180 | 70-80% | Cheapest. **LED ring non-compliant with VM-S06 by ~100× [QC-RUN15].** Directional cueing only. Expected P20 elimination on criterion B. |
| **γ** | Smart Compact | LOW-MED | $230-320 | 60-65% | Operator range input avoids AI error. Adds 1 control. |
| **δ** | Night Edge | MEDIUM | $280-380 | ~65% [QC-RUN15] | NIR extends envelope. Power risk (7.1h vs 8h demand) [QC-RUN15]. Local content achievable per breakdown. Higher dev effort. |
| **ε** | Innovation Probe | HIGH | $250-350 | 60-65% | Novel range method. TRL 2-3. Carry as probe only. |

---

## 6. Diversity Check

| Dimension | Covered by | Diversity adequate? |
|-----------|-----------|-------------------|
| Sensor type | α/γ/ε (visible), β (visible budget), δ (NIR) | ✅ 2 bands |
| AI architecture | α/δ/ε (YOLO), β (hybrid), γ (MobileNet) | ✅ 3 architectures |
| Range estimation | α/δ/ε (size-based), β (none/fixed), γ (operator) | ✅ 3 methods |
| Display type | α/γ/δ/ε (OLED), β (LED ring) | ⚠ 2 types (holographic and phone eliminated). Acceptable — only 2 viable display options exist within constraints. |
| Cost spectrum | β ($120-180) → α/γ ($230-350) → δ ($280-380) | ✅ Spans $120-380 |
| Risk spectrum | α (LOW) → β/γ (LOW-MED) → δ (MED) → ε (HIGH) | ✅ Full range |

**Diversity verdict:** 5 concepts covering the solution space adequately. No blind spots in critical dimensions.

---

## HITL CHECKPOINT

**5 concept paths generated from 4,608 post-filter combinations.**

Before proceeding to P19 (Concept Sketch Review), review:

1. **Are these 5 concepts the right mix?** α (safe), β (cheap), γ (balanced), δ (premium), ε (innovation probe).
2. **Any promising combination I missed?** The matrix is open — if you see a path through options I didn't select, flag it.
3. **Concept β (LED ring) — viable or too coarse?** This is the most radical departure from "follow the dot." If the LED ring can't provide sub-degree angular resolution, β may not meet VM-S06 (≤1.0 mrad accuracy). Should we keep it for P20 evaluation or flag it now?
4. **Concept δ — HC-6 concern.** NIR sensor is imported. 55-60% local content is borderline. Viable path to ≥60% exists (local filter assembly, local housing, local PCB) but tight.
5. **Concept ε — worth carrying?** TRL 2-3 means it likely won't survive P20 selection chart. But it documents the innovation option for future reference.

**Ready for P19?** Or revise any concept path first?

Options:
- A) APPROVE — Proceed to P19 Concept Sketch Review with all 5 concepts
- B) REVISE — Modify concept paths (specify which)
- C) PAUSE — Stop here, resume later

**HITL Decision:** APPROVED — all 5 concepts carry forward to P19. β kept for formal P20 elimination. δ carried with power/local-content risks noted. ε documented as innovation probe.

---

## QC Gate Run #15 — Amendments Applied

| Flag | Severity | Amendment |
|------|----------|-----------|
| CHK-06 | HIGH | Concept β LED ring angular resolution quantified: ≈90-170 mrad per sector vs VM-S06 ≤1.0 mrad = non-compliant by ~100×. Reframed as directional cueing device. Flagged for P20 criterion B elimination. |
| CHK-09 | MEDIUM | Concept δ NIR power draw estimated: +150-300mW → 2.6W total → battery life 7.1h vs VM-E02 8h demand. Mitigation noted (larger cell or lower-power NIR sensor). |
| CHK-10 | MEDIUM | Concept δ local content breakdown added: housing 15% + PCB 20% + lens mount 10% + filter 5% + software 15% = ~65% local content. HC-6 achievable. |

**Gate result after amendments:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
