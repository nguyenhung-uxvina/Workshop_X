---
created: 2026-03-20
updated: 2026-03-20
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #three-laws]
links: [[Haptic Congruency Rule — Physical Feedback Phải Match Virtual]], [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]]
---

# Two-Channel Law — Mount Resistance và Firing Vibration Là Hai Bài Toán Riêng

## Ý Tưởng Cốt Lõi

Mô phỏng vũ khí trên bệ (mounted weapon) có HAI kênh haptic độc lập: (A) sức cản mount khi xoay/nâng hạ, và (B) rung lắc khi bắn. Hai kênh này cần công nghệ khác nhau, fidelity target khác nhau, và huấn luyện kỹ năng khác nhau. Gộp chúng thành "một bài toán giật" = over-engineer hoặc under-engineer.

## Giải Thích Chi Tiết

Khi thiết kế VN-12.7MM-SIM (bệ súng hải quân 12.7mm), ban đầu nghĩ "cần mô phỏng giật 2,500N" — tức cần linear motor hoặc pneumatic cylinder lớn, đắt ($15K+). Nhưng phân tích kỹ cho thấy:

- **Channel A (Mount Resistance):** Xạ thủ CẢM NHẬN sức cản khi quay bệ sang trái-phải, nâng-hạ nòng. Đây là kỹ năng TARGET TRACKING — bám mục tiêu. Giải pháp: magnetic particle brake (20 Nm, ~$300). ĐÃ QUYẾT ĐỊNH.

- **Channel B (Firing Vibration):** Xạ thủ CẢM NHẬN rung khi bắn liên thanh 600 phát/phút. Đây là kỹ năng FIRE CONTROL — điều khiển burst, kỷ luật bắn. Giải pháp: shaker pneumatic hoặc electric (~$500-2,000). CHƯA THIẾT KẾ.

Gộp A+B thành "full recoil simulator" → cần ACME GAR ($15K). Tách A và B → tổng $1,500-2,500. Khác nhau 6-10 lần chi phí, cùng fidelity level.

Tương tự như xe hơi có 2 hệ thống riêng: lái (steering) và phanh (brake). Không ai thiết kế "một hệ thống lái-phanh kết hợp" — vì input khác, output khác, kỹ năng vận hành khác.

## Tại Sao Điều Này Quan Trọng?

- Thay đổi Doc 022 (Recoil Subsystem Concept Design) từ "thiết kế full recoil" sang "thiết kế vibration shaker cho Channel B"
- Giảm chi phí subsystem 6-10× mà vẫn đạt L3 fidelity
- Áp dụng cho mọi mounted weapon simulator trong portfolio (12.7mm, 14.5mm, 23mm, naval gun)
- Pattern có thể reuse qua IRONMESH platform

## Liên Kết

- [[Haptic Congruency Rule — Physical Feedback Phải Match Virtual]] — mỗi channel phải congruent RIÊNG: Channel A ≥70% mount feel HOẶC zero, Channel B ≥70% vibration HOẶC zero. Không mix.
- [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]] — 70% threshold áp dụng PER CHANNEL, không phải cho "tổng giật." Channel A = 70% mount resistance. Channel B = 70% firing vibration.
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — cross-cluster C↔G: TVI framework giải thích tại sao tách channel rẻ hơn mà training outcome không thua gộp channel đắt hơn.

## Nguồn Gốc

- VN-12.7MM-SIM Phase 3, Recoil Simulation Technologies Analysis, 2026-03-20
- ACME GAR architecture study (mount-level recoil vs bolt-level cycling = 2 subsystems)
- Ngày gặp: 2026-03-20
