---
created: 2026-04-12
source: learning-pipeline
topic: "Axiomatic Design Independence Axiom"
mode: quick
type: learning-output
status: active
tags: [#type/learning-output, #status/active, #pahl]
project: VN-MGM (V5-MOTORIZED validation)
notebook: vdi-2221-research
three_laws:
  - "Diagonal Law — Một DP Một FR"
  - "Sequence Law — Triangular Chấp Nhận Được Nếu Đúng Thứ Tự"
  - "Filter Before Score Law — AD Lọc Trước, VDI 2225 Chấm Sau"
galaxy_candidates: 1
dmir_cycle: N
---

# Learning: Axiomatic Design Independence Axiom

## Source
- NLM notebook: `vdi-2221-research` (25 sources)
- Primary source: "A Comparison of Educational Perspectives on VDI 2221 and Axiomatic Design" — ScienceDirect 2025

## Analysis Summary

### Core Concepts
1. **Design Matrix:** {FR} = [A] × {DP} — maps how DPs affect FRs
2. **Independence Axiom:** Maintain FR independence. Each DP should affect exactly 1 FR.
3. **Information Axiom:** Among uncoupled designs, choose simplest (max probability of success)
4. **Zigzagging:** FR→DP→sub-FR→sub-DP hierarchical decomposition
5. **3 Matrix Types:** Uncoupled (diagonal, ideal) → Decoupled (triangular, OK with sequence) → Coupled (full, fail)

### WX-Specific Application
- AD originated in aerospace/military — directly applicable to defense products
- Excel-based FR×DP matrix = 30 minutes per concept
- Supplements VDI 2225 by detecting coupling that scoring misses
- Validated by VN-MGM-V5 Session 56: Concept C ball screw = coupled design detected post-hoc

## Ba Quy Luật

### Quy Luật 1: Diagonal Law — Một DP Một FR
Thiết kế tốt = ma trận chéo: mỗi DP chỉ ảnh hưởng đúng 1 FR. Coupled design = vòng lặp sửa-hỏng vô tận.
- Phản trực giác: Ít part ≠ uncoupled. 1 ốc vừa chịu lực vừa seal = coupled dù chỉ 1 part.

### Quy Luật 2: Sequence Law — Triangular Chấp Nhận Được Nếu Đúng Thứ Tự
Decoupled OK nếu tuning đúng thứ tự DP₁ → DP₂. Sai thứ tự = coupled. Prototype "chạy tay OK, sản xuất hỏng" = engineer tuning đúng bằng trực giác nhưng không document.
- Phản trực giác: Design review không phát hiện sai thứ tự — chỉ manufacturing phát hiện.

### Quy Luật 3: Filter Before Score Law — AD Lọc Trước, VDI 2225 Chấm Sau
AD matrix PHẢI chạy trước VDI 2225. AD lọc coupled designs, VDI 2225 chấm uncoupled/decoupled. Concept đắt hơn trên giấy có thể rẻ hơn tổng thể nếu uncoupled.
- Phản trực giác: "Balanced 75% > Unbalanced 85%" = Independence Axiom nói bằng ngôn ngữ VDI 2225.

## Galaxy Note Created
- #129: [[Filter Before Score — AD Lọc Coupling Trước Khi VDI 2225 Chấm Điểm]]

## Pipeline Change Implemented
- Step C1.5 added to `/helix-p2-develop`: AD Coupling Check between Pugh and Firming Up
- 30 min Excel matrix, COD: Offload (AI drafts, CEO validates)
- Orchestrator `/helix-concept-generate` updated to mention C1.5

---

*Learning Pipeline --mode quick | NLM notebook: vdi-2221-research | 2026-04-12*
