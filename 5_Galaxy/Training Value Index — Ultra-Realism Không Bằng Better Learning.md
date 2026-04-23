---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/learning, #defense, #acq, #three-laws]
links: [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]], [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]], [[ACH Boundary Rule — Information vs Physical Forces]]
---

# Training Value Index — Ultra-Realism Không Bằng Better Learning

## Ý Tưởng Cốt Lõi

Nghiên cứu từ I/ITSEC 2025 chứng minh: **mức độ chân thực siêu cao (ultra-realism) trong simulator KHÔNG tương quan với kết quả học tập tốt hơn**. Nhiều chi phí đổ vào render cỏ chuyển động, contrail vật lý chính xác, hay mùi thuốc súng — nhưng không cải thiện competency đo được.

## Giải Thích Chi Tiết

Training Value Index (TVI) là framework đo giá trị huấn luyện dựa trên human readiness measures, không phải hardware specs.

Phát hiện chính:
1. **Diminishing returns bắt đầu sớm**: Sau khi đạt "đủ chân thực" ở các kênh cảm giác quan trọng (visual field of view, haptic feedback cho task cụ thể), thêm realism không cải thiện performance
2. **"Left-loading" training**: XR headset giá rẻ có thể thay thế phần lớn thời gian huấn luyện trên full-motion simulator đắt tiền
3. **Critical sensory mapping**: Chỉ CẦN map đúng sensory inputs liên quan đến competency đang train. VD: pilot cần field of view chính xác, KHÔNG cần contrail physics

Nguyên lý: brain học từ **feedback loops**, không từ **visual fidelity**. Nếu feedback loop đủ nhanh và đủ chính xác → learning transfer xảy ra, bất kể environment có photo-realistic hay không.

## Tại Sao Điều Này Quan Trọng?

Đây là scientific backing cho chiến lược ACH toàn bộ Workshop X:
- **VN-12.7MM-SIM**: Đầu tư vào recoil fidelity (feedback loop thực) THAY VÌ visual ultra-realism
- **CORTEX AI coaching**: AI feedback (information) có thể bù đắp visual gap — ĐÚNG vì learning transfer đến từ feedback loop, không từ pixel count
- **Procurement argument**: Khi trình bày với quân đội VN, dùng TVI framework để justify L3 thay vì L5 → tiết kiệm 80% budget

Cảnh báo: TVI KHÔNG nói rằng fidelity thấp là tốt. Nó nói rằng ĐÚNG fidelity ở ĐÚNG channel quan trọng hơn HIGH fidelity ở MỌI channel.

## Liên Kết

- [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]] — ứng dụng trực tiếp TVI vào weapon training
- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — wrong fidelity ở critical channel gây hại
- [[ACH Boundary Rule — Information vs Physical Forces]] — TVI confirms: information channels (AI-compensable) ≠ physical channels (hardware-required)

## Nguồn Gốc

Research pipeline output #5 (2026-03-08). NLM notebook `ach`. I/ITSEC 2025 presentation "Quantifying Training Value in the Age of Immersive Simulation" + SLATS project findings.
