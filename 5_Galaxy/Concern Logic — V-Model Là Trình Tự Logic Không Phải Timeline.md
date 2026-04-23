---
created: 2026-04-12
updated: 2026-04-12
type: permanent-note
tags: [#type/permanent-note, #pahl, #sys, #three-laws]
links: [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]], [[Shifting the Burden Archetype]], [[Phán đoán không thể uỷ thác cho AI]]
---

# Concern Logic — V-Model Là Trình Tự Logic Không Phải Timeline

## Ý Tưởng Cốt Lõi
V-Model (VDI 2206:2021) thể hiện trình tự LOGIC của các nhiệm vụ kỹ thuật (concern logic), KHÔNG phải lịch trình thời gian. Đây là sai lầm phổ biến nhất khi đọc V-Model: tưởng nhánh trái = Q1, nhánh phải = Q3. Thực tế, V-Model tương thích cả waterfall lẫn agile — miễn là logic phụ thuộc giữa các bước được giữ nguyên.

## Giải Thích Chi Tiết
- Bản 2004: nhiều người hiểu V-Model như process model tuần tự → chống đối vì "quá cứng nhắc"
- Bản 2021: Graessler & Hentze làm rõ: "The key advantage lies in staying independent from the chosen form of project organization"
- 25 chuyên gia (Jaguar Land Rover, Saab, BMW) tại DESIGN 2018 đồng thuận: concern logic là điểm mạnh cốt lõi
- Checkpoints thay thế milestones cứng — hướng dẫn thay vì cổng chặn

## Tại Sao Điều Này Quan Trọng?
Workshop X chạy HELIX pipeline gần giống waterfall (Phase 1→2→3→4 tuần tự). Hiểu concern logic cho phép:
1. Sprint ngắn trong từng block mà không vi phạm V-Model
2. Lặp lại giữa system design và domain design khi cần (micro-cycle)
3. Không bị khóa cứng vào timeline — phù hợp thực tế solo CEO + contractor

**Law: V-Model ≠ Timeline. V-Model = Dependency Graph.**

## Liên Kết
- [[V-Model Macro-Micro — VDI 2206 Bọc VDI 2221 Cho Hệ Cơ Điện Tử]] — macro-micro là cấu trúc, concern logic là triết lý vận hành
- [[Shifting the Burden Archetype]] — hiểu sai V-Model thành waterfall → shift burden sang "agile transformation" thay vì dùng đúng cách
- [[Phán đoán không thể uỷ thác cho AI]] — quyết định khi nào lặp lại (iterate) vs khi nào tiến lên = CEO judgment, không thể automate

## Nguồn Gốc
- Graessler & Hentze 2020 "The new V-Model of VDI 2206 and its validation" — at-Automatisierungstechnik 68(5): 312-324
- DESIGN 2018 International Validation Workshop, Dubrovnik — 25 industry experts
- Extracted: 2026-04-12 từ /research --deep VDI 2206
