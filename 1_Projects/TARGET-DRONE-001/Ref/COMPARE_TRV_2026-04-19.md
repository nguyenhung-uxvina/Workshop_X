---
created: 2026-04-19
type: compare-report
source: /reverse-engineering --mode compare
project: TARGET-DRONE-001
candidates: ["Simsek-K (TAI)", "Super Simsek (TAI)", "Abhyas (DRDO)", "Mirach 40 (Leonardo)"]
winner: Simsek-K
strategy: Option 3 Hybrid (Simsek-K primary + India strategic partnership separate)
status: completed
tags: [#type/compare-report, #status/completed]
---

# TRV Comparative Evaluation — TARGET-DRONE-001
## /reverse-engineering --mode compare | 2026-04-19

---

## CEO Decisions

- **Primary candidate:** Simsek-K (TAI, Turkey)
- **Strategic option:** Option 3 Hybrid — Simsek-K for TRV + India defense partnership (separate from TRV)
- **Next step:** /reverse-engineering --mode mecha on Simsek-K
- **Monitor:** Super Simsek ground-launch development (re-evaluate 2028)
- **Drop:** Abhyas for TRV role (keep India partnership for other domains)

---

## Candidates Evaluated (4)

| # | Product | Country | Manufacturer | Status |
|---|---------|---------|-------------|--------|
| 1 | Simsek-K | Turkey | TAI/TUSAS | Operational, 100/yr production |
| 2 | Super Simsek | Turkey | TAI/TUSAS | Inducted Mar 2026, air-launch only |
| 3 | Abhyas HEAT | India | DRDO/ADE | Production-ready 2024, no deliveries |
| 4 | Mirach 40 | Italy | Leonardo | Operational 2018, NATO contracted |

---

## C1: OSINT Parity (Data Coverage)

| Layer | Simsek-K | Super Simsek | Abhyas | Mirach 40 |
|-------|---------|-------------|--------|----------|
| Avg coverage | 64% | (shared with Simsek-K) | 67% | 69% |
| Verdict | ACCEPTABLE — within 5% parity across all candidates |

---

## C2: Technical Head-to-Head (7 Dimensions)

### Specification Matrix

| Parameter | Simsek-K | Super Simsek | Abhyas | Mirach 40 |
|---|---|---|---|---|
| Max Speed | Mach 0.63 | Mach 0.85-0.9 | Mach 0.50 | Mach 0.59 |
| Ceiling | 7,620m | 10,668m | 5,000m | >8,000m |
| Endurance | 45+ min | 80 min | 30-45 min | >60 min |
| MTOW | 83 kg | 200 kg | 75 kg | 70 kg |
| Engine | TEI TJ-90 (400N) | TEI uprated | PTAE-7 (245N) | Undisclosed |
| Recovery | Parachute | Parachute | EXPENDABLE | Parachute |
| Sea-skimming | Implied | Unknown | Partial | 5m AGL proven |
| G-load | Unknown | Unknown | 2G | 6G |
| RCS augment | Luneberg+active+MDI | Likely same | Luneberg (50x) | Active+passive+chaff |

### Weighted Technical Scores (Baseline)

| Candidate | Score |
|---|---|
| Mirach 40 | 7.30 |
| Simsek-K | 7.10 |
| Super Simsek | 6.65 |
| Abhyas | 5.75 |

---

## C3: Geopolitical + Cost + Delivery Risk

### Geopolitical Fit
1. Abhyas: 9/10 (strongest bilateral, shared China concerns)
2. Simsek-K: 7/10 (good balance, emerging relationship)
3. Super Simsek: 6.5/10 (same Turkey base, lower VN priority)
4. Mirach 40: 5/10 (EU export controls, limited partnership)

### 20-Year TCO (30-unit program)
| Candidate | TCO Range |
|---|---|
| Abhyas | $140-230M (but expendable trap: 500 units needed) |
| Simsek-K | $150-240M |
| Mirach 40 | $154-246M |
| Super Simsek | $165-260M (+ $50-100M Anka-III carrier dependency) |

### Delivery Risk
| Candidate | Risk | On-time probability |
|---|---|---|
| Mirach 40 | LOW | 85-95% |
| Simsek-K | MODERATE | 70-80% |
| Super Simsek | HIGH | 40-55% |
| Abhyas | HIGH | 40-60% |

---

## C4: MCDA Final Scoring

### Aggregate (Baseline Weights: Tech 30%, Industrial 25%, Geo 15%, Cost 15%, Delivery 15%)

| Rank | Candidate | Score |
|------|-----------|-------|
| 1 | **Simsek-K** | **7.03** |
| 2 | Abhyas | 6.45 |
| 3 | Mirach 40 | 6.32 |
| 4 | Super Simsek | 5.57 |

### Sensitivity (6 Scenarios)

| Candidate | Wins | Robustness |
|---|---|---|
| **Simsek-K** | **4/6** | Wins Baseline, Risk-averse, Cost-first; close 2nd in all others |
| Abhyas | 2/6 | Wins TT-first, Strategic-first |
| Mirach 40 | ~1/6 | Near-win Tech-first only |
| Super Simsek | 0/6 | Too new, carrier dependency |

---

## Strategic Option Selected: Option 3 — Hybrid

```
PRIMARY: Simsek-K for TRV acquisition + progressive VN production
STRATEGIC: Separate India defense partnership (BrahMos, training, multi-domain)
MONITOR: Super Simsek maturation — re-evaluate 2028 for next-gen
DROP: Abhyas as TRV (wrong product, Indian Navy agrees)
FALLBACK: Mirach 40 for quick IOC if Simsek-K delivery stalls
```

### Workshop X Role Roadmap
| Year | Capability | VN Content |
|------|-----------|-----------|
| 1-2 | Field support + maintenance | 10% |
| 3-4 | Assembly + sub-system integration | 30-50% |
| 5-7 | Component manufacturing + test | 60-80% |
| 8-10 | Full production + VN variant | 80-95% |

---

## Next Actions
1. /reverse-engineering --mode mecha --project TARGET-DRONE-001 on Simsek-K
2. Negotiate with TAI: demand sea-skimming demo, source code TT, USD pricing
3. Maintain Mirach 40 dialogue as competitive pressure
4. Separate India partnership track (not TRV-dependent)

---

## Sources
- C1 OSINT: 3 parallel research agents, 50+ sources across 10 layers
- C2-C4: Analytical synthesis by Claude Code
- CEO validation at each stage gate
