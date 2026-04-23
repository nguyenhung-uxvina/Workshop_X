---
created: 2026-03-07
updated: 2026-03-07
type: permanent-note
tags: [#type/permanent-note, #pahl, #sys, #product]
links: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[Shifting the Burden Archetype]], [[Musk Sequence — Serial Development Cho Solo Engineer]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]], [[Phán đoán không thể uỷ thác cho AI]]
---

# Interface Ownership — Đẩy Function Qua Biên Giới Hệ Thống

## Ý Tưởng Cốt Lõi

Trước khi thiết kế chi tiết một function, hỏi: "Function này THUỘC VỀ ai?" Đẩy function sang phía bên kia interface boundary có thể collapse complexity dramatic hơn bất kỳ optimization nào bên trong boundary.

## Giải Thích Chi Tiết

VN-XUONG-UUV ban đầu thiết kế với cable drum trên xuồng (vessel-side). Điều này sinh ra:
- 9 sub-functions (F5.1-F5.9): store, pay-out, reel-in, route, monitor tension, monitor length, brake, prevent fouling
- 3 design decisions (PD-4, PD-5, PD-6): drum location, cable routing vs LARS, TMS-LARS sync
- Highest-coupling trong system: tether-LARS synchronization

Khi xác nhận cable drum nằm TRONG UUV (customer furnished), kết quả:
- 8/9 sub-functions bị loại (chỉ còn F5.5 cable routing on deck)
- 3 design decisions bị eliminate hoàn toàn
- Highest coupling biến mất
- Active sub-functions: 43 → 35 (-19%)

**Một interface decision thay đổi toàn bộ design space.**

Đây không phải optimization — đây là reframing. Câu hỏi chuyển từ "làm sao thiết kế drum tốt nhất" sang "drum có thuộc về mình không?"

## Tại Sao Điều Này Quan Trọng?

Trong systems engineering, interface boundary là leverage point mạnh nhất trong conceptual design:
- Nó thay đổi SCOPE (ít function hơn = ít complexity)
- Nó thay đổi COUPLING (ít tương tác giữa subsystems)
- Nó thay đổi RISK (function bên kia boundary = responsibility bên kia)

**Warning:** Đẩy function ra ngoài boundary KHÔNG xóa complexity — nó chuyển complexity sang phía khác. Cần ICD (Interface Control Document) để đảm bảo phía kia thực sự handle được. VN-XUONG-UUV vẫn cần ICD từ UUV OEM — nếu OEM không confirm drum specs, risk quay lại.

## Pattern Nhận Dạng

Khi thấy:
- Sub-system có nhiều coupling với phần còn lại
- Function phụ thuộc vào data/specs chưa có từ external party
- "Chúng ta phải thiết kế cái này vì..." nhưng lý do là assumption

→ Hỏi: "Ai sở hữu function này? Có thể đẩy qua boundary không?"

## Liên Kết

- [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]] — interface boundary phải được verify bằng ICD, không phải assumption
- [[Shifting the Burden Archetype]] — đẩy function ra ngoài có thể là shifting the burden nếu không có ICD commitment
- [[Musk Sequence — Serial Development Cho Solo Engineer]] — solo engineer benefit lớn nhất từ scope reduction qua interface
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — interface decision gây design space collapse
- [[Phán đoán không thể uỷ thác cho AI]] — quyết định "ai sở hữu function" là Core judgment, không offload được

## Nguồn Gốc

VN-XUONG-UUV Phase 2 (2026-03-07). Cable drum inside UUV [L2 — user confirmed] → F5 collapsed from 9→1, design space simplified dramatically. Gate 2: function coverage 35/35 = complete.
