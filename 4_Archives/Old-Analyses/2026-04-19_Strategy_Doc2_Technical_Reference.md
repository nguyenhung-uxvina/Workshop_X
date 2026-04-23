# TÀI LIỆU KỸ THUẬT THAM CHIẾU WORKSHOP X 2026-2036

**Training Target Systems + Maritime Platform Technical Architecture**

*Phiên bản: Revised với TTS full expansion*
*Ngày: April 2026*

---

## MỤC LỤC

1. [Phần I: TTS Master Architecture](#phần-i-training-target-systems-tts-master-architecture)
2. [Phần II: Signature Generation Technology](#phần-ii-signature-generation-technology-foundation)
3. [Phần III: Surface Training Targets (STT)](#phần-iii-surface-training-targets-stt-detailed)
4. [Phần IV: Underwater Training Targets (UTT)](#phần-iv-underwater-training-targets-utt-expanded)
5. [Phần V: UTT Vehicle Deep Dive](#phần-v-utt-vehicle-deep-dive)
6. [Phần VI: Common Technology Platforms](#phần-vi-common-technology-platforms)
7. [Phần VII: MSM Integration với TTS](#phần-vii-msm-integration-với-training-targets)
8. [Phần VIII: LCS Architecture](#phần-viii-lcs-launch-control-system-architecture)
9. [Phần IX: Actuators HAL Design](#phần-ix-actuators-hal-design)

---

## PHẦN I: TRAINING TARGET SYSTEMS (TTS) MASTER ARCHITECTURE

### 1.1 Family Architecture Overview

```
TTS Master Family
├── ATT (Aerial Training Targets) — EXISTING portfolio
│   └── ATX/STX/UTX/DEX (legacy, not redeveloped)
│
├── STT (Surface Training Targets) — NEW, 2028-2030
│   ├── STT-B (Boat targets — anti-ship)
│   ├── STT-L (Launcher systems — anti-missile)
│   └── STT-M (Multi-mission platforms)
│
└── UTT (Underwater Training Targets) — NEW, 2027-2030
    ├── UTT-Mine series (5 variants)
    ├── UTT-Vehicle series
    ├── UTT-Static series
    └── UTT-Towed series
```

### 1.2 Cross-Domain Technology Platforms

**Platform 1 — Signature Generation Foundation** (cross-cutting)
**Platform 2 — Target Management System (TMS)** (unified software)
**Platform 3 — Propulsion + Navigation** (domain-specific but shared methodology)
**Platform 4 — Recovery & Logistics** (common concepts)
**Platform 5 — Safety + Control** (IEC 61508 framework across products)

### 1.3 Strategic Rationale

**Lý do 1 — Complete training ecosystem**: Navies + coast guards cần targets across domains
**Lý do 2 — Customer leverage**: Same customer buying multi-products = higher revenue + stronger relationships
**Lý do 3 — Technology synergies**: 40-60% của UTT technology leveraged cho STT
**Lý do 4 — Market expansion**: STT opens larger market (surface training volume)
**Lý do 5 — Defensive positioning**: Complete family defends against competitor bundling

### 1.4 Sequencing Priorities

**Phase 1 (2026-2028)**: UTT Mine series foundation + limited STT exploration
**Phase 2 (2028-2030)**: STT-B launch + UTT Vehicle/Static development + TMS evolution
**Phase 3 (2030-2032)**: Full production + STT-L launch + UTT Towed launch + export entry
**Phase 4 (2032+)**: Advanced variants + STT-M flagships + global expansion

---

## PHẦN II: SIGNATURE GENERATION TECHNOLOGY FOUNDATION

### 2.1 Signature Taxonomy

| Signature type | Detection range | Primary applications |
|---|---|---|
| Magnetic | 5-200m | Mine warfare, submarine detection |
| Acoustic | 100m-50km | Submarine detection, sonar |
| Radar cross-section (RCS) | 1-100km | Anti-ship, anti-missile, anti-UAV |
| Thermal/IR | 1-20km | IR missiles, surveillance |
| Optical/visual | 1-10km | Gunnery, visual ID |
| Pressure | 10-100m | Mine triggering, torpedo proximity |
| Seismic | 10-500m | Bottom mine detection |
| Electric | 5-50m | Specialized submarine detection |
| Electromagnetic | Variable | Advanced systems |

### 2.2 Magnetic Signature Generation

**Physics foundation:**
- Real ships distort Earth's magnetic field (ferromagnetic steel)
- Signature: 10⁴-10⁶ A·m² dipole moment, 100-1000 nT at close range

**Workshop X approach:**
- 3-axis coil array với programmable current drivers
- Peak currents 10-20A per axis
- Field output 500-2000 nT at 10m range
- Dynamic programmable patterns

**Design challenges Workshop X must master:**
- Thermal management (sealed enclosure + high currents)
- Non-magnetic construction (aluminum, composites only)
- Battery life optimization
- Signature fidelity matching real ship patterns
- Self-calibration capabilities

### 2.3 Acoustic Signature Generation

**Physics foundation:**
- Ships radiate 10 Hz to 20 kHz
- Characteristic spectra: machinery tonals, propeller blade rate, broadband noise
- Source levels 150-190 dB re 1 μPa @ 1m

**Workshop X approach:**
- Multi-band transducers (low/mid/high frequency)
- Total power 100-600W peak, 20-100W average
- Frequency range 50 Hz to 20 kHz
- Source level 150-180 dB re 1 μPa @ 1m

**Design challenges:**
- Transducer efficiency (5-30% typical)
- Battery drain significant
- Pressure compensation at depth
- Own-noise rejection
- Matching network optimization

### 2.4 Radar Cross-Section (RCS) Signature

**For STT surface targets:**
- Passive shaping + corner reflectors (10-100 m²)
- Active RCS augmentation (1,000-10,000 m² equivalent)
- Frequency coverage X-band (8-12 GHz), S-band (2-4 GHz)

### 2.5 Thermal/IR Signature

**For STT surface targets:**
- Controlled heating elements in hull
- Active IR flare generation (engine exhaust simulation)
- Temperature 60-200°C above ambient
- Power 200-1000W required
- Spectral range mid-IR (3-5 μm), LWIR (8-14 μm)

### 2.6 Multi-Signature Coordination

**Advanced training requires coherent multi-signatures**:
- Unified Signature Controller
- Synchronized across modules
- Power budget management
- Thermal interactions managed
- Telemetry uplink coordinated

**Workshop X differentiator**: Signature coordination capability across domains — key technical moat.

---

## PHẦN III: SURFACE TRAINING TARGETS (STT) DETAILED

### 3.1 STT Product Family Structure

**STT-B (Boat Targets)** — anti-ship + anti-surface training
**STT-L (Launcher Systems)** — anti-missile/anti-UAV training
**STT-M (Multi-mission Platforms)** — flagship combined

### 3.2 STT-B Boat Target Specifications

**STT-B-S (Small Boat Target)** — initial flagship:

| Parameter | Specification |
|---|---|
| Length | 5-7m |
| Beam | 1.8-2.2m |
| Displacement | 1.5-3 tons |
| Propulsion | 2× 100-200HP outboard/inboard |
| Max speed | 30-45 knots |
| Cruise speed | 20-30 knots |
| Endurance | 4-8 hours |
| Payload | 500-1000 kg signature + equipment |
| Signature capability | RCS, thermal, acoustic, visual |
| Control | Remote + autonomous behaviors |

**Mission profiles:**
- Gunnery training
- Anti-ship missile training
- Boarding training
- Sensor tracking training

**Safety systems critical:**
- Multiple independent kill switches
- Armor (if live fire)
- Buoyancy maintenance
- Tracking systems

**Unit pricing:**
- STT-B-S: $150-400K
- STT-B-M: $400-800K  
- STT-B-L: $800K-2M

### 3.3 STT-L Launcher Systems

**STT-L-S (Small Boat-Mounted)**: Launcher on STT-B platform, launches existing ATT aerial targets. $200-400K.

**STT-L-F (Fixed Shore)**: Shore-mounted, higher capacity, multiple variants. $400-800K.

**STT-L-M (Mobile Truck/Trailer)**: Deployable anywhere. $500K-1M.

**Design common elements:**
- Mechanical launcher (compressed air, pneumatic, solid propellant)
- Target drone cradle
- Fire control electronics
- Safety systems
- Recovery coordination

### 3.4 STT-M Multi-Mission Platform

Flagship: 10-15m platform với combined signature generation + aerial target launcher integrated. Premium pricing $1.5-3M.

### 3.5 STT Production Plan

| Year | STT-B | STT-L | STT-M | Revenue |
|---|---|---|---|---|
| 2028 | 0-1 | - | - | $0-300K |
| 2029 | 2-5 | 0-1 | - | $600K-2M |
| 2030 | 5-10 | 2-4 | - | $2-5M |
| 2031 | 8-15 | 4-8 | 0-1 | $4-10M |
| 2032 | 12-20 | 6-12 | 1-3 | $7-18M |
| 2033 | 15-25 | 10-15 | 2-5 | $10-25M |
| 2036 | 20-35 | 15-25 | 4-8 | **$18-40M** |

---

## PHẦN IV: UNDERWATER TRAINING TARGETS (UTT) EXPANDED

### 4.1 UTT Family Structure

**UTT-Mine Series**: 5 variants (M, A, C, P, R)
**UTT-Vehicle Series**: Moving underwater targets (UUV simulators)
**UTT-Static Series**: Bottom + attached targets
**UTT-Towed Series**: Towed underwater targets

### 4.2 UTT Common Platform

```
Common UTT Platform:
- Pressure hull (cylindrical, modular compartments)
- Variant-specific signature generation front compartment
- Battery + electronics middle compartment
- Ballast + safety systems rear compartment
- Dimensions: 1.0-1.5m length, 250-400mm diameter
- Weight: 40-120 kg (in air)
- Depth rating: 300m (standard), 600m (deep)
- Battery life: 8-72 hours depending on mode
```

### 4.3 UTT-Mine Variants Detail

**UTT-M (Magnetic)**:
- Multi-axis coil array, programmable current drivers
- 500-2000 nT at 10m range
- Battery 100-200 Ah Li-ion
- Non-magnetic construction (Al, composites)
- Unit price: $12-20K

**UTT-A (Acoustic)**:
- 2-3 transducers (low/mid/high frequency)
- Audio playback 50-200W per channel
- Battery 200-400 Ah (power-hungry)
- Signature library + synthesized
- Unit price: $15-25K

**UTT-C (Combined)**:
- M + A integrated
- Coordinated playback
- Unit price: $20-35K

**UTT-P (Pressure/Seismic)**:
- Bottom-mounted
- Low-frequency pressure transducers
- Seismic coupling to seafloor
- Unit price: $18-30K

**UTT-R (Recoverable Smart)**:
- Full instrumentation
- Encounter recording
- Acoustic modem telemetry
- GPS recording
- Unit price: $35-60K

### 4.4 UTT-Static Variants

**UTT-S-B (Bottom Mine Simulator)**:
- Static seafloor placement
- Long-duration operation (days-weeks)
- Low power consumption
- Recovery via acoustic recall
- Unit price: $15-35K

**UTT-S-O (Object Simulators for Classification)**:
- Rock/boulder shapes
- Equipment debris simulation
- Marine life sonar returns
- Critical for realistic classification training
- Unit price: $3-15K

**UTT-S-L (Limpet Mine Simulators)**:
- Hull-attachable với magnetic attachment
- Acoustic signature
- Port security training
- Unit price: $10-25K

### 4.5 UTT-Towed Variants

**UTT-T-A (Acoustic Towed)**:
- Towfish body, depressor for depth
- Submarine acoustic signature
- Power/data umbilical
- Unit price: $50-150K

**UTT-T-M (Multi-Signature Towed)**:
- Advanced combined signatures
- Sophisticated ASW training
- Unit price: $150-400K

### 4.6 Deployment Integration với MSM

**MSM Module C — Training Target Deployment**:

```
Configuration C-Mine: Target rack (4-8 UTT Mines) + sequential release
Configuration C-Static: Bottom target deployment system with crane
Configuration C-Vehicle: UTT-V launch + recovery (uses LARS)
Configuration C-Towed: Tow winch + cable management + depressor
Configuration C-STT: STT-B-S launch + recovery + refill + maintenance
```

---

## PHẦN V: UTT VEHICLE DEEP DIVE

### 5.1 UTT-V System Architecture

**Key subsystems:**
- Pressure hull + structure (modular)
- Propulsion (main thruster + auxiliary options)
- Power (battery + BMS)
- Navigation (INS + DVL + USBL + depth sensor + GPS when surfaced)
- Mission payload (signature generation + training-specific)
- Communications (acoustic + RF when surfaced)
- Safety (independent safety CPU + auto-surface mechanisms)
- Environmental sensors (depth, obstacle avoidance)

### 5.2 Product Variants

**UTT-V-S (Small)**:
- Length 1.5-2.5m, Weight 80-200 kg
- Speed 2-6 knots, Endurance 8-24 hours
- Depth 300m, Battery 15-30 kWh
- Target market: small adversary UUVs, swimmer delivery

**UTT-V-M (Medium)**:
- Length 3-6m, Weight 500-1500 kg
- Speed 3-10 knots, Endurance 24-72 hours
- Depth 500m, Battery 50-100 kWh
- Target market: larger adversary UUVs, small submarines

### 5.3 Propulsion Architecture Options

**Option A** — Single thruster + control surfaces (simple, efficient)
**Option B** — Multi-thruster vectored (maneuverable, complex)
**Option C** — Hybrid (main + auxiliary) — **Workshop X recommended**

**Main thruster design:**
- Ducted propeller với magnetic coupling
- BLDC or PMSM motor
- Vector control (FOC) for efficiency
- Oil-filled pressure-compensated
- UTT-V-S: 1-3 kW continuous, 5 kW peak
- UTT-V-M: 5-15 kW continuous, 25 kW peak

**Auxiliary thrusters** (hybrid option):
- Side thrusters 100-300W each
- Vertical thrusters 200-500W each
- Tunnel-type for minimum drag

**Control surfaces:**
- X-tail configuration for UTT-V-S
- Cross configuration for UTT-V-M
- Small electric actuators
- Redundancy design

**Ballast + Buoyancy:**
- Static ballast for near-neutral buoyancy
- Piston-based variable ballast
- Drop weight emergency surfacing
- Trim control

**Power Budget UTT-V-S (15 kWh battery):**

| Mode | Total power | Endurance |
|---|---|---|
| Idle | 60W | - |
| Loiter 1 kt | 470W | 32 hours |
| Cruise 4 kt | 1065W | 14 hours |
| Sprint 6 kt | 2780W | 5 hours |
| Maneuver slow | 990W | 15 hours |

### 5.4 Autonomous Behavior Frameworks

**Hierarchical architecture:**
```
Mission → Behaviors → Actions → Control → Hardware
```

**Mission Library:**
1. Patrol Search Pattern
2. Threat Approach
3. Evasion
4. Port Entry
5. Bottom Resting
6. Coordinated Multi-Vehicle
7. Counter-Detection

**Behavior Building Blocks:**
- Motion: Straight transit, waypoint following, patterns, shadowing, evasion, bottom-following, station-keeping
- Signature: on/off, variation, coordinated

**Decision-Making Architecture:**
- Finite State Machine (simple scripted)
- Behavior Trees (hierarchical, modular) — **Workshop X primary**
- Reinforcement Learning (future L4)

**Command + Control:**
- Pre-mission programming via TMS
- Acoustic modem commands (limited bandwidth)
- Autonomy levels: Teleoperated → Supervised → Autonomous → Adaptive

**UTT-V Level 3 target for Phase 1, Level 4 future.**

**Safety Behaviors (override all):**
- Emergency surfacing triggers (power low, comm timeout, safety fault, abort, depth exceedance, geofence violation, time limit)
- Emergency mechanisms (drop weights mechanical, compressed air buoyancy, auto-surface via propulsion)
- Communication loss protocol (reestablish → announce → return → surface)
- Geofence enforcement (hard boundaries always enforced)

### 5.5 Navigation + Localization Underwater

**Standard UUV navigation stack:**
- INS (Inertial Navigation): 0.1-1% distance drift
- DVL (Doppler Velocity Log): velocity relative to seafloor
- Depth sensor: ±0.1%
- Magnetic compass: heading
- GPS: surface only
- Acoustic positioning: USBL/LBL

**UTT-V navigation architecture:**
- Tactical-grade FOG or MEMS INS
- Compact 4-beam DVL
- Extended Kalman Filter sensor fusion
- Typical performance: 10-50m short missions, <50m với USBL updates

**Localization options:**
- USBL từ MSM (default)
- LBL network (large exercises)
- Dead reckoning + surface (emergency)

### 5.6 Development Strategy

**Path D — Hybrid (Workshop X recommended)**:
- Buy commercial subsystems (navigation, propulsion motors)
- Develop integration + training-specific features
- Timeline 2-3 years, cost $3-6M

**Technology partners:**
- IXBlue (INS) — less ITAR-restricted
- Teledyne Marine (DVL, components)
- Kongsberg Maritime (potentially)
- Hydromea (platform partnership possibility)

**Phased Development:**
- Phase 1 (2028-2029): UTT-V-S prototype, $1.5-2.5M
- Phase 2 (2029-2030): UTT-V-S qualification + UTT-V-M design, $2-3M
- Phase 3 (2030-2031): Production + UTT-V-M launch, $2-3M
- Phase 4 (2031+): Advanced capabilities, $1-2M/năm ongoing

**Total UTT-V development: $6-10M over 5 years.**

---

## PHẦN VI: COMMON TECHNOLOGY PLATFORMS

### 6.1 Shared Hardware Platforms

**Hull Types:**
- Small UUV platform (UTT-V-S, small UTT Mines)
- Medium UUV platform (UTT-V-M, larger variants)
- Static platform (UTT-S variants)
- Towed body (UTT-T variants)
- Small boat platform (STT-B-S)
- Medium boat platform (STT-B-M)

**Shared Electronics:**
- Signature controller (programmable, variant firmware)
- Battery management systems
- Communications (acoustic underwater, radio surface)
- Navigation (INS underwater, GPS+IMU surface)
- Safety electronics (common PLC approach)

**Shared Software:**
- Embedded OS (Linux variants, RTOS for real-time)
- Signature generation algorithms
- Autonomous behaviors
- Safety monitoring
- Communications protocols

### 6.2 Target Management System (TMS) Evolution

**Unified software ecosystem across TTS:**

**Module 1 — Unified Exercise Planning**: Multi-domain scenarios
**Module 2 — Multi-Domain Real-Time Monitoring**: Single dashboard
**Module 3 — Cross-Domain Analysis**: Post-exercise correlation
**Module 4 — Fleet Management**: All TTS products tracking
**Module 5 — Curriculum Integration**: Unified progression

**Peak TMS revenue 2036: $8-12M/năm**.

### 6.3 Safety Architecture

All TTS products share IEC 61508-based safety:
- Remote termination capability
- Geofence enforcement
- Time-based failsafes
- Fail-safe behaviors
- Command authentication

---

## PHẦN VII: MSM INTEGRATION VỚI TRAINING TARGETS

### 7.1 MSM as Training Operations Platform

MSM designed với modular mission approach. Module C cho training target deployment scalable across TTS types.

### 7.2 Combined Platform + Target Package

**Example integrated pricing:**
- MSM-15 training variant: $4-5M
- Module C + deployment systems: $500K-1M
- Initial UTT inventory (50 mixed): $1-2M
- TMS software: $150-250K
- Training + support: $200-400K
- **Total package: $5.85-8.65M per customer**

Target 2-4 such packages/năm peak = $15-35M revenue from package deals alone.

---

## PHẦN VIII: LCS (LAUNCH CONTROL SYSTEM) ARCHITECTURE

### 8.1 Architecture Philosophy

**Design principles:**
1. Modularity first (support multiple LARS + platform types)
2. Safety non-negotiable (independent safety path)
3. Progression-ready (L1 architecture supports L4 evolution)
4. Interoperable standards (không proprietary lock-in)
5. Safety-critical rigor (IEC 61508, classification societies)

### 8.2 Technology Stack

**Dual-RTOS architecture:**
- **Main Controller**: PREEMPT_RT Linux (Ubuntu 24.04 LTS) + ROS 2 Jazzy
- **Safety Controller**: Siemens S7-1500F (SIL 3 certified)
- **Motor drivers**: FreeRTOS microcontrollers
- **Middleware**: Cyclone DDS (Eclipse, performant, no license)

**Languages:**
- C++: Control + HAL
- Python: Tooling + UI backend
- Qt/QML: UI

### 8.3 Layered Architecture

```
Qt/QML UI (Operator Station)
↓
ROS 2 Nodes (Operations + Applications)
↓
ROS 2 Middleware (Cyclone DDS)
↓
Custom C++ HAL
↓
Linux Kernel (PREEMPT_RT)
↓
Hardware

Parallel Safety Path:
Safety PLC Program ↔ S7-1500F RTOS ↔ Safety PLC Hardware

Inter-path: PROFIsafe over PROFINET
```

### 8.4 Network Architecture

- EtherCAT: Motor drives real-time
- PROFINET/PROFIsafe: Safety PLC communication
- Ethernet: Cameras, UUV comms, general
- NMEA 2000: Vessel nav integration

Safety network physically separated từ general network.

### 8.5 Capability Progression

| Level | Capability | Target | Investment |
|---|---|---|---|
| L1 "Ranger" | Assisted manual | 2027 | $1.95M |
| L2 "Guardian" | Guided manual | 2028-2029 | $1.5-2M |
| L3 "Commander" | Supervised autonomy + motion comp | 2030-2031 | $2.5-3.5M |
| L4 "Autonomous" | Full autonomous | 2031-2033 | $4-5M |

---

## PHẦN IX: ACTUATORS HAL DESIGN

### 9.1 HAL Design Principles

1. Interface-based (swappable implementations)
2. Per-device abstractions
3. Asynchronous where appropriate
4. Error-transparent (structured errors)
5. Testable without hardware (simulation)

### 9.2 Core Interfaces

**IActuator (base)**:
- Lifecycle: initialize, enable, disable, shutdown
- State: get_state, get_health, get_diagnostics
- Safety: emergency_stop, is_safe_to_operate
- Events: on_state_change, on_fault, on_warning

**IMotionActuator (extends IActuator)**:
- command_position, command_velocity, command_torque
- get_position, get_load
- set_limits, calibrate

**IBinaryActuator, IRotaryActuator, IHydraulicActuator**: Specialized variants

### 9.3 Key Algorithms

**Algorithm 1 — Command Validation Pipeline (5 stages):**
1. Syntactic validation
2. Safety preconditions
3. Limit checking
4. Trajectory feasibility
5. Resource availability

**Algorithm 2 — S-Curve Trajectory Generation (7-segment):**
- Jerk-limited smooth motion
- Pre-computed trajectories
- Online re-planning for safety

**Algorithm 3 — Multi-Actuator Coordination:**
- Parallel independent
- Master-slave
- Trajectory-synchronized
- Event-driven sequential

**Algorithm 4 — Fault Detection + Handling:**
- 4 layers: self-reporting, sensor comparison, temporal patterns, cross-check
- State machine: NORMAL → WARNING → FAULT_RECOVERABLE → FAULT_REQUIRES_RESET → EMERGENCY_STOP

**Algorithm 5 — Real-time Control Loop:**
- 1-5ms cycle period
- Read → Process → Write → Deadline check
- Thread isolation across cores
- Pre-allocated memory (no malloc in real-time path)
- Lock-free communication

### 9.4 EtherCAT Integration

**Why EtherCAT:**
- Deterministic timing (nanosecond sync)
- High bandwidth (100 Mbit/1 Gbit)
- Daisy-chain topology
- Widely supported servo drives

**Master choice**: SOEM (open source C library) recommended

**Real-time pattern**: 1ms cycle PDO, SDO for parameters at startup

### 9.5 Testing Strategy

- **Unit tests** (per commit): Mock hardware, <30 sec full suite
- **Integration tests** (nightly): Simulated hardware, 5-15 min
- **HIL tests** (weekly): Real hardware, hours
- **Field tests** (Sprint 4+): Real sea conditions

### 9.6 Effort Estimate L1 Actuators HAL

| Activity | Engineer-weeks |
|---|---|
| Interface design + review | 2 |
| Base IActuator implementation | 2 |
| IMotionActuator + trajectory | 4 |
| Winch-specific implementation | 3 |
| Hydraulic cylinder implementation | 2 |
| Brake/latch implementations | 2 |
| EtherCAT integration | 4 |
| Safety PLC integration | 3 |
| Fault detection + handling | 3 |
| Simulation models | 3 |
| Unit tests | 3 |
| Integration tests | 2 |
| HIL test infrastructure | 3 |
| Documentation | 2 |
| **Total** | **~38** |

With 2-3 engineers: 6-8 months elapsed time, aligned với Sprint 2-3.

---

## KẾT LUẬN

Document này cung cấp technical reference comprehensive cho Workshop X expanded scope:

- **TTS Master Family**: 3 families (STT, UTT expanded, integration với ATT)
- **Multiple variants per family**: 13+ distinct products
- **Common technology platforms**: Maximum reuse across products
- **TMS software ecosystem**: Binds family together
- **MSM integration**: Training target deployment platform
- **LCS foundation**: Cross-family technology
- **Actuators HAL**: Primary action path design

**Technical architecture leverages existing expertise:**
- Signature generation (acoustic, magnetic) từ Workshop X experience
- Target systems methodology từ ATT portfolio
- Naval systems knowledge từ MSM development
- Control systems từ LCS investment

**Investment profile reasonable for scope:**
- TTS development: $15-22M over 7 years
- LCS development: $10-11M over 7 years
- Combined technology investment: ~$25-33M
- Revenue potential $55-95M/năm peak just from TTS + $10-11M investment paying back 10x+

Documents này là **recommendation documents** không phải **specification documents**. Software Architect + Naval Architect mới hire sẽ review, có thể adjust specific choices. Document giá trị ở rigorous starting point, không phải lock-in decisions.

---

**End of Document 2 — Technical Reference**
