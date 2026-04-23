---
created: 2026-03-26
updated: 2026-03-26
type: sop
status: active
tags: [#type/sop, #status/active, #meta]
proven: 2026-03-26 (ICDM → helix-concept-generate 8/8 tools)
---

# Pipeline: Research → NLM → Skill Upgrade

> Quy trình đã chứng minh để nâng cấp Claude Skills từ deep research.
> Proven case: ICDM research (15 sources) → helix-concept-generate + helix-quality-gate upgraded (8/8 ICDM tools integrated trong 1 session).

---

## Tổng Quan

```
/research --deep <topic>
    ↓
NLM Notebook (curated sources, free Gemini analysis)
    ↓
NLM Deep Extraction (6-question framework)
    ↓
/first-principles per extracted tool (adapt for WX context)  ← NEW
    ↓
/skill-from-research UPGRADE <skill-name> --notebook <alias>
    ↓
Surgical Edit (chỉ thêm delta, không rewrite)
    ↓
Log + Validate
```

**Thời gian:** ~2.5-3.5 giờ end-to-end (research 1h + extraction 30m + first-principles adapt 30m + edit 30m + validate 30m)
**Chi phí NLM:** $0 (Gemini tokens miễn phí)
**Chi phí Claude:** Chỉ cho skill editing (surgical Edit = ít tokens)

---

## Step 1: /research --deep <topic>

**Mục đích:** Tìm nguồn có chất lượng cao (Tier S/A), phân loại, CEO chọn.

**Lệnh:**
```
/research --deep <topic> [--notebook <alias>]
```

**Output:**
- Source table (S/A/B/C tiered)
- CEO selects sources → NLM notebook created
- Research report saved → `3_Resources/Deep-Content-Analyzer-Outputs/RESEARCH_<slug>_<date>.md`

**Key decisions (Core):**
- CEO chọn sources nào để analyze
- CEO chọn notebook alias

**Proven stats (ICDM case):**
- 15 sources found, 80% pro ratio
- 11/15 ingested to NLM (4 paywall failures = expected)
- NLM notebook: `icdm`

---

## Step 1.5: CEO Review NLM Notebook (Core — BLOCKING)

**Mục đích:** Xác nhận NLM notebook đủ chất lượng trước khi extraction. Một số nguồn bị paywall, restricted access, hoặc ingest fail → notebook có thể thiếu thông tin quan trọng. CEO tự kiểm tra và bổ sung.

**Tại sao gate này cần thiết:** ICDM case: 4/15 sources paywall fail. Nếu extraction chạy trên notebook thiếu → output thiếu → skill upgrade thiếu → phải lặp lại pipeline. Gate này tránh rework.

**Process:**

1. **AI báo cáo:** Liệt kê sources đã ingest vs. failed:
   ```
   NLM NOTEBOOK REVIEW — {{notebook_alias}}

   INGESTED (N/M):
   | # | Source | Tier | Status |
   |---|--------|------|--------|
   | 1 | {{title}} | S | ✓ Ingested |
   | 2 | {{title}} | A | ✗ FAILED — paywall |
   | 3 | {{title}} | A | ✗ FAILED — restricted |

   CRITICAL GAPS:
   - {{source}} (Tier S/A) failed → knowledge gap: {{what's missing}}
   - If gap not filled → extraction will lack: {{specific procedure/data}}

   ⏸️ WAITING FOR CEO CONFIRMATION
   ```

2. **CEO tự review notebook:**
   - Mở NotebookLM trực tiếp (notebooklm.google.com)
   - Đọc qua source list → kiếm thêm nguồn bên ngoài nếu cần
   - Tự upload PDF/URL vào notebook (bypass paywall bằng tài khoản cá nhân, thư viện, hoặc mua)
   - Kiểm tra: notebook có đủ cover topic cần extract không?

3. **CEO xác nhận:**
   - "ĐỦ — proceed to Step 2" → AI tiếp tục extraction
   - "THÊM — đã add X sources, proceed" → AI re-assess rồi extract
   - "THIẾU — cần tìm thêm" → quay lại Step 1 tìm thêm sources

**COD:** Gate = Core (CEO). AI chỉ báo cáo gaps, KHÔNG tự quyết notebook đủ hay thiếu.

**Thời gian:** 5-30 phút (tùy CEO cần thêm bao nhiêu sources)

---

## Step 2: NLM Deep Extraction (6-Question Framework)

**Mục đích:** Trích xuất domain knowledge cần thiết cho skill upgrade.

**Query template cho UPGRADE mode:**
```
NLM query: "I need EXACT procedures for [N] tools to add to an existing
[framework] skill. For each tool provide:
(a) input required
(b) exact procedure steps
(c) output format/table
(d) decision thresholds
(e) integration with existing workflow"
```

**Key principle:** Chỉ trích xuất CHO GAP — không re-extract knowledge đã có trong skill.

**Proven stats (ICDM case):**
- 2 NLM queries (6-question + targeted extraction)
- Extracted: DSO 4-step scale, Roobustool 2-dimension checklist, Two-stage evaluation, RTA knowledge gap, DQM/CSR scoring
- NLM cung cấp procedure + citations, nhưng KHÔNG có exact formulas → WX tự thiết kế scoring adapted cho context

---

## Step 2.5: /first-principles — Adapt Tool for WX Context

**Mục đích:** Bridge gap giữa "academic procedure" và "WX-executable tool." NLM trích xuất WHAT (quy trình), first-principles reveals WHY (bedrock truths) và WHEN NOT (assumptions fail trong WX context).

**Khi nào chạy:** Cho MỖI tool extracted ở Step 2 mà:
- Procedure vague (ví dụ: "4-step scale" nhưng không có số cụ thể)
- Context khác WX (tool thiết kế cho team 20 người, WX = solo CEO)
- Assumptions chưa rõ (tool giả định có data mà WX chưa có)

**Khi nào SKIP:** Tool đã đủ cụ thể + context khớp WX (ví dụ: CFMA từ Weiss 2015 đã có bảng SFD rõ ràng → không cần adapt thêm).

**Lệnh:**
```
/first-principles [tool name] trong context [WX project/constraint]
```

**Process (simplified 3-step, không cần full 5-step):**

```
STRIP:
  → Tool này dựa trên assumptions nào?
  → Assumptions nào là PROVEN (physics/math) vs CONVENTION (team-based, large org)?

INVERT:
  → Nếu WX context (solo CEO, defense VN, xuồng nhỏ, budget limited):
    - Assumption nào SAI?
    - Tool nào vẫn hoạt động?
    - Tool nào cần modify?

REBUILD:
  → Giữ PROVEN principles
  → Bỏ/thay CONVENTION elements
  → Thêm WX-specific: scoring scales, thresholds, Vietnamese defense context
  → Output: ADAPTED procedure ready for surgical Edit
```

**Adaptation patterns (đã chứng minh):**

| Pattern | Academic → WX Adapted | Example |
|---------|----------------------|---------|
| Vague scale → Quantified | "excellent/good/fair/poor" → Score 1-16 (Performance × Risk) | DSO |
| Missing checklist → WX-specific questions | "quantitative checklist" → 13 câu hỏi cụ thể cho defense | Roobustool |
| Conceptual framework → Scoring table | "information gap principle" → 3-domain × 5-level matrix | RTA |
| No formula → Linear CSR | "CSR functions" → 0-10 scoring vs QFD targets | DQM |
| Team-based → CEO + 2 experts | "PDT consensus (20 người)" → CEO + chuyên gia Cơ khí + chuyên gia AI/Edge scores, CEO quyết định | All tools |
| Generic → Defense VN | Standard robustness → +A8 blast resistance, +B7 ACH upgradability | Roobustool |

**Output:** Adapted tool procedure → feeds directly into Step 3 (surgical Edit).

**COD:** STRIP + INVERT = Offload (AI). REBUILD scoring/thresholds = Core (CEO validates adapted scale is practical).

---

## Step 3: /skill-from-research UPGRADE

**Mục đích:** Map extracted knowledge vào đúng vị trí trong SKILL.md hiện tại.

**Lệnh:**
```
/skill-from-research UPGRADE <skill-name> from <notebook-alias>.
Add: [tool 1] Step X, [tool 2] Step Y, [tool 3] Step Z.
```

**CRITICAL RULE: Surgical Edit, NOT Rewrite.**
- Đọc SKILL.md hiện tại hoàn toàn
- Xác định EXACT insertion points cho từng tool mới
- Dùng Edit tool (không Write) — preserve existing content
- Chỉ thêm delta, không đụng code đang hoạt động

**Insertion pattern:**
```
1. New Step → Insert BETWEEN existing steps (e.g., Step 3.5a between 3 and 4)
2. New checklist → Append to existing evaluation section
3. New Gate criterion → Add to Auto-Check list (A10, A11, A12...)
4. New output section → Add to MANDATORY Output Sections list
```

**Proven stats (ICDM case):**
- 5 surgical Edits to helix-concept-generate
- 1 surgical Edit to helix-quality-gate
- 1 update to MANDATORY Output Sections
- 0 regressions (existing steps untouched)

---

## Step 4: Validate + Log

### 4a. Regression Check
- Đọc lại SKILL.md sau edit
- Verify: existing steps vẫn intact
- Verify: new steps reference correct inputs/outputs
- Verify: MANDATORY Output Sections updated

### 4b. Log to _meta/learnings.md
```
[YYYY-MM-DD] Skill upgrade <skill>: added [tools] from [NLM notebook].
Gap: [what was missing]. Trigger: [research/CEO feedback/standards update].
Pipeline: /research --deep → /skill-from-research UPGRADE → surgical Edit.
```

### 4c. Update Memory (nếu cần)
- MEMORY.md → update skill inventory count
- CLAUDE.md → update nếu new capability changes workflow

---

## Khi Nào Dùng Pipeline Này

| Trigger | Example |
|---------|---------|
| Deep research phát hiện methodology gap | ICDM → 4 missing tools in HELIX |
| CEO feedback: "skill X thiếu Y" | "concept-generate cần robustness check" |
| New standard/paper published | VDI 2221:2024 revision |
| Post-project lesson: missing procedure | "Gate 2 didn't catch knowledge gap risk" |
| Cross-product learning: pattern from project A applicable to skill | VN-12.7MM recoil pattern → general LARS skill |

## Khi KHÔNG Dùng Pipeline Này

| Case | Dùng gì thay |
|------|-------------|
| Minor fix (1 rule, 1 gotcha) | Quick Upgrade (direct Edit, no NLM) |
| CEO provides procedure from experience | Quick Upgrade (CEO knowledge = source) |
| Trigger keyword update only | Direct Edit to frontmatter |
| Brand new skill (no existing SKILL.md) | `/skill-from-research CREATE` mode |

---

## Anti-Patterns (Đã Phát Hiện)

1. **Full rewrite thay vì surgical edit** → Mất existing knowledge đã validated. NEVER Write tool cho UPGRADE, luôn dùng Edit.
2. **Add tool mà không update MANDATORY Output Sections** → Skill có step nhưng không enforce output. Session 57 lesson.
3. **NLM extraction quá generic** → "Tell me about ICDM" = useless. Phải specific: "EXACT procedure for DSO 4-step scale."
4. **Quên log upgrade** → Next session không biết skill đã thay đổi. Always log to learnings.md.
5. **Add tool không có WX adaptation** → NLM provides academic procedure, WX cần practical scoring adapted cho defense/VN context. Always adapt.

---

## Pipeline Variants

### Variant A: Research → Skill CREATE (new skill)
```
/research --deep <domain>
    → NLM notebook
    → /skill-from-research CREATE <new-skill-name>
    → Full 6-question extraction
    → Write new SKILL.md
    → Deploy to ~/.claude/commands/
```

### Variant B: Galaxy → Skill Bridge (no NLM)
```
Scan Galaxy notes relevant to skill domain
    → Extract as rules
    → Quick Upgrade: Edit SKILL.md with Galaxy-derived rules
    → No NLM needed
```

### Variant C: CEO Feedback → Quick Upgrade (no research)
```
CEO: "skill X should handle Y"
    → Read SKILL.md
    → Edit to add Y
    → Log
    → Done (5 min)
```

---

## Proven Track Record

| Date | Skill | Tools Added | Source | Time |
|------|-------|------------|--------|------|
| 2026-03-20 (S57) | helix-concept-generate | TRIZ Steps 0/0.5/4.5, CFMA Step 5.5 | Mayda 2014 paper | ~2h |
| 2026-03-20 (S58) | helix-task-clarify | TVDT Step 5.5 | Weiss 2015 paper | ~1h |
| 2026-03-20 (S58) | forge-job-map | HOQ H1-H5 | Mayda 2014 | ~1h |
| 2026-03-20 (S58) | helix-quality-gate | A7 TRIZ, A8 I-Level, A9 CFMA | Mayda + Weiss | ~30m |
| **2026-03-26 (S59)** | **helix-concept-generate** | **DSO 3.5a, Roobustool 5.6, Two-stage 4A+4B, DQM 9** | **ICDM NLM notebook** | **~2h** |
| **2026-03-26 (S59)** | **helix-quality-gate** | **RTA A12 (Knowledge Gap)** | **ICDM NLM notebook** | **~30m** |

| **2026-03-26 (S60)** | **helix-concept-generate** | **TESE Step 1c (8-trend evolution scorecard)** | **TRIZ-adv NLM notebook** | **~15m** |
| **2026-03-26 (S60)** | **helix-task-clarify** | **IFR Step 4.5 (ideal final result + sacred constraints)** | **TRIZ-adv NLM notebook** | **~15m** |
| **2026-03-26 (S60)** | **helix-embody-realize** | **Trimming Step 5.5 (6 rules + cannot-trim gate)** | **TRIZ-adv NLM notebook** | **~15m** |

**Cumulative: 16 tools integrated across 5 skills in 3 sessions (ICDM 8 + TRIZ Basic 5 + TRIZ Advanced 3).**

---

*Pipeline Reference | CEO-Self | COD: Offload (execution) / Core (source selection, validation)*
