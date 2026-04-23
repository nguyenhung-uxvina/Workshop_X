---
created: 2026-04-11
type: icdm-requirements-extension
block: BA
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: DRAFT — CEO review needed
base_document: VN_MGM_V5_Requirements_List_v1.0.md (86 req)
icdm_new_count: 18
total_after_merge: 104
feeds_to:
  - VN_MGM_V5_Requirements_List_v2.0.md (BB merge)
  - Phase 2 helix-concept-generate
---

# ICDM Requirements Extension — VN-MGM V5-MOTORIZED

> **Purpose:** Augment existing 86 requirements (v1.0) with 18 ICDM-specific requirements covering modularity, extensibility, platform commonality, innovation metrics, and collaboration gates.
> **Method:** ISO 56002 Innovation Management + ICDM framework mapped to P&B categories.
> **Action:** CEO reviews, then BB merges into Requirements_List_v2.0.

---

## 1. ICDM Rationale

V5 is NOT just a motorized mount — it is the **platform foundation** for:
- N12-RETROFIT-KIT (same motors, clutch, controller)
- Future optics/FCS add-on (Step 2-3 upgrade path)
- Future AI auto-tracking SF-A (ACH via data port)
- Future gyro stabilization N11
- Future full RCWS (V5 + optics + AICC + gyro)

**ICDM principle:** Design decisions made NOW determine whether these future extensions require:
- (a) plug-in (low cost, fast) — GOOD design
- (b) re-design (high cost, slow) — BAD design

ICDM requirements ensure (a) by mandating **architecture-level extensibility** without increasing V5 baseline cost significantly (≤5% BOM overhead = ≤$500).

---

## 2. ICDM Requirements — 3 New Categories

### CAT 17: MODULARITY & EXTENSIBILITY (7 requirements) — ICDM NEW

| ID    | Requirement                                    | Value/Limit                                                                                                 | D/W | Verify | Source                       | Status |
| ----- | ---------------------------------------------- | ----------------------------------------------------------------------------------------------------------- | --- | ------ | ---------------------------- | ------ |
| IX-01 | **Controller software: modular architecture**  | ≥3 independent software modules (motor control, safety, communication) separately updatable via serial port | D   | T      | [ICDM: S10 future RCWS]      | Design |
| IX-02 | **Data port protocol: defined and documented** | RS485: Modbus RTU. CAN: CANopen DS301. Protocol specification document included with product.               | D   | I      | [ICDM: B0 scope upgrade]     | Design |
| IX-03 | **Power budget headroom**                      | ≥30% unused power capacity at V5 baseline config (if V5 uses 400W → PSU capable 520W+)                      | D   | T      | [ICDM: B0 scope upgrade]     | Design |
| IX-04 | **Mechanical expansion interface**             | ≥2 threaded M8 mounting points on controller bracket for future sensor/camera mount                         | W   | I      | [ICDM: S10 future camera]    | Design |
| IX-05 | **Controller I/O reserve**                     | ≥4 unused GPIO + 1 unused UART on STM32 for future peripheral                                               | W   | I      | [ICDM: S10 future FCS]       | Design |
| IX-06 | **Connector standardization**                  | All electrical connectors = same series (MIL-DTL-38999 or M12). Max 3 connector types across entire kit.    | W   | I      | [ICDM: S11 N12 commonality]  | Design |
| IX-07 | **Software update without disassembly**        | Controller firmware update via external port (USB or serial) without opening IP65 enclosure                 | W   | D      | [ICDM: lifecycle management] | Design |

### CAT 18: PLATFORM COMMONALITY (6 requirements) — ICDM NEW

| ID | Requirement | Value/Limit | D/W | Verify | Source | Status |
|---|---|---|---|---|---|---|
| PC-01 | **Motor commonality V5 ↔ N12** | SAME motor model for both V5 and N12-RETROFIT-KIT (azimuth and elevation) | D | I | [ICDM: S11 cost synergy] | Design |
| PC-02 | **Gearbox commonality V5 ↔ N12** | SAME gearbox model for both V5 and N12 (at least azimuth axis) | D | I | [ICDM: S11 cost synergy] | Design |
| PC-03 | **EM clutch commonality V5 ↔ N12** | SAME EM clutch model for both V5 and N12 | D | I | [ICDM: S11 cost synergy] | Design |
| PC-04 | **Controller board commonality V5 ↔ N12** | SAME STM32 board + firmware base for both V5 and N12. V5 adds UPS management. | W | I | [ICDM: S11 reduced NRE] | Design |
| PC-05 | **Spares kit commonality** | ≥70% of N10-MAINT-KIT items applicable to V5 motor subsystem | W | A | [ICDM: S11 after-sales] | [ESTIMATE] |
| PC-06 | **Joystick commonality V5 ↔ N12** | SAME joystick + cable assembly | D | I | [ICDM: S11 training transfer] | Design |

### CAT 19: INNOVATION MANAGEMENT (5 requirements) — ICDM NEW

| ID | Requirement | Value/Limit | D/W | Verify | Source | Status |
|---|---|---|---|---|---|---|
| IM-01 | **Field data capture capability** | Controller logs: motor current, position, fault events, operating hours. Downloadable via data port. | W | T | [ICDM: forge-flywheel data] | Design |
| IM-02 | **Customer feedback loop** | Post-delivery: structured field report template at 100, 500, 2000 rounds. WX collects, analyzes, feeds v2. | W | D | [ICDM: ISO 56002 feedback] | Process |
| IM-03 | **Innovation budget allocation** | ≤5% of BOM ($350-500) allocated to future-proof features (data port HW, connector reserves, I/O reserve) | D | A | [ICDM: B0 IC-3 resolution] | Design |
| IM-04 | **Trắc thủ co-design session** | ≥1 field session with operators during Phase B integration (before Phase C live fire) | D | D | [ICDM: S1 user insight] | Process |
| IM-05 | **Cross-product design review** | V5 Phase 2 concept review includes N12 team check (verify commonality PC-01 to PC-06) | W | D | [ICDM: S11 alignment] | Process |

---

## 3. Impact on Existing Requirements

### 3a. Requirements UPGRADED (D/W change)

| Existing ID | Current | ICDM Change | Rationale |
|-------------|:-------:|:-----------:|-----------|
| S-04 | W (RS485 + CAN) | **→ D** | ICDM: data port is platform foundation, not optional. Without it, every future upgrade is custom. |
| AS-02 | W (controller removable) | **→ D** | ICDM: field firmware update (IX-07) requires accessible controller. |

### 3b. Requirements REFINED (value change)

| Existing ID | Current Value | ICDM Refinement | Rationale |
|-------------|-------------|-----------------|-----------|
| E-01 | 24-48V DC wide input | Add: **PSU rated ≥520W** (IX-03 headroom) | Future camera/sensor power budget |
| CO-01 | BOM ≤$10K | Add: **of which ≤$500 for ICDM features** (IM-03) | Innovation budget bounded |

### 3c. New Standards Added

| Standard | New Requirement(s) |
|----------|-------------------|
| IEC 61800-5-2 | SF-04 refinement: STO (Safe Torque Off) function per IEC 61800-5-2 |
| IEC 62443 | IX-02 refinement: data port security — disable write commands without physical key switch |
| ISO 56002 | IM-01 to IM-05: innovation management process requirements |

---

## 4. Updated Totals

| Metric | v1.0 | v2.0 (with ICDM) | Delta |
|--------|:----:|:-----------------:|:-----:|
| Total requirements | 86 | **104** | +18 |
| Demands (D) | 58 | **67** | +9 (+2 upgrades) |
| Wishes (W) | 28 | **37** | +9 |
| Categories | 16/16 | **19/19** | +3 ICDM categories |
| Quantified | 87% | ~85% | Slight decrease (process reqs less quantifiable) |
| [SAFETY-CRITICAL] | 10 | 10 | No change |
| Innovation stakeholders | 0 | **4** (S9-S12) | +4 |

---

## 5. Solution Ideas Log (separated from requirements per P&B)

Solution ideas that emerged during ICDM analysis — NOT requirements, feed Phase 2:

| # | Solution Idea | Source | Phase 2 Action |
|---|--------------|--------|----------------|
| SI-1 | Use same STM32F446 for V5 and N12 — commonality | PC-04 analysis | Morpho matrix: controller row |
| SI-2 | 3-pin M12 connectors for all power, 5-pin for signal | IX-06 analysis | Detail design connector selection |
| SI-3 | SD card slot on controller for field data logging | IM-01 analysis | Morpho matrix: data storage row |
| SI-4 | QR code on each module linking to digital twin / SOP | IM-02 analysis | Detail design |

---

## 6. BA Summary — ICDM Augmentation

| Deliverable | Status |
|-------------|:------:|
| 18 ICDM requirements drafted | ✅ |
| 3 new categories (17-19) defined | ✅ |
| 2 existing requirements upgraded (W→D) | ✅ |
| 2 existing requirements refined (values) | ✅ |
| 3 new standards mapped | ✅ |
| 4 solution ideas separated | ✅ |
| Total: 86 → 104 requirements | ✅ |

**CEO Action:** Review 18 ICDM requirements. Confirm or adjust D/W. Then BB merges into v2.0.

---

*BA ICDM Extension | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
