---
project: VN-XUONG-UUV
phase: 2
type: function-structure
document: "006"
version: 2.0
created: 2026-03-06
updated: 2026-03-07
status: AI-DRAFT
data_confidence: MEDIUM (40% L2 user-confirmed, 30% L4 reference designs, 30% L5 assumptions)
changelog:
  - version: v1.0
    date: 2026-03-06
    author: AI (T2)
    changes: "Initial function structure — 6 main functions, 43 sub-functions"
  - version: v1.1
    date: 2026-03-06
    author: AI (T2)
    changes: "Added F5 (Tether Management, 9 sub-functions) and F6 (UUV Control, 6 sub-functions)"
  - version: v2.0
    date: 2026-03-07
    author: AI (T2)
    changes: "Phase 2 update: All PD decisions resolved. F5 collapsed from 9→1 sub-function (cable drum inside UUV). M3 hydraulic eliminated (electric LARS). E2 updated for genset+VFD. Section 8 decisions resolved. Section 9 binding constraint updated. Total: 6 main functions, 36 active sub-functions."
---

# VN-XUONG-UUV — Doc 006: Function Structure v2.0

[AI-DRAFT v1]

## 1. Overall Function

> Triển khai và thu hồi 1 UUV tethered (550 kg, L=5000mm, D=400mm) trong điều kiện biển Sea State 3, sử dụng xuồng nhôm chuyên dụng 8m với hệ thống LARS điện, ekip 3 người, đảm bảo an toàn UUV và thủy thủ.

---

## 2. System Boundary

```
                    SYSTEM BOUNDARY: VN-XUONG-UUV
    +--------------------------------------------------+
    |                                                  |
    |   8m Aluminum 5083 Vessel + Electric LARS +      |
    |   Twin Outboard + Genset + Cable Guide +         |
    |   UUV Controller Station                         |
    |                                                  |
    +--------------------------------------------------+
         ^              ^              ^            ^
    Mother Ship     UUV (550kg)    Sea State     Crew (3)
    (tow, crane     (customer       (environment) Helmsman
     UUV only)      furnished)                    LARS op
                                                  UUV op

INPUTS:                              OUTPUTS:
- UUV (stowed on mother ship)        - UUV deployed (tethered in water)
- Fuel (diesel — outboards + genset) - UUV recovered (secured on vessel)
- Crew commands (3 roles)            - UUV telemetry data (via tether)
- Environmental data (sea state)     - Waste heat, exhaust, noise
- Tow force (from mother ship)       - Towing loads on mother ship
- Tether cable (from UUV drum)       - Cable routed stern→controller
```

---

## 3. Main Flow Decomposition (M/E/S)

### Material Flows (M)

| Flow | Description | v2.0 Change |
|------|-------------|-------------|
| **M1** | UUV (550 kg solid body) — stow → launch → recover → stow | — |
| **M2** | Fuel (diesel) — tank → outboards + genset → exhaust | — |
| ~~M3~~ | ~~Hydraulic fluid~~ | **ELIMINATED** — Electric LARS (PD-2) |
| **M4** | Seawater — ingress management (bilge), washdown | — |
| **M5** | Towline — mother ship → bridle → vessel | — |
| **M6** | Tether cable — UUV drum → stern exit → deck clips → controller | **CHANGED**: cable drum INSIDE UUV, vessel only has ~4-5m routing |

### Energy Flows (E)

| Flow | Description | v2.0 Change |
|------|-------------|-------------|
| **E1** | Mechanical energy — twin outboard (2x40-60 HP) → thrust | **Updated**: twin outboard (PD-1) |
| **E2** | Electrical energy — genset (5-8 kW) → VFD → winch (10 kN) + linear actuator (ramp tilt) | **CHANGED**: hydraulic → electric (PD-2) |
| **E3** | Electrical energy — 24 VDC battery bank → nav, comms, sensors, lighting | — |
| **E4** | Gravitational PE — UUV on ramp (stowed) ↔ UUV in water | — |
| **E5** | Wave energy — sea state → vessel motion → LARS loads | — |
| ~~E6~~ | ~~Drum motor energy~~ | **ELIMINATED** — drum inside UUV |

### Signal Flows (S)

| Flow | Description | v2.0 Change |
|------|-------------|-------------|
| **S1** | Crew commands — helm, winch VFD control, ramp actuator, UUV control | **Updated**: VFD control |
| **S2** | Navigation data — GPS position, speed, heading | — |
| **S3** | LARS status — winch load, cradle position, ramp angle | — |
| **S4** | Communication — VHF to mother ship, inter-crew | — |
| **S5** | UUV control signals — via tether cable (commands down, telemetry up) | — |
| **S6** | Visual — direct line of sight to UUV during recovery approach | — |
| ~~S7~~ | ~~Tether status — cable length, tension, drum speed~~ | **ELIMINATED** — managed by UUV internally |

---

## 4. Function Structure — Level 1

```
OVERALL FUNCTION: Deploy & Recover 1 Tethered UUV (550 kg) in SS 3
==================================================================

M2 (fuel) -------+                              +---> UUV deployed (tethered)
E5 (waves) ------+                              |
S1 (crew x3) ----+    +--------------------+    +---> UUV recovered & secured
M1 (UUV) --------+--->|                    |----|
M5 (towline) ----+    |   VN-XUONG-UUV     |    +---> Telemetry data
S2 (GPS) --------+    |   8m / elec LARS   |    +---> Tow loads
M6 (tether) -----+    +--------------------+    +---> Exhaust, bilge
                           |
         +---------+-------+--------+-----------+
         v         v                v            v
   +---------+ +---------+ +----------+ +----------+
   |F1 TRANSIT| |F2 LAUNCH| |F3 RECOVER| |F4 SUPPORT|
   |& POSITION| |   UUV   | |   UUV    | |   OPS    |
   +---------+ +---------+ +----------+ +----------+
         |         |          |             |
         |    +----+          |        +----+----+
         |    |               |        |         |
         v    v               v        v         v
       F1.1-F1.5  F2.1-F2.7  F3.1-F3.8  F4.1-F4.8  F5.1  F6.1-F6.6
                                         (support)  (cable (UUV
                                                    route) control)
```

---

## 5. Function Structure — Level 2

### F1: TRANSIT & POSITION VESSEL (5 sub-functions — unchanged)

| ID | Sub-Function | Working Principle (v2.0) | Req. Trace |
|----|-------------|------------------------|------------|
| F1.1 | Tow alongside mother ship | Bridle + towline + quick-release | OP-11, F-05, SA-06 |
| F1.2 | Self-transit to operating area | **Twin outboard 2x40-60 HP** [PD-1] | OP-12, OP-13 |
| F1.3 | Navigate and determine position | GPS + compass + speed log | S-01, S-02 |
| F1.4 | Station-keep during LARS ops | Manual helm (twin OB differential thrust) | OP-01, OP-02 |
| F1.5 | Maintain stability | Hull beam ≥2.6m + GM ≥ 0.5m [Doc 009] | F-07, F-08 |

### F2: LAUNCH UUV (7 sub-functions — minor updates)

| ID | Sub-Function | Working Principle (v2.0) | Req. Trace |
|----|-------------|------------------------|------------|
| F2.1 | Receive UUV from mother ship crane | Crane SWL 2.5t, sling ≥750 kg | ER-04, HC-2 |
| F2.2 | Secure UUV in launch cradle | UHMWPE saddle + toggle clamps ×4 | F-04, G-08 |
| F2.3 | Prepare LARS for launch | **Electric winch VFD + genset start** [PD-2] | OP-05, S-03 |
| F2.4 | Control UUV descent on ramp | **Winch 10 kN VFD speed control** [PD-2] | K-02, G-04 |
| F2.5 | Enter UUV into water | Stern ramp 15° (adj. 12-18°) [PD-2] | F-03, M-02 |
| F2.6 | Release UUV from cradle | Manual release (crew) | OP-04 |
| F2.7 | Retract cradle to deck | **Permanent pendant winch** [PD-3] | — |

### F3: RECOVER UUV (8 sub-functions — binding constraint)

| ID | Sub-Function | Working Principle (v2.0) | Req. Trace |
|----|-------------|------------------------|------------|
| F3.1 | Acquire UUV position | Tether bearing + visual | S-03, ER-02 |
| F3.2 | Maneuver vessel for approach | Twin OB differential thrust | OP-03, F1.4 |
| F3.3 | Guide UUV into V-funnel | Passive V-funnel (UHMWPE lined) | G-06, G-07, OP-06 |
| F3.4 | Capture UUV in cradle | Cradle on rails at funnel exit | QC-03, M-02 |
| F3.5 | Attach winch to cradle | **Permanent pendant (always attached)** [PD-3] | F-01, SA-02 |
| F3.6 | Winch UUV up ramp | **Electric winch 10 kN VFD** [PD-2] | K-01, F-01 |
| F3.7 | Secure UUV in stowed position | Toggle clamps ×4 | F-04, OP-03 |
| F3.8 | Abort recovery (if needed) | Tether maintains connection — SAFER | SA-07, OP-06 |

### F4: SUPPORT OPERATIONS (8 sub-functions — power architecture updated)

| ID | Sub-Function | Working Principle (v2.0) | Req. Trace |
|----|-------------|------------------------|------------|
| F4.1 | Generate propulsion power | **Twin outboard 2x40-60 HP diesel** [PD-1] | E-01 |
| F4.2 | Generate LARS power | **Genset 5-8 kW (separate from propulsion)** [PD-2] | E-02 |
| F4.3 | Distribute electrical power | 24 VDC battery bank + distribution panel | E-03 |
| F4.4 | Communicate with mother ship | VHF radio | S-06 |
| F4.5 | Monitor LARS status | Load cell + VFD display + ramp angle indicator | S-07 |
| F4.6 | Provide crew safety | PFDs ×3, harness points, non-skid | SA-01 to SA-08 |
| F4.7 | Manage bilge water | Electric bilge pump + scuppers | SA-08 |
| F4.8 | Protect against corrosion | Marine paint + sacrificial anodes | M-03, MA-04 |

### F5: TETHER MANAGEMENT (REDUCED: 9 → 1 active sub-function)

> **v2.0 CHANGE**: Cable drum is INSIDE UUV [L2]. Vessel has NO drum, NO tension monitoring, NO pay-out/reel-in mechanism. F5 reduces to cable routing on deck only (~4-5m from stern exit to controller).

| ID | Sub-Function | Working Principle (v2.0) | Status |
|----|-------------|------------------------|--------|
| **F5.1** | **Route cable on deck** | Stern fairlead + deck clips (~4-5m) → controller | **ACTIVE** |
| ~~F5.2~~ | ~~Pay out cable during launch~~ | — | **ELIMINATED** — drum in UUV |
| ~~F5.3~~ | ~~Pay out cable during mission~~ | — | **ELIMINATED** |
| ~~F5.4~~ | ~~Reel in cable during recovery~~ | — | **ELIMINATED** |
| ~~F5.5~~ | ~~Route cable through fairlead~~ | Merged into F5.1 | **MERGED** |
| ~~F5.6~~ | ~~Monitor cable tension~~ | — | **ELIMINATED** — UUV manages |
| ~~F5.7~~ | ~~Monitor cable length~~ | — | **ELIMINATED** — UUV manages |
| ~~F5.8~~ | ~~Brake/hold cable~~ | — | **ELIMINATED** |
| ~~F5.9~~ | ~~Prevent cable fouling~~ | — | **ELIMINATED** |

### F6: UUV CONTROL (6 sub-functions — unchanged)

| ID | Sub-Function | Working Principle (v2.0) | Req. Trace |
|----|-------------|------------------------|------------|
| F6.1 | Mount controller on vessel | Suitcase on mounting plate/bracket | G-13, ER-05 |
| F6.2 | Supply power to controller | **Genset 220VAC outlet** [PD-2] or 24VDC | E-05 |
| F6.3 | Connect controller to tether | Cable from F5.1 routing → controller connector | S-09 |
| F6.4 | Transmit commands to UUV | Via tether cable (OEM system) | OP-18 |
| F6.5 | Receive telemetry from UUV | Via tether cable (OEM system) | OP-18 |
| F6.6 | Provide operator workspace | Sheltered, seated position with rain cover | ER-05, ER-06 |

---

## 6. Function Count Summary

| Category | v1.1 | v2.0 | Change |
|----------|------|------|--------|
| Main functions | 6 | 6 | — |
| F1 sub-functions | 5 | 5 | — |
| F2 sub-functions | 7 | 7 | WP updated |
| F3 sub-functions | 8 | 8 | WP updated |
| F4 sub-functions | 8 | 8 | F4.1/F4.2 split (prop + LARS power) |
| F5 sub-functions | 9 | **1** | **-8 eliminated** (drum in UUV) |
| F6 sub-functions | 6 | 6 | WP updated |
| **Active sub-functions** | **43** | **35** | **-8 net** |

---

## 7. Function Interaction Matrix (v2.0)

| | F1 Transit | F2 Launch | F3 Recover | F4 Support | F5 Cable | F6 UUV Ctl |
|---|:---------:|:---------:|:----------:|:----------:|:--------:|:----------:|
| **F1** | — | Seq | Coupled | E1 | — | — |
| **F2** | After F1 | — | Seq | E2 | — | Setup |
| **F3** | F1.4 | After F2 | — | E2, S3 | — | Active |
| **F4** | Cont. | Cont. | Cont. | — | — | E (power) |
| **F5** | — | — | — | — | — | Signal path |
| **F6** | — | — | — | E (power) | Signal | — |

**v2.0 Changes to Couplings:**
1. ~~F5 + F2/F3 (tether-LARS sync)~~ — **ELIMINATED** (drum in UUV, no sync needed)
2. ~~F5 + F4 (drum power)~~ — **ELIMINATED** (no drum on vessel)
3. F5 reduced to passive cable routing — minimal coupling with other functions
4. **F3 remains primary binding constraint** (recovery in sea state)

---

## 8. Design Decisions — ALL RESOLVED

| # | Decision | v1.1 Status | v2.0 Resolution |
|---|----------|-------------|-----------------|
| PD-1 | Propulsion type | TBD | **Twin outboard 2x40-60 HP** [L2] |
| PD-2 | LARS power | TBD | **Electric: winch VFD 10 kN + linear actuator + genset 5-8 kW** |
| PD-3 | Winch line attachment | TBD | **Permanent pendant** (always attached to cradle) [L2] |
| PD-4 | Cable drum location | TBD | **ELIMINATED** — drum inside UUV |
| PD-5 | Cable routing vs LARS | TBD | **ELIMINATED** — only deck clips, ~4-5m |
| PD-6 | TMS-LARS sync | TBD | **ELIMINATED** — UUV manages cable internally |
| PD-7 | Crew size and roles | TBD | **3 crew**: Helmsman / LARS op / UUV op [L2] |

---

## 9. Critical Function Analysis (v2.0)

### 9.1 Binding Constraint: F3 (Recovery) — CONFIRMED

F3 remains the binding constraint because:
- Highest dynamic loading (wave forces during capture)
- Tightest coupling (station-keeping + capture + winching)
- Most failure modes (miss, collision, overload)
- Highest consequence of failure (UUV $100K+)

**v2.0 Update:** Tether simplifies F3.1 (acquire) and F3.2 (approach) but does NOT simplify F3.3 (funnel guidance) or F3.6 (winch up ramp) — these remain the hard problems.

### 9.2 Eliminated Constraints

| Former Constraint | Why Eliminated |
|-------------------|---------------|
| F5 Tether-LARS sync | Cable drum inside UUV — no sync needed |
| Cable drum weight/volume | Zero impact on vessel — drum not on vessel |
| TMS power architecture | No TMS on vessel |
| Hydraulic system complexity | Electric LARS (PD-2) |
| Manual crew hook at stern | Permanent pendant (PD-3) — crew never touches hook |

### 9.3 Remaining Phase 2/3 Focus Areas

1. **V-funnel geometry** (F3.3) — capture rate ≥80% at SS 2, ≥60% at SS 3
2. **Electric LARS sizing** (F2.4/F3.6) — winch 10 kN + genset 5-8 kW + VFD control
3. **Stern trim management** (F1.5) — UUV 550 kg at stern during recovery (Doc 009: +17cm trim OK)
4. **Ramp angle optimization** (F2.5) — 15° baseline, adjustable 12-18°
5. **Controller integration** (F6.1-F6.3) — pending ICD from OEM

---

## 10. References

| Document | Location |
|----------|----------|
| Doc 006 v1.1 (Phase 1) | `Phase1-Task/006_Function_Structure_v1.0.md` |
| Doc 007 Morphological Matrix | `Phase2-Concept/007_Morphological_Matrix_v0.1.md` |
| Doc 008 Weight Estimate | `Phase2-Concept/008_Weight_Estimate_v2.md` |
| Doc 009 Stability Check | `Phase2-Concept/009_Stability_Check_Preliminary_v1.0.md` |

---

*Doc 006 Function Structure v2.0 | VN-XUONG-UUV Phase 2 Conceptual Design | COD: Offload (O2) — AI updated, human verify*
