# Skill: Gate Review Checklist

> **Use When**: Preparing for or conducting quality gate reviews
> **Output**: Structured review documentation with pass/fail criteria

---

## 🎯 Purpose

Ensure consistent, thorough quality gate reviews that:
1. Verify all required artifacts exist
2. Check compliance with entry/exit criteria
3. Document review findings
4. Track action items to closure

---

## 🚪 Workshop X 3-Gate System

```
┌─────────────────┐    ┌─────────────────┐    ┌─────────────────┐
│     GATE 1      │    │     GATE 2      │    │     GATE 3      │
│ Concept Review  │───▶│   DfX Review    │───▶│ Pre-Production  │
├─────────────────┤    ├─────────────────┤    ├─────────────────┤
│ • Requirements  │    │ • DfM Check     │    │ • Pilot Build   │
│ • Concept Select│    │ • DfA Check     │    │ • Test Results  │
│ • Risk Analysis │    │ • DfT Check     │    │ • Production    │
│ • Resource Plan │    │ • DfR Check     │    │   Readiness     │
└─────────────────┘    └─────────────────┘    └─────────────────┘
```

---

## 📝 Gate Review Template

```markdown
# Gate [X] Review: [Project Name]

**Date**: YYYY-MM-DD
**Reviewer(s)**: [Names]
**Project Phase**: [Current Phase]
**Gate Status**: 🟡 PENDING | ✅ PASSED | 🔴 FAILED | ⚠️ CONDITIONAL

---

## Pre-Review Checklist

### Required Artifacts
| Artifact | Status | Location | Notes |
|----------|--------|----------|-------|
| [Doc 1] | ✅/❌ | [[link]] | |
| [Doc 2] | ✅/❌ | [[link]] | |

### Entry Criteria Met?
| Criterion | Status | Evidence |
|-----------|--------|----------|
| [Criterion 1] | ✅/❌ | |
| [Criterion 2] | ✅/❌ | |

---

## Review Findings

### Pass Items ✅
1. [Item that passed with evidence]
2. [Item that passed with evidence]

### Issues Found ⚠️
| ID | Issue | Severity | Owner | Due Date |
|----|-------|----------|-------|----------|
| G[X]-001 | [Description] | H/M/L | [Name] | YYYY-MM-DD |
| G[X]-002 | [Description] | H/M/L | [Name] | YYYY-MM-DD |

### Risks Identified 🔴
| Risk | Probability | Impact | Mitigation |
|------|-------------|--------|------------|
| [Risk 1] | H/M/L | H/M/L | [Action] |

---

## Exit Criteria Assessment

| Criterion | Status | Notes |
|-----------|--------|-------|
| [Exit criterion 1] | ✅/❌ | |
| [Exit criterion 2] | ✅/❌ | |

---

## Decision

**Gate Status**: [PASS / CONDITIONAL / FAIL]

**Conditions (if applicable)**:
1. [Condition that must be met]
2. [Condition that must be met]

**Next Gate**: Gate [X+1] scheduled for [date]

---

## Action Items

| ID | Action | Owner | Due | Status |
|----|--------|-------|-----|--------|
| A001 | [Action] | [Name] | [Date] | 🟡 Open |

---

## Signatures

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Project Lead | | | |
| QC Lead | | | |
| Technical Lead | | | |
```

---

## 🚪 Gate 1: Concept Review Checklist

### Required Artifacts
- [ ] Requirements List (Pahl & Beitz format)
- [ ] Problem Abstraction
- [ ] Function Structure
- [ ] Morphological Matrix
- [ ] Concept Variants (≥3)
- [ ] VDI 2225 Evaluation
- [ ] Selected Concept Rationale
- [ ] Risk Analysis
- [ ] Resource Plan
- [ ] Development Schedule

### Entry Criteria
- [ ] Customer requirements documented
- [ ] Budget allocated
- [ ] Team assigned

### Exit Criteria
- [ ] Concept selected with ≥70% VDI 2225 score
- [ ] All high risks have mitigation plans
- [ ] Next phase resources confirmed

---

## 🚪 Gate 2: DfX Review Checklist

### Required Artifacts
- [ ] Embodiment Design Drawings
- [ ] DfM Analysis
- [ ] DfA Analysis
- [ ] DfT Analysis
- [ ] DfR Analysis
- [ ] BOM (preliminary)
- [ ] Make/Buy Decisions
- [ ] Supplier Quotes

### DfM (Manufacturing) Checks
- [ ] All parts manufacturable with identified processes
- [ ] Tolerances achievable
- [ ] Materials available locally
- [ ] No special tooling required (or tooling planned)

### DfA (Assembly) Checks
- [ ] Assembly sequence defined
- [ ] No interference during assembly
- [ ] Standard tools sufficient
- [ ] Assembly time estimated

### DfT (Test) Checks
- [ ] Test points accessible
- [ ] Functional tests defined
- [ ] Calibration procedures documented
- [ ] Test equipment identified

### DfR (Reliability) Checks
- [ ] MTBF prediction completed
- [ ] Critical components identified
- [ ] Derating applied
- [ ] Environmental qualification plan

### Exit Criteria
- [ ] All DfX issues resolved or accepted
- [ ] BOM complete with suppliers
- [ ] Prototype build authorized

---

## 🚪 Gate 3: Pre-Production Checklist

### Required Artifacts
- [ ] Prototype Test Results
- [ ] Updated BOM (production)
- [ ] Work Instructions
- [ ] Quality Control Plan
- [ ] Acceptance Test Procedure
- [ ] Production Schedule
- [ ] Supplier Agreements

### Prototype Verification
- [ ] All requirements verified (traceability matrix)
- [ ] Environmental tests passed
- [ ] Reliability targets met
- [ ] No critical open issues

### Production Readiness
- [ ] All suppliers qualified
- [ ] Production line setup
- [ ] Operators trained
- [ ] QC procedures validated

### Exit Criteria
- [ ] First Article Inspection passed
- [ ] Production authorization signed
- [ ] Customer acceptance criteria agreed

---

## ⚡ Quick Gate Prep Checklist

```markdown
## Gate [X] Prep - [Project]

### 48 Hours Before
- [ ] All artifacts in review folder
- [ ] Self-review completed
- [ ] Known issues documented
- [ ] Reviewers confirmed

### 24 Hours Before
- [ ] Presentation ready
- [ ] Demo prepared (if applicable)
- [ ] Backup materials ready

### Day Of
- [ ] Room/call setup
- [ ] Materials distributed
- [ ] Note-taker assigned
```

---

*Skill Version: 1.0*
*Aligned with Workshop X 3-Gate Quality System*
