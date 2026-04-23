# Skill: DfX Analysis

> **Use When**: Evaluating embodiment design for manufacturability, assembly, test, reliability
> **Output**: DfX review document with issues, scores, and actions
> **Gate**: Gate 2 (DfX Review)

---

## 🎯 Purpose

DfX (Design for X) ensures a design is:
- **DfM**: Manufacturable with available processes
- **DfA**: Assemblable efficiently and correctly
- **DfT**: Testable at each production stage
- **DfR**: Reliable in target environment

---

## 🔄 DfX Process

```
┌─────────────────────────────────────────────────────────────┐
│                      DfX REVIEW FLOW                         │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐     │
│  │   DfM   │──►│   DfA   │──►│   DfT   │──►│   DfR   │     │
│  │Manufact.│   │Assembly │   │  Test   │   │Reliabil.│     │
│  └────┬────┘   └────┬────┘   └────┬────┘   └────┬────┘     │
│       │             │             │             │           │
│       ▼             ▼             ▼             ▼           │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              ISSUE IDENTIFICATION                    │   │
│  │         High / Medium / Low severity                 │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              SCORE CALCULATION                       │   │
│  │         Each category 0-100%, Overall average        │   │
│  └──────────────────────┬──────────────────────────────┘   │
│                         │                                   │
│                         ▼                                   │
│  ┌─────────────────────────────────────────────────────┐   │
│  │              GATE DECISION                           │   │
│  │         ≥75% = Pass, <75% = Rework required          │   │
│  └─────────────────────────────────────────────────────┘   │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 📝 DfX Review Template

```markdown
# DfX Review: [Module Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Gate**: Gate 2 Preparation
> **Status**: 🟡 IN REVIEW / ✅ APPROVED

---

## 1. Module Overview

| Aspect | Description |
|--------|-------------|
| Module Name | |
| Function | |
| Inputs | |
| Outputs | |

### Block Diagram
[Insert system block diagram]

### Bill of Materials
| Item | Part Number | Qty | Cost | Source |
|------|-------------|-----|------|--------|
| | | | | |
| **TOTAL** | | | **$XX** | |

---

## 2. DfM - Design for Manufacturing

### PCB Manufacturing
| Criteria | Spec | Assessment | Status |
|----------|------|------------|--------|
| Layer count | | | ✅/❌ |
| Min trace width | | | ✅/❌ |
| Min via size | | | ✅/❌ |
| Surface finish | | | ✅/❌ |

### Component Availability
| Component | Package | Local Stock | Lead Time | Risk |
|-----------|---------|-------------|-----------|------|
| | | ✅/⚠️/❌ | | H/M/L |

### DfM Issues
| ID | Issue | Severity | Recommendation | Status |
|----|-------|----------|----------------|--------|
| DfM-001 | | H/M/L | | 🟡/✅ |

**DfM Score**: ___%

---

## 3. DfA - Design for Assembly

### Assembly Sequence
[Define step-by-step assembly]

### Assembly Considerations
| Criteria | Assessment | Status |
|----------|------------|--------|
| Part count | | ✅/❌ |
| SMD vs THT ratio | | ✅/❌ |
| Orientation-sensitive parts | | ⚠️ |
| Tool requirements | | ✅/❌ |

### DfA Issues
| ID | Issue | Severity | Recommendation | Status |
|----|-------|----------|----------------|--------|
| DfA-001 | | H/M/L | | 🟡/✅ |

**DfA Score**: ___%

---

## 4. DfT - Design for Test

### Test Points
| TP | Signal | Purpose | Access |
|----|--------|---------|--------|
| TP1 | | | |

### Test Stages
| Stage | Tests | Equipment | Pass Criteria |
|-------|-------|-----------|---------------|
| 1. Visual | | | |
| 2. Power-on | | | |
| 3. Functional | | | |

### DfT Issues
| ID | Issue | Severity | Recommendation | Status |
|----|-------|----------|----------------|--------|
| DfT-001 | | H/M/L | | 🟡/✅ |

**DfT Score**: ___%

---

## 5. DfR - Design for Reliability

### Environmental Requirements
| Parameter | Requirement | Design Approach | Status |
|-----------|-------------|-----------------|--------|
| IP rating | | | ✅/❌ |
| Temp range | | | ✅/❌ |
| Humidity | | | ✅/❌ |

### Component Derating
| Component | Rated | Applied | Derating | Status |
|-----------|-------|---------|----------|--------|
| | | | % | ✅/❌ |

### MTBF Estimation
| Component | FIT | Qty | Total FIT |
|-----------|-----|-----|-----------|
| | | | |
| **Total** | | | **XXX** |

**MTBF = 10⁶ / XXX = XXXX hours**

### DfR Issues
| ID | Issue | Severity | Recommendation | Status |
|----|-------|----------|----------------|--------|
| DfR-001 | | H/M/L | | 🟡/✅ |

**DfR Score**: ___%

---

## 6. Summary

### Scorecard
| Category | Score | Issues | Status |
|----------|-------|--------|--------|
| DfM | % | | ✅/❌ |
| DfA | % | | ✅/❌ |
| DfT | % | | ✅/❌ |
| DfR | % | | ✅/❌ |
| **Overall** | **%** | | **✅/❌** |

### Issue Summary
| Severity | Count | Action |
|----------|-------|--------|
| High | | Must close before Gate 2 |
| Medium | | Close before Gate 2 |
| Low | | Close before production |

### Open Actions
| ID | Action | Owner | Due | Priority |
|----|--------|-------|-----|----------|
| | | | | |

---

## 7. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| HW Lead | | | ☐ |
| QC Lead | | | ☐ |
```

---

## 📊 DfX Scoring Guide

### Score Calculation

For each category, score based on:
- **100%**: All criteria met, no issues
- **90%**: Minor issues, no blockers
- **80%**: Some issues, manageable
- **70%**: Significant issues, rework may be needed
- **<70%**: Major redesign required

### Overall Score
```
Overall = (DfM + DfA + DfT + DfR) / 4
```

### Pass Criteria
| Score | Status | Action |
|-------|--------|--------|
| ≥85% | ✅ Pass | Proceed to prototype |
| 75-84% | ⚠️ Conditional | Close issues, re-review |
| <75% | ❌ Fail | Major rework required |

---

## 🔍 DfM Checklist

### PCB Design
- [ ] Layer count appropriate for complexity
- [ ] Trace width/spacing ≥ fab capability
- [ ] Via size ≥ fab capability
- [ ] Panelization considered
- [ ] Fiducials for pick-and-place

### Components
- [ ] All components available (no obsolete parts)
- [ ] Lead times acceptable
- [ ] Alternate sources identified for critical parts
- [ ] Package sizes match assembly capability
- [ ] No custom parts (or justified)

### Materials
- [ ] All materials locally available
- [ ] No hazardous materials (or properly handled)
- [ ] Material certifications available

---

## 🔍 DfA Checklist

### General
- [ ] Minimize part count
- [ ] Use standard parts where possible
- [ ] Parts self-locating (alignment features)
- [ ] No trapped assemblies
- [ ] Assembly sequence logical

### PCB Assembly
- [ ] Components on one side preferred
- [ ] SMD before through-hole
- [ ] Adequate spacing for rework
- [ ] Test points accessible after assembly
- [ ] Connectors at board edge

### Mechanical
- [ ] Standard fasteners (M3, M4)
- [ ] Tools accessible (no special tools)
- [ ] Cables have strain relief
- [ ] Labels/markings for orientation

---

## 🔍 DfT Checklist

### Design
- [ ] Test points for all key signals
- [ ] Test points accessible with probe
- [ ] Programming header accessible
- [ ] Debug UART available
- [ ] Status LEDs for quick visual check

### Test Strategy
- [ ] Unit test procedure defined
- [ ] Integration test procedure defined
- [ ] Test equipment list complete
- [ ] Pass/fail criteria defined
- [ ] Test time estimated

### Production Test
- [ ] In-circuit test (ICT) possible?
- [ ] Functional test defined
- [ ] Calibration procedure (if needed)
- [ ] Test data logging

---

## 🔍 DfR Checklist

### Environmental
- [ ] IP rating appropriate for environment
- [ ] Temperature range covered
- [ ] Humidity protection (conformal coat, sealing)
- [ ] Vibration/shock considered
- [ ] UV/outdoor exposure (if applicable)

### Component Selection
- [ ] Industrial/automotive grade where needed
- [ ] Derating applied (≥20% recommended)
- [ ] No single points of failure (or accepted)
- [ ] Redundancy for critical functions

### Analysis
- [ ] MTBF calculated
- [ ] MTBF meets requirement
- [ ] Critical failure modes identified
- [ ] Mitigation for each failure mode

---

## 💡 DfX Tips

1. **Start DfX early** - Don't wait until design is "done"
2. **Involve manufacturing** - Get fab/assembly input
3. **Use checklists** - Don't rely on memory
4. **Document issues** - Even if accepted, record why
5. **Score objectively** - Use evidence, not feelings
6. **Close issues** - Track to completion

---

## 📚 Related Skills

- [[gate-review]] - DfX is key input to Gate 2
- [[decision-log]] - Document DfX decisions
- [[vdi-2225-evaluation]] - Concept selection before DfX

---

*Skill Version: 1.0*
*Based on BB-01 MCU Box DfX Review*
