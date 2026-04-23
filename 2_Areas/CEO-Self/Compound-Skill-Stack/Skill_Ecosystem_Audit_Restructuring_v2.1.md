# RÀ SOÁT & TÁI CẤU TRÚC HỆ SINH THÁI SKILL — WORKSHOP X
## Kiểm Toán Toàn Diện: 29 Skills Hiện Tại + 10 Skills Đề Xuất Mới

**Ngày:** 01/03/2026  
**Mục đích:** Đảm bảo đồng bộ, thống nhất và toàn vẹn cho hệ sinh thái skill phục vụ CEO Workshop X.

---

## I. TỔNG QUAN KIỂM TOÁN

### Số liệu hiện trạng

| Metric | Giá trị | Đánh giá |
|--------|---------|----------|
| Tổng skills hiện tại | 29 | Nhiều — cần consolidation |
| Skills vượt 500 dòng | 3 (10%) | ⚠️ Vi phạm progressive disclosure |
| Skills dưới 100 dòng | 1 (3%) | ⚠️ Quá mỏng — thiếu content |
| Skills có cross-references | 1/29 (3%) | 🔴 CRITICAL — chỉ deep-content-analyzer liên kết |
| Skills có Vietnamese triggers | 3/29 (10%) | 🔴 CRITICAL — CEO nói tiếng Việt |
| Skills proposed mới | 10 | Cần filter — không tạo tất cả |
| Functional overlaps | 4 cặp | ⚠️ Cần merge hoặc phân biệt rõ |

### 7 Vấn đề hệ thống

| # | Vấn đề | Severity | Ảnh hưởng |
|---|--------|----------|-----------|
| 1 | **Isolated skills (28/29 không cross-ref)** | 🔴 CRITICAL | Skills không biết về nhau → duplicate logic, missed opportunities |
| 2 | **Missing Vietnamese triggers (26/29)** | 🔴 CRITICAL | CEO dùng tiếng Việt → skills không trigger khi cần |
| 3 | **No CEO layer — skills thiết kế cho "student" không phải "CEO"** | 🔴 CRITICAL | 15 engineering-* skills dạy methodology → CEO cần EXECUTE, không cần học |
| 4 | **3 skills vượt 500 dòng** | ⚠️ MEDIUM | Chậm loading, vi phạm progressive disclosure |
| 5 | **4 cặp functional overlap** | ⚠️ MEDIUM | Trigger confusion, duplicate effort |
| 6 | **Naming inconsistency** | ⚠️ LOW | 3 prefix patterns (engineering-*, cad-*, no-prefix) |
| 7 | **10 new skills proposed nhưng 8 chưa cần** | ⚠️ MEDIUM | Analyst Trap risk — tạo skill thay vì dùng skill |

---

## II. KIỂM TOÁN CHI TIẾT TỪNG SKILL

### A. Skills GIỮNGUYÊN — Hoạt động tốt, đúng scope

| Skill | Lines | Pattern | Cluster | Verdict |
|-------|-------|---------|---------|---------|
| `deep-content-analyzer` | 230 | Orchestrating | Analysis | ✅ Core orchestrator — chỉ cần cập nhật MASTER_PROMPT |
| `stock-flow-mapper` | 744 | Analytical | Systems | ⚠️ Giữ nhưng cần split (xem mục III) |
| `feedback-loop-detector` | 262 | Analytical | Systems | ✅ Đúng scope, đúng size |
| `meadows-leverage-analyzer` | 219 | Analytical | Systems | ✅ Đúng scope, đúng size |
| `pahl-beitz-mastery` | 408 | Mentoring | HELIX | ✅ Domain master — nền tảng |
| `requirements-abstraction-mentor` | 439 | Mentoring | HELIX | ✅ Phase 1 specialist |
| `cad-visualization-freecad` | 162 | CAD/Technical | CAD | ✅ MCP-dependent, đúng scope |
| `cad-review-automation` | 167 | Evaluative | CAD | ✅ DfX checking |
| `cad-documentation-generator` | 341 | Generative | CAD | ✅ Technical docs |
| `design-iteration-assistant` | 167 | CAD/Technical | CAD | ✅ CAD improvement |
| `dmir-defense-systems-mentor` | 320 | Mentoring | Org | ✅ Organizational analysis |
| `agent-team-builder` | 321 | Orchestrating | Infra | ✅ Multi-agent systems |
| `ai-infra-security-hardening` | 380 | Procedural | Infra | ✅ Security specialist |

### B. Skills CẦN SỬA — Hoạt động nhưng có issues

| Skill | Issue | Action Required |
|-------|-------|----------------|
| `engineering-learning-architecture-builder` | 797 dòng (vượt 500) | **SPLIT**: core workflow trong SKILL.md (≤400), templates/examples vào `references/` |
| `engineering-systems-mapper` | 525 dòng (vượt 500) | **TRIM**: overlap với stock-flow-mapper. Giữ phần engineering-specific, remove generic systems mapping |
| `stock-flow-mapper` | 744 dòng (vượt 500) | **SPLIT**: core method (≤400), extended examples vào `references/stock-flow-examples.md` |
| `quality-gate-reporter` | 78 dòng (quá mỏng) | **EXPAND** hoặc **MERGE** vào `ai-validation-gate` khi tạo |
| `compound-engineering` | Overlap với skills-mastery-system | **CLARIFY**: compound-engineering = AI agent learning. skills-mastery-system = human learning. Add explicit boundary. |
| `skills-mastery-system` | Overlap với compound-engineering | **CLARIFY**: Add "Use when HUMAN wants to master, not when AI agent needs to learn" |

### C. 15 engineering-* Skills — RESTRUCTURING PROPOSAL

Đây là phát hiện quan trọng nhất: **15 engineering-* skills được thiết kế cho "student learning Pahl-Beitz" nhưng CEO đã qua giai đoạn learning.** CEO cần EXECUTE, không cần thêm theory.

**Hiện trạng:**

```
engineering-feynman                    → Dạy CEO explain simply
engineering-chunking-breakdown         → Dạy CEO break down topics  
engineering-mnemonic-creator           → Tạo mnemonics
engineering-self-assessment-rubric-gen → Tạo rubrics
engineering-interleaving-scheduler     → Tạo lịch học
engineering-targeted-drill-master      → Tạo bài tập
engineering-learning-architecture-bld  → Thiết kế learning path
engineering-learning-journal-keeper    → Ghi nhật ký học tập
engineering-design-review-mentor       → Review thiết kế
engineering-concept-evaluation-asst    → Đánh giá concept
engineering-project-progress-tracker   → Theo dõi tiến độ learning
engineering-focus-session-optimizer    → Tối ưu session
engineering-systems-mapper             → Map hệ thống
```

**Vấn đề:** 13/15 skills này có vai trò kép:
1. **Cho deep-content-analyzer** — khi phân tích bài viết, chúng được gọi để tạo mnemonics, rubrics, drills, schedules. Vai trò này VẪN CẦN.
2. **Cho CEO trực tiếp** — khi CEO muốn tạo rubric cho team hoặc schedule cho mình. Vai trò này ÍT DÙNG HƠN vì CEO cần EXECUTE.

**Đề xuất: KHÔNG XÓA nhưng RE-ROLE**

| Hành động | Skills | Lý do |
|-----------|--------|-------|
| **Giữ nguyên** cho deep-content-analyzer | Tất cả 15 | Orchestrator vẫn gọi chúng khi phân tích content |
| **Thêm cross-ref** từ design-sprint-driver | feynman, design-review-mentor, concept-evaluation-assistant | Khi CEO EXECUTE, 3 skills này hỗ trợ trực tiếp |
| **Thêm cross-ref** từ decision-teaching-engine | feynman, learning-journal-keeper | Khi CEO TEACH, 2 skills này hỗ trợ |
| **Thêm cross-ref** từ integration-architecture | concept-evaluation-assistant, systems-mapper | Coupling analysis + system visualization |
| **KHÔNG tạo thêm engineering-* skills mới** | — | Đã đủ cho learning cluster |

---

## III. ĐỀ XUẤT CẤU TRÚC MỚI — 4 LAYERS

### Layer 0: Infrastructure (Ít thay đổi)

```
agent-team-builder           [Orchestrating]  — Multi-agent systems
ai-infra-security-hardening  [Procedural]     — Security
skill-creator (examples/)    [Meta]           — Create new skills
```

**Action:** Không thay đổi. Dùng khi cần.

### Layer 1: Analytical Engine (Foundation)

```
deep-content-analyzer        [Orchestrating]  — Master orchestrator cho analysis
  ├── stock-flow-mapper      [Analytical]     — Stocks, flows, constraints
  ├── feedback-loop-detector [Analytical]     — R/B loops, archetypes
  ├── meadows-leverage-analyzer [Analytical]  — 12 leverage points
  └── skills-mastery-system  [Mentoring]      — Human skill acceleration

13 engineering-* skills      [Various]        — Sub-tools gọi bởi orchestrator
```

**Actions:**
1. `stock-flow-mapper`: Split → core (400 lines) + `references/stock-flow-examples.md`
2. `engineering-learning-architecture-builder`: Split → core (400 lines) + `references/learning-path-templates.md`
3. `engineering-systems-mapper`: Trim → 400 lines, remove overlap with stock-flow-mapper
4. Thêm Vietnamese triggers cho 13 engineering-* skills (batch update descriptions)

### Layer 2: Domain Frameworks (HELIX / FORGE / BRIDGE)

```
HELIX (Design Method):
  pahl-beitz-mastery           [Mentoring]     — Methodology master
  requirements-abstraction-mentor [Mentoring]  — Phase 1
  engineering-concept-evaluation-assistant      — Phase 2 (shared with Layer 1)
  integration-architecture ✅   [Governance]   — Cross-domain integration

FORGE (Product Readiness):  
  dmir-defense-systems-mentor   [Mentoring]    — Enterprise-level analysis
  quality-gate-reporter         [Procedural]   — Gate logging
  → ai-validation-gate ❌ NEW  [Gate]          — FORGE-F deployment gate
  → fallback-designer ❌ NEW   [Generative]    — Fallback mechanism design

BRIDGE (Operations/Knowledge):
  compound-engineering          [Orchestrating] — AI agent compound learning
  → signal-knowledge-pipeline ❌ NEW [Pipeline] — Knowledge capture & retrieval

CAD/Technical:
  cad-visualization-freecad     [CAD/Technical]
  cad-review-automation         [Evaluative]
  cad-documentation-generator   [Generative]
  design-iteration-assistant    [CAD/Technical]
```

**Actions:**
1. `quality-gate-reporter` (78 lines): EXPAND — add integration gates, add FORGE-F gate reference
2. `integration-architecture` ✅ — Already created, deploy
3. `ai-validation-gate` ❌ — Create (HIGH PRIORITY — safety)
4. `fallback-designer` ❌ — Create when first ACH product needs fallback design
5. `signal-knowledge-pipeline` ❌ — Create when PARA × Obsidian implementation starts

### Layer 3: CEO Operating System (MỚI — the key addition)

```
① design-sprint-driver ❌ NEW  [Execution]    — HIGHEST PRIORITY
② integration-architecture ✅  [Governance]   — Already created
③ decision-teaching-engine ❌ NEW [Compound]   — HIGH PRIORITY  
④ ai-validation-gate ❌ NEW    [Gate]          — HIGH PRIORITY
⑤ signal-knowledge-pipeline ❌ NEW [Pipeline]  — MEDIUM PRIORITY
```

**Đây là layer KHÔNG TỒN TẠI trong hệ thống hiện tại.** 29 skills hiện có phục vụ "learner" và "analyst." Layer 3 phục vụ "CEO doing work."

---

## IV. 26 SKILLS CẦN CẬP NHẬT VIETNAMESE TRIGGERS

Batch update mô tả cho 26 skills thiếu Vietnamese triggers. Format: thêm vào cuối description hiện tại.

| Skill | Vietnamese Triggers Cần Thêm |
|-------|------------------------------|
| `stock-flow-mapper` | "tích lũy", "dòng chảy hệ thống", "nút thắt", "ràng buộc" |
| `feedback-loop-detector` | "vòng phản hồi", "tại sao lặp lại", "vòng xoắn", "archetype" |
| `meadows-leverage-analyzer` | "điểm đòn bẩy", "can thiệp ở đâu", "nguyên nhân gốc" |
| `engineering-feynman` | "giải thích đơn giản", "kiểm tra hiểu biết" |
| `engineering-chunking-breakdown` | "chia nhỏ chủ đề", "cảm thấy quá tải" |
| `engineering-mnemonic-creator` | "ghi nhớ", "tạo mnemonic", "nhớ công thức" |
| `engineering-self-assessment-rubric-generator` | "tự đánh giá", "rubric", "checklist chất lượng" |
| `engineering-interleaving-scheduler` | "lịch học", "xen kẽ chủ đề", "kế hoạch học tập" |
| `engineering-targeted-drill-master` | "bài tập thực hành", "luyện tập điểm yếu" |
| `engineering-learning-architecture-builder` | "lộ trình học tập", "kế hoạch học" |
| `engineering-learning-journal-keeper` | "nhật ký học tập", "ghi lại bài học" |
| `engineering-concept-evaluation-assistant` | "đánh giá phương án", "so sánh concept", "VDI 2225" |
| `engineering-focus-session-optimizer` | "tối ưu phiên làm việc", "mất tập trung" |
| `engineering-systems-mapper` | "bản đồ hệ thống", "hệ quả không lường" |
| `engineering-targeted-drill-master` | "bài tập", "luyện tập", "điểm yếu" |
| `pahl-beitz-mastery` | "phương pháp thiết kế hệ thống", "Pahl Beitz tiếng Việt" |
| `requirements-abstraction-mentor` | "trừu tượng hóa yêu cầu", "bài toán bản chất" |
| `deep-content-analyzer` | "phân tích sâu", "phân tích đa khung", "trích xuất insight" |
| `cad-visualization-freecad` | "tạo mô hình 3D", "bản vẽ chi tiết", "bản vẽ lắp" |
| `cad-review-automation` | "kiểm tra bản vẽ", "review DfX", "đánh giá manufacturability" |
| `cad-documentation-generator` | "tạo bản vẽ 2D", "tài liệu kỹ thuật" |
| `design-iteration-assistant` | "cải tiến thiết kế", "sửa bản vẽ", "update revision" |
| `dmir-defense-systems-mentor` | "phân tích doanh nghiệp quốc phòng", "tối ưu sản xuất" |
| `agent-team-builder` | "tạo đội agent", "đa agent" |
| `quality-gate-reporter` | "báo cáo gate", "kiểm tra chất lượng" |
| `skills-mastery-system` | "thành thạo kỹ năng", "vượt qua điểm nghẽn học tập" |

---

## V. CROSS-REFERENCE MAP — PHẢI CÓ

Đây là vấn đề lớn nhất: **28/29 skills là đảo cô lập.** Chỉ deep-content-analyzer biết các skills khác tồn tại.

### Cross-references bắt buộc thêm vào từng skill:

**Systems Thinking Cluster — Internal cross-refs:**
```
stock-flow-mapper         → reads: feedback-loop-detector, meadows-leverage-analyzer
feedback-loop-detector    → reads: stock-flow-mapper, meadows-leverage-analyzer
meadows-leverage-analyzer → reads: stock-flow-mapper, feedback-loop-detector
```

**HELIX Cluster — Internal cross-refs:**
```
pahl-beitz-mastery              → reads: requirements-abstraction-mentor
                                → feeds: engineering-concept-evaluation-assistant
requirements-abstraction-mentor → feeds: pahl-beitz-mastery (Phase 1 → Phase 2)
engineering-concept-evaluation  → reads: pahl-beitz-mastery (VDI 2225 context)
```

**CAD Cluster — Internal cross-refs:**
```
cad-visualization-freecad    → feeds: cad-review-automation, cad-documentation-generator
cad-review-automation        → reads: cad-visualization-freecad output
                             → feeds: design-iteration-assistant
design-iteration-assistant   → reads: cad-review-automation findings
                             → feeds: cad-visualization-freecad (updated model)
cad-documentation-generator  → reads: cad-visualization-freecad output
```

**Cross-cluster references (NEW — most important):**
```
integration-architecture     → reads: stock-flow-mapper, engineering-concept-evaluation
                             → feeds: quality-gate-reporter, cad-documentation-generator

pahl-beitz-mastery           → reads: integration-architecture (ICD integration)
                             → feeds: cad-visualization-freecad (embodiment output)

dmir-defense-systems-mentor  → reads: stock-flow-mapper, feedback-loop-detector
                             → feeds: pahl-beitz-mastery (enterprise context)

compound-engineering         → reads: engineering-learning-journal-keeper
                             → feeds: skills-mastery-system (learnings → acceleration)
```

---

## VI. 10 PROPOSED NEW SKILLS — FILTER & PRIORITIZE

### Danh sách đầy đủ với quyết định

| # | Skill | Decision | Lý do |
|---|-------|----------|-------|
| 1 | `design-sprint-driver` | ✅ **TẠO NGAY** | Pump cho toàn hệ thống. Chống Analyst Trap. |
| 2 | `ai-validation-gate` | ✅ **TẠO NGAY** | Safety-critical. LOMAH-AD ở Fallback Level 0. |
| 3 | `decision-teaching-engine` | ✅ **TẠO TUẦN 3-4** | 2x accelerator. R5-Teaching dormant. |
| 4 | `6-flow-function-builder` | ❌ **KHÔNG TẠO RIÊNG** | **Merge vào `integration-architecture` Mode 3.** Không cần skill riêng — 6-flow là 1 phase trong integration workflow, không phải standalone tool đủ lớn. |
| 5 | `fallback-designer` | ⏸️ **TẠO KHI CẦN** | Tạo khi chạy FORGE-F Gate lần đầu trên LOMAH-AD. Build the tool when you need it. |
| 6 | `performance-envelope-tester` | ⏸️ **TẠO KHI CẦN** | Cần test data thực. Tạo khi V-SMASH hoặc LOMAH-AD có HIL setup. |
| 7 | `mentoring-session-runner` | ❌ **KHÔNG TẠO** | **Dùng `pahl-beitz-mastery` + `engineering-feynman`.** Combine 2 skills hiện có đủ rồi. Tạo thêm = over-engineering. |
| 8 | `signal-knowledge-pipeline` | ⏸️ **TẠO KHI PARA TRIỂN KHAI** | Không có Obsidian vault live → skill này không có gì để orchestrate. |
| 9 | `meeting-signal-extractor` | ❌ **KHÔNG TẠO RIÊNG** | **Dùng `compound-engineering`.** Nó đã có extract learnings from sessions. Thêm meeting template vào compound-engineering. |
| 10 | `vault-session-manager` | ❌ **KHÔNG TẠO RIÊNG** | **Merge vào `signal-knowledge-pipeline`** khi tạo ở bước 8. |

### Kết quả filter: 10 → 3 tạo ngay + 3 tạo sau + 4 không tạo

**Tạo ngay (tuần 1-2):**
1. `design-sprint-driver` — Execution pattern
2. `ai-validation-gate` — Gate pattern

**Tạo tuần 3-4:**
3. `decision-teaching-engine` — Compound pattern

**Tạo khi cần:**
4. `fallback-designer` — khi FORGE-F Gate cần
5. `performance-envelope-tester` — khi HIL setup ready
6. `signal-knowledge-pipeline` — khi PARA × Obsidian live

**Không tạo (dùng skills hiện có):**
7. `6-flow-function-builder` → merge vào integration-architecture
8. `mentoring-session-runner` → pahl-beitz-mastery + engineering-feynman
9. `meeting-signal-extractor` → expand compound-engineering
10. `vault-session-manager` → merge vào signal-knowledge-pipeline

---

## VII. KIẾN TRÚC THỐNG NHẤT SAU TÁI CẤU TRÚC

```
══════════════════════════════════════════════════════════════
              WORKSHOP X SKILL ECOSYSTEM v2.1
              Sau rà soát: 29 hiện + 3 mới ngay + 3 mới sau
══════════════════════════════════════════════════════════════

LAYER 3: CEO OPERATING SYSTEM ← MỚI, CHƯA TỒN TẠI
┌────────────────────────────────────────────────────────────┐
│                                                            │
│  ① design-sprint-driver [EXECUTION] ❌ CREATE NOW          │
│     Drive products through P&B 4 phases                    │
│     Reads: pahl-beitz-mastery, integration-architecture    │
│     Calls: engineering-feynman, concept-evaluation,        │
│            design-review-mentor, cad-visualization         │
│     Anti-pattern: Analyst Trap detector                    │
│                                                            │
│  ② integration-architecture [GOVERNANCE] ✅ DONE           │
│     ICD + Sync Points + Debt + 6-Flow + Coupling           │
│     Reads: stock-flow-mapper, concept-evaluation           │
│     Feeds: quality-gate-reporter, cad-documentation        │
│                                                            │
│  ③ decision-teaching-engine [COMPOUND] ❌ CREATE WEEK 3    │
│     Document decisions + teach mentees + compound           │
│     Reads: engineering-feynman, learning-journal            │
│     Feeds: compound-engineering, signal-knowledge-pipeline  │
│                                                            │
│  ④ ai-validation-gate [GATE] ❌ CREATE NOW                 │
│     FORGE-F Gate. No Deploy Without Fallback.               │
│     Reads: quality-gate-reporter                            │
│     Feeds: dmir-defense-systems-mentor (enterprise risk)    │
│     → Later: fallback-designer, performance-envelope-tester │
│                                                            │
│  ⑤ signal-knowledge-pipeline [PIPELINE] ⏸️ LATER          │
│     Capture → Extract → Structure → Store → Retrieve        │
│     Reads: compound-engineering                             │
│     When: PARA × Obsidian vault operational                 │
│                                                            │
└────────────────────────────────────────────────────────────┘

LAYER 2: DOMAIN FRAMEWORKS
┌──────────────┐ ┌──────────────────┐ ┌──────────────┐ ┌──────────────┐
│ HELIX        │ │ FORGE            │ │ BRIDGE       │ │ CAD          │
│              │ │                  │ │              │ │              │
│ pahl-beitz-  │ │ dmir-defense-    │ │ compound-    │ │ cad-viz-     │
│   mastery    │ │   systems-mentor │ │   engineering│ │   freecad    │
│ requirements-│ │ quality-gate-    │ │              │ │ cad-review-  │
│   abstraction│ │   reporter  ⬆️   │ │              │ │   automation │
│ integration- │ │ ai-validation-   │ │              │ │ cad-docs-gen │
│   architecture│ │   gate ❌ NEW    │ │              │ │ design-iter- │
│              │ │                  │ │              │ │   assistant  │
└──────────────┘ └──────────────────┘ └──────────────┘ └──────────────┘

LAYER 1: ANALYTICAL ENGINE
┌────────────────────────────────────────────────────────────┐
│ deep-content-analyzer [Orchestrating]                       │
│   ├── stock-flow-mapper          [Analytical] ⬆️ SPLIT     │
│   ├── feedback-loop-detector     [Analytical]               │
│   ├── meadows-leverage-analyzer  [Analytical]               │
│   ├── skills-mastery-system      [Mentoring]                │
│   └── 13 engineering-* skills    [Various] ⬆️ ADD VN TRIGS │
│       ├── engineering-feynman                               │
│       ├── engineering-chunking-breakdown                    │
│       ├── engineering-mnemonic-creator                      │
│       ├── engineering-self-assessment-rubric-generator      │
│       ├── engineering-interleaving-scheduler                │
│       ├── engineering-targeted-drill-master                 │
│       ├── engineering-learning-architecture-builder ⬆️ SPLIT│
│       ├── engineering-learning-journal-keeper               │
│       ├── engineering-design-review-mentor                  │
│       ├── engineering-concept-evaluation-assistant          │
│       ├── engineering-project-progress-tracker              │
│       ├── engineering-focus-session-optimizer               │
│       └── engineering-systems-mapper  ⬆️ TRIM              │
└────────────────────────────────────────────────────────────┘

LAYER 0: INFRASTRUCTURE
┌────────────────────────────────────────────────────────────┐
│ agent-team-builder           [Orchestrating]                │
│ ai-infra-security-hardening  [Procedural]                   │
└────────────────────────────────────────────────────────────┘

Legend: ✅ Done  ❌ To Create  ⬆️ To Update  ⏸️ Later
```

---

## VIII. IMPLEMENTATION ROADMAP

### Phase 1: NGAY BÂY GIỜ (Tuần 1)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 1 | **Tạo `design-sprint-driver`** | 2h | ★★★★★ — pump cho toàn bộ |
| 2 | **Tạo `ai-validation-gate`** | 1h | ★★★★☆ — safety-critical |
| 3 | **Deploy `integration-architecture`** ✅ | 5min | ★★★★☆ — đã tạo |

### Phase 2: TUẦN 2 (Vietnamese triggers + cross-refs)

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 4 | **Batch add Vietnamese triggers** cho 26 skills | 2h | ★★★★☆ — trigger reliability |
| 5 | **Add cross-references** cho Systems + HELIX + CAD clusters | 2h | ★★★★☆ — ecosystem coherence |
| 6 | **Expand `quality-gate-reporter`** (78 → ~200 lines) | 1h | ★★★☆☆ — foundation cho FORGE gates |

### Phase 3: TUẦN 3-4

| # | Action | Effort | Impact |
|---|--------|--------|--------|
| 7 | **Tạo `decision-teaching-engine`** | 2h | ★★★★☆ — activates R5-Teaching |
| 8 | **Split `stock-flow-mapper`** (744 → 400 + references/) | 1h | ★★★☆☆ — compliance |
| 9 | **Split `engineering-learning-architecture-builder`** (797 → 400 + references/) | 1h | ★★★☆☆ — compliance |
| 10 | **Trim `engineering-systems-mapper`** (525 → 400) | 1h | ★★☆☆☆ — compliance |

### Phase 4: KHI CẦN (không schedule trước)

| # | Action | Trigger |
|---|--------|---------|
| 11 | Tạo `fallback-designer` | Khi FORGE-F Gate lần đầu fail vì thiếu fallback design |
| 12 | Tạo `performance-envelope-tester` | Khi HIL setup ready cho V-SMASH hoặc LOMAH-AD |
| 13 | Tạo `signal-knowledge-pipeline` | Khi PARA × Obsidian vault operational |

---

## IX. CONSISTENCY RULES (Áp dụng từ giờ trở đi)

### 9.1 Naming Convention

```
[domain]-[function]-[role]

Ví dụ:
  integration-architecture          ← domain: integration, function: architecture
  ai-validation-gate                ← domain: ai, function: validation-gate
  design-sprint-driver              ← domain: design, function: sprint-driver
  decision-teaching-engine          ← domain: decision, function: teaching-engine
  signal-knowledge-pipeline         ← domain: signal, function: knowledge-pipeline

KHÔNG dùng prefix "engineering-" cho skills mới.
Prefix "engineering-" là legacy cho meta-learning cluster — giữ nhưng không thêm.
```

### 9.2 Description Standard

Mỗi description PHẢI có:
1. **Verb mở đầu** (Create/Design/Analyze/Guide/Track/Enforce)
2. **5-8 English trigger phrases**
3. **3-5 Vietnamese trigger phrases** (cuối description)
4. **"Use this skill whenever..."** câu cuối — broad context
5. **80-120 từ** tổng

### 9.3 Cross-Reference Standard

Mỗi skill PHẢI có section:
```markdown
## Integration with Other Skills
- Reads: [skills this skill NEEDS as input]
- Feeds: [skills that USE this skill's output]
- Called by: [orchestrators that invoke this skill]
```

### 9.4 Size Standard

| Target | Lines |
|--------|-------|
| Leaf skill (single tool) | 150-300 |
| Framework skill (multi-phase) | 300-500 |
| Orchestrator | 200-400 (references/ cho detail) |
| **Hard cap** | **500 lines SKILL.md** + unlimited references/ |

### 9.5 Quality Checklist (Every Skill)

```
□ YAML frontmatter: name + description (80-120 words)
□ Vietnamese triggers in description
□ "When to Use" section with positive AND negative triggers
□ Cross-references section
□ Quality Checklist section
□ Under 500 lines
□ At least 1 example input/output
```

---

## X. CẬP NHẬT MEGA-PROMPT

Thay section "VÍ DỤ: CÁC LOẠI SKILL THƯỜNG TẠO" bằng 12 patterns (7 cũ + 5 mới):

```markdown
## CÁC LOẠI SKILL PATTERN (12 Patterns)

### 7 Patterns Cơ Bản
| Loại | Ví dụ | Pattern |
|---|---|---|
| Analytical | stock-flow-mapper, feedback-loop-detector | Content → Framework → Output |
| Generative | engineering-mnemonic-creator, cad-documentation-gen | Input → Creative synthesis → Novel output |
| Evaluative | concept-evaluation-assistant, cad-review-automation | Options → Criteria → Score → Recommend |
| Procedural | quality-gate-reporter | Event → Checklist → Log → Notify |
| Mentoring | pahl-beitz-mastery, requirements-abstraction-mentor | State → Diagnose → Guide → Practice → Assess |
| Orchestrating | deep-content-analyzer, compound-engineering | Input → Load sub-skills → Coordinate → Synthesize |
| CAD/Technical | cad-visualization-freecad, design-iteration-assistant | Description → Model → Documentation |

### 5 Patterns CEO Operating System
| Loại | Ví dụ | Pattern | Khác gì |
|---|---|---|---|
| ★ Execution | design-sprint-driver | Goal → Artifact → Review → Next phase | Khác Mentoring: DRIVE không dạy |
| ★ Governance | integration-architecture | State → Monitor → Detect → Intervene → Loop | Khác Procedural: liên tục, không 1 event |
| ★ Compound | decision-teaching-engine | Act → Document → Teach → Feedback → Loop | Khác Procedural: 2+ activities = 1 R-loop |
| ★ Gate | ai-validation-gate | Product → Test → Pass/Fail binary | Khác Evaluative: binary, safety, no negotiation |
| ★ Pipeline | signal-knowledge-pipeline | Raw → Extract → Structure → Store → Retrieve | Khác Procedural: continuous, accumulative |
```

---

## XI. META-INSIGHT

Rà soát này phát hiện pattern quen thuộc:

**Hệ sinh thái skill hiện tại phản ánh CEO's current identity: ANALYST/LEARNER.**
- 15/29 skills (52%) phục vụ "learning" (engineering-*)
- 3/29 skills (10%) phục vụ "analysis" (stock-flow, feedback-loop, leverage)
- 0/29 skills (0%) phục vụ "execution"

**Hệ sinh thái skill cần phản ánh CEO's TARGET identity: DESIGNER/EXECUTOR.**
- Layer 3 (CEO Operating System) phải trở thành layer được dùng NHIỀU NHẤT
- Layer 1 (Analytical Engine) vẫn chạy nhưng qua deep-content-analyzer, không trực tiếp

**Shifting the Burden detection:** Tạo skills VỀ execution ≠ THỰC SỰ execute. Nếu 3 tuần tới = tạo 3 skills + 0 design artifacts → Analyst Trap vẫn thắng.

**CEO Daily Question vẫn đúng:**
> "Hôm nay tôi THIẾT KẾ gì, TÍCH HỢP gì, DẠY ai, VALIDATE gì, GHI CHÉP gì?"

Skills là tools. Answers to this question = the actual work.
