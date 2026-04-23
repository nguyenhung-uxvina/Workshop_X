---
created: 2026-03-05
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/technology, #product]
links: [[6-Fold Symmetry — Omnidirectional Stability]], [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[LoRa 433MHz — Range vs Bandwidth Trade-off]], [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]]
---

# Trihedral Corner Reflector — RCS Amplification

## Ý Tưởng Cốt Lõi
Trihedral corner reflector (3 mặt phẳng vuông góc) phản xạ sóng radar ngược về nguồn bất kể góc tới — tạo RCS lớn với kích thước nhỏ. Công thức: σ = 4πa⁴/3λ². Với edge 800mm tại X-band 10GHz: ~1,906 m² per reflector — vượt xa target 400 m².

## Giải Thích Chi Tiết
- VN-AST-MSL-001: chuyển sang 3-4 octahedral clusters (8-quadrant mỗi cluster), phân bố trên 6m ring
- Mỗi reflector 800mm: ~1,906 m² peak RCS tại X-band
- -3dB beamwidth: ~40° → 12 units cách 30° = 360° liên tục, KHÔNG có dead zone
- Edge tối thiểu cho 400 m² mọi góc: 643mm (800mm cho margin sea state)
- So sánh: V2 (Pontoon only) chỉ 10-50 m² → không đủ cho seeker acquisition
- Tàu thật (SINKEX): 1,000-10,000 m² — nhưng tốn $1-5M/lần
- Octahedral cluster (8 reflectors back-to-back) → mô phỏng multi-scattering-center của tàu chiến thật

Lý do dùng aluminum: nhẹ, không gỉ trong nước biển (với xử lý anode), dễ gia công tại VN (machine shop).

Ảnh hưởng sóng biển: 6-DOF motion làm RCS dao động, multipath tạo interference, sea clutter cạnh tranh. Oversizing (800mm >> 643mm) tạo margin.

## Tại Sao Điều Này Quan Trọng?
RCS là yêu cầu chức năng số 1 của mục tiêu huấn luyện — không có RCS, radar không thấy, bài tập vô nghĩa. Corner reflector là giải pháp elegant: passive (không cần điện), robust (không có bộ phận di động), scalable (thêm reflector = thêm RCS). So với Luneburg lens (nặng, đắt) và flat plate (chỉ 1 góc): trihedral là lựa chọn tối ưu cho floating target.

## Liên Kết
- [[6-Fold Symmetry — Omnidirectional Stability]] — octahedral clusters trên ring: omnidirectional radar return
- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — RCS lý thuyết vs. RCS đo thực tế = cần đo trên biển
- [[LoRa 433MHz — Range vs Bandwidth Trade-off]] — cả hai là giải pháp electromagnetic: RCS cho radar detection, LoRa cho telemetry
- [[RCS Scaling Law — Luỹ Thừa 4 Của Edge Length]] — tại sao oversizing có margin cực lớn
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — sensitivity của RCS theo edge length

## Nguồn Gốc
- VN-AST-MSL-001 Phase 3 Embodiment Design v2.0
- NLM Research: 73 sources (deep mode), DTIC reports, ResearchGate warship RCS
- Cập nhật 2026-03-08: công thức chính xác + octahedral cluster decision
