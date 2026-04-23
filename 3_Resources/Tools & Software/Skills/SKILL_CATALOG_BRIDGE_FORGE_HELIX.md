# SKILL & COMMAND CATALOG
## BRIDGE x FORGE x HELIX x DMIR -- Complete Mapping

**Date**: 2026-03-05
**Source**: Skill Architecture v2 documents (BRIDGE, FORGE, HELIX, DMIR)
**Purpose**: Map all 38 framework skills to implementable Claude Code `/commands`

---

# 1. ARCHITECTURE OVERVIEW

```
DMIR META-LAYER (8 skills) -- "How we THINK about the system"
  |
  +-- Applied TO:
      |
      +-- BRIDGE (10 skills) -- "How we OPERATE the organization"
      |     |
      |     +-- Feeds knowledge + signals TO:
      |
      +-- FORGE (10 skills) -- "WHAT products to build, WHICH ACH to apply"
      |     |
      |     +-- Wraps:
      |
      +-- HELIX (10 skills) -- "HOW to execute each product's design"
```

---

# 2. EXISTING SKILLS (Already Implemented)

These are currently registered as Claude Code slash commands:

| Command | Maps To | Framework | Status |
|---------|---------|-----------|--------|
| `/odi` | `forge-scout` (partial) | FORGE | Active |
| `/jobs` | `forge-scout` (partial) | FORGE | Active |
| `/outcomes` | `forge-scout` (partial) | FORGE | Active |
| `/opp` | `forge-scout` (partial) | FORGE | Active |
| `/seg` | `forge-scout` (partial) | FORGE | Active |
| `/wp` | `helix-concept-generate` (partial) | HELIX | Active |
| `/gate0` | `helix-quality-gate` Phase 0 | HELIX | Active |
| `/gate2` | `helix-quality-gate` Phase 2 | HELIX | Active |
| `/qc` | `bridge-automate` (quality) | BRIDGE | Active |
| `/bom` | `helix-detail-finalize` (partial) | HELIX | Active |
| `/lcc` | `forge-cost` (partial) | FORGE | Active |
| `/verify` | `helix-quality-gate` (partial) | HELIX | Active |
| `/opt` | `helix-embody-realize` (partial) | HELIX | Active |
| `/leverage` | `dmir-lever` (partial) | DMIR | Active |
| `/reflect` | `dmir-reflect` | DMIR | Active |
| `/catchup` | (utility) | -- | Active |
| `/checkpoint` | (utility) | -- | Active |
| `/pr` | (utility) | -- | Active |

**Coverage: 17 commands implemented / 38 skills defined = 45%**

---

# 3. GAP ANALYSIS: Skills Without Commands

## 3.1 BRIDGE -- 10 Skills (1 implemented, 9 missing)

| # | Skill | Command | Priority | Rationale |
|---|-------|---------|----------|-----------|
| B1 | `bridge-knowledge-base` | `/kb` | HIGH | Foundation -- all other skills depend on KB |
| B2 | `bridge-deploy-gate` | `/deploy` | MEDIUM | Controls product launch sequence |
| B3 | `bridge-signal-extract` | `/signal` | HIGH | Captures insights from every interaction |
| B4 | `bridge-automate` | `/qc` (exists) | -- | Already partially covered by /qc |
| B5 | `bridge-judgment` | `/decide` | MEDIUM | Decision log + quality support |
| B6 | `bridge-flywheel` | `/flywheel` | LOW | Requires B1-B5 first |
| B7 | `bridge-risk-radar` | `/risk` | HIGH | Early warning for org risks |
| B8 | `bridge-cross-learn` | `/xlearn` | LOW | Cross-product learning sessions |
| B9 | `bridge-dashboard` | `/dash` | HIGH | Unified CEO weekly view (15 min) |
| B10 | `bridge-talent-map` | `/talent` | LOW | Knowledge risk mapping |

## 3.2 FORGE -- 10 Skills (5 partially implemented, 5 missing)

| # | Skill | Command | Priority | Rationale |
|---|-------|---------|----------|-----------|
| F1 | `forge-scout` | `/odi` `/jobs` `/opp` `/seg` (exist) | -- | Covered by ODI suite |
| F2 | `forge-shift` | `/shift` | HIGH | ACH Go/No-Go -- core strategic decision |
| F3 | `forge-fallback` | `/fallback` | MEDIUM | Fallback architecture design |
| F4 | `forge-validate` | `/validate` | HIGH | Validation infrastructure + test design |
| F5 | `forge-trust` | `/trust` | MEDIUM | Customer trust evidence tracker |
| F6 | `forge-library` | `/library` | LOW | Model library management (needs ACH products first) |
| F7 | `forge-flywheel` | `/data-fly` | LOW | Data flywheel tracking |
| F8 | `forge-portfolio` | `/portfolio` | HIGH | Portfolio dashboard + prioritization |
| F9 | `forge-cost` | `/lcc` (exists, partial) | -- | Partially covered |
| F10 | `forge-evolve` | `/evolve` | LOW | Competitive moat evolution |

## 3.3 HELIX -- 10 Skills (4 partially implemented, 6 missing)

| # | Skill | Command | Priority | Rationale |
|---|-------|---------|----------|-----------|
| H1 | `helix-project-init` | `/init` | HIGH | Project setup with Triple Helix structure |
| H2 | `helix-task-clarify` | `/clarify` | HIGH | Phase 1: requirements + abstraction |
| H3 | `helix-concept-generate` | `/concept` | HIGH | Phase 2: morpho matrix + VDI 2225 |
| H4 | `helix-embody-realize` | `/embody` | HIGH | Phase 3: layout + DfX + materials |
| H5 | `helix-detail-finalize` | `/detail` | MEDIUM | Phase 4: drawings + BOM + docs |
| H6 | `helix-sync-protocol` | `/sync` | MEDIUM | Monthly cross-domain sync |
| H7 | `helix-integration-debt` | `/icd` | MEDIUM | ICD tracking + debt management |
| H8 | `helix-quality-gate` | `/gate0` `/gate2` (exist) | PARTIAL | Need `/gate1` `/gate3` `/gate4` |
| H9 | `helix-6flow-mapper` | `/6flow` | MEDIUM | 6-flow function structure (D-C-T + E-M-S) |
| H10 | `helix-design-journal` | `/journal` | LOW | Design decision log |

## 3.4 DMIR Meta-Layer -- 8 Skills (2 implemented, 6 missing)

| # | Skill | Command | Priority | Rationale |
|---|-------|---------|----------|-----------|
| D1 | `dmir-map` | `/cld` | MEDIUM | Causal Loop Diagram for any subsystem |
| D2 | `dmir-archetype` | `/archetype` | MEDIUM | System archetype detection |
| D3 | `dmir-model` | `/sdmodel` | LOW | Full SD model (heavy, quarterly use) |
| D4 | `dmir-constrain` | `/constraint` | HIGH | Scientific constraint identification |
| D5 | `dmir-lever` | `/leverage` (exists) | -- | Already implemented |
| D6 | `dmir-reflect` | `/reflect` (exists) | -- | Already implemented |
| D7 | `dmir-paradigm` | `/paradigm` | LOW | Formal paradigm challenge (quarterly) |
| D8 | `dmir-cycle-plan` | `/cycle` | LOW | DMIR cycle planning |

---

# 4. RECOMMENDED IMPLEMENTATION ORDER

## Phase 1: Foundation (Week 1-2) -- 6 commands

These unlock the highest value and are prerequisites for others.

| # | Command | Skill | Why First |
|---|---------|-------|-----------|
| 1 | **`/dash`** | `bridge-dashboard` | CEO needs unified view NOW. 15 min/week habit. Pulls from all frameworks. |
| 2 | **`/portfolio`** | `forge-portfolio` | Portfolio-level view of all products. Required for CEO prioritization. |
| 3 | **`/init`** | `helix-project-init` | Every new project starts here. Creates folder structure + Phase 0 artifacts. |
| 4 | **`/clarify`** | `helix-task-clarify` | Phase 1 is where most projects live. Automates requirements generation. |
| 5 | **`/concept`** | `helix-concept-generate` | Phase 2 consolidation. Wraps /wp + morpho + VDI 2225 into single flow. |
| 6 | **`/constraint`** | `dmir-constrain` | Scientific bottleneck ID. Prevents CEO from guessing wrong constraint. |

## Phase 2: Strategy (Week 3-4) -- 5 commands

| # | Command | Skill | Why Now |
|---|---------|-------|---------|
| 7 | **`/shift`** | `forge-shift` | ACH evaluation checklist. Every new product needs this. |
| 8 | **`/embody`** | `helix-embody-realize` | Phase 3 is where VN-12.7MM-SIM is NOW. Immediate need. |
| 9 | **`/risk`** | `bridge-risk-radar` | Early warning system. Feeds /dash. |
| 10 | **`/signal`** | `bridge-signal-extract` | Captures insights from meetings/reviews. Feeds KB. |
| 11 | **`/validate`** | `forge-validate` | Validation test planning. Required for physical gates. |

## Phase 3: Depth (Week 5-8) -- 6 commands

| # | Command | Skill | Why Now |
|---|---------|-------|---------|
| 12 | **`/gate1`** | `helix-quality-gate` Phase 1 | Complete the gate review suite. |
| 13 | **`/gate3`** | `helix-quality-gate` Phase 3 | Needed for VN-12.7MM-SIM embodiment gate. |
| 14 | **`/decide`** | `bridge-judgment` | Structured decision support + decision log. |
| 15 | **`/6flow`** | `helix-6flow-mapper` | Triple Helix function structure (E-M-S + D-C-T). |
| 16 | **`/cld`** | `dmir-map` | Causal loop diagrams for system analysis. |
| 17 | **`/fallback`** | `forge-fallback` | Fallback architecture for ACH products. |

## Phase 4: Compound (Month 3+) -- 8 commands

| # | Command | Skill | Why Later |
|---|---------|-------|-----------|
| 18 | `/kb` | `bridge-knowledge-base` | Requires content to index (needs B3 signal-extract first) |
| 19 | `/detail` | `helix-detail-finalize` | No projects at Phase 4 yet |
| 20 | `/icd` | `helix-integration-debt` | Needs ICD data from Phase 3+ |
| 21 | `/sync` | `helix-sync-protocol` | Monthly sync -- implement after projects enter Phase 3 |
| 22 | `/archetype` | `dmir-archetype` | Useful but not urgent |
| 23 | `/deploy` | `bridge-deploy-gate` | Product launch control -- no products at launch stage |
| 24 | `/trust` | `forge-trust` | Customer relationship tracking -- CEO-led |
| 25 | `/journal` | `helix-design-journal` | Design decision log -- nice-to-have |

## Phase 5: Flywheel (Month 6+) -- 4 commands

| # | Command | Skill | Why Last |
|---|---------|-------|----------|
| 26 | `/flywheel` | `bridge-flywheel` | Requires operational data from months of use |
| 27 | `/data-fly` | `forge-flywheel` | Data flywheel -- needs ACH products in production |
| 28 | `/evolve` | `forge-evolve` | Competitive moat -- strategic, long-term |
| 29 | `/xlearn` | `bridge-cross-learn` | Cross-product learning -- needs multiple mature products |

## Not Prioritized (activate on demand):

| Command | Skill | When |
|---------|-------|------|
| `/talent` | `bridge-talent-map` | When team grows beyond solo CEO |
| `/library` | `forge-library` | When ACH models deployed to production |
| `/sdmodel` | `dmir-model` | Quarterly deep analysis |
| `/paradigm` | `dmir-paradigm` | Quarterly paradigm challenge |
| `/cycle` | `dmir-cycle-plan` | Annual DMIR cycle planning |
| `/gate4` | `helix-quality-gate` Phase 4 | When products enter Phase 4 |

---

# 5. COMMAND SPECIFICATION TEMPLATE

Each command should follow this structure:

```yaml
name: /command-name
skill: framework-skill-name
framework: BRIDGE | FORGE | HELIX | DMIR
phase: 0-4 | Cross | Meta
trigger: "keywords that activate this command"
human_ai: "AI Draft -> Human Decides" | "Human Specifies -> AI Executes" | etc.

inputs:
  - what the command reads/expects

outputs:
  - what the command produces

workflow:
  1. Step 1 (role: AI/Human)
  2. Step 2 (role: AI/Human)
  ...

integration:
  feeds_to: [other commands]
  receives_from: [other commands]

cost_tier: haiku | sonnet | opus
```

---

# 6. CROSS-FRAMEWORK FLOW

```
CEO Session Start
    |
    +-->/catchup          (resume from last session)
    |
    +-->/dash             (bridge-dashboard: 15-min weekly CEO view)
    |     |
    |     +-- Shows: BRIDGE 40% | FORGE 31% | HELIX 29%
    |     +-- Shows: Active projects + physical gates + blocking constraints
    |     +-- Shows: dP/dt, dJ/dt, Galaxy growth, AI dependency ratio
    |
    +-->/constraint       (dmir-constrain: what's the bottleneck?)
    |     |
    |     +-- Result: "HELIX is binding at 29%. Reason: no Phase 3 skill."
    |
    +-->/portfolio        (forge-portfolio: product prioritization)
    |     |
    |     +-- VN-12.7MM-SIM: Phase 3, brake prototype (30-day gate)
    |     +-- VN-AST-MSL-001: Phase 4, 6 open questions (gate 2026-04-04)
    |     +-- BB-01: Phase 1, task clarification
    |
    +-- Work on highest-priority project:
    |     |
    |     +-->/embody      (VN-12.7MM-SIM Phase 3)
    |     +-->/clarify     (BB-01 Phase 1)
    |     +-->/detail      (VN-AST-MSL-001 Phase 4)
    |
    +-->/reflect           (dmir-reflect: what did we learn?)
    |
    +-->/checkpoint        (save session state)
```

---

# 7. COMPOUND LAW IMPACT

```
Current:   BRIDGE(40%) x FORGE(31%) x HELIX(29%) = 3.6% compound
           17 commands / 38 skills = 45% skill coverage

Phase 1:   +6 commands -> 23/38 = 61% coverage
           Estimated: BRIDGE(45%) x FORGE(35%) x HELIX(35%) = 5.5% compound
           Improvement: +53%

Phase 2:   +5 commands -> 28/38 = 74% coverage
           Estimated: BRIDGE(50%) x FORGE(40%) x HELIX(40%) = 8.0% compound
           Improvement: +122%

Phase 3:   +6 commands -> 34/38 = 89% coverage
           Estimated: BRIDGE(55%) x FORGE(45%) x HELIX(45%) = 11.1% compound
           Improvement: +208%
```

---

# 8. CEO DECISION REQUIRED

1. **Approve implementation order?** (Phase 1-5 as proposed, or reorder?)
2. **Which Phase 1 commands to build first?** (Recommend: `/dash` + `/portfolio` + `/init`)
3. **Cost tier policy?** (Recommend: Haiku for /dash, /signal, /risk; Opus for /embody, /concept, /shift)
4. **Build cadence?** (Recommend: 2 commands/week during Phase 1)

---

*SKILL_CATALOG_BRIDGE_FORGE_HELIX v1.0 -- Workshop X*
*Maps 38 framework skills to Claude Code slash commands*
*Next: CEO review + begin Phase 1 implementation*
