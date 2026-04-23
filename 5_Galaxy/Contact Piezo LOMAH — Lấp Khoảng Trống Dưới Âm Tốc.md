---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/electronics, #product, #pahl]
links: [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]], [[Charge Amplifier — Chuyển Đổi Impedance Cao]], [[Trihedral Corner Reflector — RCS Amplification]]
---

# Contact Piezo LOMAH — Lấp Khoảng Trống Dưới Âm Tốc

## Ý Tưởng Cốt Lõi

Hệ thống LOMAH (Location of Miss and Hit) truyền thống dùng cảm biến âm thanh để tam giác hóa sóng xung kích của đạn siêu âm. Điều này có nghĩa là chúng **hoàn toàn không hoạt động với đạn dưới âm tốc**. Piezo contact sensor trên tấm thép tạo ra một loại LOMAH mới — phát hiện va chạm trực tiếp, không phụ thuộc vận tốc đạn.

## Giải Thích Chi Tiết

Acoustic LOMAH (Oakwood H-Bar, Air Target, ShotMarker) thống trị thị trường huấn luyện quân sự vì chúng không tiêu hao bia — chỉ đo sóng âm. Nhưng chúng có điều kiện tiên quyết cứng: đạn phải bay nhanh hơn tốc độ âm thanh (~340 m/s) để tạo shockwave.

Contact piezo approach (BB-01) đặt PZT disk trên mặt sau tấm thép AR500. Khi đạn va chạm, xung lực cơ học truyền qua thép → piezo phát ra tín hiệu điện tích tỷ lệ với lực. Ưu điểm:
- Hoạt động với MỌI loại đạn (subsonic, supersonic, thậm chí pellet)
- Đơn giản hơn về DSP (không cần triangulation timing chính xác đến nanosecond)
- Bia thép tái sử dụng được

Nhược điểm: không phát hiện được đạn trượt (miss), chỉ phát hiện trúng (hit).

## Tại Sao Điều Này Quan Trọng?

BB-01 LOMAH sẽ là sản phẩm **đầu tiên trên thị trường** dùng contact piezo cho scoring — không có sản phẩm thương mại nào làm điều này. Đây là market gap thực sự, không phải giả định. Với quân đội Việt Nam sử dụng nhiều loại đạn subsonic (9mm, .45 ACP trong huấn luyện CQB), acoustic LOMAH không phục vụ được nhu cầu này.

## Liên Kết

- [[PZT vs MEMS — Tại Sao Contact Sensor Thắng Microphone]] — lý do chọn PZT contact thay vì MEMS cho ứng dụng va chạm mạnh
- [[Charge Amplifier — Chuyển Đổi Impedance Cao]] — mạch điều kiện tín hiệu bắt buộc cho output picocoulomb của piezo
- [[Trihedral Corner Reflector — RCS Amplification]] — sản phẩm anh em AST-MSL-001, cùng portfolio Workshop X

## Nguồn Gốc

Research pipeline output #3 (2026-03-08). NLM notebook `lomah`, 12 sources. Phân tích so sánh Oakwood H-Bar, Air Target, ShotMarker, TRAINSHOT, Kongsberg.
