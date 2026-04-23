---
project: VN-AICC-001
phase: 2
type: evaluation_framework
version: 1.0
created: 2026-02-19
status: APPROVED — Criteria, weights, rubric, and matrix template finalized
---

# VN-AICC-001: PHASE 2, STEP 3 — VDI 2225 EVALUATION FRAMEWORK
## Conceptual Design: Evaluation Criteria, Weights & Scoring System
### Version 1.0 (Finalized) | 19/02/2026

---

**Document ID:** VN-AICC-001-P2-S3-v1.0
**Phase:** 2 — Conceptual Design
**Step:** 3 of 4 (Function Structure → Morphological Matrix → **VDI 2225 Evaluation** → Principle Solution)
**Input:** VN-AICC-001-P1-FINAL-v1.0 (56 requirements → criteria source)
**Input:** VN-AICC-001-P2-S1-v1.0 (IRONMESH reuse data → weighting input)
**Method:** VDI 2225 Nutzwertanalyse (P&B §3.3.4, Figure 3.29)

---

## 1. METHODOLOGY NOTES

### 1.1 Why Define Criteria BEFORE Seeing Concepts

Per VDI 2225 and P&B §3.3.4:

> "The evaluation criteria and their relative importance must be established **before** the evaluation of solution variants begins. Management, marketing, and engineering must agree on relative importance independently of any specific solution."

**Bias prevention logic:**
- If criteria are defined AFTER concepts are visible → confirmation bias ("I like Concept A, so I weight criteria that favor it")
- If criteria are defined BEFORE → evaluation is forced to reflect actual project priorities, not preference for a specific solution
- This document locks the evaluation framework. Once approved, **criteria and weights cannot be modified** to favor a particular concept

### 1.2 VDI 2225 Scoring Method

| Element | Specification |
|---|---|
| **Scale** | 0–4 (VDI 2225 standard) |
| **0** | Unsatisfactory — does not meet minimum requirement |
| **1** | Just tolerable — barely acceptable, significant limitations |
| **2** | Adequate — meets requirement with some compromises |
| **3** | Good — meets requirement well, minor limitations only |
| **4** | Very good / ideal — exceeds requirement, best achievable |
| **Weighting** | Hierarchical (P&B Figure 3.29 objectives tree) — NOT equal weights |
| **Weighted score** | w_i × s_i (weight × score per criterion) |
| **Total score** | Σ(w_i × s_i) / Σ(w_i × 4) = relative worth (0.0 – 1.0) |
| **Pass threshold** | ≥ 0.70 (per project requirement from CLAUDE.md) |
| **Disqualification** | Any **Demand-backed** criterion scoring 0 = concept eliminated (see §1.3) |

### 1.3 Disqualification Rule

Scoring 0 on a criterion triggers automatic elimination **only** if that criterion traces to at least one Demand (D) requirement. Rationale: a Demand requirement is a hard constraint — failure to meet it means the concept is infeasible, not just suboptimal.

| Criterion | Has Demand Reqs? | 0 = Disqualify? |
|---|---|---|
| C1: Functional Completeness | Yes (FN.01 D, FN.02 D, FN.03 D, FN.07 D) | **YES** |
| C2: Safety & Fail-safe | Yes (SF.01–SF.05 all D) | **YES** |
| C3: Operator Cognitive Load | Yes (ER.01 D, ER.02 D, SI.03 D) | **YES** |
| C4: Auditability | Yes (FN.05 D, SI.11 D) | **YES** |
| C5: Testability | Yes (implicit in all T-verified reqs) | **YES** |
| C6: IRONMESH Reuse | Yes (PL.03 D, PL.06 D, PL.07 D) | **YES** |
| C7: Standalone Capability | Yes (PL.04 D) | **YES** |
| C8: Multi-agent Scalability | Yes (PL.08 D, OP.05 D) | **YES** |
| C9: Architectural Extensibility | Yes (PL.01 D, PL.02 D) | **YES** |
| C10: Lifecycle Cost | Yes (MF.02 D, MF.03 D) | **YES** |
| C11: Development Speed | No (Workshop X capacity, not a formal req) | **NO** |

> A concept scoring 0 on C11 (Development Speed) is NOT automatically disqualified — it receives a very low weighted score but remains in the evaluation. This allows a high-performance concept that takes longer to develop to still compete if it dominates on other criteria.

### 1.4 Hierarchical Weighting Method (P&B Figure 3.29)

```
Step 1: Define objectives tree (Level 0 → Level 1 → Level 2)
Step 2: Allocate weights at Level 1 (main objectives, sum = 1.00)
Step 3: Allocate sub-weights within each Level 1 (sum = 1.00 per branch)
Step 4: Final weight per criterion = Level 1 weight × Level 2 sub-weight
Step 5: Verify: all final weights sum to 1.00
```

---

## 2. CRITERIA DERIVATION FROM REQUIREMENTS

### 2.1 Requirements-to-Criteria Mapping

56 requirements (38D + 18W) from Phase 1, grouped into evaluation-relevant clusters:

| Requirement Cluster | Req IDs | Count | Evaluation Criterion |
|---|---|---|---|
| Core agent monitoring & decision | FN.01, FN.02, FN.03, FN.04, FN.07, FN.06, FN.08 | 7 | C1: Functional Completeness |
| Safety, fail-safe, confirmation | SF.01–SF.05 | 5 | C2: Safety & Fail-safe |
| Operator interaction & ergonomics | ER.01–ER.06, SI.03–SI.06, FN.06 | 11 | C3: Operator Cognitive Load |
| Audit, logging, compliance | FN.05, SI.11 | 2 | C4: Auditability |
| Verification & validation | All reqs with T verification method | cross-cutting | C5: Testability (NEW) |
| IRONMESH/CORTEX integration | PL.03, PL.06, PL.07 | 3 | C6: IRONMESH Reuse |
| Software-agnostic, standalone | PL.04 | 1 | C7: Standalone Capability |
| Multi-agent, multi-AICC | PL.08, PL.09, OP.05 | 3 | C8: Multi-agent Scalability |
| Compute/form agnostic, multi-form | PL.01, PL.02 | 2 | C9: Architectural Extensibility |
| Cost targets, manufacturing, local content | MF.01–MF.07 | 7 | C10: Lifecycle Cost |
| Workshop X capacity constraint | Phase 1 roadmap, 25h/week | N/A | C11: Development Speed |

**Coverage check:** All 56 requirements mapped. No orphans. Environmental reqs (EV.01–EV.05) apply equally to all platform core concepts → not a differentiating criterion at conceptual level (carry to Phase 3 embodiment evaluation).

### 2.2 Consolidation Rationale

56 requirements → **11 evaluation criteria** (within 8-12 range):

- **Demand requirements (D)** cluster into criteria that carry higher weight
- **Wish requirements (W)** contribute to criteria but don't elevate weight on their own
- **Testability** added as explicit criterion per reviewer feedback — measures architectural verifiability, critical for defense context
- **Environmental requirements** (EV.01-EV.05) deferred to Phase 3 — they constrain embodiment choices (materials, sealing, ruggedization), not conceptual architecture
- **Operational requirements** (boot time, uptime, power) split across relevant criteria

---

## 3. THE 11 EVALUATION CRITERIA

### C1: Functional Completeness

| Attribute | Value |
|---|---|
| **Definition** | Degree to which the concept architecture supports the primary mission: real-time agent monitoring (≤500ms), decision approval/rejection with state machine operation, alert notification, and agent configuration |
| **Traces to** | FN.01 (D), FN.02 (D), FN.03 (D), FN.04 (D), FN.07 (D), FN.06 (W), FN.08 (W) |
| **What differentiates concepts** | F2.3 state machine architecture determines decision workflow completeness; F3.1 dashboard determines information completeness; F4.2 input mapping determines action completeness |
| **0 = Disqualify?** | **YES** |

### C2: Safety & Fail-safe Integrity

| Attribute | Value |
|---|---|
| **Definition** | Robustness of the safety-critical path: E-stop response (≤200ms), fail-safe default (agents halt on AICC failure), 2-step confirmation for critical actions, connection loss handling (warning ≤1s, auto-safe ≤5s), and unintended action prevention |
| **Traces to** | SF.01 (D), SF.02 (D), SF.03 (D), SF.04 (D), SF.05 (D) |
| **What differentiates concepts** | F4.1 detection method (interrupt vs. polling latency), F4.3 confirmation approach, F5.4 fail-safe strategy |
| **0 = Disqualify?** | **YES** |

### C3: Operator Cognitive Load

| Attribute | Value |
|---|---|
| **Definition** | Mental effort required to maintain situational awareness and make correct decisions under time pressure. Lower = better. Includes: display clarity, button mapping intuitiveness, alert distinguishability, one-hand operability |
| **Traces to** | ER.01 (D), ER.02 (D), SI.03 (D), SI.04 (D), SI.05 (D), SI.06 (W), FN.06 (W) |
| **What differentiates concepts** | F3.1 dashboard cognitive profile, F4.2 intent mapping ambiguity, F3.3 alert fatigue characteristics |
| **0 = Disqualify?** | **YES** |

### C4: Auditability & Decision Traceability

| Attribute | Value |
|---|---|
| **Definition** | Completeness and integrity of the audit trail: every human decision timestamped, state transitions logged, tamper-evident storage, reconstructable decision chain for post-incident analysis |
| **Traces to** | FN.05 (D), SI.11 (D) |
| **What differentiates concepts** | F2.3 state machine traceability (flat FSM = fully enumerable vs. actor model = distributed), F4.4 logging approach |
| **0 = Disqualify?** | **YES** |

### C5: Testability *(NEW — added per reviewer feedback)*

| Attribute | Value |
|---|---|
| **Definition** | How inherently verifiable is the concept architecture? Can each subfunction be tested independently? Can the safety-critical path be verified without full system integration? Can state machine behavior be exhaustively enumerated? Can fault injection be performed? |
| **Traces to** | Cross-cuts all requirements with T (Test) verification method; particularly SF.01–SF.05 (safety testing), FN.07 (state machine verification) |
| **What differentiates concepts** | F2.3: flat FSM = fully enumerable states (high testability) vs. actor model = emergent behavior (low testability). F4.3: two-step confirmation = deterministic path vs. graduated difficulty = more test cases. Modular architectures are more testable than tightly coupled ones |
| **0 = Disqualify?** | **YES** |

### C6: IRONMESH Ecosystem Reuse

| Attribute | Value |
|---|---|
| **Definition** | Percentage of solution principles that directly reuse existing IRONMESH components (OS modules, CDM protocol stack, hardware designs, drivers) without modification or with minimal adaptation. Higher reuse = lower effort + proven reliability |
| **Traces to** | PL.03 (D), PL.06 (D), PL.07 (D) |
| **What differentiates concepts** | F1.1 communication (native CDM = high reuse vs. pub/sub = low), F4.4 transmission (CDM direct = high vs. broker = low), F5.2 monitoring (OS daemon = 100% vs. independent = partial) |
| **0 = Disqualify?** | **YES** |

### C7: Standalone Operational Capability

| Attribute | Value |
|---|---|
| **Definition** | Ability to function meaningfully WITHOUT IRONMESH — as primary mode (non-IRONMESH customers) or fallback (network failure). Support for non-CDM protocols, local processing without CORTEX |
| **Traces to** | PL.04 (D) |
| **What differentiates concepts** | F1.1 (native bus = dependent vs. pub/sub = agnostic), F4.4 (CDM direct = single protocol vs. broker = multi-protocol), F2.3 coupling to specific middleware |
| **0 = Disqualify?** | **YES** |

> **C6 vs. C7 tension:** Intentionally in opposition. The weight ratio (C6:C7 ≈ 1.4:1) reflects Workshop X's strategic priority: IRONMESH-first, standalone as fallback.

### C8: Multi-agent Scalability

| Attribute | Value |
|---|---|
| **Definition** | Ability to scale from ≥4 agents to larger deployments without architectural redesign. Includes agent aggregation, per-agent state management, display scaling, multi-AICC coordination |
| **Traces to** | PL.08 (D), PL.09 (W), OP.05 (D) |
| **What differentiates concepts** | F2.1 aggregation scaling, F2.3 state explosion with N agents (flat FSM worst, actor model best), F3.1 display adaptability |
| **0 = Disqualify?** | **YES** |

### C9: Architectural Extensibility

| Attribute | Value |
|---|---|
| **Definition** | How readily the platform core adapts to: new compute modules, new form factors, new agent types/protocols, new display technologies. Measures abstraction quality |
| **Traces to** | PL.01 (D), PL.02 (D) |
| **What differentiates concepts** | F1.1 protocol abstraction, F3.1 display-size-independence, F4.1 I/O scaling (I2C expander vs. GPIO pin-limited) |
| **0 = Disqualify?** | **YES** |

### C10: Estimated Lifecycle Cost

| Attribute | Value |
|---|---|
| **Definition** | Total cost of ownership: BOM cost (MAKER ≤$50, PRO ≤$120, TAC ≤$200), manufacturing (assembly ≤30min, local content ≥60%), maintenance, and support across product lifecycle |
| **Traces to** | MF.01 (D), MF.02 (D), MF.03 (D), MF.04 (W), MF.05 (D), MF.06 (D), MF.07 (D) |
| **What differentiates concepts** | Custom hardware components add BOM. Software complexity adds development/maintenance cost. Component count affects assembly time |
| **0 = Disqualify?** | **YES** |

### C11: Development Effort & Speed

| Attribute | Value |
|---|---|
| **Definition** | Estimated development time to working prototype given Workshop X capacity (~25h/week). Includes: new code, new hardware, integration complexity, testing effort |
| **Traces to** | Phase 1 roadmap (3-week prototype target), Workshop X capacity constraint |
| **What differentiates concepts** | IRONMESH-reusable principles reduce new development. Simpler architectures (flat FSM vs. actor model) are faster. Fewer new hardware components = faster prototype |
| **0 = Disqualify?** | **NO** — low score penalizes but doesn't eliminate |

---

## 4. OBJECTIVES TREE & HIERARCHICAL WEIGHTS (APPROVED)

### 4.1 Objectives Tree

```
                           OVERALL WORTH (1.000)
                                  │
              ┌───────────────────┼───────────────────┐
              │                   │                   │
       ┌──────▼──────┐    ┌──────▼──────┐     ┌──────▼──────┐
       │  A: MISSION  │    │ B: STRATEGIC│     │ C: ECONOMIC │
       │ PERFORMANCE  │    │  PLATFORM   │     │  VIABILITY  │
       │   (0.50)     │    │  FIT (0.25) │     │   (0.25)    │
       └──────┬──────┘    └──────┬──────┘     └──────┬──────┘
              │                   │                   │
      ┌──┬──┬┼──┐         ┌──┬──┼──┐            ┌───┼───┐
      │  │  ││  │         │  │  │  │            │       │
     C1 C2 C3 C4 C5      C6 C7 C8 C9         C10     C11
```

### 4.2 Level 1 Weight Allocation (User-Approved)

| Level 1 Objective | Weight | Rationale |
|---|---|---|
| **A: Mission Performance** | **0.50** | Mission is the dominant concern. AICC must perform its function safely and usably. In defense, a product that works well but costs more is preferable to one that's cheap but unreliable. User explicitly elevated this to 50% |
| **B: Strategic Platform Fit** | **0.25** | Platform decisions compound over lifecycle, but are secondary to mission performance at concept selection stage. IRONMESH integration and extensibility are enablers, not the mission itself |
| **C: Economic Viability** | **0.25** | Workshop X is capacity-constrained, but user prioritizes mission correctness over speed. Economic criteria prevent gold-plating but don't override safety or function |

**Verification:** 0.50 + 0.25 + 0.25 = 1.00 ✓

### 4.3 Level 2 Sub-weight Allocation

#### Branch A: Mission Performance (0.50)

| Criterion | Sub-weight | Final Weight | Rationale |
|---|---|---|---|
| C1: Functional Completeness | 0.22 | **0.110** | Core mission fulfillment. All concepts should meet basics; differences in edge cases and workflow completeness |
| C2: Safety & Fail-safe | 0.35 | **0.175** | **Highest weight in entire framework.** All SF reqs are Demand. Defense context: safety failure = program kill. User explicitly made Safety > Development Speed |
| C3: Operator Cognitive Load | 0.22 | **0.110** | AICC's value proposition IS the human interface. A confusing interface defeats the essential problem |
| C4: Auditability | 0.10 | **0.050** | Important for defense compliance; less differentiating at concept level |
| C5: Testability | 0.11 | **0.055** | Defense context demands rigorous verification. Architecture testability affects confidence in safety claims |

**Branch A check:** 0.22 + 0.35 + 0.22 + 0.10 + 0.11 = 1.00 ✓

#### Branch B: Strategic Platform Fit (0.25)

| Criterion | Sub-weight | Final Weight | Rationale |
|---|---|---|---|
| C6: IRONMESH Reuse | 0.35 | **0.088** | Highest in branch. Workshop X competitive moat: proven code, ecosystem flywheel, reduced development |
| C7: Standalone Capability | 0.25 | **0.063** | Risk mitigation. IRONMESH-first strategy confirmed, standalone is fallback (C6:C7 ≈ 1.4:1 per user approval) |
| C8: Multi-agent Scalability | 0.20 | **0.050** | Future-proofing. Current req is ≥4 agents; beyond that is desirable, not critical today |
| C9: Architectural Extensibility | 0.20 | **0.050** | Platform-enabling; hard to sharply differentiate at concept level |

**Branch B check:** 0.35 + 0.25 + 0.20 + 0.20 = 1.00 ✓

#### Branch C: Economic Viability (0.25)

| Criterion | Sub-weight | Final Weight | Rationale |
|---|---|---|---|
| C10: Lifecycle Cost | 0.50 | **0.125** | BOM, manufacturing, maintenance. Critical for commercial viability. Multiple BOM targets are Demand |
| C11: Development Speed | 0.50 | **0.125** | Workshop X binding constraint. Equal to cost — a cheap concept that takes forever is as bad as a fast concept that's too expensive |

**Branch C check:** 0.50 + 0.50 = 1.00 ✓

### 4.4 Final Weight Summary (Ranked)

| Rank | Criterion | Final Weight | Branch | Disqualify on 0? |
|---|---|---|---|---|
| **1** | **C2: Safety & Fail-safe** | **0.175** | A: Mission | YES |
| **2** | C1: Functional Completeness | **0.110** | A: Mission | YES |
| **2** | C3: Operator Cognitive Load | **0.110** | A: Mission | YES |
| **4** | C10: Lifecycle Cost | **0.125** | C: Economic | YES |
| **4** | C11: Development Speed | **0.125** | C: Economic | NO |
| **6** | C6: IRONMESH Reuse | **0.088** | B: Strategic | YES |
| **7** | C7: Standalone Capability | **0.063** | B: Strategic | YES |
| **8** | C5: Testability | **0.055** | A: Mission | YES |
| **9** | C4: Auditability | **0.050** | A: Mission | YES |
| **9** | C8: Multi-agent Scalability | **0.050** | B: Strategic | YES |
| **9** | C9: Architectural Extensibility | **0.050** | B: Strategic | YES |
| | **TOTAL** | **1.000** | | |

### 4.5 Weight Distribution Visualization

```
WEIGHT DISTRIBUTION:

C2  Safety & Fail-safe   █████████████████▌  0.175  ← HIGHEST (user priority)
C10 Lifecycle Cost        ████████████▌      0.125
C11 Development Speed     ████████████▌      0.125
C1  Functional Complete   ███████████        0.110
C3  Cognitive Load        ███████████        0.110
C6  IRONMESH Reuse       ████████▊          0.088
C7  Standalone            ██████▎            0.063
C5  Testability           █████▌             0.055
C4  Auditability          █████              0.050
C8  Scalability           █████              0.050
C9  Extensibility         █████              0.050
                          └──────────────────┘
                          0.00    0.10    0.20

Branch A (Mission):    0.500  ██████████████████████████████████████████████████
Branch B (Strategic):  0.250  █████████████████████████
Branch C (Economic):   0.250  █████████████████████████

Top 3 criteria = 42.5% of total (Safety + Cost + Speed)
Mission branch alone = 50.0% of total
```

**Key insight:** Safety (0.175) is now 40% heavier than Development Speed (0.125). A concept that's slower to build but demonstrably safer will score higher — reflecting defense industry reality where safety shortcuts kill programs.

---

## 5. SCORING RUBRIC (0–4 per Criterion)

### C1: Functional Completeness

| Score | Description |
|---|---|
| **0** | Cannot support core loop (monitor → alert → decide → transmit). Missing critical subfunction |
| **1** | Basic loop works but missing significant capabilities (e.g., no agent configuration FN.04, no multi-screen FN.06, incomplete state machine FN.07) |
| **2** | Full loop supported with limitations — e.g., limited alert types, basic state machine without all transitions, agent config view-only |
| **3** | All Demand functions (FN.01–FN.05, FN.07) fully supported; minor gaps in Wish functions (FN.06, FN.08) |
| **4** | All D+W functions supported with architectural margin for future functions not yet defined |

### C2: Safety & Fail-safe Integrity

| Score | Description |
|---|---|
| **0** | No fail-safe mechanism defined; E-stop path unaddressed or >500ms |
| **1** | Basic fail-safe (halt-all on failure) but E-stop 200–500ms; 2-step confirmation incomplete; connection loss handling partial |
| **2** | E-stop ≤200ms; fail-safe defined for main failure modes; 2-step confirmation for critical actions; SF.04 connection loss addressed but >1s warning |
| **3** | All SF.01–SF.05 fully addressed: E-stop <100ms, graduated fail-safe, 2-step for all critical actions, connection loss warning ≤1s + auto-safe ≤5s, unintended action prevention verified |
| **4** | All SF met with defense-in-depth: hardware watchdog + software monitoring, E-stop via hardware interrupt (<10ms), graduated degradation before halt-all, automated self-test of safety path |

### C3: Operator Cognitive Load

| Score | Description |
|---|---|
| **0** | Interface requires specialist training >40h; high ambiguity in button functions; alert confusion likely; two-hand operation required for basic tasks |
| **1** | Operable after significant training (~20h); some button function ambiguity in state-dependent modes; alerts distinguishable but require memorized patterns |
| **2** | Moderate training (~8h); clear button mapping with occasional mode confusion; alerts visually distinct; one-hand possible for most operations |
| **3** | Minimal training (~4h); button mapping intuitive with on-screen guidance; multi-modal alerts clearly differentiated; one-hand operation for all primary functions (ER.01) |
| **4** | Near-zero training for basic operations (<2h); self-documenting interface; context-aware visual guides; alert → action path feels natural; cognitive switching between modes minimized |

### C4: Auditability & Decision Traceability

| Score | Description |
|---|---|
| **0** | No audit trail capability; human decisions not logged |
| **1** | Basic timestamped event logging; incomplete state transition coverage; no tamper evidence |
| **2** | All decisions logged with timestamps; state transitions recorded; storage not tamper-evident; exportable but not cryptographically verified |
| **3** | Complete decision chain reconstructable (FN.05); tamper-evident storage (SI.11); all state transitions logged; exportable audit data compatible with standard formats |
| **4** | Real-time audit streaming capability; cryptographic integrity verification; automated audit report generation; meets MIL-STD compliance for command decision logging |

### C5: Testability

| Score | Description |
|---|---|
| **0** | Architecture has untestable components; safety path verification requires full live deployment with real agents |
| **1** | Basic testing possible but requires full system integration for most verification; state machine cannot be exhaustively tested without live system |
| **2** | Major components testable in isolation (modular); integration testing feasible with mock agents; safety path testable but not all edge cases coverable |
| **3** | Each subfunction independently testable; state machine fully enumerable (all states × transitions verifiable); fault injection possible for all safety-critical paths; mock agent framework viable |
| **4** | Architecture designed for testability: built-in self-test (BIST) modes; hardware-in-loop simulation support; regression test automation feasible; safety path verification automatable |

### C6: IRONMESH Ecosystem Reuse

| Score | Description |
|---|---|
| **0** | <20% reuse; concept largely ignores IRONMESH ecosystem; builds parallel infrastructure |
| **1** | 20–40% reuse; uses IRONMESH for basic networking only; remaining infrastructure rebuilt |
| **2** | 40–55% reuse; uses IRONMESH OS + CDM + some framework components; significant adaptation needed |
| **3** | 55–70% reuse; majority of non-core (F1, F5) functions from IRONMESH; core AICC functions (F2, F3, F4) leverage IRONMESH frameworks where applicable; integration feels natural |
| **4** | >70% reuse; all plug-in functions (F1, F5) from IRONMESH with zero modification; AICC-specific development (F2, F3, F4) builds ON IRONMESH frameworks, not beside them |

### C7: Standalone Operational Capability

| Score | Description |
|---|---|
| **0** | Cannot function at all without IRONMESH; IRONMESH failure = AICC failure |
| **1** | Degraded display-only mode possible (show last-known state); no agent communication without IRONMESH |
| **2** | Can connect to non-IRONMESH agents via protocol adapters; limited standalone functionality; requires significant configuration for non-IRONMESH use |
| **3** | Full standalone mode with generic protocol support (PL.04); IRONMESH is preferred but optional; mode switching seamless |
| **4** | Protocol-agnostic by design; IRONMESH is one of multiple natively supported ecosystems; zero IRONMESH dependency for core function; standalone is not "degraded mode" but "standard mode" |

### C8: Multi-agent Scalability

| Score | Description |
|---|---|
| **0** | Hard-coded agent limit; architecture breaks beyond 4 agents |
| **1** | Supports 4 agents (PL.08 minimum); 5–8 causes display clutter or state management issues |
| **2** | Supports 4–8 agents cleanly; 8–16 possible with UI degradation; multi-AICC sync not supported |
| **3** | Supports 16+ agents architecturally; display and state management scale linearly; multi-AICC sync feasible (OP.05) |
| **4** | No architectural agent limit; dynamic agent discovery/removal; multi-AICC coordination built into architecture; horizontal scaling proven |

### C9: Architectural Extensibility

| Score | Description |
|---|---|
| **0** | Locked to CM4 + single display type + single input method; different form factor = complete redesign |
| **1** | Compute module abstracted but display and input tightly coupled to one configuration |
| **2** | Compute + display abstracted; new form factor requires moderate adaptation (weeks of engineering) |
| **3** | Clean HAL abstracts compute, display, and input; new form factor = configuration change, not code change; new compute module = HAL driver only |
| **4** | Fully plugin architecture; new modules (compute, display, input, network) plug in via defined interfaces; variant creation = configuration file + optional hardware-specific driver |

### C10: Estimated Lifecycle Cost

| Score | Description |
|---|---|
| **0** | Estimated BOM >2× target for all variants; not commercially viable |
| **1** | BOM 1.5–2× target; significant cost reduction needed; local content <40% |
| **2** | BOM 1.0–1.5× target; some optimization needed; local content 40–55%; assembly time 30–45min |
| **3** | BOM meets target for all variants (MF.02–MF.04); assembly ≤30min (MF.05); local content ≥60% (MF.01) |
| **4** | BOM below target with margin; minimal component count; local content ≥70%; assembly <20min; low maintenance cost design |

### C11: Development Effort & Speed

| Score | Description |
|---|---|
| **0** | Estimated >16 weeks to working prototype at ~25h/week; requires skills Workshop X doesn't have |
| **1** | 12–16 weeks; significant new development; several unknown technical risks |
| **2** | 8–12 weeks; moderate new development; some IRONMESH reuse; known risks manageable |
| **3** | 4–8 weeks; majority reuse + focused new development; aligns with Phase 1 roadmap target (3 weeks); risks well-understood |
| **4** | ≤4 weeks; maximum reuse; minimal new code; fastest path to market feedback and learning |

---

## 6. BLANK EVALUATION MATRIX

### 6.1 Scoring Template

Use this matrix to score concept variants. **Do NOT modify criteria or weights.**

| # | Criterion | Weight | Variant A: _____ | Variant B: _____ | Variant C: _____ | Variant D: _____ |
|---|---|---|---|---|---|---|
| | | w_i | Score (0-4) | Score (0-4) | Score (0-4) | Score (0-4) |
| C1 | Functional Completeness | 0.110 | | | | |
| C2 | Safety & Fail-safe | 0.175 | | | | |
| C3 | Operator Cognitive Load | 0.110 | | | | |
| C4 | Auditability | 0.050 | | | | |
| C5 | Testability | 0.055 | | | | |
| C6 | IRONMESH Reuse | 0.088 | | | | |
| C7 | Standalone Capability | 0.063 | | | | |
| C8 | Multi-agent Scalability | 0.050 | | | | |
| C9 | Architectural Extensibility | 0.050 | | | | |
| C10 | Lifecycle Cost | 0.125 | | | | |
| C11 | Development Speed | 0.125 | | | | |
| | **Weighted Sum** | **1.000** | Σ(w_i × s_i) = | Σ(w_i × s_i) = | Σ(w_i × s_i) = | Σ(w_i × s_i) = |
| | **Maximum Possible** | | 4.000 | 4.000 | 4.000 | 4.000 |
| | **Relative Worth** | | Σ/4.000 = | Σ/4.000 = | Σ/4.000 = | Σ/4.000 = |
| | **Pass ≥ 0.70?** | | | | | |
| | **Any 0 on D-criterion?** | | | | | |

### 6.2 Calculation Instructions

```
For each concept variant:

1. Score each criterion 0-4 using the rubric in Section 5
2. Calculate weighted score: w_i × s_i for each row
3. Sum all weighted scores: Σ(w_i × s_i)
4. Calculate relative worth: Σ(w_i × s_i) / 4.000
5. Check pass threshold: relative worth ≥ 0.70?
6. Check disqualification: any Demand-backed criterion (C1-C10) scored 0?
7. Rank passing concepts by relative worth
```

### 6.3 Sensitivity Check Template (P&B §3.3.4)

After scoring, verify that the result is robust by testing:

| Sensitivity Test | Method | If Result Changes... |
|---|---|---|
| **±20% on C2 (Safety)** | Recalculate with w_C2 = 0.140 and 0.210 | Rankings should NOT change — if they do, the winning concept's safety margin is thin |
| **±20% on C11 (Speed)** | Recalculate with w_C11 = 0.100 and 0.150 | Acceptable to change — speed is a pragmatic, not mission-critical weight |
| **Swap C6/C7 weights** | Set C6=0.063, C7=0.088 (invert IRONMESH vs. standalone) | Tests strategic assumption — should reveal which concept is most robust to strategy change |
| **Equal weights (all 0.091)** | Remove hierarchical weighting | If winner changes, the hierarchy is driving the decision — document why the hierarchy is correct |

---

## 7. DOCUMENT CONTROL

### 7.1 Version History

| Version | Date | Change |
|---|---|---|
| 0.9 | 2026-02-19 | Initial draft: 10 criteria, 40/30/30 weights, C10 as #1 weight |
| 1.0 | 2026-02-19 | Reviewer corrections: 50/25/25 weights, C2 Safety as #1, Testability added (11 criteria), disqualification only on Demand-backed criteria, scoring rubric + blank matrix finalized |

### 7.2 Approval

| Role | Name | Decision | Date |
|---|---|---|---|
| Project Lead / Workshop X | KN Nguyen | Approved with corrections (50/25/25, Safety #1, +Testability, D-only disqualify) | 2026-02-19 |

---

*Document ID: VN-AICC-001-P2-S3-v1.0*
*Method: VDI 2225 Nutzwertanalyse (P&B §3.3.4)*
*Status: ✅ APPROVED — Ready for concept variant evaluation*
*Next: Apply framework to evaluate concept variants from Step 2 (Morphological Matrix)*
