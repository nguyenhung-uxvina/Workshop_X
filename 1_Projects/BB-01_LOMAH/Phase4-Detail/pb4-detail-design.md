# Skill: PB4 - Detail Design

> **Use When**: Embodiment complete, need production-ready documentation
> **Output**: Manufacturing drawings, assembly instructions, test procedures
> **Phase**: Pahl & Beitz Phase 4 of 4
> **Prev**: [[pb3-embodiment-design]]

---

## Purpose

Detail Design finalizes everything for production:
- **Complete** all specifications and tolerances
- **Generate** manufacturing documentation
- **Create** assembly and test procedures
- **Release** for production

---

## Process Flow

```
┌─────────────────────────────────────────────────────────────┐
│                    DETAIL DESIGN                            │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│  ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐│
│  │ Complete │──►│ Generate │──►│ Create   │──►│ Release  ││
│  │  Design  │   │  Drawings│   │Procedures│   │   Review ││
│  └──────────┘   └──────────┘   └──────────┘   └──────────┘│
│       │              │              │              │        │
│       ▼              ▼              ▼              ▼        │
│  Tolerances     PCB Gerbers    Assembly       Gate 3       │
│  Final BOM      Mechanicals    Test proc      Production   │
│  Firmware       Schematics     User manual    approval     │
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

---

## Step 1: Design Completion

### Tolerance Analysis

```markdown
## Tolerance Stack-up: [Feature Name]

| Dimension | Nominal | Tolerance | Min | Max |
|-----------|---------|-----------|-----|-----|
| Part A | 10.0 | ±0.1 | 9.9 | 10.1 |
| Part B | 5.0 | ±0.05 | 4.95 | 5.05 |
| Gap | 2.0 | - | 1.85 | 2.15 |
| **Total** | **17.0** | **±0.15** | **16.70** | **17.30** |

**Requirement**: Gap must be 1.5-2.5mm
**Result**: ✅ PASS (1.85-2.15 within spec)
```

### Final BOM Checklist

- [ ] All part numbers verified
- [ ] Quantities confirmed
- [ ] Costs updated to current
- [ ] Suppliers confirmed
- [ ] Lead times verified
- [ ] Alternates documented
- [ ] Revision controlled

### Firmware/Software Completion

- [ ] All features implemented
- [ ] Unit tests passing
- [ ] Integration tests passing
- [ ] Version number assigned
- [ ] Release notes written
- [ ] Binary archived

---

## Step 2: Manufacturing Documentation

### PCB Documentation Package

| Document | Format | Content |
|----------|--------|---------|
| Gerber files | RS-274X | All layers |
| Drill file | Excellon | Hole locations |
| Pick & place | CSV | Component XY |
| BOM | Excel/CSV | Parts list |
| Assembly drawing | PDF | Silkscreen + notes |
| Schematic | PDF | Full schematic |
| Fabrication notes | PDF | Stack-up, finish, etc. |

### PCB Fabrication Notes Template

```markdown
# PCB Fabrication Notes: [Board Name]

## General
- Board thickness: 1.6mm ±10%
- Copper weight: 1oz (35µm)
- Surface finish: HASL lead-free
- Solder mask: Green
- Silkscreen: White

## Stack-up (4-layer example)
| Layer | Type | Thickness |
|-------|------|-----------|
| Top | Signal | 35µm |
| Prepreg | FR4 | 0.2mm |
| Inner 1 | GND | 35µm |
| Core | FR4 | 1.0mm |
| Inner 2 | PWR | 35µm |
| Prepreg | FR4 | 0.2mm |
| Bottom | Signal | 35µm |

## Design Rules
- Min trace width: 0.2mm
- Min trace spacing: 0.2mm
- Min via drill: 0.3mm
- Min via pad: 0.6mm

## Special Instructions
- [Any special requirements]
```

### Mechanical Drawing Checklist

- [ ] All dimensions shown
- [ ] Tolerances specified (GD&T preferred)
- [ ] Material specified
- [ ] Surface finish specified
- [ ] Title block complete
- [ ] Revision history
- [ ] Approval signatures

---

## Step 3: Procedures

### Assembly Instructions Template

```markdown
# Assembly Instructions: [Product Name]

> **Document**: AI-[PRODUCT]-001
> **Version**: 1.0
> **Date**: YYYY-MM-DD

---

## 1. Scope

This procedure covers assembly of [Product Name] from components to final unit.

## 2. Tools Required

| Tool | Specification |
|------|---------------|
| | |

## 3. Materials Required

| Item | Part Number | Qty |
|------|-------------|-----|
| | | |

## 4. Assembly Sequence

### Step 1: [Name]

**Time**: X minutes

1. [Action]
2. [Action]
3. [Action]

**Checkpoint**: [What to verify]

![Step 1 Image](path/to/image)

### Step 2: [Name]

[Repeat format]

---

## 5. Final Inspection

| Check | Criteria | Result |
|-------|----------|--------|
| | | ☐ Pass |

---

## 6. Packaging

[Instructions for packaging]
```

### Test Procedure Template

```markdown
# Test Procedure: [Product Name]

> **Document**: TP-[PRODUCT]-001
> **Version**: 1.0
> **Date**: YYYY-MM-DD

---

## 1. Scope

Production test for [Product Name].

## 2. Test Equipment

| Equipment | Specification | Cal Due |
|-----------|---------------|---------|
| | | |

## 3. Test Record

| Field | Value |
|-------|-------|
| Serial Number | _______ |
| Test Date | _______ |
| Technician | _______ |

## 4. Test Stages

### Stage 1: [Name]

| # | Test | Criteria | Measured | Result |
|---|------|----------|----------|--------|
| 1.1 | | | | ☐ Pass ☐ Fail |

### Stage 2: [Name]

[Repeat format]

---

## 5. Summary

| Stage | Result |
|-------|--------|
| 1 | ☐ Pass ☐ Fail |
| 2 | ☐ Pass ☐ Fail |

**Overall**: ☐ PASS ☐ FAIL
```

See [[dfx-analysis]] for detailed test checklist content.

---

## Step 4: Release Review (Gate 3)

### Pre-Production Checklist

```markdown
# Gate 3 Checklist: [Product Name]

## Design Documentation
- [ ] Schematic final and approved
- [ ] PCB layout final and approved
- [ ] BOM final and approved
- [ ] Mechanical drawings final
- [ ] 3D models complete
- [ ] Firmware released

## Manufacturing Documentation
- [ ] Gerber files generated
- [ ] Fabrication notes complete
- [ ] Assembly instructions written
- [ ] Test procedure written
- [ ] Quality criteria defined

## Verification
- [ ] All requirements verified
- [ ] Prototype tested
- [ ] DfX issues closed
- [ ] MTBF verified
- [ ] Environmental tests passed

## Support Documentation
- [ ] User manual written
- [ ] Maintenance guide (if applicable)
- [ ] Troubleshooting guide
- [ ] Training materials (if needed)

## Release Approval
| Role | Name | Date | Signature |
|------|------|------|-----------|
| Design Lead | | | ☐ |
| QC Lead | | | ☐ |
| Production | | | ☐ |
```

### Document Control

| Document | Part Number | Version | Date |
|----------|-------------|---------|------|
| Schematic | [PROD]-SCH | 1.0 | |
| PCB | [PROD]-PCB | 1.0 | |
| BOM | [PROD]-BOM | 1.0 | |
| Mechanical | [PROD]-MECH | 1.0 | |
| Firmware | [PROD]-FW | 1.0.0 | |
| Assembly | AI-[PROD]-001 | 1.0 | |
| Test | TP-[PROD]-001 | 1.0 | |

---

## Engineering Change Control

### ECO Template

```markdown
# Engineering Change Order

> **ECO Number**: ECO-[YYYY]-[NNN]
> **Date**: YYYY-MM-DD
> **Priority**: Critical / High / Normal

## Change Description

**What**: [Description of change]

**Why**: [Reason for change]

## Affected Documents

| Document | Current Rev | New Rev |
|----------|-------------|---------|
| | | |

## Impact Assessment

| Area | Impact |
|------|--------|
| Cost | +/-$X |
| Schedule | +/-X days |
| Performance | None / [Description] |
| Inventory | Scrap X units |

## Implementation

- [ ] Design updated
- [ ] Documents revised
- [ ] Production notified
- [ ] Inventory disposition

## Approval

| Role | Name | Date | Approve |
|------|------|------|---------|
| Engineering | | | ☐ |
| Production | | | ☐ |
| QC | | | ☐ |
```

---

## Common Mistakes

| Mistake | Impact | Fix |
|---------|--------|-----|
| Missing tolerances | Manufacturing issues | Specify all critical |
| Incomplete BOM | Production delays | Verify every line |
| No test procedure | Quality escapes | Write before production |
| Skip Gate 3 | Field failures | Full review |
| No version control | Confusion | Use revision system |

---

## Outputs

| Deliverable | Description |
|-------------|-------------|
| Manufacturing Package | Gerbers, fab notes, BOM |
| Assembly Instructions | Step-by-step with images |
| Test Procedure | Pass/fail criteria |
| User Documentation | Manual, guides |
| Release Package | All documents, approved |

---

## Quality Checklist

### Before Release

- [ ] Design review completed
- [ ] All DfX issues closed (or accepted)
- [ ] Prototype verified all requirements
- [ ] All documents revision controlled
- [ ] Gate 3 review passed
- [ ] Production pilot planned

---

## Related Skills

- [[pb3-embodiment-design]] - Previous phase
- [[dfx-analysis]] - DfX checklist details
- [[gate-review]] - Gate 3 preparation
- [[decision-log]] - Final decisions documented

---

*Skill Version: 1.0*
*Pahl & Beitz Phase 4 of 4*
