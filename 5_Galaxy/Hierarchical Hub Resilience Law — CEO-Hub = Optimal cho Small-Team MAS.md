---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #acq, #ceo, #three-laws]
links: [[Phán đoán không thể uỷ thác cho AI]], [[HOK Law — Tay Não Ký Ức Của Agent]], [[Cascading Hallucination Trap — LLM Errors Amplify Through Agent Chains]]
---

## Y Tuong Cot Loi

Trong multi-agent system nho (3 domain specialists + 1 CEO), kien truc Hierarchical Hub (CEO o trung tam, specialists la nodes) la topology CHONG LOI TOT NHAT — chi mat 5.5% performance khi 1 agent sai, so voi 23.7% trong linear pipeline. Day KHONG phai la compromise — day la kien truc toi uu theo ly thuyet.

## Giai Thich Chi Tiet

Nghien cuu LLM-based MAS (2024-2025) chung minh 3 topology chinh:
- **Hierarchical (Star):** CEO = Judge/Evaluator, review tat ca output tu specialists. Resilience: 5.5% drop.
- **Linear (Pipeline):** A → B → C. Error cascade khong phuc hoi. Resilience: 23.7% drop.
- **Flat (Decentralized):** A ↔ B ↔ C. Decision paralysis, khong ai quyet dinh cuoi cung.

WX hien tai dung one-block-per-turn voi CEO checkpoint — chinh xac la Hierarchical Hub. Upgrade = them multi-perspective TRONG moi block, KHONG phai thay doi architecture.

Dieu kien de Hierarchical Hub hoat dong:
1. CEO phai la integration authority that su (khong delegate)
2. Specialists phai co role-based SOPs cu the (khong generic)
3. Feedback loops phai bounded (khong vo han)
4. Shared ontology (cung ngon ngu, cung data bus)

## Tai Sao Dieu Nay Quan Trong?

- Xac nhan pipeline HELIX hien tai la DUNG — khong can thay doi co ban
- Tranh temptation "decentralize" — flat topology = decision paralysis
- Tranh temptation "automate CEO out" — CEO hub la diem manh, khong phai bottleneck
- WX 26 nguoi voi CEO + 3 specialists = EXACTLY the optimal MAS topology

## Lien Ket

- [[Phán đoán không thể uỷ thác cho AI]] — CEO hub = non-delegable judgment
- [[HOK Law — Tay Não Ký Ức Của Agent]] — Hands (tools) + Orchestrator (CEO) + Knowledge (domain SOPs)
- [[Cascading Hallucination Trap — LLM Errors Amplify Through Agent Chains]] — Hub catches cascading errors

## Nguon Goc

Research: Multi-Agent Collaborative Conceptual Design, 2026-04-22. Sources: MAS Collaboration Survey (arxiv 2501.06322), On Resilience of LLM-Based MAS with Faulty Agents (arxiv 2408.00989). NLM notebook: multi-agent-design.
