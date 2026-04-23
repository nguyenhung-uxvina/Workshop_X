# RE STAGE 2B: FUNCTION STRUCTURE — InVeris FATS (6-Flow)

**Date:** 2026-04-22

---

## BLACK BOX (6-Flow)

```
REVERSE BLACK BOX — FATS 100MIL/180MIL

Classical 3-Flow:
  E-IN:  220VAC mains → E-OUT: heat (projectors, compute), light (projection), motion (recoil), sound
  M-IN:  Compressed air (magazines) → M-OUT: exhausted air, wear particles
  S-IN:  Trainee aim/trigger/cant/stock, instructor commands → S-OUT: visual scene, recoil impulse, audio, coaching feedback, AAR report

Extended 3-Flow:
  D-IN:  Scenario definition, doctrine rules, trainee profile → D-OUT: session log, performance data, analytics report, CSV/PDF export
  C-IN:  Sensor fusion (trigger+aim+cant+stock) → C-OUT: hit/miss decision, coaching recommendation, scenario progression, score
  T-IN:  System calibration, user auth, weapon ID (BlueFire serial) → T-OUT: validated scoring, doctrine compliance certificate, system health status
```

## WHITE BOX — Sub-Functions (Solution-Neutral)

| SF | Verb-Noun | Flow | Criticality | FATS Implementation | Solution-Neutral Form |
|----|-----------|------|------------|--------------------|--------------------|
| **SF-01** | **Generate recoil impulse** | E | HIGH | Gas blowback piston in magazine | Convert stored energy → linear impulse at weapon interface, matching weapon-specific force-time profile |
| **SF-02** | **Track weapon orientation** | S | HIGH | Continuous laser → camera → OCR | Measure weapon pointing direction in 3D space with ≤0.1° resolution at ≥60Hz |
| **SF-03** | **Detect trigger event** | S | HIGH | Pressure sensor (analog) | Detect trigger activation with force measurement and timing resolution ≤1ms |
| **SF-04** | **Measure weapon handling quality** | S+D | HIGH | Cant sensor + stock pressure + trigger pressure → sensor fusion | Quantify operator weapon handling across ≥3 parameters (stability, alignment, grip) |
| **SF-05** | **Compute ballistic trajectory** | C | HIGH | Proprietary ballistic model | Calculate projectile path from muzzle to target using 6DOF physics model (muzzle velocity, drag, wind, gravity) |
| **SF-06** | **Determine hit/miss** | C | HIGH | Camera laser spot → OCR → collision detection | Compare computed impact point with target geometry → binary hit/miss + miss distance |
| **SF-07** | **Render visual scene** | E+S | HIGH | 3D game engine (marksmanship mode) | Generate real-time 3D maritime/land environment at ≥60fps with weather, lighting, targets |
| **SF-08** | **Project visual scene** | E | MEDIUM | UST projectors × 3 → borderless screens | Display rendered scene across 180° FOV with edge-blending and color uniformity |
| **SF-09** | **Generate audio immersion** | E+S | MEDIUM | 5.1 surround + directional effects | Produce spatialized audio (weapon fire, environment, target, instructor voice) |
| **SF-10** | **Simulate target behavior** | C+S | HIGH | Scenario engine (3D + VBS3 + video) | Animate target entities (UAV/USV/personnel) with AI-driven behavior patterns |
| **SF-11** | **Provide real-time coaching** | D+C | HIGH | Automatic Coaching engine → tablet display | Analyze sensor data in real-time → compare to doctrine → display corrective feedback ≤1s |
| **SF-12** | **Generate AAR** | D | HIGH | Shot-by-shot replay + analytics + report | Record full session → enable replay with annotation → generate performance report |
| **SF-13** | **Manage scenarios** | S+D | MEDIUM | Instructor interface (PC + tablet) | Allow instructor to create/select/modify/inject scenarios without programming |
| **SF-14** | **Identify weapon type** | S+T | MEDIUM | BlueFire serial number (Bluetooth) | Auto-detect which weapon is connected → load correct ballistic/recoil/coaching profile |
| **SF-15** | **Recharge weapon energy** | E+M | LOW | Fill station → compressed air → magazine | Replenish weapon recoil energy source between training sessions |
| **SF-16** | **Calibrate system** | T | MEDIUM | Screen alignment + camera registration + weapon zero | Align all subsystems to common reference frame for accurate hit detection |
| **SF-17** | **Simulate ship motion** | E+S | HIGH (WX) | **NOT PRESENT IN FATS** | Generate platform motion (roll/pitch) matching sea state + visual horizon sync |
| **SF-18** | **Manage multi-trainee** | C+D | MEDIUM | OCR disambiguates multiple laser spots | Arbitrate multiple simultaneous trainee inputs → correct scoring per trainee |

---

## HIDDEN FUNCTIONS DETECTED

| HF | Function | Evidence | Type |
|----|----------|----------|------|
| HF-01 | Prevent live ammunition chambering | Simulator conversion physically prevents live rounds | SAFETY |
| HF-02 | Weapon health monitoring | BlueFire diagnostics = weapon sensor self-test | RELIABILITY |
| HF-03 | Fleet management | 300+ weapons × many systems = asset tracking needed | MANUFACTURING/LOGISTICS |
| HF-04 | Doctrine database management | Coaching references customer doctrine → must store/update | MAINTENANCE |
| HF-05 | Software licensing enforcement | VBS3 license management | BUSINESS |
| HF-06 | Data export for training records | Military requires formal training documentation | REGULATORY |

---

## FUNCTION-COMPONENT MATRIX

| SF | FATS Component | 6-Flow | Criticality | WX Alternative | ACH Candidate? |
|----|---------------|--------|------------|---------------|---------------|
| SF-01 | Gas piston + valves in magazine | E | HIGH | Solenoid (Phase 1) / Pneumatic (LITE+) | No — physical mechanism |
| SF-02 | Laser + 3 cameras + OCR | S | HIGH | Rotary encoder × 2 | No — sensor hardware |
| SF-03 | Trigger pressure sensor | S | HIGH | Microswitch (current) / Strain gauge (upgrade) | No — sensor hardware |
| SF-04 | Cant IMU + stock force cell + trigger analog | S+D | HIGH | **NONE** (current) / IMU + force cells (upgrade) | **YES — AI can infer handling quality from fewer sensors** |
| SF-05 | Proprietary ballistic engine | C | HIGH | V-SMASH (existing WX IP) | No — physics model |
| SF-06 | Camera → OCR → collision | C | HIGH | Encoder → ray-trace | No — computation |
| SF-07 | Custom 3D engine | E+S | HIGH | Unity 6 LTS + HDRP | No — render engine |
| SF-08 | UST projectors × 3 | E | MEDIUM | Optoma × 3 | No — COTS hardware |
| SF-09 | 5.1 surround | E+S | MEDIUM | COTS audio system | No — COTS hardware |
| SF-10 | 3D + VBS3 + Video engines | C+S | HIGH | Unity C-UAV/USV AI | **YES — AI-adaptive target behavior** |
| **SF-11** | **Automatic Coaching engine** | **D+C** | **HIGH** | **NONE → ACH opportunity** | **YES — AI coaching LEAPFROG** |
| SF-12 | Replay + analytics engine | D | HIGH | Unity replay + analytics | **YES — AI pattern recognition in AAR** |
| SF-13 | Instructor GUI | S+D | MEDIUM | Unity custom GUI | No — standard SW |
| SF-14 | BlueFire Bluetooth serial | S+T | MEDIUM | NFC auto-detect (MWI) | No — sensor hardware |
| SF-15 | Compressed air fill station | E+M | LOW | N/A (solenoid = 24VDC) | N/A |
| SF-16 | Calibration suite | T | MEDIUM | Projector auto-cal + encoder zero | Partial — auto-calibration AI |
| SF-17 | **NOT PRESENT** | E+S | HIGH (WX) | 2-DOF motion platform | No — physical mechanism |
| SF-18 | OCR multi-spot disambiguation | C+D | MEDIUM | N/A (single trainee LITE) | Future: AI trainee tracking |

**ACH candidates identified: 4** (SF-04 handling inference, SF-10 adaptive targets, **SF-11 AI coaching**, SF-12 AI analytics)
