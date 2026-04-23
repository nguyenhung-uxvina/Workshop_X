---
created: 2026-03-23
updated: 2026-03-23
type: sop
status: active
tags: [#type/sop, #status/active, #topic/ai-tools]
---

# SOP: Dedicated Google Account cho NLM Automation

## Tại Sao Cần

Multiple sources cảnh báo: Google có thể ban account khi phát hiện browser automation (Playwright/Patchright). Dùng account chính cho NLM CLI = rủi ro mất access Google Drive, Gmail, etc.

## Setup

1. Tạo Google account mới: `workshopx.nlm@gmail.com` (hoặc tương tự)
2. Login NLM bằng account mới: `nlm login`
3. Từ account chính, share notebooks cần thiết:
   - Mở NLM web → notebook → Share → nhập email account mới → "Editor"
4. Verify: `nlm notebook list` hiện notebooks shared
5. Update aliases nếu notebook IDs thay đổi

## Khi Nào Dùng Account Nào

| Task | Account |
|------|---------|
| NLM CLI/MCP automation | Dedicated (workshopx.nlm) |
| Manual NLM web browsing | Chính hoặc dedicated |
| Google Drive, Gmail, etc. | Chính |

## Backup

Nếu dedicated account bị ban:
1. Login NLM bằng account chính (manual, không automation)
2. Tạo account dedicated mới
3. Re-share notebooks
