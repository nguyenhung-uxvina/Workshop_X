# VN-12.7MM-SIM-010: FUNCTION STRUCTURE
## Phase 2: Conceptual Design

**Document**: VN-12.7MM-SIM-010-FS | **Version**: 2.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 2 - Conceptual Design (Pahl & Beitz Step 1-2)
**Scope**: I-01 (HONG HAI) -- Indoor shore-based single trainer station
**Basis**: Requirements List v1.3 (VN-12.7MM-SIM-002-REQ, 201 requirements)
**Supersedes**: VN-12.7MM-SIM-003-FS v1.0 (2026-01-20)

---

# 1. ABSTRACTION (Pahl & Beitz 5-Step Process)

The purpose of abstraction is to strip away solution-specific language and
personal preferences from the requirements, revealing the essential problem
in solution-neutral terms. This widens the search space for working principles.

## 1.1 Step 1: Eliminate Personal Preferences

Removed from requirements:

| Removed Preference | Original Req | Rationale |
|--------------------|-------------|-----------|
| "Steel preferred for weight" | M-004 (W) | Material choice is a solution decision |
| "Unity" as simulation engine | Arch v1.0 | Engine choice is a solution decision |
| "5.1 surround" audio | S-009 (W) | Spatial audio method is a solution decision |
| "CNC, welding, standard" | PR-003 (D) | Manufacturing method is a solution decision |
| "Video maintenance guides" | MT-010 (W) | Documentation format is a solution decision |

## 1.2 Step 2: Omit Non-Essential Requirements

Wishes (W) and requirements that do not define the essential function:

| Omitted | ID | Reason |
|---------|----|--------|
| Left/right hand config | ER-010 (W) | Enhancement, not essential |
| Fire extinguisher mount | SF-007 (W) | Facility provision, not system function |
| Kit assembly option | PR-007 (W) | Production variant, not system function |
| Multiplayer capability | OP-015 (W) | Network extension, not core I-01 scope |
| Remote diagnostics | MT-007 (W) | Enhancement to maintenance |
| Extended range >2000m | BM-007 (W) | Beyond effective range |
| Ship motion integration | SC-014 (W) | Not applicable to I-01 (shore-based) |
| English language option | OP-011 (W) | Not essential for VN Navy |

## 1.3 Step 3: Transform Quantitative to Qualitative

| Quantitative Requirement | Qualitative Form |
|--------------------------|------------------|
| Traverse 360deg, elevation -10deg to +85deg | Replicate full weapon articulation |
| Latency <=50ms | Provide perceptually instantaneous response |
| 6-DOF ballistic trajectory, <=2% drag error | Compute physically faithful projectile path |
| Lead error <=0.5deg, superelevation <=0.2deg | Compute accurate fire control solution |
| Dispersion <=3.0 MOA | Reproduce realistic shot scatter |
| >=60 fps, >=90deg FOV | Generate continuous, immersive visual field |
| Friction torque variation <=10% | Provide smooth, consistent control resistance |
| MTBF >=500h | Maintain high operational availability |
| Unit cost <=$45,000 | Achievable within constrained defense budget |

## 1.4 Step 4: Generalize Results

| Specific Form | Generalized Form |
|---------------|------------------|
| "12.7mm DShKM naval mount" | Weapon platform with 2-axis articulation |
| "Naval gunner" | Human operator of aimed weapon |
| "Patrol boat, helicopter, UAV targets" | Moving threat objects at various ranges and speeds |
| "Muzzle flash, tracer, splash" | Weapon discharge and impact phenomena |
| "Firing sound 90-120 dB(A)" | Auditory cues matching weapon signature |
| "Spade grips, trigger" | Operator control interface with firing actuator |
| "Instructor station" | Supervisory control and observation interface |

## 1.5 Step 5: Formulate Solution-Neutral Problem Statement

```
+-----------------------------------------------------------------------------+
|                                                                             |
|  ESSENTIAL PROBLEM                                                          |
|                                                                             |
|  Provide a shore-based system that enables a weapon operator to             |
|  repeatedly practice aimed engagement of moving threats through a           |
|  realistic 2-axis control interface, physically faithful projectile         |
|  modeling, and immersive sensory feedback -- while recording                |
|  performance data sufficient to predict live-fire qualification             |
|  outcomes (r^2 >= 0.75).                                                    |
|                                                                             |
+-----------------------------------------------------------------------------+
```

Key differences from v1.0 essential problem:
- Added "physically faithful projectile modeling" (driven by quantified BM/FC reqs)
- Added "predict live-fire qualification outcomes" (driven by TE-010 r^2 >= 0.75)
- Added "shore-based" constraint (driven by OP-016/017)
- Removed vague "cost-effective environment" -- cost is a constraint, not a function

---

# 2. OVERALL FUNCTION

## 2.1 Black Box Definition

**Overall Function**: SIMULATE AIMED WEAPON ENGAGEMENT

```
                        Scenario parameters
                        Instructor commands
                        Configuration data
                               |
                               v
  Electrical power ---> +------------------+ ---> Heat (dissipated)
                        |                  |
  Untrained      ~~~~> |    SIMULATE      | ~~~~> Trained operator
  operator              |    AIMED WEAPON  |       (improved skill)
                        |    ENGAGEMENT    |
  Control inputs ===>  |                  | ===> Performance scores
  (position, trigger)  |                  |      Training reports
                        +------------------+ ===> Visual scene
                               |                  Audio cues
                               |                  Haptic feedback
                               v
                        Diagnostic data
                        Session records
```

**Flow Legend**:

| Flow Type | Symbol | Examples |
|-----------|--------|----------|
| Energy | ---> | Electrical power, heat |
| Material | ~~~~> | Operator (transformed state) |
| Signal | ===> | Position data, commands, scores |

## 2.2 System Boundary (I-01 Scope)

Included within system boundary:
- Single trainer station (operator position + gun replica + displays)
- Instructor station (co-located, same room)
- All computing, audio, feedback hardware
- Software: simulation, ballistics, scoring, scenario management
- Power conditioning from facility 220VAC

Excluded (facility-provided):
- Room, floor, lighting, HVAC (18-32 deg C per OP-017)
- 220VAC 50Hz grid power (E-001)
- Network infrastructure (for data export only)

---

# 3. FUNCTION DECOMPOSITION

## 3.1 Level 1 Functions

| ID | Function | Description |
|----|----------|-------------|
| **F1** | Accept and Condition Control Inputs | Sense operator commands with weapon-realistic resistance |
| **F2** | Generate Simulated Environment | Create visual scene with threats, terrain, weather |
| **F3** | Compute Weapon Effects | Calculate ballistic trajectory, fire control, and outcomes |
| **F4** | Assess Training Performance | Score accuracy, track progression, predict qualification |
| **F5** | Provide Sensory Feedback | Deliver visual, audio, and haptic cues to operator |
| **F6** | Manage System State | Control startup/shutdown, self-test, configuration |

Changes from v1.0:
- F1 renamed to include "Condition" (captures resistance/friction functions)
- F3 expanded substantially (new Level-3 decomposition below)
- F4 expanded to include qualification prediction (TE-010)
- F6 added (was implicit in v1.0)

## 3.2 Level 2 and Level 3 Functions

### F1: Accept and Condition Control Inputs

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F1.1 | Sense traverse position | 0-360deg continuous, <=0.1deg resolution | K-001, K-007, S-005 |
| F1.2 | Sense elevation position | -10deg to +85deg, <=0.1deg resolution | K-002, K-007, S-005 |
| F1.3 | Sense trigger state | Digital ON/OFF (D); analog 0-100% (W) | S-006, S-007 |
| F1.4 | Provide traverse resistance | 5-15 Nm adjustable, variation <=10% | F-001, K-005, K-010 |
| F1.5 | Provide elevation resistance | 10-30 N at grip, variation <=10% | F-002, K-005, K-010 |
| F1.6 | Enforce motion limits | Soft stops, over-travel prevention | K-008, SF-004 |
| F1.7 | Compensate backlash | Ensure <=0.05deg angular play in both axes | F-006 |

**Level 3 decomposition of F1.4/F1.5**:

| ID | Function | Notes |
|----|----------|-------|
| F1.4.1 | Generate base friction torque | Constant component matching weapon feel |
| F1.4.2 | Modulate friction with position | Maintain <=10% variation across full traverse |
| F1.4.3 | Apply configurable resistance profile | Adjustable 0-100% for training modes (K-006) |
| F1.5.1 | Generate base elevation force | Gravity + friction component |
| F1.5.2 | Balance gravity torque | Counterweight or spring to match real weapon balance |

### F2: Generate Simulated Environment

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F2.1 | Render scene background | Sky, sea, land; day/night/weather | SC-010, SC-011, SC-012 |
| F2.2 | Generate threat objects | Surface (0-60kn), air (0-300kn), shore (0-30kph) | SC-001 to SC-009 |
| F2.3 | Simulate environmental conditions | Sea state SS0-4, wind, visibility | SC-013, FC-003 |
| F2.4 | Drive target behavior | AI-driven movement, >=5 simultaneous | OP-014, SC-009 |
| F2.5 | Manage scenario library | >=20 scenarios, 5 difficulty levels | OP-003, OP-004 |
| F2.6 | Composite visual output | >=60 fps, >=90deg FOV, >=1920x1080/ch | S-001, S-002, S-003 |

**Level 3 decomposition of F2.2**:

| ID | Function | Notes |
|----|----------|-------|
| F2.2.1 | Generate surface threats | Patrol boat (0-40kn), jet ski (0-60kn), mine (drift) |
| F2.2.2 | Generate air threats | Helicopter (0-150kn), UAV (0-100kn), fixed-wing (W: 100-300kn) |
| F2.2.3 | Generate shore threats | Bunker (static), vehicle (0-30kph) |
| F2.2.4 | Animate threat motion | Path-following, evasive maneuvers, formation |

### F3: Compute Weapon Effects

This function received the most significant expansion from v1.0 due to
quantified ballistic requirements in REQ v1.3. It is decomposed into four
Level-2 groups, each with Level-3 sub-functions.

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| **F3.1** | **Compute ballistic trajectory** | 6-DOF, full envelope | BM-001 to BM-010 |
| **F3.2** | **Compute fire control solution** | Lead, superelevation, wind | FC-001 to FC-003 |
| **F3.3** | **Model weapon state** | Thermal, ammo, rate of fire | FC-004 to FC-009 |
| **F3.4** | **Determine engagement outcome** | Hit/miss, damage | TE-008, TE-009 |

**Level 3 decomposition of F3.1: Compute Ballistic Trajectory**

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F3.1.1 | Initialize projectile state | Muzzle velocity 850 m/s, mass 48.3g, ammo type (API-T/Ball/Inc) | BM-001, BM-002, BM-003 |
| F3.1.2 | Compute aerodynamic drag | Siacci or 4th-order poly fit; error <=2% vs measured | BM-004 |
| F3.1.3 | Integrate 6-DOF equations of motion | Gravity + drag + wind + Coriolis (if range >1000m) | BM-005 |
| F3.1.4 | Apply dispersion model | <=3.0 MOA at 500m, Gaussian distribution matching DShKM spec +/-20% | BM-008 |
| F3.1.5 | Compute time of flight | <=5% error at all ranges to 2000m | BM-010 |
| F3.1.6 | Model tracer behavior | Visible trace, burnout at 1500m +/-100m | BM-009, S-010 |
| F3.1.7 | Validate effective range | Accurate to 2000m | BM-006 |

**Level 3 decomposition of F3.2: Compute Fire Control Solution**

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F3.2.1 | Estimate target motion | Range 200-1500m, speed 0-40kn, bearing rate | FC-001 (input) |
| F3.2.2 | Compute lead angle | Error <=0.5deg for all target envelopes | FC-001 |
| F3.2.3 | Compute superelevation | Error <=0.2deg at ranges 200-2000m | FC-002 |
| F3.2.4 | Apply wind correction | 0-30 m/s in 1 m/s steps, 360deg direction | FC-003 |
| F3.2.5 | Combine fire control outputs | Corrected aim point = base + lead + superelev + wind | -- |

**Level 3 decomposition of F3.3: Model Weapon State**

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F3.3.1 | Model rate of fire | 600 rpm cyclic | FC-004 |
| F3.3.2 | Control burst length | 3-50 rounds per burst | FC-005 |
| F3.3.3 | Track ammunition expenditure | Running count, low-ammo warning | FC-008, S-012 |
| F3.3.4 | Simulate reload sequence | 8-12 seconds per reload, crew-skill dependent | FC-006 |
| F3.3.5 | Model barrel temperature | ~3 deg C/round rise; warning at 300 rds; mandatory cool at 500 rds | FC-009 |
| F3.3.6 | Simulate malfunctions | Jam, feed failure (W: FC-007) | FC-007 |

**Level 3 decomposition of F3.4: Determine Engagement Outcome**

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F3.4.1 | Detect projectile-target intersection | 3D collision geometry per target type | OP-013 |
| F3.4.2 | Classify hit/miss | False-positive <=5%, false-negative <=10% | TE-008, TE-009 |
| F3.4.3 | Compute damage effects | Target-type-dependent response (kill, damage, suppression) | -- |
| F3.4.4 | Generate impact phenomena | Splash, sparks, penetration effects (visual data to F5) | S-011 |

### F4: Assess Training Performance

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F4.1 | Score engagement accuracy | Hit rate, burst efficiency, reaction time | OP-007, S-018 |
| F4.2 | Log detailed performance data | Per engagement: hit coords, lead error (deg), reaction time (ms), burst spread, tracking smoothness, rounds expended | S-014, S-018 |
| F4.3 | Track individual progression | Per-gunner history >=12 months | S-016, S-017 |
| F4.4 | Compare to qualification standards | Map sim scores to live-fire prediction (r^2 >= 0.75) | TE-010, OP-007 |
| F4.5 | Generate reports | Session summary, progression trends, readiness assessment | S-017 |
| F4.6 | Support after-action review | Replay capability, annotated timeline | OP-008 |
| F4.7 | Record session video | For AAR playback (W) | S-015 |
| F4.8 | Enforce data classification | PII handling per MoD requirements | S-019 |

**Level 3 decomposition of F4.2**:

| ID | Function | Notes |
|----|----------|-------|
| F4.2.1 | Capture fire event data | Timestamp, weapon angle, trigger duration, burst count |
| F4.2.2 | Capture tracking quality | Smoothness metric, angular rate stability |
| F4.2.3 | Capture engagement geometry | Target range, bearing, speed, aspect at time of fire |
| F4.2.4 | Compute derived metrics | Lead error, deflection error, time-to-first-hit |

### F5: Provide Sensory Feedback

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F5.1 | Display visual scene | Rendered environment + effects, <=50ms total latency | S-001 to S-004 |
| F5.2 | Display HUD overlay | Ammo count, barrel temp, score, mode indicators | S-012 |
| F5.3 | Generate weapon audio | Firing sound >=90 dB(A), <=120 dB(A) at operator | S-008 |
| F5.4 | Generate environmental audio | Impact sounds (directional), ambient | S-008, S-009 |
| F5.5 | Provide haptic feedback | Recoil vibration simulation (W: F-005) | F-005 |
| F5.6 | Render tracer visualization | Visible trajectory from muzzle to impact/burnout | S-010, BM-009 |
| F5.7 | Render impact visualization | Splash, hit markers, damage effects | S-011 |

### F6: Manage System State (NEW)

| ID | Function | Key Parameters | Reqs |
|----|----------|---------------|------|
| F6.1 | Execute startup sequence | Cold start <=5 min, hardware init, software load | OP-001 |
| F6.2 | Perform self-test | Sensor calibration check, display test, audio test | MT-006, QC-003 |
| F6.3 | Manage configuration | Scenario selection, difficulty, operator profile | OP-003, OP-004, OP-010 |
| F6.4 | Process instructor commands | Pause, reset, inject events, override | OP-012, S-013 |
| F6.5 | Monitor system health | Temperature, error rates, component status | MT-006 |
| F6.6 | Execute shutdown sequence | Graceful save, hardware safe state, UPS management (W) | E-004 |
| F6.7 | Handle emergency stop | Immediate safe state on E-stop activation | SF-001, SF-004 |
| F6.8 | Provide diagnostic interface | Built-in test results, fault isolation data | MT-006, MT-004 |

---

# 4. SIGNAL FLOW DIAGRAM

## 4.1 Primary Signal Flow

```
 INSTRUCTOR                                                    OPERATOR
 (supervisor)                                                  (trainee)
      |                                                            |
      | Scenario select                           Traverse angle   |
      | Difficulty level              (0-360deg, <=0.1deg res.)    |
      | Inject / override                     Elevation angle      |
      | Pause / reset              (-10 to +85deg, <=0.1deg res.) |
      v                                          Trigger state     |
 +----------+                                          |           |
 |   F6     |--- Config / mode ------+                 v           |
 |  Manage  |                        |           +----------+     |
 |  System  |<-- Health/diag --------|-----------|   F1     |     |
 |  State   |                        |           |  Accept  |     |
 +----+-----+                        |           |  Control |     |
      |                              |           |  Inputs  |     |
      | Self-test                    |           +----+-----+     |
      | results                      |                |           |
      | Startup                      |     Position   | Resistance|
      | complete                     |     (az, el)   | feedback  |
      v                              |     Fire cmd   v           |
 +----------+                        |        |    OPERATOR       |
 |  Reports |<-- Scores, trends -----|-----+  |    (feels force)  |
 |  (instr  |                        |     |  |                   |
 |  monitor)|                        v     |  v                   |
 +----------+               +----------+  | +----------+         |
                             |   F2     |  | |   F3     |         |
 FACILITY                   |Generate  |  | | Compute  |         |
 220VAC---> Power            |Simulated |  | | Weapon   |         |
            conditioning     |Environ.  |  | | Effects  |         |
                             +----+-----+  | +----+-----+         |
                                  |        |      |               |
                     Scene data   |        |      | Trajectory    |
                     Target state |        |      | Hit/miss      |
                     Weather      |        |      | Effects data  |
                                  |        |      | Weapon state  |
                                  v        |      v               |
                             +----------+  | +----------+         |
                             |   F5     |  | |   F4     |         |
                             | Provide  |  | | Assess   |         |
                             | Sensory  |<-+-| Training |         |
                             | Feedback |    |Performnce|         |
                             +----+-----+    +----------+         |
                                  |                               |
                      Visual (scene + HUD + effects)              |
                      Audio (weapon + environment)                |
                      Haptic (vibration)                          |
                                  |                               |
                                  +--------> OPERATOR             |
                                             (sees, hears, feels)
```

## 4.2 Quantified Interface Definitions

| Interface | From | To | Signal Content | Rate / Latency |
|-----------|------|----|---------------|----------------|
| IF-01 | F1 | F3 | Azimuth angle (0-360deg, 0.1deg) | >=1000 Hz sample |
| IF-02 | F1 | F3 | Elevation angle (-10 to +85deg, 0.1deg) | >=1000 Hz sample |
| IF-03 | F1 | F3 | Trigger state (digital + analog) | <=1 ms latency |
| IF-04 | F3 | F2 | Projectile state vector (pos, vel) per round | Per round, 600 rpm |
| IF-05 | F3 | F5 | Muzzle flash trigger, tracer path data | Per round |
| IF-06 | F3 | F5 | Impact location, type, effects selection | Per impact event |
| IF-07 | F3 | F4 | Hit/miss classification per round | Per round |
| IF-08 | F3 | F4 | Engagement geometry (range, bearing, lead error) | Per burst |
| IF-09 | F2 | F5 | Rendered scene frame (>=1920x1080 x N channels) | >=60 fps |
| IF-10 | F2 | F3 | Target state (position, velocity, type) | >=60 Hz |
| IF-11 | F2 | F5 | Environmental audio parameters (sea, wind) | Continuous |
| IF-12 | F4 | F5 | HUD data (ammo count, barrel temp, score) | >=10 Hz |
| IF-13 | F4 | F6 | Session records, reports | Per session |
| IF-14 | F6 | F1 | Motion limits, resistance profile | On config change |
| IF-15 | F6 | F2 | Scenario parameters, difficulty level | On session start |
| IF-16 | F6 | F3 | Ammo type selection, weapon config | On session start |
| IF-17 | F6 | F4 | Operator profile, qualification standards | On session start |
| IF-18 | F6 | All | Start/stop/pause/reset commands | On command |
| IF-19 | F5 | Operator | Visual: >=90deg FOV, >=60fps, <=50ms latency | Continuous |
| IF-20 | F5 | Operator | Audio: 90-120 dB(A), directional | Continuous |
| IF-21 | F1 | Operator | Haptic: traverse 5-15 Nm, elevation 10-30 N | Continuous |
| IF-22 | F3 | F3 (internal) | Barrel temp state (~3 deg C/round) | Per round |

## 4.3 Latency Budget

Total system latency (input to display) must be <=50ms (S-004).

```
+-------+--------+-----------+---------+--------+---------+
| F1    | IF-01  | F3        | IF-04/5 | F5     | Display |
| Sense | Xfer   | Compute   | Xfer    | Render | Scan    |
+-------+--------+-----------+---------+--------+---------+
| <=2ms | <=1ms  | <=10ms    | <=1ms   | <=16ms | <=16ms  |
+-------+--------+-----------+---------+--------+---------+
                                          Budget: <=46ms
                                          Margin: 4ms
```

Note: F2 scene rendering runs asynchronously at >=60 fps; F3 results are
injected into the current frame pipeline. The latency budget applies to the
path from operator input change to visible response on display.

---

# 5. FUNCTION-REQUIREMENT TRACEABILITY MATRIX

## 5.1 Complete Mapping

### F1: Accept and Condition Control Inputs

| Req ID | Requirement Summary | Function |
|--------|---------------------|----------|
| K-001 | Traverse 360deg continuous | F1.1 |
| K-002 | Elevation -10deg to +85deg | F1.2 |
| K-003 | Max traverse rate >=60deg/s | F1.1, F1.4 |
| K-004 | Max elevation rate >=40deg/s | F1.2, F1.5 |
| K-005 | Friction torque variation <=10% | F1.4, F1.4.2 |
| K-006 | Variable resistance 0-100% (W) | F1.4.3 |
| K-007 | Position accuracy <=0.1deg | F1.1, F1.2 |
| K-008 | Settable soft stops | F1.6 |
| K-009 | Return-to-center capability (W) | F1.6 |
| K-010 | Manual operation feel match +/-20% | F1.4, F1.5 |
| F-001 | Traverse torque 5-15 Nm | F1.4 |
| F-002 | Elevation force 10-30 N | F1.5 |
| F-003 | Trigger pull 30-50 N | F1.3 |
| F-006 | Backlash <=0.05deg | F1.7 |
| F-007 | Grip load capacity 50 kg | F1 (structural) |
| S-005 | Position sensing <=0.1deg | F1.1, F1.2 |
| S-006 | Trigger digital ON/OFF | F1.3 |
| S-007 | Trigger pressure analog (W) | F1.3 |
| G-003 | Mount pedestal diameter match | F1 (geometry) |
| G-005 | Grip spacing match 380-420mm | F1 (geometry) |
| G-009 | 360deg traverse arc clearance | F1.1 |
| SF-004 | Software safety stop | F1.6 |

### F2: Generate Simulated Environment

| Req ID | Requirement Summary | Function |
|--------|---------------------|----------|
| S-001 | Display >=1920x1080/ch | F2.6 |
| S-002 | FOV >=90deg horizontal | F2.6 |
| S-003 | >=60 fps | F2.6 |
| S-010 | Tracer visualization | F2.6 (render) |
| S-011 | Impact visualization | F2.6 (render) |
| SC-001 | Surface: patrol boat 0-40kn | F2.2.1 |
| SC-002 | Surface: jet ski 0-60kn | F2.2.1 |
| SC-003 | Surface: floating mine | F2.2.1 |
| SC-004 | Air: helicopter 0-150kn | F2.2.2 |
| SC-005 | Air: UAV 0-100kn | F2.2.2 |
| SC-006 | Air: fixed-wing 100-300kn (W) | F2.2.2 |
| SC-007 | Shore: bunker (static) | F2.2.3 |
| SC-008 | Shore: vehicle 0-30kph | F2.2.3 |
| SC-009 | >=5 simultaneous targets | F2.4 |
| SC-010 | Day conditions | F2.1, F2.3 |
| SC-011 | Night conditions | F2.1, F2.3 |
| SC-012 | Weather effects (W) | F2.3 |
| SC-013 | Sea state SS 0-4 | F2.3 |
| OP-003 | >=20 pre-built scenarios | F2.5 |
| OP-004 | 5 difficulty levels | F2.5 |
| OP-005 | Target types: surface, air, shore | F2.2 |
| OP-006 | Day, night, weather conditions | F2.1, F2.3 |
| OP-009 | Scenario editor (W) | F2.5 |
| OP-014 | AI-driven target behavior | F2.4 |
| G-007 | Display viewing distance 1500-2500mm | F2.6 (display config) |

### F3: Compute Weapon Effects

| Req ID | Requirement Summary | Function |
|--------|---------------------|----------|
| BM-001 | Ammo types: API-T, Ball, Incendiary | F3.1.1 |
| BM-002 | Muzzle velocity 850 m/s | F3.1.1 |
| BM-003 | Projectile mass 48.3g | F3.1.1 |
| BM-004 | Drag coeff <=2% error | F3.1.2 |
| BM-005 | 6-DOF trajectory | F3.1.3 |
| BM-006 | Effective range 2000m | F3.1.7 |
| BM-007 | Extended range 3500m (W) | F3.1.7 |
| BM-008 | Dispersion <=3.0 MOA at 500m | F3.1.4 |
| BM-009 | Tracer burnout 1500m +/-100m | F3.1.6 |
| BM-010 | Time of flight <=5% error | F3.1.5 |
| FC-001 | Lead angle error <=0.5deg | F3.2.2 |
| FC-002 | Superelevation error <=0.2deg | F3.2.3 |
| FC-003 | Wind 0-30 m/s, 360deg | F3.2.4 |
| FC-004 | Rate of fire 600 rpm | F3.3.1 |
| FC-005 | Burst length 3-50 rounds | F3.3.2 |
| FC-006 | Reload 8-12 seconds | F3.3.4 |
| FC-007 | Malfunction simulation (W) | F3.3.6 |
| FC-008 | Ammunition count tracking | F3.3.3 |
| FC-009 | Barrel temp ~3deg C/rd, warn 300, cool 500 | F3.3.5 |
| OP-013 | Ballistic model <=5% trajectory error | F3.1, F3.4.1 |
| TE-008 | False-hit rate <=5% | F3.4.2 |
| TE-009 | False-miss rate <=10% | F3.4.2 |

### F4: Assess Training Performance

| Req ID | Requirement Summary | Function |
|--------|---------------------|----------|
| OP-007 | Automated, quantified scoring | F4.1 |
| OP-008 | After-action review / replay | F4.6 |
| S-014 | All events timestamped | F4.2 |
| S-015 | Video recording (W) | F4.7 |
| S-016 | Individual history >=12 months | F4.3 |
| S-017 | Skill trend reporting | F4.3, F4.5 |
| S-018 | Detailed per-engagement data log | F4.2, F4.2.1-F4.2.4 |
| S-019 | Data classification compliance | F4.8 |
| TE-001 | Control feel similarity >=80% | F4 (survey metric) |
| TE-002 | Target acquisition transfer >=15% improvement | F4.4 |
| TE-003 | Lead calculation transfer >=20% reduction | F4.4 |
| TE-004 | Burst control transfer >=15% reduction | F4.4 |
| TE-005 | Stress inoculation >=1pt improvement | F4.4 |
| TE-006 | Qualification rate 65%->90%+ (W) | F4.4 |
| TE-007 | Training time reduction >=30% | F4.4 |
| TE-010 | Sim-to-live correlation r^2 >= 0.75 | F4.4 |
| TE-011 | Sim-to-live r^2 >= 0.85 (W) | F4.4 |

### F5: Provide Sensory Feedback

| Req ID | Requirement Summary | Function |
|--------|---------------------|----------|
| S-001 | Display >=1920x1080/ch | F5.1 |
| S-002 | FOV >=90deg horizontal | F5.1 |
| S-003 | >=60 fps | F5.1 |
| S-004 | Latency <=50ms | F5.1 (system-level) |
| S-008 | Firing sound 90-120 dB(A), directional impacts | F5.3, F5.4 |
| S-009 | Spatial audio 5.1 (W) | F5.4 |
| S-010 | Tracer visualization | F5.6 |
| S-011 | Impact visualization | F5.7 |
| S-012 | HUD overlay (ammo, score) | F5.2 |
| F-005 | Recoil vibration (W) | F5.5 |
| ER-007 | Ambient lighting compatibility | F5.1 |
| SF-010 | Eye-safe display | F5.1 |

### F6: Manage System State

| Req ID | Requirement Summary | Function |
|--------|---------------------|----------|
| OP-001 | Startup <=5 min cold | F6.1 |
| OP-002 | >=12 h/day continuous | F6.5 |
| OP-010 | Vietnamese UI | F6.3 |
| OP-012 | Instructor override | F6.4 |
| OP-018 | Available within 1 working day | F6.1 |
| S-013 | Instructor interface | F6.4 |
| SF-001 | Emergency stop button | F6.7 |
| SF-004 | Software safety stop | F6.7 |
| MT-006 | Built-in self-test | F6.2, F6.8 |
| E-001 | 220VAC +/-10%, 50Hz | F6.1 (power init) |
| E-002 | <=2000W total | F6.5 (power monitoring) |
| E-003 | Standby <=100W | F6.6 |
| E-004 | UPS 10 min graceful shutdown (W) | F6.6 |
| E-008 | Documented power budget | F6.5 |
| QC-003 | Calibration procedure | F6.2 |

### Non-Functional Requirements (Not Mapped to Specific Functions)

These requirements constrain the entire system design but do not map to
individual functions. They are addressed at the system architecture level.

| Req ID | Requirement Summary | Scope |
|--------|---------------------|-------|
| G-001 | Footprint <=3.0 x 3.0m | System layout |
| G-002 | Eye height 1600-1800mm | Mechanical design |
| G-004 | Gun replica length +/-10% of 1600mm | Mechanical design |
| G-006 | Shield replica (W) | Mechanical design |
| G-008 | Adjustable platform (W) | Mechanical design |
| G-010 | Ceiling height >=2800mm | Installation |
| F-004 | Structure 150kg operator + 80kg weapon | Structural design |
| F-008 | Anti-fatigue arm rest (W) | Ergonomics |
| M-001 to M-008 | Material requirements | BOM / procurement |
| SF-002 to SF-012 | Safety (pinch, electrical, grounding, labels, tipover, standards) | All subsystems |
| ER-001 to ER-009 | Ergonomics (height, reach, duration, climate) | Mechanical + layout |
| PR-001 to PR-006 | Production (local content >=70%, standard components) | BOM / manufacturing |
| QC-001 to QC-006 | Quality control | Production process |
| AS-001 to AS-006 | Assembly | Production process |
| TR-001 to TR-006 | Transport | Packaging design |
| MT-001 to MT-009 | Maintenance (MTBF >=500h, MTTR <=4h) | System reliability |
| CO-001 to CO-007 | Cost (unit <=$45k, maintenance <=$3k/yr) | System-level |
| SCH-001 to SCH-004 | Schedule | Program management |
| OP-016 | Shore-based deployment | System scope |
| OP-017 | Indoor, 18-32 deg C, grid power | Installation |
| SF-011 | TCVN compliance | System-level |
| SF-012 | MIL-STD applicability mapping | System-level |

## 5.2 Coverage Summary

| Function | D (Must) Reqs | W (Wish) Reqs | Total | Coverage vs v1.0 |
|----------|---------------|---------------|-------|-------------------|
| F1 | 18 | 3 | 21 | +13 (was 8) |
| F2 | 18 | 5 | 23 | +12 (was 11) |
| F3 | 21 | 3 | 24 | +14 (was 10) |
| F4 | 14 | 3 | 17 | +11 (was 6) |
| F5 | 9 | 3 | 12 | +5 (was 7) |
| F6 | 13 | 2 | 15 | NEW |
| Non-functional | 71 | 18 | 89 | NEW (explicit) |
| **Total mapped** | **164** | **37** | **201** | **All 201 reqs** |

---

# 6. VARIANT DIVERGENCE NOTES (I-01 vs Other Variants)

This function structure is scoped to the I-01 (HONG HAI) base variant. The
following table identifies where other variants would require function
additions or modifications. These are NOT part of the I-01 design scope.

| Function | CTR (Container) | TAC (Tactical 3-stn) | TAB (Tabletop) | ACH (AI Coach) |
|----------|-----------------|----------------------|----------------|----------------|
| F1 | Same | Same x3 stations | Reduced: desktop joystick, no resistance model | Same |
| F2 | Same + ruggedized display | Same + shared scenario sync | Reduced: single monitor, simplified scene | Same |
| F3 | Same | Same (per station) | Simplified: 3-DOF ballistics acceptable | Same |
| F4 | Same | ADD: cross-station scoring, team metrics | Reduced: simplified scoring | ADD: AI coaching engine (S-020, S-021), ML readiness prediction, rules-to-ML transition |
| F5 | Same + sealed audio | Same + per-station audio isolation (OP-020 EMI) | Reduced: stereo headphones only | Same + coaching prompts overlay |
| F6 | ADD: generator/shore power management (E-009), environmental monitoring (-10 to +55 deg C, salt spray per OP-019) | ADD: multi-station startup sequencing, EMI/EMC compliance (OP-020) | Simplified: single PC startup | ADD: ML model state management, confidence calibration (S-020) |
| Non-func | MIL-STD-810H environmental qual, local content >=50% (PR-001 relaxed) | MIL-STD-461G EMI/EMC | Reduced footprint, lower cost target | Same + AI governance requirements |

---

# 7. DOCUMENT CONTROL

## 7.1 Change History

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Engineering Team | Initial function structure (Phase 1 scope), 5 L1 functions, ~20 L2 functions, sparse req mapping |
| 2.0 | 2026-03-05 | KN (Phase 2 Conceptual Design) | Full Pahl-Beitz 5-step abstraction documented. Added F6 (Manage System State). Expanded F3 with 4 L2 + 14 L3 sub-functions for quantified ballistics (BM/FC reqs from v1.3). Added F1.7 backlash compensation, F1.4.x friction sub-decomposition. Added F4.2.x detailed data logging. Complete 201-requirement traceability matrix (was ~40 reqs in v1.0). Quantified 22 interface definitions. Added latency budget. Added variant divergence table. Scoped to I-01 base variant. |

## 7.2 Approval

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Engineering Lead | | | |
| Systems Engineer | | | |
| Quality Assurance | | | |

---

**NEXT**: Document 011 - Morphological Matrix (Working Principles search for each sub-function)

---

*VN-12.7MM-SIM-010 Function Structure v2.0*
*Phase 2: Conceptual Design -- I-01 (HONG HAI) Base Variant*
