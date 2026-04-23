---
created: 2026-04-09
type: platform-planning
method: Pahl & Beitz §3.1-3.3 (adapted for platform)
version: v1.0
project: IRONMESH
status: active
approach: Product-First (CEO decision 2026-04-09)
feeds_to:
  - All WX product lines (BB-01, VN-CUAV-SIM, VN-AICC, VN-AST, TARGET-DRONE, VN-XUONG, VN-MGM)
  - FORGE: /portfolio (ecosystem-level)
  - HELIX: interface specs per product
---

# Platform Planning — IRONMESH Shared Platform Layer

## 1. Stimulus Classification (Step 1)

| Source | Classification |
|---|---|
| **Company** | Portfolio evolution — 5 original IRONMESH products absorbed into 4 active product lines |
| **Environment** | WX portfolio grew 5 → 31 products across 8 projects. Without explicit interface architecture, shared modules will fragment into product-specific forks |

**Stimulus statement:** IRONMESH Freeze Order superseded (2026-04-09). The original 5-product line (VN-LOMAH, VN-CAM, VN-TRN, VN-SMASH, CORTEX) has been absorbed/distributed across BB-01, VN-CUAV-SIM, VN-AICC, and VN-AST ecosystems. IRONMESH is re-planned as a **shared platform layer** enabling 50-93% code reuse compound mechanism — not as a standalone product line.

---

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase

```
[PRE-INTRODUCTION] → Introduction → Growth → Maturation → Saturation → Decline
      ↑ HERE
```

Platform concept proven (6 archived project analyses, Galaxy note). Individual modules exist inside products (V-SMASH in CUAV-SIM, scoring concept in BB-01) but not as extractable, versioned platform components. No unified platform code deployed yet.

**Implication:** Define interfaces NOW (cheap). Extract shared code LATER (when ≥2 products use same module in production).

### 2b. Product-Market Matrix (Ansoff)

```
                    EXISTING MARKETS        NEW MARKETS
                    (VN military training)   (Export, civil)
EXISTING PRODUCTS   BB-01, CUAV-SIM, AST    Future (2028+)
                    [PENETRATION]
NEW PRODUCTS        IRONMESH Platform        Future
                    [PRODUCT DEV — internal]
```

IRONMESH "customer" = internal WX product lines. External market via VN-AICC terminal (subscription model). Medium risk.

### 2c. Company Competence Assessment

| Dimension | WX Capability | Gap | Action |
|---|---|---|---|
| Technical | Unity, Python, C/C++, AI (Hailo-8), CNC | No platform engineering experience (API design, versioning) | [GAP-1] Learn when first extraction triggers |
| Market | Vietnamese military training | Platform is internal — no direct market gap | N/A |
| Financial | Self-funded, pre-revenue | Platform competes with product delivery for CEO time | Extract FROM products, don't build separately |
| Production | Solo engineer (25h/week) | Cannot build platform AND products in parallel | Product-First: platform emerges from products |

### 2d. Technology Readiness Level

| Platform Module | Current TRL | Evidence | Risk |
|---|---|---|---|
| Ballistics Engine (V-SMASH) | TRL 5 | Running in VN-CUAV-SIM prototype [L2-PROTOTYPE] | Low |
| Scoring System | TRL 4 | BB-01 concept selected, algorithm designed [L2-PROTOTYPE] | Medium |
| 3D Visualization Engine | TRL 5 | Unity engine running in CUAV-SIM [L2-PROTOTYPE] | Low |
| CDM Protocol | TRL 3 | Defined in IRONMESH docs, not implemented [L5-ASSUMPTION] | High |
| Training Analytics (AAR) | TRL 3 | VN-CUAV-SIM AAR spec exists, not built [L5-ASSUMPTION] | High |
| Fire Control Algorithms | TRL 3 | Archived analysis shows 50-93% reuse potential [L4-ESTIMATE] | High |
| C2 Integration (CORTEX) | TRL 2 | Concept level, distributed to VN-AICC [L5-ASSUMPTION] | High |

**PROCEED gate:** 3/7 modules at TRL ≥4. Remaining 4 modules at TRL 2-3 — acceptable under Product-First (they develop inside products, not separately).

**CEO Decision (2026-04-09):** Product-First approach. Don't extract platform code. Define interfaces only. Extract shared modules when ≥2 products use same module in production.

---

## 3. Need-Strength Matrix (Step 3) — Products × Platform Modules

```
                         PLATFORM MODULE CANDIDATES
                    Ballistics  Scoring   3D Viz   CDM      AAR      Fire     C2
                    (V-SMASH)   (LOMAH)   (Unity)  Protocol Analytics Control  (CORTEX)
PRODUCTS   ─────────────────────────────────────────────────────────────────────────────
BB-01 LOMAH        │    ○      │ ★★★    │   ○     │  ★★   │  ★     │   ○    │  ★     │
VN-CUAV-SIM        │  ★★★     │  ★★    │ ★★★    │  ★★   │ ★★★   │  ★★   │  ★★   │
VN-AICC            │    ○      │   ★     │   ★     │ ★★★  │  ★★   │   ○    │ ★★★  │
VN-AST-MSL-001     │    ○      │   ○     │   ○     │  ★★   │   ○    │   ○    │   ★   │
TARGET-DRONE-001   │    ★      │  ★★    │   ★     │  ★★   │  ★★   │   ○    │   ★   │
VN-XUONG-UUV       │    ○      │   ○     │   ○     │  ★★   │   ○    │   ○    │   ★   │
VN-MGM             │    ○      │   ○     │   ○     │   ★    │   ○    │  ★★   │   ○    │
─────────────────────────────────────────────────────────────────────────────────────────
Products needing:     2          3         2         7        4        2        5
TRL now:              5          4         5         3        3        3        2

★★★ = core dependency  ★★ = significant use  ★ = light use  ○ = not needed
```

### Preferred Search Fields (★★★ intersections)

1. **CDM Protocol × ALL products** — 7/7 products need device communication. Highest breadth.
2. **Scoring × BB-01** — core function, also consumed by CUAV-SIM + TARGET-DRONE
3. **AAR × VN-CUAV-SIM** — core function, also consumed by VN-AICC + TARGET-DRONE
4. **Ballistics × VN-CUAV-SIM** — V-SMASH already running, TARGET-DRONE will need it
5. **C2 × VN-AICC** — AICC IS the C2 terminal

---

## 4. Portfolio Assessment (Step 4) — Platform Investment Allocation

| Investment Type | Market Appeal (1-5) | WX Strength (1-5) | Score | Zone |
|---|---|---|---|---|
| Product delivery (BB-01, CUAV-SIM, AST) | 5 | 4 | 20 | **TARGET — invest** |
| IRONMESH interface specs (paper) | 4 | 4 | 16 | **TARGET — invest** |
| IRONMESH platform code extraction | 3 | 2 | 6 | **EXIT — don't invest separately** |

**Decision rule:** Spend 0% time on platform code. Spend minimal time on interface specs (define WHEN products need to talk to each other). Spend 100% time on product delivery.

---

## 5. Knowledge Audit (Step 5a) — No Research Gaps

| Domain | RE? | Research? | NLM? | WX? | Status | Action |
|---|---|---|---|---|---|---|
| CDM Protocol spec | ✗ | ✓ | ✗ | ✓ | Partial | Define from product needs when triggered |
| Scoring data format | ✗ | ✗ | ✗ | ✓ | Gap | Extract from BB-01 Phase 1 reqs |
| AAR data format | ✗ | ✓ | ✗ | ✓ | Partial | Extract from CUAV-SIM Phase 2 |
| V-SMASH API | ✗ | ✗ | ✗ | ✓ | In code | Document when stable |
| HYBRID-BRIDGE protocol | ✗ | ✗ | ✗ | ✗ | **Full gap** | Define when BB-01 ↔ CUAV-SIM integrate |
| VN-AICC terminal API | ✗ | ✗ | ✗ | ✓ | Partial | Extract from AICC embodiment |

**No /research --deep needed.** All knowledge exists within WX products. Gap = consolidation, not discovery.

---

## 6. Architecture Decision: Product-First Extraction Model

### 6.1 Core Principle

> **"Platform code is EXTRACTED from working products, never built in isolation."**
>
> — Consistent with Musk Sequence (serial, proven-first), P&B Physical-World Interface (platform only has value when products deploy), and WX 25h/week constraint (cannot afford parallel platform engineering).

### 6.2 Extraction Trigger Rules

A module becomes a shared platform component when ALL of these are true:

1. **≥2 products** use the same functional module in **production** (not concept/paper)
2. **Code duplication** is measurable (copy-paste between project repos)
3. **Interface is stable** — the module's inputs/outputs haven't changed for ≥1 release cycle
4. **CEO judges** extraction effort < continued duplication cost (Core decision)

Until ALL 4 conditions are met → module stays product-specific. No premature abstraction.

### 6.3 What IRONMESH Project Manages (Scope)

Instead of platform code, IRONMESH project manages:

| Artifact | Purpose | When |
|---|---|---|
| **Ecosystem Map** | Visual map of cross-product connections | NOW — see companion document |
| **Interface Spec Registry** | CDM message formats, data schemas, API contracts | When 2 products need to communicate |
| **Extraction Trigger Log** | Track which modules are approaching extraction threshold | Quarterly review |
| **Module Extraction Decisions** | CEO decision log when extraction triggers fire | When triggered |
| **Reuse Metrics** | Track actual % reuse vs projected 50-93% | Post-deployment |

### 6.4 IRONMESH ≠ Project in Traditional Sense

IRONMESH does NOT follow the standard Pahl-Beitz Phase 0→4 pipeline. It is:
- **Not a product** — no customer buys "IRONMESH"
- **Not a project with a deadline** — it lives as long as WX products exist
- **An ongoing governance artifact** — ecosystem map + interface specs + extraction decisions

**Recommendation:** After this /plan completes, move IRONMESH from `1_Projects/` to `2_Areas/FORGE — Product Strategy/IRONMESH/` as a permanent Area artifact. It was correctly located there before the re-evaluation.

---

## 7. Platform Module Roadmap (Adapted Product Proposal)

### Module Extraction Priority & Timeline

| Priority | Module | TRL | Products | Extraction Trigger | Earliest |
|---|---|---|---|---|---|
| 1 | **CDM Protocol** | 3 | 7/7 | BB-01 + CUAV-SIM both field-communicate | Q3 2026 [L5] |
| 2 | **Scoring System** | 4 | 3/7 | HYBRID-BRIDGE connects BB-01 live ↔ CUAV-SIM sim | Q4 2026 [L5] |
| 3 | **AAR Analytics** | 3 | 4/7 | TARGET-DRONE or BB-01 needs same AAR format as CUAV-SIM | Q1 2027 [L5] |
| 4 | **Ballistics (V-SMASH)** | 5 | 2/7 | TARGET-DRONE flight model references V-SMASH | Q2 2027 [L5] |
| 5 | **3D Viz (Unity/CTF)** | 5 | 2/7 | Already shared via CTF (CUAV-SIM + XUONG V9-TRAIN) | **Already triggered** |
| 6 | **Fire Control** | 3 | 2/7 | VN-MGM reaches Phase 2 | 2027+ [L5] |
| 7 | **C2 (CORTEX)** | 2 | 5/7 | VN-AICC ships V1 | 2027+ [L5] |

### Interface Spec Roadmap (What to define NOW vs LATER)

| Interface | Between | Define When | Spec Owner |
|---|---|---|---|
| **Scoring Data Format** | BB-01 → CUAV-SIM, BB-01 → AICC | BB-01 Phase 2 (concept selected) | BB-01 project |
| **HYBRID-BRIDGE Protocol** | BB-01 ↔ CUAV-SIM (live↔sim) | When both reach Phase 3 | Joint — CUAV-SIM leads |
| **CDM Message Format** | All products ↔ AICC | VN-AICC Phase 3 resume | VN-AICC project |
| **AAR Data Schema** | CUAV-SIM → AICC, TARGET-DRONE → AICC | CUAV-SIM Phase 3 | CUAV-SIM project |
| **V-SMASH API** | CUAV-SIM engine ↔ TARGET-DRONE | TARGET-DRONE Phase 2 | CUAV-SIM project |
| **Telemetry Format** | VN-AST / VN-XUONG → C2 | VN-AST Phase 4 or VN-XUONG Phase 3 | Per product |

**Key principle:** Interface spec ownership belongs to the **product that builds the module first**. Second consumer adapts to existing interface, or negotiates changes through IRONMESH governance.

---

## 8. Gate 0 Quick Check

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4 for key technologies? | 3/7 modules TRL ≥4. Acceptable under Product-First (others develop in-product) | ✅ PASS |
| Local content ≥40% achievable? | All software, local hardware integration | ✅ PASS |
| Competitive advantage clear? | 50-93% reuse = 91% cost reduction vs competitors [L4-ESTIMATE] | ✅ PASS |
| Within WX financial capacity? | Zero additional investment — platform extracted from products | ✅ PASS |
| Aligns with portfolio strategy? | Enables $23.6M / 5yr cross-product ecosystem | ✅ PASS |
| No IP/regulatory blockers? | Internal platform, no external IP issues | ✅ PASS |

**Gate 0: PROCEED** — as governance artifact, not as traditional product project.

---

## Appendix A: CEO Decisions Record

| # | Decision | Date | Context |
|---|---|---|---|
| 1 | Product-First approach (Option 3) | 2026-04-09 | TRL split: 3 modules ready, 4 not. Solo engineer constraint. |
| 2 | Platform + Ecosystem scope (Option C) | 2026-04-09 | IRONMESH value IS the cross-product compound effect |
| 3 | Need-Strength matrix validated | 2026-04-09 | 7-module × 7-product mapping confirmed |
| 4 | No research gaps | 2026-04-09 | All knowledge exists in active projects |
| 5 | IRONMESH = governance artifact, not product | 2026-04-09 | Recommend move to Areas/FORGE |

## Appendix B: Original IRONMESH Products → Current Reality

| # | Original Product | Status | Current Location |
|---|---|---|---|
| 1 | VN-LOMAH | ABSORBED | BB-01 STANDARD (V1) |
| 2 | VN-CAM | ARCHIVED | VN-AICAM (4_Archives/) |
| 3 | VN-TRN | ABSORBED | VN-CUAV-SIM AAR-SaaS + BB-01 analytics |
| 4 | VN-SMASH | ABSORBED | V-SMASH engine inside VN-CUAV-SIM |
| 5 | CORTEX | DISTRIBUTED | VN-AICC + product-specific CORTEX variants |
| 6 | VN-RANGE-001 | ABSORBED | BB-01 CORTEX-RANGE (V6) + VN-CUAV-SIM |

## Appendix C: Evidence Tier Legend

| Tag | Meaning |
|---|---|
| [L1-FIELD] | Field test data from deployed system |
| [L2-PROTOTYPE] | Prototype or lab demonstration |
| [L3-STANDARDS] | Published standard or peer-reviewed source |
| [L4-ESTIMATE] | Competitive intelligence or engineering estimate |
| [L5-ASSUMPTION] | Assumption — needs validation |
