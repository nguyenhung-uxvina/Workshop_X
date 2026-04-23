---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/electronics, #product, #pahl]
links: [[Charge Amplifier — Chuyển Đổi Impedance Cao]], [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]], [[Phán đoán không thể uỷ thác cho AI]]
---

# Slew Rate — Thông Số Ẩn Quyết Định Chất Lượng Tín Hiệu

## Ý Tưởng Cốt Lõi

Khi chọn op-amp, kỹ sư thường so sánh GBW (Gain-Bandwidth Product). Nhưng với tín hiệu xung nhanh (impact, explosion), **slew rate mới là thông số quyết định**. Một op-amp GBW 1 MHz nhưng slew rate 0.3 V/µs (LM358) sẽ méo dạng sóng xung <100 µs, trong khi op-amp GBW 3 MHz với slew rate 13 V/µs (TL072) xử lý hoàn hảo.

## Giải Thích Chi Tiết

Slew rate = tốc độ thay đổi điện áp tối đa mà op-amp có thể theo kịp (V/µs). Với bullet impact:
- Rise time của xung va chạm: 50-100 µs
- Biên độ sau charge amp: 5-10V
- Slew rate cần thiết: 10V / 50µs = 0.2 V/µs (minimum)

LM358 (0.3 V/µs) chỉ vừa đủ — bất kỳ xung nào nhanh hơn 50 µs sẽ bị cắt đỉnh. TL072 (13 V/µs) có margin 65x, xử lý thoải mái mọi loại va chạm.

Bài học rộng hơn: trong signal chain, bottleneck thường ở thông số mà ta KHÔNG nghĩ đến, không phải thông số ta tối ưu hóa.

## Tại Sao Điều Này Quan Trọng?

BB-01 dùng LM358 hay TL072 là quyết định thiết kế cấp thấp nhưng ảnh hưởng toàn bộ signal integrity. Chọn sai op-amp → toàn bộ scoring algorithm downstream nhận dữ liệu méo → kết quả sai. Và cả hai đều có sẵn tại Việt Nam, giá chênh không đáng kể (<$0.50).

## Liên Kết

- [[Charge Amplifier — Chuyển Đổi Impedance Cao]] — slew rate là constraint của tầng charge amp
- [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]] — sensor output shape quyết định yêu cầu slew rate
- [[Phán đoán không thể uỷ thác cho AI]] — chọn component dựa trên datasheet cần judgment, không chỉ spec comparison

## Nguồn Gốc

Research pipeline output #3 (2026-03-08). NLM notebook `lomah`. Phân tích Kistler charge amplifier selection methodology + PCB Piezotronics signal conditioning.
