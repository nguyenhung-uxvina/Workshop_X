# RE STAGE 2B-DT: RE COMPLEXITY CLASSIFICATION — InVeris FATS

**Date:** 2026-04-22

---

## PER-SF ASSESSMENT

| SF | Description | WX Prior Art | Complexity | Stage 3 Depth |
|----|------------|-------------|-----------|---------------|
| SF-01 | Recoil impulse | YES (BB-01 solenoid driver) | **GREEN** | SHALLOW — WX has proven approach |
| SF-02 | Aim tracking | YES (encoder-based, designed) | **GREEN** | SHALLOW — WX approach independent |
| SF-03 | Trigger event | YES (microswitch designed) | **GREEN** | SHALLOW — upgrade to strain gauge is minor |
| SF-04 | Handling quality sensors | **NO** (gap identified) | **AMBER** | MODERATE — need IMU + force cell selection |
| SF-05 | Ballistic trajectory | YES (V-SMASH engine) | **GREEN** | SHALLOW — reuse existing |
| SF-06 | Hit detection | YES (ray-trace designed) | **GREEN** | SHALLOW — independent approach |
| SF-07 | Visual rendering | YES (Unity selected) | **GREEN** | SHALLOW — engine selected |
| SF-08 | Projection display | YES (Optoma selected) | **GREEN** | SHALLOW — COTS selected |
| SF-09 | Audio immersion | YES (COTS selected) | **GREEN** | SHALLOW — standard |
| SF-10 | Target AI behavior | PARTIAL (designed, not coded) | **AMBER** | MODERATE — FATS Drone VBS4 insights useful |
| **SF-11** | **Real-time coaching** | **NO** (major gap) | **RED** | **DEEP** — new capability, architecture decision required |
| SF-12 | AAR/analytics | PARTIAL (basic AAR designed) | **AMBER** | MODERATE — upgrade from basic → rich analytics |
| SF-13 | Scenario management | YES (designed) | **GREEN** | SHALLOW |
| SF-14 | Weapon auto-detect | YES (NFC MWI) | **GREEN** | SHALLOW — WX approach superior |
| SF-15 | Energy recharge | N/A | N/A | N/A — WX uses 24VDC |
| SF-16 | System calibration | PARTIAL | **AMBER** | MODERATE — need auto-calibration procedure |
| SF-17 | Ship motion | YES (2-DOF designed) | **GREEN** | SHALLOW — WX unique, no FATS equivalent |
| SF-18 | Multi-trainee | N/A (LITE = 1) | N/A | N/A for LITE |

---

## CLASSIFICATION SUMMARY

| Complexity | Count | % | SFs |
|-----------|-------|---|-----|
| **GREEN** | 10 | 63% | SF-01,02,03,05,06,07,08,09,13,14,17 |
| **AMBER** | 4 | 25% | SF-04, SF-10, SF-12, SF-16 |
| **RED** | 1 | **6%** | **SF-11 (Coaching)** |
| N/A | 3 | — | SF-15, SF-17(GREEN), SF-18 |

## OVERALL RE COMPLEXITY: **AMBER**

**Rationale:** 63% GREEN (WX has strong prior art), but the single RED SF (SF-11 Coaching) is the **solution-determining** sub-function. This RED SF cascades to 3 AMBER SFs (SF-04, SF-10, SF-12) that all feed coaching data.

## STAGE 3 TIME BUDGET CALIBRATION

| Category | SFs | Stage 3 Effort | Focus |
|----------|-----|----------------|-------|
| GREEN (reuse WX) | 10 SFs | 20% time — quick comparison only | Validate WX approach matches/exceeds FATS |
| AMBER (selective learning) | 4 SFs | 30% time — moderate analysis | Sensor selection, target AI insights, AAR upgrade |
| **RED (deep investigation)** | **1 SF** | **50% time — full exploration** | **Coaching architecture: Path A/B/C decision** |
