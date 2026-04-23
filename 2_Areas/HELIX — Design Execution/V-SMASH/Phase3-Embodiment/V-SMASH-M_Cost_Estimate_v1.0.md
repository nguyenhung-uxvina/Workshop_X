---
project: V-SMASH-M
phase: 3
type: cost-estimate
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Material_Selection_v1.0.md]
---

# V-SMASH-M (Micro-Sight) — Cost Estimate (Development + Production)

> **Purpose:** Detailed NRE (development) and unit production cost breakdown. Extracted from P27 Gate Review §B for standalone traceability.

---

## 1. Development Costs (NRE)

| Item | Est. Cost | Notes |
|------|-----------|-------|
| Injection mold (housing top + bottom + battery door) | $9,000 | 3 single-cavity molds × ~$3K each (Vietnam toolmaker) |
| CNC fixtures (clamp, optical bench) | $2,000 | Programming + fixturing for 2 parts |
| PR-05 optical alignment jig | $2,000 | Custom jig for lens-to-sensor alignment |
| PR-10 EOL test jig | $2,000 | Functional test fixture |
| PR-11 OLED alignment jig | $2,000 | Bore-sight alignment fixture |
| PCB layout + prototype (3 iterations) | $5,000 | Schematic, layout, 3× prototype builds |
| Firmware development (YOLO, thermal mgmt, BLE) | $8,000 | ~200 person-hours at internal rate |
| YOLO model training (dataset + compute) | $3,000 | Drone/bird dataset, cloud GPU training |
| Qualification testing (MIL-STD-810H subset) | $5,000 | Shock, vibration, thermal, IP67 at external lab |
| EMC testing (IEC 61000-4-3, CISPR 32) | $3,000 | External EMC lab |
| **Total NRE** | **$41,000** | |

---

## 2. Unit Production Cost (at 500 units/year)

| Sub-Assembly | Material | Labor | Total |
|-------------|----------|-------|-------|
| SA-01: Sensor Module | $25 (import) | $3 (alignment) | $28 |
| SA-02: Compute Module | $45 (import) | $2 (solder) | $47 |
| SA-03: Display Module | $35 (import+local) | $4 (alignment) | $39 |
| SA-04: Main PCB | $20 (components) | $5 (SMT+test) | $25 |
| SA-05: Housing Assembly | $12 (mold+CNC) | $5 (assembly) | $17 |
| SA-06: Battery Pack | $8 (import+local) | $1 | $9 |
| ACC-01: Accessories | $3 | $1 | $4 |
| Final assembly + test | — | $10 | $10 |
| Packaging + QC | — | $5 | $5 |
| **Unit total** | **$148** | **$36** | **$184** |
| Overhead + margin (10%) | | | $18 |
| **Factory gate price** | | | **$202** |

---

## 3. Compliance Checks

| Check | Target | Actual | Status |
|-------|--------|--------|--------|
| VM-C01 unit cost | ≤$500 | $202 | ✅ 40% of target |
| Local content (VM-C02) | ≥60% | 45.8% baseline → 62.6% with mitigations | ⚠ Conditional |

---

## 4. Break-Even Analysis

| Selling Price | Margin/Unit | Break-Even (NRE $41K) |
|--------------|-------------|----------------------|
| $300 | $98 | ~419 units |
| $400 | $198 | ~207 units |
| $500 | $298 | ~138 units |

---

## 5. Cost Growth from Phase 3 Design Changes

| Change | Source | Cost Impact |
|--------|--------|------------|
| HD-04: External fins on housing | P24 thermal mitigation | +$2/unit |
| HD-05: Optical bench 3→5mm | P24 shock stress analysis | ~$0/unit (same CNC setup) |
| HD-06: Clamp lug +2mm | P24 fatigue margin | +$1/unit machining |
| 3-layer corrosion prevention | P23 IMP-04 | +$1/unit (SS fasteners + nylon washers) |
| **Net Phase 3 cost growth** | | **+$4/unit** ($198→$202) |

---

## 6. Potential Phase 4 Cost Risks

| Risk | Trigger | Cost Impact |
|------|---------|------------|
| Option B hybrid aluminum housing | FEA thermal R_conv >13°C/W | +$5/unit |
| PCB redesign for alternative SoC | EAR blocks Jetson Orin Nano | +$5K NRE + 4-6 week delay |
| Additional qualification testing | EMC or environmental failures | +$2-5K NRE |
