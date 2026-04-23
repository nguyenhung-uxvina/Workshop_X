---
created: 2026-03-08
updated: 2026-03-08
type: permanent-note
tags: [#type/permanent-note, #product, #pahl, #defense]
links: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]], [[Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass]]
---

# Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén

## Ý Tưởng Cốt Lõi

Khi cần gắn neo cố định vào thân HDPE, giải pháp tối ưu là dùng ống thép xuyên thân (through-hull chain pipe) với tấm đệm thép ở cả hai mặt. Cấu trúc này đặt HDPE hoàn toàn trong trạng thái nén — loại bỏ hoàn toàn nguy cơ ESC — thay vì các phương án truyền thống (padeye hàn, cleat bắt bulông) đặt HDPE chịu kéo.

## Giải Thích Chi Tiết

**5 phương án so sánh (từ NLM synthesis 18 nguồn):**

| Phương án | HDPE chịu | ESC Risk | Kết luận |
|-----------|----------|----------|----------|
| (e) Ống xuyên thân + tấm đệm thép | **Nén** | Rất thấp | **✓ Chọn** |
| (b) Khung fairlead ngoài + through-bolt | Nén (chủ yếu) | Thấp-TB | ✓ Backup |
| (c) Transition fitting PE-thép | Hỗn hợp | Thấp | Phức tạp fab |
| (a) Tấm thép nhúng trong hull | Kéo cục bộ | TB-Cao | ✗ Stiffness mismatch |
| (d) Padeye HDPE hàn extrusion | **Kéo** liên tục | **Cao** | **✗ ESC chắc chắn** |

**Cấu trúc thiết kế option (e):**
- Ống thép SS316 xuyên từ mặt trên đến đáy hull
- Flange hàn ở hai đầu ống
- Tấm đệm SS316/G10 ≥10× bolt dia ở cả hai mặt hull
- Ống nén HDPE hàn qua foam core tại mỗi vị trí bulông (compression tube)
- Pad chống mài mòn UHMWPE hoặc nylon tại điểm tiếp xúc dây/xích

**Tại sao option (e) thắng tuyệt đối:**
1. Xích neo đi qua ống thép → lực kéo truyền hoàn toàn qua thép
2. HDPE chỉ chịu nén cục bộ từ flange + backing plate
3. ESC = 0 (ESC chỉ xảy ra khi kéo)
4. Creep vẫn xảy ra nhưng ở mức nén → không gây nứt, chỉ cần siết lại bulông định kỳ

**3 gap còn lại chưa giải quyết:**
1. Protocol cụ thể cho compression tube qua foam-core → cần hỏi Tideman Marine
2. Chống mài mòn HDPE tại điểm tiếp xúc xích → cần UHMWPE wear pad
3. CTE mismatch thép-HDPE dưới nhiệt đới → cần FEA hoặc test

## Tại Sao Điều Này Quan Trọng?

Đây là **design decision đã chốt** cho VN-AST-MSL-001 towed sea target. Khi design space collapse từ 5 options xuống 1 option duy nhất dựa trên vật lý cơ bản (ESC tension rule), ta có confidence cao mà không cần VDI 2225 evaluation phức tạp. Nguyên tắc này áp dụng cho mọi sản phẩm HDPE tương lai của Workshop X cần neo/buộc cố định.

## Liên Kết
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]] — hull material quyết định phương án neo
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — 5 options → 1 dựa trên first principles (ESC rule)
- [[Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass]] — hệ thống neo tổng thể; through-hull là interface giữa hull và mooring system
- [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]] — nguyên tắc nền tảng dẫn đến design decision này
- [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]] — sizing rule cho tấm đệm trong cấu trúc through-hull

## Nguồn Gốc
- NLM cross-source synthesis 18 sources, notebook `hdpe-mooring`, 2026-03-08
- IRClass: "Guidelines on Hull Structure of Thermoplastic Vessels" Rev.1 (2024) ★★★
- PPI Handbook Ch.10: Marine Installations ★★★
- Project: VN-AST-MSL-001, Phase 4 Detail Design, mooring interface decision
