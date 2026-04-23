---
created: 2026-04-22
type: helix-block
block: B0-preflight
pipeline: helix-task-clarify
project: VN-USV-SS-001
status: complete
---

# Block B0: Phase 1 Preflight — VN-USV-SS-001

> **Pipeline:** helix-task-clarify | **Block:** B0 Preflight
> **Date:** 2026-04-22 | **COD:** Offload (AI gathers, CEO validates)

---

## B0.1: Phase 0 Completeness Check

| Phase 0 Artifact | Required | Found | Path | Quality |
|-----------------|:--------:|:-----:|------|---------|
| _Project_Brief.md | YES | YES | `_Project_Brief.md` | Good — 6 HC, 10 parameters, domains defined |
| ICD v0 | YES | YES | `Phase0-Init/ICD_v0.md` | Good — 10 interfaces, domain boundaries, evolution plan |
| Technical Stack | YES | YES | `Phase0-Init/VN-USV-SS-TS-001_Technical_Stack.md` | Comprehensive — 7 layers, morpho matrix, cost arch |
| FORGE Job Map | YES | YES | `Phase0-Init/Job_Map.md` | 52 outcomes, 8 steps, 5 customer segments |
| FORGE Desired Outcomes | YES | YES | `Phase0-Init/Desired_Outcomes.md` | 52 outcomes, AI-estimated (not validated by customer) |
| FORGE Opportunity Landscape | YES | YES | `Phase0-Init/Opportunity_Landscape.md` | Top 15 underserved (Opp 9.0-10.0) |
| FORGE SHIFT Assessment | YES | YES | (in Status.md) | GO — S/H/I/F=PASS, T=MARGINAL |
| FORGE Validate + Trust | YES | YES | `Phase0-Init/FORGE_Validate_Trust_v1.0.md` | Present |
| FORGE Cost + Flywheel | YES | YES | `Phase0-Init/FORGE_Cost_Flywheel_v1.0.md` | Present |
| Portfolio Planning | YES | YES | `Phase0-Plan/VN_USV_SS_001_Portfolio_Planning_v1.0.md` | 10 variants, $1.27M/5yr |
| RE References | OPTIONAL | YES | `References/REF_ECA_Inspector*.md`, `REF_SubSeaSail_HORUS*.md` | 2 competitor REs |
| Sync Calendar | YES | YES | `Phase0-Init/Sync_Calendar.md` | Present |

**Phase 0 Completeness: 12/12 artifacts found. PASS.**

## B0.2: Project Context Summary

| Parameter | Value |
|-----------|-------|
| **Product** | Open-Hull Semi-Submersible USV |
| **Customer** | Bộ đội Biên phòng Việt Nam |
| **Mission** | Long-endurance low-observable maritime ISR patrol |
| **Tier** | 2 — Product Dev |
| **ACH** | GO — COTS hardware + AI navigation compensation |
| **Paradigm** | "USV phải dai dẳng và khó phát hiện" (not "phải nhanh") |
| **Hard Constraints** | 6 (HC-1 low-observable, HC-2 auto-surface fail-safe, HC-3 endurance ≥12h, HC-4 indigenous ≥50%, HC-5 SS3 ops/SS5 survival, HC-6 autonomy L2-3) |
| **Similar WX products** | VN-XUONG-UUV (marine eng), VN-AST-MSL-001 (marine env), BB-01 (sensor chain) |
| **Domains** | Co (hull/ballast/mast) × Dien (power/sensors/ESC) × AI (ArduSub/ROS2/nav) |
| **Cost target** | $2,900-6,500 prototype, $2,000-4,000 production |
| **Timeline** | 12 months to full prototype (2027-03-17) |

## B0.3: Stakeholder Register

| Stakeholder | Role | Interest | Influence | Engagement Level |
|------------|------|----------|-----------|-----------------|
| Chiến sĩ vận hành (USV Operator) | Primary user | Ease-of-use, reliability, comms link | HIGH | Consult (via Biên phòng feedback) |
| Chỉ huy đồn Biên phòng (CO) | Decision-maker | Area coverage, endurance, readiness | HIGH | Involve (mission requirements) |
| Đội kỹ thuật đồn | Maintainer | Simplicity, spare parts, low maintenance | MEDIUM | Consult (maintenance requirements) |
| Bộ Tư lệnh BĐBP | Buyer/Approver | Cost-effectiveness, indigenous content, doctrine fit | HIGH | Keep satisfied (procurement reqs) |
| Lực lượng chặn bắt | Downstream consumer | ISR quality, position accuracy, real-time data | MEDIUM | Inform (output format requirements) |
| CEO Workshop X | Designer/Builder | Technical feasibility, cost, schedule, ACH viability | MAX | Lead (design authority) |
| WX Mechanical team | Domain | Hull, structure, sealing, ballast | HIGH | Execute (domain delivery) |
| WX Electrical team | Domain | Power, sensors, ESC, BMS | HIGH | Execute (domain delivery) |
| WX AI/SW team | Domain | ArduSub, navigation, C2, payload SW | HIGH | Execute (domain delivery) |

**Key gap:** Biên phòng chưa có formal requirement document. All 52 ODI outcomes are AI-estimated. Stakeholder engagement is the #1 blocking risk for Phase 1 quality.

## B0.4: Applicable Standards Scan

| Standard | Relevance | Phase 1 Impact |
|----------|-----------|----------------|
| MIL-STD-882E (System Safety) | HC-2 auto-surface fail-safe | Safety requirements derivation |
| MIL-STD-810G (Environmental) | HC-5 SS3/SS5, tropical maritime | Environmental test requirements |
| MIL-STD-461G (EMC) | Sensor/comms interference | EMC requirements for Pixhawk + comms |
| TCVN (Vietnam standards) | HC-4 indigenous content compliance | Material/component sourcing requirements |
| COLREGS (Maritime rules) | Autonomous navigation | Navigation behavior requirements |
| IEC 60529 (IP rating) | IP67/68 sealing at 2m depth | Sealing/enclosure requirements |
| DNV-ST-0511 (Marine USV) | General USV design guidance | Hull, stability, propulsion requirements |
| IEEE 1547 (Power systems) | Battery management, power quality | BMS and power distribution requirements |
| ArduSub safety modes | Fail-safe behavior definition | Software safety requirements |

## B0.5: Scope Boundaries

**IN SCOPE for Phase 1:**
- Requirements list (target: ≥80 items, ≥80% quantified) from 17 P&B categories
- D/W classification by CEO
- Abstraction (essential problem + IFR)
- 6-flow function structure
- Design type classification (expect: AMBER — novel hull form, known propulsion/nav)

**OUT OF SCOPE for Phase 1:**
- Lab demonstrator build (parallel physical track, gate 2026-05-09)
- Biên phòng formal engagement (needed but not gating Phase 1 start)
- Cost estimation detail (deferred to Phase 2/3)
- Variant-specific requirements (deferred to Phase 2 variant expansion)

**Scope risk:** Without Biên phòng validation, ~30% of requirements will be AI-estimated with [L3-L4] confidence. CEO must decide: proceed with AI estimates + validate later, or wait for customer engagement.

## B0.6: Design Complexity Pre-Assessment

| Factor | Assessment | Rationale |
|--------|-----------|-----------|
| Hull form | RED — Original | Semi-submersible open-hull = no WX prior art. Torpedo + open frame = novel combination |
| Propulsion | GREEN — Adaptive | Dual BLDC + ESC = well-known from TARGET-DRONE, VN-XUONG |
| Ballast control | AMBER — Novel subsystem | Ballast pump + NC valve + depth sensor + ArduSub = new integration |
| Navigation | AMBER — Adaptive | ArduSub exists but semi-sub mode is community-experimental |
| Comms | GREEN — Variant | LoRa + 4G = proven from other products |
| Payload | GREEN — Variant | ISR camera = COTS, known integration |
| GCS | GREEN — Variant | QGroundControl + overlay = existing capability |

**Overall RE Complexity: AMBER** (2 RED/AMBER subsystems, 5 GREEN)
→ Multi-perspective domain debate WILL activate for hull + ballast SFs in Phase 2 BB/BD

## B0.7: Preflight Decision

```
═══ BLOCK B0 PREFLIGHT COMPLETE — VN-USV-SS-001 ═══

Phase 0 completeness: 12/12 PASS
Stakeholder register: 9 stakeholders mapped
Standards scan: 9 applicable standards identified
Design complexity: AMBER (hull RED, ballast AMBER, rest GREEN)
Scope: 80+ requirements target, AI-estimated baseline

KNOWN RISKS:
  1. No formal Biên phòng requirements — 30% of reqs will be AI-estimated
  2. Semi-sub hull = no WX prior art (RED complexity)
  3. ArduSub semi-sub mode = community experimental (AMBER)

CEO:
(1) ✅ Approve → proceed to Block BA (Requirements Generation)
(2) 🔍 Address risk #1 first — engage Biên phòng before generating requirements
(3) 🔄 Adjust scope — narrow to known subsystems only
(4) ⏸️ Hold — wait for lab demonstrator results (2026-05-09)
```
