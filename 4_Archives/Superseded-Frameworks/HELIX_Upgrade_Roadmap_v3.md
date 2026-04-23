---
created: 2026-03-16
updated: 2026-03-16
type: sop
status: active
tags: [#type/sop, #status/active, #topic/systems-thinking]
---

# HELIX Upgrade Roadmap v3 — Pahl-Beitz × AI × Defense

> Sources: 4 NLM notebooks (Pahl-Beitz Systematic, THIẾT KẾ Framework, Defense AI Integration, Thiết kế Kỹ thuật Hệ thống)
> Three Laws: Triple Helix, 6-Flow Ontology, DfU Lifecycle
> Session 50 analysis. Implement next session.

---

## Three Laws (from NLM cross-analysis)

1. **Triple Helix:** Mech/Elec/AI concurrent + sync points. Sequential gates = integration debt.
2. **6-Flow Ontology:** E/M/S + D/C/T. Data has semantics; Computation has thermal limits; Trust has authority boundaries.
3. **DfU Lifecycle:** AI products never "done" — continuous deploy→monitor→retrain→update loop.

---

## Skill Upgrades (10 items, prioritized)

### Priority 1 — High Impact (next session)

| # | Skill | Upgrade | What to Add |
|---|-------|---------|-------------|
| 1 | `/helix-task-clarify` | Probabilistic Demands | Add PD category: AI requirements with confidence intervals, degradation bounds. Example: "accuracy ≥ 95% at 90% confidence" vs binary "accuracy ≥ 95%" |
| 2 | `/helix-embody-realize` | DfU Checklist | Add DfX section: OTA update path, model rollback mechanism, computational headroom (≥30%), data collection port, monitoring endpoint |
| 3 | `/helix-quality-gate` | Cross-Domain Sync Check | Add gate item: "Are Mech/Elec/AI domain states synchronized? ICD versions aligned? Shadow assumptions validated?" |

### Priority 2 — Medium Impact

| # | Skill | Upgrade | What to Add |
|---|-------|---------|-------------|
| 4 | `/helix-concept-generate` | Coupling Analysis | Add after VDI 2225: Assumption Register per concept, 3-Scenario eval (optimistic/nominal/pessimistic), cross-domain coupling matrix |
| 5 | `/helix-sync-protocol` | Interface Freeze Protocol | Add freeze order: data format first → physical interface → electrical → thermal. Enforce in monthly sync |
| 6 | `/helix-integration-debt` | Quantified Debt | Add metrics: hours to resolve per ICD issue, cost of delay, debt accumulation rate. Not just "open/closed" |

### Priority 3 — New Skills

| # | Skill | Purpose | When |
|---|-------|---------|------|
| 7 | `/helix-shadow-dev` (new) | Each domain maintains assumption model about other domains. Validate at sync points. | After P2 implemented |
| 8 | `/helix-dfach` (new) | ACH-specific DfX checklist: commodity HW selection, AI compensation path, sensor→data pipeline, edge inference constraints | After P2 |

### Priority 4 — Enhancements

| # | Skill | Upgrade | What to Add |
|---|-------|---------|-------------|
| 9 | `/helix-detail-finalize` | Update Pipeline Spec | Add deliverable: operational update lifecycle document (how to retrain, deploy OTA, rollback) |
| 10 | `/helix-6flow-mapper` | Already correct ✅ | Workshop X 6-flow (E/M/S/D/C/T) matches THIẾT KẾ framework. No change needed. |

---

## Vietnam Defense Constraints (from NLM)

| Constraint | Impact on HELIX | Mitigation |
|-----------|----------------|------------|
| Cross-domain engineers very scarce | Can't parallelize domains easily | ACH: simplify HW → reduce domains needed |
| V&V infrastructure very low | Testing bottleneck | Build minimal test rigs per product (OI items) |
| Data collection slow (3-12 months) | AI model delay | Design data collection INTO product from Phase 1 |
| QCVN + MIL-STD compliance | Additional requirements | Add compliance check to `/helix-task-clarify` PD section |
| Tropical/marine environment | Material constraints | Already handled in embodiment DfX |

---

## Implementation Plan

| Session | Items | Time | Status |
|---------|-------|------|--------|
| 51 | P1: task-clarify + embody + quality-gate | ~45 min | ✅ Done |
| 51 | P2: concept-generate + sync-protocol + integration-debt | ~30 min | ✅ Done |
| 51 | P3: shadow-dev + dfach (new skills) | ~20 min | ✅ Done |
| 51 | P4: detail-finalize enhancement | ~10 min | ✅ Done |

**Total: ~2.25 hours across 4 sessions**

---

## Galaxy Candidates (from this analysis)

- [ ] "Clock Speed Mismatch Tax — Khi AI Sprint Nhanh Hơn Cơ Khí Gate" → cluster G (Pahl-Beitz)
- [ ] "Data Là Vật Liệu Thứ Tư — Sensor Quyết Định AI Quality" → cluster G
- [ ] "Integration Debt — Nợ Tích Lũy Lũy Thừa Giữa Các Domain" → cluster G (đã có note tương tự trong ICD)

**Decision:** Promote in next session after deeper reflection (Productive Forgetting principle).
