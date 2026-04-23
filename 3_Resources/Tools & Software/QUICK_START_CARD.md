# Meadows Leverage Points - Quick Start Card

## The 12 Leverage Points (Most → Least Effective)

### 🔴 HIGH LEVERAGE (Prioritize These)

**L1: Transcending Paradigms**
- Can question assumptions themselves
- Keep worldview flexible
- Example: "Is growth the right goal?"

**L2: Paradigm Shift**  
- Change mental models
- Example: Quality is everyone's job, not just QA's
- Timeline: 3-6 months

**L3: System Goals**
- Real goal ≠ stated goal?
- Fix what you're optimizing for
- Example: First-pass yield vs volume shipped

### 🟡 MID-HIGH LEVERAGE

**L4: Self-Organization**
- System's power to adapt/learn
- Enable vs control

**L5: System Rules**
- Incentives, constraints
- Check for perverse incentives
- Example: Reward prevention not detection

**L6: Information Flow**
- Who knows what, when?
- Fast feedback > slow feedback
- Often cheapest high-leverage change

### 🟢 MID LEVERAGE (Quantify These)

**L7: Reinforcing Loops**
- Amplifying feedback
- Script: `feedback_loop_calculator.py`
- Strategy: Slow bad loops, anchor good loops

**L8: Balancing Loops**
- Correction mechanisms
- Script: `balancing_loop_tuner.py`
- Check: Too weak or too strong?

**L9: Delay Lengths**
- Time from action to consequence
- Script: `delay_impact_calculator.py`
- Shorter = faster learning

### ⚫ LOW LEVERAGE (Last Resort)

**L10: Physical Structure**
- Expensive, slow to change
- Try L5-L9 first

**L11: Buffer Sizes**
- Safety stocks, slack capacity
- Diminishing returns

**L12: Parameters**
- Numbers, rates, thresholds
- Easiest to change, least effective
- Most common mistake: stop here

---

## Decision Tree

```
Problem keeps recurring?
├─ YES → Check L3 (wrong goal?) and L2 (wrong paradigm?)
│
├─ Quick fixes fail? → Check L5 (bad incentives?)
│
├─ Delays in feedback? → Check L6 (info flow) and L9 (delay length)
│
├─ Exponential growth/decay? → Check L7 (reinforcing loop)
│  └─ Run: feedback_loop_calculator.py
│
├─ System oscillates? → Check L8 (balancing loop too strong?)
│  └─ Run: balancing_loop_tuner.py
│
├─ Already tried parameters? → DON'T add more L12
│  └─ Go back to L3-L6
│
└─ Need to rebuild? → L10 only after exhausting L3-L9
```

---

## Common Traps

❌ **Parameter Trap**: Adding resources (L12) when goals misaligned (L3)
❌ **Structure Obsession**: Rebuilding (L10) before fixing rules (L5)  
❌ **Vague Advice**: "Improve communication" → Specify: "Daily 15-min cross-team standup"
❌ **Ignoring Resistance**: Every change creates pushback - plan for it

---

## Quick Triggers

Tell Claude to analyze when you see:
- "We keep fixing but it gets worse"
- "Unintended consequences"
- "Everything we try fails"
- "Where should we intervene?"

---

## Script Commands

**Reinforcing loop (L7)**:
```bash
python scripts/feedback_loop_calculator.py
# Interactive mode, or:
--initial 1000 --gain 0.05 --periods 20
```

**Balancing loop (L8)**:
```bash
python scripts/balancing_loop_tuner.py
# Interactive mode, or:
--target 1000 --current 1200 --strength 0.5 --delay 2
```

**Delay impact (L9)**:
```bash
python scripts/delay_impact_calculator.py  
# Interactive mode, or:
--current-delay 30 --proposed-delay 1 --incidents 10
```

---

## System Archetypes

**Fixes That Fail**
- Quick fix works, then fails worse
- Root: Wrong goal (L3) or bad rules (L5)

**Shifting the Burden**
- External fix weakens internal capability  
- Root: Dependency loop (L7)

**Seeking Wrong Goal**
- Metric improves, problem persists
- Root: Proxy goal ≠ real goal (L3)

---

## Key Principles

1. **High beats numerous**: 1 × L3 > 10 × L12
2. **Paradigm first**: L2 makes L5 stick
3. **Information is cheap**: L6 often cheapest
4. **Goals trump metrics**: Fix L3 before optimizing
5. **Slow reinforcing**: Better than accelerating balancing

---

## Resources

**Detailed examples**: `references/L[level]-*.md`
**Templates**: `assets/template-*.md`
**Full guide**: `README.md`
**Project theory**: `/mnt/project/Systems_Thinking_and_Constraint_Theory.md`

---

**Print this card. Keep it visible. Reference before jumping to solutions.**
