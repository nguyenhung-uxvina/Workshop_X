---
created: 2026-04-09
type: product-planning
method: Pahl & Beitz §3.1-3.3
version: v1.0
project: VN-MGM
status: approved
lead_product: V1-NAVAL-12.7 (manual pedestal mount, $5-8K)
---

# Product Planning — VN-MGM Mount/Gimbal System

## 1. Stimulus Classification (Step 1)

| Source | Classification |
|---|---|
| **Company** | IRONMESH re-evaluation. VN-MGM-001A (12.7mm naval mount) already at Phase 1 in archives. |
| **Market** | VN Navy uses imported gun mounts ($15-20K). 60% cost reduction achievable. |

**Stimulus:** Mount/gimbal is a cross-cutting mechanical platform serving multiple WX products (CUAV-SIM weapon station, live fire mounts, target mounting). Archived VN-MGM-001A provides ready foundation with Phase 1 requirements complete.

## 2. Situation Analysis (Step 2)

### 2a. Life Cycle Phase
Global: Maturation. VN domestic: Growth (import substitution policy).

### 2b. Ansoff Matrix
Product Development. Low-medium risk — well-understood mechanical engineering.

### 2c. Company Competence

| Dimension | WX Capability | Gap | Action |
|---|---|---|---|
| Technical | CNC machining, steel/aluminum, mech design | Slewing ring sourcing, recoil test | Supplier identification |
| Market | VN Navy relationships (VN-AST, VN-XUONG) | Low gap | Leverage existing |
| Financial | Self-funded | $45K R&D [L4-ESTIMATE] | Manageable |
| Production | CNC small batch, 90%+ local content | Recoil test facility | Use military range |

### 2d. Technology Readiness Level

| Technology | TRL | Evidence | Risk |
|---|---|---|---|
| Slewing ring bearing | TRL 7 | COTS suppliers [L3-STANDARDS] | Low |
| CNC steel/aluminum structure | TRL 8 | WX core competence [L2-PROTOTYPE] | Low |
| Manual traverse/elevation | TRL 7 | Standard design [L3-STANDARDS] | Low |
| Recoil absorption (50 kN) | TRL 5 | Designed in archive, untested [L4-ESTIMATE] | Medium |
| STANAG 4568 interface | TRL 6 | Published standard [L3-STANDARDS] | Low |
| Servo drive (motorized) | TRL 5 | COTS servos, integration needed [L4-ESTIMATE] | Medium |
| Marine corrosion protection | TRL 6 | Standard coatings + SS316 [L3-STANDARDS] | Low |

**Gate: PROCEED** — V1 manual mount TRL ≥6 across all key tech.

## 3-4. Need-Strength + Portfolio
Preferred fields: naval mount × CNC + mech design + marine + customers. V1 = TARGET (invest).

## 5. Knowledge Audit
VN-MGM-001A archive = full Phase 1 (requirements, BOM, environment analysis). No research gaps.

## 6. Idea Selection

| Rank | Idea | Score | Key Strength |
|---|---|---|---|
| 1 | SIM-CRADLE | 3.77 | CUAV-SIM synergy, lowest risk |
| 2 | UNIVERSAL-ADAPTER | 3.55 | Modular kit, consumable |
| 3 | NAVAL-12.7 | 3.25 | Proven archive design, credibility |
| 4 | TRIPOD-PORTABLE | 3.05 | Land market |
| 5 | MOTORIZED | 2.55 | High capability, highest risk |

**CEO Decision:** V1 = NAVAL-12.7 (credibility-first, despite #3 in scoring). Manufacturing credibility enables all subsequent variants.

## 7. Product Proposal → See separate file

## 8. Gate 0

| Criterion | Check | Pass? |
|---|---|---|
| TRL ≥4? | Manual mount all TRL ≥6 | ✅ |
| Local content ≥40%? | 90%+ achievable (CNC, steel, assembly local) | ✅ |
| Competitive advantage? | 60% cost reduction vs imports [L4-ESTIMATE] | ✅ |
| Within financial capacity? | $45K R&D [L4] | ✅ |
| Portfolio alignment? | Supports CUAV-SIM, BB-01, naval ecosystem | ✅ |
| No IP/regulatory blockers? | Standard mechanical design, no restricted tech | ✅ |

**Gate 0: PROCEED**

## Appendix: CEO Decisions

| # | Decision | Date | Rationale |
|---|---|---|---|
| 1 | V1 = NAVAL-12.7 (not SIM-CRADLE despite higher score) | 2026-04-09 | Credibility-first: proven naval mount establishes WX as mount manufacturer |
| 2 | TRL validated | 2026-04-09 | Manual mount all TRL ≥6 |
| 3 | Knowledge gaps accepted | 2026-04-09 | Archive provides Phase 1 foundation |
| 4 | 5-variant portfolio confirmed | 2026-04-09 | NAVAL → SIM → ADAPTER → TRIPOD → MOTORIZED |
