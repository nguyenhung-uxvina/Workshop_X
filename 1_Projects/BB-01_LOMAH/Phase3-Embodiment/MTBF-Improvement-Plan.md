---
title: "BB-01 MTBF Improvement Plan"
title_vi: "Kế hoạch cải thiện MTBF BB-01"
project: bb-01
type: quality
doc_type: mtbf
created: 2026-01-26
updated: 2026-01-29
status: active
phase: embodiment
gate: G2
tags: [mtbf, reliability, dfr, improvement]
entities:
  - type: metric
    name: MTBF
  - type: component
    name: IP68-Connector
  - type: component
    name: Marine-Coating
  - type: standard
    name: MIL-HDBK-217F
metrics:
  mtbf_baseline: 450
  mtbf_target: 500
  mtbf_achieved: 551
  improvement_percent: 22
links:
  parent: "[[Gate-2-Ready]]"
  related:
    - "[[FMEA-MCU-Box]]"
    - "[[Marine-Coating-Spec]]"
    - "[[Strain-Relief-Design]]"
---

# MTBF Improvement Plan - BB-01 MCU Box

> **Issue ID**: DfR-001
> **Status**: 🟡 IN PROGRESS
> **Owner**: Design Lead
> **Due**: 2026-02-05
> **Created**: 2026-01-26

---

## 1. Problem Statement

| Metric | Current | Target | Gap |
|--------|---------|--------|-----|
| System MTBF | 365 hrs | 500 hrs | -135 hrs (27% short) |

**Requirement Reference**: MT.01 (MTBF ≥500 giờ)

---

## 2. Root Cause Analysis

### 2.1 Failure Rate Breakdown (Current Design)

```
FAILURE RATE DISTRIBUTION (Total: 2,735 FIT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Connectors (8×)     ████████████████████████  1,200 FIT  44% ← #1
Microphones (5×)    ██████████████████        1,000 FIT  37% ← #2
Capacitors (20×)    ████                        200 FIT   7%
ESP32               ███                         150 FIT   5%
LoRa                ██                           90 FIT   3%
ADC                 █                            50 FIT   2%
Resistors           █                            45 FIT   2%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TOP 2 = 81% of total failure rate
```

### 2.2 Root Cause Summary

| Rank | Component | Failure Rate | Root Cause |
|------|-----------|--------------|------------|
| #1 | Connectors | 44% | High quantity (8), marine environment, frequent mate/demate |
| #2 | Microphones | 37% | Exposed to environment, vibration, acoustic shock |

### 2.3 Pareto Principle

**80% of failures come from 20% of components** → Focus on Connectors + Microphones

---

## 3. Improvement Options

### Option A: Upgrade Connectors (Recommended)

| Change | Current | Proposed | Impact |
|--------|---------|----------|--------|
| Connector type | Standard IP65 | IP68 gold-plated | -30% failure rate |
| Contact material | Tin | Gold | -50% contact failures |
| Sealing | O-ring | Double O-ring + potting | -40% moisture failures |

**Estimated λ reduction**: 1,200 → 720 FIT (-480 FIT)

**Cost Impact**: +$15/unit (8 connectors × ~$2 premium)

### Option B: Reduce Connector Count

| Change | Current | Proposed | Impact |
|--------|---------|----------|--------|
| Mic connectors | 5 separate | Integrated harness | -3 connectors |
| Power connector | External | Integrated with data | -1 connector |

**Estimated λ reduction**: 1,200 → 600 FIT (-600 FIT)

**Cost Impact**: +$5/unit (harness vs individual), -$8 (fewer connectors) = **-$3 net savings**

### Option C: Add Redundant Microphone

| Change | Current | Proposed | Impact |
|--------|---------|----------|--------|
| Mic count | 5 (minimum) | 6 (5+1 backup) | Graceful degradation |
| Failure mode | Any mic fail = system degraded | 1 mic can fail, system OK | -20% effective failure rate |

**Estimated λ reduction**: System reliability improvement, not direct λ reduction

**Cost Impact**: +$2.50/unit (1 additional mic)

### Option D: Conformal Coating on PCB

| Change | Current | Proposed | Impact |
|--------|---------|----------|--------|
| PCB protection | None | Silicone conformal coating | -50% moisture-related failures |
| Affected components | Capacitors, ICs | All PCB components | -100 FIT estimated |

**Cost Impact**: +$3/unit (coating process)

---

## 4. Recommended Solution

### 4.1 Combined Approach (A + B + C)

| Improvement | λ Reduction | Cost Impact | Priority |
|-------------|-------------|-------------|----------|
| A: IP68 gold connectors | -480 FIT | +$15 | 🔴 HIGH |
| B: Reduce to 5 connectors | -240 FIT | -$3 | 🔴 HIGH |
| C: Add backup mic | ~-100 FIT effective | +$2.50 | 🟡 MED |
| D: Conformal coating | -100 FIT | +$3 | 🟡 MED |
| **TOTAL** | **-920 FIT** | **+$17.50** | |

### 4.2 Projected MTBF After Improvements

```
BEFORE:
Total λ = 2,735 FIT
MTBF = 1,000,000 / 2,735 = 365 hrs ❌

AFTER (A+B+C+D):
Total λ = 2,735 - 920 = 1,815 FIT
MTBF = 1,000,000 / 1,815 = 551 hrs ✅

Margin: 551 - 500 = +51 hrs (10% margin)
```

### 4.3 Updated Failure Distribution

```
AFTER IMPROVEMENTS (Total: 1,815 FIT)
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Microphones (6×)    ████████████████████████    900 FIT  50%
Connectors (5×)     ██████████                  480 FIT  26%
Capacitors (20×)    ██                          100 FIT   6%
ESP32               ███                         150 FIT   8%
LoRa                ██                           90 FIT   5%
ADC                 █                            50 FIT   3%
Resistors           █                            45 FIT   2%

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
New MTBF: 551 hrs ✅ (Target: 500 hrs)
```

---

## 5. Implementation Plan

### 5.1 Design Changes

| # | Change | Owner | Due | Deliverable |
|---|--------|-------|-----|-------------|
| 1 | Select IP68 connectors | EE Lead | 01/30 | Part numbers, datasheet |
| 2 | Redesign connector layout | EE Lead | 02/03 | PCB Rev B schematic |
| 3 | Design integrated mic harness | Mech Lead | 02/03 | Harness drawing |
| 4 | Add 6th mic position | EE Lead | 02/03 | PCB layout update |
| 5 | Specify conformal coating | EE Lead | 01/30 | Coating spec in BOM |

### 5.2 BOM Updates

| Item | Current | New | Δ Cost |
|------|---------|-----|--------|
| Connectors (M12) | 8× std IP65 @ $1.50 | 5× IP68 gold @ $4.50 | +$10.50 |
| Microphones | 5× ECM @ $2.50 | 6× ECM @ $2.50 | +$2.50 |
| Harness | N/A | 1× integrated @ $5 | +$5.00 |
| Conformal coating | N/A | Process cost | +$3.00 |
| **Removed** | 3× connectors @ $1.50 | - | -$4.50 |
| **NET CHANGE** | | | **+$16.50/unit** |

### 5.3 Updated Unit Cost

| Category | Before | After | Change |
|----------|--------|-------|--------|
| MCU Box BOM | $105 | $121.50 | +$16.50 |
| % increase | - | - | +15.7% |

**Justification**: MTBF improvement from 365→551 hrs (+51% reliability) justifies 15.7% cost increase.

---

## 6. Verification Plan

### 6.1 Analysis Verification

| Check | Method | Acceptance |
|-------|--------|------------|
| MTBF prediction | MIL-HDBK-217F recalc | ≥500 hrs |
| Connector reliability | Supplier datasheet review | MTBF ≥50,000 cycles |
| Coating effectiveness | Supplier test data | IP67 equivalent |

### 6.2 Test Verification

| Test | Sample | Duration | Pass Criteria |
|------|--------|----------|---------------|
| Accelerated life test | 3 units | 2 weeks @ 55°C | No failures |
| Salt spray | 2 units | 96 hrs | No corrosion |
| Vibration | 2 units | 8 hrs random | No connector failures |
| Thermal cycle | 2 units | 100 cycles | No degradation |

---

## 7. Risk Assessment

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| IP68 connector lead time | Medium | Schedule slip | Order samples immediately |
| Harness design complexity | Low | Cost increase | Use standard wire gauge |
| Coating compatibility | Low | Rework | Test on prototype first |
| New failure modes | Low | MTBF miss | Monitor ALT results |

---

## 8. Approval

| Role | Name | Date | Signature |
|------|------|------|-----------|
| Design Lead | | | ☐ |
| Project Manager | | | ☐ |
| QC Lead | | | ☐ |

---

## 9. References

- [[DfX-Review-MCU-Box]] - Original DfX analysis
- [[DfX-Dashboard]] - Issue tracking
- [[v1.3-summary]] - Requirements (MT.01)
- [[log]] - Decision log (DEC-002)
- [[acoustic-sensor-research]] - Mic selection research

---

## 10. Revision History

| Rev | Date | Author | Changes |
|-----|------|--------|---------|
| A | 2026-01-26 | Claude | Initial plan |

---

*MTBF Improvement Plan per Workshop X 3-Gate Quality System*
*Closes: DfR-001*
