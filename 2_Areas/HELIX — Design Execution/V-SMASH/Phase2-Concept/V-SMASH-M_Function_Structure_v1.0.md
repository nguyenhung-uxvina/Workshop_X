---
project: V-SMASH-M
phase: 2
type: function-structure
prompt: P17
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Problem_Abstraction_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
qc_run: 14 (1 FLAG resolved — CHK-07 SF5 computation fault + range input)
---

# V-SMASH-M (Micro-Sight) — Function Structure (P17)

> **Essential function:** "Transform visual scene information into a spatial aiming reference to enable effective small-arms engagement of small, moving aerial targets."
> **Inputs:** Ambient light (visual scene) + weapon orientation (physical) + electrical energy (battery)
> **Outputs:** Spatial aiming reference (visual indicator) + engagement data (optional wireless signal)

---

## Sub-Function Decomposition (7 main + 3 supporting)

| # | Sub-Function | Verb | Feeds |
|---|-------------|------|-------|
| SF1 | **Capture visual scene** — convert ambient light into digital image data | Convert | SF2 |
| SF2 | **Detect aerial object** — identify regions of interest containing moving objects against sky background | Detect | SF3 |
| SF3 | **Classify object type** — determine whether detected object is drone (multi-rotor/fixed-wing), bird, or unknown | Classify | SF4 |
| SF4 | **Gate on classification confidence** — suppress aiming output when confidence <70%; route confidence level to operator indicator | Regulate | SF5 (if pass) / SF6 (always) |
| SF5 | **Compute ballistic lead** — calculate angular offset between current target position and required aim point, accounting for target motion, projectile ballistics, and estimated range | Transform | SF6 (via bounds check) |
| SF6 | **Present aiming reference** — display lead indicator + confidence level + system status to operator in shooting position | Indicate | Operator (human) |
| SF7 | **Store and transfer engagement data** — record engagement parameters and optionally transmit to external fleet system | Store/Transfer | External system (optional) |

### Supporting Functions (cross-cutting)

| # | Supporting Function | What it supports |
|---|-------------------|-----------------|
| SFS1 | **Regulate electrical energy** — convert stored energy to required voltages, manage thermal budget, indicate power state | SF1-SF7 (all) |
| SFS2 | **Protect internals** — shield electronics from shock, dust, water, temperature extremes | SF1-SF7 (all) |
| SFS3 | **Interface with weapon** — mechanically attach to weapon rail, maintain optical alignment under recoil | SF1, SF6 |

---

## Flow Diagram

```
[Input: Ambient light (visual scene)]
    │
    ▼
  SF1: Capture visual scene ──────────────────── SFS3: Interface with weapon
    │                                              (maintains optical alignment)
    ▼
  SF2: Detect aerial object
    │  outputs: bounding boxes + tracks + apparent angular size
    ▼
  SF3: Classify object type ◄──── [QC-RUN13: distinct sub-function,
    │  outputs: class label         classification ≠ threat ID ≠ engagement auth]
    │         + confidence score
    │         + known physical size (from class)
    ▼
  SF4: Gate on classification confidence ──── [SAFETY INTERLOCK: VM-Y03]
    │          │
    │ (≥70%)   │ (<70%: SUPPRESS lead indicator)
    ▼          ▼
  SF5: Compute ballistic lead    SF6: Present status only
    │  range input: derived         (RED confidence, no dot)
    │    from SF2 angular size
    │    × SF3 class physical size
    │  (see Range Derivation Note)
    │
    ├── Bounds check: if lead angle
    │   exceeds physical limits OR
    │   frame-to-frame jump >5° without
    │   matching target motion →
    │   suppress indicator, show
    │   "COMPUTE FAULT" [QC-RUN14]
    │
    ▼
  SF6: Present aiming reference ──────────────── [Output: Spatial aiming indicator
    │          │                                   + confidence level + system status]
    │          │
    ▼          ▼
  SF7: Store engagement data ─────────────────── [Output: Data to fleet (optional)]
    │
    ▼
  [HUMAN: Soldier decides to fire — outside system boundary]

═══ Cross-cutting (power + protection) ═══
  SFS1: Regulate electrical energy ──── [Input: Battery stored energy]
         │                               [Output: Regulated DC to all SFs]
         ├── Low battery → SF6 (warning indicator)
         └── Thermal limit → SF6 (thermal warning) + throttle SF2/SF3/SF5

  SFS2: Protect internals ───── IP67 enclosure, shock isolation, thermal path

  SFS3: Interface with weapon ── Picatinny mount, recoil alignment retention
```

---

## Range Derivation Note [QC-RUN14, CHK-07b]

SF5 requires target range as input. This is NOT directly sensed — V-SMASH-M is a monocular system with no dedicated range sensor (laser rangefinder or stereo would violate HC-2 weight / HC-4 cost).

**Range estimation method (function-level):** Angular size (SF2 output) × known physical size (SF3 class → lookup table of typical drone wingspans) → estimated range via:

```
range = (physical_size × focal_length) / (pixel_size × apparent_pixels)
```

**Accuracy depends on:**
- SF3 classification correctness (wrong class → wrong physical size → wrong range)
- Target aspect angle (front-on vs side-on changes apparent size)
- Sensor resolution and FOV (from Phase 1: VM-S01, VM-S08)

**P18 implication:** Range estimation is a working principle decision within SF5. Options include:
- **Monocular size-based** (described above) — no extra hardware, accuracy ±30% at 200m
- **Monocular temporal** (parallax from weapon sway) — clever but noise-sensitive
- **Pre-set range bands** (50/100/150/200m selector) — simplest, operator input required
- **None** (fixed range assumption) — simplest, least accurate

This is a DoF within SF5 for the morphological matrix.

---

## Completeness Check

| Sub-function | Necessary? | Sufficient? | Solution-neutral? | Sequence logical? | Interface defined? |
|-------------|-----------|------------|-------------------|-------------------|-------------------|
| SF1: Capture visual scene | Yes — no scene data = no detection | Yes | Yes — no sensor named | Yes — first in chain | In: ambient light. Out: digital image data |
| SF2: Detect aerial object | Yes — without detection, no tracking | Yes | Yes — no algorithm named | Yes — needs image from SF1 | In: image data. Out: bounding boxes + tracks + angular size |
| SF3: Classify object type | Yes — safety requires classification before lead [QC-RUN13] | Yes | Yes — no model named | Yes — needs detections from SF2 | In: object tracks. Out: class label + confidence + physical size |
| SF4: Gate on confidence | Yes — VM-Y03 [SAFETY-CRITICAL] | Yes | Yes — threshold-based | Yes — needs confidence from SF3 | In: confidence score. Out: display-enable signal |
| SF5: Compute ballistic lead | Yes — core value ("follow the dot") | Yes | Yes — no ballistic model named | Yes — needs target state + range + gate | In: position/velocity + range (derived SF2×SF3) + gate (SF4). Out: angular offset (bounds-checked) |
| SF6: Present aiming reference | Yes — soldier must see indicator | Yes | Yes — no display tech named | Yes — needs lead + confidence + status | In: lead angle + confidence + status. Out: visual indicator |
| SF7: Store engagement data | Yes — VM-S05 + OM13 | Yes | Yes — no protocol named | Yes — parallel, non-blocking | In: engagement params. Out: data record / wireless signal |
| SFS1: Regulate energy | Yes — all SFs need power | Yes | Yes — no battery named | Cross-cutting | In: battery energy. Out: regulated DC + thermal mgmt |
| SFS2: Protect internals | Yes — HC-5 survivability | Yes | Yes — no material named | Cross-cutting — passive | Enclosure boundary conditions |
| SFS3: Interface with weapon | Yes — HC-3 weapon mount | Yes | Yes — no mount mechanism named | Cross-cutting — structural | Mechanical interface to rail |

**Completeness verdict:** 7 main + 3 supporting = 10 total. All necessary, solution-neutral, interfaces defined.

---

## Failure Mode Cross-Check

| Failure Mode | Which SF handles it? | Coverage |
|-------------|---------------------|----------|
| Sensor failure (no image) | SF1 → SFS1 detects fault → SF6 displays "SENSOR FAULT" (VM-N06) | ✅ |
| AI inference hang (>500ms) | SF2/SF3 → timeout → SF6 displays "AI FAULT" (VM-N06) | ✅ |
| Misclassification (bird as drone) | SF3 → SF4 gates on confidence. VM-Y04 ≤2% FPR | ✅ |
| Classification below threshold | SF4 → suppresses SF5 → SF6 shows RED, no dot (VM-Y03) | ✅ |
| **Ballistic computation fault** [QC-RUN14] | SF5 bounds check: lead >physical limit OR >5°/frame jump without target motion → SF6 displays "COMPUTE FAULT", suppresses indicator | ✅ |
| **Range estimation error** [QC-RUN14] | Wrong class (SF3) → wrong size → wrong range → wrong lead. Mitigated by: SF4 confidence gating + SF5 bounds check catches extreme errors. Residual risk: moderate range error → inaccurate lead within plausible bounds. Accepted — inherent to monocular systems. | ⚠ (residual) |
| Power loss | SFS1 → SF6 goes blank, no residual indicator (VM-Y02) | ✅ |
| Thermal throttle | SFS1 → reduces SF2/SF3 rate → SF6 displays "THERMAL" (VM-N06) | ✅ |
| Recoil shock during tracking | SFS3 maintains alignment → SF1 reacquires → SF2/SF5 recompute ≤200ms (VM-S07) | ✅ |
| BLE link lost | SF7 buffers locally. System operates fully standalone (VM-S05) | ✅ |

**9 failure modes covered. 1 residual risk (monocular range estimation inaccuracy) — inherent to the physics, not a design gap. Mitigated by bounds checking and confidence gating.**

---

## P17 → P18 Handoff

**The 7 main SFs become morphological matrix rows.** For each, P18 will generate 3-5 working principle options.

**The 3 supporting functions become evaluation criteria** in P20/P21 — they constrain all concepts equally.

**Key P18 decisions flagged:**
- SF1: sensor type (visible / near-IR / dual-band)
- SF3: classification architecture (on-device CNN / classical CV / hybrid)
- SF5: range estimation method (monocular size / temporal / preset / none)
- SF6: display technology (OLED overlay / LED ring / projected / phone HUD)

**QC Gate Run #14 result after amendments:** 12 PASS, 0 FLAG, 0 FAIL = PROCEED.
