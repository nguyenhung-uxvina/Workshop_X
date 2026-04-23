# 📋 PHASE 1: TASK CLARIFICATION
## Detailed Skill Guide - Load khi bắt đầu dự án mới

---

## 🎯 MỤC TIÊU PHASE 1

Tạo **Requirements List hoàn chỉnh** có thể:
- Validated bởi stakeholders
- Traced đến customer needs
- Verified bằng test methods cụ thể
- Không có conflicts

**Thời gian**: 10-15% tổng dự án
**Output chính**: Requirements List (Design Specification)

---

## 📝 QUI TRÌNH 7 BƯỚC

### Bước 1: Thu thập thông tin đầu vào

**Nguồn thông tin**:
- Customer brief / RFP / Technical Proposal
- Market research / competitive analysis
- Applicable standards và regulations
- Similar product documentation
- User feedback / field reports

**Câu hỏi cần trả lời**:
1. Vấn đề cần giải quyết là gì? (What problem?)
2. Ai là người dùng cuối? (End users?)
3. Constraints gì tồn tại? (Budget, timeline, regulations?)
4. Giải pháp hiện tại có gì sai? (Current solutions?)
5. Criteria đánh giá thành công? (Success metrics?)

### Bước 2: Xác định stakeholders

```
┌─────────────────────────────────────────────────────────┐
│ STAKEHOLDER MAPPING TEMPLATE                            │
├─────────────────────────────────────────────────────────┤
│ Customer (người mua):                                   │
│   - Ai quyết định mua?                                  │
│   - Budget bao nhiêu?                                   │
│   - Timeline yêu cầu?                                   │
│                                                         │
│ User (người dùng):                                      │
│   - Ai vận hành hàng ngày?                              │
│   - Trình độ kỹ thuật?                                  │
│   - Điều kiện sử dụng?                                  │
│                                                         │
│ Maintainer (người bảo trì):                             │
│   - Ai bảo trì/sửa chữa?                               │
│   - Công cụ/kỹ năng có sẵn?                            │
│   - Tần suất bảo trì?                                   │
│                                                         │
│ Regulator (cơ quan quản lý):                            │
│   - Tiêu chuẩn áp dụng?                                │
│   - Quy trình phê duyệt?                               │
│   - Yêu cầu chứng nhận?                                │
│                                                         │
│ Manufacturer (nhà sản xuất):                            │
│   - Năng lực sản xuất?                                  │
│   - Công nghệ có sẵn?                                   │
│   - Local content requirements?                         │
└─────────────────────────────────────────────────────────┘
```

### Bước 3: Phân loại requirements theo 16 categories

**PAHL & BEITZ REQUIREMENTS CATEGORIES**:

| # | Category | Typical Questions | Defense-Specific |
|---|----------|-------------------|------------------|
| 1 | **Geometry** | Kích thước? Trọng lượng? | MIL-STD-1366 transport |
| 2 | **Kinematics** | Chuyển động? Tốc độ? | Tracking rates |
| 3 | **Forces** | Tải trọng? Shock? | MIL-STD-810 vibration |
| 4 | **Energy** | Nguồn? Công suất? Hiệu suất? | Battery life, fuel |
| 5 | **Material** | Vật liệu? Chống ăn mòn? | Environmental exposure |
| 6 | **Signals** | I/O? Interfaces? | MIL-STD-1553, RS-232 |
| 7 | **Safety** | An toàn? Fail-safe? | MIL-STD-882 |
| 8 | **Ergonomics** | Người dùng? Training? | MIL-STD-1472 |
| 9 | **Production** | Số lượng? Tốc độ? | Local content 60-75% |
| 10 | **Quality** | Độ tin cậy? MTBF? | MIL-HDBK-217 |
| 11 | **Assembly** | Lắp ráp? Tools? | Field assembly? |
| 12 | **Transport** | Vận chuyển? Đóng gói? | Tactical transport |
| 13 | **Operation** | Điều kiện? Môi trường? | MIL-STD-810 |
| 14 | **Maintenance** | Bảo trì? Spares? | MTTR, tool requirements |
| 15 | **Costs** | Target cost? LCC? | 60-70% of import equiv |
| 16 | **Schedule** | Deadline? Milestones? | Contract requirements |

### Bước 4: Phân loại MUST vs WISH

**MUST (Bắt buộc)**:
- Nếu không đạt → sản phẩm thất bại
- Không có thỏa hiệp
- Thường từ: safety, regulations, physics, contracts

**WISH (Mong muốn)**:
- Nếu đạt → sản phẩm tốt hơn
- Có thể trade-off
- Cần weighted importance (1-5)

```
Ví dụ:
MUST: "Hoạt động được ở -10°C đến +55°C" (từ MIL-STD-810)
WISH: "Trọng lượng < 15kg" (weight=4/5, có thể 18kg nếu cần)
```

### Bước 5: Quantify requirements

**NGUYÊN TẮC**: Mọi requirement có thể → phải có số!

| ❌ Vague | ✅ Quantified |
|----------|---------------|
| "Nhẹ" | "≤ 15 kg (target 12 kg)" |
| "Nhanh" | "Acquisition time ≤ 3 seconds" |
| "Bền" | "MTBF ≥ 5000 hours" |
| "Rẻ" | "Unit cost ≤ $15,000 at lot size 50" |
| "Dễ dùng" | "Operator training ≤ 8 hours" |

### Bước 6: Specify verification method

**4 VERIFICATION METHODS**:

| Method | Ký hiệu | Khi nào dùng |
|--------|---------|--------------|
| **Analysis** | A | Calculation, simulation |
| **Inspection** | I | Visual, measurement |
| **Test** | T | Functional testing |
| **Demonstration** | D | Operational use |

```
Ví dụ requirement entry:

REQ-001: Operating Temperature Range
├── Value: -10°C to +55°C
├── Type: MUST
├── Category: Operation
├── Source: MIL-STD-810H, Method 501.7/502.7
├── Verification: T (Test per MIL-STD-810H)
└── Notes: Storage range -40°C to +70°C
```

### Bước 7: Check conflicts và completeness

**CONFLICT CHECK**:
- Requirements mâu thuẫn nhau?
- Cost vs Performance trade-offs?
- Schedule vs Quality tensions?

**COMPLETENESS CHECK**:
- Tất cả 16 categories có requirements?
- Stakeholder needs được cover?
- Standards requirements included?
- Verification methods feasible?

---

## 📄 REQUIREMENTS LIST TEMPLATE

```markdown
# REQUIREMENTS LIST
## [Project Code]: [Project Name]
### Version: [x.x] | Date: [YYYY-MM-DD]

---

## 1. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | YYYY-MM-DD | [Name] | Initial release |

---

## 2. PROJECT OVERVIEW

**Product Name**: [Formal name]
**Project Code**: VN-XXX-XXX
**Customer**: [Organization]
**End Users**: [Description]
**Development Period**: [Start] - [End]
**Target Cost**: [Amount at lot size]

---

## 3. REQUIREMENTS SUMMARY

| Category | MUST | WISH | Total |
|----------|------|------|-------|
| Geometry | | | |
| Kinematics | | | |
| Forces | | | |
| Energy | | | |
| Material | | | |
| Signals | | | |
| Safety | | | |
| Ergonomics | | | |
| Production | | | |
| Quality | | | |
| Assembly | | | |
| Transport | | | |
| Operation | | | |
| Maintenance | | | |
| Costs | | | |
| Schedule | | | |
| **TOTAL** | | | |

---

## 4. DETAILED REQUIREMENTS

### 4.1 Geometry (Kích thước & Hình học)

| ID | Requirement | Value/Range | Type | Verify | Source | Notes |
|----|-------------|-------------|------|--------|--------|-------|
| GEO-001 | | | | | | |
| GEO-002 | | | | | | |

### 4.2 Kinematics (Động học)
[Similar table structure]

### 4.3 Forces (Lực & Tải trọng)
[Similar table structure]

[Continue for all 16 categories...]

---

## 5. STANDARDS COMPLIANCE MATRIX

| Standard | Sections | Requirements Mapped | Compliance Approach |
|----------|----------|---------------------|---------------------|
| MIL-STD-810H | 501, 502, 507, 514 | OPR-001, OPR-002... | Full test program |
| MIL-STD-461G | RE102, RS103 | SIG-003, SIG-004... | EMI shielding + test |
| MIL-STD-882E | 4.1-4.5 | SAF-001 to SAF-010 | FMEA, FTA |
| TCVN [xxx] | [sections] | [requirements] | [approach] |

---

## 6. VERIFICATION PLAN SUMMARY

| Verification Type | Quantity | Estimated Cost | Duration |
|-------------------|----------|----------------|----------|
| Analysis (A) | | | |
| Inspection (I) | | | |
| Test (T) | | | |
| Demonstration (D) | | | |

---

## 7. OPEN ISSUES & TBD

| Issue ID | Description | Owner | Target Date | Status |
|----------|-------------|-------|-------------|--------|
| TBD-001 | | | | |

---

## 8. APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Author | | | |
| Reviewer | | | |
| Approver | | | |
```

---

## ⚠️ COMMON MISTAKES TO AVOID

1. **"Solution-first" thinking**
   - ❌ "Sử dụng motor XYZ"
   - ✅ "Thrust ≥ 50N, efficiency ≥ 80%"

2. **Vague requirements**
   - ❌ "Phải bền"
   - ✅ "MTBF ≥ 5000 hours per MIL-HDBK-217"

3. **Missing verification**
   - ❌ Requirement không có verification method
   - ✅ Mỗi requirement có A/I/T/D specification

4. **Conflicts not resolved**
   - ❌ Weight < 10kg AND Armor plating required
   - ✅ Explicit trade-off decision documented

5. **Incomplete categories**
   - ❌ Chỉ có functional requirements
   - ✅ Cover hết 16 categories

---

## 🏁 PHASE 1 EXIT CRITERIA

**Gate 1 Checklist** - Phải đạt tất cả để sang Phase 2:

- [ ] ≥80% MUST requirements quantified với tolerance
- [ ] 100% MUST requirements có verification method
- [ ] Standards compliance matrix complete
- [ ] No unresolved conflicts
- [ ] Stakeholder review completed
- [ ] Document version controlled

**Minimum requirements count by product type**:
- Simple component: 50-80 requirements
- Subsystem: 100-150 requirements
- Full system: 200-300+ requirements

---

## 🔗 RELATED SKILLS

- `SKILL_conceptual_design.md` - Tiếp theo sau Phase 1
- `SKILL_dmir_learning.md` - D-M-I-R reflection sau mỗi phase

**Reference documents**:
- `references/defense-standards-mapping.md`
- `references/requirements-abstraction-guide.md`
- `templates/requirements_list_template.md`

---

*Phase 1 là nền tảng - đầu tư thời gian ở đây tiết kiệm 10x ở các phase sau.*
*"A month in the lab can save an hour in the library" - inverted: an hour in requirements saves a month in redesign.*
