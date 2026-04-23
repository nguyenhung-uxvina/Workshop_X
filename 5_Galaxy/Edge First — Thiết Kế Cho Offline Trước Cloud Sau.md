---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #topic/technology, #defense, #product]
links: [[ACH Boundary Rule — Information vs Physical Forces]], [[Musk Sequence — Serial Development Cho Solo Engineer]], [[Phán đoán không thể uỷ thác cho AI]]
---

# Edge First — Thiết Kế Cho Offline Trước, Cloud Sau

## Ý Tưởng Cốt Lõi

Trong defense và field deployment, cloud là luxury không phải necessity. **Edge AI** — chạy inference trực tiếp trên thiết bị local — phải là kiến trúc mặc định. Cloud chỉ là optimization layer, không phải dependency.

## Giải Thích Chi Tiết

Tại sao Edge First cho defense:
1. **Connectivity**: Trường bắn quân đội Việt Nam thường không có internet ổn định
2. **Latency**: AI coaching cần phản hồi real-time (<100ms), cloud round-trip không đảm bảo
3. **Security**: Dữ liệu huấn luyện quân sự không nên đi qua cloud server nước ngoài
4. **Cost**: Không phải trả recurring cloud compute cost cho mỗi session

Hardware target cho CORTEX engine:
- **Jetson Orin Nano** (~$200): 40 TOPS, đủ cho object detection + scoring + coaching inference
- **Raspberry Pi 5 + AI HAT** (~$100): nhẹ hơn, cho embedded scoring (BB-01 class)
- **Neuromorphic chips** (future): event-based processing, tiêu thụ cực thấp, battery-powered years

Nguyên lý neuromorphic: chỉ xử lý khi có THAY ĐỔI (event-based spiking neural network). Camera chỉ compute khi có gì đó di chuyển → power consumption giảm 100x so với continuous inference.

## Tại Sao Điều Này Quan Trọng?

CORTEX architecture phải được thiết kế edge-first từ ngày đầu:
- Model format: ONNX/TensorRT, không phải cloud API
- Inference budget: <50ms trên Jetson Orin Nano
- Data pipeline: log locally → batch sync khi có connectivity
- Model update: firmware-style update, không phải continuous deployment

Nếu bắt đầu với cloud-first rồi port xuống edge → technical debt lớn. Ngược lại, edge-first → cloud là optional acceleration.

## Liên Kết

- [[ACH Boundary Rule — Information vs Physical Forces]] — edge AI xử lý information layer trên device
- [[Musk Sequence — Serial Development Cho Solo Engineer]] — build edge version trước, cloud version sau
- [[Phán đoán không thể uỷ thác cho AI]] — chọn edge vs cloud là architecture judgment call

## Nguồn Gốc

Research pipeline output #5 (2026-03-08). NLM notebook `ach`. Edge AI analysis + neuromorphic computing + defense SWaP constraints.
