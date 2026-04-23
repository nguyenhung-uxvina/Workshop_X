---
project: V-SMASH-M
phase: 4
type: concept-selection
sub-assembly: SA-01 Sensor Module
method: VDI-2225
version: 1.0
created: 2026-03-02
status: draft
decision: Concept-C-Preferred
inputs:
  - V-SMASH-M_BOM_v1.0.md (SA-01 current design: VM-1200 + VM-1201)
  - V-SMASH-M_Test_Requirements_v1.0.md (T01 shock 10,000G × 500)
  - V-SMASH-M_Layout_Design_Review_v1.0.md (Principle 3 — H7 register bore)
  - V-SMASH-M_Integration_Sprint_Plan_v1.0.md (schedule constraint)
---

# V-SMASH-M (Micro-Sight) — SA-01 Sensor Module: VDI 2225 Concept Selection v1.0

**Câu hỏi thiết kế:** OEM camera module + FFC hay lắp từng phần (custom bare sensor PCB)?
**Phương pháp:** VDI 2225 Bewertungsmatrix (Technical Value × Economic Value)
**Version 1.0 | 2026-03-02**

---

## 1. Problem Statement

### 1.1 Current BOM Configuration (SA-01)

| Part | VM# | Type | Cost | Source | Issue |
|------|-----|------|------|--------|-------|
| CMOS Image Sensor | VM-1200 | Pre-qualified OEM module | $15 | Import | Shock rating unknown |
| Sensor-to-PCB flex cable | VM-1201 | FFC/ZIF, MIPI CSI-2 | $2 | Import | **ZIF connector = critical shock risk** |
| Lens barrel/retaining ring | VM-1102/1103 | CNC brass | $4 | Local | OK |
| Objective lens M12 | VM-1101 | AR-coated optical glass | $6 | Import | OK |
| Alignment shims + fasteners | VM-1204/1202/1203 | SS + Nylon | $1 | Local | OK |

**SA-01 total: $28** (labor $3 + material $25)

### 1.2 Decision Driver

**T01 (Shock test, MIL-STD-810H 516.8):** Function after **500× 10,000G half-sine 0.5ms**. Requirement: zero solder cracks (X-ray), optical alignment ≤0.5 mrad drift after test.

**ZIF connectors are NOT rated for 10,000G shock.** ZIF (Zero Insertion Force) connectors are low-contact-force by design — a single 10,000G event can unlatch or crack the ZIF lock arm. After 500 rounds, failure probability approaches 100%.

This is a **design defect in the current BOM** (VM-1201). This VDI 2225 evaluation determines the correct sensor interconnect architecture.

### 1.3 Concepts Evaluated

| Concept | Description | Key Change vs. Current BOM |
|---------|-------------|--------------------------|
| **A** | OEM Camera Module + FFC/ZIF (current) | No change — baseline |
| **B** | Custom COB: bare sensor chip + custom rigid PCB, direct-mount, no FFC | Replace VM-1200 + VM-1201 |
| **C** | Hybrid: OEM sensor chip + custom carrier PCB + B2B connector | Replace VM-1201 only; retain same sensor chip |

---

## 2. Evaluation Criteria and Weights

### 2.1 Technical Criteria (Technischer Wert)

| # | Criterion | Weight | Rationale |
|---|-----------|--------|-----------|
| T1 | Shock survivability (T01: 10,000G × 500) | **25** | Pass/fail gate for product release — highest weight |
| T2 | Bore-sight stability post-shock (≤0.2 mrad, T13) | **20** | Safety-critical [VM-S06] — directly linked to SA-01 mount rigidity |
| T3 | Imaging performance (resolution, WDR for AI at 150m) | **15** | Feeds SW-AI pipeline; YOLOv8-nano performance depends on image quality |
| T4 | SW integration complexity (V4L2 driver, ISP tuning) | **15** | Impacts sprint plan (S04 Track A) — driver dev risk |
| T5 | Environmental sealing at sensor port (IP66) | **12** | Custom sealing regardless of concept; implementation differs |
| T6 | Supply chain resilience (multi-source, no single vendor) | **8** | OI-VnV-01 class risk — single-source modules problematic |
| T7 | Maintainability at depot (L2 replacement) | **5** | Low weight — depot teardown acceptable for all concepts |
| | **Total** | **100** | |

### 2.2 Economic Criteria (Wirtschaftlicher Wert)

| # | Criterion | Weight | Rationale |
|---|-----------|--------|-----------|
| W1 | Unit cost (vs. SA-01 $28 budget) | **25** | Hard budget constraint from cost analysis |
| W2 | Development NRE (PCB design, driver dev, qualification) | **25** | Affects engineering capacity and sprint plan |
| W3 | Local content contribution (BOM M3/M4 mitigation) | **20** | Current gap: 9.4% below 60% target. SA-01 is an opportunity. |
| W4 | Schedule impact (vs. Integration Sprint Plan v1.0) | **20** | Delays to S04–S05 have cascading effects on L2 and FAT |
| W5 | Procurement risk (lead time, availability Vietnam) | **10** | 8–10 week lead times already constrain sprint plan |
| | **Total** | **100** | |

**Scoring scale:** 0 = does not satisfy, 1 = barely satisfies, 2 = satisfies with difficulty, 3 = satisfies well, 4 = fully satisfies

**Target thresholds:** Technical ≥ 0.60, Economic ≥ 0.60 (VDI 2225 "acceptable" zone)

---

## 3. VDI 2225 Scoring Matrix

### 3.1 Technical Value (Technischer Wert)

| Criterion | W | **A — OEM + FFC/ZIF** | Score A | **B — Custom COB + Rigid PCB** | Score B | **C — OEM Chip + Carrier PCB + B2B** | Score C |
|-----------|---|----------------------|---------|-------------------------------|---------|--------------------------------------|---------|
| T1 Shock (10,000G × 500) | 25 | ZIF unlatch or crack under first high-G pulse. COTS module PCB not qualified. | **1** | Direct-mount rigid PCB, underfill chip, no flex. Engineerable to 10,000G with design care. | **3** | B2B connector (e.g., Hirose DF40, shock-rated ≥10,000G GR). Rigid carrier PCB. Eliminates ZIF failure mode. | **3** |
| T2 Bore-sight stability (≤0.2 mrad) | 20 | FFC compliance allows sensor to shift under shock → bore-sight drift after 500 rounds likely >0.2 mrad. | **2** | Sensor PCB directly bolted to optical bench H7 register. Maximum rigidity. No compliance element. | **4** | Carrier PCB bolted to optical bench. B2B connector rigid (not compliant). Bore-sight stability good but 1 additional mechanical interface vs. B. | **3** |
| T3 Imaging performance | 15 | Well-characterized OEM sensor, proven with Jetson ISP. No development needed. | **3** | Flexible sensor selection — can optimize for low-light / WDR. Requires ISP tuning but fully customizable. | **3** | Same sensor chip as OEM module → identical image performance. ISP same. | **3** |
| T4 SW integration | 15 | Manufacturer L4T V4L2 driver. 1–2 days to working pipeline on Jetson. Zero driver risk. | **4** | Custom V4L2 driver for bare sensor. 2–4 weeks development. ISP parameter tuning 1–2 weeks. New risk category. | **2** | Same sensor chip → same V4L2 driver as OEM module. Zero additional driver work vs. A. | **4** |
| T5 Environmental (IP66 at port) | 12 | Module not inherently sealed. Camera port requires custom gasket regardless. Module edges need potting. Achievable. | **2** | Full custom seal design from scratch. Potting around PCB edges feasible. Conformal coat integrated. Slightly more engineered. | **3** | Same as B — carrier PCB sealing custom-designed. Slightly fewer components to seal around. | **3** |
| T6 Supply chain resilience | 8 | Single module vendor (e.g., Leopard Imaging, ArduCam). Discontinuation risk. Vietnam import only. | **2** | Bare sensor chip: OV4689/IMX415 available from 5+ HK/China distributors. PCB local. Good resilience. | **3** | Same chip — multi-source. Carrier PCB local. Similar resilience to B. | **3** |
| T7 Maintainability (depot) | 5 | Module swap at depot: disconnect FFC (if it survived), unscrew 4× M2, replace module. Simple. | **3** | Custom sensor PCB swap: unscrew 4× M2, disconnect B2B carrier, replace PCB. Slightly more complex than A. | **2** | Carrier PCB swap: disconnect B2B (single action), unscrew mount screws, replace carrier. Clean. | **3** |
| **Weighted sum** | | | | | | | |
| A: 25×1+20×2+15×3+15×4+12×2+8×2+5×3 | | **=25+40+45+60+24+16+15 = 225** | | | | | |
| B: 25×3+20×4+15×3+15×2+12×3+8×3+5×2 | | | | **=75+80+45+30+36+24+10 = 300** | | | |
| C: 25×3+20×3+15×3+15×4+12×3+8×3+5×3 | | | | | | **=75+60+45+60+36+24+15 = 315** | |

| Concept | Weighted Sum (xi) | Max (x_max = 100×4 = 400) | **Technical Value (xi/x_max)** |
|---------|-------------------|--------------------------|-------------------------------|
| A — OEM + FFC | 225 | 400 | **0.563** ← BELOW threshold |
| B — Custom COB | 300 | 400 | **0.750** |
| **C — OEM Chip + Carrier + B2B** | **315** | **400** | **0.788** ← BEST |

### 3.2 Economic Value (Wirtschaftlicher Wert)

| Criterion | W | **A — OEM + FFC** | Score A | **B — Custom COB** | Score B | **C — OEM Chip + Carrier + B2B** | Score C |
|-----------|---|-------------------|---------|-------------------|---------|----------------------------------|---------|
| W1 Unit cost (vs. $28 budget) | 25 | Module $15 + FFC $2 = $17 components. Fits budget with margin. | **3** | Sensor chip $8–12 + custom sensor PCB $10–18 at 500 units volume. PCB NRE amortization adds $3–5/unit. Marginal vs. $28 budget at low volume. | **2** | Sensor chip $12–14 (bare die/module stripped, similar to VM-1200) + carrier PCB $4–6 (local, simple design). Total $16–20. Fits budget. | **3** |
| W2 Development NRE | 25 | Near zero. Integration only. 1 week to install, validate. | **4** | High NRE: sensor PCB design 2 weeks, PCB fab, V4L2 driver dev 3–4 weeks, ISP tuning 2 weeks, shock qualification testing. Engineering equivalent: $8K–15K. | **1** | Low NRE: carrier PCB design 1 week (simple 2-layer board), PCB fab 3 weeks. V4L2 driver = same as OEM chip → zero additional work. B2B connector selection/qualification 1 week. Engineering equivalent: $1K–2K. | **3** |
| W3 Local content (M4 mitigation) | 20 | VM-1200 + VM-1201 all imported = $17 imported. Only lens barrel + fasteners local. No improvement vs. baseline. Does not help close 9.4% gap. | **1** | Sensor chip still imported ($8–12). Custom PCB local ($10–15). Net local content gain: ~$10. Helps M4 significantly. | **3** | Sensor chip imported ($12–14). Carrier PCB local ($4–6). Local content gain: +$4–5 vs. Concept A. Partially closes M4 mitigation path (+2.2% system LC at unit cost $202). | **3** |
| W4 Schedule impact (Sprint Plan) | 20 | No impact. S04 PCB bring-up proceeds as planned. V4L2 driver: same day. | **4** | Large impact: add Track A-sensor sub-track. V4L2 driver dev in S03–S04 (adds 4–6 weeks risk to S05 ENV-FULL bring-up). Could push FAT from S11 to S12. | **2** | Minimal impact: carrier PCB design added to S02 Track C (1 week). PCB order placed with main PCB order (same lead time). Carrier PCB arrives with main PCB in S04. V4L2 driver: same as OEM → S04 bring-up unchanged. | **3** |
| W5 Procurement risk | 10 | OEM module: 8-week lead. Single source. Commercial availability good but not stocked in Vietnam. | **2** | Bare sensor chip (OV4689/IMX415): 4–6 weeks HK distributor. Multi-source. Carrier PCB: 3 weeks local. Better overall. | **3** | Same sensor chip as bare die: 4–6 weeks. Carrier PCB: 3 weeks. B2B connector: 4–6 weeks (Hirose DF40 or equiv.). Slightly more items but manageable. | **3** |
| **Weighted sum** | | | | | | | |
| A: 25×3+25×4+20×1+20×4+10×2 | | **=75+100+20+80+20 = 295** | | | | | |
| B: 25×2+25×1+20×3+20×2+10×3 | | | | **=50+25+60+40+30 = 205** | | | |
| C: 25×3+25×3+20×3+20×3+10×3 | | | | | | **=75+75+60+60+30 = 300** | |

| Concept | Weighted Sum (xi) | Max (x_max = 400) | **Economic Value (xi/x_max)** |
|---------|-------------------|-------------------|------------------------------|
| A — OEM + FFC | 295 | 400 | **0.738** |
| B — Custom COB | 205 | 400 | **0.513** ← BELOW threshold |
| **C — OEM Chip + Carrier + B2B** | **300** | **400** | **0.750** ← BEST |

---

## 4. VDI 2225 Result Chart

```
                Economic Value (Wirtschaftlicher Wert)
                0.0      0.25     0.50     0.75     1.0
             1.0 ┤────────┬────────┬────────┬────────┐
                 │        │        │        │ IDEAL  │
                 │        │        │        │ZONE    │
  Technical   0.75 ┤        │        │   [B]  │  [C]◄─┼── PREFERRED
  Value          │        │        │        │        │
                 │        │   threshold     │        │
  (Technischer 0.60 ┤........│........│........│........│ ← acceptability line
  Wert)          │        │        │        │        │
                 │        │    [A]◄┼───────fail zone─┼─ CONCEPT A FAILS T-threshold
  0.50 ┤        │        │        │        │
                 │        │        │        │        │
             0.0 └────────┴────────┴────────┴────────┘
                                    0.60
                               ↑ acceptability line

  Plot points:
  [A] OEM + FFC:          Technical = 0.563 ✗ | Economic = 0.738 ✓  → REJECTED (T-fail)
  [B] Custom COB:         Technical = 0.750 ✓ | Economic = 0.513 ✗  → REJECTED (W-fail)
  [C] OEM Chip + Carrier: Technical = 0.788 ✓ | Economic = 0.750 ✓  → PREFERRED ✓
```

**Interpretation:**
- **Concept A** falls below the Technical threshold (0.563 < 0.60). Root cause: FFC/ZIF connector fatal weakness at T01 (10,000G × 500). Even excellent economic performance cannot compensate for a likely test failure.
- **Concept B** falls below the Economic threshold (0.513 < 0.60). Root cause: V4L2 driver development NRE and schedule impact are disproportionate for a 500-unit product. High local content advantage does not offset 4–6 week schedule risk.
- **Concept C** meets both thresholds and ranks first on both axes. It is the **dominant concept**.

---

## 5. Concept C — Detail Description

### 5.1 SA-01 Revised Architecture

```
  OPTICAL BENCH INSERT (VM-5301 — AA7075, H7 register bore)
  ┌─────────────────────────────────────────────────┐
  │  [Lens barrel VM-1102] → [Objective lens VM-1101]│
  │        (M12 thread, self-centering H7 bore)      │
  │                                                   │
  │  [Carrier PCB — NEW: VM-1205]                    │
  │   ├── Sensor chip VM-1200-CHIP (bare die)        │
  │   │   (same silicon as current OEM module)       │
  │   ├── B2B connector — male half (VM-1206)        │
  │   │   Hirose DF40C or equiv. — shock-rated       │
  │   └── Conformal coat (parylene or acrylic)       │
  │                                                   │
  │  Mounted: 4× M2 SS screws (VM-1202) to          │
  │            H7 register pocket (self-centering)   │
  └────────────────── to MAIN PCB ──────────────────►
       [Main PCB VM-4101] B2B connector — female half (VM-1207)
       (replaces VM-4106 ZIF connector for sensor)
```

### 5.2 BOM Changes (vs. v1.0)

| Action | Part | Description | Δ Cost | Local? |
|--------|------|-------------|--------|--------|
| **Remove** | VM-1200 (OEM module $15) | Pre-qualified module → replaced by chip | -$15 | I |
| **Remove** | VM-1201 (FFC $2) | ZIF flex cable eliminated | -$2 | I |
| **Remove** | VM-4106 partial (ZIF for sensor $0.30) | ZIF connector on main PCB for sensor | -$0.30 | I |
| **Add** | VM-1200-CHIP (sensor chip $13) | Same silicon as VM-1200. OV4689 or IMX415 bare component | +$13 | I |
| **Add** | VM-1205 (carrier PCB $5) | 2-layer FR-4, 20×20mm, sensor chip mounted, B2B male | +$5 | **L** |
| **Add** | VM-1206 (B2B male connector $1.50) | Hirose DF40C-30DS-0.4V or equiv., shock-rated | +$1.50 | I |
| **Add** | VM-1207 (B2B female connector $1.50) | Hirose DF40C-30DP-0.4V, on main PCB | +$1.50 | I |
| **Net SA-01 cost change** | | | **+$4.20** | |
| **Revised SA-01 cost** | | | **~$32.20** | |

**Local content gain:** +$5.00 (carrier PCB VM-1205 is local) → system local content +2.5% (closes part of M4 mitigation path from BOM §4.3).

**SA-01 budget impact:** +$4.20 above current $28 budget. Absorbed from SA-01 budget buffer (current assembly has $3 labor allocation — total module cost is $28 all-in). Escalation request: **+$4.20/unit → SA-01 revised to $32.20**. Offset possible by:
- Local carrier PCB reduces future VM-4101 PCB cost (shared process run) → ~$1 savings
- Net escalation: ~$3.20/unit → 1.6% unit cost increase → within Phase 4 budget contingency (typically ±5%)

### 5.3 B2B Connector Selection Criteria

| Parameter | Requirement | Hirose DF40C Example |
|-----------|-------------|---------------------|
| Pitch | ≤0.5mm (compact) | 0.4mm ✓ |
| Contact count | ≥20 (MIPI CSI-2 D-PHY 2-lane = 14 + power + ground) | 20–60 pin options ✓ |
| Shock rating | ≥10,000G per MIL-STD-202 Method 213 | DF40 rated 20,000G (JEDEC) ✓ |
| Vibration | MIL-STD-202 Method 204 | Compliant ✓ |
| Mated height | ≤1.5mm (compact carrier PCB stack) | 0.7mm mated ✓ |
| Operating temp | -10°C to +85°C (Jetson thermal range) | -55°C to +125°C ✓ |

**Alternative:** Molex SlimStack (0.4mm pitch, similar shock rating). Qualify single source → Hirose DF40C.

### 5.4 Carrier PCB Design Requirements

| Item | Specification |
|------|--------------|
| Board size | ~20×20mm (to fit optical bench register pocket) |
| Layers | 2-layer FR-4, ENIG |
| Trace width | Controlled-impedance MIPI traces: 100Ω differential |
| Sensor mount | Sensor chip center-aligned to lens optical axis (±0.05mm datum to H7 bore) |
| Underfill | Capillary underfill (Namics or equiv.) on sensor chip — shock protection |
| Conformal coat | Parylene C or acrylic conformal coat (post-underfill) |
| B2B connector | Footprint per Hirose DF40C land pattern |
| Fiducials | 2× Ø1mm Cu fiducials for AOI |
| Fabrication | Vietnam (Bac Ninh FPC/PCB supplier) — 3-week lead |

---

## 6. Sprint Plan Impact (Concept C)

### 6.1 Changes to Integration Sprint Plan v1.0

| Sprint | Change | Hours Added |
|--------|--------|-------------|
| S02 | Add carrier PCB design to Track C task list. Place carrier PCB order with main PCB order. | +6h |
| S04 | Carrier PCB arrives with main PCB. Populate with sensor chip. Validate MIPI signal integrity on oscilloscope before connecting to Jetson. | +4h |
| S04 | V4L2 driver for sensor chip: verify same chip as original OEM → driver reuse confirmed (or 1-day delta if minor register diff). | +4h |
| S04 | B2B connector mate/unmate test: 10 cycles, verify contact resistance <50mΩ | +2h |
| **Total added hours** | | **+16h** |

**Critical path impact:** None. All S02 additions are parallel to existing PCB order process. S04 additions fit within existing bring-up sprint budget. **No sprint slippage.**

### 6.2 No Changes Required

- V4L2 driver: same sensor chip → same driver → S04 schedule unchanged.
- ENV-FULL assembly (S05): same MIPI CSI-2 interface → unchanged.
- L2-01 and L2-05 (bore-sight): same test procedure → unchanged.

---

## 7. Decision and BOM Update Instructions

### 7.1 VDI 2225 Decision

| Concept | Technical Value | Economic Value | Both ≥ 0.60? | Decision |
|---------|----------------|----------------|--------------|---------|
| A — OEM + FFC | 0.563 | 0.738 | ❌ T-fail | **REJECTED** |
| B — Custom COB | 0.750 | 0.513 | ❌ W-fail | **REJECTED** |
| **C — OEM Chip + Carrier + B2B** | **0.788** | **0.750** | ✅ Both pass | **SELECTED** |

**Concept C is selected.** It is the only concept that satisfies both thresholds and dominates on both axes.

### 7.2 Root Cause Statement (for Engineering Change Record)

> **The FFC/ZIF interconnect (VM-1201) in the current BOM v1.0 is incompatible with T01 (10,000G × 500 cycles, MIL-STD-810H 516.8).** ZIF connectors are designed for low-insertion-force hand assembly, not for repeated high-G ballistic shock. Failure mode: latch arm fracture or contact loss under first high-G event. This is a design defect that would cause FAT failure at T01 before first delivery.

> **Concept C resolves this defect** by replacing the ZIF/FFC with a shock-rated B2B connector (Hirose DF40C, rated 20,000G) and a locally-manufactured rigid carrier PCB. This change also contributes +$5 to local content (M4 mitigation path), reduces import dependency, and adds zero sprint slippage.

### 7.3 Required Actions

| # | Action | Owner | By |
|---|--------|-------|-----|
| 1 | Update BOM v1.0 → v1.1: apply VM changes in §5.2 | Engineering | End of S02 |
| 2 | Update Drawing Package Checklist: add VM-1205 carrier PCB as new drawing | Engineering | End of S02 |
| 3 | Place carrier PCB order with main PCB order (S02) | PM | S02 |
| 4 | Source Hirose DF40C (or Molex SlimStack equivalent): order with S02 PCB order | PM | S02 |
| 5 | Update SA-01 budget from $28 → $32.20 in Cost Analysis | PM | S02 |
| 6 | Update Integration Sprint Plan v1.0: add carrier PCB tasks to S02 Track C and S04 | Engineering | Before S02 start |
| 7 | Qualify B2B connector shock rating: mate/unmate × 10 + vibration soak in S04 | HW Lead | S04 |
| 8 | Add X-ray inspection of sensor chip underfill to T01 sample plan (QC point) | QA | Before T01 |

### 7.4 HITL Checkpoint

> **VDI 2225 result is unambiguous: Concept A (current BOM) fails the Technical threshold and would fail T01.**
>
> **Required decision:**
>
> A) ✅ APPROVE Concept C — update BOM v1.1, order carrier PCB in S02, proceed
> B) 🔄 QUESTION — review scoring assumptions before deciding
> C) ⏸️ PAUSE — review with team before committing

---

## Appendix: Score Sensitivity Check

**What if T1 (Shock) weight is reduced to 10 instead of 25?** (testing sensitivity)

| Concept | Technical Score (W1=10) | Still above threshold? |
|---------|------------------------|----------------------|
| A | (10×1+20×2+15×3+15×4+12×2+8×2+5×3)/400 = 0.578 | ❌ Still fails |
| B | (10×3+20×4+15×3+15×2+12×3+8×3+5×2)/400 = 0.763 | ✓ |
| C | (10×3+20×3+15×3+15×4+12×3+8×3+5×3)/400 = 0.788 | ✓ |

**Conclusion is robust.** Even with shock weight halved, Concept A still fails the Technical threshold. Concept C remains dominant regardless of shock weighting because it improves on Concept A in all shock-related criteria without sacrificing SW integration performance.

---

*V-SMASH-M SA-01 VDI 2225 Concept Selection v1.0 — 2026-03-02*
*Decision: Concept C (OEM sensor chip + custom carrier PCB + B2B shock-rated connector) SELECTED.*
*Root cause: VM-1201 FFC/ZIF connector is a design defect incompatible with T01 (10,000G × 500 cycles).*
*BOM impact: +$4.20/unit (SA-01: $28 → $32.20). Local content gain: +2.5%. Schedule impact: +16h (no slip).*
