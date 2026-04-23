# V-SMASH System States

> **Document**: System State Machine Specification
> **Version**: 1.0
> **Date**: 2026-01-26
> **Status**: Draft

---

## 1. Overview

V-SMASH operates as a state machine with strict human-in-the-loop enforcement. The system NEVER initiates fire autonomously - it only optimizes the TIMING of operator-initiated fire.

### Design Principles Governing States

1. **Human Authorization**: Operator must press trigger first
2. **AI Assistance Only**: System controls timing, not decision to fire
3. **Fail-Safe Default**: Any failure → normal manual operation
4. **Clear Indication**: Operator always knows current state

---

## 2. State Machine Diagram

```
                              ┌─────────────────────────────────────┐
                              │         V-SMASH STATE MACHINE        │
                              └─────────────────────────────────────┘

    ┌───────────┐
    │    OFF    │◄──────────────────────────────────────────────────────┐
    └─────┬─────┘                                                       │
          │ Power ON                                                    │
          ▼                                                             │
    ┌───────────┐                                                       │
    │   BOOT    │──── Self-test FAIL ──────────────────────┐           │
    └─────┬─────┘                                           │           │
          │ Self-test PASS                                  │           │
          ▼                                                 ▼           │
    ┌───────────┐                                    ┌───────────┐      │
    │   SAFE    │◄─── Operator disable AI ───────────│   FAULT   │      │
    │  (MANUAL) │◄─── Any critical error ────────────│           │      │
    └─────┬─────┘                                    └───────────┘      │
          │ Operator enable AI                                          │
          ▼                                                             │
    ┌───────────┐                                                       │
    │ AI-READY  │◄─── Target lost ───────────────────────┐             │
    │ (SEARCH)  │◄─── Trigger released ──────────────────┤             │
    └─────┬─────┘                                         │             │
          │ Target detected                               │             │
          ▼                                               │             │
    ┌───────────┐                                         │             │
    │ TRACKING  │◄─── Fire complete ─────────────────────┤             │
    │           │◄─── Alignment lost ────────────────────┤             │
    └─────┬─────┘                                         │             │
          │ Trigger pressed + valid solution              │             │
          ▼                                               │             │
    ┌───────────┐                                         │             │
    │  ENGAGE   │──── Trigger released ──────────────────┘             │
    │ (GATING)  │──── Timeout (2s) ──────────────────────┘             │
    └─────┬─────┘                                                       │
          │ Alignment achieved (<threshold)                             │
          ▼                                                             │
    ┌───────────┐                                                       │
    │   FIRE    │                                                       │
    │           │                                                       │
    └─────┬─────┘                                                       │
          │ Recoil detected                                             │
          ▼                                                             │
    ┌───────────┐                                                       │
    │   RESET   │──── Power OFF ────────────────────────────────────────┘
    └───────────┘
```

---

## 3. State Definitions

### 3.1 OFF

| Attribute | Value |
|-----------|-------|
| **Description** | System powered down |
| **AI Status** | Inactive |
| **Trigger Gate** | Mechanically open (spring return) |
| **Weapon Status** | Normal manual operation |
| **Entry Condition** | Power removed |
| **Exit Condition** | Power applied |

### 3.2 BOOT

| Attribute | Value |
|-----------|-------|
| **Description** | System initialization and self-test |
| **Duration** | <5 seconds typical |
| **AI Status** | Initializing |
| **Trigger Gate** | Open |
| **Weapon Status** | Normal manual operation |

**Self-Test Checklist:**
- [ ] Processor boot complete
- [ ] Camera initialization
- [ ] IMU calibration
- [ ] Memory check
- [ ] Trigger sensor verify
- [ ] Solenoid function test

**Exit Conditions:**
- PASS → SAFE
- FAIL → FAULT

### 3.3 SAFE (Manual Mode)

| Attribute | Value |
|-----------|-------|
| **Description** | AI disabled, normal weapon operation |
| **AI Status** | Off |
| **Trigger Gate** | Open |
| **Weapon Status** | Normal manual operation |
| **Indicator** | Red LED solid |

**Purpose:**
- Default operational mode
- Fallback when AI not needed
- Safe handling/transport mode

**Entry Conditions:**
- Boot complete (self-test pass)
- Operator disables AI
- Critical error (from any state)
- Watchdog timeout

**Exit Conditions:**
- Operator enables AI → AI-READY

### 3.4 AI-READY (Search Mode)

| Attribute | Value |
|-----------|-------|
| **Description** | AI active, searching for targets |
| **AI Status** | Detection running |
| **Trigger Gate** | Open |
| **Weapon Status** | Normal manual operation |
| **Indicator** | Yellow LED solid |

**Active Subsystems:**
- Camera capture (60 fps)
- YOLO detection running
- Display showing live view

**Entry Conditions:**
- Operator enables AI from SAFE
- Target lost from TRACKING
- Trigger released from ENGAGE
- Fire complete from RESET

**Exit Conditions:**
- Target detected + confidence >80% → TRACKING
- Operator disables AI → SAFE

### 3.5 TRACKING

| Attribute | Value |
|-----------|-------|
| **Description** | Target locked, computing fire solution |
| **AI Status** | Detection + Tracking + Ballistics |
| **Trigger Gate** | Open |
| **Weapon Status** | Normal manual operation |
| **Indicator** | Green LED solid |

**Active Subsystems:**
- Camera capture (60 fps)
- YOLO detection running
- Kalman filter tracking
- Ballistic computer
- Fire solution display

**Display Shows:**
- Target bounding box
- Predicted impact point
- Alignment error indicator
- "READY" when solution valid

**Entry Conditions:**
- Target detected from AI-READY
- Alignment lost from ENGAGE (still tracking)
- Fire complete from RESET (target still present)

**Exit Conditions:**
- Trigger pressed + solution valid → ENGAGE
- Target lost (3 frames) → AI-READY
- Operator disables AI → SAFE

### 3.6 ENGAGE (Gating Mode)

| Attribute | Value |
|-----------|-------|
| **Description** | Operator intends to fire, waiting for optimal moment |
| **AI Status** | Active, high-priority timing |
| **Trigger Gate** | **CLOSED (blocking)** |
| **Weapon Status** | Trigger blocked by solenoid |
| **Indicator** | Green LED fast blink |

**Critical State - Human-in-the-Loop:**
```
Operator MUST be pressing trigger to enter this state.
System is now blocking the trigger, waiting for alignment.
Operator can abort by releasing trigger.
```

**Active Subsystems:**
- All tracking systems (high priority)
- Precision timing loop (<1ms)
- Solenoid energized (holding)

**Entry Conditions:**
- From TRACKING: Trigger pressed AND solution valid

**Exit Conditions:**
- Alignment error < threshold → FIRE
- Trigger released → TRACKING or AI-READY
- Timeout (2 seconds) → TRACKING
- Target lost → AI-READY

**Timeout Rationale:**
If alignment not achieved in 2s, target may be evading or conditions changed. Release operator to reassess.

### 3.7 FIRE

| Attribute | Value |
|-----------|-------|
| **Description** | Trigger released at optimal moment |
| **AI Status** | Active |
| **Trigger Gate** | **OPENS (releases)** |
| **Weapon Status** | Fires |
| **Indicator** | Green LED solid (brief) |
| **Duration** | <5ms |

**Sequence:**
1. Alignment error crosses threshold
2. Solenoid de-energizes (<5ms response)
3. Trigger gate opens
4. Operator's trigger pressure fires weapon
5. Recoil/acoustic sensor confirms fire

**Entry Conditions:**
- From ENGAGE: Alignment error < fire threshold

**Exit Conditions:**
- Recoil detected → RESET
- Timeout (100ms) → RESET (assumed fire)

### 3.8 RESET

| Attribute | Value |
|-----------|-------|
| **Description** | Post-fire state, preparing for next engagement |
| **AI Status** | Active |
| **Trigger Gate** | Open |
| **Weapon Status** | Normal |
| **Indicator** | Follows next state |
| **Duration** | <100ms |

**Actions:**
- Log engagement (timestamp, target, alignment)
- Reset trigger sensor
- Check for target re-acquisition
- Update tracking state

**Entry Conditions:**
- Fire event detected

**Exit Conditions:**
- Target still present → TRACKING
- Target lost → AI-READY
- Operator disables AI → SAFE

### 3.9 FAULT

| Attribute | Value |
|-----------|-------|
| **Description** | System error detected |
| **AI Status** | Disabled |
| **Trigger Gate** | Open (fail-safe) |
| **Weapon Status** | Normal manual operation |
| **Indicator** | Red LED fast blink |

**Fault Types:**
| Code | Fault | Recovery |
|------|-------|----------|
| F01 | Camera failure | Power cycle |
| F02 | IMU failure | Power cycle |
| F03 | Processor overheat | Cool down |
| F04 | Low battery | Replace/charge |
| F05 | Solenoid failure | Manual mode only |
| F06 | Watchdog timeout | Power cycle |

**Entry Conditions:**
- Self-test failure
- Runtime critical error
- Watchdog timeout

**Exit Conditions:**
- Power cycle → BOOT
- Some faults: Operator acknowledge → SAFE

---

## 4. Trigger Gate Logic

### Physical Implementation

```
              GATE CLOSED                    GATE OPEN
           (Solenoid energized)          (Solenoid released)

    Trigger ──┤ ├── Blocked         Trigger ──────── Free
                ▲
           Solenoid                              Spring
            holds                               return
```

### Gate State by System State

| System State | Gate | Solenoid | Can Fire? |
|--------------|------|----------|-----------|
| OFF | Open | Off | Yes (manual) |
| BOOT | Open | Off | Yes (manual) |
| SAFE | Open | Off | Yes (manual) |
| AI-READY | Open | Off | Yes (manual) |
| TRACKING | Open | Off | Yes (manual) |
| **ENGAGE** | **Closed** | **On** | **No (waiting)** |
| FIRE | Opens | Off | **Yes (AI-timed)** |
| RESET | Open | Off | Yes (manual) |
| FAULT | Open | Off | Yes (manual) |

### Fail-Safe Principle

```
Power Loss → Solenoid Off → Spring Return → Gate Open → Normal Fire

The system CANNOT prevent firing if power is lost.
This is intentional for combat reliability.
```

---

## 5. Operator Indicators

### LED States

| LED Pattern | State | Meaning |
|-------------|-------|---------|
| Off | OFF | System unpowered |
| Red blink slow | BOOT | Initializing |
| Red solid | SAFE | Manual mode, AI off |
| Red blink fast | FAULT | Error condition |
| Yellow solid | AI-READY | Searching for target |
| Green solid | TRACKING | Target locked |
| Green blink fast | ENGAGE | Hold - waiting for alignment |
| Blue pulse | - | Status info (battery, etc.) |

### Audio Cues (Optional)

| Sound | State | Meaning |
|-------|-------|---------|
| Single beep | BOOT→SAFE | Ready |
| Double beep | →TRACKING | Target acquired |
| Rising tone | TRACKING→ENGAGE | Fire when ready |
| Click | FIRE | Weapon fired |
| Alarm | FAULT | Check system |

---

## 6. Timing Requirements

| Transition | Max Latency | Requirement |
|------------|-------------|-------------|
| BOOT → SAFE | <5 seconds | R-NEW |
| Target detect (AI-READY→TRACKING) | <100ms | R04 |
| ENGAGE → FIRE (alignment achieved) | **<5ms** | **R05** |
| FIRE → RESET | <100ms | R-NEW |
| Any → SAFE (operator disable) | <50ms | Safety |

---

## 7. State Persistence

### Non-Volatile Storage

| Data | Stored | Purpose |
|------|--------|---------|
| Last state | No | Always boot to SAFE |
| Fault log | Yes | Diagnostics |
| Engagement log | Yes | Training review |
| Configuration | Yes | Weapon profile |

### Power Loss Recovery

```
Power Loss (any state)
        │
        ▼
    Gate opens (spring)
    Weapon fires if trigger pressed
        │
        ▼
    Power Restored
        │
        ▼
    BOOT (fresh start)
        │
        ▼
    SAFE (default)
```

---

## 8. Test Cases

### TC-01: Normal Engagement Sequence

```
1. Power ON → BOOT → SAFE (pass)
2. Enable AI → AI-READY
3. Aim at target → TRACKING (target locked)
4. Press trigger → ENGAGE (gate closes)
5. Align on target → FIRE (gate opens, weapon fires)
6. → RESET → TRACKING (if target present)
```

### TC-02: Operator Abort

```
1. ... → ENGAGE (gate closed, waiting)
2. Operator releases trigger
3. → TRACKING or AI-READY
4. Gate opens, no fire
```

### TC-03: Engagement Timeout

```
1. ... → ENGAGE (gate closed)
2. Target evading, alignment not achieved
3. 2 seconds timeout
4. → TRACKING
5. Gate opens, operator can reassess
```

### TC-04: Power Loss During Engage

```
1. ... → ENGAGE (gate closed, solenoid energized)
2. Power loss
3. Solenoid de-energizes (spring return)
4. Gate opens
5. If trigger still pressed → weapon fires (manual)
6. Fail-safe maintained
```

### TC-05: AI Disable Any State

```
1. Any state with AI active
2. Operator presses AI disable
3. → SAFE within 50ms
4. Gate opens (if was closed)
5. Manual operation restored
```

---

## 9. Related Documents

- [[V-SMASH_Conceptual_Design_v1.1]] - Overall system design
- [[requirements/v1.1-summary]] - R04, R05, R31, R32
- [[decisions/log]] - DEC-001 Design Philosophy
- [[design/function-structure]] - F4, F5 subfunctions

---

*Version 1.0 | Initial state machine specification*
*Last updated: 2026-01-26*
