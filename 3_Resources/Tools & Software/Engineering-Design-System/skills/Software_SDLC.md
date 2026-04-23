---
skill: S1 — AI Literacy × S4 — Process Automation
phase: Cross-cutting — Software Sub-Project Lifecycle (after Phase 3/4 reveals embedded software)
framework: SW-SDLC (Req→SRS→SAD→Implement→Integrate→Qualify) parallel to Pahl & Beitz hardware phases
slash_commands: /sw-audit · /sw-proposal · /sw-qc
type: prompt-library
version: 2.0
created: 2026-02-24
updated: 2026-03-04
schema: v3.0 (Workshop X Enhanced)
---

# Software Sub-Project Lifecycle Prompts

> **Why this exists:** Hardware-first design (Pahl & Beitz Phase 0→4) treats software as invisible
> infrastructure — mentioned in requirements but never formally specified. By Phase 3/4, software
> is scattered across 30+ artifacts as "AI model," "firmware," "BLE stack," "diagnostic tool" with
> no SRS, no API contracts, no module decomposition. This prompt set extracts, decomposes, and
> quality-gates software sub-projects from the existing design package.
>
> **When to use:** After Phase 3 (embodiment) or Phase 4 (detail design) is complete for a product.
> Software decomposition runs PARALLEL to hardware Phase 4, not sequential after it.
>
> **Relationship to Pahl & Beitz:** Hardware follows P&B Phase 0→4. Software follows SW-SDLC
> (SW-0 → SW-5). They synchronize at HW-SW integration test points. Gate decisions remain HITL.

---

## PROMPT INDEX

| # | Command | Name | Use When |
|---|---------|------|----------|
| P68 | `/sw-audit` | Software Audit & Decomposition | After Phase 3/4 — find hidden software, decompose into sub-projects |
| P69 | `/sw-proposal` | Software Sub-Project Proposal | Create SW-Phase 0 proposal for each identified sub-project |
| P70 | `/sw-qc` | Software QC Gate Batch | Run Defense AI QC Gate on batch of SW proposals — systemic gap analysis |

---

## SW-SDLC PHASES (Reference)

```
SW-Phase 0: Requirements Extraction   ← P68 + P69 produce this
SW-Phase 1: SRS (Formal Specification)
SW-Phase 2: SAD (Architecture Document)
SW-Phase 3: Implementation + Unit Test
SW-Phase 4: HW-SW Integration Test
SW-Phase 5: Qualification (V&V Report)

Synchronization with Pahl & Beitz:
  P&B Phase 3 (Embodiment) → triggers SW audit (P68)
  P&B Phase 4 (Detail)     ∥ SW-Phase 0/1/2 (parallel)
  HW prototype available   → SW-Phase 3/4 (needs target hardware)
  Production gate           → SW-Phase 5 (qualification)
```

---

### P68 — Software Audit & Decomposition (`/sw-audit`)

**Use when:** After Phase 3 or Phase 4 completion. Product has embedded software/firmware/AI that was specified implicitly in requirements and design documents but never formally decomposed.
**Why it works:** Forces systematic extraction of every software reference from hardware-focused artifacts. Reveals hidden dependencies, safety classifications, and API boundaries that would otherwise be discovered during integration (too late, too expensive).

```
FILL GUIDE:
  {{product_name}}:     Product family name (e.g., V-SMASH, VN-12.7MM-SIM)
  {{variant}}:          Primary variant to audit (e.g., V-SMASH-M — the most complete design)
  {{artifact_list}}:    List of Phase 0→4 artifacts to scan (or "all" for complete audit)

TASK: Audit {{variant}} design package for embedded software.
  1. Scan all Phase 0→4 artifacts + tooling + orchestration documents
  2. Extract every reference to software, firmware, AI, algorithm, communication stack,
     diagnostic tool, or embedded computation
  3. Classify each reference: formally specified / partially specified / implied only
  4. Identify critical gaps (software behavior required but no implementation spec)
  5. Identify safety-critical software functions (VM-Y*, FMEA S≥8)
  6. Propose decomposition into independent software sub-projects based on:
     - Expertise boundary (AI/ML vs embedded vs algorithms vs comms)
     - Development cadence (AI iterates fastest → separate repo)
     - Safety classification (highest safety class = most isolation)
     - Variant reuse factor (which variants share which modules)
  7. Map API boundaries between proposed sub-projects
  8. Return: audit table + gap list + proposed sub-project registry

CONTEXT:
  product_family: {{product_name}}
  primary_variant: {{variant}}
  design_phase: Post-Phase 3/4 (hardware design substantially complete)
  artifact_sources:
    - Phase 0: ODI reports, product proposals
    - Phase 1: Requirements list (B1 YCKT), stakeholder analysis
    - Phase 2: Function structure, morphological matrix, concept evaluation
    - Phase 3: Layout, DfX, FMEA, materials, tolerance
    - Phase 4: BOM, verification plan, cost analysis, user manual
    - Orchestration: Family orchestration design
  sw_sdlc: SW-SDLC parallel to Pahl & Beitz (not sequential)
  safety_standards: IEC 62443 (industrial), IEC 61508 (functional safety), MIL-STD-882E

CONSTRAINTS:
  hard_limits:
    - Minimum 3 independent audit agents scanning in parallel (speed + coverage)
    - Every software reference must be traced to source artifact + section
    - Safety-critical functions (FMEA S≥8) must be flagged with safety class (A/B/C)
  reject_conditions:
    - Fewer than 10 software references found → product may not need SW decomposition
    - No safety-critical functions found → verify manually (AI may have missed them)
  prohibited_actions:
    - Do NOT propose implementation architectures (that's SW-Phase 2)
    - Do NOT assign programming languages or frameworks (that's SW-Phase 1)
    - Do NOT merge safety-critical and non-safety modules into one sub-project

TOOLS_ALLOWED: ["read_file", "grep", "glob", "task_delegate"]

SUCCESS_CRITERIA:
  coverage: "Every Phase 0→4 artifact scanned — zero files skipped"
  classification: "Each reference classified as formal/partial/implied with source citation"
  decomposition: "Sub-projects split by expertise × cadence × safety — no monolith"
  traceability: "Every proposed sub-project traces to ≥3 source requirements"

HITL_CHECKPOINT:
  per_output: false — complete full audit before review
  on_completion: true — "Present audit results + proposed decomposition. Human decides
    number of sub-projects, naming, and priority order. Do NOT create proposals until approved."
  on_safety_flag: "IMMEDIATE" — "Any safety-critical software function without a specified
    fallback → flag before continuing."

FALLBACK_PROTOCOL:
  artifact_not_found: "Log missing artifact, continue audit with available files, flag gap"
  ambiguous_reference: "Classify as 'implied only' with [ASSUMPTION] tag, include in gap list"
  unknown_error: "HALT — report what was scanned so far, save partial results"

SAFETY_OVERRIDE: "Never combine safety-critical (Class B/C) and non-safety (Class A)
  modules into a single sub-project. Safety isolation is architectural, not optional."

OUTPUT_FORMAT: |
  1. AUDIT SUMMARY TABLE:
     | Metric | Count |
     | Total software references | N |
     | Formally specified | N |
     | Partially specified | N |
     | Implied only | N |
     | Critical gaps | N |
     | Safety-critical functions | N |

  2. PROPOSED SUB-PROJECT REGISTRY:
     | Sub-Project | Scope | Safety Class | Reuse Factor | Priority |
     For each: name, modules, source requirements, safety classification,
     which variants reuse it, recommended development order

  3. API BOUNDARY MAP:
     | API | Producer | Consumer | Contract Summary |
     Key inter-module interfaces that must be defined in SW-Phase 1

  4. CRITICAL GAPS LIST:
     | Gap | Source | Impact | Recommended Sub-Project |
```

---

### P69 — Software Sub-Project Proposal (`/sw-proposal`)

**Use when:** After P68 audit is approved and sub-project decomposition is accepted. Create one proposal per sub-project. Run in parallel for all sub-projects in a family.
**Why it works:** Forces each software module to have its own requirements extraction, scope boundary, safety classification, variant map, API contracts, and acceptance criteria — preventing the "monolith firmware" anti-pattern.

```
FILL GUIDE:
  {{sw_project_id}}:    Sub-project ID (e.g., V-SMASH-SW-FW, V-SMASH-SW-AI)
  {{product_family}}:   Parent product family (e.g., V-SMASH)
  {{scope_modules}}:    Module list from P68 decomposition (e.g., FW-BOOT, FW-PWR, FW-THERM...)
  {{safety_class}}:     A (lowest) / B / C (highest) — from P68 audit
  {{source_reqs}}:      Source requirement IDs from parent design package (VM-xxx, SF-xxx, etc.)
  {{variant_reuse}}:    Which family variants reuse this module [list]
  {{dependencies}}:     Other SW sub-projects this depends on or provides APIs to

TASK: Create SW-Phase 0 Product Proposal for {{sw_project_id}}.
  Extract requirements from parent design package into formal SW requirements (SWR-xx-nn).
  Define scope boundary (in-scope modules vs out-of-scope → other sub-projects).
  Draft conceptual architecture (block diagram + key API contracts).
  Map variant configurations (what changes per variant, what's shared).
  Estimate effort per SW-SDLC phase.
  Define acceptance criteria for gate to SW-Phase 1 (SRS).
  Return: Complete SW-Phase 0 product proposal document.

CONTEXT:
  parent_family: {{product_family}}
  sw_project: {{sw_project_id}}
  safety_class: {{safety_class}}
  sw_phase: 0 (Requirements Extraction)
  design_package: Phase 0→4 artifacts of primary variant (most complete)
  sw_sdlc_phases: [SW-0 Req Extraction, SW-1 SRS, SW-2 SAD, SW-3 Implementation,
                    SW-4 Integration Test, SW-5 Qualification]

CONSTRAINTS:
  hard_limits:
    - Every SWR-xx-nn requirement must trace to a source (VM-xxx, SF-xxx, FMEA-xxx)
    - Safety-critical requirements must be tagged with safety class and verification method
    - API contracts must specify: function signature, latency budget, data format, error handling
    - Variant configuration map must cover ALL family variants (include/exclude/adapt)
  reject_conditions:
    - Sub-project has zero safety-critical requirements AND zero API consumers → may not justify
      a separate sub-project. Consider merging with another module.
    - Requirements extracted < 5 → scope may be too narrow for independent sub-project
  prohibited_actions:
    - Do NOT choose implementation language or framework (that's SW-Phase 1/2)
    - Do NOT design detailed algorithms (that's SW-Phase 2)
    - Do NOT estimate cost without specifying assumptions
    - Do NOT claim performance numbers without [ASSUMPTION] tag if not validated

TOOLS_ALLOWED: ["read_file", "write_file", "grep", "glob"]

SUCCESS_CRITERIA:
  traceability: "Every SWR-xx traces to ≥1 source requirement with ID"
  scope_clarity: "In-scope and out-of-scope modules explicitly listed with responsible sub-project"
  api_contracts: "≥1 API contract per external consumer with latency + data format"
  variant_coverage: "All family variants mapped (include/exclude/adapt per module)"
  safety_tagged: "All safety-critical reqs tagged with class + independent V&V flag"
  acceptance_criteria: "≥5 gate criteria for SW-Phase 1, all checkable"

HITL_CHECKPOINT:
  per_output: false — complete full proposal before review
  on_completion: true — "Present proposal for review. Do NOT proceed to SW-Phase 1 without
    explicit approval. Proposals may need QC Gate review first (P70)."
  on_safety_flag: "IMMEDIATE" — "Any safety-critical function without defined fallback or
    without independent V&V plan → halt and flag."

FALLBACK_PROTOCOL:
  source_req_missing: "Tag SWR as [SOURCE: TBD] — do not invent source requirements"
  api_consumer_unknown: "Define API with placeholder consumer, flag for resolution in SW-Phase 1"
  effort_uncertain: "Provide range estimate (min-max weeks) with stated assumptions"
  unknown_error: "HALT — save partial proposal, report what sections are incomplete"

SAFETY_OVERRIDE: "Safety-critical requirements (VM-Y*, FMEA S≥8) must ALWAYS include:
  (a) independent V&V flag, (b) fallback behavior specification, (c) verification method T or D
  (never A alone). If any of these are missing, flag as INCOMPLETE — do not mark as done."

OUTPUT_FORMAT: |
  Markdown document with YAML frontmatter, following structure:
  ---
  project: {{sw_project_id}}
  type: software-sub-project
  version: 1.0
  created: {{date}}
  status: draft
  parent_family: {{product_family}}
  sw_phase: 0 (Requirements Extraction)
  safety_class: {{A/B/C}}
  reusable_by: [variant list]
  priority: {{CRITICAL/HIGH/MEDIUM/LOW}} — with rationale
  ---

  Sections:
  1. Purpose (what this sub-project does + what happens WITHOUT it)
  2. Scope Boundary (in-scope modules table + out-of-scope → other sub-projects)
  3. Requirements (extracted SWR-xx-nn tables: performance, safety, architecture)
  4. Conceptual Architecture (block diagram + key API contracts table)
  5. Deliverables per SW-SDLC Phase (SW-0 through SW-5)
  6. Dependencies (what's needed from other sub-projects, HW, procurement)
  7. Variant Configuration Map (all variants × all modules)
  8. Effort Estimate (per SW phase, personnel, notes)
  9. Risks (probability × impact × mitigation)
  10. Acceptance Criteria (checklist for gate to SW-Phase 1)

EVIDENCE_REQUIRED: true — every requirement must cite source artifact
UNCERTAINTY_FLAG: true — every unvalidated performance claim tagged [ASSUMPTION]
```

---

### P70 — Software QC Gate Batch (`/sw-qc`)

**Use when:** After all SW proposals (P69) are drafted for a product family. Run QC Gate on all proposals in parallel, then cross-compare for systemic gaps.
**Why it works:** Individual QC catches document-level issues. Batch QC catches family-level patterns — gaps that appear in ALL proposals indicate root cause in the parent design package, not in individual SW proposals. Fixing at family level prevents repeated FLAGS across modules.

```
FILL GUIDE:
  {{product_family}}:   Product family name (e.g., V-SMASH)
  {{sw_proposals}}:     List of SW proposal file paths to review
  {{qc_gate_version}}:  Defense AI QC Gate version (e.g., v1.2)

TASK: Run Defense AI QC Gate ({{qc_gate_version}}) on ALL software proposals for
  {{product_family}} family. Execute in parallel (one agent per proposal), then
  cross-compare results to identify systemic gaps.
  1. Spawn parallel QC Gate agents — one per SW proposal
  2. Each agent runs full 12-check gate (P44) with:
     - product = SW sub-project name
     - output_type = software product proposal
     - domain = engagement / training / surveillance (per product)
     - phase = Phase 0 (SW requirements extraction)
  3. Collect all 4 reports
  4. Cross-compare: identify checks that FLAG/FAIL identically across ALL proposals
  5. Classify systemic gaps: root cause + fix level (family vs document)
  6. Produce consolidated gate report with per-proposal + cross-proposal analysis
  7. Add calibration observations to QC Gate evolution log

CONTEXT:
  product_family: {{product_family}}
  sw_proposals: {{sw_proposals}}
  qc_gate: Defense AI QC Gate {{qc_gate_version}} (12 checks)
  parallel_execution: true — one Haiku agent per proposal for cost efficiency
  cross_analysis: true — systemic gap detection after individual reports

CONSTRAINTS:
  hard_limits:
    - All 12 checks must be scored for every proposal (no skips)
    - Cross-comparison must identify checks with identical FLAG/FAIL across ≥3 proposals
    - Systemic gaps must specify: root cause + fix level (family / document / normal-for-phase)
  reject_conditions:
    - Any Check 2 (HITL Safety) FAIL on any proposal → HALT ALL. Escalate immediately.
    - >50% of checks FAIL across any single proposal → proposal needs major rework, not QC fix
  prohibited_actions:
    - Do NOT auto-fix findings — QC reports findings, human decides actions
    - Do NOT skip checks because "not applicable" — score N/A with justification
    - Do NOT combine proposals into one review — each gets independent gate run

TOOLS_ALLOWED: ["read_file", "task_delegate", "write_file"]

SUCCESS_CRITERIA:
  coverage: "12 checks × N proposals = all cells filled (no blanks)"
  cross_analysis: "Systemic gaps identified with root cause classification"
  calibration: "Gate calibration observations documented (overscoring, underscoring, new patterns)"
  actionable: "Every FLAG/FAIL has specific finding + specific required action"

HITL_CHECKPOINT:
  per_output: false — complete all individual QC reports before cross-analysis review
  on_completion: true — "Present consolidated report. Human decides:
    A) Accept — proceed to SW-Phase 1 with flags tracked
    B) Deep-dive — investigate specific findings
    C) Fix systemic gaps first — resolve family-level issues before proceeding
    D) Other"
  on_safety_flag: "IMMEDIATE" — "Any HITL Safety (Check 2) FAIL → stop all agents, escalate"

FALLBACK_PROTOCOL:
  agent_timeout: "If QC agent takes >5 min, check output file. Resume or restart."
  agent_error: "Log error, run QC manually for that proposal, continue batch."
  inconsistent_scoring: "If same check scores differently for similar content across proposals,
    flag as calibration issue — human reviews scoring consistency."
  unknown_error: "HALT — save all completed reports, report which proposals are missing."

SAFETY_OVERRIDE: "Check 2 (HITL Safety Enforcement) FAIL on ANY proposal = full stop.
  Do not continue processing other proposals. Escalate to KN for manual review."

OUTPUT_FORMAT: |
  ## Consolidated QC Gate Report — {{product_family}} SW Proposals

  ### Gate Decisions Summary
  | Sub-Project | Safety Class | PASS | FLAG | FAIL | Gate Decision |

  ### Cross-Proposal Check Heatmap
  | Check | SW-1 | SW-2 | SW-N | Pattern |
  (Highlight checks that FLAG/FAIL identically across ≥3 proposals)

  ### Systemic Gaps (appear in ≥3 proposals)
  | # | Gap | Root Cause | Fix Level |
  (Family-level gaps = fix once, apply to all. Document-level = fix individually.)

  ### Calibration Observations
  - Overscoring: checks that scored too harshly for the document type
  - Underscoring: checks that missed issues found by human review
  - New patterns: recurring findings that suggest new sub-checks

  ### Recommended Priority Actions
  1. Immediate (before any SW-Phase 1 starts)
  2. SW-Phase 1 tasks (resolve during SRS writing)
  3. Module-specific high-risk items

  ### Gate Verdict
  PROCEED / HUMAN REVIEW / BLOCKED — with rationale

EVIDENCE_REQUIRED: true
LOG_LEVEL: detailed — full 12-check report per proposal preserved for audit trail
```

---

## SW-SDLC DELEGATION WORKFLOW

```
HARDWARE PHASE 3/4 COMPLETE
    │
    ▼
P68 /sw-audit — Software Audit & Decomposition
    │  Scan all Phase 0→4 artifacts
    │  Extract software references (formal / partial / implied)
    │  Propose sub-project decomposition
    │  HITL: approve decomposition before proceeding
    │
    ▼ Decomposition approved ✅
    │
P69 /sw-proposal (×N parallel) — One per sub-project
    │  Extract requirements → SWR-xx-nn
    │  Define scope boundary + API contracts
    │  Map variant configurations
    │  Estimate effort per SW-SDLC phase
    │  HITL: review each proposal
    │
    ▼ All proposals drafted ✅
    │
P70 /sw-qc — QC Gate Batch Run
    │  12-check gate per proposal (parallel agents)
    │  Cross-compare for systemic gaps
    │  Calibration observations
    │  HITL: accept / deep-dive / fix systemic / other
    │
    ▼ QC Gate passed ✅
    │
SW-Phase 1: SRS (start with foundation layer)
    │  Foundation module first (e.g., FW) — its APIs unblock others
    │  Other modules can start SRS in parallel once APIs defined
    │
    ▼ SRS approved ✅
    │
SW-Phase 2→5: SAD → Implement → Integrate → Qualify
    │  Synchronize with HW at integration test points
    │  Gate reviews remain HITL at each SW phase transition
    │
    ▼ SW Qualified ✅ → feeds into P&B Phase 4 production gate
```

---

## ANTI-PATTERNS (from V-SMASH Session 48-49)

```
ANTI-PATTERN 1: Monolith Firmware
  ✗ "Write firmware for the weapon sight"
  ✓ Audit (P68) → Decompose by expertise × cadence × safety → Propose (P69) each
  Why: AI/ML iterates 10× faster than embedded FW. Safety Class C (AI) and A (comms)
       need different V&V rigor. Monolith = all modules at slowest cadence.

ANTI-PATTERN 2: Software as Hardware Appendix
  ✗ Mention "AI model" in Phase 1 requirements, never specify it separately
  ✓ After Phase 3/4, run P68 audit to extract ALL software references
  Why: By integration, you discover 13 critical gaps with no implementation spec.
       P68 catches this while there's still time to design properly.

ANTI-PATTERN 3: QC Each Proposal Independently
  ✗ Run /qc on each SW proposal one at a time, fix each independently
  ✓ Use P70 batch QC — cross-compare to find systemic gaps at family level
  Why: If all 4 proposals FLAG on "no TCVN clauses," the fix is ONE compliance
       mapping table at family level, not 4 separate tables.

ANTI-PATTERN 4: Starting SW-Phase 1 Without Foundation APIs
  ✗ Start SRS for AI module before firmware API contracts exist
  ✓ Foundation layer (FW) defines APIs first → other modules build against them
  Why: SW-AI needs sensor_capture(), display_render(), register_watchdog() — all
       defined by SW-FW. Without stable APIs, SW-AI writes to a moving target.
```

---

*Software SDLC Prompts v2.0 — 2026-03-04 | schema v3.0 (Workshop X Enhanced)*
*Prompts: P68 (/sw-audit), P69 (/sw-proposal), P70 (/sw-qc)*
*Origin: V-SMASH Sessions 48-49 — software audit + decomposition + QC gate batch*
