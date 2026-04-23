---
created: 2026-03-17
updated: 2026-03-17
type: sop
status: active
tags: [#type/sop, #status/active]
---

# HELIX Upgrade Roadmap v4 — From S1 Prompt Library + Pattern Library

> Sources: `3_Resources/SOPs/S1_prompt_library.md` (v5.1, 16 prompts) + `3_Resources/SOPs/Workshop X Pattern Library.md` (5 categories, 10 templates)
> Cross-referenced with: HELIX 12 skills (post-v3 upgrades)
> Session 51. Implement next sessions.

---

## Cross-Cutting Gaps Found

### Gap 1: HELIX skills thiếu Schema v3.0 structure
S1 Prompt Library dùng **Schema v3.0** cho mọi prompt: CONSTRAINTS 3-tier (hard_limits + reject_conditions + prohibited_actions), HITL trigger matrix, SUCCESS_CRITERIA, FALLBACK_PROTOCOL. HELIX skills hiện tại có rules nhưng KHÔNG structured theo v3.0.

**Impact:** HELIX skills sẽ produce inconsistent output quality vì thiếu reject conditions và fallback protocols.

### Gap 2: HELIX skills thiếu DCTRS framework
Pattern Library dùng **DCTRS** (Delegate-Constrain-Test-Review-Specify) cho mọi delegation. HELIX skills có workflow nhưng không rõ D-C-T-R-S boundary.

**Impact:** Khi CEO delegate 1 HELIX task cho AI agent, output quality phụ thuộc vào agent hiểu implicit constraints — thay vì explicit DCTRS.

### Gap 3: HELIX thiếu link đến existing Prompt Templates
P50 (Stability), P51 (Weight), P53 (ICD), P03 (Eng Doc), P02 (QC Gate) là tools CÓ SẴN nhưng HELIX skills không reference chúng.

**Impact:** Duplicate effort — HELIX skills tự define patterns thay vì invoke P-templates đã proven.

---

## Skill-by-Skill Upgrade Proposals

### Priority A — High Impact (integrate P-templates directly)

| # | Skill | Upgrade | Source | What to Add |
|---|-------|---------|--------|-------------|
| 1 | `/helix-embody-realize` | **Integrate P50 + P51** | S1 P50, P51 | Maritime products: auto-invoke P50 (Stability Check) and P51 (Weight Estimate) during Step 3 DfX. Add conditional: `if domain = maritime → run P50 + P51 before DfX summary` |
| 2 | `/helix-quality-gate` | **Integrate P02 QC pattern** | S1 P02 | Apply P02's 5-check sequence (Physics → Standard → Environmental → Safety → Confidence) to auto-check artifacts at each gate. Current gates check file existence; P02 checks content quality |
| 3 | `/helix-integration-debt` | **Integrate P53 ICD template** | S1 P53 | When creating new ICD entries, auto-generate from P53 template with parameter codes (A1, B1, C1). Currently ICD format is ad-hoc |
| 4 | `/helix-detail-finalize` | **Integrate P03 + P04** | S1 P03, P04 | Manufacturing docs: apply P03 (Engineering Doc) with TCVN compliance check via P04. Current skill generates docs but doesn't enforce P03's quantification target (≥80%) or P04's compliance matrix |

### Priority B — Medium Impact (add v3.0 structure)

| # | Skill | Upgrade | Source | What to Add |
|---|-------|---------|--------|-------------|
| 5 | `/helix-task-clarify` | **Add reject_conditions** | Schema v3.0 | Add explicit reject: "Phase not specified", "Product code not provided", "Standards not listed" — prevents partial task clarification |
| 6 | `/helix-concept-generate` | **Add FALLBACK_PROTOCOL** | Schema v3.0 | Per-failure fallbacks: `spec_ambiguous → list interpretations + ASK`, `performance_fail → profiling data`, `hardware_mismatch → suggest alternatives` — currently skill has no defined failure handling |
| 7 | `/helix-embody-realize` | **Add PLAUSIBLE to DfX** | S1 P47 | Apply P47 PLAUSIBLE 9-check as quality gate on embodiment output: Physics, Logic, Assumptions, Units, Scale, Integration, Boundary, Lethality, Endurance. Currently DfX is category-based (DfM/DfA/DfR/DfT/DfU); PLAUSIBLE adds cross-cutting rigor |
| 8 | `/helix-sync-protocol` | **Add E1 Weekly Review pattern** | Pattern Lib E1 | Structure sync brief using E1's 6-section format: Progress, Constraint Check, Loop Status, Allocation, Priorities, Risk Flags. Currently sync brief is domain-status only |

### Priority C — Enhancements (DCTRS + anti-patterns)

| # | Skill | Upgrade | Source | What to Add |
|---|-------|---------|--------|-------------|
| 9 | ALL 12 skills | **Add DCTRS header** | Pattern Lib §1.1 | Every skill gets explicit DCTRS mapping: which steps are Delegate (AI), Constrain (limits), Test (criteria), Review (HITL), Specify (fallback). Makes COD classification operational |
| 10 | `/helix-dfach` | **Integrate P05 Physics Check** | S1 P05 | ACH compensation validation: after DfACH Section B (AI Compensation Path), run P05 physics plausibility on compensation claims. "AI compensates for 720p resolution" → physics check: is upscaling physically plausible at this range? |
| 11 | `/helix-shadow-dev` | **Apply P47 A-check method** | S1 P47 | Shadow assumption extraction: use PLAUSIBLE "A — Assumptions Audit" methodology to systematically find hidden assumptions in design artifacts. Pattern: "List ALL hidden assumptions found. Each: what → where (file:line) → valid?/needs verification" |
| 12 | `/helix-design-journal` | **Add B2 Governance pattern** | Pattern Lib B2 | Decision entries: apply B2's accountability structure — every decision has "who is responsible", "escalation path", "override authority". Currently journal captures what/why but not who/accountability |

### Priority D — New Templates for S1 Prompt Library

| # | Template | Category | Purpose | Based on |
|---|----------|----------|---------|----------|
| 13 | **P54 — DfX Review Execution** | D (Design) | Run structured DfX (DfM/DfA/DfR/DfT/DfU/DfACH) on embodiment layout with v3.0 schema | helix-embody-realize Step 3 |
| 14 | **P55 — Shadow Assumption Extraction** | D (Design) | Extract and cross-check shadow assumptions between domains | helix-shadow-dev workflow |
| 15 | **P56 — Gate Review Execution** | D (Design) | Run auto-check + human judgment gate with scoring | helix-quality-gate workflow |

---

## Phân Loại Anti-Pattern (từ Pattern Library §5)

Mỗi HELIX skill nên reference anti-patterns liên quan:

| Anti-Pattern | Relevant HELIX Skills | Guard |
|-------------|----------------------|-------|
| AP1: "Handle it" — vague delegation | task-clarify, concept-generate | reject_conditions block vague input |
| AP2: Delegating ambiguous work | embody-realize (layout = Core), quality-gate (judgment = Core) | COD classification enforced |
| AP3: Trusting AI on VN military context | task-clarify (D/W classification), quality-gate (H-items) | HITL mandatory for judgment calls |
| AP4: Skipping review on "simple" output | detail-finalize (drawings), integration-debt (ICD) | on_completion HITL always true |
| AP5: Using AI to avoid decisions | concept-generate (selection), embody-realize (trade-offs) | CEO selection steps explicitly marked Core |

---

## Implementation Plan

| Session | Items | Est. Time | Status |
|---------|-------|-----------|--------|
| 51 | Priority A: #1-4 (P50/P51/P02/P53/P03/P04 integration) | ~30 min | ✅ Done |
| 51 | Priority B: #5-8 (v3.0 structure: reject_conditions, fallbacks, E1) | ~15 min | ✅ Done |
| 51 | Priority C: #10-12 (P05/P47 integration, B2 pattern; #9 deferred) | ~15 min | ✅ Done |
| 51 | Priority D: #13-15 (P54/P55/P56 added to S1 v5.2) | ~20 min | ✅ Done |

**Total: ~2.5 hours across 4 sessions**

---

## Decision: Update HELIX skills hay S1 Prompt Library hay cả hai?

Hai systems hiện đang parallel:
- **HELIX skills** (`~/.claude/commands/helix-*/SKILL.md`) — Claude Code invokable, natural language
- **S1 Prompt Library** (`3_Resources/SOPs/S1_prompt_library.md`) — structured v3.0 templates, copy-paste into agent

**Đề xuất:**
1. HELIX skills = **orchestrator** (gọi P-templates khi cần)
2. S1 templates = **executor** (structured v3.0 format cho specific tasks)
3. Mỗi HELIX skill nên có section `## Invokes` listing P-templates nó gọi

Ví dụ:
```
helix-embody-realize INVOKES:
  - P50 (Stability Check) — if maritime product
  - P51 (Weight Estimate) — if mechanical system
  - P47 (PLAUSIBLE Review) — on embodiment output
  - P03 (Engineering Doc) — for BOM and drawing package
```

---

## Galaxy Candidates

- [ ] "DCTRS × HELIX — Delegation Framework Cho Concurrent Engineering" → cluster I (AI Agent Architecture)
- [ ] "Schema v3.0 Reject Conditions — Chặn Input Xấu Trước Khi Xử Lý" → cluster D (AI Failure Modes)

**Decision:** Evaluate after implementation — promote if patterns prove useful in practice.
