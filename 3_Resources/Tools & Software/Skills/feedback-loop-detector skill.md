---
name: feedback-loop-detector
description: Detect reinforcing loops (R) and balancing loops (B), map loop dominance, identify dangerous system archetypes (Shifting the Burden, Fixes That Fail, Escalation, Success to Successful), and integrate with leverage-point-analyzer to show which leverage points exist IN each loop and recommend intervention cascades. Use when users describe recurring problems, escalating situations, quick-fix dependencies, symptom relief without root cause resolution, competitive dynamics, or ask "why does this keep happening?", "find the feedback loops", "why is this spiraling?", "map the reinforcing dynamics", or present systems with growth/collapse patterns, goal-seeking behavior, or policy resistance.
---

# Feedback Loop Detector

## Purpose

Detect feedback loops (R/B), analyze dominance, match system archetypes, and design leverage point cascades for systemic intervention.

---

## Core Process

### Step 1: Identify System Variables (10 min)

List variables in three categories:
- **Stocks** (accumulations): inventory, debt, knowledge, capacity
- **Flows** (rates): production rate, learning rate, cost/time
- **Auxiliary** (derived): gaps, ratios, pressures

Template: `[Name]: [Value] [Units]` e.g., "Technical Debt: 40 hours"

---

### Step 2: Map Causal Links (15 min)

Draw cause-effect relationships:
- `[A] +→ [B]` = same direction (more A → more B)
- `[A] −→ [B]` = opposite direction (more A → less B)  
- `[A] +→|| [B]` = with delay

**Critical:** Only DIRECT links. Mark delays with `||` and estimate duration.

---

### Step 3: Detect Closed Loops (20 min)

**Classification Rule:**
- **Reinforcing (R):** EVEN number of `−` links (0, 2, 4...) → Growth/collapse spiral
- **Balancing (B):** ODD number of `−` links (1, 3, 5...) → Goal-seeking stabilization

**Process:** Follow causal chain until it returns to start. Count `−` links to classify.

Label loops: R1, R2... for reinforcing; B1, B2... for balancing.

---

### Step 4: Analyze Loop Dominance (15 min)

Rank loops by: **Strength** (magnitude) × **Speed** (delay time) × **State** (active/dormant)

| Loop | Type | Strength | Speed | State | Dominance |
|------|------|----------|-------|-------|-----------|
| R1   | R    | Strong   | Fast  | Active| **HIGH** ⚠️ |
| B1   | B    | Weak     | Slow  | Active| LOW |

**Priority:** HIGH dominance loops control behavior → Intervene here first.

---

### Step 5: Detect System Archetypes (20 min)

Match loops to known failure patterns. See `references/system-archetypes.md` for complete library.

**Quick Reference:**
- **Fixes That Fail:** Fast R (quick fix) + Slow B (worsens root cause)
- **Shifting the Burden:** Fast R (external support) + Slow B (capability atrophy)
- **Escalation:** Dual R loops (competitive spiral)
- **Success to Successful:** Winner-take-all resource allocation
- **Tragedy of Commons:** Individual benefit depletes shared resource
- **Drifting Goals:** Lowering standards easier than improving performance

**Detection:** Match your loop structure to archetype patterns. High confidence = clear intervention strategy.

---

### Step 6: Integrate Leverage Points (25 min)

**CRITICAL FEATURE:** Identify leverage points (L1-L12) WITHIN each loop.

See `references/leverage-integration-guide.md` for complete mapping methodology.

**Quick Reference - Leverage Points in Loops:**
- **L12 (Parameters):** Adjust numerical values (low impact)
- **L11 (Buffers):** Stabilize stock sizes
- **L10 (Structure):** Change physical flows
- **L9 (Delays):** Speed up or slow down feedback
- **L8 (B Loop Strength):** Strengthen corrective action
- **L7 (R Loop Strength):** Slow harmful growth, speed beneficial growth
- **L6 (Information):** Change who knows what when (HIGH impact, low cost)
- **L5 (Rules):** Change decision rules (HIGH impact)
- **L3 (Goals):** Redefine what system optimizes for (VERY HIGH impact)
- **L2 (Paradigm):** Change mental models (transformative)

**Cascade Design:**
1. Phase 1 (Week 1-2): L6 + L9 (quick wins, build credibility)
2. Phase 2 (Week 3-6): L5 + L7 (structural lock-in)
3. Phase 3 (Month 2-3): L3 + L2 (systemic transformation)

**Example:**
```
R1: Complexity Spiral (HIGH dominance)
→ L6: Real-time dashboard (week 1)
→ L9: Faster feedback (week 1)
→ L5: Feature freeze rule (week 3)
→ L3: Goal shift to sustainability (month 2)
→ Expected: 60-80% improvement
```

---

### Step 7: Generate Intervention Sequence (15 min)

**For Harmful Reinforcing Loops (R):**
- Slow down: Reduce gain (L7), add delays (L9), set limits (L5)
- Redirect: Change goal (L3), shift paradigm (L2)

**For Weak Balancing Loops (B):**
- Strengthen: Improve information (L6), reduce delays (L9), increase strength (L8)
- Empower: Change rules to enable action (L5)

**For System Archetypes:**
- **Fixes That Fail:** Strengthen slow B loop, make long-term harm visible (L6)
- **Shifting Burden:** Build internal capability (L8), slow external support (L7)
- **Escalation:** Change competitive goals to collaborative (L3)

**Output Template:**
```
PHASE 1 - IMMEDIATE (Week 1-2):
- Target: [Dominant loop]
- Actions: [L6, L9 specific interventions]
- Expected: [Quantified improvement]

PHASE 2 - SHORT-TERM (Week 3-6):
- Target: [Structural change]
- Actions: [L5, L7 specific interventions]
- Expected: [Cumulative improvement]

PHASE 3 - LONG-TERM (Month 2+):
- Target: [Paradigm shift]
- Actions: [L3, L2 specific interventions]
- Expected: [Systemic transformation]
```

---

## Integration with Leverage-Point-Analyzer

**When to integrate:** After Step 6 (detected loops + archetype identified)

**Process:**
1. Use feedback-loop-detector to find loops and archetypes
2. Call leverage-point-analyzer (or meadows-leverage-analyzer) for full L1-L12 analysis
3. Synthesize: Map analyzer's L1-L12 recommendations INTO specific loops
4. Design leverage cascade showing which points exist where
5. Generate phased intervention sequence

**Integration Example:**
```
feedback-loop-detector: Detects R1 (complexity spiral), matches "Fixes That Fail"
leverage-point-analyzer: Provides L1-L12 for system
feedback-loop-detector: Synthesizes cascade (L6→L9→L5→L3)
Output: Phased roadmap with quantified impacts
```

---

## Output Format

**Standard Report Structure:**

```markdown
# Feedback Loop Analysis: [System Name]

## Executive Summary
- [N] loops detected ([X] reinforcing, [Y] balancing)
- Dominant loop: [Loop ID] ([R/B], [dominance level])
- Archetype: [Pattern name] (confidence: [High/Medium/Low])
- Recommended cascade: [Primary intervention sequence]

## Loop Inventory
[For each loop: structure, behavior, speed, strength, state]

## Archetype Detection
[Pattern match, evidence, risk assessment]

## Loop Dominance Analysis
[Dominance table, system behavior, projection]

## Leverage Point Cascade
[Available points per loop, recommended sequence with phases]

## Intervention Roadmap
[Phase 1-3 with specific actions, expected impacts, monitoring plan]
```

See `references/worked-examples.md` for complete worked example.

---

## Quality Checklist

- [ ] All loops close (no dangling causal chains)
- [ ] Loop polarity verified (count `−` links correctly)
- [ ] All loops labeled (R1, R2, B1, B2)
- [ ] Delays marked and estimated
- [ ] Loop dominance ranked
- [ ] Archetype match attempted
- [ ] Leverage points identified IN each loop
- [ ] Cascade shows sequential phases
- [ ] Quantified impact estimates provided
- [ ] Monitoring plan included

---

## Common Pitfalls

**Incomplete Loops:** Causal chains that don't close → Ask "Does C affect A?" to find closing link

**Wrong Polarity:** Misidentifying R as B → Carefully count `−` links (odd=B, even=R)

**Missing Delays:** All links instant → Every link has delay, estimate realistically

**Symptoms vs Root Causes:** Surface loops only → Keep asking "What causes that?" (5 Whys)

**Parameter-Only Interventions:** All L12 changes → Force L3-L9 identification in each loop

**Ignoring Archetypes:** Detect loops but not patterns → Always check archetype library

---

## References

**Required Reading:**
- `references/system-archetypes.md` - Complete pattern library with detection logic
- `references/leverage-integration-guide.md` - How to map L1-L12 into loops
- `references/worked-examples.md` - Engineering project with L3-5-6-7 cascade

**Integration:**
- Works WITH leverage-point-analyzer for complete L1-L12 analysis
- Works WITH engineering-systems-mapper for visualization
- Feeds INTO engineering-design-review-mentor for risk detection

**Theory Foundation:**
- Donella Meadows, "Thinking in Systems"
- Peter Senge, "The Fifth Discipline" (system archetypes)
- Systems thinking: /mnt/project/Systems_Thinking_and_Constraint_Theory.md

---

## Tips for Success

1. **Start with dominant loop** - Don't analyze all, find what controls behavior NOW
2. **Use real numbers** - "Delay = 2 weeks" > "Delay = slow"
3. **Name loops descriptively** - "R1: Vicious Debt Spiral" > "R1"
4. **Multi-point cascades** - Never single intervention, use L6+L9→L5→L3
5. **Phase interventions** - Quick wins first, then structural, then paradigm
6. **Track archetypes** - Watch for recurrence signals
7. **Quantify impacts** - "40% improvement" > "significant improvement"
8. **Integrate tools** - Use leverage-point-analyzer then map back to loops
