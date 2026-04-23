---
project: IRONMESH — Workshop X Portfolio
type: freeze-order
version: 1.0
created: 2026-02-20
status: ACTIVE
issued_by: KN Nguyen
review_date: 2026-03-20 (30-day review)
---

# IRONMESH Portfolio — Product Freeze Order

> **Decision:** Radical focus. R2 loop activation (VN-RANGE-001 deployment) is the single
> highest-leverage structural change available. All other products enter frozen state until
> VN-RANGE-001 is operational and generating revenue.
>
> **Authority:** This document authorizes zero engineering hours on frozen products until
> the trigger condition below is met. Clawdbot handles frozen product maintenance.

---

## TRIGGER CONDITION TO UNFREEZE

```
R2 LOOP ACTIVATION = VN-RANGE-001 first unit operational + first subscription payment received
```

Until this trigger fires: **no engineering hours on frozen products, no exceptions.**

Anti-pattern to block: *"I'll just spend 30 minutes on Product X."*
Every context switch costs 30+ minutes of recovery. 13 products × "30 minutes" = the current constraint.

---

## PRODUCT STATUS TABLE

| # | Product | Status | Reason | Maintenance Mode |
|---|---------|--------|--------|-----------------|
| 1 | **VN-RANGE-001** | 🟢 ACTIVE — PRIORITY 1 | R2 loop trigger. Everything flows from this deployment. | Full engineering |
| 2 | **BB-01** | 🟡 ACTIVE — PRIORITY 2 | Supporting technology for VN-RANGE-001. Permitted only when directly unblocking P1. | Engineering when P1 requires it |
| 3 | VN-LOMAH | 🔴 FROZEN | IRONMESH component. Feeds VN-RANGE-001 but no standalone work needed. | Clawdbot: doc updates only |
| 4 | VN-CAM | 🔴 FROZEN | IRONMESH component. Same as above. | Clawdbot: doc updates only |
| 5 | VN-TRN | 🔴 FROZEN | IRONMESH component. Same as above. | Clawdbot: doc updates only |
| 6 | VN-SMASH | 🔴 FROZEN | Fire control — advanced capability. Defer to Phase 2 deployment. | Clawdbot: doc updates only |
| 7 | VN-MGM | 🔴 FROZEN | Mount system — not on critical path for VN-RANGE-001 Phase 1. | Clawdbot: doc updates only |
| 8 | RCWS-127-NAVAL | 🔴 FROZEN | Naval system — separate procurement track, separate customer. | Clawdbot: doc updates only |
| 9 | Target USV | 🔴 FROZEN | Maritime platform — separate procurement track. | Clawdbot: doc updates only |
| 10 | Towed Target (Sea) | 🔴 FROZEN | Maritime consumable — downstream of USV. | Clawdbot: doc updates only |
| 11 | Training Grenade | 🔴 FROZEN | Training consumable — low unit value, separate channel. | Clawdbot: doc updates only |
| 12 | UAV Catapult | 🔴 FROZEN | Launch system — feeds TARGET-DRONE-001, defer together. | Clawdbot: doc updates only |
| 13 | Tethered Drone | 🔴 FROZEN | Surveillance — separate use case, no synergy with VN-RANGE-001 Phase 1. | Clawdbot: doc updates only |
| 14 | TARGET-DRONE-001 | 🔴 FROZEN | Air target — IRONMESH Phase 2 feature, not Phase 1. | Clawdbot: doc updates only |
| 15 | VN-CUA | 🔴 FROZEN | Perimeter — separate application domain. | Clawdbot: doc updates only |

---

## WHAT "FROZEN" MEANS

**Clawdbot handles (no engineering hours needed):**
- Responding to routine status inquiries about frozen products
- Generating status update summaries from existing documentation
- Maintaining documentation currency (date updates, version tracking)
- Answering technical questions from existing specs — no new analysis

**What requires engineering review (escalates to KN):**
- Safety incident or field failure on a deployed frozen product
- Procurement inquiry with a genuine contract timeline (respond but do not start design work)
- Critical bug discovered that affects ACTIVE products (treat as VN-RANGE-001 bug, fix in that context)

**What does NOT escalate (Clawdbot handles with standard response):**
- "Can you add feature X to Product Y?" → "Product Y is in focused development mode. We'll evaluate new features after current milestone."
- "When will Product Y be ready?" → "We're targeting [Q2/Q3 2026]. I'll update you when we have a firm date."
- General product questions → answer from existing docs, no new engineering work

---

## CONTEXT-SWITCH PREVENTION RULES

1. **No unfreezing without a written trigger condition being met** — documented in this file
2. **No "quick fixes" on frozen products** — if it takes >5 minutes, it's a context switch
3. **Procurement inquiries → acknowledge, document, defer** — don't start design work
4. **Incoming feature requests for frozen products → log in product backlog, do not evaluate**
5. **"Urgent" customer requests for frozen products → assess: does it unblock VN-RANGE-001?**
   - YES → it was really a VN-RANGE-001 issue all along. Fix in that context.
   - NO → defer. Every "urgent" request that isn't on the critical path is the B1 Complexity Ceiling speaking.

---

## WEEKLY ALLOCATION TARGETS (from Priority Plan)

```
S3 Critical Reasoning:  2h  (QC Gate automates pre-screening, human reviews flags only)
S4 Process Design:      6h  (100% on VN-RANGE-001 deployment map — this IS the S4 practice)
S2 Orchestration:       6h  (IRONMESH architecture + documentation)
S1 AI Literacy:         2h  (prompt library maintenance, Claude Code optimization)
S5 Ethical Governance:  2h  (TCVN compliance matrix for VN-RANGE-001)
B-NS Negotiation:       2h  (30-second briefing practice 3x/week)
Strategic/Meta:         2h  (weekly allocation review + D-M-I-R)
Buffer:                 3h  (non-negotiable — prevents B3 Skill Depletion)
                        ──
TOTAL:                  25h
```

---

## 30-DAY REVIEW CRITERIA (2026-03-20)

Unfreeze consideration requires ALL three:
- [ ] VN-RANGE-001 Phase 1 deployment complete OR contractually committed
- [ ] Weekly S3 QC time actually ≤2h (QC Gate working as designed)
- [ ] No context-switch violations logged this month

If criteria not met: extend freeze by 30 days, no exceptions.

---

## RATIONALE (from Agentic_Skills_Mastery_Priority.md)

**B1 Complexity Ceiling Archetype:** More products → more orchestration complexity →
context switching cost → reduced quality per product → slower deployment → delayed revenue.

The intervention is NOT to use AI to handle more products simultaneously.
The intervention is to enforce serial focus: **2 active, 13 dormant.**

Pushing harder on the growth loop (R1: AI Amplification) while the limiting condition
(B1: Complexity Ceiling) is active creates diminishing returns.
The only solution is to address the limiting condition directly.

This Freeze Order IS the structural intervention.

---

*Product Freeze Order v1.0 — IRONMESH Portfolio — 2026-02-20*
*Authority: KN Nguyen | Review: 2026-03-20*
