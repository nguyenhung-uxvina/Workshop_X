---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/technology, #acq, #sys, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]], [[Flexibility Là Output, Không Phải Input]]
---

# ACH Boundary Rule — Information vs Physical Forces

## Ý Tưởng Cốt Lõi

AI-Compensates-Hardware (ACH) hoạt động khi hardware bị thay thế **sản xuất thông tin** (sensors, displays, assessment). ACH thất bại khi hardware bị thay thế **sản xuất lực vật lý** (recoil, motion, resistance). Đây là ranh giới cứng, không phải spectrum.

## Giải Thích Chi Tiết

Bằng chứng từ 4 domain:

| Domain | ACH thành công | ACH thất bại |
|--------|---------------|-------------|
| **Photography** | Sensor nhỏ + AI = ảnh đẹp (information) | Không thể AI thay thế ống kính vật lý cho bokeh quang học (physical) |
| **Predictive Maintenance** | ML thay thế vibration sensor (information) | Không thể AI thay thế bạc đạn hỏng (physical) |
| **Digital Twin** | Virtual commissioning thay thế physical prototype testing (information) | Không thể AI thay thế vật liệu chịu nhiệt (physical) |
| **Military Training** | AI coaching thay thế human instructor (information) | Không thể AI thay thế recoil cho weapon training (physical) |

Pattern: AI xử lý BIT (0/1), không xử lý NEWTON. Khi problem domain là bit → ACH. Khi problem domain là newton → hardware.

## Tại Sao Điều Này Quan Trọng?

Đây là **GO/NO-GO rule** cho toàn bộ FORGE product strategy:
- **BB-01 LOMAH**: ACH ✓ — AI cải thiện scoring accuracy từ cheap piezo (information processing)
- **VN-12.7MM-SIM**: ACH partial — AI cho coaching/scoring ✓, nhưng recoil PHẢI pneumatic ✗
- **AST-MSL-001**: ACH ✗ — pure mechanical target, không có AI component
- **CORTEX engine**: ACH ✓ — cross-product AI platform xử lý information layer

Mỗi khi đánh giá ACH candidate mới, hỏi: "Subsystem này sản xuất bit hay newton?"

## Liên Kết

- [[Phán đoán không thể uỷ thác cho AI]] — ACH boundary rule là một dạng judgment boundary; biết KHI NÀO dùng AI quan trọng hơn biết CÁCH dùng
- [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] — hậu quả khi vi phạm boundary rule trong training domain
- [[Flexibility Là Output, Không Phải Input]] — ACH tạo flexibility ở information layer, không phải physical layer

## Nguồn Gốc

Research pipeline output #5 (2026-03-08). NLM notebook `ach`, 15 sources. Synthesized từ computational photography, predictive maintenance, digital twin, và military training evidence.
