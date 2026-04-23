---
created: 2026-04-15
updated: 2026-04-15
type: project
status: active
tier: 1
tags: [#type/project, #status/active]
---

# WX-ERP-001 — ERPNext Implementation

## Tổng Quan

| Hạng mục | Chi tiết |
|----------|----------|
| **Tên** | Workshop X ERP — ERPNext Self-Hosted |
| **Tier** | 1 — Infrastructure (operational, not product) |
| **Mục tiêu** | Hệ thống quản lý toàn diện: Manufacturing → Inventory → Finance → HR → IPARAG bridge |
| **Timeline** | 12 tuần (5 phases) |
| **Users** | 26 người (CEO, PGĐ, 4 QĐ, 16 CN, KTT, NV TC, NV Kho, NV TH) |
| **Platform** | ERPNext v15 (Frappe Framework), self-hosted |
| **Cost** | $0 license + ~$50-100/month VPS (hoặc local server) |
| **Done criteria** | All 26 users active, Manufacturing + Inventory + Finance modules live, IPARAG bridge functional |

## Tại Sao ERPNext

1. **Free & open-source** — $0 license, Frappe/Python stack
2. **Manufacturing-native** — BOM, Work Order, Routing, Quality Inspection built-in
3. **VN Accounting** — TT200/TT133 chart of accounts localization
4. **Self-hosted** — sovereignty (defense company, SC-5 equivalent)
5. **26-user sweet spot** — designed for SME 10-200 người
6. **Python-extensible** — future AI integration via API
7. **IPARAG bridge possible** — REST API → Claude Code skills

## Org Structure → ERPNext Mapping

```
WX Organization                    ERPNext Entity
─────────────                      ──────────────
Workshop X                    →    Company
  CEO                         →    Administrator + HR Manager
  Phó GĐ                     →    Manufacturing Manager
  PX Cơ Khí Chính Xác        →    Work Station: WS-CKCX
  PX Điện Tử                  →    Work Station: WS-DT
  PX Điện Cơ                  →    Work Station: WS-DC
  PX Vật Liệu                →    Work Station: WS-VL
  4 Quản Đốc                  →    Production User (per WS)
  16 Công Nhân                →    Employee (timesheet)
  Kế Toán Trưởng              →    Accounts Manager
  NV Tài Chính                →    Accounts User
  NV Kho                      →    Stock User
  NV Tổng Hợp                 →    HR User
```

## Product Lines → ERPNext Items

| Product Line | ERPNext Item Group | Variants | BOM Source |
|-------------|-------------------|:--------:|-----------|
| Towed Target (30mm+12.7mm) | TOWED-TARGET | 550+ shipped | Existing production BOM |
| VN-MGM | GUN-MOUNT | 300+ shipped | Existing |
| Target Drone | TARGET-DRONE | 200+ shipped | Existing |
| Naval Sim (Vega Prime) | NAVAL-SIM | 8 systems | Existing |
| VN-CUAV-SIM-001 | CUAV-SIM | New (Phase 3) | HELIX Phase 4 → ERPNext BOM |
| BB-01 LOMAH | LOMAH | 3 shipped | Existing |
| VN-AST-MSL-001 | TOWED-AST | 2 deployed | Existing |
| VN-XUONG-UUV | UUV | 1 building | HELIX Phase 3 |

## 4 Phân Xưởng → ERPNext Work Stations + Routing

```
Typical Product Routing (ví dụ: VN-CUAV-SIM-001 SS1 Weapon Station):

Work Order created → 
  WS-CKCX (Cơ Khí): CNC body, mount, quick-release plate
    → WS-DT (Điện Tử): Encoder mount, solenoid driver, NFC reader, ESP32 wiring
      → WS-DC (Điện Cơ): Assembly cradle + weapon module, cable harness
        → WS-VL (Vật Liệu): Surface treatment (anodize/paint), packaging
          → QC Inspection → Finished Goods Warehouse
```

## 5-Phase Rollout Plan

### Phase 0: Foundation (Tuần 1-2)
- [ ] Install ERPNext v15 on server (local hoặc VPS)
- [ ] Company setup: Workshop X, VND currency, fiscal year
- [ ] Chart of Accounts: TT200 template import
- [ ] Warehouse setup: Raw Material, WIP (×4 PX), Finished Goods, Scrap
- [ ] User accounts: 26 users, roles assigned
- [ ] **Deliverable:** ERPNext accessible, all users can login

### Phase 1: Manufacturing (Tuần 3-4)
- [ ] 4 Work Stations created (WS-CKCX, WS-DT, WS-DC, WS-VL)
- [ ] Import BOM for top 3 products (Towed Target, VN-MGM, Target Drone)
- [ ] Work Order workflow: Draft → Submitted → In Process → Completed
- [ ] Routing templates per product (which PX, sequence, time estimate)
- [ ] QC Inspection template (IQC incoming, PQC in-process, OQC outgoing)
- [ ] Train 4 Quản Đốc: create/update Work Order status
- [ ] **Deliverable:** First Work Order created and tracked through 4 PX

### Phase 2: Inventory (Tuần 5-6)
- [ ] Item master: all raw materials, components, COTS parts
- [ ] Stock Entry: material receipt, material issue, transfer between PX
- [ ] Material Request workflow (QĐ requests → NV Kho issues)
- [ ] Purchase Order: supplier database, PO creation, receipt
- [ ] Reorder Level alerts for critical items
- [ ] Train NV Kho + NV Tài chính
- [ ] **Deliverable:** Real-time stock levels visible, PO workflow live

### Phase 3: Finance (Tuần 7-8)
- [ ] Sales Invoice (khách hàng quốc phòng)
- [ ] Purchase Invoice (nhà cung cấp)
- [ ] Payment Entry + Bank Reconciliation
- [ ] Cost Center per product line
- [ ] Monthly P&L report
- [ ] Train Kế toán trưởng + NV Tài chính
- [ ] **Deliverable:** Invoice → Payment → Reconciliation flow live

### Phase 4: HR + QC (Tuần 9-10)
- [ ] Employee master (26 người)
- [ ] Attendance tracking (daily check-in)
- [ ] Leave management
- [ ] Skill matrix per PX (ai làm được gì)
- [ ] QC Inspection integration with Work Order
- [ ] Train NV Tổng hợp
- [ ] **Deliverable:** HR basics + production QC live

### Phase 5: IPARAG Bridge (Tuần 11-12)
- [ ] ERPNext REST API → Claude Code `/bridge-erp` skill
- [ ] BOM export from HELIX Phase 4 → ERPNext import (CSV/API)
- [ ] Production status → Status.md auto-update
- [ ] Cost actuals → FORGE cost validation
- [ ] CEO dashboard: ERPNext reports + IPARAG bridge-dashboard
- [ ] **Deliverable:** R&D ↔ Production data flow automated

## Server Requirements

| Option | Specs | Cost | Pros | Cons |
|--------|-------|:----:|------|------|
| **Local PC** | i5/i7, 16GB RAM, 500GB SSD, Ubuntu | $0 (existing HW) | Sovereignty, no monthly cost | CEO manages, power dependency |
| **VPS (Hetzner/Contabo)** | 4 vCPU, 8GB RAM, 200GB SSD | $15-30/month | Reliable, accessible anywhere | Data outside VN |
| **VPS VN (Viettel/VNPT)** | Tương đương | $30-80/month | Data in VN, low latency | Higher cost |
| **Frappe Cloud** | Managed ERPNext | $50/user/month = $1,300/month | Zero maintenance | Expensive, sovereignty risk |

**Recommendation:** Local PC (Phase 0-2) → migrate to VPS VN khi stable (Phase 3+).

## Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| User adoption resistance | HIGH | Phase-by-phase training. Start with QĐ (key users). |
| Data migration from manual records | MEDIUM | Don't migrate history. Start fresh. Opening balances only. |
| ERPNext complexity | MEDIUM | Use only needed modules. Disable unused features. |
| Server maintenance | LOW | ERPNext auto-update. Backup daily. |
| IPARAG bridge complexity | LOW | Phase 5 = last. Core ERP works without bridge. |

## Success Metrics

| Metric | Baseline (manual) | Target (ERPNext) | Timeline |
|--------|:-----------------:|:----------------:|:--------:|
| Work Order tracking | 0% | 100% products tracked | Phase 1 |
| Stock accuracy | ~60% (guess) | >95% | Phase 2 |
| Invoice processing time | Days | Hours | Phase 3 |
| Production lead time visibility | None | Real-time per PX | Phase 1 |
| BOM cost accuracy | ±30% (estimate) | ±5% (actual) | Phase 3 |
