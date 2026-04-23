---
created: 2026-04-11
type: preflight-report
block: B0
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
status: COMPLETE
feeds_to:
  - VN_MGM_V5_Requirements_List_v2.0.md (BA — ICDM extension)
  - VN_MGM_V5_Essential_Problem.md (BC)
  - VN_MGM_V5_Function_Structure.md (BD)
---

# B0 Preflight Report — VN-MGM V5-MOTORIZED (ICDM)

## 1. Phase 0 Verification

| Deliverable | File | Status | Key Content |
|-------------|------|:------:|-------------|
| Product Planning v1.0 | Phase0-Plan/V5-MOTORIZED/ | ✅ | Gate 0 PROCEED. BLDC + worm + EM clutch NC. $10-18K. 15 units target. |
| Operator Analysis v1.0 | Phase0-Plan/V5-MOTORIZED/ | ✅ | V5 vs V1: -43% engage time, +68% swarm defense, +3-5× endurance. CEO validated. |
| Reverse Engineering v1.0 | Phase0-Plan/V5-MOTORIZED/ | ✅ | 8 competitors × 12 SFs. Level 2 "motorized mount" = MARKET GAP. EM clutch = UNIQUE. |
| Product Proposal v1.0 | Phase0-Plan/ (shared) | ✅ | IFR, FORCE-CENTERED paradigm, 5 sacred constraints |
| Portfolio Planning v1.1 | Phase0-Plan/ (shared) | ✅ | 12 variants, $1.83M/5yr. V5 = strategic bridge to RCWS. |
| FORGE pipeline (7 files) | Phase0-Forge/ (shared) | ✅ | HOQ: Traverse Speed 17.5%, First Hit 14.9%. ACH: SF-D NOT ACH. Cost: V1 $2.5K BOM. |

**Phase 0: ✅ COMPLETE — all inputs available.**

## 2. Existing Phase 1 Work Assessment

Requirements List v1.0 (2026-04-10) already contains:
- 86 requirements (58D / 28W), 87% quantified, 16/16 categories
- Stakeholder map (8 stakeholders, 4 conflicts resolved)
- IFR + 5 Sacred Constraints (CEO confirmed)
- TVDT partial (section 4 — 8 value traces)
- Technology gaps: TG-1 (recoil recovery), TG-2 (elastomer attenuation)
- Gate 1: RECOMMEND APPROVE

**Assessment:** Requirements are solid P&B-compliant work. ICDM extension adds innovation/collaboration metrics on top. BA will AUGMENT (not replace) existing 86 req.

## 3. Stakeholder Map (extended for ICDM)

### 3a. Standard Stakeholders (from Req List v1.0)

| # | Stakeholder | Role | Primary Interest |
|---|------------|------|------------------|
| S1 | Trắc thủ (Gunner) | USER | Speed, accuracy, endurance, fail-safe |
| S2 | Chỉ huy tàu (Commander) | DECISION-MAKER | C-UAV effectiveness, availability |
| S3 | Đội kỹ thuật (Technician) | MAINTAINER | MTTR, spares, diagnostics |
| S4 | Bộ Tư lệnh HQ (Navy Command) | BUYER | Cost, local content, delivery |
| S5 | Sĩ quan An toàn (Safety Officer) | AUTHORITY | Fail-safe, E-stop, no unintended fire |
| S6 | WX Sản xuất (Production) | MANUFACTURER | CNC capability, local processes |
| S7 | Đội vận chuyển (Transport) | LOGISTICS | Size, weight, packaging |
| S8 | 300 V1 customers | INSTALLED BASE | Backward compatibility |

### 3b. ICDM Extension — Innovation Stakeholders

| # | Stakeholder | Role | ICDM Interest |
|---|------------|------|---------------|
| S9 | VN-CUAV-SIM team | INTERNAL SYNERGY | Motor control know-how transfer (encoder, servo) |
| S10 | Future RCWS program | DOWNSTREAM USER | V5 architecture must support optics/FCS/gyro add-on without redesign |
| S11 | N12-RETROFIT-KIT variant | SIBLING PRODUCT | Component commonality (same motors, clutches, controller) |
| S12 | ACH roadmap (SF-A/B/C) | FUTURE CAPABILITY | Data port (RS485/CAN) must be designed for AI plug-in, not retrofitted |

### 3c. ICDM Conflicts

| # | Conflict | Stakeholders | ICDM Resolution |
|---|---------|-------------|-----------------|
| IC-1 | V5 simplicity vs future RCWS extensibility | S1 (simple now) vs S10 (extensible later) | Modular architecture: V5 core = simple. Upgrade = add modules. Data port = always present even if unused. |
| IC-2 | N12 component commonality vs V5 optimization | S11 (same parts) vs S6 (optimized for V5) | Design FOR commonality: same BLDC motor, same gearbox, same EM clutch, same controller. V5 = N12 + structure. |
| IC-3 | Current cost target vs future-proofing | S4 (≤$18K now) vs S10 (architecture cost) | ICDM Innovation Budget: allocate ≤5% BOM ($500) for future-proof features (data port, modular connectors, software expansion). |

## 4. Standards Scan

### 4a. Applicable Standards (from Req List v1.0)

| Standard | Scope | Status |
|----------|-------|:------:|
| MIL-STD-810H | Environment (temp, humidity, salt fog, shock) | ✅ Mapped |
| MIL-STD-882E | Safety (fail-safe, E-stop, runaway protection) | ✅ Mapped |
| IEC 60529 | IP65 sealing | ✅ Mapped |
| STANAG 4568 | Deck interface bolt pattern | ✅ Mapped |
| MIL-HDBK-17 | Structural safety factor 1.5 | ✅ Mapped |
| AWS D1.1 | Weld qualification | ✅ Mapped |
| IEC 61800-5-2 | Servo drive functional safety (STO) | ⚠️ NEW — add to BA |

### 4b. ICDM Standards Extension

| Standard | ICDM Relevance | Action |
|----------|---------------|--------|
| VDI 2221:2019 | Design methodology (updated adaptive framework) | Reference for function structure |
| ISO 56002 | Innovation management system | Innovation KPI framework for ICDM requirements |
| IEC 62443 | Cybersecurity for industrial control (future ACH data port) | Add security-by-design requirement for data port |

## 5. Scope Boundaries (ICDM-informed)

### 5a. V5 Scope (IN)

| Item | Scope | ICDM Note |
|------|:-----:|-----------|
| Motor drive (2 axes) | IN | Core function |
| EM clutch fail-safe (2×) | IN | Differentiator — UNIQUE feature |
| Controller (STM32 + servo) | IN | Include modular expansion port |
| Joystick (2-axis, 10m cable) | IN | Standard interface |
| Encoder (2×) | IN | Position feedback + data output |
| Data port (RS485 + CAN) | IN | **ICDM: future ACH enabler — design as 1st-class feature, not afterthought** |
| IP65 sealing | IN | Marine requirement |
| V1 mount structure (inherited) | IN | 300-unit proven base |
| Elastomer recoil isolation | IN | Motor/gearbox protection |

### 5b. V5 Scope (OUT — future variants)

| Item | Scope | Target Variant |
|------|:-----:|---------------|
| Optics (day/thermal camera) | OUT | V5 + camera add-on (Step 2) |
| Fire control system | OUT | V5 + FCS (Step 3) |
| Gyro stabilization | OUT | N11-STABILIZED |
| AI auto-tracking (SF-A) | OUT | ACH plug-in via data port |
| Remote operation | OUT | V-SMASH-R integration |
| Armor/protection | OUT | Not V5 scope |

### 5c. ICDM Boundary Check

**ICDM Question:** Are there scope items currently OUT that should be IN for innovation readiness?

| Item | Current | ICDM Recommendation |
|------|:-------:|-------------------|
| Data port protocol definition | IN (W) | **Upgrade to D** — without defined protocol, future ACH plugs become custom each time |
| Controller software architecture | Implicit | **Add explicit req** — modular software enables future features without hardware change |
| Power budget margin | Implicit | **Add explicit req** — 30% power headroom for future camera/sensor add-ons |

## 6. ICDM Innovation Context Assessment

### 6a. Innovation Type Classification

| Dimension | Assessment | Evidence |
|-----------|:----------:|---------|
| **Technology novelty** | Incremental (Level 2/5) | COTS motors + standard control + proven mount. No new physics. |
| **Market novelty** | Architectural (Level 3/5) | NEW market category (Level 2 motorized mount). No competitor exists here. |
| **Business model novelty** | Platform (Level 3/5) | V5 = platform for upgrade path V5→camera→FCS→RCWS |
| **Overall innovation level** | **ARCHITECTURAL** | Known technologies, new combination, new market position |

### 6b. Innovation Readiness

| Factor | Score (1-5) | Evidence |
|--------|:----------:|---------|
| Technology maturity | 4 | All TRL ≥6, base TRL 9. 2 gaps = bench-testable |
| Market understanding | 5 | 300 V1 customers, direct access to operators, CEO field knowledge |
| Manufacturing capability | 4 | CNC proven, servo integration = new but COTS |
| Team competence | 3 | Mechanical = 5/5. Servo/control = 2/5 (GAP-1, GAP-2, GAP-3) |
| IP/regulatory | 5 | No ITAR (no optics), no restricted tech, COTS motors |
| **Overall IRL** | **4.2 / 5** | **READY — proceed with controlled gaps** |

### 6c. Creativity Readiness

| Factor | Assessment | ICDM Action |
|--------|:----------:|-------------|
| Cross-functional input | Partial — CEO + WX workshop only | Add: trắc thủ field visit for Phase B integration |
| External benchmarking | Done (RE v1.0 — 8 competitors) | Complete |
| TRIZ resources identified | Partial (in Product Planning) | Formalize in BC (abstraction) |
| Design space explored | Good (3 options per subsystem in Planning) | Confirm in Phase 2 morpho |

## 7. B0 Summary

| Check | Result |
|-------|:------:|
| Phase 0 complete | ✅ All 13 inputs available |
| Existing Phase 1 work assessed | ✅ 86 req, solid, need ICDM augmentation |
| Stakeholders mapped (ICDM extended) | ✅ 8 standard + 4 innovation = 12 total |
| Standards scanned (ICDM extended) | ✅ 6 base + 3 ICDM = 9 standards |
| Scope boundaries defined | ✅ IN/OUT clear, 3 ICDM scope upgrades identified |
| Innovation context assessed | ✅ ARCHITECTURAL innovation, IRL 4.2/5 |
| ICDM conflicts identified | ✅ 3 conflicts, all resolved |

**B0 VERDICT: ✅ PROCEED TO BA** — augment existing 86 req with ICDM extension requirements.

---

*B0 Preflight | helix-task-clarify v3.1 (ICDM) | 2026-04-11*
