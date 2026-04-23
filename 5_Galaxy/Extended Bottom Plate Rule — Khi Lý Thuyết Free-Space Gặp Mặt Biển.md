---
created: 2026-03-11
updated: 2026-03-11
type: permanent-note
tags: [#type/permanent-note, #pahl, #product, #warning]
links: [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]], [[Trihedral Corner Reflector — RCS Amplification]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]], [[Median vs Mean RCS — Khi Thống Kê Lừa Thiết Kế]]
---

# Extended Bottom Plate Rule — Khi Lý Thuyết Free-Space Gặp Mặt Biển

## Ý Tưởng Cốt Lõi

Công thức RCS trihedral corner reflector (σ = 4πa⁴/3λ²) được tính trong free-space — không có mặt phản xạ bên dưới. Khi đặt reflector trên mặt biển, multipath giữa sóng trực tiếp và sóng phản xạ từ nước tạo ra ground-lobing, làm RCS thực tế giảm thảm khốc ở grazing angle thấp (2–5°) — chính xác là góc mà tên lửa chống hạm tiếp cận. Mở rộng tấm đáy (extended bottom plate) giải quyết hoàn toàn: +20 dB tại grazing 4°, loại bỏ ground-lobing.

## Giải Thích Chi Tiết

Tên lửa chống hạm bay lướt biển ở độ cao 3–10m, nhìn mục tiêu ở grazing angle rất thấp. Tại góc 4°, trihedral thường cho RCS gần bằng 0 — nghĩa là mục tiêu "biến mất" khỏi radar seeker ở đúng lúc quan trọng nhất.

Extended bottom plate hoạt động bằng cách tạo thêm đường phản xạ gián tiếp: sóng radar đập vào tấm đáy mở rộng → phản xạ lên trihedral → trở lại seeker. Hiệu quả:
- Grazing 4°: **+20 dB** (gấp 100× RCS so với conventional)
- Boresight: +2.5 đến +4.5 dB (bonus nhỏ nhưng miễn phí)
- Loại bỏ ground-lobing pattern không kiểm soát được

Dữ liệu từ Sandia National Lab (OSTI report) — thí nghiệm thực tế, không phải simulation.

## Tại Sao Điều Này Quan Trọng?

- **VN-AST-MSL-001:** Nếu dùng conventional trihedral, target có thể có RCS 4,000 m² trên giấy nhưng chỉ vài chục m² tại góc tiếp cận của tên lửa. Extended plate là must-have.
- Đây là ví dụ kinh điển của gap giữa lý thuyết (free-space calculation) và thực tế (sea-surface environment). Tính toán đúng mà vẫn sai vì giả định nền tảng (free-space) không match thực tế.
- Cảnh báo chung: bất kỳ khi nào dùng công thức lý thuyết cho thiết kế ngoài biển, PHẢI kiểm tra giả định về môi trường.

## Liên Kết

- [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]] — scaling law đúng trong free-space nhưng misleading nếu không tính multipath. Extended plate "cứu" scaling law ở low angles.
- [[Trihedral Corner Reflector — RCS Amplification]] — conventional trihedral là nền tảng, extended plate là evolution cần thiết cho maritime.
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — không có sea trial, sẽ không phát hiện gap giữa free-space RCS và actual RCS. Giấy tờ nói 4,000 m², biển nói gần 0.
- [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]] — cùng pattern: giá trị "đúng" phụ thuộc điều kiện biên mà người dùng thường bỏ qua.
- [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]] — sea state envelope quyết định mức multipath: Hs₁₀₀ = 4.66m tạo mặt biển rough, ảnh hưởng ground-lobing pattern.
- [[Median vs Mean RCS — Khi Thống Kê Lừa Thiết Kế]] — cả hai cảnh báo RCS lý thuyết ≠ thực tế: Extended Plate về multipath, Median vs Mean về thống kê. Dùng sai cả hai = over/under-spec.

## Nguồn Gốc

/research --deep RCS Naval Warships & Sea Targets (2026-03-11). Sandia National Lab report (OSTI), DTIC NRL reports, Ingo Harre maritime RCS paper. NLM notebook: rcs.
