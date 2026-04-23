# CAD Skills Package V2 - Installation Guide

4 skills tích hợp cho CAD workflow tự động - **Optimized version**.

## Package Contents

| # | Skill | Function | Lines | Reduction |
|---|-------|----------|-------|-----------|
| 1 | **cad-visualization-freecad** | Tạo 3D CAD từ text | ~500 | - |
| 2 | **cad-review-automation** | DfX analysis | ~500 | 66% ↓ |
| 3 | **design-iteration-assistant** | Propose & execute | ~700 | 24% ↓ |
| 4 | **cad-documentation-generator** | Technical docs | ~880 | 45% ↓ |

**Total**: ~2580 lines (vs ~4500 in V1 = **43% smaller**)

---

## What's New in V2

| Improvement | Benefit |
|-------------|---------|
| Leaner SKILL.md | Faster skill loading |
| Concrete examples | Understand workflow immediately |
| Consolidated references | Fewer files, better navigation |
| Table of Contents | Easy reference lookup |
| No duplication | Cleaner context |

---

## Installation

### Claude.ai Project (Recommended)

```
1. Download cad-skills-package-v2.zip
2. Unzip locally
3. Claude.ai → Projects → Your Project
4. Project Knowledge → Add Files
5. Upload 4 folders:
   - cad-visualization-freecad/
   - cad-review-automation/
   - design-iteration-assistant/
   - cad-documentation-generator/
```

### Claude Desktop + MCP

```
1. Unzip to your skills directory
2. Skills auto-load khi match triggers
3. FreeCAD MCP optional (enables direct execution)
```

---

## Directory Structure

```
cad-skills-package-v2/
│
├── INSTALL.md (this file)
│
├── cad-visualization-freecad/
│   ├── SKILL.md
│   ├── references/
│   │   ├── drawing-list-workflow.md
│   │   ├── pattern-library.md
│   │   ├── pahl-beitz-integration.md
│   │   └── setup-guide.md
│   └── scripts/
│       └── freecad_helper.py
│
├── cad-review-automation/
│   ├── SKILL.md
│   └── references/
│       └── dfx-rules.md
│
├── design-iteration-assistant/
│   ├── SKILL.md
│   └── references/
│       ├── iteration-patterns.md
│       └── trade-off-analysis.md
│
└── cad-documentation-generator/
    ├── SKILL.md
    └── references/
        ├── document-templates.md
        └── hardware-catalog.md
```

---

## Pipeline Overview

```
┌─────────────────────────────────────────────────────────────┐
│                     CAD WORKFLOW PIPELINE                    │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  USER: "Tạo bracket 60×50mm, 4 lỗ M4, Al 7075"              │
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────┐                │
│  │  1. cad-visualization-freecad           │                │
│  │     → Create 3D model Rev A             │                │
│  └─────────────────────────────────────────┘                │
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────┐                │
│  │  2. cad-review-automation               │                │
│  │     → DfX analysis (DfM/DfA/DfR/DfT)    │                │
│  └─────────────────────────────────────────┘                │
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────┐                │
│  │  3. design-iteration-assistant          │                │
│  │     → Propose fixes → Execute → Verify  │                │
│  └─────────────────────────────────────────┘                │
│                          │                                   │
│                          ▼                                   │
│  ┌─────────────────────────────────────────┐                │
│  │  4. cad-documentation-generator         │                │
│  │     → Specs, BOM, Assembly, Inspection  │                │
│  └─────────────────────────────────────────┘                │
│                          │                                   │
│                          ▼                                   │
│  OUTPUT: Production-ready Rev B + Full documentation        │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## Triggers

### cad-visualization-freecad
- "tạo mô hình 3D", "create CAD", "FreeCAD"
- "bản vẽ chi tiết", "bản vẽ lắp", "danh sách bản vẽ"

### cad-review-automation
- "review bản vẽ", "kiểm tra DfX", "DfM check"
- "phân tích thiết kế", "design review"

### design-iteration-assistant
- "cải tiến thiết kế", "fix DfX issues", "optimize"
- "giảm weight", "giảm cost", "update revision"

### cad-documentation-generator
- "tạo bản vẽ kỹ thuật", "generate BOM", "tạo specs"
- "assembly instructions", "inspection checklist"

---

## Quick Test

After installation, test với:

```
Test 1: "Tạo đế gá 80×60×5mm với 4 lỗ M4"
        → cad-visualization creates model

Test 2: "Review DfX: đế có góc R=0, lỗ cách mép 4mm"
        → cad-review finds issues

Test 3: "Đề xuất fix và thực hiện"
        → design-iteration proposes & executes

Test 4: "Tạo BOM và inspection checklist"
        → cad-documentation generates docs
```

---

## Performance Comparison

| Metric | Manual | With Skills |
|--------|--------|-------------|
| Design + Review + Iterate | 4-6 hours | ~15 min |
| Documentation | 2-3 hours | ~10 min |
| **Total** | **6-9 hours** | **~25 min** |
| **Speedup** | - | **15-20x** |

---

## Customization

### Company templates
Edit `cad-documentation-generator/references/document-templates.md`:
- Title block với logo công ty
- BOM format theo chuẩn nội bộ

### DfX rules
Edit `cad-review-automation/references/dfx-rules.md`:
- Thêm rules theo tiêu chuẩn công ty
- Adjust thresholds

### Materials
Edit `cad-documentation-generator/references/document-templates.md`:
- Section Material Database

---

## Version Info

- **Package**: V2.0
- **Date**: 24/01/2026
- **Skills**: 4 (all optimized)
- **Total lines**: ~2580
- **Reduction from V1**: 43%

---

## Support

- Designed for Vietnamese defense/security projects
- Compatible with Pahl-Beitz methodology
- ISO drawing standards
- Tiếng Việt documentation
