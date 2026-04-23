---
created: 2026-04-16
updated: 2026-04-16
type: sop
status: active
tags: [#type/sop, #status/active]
---

# Phase 1: Manufacturing — Step-by-Step Coaching Guide

> Product line: **Towed Target 30mm** (TRL 9, 550 shipped)
> Duration: 10 ngày × 1h/ngày = 10h
> Rule: 80% master data (Day 1-5) → 20% workflow (Day 6-10)
> Three Laws: BOM Immutability | Master Data Gravity | Stock Entry Truth

---

## Cách Dùng Guide Này

1. CEO mở ERPNext + mở Claude Code
2. Nói: **"step 1.1"** (hoặc "bước tiếp theo")
3. Claude hướng dẫn chính xác: click đâu, nhập gì, field nào
4. CEO thực hiện trong ERPNext
5. CEO confirm "done" → Claude verify bằng checklist
6. Qua step tiếp

**Nếu kẹt:** hỏi Claude, đừng guess. Sai master data = cascade downstream (Law 2).

---

## TUẦN 1: MASTER DATA (Day 1-5)

### Step 1.1 — Tạo Item: Finished Good (Day 1, ~30 min)

**Mục tiêu:** Tạo Item "Towed Target 30mm" trong ERPNext

**Trước khi bắt đầu:**
- [ ] ERPNext đã install và login được (Phase 0 done)
- [ ] 7 Warehouses đã tạo (Phase 0, Step 0.4)

**Hướng dẫn:**
1. Manufacturing > Items > + New
2. Điền:

| Field | Giá trị | Ghi chú |
|-------|---------|---------|
| Item Code | `TT-30MM-001` | Mã sản phẩm chính |
| Item Name | Towed Target 30mm | Tên tiếng Việt cũng được |
| Item Group | Products | Hoặc tạo group "Towed Target" |
| Default Unit of Measure | Nos (Number) | 1 unit = 1 bộ hoàn chỉnh |
| Is Stock Item | ✅ | Quản lý tồn kho |
| Include Item in Manufacturing | ✅ | **BẮT BUỘC** — nếu không tick, không xuất hiện trong BOM |
| Default Warehouse | Finished Goods | Target warehouse |
| Valuation Method | Moving Average | Đơn giản cho WX |

3. Tab **Manufacturing:**
   - Default BOM: (để trống, sẽ link sau khi tạo BOM)
   
4. Tab **Inventory:**
   - Shelf Life in Days: (để trống nếu không hết hạn)
   - Has Serial No: ✅ (nếu muốn track từng unit — recommended cho defense)
   - Serial Number Series: `TT30-####`

5. Save

**Checklist sau step:**
- [ ] Item `TT-30MM-001` xuất hiện trong Item list
- [ ] "Include Item in Manufacturing" = ✅
- [ ] Default Warehouse = Finished Goods

---

### Step 1.2 — Tạo Items: Raw Materials (Day 1-2, ~1-2h)

**Mục tiêu:** Tạo tất cả raw materials / components cho Towed Target 30mm

**QUAN TRỌNG:** Trước step này, CEO phải interview QĐ hoặc lấy từ production records:
- Danh sách tất cả vật liệu đầu vào (thép, nhôm, mạch điện tử, cáp, v.v.)
- Số lượng cần cho 1 bộ Towed Target
- Đơn vị tính (kg, m, cái, bộ)
- Nhà cung cấp chính

**Hướng dẫn cho MỖI raw material:**
1. Stock > Items > + New
2. Điền:

| Field | Giá trị |
|-------|---------|
| Item Code | `RM-xxx` (ví dụ: RM-STEEL-PLATE-3MM) |
| Item Name | Tên vật liệu |
| Item Group | Raw Material |
| UoM | Kg / M / Nos / Set |
| Is Stock Item | ✅ |
| Include Item in Manufacturing | ✅ |
| Default Warehouse | Raw Material |

3. Nếu là sub-assembly (bán thành phẩm tự sản xuất):
   - Item Group → Sub Assembly
   - Sẽ cần BOM riêng (multi-level BOM)

**Tip:** Tạo spreadsheet trước (Item Code | Name | UoM | Qty per unit | Supplier) rồi nhập vào ERPNext. Không nhập trực tiếp mà không có danh sách.

**Checklist sau step:**
- [ ] Tất cả raw materials có trong Item list
- [ ] Mỗi item có "Include Item in Manufacturing" = ✅
- [ ] Default Warehouse = Raw Material cho tất cả
- [ ] Không trùng Item Code

---

### Step 1.3 — Tạo 4 Workstations (Day 3, ~30 min)

**Mục tiêu:** Tạo 4 Workstation tương ứng 4 Phân xưởng

**Hướng dẫn cho MỖI workstation:**
1. Manufacturing > Workstation > + New
2. Điền:

| Workstation | Name | Production Capacity | Working Hours |
|-------------|------|:-------------------:|:-------------:|
| WS-CKCX | Phân Xưởng Cơ Khí Chính Xác | 1 | 07:30-17:00 |
| WS-DT | Phân Xưởng Điện Tử | 1 | 07:30-17:00 |
| WS-DC | Phân Xưởng Điện Cơ | 1 | 07:30-17:00 |
| WS-VL | Phân Xưởng Vật Liệu | 1 | 07:30-17:00 |

3. Tab **Operating Costs** (cho mỗi WS):

| Cost | Ước tính/giờ (VND) | Ghi chú |
|------|-------------------:|---------|
| Electricity Cost | (CEO nhập) | Tiền điện / giờ vận hành |
| Rent Cost | (CEO nhập) | Khấu hao nhà xưởng / giờ |
| Consumable Cost | (CEO nhập) | Vật tư tiêu hao / giờ |
| Wages | (CEO nhập) | Lương CN / giờ (trung bình) |

4. Save

**Checklist sau step:**
- [ ] 4 Workstations visible: WS-CKCX, WS-DT, WS-DC, WS-VL
- [ ] Mỗi WS có Working Hours + Operating Costs
- [ ] Production Capacity = 1 (sẽ adjust sau khi hiểu rõ hơn)

---

### Step 1.4 — Tạo Operations (Day 3, ~30 min)

**Mục tiêu:** Tạo các Operation (bước công việc) cho sản xuất

**Operations cho Towed Target 30mm (ví dụ — CEO adjust theo thực tế):**

| Operation | Default Workstation | Mô tả |
|-----------|:------------------:|-------|
| CNC Gia Công | WS-CKCX | Phay, tiện, khoan chi tiết cơ khí |
| Hàn Lắp Ráp CK | WS-CKCX | Hàn khung, lắp ráp cơ khí |
| Lắp Ráp Điện Tử | WS-DT | Board, sensor, dây tín hiệu |
| Lắp Ráp Điện Cơ | WS-DC | Motor, solenoid, cable harness |
| Xử Lý Bề Mặt | WS-VL | Anodize, sơn, đóng gói |
| Kiểm Tra QC | WS-VL | Kiểm tra chức năng + ngoại quan |

**Hướng dẫn:**
1. Manufacturing > Operation > + New
2. Operation Name: (từ bảng trên)
3. Default Workstation: (từ bảng trên)
4. Description: (mô tả ngắn)
5. Save

**Checklist sau step:**
- [ ] Tất cả Operations có trong Operation list
- [ ] Mỗi Operation có Default Workstation đúng PX

---

### Step 1.5 — Tạo Routing (Day 4, ~30 min)

**Mục tiêu:** Tạo Routing = thứ tự các Operation cho Towed Target 30mm

**Hướng dẫn:**
1. Manufacturing > Routing > + New
2. Routing Name: `RT-TOWED-TARGET-30MM`
3. Trong bảng Operations, thêm theo thứ tự:

| # | Operation | Workstation | Time (min) | Ghi chú |
|:-:|-----------|:-----------:|:----------:|---------|
| 1 | CNC Gia Công | WS-CKCX | (CEO ước lượng) | Bước đầu tiên |
| 2 | Hàn Lắp Ráp CK | WS-CKCX | (CEO) | Cùng PX, sau CNC |
| 3 | Lắp Ráp Điện Tử | WS-DT | (CEO) | Chuyển sang PX Điện Tử |
| 4 | Lắp Ráp Điện Cơ | WS-DC | (CEO) | Chuyển sang PX Điện Cơ |
| 5 | Xử Lý Bề Mặt | WS-VL | (CEO) | Chuyển sang PX Vật Liệu |
| 6 | Kiểm Tra QC | WS-VL | (CEO) | Bước cuối cùng |

4. Save

**Lưu ý:** Thời gian Operation KHÔNG CẦN chính xác ngay. Ước lượng hợp lý, sẽ refine sau khi có data thực tế từ Job Cards. Đừng perfectionism — "good enough" master data > "perfect" master data muộn 2 tuần.

**Checklist sau step:**
- [ ] Routing `RT-TOWED-TARGET-30MM` có 4-6 Operations theo thứ tự
- [ ] Mỗi Operation link đúng Workstation
- [ ] Có time estimate (không cần chính xác)

---

### Step 1.6 — Tạo BOM + Submit (Day 4-5, ~1h)

**Mục tiêu:** Tạo Bill of Materials cho Towed Target 30mm

**⚠️ LAW 1 WARNING: BOM BẤT BIẾN SAU SUBMIT. Review kỹ trước khi click Submit!**

**Hướng dẫn:**
1. Manufacturing > Bill of Materials > + New
2. Điền header:

| Field | Giá trị |
|-------|---------|
| Item | TT-30MM-001 (Towed Target 30mm) |
| Quantity | 1 |
| Is Active | ✅ |
| Is Default | ✅ |
| With Operations | ✅ |
| Routing | RT-TOWED-TARGET-30MM |

3. Routing auto-fills Operations table → verify đúng thứ tự + workstation

4. Trong tab **Items** (Raw Materials), thêm từng dòng:

| Item Code | Qty | UoM | Source Warehouse |
|-----------|:---:|:---:|:----------------:|
| (từ Step 1.2) | (số lượng cho 1 bộ) | (đơn vị) | Raw Material |

5. Tab **Scrap** (nếu có phế phẩm dự kiến):
   - Thêm scrap items + estimated % (optional, có thể thêm sau)

6. **REVIEW CHECKLIST TRƯỚC KHI SUBMIT:**
   - [ ] Tất cả raw materials đúng số lượng?
   - [ ] Operations đúng thứ tự?
   - [ ] Source Warehouse = Raw Material cho tất cả?
   - [ ] Có thiếu material nào không?
   - [ ] Đã interview QĐ để verify? (DR-ERP-005)

7. Click **Save** trước (Draft status)
8. Review lần cuối
9. Click **Submit** → BOM trở thành IMMUTABLE

**Nếu phát hiện sai sau Submit:**
Cancel → Duplicate → Edit → Re-Submit (BOM version mới)

**Checklist sau step:**
- [ ] BOM submitted (status = Submitted, blue background)
- [ ] BOM Costing section hiển thị estimated cost
- [ ] Item `TT-30MM-001` có Default BOM link

---

## TUẦN 2: WORKFLOW EXECUTION (Day 6-10)

### Step 1.7 — Tạo Work Order (Day 6, ~30 min)

**Mục tiêu:** Tạo Work Order đầu tiên → observe auto-created Job Cards

**Hướng dẫn:**
1. Manufacturing > Work Order > + New
2. Điền:

| Field | Giá trị |
|-------|---------|
| Item to Manufacture | TT-30MM-001 |
| BOM No | (auto-loaded — default BOM) |
| Qty to Manufacture | 1 (sản xuất 1 bộ để test) |
| Planned Start Date | (hôm nay) |
| Source Warehouse | Raw Material |
| Work-in-Progress Warehouse | WIP-CKCX (PX đầu tiên) |
| Target Warehouse | Finished Goods |
| Scrap Warehouse | Scrap |

3. Verify: Items table hiển thị tất cả raw materials từ BOM
4. Verify: Operations table hiển thị tất cả operations từ Routing
5. **Submit** Work Order

**Sau khi Submit → quan sát:**
- [ ] Status = "Not Started"
- [ ] Job Cards tự động tạo (1 per Operation)
- [ ] Check: Manufacturing > Job Card list → thấy Job Cards mới

**Checklist:**
- [ ] Work Order submitted
- [ ] Job Cards auto-created (số lượng = số Operations)
- [ ] Raw materials reserved (check Source Warehouse stock)

---

### Step 1.8 — Start Production: Material Transfer (Day 7, ~30 min)

**Mục tiêu:** Transfer raw materials từ Raw Material WH → WIP WH

**⚠️ LAW 3: Stock Entry = truth. Bước này tạo chứng từ di chuyển vật tư.**

**Hướng dẫn:**
1. Mở Work Order vừa tạo
2. Click **Start**
3. ERPNext tạo Stock Entry (type: Material Transfer for Manufacture)
4. Verify:
   - Source Warehouse = Raw Material
   - Target Warehouse = WIP-CKCX
   - Items + quantities đúng theo BOM

5. **Submit** Stock Entry

**Sau khi Submit → kiểm tra:**
- [ ] Raw Material WH: stock giảm đúng số lượng
- [ ] WIP-CKCX WH: stock tăng đúng số lượng
- [ ] Work Order status = "In Process"

---

### Step 1.9 — Job Cards + Finish (Day 7-8, ~1h)

**Mục tiêu:** Complete Job Cards per PX → Finish Work Order

**Hướng dẫn cho MỖI Job Card (theo thứ tự Routing):**

1. Manufacturing > Job Card > chọn Job Card đầu tiên (WS-CKCX)
2. Click **Start Job** → ghi nhận thời gian bắt đầu
3. (Trong thực tế: QĐ sẽ làm bước này khi CN bắt đầu làm)
4. Click **Complete Job** → ghi nhận:
   - Completed Qty: 1
   - Employee: (chọn CN thực hiện — optional)
5. Submit Job Card
6. Repeat cho Job Cards tiếp theo (WS-DT → WS-DC → WS-VL)

**Sau khi TẤT CẢ Job Cards completed:**
1. Quay lại Work Order
2. Click **Finish**
3. ERPNext tạo Stock Entry (type: Manufacture)
   - Consumes: raw materials từ WIP
   - Produces: 1 × TT-30MM-001 vào Finished Goods
4. Submit Stock Entry

**Checklist:**
- [ ] Tất cả Job Cards = Completed
- [ ] Stock Entry (Manufacture) submitted
- [ ] Finished Goods WH: +1 TT-30MM-001
- [ ] WIP WH: stock = 0 (consumed)
- [ ] Work Order status = Completed

---

### Step 1.10 — Quality Inspection (Day 8-9, ~30 min)

**Mục tiêu:** Tạo QC template + thực hiện inspection

**Hướng dẫn:**
1. Stock > Quality Inspection Template > + New
2. Template Name: `QI-TOWED-TARGET-30MM`
3. Thêm parameters:

| Parameter | Acceptance Criteria | Numeric/Visual |
|-----------|-------------------|:--------------:|
| Kích thước tổng thể | Theo bản vẽ ±1mm | Numeric |
| Chất lượng bề mặt sơn | Không bong tróc, đều màu | Visual |
| Chức năng kéo | Hoạt động trơn tru | Visual |
| (thêm theo yêu cầu QC thực tế) | | |

4. Save
5. Link template vào Item TT-30MM-001:
   - Mở Item → Quality Inspection Template = `QI-TOWED-TARGET-30MM`
   - Inspection Required Before Delivery = ✅

6. Tạo Quality Inspection:
   - Stock > Quality Inspection > + New
   - Reference Type: Work Order (hoặc Stock Entry)
   - Item: TT-30MM-001
   - Điền kết quả kiểm tra
   - Status: Accepted / Rejected
   - Submit

**Checklist:**
- [ ] QI template created
- [ ] Item linked to template
- [ ] Quality Inspection submitted cho Work Order vừa hoàn thành

---

### Step 1.11 — Repeat cho VN-MGM (Day 10, ~1h)

**Mục tiêu:** Test retention — lặp lại full cycle cho product thứ 2 KHÔNG xem guide

**Self-test:**
1. Tạo Item FG: VN-MGM (gun mount)
2. Tạo Raw Materials (different set)
3. Reuse existing Workstations (same 4 PX)
4. Tạo new Operations nếu cần (hoặc reuse)
5. Tạo Routing
6. Tạo BOM → review → Submit
7. Tạo Work Order → Start → Job Cards → Finish
8. Quality Inspection

**Nếu stuck ở bước nào → ghi lại → đó là gap cần review.**

**Dreyfus assessment sau Day 10:**
- [ ] Có thể tạo full cycle không cần guide? → Advanced Beginner ✅
- [ ] Vẫn cần xem guide cho mỗi step? → Novice → lặp lại tuần 2

---

## Sau Phase 1

- Update Status.md: tất cả steps = ✅
- Next: Phase 2 (Inventory) — builds trên master data đã tạo
- NV Tổng hợp bắt đầu shadow CEO trong Phase 2
