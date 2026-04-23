---
created: 2026-04-16
updated: 2026-04-16
type: permanent-note
tags: [#type/permanent-note, #product, #warning]
links: [[Analyst Trap — Khi Phân Tích Thay Thế Hành Động]], [[Physical-World Interface]]
---

## Ý Tưởng Cốt Lõi

Chất lượng output của ERPNext Manufacturing hoàn toàn bị quyết định bởi chất lượng master data đầu vào. Dependency chain bắt buộc: Item → Workstation → Operation → Routing → BOM → Work Order. Bỏ qua bất kỳ bước nào = toàn bộ downstream sụp đổ.

## Giải Thích Chi Tiết

Nguyên nhân #1 thất bại ERP ở SME = dirty master data. CEO thường muốn "thấy Work Order chạy" — nhưng 80% effort thực sự nằm ở việc nhập master data đúng. Work Order chỉ là kết quả cuối cùng của dependency chain, không phải điểm bắt đầu.

Giống như trong Pahl-Beitz: requirements list phải đúng trước khi conceptual design có giá trị — master data phải đúng trước khi Work Order có ý nghĩa. Mỗi entity trong master data (Item, Workstation, Operation, Routing) là một "requirement" trong context manufacturing. Bỏ sót hay nhập sai bất kỳ entity nào = toàn bộ workflow downstream sai.

Ví dụ: Item chưa có "Standard Cost" → BOM costing fail. Workstation chưa có productivity rate → Work Order timeline sai. Operation chưa có time estimate → Job Card scheduling sai. Những lỗi nhỏ này cascade downstream, khiến Work Order không thể chạy như kỳ vọng.

## Tại Sao Điều Này Quan Trọng?

1,064 đơn vị đã ship nhưng chưa bao giờ có BOM trong ERP. Phải build master data từ đầu. Phase 1 timeline phải allocate 80% cho master data, 20% cho workflow testing. 

"Demo-driven implementation" (muốn thấy feature chạy trước khi data đúng) là trap kinh điển. CEO muốn thấy Work Order chạy trong tuần 1, nhưng tuần 1 phải dành toàn bộ cho nhập Item master. Nếu bỏ qua phase này, tuần 2-4 sẽ phải spend 10x effort để fix dirty data khi đã có production Work Orders.

Đây là binding constraint cho WX-ERP-001. Nếu master data quality < 90%, toàn bộ project fail.

## Liên Kết

[[Analyst Trap — Khi Phân Tích Thay Thế Hành Động]] — cùng pattern: muốn "chạy feature" (analyze / demo) thay vì "nhập data đúng" (ground truth) = phân tích thay thế hành động. Sự khác biệt giữa "viết report về Work Order" vs "nhập Item master để Work Order chạy được".

[[Physical-World Interface]] — master data phải phản ánh đúng reality nhà xưởng, không phải ước đoán. Ví dụ: Workstation "Lắp Ráp" phải có chính xác 3 bàn làm việc, không phải ước đoán "cỡ 2-3 bàn".

## Nguồn Gốc

ERPNext implementation guides + "5 Core Data Pillars" article, 2026-04-16. NLM notebook: learn-erpnext-mfg.
