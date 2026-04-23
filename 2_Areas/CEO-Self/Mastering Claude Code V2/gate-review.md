---
name: "Gate Review Checklist"
description: "Auto-activates when discussing gate reviews, G1, G2, G3, or quality gates for defense projects"
triggers:
  - "gate review"
  - "gate 1"
  - "gate 2"
  - "gate 3"
  - "G1"
  - "G2"
  - "G3"
  - "quality gate"
  - "design review"
---

# Gate Review Checklist Skill

When this skill activates, guide the review through the appropriate gate:

## Gate 1 — Concept Review
- [ ] Problem statement clearly defined
- [ ] Requirements documented (customer + derived)
- [ ] At least 3 concept alternatives evaluated
- [ ] Selection criteria with weighted scoring
- [ ] Risk register initialized
- [ ] Project plan with milestones

## Gate 2 — Design Review (DfX)
- [ ] Detailed design complete
- [ ] DfM review passed (local CNC capability confirmed)
- [ ] DfT review passed (test plan + fixtures defined)
- [ ] DfA review passed (assembly sequence documented)
- [ ] Simulation/analysis results reviewed
- [ ] Prototype plan approved
- [ ] Updated risk register

## Gate 3 — Production Readiness
- [ ] Prototype tested against requirements
- [ ] Test reports complete
- [ ] Manufacturing process validated
- [ ] Quality control plan defined
- [ ] Documentation package complete (MIL-STD format)
- [ ] Customer acceptance criteria confirmed

## Output
Generate a gate report with: status per item, evidence links, action items for gaps.
