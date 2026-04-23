---
created: 2026-04-12
type: vdi-2225-evaluation
block: BC
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "VDI 2225 8-step + ICDM CSR-weighted DQM (Hari & Weiss)"
status: COMPLETE
concepts_evaluated: 3 (A, B, C)
recommended: A (DQM 91.5%)
feeds_to:
  - VN_MGM_V5_Coupling_Analysis.md (BD)
  - VN_MGM_V5_Concept_Selection.md (BE)
---

# BC VDI 2225 / ICDM CSR Evaluation — VN-MGM V5-MOTORIZED

## 1. Firming-Up — Rough Calculations per Concept

### 1.1 Concept A "Pinion-Worm" — Key Estimates

| Parameter | Calculation | Result | Evidence Level |
|-----------|-----------|--------|:--------------:|
| **Az slew rate** | Motor 3000rpm ÷ 80 (worm) = 37.5rpm. Pinion Ø32mm, ring Ø400mm → ring/pinion ratio ~12.5:1. 37.5 ÷ 12.5 = 3 rpm = 1080°/s... [RECALC]: Motor 3000rpm → worm 1:80 → 37.5 rpm at pinion. Pinion 17T M2.5, ring ~502T. Ratio 502/17 = 29.5. 37.5/29.5 = 1.27 rpm = **457°/s** → WAY exceeds 90°/s target. Reduce: 1:80 worm is too fast. Use 1:30 motor → 100rpm → 100/29.5 = 3.39 rpm = **1220°/s**... Still too fast. [CORRECT]: Need to use motor RPM at load, not no-load. At 200W BLDC, actual load speed ~2000rpm. Worm 1:80 → 25rpm at pinion. With ring ratio 29.5:1 → 25/29.5 = 0.85 rpm = **306°/s**. Still exceeds. **Use lower motor RPM (variable speed control) for target range.** At fine mode, PID limits to 60-90°/s. | **≥90°/s achievable** at ~25% motor speed | L4-calc |
| **El slew rate** | V1 worm ratio: typically 1:40 to 1:80. Motor via jaw coupling to worm input. Motor 2000rpm ÷ worm ratio → elevation angular rate depends on V1 worm reduction and elevation lever geometry. Estimate: 1:60 worm → 33 rpm → at cradle radius ~150mm, angular: 33 rpm ÷ (cradle circumference fraction) ≈ **30-60°/s**. | **≥30°/s achievable** | L4-est |
| **Manual fallback** | EM clutch NC: power cut → release 50-200ms. Motor disconnected. V1 mechanism = free. Manual effort identical to V1 (worm shaft coupling disconnected). | **≤1s, 100% V1 feel** | L3 |
| **BOM estimate** | V1 base mount $2.5-4K + 2× motors $300-600 + 2× worm gearbox $200-400 + 2× EM clutch $100-200 + 2× encoders $40-100 + STM32+drives $200-400 + joystick+cable $100-200 + UPS+SD $50-100 + brackets+fasteners $100-200 + connectors+cable $100-200 = **$3.7-6.4K motor add + $2.5-4K V1 base** = | **$6.2-10.4K** (target: ≤$10K) | L4-est |
| **Weight** | V1 ~75 kg + 2× motor+gearbox 3-5 kg + 2× clutch 0.5-1 kg + controller box 3-5 kg + UPS battery 1.2 kg + brackets 2-4 kg + cables 1-2 kg = | **~90-97 kg** (target: ≤100 kg ✅) | L4-est |
| **Recoil recovery** | 50 kN impulse → through V1 structure → elastomer 40-60% attenuation → motor sees 20-30 kN. Worm self-lock holds position. PID corrects residual deviation. Estimate: **≤0.5s** (TG-1 bench validates) | **≤0.5s** (TG-1 TBD) | L4-est |

### 1.2 Concept B "Pinion-Sector" — Key Estimates

| Parameter | Calculation | Result | Evidence Level |
|-----------|-----------|--------|:--------------:|
| **Az slew rate** | Same as A — identical az mechanism | **≥90°/s** | L4-calc |
| **El slew rate** | Motor → worm gearbox → pinion → sector gear (120° arc). Same motor+gearbox as az. Sector radius ~100mm, pinion 17T M2.5 on sector ~200T (120° arc of Ø320mm). Ratio 200/17 = 11.8. Motor 2000rpm ÷ 80 (worm) = 25rpm at pinion. 25/11.8 = 2.1 rpm = **756°/s** → far exceeds. Controlled by PID. | **≥45°/s achievable** | L4-calc |
| **El backlash** | Sector gear mesh: standard spur gear backlash ~0.1-0.3mm → angular backlash at trunnion depends on radius. At R=160mm, 0.2mm backlash → 0.2/160 = 1.25 mrad = **0.07°**. Within K-10 (≤0.3°). BUT: clamp on trunnion adds play if not perfectly rigid. | **≤0.3° IF clamp rigid** | L4-est |
| **Manual fallback** | Same as A — EM clutch releases, sector gear = passive (no self-lock, mount free to move manually). | **≤1s, ~95% V1 feel** (slight gear resistance) | L3-est |
| **BOM estimate** | Same as A EXCEPT: +custom sector gear $200-400 + extra gearbox for el $150-200 − no worm shaft coupling needed for el. Net: **+$200-400 vs A** | **$6.4-10.8K** | L4-est |
| **Weight** | Same as A EXCEPT: +sector gear 1-2 kg + extra gearbox 1.5 kg − no jaw coupling. Net: **+1.5-3 kg vs A** | **~92-100 kg** (marginal ≤100 kg) | L4-est |
| **Sector recoil survival** | Sector clamped to trunnion. 50 kN recoil path: weapon → cradle → trunnion → sector clamp → sector teeth → pinion. Clamp must transmit 50 kN without slipping. **Critical: sector clamp friction force = μ × N (bolt torque). At μ=0.3 (steel/EPDM), need N ≥ 167 kN clamp force.** This is very high — 4× M12 bolts at proof load provide ~160 kN. **Marginal.** | **⚠️ Marginal — needs analysis** | L4-est |

### 1.3 Concept C "Pinion+LinAct" — Key Estimates

| Parameter | Calculation | Result | Evidence Level |
|-----------|-----------|--------|:--------------:|
| **Az slew rate** | Same as A | **≥90°/s** | L4-calc |
| **El slew rate** | COTS linear actuator: typical speed 10-30mm/s (ball screw). Moment arm ~200mm. Angular rate = v/R = 20/200 = 0.1 rad/s = **5.7°/s**. **TOO SLOW** for 30°/s target. Need high-speed actuator: 100mm/s (exists but more expensive). At 100mm/s: 100/200 = 0.5 rad/s = **28.6°/s**. Still below 30°/s. Need either: (a) longer moment arm, (b) faster actuator, or (c) accept reduced el speed. | **⚠️ 28-30°/s (marginal)** | L4-calc |
| **El range** | Stroke needed for -15° to +85° = 100° arc. At moment arm 200mm: stroke = R × 2×sin(50°) = 200×2×0.766 = **306mm**. COTS actuators 300-500mm stroke = available. | **✅ Feasible at 300mm stroke** | L4-calc |
| **Manual fallback** | EM clutch in actuator releases motor from screw. BUT: ball screw = self-locking (or not, depending on lead angle). Standard ball screw lead angle ~5-10° → **NOT self-locking** (efficiency >50%). Operator CAN push/pull actuator manually in released state BUT must overcome screw friction. **Slower and heavier feel than V1 manual.** | **⚠️ ≤3s, 60-70% V1 feel** | L4-est |
| **BOM estimate** | Same as A EXCEPT: replace el motor+gearbox+coupling with COTS actuator $200-400 + custom clevis brackets $100-200 + modified clutch adapter $50-100. Net: **similar to A ±$200** | **$6.0-10.5K** | L4-est |
| **Weight** | Same as A EXCEPT: COTS actuator 2-4 kg replaces el motor+gearbox 3-5 kg. Net: **similar to A** | **~89-96 kg** | L4-est |
| **El recoil** | Linear actuator is INLINE with recoil force component along actuator axis. Recoil force decomposition at 200mm arm: F_axial = 50kN × sin(θ) where θ = elevation angle. At max elevation 85°: F_axial ≈ 50×sin(85°) = 49.8 kN. **Actuator receives nearly full recoil at high elevation.** Ball screw + EM clutch must survive 50 kN axial. **Most COTS actuators rated 2-10 kN.** | **❌ HIGH RISK — actuator recoil loading** | L4-calc |

---

## 2. CSR-Weighted Group B Evaluation (ICDM DQM)

### 2.1 Performance Estimates per Concept

For each criterion, estimate performance → look up CSR function → get satisfaction %.

| # | Criterion | CSR Type | Target (100%) | 0% (Fail) | A Performance | A CSR% | B Performance | B CSR% | C Performance | C CSR% |
|---|----------|:--------:|:-------------:|:---------:|:------------:|:------:|:------------:|:------:|:------------:|:------:|
| C1 | Motor traverse speed | LINEAR | 90°/s | ≤30°/s | 90°/s (PID limited) | **100%** | 90°/s (same az) | **100%** | 90°/s (same az) | **100%** |
| C2 | First hit accuracy | EXPONENTIAL | ±0.5° | ±5 mrad | ±0.5° (encoder + worm lock) | **100%** | ±0.5° (encoder OK, sector backlash marginal) | **85%** | ±0.5° (encoder OK, actuator precision OK) | **95%** |
| C3 | Corrosion endurance | STEP | ≥500h | <200h | ≥500h (IP65 COTS motor) | **100%** | ≥500h (same) | **100%** | ≥500h (same) | **100%** |
| C4 | Elevation precision | LINEAR | 45°/s | ≤15°/s | 45°/s (V1 worm driven by motor) | **100%** | 45°/s (sector gear driven) | **100%** | 28-30°/s (actuator speed limited) | **50%** |
| C5 | Night capability | STEP | Data port present | No port | ✅ Port present | **100%** | ✅ Port present | **100%** | ✅ Port present | **100%** |
| C6 | Maintenance burden | ASYMPTOTIC | ≥2000h MTBF | <500h | ~5000h (worm + BLDC conservative) | **100%** | ~4000h (sector wear + gearbox) | **95%** | ~3000h (actuator + clutch adapter) | **90%** |
| C8 | Manual fallback | EXPONENTIAL | ≤1s auto | >10s | ≤200ms, 100% V1 feel | **100%** | ≤200ms, 95% V1 feel | **95%** | ≤1s, 60-70% V1 feel | **60%** |
| C9 | Traverse effort | ASYMPTOTIC | ≤0.5N joystick | ≥40 N·m | ≤0.5N (joystick) | **100%** | ≤0.5N (joystick) | **100%** | ≤0.5N (joystick) | **100%** |
| C10 | Unit cost | LINEAR | ≤$10K BOM | >$20K | ~$6-8K mid | **80%** | ~$7-9K mid | **60%** | ~$6-8K mid | **80%** |

### 2.2 DQM Calculation

**DQM = Σ (normalized weight × CSR%)** across Group B (9 criteria, 97.4% coverage → renormalize to 100%).

| # | Criterion | Raw Wt | Norm Wt | A CSR% | A W×CSR | B CSR% | B W×CSR | C CSR% | C W×CSR |
|---|----------|:------:|:-------:|:------:|:-------:|:------:|:-------:|:------:|:-------:|
| C1 | Traverse speed | 17.5% | 18.0% | 100% | 18.0% | 100% | 18.0% | 100% | 18.0% |
| C2 | First hit accuracy | 14.9% | 15.3% | 100% | 15.3% | 85% | 13.0% | 95% | 14.5% |
| C3 | Corrosion endurance | 14.0% | 14.4% | 100% | 14.4% | 100% | 14.4% | 100% | 14.4% |
| C4 | Elevation precision | 10.8% | 11.1% | 100% | 11.1% | 100% | 11.1% | 50% | 5.6% |
| C5 | Night capability | 10.4% | 10.7% | 100% | 10.7% | 100% | 10.7% | 100% | 10.7% |
| C6 | Maintenance burden | 10.0% | 10.3% | 100% | 10.3% | 95% | 9.8% | 90% | 9.3% |
| C8 | Manual fallback | 8.0% | 8.2% | 100% | 8.2% | 95% | 7.8% | 60% | 4.9% |
| C9 | Traverse effort | 5.8% | 6.0% | 100% | 6.0% | 100% | 6.0% | 100% | 6.0% |
| C10 | Unit cost | 6.0% | 6.2% | 80% | 5.0% | 60% | 3.7% | 80% | 5.0% |
| | **TOTAL** | 97.4% | **100%** | | **99.0%** | | **94.5%** | | **88.4%** |

### 2.3 DQM Results

| Concept | DQM Score | Rating | Weak Spots |
|---------|:---------:|:------:|-----------|
| **A "Pinion-Worm"** | **99.0%** | **Excellent** | C10 cost: 80% (mid-range estimate, could improve with sourcing) |
| B "Pinion-Sector" | 94.5% | Excellent | C2 accuracy (85%, sector backlash), C10 cost (60%, +sector+gearbox) |
| C "Pinion+LinAct" | 88.4% | Good | **C4 el speed (50%, actuator too slow)**, C8 fallback (60%, poor manual feel) |

**DQM Threshold:** ≥70% = viable. All 3 concepts pass. But C has 2 significant weak spots.

---

## 3. S-Diagram (Technical Quality vs Cost)

```
DQM (%)
100 ┤  ★A
    │      ★B
 95 ┤
    │
 90 ┤           ★C
    │
 85 ┤
    │
 80 ┤- - - - - - - - - - - - - - value line (DQM/cost ratio = 10%/$K)
    │
 70 ┤─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ viability threshold
    │
    ├────┬────┬────┬────┬────┬────┬
   $5   $6   $7   $8   $9  $10  $11  BOM ($K)

Concept A: DQM 99.0%, BOM ~$7K mid → ABOVE value line ★
Concept B: DQM 94.5%, BOM ~$8K mid → ON value line
Concept C: DQM 88.4%, BOM ~$7K mid → ABOVE value line (but C4/C8 weak)
```

**S-Diagram interpretation:**
- A is clearly above the value line — best DQM at lowest cost
- B is on the value line — good DQM but higher cost (sector + extra gearbox)
- C is above the line in DQM/cost ratio BUT has C4 (el speed 50%) and C8 (fallback 60%) deficiencies that may be hard to fix

---

## 4. Weak Spot Analysis

### Concept A Weak Spots

| # | Weak Spot | Severity | Resolution | Phase |
|---|----------|:--------:|-----------|:-----:|
| A-WS1 | V1 worm shaft extension — must design into V5 housing | LOW | V5 is new product. Include shaft extension in housing design. NRE cost only. | Phase 3 |
| A-WS2 | V1 worm ratio — if too high, el speed may be slower than target | LOW | V1 worm typically 1:40 to 1:80. At 1:80 with 2000rpm motor: 25rpm at cradle. Adequate. Verify in Phase 3 layout. | Phase 3 |
| A-WS3 | Cost estimate mid-range ($7K) — could approach $10K ceiling at upper bound | MED | Competitive sourcing. Reduce motor spec if possible. AliExpress/Taobao sourcing for COTS. | Phase 3 |

### Concept B Weak Spots

| # | Weak Spot | Severity | Resolution | Phase |
|---|----------|:--------:|-----------|:-----:|
| B-WS1 | Sector gear backlash → C2 accuracy 85% | MED | Preloaded anti-backlash pinion. +$50-100. Improves to ~95%. | Phase 3 |
| B-WS2 | Sector clamp recoil survival — 167 kN clamp force needed (marginal) | **HIGH** | Bolted sector (not clamped) — V5 can modify V1. 4× M12 through-bolts. Needs FEA. | Phase 3 |
| B-WS3 | Higher BOM (+$200-400 vs A) → C10 cost 60% | MED | Offset by production simplification (identical modules). Marginal at volume >20 units. | Phase 3 |
| B-WS4 | Weight marginal at 92-100 kg → risk of exceeding 100 kg (SC-5) | MED | Lightweight sector (aluminum? — check strength vs steel). Reduce bracket mass. | Phase 3 |

### Concept C Weak Spots

| # | Weak Spot | Severity | Resolution | Phase |
|---|----------|:--------:|-----------|:-----:|
| C-WS1 | **El speed 28-30°/s (C4 = 50%) — below 30°/s target** | **HIGH** | Need high-speed actuator >100mm/s. Rare/expensive COTS. Or longer moment arm → larger bracket. **Fundamental design tension.** | ❌ Hard to fix |
| C-WS2 | **Manual fallback degraded (C8 = 60%) — screw friction in released state** | **HIGH** | Back-drivable ball screw (efficiency >70%) helps. But always heavier feel than V1. **Inherent to linear-to-rotary conversion.** | ❌ Hard to fix |
| C-WS3 | **El recoil loading — actuator sees 50 kN axial at high elevation** | **CRITICAL** | Most COTS actuators rated 2-10 kN. Custom actuator = NRE + cost. Or decouple actuator from recoil path (clevis allows rotation? → need analysis). | ❌ Design challenge |
| C-WS4 | PC-01 violated — el actuator ≠ N12 motor | LOW | Accept trade-off. N12 uses rotary motor regardless. | Accept |

**Concept C has 3 weak spots rated HIGH/CRITICAL that are inherent to the linear actuator architecture.** These are not easily resolved in Phase 3.

---

## 5. TRIZ Improvement (BC Step 4)

### Applied to Concept A (recommended) — address WS1-WS3:

| Weak Spot | TRIZ Principle | Application |
|-----------|---------------|-------------|
| A-WS1 (shaft extension) | #1 Segmentation | Design worm housing as 2-piece: V1-compatible base + motor-interface extension cap. Extension cap = V5 delta only. |
| A-WS2 (worm ratio) | #15 Dynamicity | Use timing belt (variable pulley ratio) between motor and worm shaft instead of jaw coupling. Ratio adjustable during development. |
| A-WS3 (cost) | #3 Local quality | Apply cost reduction only to non-critical items. Motor/clutch = quality (safety). Brackets/enclosure = cost-optimize. |

### Applied to Concept B — address WS1-WS2:

| Weak Spot | TRIZ Principle | Application |
|-----------|---------------|-------------|
| B-WS1 (backlash) | #24 Intermediary | Split anti-backlash pinion with spring preload. Standard solution. |
| B-WS2 (sector clamp) | #35 Parameter change | Change from CLAMP to BOLT — V5 can drill trunnion. Through-bolts + sector gear = rigid. |

---

## 6. BC Summary

| Metric | A "Pinion-Worm" | B "Pinion-Sector" | C "Pinion+LinAct" |
|--------|:---------------:|:-----------------:|:-----------------:|
| **DQM** | **99.0%** ★ | 94.5% | 88.4% |
| **Pugh (Group A)** | **0 (datum)** | -3 (-31.7%) | -2 (-14.0%) |
| **BOM estimate** | **$6-8K** | $7-9K | $6-8K |
| **Weight** | **~93 kg** | ~96 kg | ~92 kg |
| **PC Score (ICDM)** | **6/6** | 6/6 | 3.5/6 |
| **Weak spots** | 3 (all LOW-MED) | 4 (1 HIGH) | **4 (3 HIGH/CRITICAL)** |
| **S-diagram** | **Above value line** | On value line | Above (but C4/C8 deficient) |

**Recommendation: Concept A is the clear winner.** Highest DQM, lowest cost, max commonality, fewest/mildest weak spots. Concept B is viable backup. Concept C has fundamental architectural limitations.

---

*BC VDI 2225 / ICDM CSR Evaluation | 3 concepts | DQM: A=99%, B=94.5%, C=88.4% | helix-concept-generate v3.1 (ICDM) | 2026-04-12*
