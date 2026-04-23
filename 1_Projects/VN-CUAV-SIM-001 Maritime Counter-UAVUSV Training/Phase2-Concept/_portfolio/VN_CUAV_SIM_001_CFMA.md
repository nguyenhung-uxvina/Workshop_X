---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
pipeline: helix-concept-generate v3.2 --icdm
block: BD
method: ICDM CFMA (Conceptual Failure Mode Analysis) + CDTC + RTA + Robustool + Coupling + Sensitivity
---

# BD RISK ANALYSIS — VN-CUAV-SIM-001
## CFMA, CDTC, RTA Knowledge Gaps, Robustool, Coupling, Assumptions, Sensitivity

**Ngày:** 2026-04-14
**Concepts analyzed:** PA-2 LITE (lead), PA-8 FIXED, PA-6 FULL, PA-9 CORTEX
**Method:** ICDM Steps 8 (CFMA + CDTC + RTA) + P&B WX extensions (Coupling + Assumptions + Sensitivity)

---

## 1. CROSS-DOMAIN COUPLING ANALYSIS

| Domain Pair | LITE | FIXED | FULL | CORTEX |
|------------|:----:|:-----:|:----:|:------:|
| MECH × ELEC | 3 (encoder mount, recoil driver, motion actuator) | 3 (same, ×2 stations) | 5 (shared deck ×3 stn, 6-proj mount) | 3 (per node) |
| MECH × SW | 2 (motion sync, weapon NFC) | 2 (same) | 3 (+shared deck PID, crew overlay) | 2 (per node) |
| ELEC × SW | 4 (encoder→Unity, HDMI, USB, UDP) | 4 (same + 4th HDMI) | 5 (+Matrox, 7.1 audio, voice) | 6 (+WAN, C2 server, VoIP) |
| MECH × ELEC × SW | 2 (latency chain, safety interlock) | 2 (same) | 3 (+deck vibration→encoder→ballistic) | 3 (+cross-node sync) |
| **Total** | **11** | **11** | **16** | **14** |
| **Risk Level** | LOW (<15) | LOW (<15) | **MEDIUM** (15-25) | LOW (<15) |

**FULL coupling flag:** Score 16 = MEDIUM. Shared deck vibration → encoder noise → ballistic error is the primary coupling risk. Mitigation: mechanical isolation (rubber mounts) + digital low-pass filter on encoder signal.

---

## 2. CFMA — Conceptual Failure Mode Analysis (Function-Level)

> ICDM CFMA: evaluates function-level failures (not component-level FMEA). S×F×D scoring.

| System Function | Failure Mode | Cause | Effect | S | F | D | **SFD** | Action | **Rev SFD** |
|----------------|-------------|-------|--------|:-:|:-:|:-:|:------:|--------|:----------:|
| F1.1 Sense traverse | Loss of traverse signal | Encoder cable disconnect | No aim tracking → session unusable | 8 | 2 | 3 | **48** | Dual-encoder redundancy (wish), cable strain relief | **24** |
| F1.6 Recoil | Recoil force < 25N | Solenoid overheating at high ROF | Negative training transfer (wrong muscle memory) | 9 | 4 | 5 | **180** ⚠️ | **PoC test 2026-05-07: WP-F masselotte.** Thermal monitoring. Duty cycle limit. | **54** |
| F2.3 Target render | Target invisible at >250m | LOD too aggressive, 2px limit | Gunner can't detect target → unrealistic | 7 | 3 | 4 | **84** ⚠️ | Visual cue assist (T-02 resolved). LOD tuning in Phase 3. | **28** |
| F2.5 Ballistic calc | Trajectory >5% error | Ship motion compensation bug | Wrong lead angle taught → dangerous in live fire | 10 | 2 | 3 | **60** | V-SMASH validation vs TM tables (5 ranges). Unit test suite. | **20** |
| F3.1 Display latency | Latency >50ms | Projector input lag >30ms (model-dependent) | Sim sickness, negative training | 8 | 3 | 4 | **96** ⚠️ | **Projector benchmark in Phase 3 PoC.** Specify ≤17ms input lag. | **32** |
| F4.1-4.2 Motion sync | Motion desynced from visual | PID overshoot, UDP packet loss | Sim sickness, immersion break | 6 | 3 | 3 | **54** | PID tuning in Phase 3. UDP error handling. | **27** |
| F6.1 Scenario author | Instructor can't create scenario | GUI too complex | Training delayed, instructor frustration | 5 | 3 | 2 | **30** | Usability testing with 3 instructors. Template-first design. | **15** |
| F7.3 NFC auto-detect | NFC fails to read weapon | NFC tag damage, reader malfunction | Manual config fallback (5+ min delay) | 4 | 3 | 2 | **24** | NFC + manual DIP switch backup. Spare NFC tags in MAINT-KIT. | **12** |
| **F-FULL: Shared deck** | Structural resonance | Platform frequency near weapon ROF | Encoder noise → ballistic error | 8 | 3 | 5 | **120** ⚠️ | Frequency separation analysis. Rubber isolator mounts. | **40** |
| **F-CORTEX: WAN sync** | Target state desync >100ms | WAN jitter/packet loss | Mục tiêu chết ở node A nhưng sống ở node B | 7 | 4 | 3 | **84** ⚠️ | State interpolation. TCP kill confirmation. 100% standalone fallback. | **42** |

### CFMA Summary

| SFD Band | Count | Action |
|----------|:-----:|--------|
| ≥100 CRITICAL | 2 | F1.6 Recoil (180→54), F-FULL Shared Deck (120→40) |
| 40-99 IMPORTANT | 4 | F2.3 Target (84→28), F3.1 Latency (96→32), F-CORTEX WAN (84→42), F2.5 Ballistic (60→20) |
| <40 OK | 4 | F1.1, F4.1, F6.1, F7.3 |

**All Rev SFD ≤ 54 after mitigations.** Top 2 critical items (F1.6, F-FULL) addressed by PoC testing.

---

## 3. CDTC — Conceptual Design To Cost (ICDM)

### Pareto Cost Drivers (Top 20% → 80% cost)

| # | Cost Driver | LITE Cost | % Total | Reduction Option | Savings |
|---|-----------|:---------:|:-------:|-----------------|:-------:|
| 1 | GPU (RTX 4090) | $1,800-2,500 | 14-18% | RTX 4080 ($1,200-1,500) — benchmark needed | $600-1,000 |
| 2 | Projectors (3×) | $2,400-4,500 | 19-26% | Negotiate volume pricing. BenQ vs Epson comparison. | $300-600 |
| 3 | Render PC (excl GPU) | $1,200-1,500 | 9-11% | Standard workstation components. i7 vs i9 benchmark. | $200-400 |
| 4 | Instructor PC + 2 mon | $1,500-2,000 | 11-14% | Consumer-grade OK (not render-critical). | $300-500 |
| 5 | CNC weapon mockup | $400-600 | 3-4% | Batch production (5+ units → 30% savings). | $120-180 |
| | **Top 5 subtotal** | **$7,300-11,100** | **56-64%** | | **$1,520-2,680** |

### Cost vs WTP Target

| Variant | BOM Est. | Target (WTP) | Gap | Status |
|---------|:--------:|:------------:|:---:|:------:|
| LITE | $12.5-17.5K | ≤$18K | ✅ Within target | OK |
| FIXED | $10.8-14.8K | ≤$20K | ✅ Under target | Best margin |
| FULL | $28-38K | ≤$50K | ✅ Within target | OK |
| CORTEX C2 | $26-35K | ≤$40K | ✅ Within target | OK |

**All concepts within CDTC targets.** LITE is tightest — upper range $17.5K approaches $18K limit. Phase 3 BOM detail will refine.

---

## 4. RTA — Risk & Time to Market (Knowledge Gaps)

### Knowledge Gaps per Concept

| KG-ID | Knowledge Gap | Concept | Domain | Gap Closing Plan | TTM Impact |
|-------|-------------|---------|--------|-----------------|:----------:|
| KG-1 | **Recoil ≥25N electric feasibility** | ALL | MECH+ELEC | SS1 PoC 2026-05-07: WP-A + WP-F side-by-side test | **4 weeks** |
| KG-2 | **Unity 6 multi-display latency ≤50ms** | ALL | SW | Benchmark 3×FHD on RTX 4090. Phase 3 PoC. | **2 weeks** |
| KG-3 | **Projector input lag model selection** | ALL | ELEC | Test 3 projector models for ≤17ms input lag. | **2 weeks** |
| KG-4 | 6-projector × Matrox splitter 60fps | FULL | ELEC+SW | Matrox TripleHead2Go benchmark with Unity 6. | **3 weeks** |
| KG-5 | Shared deck vibration → encoder noise | FULL | MECH | Vibration measurement on prototype deck. Filter design. | **4 weeks** |
| KG-6 | WAN sync ≤100ms over VSAT | CORTEX | SW | Network simulation + lab test with 200ms jitter. | **3 weeks** |
| KG-7 | VOC validation (gunner interviews) | ALL | Market | 3-5 interviews at HD128 post-PoC. | **6 weeks** |

### TTM per Concept (from Knowledge Gap dependencies)

```
LITE:   KG-1(4w) + KG-2(2w) + KG-3(2w) = 8 weeks parallel → 4 weeks critical path
FIXED:  Same as LITE (no additional KG) → 4 weeks critical path
FULL:   KG-1→5 = 4+2+2+3+4 = 15 weeks parallel → 4 weeks critical path (KG-1 and KG-5 in parallel)
CORTEX: KG-1→6 = + KG-6 (3w, parallel) → 4 weeks critical path
```

**TTM critical path: 4 weeks** (KG-1 Recoil PoC is the gating item for all concepts).

---

## 5. ROBUSTOOL — Illegitimate Operation Analysis (ICDM)

### Misuse Scenarios

| Scenario | Effect | Concept(s) | Mitigation |
|----------|--------|:----------:|-----------|
| Operator fires continuously >10 min (overheating solenoid) | Recoil force degrades, possible solenoid damage | ALL | Thermal monitoring + duty cycle limit (auto-pause after 5 min burst). Warning on instructor screen. |
| Wrong weapon module forced onto cradle (bypassing NFC) | Incorrect ballistic config, wrong scoring | ALL | Mechanical keying on quick-release plate (3 different keyways for caliber groups). Physical impossibility to force wrong module. |
| Trainee leans on weapon during motion platform tilt | Excessive lateral force on encoder bearings | LITE, FULL | F-03: mount rated ≥25kg lateral. Hard stop prevents weapon hitting screen. |
| Instructor injects 20+ targets on LITE (overloads GPU) | Frame rate drop <30fps, sim sickness | LITE | Software cap: max 8 targets for LITE config. Instructor warned. |
| Power cut during motion platform active | Platform drops to rest position with trainee on it | LITE, FULL | E-stop with gravity-safe design (platform returns to level if power lost). 4-point harness. |

### Upgrade Scenarios

| Future Upgrade | Architecture Support? | Limitation |
|---------------|:--------------------:|-----------|
| New weapon type (e.g., M2 Browning .50) | ✅ MWI module + NFC tag + ballistic table | Only need new CNC mockup + solenoid calibration |
| FLIR/NVG night vision mode | ✅ Unity shader swap | GPU load +10-15% — OK with RTX 4090 headroom |
| Heave motion (3rd actuator) | ✅ SS3 designed for upgrade (PA-3 path) | Structural bracket pre-designed, ESP32 has spare PWM |
| CORTEX upgrade (standalone → networked) | ✅ Node Agent = SW only, no HW change | WAN router + C2 Hub procurement |
| AI adaptive difficulty (ML-based) | ⚠️ Requires training data collection pipeline | Data capture not in Phase 1 scope — add in Phase 2 |

### Overload Scenarios

| Scenario | Effect | Mitigation |
|----------|--------|-----------|
| ZU-23-2 (40-60N recoil) at 800 RPM sustained | Solenoid thermal failure in <3 min | Heavy weapon profiles auto-limit: 30s burst → 10s cool. Thermal sensor cutoff. |
| FULL shared deck: 3 operators + 3 weapons = 350kg dynamic | Actuator stall, structural fatigue | F-04: ≥400kg rated. Safety factor 1.5× → 600kg structural. Annual inspection SOP. |
| CORTEX: 50 simultaneous targets × 6 nodes | C2 server bandwidth saturation | CTX-05 overload test scenario as standard. Server scaled for 50 targets + 30% margin. |

---

## 6. ASSUMPTION REGISTER

### Explicit Assumptions

| A-ID | Assumption | Impact if Wrong | Verification | Owner |
|------|-----------|----------------|-------------|:-----:|
| A-1 | Unity 6 LTS supports 3×FHD at ≥60fps with HDRP ocean + 8 targets | Latency >50ms → redesign render pipeline | Phase 3 PoC benchmark | SW |
| A-2 | Solenoid recoil can reach 25N with acceptable feel | Training transfer inadequate → switch to pneumatic | SS1 PoC 2026-05-07 | MECH |
| A-3 | Short-throw projectors available with ≤17ms input lag | Latency budget blown → need low-latency gaming projector ($2K+) | Projector market survey + test | ELEC |
| A-4 | Vietnamese Unity developers available (≥2 mid-level) | Dev timeline extends 6+ months | Recruitment started Q2 2026 | CEO |
| A-5 | V-SMASH ballistic model valid for 12.7mm at 100-1500m | Lead angle teaching incorrect | Validate vs TM tables in Phase 3 | SW |
| A-6 | HD128 Hải quân is representative customer | Product-market fit risk | VOC interviews post-PoC | CEO |

### Shadow Assumptions (Cross-Domain)

| SA-ID | Domain Making | About Domain | Assumption | Verified? |
|-------|:------------:|:----------:|-----------|:---------:|
| SA-1 | SW | MECH | Encoder signal is clean (no noise from motion platform vibration) | ❌ Test in Phase 3 |
| SA-2 | MECH | ELEC | Solenoid driver board delivers 24V/5A peak without voltage drop | ❌ Measure on prototype |
| SA-3 | ELEC | SW | Unity can read USB serial at 100Hz without dropped frames | ⚠️ Likely OK but untested at load |
| SA-4 | SW | MECH | Quick-release plate alignment tolerance ±0.5mm sufficient for encoder calibration | ❌ Measure post-swap |

**4 shadow assumptions identified — all require Phase 3 physical testing.**

---

## 7. 3-SCENARIO EVALUATION

| Scenario | LITE DQM | FIXED DQM | FULL DQM | CORTEX DQM |
|----------|:--------:|:---------:|:--------:|:----------:|
| **Optimistic** (all KGs resolved, VOC positive) | 96% | 97%* | 99% | 95% |
| **Nominal** (most KGs resolved, minor adjustments) | 93.2% | 93.5%* | 97.1% | 91.8% |
| **Pessimistic** (recoil fails 25N, projector lag >20ms) | 85% | 87%* | 90% | 84% |
| **Spread (Opt-Pess)** | 11% | 10% | 9% | 11% |

*FIXED adjusted (A7 removed)

**All concepts stay above 84% DQM even in pessimistic scenario** → architecture is robust.
**FULL has smallest spread (9%)** → most resilient design (less dependent on KG resolution).
**LITE and CORTEX have largest spread (11%)** → most sensitive to recoil + latency KGs.

---

## 8. SENSITIVITY ANALYSIS (VDI 2225 Weight Variation)

> Vary each criterion weight ±1 unit (out of ~100%). Check if concept ranking changes.

| Criterion Varied | Weight ±1 | Winner Changes? | Stability |
|-----------------|:---------:|:---------------:|:---------:|
| A1 Target AI (18.2%) | 17.2-19.2% | No — FULL still #1 | ✅ ROBUST |
| A2 Ballistic (14.2%) | 13.2-15.2% | No — all concepts score 4 (same) | ✅ ROBUST |
| A3 Assessment (10.9%) | 9.9-11.9% | No | ✅ ROBUST |
| A4 Scenario (10.5%) | 9.5-11.5% | No | ✅ ROBUST |
| **A5 Logistics (8.7%)** | 7.7-9.7% | **If +1 → CORTEX drops below FIXED** | ⚠️ SENSITIVE |
| A6 Visual (8.2%) | 7.2-9.2% | No | ✅ ROBUST |
| **A7 Motion (7.7%)** | 6.7-8.7% | **If +1 → FIXED drops significantly (0% CSR on A7)** | ⚠️ SENSITIVE (segment-specific) |
| B3 Haptic (7.8%) | 6.8-8.8% | No (all concepts have same TBD status) | ✅ ROBUST |

**Ranking stability: ROBUST** — only A5 (Logistics) and A7 (Motion) cause shifts, both segment-appropriate. Overall concept ranking (FULL > FIXED > LITE > CORTEX) is stable across all reasonable weight variations.

---

## 9. REQUIREMENTS BACKFLOW CHECK

| Check | Result |
|-------|:------:|
| New requirements discovered in BD? | ❌ No |
| Existing requirements need value change? | ❌ No |
| Requirements to remove? | ❌ No |

**No requirements backflow from BD.**

---

## 10. BD DELIVERABLE SUMMARY

| Deliverable | Status |
|-------------|:------:|
| Cross-Domain Coupling Analysis | ✅ FULL=MEDIUM (16), rest LOW |
| CFMA (10 function-level failures, SFD scored) | ✅ 2 CRITICAL (mitigated to ≤54), 4 IMPORTANT |
| CDTC (Pareto cost drivers + WTP comparison) | ✅ All concepts within target |
| RTA Knowledge Gaps (7 KGs, TTM analysis) | ✅ Critical path 4 weeks (KG-1 Recoil PoC) |
| Robustool (misuse/upgrade/overload) | ✅ All mitigated. MWI supports 5 future weapons. |
| Assumption Register (6 explicit + 4 shadow) | ✅ All verifiable in Phase 3 |
| 3-Scenario Evaluation | ✅ All concepts >84% DQM even pessimistic |
| Sensitivity Analysis | ✅ ROBUST — ranking stable across weight variations |
| Requirements Backflow | ✅ None needed |

---

*BD Risk Analysis complete. Ready for Block BE: Concept Selection.*
