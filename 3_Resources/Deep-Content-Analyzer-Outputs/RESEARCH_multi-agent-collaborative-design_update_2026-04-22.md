---
created: 2026-04-22
source: research-pipeline-v4-update
notebook: multi-agent-design
topic: "Multi-Agent Collaborative Conceptual Design"
type: nlm-output-update
status: active
update_of: "RESEARCH_multi-agent-collaborative-design_2026-04-22.md"
original_date: 2026-04-22
tags: [#type/nlm-output, #status/active]
source_quality:
  existing_sources: 32
  new_sources_added: 10
  total_after_update: 42
  failed: 2 (ASME paywall, advancedmfg.org)
---

# Multi-Agent Collaborative Conceptual Design — Research Update

**Date:** 2026-04-22 (gap-filling update)
**Original:** 30 sources, 11 insights, 4 Galaxy candidates
**New:** +10 Tier A/S sources → 42 total

## Previous Research Key Findings
1. Hierarchical CEO-Hub = optimal topology (5.5% vs 23.7% fault drop)
2. SBCE set-narrowing maps to agent negotiation
3. Multi-agent DEGRADES quality on simple/uncoupled problems
4. Cascading hallucination = critical risk
5. BB (Search) + BD (Risk) = best blocks for multi-agent

## New Sources Added

| # | Title | Tier | Fills Gap |
|---|-------|:----:|-----------|
| N1 | arxiv: Multi-Agent Autonomous Mechatronics Design | S | Hardware MAS |
| N2 | Springer: GenAI meets CAD → Manufacturing | A | Hardware MAS |
| N3 | Cambridge: Text-to-Design LLM Agents | A | Hardware MAS |
| N5 | Promwad: LLM HW Design 2026 Reality Check | B | Hardware MAS |
| N7 | Microsoft+Schneider: Governed Agentic Manufacturing | A | Field-tested |
| N8 | Technova: SME AI Agents 90-Day (78% success) | B | Small-team |
| N9 | Anthropic: 2026 Agentic Coding Trends Report | A | Infrastructure |
| N10 | Anthropic: Claude Managed Agents | A | WX infrastructure |
| N11 | Anthropic: Agent Skills | A | WX skill validation |
| N12 | Anthropic: Long-Running Agent Harness | A | WX pipeline arch |

## Delta Analysis

### New Insights (not in original)

**1. Mechatronics MAS = Validated for Physical Products** ★★★
- Source: arxiv 2504.14681 (Tier S)
- High-Level Planning Agent delegates to Mech/Elec/SW/Ctrl agents → autonomous water-monitoring vessel built
- BUT: LLMs lack 3D spatial cognition → hybrid human-in-loop for physical constraints
- Changes original #2 (SBCE): YES — confirms multi-agent works for hardware, WITH spatial validation gate

**2. "Operational Envelopes" for Agent Governance** ★★★
- Source: Microsoft+Schneider (Tier A)
- Strict boundaries on what agents can do autonomously vs requires human approval
- Explainability engine + immutable audit trails halt rogue actions
- 15-30% downtime reduction, 10-20% energy efficiency in manufacturing
- Changes original #1 (CEO-Hub): REFINES — CEO sets operational envelopes, not constant oversight

**3. Agent Skills = Progressive Disclosure (Context Window Solution)** ★★★
- Source: Anthropic (Tier A)
- Organized folders of domain knowledge agents load dynamically
- Solves context-window overload without massive prompt engineering
- WX already uses this pattern (skill files as reference folders)
- Changes original #9 (communication overhead): MITIGATES — Skills reduce coordination cost

**4. Long-Running Harness = Initializer + Incremental + Ledger** ★★★
- Source: Anthropic (Tier A)
- Initializer Agent → state ledger (claude-progress.txt)
- Coding Agent reads ledger, makes incremental progress, updates ledger
- Directly maps to HELIX: Preflight = Initializer, each block = incremental agent
- **Single Most Important Finding for WX HELIX upgrade**

**5. SME 90-Day Deployment: 2-3 People, 40% Time, Quick Wins** ★★
- Source: Technova (Tier B)
- Minimum viable team: Project Owner + Technical Lead + UX
- Target simple tasks first (78% success) → expand gradually
- Validated across 15+ real SME implementations
- Changes original #3 (degradation on simple): CONTRADICTED — simple tasks = highest success IF narrowly scoped

**6. askBack Pattern = Lowest Success (Excessive Human Interrupts)** ★★
- Source: Cambridge Text-to-CAD (Tier A)
- Agent frequently pausing for human clarification → semantic distractions → derailed generation
- Changes original #1 (CEO-Hub): NUANCES — CEO checkpoint ≠ constant interruption. Block-level checkpoints (current WX) = correct. Mid-block askBack = harmful.

**7. LLMs Fundamentally Lack 3D Spatial Cognition** ★★★
- Source: arxiv + Cambridge + Promwad (cross-validated)
- 100% failure on precise right-angle geometry in text-to-CAD tests
- LLMs can scaffold code but deterministic solvers + human geometric intuition mandatory
- Confirms WX approach: AI generates options, CEO/engineer validates spatial decisions

### Contradictions with Original

| Original Finding | New Source Says | Resolution |
|-----------------|----------------|------------|
| CEO-Hub = constant oversight optimal | askBack = lowest success; Operational Envelopes = better | **REFINED:** CEO sets envelopes at block boundaries, NOT constant interruption. One Block Per Turn rule = architecturally correct |
| Multi-agent degrades simple tasks | SME 78% success on simple tasks | **CONTEXT:** degradation when agents debate simple tasks. SUCCESS when single agent executes simple task within envelope |
| 3-agent cap for overhead | Agent Skills + Managed Agents mitigate overhead | **MITIGATED by infrastructure:** WX skill folders already implement progressive disclosure |
| Cascading hallucination = critical | Operational envelopes + verification tools suppress | **MITIGATED but NOT eliminated:** still need P02 QC gate |

### Coverage Gaps Filled

| Gap | Filled By | Confidence |
|-----|----------|:----------:|
| Hardware + multi-domain MAS | arxiv Mechatronics (Mech/Elec/SW/Ctrl agents → vessel) | ★★★ |
| Field-tested manufacturing | Microsoft+Schneider (15-30% gain, Hannover 2026) | ★★★ |
| Small-team implementation | Technova SME (2-3 people, 78% success, 15+ cases) | ★★ |
| WX Claude infrastructure | Anthropic Agent Skills + Long-Running Harness + Managed Agents | ★★★ |

### Remaining Gaps

| Gap | Still Missing |
|-----|--------------|
| Air-gapped defense deployment | Anthropic cloud-only; on-premise MAS not addressed |
| 3D spatial reasoning | LLMs fundamentally cannot do geometry — no near-term fix |
| Defense-specific validation | No field test of MAS in defense product design |

## Galaxy Candidates (new insights only)

### ★★★ — Ready for Promotion

1. **"Operational Envelope Law — Agent tự chủ trong phạm vi, CEO thiết lập biên"**
   (Agent autonomous within envelope, CEO sets boundaries)
   - Cluster: C (Judgment) + I (AI Agent Architecture)
   - Links to: [[Phán đoán không thể uỷ thác cho AI]], [[HOK Law — Tay Não Ký Ức Của Agent]]
   - Source: Microsoft+Schneider (Tier A) + Anthropic (Tier A)
   - Confirms + refines "One Block Per Turn" rule: CEO sets block-level envelopes, not constant oversight

2. **"LLM Spatial Blindness — AI Không Có Mắt 3D, Chỉ Có Miệng Code"**
   (LLMs cannot see 3D space — they generate code, not geometry)
   - Cluster: D (AI Failure Modes) + G (Pahl-Beitz Technical)
   - Links to: [[Physical-World Interface — Kiểm Chứng Bằng Thực Tế]], [[ACH Boundary Rule — Information vs Physical Forces]]
   - Source: arxiv + Cambridge + Promwad (3 sources cross-validated)
   - CRITICAL for HELIX: AI-generated embodiment layouts MUST have human spatial validation

## Source Quality Report (update)

| Metric | Original | After Update |
|--------|:--------:|:------------:|
| Total sources | 32 | 42 |
| Tier S+A | 19 | 27 (+8 new) |
| Pro ratio | 68% | 73% |
| Hardware MAS sources | 0 | 4 |
| Field-tested mfg | 0 | 1 |
| SME validation | 0 | 1 |
| Anthropic infra | 0 | 4 |
