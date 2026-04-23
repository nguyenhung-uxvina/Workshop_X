---
created: 2026-03-07
updated: 2026-03-07
type: permanent-note
tags: [#type/permanent-note, #pahl, #warning]
links: [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]], [[Musk Sequence — Serial Development Cho Solo Engineer]], [[Phán đoán không thể uỷ thác cho AI]], [[Interface Ownership — Đẩy Function Qua Biên Giới Hệ Thống]], [[Flexibility Là Output, Không Phải Input]]
---

# Design Space Collapse — Khi Chỉ Còn Một Concept

## Ý Tưởng Cốt Lõi

Pahl-Beitz Phase 2 yêu cầu >= 3 concept variants để VDI 2225 evaluation có nghĩa. Nhưng khi physics, geometry, hoặc safety loại bỏ hợp lệ tất cả paths trừ một — design space collapse. Lúc này, ép tạo thêm concept variants là lãng phí; thay vào đó, evaluation rigor phải chuyển xuống sub-system level.

## Giải Thích Chi Tiết

VN-XUONG-UUV có 3 concept paths ban đầu:
- Path 1 (aluminum + crane trên boong): Loại — 8m quá nhỏ cho crane + UUV + crew
- Path 2 (RIB): Loại — inflatable hull không chịu được 550 kg UUV + LARS structural loads
- Path 3 (aluminum stern ramp): Duy nhất khả thi

Design space tiếp tục collapse khi cable drum xác nhận nằm trong UUV — loại thêm 3 design decisions và toàn bộ TMS variants.

**Adaptation:** VDI 2225 vẫn có giá trị — nhưng áp dụng cho từng sub-system decision (PD-1 to PD-7), không phải system-level concept comparison. Electric vs Manual LARS: 0.71 vs 0.62. Ramp angle 15 deg: 0.75 (best). Đây vẫn là evaluation rigor, chỉ ở level khác.

**Warning:** Design space collapse KHÔNG phải lý do để skip evaluation. Nó là signal để shift evaluation xuống đúng level. Gate reviewer phải kiểm tra: "collapse có justified không?" — nếu không, đó là premature convergence.

## Tại Sao Điều Này Quan Trọng?

Solo engineer dễ rơi vào 2 traps:
1. **Ép tạo phantom variants** — 3 concepts trên giấy nhưng chỉ 1 khả thi → VDI 2225 thành theater
2. **Skip evaluation hoàn toàn** — "chỉ có 1 concept, khỏi cần đánh giá" → mất rigor

Con đường giữa: document elimination rationale + shift VDI xuống sub-system. Gate 2 score sẽ thấp hơn (VN-XUONG-UUV: 2.75/4.0) nhưng honest.

## Liên Kết

- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — sensitivity vẫn cần, chỉ ở sub-system level
- [[Musk Sequence — Serial Development Cho Solo Engineer]] — solo engineer thường gặp design space collapse do resource constraints
- [[Phán đoán không thể uỷ thác cho AI]] — quyết định "collapse có hợp lệ không" là Core judgment
- [[Interface Ownership — Đẩy Function Qua Biên Giới Hệ Thống]] — interface decision gây collapse
- [[Flexibility Là Output, Không Phải Input]] — collapse giảm flexibility, nhưng justified collapse = đúng trade-off

## Nguồn Gốc

VN-XUONG-UUV Phase 2 Gate Review (2026-03-07). Gate score 2.75/4.0 — criterion B (Evaluation Rigor) = 2/4 do thiếu system-level VDI. Justified deviation nhưng vẫn bị penalize.
