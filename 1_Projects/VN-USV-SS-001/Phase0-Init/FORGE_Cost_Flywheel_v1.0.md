---
created: 2026-03-20
type: project
project: VN-USV-SS-001
skills: [forge-cost, forge-flywheel]
---

# VN-USV-SS-001 — Cost Analysis + Data Flywheel
## forge-cost + forge-flywheel Combined Output

---

# PART A: COST ANALYSIS (forge-cost)

## Hardware Alternative vs ACH

| Category | Military USV (L3Harris/Rafael) | VN-USV-SS-001 (ACH) | Delta |
|----------|:------------------------------:|:--------------------:|:-----:|
| Navigation system | INS + DP system: $10,000+ | ArduSub + Pixhawk: **$300** | **-97%** |
| Autopilot | Military-grade: $5,000+ | Pixhawk 6X: **$250** | -95% |
| Hull (2-4m) | Composite/aluminum: $50,000+ | HDPE + aluminum frame: **$500-1,500** | -97% |
| Communication | Encrypted military: $10,000+ | LoRa + 4G: **$100-200** | -98% |
| Camera/ISR | Military EO/IR: $20,000+ | COTS IP camera: **$200-500** | -97% |
| AI inference | Custom FPGA: $5,000+ | Jetson Orin Nano: **$200** (optional) | -96% |
| **Total unit** | **$500,000 - $5,000,000** | **$2,900 - $6,500** | **-99%** |

## ACH Economics Reality Check

```
⚠ DEFENSE COSTING TRAP:
"$300 vs $10K" is unit component cost.
Real cost includes: development NRE, qualification, lifecycle, spares.

HONEST COMPARISON:
  Hardware USV (imported): $500K unit + $0 NRE (already developed) = $500K
  VN-USV-SS-001 (ACH):    $5K unit + $50K NRE (development) = $55K for 1st unit
                           $5K unit × 10 + $50K NRE = $100K for 10 units ($10K/unit)

  Breakeven vs import: 1 unit (even prototype is 10× cheaper)
  At 10 units: $10K/unit vs $500K/unit = 50× cost advantage
```

## Unit Cost Breakdown (Prototype)

| Subsystem | Cost | % | Local? |
|-----------|:----:|:-:|:------:|
| Hull (HDPE torpedo + aluminum frame) | $800 | 16% | ✅ 100% local |
| Propulsion (2× BLDC + ESC + prop) | $400 | 8% | Partial (motor import, mount local) |
| Battery (LiFePO4 48V 50Ah) | $600 | 12% | Import |
| Ballast system (pump + NC valve + tank) | $300 | 6% | ✅ 80% local |
| Autopilot (Pixhawk 6X + sensors) | $350 | 7% | Import |
| Communication (LoRa + 4G modem) | $200 | 4% | Partial |
| Camera (ISR payload) | $300 | 6% | Import |
| Mast (carbon fiber + antenna mount) | $200 | 4% | ✅ Local fab |
| Electronics (PCB, wiring, connectors) | $300 | 6% | ✅ Local |
| Software NRE (amortized over 10) | $500 | 10% | ✅ 100% local |
| Integration + test | $500 | 10% | ✅ 100% local |
| Contingency 15% | $550 | 11% | — |
| **Prototype total** | **~$5,000** | | |
| **Local content** | | **~55%** | Target 75% at production |

## Pricing Strategy

| Scenario | Price | Margin | Volume |
|----------|:-----:|:------:|:------:|
| Prototype (qty 1) | Cost ($5K) + NRE ($50K) = $55K | 0% (R&D) | 1 |
| Initial (qty 5) | $15,000/unit | 50% | 5 |
| Production (qty 20+) | $8,000-12,000/unit | 60-70% | 20+ |
| Export (ASEAN) | $15,000-25,000/unit | 70%+ | TBD |

## 5-Year Revenue Projection

| Year | Units | Revenue | Cumulative |
|:----:|:-----:|:-------:|:----------:|
| 1 | 2 (prototype + demo) | $30K | $30K |
| 2 | 5 (initial order Biên phòng) | $75K | $105K |
| 3 | 10 (fleet expansion) | $120K | $225K |
| 4 | 10 (VN) + 5 (export) | $195K | $420K |
| 5 | 10 (VN) + 10 (export) | $320K | **$740K** |

## Strategic Value (beyond unit economics)

| Dimension | Score |
|-----------|:-----:|
| Capability premium (semi-sub + AI at $5K → impossible for competitors) | ★★★★★ |
| Reuse compound (ArduSub→VN-XUONG future, YOLOv8→VN-12.7MM I-08) | ★★★★ |
| Local content (55%→75%) | ★★★ |
| Supply chain independence (open-source, no export control) | ★★★★★ |
| Data flywheel (patrol data → AI improvement) | ★★★★ |
| Market creation (zero competitors at this price for semi-sub) | ★★★★★ |

---

# PART B: DATA FLYWHEEL (forge-flywheel)

## Flywheel Architecture

```
DEPLOY semi-sub USV on patrol
    │
    ▼
FIELD DATA collected per mission:
  • GPS track (position, speed, depth vs time)
  • Camera footage (targets detected, false alarms)
  • Battery consumption profile (speed × depth × current)
  • Comms quality log (RSSI, packet loss, failover events)
  • Ballast performance (depth hold error over time)
  • Environmental (wave, wind, current estimates from IMU)
    │
    ▼
DATA IMPROVES models:
  • WX-DET-001 (YOLOv8): real maritime targets → better detection
  • WX-CTL-001 (ArduSub PID): real sea conditions → better tuning
  • Power management: real consumption → better endurance prediction
  • Comms optimizer: real coverage map → better link budget
    │
    ▼
BETTER PERFORMANCE → customer trust → more orders → more data
```

## Data Volume Projections

| Scenario | Units | Missions/yr | Data/yr | Key Dataset |
|----------|:-----:|:-----------:|:-------:|------------|
| Prototype | 1 | 50 | ~25 GB | ArduSub PID tuning |
| Initial fleet | 5 | 500 | ~250 GB | Maritime target images |
| Full fleet | 20 | 2,000 | ~1 TB | VN coastal environment model |

## Flywheel Metrics

| Metric | Pre-deploy | Year 1 | Year 3 |
|--------|:----------:|:------:|:------:|
| Detection model accuracy | ~70% (pretrained) | ~85% (fine-tuned VN) | ~95% (fleet data) |
| Depth hold accuracy | ±100 mm (lab) | ±50 mm (tuned) | ±30 mm (optimized) |
| Endurance prediction | ±30% (estimate) | ±10% (data-based) | ±5% (ML model) |
| False alarm rate | ~20% | ~8% | ~3% |

## Flywheel Investment

| Item | Cost/yr | ROI |
|------|:-------:|-----|
| SD card per USV (mission logging) | $10/unit | Enables ALL data collection |
| Quarterly model retrain | $500/yr | Detection accuracy +5%/cycle |
| Fleet data aggregation tool | $1,000 (one-time) | Cross-unit learning |
| **Total flywheel operating** | **$1,500/yr** | **Enables $320K/yr revenue by Year 5** |

## #1 Flywheel Blocker

**SD card data download = manual USB.** Every mission → someone pulls SD card → copies to laptop → uploads. If this step is skipped → data lost → flywheel stalls.

**Mitigation:** 4G auto-upload when in port (if bandwidth allows). Or: make data download PART of post-mission checklist (same as "rửa nước ngọt" — mandatory, non-skippable).

---

# COMBINED FORGE PIPELINE STATUS — VN-USV-SS-001

| FORGE Skill | Status | Output |
|-------------|:------:|--------|
| forge-job-map | ✅ DONE | 52 outcomes, DISRUPTIVE, 7 ACH candidates |
| forge-scout | ✅ DONE (Session 54) | 4 HIGH + 1 MED in ACH Matrix |
| forge-shift | ✅ DONE (Session 52) | ACH GO, SHIFTO O=7/15 avg 9.5 |
| forge-validate | ✅ DONE | 3-stage plan, 16 tests, 4 kill gates |
| forge-trust | ✅ DONE | 3 audience messages, 5 concerns, milestones |
| forge-cost | ✅ DONE | $5K vs $500K+, 5yr $740K revenue |
| forge-library | ✅ DONE (Session 54) | WX-DET-001 + WX-CTL-001 mapped |
| forge-flywheel | ✅ DONE | 1 TB/yr at fleet, $1,500/yr → $320K/yr |

**VN-USV-SS-001 FORGE pipeline: 8/8 COMPLETE.** ✅

---

*VN-USV-SS-001 Cost + Flywheel v1.0*
