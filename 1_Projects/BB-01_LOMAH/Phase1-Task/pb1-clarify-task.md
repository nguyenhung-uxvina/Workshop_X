# Skill: PB1 - Clarify the Task

> **Use When**: Starting a new product/system development
> **Output**: Requirements list with demands, wishes, and constraints
> **Phase**: Pahl & Beitz Phase 1 of 4
> **Next**: [[pb2a-function-structure]]

---

## Purpose

Clarify the Task transforms vague needs into precise, measurable requirements:
- **What** must the product do?
- **How well** must it perform?
- **What constraints** limit the design space?

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  CLARIFY THE TASK                           │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Gather   │──►│ Classify │──►│ Quantify │──►│ Validate ││
│  │ Inputs   │   │ Category │   │ T/O      │   │ Complete ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Customer       MIL-STD        Threshold/     Stakeholder  │
│  Standards      categories     Objective      review       │
│  Threat         KPP/KSA        with units                  │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Input Sources

| Source | What to Extract |
|--------|-----------------|
| Customer/User | Operational needs, use cases, CONOPS |
| Mission Analysis | Threat environment, scenarios |
| Standards | MIL-STD, MIL-HDBK, NATO STANAG |
| Regulations | Export control, safety standards |
| Similar systems | Benchmark data, lessons learned |
| Environment | Operating conditions, deployment |

---

## Defense Requirements Classification

### Threshold vs Objective (T/O)

| Type | Symbol | Definition | Example |
|------|--------|------------|---------|
| **Threshold (T)** | T | Minimum acceptable value | "Range ≥300m (T)" |
| **Objective (O)** | O | Desired goal if achievable | "Range ≥500m (O)" |

**Rule**: System MUST meet all Thresholds. Objectives are stretch goals.

### Key Performance Parameters (KPP)

**KPPs** are critical requirements that define mission success:
- Failure to meet KPP = system rejection
- Tracked at highest program level
- Require formal approval to change

| Typical KPPs | Description |
|--------------|-------------|
| System Survivability | Withstand threat environment |
| Force Protection | Protect operators |
| Interoperability | Work with existing systems |
| Net-Ready | Connect to tactical networks |

### Key System Attributes (KSA)

**KSAs** are important but not mission-critical:
- Significant impact on effectiveness
- May be traded against other KSAs
- Still formally tracked

### Critical Technical Parameters (CTP)

**CTPs** are technical measures that enable KPPs/KSAs:
- Derived from higher requirements
- Engineering-level metrics
- May have margin requirements

```
┌─────────────────────────────────────────────────────────────┐
│                 REQUIREMENTS HIERARCHY                       │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────────────────────────────────────────────────┐   │
│  │                 MISSION NEEDS                        │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│                          ▼                                  │
│  ┌─────────────────────────────────────────────────────┐   │
│  │     KPP (Key Performance Parameters)                 │   │
│  │     MUST meet - mission critical                     │   │
│  └───────────────────────┬─────────────────────────────┘   │
│                          │                                  │
│            ┌─────────────┴─────────────┐                   │
│            ▼                           ▼                    │
│  ┌─────────────────────┐     ┌─────────────────────┐       │
│  │   KSA (Key System   │     │   CTP (Critical     │       │
│  │   Attributes)       │     │   Technical Params) │       │
│  │   Important         │     │   Engineering-level │       │
│  └─────────────────────┘     └─────────────────────┘       │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## MIL-STD Requirement Categories

### Primary Categories (MIL-STD-961E)

| Category | Code | Description | Standard Reference |
|----------|------|-------------|-------------------|
| **Functional** | FUNC | What it does | - |
| **Performance** | PERF | How well it does it | - |
| **Interface** | INTF | How it connects | MIL-STD-1553, RS-422 |
| **Environmental** | ENV | Operating conditions | MIL-STD-810 |
| **Reliability** | REL | MTBF, failure rates | MIL-HDBK-217 |
| **Maintainability** | MAINT | MTTR, accessibility | MIL-HDBK-472 |
| **Availability** | AVAIL | Operational readiness | - |
| **Safety** | SAFE | Hazard prevention | MIL-STD-882 |
| **Security** | SEC | Information protection | - |
| **Survivability** | SURV | Threat resistance | - |
| **Human Factors** | HF | Operator interface | MIL-STD-1472 |
| **Transportability** | TRANS | Mobility, shipping | - |
| **Interoperability** | IOP | System integration | - |
| **EMC/EMI** | EMC | Electromagnetic compat | MIL-STD-461 |
| **Qualification** | QUAL | Test requirements | - |

---

## Environmental Requirements (MIL-STD-810)

### Climate Categories

| Category | Temperature | Humidity | Use Case |
|----------|-------------|----------|----------|
| **Basic Hot** | -10 to +43°C | Up to 95% RH | Temperate regions |
| **Hot Dry (A1)** | -10 to +49°C | Low | Desert day |
| **Hot Humid (A2)** | +20 to +35°C | Up to 100% RH | Tropical |
| **Basic Cold (C0)** | -21 to +32°C | - | Cold regions |
| **Cold (C1)** | -37 to +21°C | - | Arctic |
| **Severe Cold (C2)** | -46 to +21°C | - | Extreme cold |

### MIL-STD-810 Test Methods

| Method | Test | Description |
|--------|------|-------------|
| 500 | Low Pressure (Altitude) | High altitude operation |
| 501 | High Temperature | Hot operating/storage |
| 502 | Low Temperature | Cold operating/storage |
| 503 | Temperature Shock | Rapid temp change |
| 506 | Rain | Water resistance |
| 507 | Humidity | Moisture exposure |
| 509 | Salt Fog | Marine corrosion |
| 510 | Sand and Dust | Desert/dusty environments |
| 514 | Vibration | Transport/operation |
| 516 | Shock | Mechanical impact |
| 521 | Icing/Freezing Rain | Cold weather operation |

### IP Rating Reference

| IP Code | Solid Protection | Liquid Protection |
|---------|------------------|-------------------|
| IP54 | Dust protected | Splash resistant |
| IP65 | Dust tight | Water jet resistant |
| IP66 | Dust tight | Powerful water jet |
| IP67 | Dust tight | Immersion 1m/30min |
| IP68 | Dust tight | Continuous immersion |

---

## Reliability Requirements (MIL-HDBK-217)

### Reliability Metrics

| Metric | Definition | Formula |
|--------|------------|---------|
| **MTBF** | Mean Time Between Failures | Total time / # failures |
| **MTTR** | Mean Time To Repair | Total repair time / # repairs |
| **MTTF** | Mean Time To Failure | For non-repairable items |
| **Ao** | Operational Availability | MTBF / (MTBF + MTTR) |
| **FIT** | Failures In Time | Failures per 10⁹ hours |

### Typical Defense MTBF Requirements

| System Type | Typical MTBF |
|-------------|--------------|
| Ground vehicle electronics | 500-2,000 hrs |
| Man-portable equipment | 1,000-5,000 hrs |
| Airborne systems | 2,000-10,000 hrs |
| Naval shipboard | 5,000-20,000 hrs |
| Satellite/space | 50,000+ hrs |

### Availability Targets

| Level | Availability | Meaning |
|-------|--------------|---------|
| Standard | 90% (Ao ≥ 0.90) | 36 days downtime/year |
| High | 95% (Ao ≥ 0.95) | 18 days downtime/year |
| Very High | 99% (Ao ≥ 0.99) | 3.6 days downtime/year |
| Mission Critical | 99.9% | 8.7 hours downtime/year |

---

## Safety Requirements (MIL-STD-882)

### Hazard Severity Categories

| Category | Description | Example |
|----------|-------------|---------|
| **I - Catastrophic** | Death, system loss | Explosion, fire |
| **II - Critical** | Severe injury, major damage | Serious malfunction |
| **III - Marginal** | Minor injury, minor damage | Degraded operation |
| **IV - Negligible** | Less than minor injury | Inconvenience |

### Hazard Probability Levels

| Level | Description | Probability |
|-------|-------------|-------------|
| **A - Frequent** | Likely to occur often | >10⁻¹ |
| **B - Probable** | Will occur several times | 10⁻¹ to 10⁻² |
| **C - Occasional** | Likely to occur sometime | 10⁻² to 10⁻³ |
| **D - Remote** | Unlikely but possible | 10⁻³ to 10⁻⁶ |
| **E - Improbable** | So unlikely, assume won't occur | <10⁻⁶ |

### Risk Assessment Matrix

```
              SEVERITY
           I    II   III   IV
         ┌────┬────┬────┬────┐
    A    │ 1  │ 3  │ 7  │ 13 │  P
         ├────┼────┼────┼────┤  R
    B    │ 2  │ 5  │ 9  │ 16 │  O
         ├────┼────┼────┼────┤  B
    C    │ 4  │ 6  │ 11 │ 18 │  A
         ├────┼────┼────┼────┤  B
    D    │ 8  │ 10 │ 14 │ 19 │  I
         ├────┼────┼────┼────┤  L
    E    │ 12 │ 15 │ 17 │ 20 │  I
         └────┴────┴────┴────┘  T
                                Y

1-5 = Unacceptable (must mitigate)
6-9 = Undesirable (management decision)
10-17 = Acceptable with review
18-20 = Acceptable
```

---

## EMC Requirements (MIL-STD-461)

### Common EMC Limits

| Requirement | Description |
|-------------|-------------|
| CE101 | Conducted emissions, power leads |
| CE102 | Conducted emissions, power leads, 10kHz-10MHz |
| CS101 | Conducted susceptibility, power leads |
| CS114 | Conducted susceptibility, bulk cable injection |
| RE101 | Radiated emissions, magnetic field |
| RE102 | Radiated emissions, electric field |
| RS101 | Radiated susceptibility, magnetic field |
| RS103 | Radiated susceptibility, electric field |

---

## Human Factors (MIL-STD-1472)

### Anthropometric Considerations

| Percentile | Use |
|------------|-----|
| 5th female | Minimum reach, control access |
| 50th | Nominal design point |
| 95th male | Maximum clearance, space |

### Common HF Requirements

| Area | Typical Requirements |
|------|---------------------|
| Control force | <10N for frequent operation |
| Display viewing | 50-70cm optimal distance |
| Labeling | ≥3mm character height |
| Response time | User feedback <200ms |
| Noise | <85dB for 8hr exposure |

---

## Defense Requirements List Template

```markdown
# System Requirements Specification: [System Name]

> **Document**: SRS-[System]-001
> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Classification**: UNCLASSIFIED / CONTROLLED
> **Status**: 🟡 DRAFT / ✅ APPROVED

---

## 1. Key Performance Parameters (KPP)

| ID | Requirement | Threshold (T) | Objective (O) | Unit | Verification |
|----|-------------|---------------|---------------|------|--------------|
| KPP.01 | | | | | T/A/D/I |
| KPP.02 | | | | | T/A/D/I |

*Verification: T=Test, A=Analysis, D=Demonstration, I=Inspection*

---

## 2. Key System Attributes (KSA)

| ID | Requirement | Threshold | Objective | Unit | Verification |
|----|-------------|-----------|-----------|------|--------------|
| KSA.01 | | | | | |

---

## 3. Functional Requirements (FUNC)

| ID | Requirement | Value | Unit | T/O | Source | Verification |
|----|-------------|-------|------|-----|--------|--------------|
| FUNC.01 | | | | T | | |

---

## 4. Performance Requirements (PERF)

| ID | Requirement | Threshold | Objective | Unit | Source | Verification |
|----|-------------|-----------|-----------|------|--------|--------------|
| PERF.01 | | | | | | |

---

## 5. Interface Requirements (INTF)

| ID | Requirement | Standard | Description | T/O | Verification |
|----|-------------|----------|-------------|-----|--------------|
| INTF.01 | Electrical interface | MIL-STD-1553 | | T | |
| INTF.02 | Mechanical mounting | | | T | |

---

## 6. Environmental Requirements (ENV)

### 6.1 Climatic

| ID | Requirement | Min | Max | Unit | MIL-STD-810 | T/O |
|----|-------------|-----|-----|------|-------------|-----|
| ENV.01 | Operating temp | -10 | +50 | °C | 501/502 | T |
| ENV.02 | Storage temp | -40 | +70 | °C | 501/502 | T |
| ENV.03 | Humidity | 0 | 95 | %RH | 507 | T |
| ENV.04 | Altitude | 0 | 4,500 | m | 500 | O |

### 6.2 Mechanical

| ID | Requirement | Value | Unit | MIL-STD-810 | T/O |
|----|-------------|-------|------|-------------|-----|
| ENV.05 | Vibration | Cat 4 | - | 514 | T |
| ENV.06 | Shock | 40g/11ms | - | 516 | T |
| ENV.07 | IP rating | IP67 | - | 506 | T |

### 6.3 Other

| ID | Requirement | Value | MIL-STD-810 | T/O |
|----|-------------|-------|-------------|-----|
| ENV.08 | Salt fog | 48hr | 509 | O |
| ENV.09 | Sand/dust | Procedure I | 510 | T |

---

## 7. Reliability Requirements (REL)

| ID | Requirement | Threshold | Objective | Unit | Basis |
|----|-------------|-----------|-----------|------|-------|
| REL.01 | MTBF | 2,000 | 5,000 | hours | MIL-HDBK-217 |
| REL.02 | Design life | 10 | 15 | years | |
| REL.03 | Storage life | 5 | 10 | years | |

---

## 8. Maintainability Requirements (MAINT)

| ID | Requirement | Threshold | Objective | Unit | T/O |
|----|-------------|-----------|-----------|------|-----|
| MAINT.01 | MTTR | 60 | 30 | min | T |
| MAINT.02 | No special tools | Yes | | - | T |
| MAINT.03 | Field-replaceable units | LRU level | | - | T |

---

## 9. Availability Requirements (AVAIL)

| ID | Requirement | Threshold | Objective | Unit |
|----|-------------|-----------|-----------|------|
| AVAIL.01 | Operational availability | 95% | 98% | Ao |

---

## 10. Safety Requirements (SAFE)

| ID | Requirement | Hazard Cat | Standard | T/O |
|----|-------------|------------|----------|-----|
| SAFE.01 | No Cat I hazards | I | MIL-STD-882 | T |
| SAFE.02 | Battery safety | II | UN38.3 | T |

---

## 11. EMC Requirements (EMC)

| ID | Requirement | Standard | Limit | T/O |
|----|-------------|----------|-------|-----|
| EMC.01 | Conducted emissions | MIL-STD-461 CE102 | | T |
| EMC.02 | Radiated emissions | MIL-STD-461 RE102 | | T |
| EMC.03 | Radiated susceptibility | MIL-STD-461 RS103 | 20V/m | T |

---

## 12. Human Factors Requirements (HF)

| ID | Requirement | Value | Unit | Standard | T/O |
|----|-------------|-------|------|----------|-----|
| HF.01 | Operating weight | ≤15 | kg | MIL-STD-1472 | T |
| HF.02 | Setup time | ≤5 | min | | T |
| HF.03 | Training requirement | ≤4 | hours | | O |

---

## 13. Physical Requirements (PHYS)

| ID | Requirement | Threshold | Objective | Unit | T/O |
|----|-------------|-----------|-----------|------|-----|
| PHYS.01 | Mass | 10 | 8 | kg | T |
| PHYS.02 | Volume | 20 | 15 | L | O |
| PHYS.03 | Color | OD Green | | - | T |

---

## 14. Interoperability Requirements (IOP)

| ID | Requirement | Standard | T/O |
|----|-------------|----------|-----|
| IOP.01 | NATO interoperable | STANAG XXXX | O |

---

## 15. Cost Requirements (COST)

| ID | Requirement | Threshold | Objective | Unit |
|----|-------------|-----------|-----------|------|
| COST.01 | Unit production cost | 5,000 | 3,000 | USD |
| COST.02 | Development budget | 100,000 | | USD |

---

## 16. Schedule Requirements (SCHED)

| ID | Milestone | Date | T/O |
|----|-----------|------|-----|
| SCHED.01 | Prototype | YYYY-MM | T |
| SCHED.02 | Qualification | YYYY-MM | T |
| SCHED.03 | IOC | YYYY-MM | T |

---

## 17. Constraints

| ID | Constraint | Limit | Reason | Negotiable |
|----|------------|-------|--------|------------|
| CON.01 | Local content | ≥40% | Policy | No |
| CON.02 | No ITAR components | Yes | Export | No |
| CON.03 | COTS preferred | Yes | Cost | Yes |

---

## 18. Critical Technical Parameters (CTP)

| ID | Parameter | Threshold | Margin | Derived From |
|----|-----------|-----------|--------|--------------|
| CTP.01 | ADC resolution | 12-bit | 16-bit | PERF.01 |
| CTP.02 | Processor speed | 100MHz | 200MHz | FUNC.05 |

---

## 19. Assumptions

| ID | Assumption | Impact if Wrong |
|----|------------|-----------------|
| A.01 | | |

---

## 20. Open Questions

| ID | Question | Answer | Date |
|----|----------|--------|------|
| Q.01 | | | |

---

## Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Program Manager | | | ☐ |
| Chief Engineer | | | ☐ |
| Customer Rep | | | ☐ |
| QA Manager | | | ☐ |
```

---

## Writing Defense Requirements

### Threshold/Objective Format

```
[Requirement] shall be [operator] [Threshold] (T) / [Objective] (O) [unit]

Example:
"Detection range shall be ≥300m (T) / ≥500m (O)"
"Weight shall be ≤15kg (T) / ≤10kg (O)"
```

### Use Action Verbs

| Good | Bad |
|------|-----|
| "System shall detect targets at ≥300m" | "Detection capability" |
| "System shall transmit data within 5s" | "Fast communication" |
| "System shall operate for ≥8 hours" | "Long battery life" |

### Verification Methods (TADI)

| Method | Code | When to Use |
|--------|------|-------------|
| **Test** | T | Measurable, testable |
| **Analysis** | A | Calculated, modeled |
| **Demonstration** | D | Operational scenario |
| **Inspection** | I | Visual, documents |

---

## Completeness Checklist

### KPP/KSA Coverage
- [ ] All mission-critical requirements are KPPs
- [ ] Important requirements are KSAs
- [ ] Each KPP has both T and O values
- [ ] Verification method assigned

### Environmental (MIL-STD-810)
- [ ] Temperature range defined (operating/storage)
- [ ] Humidity requirements specified
- [ ] Vibration/shock requirements
- [ ] IP rating or specific tests
- [ ] Salt fog if maritime
- [ ] Sand/dust if desert

### Reliability (MIL-HDBK-217)
- [ ] MTBF specified with basis
- [ ] MTTR for maintainability
- [ ] Availability target set
- [ ] Design life defined

### Safety (MIL-STD-882)
- [ ] Hazard categories identified
- [ ] No Cat I hazards unmitigated
- [ ] Safety-critical functions identified

### EMC (MIL-STD-461)
- [ ] CE/CS requirements if applicable
- [ ] RE/RS requirements if applicable
- [ ] Platform-specific tailoring

### Human Factors (MIL-STD-1472)
- [ ] Weight/portability
- [ ] Operating crew size
- [ ] Training requirements
- [ ] Operating environment

---

## Common Mistakes

| Mistake | Example | Fix |
|---------|---------|-----|
| No Threshold/Objective | "Range: 500m" | "Range ≥300m(T)/500m(O)" |
| Missing MIL-STD reference | "Waterproof" | "IP67 per MIL-STD-810 Method 506" |
| Solution in requirement | "Use GPS" | "Position accuracy ≤10m CEP" |
| No verification method | Requirement without T/A/D/I | Add verification column |
| Missing units | "MTBF: 2000" | "MTBF ≥2,000 hours" |

---

## Reference Standards

| Standard | Title | Use For |
|----------|-------|---------|
| MIL-STD-810 | Environmental Engineering | Environmental requirements |
| MIL-HDBK-217 | Reliability Prediction | MTBF calculation |
| MIL-STD-882 | System Safety | Hazard analysis |
| MIL-STD-461 | EMC Requirements | EMI/EMC |
| MIL-STD-1472 | Human Engineering | Human factors |
| MIL-STD-1553 | Digital Data Bus | Interface |
| MIL-STD-704 | Aircraft Electric Power | Power interface |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| System Requirements Spec | Complete, quantified, classified |
| KPP/KSA List | Critical requirements summary |
| Verification Matrix | How each req will be verified |
| Traceability Matrix | Req to source mapping |

---

## Related Skills

- [[pb2a-function-structure]] - Next phase: function decomposition
- [[decision-log]] - Document requirement decisions
- [[research-workflow]] - Research for benchmarks/standards

---

*Skill Version: 2.0*
*Pahl & Beitz Phase 1 of 4*
*Defense standards: MIL-STD-810, MIL-HDBK-217, MIL-STD-882, MIL-STD-461, MIL-STD-1472*
