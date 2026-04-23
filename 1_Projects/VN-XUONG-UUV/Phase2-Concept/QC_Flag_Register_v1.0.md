---
project: VN-XUONG-UUV
phase: 2
type: qc-register
version: 1.0
created: 2026-03-07
status: active
data_confidence: HIGH (100% L1 — tracked from actual QC events)
---

# VN-XUONG-UUV — QC Flag Register

## Mục Đích

Theo dõi tất cả QC flags phát sinh trong quá trình review AI-generated và human-authored documents. Mỗi flag phải có disposition (xử lý) trước khi document được baseline.

---

## QC Flag Register

| Flag # | Ngày | Source Doc | Mô tả | Severity | Disposition | Resolution Date | Author |
|--------|------|-----------|-------|----------|-------------|-----------------|--------|
| QCF-01 | 2026-03-06 | Doc 002 v1.0 | 3 D-requirements chưa lượng hóa (D-02, D-05, D-08) | HIGH | Lượng hóa trong v1.1 — thêm range/tolerance | 2026-03-06 | AI+KN |
| QCF-02 | 2026-03-06 | Doc 002 v1.0 | HC-5 nội địa hóa conflict: 80% (Brief) vs 50% (M-05, SC-6) | HIGH | Giải quyết: hạ HC-5 về 50% theo M-05 consensus | 2026-03-06 | KN |
| QCF-03 | 2026-03-06 | Doc 003 v1.0 | 4/7 stakeholders chưa phỏng vấn (S1, S2, S4, S5) | MEDIUM | Chấp nhận risk; Interview Templates đã chuẩn bị; ưu tiên S2 | Open | KN |
| QCF-04 | 2026-03-06 | Doc 005 v1.0 | VN military procurement standards chưa xác định (Gap #1) | MEDIUM | Chờ phỏng vấn S2 (Navy Procurement) | Open | KN |
| QCF-05 | 2026-03-06 | Doc 002 v1.0 | USBL diagram cosmetic error | LOW | Sửa trong v1.1 | 2026-03-06 | AI |
| QCF-06 | 2026-03-06 | Doc 006 v1.0 | F5, F6 chưa có trong v1.0 (tethered UUV 25km) | HIGH | Thêm trong v1.1 — 15 sub-functions mới | 2026-03-06 | AI+KN |
| QCF-07 | 2026-03-06 | Doc 002 v1.1 | Thiếu SA-09 (emergency tether cable release) | HIGH | Thêm SA-09 trong v1.2 | 2026-03-06 | AI |
| QCF-08 | 2026-03-07 | All Phase 1 | 6/10 Phase 1 docs thiếu `data_confidence` frontmatter | MEDIUM | Bổ sung data_confidence cho tất cả 6 docs | 2026-03-07 | AI+KN |
| QCF-09 | 2026-03-07 | All Phase 1 | Tiếng Việt không dấu trong 15/16 files | LOW | Sửa toàn bộ — 6 files rewritten, 9 files edited | 2026-03-07 | AI |
| QCF-10 | 2026-03-07 | Project root | 6 Phase 0 docs nằm sai vị trí (root thay vì Phase0-PreStudy/) | LOW | Di chuyển vào Phase0-PreStudy/ | 2026-03-07 | AI |

---

## QC Flag Statistics

| Severity | Total | Resolved | Open | % Resolved |
|----------|-------|----------|------|------------|
| HIGH | 4 | 4 | 0 | 100% |
| MEDIUM | 4 | 2 | 2 | 50% |
| LOW | 2 | 2 | 0 | 100% |
| **Total** | **10** | **8** | **2** | **80%** |

### Open Flags

| Flag # | Blocking? | Action Required | Owner | Target Date |
|--------|-----------|-----------------|-------|-------------|
| QCF-03 | No (risk accepted) | Phỏng vấn S1, S2, S4, S5 — ưu tiên S2 | KN | Phase 2 W3-4 |
| QCF-04 | No (risk accepted) | Xác định VN military procurement standards qua S2 interview | KN | Phase 2 W3-4 |

---

## Per-Document QC Checklist

Chạy trước khi document vào gate package:

| # | Kiểm tra | Pass/Fail |
|---|---------|-----------|
| 1 | Frontmatter đầy đủ (project, phase, type, version, data_confidence) | |
| 2 | COD tag trong footer | |
| 3 | Changelog có Author column (AI/Human) | |
| 4 | Data points có L-level tag (L1-L5) | |
| 5 | Cross-references chính xác (file paths, doc numbers) | |
| 6 | Tiếng Việt có dấu đầy đủ | |
| 7 | Không chứa classified data hoặc supplier pricing | |
| 8 | Conflict check vs requirements baseline (Doc 002) | |
| 9 | Figures/diagrams có caption và reference | |
| 10 | Version number tăng đúng theo changelog | |

---

## Quy Trình Tạo Flag Mới

1. Phát hiện vấn đề → Tạo flag entry trong bảng trên
2. Assign severity: HIGH (blocks gate) / MEDIUM (risk) / LOW (cosmetic)
3. Assign owner
4. Giải quyết → Ghi resolution + date
5. Cập nhật Statistics

---

*COD: Core (QC judgment) | Thuộc hệ thống IPARAG*
