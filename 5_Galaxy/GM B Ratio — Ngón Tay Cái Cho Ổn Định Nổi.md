---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #defense]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[6-Fold Symmetry — Omnidirectional Stability]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]]
---

# GM/B Ratio — Ngón Tay Cái Cho Ổn Định Nổi

## Ý Tưởng Cốt Lõi

Tỷ số GM/B (metacentric height / beam) là chỉ số nhanh nhất để đánh giá ổn định tĩnh của platform nổi. GM/B > 0.5 = rất ổn định. GM/B > 1.0 = cực kỳ stiff (snap-roll, nhưng không lật). Với platform không người — stiff tốt hơn comfortable.

## Giải Thích Chi Tiết

Từ tính toán stability cho AST-MSL-001 "THANH TRI" (hull tròn 6m HDPE):

| Thông số | Giá trị | Ý nghĩa |
|---|---|---|
| GM | 12.234 m | Metacentric height |
| Beam (B) | 6.0 m | Đường kính hull |
| **GM/B** | **2.04** | Cực stiff |
| Wind heel (Beaufort 10) | 0.7° | Gần như không nghiêng |
| IMO margin | 81× | Vượt xa tiêu chuẩn |

**Tại sao GM/B hoạt động như rule of thumb:**

GM phụ thuộc chủ yếu vào BM (metacentric radius), mà BM = I/∇. Với hull tròn:
- I = πR⁴/4 → tỷ lệ R⁴ (bậc 4 của bán kính)
- ∇ = πR²×T → tỷ lệ R²×T (bậc 2 × draft)
- BM ≈ R²/(4T) → **BM tăng theo bình phương bán kính, giảm theo draft**

Nên hull rộng + mớn nước thấp = BM rất lớn = GM rất lớn. Đây là "hiệu ứng đĩa nổi" — platform nổi hình đĩa gần như không thể lật vì waterplane inertia áp đảo mọi lực gây nghiêng.

**So sánh với tàu truyền thống:**

| Loại | GM/B | Đặc tính |
|---|---|---|
| Tàu container | 0.02-0.05 | Comfortable roll |
| Tàu chiến | 0.05-0.10 | Moderate stiffness |
| Sà lan | 0.10-0.30 | Stiff |
| **AST-MSL-001** | **2.04** | Floating disc — snap-roll |

Snap-roll (lắc nhanh, biên độ nhỏ) không phải vấn đề cho unmanned target — không ai say sóng. Ngược lại, stiffness cao giữ mast thẳng đứng = radar reflector luôn hướng đúng.

## Tại Sao Điều Này Quan Trọng?

1. **Quick sanity check:** Trước khi chạy Ansys/GHS, tính GM/B trong 5 phút. Nếu GM/B > 0.5 → stability không phải blocker, chuyển sang vấn đề khác
2. **Design implication cho AST-MSL-001:** Stability margin cực lớn = có thể tăng mast height hoặc thêm thiết bị trên mast mà không lo lật
3. **Unmanned advantage:** Platform không người cho phép optimize cho stiffness thay vì comfort — mở design space mà manned vessel không có
4. **Pattern recognition:** Geometry (beam/draft ratio) quan trọng hơn ballasting cho small craft — ngược với tàu lớn nơi ballast là primary stability tool

## Liên Kết

- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — cluster H hub: foam-filled loại bỏ free surface effect → GM calculation đơn giản hơn
- [[6-Fold Symmetry — Omnidirectional Stability]] — cluster H: hull tròn = omnidirectional = không có preferred heading → stability đồng đều mọi hướng
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — cluster G→H: khi stability margin lớn (GM/B > 1), nó MỞ design space thay vì đóng — cho phép thêm payload mà concept vẫn đứng

## Nguồn Gốc

- Research: AST-MSL-001 Stability Analysis — OI-3 (WX-KPIPE-001)
- NLM notebook `stability`: USNA EN400, DNVGL-RU-SHIP, 46 CFR 174.055, Biran textbook
- AST-MSL-001 "THANH TRI" Gate 2 Review — OI-3 resolution
- Ngày: 2026-03-08
