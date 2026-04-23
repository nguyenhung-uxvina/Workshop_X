---
created: 2026-03-23
updated: 2026-03-23
type: project
status: active
tags: [#type/project, #pahl, #topic/triz]
project: VN-12.7MM-SIM
skill: helix-concept-generate + helix-task-clarify + helix-embody-realize (retrospective validation)
---

# ICDM Upgrades Dry Run — VN-12.7MM-SIM

**Purpose:** Retrospectively apply 5 new upgrades (from Mayda 2014 + Weiss 2015) to VN-12.7MM-SIM to validate whether they would have caught issues or added value.

---

## Upgrade #1: HOQ Formalization (forge-job-map)

**Test:** Does the formal HOQ construction (Steps H1-H5) produce better weights than the current ODI-derived approach?

### Current State
ODI Opportunity Landscape v2 has 58 outcomes with importance/satisfaction scores. HOQ_Design_Parameters_v1.0.md was created with 7 DPs and correlation roof (in TRIZ dry run).

### Retrospective Assessment

| Step | Done Already? | Value-Add if Formal HOQ? |
|------|-------------|------------------------|
| H1: Map outcomes → DPs | YES — 7 DPs mapped | MINOR — grouping was intuitive, formal would be same |
| H2: Correlation grades (A/B/C/D) | PARTIAL — only importance used, not cross-correlation | **YES** — formal grades would quantify HOW MUCH each outcome affects each DP |
| H3: Calculate W_TP(j) | NO — used raw opportunity scores as weights | **YES** — formal calculation would redistribute weights. Example: DP1 (Recoil) currently 0.25 by Opp score, but formal HOQ might yield 0.22 after cross-correlations |
| H4: Correlation roof | YES — done in TRIZ dry run | Already captured |
| H5: "Other characteristics" | NO | **YES** — we had 10 criteria in VDI 2225 but only 7 DPs from ODI. 3 criteria (C7 maintainability, C8 schedule, C9 mfg) had no ODI source. Formal HOQ would have flagged this gap |

**Verdict:** MODERATE value. The "Other characteristics" column (H5) would have caught the 3 missing criteria earlier. Formal W_TP calculation would have been more rigorous but probably same result (V2 wins regardless).

---

## Upgrade #7: TVDT — Target Values Decision Table (helix-task-clarify)

**Test:** Would TVDT have documented trade-off rationale that was later needed?

### Retrospective: Top 5 Controversial Requirements

| # | Requirement | Target Value | Trade-off | Competitor Benchmark | Implication | Was Rationale Documented? |
|---|-----------|-------------|----------|---------------------|-------------|-------------------------|
| CO-001 | Unit cost ≤$45K | $45,000 | vs TE-001 (training effectiveness) | InVeris FATS $500K+, Laser Shot $80K | ● Cost is prime concept driver (V3 eliminated) | **NO** — target appeared in req list without justification |
| K-005 | Friction variation ≤10% | 10% | vs CO-001 (cost) — mag brake ≥$150 vs friction brake $30 | ACME GAR: unknown, estimated 15-20% | ○ Drives brake technology selection | **NO** — derived from "feel match" subjective |
| TE-010 | Sim-to-live r² ≥0.75 | 0.75 | vs SCH-001 (schedule) — validation takes months | No competitor publishes r² | ● Schedule risk R4 (SFD=6 in risk register) | **NO** — target was aspirational |
| PR-001 | Local content ≥70% | 70% | vs C2 (fidelity) — local components less precise | Policy requirement, no benchmark | ○ At exact threshold (V2 = 70%) | **NO** — policy requirement, no discussion recorded |
| F-005 | Vibration feedback (W) | W (wish) | vs CO-001 — recoil adds $2-5K to unit cost | Laser Shot L3 pneumatic, ACME electric | ● Later elevated to subsystem-level concept (Doc 022) | **NO** — started as wish, became critical |

### Assessment

**3/5 controversial requirements had NO documented trade-off rationale.** The most critical:

1. **CO-001 ($45K)** — Why $45K and not $40K or $50K? What competitor benchmark drove this? If $50K was acceptable, V4 (Replica) would have been viable. This decision shaped the ENTIRE concept selection. **TVDT would have captured the "why."**

2. **F-005 (recoil)** — Started as a wish-level requirement but was later elevated to a subsystem concept design (Doc 022). TVDT implication analysis (● critical) would have flagged this EARLY: "this wish-level requirement has critical conceptual implications."

3. **TE-010 (r² ≥ 0.75)** — Aspirational target with no benchmark. TVDT would have asked "what's the competitor's r²?" Answer: nobody publishes. This means the target is arbitrary → should be flagged as high-risk (which it was in Risk R4, but only in Phase 2, not Phase 1).

**Verdict:** HIGH value. TVDT would have caught 3 under-documented trade-offs that later caused Phase 2/3 complications. Most impactful: F-005 escalation from wish to subsystem could have been identified in Phase 1.

---

## Upgrade #6: CFMA — Conceptual Failure Mode Analysis (helix-concept-generate)

**Test:** Would CFMA have caught failure modes before V2 selection?

### Retrospective CFMA for V2 Standard (selected concept)

| Function | Failure Mode | Failure Effect | S | Failure Cause | F | Detection Method | D | SFD | Action Items | Rev SFD |
|----------|-------------|---------------|---|--------------|---|----------------|---|-----|-------------|---------|
| F1.4 Provide resistance | Magnetic brake torque drift | Feel mismatch → training scars | 8 | Temperature 18-32°C (OP-017) | 3 | Torque-vs-temp data from mfr | 2 | **48** | Current-compensation LUT in firmware | 16 |
| F1.4 Provide resistance | Brake fail open | No resistance → unsafe | 9 | Power supply failure | 2 | BIST self-test (MT-006) | 1 | 18 | Fail-safe: spring-loaded minimum torque | 6 |
| F3.1 Compute ballistics | 6-DOF model drag error >2% | Incorrect scoring → false confidence | 7 | Aero coefficient data inaccurate | 3 | Validate against STANAG 4355 | 3 | **63** | Multi-source coefficient validation + early test suite | 21 |
| F4.1 Assess performance | r² < 0.75 sim-to-live | Product fails acceptance criterion | 8 | Insufficient live-fire calibration data | 4 | Live-fire trial (Month 8-9) | 5 | **160** | Early correlation trial, accept r² ≥ 0.60 initially | 48 |
| F2.2 Render environment | Unity frame drops <60fps | Visual artifacts → immersion break | 3 | GPU overload with triple monitor | 3 | Performance profiling | 2 | 18 | GPU selection spec, LOD optimization | 6 |
| FR-1 Generate recoil | Pneumatic insufficient force | Below 70% threshold → training scars | 8 | Bore/pressure sizing error | 2 | Prototype test (physical gate 04-05) | 3 | **48** | Calculate from first principles, confirm with prototype | 16 |
| FR-4 Supply working medium | Compressor noise interferes | Masks firing sound cues | 5 | Compressor in same room | 4 | SPL measurement at 1m | 2 | **40** | Remote compressor location, silenced line | 10 |

### CFMA Summary for V2

| Metric | Value |
|--------|-------|
| Total functions analyzed | 7 |
| Critical (SFD ≥ 80) | **1** — F4.1 r² validation (SFD = 160) |
| Important (SFD 40-79) | **4** — F1.4 torque drift, F3.1 ballistics, FR-1 force, FR-4 noise |
| Max SFD | **160** at F4.1 (sim-to-live correlation) |
| Max Rev-SFD after actions | **48** at F4.1 |

### Key Finding

**F4.1 (sim-to-live r² ≥ 0.75) has SFD = 160 — CRITICAL.** This is the highest-risk function in the entire concept. The combination of high severity (8 — product fails acceptance), moderate-high frequency (4 — insufficient data is likely), and high detection difficulty (5 — requires live-fire trial, can't detect in lab) makes this the #1 risk.

**Was this caught without CFMA?** YES — it appeared as R4 in the Risk Register (Doc 020) with Score = 6. But it was identified AFTER concept selection, not BEFORE. CFMA would have surfaced this DURING evaluation, potentially triggering:
1. A mitigation plan before committing to V2
2. An acceptance criterion adjustment (r² ≥ 0.60 initially, upgrade to 0.75 after calibration)
3. Scheduling the live-fire trial EARLIER in Phase 3

**Verdict:** HIGH value. CFMA catches the same risks as the risk register but EARLIER (during concept evaluation vs. after selection). The r² = 160 SFD would have triggered immediate CEO attention.

---

## Upgrade #2: DfX-Waste (helix-embody-realize)

**Test:** Does DfW-01 to DfW-05 reveal missed opportunities in Phase 3?

### Retrospective DfW for V2 Standard (Phase 3 Embodiment)

| Item | Check | Status | Finding |
|------|-------|--------|---------|
| DfW-01 | Exhaust air reusable? | **WARN** | Pneumatic recoil exhausts ~2L/shot at 10 bar. Currently routed through silencer (waste). Could be directed as tactile wind cue or used for cooling electronics. TRIZ #22 identified this in dry run. |
| DfW-02 | Waste heat reusable? | OK | GPU workstation generates heat. Current plan: standard ventilation. In tropical VN, this heat could pre-warm the recoil cylinder (consistent performance). Low priority. |
| DfW-03 | Vibration byproduct reusable? | OK | Recoil vibration IS the product (haptic feedback). No waste vibration — it's all useful. |
| DfW-04 | Data byproduct captured? | **WARN** | Pressure transducer captures recoil force-time curve (Data-First Design). But optical encoder data (traverse/elevation profiles) during training is NOT being captured for AI coaching. Data pipeline exists for scoring but not for movement pattern analysis. |
| DfW-05 | Noise byproduct useful? | OK | Compressor noise is isolated (remote location). Firing sound is simulated via 5.1 surround. No waste noise issue. |

### Assessment

**2 WARNs found:**
1. **DfW-01 (exhaust air)** — Already identified by TRIZ #22. DfW check confirms it systematically. Priority: consider for I-08 ACH variant.
2. **DfW-04 (data byproduct)** — **NEW FINDING.** The optical encoder data (how the gunner moves the weapon during training) is currently used only for real-time display positioning. It is NOT captured as a data stream for post-session analysis or AI coaching. This is a missed ACH opportunity:
   - Traverse/elevation movement patterns → marksmanship skill assessment
   - Trigger timing relative to target tracking → lead prediction capability
   - Mount resistance response → feel calibration feedback loop

**This single DfW check reveals a data pipeline gap that affects the entire ACH roadmap (I-08 variant).**

**Verdict:** HIGH value. DfW-04 finding (encoder data not captured for AI) is actionable and affects the ACH product variant strategy.

---

## Upgrade #4: I-Level in Portfolio (forge-portfolio)

### VN-12.7MM-SIM Innovation Assessment

| Product | Phase | Avg I-Level | Peak Level | Key TRIZ Principle | Moat Assessment |
|---------|-------|------------|------------|-------------------|-----------------|
| VN-12.7MM-SIM | P3 | 1.67 | L3 (Two-Channel) | #28 Mechanics sub., #1 Segmentation | **Differentiated** — Two-Channel + DShK weapon type + containerized = 3 uncontested spaces |

I-Level 1.67 > 1.5 threshold → concept has competitive differentiation. No flag needed.

**Verdict:** LOW immediate value for this product (already assessed in TRIZ dry run). Value is for PORTFOLIO-LEVEL visibility across all products.

---

## Upgrade #3: TRIZ Pattern Library (bridge-knowledge-base L1b)

**Test:** Would querying L1b at the START of Phase 2 have accelerated concept generation?

### Patterns Available Before VN-12.7MM-SIM Phase 2

At the time of VN-12.7MM-SIM Phase 2 (2026-01 to 2026-03), only VN-XUONG-UUV was ahead (Phase 2). Patterns:

| Pattern | From | Available? | Would Have Helped? |
|---------|------|-----------|-------------------|
| TP-003 #7 Nesting (cable drum in UUV) | VN-XUONG | YES | NO — different domain, not applicable |

**Only 1 pattern was available at the time.** L1b value compounds over time — by the time BB-01 enters Phase 2, there will be 6 patterns from VN-12.7MM-SIM + VN-XUONG + VN-AST.

**Verdict:** LOW value for this product (first-mover). HIGH value for future products (compound effect).

---

## Summary — Dry Run Results

| Upgrade | Would Have Caught | Timing Advantage | Value for VN-12.7MM-SIM |
|---------|------------------|-----------------|----------------------|
| #1 HOQ formalization | 3 missing criteria (C7-C9 had no ODI source) | Phase 1 → Phase 2 | MODERATE |
| #7 TVDT | 3 under-documented trade-offs (CO-001, F-005, TE-010) | Phase 1 (prevented Phase 2 surprises) | **HIGH** |
| #6 CFMA | r² validation = SFD 160 (critical), 4 important risks | During concept evaluation (vs. after selection) | **HIGH** |
| #2 DfW | Encoder data not captured for AI coaching (DfW-04) | Phase 3 (actionable now) | **HIGH** |
| #4 I-Level | Already known (1.67 avg, L3 peak) | Portfolio visibility | LOW |
| #3 TRIZ patterns | Only 1 pattern available at the time | Compounds over time | LOW (first-mover) |

### Three Laws from Dry Run

1. **CFMA Catches What Risk Registers Miss — In Time:** Both CFMA and Risk Register found r² validation as the top risk. But CFMA finds it DURING evaluation (influencing concept selection) while Risk Register finds it AFTER (too late to change concept).

2. **TVDT Prevents the "Wish-to-Subsystem Escalation":** F-005 started as a wish but became the most complex subsystem (Doc 022, 7 sub-functions). TVDT's implication analysis (● critical) would have flagged this escalation potential in Phase 1.

3. **DfW Reveals Hidden ACH Opportunities:** Every sensor producing data for one purpose (real-time display) has a second purpose (offline analytics). DfW-04 systematically checks this, preventing data evaporation.

### Actionable Output for Phase 3 (Current)

1. **DfW-04 ACTION:** Add encoder data capture pipeline to Phase 3 system architecture (Doc 015). Route traverse/elevation time-series to data storage alongside scoring data. Cost: ~$0 (software change, encoder already connected).

2. **CFMA F4.1 ACTION:** Verify r² validation plan (Doc 023) schedules live-fire trial early enough. Current plan: Month 8-9. If delayed → SFD remains at 48 (important).
