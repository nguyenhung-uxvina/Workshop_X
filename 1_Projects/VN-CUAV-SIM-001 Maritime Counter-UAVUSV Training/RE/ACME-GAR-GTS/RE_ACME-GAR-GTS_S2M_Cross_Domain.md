---
project: VN-CUAV-SIM-001
product: ACME GAR GTS → VN-CUAV-SIM MWI Recoil Subsystem
stage: 2M — Cross-Domain Analysis (MECHA)
created: 2026-04-21
---

# STAGE 2M: CROSS-DOMAIN ANALYSIS — ACME GAR GTS

## 2M-1: Cross-Domain Function Allocator

### ACME's Allocation (original)

| Function                | Mech % | Elec % | Sw % | Ctrl % | Rationale                                                                |
| ----------------------- | :----: | :----: | :--: | :----: | ------------------------------------------------------------------------ |
| Generate recoil impulse |   40   |   30   |  10  |   20   | Motor+gearbox+linkage (Mech) + driver (Elec) + profile (Sw) + PID (Ctrl) |
| Track position/velocity |   0    |   50   |  0   |   50   | Hall sensors (Elec) + FOC algorithm (Ctrl)                               |
| Manage firing state     |   10   |   10   |  70  |   10   | Host SW dominates; trigger = Mech/Elec                                   |
| Simulate windload       |   30   |   30   |  20  |   20   | Torque motor (Mech/Elec) + aero model (Sw/Ctrl)                          |
| Visual/audio            |   10   |   40   |  40  |   10   | Projector/speakers (Elec) + render engine (Sw)                           |

### WX's Proposed Allocation (Two-Channel + Unity)

| Function | Mech % | Elec % | Sw % | Ctrl % | WX Approach |
|----------|:------:|:------:|:----:|:------:|-------------|
| **Generate recoil impulse** | **60** | **20** | **10** | **10** | **Masselotte/pneumatic (Mech-heavy), simple driver (Elec), trigger timing (Sw/Ctrl)** |
| Track position/velocity | 0 | 0 | 0 | 0 | **NOT NEEDED** — no position control for masselotte/solenoid/pneumatic |
| Manage firing state | 5 | 5 | **80** | 10 | **Unity engine dominates** — instructor + AI coaching |
| Simulate windload | 20 | 30 | **30** | **20** | **Magnetic brake (Mech/Elec) + Unity model (Sw/Ctrl)** |
| Visual/audio | 5 | 30 | **55** | 10 | **Unity 3-screen (Sw-heavy)** — WX competitive advantage |

### Allocation Shift Analysis

| Dimension | ACME | WX | Delta | Reason |
|-----------|:----:|:--:|:-----:|--------|
| Mech complexity | HIGH (motor+gearbox+linkage) | LOW (solenoid/masselotte = 2-3 parts) | -60% | Two-Channel + lower force target |
| Elec complexity | HIGH (motor driver, FOC, Hall sensors) | LOW (simple MOSFET/relay driver) | -70% | No position control needed |
| Sw complexity | MEDIUM (host control, weapon profiles) | **HIGH (Unity engine, AI coaching, scenario)** | +40% | WX invests in SW = ACH value |
| Ctrl complexity | HIGH (FOC, PID, state machine) | LOW (on/off + timing) | -80% | Masselotte/pneumatic = simple control |

**Key insight:** WX shifts complexity from Mech/Elec/Ctrl → SW. This is the ACH pattern: commodity hardware + intelligent software.

### Alternative Allocation Exploration

| Strategy | Pros | Cons | Vietnam Fit |
|----------|------|------|:----------:|
| **SW-centric (WX approach)** | Lowest HW cost, fastest iteration, SW team is WX strength | Depends on Unity/MCU capability | ★★★★★ |
| Electronics-centric (Haptech) | Precise force profiles, tetherless | High cost, import-dependent, patent risk | ★★ |
| Mechanical-centric (pneumatic) | Proven, high force, patent-free | Compressor noise/logistics, consumables | ★★★★ |
| Distributed (ACME) | Multi-weapon, full-force | Expensive ($15K), complex, patented | ★★ |

## 2M-2: Control Law Analysis (Simplified)

### ACME's Control Architecture

```
Inner (10 kHz):  Motor current → torque
Middle (1 kHz):  Position/velocity PID → stroke profile
Outer (100 Hz):  Shot timing → firing sequence
Supervisory (30-60 Hz): Host commands → scenario
Safety: HW interlock (asynchronous)
```

### WX's Proposed Control Architecture (masselotte/solenoid)

```
Inner: NOT NEEDED (no position control — solenoid is bang-bang)
Middle: NOT NEEDED (masselotte has fixed stroke)
Outer (100 Hz):  Trigger event → fire solenoid/valve → fixed impulse
Supervisory (30-60 Hz): Unity commands → scenario, weapon profile select
Safety: HW interlock (same as ACME)
```

**Complexity reduction: 5 control loops → 2 control loops.** This is the architectural simplification enabled by accepting L3 fidelity (≥25N, not full-force).

### State Machine (WX version — simplified)

```
[OFF] →(power on)→ [STANDBY]
[STANDBY] →(Unity connects)→ [READY]
  [READY] →(safety off + trigger)→ [FIRING]
    [FIRING]: solenoid/valve pulses at weapon rate
    [FIRING] →(trigger release)→ [READY]
    [FIRING] →(Unity: cease fire)→ [READY]
    [FIRING] →(Unity: malfunction)→ [MALFUNCTION]
  [MALFUNCTION]:
    RUNAWAY: continue pulses after trigger release
    MISFIRE: no pulse on trigger
    SLUGGISH: reduced rate
    COOK-OFF: pulse without trigger (Unity override)
  [MALFUNCTION] →(correct procedure)→ [READY]
[ANY] →(E-STOP)→ [OFF]
```

Same state machine as ACME, but implementation is 10× simpler (no FOC, no PID, no position tracking).

## 2M-3: Firmware & Software Strategy

### Software Architecture (WX)

| Layer | ACME (proprietary) | WX (open/owned) | Risk |
|-------|-------------------|-----------------|:----:|
| Host OS | RedHat Linux (IA compliant) | **Ubuntu/Debian** (VN standard) | LOW |
| Host App | GAR Manager (proprietary) | **Unity engine** (owned, Phase 2 done) | LOW |
| Scenario Engine | Proprietary | **Unity** (WX existing) | LOW |
| Instructor Station | Pull-out hardware | **Unity IOS** (WX existing) | LOW |
| DIS Interface | Proprietary | **Open-DIS** (open source) | MEDIUM |
| Motor Controller | Proprietary firmware (FPGA/MCU) | **STM32 + FreeRTOS** or bare metal | MEDIUM |
| Weapon Profiles | Burnt into motor controller | **JSON config** on USB/NFC per weapon module | LOW |
| Diagnostics | GAR Manager built-in | **Unity self-test panel** | MEDIUM |

**WX advantage:** Unity platform already built for VN-CUAV-SIM = near-zero marginal SW cost for recoil integration. ACME built custom everything from scratch.

---

## Save to: `RE_ACME-GAR-GTS_S2M_Cross_Domain.md` ✅
