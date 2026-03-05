---
name: meadows-leverage-analyzer
description: Analyze systems to identify Donella Meadows' 12 leverage points (L1-L12), rank by effectiveness, recommend concrete interventions. Use when users describe recurring problems, failed solutions, unintended consequences, or ask "where should I intervene?", "what's the root cause?", "analyze this system", "find leverage points", "why isn't this working?", "we keep fixing but it gets worse", or present scenarios involving technical debt spirals, policy resistance, growth problems, coordination issues, quality problems, or any reinforcing/balancing loop dynamics. Works with organizational systems, technical systems, manufacturing, software development, learning systems, supply chains, or any complex adaptive system where small changes could create big impacts.
---

# Meadows Leverage Points Analyzer

Transform system problems into leverage point interventions using Donella Meadows' framework.

## When to Use

**Trigger patterns**:
- "We keep fixing X but it gets worse"
- "Unintended consequences"
- "Everything we try fails"
- "Where should I intervene?"
- "Analyze this system"
- "Root cause analysis"

**System types**: Organizations, software, manufacturing, supply chains, learning systems, teams, processes.

## Quick Start Workflow

### 1. System Mapping (2 min)
Extract from user input:
- **Goal**: What's system trying to achieve? (stated vs real)
- **Stocks**: What accumulates? (inventory, knowledge, debt, morale)
- **Flows**: What changes stocks? (production rate, bug rate, learning rate)
- **Feedback**: What reinforces? What balances?
- **Problem**: Symptom vs root cause?

### 2. Leverage Point Detection (3 min)
Scan for L1-L12 presence:

**HIGH (L1-L3)** - Prioritize:
- **L1**: Can they question paradigm itself?
- **L2**: What fundamental mental model drives behavior?
- **L3**: Real goal ≠ stated goal? Wrong metrics?

**MID-HIGH (L4-L6)**:
- **L4**: Can system adapt/learn?
- **L5**: Incentives misaligned? Rules create gaming?
- **L6**: Information delays? Asymmetries? Hidden data?

**MID (L7-L9)** - Use scripts:
- **L7**: Reinforcing loops? (Use `scripts/feedback_loop_calculator.py`)
- **L8**: Balancing too weak/strong? (Use `scripts/balancing_loop_tuner.py`)
- **L9**: Delays too long? (Use `scripts/delay_impact_calculator.py`)

**LOW (L10-L12)** - Last resort:
- **L10**: Physical structure unchangeable?
- **L11**: Buffers inadequate?
- **L12**: Parameters already tried?

### 3. Prioritize & Recommend (2 min)
- Rank by L1 > L2 > ... > L12 (inherent hierarchy)
- Filter by feasibility (Can we actually change it?)
- Recommend top 3-5 with specific actions

## Reference Library

**For detailed examples by leverage point**:
- High leverage (L1-L3): See `references/L1-L3-high-leverage.md`
- Mid-high (L4-L6): See `references/L4-L6-mid-high-leverage.md`
- Mid (L7-L9): See `references/L7-L9-mid-leverage-loops.md`
- Low (L10-L12): See `references/L10-L12-low-leverage.md`

**When to read references**:
- User asks about specific leverage point
- Need worked examples for similar system type
- Want deeper theory on that leverage level
- Designing intervention requires detailed patterns

## Scripts for Quantification

**Reinforcing loops (L7)**:
```bash
python scripts/feedback_loop_calculator.py --initial 1000 --gain 0.05 --periods 20
```
Use when: Exponential growth/decay, technical debt spiral, arms race

**Balancing loops (L8)**:
```bash
python scripts/balancing_loop_tuner.py --target 1000 --current 1200 --strength 0.5 --delay 2
```
Use when: System oscillates, corrections too weak/strong, stability issues

**Delay impact (L9)**:
```bash
python scripts/delay_impact_calculator.py --current-delay 30 --proposed-delay 1 --incidents 10
```
Use when: Feedback too slow, calculating ROI of faster loops

All scripts have interactive mode (no args) and `--help` for details.

## Analysis Templates

**Organizational systems**:
Copy `assets/template-organizational-system.md` for teams, companies, departments, policy systems.

**Technical/engineering systems**:
Copy `assets/template-technical-system.md` for products, manufacturing, software, infrastructure.

## Output Format

```markdown
## System: [Name]

### Snapshot
- Goal (Real): [Actual optimization]
- Key Stocks: [What accumulates]
- Main Problem: [Root cause, not symptom]

### Leverage Points (High → Low)

#### L[X]: [Name] - Priority: HIGH
- Evidence: [System manifestation]
- Intervention: [Specific action]
- Expected Impact: [Cascade effects]
- Timeline: [Weeks/months]

[Repeat for top 5 points]

### Strategy

**Priority 1 (Start This Week)**:
- Action: [Concrete, measurable]
- Why: [Leverage justification]
- Success: [Metric]

**Priority 2-3**: [Same structure]

### Warnings
- [Unintended consequences]
- [Resistance points]
```

## Key Principles

1. **High beats numerous**: One L3 > ten L12 changes
2. **Paradigm precedes policy**: L2 shift makes L5 rules stick
3. **Information is cheap**: L6 often easier than L10
4. **Slow reinforcing loops**: L7 reduction > L8 acceleration
5. **Goals trump metrics**: Fix L3 before optimizing L12

## Common System Archetypes

**Fixes That Fail**:
- Pattern: Quick fix works temporarily, problem returns worse
- Root: Fast reinforcing loop overrides slow balancing loop
- Leverage: L3 (wrong goal), L5 (bad rules), L7 (slow the loop)

**Shifting the Burden**:
- Pattern: External fix weakens internal capability
- Root: Dependency loop, atrophying correction
- Leverage: L5 (rebuild internal), L7 (break dependency)

**Seeking Wrong Goal**:
- Pattern: Metric improves, real problem persists
- Root: Proxy goal diverged from real goal
- Leverage: L3 (redefine goal), L6 (better information)

## Integration with DMIR

This skill integrates naturally with D-M-I-R framework:
- **Define** (D): Identify system goal (L3) and constraints
- **Model** (M): Map loops (L7-L8), delays (L9), structure (L10)
- **Intervene** (I): Target high leverage (L1-L6 preferred)
- **Reflect** (R): Challenge paradigms (L1-L2) based on results

See `/mnt/project/Systems_Thinking_and_Constraint_Theory.md` for theoretical depth.

## Quality Checklist

Before finalizing:
- [ ] Identified ≥3 leverage points across different levels
- [ ] Recommendations are specific actions (not vague advice)
- [ ] Explained why higher leverage > lower
- [ ] Flagged unintended consequences
- [ ] Addressed feasibility constraints
- [ ] Connected to system goal (L3)
- [ ] Used scripts for L7-L9 when applicable
- [ ] Provided concrete success metrics

## Examples Inventory

Worked examples available:
- Software firefighting crisis (WORKED_EXAMPLE.md from v1)
- Defense contractor quality (WORKED_EXAMPLE.md from v1)
- Learning system optimization (v1 test case)
- Manufacturing bottleneck
- Contract negotiation deadlock
- Organizational silos

Read relevant example when encountering similar system type.

## Error Patterns to Avoid

❌ **Parameter trap**: User already tried L12, suggesting more L12
- Fix: "You've tried parameters. Let's check L3 (goals) and L5 (rules)"

❌ **Structure obsession**: Jumping to L10 (rebuild) as first solution
- Fix: "L10 is expensive. Try L5 (rules), L6 (info flow) first"

❌ **Vague recommendations**: "Improve communication"
- Fix: "Create daily cross-team standup (L6), 30 min, engineering + QA + product"

❌ **Ignoring feasibility**: Recommending L2 paradigm shift when user needs quick fix
- Fix: "L2 is ideal long-term. For immediate impact, try L5 (rules) and L6 (info)"

❌ **Missing unintended consequences**: Every intervention creates side effects
- Fix: Always include "Warnings" section with potential backfires
