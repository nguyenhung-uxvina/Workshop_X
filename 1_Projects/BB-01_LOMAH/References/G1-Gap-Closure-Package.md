# V-SMASH Gate 1 Gap Closure Package

> **Purpose**: Templates to close Gate 1 gaps before Gate 2
> **Due Date**: 2026-02-09

---

## 1. Risk Register Template

```markdown
# V-SMASH Risk Register

| Risk ID | Description | Category | Probability | Impact | Score | Mitigation | Owner | Status | Last Updated |
|---------|-------------|----------|-------------|--------|-------|------------|-------|--------|--------------|
| R-001 | YOLOv8 training dataset insufficient | Technical | M | H | 6 | Collect during Phase 1 with HOG+SVM | AI Lead | 🟢 Planned | 2026-01-26 |
| R-002 | Jetson platform supply disruption | Supply Chain | L | M | 3 | Multiple distributors identified | HW Lead | 🟢 Planned | 2026-01-26 |
| R-003 | Local ML expertise shortage | Resource | M | M | 4 | University partnership (HUST/VNU) | Tech Lead | 🟡 In Progress | 2026-01-26 |
| R-004 | Phase 1→2 transition delays | Schedule | M | H | 6 | Design for Xavier NX from start | Design Lead | 🟡 Pending DEC-005 | 2026-01-26 |
| R-005 | Unit cost exceeds $3,000 | Financial | L | H | 4 | BOM at $894, 70% margin | PM | 🟢 On Track | 2026-01-26 |
| R-006 | Export control (NVIDIA) | Regulatory | L | H | 4 | Monitor ITAR/EAR, backup to local GPU | PM | 🟡 New | 2026-01-26 |
| R-007 | MTB-20 interface incompatibility | Integration | M | M | 4 | Define interface spec by 02/28 | Design Lead | 🟡 New | 2026-01-26 |
| R-008 | Customer requirements change | Scope | M | M | 4 | Establish change control process | PM | 🟡 New | 2026-01-26 |

**Scoring**: P×I where L=1, M=2, H=3. Score ≥6 = High priority.

**Review Frequency**: Monthly or upon significant change
```

---

## 2. Resource Plan Template

```markdown
# V-SMASH Resource Plan

## Team Structure

| Role | Name | Allocation | Start Date | End Date |
|------|------|------------|------------|----------|
| Project Manager | [TBD] | 50% | 2026-02 | 2027-01 |
| Technical Lead | [TBD] | 75% | 2026-02 | 2027-01 |
| Design Lead (Mechanical) | [TBD] | 100% | 2026-02 | 2026-12 |
| Design Lead (Electronics) | [TBD] | 100% | 2026-02 | 2026-12 |
| AI/ML Engineer | [TBD] | 100% | 2026-04 | 2027-01 |
| Test Engineer | [TBD] | 50% | 2026-06 | 2027-01 |
| QC Lead | [TBD] | 25% | 2026-02 | 2027-01 |

## Budget Summary

| Category | Phase 1 (Q1-Q2) | Phase 2 (Q3-Q4) | Total |
|----------|-----------------|-----------------|-------|
| Personnel | $XX,XXX | $XX,XXX | $XX,XXX |
| Hardware (dev kits) | $5,000 | $3,000 | $8,000 |
| Prototype materials | $3,000 | $5,000 | $8,000 |
| Testing | $2,000 | $5,000 | $7,000 |
| University partnership | $5,000 | $5,000 | $10,000 |
| Contingency (15%) | $X,XXX | $X,XXX | $X,XXX |
| **TOTAL** | **$XX,XXX** | **$XX,XXX** | **$XX,XXX** |

## Equipment Needs

| Item | Qty | Phase | Est. Cost | Status |
|------|-----|-------|-----------|--------|
| Jetson Xavier NX Dev Kit | 2 | 1 | $800 | 🟡 Pending |
| Camera modules | 5 | 1 | $150 | 🟡 Pending |
| IMU modules | 5 | 1 | $25 | 🟡 Pending |
| Solenoids | 10 | 1 | $50 | 🟡 Pending |
| Test fixtures | 1 set | 1 | $500 | 🟡 Pending |
| Oscilloscope | 1 | 1 | Existing | ✅ Available |
| Power supply | 2 | 1 | $200 | 🟡 Pending |
```

---

## 3. Phase 1 Schedule Template

```markdown
# V-SMASH Phase 1 Schedule (Detailed)

## Timeline: 2026-02 to 2026-07 (6 months)

### Month 1 (February 2026)

| Week | Task | Deliverable | Owner |
|------|------|-------------|-------|
| W1 | Project kickoff | Kickoff meeting minutes | PM |
| W1 | Procure Jetson Xavier NX | Dev kits received | HW Lead |
| W2 | Setup dev environment | JetPack installed, OpenCV working | AI Lead |
| W2 | Camera integration start | Camera streaming to Jetson | HW Lead |
| W3 | HOG+SVM prototype start | Basic detection running | AI Lead |
| W3 | Mechanical design kickoff | Initial CAD models | Mech Lead |
| W4 | HOG+SVM baseline | Detection demo on laptop | AI Lead |
| W4 | Review & adjust | Week 4 status report | PM |

### Month 2 (March 2026)

| Week | Task | Deliverable | Owner |
|------|------|-------------|-------|
| W5 | HOG+SVM on Jetson | Detection running on edge | AI Lead |
| W5 | Kalman filter start | Tracking prototype | AI Lead |
| W6 | IMU integration | Orientation sensing working | HW Lead |
| W6 | Carrier board design start | Schematic v1 | EE Lead |
| W7 | Kalman + HOG integration | Tracking demo | AI Lead |
| W7 | Ballistic model start | Point-mass implementation | SW Lead |
| W8 | Integration demo #1 | Detect + Track on Jetson | Team |
| W8 | Gate 2 prep start | DfX analysis kickoff | QC Lead |

### Month 3 (April 2026)

| Week | Task | Deliverable | Owner |
|------|------|-------------|-------|
| W9 | Ballistic model complete | Trajectory calculation working | SW Lead |
| W9 | Solenoid driver design | Driver board schematic | EE Lead |
| W10 | Fire control logic | Gate timing implementation | SW Lead |
| W10 | Mechanical design review | CAD review meeting | Team |
| W11 | Integration demo #2 | Full pipeline on Jetson | Team |
| W11 | Optic housing design | Housing CAD complete | Mech Lead |
| W12 | DfM analysis | Manufacturability report | QC Lead |
| W12 | **Gate 2 Review** | DfX Review meeting | Team |

### Month 4-6 (May-July 2026)

| Month | Focus | Key Deliverable |
|-------|-------|-----------------|
| May | Prototype build | First hardware prototype |
| June | Integration testing | System integration complete |
| July | Validation testing | Test report, Gate 3 prep |

## Milestones

| Milestone | Target Date | Status |
|-----------|-------------|--------|
| M1: Dev environment ready | 2026-02-15 | 🟡 |
| M2: Detection demo | 2026-03-01 | 🟡 |
| M3: Tracking demo | 2026-03-15 | 🟡 |
| M4: Gate 2 (DfX Review) | 2026-04-15 | 🟡 |
| M5: First prototype | 2026-05-31 | 🟡 |
| M6: Integration complete | 2026-06-30 | 🟡 |
| M7: Gate 3 (Pre-Production) | 2026-07-31 | 🟡 |
```

---

## 4. Gap Closure Checklist

### For PM (Due: 2026-02-02)

```
☐ G1-A001: Fill out Risk Register template above
☐ G1-A002: Fill out Resource Plan template above
☐ G1-A003: Fill out Phase 1 Schedule template above
☐ Submit all 3 documents to QC Lead for review
```

### For Tech Lead (Due: 2026-01-30)

```
☐ G1-A005: Review DEC-005 (Processing Platform)
☐ Approve or request changes
☐ Update decisions/log.md with approval status
```

### For PM (Due: 2026-02-09)

```
☐ G1-A004: Present budget to Management
☐ Obtain written approval
☐ Update Resource Plan with approved figures
```

### Gate 1 Closure Verification (Due: 2026-02-09)

```
☐ Risk Register submitted and reviewed
☐ Resource Plan submitted and approved
☐ Phase 1 Schedule submitted
☐ Budget approved by Management
☐ DEC-005 approved by Tech Lead
☐ All G1 conditions marked complete
☐ Gate 1 status changed to ✅ PASSED
```

---

*Templates aligned with Pahl & Beitz and Workshop X standards*
*Use these to close Gate 1 gaps before Gate 2*
