---
created: 2026-04-16
source: learning-pipeline
topic: "ERPNext Manufacturing"
mode: full
type: learning-output
status: active
tags: [#type/learning-output, #status/active]
project: WX-ERP-001
notebook: learn-erpnext-mfg
three_laws:
  - "BOM Immutability Law"
  - "Master Data Gravity Law"
  - "Stock Entry Truth Law"
galaxy_candidates: 4
dmir_cycle: Y
---

# LEARN — ERPNext Manufacturing

> Pipeline: /learning ERPNext manufacturing --mode full --project WX-ERP-001 --level novice
> Sources: 12 (5 Tier 1 official docs + 7 Tier 2 guides)
> NLM notebook: learn-erpnext-mfg

---

## 1. DEPENDENCY CHAIN — 8 Core Entities

```
Item + Workstation + Operation
         ↓
      Routing (sequence of Operations at Workstations)
         ↓
      Bill of Materials (BOM = Items + Routing → "recipe")
         ↓
      Production Plan (aggregates demand → batch WO creation)
         ↓
      Work Order (execution signal → specific Item × Qty × BOM)
         ↓
      Job Card (1 Operation × 1 Workstation × time tracking)
         ↓
      Stock Entry (Material Transfer → WIP → Manufacture → FG)
```

**WX mapping:**
- 4 Workstations: WS-CKCX, WS-DT, WS-DC, WS-VL
- Operations: CNC, Assembly, Wiring, Surface treatment, QC, etc.
- BOMs: 8 product lines, multi-level (sub-assemblies have own BOMs)
- Warehouses: Raw Material, WIP×4 (per PX), Finished Goods, Scrap

## 2. WORKFLOW — Raw Material to Finished Goods

| Step | Document | Status Flow | Stock Effect |
|------|----------|-------------|-------------|
| 1 | Sales Order | Draft → Submitted | Demand signal |
| 2 | Production Plan | Draft → Submitted | Aggregates demand, calculates MRP |
| 3 | Material Request | Draft → Submitted → Completed | Triggers Purchase Order if short |
| 4 | Purchase Order → Receipt | Ordered → Received | +Stock in Raw Material WH |
| 5 | Work Order | Draft → Submitted | Reserves raw materials, auto-creates Job Cards |
| 6 | Stock Entry (Transfer) | "Start" on WO | -Raw Material WH, +WIP WH |
| 7 | Job Card | Draft → WIP → Completed | Time logs, employee, scrap |
| 8 | Stock Entry (Manufacture) | "Finish" on WO | -WIP WH, +Finished Goods WH |
| 9 | Quality Inspection | Pass/Fail | Gate before delivery |

**Key insight for WX:** Work Order → auto-creates Job Cards (1 per Operation). Each Quản đốc manages Job Cards for their PX's workstation. Product flows through 4 PX = 4 Job Cards minimum.

## 3. RATE OF CHANGE DYNAMICS

| Frequency | What Changes | Who |
|-----------|-------------|-----|
| **Hourly/Daily** | Job Cards (start/stop), Stock Entries, Downtime Entries, Material Requests | Quản đốc, NV Kho |
| **Weekly/Monthly** | Production Plans, Valuation Rates, Hourly Workstation Costs | CEO, Kế toán |
| **Never (immutable)** | Submitted BOMs (cancel→duplicate→re-submit), CoA structure, Warehouse hierarchy, Operation definitions | — |

## 4. FAILURE MODES — SME Factory (critical for WX)

| # | Failure Mode | Impact | WX Risk Level |
|---|-------------|--------|:---:|
| FM-1 | Scope creep — all modules at once | Team overwhelmed, revert to Excel | **HIGH** (mitigated by phased plan) |
| FM-2 | Dirty master data — wrong BOM, outdated items | Wrong purchasing, production halt | **HIGH** (1,064 units shipped but BOM never in ERP) |
| FM-3 | Inaccurate routing/capacity data | Overloaded workstations, missed deadlines | **MEDIUM** (4 PX, known bottlenecks) |
| FM-4 | Lack of training + management buy-in | Operators revert to paper | **MEDIUM** (CEO drives, but 16 CN need training) |
| FM-5 | BOM immutability surprise | Changes require cancel→duplicate→re-submit flow | **LOW** (know in advance) |

## 5. PREREQUISITES — Before First Work Order

**Master data must exist IN THIS ORDER:**

1. **Items** — all raw materials + finished goods, with "Include Item in Manufacturing" ✓
2. **Workstations** — WS-CKCX, WS-DT, WS-DC, WS-VL with operating costs (wages, electricity, rent, consumables)
3. **Operations** — each manufacturing step (CNC milling, soldering, assembly, paint, etc.) with default Workstation
4. **Routings** — sequence of Operations for each product type
5. **Warehouses** — Raw Material, WIP (×4 per PX or 1 shared), Finished Goods, Scrap
6. **BOM** — combine Items + Routing, specify quantities, scrap %, then **Submit** (immutable after submit)

Only THEN can you create a Work Order.

## 6. GAPS FOR DEFENSE MANUFACTURER (WX-specific)

Sources severely underemphasize:

| Gap | What's Missing | WX Workaround |
|-----|---------------|--------------|
| **Security compartmentalization** | No ITAR/clearance-level access control | Role-based permissions + custom fields |
| **As-built vs as-designed traceability** | Standard serial/batch tracking only | Custom BOM version tracking + design journal link |
| **Configuration management** | BOM immutable but no formal ECO workflow | Custom Engineering Change Order doctype |
| **Chain of custody** | Simple Material Transfer only | Custom sign-off fields on Stock Entry |
| **Multi-PX handoff tracking** | Job Cards exist but no formal handoff protocol | Custom workflow: QĐ sign-off per Job Card completion |

---

## Ba Quy Luật — ERPNext Manufacturing

### Quy Luật 1: BOM Immutability Law
**Một khi BOM được Submit, nó trở thành bất biến — mọi thay đổi đều phải qua chu trình Cancel → Duplicate → Edit → Re-Submit.**

- Tại sao đây là quy luật: BOM là "recipe" trung tâm kết nối toàn bộ Manufacturing module (Work Order, Job Card, Stock Entry, Costing). Nếu BOM có thể edit tự do, toàn bộ lịch sử sản xuất sẽ mất tính nhất quán. ERPNext enforce bằng cách lock BOM sau submit.
- Phản trực giác: Hầu hết người dùng mới kỳ vọng "sửa BOM" giống sửa Excel. Thực tế, mỗi lần thay đổi BOM tạo ra một version mới — giống như Git commit, không phải file save.
- **WX impact:** 8 product lines × nhiều variants = PHẢI chuẩn hóa BOM kỹ trước khi submit. Sai BOM = sai purchasing + sai costing + production halt. Đây là điểm đầu tư thời gian lớn nhất của Phase 1.

### Quy Luật 2: Master Data Gravity Law
**Chất lượng output của ERPNext Manufacturing hoàn toàn bị quyết định bởi chất lượng master data đầu vào — Item, Workstation, Operation, Routing — theo đúng thứ tự phụ thuộc.**

- Tại sao đây là quy luật: Dependency chain là tuyến tính bắt buộc (Item → Workstation → Operation → Routing → BOM → Work Order). Bỏ qua bất kỳ bước nào = toàn bộ downstream sụp đổ. Failure Mode #2 (dirty data) là nguyên nhân #1 thất bại ERP ở SME.
- Phản trực giác: CEO thường muốn "thấy Work Order chạy" trước — nhưng 80% effort thực sự nằm ở việc nhập master data đúng. Work Order chỉ là kết quả, không phải điểm bắt đầu.
- **WX impact:** 1,064 đơn vị đã ship nhưng CHƯA BAO GIỜ có BOM trong ERP. Phải build master data từ đầu — đây là constraint thực sự của Phase 1, không phải ERPNext features.

### Quy Luật 3: Stock Entry Truth Law
**Mọi chuyển động vật lý trong nhà máy PHẢI có Stock Entry tương ứng — nếu không có Stock Entry, hệ thống coi như vật liệu chưa di chuyển, bất kể thực tế.**

- Tại sao đây là quy luật: ERPNext Manufacturing = perpetual inventory. Mỗi Stock Entry tạo ra Ledger Entry → Accounting Entry. Material Transfer (Raw → WIP), Manufacture (WIP → FG), Scrap (WIP → Scrap WH) — tất cả đều là Stock Entry. Bỏ qua Stock Entry = stock accuracy sụp đổ.
- Phản trực giác: Trong nhà xưởng thực tế, vật liệu di chuyển liên tục mà không ai ghi nhận. ERP buộc phải "số hóa" mỗi chuyển động — đây là thay đổi hành vi lớn nhất cho 16 công nhân.
- **WX impact:** Hiện tại stock accuracy ~60% (guess). Target >95%. Gap = 35 percentage points. Đây không phải vấn đề công nghệ — đây là vấn đề kỷ luật vận hành. Nếu CN không ghi Stock Entry, ERPNext sẽ trở thành hệ thống song song vô dụng.

**Kiểm tra chất lượng:**
- [x] Mỗi law có thể nhớ sau 1 tuần không đọc lại? → Có: "BOM bất biến", "Master data quyết định", "Không có Stock Entry = không tồn tại"
- [x] 3 laws có thể sinh lại 80% framework? → Có: Law 1 → BOM workflow, Law 2 → setup sequence, Law 3 → daily operations
- [x] Ít nhất 1 law phản trực giác? → Law 2 (80% effort = master data, not features) + Law 3 (behavior change > technology)

---

## Sources

| # | Title | Tier | URL |
|---|-------|:----:|-----|
| 1 | Manufacturing in ERPNext (official) | T1 | docs.frappe.io |
| 2 | Bill Of Materials (official) | T1 | docs.frappe.io |
| 3 | Job Card (official) | T1 | docs.frappe.io |
| 4 | Manufacturing Settings (official) | T1 | docs.frappe.io |
| 5 | ERP Guide Manufacturing (ERPNext) | T1 | erpnext.com |
| 6 | ClefinCode v15 Manufacturing | T2 | clefincode.com |
| 7 | 5 Core Data Pillars | T2 | erpnext-consultants.com |
| 8 | Step-by-Step Implementation (Matiyas) | T2 | matiyas.com |
| 9 | Factory Floor to Fulfilment (4devnet) | T2 | 4devnet.com |
| 10 | Work Order Plan (Tasker) | T2 | tasker.ph |
| 11 | ERP for Manufacturing SMEs (Adowbig) | T2 | adowbig.com |
| 12 | ERPNext Manufacturing (Kanak) | T2 | kanakinfosystems.com |

---

## DMIR Cycle Plan

**Objective:** Sau cycle, CEO tự tạo Work Order hoàn chỉnh cho 1 product line (Towed Target) qua 4 PX.
**Duration:** 2 tuần × 5h/tuần = 10h | **Dreyfus:** Novice → Advanced Beginner
**Project anchor:** WX-ERP-001 Phase 1

- **D (Diagnose):** Novice — chưa dùng ERPNext Manufacturing, chưa có master data.
- **M (Model):** Dependency Chain + 3 Laws. Mental model: BOM = recipe (bất biến), WO = lệnh SX, JC = phiếu/PX, SE = chứng từ.
- **I (Intervene):** Tuần 1 = master data (Items → WS → Op → Routing → BOM). Tuần 2 = execution (WO → JC → SE → QI). Day 10 = repeat cho VN-MGM.
- **R (Reflect):** Galaxy target 3-4 notes (done: 4). Next cycle = Inventory module.

---

## Decision Bridge — ERPNext Manufacturing × WX-ERP-001

| # | Decision | Insight | Action |
|---|----------|---------|--------|
| DR-ERP-001 | Phase 1 timeline rebalance | Law 2: 80% effort = master data | Tuần 1 = 100% master data, tuần 2 = workflow |
| DR-ERP-002 | Warehouse structure | Law 3: per-PX visibility | 7 WH: Raw, WIP×4 (per PX), FG, Scrap |
| DR-ERP-003 | Training strategy | Law 3: behavioral change | Behavior-first (khi nào tạo SE), not feature-first |
| DR-ERP-004 | First product line | Dependency Chain: đơn giản nhất | Towed Target 30mm (TRL 9, 550 shipped, BOM rõ nhất) |
| DR-ERP-005 | BOM source method | Law 1: BOM phải đúng trước submit | Interview 4 QĐ về actual routing + materials, không ước đoán |

---

## Reflection

- **Trước:** ERPNext Manufacturing = "tạo BOM rồi chạy Work Order"
- **Sau:** 8-entity dependency chain, 80% effort = master data, Stock Entry = behavioral change
- **Surprise:** BOM immutability — design choice, không phải bug
- **dJ/dt:** Judgment tăng ở ERP implementation sequencing
- **Compound:** P-B systematic design (dependency order), Shifting the Burden (adoption failure), Physical-World Interface (stock accuracy)
- **Galaxy:** 4 notes created (133 → 137 total)
