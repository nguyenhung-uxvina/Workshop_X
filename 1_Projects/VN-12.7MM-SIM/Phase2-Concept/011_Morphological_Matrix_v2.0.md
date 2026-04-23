# VN-12.7MM-SIM-011: MORPHOLOGICAL MATRIX
## Phase 2: Conceptual Design -- Scope: I-01 (Standard) Base Variant

**Document**: VN-12.7MM-SIM-011-MM | **Version**: 2.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Supersedes**: VN-12.7MM-SIM-004-MM v1.0 (2026-01-20)
**Requirements Baseline**: VN-12.7MM-SIM-002-REQ v1.3 (2026-03-05)

---

# 1. SCOPE AND CHANGES FROM v1.0

This document replaces the Phase 1 morphological matrix (004-MM v1.0) with a rigorous Phase 2
version incorporating:

1. Working principle documentation for every solution option (physical effect, TRL, cost, local content)
2. Five additional sub-functions: F3.1 Ballistic computation, F3.2 Fire control, F4.1 Performance assessment, F6.1 System management, F1.4 Resistance mechanism (now quantified)
3. Updated concept variants aligned to quantified requirements from REQ v1.3
4. Explicit interface compatibility checks per concept path

All requirements references use IDs from VN-12.7MM-SIM-002-REQ v1.3.

---

# 2. SUB-FUNCTION DECOMPOSITION

The following sub-functions are addressed in the morphological matrix. They derive from the
function structure (Doc 003/010) and map to requirement categories.

| ID | Sub-Function | Key Requirements | Critical Threshold |
|----|-------------|-----------------|-------------------|
| F1.1 | Sense traverse position | K-001, K-007, S-005 | 360 deg, resolution <=0.1 deg |
| F1.2 | Sense elevation position | K-002, K-007, S-005 | -10 to +85 deg, resolution <=0.1 deg |
| F1.3 | Sense trigger action | S-006, S-007, F-003 | ON/OFF digital, 30-50 N |
| F1.4 | Provide resistance/feel | K-005, K-010, F-001, F-006 | Friction variation <=10%, backlash <=0.05 deg |
| F2.1 | Generate visual scene | S-001, S-002, S-003 | >=1920x1080/ch, >=90 deg FOV, >=60 fps |
| F2.2 | Render 3D environment | S-003, S-004, S-010, S-011 | Latency <=50 ms, tracer/impact vis |
| F2.3 | Control target behavior | OP-014, SC-001 to SC-009 | AI-driven, >=5 simultaneous targets |
| F3.1 | Compute ballistic trajectory | BM-004, BM-005, BM-008 | 6-DOF, drag error <=2%, dispersion <=3.0 MOA |
| F3.2 | Compute fire control solution | FC-001, FC-002, FC-003 | Lead error <=0.5 deg, superelev <=0.2 deg, wind 0-30 m/s |
| F4.1 | Assess and report performance | OP-007, OP-008, TE-008, TE-010 | Scoring, AAR, r-squared >=0.75 |
| F5.1 | Provide audio feedback | S-008, S-009 | >=90 dB(A), directional |
| F5.2 | Provide physical structure | G-001 to G-005, F-004 | Footprint <=3x3 m, 230 kg load |
| F6.1 | Manage system state | OP-001, MT-006 | Self-test, startup <=5 min |

---

# 3. WORKING PRINCIPLES BY SUB-FUNCTION

## 3.1 F1.1 -- Sense Traverse Position

| Property | Sol-A: Optical Encoder | Sol-B: Potentiometer | Sol-C: Resolver |
|----------|----------------------|---------------------|----------------|
| Physical effect | Optical grating + photodetector; incremental or absolute position count | Resistive voltage divider proportional to shaft angle | Electromagnetic coupling; rotor-stator transformer with angle-dependent output |
| TRL | 9 | 9 | 9 |
| Resolution | <=0.01 deg (16-bit) | 0.1-0.5 deg (10-bit ADC) | <=0.02 deg (14-bit equivalent) |
| Advantages | High accuracy, no contact wear, digital output, widely available | Very low cost, simple interface, no complex electronics | Extremely robust, MIL-grade, tolerant of EMI/vibration/dust |
| Disadvantages | Sensitive to dust/moisture, requires index pulse for absolute, moderate cost | Wear over time, noise, limited life (~1M cycles), nonlinearity | Requires excitation + demodulation circuit, higher cost, heavier |
| Cost estimate | Medium ($80-150) | Low ($5-20) | High ($200-400) |
| Local content (VN-sourced) | N -- import (Omron, Autonics) | Y -- available locally | N -- import (Tamagawa, Moog) |
| Key suppliers | Omron, Autonics, CUI, Broadcom | Bourns, Alpha (local equiv.) | Tamagawa, Moog, Harowe |

## 3.2 F1.2 -- Sense Elevation Position

| Property | Sol-A: Optical Encoder | Sol-B: Potentiometer | Sol-C: MEMS Inclinometer |
|----------|----------------------|---------------------|------------------------|
| Physical effect | Same as F1.1 Sol-A | Same as F1.1 Sol-B | MEMS accelerometer measuring gravity vector; absolute angle |
| TRL | 9 | 9 | 8 |
| Resolution | <=0.01 deg | 0.1-0.5 deg | 0.01-0.05 deg |
| Advantages | Same as F1.1; proven in elevation axes | Low cost, simple | Absolute angle, compact, no mechanical coupling needed |
| Disadvantages | Same as F1.1 | Same as F1.1; gravity sag on long arms | Dynamic error under vibration, bandwidth typically <=50 Hz, drift |
| Cost estimate | Medium ($80-150) | Low ($5-20) | Medium ($50-150) |
| Local content (VN-sourced) | N | Y | N -- import (Murata, TDK) |
| Key suppliers | Omron, Autonics | Bourns, Alpha | Murata, TDK InvenSense, Analog Devices |

## 3.3 F1.3 -- Sense Trigger Action

| Property | Sol-A: Microswitch | Sol-B: Force Sensor (FSR) | Sol-C: Optical Switch |
|----------|--------------------|--------------------------|--------------------|
| Physical effect | Mechanical snap-action contact; discrete ON/OFF | Piezoresistive film; resistance decreases with applied force | IR LED + photodetector interrupted by trigger blade |
| TRL | 9 | 8 | 9 |
| Response time | <1 ms | <5 ms (analog) | <0.1 ms |
| Advantages | Extremely reliable, long life (10M+ cycles), tactile click, simple digital I/O | Analog output for partial-pull sensing (S-007), adjustable threshold | No contact wear, very fast, no bounce, long life |
| Disadvantages | Binary only (no partial pull), contact bounce (debounce needed) | Limited durability (~1M cycles), temperature drift, calibration needed | Requires alignment, susceptible to ambient IR, no tactile feedback |
| Cost estimate | Low ($2-5) | Low ($10-25) | Low ($5-15) |
| Local content (VN-sourced) | Y -- Omron Vietnam factory | Partially -- sensor imported, integration local | N -- import |
| Key suppliers | Omron, Cherry, Honeywell | Interlink, Tekscan, FSR400 series | Omron, Sharp |

## 3.4 F1.4 -- Provide Resistance Mechanism

Quantified requirement: K-005 friction torque variation <=10% across full traverse; F-006 backlash <=0.05 deg; K-010 feel match +-20%.

| Property | Sol-A: Friction Brake | Sol-B: Magnetic Particle Brake | Sol-C: Servo Motor (Direct Drive) |
|----------|----------------------|------------------------------|----------------------------------|
| Physical effect | Friction pad pressed against disc/drum by spring or pneumatic; passive torque | Magnetic field controls iron particle chain in gap; torque proportional to current | Brushless DC motor in torque mode; active closed-loop force feedback |
| TRL | 9 | 8 | 8 |
| Torque range | 5-20 Nm (adjustable via spring preload) | 0.5-50 Nm (continuously variable via current) | 0-100+ Nm (programmable) |
| Torque variation | 15-25% (pad wear, temperature) -- EXCEEDS 10% LIMIT without compensation | 3-8% (stable, no contact wear) -- MEETS 10% LIMIT | <2% (closed-loop servo control) -- MEETS 10% LIMIT |
| Backlash contribution | 0.05-0.2 deg (bearing play) -- MARGINAL | 0.02-0.05 deg (direct coupling) -- MEETS 0.05 deg | <0.01 deg (direct drive, no gearbox) -- MEETS 0.05 deg |
| Advantages | Simple, no power required, robust, very low cost | Smooth controllable torque, no wear surfaces, long life (>10M rev), meets K-005 | Fully programmable feel profiles, active force feedback, haptic effects possible |
| Disadvantages | Torque variation exceeds K-005 unless compensated; pad replacement needed; cannot dynamically adjust | Requires DC power supply + controller, heat dissipation at high duty, import only | High cost, complex control loop, requires real-time servo driver, power consumption |
| Cost estimate | Low ($30-80) | Medium ($150-400) | High ($500-2000) |
| Local content (VN-sourced) | Y -- fabricable locally | N -- import (Ogura, Placid, Mitsubishi) | N -- import (Maxon, Kollmorgen, Yaskawa) |
| Key suppliers | Custom fabrication, local machine shops | Ogura, Placid Industries, Mitsubishi | Maxon, Kollmorgen, Yaskawa, Teknic |

**Note on Sol-A compliance**: Friction brake alone does NOT meet K-005 (<=10% torque variation) without active compensation. A hybrid approach (friction brake + torque sensor + servo trim) could meet spec but adds complexity equivalent to Sol-C. For I-01 scope, Sol-A is borderline non-compliant.

## 3.5 F2.1 -- Generate Visual Scene (Display Type)

| Property | Sol-A: Single Monitor | Sol-B: Triple Monitor Array | Sol-C: Curved Projection Screen |
|----------|----------------------|---------------------------|-------------------------------|
| Physical effect | Single LCD/LED panel, direct view | Three LCD/LED panels arranged in arc | Projector(s) onto curved surface; edge-blending for seamless image |
| TRL | 9 | 9 | 8 |
| FOV achievable | 40-50 deg (insufficient for S-002 >=90 deg) | 100-140 deg (MEETS S-002) | 120-200 deg (EXCEEDS S-002) |
| Resolution per channel | 1920x1080 to 3840x2160 | 1920x1080 per panel (5760x1080 total) | Dependent on projector; typically 1920x1080 per projector |
| Advantages | Lowest cost, simplest setup, readily available | Good FOV, standard components, easy replacement, proven in sim industry | Seamless immersive FOV, no bezels, best immersion |
| Disadvantages | FOV too narrow for requirement S-002 -- NON-COMPLIANT | Bezel lines between panels (mitigated by thin-bezel), 3x GPU load | High cost, alignment-sensitive, lamp replacement, room must be dark, space-hungry |
| Cost estimate | Low ($200-500) | Medium ($600-1500 for 3 panels) | High ($3000-8000 for projectors + screen) |
| Local content (VN-sourced) | Y -- Samsung/LG Vietnam factories | Partially -- panels import, mounting local | N -- projectors import, screen possibly local |
| Key suppliers | Samsung, LG, ASUS | Samsung, LG, Dell | Barco, Christie, Epson |

**Note on Sol-A compliance**: Single monitor does NOT meet S-002 (>=90 deg FOV). Included only for V1-Budget concept as a minimum-viable option requiring documented waiver.

## 3.6 F2.2 -- Render 3D Environment (Engine)

| Property | Sol-A: Unity | Sol-B: Unreal Engine | Sol-C: Custom / Flight Sim Engine |
|----------|-------------|---------------------|---------------------------------|
| Physical effect | Game engine; real-time rasterization + scriptable pipeline | Game engine; Nanite/Lumen for high-fidelity rendering | Purpose-built or adapted engine (e.g., VBS, FlightGear) |
| TRL | 9 | 9 | 7-8 |
| Rendering quality | Good; adequate for training sim; PBR materials | Excellent; state-of-art lighting, textures, water rendering | Variable; often lower visual fidelity but validated physics |
| Latency (frame pipeline) | Typically 2-3 frames (33-50 ms at 60 fps) | Typically 2-3 frames; Lumen adds overhead | 1-2 frames if optimized |
| Advantages | Large asset store, C# scripting, cross-platform, free for revenue <$1M, large community | Best-in-class visuals, Blueprints + C++, naval/water rendering excellent | Domain-specific features, may have pre-built military scenarios, DIS/HLA support |
| Disadvantages | Visual ceiling lower than Unreal for water/sky, GC pauses in C# | Steeper learning curve, higher GPU demands, licensing complexity for defense | Smaller community, limited asset availability, longer development for custom features |
| Cost estimate | Low (free tier) | Low (free tier, 5% royalty >$1M) | High (license fees $10K-100K+) |
| Local content (VN-sourced) | N/A (software) -- developer skill available locally | N/A (software) -- developer skill available locally | N/A -- specialized skill scarce locally |
| Key suppliers | Unity Technologies | Epic Games | Bohemia Interactive (VBS), Presagis |

## 3.7 F2.3 -- Control Target Behavior (AI)

| Property | Sol-A: Scripted Paths | Sol-B: Behavior Trees | Sol-C: ML-Based (Reinforcement Learning) |
|----------|----------------------|----------------------|----------------------------------------|
| Physical effect | Pre-recorded waypoint sequences; deterministic playback | Hierarchical state machine; condition-action rules; reactive | Neural network policy trained via simulation; adaptive behavior |
| TRL | 9 | 8 | 5-6 |
| Behavior realism | Low -- repetitive, predictable after few sessions | Medium-High -- reactive to gunner actions, diverse behaviors | High -- unpredictable, adapts to gunner skill level |
| Advantages | Easy to author, deterministic (good for testing), minimal CPU | Reactive, maintainable, debuggable, standard in game AI, moderate CPU | Most realistic, difficulty auto-adjusts, unique encounters every session |
| Disadvantages | Predictable (reduces training value), tedious to author many scenarios | Requires skilled designer for complex trees, limited emergent behavior | Long training time, black-box behavior, hard to validate/debug, GPU-intensive |
| Cost estimate | Low (dev time only) | Low-Medium (dev time) | High (GPU training + specialized ML engineer) |
| Local content (VN-sourced) | Y -- in-house development | Y -- in-house development | Partially -- training infrastructure import, ML skill growing locally |
| Key suppliers | In-house | In-house (using Unity/Unreal BT frameworks) | In-house + cloud GPU (AWS/Azure) |

## 3.8 F3.1 -- Compute Ballistic Trajectory

Quantified requirement: BM-004 drag error <=2%, BM-005 6-DOF, BM-008 dispersion <=3.0 MOA.

| Property | Sol-A: 3-DOF Model | Sol-B: 6-DOF Model (Analytical) | Sol-C: Real-Time Physics Engine |
|----------|--------------------|---------------------------------|-------------------------------|
| Physical effect | Point-mass trajectory: gravity + drag only (no spin, no Magnus) | Rigid-body 6-DOF: gravity, drag, lift, Magnus, spin decay, Coriolis, wind | General-purpose physics solver with ballistic plugin |
| TRL | 9 | 8 | 6-7 |
| Drag modeling | Siacci or 3rd-order fit; error typically 3-5% at range | 4th-order polynomial or table lookup; error <=2% (meets BM-004) | Depends on implementation; often simplified |
| Dispersion modeling | Statistical scatter overlay; coarse | Spin-dependent yaw + Monte Carlo; matches <=3.0 MOA (meets BM-008) | Generic; not validated for specific ammunition |
| Wind model | Constant crosswind assumption | Full 3D wind field, 0-30 m/s, 360 deg (meets FC-003) | Variable; often simplified |
| Computation per round | <0.1 ms | 0.5-2 ms | 1-5 ms (depends on solver) |
| Advantages | Fast, simple, adequate for short range | Accurate, validated against firing tables, meets all BM requirements | Integrated with rendering engine, handles collisions natively |
| Disadvantages | Does NOT meet BM-004 (>2% drag error at range), poor dispersion model | More complex to implement, requires validated aero data | Unvalidated for specific ammo, hard to tune to spec, black-box physics |
| Cost estimate | Low | Medium (engineering time for validation) | Medium-High |
| Local content (VN-sourced) | Y -- in-house math | Y -- in-house implementation | Partially -- engine import, integration local |
| Key suppliers | In-house | In-house (using published 12.7mm aero data) | Unity Physics, Unreal Chaos, custom |

**Note on Sol-A compliance**: 3-DOF model does NOT meet BM-004 (<=2% drag error) or BM-008 (<=3.0 MOA validated dispersion). Included only for V1-Budget as minimum-viable with documented waiver.

## 3.9 F3.2 -- Compute Fire Control Solution

Quantified requirement: FC-001 lead error <=0.5 deg, FC-002 superelevation error <=0.2 deg, FC-003 wind 0-30 m/s.

| Property | Sol-A: Lookup Table | Sol-B: Analytical Real-Time | Sol-C: Predictive (Kalman Filter + Lead) |
|----------|--------------------|-----------------------------|----------------------------------------|
| Physical effect | Pre-computed tables indexed by range, speed, angle; interpolation | Closed-form lead/superelevation equations evaluated per frame | Target state estimation via Kalman filter; predicted intercept point |
| TRL | 9 | 8 | 7 |
| Lead accuracy | Dependent on table resolution; typically <=0.5 deg at table points, worse between | <=0.3 deg (continuous function, meets FC-001) | <=0.2 deg (optimal estimation, exceeds FC-001) |
| Superelevation accuracy | <=0.2 deg if table granularity sufficient (meets FC-002) | <=0.1 deg (meets FC-002) | <=0.1 deg (meets FC-002) |
| Wind handling | Separate wind correction table; coarse | Integrated wind term in equations; 0-30 m/s, 1 m/s steps (meets FC-003) | Full wind state in estimator (meets FC-003) |
| Advantages | Simple, deterministic, fast lookup, easy to validate | Accurate, handles arbitrary conditions, transparent math | Best accuracy, handles maneuvering targets, smooth tracking |
| Disadvantages | Large tables for full coverage, interpolation errors, rigid | More CPU than lookup, requires validated coefficients | Complex implementation, tuning required, harder to validate |
| Cost estimate | Low | Medium | High |
| Local content (VN-sourced) | Y | Y | Y (software) |
| Key suppliers | In-house | In-house | In-house |

## 3.10 F4.1 -- Assess and Report Performance

Quantified requirement: TE-008 false-hit <=5%, TE-010 sim-to-live r-squared >=0.75, OP-007 automated scoring, OP-008 AAR replay.

| Property | Sol-A: Rule-Based Scoring | Sol-B: Statistical Scoring + AAR | Sol-C: ML-Assisted Analytics |
|----------|--------------------------|----------------------------------|----------------------------|
| Physical effect | Hit/miss determined by geometric intersection; fixed scoring rules | Probabilistic hit assessment using dispersion cone + engagement logging + replay | Neural network scoring model trained on live-fire correlation data |
| TRL | 9 | 7-8 | 5 |
| False-hit control | Depends on model fidelity; typically 5-10% | Dispersion-cone method: <=5% achievable with calibration (meets TE-008) | Potentially best, but requires training data not yet available |
| Sim-to-live correlation | r-squared ~0.5-0.65 (rule-based often over-scores) | r-squared >=0.75 achievable with validated ballistic model (meets TE-010) | Potentially r-squared >=0.85 but needs live-fire calibration dataset |
| AAR capability | Basic: hit list, round count | Full replay with timeline, 3D view, per-burst analysis, exportable reports | Full replay + AI-generated coaching insights |
| Advantages | Simple, deterministic, easy to implement | Meets all quantified requirements, auditable scoring, professional AAR | Best potential accuracy, adaptive coaching |
| Disadvantages | Likely fails TE-010 correlation threshold, no nuanced assessment | Requires statistical calibration effort, more complex software | Requires live-fire data for training (chicken-and-egg), black box |
| Cost estimate | Low | Medium | High |
| Local content (VN-sourced) | Y | Y | Partially |
| Key suppliers | In-house | In-house | In-house + cloud |

## 3.11 F5.1 -- Provide Audio Feedback

| Property | Sol-A: Stereo Speakers | Sol-B: 5.1 Surround System | Sol-C: Headphones (Closed-Back) |
|----------|----------------------|---------------------------|-------------------------------|
| Physical effect | 2-channel left/right amplified speakers | 5.1 discrete channels with subwoofer; spatial audio processing | Over-ear drivers with spatial audio DSP (binaural) |
| TRL | 9 | 9 | 9 |
| SPL at operator | 85-100 dB(A) (meets S-008 >=90 dB(A)) | 90-110 dB(A) (meets S-008) | 85-105 dB(A) (meets S-008) |
| Spatial directional cues | Limited; basic stereo panning | Good; discrete channels provide directional cues (meets S-009) | Excellent with HRTF processing; best directional cues |
| Advantages | Cheap, simple, no wearable gear, shared audio for observers | Strong bass/recoil feel, spatial awareness, industry standard for simulators | Best spatial resolution, no room acoustics issues, private |
| Disadvantages | No directional cues, room reflection issues | Cost, room setup, sound leakage to adjacent stations | Uncomfortable for 2h sessions, isolates operator from instructor, hearing protection concern |
| Cost estimate | Low ($50-150) | Medium ($200-600) | Low-Medium ($100-300) |
| Local content (VN-sourced) | Y | Partially -- speakers local, AVR import | N -- import |
| Key suppliers | JBL, Edifier (local) | JBL, Yamaha, Denon | Audio-Technica, Beyerdynamic |

## 3.12 F5.2 -- Provide Physical Structure

| Property | Sol-A: Steel Welded Frame | Sol-B: Aluminum Fabricated Frame | Sol-C: Decommissioned Weapon Parts |
|----------|--------------------------|--------------------------------|-----------------------------------|
| Physical effect | Structural steel tubing welded to form pedestal + cradle | Aluminum extrusion + machined brackets, bolted assembly | Actual NSV/DShKM mount (decommissioned), stripped of firing components |
| TRL | 9 | 9 | 7 (for simulator integration) |
| Weight | 60-100 kg | 30-60 kg | 80-120 kg (full weapon mount) |
| Advantages | Robust, cheap, local fabrication, heavy = stable, easy to weld/modify | Lighter, corrosion-resistant, professional appearance, modular | 100% authentic feel, ergonomics match by definition, high perceived value |
| Disadvantages | Heavy, corrosion if not treated, less refined appearance | Higher material cost, requires CNC capability, less damping | Supply chain risk (MoD approval), regulatory complexity, difficult to modify/instrument |
| Cost estimate | Low ($200-500) | Medium ($500-1500) | High ($1000-3000, plus regulatory cost) |
| Local content (VN-sourced) | Y -- fully local | Y -- extrusions from local suppliers, CNC local | Partially -- weapon parts from MoD, instrumentation local |
| Key suppliers | Local machine shops | Local CNC shops, Misumi (extrusions) | MoD surplus, Z111/Z113 factories |

## 3.13 F6.1 -- Manage System State

Quantified requirement: OP-001 startup <=5 min, MT-006 built-in self-test.

| Property | Sol-A: Manual Startup Sequence | Sol-B: Automated BIST + Sequencer | Sol-C: Full Health Management System |
|----------|------------------------------|----------------------------------|-------------------------------------|
| Physical effect | Operator follows checklist; sequential power-on; manual checks | Software-controlled power sequencing with built-in self-test (BIST) at boot | Continuous health monitoring, predictive maintenance, automated diagnostics |
| TRL | 9 | 8 | 6 |
| Startup time | 5-10 min (operator-dependent) -- MARGINAL for OP-001 | 2-4 min (automated) -- MEETS OP-001 | 3-5 min (more checks) -- MEETS OP-001 |
| Self-test coverage | None (manual visual checks only) -- FAILS MT-006 | Sensor check, display check, audio check, comms check -- MEETS MT-006 | All of Sol-B + thermal monitoring, vibration trending, component life tracking |
| Advantages | No development cost, simple | Reliable startup, catches faults early, meets both requirements | Best reliability, supports MT-001 MTBF tracking, predictive |
| Disadvantages | Does not meet MT-006, operator-error prone, slow | Moderate development effort for BIST routines | Complex, over-engineered for I-01 scope, high dev cost |
| Cost estimate | Low (zero) | Low-Medium (software only) | High (software + additional sensors) |
| Local content (VN-sourced) | N/A | Y (software) | Partially |
| Key suppliers | N/A | In-house | In-house + monitoring hardware |

---

# 4. MORPHOLOGICAL MATRIX

## 4.1 Matrix Overview

| Sub-Function | Sol-A | Sol-B | Sol-C |
|-------------|-------|-------|-------|
| F1.1 Sense traverse | Optical encoder | Potentiometer | Resolver |
| F1.2 Sense elevation | Optical encoder | Potentiometer | MEMS inclinometer |
| F1.3 Sense trigger | Microswitch | Force sensor (FSR) | Optical switch |
| F1.4 Resistance mechanism | Friction brake | Magnetic particle brake | Servo motor (direct drive) |
| F2.1 Visual display | Single monitor | Triple monitor array | Curved projection screen |
| F2.2 Rendering engine | Unity | Unreal Engine | Custom/flight sim engine |
| F2.3 Target AI | Scripted paths | Behavior trees | ML-based (RL) |
| F3.1 Ballistic computation | 3-DOF model | 6-DOF analytical | Real-time physics engine |
| F3.2 Fire control | Lookup table | Analytical real-time | Predictive (Kalman) |
| F4.1 Performance assessment | Rule-based scoring | Statistical scoring + AAR | ML-assisted analytics |
| F5.1 Audio system | Stereo speakers | 5.1 surround | Headphones |
| F5.2 Physical structure | Steel welded frame | Aluminum fabricated | Decommissioned weapon parts |
| F6.1 System management | Manual startup | Automated BIST + sequencer | Full health management |

---

# 5. CONCEPT VARIANTS

## 5.1 Concept V1: Budget Trainer

**Design philosophy**: Minimum viable cost. Accept known requirement waivers.

| Sub-Function | Selected | Rationale |
|-------------|----------|-----------|
| F1.1 Sense traverse | Sol-B: Potentiometer | Lowest cost; 0.1-0.5 deg resolution acceptable for basic training |
| F1.2 Sense elevation | Sol-B: Potentiometer | Matched pair with traverse |
| F1.3 Sense trigger | Sol-A: Microswitch | Reliable, simple digital output |
| F1.4 Resistance | Sol-A: Friction brake | Passive, no power; BUT K-005 waiver required (variation >10%) |
| F2.1 Display | Sol-A: Single monitor | Lowest cost; S-002 waiver required (FOV <90 deg) |
| F2.2 Rendering | Sol-A: Unity | Free tier, adequate |
| F2.3 Target AI | Sol-A: Scripted paths | Simplest development |
| F3.1 Ballistics | Sol-A: 3-DOF model | Simplified; BM-004 waiver required (drag error >2%) |
| F3.2 Fire control | Sol-A: Lookup table | Simple, adequate for 3-DOF model |
| F4.1 Performance | Sol-A: Rule-based scoring | Basic scoring only; TE-010 likely not met |
| F5.1 Audio | Sol-A: Stereo speakers | Basic feedback |
| F5.2 Structure | Sol-A: Steel frame | Durable, fully local |
| F6.1 System mgmt | Sol-A: Manual startup | No development cost |

**Estimated unit cost**: $22,000-28,000
**Requirement waivers required**: K-005, S-002, BM-004, BM-008, TE-010, MT-006
**Local content**: ~85%
**Development time**: 6-8 months
**Key risk**: Training effectiveness may be insufficient to justify procurement

### Interface Compatibility Check -- V1

| Interface | Compatibility | Notes |
|-----------|--------------|-------|
| Potentiometer --> Unity | Compatible | Analog input via ADC to USB; standard |
| Friction brake <--> Potentiometer axis | Compatible | Both mount on same shaft; simple mechanical |
| Single monitor <-- Unity | Compatible | Standard HDMI output |
| 3-DOF ballistics --> Rule-based scoring | Compatible | Scoring uses trajectory output directly |
| Manual startup --> All subsystems | Compatible | Sequential power-on, no dependencies |

**Verdict**: All interfaces compatible. System is simple with few integration challenges. Primary issue is performance, not compatibility.

---

## 5.2 Concept V2: Standard Trainer (BASELINE)

**Design philosophy**: Meet all quantified MUST requirements within $45K cost ceiling. Balanced performance-cost trade-off. This is the I-01 baseline.

| Sub-Function | Selected | Rationale |
|-------------|----------|-----------|
| F1.1 Sense traverse | Sol-A: Optical encoder | Meets K-007 (<=0.1 deg), proven, moderate cost |
| F1.2 Sense elevation | Sol-A: Optical encoder | Matched pair, consistent accuracy |
| F1.3 Sense trigger | Sol-B: Force sensor | Analog capability (S-007 wish), better feel for training |
| F1.4 Resistance | Sol-B: Magnetic particle brake | Meets K-005 (<=10% variation), meets F-006 (<=0.05 deg backlash) |
| F2.1 Display | Sol-B: Triple monitor array | Meets S-002 (>=90 deg FOV), standard sim industry approach |
| F2.2 Rendering | Sol-A: Unity | Good water rendering, large asset library, C# dev speed |
| F2.3 Target AI | Sol-B: Behavior trees | Reactive targets, maintainable, proven |
| F3.1 Ballistics | Sol-B: 6-DOF analytical | Meets BM-004 (<=2% drag), BM-005, BM-008 (<=3.0 MOA) |
| F3.2 Fire control | Sol-B: Analytical real-time | Meets FC-001 (<=0.5 deg), FC-002 (<=0.2 deg), FC-003 |
| F4.1 Performance | Sol-B: Statistical scoring + AAR | Meets TE-008 (<=5% false-hit), TE-010 (r-sq >=0.75) |
| F5.1 Audio | Sol-B: 5.1 surround | Spatial cues (S-009 wish), meets S-008 |
| F5.2 Structure | Sol-A: Steel frame | Robust, local, cost-effective |
| F6.1 System mgmt | Sol-B: Automated BIST | Meets OP-001 (<=5 min), MT-006 (self-test) |

**Estimated unit cost**: $38,000-45,000
**Requirement waivers required**: None for MUST requirements
**Local content**: ~70% (meets PR-001)
**Development time**: 10-12 months
**Key risk**: 6-DOF ballistic model validation against live-fire data

### Interface Compatibility Check -- V2

| Interface | Compatibility | Notes |
|-----------|--------------|-------|
| Optical encoder --> Unity | Compatible | Digital pulse/SPI to microcontroller to USB; standard interface board |
| Magnetic brake <--> Encoder axis | Compatible | Brake mounts on same shaft; encoder reads through brake coupling. Requires rigid coupling to maintain backlash spec |
| Force sensor --> Microcontroller | Compatible | Analog input; threshold configurable in firmware |
| Triple monitor <-- Unity | Compatible | 3x HDMI from GPU; Nvidia Surround or similar |
| 6-DOF ballistics --> Statistical scoring | Compatible | Scoring uses dispersion cone from ballistic model; both in same software process |
| 6-DOF ballistics <--> Analytical FC | Compatible | FC outputs firing solution; ballistics computes trajectory; tight coupling required |
| BIST --> All subsystems | Compatible | BIST polls each subsystem via software bus; requires status API per module |
| Behavior tree AI --> Unity scene | Compatible | Standard Unity integration; AI drives target transforms |

**Verdict**: All interfaces compatible. Critical coupling between magnetic brake and encoder shaft requires mechanical design attention to maintain F-006 backlash spec. Ballistics-to-scoring interface requires shared data model.

---

## 5.3 Concept V3: Enhanced Trainer

**Design philosophy**: Maximum training fidelity. Accepts higher cost and development risk.

| Sub-Function | Selected | Rationale |
|-------------|----------|-----------|
| F1.1 Sense traverse | Sol-C: Resolver | Military-grade robustness, EMI tolerant |
| F1.2 Sense elevation | Sol-C: Resolver | Matched pair; environmental hardening |
| F1.3 Sense trigger | Sol-B: Force sensor | Analog feel, consistent with V2 |
| F1.4 Resistance | Sol-C: Servo motor | Fully programmable feel profiles, active recoil simulation |
| F2.1 Display | Sol-C: Curved projection screen | 150+ deg immersive FOV |
| F2.2 Rendering | Sol-B: Unreal Engine | Best visual fidelity, Nanite/Lumen |
| F2.3 Target AI | Sol-C: ML-based (RL) | Adaptive difficulty, unique scenarios |
| F3.1 Ballistics | Sol-B: 6-DOF analytical | Same validated model as V2 |
| F3.2 Fire control | Sol-C: Predictive (Kalman) | Best accuracy for maneuvering targets |
| F4.1 Performance | Sol-C: ML-assisted analytics | AI coaching potential (future ACH variant path) |
| F5.1 Audio | Sol-B: 5.1 surround | Spatial, proven |
| F5.2 Structure | Sol-B: Aluminum frame | Professional appearance, lighter |
| F6.1 System mgmt | Sol-C: Full health management | Predictive maintenance |

**Estimated unit cost**: $58,000-72,000
**Requirement waivers required**: CO-001 (exceeds $45K) -- NON-COMPLIANT for I-01
**Local content**: ~50-55% (below PR-001 70% for I-01)
**Development time**: 14-18 months (exceeds SCH-001 12 months)
**Key risk**: Cost overrun, schedule overrun, ML target AI validation, curved screen integration

### Interface Compatibility Check -- V3

| Interface | Compatibility | Notes |
|-----------|--------------|-------|
| Resolver --> Unreal | ATTENTION | Resolver requires R/D converter to digital; adds latency. Must verify S-004 (<=50 ms) end-to-end |
| Servo motor <--> Resolver axis | Compatible | Direct drive motor includes integral feedback; resolver can share shaft |
| Servo motor --> Unreal (haptic) | ATTENTION | Requires real-time servo loop at >=1 kHz; Unreal game loop at 60-120 Hz. Separate real-time controller needed (e.g., EtherCAT servo drive) |
| Curved screen <-- Unreal | ATTENTION | Requires multi-projector warping + edge blending. Unreal nDisplay plugin supports this but adds complexity |
| ML target AI --> Unreal | Compatible but COMPLEX | RL inference runs alongside engine; requires GPU sharing or separate inference GPU |
| Kalman FC <--> 6-DOF ballistics | Compatible | Both numerical; Kalman adds state estimation layer |
| ML analytics --> Data pipeline | ATTENTION | Requires training data pipeline and live-fire correlation dataset (not yet available) |

**Verdict**: Multiple interface attention items. Servo motor real-time control loop is the highest integration risk. Curved screen alignment is second. ML components add validation complexity. This concept requires significantly more systems integration effort.

---

## 5.4 Concept V4: Authentic Replica

**Design philosophy**: Maximum physical authenticity using decommissioned weapon parts. Proven electronic systems.

| Sub-Function | Selected | Rationale |
|-------------|----------|-----------|
| F1.1 Sense traverse | Sol-A: Optical encoder (retrofitted) | Added to existing weapon mount bearing |
| F1.2 Sense elevation | Sol-A: Optical encoder (retrofitted) | Added to elevation trunnion |
| F1.3 Sense trigger | Sol-A: Microswitch (in trigger group) | Retrofit into actual trigger mechanism; preserves pull feel |
| F1.4 Resistance | Actual weapon mount friction | Real friction characteristics; inherent compliance with K-010 |
| F2.1 Display | Sol-B: Triple monitor array | Good FOV, standard, proven |
| F2.2 Rendering | Sol-A: Unity | Adequate, faster development |
| F2.3 Target AI | Sol-B: Behavior trees | Proven, reactive |
| F3.1 Ballistics | Sol-B: 6-DOF analytical | Same validated model |
| F3.2 Fire control | Sol-B: Analytical real-time | Meets FC requirements |
| F4.1 Performance | Sol-B: Statistical scoring + AAR | Meets TE requirements |
| F5.1 Audio | Sol-B: 5.1 surround | Spatial, proven |
| F5.2 Structure | Sol-C: Decommissioned weapon parts | 100% authentic ergonomics |
| F6.1 System mgmt | Sol-B: Automated BIST | Meets OP/MT requirements |

**Estimated unit cost**: $48,000-58,000
**Requirement waivers required**: CO-001 likely (>$45K), PR-001 uncertain (weapon parts from MoD -- classification unclear)
**Local content**: ~40-55% (weapon parts MoD-sourced but not commercially "local content")
**Development time**: 10-14 months
**Key risk**: MoD weapon part supply chain; regulatory approval; K-005 compliance uncertain (weapon mount friction not engineered for consistency); instrumentation of actual parts without damage

### Interface Compatibility Check -- V4

| Interface | Compatibility | Notes |
|-----------|--------------|-------|
| Encoder retrofit --> Weapon bearing | ATTENTION | Must not interfere with bearing play/friction. Mounting requires custom brackets. May affect K-005 torque variation measurement |
| Microswitch in trigger group | ATTENTION | Must fit in existing trigger mechanism cavity. Activation force must not alter F-003 trigger pull characteristics |
| Weapon mount friction | RISK | Real mount friction is NOT engineered for K-005 (<=10% variation). Wear patterns, lubrication state, temperature all affect torque. May require torque-compensation system, negating authenticity advantage |
| Triple monitor <-- Unity | Compatible | Standard |
| 6-DOF --> Statistical scoring | Compatible | Same as V2 |
| BIST --> Retrofitted sensors | Compatible | Same software approach, custom sensor check routines |

**Verdict**: F1.4 resistance compliance is the critical risk. Actual weapon mount friction likely does NOT meet K-005 (<=10% torque variation) without modification, which compromises the authenticity value proposition. Sensor retrofitting is technically feasible but requires custom mechanical design for each weapon variant.

---

# 6. CONCEPT COMPARISON SUMMARY

| Criterion | V1 Budget | V2 Standard | V3 Enhanced | V4 Replica |
|-----------|-----------|-------------|-------------|------------|
| Estimated unit cost | $25,000 | $42,000 | $65,000 | $53,000 |
| Meets CO-001 (<=45K) | Yes | Yes | NO | NO |
| Meets K-005 (<=10% var) | NO (waiver) | Yes | Yes | Uncertain |
| Meets F-006 (<=0.05 deg) | NO (waiver) | Yes | Yes | Uncertain |
| Meets BM-004 (<=2% drag) | NO (waiver) | Yes | Yes | Yes |
| Meets S-002 (>=90 deg FOV) | NO (waiver) | Yes | Yes | Yes |
| Meets TE-010 (r-sq >=0.75) | Unlikely | Yes (with calibration) | Yes | Yes |
| Meets PR-001 (>=70% local) | Yes (~85%) | Yes (~70%) | NO (~55%) | NO (~45%) |
| Meets SCH-001 (<=12 mo) | Yes (7 mo) | Yes (11 mo) | NO (16 mo) | Marginal (12 mo) |
| Meets MT-006 (self-test) | NO | Yes | Yes | Yes |
| Requirement waivers needed | 6 | 0 | 3 (cost, local, schedule) | 2-3 (cost, local, K-005) |
| Interface risk items | 0 | 1 (brake-encoder coupling) | 4 | 3 |
| Variant extensibility | Low | High | Medium | Low |

---

# 7. RECOMMENDATION

**V2 Standard is the only concept that meets ALL mandatory (D) requirements for I-01 without waivers.** It is recommended as the baseline for VDI 2225 evaluation (Document 012).

V1 is useful as a risk-reduction prototype or training demonstrator but is not a compliant product.
V3 represents a future growth path (CTR/ACH variants) but exceeds I-01 constraints.
V4 has fundamental compliance uncertainty in the resistance mechanism.

---

# 8. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-01-20 | Engineering Team | Initial release (as Doc 004) |
| 2.0 | 2026-03-05 | Engineering Team | Complete redo for Phase 2: added working principle docs, 5 new sub-functions (F3.1, F3.2, F4.1, F6.1, F1.4 quantified), interface compatibility checks, aligned to REQ v1.3 quantified requirements. Renumbered as Doc 011. |

---

**NEXT**: Document 012 - VDI 2225 Concept Evaluation v2.0

*VN-12.7MM-SIM-011 Morphological Matrix v2.0*