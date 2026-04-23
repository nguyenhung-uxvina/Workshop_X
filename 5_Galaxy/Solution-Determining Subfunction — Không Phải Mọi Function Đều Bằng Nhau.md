---
created: 2026-03-21
updated: 2026-03-21
type: permanent-note
tags: [#type/permanent-note, #pahl, #three-laws]
links: [[Design Space Collapse — Khi Chỉ Còn Một Concept]], [[ACH Boundary Rule — Information vs Physical Forces]], [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]]
---

## Ý Tưởng Cốt Lõi

Trong function structure, KHÔNG phải mọi subfunction đều bằng nhau. Luôn có 1 "solution-determining subfunction" — subfunction mà khi chọn working principle cho nó, toàn bộ design downstream bị cascade. Identify nó TRƯỚC, giải quyết TRƯỚC, decompose DEEP ở đó và SHALLOW ở rest.

## Giải Thích Chi Tiết

Pahl-Beitz 6.3.2 phân biệt 3 loại design: original (decompose deep toàn bộ), adaptive (chỉ decompose phần novel), variant (decompose tối thiểu). Sai lầm phổ biến: áp dụng original-design decomposition cho mọi thứ → wasted precision ở sub-functions đã có working principle sẵn.

Solution-determining SF quyết định:
- Working principle nào khả thi (pneumatic vs hydraulic vs electromagnetic)
- Layout constraints cho mọi SF khác
- Supply chain (vật tư, nhà cung cấp)
- Cost structure (70-80% cost thường nằm ở 1 SF)

Ví dụ VN-12.7MM-SIM: "Generate recoil force impulse" = solution-determining SF. Chọn pneumatic → cascade: compressor size, valve timing, cylinder layout, DfM constraints, O-ring supply. Chọn electromagnetic → hoàn toàn khác: coil design, power supply, cooling.

## Tại Sao Điều Này Quan Trọng?

Khi bắt đầu Phase 2 cho bất kỳ sản phẩm nào, câu hỏi đầu tiên phải là: "Subfunction nào quyết định toàn bộ?" Trả lời được → focus resources. Không trả lời được → risk spreading effort equally = mediocre everywhere.

## Liên Kết

- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — khi solution-determining SF chỉ có 1 viable WP → design space collapse tự nhiên
- [[ACH Boundary Rule — Information vs Physical Forces]] — ACH thường nằm ở SF information, không phải SF physical
- [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] — criteria weight cho solution-determining SF phải cao nhất

## Nguồn Gốc

- Pahl-Beitz Ch6.3.2 "Breaking a Function Down into Subfunctions" — concept "solution-determining subfunction"
- Deep Analysis 10 key files, 2026-03-21, /learning --deep
