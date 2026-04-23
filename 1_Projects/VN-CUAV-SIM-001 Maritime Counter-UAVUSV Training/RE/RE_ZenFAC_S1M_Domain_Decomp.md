---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 1M — Domain Decomposition (OSINT)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 1M: DOMAIN DECOMPOSITION — Zen FAC Simulator

## Domain 1 — Mechanical (~20%)

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Motion platform | C01 (Stewart platform, 6 actuators, frame, bearings) | Ship motion simulation | HIGH |
| Weapon station | C05 (MMG replica), C06 (RWS replica), mounting hardware | Weapon handling training | MEDIUM |
| Recoil mechanism | C07 (electromech actuator, return spring, guide rails) | Force feedback during firing | MEDIUM |
| Haptic controls | C08 (helm), C09 (throttle) — force-feedback servos | Ship control tactile feedback | MEDIUM |
| Structure/enclosure | Projection dome frame, floor platform, cable routing | Physical housing | LOW |

## Domain 2 — Electronic (~17%)

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Projection system | C02 (screen), C03 (6-8 projectors), edge blending HW | 360° visual output | HIGH |
| Render cluster | C04 (multi-GPU PCs, video splitter/warper) | Real-time rendering | MEDIUM |
| EO/IR sensor | C10 (IR camera replica + synthetic feed) | Thermal targeting | MEDIUM |
| Navigation instruments | C11 (radar, compass, GPS, depth sounder replicas) | Ship nav training | LOW |
| Communications | C12 (radio panels, intercom) | Team comms | LOW |
| Sound/Power/Network | C18, C22, C23 | Support systems | LOW |

## Domain 3 — Software (~48%)

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Simulation engine | C14 (scenario gen), C16 (ship dynamics), C17 (sea state) | Core simulation loop | **VERY HIGH** |
| AI training engine | C13 (AI IOS — adaptive difficulty, performance, modules) | Intelligent tutoring | **VERY HIGH** |
| Ballistics | C15 (projectile trajectory, wind, ship motion compensation) | Weapon accuracy simulation | HIGH |
| Visual rendering | Part of C04 (3D engine, ocean shader, targets, weather) | Visual output | HIGH |
| EO/IR simulation | Synthetic thermal/NV imagery | Sensor training | MEDIUM |
| AAR/recording | C24 (session record, playback, analytics, scoring) | Debrief | MEDIUM |

## Domain 4 — Control (~15%)

| Sub-system | Components | Function | Complexity |
|-----------|-----------|----------|:----------:|
| Motion control | C19 (6-DOF servo controller, washout algorithm) | Platform follows ship dynamics | HIGH |
| Weapon control | C20 (encoder read, trigger detect, recoil command) | Weapon I/O mapping | MEDIUM |
| Safety system | C21 (E-stop chain, limit switches, overload, person detection) | Platform safety | HIGH |
| System orchestration | Master controller (sync render↔motion↔weapon↔sound) | System-wide timing | HIGH |

## Cross-Domain Mapping Matrix

| Function | Mech | Elec | SW | Ctrl | Integration Risk |
|----------|:----:|:----:|:--:|:----:|:----------------:|
| Ship motion simulation | 40% | 10% | 30% | 20% | HIGH (mech↔ctrl sync) |
| Visual scene generation | 5% | 35% | 55% | 5% | MEDIUM |
| Weapon gunnery training | 40% | 15% | 35% | 10% | MEDIUM |
| AI adaptive training | 0% | 5% | 90% | 5% | LOW (SW-dominant) |
| Safety | 20% | 20% | 20% | 40% | **VERY HIGH** |
| **OVERALL** | **~20%** | **~17%** | **~48%** | **~15%** | |

## System Boundary & Black Box

```
INPUTS:                              OUTPUTS:
─────────────────────                ─────────────────────
- Crew physical actions          →   - 360° visual scene
  (helm, throttle, weapon)           - 6-DOF motion cues
- Instructor scenario setup     →    - Recoil forces + haptic
- AC power (3-phase)            →    - Sound effects
                                     - AAR data + training scores
                                     - AI performance analysis
```

**Behavioral Modes:** OFF → STARTUP → STANDBY → CONFIGURE → RUNNING → PAUSED → DEBRIEF → MAINTENANCE → EMERGENCY
