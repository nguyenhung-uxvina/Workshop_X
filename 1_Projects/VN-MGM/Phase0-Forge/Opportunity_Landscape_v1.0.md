---
created: 2026-04-10
type: opportunity-landscape
method: ODI Opportunity Algorithm (Ulwick)
version: v1.0
project: VN-MGM V1-NAVAL-12.7
evidence_tier: "[L4-ESTIMATE] — needs field interview validation"
feeds_to:
  - forge-shift (ACH assessment)
  - forge-scout (ACH opportunity filter)
  - forge-cost (overserved = cost reduction)
  - helix-task-clarify (requirements validation)
  - HOQ_Design_Parameters_v1.0.md
---

# Opportunity Landscape — VN-MGM V1-NAVAL-12.7

## HIGHLY UNDERSERVED (Opp ≥ 8.0) — Top Innovation Targets

| Rank | # | Outcome | Step | I | S | Opp |
|------|---|---------|------|---|---|-----|
| **1** | O-40 | Minimize difficulty of engaging targets at night | 6-MONITOR | 5.0 | 1.5 | **8.5** |
| **2** | O-29 | Minimize difficulty of tracking a moving target | 5-EXECUTE | 5.0 | 2.0 | **8.0** |
| **3** | O-51 | Minimize likelihood of corrosion from skipped maintenance | 8-CONCLUDE | 5.0 | 2.0 | **8.0** |

### Insight: Two Channels

| Channel | Outcomes | Nature | Solution Path |
|---------|----------|--------|---------------|
| **A — Physical (I-01 HW)** | O-29 (tracking), O-31 (stabilization), O-28/O-43 (slew speed) | Manual mechanism limit | V5-MOTORIZED + N11-STABILIZED |
| **B — Information (I-08 ACH)** | O-40 (night), O-34 (first hit), O-22 (condition detection), O-55 (storage condition) | Sensing + feedback gap | Sensor + AI overlay → low-cost ACH |

**Channel A and B have ZERO overlap** — different sub-functions, different solution paths. This is the cleanest possible ACH separation.

---

## UNDERSERVED (Opp 6.0-7.9) — Strong Innovation Opportunities

| Rank | # | Outcome | Step | I | S | Opp |
|------|---|---------|------|---|---|-----|
| 4 | O-31 | Minimize pointing error from platform motion | 5-EXECUTE | 5.0 | 2.5 | 7.5 |
| 5 | O-16 | Minimize difficulty of mounting weapon in darkness | 3-PREPARE | 4.5 | 2.0 | 7.0 |
| 6 | O-22 | Minimize likelihood of undetected traverse problem | 4-CONFIRM | 5.0 | 3.0 | 7.0 |
| 7 | O-28 | Minimize time to slew 180° to new threat | 5-EXECUTE | 5.0 | 3.0 | 7.0 |
| 8 | O-34 | Minimize rounds to first hit | 5-EXECUTE | 5.0 | 3.0 | 7.0 |
| 9 | O-43 | Minimize time to switch target bearing | 7-MODIFY | 5.0 | 3.0 | 7.0 |
| 10 | O-44 | Minimize burn risk during barrel change | 7-MODIFY | 5.0 | 3.0 | 7.0 |
| 11 | O-50 | Minimize post-firing maintenance required | 8-CONCLUDE | 4.5 | 2.0 | 7.0 |
| 12 | O-55 | Minimize uncertainty about mount condition after storage | 8-CONCLUDE | 4.5 | 2.0 | 7.0 |
| 13 | O-17 | Minimize difficulty of mounting weapon in rough sea | 3-PREPARE | 4.5 | 2.5 | 6.5 |
| 14 | O-23 | Minimize likelihood of undetected elevation lock failure | 4-CONFIRM | 5.0 | 3.5 | 6.5 |
| 15 | O-30 | Minimize operator fatigue during sustained engagement | 5-EXECUTE | 4.5 | 2.5 | 6.5 |
| 16 | O-08 | Minimize physical effort to carry weapon to mount | 2-LOCATE | 4.5 | 2.5 | 6.5 |
| 17 | O-12 | Minimize injury risk carrying weapon on wet deck | 2-LOCATE | 4.5 | 3.0 | 6.0 |
| 18 | O-05 | Minimize uncertainty about mount status before arriving | 1-DEFINE | 4.0 | 2.0 | 6.0 |
| 19 | O-14 | Minimize pin jamming from corrosion | 3-PREPARE | 4.5 | 3.0 | 6.0 |
| 20 | O-20 | Minimize likelihood of incorrect installation | 3-PREPARE | 5.0 | 4.0 | 6.0 |
| 21 | O-25 | Minimize uncertainty about condition after storage | 4-CONFIRM | 4.0 | 2.0 | 6.0 |
| 22 | O-26 | Minimize traverse effort | 5-EXECUTE | 5.0 | 4.0 | 6.0 |
| 23 | O-38 | Minimize difficulty observing bullet impact | 6-MONITOR | 4.5 | 3.0 | 6.0 |

---

## OVERSERVED (Opp ≤ 3.9) — Cost Reduction Candidates

| Rank | # | Outcome | Step | I | S | Opp |
|------|---|---------|------|---|---|-----|
| 1 | O-02 | Minimize confusion about which mount | 1-DEFINE | 3.0 | 4.0 | 3.0 |
| 2 | O-04 | Minimize time to determine ROE | 1-DEFINE | 3.0 | 3.0 | 3.0 |
| 3 | O-10 | Minimize wrong ammo likelihood | 2-LOCATE | 3.0 | 4.0 | 3.0 |
| 4 | O-46 | Minimize difficulty switching weapon type | 7-MODIFY | 3.0 | 3.5 | 3.0 |
| 5 | O-35 | Minimize dead zone | 5-EXECUTE | 3.5 | 3.5 | 3.5 |
| 6 | O-18 | Minimize securing steps | 3-PREPARE | 3.5 | 3.5 | 3.5 |
| 7 | O-49 | Minimize weapon removal time | 8-CONCLUDE | 3.5 | 4.0 | 3.5 |
| 8 | O-54 | Minimize consumable cost per year | 8-CONCLUDE | 3.5 | 4.0 | 3.5 |

---

## Pain Point Distribution by Job Step

```
Step        Outcomes  Avg Opp   Worst Outcome
─────────────────────────────────────────────
1.DEFINE      6       4.33      O-05 (6.0)
2.LOCATE      6       4.92      O-08 (6.5)
3.PREPARE     8       5.31      O-16 (7.0)  ← pre-fire
4.CONFIRM     5       5.70      O-22 (7.0)  ← pre-fire
5.EXECUTE    12       5.96      O-29 (8.0)  ★ CORE PAIN
6.MONITOR     5       5.40      O-40 (8.5)  ★ HIGHEST
7.MODIFY      5       5.30      O-44 (7.0)
8.CONCLUDE    8       5.38      O-51 (8.0)  ★ MAINTENANCE
─────────────────────────────────────────────
Step 5+6 (firing): Avg 5.76 — highest pain cluster
Step 8 (post-fire): 5.38 — maintenance gap
Step 3+4 (pre-fire): 5.47 — night/rough sea operations
```

**Observation:** Pain is NOT concentrated only in Step 5 (Execute). Step 6 (Monitor: night engagement) and Step 8 (Conclude: maintenance skip) are equally critical. This confirms helix-task-clarify skill gotcha #5: "Step 5 bias."

---

## Strategy Recommendation

### 1. Innovation Targets (Underserved → V5/N12/N11)

| Target | Outcomes Addressed | Product Solution |
|--------|-------------------|-----------------|
| **Fast target tracking** | O-29, O-28, O-43 | V5-MOTORIZED (motor traverse) |
| **Platform stabilization** | O-31 | N11-STABILIZED (gyro) |
| **Operator fatigue** | O-30, O-26 | V5 + N12-RETROFIT (motor assist) |
| **Night engagement** | O-40, O-16 | Sensor package (NVG mount + illuminator) |
| **Maintenance burden** | O-50, O-51, O-55 | N10-MAINT-KIT + condition monitoring |

### 2. ACH Candidates (Information channel — low-cost AI/sensor overlay)

| Outcome | ACH Approach | Cost |
|---------|-------------|------|
| O-40: Night engagement | Thermal camera + simple AI target highlight | $500-2K add-on |
| O-34: First hit efficiency | Ballistic calculator + wind sensor + lead indicator | $300-1K add-on |
| O-22/O-55: Condition detection | IoT vibration sensor on bearing + threshold alert | $50-200 per mount |
| O-38: Impact observation | Tracer camera or simple electro-optical spotter | $500-1.5K |

**ACH ROI insight:** $50 vibration sensor on 300 mounts = $15K total → prevents bearing seizure ($500+ repair per unit) → estimated $75K+ savings over 5 years → **500× ROI**

### 3. Strategy Type

**CEO: chọn strategy type:**

- [ ] **Differentiated** — Target underserved outcomes via V5/N12 (premium charge)
- [ ] **Dominant** — Serve ALL outcomes comprehensively (V1 + V5 + sensor package)
- [ ] **Discrete** — Simplify overserved features, lower V1 cost
- [ ] **Disruptive** — N12 retrofit approach: V1 performance at V5 capability for 1/3 price

**Đề xuất: DIFFERENTIATED for V5/N11, DISRUPTIVE for N12** — hai strategy khác nhau cho hai product line.

### 4. Outcome × Requirements Bridge (→ helix-task-clarify)

| Underserved Outcome | → Requirement | D/W |
|---------------------|--------------|-----|
| O-29: Track moving target | "Manual traverse rate ≥30°/s" (V5: motor ≥60°/s) | D (V5) |
| O-40: Night engagement | "Night sight mount: MIL-STD-1913 rail ≥100mm" | W (V1), D (V5) |
| O-51: Corrosion from skip | "Self-lubricating bearing surfaces OR sealed bearing" | W+ (V1), D (future) |
| O-16: Mount in darkness | "Tactile alignment features for blind mounting" | W (V1) |
| O-50: Post-fire maintenance | "Maintenance time ≤5 min post-firing" | W+ (V1) |
| O-55: Condition after storage | "Condition indicator (visual/IoT)" | W (V1), D (N10-M) |

---

*Scores are [L4-ESTIMATE]. CEO conducts structured interviews with 6-12 trắc thủ to validate.*
