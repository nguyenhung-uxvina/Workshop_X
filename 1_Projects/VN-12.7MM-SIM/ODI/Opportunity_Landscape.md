---
created: 2026-03-20
updated: 2026-03-20
last_refresh: 2026-03-20_session54
type: project
status: active
tags: [#type/project, #topic/odi, #topic/jtbd]
project: VN-12.7MM-SIM
skill: forge-job-map
---

# Opportunity Landscape — VN-12.7MM-SIM (HONG HAI)

**Status: DRAFT v2 — AI-estimated scores enriched with Two-Channel + MOUNT. Awaiting real survey (target 2026-04-30)**

## Underserved Top 20 (Opp ≥ 8.0 — invest here)

| Rank | # | Outcome | Step | Channel | Imp | Sat | Opp | Subsystem |
|------|---|---------|------|---------|-----|-----|-----|-----------|
| 1 | **O-62** | Per-shot impulse difference | 5-EXECUTE | **B** | 5.0 | 1.0 | **10.0** | SS10 RC-A Pneumatic |
| 2 | O-26 | Recoil feel difference (general) | 5-EXECUTE | B | 5.0 | 1.5 | **10.0** | SS10 RC-A Pneumatic |
| 3 | **O-64** | "Recoil shock" sim→live transition | 5-EXECUTE | **B** | 4.8 | 1.0 | **9.8** | SS10 + congruency |
| 4 | O-30 | False impression rate (hit/miss) | 5-EXECUTE | SW | 4.9 | 2.0 | **9.8** | SS4 ballistics |
| 5 | O-27 | Traverse resistance difference | 5-EXECUTE | **A** | 4.8 | 1.5 | **9.6** | SS3 brake |
| 6 | O-37 | Bad habit formation from artifacts | 5-EXECUTE | A+B | 4.8 | 1.8 | **9.6** | SS3+SS10 |
| 7 | **O-63** | Burst vibration pattern at 600 RPM | 5-EXECUTE | **B** | 4.5 | 1.0 | **9.5** | SS10 valve speed |
| 8 | **O-59** | Mount stiffness difference | 5-EXECUTE | **A** | 4.7 | 1.5 | **9.4** | SS3 brake |
| 9 | O-38 | Miss diagnosis time | 6-MONITOR | SW | 4.7 | 1.5 | **9.4** | SS8 → I-08 ACH |
| 10 | **O-60** | Traverse effort difference | 5-EXECUTE | **A** | 4.5 | 1.5 | **9.0** | SS3 brake |
| 11 | O-13 | Setup time cold→ready | 3-PREPARE | -- | 4.5 | 2.0 | **9.0** | System design |
| 12 | O-48 | Sub-skill drill effort | 7-MODIFY | SW | 4.5 | 1.5 | **9.0** | SS4 scenario |
| 13 | O-51 | Report generation time | 8-CONCLUDE | SW | 4.3 | 1.8 | **8.8** | SS8 auto-report |
| 14 | **O-61** | Elevation effort difference | 5-EXECUTE | **A** | 4.3 | 1.5 | **8.6** | SS3 brake (elev) |
| 15 | O-33 | Instructor alert delay | 5-EXECUTE | SW | 4.3 | 2.0 | **8.6** | SS8 real-time |
| 16 | **O-68** | Predict live-fire fail (I-08) | 8-CONCLUDE | AI | 4.2 | 1.0 | **8.4** | I-08 ACH only |
| 17 | O-45 | Difficulty adjustment time | 7-MODIFY | SW | 4.2 | 2.0 | **8.4** | SS4 adaptive |
| 18 | O-35 | Bore offset vs ballistic impact | 5-EXECUTE | SW | 4.5 | 2.5 | **8.0** | SS4 ballistics |
| 19 | O-52 | Cross-session comparison | 8-CONCLUDE | SW | 4.0 | 1.5 | **8.0** | SS8 trends |
| 20 | **O-65** | AI weakness identification (I-08) | 5-EXECUTE | AI | 4.0 | 1.0 | **8.0** | I-08 ACH only |

**Pattern (v2):**
- **Channel B (recoil)** dominates #1-3 — confirms RC-A Pneumatic was right call
- **Channel A (brake)** holds #5, #8, #10, #14 — brake test 2026-04-05 is critical
- **Step 5 expanded:** 14 of top 20 are EXECUTE (up from 4 in v1 — Two-Channel decomposition revealed hidden opportunities)
- **Step 7+8 SW outcomes** = 6 of top 20 — the I-08 ACH differentiator zone
- **I-08 specific** (O-65, O-68) rank #16, #20 — high importance but scored separately

## Overserved Bottom 15 (Opp ≤ 4.0 — reduce cost)

| Rank | # | Outcome | Step | Imp | Sat | Opp |
|------|---|---------|------|-----|-----|-----|
| 1 | O-12 | Minimize consumables check | 2-LOCATE | 2.0 | 4.0 | 2.0 |
| 2 | O-09 | Minimize spare parts to carry | 2-LOCATE | 2.5 | 4.0 | 2.5 |
| 3 | O-31 | Minimize motion sickness | 5-EXECUTE | 2.5 | 4.0 | 2.5 |
| 4 | O-10 | Minimize scenario locating effort | 2-LOCATE | 2.5 | 3.5 | 2.5 |
| 5 | O-53 | Minimize shutdown time | 8-CONCLUDE | 2.8 | 3.5 | 2.8 |
| 6 | O-11 | Minimize missing component arrival | 2-LOCATE | 2.8 | 3.5 | 2.8 |
| 7 | O-15 | Minimize cable connections | 3-PREPARE | 3.0 | 3.0 | 3.0 |
| 8 | O-16 | Minimize incorrect connections | 3-PREPARE | 3.0 | 3.5 | 3.0 |
| 9 | O-44 | Minimize missing dangerous behavior | 6-MONITOR | 3.0 | 3.0 | 3.0 |
| 10 | O-56 | Minimize inter-session maintenance | 8-CONCLUDE | 3.0 | 3.0 | 3.0 |
| 11 | O-57 | Minimize data loss | 8-CONCLUDE | 3.0 | 3.5 | 3.0 |
| 12 | O-36 | Minimize unrealistic advantages | 5-EXECUTE | 3.0 | 3.5 | 3.0 |
| 13 | O-24 | Minimize visual/audio artifacts | 4-CONFIRM | 3.2 | 3.0 | 3.4 |
| 14 | O-34 | Minimize system crash | 5-EXECUTE | 3.5 | 3.5 | 3.5 |
| 15 | O-22 | Minimize uncalibrated start risk | 4-CONFIRM | 3.5 | 3.0 | 4.0 |

## Strategy Recommendation

### Type: DIFFERENTIATED

InVeris serves Step 5 (EXECUTE) well at $500K+. Workshop X differentiates on:
1. **Step 3 PREPARE:** 10× cheaper, 5× faster setup, 1-2 person
2. **Step 7 MODIFY:** Adaptive difficulty (I-08 only)
3. **Step 8 CONCLUDE:** Auto-reporting, cross-session tracking
4. **Cost:** $10K vs $500K = different customer tier entirely

### Innovation Targets → Subsystem Mapping (updated 2026-03-20)

| Outcome | Subsystem | Design Status |
|---------|-----------|---------------|
| O-26: Recoil fidelity | **SS10 Recoil (RC-A Pneumatic)** | ✅ SELECTED (Doc 022 v1.1, 78.6% VDI). Test T2: 2026-04-05 |
| O-30: Hit/miss accuracy | SS4 (6-DOF ballistics) | Phase 3 SW — not yet started |
| O-27: Traverse feel | **SS3 (Magnetic brake)** | ✅ Brake ordered. Test T1: 2026-04-05 |
| O-38: Miss diagnosis | SS8 (AAR analytics) → **I-08 ACH** | SW NRE. Data pipeline ready (Doc 022 §16) |
| O-48: Sub-skill drill | SS4 (scenario engine) | Not yet designed — high-value SW feature |
| O-51: Auto-reporting | SS8 (report generator) | Not yet designed — high-value SW feature |

### ACH Candidates for I-08 (HONG HAI MASTER) — updated v2

7 outcomes both UNDERSERVED and AI-addressable (was 5, +2 from v2):

| Outcome | ACH Mechanism | Opp | Data Source (MOUNT "T") |
|---------|---------------|-----|------------------------|
| O-38: Miss diagnosis | AI trajectory analysis → "lead quá thấp 2°" | 9.4 | Encoder + ballistics per-shot |
| O-48: Sub-skill drill | AI weakness → auto drill generation | 9.0 | Cross-session pattern |
| O-51: Auto-reporting | AI data → MoD narrative report | 8.8 | Session log aggregate |
| O-45: Adaptive difficulty | AI tracking → auto difficulty tuning | 8.4 | Real-time performance |
| **O-68: Predict fail** | **AI cross-session → "xạ thủ X sẽ trượt bắn thật"** | **8.4** | **≥ 20 session history** |
| **O-65: Weakness ID** | **AI per-shot force + tracking → "yếu burst control"** | **8.0** | **Pressure transducer ($50)** |
| O-06: Find weakest skill | AI aggregation → competency heatmap | 8.0 | Cross-session + per-drill |

**Compound insight:** O-65 and O-68 are ONLY possible because I-01 captures per-shot force data via pressure transducer (Doc 022 §16, $50 added cost). Without MOUNT "T" principle, I-08 ACH has no training data → no coaching → no compound. The $50 sensor is the most leveraged component in the entire system.

### SHIFTO "O" Assessment (2026-03-20)

**O = ✅ HIGH** — 7 of top 20 underserved outcomes addressed by I-08 ACH. Zero overlap with I-01 hardware outcomes (clean separation). Combined Opp = 60.0 (avg 8.57). Total added HW for all 7 ACH outcomes = **$50** (pressure transducer). Full SHIFTO: S=PASS, H=PASS, I=PASS, F=PASS, T=MARGINAL, **O=HIGH**. ACH GO reconfirmed.

### Two-Channel Architecture × Outcome Alignment (added 2026-03-20)

The Two-Channel Law (Galaxy) maps directly to outcome separation:

| Channel | Outcomes Served | Training Skill | Technology |
|---------|----------------|----------------|-----------|
| **A: Mount Resistance** | O-27 (traverse feel) | Target tracking | Magnetic brake — DECIDED |
| **B: Firing Vibration** | O-26 (recoil fidelity), O-37 (bad habits) | Burst control, engagement discipline | RC-A Pneumatic — SELECTED |
| **Software** | O-30 (hit/miss), O-38 (miss diagnosis), O-48 (drill), O-51 (report) | All cognitive skills | SS4/SS8 — SW NRE |

**Key insight:** Channel A + B address the TOP 4 underserved outcomes (O-26, O-30, O-27, O-37). Software addresses #5-8 and ALL I-08 ACH outcomes. Hardware proves fidelity, software compounds value.

**MOUNT "T" × O-38/O-48/O-06:** Data capture pipeline ($50 pressure transducer) enables I-08 ACH outcomes WITHOUT extra hardware in future. Day 1 data = Year 2 AI.

### Overserved → Cost Reduction (ACH hardware savings)

| Feature | Current Cost | ACH Alternative | Savings |
|---------|-------------|-----------------|---------|
| Motion sickness prevention | 3× QHD ($840) | AI-adaptive FOV on 2× | -$280 |
| System stability | High-spec PC ($1,590) | AI watchdog on mid-spec | -$400 |
| Calibration accuracy | 16-bit encoders ($340) | AI drift comp on 14-bit | -$120 |

### Variant Strategy Matrix (v2 — with Two-Channel outcomes)

| Variant | Target Outcomes | Channel | Strategy |
|---------|----------------|---------|----------|
| **I-01 Standard** | O-62, O-64, O-59, O-60, O-26, O-27, O-30 | A+B+SW | Prove fidelity on BOTH channels → earn trust. Data capture từ day 1. |
| I-02 CTR | O-13, O-14, O-19 + I-01 fidelity | -- | Step 3 extreme: ≤8 min setup in container. Same A+B channels. |
| I-06 Tactical | O-45, O-48, O-50 + 3-station | SW | Step 7 crew-level: coordinated fire, competitive drills |
| **I-08 ACH** | O-38, O-48, O-65, O-68, O-51, O-45, O-06 | **AI** | Step 6/7/8 revolution. Data compound from I-01 fleet → AI coaching |
| I-09 TAB | O-13, O-14, O-20 | -- | Disruptive low-end. No Channel A/B — cognitive training only |

### Requirements Gaps Identified

| Outcome | Gap | Requirement | Status |
|---------|-----|-------------|--------|
| O-13 | No setup time requirement | PR-008: Field setup ≤ 8 min by 2 persons [D] | ✅ Added v1.4 |
| O-48 | No sub-skill isolation | S-022: Sub-skill isolation drills ≥ 5 types [W1] | ✅ Added v1.4 |
| O-51 | No auto-report spec | S-023: Auto MoD-format training report [D] | ✅ Added v1.4 |
| O-52 | No cross-session tracking | S-024: Performance trends ≥ 20 sessions [W1] | ✅ Added v1.4 |
| O-62 | Recoil force per-shot not specified | Covered by F-005 + TE-001 + Doc 022 v1.1 | ✅ Existing |
| O-64 | Sim→live transition risk not addressed | No requirement — **recommend field validation protocol** | ⚠️ Gap |
| O-68 | Predictive qualification not specified | I-08 only — deferred to DG-2 requirements | Deferred |
| O-25a | Pneumatic consistency not specified | **Recommend: pressure regulation ±0.5 bar between sessions** | ⚠️ Gap |

## CEO Decisions (2026-03-20)

- [x] **Strategy type: DIFFERENTIATED** — confirmed
- [x] **Top 6 innovation targets** — confirmed (O-26, O-30, O-27, O-37, O-38, O-13)
- [x] **5 I-08 ACH candidates** — confirmed (O-38, O-48, O-51, O-45, O-06)
- [x] **4 requirements gap additions** — approved:
  - R-PR-022: Field setup ≤ 8 min by 2 persons [D]
  - R-SW-022: Sub-skill isolation drills [W1]
  - R-SW-023: Auto MoD-format training report [D]
  - R-SW-024: Performance trends ≥ 20 sessions [W1]
- [ ] Schedule user interviews (15 respondents: 5 xạ thủ + 5 HLV + 5 chỉ huy) — TEMPLATE READY ([Interview_Template_v1.0.md](Interview_Template_v1.0.md)), target: 2026-04-10 → 2026-04-30

## Downstream Routing

```
forge-job-map (this) →
├── forge-scout → underserved outcomes as ACH filter
├── forge-shift → "O" in SHIFTO (I-08 assessment)
├── forge-validate → customer-defined metrics
├── forge-trust → evidence in outcome language
├── forge-cost → overserved = cost reduction targets
├── helix-task-clarify → 4 new requirements from gaps
└── bridge-knowledge-base → Layer 2: customer job data
```
