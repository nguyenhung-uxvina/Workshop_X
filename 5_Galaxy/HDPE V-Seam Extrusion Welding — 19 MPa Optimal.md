---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #pahl]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]]
---

## Ý Tưởng Cốt Lõi

Trong các phương pháp hàn HDPE cho chế tạo tàu, **V-seam extrusion welding** cho cường độ kéo cao nhất: **19.29 MPa** (UTS) và uốn **37.85 MPa** — cao hơn 37% so với hot gas welding cùng kiểu mối hàn. Đây là phương pháp bắt buộc cho HDPE dày >6mm.

## Giải Thích Chi Tiết

Ba phương pháp so sánh từ thử nghiệm kéo-uốn:

| Phương pháp | UTS (MPa) | Uốn (MPa) |
|-------------|-----------|-----------|
| V-seam extrusion weld | **19.29** | **37.85** |
| X-seam hot gas weld | 15.44 | 33.28 |
| V-seam hot gas weld | 14.07 | 29.22 |

Quy trình: tack weld bằng hot gas (mỏng) → final pass bằng extrusion welder (dày, cường độ cao).

**Nhiệt độ gia nhiệt trước (preheating) là thông số quyết định:**
- Tối ưu: **260°C** — cải thiện shear strength đáng kể
- Quá cao (>550°C): chuỗi polymer bị phá hủy → mối hàn yếu

Đây là cửa sổ hẹp — cần kiểm soát nhiệt chính xác.

## Tại Sao Điều Này Quan Trọng?

VN-USV-SS-001 sử dụng HDPE pipe/sheet cho thân torpedo. Mọi mối nối (end cap, stiffener, mounting plate) phải dùng V-seam extrusion welding để đạt cường độ tối đa. Hot gas welding chỉ dùng cho tack — không phải mối hàn chịu lực. Sai phương pháp = giảm 37% cường độ → failure mode tiềm ẩn.

## Liên Kết

- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — cùng vật liệu HDPE, khác ứng dụng (buoyancy vs structure)
- [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]] — nguyên tắc tải trọng HDPE
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — cường độ hàn phải verify bằng coupon test
- [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]] — mối hàn chịu kéo = điểm yếu nhất

## Nguồn Gốc

- "Analysis of tensile and flexural strength of HDPE material joints in ship construction" — ResearchGate, Tier S
- "Effect of Preheating Parameters on Extrusion Welding of HDPE" — MDPI Polymers, Tier S
- Gặp: 2026-03-19, /research --deep HDPE torpedo hull
