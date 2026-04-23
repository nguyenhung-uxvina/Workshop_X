---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #defense, #product, #warning, #pahl]
links: [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]], [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]], [[Training Value Index — Ultra-Realism Không Bằng Better Learning]]
---

# Negative Training Trap — Mô Phỏng Sai Môi Trường Dạy Sai Bài Học

## Ý Tưởng Cốt Lõi

Khi simulator mô hình hóa môi trường KHÁC với môi trường thực tế triển khai, nó không chỉ vô ích — nó **dạy sai**. Operator được train để tin sensor hoạt động tốt trong điều kiện sẽ KHÔNG BAO GIỜ xảy ra tại chiến trường thực. Đây là negative training: luyện tập tạo ra reflexes sai, tệ hơn không luyện tập.

## Giải Thích Chi Tiết

Phân tích 33 nguồn về C-UAS/C-USV cho thấy một blind spot hệ thống: **KHÔNG MỘT nguồn nào** cung cấp dữ liệu thực nghiệm về hiệu suất sensor trong điều kiện nhiệt đới biển.

Các mô hình hiện tại (radar resolution, EO/IR detection range, laser effectiveness) đều dựa trên:
- Phòng thí nghiệm anechoic chamber (RF data)
- Điều kiện khí hậu ôn đới (NATO exercises ở Scotland, California)
- Clear-weather baselines

Trong thực tế triển khai Vietnam (Biển Đông):
- **Laser**: thermal blooming nghiêm trọng trong độ ẩm 85%+, mưa nhiệt đới
- **Radar**: sea clutter nhân lên trong sea state 3+ gió mùa, false alarm rate tăng
- **EO/IR**: giảm visibility trong mưa, salt fog phủ lens
- **Acoustic**: ambient noise cao hơn 20dB trong cảng/ven bờ

Nếu sim cho trainee thấy sensor hoạt động chuẩn → trainee sẽ tin vào auto-detection trong thực tế → detection KHÔNG xảy ra → surprise attack thành công.

## Tại Sao Điều Này Quan Trọng?

Đây là CẢNH BÁO ĐỎ cho tất cả sản phẩm sim của Workshop X:
- **VN-CUAV-SIM**: PHẢI có model degradation cho từng sensor type trong điều kiện VN Metocean
- **Counter-USV sim mới**: radar sea clutter model phải dựa trên actual Biển Đông data, không phải NATO
- **Competitive advantage**: sim Việt Nam model đúng nhiệt đới = realistic hơn sim Western cho thị trường ASEAN

**Design requirement cụ thể**: Tạo "Environmental Degradation Layer" trong sim engine — mỗi sensor có performance curve riêng theo temperature, humidity, sea state, rain rate. Data source: VN Navy hoặc tự test.

## Liên Kết

- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — negative training là dạng training scar có hệ thống, do sim design chứ không phải instructor error
- [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]] — dữ liệu metocean Vietnam là input BẮT BUỘC cho environmental degradation model
- [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] — paradox: không cần ultra-realism ở visual, nhưng CẦN accuracy ở environmental model. Đúng thứ cần realistic vs sai thứ cần realistic

## Nguồn Gốc

- CL-2 Assumption Killer + CL-3 Methodology Audit (cross-validation từ 33 nguồn)
- Không có nguồn trực tiếp test sensor trong nhiệt đới — đây chính là gap
- Research pipeline "Counter-UAS + Counter-USV Training," 2026-04-22
