---
project: V-SMASH-M
phase: 4
type: fat-procedure
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
location: Workshop X, Vietnam
authority: KN Nguyen (Chief Engineer) + Customer Representative
inputs:
  - V-SMASH-M_VnV_Master_Plan_v1.0.md (parent)
  - V-SMASH-M_Test_Requirements_v1.0.md (T01-T14)
  - V-SMASH-M_Verification_Plan_v1.0.md (78 requirements)
  - V-SMASH-M_B1_YCKT_v1.0.md (requirements specification)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (assembly reference)
---

# V-SMASH-M (Micro-Sight) — Factory Acceptance Test (FAT) Procedure v1.0

**Nghiệm thu tại nhà máy — Workshop X**
**Version 1.0 | 2026-03-02**

---

## 1. FAT Overview

### 1.1 Purpose

The Factory Acceptance Test (FAT) is the formal verification performed at Workshop X before units are shipped to the customer. FAT confirms that each delivered unit:

1. Meets all requirements specified in V-SMASH-M_B1_YCKT_v1.0 (YCKT = Yêu Cầu Kỹ Thuật)
2. Has passed all system qualification tests (T01–T14) on qualification units
3. Is properly assembled, calibrated, and documented
4. Is ready for field deployment without further modification

FAT is executed on production units (not qualification units). The FAT scope is the production acceptance subset — it does NOT repeat the full environmental qualification (T01–T08, which requires external lab).

### 1.2 FAT Authority

| Role | Name | Responsibility |
|------|------|---------------|
| FAT Director | KN Nguyen | Overall FAT authority; final go/no-go |
| FAT Engineer | HW Lead | Test execution, technical witness |
| Customer Representative | TBD (Kỹ thuật QĐND) | Witness; signs FAT record |
| Quality | QA Officer | Independent verification of safety-critical tests |

**Rule:** FAT record is not valid unless signed by ALL four roles above.

### 1.3 FAT Entry Criteria

Before FAT begins, all of the following must be satisfied:

| Criterion | Verification |
|-----------|-------------|
| System qualification (T01–T14) complete | Lab certificates in documentation package |
| L2 HW-SW integration tests passed | L2 test report signed by SW Lead |
| SW baseline frozen and hash-verified | Build manifest with git tag + hash |
| Production units fully assembled | Assembly record per V-SMASH-M_Assembly_Sequence |
| All test equipment calibrated | Calibration certificates valid ≥30 days beyond FAT |
| Customer representative present or approved to proceed remotely | Written confirmation |

### 1.4 FAT Exit Criteria

FAT is passed when:
- All MANDATORY tests pass with no open CAT-1 (Category 1 = safety or non-functional defects)
- CAT-2 defects (minor, non-safety): ≤3 per unit, each with approved corrective action
- FAT record signed by all four roles

---

## 2. Pre-FAT Checklist

Complete before starting any FAT tests. All items must be checked ✅ before proceeding.

### 2.1 Documentation Package

| # | Item | Check | Notes |
|---|------|-------|-------|
| D01 | V-SMASH-M_B1_YCKT_v1.0.md — approved version on file | ☐ | |
| D02 | System qualification reports (T01–T14) — all issued | ☐ | Lab certificates |
| D03 | FMEA with all RPN≥100 mitigations verified | ☐ | |
| D04 | SW build manifest: tag v1.0.0 + SHA hash | ☐ | |
| D05 | BOM vs. as-built verification — no deviations | ☐ | |
| D06 | UN38.3 certificate for battery lot | ☐ | Required for shipment |
| D07 | Materials certificates for PA6-GF30 housing | ☐ | |
| D08 | MIL-A-8625 Type III certificate for rail clamp | ☐ | |

### 2.2 Test Equipment

| # | Equipment | Cal. Required | Cal. Expiry | Check |
|---|-----------|--------------|-------------|-------|
| E01 | Digital caliper (0.01mm resolution) | Yes | >FAT+30d | ☐ |
| E02 | Precision scale (0.1g resolution, ≥1kg range) | Yes | >FAT+30d | ☐ |
| E03 | MIL-STD-1913 test rail fixture | Yes | >FAT+30d | ☐ |
| E04 | Bore-sight jig (PR-11) | Yes — bore-sight cert | >FAT+30d | ☐ |
| E05 | EOL test jig (PR-10) | Functional check | N/A | ☐ |
| E06 | BLE sniffer / phone app | Functional check | N/A | ☐ |
| E07 | Torque wrench (0.1–5 Nm) | Yes | >FAT+30d | ☐ |
| E08 | High-speed camera (240fps) or oscilloscope (1 GHz) | Yes (osc.) | >FAT+30d | ☐ |
| E09 | Programmable PSU (0–5V, 0–3A) | Yes | >FAT+30d | ☐ |
| E10 | Temperature reference thermometer (±0.5°C) | Yes | >FAT+30d | ☐ |

### 2.3 Unit Configuration

| # | Check | Verified By |
|---|-------|------------|
| U01 | SW version confirmed on OLED startup screen (v1.0.0) | ☐ |
| U02 | Serial number on housing matches BOM record | ☐ |
| U03 | Battery charged to ≥80% SoC | ☐ |
| U04 | Bore-sight certificate attached to unit record | ☐ |
| U05 | All external interfaces protected (USB-C cap, battery door closed) | ☐ |

---

## 3. FAT Test Sequence

Tests are numbered FAT-01 through FAT-17 and must be executed in the order listed. Any MANDATORY test failure stops FAT — defect logged, corrective action required before resuming.

---

### FAT-01: Visual Inspection

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | Internal workmanship standard |
| **Duration** | 10 min per unit |

**Procedure:**
1. Inspect housing exterior: no cracks, burrs, sharp edges, incomplete mold fill.
2. Inspect optical window: no scratches (>0.1mm), coating delamination, contamination.
3. Inspect OLED: no dead pixels (>3), no contamination behind window.
4. Inspect rail clamp: no machining defects, threads intact, M4 screws present.
5. Inspect battery door: gasket seated, latch functional.
6. Inspect USB-C port: no bent pins, no contamination.
7. Inspect cable harness (internal, via battery door opening): no pinched cables, connectors fully seated.

**Pass criteria:** No defects in items 1–7. Minor cosmetic marks (size <1mm) acceptable if they do not affect function or sealing.

---

### FAT-02: Dimensional Check — Critical Dimensions

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-G01, VM-G02, VM-G03 |
| **Equipment** | E01 (caliper), E02 (scale), E03 (rail fixture) |

**Procedure:**
1. Measure max dimensions L×W×H at 3 locations each axis. Record max.
2. Weigh unit with battery installed. Record.
3. Mount unit on MIL-STD-1913 test rail: verify go/no-go with gauge (21.2 mm ±0.1 mm).

**Pass criteria:**

| Dimension | Limit | Measured | Pass? |
|-----------|-------|---------|-------|
| Length (L) | ≤120 mm | ___ | ☐ |
| Width (W) | ≤50 mm | ___ | ☐ |
| Height (H) | ≤60 mm | ___ | ☐ |
| Weight | ≤500 g | ___ | ☐ |
| Rail fit | Go/no-go gauge | ☐ Pass / ☐ Fail | ☐ |

---

### FAT-03: Power-On and Boot Verification

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-O01, SW v1.0.0 |
| **Equipment** | E05 (PR-10 jig or direct observation) |

**Procedure:**
1. Power on with battery (or USB-C if battery not charged).
2. Observe OLED startup sequence.
3. Record time from power-on to STANDBY state (OLED shows ready indicator).
4. Verify SW version displayed on startup screen.

**Pass criteria:** Boot time ≤30s. SW version = v1.0.0 (or production-approved version). No error codes on startup. FSM reaches STANDBY state (confirmed by OLED indicator).

---

### FAT-04: EOL Functional Test (PR-10 Jig)

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-Q01, T12 |
| **Equipment** | E05 (PR-10 EOL jig) |

**Procedure:** Connect unit to PR-10 jig. Execute automated test sequence:
1. Power-on self-test (POST)
2. AI detection of built-in test pattern (simulated drone image via jig camera input)
3. OLED indicator check (all pixels, 3 colors)
4. BLE handshake with jig reference device
5. Thermal sensor read (compare to ambient E10 reference, ±5°C)
6. Battery SoC read and report

**Pass criteria:** PR-10 jig outputs PASS. Individual checks:
- POST: no fault codes
- AI detect: test pattern detected (confidence >0.80)
- OLED: no dead pixels >3; all 3 colors displayed
- BLE: handshake completes within 5s
- Thermal: reading within ±5°C of E10 reference
- Battery: SoC reading matches known charge state ±5%

---

### FAT-05: Bore-Sight Verification (PR-11 Jig)

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY [SAFETY-CRITICAL — VM-S06, VM-Y03] |
| **Standard** | PR-11 procedure, ≤0.2 mrad sensor-to-OLED alignment |
| **Equipment** | E04 (PR-11 jig) |

**Procedure:**
1. Mount unit on PR-11 bore-sight jig.
2. Display OLED reticle on jig target screen.
3. Measure angular offset between optical axis and reticle center.
4. Record result (mrad) in bore-sight certificate.

**Pass criteria:** Alignment ≤0.2 mrad in both azimuth and elevation axes. If >0.2 mrad: unit rejected — return to production for realignment.

**Note:** This is a [SAFETY-CRITICAL] test (VM-Y03). Any misalignment above limit creates systematic aiming error. QA Officer must co-sign the bore-sight record.

---

### FAT-06: Battery Life Spot Check

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-E02 (≥8h at 25°C) |
| **Equipment** | E09 (PSU), E10 (thermometer) |
| **Note** | Full T11 already completed at qualification. FAT runs abbreviated 30-min sample. |

**Procedure:**
1. Start with battery at 80% SoC.
2. Run unit in continuous AI+OLED+BLE-idle mode for 30 minutes at ambient (25±3°C).
3. Measure power draw (PSU current measurement) and project battery life.

**Pass criteria:** Measured average current ≤2.5W / battery voltage (at 80% SoC ≈ 3.9V → I ≤640 mA). Projected runtime from 100% ≥8h. No brownout or reset during 30-min test.

**Note — OI-VnV-04:** 21700 high-capacity cells (5000 mAh) have ~2× ESR of high-drain cells. ESR effects are most pronounced at low SoC (3.0–3.3V). FAT-06 projection at 80% SoC may be 10–15% optimistic at end-of-discharge. This is a screening check only; T11 qualification result (full discharge cycle) is the definitive battery life verification.

---

### FAT-07: Rail Clamp Torque Check

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-F03 (zero shift at zero torque), V-SMASH-M_Assembly_Sequence step 14 |
| **Equipment** | E07 (torque wrench) |

**Procedure:**
1. Mount unit on E03 test rail.
2. Apply 2.5 Nm to M4 rail clamp screws (production spec).
3. Verify no rotation or movement under 5 Nm lateral force.
4. Check torque retention: re-torque indicator on screw head not rotated.

**Pass criteria:** Clamp holds at 5 Nm lateral force. M4 screws accept 2.5 Nm without stripping. No movement of unit on rail.

---

### FAT-08: OLED Display Verification

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-O05 (indicator readable in daylight), VM-O06 |

**Procedure:**
1. In ambient light (≥500 lux), view OLED from operator shooting position (≥30 cm eye relief).
2. Command unit through states: STANDBY → ALERT → AMBER → RED reticle.
3. Verify each reticle color and state indicator is distinctly readable.
4. Verify AMBER reticle is visually distinct from RED (critical safety requirement).

**Pass criteria:** All 4 reticle states (GREEN standby, AMBER uncertain, RED hostile, RED-X safe zone) visible and distinguishable at ≥500 lux, ≥30 cm eye relief. AMBER must not be mistakable for RED by any of 2 independent observers.

---

### FAT-09: BLE Communication Test

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-O09, ICD-SW §ICD-09 |
| **Equipment** | E06 (BLE sniffer + reference phone app) |

**Procedure:**
1. Pair reference phone with unit via BLE.
2. Trigger simulated engagement cycle (via PR-10 jig input).
3. Verify engagement_log_record_t (64B) received on phone app within 5s.
4. Read all 11 GATT characteristics — confirm all accessible and correct data type.
5. Verify health_telemetry notification at 1 Hz for 30s.

**Pass criteria:** Pairing complete <10s. Engagement log record received <5s. All 11 characteristics readable. Health notification rate = 1 Hz ±0.1 Hz.

---

### FAT-10: HITL Gate Logic Verification [SAFETY-CRITICAL]

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY [SAFETY-CRITICAL — VM-Y01, VM-Y02] |
| **Standard** | HITL architecture (per Orchestration Design §HITL) |
| **Equipment** | E05 (PR-10 jig with trigger simulator) |

**Procedure:**
1. Command GREEN IFF (NEUTRAL classification) via jig. Simulate trigger held.
   - **Expected:** Gate pin stays LOW. Gate does NOT open. GREEN reticle displayed.
   - **Record:** Gate pin HIGH = FAIL (safety violation).

2. Command AMBER IFF (UNKNOWN) via jig. Simulate trigger held.
   - **Expected:** Gate pin stays LOW until operator confirms. AMBER reticle.
   - **Record:** Gate pin state.

3. Command RED IFF (HOSTILE, conf=0.90) + trigger held + A-FC quality=90 + window_open.
   - **Expected:** Gate pin goes HIGH for ≤50ms (fire gate). ENGAGED state.
   - **Record:** Gate pin HIGH for ≤50ms.

4. Command RED IFF + trigger held + A-FC quality=75 (below floor).
   - **Expected:** Gate pin stays LOW. Quality floor enforced.
   - **Record:** Gate pin state.

**Pass criteria:** Steps 1, 2, 4 = gate LOW (pass). Step 3 = gate HIGH for ≤50ms (pass). Any deviation from expected = FAIL. QA Officer must witness and co-sign.

---

### FAT-11: Battery Door Ergonomics (VM-G05)

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-G05 (≤20N, single hand, no tools, while mounted) |
| **Equipment** | Force gauge (optional) |

**Procedure:**
1. Mount unit on E03 rail.
2. 3 operators (different hand sizes) attempt battery swap: open door → remove battery → insert fresh battery → close door. Timed.
3. Record force estimate and time.

**Pass criteria:** All 3 operators complete battery swap successfully. No tools required. Estimated door force ≤20N. No fumbling in gloves (if tested with gloves).

---

### FAT-12: USB-C Charge Verification

| Field | Detail |
|-------|--------|
| **Category** | ADVISORY |
| **Standard** | VM-E04 (≤3h to 80%) |

**Procedure:** Discharge to ~20% SoC. Connect USB-C 5V/2A charger. Measure charge time to 80%.

**Pass criteria:** 80% SoC reached in ≤3h. No thermal anomalies during charge. Charge indicator visible on OLED.

---

### FAT-13: IP67 Verification (Spot Check)

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY (1 unit per batch of 10) |
| **Standard** | T05 (IEC 60529 IP67) |
| **Note** | Full IP67 already qualified on qualification units. FAT samples 1/10. |

**Procedure:** Immerse unit at 1m depth for 30 minutes (battery door closed, USB-C cap installed). Remove, dry, power on.

**Pass criteria:** Unit powers on normally after immersion. Mass change <0.1g (weigh before/after). No condensation inside optical window visible.

---

### FAT-14: Documentation Package Check

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | B-series delivery package |

Verify all B-series documents are present, signed, and in correct version:

| Document | Version | Signed | Check |
|----------|---------|--------|-------|
| B1 — YCKT (requirements) | v1.0 | KN | ☐ |
| B2 — Drawing Package Checklist | v1.0 | HW Lead | ☐ |
| B3 — Process Plan | v1.0 | Prod Lead | ☐ |
| B4 — User Manual (Tài liệu hướng dẫn sử dụng) | v1.0 | KN | ☐ |
| B5 — Maintenance Manual | v1.0 | KN | ☐ |
| B6 — DMKTKT (Điều kiện bảo quản, vận chuyển) | v1.0 | KN | ☐ |
| Bore-sight certificate | Per unit | HW Lead | ☐ |
| SW build manifest (git tag + hash) | v1.0.0 | SW Lead | ☐ |
| Battery UN38.3 certificate | Per lot | Supplier | ☐ |
| System qualification reports (T01–T14) | As issued | External Lab | ☐ |

---

### FAT-15: Spare Parts Verification

| Field | Detail |
|-------|--------|
| **Category** | ADVISORY |

Verify spare parts contract delivered per agreed list:
- Battery replacements (VM-6101) — quantity per contract
- O-ring seal kit (housing) — quantity per contract
- USB-C cap (IP protection) — quantity per contract

---

### FAT-16: Packaging and Marking Inspection

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY (for shipment) |
| **Standard** | VM-B2 (packaging), MIL-STD-2073 equivalent, IATA dangerous goods (battery) |

**Procedure:**
1. Verify packaging protects unit from ≥1m drop in shipping configuration.
2. Verify unit serial number on outer packaging matches BOM record.
3. Verify battery dangerous goods label per IATA regulations (lithium ion, UN3480 or UN3481).
4. Verify shipping label: destination, consignee, contract reference.

**Pass criteria:** Packaging intact. Serial number matches. DG label present and correct.

---

### FAT-17: Final Function Check (Post-Pack)

| Field | Detail |
|-------|--------|
| **Category** | ADVISORY |

After packaging (but before sealing): power on one final time, verify STANDBY state, SW version. Then seal and label.

---

## 4. Defect Classification and Management

| Category | Definition | Action |
|----------|-----------|--------|
| CAT-1 (Critical) | Safety-critical failure (FAT-05, FAT-10), non-functional unit | Stop FAT. Root cause analysis. Rework or reject unit. |
| CAT-2 (Major) | Functional deficiency (fails requirement), cosmetic defect affecting IP/sealing | Corrective action required before shipping. Track on punch list. |
| CAT-3 (Minor) | Cosmetic defect not affecting function, documentation inconsistency | Note on punch list. Accept with concession if ≤3 per unit. |

**Punch list rule:** All CAT-1 and CAT-2 must be closed before FAT sign-off. Maximum 3 open CAT-3 items per unit with approved waiver.

---

## 5. FAT Record and Sign-Off

### 5.1 FAT Summary Record

| Unit Serial | FAT Date | SW Version | Result | Punch List | Defects |
|-------------|----------|-----------|--------|-----------|---------|
| | | v1.0.0 | PASS / FAIL | Open items | CAT-1: / CAT-2: / CAT-3: |

### 5.2 FAT Sign-Off

**Kết quả nghiệm thu tại nhà máy / Factory Acceptance Test Result**

Chúng tôi xác nhận rằng thiết bị V-SMASH-M số sê-ri __________________ đã trải qua và vượt qua toàn bộ các hạng mục kiểm tra theo quy trình FAT v1.0, đáp ứng yêu cầu kỹ thuật quy định trong V-SMASH-M_B1_YCKT_v1.0.

*We confirm that V-SMASH-M unit serial number __________________ has undergone and passed all FAT test items per FAT Procedure v1.0, meeting technical requirements specified in V-SMASH-M_B1_YCKT_v1.0.*

| Role | Name | Signature | Date |
|------|------|-----------|------|
| FAT Director (KN Nguyen) | | | |
| FAT Engineer (HW Lead) | | | |
| Quality (QA Officer) | | | |
| Customer Representative (Kỹ thuật QĐND) | | | |

**Punch list items accepted with concession (if any):**

| # | Item | Category | Corrective Action | Target Date | Closed By |
|---|------|----------|------------------|-------------|-----------|
| | | | | | |

---

*V-SMASH-M FAT Procedure v1.0 — 2026-03-02*
*17 test steps: 12 MANDATORY, 3 ADVISORY, 2 MANDATORY-BATCH.*
*Safety-critical tests: FAT-05 (bore-sight), FAT-10 (HITL gate logic) — QA Officer co-signature required.*
*B-series delivery package must be complete before FAT sign-off.*
