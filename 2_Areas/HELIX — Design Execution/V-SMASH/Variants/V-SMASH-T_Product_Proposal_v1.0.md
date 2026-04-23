---
project: V-SMASH-T
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-L (V-L)
dependency_gate: DG-2 (V-L.Phase4.DONE — MET) + DG-3 (IRONMESH.API.ready — PENDING)
---

# V-SMASH-T (Trainer) — Product Proposal (P11)

> **Family position:** Training + recurring revenue. Laser emitter replaces live rounds, IRONMESH scores and coaches.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-T (Trainer) |
| **Product code** | V-T |
| **Family position** | Training ecosystem — recurring SW revenue via IRONMESH |
| **Primary function** | AI-scored simulated drone engagement using eye-safe laser, with IRONMESH session recording and progressive coaching |
| **Customer** | Vietnamese Army training command, military academies, allied nation training centers |
| **End-user** | Infantry soldier trainee, gunnery instructor |
| **Target market** | C-UAS gunnery qualification — every infantry unit needs to train, repeatedly |

**One-sentence pitch:** Train your soldiers to shoot down drones without firing a single round — AI scores every engagement and gets smarter with each session.

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **WX capability** | V-L hardware (proven) + laser emitter (COTS) + IRONMESH scoring engine. Low HW effort. |
| **IRONMESH** | **Core product for IRONMESH adoption.** V-T is the entry drug — units buy V-T for training, generate data, then procure V-L/V-P for operations. |
| **R2 loop** | **Highest recurring revenue.** HW sale + $500-1,500/unit/year IRONMESH training subscription. 10-year LTV per unit: $8K-18K. |
| **Local content** | 70% (same as V-L + laser module sourced domestically). |
| **ACH thesis** | AI coaching compensates for no dedicated drone target range infrastructure. V-T creates a virtual range anywhere. |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Source |
|---|-------------|--------|--------|
| 1 | Laser emission | Eye-safe Class 1 (IEC 60825-1), 850nm IR | Safety: absolute |
| 2 | Shot scoring accuracy | ≤0.5 mrad angular error at 200m | O13: hit probability |
| 3 | Session recording | Full engagement timeline → IRONMESH | IRONMESH API |
| 4 | Coaching feedback | Post-session debrief with AI-generated improvement suggestions | O07, O12 from ODI |
| 5 | Scoring modes | Point scoring, qualification pass/fail, free engagement | Instructor requirement |
| 6 | Engagement rate | ≥10 simulated engagements per hour (no ammo resupply) | Training throughput |
| 7 | Drone target simulation | Physical target (quadcopter silhouette on motorized cable) OR AI-projected overlay | Two sub-options |
| 8 | Unit cost | ≤$1,200 (V-L hardware + laser module + IRONMESH license) | Cost |
| 9 | IRONMESH API | Session data upload, scoring retrieval, coaching rules engine | DG-3 dependency |
| 10 | Instructor dashboard | Real-time multi-trainee view, scoring leaderboard, weakness identification | Instructor UX |

- **Cost target:** ≤$1,200 HW + $500-1,500/yr subscription
- **Delivery target:** 6 months after IRONMESH API ready (DG-3). Phase 0/1 can start now.
- **Key constraint:** IRONMESH API is the gating dependency. V-T Option A (basic scoring) can ship without coaching AI; Option B (full coaching) needs IRONMESH ML pipeline.

---

## 4. WORKING PRINCIPLE OPTIONS

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: V-L + laser emitter (basic scoring)** | Same V-L sight, add eye-safe laser module, scoring via hit/miss detection on instrumented target | Ships fast (3-4 mo after DG-3), low HW delta | Requires physical drone target, no AI coaching |
| **B: V-L + laser + AI coaching (full)** | A + IRONMESH coaching engine: progressive difficulty, weakness identification, AI-generated drill recommendations | Full recurring revenue, differentiated | Needs IRONMESH ML pipeline, 6+ months |
| **C: Hybrid staged (Recommended)** | Ship Option A at month 6, upgrade to B via OTA when IRONMESH coaching ready | Revenue starts early, coaching improves over time | "System gets smarter" narrative, but V1 is basic |

**Recommended: Option C** — matches I-08 approach from VN-12.7MM-SIM ("rules bootstrap → ML takeover"). Ship basic scoring, upgrade coaching progressively.

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | LOW | Laser emitter is COTS. Scoring algorithm is geometry (not ML). V-L hardware proven. |
| **Schedule** | **MEDIUM** | DG-3 (IRONMESH API) is external dependency, timeline uncertain. Option C mitigates by shipping basic scoring first. |
| **Market** | LOW | Every infantry unit needs C-UAS training. No Vietnamese training simulator exists. Recurring revenue model proven in commercial EdTech. |
| **Subscription uptake** | **MEDIUM** | Military procurement may resist subscription model. Offer 3-year bundle pricing to match procurement cycle. |

**Kill condition:** IRONMESH coaching shows no measurable Pk improvement (p > 0.05 vs baseline) after 100 training sessions across 3 units. If AI coaching doesn't improve soldiers, V-T is just an expensive laser pointer. Also kill if subscription uptake < 25% after 12 months.

---

## 6. NEXT STEP

- **If PROCEED:** Phase 0/1 NOW (DG-2 met). Define laser module specs, instrumented target design, IRONMESH scoring API requirements. Phase 2+ waits for DG-3.
- **If PAUSE:** Resume when IRONMESH API status changes. V-T Phase 0/1 adds no risk — it's requirements and design work only.

---

## Revenue Model

| Stream | Value | Timing |
|--------|-------|--------|
| Hardware sale | $2,500/unit | One-time |
| IRONMESH Basic (scoring + recording) | $500/unit/year | Recurring |
| IRONMESH Pro (coaching + analytics) | $1,500/unit/year | Recurring (after ML ready) |
| 10-year LTV per unit (Basic) | $2,500 + $5,000 = **$7,500** | |
| 10-year LTV per unit (Pro) | $2,500 + $15,000 = **$17,500** | |
| Fleet of 100 V-T units (Pro, 10yr) | **$1.75M** | Exceeds 100× V-L HW sales |
