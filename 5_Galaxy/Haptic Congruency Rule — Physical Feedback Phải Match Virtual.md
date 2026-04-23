---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #defense, #pahl, #warning]
links: [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]], [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]], [[ACH Boundary Rule — Information vs Physical Forces]]
---

## Ý Tưởng Cốt Lõi

Trong huấn luyện mô phỏng, nếu phản hồi vật lý (haptic feedback) từ phần cứng **không khớp** với kích thích ảo (virtual stimulus), người học phát triển **"wrong muscle memory"** — tức là negative training. Quy tắc: "haptic congruency" bắt buộc — hoặc đúng, hoặc không có, KHÔNG ĐƯỢC sai.

## Giải Thích Chi Tiết

Bằng chứng từ NATO TR-MSG-189 và I/ITSEC:

| Trường hợp | Kết quả | Tại sao |
|------------|---------|---------|
| Hardware đúng (full-motion sim) | Training transfer tốt ✓ | Muscle memory đúng |
| Không có feedback (màn hình only) | Training transfer trung bình | Thiếu nhưng không sai |
| **Hardware SAI (gaming joystick thay flight control)** | **Negative training** ✗ | Muscle memory SAI — tệ hơn không tập |

**Key finding:** Dùng gaming joystick/throttle/pedal (COTS rẻ) thay vì flight control thật (đắt) → người lái phát triển phản xạ SAI vì lực cản, hành trình, phản hồi không đúng. Khi bay thật → phản xạ sai → nguy hiểm.

**Quy tắc cho ACH:**
- ACH thay thế INFORMATION processing (scoring, coaching, scenario) → OK ✓
- ACH thay thế PHYSICAL hardware bằng COTS gần đúng → NGUY HIỂM ✗
- Nếu không đủ budget cho physical hardware đúng → BỎ physical feedback, dùng screen-only → vẫn tốt hơn physical feedback sai

## Tại Sao Điều Này Quan Trọng?

VN-12.7MM-SIM I-08 (ACH variant) dùng pneumatic recoil L3 (70% lực thật). Đây là trên ngưỡng haptic congruency — 70% force với đúng timing = "close enough" cho positive transfer. Nhưng nếu giảm xuống L2 (10% force) hoặc dùng spring thay pneumatic (wrong force profile) → haptic INCONGRUENT → negative training.

**Rule cho mọi ACH product:** Khi thiết kế physical feedback, KHÔNG BAO GIỜ dùng "gần đúng" — hoặc ĐỦ TỐT (≥70% theo [[Recoil Fidelity Threshold]]) hoặc BỎ HẲN feedback đó.

## Liên Kết

- [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]] — 70% = ngưỡng tối thiểu cho haptic congruency
- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — haptic incongruency IS a training scar mechanism
- [[ACH Boundary Rule — Information vs Physical Forces]] — haptic congruency confirms: AI xử lý information ✓, physical forces cần hardware đúng
- [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]] — L3 pneumatic đạt haptic congruency cho recoil

## Nguồn Gốc

- NATO TR-MSG-189: AI Augmented Immersive Simulation in Training — Tier S
- I/ITSEC 2025: Quantifying Training Value in the Age of Immersive Simulation — Tier S
- Gặp: 2026-03-19, /research --deep ACH defense external validation
