---
project: V-SMASH (Product Family)
phase: 0
type: orchestration-design
version: 1.5
created: 2026-02-21
updated: 2026-02-24
status: complete
pattern: 4 — Parallel Pipeline
skill: S2 — Multi-Agent Orchestration
products_covered: V-L, V-M, V-D, V-X, V-T, V-NV, V-P, V-R
source_docs:
  - V-SMASH_Conceptual_Design_Complete.md (product family architecture)
  - V-SMASH-L_Project_Master_Summary_v1.0.md (V-L at Phase 4 done)
  - V-SMASH-L_Embodiment_Design_v1.1.md (V-L design reference)
  - V-SMASH_Orchestration_Design_v1.0.md (S2 Pattern 2: engagement state machine)
  - V-SMASH-L_ODI_Report_v1.0.md (22 outcomes, 14 UNDERSERVED)
  - VN-12.7MM-SIM_Family_Orchestration_Design_v1.0.md (Pattern 4 reference)
  - SKILL_s2_orchestration.md (Pattern 4 template)
---

# V-SMASH — Product Family Orchestration Design

## S2 Pattern 4: Parallel Pipeline with Shared Resources

---

## Section 0: Procurement Narrative

The V-SMASH product family delivers a complete AI-powered fire control ecosystem for the Vietnamese People's Army — from entry-level clip-on aiming aids (V-SMASH-M) through infantry counter-drone (V-SMASH-L) and night-capable marksman systems (V-SMASH-PRO) to vehicle-integrated weapons stations (V-SMASH-RWS), plus autonomous perimeter detection (V-SMASH-D). Eight products share a common AI core (YOLO detection, Kalman tracking, ballistic computer), enabling rapid variant development and technology compounding across the force structure. V-SMASH-M and V-SMASH-L are developed **in parallel** — V-M validates its AI subset independently rather than waiting for V-L prototype results, accepting rework risk for faster time-to-market on the volume product.

Workshop X orchestrates this product family using a structured coordination framework that ensures:
- No product starts on unvalidated foundations (dependency gates)
- Shared resources (KN time, test lab, CNC shop, training data) are allocated by priority, not urgency
- Changes to the shared software core propagate systematically, not silently
- The fastest-revenue variants (V-X export, V-M volume, V-D recurring) fund development of the capability variants (V-NV, V-P, V-R)
- Two external dependencies (IRONMESH platform, MTB-20 vehicle) are tracked explicitly

This document defines the coordination architecture. Individual product design follows the standard Pahl & Beitz Phase 0-4 pipeline. Operational engagement orchestration follows [[V-SMASH_Orchestration_Design_v1.0|S2 Pattern 2: State Machine]] — shared across all variants.

---

## Section 1: Design Principles

### Principle 1: Meta-Pattern Coordination

Pattern 4 does not replace Pattern 3 — it coordinates multiple Pattern 3 instances. Each product runs its own Workflow Orchestration (Pattern 3) through design phases. Pattern 4 adds the layer that decides WHICH product gets work, WHEN dependencies are met, and HOW shared resources are allocated.

```
Pattern 4 (Coordination Layer)
  ├── V-L  → Phase 4 DONE → Prototype → Qualification → Production
  ├── V-M  → Pattern 3 (Phase 0→1→2→3→4) — PARALLEL with V-L (shared AI core, independent validation)
  ├── V-D  → Pattern 3 (Phase 0→1→2→3→4) — depends on V-L.Prototype.VALIDATED (detection)
  ├── V-X  → Pattern 3 (Phase 0→1→2→3→4) — depends on V-L.Phase3.LOCKED
  ├── V-T  → Pattern 3 (Phase 0→1→2→3→4) — depends on V-L.Prototype.VALIDATED + IRONMESH
  ├── V-NV → Pattern 3 (Phase 0→1→2→3→4) — depends on V-L.Prototype.VALIDATED
  ├── V-P  → Pattern 3 (Phase 0→1→2→3→4) — depends on V-L.Prototype.VALIDATED
  └── V-R  → Pattern 3 (Phase 0→1→2→3→4) — depends on V-P.Phase3.ACCEPTED + MTB-20
```

All 8 products share **Pattern 2 (State Machine)** at the operational level — the engagement cycle (STANDBY→ALERT→LOCKED→READY→ENGAGED→CONCLUDED) is identical in logic, parameterized per variant. (V-D uses detection subset only: STANDBY→ALERT→CONCLUDED.)

### Principle 2: Escalate, Don't Retry

Coordination errors are structural, not transient. When the system detects a resource conflict, dependency gap, or allocation violation, the correct response is to escalate to human judgment — not retry the same logic.

### Principle 3: State is the Single Source of Truth

Every coordination decision is based on file state, not session memory or inference. A-DEPEND checks state files, not "it should be done by now." If the file says BLOCKED, the product is BLOCKED.

### Principle 4: Fan-Out Sequencing (NEW — V-SMASH specific)

V-L is the foundation for 5 downstream products (V-D, V-X, V-T, V-NV, V-P). V-M is developed **in parallel** with V-L — it shares the AI core codebase but validates independently and is NOT blocked by V-L gates. Any change to V-L design after Phase 3 lock propagates to all 5 dependents (+ V-M via A-SYNC as non-blocking coordination). Therefore:
- V-L design freeze is the highest-leverage milestone in the family
- Post-freeze V-L changes require impact assessment across 5 dependents + V-M (non-blocking)
- HALT-4 (V-L regression) pauses up to 5 products simultaneously (+ V-R inherits from V-P chain = 6 total). V-M is NOT paused — it accepts rework risk independently.

This is structurally different from VN-12.7MM-SIM where fan-out was 2 (I-02 + I-08 from I-01). V-SMASH blocking fan-out = 5, plus V-M parallel = 6 total coordination targets.

---

## Section 2: Agent Architecture

### Master Agent

```
MASTER: V-SMASH Product Family Coordinator (PFC)
  Domain:    Cross-product scheduling, dependency enforcement, resource arbitration
  State:     Externalized to files (reads at session open, writes at session close)
  Scope:     Decides WHICH product gets work THIS session
  Cannot:    Execute design work directly — delegates to per-product Pattern 3 instance
  Cannot:    Approve cross-product gates — presents to KN, waits indefinitely
  Cannot:    Override 25h/week cap or 3h buffer — hard constraint, no exception
  Cannot:    Approve export compliance decisions (V-X) — regulatory, requires legal review
```

### Coordination Sub-Agents (Pattern 4 Layer)

| Agent | Domain | Steps | Scope Boundary | What It CANNOT Do |
|-------|--------|-------|----------------|-------------------|
| **A-SCHEDULE** | Resource allocation + conflict detection | S1, S2, S6, S10 | Computes allocation proposals, detects conflicts, enforces 25h cap across V-SMASH AND other product families | Cannot approve allocation. Cannot override buffer. Cannot allocate across family boundaries without KN. |
| **A-DEPEND** | Dependency resolution + cross-product gates | S3, S8 | Checks product state files against dependency map. Reports blocked/ready. Tracks 2 external dependencies. | Cannot declare product ready if dependency file shows incomplete. Cannot assess MTB-20 availability (external). |
| **A-SYNC** | Shared artifact propagation | S5 | Detects SW core changes, generates propagation checklist across 8 products, tracks versions. Also monitors training dataset additions. | Cannot auto-apply changes. Flags for review. Cannot propagate to V-X without export compliance check. |
| **A-TRACK** | Progress dashboard + timeline | S4, S9 | Reads all product state files, generates family dashboard, flags slips. Tracks against 4-year family timeline. | Cannot modify product state. Read-only across all products. |
| **A-EXPORT** | Export compliance tracking (NEW) | S11 | Monitors V-X design decisions against export control checklist. Flags ITAR/EAR-sensitive components. | Cannot approve export compliance. Flags only — legal review required for all decisions. |

### Per-Product Design Agents (Pattern 3 Instances)

```
V-L  (LITE — infantry rifle)      ── Phase 4 DONE → Prototype → Qualification → Production
V-M  (Micro — clip-on aiming aid) ── ACTIVE — parallel with V-L (shared AI core, independent validation)
V-D  (Detector — sentry node)     ── PARTIAL (Phase 0/1 can start, Phase 4 waits V-L EVT)
V-X  (Export — downgraded)        ── READY (DG-1 met: V-L Phase 3 locked)
V-T  (Trainer — laser + IRONMESH) ── PARTIAL (V-L done, IRONMESH pending for Phase 2+)
V-NV (Night Vision — thermal)     ── BLOCKED until V-L.Prototype.VALIDATED
V-P  (PRO — extended range)       ── BLOCKED until V-L.Prototype.VALIDATED
V-R  (RWS — vehicle mount)        ── BLOCKED until V-P.Phase3.ACCEPTED + MTB-20

Shared agent pool: A-ODI, A-REQ, A-CONCEPT, A-EMBODY, A-DETAIL, A-QC
(Stateless — same agents operate on different product state files)
```

### Architecture Diagram

```
┌──────────────────────────────────────────────────────────────────┐
│                   MASTER: V-SMASH Family Coordinator               │
│   Reads: family_state.md + allocation_tracker + dependency_map     │
│   Decides: which product, which phase, this session                │
├──────────────┬──────────┬──────────┬──────────┬─────────────────┤
│  A-SCHEDULE  │ A-DEPEND │  A-SYNC  │ A-TRACK  │   A-EXPORT      │
│  allocation  │ deps +   │ artifact │ progress │   export ctrl   │
│  + conflict  │ gates    │ propag.  │ dashboard│   (V-X only)    │
├──────────────┴──────────┴──────────┴──────────┴─────────────────┤
│                    DEPENDENCY MAP (DAG)                            │
│                                                                    │
│  V-L ────────────────── DONE (foundation product)                  │
│   ├── V-D ── DG-9 ──── V-L.Prototype.VALIDATED (detection)       │
│   ├── V-X ── DG-1 ──── V-L.Phase3.LOCKED (design stable)         │
│   ├── V-T ── DG-2 ──── V-L.Phase4.DONE ──┐                       │
│   │                     DG-3 ── IRONMESH ─┘ (Phase 2+ blocked)    │
│   ├── V-NV ─ DG-4 ──── V-L.Prototype.VALIDATED                   │
│   └── V-P ── DG-5 ──── V-L.Prototype.VALIDATED                   │
│        └── V-R ── DG-6 ── V-P.Phase3.ACCEPTED ──┐                │
│                    DG-7 ── MTB-20.AVAILABLE ─────┘                │
│                                                                    │
│  V-M ────────────────── PARALLEL (independent, shared AI core)    │
│   (no dependency gate — A-SYNC coordinates SW core, non-blocking) │
├──────────────────────────────────────────────────────────────────┤
│               PER-PRODUCT PATTERN 3 INSTANCES                      │
│                                                                    │
│  V-L  ─→ [P4✅]→[Proto]→[Qual]→[Prod]  (10 mo to production)    │
│  V-M  ─→ [P0]→[P1]→[P2]→[P3]→[P4]     (12 mo, PARALLEL w/ V-L) │
│  V-D  ─→ [P0/P1]→WAIT→[P2]→[P3]→[P4]  (10 mo, detection only)  │
│  V-X  ─→ [P0]→[P1]→[P2]→[P3]→[P4]     (3-4 mo, feature-remove) │
│  V-T  ─→ [P0/P1]→WAIT→[P2]→[P3]→[P4]  (6 mo, needs IRONMESH)  │
│  V-NV ─→ [BLOCKED]→[P0]→[P1]→...       (8 mo, thermal R&D)     │
│  V-P  ─→ [BLOCKED]→[P0]→[P1]→...       (12 mo, full dev)       │
│  V-R  ─→ [BLOCKED]─────→[P0]→[P1]→...  (12 mo, needs V-P+MTB)  │
│                                                                    │
│  Each instance: A-ODI / A-REQ / A-CONCEPT / A-EMBODY /            │
│                 A-DETAIL / A-QC (shared, stateless)                │
│  Each instance ALSO contains: Pattern 2 (engagement state machine) │
│                 parameterized per variant (V-D: detection subset)   │
└──────────────────────────────────────────────────────────────────┘
```

### Shared Resource Map

| Resource | Capacity | Products Competing | Arbitration Rule |
|----------|----------|--------------------|------------------|
| **KN time** | 25h/week (3h buffer) — shared with VN-12.7MM-SIM | All 8 | A-SCHEDULE proposes, KN approves. Default: V-L > V-X > V-D > V-M > V-T > V-NV > V-P > V-R |
| **AI training data** | Cumulative (16K+ images, growing) | All 8 (shared dataset) | V-L generates baseline. Each variant adds domain-specific images. A-SYNC tracks dataset version. |
| **SW core** | Shared C++ codebase (~4200 LOC) | All 8 (V-M and V-D use subsets) | V-L is canonical reference. Changes propagate via A-SYNC. V-X propagation requires A-EXPORT check. V-M/V-D use detection+tracking subset (no fire gate). **V-M receives propagation as non-blocking coordination** (incorporates when ready, not blocked by). |
| **MIL-STD test lab** | 1 certified lab, serial booking | V-L now → V-X → V-M → V-D → V-NV → V-P → V-R | Book 4+ months ahead. V-L qualification is current priority. V-M/V-D have lighter test requirements (no recoil, no fire gate). |
| **Local CNC shop** | 1 shop, serial jobs | V-L, V-NV, V-P, V-R (V-X reuses V-L housing, V-T/V-M minimal, V-D new but simple) | V-L first. Others queue based on dependency readiness. |
| **Pattern 2 state machine** | Shared engagement logic | All 8 (parameterized) | V-L is reference implementation. Variants modify sensor inputs + thresholds. V-D uses detection subset only (no tracking/fire states). V-M uses tracking subset (no fire gate states). |

### Priority Rationale

| Rank | Product | Why This Priority |
|------|---------|-------------------|
| 1 | V-L | Foundation for all others. Prototype validation unlocks 6 downstream products. |
| 2 | V-X | Fastest revenue after V-L. Feature removal, not feature addition. Export market $$$. |
| 3 | V-D | IRONMESH anchor. Recurring revenue ($500-1K/yr/unit). New market (base security). 10 mo. |
| 4 | V-M | Volume play. PARALLEL with V-L — no gate dependency. Drives IRONMESH device count (1,000 nodes). Lowest BOM ($500). 12 mo. |
| 5 | V-T | IRONMESH ecosystem entry. Recurring revenue (training data platform). Low HW effort. |
| 6 | V-NV | High military value (night ops). Thermal sensor R&D has long lead. |
| 7 | V-P | Full capability upgrade. Depends on V-L + thermal from V-NV (potential reuse). |
| 8 | V-R | Vehicle integration. Longest timeline, most external dependencies. |

---

## Section 3: Process Graph — Task() Delegation

### Session-Opening Protocol (MANDATORY)

```
Master reads coordination state:
  1. Read family_state.md         → all 8 product phases + blocked/active status
  2. Read allocation_tracker.md   → hours remaining this week (across ALL families)
  3. Read dependency_map.md       → which products blocked, which gates pending
  4. Read sw_core_changelog.md    → any pending propagation (check export flag for V-X)
  5. Read progress.md (last entry)→ what was done last session
  6. Read external_deps.md        → IRONMESH status, MTB-20 status (updated by KN)

Only AFTER all 6 → Master has valid state → present SR checkpoint to KN
```

Note: 6-file read (vs 5 for VN-12.7MM-SIM) because V-SMASH has external dependencies that need separate tracking.

### Coordination Flow

```
SESSION OPEN
  │
  ├─→ A-TRACK: Task("Generate family dashboard from state files")
  │     Returns: {products: [{id, phase, status, %_complete, next_gate}], flags: [...]}
  │
  ├─→ A-SCHEDULE: Task("Propose session allocation given hours_remaining and priorities")
  │     Returns: {recommendation: "Work on V-XX", reason: "...", alternatives: [...]}
  │     Note: must check VN-12.7MM-SIM allocation too (shared KN time)
  │
  ├─→ A-DEPEND: Task("Check dependency status for all blocked products")
  │     Returns: {V-NV: {status: BLOCKED, missing: [...]}, V-R: {status: BLOCKED, missing: [...]}, ...}
  │
  ├─→ A-EXPORT: Task("Check V-X export compliance status if V-X is active")
  │     Returns: {compliance_items: [{item, status, blocker}]}
  │
  └─→ HITL: SR checkpoint → KN confirms or overrides product selection
        │
        ├─ If conflict detected → HITL: CA checkpoint → KN arbitrates
        │
        └─ Product selected → Dispatch to per-product Pattern 3 instance
             │
             ├─→ Task("Execute Phase {{N}} work on V-XX using Pattern 3 agents")
             │     Pattern 3 handles: phase agents, QC, per-product gates
             │
             └─→ On completion:
                   ├─→ A-SYNC: Task("Check for shared artifact changes")
                   │     If changes → HITL: AP checkpoint → KN approves propagation
                   │     If V-X affected → A-EXPORT: check before propagation
                   │
                   ├─→ A-TRACK: Task("Update family_state.md with session results")
                   │
                   └─→ If Friday → HITL: WR checkpoint → KN approves next week allocation
```

### Cross-Product Gate Flow

```
Product V-NV requests Phase 0 start:
  │
  ├─→ A-DEPEND: Task("Verify DG-4: V-L.Prototype.VALIDATED")
  │     Reads: V-L_state.md → checks prototype_validation field
  │     Reads: V-L DVT test results → checks for open CRITICAL failures
  │     Returns: {gate: "DG-4", evidence: [...], verdict: PASS/FAIL}
  │
  └─→ HITL: DG checkpoint → KN reviews evidence
        │
        ├─ APPROVE → V-NV status changes BLOCKED → ACTIVE
        ├─ BLOCK → V-NV remains BLOCKED, missing criteria listed
        └─ PARTIAL → V-NV starts Phase 0/1 only, Phase 2+ blocked
```

### Fan-Out Regression Detection (V-SMASH specific)

```
V-L Prototype fails DVT → regression detected:
  │
  ├─→ A-DEPEND: Task("Check ALL products that depend on V-L")
  │     Returns: {affected: ["V-D", "V-X", "V-T", "V-NV", "V-P"], parallel_notify: ["V-M"]}
  │     Note: 5 products blocked (fan-out = 5). V-M notified but NOT paused (parallel track).
  │
  └─→ HALT-4 triggered → Master immediately:
        ├─ Flags V-D as PAUSED (dependency regression — detection model)
        ├─ Flags V-X as PAUSED (dependency regression)
        ├─ Flags V-T as PAUSED
        ├─ Flags V-NV as PAUSED (if started)
        ├─ Flags V-P as PAUSED (if started)
        ├─ V-R inherits pause from V-P chain
        ├─ NOTIFIES V-M: "V-L regression detected — shared AI core affected. Assess V-M rework."
        │   (V-M decides independently: continue or voluntary pause — KN decides)
        ├─ Presents to KN: "V-L prototype failure. 6 downstream products affected (5 paused + V-M notified)."
        └─ KN decides per-product: continue (if Phase 0/1 unaffected) or halt
```

This is the highest-consequence coordination event in the family. A single V-L regression cascades to 6 products (5 paused + V-M risk-notified). V-M's parallel status means it continues unless KN explicitly pauses it — accepting rework risk for time-to-market.

### External Dependency Tracking

```
IRONMESH status check (for V-T):
  │
  ├─→ A-DEPEND: Task("Check external_deps.md for IRONMESH.API.ready")
  │     Returns: {status: NOT_READY, last_update: "2026-02-20", blocker: "coaching API not documented"}
  │
  └─→ V-T stays PARTIAL (Phase 0/1 can proceed, Phase 2+ blocked)
       Master logs: "V-T Phase 2 requires IRONMESH. Current status: {{status}}"
       No retry — KN updates external_deps.md when IRONMESH status changes

MTB-20 status check (for V-R):
  │
  ├─→ A-DEPEND: Task("Check external_deps.md for MTB-20.Interface.AVAILABLE")
  │     Returns: {status: NOT_AVAILABLE, reason: "vehicle platform not yet delivered by MoD"}
  │
  └─→ V-R stays BLOCKED
       Note: MTB-20 is entirely outside Workshop X. Cannot be accelerated.
```

---

## Section 4: Conditional Edges

### Coordination Layer Edges

| Step | Trigger | Edge | Action | After Max |
|------|---------|------|--------|-----------|
| **S1 Portfolio Intake** | Misread timeline | Retry (×2) | Re-read source doc | Escalate → KN |
| | Cross-family conflict (V-SMASH vs VN-12.7MM-SIM) | Escalate | Present tradeoff to KN | KN decides |
| **S2 Resource Allocation** | Sum > 22h allocatable | Retry (×1) | Re-propose, cut lowest priority | Escalate → KN cuts product |
| | Test lab collision (2 products need same window) | Escalate | KN decides which books first | — |
| | CNC shop contention | Reroute | Queue by dependency readiness | — |
| **S3 Dependency Resolution** | Ambiguous state | Retry (×1) | Re-read with explicit criteria | Escalate → KN interprets |
| | Dependency not met | Reroute | Work on dependency product instead | — |
| | Dependency file missing | **Halt** | File must exist before proceeding | KN creates file |
| | External dep status unknown | Escalate | KN contacts external party | — |
| **S4 Phase Dispatch** | Wrong phase | Retry (×1) | Re-read progress file | Escalate → KN |
| | All products blocked | Escalate | KN decides: cross-cut work or wait | — |
| **S5 Artifact Sync** | Incomplete propagation | Retry (×1) | Regenerate from change log | Escalate → KN |
| | Breaking change downstream | Reroute | Flag BEFORE propagation | KN decides |
| | Safety-critical param change | **Halt** | All downstream products frozen | KN + QC gate |
| | **V-X export flag triggered** | **Halt** | A-EXPORT reviews before propagation | Legal review required |
| **S6 Conflict Detection** | False positive | Retry (×1) | Re-check allocation tracker | — |
| | Confirmed conflict | Reroute | → S7 Priority Arbitration | — |
| **S7 Priority Arbitration** | Resource conflict | Escalate (always) | AI presents tradeoff, KN decides | — |
| | **Cross-family conflict** | Escalate (always) | V-SMASH vs VN-12.7MM-SIM allocation | KN decides |
| **S8 Cross-Product Gate** | Gate rejected | Reroute | Return to source product | — |
| | Dependency regressed | **Halt** (HALT-4) | Up to 6 dependents paused (+ V-M notified) | KN reassesses |
| | Premature request | **Block** | A-DEPEND refuses, shows missing | — |
| **S9 Progress Tracking** | File read error | Retry (×2) | Re-read with path check | Escalate |
| | Slip >2 weeks on V-L | **Escalate immediately** | V-L slip cascades to entire family | KN decides |
| | Slip >2 weeks on non-V-L | Escalate | KN decides: rebalance or accept | — |
| **S10 Rebalancing** | Violates 22h cap | Retry (×1) | Re-propose within constraint | Escalate → KN cuts scope |
| | >2 weeks over-commitment | **Halt** | A-SYSTEMS archetype (B3 Depletion) | — |
| **S11 Export Compliance** | Controlled component in V-X | **Halt** | Design change or legal review | Cannot proceed without resolution |
| | Export reg change | Escalate | KN + legal assess impact | — |

### Four Safety Halt Conditions (Absolute — No Override)

```
HALT-1: Dependency file missing or corrupt
        → No product advances without valid state file
        → Master cannot infer state from memory

HALT-2: Breaking change to safety-critical shared parameter
        → All downstream products frozen until QC + KN review
        → A-SYNC cannot propagate without explicit approval
        → Especially critical: trigger gate timing, IFF threshold, solution_quality floor

HALT-3: Dependency product regressed after dependent product started
        → Dependent product immediately paused
        → Cannot continue building on invalidated foundation

HALT-4: V-L foundation regression (NEW — V-SMASH specific)
        → 5 downstream products paused simultaneously (V-D, V-X, V-T, V-NV, V-P)
        → V-R inherits pause from V-P chain → effectively 6 products paused
        → V-M NOTIFIED but NOT paused (parallel track — KN decides: continue or voluntary pause)
        → This is the highest-consequence halt in either product family
        → Prevention: V-L design freeze enforced after Phase 3 lock
```

### Edge Design Principle (same as VN-12.7MM-SIM)

Pattern 4 edges are primarily ESCALATE and HALT, not RETRY.

| Pattern | Primary Edge | Why |
|---------|-------------|-----|
| 1 (Pipeline) | Retry → Escalate | Transient errors in sequential steps |
| 2 (State Machine) | None → Manual mode | Real-time, no retry budget |
| 3 (Workflow) | Reroute → Pause | Phase-level rework |
| **4 (Parallel Pipeline)** | **Escalate → Halt** | **Coordination errors are structural** |

---

## Section 5: HITL Checkpoint Register

### Checkpoint Types

| Type | Code | When | Frequency | Authority | Time |
|------|------|------|-----------|-----------|------|
| Session Routing | SR | Session open | Every session | KN | 5–10 min |
| Conflict Arbitration | CA | Resource conflict | ~2-3×/week (6 products = more conflicts) | KN | 5–15 min |
| Dependency Gate | DG | Dependent product advances | 8 total in family (DG-8 removed — V-M parallel) | KN | 15–30 min |
| Weekly Rebalance | WR | Friday close | Weekly | KN | 15–20 min |
| Artifact Propagation | AP | SW core change | As needed | KN | 10–20 min |
| Export Review | XR | V-X design decision | As needed (V-X active only) | KN + Legal | 20–45 min |
| Family Milestone | FM | Major milestone | ~Quarterly | KN | 30–60 min |

### SR — Session Routing

```yaml
id: "SR-{{session_number}}"
trigger: "Session open, after 6-file read protocol"
agent: "A-TRACK dashboard + A-SCHEDULE recommendation + A-DEPEND blocks + A-EXPORT (if V-X active)"
info_package:
  - "Family dashboard: each product phase + % complete"
  - "Recommendation: 'Work on V-XX because {{reason}}'"
  - "Blocked products: which, why, what unblocks"
  - "Hours remaining: {{N}} of 22h (note: shared with VN-12.7MM-SIM)"
  - "External deps: IRONMESH status, MTB-20 status"
decision_format:
  confirm: "Work on recommended product"
  override: "Work on different product (state reason)"
  cross_cut: "No product work — QC / D-M-I-R / B-NS"
  cross_family: "Work on VN-12.7MM-SIM instead (state reason)"
master_behavior: "Present → wait → never auto-route"
```

### CA — Conflict Arbitration

```yaml
id: "CA-{{product_A}}-{{product_B}}-{{resource}}"
trigger: "A-SCHEDULE detects two products need same resource"
info_package:
  - "Products: V-XX vs V-YY"
  - "Resource: KN time / test lab / CNC shop / training data curation"
  - "Impact A: V-XX advances, V-YY slips {{N}} days"
  - "Impact B: V-YY advances, V-XX slips {{N}} days"
decision_format:
  A: "Prioritize V-XX"
  B: "Prioritize V-YY"
  C: "Split resource (if divisible)"
  D: "Defer both"
standing_priority: "V-L > V-X > V-D > V-M > V-T > V-NV > V-P > V-R (KN can override)"
note: "8 products = 28 possible pairwise conflicts. Standing priority reduces most to non-decisions."
```

### DG — Dependency Gates

Eight gates exist in this product family (DG-8 removed — V-M is parallel with V-L, no blocking gate):

```yaml
DG-1:
  dependent: "V-X (Export)"
  requires: "V-L.Phase3.LOCKED"
  evidence:
    - "V-L design freeze document signed"
    - "V-L BOM finalized (components identified for export review)"
    - "No open CRITICAL flags on V-L Phase 3"
  partial_allowed: false
  note: "V-X is feature-removal, so V-L design must be STABLE."

DG-2:
  dependent: "V-T (Trainer)"
  requires: "V-L.Phase4.DONE"
  evidence:
    - "V-L prototype hardware validated (same optic + AI)"
    - "V-L fire control state machine tested"
    - "V-L software interface for data export documented"
  partial_allowed: true  # Phase 0/1 can start, Phase 2+ needs IRONMESH

DG-3:
  dependent: "V-T (Trainer)"
  requires: "IRONMESH.API.ready"
  evidence:
    - "IRONMESH training data API documented"
    - "IRONMESH scoring integration tested on ≥1 product"
    - "IRONMESH session recording format defined"
  partial_allowed: true  # Phase 0/1 can proceed without
  external: true  # Outside Workshop X — KN updates manually

DG-4:
  dependent: "V-NV (Night Vision)"
  requires: "V-L.Prototype.VALIDATED"
  evidence:
    - "V-L DVT testing passed (core AI + tracking proven)"
    - "V-L YOLO model performance verified on physical hardware"
    - "Thermal sensor procurement pipeline assessed (lead time, cost)"
  partial_allowed: false

DG-5:
  dependent: "V-P (PRO)"
  requires: "V-L.Prototype.VALIDATED"
  evidence:
    - "Same as DG-4"
    - "V-L production cost confirmed (validates cost model for V-P)"
    - "Lessons from V-L prototype captured (DfM issues, thermal, etc.)"
  partial_allowed: false

DG-6:
  dependent: "V-R (RWS)"
  requires: "V-P.Phase3.ACCEPTED"
  evidence:
    - "V-P thermal sensor fusion validated"
    - "V-P Deep SORT multi-target tracking tested"
    - "V-P software architecture supports vehicle integration hooks"
  partial_allowed: false

DG-7:
  dependent: "V-R (RWS)"
  requires: "MTB-20.Interface.AVAILABLE"
  evidence:
    - "MTB-20 CAN bus interface specification received"
    - "MTB-20 electronic trigger protocol documented"
    - "Physical MTB-20 available for integration testing"
  partial_allowed: true  # Phase 0/1 can design to published MTB-20 specs
  external: true  # MoD procurement — completely outside WX control

# DG-8 REMOVED (v1.2): V-M is now PARALLEL with V-L.
# V-M shares the AI core codebase via A-SYNC but validates independently.
# Rationale: V-M is a functional SUBSET of V-L ($500 clip-on, no fire gate).
# V-M accepts rework risk if V-L prototype reveals AI core issues.
# A-SYNC propagation to V-M is NON-BLOCKING coordination, not a dependency gate.

DG-9:
  dependent: "V-D (Sentry Detector)"
  requires: "V-L.Prototype.VALIDATED"
  evidence:
    - "V-L YOLOv8-nano detection accuracy verified (≥95% TP, ≤5% FP)"
    - "V-L classification model performance confirmed (4-class: HOSTILE/FRIENDLY/BIRD/UNKNOWN)"
    - "V-L false positive rate measured under representative conditions"
  partial_allowed: true  # Phase 0/1 can start independently
  note: "V-D uses DETECTION SUBSET only (no tracking, no ballistic, no fire gate). FP rate is critical — V-D is unmanned, so FP erodes trust fast. IRONMESH is a soft dependency (V1 works standalone via Zalo alerts)."

decision_format:
  approve: "Dependency met, product unblocked"
  block: "Dependency not met, show missing criteria"
  partial: "Start Phase 0/1 only, block Phase 2+"
```

### XR — Export Review (NEW — V-SMASH specific)

```yaml
id: "XR-{{component_or_decision}}"
trigger: "A-EXPORT flags controlled component or capability in V-X design"
info_package:
  - "Component/capability flagged: {{description}}"
  - "Export control regime: ITAR / EAR / Wassenaar / Vietnam export law"
  - "Options: remove / downgrade / seek license"
  - "Impact on V-X capability if removed"
decision_format:
  remove: "Remove component/capability from V-X"
  downgrade: "Reduce capability to below control threshold"
  license: "Seek export license (timeline: {{estimate}})"
  defer: "Park decision, continue with other V-X work"
authority: "KN + legal counsel"
note: "V-X is the only product requiring export review. V-L through V-R are domestic."
```

### WR — Weekly Rebalance

```yaml
id: "WR-W{{week_number}}"
trigger: "Friday close (before /reflect)"
info_package:
  - "Planned vs actual hours per product (V-SMASH + VN-12.7MM-SIM)"
  - "Progress delta: planned vs done"
  - "Constraint: what blocked progress"
  - "External deps update: IRONMESH, MTB-20"
  - "Next week proposed allocation (within 22h cap)"
decision_format:
  approve: "Accept next week allocation"
  adjust: "Modify specific product hours"
  escalate: "Structural problem → A-SYSTEMS"
```

### HITL Time Budget (Coordination Layer)

| Checkpoint | Frequency | Time Each | Weekly Total |
|------------|-----------|-----------|-------------|
| SR (Session Routing) | ~4×/week | 8 min | 32 min |
| CA (Conflict Arbitration) | ~3×/week | 10 min | 30 min |
| WR (Weekly Rebalance) | 1×/week | 20 min | 20 min |
| AP (Artifact Propagation) | ~0.5×/week | 15 min | 8 min |
| XR (Export Review) | ~0.25×/week | 30 min | 8 min |
| DG (Dependency Gate) | rare | 22 min | ~0 (amortized) |
| FM (Family Milestone) | quarterly | 45 min | ~2 min (amortized) |
| **TOTAL** | | | **~100 min/week** |

Note: V-SMASH coordination overhead (~100 min) is higher than VN-12.7MM-SIM (~65 min) because 8 products generate more conflicts (28 pairwise vs 15) and add export compliance. Combined family overhead (V-SMASH + VN-12.7MM-SIM) = ~165 min/week = ~2.75h = 11% of 25h capacity. Approaching the 10% target cap — mitigation: standing priority order + V-D shares most design patterns with V-L, reducing unique coordination. V-M parallel development actually **reduces** DG overhead (one fewer gate review) but **increases** A-SYNC coordination (V-M must actively incorporate V-L SW core changes rather than being blocked until gate passes).

Two-layer HITL: Pattern 4 coordination (~1.5h/week) + Pattern 3 per-product (~2-3h/week per active product).

---

## Section 6: Loop Prevention Rules

### Rule 1: No Circular Dependencies

```
The dependency map is a DAG (directed acyclic graph).
  V-L  → independent (foundation)
  V-M  → PARALLEL with V-L (shared AI core via A-SYNC, no blocking dependency)
  V-D  → depends on V-L (detection subset)
  V-X  → depends on V-L
  V-T  → depends on V-L AND IRONMESH (external)
  V-NV → depends on V-L
  V-P  → depends on V-L
  V-R  → depends on V-P AND MTB-20 (external)

No product can depend on a product that depends on it.
If a circular dependency is ever detected → HALT → architecture is wrong.

Note: V-NV thermal sensor R&D could BENEFIT V-P.
This is a reuse opportunity, NOT a dependency.
V-P does not REQUIRE V-NV — it can do its own thermal integration.
If V-NV thermal work is available when V-P reaches Phase 2, reuse it.
If not, V-P proceeds independently.
```

### Rule 2: No Infinite Rescheduling

```
A-SCHEDULE proposes allocation.
If KN rejects → A-SCHEDULE re-proposes ONCE with different parameters.
If rejected again → KN writes allocation manually.
A-SCHEDULE never proposes more than 2× per session.
```

### Rule 3: No Dependency Gate Re-Litigation

```
Once DG-4 is APPROVED, V-NV is unblocked permanently (unless HALT-3/4 triggered).
A-DEPEND does not re-check passed gates every session.
Only HALT-3/4 (dependency regression) can re-block an approved product.
```

### Rule 4: No Propagation Loops

```
A-SYNC propagates changes downstream only:
  V-L → V-D, V-X, V-T, V-NV, V-P (blocking fan-out = 5)
  V-L → V-M (non-blocking coordination — V-M incorporates when ready)
  V-P → V-R (fan-out = 1)

Downstream products NEVER propagate changes upstream.
V-M NEVER propagates changes to V-L (even though parallel).
If any product needs a SW core change → file a change request on V-L.
V-L is always the canonical reference for shared software.

V-X has additional constraint: propagation requires A-EXPORT check.
```

### Rule 5: No Phantom Work

```
Master only dispatches work to ACTIVE or PARTIAL products (not BLOCKED).
A-TRACK verifies product status before any Task() delegation.
If product is BLOCKED → Master cannot "start early" or "do preliminary work."
Exception: DG with PARTIAL decision allows Phase 0/1 only.
Current ACTIVE (parallel): V-M (all phases — parallel with V-L, no gate)
Current PARTIAL products: V-D (Phase 0/1 allowed, Phase 4 waits V-L EVT),
                          V-T (Phase 0/1 allowed, Phase 2+ needs IRONMESH)
```

### Rule 6: No Cross-Family Leakage (NEW)

```
V-SMASH allocation and VN-12.7MM-SIM allocation are tracked separately.
A-SCHEDULE presents both in the SR checkpoint.
KN decides cross-family allocation at WR (Friday).
Master cannot silently borrow hours from one family for the other.
If conflict: → HITL: CA checkpoint with cross_family flag.
```

---

## Section 7: Reusable YAML Template

### Template: Product Family State File

```yaml
# family_state.md — update at session close
family:
  name: "V-SMASH"
  code: "V-SMASH-001"
  updated: "{{YYYY-MM-DD}}"
  total_products: 8
  active: 0
  blocked: 0
  partial: 0
  complete: 0

products:
  - id: "V-L"
    name: "V-SMASH-L"
    status: "COMPLETE"  # Phase 4 done, in prototype build
    current_phase: "Prototype Build"
    phase_pct: "0%"  # of prototype+qualification+production path
    next_gate: "DVT Review"
    blocked_by: null
    timeline: "10 months to production"
    start_date: "2026-01-18"
    target_delivery: "2026-10-01"
    is_foundation: true

  - id: "V-M"
    name: "V-SMASH-M (Micro-Sight)"
    status: "ACTIVE"  # PARALLEL with V-L — no blocking dependency gate
    current_phase: "0"
    phase_pct: "{{0-100}}%"
    next_gate: null  # No DG — V-M validates independently
    blocked_by: null
    timeline: "12 months"
    parallel_with: "V-L"  # Shares AI core via A-SYNC (non-blocking)
    rework_risk: "If V-L prototype reveals AI core issue, V-M may need rework"
    note: "Subset of V-L: no fire gate, smaller optic, lead indicator only"

  - id: "V-D"
    name: "V-SMASH-D (Sentry Detector)"
    status: "PARTIAL"
    current_phase: "0"  # Phase 0/1 can start, Phase 4 waits V-L EVT
    phase_pct: "{{0-100}}%"
    next_gate: "DG-9"
    blocked_by: "V-L.Prototype.VALIDATED"  # DG-9 for Phase 4
    timeline: "10 months"
    ironmesh_status: "SOFT_DEPENDENCY"  # V1 works standalone
    note: "Detection only, no weapon interface. IRONMESH subscription = recurring revenue."

  - id: "V-X"
    name: "V-SMASH-X (Export)"
    status: "ACTIVE | BLOCKED | PAUSED | COMPLETE"
    current_phase: "{{0-4}}"
    phase_pct: "{{0-100}}%"
    next_gate: "{{Phase N gate}}"
    blocked_by: "V-L.Phase3.LOCKED"  # DG-1
    timeline: "3-4 months"
    export_compliance: "PENDING | REVIEWED | APPROVED"

  - id: "V-T"
    name: "V-SMASH-T (Trainer)"
    status: "PARTIAL"
    current_phase: "{{0-1 max until IRONMESH}}"
    blocked_by: "IRONMESH.API.ready"  # DG-3 for Phase 2+
    ironmesh_status: "NOT_READY"

  - id: "V-NV"
    name: "V-SMASH-NV (Night Vision)"
    status: "BLOCKED"
    blocked_by: "V-L.Prototype.VALIDATED"  # DG-4

  - id: "V-P"
    name: "V-SMASH-PRO"
    status: "BLOCKED"
    blocked_by: "V-L.Prototype.VALIDATED"  # DG-5

  - id: "V-R"
    name: "V-SMASH-RWS"
    status: "BLOCKED"
    blocked_by: "V-P.Phase3.ACCEPTED AND MTB-20.Interface.AVAILABLE"  # DG-6 + DG-7

dependencies:
  - gate: "DG-1"
    dependent: "V-X"
    requires: "V-L.Phase3.LOCKED"
    status: "APPROVED"  # V-L Phase 3 is done
  - gate: "DG-2"
    dependent: "V-T"
    requires: "V-L.Phase4.DONE"
    status: "APPROVED"  # V-L Phase 4 is done
  - gate: "DG-3"
    dependent: "V-T"
    requires: "IRONMESH.API.ready"
    status: "PENDING"
    external: true
  - gate: "DG-4"
    dependent: "V-NV"
    requires: "V-L.Prototype.VALIDATED"
    status: "PENDING"
  - gate: "DG-5"
    dependent: "V-P"
    requires: "V-L.Prototype.VALIDATED"
    status: "PENDING"
  - gate: "DG-6"
    dependent: "V-R"
    requires: "V-P.Phase3.ACCEPTED"
    status: "PENDING"
  - gate: "DG-7"
    dependent: "V-R"
    requires: "MTB-20.Interface.AVAILABLE"
    status: "PENDING"
    external: true
  # DG-8 REMOVED (v1.2): V-M is now PARALLEL with V-L — no blocking gate.
  # V-M shares AI core via A-SYNC (non-blocking coordination).
  - gate: "DG-9"
    dependent: "V-D"
    requires: "V-L.Prototype.VALIDATED"
    status: "PENDING"
    partial_allowed: true

shared_resources:
  - resource: "KN time"
    capacity: "22h/week allocatable"
    note: "Shared with VN-12.7MM-SIM family"
  - resource: "SW core"
    reference_product: "V-L"
    version: "1.0"
    last_change: "{{YYYY-MM-DD}}"
    pending_propagation: []
  - resource: "AI training data"
    version: "{{N}}.0"
    total_images: 16000
    last_addition: "{{YYYY-MM-DD}}"
  - resource: "MIL-STD test lab"
    current_booking: "V-L qualification"
    next_available: "{{YYYY-MM-DD}}"
  - resource: "CNC shop"
    current_job: "V-L prototype housing"
    queue: []

external_dependencies:
  - name: "IRONMESH"
    status: "NOT_READY"
    required_by: ["V-T"]
    soft_dependency: ["V-D"]  # V-D V1 works standalone, IRONMESH enables mesh mode + recurring revenue
    last_checked: "{{YYYY-MM-DD}}"
    blocker: "coaching API not documented"
  - name: "MTB-20"
    status: "NOT_AVAILABLE"
    required_by: ["V-R"]
    last_checked: "{{YYYY-MM-DD}}"
    blocker: "vehicle platform not yet delivered by MoD"
```

---

## Section 8: Pattern Library Reference

### Pattern 4 in the Taxonomy — V-SMASH vs VN-12.7MM-SIM

| Aspect | VN-12.7MM-SIM (P4 ref) | **V-SMASH (P4 new)** |
|--------|-------------------------|----------------------|
| **Products** | 4 (I-01/I-09/I-02/I-08) | **8 (V-L/V-M/V-D/V-X/V-T/V-NV/V-P/V-R)** |
| **Dependency shape** | DAG (fork from I-01, 2 branches) | **DAG (fan-out from V-L, 6 branches + V-R chain)** |
| **Fan-out** | 2 (I-02, I-08 from I-01) | **5 blocking (V-D, V-X, V-T, V-NV, V-P from V-L) + V-M parallel** |
| **External deps** | 0 | **2 (IRONMESH, MTB-20)** |
| **Lead product status** | Phase 0 done | **Phase 4 DONE** |
| **Product type mix** | HW, HW variant, SW-only, AI/ML | **HW gradient ($500→$25K), export, trainer, detection-only, volume** |
| **Export compliance** | N/A | **Required for V-X** |
| **Shared operational pattern** | N/A | **Pattern 2 state machine across all 8 (V-D: detection subset)** |
| **Coordination agents** | 4 (SCHEDULE/DEPEND/SYNC/TRACK) | **5 (+A-EXPORT)** |
| **Dependency gates** | 3 (DG-1/2/3) | **8 active (DG-1–7, DG-9; DG-8 removed — V-M parallel)** |
| **Max halt cascade** | 2 products | **6 products (HALT-4: 5 paused + V-R chain; V-M notified)** |
| **Coordination overhead** | ~65 min/week | **~100 min/week** |
| **Cross-family conflict** | N/A (standalone) | **V-SMASH competes with VN-12.7MM-SIM for KN time** |

### What Was Reused from VN-12.7MM-SIM Pattern 4

| Element | Source | How It Was Reused |
|---------|--------|-------------------|
| Master-clone framework | VN-12.7MM-SIM §1 | Identical: Master coordinates, sub-agents stateless |
| Session-opening protocol | VN-12.7MM-SIM §3 | Extended: 6 files (added external_deps.md) |
| Dependency gate structure | VN-12.7MM-SIM §5 | Same YAML template, more gates (7 vs 3) |
| Halt conditions | VN-12.7MM-SIM §4 | Extended: HALT-4 for fan-out regression |
| HITL checkpoint types | VN-12.7MM-SIM §5 | Extended: added XR (Export Review) |
| Loop prevention rules | VN-12.7MM-SIM §6 | Extended: Rule 6 (cross-family leakage) |

### What Is Genuinely New in V-SMASH Pattern 4

1. **Fan-out = 5 blocking + 1 parallel** — V-L regression cascades to 6 products (5 paused + V-R chain; V-M notified but not paused). VN-12.7MM-SIM max cascade = 2.
2. **External dependencies (2)** — IRONMESH and MTB-20 are outside Workshop X control. Tracked in separate file, KN updates manually.
3. **A-EXPORT agent** — Export compliance is a first-class coordination concern, not an afterthought.
4. **Cross-family resource competition** — V-SMASH and VN-12.7MM-SIM share KN time. Rule 6 prevents silent leakage.
5. **Shared operational pattern (Pattern 2)** — All 8 products run the same engagement state machine (V-D: detection subset, V-M: tracking subset without fire gate), parameterized per variant. This is a 3-layer orchestration: Pattern 4 (family) → Pattern 3 (per-product design) → Pattern 2 (operational engagement).
9. **Parallel development track (V-M)** — V-M is the first WX product developed in parallel with its foundation product rather than sequentially gated. Accepts rework risk for time-to-market. A-SYNC provides non-blocking coordination instead of DG-8 blocking gate.
6. **HW complexity gradient** — Products span $500 (V-M) to $25K (V-R). Eight products across 4 tiers: entry ($500), standard ($800-$3K), professional ($4.5K-$5K), platform ($8K-$25K). Dependency gates validate capability per tier.
7. **Revenue-first sequencing** — V-X (export), V-D (recurring IRONMESH), and V-M (volume) are prioritized over V-NV/V-P/V-R because they generate revenue fastest with least new development.
8. **Recurring revenue via V-D** — V-D is the only product with a mandatory subscription model ($500-1K/yr IRONMESH). 10-year mesh LTV exceeds single V-L sale. Product family now has both one-time and recurring revenue streams.

---

## Section 9: Metrics

### Agent Count

| Layer | Agents | Total |
|-------|--------|-------|
| Coordination (Pattern 4) | 5 (A-SCHEDULE, A-DEPEND, A-SYNC, A-TRACK, A-EXPORT) | 5 |
| Per-product (Pattern 3) | 6 shared (A-ODI, A-REQ, A-CONCEPT, A-EMBODY, A-DETAIL, A-QC) | 6 |
| Operational (Pattern 2) | 5 shared (A-DETECT, A-TRACK-RT, A-IFF, A-FC, A-LOG) | 5 |
| **Total unique agents** | | **16** |

Note: 3-layer agent architecture across 8 products. This is the most complex orchestration in the Workshop X portfolio.

### Automation Profile (Coordination Layer)

| Step | Automation % | HITL Required |
|------|-------------|---------------|
| S1 Portfolio intake | 70% | No |
| S2 Resource allocation | 35% | Yes (SR, WR) — lower than VN-12.7MM-SIM due to cross-family |
| S3 Dependency resolution | 45% | Yes (DG) — lower due to external deps |
| S4 Phase dispatch | 60% | No (part of SR) |
| S5 Artifact sync | 40% | Yes (AP) — lower due to V-X export check |
| S6 Conflict detection | 65% | No |
| S7 Priority arbitration | 20% | Yes (CA) |
| S8 Cross-product gate | 0% | Always (DG) |
| S9 Progress tracking | 80% | No |
| S10 Rebalancing | 30% | Yes (WR) |
| S11 Export compliance | 10% | Always (XR) |
| **Weighted average** | **~42%** | |

Lower than VN-12.7MM-SIM (~47%) because 8 products + external deps + export compliance + cross-family add uncertainty that requires more human judgment.

### HITL Budget

| Layer | Weekly Time | % of 25h Capacity |
|-------|------------|-------------------|
| Pattern 4 coordination (V-SMASH) | ~100 min | 6.7% |
| Pattern 4 coordination (VN-12.7MM-SIM) | ~65 min | 4.3% |
| Pattern 3 per-product (×2-3 active) | ~5-7h | 20-28% |
| **Total HITL** | **~8-10h/week** | **32-40%** |

This is at the upper bound of acceptable coordination overhead. With 8 V-SMASH products, if >3 are active simultaneously, coordination may crowd out actual design work.

**Mitigation:** Standing priority order reduces most CA checkpoints to rubber-stamp decisions. Cross-family WR can be combined into single Friday review. V-M and V-D are V-L subsets — many design decisions are inherited, not independent, reducing unique coordination events.

### Product Family Timeline

```
2026:  M1    M2    M3    M4    M5    M6    M7    M8    M9    M10   M11   M12
V-L:   [P4✅─Proto──DVT───────Qual──────────────Prod]  ← 10 mo, DELIVERY
V-X:         [P0──P1──P2──P3─P4]                       ← 3-4 mo, DELIVERY
V-M:         [P0──P1──P2──P3──P4]──Proto──Qual──      ← PARALLEL with V-L (no WAIT)
V-D:         [P0──P1]──WAIT────────[P2─P3─P4]────      ← Phase 0/1, then V-L EVT
V-T:         [P0──P1]──WAIT──────────────────────────   ← Phase 0/1, then IRONMESH
V-NV:                          [P0─P1─P2─P3─P4──────   ← starts after V-L DVT
V-P:                           [P0─P1─P2─P3─P4──────   ← starts after V-L DVT

2027:  M1    M2    M3    M4    M5    M6    M7    M8    M9    M10   M11   M12
V-L:   ──Production────────────────────────────────────
V-X:   ──Production + export certs─────────────────────
V-M:   ─Proto──Qual──────DELIVERY──────────────────────  ← Q1 2027 (accelerated — no WAIT)
V-D:   ─Proto──Qual──DELIVERY──────────────────────────  ← Q1-Q2 2027
V-T:   ─────────────[P2─P3─P4]─DELIVERY               ← after IRONMESH ready
V-NV:  ─P3─P4]──Proto──Qual──────DELIVERY──────────────
V-P:   ─P3─P4]──Proto──Qual──────────DELIVERY──────────
V-R:                    [P0─P1─P2─P3─P4]──Proto─Qual── ← after V-P P3 + MTB-20

2028:  M1    M2    M3    M4    M5    M6
V-R:   ──Qual────────DELIVERY──────────
```

### Dependency Chain — Critical Path

```
V-L ──────────────────── independent (10 mo to production)
V-M ──────────────────── PARALLEL with V-L (12 mo, independent validation, no gate)
V-X ── DG-1 ──────────── 3-4 mo after V-L Phase 3 lock (ALREADY MET)
V-D ── DG-9 ──────────── 10 mo after V-L prototype validated (detection subset)
V-T ── DG-2 + DG-3 ───── 6 mo after IRONMESH ready (external dependency)
V-NV ── DG-4 ─────────── 8 mo after V-L prototype validated
V-P ── DG-5 ──────────── 12 mo after V-L prototype validated
V-R ── DG-6 + DG-7 ───── 12 mo after V-P Phase 3 + MTB-20 (LONGEST CHAIN: ~30 mo)
```

**Family critical path:** V-L → V-P → V-R = ~34 months total (longest end-to-end chain).
**Revenue critical path:** V-L → V-X = ~13 months to first export delivery.
**IRONMESH critical path:** V-L → V-T = depends on IRONMESH timeline (external).

### Success Criteria

| Metric | Target |
|--------|--------|
| V-L delivered within 10 months | Foundation validated |
| V-X delivered within 4 months of V-L Phase 3 | First export revenue |
| No product starts on unvalidated foundation | 0 dependency gate violations |
| KN capacity never exceeded | 22h/week allocatable (3h buffer preserved) |
| SW core stays synchronized | 0 uncontrolled divergences |
| Export compliance on V-X | 0 blocked shipments |
| Coordination overhead ≤ 11% | Combined V-SMASH + VN-12.7MM-SIM ≤ 2.75h/week |
| HALT-4 never triggered | V-L prototype succeeds (risk mitigation via DfM focus). V-M rework ≤1 iteration if V-L reveals AI core issue. |
| V-D IRONMESH uptake ≥ 30% | Recurring revenue model validated within 6 months of delivery |
| V-M volume target ≥ 100 units/yr | Mass procurement thesis validated |

---

## Appendix A: Consequence Map (Full)

| # | Step | What AI Could Get Wrong | Consequence | Severity | Auto % | HITL? | Fallback |
|---|------|------------------------|-------------|----------|--------|-------|----------|
| S1 | Portfolio intake | Wrong priority / timeline | Downstream scheduling wrong | MEDIUM | 70% | No | KN corrects at weekly review |
| S2 | Resource allocation | Over-commits KN across 2 families | Burnout, cascading slips across 10+ products | **CRITICAL** | 35% | Yes | 25h hard cap enforced + cross-family visibility |
| S3 | Dependency resolution | Declares blocked product ready | Building on unvalidated base | HIGH | 45% | Yes | File check, not inference |
| S4 | Phase dispatch | Routes to wrong phase/product | Session time wasted | MEDIUM | 60% | No | Progress file shows current phase |
| S5 | Artifact sync | Propagates export-controlled change to V-X | Export violation risk | **CRITICAL** | 40% | Yes | A-EXPORT gate on V-X propagation |
| S6 | Conflict detection | Misses cross-family resource conflict | Silent double-booking of KN time | HIGH | 65% | No | Allocation tracker makes visible |
| S7 | Priority arbitration | Picks wrong product | Revenue-first variant delayed | HIGH | 20% | Yes | KN decides all conflicts |
| S8 | Cross-product gate | Approves gate with unmet dependency | Requirements on unvalidated design | CRITICAL | 0% | Always | Both product states checked |
| S9 | Progress tracking | Reports wrong status on V-L | False confidence → 5 downstream + V-M parallel plan on wrong date | **CRITICAL** | 80% | No | Dashboard from file state |
| S10 | Rebalancing | Violates 25h or buffer | B3 Skill Depletion across 2 families (12+ products) | HIGH | 30% | Yes | Never auto-applied |
| S11 | Export compliance | Misses controlled component | Export law violation, legal liability | **CRITICAL** | 10% | Always | Every V-X design decision reviewed |

**V-SMASH has 4 CRITICAL steps** (vs 1 for VN-12.7MM-SIM) because:
- S2: KN time is now shared across 2 families (12+ products total)
- S5: Export compliance adds legal consequence absent in VN-12.7MM-SIM
- S9: V-L status error cascades to 6 products (fan-out = 5 blocked + V-R chain; V-M notified separately)
- S11: Export violations have consequences beyond engineering (legal, reputational)

---

## Appendix B: V-SMASH Three-Layer Orchestration Summary

```
┌─────────────────────────────────────────────────────────────────┐
│  LAYER 3: Pattern 4 — Product Family Coordination               │
│  Time scale: months–years                                        │
│  Master: Product Family Coordinator                              │
│  Agents: 5 coordination (SCHEDULE/DEPEND/SYNC/TRACK/EXPORT)     │
│  HITL: 7 types, ~100 min/week                                   │
│  Products: 8 (V-L/V-M/V-D/V-X/V-T/V-NV/V-P/V-R)              │
│  Dependencies: 8 active gates (2 external; DG-8 removed — V-M ∥) │
│  Primary edge: ESCALATE → HALT                                   │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 2: Pattern 3 — Per-Product Design Workflow               │
│  Time scale: weeks–months                                        │
│  Master: Design Phase Controller (per product)                   │
│  Agents: 6 shared (ODI/REQ/CONCEPT/EMBODY/DETAIL/QC)           │
│  HITL: Phase gates (A/B/C/D decisions)                          │
│  Primary edge: REROUTE → PAUSE                                   │
├─────────────────────────────────────────────────────────────────┤
│  LAYER 1: Pattern 2 — Operational Engagement State Machine      │
│  Time scale: milliseconds–seconds                                │
│  Master: Engagement Controller                                   │
│  Agents: 5 shared (DETECT/TRACK-RT/IFF/FC/LOG)                 │
│  HITL: 3 checkpoints (CONFIRM/EXECUTE/MODIFY), 1-5 sec each    │
│  Primary edge: NONE → MANUAL MODE                                │
│  Shared across all 8 variants, parameterized per product         │
└─────────────────────────────────────────────────────────────────┘
```

This is the first Workshop X product family with a 3-layer orchestration stack.
- Layer 1 (Pattern 2) runs at deployment time (operator uses the product)
- Layer 2 (Pattern 3) runs at design time (KN develops each product)
- Layer 3 (Pattern 4) runs at portfolio time (KN coordinates across products)

---

## Section 10: Tooling Sub-Projects

### Overview

V-SMASH production requires 4 custom tooling sub-projects that are shared across the product family. These are NOT deliverable products — they are production enablers and test equipment.

```
TOOLING/
├── V-SMASH-JIG-PR05  ← Sensor Optical Alignment Jig (EQ-008)
├── V-SMASH-JIG-PR10  ← EOL Functional Test Jig (EQ-010) ⚠ SAFETY-CRITICAL
├── V-SMASH-JIG-PR11  ← Bore-Sight Optical Alignment Jig (EQ-009) ⚠ SAFETY-CRITICAL
└── V-SMASH-SLED      ← Drone Target Sled (T09/T10 field test)
```

### Tooling Registry

| ID | Name | NRE Budget | Lead Time | Safety? | Reuse (of 8 variants) | Blocks |
|----|------|-----------|-----------|---------|----------------------|--------|
| **PR-05** | Sensor Alignment Jig | $2,000 | 8 weeks | No | 7/8 (all except V-R) | OP-100 production |
| **PR-10** | EOL Functional Test Jig | $2,000 | 8 weeks | **YES** (VM-Y01–Y04) | 7/8 (V-R needs new jig) | OP-250 production acceptance |
| **PR-11** | Bore-Sight Alignment Jig | $2,000 | 9 weeks | **YES** (QC-06, QC-10) | 6/8 (not V-D, V-R) | OP-110, OP-260 production + L2 depot |
| **SLED** | Drone Target Sled | $3,000 | 5 weeks | No | **8/8** (all variants) | Phase E field demo (T09, T10) |
| | **Total NRE** | **$9,000** | | | | |

### Dependency Map (Tooling → Products)

```
PR-05  ── depends on B2 drawings (housing + bench) ── blocks V-M production
PR-10  ── depends on USB-C diagnostic protocol     ── blocks V-M production acceptance
PR-11  ── depends on B2 drawings (optical bench)   ── blocks V-M production + L2 depot
SLED   ── depends on range access                  ── blocks Phase E field demo (all variants)

Timeline:
  V-M Phase 4 ──── B2 CAD starts ──── PR-05/PR-11 design starts ────┐
                                                                      ├── Production ready
  Prototype build ─ FW diagnostic protocol ── PR-10 design starts ───┘

  Any time (independent) ── SLED build ── ready for Phase E
```

### Shared Procurement Optimization

| Component | Used In | Quantity | Bulk Saving |
|-----------|---------|----------|-------------|
| Achromatic collimator lens (f=200, Ø50) | PR-05, PR-11 | 2 | ~$50 |
| Machine vision camera (5MP USB3 global shutter) | PR-10, PR-11 | 2 | ~$50 |
| 1913 rail fixture | PR-10, PR-11 | 2 | ~$30 |

### Coordination Rules

1. **Tooling sub-projects do NOT follow Pahl & Beitz phases** — they use a simplified: Spec → Design → Procure → Build → Validate pipeline
2. **Tooling is scheduled by A-SCHEDULE** as shared resource work (not product-specific hours)
3. **Safety-critical jigs (PR-10, PR-11) require validation before production release** — gauge R&R study + false rate study mandatory
4. **PR-11 is the production bottleneck** — at >500 units/year, order 2nd jig ($2K)
5. **SLED can be built independently of any product** — start early, have ready for Phase E

---

## Section 11: Software Sub-Projects

### Overview

Comprehensive audit of V-SMASH-M Phase 0→4 artifacts revealed **174 software/firmware/AI references** scattered across 33 mechanical design documents, with **13 critical gaps** where software behavior is specified in requirements but has no formal architecture, algorithm specification, or development plan. The monolithic "SW core" (shared resource in Section 2) is decomposed into 4 sub-projects with independent development lifecycles.

```
SOFTWARE/
├── V-SMASH-SW-FW   ← Embedded Firmware Platform (boot, power, thermal, FSM, display, HAL)
├── V-SMASH-SW-AI   ← AI Detection & Classification Pipeline (YOLO, training, validation) ⚠ SAFETY-CRITICAL
├── V-SMASH-SW-BAL  ← Ballistic Computation & Sensor Fusion (range, lead, calibration)
└── V-SMASH-SW-COM  ← Communication & Integration (BLE, diagnostics, OTA update, logging)
```

### Software Sub-Project Registry

| ID | Name | Safety Class | SW-SDLC Duration | Reuse (of 8) | Blocks |
|----|------|-------------|------------------|-------------|--------|
| **SW-FW** | Firmware Platform | B (display safety behavior) | ~18 weeks | **8/8** | Foundation — all other SW modules |
| **SW-AI** | AI Detection & Classification | **C (highest)** — VM-Y03, VM-Y04 | ~22 weeks | 5/8 direct, 3/8 adapt | Core product function |
| **SW-BAL** | Ballistic & Sensor Fusion | B (lead accuracy) | ~14 weeks | 7/8 (V-D excluded) | Aiming capability |
| **SW-COM** | Communication & Integration | A (lowest — optional) | ~16 weeks | 7/8 direct, V-R adapt | IRONMESH link + depot support |

### SW-SDLC (Distinct from Pahl & Beitz)

Software sub-projects follow their own development lifecycle, **not** Pahl & Beitz Phase 0-4:

```
SW-Phase 0: Requirements Extraction  ← from system reqs (completed in proposals)
SW-Phase 1: Software Requirements Spec (SRS) per sub-project
SW-Phase 2: Software Architecture Design (SAD) + API contracts
SW-Phase 3: Implementation + Unit Testing
SW-Phase 4: Integration Testing (HW-SW on target SoC)
SW-Phase 5: Qualification + Release (V&V against system reqs)
```

### Dependency Map (Software → Software → Hardware)

```
                         ┌──────────────┐
                         │  V-SMASH-SW  │
                         │     -FW      │  ← Foundation: HAL + APIs
                         │  (18 weeks)  │
                         └──────┬───────┘
                      ┌─────────┼─────────┐
                      ▼         ▼         ▼
               ┌──────────┐ ┌──────────┐ ┌──────────┐
               │  SW-AI   │ │  SW-BAL  │ │  SW-COM  │
               │ (22 wks) │ │ (14 wks) │ │ (16 wks) │
               └────┬─────┘ └────┬─────┘ └────┬─────┘
                    └────────────┴────────────┘
                                 ▼
                     ┌────────────────────┐
                     │  HW Platform (PCB) │  ← B2 CAD + SoC procurement
                     └────────────────────┘

  SW-FW API stability required before SW-AI/BAL/COM can start SW-Phase 3.
  SW-AI output format required before SW-BAL can finalize input spec.
  SW-AI + SW-BAL + SW-COM develop SW-Phase 0/1/2 in PARALLEL with SW-FW.
  SW-Phase 3+ is SEQUENTIAL: FW first, then AI/BAL/COM on stable APIs.
```

### Software → Tooling Dependencies

```
SW-COM (diagnostic protocol)  ──→ PR-10 (EOL test jig) needs USB-C commands
SW-AI  (AI model binary)      ──→ PR-10 (test pattern for AI detect criteria)
SW-BAL (calibration routine)  ──→ PR-11 (bore-sight jig validation)
SW-AI  (trained model)         ──→ SLED  (field test requires model + drone targets)
```

### Impact on Shared Resource Map (Section 2 Update)

The monolithic "SW core" entry in Section 2 is now decomposed:

| Resource | Old | New |
|----------|-----|-----|
| SW core | Single shared C++ codebase (~4200 LOC) | 4 sub-projects: SW-FW, SW-AI, SW-BAL, SW-COM — each independently versioned |
| A-SYNC scope | Track "SW core" as one artifact | Track 4 sub-project versions + their API contracts |
| Change propagation | Single changelog | Per-sub-project changelog + API compatibility matrix |
| Safety-critical params | Listed as 3 items | Formally classified per sub-project (SW-AI = Class C, SW-FW/BAL = Class B, SW-COM = Class A) |

### Coordination Rules

1. **SW sub-projects follow SW-SDLC, NOT Pahl & Beitz phases** — they use: Req → SRS → SAD → Implement → Integrate → Qualify
2. **SW-FW is the foundation** — its API contracts must reach stability (SW-Phase 2 complete) before SW-AI/BAL/COM start SW-Phase 3 (implementation)
3. **Safety-critical modules (SW-AI Class C, SW-FW Class B) require independent V&V** — not just the developer's own test, but a separate qualification review
4. **A-SYNC now tracks 4 sub-project versions** instead of 1 SW core version. Breaking API changes trigger HALT-5 (new halt type for software API regression)
5. **Training data collection is the longest lead-time item** for SW-AI — start field data campaigns as early as possible, parallel with all other SW work
6. **SW-COM can develop the diagnostic desktop tool on any OS** — it does not require Jetson hardware. SW-Phase 3c (desktop tool) is independent
7. **V-M firmware is a SUBSET of V-L firmware** — variant-specific = FSM states + ammunition LUT + display config. No separate codebase.

### HALT-5: Software API Regression (NEW)

**Trigger:** SW-FW breaks a published API contract that SW-AI, SW-BAL, or SW-COM depends on.

**Action:**
1. A-SYNC detects API version mismatch
2. HALT-5 raised → freeze all dependent sub-project SW-Phase 3+ work
3. KN reviews: (a) revert FW API change, (b) update dependent modules, (c) accept breaking change + propagate
4. Propagation checklist generated per dependent sub-project

**Differs from HALT-4 (V-L regression):** HALT-5 is intra-software, not cross-product. Affects SW development velocity, not product dependency gates.

---

## Section 12: SW Operating Envelope (Cross-Cutting)

> **Origin:** QC Gate batch SG-2 — 4/4 SW proposals FLAG on Check 05 (Environmental Qualification).
> All SW sub-projects must reference this section for their operating environment definition.

### 12.1 Ambient Operating Environment

| Parameter | Infantry Variants (V-M, V-L, V-X, V-T, V-NV, V-P) | Vehicle Variant (V-R) | Sentry Variant (V-D) | Standard |
|-----------|-----------------------------------------------------|----------------------|---------------------|----------|
| Operating temperature | −10°C to +55°C | −10°C to +55°C | −10°C to +55°C (continuous outdoor) | MIL-STD-810H Method 501.7/502.7, TCVN 7699-2-1 |
| Storage temperature | −40°C to +70°C | −40°C to +70°C | −40°C to +70°C | MIL-STD-810H |
| Relative humidity | 5–100% RH (condensing) | 5–100% RH | 5–100% RH (tropical outdoor, year-round) | TCVN 7699-2-78, MIL-STD-810H Method 507.6 |
| Altitude | 0–3,000 m ASL | 0–2,000 m | 0–3,000 m | Vietnam terrain profile |
| Vibration (transport) | 5–500 Hz, 1.04 g RMS | 5–500 Hz, 2.36 g RMS | 5–500 Hz, 1.04 g RMS | MIL-STD-810H Method 514.8 Cat. 4/20 |
| Dust/sand | IP54 (system level) | IP65 | IP65 (permanent outdoor) | MIL-STD-810H Method 510.7 |
| EMI/EMC environment | Co-located military VHF/UHF at ≥1 m | Vehicle electrical bus + radio | Remote — low EMI | MIL-STD-461G, TCVN 7699-2-29 |
| Solar radiation | Tropical direct sun (1120 W/m²) | Under vehicle shade typically | Direct sun, permanent exposure | MIL-STD-810H Method 505.7 |

### 12.2 SW-Specific Environmental Impact Table

This table defines what each SW module must do at environmental boundaries. Referenced by all SRS documents.

| Environmental Condition | SW-FW Impact | SW-AI Impact | SW-BAL Impact | SW-COM Impact |
|------------------------|-------------|-------------|--------------|--------------|
| **Cold start (−10°C)** | FW-PWR: battery SoC% underreported (Li-ion internal resistance ↑). Apply temperature-compensated estimation. FW-THERM: Tj starts low, no concern. Boot time may increase (~10% due to cold eMMC). | AI inference latency stable (GPU unaffected by cold at −10°C). | BAL-LEAD: MV drops ~2% at −10°C for 7.62×39mm. If accuracy spec is tight, add temperature-compensated LUT. | BLE range unaffected. |
| **Hot ambient (+55°C)** | FW-THERM: Tj reaches 85°C throttle at lower SoC power (~30 W SoC → Tj ≈ 55 + 30 = 85°C). Throttle engaged more frequently. | AI inference throttled to 15/10/5 Hz earlier in mission. Detection range degrades at lower frame rates. | BAL: no direct impact (computation is lightweight). | BLE module (nRF52840): rated to +85°C, no concern. |
| **High humidity (100% RH, condensing)** | FW-HAL: condensation on sensor lens → SENSOR_FAULT if image quality below threshold. FW-DISP: OLED fogging unlikely (sealed). | AI-DET: false positive rate may increase with condensation artifacts. Should be in training data. | No direct impact. | BLE antenna detuning possible at extreme humidity — range may drop 10–20%. |
| **Vibration (operational)** | FW-HAL: I2C/SPI bus may produce transient errors. Retry logic required (3× with 10 ms interval). FW-FSM: must not false-trigger state changes from vibration-induced sensor glitches. | AI-DET: image blur at high vibration. Frame-to-frame jitter in bounding box. Kalman filter (in SW-BAL) smooths this. | BAL-TRACK: Kalman process noise should account for vibration-induced measurement noise. V-R (vehicle) needs larger process noise. | No direct impact (BLE not latency-sensitive). |
| **Altitude (3,000 m)** | FW-THERM: reduced air density → poorer convective cooling → Tj rises faster. May need lower throttle thresholds at altitude. | No direct impact. | BAL-LEAD: air density affects ballistic trajectory. At 3,000 m, air density ~70% of sea level → less drag → different lead table. [ASSUMPTION — altitude-compensated LUT not yet planned.] | No direct impact. |
| **EMI/EMC (military radio)** | FW-HAL: SPI clock (40 MHz) harmonics must not exceed MIL-STD-461G RE102 limits. I2C (400 kHz) unlikely to cause issues. | No direct impact (internal processing). | No direct impact. | COM-BLE: 2.4 GHz band. Military VHF/UHF (30–400 MHz) is well-separated. Main risk: wideband jammers. Fallback: BLE is optional (SWR-COM-02). |

### 12.3 How to Reference This Section

In each SW sub-project SRS, add:

```markdown
### Operating Environment
This sub-project operates within the V-SMASH SW Operating Envelope
defined in [[V-SMASH_Family_Orchestration_Design_v1.0#Section 12]].
Module-specific environmental impacts are per §12.2 column "SW-XX Impact."
```

---

*V-SMASH Family Orchestration Design v1.5 — 2026-02-24*
*S2 practice: second Pattern 4 application — fan-out DAG vs linear chain*
*v1.4→v1.5: Added Section 12 — SW Operating Envelope (cross-cutting). SG-2 systemic fix from QC Gate batch.*
*Source: 8-product family (6 original + V-M Micro-Sight + V-D Sentry Detector from P10 Session 19)*
*v1.3→v1.4: Added Section 11 — 4 software sub-projects (SW-FW, SW-AI, SW-BAL, SW-COM). SW-SDLC. HALT-5. API dependency map.*
*v1.2→v1.3: Added Section 10 — 4 tooling sub-projects (PR-05, PR-10, PR-11, SLED). Total NRE $9K.*
*v1.1→v1.2: V-M parallel with V-L (DG-8 removed). Blocking fan-out 6→5. HALT cascade 7→6. V-M accepts rework risk for TTM.*
*v1.0→v1.1: family expanded 6→8 products, DG-8/DG-9 added, fan-out 4→6, HALT cascade 5→7*
*Cross-reference: [[V-SMASH_Orchestration_Design_v1.0|Pattern 2 (operational)]] + [[VN-12.7MM-SIM_Family_Orchestration_Design_v1.0|Pattern 4 (reference)]]*
