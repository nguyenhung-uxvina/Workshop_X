---
created: 2026-04-21
updated: 2026-04-21
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #three-laws]
links: [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]], [[Two-Channel Law �� Mount Resistance và Firing Vibration Là Hai Bài Toán Riêng]], [[Haptic Congruency Rule — Physical Feedback Phải Match Virtual]]
---

# Hard Stop Amplification Law — Cú Va Cơ Khí Tăng Cảm Nhận Giật 50%

## Ý Tưởng Cốt Lõi

Mechanical hard stop ở cuối hành trình giật khuếch đại lực cảm nhận >50% so với actuator đơn thuần. Lý do: thời gian va chạm (<5ms) ngắn hơn nhiều so với thời gian phanh từ trường/điện (~20-50ms), tạo đỉnh lực đột ngột mà tay người cảm nhận như "giật thật."

## Giải Thích Chi Tiết

Từ RE patent Haptech US9719748B2: sliding mass 280g di chuyển 2 m/s va vào hard stop. Thời gian va chạm ~5ms. Lực đỉnh phản ứng >50% lớn hơn lực trung bình của motor (patent claim: "peak generated reactive force is at least 50 percent greater than average generated recoil force before initial contact with mechanical stop").

Ứng dụng cho WX masselotte: thêm hard stop bằng thép vào cuối hành trình masselotte. Thay vì dùng đệm cao su (giảm chấn), để va chạm trực tiếp. Cảm nhận "sắc" hơn, gần giật thật hơn, chi phí thêm ~$0 (chỉ là thiết kế endstop).

**Nguyên tắc:** Onset sharpness (tốc độ tăng lực) quan trọng hơn peak force magnitude. Tay người phản ứng với dF/dt, không chỉ F. Hard stop tạo dF/dt cực cao.

Tương tự: đấm vào tường (hard stop, đau) vs đấm vào nệm (soft stop, không đau) — cùng lực nhưng cảm nhận khác hoàn toàn.

## Tại Sao Điều Này Quan Trọng?

- Masselotte $120 + hard stop = CẢM NHẬN tương đương voice coil $500 không có hard stop
- Thiết kế recoil subsystem cho VN-CUAV-SIM: THÊM hard stop, KHÔNG thêm actuator mạnh hơn
- Áp dụng cho mọi weapon simulator: hard stop = free amplification
- Cảnh báo: ĐỪNG over-damp impulse. Đệm cao su/urethane = mất cảm giác "sắc" → training value giảm

## Liên Kết

- [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]] — 70% force + hard stop amplification = có thể đạt cảm nhận >85% ở chi phí 70%
- [[Two-Channel Law — Mount Resistance và Firing Vibration Là Hai Bài Toán Riêng]] — hard stop áp dụng cho Channel B (vibration), không cần cho Channel A (resistance)
- [[Haptic Congruency Rule — Physical Feedback Phải Match Virtual]] — hard stop làm haptic feedback CONGRUENT hơn với visual (muzzle flash) vì onset timing khớp

## Nguồn Gốc

- RE: ACME GAR GTS, Haptech US9719748B2 patent analysis (peak force >50% via hard stop)
- NLM notebook: re-gar (Report 10: Adversarial Audit + M-Report 10: Maturity Assessment)
- Ngày: 2026-04-21
