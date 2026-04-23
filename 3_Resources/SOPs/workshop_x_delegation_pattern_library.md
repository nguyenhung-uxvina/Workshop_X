# Workshop X — AI Boss Delegation Pattern Library
## Tổng hợp Pattern từ 5 Agentic Skills Analysis
### Level 4: Defense-Grade Delegation Templates

**Date:** February 21, 2026  
**Purpose:** Biến mỗi giờ tương tác với AI thành "đạn bắn chính xác" — không lãng phí  
**Framework:** Skill 1 (AI Literacy) × Skill 4 (Process Design) × ACH Philosophy  
**Constraint:** 25h/week — mỗi delegation pattern phải maximize output per hour

---

## PHẦN 1: MASTER DELEGATION FRAMEWORK

### 1.1 Nguyên tắc "DCTRS" — Mỗi delegation PHẢI có đủ 5 thành phần

```
D — Delegate:   Task cụ thể + Context đầy đủ + Output format rõ ràng
C — Constrain:  Whitelist tools + Cấm gì + Giới hạn scope
T — Test:       Tiêu chí kiểm tra output (success criteria)
R — Review:     Checkpoint nào cần human approval
S — Specify:    Fallback khi fail + Timeout + Version tracking
```

### 1.2 Khi nào KHÔNG nên delegate cho AI

Trước khi delegate, hỏi: **"Đây là ROUTINE hay AMBIGUOUS?"**

| Nếu | Thì | Lý do |
|-----|-----|-------|
| Boilerplate code, config, documentation | DELEGATE → AI | AI 95% correct, saves hours |
| Architectural decision, system design | DO YOURSELF, dùng AI hỗ trợ phân tích | AI misses operational context |
| Safety-critical logic | DO YOURSELF, dùng AI kiểm tra | AI cannot be accountable |
| Vietnamese military context, cultural integration | DO YOURSELF entirely | Zero AI training data for this |
| Hardware debugging (thermal, EMI, physical) | DO YOURSELF, AI chỉ suggest general approach | AI has no physical sensors |
| Cross-boundary integration (HW + SW + physics) | DO YOURSELF, AI handle individual pieces | AI cannot see the whole system |

---

## PHẦN 2: DELEGATION TEMPLATES BY WORK CATEGORY

### CATEGORY A: Software Development Delegations

---

#### A1: Generate Boilerplate Code

```
DELEGATION TEMPLATE: A1-BOILERPLATE
════════════════════════════════════════

agent.run({
  task: "Generate [component_type] boilerplate for [product]",
  
  context: {
    product: "[VN-LOMAH | VN-CAM | VN-TRN | VN-SMASH | CORTEX]",
    language: "[Python | C/C++ | JavaScript | Rust]",
    architecture: "Follows IRONMESH CDM pattern — see /project/[spec_file]",
    existing_code: "Reference /project/[existing_module] for style/conventions",
    hardware_target: "[RPi5 | Hailo-8 | STM32 | FPGA iCE40]"
  },
  
  constraints: {
    style: "Follow existing project conventions in [reference_file]",
    dependencies: "Only use libraries listed in requirements.txt / package.json",
    no_network: "No external API calls in core modules — edge-first design",
    no_hardcoded: "ALL thresholds and parameters → config file, not code",
    size_limit: "Single module ≤ 500 lines. Split if larger."
  },
  
  test_criteria: {
    compiles: "Must compile/run without errors",
    linting: "Pass flake8/clang-tidy with zero warnings",
    type_safe: "Full type hints (Python) / strict types (C++)",
    documented: "Docstrings on all public functions",
    testable: "Each function independently testable"
  },
  
  review: "NO HITL needed — automated pre-check sufficient",
  
  fallback: "If unclear about architecture, output QUESTIONS not assumptions"
})

ESTIMATED TIME SAVED: 1-2 hours per use
KN REVIEW TIME: 5 minutes (Layer 1-2 automated, skim Layer 3)
USE FREQUENCY: 3-5x per week
```

---

#### A2: Implement Known Algorithm from Specification

```
DELEGATION TEMPLATE: A2-ALGORITHM
════════════════════════════════════════

agent.run({
  task: "Implement [algorithm_name] as described in [reference]",
  
  context: {
    reference: "[paper/spec/textbook section]",
    product: "[product_code]",
    input_format: {
      data_type: "[audio samples | video frames | coordinate data]",
      sample_rate: "[value + unit]",
      channel_count: "[number]",
      precision: "[8bit | 16bit | 32bit float]"
    },
    output_format: {
      data_type: "[detection events | coordinates | scores]",
      latency_requirement: "[max ms from input to output]",
      accuracy_requirement: "[value + metric]"
    },
    hardware_constraint: {
      platform: "[RPi5 | Hailo-8 | STM32H743 | FPGA]",
      memory_limit: "[MB available]",
      compute_budget: "[TOPS | MFLOPS | CPU%]"
    }
  },
  
  constraints: {
    parameterize: "ALL constants MUST be configurable (no magic numbers)",
    temperature: "If using speed-of-sound: PARAMETERIZE for 20-45°C",
    units: "Explicitly document all units. Use SI. Convert at boundaries.",
    edge_cases: "Handle: null input, overflow, underflow, NaN, timeout",
    thread_safety: "Mark if function is thread-safe or not in docstring",
    prohibited: [
      "Do NOT assume single-channel audio (LOMAH has 4 mics)",
      "Do NOT assume stationary platform (naval products move)",
      "Do NOT assume constant lighting (VN-CAM outdoor use)",
      "Do NOT assume continuous network (edge-first design)",
      "Do NOT hardcode file paths, IP addresses, or ports"
    ]
  },
  
  test_criteria: {
    unit_tests: "Generate pytest/gtest for: normal, boundary, error cases",
    performance: "Measure execution time. Flag if > latency_requirement",
    memory: "Measure peak memory. Flag if > memory_limit",
    numerical: "Compare output against known reference values from [source]"
  },
  
  review: "HITL required before integration — KN verifies Layer 3-5",
  
  fallback: {
    missing_spec: "If algorithm spec is ambiguous, list ALL interpretations and ASK",
    performance_fail: "If cannot meet latency, output profiling data + bottleneck analysis",
    hardware_mismatch: "If algorithm needs resources beyond hardware, suggest alternatives"
  }
})

ESTIMATED TIME SAVED: 3-5 hours per use
KN REVIEW TIME: 20-30 minutes (full PLAUSIBLE check)
USE FREQUENCY: 1-2x per week
CRITICAL: Apply 5L Review Protocol. Check Layer 4 (Physics) carefully.
```

---

#### A3: Code Review and Pre-Check (AI reviews AI)

```
DELEGATION TEMPLATE: A3-PRECHECK
════════════════════════════════════════

agent.run({
  task: "Review [code_file] for correctness and defense-grade quality",
  
  context: {
    product: "[product_code]",
    code_purpose: "[what the code is supposed to do]",
    operating_environment: {
      physical: "[indoor lab | outdoor range | naval vessel | vehicle]",
      climate: "Vietnam tropical — 25-45°C, 40-100% humidity",
      power: "[stable grid | military generator ±10% | battery]",
      network: "[reliable LAN | intermittent WiFi | no network]"
    },
    safety_criticality: "[scoring | fire control | flight control | monitoring]"
  },
  
  constraints: {
    review_protocol: "Apply PLAUSIBLE check systematically",
    check_list: [
      "P — Physics: Does it obey physical laws in THIS environment?",
      "L — Logic: Does reasoning chain hold end-to-end?",
      "A — Assumptions: List ALL hidden assumptions found",
      "U — Units: Are all units consistent? (mils/degrees, m/mm/cm)",
      "S — Scale: Works at 0.1x and 10x expected conditions?",
      "I — Integration: Compatible with IRONMESH CDM?",
      "B — Boundary: What happens at min/max/zero/null?",
      "L — Lethality: If WRONG, could someone get hurt?",
      "E — Endurance: Will it work in 2 years?"
    ],
    output_format: "Structured report with: PASS/FAIL per check + explanation"
  },
  
  test_criteria: {
    completeness: "All 9 PLAUSIBLE checks addressed",
    specificity: "Each finding references specific line numbers",
    actionable: "Each issue has recommended fix"
  },
  
  review: "KN reviews the PRE-CHECK REPORT (5 min) instead of raw code (30 min)",
  
  fallback: "If code purpose unclear, ASK before reviewing"
})

ESTIMATED TIME SAVED: 10-15 minutes per review (Layer 1-3 automated)
KN REVIEW TIME: 5 minutes (review the review, focus on Layer 4-5)
USE FREQUENCY: 5-10x per week
NET EFFECT: Double review coverage with same time investment
```

---

### CATEGORY B: Documentation Delegations

---

#### B1: Technical Specification Document

```
DELEGATION TEMPLATE: B1-TECHSPEC
════════════════════════════════════════

agent.run({
  task: "Generate technical specification document for [product/subsystem]",
  
  context: {
    product: "[product_code]",
    subsystem: "[specific subsystem if applicable]",
    source_data: [
      "/project/[conceptual_design_doc]",
      "/project/[requirements_list]",
      "/project/[existing_related_spec]"
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
      "4. Environmental Specifications (MIL-STD-810 where applicable)",
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

ESTIMATED TIME SAVED: 4-6 hours per document
KN REVIEW TIME: 30-45 minutes (verify technical claims, add context)
USE FREQUENCY: 1-2x per month
```

---

#### B2: Governance & Accountability Documentation

```
DELEGATION TEMPLATE: B2-GOVERNANCE
════════════════════════════════════════

agent.run({
  task: "Draft [governance_document_type] for [product]",
  
  context: {
    document_type: "[System Limitations | Accountability Chain | 
                     Audit Trail Spec | Operator Override Protocol |
                     Incident Response Protocol]",
    product: "[product_code]",
    source_data: [
      "/project/[product_brief]",
      "/project/[conceptual_design]",
      "Previous governance analysis from Skill 5 deep dive"
    ],
    regulatory_framework: "Vietnamese military procurement standards (TCVN)",
    ai_components: "[List specific AI subsystems: VN-LOMAH scoring AI, 
                     VN-CAM inference, VN-SMASH fire control, VN-TRN analytics]"
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
      "Do NOT reference internal Workshop X processes — document is customer-facing",
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

ESTIMATED TIME SAVED: 3-4 hours per document (draft generation)
KN REVIEW TIME: 1-2 hours (heavy review — governance is critical)
USE FREQUENCY: As needed for deployment preparation (~5 documents total)
DEPLOYMENT GATE: These documents MUST exist before VN-RANGE-001 deploy
```

---

### CATEGORY C: Analysis & Research Delegations

---

#### C1: Systems Thinking Analysis

```
DELEGATION TEMPLATE: C1-SYSTEMS
════════════════════════════════════════

agent.run({
  task: "Perform [analysis_type] for [system/problem]",
  
  context: {
    analysis_type: "[Stock-Flow Map | Feedback Loop Detection | 
                     Leverage Point Analysis | Constraint Identification |
                     Archetype Detection]",
    system: "[product_name | business process | organizational challenge]",
    scope: "[single product | cross-product | portfolio level | enterprise]",
    source_data: [
      "/project/DMIR_ODI_Engineering_Design_Framework.md",
      "/project/[relevant_product_docs]"
    ],
    known_constraints: {
      engineering_capacity: "25h/week — KN solo engineer",
      deployment_status: "[pre-deploy | deployed | multiple installations]",
      revenue_status: "[pre-revenue | early revenue | established]"
    }
  },
  
  constraints: {
    framework: "Use Meadows 12 leverage points (L1-L12)",
    output_structure: [
      "1. Stock-Flow Map (identify stocks, flows, delays, buffers)",
      "2. Feedback Loops (label R1, R2... B1, B2... with status)",
      "3. Archetype Detection (Shifting the Burden, Limits to Growth, etc.)",
      "4. Leverage Point Ranking (L1-L12 with specific interventions)",
      "5. Intervention Cascade (Phase 1: Quick wins → Phase 3: Paradigm shift)"
    ],
    rigor: "Quantify where possible (hours, dollars, percentages)",
    prohibited: [
      "Do NOT suggest interventions that require >25h/week capacity",
      "Do NOT ignore the 25h/week constraint as 'solvable later'",
      "Do NOT recommend parallel product development (Musk Sequence applies)",
      "Do NOT suggest hiring without revenue to fund it (R2 loop inactive)"
    ]
  },
  
  test_criteria: {
    stocks_identified: "All major stocks named with units and current level",
    loops_labeled: "Each loop labeled R/B with dominance status",
    leverage_ranked: "Top 3 leverage points with specific actions",
    actionable: "Phase 1 actions achievable within current 25h/week constraint"
  },
  
  review: "HITL required — KN validates system model against operational reality",
  
  fallback: "If system is too complex for single analysis, decompose and state what was excluded"
})

ESTIMATED TIME SAVED: 2-3 hours per analysis
KN REVIEW TIME: 30-45 minutes (validate model against reality)
USE FREQUENCY: 1-2x per month for strategic planning
```

---

#### C2: ODI Opportunity Analysis

```
DELEGATION TEMPLATE: C2-ODI
════════════════════════════════════════

agent.run({
  task: "Perform ODI opportunity analysis for [product/segment]",
  
  context: {
    product: "[product_code or product category]",
    job_executor: "[Vietnamese military training officer | Range officer | 
                    Unit commander | Procurement officer]",
    job_to_be_done: "[describe the job in outcome-driven terms]",
    source_data: [
      "/project/DMIR_ODI_Complete_Framework.md",
      "/project/[product_brief or conceptual_design]"
    ],
    competitive_landscape: "[imported alternatives: Saab, Polytronic, 
                            Australian ADI, Israeli Elbit]"
  },
  
  constraints: {
    framework: "Ulwick ODI — Importance × Satisfaction scoring",
    outcome_format: "Direction + metric + object of control (no solutions)",
    example: "Minimize THE TIME it takes TO VERIFY soldier qualification status",
    minimum_outcomes: "Generate ≥ 30 desired outcomes for the job",
    scoring_note: "If no survey data, estimate scores with [ESTIMATED] tag",
    prohibited: [
      "Do NOT include solutions in outcome statements",
      "Do NOT bias toward Workshop X's current product features",
      "Do NOT ignore consumption chain jobs (purchase, setup, maintain, dispose)"
    ]
  },
  
  test_criteria: {
    format_correct: "All outcomes follow Direction + Metric + Object pattern",
    coverage: "Outcomes cover entire job map (core + consumption chain)",
    unbiased: "Outcomes not skewed toward current product capabilities",
    scoreable: "Each outcome can be scored on 1-10 Importance and Satisfaction"
  },
  
  review: "HITL required — KN validates against actual military user experience",
  
  fallback: "If job definition ambiguous, generate job map first then outcomes"
})

ESTIMATED TIME SAVED: 3-4 hours per analysis
KN REVIEW TIME: 45-60 minutes (validate outcomes against field experience)
USE FREQUENCY: 1x per product per quarter
```

---

### CATEGORY D: Design Engineering Delegations

---

#### D1: Pahl-Beitz Design Artifact Generation

```
DELEGATION TEMPLATE: D1-DESIGN
════════════════════════════════════════

agent.run({
  task: "Generate [artifact_type] for [product] Phase [phase_number]",
  
  context: {
    artifact_type: "[Requirements List | Function Structure | 
                     Morphological Matrix | VDI 2225 Evaluation |
                     Embodiment Layout | Detail Specification]",
    product: "[product_code]",
    phase: "[1-Task Clarification | 2-Conceptual | 3-Embodiment | 4-Detail]",
    source_data: [
      "/project/[product_brief]",
      "/project/[previous_phase_output]",
      "/project/DMIR_ODI_Engineering_Design_Framework.md"
    ],
    constraints_list: {
      cost_target: "[value — typically 91% below imported alternative]",
      local_content: "≥60% Vietnamese manufacturing content",
      environment: "MIL-STD-810H Method 501-507 (tropical conditions)",
      timeline: "Phase completion within [X weeks] at [Y hours/week]"
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

ESTIMATED TIME SAVED: 2-4 hours per artifact
KN REVIEW TIME: 30-60 minutes (design artifacts need deep review)
USE FREQUENCY: 2-3x per month during active design phases
```

---

#### D2: Cross-Product Component Reuse Analysis

```
DELEGATION TEMPLATE: D2-REUSE
════════════════════════════════════════

agent.run({
  task: "Analyze component reuse opportunities between [product_A] and [product_B]",
  
  context: {
    product_a: "[product_code] — see /project/[design_doc_A]",
    product_b: "[product_code] — see /project/[design_doc_B]",
    ironmesh_platform: "See /project/VN_CAM_AI_Defense_Portfolio_Complete_Datasheet.md",
    reuse_target: "70% component reuse across IRONMESH products",
    current_reuse: "[estimated %]"
  },
  
  constraints: {
    analysis_structure: [
      "1. Component inventory for both products",
      "2. Match identical components (100% reuse)",
      "3. Match similar components (>80% shared, variant-specific additions)",
      "4. Identify unique components (0% reuse — must be custom)",
      "5. Calculate reuse percentage",
      "6. Recommend design changes to increase reuse"
    ],
    component_categories: [
      "Compute (SBC, AI accelerator, MCU)",
      "Sensing (cameras, microphones, radar, IMU)",
      "Communication (WiFi, LoRa, BLE, Ethernet)",
      "Power (battery, DC-DC, solar, PD)",
      "Enclosure (materials, mounting, sealing)",
      "Software (OS, middleware, application)"
    ],
    prohibited: [
      "Do NOT force reuse where requirements fundamentally differ",
      "Do NOT ignore environmental differences between products"
    ]
  },
  
  test_criteria: {
    coverage: "All component categories analyzed",
    quantified: "Reuse % calculated per category and overall",
    actionable: "Specific design change recommendations with effort estimates"
  },
  
  review: "HITL required — KN validates physical/environmental compatibility",
  
  fallback: "If product specs incomplete, flag which specs needed before analysis"
})

ESTIMATED TIME SAVED: 3-5 hours per comparison
KN REVIEW TIME: 30 minutes (verify physical compatibility)
USE FREQUENCY: 1x per product pairing, periodic revalidation
```

---

### CATEGORY E: Strategic & Portfolio Delegations

---

#### E1: Weekly Strategic Review Preparation

```
DELEGATION TEMPLATE: E1-WEEKLY
════════════════════════════════════════

agent.run({
  task: "Prepare weekly strategic review for Workshop X portfolio",
  
  context: {
    current_date: "[date]",
    active_products: "VN-RANGE-001 (priority), [others as applicable]",
    constraint: "25h/week engineering capacity",
    deployment_target: "VN-RANGE-001 first deployment",
    source_data: [
      "/project/RCWS-127-NAVAL_00_project_brief.md",
      "/project/V-SMASH_00_project_brief.md",
      "/project/VN-TRN-001-conceptual_design.md",
      "[recent conversation history with KN]"
    ]
  },
  
  constraints: {
    structure: [
      "1. PROGRESS: What was accomplished this week (bullet points)",
      "2. CONSTRAINT CHECK: Is 25h/week being used on highest-leverage work?",
      "3. R2 LOOP STATUS: How close to VN-RANGE-001 deployment activation?",
      "4. SKILL ALLOCATION: Hours spent on Skill 1-5 this week — balanced?",
      "5. NEXT WEEK PRIORITIES: Top 3 actions ranked by leverage point impact",
      "6. RISK FLAGS: Anything threatening deployment timeline?"
    ],
    tone: "Direct, honest, no-BS. Flag problems clearly.",
    prohibited: [
      "Do NOT generate optimistic narrative if progress was poor",
      "Do NOT suggest adding products to queue (Musk Sequence)",
      "Do NOT recommend solutions requiring hiring (R2 loop inactive)"
    ]
  },
  
  test_criteria: {
    honest: "Progress assessment matches actual work done",
    focused: "Priorities align with deployment critical path",
    constraint_aware: "All suggestions fit within 25h/week"
  },
  
  review: "KN reviews in 10 minutes, adjusts next week's focus",
  
  fallback: "If insufficient data for assessment, state what's missing"
})

ESTIMATED TIME SAVED: 1 hour per week
KN REVIEW TIME: 10 minutes (adjust priorities)
USE FREQUENCY: Weekly (EVERY week — non-negotiable rhythm)
```

---

## PHẦN 3: DELEGATION DECISION FLOWCHART

```
KN RECEIVES A TASK → Ask: "Routine or Ambiguous?"

ROUTINE (well-defined, repetitive, no judgment needed):
  │
  ├── Code boilerplate → Template A1
  ├── Known algorithm → Template A2  
  ├── Code review → Template A3
  ├── Tech spec document → Template B1
  ├── Governance draft → Template B2
  ├── Systems analysis → Template C1
  ├── ODI analysis → Template C2
  ├── Design artifact → Template D1
  ├── Reuse analysis → Template D2
  └── Weekly review → Template E1

AMBIGUOUS (novel, cross-boundary, requires judgment):
  │
  ├── Hardware debugging → DO YOURSELF (GHOST protocol)
  │   (AI cannot see/touch/hear the physical system)
  │
  ├── Architectural decision → DO YOURSELF
  │   (AI can generate options, YOU choose — never delegate choice)
  │
  ├── Vietnamese military context → DO YOURSELF
  │   (Zero AI training data. Your specific knowledge.)
  │
  ├── Safety-critical validation → DO YOURSELF
  │   (Layer 4-5 review: physics + context. Non-delegatable.)
  │
  ├── Procurement negotiation → DO YOURSELF  
  │   (Relationship, trust, face-saving. Human only.)
  │
  └── Cross-product integration → DO YOURSELF
      (How LOMAH + CAM + TRN work TOGETHER on 
       THIS specific range in THIS specific environment)
```

---

## PHẦN 4: TIME BUDGET — Optimized Allocation

```
WEEKLY 25H ALLOCATION WITH DELEGATION LIBRARY:
═══════════════════════════════════════════════

BEFORE DELEGATION LIBRARY (Current):
  Routine code writing:           5h/week
  Architecture/design (ambiguous): 8h/week
  Debugging/integration (ambiguous): 4h/week
  Documentation (routine):        3h/week
  Strategic/governance:           5h/week
  TOTAL: 25h — 8h routine, 17h ambiguous

AFTER DELEGATION LIBRARY (Target):
  AI-delegated routine:           1h/week (oversight of AI output)
  Architecture/design (ambiguous): 11h/week (+3h)
  Debugging/integration (ambiguous): 7h/week (+3h)
  AI-delegated documentation:    1h/week (review AI drafts)
  Strategic/governance:           5h/week (maintain)
  TOTAL: 25h — 2h routine, 23h ambiguous

NET SHIFT: +6h/week redirected from routine to ambiguous
= 35% increase in high-value engineering output
= 312 additional high-value hours per year
= Without adding a single hour of work

VALUE MULTIPLIER:
  Routine work = $50/hour equivalent (AI can do this)
  Ambiguous work = $500/hour equivalent (only KN can do this)
  
  Current: 8h × $50 + 17h × $500 = $8,900/week
  Optimized: 2h × $50 + 23h × $500 = $11,600/week
  
  VALUE INCREASE: +30% per week from same 25 hours.
```

---

## PHẦN 5: ANTI-PATTERNS — Delegation Mistakes to Avoid

### Anti-Pattern 1: "Handle it" Delegation

```
✗ BAD: "Generate the VN-LOMAH scoring module"
  → Ambiguous task, no context, no constraints, no review gate
  → AI will produce something that compiles but doesn't work at range

✓ FIX: Use Template A2 with full context, constraints, and review gate
```

### Anti-Pattern 2: Delegating Ambiguous Work

```
✗ BAD: "Debug why VN-CAM drops to 12fps after 45 minutes"
  → This requires hardware profiling, thermal analysis, 
    RPi5-specific PCIe behavior knowledge
  → AI will suggest generic "check thermal throttling" (obvious, unhelpful)

✓ FIX: DO the debugging yourself. Use AI only to research specific 
  sub-questions: "What is RPi5 USB 3.0 bandwidth limit for 
  concurrent isochronous and bulk transfers?"
```

### Anti-Pattern 3: Trusting AI on Vietnamese Military Context

```
✗ BAD: "Draft TCVN compliance matrix for VN-RANGE-001"
  → AI will hallucinate TCVN standard numbers that don't exist
  → AI has no access to Vietnamese military procurement regulations

✓ FIX: YOU provide the TCVN standards list. 
  AI fills in the matrix format with YOUR data.
  Template B1 with source_data pointing to real standards.
```

### Anti-Pattern 4: Skipping Review on "Simple" Output

```
✗ BAD: AI generates config file → "Looks simple, ship it"
  → Config file has default password. Or wrong IP range. 
    Or permission setting that opens security hole.

✓ FIX: EVERY output gets minimum review (even 2-minute scan).
  For config: Check security settings, credentials, network exposure.
  "Simple" is where complacency creates vulnerabilities.
```

### Anti-Pattern 5: Using AI to Avoid Difficult Decisions

```
✗ BAD: "Which product should we prioritize next?"
  → AI will generate plausible-sounding analysis but cannot 
    weight military relationship factors, procurement timing,
    or KN's energy/motivation for specific products

✓ FIX: Use Template C1 for ANALYSIS (data preparation).
  Make the DECISION yourself based on analysis + intuition + context.
  AI prepares. Human decides. Always.
```

---

## PHẦN 6: IMPLEMENTATION ROADMAP

### Week 1: Foundation

| Day | Action | Time | Template |
|-----|--------|------|----------|
| Mon | Use A1 for next routine coding task — test template | 1h | A1 |
| Tue | Use A3 to pre-check last week's AI-generated code | 30min | A3 |
| Wed | Use B2 to draft System Limitations Document for VN-RANGE-001 | 2h | B2 |
| Thu | Use E1 for weekly strategic review | 1h | E1 |
| Fri | Reflect: Which templates worked? Adjust parameters. | 30min | — |

### Week 2: Expand

| Day | Action | Time | Template |
|-----|--------|------|----------|
| Mon | Use A2 for next algorithm implementation | 2h | A2 |
| Tue | Use B1 for VN-LOMAH technical specification | 2h | B1 |
| Wed | Use D1 for next design artifact needed | 2h | D1 |
| Thu | Use C1 for monthly systems thinking review | 1.5h | C1 |
| Fri | Reflect and update templates based on experience | 30min | — |

### Week 3-4: Optimize

- Track actual time saved per template
- Refine constraints based on AI failure patterns encountered
- Add product-specific context files that templates reference
- Build up "AI failure log" — patterns where AI consistently fails for Workshop X

### Month 2+: Compound

- Templates become second nature — delegation is automatic
- Time savings compound as template library grows
- Focus shifts entirely to ambiguous work and deployment readiness
- Weekly E1 reviews show measurable progress toward VN-RANGE-001 deployment

---

## PHẦN 7: MEASUREMENT — How to Know This Works

```
TRACK WEEKLY:
═══════════════════════════════════════

1. Hours spent on ROUTINE work: Target ≤ 2h/week
   (If > 3h → delegation patterns not being used)

2. Hours spent on AMBIGUOUS work: Target ≥ 20h/week
   (If < 18h → time leaking to routine)

3. AI outputs accepted without revision: Track %
   (If > 80% → good delegation quality)
   (If < 50% → delegation templates need refinement)

4. AI outputs rejected entirely: Track %
   (If > 20% → wrong tasks being delegated OR 
    templates missing critical context)

5. Deployment readiness progress: Track milestones
   (This is the ULTIMATE measure — all delegation 
    serves VN-RANGE-001 deployment)

MONTHLY:
  Compare actual vs target time allocation.
  Review AI failure log — recurring patterns?
  Update templates with new constraints from failures.
  Assess: Am I doing MORE ambiguous work than last month?
```

---

*This Delegation Pattern Library is a LIVING DOCUMENT.*
*Update templates when AI capabilities change (new models, new tools).*
*Update constraints when operational knowledge grows (new range data, new failures).*
*The library itself follows the D-M-I-R cycle: Diagnose gaps → Model templates → Intervene (use them) → Reflect (measure and refine).*

---

*Generated using integrated D-M-I-R × ODI × Systems Thinking × Meta-Learning framework*
*Skills applied: AI Literacy (Skill 1), Process Automation Design (Skill 4), ACH Philosophy*
