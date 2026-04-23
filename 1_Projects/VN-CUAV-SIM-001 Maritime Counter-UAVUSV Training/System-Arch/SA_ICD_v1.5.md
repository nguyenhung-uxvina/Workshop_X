---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: VDI 2206:2021 — System Design
mode: RETROACTIVE
step: SA3
version: v1.5
---

# ICD v1.5 — INTERFACE CONTROL DOCUMENT — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Version:** v1.5 (retroactive — acknowledges Phase 2 decisions already made)
**Standard:** VDI 2206:2021, Step SA3

> **v1.5 vs v1.0:** Normal SA produces ICD v1.0 before Phase 2. This project entered Phase 2 without formal ICD. v1.5 formalizes implicit assumptions + CEO conflict resolutions from SA2.

---

## INTERNAL INTERFACES (Domain ↔ Domain)

### IF-01: MECH ↔ ELEC — Weapon Station (SS1)

| IF-ID | From | To | Type | Specification | Constraint | Owner | Priority |
|-------|------|----|------|---------------|-----------|-------|----------|
| IF-01a | MECH | ELEC | Physical | Encoder mounting: 2× hollow-shaft, coaxial with traverse/elevation axis | Runout ≤0.02mm, concentricity ≤0.05mm | **SHARED** (CEO 1b) | D |
| IF-01b | MECH | ELEC | Physical | Solenoid mount: M5×4 bolt pattern on cradle rear face | Stiffness ≥5000 N/mm at mount point | MECH | D |
| IF-01c | MECH | ELEC | Physical | Mag brake mount: coaxial with traverse shaft | Airgap 0.3±0.1mm | MECH | D |
| IF-01d | MECH | ELEC | Physical | Trigger switch mount: inside trigger guard, micro-switch | Travel ≤2mm, actuation force set by spring (F-05) | MECH | D |
| IF-01e | MECH | ELEC | Physical | Cable routing: internal channels in cradle body | Min bend radius 25mm, strain relief at exit | MECH | W |
| IF-01f | MECH | ELEC | Physical | NFC antenna position: flush with weapon module interface plate | Read range ≥10mm through 3mm Al plate | ELEC | D |
| IF-01g | MECH | ELEC | Connector | 12-pin MIL-style connector: weapon module ↔ cradle | Pin-out: 2×encoder, 2×trigger, 2×solenoid, 2×NFC, 2×brake, 2×spare | ELEC | D |

### IF-02: ELEC ↔ SW — Sensor-to-Render Chain (SS1→SS2-SW)

| IF-ID | From | To | Type | Specification | Constraint | Owner | Priority |
|-------|------|----|------|---------------|-----------|-------|----------|
| IF-02a | ELEC | SW | Signal | Traverse encoder → USB Serial | 0.1° resolution, ≥100Hz update rate | ELEC | D |
| IF-02b | ELEC | SW | Signal | Elevation encoder → USB Serial | 0.1° resolution, ≥100Hz update rate | ELEC | D |
| IF-02c | ELEC | SW | Signal | Trigger → USB Serial (ESP32) | Rising edge = fire event, debounce ≤2ms | ELEC | D |
| IF-02d | ELEC | SW | Signal | NFC data → USB Serial (ESP32) | JSON: {weapon_type, serial, cal_date, round_count} | ELEC | D |
| IF-02e | SW | ELEC | Command | Recoil pulse → USB Serial → ESP32 | Duration: 15-50ms per weapon profile, peak current TBD | SW | D |
| IF-02f | SW | ELEC | Command | Brake PWM → USB Serial → ESP32 | 0-100% duty cycle, maps to 0-max torque per weapon | SW | D |
| IF-02g | SW | ELEC | Data | NFC write-back → ESP32 → NFC tag | Round count update after each session | SW | W |

**CRITICAL: Latency chain IF-02a→IF-02c:**
```
Encoder poll (ELEC)    →  2ms
USB Serial transmit    →  3ms
Unity input read       →  4ms
Ballistic compute      →  4ms
Render (HDRP 1 frame)  → 12ms
HDMI output            →  8ms
Projector display      → 17ms
─────────────────────────────
TOTAL                  → 50ms (S-01 budget)

Budget split: ELEC owns ≤5ms (poll+transmit)
              SW owns ≤20ms (input+compute+render)
              ELEC owns ≤25ms (HDMI+projector)
```

### IF-03: MECH ↔ ELEC — Motion Platform (SS3)

| IF-ID | From | To | Type | Specification | Constraint | Owner | Priority |
|-------|------|----|------|---------------|-----------|-------|----------|
| IF-03a | MECH | ELEC | Physical | Actuator mount: 2× linear actuator, pin joint to frame | Stroke ≥150mm, speed ≥50mm/s | MECH | D |
| IF-03b | MECH | ELEC | Physical | Limit switch mount: 2× per axis (hard stop backup) | Trigger before mechanical hard stop | MECH | D |
| IF-03c | ELEC | MECH | Force | Actuator output: ≤500N per actuator continuous | Frame must handle 2×500N + 130kg payload | MECH | D |
| IF-03d | MECH | ELEC | Safety | E-stop relay: hardwired NC circuit, cuts actuator power | Response ≤100ms (relay) + brake ≤900ms = ≤1s total (Sa-02) | **SHARED** | D |

### IF-04: SW ↔ ELEC — Motion Control (SS2-SW → SS3-E)

| IF-ID | From | To | Type | Specification | Constraint | Owner | Priority |
|-------|------|----|------|---------------|-----------|-------|----------|
| IF-04a | SW | ELEC | Command | Wave command: UDP packet {roll_deg, pitch_deg, timestamp} | ≥50Hz update rate, ≤20ms latency from wave model | **SHARED** (CEO 1a) | D |
| IF-04b | ELEC | SW | Feedback | Actual position: UDP packet {actual_roll, actual_pitch, status} | ≥50Hz, used for latency monitor (T-flow) | ELEC | W |
| IF-04c | SW | ELEC | Config | Motion profile: {max_roll, max_pitch, period, damping} per sea state | Set at scenario start, not during motion | SW | D |

**CRITICAL: Wave sync latency (CEO: SHARED)**
```
SW budget:   wave model compute ≤10ms + UDP send ≤2ms        = ≤12ms
ELEC budget: UDP receive ≤2ms + PID compute ≤3ms + PWM ≤1ms  = ≤6ms
Mech budget: actuator mechanical response                     = ≤30ms
─────────────────────────────────────────────────────────────────────
TOTAL command-to-motion                                       = ≤48ms
Acceptable: human vestibular latency threshold ~100ms → OK with 2× margin
```

### IF-05: MECH ↔ SW — Projection Surface (SS2-M → SS2-SW)

| IF-ID | From | To | Type | Specification | Constraint | Owner | Priority |
|-------|------|----|------|---------------|-----------|-------|----------|
| IF-05a | MECH | SW | Geometric | Screen geometry: curved, 4m×2m, radius TBD | Warp mesh in Unity must match physical curvature | MECH provides dims, SW compensates | D |
| IF-05b | ELEC | SW | Visual | Edge-blend: 3-projector overlap zones ≥10% | Blend quality: ≤2% luminance variation across seam | **ELEC** (CEO 1c) | D |
| IF-05c | MECH | ELEC | Physical | Projector mount: ceiling/shelf, 3× positions | Throw ratio 0.8-1.0, keystone ≤±15° | ELEC | D |

---

## INTERFACE CRITICALITY RANKING

| Rank | IF-ID | Why Critical | Consequence if Wrong |
|:----:|-------|-------------|---------------------|
| 1 | **IF-02a-c** | Latency chain: encoder→render→projector = 50ms budget | Exceeding → negative training transfer (SC-2 violated) |
| 2 | **IF-04a** | Wave sync: command→motion = vestibular fidelity | Lag → motion sickness, poor sea state simulation |
| 3 | **IF-01a** | Encoder mounting precision → aim accuracy | Mechanical play → angular error → wrong scoring |
| 4 | **IF-05b** | Edge-blend → visual immersion | Visible seams → breaks immersion, distraction |
| 5 | **IF-03d** | E-stop chain → safety compliance | Slow E-stop → safety violation (Sa-02) |

---

## UNRESOLVED INTERFACES (must close before Gate 2)

| # | Interface | What's Missing | Impact | Action |
|---|-----------|---------------|--------|--------|
| 1 | IF-01a | Exact encoder model not selected → mounting dims TBD | Cradle CNC drawing blocked | Select encoder in Phase 3 embodiment |
| 2 | IF-05a | Screen curvature radius not specified | Warp mesh calibration impossible | Decide in Phase 3 layout (BA) |
| 3 | IF-02e | Solenoid peak current unknown → driver circuit TBD | Recoil force depends on this | **Physical gate 2026-05-07 will resolve** |
| 4 | IF-04b | Feedback packet format not defined | Latency monitor (T-flow) can't be implemented | Define in Phase 3 integration (BC) |

---

## CEO CONFLICT RESOLUTIONS (from SA2)

| # | Conflict | CEO Decision | Interface Impact |
|---|---------|-------------|-----------------|
| 1a | Wave sync latency owner | **SHARED** — SW ≤12ms, ELEC ≤6ms, MECH ≤30ms | IF-04a: contract specifies budget per domain |
| 1b | Encoder accuracy owner | **SHARED** — MECH bearing ≤0.05°, ELEC encoder ≤0.05° | IF-01a: total ±0.1° = MECH 0.05° + ELEC 0.05° |
| 1c | Edge-blend owner | **ELEC** — projector alignment | IF-05b: ELEC owns blend quality metric |

---

*Next: SA4 (Domain Budgets) → CEO checkpoint*
