---
project: VN-CUAV-SIM-001
product: ACME GAR GTS → VN-CUAV-SIM MWI Recoil Subsystem
stage: 2B — Functional Abstraction Engine (6-flow)
created: 2026-04-21
---

# STAGE 2B: FUNCTION STRUCTURE — ACME GAR GTS (6-Flow)

## Step 1: Black Box — 6-Flow

### Classical 3-Flow (from artifact)

| Flow | Input | Output |
|------|-------|--------|
| **E (Energy)** | 120VAC mains power | Kinetic impulse (recoil), torque (windload), light (muzzle flash, display), sound (weapon+environment), heat (waste) |
| **M (Material)** | Weapon replica body, slide tray, mounting hardware | Physical recoil impulse to operator hands/arms, visual environment to eyes |
| **S (Signal)** | Trigger pull, safety state, selector position, charging handle, instructor commands | Recoil timing, muzzle flash sync, audio sync, scoring data, weapon state telemetry |

### Extended 3-Flow (reconstructed from behavior)

| Flow | Input | Output |
|------|-------|--------|
| **D (Data)** | Weapon profiles (per weapon type), scenario files, target behavior | Session logs, AAR data, scoring metrics, rounds/hits/misses |
| **C (Computation)** | Trigger event + weapon profile → motor control algorithm | Recoil force-time curve, firing rate, malfunction logic |
| **T (Trust)** | Factory calibration, self-test, host authentication | Confidence: recoil matches weapon spec, safety chain intact, DIS entity valid |

### System Boundary

```
OPERATOR (hands/eyes/ears) ←→ [ACME GAR GTS] ←→ HOST COMPUTER (instructor)
                                    ↑↓                      ↑↓
                              POWER (120VAC)          DIS NETWORK (Ethernet)
```

### Operational States
OFF → STANDBY → READY → FIRING → MALFUNCTION (4 types) → SAFE_STOP

---

## Step 2: White Box — Sub-Functions (verb-noun, solution-neutral)

| SF-ID | Sub-Function | 6-Flow | Criticality |
|-------|-------------|--------|:----------:|
| **SF-01** | **Convert electrical energy → linear impulse** | E | CRITICAL |
| SF-02 | Constrain impulse to 1-DOF fore-aft motion | E, M | HIGH |
| SF-03 | Modulate impulse frequency (firing rate) | E, C | CRITICAL |
| SF-04 | Shape impulse force-time profile (weapon-specific) | E, C, D | CRITICAL |
| SF-05 | Detect operator fire command (trigger) | S | CRITICAL |
| SF-06 | Detect operator safety state | S, T | HIGH |
| SF-07 | Detect weapon configuration (which weapon) | S, D | HIGH |
| SF-08 | Resist weapon traverse motion (windload/mount drag) | E | HIGH |
| SF-09 | Provide weapon mass/CG fidelity | M | MEDIUM |
| SF-10 | Generate muzzle flash (visual firing cue) | E, S | LOW |
| SF-11 | Simulate ammunition depletion | M, S | MEDIUM |
| SF-12 | Inject weapon malfunctions (instructor control) | C, S | HIGH |
| SF-13 | Override safety for malfunction simulation | C, T | HIGH |
| SF-14 | Generate visual environment (targets, terrain) | C, E | HIGH |
| SF-15 | Generate audio feedback (weapon + environment) | E, S | MEDIUM |
| SF-16 | Calculate ballistic trajectory (shot placement) | C, D | HIGH |
| SF-17 | Detect hit/miss on targets | C, D | HIGH |
| SF-18 | Score operator performance (AAR) | D, C | HIGH |
| SF-19 | Control training session (instructor authority) | S, C | HIGH |
| SF-20 | Interoperate with external simulators (DIS) | D, S | MEDIUM |
| SF-21 | Self-test and calibrate | T | MEDIUM |
| SF-22 | Distribute power to all subsystems | E | HIGH |
| SF-23 | Provide physical platform (operator position) | M | LOW |

---

## Step 4: Solution-Neutral Reformulation (CRITICAL for IP-free RE)

| SF-ID | ACME Implementation (patented) | Solution-Neutral Statement | ≥3 Alternative Principles? |
|-------|-------------------------------|---------------------------|:-------------------------:|
| **SF-01** | Rotary BLDC motor + gearbox + bell-crank + slide tray | "Convert electrical energy to linear impulse perceived as weapon recoil by operator" | ✅ Voice coil, pneumatic, solenoid, cam, masselotte, magnetic brake pulse |
| SF-02 | Linear bearings constraining slide tray | "Guide impulse delivery along weapon recoil axis" | ✅ Pivot, rail, tube, track |
| SF-03 | Host computer dynamically alters motor frequency | "Modulate impulse repetition rate to match weapon cyclic rate" | ✅ Embedded MCU, timer IC, mechanical governor |
| SF-04 | Firmware weapon profile + motor controller | "Shape force-time curve per weapon specification" | ✅ Cam profile, spring tuning, programmable valve |
| SF-05 | Proximity switch (threaded barrel type) | "Detect operator intent to fire" | ✅ Microswitch, optical, capacitive, strain gauge |
| SF-08 | Separate torque motor on traverse axis | "Resist weapon pointing motion proportional to simulated condition" | ✅ Magnetic particle brake, friction brake, eddy current, hydraulic |

**IP-Free Test:** All 6 critical SFs pass — each can be satisfied by ≥3 different physical principles outside ACME patent claims.

---

## Step 5: Function-Component Matrix (Extended)

| SF | ACME Component | 6-Flow | Criticality | VN Alternatives | ACH Candidate? |
|----|---------------|--------|:----------:|----------------|:-:|
| SF-01 | BLDC motor + gearbox + linkage + slide tray | E | CRITICAL | Solenoid, pneumatic shaker, masselotte, voice coil | N (physical) |
| SF-02 | Linear ball bearings | E, M | HIGH | Bushing, rod-in-tube, pivot | N |
| SF-03 | Motor controller firmware | E, C | CRITICAL | STM32 timer, ESP32 PWM | N |
| SF-04 | Weapon profile library (firmware) | C, D | CRITICAL | JSON config + MCU | **Y** (AI-tuned profiles) |
| SF-05 | Proximity switch | S | CRITICAL | Microswitch ($0.50) | N |
| SF-06 | Safety switch + host override | S, T | HIGH | Standard switch + relay | N |
| SF-07 | Manual weapon swap | S, D | HIGH | **NFC auto-detect (WX innovation)** | **Y** (auto-config) |
| SF-08 | Torque motor | E | HIGH | **Magnetic particle brake (WX decided)** | N (physical) |
| SF-09 | Metal replica weapon body | M | MEDIUM | Al + FRP composite | N |
| SF-10 | LED driver + LEDs | E, S | LOW | Standard LED + MOSFET | N |
| SF-12 | Host computer malfunction injection | C, S | HIGH | Unity scenario engine | **Y** (AI instructor) |
| SF-14 | Short-throw projector + screen | C, E | HIGH | **Unity 3-screen direct (WX)** | **Y** (AI-generated scenarios) |
| SF-16 | Ballistic algorithm | C, D | HIGH | **Unity 6DOF ballistic engine (WX)** | **Y** (AI-tuned ballistics) |
| SF-18 | Scoring algorithm | D, C | HIGH | **Unity AAR system (WX)** | **Y** (AI coaching = ACH core) |

**ACH candidates: 6 sub-functions** — profile tuning, weapon auto-config, AI instructor, AI scenarios, AI ballistics, AI coaching. This is the VN-CUAV-SIM ACH value proposition.

---

## Step 6: Hidden Functions

| Type | Hidden Function | Evidence | Impact |
|------|----------------|----------|--------|
| **Safety** | Hard stop prevents slide tray over-travel | Patent: mechanical stops | Must include in any redesign |
| **Safety** | Host override for cook-off must be controllable | Patent: instructor authority | Instructor always in control |
| **Reliability** | All-electric = no wear parts (vs pneumatic piston fatigue) | ACME marketing + Haptech "millions of rounds" | WX: pneumatic IS acceptable for lower round count |
| **Manufacturing** | Weapon profiles burnt into firmware | Patent "burnt onto onboard motor controller" | WX: upgradeable via USB/WiFi = advantage |
| **Legacy** | Pintles designed for specific US aircraft | Patent CH-46/CH-53 specific | WX: VN naval mount (completely different) |
| **Diagnostic** | GAR Manager runs on RedHat Linux | Website "IA compliant Redhat Linux" | WX: build into Unity host (integrated, not separate) |

---

## Save to: `RE_ACME-GAR-GTS_S2B_Function_Structure.md` ✅
