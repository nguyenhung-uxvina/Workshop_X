---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #defense, #warning]
links: [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]], [[CTE Mismatch Rule — 10x Giãn Nở Đòi Lỗ Rãnh]], [[Foam-Filled HDPE — Thiết Kế Chống Chìm]]
---

## Ý Tưởng Cốt Lõi

HDPE mất cường độ nghiêm trọng khi nhiệt độ tăng trong khoảng 20-65°C: **shear modulus giảm >80%** → biến dạng vĩnh viễn dưới tải trọng dài hạn. Ở Việt Nam nhiệt đới (nước 28-32°C, không khí 25-45°C, bề mặt dưới nắng >>45°C), **không thể dùng thông số áp suất danh nghĩa** của ống HDPE — phải derate hoặc tăng chiều dày thành.

## Giải Thích Chi Tiết

Tiêu chuẩn IRClass (2024) quy định:
- Phải tính đến suy giảm cơ tính trong dải 20-65°C
- Nếu shear modulus giảm >80% → **không chấp nhận** — vật liệu sẽ biến dạng vĩnh viễn
- Creep (rão) tăng phi tuyến với nhiệt độ + thời gian chịu tải

Yêu cầu cho VN-USV-SS-001:
1. **Dùng HDPE đen** (carbon-filled) — bắt buộc cho chống UV. HDPE trắng/tự nhiên → giòn hóa dưới UV nhiệt đới
2. **Over-engineer chiều dày** — tối thiểu +30% so với tính toán ở 20°C
3. **Hoặc thêm ring stiffener bên trong** — bù stiffness mất do nhiệt
4. **Không tin pressure rating phòng thí nghiệm** — SDR rating ở 20°C, thực tế VN cao hơn 15-25°C

## Tại Sao Điều Này Quan Trọng?

Đây là trap ẩn: kỹ sư chọn ống HDPE theo bảng thông số nhà sản xuất (test ở 20°C, phòng lab), nhưng sản phẩm hoạt động ở 30-45°C dưới nắng Biển Đông. Cường độ thực tế có thể chỉ còn **20-50%** so với datasheet. Nếu không derate → failure mode = creep → biến dạng → mất kín → ngập.

## Liên Kết

- [[VN Metocean Design Envelope — Cam Ranh Đến Vũng Tàu]] — điều kiện nhiệt độ nước/không khí thực tế
- [[CTE Mismatch Rule — 10x Giãn Nở Đòi Lỗ Rãnh]] — HDPE CTE cao (120-180 ppm/°C) → giãn nở đáng kể
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — foam bên trong giảm tải trọng lên thành HDPE
- [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]] — cùng pattern: derating cascade

## Nguồn Gốc

- IRClass "Guidelines on Hull Structure of Thermoplastic Vessels" Rev 1, Sept 2024 — Tier S
- "A Research on Design and Production of HDPE Boat Structural Elements" — ResearchGate, Tier S
- Gặp: 2026-03-19, /research --deep HDPE torpedo hull
