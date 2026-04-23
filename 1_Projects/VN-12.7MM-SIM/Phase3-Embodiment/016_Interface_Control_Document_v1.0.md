# VN-12.7MM-SIM-016: INTERFACE CONTROL DOCUMENT (ICD)
## Phase 3: Embodiment Design

**Document**: VN-12.7MM-SIM-016-ICD | **Version**: 1.0 | **Date**: 2026-03-05
**Project Code**: VN-12.7MM-SIM-001
**Phase**: 3 - Embodiment Design
**Scope**: I-01 (HONG HAI) -- All inter-subsystem interfaces
**Input Documents**:
- VN-12.7MM-SIM-010-FS v2.0 (Interface definitions IF-01 to IF-22)
- VN-12.7MM-SIM-015-ARCH v2.0 (Subsystem specifications)

---

# 1. INTERFACE SUMMARY

## 1.1 Interface Count by Type

| Type | Count | Subsystems Involved |
|------|-------|-------------------|
| Mechanical | 5 | SS1 internal |
| Electrical (sensor) | 3 | SS2 → SS4 |
| Electrical (actuator) | 3 | SS4 → SS3, SS7 |
| Electrical (power) | 6 | SS9 → all |
| Signal/Data (display) | 1 | SS4 → SS5 |
| Signal/Data (audio) | 1 | SS4 → SS6 |
| Signal/Data (network) | 1 | SS4 → SS8 |
| Software (internal) | 6 | SS4 internal |
| **Total** | **26** | |

---

# 2. MECHANICAL INTERFACES

| ID | Interface | From → To | Specification | Tolerance | Drawing Ref |
|----|-----------|-----------|--------------|-----------|-------------|
| M-IF-001 | Elevation pivot | SS1 Gun replica → SS1 Elevation assy | Shaft dia 40mm, needle bearings, pins | H7/g6 fit | TBD |
| M-IF-002 | Traverse bearing | SS1 Elevation assy → SS1 Traverse assy | Slewing ring dia 300mm, 4-point contact, bolt circle | M8 x 24 bolts | TBD |
| M-IF-003 | Floor mount | SS1 Base frame → Facility floor | 4x M12 expansion anchors, 600x600mm pattern | ±5mm |  TBD |
| M-IF-004 | Gun-to-cradle | SS1 Gun replica → SS1 Elevation assy | 2x pin mount, quick-release latch | Pin dia 12mm, H7/g6 | TBD |
| M-IF-005 | Cable pass-through | SS1 Traverse assy (rotating) → SS1 Pedestal (fixed) | Slip ring, 12 circuits, 2A/circuit, 300 RPM rated | IP40, gold contacts | TBD |

### Slip Ring Circuit Allocation (M-IF-005)

| Circuit | Signal | Direction | Voltage/Current |
|---------|--------|-----------|----------------|
| 1-2 | Traverse encoder A/B | Up (rotating → fixed) | 5V TTL, <10 mA |
| 3 | Traverse encoder Z | Up | 5V TTL, <10 mA |
| 4-5 | Elevation encoder A/B | Up | 5V TTL, <10 mA |
| 6 | Elevation encoder Z | Up | 5V TTL, <10 mA |
| 7 | Trigger FSR analog | Up | 0-3.3V, <1 mA |
| 8 | Traverse brake + | Down (fixed → rotating) | 24V, <=2A |
| 9 | Traverse brake - | Down | Return |
| 10 | Elevation brake + | Down | 24V, <=1A |
| 11 | Elevation brake - | Down | Return |
| 12 | Vibration motor +/- | Down | 12V, <=0.5A |

**Spare circuits**: 0 (all 12 allocated). If more signals needed (e.g., e-stop through ring), upgrade to 16-circuit slip ring or use wireless for non-critical signals.

**Integration risk**: Slip ring electrical noise may affect encoder signal integrity. Mitigation: use shielded pairs for encoder circuits (1-6), route power circuits (8-12) on opposite side of ring.

---

# 3. ELECTRICAL INTERFACES -- SENSORS (SS2 → SS4)

| ID | Interface | Signal | Connector | Cable | Protocol | Rate |
|----|-----------|--------|-----------|-------|----------|------|
| E-IF-001 | Traverse encoder | Quadrature A/B/Z | M12 5-pin circular | Shielded 4-core, <=3m | 5V TTL, counter input | >=1000 Hz sampling |
| E-IF-002 | Elevation encoder | Quadrature A/B/Z | M12 5-pin circular | Shielded 4-core, <=3m | 5V TTL, counter input | >=1000 Hz sampling |
| E-IF-003 | Trigger sensor | Analog 0-3.3V | 2-pin JST-XH | 2-core shielded, <=1m | ADC 12-bit, 0-100N | >=1000 Hz sampling |
| E-IF-008 | Emergency stop | NC dry contact | Terminal block | 2-core, 24V | Breaks 24V brake power rail | Instant (hardware) |

### Encoder Electrical Details

```
Encoder output:     ┌──┐  ┌──┐  ┌──┐
  Channel A:    ────┘  └──┘  └──┘  └──
                   ┌──┐  ┌──┐  ┌──┐
  Channel B:    ───┘  └──┘  └──┘  └───    (90° phase shift)

  Channel Z:    ──────────┘└────────────   (1 pulse/revolution)

  Resolution:   65536 CPR → 0.005° per count
  Max speed:    60°/s → 10,922 counts/s → well within 1 MHz TTL capability
```

### Trigger Sensor Circuit

```
        3.3V
         │
        [R1 = 10kΩ]
         │
         ├──────── ADC Input (0-3.3V)
         │
       [FSR]        R_FSR: 1MΩ (no force) → 1kΩ (100N)
         │          V_out = 3.3V × R_FSR / (R1 + R_FSR)
        GND         No force: ~3.27V  |  100N: ~0.3V
```

---

# 4. ELECTRICAL INTERFACES -- ACTUATORS (SS4 → SS3, SS7)

| ID | Interface | Signal | Connector | Cable | Protocol | Rate |
|----|-----------|--------|-----------|-------|----------|------|
| E-IF-004 | Traverse brake | PWM 24V | 2-pin Molex Mini-Fit | 16 AWG, <=3m | PWM 1 kHz, 0-100% duty | 100 Hz update from SW |
| E-IF-005 | Elevation brake | PWM 24V | 2-pin Molex Mini-Fit | 16 AWG, <=3m | PWM 1 kHz, 0-100% duty | 100 Hz update from SW |
| E-IF-006 | Vibration motor | PWM 12V | 2-pin JST-XH | 18 AWG, <=2m | PWM 200 Hz, 0-100% | On fire event |
| E-IF-007 | Status LEDs | Digital 5V | 10-pin IDC | Ribbon cable | 8 channels, 20 mA each | On state change |

### Brake Drive Circuit (per axis)

```
    I/O Board                    Brake Coil
    PWM Output ──── [MOSFET     ┌─────────┐
    (3.3V logic)    IRLZ44N]────┤  24VDC  │
                        │       │  Mag    │
                       GND      │  Brake  │
                                └────┬────┘
    24V PSU ─────────────────────────┘
                    [Flyback diode 1N4007 across coil]

    E-stop (NC) in series with 24V supply:
    24V PSU ──[E-STOP NC]──→ 24V bus to brakes
    When E-stop pressed: 24V cut → brakes de-energize → free rotation → SAFE
```

---

# 5. ELECTRICAL INTERFACES -- POWER (SS9 → ALL)

| ID | Interface | From → To | Specification | Protection |
|----|-----------|-----------|--------------|------------|
| P-IF-001 | AC mains | Facility → Main PSU | 220VAC ±10%, 50 Hz, <=10A | MCB 16A, RCD 30mA |
| P-IF-002 | PC power | Main PSU → PC | ATX 750W, 12V/5V/3.3V | Fused, grounded |
| P-IF-003 | Monitor power | AC distribution → 3x monitors | 220VAC, 45W each | Power strip with surge |
| P-IF-004 | Amplifier power | AC distribution → AVR/Amp | 220VAC, 300W | Fused |
| P-IF-005 | 24V DC | 24V PSU → brakes + E-stop | 24VDC, 5A (120W) | Over-current, over-temp |
| P-IF-006 | 12V DC | 24V PSU via regulator → vibration + LEDs | 12VDC, 1A | Fuse 2A |

### Power Distribution Diagram

```
Facility 220VAC 50Hz
        │
    [MCB 16A + RCD 30mA]
        │
    ┌───┴───┐
    │ POWER │
    │ STRIP │
    │(surge)│
    └┬──┬──┬┘
     │  │  │
     │  │  └── 3x Monitor AC (135W total)
     │  └───── Amplifier AC (300W)
     │
     ├── PC PSU 750W → PC components
     │
     └── 24V PSU 120W ──[E-STOP NC]── 24V bus
                                        │
                         ┌──────────────┼──────────────┐
                         │              │              │
                    Trav Brake     Elev Brake    12V regulator
                    (24V, <=2A)   (24V, <=1A)        │
                                                ┌────┴────┐
                                           Vib Motor  LEDs
                                           (12V,0.5A) (5V via I/O)
```

---

# 6. SIGNAL/DATA INTERFACES

| ID | Interface | From → To | Medium | Protocol | Bandwidth |
|----|-----------|-----------|--------|----------|-----------|
| E-IF-009 | I/O board link | SS2/SS3 I/O board → SS4 PC | USB 2.0 Type-B | USB HID, 1000 Hz poll | 12 Mbps |
| E-IF-010 | Video output | SS4 GPU → SS5 Monitors | 3x DisplayPort 1.4 | NVIDIA Surround, 2560x1440@144Hz | 3x 14.93 Gbps |
| S-IF-004 | Audio output | SS4 Sound card → SS6 Amp | 5.1 analog (3x 3.5mm) or SPDIF | WASAPI 48 kHz 16-bit | -- |
| S-IF-005 | Instructor link | SS4 PC → SS8 Instructor PC | Ethernet Cat6 | TCP/IP, 10 Hz data push | 1 Gbps (LAN) |

---

# 7. SOFTWARE INTERFACES (SS4 INTERNAL)

| ID | Interface | From → To | Data | Rate | Latency Contrib. |
|----|-----------|-----------|------|------|-----------------|
| SW-IF-001 | Input polling | HW Interface Layer → Simulation Layer | Az (float), El (float), Trigger (float), Buttons (uint8) | 1000 Hz | <=1 ms |
| SW-IF-002 | Brake command | Simulation Layer → HW Interface Layer | Trav_duty (0-100%), Elev_duty (0-100%) | 100 Hz | <=1 ms |
| SW-IF-003 | Ballistics output | Ballistics Engine → Effects Manager | Projectile state vector [x,y,z, vx,vy,vz] per round | Per round (600 rpm = 10/s per burst) | <=2 ms compute |
| SW-IF-004 | Scoring input | Ballistics Engine → Scoring Engine | Hit/miss flag, impact coords, lead error, engagement geometry | Per round | <1 ms |
| SW-IF-005 | Scene update | Scene Renderer → Display Driver | Rendered frame (3x QHD) | >=60 fps | <=16 ms render |
| SW-IF-006 | BIST results | System Manager → All modules | Status struct {sensor_ok, brake_ok, display_ok, audio_ok} | On startup + periodic 1/min | <100 ms |

---

# 8. INTERFACE RESPONSIBILITY MATRIX

| Interface | Design Owner | Integration Owner | Test Owner |
|-----------|-------------|-------------------|-----------|
| M-IF-001..005 | Mechanical Eng | Systems Eng | Mechanical Eng |
| E-IF-001..003 | Electronics Eng | Systems Eng | Electronics Eng |
| E-IF-004..008 | Electronics Eng | Systems Eng | Electronics Eng |
| E-IF-009..010 | Systems Eng | Systems Eng | SW Eng |
| P-IF-001..006 | Electronics Eng | Systems Eng | Electronics Eng |
| S-IF-004..005 | SW Eng | Systems Eng | SW Eng |
| SW-IF-001..006 | SW Eng | SW Eng | SW Eng |

**Note**: Workshop X is a solo engineer operation. All roles above are performed by CEO/Engineer. The matrix documents accountability for future team scaling.

---

# 9. INTEGRATION DEBT TRACKER

| ID | Interface | TBD Item | Priority | Target Resolution |
|----|-----------|----------|----------|-------------------|
| TBD-001 | M-IF-005 | Slip ring model selection: 12 vs 16 circuits | HIGH | Before mechanical fab start |
| TBD-002 | E-IF-001/002 | Encoder model finalized (Omron vs Autonics) | MEDIUM | After brake test (sample availability) |
| TBD-003 | E-IF-009 | I/O board: Arduino Due vs STM32 Nucleo vs custom | MEDIUM | After firmware prototype |
| TBD-004 | E-IF-010 | GPU model: RTX 3060 vs 4060 (price/perf at purchase time) | LOW | Month 4 (procurement) |
| TBD-005 | SW-IF-003 | Ballistics-to-rendering data format (shared memory vs message queue) | MEDIUM | Month 3 (SW architecture) |
| TBD-006 | M-IF-001 | Elevation axis counterbalance: spring vs counterweight | HIGH | Phase 3 detailed mech design |
| TBD-007 | P-IF-005 | 24V PSU: integrated in pedestal vs external bench supply | LOW | After brake test determines actual current draw |

**Total integration debt: 7 TBDs.** Target: resolve all HIGH by end of Month 4, MEDIUM by Month 6.

---

# 10. LATENCY BUDGET (UPDATED)

End-to-end latency from operator input to visible display response:

```
┌────────┐  ┌────────┐  ┌──────────┐  ┌────────┐  ┌──────────┐  ┌─────────┐
│Sensor  │  │Slip    │  │I/O Board │  │USB     │  │Simulation│  │GPU +    │
│(encode)│→ │Ring    │→ │(sample)  │→ │Transfer│→ │(compute) │→ │Display  │
│        │  │        │  │          │  │        │  │          │  │(render) │
│<=0.5ms │  │~0ms    │  │<=1ms     │  │<=1ms   │  │<=10ms    │  │<=16ms   │
└────────┘  └────────┘  └──────────┘  └────────┘  └──────────┘  └─────────┘
                                                                  + Display
                                                                  scan <=7ms
                                                                  (144 Hz)
Total: 0.5 + 0 + 1 + 1 + 10 + 16 + 7 = 35.5 ms

Budget: <=50 ms (S-004)
Margin: 14.5 ms (29%)  ← PASS
```

---

# 11. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-05 | KN (Phase 3 Embodiment) | Initial release. 26 interfaces documented. 7 TBDs tracked. |

---

**NEXT**: Document 017 -- Preliminary BOM

---

*VN-12.7MM-SIM-016 Interface Control Document v1.0*
*Phase 3: Embodiment Design -- I-01 (HONG HAI) Base Variant*
