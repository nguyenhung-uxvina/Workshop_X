---
project: V-SMASH-M
phase: 4
type: hat-procedure
version: 1.0
created: 2026-03-02
status: draft
family: V-SMASH
location: Kho kỹ thuật / Customer depot (QĐND Vietnam)
authority: Customer Kỹ thuật Officer + Workshop X Delivery Representative
inputs:
  - V-SMASH-M_VnV_Master_Plan_v1.0.md (parent)
  - V-SMASH-M_FAT_Procedure_v1.0.md (prerequisite)
  - V-SMASH-M_B4_User_Manual_v1.0.md (operator reference)
---

# V-SMASH-M (Micro-Sight) — Hardware Acceptance Test (HAT) Procedure v1.0

**Kiểm tra nhận hàng phần cứng — Tại kho / điểm giao hàng**
**Version 1.0 | 2026-03-02**

---

## 1. HAT Overview

### 1.1 Purpose

The Hardware Acceptance Test (HAT) is the formal inspection and verification conducted at the customer's depot or delivery point when units arrive from Workshop X. HAT confirms:

1. Units were not damaged during transport
2. Units delivered match the FAT-accepted configuration
3. Documentation package is complete and valid
4. A functional subset is verified to confirm no transport damage affected performance

HAT is **not** a repeat of the full FAT. It is a targeted inspection focused on transport damage and delivery completeness.

### 1.2 HAT Authority

| Role | Responsibility |
|------|---------------|
| Customer Kỹ thuật Officer | HAT authority; signs HAT record |
| Workshop X Delivery Representative | Technical witness; resolves defects on site where possible |
| Customer Supply/Logistics | Quantity verification |

### 1.3 HAT Entry Criteria

| Criterion | Verification |
|-----------|-------------|
| FAT completed and signed | FAT record present in package |
| All B-series documents in sealed package | Package seal intact |
| UN38.3 certificate for battery | Certificate in package |
| Outer packaging intact (no crush/puncture) | Visual at delivery |

---

## 2. Transport Damage Inspection

Execute immediately upon receipt of shipment.

### 2.1 Outer Packaging Inspection

| # | Check | Pass | Fail Action |
|---|-------|------|-------------|
| T01 | Outer carton: no crush, puncture, or water damage | ☐ | Photograph, do not accept. Contact WX immediately. |
| T02 | Shock/tilt indicator (if present): in normal range | ☐ | Photograph, record indicator reading. Proceed with enhanced HAT. |
| T03 | Quantity: number of units matches delivery note | ☐ | Record discrepancy. Do not accept until resolved. |
| T04 | Seal(s) on outer package intact | ☐ | Note if seal broken. Proceed to inner inspection. |

### 2.2 Inner Packaging Inspection

| # | Check | Pass | Fail Action |
|---|-------|------|-------------|
| T05 | Unit packaging intact (no damage to foam, case) | ☐ | Photograph. Mark unit for enhanced HAT. |
| T06 | Serial number on packaging matches delivery manifest | ☐ | Record discrepancy. Do not sign until resolved. |
| T07 | Accessories present per delivery note (spare battery, cable, caps) | ☐ | Record missing items. |

---

## 3. Documentation Package Verification

| # | Document | Expected Version | Check |
|---|----------|-----------------|-------|
| D01 | FAT Record (signed by all 4 roles) | FAT Procedure v1.0 | ☐ |
| D02 | B1 — YCKT (requirements spec) | v1.0 | ☐ |
| D03 | B4 — Hướng dẫn sử dụng (User Manual) | v1.0 | ☐ |
| D04 | B5 — Maintenance Manual | v1.0 | ☐ |
| D05 | B6 — DMKTKT (bảo quản, vận chuyển) | v1.0 | ☐ |
| D06 | Bore-sight certificate (per unit serial) | Per unit | ☐ |
| D07 | SW build manifest (tag + hash) | v1.0.0 | ☐ |
| D08 | Battery UN38.3 certificate | Current lot | ☐ |
| D09 | System qualification reports T01–T14 | Lab-issued | ☐ |
| D10 | BOM as-built (matches serial) | v1.0 | ☐ |

**Pass criteria:** All 10 documents present and signed. If any document missing: unit held pending documentation.

---

## 4. Functional Verification Subset

Execute on **each unit received** (not sampling). This is a 15-minute quick check — not a full re-qualification.

### 4.1 Functional Check Sequence

| Step | Action | Expected | Pass Criteria |
|------|--------|----------|---------------|
| H-01 | Power on with battery | OLED startup sequence | Boot to STANDBY in ≤30s. SW version on screen = v1.0.0. No error codes. |
| H-02 | Visual inspection — post-transport | No new damage vs. factory record | No cracks, scratches on optical window, no OLED dead pixels |
| H-03 | Rail mounting | Mount on reference 1913 rail (if available at depot) | Unit seats fully; clamping torque 2.5 Nm achieved without stripping |
| H-04 | BLE function | Pair with reference phone/tablet | Pairing complete within 10s; HEALTH_TELEMETRY characteristic readable |
| H-05 | OLED states | Command through STANDBY → ALERT → AMBER → RED | All 4 reticle states display correctly; AMBER ≠ RED |
| H-06 | Battery door | Open/close battery door | Single-hand operation; latch closes fully; no force >20N estimated |
| H-07 | Bore-sight spot check | Mount on bore-sight fixture (if PR-11 available at depot) | Alignment ≤0.5 mrad (relaxed vs. factory 0.2 mrad — transport tolerance) |

**Note on H-07:** If PR-11 bore-sight fixture is not available at depot, omit step H-07 and note "bore-sight verified at factory per FAT record." Full bore-sight re-check at next scheduled L2 depot maintenance (every 500 rounds per VM-N03).

### 4.2 HAT-Specific Accept/Reject Criteria

| Finding | Action |
|---------|--------|
| Transport damage: housing cracked or optical window scratched | Return to WX for repair. Do not accept. |
| Boot failure or SW version mismatch | Return to WX. Do not accept. |
| Bore-sight deviation >0.5 mrad (if checked) | Return to WX for re-calibration. |
| Minor cosmetic damage (paint chip, minor scratch on housing — not optical) | Accept with note in HAT record. |
| Missing documentation | Hold. WX to provide within 5 business days. |

---

## 5. HAT Record and Sign-Off

### 5.1 HAT Summary

| Unit Serial | Delivery Date | Transport Damage? | Docs Complete? | Functional Check | Result |
|-------------|--------------|------------------|----------------|-----------------|--------|
| | | Y / N | Y / N | PASS / FAIL | ACCEPT / HOLD |

### 5.2 HAT Sign-Off

**Biên bản kiểm tra nhận hàng / Hardware Acceptance Test Record**

Thiết bị V-SMASH-M số sê-ri __________________ đã được kiểm tra theo quy trình HAT v1.0. Kết quả kiểm tra:

| Hạng mục / Item | Kết quả / Result |
|-----------------|-----------------|
| Kiểm tra bao bì / Packaging inspection | PASS ☐ / FAIL ☐ |
| Bộ tài liệu / Documentation package | COMPLETE ☐ / INCOMPLETE ☐ |
| Kiểm tra chức năng / Functional check | PASS ☐ / FAIL ☐ |
| **Kết luận / Decision** | **CHẤP NHẬN / ACCEPT ☐** | **GIỮ LẠI / HOLD ☐** |

**Ghi chú / Notes:**
_______________________________________________

| Chức vụ / Role | Họ tên / Name | Chữ ký / Signature | Ngày / Date |
|----------------|---------------|-------------------|-------------|
| Kỹ thuật QĐND (Customer Kỹ thuật Officer) | | | |
| Đại diện Workshop X (WX Delivery Rep) | | | |
| Quản lý kho (Supply/Logistics) | | | |

---

## 6. Post-HAT Requirements

After HAT acceptance:

1. **Storage conditions** per B6 (DMKTKT): temperature 5–40°C, humidity <60% RH, no direct sunlight.
2. **Battery storage:** Maintain ≥50% SoC if stored >1 month. Discharge/recharge cycle every 3 months per B5 (Maintenance Manual).
3. **Transport to field unit:** Use original packaging or equivalent foam-lined case. Battery at ≤50% SoC for transport per IATA DG regulations.
4. **SAT scheduling:** Coordinate SAT date with field unit Commander and Workshop X. SAT must occur within 30 days of HAT for warranty to be valid.

---

*V-SMASH-M HAT Procedure v1.0 — 2026-03-02*
*7 transport damage checks + 10 document checks + 7 functional checks = 24 total HAT items.*
*Duration: ~30 min per unit. Authority: Customer Kỹ thuật Officer.*
*HAT does not replace FAT — it verifies that FAT-accepted condition was maintained during transport.*
