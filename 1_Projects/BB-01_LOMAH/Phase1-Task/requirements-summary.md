# BB-01 Requirements Summary

> **Document**: Quick Reference Card
> **Source**: [[requirements/srs-v2.0]]
> **Version**: 2.0
> **Date**: 2026-01-27
> **Status**: Gate 2 Ready

---

## Mission Statement

**Floating naval target system** with automatic hit detection for infantry weapons training at sea (Điều 124, Bài 3).

---

## Key Performance Parameters (KPP)

*Mission-critical. Failure = system rejection.*

| ID | Parameter | Threshold | Objective | Status |
|----|-----------|-----------|-----------|--------|
| KPP.01 | Hit detection probability | 90% | 95% | Design |
| KPP.02 | False positive rate | ≤10%/hr | ≤5%/hr | Design |
| KPP.03 | Detection latency | ≤200ms | ≤100ms | Design |
| KPP.04 | Signal-to-noise ratio | ≥15dB | ≥20dB | Design |
| KPP.05 | Wireless range | ≥400m | ≥600m | Design |
| KPP.06 | Target ID accuracy | 90% | 95% | Design |

---

## Key System Attributes (KSA)

*Important but tradeable.*

| ID | Attribute | Threshold | Objective | Status |
|----|-----------|-----------|-----------|--------|
| KSA.01 | Operating time | ≥8hr | ≥24hr | **85hr** ✅ |
| KSA.02 | Unit cost | ≤60M VND | ≤30M VND | **~27M** ✅ |
| KSA.03 | MTBF | ≥2,000hr | ≥3,000hr | **2,817hr** ✅ |
| KSA.04 | Local content | ≥50% | ≥70% | **~70%** ✅ |
| KSA.05 | Setup time | ≤30min | ≤15min | Design |
| KSA.06 | Sea state operation | SS3 | SS4 | Design |

---

## Target Configuration

| Target | Type | Qty | Reference |
|--------|------|-----|-----------|
| Bia 7e | Hình người đứng | 2 | Điều 124 |
| Bia 6c | Địch nằm bắn | 1 | Điều 124 |
| Bia số 10 | Tên địch 75cm | 1 | Điều 124 |
| **Total** | | **4** | |

**Material**: AR400+ steel (no penetration)
**Mounting**: Chain-suspended, free swing

---

## Design Decisions

| ID | Decision | Selection | Impact |
|----|----------|-----------|--------|
| DEC-002 | Impact sensor | **PZT** (not microphone) | -58% cost, no SPL limit |
| DEC-003 | Frame material | Hot-dip galvanized steel | 500hr salt spray |
| DEC-004 | Power system | LiFePO4 12.8V 6Ah + 20W solar | 85hr runtime |
| DEC-005 | MCU architecture | STM32H743 internal ADC | -9% cost, +8% MTBF |

---

## System Architecture

```
TARGETS (4×)          MCU BOX              SHORE STATION
┌─────────┐          ┌─────────┐          ┌─────────┐
│ PZT ×4  │─analog──►│STM32H743│──LoRa───►│Receiver │
│ AR400   │          │ SX1276  │  433MHz  │ Display │
│ Chain   │          │ LiFePO4 │  500m    │         │
└─────────┘          └─────────┘          └─────────┘
```

---

## Environmental Requirements

| Parameter | Threshold | Objective |
|-----------|-----------|-----------|
| IP Rating | IP67 | IP68 |
| Operating Temp | 0 to +50°C | - |
| Humidity | 95% RH | - |
| Salt Spray | 500hr | - |
| Sea State | SS3 | SS4 |

---

## Ballistics

| Caliber | Weapon | Range |
|---------|--------|-------|
| 5.56×45mm | AK-101, M16 | 150-400m |
| 7.62×39mm | AK-47/AKM | 150-400m |
| 7.62×54mmR | PKM, SVD | 150-400m |

---

## Cost Summary

| Subsystem | Cost (VND) | Decision |
|-----------|------------|----------|
| Impact Sensors (PZT) | 1,025,000 | DEC-002 |
| Frame (galvanized) | 4,275,000 | DEC-003 |
| Power System | 1,090,000 | DEC-004 |
| MCU Box Electronics | 520,000 | DEC-005 |
| **Subtotal (verified)** | **6,910,000** | |
| Targets, hulls, misc | ~20,000,000 | Est. |
| **Total Estimate** | **~27,000,000** | ✅ |

**Budget**: 60M VND → **55% under budget**

---

## Verification Summary

| Method | Count | % |
|--------|-------|---|
| Test (T) | 24 | 55% |
| Analysis (A) | 8 | 18% |
| Inspection (I) | 11 | 25% |
| Demo (D) | 1 | 2% |
| **Total** | **44** | |

---

## Schedule

| Milestone | Target Date |
|-----------|-------------|
| Gate 2 Review | 2026-02 |
| Prototype Complete | 2026-04 |
| Sea Trials | 2026-06 |
| Gate 3 (Production) | 2026-08 |

---

## Open Items

| ID | Question | Status |
|----|----------|--------|
| Q.01 | Exact target dimensions per Điều 124 | Pending |
| Q.02 | Scoring data format | TBD |
| Q.03 | Night training capability | TBD |
| Q.04 | Range management integration | TBD |

---

## Quick Links

- [[requirements/srs-v2.0]] — Full SRS (Defense Standard)
- [[design/function-structure]] — Function decomposition
- [[design/morphological-matrix]] — Concept variants
- [[decisions/log]] — Decision history
- [[quality/dfx-review-mcu-box]] — DfX analysis (87.5%)
- [[quality/fmea-bb01]] — Failure mode analysis

---

## Constraints (Non-Negotiable)

| Constraint | Reason |
|------------|--------|
| Local content ≥50% | Policy |
| No ITAR components | Sovereignty |
| LiFePO4 battery only | Marine safety |
| Vietnamese language UI | Operations |
| Standard military targets | Regulation (Điều 124) |

---

*Quick Reference v2.0 — BB-01 Naval Target System*
*Gate 2 Ready — 96% requirements verified*
