---
created: 2026-04-20
updated: 2026-04-20
type: permanent-note
tags: [#type/permanent-note, #topic/technology, #product, #acq, #three-laws]
links: [[Physical-World Interface]], [[Niche Fortress Law — Giá Rẻ 3× Tạo Phân Khúc Không Đối Thủ]]
---

## Ý Tưởng Cốt Lõi

Trong hệ mô phỏng huấn luyện, phần cứng đắt tiền (motion platform, projection, haptic) chỉ chiếm ~20% kiến trúc. Phần mềm chiếm ~48%, và sub-function quyết định (AI coaching) là 90% phần mềm. Đầu tư vào AI/SW cho ROI cao hơn gấp bội so với đầu tư vào HW premium.

## Giải Thích Chi Tiết

Phát hiện từ RE MECHA Zen FAC Simulator: Zen đầu tư lớn vào 6-DOF Stewart platform ($30-50K), 360° cylindrical projection ($40-80K), haptic controls ($3-5K) — tổng HW ~$100-190K. Nhưng differentiator thật sự của họ là AI-enabled IOS — phần mềm thuần túy, chiếm 90% của SF-06 (solution-determining sub-function).

Cross-domain analysis cho thấy:
- Mech: ~20% (đắt nhưng replaceable)
- Elec: ~17% (COTS có thể thay thế)
- **SW: ~48%** (chứa toàn bộ intelligence)
- Ctrl: ~15% (gắn chặt với SW)

Hệ quả thực tế: WX có thể match Zen's AI capability với $5-10K SW development trên nền Unity, trong khi Zen chi $100K+ cho HW. ACH principle (AI Compensates Hardware) là biểu hiện cụ thể của quy luật này — dùng AI bù cho HW commodity thay vì mua HW premium.

Điều kiện áp dụng:
1. Sản phẩm là training/simulation (không phải vũ khí thật)
2. Giá trị nằm ở "dạy người" không phải "tái tạo vật lý hoàn hảo"
3. AI coaching quality > physical fidelity cho training transfer

## Tại Sao Điều Này Quan Trọng?

Trap: "Đối thủ có 6-DOF, mình phải có 6-DOF" → sai. Đối thủ có 6-DOF vì họ train HELMSMAN (cần ship motion). WX train GUNNER (cần lead angle coaching). Đầu tư đúng chỗ = AI coaching, không phải motion platform đắt hơn.

Mỗi lần team đề xuất "nâng cấp HW cho match đối thủ", hỏi: "90% giá trị nằm ở SW — nâng cấp HW này tăng bao nhiêu % giá trị training?"

## Liên Kết

- [[Physical-World Interface]] — HW vẫn cần tối thiểu (recoil ≥25N = physical threshold), nhưng vượt ngưỡng thì SW quyết định
- [[Niche Fortress Law — Giá Rẻ 3× Tạo Phân Khúc Không Đối Thủ]] — SW-first cho phép giá 3-5× thấp hơn vì không carry HW cost
- [[Phán đoán không thể uỷ thác cho AI]] — quyết định "invest HW hay SW" là phán đoán chiến lược, không phải spec comparison
- [[Training Value Index]] — training transfer phụ thuộc coaching quality (SW) nhiều hơn physical fidelity (HW)

## Nguồn Gốc

RE MECHA Zen FAC Simulator, Stage 2M Cross-Domain Analysis, 2026-04-20. NLM notebook re-zenfac, 14 sources.
