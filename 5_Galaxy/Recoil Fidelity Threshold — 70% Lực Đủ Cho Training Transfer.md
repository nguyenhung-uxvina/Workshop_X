---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #defense, #product, #acq, #three-laws]
links: [[Training Value Index — Ultra-Realism Không Bằng Better Learning]], [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]], [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]], [[ACH Boundary Rule — Information vs Physical Forces]]
---

# Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer

## Ý Tưởng Cốt Lõi

Simulator không cần tái tạo 100% recoil của vũ khí thật. Khoảng 70% peak force là đủ để người bắn phát triển kỹ năng kiểm soát giật — sight recovery, split timing, burst control. Vượt qua ngưỡng này, thêm fidelity chỉ tăng chi phí mà không cải thiện training transfer đáng kể.

## Giải Thích Chi Tiết

Từ phân tích hệ thống huấn luyện 12.7mm:

| Fidelity Level | Recoil | Training Transfer | Chi phí |
|---|---|---|---|
| L0-L2 (screen/haptic) | 0-10% | Thấp — không train được recoil management | $5K-100K |
| **L3 (pneumatic)** | **~70%** | **Cao — 80% giá trị huấn luyện** | **$200K** |
| L4-L5 (full effects/live) | 90-100% | Rất cao | $500K+ |

Bước nhảy lớn nhất về training transfer xảy ra từ L2 → L3, không phải L3 → L5. Lý do: cơ thể cần cảm nhận **impulse thật** để xây dựng muscle memory cho recoil management, nhưng không cần impulse **chính xác** — chỉ cần đủ lớn để trigger cùng phản xạ vận động.

Nguyên lý tương tự trong thể thao: tập boxing với găng nặng hơn găng thi đấu vẫn build đúng muscle memory. Quan trọng là **có lực cản**, không phải lực cản chính xác bao nhiêu Newton.

**Ngưỡng dưới nguy hiểm:** Dưới ~50% force, người bắn phát triển training scars — thói quen sai vì không có resistance. Cool Fire documentation xác nhận: laser-only (0% recoil) tạo bad muscle memory.

## Tại Sao Điều Này Quan Trọng?

Trực tiếp định hình VN-12.7MM-SIM: target L3 (pneumatic, 70% force) thay vì L4-L5 (full effects). Tiết kiệm 60-80% chi phí mà giữ 80% training value. Kết hợp với ACH (AI coaching ở L3) có thể đạt training outcome ngang L4-L5 nhưng ở 1/5 giá.

Đây cũng là bài test quan trọng cho ACH thesis: **AI bù đắp cho hardware gap giữa L3 và L5.**

## Liên Kết

- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — cùng cluster C: ultra-realism overshoot actual training needs, note này quantify ngưỡng cụ thể
- [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]] — cluster G→C: L3 = 80/20 sweet spot, note này giải thích TẠI SAO 80/20 đúng
- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — cluster C: dưới ngưỡng 50% force → training scars
- [[ACH Boundary Rule — Information vs Physical Forces]] — cluster C: recoil là physical force → KHÔNG thể ACH, phải pneumatic

## Nguồn Gốc

- Research: 12.7mm Ballistic Simulation — Recoil & Muzzle Blast Fidelity (WX-KPIPE-001, output #4/5)
- NLM notebook `127sim`: Cool Fire, Laser Shot, InVeris, JetController analysis
- Ngày: 2026-03-08
