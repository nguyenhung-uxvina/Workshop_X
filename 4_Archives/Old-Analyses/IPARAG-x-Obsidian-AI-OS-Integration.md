# IPARAG × Obsidian AI Operating System — Tích hợp chiến lược

> **Mục tiêu**: Biến vault IPARAG từ **bản đồ tĩnh** thành **hệ điều hành sống** — nơi Claude Code đọc, viết, hành động trực tiếp trên knowledge, behavior, và action layers mà không rời Obsidian.
>
> **Nguyên tắc cốt lõi**: AI OS không thêm layer mới lên IPARAG. AI OS **nhúng vào mỗi layer** của IPARAG, biến mỗi folder từ nơi lưu trữ thành nơi agent có thể tác động.

---

## 1. KIẾN TRÚC TÍCH HỢP: IPARAG × 3-LAYER AI OS

```
┌────────────────────────────────────────────────────────────────────┐
│                  IPARAG AI OPERATING SYSTEM                        │
│                                                                    │
│  ┌──────────────────────────────────────────────────────────────┐  │
│  │  LAYER 3: ACTION — .claude/ ecosystem                        │  │
│  │  Skills (research, review, gate-prep, daily-review)          │  │
│  │  Hooks (post-session compound learning)                      │  │
│  │  Agents (FORGE-analyst, HELIX-reviewer, BRIDGE-ops)          │  │
│  │  CLI (obsidian read/create/search/append)                    │  │
│  │  MCP (live vault context → Claude Code)                      │  │
│  └──────────────────────┬───────────────────────────────────────┘  │
│                         │ đọc behavior rules                       │
│  ┌──────────────────────▼───────────────────────────────────────┐  │
│  │  LAYER 2: BEHAVIOR — CLAUDE.md + .claude/rules/              │  │
│  │  Root CLAUDE.md: vault map, conventions, active priorities    │  │
│  │  Path rules: Projects/, Galaxy/, Areas/HELIX/                │  │
│  │  Product CLAUDE.md: BB-01/, MTB-20/, TDR/ (per-project)     │  │
│  │  Compound Law awareness: BRIDGE × FORGE × HELIX ≠ 0         │  │
│  └──────────────────────┬───────────────────────────────────────┘  │
│                         │ tham chiếu knowledge                     │
│  ┌──────────────────────▼───────────────────────────────────────┐  │
│  │  LAYER 1: KNOWLEDGE — IPARAG structure                       │  │
│  │  I = Inbox (captures)                                        │  │
│  │  P = Projects (deadline-driven, physical gates)              │  │
│  │  A = Areas (BRIDGE × FORGE × HELIX + CEO-Self)              │  │
│  │  R = Resources (SOPs, frameworks, AI-infra, tech-refs)       │  │
│  │  A = Archives (completed, superseded)                        │  │
│  │  G = Galaxy (atomic insights, flat, tag-based)               │  │
│  └──────────────────────────────────────────────────────────────┘  │
│                                                                    │
│  INTERFACE: Terminal plugin + MCP bridge bên trong Obsidian         │
│  GUARD RAILS: dP/dt tracking, Analyst Trap detection               │
└────────────────────────────────────────────────────────────────────┘
```

### Tại sao tích hợp này là high-leverage (L4 — System Structure)

IPARAG hiện tại là **passive filing system** — bạn đặt notes vào đúng chỗ, bạn tìm khi cần. Khi nhúng AI OS vào, vault trở thành **active operating system**:

| Trước (Passive IPARAG) | Sau (IPARAG + AI OS) |
|---|---|
| Bạn mở `Projects/BB-01/Status.md` và đọc | Agent mở `Status.md`, so sánh với gate deadline, cảnh báo nếu trễ |
| Bạn viết Galaxy note sau khi analyze | Agent tự extract Three Laws từ analysis → tạo atomic note → link |
| Bạn nhớ kiểm tra dP/dt hàng tháng | Agent chạy monthly check, cảnh báo nếu "zero physical activity" |
| Bạn tự tìm cross-domain connections | Agent scan Galaxy tags, đề xuất connections bạn chưa thấy |
| CLAUDE.md mô tả chiến lược | CLAUDE.md + skills = agent thực thi chiến lược |

**Multiplier estimate**: 8–15x session throughput. Compound effect qua D-M-I-R cycles.

---

## 2. CẤU TRÚC THƯ MỤC TÍCH HỢP

```
WorkshopX-Vault/
│
├── CLAUDE.md                           ← ROOT BEHAVIOR (Layer 2)
│
├── .claude/                            ← ACTION LAYER (Layer 3)
│   ├── skills/
│   │   ├── obsidian-markdown/          ← Kepano official skills
│   │   ├── obsidian-bases/
│   │   ├── obsidian-cli/
│   │   ├── json-canvas/
│   │   ├── research-pipeline/          ← Custom: URL → structured note
│   │   ├── gate-review-prep/           ← Custom: prep gate review package
│   │   ├── daily-review/               ← Custom: EOD summary + learning log
│   │   ├── analyst-trap-detector/      ← Custom: check dP/dt, warn if 0
│   │   ├── galaxy-note-creator/        ← Custom: extract insight → atomic note
│   │   ├── three-laws-extractor/       ← Custom: analysis → 3 laws → Galaxy
│   │   └── monthly-health-check/       ← Custom: 5 câu kiểm tra chiến lược
│   │
│   ├── rules/
│   │   ├── projects.md                 ← Rules khi agent làm việc trong Projects/
│   │   ├── galaxy.md                   ← Rules khi agent tạo/sửa Galaxy notes
│   │   ├── areas-helix.md             ← Rules cho HELIX physical validation
│   │   └── resources.md               ← Rules cho Resources management
│   │
│   ├── agents/
│   │   ├── forge-analyst.md           ← Product strategy analysis agent
│   │   ├── helix-reviewer.md          ← Design execution review agent
│   │   └── bridge-ops.md             ← Operations / compliance agent
│   │
│   ├── hooks/
│   │   ├── post-session.sh           ← Auto-log learnings + dP/dt check
│   │   └── session-start.sh          ← Read learnings.md + current priorities
│   │
│   └── settings.json                  ← Permissions, MCP config
│
├── Inbox/                              ← (I) — Quick captures
│
├── Projects/                           ← (P) — Deadline-driven
│   ├── PROTOTYPE-BB01-Rev[X]/
│   │   ├── CLAUDE.md                  ← Per-project behavior
│   │   ├── Status.md                  ← P-B phase, next gate, blocking constraint
│   │   ├── Design-Brief.md
│   │   ├── Test-Results/
│   │   └── Gate-Review-Package/
│   ├── PROTOTYPE-AICC-Standalone-v1/
│   ├── V-SMASH-[Phase]/
│   ├── MTB20-[Phase]/
│   ├── TDR-[Phase]/
│   ├── ACH-Thesis-Publication/
│   ├── CORTEX-MVP-Spec/
│   ├── HELIX-Skill-Map-v2/
│   └── Media-Phase-Activation/
│
├── Areas/                              ← (A) — Ongoing responsibilities
│   ├── BRIDGE/                        ← Operations
│   │   ├── Finance/
│   │   ├── Team-People/
│   │   ├── Viettel-Relationship/
│   │   └── Defense-Ecosystem-Vietnam/
│   ├── FORGE/                         ← Product Strategy
│   │   ├── ACH-Design-Principle/
│   │   ├── Product-Portfolio/
│   │   ├── Technology-Roadmap/
│   │   └── IP-Strategy/
│   ├── HELIX/                         ← Design Execution ← BINDING CONSTRAINT
│   │   ├── Skill-Map-Current.md
│   │   ├── Physical-Validation-Log.md ← dP/dt tracker — AI monitored
│   │   ├── HELIX-Weekly-Practice.md
│   │   └── Design-Review-Log/
│   └── CEO-Self/
│       ├── Compound-Skill-Stack/
│       ├── Learning-Architecture/
│       ├── Health-Energy/
│       └── Network-Trust-Capital/
│
├── Resources/                          ← (R) — Reusable references
│   ├── Framework-Library/
│   │   ├── THINH/
│   │   ├── ARCHITECT/
│   │   ├── BRIDGE-Framework/
│   │   ├── FORGE-Framework/
│   │   └── Three-Laws-Collection/
│   ├── Deep-Content-Analyzer-Outputs/
│   ├── AI-Infrastructure/
│   │   ├── Prompts-Library/
│   │   ├── MCP-Configs/
│   │   └── Skills-Active/
│   ├── Technical-References/
│   │   ├── Pahl-Beitz-Methodology/
│   │   ├── MIL-STD-STANAG/
│   │   └── ACH-Research/
│   ├── Competitive-Intelligence/
│   └── SOPs/
│       ├── Gate-Review-Protocol/
│       ├── Design-Review-Checklist/
│       └── Prototype-Documentation-Standard/
│
├── Galaxy/                             ← (G) — Flat atomic insights
│   ├── [atomic-note-1].md             ← Flat structure, tag-based
│   ├── [atomic-note-2].md             ← ≥2 links per note
│   └── ...
│
├── Archives/                           ← (A) — Completed/superseded
│
├── _meta/                              ← System health files
│   ├── learnings.md                   ← Compound learning log
│   ├── decisions.md                   ← Decision log with rationale
│   ├── vault-map.md                   ← Agent navigation guide
│   ├── system-health.md              ← Monthly 5-question check
│   └── dP-dt-dashboard.md            ← Physical validation tracker
│
└── Daily/                              ← Daily notes
    └── YYYY-MM-DD.md
```

---

## 3. ROOT CLAUDE.md — HÀNH VI GỐC CỦA AGENT

```markdown
# CLAUDE.md — Workshop X IPARAG AI Operating System

## Identity
Bạn đang vận hành bên trong vault Obsidian của Workshop X CEO.
Vault này theo cấu trúc IPARAG và phục vụ hệ thống phòng thủ/an ninh Việt Nam.

## Navigation
Đọc `_meta/vault-map.md` để hiểu cấu trúc folder.
IPARAG = Inbox → Projects → Areas → Resources → Archives → Galaxy.

## Compound Law
Workshop X vận hành theo BRIDGE × FORGE × HELIX.
- BRIDGE = Operations (tài chính, nhân sự, quan hệ)
- FORGE = Product Strategy (ACH thesis, product portfolio)
- HELIX = Design Execution (Pahl-Beitz, physical validation) ← CURRENT BINDING CONSTRAINT
- Zero trong bất kỳ pillar nào = zero tổng thể.

## Active Strategic Priorities
1. HELIX tại ~29% → cần tăng dP/dt (prototype iteration rate)
2. AICC Standalone prototype → phá vỡ circular dependency
3. BB-01 LOMAH → Gate 2 DfX Review approaching
4. ACH Thesis → cần physical validation data, không thêm analysis

## Agent Rules
- Đọc `_meta/vault-map.md` đầu mỗi session
- Đọc `_meta/learnings.md` để build on previous sessions
- Sau mỗi task: append learning vào `_meta/learnings.md`
- Dùng [[wikilinks]] cho mọi internal reference
- Luôn thêm YAML frontmatter cho notes mới
- Vietnamese cho nội dung nội bộ, English cho technical content
- KHÔNG BAO GIỜ expose defense project specifics ra external services

## Analyst Trap Guard
⚠️ Trước khi tạo thêm analysis/framework content, hỏi:
"Hành động này tạo ra physical validation data, hay thêm analytical content?"
Nếu chỉ analytical → cảnh báo CEO và đề xuất physical alternative.

## Galaxy Rules
- Galaxy notes phải trả lời ≥1 trong 3 câu:
  1. "Điều này thay đổi cách tôi thiết kế [product X] như thế nào?"
  2. "Điều này thay đổi quyết định chiến lược nào?"
  3. "Điều này cảnh báo tôi tránh trap nào?"
- Nếu không → chưa đủ distilled, đừng tạo permanent note.
- Mỗi Galaxy note ≥ 2 [[wikilinks]] tới notes khác.

## dP/dt Monitoring
Kiểm tra `Areas/HELIX/Physical-Validation-Log.md` mỗi session.
Nếu tháng hiện tại có 0 prototype iterations → cảnh báo ngay lập tức.

## Product Status (luôn cập nhật)
- BB-01 LOMAH: [Phase] | Next Gate: [date] | Blocking: [what]
- V-SMASH: [Phase] | Next Gate: [date]
- MTB-20: [Phase] | Next Gate: [date]
- TDR: [Phase] | Next Gate: [date]
- AICC Standalone: [Status] | Next Physical Milestone: [date]
```

---

## 4. CUSTOM SKILLS CHO IPARAG

### Skill 1: Analyst Trap Detector

```
📁 .claude/skills/analyst-trap-detector/SKILL.md
```

```markdown
---
name: analyst-trap-detector
description: Detect khi vault đang grow analytical content mà không có
  physical validation. Chạy tự động mỗi tuần hoặc khi được gọi.
  Triggers: "check analyst trap", "kiểm tra dP/dt", "vault health check",
  "analyst trap", "am I analyzing too much"
---

# Analyst Trap Detector

## Process
1. Đếm notes tạo mới trong 7 ngày qua theo loại:
   - Framework/analysis notes (trong Resources/ hoặc Galaxy/ với tag #sys, #meta)
   - Physical validation notes (trong Projects/ với test results, measurements)
2. Đọc `Areas/HELIX/Physical-Validation-Log.md` — lấy dP/dt tháng hiện tại
3. Đọc Projects/ — đếm projects có physical gate trong 30 ngày tới

## Alert Logic
- Nếu framework notes > physical notes × 3 → ⚠️ ANALYST TRAP ACTIVE
- Nếu dP/dt tháng này = 0 → 🔴 ZERO PHYSICAL VELOCITY
- Nếu zero projects có physical gate < 30 ngày → 🔴 NO UPCOMING GATES
- Nếu tất cả OK → ✅ Vault đang serve engineering, không chỉ analysis

## Output Format
```
## Analyst Trap Check — [date]
📊 7-day note creation: [X] analytical | [Y] physical validation
📈 dP/dt tháng này: [N] iterations
🚪 Projects với gate < 30 ngày: [list]
🔴/⚠️/✅ Status: [verdict]
💡 Recommendation: [specific action]
```

## Auto-append
Kết quả append vào `_meta/system-health.md`
```

### Skill 2: Three Laws Extractor

```
📁 .claude/skills/three-laws-extractor/SKILL.md
```

```markdown
---
name: three-laws-extractor
description: Extract "Three Laws" từ một Deep Content Analyzer output
  và tạo atomic Galaxy note. Triggers: "extract three laws", "trích xuất
  quy luật", "distill analysis", "tạo galaxy note từ analysis"
---

# Three Laws Extractor

## Process
1. Đọc analysis file được chỉ định
2. Identify top 3 transferable insights (Three Laws)
3. Cho mỗi law, tạo 1 atomic Galaxy note:
   - Tên file: `Galaxy/[Law-name-kebab-case].md`
   - YAML frontmatter:
     ```yaml
     ---
     title: "[Law name]"
     date: [YYYY-MM-DD]
     tags: [three-laws, source/analysis-[N], relevant-domain-tags]
     source: "Deep Content Analyzer #[N] — [Topic]"
     ---
     ```
   - Body: 3-5 sentences explaining the law
   - "Áp dụng cho Workshop X": 1 concrete application
   - ≥2 [[wikilinks]] to related Galaxy notes or Project notes
   - Answer check: which of the 3 Galaxy questions does this answer?
4. Update `Resources/Framework-Library/Three-Laws-Collection/` index
5. Log extraction vào `_meta/learnings.md`

## Quality Gate
Trước khi tạo note, hỏi: "Law này trigger design decision hay validate assumption nào?"
Nếu không trả lời được → chưa đủ distilled → refine trước khi tạo note.
```

### Skill 3: Gate Review Prep (IPARAG-aware)

```
📁 .claude/skills/gate-review-prep/SKILL.md
```

```markdown
---
name: gate-review-prep
description: Chuẩn bị Gate Review package cho defense products theo
  3-Gate Quality System. Đọc project status, SOPs, checklists → tạo
  review package. Triggers: "prep gate review", "chuẩn bị gate",
  "gate [1/2/3] review", "gate package for [product]"
---

# Gate Review Prep

## Process
1. Xác định product và gate number (G1 Concept / G2 DfX / G3 Pre-Production)
2. Đọc project folder: `Projects/[PRODUCT]-[Phase]/Status.md`
3. Đọc SOP: `Resources/SOPs/Gate-Review-Protocol/`
4. Đọc checklist: `Resources/SOPs/Design-Review-Checklist/`
5. Scan `Areas/HELIX/Design-Review-Log/` cho previous reviews của product này
6. Tạo Gate Review Package:

## Output Structure
```
Projects/[PRODUCT]-[Phase]/Gate-Review-Package/
├── Gate-[N]-Review-[date].md
│   ├── Product: [name]
│   ├── Gate: [G1/G2/G3]
│   ├── Pahl-Beitz Phase: [current]
│   ├── Checklist Status: [pass/fail per item]
│   ├── Open Issues: [list with severity]
│   ├── Physical Test Results: [summary + links]
│   ├── Blocking Constraints: [identified]
│   ├── Recommendation: PASS / CONDITIONAL / FAIL
│   └── Next Actions: [prioritized list]
```

7. Nếu physical test results = 0 → flag as ⚠️ trong package
8. Update `Projects/[PRODUCT]/Status.md` với gate review date
9. Log vào `_meta/decisions.md` nếu gate decision được made
```

### Skill 4: IPARAG Monthly Health Check

```
📁 .claude/skills/monthly-health-check/SKILL.md
```

```markdown
---
name: monthly-health-check
description: Chạy 5 câu kiểm tra chiến lược IPARAG hàng tháng.
  Triggers: "monthly check", "kiểm tra tháng", "vault health",
  "5 câu hỏi chiến lược", "IPARAG health"
---

# IPARAG Monthly Health Check

## 5 Câu Hỏi Chiến Lược

1. **Projects có ≥1 prototype project với physical milestone < 30 ngày?**
   → Scan Projects/ cho files có "Next physical milestone" hoặc "Next physical gate"
   → Không = Analyst Trap active

2. **Physical-Validation-Log tháng này có ≥ X prototype iterations?**
   → Đọc `Areas/HELIX/Physical-Validation-Log.md`
   → X = 0 là 🔴, X > 0 nhưng giảm so với tháng trước là ⚠️

3. **Galaxy tháng này có ≥5 permanent notes từ physical observations?**
   → Scan Galaxy/ cho notes created tháng này với tag #product
   → Nếu < 5 → Galaxy chỉ compound analytical thinking

4. **HELIX/Physical-Validation trend tăng hay giảm vs 3 tháng trước?**
   → So sánh dP/dt 3 tháng gần nhất
   → Giảm = binding constraint tệ hơn

5. **AICC Standalone: có physical test data mới trong 60 ngày?**
   → Scan Projects/PROTOTYPE-AICC-Standalone-v1/Test-Results/
   → Không = circular dependency chưa break

## Output
Tạo/update `_meta/system-health.md` với:
```
## Monthly Health — [Month Year]
1. Prototype with gate < 30d: [YES/NO] — [details]
2. dP/dt this month: [number] iterations
3. Galaxy physical notes: [number] / 5 target
4. HELIX trend: ↑ / ↓ / = vs 3 months ago
5. AICC physical data: [YES/NO] — last test: [date]

Overall: [✅ / ⚠️ / 🔴]
Actions needed: [list]
```

Append summary vào Daily note.
```

---

## 5. PATH-SPECIFIC RULES

### `.claude/rules/projects.md`

```markdown
# Rules for Projects/ folder

Khi làm việc trong Projects/:
- Luôn đọc Status.md của project trước khi làm bất kỳ điều gì
- Mỗi project PHẢI có: Pahl-Beitz phase, next physical gate date, blocking constraint
- Nếu project không có physical gate trong 30 ngày → cảnh báo: "Project này đang chuyển sang Area mode"
- Khi tạo file mới: frontmatter phải có tags #project/[product-name] và #gate/[current]
- Khi update Status.md: luôn cập nhật "last updated" date
- PROTOTYPE- prefix projects: ưu tiên physical milestone tracking trên tất cả
- Tất cả design decisions → log vào _meta/decisions.md với rationale
```

### `.claude/rules/galaxy.md`

```markdown
# Rules for Galaxy/ folder

Galaxy là flat structure — KHÔNG tạo subfolder.
Dùng tags thay vì folders:
  #acq #sys #pahl #defense #product #ceo #meta #three-laws #warning

Trước khi tạo Galaxy note, verify:
1. Note trả lời ≥1 trong 3 câu hỏi Workshop X? (design/strategy/trap)
2. Note có ≥2 [[wikilinks]] tới notes khác?
3. Note đã đủ distilled? (nếu > 300 words → có thể chưa atomic)

Khi tạo note:
- File name: kebab-case, descriptive, không prefix
- YAML: title, date, tags, source (nếu từ analysis)
- Body: 3-8 sentences. Insight, không phải summary.
- "Áp dụng cho Workshop X": 1 câu concrete
- Links section cuối note

KHÔNG tạo Galaxy note chỉ vì analysis hay framework mới.
Galaxy note = distilled insight có thể trigger action.
```

### `.claude/rules/areas-helix.md`

```markdown
# Rules for Areas/HELIX/ folder

HELIX là current binding constraint (~29%). Mọi thay đổi ở đây = high-leverage.

Physical-Validation-Log.md:
- Format: Tháng [X] [Year]:
  - Prototype iterations: [số]
  - Products với physical test: [list]
  - Products với zero activity: [list]
  - dP/dt vs tháng trước: ↑/↓/=
- Cập nhật ngay khi có test result mới
- Nếu "zero activity" list > 2 → flag trong daily note

Skill-Map-Current.md:
- Track Pahl-Beitz proficiency per phase: Level 1-4
- Update sau mỗi design review hoặc gate passage

HELIX-Weekly-Practice.md:
- Ghi nhận design execution practice tuần này
- "Practice" = prototype, test, gate review — KHÔNG phải reading/analysis
```

---

## 6. D-M-I-R INTEGRATION — AI OS COMPOUND CYCLES

Vault không chỉ store — vault enables D-M-I-R cycles tự động:

### Cycle Flow trong IPARAG AI OS

```
DIAGNOSIS (đọc vault)
  Agent reads:
  ├── _meta/system-health.md        → Overall vault health
  ├── Areas/HELIX/Physical-Validation-Log.md → dP/dt status
  ├── Projects/*/Status.md          → Product pipeline state
  └── _meta/learnings.md            → Previous cycle outputs
  │
  ▼
MODELING (phân tích patterns)
  Agent identifies:
  ├── Which Analyst Trap signals are active?
  ├── Which feedback loops dominate? (R1 research vs B1 complexity)
  ├── Where is the binding constraint now? (HELIX? FORGE? BRIDGE?)
  └── What leverage points are available?
  │
  ▼
INTERVENTION (thực hiện qua skills)
  Agent executes:
  ├── gate-review-prep      → Move products toward gates
  ├── three-laws-extractor  → Distill analysis → Galaxy
  ├── analyst-trap-detector → Warn if vault exceeding lab
  └── monthly-health-check  → Strategic alignment check
  │
  ▼
REFLECTION (compound learning)
  Agent writes:
  ├── _meta/learnings.md    → Session insight
  ├── _meta/decisions.md    → Decision + rationale
  ├── CLAUDE.md update      → Refined behavior for next cycle
  └── Galaxy note           → Permanent insight if warranted
  │
  ▼
  [Next cycle starts at higher sophistication level]
```

### Upward Spiral trong IPARAG context

| D-M-I-R Cycle | Focus Level | IPARAG Impact |
|---|---|---|
| Cycle 1 | Fix physical flows (L10) — setup vault structure, install skills | Agent có thể navigate và tạo notes đúng format |
| Cycle 2 | Information flows (L6) — MCP bridge, dP/dt dashboard | Agent thấy real-time context, không cần manual pointing |
| Cycle 3 | Rules (L5) — Analyst Trap detector, Galaxy quality gates | Agent tự enforce vault discipline |
| Cycle 4 | Goals (L3) — Monthly health check, HELIX prioritization | Agent align vault growth với physical validation goal |
| Cycle 5 | Paradigm (L2) — "Vault phục vụ lab, không phải ngược lại" | Agent cảnh báo khi mọi session kết thúc bằng analysis thay vì prototype status |

---

## 7. TRIỂN KHAI 3 TUẦN — KẾ HOẠCH TÍCH HỢP

### Tuần 1: Foundation — IPARAG Structure + AI OS Layer 1-2

| Ngày | Task | Deliverable | Thời gian |
|------|------|-------------|-----------|
| 1 | Install Terminal plugin, chạy Claude Code từ vault root | Claude Code hoạt động trong Obsidian | 30 min |
| 1 | Clone Kepano obsidian-skills vào `.claude/` | Agent hiểu Obsidian file formats | 15 min |
| 2 | Tạo folder structure IPARAG đầy đủ (theo bản đồ ở mục 2) | Vault có structure hoàn chỉnh | 45 min |
| 2 | Viết root CLAUDE.md (copy từ mục 3, customize) | Agent đọc và follow conventions | 30 min |
| 3 | Tạo `_meta/vault-map.md` + `_meta/learnings.md` + `_meta/decisions.md` | Agent navigation + compound learning infrastructure | 20 min |
| 3 | Tạo `Areas/HELIX/Physical-Validation-Log.md` — điền retroactively 3 tháng | dP/dt baseline established | 30 min |
| 4 | Tạo path rules: `projects.md`, `galaxy.md`, `areas-helix.md` | Agent behavior thay đổi theo folder | 30 min |
| 5 | Test: yêu cầu agent tạo Status.md cho BB-01 + 1 Galaxy note | Verify agent follows all rules | 30 min |
| 6-7 | Extract Three Laws từ 3 analyses đầu tiên (manually guided) | 9 Galaxy notes seeded | 60 min |

**Tuần 1 checkpoint**: Agent có thể navigate vault, tạo notes đúng format, follow path rules, và đọc CLAUDE.md tự động.

### Tuần 2: Action Layer — Custom Skills + Compound Loops

| Ngày | Task | Deliverable | Thời gian |
|------|------|-------------|-----------|
| 8 | Tạo `analyst-trap-detector` skill | Agent tự phát hiện Analyst Trap | 45 min |
| 9 | Tạo `three-laws-extractor` skill | Agent extract insights → Galaxy notes | 45 min |
| 9 | Extract Three Laws từ 4 analyses tiếp theo bằng skill mới | 12 thêm Galaxy notes (tổng ~21) | 60 min |
| 10 | Tạo `gate-review-prep` skill | Defense workflow automated | 45 min |
| 11 | Tạo `daily-review` skill + `post-session.sh` hook | Compound learning loop operational | 30 min |
| 12 | Install MCP plugin (obsidian-claude-code), connect Claude Code | Live vault context → agent | 45 min |
| 13 | Tạo `monthly-health-check` skill | 5 câu kiểm tra chiến lược automated | 30 min |
| 14 | Tuần 2 review: chạy analyst-trap-detector + health check lần đầu | Baseline health snapshot | 30 min |

**Tuần 2 checkpoint**: 5 custom skills operational, MCP bridge active, compound learning loop chạy, Analyst Trap detection online.

### Tuần 3: Compound + Strategic Activation

| Ngày | Task | Deliverable | Thời gian |
|------|------|-------------|-----------|
| 15 | Tạo per-project CLAUDE.md cho BB-01, AICC-Standalone | Project-specific agent behavior | 30 min |
| 16 | Extract Three Laws từ 4 analyses còn lại | Tổng 33+ Galaxy notes seeded | 60 min |
| 17 | Tạo FORGE-analyst agent (`agents/forge-analyst.md`) | Product strategy sub-agent | 30 min |
| 18 | Test full D-M-I-R cycle: agent chạy diagnosis → identifies constraint → proposes intervention → logs reflection | D-M-I-R loop verified end-to-end | 60 min |
| 19 | Setup THỊNH Daily Check (2 min/ngày) — integrate vào daily-review skill | Daily strategic alignment | 15 min |
| 20 | Full monthly health check — first complete run | Strategic health baseline | 30 min |
| 21 | Update CLAUDE.md based on 3 weeks of learnings.md | Behavior layer refined from real usage | 30 min |

**Tuần 3 checkpoint**: Full IPARAG AI OS operational. D-M-I-R cycles running. Agent proactively detects Analyst Trap, monitors dP/dt, prepares gate reviews, extracts Galaxy insights, và compounds learnings across sessions.

---

## 8. GUARD RAILS — CHỐNG ANALYST TRAP TRONG AI OS

AI OS có rủi ro riêng: agent rất giỏi tạo analysis, frameworks, notes — chính xác loại content mà Analyst Trap feed on. Guard rails đặc biệt:

### Guard Rail 1: dP/dt Gate trong CLAUDE.md

Agent PHẢI kiểm tra `Physical-Validation-Log.md` trước mỗi session. Nếu dP/dt = 0 trong tháng hiện tại → agent mở đầu session bằng cảnh báo:

```
⚠️ ZERO PHYSICAL VELOCITY tháng này.
Trước khi làm analysis/framework work, đề xuất: [physical action cụ thể]
Tiếp tục analytical work? Cần CEO confirm.
```

### Guard Rail 2: Galaxy Creation Gatekeeper

Mỗi Galaxy note phải pass 3-question test trước khi tạo. Agent tự hỏi và ghi answer vào note:

```yaml
---
galaxy_gate:
  changes_design: "Thay đổi cách thiết kế [X] bằng cách [Y]"
  changes_strategy: null  # hoặc specific answer
  warns_trap: null         # hoặc specific answer
  gate_passed: true        # ≥1 answer required
---
```

### Guard Rail 3: Weekly Ratio Check

Mỗi cuối tuần, `daily-review` skill tự động đếm:
- Notes tạo mới: analytical vs physical validation
- Nếu ratio > 3:1 analytical → append warning vào daily note

### Guard Rail 4: Session Exit Protocol

Trước khi kết thúc session, agent hỏi:
1. "Hôm nay có gì di chuyển product tới physical milestone?"
2. "Learning nào đã được log?"
3. "CLAUDE.md cần update gì?"

Nếu câu 1 = "không có gì" cho 3 sessions liên tiếp → escalate to full Analyst Trap alert.

---

## 9. FEEDBACK LOOP MAP — REINFORCING vs BALANCING

```
REINFORCING LOOPS (muốn tăng cường):

R1: Agent Research → Galaxy Growth
    Agent researches → notes created → more context → better research → more notes
    ⚠️ Risk: feeds Analyst Trap if unchecked by Guard Rail 2

R2: Compound Learning
    Session → learning logged → next session reads it → better output → deeper learning
    ✅ Pure positive — no downside

R3: Skill Composition
    Build skill → use it → find edge case → improve → compose with other skills
    ✅ Each skill makes the next one easier to build

R4: Gate Review → Product Progress
    Gate prep → review → pass/fail → next milestone → closer to delivery
    ✅ This is the loop that matters most — directly increases dP/dt

R5: Galaxy Cross-Linking
    More atomic notes → more connection opportunities → serendipity → insights
    ⚠️ Only valuable if notes come from physical observations, not just analysis


BALANCING LOOPS (muốn kiểm soát):

B1: Context Window Pressure
    More skills + rules + CLAUDE.md → longer context → slower agent → simplification pressure
    → Mitigation: modular rules, per-project CLAUDE.md, prune unused skills quarterly

B2: Maintenance Drag
    More vault notes → more staleness → pruning needed → less building time
    → Mitigation: 3-month archive rule, monthly health check skill

B3: Analyst Trap Attractor
    Agent tạo analysis → feels productive → more analysis requested → dP/dt stays 0
    → Mitigation: Guard Rails 1-4, analyst-trap-detector skill
```

**Dominance goal**: R4 (Gate Review → Product Progress) phải luôn dominate R1 (Research → Galaxy Growth). Nếu R1 > R4 → vault đang serve analysis, không serve engineering.

---

## 10. QUICK-START TONIGHT

```bash
# 1. Navigate to vault
cd /path/to/WorkshopX/vault

# 2. Install Kepano skills
git clone https://github.com/kepano/obsidian-skills.git /tmp/obs-skills
mkdir -p .claude/skills .claude/rules .claude/agents .claude/hooks
cp -r /tmp/obs-skills/.claude/* .claude/

# 3. Create IPARAG folders
mkdir -p Inbox Projects Areas/{BRIDGE,FORGE,HELIX,CEO-Self} \
  Resources/{Framework-Library,AI-Infrastructure,Technical-References,SOPs} \
  Galaxy Archives _meta Daily

# 4. Create CLAUDE.md (paste from Section 3 above)
# 5. Create _meta files
echo "# Learnings Log\n\n---" > _meta/learnings.md
echo "# Decision Log\n\n---" > _meta/decisions.md
echo "# System Health\n\n---" > _meta/system-health.md

# 6. Create Physical Validation Log
cat > Areas/HELIX/Physical-Validation-Log.md << 'EOF'
# Physical Validation Log — dP/dt Tracker

## Tháng 3 2026
- Prototype iterations: [điền số]
- Products có physical test: [list]
- Products zero activity: [list]
- dP/dt vs tháng trước: [↑/↓/=]
EOF

# 7. Start Claude Code
claude
```

Trong Claude Code, chạy:
```
> Đọc CLAUDE.md và scan vault structure. Cho tôi biết bạn thấy gì, 
> cái gì còn thiếu, và đề xuất 3 hành động tiếp theo.
```

---

*IPARAG × Obsidian AI OS | Workshop X Strategic Integration*
*Framework: Skills Mastery System + D-M-I-R Compound Cycles*
*Guard Rails: Analyst Trap Detection + dP/dt Monitoring + Galaxy Quality Gates*
*Quy tắc cuối: Vault tốt nhất là vault khiến bạn muốn đóng laptop và ra lab — AI OS giúp bạn làm điều đó nhanh hơn.*
