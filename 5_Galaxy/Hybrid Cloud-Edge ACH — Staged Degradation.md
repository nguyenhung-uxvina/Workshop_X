---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #product, #acq, #defense]
links: [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]], [[ACH Boundary Rule — Information vs Physical Forces]], [[Context vs Capability — Sự Khác Biệt]]
---

## Ý Tưởng Cốt Lõi

Trong ACH defense products, inference architecture nên có **3 tầng degradation**: (1) Cloud AI full-power khi có kết nối, (2) Edge model lighter khi mất cloud, (3) Rule-based fallback khi edge model fail. Không phải "cloud OR edge" mà là "cloud → edge → rules" theo cascade.

## Giải Thích Chi Tiết

Pattern từ VN-AIROBOT (archived):
```
Tầng 1: Claude API multimodal (cloud) — full reasoning, scene understanding
  ↓ mất 4G
Tầng 2: MobileNet on CM4 (edge) — basic object detection, pre-trained
  ↓ inference hang/crash
Tầng 3: Simple threshold rules (fallback) — motion detection, stop-if-obstacle
```

**Tại sao 3 tầng, không phải 2:**
- Cloud-only: fail khi mất kết nối → quốc phòng VN thường không có 4G ổn định
- Edge-only: giới hạn compute → không đủ cho complex reasoning (scene commentary, path planning L3 EMERGE)
- Rules-only: quá đơn giản → mất lợi thế ACH
- **3-tầng cascade** = tận dụng tối đa khi có kết nối, degrade gracefully khi không

**Liên quan đến [[Edge First]]:** Rule vẫn đúng — thiết kế offline (edge) TRƯỚC, cloud là bonus. Nhưng hybrid cho phép L3 EMERGE capabilities chỉ có khi online.

## Tại Sao Điều Này Quan Trọng?

VN-USV-SS-001 có LoRa + 4G comms. Khi tuần tra gần bờ → 4G available → cloud AI có thể enhance path planning. Khi ra xa → mất 4G → edge ArduSub vẫn chạy. Khi edge crash → NC valve auto-surface (hardware fallback). Đây chính là 3-tầng cascade đang áp dụng.

## Liên Kết

- [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] — edge layer = baseline, cloud = enhancement
- [[ACH Boundary Rule — Information vs Physical Forces]] — tất cả 3 tầng xử lý information, không physical
- [[Context vs Capability — Sự Khác Biệt]] — cloud có context rộng hơn edge, edge có latency tốt hơn cloud

## Nguồn Gốc

- VN-AIROBOT _Project_Brief.md (archived) — hybrid cloud-edge pattern documented
- VN-USV-SS-001 Technical Stack TS-001 — LoRa + 4G cascade implicit
- Gặp: 2026-03-19, archived projects analysis
