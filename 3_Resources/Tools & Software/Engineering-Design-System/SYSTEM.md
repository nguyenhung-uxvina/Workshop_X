# 🏗️ HỆ THỐNG HỖ TRỢ ENGINEERING DESIGN
## Defense/Security Product Development với Pahl & Beitz + D-M-I-R

**Version**: 1.0 | **Updated**: 2026-02-03 | **Owner**: KN Nguyen

---

## 📋 MỤC ĐÍCH HỆ THỐNG

Hệ thống này **KHÔNG** để tự động hóa hoàn toàn hay tạo nội dung rác, mà để **TĂNG CƯỜNG KHẢ NĂNG CON NGƯỜI**:

✅ Quản lý ý tưởng và thiết kế một cách có hệ thống
✅ Thực hiện nghiên cứu và phân tích theo qui trình chuẩn
✅ Giữ mọi thứ ngăn nắp, có thể trace lại
✅ Quy trình làm việc trôi chảy từ ý tưởng → sản phẩm hoàn chỉnh

---

## 🧱 BA THÀNH PHẦN CỐT LÕI

### 1. Claude Code (Engine)
Không chỉ cho lập trình - là **trợ lý tổng quát** có khả năng:
- Tìm kiếm web và nghiên cứu kỹ thuật
- Thao tác với files và thư mục
- Chạy scripts tính toán (VDI 2225, cost analysis)
- Tạo tài liệu kỹ thuật (docx, pptx, PDF)

### 2. Vault (Knowledge Base - Obsidian-compatible)
Nơi lưu trữ **cục bộ và riêng tư** dưới dạng markdown:
```
vault/
├── projects/       # Từng dự án theo mã VN-XXX-XXX
├── templates/      # Mẫu tài liệu chuẩn
├── references/     # Tài liệu tham khảo P&B, MIL-STD
└── learning-journal/ # Ghi chép học tập D-M-I-R
```

### 3. Skills (Progressive Disclosure)
Cung cấp hướng dẫn **đúng lúc cần**:
```
skills/
├── SKILL_overview.md           # Brief overview (always loaded)
├── SKILL_task_clarification.md # Chi tiết Phase 1
├── SKILL_conceptual_design.md  # Chi tiết Phase 2
├── SKILL_embodiment_design.md  # Chi tiết Phase 3
├── SKILL_detail_design.md      # Chi tiết Phase 4
└── SKILL_dmir_learning.md      # D-M-I-R learning acceleration
```

---

## 🔄 PROGRESSIVE DISCLOSURE ARCHITECTURE

### Tầng 1: Initial Load (Luôn có sẵn)
- `SKILL_overview.md` - Tổng quan 4 phases
- Project index và status
- Quick reference cards

### Tầng 2: On-Demand (Load khi cần)
- Chi tiết từng phase khi bắt đầu phase đó
- Templates cụ thể cho tác vụ đang làm
- Reference documents liên quan

### Tầng 3: Deep Dive (Load cho tác vụ phức tạp)
- Scripts tính toán (VDI 2225, cost modeling)
- Full MIL-STD reference tables
- Previous project lessons learned

---

## 🎯 WORKFLOW TRIGGERS

### Khi bắt đầu dự án mới
```
User: "Tạo dự án mới [tên sản phẩm]"
→ Load: SKILL_task_clarification.md
→ Create: vault/projects/VN-XXX-XXX/
→ Generate: Requirements template
```

### Khi tiến hành Task Clarification
```
User: "Tạo requirements list cho [dự án]"
→ Load: templates/requirements_list_template.md
→ Reference: defense-standards-mapping
→ Generate: Requirements list với checklist
```

### Khi tiến hành Conceptual Design
```
User: "Tạo morphological matrix" hoặc "Đánh giá concepts"
→ Load: SKILL_conceptual_design.md
→ Run: scripts/vdi2225_calculator.py (nếu evaluation)
→ Generate: Morphological matrix hoặc evaluation report
```

### Khi tiến hành Embodiment Design
```
User: "Thiết kế layout" hoặc "Chọn vật liệu"
→ Load: SKILL_embodiment_design.md
→ Reference: DfX guidelines
→ Generate: Layout documents, BOM draft
```

### Khi cần học/review
```
User: "Review tiến độ học" hoặc "D-M-I-R reflection"
→ Load: SKILL_dmir_learning.md
→ Access: learning-journal/
→ Generate: Progress report, next actions
```

---

## 📁 DANH SÁCH DỰ ÁN HIỆN TẠI

| Mã dự án | Tên | Phase hiện tại | Status |
|----------|-----|----------------|--------|
| VN-TARGET-BB01 | Marine Target Detection | Phase 1 Complete | ✅ Requirements v1.3 |
| VN-RESCUE-DRONE-001 | Smart Flying Buoy | Phase 1 Complete | ✅ Requirements v1.1 |
| VN-RC-TX-001-D | Defense Radio Transmitter | Phase 1 Complete | ✅ Requirements v1.0 |
| VN-TUAV-DEMO-001 | Tactical UAV Demo | Phase 1 Complete | ✅ Requirements v1.0 |
| BMT-01-HN | [Đang xác định] | Phase 1 Complete | ✅ Requirements v3.1 |
| VN-B41SIM-001 | B41 Simulator | Phase 1 Clarification | 🔄 In Progress |
| VN-ADTS-001 | Air Defense Training | Phase 1 Clarification | 🔄 In Progress |
| VN-ARTY-FOS-001 | Artillery Forward Observer | Phase 1 Deep Dive | 🔄 In Progress |
| VN-TARGET-DRONE-001 | Target Drone System | Phase 1 Deep Dive | 🔄 In Progress |
| VN-MORTAR-SIM-001 | Mortar Simulator | Phase 1 Deep Dive | 🔄 In Progress |
| VN-MANPADS-TRAINER | MANPADS IR Trainer | Phase 1 Deep Dive | 🔄 Technical Analysis |
| VN-NAVAL-GUNNERY | Naval Gunnery Trainer | Phase 1 Deep Dive | 🔄 In Progress |
| V-SMASH | [SMASH System] | Phase 2 | 🔄 Conceptual Design v1.1 |

---

## 🚀 QUICK START COMMANDS

### Dự án mới
```
"Tạo dự án mới: [Tên] - [Mô tả ngắn]"
```

### Tiếp tục dự án
```
"Tiếp tục dự án [mã VN-XXX]"
"Chuyển sang Phase [N] cho [mã dự án]"
```

### Review và học tập
```
"D-M-I-R reflection cho tuần này"
"Review tiến độ mastery"
"Tổng hợp lessons learned từ [dự án]"
```

### Tạo tài liệu
```
"Tạo presentation cho [dự án]"
"Export requirements list thành Word"
"Tạo cost analysis report"
```

---

## 📊 MASTERY TRACKING

### Current Level: **Competent (Level 3)**

| Phase | Mastery | Evidence |
|-------|---------|----------|
| Task Clarification | ⭐⭐⭐⭐ | 13+ projects với comprehensive requirements |
| Conceptual Design | ⭐⭐⭐ | V-SMASH VDI 2225 evaluation, morphological matrices |
| Embodiment Design | ⭐⭐ | Multiple layouts, DfX considerations |
| Detail Design | ⭐⭐ | BOM, specifications (cần thêm practice) |

### Next Learning Goals
1. Complete VDI 2225 evaluation cho 3 dự án nữa
2. Hoàn thành Phase 3 layout cho VN-TARGET-BB01
3. Tạo detail drawings cho một subsystem

---

## 🔧 SYSTEM MAINTENANCE

### Daily
- Update project status khi có tiến triển
- Log learning journal entries

### Weekly
- D-M-I-R micro-reflection (15 phút)
- Review và archive completed items

### Monthly
- Full D-M-I-R cycle review
- Update mastery assessment
- Archive lessons learned

---

*Hệ thống này được thiết kế để hỗ trợ KN Nguyen trong việc master Pahl & Beitz methodology cho defense/security product development, với tích hợp D-M-I-R framework cho accelerated learning.*
