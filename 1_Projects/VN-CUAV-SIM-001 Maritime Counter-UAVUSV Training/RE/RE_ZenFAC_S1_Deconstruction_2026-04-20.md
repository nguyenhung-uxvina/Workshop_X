---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 1 — DECONSTRUCT (OSINT-based)
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode mecha
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 1: DECONSTRUCT — Zen FAC Simulator (OSINT)
## 1A + 1B + 1C + 1M Combined (no physical artifact)

**Date:** 2026-04-20
**RE Method:** OSINT-only (public sources: idrw.org, bharatshakti.in, zentechnologies.com, halldale.com, I/ITSEC reports)
**Confidence disclaimer:** All inferences from public marketing/press. No physical inspection. Many specs INFERRED from product family patterns + industry norms.

---

## 1A — ARTIFACT DECONSTRUCTION (4 Layers from OSINT)

### Layer 1 — Geometric & Dimensional (OSINT-inferred)

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|:----------:|
| Installation footprint | ~40-60 m² (360° projection + 6-DOF platform + IOS) | Industry norm for 360° cylindrical sim | L |
| Projection cylinder diameter | ~4-6 m (360° immersive, crew of 2-4 inside) | Similar systems (Kongsberg, CAE) | L |
| Motion platform size | ~2×2 m base, 6-DOF Stewart platform | Industry standard for ship sim | M |
| Weapon station envelope | ~1.5×1.0×1.5 m (MMG mount + seat) | Zen MMG Sim product photos | M |
| Overall system weight | ~2,000-5,000 kg (platform + structure + projection) | Industry estimate | L |
| Ceiling height required | ~3.5-4.5 m (projection dome clearance) | 360° cylindrical requirement | M |

### Layer 2 — Material & Process Inference

| Component | Material (inferred) | Process | Confidence | VN Capability |
|-----------|-------------------|---------|:----------:|:-------------:|
| Motion platform frame | Welded steel (S355/equivalent) | CNC + welding | M | ✅ Available |
| Weapon replica body | Cast aluminum or CNC aluminum | CNC machining | M | ✅ Available |
| Projection screen | Rear-projection seamless cylindrical screen | Specialty supplier (Barco/igloo/custom) | M | ⚠️ Import |
| Control console | Sheet metal + CNC + marine-grade switches | Standard fabrication | M | ✅ Available |
| Motion actuators | Electric linear actuators (6×) | Precision assembly | H | ⚠️ Import actuators |
| Haptic controls | Custom electromechanical (helm, throttle) | Precision machining + assembly | M | ⚠️ Limited |
| Recoil mechanism | Electromechanical (motor/cam or solenoid array) | Precision assembly | M | ✅ Buildable |
| Electrical cabinets | Standard 19" rack, sheet metal | Standard | H | ✅ Available |

### Layer 3 — Functional Decomposition (OSINT)

**Component inventory (inferred from public info):**

| ID | Component | Function | Domain | Criticality |
|----|-----------|----------|:------:|:-----------:|
| C01 | 6-DOF Stewart motion platform | Ship motion simulation (roll, pitch, heave, surge, sway, yaw) | MECH | HIGH |
| C02 | 360° cylindrical projection system | Visual immersion (ocean, targets, sky) | ELEC | HIGH |
| C03 | Multiple projectors (6-8 est.) | Image generation for 360° coverage | ELEC | HIGH |
| C04 | Render cluster (multi-GPU) | Real-time scene rendering | SW | HIGH |
| C05 | MMG weapon replica | Crew-served weapon handling training | MECH | HIGH |
| C06 | RWS weapon station replica | Remote weapon station training | MECH+ELEC | HIGH |
| C07 | Electromechanical recoil system | Recoil force simulation | MECH+ELEC | MEDIUM |
| C08 | Haptic helm control | Ship steering feedback | MECH+ELEC | MEDIUM |
| C09 | Haptic throttle control | Propulsion control feedback | MECH+ELEC | MEDIUM |
| C10 | EO/IR sensor replica | Electro-optical targeting training | ELEC+SW | MEDIUM |
| C11 | Navigation console | Nav instruments simulation | ELEC+SW | MEDIUM |
| C12 | Communication console | Radio/intercom simulation | ELEC+SW | LOW |
| C13 | AI Instructor Operator Station | Adaptive training management | SW | HIGH |
| C14 | Scenario generation engine | Dynamic scenario creation | SW | HIGH |
| C15 | Ballistic computation module | Projectile trajectory simulation | SW | HIGH |
| C16 | Ship dynamics model | Hydrodynamic behavior simulation | SW | HIGH |
| C17 | Sea state generator | Wave, wind, current modeling | SW | MEDIUM |
| C18 | Sound system | Ambient + weapon sound effects | ELEC | LOW |
| C19 | Motion control computer | 6-DOF platform servo control | CTRL | HIGH |
| C20 | Weapon control interface | Encoder/switch → sim engine | CTRL | HIGH |
| C21 | Safety system | E-stop, motion limits, overload | CTRL | HIGH |
| C22 | Power distribution | UPS + PDU + grounding | ELEC | MEDIUM |
| C23 | Network backbone | Internal LAN (render→IOS→motion→weapon) | ELEC | MEDIUM |
| C24 | Data recording system | Session recording + AAR playback | SW | MEDIUM |

**Total: 24 components identified (OSINT), estimated ~40-60 actual (hidden subcomponents)**

### Layer 4 — Hidden Design Intent (OSINT-inferred)

| Observation | Inferred Design Intent | Confidence | WX Relevance |
|------------|----------------------|:----------:|:------------:|
| 6-DOF motion (not 2-DOF) | **FULL ship handling training**, not just gunnery. Ship motion is PRIMARY, weapon is SECONDARY | H | HIGH — WX LITE uses 2-DOF (gunnery-first, motion-secondary). Different design philosophy |
| AI-enabled IOS | **Reduce instructor dependency** — AI adapts training without human IOS intervention. Targets unmanned training centers | H | HIGH — WX ACH aligns. WX should match this capability |
| Haptic controls (helm + throttle) | **Multi-role training** — same sim for helmsman + gunner + navigator. Revenue from multiple training curricula | M | MEDIUM — WX is weapon-focused. Multi-role = FULL/CORTEX variants |
| 360° projection (not VR) | **Crew coordination** — multiple trainees see same scene simultaneously. Instructor observes directly | H | HIGH — validates WX's projection choice over VR |
| EO/IR sensor replica | **Night/thermal engagement** — FAC operates day+night, needs thermal targeting | M | MEDIUM — WX Phase 1 is day-only. Night/IR = v2.0 |
| Modified in-service weapons (AWeSim) | **Authenticity maximization** — use REAL weapon modified for sim, not replica. Highest possible fidelity | H | HIGH — WX uses CNC replica (cheaper but lower fidelity). Decision validated by C2 analysis |
| ARI acquisition (76%→100%) | **Vertical integration** — Zen bought naval sim expertise rather than building internally. Speed > build | H | HIGH — WX builds internally (slower but full IP ownership) |

---

## 1B — MATERIAL & PROCESS DETECTIVE

### Table E — Vietnam Manufacturing Capability Gap (Key Components)

| Component | Zen Approach (inferred) | VN Alternative | Gap | Priority |
|-----------|------------------------|---------------|:---:|:--------:|
| 6-DOF Stewart platform | Industrial-grade linear actuators (Moog/Parker class) | 2-DOF electric (WX current). 6-DOF = import actuators + custom frame | ❌→⚠️ | LOW (WX uses 2-DOF) |
| 360° cylindrical screen | Specialty rear-projection screen (igloo Vision / similar) | 3× flat screens (WX current) or curved screen import | ❌ for cylindrical | LOW (WX uses flat) |
| Projectors (6-8×) | High-lumen short-throw (Barco/Christie class) | Optoma ZU607TST × 3 (WX choice) | ✅ different scale | N/A |
| Electromechanical recoil | Motor + cam or linear actuator array | Solenoid (WX current) or pneumatic (contingency) | 🔄 Different approach | HIGH |
| Haptic controls | Custom force-feedback servos | Standard marine switches (WX current) | ⚠️ Limited | LOW for LITE |
| Render cluster | Multi-GPU workstation(s) | Single GPU PC (WX current) | ✅ Scale difference | N/A |
| AI IOS software | Proprietary (Zen/ARI developed) | WX Unity + custom AI (ACH approach) | ✅ Own development | HIGH |
| Ship dynamics model | Proprietary hydrodynamic model | Unity physics + custom (WX approach) | ✅ Own development | HIGH |
| Weapon replica | Modified real weapon OR cast/CNC replica | CNC aluminum mockup (WX approach) | ✅ Available | HIGH |

**Strategic bottleneck:** NONE for WX. Zen's approach requires more expensive components (6-DOF, 360° screen, multiple projectors) but WX's LITE design deliberately avoids these cost drivers. WX's gaps are DIFFERENT from Zen's architecture.

---

## 1C — TOLERANCE & PERFORMANCE (OSINT-inferred)

### Critical Performance Parameters

| Parameter | Zen FAC (inferred) | WX LITE Target | Gap | Confidence |
|-----------|-------------------|---------------|:---:|:----------:|
| Visual latency (render→display) | ≤20 ms (industry standard for 360°) | ≤33 ms (30 Hz) | WX acceptable | M |
| Motion latency (command→movement) | ≤50 ms (6-DOF servo control) | ≤100 ms (2-DOF) | WX acceptable for gunnery | M |
| Weapon encoder resolution | ≤0.05° (servo-driven traverse) | ±0.1° (WX spec R-023) | WX acceptable | M |
| Recoil force | 50-150 N (electromechanical, varies by weapon) | ≥25N (target), 8N (current solenoid) | **GAP — WX 2-6× lower** | M |
| Recoil cycle rate | 600-900 RPM equivalent (12.7mm = 600 RPM) | Matches RPM via solenoid pulse timing | WX achievable | M |
| FOV | 360° (cylindrical projection) | 180° (3-screen) | Design choice, not gap | H |
| Resolution (ppd) | ~15-25 ppd (HD × 6-8 projectors over 360°) | ~30 ppd (FHD × 3 over 180°) | **WX higher ppd** | M |
| Motion DOF | 6 (roll, pitch, heave, surge, sway, yaw) | 2 (roll, pitch) | Design choice (ship sim vs gunnery) | H |
| Target detection range | UAV at 1-5 km (EO/IR) | UAV at 0.5-3 km (visual only LITE) | Different scope | M |
| Scenario complexity | Multi-threat (surface + air + sub-surface) | C-UAV + C-USV only | Design choice (niche) | H |
| Seat vibration | Yes (integrated with motion platform) | Separate seat shaker (if any) | MEDIUM gap | M |
| Sound realism | Multi-channel surround (weapon + engine + sea + comms) | Basic stereo/surround | LOW priority gap | M |

### Performance Insight

**Zen over-specs for full FAC training.** Their 6-DOF + 360° + EO/IR + haptic controls serve a DIFFERENT use case (complete ship crew training). WX's LITE intentionally under-specs these areas to serve a DIFFERENT use case (C-UAS gunnery at $50-70K).

**Only genuine performance gap: RECOIL FORCE.** Zen's 50-150N electromechanical vs WX's 8N solenoid (target 25N). This is the same gap identified in COMPARE C2. SS1 PoC (2026-05-07) is the critical test.

---

## 1M — DOMAIN DECOMPOSITION (MECHA — 4 Domains)

### Domain 1 — Mechanical

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Motion platform | C01 (Stewart platform, 6 actuators, frame, bearings) | Ship motion simulation | HIGH |
| Weapon station | C05 (MMG replica), C06 (RWS replica), mounting hardware | Weapon handling training | MEDIUM |
| Recoil mechanism | C07 (electromech actuator, return spring, guide rails) | Force feedback during firing | MEDIUM |
| Haptic controls | C08 (helm), C09 (throttle) — force-feedback servos | Ship control tactile feedback | MEDIUM |
| Structure/enclosure | Projection dome frame, floor platform, cable routing | Physical housing | LOW |
| Seat/ergonomics | Operator seat on motion platform, adjustable mounts | Human interface | LOW |

**Mech complexity:** MEDIUM-HIGH (6-DOF is the complex item; weapon station is straightforward CNC/casting)

### Domain 2 — Electronic

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Projection system | C02 (screen), C03 (6-8 projectors), edge blending HW | 360° visual output | HIGH |
| Render cluster | C04 (multi-GPU PCs, video splitter/warper) | Real-time rendering | MEDIUM |
| EO/IR sensor | C10 (IR camera replica + synthetic feed) | Thermal targeting training | MEDIUM |
| Navigation instruments | C11 (radar display, compass, GPS, depth sounder replicas) | Ship nav training | LOW |
| Communications | C12 (radio panels, intercom) | Team comms training | LOW |
| Sound system | C18 (speakers, subwoofer, amp) | Audio immersion | LOW |
| Network | C23 (switches, cables, possibly DIS/HLA gateway) | Internal data transport | LOW |
| Power | C22 (UPS, PDU, grounding, emergency power) | Reliable power | LOW |

**Elec complexity:** MEDIUM (projection system + render cluster are the complex items)

### Domain 3 — Software

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Simulation engine | C14 (scenario gen), C16 (ship dynamics), C17 (sea state) | Core simulation loop | **VERY HIGH** |
| AI training engine | C13 (AI IOS — adaptive difficulty, performance tracking, module generation) | Intelligent tutoring | **VERY HIGH** |
| Ballistics | C15 (projectile trajectory, wind, ship motion compensation) | Weapon accuracy simulation | HIGH |
| Visual rendering | Part of C04 (3D engine, ocean shader, target models, weather effects) | Visual output generation | HIGH |
| EO/IR simulation | Synthetic thermal/NV imagery generation | Sensor training | MEDIUM |
| AAR/recording | C24 (session record, playback, analytics, scoring) | Debrief and assessment | MEDIUM |
| IOS application | Instructor UI (scenario setup, monitoring, scoring, AI override) | Training management | MEDIUM |
| Embedded OS/drivers | Platform OS, device drivers, hardware abstraction | System infrastructure | LOW |

**SW complexity:** VERY HIGH — AI-enabled IOS + proprietary ship dynamics + multi-sensor scene generation = the most complex domain

### Domain 4 — Control

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Motion control | C19 (6-DOF servo controller, washout algorithm, actuator feedback loops) | Platform follows ship dynamics | HIGH |
| Weapon control | C20 (encoder read, trigger detect, recoil command, traverse tracking) | Weapon I/O mapping | MEDIUM |
| Safety system | C21 (E-stop chain, actuator limit switches, overload detection, person detection) | Platform safety | HIGH |
| Haptic control | Force-feedback servo controllers (helm, throttle) | Control feel simulation | MEDIUM |
| System orchestration | Master controller (sync render↔motion↔weapon↔sound) | System-wide timing | HIGH |

**Ctrl complexity:** HIGH — 6-DOF washout algorithms + safety-critical motion control

### Cross-Domain Mapping Matrix

| Function | Mech % | Elec % | SW % | Ctrl % | Integration Risk |
|----------|:------:|:------:|:----:|:------:|:----------------:|
| Ship motion simulation | 40 | 10 | 30 | 20 | HIGH (mech↔ctrl sync) |
| Visual scene generation | 5 | 35 | 55 | 5 | MEDIUM (render↔projection) |
| Weapon gunnery training | 40 | 15 | 35 | 10 | MEDIUM (mech↔sw sync) |
| EO/IR targeting | 5 | 30 | 60 | 5 | LOW |
| AI adaptive training | 0 | 5 | 90 | 5 | LOW (SW-dominant) |
| Ship handling training | 30 | 10 | 40 | 20 | HIGH (haptic↔dynamics) |
| AAR/debrief | 0 | 10 | 85 | 5 | LOW |
| Safety | 20 | 20 | 20 | 40 | **VERY HIGH** (all domains) |
| **OVERALL** | **~20%** | **~17%** | **~48%** | **~15%** | |

### Domain Allocation Comparison: Zen FAC vs WX LITE

| Domain | Zen FAC | WX LITE (SA doc) | Delta | Explanation |
|--------|:-------:|:----------------:|:-----:|-------------|
| Mechanical | ~20% | 34% | +14% | WX more mech-heavy (CNC weapon station vs software-dominant Zen) |
| Electronic | ~17% | 27% | +10% | WX relies more on COTS electronics vs Zen custom |
| Software | ~48% | 46% (incl. SW) | -2% | Similar — both SW-dominant products |
| Control | ~15% | — (absorbed in SW) | — | Zen has separate control domain; WX integrates into SW |

**Key insight:** Zen's FAC Sim is SOFTWARE-DOMINANT (~48% SW). The expensive mechanical hardware (6-DOF, haptic controls) accounts for only ~20%. WX's architecture is more balanced (34% mech) because WX's mechanical weapon station is a bigger proportion of a smaller, cheaper system.

### System Boundary & Black Box

```
EXTERNAL ENTITIES:
┌─────────────────────────────────────────────────┐
│  Trainees (2-4 crew: helmsman, gunner, nav, CO) │
│  Instructor (IOS operator or AI-delegated)       │
│  Power (3-phase, UPS-backed)                     │
│  External sim federation (DIS/HLA — optional)    │
│  Maintenance technician                          │
└─────────────────────────────────────────────────┘

SYSTEM INPUTS:                    SYSTEM OUTPUTS:
- Trainee weapon actions     →    → Visual scene (360°)
- Trainee helm/throttle      →    → Motion cues (6-DOF)
- Trainee nav actions        →    → Recoil forces
- Instructor scenario setup  →    → Haptic feedback
- Power (AC)                 →    → Sound effects
                                  → AAR data/reports
                                  → Training scores
                                  → AI performance analysis
```

**Behavioral Modes:**
1. **OFF** — system powered down
2. **STARTUP** — boot sequence, self-test, projector warm-up (~5-10 min)
3. **STANDBY** — ready, no scenario loaded
4. **CONFIGURE** — instructor/AI sets scenario parameters
5. **RUNNING** — active training exercise
6. **PAUSED** — exercise suspended (instructor override)
7. **DEBRIEF** — AAR playback, scoring review
8. **MAINTENANCE** — diagnostic mode, calibration
9. **EMERGENCY** — E-stop activated, all motion halted

---

## STAGE 1 SUMMARY

```
=== STAGE 1 COMPLETE — Zen FAC Simulator DECONSTRUCTION (OSINT) ===

Components catalogued: 24 (estimated 40-60 actual including sub-components)
Materials identified: 8 major categories (avg 60% confidence — OSINT limitation)
Critical dimensions: OSINT-limited (no physical measurements)
[MECHA] Domains mapped: Mech(~20%) / Elec(~17%) / Sw(~48%) / Ctrl(~15%)
Unknown items requiring physical inspection: ALL physical parameters
Strategic bottlenecks (VN capability gap for WX): NONE (WX uses different architecture)

KEY FINDINGS:
1. Zen FAC = SOFTWARE-DOMINANT system (~48% SW). HW is expensive but not where the intelligence lives
2. 6-DOF + 360° + EO/IR + haptic = FULL SHIP TRAINING. WX LITE = gunnery-only (different scope)
3. AI IOS = Zen's primary differentiator. WX must match with ACH approach
4. ONLY genuine gap: recoil force (Zen 50-150N vs WX 8-25N target)
5. ARI acquisition = Zen bought naval sim capability (speed > build). WX builds internally (IP > speed)

⚠️ OSINT CONFIDENCE CAVEAT:
All specs inferred from marketing/press. Physical parameters (dimensions, forces, latencies) are
ESTIMATES based on industry norms and similar systems. NO physical verification possible.
Confidence: HIGH for architecture/approach, LOW for specific values.

TOP 5 UNKNOWNS (need physical access or deeper intel):
1. Exact recoil force magnitude and mechanism type (motor-cam? linear actuator? solenoid array?)
2. Ship dynamics model fidelity (which hydrodynamic coefficients? validated against what ship class?)
3. AI IOS algorithm architecture (rule-based? ML? RL? what training data?)
4. Render engine identity (proprietary? modified COTS? game engine?)
5. System price breakdown (HW vs SW vs integration vs support)

CEO: approve Stage 1 deconstruction to proceed to Stage 2?
```

---

## SOURCES

- [Zen FAC Sim announcement — idrw.org](https://idrw.org/zen-technologies-unveils-indias-first-ai-enabled-fast-attack-craft-simulator-revolutionizing-naval-training/)
- [Zen FAC Sim — bharatshakti.in](https://bharatshakti.in/zen-technologies-unveils-fast-attack-craft-ai-simulator-for-naval-training/)
- [Zen FAC Sim — indiandefensenews.in](https://www.indiandefensenews.in/2025/09/zen-technologies-unveils-fast-attack.html)
- [ARI acquisition — bharatshakti.in](https://bharatshakti.in/zen-technologies-completes-full-acquisition-of-ari-expands-into-naval-simulation-domain/)
- [Zen I/ITSEC 2025 — morningstar.com](https://www.morningstar.com/news/pr-newswire/20251201ln36103/zen-technologies-usa-unveils-its-next-generation-ai-enabled-live-and-virtual-simulation-training-capabilities-at-iitsec-2025)
- [Zen IADCS — bharatshakti.in](https://bharatshakti.in/zen-technologies-unveils-game-changing-air-defence-simulator/)
- [Zen product portfolio — zentechnologies.com](https://www.zentechnologies.com/products)
- [Halldale FAC article](https://www.halldale.com/defence/ai-enabled-fac-simulator-debuts-navy)
- [COMPARE C1-C4 dossiers (this session)](../Phase2-Concept/_portfolio/)
