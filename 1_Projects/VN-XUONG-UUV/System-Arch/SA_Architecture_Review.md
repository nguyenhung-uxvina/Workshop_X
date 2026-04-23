---
project: VN-XUONG-UUV
type: system-arch
document: SA6
version: 1.0
created: 2026-04-14
updated: 2026-04-14
status: PENDING-CEO
mode: retro-quick
---

# SA6: Architecture Review Gate — VN-XUONG-UUV

```
═══ SYSTEM ARCHITECTURE REVIEW — VN-XUONG-UUV ═══
Mode: RETROACTIVE (--retro) + QUICK
Date: 2026-04-14
```

## Deliverables Check

| Deliverable | Status |
|-------------|:------:|
| SA_Mechatronic_Classification.md | ✅ DONE (QUICK, CEO approved) |
| SA_System_Architecture.md (block diagram + domain allocation) | ✅ DONE (35 SFs allocated) |
| SA_Domain_Budgets.md (weight/power/cost) | ✅ DONE (revised for battery-only) |
| SA_ICD_v1.5.md (interface contracts) | ✅ DONE (9 internal + 7 external) |
| SA_VV_Plan.md | ⏭️ SKIPPED (QUICK mode — standard Phase 3 approach) |
| SA_Model_Inventory.md | ⏭️ SKIPPED (QUICK mode) |

## Architecture Quality

| Check | Pass? | Notes |
|-------|:-----:|-------|
| Every SF allocated to exactly 1 primary domain | ✅ | 35 SFs: 22 MECH, 5 ELEC, 2 OEM, 5 SHARED (lead assigned) |
| All SHARED functions have designated lead domain | ✅ | MECH leads 3/5, ELEC leads 2/5 |
| No unresolved interfaces (or explicitly deferred) | ⚠️ | 4 unresolved — 3 depend on OEM ICD (**BLOCKING**), 1 on market survey |
| Budget totals ≤ requirement targets | ✅ | Weight -290 kg, Cost -$43K vs original |
| ≥1 physical prototype planned within 30 days | ❌ | **No physical gate set** — MVP-01 Passive Cradle Test exists but no date |

## Shadow Assumptions (7 detected)

| Priority | SA-ID | Risk | Resolution |
|:--------:|-------|------|-----------|
| 🔴 HIGH | SA-02 | 24VDC winch 10 kN exists? | Market survey BEFORE Phase 3 layout |
| 🔴 HIGH | SA-04 | UUV controller power requirement? | OEM ICD — **BLOCKING** |
| 🟡 MED | SA-01 | Battery box fits in allocated volume? | Phase 3 layout check |
| 🟡 MED | SA-05 | Battery weight ≤50 kg? | Confirm with supplier spec |
| 🟡 MED | SA-06 | Cable voltage drop 24V over 8m? | Calculate at Phase 3 |
| 🟢 LOW | SA-03 | Winch mount supports 10 kN? | Phase 3 FEM or calculation |
| 🟢 LOW | SA-07 | Linear actuator 24VDC ≤2 kN? | Standard industrial item |

## Key Findings from Retroactive Analysis

### What was IMPLICITLY decided (now documented)
1. MECH leads system (82% by weight, 82% by cost)
2. ELEC is subordinate power/actuation provider
3. OEM interface is hard boundary — 3 blocking TBDs depend on ICD from OEM
4. Battery-only power (CEO decision 2026-04-14) simplifies ELEC and saves ~290 kg, ~$43K

### What was MISSING (gaps filled by this SA)
1. **No domain allocation table existed** — SFs were implicitly mechanical, ELEC was embedded in working principles without clear ownership
2. **No power budget** — genset was "5-8 kW" without demand analysis. Now: actual demand ~1.5 kWh per L+R cycle
3. **No shadow assumptions documented** — 7 SA detected, 2 are HIGH risk
4. **No interface specifications between MECH and ELEC** — 9 interfaces now defined with constraints

### What CHANGED due to genset removal
1. F4.2 changes from "Generate LARS power (genset)" → "Store LARS power (battery)"
2. Weight: -290 kg lightship (2,820 → ~2,530)
3. Cost: -$43K (517K → ~474K)
4. Risk R4 (EMC genset↔controller): ELIMINATED
5. New risk: Battery endurance for multi-cycle operations
6. New interface: Shore power recharge from mother ship (EX-03)

## Risk Summary

| # | Risk | Impact | Mitigation |
|---|------|:------:|-----------|
| 1 | 24VDC 10kN marine winch not commercially available | HIGH | Survey market NOW. Fallback: 48VDC system (changes all ELEC) |
| 2 | OEM ICD not received before Phase 3 | HIGH | Send ICD Template v1.3 IMMEDIATELY. Design around worst-case envelope |
| 3 | Battery insufficient for 3+ recovery cycles | MED | Size for 2 cycles + recharge at mother ship between sorties |
| 4 | Voltage drop 24VDC over 8m cable run | MED | Use 16mm² cable or consider 48VDC |

## Documents Requiring Update (Due to Genset Removal)

| Document | Change Needed | Priority |
|----------|--------------|:--------:|
| Doc 006 Function Structure v2.0 → v2.1 | F4.2: genset → battery bank | HIGH |
| Doc 008 Weight Estimate v2.0 → v2.1 | Remove genset 200 kg, add battery ~30 kg | HIGH |
| Doc 010 Concept Description v1.0 → v1.1 | Power architecture section | MED |
| Doc 012 CFMA v1.0 → v1.1 | Remove genset failure modes, add battery depletion | MED |

```
CEO DECISION:
  □ APPROVE — architecture baseline established, proceed with Phase 2 closure
  □ ITERATE — specific issues to resolve: ___
  □ REJECT — fundamental problem: ___

CEO ACTIONS REQUIRED (before Phase 3):
  1. Send ICD Template v1.3 to UUV OEM (BLOCKING — unchanged)
  2. Market survey: 24VDC marine winch 10 kN (NEW — resolves SA-02)
  3. Decide: battery chemistry + cycle requirement (2 or 3 L+R cycles)
  4. Set physical gate date for MVP-01 Passive Cradle Test

═══════════════════════════════════════════════
```
