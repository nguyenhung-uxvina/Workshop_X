---
project: VN-XUONG-UUV
phase: 1
type: function-structure
document: "006"
version: 1.1
created: 2026-03-06
updated: 2026-03-06
status: draft
changelog: "v1.1 — Added F5 (Tether Management, 9 sub-functions) and F6 (UUV Control, 6 sub-functions) for tethered UUV with 25km cable and suitcase controller. Updated interaction matrix, mission sequence, critical analysis."
data_confidence: MEDIUM (30% L2 user-confirmed constraints, 40% L4 reference LARS designs, 30% L5 functional decomposition assumptions)
---

# VN-XUONG-UUV — Doc 006: Function Structure v1.0

## 1. Overall Function

**Overall Function Statement:**

> Triển khai và thu hồi 1 UUV (550 kg, L=5000mm, D=400mm) trong điều kiện biển Sea State 3, sử dụng xuồng chuyên dụng 8m, với 3 thủy thủ, đảm bảo an toàn UUV và thủy thủ.

**Simplified (English):**

> Deploy and recover one UUV (550 kg) in Sea State 3 conditions using a dedicated 8m vessel with 3 crew, ensuring zero UUV damage and crew safety.

---

## 2. System Boundary

```
                    SYSTEM BOUNDARY: VN-XUONG-UUV
    ┌──────────────────────────────────────────────────┐
    │                                                  │
    │   8m Aluminum Vessel + LARS + Propulsion +       │
    │   Navigation + Towing System + Crew Station      │
    │                                                  │
    └──────────────────────────────────────────────────┘
         ↑              ↑              ↑            ↑
    Mother Ship     UUV (550kg)    Sea State     Crew (3)
    (tow, crane)    (customer       (environment) (operators)
                     furnished)

INPUTS:                              OUTPUTS:
- UUV (stowed on mother ship)        - UUV deployed (autonomous in water)
- Fuel (diesel)                      - UUV recovered (secured on vessel)
- Electrical power (generator/alt)   - Operational data (position, status)
- Crew commands                      - Waste heat, exhaust, noise
- Environmental data (sea state)     - Towing loads on mother ship
- Tow force (from mother ship)
```

---

## 3. Main Flow Decomposition (M/E/S)

### Material Flows (M)
- **M1:** UUV (550 kg solid body) — stow → launch → recover → stow
- **M2:** Fuel (diesel) — tank → engine → exhaust
- **M3:** Hydraulic fluid (if hydraulic LARS) — reservoir → pump → actuators → reservoir
- **M4:** Seawater — ingress management (bilge), cooling, washdown
- **M5:** Towline — mother ship → bridle → vessel
- **M6:** Tether cable (up to 25 km) — drum → fairlead → UUV (continuous physical link)

### Energy Flows (E)
- **E1:** Mechanical energy — engine → propeller → thrust
- **E2:** Mechanical energy — engine/motor → hydraulic pump → winch/ramp actuators
- **E3:** Electrical energy — alternator/generator → navigation, comms, sensors, lighting
- **E4:** Gravitational PE — UUV on ramp (stowed) → UUV in water (launched)
- **E5:** Wave energy — sea state → vessel motion → LARS loads

### Signal Flows (S)
- **S1:** Crew commands — helm, winch control, LARS operation, UUV control
- **S2:** Navigation data — GPS position, speed, heading
- **S3:** LARS status — winch load, cradle position, funnel alignment
- **S4:** Communication — VHF to mother ship, inter-crew
- **S5:** UUV control signals — via tether cable (commands down, data/telemetry up)
- **S6:** Visual — direct line of sight to UUV during recovery approach
- **S7:** Tether status — cable length paid out, tension, drum speed

---

## 4. Function Structure — Level 1 (Main Functions)

```
┌─────────────────────────────────────────────────────────────────────┐
│                         OVERALL FUNCTION                            │
│   Deploy and recover 1 tethered UUV in SS 3 from 8m vessel         │
│   with real-time UUV control via tether (25km range)                │
└──────┬──────────┬──────────┬──────────┬──────────┬──────────────────┘
       │          │          │          │          │
 ┌─────▼─────┐ ┌─▼────────┐ ┌▼────────┐ ┌▼────────┐ ┌▼──────────────┐
 │F1: TRANSIT│ │F2: LAUNCH│ │F3: RECOV│ │F5:TETHER│ │F4: SUPPORT    │
 │& POSITION │ │  UUV     │ │  UUV    │ │ MGMT   │ │ OPS + CONTROL │
 └─────┬─────┘ └─┬────────┘ └┬────────┘ └┬────────┘ └┬──────────────┘
       │         │           │            │            │
  ┌────▼───┐  ┌──▼──┐   ┌───▼──┐   ┌────▼───┐   ┌───▼───┐
  │Navigate│  │Prep │   │Acquire│   │Pay-out │   │Power  │
  │Propel  │  │Deploy│   │Capture│   │Reel-in │   │Safety │
  │Tow     │  │Enter │   │Ingest │   │Monitor │   │Comms  │
  │Station │  │Release│  │Secure │   │Tension │   │UUV Ctl│
  └────────┘  └──────┘   └──────┘   └────────┘   └───────┘
```

---

## 5. Function Structure — Level 2 (Sub-Functions)

### F1: TRANSIT & POSITION VESSEL

Purpose: Move vessel to operating area and maintain position during LARS operations.

| ID | Sub-Function | Input Flows | Output Flows | Req. Trace |
|----|-------------|-------------|-------------|------------|
| F1.1 | **Tow alongside mother ship** | M5 (towline), E5 (waves) | Vessel position (alongside) | OP-11, F-05, SA-06 |
| F1.2 | **Self-transit to operating area** | M2 (fuel), E1 (thrust) | Vessel at position | OP-12, OP-13, E-01, E-04 |
| F1.3 | **Navigate and determine position** | S2 (GPS), S1 (crew) | Position, speed, heading data | S-01, S-02 |
| F1.4 | **Station-keep during LARS ops** | E1 (thrust), S1 (crew) | Stable platform for L/R | OP-01, OP-02, F-07 |
| F1.5 | **Maintain stability** | E5 (waves), hull geometry | GM, roll/pitch within limits | F-07, F-08, G-11 |

### F2: LAUNCH UUV

Purpose: Deploy UUV from stowed position on vessel into water, ready for autonomous mission.

| ID | Sub-Function | Input Flows | Output Flows | Req. Trace |
|----|-------------|-------------|-------------|------------|
| F2.1 | **Receive UUV from mother ship crane** | M1 (UUV, 550 kg), crane load | UUV in deck cradle | ER-04, HC-2 |
| F2.2 | **Secure UUV in launch cradle** | M1 (UUV), S1 (crew) | UUV clamped, ready | F-04, G-08, G-09 |
| F2.3 | **Prepare LARS for launch** | S1 (crew), E2 (LARS power) | LARS in launch config | OP-05, S-03 |
| F2.4 | **Control UUV descent on ramp** | E2 (winch), E4 (gravity) | UUV sliding down ramp | K-02, G-04, G-05 |
| F2.5 | **Enter UUV into water** | M1 (UUV), E4 (gravity) | UUV waterborne | F-03, M-02 |
| F2.6 | **Release UUV from cradle** | S1 (crew command) | UUV free-swimming | OP-04 |
| F2.7 | **Retract cradle to deck** | E2 (winch) | Cradle stowed | — |

### F3: RECOVER UUV

Purpose: Capture surfaced UUV, bring aboard, and secure in cradle. **This is the binding constraint function.**

| ID | Sub-Function | Input Flows | Output Flows | Req. Trace |
|----|-------------|-------------|-------------|------------|
| F3.1 | **Acquire UUV position** | S5 (USBL, if available), S6 (visual) | UUV bearing/range | S-03, ER-02 |
| F3.2 | **Maneuver vessel for approach** | E1 (thrust), S1 (crew), S2 (GPS) | Vessel stern near UUV | OP-03, F1.4 |
| F3.3 | **Guide UUV into V-funnel** | S6 (visual), S1 (crew) | UUV entering funnel | G-06, G-07, OP-06, OP-07 |
| F3.4 | **Capture UUV in cradle** | M1 (UUV), funnel geometry | UUV seated in cradle | QC-03, M-02 |
| F3.5 | **Attach winch line to UUV/cradle** | S1 (crew), M (winch line) | Mechanical connection | F-01, SA-02 |
| F3.6 | **Winch UUV up ramp** | E2 (winch power), M1 (UUV) | UUV ascending ramp | K-01, F-01, F-02 |
| F3.7 | **Secure UUV in stowed position** | S1 (crew), F-04 (clamps) | UUV secured for transit | F-04, OP-03 |
| F3.8 | **Abort recovery (if needed)** | S1 (crew decision) | UUV released, vessel retreats | SA-07, OP-06 |

### F4: SUPPORT OPERATIONS

Purpose: Provide power, safety, communications, and maintenance support for all operations.

| ID | Sub-Function | Input Flows | Output Flows | Req. Trace |
|----|-------------|-------------|-------------|------------|
| F4.1 | **Generate mechanical power** | M2 (fuel) | E1 (thrust), E2 (LARS), E3 (elec) | E-01, E-02, E-03 |
| F4.2 | **Distribute electrical power** | E3 (from alternator) | Power to nav, comms, LARS sensors | E-03, S-01 to S-07 |
| F4.3 | **Communicate with mother ship** | S4 (VHF) | Coordination data | S-06 |
| F4.4 | **Monitor LARS status** | S3 (load cell, position) | Overload alarm, status display | S-07, ER-02 |
| F4.5 | **Provide crew safety** | Safety equipment | Protected crew | SA-01 to SA-08 |
| F4.6 | **Manage bilge water** | M4 (seawater ingress) | Water removed | SA-08 |
| F4.7 | **Protect against corrosion** | M-03 (coatings), MA-04 (CP) | Extended service life | M-03, M-04, MA-02, MA-04 |
| F4.8 | **Enable maintenance access** | Tool set, standard parts | Components serviced | MA-01 to MA-05, PR-03 |

### F5: TETHER MANAGEMENT

Purpose: Pay out, reel in, and monitor the tether cable (up to 25 km) connecting vessel to UUV throughout all operations. **Tightly coupled with F2, F3, and F4.**

| ID | Sub-Function | Input Flows | Output Flows | Req. Trace |
|----|-------------|-------------|-------------|------------|
| F5.1 | **Store tether on drum** | M6 (cable, 25 km) | Cable ready for deployment | G-12, OP-17 |
| F5.2 | **Pay out cable during launch** | E6 (drum motor), S1 (crew) | Cable synchronized with UUV descent | K-05, OP-15 |
| F5.3 | **Pay out cable during UUV mission** | E6 (drum motor), S5 (UUV commands) | Cable at operating length | K-05, OP-17 |
| F5.4 | **Reel in cable during recovery** | E6 (drum motor), S1 (crew) | Cable synchronized with LARS winch | K-06, OP-16 |
| F5.5 | **Route cable through fairlead** | M6 (cable), G-14 (fairlead) | Protected cable path | G-14, cable protection |
| F5.6 | **Monitor cable tension** | S7 (tension sensor) | Tension display + alarm | F-09, S-11 |
| F5.7 | **Monitor cable length** | S7 (counter) | Length display | S-10 |
| F5.8 | **Brake/hold cable** | F-10 (brake force) | Cable stationary | F-10, safety |
| F5.9 | **Prevent cable fouling** | Cable guide, level wind | Orderly drum winding | TMS design |

### F6: UUV CONTROL (from vessel)

Purpose: Provide real-time operator control of UUV via tether, using suitcase controller on the LARS vessel.

| ID | Sub-Function | Input Flows | Output Flows | Req. Trace |
|----|-------------|-------------|-------------|------------|
| F6.1 | **Mount controller on vessel** | S-08 (suitcase unit) | Controller secured, accessible | G-13, ER-05, ER-06 |
| F6.2 | **Supply power to controller** | E-05 (220VAC/24VDC) | Controller powered | E-05 |
| F6.3 | **Connect controller to tether** | S-09 (signal cable) | Signal path established | S-09 |
| F6.4 | **Transmit commands to UUV** | S1 (operator), S5 (tether) | UUV control signals | OP-18, S-09 |
| F6.5 | **Receive telemetry from UUV** | S5 (tether return data) | UUV status display | OP-18, S-09 |
| F6.6 | **Provide operator workspace** | ER-05, ER-06 | Sheltered, seated position | ER-05, ER-06 |

---

## 6. Function Interaction Matrix

Shows coupling between main functions:

| | F1 Transit | F2 Launch | F3 Recover | F4 Support | F5 Tether | F6 UUV Ctl |
|---|:---------:|:---------:|:----------:|:----------:|:---------:|:----------:|
| **F1 Transit** | — | Seq | Coupled | E1 | Coupled | — |
| **F2 Launch** | After F1 | — | Seq | E2 | **Sync** | Setup |
| **F3 Recover** | F1.4 | After F2 | — | E2, S3 | **Sync** | Active |
| **F4 Support** | Cont. | Cont. | Cont. | — | E6 | E5 |
| **F5 Tether** | During F1 | **Sync** | **Sync** | E6 | — | Signal path |
| **F6 UUV Ctl** | — | — | — | E5 | Signal | — |

**Critical Couplings:**
1. **F1.4 + F3** (station-keep + recovery) — vessel must hold position during recovery
2. **F5 + F2/F3** (tether + launch/recovery) — cable pay-out/reel-in MUST be synchronized with LARS operations. If tether lags behind LARS winch → cable fouling, UUV damage. This is a NEW binding coupling introduced by the tethered design.
3. **F5 + F6** (tether + UUV control) — tether carries both physical link AND signal path. Cable damage = loss of UUV control.

---

## 7. Functional Flow — Mission Sequence

```
MISSION SEQUENCE (single UUV sortie)
=====================================

Phase A: TRANSIT TO OPS AREA
  F1.1 Tow alongside → F1.2 Self-transit → F1.3 Navigate
  Duration: variable (depends on distance)

Phase B: PREPARE & LAUNCH
  F6.1 Mount controller → F6.2 Power up → F6.3 Connect to tether
  F2.1 Receive UUV from crane → F2.2 Secure in cradle
  → F2.3 Prepare LARS → F5.2 Begin cable pay-out (SYNC)
  → F2.4 Controlled descent → F2.5 Water entry
  → F2.6 Release UUV → F5.3 Continue cable pay-out
  → F2.7 Retract cradle
  Duration: <= 15 min (OP-04) + 20 min setup (OP-05)

Phase C: UUV MISSION (operator controls UUV from vessel)
  F6.4 Transmit commands via tether → F6.5 Receive telemetry
  F5.3 Cable paying out as UUV moves (up to 25 km)
  F5.6/F5.7 Monitor tension + length continuously
  F1.4 Station-keep or F1.2 transit (tether angle management)
  Duration: depends on mission (hours)

Phase D: RECOVER
  F5.4 Begin cable reel-in (SYNC with F3)
  F3.1 Acquire position (tether gives bearing — EASIER than autonomous UUV)
  → F3.2 Approach (UUV guided back via tether control)
  → F3.3 Guide into funnel → F3.4 Capture in cradle
  → F3.5 Attach winch → F3.6 Winch up ramp (F5.4 continues reel-in SYNC)
  → F3.7 Secure UUV + disconnect tether
  Duration: <= 30 min (OP-03)
  [F3.8 Abort available — tether maintains connection even if capture fails]

Phase E: RETURN
  F1.2 Self-transit → F1.1 Tow alongside mother ship
  → F2.1 (reverse: transfer UUV back to mother ship)
```

---

## 8. Sub-Function to Working Principle Mapping (Preliminary)

This maps sub-functions to candidate physical solutions. Full evaluation in Phase 2.

| Sub-Function | Candidate Working Principles | Phase 2 Decision |
|-------------|------------------------------|-----------------|
| F1.1 Tow | Bridle + towline + quick-release | Standard |
| F1.2 Self-transit | Inboard diesel / Outboard motor | TBD — concept selection |
| F1.3 Navigate | GPS receiver + speed log | Standard |
| F1.4 Station-keep | Manual helm (crew) | Standard for prototype |
| F1.5 Stability | Bilge keels + hull beam + ballast | Hull design |
| F2.2 Secure in cradle | UHMWPE saddle + toggle clamps | Standard |
| F2.4 Controlled descent | Electric/hydraulic winch + brake | TBD — concept selection |
| F2.5 Water entry | Stern ramp at 15-20 deg | Standard |
| F3.3 Guide into funnel | Passive V-funnel (UHMWPE lined) | Standard |
| F3.4 Capture | Cradle on rails at funnel exit | Standard |
| F3.5 Attach winch | Manual hook (crew at stern) / auto-latch | TBD — concept selection |
| F3.6 Winch up | Electric/hydraulic winch | TBD — concept selection |
| F4.1 Generate power | Diesel engine (propulsion) + PTO or separate genset | TBD — concept selection |
| F4.4 Monitor LARS | Load cell + display at helm | Standard |

| F5.1 Store cable | Cable drum (level-wind) | Standard industrial |
| F5.2/F5.3 Pay out | Electric drum motor with brake | TBD — sizing |
| F5.4 Reel in | Same drum motor, reversible | TBD — sync with LARS winch |
| F5.5 Route cable | Stern fairlead (smooth radius) | Standard |
| F5.6 Monitor tension | Load cell on fairlead | Standard |
| F6.1 Mount controller | Suitcase on mounting plate | Custom bracket |
| F6.2 Power controller | Shore-type outlet (220VAC) or 24VDC | TBD — from OEM spec |
| F6.4/F6.5 UUV control | Via tether cable (OEM system) | OEM furnished |

**Key Phase 2 Decisions (from function structure):**
1. Propulsion type: inboard diesel vs. outboard
2. LARS power: hydraulic (PTO from engine) vs. electric (separate motor)
3. Winch line attachment: manual crew hook vs. auto-latch mechanism
4. F3.5 crew exposure: if manual hook, crew must go to stern (conflicts with SA-02)
5. **Cable drum location:** foredeck vs. midship vs. aft (weight distribution critical)
6. **Cable routing with LARS:** cable and LARS winch line on same ramp? Separate path?
7. **TMS-LARS synchronization:** mechanical linkage vs. electronic speed matching

---

## 9. Critical Function Analysis

### 9.1 Binding Constraint Function: F3 (Recovery)

F3 is the most demanding function because:
- Highest dynamic loading (wave-induced forces on UUV during capture)
- Tightest coupling (station-keeping + capture simultaneously)
- Most failure modes (miss, collision, overload, crew exposure)
- Highest consequence of failure (UUV damage >>$100K)

**Sub-functions ranked by difficulty:**

| Rank | Sub-Function | Difficulty | Why |
|------|-------------|-----------|-----|
| 1 | F3.3 Guide into funnel | HIGH | Requires vessel positioning + sea state tolerance + funnel geometry optimization |
| 2 | F3.2 Approach maneuver | HIGH | Coupled with F1.4 station-keeping, crew skill dependent |
| 3 | F3.6 Winch up ramp | MEDIUM | Dynamic loading from waves, winch control |
| 4 | F3.1 Acquire position | MEDIUM | Without USBL = visual only, limited range/conditions |
| 5 | F3.4 Capture in cradle | MEDIUM | Depends on funnel geometry success |
| 6 | F3.5 Attach winch | LOW-MEDIUM | Standard if auto-latch; HIGH if manual crew hook |
| 7 | F3.7 Secure for transit | LOW | Standard mechanical clamping |

### 9.2 Tethered UUV Impact on Recovery (F3)

The tethered design **fundamentally changes recovery difficulty**:

| Aspect | Autonomous UUV (original assumption) | Tethered UUV (actual) |
|--------|--------------------------------------|----------------------|
| F3.1 Acquire position | Visual only (no USBL) — HARD | Tether provides bearing/range — EASY |
| F3.2 Approach | Vessel must find surfaced UUV | Operator commands UUV to return via tether |
| F3.3 Funnel guidance | UUV passive, crew must align | Operator can steer UUV into funnel |
| F3.8 Abort safety | UUV drifts free — risky | Tether maintains connection — SAFER |
| Night/low-vis (OP-10) | Very difficult without USBL | Feasible — tether provides link |

**New binding constraint shifts to F5 (Tether Management):**
- Cable synchronization with LARS winch during L/R
- Cable tension management in sea state
- Cable fouling prevention on drum and at stern
- 25 km cable weight/volume impact on vessel design

### 9.3 Phase 2 Focus Areas (from function analysis)

1. **Tether-LARS synchronization** (F5 + F2/F3) — NEW highest-leverage engineering task
2. **Cable drum sizing and placement** (F5.1, G-12) — 25 km cable = significant weight/volume
3. **V-funnel geometry with cable routing** (F3.3 + F5.5) — funnel must allow cable passage
4. **Propulsion + station-keeping authority** (F1.4 + F3.2) — must hold position during recovery
5. **LARS + TMS power architecture** (F4.1 → F2.4/F3.6/F5) — hydraulic vs. electric trade-off
6. **Crew roles** — helmsman + LARS operator + UUV controller operator (3 crew, 3 roles)

---

## 10. Function Structure Diagram (Text-Based)

```
OVERALL FUNCTION: Deploy & Recover 1 UUV (550 kg) in SS 3
═══════════════════════════════════════════════════════════

M2 (fuel) ─────┐                              ┌──→ Exhaust, heat
E5 (waves) ────┤                              │
S1 (crew) ─────┤    ┌────────────────────┐    ├──→ UUV deployed
M1 (UUV) ──────┼───→│                    │────┤
M5 (towline) ──┤    │   VN-XUONG-UUV     │    ├──→ UUV recovered & secured
S2 (GPS) ──────┤    │   SYSTEM           │    ├──→ Position/status data
S5 (tether) ───┤    │                    │    ├──→ Tow loads
E3 (shore pwr)─┘    └────────────────────┘    └──→ Bilge water

                         │
            ┌────────────┼────────────┬──────────────┐
            ▼            ▼            ▼              ▼
    ┌───────────┐ ┌───────────┐ ┌───────────┐ ┌───────────┐
    │ F1 TRANSIT│ │ F2 LAUNCH │ │ F3 RECOVER│ │ F4 SUPPORT│
    │ & POSITION│ │    UUV    │ │    UUV    │ │    OPS    │
    └─────┬─────┘ └─────┬─────┘ └─────┬─────┘ └─────┬─────┘
          │             │             │              │
    ┌─────┴─────┐ ┌─────┴─────┐ ┌─────┴─────┐ ┌─────┴─────┐
    │F1.1 Tow   │ │F2.1 Receive│ │F3.1 Acquire│ │F4.1 Power │
    │F1.2 Transit│ │F2.2 Secure │ │F3.2 Approach│ │F4.2 Elec  │
    │F1.3 Navigate│ │F2.3 Prepare│ │F3.3 Funnel │ │F4.3 Comms │
    │F1.4 Station│ │F2.4 Descend│ │F3.4 Capture│ │F4.4 Monitor│
    │F1.5 Stable │ │F2.5 Enter  │ │F3.5 Attach │ │F4.5 Safety│
    │            │ │F2.6 Release│ │F3.6 Winch  │ │F4.6 Bilge │
    │            │ │F2.7 Retract│ │F3.7 Secure │ │F4.7 Corr. │
    │            │ │            │ │F3.8 Abort  │ │F4.8 Maint.│
    └────────────┘ └────────────┘ └────────────┘ └────────────┘
```

---

## 11. References

| Document | Location |
|----------|----------|
| Project Charter v1.0 | `Phase1-Task/001_Project_Charter_v1.0.md` |
| Requirements List v1.0 | `Phase1-Task/002_Requirements_List_v1.0.md` |
| LARS Cross-Comparison | `References/LARS_Cross_Comparison.md` |
| Pahl & Beitz Ch. 5-6 | Function structure methodology |

---

*Doc 006 Function Structure v1.0 | VN-XUONG-UUV Phase 1 Task Clarification | COD: Offload*
