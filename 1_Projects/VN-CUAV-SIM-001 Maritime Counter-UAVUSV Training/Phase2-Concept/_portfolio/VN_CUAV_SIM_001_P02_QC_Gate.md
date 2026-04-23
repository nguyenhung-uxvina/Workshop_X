---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
pipeline: helix-concept-generate v3.2 --icdm
block: BE
method: P02 QC Gate (S3 Compliance) + CEO Concept Selection
---

# BE CONCEPT SELECTION — VN-CUAV-SIM-001
## P02 QC Gate + ICDM DQM Final Comparison + CEO Decision + Handoff Package

**Ngày:** 2026-04-14
**Pipeline mode:** ICDM-enhanced (retroactive consolidation)

---

## 1. P02 QC GATE — 5-CHECK SCORECARD

| # | Check | PASS/FAIL | Evidence |
|---|-------|:---------:|---------|
| 1 | **Coherence** — Requirements → Function Structure → Morpho → Concepts traceable? | ✅ PASS | 102 reqs → 41 SFs → 31 morpho rows → 4 variant paths. Full traceability chain documented. |
| 2 | **Standards** — MIL-STD, TCVN, IEC compliance confirmed? | ✅ PASS | Standards Quick-Map (12 standards) in Requirements v2.1. No new standards discovered in Phase 2. |
| 3 | **Environment** — Operating conditions (O-10: 0-50°C, 10-95% RH) addressed? | ✅ PASS | M-03 (salt/humidity), O-10 (MIL-STD-810H methods mapped). All concepts indoor-rated. |
| 4 | **Safety** — Sa-01→06 addressed, CFMA completed, E-stop verified? | ✅ PASS | CFMA 10 failure modes scored. All Rev SFD ≤54. E-stop in all concepts. MIL-STD-882E mapped. |
| 5 | **Confidence** — DQM scores credible, assumptions identified, sensitivity stable? | ✅ PASS | 6 explicit + 4 shadow assumptions logged. Sensitivity ROBUST. 3-scenario range 84-99% DQM. |

**P02 QC GATE: ✅ PASS (5/5)**

---

## 2. ICDM DQM FINAL COMPARISON TABLE

| Dimension | LITE PA-2 | FIXED PA-8 | FULL PA-6 | CORTEX PA-9 |
|-----------|:---------:|:----------:|:---------:|:-----------:|
| **DQM (%)** | **93.2%** | **93.5%*** | **97.1%** | **91.8%** |
| VDI 2225 Ri% | 76.0% | 83.8% | 88.3% | 82.5% |
| BOM Cost | $12.5-17.5K | $10.8-14.8K | $28-38K | +$26-35K C2 |
| Sell Price | $50-70K | $55-80K | $120-200K | $300K+ |
| Gross Margin | 55-73% | 73-81% | 64-80% | SW-dominated |
| DQM/Cost Index | 6.2 | **7.3** (best) | 2.9 | N/A (system) |
| Coupling Risk | LOW (11) | LOW (11) | **MEDIUM (16)** | LOW (14) |
| CFMA Critical SFD | 1 (recoil) | 1 (recoil) | 2 (recoil + deck) | 1 (recoil) |
| KG Count | 3 | 3 | 5 | 4 |
| TTM Critical Path | 4 weeks | 4 weeks | 4 weeks | 4 weeks |
| 3-Scenario Spread | 11% | 10% | **9%** (most stable) | 11% |
| Sensitivity | ROBUST | ROBUST | ROBUST | ROBUST |
| Innovation Level | 3.3 (Adaptive) | 3.0 (Adaptive) | 3.5 (Adaptive) | 3.8 (Adaptive+) |
| IRL | 3.4 | 3.4 | 3.2 | 3.0 |
| Platform Commonality | Reference (100%) | 90% | 75% | 50% (+100% per node) |
| Requirements | 105 (76D) | 109 (82D) | 122 (95D) | 127 (97D) |

*FIXED adjusted: A7 motion removed (segment N/A)

---

## 3. CEO DECISION PACKAGE

### Strategy Context

VN-CUAV-SIM-001 là **product line** (4 variants), không phải single product. Quyết định concept selection = quyết định **phát triển platform + lead product + variant sequence**.

### Decision Framework

```
QUESTION 1: Which variant is the LEAD PRODUCT (develop first)?
QUESTION 2: What is the variant development SEQUENCE?
QUESTION 3: What are the GO/NO-GO conditions for each variant?
```

### Evidence Summary per Variant

**PA-2 LITE — Lead Product Candidate**
- ✅ Highest DQM/Cost (6.2) — best unit economics
- ✅ Reference platform — all other variants derive from LITE
- ✅ Lowest complexity (11 coupling, 3 KGs)
- ✅ Smallest room (6×8m) — easiest deployment
- ✅ Existing customer contact (HD128 Hải quân)
- ✅ Physical gate 2026-05-07 (SS1 PoC already planned)
- ⚠️ Single station — no crew training (B2 CSR 22%)
- **Recommendation: DEVELOP FIRST**

**PA-8 FIXED — Second Variant Candidate**
- ✅ Best DQM/Cost (7.3) — highest margin (73-81%)
- ✅ Lowest BOM ($10.8-14.8K) — no motion platform
- ✅ 90% platform commonality with LITE
- ✅ Unique market segment (đảo/nhà giàn DK1 — no competitor)
- ⚠️ Needs 5 FIXED-exclusive 3D environments (content development)
- **Recommendation: DEVELOP SECOND (after LITE ships)**

**PA-6 FULL — Flagship Candidate**
- ✅ Highest absolute DQM (97.1%) — best technical quality
- ✅ Shared deck = competitive moat (no competitor <$200K)
- ✅ Most stable (9% 3-scenario spread)
- ⚠️ MEDIUM coupling risk (16) — shared deck vibration
- ⚠️ Highest complexity (122 reqs, 95D)
- ⚠️ 5 additional KGs (Matrox, shared deck, crew coordination SW)
- **Recommendation: DEVELOP THIRD (after LITE + FIXED validate platform)**

**PA-9 CORTEX — Future Capability**
- ✅ SW-only on existing nodes — zero HW development
- ✅ Highest revenue per deployment ($300K+)
- ✅ Recurring revenue ($5K/node/yr)
- ⚠️ Requires ≥2 deployed nodes to demonstrate
- ⚠️ WAN sync over VSAT = untested
- **Recommendation: DEVELOP FOURTH (after ≥3 standalone nodes deployed)**

### Proposed Development Sequence

```
PHASE 3 → LITE PA-2 (lead product)
  ↓ Ship first unit → validate platform
PHASE 3 → FIXED PA-8 (parallel content development, shared HW)
  ↓ Ship after LITE validates
PHASE 3 → FULL PA-6 (after LITE + FIXED validate shared cradle/MWI/scoring)
  ↓ Ship after shared deck PoC
PHASE 3 → CORTEX PA-9 (after ≥3 nodes in field)
  ↓ SW development only, deploy on existing nodes
```

---

## 4. CEO: CONCEPT SELECTION (NON-DELEGABLE)

```
═══════════════════════════════════════════════════════════════
      CEO CONCEPT SELECTION — VN-CUAV-SIM-001
═══════════════════════════════════════════════════════════════

P02 QC Gate:        ✅ PASS (5/5)
Sensitivity:        ✅ ROBUST (ranking stable)
All concepts viable: ✅ YES (DQM >84% even pessimistic)

LEAD PRODUCT:       PA-2 LITE (recommended)
SEQUENCE:           LITE → FIXED → FULL → CORTEX

CEO: Xác nhận hoặc điều chỉnh:

(A) ✅ APPROVE lead product PA-2 LITE + sequence as proposed
(B) 🔄 CHANGE lead product to: _______________
(C) 🔄 CHANGE sequence to: _______________
(D) ⏸️ HOLD — cần thêm thông tin trước khi quyết định
(E) 📝 CONDITIONAL APPROVE — approve with conditions: _______________

═══════════════════════════════════════════════════════════════
```

---

## 5. HANDOFF PACKAGE (draft — finalized after CEO decision)

### Phase 3 Embodiment Inputs (for selected lead product)

| Item | Content | Source |
|------|---------|--------|
| Selected concept | PA-2 LITE STANDARD (pending CEO confirm) | BC VDI 2225 + BE selection |
| Requirements | LITE PA-2 Requirements v1.0 (105 reqs, 76D) | Phase 2 variant derivation |
| Function Structure | 6-Flow v1.0 (7 L1, 41 L2) | Phase 1 BD |
| Morphological Matrix | Unified (31 SFs, DSO scored) | Phase 2 BB |
| Selected WPs per SF | Left-path DSO (all ★ selections) | Phase 2 BB |
| CFMA weak spots | 2 CRITICAL (recoil, deck), 4 IMPORTANT | Phase 2 BD |
| Assumption Register | 6 explicit + 4 shadow | Phase 2 BD |
| Knowledge Gaps | 7 KGs, critical path 4 weeks | Phase 2 BD RTA |
| Cost target | BOM ≤$18K, Sell $50-70K | FORGE + ICDM CDTC |
| ICD v1.5 | 22 interfaces defined | System-Arch |
| Domain budgets | Power 2.0kW, Latency ≤50ms | System-Arch |
| ICDM evaluation criteria | Group A (7, 79.4%), Group B (11, 98.2%) | ICDM BE |

### Team/Supplier/Budget Transition (§6.5.3)

| Resource | Phase 2 Status | Phase 3 Action |
|----------|:-------------:|----------------|
| MECH (SS1+SS3) | Design complete | **Fabrication: CNC mockup, steel frame, assembly** |
| ELEC (SS1+SS3) | Component selected | **Procurement: encoders, solenoid, ESP32, BTS7960** |
| SW (SS2+SS4+SS5) | Architecture defined | **Development: Unity 6 project setup, ballistic integration, GUI** |
| Projector | 3 candidates identified | **Procurement: benchmark 3 models, select, order** |
| GPU | RTX 4090 specified | **Procurement: order 1× for PoC** |
| Unity developer | Recruitment started | **Hire: ≥1 mid-level by Phase 3 start** |
| Budget Phase 3 | — | **NRE estimate: $18.5-27.5K (see LITE concept description)** |

### Physical Gate Schedule

| Gate | Date | Deliverable | Go/No-Go |
|------|:----:|-------------|----------|
| SS1 Weapon Station PoC | **2026-05-07** | Cradle + WP-A solenoid + WP-F masselotte + encoder + trigger + NFC | Recoil ≥25N? Latency ≤10ms? NFC reliable? |
| SS2 Display PoC | 2026-06 (TBD) | 3× projectors + RTX 4090 + Unity 6 triple display | ≥60fps? Latency ≤50ms? Projector lag ≤17ms? |
| SS3 Motion PoC | 2026-06 (TBD) | 2-DOF platform + ESP32 + seat | Roll ±12°? Smooth at 50Hz? No vibration→encoder noise? |
| Integration PoC | 2026-07 (TBD) | Full system first power-on | All SS1-SS5 communicate? End-to-end latency? |

---

*BE Concept Selection — awaiting CEO decision.*
