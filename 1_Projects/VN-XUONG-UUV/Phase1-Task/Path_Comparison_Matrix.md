---
project: VN-XUONG-UUV
phase: 1
type: trade-study
variant: comparison-matrix
version: 1.0
created: 2026-03-06
status: draft
---

# VN-XUONG-UUV — Path Comparison Matrix

## 1. Summary Table

| Parameter | Path 1: Aluminum | Path 2: RIB | Path 3: Towed |
|-----------|-----------------|-------------|---------------|
| **Hull** | 6.5-7m aluminum monohull | 7m RIB (aluminum hull + Hypalon tubes) | 8m aluminum monohull |
| **Lightship** | 1,680 kg (margin: 320 kg to 2.0t) | 1,408 kg (margin: 592 kg to 2.0t) | 2,550 kg (no limit) |
| **Full load (with UUV)** | ~2,500 kg | ~2,230 kg | ~3,650 kg |
| **LARS type** | Electric winch | Electric winch | Hydraulic winch |
| **Winch speed** | 3-8 m/min | 3-8 m/min | 5-10 m/min |
| **Stored on deck** | Yes | Yes | **No** |
| **Beam (usable)** | 2.4 m | 1.8-2.0 m (tubes narrow) | 2.8 m |
| **V-funnel width** | ~1.8 m | ~1.4-1.6 m | ~2.2 m |
| **UUV/hull length ratio** | 77% (6.5m) or 71% (7m) | 71% | 62.5% |
| **UUV overhang** | 1.5-2.0 m (critical) | 0.5-1.0 m | None |
| **Working deck** | 1.2-1.5 m | 1.0-1.5 m | 2.5 m |
| **Recovery SS ceiling** | SS 2-3 | SS 2-3 | SS 3 |
| **Crew** | 2-3 | 2-3 | 3 |
| **Engine** | Outboard 90-150 hp | Outboard 90-150 hp | Inboard 150-200 hp |
| **Range** | 30 nm | 30 nm | 70-120 nm |
| **Night recovery** | No (no camera) | No | Yes (IR camera) |
| **Cost (capital)** | $213-420K (~$318K) | $170-355K (~$232K) | $373-661K (~$517K) |
| **Cost (15-year lifecycle)** | ~$318K + maintenance | ~$411-443K (tube replacements) | ~$517K + maintenance |
| **Nội địa hóa** | 70-80% | 50-60% | 70-80% |
| **VN manufacturing** | Proven (shipyards) | Limited (need imported tubes) | Proven (shipyards) |
| **Feasibility verdict** | MARGINAL | MARGINAL | FEASIBLE |

---

## 2. Weighted Scoring (VDI 2225 Style)

Criteria weighted by ODI opportunity scores and hard constraints.

| # | Criterion | Weight | P1: Aluminum | P2: RIB | P3: Towed |
|---|----------|--------|-------------|---------|-----------|
| 1 | **HC-1: Stored on deck** (preference) | 15 | 4 | 4 | 1 |
| 2 | **HC-2: Crane compatible (<2.0t)** | 15 | 3 | 4 | N/A (0 = not applicable, full score) |
| 3 | Recovery capability (SS ceiling) | 12 | 2 | 2 | 4 |
| 4 | UUV protection (funnel width, UHMWPE) | 10 | 3 | 2 | 4 |
| 5 | Crew safety (deck space, exposure) | 8 | 2 | 2 | 4 |
| 6 | UUV geometry fit (overhang) | 8 | 2 | 3 | 4 |
| 7 | Structural confidence | 7 | 3 | 1 | 4 |
| 8 | Tropical durability | 5 | 4 | 2 | 4 |
| 9 | Nội địa hóa (>=70% target) | 5 | 4 | 2 | 4 |
| 10 | Capital cost | 5 | 4 | 4 | 2 |
| 11 | Manufacturing risk | 5 | 4 | 2 | 4 |
| 12 | Growth potential (heavier UUVs) | 5 | 1 | 1 | 4 |

**Scale:** 4 = excellent, 3 = good, 2 = marginal, 1 = poor, 0 = fail

### Scoring Note on HC-2 for Path 3

Path 3 does not use the crane for the tender, so HC-2 (crane compatible) is not applicable. Path 3 gets full score (4) because the constraint is satisfied by design (only UUV uses crane, 550kg << 2.5t).

### Weighted Scores

| # | Criterion | Wt | P1 Score | P1 Weighted | P2 Score | P2 Weighted | P3 Score | P3 Weighted |
|---|----------|-----|---------|------------|---------|------------|---------|------------|
| 1 | Stored on deck | 15 | 4 | 60 | 4 | 60 | 1 | 15 |
| 2 | Crane compatible | 15 | 3 | 45 | 4 | 60 | 4 | 60 |
| 3 | Recovery capability | 12 | 2 | 24 | 2 | 24 | 4 | 48 |
| 4 | UUV protection | 10 | 3 | 30 | 2 | 20 | 4 | 40 |
| 5 | Crew safety | 8 | 2 | 16 | 2 | 16 | 4 | 32 |
| 6 | Geometry fit | 8 | 2 | 16 | 3 | 24 | 4 | 32 |
| 7 | Structural confidence | 7 | 3 | 21 | 1 | 7 | 4 | 28 |
| 8 | Tropical durability | 5 | 4 | 20 | 2 | 10 | 4 | 20 |
| 9 | Nội địa hóa | 5 | 4 | 20 | 2 | 10 | 4 | 20 |
| 10 | Capital cost | 5 | 4 | 20 | 4 | 20 | 2 | 10 |
| 11 | Manufacturing risk | 5 | 4 | 20 | 2 | 10 | 4 | 20 |
| 12 | Growth potential | 5 | 1 | 5 | 1 | 5 | 4 | 20 |
| | **TOTAL** | **100** | | **297** | | **266** | | **345** |
| | **Percentage** | | | **74.3%** | | **66.5%** | | **86.3%** |

---

## 3. Ranking

| Rank | Path | Score | % | Verdict |
|------|------|-------|---|---------|
| **#1** | **Path 3: Towed** | **345** | **86.3%** | Best technical solution. Only weakness: not stored on deck. |
| **#2** | **Path 1: Aluminum** | **297** | **74.3%** | Best deck-stored option. Marginal on weight, geometry, seakeeping. |
| **#3** | **Path 2: RIB** | **266** | **66.5%** | Lightest but structural risk, funnel constraint, nội địa hóa gap. |

---

## 4. Sensitivity Analysis

### What if "stored on deck" weight doubles (30 instead of 15)?

| Path | New Score | New % | Rank Change |
|------|-----------|-------|-------------|
| P1 | 357 | 77.2% | Still #2 |
| P2 | 326 | 70.4% | Still #3 |
| P3 | 330 | 71.3% | **Drops to #2** |

If deck storage is valued 2x, Path 1 barely beats Path 3. But Path 1 is still MARGINAL on feasibility.

### What if "stored on deck" is a HARD CONSTRAINT (must-have)?

- Path 3 eliminated.
- Path 1 wins over Path 2 (297 vs 266).
- But Path 1 feasibility = MARGINAL (weight, stern trim, geometry all tight).

### What if we relax to 7.0m hull (Path 1)?

| Impact | Change |
|--------|--------|
| Weight | +200-300 kg → lightship ~1,900-2,000 kg (at limit) |
| Geometry | UUV overhang drops from 2.0m to 1.0-1.5m |
| Stern trim | Improves significantly |
| Working deck | Increases to ~1.5-2.0m |
| Feasibility | Upgrades from MARGINAL to MARGINAL-FEASIBLE |

7.0m is likely the realistic Path 1 outcome.

---

## 5. Critical Differentiators

### Path 3 wins because:
1. **No weight constraint** → proper vessel size → proper LARS → proper recovery
2. **Funnel width 2.2m vs 1.4-1.8m** → fundamentally better capture probability
3. **Hydraulic winch** → handles dynamic loads that electric cannot
4. **8m hull** → 5m UUV fits with zero compromise
5. **Growth potential** → can handle heavier UUVs in future

### Path 3 loses because:
1. **Not stored on deck** → operational logistics complexity
2. **Higher cost** → $517K vs $318K (+62%)
3. **Towing risk** → 8m vessel in SS 4-5 alongside mother ship
4. **Navy acceptance** → unconventional concept (tender not ship-borne)

### Path 1 wins because:
1. **Stored on deck** → user preference, simpler logistics
2. **Lower cost** → $318K vs $517K
3. **Proven VN manufacturing** → aluminum shipyard capability
4. **Simpler system** → electric LARS, less maintenance

### Path 1 loses because:
1. **Marginal weight** → 320 kg margin, every kg counts
2. **2.0m UUV overhang** → stern trim, stability concern
3. **1.2m working deck** → cramped, safety issue
4. **Electric winch at SS 3** → dynamic loads may exceed capacity
5. **No growth potential** → maxed out at 550 kg UUV

### Path 2 should be selected only if:
1. Weight is the absolute overriding constraint (crane much weaker than expected)
2. AND structural FEA confirms LARS loads acceptable
3. AND Navy accepts 50-60% nội địa hóa
4. In practice: **unlikely to be the best choice**

---

## 6. Recommendation

### Primary: Path 3 (Towed)

Path 3 scores highest (86.3%) and is the only path rated **FEASIBLE** (not marginal). It solves every technical problem cleanly — the only cost is operational complexity (towing/self-transit) and not meeting the deck storage preference.

**Recommended sub-option:** 3A (towed alongside) as primary, 3B (self-transit) as secondary for longer-range operations.

### If Navy requires deck storage: Path 1 (Aluminum, 7.0m)

Path 1 at **7.0m** (not 6.5m) is the realistic deck-stored option. Lightship ~1,900 kg, tight but feasible. Accept:
- Recovery limited to SS 2 (not SS 3)
- Electric winch with conservative load limits
- 1.0-1.5m UUV overhang (manageable)
- Minimal growth potential

### Eliminate: Path 2 (RIB)

Path 2 scores lowest, has the highest structural risk, misses nội địa hóa target, and has higher lifecycle cost than Path 1 despite lower capital cost. Not recommended unless crane SWL drops below 2.0t (forcing lightest possible vessel).

---

## 7. Decision Required (User HITL)

```
OPTION A: Select Path 3 (Towed) — best capability, higher cost, not on deck
OPTION B: Select Path 1 (Aluminum 7.0m) — on deck, lower cost, reduced capability
OPTION C: Dual-concept — develop Path 1 as "basic" + Path 3 as "advanced" variant
OPTION D: Need more data before deciding (specify what)
```

**Data confidence for this comparison:** MEDIUM — weight budgets are estimates [ASSUMPTION], not calculated from structural analysis. Seakeeping comparisons are qualitative. Cost estimates have +/- 30% uncertainty.

---

## 8. Decision Record

**Decision (2026-03-06): OPTION A — Path 3 (Towed/Independent)**

~~Previous decision: Option C (dual-concept) — reversed immediately.~~

User selected single-path: **Path 3 — 8m aluminum monohull, hydraulic LARS, towed/independent.**

Rationale: best capability, no weight constraint, no compromise on recovery performance. Accept not storing on deck.

Path 1 (aluminum on-deck) and Path 2 (RIB) eliminated.

**Selected configuration:**
- 8m aluminum monohull (5083-H321), bilge keels
- Hydraulic LARS: stern ramp + passive V-funnel + hydraulic winch (1000kg SWL)
- USBL + IR camera + sea state sensor
- Inboard diesel 150-200hp
- Towed alongside mother ship (primary) / self-transit from port (secondary)
- Crane (2.5t) used ONLY for UUV loading/unloading (550kg — easy)
- Recovery: SS 3, crew 3, ~$517K

---

*Path Comparison Matrix v1.0 | VN-XUONG-UUV Phase 1 | Trade Study*
