---
created: 2026-04-22
source: research-pipeline-v4-update
notebook: cuas-usv
topic: "Counter-UAS + Counter-USV Training Systems"
type: nlm-output-update
status: active
update_of: "RESEARCH_Counter-UAS-C-USV-Training_2026-04-22.md"
original_date: 2026-04-22
tags: [#type/nlm-output, #status/active, #topic/defense, #topic/simulation]
source_quality:
  existing_sources: 40
  new_sources_added: 12 (9 good, 2 degraded, 1 failed)
  total_after_update: 52
---

# Counter-UAS + Counter-USV Training — Research Update

**Date:** 2026-04-22 (same day update — gap-filling focus)
**Original:** RESEARCH_Counter-UAS-C-USV-Training_2026-04-22.md (33 usable sources)
**New sources:** 12 added (9 good Tier A) → 52 total in notebook

## Previous Research Key Findings
1. ALSSA doctrinal gap (C-USV doctrine complacency)
2. Simulation = regulatory-mandated monopoly (EW training illegal)
3. USV-mounted C-UAS architecture (Leonardo DRS M-MEP)
4. No competitor offers multi-domain (air+sea) LVC trainer
5. Tropical sensor degradation = negative training risk

## New Sources Added

| # | Title | Tier | Fills Gap |
|---|-------|:----:|-----------|
| N1 | CSBA "A Navy of Necessity: Ukraine's USVs at War" | A | C-USV doctrine |
| N2 | RUSI "Uncrewed Platforms Critical to Ukraine Black Sea" | A | C-USV doctrine |
| N3 | IEEE Spectrum "Sea Drones in Russia-Ukraine War" | A | C-USV tactics |
| N4 | IISS "Shifting Landscape of SE Asian UAV Programmes" | A | ASEAN market |
| N5 | ION Navigation "Adaptive Sea Clutter Suppression for USV" | A | Tropical sensor |
| N7 | Euro-SD "Warding Off New Threats: Counter UAV+USV" | A | C-USV systems |
| N8 | Navy Warfighting Dev Center for Autonomous Systems | A | C-USV doctrine |
| N9 | USN SLATE LVC Advanced Training Demo | A | LVC standards |
| N11 | Autonomy Global "Black Sea Lessons for AUKUS" | A | C-USV doctrine |

## Delta Analysis

### New Insights (not in original)

**1. Ukraine USV Doctrine = Human-in-the-Loop, NOT Full Autonomy** ★★★
- Source: RUSI (Tier A), IEEE Spectrum (Tier A)
- Ukraine's Magura V5 and Sea Baby success relied on continuous Starlink/Kymeta satellite comms for human targeting — NOT AI autonomy
- Full autonomy only developing for "last mile" to defeat Russian GPS/Starlink jamming
- **WX implication:** C-USV training sim must train BOTH human-in-loop targeting AND autonomous last-mile scenarios. Don't over-invest in full autonomy sim when human-in-loop is current doctrine.
- Changes original finding: YES — original assumed autonomous swarms were the primary threat model. Reality: HITL drones are current threat.

**2. "Mobile Minefield" Doctrine — Simplify C2** ★★★
- Source: IEEE Spectrum (Tier A), Autonomy Global (Tier A)
- US strategists pivoting: USVs as passive "mobile minefields" waiting in kill boxes, NOT active hunters
- Reduces C2 software complexity, complies with DoD autonomous weapons rules
- "Barbell strategy": high-end manned + batch expendable USVs ("batch of cookies" — 10-25 units)
- **WX implication:** VN-USV-SS-001 can use simpler autonomy. Sim scenarios should include kill-box defense, not just active patrol.

**3. Counter-USV Kinetic Tactics: Deck Guns + Guided Rounds** ★★★
- Source: Euro-SD (Tier A)
- 76mm OTO Super Rapid (120 rounds/min) effective against USVs in Red Sea
- Northrop Grumman developing 57mm guided round with onboard seeker for anti-swarm
- Passive: sinking hulks around fixed assets to block USV vectors
- **WX implication:** VN-CUAV-SIM counter-USV scenarios need gunnery engagement models (not just EW). Links to existing naval gun mount expertise (VN-MGM 300 shipped).

**4. ASEAN Indigenous Hardware Failure → Software is the Product** ★★★
- Source: IISS (Tier A)
- Indonesia's Elang Hitam indigenous MALE UAV failed technologically → reverting to foreign procurement with "local assembly"
- Thailand relying on Chinese support for DP-20 UAVs
- Philippines shifted to COTS + foreign MALE after Marawi 2017 lessons
- **WX implication:** CRITICAL strategic insight — DON'T build proprietary radar hardware. Build C-UAS/C-USV API Middleware + LVC Engine that "cleans" data from cheap COTS radars using ION MRA algorithms. Sell integration software + training, not hardware.

**5. ION Sea Clutter MRA: 82% Detection Improvement** ★★★
- Source: ION Navigation Journal (Tier A, peer-reviewed)
- Multiple Regression Analysis on 8-meter USV (Aragon) dynamically tunes radar gain using real-time environmental data (wind, barometric pressure, humidity, water temp)
- Reduced detection errors from 391 to 69 — **82.35% improvement**
- **WX implication:** THIS is the math for the Environmental Degradation Layer in VN-CUAV-SIM. Directly implements the Negative Training Trap prevention. Can license/adapt MRA algorithm for tropical Vietnamese conditions.

**6. SLATE LVC = API Standard for Sim-to-C2 Injection** ★★★
- Source: Defense.info (Tier A)
- USN VX-23 flight tests proved: virtual tracks MUST inject directly into live cockpit radars (F/A-18, Aegis)
- Standalone simulator screens ≠ valid LVC training
- **WX implication:** VN-CUAV-SIM architecture MUST support SITL (Synthetic Inject to Live) interface to real C2 systems. This is the technical standard for export credibility.

**7. Navy Creating Warfighting Development Center for Autonomous Systems** ★★
- Source: DefenseScoop (Tier A)
- ADM Caudle proposing dedicated WDC for robotic/autonomous training + tactics development
- Validates that ALSSA was wrong — if doctrine were sufficient, no WDC needed
- **WX implication:** Strengthens "tactical development lab" positioning for WX simulators. Navies creating new institutions = budget allocation = procurement opportunity.

### Contradictions with Original

| Original Finding | New Source Says | Resolution |
|-----------------|----------------|------------|
| ALSSA: no C-USV doctrine gap | Navy creating WDC for autonomous systems + TF66 established | **ALSSA definitively overridden** — Navy actions prove gap exists |
| Lasers got "middling reviews" (Army) | UK DragonFire accelerating, Navy HELIOS "beyond experimentation" | **Army vs Navy context** — ship power > vehicle power. But tropical humidity still degrades |
| "Every soldier is a drone defender" (generalist) | Navy establishing dedicated USVRON-1 + WDC (specialist) | **Platform complexity drives specialization** — naval USV/C-UAS needs dedicated units |

### Coverage Gaps Filled

| Gap (from original) | Now filled by | Confidence |
|---------------------|--------------|:----------:|
| Counter-USV doctrine/tactics | CSBA + RUSI + IEEE + Euro-SD + Autonomy Global (5 sources) | ★★★ |
| ASEAN C-UAS/C-USV market | IISS SE Asian UAV Programmes | ★★★ |
| Tropical sensor degradation math | ION Navigation MRA study (peer-reviewed) | ★★★ |
| LVC training standards | USN SLATE demo | ★★★ |

### Remaining Gaps (still open)

| Gap | Still Missing |
|-----|--------------|
| Quantitative human-factors cognitive load data | No hard data on conscript operator performance under swarm stress |
| Vietnam EW frequency spectrum regulations | Needed for synthetic RF spectrum generator in sim |
| Magura V5 / Sea Baby technical specifications | Classified/restricted — need OSINT or physical RE |

## Updated Galaxy Candidates (new insights only)

### ★★★ — Ready for Promotion

1. **"Hardware Trap — Bán Phần Mềm Tích Hợp, Không Bán Phần Cứng Độc Quyền"**
   (Sell integration software, not proprietary hardware)
   - Cluster: C (Judgment) + F (Knowledge Lifecycle)
   - Links to: [[IRONMESH Platform — ACH Compound Mechanism]], [[Sovereign AI Law — Quân Sự Chỉ Có Một Con Đường On-Premise]]
   - Source: IISS Elang Hitam failure (Tier A) + ION MRA 82% improvement (Tier A)
   - Confidence: ★★★
   - Rationale: Indonesia tried building hardware → failed. WX should build middleware + algorithms on COTS radars instead.

2. **"Human-in-the-Loop Thắng Tự Động — Bài Học Từ USV Ukraine"**
   (Human-in-the-loop beats full autonomy — Ukraine USV doctrine lesson)
   - Cluster: C (Judgment) + G (Pahl-Beitz Technical)
   - Links to: [[Phán đoán không thể uỷ thác cho AI]], [[ACH Boundary Rule — Information vs Physical Forces]]
   - Source: RUSI (Tier A), IEEE Spectrum (Tier A)
   - Confidence: ★★★
   - Rationale: Challenges ACH assumptions about full autonomy. Human judgment + satellite comms > AI autonomy in current USV ops.

### ★★ — Needs More Data

3. **"MRA Environmental Filter — 82% Cải Thiện Bằng Toán Học Không Bằng Phần Cứng"**
   - Single peer-reviewed source (ION) — high quality but needs replication in VN metocean conditions

## Source Quality Report (update)

| Metric | Original | After Update |
|--------|:--------:|:------------:|
| Total sources in notebook | 40 | 52 |
| Tier S+A (good) | 23 | 32 (+9 new A) |
| Pro ratio | 70% | 76% |
| C-USV doctrine sources | 1 (ALSSA only) | 6 (+5 new) |
| ASEAN market sources | 0 | 1 (+IISS) |
| Tropical sensor sources | 0 | 1 (+ION peer-reviewed) |
| LVC standard sources | 0 | 1 (+SLATE) |
| Galaxy candidates | 4 original | +2 new = 6 total |
