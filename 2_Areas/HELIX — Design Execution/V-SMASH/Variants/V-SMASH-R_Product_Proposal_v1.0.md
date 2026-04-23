---
project: V-SMASH-R
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-PRO (V-P)
dependency_gate: DG-6 (V-P.Phase3.ACCEPTED — PENDING) + DG-7 (MTB-20.Interface.AVAILABLE — PENDING)
---

# V-SMASH-R (RWS) — Product Proposal (P11)

> **Family position:** Vehicle-mounted variant. Stabilized remote weapon station with V-P fire control core. Longest dependency chain in family.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-RWS |
| **Product code** | V-R |
| **Family position** | Platform-mounted — vehicle/boat integration |
| **Primary function** | Stabilized AI-assisted remote weapon station for vehicle-mounted C-UAS engagement |
| **Customer** | Vietnamese Army mechanized infantry command, Navy patrol boat fleet |
| **End-user** | Vehicle gunner (remote operator inside vehicle), patrol boat crew |
| **Target market** | Vehicle-integrated C-UAS for mechanized forces and coastal patrol |

**One-sentence pitch:** A remote weapon station that lets your gunner engage drones from inside the vehicle — AI computes the fire solution, the operator always presses the trigger.

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **WX capability** | V-P fire control core (proven) + pan/tilt drive + vehicle interface. Highest-value V-SMASH product. |
| **IRONMESH** | Full C4I: vehicle-to-vehicle target sharing, fleet engagement analytics, predictive maintenance via vibration monitoring. |
| **R2 loop** | Highest ASP in family ($8,000-25,000 depending on configuration). Low volume, high margin. |
| **Local content** | **60-66%** — mechanical components (tripod/mount, pan/tilt housing) all local. FCS module imported (V-P core). |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Source |
|---|-------------|--------|--------|
| 1 | All V-P detection/tracking requirements | Inherited from V-P | V-P spec |
| 2 | Pan/tilt azimuth | ±120° continuous | Vehicle coverage |
| 3 | Pan/tilt elevation | -20° to +60° | Drone engagement angles |
| 4 | Slew rate | ≥20°/sec | Target acquisition speed |
| 5 | Stabilization | 2-axis gyro-stabilized (pitch + yaw) | Vehicle motion compensation |
| 6 | Weapon platforms | 7.62mm (PKM), 12.7mm (NSV/DShK) | Vietnamese military standard |
| 7 | Vehicle interface | CAN bus (MTB-20), 24V power | MTB-20 integration |
| 8 | Remote operation range | ≥50m cable (wired) / ≥200m wireless option | Crew safety |
| 9 | Setup time | <5 min (vehicle-mounted pre-installed) | Operational |
| 10 | Shock/vibration | MIL-STD-810H 516.8 (vehicle), 100g peak recoil (12.7mm) | Durability |
| 15 | **HITL: dead-man switch** | Trigger requires continuous operator input (release = cease fire) | Safety-critical |
| 16 | **HITL: cable-cut safe state** | Loss of RCU signal → weapon safes within 100ms, pan/tilt locks | Safety-critical |
| 17 | **HITL: autonomous zone boundary** | AI may: track target, compute lead, slew pan/tilt to follow. AI may NOT: fire, select target for engagement, override operator cease-fire. | Safety-critical |
| 18 | **IFF: AI confidence gating** | FR-IFF-01/02/03/04 (family requirement — see P10) | Test + Analysis |
| 11 | Unit cost (RCWS-LITE single-soldier) | ≤$3,000 | Expeditionary config |
| 12 | Unit cost (full vehicle RWS) | ≤$8,000-12,000 | Vehicle-integrated |
| 13 | Weight (RCWS-LITE) | ≤10 kg total (4 carry cases) | Single soldier portable |
| 14 | Weight (vehicle RWS) | ≤25 kg (permanent mount) | Vehicle weight budget |

- **Cost target:** $2,800 (RCWS-LITE) to $8,000 (vehicle RWS) depending on configuration
- **Price target:** $8,000 (RCWS-LITE) to $25,000 (full vehicle RWS)
- **Delivery target:** 12 months after V-P Phase 3 + MTB-20 available (DG-6 + DG-7). Longest chain: ~30 months from now.
- **Key constraint:** MTB-20 vehicle platform interface is external dependency (MoD procurement, entirely outside WX control)

---

## 4. WORKING PRINCIPLE OPTIONS

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: RCWS-LITE (single-soldier portable) (Recommended for V1)** | Folding tripod, passive stabilization, pan/tilt head, 50m cable remote. 10kg total. | Ships without MTB-20, expeditionary market, proven concept from Phase 2 (VDI 83%) | No gyro stabilization, limited to static positions |
| B: Full vehicle RWS (MTB-20 integrated) | Permanent turret mount, gyro-stabilized, CAN bus control, 24V vehicle power | Full vehicle integration, highest military value | Depends on MTB-20 (DG-7), 12+ months additional |
| C: Dual-config platform | Modular: same FCS + weapon cradle, two mounting options (tripod OR vehicle turret) | Maximum flexibility, one product serves two markets | Engineering complexity, compromise on both |

**Recommended: Option A first** (RCWS-LITE, ships without MTB-20), then Option B when DG-7 met. Option C is aspirational but risks being mediocre at both.

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | **MEDIUM** | Recoil compensation for 12.7mm (100g peak) while maintaining AI tracking lock. V-L designed for 5.56mm recoil. Shock mount + IMU compensation is new engineering. |
| **Safety (HITL)** | **LOW (after fix)** | Dead-man switch + cable-cut safe state are standard RCWS design patterns (see Kongsberg CROWS, Rafael Samson). V-R inherits V-P HITL fire gate architecture; remote operation adds: (1) dead-man trigger on RCU, (2) cable-cut watchdog → weapon safe within 100ms, (3) AI autonomous zone bounded to track/compute only — fire always human-initiated. |
| **Schedule** | **HIGH** | Longest dependency chain: V-L → V-P → V-R. MTB-20 availability is outside WX control. If MTB-20 delayed, full vehicle RWS is blocked indefinitely. |
| **Market** | MEDIUM | Vehicle RWS market exists but procurement cycles are very long (2-3 years). RCWS-LITE (expeditionary) is faster to sell. |
| **Integration** | **HIGH** | MTB-20 CAN bus interface spec not yet received. 24V electronic trigger protocol undocumented. Physical fitment unknown. Cannot even begin detailed design without MTB-20 access. |

**Kill condition:** (RCWS-LITE) Setup time >90 sec or total weight >12 kg — single-soldier deployment thesis fails. (Vehicle RWS) MTB-20 interface unavailable after 24 months — defer indefinitely, focus on RCWS-LITE as standalone product.

---

## 6. NEXT STEP

- **If PROCEED:** Cannot start vehicle RWS until DG-6 + DG-7. **RCWS-LITE can begin Phase 0/1 earlier** (depends on V-P, not MTB-20). Pre-Phase 0 action: engage MoD Engineering Directorate for MTB-20 interface specs.
- **If PAUSE:** Natural pause — both DG-6 and DG-7 pending. This is the last product in the family timeline (delivery ~2028).

---

## Two-Product Strategy

V-R is effectively two products sharing a fire control core:

```
V-R (RWS)
├── V-R-LITE (RCWS-LITE)
│   ├── Folding tripod, 10kg, single-soldier
│   ├── Passive stabilization (friction-damped)
│   ├── 50m cable remote control
│   ├── Depends on: V-P.Phase3 (DG-6 only)
│   ├── Timeline: 12 mo after DG-6
│   └── Price: $8,000
│
└── V-R-FULL (Vehicle RWS)
    ├── Permanent turret mount, 25kg
    ├── Gyro-stabilized (2-axis)
    ├── CAN bus vehicle integration
    ├── Depends on: V-P.Phase3 + MTB-20 (DG-6 + DG-7)
    ├── Timeline: 12 mo after BOTH gates
    └── Price: $25,000
```

Revenue-first: ship V-R-LITE when DG-6 met, regardless of MTB-20 status.

---

## Family Critical Path Position

```
V-L (10 mo) → V-P (12 mo) → V-R (12 mo) = 34 months total
                               ↑
                          MTB-20 (external, unknown)
```

V-R is the terminal node of the longest dependency chain. It will be the last V-SMASH product delivered. Accept this — do not try to accelerate by skipping dependencies.
