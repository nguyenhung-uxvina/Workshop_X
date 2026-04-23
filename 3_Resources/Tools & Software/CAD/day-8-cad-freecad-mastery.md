# Day 8: CAD/FreeCAD Integration Mastery

> **Skill**: 3D CAD modeling with AI-assisted FreeCAD MCP
> **Target Outcome**: Create BB-01 MCU Box assembly (14 parts) ready for manufacturing
> **Time**: 2-4 hours evening sessions
> **Baseline**: Drawing list ready, FreeCAD MCP skill documented

---

## 1. System Analysis

### 1.1 Skill as a System

```
INPUTS                     THROUGHPUT                      OUTPUTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
[Requirements]          ┌──────────────────────┐        [FreeCAD Models]
[Drawing List]    →     │  CAD MODELING SKILL  │   →    [STEP Files]
[Prompts]               │                      │        [BOM]
[Pattern Library]       │  Mental Model        │        [2D Drawings]
                        │  Tool Proficiency    │
                        │  Workflow Efficiency │
                        └──────────────────────┘

FEEDBACK LOOPS:
R1: Create part → See result → Understand geometry → Create better (FAST)
R2: Export → Test fit → Identify error → Fix → Deeper understanding (MEDIUM)
B1: Complex geometry → Frustration → Abandon → Try manual → Slow (NEGATIVE)
```

### 1.2 Constraints

| Constraint | Type | Binding? | Leverage Potential |
|------------|------|----------|-------------------|
| 2-4 hrs/evening | Time | YES | Design around, not against |
| No prior FreeCAD experience | Knowledge | NO | AI bridges gap |
| No physical samples to measure | Access | PARTIAL | Use specs from BOM |
| Claude Desktop required | Tool | NO | Already available |

### 1.3 Current State vs Target

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| Parts created | 0 | 14 | 14 parts |
| Assemblies created | 0 | 2 | 2 assemblies |
| STEP files exported | 0 | 16 | 16 files |
| Prompt success rate | Unknown | >90% | Establish baseline |
| Time per part | Unknown | <15 min | Measure and optimize |

---

## 2. Leverage Point Analysis

### Rank 1: Mental Model Shift (L1) - Expected 20x

**Current belief**: "Need to learn FreeCAD interface before modeling"

**Shift to**: "Claude translates my intent to FreeCAD commands - I focus on geometry"

**Why 20x**: Traditional CAD learning = 40+ hours to basic proficiency. AI-assisted = describe what you want, get result in seconds. Focus shifts from "how to use tool" to "what geometry do I need" - a domain where you already have expertise.

**Monitoring Plan**:
1. Parts created per session (leading) - target: 3+
2. Time from requirement to model (process) - target: <10 min
3. Prompt revision count (lagging) - target: <2 per part

**Pilot Actions (Day 8)**:
- [ ] Read pattern library examples (10 min)
- [ ] Copy exact prompt for BB01-DT-001, observe result
- [ ] Modify one parameter, observe change
- [ ] Create BB01-DT-004 (simpler) from scratch using learned patterns

---

### Rank 2: Feedback Loop Compression (L5) - Expected 10x

**Current state**: Design → Build physical → Test → Redesign (days/weeks)

**New state**: Prompt → FreeCAD renders → Screenshot → Iterate (seconds)

**Why 10x**: Each CAD iteration takes 30 seconds vs 30 minutes manual or days physical. At 3 iterations per part × 14 parts = 42 iterations. At 30 sec each = 21 minutes total iteration time.

**Monitoring Plan**:
1. Iterations per part (process) - baseline first, reduce over time
2. Time to "looks correct" (leading) - target: <5 min
3. First-try success rate (lagging) - track improvement

**Pilot Actions**:
- [ ] Use `freecad:get_view` after every create to see result
- [ ] Keep screenshot log in vault for pattern recognition
- [ ] Build mental library of "prompt → result" mappings

---

### Rank 3: Template-Based Generation (L6 - Rules) - Expected 5x

**Pattern**: Standard prompts produce consistent results

**Implementation**: Use pattern library as starting templates, modify parameters

**Why 5x**: Instead of writing prompts from scratch, adapt proven patterns:
- Enclosure = Pattern #4 (Open-Top Enclosure) + modifications
- Bracket = Pattern #3 (L-Bracket) + holes
- Assembly = Pattern #7 (Multi-Part Assembly) + positioning

**Monitoring Plan**:
1. Patterns reused per session (process)
2. New patterns added to library (output)
3. Prompt writing time (lagging) - should decrease

**Pilot Actions**:
- [ ] Map each BB-01 part to nearest pattern library entry
- [ ] Create "BB-01 Pattern Map" document
- [ ] After completing part, extract reusable pattern

---

### Rank 4: Batch Processing (L9 - Delays) - Expected 3x

**Current approach**: One part at a time, complete before starting next

**Optimized approach**: Batch similar parts together

**Why 3x**: Similar parts share geometry patterns. Creating all 4 enclosure parts together (DT-001, DT-002, DT-003) maintains context and reduces prompt setup time.

**Batch Groups**:
1. **Enclosure batch**: DT-001, DT-002, DT-003 (base, lid, gasket)
2. **Internal batch**: DT-004, DT-005, DT-006 (PCB mount, standoffs, battery)
3. **Connector batch**: DT-007, DT-008, DT-009 (panel, gland, SMA)
4. **Mounting batch**: DT-010, DT-011, DT-012 (bracket, strain relief, boss)
5. **Assembly batch**: LR-001, LR-002 (internal, complete)

**Pilot Actions**:
- [ ] Complete Enclosure batch in Day 8 session
- [ ] Time each batch, compare to per-part estimates
- [ ] Log batch efficiency gains

---

### Rank 5: Integration with Existing Workflow (L10 - Structure) - Expected 2x

**Current state**: CAD exists separate from Second Brain

**Integration points**:
1. Drawing list links to requirements → traceability
2. CAD screenshots in vault → visual documentation
3. Export checklist tracks progress → visibility
4. DfX review validates CAD → quality loop

**Why 2x**: Work done once serves multiple purposes. CAD model validates requirements, generates BOM, feeds into test plans - not isolated effort.

**Pilot Actions**:
- [ ] After each part, update export checklist in Drawing-List.md
- [ ] Save key screenshots to `domains/bb-01/cad/screenshots/`
- [ ] Cross-reference DfX requirements during modeling

---

## 3. Day 8 Execution Plan

### Setup (15 min)

```
1. Open FreeCAD
2. View → Workbench → MCP Addon
3. Click "Start RPC Server"
4. Verify Claude Desktop shows freecad MCP connected
5. Test with simple command: "Create a 10×10×10mm cube"
```

### Session 1: Learn the Loop (45 min)

**Objective**: Complete first part, establish baseline metrics

**Part**: BB01-DT-004 PCB Mount Plate (simplest - flat plate with holes)

**Steps**:
1. Copy prompt from Drawing-List.md
2. Execute in Claude Desktop
3. Capture screenshot via `freecad:get_view`
4. Verify dimensions match spec
5. If needed, iterate with modifications
6. Export to STEP
7. Update checklist

**Metrics to capture**:
- Time from prompt to acceptable result: ___ min
- Number of iterations: ___
- Confidence in result: ___/10

### Session 2: Batch Execution (90 min)

**Objective**: Complete Enclosure batch (DT-001, DT-002, DT-003)

**DT-001 Enclosure Base** (Complex - 30 min target):
```
Tạo chi tiết BB01-DT-001 - Enclosure Base trong FreeCAD:
- Document name: "BB01-DT-001-EnclosureBase"

Main body:
- Outer: 200 × 150 × 50 mm
- Wall thickness: 3mm (hollow inside via boolean cut)
- Corner radius: R5 external

Features:
- 4× screw boss Ø8×8mm at corners, 10mm from edge
- 4× M3 hole Ø4.2mm in bosses
- Gasket groove: 2mm wide × 2mm deep, 3mm from edge
- 3× cable gland holes Ø12.5mm on short side, Y=25, 75, 125
```

**DT-002 Enclosure Lid** (Medium - 20 min target):
```
Tạo chi tiết BB01-DT-002 - Enclosure Lid trong FreeCAD:
- Document name: "BB01-DT-002-EnclosureLid"

Main body:
- Outer: 200 × 150 × 25 mm
- Wall thickness: 3mm (hollow, open bottom)
- Lip: 196 × 146 × 5mm fits inside gasket

Features:
- 4× M3 clearance holes Ø3.2mm matching base bosses
- 1× SMA hole Ø6.5mm center of long side
```

**DT-003 Gasket** (Simple - 10 min target):
```
Tạo chi tiết BB01-DT-003 - Gasket trong FreeCAD:
- Document name: "BB01-DT-003-Gasket"

Shape:
- Frame: outer 196 × 146, inner 190 × 140, thickness 3mm
- Material: Silicone (flexible, gray color)
```

### Session 3: Document & Export (30 min)

**Objective**: Export all completed parts, update documentation

**Steps**:
1. Export each part to STEP format
2. Capture assembly screenshot
3. Update Drawing-List.md checklist
4. Add any new patterns to pattern library
5. Log session metrics in friction-log

---

## 4. Pattern Map: BB-01 to Library

| BB-01 Part | Pattern Library Match | Modifications Needed |
|------------|----------------------|---------------------|
| DT-001 Enclosure Base | #4 Open-Top Enclosure | Add bosses, gasket groove, cable holes |
| DT-002 Enclosure Lid | #4 (inverted) | Add lip, SMA hole |
| DT-003 Gasket | Custom frame | Simple frame extrusion |
| DT-004 PCB Mount Plate | #2 Mounting Plate | Adjust hole positions |
| DT-005 Standoff | Simple cylinder | Standard part |
| DT-006 Battery Holder | #4 variant | Sized for battery |
| DT-007 Connector Panel | #2 variant | Panel cutouts |
| DT-008 Cable Gland | Library part | M12 standard |
| DT-009 SMA Bulkhead | Library part | Standard |
| DT-010 L-Bracket | #3 L-Bracket | Add mounting holes |
| DT-011 Strain Relief | #5 Sensor Bracket | Simplified |
| DT-012 Mic Boss | Simple cylinder | Cylinder with holes |
| LR-001 Internal Assy | #8 PCB Mount | Multi-part |
| LR-002 Complete Assy | #7 Multi-Part | Full assembly |

---

## 5. Success Criteria

### Day 8 Complete When:

- [ ] FreeCAD MCP connection verified working
- [ ] At least 4 parts created (DT-001, DT-002, DT-003, DT-004)
- [ ] At least 1 STEP export successful
- [ ] Baseline metrics established:
  - Average time per part: ___ min
  - Average iterations per part: ___
  - Prompt success rate: ___%
- [ ] Drawing-List.md checklist updated
- [ ] Friction log updated with learnings

### Week 2 Target:

- [ ] All 14 parts created
- [ ] Both assemblies complete
- [ ] All STEP files exported
- [ ] Time per part improved by 2x from baseline
- [ ] Pattern library expanded with BB-01 patterns

---

## 6. Friction Log Integration

After each session, add entry to [[friction-log]]:

```markdown
### Day 8: CAD/FreeCAD Session

**What worked**:
- [observation]

**What didn't**:
- [observation]

**Pattern discovered**:
- [new pattern to add to library]

**Metrics**:
- Parts completed: X
- Time: X hours
- Avg time per part: X min
- Iterations: X per part
```

---

## 7. References

- [[cad-workflow]] - FreeCAD commands
- [[Drawing-List]] - BB-01 parts to create
- [[DfX-Review-MCU-Box]] - Design requirements
- [[Prototype-BOM]] - Dimensions and materials

---

*Apply leverage points to accelerate CAD mastery*
