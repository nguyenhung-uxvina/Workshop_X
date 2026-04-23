---
created: 2026-03-20
type: icd
version: 0
project: VN-AIA-128
---

# ICD v0 — VN-AIA-128 (Trợ Lý Ảo Hải Đoàn 128)

**Status:** SKELETON — details populated during Phase 1

---

## Domain Boundaries (adapted for SW product)

| Domain | Phạm vi | Owner |
|--------|---------|-------|
| **Hạ tầng (Infra)** | Server hardware/VM, network, firewall, SSL, backup, monitoring | TBD (CNTT Tân Cảng) |
| **AI/ML** | LLM, embedding model, RAG pipeline, vector DB, prompt templates, evaluation | Workshop X |
| **Nghiệp vụ (Content)** | Tài liệu quy định, văn bản mẫu, quy trình, FAQ, domain terminology | HD128 SME |
| **Frontend** | Web UI, authentication, session management, user feedback | Workshop X |

---

## Interface Register

| IF-ID | From | To | Type | Description | Status |
|-------|------|----|------|-------------|:------:|
| IF-001 | Content | AI/ML | Data | Tài liệu → chunking → embedding → vector DB | TBD |
| IF-002 | AI/ML | Frontend | API | RAG query API (question → answer + sources) | TBD |
| IF-003 | Frontend | AI/ML | Request | User question + conversation history | TBD |
| IF-004 | Infra | AI/ML | Compute | GPU/CPU allocation for LLM inference | TBD |
| IF-005 | Infra | Frontend | Network | HTTPS endpoint, DNS, load balancer | TBD |
| IF-006 | Frontend | Infra | Auth | User authentication (SSO / LDAP / standalone) | TBD |
| IF-007 | AI/ML | Content | Feedback | Documents cited per answer → content quality tracking | TBD |
| IF-008 | Frontend | AI/ML | Telemetry | User feedback (👍/👎), query logs, session data | TBD |

---

## Constraints Inherited

| Source | Constraint |
|--------|-----------|
| Bảo mật | Dữ liệu KHÔNG rời mạng nội bộ / private cloud VN |
| Ngôn ngữ | Tiếng Việt là ngôn ngữ chính (UI + LLM output) |
| Hạ tầng | On-premise hoặc FPT Cloud / Viettel Cloud (KHÔNG AWS/Azure/GCP) |
| Người dùng | Xác thực bắt buộc — không anonymous access |
| Nội dung | Tài liệu nội bộ — phân loại NỘI BỘ (không mật nhưng nhạy cảm) |

---

## ICD Evolution Plan

| Version | Phase | Content |
|:-------:|:-----:|---------|
| **v0** | 0 | Skeleton — this document |
| v1 | 1 | Requirements allocated, LLM + vector DB selected |
| v2 | 2 | API contracts defined, data pipeline specified |
| v3 | 3 | Frozen — deployment config, security hardened |

---

*VN-AIA-128 ICD v0 — Phase 0 Skeleton*
