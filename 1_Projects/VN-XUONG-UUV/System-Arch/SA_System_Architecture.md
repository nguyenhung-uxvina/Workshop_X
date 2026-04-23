---
project: VN-XUONG-UUV
type: system-arch
document: SA2
version: 1.5
created: 2026-04-14
updated: 2026-04-14
status: AI-DRAFT
mode: retro-quick
note: "v1.5 (not v1.0) — retroactive, acknowledges Phase 2 decisions already made"
---

# SA2: System Architecture — VN-XUONG-UUV

## 1. System Block Diagram

```
┌─────────────────────────────── VN-XUONG-UUV SYSTEM ──────────────────────────────┐
│                                                                                   │
│  ┌──────────────────────────────────────┐  ┌──────────────────────────────┐       │
│  │         MECH DOMAIN (Lead)           │  │      ELEC DOMAIN (Support)    │       │
│  │                                      │  │                              │       │
│  │  M1: Hull + Structure                │  │  E1: Battery Bank (24V LFP)  │       │
│  │      8m Al 5083, V-hull, frames      │  │      ~2-4 kWh, LiFePO4      │       │
│  │                                      │  │                              │       │
│  │  M2: Stern Ramp Assembly             │  │  E2: VFD Winch Drive         │       │
│  │      Al ramp 15°, hinges, liner      │──│      10 kN, speed control    │       │
│  │                                      │  │                              │       │
│  │  M3: Recovery Channel + V-Funnel     │  │  E3: Linear Actuator Drive   │       │
│  │      UHMWPE rollers, SS frame        │──│      Ramp tilt 12-18°        │       │
│  │                                      │  │                              │       │
│  │  M4: Cradle Assembly                 │  │  E4: Power Distribution      │       │
│  │      UHMWPE saddle, toggle clamps    │  │      24VDC panel, breakers   │       │
│  │                                      │  │                              │       │
│  │  M5: Propulsion (Twin OB)            │  │  E5: Nav + Comms + Sensors   │       │
│  │      2×40-60 HP, fuel system         │  │      GPS, VHF, load cell     │       │
│  │                                      │  │                              │       │
│  │  M6: Deck + Fittings + Safety        │  │  E6: Charger (shore power)   │       │
│  │      Console, seats, tow bridle      │  │      220VAC input from       │       │
│  │                                      │  │      mother ship             │       │
│  └──────────────────┬───────────────────┘  └──────────────┬───────────────┘       │
│                     │                                      │                      │
│                     └──────── INTERFACES (ICD v1.5) ───────┘                      │
│                                      │                                            │
│                     ┌────────────────┴────────────────┐                           │
│                     │    OEM BOUNDARY (Black Box)      │                           │
│                     │                                  │                           │
│                     │  UUV Controller (suitcase)       │                           │
│                     │  Tether cable (from UUV drum)    │                           │
│                     │  UUV body (550 kg, D=400mm)      │                           │
│                     │                                  │                           │
│                     └──────────────────────────────────┘                           │
└───────────────────────────────────────────────────────────────────────────────────┘

EXTERNAL INTERFACES:
  Mother Ship ←→ Tow line, crane (UUV only), VHF, shore power (recharge)
  Environment → Sea state SS 3-4, weather, current
  Crew (3) → Commands, visual, manual operations
```

## 2. Domain Allocation Table

| SF-ID | Sub-Function | Primary | Secondary | Rationale | Status |
|-------|-------------|---------|-----------|-----------|--------|
| F1.1 | Tow alongside mother ship | MECH | — | Bridle, towline, structural | Decided |
| F1.2 | Self-transit | MECH | — | Twin OB propulsion | Decided (PD-1) |
| F1.3 | Navigate/position | ELEC | — | GPS + compass + speed log | Decided |
| F1.4 | Station-keep | MECH | — | Manual helm, differential thrust | Decided |
| F1.5 | Maintain stability | MECH | — | Hull form, beam, ballast | Verified (Doc 009) |
| F2.1 | Receive UUV from crane | MECH | — | Structural: sling points | Decided |
| F2.2 | Secure UUV in cradle | MECH | — | UHMWPE saddle, toggle clamps | Decided |
| F2.3 | Prepare LARS | **SHARED** | MECH+ELEC | Battery power-on + VFD init | **Integration risk** |
| F2.4 | Control UUV descent | **SHARED** | MECH+ELEC | VFD speed → winch cable → ramp mechanical | **Integration risk** |
| F2.5 | Enter UUV into water | MECH | ELEC | Ramp tilt (actuator = ELEC, structure = MECH) | Decided |
| F2.6 | Release UUV from cradle | MECH | — | Manual release | Decided |
| F2.7 | Retract cradle | **SHARED** | MECH+ELEC | Permanent pendant winch (ELEC drive + MECH cable) | **Integration risk** |
| F3.1 | Acquire UUV position | ELEC | — | Tether bearing + visual | Decided |
| F3.2 | Maneuver for approach | MECH | — | Differential thrust | Decided |
| F3.3 | Guide UUV into V-funnel | MECH | — | Passive funnel geometry | Phase 3 detail |
| F3.4 | Capture in cradle | MECH | — | Rails + cradle | Phase 3 detail |
| F3.5 | Attach winch | MECH | — | Permanent pendant (always attached) | Decided (PD-3) |
| F3.6 | Winch UUV up ramp | **SHARED** | MECH+ELEC | VFD winch drive + structural loads | **Integration risk** |
| F3.7 | Secure stowed | MECH | — | Toggle clamps | Decided |
| F3.8 | Abort recovery | MECH | — | Tether maintains connection | Decided |
| F4.1 | Propulsion power | MECH | — | Twin OB diesel | Decided (PD-1) |
| F4.2 | LARS power | **ELEC** | — | **Battery bank 24V LiFePO4** (CEO 2026-04-14) | **NEW DECISION** |
| F4.3 | Distribute power | ELEC | — | 24VDC panel + breakers | Decided |
| F4.4 | Comms | ELEC | — | VHF radio | Decided |
| F4.5 | Monitor LARS | ELEC | MECH | Load cell (ELEC) on winch cable (MECH) | Decided |
| F4.6 | Crew safety | MECH | — | PFDs, harness, non-skid | Decided |
| F4.7 | Bilge management | **SHARED** | MECH+ELEC | Electric pump (ELEC) + scuppers (MECH) | Decided |
| F4.8 | Corrosion protection | MECH | — | Paint + anodes | Decided |
| F5.1 | Route cable on deck | MECH | — | Fairlead + clips | Decided |
| F6.1 | Mount controller | MECH | — | Bracket on console | TBD (ICD from OEM) |
| F6.2 | Power controller | ELEC | — | **Battery 24VDC or inverter 220VAC** | TBD (ICD from OEM) |
| F6.3 | Connect tether | MECH | ELEC | Physical connector (MECH) + signal path (ELEC/OEM) | TBD (ICD from OEM) |
| F6.4 | Transmit commands | OEM | — | Via tether (black box) | OEM boundary |
| F6.5 | Receive telemetry | OEM | — | Via tether (black box) | OEM boundary |
| F6.6 | Operator workspace | MECH | — | Seat, shelter, rain cover | Decided |

## 3. Summary

| Domain | Primary SFs | Shared SFs | Total Involvement |
|--------|:-----------:|:----------:|:-----------------:|
| MECH | 22 | 5 (lead: 3) | 27 |
| ELEC | 5 | 5 (lead: 2) | 10 |
| OEM | 2 | 0 | 2 (+ 3 TBD ICD) |

**SHARED functions (highest integration risk):**
1. **F2.3/F2.4/F2.7/F3.6** — LARS operations: VFD drive + mechanical structure
2. **F4.7** — Bilge: electric pump + hull scuppers
3. **F6.2/F6.3** — UUV controller power + tether connection (OEM ICD dependent)

**MECH leads overall system.** ELEC is subordinate — provides power + actuation to MECH-defined structure.

## 4. Shadow Assumptions (Retro-Detected)

| SA-ID | Domain Making | About Domain | Assumption | Verified? | Risk if Wrong |
|-------|:---:|:---:|---|:---:|---|
| SA-01 | MECH | ELEC | Battery bank fits in allocated volume (~0.05 m³) | NO | Rework hull structure |
| SA-02 | MECH | ELEC | VFD winch 10 kN available in 24VDC marine version | NO | May need 48VDC → redesign distribution |
| SA-03 | ELEC | MECH | Winch mounting frame supports 10 kN reaction force | Partial (Doc 008) | Structural failure |
| SA-04 | ELEC | OEM | UUV controller accepts 24VDC OR 220VAC from inverter | NO — **BLOCKING** (needs ICD from OEM) | May need dedicated inverter or different battery voltage |
| SA-05 | MECH | ELEC | Battery weight ≤50 kg total | NO | Stability recalc if heavier |
| SA-06 | ELEC | MECH | Cable run from battery to stern winch ≤8m (voltage drop) | NO | May need thicker cables or higher voltage |
| SA-07 | MECH | ELEC | Linear actuator (ramp tilt) available in 24VDC, ≤2 kN | Likely | Standard industrial actuator |

**CRITICAL:** SA-02 and SA-04 must be resolved before Phase 3 layout begins.
