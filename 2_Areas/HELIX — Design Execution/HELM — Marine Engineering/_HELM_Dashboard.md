---
created: 2026-03-08
updated: 2026-03-08
type: area-dashboard
status: active
tags: [#type/moc, #status/active, #topic/technology]
---

# HELM — Marine Engineering Dashboard

> Trung tâm kiến thức tính toán và thiết kế phương tiện/cấu trúc trên biển cho Workshop X.
> Sub-area của HELIX — Design Execution.

---

## Phạm Vi

HELM bao gồm kiến thức kỹ thuật hàng hải phục vụ thiết kế sản phẩm Workshop X:

| Domain | Mô tả | Projects liên quan |
|--------|--------|-------------------|
| **Mooring & Anchoring** | Tính toán neo, dây neo, catenary, anchor holding | VN-AST-MSL-001 |
| **Hull Structures** | Kết cấu thân (HDPE, nhôm, composite), scantlings | VN-AST-MSL-001, VN-XUONG-UUV |
| **Hydrostatics & Stability** | Ổn định, GM/B, trim, chống chìm | VN-AST-MSL-001, VN-XUONG-UUV |
| **Marine Materials** | HDPE, nylon, chain grade, SS316, anti-fouling | Cross-product |
| **Sea Loads & Environment** | Sóng, dòng chảy, gió, metocean Việt Nam | Cross-product |
| **Classification & Standards** | IRClass, DNV, ABS, TCVN hàng hải | Cross-product |

---

## Kiến Thức Đã Tích Luỹ

### NLM Notebooks (Gemini-indexed, query miễn phí)

| Alias | Notebook | Sources | Chủ đề |
|-------|----------|---------|--------|
| `ast` | AST-MSL-001 Research | 40 | Mooring design, catenary, anchor, chain, nylon, UFC/DNV standards |
| `hdpe-mooring` | HDPE Hull Mooring Interface | 18 | HDPE attachment, ESC, backing plates, through-hull, IRClass |

### Research Outputs (0_Inbox/)

| File | Ngày | Insights | Pro Ratio |
|------|------|----------|-----------|
| RESEARCH_AST-MSL-001_Mooring_OI4_v2 | 2026-03-08 | 12 (9★★★) | 72% |
| RESEARCH_AST-MSL-001_HDPE_Hull_Mooring_Interface | 2026-03-08 | 11 (7★★★) | 44% |

### Galaxy Notes Liên Quan (8 notes)

**Cluster G — Pahl-Beitz Technical:**
- [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]]
- [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]]
- [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]]

**Cluster H — Physical Design:**
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]]
- [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]]
- [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]]
- [[Hybrid Mooring FEM Trap — Trộn Vật Liệu Buộc Phân Tích Phức Tạp]]
- [[Mooring Weight Trap — Deep Water Nhân Multi-Point Bằng Hidden Mass]]

---

## Design Decisions Log

| ID | Quyết định | Project | Ngày | Rationale |
|----|-----------|---------|------|-----------|
| HELM-DD-001 | Through-hull chain pipe (Option E) cho mooring attachment | AST-MSL-001 | 2026-03-08 | ESC = 0 khi HDPE chịu nén; ranking 5 options qua NLM 18 sources |
| HELM-DD-002 | Hybrid chain+nylon mooring (không pure chain) | AST-MSL-001 | 2026-03-08 | All Tier S sources: pure chain fails 10-30m depth; v2.1 corrected v1 |
| HELM-DD-003 | Chain R3/FM3 grade, 44mm | AST-MSL-001 | 2026-03-08 | UFC standard for comparable Navy buoy class |
| HELM-DD-004 | Drag embedment anchor, fluke 30-50° | AST-MSL-001 | 2026-03-08 | DNV RP-E302 + UFC for sand/mud seabed |

---

## Coverage Gaps (Cần Research Tiếp)

| # | Gap | Confidence | Status | Key Finding |
|---|-----|-----------|--------|-------------|
| 1 | Foam-core compression tube protocol | ★★ | RESEARCHED | OD = 2-3× bolt dia, SS/Al sleeve, no Tideman public data. Composite sandwich practice well-documented but HDPE-specific sparse |
| 2 | Chafing protection HDPE exterior | ★★★ | RESEARCHED | UHMWPE 10-15mm pads, SS316 countersunk bolts, 10+ year life. ESC/Trelleborg/Global Polymer suppliers |
| 3 | CTE mismatch steel-HDPE | ★★★ | RESEARCHED | HDPE ~120-200 µm/m·°C vs SS316 ~16 = 6-12× ratio. 0.5-1.1mm differential per 200mm span per 30°C. Mitigate: slotted holes + Belleville washers + EPDM isolators |
| 4 | VN metocean data (Hs, Tp, current) | ★★ | RESEARCHED | Central VN coast: Hs 1.0-2.0m (NE monsoon), Cam Ranh bay attenuated. Hs100 exposed = 4.66m, sheltered = 2.7m. VMRCC primary source |
| 5 | Tropical nylon fatigue (UV + saltwater) | ★★★ | RESEARCHED | 28% tensile loss year 1 (no UV stabilizer). UV-stabilized: 18-36 month replacement. Update existing Nylon Derating Cascade note |

### Galaxy Actions from Gap Research
- **Gap 1** → Galaxy candidate: "Compression Tube Protocol — Foam Core Sandwich Load Transfer" (Cluster H)
- **Gap 2** → Galaxy candidate: "UHMWPE Chafe Pad — Sacrificial Wear at Material Interfaces" (Cluster H)
- **Gap 3** → Galaxy candidate: "CTE Mismatch Rule — 10x Expansion Demands Slotted Joints" (Cluster G)
- **Gap 4** → Galaxy candidate: "VN Metocean Design Envelope — Cam Ranh to Vung Tau" (Cluster H + #defense)
- **Gap 5** → UPDATE existing [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]] with 28% year-1 UV data

---

## Tiêu Chuẩn Tham Khảo

| Standard | Scope | Đã dùng cho |
|----------|-------|------------|
| IRClass Guidelines on Thermoplastic Vessels Rev.1 (2024) | HDPE hull classification | Hull interface design |
| PPI TN-38 (2021) | PE bolted connections | Backing plate torque |
| PPI Handbook Ch.10 | PE marine installations | Mooring flex restraints |
| DNV RP-E302 | Mooring design | Anchor selection |
| UFC 4-150-06 | Navy moorings | Chain grade, buoy class |
| API RP 2SK | Station-keeping mooring | Catenary analysis |

---

## Quy Tắc Vận Hành

1. **Mỗi research output** phải có NLM notebook — query miễn phí, lưu kiến thức dài hạn
2. **Mỗi design decision** ghi vào Decision Log ở trên với rationale
3. **Coverage gaps** track ở bảng trên — khi gap được giải quyết, chuyển insight vào Galaxy
4. **Cross-product transfer:** kiến thức HELM áp dụng cho mọi sản phẩm marine của WX
5. **3-month rule:** resource không dùng trong 3 tháng → archive (per CLAUDE.md)

---

*Dashboard này là living document — cập nhật sau mỗi /research hoặc design review liên quan đến marine engineering.*
