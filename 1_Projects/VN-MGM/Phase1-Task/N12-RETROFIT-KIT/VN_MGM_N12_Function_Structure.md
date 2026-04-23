---
created: 2026-04-10
type: function-structure
block: BD
pipeline: helix-task-clarify v3.1
method: "Pahl-Beitz §6.3 + WX 6-Flow (E-M-S + Data-Compute-Trust)"
project: VN-MGM N12-RETROFIT-KIT
design_type: ADAPTIVE (V1 base + motor delta)
status: COMPLETE
sf_count: 34 (22 V1 inherited + 12 N12-specific)
feeds_to:
  - Phase 2 helix-concept-generate (morphological matrix for N12 delta SFs)
---

# BD Function Structure — VN-MGM N12-RETROFIT-KIT (6-Flow)

## 1. Overall Function

```
┌──────────────────────────────────────────────────────────────────┐
│                   OVERALL FUNCTION — N12                          │
│                                                                   │
│  "Add powered angular drive to EXISTING V1 mount, enabling        │
│   fast target engagement while preserving manual capability,       │
│   without modifying V1 structure"                                  │
│                                                                   │
│  ADDITIONAL INPUTS (vs V1):    ADDITIONAL OUTPUTS (vs V1):        │
│  • Ship 24-48V DC power   →   • Motor sound/vibration            │
│  • Joystick commands      →   • Position data (RS485/CAN)        │
│  • Mode selection         →   • Heat (motor + controller)         │
│                                                                   │
│  V1 INPUTS (unchanged):       V1 OUTPUTS (unchanged):            │
│  • Operator force (manual) →  • Weapon pointing direction        │
│  • Weapon assembly         →  • Recoil reaction to deck          │
└──────────────────────────────────────────────────────────────────┘
```

## 2. Function Decomposition — V1 (22 inherited) + N12 Delta (12 new)

### V1 Inherited Functions (unchanged — see V1_Function_Structure.md)

F1: ACCEPT weapon (4 SFs) — unchanged
F2: AIM traverse (4 SFs) — unchanged BUT F2.2 now has dual input (manual + motor)
F3: AIM elevate (4 SFs) — unchanged BUT F3.2 now has dual input
F4: ABSORB recoil (4 SFs) — unchanged
F5: INTERFACE platform (3 SFs) — unchanged
F6: PRESERVE (4 SFs) — unchanged

### N12 Delta Functions (NEW — 12 sub-functions)

#### F7: DRIVE Azimuth (Motor) — NEW

| SF | Sub-Function | Flow | Requirements | Solution Space |
|----|-------------|------|-------------|----------------|
| F7.1 | Couple motor torque to V1 azimuth axis | **E** (energy) | N-F01, N-F02 | Gear mesh pinion → slewing ring external teeth (CEO confirmed) |
| F7.2 | Clamp motor module to V1 pedestal | **M, E** | N-G05, SC-N12-4 | Split-ring clamp on cylindrical surface |
| F7.3 | Isolate motor from recoil vibration | **E** | N-F01, N-SF08 | Elastomer bushings between bracket and motor |

#### F8: DRIVE Elevation (Motor) — NEW

| SF | Sub-Function | Flow | Requirements | Solution Space |
|----|-------------|------|-------------|----------------|
| F8.1 | Couple motor torque to V1 elevation axis | **E** | N-F03 | Gear mesh to worm shaft OR friction drive to elevation arc |
| F8.2 | Clamp motor module to V1 elevation arm | **M, E** | SC-N12-4 | U-bolt or saddle clamp on rectangular section |
| F8.3 | Isolate motor from recoil vibration | **E** | N-SF08 | Elastomer bushings |

#### F9: TRANSITION Mode (Motor ↔ Manual) — NEW ★ SAFETY-CRITICAL

| SF | Sub-Function | Flow | Requirements | Solution Space |
|----|-------------|------|-------------|----------------|
| F9.1 | Disengage motor from mount (clutch release) | **E** | N-SF03, N-E04 | EM clutch NC: power off = disengage |
| F9.2 | Detect fault condition and trigger safe state | **S, C** | N-SF01, N-SF02, N-SF06 | Watchdog timer + overcurrent + overspeed |
| F9.3 | Signal mode status to operator | **S** | N-S01, N-S04 | LED + beep |

#### F10: CONTROL Motors — NEW

| SF | Sub-Function | Flow | Requirements | Solution Space |
|----|-------------|------|-------------|----------------|
| F10.1 | Accept operator command (joystick → speed setpoint) | **S, D** | N-ER01 | Analog joystick → ADC → speed map |
| F10.2 | Execute motor speed control loop | **C, E** | N-K01-K04 | PID servo loop, STM32 + servo drives |
| F10.3 | Route power and signal through 360° rotation | **E, S** | N-AS06 | Cable spiral or slip ring at azimuth joint |

## 3. 6-Flow Diagram — N12 Delta

### Flow 1: ENERGY (E) — N12 additions

```
N12 ENERGY ADDITIONS (on top of V1 Energy Flow):

E-IN (new):
  E10: Ship 24-48V DC ──→ Controller → Servo drives → Motors
  
E-CONVERSION (new):
  E10 → Motor electrical → Rotational KE (motor shaft)
       → Gearbox (speed reduction, torque amplification)
       → Pinion gear → V1 slewing ring teeth (azimuth)
       → Gear → V1 elevation worm shaft (elevation)
  
  CLUTCH ENGAGED: Motor torque → V1 rotation axes
  CLUTCH RELEASED: Motor disconnected → V1 free (manual mode)

E-OUT (new):
  E11: Motor heat → dissipated to air (natural convection)
  E12: Controller heat → IP65 enclosure → convection
  E13: Gear mesh friction → heat (small)

CRITICAL PATH (safety):
  Fault detected → E-stop relay opens → Motor power CUT ≤50ms
  → EM clutch power CUT → NC clutch RELEASES ≤1s
  → V1 = free manual (proven baseline)
```

### Flow 4: DATA (D) — N12 activates data flow

```
N12 DATA FLOW (V1 has ZERO data flow — N12 creates it):

D-IN:
  D1: Joystick analog position (2 axes) → ADC → speed setpoint
  D2: Encoder pulses (2×, incremental + index) → position feedback

D-INTERNAL:
  D3: PID control loop: setpoint vs feedback → motor PWM
  D4: Fault detection: overcurrent, overspeed, watchdog, cable-cut

D-OUT:
  D5: Position data (azimuth + elevation angles) → RS485/CAN port
      → Future: camera auto-tracking (SF-A), fire control (AICC)
  D6: Fault status → LED indicators

DATA FLOW IS THE UPGRADE PATH.
V1 = zero data. N12 creates data channel. SF-A/B/C ACH plug into this.
```

### Flow 5: COMPUTATION (C) — N12 adds

```
N12 COMPUTATION:
  C1: PID motor control (2 axes) — standard servo, NOT AI
  C2: Fault detection logic (threshold-based) — NOT AI
  C3: Mode transition state machine (motor→manual→motor)
  C4: Joystick mapping (deadband, speed curves)

ALL computation is DETERMINISTIC (no ML/AI).
ACH layer (SF-A tracking, SF-C thermal) plugs in LATER via D5 port.
```

### Flow 6: TRUST (T) — N12 specific

```
N12 TRUST FLOW:

T-IN:
  T1: Operator trust in V1 manual = HIGH (300 units, years of use)
  T2: Operator trust in N12 motor = LOW (new, unfamiliar)
  
T-BUILD:
  T3: "I can always go back to manual" = trust anchor
  T4: Mode LED (green/red) = visual confirmation of state
  T5: Beep on mode change = audible confirmation
  T6: E-stop works instantly = safety confidence
  
T-RISK:
  T7: "What if motor moves weapon unexpectedly?" → STO + clutch release
  T8: "What if clamp loosens?" → recoil test + check torque in SOP

TRUST STRATEGY: N12 succeeds ONLY if operator trusts the FALLBACK (manual).
Building motor trust is secondary — V1 manual trust is primary.
```

## 4. Solution-Determining Sub-Functions — N12

| Rank | SF | Sub-Function | Why Determines N12 Architecture |
|------|----|-----------|---------------------------------|
| **1** | **F7.1** | **Couple motor to azimuth** | Coupling method determines motor position, bracket design, gear ratio, everything. CEO confirmed: gear mesh to external teeth. |
| **2** | **F8.1** | **Couple motor to elevation** | Same — but elevation coupling is OPEN (worm shaft extension? friction? gear?). This is the key Phase 2 question. |
| **3** | **F9.1** | **Clutch disengage** | Clutch type (EM NC vs friction vs one-way) determines fail-safe behavior and motor-manual transition feel. |

## 5. Design Type Confirmation

**N12 = ADAPTIVE on V1 base**

| V1 Function | N12 Change |
|-------------|-----------|
| F1-F6 (22 SFs) | **Inherited unchanged** — V1 structure, bearing, recoil path all preserved |
| F7-F10 (12 SFs) | **NEW** — motor drive, coupling, transition, control |

Phase 2 morphological matrix focuses ONLY on F7-F10 (12 new SFs). F1-F6 are fixed (V1 proven concept = "Proven Naval").

---

## 6. Function Structure × HOQ DP Mapping (N12 delta)

| DP# | Design Parameter | V1 SF (unchanged) | N12 SF (new) |
|-----|-----------------|-------------------|-------------|
| DP1 | Traverse Speed | F2.2 (manual 30°/s) | **F7.1, F10.2** (motor ≥45°/s) |
| DP2 | Traverse Effort | F2.2 (40 N·m manual) | **F10.1** (joystick ≈0 effort) |
| DP4 | Night Operability | F6.4 (none) | **F10.3** (D5 port → future SF-C) |
| DP5 | Corrosion Endurance | F6.1, F6.2 | **F7.2, F8.2** (bracket material) |
| DP7 | First Hit Efficiency | F2.2+F3.2 (manual) | **F7.1+F8.1+F10.2** (motor precision) |
| DP10 | Condition Observability | F6.4 (none) | **F10.3** (D5 port → future SF-B) |

**N12 directly improves DP1 (speed), DP2 (effort), DP7 (hit efficiency) and enables DP4, DP10 via data port. V1 weak spots C5 and C7 addressed by N12's data channel.**

---

*34 total SFs (22 V1 + 12 N12). 3 solution-determining SFs (F7.1, F8.1, F9.1). Phase 2 morphological matrix targets 12 new SFs only.*
