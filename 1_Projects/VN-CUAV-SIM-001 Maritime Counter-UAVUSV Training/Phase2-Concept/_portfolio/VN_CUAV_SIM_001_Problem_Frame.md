---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
pipeline: helix-concept-generate v3.2 --icdm
block: BA
method: Pahl & Beitz §6.2 + TRIZ + CARS + ICDM DSO
---

# BA PROBLEM FRAME — VN-CUAV-SIM-001
## Solution-Determining Sub-Functions, TRIZ Contradictions, CARS Variants

**Ngày:** 2026-04-14
**Design Type:** ADAPTIVE (3.3/5) → deep search on novel SFs, reuse on proven SFs
**Inputs:** B0 Preflight Report, Function Structure 6-Flow v1.0, ICDM B0→BE, Morpho SS1-SS5

---

## 1. SOLUTION-DETERMINING SUB-FUNCTION ANALYSIS

### Cascade × Breadth Scoring

**Cascade** = nếu SF này thay đổi, bao nhiêu SF khác bị ảnh hưởng theo? (1-5)
**Breadth** = SF này xuất hiện ở bao nhiêu variant? (1-4: LITE/FIXED/FULL/CORTEX)
**Uncertainty** = giải pháp đã rõ chưa? (1=locked, 5=open)

**Score = Cascade × Breadth × Uncertainty**

| Rank | Sub-Function | Cascade | Breadth | Uncertainty | **Score** | Rationale |
|:----:|-------------|:-------:|:-------:|:----------:|:---------:|-----------|
| **1** | **F1.6 Recoil (≥25N)** | 4 | 4 | **5** | **80** | Ảnh hưởng: F-01 force spec, F7.4 weapon config, Er-05 audio sync, scoring, training transfer. Giải pháp TBD — solenoid hiện tại chỉ 10-30N, CEO đã nâng ≥25N. |
| **2** | **F2.3 Target AI Behavior** | 3 | 4 | 4 | **48** | Ảnh hưởng: T-05 scenario diversity, scoring difficulty, training transfer, differentiation vs Zen (scripted only). Approach TBD: scripted vs behavior tree vs ML. |
| **3** | **F7.3-F7.4 MWI Auto-Detect/Config** | 5 | 4 | 3 | **60** | Platform lynchpin — cascade tới MỌI SF khi đổi vũ khí. NFC tag + ballistic table switch + recoil reconfig. Architecture decided nhưng protocol chưa detail. |
| 4 | F3.1 Display 360° (FULL) | 3 | 2 | 3 | 18 | 6-projector cylindrical = novel cho FULL. LITE 3-proj = proven. |
| 5 | F4.1-4.3 Shared Deck (FULL) | 3 | 1 | 4 | 12 | 3×4m shared deck = novel, chỉ FULL. Structural + control engineering. |
| 6 | F6.6 Multi-Station Sync | 2 | 3 | 3 | 18 | LAN sync cho FIXED/FULL/CORTEX. Standard networking. |
| 7 | F2.5 Ballistic Engine | 4 | 4 | 1 | 16 | V-SMASH reuse → uncertainty low. Validate per weapon TM table. |

### Top 3 Solution-Determining SFs → Deep Analysis Below

---

## 2. TRIZ CONTRADICTION ANALYSIS

### 2.1 SF F1.6 — Recoil Force Generation (≥25N)

**Technical Contradiction:**
> Improving: **Force magnitude** (≥25N peak impulse)
> Worsening: **Reliability** (solenoid at 25N continuous = overheating risk at 600-800 RPM)

| TRIZ Parameter | # | Direction |
|---------------|:-:|:---------:|
| Force (10) | Improve | ↑ |
| Reliability (27) | Worsen | ↓ |
| Temperature (17) | Worsen | ↓ |

**Matrix → Principles: #15 Dynamicity, #28 Mechanics Substitution, #35 Parameter Changes, #3 Local Quality**

| Principle | Application to Recoil | Concept |
|-----------|----------------------|---------|
| **#28 Mechanics Substitution** | Replace electric solenoid with **pneumatic cylinder** — gas pressure delivers 25-100N easily, no overheating | **WP-B Pneumatic** |
| **#15 Dynamicity** | Two-stroke recoil: solenoid for rapid tap (10N) + pneumatic for peak (25N). Adjust ratio per weapon. | **WP-E Hybrid (NEW)** |
| **#35 Parameter Changes** | Instead of increasing solenoid force → change pulse duration. Short high-current pulse + duty cycle management. | **WP-A+ Enhanced Solenoid** |
| **#3 Local Quality** | Add **masselotte** (moving mass) on solenoid piston — momentum amplifies perceived recoil without sustained high force. | **WP-F Mass-Enhanced Solenoid (NEW)** |

**Physical Contradiction:**
> Recoil mechanism MUST deliver ≥25N (training transfer) AND MUST be compact/cheap (SC-4 cost, G-04 space)

**Separation in TIME:** High force only during firing (duty cycle ~5-10%), rest = idle → thermal management OK.
**Separation in SPACE:** Force at grip/shoulder (where gunner feels), not entire mechanism.

**TRIZ Resolution → 3 candidate WPs for BB:**

| WP | Principle | Force | Cost | Reliability | Complexity | BB Priority |
|----|-----------|:-----:|:----:|:----------:|:----------:|:----------:|
| WP-A+ | Enhanced solenoid (high-current pulse, heat sink) | 20-30N | $100-150 | Medium | Low | ★★★ |
| WP-B | Pneumatic cylinder (5mm bore, 4bar) | 30-100N | $400-600 | High | Medium (compressor) | ★★★ |
| WP-E | **Hybrid** solenoid+pneumatic | 25-60N | $300-500 | High | High | ★★ |
| WP-F | **Mass-enhanced solenoid** (masselotte) | 25-40N | $120-180 | Medium-High | Low-Medium | ★★★★ |

**CEO Input Request:** WP-F (masselotte solenoid) là novel — cần prototype test trong SS1 PoC 2026-05-07.

### 2.2 SF F2.3 — Target AI Behavior

**Technical Contradiction:**
> Improving: **Target realism/unpredictability** (differentiation vs Zen scripted-only)
> Worsening: **Development complexity** + **Computational cost** (Unity render budget)

| TRIZ Parameter | # | Direction |
|---------------|:-:|:---------:|
| Adaptability (35) | Improve | ↑ |
| Complexity of device (36) | Worsen | ↓ |
| Ease of manufacture (32) | Worsen | ↓ |

**Matrix → Principles: #1 Segmentation, #13 Inversion, #15 Dynamicity, #26 Copying**

| Principle | Application | Concept |
|-----------|-------------|---------|
| **#1 Segmentation** | Behavior = layers: Base path (scripted waypoint) + Perturbation (noise/jink) + Reaction (evade when fired upon). Each layer independent, combinable. | **Layered Behavior Architecture** |
| **#15 Dynamicity** | Static waypoints → dynamic: target adapts route based on gunner aim direction (if aimed → evade). Difficulty = adaptation speed. | **Reactive AI** |
| **#26 Copying** | Use real drone flight data (Ukraine/Houthi OSINT) as base trajectories, add parametric variation. Not ML — data-driven scripting. | **Data-Driven Profiles** |
| **#13 Inversion** | Instead of making target smarter → make **environment harder** (weather, night, clutter). Same simple AI, harder detection. | **Environmental Difficulty** |

**Resolution → Layered Architecture (combines all 4):**

```
LAYER 0: Base Path     — Scripted waypoint (proven, cheap)
LAYER 1: Perturbation  — Gaussian noise + jink frequency (parametric, no ML)
LAYER 2: Reaction      — If gunner aims within 5° → evasive maneuver (simple trigger)
LAYER 3: Data-Driven   — Real flight data overlaid on base path (future, from OSINT)
LAYER 4: Adaptive      — Difficulty adjusts based on trainee performance (T-09 wish)
```

**Phase 1 scope:** Layers 0+1+2 (scripted + perturbation + basic reaction). No ML.
**Phase 2 upgrade:** Layer 3 (data-driven) + Layer 4 (adaptive AI = ACH opportunity, FORGE SHIFT GO).

### 2.3 SF F7.3-F7.4 — MWI Auto-Detect & Auto-Config

**Technical Contradiction:**
> Improving: **Modularity** (≤5min weapon swap, auto-configure everything)
> Worsening: **Reliability** (more auto = more failure modes at interface)

**Matrix → Principles: #1 Segmentation, #24 Intermediary, #27 Cheap Short-Living, #10 Prior Action**

| Principle | Application | Concept |
|-----------|-------------|---------|
| **#24 Intermediary** | NFC tag as intermediary between physical weapon and software. Tag stores: weapon type, serial, calibration data, shot count, last service date. | **NFC Tag Protocol** |
| **#10 Prior Action** | Ballistic tables pre-loaded for all 5 weapons. NFC read → select table. No download, no compute. | **Pre-Loaded Config** |
| **#1 Segmentation** | Config = 5 independent segments: (1) Ballistic table, (2) Recoil profile, (3) ROF timing, (4) Sight overlay, (5) Scoring weights. Each segment auto-selected by weapon_type_id. | **5-Segment Config** |

**MWI Architecture (confirmed from existing morpho):**

```
PHYSICAL: Quick-release plate (mechanical) + 12-pin MIL connector (electrical) + NFC tag (data)
  ↓ NFC Read (~200ms)
SOFTWARE: weapon_type_id → Lookup Table → 5-segment config auto-load
  ↓ Config Applied (~500ms)
VERIFICATION: Instructor confirms on GUI (human-in-loop, F7.5) → Training session enabled
  ↓ Total: < 5 minutes physical swap + < 1 second auto-config
```

**No open contradiction remaining** — architecture is sound. Detail protocol definition in Phase 3.

---

## 3. TESE TRENDS (Technology Evolution)

| Trend | Current State | Next Evolution | WX Action |
|-------|--------------|----------------|-----------|
| Mono→Bi→Poly system | Mono (1 weapon type per setup) | **Poly (MWI: 5 weapon types, hot-swap)** ← WX is HERE | Already implemented in concept. Ahead of competitors. |
| Macro→Micro level | Macro (physical mockup) | Micro (haptic gloves, VR). But defense needs physical fidelity. | **Stay macro** — physical mockup is the right answer for defense training transfer. |
| Rigid→Flexible | Rigid (fixed FOV, fixed scenario) | Flexible (modular FOV, scenario authoring) | LITE→FIXED→FULL→CORTEX = flexible product line. ✅ |
| Human→Automated | Human instructor | AI coaching (T-09 wish), auto-difficulty | Phase 2 wish. ACH opportunity (FORGE SHIFT GO). Don't overinvest now. |
| Single→Multi-screen | Single screen | Multi-screen immersion (3→4→6 projectors) | ✅ Already in product line (180→240→360°) |

**TESE insight:** WX is well-positioned on most trends. The **MWI modularity** (mono→poly) is the strongest competitive moat — no competitor offers 5-weapon hot-swap with auto-config.

---

## 4. CARS FUNCTION STRUCTURE VARIANTS

### Variant A: CURRENT — Subsystem-Oriented (SS1→SS5)

```
F1 Sense Weapon → F2 Simulate Env → F3 Display → F4 Motion → F5 Evaluate → F6 Control → F7 Swap
     (SS1)            (SS2 core)       (SS2 disp)   (SS3)       (SS4)         (SS5)       (SS1 MWI)

Topology: Sequential pipeline with feedback (F5→F6→F2)
Characteristic: Hardware-centric decomposition. Each SS = physical subsystem.
Pros: Clear manufacturing boundaries, easy ICD definition, WX team structure matches (MECH/ELEC/SW)
Cons: Cross-cutting concerns (latency, MWI) span multiple SS. Scoring logic distributed.
```

### Variant B: FLOW-ORIENTED — Signal Chain Decomposition

```
SIGNAL CHAIN (latency-critical path):
  Trigger→Encoder→Ballistic→Render→Display→Audio  [≤50ms budget]
                                        ↑
FEEDBACK CHAIN:                         │
  Score→AAR→Profile→Scenario─────────────┘
                                        
PHYSICAL CHAIN (non-latency):
  Motion→Seat→Recoil→Weapon Swap

TRUST CHAIN:
  NFC Auth→Config Verify→Instructor Confirm→Safety Interlock
```

```
Topology: 4 parallel chains with sync points
Characteristic: Performance-centric decomposition. Latency budget drives architecture.
Pros: Latency optimization explicit. Trust/safety separate from function.
Cons: Manufacturing boundaries unclear. Team allocation harder.
```

### Variant C: EXPERIENCE-ORIENTED — Training Fidelity Layers

```
LAYER 1 — VISUAL FIDELITY:     Scene + Targets + Effects + FOV
LAYER 2 — KINESTHETIC FIDELITY: Weapon feel + Recoil + Motion + Trigger
LAYER 3 — COGNITIVE FIDELITY:   Scenarios + Difficulty + Decision pressure
LAYER 4 — ASSESSMENT:           Scoring + AAR + Progression
LAYER 5 — INFRASTRUCTURE:       Power + Network + Packaging + Maintenance
```

```
Topology: Layered stack — each layer builds on lower layers
Characteristic: Training-outcome-centric decomposition. Fidelity drives architecture.
Pros: Directly maps to customer value (training transfer). ICDM CSR criteria map cleanly.
Cons: Layer boundaries != physical subsystems. Implementation crosses layers.
```

### CARS Gate Decision

| Criterion | Variant A (SS) | Variant B (Flow) | Variant C (Experience) |
|-----------|:--------------:|:----------------:|:---------------------:|
| Manufacturing clarity | ★★★★★ | ★★☆☆☆ | ★★★☆☆ |
| Latency optimization | ★★★☆☆ | ★★★★★ | ★★☆☆☆ |
| Training transfer focus | ★★☆☆☆ | ★★★☆☆ | ★★★★★ |
| Team structure match | ★★★★★ | ★★☆☆☆ | ★★★☆☆ |
| ICDM CSR mapping | ★★★☆☆ | ★★★☆☆ | ★★★★★ |
| ICD definition | ★★★★★ | ★★★★☆ | ★★☆☆☆ |
| Existing work compatibility | ★★★★★ | ★★★☆☆ | ★★★☆☆ |

**Recommendation:** 
- **Primary: Variant A** (SS-oriented) — matches existing morpho work, team structure, ICD v1.5, and manufacturing reality.
- **Secondary lens: Variant C** (Experience) — use as evaluation framework (ICDM CSR mapping) overlaid on Variant A physical decomposition.
- Variant B insight: adopt the **latency budget chain** as a cross-cutting constraint tracked in ICD, not as primary decomposition.

---

## 5. SOLUTION-NEUTRAL TEST (§6.2)

**Essential Problem:** *"How to achieve positive training transfer for maritime weapon engagement within indoor simulation constraints?"*

**Test: Can ≥3 fundamentally different solution classes satisfy this?**

| # | Solution Class | Approach | Satisfies IFR? |
|---|---------------|----------|:--------------:|
| 1 | **Projection + Physical Mockup** (current concept) | 3D projection on screens + CNC weapon mockup + motion platform | ✅ |
| 2 | **VR Headset + Haptic Suit** | VR headset (Quest/Varjo) + haptic vest + force-feedback controller | ✅ (but fails instructor observability A7, isolation issue) |
| 3 | **AR Overlay + Real Weapon** (deactivated) | AR glasses overlay targets onto real room + deactivated weapon on real mount | ✅ (but fails SC-1 if weapon not fully deactivated) |
| 4 | **Dome Projection + Full-Scale Bridge** | Planetarium-style dome + 1:1 ship bridge section | ✅ (but fails SC-4 cost ≫$200K) |

**Result: ≥3 solution classes exist → essential problem is correctly abstracted.** Class 1 selected for strong reasons (instructor observability, physical fidelity, cost). VR (Class 2) rejected for instructor-can't-see and isolation concerns.

---

## 6. ICDM DSO PRE-RANKING FRAMEWORK

**DSO (Direct Synthesis Optimization) — to be applied in BB (Search):**

For each WP in the unified morphological matrix:
- **Quality Q (1-4):** How well does this WP satisfy the CSR target?
- **Risk R (1-4):** How mature/proven? (4=COTS, 1=new R&D)
- **DSO = Q × R** (1-16). ≥12=Strong, 6-11=Viable, ≤5=Weak.

**Pre-classification of known WP maturity (from existing morpho):**

| SF | Selected WP | Q (est.) | R (est.) | DSO | Notes |
|----|------------|:--------:|:--------:|:---:|-------|
| F1.1-1.2 Encoder | Rotary encoder 0.1° | 4 | 4 | **16** | COTS, proven |
| F1.4 Resistance | Magnetic powder brake | 4 | 4 | **16** | COTS |
| F1.6 Recoil | **TBD** (4 candidates) | **?** | **?** | **?** | **BB must evaluate** |
| F2.2 Ocean | FFT Gerstner procedural | 4 | 3 | **12** | Unity asset, needs integration |
| F2.3 Target AI | Layered behavior (0+1+2) | 3 | 3 | **9** | Custom dev, moderate risk |
| F2.5 Ballistic | V-SMASH 6DOF reuse | 4 | 4 | **16** | Proven, WX IP |
| F3.1 Projector | 3× short-throw | 4 | 4 | **16** | COTS |
| F4.1-4.2 Motion | 2-DOF electric linear | 4 | 3 | **12** | COTS actuators, custom frame |
| F7.3-7.4 MWI | NFC + 5-segment config | 4 | 3 | **12** | NFC=COTS, protocol=custom |

**BB instruction:** Sort morpho columns by DSO score (left=highest). Left-path = baseline concept.

---

## 7. BA DELIVERABLE SUMMARY

| Deliverable | Status |
|-------------|:------:|
| Solution-determining SFs (cascade × breadth × uncertainty) | ✅ Top 3: F1.6, F7.3-7.4, F2.3 |
| TRIZ contradictions (3 SFs) | ✅ 4 recoil candidates, layered AI architecture, MWI protocol |
| TESE trend analysis | ✅ 5 trends, WX well-positioned |
| CARS function structure variants (≥2) | ✅ 3 variants: A (SS), B (Flow), C (Experience) |
| CARS selection | ✅ Primary A + secondary lens C |
| Solution-neutral test (≥3 classes) | ✅ 4 classes identified |
| ICDM DSO pre-ranking framework | ✅ Q×R scoring ready for BB |
| New recoil candidates from TRIZ | ✅ WP-E Hybrid, WP-F Mass-enhanced solenoid |

---

## 8. CEO CHECKPOINT ITEMS

1. **Recoil trade study priority:** WP-F (masselotte solenoid) = novel candidate from TRIZ #3. Include in SS1 PoC 2026-05-07?
2. **Target AI scope:** Layers 0+1+2 for Phase 1, Layer 3+4 for Phase 2 upgrade. Confirm?
3. **CARS selection:** Primary = Variant A (SS-oriented), secondary lens = Variant C (Experience). Confirm?
4. **Fictitious constraints:** M-04 (nhôm 40×40), P-02 (WX manufacturing) — confirm won't limit BB search?

---

*BA Problem Frame complete. Ready for Block BB: Working Principle Search.*
