---
created: 2026-04-15
updated: 2026-04-15
type: sop
status: active
assignee: NV Tổng hợp + CEO supervise
---

# ERPNext User Accounts — Workshop X (26 Users)

**Prerequisite:** Company setup completed (02_Company_Setup.md)

---

## User Roles Matrix

| # | Vị trí | Username | ERPNext Roles | Modules Accessible |
|---|--------|----------|--------------|-------------------|
| 1 | **CEO / Giám đốc** | ceo | System Manager, Manufacturing Manager, Accounts Manager, HR Manager | ALL |
| 2 | **Phó GĐ** | pgd | Manufacturing Manager, Stock Manager | Manufacturing, Stock, HR |
| 3 | **QĐ PX Cơ Khí CX** | qd.ckcx | Manufacturing User, Stock User | Manufacturing (WS-CKCX), Stock (WIP-CKCX) |
| 4 | **QĐ PX Điện Tử** | qd.dt | Manufacturing User, Stock User | Manufacturing (WS-DT), Stock (WIP-DT) |
| 5 | **QĐ PX Điện Cơ** | qd.dc | Manufacturing User, Stock User | Manufacturing (WS-DC), Stock (WIP-DC) |
| 6 | **QĐ PX Vật Liệu** | qd.vl | Manufacturing User, Stock User | Manufacturing (WS-VL), Stock (WIP-VL) |
| 7-10 | **CN PX Cơ Khí (×4)** | cn.ckcx.01-04 | Employee Self Service | Timesheet (nếu dùng) |
| 11-14 | **CN PX Điện Tử (×4)** | cn.dt.01-04 | Employee Self Service | Timesheet |
| 15-18 | **CN PX Điện Cơ (×4)** | cn.dc.01-04 | Employee Self Service | Timesheet |
| 19-22 | **CN PX Vật Liệu (×4)** | cn.vl.01-04 | Employee Self Service | Timesheet |
| 23 | **Kế toán trưởng** | ktt | Accounts Manager | Accounts, Buying, Selling |
| 24 | **NV Tài chính** | nv.tc | Accounts User, Purchase User | Accounts, Buying |
| 25 | **NV Kho** | nv.kho | Stock Manager, Purchase User | Stock, Buying |
| 26 | **NV Tổng hợp** | nv.th | HR User, System Manager | HR, Setup, ALL (admin backup) |

---

## Permission Summary

| Module | CEO | PGĐ | QĐ (×4) | CN (×16) | KTT | NV TC | NV Kho | NV TH |
|--------|:---:|:---:|:-------:|:--------:|:---:|:-----:|:------:|:-----:|
| Manufacturing | ✅ Full | ✅ Full | ✅ Own WS | 👁️ View | — | — | — | — |
| Stock/Inventory | ✅ Full | ✅ Full | ✅ Own WH | — | 👁️ View | 👁️ View | ✅ Full | — |
| Buying (Purchase) | ✅ Full | ✅ Approve | — | — | ✅ Approve | ✅ Create | ✅ Create | — |
| Selling (Sales) | ✅ Full | 👁️ View | — | — | ✅ Full | 👁️ View | — | — |
| Accounts | ✅ Full | 👁️ View | — | — | ✅ Full | ✅ Entry | — | 👁️ View |
| HR | ✅ Full | 👁️ View | 👁️ Own team | 👁️ Self | — | — | — | ✅ Full |
| Setup/Admin | ✅ Full | — | — | — | — | — | — | ✅ Full |

---

## Tạo Users (Batch)

ERPNext > Setup > User > New User

Cho mỗi user:
1. Email: `username@workshopx.local` (nội bộ, không cần email thật nếu self-hosted)
2. First Name + Last Name (tiếng Việt OK)
3. Roles: theo bảng trên
4. Password: generate → đổi lần đầu login
5. Module Access: restrict theo bảng Permission

### Lưu ý Quan Trọng

- **16 CN chưa cần tài khoản ngay** nếu chưa dùng Timesheet → tạo Phase 4 (HR)
- **Phase 0 cần tối thiểu 10 users:** CEO, PGĐ, 4 QĐ, KTT, NV TC, NV Kho, NV TH
- Mỗi QĐ chỉ thấy Work Order của PX mình → set User Permission (restrict by Work Station)

---

## Approval Workflow

```
Purchase Order:
  NV Kho (create) → NV TC (verify) → KTT (approve ≤50M VND) → CEO (approve >50M VND)

Work Order:
  QĐ (create) → PGĐ (approve) → QĐ (execute) → QĐ (complete + QC)

Sales Invoice:
  KTT (create) → CEO (approve)

Material Request:
  QĐ (request) → NV Kho (issue from WH-NVL → WIP-[PX])
```

---

## Checklist

- [ ] 10 core users created (Phase 0)
- [ ] Roles assigned per matrix
- [ ] Module restrictions tested (QĐ cannot access Accounts)
- [ ] Approval workflow configured (PO, WO)
- [ ] Each user logged in successfully + changed password
- [ ] NV Tổng hợp confirmed as system admin backup

---

*Phase 0 User Setup complete. Phase 1 starts Manufacturing module.*
