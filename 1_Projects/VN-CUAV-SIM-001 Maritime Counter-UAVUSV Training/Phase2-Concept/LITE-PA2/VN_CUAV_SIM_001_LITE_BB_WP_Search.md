---
created: 2026-04-16
updated: 2026-04-16
type: phase2-search
variant: LITE-PA2
block: BB
pipeline: helix-concept-generate --icdm
---

# Block BB — Working Principle Search (LITE-PA2)

**Strategy:** DEEP on SS1 (recoil 4 WPs + MWI 3 WPs per BA). SHALLOW on SS2-SS5 (reuse `_portfolio/Morpho_SS2..SS5`).

---

## 1. SS1 Recoil — Deep Search (4 WPs)

### WP-R1 — Pulse-Shaped Solenoid (Baseline)

| Attribute | Value |
|---|---|
| Principle | Electromagnetic force via current pulse into linear actuator |
| Key parameters | Solenoid force 30-50N peak, stroke 10-15mm, pulse <30ms |
| Hardware | Push-pull solenoid (e.g. Ledex/Magnet-Schultz STA series), MOSFET driver, capacitor bank, flyback diode |
| Cost (SS1 recoil block) | $80-150 |
| Power | 12-24 VDC, 30-60W peak, <1W avg |
| Latency | <10ms command→impulse (electromagnetic response) |
| Fidelity (vs real 12.7mm) | 30-45% impulse peak, 50-60% perceived "jolt" |
| Noise | Low — solenoid click ~60 dB @ 1m |
| Duty cycle | High — >5 shots/sec sustainable |
| Maturity (TRL) | 6 (Phase 2 concept — L5 assumption, needs bench test) |
| Safety | Green — low energy, rapid decay |
| Maintenance | Minimal — no wear parts if pulse-shaped properly |
| Sources | Industrial solenoid catalogs, Galaxy "Recoil Fidelity Threshold 70%" |

**Pros:** Cheapest, fastest response, simplest integration, silent. **Cons:** Lower fidelity ceiling. May not reach the "70% threshold" for training transfer.

---

### WP-R2 — Inertial Hammer / Moving Mass

| Attribute | Value |
|---|---|
| Principle | Solenoid or motor accelerates internal mass which strikes stopping surface; reaction transfers to operator (TRIZ-28 Mechanics substitution) |
| Key parameters | Mass 0.3-0.8 kg, stroke 30-60mm, velocity 2-4 m/s → impulse 0.6-3.2 Ns |
| Hardware | Solenoid driver + travel mass + spring return + elastomer stopper + frame |
| Cost (SS1 recoil block) | $150-250 |
| Power | 12-24 VDC, 80-150W peak (higher due to accel phase), <2W avg |
| Latency | 15-25ms (accel time 5-15ms + travel 10ms) |
| Fidelity | 55-70% impulse, **peaks sharper than pure solenoid** — closer to real jolt curve |
| Noise | Medium — impact sound 70-80 dB @ 1m |
| Duty cycle | Medium — 3 shots/sec (heat/return spring) |
| Maturity | 4 (concept, needs prototype) |
| Safety | Green — sealed internal mass |
| Maintenance | Elastomer stopper replacement every ~20k shots |
| Sources | Small-arms recoil simulators (InVeris, Meggitt patent landscape), TRIZ principle 28 |

**Pros:** Better fidelity than solenoid, same power supply class. **Cons:** More moving parts, noise, moderate wear.

---

### WP-R3 — Elastomer-Damped Solenoid Hybrid

| Attribute | Value |
|---|---|
| Principle | Pulse-shaped solenoid (R1) + tuned elastomer bumper (TRIZ-40 Composite) at cradle-buttstock interface |
| Key parameters | Solenoid 40-60N peak, elastomer Shore 60A, thickness 8-12mm |
| Hardware | R1 hardware + elastomer mount + adjustable preload screw |
| Cost (SS1 recoil block) | $100-180 |
| Power | Same as R1 |
| Latency | Same as R1 (<10ms) |
| Fidelity | 40-55% peak, **pulse-shape smoother** (elastomer shapes decay tail) — more "weapon-like" perceived recoil curve at same peak force |
| Noise | Low (elastomer absorbs click) |
| Duty cycle | High |
| Maturity | 5 (R1 + well-known elastomer damping) |
| Safety | Green |
| Maintenance | Elastomer aging ~2-3 year replacement |
| Sources | Vibration isolation literature, R1 + TRIZ-40 |

**Pros:** Cheap upgrade from R1, better pulse shape, safer (overshoot absorbed). **Cons:** Still limited by solenoid force ceiling.

---

### WP-R4 — Pneumatic Short-Stroke Piston (CEO RE-ADMITTED)

| Attribute | Value |
|---|---|
| Principle | Compressed air drives short-stroke piston against cradle buttstock (TRIZ-29 Pneumatics) |
| Key parameters | Cylinder bore 20-30mm, stroke 15-25mm, operating pressure 6-10 bar, impulse 3-8 Ns |
| Hardware | Pneumatic cylinder (SMC/Festo ~$60-120), fast solenoid valve (<5ms response, $80-150), air reservoir 1-2L, compressor 0.5-1.5 kW ($200-600), filter/regulator, relief valve |
| Cost (SS1 recoil block) | **$600-1,200** (compressor + cylinder + valve + reservoir + plumbing) |
| Power | 220 VAC compressor 0.5-1.5 kW peak (duty cycle), trigger valve 24 VDC <10W |
| Latency | 10-20ms (valve 5ms + pneumatic rise 5-15ms) |
| Fidelity | **75-90% impulse, highest ceiling** — real-weapon-like jolt shape, sustained tail |
| Noise | **HIGH** — compressor 70-85 dB @ 1m (duty cycle), valve/exhaust hiss 75-80 dB per shot |
| Duty cycle | Reservoir-limited; 2-3 sustained fire then reservoir refill pause (~3-5 sec @ full fire rate) |
| Maturity | 7 (proven in commercial trainers — InVeris, Meggitt, Cubic) |
| Safety | Yellow — pressure vessel + relief valve + operator envelope clearance required |
| Maintenance | Compressor service annually; valve seals ~10k-50k cycles; filter/regulator regular |
| Sources | Global trainer market, SMC/Festo catalogs, Galaxy "Pneumatic Recoil Trade" (to create) |

**Pros:** Highest fidelity ceiling; proven in commercial trainers; closes SC-2 risk. **Cons:**
- **Cost 5-10× baseline solenoid** ($600-1200 vs $80-150) — LITE cap $70K flexed
- **Compressor noise violates crew comm envelope** — potential showstopper, needs acoustic isolation or external compressor placement
- **Duty cycle limited by reservoir** — sustained fire simulation degrades after 2-3 bursts
- **Power draw 0.5-1.5 kW** — vessel AC budget impact on LITE (small boat platform)
- **Certification overhead** — pressure vessel regulations (Vietnam TCVN)

**CEO decision matrix preview (BC firming-up will quantify):**
- If SC-2 training-transfer cannot be closed by R1-R3 → R4 is justified
- If R3 elastomer hybrid reaches 55% fidelity + bench test confirms 70% threshold → R4 not needed
- Physical gate 2026-05-07 bench tests should discriminate R1/R3 vs R4 need

---

### SS1 Recoil Comparison Matrix

| WP | Cost | Latency | Fidelity | Noise | Duty | Maturity | Safety |
|---|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| R1 Solenoid pulse | $80-150 | <10ms | 30-45% | Low | High | 6 | Green |
| R2 Inertial hammer | $150-250 | 15-25ms | 55-70% | Med | Med | 4 | Green |
| R3 Elastomer hybrid | $100-180 | <10ms | 40-55% | Low | High | 5 | Green |
| **R4 Pneumatic** | **$600-1,200** | **10-20ms** | **75-90%** | **HIGH** | **Med-Low** | **7** | **Yellow** |

---

## 2. SS1 MWI Mount — Medium Search (3 WPs)

### WP-M1 — Kinematic 3-Point + Manual Latch (Baseline)

| Attribute | Value |
|---|---|
| Principle | 3-point kinematic mount (Maxwell or Kelvin) — 6-DOF deterministic seating; manual cam latch for retention |
| Repeatability | <0.1 mm position, <0.3 mrad angle |
| Swap time | 30-60 sec (unlatch → lift → seat new → latch) |
| Cost | $120-180 (CNC aluminum + steel balls/V-grooves + cam latch) |
| Maturity | 8 (precision optics/measurement standard) |
| Risk | Low |

**Pros:** Proven, precise, cheap, no electronics. **Cons:** Manual action, slightly slower swap.

---

### WP-M2 — Solenoid Active Clamp + NFC Trigger

| Attribute | Value |
|---|---|
| Principle | Kinematic seat + solenoid-driven kinematic clamp; NFC reads weapon tag on seat → triggers clamp engagement (TRIZ-15 Dynamization) |
| Repeatability | <0.1 mm (kinematic) + clamp adds near-zero force (no re-registration) |
| Swap time | <5 sec (seat → NFC auto-latch) |
| Cost | $300-500 (kinematic base + clamp solenoid + NFC reader + MCU + LED indicators) |
| Maturity | 5 (novel combination) |
| Risk | Med — NFC reliability in wet/dirty environment, clamp fail-safe mode |

**Pros:** Fastest swap (meets <5min spec with margin), auto-detect eliminates operator error. **Cons:** 2-3× cost, needs fail-safe design (clamp retention if power lost).

---

### WP-M3 — Taper-Pin + Cam Lever (Cheapest)

| Attribute | Value |
|---|---|
| Principle | Taper pin self-centering + over-center cam lever for clamping |
| Repeatability | <0.3 mm position, <1 mrad angle (taper wear over cycles) |
| Swap time | 20-40 sec |
| Cost | $60-100 |
| Maturity | 9 (standard tooling) |
| Risk | Low-Med — taper wear over long service life |

**Pros:** Cheapest, simple, robust. **Cons:** Lower precision than kinematic, wear drift.

---

### MWI Comparison Matrix

| WP | Cost | Swap Time | Repeatability | Auto-Detect | Maturity |
|---|:-:|:-:|:-:|:-:|:-:|
| M1 Kinematic + latch | $120-180 | 30-60s | <0.1mm | No | 8 |
| **M2 Solenoid clamp + NFC** | **$300-500** | **<5s** | **<0.1mm** | **Yes** | **5** |
| M3 Taper + cam | $60-100 | 20-40s | <0.3mm | No | 9 |

---

## 3. SS2-SS5 Shallow — Inherited from `_portfolio/Morpho_SS2..SS5`

| Subsystem | Inherited WP Choice | Change for LITE? |
|---|---|:-:|
| SS2 Visual & Engine | 3× projector 6000 lm + 180° curved screen + Unity HDRP + render PC (RTX 4070) + instructor PC | NONE — LITE is reference baseline |
| SS3 Motion Platform | 2-DOF electric (pitch+roll), ±8°, <100ms step response | NONE |
| SS4 Scenario + AI | Behavior Tree UAV/USV, FPV/Houthi profile library, MARL evasion module (optional) | NONE |
| SS5 AAR + Scoring | Ray-trace lead-angle scoring, post-shot playback, metric dashboard | NONE |

**No re-search required** — portfolio morpho is LITE-ready. BC will re-evaluate only if pneumatic (R4) changes SS1 interface (compressor placement, air routing, power budget) enough to ripple to SS2/SS3.

---

## 4. Compatibility Matrix — SS1 Recoil × MWI

| | M1 Kinematic+Latch | M2 Solenoid+NFC | M3 Taper+Cam |
|---|:-:|:-:|:-:|
| R1 Solenoid pulse | ✅ | ✅ | ✅ |
| R2 Inertial hammer | ✅ | ✅ | ⚠️ (taper slop may degrade hammer alignment) |
| R3 Elastomer hybrid | ✅ | ✅ | ✅ |
| R4 Pneumatic | ✅ | ⚠️ (air line routing + NFC reader position conflict — solvable) | ⚠️ (higher recoil → taper wear accelerated) |

**12 of 12 combinations feasible**, 3 with engineering caveats. No combinatorial blocker.

---

## 5. Concept Variants (≥3 required)

Combining SS1 Recoil × SS1 MWI × shared SS2-SS5:

### Concept C1 — LITE Baseline (R1 + M1)
- WP-R1 Pulse solenoid + WP-M1 Kinematic + manual latch
- Cost SS1: ~$200-330 · Recoil fidelity 30-45% · Swap 30-60s
- **Identity:** Cheapest, safest, fastest response. Reference baseline.

### Concept C2 — LITE Fidelity (R4 + M2) — CEO Override Path
- WP-R4 Pneumatic + WP-M2 Solenoid clamp + NFC
- Cost SS1: ~$900-1,700 (+ compressor acoustic isolation ~$150-300)
- Recoil fidelity 75-90% · Swap <5s · Noise HIGH (mitigation required)
- **Identity:** Highest fidelity, premium LITE upward. Justifies cost flex if SC-2 bench-test shows R1-R3 miss the 70% threshold.

### Concept C3 — LITE Upgrade (R2 + M2)
- WP-R2 Inertial hammer + WP-M2 Solenoid clamp + NFC
- Cost SS1: ~$450-750
- Recoil fidelity 55-70% · Swap <5s · Noise Med
- **Identity:** Middle path — meaningful fidelity lift over R1, quick swap, no pneumatic overhead.

### Concept C4 — LITE Cost-Optimized (R3 + M3)
- WP-R3 Elastomer hybrid + WP-M3 Taper cam
- Cost SS1: ~$160-280
- Recoil fidelity 40-55% · Swap 20-40s · Noise Low
- **Identity:** Cheapest path with pulse-shape improvement. Target-cost LITE for export market.

---

## 6. BB Handoff to BC

**4 LITE concept variants** to evaluate in BC (firming-up + VDI 2225 + ICDM DQM):
- C1 Baseline (R1+M1)
- **C2 Fidelity (R4+M2) — CEO override path**
- C3 Upgrade (R2+M2)
- C4 Cost-Optimized (R3+M3)

**Key BC questions:**
1. Does bench test from physical gate 2026-05-07 discriminate R1/R3 fidelity ceiling vs 70% training-transfer threshold?
2. Does pneumatic compressor noise (75-85 dB) violate SC-5 crew-communication envelope on small boat?
3. What is CEO's willingness to pay on the fidelity × cost trade curve?
4. Does LITE need 1 concept or 2 (base + premium)? Portfolio logic suggests 1 per variant.

**Flagged for BD risk:**
- R4 pneumatic: compressor acoustic, pressure vessel cert, power draw, duty cycle
- M2 NFC: fail-safe clamp retention on power loss
- R2 inertial: wear rate on elastomer stopper, noise envelope

**Flagged for BE selection:**
- CEO to declare LITE price envelope (locked $50-70K vs flex up to $80-100K for C2)
- Training-transfer bench test data needed BEFORE BE — physical gate 2026-05-07 is gating evidence

---

## 7. Key Findings

1. **SS1 Recoil — 4 WPs searched**, R4 pneumatic re-admitted per CEO override with full trade-space documented.
2. **SS1 MWI — 3 WPs searched**, M2 solenoid+NFC is innovation path.
3. **SS2-SS5 — no re-search** (portfolio morpho LITE-ready).
4. **12 of 12 SS1×MWI combinations feasible**; 3 with engineering caveats.
5. **4 concept variants** built for BC evaluation (C1 Baseline, C2 Fidelity, C3 Upgrade, C4 Cost-Optimized).
6. **Physical gate 2026-05-07 becomes the discriminator** between solenoid-class (R1/R3) and pneumatic (R4) paths — must capture fidelity bench data for SC-2 threshold verification.
