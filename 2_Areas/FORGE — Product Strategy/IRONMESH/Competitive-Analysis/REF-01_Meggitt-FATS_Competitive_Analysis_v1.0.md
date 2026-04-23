---
project: VN-12.7MM-SIM
type: competitive-reference
subject: Meggitt FATS / InVeris Training Solutions
version: 1.0
created: 2026-03-04
status: draft — pre-training knowledge (August 2025 cutoff); live web search blocked
confidence: MEDIUM (hardware/architecture); LOW (pricing); verify against InVeris website
---

# REF-01: Meggitt FATS — Competitive Intelligence Analysis

## 12.7mm Naval Mount Gunnery Simulator — Reference Product #1

> **Brand Note:** Meggitt PLC was acquired by Parker Hannifin in 2022 (~$8.8B). The Training Systems division was subsequently divested and rebranded as **InVeris Training Solutions**. The FATS product line now belongs to InVeris, not Meggitt. Verify current product names at inveris.com.

---

## 1. SYSTEM OVERVIEW

| Field | Detail |
|-------|--------|
| **Full product name** | FATS — Firearms Training Simulator / Fire Arms Training System |
| **Current brand** | InVeris Training Solutions (formerly Meggitt Training Systems) |
| **HQ** | Suwanee, Georgia, USA |
| **Primary market** | US Army, USMC, US Navy + NATO allies (ITAR-controlled export) |

### Variants Relevant to 12.7mm / Crew-Served

| Product | Caliber | Notes |
|---------|---------|-------|
| FATS M2HB Trainer | .50 cal (12.7×99mm) | **Most directly comparable** to VN-12.7MM-SIM |
| FATS Mk 19 Trainer | 40mm | Crew-served grenade launcher |
| FATS M240 Trainer | 7.62mm | Medium MG |
| FATS Naval Gunnery Trainer | Various | Shore/vessel-based; less documented |

---

## 2. HARDWARE ARCHITECTURE

### Physical Mock-up
- Full-scale non-firing replica of M2HB mounted on appropriate mount (tripod / pintle / vehicle)
- Machined aluminum/steel — dimensionally accurate for muscle memory
- Replicates traversal limits, elevation limits, charging/cocking procedures
- Butterfly trigger — electronic sensor + physical feel replication

### Recoil System
- **Type:** Pneumatic (compressed air actuated)
- **Force:** ~150–200 J simulated vs. ~1,700 J real M2HB
- **Limitation:** Significant gap — muscle memory for recoil management NOT fully developed
- **Cyclic rate:** Electronically simulated; no physical rounds

### Display System
- **Primary:** Large-format projection — 180° wrap or flat panel array
- **Screen size:** 5m×2m to 9m×3m (installation-dependent)
- **Resolution:** Legacy 1024×768/projector → modern up to 4K/channel
- **Stereo 3D:** Passive polarized on some variants for depth cues
- **VR option:** HMD integration introduced ~2022–2023 for individual modes (motion sickness issues reported)

### Sensor Suite
| Sensor | Technology |
|--------|-----------|
| Hit detection | IR laser from barrel tip + retroreflective optical sensors on screen |
| Weapon position | Optical encoders on azimuth + elevation axes |
| Fire detection | Electronic trigger sensor + laser emission sync |
| Round counter | Electronic cyclic rate simulation |
| Muzzle flash | LED simulation (some variants) |

### Instructor Station (IOS)
- Separate dual-monitor console
- Real-time scenario control, live monitoring, AAR playback
- Ethernet LAN connecting all subsystems
- Surround sound — weapon report, battlefield ambient, incoming fire

---

## 3. SOFTWARE ARCHITECTURE

### Simulation Engine
- **Proprietary engine** (primary) — not publicly confirmed as commercial off-the-shelf
- Some variants reportedly use **Presagis** tools for terrain/scene generation
- Newer infantry variants: VBS3/VBS4 (Bohemia Interactive Simulations) — crew-served fidelity uses proprietary physics
- OS: Windows 10 / Windows Server

### Ballistic Model
- **Point-mass trajectory** (not 6-DOF)
- Accounts for: range, angle, moving-target lead, simplified wind
- **Tracer simulation:** Visual tracer rounds for walk-in fire correction (critical for M2HB training)
- **Dispersion model:** Statistical CEP applied to replicate real weapon's beaten zone
- No terminal effects / penetration physics

### Scenario Editor (FATS Authoring Tool)
- Proprietary GUI — scenario authoring for IOS operators
- Capabilities: static/moving target placement, behavior scripting (approach vector, speed, threat class), environment (TOD, weather, visibility), multi-phase engagement scripts
- Pre-built: standard US Army/USMC qualification courses
- **Known pain point:** Steep learning curve for non-technical instructors

### Network / Integration
- TCP/IP LAN; some systems support DIS/HLA for larger exercise integration (expensive add-on)

---

## 4. PERFORMANCE SPECIFICATIONS

| Metric | Claimed Value | Confidence |
|--------|--------------|-----------|
| Skill transfer to live fire | 70–85% hit rate improvement vs. untrained | LOW (marketing claim) |
| Training time reduction | 40–60% fewer live-fire hours to qualification | LOW (marketing claim) |
| Ammo cost savings | $500–$2,000/trainee/qualification cycle | MEDIUM |
| Throughput | 6–12 trainees/hour/station (individual weapons) | MEDIUM |
| System uptime | >95% (contractual SLA) | MEDIUM |

**Independent validation:** TRADOC (US Army) studies on marksmanship simulators generally confirm 60–75% positive transfer of training. Specific M2HB FATS data not widely published in open sources.

---

## 5. INSTRUCTOR CAPABILITIES

### Real-time Monitoring
- Point-of-aim overlay on scenario display
- Live metrics: rounds fired, hits, misses, first-round hit probability, time-to-engage, muzzle discipline violations
- On-the-fly scenario injection: add targets, change conditions mid-exercise

### After-Action Review (AAR)
- Full session replay from multiple camera angles (including weapon POV)
- Shot-by-shot reconstruction with hit/miss annotation
- Exportable PDF/data reports
- Cross-session and cross-trainee comparison

### Trainee Feedback
- Real-time audio (weapon, hit/miss sounds)
- Visual tracer for self-correction
- Post-exercise score display

---

## 6. PRICING & MARKET

### Price Estimates (NOT verified — do not use as procurement reference)

| Configuration | Estimated USD |
|--------------|--------------|
| Single-station infantry (M4/M16) | $200K – $500K |
| Crew-served single station (M2HB/Mk19) | **$500K – $1,500K** |
| Multi-station networked system | $2M – $8M+ |
| Naval/vehicle gunnery system | $1M – $3M+ |

> Source: Open-source contract reporting and trade press estimates. Actual pricing varies significantly by configuration, screen size, software packages, and maintenance contract.

### Key Customers
- US Army, USMC, US Navy (IDIQ contracts — STTS program)
- NATO allies, Five Eyes partners
- Export: ITAR-controlled — non-US customers require export license

---

## 7. KNOWN WEAKNESSES / GAPS

| Weakness | Description | VN-12.7MM-SIM Opportunity |
|----------|-------------|--------------------------|
| **Recoil fidelity gap** | ~150J simulated vs. ~1,700J real M2HB — muscle memory for recoil management incomplete | Hybrid linear actuator + voice coil at higher energy |
| **Proprietary ecosystem lock-in** | IOS, scenario editor, maintenance all locked to InVeris — expensive long-term support | Open architecture + local software maintenance |
| **Screen-based installation** | Fixed, large footprint — no training for field expedient positions or non-standard mounts | Portable/modular design (I-02 containerized variant) |
| **VR immaturity** | HMD variants cited latency + motion sickness in early reports | Validated screen-based primary; VR as optional |
| **Ballistic model simplicity** | Point-mass only — insufficient for extended range or precision fire | Same limitation — not a differentiator at this TRL |
| **Scenario editor complexity** | Steep learning curve for non-technical instructors | Touchscreen-native IOS designed for non-technical use |
| **No LVC integration in base config** | Connecting to live-force tracking requires expensive middleware | Not applicable at VN scale |
| **ITAR dependency** | Non-US customers face export control on spares/upgrades — supply disruption risk | **ITAR-free supply chain = single biggest differentiator for ASEAN market** |
| **No crew coordination training** | Individual position only — no team scoring or communication training built in | Gunner + assistant gunner pair scoring as native feature |
| **Cost barrier** | High capital cost excludes smaller militaries and non-NATO markets | 30–50% price point targets priced-out markets |

---

## 8. IP / PATENTS

### Known Patent Areas
- Laser-based hit detection systems for firearms training
- Recoil simulation mechanisms (pneumatic + electromagnetic)
- Weapon replica mounting systems with multi-axis encoding
- Training scenario generation and AAR software methods

### Patent Search Guidance
- **USPC class:** 434/21 (weapons training)
- **CPC class:** F41G 3/26 (training apparatus for firearms)
- **Google Patents queries:**
  - `assignee:Meggitt training simulator`
  - `assignee:"Caswell International" firearms simulator`
  - `assignee:"InVeris Training" simulator`

---

## 9. DESIGN IMPLICATIONS FOR VN-12.7MM-SIM

Based on this analysis, priority differentiators for the Vietnamese indigenous product:

| Priority | Action | Rationale |
|----------|--------|-----------|
| **P1** | ITAR-free supply chain | Largest non-technical differentiator for ASEAN/Vietnam |
| **P2** | 30–50% price point vs FATS | $35–45K vs $500K–$1.5M — targets completely different market segment |
| **P3** | Simpler IOS / touchscreen authoring | Documented pain point — instructor usability |
| **P4** | Modular mount (tripod + naval pintle) | FATS has separate SKUs; integrate from design |
| **P5** | Crew pair scoring (gunner + A-gunner) | Native feature, not add-on |
| **P6** | Higher recoil energy | Linear actuator + voice coil hybrid — not pneumatic |
| **P7** | IRONMESH integration | AI-coached training — no FATS equivalent in base config |

---

## 10. INFORMATION GAPS (VERIFICATION NEEDED)

| Gap | How to Verify |
|-----|--------------|
| Current product names under InVeris brand | Visit inveris.com |
| Actual M2HB FATS unit pricing | SAM.gov → search "InVeris Training Solutions" contract awards |
| Transfer-of-training data for M2HB specifically | DTIC.mil — search "FATS M2HB transfer of training" |
| Current ballistic engine (proprietary vs VBS) | Jane's Defence Equipment & Technology subscription |
| Naval variant specifications | NAVSEA or Naval Air Systems Command contract database |

---

## METADATA

```
Confidence levels by section:
  System overview:      MEDIUM (InVeris rebrand may have changed product names post-2022)
  Hardware:             MEDIUM-HIGH (multiple technical descriptions from training literature)
  Software:             MEDIUM (engine details inferred; not publicly confirmed)
  Performance specs:    LOW-MEDIUM (marketing claims; limited independent validation)
  Pricing:              LOW (estimates only; contract values often not public)
  Weaknesses:           MEDIUM (training literature + user community feedback)
  IP/Patents:           LOW (specific patent numbers not retrieved)

Data sources:
  Pre-training knowledge (cutoff August 2025)
  Live web search: BLOCKED in this session (permission denied)

Next action:
  Verify InVeris current product catalog at inveris.com
  Cross-reference with Saab and Rheinmetall analysis (REF-02, REF-03)
```
