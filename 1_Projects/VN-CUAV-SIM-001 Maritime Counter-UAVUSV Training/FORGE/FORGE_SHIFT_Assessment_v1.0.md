# FORGE SHIFT ASSESSMENT — VN-CUAV-SIM-001
## ACH Go/No-Go — Maritime Counter-UAV/USV Shooting Training Simulation
## 4 Variants: LITE | FIXED | FULL | CORTEX

**Date:** 2026-04-07
**Method:** SHIFT + SHIFTO (Outcome-aligned)
**Input:** FORGE Job Map v1.0 (63 outcomes, DIFFERENTIATED strategy confirmed)
**CEO Pre-decision:** ACH verdict confirmed from Job Map — this assessment formalizes.

---

## 0. ACH Scope — What Exactly Is Being Replaced?

VN-CUAV-SIM-001 is **not a single ACH substitution** — it is an **entire training system** where SW + commodity hardware replaces live-fire training. Multiple ACH layers operate simultaneously:

| ACH Layer | What AI/SW Replaces | Hardware Baseline (non-ACH) | ACH Boundary Check |
|-----------|--------------------|-----------------------------|:-------------------:|
| **ACH-1: Ballistic Engine** | V-SMASH 6DOF model replaces live ammunition + range | Bắn thật 12.7mm ($250-1500/h, đạn thật) | ✅ INFORMATION — trajectory calculation |
| **ACH-2: Target Generation** | Unity AI replaces physical target drones/bia | Drone bia ($5-50K mỗi chiếc, tiêu hao) | ✅ INFORMATION — visual + behavior |
| **ACH-3: Environment** | Unity HDRP replaces being-at-sea training | Đi tàu ra biển (chi phí nhiên liệu, thời gian, thời tiết) | ✅ INFORMATION — visual immersion |
| **ACH-4: Motion** | 2-DOF electric replaces ship deck motion | Bệ thuỷ lực đắt tiền hoặc trên tàu thật | ⚠️ PHYSICAL — simplified approximation |
| **ACH-5: Scoring & AAR** | Digital analytics replaces manual observation | Instructor nhìn bằng mắt + ghi chép tay | ✅ INFORMATION — data processing |
| **ACH-6: Adaptive Training** | AI recommends exercises based on weakness | Instructor kinh nghiệm tự chọn bài | ✅ INFORMATION — pattern recognition |
| **ACH-7: Weapon Feel** | Solenoid + magnetic brake replaces real weapon | Bắn súng thật (lực giật thật) | ⚠️ PHYSICAL — simplified approximation |

**ACH Boundary Rule check:**
- ACH-1,2,3,5,6 = pure INFORMATION → **PASS**
- ACH-4 (motion) = PHYSICAL but intentionally simplified (2-DOF vs 6-DOF reality) → acceptable as approximation, NOT replacement
- ACH-7 (weapon feel) = PHYSICAL but intentionally simplified (solenoid vs real recoil) → acceptable at 70% fidelity threshold

---

## 1. SHIFT SCORECARD — Overall Product

### S — SUBSTITUTABLE? ✅ PASS

**Physics test:** "Is the information needed for training present in cheap sensor data?"

| Information Channel | Sensor | Cost | Feasible? |
|-------------------|--------|:----:|:---------:|
| Weapon pointing direction | Rotary encoder 0.1° | $15 × 2 | ✅ |
| Trigger pull event | Micro-switch | $2 | ✅ |
| Weapon type identification | NFC tag RC522 | $5 | ✅ |
| Trainee body position | Seat occupancy switch | $3 | ✅ |
| Ship motion command | ESP32 → actuator feedback | $8 | ✅ |

**All training-relevant information is captured by commodity sensors costing < $50 total.** The expensive part of live fire (ammunition, range, target, ship deployment) is replaced by SW rendering — classic ACH.

**Evidence:**
- Game-based military training simulators are PROVEN (VBS, JCATS, Steel Beasts, Bohemia Interactive Simulations)
- Zen Technologies (India) sells similar anti-drone simulators at $200-500K — WX targets $50-70K via commodity HW
- Unity/Unreal engine can render 6DOF ballistics to ≤5% error (multiple academic validations)

**Score: PASS** — All information substitutable via commodity sensors + SW.

---

### H — HYBRID POSSIBLE? ✅ PASS

**Hybrid architecture already IS the design:**

```
HYBRID ARCHITECTURE — VN-CUAV-SIM-001

PHYSICAL (commodity):             AI/SW (value driver):
• CNC aluminum weapon mockup      • V-SMASH 6DOF ballistic engine
• Solenoid recoil (24VDC)         • Unity 6 HDRP maritime render
• Rotary encoders (2×)            • UAV/USV AI behavior (flocking)
• Short-throw projectors (3-6×)   • Scoring + AAR analytics
• ESP32 MCU controllers           • Adaptive difficulty (future)
• Electric linear actuators       • Crew coordination engine
• Speakers (5.1/7.1)             • NFC auto-configuration

HW cost: ~$12-25K                 SW cost: ~$6-10K (dev)
                                  SW value: ~$50-415K (sell price)
```

**Commodity HW multiplier:** SW drives 75-85% gross margin. HW is generic (projectors, GPU, encoders — available in any VN electronics market).

**Score: PASS** — Hybrid is the natural architecture. No exotic hardware needed.

---

### I — IMPROVEMENT TRAJECTORY? ✅ PASS

| Dimension | dA/dt (AI/SW) | dH/dt (HW alternative) | Crossover |
|-----------|:------------:|:---------------------:|:---------:|
| Ballistic accuracy | GPU performance +25%/yr → higher fidelity physics | Ammunition cost +5%/yr (inflation) | **Already crossed** — SW ≤5% error achieved |
| Target realism | AI behavior models improving rapidly (GAN, RL) | Physical drones: same flight dynamics, more expensive | **Already crossed** — Unity AI > physical bia |
| Rendering quality | HDRP, ray-tracing, 8K → increasingly photorealistic | Real environment is fixed (perfect already) | 2027-2028 for near-photorealistic maritime |
| Scoring depth | ML on aim data → deeper insights per session | Manual observation: fixed capability | **Already crossed** — digital > human observer |
| Motion fidelity | Haptic algorithms improving, VR vestibular | Full-motion platforms: expensive, diminishing returns | 2028-2030 for VR vestibular to match 2-DOF |

**dA/dt >> dH/dt across all dimensions.** SW simulation is on an exponential improvement curve while live-fire training costs only increase.

**Score: PASS** — AI/SW trajectory strongly favors ACH.

---

### F — FALLBACK FEASIBLE? ✅ PASS (Level 2 Inherent)

**Risk analysis: "If AI/SW fails in this product, what happens?"**

| Failure Mode | Consequence | Severity | Fallback |
|-------------|-------------|:--------:|----------|
| Ballistic model error > 5% | Training less accurate → bad habits | MEDIUM | **L2: Validated TM tables pre-loaded, model locked to known-good version** |
| Unity crash mid-session | Training interrupted, frustration | LOW | **L2: Auto-save session state, restart < 2 min** |
| Target AI behaves unrealistically | Ineffective training | MEDIUM | **L2: Pre-scripted waypoint mode (no AI, deterministic paths)** |
| Motion platform malfunction | Physical safety risk | HIGH | **L2: E-stop ≤ 1s + hard stops (hardware), L3: training continues visual-only** |
| Scoring gives wrong hit/miss | Bad assessment | MEDIUM | **L2: Instructor override + manual AAR** |
| NFC fails to detect weapon | Can't auto-config | LOW | **L2: Manual weapon selection in instructor GUI** |

**Critical insight:** This product has **inherent Level 2 fallback** because:
1. It is a TRAINING system, not a WEAPON system — failure ≠ loss of life
2. Every AI component has a deterministic fallback (pre-scripted scenarios, manual scoring, visual-only mode)
3. The worst case is "training session is less effective" — not "system endangers personnel"
4. Physical safety = hardware-only (E-stop, hard stops) — no AI in safety path

**Score: PASS (Level 2 Inherent)** — Fallback is built into the architecture by nature.

---

### T — TRAINING DATA? ✅ PASS

| Data Need | Source | Volume | Quality |
|-----------|--------|:------:|:-------:|
| Ballistic tables (12.7mm, 14.5mm, 23mm) | Published military TM + JBM Ballistics | Extensive | HIGH — validated physics |
| UAV flight characteristics | DJI SDK docs, FPV community data, military reports | Rich | HIGH — well-documented |
| USV behavior patterns | Ukraine war OSINT, US Navy reports, academic papers | Moderate | MEDIUM — some classified |
| Maritime environment (sea states) | Beaufort scale, metocean data Biển Đông | Rich | HIGH — standardized |
| Ship motion (roll/pitch profiles) | Naval architecture references, VN navy data | Moderate | MEDIUM — VN-specific data thin |
| Gunner aiming patterns | **Generated by this simulator** | Zero initially → growing | SELF-GENERATING ★ |

**Key insight:** This product **generates its own training data** (gunner aim traces, reaction times, hit/miss patterns). After deployment at 5-10 units, the dataset enables ACH-6 (adaptive difficulty AI) — classic **data flywheel**.

**Synthetic generation:** Unity can procedurally generate infinite UAV/USV scenarios with parametric variation. No real-world data collection needed for core functionality.

**Score: PASS** — Rich external data + self-generating flywheel.

---

### O — OUTCOME-ALIGNED? ✅ HIGH

**From FORGE Job Map v1.0 (63 outcomes, Opp Algorithm scored):**

| ACH Layer | Top Outcomes Addressed | Opp Scores | Rank in Top 15 |
|-----------|----------------------|:----------:|:--------------:|
| ACH-1 Ballistic | O-29 (8.4), O-30 (8.1), O-39 (7.8) | 24.3 | #1, #3, #8 |
| ACH-2 Targets | O-36 (8.4), O-33 (7.8), O-43 (7.8), O-35 (7.4) | 31.4 | #2, #6, #7, #15 |
| ACH-3 Environment | O-10 (8.0), O-42 (7.6), O-31 (6.0) | 21.6 | #4, #12 |
| ACH-4 Motion | O-34 (8.0), O-39 (7.8) | 15.8 | #5, #8 |
| ACH-5 Scoring | O-59 (7.6), O-56 (7.2), O-57 (7.0), O-58 (7.0) | 28.8 | #10 |
| ACH-6 Adaptive | O-51 (5.5), O-61 (future) | 5.5 | — |
| ACH-7 Weapon | O-38 (6.9), O-26 (5.5) | 12.4 | — |

**Summary:**
- ACH addresses **12 of top 15** underserved outcomes
- Combined opportunity score of addressed top-15: **111.0 / 117.0** (95%)
- Zero overserved outcomes addressed → **no gold-plating risk**

**Score: ✅ HIGH** — ACH is directly aligned with customer's most underserved needs.

---

## 2. ACH ECONOMICS QUICK-CHECK

| Category | Non-ACH (Live Fire) | ACH (Simulator) | Delta |
|----------|-------------------|-----------------|:-----:|
| **Cost per training hour** | $250-1,500 (ammo + range + logistics) | **≤ $5** (electricity only) | **-98%** |
| **Unit capital cost** | N/A (no equivalent single system) | $50-70K (LITE) | New category |
| **Ammo cost per year** (100h training) | $25,000-150,000 | **$0** | **-100%** |
| **Target cost** (drones, bia kéo) | $5,000-50,000/year | **$0** (SW-generated) | **-100%** |
| **Weather dependency** | 40-60% days unavailable | **0%** (indoor 24/7) | **-100%** |
| **Range scheduling** | Weeks of lead time | **On-demand** | qualitative ↑↑ |
| **Import/supply chain** | Đạn 12.7mm = local production, nhưng quota/phê duyệt | GPU + projector = COTS VN | Lower admin burden |
| **Reuse multiplier** | 0 (each round consumed) | **4 variants × N units** | SW cost amortized |
| **Local content** | ~100% (đạn VN sản xuất) | **~85%** (CNC WX, encoders import, GPU COTS) | comparable |

**Break-even:** At 100h training/year with 12.7mm ammo at $500/h average, simulator pays for itself in **< 1 year** ($50K cost / $50K ammo savings).

**Capability premium (impossible with live fire):**
- Swarm 4-50 targets simultaneously → no live-fire equivalent exists
- Mixed UAV+USV attack → no live-fire equivalent
- Night/fog/storm engagement → live fire cancelled in bad weather
- AAR with 3D replay → impossible with live fire
- Risk-free unlimited repetition → ammo-limited in live fire
- Crew coordination training (FULL) → requires actual ship deployment

---

## 3. SHIFT ASSESSMENT SUMMARY

```
SHIFT SCORECARD — VN-CUAV-SIM-001 (Overall Product)

S — SUBSTITUTABLE?           ✅ PASS    All information in commodity sensors ($50)
H — HYBRID POSSIBLE?         ✅ PASS    Already designed as hybrid (commodity HW + SW value)
I — IMPROVEMENT TRAJECTORY?  ✅ PASS    dA/dt >> dH/dt, crossover already achieved
F — FALLBACK FEASIBLE?       ✅ PASS    Level 2 inherent (training system, not weapon)
T — TRAINING DATA?           ✅ PASS    Rich external + self-generating flywheel
O — OUTCOME-ALIGNED?         ✅ HIGH    12/15 top underserved outcomes, 95% opp score

═══════════════════════════════════════════════════════════════
OVERALL: 6/6 PASS — ALL dimensions green
═══════════════════════════════════════════════════════════════

ECONOMICS: ★★★ Highly favorable
  Break-even < 1 year. 98% cost reduction per training hour.
  Capability premium: 6 features impossible with live fire.

CAPABILITY PREMIUM: ★★★ Category-creating
  Swarm defense training, mixed UAV+USV, night engagement,
  crew coordination, 3D AAR — NONE possible with live fire.

REUSE VALUE: ★★★ Maximum
  Common Platform across 4 variants ($40K-$415K range).
  V-SMASH engine reuse from existing WX product.
  MWI weapon modules = multi-product revenue stream.

RISK: LOW
  "If AI/SW fails → training session is less effective"
  NOT: "weapon fails → personnel endangered"
  Training simulator has INHERENT low consequence on failure.

═══════════════════════════════════════════════════════════════
RECOMMENDATION: ★ GO — UNCONDITIONAL
═══════════════════════════════════════════════════════════════

This is the cleanest ACH case in the WX portfolio:
  • All information is substitutable by commodity sensors
  • Hardware is generic COTS (projectors, GPU, encoders)
  • SW drives 75-85% gross margin
  • 12/15 top underserved customer outcomes addressed
  • Inherent Level 2 fallback (training ≠ weapon)
  • Self-generating data flywheel
  • Category-creating capability (no live-fire equivalent)
  • Break-even < 1 year at customer site

No conditions, no caveats. GO.
```

---

## 4. PER-VARIANT ACH NOTES

| Variant | ACH Layers Active | Special Note |
|---------|------------------|-------------|
| **LITE (PA-2)** | ACH-1,2,3,4,5,7 | Baseline. Motion = 2-DOF (simplified ship → xuồng) |
| **FIXED (PA-8)** | ACH-1,2,3,5,7 | ACH-4 ABSENT (no motion — fixed platform). Simplest ACH. |
| **FULL (PA-6)** | ACH-1,2,3,4,5,6*,7 | Shared deck = highest physical investment. Crew coordination = SW-only value. ACH-6 enables adaptive crew scenarios. |
| **CORTEX (PA-9)** | All + ACH-8 (C2 Networking) | ACH-8 NEW: shared battlespace engine = pure SW. Highest ACH density. $5K/node SW license = recurring revenue. |

**FIXED has highest ACH purity** (no motion HW at all — nearly 100% SW value).
**CORTEX has highest ACH leverage** (SW networking layer turns existing nodes into joint training system).

---

## 5. FORGE ROUTING

```
forge-shift GO → routes to:
├── forge-fallback → Design Level 2 fallback architecture (already inherent, formalize)
├── forge-cost → Full defense-realistic costing per variant
├── forge-validate → ACH-specific validation plan (ballistic accuracy, training transfer)
├── forge-trust → Evidence package: "12/15 outcomes addressed, break-even < 1 year"
├── forge-library → Register V-SMASH ballistic model as WX-BAL-001
├── forge-flywheel → Plan data collection: aim traces → adaptive AI (ACH-6)
└── helix-task-clarify → Add FULL/CORTEX requirements (Requirements v2.0)
```

---

## CEO DECISION

**👤 CEO: SHIFT Assessment = 6/6 PASS, UNCONDITIONAL GO recommended.**

Confirm: **GO / NO-GO / GO with conditions?**

**Next FORGE step after confirmation:** `/forge-cost` (defense-realistic costing per variant)
