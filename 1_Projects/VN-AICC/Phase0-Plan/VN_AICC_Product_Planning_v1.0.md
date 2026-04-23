---
created: 2026-02-01
updated: 2026-04-09
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: VN-AICC
status: approved
mode: SOLO
scope: PORTFOLIO
gate0: PASS (retroactive)
gate1: PASS (Quality Gate passed)
gate2: PASS (Hybrid C+ selected, VDI 2225 0.730)
note: "Retroactive consolidation into v3.0 schema. Phase 1-2 done, Phase 3 paused on CM4 latency."
---

# Product Planning — VN-AICC (AI Command & Control Console)

> Consolidated from Phase 1-3 docs. AICC = dedicated Human-AI Interface Platform for IRONMESH ecosystem.

---

## 1. Stimulus Classification (Step 1)

**Stimulus:** Autonomous AI systems (IRONMESH) need a dedicated physical interface for human-in-the-loop oversight. Military AI contracts REQUIRE human decision authority with audit trail. No dedicated defense-grade Human-AI interface product exists — operators use generic laptops/tablets without safety mechanisms.

**Source:** Company (IRONMESH ecosystem gap) + Market (military AI human-in-the-loop requirement) + Environment (AI regulation trending toward mandatory human oversight)

---

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase

```
[Introduction] → Growth → Maturation → Saturation → Decline
      ↑
   VN-AICC (category creation — first dedicated Human-AI defense console)
```

Human-AI interface for defense = INTRODUCTION phase globally. No established product category. Category creation opportunity.

### 2b. Product-Market Matrix (Ansoff)

```
                    EXISTING MARKETS    NEW MARKETS
EXISTING PRODUCTS   Penetration         Market Dev
NEW PRODUCTS        ★ PRODUCT DEV       Diversification
                    (VN-AICC)
```

**PRODUCT DEVELOPMENT:** New product (AICC) for existing market (VN military). Medium-high risk.

### 2c. Company Competence Assessment

| Dimension | WX Capability | Gap | Action |
|-----------|-------------|-----|--------|
| Embedded SW (IRONMESH) | YES — core competence | No | 55% reuse |
| Edge AI (CM4/Hailo-8) | PARTIAL — CM4 latency unvalidated | Yes — CRITICAL | Prototype sprint |
| Hardware (CNC, PCB) | YES — enclosure + carrier board | No | — |
| Display/HMI design | PARTIAL — functional, not UX-optimized | Yes | UX review needed |
| Military ruggedization | PARTIAL — IP65 from BB-01 experience | Yes | MIL-STD-810H testing |
| Defense market access | YES — existing Navy relationships | No | — |

### 2d. Technology Readiness Level

| Technology | TRL | Evidence | Risk |
|-----------|-----|---------|------|
| IRONMESH state machine | 6 | Proven in V-SMASH, BB-01 [L2-prototype] | LOW |
| CM4 compute module | 5 | COTS proven globally [L4-competitive] | LOW |
| CM4 AI inference latency | **3** | **UNVALIDATED** [TRL-UNVERIFIED] | **HIGH — blocking** |
| HW interrupt E-stop | 7 | Standard embedded pattern [L4-competitive] | LOW |
| LoRa/IRONMESH comms | 6 | Proven in BB-01 [L2-prototype] | LOW |
| Multi-zone display | 5 | Standard HMI pattern [L4-competitive] | LOW |
| Graduated confirmation | 4 | Conceptual, needs prototype [L5-ASSUMPTION] | MEDIUM |
| MIL-STD ruggedization | 4 | COTS ruggedized enclosures exist [L4-competitive] | MEDIUM |

**Overall system TRL: 4** (limited by CM4 inference latency = TRL 3, accepted with prototype sprint plan)

**PROCEED gate:**
- [x] TRL ≥ 4 — YES (system level; CM4 latency = TRL 3 accepted with circuit breaker sprint)
- [x] Local content ≥ 40% — YES (estimated 55-65%, enclosure + assembly + SW = local)
- [x] Competitive advantage clear — YES (only dedicated Human-AI defense console; IRONMESH lock-in)

---

## 3. Need-Strength Matrix (Step 3)

```
                         WX STRENGTHS
                    Embedded   Edge AI   HW/CNC   Defense
                    SW/IRON    CM4       Design   Market
CUSTOMER           MESH       Hailo-8   Encl.    Access
NEEDS    ──────────────────────────────────────────────
HIGH     Human-in-loop │ ★★★  │ ★★     │ ★★     │ ★★★
         Safety audit   │ ★★★  │ ★      │ ★      │ ★★★
         Real-time SA   │ ★★   │ ★★★   │ ★      │ ★★
MED      Ruggedized HW  │ ★    │ ★      │ ★★★   │ ★★
         Multi-agent    │ ★★★  │ ★★★   │ ○      │ ★★
LOW      OTA updates    │ ★★★  │ ★      │ ○      │ ★
```

**★★★ Preferred search fields:**
1. Embedded SW × Human-in-loop + Safety audit — IRONMESH state machine = core
2. Edge AI × Real-time SA + Multi-agent — CM4/Hailo-8 inference
3. Defense Market × Human-in-loop + Safety audit — military compliance

---

## 4. Portfolio Assessment (Step 4)

| Product | Market Appeal (1-5) | WX Strength (1-5) | Score | Zone |
|---------|--------------------|--------------------|-------|------|
| **VN-AICC** | **4** (military AI oversight mandatory) | **3** (IRONMESH yes, CM4 unvalidated) | **12** | **DECISION** |
| VN-XUONG-UUV | 5 | 3 | 15 | TARGET |
| VN-CUAV-SIM-001 | 5 | 4 | 20 | TARGET |
| BB-01 LOMAH | 4 | 3 | 12 | DECISION |

**AICC zone: DECISION** — strategically critical (enables IRONMESH ecosystem human-in-the-loop), but WX strength limited by unvalidated CM4. Investment justified by platform role.

---

## 5. Knowledge Audit + Idea Generation (retroactive)

Phase 1-2 completed with:
- Function structure: 18 sub-functions in 5 groups (F1-F5)
- Morphological matrix: 8 sub-functions × 3-4 variants each
- 3 concept variants generated (A: Platform Express, B: Autonomous Architect, C+: Hybrid Defense Sentinel)

**Selected concept: Hybrid C+ "Defense Sentinel Optimized"** — VDI 2225 score 0.730 (above 0.70 threshold). Safety 4/4, Testability 4/4, 55% IRONMESH reuse, 5-7 weeks to prototype.

---

## 6-7. Product Proposal

**See separate file:** `VN_AICC_Product_Proposal_v1.0.md`

---

## 8. Gate 0 Quick Check

| Criterion | Check | Pass? |
|-----------|-------|-------|
| TRL ≥ 4? | System TRL 4 (CM4 latency = TRL 3, accepted with sprint) | ✓ CONDITIONAL |
| Local content ≥ 40%? | ~55-65% (enclosure, assembly, SW local) | ✓ YES |
| Competitive advantage? | Only dedicated defense Human-AI console. IRONMESH lock-in. | ✓ YES |
| Within WX capacity? | Self-funded, $50-400 BOM range | ✓ YES |
| Portfolio alignment? | Enables IRONMESH ecosystem human oversight | ✓ YES |
| No IP blockers? | Open-source CM4, custom SW | ✓ YES |

**Gate 0: PASS (conditional on CM4 latency validation sprint)**

---

## Appendix: CEO Decisions Record

| Date | Decision | Basis |
|------|----------|-------|
| 2026-02 | Hybrid C+ selected | VDI 2225 0.730, safety 4/4 |
| 2026-03 | Prototype sprint (circuit breaker) | Break AICC-CORTEX circular dependency |
| 2026-03 | Musk Sequence: BB-01 first, then AICC | Resource allocation |
| 2026-04-09 | Reactivated from Archives → Tier 2 | CEO decision, portfolio alignment |

---

*Product Planning v1.0 | VN-AICC | Retroactive P&B §3.1-3.3 consolidation | 2026-04-09*
