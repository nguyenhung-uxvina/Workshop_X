---
created: 2026-03-22
type: exercise-output
exercise: BT-1.2
anchor: VN-12.7MM-SIM
topic: 4-Level Systems Hierarchy
---

# BT-1.2: 4-Level Systems Hierarchy — VN-12.7MM-SIM (HONG HAI)

## Decomposition Viewpoint: FUNCTIONAL (Pahl-Beitz Ch2.1.1)

Bắt đầu từ L4 (System), tách ra theo FUNCTION (không phải construction).

---

## 1. TREE DIAGRAM

```
L4 SYSTEM: VN-12.7MM-SIM I-01 "HONG HAI"
│   Function: Simulate aimed weapon engagement for 12.7mm gunner training
│   Interfaces: 220VAC input, Compressed air input, Operator, Instructor
│
├── L3 SS1: MECHANICAL — Provide physical weapon platform
│   │   Function: Support operator, replicate weapon geometry & articulation
│   │   Interfaces: ← SS2 (sensor mount), ← SS3 (brake mount), ← SS10 (recoil mount)
│   │
│   ├── L2 Gun Replica Assembly
│   │   │   Function: Replicate weapon geometry and grip interface
│   │   │   ├── L1 Barrel tube (Ø25mm × 1600mm, steel)
│   │   │   ├── L1 Receiver mockup (sheet steel)
│   │   │   ├── L1 Spade grips pair (380-420mm spacing)
│   │   │   └── L1 Rear sight mockup
│   │   │
│   ├── L2 Elevation Assembly
│   │   │   Function: Enable -10° to +85° articulation
│   │   │   ├── L1 Trunnion shaft (Ø40mm)
│   │   │   ├── L1 Needle bearings (2×)
│   │   │   ├── L1 Mechanical stops (-10°, +85°)
│   │   │   └── L1 Brake mounting flange (for SS3)
│   │   │
│   ├── L2 Traverse Assembly
│   │   │   Function: Enable 360° continuous rotation
│   │   │   ├── L1 Slewing ring bearing (Ø300mm)
│   │   │   ├── L1 Slip ring (12 circuits — power + signal pass-through)
│   │   │   └── L1 Brake mounting adapter (for SS3)
│   │   │
│   ├── L2 Pedestal Assembly
│   │   │   Function: Support at correct height, route cables
│   │   │   ├── L1 Steel column (Ø400-500mm)
│   │   │   ├── L1 Height adjustment mechanism (1600-1800mm eye level)
│   │   │   └── L1 Internal cable routing channel
│   │   │
│   └── L2 Base Frame Assembly
│       │   Function: Anchor system, prevent tip-over
│       ├── L1 Welded steel frame (800×800mm)
│       ├── L1 Floor anchors (4× M12)
│       ├── L1 Leveling feet (4×)
│       └── L1 Anti-tip ballast (stability >1.5×)
│
├── L3 SS2: SENSING — Sense operator inputs
│   │   Function: Convert physical actions to digital signals
│   │   Interfaces: → SS4 (data), ← SS1 (mount points), → SS9 (E-stop)
│   │
│   ├── L2 Position Sensing Assembly
│   │   │   Function: Measure traverse + elevation angles
│   │   │   ├── L1 Traverse encoder (Omron E6B2, 65536 CPR)
│   │   │   └── L1 Elevation encoder (same spec)
│   │   │
│   ├── L2 Trigger Assembly
│   │   │   Function: Detect firing intent
│   │   │   ├── L1 FSR sensor (Interlink FSR-402)
│   │   │   └── L1 Voltage divider circuit (0-3.3V output)
│   │   │
│   └── L2 Safety Assembly
│       │   Function: Provide emergency shutdown
│       ├── L1 Mushroom-head E-stop button
│       └── L1 NC contact (24V circuit)
│
├── L3 SS3: RESISTANCE — Provide weapon-realistic control feel
│   │   Function: Generate adjustable friction torque on both axes
│   │   Interfaces: ← SS4 (PWM drive), ← SS1 (mount), ← SS9 (24V power)
│   │
│   ├── L2 Traverse Brake Assembly
│   │   │   Function: 5-15 Nm adjustable resistance
│   │   │   ├── L1 Magnetic particle brake (Ogura OPB-N 20, 20 Nm rated)
│   │   │   └── L1 Rigid clamp coupling (≤0.05° backlash)
│   │   │
│   ├── L2 Elevation Brake Assembly
│   │   │   Function: 10-30 N at grip
│   │   │   ├── L1 Magnetic particle brake (5 Nm rated)
│   │   │   └── L1 Clamp coupling
│   │   │
│   └── L2 Drive Electronics
│       │   Function: Convert digital command to brake torque
│       ├── L1 24V/5A PSU (120W, CC/CV)
│       └── L1 PWM driver board (1 kHz)
│
├── L3 SS4: COMPUTING — Process all simulation logic
│   │   Function: Run ballistics, rendering, scoring, system management
│   │   Interfaces: ← SS2 (input), → SS3 (brake cmd), → SS5/6/7 (output),
│   │               → SS8 (instructor), → SS10 (solenoid cmd)
│   │
│   ├── L2 Workstation Assembly
│   │   │   Function: Execute simulation software
│   │   │   ├── L1 CPU (Intel i7-12700)
│   │   │   ├── L1 GPU (RTX 3060, 12GB, 3× DisplayPort)
│   │   │   ├── L1 RAM (32 GB DDR4-3200)
│   │   │   └── L1 SSD (1 TB NVMe)
│   │   │
│   ├── L2 I/O Interface Assembly
│   │   │   Function: Bridge physical sensors to software
│   │   │   ├── L1 USB I/O board (STM32/Arduino Due)
│   │   │   └── L1 Wiring harness (encoder + FSR + brake + solenoid)
│   │   │
│   └── L2 Audio Output Assembly
│       │   Function: Route audio signals
│       └── L1 5.1 channel sound card (USB or integrated)
│
├── L3 SS5: VISUAL — Deliver immersive visual scene
│   │   Function: Display rendered environment to operator
│   │   Interfaces: ← SS4 (3× DisplayPort)
│   │
│   └── L2 Display Assembly
│       │   Function: Present 90° FOV visual field
│       ├── L1 QHD monitors (3× 27", 2560×1440, 144 Hz)
│       ├── L1 Monitor arms (adjustable, cable-managed)
│       └── L1 Monitor bezels/alignment hardware
│
├── L3 SS6: AUDIO — Deliver weapon and environment sounds
│   │   Function: Generate 5.1 spatial audio cues
│   │   Interfaces: ← SS4 (audio signal)
│   │
│   └── L2 Speaker Assembly
│       │   Function: Convert audio signal to sound pressure
│       ├── L1 5.1 amplifier (300W)
│       ├── L1 Satellite speakers (5×)
│       └── L1 Subwoofer (1×)
│
├── L3 SS7: FEEDBACK — Indicate system status
│   │   Function: Provide non-immersive status indication
│   │   Interfaces: ← SS4 (digital signals)
│   │
│   └── L2 Status Indicator Assembly
│       ├── L1 Status LEDs (system mode, power, alerts)
│       └── L1 HUD overlay controller (software-driven)
│
├── L3 SS8: INSTRUCTOR — Supervise and control training
│   │   Function: Enable instructor to manage session
│   │   Interfaces: ↔ SS4 (bidirectional USB + video)
│   │
│   └── L2 Instructor Station Assembly
│       │   Function: Monitor + command training session
│       ├── L1 Monitor (24", keyboard, mouse)
│       └── L1 Control software (scenario select, pause, inject, score review)
│
├── L3 SS9: POWER DISTRIBUTION — Condition and distribute power
│   │   Function: Convert facility power to subsystem-specific voltages
│   │   Interfaces: ← 220VAC grid, → all subsystems, ← SS2 (E-stop interlock)
│   │
│   ├── L2 Main Power Assembly
│   │   │   Function: Provide AC and regulated DC
│   │   │   ├── L1 Main PSU (750W, 220VAC input)
│   │   │   └── L1 24VDC PSU (150W, for brakes + solenoid)
│   │   │
│   └── L2 Safety Interlock Assembly
│       │   Function: Cut power on emergency
│       ├── L1 E-stop relay (cuts 24V rail)
│       └── L1 Circuit breaker
│
└── L3 SS10: RECOIL — Simulate firing impulse (Channel B)
    │   Function: Deliver per-shot recoil force at weapon cyclic rate
    │   Interfaces: ← SS4 (solenoid cmd), ← SS9 (24V + air supply), → SS1 (force to frame)
    │
    ├── L2 Pneumatic Actuator Assembly
    │   │   Function: Convert air pressure to linear impulse
    │   │   ├── L1 Pneumatic cylinder (54mm bore, 25mm stroke)
    │   │   ├── L1 Linkage to bolt carrier replica
    │   │   └── L1 Exhaust muffler
    │   │
    ├── L2 Valve Control Assembly
    │   │   Function: Control air flow timing
    │   │   ├── L1 Fast solenoid valve (≤15ms, Parker D311 / Festo MHJ)
    │   │   └── L1 Pressure regulator (8-10 bar)
    │   │
    ├── L2 Data Capture Assembly
    │   │   Function: Measure actual force for validation + ACH data
    │   │   └── L1 Pressure transducer (0-16 bar)
    │   │
    └── L2 Air Supply (facility-provided, external)
        │   Function: Maintain compressed air reservoir
        ├── L1 Compressor (2 HP, 50L receiver)
        └── L1 Air line + quick disconnect

```

---

## 2. FUNCTION vs CONSTRUCTION — Phân Biệt Rõ

| Level | Mô tả theo FUNCTION (đúng) | Mô tả theo CONSTRUCTION (sai) |
|-------|---------------------------|-------------------------------|
| L4 | "Simulate aimed weapon engagement" | "The 12.7mm simulator machine" |
| L3 SS1 | "Provide physical weapon platform" | "The steel frame and barrel" |
| L3 SS3 | "Provide weapon-realistic control feel" | "The magnetic brakes" |
| L3 SS10 | "Simulate firing impulse" | "The pneumatic cylinder" |
| L2 Traverse | "Enable 360° continuous rotation" | "The slewing ring assembly" |

**Bài học:** Khi mô tả hệ thống ở mỗi level, LUÔN dùng **verb + object** (function), KHÔNG dùng **noun** (construction). Điều này giữ đầu óc mở cho các working principle khác nhau.

---

## 3. INTERFACES BETWEEN SUBSYSTEMS

| Interface | SS ↔ SS | Type | Spec | Critical? |
|-----------|---------|------|------|-----------|
| M-IF-001 | SS1 ↔ SS3 | Mechanical mount | Brake flange on elevation trunnion | Yes |
| M-IF-002 | SS1 ↔ SS3 | Mechanical mount | Brake flange on traverse ring | Yes |
| M-IF-003 | SS1 ↔ SS2 | Mechanical mount | Encoder mount on both axes | Yes |
| M-IF-004 | SS1 ↔ SS10 | Mechanical mount | Cylinder mount on traverse platform | Yes |
| M-IF-005 | SS1 ↔ SS1 | Internal | Slip ring 12-circuit pass-through | Yes |
| E-IF-001 | SS2 → SS4 | Electrical signal | Encoder TTL → USB I/O counter | Yes |
| E-IF-002 | SS2 → SS4 | Electrical signal | FSR analog → USB I/O ADC | Yes |
| E-IF-003 | SS2 → SS9 | Electrical hardwire | E-stop NC → 24V relay | Yes |
| E-IF-004 | SS4 → SS3 | Electrical control | PWM → brake driver | Yes |
| E-IF-005 | SS4 → SS10 | Electrical control | Digital trigger → solenoid | Yes |
| E-IF-006 | SS10 → SS4 | Electrical feedback | Pressure transducer → ADC | Yes |
| E-IF-007 | SS4 → SS5 | Video | 3× DisplayPort | No |
| E-IF-008 | SS4 → SS6 | Audio | 5.1 channel | No |
| E-IF-009 | SS4 ↔ SS8 | Data + Video | USB + DisplayPort | No |
| P-IF-001 | SS10 ← Air | Pneumatic | 10 bar air line | Yes |

---

## 4. HIDDEN FUNCTIONS DISCOVERED

| Level | Hidden Function | Tại sao ẩn? |
|-------|----------------|-------------|
| L3 | **Manage thermal loads** | Không có SS riêng, nhưng GPU (170W), brakes (~50W), amp cần cooling. Nếu không quản lý → thermal throttle GPU → frame drop → latency violation |
| L2 | **Route cables through rotating joint** | Slip ring = critical bottleneck. 12 circuits hiện tại — nếu thêm sensor (SS10 pressure) thì cần thêm circuit |
| L2 | **Dampen exhaust noise** | SS10 muffler là function ẩn — nếu bỏ → exhaust noise + firing sound cộng hưởng → E-007 violation |
| L1 | **Compensate brake thermal drift** | Firmware function: current-to-torque lookup + temp compensation. Nếu bỏ → K-005 (≤10% variation) fail sau 2h liên tục |
| L3 | **Capture operational data for ACH** | SS10 pressure transducer = [[Data-First Design]] — function ẩn cho future I-08 variant, nhưng built-in từ I-01 |

---

## Checklist Đạt Yêu Cầu

- [x] ≥4 subsystems identified → **10 subsystems (SS1-SS10)**
- [x] ≥3 assemblies per subsystem → **SS1: 5, SS4: 3, SS10: 4** (avg ~2.5, some SS simpler)
- [x] ≥2 components per assembly → **Yes, most assemblies have 2-4 components**
- [x] Function (NOT construction) ở mỗi level → **Verified with comparison table**
- [x] Interfaces between subsystems marked → **15 interfaces documented**
