---
project: VN-CUAV-SIM-001
product: ACME Gun Active Recoil (GAR®) Gunnery Training System (GTS)
stage: 0 — IP & Legal Gate
mode: MECHA
created: 2026-04-20
author: AI (Offload) → CEO validates (Core)
---

# STAGE 0: IP & LEGAL GATE — ACME GAR® GTS

## 0A — IP Landscape

### Patent Family (5 patents, same invention chain)

| Patent | Title | Filed | Issued | Expires | Status |
|--------|-------|-------|--------|---------|--------|
| **US 8,690,575 B1** | Apparatus and Method for a Weapon Simulator | 2009-11-03 | 2014-04-08 | **2031-03-23** | ACTIVE |
| US 9,175,922 B1 | (continuation) | ~2014 | 2015 | ~2029 | ACTIVE |
| US 9,568,268 B1 | (continuation) | ~2015 | 2017 | ~2029 | ACTIVE |
| **US 10,001,338 B1** | Apparatus and Method for a Weapon Simulator | ~2017 | 2018-06-19 | **2029-11-03** | ACTIVE |
| US 10,677,557 B1 | (continuation) | ~2018 | 2020 | ~2029 | ACTIVE |

**Priority date:** 2008-11-03 (provisional). Continuation chain = same inventive concept, refined claims.

**Active litigation:** 2 cases found:
- New Mexico District Court: Case 1:14-cv-01041
- Florida Middle District Court: Case 6:15-cv-00637

⚠️ **ACME actively enforces patents.** Litigation history = aggressive IP posture.

### Core Claims Analysis (US 8,690,575 — broadest patent)

**Independent Claim 1 (Apparatus):** Weapon simulator comprising:
1. Gun active recoil unit with **slide tray** + at least one **electric motor**
2. Gun mounted to recoil unit with trigger functionality
3. **Host computer** capable of **dynamically altering frequency of recoils per second**

**Independent Claim 14 (Method):** Trigger squeeze → signal to host computer → host commands recoil simulation

**Independent Claim 25 (Alt Apparatus):** Processor-mediated control architecture variant

### What Is Actually Patented (Claim Scope)

| Element | Patented? | Specificity | Design-Around Opportunity |
|---------|-----------|-------------|--------------------------|
| Electric motor driving slide tray | YES | Specific to "electric motor" + "slide tray" | Pneumatic, hydraulic, linear actuator, magnetic |
| External mount recoil (weapon moves, not internals) | YES | Core concept | Internal mechanism actuation (different approach) |
| Host computer dynamic rate control | YES | Specific to host-mediated | Autonomous onboard control, fixed-rate, mechanical |
| Trigger → host → motor sequence | YES | Specific signal path | Direct trigger-to-actuator, no host intermediary |
| Malfunction simulation via host | YES (dependent) | Specific feature | Different malfunction architecture |
| Adjustable mounting pintles | YES (dependent) | Specific hardware | Alternative mount systems |
| Muzzle flash LED | YES (dependent) | Minor feature | Alternative flash method |

### Trade Secret Indicators

| Area | Evidence | Risk Level |
|------|----------|-----------|
| Motor specifications (torque, model) | Not disclosed publicly | MEDIUM |
| Control algorithms (force profile per weapon) | "Burnt onto onboard motor controller" | HIGH |
| Recoil calibration data per weapon type | Proprietary tuning | HIGH |
| Software platform | Not disclosed (C++, Java, or microcode mentioned in patent) | MEDIUM |
| Slide tray mass / stroke optimization | 0.10"–0.5" range disclosed, exact per weapon not | MEDIUM |

### Patent Expiration Timeline

```
2026 ──────────── NOW (all patents ACTIVE)
2029 ──────────── US 10,001,338 + 3 continuations expire (Nov 2029)
2031 ──────────── US 8,690,575 expires (Mar 2031)
     ──────────── ALL PATENTS EXPIRED — free to practice
```

**Key insight:** Earliest patent expiry = Nov 2029 (3.5 years from now). Broadest patent (8,690,575) expires Mar 2031 (5 years). If WX timeline allows, waiting until 2031 eliminates ALL patent risk.

---

## 0B — Export Control Assessment

### ITAR / USML Classification

| Category | Assessment | Confidence |
|----------|-----------|-----------|
| **USML Cat I** (Firearms) | NO — GAR is training device, not firearm | HIGH |
| **USML Cat IX** (Military Training) | **LIKELY** — simulators of USML-listed weapons | HIGH |
| **USML Cat XI** (Military Electronics) | Possible for control subsystem | MEDIUM |

**Key determination:** GAR simulates weapons listed on USML (M2, M240, M249 = Cat I items). Per ITAR rules, simulators of USML-listed items → USML Category IX.

**However:** Some military training equipment was transferred from USML Cat IX → **EAR ECCN 0A614** in 2020 rule changes. The exact classification of GAR-type devices under current rules is uncertain without a formal CJ (Commodity Jurisdiction) determination.

### EAR / ECCN (if Commerce jurisdiction)

| ECCN | Description | Likelihood |
|------|-------------|-----------|
| **0A614** | Military training equipment not on USML | MEDIUM |
| **7A611** | Navigation/avionics training | LOW |

### Wassenaar Arrangement

| Category | Description | Applicability |
|----------|-------------|--------------|
| **ML14** | Specialised equipment for military training | **YES** — covers simulators for training in use of firearms/weapons |

**Bottom line:** GAR GTS is almost certainly export-controlled under either ITAR (USML Cat IX) or EAR (ECCN 0A614). Either way, US export license required for Vietnam. **This is NOT an ITAR-free product.**

### Vietnam as Destination

- US-Vietnam defense relationship: improving but still restricted
- Vietnam not in Country Group D:5 (weapons embargo) but not in A:1 either
- Case-by-case license review likely
- End-use monitoring requirements probable

---

## 0C — Vietnam Legal Framework

### Relevant Laws

| Law | Relevance |
|-----|-----------|
| **Luật Công nghiệp Quốc phòng 2024** | Domestic defense production framework; RE for sovereign capability = aligned with national policy |
| **Law 32/2021/QH15** | Defense procurement procedures; legitimate acquisition context |
| **IP Law Vietnam 2022 amendments** | Patent protection in VN; US patents NOT enforceable in Vietnam directly BUT commercial risk exists |
| **QPAN regulations** | Military acceptance testing requirements |

### Vietnam IP Considerations

- US patents are territorial — not directly enforceable in Vietnam
- **However:** If WX ever exports to US allies or ITAR-compliant markets, patent infringement becomes a risk
- Vietnam is a WIPO member + WTO TRIPS signatory → domestic patent filing possible by ACME in VN (check VN patent database)
- **Recommendation:** Check if ACME has filed equivalent patents in Vietnam via NOIP (National Office of Intellectual Property)

---

## 0D — RE Legality Assessment

### Clean-Room vs. Contaminated Analysis

| Aspect | Status | Risk |
|--------|--------|------|
| Patent text analysis | PUBLIC DOMAIN — reading patents is legal | NONE |
| OSINT from brochures, web | PUBLIC DOMAIN | NONE |
| Physical inspection of purchased unit | LEGAL if legitimately acquired | LOW |
| Disassembly of purchased unit | LEGAL in most jurisdictions (first-sale doctrine) | LOW |
| Reproducing patented mechanism | **INFRINGEMENT in US + patent-filing countries** | HIGH in US |
| Clean-room redesign with different mechanism | LEGAL if genuinely independent | LOW-MEDIUM |
| Software reverse engineering | Varies by EULA/contract terms | MEDIUM |

### Documentation Requirements for Independent Development

1. ✅ Document all publicly available sources used (patents, brochures, papers)
2. ✅ Document design decisions with independent rationale (not copying)
3. ✅ Maintain "clean-room" separation: people who read patents ≠ people who design
4. ✅ Show alternative approaches explored (morphological matrix)
5. ✅ Independent testing and calibration data

---

## 0E — Safer Path Recommendations

### Strategy Matrix

| Strategy | Risk | Timeline | Cost | Sovereignty |
|----------|------|----------|------|-------------|
| **A. Design-Around (NOW)** | LOW | 12-18 months | $30-80K | 100% |
| **B. Wait for Patent Expiry (2031)** | ZERO | 5 years | $0 NRE | 100% |
| **C. License from ACME** | LOW | 6-12 months | $50-200K + royalties | 0% (dependent) |
| **D. Partnership/JV** | LOW-MEDIUM | 12-24 months | $100-500K | 30-60% |
| **E. Independent Development (ignore patents)** | HIGH in export | 12-18 months | $30-80K | 100% domestic |

### Recommended Strategy: **A — Design-Around with Patent Awareness**

**Rationale:**
1. ACME's core claims are NARROW — they patent specific mechanism (electric motor + slide tray + host computer dynamic rate control)
2. Multiple viable alternative architectures exist that avoid all independent claims
3. WX already has recoil simulation R&D from VN-12.7MM-SIM (magnetic brake approach)
4. Vietnam domestic use = no US patent jurisdiction risk
5. Export risk manageable if design is genuinely different

### Top 10 Design-Around Opportunities (from Patent Claim Analysis)

| # | ACME Patented Element | WX Design-Around | Feasibility |
|---|----------------------|-----------------|-------------|
| 1 | Electric motor + rotary gearbox | **Linear electromagnetic actuator** (voice coil) | HIGH |
| 2 | Slide tray on linear bearings | **Pivoting recoil cradle** (rotational, not translation) | HIGH |
| 3 | Host computer dynamic rate control | **Embedded MCU autonomous control** (no host dependency) | HIGH |
| 4 | Trigger → host → motor signal path | **Direct trigger → embedded controller → actuator** | HIGH |
| 5 | Fixed stroke (0.10"–0.5") | **Variable stroke via software-controlled endstop** | MEDIUM |
| 6 | Rotary motor + mechanical linkage | **Pneumatic actuator** (patent explicitly excludes pneumatic as prior art = SAFE) | HIGH |
| 7 | Ethernet host interface | **CAN bus / RS-485 direct control** | HIGH |
| 8 | Weapon mounts via interchangeable pintles | **Quick-release rail system** (Picatinny/NATO STANAG) | HIGH |
| 9 | Muzzle flash via LED | **Muzzle flash via strobe + smoke** | MEDIUM |
| 10 | Host-initiated malfunctions | **Scenario-embedded malfunction scripting** (no real-time host) | HIGH |

**WX advantage:** VN-12.7MM-SIM research already explored **magnetic brake / electromagnetic actuator** approach — this is fundamentally different from ACME's rotary motor + slide tray. The VN-CUAV-SIM-001 MWI concept uses modular interface — also architecturally different.

---

## IP RISK MATRIX

| Risk Category | Likelihood | Impact | Rating | Mitigation |
|--------------|-----------|--------|--------|-----------|
| Patent infringement (US market) | LOW (if design-around) | HIGH | **MEDIUM** | Design-around all 3 independent claims |
| Patent infringement (VN market) | VERY LOW | LOW | **LOW** | US patents not enforceable in VN |
| Patent infringement (ASEAN export) | LOW-MEDIUM | MEDIUM | **MEDIUM** | Verify no ACME patents in target countries |
| Trade secret misappropriation | VERY LOW | HIGH | **LOW** | Only use public sources (patents, brochures) |
| ITAR violation (if acquiring ACME unit) | MEDIUM | VERY HIGH | **HIGH** | Do NOT acquire GAR unit through unofficial channels |
| Copyright (software) | VERY LOW | MEDIUM | **LOW** | Independent SW development mandatory |
| Trademark (GAR®) | VERY LOW | LOW | **NEGLIGIBLE** | Use different product name |

**Overall IP Risk: MEDIUM** — manageable with proper design-around discipline.

---

## RECOMMENDATION

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║   RECOMMENDATION:  ✅ CONDITIONAL GO                             ║
║                                                                  ║
║   Proceed to Stage 1M (MECHA Deconstruct) with conditions:      ║
║                                                                  ║
║   CONDITIONS:                                                    ║
║   1. RE based on PUBLIC SOURCES ONLY (patents, brochures,        ║
║      trade show materials, academic papers on recoil sim)        ║
║   2. NO acquisition of physical GAR unit (ITAR risk)             ║
║   3. Design-around ALL 3 independent claims (Claim 1, 14, 25)   ║
║   4. Stage 3 morphological matrix MUST include ≥3 non-ACME      ║
║      architectures (pneumatic, magnetic brake, voice coil,       ║
║      cam-driven, spring-return, etc.)                            ║
║   5. Document independent development chain throughout           ║
║   6. Check NOIP (VN patent office) for ACME filings             ║
║                                                                  ║
║   RE PURPOSE: Inform VN-CUAV-SIM-001 MWI recoil subsystem       ║
║   design by understanding state-of-art, NOT copying ACME         ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

## Sources

- [US 8,690,575 B1 — Google Patents](https://patents.google.com/patent/US8690575B1)
- [US 10,001,338 B1 — Google Patents](https://patents.google.com/patent/US10001338)
- [ACME GAR Overview](https://www.acme-worldwide.com/products/gun-active-recoil-systems/gar-overview/)
- [ACME GTS Product Page](https://www.acme-worldwide.com/gunnery-training-system-gts/)
- [ACME Patent Press Release](https://www.acme-worldwide.com/press-release-acmes-new-patent-10001338/)
- [Federal Register — USML Categories I, II, III (2020)](https://www.federalregister.gov/documents/2020/01/23/2020-00574/international-traffic-in-arms-regulations-us-munitions-list-categories-i-ii-and-iii)
- [eCFR — 22 CFR Part 121 (USML)](https://www.ecfr.gov/current/title-22/chapter-I/subchapter-M/part-121)
- [Wassenaar Munitions List 2021](https://www.wassenaar.org/app/uploads/2021/12/Stand-alone-Munitions-List_2021.pdf)
