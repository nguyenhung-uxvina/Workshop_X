---
project: V-SMASH-JIG-PR05
type: tooling-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
equipment_code: EQ-008
drawing_ref: VM-PR05-DWG-001
nre_budget: $2,000
reusable_by: [V-M, V-L, V-D, V-X, V-NV, V-P]
priority: CRITICAL — blocks V-SMASH-M production (OP-100)
---

# V-SMASH-JIG-PR05 — Sensor Optical Alignment Jig

## 1. Purpose

Custom production jig for aligning the CMOS sensor module (SA-01) to the optical bench axis during OP-100 assembly. Ensures the lens-to-sensor optical axis is concentric within tolerance before mechanical lockdown.

**Without this jig:** Sensor alignment becomes operator-dependent, uncontrolled. FMEA F03 (lens-to-sensor misalignment, RPN 162→72 after mitigation) mitigation is invalid.

---

## 2. Function Summary

| Function | Description |
|----------|-------------|
| **F1 — Hold** | V-block mount secures V-SMASH housing (lower shell VM-5201) in repeatable orientation |
| **F2 — Present** | Collimated target at optical infinity presents reference image to CMOS sensor |
| **F3 — Measure** | Live sensor feed displayed on monitor; software measures FOV center offset in pixels |
| **F4 — Shim select** | Operator selects shim (0.05/0.10/0.20mm, VM-1204) based on offset measurement |
| **F5 — Verify** | After shim insertion + fastening, re-check confirms FOV center ≤±5 pixels |

---

## 3. Requirements (Derived from V-SMASH-M Design Package)

### 3.1 Performance Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-05-01 | FOV center alignment accuracy | B3 QC-05, VM-S08 | ≤±5 pixels (≈0.15 mrad at 12° FOV) |
| JR-05-02 | Collimated target distance (effective) | Optical infinity simulation | ≥10m effective (achromatic collimator or physical target ≥10m) |
| JR-05-03 | Repeatability (gauge R&R) | Production QC | ≤20% of tolerance band (±1 pixel) |
| JR-05-04 | Measurement resolution | FOV centering | ≤1 pixel |
| JR-05-05 | Compatible sensor | VM-1200 CMOS (2MP, 1920×1080) | M12 mount, MIPI CSI-2 output |

### 3.2 Mechanical Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-05-10 | Housing interface | VM-5201 lower shell | V-block cradle for 120×50 mm envelope |
| JR-05-11 | Optical bench register | VM-5301 optical bench | H7/g6 bore alignment reference |
| JR-05-12 | Shim clearance | VM-1204 shim set | Access to shim insertion point without disassembling jig |
| JR-05-13 | Fastener access | VM-1202 M2×4 screws | Torque wrench M2 (0.3Nm) clearance |
| JR-05-14 | Weight | Workstation handling | ≤5 kg (benchtop, one-hand move) |

### 3.3 Environmental & Production Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-05-20 | Operating environment | WS-OPT01 | Clean bench (ISO 7), 23±3°C, ≥1000 lux |
| JR-05-21 | Cycle time contribution | B3 OP-100 | ≤5 min total (including measurement + shim select) |
| JR-05-22 | Calibration interval | B3 Phần V | Collimated target calibration annually |
| JR-05-23 | Lifetime | Production volume | ≥5,000 cycles (10 years @ 500 units/year) |
| JR-05-24 | Operator skill level | B3 WS-OPT01 | Skilled technician (Level 2+) |

---

## 4. Conceptual Design

### Option A: Achromatic Collimator + V-Block (Recommended)

```
┌─────────────────────────────────┐
│  BASEPLATE (AA6061-T6 anodized) │
│                                 │
│  ┌──────────┐    ┌───────────┐ │
│  │ V-BLOCK  │    │COLLIMATOR │ │
│  │ (housing │←──→│ (achro.   │ │
│  │  cradle) │    │  lens +   │ │
│  │          │    │  target)  │ │
│  └──────────┘    └───────────┘ │
│       ↕                        │
│  Datum pins for                │
│  optical bench register        │
│                                │
│  USB-C → PC/Monitor            │
│  (live sensor feed + SW)       │
└─────────────────────────────────┘
```

- **Collimator:** Off-the-shelf achromatic collimator lens (f=200mm, Ø50mm) + USAF 1951 resolution target
- **V-block:** CNC machined AA6061-T6, datum pins match optical bench H7 bore
- **Software:** Python script captures CMOS feed, calculates centroid offset, displays pass/fail
- **Pros:** Compact (benchtop), repeatable, off-the-shelf optics
- **Cons:** Collimator lens adds cost (~$300-500)

### Option B: Long-Range Physical Target

- USAF 1951 chart at ≥10m physical distance
- V-block identical to Option A
- **Pros:** Simpler, cheaper
- **Cons:** Requires 10m clear line-of-sight in clean room, ambient light variation

**Recommendation:** Option A — achromatic collimator. Compact, controllable, no ambient dependency.

---

## 5. Bill of Materials (Conceptual)

| # | Item | Source | Est. Cost |
|---|------|--------|-----------|
| 1 | Baseplate AA6061-T6, 300×200×15mm, anodized | Local CNC | $150 |
| 2 | V-block cradle, AA6061-T6, CNC | Local CNC | $200 |
| 3 | Datum pins (H7 ground, Ø6×20mm, SS) ×3 | Local | $30 |
| 4 | Achromatic collimator lens, f=200mm, Ø50mm | Import (Edmund/Thorlabs) | $400 |
| 5 | USAF 1951 resolution target (chrome on glass) | Import | $80 |
| 6 | Collimator tube + mount hardware | Local CNC + import | $150 |
| 7 | LED illuminator for target (white, diffused) | Local | $30 |
| 8 | USB-C breakout for sensor feed | Off-the-shelf | $20 |
| 9 | Alignment software (Python + OpenCV) | In-house (KN) | $0 (labor) |
| 10 | Quick-release clamps ×2 | Import | $40 |
| 11 | Rubber feet (vibration isolation) ×4 | Local | $10 |
| 12 | Assembly labor + calibration | WX | $200 |
| | **Total** | | **~$1,310** |
| | **Contingency (30%)** | | **$390** |
| | **Budget** | | **$1,700** (within $2,000 NRE) |

---

## 6. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| VM-5301 optical bench drawing | V-SMASH-M B2 (VM-5301-DWG-001) | PENDING (B2 not yet in CAD) | Datum pin positions derive from bench register bore |
| VM-5201 lower shell drawing | V-SMASH-M B2 (VM-5201-DWG-001) | PENDING | V-block cradle geometry |
| VM-1200 CMOS sensor datasheet | BOM | AVAILABLE | MIPI CSI-2 pinout for breakout board |
| VM-1204 shim set dimensions | BOM | AVAILABLE | Shim insertion clearance |
| Alignment software spec | V-SMASH-M firmware team | PENDING | Centroid calculation algorithm |

**Critical path:** Cannot finalize V-block cradle until B2 drawings exist (housing + bench dimensions).

---

## 7. Reusability Across V-SMASH Family

| Variant | Reusable? | Adaptation Needed |
|---------|-----------|-------------------|
| V-SMASH-L | **YES** — same optical bench design (V-L is foundation) | None — V-M sensor module is V-L subset |
| V-SMASH-D | **YES** — same CMOS sensor, simplified optics | Minor V-block change (different housing) |
| V-SMASH-X | **YES** — V-L clone with feature removal | None |
| V-SMASH-T | **YES** — same sensor + optics | None |
| V-SMASH-NV | **PARTIAL** — different sensor (thermal + visible) | New V-block insert for dual-sensor alignment |
| V-SMASH-P | **PARTIAL** — larger optics, same principle | Larger collimator may be needed |
| V-SMASH-R | **PARTIAL** — vehicle-mount, different housing | New V-block insert |

**Reuse factor:** 4/8 direct, 3/8 with adapter inserts. NRE amortized across family.

---

## 8. Verification of the Jig Itself

| Check | Method | Criteria | When |
|-------|--------|----------|------|
| Gauge R&R study | 3 operators × 10 parts × 3 trials | R&R ≤20% of tolerance (±1 pixel) | Before production release |
| Collimator calibration | Autocollimator check against certified flat | Collimation error ≤0.05 mrad | Annually |
| Datum pin wear | Go/no-go gauge on H7 pins | Pins within H7 tolerance | Every 500 cycles |
| Software validation | Known-offset test targets (±3, ±5, ±10 pixels) | Correct measurement within ±0.5 pixel | After SW update |

---

## 9. Timeline

| Phase | Activity | Duration | Depends On |
|-------|----------|----------|------------|
| Design | V-block + baseplate CAD | 2 weeks | B2 drawings (housing + bench) |
| Procurement | Collimator lens + optics | 4 weeks | Order placed |
| Fabrication | CNC machining (local) | 2 weeks | Design complete |
| Assembly | Integrate + calibrate | 1 week | All parts received |
| Validation | Gauge R&R + first article | 1 week | Assembly complete |
| **Total** | | **~8 weeks** (6 weeks critical path with 2 wk parallel procurement) | |

---

*Sub-project of V-SMASH Product Family — Production Tooling*
*Cross-reference: [[V-SMASH-M_B3_Process_Plan_v1.0|B3 OP-100, QC-05]], [[V-SMASH-M_Verification_Plan_v1.0|VM-S08, FMEA F03]], [[V-SMASH-M_B2_Drawing_Package_Checklist_v1.0|VM-PR05-DWG-001]]*
