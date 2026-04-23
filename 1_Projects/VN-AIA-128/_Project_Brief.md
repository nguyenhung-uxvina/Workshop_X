---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #status/active]
tier: 1-prototype
deadline: 2026-04-19
---

# VN-AIA-128 — Trợ Lý Ảo Nội Bộ Hải Đoàn 128

## Tổng Quan

| | |
|--|--|
| **Mã dự án** | VN-AIA-128 |
| **Tên sản phẩm** | Trợ Lý Ảo Nội Bộ (Internal AI Assistant) |
| **Mô tả** | Giải pháp xây dựng trợ lý ảo nội bộ phục vụ công tác của ngành — hệ thống AI hỗ trợ tra cứu quy định, tạo văn bản, phân tích dữ liệu nghiệp vụ cho cán bộ Hải đoàn 128 Hải quân (Tổng Công ty Tân Cảng) |
| **Khách hàng** | Hải đoàn 128 Hải quân — Tổng Công ty Tân Cảng Sài Gòn |
| **Tier** | **Tier 1 — Prototype** (physical gate ≤ 30 ngày) |
| **Đơn vị phát triển** | Workshop X, Việt Nam |
| **Phân loại** | Phần mềm AI / Hệ thống thông tin nội bộ |
| **Bảo mật** | NỘI BỘ — dữ liệu không mật nhưng nhạy cảm nghiệp vụ |

## Mục Tiêu & Tiêu Chí Hoàn Thành

> Dự án HOÀN THÀNH khi: có prototype trợ lý ảo hoạt động, tra cứu được ≥1 bộ tài liệu nội bộ, demo cho Hải đoàn 128.

### Success Criteria (specific + measurable)
1. Trợ lý trả lời chính xác ≥80% câu hỏi về quy định nội bộ (trên bộ test 20 câu)
2. Thời gian phản hồi ≤10 giây / câu hỏi
3. Chạy trên hạ tầng kiểm soát được (on-premise hoặc private cloud VN) — KHÔNG gửi dữ liệu ra nước ngoài
4. Demo thành công cho ≥3 cán bộ Hải đoàn 128

## Kiến Trúc Dự Kiến (Phase 0 — sơ bộ)

```
┌─────────────────────────────────────────────────────────────┐
│                    VN-AIA-128 ARCHITECTURE                  │
│                                                             │
│  ┌──────────────┐    ┌──────────────┐    ┌──────────────┐  │
│  │  DATA LAYER  │    │  AI ENGINE   │    │  INTERFACE   │  │
│  │              │    │              │    │              │  │
│  │• Tài liệu   │───▶│• RAG Pipeline│───▶│• Web Chat UI │  │
│  │  quy định    │    │• LLM (local/ │    │• API         │  │
│  │• Văn bản     │    │  VN cloud)   │    │• Mobile (W)  │  │
│  │  mẫu         │    │• Embedding   │    │              │  │
│  │• Dữ liệu    │    │  + Vector DB │    │              │  │
│  │  nghiệp vụ   │    │              │    │              │  │
│  └──────────────┘    └──────────────┘    └──────────────┘  │
│                                                             │
│  CONSTRAINTS:                                               │
│  • On-premise hoặc private cloud VN (KHÔNG foreign cloud)  │
│  • Dữ liệu không rời khỏi mạng nội bộ                     │
│  • Xác thực người dùng qua hệ thống hiện có               │
│  • Tiếng Việt là ngôn ngữ chính                            │
└─────────────────────────────────────────────────────────────┘
```

## Domains (Triple Helix — adapted for SW product)

| Domain | Phạm vi | Lead | Clock Speed |
|--------|---------|------|-------------|
| **Hạ tầng (Infrastructure)** | Server, network, deployment, security | TBD (CNTT Tân Cảng?) | Tuần |
| **AI/ML** | RAG pipeline, LLM selection, embedding, vector DB, prompt engineering | Workshop X CEO | Tuần |
| **Nghiệp vụ (Domain Content)** | Tài liệu quy định, văn bản mẫu, quy trình nghiệp vụ | Hải đoàn 128 SME | Tháng |

## ACH Applicability

**YES — sản phẩm này BẢN CHẤT là ACH:**
- AI (LLM + RAG) thay thế tra cứu thủ công (hardware = con người đọc tài liệu)
- Commodity hardware (server thường) + AI model = giảm thời gian tra cứu 10-50×
- Fallback: Level 1 — người dùng tự tra cứu truyền thống nếu AI sai/offline

## Tài Liệu Liên Quan

- forge-scout: ACH Opportunity Matrix (VN-AIA-128 chưa trong matrix — thêm sau)
- Archived: VN-AICC (similar concept, border surveillance — different domain)

## Physical Gate (Tier 1 — ≤30 ngày)

| Milestone | Deadline | Deliverable |
|-----------|----------|-------------|
| **Demo MVP** | **2026-04-19** | RAG chatbot trả lời 20 câu hỏi quy định, demo cho 3 cán bộ HD128 |
