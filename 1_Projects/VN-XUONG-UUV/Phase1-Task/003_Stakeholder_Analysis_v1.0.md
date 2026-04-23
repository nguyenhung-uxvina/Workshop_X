---
project: VN-XUONG-UUV
phase: 1
type: stakeholder-analysis
document: "003"
version: 1.0
created: 2026-03-06
status: draft
data_confidence: LOW (10% L2 user-confirmed, 20% L4 analogous systems, 70% L5 assumptions — 4/7 stakeholders uninterviewed)
---

# VN-XUONG-UUV — Doc 003: Stakeholder Analysis v1.0

## 1. Stakeholder Register

| ID | Stakeholder | Organization | Contact Phase | Interview Status |
|----|-------------|-------------|---------------|-----------------|
| S1 | Navy UUV Ops Team | VN Navy — UUV unit | Phase 0-1 | **NOT YET** — FLAGGED |
| S2 | Navy Procurement | VN Navy — procurement dept | Phase 1-2 | **NOT YET** — FLAGGED |
| S3 | UUV Manufacturer | OEM (TBD) | Phase 1 | **NOT YET** — need ICD |
| S4 | Mother Ship CO | VN Navy — ship command | Phase 1-2 | **NOT YET** — FLAGGED |
| S5 | Workshop X | Workshop X (self) | Ongoing | Active — design authority |
| S6 | VN Register | Vietnam Register of Shipping | Phase 3-4 | Not needed yet (prototype) |
| S7 | Maintenance Crew | VN Navy — technical unit | Phase 2-3 | **NOT YET** |

---

## 2. Stakeholder Profiles

### S1: Navy UUV Ops Team (PRIMARY USER)

| Attribute           | Detail                                                                                                 |
| ------------------- | ------------------------------------------------------------------------------------------------------ |
| **Role**            | Operates tender vessel, executes UUV launch/recovery at sea                                            |
| **Influence**       | HIGH — end user, defines operational acceptance                                                        |
| **Interest**        | HIGH — daily users, safety directly affected                                                           |
| **Quadrant**        | Manage Closely                                                                                         |
| **Key Needs**       | 1. Safe recovery in SS 3 (O13)                                                                         |
|                     | 2. UUV not damaged (O15) — they are responsible for UUV                                                |
|                     | 3. Minimal stern deck exposure (O26)                                                                   |
|                     | 4. Clear, simple SOP (O01, O08)                                                                        |
|                     | 5. Reliable first-attempt capture (O14)                                                                |
| **Pain Points**     | No existing UUV LARS experience in VN Navy. No SOP. No training program.                               |
| **Success Metric**  | Can execute L/R cycle independently after training (SC-7)                                              |
| **Engagement**      | Interview for requirements validation (I/S scores). Involve in SOP development. Include in sea trials. |
| **Risk if Ignored** | Product rejected at acceptance trials. Unsafe operations.                                              |

### S2: Navy Procurement

| Attribute           | Detail                                                                                                               |
| ------------------- | -------------------------------------------------------------------------------------------------------------------- |
| **Role**            | Approves budget, defines procurement requirements, signs acceptance                                                  |
| **Influence**       | HIGH — gate keeper for funding and contract                                                                          |
| **Interest**        | MEDIUM — cares about cost, compliance, nội địa hóa                                                                   |
| **Quadrant**        | Manage Closely                                                                                                       |
| **Key Needs**       | 1. Cost within budget (<= $670K prototype) (C-01)                                                                    |
|                     | 2. Nội địa hóa >= 50% (M-05)                                                                                         |
|                     | 3. Compliance path to classification (future production)                                                             |
|                     | 4. Documentation package (design, test reports)                                                                      |
| **Pain Points**     | New product category — no precedent for UUV LARS procurement in VN. Difficulty justifying budget without comparable. |
| **Success Metric**  | Budget approved, contract signed, acceptance certificate issued                                                      |
| **Engagement**      | Cost updates at each gate. Nội địa hóa BOM report. Compliance roadmap.                                               |
| **Risk if Ignored** | Budget not approved. Procurement delayed. Nội địa hóa target missed.                                                 |

### S3: UUV Manufacturer (OEM)

| Attribute           | Detail                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------- |
| **Role**            | Provides UUV interface specifications, cradle/handling requirements                       |
| **Influence**       | MEDIUM — defines UUV physical interface (hard constraint)                                 |
| **Interest**        | HIGH — their product at risk during L/R operations                                        |
| **Quadrant**        | Keep Satisfied                                                                            |
| **Key Needs**       | 1. Zero damage to UUV during L/R (HC-3, O15)                                              |
|                     | 2. Cradle supports UUV at correct points (structural)                                     |
|                     | 3. Electrical/data connectors accessible on cradle                                        |
|                     | 4. Lifting points defined and rated                                                       |
|                     | 5. Environmental limits respected (tilt, shock, vibration)                                |
| **Pain Points**     | May not want to share detailed interface specs. Warranty concerns if LARS damages UUV.    |
| **Success Metric**  | ICD (Interface Control Document) signed. UUV warranty maintained.                         |
| **Engagement**      | Request ICD early (Phase 1). Joint review of cradle design (Phase 2). Witness sea trials. |
| **Risk if Ignored** | Cradle doesn't fit. UUV damaged. Warranty voided. Interface mismatch discovered late.     |
| **CRITICAL ACTION** | Obtain UUV ICD before Phase 2 Conceptual Design — cradle geometry depends on it.          |

### S4: Mother Ship CO

| Attribute           | Detail                                                                                               |
| ------------------- | ---------------------------------------------------------------------------------------------------- |
| **Role**            | Authorizes tender operations from ship, controls crane, manages sea space                            |
| **Influence**       | MEDIUM — operational authority at sea                                                                |
| **Interest**        | LOW-MEDIUM — UUV ops is one of many ship functions                                                   |
| **Quadrant**        | Keep Informed                                                                                        |
| **Key Needs**       | 1. Minimal disruption to ship operations                                                             |
|                     | 2. Towing arrangement safe and simple                                                                |
|                     | 3. Crane operation for UUV transfer < 30 min                                                         |
|                     | 4. Tender can be released/recovered quickly                                                          |
| **Pain Points**     | Additional vessel alongside = collision risk, operational complexity. Crane time is shared resource. |
| **Success Metric**  | Ship CO comfortable with tender ops integrated into ship routine                                     |
| **Engagement**      | Briefing on towing arrangement (Phase 2). Towing SOP review. Invite to sea trials.                   |
| **Risk if Ignored** | Ship CO refuses towing alongside. Crane procedures conflict. Operational rejection.                  |

### S5: Workshop X (Designer/Builder)

| Attribute       | Detail                                                                             |
| --------------- | ---------------------------------------------------------------------------------- |
| **Role**        | Design authority, prototype fabrication oversight, test lead                       |
| **Influence**   | HIGH — design authority, all design decisions                                      |
| **Interest**    | HIGH — company product, reputation                                                 |
| **Quadrant**    | Internal — Manage Closely                                                          |
| **Key Needs**   | 1. Feasible within current capabilities (5-person engineering team + partners)      |
|                 | 2. VN supply chain accessible                                                      |
|                 | 3. Schedule achievable (Musk Sequence priority)                                    |
|                 | 4. Design knowledge captured for future products                                   |
| **Constraints** | 5-engineer team. Must use VN shipyard partners for hull. Limited budget for tooling. |
| **Engagement**  | Self — all phases                                                                  |

### S6: VN Register of Shipping

| Attribute | Detail |
|-----------|--------|
| **Role** | Classification society — hull structural approval, stability, safety equipment |
| **Influence** | LOW (prototype phase) → HIGH (production phase) |
| **Interest** | LOW — not engaged until production intent declared |
| **Quadrant** | Monitor |
| **Key Needs** | 1. Hull scantlings per classification rules |
| | 2. Stability booklet |
| | 3. Safety equipment per regulations |
| | 4. Survey during construction (production phase) |
| **Engagement** | Preliminary consultation Phase 3 (embodiment). Full engagement for production unit. |
| **Risk if Ignored** | Prototype acceptable. Production unit may require redesign if rules not considered early. |

### S7: Maintenance Crew

| Attribute | Detail |
|-----------|--------|
| **Role** | Maintains vessel and LARS between deployments |
| **Influence** | MEDIUM — affects operational availability |
| **Interest** | MEDIUM — ease of maintenance directly impacts workload |
| **Quadrant** | Keep Satisfied |
| **Key Needs** | 1. Standard tools (MA-03: <= 5 specialist tools) |
| | 2. VN-market spare parts (MA-05) |
| | 3. Clear maintenance schedule (MA-01) |
| | 4. Accessible components (no special lifting for routine tasks) |
| | 5. Corrosion protection that works in tropics (M-03) |
| **Pain Points** | Tropical marine environment = aggressive corrosion. Hydraulic systems need skilled technicians. |
| **Engagement** | Review maintenance procedures (Phase 3). Maintenance manual input (Phase 4). |
| **Risk if Ignored** | Poor availability. Premature LARS failure. Maintenance costs exceed budget. |

---

## 3. Influence-Interest Matrix

```
                    HIGH INTEREST
                         |
    KEEP SATISFIED        |    MANAGE CLOSELY
                         |
         S3 (OEM)       |    S1 (Ops Team)
         S7 (Maint)     |    S2 (Procurement)
                         |    S5 (Workshop X)
                         |
  -----------------------+-----------------------
                         |
    MONITOR              |    KEEP INFORMED
                         |
         S6 (Register)  |    S4 (Mother Ship CO)
                         |
                    LOW INTEREST

         LOW INFLUENCE         HIGH INFLUENCE
```

---

## 4. Critical Interfaces & Actions

| Priority | Action | Stakeholder | Phase | Status |
|----------|--------|-------------|-------|--------|
| **1** | Obtain UUV Interface Control Document (ICD) | S3 (OEM) | Before Phase 2 | **BLOCKING** |
| **2** | Validate ODI I/S scores with operators | S1 (Ops Team) | Phase 1 | FLAGGED |
| **3** | Confirm budget and nội địa hóa target | S2 (Procurement) | Phase 1 | FLAGGED |
| **4** | Discuss towing arrangement acceptability | S4 (Mother Ship CO) | Phase 1-2 | FLAGGED |
| 5 | Preliminary classification consultation | S6 (Register) | Phase 3 | Not started |
| 6 | Maintenance crew input on accessibility | S7 (Maint) | Phase 2-3 | Not started |

> **BLOCKING ITEM:** UUV ICD from S3 is needed before Phase 2 can finalize cradle geometry, funnel dimensions, and capture mechanism. Without ICD, cradle design is based on assumed D=400mm, L=5000mm, H=850mm from Phase 0.

---

## 5. Communication Plan

| Stakeholder | Frequency | Format | Content |
|-------------|-----------|--------|---------|
| S1 (Ops Team) | Each gate + sea trials | Meeting + report | Design progress, SOP drafts, trial plans |
| S2 (Procurement) | Each gate | Written report | Cost status, nội địa hóa %, compliance |
| S3 (OEM) | Phase 1 (ICD) + Phase 2 (cradle review) | Technical meeting | Interface specs, cradle design, test plan |
| S4 (Mother Ship CO) | Phase 2 + sea trials | Briefing | Towing SOP, crane procedures, safety |
| S5 (Workshop X) | Continuous | IPARAG vault | All design documentation |
| S6 (Register) | Phase 3 | Consultation | Hull scantlings, stability, compliance path |
| S7 (Maint) | Phase 2-3 | Workshop review | Maintenance procedures, accessibility |

---

*Doc 003 Stakeholder Analysis v1.0 | VN-XUONG-UUV Phase 1 Task Clarification | COD: Offload*
