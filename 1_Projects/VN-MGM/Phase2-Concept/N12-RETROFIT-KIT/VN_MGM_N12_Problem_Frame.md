---
created: 2026-04-11
type: problem-frame
block: BA
pipeline: helix-concept-generate v3.1
project: VN-MGM
variant: N12-RETROFIT-KIT
design_type: ADAPTIVE
status: COMPLETE
feeds_to:
  - VN_MGM_N12_Morphological_Matrix.md (BB)
  - VN_MGM_N12_Concept_Variants.md (BB)
---

# BA Problem Frame — VN-MGM N12-RETROFIT-KIT

## 1. Solution-Determining Sub-Function Analysis

### 1a. Cascade × Breadth Scoring

For each of the 12 N12 delta SFs, score:
- **Cascade count** (0-12): How many other SFs are constrained by this SF's WP choice?
- **Solution breadth** (1-5): How many fundamentally different WP classes exist?
- **Determining score** = Cascade / Breadth (higher = more determining)

| SF | Sub-Function | Cascade | Breadth | Score | Rank |
|----|-------------|:-------:|:-------:|:-----:|:----:|
| **F7.1** | Couple motor to az axis | **8** | 3 | **2.67** | **#1** |
| **F8.1** | Couple motor to el axis | **7** | 4 | **1.75** | **#2** |
| **F9.1** | Clutch disengage | **5** | 3 | **1.67** | **#3** |
| F7.2 | Clamp az module to pedestal | 3 | 2 | 1.50 | #4 |
| F10.3 | Route power/signal 360° | 3 | 3 | 1.00 | #5 |
| F8.2 | Clamp el module to el arm | 2 | 2 | 1.00 | #6 |
| F7.3 | Isolate az from recoil | 1 | 2 | 0.50 | #7 |
| F8.3 | Isolate el from recoil | 1 | 2 | 0.50 | #8 |
| F10.2 | Motor speed control | 1 | 2 | 0.50 | #9 |
| F9.2 | Fault detection → safe | 0 | 2 | 0.00 | #10 |
| F9.3 | Signal mode status | 0 | 2 | 0.00 | #11 |
| F10.1 | Accept operator command | 0 | 2 | 0.00 | #12 |

### 1b. Cascade Analysis Detail

**F7.1 (Cascade = 8):** Az coupling WP choice determines:
- F7.2 (clamp position and geometry — must hold motor at correct engagement distance)
- F7.3 (recoil isolation — depends on how rigidly motor couples)
- F10.2 (speed control — gear ratio determines motor speed/torque spec)
- F10.3 (cable routing — motor position determines cable path)
- F8.1 (elevation coupling must work WITH azimuth — co-rotation)
- F8.2 (el clamp geometry constrained by az module presence)
- F9.1 (clutch must work with coupling type — inline vs. parallel)
- N-F02 (motor torque spec — driven by gear ratio from coupling)

**F8.1 (Cascade = 7):** El coupling WP choice determines:
- F8.2 (clamp must match coupling geometry)
- F8.3 (isolation depends on coupling rigidity)
- F9.1 (clutch architecture for elevation — may differ from azimuth)
- F10.2 (speed control — gear ratio determines motor spec)
- F10.3 (cable routing from el motor through rotating joint)
- N-F03 (motor torque spec)
- N-SF08 (recoil recovery depends on coupling stiffness)

**F9.1 (Cascade = 5):** Clutch type determines:
- F9.2 (fault detection logic — NC vs NO vs one-way)
- F9.3 (mode signaling — what state to indicate)
- F10.2 (control loop — must manage clutch engage/disengage in servo loop)
- N-K05/K06 (manual traverse feel — clutch drag/friction)
- N-E04 (zero power manual — only NC clutch satisfies)

### 1c. Solution-Determining Verdict

**Primary:** F7.1 (azimuth coupling) — highest determining score. CEO confirmed gear mesh → WP locked.
**Secondary:** F8.1 (elevation coupling) — OPEN. This is the key Phase 2 decision.
**Tertiary:** F9.1 (clutch) — EM NC strongly favored by N-E04 (zero power = free manual). Near-locked.

**Phase 2 strategy:** F7.1 locked, F9.1 near-locked → **concept variation driven primarily by F8.1 (elevation coupling method)**. BB search must explore F8.1 deeply, calibrate other SFs accordingly.

---

## 2. TRIZ Contradiction Analysis

### 2a. Key Technical Contradictions

**TC-1: Azimuth coupling — Force transmission vs. Non-permanent attachment**

| Parameter | Value |
|-----------|-------|
| IMPROVING | #10 Force (motor torque → mount) |
| WORSENING | #35 Adaptability (removable, no damage to V1) |
| TRIZ Principles | **#15 Dynamicity**, #35 Parameter change, #2 Taking out |

- **#15 Dynamicity:** Make connection adjustable/removable → split-ring clamp with adjustable engagement
- **#2 Taking out:** Separate the coupling function from the structural function → external pinion (not integrated into V1)
- Resolution: **External pinion gear meshes with EXISTING V1 slewing ring teeth.** V1 has the teeth already. N12 brings only the pinion + bracket. ✅ CEO confirmed.

**TC-2: Elevation coupling — Torque transmission vs. No modification to V1**

| Parameter | Value |
|-----------|-------|
| IMPROVING | #10 Force (motor torque to elevation axis) |
| WORSENING | #13 Stability of composition (V1 structure unchanged) |
| TRIZ Principles | **#24 Intermediary**, #1 Segmentation, #28 Mechanics substitution |

- **#24 Intermediary:** Use an intermediate object to couple motor → V1 el axis without touching V1 internals
- **#1 Segmentation:** Break the coupling into stages (motor → intermediate → V1)
- **#28 Mechanics sub:** Replace gear mesh with friction, belt, or other mechanism if gears can't work
- Resolution: **OPEN — multiple WP classes to explore in BB**

**TC-3: Manual feel — Motor kit installed vs. Manual operation identical to V1**

| Parameter | Value |
|-----------|-------|
| IMPROVING | #9 Speed (motor adds traverse speed) |
| WORSENING | #33 Ease of operation (manual mode must feel identical to V1) |
| TRIZ Principles | **#15 Dynamicity**, #1 Segmentation, #34 Discarding/recovering |

- **#15 Dynamicity:** Make motor coupling dynamic — engaged when powered, fully disengaged when not
- **#1 Segmentation:** Complete mechanical separation between motor and mount in manual mode
- **#34 Discarding:** Motor path "disappears" when clutch releases — zero residual drag
- Resolution: **EM clutch NC (normally closed = engaged under power, releases on power loss)**. Clutch MUST have near-zero residual drag when released. Spec: ≤0.1 N·m residual.

### 2b. Physical Contradictions

**PC-1: Clamp force**
- MUST be HIGH: withstand 50 kN recoil vibration without slip (N-F01)
- MUST be LOW: not damage V1 coating, removable by hand tools (SC-N12-4, N-M02)
- Resolution by **separation in structure**: High force in steel clamp body, low force at contact via EPDM rubber lining. Rubber distributes pressure + protects coating.

**PC-2: Gear mesh engagement**
- MUST be TIGHT: low backlash ≤0.5° for aiming precision (N-F05)
- MUST be LOOSE: allow installation without disassembly, accommodate V1 tolerance ±5mm (N-G05)
- Resolution by **separation in time**: Adjustable engagement depth (set at install, locked for operation). Spring-loaded preload maintains constant mesh regardless of tolerance.

---

## 3. TESE Trend Analysis (Relevant Trends for N12)

| # | TESE Trend | Current Stage | Stalled? | N12 Opportunity |
|---|-----------|:------------:|:--------:|----------------|
| T1 | Mono-bi-poly (subsystem multiplication) | Mono (1 motor per axis) | No | Standard — no need to multiply |
| T2 | Increasing dynamism | Manual (static) → motorized (dynamic) | **Stalled at V1** | N12 = the dynamism step. Full trend compliance. |
| T3 | Transition to micro-level | Macro (gear mesh) | No | Gear mesh is appropriate for 15 N·m torque. No micro needed. |
| T4 | Automation increasing | Manual only → remote joystick | **Stalled at V1** | N12 = first automation step. Future: auto-tracking (SF-A ACH). |
| T5 | Increasing controllability | Zero data (V1) → position output (N12) | **Stalled at V1** | N12 data port (N-S02) = controllability enabler. |

**TESE verdict:** N12 advances V1 along 3 stalled TESE trends (T2, T4, T5). This confirms N12 is a natural evolution, not forced innovation.

---

## 4. CARS Function Structure Variants

### 4a. Baseline Structure (from Phase 1)

```
STRUCTURE α (BASELINE — Phase 1):

F7: DRIVE AZ          F8: DRIVE EL          F9: TRANSITION       F10: CONTROL
├─ F7.1 Couple az     ├─ F8.1 Couple el     ├─ F9.1 Clutch       ├─ F10.1 Joystick
├─ F7.2 Clamp az      ├─ F8.2 Clamp el      ├─ F9.2 Fault det    ├─ F10.2 Servo loop
└─ F7.3 Isolate az    └─ F8.3 Isolate el    └─ F9.3 Mode signal  └─ F10.3 Cable 360°

4 independent modules, 12 SFs total.
Az and El are PARALLEL (independent motor + clamp per axis).
Each axis has own clutch.
Controller is centralized (1 box, 2 servo channels).
```

### 4b. CARS Variant Generation

**CARS-C (Combine): Structure β — UNIFIED DRIVE MODULE**

```
STRUCTURE β (COMBINE F7+F8 into single drive module):

F78: DRIVE COMBINED           F9: TRANSITION       F10: CONTROL
├─ F78.1 Couple az (gear)     ├─ F9.1 Clutch       ├─ F10.1 Joystick
├─ F78.2 Couple el (from az)  ├─ F9.2 Fault det    ├─ F10.2 Servo loop
├─ F78.3 Clamp combined       ├─ F9.3 Mode signal  └─ F10.3 Cable 360°
└─ F78.4 Isolate combined

3 modules (instead of 4). Single mounting point.
El drive is TAKEN FROM azimuth module (e.g., belt from az gearbox to el worm shaft).
Advantage: 1 clamp instead of 2. Simpler installation.
Disadvantage: Az and El coupled — can't operate independently. Single point of failure.
```

**CARS-R (Reconnect): Structure γ — SERIES DRIVE (El through Az)**

```
STRUCTURE γ (RECONNECT F7→F8 in series):

F7: DRIVE AZ (primary)   F8: DRIVE EL (slave)     F9: TRANSITION       F10: CONTROL
├─ F7.1 Couple az        ├─ F8.1 Couple el         ├─ F9.1 Clutch (×1)  ├─ F10.1 Joystick
├─ F7.2 Clamp az         ├─ F8.2 Mount el ON F7    ├─ F9.2 Fault det    ├─ F10.2 Servo loop
└─ F7.3 Isolate az       └─ F8.3 Isolate el        └─ F9.3 Mode signal  └─ F10.3 Cable 360°

El motor mounts ON the az bracket (rides with azimuth rotation).
El coupling via direct shaft extension or belt from az bracket to el worm shaft.
Advantage: Only 1 deck-level clamp. El module = compact add-on.
Disadvantage: Az bracket carries el motor weight. Cable routing more complex (double rotation).
```

**CARS-S (Shift boundary): Structure δ — EXTERNAL DRIVE UNIT**

```
STRUCTURE δ (SHIFT boundary — drive unit external to mount):

F_EXT: EXTERNAL DRIVE UNIT    F_INT: INTERFACE TO V1     F9: TRANSITION       F10: CONTROL
├─ Motor az                    ├─ Coupling az (flexible)   ├─ F9.1 Clutch       ├─ F10.1 Joystick
├─ Motor el                    ├─ Coupling el (flexible)   ├─ F9.2 Fault det    ├─ F10.2 Servo loop
├─ Controller                  └─ Quick-connect brackets   └─ F9.3 Mode signal  └─ F10.3 Cable 360°
└─ All electronics

Shifts system boundary: motors + controller = 1 external box near mount (not on mount).
Flexible shafts or cables transmit torque from external box to V1 coupling points.
Advantage: Zero added weight/inertia on V1. No recoil isolation needed (motors far from weapon).
Disadvantage: Flexible transmission = torque loss, backlash. Complex routing on deck.
```

### 4c. CARS Evaluation Summary

| Structure | Module Count | Clamp Count | Key Advantage | Key Risk | Complexity |
|-----------|:-----------:|:-----------:|---------------|----------|:----------:|
| **α Baseline** | 4 | 2 (az+el) | Independent axes, simple logic | 2 clamp installs | MEDIUM |
| β Combined | 3 | 1 | Single install point | Coupled failure, complex mechanism | HIGH |
| γ Series | 3 | 1 (az only) | 1 deck clamp, el rides on az | Az bracket overloaded, double cable rotation | HIGH |
| **δ External** | 2 | 2 (coupling only) | Zero weight on mount, no recoil isolation | Flexible transmission loss, deck space | HIGH |

### 4d. CEO Decision Required — Select Structure(s) for BB

**Recommendation:** Proceed with **Structure α (Baseline)** as primary and carry **Structure δ (External)** as alternative for comparison in morphological matrix.

**Rationale:**
- **α** is the simplest, matches Phase 1 function structure, independent axes. Most proven architecture in industry (all motorized mount competitors use this).
- **δ** is genuinely different (TRIZ #2 Taking out) and solves the recoil isolation problem elegantly. Worth exploring.
- **β and γ** add coupling complexity for marginal benefit (saving 1 clamp at cost of reliability). Recommend ELIMINATE.

---

## 5. Essential Problems for BB (WP Search Focus)

### 5a. Deep Search (Novel SFs — solution space open)

| SF | Essential Problem for BB | WP Search Depth |
|----|-------------------------|:---------------:|
| **F8.1** | How to couple motor torque to V1 elevation axis WITHOUT modification? | **DEEP** (≥4 WPs) |
| **F7.1** | How to couple motor torque to V1 azimuth via external teeth? | MEDIUM (CEO locked gear mesh, search variants of gear mesh) |
| **F9.1** | What clutch architecture gives zero-drag manual + safe fail-to-disengage? | MEDIUM (EM NC locked, search variants of EM clutch integration) |
| **F10.3** | How to route power+signal through continuous 360° rotation? | MEDIUM (slip ring vs spiral — both proven, compare) |

### 5b. Shallow Search (Known SFs — solution largely determined)

| SF | Solution Class | BB Action |
|----|---------------|-----------|
| F7.2 | Split-ring clamp on cylindrical pedestal | Enumerate 2-3 clamp types |
| F7.3 | Elastomer isolation bushing | Enumerate 2 materials |
| F8.2 | U-bolt or saddle clamp on rectangular arm | Enumerate 2-3 clamp types |
| F8.3 | Elastomer isolation bushing | Same as F7.3 |
| F9.2 | Watchdog + overcurrent + overspeed | Standard solution (detail in BC) |
| F9.3 | LED + beep | Standard solution |
| F10.1 | 2-axis analog joystick | Standard solution (industrial grade) |
| F10.2 | PID servo (STM32 + drives) | Standard solution |

---

## 6. BA Summary

| Deliverable | Status |
|-------------|:------:|
| Solution-determining SF ranking | ✅ F7.1 → F8.1 → F9.1 |
| TRIZ contradiction analysis | ✅ 3 TCs + 2 PCs analyzed |
| TESE trend check | ✅ N12 advances 3 stalled trends |
| CARS function structure variants | ✅ 4 variants (α, β, γ, δ) |
| CEO structure selection | ⏳ Recommend α primary + δ alternative |
| BB search depth calibration | ✅ Deep on F8.1, medium on F7.1/F9.1/F10.3, shallow on rest |

**Key Phase 2 question confirmed:** F8.1 elevation coupling — the one open SF that determines N12 architecture.

**TRIZ resolution for F8.1:** Principle #24 (Intermediary) — use intermediate object. What intermediate? → BB search.

---

*BA Problem Frame | helix-concept-generate v3.1 | 2026-04-11*
