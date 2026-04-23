---
name: design-iteration-assistant
description: >
  Đề xuất cải tiến thiết kế CAD và thực hiện thay đổi trực tiếp qua FreeCAD MCP.
  Hybrid workflow: analyze, propose, approve, execute, verify, document. Triggers
  từ DfX review, user request, hoặc proactive detection. Hỗ trợ DfX fixes,
  performance optimization, cost reduction. Bao gồm version control (Rev A→B),
  change log, before/after comparison. Tích hợp với cad-review-automation,
  cad-visualization-freecad, cad-documentation-generator. Triggers: cải tiến
  thiết kế, improve design, fix DfX issues, optimize, giảm weight, giảm cost,
  design iteration, sửa bản vẽ, update revision.
---

# Design Iteration Assistant

Đề xuất và thực hiện cải tiến thiết kế CAD theo hybrid workflow.

## Workflow

```
ANALYZE → PROPOSE → APPROVE → EXECUTE → VERIFY → DOCUMENT
```

| Phase | Action | Output |
|-------|--------|--------|
| Analyze | Parse DfX report/requirements | Issue list |
| Propose | Generate ranked proposals | Trade-off matrix |
| Approve | User selects changes | Approved list |
| Execute | Modify CAD via FreeCAD MCP | Updated model |
| Verify | Re-run DfX check | Pass/Fail |
| Document | Change log, comparison | Rev A→B docs |

---

## Quick Start

**Từ DfX Report:**
```
Đây là DfX report: [paste report]
Đề xuất cải tiến và thực hiện.
```

**Direct Request:**
```
Cải tiến thiết kế DT-001: giảm weight, dễ gia công hơn
```

**After Approval:**
```
Thực hiện #1 và #3
```

---

## Proposal Types

| Type | Priority | Examples |
|------|----------|----------|
| **DfX Fix** | 🔴 Bắt buộc | Fillet góc, dời lỗ, tăng wall |
| **Performance** | 🟡 Nếu cần | Pocket giảm weight, thêm ribs |
| **Cost** | 🟢 Optional | Đơn giản geometry, standard sizes |

---

## Example: Complete Iteration

### Input (DfX Report)
```
DT-001 Đế gá: 🔴 2 HIGH, 🟡 1 MED
- Góc pocket R=0 (DfM)
- Lỗ M4 cách mép 5mm (DfM)
- Thiếu chamfer lỗ (DfA)
```

### Output (Proposals)
```
ĐỀ XUẤT CẢI TIẾN - DT-001 Rev A→B

#1: Thêm Fillet R3 góc pocket ⭐
    Type: DfX Fix | Priority: 🔴
    Before: R=0 | After: R=3mm
    Impact: DfM issue fixed
    
#2: Dời lỗ M4 cách mép 10mm ⭐
    Type: DfX Fix | Priority: 🔴
    Before: 5mm | After: 10mm
    Impact: DfM issue fixed

#3: Thêm Chamfer C0.5 lỗ M4
    Type: DfX Fix | Priority: 🟡
    Impact: DfA improved

Recommendation: Thực hiện #1, #2, #3
Reply: "Thực hiện #1, #2, #3" hoặc chọn khác
```

### User Approves
```
User: "Thực hiện tất cả"
```

### Execution
```
[FreeCAD MCP] Fillet R3 → ✅ Done
[FreeCAD MCP] Move holes → ✅ Done  
[FreeCAD MCP] Chamfer C0.5 → ✅ Done
Saved: DT-001_RevB.FCStd
```

### Verification
```
DfX Re-check: 🔴 2 → ✅ 0 | 🟡 1 → ✅ 0
New issues: 0
VERIFICATION PASSED ✅
```

### Documentation
```
CHANGE LOG Rev A→B
| # | Change | Reason |
|---|--------|--------|
| 1 | Fillet R3 | DfM fix |
| 2 | Lỗ 5→10mm | DfM fix |
| 3 | Chamfer C0.5 | DfA fix |
```

---

## Version Control

**Naming**: `[Part]_Rev[Letter].FCStd` (DT-001_RevA → DT-001_RevB)

| Change Type | Action |
|-------------|--------|
| Cosmetic | No rev change |
| Minor (fillet, chamfer) | A→B |
| Major (dimensions) | A→B + review |

---

## Integration

```
cad-review-automation → DfX issues
        ↓
design-iteration-assistant → Proposals + Execute
        ↓
cad-visualization-freecad → FreeCAD MCP
        ↓
cad-documentation-generator → Updated docs
```

---

## References

Load khi cần chi tiết:

- **Optimization patterns & FreeCAD commands**: [references/iteration-patterns.md](references/iteration-patterns.md)
  - DfX fix patterns (fillet, move hole, wall thickness)
  - Weight/cost/stiffness optimization
  - FreeCAD execution commands

- **Trade-off analysis**: [references/trade-off-analysis.md](references/trade-off-analysis.md)
  - Evaluation criteria & scoring
  - Decision matrix template
  - Impact assessment
