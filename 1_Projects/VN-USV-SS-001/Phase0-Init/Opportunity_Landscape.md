---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #topic/odi, #topic/jtbd]
project: VN-USV-SS-001
skill: forge-job-map
---

# Opportunity Landscape — VN-USV-SS-001 (Semi-Sub USV)

**Status: DRAFT — AI-estimated scores, awaiting Biên phòng interviews**

## Underserved Top 15 (Opp ≥ 8.0)

| Rank | # | Outcome | Step | Imp | Sat | Opp |
|:----:|---|---------|------|:---:|:---:|:---:|
| 1 | O-23 | **Không mất liên lạc với USV** | 5-EXECUTE | 5.0 | 1.0 | **10.0** |
| 2 | O-24 | **Endurance đủ cho mission** | 5-EXECUTE | 5.0 | 1.5 | **10.0** |
| 3 | O-25 | **Phát hiện mục tiêu từ xa** | 5-EXECUTE | 4.8 | 1.0 | **9.8** |
| 4 | O-06 | Thời gian sạc pin nhanh | 2-LOCATE | 4.5 | 1.0 | **9.5** |
| 5 | O-12 | **Trọng lượng nhẹ để vận chuyển/hạ thủy** | 3-PREPARE | 4.5 | 1.0 | **9.5** |
| 6 | O-27 | **Giữ độ sâu chính xác (semi-sub)** | 5-EXECUTE | 4.5 | 1.0 | **9.5** |
| 7 | O-28 | **Ổn định pitch ở >6 knots** | 5-EXECUTE | 4.5 | 1.0 | **9.5** |
| 8 | O-33 | **Giảm overload thông tin cho operator** | 6-MONITOR | 4.5 | 1.0 | **9.5** |
| 9 | O-44 | **Giảm rủi ro khi vớt USV từ biển** | 8-CONCLUDE | 4.5 | 1.0 | **9.5** |
| 10 | O-49 | Turnaround time giữa các ca | 8-CONCLUDE | 4.5 | 1.0 | **9.5** |
| 11 | O-01 | Từ intel → deploy nhanh | 1-DEFINE | 4.5 | 2.0 | **9.0** |
| 12 | O-04 | Không phụ thuộc thời tiết để deploy | 1-DEFINE | 4.5 | 1.5 | **9.0** |
| 13 | O-07 | Không deploy thiếu pin | 2-LOCATE | 4.5 | 2.0 | **9.0** |
| 14 | O-11 | **Ít người hạ thủy** | 3-PREPARE | 4.5 | 1.5 | **9.0** |
| 15 | O-19 | Biết chắc fail-safe valve hoạt động | 4-CONFIRM | 4.5 | 1.5 | **9.0** |

**Pattern:**
- Step 5 EXECUTE: 5/15 (expected — core autonomy)
- **Step 3 PREPARE + Step 8 CONCLUDE: 4/15** — physical launch/recovery = hidden danger zone
- Step 6 MONITOR: 1/15 (operator overload)
- Step 1-2: 3/15 (readiness/deployment speed)

## Overserved Bottom 10 (Opp ≤ 5.5)

| Rank | # | Outcome | Step | Imp | Sat | Opp |
|:----:|---|---------|------|:---:|:---:|:---:|
| 1 | O-05 | Số người ra quyết định deploy | 1-DEFINE | 3.0 | 3.0 | 3.0 |
| 2 | O-08 | Phụ tùng dự phòng | 2-LOCATE | 3.0 | 3.0 | 3.0 |
| 3 | O-32 | GPS position error | 5-EXECUTE | 3.5 | 3.0 | 4.0 |
| 4 | O-02 | Deploy sai khu vực | 1-DEFINE | 3.5 | 3.0 | 5.0 |
| 5 | O-22 | Misconfigured mission | 4-CONFIRM | 3.5 | 2.5 | 5.5 |
| 6 | O-17 | Kín khi hạ thủy | 3-PREPARE | 3.5 | 2.5 | 5.5 |
| 7 | O-30 | Tiếng ồn dưới nước | 5-EXECUTE | 3.5 | 2.5 | 5.5 |
| 8 | O-51 | Kỹ năng bảo trì | 8-CONCLUDE | 3.5 | 2.5 | 5.5 |

## Strategy Recommendation

### Type: DISRUPTIVE

**Lý do:** Biên phòng VN hiện KHÔNG có USV bán ngầm nào. Phương tiện hiện tại = ca nô tuần tra (manned, loud, visible, fuel-dependent). VN-USV-SS-001 tạo category mới: **tuần tra kín, không người, endurance cao, chi phí thấp.**

Đối thủ quốc tế (Oceaneering, L3Harris, Rafael Protector): $500K-$5M/unit → không phù hợp Biên phòng VN. VN-USV-SS-001 ở $3-6K = different market tier entirely.

### Innovation Targets → Subsystem Mapping

| Outcome | Subsystem | ACH? | Design Status |
|---------|-----------|:----:|---------------|
| O-23: Mất liên lạc | Comms (LoRa + 4G) + autonomous fallback | **YES** — AI auto-RTL on comms loss | Not started |
| O-24: Endurance | Battery 48V LiFePO4 + efficient hull + AI power management | **YES** — AI optimizes speed/depth for endurance | Not started |
| O-25: Detection range | Camera + optional radar + **AI target detection (WX-DET-001)** | **YES** — YOLOv8 on Jetson | LP-1 planned |
| O-27: Depth hold | ArduSub PID + pressure sensor + ballast pump | **YES** — core ACH (ArduSub replaces DP system) | Lab demo $140 |
| O-28: Pitch stability | Hull form design + active stabilization | Partial — hull = physics, stabilization = SW | Phase 2 (VDI 2225) |
| O-33: Operator overload | GCS UI design + **AI alert prioritization** | **YES** — AI filters noise, surfaces critical alerts | Not started |
| O-44: Recovery danger | Mechanical design (handles, buoyancy, self-righting) | NO — physical design | Phase 3 |

### ACH Candidates (SHIFTO already GO)

7 outcomes directly addressed by ACH (ArduSub + AI):

| Outcome | ACH Mechanism | Opp | SHIFT Status |
|---------|--------------|:---:|:----------:|
| O-23: Comms loss → auto-RTL | ArduSub failsafe mode | 10.0 | GO |
| O-24: Endurance → AI power mgmt | ML speed/depth optimization | 10.0 | GO |
| O-25: Detection → YOLOv8 | WX-DET-001 on Jetson | 9.8 | GO |
| O-27: Depth hold → ArduSub PID | Core ACH — replaces $10K+ DP | 9.5 | GO |
| O-33: Operator overload → AI alerts | Priority-based alert filtering | 9.5 | GO |
| O-39: Command latency → edge autonomy | Local decision-making, no cloud | 9.0 | GO |
| O-48: Auto report → data pipeline | Mission log → auto-report | 8.0 | GO |

**SHIFTO "O" score: 7/15 top outcomes = ACH addressable.** Combined Opp = 66.8. Average = 9.5.

### Physical Design Targets (NOT ACH — hardware must be right)

| Outcome | Why NOT ACH | Design Priority |
|---------|-------------|:-:|
| O-12: Weight | Physics — lighter hull = Phase 2 material selection | ★★★ |
| O-28: Pitch stability | Hydrodynamics — hull form, not software | ★★★ |
| O-44: Recovery danger | Mechanical — handles, self-righting, buoyancy reserve | ★★★ |
| O-29: Low RCS | Physics — waterplane area, mast design | ★★ |

### Variant Strategy Matrix

| Variant | Target Outcomes | Strategy |
|---------|----------------|----------|
| **V1: ISR Patrol** (baseline) | O-23, O-24, O-25, O-27 | Prove endurance + stealth + detection |
| V2: Decoy/Relay | O-29, O-30 | Low-RCS optimized, electronic payload |
| V3: Swarm (future) | O-33, O-39 | Multi-USV coordination, AI-managed |

### Requirements Gaps from Outcomes

| Outcome | Gap | Suggested Requirement |
|---------|-----|----------------------|
| O-11 | No launch personnel spec | "R-xx: Launch by ≤2 persons in SS 2 [D]" |
| O-44 | No recovery safety spec | "R-xx: Recovery handles rated 100 kg, self-righting after capsize [D]" |
| O-33 | No operator workload spec | "R-xx: GCS displays ≤5 priority alerts simultaneously [W1]" |
| O-49 | No turnaround spec | "R-xx: Mission turnaround ≤2h (recovery→relaunch) [W1]" |
| O-06 | No charge time spec | "R-xx: Battery charge 0→80% in ≤3h [W1]" |

## CEO Decisions (2026-03-20)

- [x] **Strategy type: DISRUPTIVE** — confirmed
- [x] **Top 5 innovation targets** — confirmed (O-23, O-24, O-25, O-27, O-28)
- [x] **7 ACH candidates** — confirmed (O-23/24/25/27/33/39/48)
- [x] **5 requirements gaps** — approved (launch ≤2 persons, recovery handles, GCS alerts ≤5, turnaround ≤2h, charge ≤3h)
- [ ] Schedule Biên phòng stakeholder interviews (8 respondents) — PENDING access

## Downstream Routing

```
forge-job-map (this) →
├── forge-shift → ALREADY DONE (ACH GO 2026-03-19) + SHIFTO "O" = 7/15, avg 9.5
├── forge-validate → depth hold + comms + endurance as validation metrics
├── forge-trust → evidence for Biên phòng leadership
├── forge-cost → $3-6K vs $500K+ competitor, ACH savings quantified
├── forge-library → WX-DET-001 (YOLOv8), WX-CTL-001 (ArduSub depth) shared models
├── helix-task-clarify → 5 outcome-derived requirements
└── bridge-knowledge-base → Layer 2: Biên phòng operational data
```

---

*VN-USV-SS-001 Opportunity Landscape v1.0*
*forge-job-map — Disruptive Semi-Sub USV for Coastal Patrol*
