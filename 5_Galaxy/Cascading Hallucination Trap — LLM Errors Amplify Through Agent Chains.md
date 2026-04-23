---
created: 2026-04-22
updated: 2026-04-22
type: permanent-note
tags: [#type/permanent-note, #acq, #warning, #three-laws]
links: [[Context Drift Loop]], [[Training Scars]], [[Hierarchical Hub Resilience Law — CEO-Hub = Optimal cho Small-Team MAS]], [[Multi-Agent Selectivity Law — MAS Degrades Quality on Simple Problems]]
---

## Y Tuong Cot Loi

Trong LLM-based multi-agent system, 1 agent hallucinate → cac agent khac KHONG phat hien ma con KHUYECH DAI loi do (overconfidence + deference). Semantic errors (plausible but wrong) nguy hiem nhat vi khong bi bat boi syntax/logic checks. Performance drop: len toi 22.6%.

## Giai Thich Chi Tiet

Mechanism:
1. Agent A generate plausible-but-wrong analysis (e.g., "material X chiu duoc 80°C" nhung thuc te chi 60°C)
2. Agent B nhan output cua A, KHONG challenge vi LLM co xu huong agree voi input co ve hop ly
3. Agent B build on top of sai lam → compound error
4. Agent C tiep tuc → error cascade qua toan bo pipeline
5. CEO nhan output cuoi cung — error da bi "launder" qua nhieu agents, kho phat hien

**Dac biet nguy hiem trong conceptual design:**
- Design decisions khong co "compiler" de check (khac voi code)
- Material properties, coupling estimates, cost assumptions = plausible ranges
- Sai 1 parameter → cascade qua morpho matrix → VDI 2225 → concept selection → SAI CONCEPT

**Mitigation:**
1. **Contradiction detection mandatory:** Moi domain perspective PHAI explicitly challenge cac perspectives khac
2. **CEO Hub checkpoint:** Human review sau moi block
3. **P02 QC gate:** Independent quality check truoc khi chuyen phase
4. **Confidence tagging:** Moi inference phai co H/M/L confidence + source
5. **Cross-validation:** Insight chi duoc ★★★ khi ≥2 sources dong y

## Tai Sao Dieu Nay Quan Trong?

- Multi-perspective analysis = them agents = them cascading risk
- WX defense products: sai design decision → safety risk, khong chi cost
- Contradiction table TRONG output block = bat error TRUOC khi CEO review
- P02 QC gate khong phai optional — la SAFETY NET chong cascading hallucination

## Lien Ket

- [[Context Drift Loop]] — error tich luy qua nhieu turns tuong tu context drift
- [[Training Scars]] — LLM overconfidence la "scar" tu training data
- [[Hierarchical Hub Resilience Law — CEO-Hub = Optimal cho Small-Team MAS]] — Hub catches errors nhung hub cung co the bi fool
- [[Multi-Agent Selectivity Law — MAS Degrades Quality on Simple Problems]] — them agent tren simple problem = them risk, khong them value

## Nguon Goc

Research: Multi-Agent Collaborative Conceptual Design, 2026-04-22. Sources: On Resilience of LLM-Based MAS with Faulty Agents (arxiv 2408.00989, 22.6% drop data), MAS Collaboration Survey (arxiv 2501.06322). NLM notebook: multi-agent-design.
