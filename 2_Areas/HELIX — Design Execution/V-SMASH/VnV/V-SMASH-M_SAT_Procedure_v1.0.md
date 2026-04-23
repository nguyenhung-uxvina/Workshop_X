---
project: V-SMASH-M
phase: 4
type: sat-procedure
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
location: Đơn vị sử dụng / Military unit field site
authority: Customer Commander + Customer Kỹ thuật + Workshop X Technical Advisor
inputs:
  - V-SMASH-M_VnV_Master_Plan_v1.0.md (parent)
  - V-SMASH-M_HAT_Procedure_v1.0.md (prerequisite)
  - V-SMASH-M_B4_User_Manual_v1.0.md (operator procedures)
  - V-SMASH-M_B1_YCKT_v1.0.md (accepted requirements)
  - V-SMASH_Orchestration_Design_v1.0.md (engagement state machine reference)
---

# V-SMASH-M (Micro-Sight) — Site Acceptance Test (SAT) Procedure v1.0

**Nghiệm thu tại địa điểm sử dụng — Tại đơn vị / thao trường**
**Version 1.0 | 2026-03-02**

---

## 1. SAT Overview

### 1.1 Purpose

The Site Acceptance Test (SAT) is the final formal acceptance test conducted at the military unit's operational site. SAT confirms:

1. V-SMASH-M performs correctly in the actual operational environment
2. System achieves required performance against real or simulated drone targets
3. Safety-critical HITL behavior is confirmed by the unit Commander
4. Assigned operators are trained and qualified
5. Unit Commander formally accepts the system for operational use

SAT is the contractual delivery completion event. Upon SAT sign-off, warranty period begins.

### 1.2 Safety Statement

V-SMASH-M is an engagement aid with HITL (Human-In-The-Loop) architecture. The system **NEVER fires autonomously.** During SAT:
- Live ammunition is used only if a live-fire range is authorized by range authority
- Simulated engagements (inert rounds, dry fire) are acceptable for all SAT tests
- The HITL gate logic test (SAT-07) **must** be conducted with the actual engagement mode enabled

**Rule:** If SAT includes live fire, all standard range safety procedures (ATSR) and unit Standing Orders apply. Workshop X Technical Advisor has authority to halt any test for safety reasons.

### 1.3 SAT Authority

| Role | Responsibility |
|------|---------------|
| Customer Commander | Final acceptance authority; signs SAT certificate |
| Customer Kỹ thuật Officer | Technical verification witness |
| Workshop X Technical Advisor | Technical support; resolves anomalies |
| Unit Safety Officer | Range safety (live fire only) |

### 1.4 SAT Entry Criteria

| Criterion | Verification |
|-----------|-------------|
| HAT completed and accepted | HAT record present |
| Units transported to site per B6 (DMKTKT) | Packaging inspection on arrival |
| Operator training (minimum crew) trained | Training completion records (§5) |
| Test range or simulated target available | Range/test area pre-cleared |
| WX Technical Advisor on site | Present or available via secure video |

---

## 2. Pre-SAT Setup and Configuration

### 2.1 Site Check

| # | Check | Notes |
|---|-------|-------|
| S01 | Safe firing zone established (if live fire) | No civilians, proper backstop |
| S02 | Simulated target (drone sled, towed target, or drone) available | Min: drone at 50–150m range |
| S03 | Units unpacked and at operating temperature (15–40°C) | ≥30 min acclimatization |
| S04 | Host weapon (rifle/HMG) available for mounting | Consistent with product specification |
| S05 | Phone/tablet for BLE monitoring present | WX app installed |
| S06 | Unit serial numbers match HAT acceptance records | Cross-check |

### 2.2 Unit Mounting and Bore-Sight

1. Mount V-SMASH-M on host weapon per B4 (User Manual §3.1 — Mounting Procedure).
2. Torque rail clamp screws to 2.5 Nm with torque wrench.
3. Perform initial bore-sight alignment using PR-11 procedure if available, or field bore-sight per B4 §3.2.
4. Record bore-sight alignment in SAT record.

**Acceptance:** Field bore-sight ≤1.0 mrad (relaxed — field conditions). If >1.0 mrad: adjust before proceeding.

---

## 3. SAT Functional Tests

### SAT-01: System Power-On and Readiness

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Duration** | 5 min |

**Procedure:**
1. Power on unit (battery).
2. Observe OLED startup sequence.
3. Verify boot to STANDBY state.
4. Verify SW version on OLED matches FAT record.

**Pass criteria:** Boot to STANDBY ≤30s. SW version matches. No fault codes.

---

### SAT-02: Detection Range Verification

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-S01 (≥90% detection at 150m), VM-K01 (≥30°/s track) |
| **Target** | Simulated drone: quadrotor or FPV type, ≥20cm wingspan |

**Procedure:**
1. Place/fly simulated target at 50m, 100m, 150m ranges sequentially.
2. At each range: operator observes OLED. Record whether ALERT state triggered.
3. At 150m: run minimum 10 passes. Record detection/miss count.
4. Verify tracking: target moving at ≥15 m/s lateral (≈ 30°/s at 30m). Confirm OLED tracks (reticle follows target motion).

**Pass criteria:**
- Detection rate at 150m ≥9/10 passes (90%). Lower rates require investigation before acceptance.
- Tracking stable for ≥3s on moving target at ≥15 m/s.
- False alarm rate: ≤1 false ALERT per 5-minute standby observation (no target present). [VM-Y04: FPR ≤2%]

---

### SAT-03: IFF Classification Verification

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY [SAFETY-CRITICAL — VM-Y02] |
| **Standard** | VM-Y02 (no civilian/friendly misclassification) |

**Purpose:** Confirm that IFF classifies the designated target type correctly and that operator-facing indicators (reticle color) match classification output.

**Procedure:**
1. Use designated hostile target type (e.g., FPV drone or declared threat profile).
2. Observe reticle color on ALERT: should reach RED (HOSTILE ≥0.85 confidence) or AMBER (uncertain) — never GREEN for declared threat.
3. Use designated friendly/civilian marker (if available): large DJI-type drone with RC identification markers. Observe reticle should show GREEN or AMBER — NOT RED.
4. Record each classification result.

**Pass criteria:**
- Declared hostile target: reticle reaches RED or AMBER within 3 sec of ALERT. Never GREEN for a known threat type.
- Declared friendly marker (if tested): reticle does NOT show RED unprompted.
- AMBER reticle is visible and distinct from RED: confirmed by 2 operators independently.

**Note:** If IFF accuracy in field conditions is worse than expected (majority AMBER for hostile), this is a known edge case for adverse lighting/background. Record result and escalate to KN for model update decision. Do NOT accept unit if AMBER never transitions toward RED for declared hostile over 10+ passes.

---

### SAT-04: Lead Indicator Accuracy Check

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-S06 (≤1.0 mrad total accuracy) |

**Procedure:**
1. Mount unit on weapon on bipod/rest (stable).
2. Track simulated drone at known range (100m) and known velocity.
3. Observe lead reticle offset vs. a reference marker at correct lead position (calculated from known target velocity and round velocity).
4. Estimate offset visually or using photo comparison.

**Pass criteria:** Lead indicator within ±2 mrad of reference (relaxed — field visual check). Formal ≤1.0 mrad accuracy is verified at T10 in qualification. SAT confirms the indicator is present and moves in the correct direction with magnitude consistent with expected lead.

---

### SAT-05: Battery Life Check

| Field | Detail |
|-------|--------|
| **Category** | ADVISORY |
| **Standard** | VM-E02 (≥8h) |

**Procedure:** Start with known-full battery. Operate continuously (AI active, OLED on) at ambient temperature for minimum 2 hours. Measure SoC remaining. Project runtime.

**Pass criteria:** SoC after 2h confirms projected 8h+ runtime (i.e., SoC ≥75% after 2h → ≥8h projected). If SoC <70% after 2h, flag for investigation.

---

### SAT-06: BLE Data Review

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Standard** | VM-O09 (after-action review capability) |

**Procedure:**
1. Execute 3+ simulated engagement cycles (see SAT-08).
2. After each engagement: open phone BLE app.
3. Verify engagement_log_record_t received and displayable.
4. Verify health_telemetry data visible (battery %, thermal, FSM state).

**Pass criteria:** All 3+ engagement records received on phone. Data fields populated (timestamp, track duration, IFF result, gate events). Health telemetry readable in real time.

---

### SAT-07: HITL Safety Gate Verification [SAFETY-CRITICAL]

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY [SAFETY-CRITICAL — VM-Y01] |
| **Standard** | VM-Y01 (AI never fires autonomously) |
| **Authority** | Customer Commander must personally witness this test |

**Purpose:** Confirm that the system never fires (or signals to fire) without the operator holding the trigger, and that a GREEN IFF classification blocks the gate even if the trigger is held.

**Procedure (dry fire — no live ammunition required):**

Test A — No trigger, hostile IFF:
1. AI detects and classifies target as HOSTILE (RED reticle).
2. Operator does NOT hold trigger.
3. Observe: gate must NOT signal fire (gate pin stays LOW). No ENGAGED state.

Test B — Trigger held, GREEN IFF:
1. Command or wait for GREEN IFF classification (NEUTRAL target).
2. Operator holds trigger.
3. Observe: gate must NOT open. OLED shows GREEN. System stays in ALERT/STANDBY.

Test C — Trigger held, RED IFF, good fire solution:
1. AI detects HOSTILE. Operator holds trigger. A-FC quality >85 + window open.
2. Observe: OLED shows READY → ENGAGED state. Gate pin HIGH for ≤50ms.
3. (In dry fire: weapon hammer/bolt may cycle if connected; or observe indicator on jig.)

Test D — Below quality floor:
1. AI detects HOSTILE, trigger held, but A-FC quality = 60–75 (below floor).
2. Observe: gate does NOT open. OLED shows quality-warning indicator (amber window flash).

**Pass criteria:**
- Test A: no fire signal = PASS
- Test B: no fire signal despite trigger = PASS (SAFETY_OVERRIDE)
- Test C: fire gate signals correctly = PASS
- Test D: no fire signal below floor = PASS

**Any single test failure = CRITICAL — SAT cannot proceed. Report to KN and Commander immediately.**

Customer Commander signature is required specifically on this test result.

---

### SAT-08: Simulated Engagement Cycle (Full End-to-End)

| Field | Detail |
|-------|--------|
| **Category** | MANDATORY |
| **Duration** | ~10 min (3 engagement cycles) |

**Procedure:** Execute 3 complete engagement cycles with simulated or actual drone target:

1. STANDBY → ALERT: drone detected
2. ALERT → AMBER or LOCKED (IFF result)
3. Operator confirms hostile (holds trigger) → LOCKED → READY
4. Fire gate opens (A-FC quality met) → ENGAGED → ASSESSING
5. ASSESSING → CONCLUDED (operator lowers weapon)
6. Verify engagement log written and accessible via BLE

**Pass criteria:** All 3 cycles complete without system fault. Each cycle logs an engagement record. System returns to STANDBY cleanly after CONCLUDED. No hang, no brownout reset.

---

### SAT-09: Environment and Ergonomics Check

| Field | Detail |
|-------|--------|
| **Category** | ADVISORY |

**Procedure:** Operators provide feedback on:
1. OLED visibility in field lighting conditions (bright sun, shade, night — if night vision available)
2. Rail mounting ease in tactical conditions (gloves, time pressure)
3. Battery access with rifle mounted and supported
4. BLE app usability for after-action review

**Pass criteria:** No blocking ergonomic issues identified. Issues recorded for product improvement (next version).

---

## 4. SAT Defect Classification

| Category | Definition | Action |
|----------|-----------|--------|
| CAT-S (Safety) | HITL gate failure (SAT-07), fire signal without trigger, GREEN IFF bypass | STOP. Do not accept. Report to KN + Commander. Unit must be returned to WX. |
| CAT-1 (Critical) | Non-functional: system cannot detect/track targets, system crashes | Do not accept. Remediation and re-SAT required. |
| CAT-2 (Major) | Degraded performance: detection rate <90% at 150m, BLE not working | Accept with 30-day remediation action plan. |
| CAT-3 (Minor) | Minor ergonomics, cosmetic, advisory items | Accept. Note for next product revision. |

---

## 5. Operator Training Verification

Before SAT sign-off, minimum required training must be confirmed. Workshop X conducts training per B4 User Manual.

### 5.1 Training Checklist — Per Operator

| # | Training Item | Duration | Completed |
|---|--------------|----------|-----------|
| TR-01 | System overview: purpose, capabilities, limitations | 30 min | ☐ |
| TR-02 | Mounting and dismounting on weapon | 30 min | ☐ |
| TR-03 | Power on/off, battery management | 15 min | ☐ |
| TR-04 | Reticle states: what GREEN/AMBER/RED mean and what to do | 30 min | ☐ |
| TR-05 | HITL operation: when to hold trigger, when to abort | 30 min | ☐ |
| TR-06 | ROE and rules for engagement (unit-specific ROE briefing) | 30 min | ☐ (unit conducts) |
| TR-07 | After-action review: BLE app, engagement log | 20 min | ☐ |
| TR-08 | Battery replacement in field conditions | 15 min | ☐ |
| TR-09 | L1 maintenance: cleaning, inspection, storage | 20 min | ☐ |
| TR-10 | Fault recognition and emergency procedures | 20 min | ☐ |

**Minimum crew:** 2 trained operators per unit before SAT sign-off.

### 5.2 Training Completion Record

| Operator Name | ID | Training Completed | Trainer | Date |
|--------------|----|--------------------|---------|------|
| | | ☐ All 10 items | WX Technical Advisor | |
| | | ☐ All 10 items | WX Technical Advisor | |

---

## 6. SAT Record and Final Acceptance Certificate

### 6.1 SAT Test Summary

| Test | Category | Result | Notes |
|------|----------|--------|-------|
| SAT-01 Power-On | MANDATORY | PASS / FAIL | |
| SAT-02 Detection Range | MANDATORY | PASS / FAIL | Detection rate at 150m: ___/10 |
| SAT-03 IFF Classification | MANDATORY [SAFETY] | PASS / FAIL | |
| SAT-04 Lead Accuracy | MANDATORY | PASS / FAIL | |
| SAT-05 Battery Life | ADVISORY | PASS / FAIL | Projected runtime: ___h |
| SAT-06 BLE Data | MANDATORY | PASS / FAIL | |
| SAT-07 HITL Safety Gate | MANDATORY [SAFETY] | PASS / FAIL | |
| SAT-08 Engagement Cycle | MANDATORY | PASS / FAIL | |
| SAT-09 Ergonomics | ADVISORY | PASS / FAIL | |
| Operator Training | MANDATORY | COMPLETE / INCOMPLETE | ___ operators trained |

### 6.2 Final Acceptance Certificate

---

**GIẤY CHỨNG NHẬN NGHIỆM THU / SITE ACCEPTANCE CERTIFICATE**

**Thiết bị:** V-SMASH-M (Micro-Sight) / **Unit:** V-SMASH-M
**Số sê-ri / Serial:** ___________________________________
**Ngày nghiệm thu / SAT Date:** ___________________________________
**Địa điểm / Site:** ___________________________________

Sau khi hoàn thành toàn bộ các hạng mục kiểm tra theo Quy trình SAT v1.0, thiết bị V-SMASH-M số sê-ri nêu trên được xác nhận đáp ứng đầy đủ yêu cầu kỹ thuật quy định trong V-SMASH-M_B1_YCKT_v1.0 và sẵn sàng đưa vào sử dụng chiến đấu.

*Having completed all test items per SAT Procedure v1.0, V-SMASH-M unit with the above serial number is confirmed to meet all technical requirements specified in V-SMASH-M_B1_YCKT_v1.0 and is ready for operational deployment.*

**Thời hạn bảo hành / Warranty Period:** 12 tháng kể từ ngày nghiệm thu SAT / 12 months from SAT date.

**Kết luận / Decision:** ☐ **CHẤP NHẬN / ACCEPTED** ☐ **TỪ CHỐI / REJECTED**

**Lý do từ chối (nếu có) / Rejection reason (if applicable):**
_______________________________________________

| Chức vụ / Role | Họ tên / Name | Chữ ký / Signature | Ngày / Date |
|----------------|---------------|-------------------|-------------|
| Chỉ huy đơn vị / Unit Commander | | | |
| Kỹ thuật QĐND / Customer Kỹ thuật | | | |
| Cố vấn kỹ thuật Workshop X / WX Technical Advisor | | | |

**Ghi chú mục SAT-07 (HITL Gate) / SAT-07 note (HITL Gate):**
Tôi xác nhận đã cá nhân chứng kiến và xác minh rằng hệ thống V-SMASH-M không kích hoạt bắn mà không có lệnh của xạ thủ, và cổng an toàn IFF hoạt động đúng theo thiết kế.

*I personally witnessed and verify that V-SMASH-M does not fire without operator authorization, and the IFF safety gate operates correctly per design.*

Chỉ huy đơn vị / Unit Commander: ___________________________ Ngày: ___________

---

## 7. Post-SAT Requirements

After SAT acceptance:

1. **Warranty start date:** SAT acceptance date. 12-month warranty period.
2. **Maintenance schedule:** L1 (operator) per B5 — after each use. L2 (depot) at 500 rounds or 6 months. L3 (WX factory) at 2,000 rounds or 2 years.
3. **Bore-sight check frequency:** After every 500 rounds or any drop/impact incident.
4. **SW update procedure:** Updates via WX only. Customer notified minimum 2 weeks in advance. Re-verification of SAT-07 (HITL gate) required after any SW update.
5. **Incident reporting:** Any engagement incident (including fratricide or suspected malfunction) must be reported to WX within 24h. Unit quarantined pending investigation.

---

*V-SMASH-M SAT Procedure v1.0 — 2026-03-02*
*9 SAT test items: 6 MANDATORY, 2 ADVISORY, 1 MANDATORY[SAFETY-CRITICAL].*
*SAT-07 (HITL Gate) requires Customer Commander personal witness — the final safety confirmation.*
*Warranty period: 12 months from SAT date. SW update requires SAT-07 re-verification.*
