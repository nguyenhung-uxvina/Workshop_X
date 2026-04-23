# Skill: Decision Log

> **Use When**: Making any significant design, technical, or project decision
> **Output**: Structured decision record for future reference

---

## 🎯 Purpose

Document decisions so future-you (and teammates) understand:
1. **What** was decided
2. **Why** it was decided
3. **What alternatives** were considered
4. **What trade-offs** were accepted

---

## 📝 Decision Record Template

```markdown
## DEC-[XXX]: [Concise Title]

**Date**: YYYY-MM-DD
**Status**: 🟡 PENDING | ✅ APPROVED | ❌ REJECTED | 🔄 SUPERSEDED
**Decision Maker**: [Name/Role]
**Project**: [Project Name]

### Context
[2-3 sentences: Why this decision is needed NOW. What triggered it?]

### Options Considered

| Option | Pros | Cons | Score |
|--------|------|------|-------|
| A: [Name] | [Benefits] | [Drawbacks] | [1-5] |
| B: [Name] | [Benefits] | [Drawbacks] | [1-5] |
| C: [Name] | [Benefits] | [Drawbacks] | [1-5] |

### Decision
**Selected: [Option X]**

### Rationale
1. [Primary reason]
2. [Secondary reason]
3. [Tertiary reason]

### Trade-offs Accepted
- [What we're giving up by choosing this option]
- [Risks we're accepting]

### Implications
- [What changes as a result]
- [Follow-up actions needed]
- [Dependencies created]

### Related
- [[link/to/related/decision]]
- [[link/to/requirement]]
- [[link/to/design/document]]
```

---

## 🚀 Quick Start

### Minimal Decision (< 5 min)

For quick, low-stakes decisions:

```markdown
## DEC-XXX: [Title]
**Date**: YYYY-MM-DD | **Status**: ✅

**Decision**: [What you decided]
**Why**: [1 sentence reason]
**Alternative rejected**: [What you didn't choose and why]
```

### Full Decision (15-30 min)

For significant decisions affecting project direction, use the full template above.

---

## 📋 Decision Categories

Use these prefixes for easy filtering:

| Prefix | Category | Example |
|--------|----------|---------|
| ARCH- | Architecture | ARCH-001: Processing platform |
| TECH- | Technical | TECH-001: Sensor selection |
| PROC- | Process | PROC-001: Review cadence |
| MAKE- | Make vs Buy | MAKE-001: Custom PCB vs COTS |
| REQ- | Requirements | REQ-001: Scope change |

---

## ✅ Decision Quality Checklist

Before finalizing a decision, verify:

- [ ] Context clearly explains WHY this decision is needed
- [ ] At least 2 alternatives were considered
- [ ] Scoring/evaluation is based on explicit criteria
- [ ] Trade-offs are acknowledged, not hidden
- [ ] Implications identify follow-up actions
- [ ] Related documents are linked

---

## 💡 Tips

1. **Write decisions BEFORE you forget the context** - Document within 24 hours
2. **Include rejected options** - They're valuable for understanding why
3. **Link to evidence** - Requirements, test results, expert opinions
4. **Update status** - Mark as SUPERSEDED when decisions change
5. **Use decision IDs** - Easy reference in other documents

---

## 📚 Example: Good vs Bad

### ❌ Bad Decision Record
```
We decided to use Jetson Nano because it's good.
```

### ✅ Good Decision Record
```markdown
## DEC-003: Processing Platform Selection

**Date**: 2026-01-15 | **Status**: ✅ APPROVED

### Context
Need edge computing platform for V-SMASH. Must run YOLO inference 
at 30+ FPS with <10W power budget per R21.

### Options
| Option | Pros | Cons | Score |
|--------|------|------|-------|
| Raspberry Pi 4 | $75, familiar | No GPU acceleration | 2 |
| Jetson Nano | $150, 128 CUDA cores, TensorRT | Limited to 4GB RAM | 4 |
| Xavier NX | $400, best performance | Cost, overkill for Phase 1 | 3 |

### Decision
**Selected: Jetson Nano**

### Rationale
1. Sufficient for YOLOv8-nano at required FPS
2. Cost-effective for Phase 1 validation
3. Upgrade path to Xavier NX if needed

### Trade-offs
- May need upgrade for thermal+visible fusion (Phase 2)
- 4GB RAM limits model size

### Implications
- Procurement: Order 5 dev kits in Week 2
- Software: Use TensorRT for optimization
```

---

*Skill Version: 1.0*
