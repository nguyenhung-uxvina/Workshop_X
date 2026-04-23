# Skill: PB3 - Embodiment Design

> **Use When**: Concept selected, need to develop into concrete design
> **Output**: Layout, component selection, DfX analysis, specifications
> **Phase**: Pahl & Beitz Phase 3 of 4
> **Prev**: [[pb2-conceptual-design]] | **Next**: [[pb4-detail-design]]

---

## Purpose

Embodiment Design transforms the abstract concept into a concrete, manufacturable design:
- **Select** specific components and materials
- **Define** geometry, layout, and interfaces
- **Analyze** for manufacturing, assembly, test, reliability (DfX)
- **Validate** against requirements

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                  EMBODIMENT DESIGN                          │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │Component │──►│  Layout  │──►│   DfX    │──►│ Validate ││
│  │Selection │   │  Design  │   │ Analysis │   │   Req's  ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Trade studies   Arrangement    DfM/DfA/       Requirement │
│  BOM creation    Interfaces     DfT/DfR        trace       │
│  Specifications  Packaging      Issues list    Verification│
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Component Selection

### Trade Study Template

```markdown
# Trade Study: [Component Type]

> **Date**: YYYY-MM-DD
> **Decision**: [[DEC-XXX]]

## Requirements

| Parameter | Min | Target | Max | Unit |
|-----------|-----|--------|-----|------|
| | | | | |

## Candidates

| Option | A | B | C |
|--------|---|---|---|
| Part Number | | | |
| [Parameter 1] | | | |
| [Parameter 2] | | | |
| Unit Cost | | | |
| Lead Time | | | |
| Local Stock | ✅/❌ | ✅/❌ | ✅/❌ |

## Evaluation

| Criteria | Weight | A | B | C |
|----------|--------|---|---|---|
| Performance | 30% | | | |
| Cost | 25% | | | |
| Availability | 25% | | | |
| Risk | 20% | | | |
| **Score** | | **%** | **%** | **%** |

## Decision

**Selected**: Option _

**Rationale**:
```

### BOM Template

```markdown
# Bill of Materials: [Assembly Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD

| Item | Part Number | Description | Qty | Unit Cost | Ext Cost | Source |
|------|-------------|-------------|-----|-----------|----------|--------|
| 1 | | | | | | |
| 2 | | | | | | |
| **TOTAL** | | | | | **$XXX** | |

## Cost Breakdown

| Category | Cost | % |
|----------|------|---|
| Electronics | | |
| Mechanical | | |
| Connectors | | |
| Assembly | | |
| **Total** | **$XXX** | 100% |
```

---

## Step 2: Layout Design

### Layout Principles

| Principle | Description |
|-----------|-------------|
| **Separation** | Keep noise sources from sensitive circuits |
| **Thermal** | Heat sources away from temp-sensitive parts |
| **EMC** | Short ground returns, shielding |
| **Assembly** | Logical assembly sequence |
| **Service** | Access to replaceable parts |

### Interface Definition

```markdown
# Interface Control Document

## Mechanical Interfaces

| Interface | Type | Dimensions | Notes |
|-----------|------|------------|-------|
| Mounting | 4× M4 | 100×80mm pattern | |
| Connector | D-Sub 9 | Panel mount | |
| Cable entry | PG9 | 8-10mm cable | |

## Electrical Interfaces

| Interface | Connector | Signals | Voltage |
|-----------|-----------|---------|---------|
| Power | XT60 | +12V, GND | 12V |
| Data | JST-XH 4P | TX, RX, GND | 3.3V |
| Sensor | JST-XH 3P | SIG, +5V, GND | 5V |

## Software Interfaces

| Interface | Protocol | Speed | Format |
|-----------|----------|-------|--------|
| Debug | UART | 115200 | ASCII |
| Data | SPI | 10MHz | Binary |
```

### Block Diagram Template

```
┌─────────────────────────────────────────────────────────────┐
│                    [SYSTEM NAME]                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌─────────┐                              ┌─────────┐      │
│  │  INPUT  │                              │ OUTPUT  │      │
│  │ Sensors │──────►┌──────────┐──────────►│ Comms   │      │
│  └─────────┘       │          │           └─────────┘      │
│                    │   MCU    │                            │
│  ┌─────────┐       │          │           ┌─────────┐      │
│  │  POWER  │──────►│          │──────────►│ Status  │      │
│  │  12V    │       └──────────┘           │ LEDs    │      │
│  └─────────┘                              └─────────┘      │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 3: DfX Analysis

### DfX Categories

| Category | Focus | Key Questions |
|----------|-------|---------------|
| **DfM** | Manufacturing | Can we make it? |
| **DfA** | Assembly | Can we build it? |
| **DfT** | Test | Can we verify it? |
| **DfR** | Reliability | Will it last? |

See [[dfx-analysis]] for detailed methodology.

### Quick DfX Checklist

#### DfM (Manufacturing)
- [ ] Standard PCB specs (layers, trace width, via size)
- [ ] All components available
- [ ] No obsolete parts
- [ ] Alternate sources for critical parts
- [ ] Lead times acceptable

#### DfA (Assembly)
- [ ] Minimize part count
- [ ] Self-locating parts
- [ ] Standard fasteners
- [ ] Logical assembly sequence
- [ ] No special tools required

#### DfT (Test)
- [ ] Test points for key signals
- [ ] Programming access
- [ ] Debug interface
- [ ] Status indicators
- [ ] Test procedure defined

#### DfR (Reliability)
- [ ] Component derating ≥20%
- [ ] MTBF calculated
- [ ] MTBF meets requirement
- [ ] Environmental protection
- [ ] Single points of failure identified

### Issue Tracking

```markdown
## DfX Issues

| ID | Category | Issue | Severity | Recommendation | Status |
|----|----------|-------|----------|----------------|--------|
| DfM-001 | DfM | | H/M/L | | 🟡 OPEN |
| DfA-001 | DfA | | H/M/L | | 🟡 OPEN |
| DfT-001 | DfT | | H/M/L | | ✅ CLOSED |
| DfR-001 | DfR | | H/M/L | | 🟡 OPEN |
```

---

## Step 4: Requirement Verification

### Traceability Matrix

```markdown
## Requirements Verification

| Req ID | Requirement | Design Solution | Verification Method | Status |
|--------|-------------|-----------------|---------------------|--------|
| F.01 | Detect impact | PZT sensor + ADC | Test | ☐ |
| P.01 | Range ≥500m | LoRa @ 20dBm | Analysis + Test | ☐ |
| E.01 | IP67 | Sealed enclosure | Test | ☐ |
| R.01 | MTBF ≥2000hr | FIT analysis | Analysis | ☐ |
```

### Verification Methods

| Method | When to Use |
|--------|-------------|
| **Analysis** | Calculated from specifications |
| **Simulation** | Modeled behavior |
| **Inspection** | Visual or measurement |
| **Test** | Actual measurement on hardware |

---

## Embodiment Design Document Template

```markdown
# Embodiment Design: [Product Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Gate**: Gate 2 Preparation

---

## 1. Design Overview

### Block Diagram
[Insert diagram]

### Key Specifications

| Parameter | Value | Requirement | Margin |
|-----------|-------|-------------|--------|
| | | | |

---

## 2. Component Selection

### Summary

| Subsystem | Key Component | Part Number | Cost |
|-----------|---------------|-------------|------|
| MCU | | | |
| Sensors | | | |
| Communication | | | |
| Power | | | |

### Trade Studies
- [[DEC-001]] - [Decision name]
- [[DEC-002]] - [Decision name]

---

## 3. Bill of Materials

[Insert BOM table]

**Total Unit Cost**: $XXX

---

## 4. Interfaces

### Mechanical
[Insert interface drawing or table]

### Electrical
[Insert interface table]

---

## 5. DfX Analysis

### Summary

| Category | Score | Issues | Status |
|----------|-------|--------|--------|
| DfM | %| | ✅/❌ |
| DfA | % | | ✅/❌ |
| DfT | % | | ✅/❌ |
| DfR | % | | ✅/❌ |
| **Overall** | **%** | | |

### Open Issues
[List high/medium issues]

---

## 6. Requirements Verification

[Insert traceability matrix]

---

## 7. Risks

| Risk | Impact | Mitigation |
|------|--------|------------|
| | | |

---

## 8. Next Steps

- [ ] Close DfX issues
- [ ] Gate 2 review
- [ ] Proceed to detail design
```

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Skip trade studies | Suboptimal choices | Document decisions |
| Ignore DfX early | Late redesign | Involve manufacturing |
| No MTBF analysis | Reliability surprises | Calculate early |
| Vague interfaces | Integration issues | Define precisely |
| No traceability | Missed requirements | Maintain matrix |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Block Diagram | System architecture |
| BOM | Complete parts list with costs |
| Trade Studies | Component selection rationale |
| Interface Definitions | All connections specified |
| DfX Analysis | Manufacturing readiness |
| Verification Matrix | Requirement coverage |

---

## Related Skills

- [[pb2-conceptual-design]] - Previous phase
- [[pb4-detail-design]] - Next phase
- [[dfx-analysis]] - Detailed DfX methodology
- [[mtbf-analysis]] - Reliability calculation
- [[decision-log]] - Component decisions

---

*Skill Version: 1.0*
*Pahl & Beitz Phase 3 of 4*
