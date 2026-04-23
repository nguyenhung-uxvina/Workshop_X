---
created: 2026-03-05
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/electronics, #topic/technology]
links: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Phán đoán không thể uỷ thác cho AI]], [[Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]]
---

# PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone

## Ý Tưởng Cốt Lõi
Trong ứng dụng phát hiện va chạm trên tấm thép (BB-01 LOMAH), piezoelectric contact sensor vượt trội hoàn toàn so với MEMS microphone — không phải vì công nghệ tốt hơn nói chung, mà vì nó phù hợp với physics của bài toán: đo rung động cơ học, không đo âm thanh.

## Giải Thích Chi Tiết
- **MEMS standard**: AOP chỉ 128-132 dB — bất lực trước 140+ dB impact
- **High-SPL MEMS** (Vesper VM2020): 140+ dB nhưng $3.50/unit, khó mua tại VN
- **PZT disc 27mm**: Không có giới hạn SPL (đo rung động, không đo âm áp), $0.50-2.00, mua được ở Nhật Tảo
- PZT output ±90V spike — xử lý được bằng charge amplifier + clamp circuit

Quy tắc: **Chọn sensor theo physics của hiện tượng cần đo, không theo spec sheet của sensor.**

## Tại Sao Điều Này Quan Trọng?
Đây là design decision đầu tiên của BB-01 (DEC-002) và nó định hình toàn bộ signal chain phía sau. Nếu chọn MEMS → cần pre-amp khác, filter khác, vấn đề khác hoàn toàn. Sensor selection là decision có cascade effect lớn nhất.

## Liên Kết
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — PZT selection phải được validate bằng bench test trên tấm thép thật
- [[Phán đoán không thể uỷ thác cho AI]] — AI có thể list pros/cons nhưng không thể "cảm" được vibration signature
- [[Charge Amplifier — Chuyển Đổi Impedance Cao]] — Hậu quả trực tiếp của PZT selection
- [[Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]] — Lựa chọn PZT được validate bằng bench test trên tấm thép thật, không phải spec sheet comparison — skin in the game = kết quả thực tế

## Nguồn Gốc
- BB-01 LOMAH DEC-002 (2025-01-26): Acoustic Sensor Selection
- BB-01 References: acoustic-sensor-research.md, acoustic-sensor-summary.md
