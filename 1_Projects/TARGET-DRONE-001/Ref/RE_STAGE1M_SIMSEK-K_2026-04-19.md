---
created: 2026-04-19
type: re-domain-decomposition
source: /reverse-engineering --mode mecha --stage 1M
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 1M: MECHA DOMAIN DECOMPOSITION — Simsek-K
## VDI 2206 4-Domain Analysis | 2026-04-19

---

## DOMAIN 1 — MECHANICAL

| Category | Component | Function | Est. Mass | Material | VN Capability |
|----------|-----------|----------|-----------|----------|---------------|
| **Structural** | Fuselage shell | Aerodynamic envelope, houses fuel+avionics+payload | 15-20 kg | CFRP/GFRP composite | ⚠️ VARTM feasible |
| | Wing + tail section | High-subsonic lift, stabilization at 83kg MTOW | 10-12 kg | CFRP co-cured skins + internal spars | ⚠️ Available |
| | Engine bay | Structural mounting for TEI-TJ90 | 3-5 kg | Machined Al 7075-T6 / steel fittings | ✅ 5-axis CNC |
| **Kinematic** | Control surfaces + hinges | Pitch/roll/yaw modulation | <2 kg | Marine-grade Al 5000-series | ✅ Standard machining |
| | Actuator linkages | Servo-to-surface mechanical connection | <1 kg | SS rods/clevises | ✅ Domestic hardware |
| **Thermal** | Engine insulation | Protect composites from 950-1050°C TIT | 1-2 kg | Ceramic/titanium foil heat shields | ⚠️ May require import |
| **Sealing** | Fuel tank (35L) | Contains JP-8 fuel | 2-3 kg | Bladder or sealed composite integral tank | ✅ Standard aerospace |
| | Avionics/payload bay seals | Humidity/salt protection (80-90% RH) | <1 kg | Hermetic rubber seals/gaskets | ✅ Available |
| **Vibration/Shock** | RATO attachments | Absorb 8-15g RATO acceleration | 2-4 kg | Machined 4340 steel | ✅ Precision machining + HT |
| | Engine mounts | Isolate airframe from 96k RPM vibration | <1 kg | Elastomeric/rubber isolation mounts | ✅ COTS |

**Mechanical domain total estimated mass: ~38-45 kg** (of 83 kg MTOW)

---

## DOMAIN 2 — ELECTRONIC

| Category | Component | Function | Interface | Power (W) | ITAR Risk | VN Substitute |
|----------|-----------|----------|-----------|-----------|-----------|---------------|
| **Power** | Generator/PDU | Engine-driven 28VDC, 300-500W | MIL-DTL-38999 | — | LOW | Custom VN PCB PDU |
| | Battery | Backup for parachute/FTS | Direct DC | — | LOW | Li-Po/Li-Ion pack |
| **Processing** | FCC | Flight algorithms, mission mgmt | CAN, RS-422, PWM | 15-30 | MODERATE | Pixhawk 6X (STM32H7) |
| **Sensors** | GNSS receiver | Multi-constellation navigation | UART/RS-232 | 5-10 | HIGH | Ublox F9P (BeiDou/GLONASS) |
| | INS/IMU | MEMS attitude tracking | SPI | 3-5 | MODERATE | Bosch/InvenSense industrial |
| | Radar altimeter | Sea-skimming altitude (5-15m) | RS-422 | 10-20 | HIGH | Ainstein mmWave (ITAR-free) |
| | Air data (pitot) | Airspeed measurement | I2C digital pressure | 1-2 | LOW | Commercial pitot |
| **Actuators** | Servos (×4) | Drive control surfaces | PWM/CAN | 50-150 peak | LOW | Volz/Hitec high-torque |
| | Pyrotechnics | RATO separation + chute deploy | GPIO discrete | — | LOW | Domestic VN pyrotechnics |
| **Comms** | Datalink modem | C-band 5-6GHz, 150km, encrypted | RS-422/Ethernet | 50-100 | HIGH | Indigenous VN datalink |
| **Interconnects** | Wiring harness | Power + data distribution | PTFE, CAN bus | — | LOW | Domestic fabrication |
| **PCB** | Custom boards (est. 3-5) | FCC, PDU, payload interface | 4-6 layer FR4, conformal coated | — | LOW | VN SMT + defense QC |

**Estimated board count: 3-5 boards** (FCC, PDU, datalink, payload interface, FTS)

---

## DOMAIN 3 — SOFTWARE

| Layer | Components | Est. LoC | Dev Effort | Open-Source Alternative |
|-------|-----------|----------|------------|----------------------|
| **1. Bootloader** | HW init, secure boot, firmware update | ~5K | 2 months | PX4 Bootloader |
| **2. RTOS** | Task scheduling, memory mgmt, thread sync | ~15K | N/A (use existing) | **FreeRTOS** or **Zephyr** (MISRA-C config) |
| **3. HW Drivers** | SPI/I2C (IMU, GNSS), PWM (servos), CAN (FADEC), UART (datalink) | ~20K | 6 months | ArduPilot/PX4 HAL |
| **4. Middleware** | Tightly-coupled Kalman filter (GNSS/INS), waypoint manager, mission state machine | ~30K | 8 months | ArduPilot EKF3 |
| **5. Application** | Autonomous nav, sea-skimming, terminal guidance (kamikaze), BIT self-test | ~40K | 12 months | Custom C++ on ArduPilot/PX4 framework |
| **6. Safety/FTS** | Flight termination, link-loss handler, geofence, watchdog, altitude floor | ~10K | 4 months | ArduPilot failsafe (heavily modified for VN range safety) |

**Total estimated: ~120K LoC, ~32 months dev effort** (with 2-3 software engineers)

**Critical SW integration risk:** CAN bus driver for TEI-TJ90 FADEC. Packet structure unknown — needs either TT from TAI or reverse-engineering of FADEC communication protocol via logic analyzer capture.

---

## DOMAIN 4 — CONTROL

| Loop | Rate | Latency Budget | Function | Confidence |
|------|------|---------------|----------|------------|
| Inner (attitude) | ≥400 Hz | <10 ms | IMU → PID → servo commands | LOW |
| Outer (navigation) | ~50 Hz | <100 ms | GNSS/INS EKF → waypoint tracking | LOW |
| Supervisory (mission) | 1-10 Hz | N/A | State machine: cruise/sea-skim/kamikaze/recovery | MEDIUM |
| FADEC (engine) | ~100 Hz | <5 ms | RPM, EGT, fuel flow → throttle | LOW |
| FTS (safety) | Always active | Highest priority interrupt | Geofence, link-loss, altitude floor → terminate | MEDIUM |

**Stability requirements:** Gain margin ≥6 dB, Phase margin ≥45° (for transonic flight at Mach 0.63)

---

## CROSS-DOMAIN MAPPING MATRIX

| Function | Mech | Elec | Sw | Ctrl | Integration Risk |
|----------|------|------|-----|------|-----------------|
| **Propulsion** | TJ-90 mounting, inlet duct, fuel plumbing | FADEC ECU, 28VDC generator, fuel pump | CAN driver, throttle commands, engine telemetry | Speed controller, compressor stall prevention | **HIGH** — CAN latency → flameout |
| **Attitude Control** | Control surfaces, hinges, linkages | High-torque servos, IMU | Inner-loop PID, sensor filtering | 400Hz loop, stability margins | **HIGH** — transonic buffet → PIO |
| **Navigation + Sea-skim** | Radar alt mounting, stable aerodynamics over water | GNSS, INS, radar altimeter | EKF, waypoint manager, altitude hold | 50Hz outer loop, 5-15m AGL | **MEDIUM** — multipath errors over rough seas |
| **Kamikaze Terminal** | Structural margins for high-G dive, warhead bay | Target sensor, arming circuit | Terminal guidance logic | State machine: cruise → attack | **HIGH** — composite wing root failure at extreme G |
| **Launch (RATO)** | 4340 steel lugs, launch rails | Pyrotechnic ignition, umbilical disconnect | Launch detection (accel trigger) | Surfaces locked neutral until separation | **HIGH** — premature deflection = crash |
| **Recovery (Parachute)** | Bay door, risers, foam | Deploy solenoids, GPS beacon | Engine cutoff sequence, deploy triggers | Engine RPM = 0 before drogue | **MEDIUM** — chute + exhaust plume timing |
| **Threat Sim (RCS/IR)** | Luneberg lens mount, payload bay | RF repeater power, IR heaters | Payload switching logic | Mode toggle per range coordinates | **LOW** — modular, independent |
| **Datalink C2** | GFRP antenna housings | Modem, encryption, C-band Tx/Rx | Telemetry packing, AES crypto | Latency monitor, RTL on link-loss | **MEDIUM** — EW jamming interference |
| **Flight Termination** | Surface hard-over mechanisms | Independent battery, FTS receiver | FTS activation, geofence check | Highest-priority interrupt, bypasses all | **HIGH** — must be mathematically provable |
| **Power Distribution** | Generator mechanical drive from engine | PDU, battery, bus management | Power monitoring, load shedding | Priority allocation under constrained budget | **MEDIUM** — active payloads exceed budget |

---

## STAGE 1 CONSOLIDATED SUMMARY

```
=== STAGE 1 COMPLETE — Simsek-K MECHA DECONSTRUCTION ===

Stages completed: 1A + 1B + 1C + 1M (full MECHA deconstruction)
NLM Notebook: RE: Simsek-K (TAI) — MECHA Mode
NLM Conversation: 509b2843 (4 queries, all successful)
Sources used: 23 (8 cited across queries)

DOMAIN INVENTORY:
  Mechanical: 10 subsystem categories, ~38-45 kg estimated
  Electronic: 12 component types, 3-5 custom PCBs
  Software:   6 layers, ~120K LoC, ~32 months dev
  Control:    5 loop levels, stability margins inferred

HIGH-RISK INTEGRATION POINTS (5):
  1. FADEC↔FCC CAN bus latency (<10ms or flameout)
  2. Transonic buffet → PIO (servo bandwidth at Mach 0.63)
  3. RATO: control surface lock during 15g boost phase
  4. Kamikaze: composite wing root at extreme G
  5. FTS: must be independently provable safe

STRATEGIC BOTTLENECKS FOR VN (unchanged from 1B):
  ❌ TEI-TJ90 engine (CRITICAL — must import or TT)
  ❌ RAM / advanced RCS augmentation
  ⚠️ Avionics (FCC + encrypted datalink)
  ⚠️ Aerospace composites (3-5 year capability build)

VN SW SOVEREIGNTY PATH: ArduPilot/PX4 base + custom
  application layer = viable. ~32 months with 2-3 engineers.

TOP 5 UNKNOWNS (need physical access):
  1. TJ-90 FADEC CAN packet structure
  2. Airfoil profile (NACA family, sweep angle)
  3. Structural safety factors (ply schedule)
  4. Control loop PID gains and filter coefficients
  5. Actual avionics board layout and processor IDs

CEO ACTIONS REQUIRED:
  1. Approve Stage 1 Deconstruction Report
  2. Decide: proceed to Stage 2 (Decode — Requirements Reconstruction)?

Deliverables saved:
  - RE_STAGE1A_SIMSEK-K_2026-04-19.md (Artifact Deconstruction)
  - RE_STAGE1B_SIMSEK-K_2026-04-19.md (Material & Process)
  - RE_STAGE1C_SIMSEK-K_2026-04-19.md (Tolerance & Performance)
  - RE_STAGE1M_SIMSEK-K_2026-04-19.md (Domain Decomposition — this file)
```
