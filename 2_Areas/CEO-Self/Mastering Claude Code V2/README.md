# Day 1 — CLAUDE.md Hierarchy + Config + Habits

## 🎯 Mục tiêu hôm nay
Hoàn thành 5 checklist items: ☑1 ☑2 ☑7 ☑12 ☑13

---

## ✅ Đã hoàn thành (tự động)

### ☑1 — Project CLAUDE.md
File `CLAUDE.md` đã tạo ở root project `CC-Mastery-V2/`.
- Claude Code sẽ tự đọc file này mỗi khi mở session trong project

### ☑2 — Global CLAUDE.md
File `~/.claude/CLAUDE.md` đã tạo.
- Áp dụng cho TẤT CẢ projects
- Chứa: Identity, Standards, Rules, Cost Management, Git Conventions

### ☑12 + ☑13 — Config đã set
Trong `~/.claude/settings.json`:
- `AUTOCOMPACT_PCT = 80` → Tự compact khi context đạt 80%
- `SUBAGENT_MODEL = haiku` → Subagents mặc định dùng Haiku (rẻ)
- `MAX_OUTPUT_TOKENS = 64000` → Tối đa output

---

## 🏋️ Bài tập thực hành

### Exercise 1: Hiểu CLAUDE.md Hierarchy (10 phút)

**Mục đích**: Hiểu cách 4 cấp CLAUDE.md hoạt động.

```
Level 1: ~/.claude/CLAUDE.md          ← Mọi project đều đọc
Level 2: ./CLAUDE.md                  ← Chỉ project này
Level 3: ./src/CLAUDE.md              ← Chỉ khi làm việc trong src/
Level 4: ./src/module/CLAUDE.md       ← Chỉ khi làm việc trong module/
```

**Thực hành**:
1. Mở Claude Code terminal trong `CC-Mastery-V2/`
2. Hỏi Claude: `"Show me what CLAUDE.md files you can see"`
3. Nó phải thấy cả Global + Project CLAUDE.md
4. Tạo thêm `exercises/CLAUDE.md` với nội dung:
   ```markdown
   # Exercises Context
   All files in this directory are practice exercises.
   Do NOT modify files outside exercises/ directory.
   ```
5. Hỏi lại Claude: `"What CLAUDE.md files do you see now?"`
6. Nó sẽ thấy 3 files (Global + Project + exercises/)

**Key learning**: Claude merges TẤT CẢ CLAUDE.md theo thứ tự ưu tiên.
Folder-level rules override project rules, project rules override global.

---

### Exercise 2: @ File References (☑7) (5 phút)

**Mục đích**: KHÔNG BAO GIỜ copy-paste code nữa. Dùng @ refs.

**Thực hành trong Claude Code CLI**:

```
# ❌ ĐỪNG LÀM THẾ NÀY:
"Hey Claude, here's my code: [paste 200 lines]"

# ✅ LÀM THẾ NÀY:
"Review @claude-code-v2-mastery-final.md and summarize the Day 1 tasks"
```

**Các cách dùng @ ref**:
- `@filename.py` — Reference file cụ thể
- `@src/` — Reference cả thư mục
- `@CLAUDE.md` — Reference CLAUDE.md

**Bài tập**:
1. Trong Claude Code, gõ: `Summarize @CLAUDE.md`
2. So sánh: `Compare @CLAUDE.md with the global CLAUDE.md`
3. Thử: `What's in @exercises/day-01/README.md?`

**Rule**: Từ giờ trở đi, mỗi khi muốn Claude đọc file → dùng `@`, KHÔNG copy-paste.

---

### Exercise 3: /cost và /compact Habits (☑12 ☑13) (5 phút)

**Mục đích**: Cài habit kiểm soát chi phí và context.

**Thực hành**:

```
# Bước 1: Mở Claude Code session mới
claude

# Bước 2: Lệnh ĐẦU TIÊN luôn là:
/cost

# Bước 3: Nói chuyện vài câu, rồi:
/cost
# → Quan sát token usage tăng

# Bước 4: Thử compact:
/compact "keep only the CLAUDE.md discussion"
# → Context sẽ thu gọn, chỉ giữ lại phần bạn chỉ định

# Bước 5: Check lại:
/cost
# → Thấy usage giảm sau compact
```

**Habit checklist** (dán cạnh màn hình):
```
🔄 MỖI SESSION:
   → /cost (ngay khi mở)
   → /cost (mỗi 30 phút)
   → /compact (nếu > 80%)
   → /clear (khi đổi task không liên quan)
```

---

### Exercise 4: Keyboard Shortcuts (5 phút)

**Mục đích**: Thuộc lòng 7 shortcuts.

**Thực hành** (mở Claude Code và thử từng cái):

| # | Shortcut | Thử | Kết quả mong đợi |
|---|----------|-----|-------------------|
| 1 | `Esc×2` | Gõ prompt dài rồi nhấn Esc 2 lần | Undo về checkpoint trước |
| 2 | `Ctrl+C` | Chạy lệnh dài rồi nhấn Ctrl+C | Cancel generation |
| 3 | `!` | Gõ `!git status` | Chạy bash command trực tiếp |
| 4 | `@` | Gõ `@CLAUDE.md` | Reference file |
| 5 | `/` | Gõ `/` | Mở menu slash commands |
| 6 | `Ctrl+R` | Nhấn Ctrl+R | Tìm command history |
| 7 | `Shift+Tab` | Nhấn Shift+Tab | Toggle Delegate mode |

---

### Exercise 5: Thinking Modes (5 phút)

**Thực hành 3 thinking modes**:

```
# Mode 1: Think (nhẹ nhàng)
"think about what's in @CLAUDE.md"

# Mode 2: Think harder (trung bình)
"think harder about how to structure a hooks system for this project"

# Mode 3: Ultrathink (mạnh nhất — chỉ dùng cho architecture)
"ultrathink about the optimal 3-layer architecture for managing 4 defense projects"
```

**Rule**: 
- 90% prompts → không cần "think" prefix
- 9% → "think" hoặc "think harder" 
- 1% → "ultrathink" (chỉ cho kiến trúc, gate reviews)

---

## 📊 Day 1 Completion Checklist

Sau khi hoàn thành tất cả exercises:

```
[x] ☑1  CLAUDE.md in project (CC-Mastery-V2/CLAUDE.md)
[x] ☑2  Global ~/.claude/CLAUDE.md
[x] ☑7  Practiced @ file refs (no copy-paste rule installed)
[x] ☑12 AUTOCOMPACT_PCT=80 configured, /compact practiced
[x] ☑13 /cost habit — first command every session
```

---

## 🔜 Next: Day 2
- Hooks (PostToolUse auto-format)
- MCP servers (Playwright)
- Custom slash commands (3+ commands)
