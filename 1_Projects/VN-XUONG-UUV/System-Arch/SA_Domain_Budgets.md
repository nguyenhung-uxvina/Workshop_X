---
project: VN-XUONG-UUV
type: system-arch
document: SA4
version: 1.5
created: 2026-04-14
updated: 2026-04-14
status: AI-DRAFT
mode: retro-quick
---

# SA4: Domain Budgets — VN-XUONG-UUV

## 1. Weight Budget

System total target: ~2,670 kg lightship (revised from 2,820 — genset removed, battery added)

| Domain | Allocation | Items | Confidence | Change vs Doc 008 |
|--------|-----------|-------|:----------:|-------------------|
| MECH — Hull + structure | 1,350 kg | Hull, superstructure, frames | [L4] | Unchanged |
| MECH — Propulsion | 240 kg | Twin OB 2×60 HP + rigging | [L3] | Unchanged |
| MECH — LARS structure | 340 kg | Ramp 180 + channel 100 + cradle 60 | [L5] | Unchanged |
| MECH — Deck + fittings | 145 kg | Console, seats, fittings, fuel system, safety | [L5] | Unchanged |
| ELEC — Battery bank | **50 kg** | LiFePO4 24V ~100Ah (2-4 kWh) | **[L5-TBD]** | **NEW** (replaces genset 200 kg) |
| ELEC — VFD + winch motor | 80 kg | Winch ~80 kg (included in LARS above for structure) | [L4] | Split: motor=ELEC, frame=MECH |
| ELEC — Actuator | 25 kg | Linear actuator ramp tilt | [L4] | Unchanged |
| ELEC — Distribution + wiring | 40 kg | Panel, breakers, cables | [L5] | Simplified (no genset wiring) |
| ELEC — Nav + comms + sensors | 20 kg | GPS, VHF, load cell, lights | [L4] | Unchanged |
| ELEC — Charger | **10 kg** | Shore power charger (220VAC → 24VDC) | **[L5-TBD]** | **NEW** |
| **SUBTOTAL** | **2,300 kg** | | | |
| **Margin (10%)** | **230 kg** | | | |
| **LIGHTSHIP TOTAL** | **~2,530 kg** | | | **-290 kg vs Doc 008 (2,820)** |

**Impact of genset removal:**
- Net weight savings: **~290 kg** (genset 200 + fuel system simplification 90)
- Battery bank + charger added: ~60 kg
- Lightship drops from ~2,820 → ~2,530 kg
- Stability improves (less topside weight, genset was high CG)
- Doc 008 Weight Estimate v2.1 needed

### Weight by Domain

| Domain | Mass (kg) | % of Lightship |
|--------|:---------:|:--------------:|
| MECH | 2,075 | 82% |
| ELEC | 225 | 9% |
| Margin | 230 | 9% |
| **TOTAL** | **2,530** | **100%** |

## 2. Power Budget

System total available: **Battery bank ~2-4 kWh** (replaces genset 5-8 kW continuous)

### LARS Cycle Power Demand

| Stage | Consumer | Power (W) | Duration | Energy (Wh) |
|-------|----------|:---------:|:--------:|:-----------:|
| LARS standby | VFD controller + sensors | 50 | 60 min | 50 |
| Launch — winch pay-out | Winch motor (controlled descent) | 500 | 5 min | 42 |
| Launch — ramp tilt | Linear actuator | 300 | 1 min | 5 |
| Recovery — winch haul | Winch motor (10 kN, ~0.1 m/s) | **1,000** | 10 min | 167 |
| Recovery — ramp tilt | Linear actuator | 300 | 1 min | 5 |
| **LARS cycle total** | | | ~77 min | **~269 Wh** |

### Other Consumers

| Consumer | Power (W) | Duration | Energy (Wh) |
|----------|:---------:|:--------:|:-----------:|
| Nav + comms + lights | 80 | 8 hrs (full mission) | 640 |
| Bilge pump (intermittent) | 60 | 10 min total | 10 |
| UUV controller (if 24VDC) | 100 | 6 hrs | 600 |
| **Other total** | | | **~1,250 Wh** |

### Battery Sizing

| Scenario | Energy Need | Battery Size | Weight |
|----------|:----------:|:------------:|:------:|
| 1× L+R cycle + 8hr mission | ~1,520 Wh | 24V 80Ah (1,920 Wh) | ~25 kg |
| 2× L+R cycles + 8hr mission | ~1,790 Wh | 24V 100Ah (2,400 Wh) | ~30 kg |
| 3× L+R cycles + 8hr (with margin) | ~2,330 Wh | 24V 120Ah (2,880 Wh) | ~38 kg |

**Recommended:** 24V 100Ah LiFePO4 (~30 kg, ~2.4 kWh). Supports 2 full L+R cycles + 8hr mission with 25% reserve.

**CEO TBD:** Battery chemistry (LiFePO4 recommended) and recharge method (shore power from mother ship).

## 3. Cost Budget

System BOM target: ~$517K → revised estimate with genset removal

| Domain | Before | After | Delta | Notes |
|--------|:------:|:-----:|:-----:|-------|
| MECH — Hull | $150K | $145K | -$5K | Lighter hull possible |
| MECH — Propulsion | $30K | $30K | — | Unchanged |
| MECH — LARS | $120K | $115K | -$5K | No genset mounting, simpler |
| ELEC — Genset | **$40K** | **$0** | **-$40K** | ELIMINATED |
| ELEC — Battery + charger | $0 | **$5K** | +$5K | LiFePO4 24V 100Ah + charger |
| ELEC — VFD + distribution | (in LARS) | $8K | +$8K | Explicit — was hidden in genset line |
| Nav + comms + safety | $15K | $15K | — | Unchanged |
| Outfitting | $20K | $18K | -$2K | Less exhaust/fuel routing |
| Engineering | $80K | $80K | — | Unchanged |
| Testing | $40K | $40K | — | Unchanged |
| Contingency 10% | $22K | $18K | -$4K | Lower base |
| **TOTAL** | **~$517K** | **~$474K** | **-$43K** | **8% savings** |

### Cost by Domain

| Domain | Cost | % |
|--------|:----:|:-:|
| MECH | $388K | 82% |
| ELEC | $28K | 6% |
| Engineering + Testing | $120K | 25% |
| Contingency | $18K | 4% |
| **TOTAL (with overlap)** | **~$474K** | |

## 4. Budget Conflicts / Design Drivers

| # | Issue | Impact | Resolution |
|---|-------|--------|-----------|
| 1 | Battery endurance for 3+ L+R cycles | Need larger battery (120Ah) or recharge between cycles | **CEO decides:** 2-cycle or 3-cycle requirement? |
| 2 | 24VDC winch availability for 10 kN | May need 48VDC system → all ELEC changes | **SA-02 must verify** before Phase 3 |
| 3 | UUV controller power requirement unknown | May need inverter (24VDC→220VAC) adding ~5 kg, ~$500 | **SA-04 depends on OEM ICD** |
