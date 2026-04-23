---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #acq, #product, #ceo]
links: [[ACH Boundary Rule — Information vs Physical Forces]], [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]], [[IRONMESH Platform — ACH Compound Mechanism]]
---

## Ý Tưởng Cốt Lõi

Intelligence (AI models) đã thành commodity — giá giảm 1000× trong 3 năm (GPT-3: $60/M tokens → frontier 2026: $0.28/M tokens). Giá trị kinh tế migrate sang **inference**: khả năng chạy model nhanh, rẻ, đáng tin cậy ở quy mô lớn. Jensen Huang (GTC 2026): "Data center không còn là kho file — nó là nhà máy sản xuất token."

## Giải Thích Chi Tiết

Jensen Huang đặt cược $1 nghìn tỷ vào inference infrastructure, không phải model development. Ba inflection point chồng lên nhau:
1. ChatGPT (2022): generative → compute demand unprecedented
2. o1 (2024): reasoning → 10× tokens per interaction
3. Agentic AI (2026): doing → compute demand tăng 1,000,000× trong 2 năm

**Hệ quả:** Trained model trong storage = zero revenue. Model chạy inference = business. Ví dụ: $5M đầu tư GB200 rack → $75M token revenue (15× ROI).

**Ví dụ Cursor:** Moat không phải UI — moat là inference stack. Tab completion <100ms P99 = product experience. Managed API không đạt được consistently.

## Tại Sao Điều Này Quan Trọng?

Đây là **external validation mạnh nhất cho ACH thesis** từ CEO công ty $3 nghìn tỷ:
- WX nói: "dùng commodity AI + commodity sensor thay hardware đắt" = ACH
- Jensen nói: "intelligence is commodity, inference is monopoly" = same insight từ infrastructure perspective

Cho Workshop X cụ thể:
- YOLO model trên USB stick = worthless (intelligence without inference)
- YOLO model chạy 30 FPS trên Jetson trong 12.7MM trainer = $42K product (inference = value)
- ArduSub firmware trên Pixhawk = commodity intelligence deployed at edge = ACH in action

**ACH = inference engineering cho defense products.** WX không bán model — WX bán inference trên edge hardware trong môi trường quốc phòng.

## Liên Kết

- [[ACH Boundary Rule — Information vs Physical Forces]] — ACH dùng commodity intelligence (information layer) trên commodity sensors
- [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] — edge inference = ACH deployment model, không phụ thuộc cloud
- [[IRONMESH Platform — ACH Compound Mechanism]] — platform reuse = inference efficiency across products (same model, multiple products)
- [[HDPE V-Seam Extrusion Welding — 19 MPa Optimal]] — parallel: inference optimization (TensorRT) cho AI như V-seam cho HDPE — kỹ thuật tối ưu quyết định chất lượng output

## Nguồn Gốc

- Jensen Huang, GTC 2026 Keynote, San Jose, 2026-03-17
- Avid (@Av1dlive), "Inference Engineering: AI's Trillion-Dollar Bet", 2026-03-18
- Philip Kiely, "Inference Engineering" (Baseten Books, 2026)
- Gặp: 2026-03-19, /analyze vF inference engineering article
