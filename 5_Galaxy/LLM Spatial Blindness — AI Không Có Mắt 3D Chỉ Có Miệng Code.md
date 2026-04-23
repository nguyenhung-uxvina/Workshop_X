---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #product, #warning, #pahl]
links: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[ACH Boundary Rule — Information vs Physical Forces]], [[Phán đoán không thể uỷ thác cho AI]]
---

# LLM Spatial Blindness — AI Không Có Mắt 3D, Chỉ Có Miệng Code

## Ý Tưởng Cốt Lõi

Large Language Models **không có khả năng nhận thức không gian 3 chiều**. Chúng có thể sinh code tạo hình học, nhưng không thể "nhìn thấy" hoặc "hiểu" hình dạng, khoảng cách, hay quan hệ không gian. Đây là giới hạn cơ bản (fundamental), không phải lỗi có thể sửa bằng prompt engineering.

## Giải Thích Chi Tiết

Ba nguồn cross-validate (Tier S + A + B):

1. **arxiv Mechatronics MAS (2025):** Framework multi-agent thiết kế tàu tự hành thành công ở mức logic (chọn motor, thiết kế PCB, viết firmware) nhưng cần human-in-loop cho spatial constraints — agent không thể tự xác định vị trí component trong không gian.

2. **Cambridge Text-to-CAD (Design Society):** Khi test LLM sinh CAD từ text, agent thất bại **100%** khi cần chính xác góc vuông. "Descriptive spatial terms" (trái, phải, trên, dưới, vuông góc) bị interpret sai một cách có hệ thống.

3. **Promwad Industry Survey 2026:** Kỹ sư phần cứng năm 2026 coi LLM là "junior collaborator" — tốt cho scaffolding testbench, viết boilerplate, tóm tắt datasheet — nhưng CỐ Ý giữ LLM ra khỏi high-level architectural và spatial decisions.

Cơ chế: LLM xử lý ngôn ngữ (sequence of tokens). Hình học 3D là PARALLEL spatial relationships, không serialize thành text mà không mất thông tin. Đây là giới hạn kiến trúc, không phải thiếu training data.

## Tại Sao Điều Này Quan Trọng?

Quyết định kiến trúc cho MỌI HELIX block liên quan layout/embodiment:

1. **helix-p3-layout (Phase 3 Embodiment):** CEO tạo preliminary layout = CORE, non-delegable. AI KHÔNG THỂ thay thế judgment không gian của CEO/kỹ sư cơ khí. Note này xác nhận rule hiện tại.

2. **helix-p2-search (Phase 2):** AI sinh working principles (text) = OK. AI bố trí WPs trong morphological matrix (2D logic) = OK. AI tạo 3D concept layout = KHÔNG.

3. **ACH Boundary Rule refinement:** AI compensates hardware ĐÚNG cho thông tin (sensor processing, data fusion, decision support). AI KHÔNG compensates cho không gian (layout, arrangement, packaging, thermal path).

4. **VN-CUAV-SIM design:** AI có thể suggest sensor suite, generate code, evaluate specs. Nhưng vị trí đặt sensor trên USV, cable routing, thermal management = human spatial judgment.

**Design rule:** Bất kỳ HELIX output nào chứa spatial arrangement → PHẢI có human validation gate. AI text output mô tả "place sensor A above actuator B" = KHÔNG đáng tin — phải verify trên layout CAD.

## Liên Kết

- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — spatial arrangement = physical reality mà AI không access trực tiếp
- [[ACH Boundary Rule — Information vs Physical Forces]] — boundary chính xác hơn: AI xử lý THÔNG TIN, không xử lý KHÔNG GIAN
- [[Phán đoán không thể uỷ thác cho AI]] — spatial judgment = subset của engineering judgment mà AI fundamental không có

## Nguồn Gốc

- arxiv 2504.14681 "Multi-Agent Autonomous Mechatronics Design Framework" (Tier S)
- Cambridge "From Text to Design: LLM Agents for CAD Generation" (Tier A) — 100% geometry failure
- Promwad "LLM-Aided Hardware Design in 2026" (Tier B) — industry reality check
- Research update "Multi-Agent Collaborative Design," 2026-04-22
