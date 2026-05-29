---
created: 2026-05-29
updated: 2026-05-29
type: sop
status: active
tags: [#type/sop, #status/active, #topic/ai-tools, #topic/technology]
---

# Kết Nối Tana MCP Server (Official Local MCP)

> Hướng dẫn kết nối Claude Code với **Tana official local MCP server**.
> Đây là cách chính thức của Tana — thay thế bridge Python tự viết trước đây
> (`tana_iparag_mcp.py`) vốn gọi các endpoint cloud không tồn tại công khai.

---

## Tại Sao Dùng Official Local MCP?

Tana hiện cung cấp **Local API + MCP server** tích hợp sẵn trong app desktop. Nó
expose các tool thật để **đọc và ghi** graph (điều mà cloud Input API — vốn
chỉ ghi (write-only) — không làm được):

| Tool | Chức năng |
|------|-----------|
| `search_nodes` | Tìm node bằng structured query (tối đa 2500 kết quả) |
| `read_node` | Đọc nội dung node dưới dạng markdown |
| `get_children` | Lấy children của một node (có phân trang) |
| `create_node` | Tạo node mới |
| `import_tana_paste` | Import theo định dạng Tana Paste |
| `list_tags` | Liệt kê supertags |

> Lưu ý: Tana **cloud Input API** (`addToNodeV2`) chỉ ghi được, không đọc/search
> được. Vì vậy chiều "fetch inbox từ Tana" chỉ khả thi qua **local MCP** này.

---

## Yêu Cầu Trước Khi Kết Nối

1. **Tana Desktop app đang chạy** — local MCP chỉ hoạt động khi app mở.
2. **Bật feature flag "Local API"** trong **Tana Labs** (nếu chưa thấy mục
   Local API settings).
3. Vào **Menu → Options → Local API settings** trong Tana để bật Local API.

Local MCP server mặc định chạy tại: `http://localhost:8262/mcp`

---

## Cách Kết Nối

### Cách 1 — Đã cấu hình sẵn trong repo (`.mcp.json`)

Repo này đã chứa entry sau (project-scoped, tự load khi mở Claude Code tại vault):

```json
{
  "mcpServers": {
    "tana-local": {
      "type": "http",
      "url": "http://localhost:8262/mcp"
    }
  }
}
```

### Cách 2 — Thêm bằng CLI (nếu muốn scope user, dùng mọi nơi)

```bash
claude mcp add --transport http tana-local http://localhost:8262/mcp
```

- `-s user` → dùng cho tất cả project
- `-s project` → chỉ project hiện tại (mặc định ~ tương đương `.mcp.json`)

---

## Xác Thực (OAuth)

Local MCP dùng OAuth, **không có token tĩnh** lưu trong file config:

1. Trong Claude Code, chạy `/mcp`
2. Chọn server `tana-local`
3. Hoàn tất luồng OAuth:
   - Một modal hiện trong **Tana Desktop** → bấm **Approve**
   - Một cửa sổ trình duyệt xác nhận trạng thái xác thực
4. Sau khi xong, `/mcp` sẽ hiển thị `tana-local` ở trạng thái **running/connected**

---

## Kiểm Tra & Troubleshooting

| Triệu chứng | Nguyên nhân / Cách xử lý |
|-------------|--------------------------|
| `Connection refused` | Tana Desktop chưa chạy, **hoặc** Local API chưa bật trong Tana Labs |
| Không thấy "Local API settings" | Bật feature flag **Local API** trong Tana Labs trước |
| Server không xuất hiện trong `/mcp` | Kiểm tra `.mcp.json` đúng cú pháp, mở Claude Code tại thư mục vault |
| Tool gọi lỗi auth | Chạy lại `/mcp` → re-authenticate (OAuth) |

> Lưu ý môi trường: nếu bạn chạy Claude Code trong môi trường remote/cloud (web),
> `localhost:8262` trỏ tới container chứ không phải máy bạn → local MCP chỉ kết
> nối được khi Claude Code chạy **trên cùng máy với Tana Desktop**.

---

## Liên Quan COD

- Cấu hình + xác thực MCP: **D** (Default — làm một lần rồi automate)
- Quyết định *đưa dữ liệu nào* từ Tana vào IPARAG và phân loại: **C** (Core — judgment)
- Draft/format node, search connections qua tool: **O** (Offload)

---

## Nguồn Gốc

- Tana — Local API & MCP Documentation: https://tana.inc/docs/local-api-mcp
- Tana — Connect Claude Code/Codex/Gemini to Tana with local MCP
- Tana — Input API (cloud, write-only): https://tana.inc/docs/input-api
- Ngày cập nhật: 2026-05-29
