---
created: 2026-04-16
updated: 2026-04-16
type: study-guide
topic: DSO Pre-Ranking (ICDM Step 6)
sources: Hari & Weiss (Technion/RAFAEL), Galaxy note, ICDM research doc
purpose: Build mental model before Drill A1
---

# DSO Pre-Ranking — Study Guide

> **Feynman Target:** Sau khi đọc xong, CEO phải giải thích DSO trong 1 câu cho kỹ sư WX.

---

## 1. Vấn Đề DSO Giải Quyết

**Bài toán tổ hợp của bảng hình thái (morphological matrix):**

```
SS1 Weapon Station: 9 sub-functions × ~3-4 WPs mỗi function
= 3 × 4 × 4 × 4 × 4 × 3 × 4 × 3 × 3 = ~62,208 tổ hợp có thể
```

Một kỹ sư KHÔNG THỂ đánh giá 62,000 tổ hợp. P&B giải quyết bằng **trực giác** — kỹ sư chọn "có vẻ tốt" rồi đánh giá 3-5 concept. Nhưng:
- Concept tốt nhất có thể bị bỏ lỡ
- Trực giác thiên lệch (bias toward familiar solutions)
- Không hệ thống, không lặp lại được

**DSO flips the approach:** Thay vì tổ hợp rồi đánh giá → **đánh giá trước rồi tổ hợp.**

---

## 2. DSO Là Gì — 4 Bước

### Bước 1: Chấm điểm từng WP riêng lẻ (TRƯỚC khi tổ hợp)

Mỗi WP trong bảng hình thái được chấm trên **2 trục:**

| Trục | Ý nghĩa | Thang điểm |
|---|---|---|
| **Performance (P)** | WP này đóng góp bao nhiêu cho chức năng? | 1 = kém, 2 = đủ dùng, 3 = tốt, 4 = xuất sắc |
| **Risk (R)** | Mức chắc chắn kỹ thuật? | 1 = rủi ro cao (chưa test), 2 = trung bình, 3 = thấp, 4 = gần như zero |

**DSO Score = P × R** (thang 1-16)

### Bước 2: Phân loại DSO Score

| DSO Score | Phân loại | Hành động |
|:-:|---|---|
| **12-16** | 🟢 **Strong** | Ưu tiên dùng — WP vừa tốt vừa chắc |
| **6-11** | 🟡 **Viable** | Dùng nếu cần — có trade-off |
| **1-5** | 🔴 **Weak** | Tránh — hoặc kém hoặc rủi ro cao hoặc cả hai |

### Bước 3: Sắp xếp lại bảng hình thái

Trong MỖI hàng (sub-function), sắp xếp WPs từ trái sang phải theo DSO score giảm dần:

```
TRƯỚC (ban đầu — thứ tự ngẫu nhiên):
SF3 Recoil: | Solenoid (DSO 9) | Pneumatic (DSO 12) | Cam motor (DSO 3) | Voice coil (DSO 8) |

SAU (sắp xếp DSO giảm dần):
SF3 Recoil: | Pneumatic (12) | Solenoid (9) | Voice coil (8) | Cam motor (3) |
              ↑ LEFT = BEST                                    ↑ RIGHT = WEAK
```

### Bước 4: Tổ hợp "Left Path"

Vẽ một đường qua CỘT TRÁI NHẤT của mỗi hàng → concept mạnh nhất tự nhiên.

```
SF1 Traverse:    [Slip clutch (14)] → ...
SF2 Elevation:   [Counterweight (16)] → ...
SF3 Recoil:      [Pneumatic (12)] → ...
SF4 Trigger:     [Microswitch (12)] → ...
...
                  ↓
              LEFT PATH = Concept #1 (mạnh nhất)
```

Sau đó tạo 2-3 concept nữa bằng cách chọn WP rank #2 hoặc thay thế ở các SF then chốt.

---

## 3. Tại Sao DSO Hiệu Quả — Toán Học

**Không có DSO:** 62,208 tổ hợp → đánh giá 3-5 (bằng trực giác) → bỏ lỡ concept tốt

**Có DSO:** 32 WPs × 2 điểm = **64 phép đánh giá** → sắp xếp → tổ hợp 3-5 concept **có hướng** → concept tốt nhất ở vùng top-left

**Giảm 99.9% công đánh giá** (64 vs 62,208)

**Bằng chứng thực nghiệm (Hari & Weiss):** 8 teams dùng DSO vs 33 teams không dùng. Kết quả DSO tốt hơn có ý nghĩa thống kê (Mann-Whitney-Wilcoxon, p < 0.05).

---

## 4. Giới Hạn Quan Trọng (Không Phải Magic)

| Giới hạn | Tại sao | Giải pháp |
|---|---|---|
| **DSO không kiểm tra compatibility** | 2 WP riêng lẻ điểm cao nhưng khi ghép lại bị xung đột | Sau DSO, PHẢI kiểm tra compatibility matrix (đã có ở BB morpho) |
| **DSO là heuristic, không optimal** | Left-path không đảm bảo là tốt nhất toàn cục | Tạo 3-5 concept variants, không chỉ 1 left-path |
| **Risk score chủ quan** | Người chấm khác nhau cho điểm khác nhau | Dùng evidence-based: TRL, bench test data, supplier track record |
| **Bỏ qua interaction effects** | P và R của từng WP là độc lập — không capture synergy/conflict | Compatibility check sau DSO bắt interaction |

---

## 5. DSO vs P&B Truyền Thống

| | P&B (Ch. 6.5) | ICDM DSO (Step 6) |
|---|---|---|
| **Phương pháp** | Tổ hợp → đánh giá | **Đánh giá → tổ hợp** |
| **Số phép tính** | Tổ hợp × criteria | WP × 2 trục |
| **Bias** | Familiarity bias cao | Giảm bias (systematic) |
| **Thời gian** | Lâu (nhiều concept to evaluate) | Nhanh (pre-filter rồi mới combine) |
| **Khi nào dùng** | Ít SF, ít WP (<100 combos) | **Nhiều SF, nhiều WP (>100 combos)** |

---

## 6. Ví Dụ Nhỏ — Minh Họa (3 SF × 3 WP)

**Bài toán:** Thiết kế đèn pin cho người già (ví dụ kinh điển Technion)

```
BƯỚC 1: Chấm điểm

SF: Nguồn sáng
  LED         P=4  R=4  DSO=16 🟢
  Bóng sợi đốt  P=2  R=4  DSO=8  🟡
  Huỳnh quang   P=3  R=2  DSO=6  🟡

SF: Nguồn điện
  Pin AA       P=3  R=4  DSO=12 🟢
  Pin sạc      P=4  R=3  DSO=12 🟢
  Crank tay    P=2  R=3  DSO=6  🟡

SF: Vỏ
  Nhôm         P=3  R=4  DSO=12 🟢
  Nhựa ABS     P=4  R=4  DSO=16 🟢
  Cao su       P=3  R=3  DSO=9  🟡

BƯỚC 2-3: Sắp xếp (tốt nhất bên trái)

SF Nguồn sáng:  | LED (16) | Huỳnh quang (6) | Sợi đốt (8) |
                  → sắp xếp: | LED (16) | Sợi đốt (8) | Huỳnh quang (6) |

SF Nguồn điện:  | Pin sạc (12) | Pin AA (12) | Crank (6) |
SF Vỏ:          | Nhựa ABS (16) | Nhôm (12) | Cao su (9) |

BƯỚC 4: Left-path = LED + Pin sạc + Nhựa ABS
         Alt-1:    LED + Pin AA  + Nhôm (cho người già cần nặng cầm chắc)
         Alt-2:    LED + Crank   + Cao su (cho cắm trại/khẩn cấp)
```

**27 tổ hợp → 3 concepts có hướng dẫn, chỉ cần 6×2 = 12 phép chấm điểm**

---

## 7. Áp Dụng Cho Drill A1

**Input:** SS1 Weapon Station Morpho — 9 SFs × 3-4 WPs

**CEO sẽ làm:**
1. Mở Morpho SS1 (đã đọc ở trên)
2. Cho TỪNG WP: chấm Performance (1-4) và Risk (1-4)
3. Tính DSO = P × R
4. Phân loại: 🟢 Strong (12-16) / 🟡 Viable (6-11) / 🔴 Weak (1-5)
5. Sắp xếp mỗi hàng: cao nhất bên trái
6. Vẽ left-path → so sánh với ★ selection thực tế trong Phase 2

**Câu hỏi validation:** DSO left-path khớp ★ selection bao nhiêu SF trên 9?

---

## 8. Feynman Check — Giải Thích DSO Trong 1 Câu

> **"DSO chấm điểm từng working principle RIÊNG LẺ (Performance × Risk) TRƯỚC khi tổ hợp, sắp xếp cái tốt nhất bên trái bảng hình thái — biến tìm kiếm mù 62,000 tổ hợp thành tìm kiếm có hướng 3-5 concept."**

Nếu CEO nói được câu này mà không cần nhìn → Dreyfus 2 đạt.

---

## Sources

- [MORE ON SYNTHESIS OF CONCEPTS AS AN OPTIMAL COMBINATION OF SOLUTION PRINCIPLES — Hari & Weiss (Design Society)](https://www.designsociety.org/download-publication/19737/more_on_synthesis_of_concepts_as_an_optimal_combination_of_solution_principles)
- [ICDM - an Integrated Methodology for the Conceptual Design of New Systems (Academia.edu)](https://www.academia.edu/59514794/ICDM_an_Integrated_Methodology_for_the_Conceptual_Design_of_New_Systems)
- [Development of an innovative conceptual design process — Mayda & Börklü (Semantic Scholar)](https://www.semanticscholar.org/paper/Development-of-an-innovative-conceptual-design-by-Mayda-Börklü/fbf8f4614322d218991a063622a83b91ec5ff262)
- Galaxy note: [[DSO Pre-Ranking — Performance × Risk Trước Khi Tổ Hợp]]
- `3_Resources/Deep-Content-Analyzer-Outputs/RESEARCH_ICDM_Conceptual_Design_Method_2026-03-26.md`
