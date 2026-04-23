---
created: 2026-04-11
type: design-type
block: BD
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: COMPLETE
design_type: ADAPTIVE
feeds_to:
  - Phase 2 helix-concept-generate (depth calibration)
---

# Design Type Assessment — VN-MGM V5-MOTORIZED

## Classification: ADAPTIVE

| Criterion | Original | Adaptive | Variant | V5 Score |
|-----------|:--------:|:--------:|:-------:|:--------:|
| New physics / principles? | YES | Some | No | Some (motor+clutch = new for WX) |
| Base product exists? | No | **YES** | YES | **V1 = 300 units** |
| Function structure changes? | All new | **Partial** | Minimal | **F1-F6 frozen, F7-F12 new** |
| WP search required? | Deep everywhere | **Deep on novel SFs** | Shallow | **Deep on F7.1/F8.1/F9.1** |
| Solution space explored? | Wide open | **Bounded by base** | Narrow | **Bounded by V1 architecture** |

**V5 = ADAPTIVE** — known base (V1 TRL 9) + known delta type (motorization = well-understood in industry, no new physics). ICDM platform requirements add scope but not novelty.

## Phase 2 Depth Calibration

| SF Group | Count | Depth | Rationale |
|----------|:-----:|:-----:|-----------|
| F7 Drive Azimuth | 4 | MEDIUM | CEO confirmed pinion-ring mesh. Bracket design is new. |
| F8 Drive Elevation | 4 | **DEEP** | Elevation coupling = open question (more options than N12 since V5 can modify V1) |
| F9 Transition | 3 | MEDIUM | EM NC locked. Integration approach varies. |
| F10 Control | 3 | SHALLOW | Standard servo architecture (STM32 + drives) |
| F11 Report Data (ICDM) | 3 | SHALLOW | Protocol selected (Modbus+CANopen). Hardware standard. |
| F12 Sustain Platform (ICDM) | 3 | SHALLOW | UPS + logging = COTS solutions |

---

*Design Type | ADAPTIVE | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
