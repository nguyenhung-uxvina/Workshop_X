---
project: V-SMASH-M
phase: 3
type: dfx-analysis
prompt: P25
version: 1.0
created: 2026-02-22
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Embodiment_Task_Clarification_v1.0.md, V-SMASH-M_Layout_Design_Review_v1.0.md, V-SMASH-M_Material_Selection_v1.0.md, V-SMASH-M_Requirements_List_v1.0.md]
production_volume: 100-500 units/year (initial), scalable to 2,000/year
maintenance_levels: L1 Operator (field) / L2 Depot (Workshop X) / L3 Factory (WX + suppliers)
---

# V-SMASH-M (Micro-Sight) — DfX Analysis (P25)

> **Purpose:** Score all 12 Design for Excellence categories (1-5). Identify specific issues for all scores ≤3. Generate priority action list for items requiring correction before Phase 3 gate.
> **Design maturity:** ~60% — layout committed (P22/P23), materials selected (P24), pre-FMEA stage.
> **Pass criteria:** Average ≥3.0 across all 12 categories. DfS, DfR, DfStd, DfLC each ≥3 (mandatory).

---

## DfX Scorecard

| # | Category | Score /5 | Pass? | Specific Issue(s) | Fix Action |
|---|----------|---------|-------|--------------------|------------|
| 1 | **DfM** (Manufacture) | **4** | ✅ | All processes identified and available (P22 §3). PA6-GF30 injection molding standard. CNC 7075-T6 outsourced but routine. SMT within WX capability. Only concern: hard anodize MIL-A-8625 Type III — local vendor quality unverified [ASSUMPTION]. | Qualify anodize vendor before Phase 4 procurement. Add to CF-02 risk register. |
| 2 | **DfA** (Assembly) | **3** | ✅ | Sub-assemblies designed for pre-assembly (SA-01, SA-02, SA-03 built separately, then integrated into SA-05). Assembly sequence NOT yet documented (P23 IMP-05). SA-03 uses UV-cure lock — irreversible, no rework path. ~14 fasteners — reasonable. Single tool (T10 Torx) for external fasteners. No trapped parts detected. Scored 3 not 4 because assembly sequence is undocumented. | Document production assembly sequence (IMP-05) — add to D12 deliverable. |
| 3 | **DfMaint** (Maintenance) | **4** | ✅ | L1 (field): Battery replacement tool-free ≤60s (VM-A01). Power cycle via button. No other field maintenance expected. L2 (depot): Lens replacement (4 screws from optical bench). Full unit replacement as LRU for SoC/OLED failure. L3 (factory): PCB repair/replacement. Diagnostics: USB-C data port for firmware update and log extraction. BLE for wireless status. Concern: no built-in self-test (BIST) beyond power-on AI detect test (VM-Q01). | Consider adding BIST command via USB-C for depot-level diagnostics (Phase 4 firmware scope). |
| 4 | **DfR** (Reliability) | **3** | ✅ | FMEA planned (P26 — next artifact). Fail-safe defined: power loss → blank OLED, revert to iron sights (VM-Y02). SF4 confidence gate is the primary reliability mechanism for AI output. Burn-in plan: not yet specified — needed for electronics screening. No redundancy on SoC (single-point compute, but fail-visible via AI FAULT indicator). Scored 3 because FMEA not yet complete and burn-in not specified. | Complete FMEA (P26). Specify burn-in protocol (Phase 4 — e.g., 24h power-on at 55°C before shipment). |
| 5 | **DfS** (Safety) | **4** | ✅ | **MANDATORY ≥3.** No electrical connection to weapon trigger (VM-Y01) — verified in P22 §2.3. SF4 confidence gate suppresses indicator when classification <70% (VM-Y03) [SAFETY-CRITICAL]. SF5 bounds check suppresses indicator on compute fault. No hazardous energy sources (3.7V Li-ion, <20 Wh — below UN38.3 threshold for dangerous goods). Battery polarity protection on PCB. No pinch points, no exposed hot surfaces (SoC sealed inside housing). No laser. OLED brightness ≤5,000 nits — no eye hazard. | None — satisfactory. Verify VM-Y01 (no trigger connection) in Phase 4 schematic review. |
| 6 | **DfErg** (Ergonomics) | **4** | ✅ | Weight 370g — well within one-hand weapon accessory range. 120×50×60mm does not obstruct iron sights (mount position adjustable on rail). Eye relief 25-75mm (VM-H05) covers goggle/non-goggle use. "Follow the dot" concept = minimal cognitive load (1-step aiming). Power button ≤20N for gloved operation. Battery change single-hand, tool-free, ≤60s. Training time target ≤4h (VM-H06) — simple concept aids this. Scored 4 not 5 because night-time readability (OLED dimming for NVG compatibility) not yet addressed. | Add OLED NVG-compatible mode to firmware scope (Phase 4). Low-green OLED output for NVG passthrough. |
| 7 | **DfPV** (Production Volume) | **3** | ✅ | Initial 100-500 units/year: single-cavity injection mold sufficient. Manual assembly at WX feasible. Jig investment $6K — justified at 100+ units. At 2,000/year: mold cycle time becomes relevant (~60s/part × 4 shells/unit = 4 min mold time). PCB assembly: WX SMT line handles 100-500 units comfortably. Scored 3 not 4 because no parallel sub-assembly flow documented and scaling analysis for 2,000/year not detailed. | Add scaling assessment to P27 gate deliverables. Identify bottleneck process for 2K/year. |
| 8 | **DfCorr** (Corrosion) | **4** | ✅ | 3-layer corrosion prevention on aluminum (P23 IMP-04 + P24): hard anodize + isolating washers + SS304 fasteners. PA6-GF30 housing inherently corrosion-resistant. UV stabilizer in housing compound. Picatinny clamp: MoS₂ dry film on recoil lug bearing surface. IP67 seal as primary moisture barrier. Internal electronics: conformal coating (IPC-CC-830 Class 2). No dissimilar metal contact without barrier (P23 Principle 5 resolved). Scored 4 not 5 because long-term seal degradation under repeated recoil (VM-F03, 500+ rounds) not tested — empirical verification needed. | Phase 4: IP67 seal retention test after 500-round vibration/shock sequence. |
| 9 | **DfTherm** (Thermal) | **2** | ⚠ | **Below standard.** P24 thermal analysis revealed R_total = 23.3°C/W with fins → Tj = 101.6°C at 55°C/2.0W (exceeds 95°C by 6.6°C). Firmware throttle mandatory at ≥45°C ambient. NR-02 escalated to HIGH. PA6-GF30 housing wall (k=0.3 W/mK) is the thermal bottleneck. Fins help but PA6-GF30 fins have poor efficiency (η ≈ 0.85) due to low thermal conductivity. Phase 4 FEA required — if R_conv >13°C/W → must escalate to hybrid aluminum housing (Option B, +$5/+30g). Thermal stress at SoC-pad-spreader interface under thermal cycling (-10 to +55°C) not yet analyzed. | **[PRIORITY] Phase 4 FEA thermal simulation is gate condition for production release. If FEA confirms marginal → implement hybrid Al housing (Option B). Add thermal cycling test to qualification plan.** |
| 10 | **DfRD** (Recycling/Disposal) | **3** | ✅ | Materials separable: PA6-GF30 housing (recyclable as engineering plastic), AA7075-T6 aluminum (recyclable), A2-70 SS fasteners (recyclable), BK7 glass (inert). Li-ion 21700 battery: requires separate disposal per UN38.3. Electronics (PCB, SoC): WEEE-category disposal. No hazardous materials beyond Li-ion cell and small quantities of solder (RoHS compliant if specified). No potting material with restricted substances (specify silicone-based, not polyurethane). Military disposal: unit can be physically destroyed (crush housing) to prevent technology transfer. | Specify RoHS-compliant solder in BOM. Specify silicone potting (not PU). Add disposal instruction to technical manual. |
| 11 | **DfStd** (Standards) | **4** | ✅ | **MANDATORY ≥3.** MIL-STD-1913 (Picatinny rail). MIL-STD-810H (environmental — shock, vibration, temperature, humidity, sand/dust). MIL-A-8625 Type III (anodize). IPC-CC-830 (conformal coating). DIN 912/7991 (fasteners). IP67/IP65 (IEC 60529). BLE 5.0 (Bluetooth SIG). USB-C (USB-IF). CISPR 32 Class B + IEC 61000-4-3 (EMC, VM-O10/O11). MIL-C-675 (optical coating). MIL-O-13830 (optics quality). TCVN not yet mapped to specific clauses — MIL-STD equivalents used. | Map TCVN equivalents for procurement compliance (Phase 4 documentation). |
| 12 | **DfLC** (Local Content) | **3** | ✅ | **MANDATORY ≥3.** P22 §7.1 baseline: 45.8% (below 60% target). P22 identified 4 mitigation paths → 62.6%. P24 confirms: housing 100% local, fasteners 95% local, heat spreader 100% local. Import-heavy: sensor ($25), SoC ($45), OLED ($25), beam-splitter ($10). Assembly labor + firmware + local value-add processes push toward 62.6%. Scored 3 (60-69% range achievable with mitigations). Would need significant local value-add effort to reach 4 (≥70%). | Execute all 4 mitigation paths from P22 §7.1 during Phase 4 BOM finalization. Track local content % at each design review. |

---

## Summary

Scores: DfM=4, DfA=3, DfMaint=4, DfR=3, DfS=4, DfErg=4, DfPV=3, DfCorr=4, DfTherm=2, DfRD=3, DfStd=4, DfLC=3. Sum = 41.

| Metric | Value | Status |
|--------|-------|--------|
| Average score | **41/12 = 3.42/5** | ✅ Above 3.0 threshold |
| Mandatory ≥3 (DfS/DfR/DfStd/DfLC) | 4/3/4/3 | ✅ All met |
| Scores ≤2 | 1 (DfTherm) | ⚠ Below standard — action required |
| Scores ≤3 | 6 categories | Fix actions identified for all |

---

## Priority Action List

| Priority | Category | Action | Owner | Phase |
|----------|----------|--------|-------|-------|
| **1 — CRITICAL** | DfTherm (2) | FEA thermal simulation. If R_conv >13°C/W → implement Option B hybrid housing. Add thermal cycling qualification test. | Design / Phase 4 | Phase 4 (blocks production release) |
| **2 — HIGH** | DfA (3) | Document production assembly sequence with tools and torque specs (IMP-05) | Design / Phase 4 | P26 or Phase 4 |
| **3 — HIGH** | DfR (3) | Complete FMEA (P26). Specify burn-in protocol for electronics screening. | Design / P26 | This session |
| **4 — MEDIUM** | DfPV (3) | Scaling assessment for 2,000 units/year — identify bottleneck process | Design / P27 | P27 gate |
| **5 — MEDIUM** | DfRD (3) | Specify RoHS solder + silicone potting in BOM. Add disposal procedure to tech manual. | Design / Phase 4 | Phase 4 |
| **6 — MEDIUM** | DfLC (3) | Execute 4 local content mitigation paths during Phase 4 BOM. Track % at each review. | Design / Phase 4 | Phase 4 ongoing |
| **7 — LOW** | DfM (4) | Qualify anodize vendor for MIL-A-8625 Type III | Procurement / Phase 4 | Phase 4 |
| **8 — LOW** | DfMaint (4) | Add BIST command via USB-C for depot diagnostics | Firmware / Phase 4 | Phase 4 |
| **9 — LOW** | DfErg (4) | Add OLED NVG-compatible mode | Firmware / Phase 4 | Phase 4 |
| **10 — LOW** | DfCorr (4) | IP67 seal retention test after 500-round shock sequence | Test / Phase 4 | Phase 4 qualification |
| **11 — LOW** | DfStd (4) | Map TCVN equivalents for procurement compliance | Documentation / Phase 4 | Phase 4 |

---

## HITL CHECKPOINT — DfX Analysis

**P25 complete. 12 categories scored.**
- Average: **3.42/5** (above 3.0 threshold)
- Mandatory categories all ≥3
- 1 below-standard score: **DfTherm (2)** — thermal management is the #1 risk
- 11 fix actions identified (1 critical, 2 high, 3 medium, 5 low)
- **DfTherm does NOT block Phase 3 gate** — it creates a Phase 4 gate condition (FEA required before production release)

**Proceed to P26 (FMEA)?**
