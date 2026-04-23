---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #pahl, #acq, #three-laws]
links: [[Solution-Determining SF Law]], [[VDI 2221 Evolution]], [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]]
---

## Y Tuong Cot Loi

Set-Based Concurrent Engineering (SBCE) — giu nhieu phuong an song song truoc khi thu hep — anh xa truc tiep sang multi-agent design: moi domain agent duy tri 1 SET working principles, roi merge tai giao diem. SBCE tim duoc 15-25% nhieu giai phap kha thi hon so voi point-based (sequential).

## Giai Thich Chi Tiet

Traditional design (point-based): chon 1 concept som → optimize → phat hien conflict muon → rework lon.
SBCE: giu 3-5 sets song song → thu hep dan khi thong tin tang → merge tai intersection → it rework.

Mapping sang LLM agents:
- **Explorer agents** (1 per domain): moi agent giu 1 set WPs tu goc nhin domain cua minh
- **Integrator agent**: tim intersection giua 3 sets → morphological matrix = merged result
- **Narrowing = agent negotiation**: khi 1 WP khong tuong thich voi domain khac → negotiation hoac loai bo
- **CEO = final narrowing authority**: quyet dinh set nao giu, set nao bo

Ap dung cho HELIX helix-p2-search (Block BB):
- Mech agent: search WPs tu goc nhin co khi (materials, manufacturing, geometry)
- Elec agent: search WPs tu goc nhin dien tu (power, signal, EMC)
- AI/SW agent: search WPs tu goc nhin phan mem (algorithms, compute, data)
- Merge: morpho matrix voi column "perspective source" → hybrid WPs xuat hien tai giao diem

## Tai Sao Dieu Nay Quan Trong?

- Morphological matrix hien tai do 1 agent build → miss cross-domain hybrids
- SBCE evidence: 15-25% more feasible solutions on coupled problems
- Truc tiep applicable cho WX mechatronic products (Mech × Elec × SW)
- Solution-Determining SF: domain agent nao "own" SF do se lead negotiation

## Lien Ket

- [[Solution-Determining SF Law]] — SF quyet dinh thuoc domain nao → domain do lead set exploration
- [[VDI 2221 Evolution]] — VDI 2221:2019 co-evolution = SBCE compatible
- [[RE Paradox Law — Nghiên Cứu Phức Tạp Xây Dựng Đơn Giản]] — SBCE explore complex sets → select simplest intersection

## Nguon Goc

Research: Multi-Agent Collaborative Conceptual Design, 2026-04-22. Sources: SBCE through MAS Simulation (Cambridge AI EDAM), MAS + SBCE + Team Organization (CMU Thesis). NLM notebook: multi-agent-design.
