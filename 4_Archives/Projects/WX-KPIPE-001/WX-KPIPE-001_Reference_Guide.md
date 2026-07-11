---
created: 2026-03-08
updated: 2026-03-08
type: sop
status: active
project: WX-KPIPE-001
tags: [#type/sop, #status/active, #topic/ai-tools]
---

# WX-KPIPE-001 "GOD MODE" — Tài Liệu Tham Khảo

> Knowledge Pipeline: Claude Code × NotebookLM × Obsidian IPARAG
> Tổng hợp kiến trúc, skills, workflow, outputs, và bài học rút ra.

---

## 1. Tổng Quan Kiến Trúc

### Pipeline Flow

```
┌─────────────┐     yt-dlp        ┌──────────────┐
│   YouTube    │ ──────────────→  │              │
│   (Sources)  │   search+meta    │  Claude Code │
└─────────────┘                   │ (Orchestrator)│
                                  │              │
┌─────────────┐     WebSearch     │   Skills:    │
│  Web URLs    │ ──────────────→  │  /research   │
│  PDFs, Text  │                  │  /yt-search  │
└─────────────┘                   │  /nlm        │
                                  └──────┬───────┘
                                         │
                          nlm-cli (MCP)  │  FileSystem
                         ┌───────────────┼───────────────┐
                         ▼               ▼               │
                  ┌──────────────┐ ┌──────────────┐      │
                  │ NotebookLM   │ │  IPARAG Vault│      │
                  │ (Gemini      │ │  (Obsidian)  │ ◄────┘
                  │  Analyzer)   │ │              │
                  │ FREE tokens  │ │  0_Inbox/    │
                  └──────────────┘ │  5_Galaxy/   │
                                   │  1_Projects/ │
                                   └──────────────┘
```

### Vai Trò Từng Thành Phần

| Thành phần | Vai trò | Chi phí |
|------------|---------|---------|
| **Claude Code** | Orchestrator — điều phối pipeline, chạy skills, viết vault | Token Anthropic |
| **NotebookLM** | Heavy analyzer — phân tích 50+ sources cùng lúc bằng Gemini | **MIỄN PHÍ** |
| **yt-dlp** | YouTube scraper — tìm video, trích metadata, không tải file | Miễn phí |
| **Obsidian Vault** | Storage + retrieval — IPARAG structure, Galaxy notes | Miễn phí |
| **nlm-cli** | CLI bridge — kết nối Claude Code với NotebookLM API | Miễn phí |

### Lợi Thế Cốt Lõi

1. **Token arbitrage**: Offload phân tích nặng (50-70 sources) sang Gemini miễn phí, Claude chỉ orchestrate
2. **Compound across products**: Một research output phục vụ nhiều dự án (VD: ACH research → BB-01 + 12.7mm + Thesis)
3. **THỊNH integration**: Output tự động vào Inbox → CEO triage → Galaxy extraction
4. **COD clear**: Search/analyze = Offload, video selection + Galaxy promotion = Core

---

## 2. Ba Skill Pipeline

### 2.1 `/yt-search` — YouTube Search & Extract

**Mục đích:** Tìm video YouTube, trích metadata, feed vào NLM hoặc vault.

**Cú pháp:**
```
/yt-search <topic> [--count N] [--transcript]
```

**Workflow:**
1. Search: `yt-dlp "ytsearch5:<topic>" --flat-playlist --print "%(id)s | %(title)s | %(duration_string)s | %(view_count)s views | %(upload_date)s" --no-download`
2. Present kết quả dạng bảng → CEO chọn (Core decision)
3. Extract transcript/description nếu cần
4. Route: Add vào NLM notebook / Save transcript vào vault / Cả hai

**Quy tắc:**
- Default 5 kết quả, tăng bằng `--count`
- KHÔNG download full video — chỉ metadata + transcript
- Tiếng Việt: thử `--sub-lang vi` trước, fallback auto-generated
- COD: Search = O, Video selection = **C**

### 2.2 `/nlm` — NotebookLM Interface

**Mục đích:** Tương tác với Google NotebookLM qua nlm-cli — query, add sources, generate deliverables.

**Cú pháp:**
```
/nlm [mode] where mode = query | add | generate | list
```

**4 Chế độ:**

| Mode | Hành động | Ví dụ |
|------|-----------|-------|
| `query` | Hỏi notebook một câu hỏi | `/nlm query lomah "TL072 vs LM358 slew rate?"` |
| `add` | Thêm source (URL, text, YouTube) | `/nlm add rcs --url "https://..."` |
| `generate` | Tạo report/audio/quiz/mindmap/slides | `/nlm generate report ach --confirm` |
| `list` | Liệt kê notebooks và sources | `/nlm list` |

**NLM Notebooks hiện có:**

| Alias | UUID | Chủ đề | Sources |
|-------|------|--------|---------|
| `kpipe` | fa5ddd3f-... | Siêu quy trình nghiên cứu | Setup docs |
| `ast` | — | AST-MSL-001 Design Questions | 20 web |
| `rcs` | — | Trihedral Corner Reflector RCS | 72 web + YouTube |
| `lomah` | — | Piezo LOMAH Signal Conditioning | 9 video + 3 web |
| `127sim` | — | 12.7mm Simulator Recoil Fidelity | 8 video + 7 web |
| `ach` | — | ACH Defense Training Cases | 11 video + 4 web |

**Quy tắc quan trọng:**
- KHÔNG dùng `nlm chat start` — nó mở interactive REPL, dùng `nlm notebook query` thay thế
- Luôn dùng `--confirm` cho generate/delete
- Session ~20 phút — nếu auth fail, chạy `nlm login` ở terminal riêng
- NLM analysis = **MIỄN PHÍ** (Gemini tokens) → ưu tiên offload phân tích nặng sang đây

### 2.3 `/research` — Super Skill (Pipeline Orchestrator)

**Mục đích:** End-to-end pipeline: YouTube → NLM → Vault → Galaxy candidates.

**Cú pháp:**
```
/research <topic> [--notebook <alias>] [--output report|audio|mindmap|quiz] [--count N]
```

**6-Step Flow:**

```
[1] Search YouTube (yt-dlp)
     ↓
[2] CEO selects videos (Core — KHÔNG bỏ qua)
     ↓
[3] Add selected videos to NLM notebook (nlm source add)
     ↓
[4] Query or generate deliverable (nlm notebook query / nlm report create)
     ↓
[5] Save output to vault (0_Inbox/RESEARCH_<topic>_<date>.md)
     ↓
[6] Flag Galaxy candidates (THỊNH H — Hóa)
```

**Quick Mode** (khi NLM session hết hạn):
- Chỉ search YouTube + dùng Claude phân tích thay NLM
- Không cần auth, nhưng tốn Claude token

**Notebook Management:**
```bash
nlm notebook create "{{Research Topic}}"
nlm alias set {{short-name}} {{new-notebook-id}}
```

---

## 3. Thiết Lập Môi Trường

### Cài đặt

```bash
# nlm-cli
pip install nlm-cli

# yt-dlp
pip install yt-dlp

# Xác thực NLM
nlm login
```

### PATH Setup (Windows — bắt buộc mỗi session)

```bash
export PATH="$PATH:/c/Users/ADMIN/AppData/Roaming/Python/Python313/Scripts"
export PYTHONIOENCODING=utf-8
```

### Windows Workaround — Unicode Crash Fix

**Vấn đề:** nlm-cli output chứa ký tự Unicode (✓) gây crash trên Windows cp1252.

**Giải pháp:**
```bash
export NO_COLOR=1
```

Đặt trước mọi lệnh nlm, hoặc thêm vào `.bashrc`.

### Đường dẫn thực thi

| Tool | Path |
|------|------|
| `nlm.exe` | `C:/Users/ADMIN/AppData/Roaming/Python/Python313/Scripts/nlm.exe` |
| `yt-dlp.exe` | `C:/Users/ADMIN/AppData/Roaming/Python/Python313/Scripts/yt-dlp.exe` |

---

## 4. Kết Quả Pipeline (5 Research Outputs)

### Tổng kết

| # | Output | NLM Notebook | Sources | Galaxy Notes | Dự án phục vụ |
|---|--------|-------------|---------|-------------|---------------|
| 1 | AST-MSL-001 Design Questions | `ast` | 20 web | — | VN-AST-MSL-001 |
| 2 | RCS Corner Reflector | `rcs` | 72 web + YT | RCS Scaling Law | VN-AST-MSL-001 |
| 3 | Piezo LOMAH Signal Conditioning | `lomah` | 9 video + 3 web | Contact Piezo LOMAH, Slew Rate, Reliability Trumps Precision | BB-01_LOMAH |
| 4 | 12.7mm Simulator Recoil Fidelity | `127sim` | 8 video + 7 web | L3 Pneumatic 80/20, Training Scars | VN-12.7MM-SIM |
| 5 | ACH Defense Training Cases | `ach` | 11 video + 4 web | ACH Boundary Rule, Edge First, Training Value Index | ACH-Thesis |

**Tổng:** 135 sources analyzed, 9 Galaxy notes created, phục vụ 4 dự án khác nhau.

### Output File Format

Mỗi output được lưu tại `0_Inbox/RESEARCH_<topic>_<date>.md` với frontmatter:

```yaml
---
created: 2026-03-08
source: research-pipeline
notebook: <alias>
topic: "<topic>"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox]
sources_analyzed: <N>
videos_analyzed: <N>
---
```

**Cấu trúc nội dung:**
1. Research context (tại sao nghiên cứu, dự án liên quan)
2. Main findings (bảng so sánh, phân tích kỹ thuật)
3. Key insights (3-5 điểm chính)
4. Source citations (NLM attribution)
5. Galaxy candidates (THỊNH H — đề xuất note mới)
6. CEO action items (quyết định cần đưa ra)

### Phát Hiện Chính Từ Mỗi Output

#### Research A: AST-MSL-001 Design Questions
- Modified Pelican Hook SS316 + locking nut → giải pháp Q2 pontoon quick-release
- ~~Propane burner TLX-1 approach cho Q6~~ → **ĐÃ BỎ** (CEO quyết định radar-only)

#### Research B: Piezo LOMAH Signal Conditioning
- **Khoảng trống thị trường xác nhận**: KHÔNG có LOMAH thương mại dùng contact piezo (BB-01 là novel)
- Signal chain: PZT → Charge Amp (TL072, Cf=10-22nF) → Bandpass 500Hz-20kHz → Gain → Clamp → ADC
- TL072 > LM358 vì slew rate (13 V/μs vs 0.3 V/μs)
- Impact force: 5,000-30,000 N → 10-150 nC charge output

#### Research C: 12.7mm Simulator Recoil Fidelity
- Pneumatic sweet spot: 54mm bore, 10 bar, <15ms solenoid
- **L3 fidelity = ~80% training value của L5, chỉ ~20% chi phí**
- 8 subsystems identified, cross-product synergies với BB-01 scoring algorithm

#### Research D: RCS Corner Reflector
- RCS formula: σ_max = 12πa⁴/λ² (square-faced trihedral)
- 12×800mm reflectors → ~1,906 m²/reflector (5× requirement)
- 360° coverage confirmed, minimum viable edge 643mm

#### Research E: ACH Defense Training Cases
- **ACH Boundary Rule**: works for information (bits), fails for physical forces (newtons)
- Training Value Index: ultra-realism ≠ better learning
- SLATS project: ML auto-evaluates combat team performance
- Edge AI: Jetson Orin Nano ($200) enables field deployment

---

## 5. Skill Liên Quan

### 5.1 `/learning` — Meta-Learning Super Skill (mới)

**Mục đích:** End-to-end meta-learning pipeline — từ source intake đến judgment compounding. Orchestrates `/analyze` + `/cycle` + `/teach` + `/reflect` + `/nlm`. Cũng tạo tài liệu tự học (practice guide) với bài tập, rubric, và lịch thực hành.

**Cú pháp:**
```
/learning <topic_or_source> [--mode full|quick|review|practice] [--notebook <alias>] [--project <project-id>] [--weeks N] [--level novice|intermediate|advanced]
```

**7-Step Pipeline (full mode):**

```
[1] Source Intake → [2] Deep Analysis → [3] Three Laws
     → [4] DMIR Cycle → [5] Galaxy Harvest → [6] Decision Bridge → [7] Reflection
```

**4 Modes:**

| Mode | Steps | Thời gian | Khi nào dùng |
|------|-------|-----------|-------------|
| `full` | 1→2→3→4→5→6→7 | 2h + cycle | Xây skill mới cho dự án |
| `quick` | 1→2→3→5 | 30 min | Extract value từ bài viết |
| `review` | 6→7 | 30 min | Review learning tích lũy |
| `practice` | Scope→Map→Course→Materials | 1-2h | Tạo tài liệu tự học step-by-step |

**Practice Mode Details:**
- 4 phases: Scope Definition → Knowledge Map → Course Document → Supporting Materials
- Output: "Mini course" hoàn chỉnh (bài giảng + bài tập + rubric + lịch thực hành)
- Cấu trúc tuần: **Học 30% + Làm 50% + Đánh giá 20%**
- Mỗi bài tập gắn vào dự án thật (không toy exercises — Training Scars principle)
- Rubric dùng observable behaviors (1/3/5 scoring, binary criteria)
- Dreyfus progression tracking tuần-by-tuần
- Capstone exercise cuối khóa = proof of skill
- Save to: `2_Areas/CEO-Self/Learning-Architecture/PRACTICE_{{topic}}_{{date}}.md`

**Khác biệt với `/research`:**
- `/research` = **knowledge acquisition** (tìm → phân tích → lưu)
- `/learning` = **knowledge transformation** (phân tích → distill → apply → compound)
- `/research` feeds `/learning` — research output trở thành learning input

**Three Laws Extraction** là output bắt buộc — mỗi /learning run (trừ practice) phải distill 3 quy luật irreducible. Practice mode có thể dùng Three Laws từ analysis trước đó.

### 5.2 `/pipeline` — Knowledge Pipeline Manager (BRIDGE-level)

Khác với skills thực thi, `/pipeline` là **system-level orchestrator**:

| Mode | Mục đích |
|------|----------|
| `status` | Dashboard sức khỏe pipeline: Inbox count, Galaxy growth, bottleneck |
| `ingest` | Batch process nhiều sources → routing plan |
| `audit` | Galaxy quality review (quarterly): link density, cluster gaps |
| `harvest` | Tìm Galaxy knowledge relevant cho quyết định hiện tại |

**Mối quan hệ 5 skills:**
```
/research  = acquire (tìm sources → analyze → vault)
/learning  = transform (analyze → distill → apply → compound)
  ├── full/quick/review = meta-learning pipeline
  └── practice = self-study document generator
/pipeline  = manage (monitor health, audit quality, harvest value)
/analyze   = engine (deep multi-framework analysis — used by both /research and /learning)
```

---

## 6. COD Matrix — Ai Làm Gì?

| Bước | COD | Lý do |
|------|-----|-------|
| YouTube search | **O** (Offload) | Mechanical, no judgment needed |
| Video selection | **C** (Core) | CEO taste — chọn video quality |
| Add sources to NLM | **O** | Mechanical |
| NLM query/generate | **O** | Gemini analysis, free tokens |
| Save output to vault | **O** | Formatting + filing |
| Galaxy candidate proposal | **O** | AI đề xuất |
| Galaxy candidate promotion | **C** | CEO judgment — chỉ promote insights thật sự atomic |
| Galaxy note writing | **C** | Viết bằng lời mình, không copy-paste |
| CLAUDE.md update | **O** | Reflect actual state |

**Tỷ lệ thực tế:** ~70% Offload, ~30% Core → phù hợp COD constraint (<40% AI).

---

## 7. Bài Học Rút Ra

### Kỹ thuật

1. **`NO_COLOR=1`** — workaround duy nhất cho nlm-cli trên Windows cp1252. Không có nó, mọi output chứa ✓ sẽ crash.
2. **NLM session = 20 phút** — plan accordingly. Nếu pipeline dài, chia thành batches.
3. **yt-dlp `--flat-playlist`** — bắt buộc khi search, không dùng sẽ download thay vì list.
4. **KHÔNG dùng `nlm chat start`** — interactive REPL, không tương thích với Claude Code bash tool.
5. **Gemini phân tích tốt với 10-70 sources** — sweet spot. Dưới 5 thì dùng Claude trực tiếp. Trên 50 thì chia notebook.

### Quy trình

6. **CEO video selection là gate quan trọng nhất** — filter noise trước khi NLM analyze.
7. **Galaxy extraction rate ~18%** (9 notes / ~50 insights proposed) — CEO judgment giữ quality.
8. **Cross-product compound** — 1 research output phục vụ nhiều dự án, ROI gấp 2-4x.
9. **Output trước, feature sau** — G4 đo bằng outputs (5/5), không đo số features.
10. **Dấu enforcement từ đầu** — retroactive fix 9 notes tốn nhiều effort hơn làm đúng lần đầu.

### Galaxy Insights Từ Pipeline

| Galaxy Note | Cluster | Bài học |
|-------------|---------|---------|
| Contact Piezo LOMAH | G | Market gap → BB-01 là novel product |
| Slew Rate | G | TL072 > LM358, thông số ẩn quyết định chất lượng |
| Reliability Trumps Precision | H | Bia thương mại fail vì quá complex |
| L3 Pneumatic 80/20 | G | 80% training value tại 20% cost |
| Training Scars | D | Simulator sai tệ hơn không luyện |
| ACH Boundary Rule | C | Bit vs Newton — ranh giới ACH |
| Edge First | D | Offline trước, cloud sau |
| Training Value Index | C | Ultra-realism ≠ better learning |
| RCS Scaling Law | H | Luỹ thừa 4 của edge length |

---

## 8. Khi Nào Dùng Pipeline vs Claude Trực Tiếp

| Tình huống | Dùng Pipeline (/research) | Dùng Claude trực tiếp |
|-----------|--------------------------|----------------------|
| Nhiều sources (>5) | ✓ NLM free tokens | ✗ Tốn Claude token |
| Cần cross-reference | ✓ NLM giỏi synthesize | ✗ Context window limit |
| Quick question | ✗ Overhead setup | ✓ Nhanh hơn |
| Code/technical | ✗ NLM không chạy code | ✓ Claude thực thi được |
| YouTube heavy | ✓ yt-dlp + NLM combo | ✗ Claude không xem video |
| Vault integration | ✓ Tự động routing | Cũng được, nhưng manual |

---

## 9. Metrics & Targets

| Metric | Target | Actual (2026-03-08) | Status |
|--------|--------|---------------------|--------|
| Pipeline outputs/tháng | ≥ 5 | 5 | ✓ MET |
| Skills created | 3 | 4 (/nlm, /yt-search, /research, /learning) | ✓ EXCEEDED |
| CLAUDE.md updates from pipeline | ≥ 2 | 1 (Galaxy count + clusters) | Gần đạt |
| Galaxy notes from pipeline | ≥ 3 | 9 | ✓ EXCEEDED |
| NLM notebooks | ≥ 3 | 6 | ✓ EXCEEDED |
| Total sources analyzed | — | 135 | Benchmark |
| Cost | Minimize | ~$5-8 Claude (orchestration only) | NLM = free |

---

## 10. Quick Reference — Chạy Pipeline

### Bắt đầu session mới

```bash
# 1. Setup PATH
export PATH="$PATH:/c/Users/ADMIN/AppData/Roaming/Python/Python313/Scripts"
export PYTHONIOENCODING=utf-8
export NO_COLOR=1

# 2. Check NLM auth
nlm notebook list --quiet

# 3. Nếu auth fail
nlm login
```

### Chạy research pipeline

```
/research "chủ đề nghiên cứu" --notebook <alias> --count 10
```

### Query notebook đã có

```
/nlm query <alias> "câu hỏi cụ thể"
```

### Tạo notebook mới

```bash
nlm notebook create "Tên Chủ Đề"
nlm alias set <short-name> <uuid>
```

### Thêm web sources (không qua YouTube)

```bash
nlm source add <notebook> --url "https://..."
```

---

*Tài liệu này là output của WX-KPIPE-001 "GOD MODE" — Knowledge Pipeline project.*
*Thuộc hệ thống IPARAG | Workshop X*
