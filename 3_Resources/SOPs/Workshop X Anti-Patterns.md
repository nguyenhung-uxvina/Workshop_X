# Delegation Anti-Patterns — Detailed Reference

---

## AP1: "Handle it" Delegation

**Pattern:** Vague task with no context, constraints, or review gate.

```
BAD:  "Generate the VN-LOMAH scoring module"
  → Ambiguous task, no context, no constraints, no review gate
  → AI will produce something that compiles but doesn't work at range
  → Missing: sensor count, signal chain specs, config requirements, test criteria

FIX:  Use Template A2 with full context:
  → Specify 4-channel piezo input
  → Reference signal chain spec
  → Define detection threshold as configurable parameter
  → Set PLAUSIBLE review as gate
  → Include HITL checkpoint before integration
```

**Root cause:** Treating AI like a senior engineer who knows the project. AI has zero project context unless you provide it.

---

## AP2: Delegating Ambiguous Work

**Pattern:** Asking AI to debug physical/hardware issues it cannot observe.

```
BAD:  "Debug why VN-CAM drops to 12fps after 45 minutes"
  → Requires hardware profiling, thermal analysis, RPi5-specific PCIe behavior
  → AI will suggest generic "check thermal throttling" (obvious, unhelpful)
  → Real cause could be: USB bandwidth contention, memory leak,
    Hailo-8 thermal throttle, power supply droop, kernel driver bug

FIX:  DO the debugging yourself using GHOST protocol.
  Use AI for specific sub-questions ONLY:
  → "What is RPi5 USB 3.0 bandwidth limit for concurrent isochronous and bulk transfers?"
  → "What are common Hailo-8 thermal throttling thresholds?"
  → "How to profile Python memory allocation over time on Linux?"
```

**Root cause:** AI has no physical sensors. It cannot see temperature curves, measure voltages, or observe timing behavior.

---

## AP3: Trusting AI on Vietnamese Military Context

**Pattern:** Expecting AI to know Vietnamese-specific standards, procedures, or regulations.

```
BAD:  "Draft TCVN compliance matrix for VN-RANGE-001"
  → AI will hallucinate TCVN standard numbers that don't exist
  → AI has no access to Vietnamese military procurement regulations
  → AI cannot know which TCVN standards apply to range equipment

FIX:  YOU provide the real TCVN standards list.
  AI fills in the matrix FORMAT with YOUR data.
  → Use Template B1 with source_data pointing to real standards
  → AI structures the document, YOU verify every standard reference
  → Mark anything AI cannot verify as [VERIFY WITH MILITARY]
```

**Root cause:** Zero AI training data for Vietnamese military procurement. This is KN's unique domain knowledge — the entire competitive advantage.

---

## AP4: Skipping Review on "Simple" Output

**Pattern:** Assuming AI-generated config/boilerplate doesn't need review.

```
BAD:  AI generates config file → "Looks simple, ship it"
  → Config file has default password
  → Or wrong IP range exposing internal network
  → Or permission setting that opens security hole
  → Or log level set to DEBUG (fills disk in production)
  → Or hardcoded path that doesn't exist on deployment target

FIX:  EVERY output gets minimum review (even 2-minute scan).
  For config files specifically check:
  → Credentials (no defaults, no plaintext secrets)
  → Network exposure (correct interface binding, firewall rules)
  → File paths (exist on target system, correct permissions)
  → Log settings (appropriate for production, not debug)
  → Resource limits (memory, disk, connections)
```

**Root cause:** "Simple" outputs are where complacency creates vulnerabilities. The effort to review is minimal; the cost of a missed security issue is catastrophic.

---

## AP5: Using AI to Avoid Difficult Decisions

**Pattern:** Asking AI to make strategic choices that require human judgment.

```
BAD:  "Which product should we prioritize next?"
  → AI will generate plausible-sounding analysis
  → But AI cannot weight:
    - Military relationship factors (who trusts us, who's ready to buy)
    - Procurement timing (budget cycles, tender windows)
    - KN's energy/motivation for specific products
    - Political dynamics within Vietnamese military
    - Supply chain relationships with local manufacturers

FIX:  Use Template C1 for ANALYSIS (data preparation).
  → AI generates stock-flow maps, leverage point rankings, archetype detection
  → KN reviews the analysis (30-45 min)
  → KN makes the DECISION based on analysis + intuition + context
  → AI prepares. Human decides. Always.
```

**Root cause:** Decisions require weighing incommensurable factors (relationships, timing, energy, politics) that AI cannot access or evaluate. Using AI analysis to INFORM decisions is powerful. Delegating the decision itself is abdication.

---

## Meta-Pattern: When to Suspect You're in an Anti-Pattern

Ask yourself:
1. **"Did I spend less than 2 minutes setting up this delegation?"** → Probably AP1
2. **"Am I hoping AI will figure out something I don't understand?"** → Probably AP2
3. **"Am I referencing Vietnamese-specific knowledge?"** → Check for AP3
4. **"Did I skip review because it seemed trivial?"** → Definitely AP4
5. **"Am I asking AI to choose, not analyze?"** → Probably AP5

**The fix for all anti-patterns is the same: Apply DCTRS.**
Every delegation needs: Delegate + Constrain + Test + Review + Specify.
