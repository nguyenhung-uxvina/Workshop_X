# compound-engineering.md
## Automated Learning Extraction Engine — Feeds bridge-flywheel

**Role:** Nightly automation skill that scans recent work artifacts and extracts compound patterns for bridge-flywheel measurement.

**Frontmatter:**
```
Automated learning extraction engine that feeds bridge-flywheel.
Scans recent work (git log, Status.md changes, decisions.md, design reviews),
extracts compound patterns, routes learnings to knowledge base.
Use bridge-flywheel for measurement and R1-WX cycle analysis; this skill handles the AUTOMATED EXTRACTION pipeline.
```

---

## 1. MISSION

**What it does:**
- Runs nightly (automated)
- Scans completed work: git commits, Status.md updates, _meta/decisions.md, design review notes
- Extracts **compound patterns** (cross-product insights, methodology improvements, constraint discoveries)
- Outputs weekly compound report
- Feeds extracted learnings INTO bridge-flywheel metrics

**What it does NOT do:**
- Does NOT measure R1-WX cycle (that's bridge-flywheel's job)
- Does NOT explain frameworks (that's bridge-flywheel + bridge-knowledge-base)
- Does NOT manually curate insights (purely automated extraction)

---

## 2. INPUT SOURCES

### A. Git Log (Recent commits)
```
Scan: last 7 days of commits
Extract patterns:
├── Commits per phase (P1, P2, P3, P4) → phasing consistency
├── Refactors vs. new features → design churn indicator
├── Bug fixes per product → quality trend
└── Emergency patches → crisis signals
```

### B. Status.md Changes
```
Per project (VN-AST-MSL-001, VN-12.7MM-SIM, BB-01, WX-KPIPE):
├── Phase transitions (Phase 1→2 → is gate passing rate improving?)
├── Blocking constraint changes (what's the bottleneck now vs. last week?)
├── dP/dt trend (velocity increasing/decreasing?)
└── Gate dates (are we hitting deadlines?)
```

### C. _meta/decisions.md Entries
```
Extract:
├── Decision category (technical / strategic / organizational)
├── Rationale pattern (engineering-led vs. cost-led vs. schedule-led)
├── Cross-product applicability (does this decision apply to other products?)
└── Reversibility (is this decision lock-in or flexible?)
```

### D. _meta/learnings.md Entries (from prior sessions)
```
Aggregate:
├── Topic clusters (which domains are generating learnings?)
├── Timing (when did learnings emerge relative to gate events?)
└── Action taken (was learning acted on or shelved?)
```

---

## 3. EXTRACTION ALGORITHM

### Step 1: Normalize & Tag
```
FOR EACH source (git, Status, decisions):
  ├── Parse timestamps
  ├── Extract entities: product, phase, person, constraint
  └── Tag: [technical | strategic | organizational | meta]
```

### Step 2: Pattern Detection
```
PATTERN 1: Repeating Constraint
  └─ If constraint X blocked 3+ different projects → "SYSTEMIC"

PATTERN 2: Cross-Product Transfer
  └─ If solution used in A worked for B → "REPLICABLE"

PATTERN 3: Phase Transition Blocker
  └─ If Phase 2→3 always stalls on dP/dt → "PHASE GATE BOTTLENECK"

PATTERN 4: Decision Reversal
  └─ If decision D made, then reverted < 30 days later → "PREMATURE"

PATTERN 5: Judgment vs. Delegation
  └─ If decision required CEO 3+ times → "NON-DELEGABLE CORE"
```

### Step 3: Severity & Routing
```
FOR EACH pattern:
  ├── Severity: [critical | high | medium | low]
  ├── Route to: bridge-flywheel OR bridge-knowledge-base
  └── Action tier: [immediate-escalate | next-review | quarterly-trend]
```

---

## 4. OUTPUT FORMAT (Weekly Report)

**File:** `_meta/weekly-compound-report.md` (append, cumulative)

```markdown
## Week of [DATE]

### Extracted Patterns

#### CRITICAL Patterns (act immediately)
- **Pattern Name** [severity: CRITICAL]
  - Source: 3 commits in VN-AST-MSL-001 + 1 in VN-12.7MM-SIM
  - Observation: "Phase 2→3 blocked by RCS prediction uncertainty"
  - Compound Insight: "RCS modeling is shared bottleneck across all sensor-based products"
  - Recommendation: Feed to bridge-flywheel ACTION bottleneck analysis
  - Status: awaiting CEO validation

#### HIGH Patterns (review in next project sync)
- **Pattern Name** [severity: HIGH]
  - Source: decisions.md entries D-2026-03-18-01, D-2026-03-19-03
  - Observation: "Fallback architecture decision made 3 times for same issue"
  - Compound Insight: "Fallback pattern is emerging design best practice"
  - Recommendation: Escalate to forge-fallback skill; consider template
  - Status: pending

### Metrics This Week
- Commits analyzed: 12
- Status updates processed: 4 projects
- Decisions tagged: 7
- Patterns extracted: 5
- Patterns validated by CEO: [TBD in bridge-flywheel review]

### Feed to bridge-flywheel
- GENERATE bucket: 5 insights extracted (ready for DELIVER phase)
- Source quality: 3★ (clear, traceable, actionable)
- Cross-product applicability: 2 patterns (60% replicability)

### Notes
- No critical patterns this week
- Phase transition timing consistent with forecast
- dP/dt trend: stable (no acceleration/deceleration)
```

---

## 5. INTEGRATION DIAGRAM

```
COMPOUND-ENGINEERING (This Skill)
    │
    ├─ INPUT: git log, Status.md, decisions.md, learnings.md
    │    │
    │    └─▶ [Automated extraction nightly]
    │
    ├─ PROCESS: Pattern detection + severity scoring
    │
    ├─ OUTPUT: weekly-compound-report.md
    │    │
    │    └─▶ [Feed TO bridge-flywheel for measurement]
    │
    └─ HANDOFF POINTS:
         │
         ├─▶ bridge-flywheel: uses GENERATE + DELIVER metrics from report
         │
         ├─▶ bridge-knowledge-base: indexed patterns feed KB Layer 3
         │
         ├─▶ HELIX: phase bottleneck patterns inform skill improvements
         │
         └─▶ FORGE: cross-product replicability feeds forge-library candidates
```

---

## 6. AUTOMATION CONFIGURATION

**Trigger:** Nightly (cron or GitLab CI/GitHub Actions)
```bash
# .claude/hooks/nightly-extraction.sh
# Runs: 23:00 UTC daily (or on git push to main)

nlm_cli extract-patterns \
  --from-date=$(date -d "7 days ago" +%Y-%m-%d) \
  --output=_meta/weekly-compound-report.md \
  --format=markdown
```

**Cost Tier:** Haiku (lightweight pattern detection)

**Frequency:** Once per day (evening) or on-demand when triggered by CEO

---

## 7. ROLE IN COMPOUND LAW

```
BRIDGE × FORGE × HELIX = compound learning system

compound-engineering's role:
├── BRIDGE foundation: "What did we learn this week?"
│   └── Feeds bridge-flywheel (E-stage) with extraction data
│
├── FORGE acceleration: "Which insights are replicable?"
│   └── Feeds forge-library (replication candidates)
│
└── HELIX feedback: "Which phase gates are bottlenecks?"
    └── Informs phase-skill improvements
```

---

## 8. SUCCESS METRICS

| Metric | Current | Target | Measured By |
|--------|---------|--------|-------------|
| Weekly patterns extracted | — | ≥3 | weekly-compound-report count |
| Pattern accuracy (validated by CEO) | — | >80% | CEO validation rate |
| Cross-product replicability | — | >40% | patterns_marked_replicable / total |
| Time from extraction to action | — | <14 days | bridge-flywheel ACT lag |
| System latency | — | <1 hour | nightly run completion |

---

## 9. CEO DECISION REQUIRED

1. **Enable nightly extraction?** (Recommend: YES, automate this)
2. **Weekly report location:** `_meta/weekly-compound-report.md` or elsewhere?
3. **Severity thresholds:** Are CRITICAL/HIGH levels appropriate for your decision pipeline?

---

## 10. REFERENCES

- `2_Areas/BRIDGE — Operations/BRIDGE_Skill_Architecture_v2.md` — bridge-flywheel design
- `2_Areas/BRIDGE — Operations/BRIDGE_Skill_Architecture_v2.md` § E-Stage (Evolve)
- `3_Resources/SOPs/FUEL Context Protocol.md` — decision tracing
- `_meta/learnings.md` — prior session insights (source data)
