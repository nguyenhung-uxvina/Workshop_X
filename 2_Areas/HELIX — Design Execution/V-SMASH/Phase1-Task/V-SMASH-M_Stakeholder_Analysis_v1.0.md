---
project: V-SMASH-M
phase: 1
type: stakeholder-analysis
prompt: P12
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
inputs: [V-SMASH-M_Product_Proposal_v1.0.md, V-SMASH-M_ODI_Report_v1.1]
---

# V-SMASH-M (Micro-Sight) — Stakeholder Analysis (P12)

> **Purpose:** Map all stakeholders, interests, requirements, and conflicts BEFORE writing requirements.
> **Gate criterion:** All conflicts documented with resolution approach. All info gaps assigned.

---

## 1. Stakeholder Map

| # | Stakeholder | Role | Primary Interest | Key Requirements They'll Impose | Conflict Risk |
|---|-------------|------|-----------------|--------------------------------|---------------|
| S1 | **Vietnamese Army Logistics Command** | Customer (procurement authority) | Lowest unit cost at battalion scale; single standardized SKU; reliable supply chain | ≤$500/unit (OM14); ≥10,000 unit lot sizes; no per-unit configuration; 12-month warranty; Vietnamese documentation | LOW |
| S2 | **Infantry Rifleman** | End-user (daily operator) | "Doesn't slow me down, works when I need it, don't have to think about it" | ≤0.5 kg (OM15); power-on ≤3s (OM01); "follow the dot" simplicity (OM02); survives rain, dust, drops | HIGH |
| S3 | **Battalion Armorer / Depot Technician** | Maintainer (field + depot repair) | No specialized tools or training; fast diagnosis; cheap spares | Field-replaceable battery (no disassembly); LED fault codes (no screen menus); MTBF ≥2,000h; ≤3 replaceable sub-assemblies | MEDIUM |
| S4 | **Battalion/Company Commander** | Operational authority (training & tactics) | Measurable tactical advantage; minimal training burden; ROE compliance | Training time ≤2h to competence (OM02); Pk ≥40% at 150m (OM09); clear ROE integration (classification confidence — object type only, NOT friend/foe); scalable to platoon-level tactics | MEDIUM |
| S5 | **Division/Brigade Safety Officer** | Safety authority (live-fire approval) | Zero fratricide; safe failure mode; compliance with weapons safety regulations | Classification confidence gating FR-IFF-01/02 (OM07) — classifies drone/bird/unknown, NOT friend/foe; NO autonomous fire capability; safe power failure mode (indicator OFF, not random); visible safety markings | HIGH |
| S6 | **Ministry of Defence / TCVN Regulatory** | Regulator (type certification & standards) | Defense sovereignty; local content; standards compliance; export potential | TCVN compliance; ≥60% local content by value; full Vietnamese-language documentation; type certification test protocol | LOW |
| S7 | **Workshop X Production** | Manufacturer (builds the product) | Buildable with existing tooling; manageable BOM complexity; testable at production rate | PCB within existing SMT line capability; injection-moldable housing (no CNC-only parts); ≤50 unique BOM components; production test fixture feasible | MEDIUM |
| S8 | **Military Logistics System** | Transporter & storage (moves product to units) | Standard packaging; transport ruggedness; shelf life; spare parts interoperability | MIL-STD-810H transport vibration & shock; IP67 minimum; ≥5-year shelf life (battery excluded); standard military packaging dimensions | LOW |

**Total: 8 stakeholders mapped (exceeds P12 minimum of 6).**

---

## 2. Conflict Analysis

### Conflict C1: Weight vs. Capability

| Field | Detail |
|-------|--------|
| **Parties** | S2 (End-user: ≤0.5 kg) vs. S4 (Commander: more detection range), S5 (Safety: IFF display) |
| **Nature** | Longer detection range (OM03) requires larger optic → more weight. Classification confidence indicator adds display area. Both push weight above 0.5 kg threshold. |
| **Resolution approach** | **Weight is D (Demand); detection range is W (Wish).** Set 0.5 kg as hard ceiling. Detection range at 200m is target; accept 150m minimum if weight-constrained. IFF indicator uses same OLED display as lead indicator (no additional HW). |
| **Decision authority** | KN (product architect) — if weight exceeds 0.5 kg at Phase 3 layout, cut detection range first. |

### Conflict C2: Unit Cost vs. Reliability

| Field | Detail |
|-------|--------|
| **Parties** | S1 (Customer: ≤$500) vs. S3 (Maintainer: MTBF ≥2,000h, field-serviceable) |
| **Nature** | Higher-reliability components (conformal coating, mil-spec connectors) increase BOM cost. Field-serviceable design (modular connectors) adds cost vs. sealed potted design. |
| **Resolution approach** | **Cost is D; MTBF is D at ≥1,500h, W at ≥2,000h.** Use commercial-grade components with conformal coating (proven cost-effective in V-L BOM studies). Allow battery-only field replacement; all other repair at depot level. |
| **Decision authority** | KN — if BOM exceeds $400, reduce maintainability features first (move more repairs to depot). |

### Conflict C3: Sealed Housing vs. Field Serviceability

| Field | Detail |
|-------|--------|
| **Parties** | S2/S8 (End-user/Logistics: IP67 sealed, survives everything) vs. S3 (Maintainer: access for repair) |
| **Nature** | IP67 requires sealed enclosure. Field battery replacement requires an opening → ingress path. |
| **Resolution approach** | **IP67 is D for main body; battery compartment IP65 with captive O-ring gasket.** Battery door is the ONLY field-accessible opening. All electronics sealed behind potted inner shell. Trade: IP65 battery door vs. fully sealed. |
| **Decision authority** | Workshop X production lead — they validate O-ring seal reliability in production. |

### Conflict C4: AI Latency vs. Safety Gating

| Field | Detail |
|-------|--------|
| **Parties** | S2 (End-user: ≤150ms latency, OM05) vs. S5 (Safety Officer: classification confidence check before showing indicator) |
| **Nature** | IFF classification (FR-IFF-01/02) adds processing cycles. If IFF runs sequentially after detection, latency increases beyond 150ms target. |
| **Resolution approach** | **Both are D.** Run IFF classification IN PARALLEL with lead computation — same YOLOv8-nano inference produces both object class (drone/bird) and bounding box. Confidence indicator updates simultaneously with lead indicator, not sequentially. Latency budget: 100ms detection+classification + 50ms lead computation = 150ms total. |
| **Decision authority** | KN — if parallel pipeline proves infeasible on Jetson Nano, escalate to architecture review (may need Jetson Orin Nano). |

### Conflict C5: Miniaturization vs. Manufacturability

| Field | Detail |
|-------|--------|
| **Parties** | S2 (End-user: ≤0.5 kg, clip-on form factor) vs. S7 (Workshop X: buildable with existing tooling) |
| **Nature** | 0.5 kg budget is tight for: Jetson module + CMOS sensor + optics + OLED display + battery + housing. May require tighter PCB tolerances or custom heat sink that exceeds Workshop X's standard capability. |
| **Resolution approach** | **Weight is D; standard tooling is W.** Allow 1-2 custom parts (heat sink, optic mount) that Workshop X outsources to precision machining partner. All other parts stay within standard capability. Phase 3 layout review validates. |
| **Decision authority** | Workshop X production lead — they confirm outsourcing feasibility and impact on unit cost. |

---

## 3. Information Gaps

| # | Gap | Why Needed | Who to Ask | By When | Priority |
|---|-----|-----------|-----------|---------|----------|
| G1 | **Actual infantry weapon inventory** (% with Picatinny rail vs. non-standard) | OM16 (weapon compatibility) — determines if adapter kit is core or optional | Logistics Command arms registry | Before P13 | HIGH |
| G2 | **Segment A size validation** (150K riflemen assumption) | Drives business case, lot sizing, and production rate requirements | Logistics Command planning officer | Before P13 | HIGH |
| G3 | **$500 price point acceptability** | OM14 is #1 opportunity (Opp=19). If actual budget is $300 or $700, entire BOM changes | 3-5 battalion logistics officers (informal) | Before P15 gate | HIGH |
| G4 | **Workshop X Jetson Nano thermal capability** | 0.5 kg weight budget leaves minimal heat sink margin. Can Workshop X test Jetson thermal in sealed enclosure? | Workshop X thermal/production engineer | During P13 | MEDIUM |
| G5 | **Field misclassification data** (drone vs. bird in Vietnamese terrain) | OM07 (Opp=18). Need baseline data on bird species at typical engagement altitudes (50-200m) to set realistic false positive rate | V-L field test team (when available) or ornithology reference | Before Phase 2 | MEDIUM |
| G6 | **TCVN applicable standards for clip-on weapon accessories** | S6 (MoD/TCVN) compliance — no known TCVN standard specifically for AI weapon accessories. Need to confirm which TCVN + MIL-STD apply | MoD standards office / TCVN registry | During P13 | MEDIUM |
| G7 | **Battery format** (standard military cell vs. commercial Li-ion) | S3 (Maintainer) and S8 (Logistics) — standard battery simplifies supply chain but may be heavier. Commercial = lighter but non-standard. | Logistics Command battery supply officer | During P13 | LOW |

---

## 4. Stakeholder Priority Matrix

| Impact on V-M success | High Influence (can block) | Low Influence (can advise) |
|----------------------|---------------------------|---------------------------|
| **High interest** | S1 (Customer — signs order), S5 (Safety — blocks live-fire approval) | S2 (End-user — uses daily but no procurement power) |
| **Low interest** | S6 (MoD — certifies but V-M is one of many products), S7 (Workshop X — builds but has other orders) | S3 (Maintainer), S4 (Commander), S8 (Logistics) |

**Key management actions:**
- **S1 (Logistics Command):** Engage early on price point (G3) and lot sizing. Their approval = go/no-go.
- **S5 (Safety Officer):** Present classification confidence gating design at Phase 2 concept review. Their rejection = program stop.
- **S2 (End-user):** Weight and simplicity validated via Phase 3 prototype ergonomic trial. No formal gate, but failure here = field rejection.
- **S7 (Workshop X):** Involve in Phase 3 layout review (DfM). Their constraints shape housing design.

---

## HITL CHECKPOINT

**5 conflicts documented. 7 information gaps assigned.**

Conflicts C1-C5 resolution approaches above require your review:

- **C1:** Weight ceiling (0.5 kg) is hard D — detection range trades first. Agree?
- **C2:** MTBF ≥1,500h is D, ≥2,000h is W. Cost ceiling holds. Agree?
- **C3:** IP65 battery door (vs full IP67) is the trade. Agree?
- **C4:** Parallel IFF + lead computation — architecture assumption. Agree?
- **C5:** Allow 1-2 outsourced precision parts. Agree?

**[SAFETY-CONFLICT] note:** No safety conflicts detected that override customer requirements. S5's IFF gating (C4) is resolved by parallel processing — both latency and safety targets met without degrading either. If parallel proves infeasible, **safety (IFF) takes priority over latency** per SAFETY_OVERRIDE rule.

---

**Gate to P13:** All 5 conflicts have resolution approaches. All 7 gaps assigned to sources with priority. Ready for requirements generation.
