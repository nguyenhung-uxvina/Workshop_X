---
created: 2026-04-16
updated: 2026-04-16
type: permanent-note
tags: [#type/permanent-note, #product, #pahl]
links: [[Physical-World Interface]], [[Phán đoán không thể uỷ thác cho AI]]
---

## Ý Tưởng Cốt Lõi

Trong ERPNext, BOM (Bill of Materials) trở thành bất biến sau khi Submit — mọi thay đổi phải qua Cancel → Duplicate → Edit → Re-Submit. Đây không phải hạn chế mà là thiết kế có chủ đích: BOM giống Git commit, không phải file save.

## Giải Thích Chi Tiết

BOM là "recipe" trung tâm kết nối Work Order, Job Card, Stock Entry, Costing. Nếu BOM edit tự do, lịch sử sản xuất mất nhất quán. ERPNext enforce version control bằng cách lock sau submit. Mỗi BOM version là một snapshot chính xác tại thời điểm đó — raw materials, quantities, operations, scrap %. Khi product evolve (thay đổi vật liệu, tối ưu quy trình), mỗi version BOM được lưu lại, tạo traceability hoàn chỉnh.

Paradigm này giống Pahl-Beitz phase gate: khi qua gate, requirements lock lại để tránh scope creep. BOM submit tương tự: khi sản xuất bắt đầu, recipe phải immutable để traceability không bị phá vỡ.

## Tại Sao Điều Này Quan Trọng?

8 product lines × nhiều variants = hàng chục BOM. Sai BOM = sai purchasing + sai costing + production halt. BOM review là Core judgment (CEO/PGĐ), không delegate cho AI hay NV. Cần chuẩn hóa kỹ trước submit — "design BOM" giống "design product".

Trong context WX: 1,064 đơn vị đã ship nhưng chưa bao giờ có BOM trong ERP. Phase 1 ERP implementation phải build từ 1,064 historical units backward, reverse-engineer BOM từ as-built drawing. Nếu không chuẩn, toàn bộ costing + inventory traceability từ đầu sẽ sai.

## Liên Kết

[[Physical-World Interface]] — BOM là cầu nối giữa digital recipe và physical production. Nếu BOM không khớp reality, mọi downstream (WO, JC, SE) đều sai.

[[Phán đoán không thể uỷ thác cho AI]] — BOM review = phán đoán kỹ thuật cần kinh nghiệm sản xuất thực tế. AI có thể format BOM, không thể validate nó có đúng không.

## Nguồn Gốc

ERPNext official docs + 12 sources via /learning pipeline, 2026-04-16. NLM notebook: learn-erpnext-mfg.
