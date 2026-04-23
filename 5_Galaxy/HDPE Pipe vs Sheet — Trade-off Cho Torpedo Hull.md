---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #pahl]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]]
---

## Ý Tưởng Cốt Lõi

Để chế tạo thân torpedo HDPE cho USV bán ngầm, có hai lựa chọn cơ bản: **(A) Dùng ống HDPE đùn sẵn** (seamless, nhanh, sẵn có) hoặc **(B) Hàn tấm HDPE thành ống** (linh hoạt kích thước, đường kính tùy ý, đã proven trong đóng tàu). Mỗi cách có trade-off riêng — và không có nguồn nào trong tài liệu hiện tại chứng minh Option A (pipe) cho ứng dụng bán ngầm.

## Giải Thích Chi Tiết

| Tiêu chí | Option A: Ống đùn sẵn | Option B: Tấm hàn |
|----------|----------------------|-------------------|
| Liền mạch (seamless) | ✓ Không mối hàn dọc | ✗ Có weld seam dọc |
| Đường kính | Giới hạn tiêu chuẩn (DN315, 400, 500...) | Bất kỳ |
| Chiều dày thành | Theo SDR (có thể quá dày) | Tùy chọn |
| End cap | **CHƯA PROVEN** — hàn dome vào ống | Hàn cùng quy trình như thân |
| Khả năng sẵn có VN | Cao (ống nước công nghiệp) | Cần tấm HDPE chuyên dụng |
| Tiếp cận bên trong | Khó (đường kính nhỏ) | Có thể mở trước khi đóng kín |
| Chi phí prototype | Thấp (~$20-50 cho 1m ống) | Cao hơn (tấm + CNC + hàn) |

**Kết luận cho VN-USV-SS-001:**
- **Lab demonstrator ($140):** Option A — dùng ống DN315-400 để validate concept nhanh
- **Full prototype:** Có thể chuyển sang Option B nếu ống giới hạn thiết kế (internal layout, custom diameter)
- **Rủi ro chính Option A:** Dome-to-pipe weld chưa có dữ liệu cường độ → cần coupon test

## Tại Sao Điều Này Quan Trọng?

Quyết định pipe vs sheet ảnh hưởng toàn bộ Phase 2 concept selection. Nếu chọn pipe → bị giới hạn bởi đường kính chuẩn và phải giải bài toán end-cap weld. Nếu chọn sheet → linh hoạt hơn nhưng tốn thời gian + kỹ năng hàn cao hơn. Lab demonstrator nên dùng pipe (nhanh, rẻ) để validate concept trước khi commit production method.

## Liên Kết

- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — cả hai option đều dùng HDPE + foam fill
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — pipe constraint có thể collapse design space nếu diameter không phù hợp
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — pipe vs sheet phải quyết định bằng lab test, không chỉ phân tích
- [[HDPE V-Seam Extrusion Welding — 19 MPa Optimal]] — phương pháp hàn cho cả hai option

## Nguồn Gốc

- Cross-validated: academic papers (Tier S) + OEM sources (Tier A) + Blue Trail Engineering (Tier B)
- IRClass 2024 classification rules (Tier S) — sheet construction proven
- Gặp: 2026-03-19, /research --deep HDPE torpedo hull
