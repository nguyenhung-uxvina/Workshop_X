# SECOND BRAIN SYSTEM MASTERY PLAN
## Skills Mastery System + D-M-I-R Framework

**Target Skill**: Claude Code + Obsidian + Skills = "Second Brain" System
**Primary Application**: V-Smash Project (BB-01 LOMAH) + Future SMB Consulting
**Constraints**: 2-4h/evening, existing MCP infrastructure, production-ready outputs required
**Timeline**: 14 days to functional system, 30 days to mastery

---

## PHASE 1: DIAGNOSIS (D)

### 1.1 Skill System Map

```
INPUTS                    THROUGHPUTS                   OUTPUTS
┌─────────────────┐      ┌─────────────────────┐      ┌─────────────────┐
│ • Time: 2-4h/eve│      │                     │      │                 │
│ • Existing MCPs │─────▶│  SECOND BRAIN       │─────▶│ • Project docs  │
│ • Claude Code   │      │  PROCESSING         │      │ • Design specs  │
│ • Defense domain│      │                     │      │ • Research notes│
│   knowledge     │      │ ┌─────────────────┐ │      │ • Decision logs │
│ • V-Smash reqs  │      │ │ Claude Code     │ │      │ • Quality gates │
└─────────────────┘      │ │ (Agent Engine)  │ │      │ • SMB templates │
                         │ └────────┬────────┘ │      └─────────────────┘
                         │          │          │
                         │ ┌────────▼────────┐ │
                         │ │ Obsidian        │ │
                         │ │ (Knowledge Base)│ │
                         │ └────────┬────────┘ │
                         │          │          │
                         │ ┌────────▼────────┐ │
                         │ │ Skills          │ │
                         │ │ (Process Mgmt)  │ │
                         │ └─────────────────┘ │
                         └─────────────────────┘
```

### 1.2 Current Feedback Loops Analysis

**Existing Reinforcing Loops (R) - Keep & Amplify:**
```
R1: [Build Skill] → [Use in Production] → [Get Feedback] → [Improve Skill] → [Build More]
    ↳ Your proven pattern: 18x velocity gains from this loop

R2: [Create Skill] → [Use Skill] → [Identify Gaps] → [Refine Skill] → [Better Outputs]
    ↳ Already mastered: 15-30 min skill creation time

R3: [Document Process] → [Reuse Process] → [Time Saved] → [More Documentation]
    ↳ Active: Quality Gate system, CAD docs
```

**Current Balancing Loops (B) - Remove/Mitigate:**
```
B1: [Learn New Tool] → [Context Switch Cost] → [Slower Production] → [Avoid New Tool]
    ↳ Risk: Obsidian integration may trigger this

B2: [Perfect System] → [Delay Launch] → [No Feedback] → [Wrong Direction] → [Rework]
    ↳ Risk: Second Brain over-engineering

B3: [Tool Complexity] → [Maintenance Overhead] → [Abandonment]
    ↳ Risk: Too many moving parts
```

### 1.3 True vs. Perceived Constraints

| Constraint | Type | True/Perceived | Leverage Opportunity |
|------------|------|----------------|---------------------|
| 2-4h/evening | Time | TRUE | Design for micro-practice, async processing |
| Already have Claude Code | Resource | ADVANTAGE | No learning curve, immediate integration |
| V-Smash needs outputs NOW | Deadline | TRUE | Use V-Smash as live testing ground |
| "Need Obsidian expertise" | Knowledge | PERCEIVED | Claude Code can manipulate markdown directly |
| "Need complex setup" | Mental model | PERCEIVED | Progressive disclosure = start minimal |
| MCPs already configured | Resource | ADVANTAGE | Foundation exists |

### 1.4 Binding Constraint Identification

**Critical Question**: "If you could only change ONE thing, what has biggest impact?"

**Answer**: **Information Flow Architecture**

Currently:
- Knowledge scattered: Claude Projects, local files, memory, past chats
- No unified retrieval system
- Skills exist but not systematically organized

The binding constraint is NOT time or tools—it's **fragmented information flow**.

---

## PHASE 2: MODELING (M)

### 2.1 Leverage Point Hierarchy Analysis

| Rank | Leverage Point | Current State | Intervention | Expected Multiplier |
|------|---------------|---------------|--------------|---------------------|
| **1** | **L2: Mental Model** | "Second Brain = complex system" | → "Second Brain = Claude Code reading markdown folders" | **10x** (removes over-engineering) |
| **2** | **L3: System Goal** | "Build a Second Brain" | → "Enable 30-second knowledge retrieval for V-Smash" | **5x** (focuses scope) |
| **3** | **L6: Information Flow** | Scattered across platforms | → Single Obsidian vault + Claude Code access | **8x** (compound daily) |
| **4** | **L7: Reinforcing Loop** | Build → Use → Improve (existing) | → Add: Document → Template → Reuse → Scale | **4x** (consulting prep) |
| **5** | **L9: Feedback Delay** | Learn → Build → Test → Feedback (days) | → Build → Immediate Use in V-Smash → Same-day Feedback | **6x** (iteration speed) |

### 2.2 Multiplier Calculations

**L2 Mental Model Shift**:
```
Shift: "Second Brain = Claude Code reading markdown folders"

Direct Impact: 3x (removes complexity barrier)
Compound Frequency: Daily (every session benefits)
Duration: Permanent (once internalized)
Cascade: Triggers L3, L6, L7 (removes blockers)

Multiplier: 3 × 30 days × 3 cascades = ~10x
```

**L6 Information Flow Unification**:
```
Shift: Single Obsidian vault as knowledge base

Direct Impact: 2x (no searching multiple systems)
Compound Frequency: 10x/day (multiple retrievals)
Duration: Permanent
Cascade: Enables skill reuse, pattern extraction

Multiplier: 2 × 10 × 30 days = ~8x compounding
```

### 2.3 Progressive Disclosure Architecture

```
LAYER 1: INDEX (Always Loaded)
┌─────────────────────────────────────────────┐
│ /obsidian-vault/                            │
│ ├── INDEX.md (skill registry, 20 lines)    │
│ ├── CONTEXT.md (current projects, 30 lines)│
│ └── QUICK-REFS.md (common patterns)        │
└─────────────────────────────────────────────┘
        ↓ Claude Code reads INDEX first

LAYER 2: DOMAINS (Loaded on demand)
┌─────────────────────────────────────────────┐
│ /obsidian-vault/domains/                    │
│ ├── defense-engineering/                    │
│ │   ├── v-smash/                           │
│ │   │   ├── requirements.md                │
│ │   │   ├── decisions.md                   │
│ │   │   └── open-questions.md              │
│ │   └── bb-01/                             │
│ ├── smb-consulting/                        │
│ └── learning/                              │
└─────────────────────────────────────────────┘
        ↓ Only loads when task mentions domain

LAYER 3: SKILLS (Loaded on task match)
┌─────────────────────────────────────────────┐
│ /obsidian-vault/skills/                     │
│ ├── research-workflow.md                    │
│ ├── decision-log-template.md               │
│ ├── gate-review-checklist.md               │
│ └── client-analysis-framework.md           │
└─────────────────────────────────────────────┘
```

---

## PHASE 3: INTERVENTION (I)

### 3.1 Ranked Intervention Table

| Rank | Leverage Point | Change | Expected Multiplier | Monitoring Plan (3 Metrics) | Pilot Actions (Days 1-7) |
|------|----------------|--------|---------------------|----------------------------|--------------------------|
| **1** | L2: Mental Model | "Second Brain = Claude Code + markdown folders" | **10x** | 1. Time to first Obsidian query<br>2. Questions about "how to build"<br>3. Actually using vs. planning | - Day 1: Create `/obsidian-vault/` folder structure<br>- Day 2: Write INDEX.md (20 lines)<br>- Day 3: Add V-Smash current state |
| **2** | L6: Information Flow | Single vault for all project knowledge | **8x** | 1. # of "where is X?" searches/day<br>2. Time to retrieve specific info<br>3. Cross-reference frequency | - Day 2: Move BB-01 requirements to vault<br>- Day 4: Create decision-log.md for V-Smash<br>- Day 5: Link related notes |
| **3** | L9: Feedback Delay | Use V-Smash as immediate testing ground | **6x** | 1. Same-day usage of new skill<br>2. # of iterations per evening<br>3. Real output generated | - Day 1: Pick ONE V-Smash task for tonight<br>- Day 3: Document what worked/didn't<br>- Day 5: Iterate based on friction |
| **4** | L3: Goal Refinement | "30-second knowledge retrieval" | **5x** | 1. Actual retrieval time (stopwatch)<br>2. # of "I can't find X" moments<br>3. Successful retrievals/session | - Day 4: Time yourself finding BB-01 spec<br>- Day 6: Identify 3 slowest retrievals<br>- Day 7: Fix top friction point |
| **5** | L7: Reinforcing Loop | Template → Reuse → Scale cycle | **4x** | 1. # of templates created<br>2. # of template reuses<br>3. Time saved per reuse | - Day 5: Create first reusable template<br>- Day 7: Use template on 2nd project<br>- Track time comparison |

### 3.2 Day-by-Day Implementation Plan

#### Week 1: Foundation (Days 1-7)

**Day 1 (2h): Mental Model + Structure**
```bash
# Create minimal structure
mkdir -p ~/obsidian-vault/{domains/v-smash,skills}

# Create INDEX.md
cat > ~/obsidian-vault/INDEX.md << 'EOF'
# Second Brain Index

## Active Projects
- [[domains/v-smash/README]] - BB-01 LOMAH System

## Quick Access Skills
- [[skills/decision-log]] - Document decisions
- [[skills/research-workflow]] - Deep research process
- [[skills/gate-review]] - Quality gate checklist

## Context
Current focus: V-Smash BB-01 acoustic detection system
Deadline: Gate 2 review upcoming
EOF
```

**Day 2 (2h): V-Smash Knowledge Migration**
- Move BB-01 requirements from Claude Project to Obsidian vault
- Create `domains/v-smash/README.md` with project summary
- Create `domains/v-smash/decisions.md` for decision log

**Day 3 (2h): First Production Use**
- Use Claude Code to query Obsidian vault for BB-01 info
- Document friction points
- Create first skill: `skills/decision-log.md`

**Day 4 (3h): Information Flow Test**
- Time yourself: "Find the acoustic sensor requirements"
- If >30 seconds, identify bottleneck
- Fix top friction point

**Day 5 (2h): Template Creation**
- Create reusable template from today's work
- Test template on different task
- Document time saved

**Day 6 (2h): Cross-Reference**
- Link related notes in Obsidian
- Create `CONTEXT.md` with current state
- Test retrieval speed again

**Day 7 (2h): Week 1 Reflection**
- Measure all 15 metrics from intervention table
- Identify biggest friction point
- Plan Week 2 focus

#### Week 2: Integration (Days 8-14)

**Days 8-10: Claude Code + Obsidian Integration**
- Create skill that tells Claude Code how to query vault
- Test: "Find all decisions related to acoustic sensors"
- Optimize query patterns

**Days 11-12: SMB Consulting Prep**
- Create `domains/smb-consulting/` structure
- Add ToC analysis templates
- Test on hypothetical client scenario

**Days 13-14: Refinement**
- Remove unused components
- Speed test all common operations
- Document final system state

### 3.3 Minimal Viable Second Brain (MVSB)

**What you need on Day 1 (30 minutes)**:

```
~/obsidian-vault/
├── INDEX.md              # 20 lines: project list + skill list
├── CONTEXT.md            # 30 lines: what you're working on now
└── domains/
    └── v-smash/
        └── README.md     # Current project state
```

**What you DON'T need on Day 1**:
- ❌ Complex folder hierarchies
- ❌ Fancy Obsidian plugins
- ❌ Perfect organization
- ❌ Complete knowledge migration
- ❌ Automated workflows

**Rule**: Add complexity ONLY when friction demands it.

---

## PHASE 4: REFLECTION (R)

### 4.1 Monitoring Dashboard

**Daily Check (5 min)**:
| Metric | Target | Day 1 | Day 3 | Day 7 | Day 14 |
|--------|--------|-------|-------|-------|--------|
| Time to retrieve specific info | <30s | __ | __ | __ | __ |
| "Where is X?" moments | <3/session | __ | __ | __ | __ |
| Same-day skill usage | >0 | __ | __ | __ | __ |
| Real V-Smash output created | Yes/No | __ | __ | __ | __ |
| System used vs. bypassed | Used | __ | __ | __ | __ |

**Weekly Check (30 min)**:
| Metric | Week 1 | Week 2 | Week 3 | Week 4 |
|--------|--------|--------|--------|--------|
| Templates created | __ | __ | __ | __ |
| Templates reused | __ | __ | __ | __ |
| Time saved (estimated) | __ | __ | __ | __ |
| Friction points fixed | __ | __ | __ | __ |
| System complexity (1-10) | __ | __ | __ | __ |

### 4.2 Iteration Triggers

**Add complexity when**:
- Same friction point appears 3+ times
- Retrieval time consistently >30 seconds
- Clear pattern emerges that template would solve

**Remove complexity when**:
- Feature unused for 7+ days
- Maintenance overhead > time saved
- Simpler alternative exists

### 4.3 Pattern Extraction Questions

After each session, ask:
1. What did I actually use today?
2. What did I reach for but couldn't find?
3. What would have saved me 10 minutes?
4. What can I template for reuse?

---

## D-M-I-R INTEGRATION: SECOND BRAIN AS SYSTEM

### System Dynamics View

```
                    ┌─────────────────────────────────────┐
                    │         SECOND BRAIN SYSTEM         │
                    │                                     │
   ┌──────────────▶ │  ┌─────────────────────────────┐   │
   │                │  │      STOCK: Knowledge       │   │
   │  INFLOW:       │  │  (Obsidian vault contents)  │   │
   │  Research,     │  └─────────────┬───────────────┘   │
   │  Decisions,    │                │                   │
   │  Learning      │                ▼                   │
   │                │  ┌─────────────────────────────┐   │
   │                │  │      STOCK: Skills          │   │
   │                │  │  (Reusable process docs)    │   │
   │                │  └─────────────┬───────────────┘   │
   │                │                │                   │
   │                │                ▼                   │ ──▶ OUTFLOW:
   │                │  ┌─────────────────────────────┐   │     Project docs,
   │                │  │      STOCK: Output          │   │     Decisions,
   │                │  │  (V-Smash deliverables)     │   │     Quality
   │                │  └─────────────────────────────┘   │
   │                │                                     │
   │                └─────────────────────────────────────┘
   │                              │
   │    R1: [Create] ────────────┘
   │        → [Use] 
   │        → [Improve]
   │        → [Create More] ─────▶ [Back to Create]
   │
   └──────── Reinforcing Loop drives continuous improvement
```

### Leverage Points in YOUR Second Brain

| Level | Element | Your Intervention |
|-------|---------|-------------------|
| **L2** | Mental Model | "Simple markdown folders" vs "complex system" |
| **L3** | Goal | "30-second retrieval" not "perfect organization" |
| **L5** | Rules | "Add complexity only when friction demands" |
| **L6** | Information | Single vault, progressive disclosure |
| **L7** | R-Loop | Create → Use → Improve → Create More |
| **L9** | Delays | Same-day use requirement |

---

## IMMEDIATE NEXT ACTIONS

### Tonight (First 2 Hours)

1. **Create minimal vault structure** (15 min)
```bash
mkdir -p ~/obsidian-vault/{domains/v-smash,skills}
```

2. **Write INDEX.md** (10 min)
```markdown
# Second Brain Index
## Active: V-Smash BB-01
## Skills: decision-log, research-workflow
```

3. **Move ONE V-Smash document** (20 min)
   - Pick the most-accessed requirement
   - Place in `domains/v-smash/`

4. **First Claude Code query** (15 min)
   - Ask Claude Code to find something in your vault
   - Document what worked/didn't

5. **Create first skill** (30 min)
   - `skills/decision-log.md`
   - Use immediately on a V-Smash decision

6. **Reflection** (10 min)
   - What friction did you hit?
   - What would you change tomorrow?

### Success Criteria for Day 1

✅ Vault structure exists
✅ INDEX.md written
✅ One V-Smash document migrated
✅ Claude Code successfully queried vault
✅ First skill created and used
✅ Friction points documented

---

## APPENDIX: V-SMASH INTEGRATION

### BB-01 Knowledge Structure

```
domains/v-smash/
├── README.md              # Project overview, current phase
├── requirements/
│   ├── v1.3-summary.md   # Key requirements summary
│   └── changes.md        # Version changelog
├── decisions/
│   ├── log.md            # All decisions with rationale
│   └── open-questions.md # Unresolved items
├── design/
│   ├── acoustic-system.md
│   └── mechanical-frame.md
└── quality/
    ├── gate-1-results.md
    ├── gate-2-prep.md
    └── dfx-checklist.md
```

### Sample Decision Log Entry

```markdown
## DEC-001: Acoustic Sensor Selection

**Date**: 2024-12-XX
**Context**: Need to select microphone type for impact detection
**Options Considered**:
1. MEMS microphone - cheaper, compact
2. Electret condenser - higher sensitivity

**Decision**: MEMS (AS.01 in requirements)
**Rationale**: Cost, availability in Vietnam, sufficient for impact detection
**Trade-offs**: Lower sensitivity, acceptable for our use case
**Related**: AS.06 (frequency range), AS.07 (SPL max)
```

---

*Document created using Skills Mastery System*
*Version 1.0 | Date: 2026-01-26*
