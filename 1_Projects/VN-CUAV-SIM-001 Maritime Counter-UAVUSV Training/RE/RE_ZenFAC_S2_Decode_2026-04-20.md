---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2 — DECODE (OSINT + NLM)
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode mecha
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
notebook: re-zenfac (9275927a-32de-4c8d-9211-9598cf850e13)
---

# RE STAGE 2: DECODE — Zen FAC Simulator
## 2A Requirements Reconstruction + 2B Function Structure + 2M Cross-Domain

**Date:** 2026-04-20
**NLM notebook:** re-zenfac (14 useful sources, 2 deep queries completed)
**NLM conversation:** 0c363d93-9d9c-47c9-84b7-067f5b8a4554

---

## ⚠️ CRITICAL INTEL FROM NLM (session discovery)

**Zen has a Counter-UAS Simulation Solution** — showcased at I/ITSEC 2025 (Booth #1611, Orlando).
- Listed alongside FAC Sim in "Naval & Maritime Simulation Suite"
- Described as "high-fidelity solution for training Counter-UAS operators"
- Uses Zen's "Battle-Proven Counter-UAS solution" as basis

**Impact on WX:** The 12-24 month window from COMPARE C3 may be SHORTER. Zen already has C-UAS sim capability. Need to determine: is this maritime C-UAS or land-based? Is it integrated into FAC Sim or standalone?

**NLM also corrected:** Fog density / EW disruption adaptation = IADCS (air defense sim), NOT FAC Sim. FAC Sim AI adapts difficulty levels and generates improvement modules, but specific environmental manipulation evidence only for IADCS.

---

## 2A — RECONSTRUCTED REQUIREMENTS (17 P&B Categories)

From NLM queries + Stage 1 OSINT. Confidence = H/M/L based on source evidence.

| Cat# | P&B Category | ID | Requirement (Zen FAC) | D/W | Evidence | Conf. |
|:----:|-------------|:---:|----------------------|:---:|----------|:-----:|
| 1 | Geometry | R-001 | 360° cylindrical visual envelope | D | All sources confirm 360° | H |
| 1 | Geometry | R-002 | 6-DOF motion platform footprint ≤ 3×3m base | W | Industry standard inference | L |
| 1 | Geometry | R-003 | Crew station for 2-4 operators simultaneously | D | "combat crews", "team coordination" | M |
| 2 | Kinematics | R-004 | 6 degrees of freedom: roll, pitch, heave, surge, sway, yaw | D | All sources confirm 6-DOF | H |
| 2 | Kinematics | R-005 | Weapon traverse: azimuth 360°, elevation -15°/+85° (MMG typical) | D | "weapon engagement" implied | M |
| 3 | Forces | R-006 | Recoil force replicating MMG + RWS firing | D | "recoil effects", "recoil-simulating" | H |
| 3 | Forces | R-007 | Haptic feedback on helm + throttle controls | D | "haptic-feedback propulsion and steering" | H |
| 3 | Forces | R-008 | Motion platform payload ≥ 500 kg (platform + crew + equipment) | D | 2-4 crew + equipment inference | M |
| 4 | Energy | R-009 | System power: 3-phase AC, UPS-backed | W | Industry standard | L |
| 4 | Energy | R-010 | Continuous operation ≥ 8 hours/day | W | Training center use pattern | L |
| 5 | Material | R-011 | Weapon replica materials matching weight/feel of real MMG/RWS | D | "replication of medium machine guns" | M |
| 6 | Signals | R-012 | EO/IR sensor feed simulation (day + thermal) | D | "electro-optical/infrared targeting" confirmed | H |
| 6 | Signals | R-013 | Navigation instrument simulation (radar, compass, GPS, depth) | D | "ship handling, navigation" training | M |
| 6 | Signals | R-014 | Communication system simulation (radio, intercom) | W | "combat crews" implies comms | M |
| 6 | Signals | R-015 | Encoder/sensor feedback on all weapon axes | D | "fire-control systems" implies closed-loop | M |
| 7 | Safety | R-016 | Emergency stop system (E-stop) for motion platform | D | 6-DOF safety requirement (mandatory) | H |
| 7 | Safety | R-017 | Motion envelope limits (prevent collision/injury) | D | 6-DOF safety requirement (mandatory) | H |
| 7 | Safety | R-018 | Overload protection on actuators | D | Industry standard for 6-DOF | M |
| 8 | Ergonomics | R-019 | Authentic ship control layout (helm, throttle, weapon station) | D | "replicate authentic shipboard handling" | H |
| 8 | Ergonomics | R-020 | Adjustable seating for varying operator sizes | W | Standard ergonomic requirement | L |
| 9 | Production | R-021 | Modular architecture for scalability | D | "modular architecture allows scalability" | H |
| 9 | Production | R-022 | Single-station to multi-ship networked configuration | D | "single-station setups to multi-ship networked exercises" | H |
| 10 | Quality | R-023 | Visual rendering ≥ 30 fps sustained | D | Real-time simulation standard | M |
| 10 | Quality | R-024 | Motion latency ≤ 50 ms | D | 6-DOF servo control standard | M |
| 11 | Assembly | R-025 | System integrable with ARI Multi-Simulator Complex | W | "interconnected training ecosystems" | M |
| 12 | Transport | R-026 | — | — | Not specified in sources | — |
| 13 | Operation | R-027 | Scenario types: coastal defense, counter-piracy, fast interdiction, asymmetric threats | D | Multiple sources confirm | H |
| 13 | Operation | R-028 | Multi-sea-state simulation (calm to heavy) | D | "various sea states" | H |
| 13 | Operation | R-029 | Day/night operation with EO/IR transition | D | "EO/IR targeting systems" | M |
| 14 | Maintenance | R-030 | Projector replacement accessible | W | Multi-projector system maintenance | M |
| 14 | Maintenance | R-031 | Software update mechanism (scenario + AI model) | W | AI continuous improvement implies updates | M |
| 15 | Recycling | — | Not specified | — | — | — |
| 16 | Cost | R-032 | Unit price $200-500K (estimated) | W | Industry benchmark | L |
| 17 | Schedule | R-033 | Development timeline: ~18-24 months (ARI acquisition Feb 2025 → announce Sep 2025) | W | Timeline inference | M |

**Total: 33 requirements reconstructed (22D + 8W + 3 empty categories)**
**Confidence: 10 HIGH, 15 MEDIUM, 8 LOW**

### AI/Software Requirements (extracted separately — highest value for WX)

| ID | AI Requirement | Evidence | Conf. |
|:--:|---------------|----------|:-----:|
| AI-01 | AI IOS adapts difficulty to individual crew proficiency | "customises difficulty levels to match individual crew skills" | H |
| AI-02 | Live performance monitoring during exercises | "live monitoring" + "continuous analysis" | H |
| AI-03 | Automatic weakness identification | "highlights weaknesses" | H |
| AI-04 | Targeted improvement module generation | "generates customized improvement modules" | H |
| AI-05 | Dynamic scenario generation | "dynamic scenario generation" (I/ITSEC text) | M |
| AI-06 | Data-driven performance assessment (not subjective) | "data-driven performance assessments" | H |
| AI-07 | Progressive difficulty scaling (novice → advanced) | "novice navigation to advanced counter-swarm tactics" (IADCS text, inferred for FAC) | M |
| AI-08 | Combat Readiness Score (CRS) metric | Confirmed for IADCS. FAC may use similar | L |
| AI-09 | After Action Review (AAR) recording + playback | Confirmed for IADCS. FAC likely similar | M |

---

## 2B — FUNCTION STRUCTURE (6-Flow, Solution-Neutral)

### Black Box (from NLM)

```
INPUTS:                              OUTPUTS:
─────────────────────                ─────────────────────
E-IN: AC power (3-phase)        →    E-OUT: Heat (actuators, projectors, PCs)
M-IN: (none — closed system)    →    M-OUT: (none)
S-IN: Crew physical actions     →    S-OUT: 360° visual scene
      (helm, throttle, weapon)        Motion cues (6-DOF)
                                      Recoil forces
                                      Haptic feedback
                                      Sound effects
D-IN: Scenario parameters      →    D-OUT: Performance data
      (from IOS/AI)                   AAR recordings
                                      Training scores
C-IN: AI adaptation triggers    →    C-OUT: Difficulty adjustments
      (performance thresholds)        Improvement modules
T-IN: User authentication      →    T-OUT: Session integrity
      Safety system status            E-stop assurance
```

### Sub-Function Decomposition (Solution-Neutral)

| SF | Function (verb-noun) | 6-Flow | Domain | Criticality |
|:--:|---------------------|:------:|:------:|:-----------:|
| SF-01 | Convert electrical energy to spatial motion | E | MECH+CTRL | HIGH |
| SF-02 | Render visual environment from simulation state | S→E | ELEC+SW | HIGH |
| SF-03 | Generate weapon recoil force on trigger event | E→S | MECH+CTRL | HIGH |
| SF-04 | Compute ship hydrodynamic response to inputs | C | SW | HIGH |
| SF-05 | Compute ballistic trajectory from weapon state | C | SW | HIGH |
| SF-06 | Adapt training difficulty from performance data | D→C | SW (AI) | **VERY HIGH** |
| SF-07 | Provide haptic resistance on control interfaces | E→S | MECH+ELEC | MEDIUM |
| SF-08 | Simulate EO/IR sensor imagery | S→D | SW+ELEC | MEDIUM |
| SF-09 | Generate maritime environment (sea, weather, time) | C | SW | MEDIUM |
| SF-10 | Record session data for replay and analysis | D | SW | MEDIUM |
| SF-11 | Detect and respond to safety violations | T | CTRL | HIGH |
| SF-12 | Synchronize all subsystems in real-time | C→T | CTRL | HIGH |
| SF-13 | Network multiple simulator instances | D | SW+ELEC | LOW (optional) |
| SF-14 | Generate threat entities (targets, hostiles) | C | SW | HIGH |
| SF-15 | Simulate communication channels | S | SW+ELEC | LOW |

### Solution-Determining Sub-Function

**SF-06: Adapt training difficulty from performance data (AI IOS)**

NLM analysis confirms: "If the mechanism that generates and adapts the scenario changes, it cascades changes to almost all other sub-functions."

- If AI changes → motion platform must respond to new sea states
- If AI changes → rendering must display new threats
- If AI changes → scoring baselines must update
- If AI changes → every downstream function recalibrates

**WX implication:** WX's ACH approach (AI compensates hardware) is architecturally aligned. SF-06 equivalent in WX = ACH Layer 1 (lead angle coaching). This MUST be in v1.0.

### RE Complexity Classification

| SF | WX Prior Art | Complexity | Depth in Stage 3 |
|:--:|-------------|:----------:|:-----------------:|
| SF-01 | YES (2-DOF motion, simpler) | GREEN | SHALLOW |
| SF-02 | YES (Unity 3-screen) | GREEN | SHALLOW |
| SF-03 | PARTIAL (solenoid, lower force) | **AMBER** | MODERATE |
| SF-04 | PARTIAL (Unity physics) | AMBER | MODERATE |
| SF-05 | YES (ray-trace ballistics) | GREEN | SHALLOW |
| SF-06 | PARTIAL (ACH planned, not built) | **RED** | DEEP |
| SF-07 | NO (standard switches) | AMBER | MODERATE |
| SF-08 | NO (day-only LITE) | RED | DEEP (but deferred to v2) |
| SF-09 | PARTIAL (Unity ocean shader) | AMBER | MODERATE |
| SF-10 | PARTIAL (AAR planned) | AMBER | MODERATE |
| SF-11 | YES (basic E-stop) | GREEN | SHALLOW |
| SF-12 | PARTIAL (Unity main loop) | AMBER | MODERATE |
| SF-13 | NO (standalone LITE) | RED | DEEP (deferred to CORTEX) |
| SF-14 | PARTIAL (UAV behavior from D4 research) | AMBER | MODERATE |
| SF-15 | NO | RED | DEEP (deferred) |

**OVERALL RE COMPLEXITY: AMBER**
- GREEN: 4 SFs (27%) → WX pattern library
- AMBER: 7 SFs (47%) → selective learning
- RED: 4 SFs (27%) → but 3 of 4 deferred (EO/IR, networking, comms)

**Only RED SF requiring immediate action: SF-06 (AI adaptive training)**

---

## 2M — CROSS-DOMAIN ANALYSIS

### Cross-Domain Function Allocation (Zen FAC)

| Function | Mech | Elec | SW | Ctrl | Notes |
|----------|:----:|:----:|:--:|:----:|-------|
| Ship motion (SF-01) | 40% | 10% | 30% | 20% | Stewart platform mechanics + servo control |
| Visual rendering (SF-02) | 5% | 35% | 55% | 5% | Projectors (elec) + engine (SW) dominant |
| Weapon recoil (SF-03) | 50% | 15% | 20% | 15% | Electromech actuator (mech) + timing (ctrl) |
| Ship dynamics (SF-04) | 0% | 0% | 95% | 5% | Pure computation |
| Ballistics (SF-05) | 0% | 0% | 95% | 5% | Pure computation |
| **AI IOS (SF-06)** | 0% | 5% | **90%** | 5% | **SW-dominant = WX can match** |
| Haptic controls (SF-07) | 40% | 30% | 15% | 15% | Force-feedback servos |
| EO/IR sim (SF-08) | 5% | 25% | 65% | 5% | Synthetic image generation |

### Key Insight for WX

**SF-06 (AI IOS) is 90% software.** This means:
- WX CAN match Zen's AI capability with software investment alone
- No expensive hardware required for AI coaching
- WX's Unity platform + ACH principle = viable path to AI IOS equivalent
- WX advantage: ACH = AI compensates for commodity hardware → AI IS the product, not the hardware

---

## STAGE 2 SUMMARY

```
=== STAGE 2 COMPLETE — Zen FAC Simulator DECODED ===

Requirements reconstructed: 33 across 14/17 P&B categories (22D, 8W, 3 empty)
  Confidence: 10H / 15M / 8L
AI requirements: 9 (6 HIGH confidence)
Sub-functions (6-flow): 15 total
  Solution-determining SF: SF-06 (AI adaptive training) — 90% SW
RE Complexity: AMBER (4 GREEN / 7 AMBER / 4 RED, 3 RED deferred)
NLM notebook: re-zenfac, 14 sources, 2 deep queries

⚠️ CRITICAL DISCOVERY: Zen has "Counter-UAS Simulation Solution" at I/ITSEC 2025!
   Window may be shorter than 12-24 months estimated in COMPARE C3.
   Action: deeper investigation needed (land-based or maritime? standalone or FAC-integrated?)

KEY FINDINGS FOR WX PHASE 3:
1. AI IOS = 90% SW → WX can match without HW investment
2. SF-06 (AI) is solution-determining → WX ACH Layer 1 must be in v1.0
3. Zen FAC is FULL ship training (6-DOF + helm + nav). WX LITE = gunnery-only → different scope
4. Recoil remains ONLY mechanical gap (Zen electromech vs WX solenoid)
5. Zen C-UAS sim exists → competitive watch frequency should increase from quarterly to MONTHLY

CEO ACTIONS REQUIRED:
1. ✅ Validate D/W classification (22D + 8W)
2. ✅ Confirm SF-06 as solution-determining
3. ✅ Approve AMBER RE complexity classification
4. ⚠️ DECISION: Increase Zen competitive watch from quarterly to MONTHLY given C-UAS sim discovery
5. ⚠️ DECISION: Should WX accelerate LITE v1.0 timeline?

CEO: approve Stage 2 to proceed to Stage 3?
```

---

## SOURCES

NLM notebook `re-zenfac` — 14 sources, 2 conversation queries.
Key sources used by NLM: bharatshakti.in (FAC + ARI), indiandefensenews.in, halldale.com, businessworld.in, zentechnologies.com products, ADU I/ITSEC 2025.
