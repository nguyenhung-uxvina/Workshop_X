# Workshop X — Data Flywheel Health Report
## forge-flywheel Output | v1.0

**Date**: 2026-03-20
**Flywheel Status**: PRE-DEPLOYMENT (designing the flywheel, not yet spinning)

---

# 1. FLYWHEEL ARCHITECTURE — VN-12.7MM-SIM

```
                    THE ACH DATA FLYWHEEL (R2)

    ┌─────────────────────────────────────────────────────┐
    │                                                     │
    │   DEPLOY I-01 with data capture ($50 sensor)        │
    │        │                                            │
    │        ▼                                            │
    │   FIELD DATA collected per session:                 │
    │   • Per-shot force (pressure transducer)    ←── MOUNT "T"
    │   • Tracking error (encoders)                       │
    │   • Burst patterns (trigger timing)                 │
    │   • Engagement scores (ballistics)                  │
    │        │                                            │
    │        ▼                                            │
    │   DATA IMPROVES I-08 coaching model:                │
    │   • WX-CLS-001 learns VN gunner patterns            │
    │   • Miss diagnosis accuracy improves                │
    │   • Weakness detection gets sharper                  │
    │        │                                            │
    │        ▼                                            │
    │   BETTER COACHING → measurable outcomes:            │
    │   • Qualification rate increases                    │
    │   • Training time decreases                         │
    │   • CO sees ROI in reports                          │
    │        │                                            │
    │        ▼                                            │
    │   MORE UNITS DEPLOYED:                              │
    │   • Navy orders more I-01 stations                  │
    │   • I-08 upgrade licenses sold                      │
    │   • Export interest from ASEAN                      │
    │        │                                            │
    │        └──────────────── back to top ───────────────┘
    │
    │   COMPOUND EFFECT:
    │   20 units × 1,000 sessions/yr = 20,000 sessions
    │   → richest Soviet 12.7mm training dataset on Earth
    │   → NO competitor can replicate (zero deployed base)
    │   → data IS the moat
    └─────────────────────────────────────────────────────┘
```

---

# 2. DATA COLLECTION STATUS

| Product | Deployed Units | Data Rate | Quality | Pipeline Status |
|---------|:-------------:|-----------|:-------:|:--------------:|
| VN-12.7MM-SIM I-01 | 0 (prototype) | 0 GB/month | — | **DESIGNED** (Doc 022 §16) |
| VN-USV-SS-001 | 0 (Phase 0) | 0 GB/month | — | NOT DESIGNED |
| BB-01 LOMAH | 0 (Phase 1) | 0 GB/month | — | NOT DESIGNED |

**Total data collection: 0 GB/month — flywheel NOT spinning.**
**But: data pipeline DESIGNED into I-01 architecture (MOUNT "T" principle).**

---

# 3. DATA PIPELINE DESIGN (I-01 → I-08 Flywheel)

## 3.1 What I-01 Captures (from Doc 022 §16)

| Data | Sensor | Rate | Size/Session | I-08 ACH Use |
|------|--------|:----:|:------------:|-------------|
| Traverse angle | Encoder (SS2) | 1 kHz | ~7 MB | Tracking error analysis |
| Elevation angle | Encoder (SS2) | 1 kHz | ~7 MB | Elevation correction coaching |
| Trigger timing | FSR (SS2) | 1 kHz | ~0.5 MB | Burst discipline, reaction time |
| Recoil force | Pressure transducer (SS10) | 1 kHz | ~3.5 MB | Per-shot force profile → recoil absorption skill |
| Ballistics result | SW (SS4) | Per round | ~0.1 MB | Hit/miss, lead error, trajectory |
| Engagement score | SW (SS4) | Per engagement | ~0.01 MB | Outcome per target interaction |
| **Session total** | | | **~18 MB** | |

## 3.2 Data Volume Projections

| Scenario | Units | Sessions/yr | Data/yr | Cumulative 3yr |
|----------|:-----:|:-----------:|:-------:|:--------------:|
| Prototype (Year 0) | 1 | 200 | 3.6 GB | 3.6 GB |
| Initial deployment | 6 | 6,000 | 108 GB | 112 GB |
| Full fleet | 20 | 20,000 | 360 GB | 1.1 TB |
| Export phase | 50 | 50,000 | 900 GB | 3.8 TB |

**Storage: 1 TB SSD per station (S-016) holds 12 months at ~360 GB/yr fleet. USB export quarterly.**

## 3.3 Data Quality Requirements

| Quality Gate | Threshold | Action if Failed |
|-------------|-----------|-----------------|
| Pressure transducer calibrated | ±0.5 bar | BIST check blocks session start |
| Encoder zero-reference valid | Z-pulse detected | Auto-recalibrate at startup |
| Session record complete | All fields non-null | Flag incomplete sessions for manual review |
| Labels present (HLV input) | ≥80% engagements labeled | Prompt HLV before session close |
| No obvious outliers | Force > 5,000 N or < 0 N rejected | Auto-filter + log anomaly |

**Target quality: ≥85% usable for ML training** (15% expected loss from incomplete labels, sensor glitches, interrupted sessions).

---

# 4. MODEL UPDATE CYCLE (Projected)

| Model ID | First Training | Data Needed | Retrain Trigger | Projected Cycle |
|----------|:-------------:|:----------:|-----------------|:--------------:|
| WX-CLS-001 (Coaching) | 2027-Q1 | ≥200 sessions labeled | HLV override rate >30% OR +500 new sessions | Quarterly |
| WX-PRD-001 (Analytics) | 2027-Q1 | ≥200 sessions | New report format request | Bi-annual |
| WX-TRK-001 (Pose) | 2027-Q2 | ≥100 video sessions | Accuracy drift >5% | Bi-annual |

**Model updates target: ≥1 per quarter once flywheel active.**

---

# 5. FLYWHEEL SPEED METRICS

## 5.1 Current (Pre-deployment)

| Metric | Value | Assessment |
|--------|-------|-----------|
| Insights generated | 0 (no field data) | — |
| Insights acted on | 0 | — |
| Days from insight to action | N/A | — |
| Flywheel speed | **0** | **PRE-DEPLOYMENT** |

## 5.2 Projected Milestones

| Date | Event | Flywheel Effect |
|------|-------|----------------|
| **2026-04** | Stage 1 lab validation | Data pipeline verified (not field data) |
| **2026-06** | Stage 2 integrated test | First 50 sessions captured (internal) |
| **2026-08** | Stage 3 operational test | First 200+ sessions from real gunners |
| **2026-09** | OT-3 training scar results | MAKE-OR-BREAK: if pass → trust evidence → more deployments |
| **2027-Q1** | I-08 ACH v0.1 trained | **R2 FLYWHEEL ACTIVATES** — first model from field data |
| **2027-Q2** | First retrain cycle | Speed measurable: insight → action ≤30 days |
| **2027-Q4** | 6 units deployed, 6,000 sessions | Flywheel ACCELERATING |
| **2028+** | Export + 20+ units | **Data moat established** — impossible for new entrant to replicate |

---

# 6. COMPOUND PROJECTION

## 6.1 If Flywheel Spins (optimistic: 6 units Year 1, 20 Year 3)

| Year | Units | Sessions | Model Accuracy | Revenue Impact |
|:----:|:-----:|:--------:|:--------------:|:--------------:|
| 1 | 6 | 6,000 | v0.1: ~75% | $92K (6× I-01) |
| 2 | 12 | 12,000 | v1.0: ~85% | $184K + $54K upgrades |
| 3 | 20 | 20,000 | v2.0: ~92% | $306K + $90K upgrades |
| **3-yr total** | | **38,000** | | **$726K** |

**Compound effect:** Model v2.0 at 92% accuracy is IMPOSSIBLE without Year 1-2 data. This is the unfair advantage — competitors starting from zero cannot reach v2.0 without 38,000 sessions of field data.

## 6.2 If Flywheel Stalls (no data collection / no retraining)

| Year | Impact |
|:----:|--------|
| 1 | I-08 coaching = rules-only (no ML). Accuracy ~60%. HLV says "AI không chính xác." |
| 2 | I-08 upgrade revenue = $0. Customers see no value vs I-01 alone. |
| 3 | Competitor enters with 1-year data head start. WX loses first-mover advantage. |
| **Cost of stall** | **-$144K revenue + lost competitive moat** |

## 6.3 Investment to Keep Flywheel Spinning

| Investment | Cost/yr | ROI |
|-----------|:-------:|-----|
| Pressure transducer in every unit | $50/unit (already in BOM) | Enables ALL I-08 outcomes |
| Quarterly model retraining | $1,000/yr | Model accuracy +2-5%/cycle |
| Data quality monitoring | $500/yr (automated scripts) | Keeps usable data ≥85% |
| USB data collection visits | $200/yr (travel to units) | Until cloud telemetry |
| **Total flywheel operating cost** | **$1,750/yr** | **Enables $144K/yr I-08 revenue** |

**ROI of flywheel investment: 82×** ($1,750 → $144K/yr).

---

# 7. FLYWHEEL BLOCKERS & MITIGATIONS

| Blocker | Probability | Signal | Mitigation |
|---------|:----------:|--------|-----------|
| No telemetry in I-01 | ❌ MITIGATED | — | $50 pressure transducer already in BOM v1.1 |
| HLV won't label data | MEDIUM | Override rate unmeasurable | Make labeling part of AAR workflow (2 clicks, not separate task) |
| Customer won't share data | MEDIUM | Data stays on-site | Offer on-site model update service (CEO visits, updates model, leaves) |
| Retraining capacity | LOW | No engineer time | Automate retrain pipeline (Edge Impulse / STM32Cube.AI) |
| Model improvement plateau | FUTURE | Δ < 1% per retrain | New data modality (camera pose WX-TRK-001) or new architecture |
| USB export too manual | HIGH | Missing quarterly exports | **Design cloud sync in I-01 v2 (2027)** — or use 4G modem add-on |

**#1 risk: HLV labeling friction.** If HLV doesn't click "correct/incorrect" after each engagement, data is unlabeled → useless for supervised ML. Solution: embed labeling INTO AAR screen (not separate), make it 2 taps, default to auto-label with "HLV override" option.

---

# 8. CROSS-PRODUCT FLYWHEEL

```
VN-12.7MM-SIM flywheel:
  20,000 sessions/yr → coaching model v2.0
       │
       ├──→ BB-01 LOMAH:
       │      Session analytics engine (WX-PRD-001) transfers
       │      Hit/miss statistics benefit from same data architecture
       │
       ├──→ VN-USV-SS-001:
       │      Data pipeline patterns (capture → USB → retrain) reused
       │      Jetson inference pipeline (WX-DET-001) shared
       │
       └──→ FUTURE PRODUCTS:
              Any crew-served weapon trainer benefits from coaching model
              NSV/Kord/M2 → fine-tune WX-CLS-001, NOT retrain from scratch
              → COMPOUND: every new weapon type = weeks, not months
```

---

# 9. ALERTS & NEXT ACTIONS

| Priority | Alert | Action | Owner | Date |
|:--------:|-------|--------|:-----:|------|
| 🟢 | Data pipeline designed into I-01 | No action — MOUNT "T" already implemented | — | Done |
| 🟡 | HLV labeling UX not designed | Design labeling into AAR screen (2 taps) | AI (SW spec) | Phase 4 |
| 🟡 | USB export = only data path | Plan 4G modem add-on or cloud sync for I-01 v2 | CEO | 2027 |
| 🟡 | Retrain pipeline not built | Choose Edge Impulse vs custom Python | CEO | After Stage 2b |
| 🔴 | **No field data until Stage 3 (2026-08)** | **This is the flywheel clock — every month of delay = lost compound** | CEO | Physical gate |

---

# 10. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-20 | KN + AI (forge-flywheel) | Initial: pre-deployment flywheel design. Data pipeline 18 MB/session. Projections: 38K sessions in 3yr. Flywheel operating cost $1,750/yr → enables $144K/yr I-08 revenue (82× ROI). Top blocker: HLV labeling friction. |

---

*Workshop X Flywheel Health Report v1.0*
*forge-flywheel — R2 Data Compound Tracking*
