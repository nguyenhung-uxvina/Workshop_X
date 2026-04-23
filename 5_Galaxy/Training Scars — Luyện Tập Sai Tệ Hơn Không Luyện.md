---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/learning, #defense, #warning, #three-laws]
links: [[Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]], [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]], [[Shifting the Burden Archetype]]
---

# Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện

## Ý Tưởng Cốt Lõi

"Training scars" là thói quen sai hình thành từ luyện tập trong điều kiện không thực tế. Trong bắn súng: dry fire không có giật → shooter tập cách rack slide bằng tay → phá vỡ muscle memory, sight picture, và split timing. **Luyện tập sai không phải "tốt hơn không luyện" — nó tệ hơn, vì phải unlearn trước khi relearn.**

## Giải Thích Chi Tiết

Cool Fire Trainer (CO2 recoil) được tạo ra chính xác để giải quyết vấn đề này. Với laser dry fire truyền thống:
1. Bắn → không có giật → slide không cycle
2. Phải tay rack slide để reset trigger
3. Hành động rack slide phá vỡ: grip, sight alignment, natural point of aim
4. Lặp lại 1000 lần → não ghi nhớ pattern sai

Kết quả: shooter luyện laser dry fire nhiều → khi bắn thật, cơ thể kỳ vọng không có giật → phản xạ sai → accuracy giảm.

Nguyên lý rộng hơn: mọi hệ thống huấn luyện có fidelity gap đều có risk tạo training scars. Gap càng lớn (L0 vs L5), risk càng cao. Đây là lý do L3 (có recoil thực) là minimum viable fidelity cho weapon training.

## Tại Sao Điều Này Quan Trọng?

Ba implications cho Workshop X:
1. **VN-12.7MM-SIM**: PHẢI có pneumatic recoil (L3 minimum). L0-L2 không chỉ "kém hơn" mà CÓ HẠI — tạo training scars cho xạ thủ 12.7mm
2. **ACH boundary**: AI có thể bù đắp visual/scoring fidelity nhưng KHÔNG THỂ bù đắp haptic gap — recoil là physical force, không phải information
3. **Chung**: khi thiết kế bất kỳ trainer nào, hỏi "training scars nào có thể hình thành từ fidelity gap này?"

## Liên Kết

- [[Skin in the Game — Hệ Quả Thật Tạo Tư Duy Thật]] — recoil là "skin in the game" của bắn súng; không có nó → không có feedback loop thực
- [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]] — L3 là minimum để tránh training scars
- [[Shifting the Burden Archetype]] — laser dry fire shift burden từ "luyện tập đúng" sang "luyện tập tiện" → dependency loop

## Nguồn Gốc

Research pipeline output #4 (2026-03-08). NLM notebook `127sim`. Cool Fire Trainer documentation + competition shooting community feedback.
