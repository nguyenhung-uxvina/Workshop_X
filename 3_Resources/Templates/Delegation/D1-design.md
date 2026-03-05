# DELEGATION TEMPLATE: D1-DESIGN
## Pahl-Beitz Design Artifact Generation

**Category:** Design Engineering | **HITL:** MANDATORY | **Time Saved:** 2-4h | **Frequency:** 2-3x/month

---

## Invocation

```
agent.run({
  task: "Generate [artifact_type] for [product] Phase [phase_number]",

  context: {
    artifact_type: "[Requirements List | Function Structure |
                     Morphological Matrix | VDI 2225 Evaluation |
                     Embodiment Layout | Detail Specification]",
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    phase: "[1-Task Clarification | 2-Conceptual | 3-Embodiment | 4-Detail]",
    source_data: [
      "[product_brief]",
      "[previous_phase_output]",
      "DMIR_ODI_Engineering_Design_Framework.md"
    ],
    constraints_list: {
      cost_target: "91% below imported alternative",
      local_content: "≥60% Vietnamese manufacturing content",
      environment: "MIL-STD-810H Method 501-507 (tropical conditions)",
      timeline: "Phase completion within [X weeks] at 25h/week"
    }
  },

  constraints: {
    methodology: "Strictly follow Pahl-Beitz systematic design process",
    prohibited: [
      "Do NOT skip abstraction step (remove personal preferences first)",
      "Do NOT propose solutions in requirements list (solution-neutral)",
      "Do NOT assign VDI 2225 weights without explicit rationale",
      "Do NOT generate morphological matrix with < 3 solutions per function",
      "Do NOT assume Western manufacturing capabilities — assume Vietnamese"
    ],
    reuse_check: "Flag components reusable from other IRONMESH products (70% target)"
  },

  test_criteria: {
    methodology_compliance: "Follows P&B structure for specified artifact type",
    solution_neutral: "No solutions embedded in requirements/functions",
    traceable: "Each requirement traceable to customer outcome or standard",
    complete: "All sections populated or marked [TBD]"
  },

  review: "MANDATORY HITL — KN validates against defense domain knowledge",

  fallback: "If phase prerequisites incomplete, list what's missing before generating"
})
```

---

## Pahl-Beitz Phase Sequence

```
Phase 1: Task Clarification
  → Requirements List (D, W, wishes)
  → Constraints and boundary conditions

Phase 2: Conceptual Design
  → Function Structure (main → sub-functions)
  → Morphological Matrix (≥3 solutions per sub-function)
  → VDI 2225 Evaluation (weighted scoring)
  → Concept selection

Phase 3: Embodiment Design
  → Layout drawings and spatial arrangement
  → Material selection (Vietnamese availability)
  → Manufacturing process selection

Phase 4: Detail Design
  → Full specifications
  → Manufacturing documentation
  → Assembly instructions
```

---

## Workshop X Design Constraints

```
Manufacturing:
  - Vietnamese workshop capabilities (not Western CNC assumptions)
  - Local sourcing priority for 60% content target
  - Standard metric fasteners and components

Environmental:
  - MIL-STD-810H Method 501 (High Temperature: 45°C)
  - MIL-STD-810H Method 502 (Low Temperature: 25°C — tropical floor)
  - MIL-STD-810H Method 507 (Humidity: 40-100% RH)
  - Corrosion resistance for coastal/naval deployment

Reuse:
  - 70% component reuse target across IRONMESH products
  - Common compute platform: RPi5 + Hailo-8
  - Common comms: WiFi/LoRa/Ethernet
  - Common power: USB-C PD / 12-48V DC
```

---

## KN Review Checklist (30-60 minutes)

- [ ] Follows Pahl-Beitz methodology for this phase?
- [ ] Requirements are solution-neutral?
- [ ] Vietnamese manufacturing assumed (not Western)?
- [ ] Reusable IRONMESH components flagged?
- [ ] Cost target achievable with proposed approach?
- [ ] Environmental specs correct for deployment site?
