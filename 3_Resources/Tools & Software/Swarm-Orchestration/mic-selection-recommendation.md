# BB-01 LOMAH Microphone Selection — Final Recommendation

**Task:** task-004
**Worker:** worker-02 (analyst)
**Date:** 2026-02-06
**Status:** Complete
**Inputs:** task-001 (sensor-candidates-specs.md), task-002 (evaluation-matrix-template.md), task-003 (bb01-lomah-constraints.md)

---

## 1. Completed Scoring Matrix

### 1.1 Scores (0–4 per VDI 2225)

| Criterion | Wt% | PIEZO-1 377C01 | PIEZO-2 46BE | PIEZO-3 2510 | PIEZO-4 378A06 | MEMS-1 VM2020 | MEMS-2 SBM100B | MEMS-3 ICS-40638 |
|-----------|-----|---:|---:|---:|---:|---:|---:|---:|
| C1: Max SPL | 12 | **4** | 3 | **4** | 3 | 3 | 2 | 1 ⚠️ |
| C2: Freq BW | 13 | **4** | **4** | 1 | 3 | 1 | 2 | 2 |
| C3: Dyn Range | 10 | **4** | 3 | 2 | **4** | 2 | **4** | 3 |
| C4: Temp Range | 8 | **4** | **4** | **4** | **4** | 3 | 1 | **4** |
| C5: Env Protect | 7 | 1 | 1 | **4** | 1 | 3 | 2 | 2 |
| C6: SNR | 7 | **4** | **4** | 2 | **4** | 1 | 3 | 2 |
| C7: Power Req | 4 | 1 | 1 | **4** | 1 | **4** | 2 | **4** |
| C8: Output I/F | 4 | 2 | 2 | 1 | 2 | 3 | **4** | 3 |
| C9: Size/Mount | 7 | 2 | 2 | 1 | 1 | **4** | **4** | **4** |
| C10: Weight | 3 | 3 | 2 | 1 | 2 | **4** | **4** | **4** |
| C11: Unit Cost | 12 | 1 | 1 | 2 | 1 | **4** | 2 | **4** |
| C12: Availability | 7 | 2 | 2 | 2 | 2 | **4** | 0 | **4** |
| C13: Supply Chain | 6 | **4** | 3 | 2 | **4** | 1 | 0 | **4** |

### 1.2 Score Justifications

<details>
<summary><b>PIEZO-1: PCB 377C01</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 4 | 166 dB max SPL — 26 dB headroom above 140 dB requirement; handles 12.7 mm at close range |
| C2 | 4 | 80 kHz bandwidth — captures full shock front detail for ±5 mm TDOA accuracy |
| C3 | 4 | ~131 dB dynamic range — covers full caliber spread from .22 to large bore with margin |
| C4 | 4 | −40 to +120 °C — far exceeds BB-01 requirement (−10 to +70 °C) |
| C5 | 1 | Condenser element vulnerable to moisture; no inherent IP rating; requires protective enclosure |
| C6 | 4 | Measurement-grade; inherent noise ~35 dBA equivalent to >130 dB SNR |
| C7 | 1 | Requires external preamplifier (426B03) needing ICP/CCP power (18–30 V constant current) |
| C8 | 2 | Analog single-ended output from preamplifier; susceptible to cable noise on sensor bar runs |
| C9 | 2 | 7 mm dia capsule fits in sensor bar but preamplifier adds bulk; needs custom mounting bracket |
| C10 | 3 | 1.8 g capsule — good; but with preamplifier system ~5–8 g total |
| C11 | 1 | $800–1,500 capsule / $2,000–3,000 with preamp — 80 sensors × $2,500 = $200k prohibitive |
| C12 | 2 | Available from PCB; 4–8 week lead time, quote-based ordering |
| C13 | 4 | PCB Piezotronics is a major vendor; global distribution; long product lifecycle |

</details>

<details>
<summary><b>PIEZO-2: GRAS 46BE</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 3 | 160 dB max SPL — 20 dB headroom; good for standard calibers, marginal for 12.7 mm at very close range |
| C2 | 4 | 80 kHz bandwidth — excellent for TDOA precision, matches 377C01 |
| C3 | 3 | 125 dB dynamic range — covers standard military calibers well |
| C4 | 4 | −40 to +120 °C — exceeds BB-01 requirement |
| C5 | 1 | Condenser element; needs protective enclosure for outdoor range use |
| C6 | 4 | Measurement-grade; inherent noise ~35 dBA |
| C7 | 1 | CCP power: 4 mA at 24 V unloaded — requires dedicated constant-current supply |
| C8 | 2 | Analog single-ended from CCP preamplifier |
| C9 | 2 | 1/4" mic set; compact but needs mounting adaptation for sensor bar |
| C10 | 2 | ~5 g (mic + preamp set) — within budget but heavier than MEMS |
| C11 | 1 | ~$2,200 per set — 80 sensors = $176k sensor cost alone |
| C12 | 2 | Available through GRAS/NI; 4–8 week lead time |
| C13 | 3 | GRAS is established (Danish); available through NI; but niche market, no second source |

</details>

<details>
<summary><b>PIEZO-3: Endevco 2510</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 4 | >180 dB — highest SPL capability; 40+ dB headroom; handles extreme blast events |
| C2 | 1 | 10 kHz upper limit — captures primary N-wave energy (3–7 kHz) but severely limits TDOA resolution; shock front high-frequency content lost |
| C3 | 2 | >80 dB operational range (100 to >180 dB) — adequate for high-caliber but misses low-SPL signals |
| C4 | 4 | −55 to +260 °C — far exceeds any LOMAH requirement; designed for extreme environments |
| C5 | 4 | Hermetically sealed; vibration-compensated; proven in blast/jet noise environments |
| C6 | 2 | Charge output — system SNR depends on external charge amplifier quality; not inherently spec'd |
| C7 | 4 | Self-generating (piezoelectric) — no external power required for the sensor itself |
| C8 | 1 | Charge output (pC) — requires dedicated charge amplifier; adds BOM cost and complexity |
| C9 | 1 | 19 mm dia cylindrical; 57 g — needs significant custom bracket; large for sensor bar |
| C10 | 1 | 57 g — heaviest candidate; 6 sensors = 342 g, exceeding sensor weight budget |
| C11 | 2 | $500–1,000 — lower than other piezo mics but charge amplifier adds ~$200–500/channel |
| C12 | 2 | Available from Endevco; 4–6 week lead time; quote-based |
| C13 | 2 | Endevco/Meggitt is established but niche; single source for this specific model |

</details>

<details>
<summary><b>PIEZO-4: PCB 378A06</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 3 | 150–160 dB — 10–20 dB headroom; adequate for most calibers |
| C2 | 3 | 40 kHz bandwidth — good TDOA precision; covers most shock front energy content |
| C3 | 4 | 150 dB dynamic range — excellent, highest among all candidates |
| C4 | 4 | −40 to +120 °C — exceeds BB-01 requirement |
| C5 | 1 | Condenser with ICP preamp; needs environmental enclosure |
| C6 | 4 | Measurement-grade; high sensitivity (12.6 mV/Pa) benefits signal chain SNR |
| C7 | 1 | ICP: 2–20 mA at 18–30 VDC — needs boost converter from 12V rail |
| C8 | 2 | ICP single-coaxial output — convenient but single-ended analog |
| C9 | 1 | 12.7 mm (1/2") diameter system — largest cross-section; challenging for sensor bar |
| C10 | 2 | ~10 g — within the 20 g sensor budget but uses half the allocation |
| C11 | 1 | $1,500–2,500 per system — 80 sensors = $120k–$200k |
| C12 | 2 | Available from PCB; 4–8 week lead time, quote-based |
| C13 | 4 | PCB Piezotronics major vendor; global distribution |

</details>

<details>
<summary><b>MEMS-1: Vesper VM2020</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 3 | 152 dB AOP — 12 dB headroom above 140 dB; handles 5.56 and 7.62 mm comfortably; marginal for 12.7 mm at close range |
| C2 | 1 | 10 kHz upper limit — same limitation as Endevco 2510; captures N-wave primary energy but poor TDOA timing resolution |
| C3 | 2 | 89 dB dynamic range — adequate for standard calibers; limited multi-caliber versatility |
| C4 | 3 | −40 to +100 °C — exceeds BB-01 requirement (−10 to +70 °C) with margin; 5 °C short of full industrial grade |
| C5 | 3 | Piezoelectric MEMS — inherently robust (no charge pump, no air gap); low mass = shock tolerant; IP achieved at enclosure level |
| C6 | 1 | 50 dBA SNR — low; wind noise and adjacent-lane firing may challenge threshold detection reliability |
| C7 | 4 | 1.6–3.6 V at ~100 µA — ideal for battery-powered LOMAH targets |
| C8 | 3 | Differential analog output — good noise rejection for sensor bar cable runs |
| C9 | 4 | 3.76 × 2.95 × 1.3 mm SMD — directly PCB-mountable; minimal board area |
| C10 | 4 | <0.1 g — negligible contribution to target weight |
| C11 | 4 | $4.18 at 1k qty — 80 sensors = $334; 600× cheaper than piezo measurement mics |
| C12 | 4 | In stock at DigiKey, Mouser, SparkFun — same-week delivery |
| C13 | 1 | Vesper Technologies is a small/medium company; single-source; no second-source alternative for piezoelectric MEMS |

</details>

<details>
<summary><b>MEMS-2: sensiBel SBM100B</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 2 | 146 dB AOP — meets 140 dB with 6 dB margin; insufficient for 12.7 mm (160–170 dB at sensor) |
| C2 | 2 | 20 kHz bandwidth — adequate for basic TDOA; better than VM2020/2510 but below piezo measurement mics |
| C3 | 4 | 132 dB dynamic range — best MEMS dynamic range; covers full caliber spread |
| C4 | 1 | TBC — cannot verify operating temperature; scored conservatively as unconfirmed |
| C5 | 2 | Optical MEMS in SMD package; can be protected at enclosure level; laser component adds fragility concern |
| C6 | 3 | 80 dBA SNR — best MEMS SNR; good for threshold detection in noisy range environments |
| C7 | 2 | Digital supply voltage/current TBC; optical sensing likely consumes more power than standard MEMS |
| C8 | 4 | Digital output (PDM/I2S/TDM8) — excellent for multi-channel TDOA systems; no analog noise |
| C9 | 4 | SMD bottom port — directly PCB-mountable |
| C10 | 4 | <0.1 g — negligible |
| C11 | 2 | TBC — novel optical technology likely $10–100 range initially; scored conservatively |
| C12 | 0 | Pre-production only; eval kits Dec 2025; production ramp 2026; cannot be procured for immediate development |
| C13 | 0 | Single-source Norwegian startup; no track record in defense/industrial; zero second-source options |

</details>

<details>
<summary><b>MEMS-3: TDK ICS-40638</b></summary>

| Criterion | Score | Justification |
|-----------|-------|---------------|
| C1 | 1 ⚠️ | 138 dB AOP — **2 dB below 140 dB requirement**; risk of clipping on 5.56 mm at close miss distance; unacceptable for 7.62 mm+ |
| C2 | 2 | 20 kHz bandwidth — adequate for basic TDOA; same as SBM100B |
| C3 | 3 | 101 dB dynamic range — good; covers .22 to 12.7 mm caliber range |
| C4 | 4 | −40 to +105 °C — full industrial grade; exceeds BB-01 requirement |
| C5 | 2 | Capacitive MEMS; needs enclosure for IP66; moderate inherent robustness |
| C6 | 2 | 63 dBA SNR — adequate; ±1 dB sensitivity tolerance is excellent for matched sensor arrays |
| C7 | 4 | 1.52–3.63 V at 170 µA — ultra-low power; ideal for battery operation |
| C8 | 3 | Differential analog — good noise rejection |
| C9 | 4 | 3.50 × 2.65 × 0.98 mm — smallest candidate; excellent PCB integration |
| C10 | 4 | <0.1 g |
| C11 | 4 | ~$1.60 — lowest cost; 80 sensors = $128 |
| C12 | 4 | In stock at DigiKey, Mouser, Newark — global availability |
| C13 | 4 | TDK (major global conglomerate); multi-distributor; long-term supply assured |

</details>

---

### 1.3 Weighted Totals & TUV Rankings

| Rank | Candidate | Weighted Total | TUV | Verdict |
|------|-----------|---------------|-----|---------|
| **1** | **MEMS-3: TDK ICS-40638** | 296 | **0.740** ⚠️ | Acceptable — but **fails 140 dB MUST requirement** |
| **2** | **PIEZO-1: PCB 377C01** | 292 | **0.730** | Acceptable — **highest-scoring compliant candidate** |
| **3** | **MEMS-1: Vesper VM2020** | 271 | **0.678** | Acceptable — **best MEMS that meets 140 dB** |
| 4 | PIEZO-2: GRAS 46BE | 261 | 0.653 | Acceptable — similar to 377C01 but higher cost |
| 5 | PIEZO-4: PCB 378A06 | 257 | 0.643 | Acceptable — good balance but 1/2" size limits integration |
| 6 | PIEZO-3: Endevco 2510 | 235 | 0.588 | **Reject** — TUV < 0.60; 10 kHz bandwidth fatal for TDOA |
| 7 | MEMS-2: sensiBel SBM100B | 221 | 0.553 | **Reject** — TUV < 0.60; pre-production, unavailable |

**No candidate achieves TUV ≥ 0.80 ("Strong").** This reflects a fundamental technology gap: no single sensor optimally spans acoustic performance AND programmatic viability for a production LOMAH system.

---

## 2. Analysis

### 2.1 The Core Trade-Off

```
ACOUSTIC PERFORMANCE                      PRODUCTION VIABILITY
    ◄─────────────────────────────────────────────►

  377C01 ████████████████░░░░░░░░░░░░░░░░░░░░  46BE
  378A06 ██████████████░░░░░░░░░░░░░░░░░░░░░░
  VM2020 ██████░░░░░░░░░░░░░░░░░░████████████████
  ICS-40638 ████░░░░░░░░░░░░░░░░██████████████████████

  ◄──── Excellent acoustics,   Excellent cost/integration, ────►
        terrible cost/size      limited acoustic performance
```

The evaluation reveals two distinct clusters:
- **Piezo measurement mics** (377C01, 46BE, 378A06): TUV 0.64–0.73 — strong acoustics (C1/C2/C3/C6 all score 3–4) but crippled by cost (C11=1), power (C7=1), and size (C9=1–2)
- **MEMS sensors** (VM2020, ICS-40638): TUV 0.68–0.74 — strong production metrics (C9/C10/C11/C12 all score 4) but limited acoustics (C1=1–3, C2=1–2)

### 2.2 Why No Single Winner Exists

1. **Frequency bandwidth is the unsolved MEMS problem.** All MEMS candidates top out at 10–20 kHz. The supersonic N-wave shock front contains energy well above 20 kHz, critical for ±5 mm TDOA accuracy. Piezo measurement mics reach 80 kHz but cost 100–600× more.

2. **The 140 dB requirement eliminates all capacitive MEMS.** The best capacitive MEMS (TDK ICS-40638) reaches 138 dB — 2 dB short. Only piezoelectric MEMS (VM2020 at 152 dB) and optical MEMS (SBM100B at 146 dB) cross the threshold.

3. **VM2020 meets 140 dB but its 10 kHz bandwidth limits TDOA accuracy.** This is the central tension: the only affordable sensor that handles the SPL has inadequate bandwidth for precision timing.

---

## 3. Recommendation

### 3.1 Primary Recommendation: Dual-Path Strategy

> **For production BB-01: Vesper VM2020 (MEMS-1)**
> **For validation/benchmarking: PCB 377C01 (PIEZO-1)**

#### Production Path — VM2020

| Factor | Assessment |
|--------|------------|
| **Why VM2020** | Only MEMS sensor that meets 140 dB with real margin (+12 dB). $4/unit enables 80-sensor deployment at $334 total. 3.8 mm SMD package integrates directly onto sensor bar PCB. 1.6–3.6V / 100µA is battery-optimal. Differential analog output matches ADC input requirements. |
| **The bandwidth risk** | 10 kHz upper frequency limits TDOA timing precision. Existing LOMAH systems (Steinert, Oakwood) achieve ±5 mm accuracy — they almost certainly use sensors with similar or narrower bandwidth, relying on signal processing (sub-sample interpolation, correlation-based TDOA) rather than raw bandwidth. The N-wave primary energy (3–7 kHz) falls within the VM2020's passband. |
| **Mitigation** | (1) Use ≥500 kHz ADC sample rate with sub-sample TDOA interpolation to recover timing precision. (2) Validate achievable accuracy via bench test at 140 dB with known source positions. (3) If 10 kHz proves insufficient, consider hybrid approach (see §3.2). |

#### Validation Path — 377C01

| Factor | Assessment |
|--------|------------|
| **Why 377C01** | Highest TUV among fully compliant candidates (0.730). 80 kHz bandwidth provides ground-truth TDOA performance ceiling. 166 dB max SPL handles all calibers. Use 2–4 units as reference sensors during development to benchmark VM2020 accuracy against the best achievable. |
| **Scope** | Development/validation only — not for production targets. Budget 4–8 units at ~$2,500/system = $10k–$20k validation hardware investment. |

### 3.2 Runner-Up: TDK ICS-40638 (Conditional)

The ICS-40638 scored the highest TUV (0.740) of any candidate but fails the 140 dB requirement by 2 dB. It should be considered **if and only if** field testing demonstrates that actual SPL at the sensor position does not exceed 138 dB for the BB-01 caliber mix and sensor geometry.

| Factor | Assessment |
|--------|------------|
| **Why consider** | $1.60/unit, TDK supply chain (no obsolescence risk), ±1 dB matched sensitivity (ideal for arrays), 20 kHz bandwidth (2× VM2020), 63 dBA SNR (better threshold detection), 105 °C operating temp. |
| **When to select** | If validation testing confirms peak SPL at sensor ≤ 136 dB (2 dB margin) for the deployment caliber mix (5.56 mm primary). This depends on sensor standoff distance from bullet path. |
| **Risk** | If actual SPL exceeds 138 dB (likely for 7.62 mm+ at close miss distances), sensor clips and TDOA fails. No margin for off-nominal conditions. |

---

## 4. Risk Register

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R1 | **VM2020 10 kHz bandwidth insufficient for ±5 mm TDOA accuracy** | Medium | High | Validate with bench test at 140 dB. Use sub-sample interpolation at ≥500 kHz ADC rate. Compare against 377C01 reference. If accuracy <±10 mm, acceptable for training LOMAH. |
| R2 | **Vesper Technologies supply disruption (single-source startup)** | Medium | High | Maintain 12-month buffer stock (80 sensors × 3 years = 240 units × $4 = $960). Evaluate sensiBel SBM100B as future second source once production-ready (2026–2027). Monitor Vesper corporate health quarterly. |
| R3 | **VM2020 SNR (50 dBA) causes false triggers from range noise** | Medium | Medium | Implement bandpass filtering (1–10 kHz) and amplitude threshold gating in TDOA firmware. Use differential input on ADC for common-mode rejection. Validate at operational range with live-fire adjacent-lane noise. |
| R4 | **12.7 mm caliber exceeds VM2020 AOP (152 dB) at close miss distance** | Low-Medium | Medium | Per task-003, 12.7 mm estimated at 160–170 dB at 0.3 m miss distance. VM2020 MEMS element survives >170 dB but distorts above 152 dB. Accept degraded accuracy for 12.7 mm or increase sensor standoff distance to >0.5 m where SPL drops below 155 dB. |
| R5 | **IP66 enclosure design attenuates acoustic signal or shifts frequency response** | Medium | Medium | Design acoustic port with hydrophobic membrane (e.g., Gore acoustic vent). Validate enclosure acoustic transparency at 3–10 kHz pre- and post-environmental testing. |

---

## 5. Validation Test Plan

### Phase 1: Bench Test (Lab, 2–3 weeks)

| Test | Equipment | Pass Criteria |
|------|-----------|---------------|
| **AOP verification** | Pistonphone or acoustic calibrator at 124/140/150 dB SPL | VM2020 output linear (< 10% THD) up to 150 dB; 377C01 reference confirms SPL level |
| **Frequency response** | Speaker + swept sine 100 Hz – 50 kHz; reference mic (377C01) | VM2020 response flat ±3 dB from 100 Hz to 10 kHz; roll-off characterized above 10 kHz |
| **TDOA accuracy (simulated)** | Spark gap source at known positions; 4-sensor array (60 cm spacing); ≥500 kHz ADC | Localization error ≤ ±10 mm with VM2020 array; ≤ ±3 mm with 377C01 reference |
| **SNR in noise** | Background noise playback (40–80 dBA); simultaneous N-wave stimulus at 140 dB | Threshold-crossing detection succeeds with ≤ 1% missed detections at SNR ≥ 60 dB |
| **Temperature cycling** | Thermal chamber: −10 °C to +70 °C, 10 cycles, sensitivity measured at each extreme | Sensitivity shift ≤ ±2 dB across temperature range |

### Phase 2: Field Trial (Outdoor range, 1–2 weeks)

| Test | Setup | Pass Criteria |
|------|-------|---------------|
| **Live-fire accuracy** | BB-01 prototype target with 4× VM2020 + 2× 377C01 reference; 5.56 mm at 100 m | Shot localization error ≤ ±10 mm (VM2020) vs. ≤ ±5 mm (377C01 reference) |
| **Multi-caliber** | 5.56 mm, 7.62 mm, 12.7 mm; 20 shots each | All shots detected for 5.56 and 7.62 mm. 12.7 mm: document any clipping artifacts and accuracy degradation |
| **Adjacent-lane interference** | Fire from adjacent lane (50 m lateral) while scoring own lane | Zero false triggers from adjacent-lane fire |
| **Rain/dust** | Deploy during tropical rain event (or simulated IP66 spray test) | System continues scoring accurately during and after rain exposure |
| **Endurance** | 500 rounds through single target in one session | No sensor drift; no false triggers; consistent accuracy across session |

---

## 6. Open Questions for Next Design Gate

1. **What is the actual peak SPL at the BB-01 sensor position for each target caliber?** This determines whether ICS-40638 (138 dB) is viable as a lower-cost alternative. Requires field measurement with 377C01 reference during prototype testing.

2. **Is ±10 mm accuracy acceptable for BB-01, or is ±5 mm a hard requirement?** If ±10 mm is acceptable, the VM2020's 10 kHz bandwidth is less of a concern. If ±5 mm is required, the 377C01 may be needed for production despite its cost — or signal processing (sub-sample interpolation) must be validated.

3. **What is the BB-01 target production volume?** At <20 targets, the piezo measurement mic cost premium may be tolerable (~$50k–$100k delta). At >50 targets, MEMS is the only viable path.

4. **Should sensiBel SBM100B be tracked as a future alternative?** Its 146 dB AOP + 132 dB dynamic range + 80 dBA SNR + 20 kHz bandwidth + digital output would score TUV ~0.75+ once availability and supply chain mature. Recommend requesting eval kit (Q1 2026) for parallel evaluation.

5. **Can Vesper provide automotive/industrial qualification data for the VM2020?** Vibration and humidity test data would increase confidence for outdoor LOMAH deployment and improve the C5 score.

---

## 7. Summary

| | Production Recommendation | Validation Reference | Conditional Alternative |
|---|---|---|---|
| **Sensor** | **Vesper VM2020** | **PCB 377C01** | **TDK ICS-40638** |
| **TUV** | 0.678 | 0.730 | 0.740 ⚠️ |
| **Meets 140 dB** | Yes (+12 dB) | Yes (+26 dB) | No (−2 dB) |
| **Bandwidth** | 10 kHz | 80 kHz | 20 kHz |
| **Unit cost** | $4.18 | ~$2,500 (system) | $1.60 |
| **80-sensor cost** | $334 | $200,000 | $128 |
| **Key risk** | 10 kHz BW vs. TDOA accuracy | Cost prohibitive for production | Fails 140 dB MUST req. |
| **Role** | Production targets | Dev/validation benchmark | If field SPL < 138 dB confirmed |

**Bottom line:** The VM2020 is the recommended production sensor. It is the only MEMS microphone that meets the 140 dB SPL requirement at a cost and form factor compatible with multi-target LOMAH deployment. Its 10 kHz bandwidth limitation is a known risk that must be validated in Phase 1 bench testing, with the 377C01 serving as the acoustic performance reference. If VM2020 bandwidth proves insufficient, the PCB 377C01 becomes the fallback at significantly higher system cost.
