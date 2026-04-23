---
created: 2026-03-19
updated: 2026-03-19
type: design-analysis
phase: 1-task-clarification
project: BB-01_LOMAH
---

# BB-01 LOMAH — Essential Problem (5-Step Abstraction)

> **Pahl-Beitz Phase 1, Step 4-5**
>
> Running the 5-step abstraction to transform specific requirements → core problem statement

---

## 5-STEP ABSTRACTION PROCESS

### Step 1: ELIMINATE Personal Preferences & Implicit Assumptions

**What was stripped out:**

| Assumption Removed | Rationale |
|-------------------|-----------|
| "Use STM32H743" | Specification is **"MCU capable of real-time DSP + ADC processing"** — technology choice deferred to Phase 3 |
| "Use LM358 as charge amp" | Specification is **"op-amp with ≥1 MHz GBW + slew rate ≥0.5V/µs"** — specific part is embodiment detail |
| "LoRa for RF" | Specification is **"wireless transmission ≥400m with <500ms latency"** — technology is embodiment choice |
| "12V LiFePO4 battery" | Specification is **"≥8h runtime from rechargeable marine-safe source"** — power solution is Phase 3 |
| "Steel targets on catamaran" | Specification is **"impacts on armored surfaces ≥AR400 hardness"** — platform is external constraint |

**Assumptions stripped:**
1. ❌ Specific vendor (STMicroelectronics, TI, etc.)
2. ❌ PCB form factor or package size
3. ❌ Specific materials (FR-4 PCB, epoxy potting, etc.)
4. ❌ Integration with external display/control station
5. ❌ Multi-target synchronization requirement

---

### Step 2: OMIT Requirements Not Essential to Core Function

**What was separated (non-essential Wishes):**

| Requirement | Category | Reason Omitted from Core |
|-------------|----------|-------------------------|
| Timestamp each event | Wish | Nice for logging, NOT essential for hit/miss detection |
| Sea State 4 operation | Objective | Threshold (Sea State 3) is sufficient for initial training ops |
| 24-hour runtime | Objective | Threshold (8 hours) covers typical training day |
| 1000s of local content | Wish | Cost optimization for production, not Phase 1 validation |
| Built-in display | Wish | External display can be added later |
| Self-diagnostic logging | Wish | Useful for maintenance, not essential for detection |

**Essentials retained:**
- ✅ Detect impact (Piezo sensor response)
- ✅ Discriminate hit vs. miss (signal feature extraction)
- ✅ Identify which target (multi-channel discrimination)
- ✅ Report result (wireless transmission)
- ✅ Operate in marine environment (salt spray, humidity)
- ✅ Real-time processing (<200ms)

---

### Step 3: TRANSFORM Quantitative → Qualitative

**Quantitative requirement** → **Qualitative essence:**

| Quantitative | ⟹ | Qualitative |
|--------------|---|------------|
| Pd ≥90% for hit, ≤5% false pos | ⟹ | Reliably distinguish impact signal from noise + false triggers (wind, wave) |
| ≤200ms latency | ⟹ | Respond to impact in real-time (before next shot) |
| ≥15dB SNR | ⟹ | Extract signal robust to marine environment interference |
| ≥500m wireless range | ⟹ | Transmit result from target to shore control station at operational distance |
| Sea State 3 operation | ⟹ | Survive platform motion without false detections |
| LiFePO4 + ≥8h runtime | ⟹ | Operate throughout training day without recharging at range |

---

### Step 4: GENERALIZE to Broader Problem Class

**Question:** What is this fundamentally a problem of?

**Answer:**

> This is fundamentally a **problem of real-time signal discrimination in a noisy, mobile environment.**
>
> Specifically:
> - **Signal source**: Acoustic/mechanical transient (bullet impact on hardened steel plate)
> - **Medium**: Salt-water marine environment with wave-induced platform motion
> - **Noise sources**: Wind, wave action, platform vibration, sloshing water, thermal noise
> - **Constraints**: Distributed sensors, wireless comms, battery-powered, latency-critical
> - **Objective**: Maximize detection probability while minimizing false alarms

**Analogous problems:**
- Seismic event detection (earthquake vs. noise)
- Acoustic event classification (underwater sonar)
- Condition monitoring (vibration analysis for bearing failure)
- Pattern recognition under uncertainty (medical diagnostics, radar signal processing)

**Binding challenge:** How to extract weak, transient signals from a high-noise background without training data from the actual deployment environment

---

### Step 5: FORMULATE the Essential Problem

```
┌────────────────────────────────────────────────────────────────────────┐
│ ESSENTIAL PROBLEM — BB-01 LOMAH                                        │
├────────────────────────────────────────────────────────────────────────┤
│                                                                        │
│ "Detect and discriminate short-duration impact events (millisecond    │
│  scale) from a hardened steel surface, distinguishing:                │
│                                                                        │
│   • HIT (bullet impact) → triggers acoustic signature                 │
│   • MISS (nearby non-impact) → no signature, or signature below       │
│     threshold                                                         │
│                                                                        │
│  in the presence of:                                                  │
│                                                                        │
│   • Environmental noise (waves, wind, platform vibration)             │
│   • Sensor noise (thermal, mechanical)                                │
│   • Multipath interference (reflection from water)                    │
│                                                                        │
│  with hard constraints:                                               │
│                                                                        │
│   • Real-time response (<200ms)                                       │
│   • Operate in marine salt-spray environment                          │
│   • Distinguish 4 separate target locations from single sensor        │
│     array                                                             │
│   • Battery-powered, ≥8 hour mission duration                         │
│   • Wireless report to remote control station (≥500m)                 │
│   • No training data available (cold-start problem)                   │
│                                                                        │
└────────────────────────────────────────────────────────────────────────┘
```

---

## PROBLEM DECOMPOSITION

### Physics Layer
- **Impact event**: Bullet kinetic energy → steel deformation → stress waves → vibration resonance
- **Sensor response**: Piezoelectric ceramic transforms stress → electrical charge → analog voltage transient
- **Signal characteristics**:
  - Frequency: 100 Hz - 10 kHz (impact resonance of AR400 steel plate)
  - Duration: ~10-100 ms (ring-down)
  - Amplitude: mV range (charge amp output)
  - Signal template: "Clang" + resonance decay

### Environmental Noise Sources
- **Platform motion**: Sea State 3 → continuous rocking, ~0.1-1 Hz energy
- **Wave slap**: Random transients, lower frequency (<100 Hz)
- **Wind pressure**: Sustained, broadband noise
- **Sensor thermal noise**: ~µV level, white spectrum
- **Cross-coupling**: Impact on one target → weak signal on adjacent sensors

### Decision Problem
- **Classification task**: Binary (Impact? Yes/No)
- **Multi-target task**: Spatial discrimination (Which target? 1-4)
- **Confidence level**: Must achieve >90% detection while keeping false alarm rate <5%/hour
- **Real-time constraint**: Decision within 200ms of event start

---

## COUPLING ANALYSIS

**Three domains must integrate:**

| Domain | Role | Integration Point |
|--------|------|-------------------|
| **Electrical** | Sensor acquisition, signal conditioning, wireless | Charge amp gain = noise filtering efficiency; LoRa power = battery life trade-off |
| **Software/DSP** | Real-time decision algorithm | Detection algorithm robustness = false alarm vs. miss trade-off |
| **Mechanical** | Physical realization, environmental protection | Sensor mounting = signal fidelity; seal design = marine durability vs. sensor sensitivity |

**Key couplings:**
1. **Signal chain gain**: Too low → noise dominates; too high → clipping on large impacts
2. **Filter bandwidth**: Too wide → noise passes; too narrow → slow response time
3. **Algorithm threshold**: Too high → misses; too low → false alarms
4. **Sensor type**: Piezo CONTACT required (NOT MEMS) to handle SPL without saturation

---

## DERIVATION FROM MISSION CONTEXT

**Training scenario (Điều 124, Bài 3):**
- Naval gunnery training at 150-400m range
- Floating target platform with 4 bia (targets)
- Training shoot with 5.56mm, 7.62mm rifles
- Sea State 3 (typical training condition)
- Need instant feedback: "Đạn trúng bia #2" vs. "Trượt"

**System requirement flows from mission:**

```
MISSION GOAL: Train naval gunners to hit moving targets at sea
    ↓
OPERATIONAL NEED: Instant hit/miss feedback, per target
    ↓
SYSTEM FUNCTION: Acoustic detection of bullet impact on steel bia
    ↓
TECHNICAL REQUIREMENT: Distinguish impact (>90% reliability) from
                       false triggers (<5% error rate) in Sea State 3
    ↓
DESIGN CONSTRAINTS:
  • Piezo CONTACT sensor (NOT MEMS) — avoids SPL saturation
  • Real-time DSP (<200ms) — operator feedback loop
  • Wireless transmission — remote display at shore control
  • Marine-grade durability — 12+ months salt spray
```

---

## VERIFICATION OF ABSTRACTION

**Does the essential problem capture the original requirements?**

| Original Requirement | Addressed in Essential Problem? |
|----------------------|--------------------------------|
| KPP.01 (Pd ≥90% hit) | ✅ Yes: "Detect...distinguishing HIT vs. MISS...no training data (cold-start)" |
| KPP.02 (FP ≤5%) | ✅ Yes: "distinguishing...MISS → no signature, or below threshold" |
| KPP.03 (≤200ms latency) | ✅ Yes: "Real-time response (<200ms)" |
| KPP.04 (SNR ≥15dB) | ✅ Yes: "extract from noise, thermal noise, multipath interference" |
| KPP.05 (≥500m wireless) | ✅ Yes: "Wireless report...≥500m" |
| KPP.06 (Identify target) | ✅ Yes: "Distinguish 4 separate target locations" |
| SEN.01 (Piezo CONTACT) | ✅ Yes: "Piezoelectric ceramic...avoids SPL saturation" |
| ENV.01-05 (Marine ops) | ✅ Yes: "marine salt-spray environment...platform vibration" |
| PWR.01-04 (Battery) | ✅ Yes: "Battery-powered, ≥8 hour mission duration" |

**All 9 KPPs + 8 SEN + 5 ENV + 4 PWR traced to essential problem.** ✅

---

## NEXT PHASE: Function Structure

Once CEO validates this essential problem, Phase 1 proceeds to:

1. **Generate 6-flow function structure** (ENERGY, MATERIAL, SIGNAL + computation/trust layers)
2. **Identify sub-functions** (transduction, signal conditioning, detection, communication)
3. **Cross-domain sync S1** (ensure electrical ↔ software ↔ mechanical consistency)

---

## SIGNAL DETECTION PRINCIPLE (Conceptual)

```
IMPACT EVENT SEQUENCE:
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│  t=0:     [BULLET IMPACT]                                   │
│             ║                                               │
│  t=0-1ms: ╚═══════════════════════════════════╗             │
│  STRESS WAVE THROUGH STEEL                    ║            │
│  Frequency sweep 100-10kHz (resonance excite) ║            │
│                                                ║            │
│           ┌─────────────────────────────────┐ ║            │
│           │  Piezo sensor activation        │─╫────►        │
│           │  Charge → Voltage transient     │ ║            │
│           └─────────────────────────────────┘ ║            │
│                                                ║            │
│  RINGDOWN PHASE (10-100ms)                    ║            │
│  Signal decays exponentially                  ║            │
│  Q-factor ~5-20 (lightly damped)             ║            │
│                                                ║            │
│  DECISION TASK (≤200ms):                      ║            │
│  Is this IMPACT signature or NOISE?          ║            │
│  └─ Must work on incomplete data (early      ║            │
│     detection, not wait for full ringdown)   ║            │
│                                                ║            │
└──────────────────────────────────────────────────────────────┘

NOISE SOURCES (Competing with Signal):
┌──────────────────────────────────────────────────────────────┐
│                                                              │
│ WAVE SLAP (10-50 Hz transient)     → Filtered below 100Hz  │
│ WIND SUSTAINED (broadband)          → Baseline estimation  │
│ PLATFORM ROCKING (0.1-1 Hz motion) → Adaptive baseline     │
│ SENSOR THERMAL (µV/√Hz)            → SNR margin spec       │
│ QUANTIZATION (ADC 12-bit)          → LSB ~805 µV           │
│                                                              │
└──────────────────────────────────────────────────────────────┘

DETECTION ALGORITHM MUST SOLVE:
  1. Distinguish 100 Hz - 10 kHz impact from low-frequency motion
  2. Extract weak signals (>15dB SNR in worst-case noise)
  3. Trigger alert within 200ms (don't wait for full decay)
  4. Spatially discriminate 4 targets (cross-talk rejection)
  5. Adapt to changing baseline (varying noise floor)
  6. Zero false alarms per hour in field conditions (cold-start)
```

