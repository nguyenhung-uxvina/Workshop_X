# WP5: SYSTEM INTEGRATION DEEP DIVE
## V-SMASH-LITE Assembly Procedures, Integration Testing & Calibration

**Document**: VS-INT-001 | **Version**: 1.0 | **Date**: 2026-01-19
**Phase**: Detail Design (Pahl & Beitz Phase 4)

---

# 1. INTEGRATION OVERVIEW

## 1.1 Assembly Hierarchy

```
LEVEL 0: V-SMASH-LITE UNIT (VS-ASSY-000)
        │
LEVEL 1: MAJOR ASSEMBLIES
        ├── MECHANICAL (VS-ASSY-100)
        │   ├── Main Housing (VS-ASSY-110)
        │   ├── Front Cover (VS-ASSY-120)
        │   ├── Rear Cover (VS-ASSY-130)
        │   └── Battery Compartment (VS-ASSY-140)
        │
        ├── OPTICAL (VS-ASSY-200)
        │   ├── Optical Tube (VS-ASSY-210)
        │   ├── Lens Assembly (VS-ASSY-220)
        │   ├── Beam Combiner (VS-ASSY-230)
        │   └── Reticle Glass (VS-ASSY-240)
        │
        ├── ELECTRONICS (VS-ASSY-300)
        │   ├── Carrier PCB (VS-ASSY-310)
        │   ├── Power Module (VS-ASSY-320)
        │   ├── Sensor Board (VS-ASSY-330)
        │   └── Display Board (VS-ASSY-340)
        │
        └── WEAPON INTERFACE (VS-ASSY-400)
            ├── Picatinny Mount (VS-ASSY-410)
            └── Trigger Gate (VS-ASSY-420)
```

## 1.2 Integration Flow Summary

| Phase | Activities | Duration | Gate |
|-------|-----------|----------|------|
| **Phase 1** | Subassembly Integration | 5.5 hrs | Gate 1: Subassembly Tests |
| **Phase 2** | System Integration | 2.0 hrs | Gate 2: Mechanical Integration |
| **Phase 3** | Functional Integration | 2.0 hrs | Gate 3: Functional Test |
| **Phase 4** | Calibration | 3.0 hrs | Gate 4: Calibration Acceptance |
| **Total** | | **12.5 hrs** | (Prototype) |
| **Target** | | **4.0 hrs** | (Production) |

---

# 2. REQUIRED TOOLS & EQUIPMENT

## 2.1 Assembly Tools

| Tool | Specification | Purpose |
|------|---------------|---------|
| Phillips #0, #1 | Precision | M2, M2.5/M3 screws |
| Hex 1.5mm, 2.0mm, 2.5mm | Ball-end | Socket head screws |
| Torx T6, T10 | Standard | Camera/mount screws |
| Needle nose pliers | 150mm | Wire handling |
| Flush cutters | Precision | Cable ties |
| Tweezers | ESD-safe | Small parts |
| Torque screwdriver | 0.1-1.0 Nm | Critical fasteners |
| Thread locker | Loctite 222 | Vibration resistance |
| Thermal paste | Arctic MX-4 | Jetson heatsink |
| Calipers | 0.01mm resolution | Dimensional check |
| Multimeter | Fluke 117 equiv. | Electrical test |

## 2.2 Test Equipment

| Equipment | Purpose |
|-----------|---------|
| Bench Power Supply (0-30V, 3A) | Power testing |
| Oscilloscope (100MHz) | Signal verification |
| Logic Analyzer (8-ch USB) | I2C/SPI debugging |
| Optical Collimator (10m FL) | Boresight alignment |
| Resolution Chart (USAF 1951) | MTF verification |
| Go/No-Go Gauges | Picatinny verification |

---

# 3. ASSEMBLY PROCEDURES

## 3.1 Phase 1: Subassembly Integration

### INT-1.1: Mechanical Subassembly (2.0 hours)

**Step 1: Prepare Main Housing**
1. Inspect housing for surface finish, threads, anodizing
2. Clean interior with IPA
3. Install O-ring with silicone grease

**Step 2: Install Internal Frame**
1. Align with locating pins
2. Install (4) M2.5×8 SHCS in cross pattern
3. Torque: 0.4 Nm ± 0.05 Nm

**Step 3: Install Heatsink**
1. Apply X-pattern thermal paste (8×8mm)
2. Lower straight down, no sliding
3. Install (4) M2×6 SHCS, Torque: 0.2 Nm

**Step 4: Install Battery Compartment**
1. Route battery connector through slot
2. Install (2) M3×10 SHCS, Torque: 0.6 Nm
3. Verify door operates smoothly

### INT-1.2: Optical Subassembly (1.5 hours)

**Step 1: Clean Optical Components**
- Wear lint-free gloves
- Blow with filtered air first
- Wipe in single direction only

**Step 2: Assemble Optical Train**
1. Objective lens (convex forward) + retaining ring
2. Beam combiner at 45° (reflective side toward reticle)
3. Reticle glass (etched side toward combiner)
4. Connect LED illuminator
5. Eyepiece lens + rubber eyecup

**Step 3: Verification**
- Reticle visible and in focus
- LED illuminates evenly at 3.3V

### INT-1.3: Electronics Subassembly (1.5 hours)

**Step 1: Pre-Test Carrier PCB (BEFORE Jetson)**
1. Connect 7.4V (limit 0.5A)
2. Verify: 5V = 5.0V ±0.1V, 3.3V = 3.3V ±0.1V
3. Current < 100mA

**Step 2: Install Jetson Nano**
1. Verify SD card flashed
2. Insert at 30° angle, press until clips engage
3. Verify both clips latched, no gap

**Step 3: Connect Peripherals**
- Camera FPC (contacts down)
- IMU I2C cable (red = VCC)
- Display FPC (route through channel)

**Step 4: Power-On Verification**
- Boot LED blinks
- Current: 1.5-2.5A during boot
- Serial terminal shows Linux boot

### INT-1.4: Weapon Interface (0.5 hours)

1. Install Picatinny mount, verify with GO/NO-GO gauge
2. Install solenoid, test actuation at 12V (<20ms)
3. Mount FSR trigger sensor

---

## 3.2 Phase 2: System Integration

### INT-2.1 to INT-2.4 (2.0 hours total)

**Step 1: Install Electronics in Housing**
- Camera connector facing front
- Thermal pad contacts heatsink
- Install (4) M2.5×6 screws, Torque: 0.3 Nm

**Step 2: Install Optical Assembly**
- Align with mounting bore
- Leave retaining ring loose for boresight

**Step 3: Cable Harness**
- Connect all cables per routing diagram
- Secure with cable ties
- Continuity check all connections

**Step 4: Close Housing**
- Install OLED display in front cover window
- Install gaskets with silicone grease
- Front cover: (6) M2.5×8, Torque: 0.4 Nm
- Rear cover: (4) M2.5×8, Torque: 0.4 Nm
- Install port covers

---

## 3.3 Phase 3: Functional Integration

### INT-3.1: Power Bringup
| Rail | Min | Typ | Max | Measured |
|------|-----|-----|-----|----------|
| VBAT | 6.0V | 7.4V | 8.4V | ________ |
| 5V | 4.9V | 5.0V | 5.1V | ________ |
| 3.3V | 3.2V | 3.3V | 3.4V | ________ |
| 12V_BOOST | 11.4V | 12.0V | 12.6V | ________ |

Boot time: _______ seconds (target: <30s)

### INT-3.2: Camera Bringup
```bash
$ ls /dev/video*           # Expected: /dev/video0
$ gst-launch-1.0 nvarguscamerasrc ! \
    'video/x-raw(memory:NVMM),width=1920,height=1080,framerate=60/1' ! \
    nvoverlaysink
```
| Metric | Spec | Measured | Pass |
|--------|------|----------|------|
| Resolution | 1920×1080 | ________ | ☐ |
| Frame rate | 60 fps | ________ | ☐ |
| Latency | <50ms | ________ | ☐ |

### INT-3.3: IMU Bringup
```bash
$ i2cdetect -y -r 1        # Expected: Device at 0x68
$ i2cget -y 1 0x68 0x00    # Expected: 0xD1 (BMI160)
```

### INT-3.4: Display & UI Bringup
- Test all pixels, no dead pixels
- LEDs: Red, Green, Blue all functional
- Buttons respond to press

---

# 4. CALIBRATION PROCEDURES

## 4.1 CAL-1: Camera Calibration (0.5 hours)

**Equipment**: Checkerboard 9×6, 25mm squares

**Procedure**:
1. Capture 20 images at various positions/orientations
2. Run: `python3 /opt/vsmash/calibration/calibrate_camera.py`
3. Verify RMS reprojection error < 0.5 pixels

**Results**:
| Parameter | Value |
|-----------|-------|
| fx | ________ px |
| fy | ________ px |
| cx | ________ px |
| cy | ________ px |
| RMS Error | ________ px |

## 4.2 CAL-2: IMU Calibration (0.5 hours)

**Accelerometer** (6-position method):
- Place in 6 orientations, hold 10s each
- Run: `python3 /opt/vsmash/calibration/calibrate_imu.py --accel`

**Gyroscope** (stationary method):
- Place on stable surface, 60 seconds
- Run: `python3 /opt/vsmash/calibration/calibrate_imu.py --gyro`

**Results**:
| Parameter | Value | Target |
|-----------|-------|--------|
| Accel Bias X | ________ m/s² | < 0.1 |
| Accel Bias Y | ________ m/s² | < 0.1 |
| Accel Bias Z | ________ m/s² | < 0.1 |
| Gyro Bias X | ________ °/s | < 0.5 |
| Gyro Bias Y | ________ °/s | < 0.5 |
| Gyro Bias Z | ________ °/s | < 0.5 |
| Drift Rate | ________ °/min | < 0.1 |

## 4.3 CAL-3: Boresight Alignment (1.0 hour)

**Equipment**: Collimator, bore laser, target grid

**Procedure**:
1. Mount V-SMASH on weapon/fixture
2. Insert bore laser, note 0,0 position
3. Remove laser, look through eyepiece
4. Measure reticle offset from 0,0
5. Adjust optical tube if needed
6. Lock adjustments with thread locker

**Acceptance**: Boresight error < 1 MOA

**Results**:
| Parameter | Initial | Final | Target |
|-----------|---------|-------|--------|
| Horizontal | ________ MOA | ________ MOA | < 1 |
| Vertical | ________ MOA | ________ MOA | < 1 |

## 4.4 CAL-4: Ballistic Verification (1.0 hour)

**Live Fire Test** (Range Required):
| Range | Predicted | Actual | Error |
|-------|-----------|--------|-------|
| 50m | ________ MOA | ________ MOA | ________ |
| 100m | 0 (zero) | ________ MOA | ________ |
| 150m | ________ MOA | ________ MOA | ________ |

**Acceptance**: POI error < 1 MOA at all ranges

---

# 5. INTEGRATION TESTS

## 5.1 Test Matrix

| Test ID | Name | Duration | Pass Criteria |
|---------|------|----------|---------------|
| IT-001 | Power Subsystem | 30 min | All rails within spec |
| IT-002 | Camera Subsystem | 30 min | 60fps, <50ms latency |
| IT-003 | IMU Subsystem | 20 min | 200Hz, <0.01g noise |
| IT-004 | Display Subsystem | 15 min | All pixels, LEDs work |
| IT-005 | Mechanical Fit | 30 min | No gaps, weight <600g |
| IT-006 | Cable Integrity | 15 min | All continuity pass |
| IT-007 | Thermal Interface | 20 min | <70°C under load |
| IT-008 | Boot Sequence | 15 min | <30s to ready |
| IT-009 | AI Inference | 30 min | <30ms, >95% detect |
| IT-010 | Tracking System | 30 min | <10px RMS error |
| IT-011 | Fire Control | 45 min | All interlocks work |
| IT-012 | Full System | 60 min | All functions pass |

## 5.2 IT-009: AI Inference Test

```bash
$ /opt/vsmash/bin/vsmash_test --ai-inference
```

| Metric | Specification | Measured | Pass |
|--------|---------------|----------|------|
| Mean latency | <30ms | ________ ms | ☐ |
| Max latency | <50ms | ________ ms | ☐ |
| Throughput | >30 fps | ________ fps | ☐ |
| Drone detection | >95% | ________ % | ☐ |
| False positive | <1/min | ________ /min | ☐ |

## 5.3 IT-011: Fire Control Test

**State Machine Verification**:
| Condition | Expected | Actual | Pass |
|-----------|----------|--------|------|
| Boot complete | SAFE | ________ | ☐ |
| Trigger, no target | SEEKING | ________ | ☐ |
| Target detected | TRACKING | ________ | ☐ |
| Fire solution | ARMED | ________ | ☐ |
| Alignment OK | AUTHORIZE | ________ | ☐ |

**Safety Interlocks**:
| Condition | Trigger Blocked? | Pass |
|-----------|------------------|------|
| No target | ☐ Yes ☐ No | ☐ |
| Target lost | ☐ Yes ☐ No | ☐ |
| Poor alignment | ☐ Yes ☐ No | ☐ |
| System error | ☐ Yes ☐ No | ☐ |

**Timing**:
| Metric | Spec | Measured | Pass |
|--------|------|----------|------|
| Solenoid engage | <20ms | ________ | ☐ |
| Solenoid release | <10ms | ________ | ☐ |
| Fire control loop | <1ms | ________ | ☐ |

---

# 6. TROUBLESHOOTING

| Symptom | Possible Cause | Solution |
|---------|----------------|----------|
| No power LED | Battery disconnected | Check connector |
| No power LED | Blown fuse | Replace F1 (5A) |
| System reboots | Low battery | Charge battery |
| No camera | FPC not seated | Reseat cable |
| Image blurry | Focus incorrect | Adjust lens |
| IMU not detected | I2C cable | Check continuity |
| Inference slow | Thermal throttling | Check heatsink |
| Solenoid stuck | Coil burned | Replace solenoid |

**Diagnostic Command**:
```bash
$ vsmash-diag --full
```

---

# 7. TORQUE SPECIFICATIONS

| Fastener | Application | Torque (Nm) | Thread Lock |
|----------|-------------|-------------|-------------|
| M2×4 | Camera mount | 0.15 ± 0.02 | None |
| M2×6 | Heatsink | 0.20 ± 0.02 | None |
| M2.5×6 | Electronics | 0.30 ± 0.03 | None |
| M2.5×8 | Covers | 0.40 ± 0.05 | None |
| M3×10 | Battery | 0.60 ± 0.05 | Loctite 222 |
| M3×12 | Picatinny | 1.50 ± 0.10 | Loctite 222 |

---

# 8. DELIVERABLES & SCHEDULE

## 8.1 Deliverables

| ID | Deliverable | Status |
|----|-------------|--------|
| D5.1 | Assembly Procedures | ✅ Complete |
| D5.2 | Integration Tests | ✅ Complete |
| D5.3 | Calibration Procedures | ✅ Complete |
| D5.4 | Troubleshooting Guide | ✅ Complete |
| D5.5 | Build Traveler | ✅ Complete |
| D5.6 | First Article Build | 🔲 Pending |

## 8.2 WP5 Cost Summary

| Category | Cost |
|----------|------|
| Basic hand tools | $150 |
| Torque tools | $100 |
| Optical tools | $500 |
| ESD equipment | $100 |
| Test equipment | $350 |
| Fixtures | $300 |
| Consumables | $90 |
| **TOTAL** | **$1,590** |

---

# 9. QUICK REFERENCE CHECKLIST

```
☐ PRE-ASSEMBLY
  ☐ Components received ☐ Workstation ready ☐ Serial assigned

☐ PHASE 1: SUBASSEMBLIES (5.5 hrs)
  ☐ Mechanical ☐ Optical ☐ Electronics ☐ Weapon Interface
  ☐ GATE 1: Subassembly Tests PASS

☐ PHASE 2: SYSTEM INTEGRATION (2.0 hrs)
  ☐ Electronics installed ☐ Optics installed ☐ Cables connected
  ☐ GATE 2: Mechanical Integration PASS

☐ PHASE 3: FUNCTIONAL (2.0 hrs)
  ☐ Power OK ☐ Camera OK ☐ IMU OK ☐ Display OK
  ☐ GATE 3: Functional Test PASS

☐ PHASE 4: CALIBRATION (3.0 hrs)
  ☐ Camera (<0.5px) ☐ IMU (<0.1°/min) ☐ Boresight (<1 MOA)
  ☐ GATE 4: Calibration PASS

☐ FINAL ACCEPTANCE
  ☐ All tests passed ☐ Documentation complete ☐ Unit packaged
```

---

**Document Control**: v1.0 | 2026-01-19 | Initial Release

*WP5 System Integration Deep Dive - V-SMASH-LITE*
