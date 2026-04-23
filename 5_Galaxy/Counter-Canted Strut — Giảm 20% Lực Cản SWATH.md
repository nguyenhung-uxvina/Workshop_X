---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #defense]
links: [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]], [[6-Fold Symmetry — Omnidirectional Stability]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]]
---

## Ý Tưởng Cốt Lõi

Trong thiết kế SWATH (Small Waterplane Area Twin Hull), cấu hình **counter-canted struts** — strut trước nghiêng vào trong + strut sau nghiêng ra ngoài + mũi swept-forward — giảm **>20% tổng lực cản thân tàu** ở tốc độ cao nhờ giảm wave interference giữa các strut.

## Giải Thích Chi Tiết

SWATH là biến thể semi-sub dùng 2 thân chìm (torpedoes) nối với sàn trên mặt nước qua các strut hẹp. Vấn đề: sóng tạo ra bởi mỗi strut giao thoa, tạo thêm lực cản (wave interference drag).

Giải pháp từ nghiên cứu Hybrid SWATH USV:
- **Fore struts:** nghiêng vào trong (inward cant)
- **Aft struts:** nghiêng ra ngoài (outward cant)
- **Stem:** swept-forward thay vì thẳng đứng
- Kết quả: hệ sóng triệt tiêu nhau thay vì cộng hưởng → giảm >20% total hull resistance

Lưu ý: chỉ áp dụng khi chọn kiến trúc SWATH hoặc hybrid SWATH. Monohull semi-sub không có strut interference vấn đề này.

## Tại Sao Điều Này Quan Trọng?

Nếu VN-USV-SS-001 chọn kiến trúc SWATH (twin-hull), đây là "free" 20% reduction — chỉ cần thay đổi góc lắp strut, không tốn thêm vật liệu hay complexity. Tương tự [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]] — thay đổi geometry nhỏ → hiệu quả lớn phi tuyến. Nhưng nếu chọn monohull → note này không áp dụng.

## Liên Kết

- [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]] — cùng pattern: geometry change → nonlinear performance gain
- [[6-Fold Symmetry — Omnidirectional Stability]] — strut placement ảnh hưởng ổn định đa hướng
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — 20% reduction từ CFD, cần verify tank test
- [[WPA Dilemma — Stealth vs Stability Trong Semi-Sub]] — strut là nơi WPA tập trung trong SWATH design

## Nguồn Gốc

- "Hydrodynamic Design of a Family of Hybrid SWATH Unmanned Surface Vehicles" — ResearchGate, Tier S
- Gặp: 2026-03-18, /research --deep semi-sub USV
