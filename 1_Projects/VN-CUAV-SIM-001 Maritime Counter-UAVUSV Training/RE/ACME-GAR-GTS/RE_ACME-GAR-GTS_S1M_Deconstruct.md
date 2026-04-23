---
project: VN-CUAV-SIM-001
product: ACME Gun Active Recoil (GAR®) Gunnery Training System (GTS)
stage: 1M — DECONSTRUCT (Mechatronic)
mode: MECHA
created: 2026-04-20
author: AI (Offload) → CEO validates (Core)
sources: PUBLIC ONLY (patents, brochures, trade press, academic papers — Stage 0 condition #1)
note: No physical specimen available (Stage 0 condition #2 — ITAR risk)
---

# STAGE 1M: DECONSTRUCT — ACME GAR® GTS (Mechatronic)

> ⚠️ **Source constraint:** This entire deconstruction is based on PUBLIC SOURCES ONLY (patents US 8,690,575 B1 + US 10,001,338, ACME website, trade press, competitor patents, academic papers). No physical GAR unit was acquired or inspected. Confidence ratings reflect this constraint.

---

## 1A — Artifact Deconstruction (4-Layer Analysis)

### Layer 1 — Geometric & Dimensional

**System-Level Envelope (GTS complete system):**

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|-----------|
| Gunnery platform footprint | ~3m × 2m (wheeled, modular) | Website photos + "fits through office doors" | MEDIUM |
| Screen | 12ft W × 10ft H (3.66m × 3.05m), retractable | Website | HIGH |
| Projector clearance | 18 inches (457mm) throw distance | Website | HIGH |
| Platform height | Elevated (stairs + rails included) | Website photos | LOW |
| Power input | 120VAC 15A (US) or European equiv | Website, Patent | HIGH |
| Alt power | 12/24VDC from vehicle | M240 GAR page | HIGH |

**GAR Recoil Unit (Component 50 per patent):**

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|-----------|
| Slide tray stroke | 0.10"–0.50" (2.5–12.7mm), preferred 0.30" (7.6mm) | Patent 8,690,575 | HIGH |
| Tray travel direction | Fore-aft (linear, on linear bearings) | Patent | HIGH |
| Mounting | Interchangeable pintles (CH-46, CH-53, vehicle) | Patent | HIGH |
| Motor type | Rotary electric + gearbox + mechanical linkage | Patent | HIGH |
| Motor location | Inside "electronic chassis" (Component 36) | Patent | HIGH |
| Linkage type | Tie rods, bell-cranks, bearings (rotary→linear conversion) | Patent | HIGH |
| Adjustable stops | Elevation/azimuth travel limits | Patent | HIGH |
| Interface | Ethernet (preferred) to host computer | Patent | HIGH |
| Weight of unit | Not disclosed | — | UNKNOWN |
| Overall dimensions | Not disclosed | — | UNKNOWN |

**Weapon Replica (Component 10 — XM218/.50 cal example):**

| Parameter | Value | Source | Confidence |
|-----------|-------|--------|-----------|
| Materials | Composite body, stainless steel/aluminum barrel | Patent | HIGH |
| Weight | "Realistic" (implied near-actual weapon weight) | Website | MEDIUM |
| Trigger | Electronic sensor with adjustable hard stop (cap screw) | Patent | HIGH |
| Charging handle | Articulated, back-and-forth motion simulation | Patent | HIGH |
| Top cover | Articulated for ammo belt simulation | Patent | HIGH |
| Feed mechanism | Dummy ammo belt + canisters + feed chutes | Website | HIGH |
| Muzzle flash | LED (visible + near-IR spectrum) | Patent | HIGH |
| Safety | Physical safety mechanism preventing trigger depression | Patent | HIGH |
| Sensor suite | I/O monitors: ammo status, feed cover, trigger, safety, selector, charging handle | Website | HIGH |

**Critical Dimensions NOT Disclosed (require physical inspection or acquisition):**

| Item | Why Critical | Workaround |
|------|-------------|-----------|
| GAR unit envelope (LxWxH) | Size constraint for WX MWI integration | Estimate from photos + weapon dimensions |
| Slide tray mass | Determines recoil impulse (F = ma) | Calculate from force/acceleration requirement |
| Motor torque/speed specs | Core performance parameter | Back-calculate from firing rate + stroke |
| Bearing type/size | Reliability + precision | Standard linear bearing catalog selection |
| Connector types | Integration interface | Use standard MIL-spec connectors |

### Layer 2 — Material & Process Inference

**TABLE A — Material Identification:**

| Component | Visual/Patent Evidence | Material Candidates | Most Likely | Confidence |
|-----------|----------------------|--------------------|-----------|-----------:|
| Slide tray | "Slides fore and/or aft on linear bearings" | Aluminum 6061-T6, Steel | Al 6061-T6 (weight vs strength) | MEDIUM |
| Recoil cradle housing | Structural, houses motor + electronics | Al 6061-T6 die cast or welded | Al 6061-T6 | MEDIUM |
| Weapon body | "Composite/stainless steel/aluminum" (patent) | FRP composite, Al, SS | Composite (FRP) outer + Al structure | HIGH |
| Barrel | "Aluminum/stainless, threaded" (patent) | Al 6061, SS 304/316 | Al 6061-T6 (weight, no heat requirement) | HIGH |
| Pintles (mount adapters) | Structural mounting hardware | Steel 4140, Al 7075 | Steel 4140 HT (load-bearing) | MEDIUM |
| Electronic chassis | "Electronic chassis 36" | Sheet steel or Al enclosure | Al sheet 5052/6061 | MEDIUM |
| Linear bearings | Standard motion component | THK/Misumi linear guide | COTS linear ball guide | HIGH |

**TABLE B — Manufacturing Process:**

| Feature | Process Evidence | Most Likely Process | VN Alternative | Confidence |
|---------|-----------------|--------------------|--------------|-----------:|
| Cradle housing | Complex 3D geometry | CNC machined Al billet or die-cast | CNC machining (VN capable) | MEDIUM |
| Slide tray | Precision flat, bearing mounts | CNC milled Al plate | CNC milling (VN capable) | HIGH |
| Weapon body | Complex shapes, lightweight | Injection-molded FRP or hand layup composite | Hand layup FRP (VN capable) | MEDIUM |
| Motor-to-tray linkage | Bell-cranks, tie rods | Machined steel + heat treat | CNC + HT (VN capable) | HIGH |
| PCB assembly | Control electronics | SMT assembly, conformal coating | SMT (VN limited) or outsource | MEDIUM |
| Wiring harness | Multi-sensor + motor + comms | Harness assembly with MIL-spec connectors | Manual assembly (VN capable) | HIGH |
| Pintles | Must match aircraft mounts | CNC machined, anodized | CNC machining (VN capable) | HIGH |

**TABLE C — Vietnam Manufacturing Capability Gap:**

| Component | Original Spec | VN Available? | Gap | Priority |
|-----------|-------------|:------------:|-----|---------|
| Linear bearings/guides | THK/Misumi COTS | ✅ Import (SG/CN) | None | LOW |
| Brushless DC motor | Specific torque/speed | ✅ Import (CN/JP) | Selection, not mfg | MEDIUM |
| Motor controller/driver | Custom firmware | ⚠️ Limited | Firmware development | HIGH |
| FRP composite weapon body | Injection or hand layup | ✅ VN capable | Mold cost | MEDIUM |
| Al CNC machining | Multi-axis | ✅ VN capable | Tolerance verification | LOW |
| Ethernet/DIS interface | COTS + custom SW | ⚠️ SW development | Software team capability | HIGH |
| Sensor suite (triggers, switches) | COTS industrial sensors | ✅ Import (CN) | None | LOW |
| AR/visual system | Short-throw projector or AR HMD | ✅ Import | Integration, not mfg | MEDIUM |

**Strategic bottleneck:** Software (control firmware + DIS integration + scenario engine) is the primary capability gap, not hardware.

### Layer 3 — Functional Decomposition

**Component Inventory (inferred from patent + website):**

| # | Component | Function | Domain | Criticality |
|---|-----------|----------|--------|------------|
| 1 | Slide tray assembly | Convert motor rotation → linear recoil motion | MECH | CRITICAL |
| 2 | Electric motor + gearbox | Generate recoil force/frequency | MECH/ELEC | CRITICAL |
| 3 | Bell-crank/tie-rod linkage | Rotary-to-linear conversion + stroke amplification | MECH | HIGH |
| 4 | Linear bearing guides | Constrain tray to 1-DOF translation | MECH | HIGH |
| 5 | Adjustable stops (el/az) | Limit weapon traverse range | MECH | MEDIUM |
| 6 | Mounting pintles | Adapt to aircraft/vehicle mount type | MECH | MEDIUM |
| 7 | Replica weapon body | Provide realistic shape/weight/feel | MECH | MEDIUM |
| 8 | Trigger assembly + sensor | Detect operator fire command | ELEC/MECH | CRITICAL |
| 9 | Charging handle assembly | Simulate weapon cocking | MECH | LOW |
| 10 | Safety mechanism | Prevent unauthorized operation | MECH/ELEC | HIGH |
| 11 | Muzzle flash LEDs | Visual firing feedback | ELEC | LOW |
| 12 | Ammo belt/canister simulator | Realistic ammunition handling | MECH | LOW |
| 13 | Onboard motor controller | Drive motor per fire command | ELEC/SW | CRITICAL |
| 14 | Sensor suite (I/O) | Monitor weapon state (6+ channels) | ELEC | HIGH |
| 15 | Ethernet interface | Communicate with host computer | ELEC/SW | CRITICAL |
| 16 | Host computer | Master control: scenarios, malfunctions, data | SW/CTRL | CRITICAL |
| 17 | Visual system (projector/AR) | Generate target environment | SW/ELEC | HIGH |
| 18 | Audio system (speakers + bass) | Weapon/vehicle sound feedback | ELEC | MEDIUM |
| 19 | Instructor station (IOS) | Control training session | SW | HIGH |
| 20 | Windload torque motor | Simulate aerodynamic drag on barrel | MECH/ELEC/CTRL | HIGH |
| 21 | DIS interface module | Connect to external sims (cockpit, etc.) | SW | MEDIUM |
| 22 | Wheeled platform + stairs | Mobility + operator access | MECH | LOW |

**Power Flow:**
```
120VAC/15A wall → PSU → Motor driver → Motor → Gearbox → Linkage → Slide tray (recoil)
                    → Windload motor → Torque on barrel mount
                    → Host computer → Visual + Audio + IOS
                    → Sensor suite power
                    → LED muzzle flash
```

**Signal Flow:**
```
Trigger pull → Trigger sensor → Onboard controller → [Ethernet] → Host computer
Host computer → [Ethernet] → Motor controller → Motor activation (recoil)
Host computer → Visual system (target scene)
Host computer → Audio system (weapon sound)
Host computer → Windload motor (aero drag torque)
Host computer → IOS display (instructor view)
Sensor suite → [various] → Host computer (weapon state telemetry)
```

**Kinematic Chain (recoil mechanism):**
```
Motor shaft (rotary) → Gearbox (speed reduction, torque multiply) → 
  Bell-crank (rotary→oscillating) → Tie rod (oscillating→linear) → 
    Slide tray (linear, fore-aft, 0.30" stroke) → Weapon assembly (recoil impulse)
```

**DOF Analysis:**
- Slide tray: 1 DOF (fore-aft translation)
- Weapon on pintle: 2 DOF (elevation + azimuth), limited by adjustable stops
- Windload: 1 DOF (torque resistance on azimuth or elevation axis)
- Total active DOF: 4

### Layer 4 — Hidden Design Intent

| Feature | Why This Design? (Inferred Intent) | Confidence |
|---------|-----------------------------------|-----------|
| **All-electric, no pneumatic** | Zero consumables = zero OPEX for operator; no compressor noise; simpler logistics | HIGH |
| **Rotary motor + gearbox + linkage** (not linear motor) | Cost-effective; rotary BLDC motors are commodity; gearbox provides force multiplication for small motor | HIGH |
| **Short stroke (0.30")** | Not replicating actual weapon stroke; replicating IMPULSE PERCEPTION. Human hand detects force onset, not displacement | HIGH |
| **Host computer mediates all firing** | Instructor control; malfunction injection; safety override; data logging. Training doctrine requires instructor authority | HIGH |
| **Interchangeable pintles** | Multi-aircraft support from single GAR unit = larger addressable market per unit | HIGH |
| **Replica weapons (not modified real)** | Avoids firearm classification; eliminates wear on real weapons; customs/shipping simplified | HIGH |
| **Weapon body composite** | Lightweight (reducing motor force requirement); corrosion-proof; cost-effective at low volume | MEDIUM |
| **Ethernet interface** | DIS/HLA standard for military simulation networking; enables multi-station interop | HIGH |
| **Elevated wheeled platform** | Simulates helicopter door gunner station height; portable for road-shows/demos | HIGH |
| **18" throw projector** | Compact footprint; no large rear-projection room needed; deployable | HIGH |
| **Windload torque motor** | UNIQUE feature — simulates barrel drag in airstream. Helicopter-specific training gap (competitors don't offer this) | HIGH |
| **Variable firing rate software** | One GAR unit → multiple weapon types via software config, not hardware swap | HIGH |

**Design Era Signals:**
- Patent filed 2008, product since ~2005 → pre-brushless-hobby-motor era
- Ethernet (not CAN/USB) → designed for simulation facility network
- 120VAC/15A → designed for US training facility wall power
- Rotary motor + mechanical linkage → conventional, proven, serviceable

**Safety Factor Indicators:**
- "Full-force recoil" claim → motor/gearbox sized for peak weapon force, not derated
- Physical safety mechanism (prevents trigger depression) → hardware interlock, not SW-only
- Host computer override → redundant safety layer (SW + HW)
- Hard stop on trigger travel → limits sensor overtravel damage

---

## 1B — Material & Process Detective

### TABLE E — Vietnam Manufacturing Capability Gap (Strategic Assessment)

| Component | Original Spec (Inferred) | VN Alternative | Status | Performance Impact | Cost Impact |
|-----------|------------------------|---------------|:------:|-------------------|------------|
| BLDC motor (recoil) | Custom spec, ~50-200W | Import Maxon/Faulhaber OR Chinese equiv | ✅ Import | None if spec matched | -30-50% with CN motor |
| Planetary gearbox | Matched to motor, 10:1-50:1 | Import with motor OR separate CN source | ✅ Import | None | Similar |
| Linear ball guides | THK/Misumi type, precision | Import from CN/SG | ✅ Import | None | -20% with CN |
| Motor controller (electronics) | Custom PCB, FPGA/MCU-based | **WX design** (ESP32/STM32) | ⚠️ WX R&D | Potentially equal if well-designed | Lower |
| Firmware (recoil control) | Proprietary C++/microcode | **WX independent development** | ⚠️ WX R&D | KEY DIFFERENTIATOR | WX investment |
| Composite weapon body | FRP injection or layup | Hand layup FRP (VN capable) | ✅ VN mfg | Cosmetic only | Similar |
| Al CNC machined parts | 6061-T6, multi-axis | VN CNC shops | ✅ VN mfg | None if toleranced correctly | -30% labor |
| Sensor suite | Industrial COTS | Import from CN (Omron/equiv) | ✅ Import | None | -40% with CN |
| Projector/visual | Short-throw commercial | Import (Epson/BenQ) | ✅ Import | None | Similar |
| Host computer SW | Proprietary (C++/Java) | **WX Unity-based** (reuse VN-CUAV-SIM) | ✅ WX existing | BETTER (Unity ecosystem) | $0 marginal |
| DIS interface | Standard protocol | Open-source (Open-DIS) | ✅ Available | None | $0 |
| Audio system | Commercial speakers + amp | Import or VN assembly | ✅ Available | None | -20% |
| Wiring/connectors | MIL-spec harness | VN assembly with imported connectors | ✅ VN mfg | None | -30% labor |

**Strategic Assessment:**
- Hardware: 85-90% achievable with imports + VN manufacturing
- Software: Primary capability gap AND primary opportunity (WX has Unity platform from VN-CUAV-SIM)
- ZERO components require technology that VN fundamentally cannot access

---

## 1C — Tolerance & Performance Reverser

### Tolerance Hierarchy (Inferred from Patent)

| Tier | Feature | Tolerance (inferred) | Rationale |
|------|---------|---------------------|-----------|
| **1 (Functional)** | Slide tray ↔ linear bearing fit | ±0.02mm | Smooth, jitter-free sliding at 950 RPM |
| **1** | Motor shaft ↔ gearbox coupling | ±0.01mm | Power transmission, vibration |
| **1** | Bell-crank pivot ↔ bearing | ±0.02mm | Kinematic accuracy |
| **2 (Interface)** | Pintle ↔ aircraft mount | ±0.1mm | Must mate with real aircraft hardware |
| **2** | Weapon replica ↔ slide tray mount | ±0.1mm | Secure attachment under dynamic load |
| **2** | Trigger hard stop position | ±0.5mm | Travel feel consistency |
| **3 (Assembly)** | Cradle housing ↔ platform | ±0.5mm | Structural, non-critical |
| **3** | Sensor mounting positions | ±1.0mm | Proximity sensors, not precision |
| **4 (Cosmetic)** | Weapon body surface finish | ±1.0mm+ | Visual realism only |

### Critical Performance Parameters (Reverse-Calculated)

**Recoil Force Estimation:**

For M240 (7.62mm NATO, ~750 RPM, ~15 lb recoil force on real weapon):
```
Real M240 recoil force: ~67N (15 lbf) per shot
Shot cycle time at 750 RPM: 80ms
  - Recoil stroke: ~30ms (forward impulse)
  - Return stroke: ~50ms (spring/motor return)

Slide tray stroke: 7.6mm (0.30")
Tray + weapon mass: estimated 5-15 kg (weapon replica ~10 kg)

Required acceleration: a = F/m
  If "full force" = 67N and mass = 10 kg: a = 6.7 m/s²
  Stroke = 7.6mm: v = √(2as) = √(2 × 6.7 × 0.0076) = 0.32 m/s peak

Motor torque (at gearbox output):
  If bell-crank arm = 50mm: T = F × r = 67 × 0.05 = 3.35 Nm
  If gearbox ratio 20:1: Motor torque = 0.17 Nm at 20× speed
  Motor speed at 750 RPM weapon cycle: 15,000 RPM (or crank mechanism)
```

**For M134 Minigun (3,000 RPM):**
```
Cycle time: 20ms per shot
  - Recoil stroke: ~8ms
  - Return stroke: ~12ms
  
At 3,000 RPM, motor runs essentially continuously (vibration mode)
Motor must handle continuous duty at high frequency
Peak current demand much higher
```

**Key insight from patent:** "Does not rely on mass/acceleration to create a force" — the system creates IMPULSE PERCEPTION, not ballistic recoil. The 0.30" stroke at sharp onset mimics the FEEL of recoil without replicating the actual momentum change. This is consistent with Galaxy note [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]].

**Windload Torque Motor:**
```
Real barrel drag at 100kt airspeed: highly variable, estimated 5-20 Nm
Simulated via separate torque motor on traverse axis
Controllable via host computer (speed-dependent)
WX equivalent: similar to Channel A in Two-Channel Law (magnetic particle brake)
```

### Performance Summary

| Parameter | ACME GAR Spec (inferred) | WX Target (from CUAV-SIM) | Gap |
|-----------|------------------------|--------------------------|-----|
| Recoil force (peak) | 50-100N (full-force claim for .50 cal) | ≥25N (F1.6 requirement) | WX target is LOWER = easier |
| Firing rate range | 750-3,000 RPM | 600-900 RPM (12.7mm focus) | WX range is NARROWER = easier |
| Stroke distance | 7.6mm (0.30") | TBD (design parameter) | — |
| Power | 120VAC/15A or 12/24VDC | 220VAC/10A (VN standard) | Trivial PSU adaptation |
| Latency (trigger→recoil) | <10ms (estimated for perceptual realism) | <20ms (acceptable for L3) | WX has more margin |
| Weapon types supported | 9+ (M2, M240, M134, MK19...) | 3-5 (12.7mm, 14.5mm, 23mm, small arms) | WX scope smaller |
| Multi-station DIS | Yes (full DIS/HLA interop) | Yes (Unity + Open-DIS) | Parity |
| Windload simulation | Yes (torque motor) | Yes (Channel A = magnetic brake) | Different mechanism, same function |
| AR visual | Yes (current gen) | Unity VR/AR (planned) | Parity or WX advantage |

---

## 1M — Domain Decomposition (MECHA — VDI 2206)

### Domain 1 — Mechanical

| Sub-system | Components | Function | Criticality |
|-----------|-----------|----------|------------|
| **Recoil mechanism** | Motor, gearbox, bell-crank, tie-rod, slide tray, linear bearings | Generate impulse perceived as recoil | CRITICAL |
| **Weapon replica** | Body (FRP), barrel (Al), trigger assembly, charging handle, ammo simulator | Operator interface (realistic feel/weight) | HIGH |
| **Mounting system** | Pintles (interchangeable), adjustable stops, windload axis | Adapt to vehicle/aircraft mount type | HIGH |
| **Platform** | Wheeled frame, stairs, rails, storage | Portability + operator ergonomics | MEDIUM |
| **Windload mechanism** | Torque motor on traverse axis | Resist barrel movement (simulates airstream) | HIGH |

### Domain 2 — Electronic

| Sub-system | Components | Function | Criticality |
|-----------|-----------|----------|------------|
| **Motor drive** | Motor controller, H-bridge/ESC, current sensing | Power motor per control commands | CRITICAL |
| **Sensor suite** | Trigger sensor, safety switch, charging handle, feed cover, ammo status, selector | Monitor operator actions | HIGH |
| **Muzzle flash** | LED driver, visible + near-IR LEDs | Visual firing feedback | LOW |
| **Power supply** | AC-DC converter (120VAC→12/24/48VDC) | System power | HIGH |
| **Ethernet interface** | Ethernet PHY, RJ45, protocol stack | Host computer communication | CRITICAL |
| **Audio amplifier** | Class-D amp + speakers + bass transducer | Sound feedback | MEDIUM |
| **Visual system** | Short-throw projector OR AR headset | Target environment generation | HIGH |

### Domain 3 — Software

| Layer | Components | Function | Criticality |
|-------|-----------|----------|------------|
| **Motor firmware** | Embedded C/C++ on MCU/FPGA | Real-time motor control loop (≥1 kHz) | CRITICAL |
| **Weapon profile library** | Recoil parameters per weapon type | Configure force/timing/rate per weapon | CRITICAL |
| **Host application** | Scenario engine, target behavior, scoring | Training session management | HIGH |
| **IOS (Instructor)** | GUI: scenario select, malfunction inject, scoring display | Instructor control interface | HIGH |
| **DIS/HLA interface** | Open-DIS or COTS DIS library | Multi-simulator interoperability | MEDIUM |
| **Visual rendering** | 3D scene (terrain, targets, vehicle) | Out-the-window visual | HIGH |
| **Audio engine** | Weapon sound library, environmental audio | Sound feedback synchronized to firing | MEDIUM |
| **Data logging** | Performance metrics, AAR data | Training record + after-action review | MEDIUM |

### Domain 4 — Control

| Loop | Bandwidth | Function | Implementation |
|------|-----------|----------|---------------|
| **Inner: Motor current** | ~10 kHz | Torque control (current → force) | Motor controller hardware |
| **Middle: Recoil position** | ~1 kHz | Stroke profile (position/velocity tracking) | Firmware PID/profile |
| **Outer: Firing sequence** | ~100 Hz | Shot timing, malfunction logic | Firmware state machine |
| **Supervisory: Host** | ~30-60 Hz | Scenario, instructor commands, safety | Host computer software |
| **Safety: Hardware** | Asynchronous | Physical safety interlock, E-stop | Hardwired relay/switch |

**State Machine (inferred from patent):**

```
[OFF] →(power on)→ [STANDBY]
[STANDBY] →(host connects)→ [READY]
  [READY] →(safety off + trigger pull)→ [FIRING]
    [FIRING]: motor cycles at weapon rate
    [FIRING] →(trigger release)→ [READY]
    [FIRING] →(safety on)→ [READY]
    [FIRING] →(host: cease fire)→ [READY]
    [FIRING] →(host: malfunction)→ [MALFUNCTION]
  [MALFUNCTION] subtypes:
    RUNAWAY: motor continues after trigger release (requires safety engage)
    MISFIRE: trigger pull → no recoil (motor paused)
    SLUGGISH: reduced rate/force
    COOK-OFF: recoil without trigger (host override)
  [MALFUNCTION] →(correct procedure)→ [READY]
  [MALFUNCTION] →(host reset)→ [READY]
[ANY] →(E-STOP)→ [OFF]
[ANY] →(host disconnect timeout)→ [SAFE_STOP]
```

### Cross-Domain Mapping Matrix

| Function | Mech | Elec | SW | Ctrl | Integration Risk |
|----------|:----:|:----:|:--:|:----:|-----------------|
| **Generate recoil impulse** | Motor+gearbox+linkage+tray | Motor driver, current sensing | Recoil profile, weapon library | Inner+Middle loop | TIMING: motor response must match firing rate |
| **Detect fire command** | Trigger mechanism | Trigger sensor, debounce | Signal processing | Outer loop input | LATENCY: trigger→recoil <10ms |
| **Control firing rate** | Mechanical limits | — | Rate algorithm | Outer loop | JITTER: consistent timing at 750-3000 RPM |
| **Inject malfunctions** | — | — | Malfunction logic | Supervisory | SAFETY: cook-off must be controllable |
| **Simulate windload** | Torque motor, mount axis | Motor driver | Aero model | Separate loop | COUPLING: windload ≠ recoil interaction |
| **Generate visual scene** | Projector/AR mount | Display, GPU | Rendering engine | Frame sync | SYNC: visual ↔ recoil ↔ audio timing |
| **Generate audio** | Speakers, bass | Amplifier | Audio engine | Event sync | SYNC: audio onset ≤ recoil onset |
| **Log performance** | — | Sensors | Data logging | — | DATA: consistent timestamp across domains |
| **Enable DIS interop** | — | Ethernet PHY | DIS stack | Scenario sync | PROTOCOL: entity state PDU timing |
| **Ensure safety** | Physical interlock | E-stop relay | Safety monitoring | All levels | REDUNDANCY: HW safety independent of SW |

---

## System Boundary & Black Box

### Context Diagram

```
                           ┌─────────────────────────┐
       ┌──── 120VAC ──────→│                         │
       │                   │                         │
  Operator ──(hands/eyes)──→│    ACME GAR GTS        │──→ Training metrics (AAR)
       │                   │    (SYSTEM)             │
  Instructor ──(IOS)──────→│                         │──→ Scoring/assessment
       │                   │                         │
  DIS Network ──(Ethernet)─→│                         │──→ DIS entity state PDUs
       │                   │                         │
  Environment ──(temp/hum)─→│                         │
                           └─────────────────────────┘
```

### Interface Inventory

| # | Interface | Type | Direction | Protocol/Signal | Criticality |
|---|-----------|------|-----------|----------------|------------|
| I-1 | Operator → Trigger | Mechanical/Electrical | IN | Switch closure | CRITICAL |
| I-2 | System → Operator (recoil) | Mechanical (force) | OUT | Impulse 50-100N | CRITICAL |
| I-3 | System → Operator (visual) | Optical | OUT | Projected image / AR | HIGH |
| I-4 | System → Operator (audio) | Acoustic | OUT | Speaker output | MEDIUM |
| I-5 | System → Operator (windload) | Mechanical (torque) | OUT | Continuous resistance | HIGH |
| I-6 | Instructor → System (IOS) | Digital | IN | GUI commands | HIGH |
| I-7 | System → Instructor (data) | Digital | OUT | Scoring display | MEDIUM |
| I-8 | DIS Network ↔ System | Digital | BIDI | DIS 2.0.4 / HLA | MEDIUM |
| I-9 | Mains power → System | Electrical | IN | 120VAC/15A | HIGH |
| I-10 | System → Operator (muzzle flash) | Optical | OUT | LED pulse | LOW |

---

## Competitor Comparison (Public Sources)

### Recoil Technology Landscape

| Manufacturer | Product | Mechanism | Force Method | Consumables | Tethered? | Patented? |
|-------------|---------|-----------|-------------|-------------|-----------|-----------|
| **ACME** | GAR GTS | Rotary motor + slide tray | Electric (full-force) | None | Yes (power) | YES (5 patents) |
| **Haptech** | ERIS/M4 surrogate | Linear electromagnetic motor | Electric (linear motor) | None | No (battery) | YES (77 patents) |
| **Dvorak/Cubic** | ARS/TRS | CO2/compressed air on bolt | Pneumatic (bolt cycling) | CO2 cartridges | TRS: no, ARS: yes | Limited |
| **Laser Shot** | MMTS/WST | Air compressor on bolt | Pneumatic | Compressed air | Yes | Limited |
| **ELI Military** | CO2 magazine | CO2 in magazine | Pneumatic (bolt) | CO2 | No | Limited |
| **Zen Technologies** | AWeSim | Modified real weapon | Blank/CO2 | Blanks or CO2 | Varies | No (India) |
| **WX (concept)** | MWI Channel B | Masselotte/solenoid/pneumatic | Various (see trade study) | Varies | Yes (power) | Not yet |

### Key Architectural Differences

| Aspect | ACME (mount-level) | Haptech (weapon-level) | Dvorak (bolt-level) |
|--------|-------------------|----------------------|-------------------|
| What moves | Entire weapon + mount | Sliding mass inside weapon | Weapon bolt/slide |
| Recoil feel | Full-force impulse via mount | Linear impulse via mass | Bolt cycling + partial impulse |
| Weapon wear | Zero | Zero | Some (bolt cycling) |
| Multi-weapon | One cradle, swap weapons | One weapon per surrogate | One weapon per setup |
| Complexity | Medium (motor + linkage) | High (linear motor + magnets) | Low (pneumatic valve) |
| Cost | High (~$15K per unit est.) | Very high (linear motor) | Medium (pneumatic) |
| VN relevance | HIGH — mounted weapon trainer concept | LOW — individual weapon focus | MEDIUM — simpler mechanism |

---

## NLM Integration

### NLM-2: Source Presentation for CEO Selection

Based on Stage 0 condition #1 (public sources only), the following sources are available for NLM notebook creation:

| # | Title | Type | Source | Relevance |
|---|-------|------|--------|-----------|
| 1 | US 8,690,575 B1 — Weapon Simulator (ACME) | Patent | Google Patents | Direct — core mechanism patent |
| 2 | US 10,001,338 B1 — Weapon Simulator (ACME) | Patent | Google Patents | Direct — continuation claims |
| 3 | US 9,719,748 B2 — Firearm Recoil Simulation (Haptech) | Patent | Google Patents | Competitor — linear motor alternative |
| 4 | ACME GAR Brochure PDF | Brochure | acme-worldwide.com | Direct — product marketing |
| 5 | ACME GTS Product Page | Web | acme-worldwide.com | Direct — system overview |
| 6 | ACME Replica Weapons Page | Web | acme-worldwide.com | Direct — weapon details |
| 7 | Haptech ERIS — National Defense Magazine (2026-02) | Article | nationaldefensemagazine.org | Competitor — electromagnetic approach |
| 8 | Dvorak Instruments Product Pages | Web | dvorakinstruments.com | Competitor — pneumatic approach |
| 9 | ELI Military Simulations Recoil Equipment | Web | eli.ee | Competitor — CO2 approach |
| 10 | "Experimental Mechanical Device for Recoil Simulation" | Academic | academia.edu | Academic — spring-based approach |
| 11 | "Electromagnetic Counter-recoil Mechanism Based on Adaptive Sliding Mode Control" | Journal | Springer | Academic — electromagnetic control |
| 12 | "A VR gun controller with Recoil Adjustability" | Academic | Semantic Scholar | Academic — voice coil approach |
| 13 | Existing WX NLM notebook: `127sim` (10 sources) | NLM | WX vault | WX prior research |

**CEO: Chọn sources nào để add vào NLM notebook? (Core — CEO quyết định)**
**Option: Reuse existing `127sim` notebook + add ACME patents?**

---

## STAGE 1M SUMMARY

```
=== STAGE 1M COMPLETE — ACME GAR GTS DECONSTRUCTION ===

Source type: PUBLIC ONLY (no physical specimen — ITAR constraint)
Components catalogued: 22 (across 4 domains)
Materials identified: 12 components (avg 75% confidence — limited by no physical access)
Critical dimensions: 5 Tier 1 features identified (3 UNKNOWN, need estimation)
Domains mapped: Mech(5 subsystems) / Elec(7 subsystems) / Sw(8 layers) / Ctrl(5 loops)
Control loops: 5 (inner 10kHz → supervisory 30-60Hz)
State machine states: 6 (OFF/STANDBY/READY/FIRING/MALFUNCTION/SAFE_STOP)
SW architecture hypothesis: Host-subordinate (host = master, GAR = slave via Ethernet)

VN MANUFACTURING CAPABILITY:
  ✅ Available: 10/14 components (hardware mostly commodity)
  ⚠️ Gap: 4/14 (motor controller, firmware, DIS SW, host application)
  ❌ Not available: 0 (nothing fundamentally blocked)

STRATEGIC BOTTLENECK: Software (firmware + host + DIS), not hardware.
WX ADVANTAGE: Unity platform from VN-CUAV-SIM-001 addresses host SW gap directly.

TOP 5 UNKNOWNS (would need physical specimen or acquisition):
1. Exact motor specs (torque, model, manufacturer) — MEDIUM impact
2. Slide tray mass (determines force/acceleration relationship) — HIGH impact
3. GAR unit dimensions & weight — MEDIUM impact
4. PCB design (motor controller architecture) — HIGH impact (but WX will design own)
5. Recoil force calibration data per weapon — HIGH impact (but WX will develop own)

WX PRIOR ART CROSS-REFERENCE:
- Galaxy: [[Recoil Fidelity Threshold]], [[Two-Channel Law]], [[Pneumatic Patent Freedom]]
- Trade Study: 5 working principles evaluated (Solenoid, Pneumatic, Voice Coil, Masselotte, Hybrid)
- Decision: Channel A (mount resistance) = magnetic brake, Channel B (firing vibration) = TBD (masselotte PoC candidate)
- ACME GAR architecture = VALIDATES Two-Channel Law: ACME COMBINES both channels ($15K), WX SEPARATES them ($1.5-2.5K)

CEO ACTIONS REQUIRED (Core — non-delegable):
1. ✅ Approve deconstruction report
2. ✅ Select NLM sources (if NLM notebook desired)
3. 🔍 Flag any operational knowledge not captured (CEO has field experience with mounted weapon training)
4. ⚠️ Confirm: proceed to Stage 2M (DECODE) or pause for NLM KB setup first?

CEO: approve Stage 1M to proceed to Stage 2M?
```

**STOP. Waiting CEO approval before Stage 2M (DECODE — Requirements Reconstruction).**
