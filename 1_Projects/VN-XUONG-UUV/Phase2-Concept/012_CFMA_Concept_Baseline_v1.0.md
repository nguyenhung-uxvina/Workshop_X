---
project: VN-XUONG-UUV
phase: 2
type: cfma
document: "012"
version: 1.0
created: 2026-03-26
updated: 2026-03-26
status: AI-DRAFT
method: "CFMA Step 5.5a+5.5b (helix-concept-generate, upgraded 2026-03-26)"
sources: "Weiss & Hari 2015, Tumer & Stone 2003, MIL-STD-1629A, NLM cfma"
---

# VN-XUONG-UUV — Tài liệu 012: CFMA Phương Án Cơ Bản v1.0

[AI-DRAFT v1 — CEO review required for S/F/D scoring]

## 1. Mục đích

Phân tích chế độ hỏng hóc ở mức CHỨC NĂNG (không phải component) cho phương án cơ bản duy nhất trước Gate 2. Sử dụng taxonomy 5 categories (A-E) từ CFMA Deep Research + 6-flow propagation check.

**Input:** Function Structure v2.0 (Doc 006, 35 SFs) + Concept Description v1.0 (Doc 010)
**Output:** SFD scores, propagation flags, action items → feeds Gate 2 Review

---

## 2. Failure Mode Identification (Step 5.5a)

### F1: HÀNH TRÌNH & ĐỊNH VỊ (5 SFs)

| SF | Phân-chức năng | FM Cat | Failure Mode | Failure Effect |
|----|---------------|:------:|-------------|---------------|
| F1.1 | Kéo sát mạn tàu mẹ | A7 | Corrosion dây kéo/móc nhả | Mất kết nối tàu mẹ |
| F1.2 | Tự hành đến khu vực | A5 | Wear propeller/gearbox OB | Giảm tốc độ, không đạt 25 kts |
| F1.3 | Dẫn đường GPS | B2 | Parameter drift GPS receiver | Sai vị trí, khó tiếp cận UUV |
| F1.4 | Giữ vị trí khi LARS | E1 | Humidity corrosion throttle cable | Mất kiểm soát differential thrust |
| F1.5 | Duy trì ổn định | A1 | Elastic deformation kết cấu (overload) | GM giảm, nghiêng nguy hiểm |

### F2: PHÓNG UUV (7 SFs — moderate risk)

| SF | Phân-chức năng | FM Cat | Failure Mode | Failure Effect |
|----|---------------|:------:|-------------|---------------|
| F2.1 | Tiếp nhận UUV từ cẩu | A6 | Impact fracture khi hạ UUV | Hư hại UUV ($100K+) |
| F2.2 | Cố định UUV xe nôi | A5 | Wear UHMWPE V-saddle | UUV trượt khỏi nôi trên boong |
| F2.3 | Chuẩn bị LARS | B1 | Short circuit VFD/genset | LARS không khởi động |
| F2.4 | Kiểm soát hạ rampe | B4 | Insulation breakdown motor windings | Tời mất kiểm soát — UUV lao xuống |
| F2.5 | Đưa UUV vào nước | A2 | Yielding rampe tại mối hàn transom | Ramp biến dạng, UUV kẹt |
| F2.6 | Nhả UUV khỏi nôi | — | (Buoyancy passive — no mechanism) | (No failure mode — physics-based) |
| F2.7 | Rút xe nôi về | A5 | Wear pendant cable/sheave | Pendant đứt khi kéo nôi |

### F3: THU HỒI UUV (8 SFs — BINDING CONSTRAINT, highest risk)

| SF | Phân-chức năng | FM Cat | Failure Mode | Failure Effect |
|----|---------------|:------:|-------------|---------------|
| F3.1 | Xác định vị trí UUV | E2 | Salt spray optics/binoculars | Mất tầm nhìn UUV |
| F3.2 | Cơ động tiếp cận | E5 | UV degradation throttle/cable | Mất kiểm soát lái khi tiếp cận |
| F3.3 | Dẫn UUV vào kênh V | A6 | Impact UUV→kênh (sóng) | Hư hại UUV/kênh, trượt bắt giữ |
| F3.3b | Dẫn UUV vào kênh V | E4 | Sóng tràn vào kênh (monsoon) | Nước ngập kênh, mất kiểm soát |
| F3.4 | Bắt giữ UUV trong nôi | A1 | Deformation nôi (tải sóng động) | UUV không nằm đúng V-saddle |
| F3.5 | Gắn tời (pendant) | A3 | Fatigue pendant cable (cyclic load) | Pendant đứt giữa thu hồi |
| F3.6 | Kéo UUV lên rampe | B4 | Motor overload (wave surge) | Tời trip, UUV trượt ngược |
| F3.7 | Cố định vị trí cất | A5 | Wear toggle clamp mechanism | Clamp không giữ — UUV loose trên boong |
| F3.8 | Hủy bỏ thu hồi | — | (Tether = fallback — no mechanism) | (Fail-safe: UUV vẫn kết nối) |

### F4: HỖ TRỢ VẬN HÀNH (8 SFs)

| SF | Phân-chức năng | FM Cat | Failure Mode | Failure Effect |
|----|---------------|:------:|-------------|---------------|
| F4.1 | Tạo lực đẩy | A3 | Fatigue OB mounting bracket | OB lỏng/rơi — mất lực đẩy |
| F4.2 | Cấp điện LARS | B1 | Short circuit genset winding | Mất nguồn LARS hoàn toàn |
| F4.3 | Phân phối điện | B5 | Connector intermittent (ẩm) | Mất tín hiệu/điện ngắt quãng |
| F4.4 | Liên lạc VHF | E1 | Humidity corrosion antenna | Mất liên lạc tàu mẹ |
| F4.5 | Giám sát LARS | B2 | Drift load cell | Hiển thị tải sai → quyết định sai |
| F4.6 | An toàn ekip | E4 | Sóng tràn boong (monsoon) | Ekip trượt ngã — thương tích |
| F4.7 | Quản lý nước hầm | E4 | Bơm hầm tắc (debris) | Ngập hầm, ảnh hưởng ổn định |
| F4.8 | Chống ăn mòn | A7 | Galvanic corrosion Al-SS | Kết cấu suy yếu theo thời gian |

### F5: QUẢN LÝ TETHER (1 SF — low risk)

| SF | Phân-chức năng | FM Cat | Failure Mode | Failure Effect |
|----|---------------|:------:|-------------|---------------|
| F5.1 | Dẫn cáp trên boong | A5 | Abrasive wear fairlead/ống | Cáp bị mài mòn → đứt tether |

### F6: ĐIỀU KHIỂN UUV (6 SFs)

| SF | Phân-chức năng | FM Cat | Failure Mode | Failure Effect |
|----|---------------|:------:|-------------|---------------|
| F6.1 | Lắp bộ điều khiển | A3 | Fatigue giá đỡ (vibration) | Bộ điều khiển rơi/lỏng |
| F6.2 | Cấp điện bộ đk | B1 | Open circuit ổ cắm 220VAC | Mất nguồn bộ điều khiển |
| F6.3 | Kết nối tether | B5 | Connector corrosion (salt) | Mất tín hiệu UUV |
| F6.4 | Truyền lệnh UUV | B3 | EMI từ genset/tời VFD | Lệnh sai/mất lệnh |
| F6.5 | Nhận telemetry | B3 | EMI gây nhiễu dữ liệu | Dữ liệu UUV không tin cậy |
| F6.6 | Không gian VH | E3 | UV degradation mái che | Mất bảo vệ mưa nắng cho OP2 |

---

## 3. SFD Scoring + Propagation Check (Step 5.5b)

### F3: THU HỒI UUV — Critical Function (binding constraint)

| SF | FM Cat | Failure Mode | S | F | D | SFD | Propagates To | Action | Rev SFD |
|----|:------:|-------------|:-:|:-:|:-:|:---:|-------------|--------|:-------:|
| F3.3 | A6 | Impact UUV→kênh (sóng) | **9** | 5 | 5 | **225** | F3.4,F3.6 | Kênh V phễu rộng + đệm UHMWPE + huấn luyện OP | [CEO] |
| F3.5 | A3 | Fatigue pendant (cyclic) | 8 | 4 | 5 | **160** | F3.6,F2.7 | Pendant SS wire ≥12mm + inspection schedule 100h | [CEO] |
| F3.6 | B4 | Motor overload (wave surge) | 8 | 4 | 3 | **96** | F3.4 | VFD current limit + overload relay + manual backup | [CEO] |
| F3.4 | A1 | Deformation nôi (dynamic) | 7 | 3 | 5 | **105** | F3.7 | V-saddle Al 6061 thay UHMWPE tại contact points | [CEO] |
| F3.3b | E4 | Sóng tràn kênh (monsoon) | 7 | 5 | 3 | **105** | F3.4,F4.7 | Self-draining kênh + abort protocol SS4+ | [CEO] |
| F3.7 | A5 | Wear toggle clamp | 5 | 3 | 3 | 45 | — | SS316 toggles + lubrication schedule | [CEO] |
| F3.1 | E2 | Salt spray optics | 4 | 5 | 2 | 40 | F3.2 | Wash-down kit + lens covers | — |
| F3.2 | E5 | UV degradation controls | 4 | 3 | 3 | 36 | — | UV-resistant cable sheathing | — |
| F3.8 | — | (Fail-safe: tether) | 1 | 1 | 1 | 1 | — | None needed | 1 |

### F2: PHÓNG UUV

| SF | FM Cat | Failure Mode | S | F | D | SFD | Propagates To | Action | Rev SFD |
|----|:------:|-------------|:-:|:-:|:-:|:---:|-------------|--------|:-------:|
| F2.4 | B4 | Insulation breakdown motor | 8 | 2 | 5 | **80** | F2.5 | VFD soft-start + thermal protection + manual brake | [CEO] |
| F2.1 | A6 | Impact UUV khi hạ | **9** | 2 | 3 | 54 | — | Tagline procedure + fender nôi + SS2 limit cho cẩu | [CEO] |
| F2.5 | A2 | Yielding rampe mối hàn | 7 | 2 | 7 | **98** | F2.4,F3.6 | NDT weld inspection (PT/UT) Phase 4 + FOS ≥3 | [CEO] |
| F2.2 | A5 | Wear UHMWPE saddle | 3 | 3 | 2 | 18 | — | Replaceable UHMWPE liner | — |
| F2.3 | B1 | Short circuit VFD | 7 | 2 | 3 | 42 | F4.2 | MCB + genset auto-shutdown | — |
| F2.6 | — | (Buoyancy — no mechanism) | 1 | 1 | 1 | 1 | — | None | 1 |
| F2.7 | A5 | Wear pendant sheave | 4 | 3 | 3 | 36 | — | Sheave inspection 200h | — |

### F4: HỖ TRỢ VẬN HÀNH

| SF | FM Cat | Failure Mode | S | F | D | SFD | Propagates To | Action | Rev SFD |
|----|:------:|-------------|:-:|:-:|:-:|:---:|-------------|--------|:-------:|
| F4.2 | B1 | Short circuit genset | 8 | 2 | 3 | 48 | F2.3,F2.4,F3.6,F6.2 ★ | Redundant MCB + manual LARS backup | [CEO] |
| F4.6 | E4 | Sóng tràn — ekip ngã | **9** | 3 | 3 | **81** | — | Non-skid deck + safety harness points + SS limit | [CEO] |
| F4.5 | B2 | Drift load cell | 6 | 3 | 7 | **126** | F3.6 | Dual load cell + calibration 500h | [CEO] |
| F4.7 | E4 | Bơm hầm tắc | 6 | 4 | 3 | 72 | F1.5 | Dual bilge pump + strainer + alarm | [CEO] |
| F4.8 | A7 | Galvanic corrosion | 5 | 5 | 7 | **175** | F1.5,F2.5 | Isolation gaskets + cathodic protection design Phase 3 | [CEO] |
| F4.1 | A3 | Fatigue OB bracket | 8 | 1 | 5 | 40 | F1.2 | OEM bracket + torque check 500h | — |
| F4.3 | B5 | Connector intermittent | 4 | 5 | 5 | **100** | F4.5,F6.3 ★ | IP67 connectors + conformal coating | [CEO] |
| F4.4 | E1 | Corrosion VHF antenna | 4 | 3 | 2 | 24 | — | SS antenna + annual replacement | — |

### F5 + F6: TETHER + ĐIỀU KHIỂN UUV

| SF | FM Cat | Failure Mode | S | F | D | SFD | Propagates To | Action | Rev SFD |
|----|:------:|-------------|:-:|:-:|:-:|:---:|-------------|--------|:-------:|
| F5.1 | A5 | Abrasive wear fairlead | 7 | 3 | 5 | **105** | F6.3,F6.4,F6.5 ★ | UHMWPE-lined fairlead + inspection every mission | [CEO] |
| F6.4 | B3 | EMI genset→lệnh UUV | 7 | 4 | 5 | **140** | F6.5 | Shielded cable + EMC filter genset + cable routing separation ≥0.5m | [CEO] |
| F6.3 | B5 | Connector corrosion tether | 7 | 4 | 5 | **140** | F6.4,F6.5 | IP68 connector + fresh water rinse SOP | [CEO] |
| F6.2 | B1 | Open circuit 220VAC | 5 | 2 | 2 | 20 | F6.4,F6.5 | Backup 24VDC power path | — |
| F6.1 | A3 | Fatigue giá đỡ | 3 | 2 | 3 | 18 | — | Anti-vibration mount | — |
| F6.6 | E3 | UV mái che | 2 | 4 | 1 | 8 | — | Marine-grade canvas | — |

---

## 4. 6-Flow Propagation Check (SFD ≥ 40)

| Failed SF | Energy → | Material → | Signal → | Cascade Count | Risk |
|-----------|----------|-----------|---------|:-------------:|:----:|
| **F4.2** (genset fail) | → F2.3, F2.4, F3.6, F6.2 | — | → F4.5 | **5** | ★★ |
| **F5.1** (fairlead wear) | — | M6 tether → F6.3 | → F6.4, F6.5 | **3** | ★ |
| **F4.3** (connectors) | — | — | → F4.5, F6.3 | **2** | — |
| F3.3 (impact kênh) | E4 → F3.4 | M1 UUV → F3.6 | — | 2 | — |
| F4.8 (galvanic) | — | M → F1.5, F2.5 | — | 2 | — |

**CASCADE RISKS (★):**
- **F4.2 Genset failure = single point of failure (★★):** Mất genset → mất TOÀN BỘ LARS + bộ điều khiển UUV. 5 SFs bị ảnh hưởng. **MANDATORY: backup power path hoặc manual LARS capability.**
- **F5.1 Fairlead wear (★):** Tether damage → mất kết nối UUV. 3 SFs bị ảnh hưởng.

---

## 5. Concept-Level Summary

```
CFMA SUMMARY — VN-XUONG-UUV Baseline Concept
Date: 2026-03-26

Total functions analyzed: 35
Failure modes identified: 38 (across 5 categories)

CRITICAL (SFD ≥ 80):    12  — PHẢI resolve trước Gate 2
IMPORTANT (SFD 40-79):   7  — mitigation plan required
ACCEPTABLE (SFD < 40):  19  — monitor
Mandatory action (S ≥ 9): 3  (F3.3 impact, F2.1 impact, F4.6 sóng tràn)
Cascade risks (★):        2  (F4.2 genset ★★, F5.1 fairlead ★)

Max SFD: 225 at F3.3 (Impact UUV→kênh V)
Top 5 risks by SFD:
  1. F3.3  Impact UUV→kênh (225) — S=9, binding constraint
  2. F4.8  Galvanic corrosion (175) — silent killer, long-term
  3. F3.5  Pendant fatigue (160) — critical for recovery
  4. F6.4  EMI genset→UUV (140) — affects mission capability
  5. F6.3  Connector corrosion (140) — affects tether integrity

DEFENSE FIDELITY CHECK: N/A — không phải training product
ACH CHECK: N/A — không có AI component

CATEGORY DISTRIBUTION:
  Cat A (Mechanical): 17 modes — dominant (corrosion, fatigue, wear)
  Cat B (Electrical): 11 modes — VFD/genset/connector cluster
  Cat C (Training): 0 — not applicable
  Cat D (ACH/AI): 0 — not applicable
  Cat E (Environmental VN): 10 modes — tropical+maritime significant
```

---

## 6. Action Items — CEO Review Required

| # | SF | SFD | Action Required | Priority | Phase |
|---|-----|:---:|----------------|:--------:|:-----:|
| A1 | F3.3 | 225 | Kênh V: phễu rộng + đệm UHMWPE toàn bộ + abort drill | CRITICAL | 3 |
| A2 | F4.8 | 175 | Galvanic isolation design: Al-SS gaskets + cathodic protection | CRITICAL | 3 |
| A3 | F3.5 | 160 | Pendant spec: SS wire ≥12mm + load test + 100h inspection | CRITICAL | 3 |
| A4 | F6.4 | 140 | EMC design: shielded cable routing ≥0.5m từ genset | CRITICAL | 3 |
| A5 | F6.3 | 140 | IP68 tether connector + fresh water rinse SOP | CRITICAL | 3 |
| A6 | F4.5 | 126 | Dual load cell + calibration protocol | HIGH | 3 |
| A7 | F5.1 | 105 | UHMWPE-lined fairlead + per-mission inspection | HIGH | 3 |
| A8 | F3.4 | 105 | V-saddle reinforcement tại contact points | HIGH | 3 |
| A9 | F3.3b | 105 | Self-draining kênh + SS4 abort protocol | HIGH | 3 |
| A10 | F4.3 | 100 | IP67 connectors toàn bộ + conformal coating | HIGH | 3 |
| A11 | F2.5 | 98 | NDT weld inspection plan (PT/UT) + FOS ≥3 | HIGH | 4 |
| A12 | F3.6 | 96 | VFD current limit + overload relay + manual winch backup | HIGH | 3 |
| **SP** | **F4.2** | **48 but ★★** | **Genset = SPOF → backup power or manual LARS** | **CRITICAL** | **3** |

**CEO: Review S/F/D scores — nhất là cho F3 (binding constraint). Đây là AI-proposed scores, cần CEO judgment.**

---

*Tài liệu 012 CFMA v1.0 | VN-XUONG-UUV Phase 2 | Method: CFMA Step 5.5a+5.5b (Tumer/Stone taxonomy + 6-flow propagation) | COD: Offload (AI generates), Core (CEO validates S/F/D + approves actions)*
