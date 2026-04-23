---
project: VN-XUONG-UUV
phase: 1
type: project-charter
document: "001"
version: 1.0
created: 2026-03-06
status: draft
data_confidence: MEDIUM (40% L2 user-confirmed, 40% L4 reference designs, 20% L5 assumptions)
---

# VN-XUONG-UUV — Doc 001: Project Charter v1.0

## 1. Project Identity

| Field | Value |
|-------|-------|
| **Project Code** | VN-XUONG-UUV |
| **Full Name** | Xuồng Triển Khai/Thu Hồi UUV (UUV Launch and Recovery Vessel) |
| **Project Manager** | Workshop X CEO (team: 5 engineers) |
| **Start Date** | 2026-03-06 |
| **Target Completion** | TBD (after Phase 1 requirements finalize timeline) |
| **Methodology** | Pahl & Beitz Systematic Design (VDI 2221/2225) |
| **Tier** | Tier 1 — Prototype (Musk Sequence #1) |
| **Gate 0 Status** | PASSED (2026-03-06) |

---

## 2. Objective

Thiết kế và chế tạo **xuồng chuyên dụng 8m** để triển khai và thu hồi một UUV có dây điều khiển (tethered, 550 kg, L=5000mm, D=400mm, cự ly dây đến 25km) trong điều kiện biển Việt Nam (Sea State 3-4), sử dụng hệ thống LARS (stern ramp + passive V-funnel + winch) kết hợp hệ thống quản lý dây (TMS), với trạm điều khiển UUV (dạng vali) đặt trực tiếp trên xuồng, khả năng nội địa hóa >= 50%.

**Selected Configuration (Path 3 — Towed/Independent):**
- 8m aluminum monohull (5083-H321), bilge keels
- LARS: stern ramp (15-20 deg) + passive V-funnel (2.2m) + winch (hydraulic or electric — TBD Phase 2)
- TMS (Tether Management System): cable drum (25 km capacity), fairlead, tension monitor
- UUV control station: suitcase controller on vessel, operated by crew
- Navigation tối thiểu: GPS, speed log
- Propulsion: inboard diesel or outboard (TBD Phase 2)
- Towed alongside mother ship (primary) / self-transit from port (secondary)
- NOT stored on deck — crane (2.5t) only for UUV loading (550 kg)

---

## 3. Scope

### 3.1 In Scope

| #   | Item                               | Notes                                               |
| --- | ---------------------------------- | --------------------------------------------------- |
| 1   | Hull design — 8m aluminum monohull | 5083-H321, bilge keels, stern ramp integrated       |
| 2   | LARS subsystem                     | Hydraulic or electric; ramp, V-funnel, cradle (D=400mm custom), winch |
| 3   | Propulsion system                  | Inboard diesel or outboard                          |
| 4   | Navigation & control electronics   | Tối thiểu: GPS, speed log (máy đo tốc độ)           |
| 5   | Towing system                      | Bridle, towline, quick-release, fendering           |
| 5a  | Tether management system (TMS)     | Cable drum (25km), fairlead, tension monitor, pay-out/reel-in |
| 5b  | UUV control station integration    | Suitcase controller mounting, power supply, operator position |
| 6   | UUV cradle & securing              | Custom for D=400mm, L=5000mm, UHMWPE guides         |
| 7   | Crew accommodations (minimal)      | 3-person, open deck, canopy                         |
| 8   | Operational procedures (SOP)       | Launch, recovery, towing, emergency                 |
| 9   | Sea trials & validation            | Harbor trials → coastal trials → SS 3 recovery test |

### 3.2 Out of Scope

| # | Item | Rationale |
|---|------|-----------|
| 1 | UUV itself | Furnished by customer (550 kg unit, >>$100K) |
| 2 | Mother ship modifications | Existing crane (2.5t) sufficient for UUV transfer |
| 3 | UUV mission planning software | UUV OEM provides; vessel provides space + power for controller |
| 4 | Multi-UUV operations | Single UUV per sortie (Phase 0 decision) |
| 5 | Autonomous LARS operation | Manual/semi-auto only for prototype |
| 6 | Class certification (initial) | Prototype tier — classification deferred to production |

---

## 4. Stakeholders

| # | Stakeholder | Role | Influence | Key Need |
|---|-------------|------|-----------|----------|
| S1 | **Navy UUV Ops Team** (Seg A) | Primary user/operator | HIGH | Safe, reliable UUV recovery in SS 3 |
| S2 | **Navy Procurement** | Buyer/approver | HIGH | Cost within budget, nội địa hóa >= 50% |
| S3 | **UUV Manufacturer** | UUV interface specs | MEDIUM | No damage to UUV during L/R ops |
| S4 | **Mother Ship CO** | Operational authority | MEDIUM | Minimal impact on ship operations |
| S5 | **Workshop X (designer/builder)** | Design authority | HIGH | Feasible with current capabilities |
| S6 | **VN Register / Classification** | Regulatory (future) | LOW (prototype) | Compliance path defined |
| S7 | **Maintenance crew** | Sustainer | MEDIUM | Accessible components, standard parts |

> **Note:** Stakeholder interviews with S1, S2, S4 are FLAGGED as needed but not yet conducted. Requirements derived from ODI analysis (29 outcomes) and reference design studies.

---

## 5. Hard Constraints

| ID | Constraint | Source | Impact |
|----|-----------|--------|--------|
| HC-1 | Xuồng LARS phải nhỏ gọn — LOA <= 8.5m | User (tàu mẹ kích thước hạn chế) | Gates hull design |
| HC-2 | Crane tàu mẹ = 2.5t SWL | Mother ship spec | UUV transfer only (550 kg << 2.5t). Tender NOT lifted by crane. |
| HC-3 | Bảo vệ UUV — zero damage during L/R | UUV value >>$100K | Soft capture, UHMWPE guides, controlled descent |
| HC-4 | An toàn thủy thủ — minimize stern deck exposure | Safety | Hydraulic ops, remote winch control |
| HC-5 | Nội địa hóa >= 50% | Procurement requirement | Material & component sourcing VN |
| HC-6 | Recovery in Sea State 3 | Operational requirement (Biển Đông) | LARS sizing, stability, funnel geometry |
| HC-7 | Single UUV: 550 kg, L=5000mm, D=400mm, H=850mm | UUV specification | Cradle, ramp, funnel dimensions |
| HC-8 | UUV điều khiển bằng dây (tethered, wire-guided) | UUV specification | Tether management system (TMS) required |
| HC-9 | Tether range up to 25 km | UUV specification | Cable drum capacity, weight/volume |
| HC-10 | UUV controller dạng vali (suitcase portable) | UUV specification | Control station on vessel |
| HC-11 | UUV operated directly from xuồng thả/thu | Operational requirement | Controller ON the LARS vessel |

---

## 6. Design Priorities (User Ranked)

| Priority | Criterion | Weight (from VDI 2225) |
|----------|-----------|----------------------|
| 1 | Compact size | 15% |
| 2 | Recovery capability (SS 3) | 12% |
| 3 | UUV protection | 10% |
| 4 | Crew safety | 8% |
| 5 | Recovery reliability | 8% |
| 6 | Stability during recovery | 7% |
| 7 | Nội địa hóa | 5% |
| 8 | Capital cost | 5% |
| 9 | Growth potential | 5% |

---

## 7. Key Risks (from Gate 0)

| # | Risk | Likelihood | Impact | Mitigation |
|---|------|-----------|--------|------------|
| R1 | Seakeeping insufficient at SS 3 | Medium | High | Bilge keels, beam optimization, partner seakeeping analysis |
| R2 | Hydraulic LARS complexity | Medium | Medium | Reference proven designs (L3Harris, Saab, ECA, Atlas) |
| R3 | Towing stability in SS 4-5 | Medium | High | Tow bridle design, quick-release, operational limits |
| R4 | V-funnel capture failure | Low | High | 2.2m funnel width (conservative), UHMWPE guides |
| R5 | Cost overrun beyond $517K +30% | Medium | Medium | Phased procurement, VN sourcing priority |

---

## 8. Budget Estimate

| Item | Estimate | Confidence |
|------|----------|------------|
| **Capital cost** | ~$517K | +/- 30% (Phase 0 estimate) |
| Hull & structure | ~$180-220K | Medium |
| LARS (hydraulic) | ~$120-150K | Low (needs detailed design) |
| Propulsion | ~$60-80K | Medium |
| Electronics & sensors | ~$40-60K | Medium |
| Outfitting & finishing | ~$30-50K | Medium |
| Engineering & labor | ~$50-70K | Low |
| Contingency | ~$50K | Standard 10% |

> Budget to be refined in Phase 3 (Embodiment Design) with actual quotes.

---

## 9. Timeline (Preliminary)

| Phase | Duration (est.) | Gate |
|-------|----------------|------|
| Phase 0: Pre-study | DONE | Gate 0 PASSED 2026-03-06 |
| Phase 1: Task Clarification | 3-4 weeks | Gate 1 |
| Phase 2: Conceptual Design | 4-6 weeks | Gate 2 |
| Phase 3: Embodiment Design | 6-8 weeks | Gate 3 |
| Phase 4: Detail Design | 4-6 weeks | Production release |
| Fabrication | 8-12 weeks | — |
| Sea Trials | 4-6 weeks | Acceptance |
| **Total (design → trials)** | **~8-10 months** | — |

> Timeline is solo-engineer paced (Musk Sequence: VN-XUONG-UUV = priority #1). Parallel activities with partners (seakeeping, hull fabrication) can compress schedule.

---

## 10. Success Criteria

| # | Criterion | Metric | Verification |
|---|----------|--------|-------------|
| SC-1 | UUV deployed and recovered at sea | 1 complete cycle in SS 3 | Sea trial |
| SC-2 | Zero UUV damage during L/R | No scratches/dents beyond cosmetic | Inspection |
| SC-3 | Recovery time | <= 30 min (approach to secured) | Timed trial |
| SC-4 | Crew safety | Zero injuries during trials | Safety log |
| SC-5 | Cost within budget | <= $517K + 30% contingency | Financial records |
| SC-6 | Nội địa hóa | >= 50% by value | BOM analysis |
| SC-7 | SOP validated | Crew can execute without designer present | Observed trial |

---

## 11. References

| Document | Location |
|----------|----------|
| Project Brief | `1_Projects/VN-XUONG-UUV/_Project_Brief.md` |
| ODI Report v1.0 | `1_Projects/VN-XUONG-UUV/VN-XUONG-UUV_ODI_Report_v1.0.md` |
| Gate 0 Review | `1_Projects/VN-XUONG-UUV/VN-XUONG-UUV_P56_Gate0_Review_v1.0.md` |
| Path 3 Analysis | `1_Projects/VN-XUONG-UUV/Phase1-Task/Path3_Towed_Independent.md` |
| Path Comparison Matrix | `1_Projects/VN-XUONG-UUV/Phase1-Task/Path_Comparison_Matrix.md` |

---

*Doc 001 Project Charter v1.0 | VN-XUONG-UUV Phase 1 Task Clarification | COD: Offload*
