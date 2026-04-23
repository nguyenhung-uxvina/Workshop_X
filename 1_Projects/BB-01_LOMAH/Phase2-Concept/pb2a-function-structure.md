# Skill: PB2a - Function Structure

> **Use When**: Requirements approved, need to abstract problem before solutions
> **Output**: Overall function, sub-function decomposition, flow diagram
> **Phase**: Pahl & Beitz Phase 2a of 4 (Conceptual Design)
> **Prev**: [[pb1-clarify-task]] | **Next**: [[pb2b-morphological-matrix]]

---

## Purpose

Function Structure abstracts the problem into what must be done (not how):
- **Separate** the problem from solutions
- **Decompose** complex functions into manageable sub-functions
- **Identify** energy, material, and signal flows
- **Create** foundation for solution search

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                   FUNCTION STRUCTURE                        │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Overall  │──►│Decompose │──►│ Define   │──►│ Validate ││
│  │ Function │   │Sub-funcs │   │  Flows   │   │ Complete ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Transform X     Break down     Energy/        All reqs    │
│  into Y          to elements    Material/      covered?    │
│                                 Signal                      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Define Overall Function

### Overall Function Format

**[Transform/Convert/Change] [Input] into [Output]**

The overall function describes what the system does at the highest level of abstraction.

### Examples

| Product | Overall Function |
|---------|------------------|
| BB-01 Target | Transform bullet impact into digital notification |
| V-SMASH | Transform target image into firing solution |
| Coffee maker | Transform water + beans into hot coffee |
| Thermostat | Transform temperature deviation into corrective signal |
| Car engine | Transform fuel into rotational motion |

### Overall Function Template

```markdown
## Overall Function

**System**: [Product name]

**Overall Function**: Transform [INPUT] into [OUTPUT]

### Inputs
| Input | Type | Description |
|-------|------|-------------|
| | Energy/Material/Signal | |

### Outputs
| Output | Type | Description |
|-------|------|-------------|
| | Energy/Material/Signal | |

### Boundary Conditions
- [Constraint 1]
- [Constraint 2]
```

---

## Step 2: Decompose into Sub-functions

### Decomposition Rules

1. **Use Verb + Noun** format (action + object)
2. **Stay abstract** - describe WHAT, not HOW
3. **One function per box** - no compound functions
4. **Logical hierarchy** - parent encompasses children

### Good vs Bad Function Names

| Bad (Solution) | Good (Abstract) |
|----------------|-----------------|
| Use LoRa radio | Transmit data wirelessly |
| Install battery | Store electrical energy |
| Add PZT sensor | Detect mechanical impact |
| Use STM32 MCU | Process sensor signals |
| Weld frame | Join structural members |

### Common Function Verbs

| Category | Verbs |
|----------|-------|
| **Transform** | Convert, transform, change |
| **Transport** | Move, transfer, transmit, conduct |
| **Store** | Store, contain, hold, retain |
| **Control** | Control, regulate, adjust, limit |
| **Connect** | Connect, couple, join, link |
| **Separate** | Separate, divide, isolate, filter |
| **Sense** | Detect, sense, measure, monitor |
| **Process** | Process, compute, analyze, decide |
| **Protect** | Protect, shield, seal, insulate |
| **Support** | Support, position, locate, mount |

### Decomposition Levels

```
Level 0:    ┌─────────────────────────────┐
            │      OVERALL FUNCTION       │
            │   Transform X into Y        │
            └─────────────┬───────────────┘
                          │
Level 1:    ┌─────────────┼─────────────┐
            │             │             │
            ▼             ▼             ▼
         ┌─────┐      ┌─────┐      ┌─────┐
         │ F1  │      │ F2  │      │ F3  │
         └──┬──┘      └──┬──┘      └──┬──┘
            │            │            │
Level 2:  ┌─┴─┐       ┌──┴──┐      ┌─┴─┐
          ▼   ▼       ▼     ▼      ▼   ▼
        ┌───┐┌───┐  ┌───┐ ┌───┐  ┌───┐┌───┐
        │1.1││1.2│  │2.1│ │2.2│  │3.1││3.2│
        └───┘└───┘  └───┘ └───┘  └───┘└───┘
```

### When to Stop Decomposing

Stop when:
- Function can be solved by a single component/principle
- Further decomposition adds no clarity
- You can identify multiple solution options for the function

---

## Step 3: Define Flows

### Flow Types

| Type | Symbol | Description | Examples |
|------|--------|-------------|----------|
| **Energy** | ══► | Power transfer | Electrical, mechanical, thermal, optical |
| **Material** | ──► | Physical stuff | Parts, fluids, consumables |
| **Signal** | - - ► | Information | Data, commands, feedback, status |

### Flow Diagram Notation

```
                    ══► Energy flow
                    ──► Material flow
                    - - ► Signal flow

┌─────────────┐                    ┌─────────────┐
│             │ ════════════════►  │             │
│  Function A │ ────────────────►  │  Function B │
│             │ - - - - - - - - ►  │             │
└─────────────┘                    └─────────────┘
```

### Complete Function Structure Diagram

```
                         SYSTEM BOUNDARY
    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │  Input                                    Output    │
 ═══╪══►  ┌───────────┐      ┌───────────┐  ═══╪══►      │
    │     │    F1     │══════│    F2     │     │         │
 ───╪──►  │  Sense    │──────│  Process  │  ───╪──►      │
    │     │  impact   │- - - │  signal   │     │         │
 - -╪- ►  └───────────┘      └─────┬─────┘  - -╪- ►      │
    │                              │           │         │
    │                              ▼           │         │
    │                        ┌───────────┐     │         │
    │                        │    F3     │     │         │
    │                        │ Transmit  │═════╪══►      │
    │                        │   data    │     │         │
    │                        └───────────┘     │         │
    │                                                     │
    └─────────────────────────────────────────────────────┘
```

---

## Step 4: Validate Completeness

### Validation Checklist

- [ ] Overall function captures system purpose
- [ ] All requirements traceable to functions
- [ ] Sub-functions use Verb + Noun format
- [ ] No solutions embedded in function names
- [ ] All inputs/outputs accounted for
- [ ] Energy flows conserved (in = out + losses)
- [ ] Material flows balanced
- [ ] Signal flows show control/feedback
- [ ] Appropriate level of detail (not too deep)

### Requirements Traceability

| Requirement | Function(s) | Covered? |
|-------------|-------------|----------|
| F.01 | F1, F2 | ✅ |
| F.02 | F3 | ✅ |
| P.01 | F2 | ✅ |

---

## Function Structure Document Template

```markdown
# Function Structure: [Product Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Phase**: Conceptual Design (PB2a)

---

## 1. Overall Function

**Transform** [INPUT] **into** [OUTPUT]

### System Boundary

| Aspect | Description |
|--------|-------------|
| Inputs | |
| Outputs | |
| Constraints | |

---

## 2. Function Decomposition

### Level 1 Functions

| ID | Function | Input | Output |
|----|----------|-------|--------|
| F1 | [Verb + Noun] | | |
| F2 | [Verb + Noun] | | |
| F3 | [Verb + Noun] | | |

### Level 2 Functions (if needed)

| ID | Function | Parent | Input | Output |
|----|----------|--------|-------|--------|
| F1.1 | | F1 | | |
| F1.2 | | F1 | | |

---

## 3. Function Structure Diagram

```
[Insert diagram showing functions and flows]
```

---

## 4. Flow Summary

### Energy Flows
| From | To | Type | Description |
|------|-----|------|-------------|
| Input | F1 | Electrical | 12V power |

### Material Flows
| From | To | Type | Description |
|------|-----|------|-------------|
| | | | |

### Signal Flows
| From | To | Type | Description |
|------|-----|------|-------------|
| F1 | F2 | Analog | Sensor signal |

---

## 5. Requirements Traceability

| Requirement | Function(s) |
|-------------|-------------|
| | |

---

## 6. Next Steps

- [ ] Proceed to morphological matrix
- [ ] Generate solution principles for each function
```

---

## Example: BB-01 MCU Box

```markdown
## Overall Function

**Transform** bullet impact **into** wireless notification

## Level 1 Functions

| ID | Function |
|----|----------|
| F1 | Detect impact |
| F2 | Amplify signal |
| F3 | Digitize signal |
| F4 | Process data |
| F5 | Transmit wirelessly |
| F6 | Store energy |
| F7 | Regulate power |
| F8 | Protect electronics |

## Diagram

        Impact                              Notification
           │                                     ▲
           ▼                                     │
      ┌─────────┐    ┌─────────┐    ┌─────────┐ │
      │   F1    │───►│   F2    │───►│   F3    │ │
      │ Detect  │    │ Amplify │    │Digitize │ │
      └─────────┘    └─────────┘    └────┬────┘ │
                                         │      │
                                         ▼      │
      ┌─────────┐    ┌─────────┐    ┌─────────┐ │
      │   F6    │═══►│   F7    │═══►│   F4    │ │
      │ Store   │    │Regulate │    │ Process │ │
      │ energy  │    │ power   │    └────┬────┘ │
      └─────────┘    └─────────┘         │      │
                                         ▼      │
                     ┌─────────┐    ┌─────────┐ │
                     │   F8    │    │   F5    │─┘
                     │ Protect │    │Transmit │
                     └─────────┘    └─────────┘
```

---

## Common Mistakes

| Mistake | Example | Fix |
|---------|---------|-----|
| Solution in name | "Use PZT sensor" | "Detect impact" |
| Too vague | "Handle input" | "Amplify signal" |
| Compound function | "Sense and process" | Split into two |
| Missing flows | No power shown | Add energy flow |
| Wrong abstraction | Too detailed too early | Stay high-level |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Overall Function | One-sentence system purpose |
| Function List | All sub-functions with Verb + Noun |
| Function Diagram | Visual with flows |
| Traceability | Requirements to functions |

---

## Related Skills

- [[pb1-clarify-task]] - Requirements input
- [[pb2b-morphological-matrix]] - Next: solution search
- [[pb2c-vdi-2225]] - Concept evaluation

---

*Skill Version: 1.0*
*Pahl & Beitz Phase 2a - Function Structure*
