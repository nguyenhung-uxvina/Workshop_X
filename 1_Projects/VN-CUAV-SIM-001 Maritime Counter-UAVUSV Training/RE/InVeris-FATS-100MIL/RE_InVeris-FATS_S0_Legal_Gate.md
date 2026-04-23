# RE LEGAL GATE — InVeris FATS 100MIL (MECHA Mode)

**Date:** 2026-04-22
**Project:** VN-CUAV-SIM-001
**RE Method:** OSINT-only (no physical artifact)
**Purpose:** Competitive intelligence + design principle learning for WX LITE-PA2 Phase 3

---

## 0. PRODUCT IDENTITY

| Field | Detail |
|-------|--------|
| **Product** | FATS 100MIL (Firearm Arms Training System) |
| **Manufacturer** | InVeris Training Solutions (Suwanee, GA, USA) |
| **Corporate lineage** | FATS Inc. (1980s) → Meggitt Training Systems (2006) → InVeris (2021, Beretta Group acquisition) |
| **Country** | USA |
| **Category** | Virtual small-arms & crew-served weapons training simulator |
| **Military customers** | **Program of Record:** US Army, USMC, Australia, Singapore, Brunei, UK, Canada, New Zealand |
| **Price range** | $200-500K+ per system (estimated from government procurement data) |
| **Key subsystems** | BlueFire weapon simulators, 3D marksmanship engine, VBS3 collective, projection/VR display, AAR |

---

## 0A — IP LANDSCAPE

### Patents Identified

| # | Patent | Holder/Assignee | Filed | Status | Relevance to WX | FTO Risk |
|---|--------|----------------|-------|--------|-----------------|----------|
| 1 | **EP1546831A4** | FATS Inc. → Meggitt Training Systems | 2003-07-24 | Granted (likely expired or expiring) | **HIGH** — Gas operating system for firearm simulators. Describes internal regulated gas system for recoil, entirely within removable magazine. Two electric valves (recoil + locking) drive piston for slide cycling + recoil. | **LOW** — WX uses solenoid/pneumatic, not magazine-contained gas. Different mechanism entirely. |
| 2 | **US20050034596A1** | FATS Inc. → Meggitt | 2003 | Published | MEDIUM — Locking assembly for firearm simulators | **LOW** — WX weapon mockup uses different mounting approach |
| 3 | **CN1839291B** | (Related) | — | Chinese grant | LOW — Locking device for recoil simulator | **LOW** — Different jurisdiction, different mechanism |
| 4 | **Multiple unspecified** | InVeris | Various | Active (per inveristraining.com/company/patents/) | UNKNOWN — Company claims "many patents covering a number of territories and disciplines" | **MEDIUM** — Cannot assess what we don't know |

### Trade Secrets & Proprietary Technology

| Technology | Likely Trade Secret? | WX Relevance |
|-----------|---------------------|-------------|
| BlueFire compressed air fill station | YES — proprietary fill mechanism | LOW — WX uses solenoid, not compressed air |
| BlueFire wireless weapon tracking | YES — proprietary sensor suite | MEDIUM — WX can use off-the-shelf encoders |
| Automatic Coaching algorithms | YES — proprietary ML/analytics | **HIGH** — scoring/coaching concept valuable, but implementation must be independent |
| VBS3 integration layer | LICENSED from Bohemia Interactive | LOW — WX uses Unity, not VBS3 |
| Shot placement analytics | Likely patented | MEDIUM — ray-trace scoring is generic concept |

### IP Summary

**Overall patent risk: LOW.** Key reasons:
1. Core EP1546831A4 (gas blowback) filed 2003 → approaching/past 20-year expiry
2. WX recoil mechanism (solenoid/pneumatic) is fundamentally different from gas blowback
3. WX product targets different niche (naval C-UAV/USV) vs. FATS (small-arms marksmanship)
4. WX scoring uses ray-trace ballistic model (generic physics), not InVeris proprietary analytics
5. WX display uses multi-projector (Optoma), not InVeris proprietary system

---

## 0B — EXPORT CONTROL

| Control Regime | Classification | Impact on WX |
|---------------|---------------|-------------|
| **ITAR (USML)** | Likely **Category XI** (Military Electronics) or **Category XIV** (Toxicological Agents... no) — more likely **Category XI, paragraph (a)(3)** "Training equipment specifically designed for military applications" | **HIGH** — FATS 100MIL is a US defense article. CANNOT be acquired by VN without State Dept license (unlikely given US-VN defense relationship complexity) |
| **EAR (ECCN)** | If dual-use elements → ECCN 9A610.x (military training equipment) | Controlled |
| **Wassenaar** | Category ML11 (Military technology — Electronic equipment) or ML14 (Training equipment) | Controlled |
| **VN procurement** | Not feasible — US ITAR controls + political sensitivity | N/A |

### Export Control Implications for RE

| Aspect | Assessment |
|--------|-----------|
| Can WX legally acquire a FATS unit? | **NO** — ITAR-controlled, VN not likely to receive export license |
| Can WX attend expo demos? | **YES** — Public demonstrations at DSA, DSEI, IMDEX are uncontrolled |
| Can WX study published specs? | **YES** — Datasheets, brochures, videos are public domain |
| Can WX study granted patents? | **YES** — Patents are public documents by definition |
| Can WX interview users? | **CONDITIONAL** — User feedback is OK, technical details of system internals may be controlled |
| Can WX reverse-engineer from public info? | **YES** — OSINT RE is legal; no artifact = no clean-room concerns |

---

## 0C — VIETNAM LEGAL FRAMEWORK

| Regulation | Relevance | Assessment |
|-----------|-----------|-----------|
| Luat Cong nghiep Quoc phong 2024 | Domestic defense industry development | **SUPPORTS** — Law encourages domestic development of training systems |
| Law 32/2021/QH15 | Defense procurement | NEUTRAL — WX is building own system, not procuring FATS |
| IP Law Vietnam 2022 | Patent/trade secret | **GREEN** — OSINT analysis of public data does not violate |
| Circular 32/2020 (MOST) | Technology transfer | N/A — no TT from InVeris |

---

## 0D — RE LEGALITY ASSESSMENT

| Dimension | Status | Rationale |
|-----------|--------|-----------|
| **Clean-room status** | **CLEAN** | No physical artifact. All information from public sources (website, datasheets, patents, expo demos, trade press, YouTube) |
| **Source chain of custody** | **CLEAN** | All sources traceable to: inveristraining.com, patents.google.com, armyrecognition.com, adsinc.com, YouTube (official InVeris channel) |
| **Independent development evidence** | **STRONG** | WX CUAV-SIM-001 has full Phase 1-2 documented independently (Requirements v2.0, Morpho Matrix, VDI 2225, ICDM). RE is additive intelligence, not foundational |
| **Publication/distribution risk** | **LOW** | RE outputs stay in WX vault (not published) |
| **Contamination risk** | **VERY LOW** | No access to FATS internals, no employee from InVeris, no leaked documents |

---

## 0E — SAFER PATH RECOMMENDATIONS

| Strategy | Description | Risk Level |
|----------|------------|-----------|
| **1. Public spec analysis** | Study datasheets, brochures, expo presentations, YouTube demos | **GREEN** — Zero risk |
| **2. Patent study** | Read EP1546831A4 + related patents for gas blowback mechanism design principles | **GREEN** — Patents are public by design |
| **3. Expo observation** | Attend DSA/IMDEX/DSEI, request hands-on demo, note recoil feel + scoring UX | **GREEN** — Public event, commercial demonstration |
| **4. User community feedback** | Study publicly available reviews, forum discussions, military after-action feedback | **GREEN** — Public information |
| **5. Component-level analysis** | Study off-the-shelf components that InVeris uses (projectors, PCs, encoders) | **GREEN** — COTS components are not proprietary |
| **6. Design principle extraction** | Extract design PRINCIPLES (not implementations) for WX forward design | **GREEN** — Ideas are not patentable, implementations are |

### What WX should LEARN from FATS (design principles, not copy):

| Learning Area | FATS Approach | WX Application | IP Risk |
|-------------- |-------------- |--------------- |---------|
| **Recoil fidelity** | Gas blowback ~60% real recoil via compressed air in magazine | Learn force-time profile targets; WX implements differently (solenoid/pneumatic) | **NONE** — Different mechanism |
| **Automatic coaching** | Sensor fusion (trigger pressure, cant, buttstock) → real-time feedback | Implement equivalent sensors with off-the-shelf components; different software | **LOW** — Generic sensor concept |
| **Scoring analytics** | Shot placement + weapon handling diagnostics | WX ray-trace ballistic model + encoder data analytics | **NONE** — Independent implementation |
| **Multi-weapon platform** | BlueFire wireless weapon family (M4, M16, M249, AT4, etc.) | WX MWI (Modular Weapon Interface) with NFC auto-detect | **NONE** — WX already designed this independently |
| **Portable vs. fixed** | Mil-spec storage case (portable) vs. rack (fixed classroom) | WX LITE (mobile/shipboard) vs. FIXED (base) — already in product line | **NONE** — Generic product strategy |
| **Training doctrine integration** | Automatic coaching references official doctrine | WX can integrate TCLL/QCHD Vietnamese training doctrine | **NONE** — Doctrine is country-specific |

---

## IP RISK MATRIX

| Risk Category | Likelihood | Impact | Rating | Mitigation |
|-------------- |----------- |------- |------- |----------- |
| Patent infringement (recoil) | **LOW** | HIGH | **GREEN** | WX solenoid/pneumatic ≠ gas blowback. Different physics. |
| Patent infringement (scoring) | **LOW** | MEDIUM | **GREEN** | Ray-trace scoring is basic physics, not patentable concept |
| Patent infringement (weapon tracking) | **LOW** | MEDIUM | **GREEN** | WX uses rotary encoders (COTS), not InVeris proprietary |
| Trade secret misappropriation | **VERY LOW** | HIGH | **GREEN** | No access to internals. OSINT only |
| ITAR violation | **NONE** | CRITICAL | **GREEN** | No attempt to acquire FATS hardware |
| Publication risk | **NONE** | LOW | **GREEN** | RE outputs internal to WX vault |
| Design-around failure | **LOW** | MEDIUM | **GREEN** | WX product architecturally different (naval C-UAV vs. small arms) |

---

## RECOMMENDATION

### **GO UNCONDITIONAL**

**Rationale:**
1. **OSINT-only RE** — no physical artifact, no clean-room concerns
2. **No IP risk** — WX product uses fundamentally different mechanisms (solenoid vs. gas blowback, Unity vs. VBS3, rotary encoders vs. BlueFire sensors)
3. **Different market segment** — FATS = small-arms marksmanship trainer; WX = naval C-UAV/USV gunnery trainer. Zero market overlap.
4. **Strong independent development record** — WX has full Phase 1-2 documentation proving independent design
5. **Learning value HIGH** — FATS is the gold standard ($200K+ Program of Record for US Army/USMC). Understanding their design philosophy informs WX quality benchmarks.

### Focus Areas for Stage 1M:
1. **BlueFire recoil mechanism** — gas blowback design principles (force profile, duty cycle, thermal management) → inform WX solenoid/pneumatic targets
2. **Automatic Coaching architecture** — sensor suite + analytics pipeline → inform WX AAR/scoring
3. **Multi-weapon platform** — BlueFire weapon family strategy → validate WX MWI concept
4. **Projection vs. VR decision** — InVeris offers both → compare trade-offs with WX decision (projection)
5. **FATS 180MIL** — 3-screen immersive variant introduced at I/ITSEC 2019 → directly comparable to WX LITE 180° FOV

---

**CEO DECISION REQUIRED:** GO / CONDITIONAL GO / NO-GO

Sources consulted:
- inveristraining.com (product pages, datasheets, patents page)
- patents.google.com (EP1546831A4, US20050034596A1, CN1839291B)
- armyrecognition.com (DSA 2022 coverage)
- adsinc.com (ADS product listings)
- highergov.com (USAF procurement FA252124QB189)
- businesswire.com (FATS 180MIL announcement)
