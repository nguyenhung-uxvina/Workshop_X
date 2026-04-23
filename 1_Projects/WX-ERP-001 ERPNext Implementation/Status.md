---
created: 2026-04-15
updated: 2026-04-16
type: project-status
status: active
tier: 1
tags: [#type/project, #status/active]
---

# WX-ERP-001 — Status

## Tổng Quan

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên** | ERPNext Self-Hosted Implementation |
| **Tier** | 1 — Infrastructure |
| **Phase** | **Phase 0: Foundation (ACTIVE)** |
| **Approach** | Step-by-step coaching: Phase 0 → Phase 1 (Manufacturing first) |
| **Kickoff** | **2026-04-15** |
| **Learning** | /learning ERPNext Manufacturing completed 2026-04-16 |
| **Admin** | CEO (hands-on) → NV Tổng hợp (takeover after Phase 1) |

## Three Laws (từ /learning 2026-04-16)

1. **BOM Immutability** — BOM bất biến sau Submit. Cancel → Duplicate → Re-Submit.
2. **Master Data Gravity** — 80% effort = master data. Work Order chỉ là kết quả.
3. **Stock Entry Truth** — Không có Stock Entry = không tồn tại. Kỷ luật vận hành > công nghệ.

## Phase Progress

| Phase | Status | Target | Ghi chú |
|-------|:------:|:------:|---------|
| Phase 0: Foundation | **ACTIVE** | 15-28/04 | Install, company setup, users, CoA, warehouses |
| Phase 1: Manufacturing | **NEXT** | Tuần 3-4 | **80/20 rule:** tuần 1 = master data, tuần 2 = workflow |
| Phase 2: Inventory | Pending | Tuần 5-6 | Stock, PO, Reorder |
| Phase 3: Finance | Pending | Tuần 7-8 | Invoice, Payment, P&L |
| Phase 4: HR + QC | Pending | Tuần 9-10 | Employee, Attendance, Inspection |
| Phase 5: IPARAG Bridge | Pending | Tuần 11-12 | API, BOM sync, dashboard |

## Phase 0 — Step-by-Step Coaching

**SOP files:** `Phase0-Foundation/` (01, 02, 03)

| Step | Task | SOP | Status | Ghi chú |
|:----:|------|:---:|:------:|---------|
| 0.1 | Install ERPNext v15 (Docker, Ubuntu) | 01 | ⬜ | Local PC, ~2-3h |
| 0.2 | Setup Wizard (Company, Currency, FY) | 01 | ⬜ | Workshop X, VND, 01-01 |
| 0.3 | Chart of Accounts TT200 | 02 | ⬜ | Import template |
| 0.4 | Warehouse structure (7 WH) | 02 | ⬜ | **DR-ERP-002** |
| 0.5 | User accounts (26 users, roles) | 03 | ⬜ | Per-PX permissions |
| 0.6 | Backup + verify access from LAN | 01 | ⬜ | All 26 users login test |

### DR-ERP-002: 7 Warehouse Structure

```
Workshop X (Group)
├── Raw Material          ← NV Kho manages
├── WIP-CKCX              ← QĐ Cơ Khí Chính Xác
├── WIP-DT                ← QĐ Điện Tử
├── WIP-DC                ← QĐ Điện Cơ
├── WIP-VL                ← QĐ Vật Liệu
├── Finished Goods        ← NV Kho manages
└── Scrap                 ← QĐ reports, NV Kho tracks
```

## Phase 1 — Manufacturing Step-by-Step Coaching

**Coaching SOP:** `Phase1-Manufacturing/` (11 steps)
**Product line đầu tiên:** Towed Target 30mm (TRL 9, 550 shipped, BOM rõ nhất)
**Rule:** 80% master data (Step 1.1-1.6) → 20% workflow (Step 1.7-1.11)

| Step | Task | Day | Status | Dependency |
|:----:|------|:---:|:------:|:----------:|
| 1.1 | Tạo Items — Finished Good (Towed Target 30mm) | D1 | ⬜ | Phase 0 done |
| 1.2 | Tạo Items — Raw Materials (tất cả components) | D1-D2 | ⬜ | 1.1 |
| 1.3 | Tạo 4 Workstations với operating costs | D3 | ⬜ | — |
| 1.4 | Tạo Operations (CNC, Assembly, Wiring, Surface, QC) | D3 | ⬜ | 1.3 |
| 1.5 | Tạo Routing cho Towed Target (sequence 4 PX) | D4 | ⬜ | 1.3 + 1.4 |
| 1.6 | Tạo BOM — review kỹ — Submit (BẤT BIẾN!) | D4-D5 | ⬜ | 1.2 + 1.5 |
| 1.7 | Tạo Work Order từ BOM → observe auto-created Job Cards | D6 | ⬜ | 1.6 |
| 1.8 | Start WO → Material Transfer Stock Entry (Raw → WIP) | D7 | ⬜ | 1.7 |
| 1.9 | Complete Job Cards per PX → Finish WO → Manufacture SE | D7-D8 | ⬜ | 1.8 |
| 1.10 | Quality Inspection template + test | D8-D9 | ⬜ | 1.9 |
| 1.11 | Repeat full cycle cho VN-MGM (test retention) | D10 | ⬜ | 1.1-1.10 |

### Coaching Protocol

Mỗi step, CEO chạy: `hỏi Claude → Claude hướng dẫn cụ thể → CEO thực hiện trong ERPNext → ghi kết quả`

**Cách gọi:** "step 1.1" hoặc "bước tiếp theo"
- Claude sẽ hướng dẫn chính xác: click vào đâu, nhập gì, field nào bắt buộc
- Sau khi CEO hoàn thành → Claude verify bằng checklist
- Nếu sai → Claude hướng dẫn fix trước khi qua step tiếp

## CEO Decisions Log

| # | Date | Decision | Lý do |
|---|------|----------|-------|
| DR-ERP-001 | 2026-04-16 | Phase 1 timeline: 80/20 master data vs workflow | Law 2: Master Data Gravity |
| DR-ERP-002 | 2026-04-16 | 7 warehouses (Raw, 4×WIP per PX, FG, Scrap) | Law 3: per-PX visibility |
| DR-ERP-003 | 2026-04-16 | Training = behavior-first, not feature-first | Law 3: Stock Entry Truth |
| DR-ERP-004 | 2026-04-16 | First product: Towed Target 30mm | TRL 9, 550 shipped, BOM rõ nhất |
| DR-ERP-005 | 2026-04-16 | BOM source: interview 4 QĐ, không ước đoán | Law 1: BOM Immutability |

## WX-OPS Phase (NOW — vault-based)

| Module | Status | Files | Skill |
|--------|:------:|:-----:|:-----:|
| Production | ✅ Active | _work_orders.csv, _routing.md | `/ops production` |
| Inventory | ✅ Active | _stock_ledger.csv, _suppliers.csv | `/ops inventory` |
| Finance | ✅ Ready | _invoices.csv, _cashflow.csv | `/ops finance` |
| HR | ✅ Seeded | _employees.csv (26 người) | `/ops hr` |
| CRM | ✅ Seeded | _customers.csv | `/ops crm` |

**Location:** `2_Areas/BRIDGE — Operations/WX-OPS/`
**Skill:** `/ops` — unified operations command

## ERPNext Phase (LATER — when WX-OPS process validated)

Trigger to migrate:
- [ ] WX-OPS used consistently >1 month
- [ ] Process pain points identified and resolved
- [ ] CSV data format stable (no more column changes)
- [ ] NV Tổng hợp trained on ERPNext basics

ERPNext SOPs ready: Phase0-Foundation/ (01, 02, 03)
