---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #sys, #product, #defense]
links: [[Shifting the Burden Archetype]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[GM B Ratio — Ngón Tay Cái Cho Ổn Định Nổi]]
---

## Ý Tưởng Cốt Lõi

Diện tích mặt cắt ngang mực nước (Waterplane Area — WPA) của tàu semi-submersible là một **balancing loop cổ điển**: WPA nhỏ → tàng hình tốt nhưng mất ổn định; WPA lớn → ổn định nhưng lắc theo sóng (mất tác dụng semi-sub). Tồn tại một vùng WPA tối ưu hẹp — thiết kế ngoài vùng này sẽ thất bại theo một trong hai cách.

## Giải Thích Chi Tiết

Đây là system archetype **Limits to Growth** ứng dụng vào naval architecture:

**WPA quá nhỏ (stealth tối đa):**
- Radar cross-section thấp, visual signature thấp, IR signature thấp ✓
- Lực nổi dự trữ không đủ → nhạy cảm cực độ với thay đổi tải trọng
- Motion amplitude quá lớn khi có lực tác động nhỏ từ bên ngoài
- Tàu "thực tế không ổn định" — minor perturbation → mất kiểm soát

**WPA quá lớn (stability tối đa):**
- Đủ buoyancy reserve, metacentric height cao ✓
- NHƯNG: tàu oscillate theo mọi sóng bề mặt — giống tàu nổi bình thường
- Sensor data bị rung lắc, platform không ổn định cho ISR
- Mất lý do tồn tại của semi-sub design

**Vùng tối ưu:**
- Đủ WPA cho righting moment (kết hợp ballast keel hoặc twin-hull stance)
- Không quá nhiều WPA để follow sóng
- Compensation: heavy ballast keel HOẶC widely-spaced twin canted struts

## Tại Sao Điều Này Quan Trọng?

Đây là trade-off không thể tránh — không có "best of both worlds." Mọi concept cho VN-USV-SS-001 phải chọn điểm trên spectrum stealth↔stability và chấp nhận hệ quả. Nhận ra đây là balancing loop giúp tránh:
1. Over-optimize stealth rồi ngạc nhiên khi tàu mất ổn định
2. Over-compensate stability rồi hỏi "tại sao nó lắc như tàu thường?"

Cross-cluster bridge: kết nối Systems Archetypes (Cluster E) với Physical Design (Cluster H).

## Liên Kết

- [[Shifting the Burden Archetype]] — adding ballast/fins = symptomatic fix cho low-WPA design
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — WPA optimum phải verify bằng tank test, không chỉ tính toán
- [[GM B Ratio — Ngón Tay Cái Cho Ổn Định Nổi]] — GM liên quan trực tiếp đến WPA qua metacentric height
- [[Semi-Sub Pitch Instability — Ngưỡng 6 Knot]] — low WPA = low stiffness = root cause của pitch instability
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — WPA constraint có thể collapse design space

## Nguồn Gốc

- Multiple Tier S sources: academic papers + patents (EP1147983A2, US7789723B2)
- Synthesis từ NLM cross-source query
- Gặp: 2026-03-18, /research --deep semi-sub USV
