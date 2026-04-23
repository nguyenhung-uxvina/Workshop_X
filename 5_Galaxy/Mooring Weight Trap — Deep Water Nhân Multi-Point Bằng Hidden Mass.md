---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #warning]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]], [[Shifting the Burden Archetype]], [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]]
---

# Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass

## Ý Tưởng Cốt Lõi

Khi thiết kế neo cho platform nhỏ ở vùng nước sâu (≥ 50m), multi-point mooring tưởng an toàn hơn nhưng tạo ra bẫy trọng lượng: mỗi leg cần scope 3-5:1, nhân với 2-3 legs, tổng chain weight có thể chiếm 40-90% trọng lượng cho phép của platform. Chain weight là hidden constraint — không xuất hiện trong requirements list nhưng giết concept.

## Giải Thích Chi Tiết

Với depth 50m, scope 5:1 = 250m chain/leg. Chain Ø16mm Grade 3 nặng 5.6 kg/m.

| Config | Chain weight | % of 5,000 kg platform |
|--------|-------------|------------------------|
| Single-point | 1,400 kg | 28% |
| 2-point, scope 3:1 | 1,680 kg | 34% |
| **3-point, scope 5:1** | **4,200 kg** | **84%** |

3-point × full scope = không khả thi. Giải pháp: hybrid chain+nylon (giảm 70% weight) hoặc tách mooring khỏi platform (tàu kéo mang riêng).

Bài học tổng quát: trong thiết kế offshore, **thành phần "infrastructure" (neo, cáp, chain) thường nặng hơn "payload" (platform)**. Đây là đặc trưng của deep water mà shallow water design không gặp.

## Tại Sao Điều Này Quan Trọng?

VN-AST-MSL-001 "THANH TRI" suýt rơi vào bẫy này: Requirements list ghi multi-point mooring + depth ≥ 50m + dry weight ≤ 5,000 kg — ba yêu cầu riêng lẻ đều hợp lý, nhưng kết hợp lại tạo thành contradiction ẩn. Nếu không tính chain weight sớm (Phase 1-2), concept sẽ collapse ở Phase 3 khi BOM vượt weight budget.

Quy tắc: **Luôn tính infrastructure weight trước khi chốt concept** — đặc biệt cho sản phẩm offshore/underwater.

## Liên Kết

- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — cùng cluster H, foam giúp buoyancy nhưng không giải quyết chain weight — cần tách riêng mooring system
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — hidden constraint (chain weight) loại bỏ concept tưởng khả thi, thu hẹp design space đột ngột
- [[Shifting the Burden Archetype]] — multi-point mooring "shift burden" từ watch circle problem sang weight problem — giải quyết 1 vấn đề, tạo ra vấn đề khác
- [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] — cluster H↔G: hidden constraint (chain weight) giống hidden failure mode — cả hai đều invisible trong requirements list nhưng giết thiết kế ở giai đoạn muộn

## Nguồn Gốc

VN-AST-MSL-001 "THANH TRI" — Phase 1→2 transition, tính toán tải kéo và neo, 2026-03-08.
Phát hiện khi resolve R-D04 (mooring design load = 125 kN) và sizing multi-point chain tại 50m depth.
