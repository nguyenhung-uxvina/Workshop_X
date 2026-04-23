---
project: V-SMASH-JIG-PR11
type: tooling-sub-project
version: 1.0
created: 2026-02-24
status: draft
parent_family: V-SMASH
equipment_code: EQ-009
drawing_ref: VM-PR11-DWG-001
nre_budget: $2,000
reusable_by: [V-M, V-L, V-D, V-X, V-T, V-NV, V-P]
priority: CRITICAL — blocks V-SMASH-M production (OP-110, OP-260) + depot maintenance
safety_critical: true
safety_checks: [QC-06, QC-10]
production_bottleneck: true
---

# V-SMASH-JIG-PR11 — Bore-Sight Optical Alignment Jig

## 1. Purpose

Custom jig for aligning the OLED display module (SA-03) optical axis to the CMOS sensor (SA-01) optical axis during production assembly (OP-110) and final bore-sight verification (OP-260). Also used at L2 depot for periodic bore-sight maintenance (every 500 rounds or 6 months).

**This is the most safety-critical jig in the V-SMASH production line.** Bore-sight error directly translates to aiming error on the weapon. FMEA F11 (OLED-to-sensor misalignment, RPN 162→72) is mitigated by this jig.

**UV-cure lock at OP-110 is IRREVERSIBLE.** If bore-sight fails after UV-cure, the entire SA-03 display assembly (~$35) is scrapped. PR-11 alignment verification BEFORE UV-cure is mandatory.

---

## 2. Function Summary

| Function | Description | Safety? |
|----------|-------------|---------|
| **F1 — Hold** | Secure V-SMASH unit (with SA-01 already installed) in repeatable orientation on 1913 rail | No |
| **F2 — Reference** | Collimated bore-sight target at optical infinity provides angular reference | No |
| **F3 — Measure (SA-01)** | Read CMOS sensor image to establish sensor optical axis baseline | No |
| **F4 — Measure (SA-03)** | Camera or alignment telescope reads OLED indicator position relative to sensor axis | **Yes** |
| **F5 — Adjust** | Operator adjusts SA-03 position (OLED + beam-splitter + relay lens) to minimize bore-sight error | No |
| **F6 — Verify** | Measure bore-sight error ≤0.2 mrad (factory) or ≤0.5 mrad (depot) | **Yes** |
| **F7 — Lock signal** | GREEN light = bore-sight PASS → operator may proceed with UV-cure | **Yes** |

---

## 3. Requirements (Derived from V-SMASH-M Design Package)

### 3.1 Performance Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-11-01 | Bore-sight measurement accuracy | QC-06, QC-10 | ≤0.05 mrad (measurement uncertainty ≤25% of 0.2 mrad tolerance) |
| JR-11-02 | Factory pass/fail threshold | QC-06 (OP-110) | ≤0.2 mrad |
| JR-11-03 | Final verification threshold | QC-10 (OP-260) | ≤0.5 mrad |
| JR-11-04 | Depot maintenance threshold | B4/B5 bore-sight check | ≤0.5 mrad PASS, 0.5–1.0 mrad WARNING, >1.0 mrad FAIL |
| JR-11-05 | Repeatability (gauge R&R) | Production QC | ≤15% of tolerance band (≤0.03 mrad) |
| JR-11-06 | Collimated target | Optical infinity simulation | ≥10m effective or achromatic collimator |
| JR-11-07 | Measurement resolution | Angular measurement | ≤0.01 mrad |

### 3.2 Mechanical Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-11-10 | DUT mounting interface | VM-G03 | MIL-STD-1913 Picatinny rail (21.2±0.1 mm) |
| JR-11-11 | SA-03 adjustment access | OP-110 | Operator can adjust OLED/beam-splitter/relay lens position while DUT is mounted |
| JR-11-12 | UV lamp access | OP-110 | UV cure lamp (365nm) can reach adhesive bond points while DUT is on jig |
| JR-11-13 | Dual-use capability | OP-110 + OP-260 | Same jig for assembly alignment AND final verification (no reconfiguration) |
| JR-11-14 | Weight | Workstation handling | ≤8 kg (benchtop) |
| JR-11-15 | Depot portability | L2 maintenance | Transportable in protective case for field depot use |

### 3.3 Production Requirements

| ID | Requirement | Source | Value |
|----|-------------|--------|-------|
| JR-11-20 | Cycle time OP-110 | B3 OP-110 | ≤8 min (alignment + measurement + UV-cure) |
| JR-11-21 | Cycle time OP-260 | B3 OP-260 | ≤3 min (measurement only) |
| JR-11-22 | Capacity | B3 analysis | ≥8 units/shift (single jig, 8h shift) |
| JR-11-23 | Calibration interval | B3 Phần V | Bore-sight reference calibration annually |
| JR-11-24 | Lifetime | Production volume | ≥5,000 cycles (10 years @ 500 units/year) |
| JR-11-25 | Operator skill level | B3 WS-OPT01 | Skilled technician (Level 2+), QC sign-off required |

**Bottleneck analysis:** At OP-110 (8 min/unit), single PR-11 handles ~60 units/shift. At >500 units/year (~2 units/day), one jig is sufficient. At 2,000 units/year (~8 units/day), a second PR-11 ($2K) is needed.

---

## 4. Conceptual Design

### Architecture

```
┌──────────────────────────────────────────────────────┐
│  PR-11 BORE-SIGHT JIG                                  │
│                                                        │
│  ┌──────────────────────────────────────────────────┐ │
│  │              OPTICAL BENCH                        │ │
│  │                                                   │ │
│  │  ┌─────────┐   ┌─────────────┐   ┌──────────┐  │ │
│  │  │COLLIMATOR│   │ DUT MOUNT   │   │ALIGNMENT │  │ │
│  │  │(target   │──→│ (1913 rail  │──→│TELESCOPE │  │ │
│  │  │ source)  │   │  + clamps)  │   │or CAMERA │  │ │
│  │  └─────────┘   └──────┬──────┘   └────┬─────┘  │ │
│  │                        │                │        │ │
│  │                   UV LAMP ACCESS         │        │ │
│  │                   (hinged arm)           │        │ │
│  └──────────────────────────────────────────┴───────┘ │
│                                              │        │
│                                         ┌────┴────┐  │
│                                         │ PC +    │  │
│                                         │ SOFTWARE│  │
│                                         │ (mrad   │  │
│                                         │  readout│  │
│                                         │  + P/F) │  │
│  ┌────────────────┐                     └─────────┘  │
│  │ PASS/FAIL LIGHT│  GREEN ≤0.2 mrad (OP-110)       │
│  │                │  YELLOW 0.2-0.5 mrad (warning)    │
│  │                │  RED >0.5 mrad (FAIL)             │
│  └────────────────┘                                    │
└──────────────────────────────────────────────────────┘
```

### Measurement Principle

Two approaches for bore-sight measurement:

**Option A: Autocollimator Method (Recommended)**

1. Autocollimator projects collimated beam into V-SMASH eyepiece
2. V-SMASH sensor sees the beam → establishes sensor axis
3. V-SMASH OLED projects indicator → autocollimator reads indicator position
4. Angular difference between (2) and (3) = bore-sight error
5. Software displays real-time error in mrad + PASS/FAIL

**Option B: Dual-Camera Method**

1. Camera A reads CMOS sensor feed via USB-C → sensor axis reference
2. Camera B reads OLED output via eyepiece → indicator position
3. Software calculates angular offset between the two
4. Requires calibrated geometric relationship between cameras

**Recommendation:** Option A (autocollimator) — single optical path, higher accuracy, industry-standard for bore-sight measurement. Off-the-shelf electronic autocollimators (e.g., Taylor Hobson, Möller-Wedel) available but expensive (~$5K+). Alternative: build simplified autocollimator from achromatic collimator + beamsplitter + camera, within $2K budget.

### Simplified Autocollimator Design (Budget Version)

```
Light Source → Reticle → Collimating Lens → [Beamsplitter] → DUT eyepiece
                                                  ↓
                                             Camera (USB3)
                                                  ↓
                                          Software: measure
                                          reticle reflection
                                          vs OLED indicator
                                          → compute mrad offset
```

- Collimating lens: Same as PR-05 (f=200mm, Ø50mm achromatic) — **shared procurement**
- Camera: Same spec as PR-10 (5MP USB3 global shutter) — **shared procurement**
- Beamsplitter: 50/50 cube (BK7, 25mm) — $60
- Reticle: Cross-hair on glass — $30
- LED source: White LED + diffuser — $20

---

## 5. Bill of Materials (Conceptual)

| # | Item | Source | Est. Cost |
|---|------|--------|-----------|
| 1 | Optical bench plate AA6061-T6, 400×250×20mm, anodized | Local CNC | $200 |
| 2 | 1913 rail fixture (matching PR-10) + quick-release clamps | Local CNC | $120 |
| 3 | Achromatic collimating lens f=200mm Ø50mm | Import (shared with PR-05) | $400 |
| 4 | Beamsplitter cube 50/50, BK7, 25mm | Import | $60 |
| 5 | Cross-hair reticle (chrome on glass) | Import | $30 |
| 6 | LED source + diffuser + mount | Local | $20 |
| 7 | Machine vision camera (5MP, USB3, global shutter) | Import (shared spec with PR-10) | $300 |
| 8 | Camera lens (C-mount, 50mm f/2.0 — longer FL for mrad resolution) | Import | $100 |
| 9 | Optical tube assembly (collimator + beamsplitter mount) | Local CNC + import optics mounts | $150 |
| 10 | UV lamp articulated arm (365nm, hinged for access) | Import | $80 |
| 11 | PASS/FAIL indicator (3-color tower light) | Import | $25 |
| 12 | Alignment software (Python + OpenCV + autocollimator algorithm) | In-house (KN) | $0 (labor) |
| 13 | Protective carrying case (depot use) | Local | $50 |
| 14 | Assembly + optical alignment + calibration | WX | $250 |
| | **Total** | | **~$1,785** |
| | **Contingency (12%)** | | **$215** |
| | **Budget** | | **$2,000** (at NRE limit) |

**Savings note:** Collimating lens and camera share specifications with PR-05 and PR-10. Bulk procurement of 3 cameras + 2 collimating lenses saves ~$100.

---

## 6. Dependencies

| Dependency | Required From | Status | Impact |
|------------|--------------|--------|--------|
| VM-5301 optical bench drawing | V-SMASH-M B2 | PENDING | Defines sensor axis reference datum |
| SA-03 display module assembly procedure | B3 OP-110 | AVAILABLE | UV-cure sequence, adjustment range |
| OLED indicator pixel coordinates | V-SMASH-M software spec | PARTIALLY AVAILABLE | Bore-sight reference point in OLED output |
| Bore-sight tolerance derivation | V-SMASH-M optical analysis | AVAILABLE (≤0.2 factory, ≤0.5 in-service) | Pass/fail thresholds |
| Autocollimator algorithm | Software development | PENDING | Core measurement software |

**Critical path:** Autocollimator algorithm validation (simulated test → real hardware) is the longest software task.

---

## 7. Reusability Across V-SMASH Family

| Variant | Reusable? | Adaptation Needed |
|---------|-----------|-------------------|
| V-SMASH-L | **YES** — same OLED + beam-splitter optical path | None — V-M display module is V-L subset |
| V-SMASH-D | **NO** — V-D has no OLED display (detection-only, alert via Zalo/buzzer) | Not applicable |
| V-SMASH-X | **YES** — V-L clone | None |
| V-SMASH-T | **YES** — same display path + laser reticle overlay | Software: add laser alignment check |
| V-SMASH-NV | **PARTIAL** — thermal overlay changes display output | Software: dual-channel bore-sight (visible + thermal) |
| V-SMASH-P | **YES** — same optical principle, higher magnification | Software: different mrad thresholds |
| V-SMASH-R | **NEW JIG** — vehicle-mount, different optical path | Complete redesign for vehicle optics |

**Reuse factor:** 5/8 direct or with software changes. V-D not applicable (no display). V-R needs separate jig.

---

## 8. Safety Verification of the Jig Itself

| Check | Method | Criteria | Frequency |
|-------|--------|----------|-----------|
| Measurement accuracy | Certified angular reference (optical polygon or autocollimator calibration artifact) | Error ≤0.05 mrad across ±2 mrad range | Annually |
| Gauge R&R study | 3 operators × 10 units × 3 trials | R&R ≤15% of 0.2 mrad tolerance (≤0.03 mrad) | Before production release |
| Thermal stability | Measure bore-sight at 20°C and 26°C (WS-OPT01 range) | Drift ≤0.02 mrad over 6°C range | Once (validation) |
| PASS/FAIL threshold validation | Present known-offset units at 0.15, 0.20, 0.25 mrad | Correct classification 50/50 | Monthly |
| UV lamp interference | Measure bore-sight before and after UV-cure (100 units) | No systematic drift from UV lamp proximity | Once (validation) |

---

## 9. Depot Configuration

PR-11 serves dual purpose: production AND depot maintenance. Depot configuration:

| Attribute | Production (WS-OPT01) | Depot (L2) |
|-----------|----------------------|------------|
| Location | Clean bench, fixed | Field workshop, transportable |
| Threshold | ≤0.2 mrad (OP-110), ≤0.5 mrad (OP-260) | ≤0.5 mrad PASS, 0.5–1.0 WARNING, >1.0 FAIL |
| UV-cure | Yes (OP-110) | No (depot does not re-bond optics) |
| Cycle time | 8 min (OP-110), 3 min (OP-260) | ~5 min (measurement only) |
| Operator | Skilled technician | L2 depot technician |
| Transport | Fixed installation | Protective case (JR-11-15) |
| Calibration | Annual (certified) | Before each depot session (reference standard) |
| Software mode | PRODUCTION (0.2/0.5 mrad thresholds) | DEPOT (0.5/1.0 mrad thresholds, 3-tier display) |

**Depot deployment:** Each L2 maintenance depot needs 1× PR-11 (or time-share with production). For initial V-SMASH-M deployment (<500 units), one PR-11 shared between production and depot is sufficient.

---

## 10. Timeline

| Phase | Activity | Duration | Depends On |
|-------|----------|----------|------------|
| Design | Optical bench + autocollimator layout | 2 weeks | B2 drawings (optical bench datum) |
| Algorithm | Autocollimator software + simulation validation | 3 weeks (parallel with design) | OLED pixel spec |
| Procurement | Optics + camera + beamsplitter | 4 weeks (parallel) | Budget approved |
| Fabrication | CNC machining + optical assembly | 2 weeks | Design complete + parts received |
| Integration | Assemble + optical alignment + software install | 1 week | All components |
| Calibration | Certified angular reference measurement | 1 week | Integration complete |
| Validation | Gauge R&R + thermal stability + false-rate study | 1 week | Calibration |
| **Total** | | **~9 weeks** (7 weeks critical path: design→fabrication→integration→calibration→validation) | |

**Note:** PR-11 is the longest-lead tooling sub-project (9 weeks vs 8 for PR-05/PR-10) due to optical calibration requirements.

---

*Sub-project of V-SMASH Product Family — Production Tooling (Safety-Critical, Production Bottleneck)*
*Cross-reference: [[V-SMASH-M_B3_Process_Plan_v1.0|B3 OP-110, OP-260, QC-06, QC-10]], [[V-SMASH-M_Verification_Plan_v1.0|VM-S06, VM-N03, FMEA F11]], [[V-SMASH-M_B4_User_Manual_v1.0|L2 bore-sight procedure]], [[V-SMASH-M_B5_Maintenance_Manual_v1.0|L2 depot maintenance]]*
