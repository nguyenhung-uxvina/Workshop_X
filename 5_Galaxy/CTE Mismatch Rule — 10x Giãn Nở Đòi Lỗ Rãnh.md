---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #pahl, #product, #warning]
links: [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]], [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]], [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]], [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]]
---

# CTE Mismatch Rule — 10x Giãn Nở Đòi Lỗ Rãnh

## Ý Tưởng Cốt Lõi
Khi ghép hai vật liệu có hệ số giãn nở nhiệt (CTE) chênh 6-12 lần — như HDPE (120-200 µm/m·°C) với SS316 (16 µm/m·°C) — mối ghép bu-lông sẽ tự nới lỏng theo chu kỳ nhiệt. Với khoảng cách bu-lông 200mm và biên độ nhiệt 30°C, HDPE giãn thêm 0.5-1.1mm so với thép. Giải pháp bắt buộc: lỗ rãnh (slotted holes) + vòng đệm Belleville.

## Giải Thích Chi Tiết
- **Cơ chế hỏng:** HDPE giãn → bu-lông mất lực siết → khe hở → nước biển xâm nhập → ESC tại vùng ứng suất → hỏng mối ghép
- **Quy tắc thiết kế:** 1 bu-lông cố định (fixed) + còn lại lỗ rãnh (slotted) cho phép trượt tương đối
- **Belleville washers:** duy trì lực siết qua biên độ giãn nở, bù cho creep HDPE
- **EPDM isolators:** lớp đệm giữa thép và HDPE giảm truyền nhiệt trực tiếp
- Mối ghép thép-nhôm (CTE 2:1) ít nguy hiểm hơn nhiều — 10:1 mới là vùng nguy hiểm

## Tại Sao Điều Này Quan Trọng?
AST-MSL-001 dùng ống thép SS316 xuyên thân HDPE (DR-8 trong F4 spec). Nếu không có Belleville + slotted holes, mối ghép sẽ tự nới lỏng sau vài tháng ngoài biển — chu kỳ ngày/đêm 10-15°C × 365 ngày = hàng trăm chu kỳ nhiệt/năm. Đây là failure mode ẩn mà chỉ phát hiện khi đã mất bia trên biển.

## Liên Kết
- [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]] — CTE nới lỏng → khe hở → nước → ESC
- [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]] — Belleville giữ nén liên tục
- [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]] — tấm đệm phân bổ lực trên HDPE mềm
- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — cross-cluster: failure mode ẩn giống false negative

## Nguồn Gốc
ALLVAR Alloys (CTE mismatch bolted joints) + Becht Engineering (differential thermal expansion flanges) + PPI TN-38 (PE bolted joints). Phát hiện qua HELM coverage gap research, Session 37, 2026-03-08.
