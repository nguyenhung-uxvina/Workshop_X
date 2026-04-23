---
created: 2026-03-19
source: x.com/itsolelehmann/status/2033919415771713715
author: Ole Lehmann (@itsolelehmann)
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #topic/ai-tools, #topic/learning]
frameworks: [Systems Thinking, Meta-Learning, First-Principles Debate, ARCHITECT]
---

# Multi-Framework Analysis: "How to 10x Your Claude Skills (Karpathy's Autoresearch)"
## Systems Thinking + Meta-Learning + First-Principles Debate

**Source:** Ole Lehmann (@itsolelehmann), X Article, 2026-03-17 | **Date:** 2026-03-19
**Frameworks:** Stock-Flow, Feedback Loops, Archetypes, Leverage Points, Feynman, ARCHITECT
**Workshop X Context:** Session 50 built analyst-trap autoresearch (86%→100%), `/loop` skill exists, `_meta/evals/` deployed

---

## PART 1: CLARIFICATION

### 1.1 Core Thesis (Feynman)

**60-second explanation:**
Bạn có một skill (prompt) cho AI hoạt động tốt 7/10 lần. Thay vì viết lại từ đầu, bạn thay đổi MỘT thứ nhỏ, chạy lại 10 lần, đo xem tốt hơn hay tệ hơn. Giữ nếu tốt, bỏ nếu tệ. Lặp lại 50 lần → skill hoạt động 9.5/10.

Chìa khóa: bạn cần một checklist yes/no rõ ràng để "chấm điểm" output. Không phải "rate 1-10" (mơ hồ) mà "headline có con số cụ thể không?" (binary).

**Everyday analogy:**
Như nấu phở. Bạn nấu ngon 7/10 nồi. Thay vì đổi cả công thức, bạn thêm 1 thìa nước mắm → nấu 10 nồi → ngon hơn? Giữ. Kém hơn? Bỏ. Rồi thử quế nhiều hơn → 10 nồi nữa. Sau 50 lần thử, phở bạn ngon 9.5/10 nồi.

**Author's paradigm shift:** Skill improvement is not a creative rewrite problem — it's a measurable optimization problem. You don't need taste to improve skills; you need binary evals.

### 1.2 Chunked Breakdown

**Chunk A: The Problem** (3 concepts)
1. Skills fail silently (~30% of the time)
2. Manual improvement is slow and inconsistent
3. Most people don't measure skill quality at all

**Chunk B: The Method** (4 concepts)
1. Binary checklist (yes/no questions, not ratings)
2. One change at a time (isolation principle)
3. Test → Score → Keep/Revert loop
4. Autonomous agent execution (no human in loop)

**Chunk C: The Checklist Design** (3 concepts)
1. 3-6 questions sweet spot
2. Each question catches ONE specific failure mode
3. Too many questions → skill "games" the checklist

**Chunk D: The Infrastructure** (4 concepts)
1. Live dashboard (score chart, pass/fail, changelog)
2. Original skill preserved (separate improved copy)
3. Changelog = compound knowledge asset
4. Stops at 95%+ three times in a row

**Dependency:** A → B → C → D (must understand problem before method, method before checklist design, checklist before infrastructure)

---

## PART 2: SYSTEMS THINKING

### 2.1 Stock-Flow Map

```
Stock 1: SKILL QUALITY
Level: Medium (56-92%) | Units: % pass rate | Type: Target
Inflows:
  1. Successful mutations — Rate: Slow (1 per round) — Control: eval score — Delay: 1 test cycle
  2. Worked examples added — Rate: Very slow — Control: failure pattern analysis — Delay: 2-3 rounds
Outflows:
  1. Overfitting to checklist — Rate: Slow — Control: checklist size — Delay: 10+ rounds
  2. Context drift (model updates) — Rate: Very slow — Control: none — Delay: months
Pattern: Asymptotic growth (rapid early gains, diminishing returns near ceiling)

Stock 2: EVAL QUALITY (checklist rigor)
Level: Varies | Units: # binary questions × precision | Type: Constraint
Inflows:
  1. User designs checklist — Rate: Once (upfront) — Control: user expertise — Delay: 0
  2. Agent suggests improvements — Rate: Low — Control: failure analysis — Delay: N/A (not in article)
Outflows:
  1. Goodhart's Law erosion — Rate: Slow — Control: checklist diversity — Delay: 20+ rounds
  2. Domain shift — Rate: Very slow — Control: product changes — Delay: months
Pattern: Starts high, slowly erodes if not refreshed

Stock 3: CHANGELOG KNOWLEDGE
Level: Growing | Units: entries | Type: Buffer (compound asset)
Inflows:
  1. Each autoresearch round — Rate: 1/round — Control: agent logging — Delay: 0
Outflows:
  1. Obsolescence (model changes) — Rate: Slow — Control: none — Delay: 6-12 months
Pattern: Monotonic growth with periodic obsolescence

Stock 4: HUMAN JUDGMENT (about what "good" means)
Level: High (initially) | Units: tacit knowledge | Type: Foundation
Inflows:
  1. Using improved skills — Rate: Slow — Control: engagement — Delay: weeks
  2. Reading changelogs — Rate: Medium — Control: habit — Delay: 0
Outflows:
  1. Delegation atrophy — Rate: Medium — Control: automation extent — Delay: months
  2. Goodhart blindness — Rate: Slow — Control: awareness — Delay: hidden
Pattern: Risk of slow depletion if human stops checking outputs
```

### 2.2 Feedback Loops

```
R1 (IMPROVEMENT FLYWHEEL) — Reinforcing, DOMINANT
Better skill → Higher eval score → Agent keeps change → Better skill
Speed: Fast (minutes per cycle) | Strength: High initially, decays near ceiling
Status: ACTIVE, drives 56%→92% trajectory

R2 (CHANGELOG COMPOUND) — Reinforcing, LATENT
More rounds → Richer changelog → Better starting point for next model → Faster improvement
Speed: Slow (cross-model) | Strength: Medium (depends on changelog quality)
Status: LATENT — only activates when new model arrives

B1 (DIMINISHING RETURNS) — Balancing, STRENGTHENING
Higher score → Fewer failing checks → Smaller improvement targets → Slower gains
Speed: Medium | Strength: Increases with score
Status: Active above 85%, dominant above 95%

B2 (GOODHART'S LAW) — Balancing, HIDDEN
More optimization rounds → Skill "games" checklist → Passes checks but output quality plateaus/declines
Speed: Slow (20+ rounds) | Strength: Increases with narrow checklist
Status: HIDDEN — the article mentions it ("gaming the checklist") but doesn't solve it

B3 (JUDGMENT ATROPHY) — Balancing, HIDDEN
More automation → Less human review → Weaker ability to detect Goodhart drift → Worse eval quality
Speed: Very slow (months) | Strength: Low initially, compounds
Status: DORMANT — not visible until crisis
```

**Dominance ranking:**

| Loop | Name | Dominance | Phase |
|------|------|-----------|-------|
| R1 | Improvement Flywheel | HIGH | 56-85% |
| B1 | Diminishing Returns | HIGH | 85-95% |
| B2 | Goodhart's Law | MEDIUM | >95% |
| R2 | Changelog Compound | LOW (latent) | Cross-model |
| B3 | Judgment Atrophy | LOW (dormant) | Long-term |

### 2.3 System Archetypes

**Archetype 1: Limits to Growth**
- Pattern: R1 (improvement) drives rapid gains, B1 (diminishing returns) caps them
- Evidence: 56%→92% in 4 rounds, then stops. Article says "hits 95%+ three times in a row" as termination
- Confidence: HIGH
- Counter-strategy: Expand the checklist dimensions (add new checks), don't just optimize existing ones

**Archetype 2: Shifting the Burden (85% confidence)**
- Pattern: Fundamental solution = human improves judgment about what "good" means. Symptomatic solution = agent optimizes against fixed checklist.
- Evidence: "Your only job is the checklist" — human disengages after setup. Agent handles the rest. But checklist quality slowly degrades relative to evolving needs.
- Side effect: Human judgment atrophy (B3) weakens ability to update checklist
- Counter-strategy: Mandatory human review of 10% of outputs AFTER optimization. Refresh checklist monthly.

**Archetype 3: Eroding Goals (60% confidence)**
- Pattern: If agent can't reach 95%, user might lower checklist standards ("maybe 3 questions is enough") rather than improve the skill fundamentally
- Evidence: Not directly in article, but implied by "3-6 questions is the sweet spot" — fewer questions = easier to pass = lower real quality bar
- Counter-strategy: Lock minimum checklist count at 5. Never remove a question, only add.

### 2.4 Leverage Points + Intervention Cascade

```
L2: PARADIGM — Priority: HIGH
Evidence: "Skill improvement is optimization, not creativity"
Intervention: Adopt measurement-first mindset for ALL prompt engineering
Expected Impact: Transforms random tweaking into systematic improvement across entire skill stack

L5: RULES — Priority: HIGH
Evidence: "3-6 questions sweet spot" + "stops at 95%+ three times"
Intervention: Design eval rules that resist Goodhart (include at least 1 "holistic" check: "Would a domain expert approve this output?")
Expected Impact: Prevents checklist gaming, maintains alignment between score and actual quality

L6: INFORMATION FLOWS — Priority: HIGH
Evidence: Changelog = record of what works/doesn't
Intervention: Feed changelog into NEXT skill design (not just next model). Cross-skill learning.
Expected Impact: Each skill improvement informs all other skills. Compound learning across portfolio.

L7: REINFORCING LOOP GAIN — Priority: MEDIUM
Evidence: R1 (Improvement Flywheel) speed depends on eval cycle time
Intervention: Parallelize eval runs (test 5 variations simultaneously, not sequentially)
Expected Impact: 5× faster convergence. Workshop X: use /loop with parallel agents.

L8: BALANCING LOOP STRENGTH — Priority: MEDIUM
Evidence: B2 (Goodhart's Law) depends on checklist narrowness
Intervention: Rotate checklist questions periodically. Add "surprise" questions not in the standard set.
Expected Impact: Prevents skill from overfitting to specific checks

L10: PHYSICAL STRUCTURE — Priority: LOW
Evidence: Dashboard, separate file for improved version, backup
Intervention: Already well-designed in the article's infrastructure
Expected Impact: Minimal additional gain
```

**Intervention Cascade:**
- **Phase 1 (Week 1-2):** L2 paradigm shift + L6 changelog cross-pollination → immediate multiplier
- **Phase 2 (Week 3-8):** L5 eval rules with anti-Goodhart checks + L7 parallel testing → structural lock-in
- **Phase 3 (Month 3+):** L8 checklist rotation + human review cadence → prevent long-term decay

---

## PART 3: META-LEARNING

### 3.1 Learning Architecture

```
Foundation: Binary evaluation (yes/no scoring)
  → Method: Isolate-test-keep/revert loop
    → Application: Checklist design for specific domains
      → Integration: Changelog as compound knowledge + cross-skill transfer
```

### 3.2 Diagnostic Questions

1. **Level 1:** What's the difference between "rate quality 1-10" and a binary checklist? Why does binary work better?
2. **Level 2:** If your skill passes 95% of checks but users still complain, what's wrong with your checklist?
3. **Level 3:** How would you detect Goodhart's Law erosion in an autoresearch loop that consistently shows 95%+ scores?

### 3.3 Mnemonic: SCORE

- **S**ingle change per round (isolation)
- **C**hecklist binary (yes/no, not ratings)
- **O**riginal preserved (never overwrite)
- **R**evert if worse (no sunk cost)
- **E**val drives everything (measure, don't guess)

*Retrieval: "To SCORE better skills, change one thing, check with yes/no, keep the original, revert failures, and let evals drive."*

### 3.4 Self-Assessment Rubric

| Dimension | 1 (Novice) | 3 (Competent) | 5 (Expert) |
|-----------|------------|---------------|------------|
| Eval design | Vague ratings (1-10) | Binary checklist, 3-6 items | Anti-Goodhart checks, rotated questions |
| Change isolation | Rewrites whole prompt | One section at a time | Atomic changes, A/B with statistical significance |
| Failure analysis | "It doesn't work" | Identifies which check fails most | Root-cause pattern across multiple failures |
| Changelog use | Doesn't save changes | Logs changes per skill | Cross-skill transfer, feeds next design |
| Automation | Manual testing | Runs loop, watches | Fully autonomous with alerting on anomalies |
| Judgment preservation | Delegates 100% | Reviews 10% of outputs | Refreshes checklist monthly, catches Goodhart |

### 3.5 Interleaving Schedule (8 weeks)

| Week | Morning Block | Afternoon Block |
|------|--------------|-----------------|
| 1 | Design first checklist | Run 1 manual eval cycle |
| 2 | Automate eval loop | Analyze changelog |
| 3 | Design second checklist (different skill) | Cross-compare changelogs |
| 4 | Add anti-Goodhart checks | Review 10% of "passing" outputs |
| 5 | Parallel testing setup | Apply learnings from Skill 1 to Skill 2 |
| 6 | Checklist rotation experiment | Human vs. agent eval calibration |
| 7 | Cross-skill pattern extraction | Build changelog index |
| 8 | Full portfolio eval review | Refresh all checklists |

### 3.6 Targeted Drills

**Drill 1: Binary Decomposition (Week 1-2)**
- Purpose: Convert vague quality criteria into binary checks
- Duration: 15 min
- Instructions: Take any skill output you rated "meh." Write 5 yes/no questions that would distinguish it from a "great" output. Test: can someone else grade consistently using your questions?
- Scoring: ≥4 of 5 questions produce same answer across 3 raters = pass

**Drill 2: Goodhart Detection (Week 3-4)**
- Purpose: Spot optimization that games the metric
- Duration: 30 min
- Instructions: Take a skill at 90%+ pass rate. Read 5 outputs. Can you find one that passes ALL checks but you'd still reject? If yes, your checklist has a Goodhart gap. Write the missing question.
- Scoring: Finding ≥1 Goodhart gap per 5 outputs = healthy skepticism

**Drill 3: Changelog Archaeology (Week 5+)**
- Purpose: Extract cross-skill patterns from change history
- Duration: 20 min
- Instructions: Read changelogs from 3 different skills. Find ≥2 patterns that repeat (e.g., "adding a worked example always helps," "banning specific words always helps"). Document as reusable principles.
- Scoring: ≥2 cross-skill patterns found = pass

### 3.7 Learning Journal Prompts

1. Which checklist question was hardest to write in binary? What does that reveal about my understanding of "good"?
2. What feedback loop dominated this week's optimization? Was it R1 (improvement) or B1 (diminishing returns)?
3. Did I catch any Goodhart drift — output that passed checks but felt wrong? What was the missing dimension?
4. What did I learn from the changelog that I wouldn't have learned from just using the skill?
5. Am I delegating too much to the agent? When was the last time I manually reviewed an output?

---

## PART 4: CONCEPT EVALUATION

### 4.1 Strengths
- **Binary evals are genuinely better** than Likert scales for automated optimization (consistent, composable, debuggable)
- **One-change-at-a-time** is good experimental hygiene (isolates signal)
- **Changelog as knowledge asset** is an underrated insight — most people throw away their iteration history
- **Preserving original** is good engineering (reversibility)
- **Accessible writing** — the phở/recipe analogy makes the method visceral

### 4.2 Weaknesses
- **No Goodhart mitigation** beyond "3-6 questions" advice. What happens at round 50?
- **No human-in-the-loop** after setup. The method is fully autonomous, which is both its strength and its blind spot.
- **Eval quality is assumed constant** — but the world changes (new model, new audience, new product)
- **No statistical rigor** — "run 10 times, check if score goes up" is directionally right but noisy. At 80% pass rate, you need ~50 trials to distinguish 80% from 85% with confidence.
- **No cross-skill learning** — each skill is optimized in isolation. Changelogs exist but no mechanism to transfer patterns.

### 4.3 Missing Dimensions

| Dimension | Status | Impact |
|-----------|--------|--------|
| Goodhart's Law | Mentioned briefly, not solved | HIGH — ceiling on real improvement |
| Statistical significance | Absent | MEDIUM — false positives waste rounds |
| Cross-skill transfer | Absent | HIGH — compound learning left on table |
| Eval refresh cadence | Absent | MEDIUM — stale evals = stale skills |
| Human calibration | Absent | HIGH — who checks the checker? |
| Multi-objective tension | Absent | MEDIUM — what if "under 150 words" conflicts with "include specific pain point"? |

---

## PART 5: FIRST-PRINCIPLES DEBATE

### 5.1 Debate Point 1: "Your only job is the checklist"

**The claim:** The human's role is reduced to writing 3-6 yes/no questions upfront. After that, the agent handles everything.

**First-principles counter-argument:**
The checklist IS the judgment. Writing "Does the headline include a specific number?" is a design decision that shapes the entire optimization trajectory. A different person would write different questions and get a different "optimal" skill.

This means the method doesn't eliminate human judgment — it COMPRESSES it into one moment (checklist design) and then FREEZES it. All subsequent optimization is relative to that frozen judgment.

The danger: judgment about what "good" means evolves as you use the skill, see outputs, talk to customers. But the checklist doesn't evolve with you. You've created a snapshot of your judgment and optimized relentlessly toward a target that's slowly drifting from reality.

**The corrected frame:**
The checklist is not a one-time input — it's the most important stock in the system and needs its own maintenance loop. Build a meta-eval: every 20 rounds, human reviews 5 outputs that scored 100%, asks "is this actually good?" If ≥1 is not good → checklist needs updating.

**Systems integration:** This is B3 (Judgment Atrophy) + Shifting the Burden archetype. The symptomatic solution (optimize against checklist) relieves pressure to improve the fundamental solution (evolve understanding of quality).

### 5.2 Debate Point 2: "56% → 92% in 4 rounds"

**The claim:** The method achieves dramatic improvement quickly.

**First-principles counter-argument:**
56% starting score means the original skill was badly written. Going from 56% to 92% is mostly "fixing obvious bugs" — not "optimization." It's like saying "my car went from 30 km/h to 90 km/h after I removed the parking brake."

The real test of autoresearch is taking a skill from 85% to 95%. That's where diminishing returns bite and where Goodhart starts mattering. The article doesn't show this hard case.

Also: 4 rounds × ~10 test runs = 40 evaluations. At 56% baseline, the variance is huge. The 92% could easily be 85% or 97% — we don't know because there's no confidence interval reported.

**The corrected frame:**
Report starting scores honestly. If it was <70%, the skill had bugs — autoresearch is bug-fixing, not optimization. The method's real value is in the 85%→95% range, which requires more rounds, better evals, and statistical discipline.

**Systems integration:** This connects to B1 (Diminishing Returns). The article's example lives in the easy zone where R1 dominates. Real value lives where B1 dominates and you need genuine innovation in checklist design.

### 5.3 Debate Point 3: "The method works on anything you can score"

**The claim:** If you can measure it, you can autoresearch it. Applied to website speed, cold outreach, newsletter intros.

**First-principles counter-argument:**
The method works on anything where:
1. Quality can be decomposed into independent binary checks
2. The search space is a text prompt (can be mutated)
3. Evaluation is fast and cheap
4. The quality function is STATIONARY (doesn't change over time)

This holds for prompt optimization. It does NOT hold for:
- **Physical systems** — you can't "undo" a hardware change as easily as reverting a prompt
- **Relationship systems** — sending 50 cold email variations to the same prospect burns the bridge
- **Taste-dependent outputs** — "Is this beautiful?" cannot be decomposed into binary checks without losing the holistic
- **Adversarial environments** — if your competitors also autoresearch, the "optimal" cold email becomes the median

**The corrected frame:**
Autoresearch works on **prompt-shaped, binary-scorable, stationary** optimization problems. The "works on anything" claim overextends. Website speed optimization (1100ms → 67ms) works because latency IS the metric. Cold outreach does NOT work as cleanly because response rate depends on recipient context, not just email quality.

**Systems integration:** This is the boundary between L10-L12 (parameters you can tune) and L1-L3 (paradigms that shape what you optimize for). Autoresearch is powerful at L10-L12. It cannot touch L1-L3.

### 5.4 Current vs. Fundamental Limitations

```
CURRENT LIMITATION (will be overcome):
- Statistical noise in small samples → bigger test sets or smarter statistics
- Manual checklist design → AI-assisted checklist generation
- Single-skill optimization → cross-skill transfer learning
- Sequential testing → parallel variation testing
→ DON'T rely on these staying as limitations

FUNDAMENTAL LIMITATION (physics-level):
- Goodhart's Law: optimizing a proxy diverges from the real target (information-theoretic)
- Judgment compression: checklist is lossy encoding of human quality sense
- Stationarity assumption: the world changes, evals don't (unless you change them)
- Taste irreducibility: holistic quality ≠ sum of binary checks
→ SAFE to build strategy accounting for these
```

### 5.5 Rate-of-Change Analysis

```
dS/dt (Skill quality change) = Fast (minutes per round) — this is the method's strength
dE/dt (Eval quality change) = Zero (static after design) — this is the method's weakness
dM/dt (Model capability change) = Slow (months) — evals may break on model update
dR/dt (Real quality bar change) = Slow (weeks-months) — as you learn more, "good" changes

SURVIVAL CONDITION: dE/dt must track dR/dt
Currently: dE/dt = 0, dR/dt > 0 → eval quality erodes over time
Fix: Build eval refresh cadence into the method
```

---

## PART 6: ARCHITECT EXPANDED FRAMEWORK

### 6.1 First-Principles Reduction

```
ORIGINAL MODEL (Ole Lehmann): 4 flat concepts
1. Binary checklist
2. One-change-at-a-time loop
3. Keep/revert based on score
4. Autonomous agent execution

FIRST-PRINCIPLES REDUCTION: 3 layers + 2 missing dimensions

Layer 3 (Top): JUDGMENT MAINTENANCE — human refreshes evals, catches Goodhart
Layer 2: EVAL INTEGRITY — binary, anti-Goodhart, statistically significant
Layer 1 (Foundation): MUTATION LOOP — isolate, test, keep/revert

Missing: CROSS-SKILL TRANSFER (changelog patterns across skills)
Missing: EVAL EVOLUTION (checklist refresh cadence)

WHY REDUCTION MATTERS:
The original model is all Layer 1 (the loop) with a nod to Layer 2 (binary evals).
Layer 3 (judgment maintenance) is completely absent, yet it's what prevents
the system from optimizing toward a stale target. This is the same pattern as
Workshop X's Analyst Trap: infrastructure without judgment = overhead.
```

### 6.2 Framework Mnemonic: REFINE

- **R**un one change (isolation principle)
- **E**val with binary checks (yes/no, not ratings)
- **F**ail fast, revert fast (no sunk cost)
- **I**nspect the inspector (anti-Goodhart human review)
- **N**etwork changelogs (cross-skill transfer)
- **E**volve the eval (refresh checklist with reality)

*Retrieval: "To REFINE skills, run isolated changes, eval binary, fail/revert fast, inspect the inspector, network your changelogs, and evolve the eval itself."*

### 6.3 Complete System Map

```
                    ┌──────────────────┐
                    │   SKILL QUALITY  │ (Stock)
                    └────────┬─────────┘
                  ┌──────────┴──────────┐
            R1 Flywheel            B1 Diminishing Returns
           (mutation loop)         (fewer failures to fix)
                  │                      │
          ┌───────┴───────┐      ┌──────┴──────┐
          │  EVAL QUALITY │      │  CHANGELOG  │
          │   (Stock)     │      │  KNOWLEDGE  │
          └───────┬───────┘      └──────┬──────┘
            B2 Goodhart           R2 Compound
           (gaming evals)        (cross-model)
                  │                      │
          ┌───────┴───────┐      ┌──────┴──────┐
          │ HUMAN JUDGMENT│      │ CROSS-SKILL │
          │   (Stock)     │      │  PATTERNS   │
          └───────────────┘      └─────────────┘
            B3 Atrophy              R3 Transfer
           (delegation decay)    (one insight → all skills)
```

### 6.4 Extended Loop Inventory

| # | Loop | Name | Structure | Speed | Dominance | Status |
|---|------|------|-----------|-------|-----------|--------|
| R1 | Improvement Flywheel | Better→keeps change→better | Fast | HIGH (early) | Active |
| R2 | Changelog Compound | More rounds→richer log→better start | Slow | LOW | Latent |
| R3 | Cross-Skill Transfer | Pattern in skill A→improves skill B | Medium | LOW | Missing |
| B1 | Diminishing Returns | Higher score→fewer targets→slower | Medium | HIGH (late) | Active |
| B2 | Goodhart's Law | More opt→gaming checklist→false quality | Slow | MEDIUM | Hidden |
| B3 | Judgment Atrophy | More automation→less review→weaker evals | Very slow | LOW | Dormant |
| B4 | Multi-objective Tension | Optimizing check A→hurts check B→oscillation | Medium | LOW | Situational |

### 6.5 Archetypes + Counter-Strategies

| Archetype | Evidence | Confidence | Counter-Strategy |
|-----------|----------|------------|-----------------|
| Limits to Growth | 56→92% then stops | HIGH | Add new eval dimensions, don't just optimize existing |
| Shifting the Burden | "Your only job is checklist" → human disengages | 85% | Mandatory 10% human review cadence |
| Eroding Goals | "3-6 questions is the sweet spot" = lower bar | 60% | Lock minimum at 5 questions, never remove |
| Fixes That Fail | Quick improvement masks fundamental skill design flaw | 50% | If starting score <70%, rewrite skill first, then autoresearch |

### 6.6 Leverage Cascade (3 phases)

**Phase 1 (Week 1-4): Quick Wins — L2 + L6**
- L2: Adopt "skills are measurable" paradigm → write evals for top 5 skills
- L6: Start changelog → index failures → share across skills
- Expected: 2-3 skills improved from <70% to >85%

**Phase 2 (Week 5-12): Structural Lock-In — L5 + L7 + L8**
- L5: Anti-Goodhart rule: every checklist includes "Would expert approve?" holistic check
- L7: Parallel testing (5 variations per round, not 1)
- L8: Monthly eval refresh cadence (human reviews 5 "perfect" outputs)
- Expected: Skills reliably >90%, Goodhart drift caught early

**Phase 3 (Month 4-6): Systemic Transformation — L3 + L4**
- L3: Cross-skill pattern library (catalog what always works: "add worked example," "ban buzzwords")
- L4: Self-organizing system: agent proposes NEW checklist questions based on failure patterns
- Expected: Skills self-improve without human writing new questions

### 6.7 Extended Rubric

| Dimension | 1 (Vulnerable) | 3 (Building) | 5 (Antifragile) |
|-----------|---------------|--------------|-----------------|
| Eval design | No evals, vibes only | Binary checklist, 3-6 items | Anti-Goodhart + holistic + rotated questions |
| Change discipline | Rewrites everything | One change per round | Atomic + statistically significant |
| Judgment maintenance | Delegated 100% | Reviews occasionally | Monthly review cadence, catches Goodhart |
| Cross-skill learning | Each skill isolated | Reads changelogs | Pattern library auto-feeds new skill design |
| Infrastructure | Manual testing | Automated loop | Dashboard + alerting + parallel testing |
| Eval evolution | Static checklist forever | Updates when failure noticed | Scheduled refresh + agent-proposed questions |

**Scoring bands:**
- 6-12: EXPOSED — skills degrade without you noticing
- 13-20: TRANSITIONING — improving but Goodhart risk unmanaged
- 21-26: POSITIONED — systematic improvement with safeguards
- 27-30: ANTIFRAGILE — skills improve from stress, evals evolve with reality

### 6.8 ARCHITECT Drills

**Drill 1: Eval Audit (linked to B2 Goodhart)**
- Week 1-2 | 20 min
- Take your highest-scoring skill. Read 5 outputs that scored 100%. Mark any you'd reject. Count = your Goodhart gap score.
- Target: <1 reject per 5 outputs

**Drill 2: Changelog Mining (linked to R3 Transfer)**
- Week 3-4 | 30 min
- Read changelogs from 3 skills. Extract patterns (e.g., "adding worked example helped 3/3 times"). Write as reusable principle.
- Target: ≥3 cross-skill principles extracted

**Drill 3: Eval Refresh (linked to B3 Atrophy)**
- Monthly | 15 min
- For each active checklist: Is every question still relevant? Is there a failure mode not caught? Add/modify ≥1 question.
- Target: Every checklist updated within 30 days

**Drill 4: Statistical Sanity (linked to B1)**
- Week 5+ | 10 min
- Before accepting a "improvement" from autoresearch, check: was the sample size ≥20? Is the improvement >10 percentage points? If no to both → might be noise.
- Target: Zero false-positive improvements accepted

### 6.9 Interleaving Schedule (12 weeks)

| Week | Focus A | Focus B |
|------|---------|---------|
| 1-2 | Write first eval checklist | Run first autoresearch |
| 3-4 | Goodhart audit on results | Write second eval checklist |
| 5-6 | Cross-skill changelog mining | Run second autoresearch |
| 7-8 | Eval refresh for both skills | Statistical validation |
| 9-10 | Pattern library creation | Third skill autoresearch |
| 11-12 | Full portfolio eval review | Agent-proposed eval questions |

### 6.10 Focus Session Design (90 min)

```
0:00-0:10  Review: Read latest changelog entries from last autoresearch run
0:10-0:25  Goodhart Check: Read 5 "passing" outputs, mark any you'd reject
0:25-0:45  Eval Refresh: Update checklist based on Goodhart findings
0:45-0:55  Break
0:55-1:10  Cross-Skill: Compare patterns across 2 changelogs
1:10-1:25  Launch: Start new autoresearch round with updated eval
1:25-1:30  Journal: Write 3 sentences on what you learned
```

### 6.11 Learning Journal Template

```markdown
## Autoresearch Journal — [Date]

### Skill optimized: ___
### Starting score: ___% → Current score: ___%
### Rounds completed: ___

### What eval question caught the most failures?
[answer]

### Did I find any Goodhart drift? (output passed but wasn't actually good)
[answer]

### What cross-skill pattern did I notice?
[answer]

### Is my checklist still aligned with what "good" actually means today?
[answer]

### What would I change about the eval if I started over?
[answer]
```

---

## PART 7: USE CASES

### 7.1 Audience Map

| Audience | Situation | Risk | Intervention | 90-Day Target |
|----------|-----------|------|-------------|---------------|
| **Workshop X CEO** | 32 skills, dP/dt = 0, limited time for manual improvement | Analyst Trap: optimizing skills instead of building products | Run autoresearch on top 5 most-used skills. Use /loop for overnight runs. | 5 skills at >90%, changelog feeding new skill design |
| **Solo AI builder** | Makes money from AI output quality (copywriting, code) | Revenue directly tied to skill quality | Start with revenue-critical skill. Measure before/after client satisfaction | 3 core skills optimized, client complaints ↓50% |
| **Claude Code power user** | Many skills, no evals | Skills fail silently, user compensates manually | Write evals for top 3 skills. Run autoresearch. Read changelogs. | Every skill has eval, automated improvement loop active |
| **Enterprise team** | Shared skills across team, inconsistent quality | Different team members get different quality | Shared eval checklist = shared quality standard. Autoresearch = automated consistency | Team-wide skill quality >85% with shared eval standards |

### 7.2 Implementation Roadmap (Workshop X specific)

Workshop X already has:
- `/loop` skill (recurring execution)
- `_meta/evals/` infrastructure (Session 50)
- analyst-trap autoresearch prototype (86%→100%)

**Gap:** Only 1 skill has evals. 31 skills have zero measurement.

**Week 1:** Write binary evals for top 5 most-used skills (research, concept-generate, task-clarify, embody, quality-gate)
**Week 2-4:** Run autoresearch on each. Use `/loop 10m` for overnight autonomous runs.
**Month 2:** Extract cross-skill patterns from changelogs → update skill design principles
**Month 3:** Every skill with >10 uses gets evals. Quarterly refresh cadence established.

---

## PART 8: SYNTHESIS

### 8.1 Single Most Important Insight

**The eval IS the skill.** The quality of your binary checklist determines the ceiling of your skill improvement. Autoresearch optimizes toward whatever you measure — so the real skill is measuring the right thing. This is a restatement of Goodhart's Law applied to prompt engineering: "When a measure becomes a target, it ceases to be a good measure."

### 8.2 System Archetype Warning

**Shifting the Burden is active.** The article's method shifts the burden of skill improvement from human judgment (fundamental solution) to automated optimization against a fixed checklist (symptomatic solution). This works brilliantly in the short term (56%→92%) but creates a hidden dependency: if the checklist goes stale, the "improved" skill optimizes toward the wrong target, and the human has lost the judgment muscles to notice.

**Counter:** Build a meta-loop. The article has a loop for improving skills. It needs a SECOND loop for improving evals. Human-in-the-loop for eval refresh, not skill improvement.

### 8.3 Counter-Intuitive Insights

1. **The checklist is more important than the skill.** A mediocre skill with great evals will improve. A great skill with no evals will degrade silently. Invest in eval quality first.

2. **Starting at 56% is not a success story — it's a bug report.** Skills below 70% have structural problems that autoresearch "fixes" by adding band-aids. Rewrite first, optimize second.

3. **More checklist questions = worse results above 6.** The skill starts "teaching to the test" — passing checks while losing holistic quality. Less measurement can be better measurement.

4. **Changelogs are worth more than improved skills.** The improved skill works for this model version. The changelog works for ALL future models. It's the compound asset.

5. **Full automation is the failure mode, not the goal.** The method's strength (no human needed) is also its risk (no human checking). The optimal is 95% automated, 5% human judgment at the eval layer.

### 8.4 The Three Laws

### Law 1: The Eval Primacy Law
**The ceiling of your skill is the quality of your eval, not the quality of your prompt.**
You can autoresearch a skill to 95% on a bad checklist and still produce garbage. Invest in eval design first. The prompt is the variable; the eval is the constraint.

### Law 2: The Goodhart Gradient Law
**Every optimization loop drifts from its target at a rate proportional to how long since a human last checked.**
Binary evals resist drift better than ratings. Anti-Goodhart checks resist better than pure binary. But NOTHING resists forever. Build a refresh cadence or watch your "95% skill" slowly become a "95% checklist-gamer."

### Law 3: The Changelog Compound Law
**The record of what you tried is worth more than the result of what worked.**
Improved skills are ephemeral (model changes break them). Changelogs are permanent knowledge about what works and why. They compound across skills, across models, across time. The person with the richest changelog wins, not the person with the highest score today.

---

## PART 9: PROGRESS TRACKING

### 9.1 Competency Grid

| Skill | Has Eval | Autoresearched | Score | Goodhart Check | Changelog |
|-------|----------|---------------|-------|---------------|-----------|
| analyst-trap | ✅ | ✅ (86→100%) | 100% | Not yet | Partial |
| research | ❌ | ❌ | ? | ❌ | ❌ |
| task-clarify | ❌ | ❌ | ? | ❌ | ❌ |
| concept-generate | ❌ | ❌ | ? | ❌ | ❌ |
| quality-gate | ❌ | ❌ | ? | ❌ | ❌ |

### 9.2 Weekly Review Questions

1. How many skills have evals this week vs. last week?
2. What was the biggest Goodhart gap I caught?
3. What cross-skill pattern did I add to the pattern library?
4. Did I refresh any eval checklist this week?
5. Am I optimizing skills or optimizing EVALS? (The second is higher leverage.)

---

## ARCHITECT History Update

| Content | Original | Reduced | Mnemonic | Archetype | Key Law |
|---------|----------|---------|----------|-----------|---------|
| Autoresearch (Lehmann) | 4 flat (checklist, loop, keep/revert, auto) | 3 layers (Loop→Eval→Judgment) + 2 missing (Transfer, Evolution) | REFINE | Shifting Burden + Limits to Growth | Eval Primacy: ceiling = eval quality, not prompt quality |

---

*Analysis complete. Recommend: /galaxy-gate to evaluate "Eval Primacy Law" and "Changelog Compound Law" as Galaxy note candidates. Both pass the 3-question gate (changes design approach, changes strategic decisions, warns against Goodhart trap).*
