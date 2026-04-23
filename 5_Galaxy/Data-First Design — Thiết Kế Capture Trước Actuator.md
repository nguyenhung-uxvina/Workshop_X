---
created: 2026-03-20
updated: 2026-03-20
type: permanent-note
tags: [#type/permanent-note, #acq, #product, #three-laws]
links: [[Changelog Compound Law — Lịch Sử Thử Nghiệm Giá Trị Hơn Kết Quả]], [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]], [[ACH Boundary Rule — Information vs Physical Forces]]
---

# Data-First Design — Thiết Kế Capture Trước Actuator

## Ý Tưởng Cốt Lõi

Khi thiết kế sản phẩm có nhiều variant (I-01→I-08), hãy thiết kế data capture architecture TRƯỚC actuator architecture. Actuator sẽ bị thay thế (pneumatic→electric). Data architecture sống qua MỌI variant và compound theo thời gian.

## Giải Thích Chi Tiết

VN-12.7MM-SIM có 4 variants:
- I-01 Standard: magnetic brake + pneumatic shaker (rẻ, nhanh)
- I-06 TAC: electric actuator + motion platform (đắt, chính xác)
- I-08 ACH Coach: I-01 hardware + AI coaching engine

I-01 sẽ dùng pneumatic shaker ($500). I-06 sẽ thay bằng electric ($5,000). NHƯNG nếu I-01 có sensors (force, position, trigger timing, accuracy scoring) từ ngày đầu, thì:

1. Khi I-08 launch → đã có 12-18 tháng training data → AI model train trên REAL data, không synthetic
2. Khi I-06 launch → calibration data từ I-01 sensors giúp tune electric actuator nhanh hơn
3. Khi upgrade firmware → per-shot data log = changelog cho recoil subsystem behavior

Ngược lại, nếu I-01 KHÔNG có sensors → I-08 phải bắt đầu từ zero data. ACH compound loop (R2) bị delay 12-18 tháng.

Tương tự [[Changelog Compound Law]]: lịch sử dữ liệu > phần cứng tạo ra dữ liệu.

## Tại Sao Điều Này Quan Trọng?

- Thay đổi BOM I-01: thêm ~$200 sensor package (force sensor, encoder, trigger switch, timestamp module) — nhỏ so với $42K prototype budget
- Thay đổi ICD: sensor interface phải frozen từ I-01, survive qua I-06/I-08
- Thay đổi software architecture: data logger module in I-01 firmware = foundation cho I-08 AI
- Pattern áp dụng cho MỌI ACH product: hardware changes, data compounds

## Liên Kết

- [[Changelog Compound Law — Lịch Sử Thử Nghiệm Giá Trị Hơn Kết Quả]] — cluster F↔C: data capture = changelog cho physical system. Cùng nguyên tắc: record > result.
- [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] — cluster D↔C: sensors capture data locally (edge) first. Cloud analytics (AI coaching) comes later. Edge-first = data-first.
- [[ACH Boundary Rule — Information vs Physical Forces]] — cluster C: actuator = physical force (hardware changes). Data capture = information (compounds). ACH works on information domain — data capture IS the ACH foundation.

## Nguồn Gốc

- VN-12.7MM-SIM Phase 3, I-01→I-08 variant architecture analysis, 2026-03-20
- Insight compound: Changelog Compound Law (Session 53) × ACH Design Pattern
- Ngày gặp: 2026-03-20
