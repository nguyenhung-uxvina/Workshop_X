---
created: 2026-04-20
type: re-functional-abstraction
source: /reverse-engineering --mode mecha --stage 2B
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 2B: FUNCTIONAL ABSTRACTION ENGINE — Simsek-K
## VDI 2221 Inverse: Artifact → Solution-Neutral Function Structure | 2026-04-20

**THIS IS THE IP-FREE REDESIGN FOUNDATION.**
Every sub-function below is expressed WITHOUT reference to TAI's specific implementation.
WX can now explore alternative solutions for each sub-function independently.

---

## STEP 1 — BLACK BOX

### System Boundary
The system = Simsek-K air vehicle during operational mission.

### External Entities
| Entity | Interaction |
|--------|------------|
| GCS Operators | Commands, mission planning, telemetry monitoring |
| Launch Platforms | RATO launcher, catapult, UCAV carrier (Anka/Aksungur) |
| Atmosphere | Air (oxygen, density, temperature), drag, gravity |
| GNSS Satellites | Timing/position signals |
| Threat Radar Systems | C/X/Ku-band illumination |
| IR Tracking Sensors | Threat detection sensors being trained |
| Targets (kamikaze mode) | Naval vessels, ground installations |
| Maintenance Crew | Refueling, payload swap, post-recovery refurbishment |

### 3-Flow I/O
| Flow | Input | Output |
|------|-------|--------|
| **Energy** | Chemical (fuel, booster), kinetic (air-drop) | Directed kinetic (flight), thermal (exhaust 950°C), acoustic, augmented RF |
| **Material** | O₂ (atmosphere), JP-8 (35L pre-loaded) | Exhaust gases, deployed parachute, warhead effects (kamikaze) |
| **Signal** | Encrypted C2 commands (C-band), GNSS RF, ambient radar pulses | Encrypted telemetry, amplified RF echoes, simulated threat emissions |

### Operational States
```
OFF → STANDBY → PRE-LAUNCH → LAUNCH → CRUISE → SEA-SKIM → TERMINAL/KAMIKAZE → RECOVERY
                                                                                    ↕
                                                            EMERGENCY (RTB/FTS) ←──┘
                                                                    ↓
                                                              MAINTENANCE
```

---

## STEP 2 — WHITE BOX: 19 Sub-Functions (Solution-Neutral)

| ID | Verb-Noun Statement | Input | Output | Quantified I/O |
|----|-------------------|-------|--------|----------------|
| SF-01 | Store chemical energy | JP-8 fuel | Liquid fuel to conversion | ≤35L (~28kg) |
| SF-02 | Convert chemical energy to kinetic energy | Fuel + air + throttle signal | High-velocity exhaust | 96k RPM, 0.17 kg/(N·h) |
| SF-03 | Generate axial thrust | Exhaust gas momentum | Forward force | 390±10 N continuous |
| SF-04 | Generate electrical power | Rotational kinetic energy | DC voltage | 28VDC, 200-500W |
| SF-05 | Distribute electrical power | DC voltage | Conditioned voltages | 5/12/24V to subsystems |
| SF-06 | Measure inertial states | Airframe motion | Digital state vectors | ≥400Hz, 6-DOF |
| SF-07 | Acquire absolute position | GNSS RF signals | 3D coordinates | 3-5m CEP, 10-50Hz |
| SF-08 | Measure relative airflow | Dynamic/static pressure | Airspeed + baro altitude | Resolving Mach 0.63 |
| SF-09 | Calculate flight trajectory | Commands + state vectors | Desired attitude/throttle | <10ms latency |
| SF-10 | Modulate aerodynamic forces | Servo signals + DC power | Deflected control surfaces | Pitch/roll/yaw at Mach 0.63 |
| SF-11 | Sustain aerodynamic lift | Forward velocity + geometry | Vertical force | Supporting 83kg MTOW |
| SF-12 | Transmit telemetry data | Digital system states | Encrypted RF | 150km LoS, >500kbps |
| SF-13 | Receive operator commands | Encrypted RF | Digital mission updates | C-band, anti-jam |
| SF-14 | Augment radar signature | Ambient radar illumination | Amplified RF return | 5-18GHz, 1-100 m² |
| SF-15 | Augment thermal signature | DC power or chemical | Concentrated IR radiation | Nose-mounted emission |
| SF-16 | Measure miss distance | Passing projectile energy | Digital proximity data | Acoustic/Doppler scoring |
| SF-17 | Initiate launch acceleration | Ignition signal | Rapid kinetic accel | 8-15g within 2 sec |
| SF-18 | Deploy recovery decelerator | Deploy command | Aerodynamic drag | ≤8 m/s descent for 83kg |
| SF-19 | Terminate flight autonomously | Link-loss / geofence breach | Hard-over / engine cut | Highest priority interrupt |

---

## STEP 3 — FUNCTION CLUSTERS

| Cluster | Sub-Functions | Domain Coverage |
|---------|--------------|----------------|
| **(A) Propulsion** | SF-01, SF-02, SF-03 | Mech + Elec + Sw |
| **(B) Guidance & Nav** | SF-06, SF-07, SF-08 | Elec + Sw + Ctrl |
| **(C) Flight Control** | SF-09, SF-10, SF-11 | Mech + Elec + Sw + Ctrl |
| **(D) Signature Sim** | SF-14, SF-15, SF-16 | Mech + Elec |
| **(E) Launch** | SF-17 | Mech + Elec |
| **(F) Recovery** | SF-18 | Mech + Sw |
| **(G) Safety** | SF-19 | Sw + Ctrl |
| **(H) Communication** | SF-12, SF-13 | Elec + Sw |
| **(I) Power** | SF-04, SF-05 | Elec |

---

## STEP 4 — SOLUTION-NEUTRAL REFORMULATION (IP-FREE)

| SF | BAD (TAI-specific) | GOOD (Solution-neutral — WX uses this) |
|----|-------------------|---------------------------------------|
| SF-03 | "Use TEI-TJ90 turbojet" | "Convert stored chemical energy to 390N continuous axial thrust within ≤153.5mm diameter envelope" |
| SF-09 | "Run Aselsan FCC software" | "Calculate optimal attitude states via deterministic algorithm executing ≥400Hz to maintain stability at Mach 0.63" |
| SF-12 | "Use Aselsan C-band datalink" | "Establish bidirectional AES-encrypted anti-jam RF telemetry at <100ms latency over 150km LoS" |
| SF-14 | "Install Luneberg lens in nose" | "Passively amplify incoming X/Ku-band RF energy to reflect 1-100 m² configurable RCS" |
| SF-17 | "Fire Roketsan RATO booster" | "Impart 8-15g initial axial acceleration to achieve lift-off velocity within 2 seconds from static" |
| SF-18 | "Pop TAI parachute system" | "Rapidly decelerate 83kg mass from high-subsonic to ≤8 m/s using deployable aerodynamic drag device" |
| SF-06 | "Use Aselsan MEMS IMU" | "Measure 6-DOF inertial states at ≥400Hz with attitude accuracy ≤1° in vibration environment" |
| SF-07 | "Use Turkish multi-GNSS" | "Acquire 3D position at 3-5m CEP using multi-constellation satellite signals with anti-jam resilience" |

---

## STEP 5 — FUNCTION-COMPONENT MATRIX

| SF | Original TAI Component | Criticality | Alt Possible? | VN Feasibility |
|----|----------------------|-------------|---------------|----------------|
| SF-03 | TEI-TJ90 turbojet | **CRITICAL** | Partial — must import same-class turbojet | ❌ Must import |
| SF-09 | Aselsan FCC | **CRITICAL** | Yes — PX4/ArduPilot on Pixhawk 6X | ✅ Available |
| SF-06/07 | Aselsan GNSS/INS | **CRITICAL** | Yes — Ublox F9P + Bosch MEMS | ✅ Available |
| SF-11 | CFRP composite airframe | HIGH | Yes — VARTM process | ⚠️ Limited (developing) |
| SF-14 | Luneberg lens (passive) | HIGH | Partial — corner reflectors domestic, lens import | ⚠️ Limited |
| SF-12 | Aselsan encrypted datalink | HIGH | Yes — indigenous VN development needed | ⚠️ Limited |
| SF-17 | Roketsan RATO booster | HIGH | Partial — VN solid propellant uncertain at this class | ⚠️ Limited |
| SF-18 | TAI parachute system | MEDIUM | Yes — standard parachute engineering | ✅ Available |
| SF-10 | High-torque servos | MEDIUM | Yes — Volz/Hitec COTS | ✅ Available |
| SF-04 | Engine-driven generator | MEDIUM | Yes — COTS generator | ✅ Available |

---

## STEP 6 — HIDDEN FUNCTIONS (Critical for RE — often missed)

| # | Hidden Function | Domain | Risk if Missed |
|---|----------------|--------|----------------|
| 1 | **Flight Termination System (FTS)** — Override all control to force stall on geofence/link-loss | Sw/Ctrl | Range safety violation → program terminated by military |
| 2 | **Thermal isolation** — Protect 950°C turbine exhaust from CFRP airframe | Mech | Mid-air structural failure at Mach 0.63 |
| 3 | **Engine cut-off sequencing** — Spool 96k RPM to 0 exactly 500ms before drogue deploy | Sw/Ctrl | Parachute melted/ingested → vehicle lost |
| 4 | **Launch shock attenuation** — Prevent 8-15g from fracturing PCB solder joints | Mech/Elec | Avionics failure immediately after launch |
| 5 | **CG management** — Maintain stability during booster separation (15-25kg mass loss at 8-15g) | Mech/Ctrl | Unrecoverable pitching moment → crash |
| 6 | **GCS localization** — Vietnamese language UI, VN military terminology | Sw | Operator cognitive overload during high-speed tracking |
| 7 | **Saltwater survival** — Sealed avionics survive immersion during water recovery | Mech | Electronics destroyed → cannot reuse |
| 8 | **EMI/EMC compliance** — Prevent 96k RPM generator harmonics from corrupting GNSS/IMU | Elec | Navigation errors → crash or geofence violation |
| 9 | **Fuel starvation protection** — Prevent negative-G maneuvers from uncovering fuel pickup | Mech | Engine flameout during evasive maneuver |
| 10 | **Reusability inspection** — Post-recovery structural integrity assessment before reflight | Maintenance | Latent damage → in-flight failure on next sortie |

---

## STAGE 2 CHECKPOINT

```
=== STAGE 2A + 2B COMPLETE — Simsek-K DECODE ===

Requirements reconstructed: 76 (40F + 21P + 15C)
Sub-functions abstracted: 19 (ALL solution-neutral)
Function clusters: 9 (A-I)
Hidden functions identified: 10
Solution-neutral reformulations: 8 critical (IP-FREE ready)

IP-FREE REDESIGN NOW POSSIBLE:
  WX can explore alternative solutions for ALL 19 sub-functions
  without referencing TAI's specific implementation.
  
  The function structure IS the design specification.
  Stage 3 will use this to build a morphological matrix
  with IP-free alternatives for each sub-function.

CEO DECISION: Approve Stage 2 to proceed to Stage 3 (Reconstruct)?
  Stage 3 = P&B Forward Redesign with VN constraints
  - 3A: Modified Task Clarification (VN-specific)
  - 3B: Morphological matrix with IP-free alternatives
  - 3C: VDI 2225 concept selection
  - 3D: Divergence map
```
