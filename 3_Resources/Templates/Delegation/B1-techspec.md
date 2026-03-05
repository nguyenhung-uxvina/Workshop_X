# DELEGATION TEMPLATE: B1-TECHSPEC
## Technical Specification Document

**Category:** Documentation | **HITL:** Yes — validate claims | **Time Saved:** 4-6h | **Frequency:** 1-2x/month

---

## Invocation

```
agent.run({
  task: "Generate technical specification document for [product/subsystem]",

  context: {
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    subsystem: "[specific subsystem if applicable]",
    source_data: [
      "[conceptual_design_doc]",
      "[requirements_list]",
      "[existing_related_spec]"
    ],
    audience: "Vietnamese military procurement officers + technical evaluators",
    standard_compliance: "TCVN format where applicable"
  },

  constraints: {
    language: "English primary, Vietnamese section titles acceptable",
    format: "Markdown → will be converted to DOCX later",
    structure: [
      "1. Overview (1 page max)",
      "2. Technical Specifications (tables)",
      "3. Interface Specifications",
      "4. Environmental Specifications (MIL-STD-810H where applicable)",
      "5. Performance Specifications (with test methods)",
      "6. Compliance Matrix"
    ],
    prohibited: [
      "Do NOT invent specifications — use only data from source docs",
      "Do NOT claim MIL-STD compliance without verification note",
      "Do NOT include pricing or commercial information",
      "Do NOT reference competitor products by name"
    ],
    tone: "Factual, precise, professional. No marketing language."
  },

  test_criteria: {
    traceability: "Every spec value traceable to source document",
    completeness: "All sections populated or marked TBD with rationale",
    consistency: "Units consistent throughout. No contradictions.",
    verifiable: "Each performance spec has defined test method"
  },

  review: "HITL required — KN validates all technical claims",

  fallback: "If data missing from source docs, mark [TBD — source needed] not guess"
})
```

---

## Product-Specific Notes

### VN-LOMAH (BB-01)
```
Key specs to include:
  - Sensor type: Piezoelectric CONTACT (NOT MEMS)
  - Signal chain: Piezo → Charge Amp (Q→V) → BPF → Gain → Clamp → ADC
  - Op-amps: LM358, TL072
  - Detection: Miss/hit ONLY — not acoustic monitoring
  - Channel count: 4 sensors minimum
  - Environmental: MIL-STD-810H tropical (25-45°C, 40-100% RH)
WARNING: Do NOT spec MEMS microphones — wrong sensor technology for this SPL
```

### VN-CAM
```
Key specs to include:
  - Inference: Hailo-8 accelerator on RPi5
  - Environment: Outdoor — variable lighting, weather exposure
  - Network: Edge-first, intermittent connectivity
```

---

## KN Review Checklist (30-45 minutes)

- [ ] Every spec value traceable to a real source?
- [ ] No invented MIL-STD compliance claims?
- [ ] TCVN references verified against actual standards?
- [ ] Units consistent throughout?
- [ ] No marketing language crept in?
- [ ] Environmental specs match actual deployment conditions?
