---
project: V-SMASH-D
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-L (V-L)
p10_idea: I-09 (Sentry Detector)
---

# V-SMASH-D (Sentry Detector) — Product Proposal (P11)

> **Family position:** Adjacent product — non-weapon, detection-only. IRONMESH sensor node.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-D (Sentry Detector) |
| **Product code** | V-D |
| **Family position** | Adjacent — non-weapon, detection-only |
| **Primary function** | Autonomous AI-powered drone detection and alerting for perimeter/base security, without weapon interface |
| **Customer** | Vietnamese military base commanders, critical infrastructure security (power plants, ports, government buildings) |
| **End-user** | Base security watch officer / perimeter guard |
| **Target market** | Fixed installation security — military bases, depots, critical facilities |

**One-sentence pitch:** An AI sentry that watches the sky 24/7 and sends a Zalo alert to the duty officer within 3 seconds of detecting a drone — no operator required.

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **Workshop X capability leveraged** | Same YOLOv8-nano detection + classification. No tracking/ballistic/fire-gate needed — simpler SW stack. |
| **IRONMESH integration** | **Core** — V-D is an IRONMESH sensor node. Multiple V-D units form a detection mesh. IRONMESH aggregates alerts, tracks across zones, provides COP. |
| **R2 loop benefit** | **Highest IRONMESH value** in V-SMASH family. Per-unit SW license ($500-1,000/yr) for IRONMESH connectivity + fleet dashboard. Recurring revenue. |
| **Local content strategy** | Housing (100% local — weatherproof pole-mount), power system (solar + battery, local), PCB assembly (local). Imported: CMOS sensor, Jetson module. Target: **80% local**. |
| **ACH thesis** | **Detection-only ACH** — replaces $50K-100K radar-based drone detection with $1,500 AI camera. AI compensates for no radar, no RF scanner. |
| **Market expansion** | **Opens non-military market** — critical infrastructure (dual-use). First Workshop X product sellable without military procurement. |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Source |
|---|-------------|--------|--------|
| 1 | Drone detection range | ≥500m daylight / ≥200m night (with IR illuminator option) | Extended from V-L — fixed mount, larger optic |
| 2 | Detection accuracy | ≥95% TP, ≤5% FP | O02: misclassification critical for unmanned |
| 3 | Alert latency (detection → notification) | ≤3 seconds to Zalo/SMS/IRONMESH | O01 adapted |
| 4 | Coverage per unit | 120° horizontal FOV (3 units = 360°) | Perimeter geometry |
| 5 | Power autonomy | ≥72h on solar + battery (cloudy conditions) | Remote, no grid |
| 6 | Environmental rating | IP67, -10°C to +60°C, outdoor year-round | Pole-mounted, exposed |
| 7 | Unit cost | ≤$800 | HW is entry price, IRONMESH sub is revenue |
| 8 | First unit delivery | Q3 2026 (10 months) | Simpler than V-L |
| 9 | **Watchdog heartbeat** | Status LED (visible) + Zalo/IRONMESH ping every 60s. If heartbeat missed ×3 → "SENTRY DOWN" alert to duty officer. | Safety-critical: silent failure = false sense of security |
| 10 | **Self-diagnostic** | On-board health check: camera feed active, AI inference running, network connected, battery level. Any FAIL → amber LED + alert. | Operational reliability |
| 11 | **Graceful degradation** | Battery <20% → reduce inference rate (save power, extend coverage). Battery <5% → "SENTRY LOW POWER" alert + last-known-good timestamp. | Prevents unannounced shutdown |

- **Cost target:** ≤$800 unit cost (≤2% of radar-based detection at $50K+)
- **Delivery target:** First unit Q3 2026
- **Key constraint:** Must operate fully unattended — no operator station. Alert-only. Response is human.

---

## 4. WORKING PRINCIPLE OPTIONS (Phase 2 selects)

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: CMOS-only daylight (Recommended for V1)** | Same IMX290, wider FOV, pole mount, solar | Cheapest ($500-600), fastest, reuses V-L AI | Night-blind — 12h/day gap |
| **B: CMOS + IR illuminator** | A + 850nm IR LED for short-range night (100-150m) | 24/7 at short range, moderate cost ($650-750) | IR detectable, limited night range |
| **C: CMOS + uncooled thermal** | Dual-sensor, true 24/7 at full range | Highest military value, all-weather | Higher BOM ($900-1,100), +6 mo, ~65% local |

**Recommended: Option A for V1** — ship daylight-only in 10 months at $500 BOM, prove IRONMESH mesh concept. Option C = V-D PRO (V2) after thermal sourcing established via V-P.

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | LOW | Detection-only = simplest SW stack. Housing (IP67, solar, pole mount) is main engineering. |
| **Schedule** | LOW | 10 months. Reuses V-L AI entirely. Housing is new but simple (no precision optics, no recoil). |
| **Market** | **MEDIUM** | New customer segment (base security, infrastructure). No existing Workshop X relationships. Enter via military base first, expand to dual-use. |
| **False positive** | **HIGH** | Unmanned operation: FP alerts erode trust fast. >10 FP/day for birds → guards ignore within 1 week. ≤5% FP rate critical. |
| **Silent failure** | **MITIGATED** | QC FLAG-03 resolved: watchdog heartbeat (60s ping), self-diagnostic, graceful degradation. Guard always knows if sentry is up, degraded, or down. "SENTRY DOWN" alert is as important as "DRONE DETECTED" alert. |

### Kill Condition

False positive rate > 10% after 2 weeks of field tuning at a representative site. (Target: ≤5%. At >10%, guards ignore alerts, defeating the product's purpose.)

Also kill if IRONMESH subscription uptake < 30% of V-D units sold after 6 months — recurring revenue model failure.

---

## 6. NEXT STEP

- **If PROCEED:** Phase 1 Task Clarification. Requirements derived partly from V-L detection subsystem, plus new: weatherproofing, solar power, alert routing, IRONMESH API, FP management. ~50-70 requirements.
- **If PAUSE:** Resume after IRONMESH API is defined. V-D Option A can operate standalone (Zalo alerts), but mesh requires the platform.

---

## Family Dependency

```
V-L (LITE) ──→ V-D (Detector)
  DG: V-L.Phase4.AI_core_validated (shared detection model)
  Shared: YOLOv8-nano detection + classification
  Delta: no tracking, no ballistic, no fire gate, no weapon interface
  New: weatherproof housing, solar power, alert routing, IRONMESH API, FP filter
```

V-D can begin Phase 1 independently. Phase 4 should wait for V-L EVT to confirm detection accuracy baseline. IRONMESH API is a soft dependency — V-D V1 works standalone.

---

## Revenue Model

| Stream | Value | Timing |
|--------|-------|--------|
| **Hardware sale** | $1,500/unit (1.9× BOM at $800) | One-time |
| **IRONMESH subscription** | $500-1,000/unit/year | Recurring |
| **Mesh deployment** (3-unit perimeter kit) | $4,500 HW + $1,500-3,000/yr SW | Bundle pricing |
| **10-year LTV per mesh** | $4,500 + $15K-30K SW = **$19.5K-34.5K** | Exceeds single V-L sale ($3K) |

V-D unit hardware margin is thin (47-63%) compared to V-L (74%). The business case depends on IRONMESH subscription uptake — hence the 30% uptake kill condition.
