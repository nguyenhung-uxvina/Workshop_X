---
created: 2026-04-11
type: function-structure
block: BD
pipeline: helix-task-clarify v3.1
method: "Pahl-Beitz §6.3 + WX 6-Flow (E-M-S + Data-Compute-Trust)"
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
design_type: ADAPTIVE (V1 base + motor + platform delta)
status: COMPLETE
sf_count: 42 (22 V1 inherited + 14 motor delta + 6 ICDM platform)
feeds_to:
  - Phase 2 helix-concept-generate (morphological matrix for V5 delta SFs)
---

# BD Function Structure — VN-MGM V5-MOTORIZED (6-Flow, ICDM)

## 1. Overall Function

```
┌──────────────────────────────────────────────────────────────────────┐
│                    OVERALL FUNCTION — V5                              │
│                                                                       │
│  "Provide powered angular drive for a proven heavy weapon mount       │
│   that exceeds human tracking, guarantees manual fallback,            │
│   survives recoil, and serves as extensible platform"                 │
│                                                                       │
│  INPUTS:                           OUTPUTS:                           │
│  • Ship 24-48V DC power        →  • Weapon pointing direction        │
│  • Joystick commands            →  • Recoil reaction to deck          │
│  • Mode selection               →  • Position data (RS485/CAN)        │
│  • Operator force (manual)      →  • Motor heat + sound               │
│  • Weapon assembly              →  • Fault/status indications         │
│  • External commands (future)   →  • Field data log (ICDM)            │
└──────────────────────────────────────────────────────────────────────┘
```

## 2. Function Decomposition — V1 (22 inherited) + V5 Delta (14 motor + 6 ICDM)

### V1 Inherited Functions (unchanged — see V1_Function_Structure.md)

F1: ACCEPT weapon (4 SFs) — unchanged
F2: AIM traverse (4 SFs) — F2.2 now has dual input (manual + motor)
F3: AIM elevate (4 SFs) — F3.2 now has dual input
F4: ABSORB recoil (4 SFs) — unchanged
F5: INTERFACE platform (3 SFs) — unchanged (STANAG 4568)
F6: PRESERVE (4 SFs) — extended (F6.4 now has data)

### V5 Motor Delta Functions (14 SFs — shared concept with N12)

#### F7: DRIVE Azimuth (Motor) — NEW

| SF | Sub-Function | Flow | Requirements | V5 vs N12 Difference |
|----|-------------|------|-------------|---------------------|
| F7.1 | Couple motor torque to azimuth axis | **E** | K-03, F-04 | V5: permanent bracket (welded/bolted). N12: clamp-on. |
| F7.2 | Mount motor module to structure | **M, E** | G-03, G-04 | V5: integrated bracket on pedestal. N12: split-ring clamp. |
| F7.3 | Isolate motor from recoil vibration | **E** | F-07 | Same: elastomer bushing |
| F7.4 | Reduce speed / amplify torque (az) | **E** | F-04, K-03 | Same: worm gearbox |

#### F8: DRIVE Elevation (Motor) — NEW

| SF | Sub-Function | Flow | Requirements | V5 vs N12 Difference |
|----|-------------|------|-------------|---------------------|
| F8.1 | Couple motor torque to elevation axis | **E** | K-04, F-05 | V5: can modify V1 structure (P-05 ≤3 brackets). N12: no modification. |
| F8.2 | Mount motor module to elevation structure | **M, E** | G-03 | V5: bolted bracket. N12: U-bolt clamp. |
| F8.3 | Isolate motor from recoil vibration | **E** | F-07 | Same: elastomer bushing |
| F8.4 | Reduce speed / amplify torque (el) | **E** | F-05, K-04 | Same: worm gearbox |

#### F9: TRANSITION Mode (Motor ↔ Manual) — NEW ★ SAFETY-CRITICAL

| SF | Sub-Function | Flow | Requirements |
|----|-------------|------|-------------|
| F9.1 | Disengage motor from mount (clutch release) | **E** | SF-01, SF-02, E-07 |
| F9.2 | Detect fault condition and trigger safe state | **S, C** | SF-04, SF-05, SF-06, SF-08, S-08, FD-01 |
| F9.3 | Signal mode status to operator | **S** | S-02, ER-03 |

#### F10: CONTROL Motors — NEW

| SF | Sub-Function | Flow | Requirements |
|----|-------------|------|-------------|
| F10.1 | Accept operator command (joystick → speed setpoint) | **S, D** | S-01, S-02, ER-01, ER-02 |
| F10.2 | Execute motor speed control loop (PID servo) | **C, E** | K-03-K06, S-05, S-06 |
| F10.3 | Route power and signal through 360° rotation | **E, S** | FD-04 |

### V5 ICDM Platform Functions (6 SFs — NEW, V5 only, NOT in N12)

#### F11: REPORT Position Data — NEW (ICDM PLATFORM)

| SF | Sub-Function | Flow | Requirements |
|----|-------------|------|-------------|
| F11.1 | Encode angular position (az + el) | **D** | K-09, S-03 |
| F11.2 | Transmit position data via standardized interface | **D, S** | S-04 (→D), IX-02 |
| F11.3 | Gate external write access (security) | **T, C** | FD-06, IEC 62443 |

#### F12: SUSTAIN Platform (UPS + Logging) — NEW (ICDM)

| SF | Sub-Function | Flow | Requirements |
|----|-------------|------|-------------|
| F12.1 | Store transition energy (UPS battery) | **E** | E-05, E-06, FD-05 |
| F12.2 | Log operational data (current, position, faults, hours) | **D** | IM-01 |
| F12.3 | Accept firmware update without disassembly | **D, C** | IX-07 |

## 3. 6-Flow Diagram — V5 Delta

### Flow 1: ENERGY (E) — V5 additions

```
V5 ENERGY FLOW (on top of V1):

E-IN:
  E10: Ship 24-48V DC ──→ PSU (≥520W, IX-03 headroom)
       ──→ Controller → Servo drives (×2) → Motors (×2)
       ──→ UPS charger → LiFePO4 battery (F12.1)

E-CONVERSION:
  Motor electrical → Rotational KE
  → Worm gearbox (1:80, self-locking)
  → [EM clutch ENGAGED] → V1 rotation axes
  OR
  → [EM clutch RELEASED] → motor disconnected, V1 free (manual)

E-OUT:
  E11: Motor heat → IP65 enclosure → convection
  E12: Controller heat → enclosure → convection
  E13: Gear mesh friction → heat (small)

SAFETY PATH (hardwired, independent of software):
  Fault/E-stop/cable-cut → HW relay OPENS → Motor power CUT ≤50ms
  → EM clutch power CUT → NC clutch RELEASES ≤1s
  → V1 = free manual (proven 300 units)
```

### Flow 4: DATA (D) — V5 creates full data layer

```
V5 DATA FLOW (V1 has ZERO data):

D-IN:
  D1: Joystick analog (2 axes) → ADC → speed setpoint
  D2: Encoder pulses (2×, 4096 CPR + index) → position

D-INTERNAL:
  D3: PID control loop: setpoint vs feedback → motor PWM
  D4: Fault detection: overcurrent, overspeed, watchdog, cable-cut
  D5: Operational log: motor current, position, fault events, hours (IM-01)

D-OUT:
  D6: Position data → RS485 (Modbus RTU) + CAN (CANopen DS301)
      → Future: camera tracking (SF-A), fire control, AICC
  D7: Fault/mode status → LED + beep
  D8: Log data → downloadable via serial port (IM-01)

KEY DIFFERENCE V5 vs N12:
  N12: data port = W (wish), basic RS485
  V5:  data port = D (demand), full protocol spec, security gate, logging
  V5 is the PLATFORM. N12 is the RETROFIT.
```

### Flow 5: COMPUTATION (C)

```
V5 COMPUTATION:
  C1: PID motor control (2 axes) — standard servo, deterministic
  C2: Fault detection logic (threshold-based) — deterministic
  C3: Mode transition state machine (motor↔manual)
  C4: Joystick mapping (deadband, speed curves, coarse/fine)
  C5: Encoder homing sequence (FD-02) — power-on calibration
  C6: Backlash monitoring (FD-03) — statistical analysis of encoder
  C7: Data logging scheduler (IM-01) — periodic write to storage

ALL computation is DETERMINISTIC (no ML/AI).
ICDM: modular software architecture (IX-01) = C1/C2/C3 as independent modules.
ACH layer (SF-A tracking, SF-C thermal) plugs in LATER via D6 interface.
```

### Flow 6: TRUST (T) — V5 specific

```
V5 TRUST FLOW:

T-IN:
  T1: Operator trust in V1 manual = HIGH (300 units, years of use)
  T2: Operator trust in V5 motor = LOW→MEDIUM (new, but V1 fallback anchors trust)

T-BUILD:
  T3: "I can always go back to manual" = trust anchor (same as N12)
  T4: Mode LED (green=motor, red=manual) = visual confirmation
  T5: Beep on mode change = audible confirmation
  T6: E-stop works instantly = safety confidence
  T7: Position data visible = "system knows where it's pointing" (new for V5)

T-RISK:
  T8: "What if external system sends wrong command?" → FD-06 key switch
  T9: "What if firmware crashes?" → FD-01 watchdog auto-recovery

T-ICDM:
  T10: Co-design session with trắc thủ (IM-04) = build trust pre-delivery
  T11: Field data proves reliability over time (IM-01 logging)
```

## 4. Solution-Determining Sub-Functions — V5

| Rank | SF | Sub-Function | Why Determines V5 Architecture |
|------|----|-----------|---------------------------------|
| **1** | **F7.1** | **Couple motor to azimuth** | Coupling method determines bracket, gear ratio, motor position. CEO confirmed: pinion → slewing ring teeth (shared with N12). |
| **2** | **F8.1** | **Couple motor to elevation** | V5 CAN modify V1 structure (P-05 ≤3 brackets) → more options than N12. Key Phase 2 question. |
| **3** | **F9.1** | **Clutch disengage** | EM NC locked by SC-V5-1. Integration approach (inline vs parallel) determines motor module layout. |
| **4** | **F11.2** | **Data port interface** | ICDM: protocol choice determines ALL future upgrade compatibility. Modbus+CANopen selected (IX-02). |

## 5. Design Type Assessment

### 5a. Classification

| Factor | Assessment | Evidence |
|--------|:----------:|---------|
| Base product | V1-NAVAL-12.7 | 300 units, TRL 9 |
| Change scope | Motor drive + coupling + control + platform (ICDM) | F7-F12 = 20 new SFs |
| V1 architecture | UNCHANGED | F1-F6 = 22 SFs, structure preserved |
| Design type | **ADAPTIVE** | Known base + known delta type (motorization well-understood in industry) |

### 5b. V5 vs N12 Design Type Comparison

| Dimension | N12-RETROFIT-KIT | V5-MOTORIZED |
|-----------|:----------------:|:------------:|
| Design type | ADAPTIVE | ADAPTIVE |
| New SFs | 12 | **20** (12 motor + 2 encoder/data + 6 ICDM) |
| V1 modification | ZERO | ≤3 brackets (P-05) |
| Morpho scope | 12 rows | **20 rows** |
| ICDM platform SFs | 0 | **6** (F11, F12) |
| Phase 2 complexity | Medium | **Medium-High** |

### 5c. Phase 2 Implications

| Aspect | V5 ADAPTIVE |
|--------|-------------|
| Morpho matrix scope | **20 V5 delta SFs** (F7-F12). V1 F1-F6 frozen. |
| WP search depth | Deep on F7.1, F8.1, F9.1. Medium on F11.2 (ICDM). Shallow on rest. |
| Concept variation driver | F8.1 (elevation coupling) — same as N12 but more options (can modify V1). |
| ICDM extension | F11, F12 = platform SFs. Phase 2 adds Innovation Flow (7th flow) to morpho. |

---

## 6. Function Structure × HOQ DP Mapping (V5 delta)

| DP# | Design Parameter | V1 SF (unchanged) | V5 SF (new) | Weight |
|-----|-----------------|-------------------|-------------|:------:|
| DP1 | Traverse Speed | F2.2 (manual 30°/s) | **F7.1, F7.4, F10.2** (motor ≥60°/s) | 17.5% |
| DP2 | Traverse Effort | F2.2 (40 N·m manual) | **F10.1** (joystick ≈0 effort) | 5.8% |
| DP3 | Elevation Precision | F3.2 | **F8.1, F8.4, F10.2, F11.1** (encoder ±0.5°) | 10.8% |
| DP4 | Night Operability | F6.4 (none) | **F11.2** (data port → future SF-C camera) | 10.4% |
| DP5 | Corrosion Endurance | F6.1, F6.2 | **F7.2, F8.2** (bracket + enclosure material) | 14.0% |
| DP6 | Maintenance Burden | F6.4 | **F12.2** (data logging → predictive maintenance) | 10.0% |
| DP7 | First Hit Efficiency | F2.2+F3.2 | **F7.1+F8.1+F10.2+F11.1** (motor+encoder precision) | 14.9% |
| DP8 | Mounting Speed | F5.1 | Same (STANAG 4568) | 4.7% |
| DP9 | Hot Barrel Safety | F6.3 | Same + SF-10 (recoil zone clearance) | 4.0% |
| DP10 | Condition Observability | F6.4 (none) | **F12.2** (IM-01 operational data log) | 8.7% |

**V5 directly addresses all 10 DPs.** V1 weak spots C5 (Night) and C7 (Condition) are resolved by V5's data port (F11) and logging (F12) — via ICDM platform requirements.

---

*BD Function Structure | 42 SFs (22 V1 + 14 motor + 6 ICDM) | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
