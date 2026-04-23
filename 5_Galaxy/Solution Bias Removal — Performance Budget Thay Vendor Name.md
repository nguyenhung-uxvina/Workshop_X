---
created: 2026-03-19
updated: 2026-03-19
type: permanent-note
tags: [#type/permanent-note, #pahl, #warning]
links: [[Nguyên Tắc Atomic Note]], [[Phán đoán không thể uỷ thác cho AI]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]]
---

## Ý Tưởng Cốt Lõi

Khi viết requirements hoặc specs, **KHÔNG chỉ định tên vendor/part number** (ví dụ: "NVIDIA Jetson", "YOLO") — thay vào đó **chỉ định performance budget** (ví dụ: "≤25W power, ≥95% accuracy, ≤30ms latency"). Vi phạm nguyên tắc solution-neutral của Pahl-Beitz sẽ lock design space vào một giải pháp duy nhất.

## Giải Thích Chi Tiết

Ví dụ từ VN-AICAM (archived project):

| Sai (Solution Bias) | Đúng (Performance Budget) |
|---------------------|--------------------------|
| "Dùng NVIDIA Jetson Nano" | "Edge inference ≤25W, ≥95% accuracy, ≤30ms latency" |
| "Chạy YOLOv8" | "Object detection ≥95% mAP@0.5, ≥30 FPS" |
| "Dùng LoRa module" | "Telemetry range ≥5km, bandwidth ≥1kbps, power ≤1W" |
| "Dùng LiFePO4 48V" | "Battery: ≥2.4kWh, cycle life ≥2000, safe discharge to -10°C" |

**Tại sao vendor name = trap:**
1. Lock vào 1 supplier → supply chain risk
2. Không thể so sánh alternatives trong VDI 2225 (đã chọn trước)
3. Giới hạn sáng tạo — team chỉ nghĩ trong khuôn khổ vendor đã chọn
4. Nếu vendor discontinue → requirement trở nên vô nghĩa

**Pahl-Beitz rule:** Phase 1 Task Clarification phải solution-neutral. Vendor selection thuộc Phase 3 Embodiment.

## Tại Sao Điều Này Quan Trọng?

Workshop X dùng nhiều COTS components (Jetson, Pixhawk, ArduSub). Dễ rơi vào trap viết spec theo tên sản phẩm thay vì performance. Khi NVIDIA thay đổi Jetson lineup hoặc Pixhawk discontinue → phải rewrite requirements nếu đã lock vào tên. Performance budget thì vĩnh viễn valid.

## Liên Kết

- [[Nguyên Tắc Atomic Note]] — mỗi concept 1 note, không gộp (solution-neutral = 1 concept)
- [[Phán đoán không thể uỷ thác cho AI]] — AI hay suggest vendor names, CEO phải chuyển sang performance budget
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — performance budget cho phép so sánh nhiều solutions

## Nguồn Gốc

- VN-AICAM Border Surveillance Phase 2 Conceptual Design (archived) — solution bias detected & corrected
- Pahl-Beitz §5.2: Solution-neutral requirements
- Gặp: 2026-03-19, archived projects ACH analysis
