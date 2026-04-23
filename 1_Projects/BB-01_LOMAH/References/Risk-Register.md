# V-SMASH Risk Register

> **Project**: V-SMASH Fire Control System
> **Issue ID**: G1-001
> **Status**: ✅ COMPLETE
> **Owner**: Project Manager
> **Date**: 2026-01-28

---

## 1. Risk Summary

| Metric | Value |
|--------|-------|
| Total Risks | 12 |
| High Priority (≥6) | 4 |
| Medium Priority (3-5) | 6 |
| Low Priority (≤2) | 2 |

---

## 2. Risk Register

| ID | Risk Description | Category | P | I | Score | Mitigation Strategy | Owner | Status | Updated |
|----|------------------|----------|---|---|-------|---------------------|-------|--------|---------|
| **R-001** | **YOLOv8 training dataset insufficient** | Technical | M | H | **6** | Collect during Phase 1 with HOG+SVM; university partnership for labeling | AI Lead | 🟢 Planned | 01/28 |
| **R-002** | **Jetson platform supply disruption** | Supply Chain | L | M | 3 | Multiple distributors (Seeed, Waveshare, local); 2-unit safety stock | HW Lead | 🟢 Planned | 01/28 |
| **R-003** | **Local ML expertise shortage** | Resource | M | M | 4 | University partnership (HUST/VNU); training program for internal team | Tech Lead | 🟡 In Progress | 01/28 |
| **R-004** | **Phase 1→2 transition delays** | Schedule | M | H | **6** | Start with Xavier NX (DEC-005); modular software design | Design Lead | 🟢 Mitigated | 01/28 |
| **R-005** | **Unit cost exceeds $3,000 target** | Financial | L | H | 4 | BOM at $894, 70% margin; value engineering if needed | PM | 🟢 On Track | 01/28 |
| **R-006** | **Export control (NVIDIA Jetson)** | Regulatory | L | H | 4 | Monitor ITAR/EAR changes; backup plan: local GPU (VinAI) | PM | 🟡 Monitor | 01/28 |
| **R-007** | **MTB-20 interface incompatibility** | Integration | M | M | 4 | Define interface spec by Week 8; early coordination with MTB-20 team | Design Lead | 🟡 Pending | 01/28 |
| **R-008** | **Customer requirements change** | Scope | M | M | 4 | Establish change control process; baseline requirements v1.1 | PM | 🟢 Planned | 01/28 |
| **R-009** | **Solenoid response time too slow** | Technical | M | H | **6** | Test early in Phase 1; backup: fast pneumatic actuator | Mech Lead | 🟡 Pending | 01/28 |
| **R-010** | **Weather/lighting affects detection** | Technical | H | M | **6** | IR camera option; all-weather testing in Phase 1 | AI Lead | 🟡 Pending | 01/28 |
| R-011 | Prototype fabrication delays | Schedule | M | L | 2 | Local suppliers identified; parallel paths | Mech Lead | 🟢 Planned | 01/28 |
| R-012 | Team member unavailability | Resource | L | L | 1 | Cross-training; documentation standards | PM | 🟢 Planned | 01/28 |

---

## 3. Scoring Guide

**Probability (P)**:
- L (Low) = 1: <20% chance
- M (Medium) = 2: 20-60% chance
- H (High) = 3: >60% chance

**Impact (I)**:
- L (Low) = 1: Minor delay/cost (<5%)
- M (Medium) = 2: Moderate delay/cost (5-20%)
- H (High) = 3: Major delay/cost (>20%) or technical failure

**Score** = P × I (Range: 1-9)
- **≥6**: High priority - active mitigation required
- **3-5**: Medium priority - monitor and plan
- **≤2**: Low priority - accept and monitor

---

## 4. High Priority Risks (≥6)

### R-001: YOLOv8 Dataset Insufficient (Score: 6)

| Aspect | Detail |
|--------|--------|
| **Description** | Not enough labeled training images for Vietnamese targets |
| **Trigger** | Detection accuracy <90% in Phase 1 testing |
| **Mitigation** | 1) Collect data during HOG+SVM phase; 2) University partnership for labeling; 3) Synthetic data augmentation |
| **Contingency** | Continue with HOG+SVM if accuracy acceptable |
| **Owner** | AI Lead |
| **Review Date** | Monthly |

### R-004: Phase Transition Delays (Score: 6)

| Aspect | Detail |
|--------|--------|
| **Description** | Delay moving from Phase 1 (HOG) to Phase 2 (YOLO) |
| **Trigger** | Phase 1 extends beyond Month 6 |
| **Mitigation** | 1) Start with Xavier NX (DEC-005 approved); 2) Modular software for easy swap; 3) Parallel development |
| **Contingency** | Deploy Phase 1 system while continuing Phase 2 |
| **Owner** | Design Lead |
| **Review Date** | Monthly |

### R-009: Solenoid Response Time (Score: 6)

| Aspect | Detail |
|--------|--------|
| **Description** | Solenoid actuator too slow for <100ms requirement |
| **Trigger** | Measured response >50ms (leaving <50ms for detection) |
| **Mitigation** | 1) Test solenoids Week 4; 2) Pre-select fast models; 3) Pneumatic backup |
| **Contingency** | Switch to pneumatic actuator (+$50/unit) |
| **Owner** | Mech Lead |
| **Review Date** | Week 4 |

### R-010: Weather/Lighting Variability (Score: 6)

| Aspect | Detail |
|--------|--------|
| **Description** | Detection fails in rain, fog, low light, or glare |
| **Trigger** | Detection accuracy drops >20% in adverse conditions |
| **Mitigation** | 1) IR camera option in morphological matrix; 2) Test all conditions in Phase 1; 3) Algorithm robustness training |
| **Contingency** | Dual-spectrum camera (visible + IR) |
| **Owner** | AI Lead |
| **Review Date** | Month 3 |

---

## 5. Risk Trend

```
RISK PROFILE - V-SMASH Phase 1
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

High (≥6):     ████ 4 risks (33%)
Medium (3-5):  ██████ 6 risks (50%)
Low (≤2):      ██ 2 risks (17%)

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Total: 12 risks | Avg Score: 4.1 (Medium)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 6. Review Schedule

| Review Type | Frequency | Participants |
|-------------|-----------|--------------|
| Risk review meeting | Monthly | PM, Tech Lead, Design Leads |
| High-risk deep dive | Bi-weekly | Owner + affected parties |
| Management update | Monthly | PM → Management |

---

## 7. Change Log

| Date | Change | By |
|------|--------|-----|
| 01/28 | Initial risk register created | PM |
| - | Added R-006 to R-012 | PM |

---

## 8. References

- [[G1-Review-2026-01-26]] - Gate 1 review findings
- [[vdi-2225-evaluation]] - Concept risks
- [[system-architecture]] - Technical risks

---

*Risk Register closes G1-001*
*Per Workshop X 3-Gate Quality System*
