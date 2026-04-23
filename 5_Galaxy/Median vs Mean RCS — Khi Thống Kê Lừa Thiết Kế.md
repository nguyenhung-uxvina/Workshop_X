---
created: 2026-03-11
updated: 2026-03-11
type: permanent-note
tags: [#type/permanent-note, #pahl, #warning]
links: [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]], [[Phán đoán không thể uỷ thác cho AI]], [[Extended Bottom Plate Rule — Khi Lý Thuyết Free-Space Gặp Mặt Biển]]
---

# Median vs Mean RCS — Khi Thống Kê Lừa Thiết Kế

## Ý Tưởng Cốt Lõi

RCS của tàu biến thiên rất lớn theo góc nhìn — broadside có thể gấp 100× so với bow. Mean (trung bình cộng) bị kéo lệch bởi peak broadside, cho giá trị gấp 2–4× so với median. Tàu nghiên cứu 50m: mean = 107,369 m², median = 29,652 m² — chênh 3.6×. Dùng sai loại thống kê khi đặt yêu cầu thiết kế dẫn đến over-spec hoặc under-spec nghiêm trọng.

## Giải Thích Chi Tiết

Ba loại RCS thường gặp trong tài liệu:

| Loại | Định nghĩa | Đặc điểm | Dùng khi nào |
|------|-----------|----------|-------------|
| **Peak** | Giá trị cực đại (broadside) | Rất lớn, không đại diện | Đánh giá worst-case detectability |
| **Median** | Giá trị giữa (50th percentile) | Ổn định, không bị outlier kéo | **Thiết kế target — dùng loại này** |
| **Mean** | Trung bình cộng | Bị peak kéo lệch lên 2–4× | Tính toán radar range equation |

Công thức Skolnik (σ = 52·f^0.5·D^1.5) là **median** RCS — điều này hiếm khi được ghi rõ trong sách giáo khoa, dẫn đến người thiết kế tưởng đó là mean.

Khi đọc "RCS of a frigate: 5,000–100,000 m²", phải hỏi: giá trị nào? Median? Mean? Peak? Ở góc nào? Tần số nào? Không hỏi = không biết mình đang thiết kế cho gì.

## Tại Sao Điều Này Quan Trọng?

- **VN-AST-MSL-001 R-A01:** "RCS ≥ 1,000 m²" — phải ghi rõ đây là minimum tại worst-case angle, hay median, hay mean. Ba cách đọc cho ba thiết kế khác nhau hoàn toàn.
- Pattern chung: bất kỳ thông số nào có statistical distribution (RCS, độ bền, friction coefficient) — PHẢI hỏi "giá trị thống kê nào?" trước khi dùng làm requirement.
- Cùng pattern với [[Friction Coefficient Trap]]: tiêu chuẩn khác nhau dùng "đại lượng đại diện" khác nhau, nhưng không ai nói rõ.

## Liên Kết

- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — sensitivity analysis cần xét cả "loại thống kê nào" chứ không chỉ "giá trị bao nhiêu"
- [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]] — cùng archetype: giá trị "đúng" phụ thuộc definition mà tài liệu thường không ghi rõ
- [[Phán đoán không thể uỷ thác cho AI]] — AI sẽ lấy con số từ datasheet mà không hỏi "median hay mean?" — chỉ judgment của engineer mới phát hiện sai sót này
- [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]] — cùng warning: hidden multiplier trong specification
- [[Extended Bottom Plate Rule — Khi Lý Thuyết Free-Space Gặp Mặt Biển]] — cùng cảnh báo RCS lý thuyết ≠ thực tế: Median vs Mean về thống kê đại diện, Extended Plate về multipath từ mặt biển.

## Nguồn Gốc

/research --deep RCS Naval Warships & Sea Targets (2026-03-11). DTIC NRL reports, Ingo Harre "RCS in Radar Range Calculations for Maritime Targets", CADRCS simulation data. NLM notebook: rcs.
