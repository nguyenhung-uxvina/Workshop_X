---
project: V-SMASH-M
phase: 4
type: cost-analysis
prompt: P35
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs:
  - V-SMASH-M_BOM_v1.0.md (P33 — 71 parts, $202/unit)
  - V-SMASH-M_Cost_Estimate_v1.0.md (Phase 3 — NRE $41K)
  - V-SMASH-M_Assembly_Sequence_v1.0.md (77 min/unit)
  - V-SMASH-M_Verification_Plan_v1.0.md (P34 — $27,250 qual cost)
---

# V-SMASH-M (Micro-Sight) — Cost Analysis (P35)

> **Purpose:** Bottom-up unit cost breakdown at target quantities (10/50/100/500), lifecycle cost estimate, import comparison, and cost reduction opportunities.
>
> **Cost target:** ≤70% of import equivalent. Kill threshold: >$600/unit at 500 qty.

---

## 1. Unit Cost Breakdown (at 500 units/year basis)

### 1.1 Material Cost

| Sub-Assembly | Material Cost | % of Material | Top Cost Driver |
|-------------|-------------|---------------|-----------------|
| SA-01 Sensor Module | $25.00 | 16.9% | VM-1200 CMOS sensor ($15) |
| SA-02 Compute Module | $45.00 | 30.4% | **VM-2101 Jetson Orin Nano ($40)** |
| SA-03 Display Module | $35.00 | 23.6% | VM-3101 OLED micro-display ($20) |
| SA-04 Main PCB Assembly | $20.00 | 13.5% | VM-4102 BLE module ($3.50) |
| SA-05 Housing Assembly | $12.00 | 8.1% | VM-5301 Optical bench ($15 — classified as material but mostly local CNC labor) |
| SA-06 Battery Pack | $8.00 | 5.4% | VM-6101 21700 cell ($6) × 2 incl. spare |
| ACC-01 Accessories | $3.00 | 2.0% | VM-7105 MOLLE pouch ($1.50) |
| **Material Subtotal** | **$148.00** | **100%** | |

**Top 5 cost drivers** (72% of material cost):

| Rank | Part | Cost | % of Material | Source |
|------|------|------|---------------|--------|
| 1 | VM-2101 Jetson Orin Nano | $40.00 | 27.0% | Import (US) |
| 2 | VM-3101 OLED micro-display | $20.00 | 13.5% | Import (CN) |
| 3 | VM-1200 CMOS sensor | $15.00 | 10.1% | Import |
| 4 | VM-5301 Optical bench | $15.00 | 10.1% | Mixed (import plate + local CNC) |
| 5 | VM-3102 Beam-splitter | $10.00 | 6.8% | Import (CN/JP) |

> **Observation:** 3 of top 5 cost drivers are Import semiconductor/optics with NO local alternative. VM-2101 alone is 27% of material cost and carries export control risk.

### 1.2 Labor Cost

| Assembly Step Group | Hours | Rate ($/hr) | Cost | Skill Level |
|---------------------|-------|-------------|------|-------------|
| SA-04 PCB SMT assembly | 0.50 | $10.00 | $5.00 | Technician (SMT operator) |
| SA-01 Sensor alignment (PR-05 jig) | 0.25 | $12.00 | $3.00 | Skilled tech |
| SA-03 Display alignment (PR-11 jig) | 0.33 | $12.00 | $4.00 | Skilled tech |
| SA-02 Compute module solder | 0.17 | $12.00 | $2.00 | Skilled tech (BGA) |
| SA-05 Housing sub-assy | 0.25 | $10.00 | $2.50 | Assembly operator |
| SA-06 Battery pack | 0.08 | $10.00 | $0.80 | Assembly operator |
| SA-05 Clamp sub-assy + torque | 0.17 | $10.00 | $1.70 | Assembly operator |
| Final assembly (Steps 14-23) | 0.67 | $10.00 | $6.70 | Assembly operator |
| Burn-in (24h, labor allocation) | 0.05 | $10.00 | $0.50 | Automated + spot check |
| EOL test (PR-10 jig) | 0.17 | $12.00 | $2.00 | Test tech |
| Bore-sight final (PR-11) | 0.17 | $12.00 | $2.00 | Skilled tech |
| Packaging + QC | 0.25 | $10.00 | $2.50 | Packer/QC |
| Accessories kit assembly | 0.08 | $10.00 | $0.80 | Packer |
| **Labor Subtotal** | **3.14 h** | — | **$33.50** | |

> **Effective labor rate:** $10.67/hr blended (Vietnamese manufacturing rate including benefits, ~240K VND/hr)

### 1.3 Overhead

| Category | Basis | % | Amount |
|----------|-------|---|--------|
| Factory overhead | % of labor | 30% | $10.05 |
| Engineering support (sustaining) | % of (material + labor) | 3% | $5.45 |
| Quality (incoming + in-process + final) | % of (material + labor) | 3% | $5.45 |
| **Overhead Subtotal** | | | **$20.95** |

### 1.4 Unit Cost Summary (500 units/year)

| Component | Amount | % of Unit |
|-----------|--------|-----------|
| Material | $148.00 | 73.1% |
| Labor | $33.50 | 16.5% |
| Overhead | $20.95 | 10.3% |
| **Unit Manufacturing Cost** | **$202.45** | **100%** |

> **Note:** BOM §3.2 shows $202.00 (rounded). Detailed calculation shows $202.45. Using $202 for consistency with BOM.

---

## 2. Quantity Sensitivity Analysis

### 2.1 Learning Curve Effect on Labor

Using **85% learning curve** (standard for electromechanical assembly with mixed manual/automated):

| Cumulative Units | Learning Factor | Labor/Unit | Material | Overhead | **Unit Cost** |
|-----------------|----------------|-----------|----------|----------|---------------|
| 1 (first article) | 1.00 | $33.50 | $148.00 | $20.95 | **$202** |
| 10 | 0.77 | $25.80 | $148.00 | $18.64 | **$192** |
| 50 | 0.62 | $20.77 | $145.00 | $17.13 | **$183** |
| 100 | 0.55 | $18.43 | $143.00 | $16.43 | **$178** |
| 500 | 0.44 | $14.74 | $138.00 | $15.33 | **$168** |
| 1,000 | 0.40 | $13.40 | $135.00 | $14.92 | **$163** |

**Material volume discounts** applied at scale:
- 50 units: -2% on commodity components (passive, fasteners)
- 100 units: -3.5% (add BLE module, flex cable volume)
- 500 units: -6.8% (add Jetson, OLED, sensor — tier pricing kicks in)
- 1,000 units: -8.8% (best negotiated prices across all imports)

### 2.2 Unit Cost vs Import Comparison

**Import equivalent:** SmartShooter SMASH 2000 Plus (Israeli) — $5,000–$8,000 per unit (estimated; exact price classified but ranges reported in defense trade press). Closest functional comparison: AI-assisted weapon sight with lead computation.

**Conservative import benchmark:** $5,000/unit (low end of range).

| Quantity | V-SMASH-M Unit Cost | Import Equiv. | V-M as % of Import | Target ≤70% | Status |
|---------|---------------------|--------------|---------------------|-------------|--------|
| 10 | $192 | $5,000 | **3.8%** | ✅ | Far below target |
| 50 | $183 | $5,000 | **3.7%** | ✅ | Far below target |
| 100 | $178 | $5,000 | **3.6%** | ✅ | Far below target |
| 500 | $168 | $5,000 | **3.4%** | ✅ | Far below target |

> **Import comparison result:** V-SMASH-M is **~96% cheaper** than the closest import equivalent at any production volume. Even if import price were $1,000 (aggressive estimate), V-SMASH-M would be at 17-20%. The 70% cost target is trivially met.
>
> **Kill threshold:** $600/unit → V-SMASH-M is at $168–$202 depending on volume. Well below kill threshold at all quantities. **PASS.**

---

## 3. Pricing Strategy

| Qty Tier | Unit Cost | Target Margin | Selling Price | Margin % |
|---------|-----------|--------------|---------------|----------|
| 10 (prototype) | $192 | Break-even + NRE | $500 | 62% (incl. NRE recovery) |
| 50 (pilot lot) | $183 | 50% | $400 | 54% |
| 100 (initial production) | $178 | 55% | $400 | 56% |
| 500 (annual steady-state) | $168 | 58% | $400 | 58% |
| 1,000+ (scaled) | $163 | 59% | $350 | 53% |

> **Recommended list price: $400** at 100+ qty. Provides 54-58% gross margin. Competitively positioned at <10% of import equivalent.

---

## 4. NRE Recovery

### 4.1 NRE Breakdown

| Category | Cost | Status |
|----------|------|--------|
| Injection molds (3×) | $9,000 | Estimate — local toolmaker |
| CNC fixtures | $2,000 | Estimate |
| PR-05 optical alignment jig | $2,000 | Estimate |
| PR-10 EOL test jig | $2,000 | Estimate |
| PR-11 OLED alignment jig | $2,000 | Estimate |
| PCB layout + prototypes (3×) | $5,000 | Estimate |
| Firmware development | $8,000 | 200 person-hours |
| YOLO model training | $3,000 | Dataset + GPU |
| **Subtotal NRE (development)** | **$41,000** | |
| Qualification testing (P34 Phase D) | $15,400 | Environmental lab |
| Field testing (P34 Phase E) | $6,600 | Drone sled + field range |
| Qualification samples (5 units) | $1,010 | 5 × $202 |
| Other verification (P34 Phase A–C) | $4,240 | Engineering + bench |
| **Subtotal Verification** | **$27,250** | |
| **Total NRE + Verification** | **$68,250** | |

### 4.2 NRE Break-Even

| Selling Price | Margin/Unit (at 500 qty) | NRE Break-Even | Cumulative Revenue at BE |
|--------------|-------------------------|----------------|-------------------------|
| $350 | $182 | 375 units | $131K |
| $400 | $232 | 294 units | $118K |
| $500 | $332 | 206 units | $103K |

> **At $400 selling price:** NRE fully recovered at **294 units** (~7 months at 500/year rate). Total investment returned within Year 1.

---

## 5. Lifecycle Cost (LCC) — 10-Year at 500 Units/Year

### 5.1 Assumptions

| Parameter | Value | Basis |
|-----------|-------|-------|
| Service life per unit | 5 years | MIL-STD-810H environmental life for handheld electronics |
| Spares rate | 10% of fleet/year | Battery (annual) + optics (5-year) |
| Maintenance labor | 1 depot visit per unit per year | MTBF 1,500h ÷ ~300h/year use = 1 failure in 5 years + preventive |
| Depot repair cost | $30/visit | 2 hours × $12/hr + $6 spares |
| Training cost | $10/unit at fielding | 2h × $5/trainee (amortized over 10 trainees per session) |
| Firmware updates | $2/unit/year | Depot labor for annual update |
| Disposal | $5/unit | E-waste recycling (Li-ion recovery) |
| Inflation | 3%/year | Vietnamese CPI estimate |

### 5.2 LCC Table

| Year | Units Produced | Unit Cost | Production Cost | Spares (10%) | Maintenance | Training | FW Update | Total Year |
|------|---------------|-----------|----------------|-------------|-------------|----------|-----------|------------|
| 1 | 500 | $168 | $84,000 | $4,200 | $7,500 | $5,000 | $1,000 | **$101,700** |
| 2 | 500 | $165 | $82,500 | $8,700 | $15,000 | $5,000 | $2,000 | **$113,200** |
| 3 | 500 | $162 | $81,000 | $13,500 | $22,500 | $5,000 | $3,000 | **$125,000** |
| 4 | 500 | $160 | $80,000 | $18,600 | $30,000 | $5,000 | $4,000 | **$137,600** |
| 5 | 500 | $158 | $79,000 | $24,000 | $37,500 | $5,000 | $5,000 | **$150,500** |
| 6 | 500 | $156 | $78,000 | $24,000 | $37,500 | $5,000 | $5,000 | **$149,500** |
| 7 | 500 | $154 | $77,000 | $24,000 | $37,500 | $5,000 | $5,000 | **$148,500** |
| 8 | 500 | $152 | $76,000 | $24,000 | $37,500 | $5,000 | $5,000 | **$147,500** |
| 9 | 500 | $150 | $75,000 | $24,000 | $37,500 | $5,000 | $5,000 | **$146,500** |
| 10 | 500 | $148 | $74,000 | $24,000 | $37,500 | $5,000 | $5,000 | **$145,500** |
| Disposal (5,000 units) | — | — | — | — | — | — | — | **$25,000** |
| **NRE (Year 0)** | — | — | — | — | — | — | — | **$68,250** |
| **LCC TOTAL** | **5,000** | — | **$786,500** | **$189,000** | **$300,000** | **$50,000** | **$40,000** | **$1,458,750** |

### 5.3 LCC Summary

| Metric | Value |
|--------|-------|
| Total LCC (10 years, 5,000 units) | **$1,458,750** |
| LCC per unit | **$291.75** |
| LCC per unit per year (5-year service life) | **$58.35** |
| Production cost as % of LCC | 53.9% |
| Support cost as % of LCC | 39.7% |
| NRE as % of LCC | 4.7% |
| Disposal as % of LCC | 1.7% |

### 5.4 LCC vs Import

| Metric | V-SMASH-M | Import (SMASH 2000) | Advantage |
|--------|-----------|---------------------|-----------|
| Acquisition cost (5,000 units) | $854,750 | $25,000,000 | **$24.1M savings** |
| 10-year LCC | $1,458,750 | ~$35,000,000 est. | **$33.5M savings** |
| LCC per unit | $292 | ~$7,000 est. | **96% lower** |

> **Import spares/maintenance estimated at 20% of acquisition/year** (typical for imported defense equipment with foreign depot dependency, long lead times, and FX risk).

---

## 6. Local Content Economics

### 6.1 Current State

| Metric | Value |
|--------|-------|
| Local content (incl. labor) | 50.6% ($93.18 / $184.00) |
| Target | ≥60% |
| Gap | 9.4 percentage points |

### 6.2 Mitigation Path to 60%+

| # | Action | Local Value Added | New L% | Cost Impact | Risk |
|---|--------|------------------|--------|-------------|------|
| M1 | Local passive component sourcing | +$4.00 | 52.8% | $0/unit | LOW — direct substitution |
| M2 | Local Li-ion cell (VinES Grade A) | +$6.00 | 56.1% | +$1/unit (VinES premium) | MEDIUM — Grade A qual needed |
| M3 | Local optical sub-assy vendor | +$8.00 | 60.4% | +$2/unit (learning curve) | **HIGH — coating qual critical** |
| M4 | Local FPC fabrication | +$4.00 | 62.6% | $0/unit | LOW — Bac Ninh FPC available |
| **All M1-M4** | | **+$22.00** | **62.6%** | **+$3/unit** | |

**Cost of reaching 60% local content: +$3/unit** ($202 → $205). Unit cost increase is marginal. M3 (optical vendor) is the critical path.

---

## 7. Cost Reduction Opportunities

| Rank | Opportunity | Saving/Unit | Trigger | Feasibility |
|------|------------|-------------|---------|-------------|
| 1 | **Alternative SoC (Hailo-8 or RK3588)** | -$10 to -$20 | EAR blocks Jetson OR Jetson price increases | MEDIUM — firmware rewrite needed |
| 2 | **OLED volume pricing at 1,000+ units** | -$5 | Commit to annual purchase volume | HIGH — standard volume negotiation |
| 3 | **PCB panel optimization (2-up)** | -$1.50 | Second product using same PCB form factor | HIGH — design-for-panel at next rev |
| 4 | **Housing mold: 2-cavity** | -$0.80 | Annual volume >1,000 units | MEDIUM — $6K additional tooling |
| 5 | **Optical bench: investment casting** | -$3.00 | Annual volume >2,000 units | LOW — requires new vendor |

**Total potential cost reduction at 1,000+ units:** -$15 to -$25/unit ($177 → $163 range).

---

## 8. Financial Summary

| Metric | Value |
|--------|-------|
| **Unit manufacturing cost (500 qty)** | **$168** |
| **Unit manufacturing cost (100 qty)** | **$178** |
| **Recommended selling price** | **$400** |
| **Gross margin (at 500 qty)** | **58%** |
| **NRE + Verification total** | **$68,250** |
| **NRE break-even (at $400 price)** | **294 units** |
| **10-year LCC per unit** | **$292** |
| **vs Import cost target (≤70%)** | **3.4%** ✅ |
| **vs Kill threshold ($600)** | **$168** ✅ |
| **Local content (current)** | **50.6%** ⚠ |
| **Local content (with M1-M4)** | **62.6% at +$3/unit** |

---

## HITL CHECKPOINT

> **P35 Cost Analysis complete.**
>
> **Key findings:**
> 1. Unit cost at 500 qty: **$168** — 3.4% of import equivalent (trivially meets ≤70% target)
> 2. Gross margin at $400 selling price: **58%** — strong business case
> 3. NRE fully recovered at **294 units** (~7 months of production)
> 4. Local content: **50.6% current → 62.6% with M1-M4** — achievable at +$3/unit
> 5. 10-year LCC: **$292/unit** vs ~$7,000/unit import — **96% cost advantage**
>
> **Flags:**
> - VM-2101 (Jetson) = 27% of material cost + export control risk → single biggest cost AND risk item
> - Local content requires M3 (optical vendor qualification) which is HIGH risk
>
> **Decision required:**
>
> A) ✅ APPROVE — cost analysis accepted, proceed to P57 Phase 4 Gate Review
> B) 🔄 REVISE — specify changes
> C) ⏸️ PAUSE
> D) ❌ CANCEL

*Cost analysis prepared by: KN Nguyen (AI-assisted, Claude Opus 4.6)*
