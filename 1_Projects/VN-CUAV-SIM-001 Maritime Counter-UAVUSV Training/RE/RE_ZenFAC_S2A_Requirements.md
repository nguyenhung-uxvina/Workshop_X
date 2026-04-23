---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2A — Requirements Reconstruction (NLM)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
notebook: re-zenfac
---

# RE STAGE 2A: REQUIREMENTS RECONSTRUCTION — Zen FAC Simulator
## 17 P&B Categories + D/W Classification

**NLM sources:** 14 | **NLM conversation:** 0c363d93

---

## Reconstructed Requirements List

| Cat# | P&B Category | ID | Requirement (Zen FAC) | D/W | Evidence | Conf. |
|:----:|-------------|:---:|----------------------|:---:|----------|:-----:|
| 1 | Geometry | R-001 | 360° cylindrical visual envelope | D | All sources confirm 360° | H |
| 1 | Geometry | R-002 | 6-DOF motion platform footprint ≤ 3×3m base | W | Industry standard inference | L |
| 1 | Geometry | R-003 | Crew station for 2-4 operators simultaneously | D | "combat crews", "team coordination" | M |
| 2 | Kinematics | R-004 | 6 DOF: roll, pitch, heave, surge, sway, yaw | D | All sources confirm 6-DOF | H |
| 2 | Kinematics | R-005 | Weapon traverse: azimuth 360°, elevation -15°/+85° | D | "weapon engagement" implied | M |
| 3 | Forces | R-006 | Recoil force replicating MMG + RWS firing | D | "recoil effects", "recoil-simulating" | H |
| 3 | Forces | R-007 | Haptic feedback on helm + throttle controls | D | "haptic-feedback propulsion and steering" | H |
| 3 | Forces | R-008 | Motion platform payload ≥ 500 kg | D | 2-4 crew + equipment inference | M |
| 4 | Energy | R-009 | System power: 3-phase AC, UPS-backed | W | Industry standard | L |
| 4 | Energy | R-010 | Continuous operation ≥ 8 hours/day | W | Training center use pattern | L |
| 5 | Material | R-011 | Weapon replica weight/feel matching real MMG/RWS | D | "replication of medium machine guns" | M |
| 6 | Signals | R-012 | EO/IR sensor feed simulation (day + thermal) | D | "electro-optical/infrared targeting" | H |
| 6 | Signals | R-013 | Navigation instruments (radar, compass, GPS, depth) | D | "ship handling, navigation" | M |
| 6 | Signals | R-014 | Communication system simulation (radio, intercom) | W | "combat crews" implies comms | M |
| 6 | Signals | R-015 | Encoder/sensor feedback on all weapon axes | D | "fire-control systems" closed-loop | M |
| 7 | Safety | R-016 | Emergency stop system for motion platform | D | 6-DOF mandatory safety | H |
| 7 | Safety | R-017 | Motion envelope limits (prevent collision/injury) | D | 6-DOF mandatory safety | H |
| 7 | Safety | R-018 | Overload protection on actuators | D | Industry standard for 6-DOF | M |
| 8 | Ergonomics | R-019 | Authentic ship control layout (helm, throttle, weapon) | D | "replicate authentic shipboard handling" | H |
| 8 | Ergonomics | R-020 | Adjustable seating for varying operator sizes | W | Standard ergonomic | L |
| 9 | Production | R-021 | Modular architecture for scalability | D | "modular architecture allows scalability" | H |
| 9 | Production | R-022 | Single-station to multi-ship networked config | D | "single-station to multi-ship exercises" | H |
| 10 | Quality | R-023 | Visual rendering ≥ 30 fps sustained | D | Real-time standard | M |
| 10 | Quality | R-024 | Motion latency ≤ 50 ms | D | 6-DOF servo control standard | M |
| 11 | Assembly | R-025 | System integrable with ARI Multi-Simulator Complex | W | "interconnected training ecosystems" | M |
| 12 | Transport | — | Not specified in sources | — | — | — |
| 13 | Operation | R-027 | Scenarios: coastal defense, counter-piracy, fast interdiction, asymmetric threats | D | Multiple sources | H |
| 13 | Operation | R-028 | Multi-sea-state simulation (calm to heavy) | D | "various sea states" | H |
| 13 | Operation | R-029 | Day/night operation with EO/IR transition | D | "EO/IR targeting systems" | M |
| 14 | Maintenance | R-030 | Projector replacement accessible | W | Multi-projector maintenance | M |
| 14 | Maintenance | R-031 | Software update mechanism (scenario + AI model) | W | AI continuous improvement | M |
| 15 | Recycling | — | Not specified | — | — | — |
| 16 | Cost | R-032 | Unit price $200-500K (estimated) | W | Industry benchmark | L |
| 17 | Schedule | R-033 | Dev timeline ~18-24 months (ARI Feb 2025 → Sep 2025) | W | Timeline inference | M |

**Total: 33 requirements (22D + 8W + 3 empty categories)**
**Confidence: 10H / 15M / 8L**

## AI/Software Requirements (Detail)

| ID | AI Requirement | Evidence | Conf. |
|:--:|---------------|----------|:-----:|
| AI-01 | Adapt difficulty to individual crew proficiency | "customises difficulty levels to match individual crew skills" | H |
| AI-02 | Live performance monitoring during exercises | "live monitoring" + "continuous analysis" | H |
| AI-03 | Automatic weakness identification | "highlights weaknesses" | H |
| AI-04 | Targeted improvement module generation | "generates customized improvement modules" | H |
| AI-05 | Dynamic scenario generation | "dynamic scenario generation" (I/ITSEC) | M |
| AI-06 | Data-driven assessment (not subjective) | "data-driven performance assessments" | H |
| AI-07 | Progressive difficulty (novice → advanced) | Inferred from IADCS, likely for FAC | M |
| AI-08 | Combat Readiness Score (CRS) | Confirmed IADCS, FAC may use similar | L |
| AI-09 | AAR recording + playback | Confirmed IADCS, FAC likely similar | M |

## RED FLAGS

- Over-designed: 6-DOF for gunnery-only training → indicates ship handling is PRIMARY use
- Modified real weapons (AWeSim): highest fidelity but expensive → WX CNC approach is deliberate cost trade
- AI model type unspecified: rule-based? ML? RL? Sources say "AI" but don't specify implementation
- NLM corrected: fog/EW adaptation = IADCS, NOT confirmed for FAC Sim
