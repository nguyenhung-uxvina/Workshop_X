---
created: 2026-04-19
type: re-deconstruction
source: /reverse-engineering --mode mecha --stage 1A
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
nlm-notebook: 4eddeba0-3bdd-488a-a7f3-9dd1702818b1
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 1A: ARTIFACT DECONSTRUCTION — Simsek-K
## OSINT-Based Analysis (Pre-Physical Access) | 2026-04-19

NLM Notebook: RE: Simsek-K (TAI) — MECHA Mode
Sources: 23 ingested (20 web/PDF + 3 YouTube + 2 WX internal files)

---

## Layer 1 — Geometric & Dimensional

| Parameter | Value | Confidence | Source |
|-----------|-------|------------|--------|
| Overall Length | 2.4 m | HIGH | TAI official, Army Recognition, multiple |
| Wingspan | 1.5 m | HIGH | TAI official, Army Recognition |
| MTOW | 83 kg | HIGH | TAI official, multiple |
| Payload Capacity | Up to 18 kg | HIGH | TAI official, multiple |
| Fuel Capacity | 35 L (~28 kg JP-8) | HIGH | Army Recognition |
| Max Speed | Mach 0.63 (~770 km/h) | HIGH | TAI official, multiple |
| Service Ceiling | 7,620 m (25,000 ft) | HIGH | TAI official |
| Endurance | >45 min | HIGH | TAI official |
| Operational Range | >500 km | HIGH | TAI official |
| Datalink Range | 150 km (LoS) | HIGH | TAI official |
| Aerodynamic Config | Cruise missile layout, moderate-high wing loading | MEDIUM | Visual inference from photos |
| Wing Type | Mid/high wing, swept (angle TBD) | MEDIUM | Photos — needs 3D scan for NACA profile |
| Natural RCS | 0.5-2 m² (X-band, unaugmented) | MEDIUM | Size-class inference |

**Unknown Items (need physical access):**
- Exact airfoil profile (NACA family)
- Wing sweep angle
- Control surface dimensions and hinge lines
- Internal volume allocation (fuel vs payload vs avionics)
- CG position and stability margins
- Empty weight breakdown

---

## Layer 2 — Material & Process

| Component | Material Candidates | Most Likely | Confidence | VN Capability |
|-----------|-------------------|-------------|------------|---------------|
| Fuselage | Fiberglass/carbon fiber composite | Fiberglass epoxy, RTM or hand layup | HIGH | ⚠️ Limited — WX has moderate composite capability |
| Wings | Composite (same as fuselage) | Fiberglass/carbon with foam core | MEDIUM | ⚠️ Limited — layup capability developing |
| Engine mounts | Aluminum 5000/7000 series or steel | Machined aerospace aluminum | MEDIUM | ✅ Available — CNC machining |
| Engine hot section (TJ-90) | Nickel superalloy (Hastelloy X) | Investment cast single-stage axial turbine | HIGH | ❌ Not available — no investment casting capability |
| Control surfaces | Composite | Same as wings with smaller molds | MEDIUM | ⚠️ Limited |
| Radome | Fiberglass or RF-transparent composite | Fiberglass | MEDIUM | ✅ Available |
| Parachute bay | Composite or aluminum | Composite with aluminum frame | LOW | ✅ Available |
| Surface treatment | UV-resistant marine coatings | Marine-grade paint + possible RAM areas | MEDIUM | ✅ Available |
| Fasteners | Stainless steel / titanium | SS for marine environment | MEDIUM | ✅ Available (import) |

**Strategic Bottleneck:** TEI-TJ90 hot section (superalloy investment casting) — NOT available domestically. This is the single most critical technology gap.

**Verification needed:** Destructive testing for ply orientation, fiber-to-resin ratio, exact alloy composition (mass spectrometry).

---

## Layer 3 — Functional Decomposition (4-Domain)

### Propulsion System
| Parameter | Value | Confidence | Source |
|-----------|-------|------------|--------|
| Engine | TEI-TJ90 Turbojet | HIGH | TEI official |
| Max Thrust | 390±10 N (90 lbf) | HIGH | TEI datasheet |
| Max RPM | 96,000 | HIGH | TEI datasheet |
| Dry Weight | 4.75 kg (6.95 kg with ECU) | HIGH | TEI datasheet |
| Length | 380 mm | HIGH | TEI datasheet |
| Diameter | 153.5 mm | HIGH | TEI datasheet |
| TSFC | 0.17 kg/N.h | HIGH | TEI datasheet |
| Maintenance Interval | 25+ hours | HIGH | TEI datasheet |
| Start | Electric start | HIGH | TEI datasheet |
| Control | FADEC (CAN/RS-485 to FCC) | MEDIUM | Inference from Turkish practice |
| Compliance | EMI/EMC, catapult-load resistant | HIGH | TEI datasheet |

### Launch System (RATO)
| Parameter | Value | Confidence |
|-----------|-------|------------|
| Type | Rocket-Assisted Take-Off (zero-length) | HIGH |
| Initial acceleration | 8-15g | MEDIUM |
| Booster thrust | 500-1000 kgf (burst) | LOW — inference |
| Burn time | 1-3 seconds | LOW — inference |
| Propellant | Composite solid (Roketsan likely supplier) | MEDIUM |
| Separation | Automatic after burnout | MEDIUM |
| Platform compatibility | Land (trailer), ship deck, aerial (ANKA carrier) | HIGH |

### Recovery System
| Parameter | Value | Confidence |
|-----------|-------|------------|
| Type | Parachute (drogue + main) | HIGH |
| Trigger | Altitude-triggered or command-triggered | MEDIUM |
| Recovery environment | Land or sea | HIGH |
| Link-loss behavior | Auto return-to-base + parachute deploy at predefined coords | HIGH |

### Electronic Domain — Signal Flow
```
GNSS (multi-constellation) + MEMS INS
    → Tightly-coupled Kalman Filter
        → Flight Control Computer (FCC)
            → CAN/RS-422 bus
                → Servo actuators (control surfaces)
                → FADEC (engine throttle)

C-band Datalink (5-6 GHz, encrypted, 150km LoS)
    → FCC (mission updates, commands)
    → Telemetry downlink

Radar Altimeter (sea-skimming)
    → FCC (low-altitude flight mode)

Air Data (pitot-static)
    → Airspeed, altitude → FCC
```

### Electronic Domain — Power Flow
```
TEI-TJ90 engine-driven generator (28VDC, ~200-500W)
    → Power Distribution Unit
        → FCC + Navigation
        → Datalink modem
        → Servo actuators
        → Payload systems
    → Backup battery (emergency power)
```

### Payload Configurations (Modular 18kg Bay)
| Payload | Function | Type |
|---------|----------|------|
| Luneberg lens | Passive RCS augmentation (1-100 m²) | Passive |
| Active radar repeater | Active RCS simulation (specific threat profiles) | Active |
| IR signature augmenter | Heated nose for IR simulation | Active |
| MDI (Miss Distance Indicator) | Scoring miss distance | Sensor |
| SA camera | Situational awareness | Sensor |
| EW jammer | Electronic warfare training | Active |
| Warhead (5 kg HE) | Kamikaze mode | Munition |

### Software Domain (Inference)
| Layer | Likely Implementation | Confidence |
|-------|----------------------|------------|
| RTOS | Custom real-time or FreeRTOS | MEDIUM |
| Language | C (MISRA-C partial compliance) | MEDIUM |
| Architecture | Federated (discrete boxes, CAN bus interconnect) | MEDIUM |
| FCC processor | ARM Cortex-R or -M family | MEDIUM |
| Mission management | Waypoint nav, mission planning, in-flight update | HIGH |
| Safety | FTS (flight termination), geofence, link-loss auto-return | HIGH |
| Modes | Off/Standby/Init/Normal/Emergency/Recovery | HIGH |

### Control Domain (Inference)
| Loop | Rate | Latency Budget | Confidence |
|------|------|---------------|------------|
| Inner (attitude) | ≥400 Hz | <10 ms sensor-to-actuator | LOW — needs HIL verification |
| Outer (navigation) | ~50 Hz | <100 ms | LOW |
| Supervisory (mission) | ~1-10 Hz | N/A | MEDIUM |
| Gain margin | ≥6 dB | — | LOW — inference for transonic |
| Phase margin | ≥45° | — | LOW — inference |

**Sea-skimming capability:** Radar altimeter + programmed descent profile, 5-15m AGL over sea. Safety logic enforces minimum altitude limit.

**Terminal maneuvers (kamikaze mode):** Pop-up, weaving (S-turns), terminal dive — implies high structural load factors.

---

## Layer 4 — Hidden Design Intent

| Question | Analysis | Confidence |
|----------|----------|------------|
| **Why 83 kg & 2.4 m?** | Sweet spot for replicating RCS of older-generation ASCM (0.5-2 m²) while cheap enough for attritable use. 35L fuel maxes internal volume for >500km range. | HIGH |
| **Why turbojet vs turbofan?** | TEI-TJ90 selected for: (1) tiny diameter (153.5mm) fits small fuselage, (2) lower manufacturing complexity, (3) realistic IR exhaust plume mimicking cruise missile threat. Turbofan would be larger, heavier, more complex for marginal efficiency gain irrelevant at 45min endurance. | HIGH |
| **What does dual-role reveal?** | Kamikaze upgrade implies original airframe was **over-engineered** for target role. Must survive 8-15g RATO shock + high-G terminal maneuvers. Structural margins significantly exceed pure target requirements → safety factor likely 3-4× on primary structure. | MEDIUM |
| **Modular payload strategy** | Unified airframe for target/EW/kamikaze variants. Standardizes production line, drives down unit cost. TAI's "product platform" approach — same as WX's IRONMESH philosophy. | HIGH |
| **Compromises** | (1) Single-string avionics (not dual-redundant) — cost trade for expendable/semi-expendable. (2) Mach 0.63 cap — sacrifices supersonic threat emulation for affordability. (3) 25hr maintenance interval on TJ-90 — relatively short, implies disposable-ish engine philosophy. | HIGH |
| **"80% at 50% cost" philosophy** | Turkish defense industry pattern: pragmatic engineering, not over-specified. FEA-optimized but field-repair-friendly. Good enough for purpose, exportable to price-sensitive markets. | HIGH |

---

## Cross-Domain Integration Risks (for WX Redesign)

| Risk | Severity | Description |
|------|----------|-------------|
| FADEC↔FCC integration | **CRITICAL** | TEI-TJ90 FADEC requires strict CAN/RS-485 protocol. If using PX4/ArduPilot FCC, throttle command latency could cause compressor stall during RATO or evasive maneuvers. |
| Engine sourcing | **CRITICAL** | TJ-90 hot section (superalloy investment casting) not available in VN. Engine must be imported or alternative sourced. |
| Encrypted datalink | **HIGH** | Turkish Aselsan datalink not transferable. VN must develop indigenous or source ITAR-free alternative with anti-jamming. |
| Composite airframe | **MEDIUM** | WX has limited aerospace composite capability. Simpler layups feasible; autoclave-quality uncertain. |
| RATO booster | **MEDIUM** | Solid rocket booster likely Roketsan. VN has some solid propellant capability but uncertain for this thrust class. |

---

## Component Inventory Summary

| Domain | Components Catalogued | High Confidence | Low Confidence |
|--------|----------------------|----------------|----------------|
| Mechanical | 8 (airframe, wings, tail, engine bay, launcher, parachute, payload bay, fasteners) | 5 | 3 |
| Electronic | 7 (FCC, GNSS/INS, datalink, radar alt, air data, power system, servos) | 3 | 4 |
| Software | 5 (RTOS, FCC firmware, mission mgmt, safety/FTS, FADEC interface) | 1 | 4 |
| Control | 4 (attitude loop, nav loop, mission supervisor, FTS logic) | 0 | 4 |
| **Total** | **24** | **9 (38%)** | **15 (62%)** |

62% of components are LOW confidence — expected for OSINT-only analysis without physical access.

---

## Top 5 Unknowns (Need Physical Inspection/Test)

1. **Airfoil profile & wing geometry** — exact NACA family, sweep angle, twist. Need 3D scan.
2. **Structural load factors** — actual safety margins, material ply schedule. Need destructive testing.
3. **FADEC communication protocol** — exact CAN message format, throttle command structure. Need interface capture.
4. **Avionics architecture** — single-string confirmed? Processor exact model? Need teardown.
5. **Control loop parameters** — actual PID gains, filter coefficients, latency. Need HIL/flight test.
