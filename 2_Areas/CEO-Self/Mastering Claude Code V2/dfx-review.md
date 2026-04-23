---
name: "DfX Review"
description: "Auto-activates when discussing manufacturability, testability, or assembly of defense hardware"
triggers:
  - "DfM"
  - "DfT"
  - "DfA"
  - "DfX"
  - "manufacturability"
  - "design for manufacturing"
  - "design for test"
  - "design for assembly"
---

# DfX Review Skill

When this skill activates, perform a Design-for-X analysis:

## DfM (Design for Manufacturing)
- Can this be manufactured with available CNC equipment?
- Material availability in Vietnam?
- Tolerance analysis — are specs achievable?
- Surface finish requirements vs capability?

## DfT (Design for Test)
- Are test points accessible?
- Can key parameters be measured non-destructively?
- Is there a test fixture design?

## DfA (Design for Assembly)
- Assembly sequence — any order dependencies?
- Tool access — can a technician reach all fasteners?
- Alignment features — self-locating parts?

## Output Format
Rate each area: ✅ Pass | ⚠️ Concern | ❌ Fail
Provide specific recommendations for any non-pass items.
