---
created: 2026-04-10
type: function-structure
block: BD
pipeline: helix-task-clarify v3.1
method: "Pahl-Beitz §6.3 + WX 6-Flow Extension (E-M-S + Data-Compute-Trust)"
project: VN-MGM V1-NAVAL-12.7
mode: retroactive
status: COMPLETE
sf_count: 22
design_type: VARIANT (V5/N12) on PROVEN base (V1)
feeds_to:
  - Phase 2 helix-concept-generate (morphological matrix)
  - helix-p2-frame (solution-determining SF identification)
  - HOQ_Design_Parameters_v1.0.md (DP → SF mapping)
---

# BD Function Structure — VN-MGM V1-NAVAL-12.7 (6-Flow)

## 1. Overall Function

```
┌─────────────────────────────────────────────────────────┐
│                   OVERALL FUNCTION                       │
│                                                          │
│  "Transform operator input + weapon into accurate        │
│   directional fire from a platform in marine              │
│   environment, maintaining readiness over service life"   │
│                                                          │
│  INPUTS:                    OUTPUTS:                     │
│  • Operator force      →   • Weapon pointing direction  │
│  • Weapon assembly     →   • Recoil reaction to deck    │
│  • Target information  →   • Spent casings (pass-thru)  │
│  • Ammunition          →   • Heat (dissipated)          │
│  • Environment loads   →   • Status signals to operator │
│  (salt, waves, temp)       • Degradation products       │
└─────────────────────────────────────────────────────────┘
```

## 2. Function Decomposition — 6 Main Functions, 22 Sub-Functions

### F1: ACCEPT Weapon (Tiếp nhận vũ khí)

| SF | Sub-Function | Flow | Requirements | V1 Solution (proven) |
|----|-------------|------|-------------|---------------------|
| F1.1 | Receive weapon on cradle interface | M (material) | G-04: 105±1mm width | CNC machined cradle channel |
| F1.2 | Lock weapon in position | M, E (energy) | SF-04: 15g retention | 2× quick-release pins |
| F1.3 | Enable quick removal | M | AS-03: ≤60s, 1 person | Same 2 pins (pull to release) |
| F1.4 | Poka-yoke: prevent incorrect installation | S (signal) | O-20: minimize incorrect install | Pin geometry = asymmetric |

### F2: AIM — Traverse (Azimuth) (Xoay ngang)

| SF | Sub-Function | Flow | Requirements | V1 Solution |
|----|-------------|------|-------------|-------------|
| F2.1 | Support continuous rotation (360°) | E, M | K-01: n×360° | Slewing ring bearing |
| F2.2 | Convert operator force to rotation | E | K-03: ≥20°/s at ≤5 kg·m | Handle + bearing friction |
| F2.3 | Enable traverse lock | E | (optional for V1) | No lock (continuous) |
| F2.4 | Provide tactile feedback to operator | S | ER-01: 25-35mm grip | Handle geometry + friction feel |

### F3: AIM — Elevate (Góc tầm)

| SF | Sub-Function | Flow | Requirements | V1 Solution |
|----|-------------|------|-------------|-------------|
| F3.1 | Support angular range (-15° to +85°) | E, M | K-02 | Trunnion + hard stops |
| F3.2 | Convert operator force to elevation change | E | K-04: ≥15°/s at ≤3 kg·m | Worm gear + handwheel |
| F3.3 | Self-lock at any elevation angle | E | K-05: positive lock, 1 action | Worm gear self-lock (inherent) |
| F3.4 | Limit travel (hard stops) | E, S | SF-01: no pinch points at limits | Mechanical stops + clearance |

### F4: ABSORB Recoil (Hấp thụ lực giật) ★ FORCE PARADIGM CORE

| SF | Sub-Function | Flow | Requirements | V1 Solution |
|----|-------------|------|-------------|-------------|
| F4.1 | Decelerate weapon during recoil stroke | **E** (kinetic→strain) | F-01: ≥50 kN peak | Rigid cradle + structural margin |
| F4.2 | Distribute recoil to pedestal structure | **E** (force path) | F-06: SF ≥1.5 | S355 steel structure |
| F4.3 | Dissipate recoil energy | **E** (kinetic→heat) | F-02: 50,000 cycles | Structural damping + heat radiation |
| F4.4 | Return weapon to battery (if applicable) | E, M | — | Weapon's own recoil spring (not mount) |

### F5: INTERFACE with Platform (Kết nối với nền tảng)

| SF | Sub-Function | Flow | Requirements | V1 Solution |
|----|-------------|------|-------------|-------------|
| F5.1 | Distribute static + dynamic loads to deck | **E** | F-05: ≥200 kN bolt shear | 4× M16 bolt pattern, STANAG 4568 |
| F5.2 | Maintain electrical grounding | **E** | SF-08: ≤0.1Ω to deck | Metal-to-metal bolt contact |
| F5.3 | Accommodate platform motion (roll/pitch) | E | OP-06: Sea state 3 | Rigid mount (operator compensates) |

### F6: PRESERVE — Resist Degradation (Chống xuống cấp)

| SF | Sub-Function | Flow | Requirements | V1 Solution |
|----|-------------|------|-------------|-------------|
| F6.1 | Protect structure from corrosion | M (material→oxide) | OP-04: 1,000h salt fog | Galvanize + epoxy + PU topcoat |
| F6.2 | Protect moving surfaces from wear | M, E | MA-02: ≥1,000 rds between service | PTFE bushings + grease |
| F6.3 | Protect operator from hazards | S, E | SF-01 to SF-07 | Clearances, markings, chamfers |
| F6.4 | Indicate condition to operator | **S** | O-22, O-55: condition awareness | ⚠️ WEAK — feel only, no indicator |

---

## 3. 6-Flow Diagram

### Flow 1: ENERGY (E) — ★ Dominant flow for FORCE paradigm

```
ENERGY FLOW — VN-MGM V1

E-IN:
  E1: Operator muscle force ─────→ F2.2 (traverse) → F3.2 (elevate)
  E2: Recoil impulse (50 kN) ────→ F4.1 → F4.2 → F4.3 (absorb → distribute → dissipate)
  E3: Platform vibration ─────────→ F5.3 (transmitted through base)
  E4: Thermal (solar + firing) ──→ F6.1 (accelerates corrosion)

E-CONVERSION:
  E1 → Rotational KE (bearing) → Weapon angular position
  E2 → Strain energy (structure) → Heat (dissipation)
  E3 → Transmitted through mount (rigid)

E-OUT:
  E5: Reaction force to deck ←── F5.1 (≤200 kN bolt capacity)
  E6: Heat from friction ←────── F2.1, F3.2 (bearing + worm gear)
  E7: Heat from recoil ←──────── F4.3 (structural damping)

FORCE PATH (critical):
  Weapon → F1.2 (pins) → F4.1 (cradle) → F4.2 (trunnion → pedestal)
  → F2.1 (bearing) → F5.1 (base → deck bolts)

  ALL components in this path must sustain 50 kN × 50,000 cycles.
```

### Flow 2: MATERIAL (M)

```
MATERIAL FLOW — VN-MGM V1

M-IN:
  M1: Weapon assembly (34 kg DShK) ──→ F1.1 (cradle receives)
  M2: Ammunition belt ────────────────→ pass-through (not constrained by mount)
  M3: Lubricant (grease) ────────────→ F6.2 (bearing surfaces, every 1,000 rds)
  M4: Salt spray (environment) ──────→ F6.1 (attacks surfaces)
  M5: Rain water ────────────────────→ F6.1 (rinses salt — beneficial if directed)

M-THROUGH:
  M2: Ammunition → weapon → projectile out (mount is transparent)
  M6: Spent casings → ejected (not captured by mount)

M-OUT:
  M7: Waste grease (during maintenance) ←── F6.2
  M8: Corrosion products (rust, coating debris) ←── F6.1
  M9: Wear debris (pin, bushing) ←── F6.2

M-STORAGE:
  M1: Weapon sits on cradle (F1.2 retains)
  M3: Grease stored in bearing races
```

### Flow 3: SIGNAL (S)

```
SIGNAL FLOW — VN-MGM V1

S-IN:
  S1: Target visual → Operator observes → Aims weapon
  S2: Sight picture → Through optic/iron sights → Operator feedback
  S3: CO commands → Voice → Operator responds

S-INTERNAL:
  S4: Elevation scale (5° marks) → F3.4 limit indication
  S5: Traverse feel (friction) → F2.4 → Operator senses resistance
  S6: Recoil feel → F4.1 → Operator senses mount "working"
  S7: Safe/ready indicator → F6.3 → Red/green flag

S-OUT:
  S8: Weapon pointing direction → Physical output (barrel aim)
  S9: "Sẵn sàng" voice report → F6.3 → To CO

S-GAP:
  ⚠️ No objective condition signal (F6.4 weak)
  ⚠️ No angular position signal (crude scale only)
  ⚠️ No night-capable signal path (S1 fails in dark)
```

### Flow 4: DATA (D) — WX Extension

```
DATA FLOW — VN-MGM V1

D-IN:  NONE (V1 is purely mechanical — no data inputs)
D-OUT: NONE (V1 generates no data)

D-POTENTIAL (for V5/N12 + ACH):
  D1: Bearing vibration signature → SF-B condition monitor
  D2: Traverse/elevation angle → Encoders on V5
  D3: Target image → SF-A camera for tracking
  D4: Thermal scene → SF-C camera for night ops
  D5: Firing count → Maintenance scheduler
  D6: Environmental exposure (humidity, salt, temp) → Corrosion model

DATA FLOW IS THE ACH ACTIVATION CHANNEL.
V1 has zero data flow → V5/N12 + ACH creates data flow → enables compound learning.
```

### Flow 5: COMPUTATION (C) — WX Extension

```
COMPUTATION FLOW — VN-MGM V1

C-IN:  NONE (V1 = zero computation, all analog/mechanical)
C-OUT: NONE

C-POTENTIAL (for V5/N12 + ACH):
  C1: PID motor control loop (V5 standard servo — NOT AI)
  C2: Vibration anomaly detection (SF-B — simple threshold → ML)
  C3: Visual target tracking (SF-A — OpenCV/YOLO)
  C4: Thermal target highlight (SF-C — blob detection → ML)
  C5: Ballistic lead calculation (SF-A extension — physics model)
  C6: Predictive maintenance scheduling (SF-B — trend analysis)

COMPUTATION FLOW IS THE AI VALUE LAYER.
```

### Flow 6: TRUST (T) — WX Extension

```
TRUST FLOW — VN-MGM V1

T-IN:
  T1: Operator trusts mount (300 units, 0 structural failures) → HIGH
  T2: CO trusts availability (proven deployment record) → HIGH
  T3: Navy trusts WX (repeat orders, 92% local) → HIGH

T-INTERNAL:
  T4: Safety margins visible (conservative design, SS316 fasteners)
  T5: Field record accumulates (fleet data builds trust)

T-OUT:
  T6: Trust signal to procurement: "300 shipped, no failures"
  T7: Trust signal to operator: "mount held during firing" (every shot)

T-GAP:
  ⚠️ T8: ACH trust = ZERO (no AI experience with military customer)
  ⚠️ T9: Condition monitoring trust = needs validation campaign
  → forge-trust must build T8, T9 before ACH deployment

TRUST IS THE DEPLOYMENT GATE FOR ACH.
V1 has HIGH trust. Any ACH add-on starts at ZERO trust.
→ Strategy: bundle ACH as OPTIONAL add-on to trusted V1/V5 base.
```

---

## 4. Solution-Determining Sub-Function Analysis (P&B §6.3)

| SF | Sub-Function | Solution-Determining? | Rationale |
|----|-------------|:---------------------:|-----------|
| **F4.1** | **Decelerate weapon during recoil** | **★ YES** | Determines ALL structural sizing. If F4.1 concept changes (rigid vs damped vs hydraulic), entire structure changes. |
| **F2.1** | **Support continuous rotation** | **★ YES** | Bearing choice (slewing ring vs pintle vs turntable) determines pedestal geometry, height, diameter, cost. |
| F1.2 | Lock weapon in position | No | Pin system is common across all bearing concepts. |
| F3.2 | Convert force to elevation | Partial | Worm gear vs sector gear changes elevation assembly but not overall architecture. |
| F5.1 | Distribute loads to deck | No | STANAG 4568 bolt pattern is fixed regardless of concept. |
| F6.1 | Protect from corrosion | No | Surface treatment is independent of structural concept. |

**Two solution-determining SFs:**
1. **F4.1 (Recoil absorption)** — rigid mount vs elastomer damper vs hydraulic buffer
2. **F2.1 (Azimuth rotation)** — slewing ring vs pintle bearing vs ball turntable

These two SFs should receive MOST attention in Phase 2 morphological matrix. The chosen working principles for F4.1 and F2.1 will cascade to determine the entire mount architecture.

---

## 5. Design Type Assessment

| Criterion | Assessment |
|-----------|-----------|
| **V1 base product** | **VARIANT** design — minor modifications to proven architecture (300 shipped). Phase 2 = document, not explore. |
| **V5-MOTORIZED** | **ADAPTIVE** design — add motor/clutch to proven base. New SFs (motor control, clutch, transition). Phase 2 = focused on motor integration. |
| **N12-RETROFIT** | **ADAPTIVE** design — clamp-on motor kit for V1. New constraint: NO modification to V1 base. |
| **N11-STABILIZED** | **ORIGINAL** design for stabilization sub-system (gyro + servo). Mount base is VARIANT of V5. |
| **ACH overlay (SF-A/B/C)** | **ORIGINAL** for AI/sensor integration. ADAPTIVE for mechanical mounting of sensors. |

**Implication for Phase 2:**
- V1: Skip Phase 2 (proven concept). Document morphological matrix retroactively.
- V5/N12: Phase 2 focuses on motor integration concept (F2.1 motor + F4.1 recoil + clutch transition).
- N11: Full Phase 2 needed for stabilization concept.
- ACH: Separate Phase 2 for sensor/compute integration.

---

## 6. Function Structure × HOQ Design Parameter Mapping

| DP# | Design Parameter | Primary SF | Secondary SF |
|-----|-----------------|-----------|-------------|
| DP1 | Traverse Speed | F2.2 | F2.1 (bearing friction) |
| DP2 | Traverse Effort | F2.2 | F2.4 (handle ergonomics) |
| DP3 | Elevation Precision | F3.2 | F5.3 (platform motion) |
| DP4 | Night Operability | **F6.4** (signal gap) | SF-C (new data/compute flow) |
| DP5 | Corrosion Endurance | F6.1 | F6.2 (bearing protection) |
| DP6 | Maintenance Burden | F6.2 | F6.4 (condition awareness) |
| DP7 | First Hit Efficiency | F2.2 + F3.2 | SF-A (new data/compute flow) |
| DP8 | Mounting Speed | F1.1 + F1.2 | F1.4 (poka-yoke) |
| DP9 | Hot Barrel Safety | F6.3 | F1.3 (removal clearance) |
| DP10 | Condition Observability | **F6.4** (signal gap) | SF-B (new data flow) |

**Insight:** DP4 and DP10 both map to F6.4, which is V1's weakest sub-function (signal gap). This is WHERE ACH creates the most value — filling the information void in a mechanically excellent product.

---

**BD VERDICT: COMPLETE — 22 sub-functions mapped across 6 flows, 2 solution-determining SFs identified (F4.1, F2.1), design type classified per variant.**
