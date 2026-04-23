---
created: 2026-03-26
updated: 2026-03-26
type: permanent-note
tags: [#type/permanent-note, #defense, #three-laws, #warning]
links: [[Sacred Constraints Law — IFR Không Xóa Được An Toàn Quốc Phòng]], [[Physical-World Interface]]
---

# Cannot-Trim Gate — Cắt Giảm Phải Qua Cổng An Toàn

## Ý Tưởng Cốt Lõi

TRIZ Trimming (6 rules: A/X/B/C/D/E) có thể giảm 50-80% components. Nhưng sản phẩm quốc phòng phải tạo Cannot-Trim List TRƯỚC khi trim: safety-critical, regulatory-mandated, human-in-loop, redundancy. Under-trim an toàn, over-trim nguy hiểm.

## Giải Thích Chi Tiết

Trimming rules rất logic: A (loại object), X (thay nguyên lý), B (tự phục vụ), C (hàng xóm đảm nhận), D (chấp nhận giảm), E (thêm part mới tăng ideality). Case study slit-valve: giảm 83.3% components, 95% cost.

Nhưng trong defense training: Rule D "accept degraded" có thể tạo training scars (xem [[Wrong Muscle Memory]]). Rule A "remove" có thể loại safety interlock. Rule C "neighbor takes over" giả định neighbor có năng lực — cần verify với prototype tại VN.

Quy tắc: CEO tạo Cannot-Trim List → AI đề xuất trim cho phần còn lại → CEO duyệt từng trim. Realistic target cho defense: 15-30% component reduction (không phải 80% như academic cases).

## Tại Sao Điều Này Quan Trọng?

Cảnh báo trap: engineer háo hức trim để giảm BOM, bỏ qua safety-critical components. Cannot-Trim Gate là checkpoint bắt buộc.

## Liên Kết

- [[Sacred Constraints Law — IFR Không Xóa Được An Toàn Quốc Phòng]] — cùng nguyên tắc: defense có ranh giới không vượt
- [[Physical-World Interface]] — trim sai = failure vật lý, không undo được
- [[Wrong Muscle Memory — DShK vs M2HB Simulator Trap]] — Rule D degraded có thể tạo training scars

## Nguồn Gốc

Gadd 2011 (TRIZ for Engineers), Altshuller Trimming Rules. WX adaptation 2026-03-26. NLM notebook: triz-adv.
