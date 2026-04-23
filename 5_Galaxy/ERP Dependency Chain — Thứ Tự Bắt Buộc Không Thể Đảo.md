---
created: 2026-04-16
updated: 2026-04-16
type: permanent-note
tags: [#type/permanent-note, #sys, #product]
links: [[Shifting the Burden Archetype]], [[V-Model Macro-Micro]]
---

## Ý Tưởng Cốt Lõi

ERPNext Manufacturing có dependency chain tuyến tính bắt buộc: Item → Workstation → Operation → Routing → BOM → Production Plan → Work Order → Job Card → Stock Entry. Không thể đảo thứ tự, không thể skip bước, không thể parallel.

## Giải Thích Chi Tiết

Dependency chain giống V-model trong systems engineering:
- **Top-down (Design):** Item → Workstation → Operation → Routing → BOM
- **Bottom-up (Execution):** Work Order → Job Card → Stock Entry

Mỗi entity downstream phụ thuộc vào entity upstream:
- Work Order cần BOM (không BOM = không biết cần làm gì)
- BOM cần Routing (không Routing = không biết thứ tự công đoạn)
- Routing cần Operation + Workstation (không Operation = không biết tác vụ, không Workstation = không biết nơi làm)
- Operation cần Item (không Item = không biết sản phẩm cuối là gì)

"Tạo Work Order trước rồi fix BOM sau" = impossible trong ERPNext. System không cho phép. Nếu buộc tạo (bằng cách hack database), toàn bộ downstream logic sụp đổ.

Hiểu dependency chain = hiểu đúng thứ tự implementation. Thứ tự sai dẫn đến:
- Nhập Work Order nhưng không có BOM → JC schedule sai → production delay
- Nhập Operation nhưng Workstation chưa setup → Job Card assign fail
- Nhập BOM nhưng Item chưa có Standard Cost → costing calculation error

## Tại Sao Điều Này Quan Trọng?

WX-ERP-001 Phase 1 phải follow đúng thứ tự này. Skip dependency = shift burden sang downstream (fix data khi đã có Work Order = đau hơn fix data trước).

CEO thường muốn "chạy quy trình production" ngay (Week 1), nhưng đó là sai thứ tự. Thứ tự đúng là:
1. **Week 1-2:** Item master (1,064 products × review, validate against physical products)
2. **Week 2-3:** Workstation (3 production lines, workstations per line)
3. **Week 3-4:** Operation + Routing (công đoạn + thứ tự công đoạn)
4. **Week 4-5:** BOM (raw materials + quantities per product)
5. **Week 5-6:** Production Plan + Work Order (scheduling)
6. **Week 6+:** Execution (Job Card, Stock Entry)

Nếu bỏ qua sequence này, sẽ phải rework từ Week 5-6 với cost 3-5x lớn hơn.

## Liên Kết

[[Shifting the Burden Archetype]] — skip dependency (symptom-driven: "muốn thấy Work Order chạy") = shift burden sang downstream (phải fix data khi execution đã bắt đầu, khi cost of change cao hơn). Root cause (sequence planning) không fix → dẫn đến rework loop.

[[V-Model Macro-Micro]] — dependency chain ERP giống V-model: thiết kế master data (macro, top-down: Item → Operation → BOM) trước, thực thi workflow (micro, bottom-up: WO → JC → SE) sau. Không thể bottom-up trước rồi top-down sau.

## Nguồn Gốc

ERPNext official docs + "5 Core Data Pillars" article, 2026-04-16. NLM notebook: learn-erpnext-mfg.
