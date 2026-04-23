---
created: 2026-04-15
updated: 2026-04-15
type: sop
status: active
assignee: NV Tổng hợp + CEO supervise
---

# ERPNext Company Setup — Workshop X

**Prerequisite:** ERPNext installed và accessible (01_Installation_Guide.md)
**Thời gian:** ~2-3 giờ

---

## 1. Chart of Accounts — TT200

ERPNext > Setup > Chart of Accounts

### Cấu trúc TT200 cơ bản (Map vào ERPNext)

| TK | Tên tài khoản | ERPNext Account Type | Root Type |
|----|---------------|---------------------|-----------|
| **111** | Tiền mặt | Cash | Asset |
| **112** | Tiền gửi ngân hàng | Bank | Asset |
| **131** | Phải thu khách hàng | Receivable | Asset |
| **152** | Nguyên vật liệu | Stock | Asset |
| **153** | Công cụ dụng cụ | Stock | Asset |
| **155** | Thành phẩm | Stock | Asset |
| **156** | Hàng hóa | Stock | Asset |
| **211** | Vay ngắn hạn | — | Liability |
| **331** | Phải trả nhà cung cấp | Payable | Liability |
| **334** | Phải trả người lao động | Payable | Liability |
| **411** | Vốn chủ sở hữu | Equity | Equity |
| **511** | Doanh thu bán hàng | Income Account | Income |
| **621** | Chi phí NVL trực tiếp | Expense Account | Expense |
| **622** | Chi phí nhân công trực tiếp | Expense Account | Expense |
| **627** | Chi phí sản xuất chung | Expense Account | Expense |
| **641** | Chi phí bán hàng | Expense Account | Expense |
| **642** | Chi phí quản lý DN | Expense Account | Expense |

### Cách Import

1. ERPNext > Chart of Accounts > Import
2. Hoặc tạo thủ công từng account theo bảng trên
3. Set Default: 
   - Default Receivable Account: 131
   - Default Payable Account: 331
   - Default Income Account: 511
   - Default COGS Account: 621
   - Stock Received But Not Billed: 151 (tạo mới)

---

## 2. Warehouse Setup

ERPNext > Stock > Warehouse

| Warehouse | Abbreviation | Type | Purpose |
|-----------|:------------:|------|---------|
| **Kho Nguyên Vật Liệu** | WH-NVL | Stores | Raw materials, components, COTS parts |
| **WIP - PX Cơ Khí Chính Xác** | WIP-CKCX | WIP | Items being machined |
| **WIP - PX Điện Tử** | WIP-DT | WIP | Items being assembled (electronics) |
| **WIP - PX Điện Cơ** | WIP-DC | WIP | Electromechanical assembly |
| **WIP - PX Vật Liệu** | WIP-VL | WIP | Surface treatment, packaging |
| **Kho Thành Phẩm** | WH-TP | Finished Goods | Completed products ready to ship |
| **Kho Phế Phẩm** | WH-PP | Scrap | Defective items, scrapped material |

### Warehouse Tree

```
Workshop X (parent)
  ├── WH-NVL (Stores)
  ├── WIP-CKCX
  ├── WIP-DT
  ├── WIP-DC
  ├── WIP-VL
  ├── WH-TP (Finished Goods)
  └── WH-PP
```

---

## 3. Work Station Setup

ERPNext > Manufacturing > Work Station

| Work Station | ID | Quản đốc | Nhân viên | Operating Cost (est.) |
|-------------|:---:|----------|:---------:|:--------------------:|
| PX Cơ Khí Chính Xác | WS-CKCX | QĐ 1 | 4 CN | VND/giờ (tính sau) |
| PX Điện Tử | WS-DT | QĐ 2 | 4 CN | VND/giờ |
| PX Điện Cơ | WS-DC | QĐ 3 | 4 CN | VND/giờ |
| PX Vật Liệu | WS-VL | QĐ 4 | 4 CN | VND/giờ |

Mỗi Work Station set:
- Holiday List: VN 2026
- Working Hours: 08:00-17:00
- Capacity: 4 workers

---

## 4. Item Groups (Product Categories)

ERPNext > Stock > Item Group

```
All Item Groups
  ├── Raw Materials
  │   ├── Metals (nhôm, thép, đồng)
  │   ├── Electronics (encoder, ESP32, solenoid, NFC)
  │   ├── Fasteners (bu-lông, ốc, vít)
  │   └── COTS (projector, GPU, UPS, motor)
  ├── Sub-Assembly
  │   ├── Mechanical Sub-Assy
  │   ├── Electronic Sub-Assy
  │   └── Cable Harness
  ├── Products
  │   ├── TOWED-TARGET
  │   ├── GUN-MOUNT
  │   ├── TARGET-DRONE
  │   ├── NAVAL-SIM
  │   ├── CUAV-SIM
  │   ├── LOMAH
  │   ├── TOWED-AST
  │   └── UUV
  └── Consumables
      ├── Welding (que hàn, khí Argon)
      ├── Cutting (đĩa cắt, dầu cắt gọt)
      └── Packaging (foam, thùng, pallet)
```

---

## 5. Fiscal Year & Settings

| Setting | Value |
|---------|-------|
| Fiscal Year | 01/01/2026 - 31/12/2026 |
| Currency | VND |
| Country | Vietnam |
| Date Format | dd-mm-yyyy |
| Time Zone | Asia/Ho_Chi_Minh |
| Default Warehouse | WH-NVL |
| Default Finished Goods | WH-TP |

---

## 6. Print Format

Tạo print format cho:
- Sales Invoice (Hóa đơn bán hàng) — tiếng Việt
- Purchase Order (Đơn đặt hàng) — tiếng Việt
- Delivery Note (Phiếu xuất kho) — tiếng Việt

ERPNext > Print Format Builder > customize templates

---

## Checklist Hoàn Thành

- [ ] Chart of Accounts TT200 imported/created
- [ ] 7 Warehouses created
- [ ] 4 Work Stations created
- [ ] Item Groups tree created
- [ ] Fiscal year + currency + timezone set
- [ ] Default accounts set (receivable, payable, income, COGS)
- [ ] Test: tạo 1 Item (ví dụ: "Nhôm 6061 tấm 10mm") → verify stock entry works

---

## Tiếp Theo

→ `03_User_Accounts.md` — 26 users, roles, permissions
