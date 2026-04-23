---
created: 2026-04-22
source: research-pipeline-v4-deep
notebook: cuas-usv
topic: "Counter-UAS + Counter-USV Training Systems"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #topic/defense, #topic/simulation]
source_quality:
  tier_s: 11 (6 govt/standards + 5 patents)
  tier_a: 12
  tier_b: 6
  tier_c: 4
  pro_ratio: "70%"
  note: "5 patents inflate S count — honest depth: 6 papers/standards + 12 authority"
sources_analyzed:
  - title: "ALSSA Counter-Unmanned Systems Study Sep 2024"
    tier: S
    url: "https://www.alssa.mil/Portals/9/Documents/studies/cus_study_2024.pdf"
  - title: "ATP 3-01.81 C-UAS Training at NTC"
    tier: S
    url: "https://api.army.mil/e2/c/downloads/2025/08/29/4a176176/counter-unmanned-aerial-systems-c-uas-training-and-implementation-at-the-national-training-center.pdf"
  - title: "DoD Strategy for Countering Unmanned Systems (Dec 2024)"
    tier: S
    url: "https://media.defense.gov/2024/Dec/05/2003599149/-1/-1/0/FACT-SHEET-STRATEGY-FOR-COUNTERING-UNMANNED-SYSTEMS.PDF"
  - title: "CRS R48477 DoD Counter-UAS Background"
    tier: S
    url: "https://www.congress.gov/crs_external_products/R/PDF/R48477/R48477.1.pdf"
  - title: "UN Guidelines on Counter-UAS (2025)"
    tier: S
    url: "https://resourcehub01.blob.core.windows.net/%24web/Policy%20and%20Guidance/corepeacekeepingguidance/Thematic%20Operational%20Activities/Military/2025.16%20Guidelines%20on%20Counter%20Unmanned%20Aircraft%20Systems.pdf"
  - title: "USN Unmanned Campaign Framework (2021)"
    tier: S
    url: "https://www.navy.mil/Portals/1/Strategic/20210315%20Unmanned%20Campaign_Final_LowRes.pdf"
  - title: "Leonardo DRS Maritime C-UAS M-MEP (Naval News)"
    tier: A
    url: "https://www.navalnews.com/event-news/sea-air-space-2026/2026/04/leonardo-drs-launches-new-maritime-c-uas-capability/"
  - title: "L3Harris Naval VAMPIRE Counter Drone"
    tier: A
    url: "https://www.navalnews.com/naval-news/2025/10/l3harris-reveals-details-on-naval-vampire-counter-drone-system/"
  - title: "QinetiQ C-drone Training Royal Navy"
    tier: A
    url: "https://militaryembedded.com/unmanned/counter-uas/counter-drone-training-provided-to-royal-navy-by-qinetiq-during-exercise"
  - title: "MILO C-UAS Training Simulation"
    tier: A
    url: "https://www.faac.com/milo/solutions/counter-uas-training-c-uas-simulation-milo/"
  - title: "DroneShield DroneSim"
    tier: A
    url: "https://www.unmannedairspace.info/counter-uas-systems-and-policies/droneshield-enters-training-and-simulation-market-with-deployable-drone-simulator-for-c-uas-testing-and-validation/"
  - title: "Zen Technologies C-UAS + Simulators (Janes)"
    tier: A
    url: "https://www.janes.com/osint-insights/defence-news/defence/feature-zen-technologies-expands-beyond-simulators-into-c-uas-weapons-and-robotics"
---

# Counter-UAS + Counter-USV Training Systems — Deep Research

**Date:** 2026-04-22
**Mode:** --deep (DCA v2 on S/A sources)
**NLM Notebook:** cuas-usv (42671547-243d-422f-a91f-66deab5786a0)
**Sources analyzed:** 33 usable / 43 total (6 degraded Cloudflare/error)
**Queries executed:** 6 (Deep 6Q + WX-specific + Cross-synthesis + CL-1 + CL-2 + CL-3)

---

## Executive Summary for Workshop X

**The single most important finding:** There is a massive, unserved product gap at the intersection of C-UAS training + USV platforms + C-USV (counter-USV) training. No company currently offers an integrated multi-domain training simulator that combines aerial drone swarm threats WITH maritime USV swarm threats on a single platform. Workshop X's existing portfolio (Vega Prime naval sim, Unity C-UAS sim, physical USVs, target drones) makes it uniquely positioned to fill this gap.

**Market size:** C-UAS market $8.4B (2025) → $69.7B (2034), CAGR 26.5%. Asia-Pacific projected highest growth.

**Key strategic insight:** Training systems are EASIER to export than actual weapons (no ITAR/EW frequency restrictions), and ALSSA's doctrinal complacency on counter-USV creates a market where simulators can serve as tactical development labs — navies will buy them to WRITE their own SOPs.

---

## Analysis

### Insight 1: Doctrinal Gap = Market Opportunity (ALSSA Finding)
- **Source tier:** S (ALSSA Counter-Unmanned Systems Study Sep 2024)
- **Confidence:** ★★★ HIGH
- **Cross-validated by:** NTC Training Report (contradicts ALSSA, confirming gap exists operationally)
- **Finding:** ALSSA concluded that existing NTTP 3-20.5 (Counter FAC/FIAC, written for manned speedboats) is "perfectly sufficient" for countering unmanned surface vessels. They recommend NO new counter-USV doctrine. Meanwhile, the NTC Training Report documents that units arrive without TACSOPs and "learn C-UAS tactics on the fly" with "highly inconsistent results."
- **WX implication:** This bureaucratic complacency = lucrative opening. Navies lack modern C-USV battle drills. WX simulators can serve as both training tools AND tactical development laboratories.
- **Galaxy candidate:** YES — "Doctrinal Complacency Law — When doctrine says 'no gap exists,' the operational gap is at its widest"

### Insight 2: LVC Training is the Only Viable Path for C-UAS/EW
- **Source tier:** S (NTC Training Report) + A (MILO, DroneShield, QinetiQ)
- **Confidence:** ★★★ HIGH
- **Cross-validated by:** CRS Report, UN Guidelines
- **Finding:** Peacetime FAA/FCC regulations prohibit GPS/RF jamming during training. MILES laser-tag systems are NOT compatible with C-UAS weapons. Soldiers cannot practice EW realistically → lose confidence in equipment. Live-Virtual-Constructive (LVC) simulation is the ONLY legally compliant way to train C-UAS EW and kinetic response.
- **WX implication:** Simulation is not optional — it's the only path. This makes C-UAS training simulators a regulatory-mandated market, not a nice-to-have.
- **Galaxy candidate:** YES — "Regulatory Mandate Training Law — When live training is illegal, simulation becomes monopoly"

### Insight 3: USV-Mounted C-UAS Architecture (Leonardo DRS M-MEP)
- **Source tier:** A (Leonardo DRS, L3Harris, Naval News)
- **Confidence:** ★★★ HIGH
- **Finding:** Complete USV C-UAS subsystem architecture identified:
  - **Sensors:** Maritime radar (AESA/PESA/FMCW) + EO/IR (WESCAM MX-10D) + acoustic
  - **Effectors:** Soft-kill (RF jammer, GPS spoofer) + Hard-kill (APKWS laser-guided rockets, HEL)
  - **C2:** AI sensor fusion (Leonardo DRS SAGEcore), legacy FAADC2 being replaced
  - **Comms:** Custom low-latency UDP (NOT standard TCP/UDP — too slow for targeting)
  - **Power:** SWaP critical constraint on smaller USVs
  - **Platform:** Leonardo DRS M-MEP on Sea Machines STORMRUNNER AUSV, L3Harris VAMPIRE planned for Navy USVs
- **WX implication:** Architecture reference for VN-USV-SS-001 C-UAS variant. Also defines what a training simulator must accurately model.
- **Galaxy candidate:** YES — architecture reference note

### Insight 4: C-UAS Training Competitor Landscape
- **Source tier:** A (MILO, DroneShield, QinetiQ, Zen Tech, Rheinmetall)
- **Confidence:** ★★★ HIGH
- **Competitors mapped:**
  | Company | Product | Type | Focus | Price Ref |
  |---------|---------|------|-------|-----------|
  | MILO (FAAC) | C-UAS Takedown | Visual sim + shotgun | Infantry SKYNET net | — |
  | DroneShield | DroneSim | RF signal emulator | Sensor testing UAV/UGV/USV | Ruggedized case |
  | QinetiQ/Inzpire | Banshee + virtual inject | Hybrid LVC | Carrier Strike Group | $41M contract |
  | Zen Technologies | Combat Training Node | 60+ integrated sims | Infantry/urban/C-drone | $13M (India) |
  | Rheinmetall | VTAM | Distributed naval sim | Frigate crews | — |
- **Gap:** NONE offer USV-based C-UAS sim or C-USV (counter-surface-drone) training. All focus on either land (MILO, Zen) or large manned ships (Rheinmetall, QinetiQ).
- **Galaxy candidate:** NO — competitive intel, not atomic insight

### Insight 5: Asymmetric Cost Dynamics Drive Simulation Demand
- **Source tier:** S (CRS Report, DoD Strategy)
- **Confidence:** ★★★ HIGH
- **Finding:** $2M missile vs $2,000 drone cost imbalance is unsustainable. Navy spent $1B extra on munitions in Red Sea Houthi operations. DoD Strategy explicitly targets "reducing cost imbalance" as priority. Directed energy (lasers) promise lower cost-per-shot but M-SHORAD 50kW laser got "middling reviews" in combat deployment.
- **WX implication:** Cost pressure drives demand for (a) cheaper effectors AND (b) more simulation training to avoid wasting expensive munitions. Both benefit WX.
- **Galaxy candidate:** NO — well-known dynamic

### Insight 6: Threat Evolution Outpaces Defense Adaptation
- **Source tier:** S (DoD Strategy, CRS Report)
- **Confidence:** ★★★ HIGH
- **Finding:** Systems bought 3 years ago are "being outclassed." Adversaries shifting to non-RF autonomous drones → current RF detection useless. DOD responded with Replicator 2 initiative, JCO semi-annual demos, RAIL autonomy lab. Training cycle lag is severe: institutional TACSOPs cannot keep up with threat adaptation.
- **WX implication:** Simulator must be rapidly updateable with new threat profiles. Modular scenario design = competitive advantage. Also: target drone + towed target product lines directly serve C-UAS testing demand.
- **Galaxy candidate:** NO — covered by existing Shifting the Burden archetype

### Insight 7: Tropical Maritime Environment Invalidates Western Sensor Specs
- **Source tier:** Cross-validated (CL-2 Assumption Killer + CL-3 Methodology Audit)
- **Confidence:** ★★ MED (no direct tropical test data in sources)
- **Finding:** ALL sources assume temperate-climate sensor performance. No source tests in tropical maritime conditions (high humidity, salt fog, heavy rain, biological clutter). Lasers suffer thermal blooming. Radar gets sea clutter. EO/IR degrades in rain. If WX builds simulators using Western datasheets without tropical degradation models → "negative training."
- **WX implication:** CRITICAL design requirement. WX must model environmental degradation in sim. This is also a competitive differentiator — Vietnamese sim that models tropical degradation is more realistic than Western competitors for ASEAN markets.
- **Galaxy candidate:** YES — "Negative Training Trap — Sim that models wrong environment teaches wrong lessons"

### Insight 8: Human Factors Gap — Cognitive Load Unaddressed
- **Source tier:** Cross-validated (CL-2 + CL-3)
- **Confidence:** ★★ MED
- **Finding:** No source measures cognitive burden on operators managing multi-sensor AI C2 under stress. Legacy FAADC2 requires manual target selection → "distracts operator focus." Vietnam's conscript-heavy force structure makes this critical — UI must be foolproof for average soldier, not specialist.
- **WX implication:** Sim UI/UX is a non-delegable design decision. Must test with actual Vietnamese military operators, not assume Western training levels.
- **Galaxy candidate:** YES — "Operator Cognitive Ceiling — C2 complexity that exceeds user skill = expensive paperweight"

### Insight 9: Supply Chain Independence = Sovereign Design Imperative
- **Source tier:** Cross-validated (CL-2 Assumption #3)
- **Confidence:** ★★ MED
- **Finding:** All Western C-UAS sources assume uninterrupted OEM support and component supply. Vietnam cannot rely on foreign OEMs for battlefield repairs or unrestricted resupply (ITAR, embargoes). Domestic systems must use locally fabricable components with self-contained maintenance.
- **WX implication:** Reinforces Sovereign AI Law from previous research. C-UAS training sim must be built on domestically controlled stack (Unity engine = owned IP, good). Hardware components must avoid ITAR-restricted sensors.
- **Galaxy candidate:** NO — covered by existing Sovereign AI Law note

### Insight 10: China L30 USV Swarm — C-USV Training Demand Signal
- **Source tier:** B (Army Recognition)
- **Confidence:** ★★ MED (single source, recent event)
- **Finding:** China tested autonomous L30 USV swarm (March 2026) off Zhuhai — coordinated patrol, detection, and interception without onboard crews. Ukraine's Black Sea USV operations forced Russia to relocate fleet. USN Task Force 66 running Baltic Operations 2025 with drone-boat attack simulations.
- **WX implication:** Counter-USV training demand is emerging NOW. First-mover advantage for VN Navy sim that models autonomous USV swarm threats.
- **Galaxy candidate:** NO — current event, not atomic insight

---

## Contradictions (CL-1 — CEO Review Required)

| Severity | Topic | Position A | Position B |
|----------|-------|-----------|-----------|
| **CRITICAL** | C-USV doctrine need | ALSSA: existing FAC/FIAC doctrine sufficient | NTC: units lack TACSOPs, learn on-the-fly |
| **CRITICAL** | Laser effectiveness | Market reports: infinite magazine, key growth driver | CRS: "middling reviews" in combat, production costs negate per-shot savings |
| **CRITICAL** | EW training viability | CRS/DSIAC: EW jammers are primary tools | NTC: peacetime regulations prevent realistic EW training |
| **MODERATE** | Operator specialization | US doctrine: every soldier is drone defender | UN Guidelines: requires dedicated C-UAS Planner/Operator/Analyst |
| **MODERATE** | Radar vs optical detection | Academic: radar is foundational layer | Patents/UN: radar can't distinguish birds from drones, needs polarimetric |

---

## Hidden Assumptions (CL-2 — Vietnam Context Rating)

| Assumption | If Wrong | VN Relevance |
|-----------|----------|:------------:|
| Sensors perform per Western datasheets in tropical maritime | Lasers bloom, radar clutters, EO/IR degrades | **HIGH** |
| General soldiers can operate complex C2 | Cognitive overload → system useless | **HIGH** |
| Uninterrupted OEM supply chain | Systems become paperweights | **HIGH** |
| Open architecture = easy plug-and-play | Integration requires massive custom R&D | **MEDIUM** |
| Western EM spectrum rules are universal | Sim locked to wrong frequency bands | **MEDIUM** |

---

## Methodology Gaps (CL-3)

- **Dominant:** Field tests + combat case studies (Ukraine, Red Sea, exercises)
- **Weakest:** Market reports (vendor interviews ≠ reality)
- **Absent:** Human factors cognitive load studies, tropical maritime sensor experiments
- **Most dangerous for WX:** Building sims on Western temperate-climate sensor models without tropical degradation data → "negative training"

---

## Galaxy Candidates (THINH H — Hoa)

### ★★★/★★ — Ready for Promotion

1. **"Khoang Trong Hoc Thuyet — Khi hoc thuyet noi 'khong co gap,' gap van hanh lon nhat"**
   (Doctrinal Complacency Law — When doctrine says no gap, operational gap is widest)
   - Cluster: E (Systems Archetypes) + C (Judgment)
   - Links to: [[Shifting the Burden Archetype]], [[Phan doan khong the uy thac cho AI]]
   - Source: ALSSA Study (Tier S) + NTC Training Report (Tier S)
   - Confidence: ★★★

2. **"Khi huan luyen thuc khong hop phap, mo phong la doc quyen"**
   (Regulatory Mandate Training Law — When live training is illegal, simulation becomes monopoly)
   - Cluster: C (Judgment) + F (Knowledge Lifecycle)
   - Links to: [[Physical-World Interface]], [[Training Value Index]]
   - Source: NTC Report (Tier S) + CRS Report (Tier S) + MILO/DroneShield (Tier A)
   - Confidence: ★★★

3. **"Negative Training Trap — Mo phong sai moi truong day sai bai hoc"**
   (Sim that models wrong environment teaches wrong lessons)
   - Cluster: D (AI Failure Modes) + H (Physical Design)
   - Links to: [[Training Scars]], [[VN Metocean Design Envelope]]
   - Source: CL-2 + CL-3 cross-validation
   - Confidence: ★★

4. **"Operator Cognitive Ceiling — Do phuc tap C2 vuot ky nang nguoi dung = gia sat dat tien"**
   (C2 complexity exceeding user skill = expensive paperweight)
   - Cluster: C (Judgment) + D (AI Failure Modes)
   - Links to: [[Phan doan khong the uy thac cho AI]], [[AI Dependency Spiral]]
   - Source: CRS Report (Tier S) + CL-2 analysis
   - Confidence: ★★

### ★ — Needs Verification Before Galaxy

1. "USV-mounted C-UAS is the convergent architecture" — only 2 OEMs (Leonardo DRS, L3Harris) demonstrated → needs broader validation
2. "China L30 swarm = paradigm shift for C-USV" — single exercise, single source → needs operational follow-up

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 43 |
| Tier S (Standards/Govt) | 6 |
| Tier S (Patents) | 5 |
| Tier A (Authority/OEM) | 14 (12 good, 2 degraded) |
| Tier B (Professional/YT) | 11 (6 good, 5 YT blocked) |
| Tier C (Academic/Community) | 7 (4 good, 2 ResearchGate down, 1 Dedrone) |
| Pro ratio (good S+A / good total) | 70% |
| Insights extracted | 10 |
| ★★★ HIGH confidence | 6 |
| ★★ MED confidence | 4 |
| ★ LOW confidence | 2 |
| Galaxy candidates | 4 ready (2★★★ + 2★★), 2 needs verification |

### Patent Landscape
- Patents found: 5
- Active patents relevant: 3 (EMP C-UAV, polarimetric detection, unmanned vehicle recognition)
- Freedom-to-operate concern: **LOW** — patents cover specific effector/sensor implementations, not training simulation
- CEO: training simulators do NOT infringe on these weapon system patents

### Coverage Gaps
- **Counter-USV training doctrine** — no Tier S/A source specifically addresses C-USV simulation training
  → Suggested search: "counter-USV training simulation doctrine NTTP" + "autonomous boat swarm defense training"
- **Tropical maritime sensor degradation** — no empirical data found
  → Suggested: contact VN Navy for metocean sensor test data, or design WX-internal test protocol
- **ASEAN C-UAS/C-USV training market** — all sources focus US/NATO
  → Suggested search: "ASEAN counter-drone market" + "Vietnam naval modernization counter-UAS"

### NLM Status
- NLM notebook: cuas-usv (33 good sources)
- NLM gaps: 6 degraded (Cloudflare/error pages), 5 YouTube blocked
- Auto-fallback triggered: NO
- Auth status: stable throughout pipeline

### Recommendation for Next Research
1. **ASEAN C-UAS market deep dive** — Vietnam/Thailand/Indonesia naval modernization + C-UAS procurement
2. **Counter-USV specific sources** — Ukraine Black Sea drone boat operations, USN Task Force 66 exercises
3. **Tropical maritime sensor testing** — academic papers on radar/EO performance in tropical conditions
4. **QinetiQ hybrid LVC methodology** — deeper look at synthetic target injection into live C2 (directly relevant to VN-CUAV-SIM architecture)

---

## WX Product Portfolio Implications

| WX Product | Opportunity | Priority |
|-----------|------------|:--------:|
| **VN-CUAV-SIM** | Add C-UAS scenarios (aerial drone swarm threats to naval vessels) + C-USV scenarios (surface drone swarm) | **HIGH** |
| **VN-USV-SS-001** | C-UAS variant: mount sensor/effector sim payload on USV platform | **HIGH** |
| **TARGET-DRONE** | Serve as live C-UAS training target for exercise market (like QinetiQ Banshee) | **MED** |
| **VN-AST-MSL-001** | Towed target simulating USV surface threat for C-USV gunnery training | **MED** |
| **Naval Sim (Vega)** | Extend existing naval sim with C-UAS/C-USV tactical scenarios | **MED** |
| **BB-01 LOMAH** | No direct connection | LOW |

**Highest-value new product concept:** Multi-domain LVC training system that generates simultaneous aerial drone swarms + USV swarm attacks on a rocking virtual ship deck, with synthetic target injection into real C2 software. No competitor offers this today.
