---
name: deep-content-analyzer
description: >
  Comprehensive multi-framework analysis of articles, book chapters, podcasts,
  or any knowledge-dense content. Combines Systems Thinking (stock-flow mapping,
  feedback loops, Meadows leverage points) with Meta-Learning (Feynman, chunking,
  mnemonics, rubrics, drills, interleaving) and First-Principles Debate with
  ARCHITECT expanded framework generation. Triggers on "analyze this article",
  "deep analysis", "multi-framework", "break down this content", "extract insights",
  "analyze clarify exemplify", "debate", "first principles", "expand framework",
  or whenever users paste substantial text requesting analysis. Vietnamese triggers:
  "phan tich sau", "phan tich da khung", "trich xuat insight", "tranh luan",
  "mo rong framework". Use this skill whenever a user pastes text and asks for
  analysis even if they don't name specific frameworks -- the presence of content
  plus an analytical request is sufficient.
---

# Deep Content Analyzer

Transform intellectual content into actionable insight documents using integrated Systems Thinking + Meta-Learning + First-Principles Debate + ARCHITECT framework generation.

## What Makes This Different

Most analysis produces summaries. This skill produces **structural understanding** — it reveals hidden system dynamics, surfaces counter-intuitive insights, debates claims from first principles, and generates an expanded framework that goes beyond what the original author provides. The output should surprise even someone who read the source material carefully.

The skill orchestrates 15+ sub-skills into a single coherent pipeline. Think of it as the conductor of an analytical orchestra — each sub-skill is an instrument, this skill is the score that tells them when and how to play together.

---

## Process

```
Phase 1: Load Sub-Skills  → Read SKILL.md files (quality foundation)
Phase 2: Extract           → Pull system variables from content  
Phase 3: Apply Frameworks  → Systems Thinking + Meta-Learning
Phase 4: Debate + Build    → First-Principles + ARCHITECT framework
Phase 5: Synthesize        → Assemble 9-Part output document
```

### Phase 1: Load Sub-Skills

The sub-skill files contain tested templates, quality checklists, and output patterns built through extensive iteration. Reading them before analyzing is what separates deep structural analysis from generic summarization — they provide the analytical protocols that make the difference.

**Read every time:**
- `/mnt/skills/user/stock-flow-mapper/SKILL.md`
- `/mnt/skills/user/feedback-loop-detector/SKILL.md`
- `/mnt/skills/user/meadows-leverage-analyzer/SKILL.md`

**Read 4-6 most relevant to the content:**
- `/mnt/skills/user/engineering-feynman/SKILL.md`
- `/mnt/skills/user/engineering-chunking-breakdown/SKILL.md`
- `/mnt/skills/user/engineering-mnemonic-creator/SKILL.md`
- `/mnt/skills/user/engineering-self-assessment-rubric-generator/SKILL.md`
- `/mnt/skills/user/engineering-interleaving-scheduler/SKILL.md`
- `/mnt/skills/user/engineering-targeted-drill-master/SKILL.md`
- `/mnt/skills/user/engineering-learning-architecture-builder/SKILL.md`
- `/mnt/skills/user/engineering-learning-journal-keeper/SKILL.md`
- `/mnt/skills/user/engineering-design-review-mentor/SKILL.md`
- `/mnt/skills/user/engineering-concept-evaluation-assistant/SKILL.md`
- `/mnt/skills/user/engineering-systems-mapper/SKILL.md`
- `/mnt/skills/user/skills-mastery-system/SKILL.md`

### Phase 2: Content Extraction

Before applying frameworks, pull the raw analytical material:

**Core Thesis** — What's the single most important claim? What paradigm shift is proposed? What's the stated vs. real goal?

**System Variables** — Scan for stocks (what accumulates), flows (what changes stocks), delays (time lags), feedback dynamics (reinforcing/balancing), constraints (throughput limiters).

**Learning Content** — Core concepts, prerequisite chains, common mistakes, actionable principles, audience assumptions.

**Gaps** — This directly feeds the debate in Phase 4. Look for: unstated assumptions, missing counter-arguments, unnamed system archetypes, variables treated as static that are actually dynamic, adjacent domains that illuminate the topic.

### Phase 3: Apply Frameworks

#### Systems Thinking

The sub-skills provide detailed templates. The key analytical moves and the reasoning behind them:

**Stock-Flow Mapping** — Identify critical stocks. For each, map inflows, outflows, rates, controls, delays. The real insight comes from identifying which stock is the system **constraint** (bottleneck) vs. which the author *thinks* is the constraint — these often differ, and the gap between perceived and actual constraint is where the most valuable insight lives.

Stocks to look for: capability stocks (skills, knowledge, trust), resource stocks (time, money, attention), risk stocks (technical debt, accumulated errors, hidden dependencies), and buffer stocks (resilience, slack, optionality). The stock the author never mentions is often the most important one — it's the "hidden stock" pattern that appears in 86% of past analyses.

**Feedback Loops** — Map causal links between stocks. Classify as Reinforcing (even number of negative links = amplifies) or Balancing (odd number = stabilizes). The most valuable finding is the **dominant loop** — the one currently driving behavior. Name loops descriptively ("Confidence Trap" not "R3") because memorable names make insights actionable.

Pay special attention to loops where the reinforcing dynamic is **vicious but feels virtuous** — these are the most dangerous. Example: "Agent produces confident output → user skips review → productivity rises → more delegation → critical skill atrophies → errors accumulate undetected → catastrophic failure." This feels productive at every step except the last.

**System Archetypes** — Match loop structures to known patterns. "Shifting the Burden" appears in 86% of past analyses — the symptomatic solution feels easier but atrophies the fundamental capability. The reason it's so common is that it maps directly to how humans make decisions under time pressure: the quick fix is always more attractive than the slow build.

Other archetypes to scan for: Fixes That Fail (short-term fix creates long-term problem), Escalation (two parties ratcheting up), Success to Successful (winner-take-all dynamics), Eroding Goals (gradually accepting worse outcomes), Tragedy of Commons (individual rationality → collective irrationality).

**Leverage Points** — Scan Meadows' L1-L12. L2 (Paradigm) has been the highest-leverage in 100% of past analyses — changing how you see the system changes every downstream decision. L12 (Parameters — numbers, specific tools) is where most authors stay and where the least leverage exists. The reason for this pattern is that authors naturally write about what's concrete and actionable (parameters) rather than what's abstract and transformative (paradigms).

Design a **Phase 1-3 intervention cascade**: Phase 1 (quick wins) targets information and rules — making invisible dynamics visible and creating explicit protocols. Phase 2 (structural) modifies loop gains — slowing harmful reinforcing loops, accelerating beneficial ones. Phase 3 (systemic) shifts goals and paradigms — the hardest but highest-leverage changes. The cascade matters because attempting Phase 3 without Phase 1-2 foundations typically fails.

#### Meta-Learning

Apply each framework, emphasizing those most insightful for this content. Sub-skills provide formats and quality criteria:

- **Feynman** — 60-second explanation + everyday analogy + 3 diagnostic questions at increasing depth
- **Chunking** — Dependency hierarchy (often different from presentation order — this difference is itself an insight)
- **Mnemonic** — Meaningful acronym following MEMORABLE criteria
- **Rubric** — Behavioral indicators at each level, not just knowledge descriptors
- **Interleaving** — Mix topics so no two consecutive blocks are the same subject
- **Drills** — Specific exercises for highest-leverage skills or most common failure points
- **Journal** — Prompts that reference feedback loops and meta-learning
- **Additional** (when relevant): Learning Architecture, Focus Sessions, Progress Tracking

#### Use Cases

4-6 audience-specific recommendations: situation, risk/opportunity, interventions tied to leverage points, 90-day target.

### Phase 4: First-Principles Debate + ARCHITECT Framework

This is where the analysis creates something the original content doesn't contain. Every framework has blind spots — the debate finds them, the ARCHITECT framework fills them. This phase is what transforms "comprehensive summary" into "original intellectual contribution."

**For detailed step-by-step processes, templates, and checklists, read `references/debate-and-architect.md`.** What follows is the essential logic and reasoning.

#### The Debate

The debate's power comes from three analytical moves most readers never make. Each one exploits a specific cognitive blind spot that authors (and readers) systematically fall into:

**Move 1: Current vs. Fundamental Limitation Test.**
When an author says "X can't do Y," ask: temporary gap or physics-level constraint? This distinction matters because building strategy on current limitations is like building on ice — it melts. Building on fundamental limitations is bedrock.

Current limitations (will be overcome): technology gaps, scaling barriers, regulatory vacuums, context window sizes. These change on 1-5 year timescales.

Fundamental limitations (physics-level): requires genuine embodiment, consciousness, skin-in-the-game (actual consequences), 200,000 years of evolved social hardware. These won't change on any relevant timescale.

The reason authors conflate these is that current limitations *feel* permanent in the moment. The analyst's job is to see through the feeling.

**Move 2: Rate-of-Change Analysis.**
Most authors describe snapshots — "here's the situation today." But the most important dynamics are the *rates at which things change*. Identify:
- dH/dt = human capability change rate
- dA/dt = technology capability expansion rate
- dR/dt = regulatory/institutional change rate
- dM/dt = market evolution rate

Then define the survival/success condition as a relationship between rates. For example: "Your career is safe as long as your learning rate exceeds the automation rate in your domain (dH/dt > dA/dt)." This reframes static skill-building problems as dynamic rate-matching problems, which is almost always more accurate.

The reason this works is that rate relationships reveal emergent behaviors (convergence, divergence, oscillation) that snapshots completely miss.

**Move 3: Missing Dimensions Checklist.**
Authors naturally focus on what they know. The checklist systematically surfaces what they don't: Taste (correct vs. excellent), Skin in the Game (consequenceless entities decide differently), Compound Stacks (multiplicative not additive skill value), Trust Capital (builds linearly, collapses exponentially), Physical-World Interface, Power Dynamics, Information Asymmetry, Regulatory Dynamics, Co-Evolution, Second-Order Effects, Temporal Dynamics, Selection Bias. Full descriptions in `references/debate-and-architect.md`.

The reason this checklist works is that it's compiled from actual blind spots found across 7+ analyses. These dimensions are systematically absent from most content.

Generate 3-7 formal debate points: claim → counter-argument → corrected frame → systems integration. Each debate point should genuinely change how the reader should apply the content — if it doesn't, it's a nitpick, not a debate point.

#### The ARCHITECT Framework

After the debate reveals what the author missed, synthesize everything (original content + debate corrections + missing dimensions) into an expanded framework. The framework should add genuine value that neither the original content nor the debate alone provides.

The generation follows 7 moves (see `references/debate-and-architect.md` for detailed templates):

**Reduce** → Collapse the author's flat list into irreducible elements. Past analyses consistently reduce to 3±1 layers, revealing hidden dependency structure the flat list obscured. The reduction itself is an insight — it shows what's fundamental vs. what's derivative.

**Layer** → Design dependency hierarchy: substrate (meta-capability) → foundation → middle → top. Show what builds on what. This matters because it reveals the optimal learning sequence, which is almost never the author's presentation order.

**Name** → Create a meaningful mnemonic (real word, domain-relevant, each letter = actionable principle). Good mnemonics are "pointers not posters" — they compress the framework into working memory while remaining generative enough to reconstruct the full detail.

**Extend dynamics** → Add loops discovered during debate to the Phase 3 inventory. Map all archetypes with counter-strategies. The extended inventory is typically 30-50% larger than the Phase 3 version because the debate surfaces dynamics the original analysis missed.

**Build cascade** → Integrate debate insights into the leverage point cascade. Phase 1 (weeks 1-4): information + rules. Phase 2 (weeks 5-12): loop modification. Phase 3 (months 4-6): goals + paradigm. Each phase has intervention tables with specific pilot actions.

**Equip** → Extended rubric (covering all framework dimensions with behavioral indicators), targeted drills (each tied to a specific loop or leverage point — this connection is what makes them structural rather than generic), 12-16 week interleaving schedule, 90-minute focus session design, learning journal template keyed to framework dimensions.

**Distill Three Laws** → Compress the entire analysis into 3 irreducible principles. This is the ultimate quality test. If the laws aren't memorable enough to recall without the document, generative enough to reconstruct the framework when unpacked, and non-obvious enough to surprise — the analysis isn't deep enough yet.

Past analyses consistently produce laws in three categories:
1. A paradigm shift (how you see the system)
2. A rate or compound dynamic (what accumulates matters more than what happens)
3. A structural counter-intuitive insight (the opposite of what most people assume)

### Phase 5: Output

Save as `.md` to `/mnt/user-data/outputs/` and use `present_files`. For the complete 9-Part template, read `references/output-template.md`.

| Part | Content | Quality Gate |
|------|---------|-------------|
| 1 | Clarification (Feynman + taxonomy) | Genuinely simple, no jargon |
| 2 | Systems Thinking (stocks, loops, archetypes, leverage) | Constraint correctly identified |
| 3 | Meta-Learning (chunks, mnemonic, rubric, drills, schedule) | Dependency order ≠ presentation order |
| 4 | Concept Evaluation (strengths, weaknesses, gaps) | Weaknesses are structural, not nitpicks |
| 5 | First-Principles Debate (claims, counter-arguments, rates) | At least 1 genuinely surprising counter |
| 6 | ARCHITECT Framework (reduction, mnemonic, full system) | Framework adds ≥2 dimensions author missed |
| 7 | Use Cases (audience map + roadmap) | Different prescriptions per audience |
| 8 | Synthesis (insight, warning, counter-intuitive, Three Laws) | Three Laws are standalone-memorable |
| 9 | Progress Tracking (competency grid, review questions) | Behavioral indicators, not just knowledge |

---

## Guidance

**Depth over breadth.** A brilliant analysis of 5 stocks beats a superficial one of 12. Go deep on what matters.

**The debate is where original value lives.** Phases 1-3 follow sub-skill templates. Phase 4 is where this skill creates something the original doesn't contain — invest proportionally more thinking here.

**Cross-reference past analyses.** The user has a growing library. Meta-patterns add value when they illuminate the current content.

**Physics analogies are your sharpest tool.** Thermodynamics, mechanics, information theory, evolution — especially rate-of-change analysis.

**The Three Laws test the analysis.** "Pointers, not posters" — compact enough for working memory, deep enough to reconstruct the full framework when unpacked.

---

## Interaction Patterns

**Full analysis** — User pastes content + requests analysis → All 5 phases → comprehensive .md

**Add debate** — "bổ sung debate" or "expand framework" after initial analysis → Phase 4 + integrate → expanded .md

**Debate only** — "just debate this" → Quick Phase 2 + light Phase 3 + full Phase 4 → debate .md

**Reverse-engineer** — "turn this into a skill" → Extract pattern → SKILL.md per skill-creator format

---

## Meta-Pattern Library

Empirical observations across 7 analyses that help calibrate expectations:

| Pattern | Freq | Implication |
|---------|------|-------------|
| "Shifting the Burden" | 6/7 | Symptomatic solutions atrophy fundamental capabilities |
| L2 (Paradigm) top leverage | 7/7 | Mental model shifts > tactical changes |
| Flat list → 3±1 layers | 5/5 | First-principles reveals hidden hierarchy |
| Hidden stock = key finding | 6/7 | Author's blind spot is the most valuable discovery |
| Laws: paradigm + rate + structure | 5/5 | Irreducible principles cluster in these categories |
