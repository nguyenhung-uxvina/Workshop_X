# DELEGATION TEMPLATE: B2-GOVERNANCE
## Governance & Accountability Documentation

**Category:** Documentation | **HITL:** MANDATORY | **Time Saved:** 3-4h | **Frequency:** As needed
**DEPLOYMENT GATE:** These documents MUST exist before VN-RANGE-001 deploy

---

## Invocation

```
agent.run({
  task: "Draft [governance_document_type] for [product]",

  context: {
    document_type: "[System Limitations | Accountability Chain |
                     Audit Trail Spec | Operator Override Protocol |
                     Incident Response Protocol]",
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    source_data: [
      "[product_brief]",
      "[conceptual_design]",
      "Previous governance analysis from Skill 5 deep dive"
    ],
    regulatory_framework: "Vietnamese military procurement standards (TCVN)",
    ai_components: "[VN-LOMAH scoring AI | VN-CAM inference |
                     VN-SMASH fire control | VN-TRN analytics]"
  },

  constraints: {
    accountability_principle: "AI is TOOL. Human ALWAYS accountable for decisions.",
    structure_by_document_type: {
      system_limitations: [
        "AI CAN do (with confidence levels)",
        "AI CANNOT do (explicit list)",
        "Human MUST do (non-delegatable responsibilities)",
        "Operator certification requirements"
      ],
      accountability_chain: [
        "Who is responsible at each decision point",
        "Escalation path for AI-flagged anomalies",
        "Override authority levels",
        "Post-incident review requirements"
      ],
      audit_trail: [
        "What gets logged (ALL AI decisions + ALL human overrides)",
        "Log format (timestamped, tamper-evident)",
        "Retention period (minimum 5 years for defense)",
        "Access control for audit data"
      ]
    },
    safety_hierarchy: "SAFETY > COMPLIANCE > ACCURACY > SPEED — always",
    prohibited: [
      "Do NOT claim AI is 'safe' — claim AI operates within defined bounds",
      "Do NOT promise specific reliability percentages without test data",
      "Do NOT reference internal Workshop X processes — customer-facing doc",
      "Do NOT use jargon the military operator wouldn't understand"
    ]
  },

  test_criteria: {
    completeness: "All sections populated for document type",
    clarity: "NCO-level readability — no PhD required",
    actionable: "Every responsibility has a named role (not 'someone')",
    testable: "Every claim can be verified through audit trail"
  },

  review: "MANDATORY HITL — KN + military liaison validate",

  fallback: "If unsure about military procedure, mark [VERIFY WITH MILITARY] not guess"
})
```

---

## Document Types Needed for VN-RANGE-001

- [ ] System Limitations Document (VN-LOMAH)
- [ ] Accountability Chain (VN-RANGE-001 integrated system)
- [ ] Audit Trail Specification
- [ ] Operator Override Protocol
- [ ] Incident Response Protocol

---

## KN Review Checklist (1-2 hours — governance is critical)

- [ ] AI described as TOOL, not autonomous agent?
- [ ] Every responsibility assigned to a NAMED role?
- [ ] Safety hierarchy maintained (SAFETY > COMPLIANCE > ACCURACY > SPEED)?
- [ ] No reliability claims without supporting test data?
- [ ] NCO can understand this without PhD?
- [ ] No internal Workshop X process details leaked?
- [ ] Military liaison has reviewed?
