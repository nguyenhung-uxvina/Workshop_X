# 🚀 QUICKSTART GUIDE
## Engineering Design System - Bắt đầu nhanh

---

## ⚡ 30 GIÂY - Bắt đầu ngay

### Tiếp tục dự án đang làm:
```
"Tiếp tục V-SMASH"
"Status VN-TARGET-BB01"
"Review tiến độ VN-RESCUE-DRONE-001"
```

### Bắt đầu dự án mới:
```
"Tạo dự án mới: [Tên sản phẩm] - [Mô tả ngắn]"
```

### Làm task cụ thể:
```
"Tạo requirements list cho [dự án]"
"Tạo function structure cho [hệ thống]"
"Đánh giá concepts với VDI 2225"
"Review DfM cho [thiết kế]"
```

---

## 📋 WORKFLOW CƠ BẢN

### 1. Bắt đầu dự án mới

```
Bạn: "Tạo dự án mới: Radar cảnh giới bờ biển"

Claude: 
1. Tạo project folder với code VN-XXX-XXX
2. Load SKILL_task_clarification.md
3. Hướng dẫn làm Requirements List
4. Tạo template files cần thiết
```

### 2. Tiến hành Task Clarification (Phase 1)

```
Bạn: "Tạo requirements list"

Claude:
1. Dẫn dắt qua 16 categories
2. Phân loại MUST/WISH
3. Đảm bảo quantified requirements
4. Check conflicts và completeness
5. Xuất file requirements_list.md
```

### 3. Conceptual Design (Phase 2)

```
Bạn: "Tạo function structure"
→ Claude dẫn dắt abstract, function breakdown

Bạn: "Tạo morphological matrix"
→ Claude hướng dẫn working principles, combinations

Bạn: "Đánh giá concepts"
→ Claude chạy VDI 2225 evaluation
```

### 4. Embodiment Design (Phase 3)

```
Bạn: "Thiết kế layout cho [component]"
→ Claude áp dụng basic rules, principles

Bạn: "Review DfX"
→ Claude check DfM, DfA, DfMaint, DfT

Bạn: "Chọn vật liệu"
→ Claude hướng dẫn material selection matrix
```

### 5. Learning & Reflection

```
Bạn: "D-M-I-R reflection"
→ Claude tạo weekly reflection template

Bạn: "Review tiến độ mastery"
→ Claude đánh giá competency levels
```

---

## 🎯 COMMANDS THEO PHASE

### Phase 1: Task Clarification
| Command | Kết quả |
|---------|---------|
| `"Tạo requirements list"` | Template + hướng dẫn 16 categories |
| `"Check requirements [dự án]"` | Validate completeness |
| `"Identify conflicts"` | Phát hiện mâu thuẫn |
| `"Add MIL-STD requirements"` | Map military standards |

### Phase 2: Conceptual Design
| Command | Kết quả |
|---------|---------|
| `"Abstract [vấn đề]"` | 5-step abstraction |
| `"Tạo function structure"` | Function breakdown + flows |
| `"Tạo morphological matrix"` | Working principles matrix |
| `"Đánh giá concepts"` | VDI 2225 evaluation |
| `"Sensitivity analysis"` | Weight sensitivity check |

### Phase 3: Embodiment Design
| Command | Kết quả |
|---------|---------|
| `"Thiết kế layout"` | Layout development guide |
| `"Review DfM"` | Manufacturing checklist |
| `"Review DfA"` | Assembly checklist |
| `"Chọn vật liệu"` | Material selection matrix |
| `"Check MIL-STD-810"` | Environmental compliance |

### Phase 4: Detail Design
| Command | Kết quả |
|---------|---------|
| `"Tạo BOM"` | Bill of Materials template |
| `"Verification plan"` | Test plan structure |
| `"Cost analysis"` | Cost breakdown |

### Learning & Meta
| Command | Kết quả |
|---------|---------|
| `"Weekly reflection"` | D-M-I-R reflection template |
| `"Monthly review"` | Progress assessment |
| `"Mastery status"` | Competency levels |
| `"Lessons learned [dự án]"` | Extract insights |

---

## 📁 CẤU TRÚC THƯ MỤC

```
engineering-design-system/
├── SYSTEM.md              ← Tổng quan hệ thống
├── QUICKSTART.md          ← File này
│
├── skills/                ← Progressive Disclosure skills
│   ├── SKILL_overview.md           (Layer 1 - Always loaded)
│   ├── SKILL_task_clarification.md (Layer 2 - On demand)
│   ├── SKILL_conceptual_design.md  (Layer 2)
│   ├── SKILL_embodiment_design.md  (Layer 2)
│   └── SKILL_dmir_learning.md      (Layer 2)
│
├── vault/                 ← Knowledge base (Obsidian-compatible)
│   ├── projects/          ← Từng dự án
│   │   ├── PROJECT_INDEX.md
│   │   └── VN-XXX-XXX/    ← Per-project folder
│   ├── templates/         ← Templates
│   └── learning-journal/  ← D-M-I-R reflections
│
├── scripts/               ← Tools & calculators
│   └── vdi2225_calculator.py
│
└── assets/                ← Images, diagrams, etc.
```

---

## 🔄 PROGRESSIVE DISCLOSURE

### Tầng 1: Luôn có sẵn
- `SKILL_overview.md` - Quick reference card
- Project index và status
- Basic commands

### Tầng 2: Load khi cần
- Chi tiết từng phase
- Templates cụ thể
- Reference documents

**Ví dụ**:
```
Bạn: "Tạo morphological matrix"
→ Claude auto-load SKILL_conceptual_design.md
→ Truy cập chi tiết morphological matrix section
→ Không load những thứ không liên quan
```

---

## 💡 TIPS & BEST PRACTICES

### 1. Bắt đầu với dự án thật
- Không học lý thuyết rồi mới làm
- Làm luôn, học trong lúc làm
- Imperfect action > Perfect planning

### 2. Feedback nhanh
- Dùng Claude review ngay sau khi viết
- Không đợi đến cuối tuần/tháng
- Fix issues trong cùng session

### 3. Document mọi thứ
- Ghi chép forces clarity
- Lessons learned có giá trị lâu dài
- Documentation = communication tool

### 4. Weekly reflection
- 15 phút mỗi tuần
- Tạo learning momentum
- Identify blockers sớm

### 5. Phase gates
- Không skip phases
- Quality gate trước khi chuyển phase
- "Slow" ở phase đầu = fast overall

---

## 🆘 TROUBLESHOOTING

### "Không biết bắt đầu từ đâu"
```
→ "Tiếp tục dự án [code có sẵn]"
hoặc
→ "Show PROJECT_INDEX"
hoặc
→ "Dự án nào nên ưu tiên?"
```

### "Bị stuck ở một task"
```
→ "Help me với [task cụ thể]"
→ "Explain [concept] đơn giản"
→ "Ví dụ về [method]"
```

### "Không hiểu methodology"
```
→ "Explain [phase/method] như cho người mới"
→ "Show ví dụ [method] trong defense context"
→ "So sánh [concept A] với [concept B]"
```

### "Muốn track progress"
```
→ "Mastery status"
→ "Weekly reflection"
→ "So sánh với tuần trước"
```

---

## 📞 QUICK REFERENCE CARD

```
┌────────────────────────────────────────────────────────┐
│ PAHL & BEITZ 4 PHASES                                  │
├────────────────────────────────────────────────────────┤
│ Phase 1: Task Clarification → Requirements List        │
│ Phase 2: Conceptual Design → Selected Concept          │
│ Phase 3: Embodiment Design → Definitive Layout         │
│ Phase 4: Detail Design → Production Documentation      │
├────────────────────────────────────────────────────────┤
│ D-M-I-R MICRO-CYCLE                                    │
├────────────────────────────────────────────────────────┤
│ D = Diagnose (What's the real problem?)                │
│ M = Model (How does the system work?)                  │
│ I = Intervene (Where's the leverage point?)            │
│ R = Reflect (What did we learn?)                       │
├────────────────────────────────────────────────────────┤
│ VDI 2225 SCORING                                       │
├────────────────────────────────────────────────────────┤
│ 0 = Unsatisfactory | 1 = Tolerable | 2 = Adequate      │
│ 3 = Good | 4 = Very good (ideal)                       │
│ Target: ≥70% for defense products                      │
├────────────────────────────────────────────────────────┤
│ DEFENSE STANDARDS                                      │
├────────────────────────────────────────────────────────┤
│ MIL-STD-810: Environmental | MIL-STD-461: EMC          │
│ MIL-STD-882: Safety | MIL-STD-1472: Human factors      │
└────────────────────────────────────────────────────────┘
```

---

*Bắt đầu ngay - "Tiếp tục [dự án]" hoặc "Tạo dự án mới"*
