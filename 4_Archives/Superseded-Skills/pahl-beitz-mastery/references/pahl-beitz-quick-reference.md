# Pahl & Beitz Systematic Design Methodology - Quick Reference

## Four Main Phases

### Phase 1: Task Clarification (Chapter 5)
**Goal**: Define the problem clearly with documented requirements

**Key Activities**:
- Identify essential problems
- Establish requirements list (Lastenheft/Pflichtenheft)
- Specify constraints (MUST/WISH requirements)
- Define quantifiable targets

**Main Output**: Requirements List (Design Specification)

**Typical Duration**: 10-15% of total project time

---

### Phase 2: Conceptual Design (Chapter 6)
**Goal**: Develop principle solution (concept) independent of form/material

**Key Steps**:
1. **Abstract** to essential problems
2. **Function Structure**: Break down overall function into sub-functions
3. **Search** for working principles (physical effects, geometric arrangements)
4. **Combine** working principles into working structures
5. **Evaluate** using VDI 2225 or selection methods
6. **Select** best concept and firm up into principle solution

**Main Outputs**: 
- Function structure diagram
- Morphological matrix
- Evaluated concepts
- Selected principle solution

**Typical Duration**: 20-25% of total project time

**Critical Methods**:
- Function Structure (flow of energy, material, signals)
- Working Principles (solution catalog, brainstorming, systematic search)
- Morphological Matrix (combination of sub-solutions)
- VDI 2225 Evaluation (weighted objectives, technical-economic assessment)

---

### Phase 3: Embodiment Design (Chapter 7)
**Goal**: Develop definitive layout with form, material, and spatial configuration

**Key Steps**:
1. **Identify** embodiment-determining requirements
2. **Develop** preliminary layouts (multiple variants)
3. **Select** best preliminary layout
4. **Refine and evaluate** against technical-economic criteria
5. **Optimize** and complete definitive layout
6. **Check** for errors, cost, quality

**Main Outputs**:
- Preliminary layout drawings
- Definitive layout (scale drawings with dimensions)
- Material specifications
- Production process outline

**Typical Duration**: 40-50% of total project time

**Critical Methods**:
- Basic Rules: clear force transmission, short force paths, balanced forces
- Principles: division of tasks, self-help, stability/bistability
- Guidelines: minimum manufacturing cost, minimum assembly effort, durability, safety

---

### Phase 4: Detail Design (Chapter 7.8)
**Goal**: Complete production documentation for all components

**Key Activities**:
- Finalize arrangements, forms, dimensions, surface properties
- Complete part drawings with tolerances
- Compile parts list and assembly instructions
- Complete production and operating documents
- Final cost calculations
- Check all documents

**Main Outputs**:
- Complete production drawings
- Parts lists (BOM)
- Assembly instructions
- Operating manuals
- Final cost estimates

**Typical Duration**: 20-30% of total project time

---

## Critical Cross-Phase Methods

### Requirements List (Used throughout all phases)
- Mandatory requirements (MUST) vs. Wishes (WISH)
- Quantifiable where possible
- Living document - updated continuously
- Categories: geometry, kinematics, forces, energy, material, signals, safety, ergonomics, production, quality, assembly, transport, operation, maintenance, recycling, costs, schedule

### VDI 2225: Concept Evaluation
**When to use**: Selecting between alternative concepts/solutions

**Process**:
1. Define evaluation criteria (technical, economic, safety, etc.)
2. Weight criteria (sum = 100%)
3. Score each concept on each criterion (0-10 scale)
4. Calculate weighted value = Σ(weight × score)
5. Select highest scoring concept

**Criteria categories**:
- Technical performance
- Production feasibility
- Operating characteristics
- Economic factors
- Safety/regulations

### Design for X (DfX)
Apply throughout but especially in Embodiment:
- **DfM** (Manufacturing): minimize parts, standard processes, accessible geometry
- **DfA** (Assembly): minimize assembly direction changes, self-locating features
- **DfMaint** (Maintenance): accessible components, modular replacement
- **DfS** (Safety): fail-safe design, protective features
- **DfC** (Cost): material selection, tolerance optimization

---

## Defense/Security Product Specifics

### Additional Considerations
- **Reliability**: MIL-HDBK-217 for electronic reliability, stress analysis for mechanical
- **Environmental**: MIL-STD-810 (temperature, humidity, shock, vibration)
- **EMC**: MIL-STD-461 (electromagnetic compatibility)
- **Materials**: MIL-SPEC materials for harsh environments
- **Documentation**: Rigorous configuration management, traceability
- **Lifecycle**: Design for 10-30 year operational life
- **Security**: Design to prevent unauthorized access, tamper evidence

### Key Standards Integration
- **STANAG**: NATO standardization agreements (interfaces, performance)
- **MIL-STD**: US military standards (testing, quality, procedures)
- **VDI 2221/2225**: Map requirements to these for organizational compliance

---

## Common Pitfalls to Avoid

1. **Skipping abstraction**: Jumping to solutions before understanding essential problem
2. **Premature detailing**: Selecting materials/dimensions before concept is solid
3. **Ignoring requirements list**: Not updating it throughout or using only at start
4. **Analysis paralysis**: Over-evaluating instead of building and testing
5. **Linear thinking**: The process is iterative - expect to loop back
6. **Forgetting economic factors**: Technical excellence without cost consideration fails

---

## Quick Decision Guide: "Which Phase Am I In?"

- **No requirements yet?** → Task Clarification (Phase 1)
- **Know what to design but not how?** → Conceptual Design (Phase 2)
- **Have concept, need form/material?** → Embodiment Design (Phase 3)
- **Have layout, need production docs?** → Detail Design (Phase 4)

---

## Iteration Patterns

The methodology is **prescriptive for documentation**, not descriptive of cognitive process:
- You'll naturally iterate between phases
- Document systematically even if thinking was non-linear
- Each return loop should be deliberate and documented
- Use phase gate reviews to formally progress

**Normal iteration loops**:
- Conceptual → Clarification (new constraints discovered)
- Embodiment → Conceptual (concept infeasible as embodied)
- Detail → Embodiment (manufacturing requirements change layout)
