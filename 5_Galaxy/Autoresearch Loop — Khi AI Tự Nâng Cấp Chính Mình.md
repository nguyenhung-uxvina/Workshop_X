---
created: 2026-03-16
updated: 2026-03-16
type: permanent-note
tags: [#type/permanent-note, #topic/ai-tools, #acq, #meta]
links: [[HOK Law — Tay Não Ký Ức Của Agent]], [[Muscle Memory Law — Skill Compounds, Tool Accumulates]], [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]]
---

# Autoresearch Loop — Khi AI Tự Nâng Cấp Chính Mình

## Ý Tưởng Cốt Lõi

Autoresearch = AI tự lặp vòng: thay đổi → test → keep/revert → repeat. Skill không cần con người sửa — chỉ cần con người **thiết kế eval criteria** rồi AI tự iterate overnight.

## Giải Thích Chi Tiết

Karpathy demo: AI tự sửa `train.py`, chạy benchmark, nếu score tăng → git commit, nếu giảm → git reset. Hàng trăm iterations qua đêm, sáng dậy model đã tốt hơn.

Apply cho Claude Code skills: thay vì CEO mở `skill.md` → sửa → test → sửa lại (manual, tuần/tháng), setup: `skill.md` + `evals.json` + `/loop 30m` = skill tự improve mỗi 30 phút. CEO chỉ review kết quả sáng hôm sau.

**Pattern:** Shift CEO role từ "improve skills" sang "design eval criteria for skills". Đây chính xác là COD: C = design criteria (Core), O = iterate on criteria (Offload), D = manual skill editing (Default — eliminate).

**Compound effect:** 37 skills × self-improving = skill stack compounds mà không cần CEO bandwidth. I₁ (AI delegation) chuyển từ "tools CEO maintains" sang "tools that maintain themselves."

## Tại Sao Điều Này Quan Trọng?

B1b Infrastructure Trap nói: 37 skills = overhead vì CEO phải maintain. Autoresearch loop GIẢI B1b: skills tự maintain qua evals + `/loop`. CEO bandwidth freed = dành cho I₂, Ế, P.

## Liên Kết

- [[HOK Law — Tay Não Ký Ức Của Agent]] — autoresearch biến skill từ static memory thành adaptive memory
- [[Muscle Memory Law — Skill Compounds, Tool Accumulates]] — autoresearch biến tool accumulation thành skill compounding
- [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]] — eval criteria quality (judgment) phải tăng nhanh hơn AI iteration speed (delegation)

## Nguồn Gốc

- NLM: "Claude Code và Karpathy Autoresearch" — Karpathy autoresearch pattern, Build Self-Improving Claude Code Skills
- Ngày gặp: 2026-03-16
