---
created: 2026-03-21
updated: 2026-03-21
type: permanent-note
tags: [#type/permanent-note, #pahl, #meta]
links: [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]], [[Musk Sequence — Serial Development Cho Solo Engineer]], [[Design Space Collapse — Khi Chỉ Còn Một Concept]]
---

## Ý Tưởng Cốt Lõi

Pahl-Beitz và Ulrich-Eppinger đều dùng function decomposition, nhưng với MỤC ĐÍCH KHÁC NHAU. P&B decompose để VARIATION — mở rộng solution space, tìm nhiều working principles nhất có thể. U-E decompose để SIMPLIFICATION — chia task thành phần nhỏ dễ quản lý. Cùng công cụ, khác triết lý → khác kết quả.

## Giải Thích Chi Tiết

**Pahl-Beitz (Central European school):** Problem-oriented. Decompose function → cho MỖI subfunction tìm NHIỀU working principles → morphological matrix → combinatorial explosion = feature, not bug. Mục tiêu: explore WIDEST solution space.

**Ulrich-Eppinger (US/UK school):** Product-oriented. Decompose function → chia task cho teams → mỗi team solve independently → integrate. Mục tiêu: make complex problem MANAGEABLE.

**Hệ quả thực tế:**
- P&B: 6 subfunctions × 4 WP mỗi = 4,096 concept variants → cần screening/evaluation → VDI 2225
- U-E: 6 subfunctions → 6 team tasks → mỗi team 1 best solution → 1 integrated concept → Pugh matrix
- P&B tốt hơn cho ORIGINAL design (cần innovation). U-E tốt hơn cho ADAPTIVE design (cần efficiency).

**Workshop X implication:** Đang dùng P&B cho defense products (original design nặng) → đúng triết lý. Nhưng khi adapt sản phẩm có sẵn (VD: convert commercial drone → military) → nên switch sang U-E mindset: simplify, don't vary.

## Tại Sao Điều Này Quan Trọng?

Biết khi nào vary (P&B) vs khi nào simplify (U-E) = meta-skill. Dùng P&B cho adaptive design = over-engineer. Dùng U-E cho original design = under-explore.

## Liên Kết

- [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]] — vary ở SF quyết định, simplify ở rest
- [[Musk Sequence — Serial Development Cho Solo Engineer]] — solo engineer cần simplify (U-E), team cần vary (P&B)
- [[Design Space Collapse — Khi Chỉ Còn Một Concept]] — vary = prevent premature collapse

## Nguồn Gốc

- Cambridge Design Science: P&B as predictive model (peer-reviewed)
- Design Society: Review of systematic design process models
- Comparison of Design Methodologies (Amit Inamdar)
- Encountered: 2026-03-21, /research --deep P&B
