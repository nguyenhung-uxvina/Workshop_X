# CLAUDE.md — Hướng Dẫn AI cho Hệ Thống IPARAG

> Vault của một người dùng Việt Nam, xây dựng bộ não thứ hai kết hợp PARA + Zettelkasten.
> Cập nhật lần cuối: 2026-03-05 | Review tiếp theo: 2026-03-12

---

## Tổng Quan

**IPARAG** = **I**nbox + **P**rojects + **A**reas + **R**esources + **A**rchives + **G**alaxy

- **PARA** (Tiago Forte) — quản lý công việc dựa trên hành động
- **Zettelkasten** (Niklas Luhmann) — mạng lưới tri thức trong Galaxy
- **THỊNH** — quy trình vận hành hàng ngày (Thu → Hóa → Ích → Nhớ → Hành)
- **COD** — phân loại task: Core (tự làm) / Offload (AI làm) / Default (bỏ qua)

---

## Cấu Trúc Thư Mục

```
Workshop_X/
├── 🏠 Home.md                ← Dashboard chính
├── CLAUDE.md                  ← File này
├── 0_Inbox/                   ← Tiếp nhận mọi thứ trước khi phân loại
├── 1_Projects/                ← Mục tiêu có deadline
│   ├── Xây Dựng Hệ Thống IPARAG/     (deadline: 2026-03-26)
│   ├── Mastering Claude Code V2/       (deadline: 2026-04-16)
│   ├── THỊNH 12-Week Practice Protocol/ (deadline: 2026-05-28)
│   ├── BB-01_LOMAH/                     (deadline: 2026-09-05)
│   ├── IRONMESH Portfolio Roadmap/      (deadline: 2026-12-31, rolling)
│   ├── VN-CUAV-SIM-001 Maritime Counter-UAVUSV Training/ (active, Phase 2 next)
│   ├── VN-AST-MSL-001 Towed Target/    (on-hold)
│   ├── UAV Catapult/                    (on-hold)
│   ├── VN-NVL Naval Training/          (on-hold, 5 products)
│   ├── VN-HW Heavy Weapons Training/   (on-hold, 6 products)
│   ├── VN-IFT Indirect Fire Training/  (on-hold, 3 products)
│   ├── VN-ADS Air Defense Systems/     (on-hold, 3 products)
│   ├── VN-GCT Ground Combat Training/  (on-hold, 3 products)
│   └── VN-AICAM Border Surveillance/   (on-hold, 1 product)
├── 2_Areas/                   ← Trách nhiệm liên tục
│   ├── AI & Công Cụ Lập Trình/
│   ├── Phát Triển Tư Duy & Knowledge Management/
│   └── Workshop X — Nghiên Cứu & Phân Tích Hệ Thống/
├── 3_Resources/               ← Tài liệu tham khảo
│   ├── Books & Articles/      (2 index MDs + 1 vB Synthesis + 3 subfolders below)
│   │   ├── Defense Training Research/   (43 files, 8 subfolders: Towed Target, USV, Grenade, UAV, etc.)
│   │   ├── Product Portfolio/           (59 files: 22 Datasheets, 23 Conceptual, 9 ODI, 5 DMIR)
│   │   └── Systems Thinking/            (16 files: 10 PDFs + 6 MDs)
│   ├── SOPs/                  (7 files: COD, FUEL, THỊNH, DCTRS, Anti-Patterns, AI Failure Log, Pattern Library)
│   ├── Templates/             (5 general + 10 delegation templates in Templates/Delegation/)
│   └── Tools & Software/     (7 MDs + Skills/ subfolder + IRONMESH refs)
│       └── Skills/            (51 files, 8 skill packages: concept-eval, deep-content, dmir, pahl-beitz, etc.)
├── 4_Archives/                ← Kho lưu trữ (hiện tại trống)
└── 5_Galaxy/                  ← Zettelkasten: 20 permanent notes, CẤU TRÚC PHẲNG
```

---

## Quy Tắc Phân Loại

### 0_Inbox
- Mọi thứ mới vào đây trước
- Mục tiêu: Inbox Zero mỗi tuần

### 1_Projects
- Có deadline CỤ THỂ + tiêu chí "done" rõ ràng
- Mỗi dự án = 1 thư mục con với `_Project_Brief.md`
- Khi hoàn thành → chuyển toàn bộ sang `4_Archives/Projects/`

### 2_Areas (3 areas hiện tại)
- **AI & Công Cụ Lập Trình** — Claude Code mastery, AI dependency ratio, COD tracking
- **Phát Triển Tư Duy & Knowledge Management** — IPARAG + THỊNH, Galaxy growth
- **Workshop X — Nghiên Cứu & Phân Tích Hệ Thống** — IRONMESH platform (5 products), physical-world validation, defense training R&D
- Mỗi Area có `_Area_Dashboard.md`

### 3_Resources
- Tài liệu tham khảo, template, SOP, tools
- KHÔNG phải insight cá nhân → dùng Galaxy

### 4_Archives
- Giữ nguyên cấu trúc gốc khi chuyển vào
- KHÔNG BAO GIỜ xóa — luôn lưu trữ

### 5_Galaxy (20 notes, 6 clusters)
- **CẤU TRÚC HOÀN TOÀN PHẲNG** — KHÔNG có thư mục con
- Mỗi file = 1 khái niệm duy nhất (atomic)
- Link density tối thiểu: ≥ 2 wikilinks/note (target: ≥ 3)
- Viết bằng lời người dùng, KHÔNG copy-paste
- KHÔNG BAO GIỜ chuyển Galaxy sang Archives
- Growth: 20 notes → 50 (8 tuần) → 100 (12 tuần) → 200+ (activation threshold)

**Hub notes** (nhiều incoming links nhất — ưu tiên link đến khi tạo note mới):
- `Phán đoán không thể uỷ thác cho AI` (10 links) — judgment core
- `Nguyên Tắc Atomic Note` (8 links) — KM foundation
- `Shifting the Burden Archetype` (8 links) — systems thinking core

**6 Topic Clusters:**

| Cluster | Chủ đề | Notes |
|---------|--------|-------|
| A | KM Fundamentals | Nguyên Tắc Atomic Note, Cấu trúc phẳng, Forced Link Rule, Temporal Lifecycle, Taste |
| B | Network Effects | Activation Threshold, Serendipity, Valley of Despair |
| C | Judgment & Agency | Phán đoán không thể uỷ thác, Skin in the Game, Paradigm Law, Physical-World Interface |
| D | AI Failure Modes | AI Dependency Spiral (R3), Context Drift Loop (R4), Context vs Capability, dJ/dt > dD/dt |
| E | Systems Archetypes | Shifting the Burden, Nested Shifting the Burden |
| F | Knowledge Lifecycle | Vault = Graveyard, Analyst Trap |

Khi tạo note mới, AI nên: xác định note thuộc cluster nào → link đến hub note của cluster đó + ≥ 1 cross-cluster link.

---

## Hệ Thống Vận Hành: THỊNH

THỊNH là heartbeat của vault. Mỗi session nên follow:

| Bước | Tên | Hành động |
|------|-----|-----------|
| T | **Thu** (Capture) | Capture items vào Inbox với context "tại sao" |
| H | **Hóa** (Atomize) | Biến raw capture → permanent notes (1 concept/note) |
| I | **Ích** (Connect) | Tạo ≥ 2 wikilinks cho mỗi note mới |
| N | **Nhớ** (Persist) | Kiểm tra CLAUDE.md có drift không, update nếu cần |
| H | **Hành** (Harvest) | Dùng Galaxy insight để inform decisions/actions |

### Drills định kỳ
- **Daily Check** (2 phút): THỊNH 5-item checklist
- **Manual Sprint** (1x/tháng): Toàn bộ session không dùng AI
- **Context Drift Test** (1x/tuần): CLAUDE.md vs. thực tế vault
- **Link Traversal** (1x/tuần): Đi dạo trong Galaxy, tìm connection mới
- **Harvest Audit** (1x/tháng): Galaxy → Action translation check
- **Galaxy Quality Audit** (1x/quý): Review link density, stale notes

---

## COD Decision Rule

Mỗi task phải được phân loại trước khi thực hiện:

| Layer | Mô tả | Ví dụ |
|-------|-------|-------|
| **C** (Core) | Tự làm — phát triển judgment | Phân loại Inbox, viết permanent notes, design decisions |
| **O** (Offload) | AI làm dưới supervision | Draft notes, search connections, format templates |
| **D** (Default) | Bỏ qua hoặc automate | Notifications, formatting cleanup |

**Constraint:** Giữ C < 60% tổng thời gian để tránh Opus Trap ($2+/task)

---

## Hệ Thống Tags

### Theo Loại Hình
`#type/idea` · `#type/clipping` · `#type/book` · `#type/article` · `#type/template` · `#type/sop` · `#type/prompt` · `#type/permanent-note` · `#type/moc` · `#type/project`

### Theo Trạng Thái
`#status/inbox` · `#status/active` · `#status/on-hold` · `#status/completed` · `#status/archived`

### Theo Chủ Đề (đang dùng)
`#topic/knowledge-management` · `#topic/systems-thinking` · `#topic/ai-tools` · `#topic/network-theory` · `#topic/philosophy` · `#topic/productivity` · `#topic/learning` · `#topic/technology` · `#topic/electronics`

---

## Frontmatter Chuẩn

### PARA notes
```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: [idea/clipping/book/article/template/sop/project]
status: [inbox/active/on-hold/completed/archived]
tags: [#type/... #status/... #topic/...]
---
```

### Galaxy Permanent Notes
```yaml
---
created: YYYY-MM-DD
updated: YYYY-MM-DD
type: permanent-note
tags: [#type/permanent-note, #topic/...]
links: [[Note 1]], [[Note 2]]
---
```

Cấu trúc nội dung Galaxy note:
1. **Ý Tưởng Cốt Lõi** — 1-3 câu tóm concept
2. **Giải Thích Chi Tiết** — mở rộng với ví dụ, diagram
3. **Tại Sao Điều Này Quan Trọng?** — relevance cá nhân
4. **Liên Kết** — wikilinks có annotation
5. **Nguồn Gốc** — citation + ngày gặp

---

## Nhiệm Vụ AI Có Thể Thực Hiện

### 1. Phân Loại Inbox (Triage)
```
Có thể xóa? → Đánh dấu xóa
Là insight/ý tưởng gốc? → 5_Galaxy (viết lại atomic)
Thuộc dự án đang chạy? → 1_Projects/[Tên]/
Là trách nhiệm liên tục? → 2_Areas/[Area]/
Là tài liệu tham khảo? → 3_Resources/[Loại]/
Cũ/không dùng? → 4_Archives/
```
**Luôn đề xuất trước, KHÔNG tự ý di chuyển.**

### 2. Tạo Permanent Note cho Galaxy
- Xác định atomic concepts → đề xuất tên file
- Viết tiếng Việt, lời người dùng
- Gợi ý wikilinks đến notes hiện có
- Đặt tags từ hệ thống tags ở trên

### 3. Tìm Kết Nối (Serendipity)
- Đọc Galaxy notes → tìm connections chưa linked → đề xuất wikilinks mới

### 4. Weekly Review
- Inbox đã xử lý chưa?
- Projects nào sắp deadline?
- Galaxy notes nào cần thêm links?
- CLAUDE.md có drift so với thực tế không?

### 5. BB-01 LOMAH Support
- **Hard constraints**: Piezo CONTACT sensors (NOT MEMS), miss/hit detection ONLY
- **Signal chain**: Piezo → Charge Amp (Q→V) → Bandpass → Gain → Clamp → ADC
- **Op-amps**: LM358, TL072 (Vietnam market)
- Hỗ trợ thiết kế mạch, simulation, firmware — nhưng judgment về design decisions thuộc Core

---

## Những Điều AI KHÔNG ĐƯỢC Làm

1. **Tạo thư mục con trong `5_Galaxy/`** — cấu trúc phẳng
2. **Chuyển ghi chú Galaxy sang Archives** — Galaxy là vĩnh viễn
3. **Gộp nhiều khái niệm vào một ghi chú Galaxy** — nguyên tắc atomic
4. **Tự ý di chuyển file mà không hỏi người dùng** — luôn đề xuất trước
5. **Dùng tiêu đề chủ đề để tổ chức Galaxy** — dùng wikilinks
6. **Viết permanent notes thay người dùng mà không được yêu cầu** — R3 risk
7. **Bỏ qua COD classification** — mọi task suggestion nên ghi rõ C/O/D

---

## Survival Metrics (từ THỊNH Protocol)

| Metric | Ý nghĩa | Target |
|--------|----------|--------|
| dJ/dt > dD/dt | Judgment tăng nhanh hơn delegation | Luôn dương |
| AI Dependency Ratio | % tasks delegate cho AI | < 40% |
| Galaxy growth | Notes/tuần | ≥ 3-5 notes/tuần |
| Link density | Links/note trung bình | ≥ 3 |
| CLAUDE.md drift | Tần suất update | ≤ 1 tuần |

---

*Tài liệu này là một phần của hệ thống IPARAG và phải được review mỗi tuần (N trong THỊNH).*
