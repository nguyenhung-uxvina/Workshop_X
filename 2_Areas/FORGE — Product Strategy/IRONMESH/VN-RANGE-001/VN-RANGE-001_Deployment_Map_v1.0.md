---
project: VN-RANGE-001 (CORTEX RANGE — P0 CDM + P1 SCOREBOARD + PULSE)
phase: Deployment — Phase 1 entry product (gateway)
type: deployment-process-map
version: 1.0
created: 2026-02-20
status: draft — Week 2 milestone, S4 practice vehicle
source: CORTEX_RANGE_Phased_Product_Catalog_v1.0.md (P0-P1 scope)
skill_target: S4 Process Automation Design — learn by building
---

# VN-RANGE-001 — Deployment Process Map v1.0

> **Scope:** First installation deployment — CORTEX RANGE entry product bundle:
> - **CR-P0 CDM** (data foundation, open source)
> - **CR-L1 SCOREBOARD** (acoustic shot scoring, AI pattern detection)
> - **CR-D3 PULSE** (real-time commander dashboard)
>
> **Journey:** Product ready in workshop → First range OPERATIONAL with range officers
> independently running sessions and commanders viewing live on PULSE.
>
> **Design principle (from S4 analysis):**
> Automation % DECREASES as consequence increases.
> Site preparation (low consequence) → 70-80% automated
> Live-fire calibration (high consequence) → 20% automated
> Gate decisions (accountability transfer) → 0% automated — always human

---

## PHASE OVERVIEW

| Phase | Name | Steps | Duration | Automation Avg | Primary Owner |
|-------|------|-------|----------|---------------|---------------|
| **Phase A** | Pre-Deployment | Steps 1–5 | ~2 weeks | ~50% | KN / Clawdbot |
| **Phase B** | Installation | Steps 6–11 | ~3 days on-site | ~40% | Technician |
| **Phase C** | Commissioning | Steps 12–18 | ~2 days | ~35% | KN + Range Command |

**Total deployment time:** ~3–4 weeks from "contract signed" to "go-live"
**On-site time required:** 5 days (3 days install + 2 days commissioning)
**Remote-only steps:** 9 of 18 steps executable without travel

---

## PHASE A — PRE-DEPLOYMENT (Steps 1–5)

*From: Contract signed → Equipment ready to ship*

---

### Step A1 — Range Site Assessment

| Field | Detail |
|-------|--------|
| **What** | Collect range parameters needed to configure SCOREBOARD + PULSE |
| **Owner** | Technician / Range POC (remote — structured questionnaire) |
| **Automation** | **60%** — AI generates survey form + auto-populates equipment BOM from answers |
| **HITL Checkpoint** | YES — KN reviews completed survey before equipment configuration begins |
| **Fallback** | If POC cannot complete survey: schedule video call walkthrough + Google Maps supplement |
| **Key inputs** | Lane count, distances (25/50/100/200m), target type (paper/steel/E-type), power availability, WiFi coverage, mounting options (poles/walls/berm) |
| **Output** | Range Configuration Sheet → feeds Step A3 auto-config |
| **Key risk** | POC answers vaguely → wrong sensor spacing → scoring accuracy degraded |

> **AI assist (current):** Clawdbot handles survey delivery + follows up on incomplete answers.
> **AI assist (target):** Auto-generate sensor placement diagram from survey answers + flag conflicts.

---

### Step A2 — Contract and BOM Finalization

| Field | Detail |
|-------|--------|
| **What** | Convert site assessment into binding contract + equipment list |
| **Owner** | KN (commercial) + Clawdbot (document generation) |
| **Automation** | **55%** — Clawdbot generates BOM + spec sheet + draft contract from survey data |
| **HITL Checkpoint** | YES — KN reviews before sending. Customer signs before any equipment procured. |
| **Fallback** | If contract negotiation stalls: offer trial (30-day free with SCOREBOARD hardware deposit) |
| **Key inputs** | Range Config Sheet (A1) + pricing tier (FREE bundle with VN-LOMAH hardware) |
| **Output** | Signed contract + confirmed BOM |
| **Key risk** | Scope creep — customer adds requirements after signing → change control required |

> **AI assist (current):** Clawdbot generates contract from template + pricing table.
> **Bottleneck identified:** Contract review cycle with military procurement adds 1-3 weeks.
> **Mitigation:** Deliver pre-signed MOU template to procurement officer BEFORE site survey.

---

### Step A3 — Equipment Configuration (Factory)

| Field | Detail |
|-------|--------|
| **What** | Pre-configure all hardware to range-specific parameters before shipping |
| **Owner** | Technician (factory) |
| **Automation** | **75%** — Auto-configure script ingests Range Config Sheet → outputs config files for all devices |
| **HITL Checkpoint** | YES — Technician verifies config output matches Range Config Sheet before flashing |
| **Fallback** | If auto-config fails on a device: manual config via device UI (30 min/device) |
| **Key inputs** | Range Config Sheet + device serial numbers |
| **Output** | Configured devices: LOMAH sensor array + EDGE node + WiFi AP + tablets |
| **Key risk** | Config file error not caught → mis-calibrated sensors arrive on-site |

> **AI assist:** Config script auto-generates from spreadsheet. Manual spot-check: flash 1 device, verify 3 readings match spec before batch flashing.

---

### Step A4 — Factory Acceptance Test (FAT)

| Field | Detail |
|-------|--------|
| **What** | Verify complete system functions correctly in controlled lab environment BEFORE shipping |
| **Owner** | KN or Designated Technician |
| **Automation** | **50%** — Automated test script runs all digital checks; physical checks are manual |
| **HITL Checkpoint** | YES — KN signs FAT certificate. No shipping without FAT sign-off. |
| **Fallback** | FAT failure → debug and retest (do not ship). Max 3 retry cycles before escalating. |
| **FAT checklist** | ☐ All sensors detect signal at correct sensitivity range ☐ Edge node runs AI inference at <100ms ☐ PULSE dashboard displays data from all lanes ☐ CDM write/read verified ☐ Battery life test (4hr session minimum) ☐ IP rating spot check (water pour on sensor enclosure) |
| **Output** | Signed FAT certificate + shipping release |
| **Key risk** | FAT passed but field conditions differ (temperature, humidity, EMI) → calibration needed on-site |

> **Gate decision:** KN signs FAT certificate. This is the last STOP before the unit leaves the workshop.
> If defects found: HOLD. DO NOT ship with known defects to a military customer.

---

### Step A5 — Logistics and On-Site Preparation Brief

| Field | Detail |
|-------|--------|
| **What** | Ship equipment + prepare range POC for arrival |
| **Owner** | Clawdbot (comms) + Logistics (shipping) |
| **Automation** | **70%** — Clawdbot sends pre-arrival checklist to range POC; shipping handled by logistics partner |
| **HITL Checkpoint** | NO — routine logistics |
| **Fallback** | If shipping delayed: send pre-arrival training materials for range officers to study |
| **Pre-arrival checklist sent to range** | ☐ Power outlets available at sensor locations ☐ WiFi AP mounting location cleared ☐ Range closed for 1 day (install day) ☐ Range officer assigned as CORTEX point of contact ☐ Commander briefed that system is arriving |
| **Output** | Equipment arrives + range prepared for installation |
| **Key risk** | Range not prepared on arrival day → delays installation |

---

## PHASE B — INSTALLATION (Steps 6–11)

*On-site: Product arrives → System physically installed and powered on*

---

### Step B6 — On-Site Prerequisites Verification

| Field | Detail |
|-------|--------|
| **What** | Verify range is ready for installation before starting work |
| **Owner** | Technician (on-site, Day 1 morning) |
| **Automation** | **20%** — Checklist auto-generated; all checks require physical verification |
| **HITL Checkpoint** | YES — If any prerequisite FAILS → STOP. Call KN. Do not start installation. |
| **Checklist** | ☐ Power outlets at all sensor locations (≥1 per lane pair) ☐ WiFi AP mounting location accessible ☐ EDGE node location: dry, ventilated, locked ☐ Cabling route clear (no obstacles, no water exposure) ☐ Range closed for the day (no live fire during install) |
| **Fallback** | Power missing → use battery packs for Day 1 test; escalate power install to range engineer. Cable route blocked → reroute + add to site report. |
| **Output** | Prerequisites PASS → installation proceeds. FAIL → escalation plan |
| **Key risk** | "We thought you'd handle the cabling" — scope misalignment discovered on-site |

---

### Step B7 — Acoustic Sensor Array Installation (VN-LOMAH)

| Field | Detail |
|-------|--------|
| **What** | Mount microphone arrays at each lane per installation guide |
| **Owner** | Technician (physical) |
| **Automation** | **10%** — Physical installation; only documentation is AI-assisted |
| **HITL Checkpoint** | YES — After each lane: technician verifies sensor LED status (green = connected). |
| **Installation guide** | Sensor height: 1.0–1.5m above firing line. Lateral offset: ±0.5m from lane centerline. Mounting: M8 bolt to steel post or wall bracket (included). Cable: waterproof gland, labeled per lane number. |
| **Fallback** | Mounting surface unsuitable → use supplied clamp kit. Cable too short → use supplied extension (max 10m). Sensor not powering on → swap to spare unit; log serial number for RMA. |
| **Output** | All LOMAH sensors mounted, cabled, powered on with green LED |
| **Key risk** | Wrong sensor height → reduced accuracy. Document measured heights in site report. |

> **S4 insight:** This step cannot be automated — physical precision matters for acoustic sensing.
> The 10% automation is documentation only (auto-log sensor positions from technician inputs via phone app).

---

### Step B8 — Network Infrastructure Deployment

| Field | Detail |
|-------|--------|
| **What** | Deploy WiFi AP coverage across full range + connect EDGE node |
| **Owner** | Technician |
| **Automation** | **50%** — AP auto-configures from pre-loaded template; network test scripts automated |
| **HITL Checkpoint** | YES — Verify all lanes have WiFi signal ≥-70dBm (signal test app on tablet) |
| **Fallback** | Dead zone at far lane → add repeater from kit. If no LAN port at EDGE location → use 4G/LTE modem as backup (offline-capable EDGE design). |
| **Config** | SSID: `CORTEX_RANGE_[rangeID]` (from A3 config). Channel: auto-select. Security: WPA2 PSK from pre-config file. |
| **Output** | All devices can reach EDGE node at ≥-70dBm |
| **Key risk** | Competing WiFi networks (military radio, other equipment) → channel interference |

---

### Step B9 — EDGE Node and Software Deployment

| Field | Detail |
|-------|--------|
| **What** | Deploy CDM, SCOREBOARD engine, BallisticAI model, PULSE server on EDGE node |
| **Owner** | Technician (runs scripts) |
| **Automation** | **85%** — One-command deployment script; technician monitors and approves each stage |
| **HITL Checkpoint** | YES — Technician confirms each of 4 services reports RUNNING status before proceeding |
| **Deployment sequence** | 1. `deploy-cdm.sh` → CDM schema initialized ✓ 2. `deploy-scoreboard.sh` → Scoring engine + BallisticAI model loaded ✓ 3. `deploy-pulse.sh` → Dashboard web server started ✓ 4. `deploy-integration.sh` → All services handshake confirmed ✓ |
| **Fallback** | Service fails to start → check `deploy.log`, follow error resolution guide. Rollback available: `rollback.sh` restores last known-good state. |
| **Output** | All 4 services running. PULSE accessible from tablet browser at `http://cortex.range` |
| **Key risk** | First deployment on this EDGE hardware model → unknown compatibility issue. Mitigation: FAT (Step A4) was run on same hardware model. |

---

### Step B10 — Sensor-to-Software Integration Test

| Field | Detail |
|-------|--------|
| **What** | Verify acoustic data flows from sensors → EDGE → scoring engine → PULSE dashboard |
| **Owner** | Technician |
| **Automation** | **65%** — Automated integration test suite; technician interprets results |
| **HITL Checkpoint** | YES — All lanes must show sensor status GREEN in PULSE before proceeding to calibration |
| **Test protocol** | Automated: ping all sensors, check latency (<50ms per sensor), verify CDM schema writes, verify PULSE displays all lane data. Manual: technician produces a loud clap near each sensor and confirms PULSE registers an event. |
| **Fallback** | Sensor not detected → check cable, check IP address conflict, power cycle. If still not detected after 3 attempts → swap sensor, log for diagnostics. |
| **Output** | Integration test PASS report. All lanes GREEN. Ready for live-fire calibration. |
| **Key risk** | "All green on screen" but scoring accuracy fails live-fire → calibration will reveal this |

---

### Step B11 — Installation Completion Gate

| Field | Detail |
|-------|--------|
| **What** | Formal review before live-fire begins |
| **Owner** | KN (remote review of test report) + Range Safety Officer (on-site sign-off) |
| **Automation** | **0%** — Gate decision is fully human |
| **HITL Checkpoint** | YES — MANDATORY. Both KN AND Range Safety Officer must sign before any live fire. |
| **Gate checklist** | ☐ All sensors installed per spec ☐ Integration test PASS for all lanes ☐ PULSE accessible from commander's device ☐ Range Safety Officer briefed on system operation ☐ Emergency cease-fire alert tested and functional ☐ No open defects from Steps B6–B10 |
| **Decision options** | APPROVE → proceed to Phase C live-fire calibration REVISE → fix identified issues, re-test PAUSE → stop here, resume with additional resources |
| **Output** | Signed Installation Completion Certificate |
| **Key risk** | RSO unavailable on installation day → gate cannot be cleared → delay. Schedule RSO attendance in advance as part of Step A5 pre-arrival checklist. |

---

## PHASE C — COMMISSIONING (Steps 12–18)

*On-site Days 2–3: Installation verified → System operational and handed over*

---

### Step C12 — Live-Fire Acoustic Calibration

| Field | Detail |
|-------|--------|
| **What** | Fire known rounds at known positions to verify scoring accuracy |
| **Owner** | Range Officer (fires) + Technician (monitors) |
| **Automation** | **20%** — Data capture automated; human fires and KN interprets results remotely |
| **HITL Checkpoint** | YES — Range Safety Officer present for all calibration fire. Cannot proceed without RSO. |
| **Protocol** | 20 shots per lane (minimum). Standard: 5.56mm or 7.62mm at 50m. Reference target (manual measurement of impact locations post-fire) compared to SCOREBOARD output. Acceptance: ≥95% shots scored within 5mm specification. |
| **Fallback** | Accuracy <95% → check sensor position against spec, re-zero. If still failing after 2 attempts → emergency: increase sensor density (add 1 sensor per lane). Log failure mode for product improvement. |
| **Output** | Calibration report: per-lane accuracy scores + pass/fail per acceptance criterion |
| **Key risk** | Ammunition type affects acoustic signature. If range uses non-standard ammunition → collect samples for model retraining. Flag to KN immediately. |

> **SAFETY RULE:** All live-fire calibration under Range Safety Officer control.
> KN / technician may observe but may NOT direct or influence fire timing. RSO owns the range.

---

### Step C13 — Scoring Accuracy Validation Report

| Field | Detail |
|-------|--------|
| **What** | Auto-generate validation report from calibration data |
| **Owner** | Clawdbot / automated |
| **Automation** | **80%** — Report auto-generated from calibration data in CDM |
| **HITL Checkpoint** | YES — KN reviews before presenting to range command |
| **Report contents** | Per-lane accuracy scores, pass/fail vs 5mm spec, shot pattern analysis, any anomalies flagged, recommendation (accept/tune/escalate) |
| **Fallback** | If 1-2 lanes fail but others pass → accept system with lane exclusion, document, plan sensor adjustment. Do NOT suppress failures in report. |
| **Output** | Signed Accuracy Validation Report — this document is part of the customer handover package |
| **Key risk** | Reporting a borderline PASS as full PASS → trust failure when range officer sees errors in field use. Rule: report exactly what the data shows. |

---

### Step C14 — PULSE Dashboard Customization

| Field | Detail |
|-------|--------|
| **What** | Configure PULSE to match this range's organizational structure |
| **Owner** | Technician + Range POC |
| **Automation** | **60%** — Template-based; customization requires human input for org structure |
| **HITL Checkpoint** | NO — configuration, not safety-critical |
| **Customization items** | Unit hierarchy (Company/Platoon/Squad), personnel roster upload, session types (individual qual / unit exercise / record fire), commander display preferences, alert thresholds (ammo count warnings, safety zone violations) |
| **Fallback** | If org structure is complex → use flat structure for launch, refine in first month of operations. |
| **Output** | PULSE configured, commander demo ready |
| **Time** | ~2 hours with range POC |

---

### Step C15 — System Validation Gate

| Field | Detail |
|-------|--------|
| **What** | Full-system gate review before any training handover |
| **Owner** | KN (gate decision authority) |
| **Automation** | **0%** — Gate is fully human. Auto-generate the gate report; human decides. |
| **HITL Checkpoint** | YES — MANDATORY. KN must explicitly APPROVE before training begins. |
| **Gate checklist** | ☐ Calibration accuracy ≥95% per lane spec ☐ PULSE accessible from commander's device ☐ CDM data writing and queryable ☐ All lanes operational (or documented exceptions) ☐ Accuracy Validation Report accepted ☐ No safety-critical open defects |
| **Decision options** | A) APPROVE → proceed to operator training B) REVISE → fix specific issues, re-test identified items C) PAUSE → system too immature for handover, escalate to KN |
| **Output** | Signed Gate C15 Certificate — system approved for training handover |
| **Key risk** | Pressure from customer to "just start using it" before gate is complete → HOLD. Explain: if a range officer mis-uses an uncertified system, accountability falls on Workshop X. Gate protects both parties. |

---

### Step C16 — Range Officer Training

| Field | Detail |
|-------|--------|
| **What** | Hands-on training for range officers and instructors (2-4 hours) |
| **Owner** | KN or Designated Trainer |
| **Automation** | **25%** — AI-generated training materials, quick-reference card, how-to videos; delivery is human |
| **HITL Checkpoint** | YES — End of training: each range officer must complete 1 full simulated session independently |
| **Training scope** | Start/end session, monitor live shots on PULSE, generate end-of-session report, basic troubleshooting (sensor offline, network lost), escalation contacts |
| **Success criterion** | Range officer runs a complete session from start to AAR report without prompting within 1 training session (not multiple days — if 1 session isn't sufficient, identify what's missing and fix it) |
| **Fallback** | If range officers need more time → leave self-service training materials + schedule follow-up remote session within 1 week. Do NOT delay go-live waiting for perfect training readiness. |
| **Output** | Signed training attendance sheet. Contact list: KN / Clawdbot / escalation path documented. |

> **Anti-pattern to avoid:** Over-training. A system requiring 2+ days of training to operate
> has a usability problem, not a training problem. If range officers struggle, log UX issues
> for PULSE improvement. Don't paper over product gaps with more training.

---

### Step C17 — Commander Briefing and Demo

| Field | Detail |
|-------|--------|
| **What** | 30-minute briefing for unit commander on PULSE capabilities |
| **Owner** | KN (narrative) |
| **Automation** | **35%** — AI-generated demo script + sample data display; KN delivers |
| **HITL Checkpoint** | NO — informational briefing |
| **Demo flow** | 1. Live dashboard: "This is what you see during a range session." 2. Historical data: "This is last session's results — who qualified, who needs more training." 3. Unit comparison: "Future state: compare Platoon A vs B readiness." 4. Q&A |
| **Goal** | Commander must leave with ONE clear understanding: "I can see my unit's readiness from my office without going to the range." |
| **Fallback** | Commander not available → brief through Range POC + leave written summary for commander. Don't delay handover for commander schedule. |
| **Output** | Commander aware of system. PULSE briefing complete. |
| **Key risk** | Commander asks for features not yet built → "That's Phase 2. Here's the roadmap." Never promise capabilities that aren't deployed. |

---

### Step C18 — Handover and Go-Live

| Field | Detail |
|-------|--------|
| **What** | Formal transfer of system operation to range + activate ongoing support |
| **Owner** | KN |
| **Automation** | **45%** — Handover package auto-generated by Clawdbot; human signs and delivers |
| **HITL Checkpoint** | YES — Range commander or designated officer signs Acceptance Certificate |
| **Handover package** | ☐ As-built site documentation (sensor positions, network config) ☐ Accuracy Validation Report ☐ Quick-reference cards (laminated, range-ready) ☐ Escalation contacts: KN direct → Clawdbot → email support ☐ First subscription invoice (or confirmation of bundle pricing) ☐ Data ownership statement: CDM data belongs to the range |
| **Ongoing support** | Clawdbot handles: routine questions, session setup help, minor config changes. KN handles: accuracy degradation, hardware failure, feature requests. |
| **CDM data confirmation** | Verify CDM data is accumulating in IRONMESH platform (feeds future PROPHECY training) |
| **Output** | Signed Acceptance Certificate. System operational. R2 loop activated (first subscription billable). |

---

## AUTOMATION GRADIENT SUMMARY

```
PHASE A (Pre-Deployment)
  A1: Range survey .................. 60%  ← mostly remote, AI-assisted forms
  A2: Contract/BOM .................. 55%  ← Clawdbot drafts, KN reviews
  A3: Equipment config .............. 75%  ← auto-config from survey data
  A4: Factory acceptance test ....... 50%  ← scripts + physical checks
  A5: Logistics + pre-arrival brief . 70%  ← Clawdbot manages comms
  Phase A average: ~62%

PHASE B (Installation)
  B6: Prerequisites check ........... 20%  ← physical, can't automate
  B7: Sensor mounting ............... 10%  ← physical precision work
  B8: Network deployment ............ 50%  ← AP auto-configure
  B9: Software deployment ........... 85%  ← scripted, 1-command
  B10: Integration test ............. 65%  ← automated test suite
  B11: Installation gate ............ 0%   ← accountability transfer: always human
  Phase B average: ~38%

PHASE C (Commissioning)
  C12: Live-fire calibration ........ 20%  ← live ammo: high consequence
  C13: Validation report ............ 80%  ← auto-generated from data
  C14: PULSE customization .......... 60%  ← template + human input
  C15: System validation gate ....... 0%   ← gate: always human
  C16: Range officer training ....... 25%  ← human-delivered
  C17: Commander briefing ........... 35%  ← narrative: human-delivered
  C18: Handover + go-live ........... 45%  ← Clawdbot drafts, KN signs
  Phase C average: ~38%

OVERALL: 18 steps, average ~45% automation
KEY INSIGHT: Gates (B11, C15) = 0% automated. Consequence-intensive steps (B7, C12) = 10-20%.
High-consequence = human. Low-consequence, high-repeatability = automated.
```

---

## TOP 3 DEPLOYMENT BOTTLENECKS (S4 analysis)

### Bottleneck 1 — Military Procurement Delay (Step A2: Contract)

**Current state:** Military procurement cycle adds 1-3 weeks AFTER contract is agreed.
**Root cause:** Procurement officer approval chain is long and slow; Workshop X enters too late in the cycle.
**AI-assisted solution:**
- Deliver pre-signed MOU template to procurement officer DURING site survey (Step A1), not after
- Clawdbot tracks procurement stage and sends reminders automatically
- Prepare pre-approval quote package at the time of first site inquiry
**Target:** Cut procurement delay from 3 weeks → 1 week by front-loading the paperwork

### Bottleneck 2 — Live-Fire Calibration Dependency (Step C12)

**Current state:** Calibration requires real ammo, a shooter, and RSO — minimum 2 hours of range time, depends on range schedule.
**Root cause:** No dry-calibration alternative.
**AI-assisted solution:**
- Build an acoustic signal generator (known pulse at calibration frequency) to verify sensor sensitivity and positioning WITHOUT live fire
- Dry calibration eliminates range scheduling dependency
- Live-fire calibration becomes verification (1 shot per lane) not full calibration
**Target:** Reduce calibration dependency from "range must be closed for 2 hours" → "15-minute sensor verification, live-fire confirmation in 20 minutes"

### Bottleneck 3 — Range Officer Training Dependency (Step C16)

**Current state:** Training requires Workshop X personnel on-site.
**Root cause:** No self-service onboarding in the product itself.
**AI-assisted solution:**
- Build PULSE onboarding wizard (interactive walkthrough of first session, built into the UI)
- Clawdbot handles routine questions via chat (range officer messages, gets immediate response)
- Quick-reference card covers 90% of daily operations without support call
**Target:** Range officers operational independently after 2-hour handover — no ongoing trainer dependency

---

## HITL CHECKPOINT MAP

| Step | Trigger | Who Approves | What Happens if Refused |
|------|---------|-------------|------------------------|
| A1 | Survey complete | KN reviews before config | Equipment not configured until survey confirmed |
| A2 | Contract draft ready | KN reviews; Customer signs | No equipment procured until contract signed |
| A4 | FAT complete | KN signs FAT certificate | Equipment not shipped until FAT passes |
| B6 | On-site arrival | Technician: prerequisites check | Installation halted, escalate to KN |
| B7 | Each lane sensor | Technician: LED status GREEN | Sensor replaced before proceeding |
| B10 | Integration test | All lanes GREEN in PULSE | Debug before proceeding to live fire |
| B11 | Installation gate | KN (remote) + RSO (on-site) | No live fire until gate signed |
| C12 | Live-fire calibration | RSO presence required | No live fire without RSO |
| C15 | System validation gate | KN approves | No training handover until gate passed |
| C16 | Operator training | Each operator runs 1 session solo | Follow-up remote session scheduled |
| C18 | Handover | Range commander signs | System not officially transferred |

**Total HITL checkpoints: 11 across 18 steps (61% of steps have human checkpoint)**
**Gates (accountability transfer): 3 — B11, C15, C18**

---

## FALLBACK PROTOCOL REGISTER

| Failure Mode | Step | Fallback | Escalation |
|-------------|------|---------|-----------|
| Range survey incomplete | A1 | Video call walkthrough | KN schedules call with POC |
| FAT failure (hardware) | A4 | Debug + retest (max 3 cycles) | KN: hold shipment, escalate to design |
| Missing power on-site | B6 | Battery packs Day 1; plan permanent power | Range engineer + Workshop X |
| Sensor not mounting | B7 | Clamp kit; if structural: steel post | On-site fabrication or reschedule |
| Network dead zone | B8 | Range extender from kit | Add MESH node (Step B9+) |
| Deployment script fails | B9 | `rollback.sh` + manual deploy | KN remote support via SSH |
| Calibration accuracy <95% | C12 | Sensor position adjustment + retest | KN: increase sensor density |
| Non-standard ammunition | C12 | Flag → KN collects samples → model retrain | 2-week retrain cycle |
| Range officer not retaining | C16 | Leave materials + remote follow-up | Revisit UX issue in PULSE |
| Commander unavailable | C17 | Brief through Range POC + written summary | Don't delay go-live |

---

## NEXT VERSION TARGETS (v1.1 after first real deployment)

- [ ] Time each step in practice — update duration estimates with real data
- [ ] Identify which fallback protocols were actually triggered
- [ ] Add cost-per-step (labor hours + materials) for LCC analysis
- [ ] Incorporate dry-calibration protocol (Bottleneck 2 solution) when built
- [ ] Add PULSE onboarding wizard to C16 when built

---

*VN-RANGE-001 Deployment Map v1.0 — 2026-02-20*
*Framework: S4 Process Automation Design (learn by building) — CORTEX RANGE P0+P1 scope*
*Pattern reference: TARGET-DRONE-001 automation gradient from agentic_ai_skills_analysis.md*
