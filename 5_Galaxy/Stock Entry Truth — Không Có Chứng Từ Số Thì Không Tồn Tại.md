---
created: 2026-04-16
updated: 2026-04-16
type: permanent-note
tags: [#type/permanent-note, #product, #three-laws]
links: [[Physical-World Interface]], [[Shifting the Burden Archetype]]
---

## Ý Tưởng Cốt Lõi

Trong ERPNext Manufacturing, mọi chuyển động vật lý trong nhà máy PHẢI có Stock Entry tương ứng. Nếu không có Stock Entry, hệ thống coi như vật liệu chưa di chuyển — bất kể thực tế. Đây là nguyên tắc perpetual inventory: digital record = physical truth.

## Giải Thích Chi Tiết

Material Transfer (Raw → WIP), Manufacture (WIP → FG), Scrap (WIP → Scrap WH) — tất cả đều là Stock Entry. Mỗi Stock Entry tạo Ledger Entry → Accounting Entry. Bỏ qua = stock accuracy sụp đổ, costing sai, báo cáo vô nghĩa.

Nguyên tắc cơ bản: công nhân lấy vật liệu từ kho nhưng quên ghi Stock Entry → system báo cáo còn vật liệu, thực tế kho không có. Khi cấp lại vật liệu, system báo "vượt dòng" → công nhân hoặc supervisor phải manual count, tìm lỗi.

Nếu 16 công nhân của WX cứ skip Stock Entry, supervisor sẽ phải bù bằng monthly manual count. Mỗi manual count = "có sai thì sai sau" mindset. Dần dần, system trust giảm, mọi người dựa vào physical counting hơn là system, khiến ERP trở thành digital paperweight.

## Tại Sao Điều Này Quan Trọng?

Stock accuracy hiện tại ~60% (ước đoán). Target >95%. Gap 35 percentage points. Đây không phải vấn đề công nghệ — đây là vấn đề kỷ luật vận hành cho 16 công nhân + 4 quản đốc.

Nếu Stock Entry discipline không được enforce từ đầu, WX sẽ mất $100K-300K/year từ inventory shrinkage (theft, waste, miscount). Worst case: không biết cost of goods sold (COGS) chính xác → pricing sai → margin erosion.

Đây là "canary in the coal mine" cho ERP adoption. Nếu đơn giản như Stock Entry mà không được follow, ERP initiative sẽ fail. Nếu Stock Entry discipline tight, toàn bộ ERP workflow sẽ work.

## Liên Kết

[[Physical-World Interface]] — gap giữa physical movement và digital record = root cause stock inaccuracy. ERP thành công khi digital twin khớp physical reality. Stock Entry là cơ chế để maintain khớp này.

[[Shifting the Burden Archetype]] — skip Stock Entry → manual count bù → trust giảm → skip nhiều hơn → manual count nhiều hơn. Classic reinforcing loop dẫn đến ERP failure. Symptom (sai stock) được giải quyết bằng bổ sung (manual count), nhưng root cause (discipline) không fix → vòng lặp self-reinforcing.

## Nguồn Gốc

ERPNext Manufacturing docs + SME implementation failure analysis, 2026-04-16. NLM notebook: learn-erpnext-mfg.
