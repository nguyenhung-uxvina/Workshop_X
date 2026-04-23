---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2B — Function Structure 6-Flow (NLM)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
notebook: re-zenfac
---

# RE STAGE 2B: FUNCTION STRUCTURE — Zen FAC Simulator
## 6-Flow + 15 Sub-Functions

---

## Black Box (6-Flow)

```
E-IN: AC power (3-phase)           → E-OUT: Heat (actuators, projectors, PCs)
M-IN: (none — closed system)       → M-OUT: (none)
S-IN: Crew physical actions        → S-OUT: 360° visual, motion cues, recoil, haptic, sound
D-IN: Scenario parameters (IOS/AI) → D-OUT: Performance data, AAR, training scores
C-IN: AI adaptation triggers       → C-OUT: Difficulty adjustments, improvement modules
T-IN: User auth, safety status     → T-OUT: Session integrity, E-stop assurance
```

## Sub-Function Decomposition (Solution-Neutral)

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
| SF-13 | Network multiple simulator instances | D | SW+ELEC | LOW |
| SF-14 | Generate threat entities (targets, hostiles) | C | SW | HIGH |
| SF-15 | Simulate communication channels | S | SW+ELEC | LOW |

## Solution-Neutral Verification

Each SF must be satisfiable by ≥3 physical principles:

| SF | Zen Solution | Alt 1 | Alt 2 | Alt 3 | ✓ |
|:--:|-------------|-------|-------|-------|:-:|
| SF-01 | 6-DOF Stewart | 2-DOF electric | 3-DOF hydraulic | Seat shaker | ✓ |
| SF-03 | Electromech actuator | Solenoid | Pneumatic | Motor-cam | ✓ |
| SF-06 | AI IOS (proprietary) | ACH rule-based | ML coaching | RL adaptive | ✓ |
| SF-02 | 360° cylindrical projection | Flat multi-screen | VR headset | LED wall | ✓ |
