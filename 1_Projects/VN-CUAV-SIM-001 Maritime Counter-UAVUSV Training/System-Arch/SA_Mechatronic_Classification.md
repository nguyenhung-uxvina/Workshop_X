---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: VDI 2206:2021 — System Design
mode: RETROACTIVE
---

# SA0: MECHATRONIC CLASSIFICATION — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE (project in Phase 2, formal SA never executed)
**Standard:** VDI 2206:2021, Step SA0

---

## Product

| Field | Value |
|-------|-------|
| **Project** | VN-CUAV-SIM-001 Maritime Counter-UAV/USV Shooting Training |
| **Tier** | 1 — Prototype |
| **Current Phase** | Phase 2 — Conceptual Design (in progress) |
| **Gate 1** | APPROVED (3.70/4.0, 2026-04-08) |
| **Physical gate** | 2026-05-07 (SS1 Weapon Station PoC) |

---

## DOMAIN SCAN (from Function Structure 6-Flow v1.0)

**Source:** `Phase1-Task/VN_CUAV_SIM_001_Function_Structure_6Flow_v1.0.md`

### Mechanical Sub-Functions (14 SFs)

| SF | Description | Subsystem |
|----|------------|-----------|
| F1.1 | Đo góc xoay ngang (traverse bearing) | SS1 |
| F1.2 | Đo góc ngóc dọc (elevation bearing) | SS1 |
| F1.4 | Tạo cảm giác kháng lực xoay (friction torque) | SS1 |
| F1.5 | Tạo cảm giác cò súng (trigger feel) | SS1 |
| F1.6 | Tạo xung giật (recoil impulse) | SS1 |
| F4.1 | Nghiêng ngang roll ±12° | SS3 |
| F4.2 | Chúi dọc pitch ±8° | SS3 |
| F4.4 | Giữ xạ thủ an toàn (harness + hard stop) | SS3 |
| F7.1 | Tháo/lắp cơ khí (quick-release plate) | SS1-MWI |
| F3.1 | Curved projection screen structure | SS2-HW |
| *+ structural: cradle, platform frame, seat, screen frame* | | |
| **Count** | **14** | SS1, SS3, SS2-HW |

### Electrical/Electronic Sub-Functions (11 SFs)

| SF | Description | Subsystem |
|----|------------|-----------|
| F1.1 | Encoder azimuth (electrical transducer) | SS1 |
| F1.2 | Encoder elevation (electrical transducer) | SS1 |
| F1.3 | Trigger switch → fire event | SS1 |
| F1.6 | Solenoid driver (PWM) | SS1 |
| F1.7/F7.2-F7.3 | NFC reader + 12-pin MIL connector | SS1-MWI |
| F3.1 | 3× Projector (HDMI sink) | SS2-HW |
| F3.3 | Audio amplifier + speakers (5.1) | SS2-HW |
| F4.3 | Motion actuator driver (ESP32 PID) | SS3 |
| *+ power: UPS, PDU, cabling* | | |
| **Count** | **11** | SS1, SS2-HW, SS3 |

### Software Sub-Functions (19 SFs)

| SF | Description | Subsystem |
|----|------------|-----------|
| F2.1 | Ocean render (FFT wave, HDRP) | SS2-SW |
| F2.2 | Wave data generation (roll/pitch cmd) | SS2-SW |
| F2.3 | UAV target render + AI behavior | SS2-SW |
| F2.4 | USV target render + AI behavior | SS2-SW |
| F2.5 | Ballistic 6DOF computation | SS2-SW |
| F2.6 | Ship motion compensation in trajectory | SS2-SW |
| F2.7 | Hit detection (ray-trace scoring) | SS2-SW |
| F2.8 | Visual effects (tracer, splash, damage) | SS2-SW |
| F3.2 | Sight overlay + reticle + lead indicator | SS2-SW |
| F5.1 | Session data logging (10Hz) | SS4 |
| F5.2 | Multi-criteria scoring engine | SS4 |
| F5.3 | 3D AAR replay | SS4 |
| F5.4 | Trainee progression tracking (5-skill) | SS4 |
| F5.5 | Report export (CSV + PDF) | SS4 |
| F5.6 | Auto-recommend next scenario | SS4 |
| F6.1-F6.6 | Scenario management + instructor GUI | SS4+SS5 |
| F7.4 | Auto-configure on weapon swap | SS2-SW |
| F7.5 | Instructor confirm workflow | SS4 |
| **Count** | **19** | SS2-SW, SS4, SS5 |

---

## CLASSIFICATION

```
DOMAIN DISTRIBUTION:
  Mechanical:  14 SFs (34%) — weapon cradle, motion platform, structures
  Electrical:  11 SFs (27%) — encoders, actuator drivers, projectors, audio, NFC
  Software:    19 SFs (46%) — Unity engine, ballistic, AI, scoring, AAR, GUI

  Mech:Elec:SW ratio = 34:27:46 — SOFTWARE DOMINANT nhưng all 3 domains SIGNIFICANT
```

| Classification | Criterion | Match? |
|---------------|----------|--------|
| Single-domain | Pure mech | ❌ NO |
| Light mechatronic | 1 dominant + 1 minor | ❌ NO — all 3 significant |
| **Full mechatronic** | **2+ significant domains** | **✅ YES** |
| Cyber-physical | Mechatronic + IoT/AI | ⚠️ PARTIAL — has target AI, nhưng no IoT connectivity in PA-2 |

### DECISION: **FULL** mechatronic → SA1-SA6 required

### Retroactive Assessment

| Question | Answer |
|----------|--------|
| SA was needed? | **YES** — 3-domain product with 41 SFs, critical timing interfaces |
| SA was done? | **NO** — project went Phase 0 → Phase 1 → Phase 2 without formal SA |
| Impact of missing SA? | **MEDIUM** — function structure + morpho SS1-SS5 implicitly defined architecture, but no formal ICD v1, no domain budgets, no V&V plan |
| Shadow assumptions? | **HIGH RISK** — latency budget (50ms), power budget (2kW), encoder-to-render chain all assumed without formal cross-domain contract |

---

## Next: SA1 (System Context) → SA2 (Domain Allocation) → ...

Retroactive mode will reconstruct from existing Phase 2 deliverables (Morpho SS1-SS5, concept descriptions, TNKCT) and formalize what was implicitly assumed.
