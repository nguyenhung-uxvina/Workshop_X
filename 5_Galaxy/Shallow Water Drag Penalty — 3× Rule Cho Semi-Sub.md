---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #defense, #pahl]
links: [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Foam-Filled HDPE — Thiết Kế Chống Chìm]]
---

## Ý Tưởng Cốt Lõi

Thân tàu semi-submersible tối ưu cho biển sâu (hẹp, mớn nước lớn) sẽ bị **tăng lực cản gấp 3 lần** khi chạy ở vùng nước nông ven bờ — do tương tác thủy động lực giữa thân tàu và đáy biển. Quy tắc ngược: thân rộng, mớn nước nông bắt buộc cho hoạt động ven bờ.

## Giải Thích Chi Tiết

Nghiên cứu CFD (2024) mô phỏng thân semi-sub với các tỷ lệ chiều cao/chiều rộng khác nhau cho thấy:

- **Nước sâu:** Thân hẹp có lực cản thấp nhất — ít sóng tạo ra, lực hút xuống nhỏ, moment dọc nhỏ
- **Nước nông:** Khe hẹp giữa thân tàu và đáy biển gây tăng tốc dòng chảy → lực cản tăng gấp **3×** so với nước sâu
- Tại tốc độ tới hạn trong nước nông, xuất hiện sóng soliton — mô hình CFD hiện tại chưa capture được hoàn toàn

Patent US5713293A (Hải quân Mỹ, hết hạn) chứng minh rằng thân dạng PWC (Personal Watercraft) — rộng, nông — tạo ra USV ven bờ cơ động tốt, bền, tránh vướng lưới/rác đáy.

## Tại Sao Điều Này Quan Trọng?

VN-USV-SS-001 hoạt động vùng biển ven bờ Việt Nam (nước nông). Nếu chọn thân hẹp kiểu tàu ngầm truyền thống → tàu sẽ tiêu hao năng lượng gấp 3, mất ổn định dọc. Đây là ràng buộc vật lý KHÔNG thể giải quyết bằng phần mềm — phải thiết kế đúng từ Phase 2.

## Liên Kết

- [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]] — điều kiện sóng/gió quyết định mớn nước thiết kế
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — CFD prediction phải verify bằng tank test hoặc sea trial
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — vật liệu thân tàu ven bờ liên quan đến tỷ lệ H/W
- [[GM B Ratio — Ngón Tay Cái Cho Ổn Định Nổi]] — thân rộng tăng GM nhưng thay đổi dynamic response

## Nguồn Gốc

- "Hydrodynamics of Semi-Submersible Vehicle Hulls with Variable Height-Width Ratio in Deep and Shallow Water" (2024) — ResearchGate, Tier S
- US5713293A — Unmanned sea surface vehicle having PWC hull form — US Navy (1996, expired)
- Gặp: 2026-03-18, /research --deep semi-sub USV
