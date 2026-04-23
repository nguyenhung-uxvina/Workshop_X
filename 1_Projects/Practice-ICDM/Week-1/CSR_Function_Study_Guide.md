---
created: 2026-04-17
updated: 2026-04-17
type: study-guide
topic: CSR Function Construction (ICDM Step 2 + Step 9)
sources: Weiss & Hari (Technion/RAFAEL), NLM eqfd notebook, NLM icdm notebook, Kano model
purpose: Build mental model before Drill C1
---

# CSR Function Construction — Study Guide

> **Feynman Target:** Sau khi đọc xong, CEO phải giải thích CSR function trong 1 câu và vẽ được 1 CSR curve từ đầu.

---

## 1. CSR Là Gì?

**CSR = Customer Satisfaction Rating** — một hàm số ánh xạ giá trị thực đạt được của Product Characteristic (PC) → mức độ hài lòng khách hàng (0-100%).

```
CSR: Giá trị thực tế (physical parameter) → % Satisfaction (0-100%)
```

**Vai trò trong ICDM:**
- Được tạo tại **Step 2** (VOC → Product Definition, cùng với QFD)
- Được dùng tại **Step 9** (Final Concept Selection, tính DQM score)
- Là cầu nối giữa QFD target values → đánh giá định lượng concept

**Tại sao cần CSR thay vì chỉ dùng VDI 2225?**
- VDI 2225 cho điểm 0-4 (thang rời rạc, chủ quan)
- CSR cho % satisfaction liên tục, gắn trực tiếp với target value từ QFD
- CSR bắt được **threshold effects** mà VDI 2225 bỏ lỡ (ví dụ: 70% fidelity cliff)

---

## 2. Ba Quy Tắc Nền Tảng (Weiss & Hari)

Mọi CSR function PHẢI tuân theo 3 rules:

### Rule 1: Target Value = 100% Satisfaction
- Đạt đúng TV → CSR = 100%
- **Vượt TV KHÔNG cải thiện CSR** (vì TV đã là điểm cân bằng tối ưu từ QFD)
- Ví dụ: Weight TV = 60g → nhẹ hơn 60g vẫn là 100%, KHÔNG phải 110%

### Rule 2: Poorest End = Low Baseline (không nhất thiết = 0%)
- Đầu kém nhất của dải giá trị được gán CSR thấp (có thể 0%, 10%, 40%...)
- Giá trị TỆ HƠN poorest end → vẫn giữ nguyên CSR baseline (không giảm thêm)
- Ví dụ: Weight poorest = 240g → CSR = 40%. Nặng 300g vẫn = 40%

### Rule 3: Phân Bố Giữa TV và Poorest End = Thỏa Thuận Với Khách Hàng
- Đường cong giữa hai đầu do QFD team + khách hàng quyết định
- Đây là nơi **curve shape** được chọn

---

## 3. Các Dạng Curve Shape

### 3.1 Linear (tuyến tính)
```
CSR%
100|--------*
   |       /
 50|      /
   |     /
  0|----*-----------→ PC value
   poorest    TV
```
**Khi nào dùng:** PC mà mỗi đơn vị cải thiện mang lại cùng mức satisfaction tăng.
**Ví dụ:** Weight (60g→240g linear từ 100%→40%)

### 3.2 Non-linear (phi tuyến / S-curve)
```
CSR%
100|--------*
   |      .'
 50|    .'
   |  .'
  0|.*--------------→ PC value (e.g., cost)
```
**Khi nào dùng:** Satisfaction nhạy hơn ở một đầu. Chi phí thường non-linear — gần TV thì OK, xa TV thì rớt nhanh.
**Ví dụ:** Purchasing Price — TV $110, đạt $195 → CSR chỉ 10% (rớt rất nhanh)

### 3.3 Step Function (hàm bậc thang)
```
CSR%
100|--------*****
   |        |
 60|   *****|
   |   |
 30|***|
   |-----------------→ PC value
```
**Khi nào dùng:** Có ngưỡng rõ ràng — dưới ngưỡng thì satisfaction nhảy bậc.
**Ví dụ:** Training fidelity — dưới 50% = 0%, 50-70% = 30-60%, trên 70% = 90-100%

### 3.4 Peak/Window Function (đỉnh giữa)
```
CSR%
100|     ****
   |    /    \
 50|   /      \
   |  /        \
  0|*/          \*---→ PC value
   too low  TV  too high
```
**Khi nào dùng:** Cả quá thấp VÀ quá cao đều xấu.
**Ví dụ:** Alarm Volume — TV ~60 dB. Quá nhỏ (<38 dB) = 0%, quá lớn (>70 dB) = 0%. Đỉnh 100% ở 54-62 dB.

### 3.5 Multi-dimensional Function
**Khi nào dùng:** CSR phụ thuộc vào > 1 biến, hoặc giá trị PC này phụ thuộc PC khác.
**Ví dụ:** Size satisfaction phụ thuộc vào cả volume VÀ weight cùng lúc.

---

## 4. Quy Trình Xây Dựng CSR Function (5 bước)

### Bước 1: Chọn PC từ QFD
- Lấy các PC quan trọng nhất từ House of Quality
- Ghi: tên PC, đơn vị đo, Target Value (TV), trọng số tương đối (W%)
- Tổng W% nên ≈ 100% customer satisfaction

### Bước 2: Xác Định Dải Giá Trị
- **TV (100%):** Từ QFD target
- **Poorest end (baseline%):** Giá trị tệ nhất chấp nhận được
- **Beyond poorest:** Gán cùng baseline (flat)
- **Beyond TV:** Gán 100% (flat hoặc cap)

### Bước 3: Chọn Curve Shape
Hỏi: "Satisfaction thay đổi đều (linear), nhạy ở đầu (non-linear), hay có ngưỡng (step)?"
- **Linear** = default nếu không có lý do đặc biệt
- **Non-linear** = khi cost or performance có diminishing returns
- **Step** = khi có threshold rõ ràng (pass/fail, minimum viable)
- **Window** = khi cả hai hướng đều xấu (noise, temperature, voltage)

### Bước 4: Vẽ Curve + Xác Nhận Với Khách Hàng
- Vẽ CSR(x) cho dải [poorest → TV] (và [TV → upper] nếu window)
- QFD team + customer representative review
- Ghi nhận: "Curve này đã CEO/customer approved"

### Bước 5: Tích Hợp Vào DQM
- Với mỗi concept, estimate giá trị thực tế cho từng PC
- Tra CSR% từ curve
- DQM Score = Σ (Wᵢ × CSRᵢ%)

---

## 5. DQM Scoring Formula

```
DQM Total = Σᵢ (Wᵢ × CSRᵢ)

Trong đó:
- i = mỗi Product Characteristic được chọn
- Wᵢ = trọng số tương đối (từ QFD, tổng ≈ 100%)
- CSRᵢ = % satisfaction tra từ CSR function (0-100%)
```

**Ví dụ từ Lost Child Finding System (Hari & Weiss):**

| PC | W% | TV | Actual | CSR% | W×CSR |
|---|:-:|---|---|:-:|:-:|
| Mission Reliability | 17% | 95% | 95% | 100% | 17.0 |
| Range | 15% | 120m | 120m | 100% | 15.0 |
| Alarm Volume | 12% | 60 dB | 60 dB | 100% | 12.0 |
| Purchasing Price | 12% | $110 | $195 | **10%** | **1.2** |
| Continuous Op Time | 10% | 40h | 40h | 100% | 10.0 |
| ... | ... | ... | ... | ... | ... |
| **DQM Total** | | | | | **89%** |

→ Purchasing Price tệ ($195 vs TV $110) kéo DQM xuống. Non-linear CSR trừng phạt nặng.

---

## 6. CSR Trap — Linear Curve Che Giấu Threshold

**Bài học từ LITE-PA2 pipeline (Session 72):**

CSR-1 Fidelity ban đầu dùng **linear curve** (50%→100% tuyến tính):
- C4 đạt 50% fidelity → CSR = 50% (có vẻ OK)
- Nhưng SC-2 sacred constraint = 70% fidelity threshold

Nếu dùng **step curve** (threshold tại 70%):
- C4 đạt 50% fidelity → CSR chỉ 30% (trừng phạt đúng)
- C2 đạt 85% → CSR = 95% (thưởng đúng)

**Law:** Linear CSR function che giấu threshold effects. Khi có sacred constraint hoặc pass/fail boundary → PHẢI dùng step hoặc S-curve.

---

## 7. Group A vs Group B Criteria

| | Group A | Group B |
|---|---|---|
| **Khi dùng** | Step 7 — Pugh screening | Step 9 — Final selection (DQM) |
| **Số criteria** | Ít (4-7) nhưng quan trọng | Nhiều hơn (có thể 10-15) |
| **Coverage** | ≥ 70% customer satisfaction | ≥ 95% customer satisfaction |
| **Yêu cầu** | Đánh giá được ngay, không cần analysis sâu | Có thể cần analysis thêm |
| **CSR** | Có thể dùng simplified | Full CSR function + DQM |

---

## 8. Kết Nối Với Kano Model

Kano phân loại features → gợi ý curve shape:

| Kano Category | CSR Curve Shape Gợi Ý |
|---|---|
| **Must-be** (basic) | Step function — dưới ngưỡng = rớt mạnh, trên ngưỡng = flat |
| **One-dimensional** (performance) | Linear — satisfaction tỉ lệ thuận performance |
| **Attractive** (delighter) | Non-linear concave — ít thay đổi gần TV, nhảy satisfaction nhanh khi vượt |
| **Reverse** | Window function — quá nhiều = giảm satisfaction |

---

## Tóm Tắt 1 Câu (Feynman Test)

> **CSR function ánh xạ giá trị kỹ thuật thực tế → % hài lòng khách hàng, với TV=100% làm đỉnh, và dạng curve (linear/step/non-linear/window) quyết định liệu function có bắt được ngưỡng threshold hay không — dùng sai dạng curve = che giấu design risk.**

---

## Sources

- Weiss, M.P. & Hari, A. (2015). "Extension of Pahl & Beitz Systematic Method for Conceptual Design of a New Product." Procedia CIRP 36, pp. 254-260. [ScienceDirect](https://www.sciencedirect.com/science/article/pii/S2212827115002073)
- Hari, A. & Weiss, M.P. (2004). "Application of ICDM for the Conceptual Design of a New Product." ICED 2004. [Design Society](https://www.designsociety.org/publication/29631/application_of_icdm_for_the_conceptual_design_of_a_new_product)
- Herscovitz, A. (2002). "Systems Engineering with ICDM – A Case Study." INCOSE International Symposium. [Wiley](https://incose.onlinelibrary.wiley.com/doi/10.1002/j.2334-5837.2002.tb02565.x)
- NLM Notebook `eqfd` (19 sources) — primary CSR detail source
- NLM Notebook `icdm` (11 sources) — ICDM integration context
- Kano, N. (1984). "Attractive Quality and Must-be Quality." [ASQ](https://asq.org/quality-resources/kano-model)
