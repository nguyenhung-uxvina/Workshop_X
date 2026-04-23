---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 3 — RECONSTRUCT (Divergence Map)
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode mecha
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
input: RE_ZenFAC_S2_Decode_2026-04-20.md
---

# RE STAGE 3: RECONSTRUCT — Zen FAC Sim vs WX CUAV-SIM
## Divergence Map + Design Decision Validation

**Date:** 2026-04-20
**Purpose:** NOT redesigning Zen's product. Mapping WX's independent design decisions AGAINST Zen's approach to validate, learn, and identify gaps.

---

## 3A — MODIFIED TASK CLARIFICATION (Zen Reqs → WX Context)

### Requirements Comparison: Zen FAC (33 reqs) vs WX LITE (102 reqs)

| Dimension | Zen FAC | WX LITE PA-2 | Delta | WX Action |
|-----------|---------|-------------|-------|-----------|
| Total reqs | 33 (OSINT-limited) | 102 (73D+29W) | WX has 3× more documented reqs | WX more thorough (P&B Phase 1 done properly) |
| Mission scope | Full FAC training (ship+weapon+nav) | C-UAS gunnery only | WX narrower but deeper | By design — niche fortress |
| Motion DOF | 6-DOF (D) | 2-DOF roll+pitch (D) | Zen: full ship feel. WX: gunnery-adequate | WX validated by D3 research. 6-DOF = overkill for gunner-only |
| Weapon types | MMG + RWS (2) | 5 types via MWI NFC | WX more versatile | **WX advantage** |
| AI coaching | Adaptive IOS (D) | ACH Layer 1 planned (D) | Zen shipped, WX planned | **WX must accelerate to v1.0** |
| EO/IR | Yes (D) | No (day-only LITE) | Zen has night/thermal | WX deferred to v2.0 (by design) |
| Display | 360° cylindrical (D) | 180° 3-screen (D) | Zen wider FOV | WX adequate for 1-station gunnery |
| Networking | Multi-ship (W) | Standalone (W) | Zen more capable | WX deferred to CORTEX |
| C-UAS specific | Not primary focus (but C-UAS sim exists) | PRIMARY focus | WX deeper in niche | **WX advantage** |
| Price target | $200-500K | $50-70K | WX 3-7× cheaper | **WX structural advantage** |
| Sovereignty | Make in India (domestic IP) | Made in Vietnam (domestic IP) | Parity on domestic positioning | Both leverage national defense policy |

### WX Requirements NOT in Zen FAC (WX-unique)

| WX Req | Category | Why Zen Doesn't Have It |
|--------|----------|----------------------|
| MWI NFC auto-detect (5 weapons) | Signals | Zen has 2 fixed weapons, no swap |
| C-UAS specific threat profiles (FPV, swarm, USV) | Operation | Zen FAC focuses on conventional threats |
| Lead angle error as primary training metric | Quality | Zen tracks general performance, not shooting-specific |
| Solenoid recoil (budget approach) | Forces | Zen uses premium electromech |
| Unity game engine (open, moddable) | Production | Zen uses proprietary engine |
| HYBRID-BRIDGE (sim↔live fire integration) | Operation | Zen has no LOMAH equivalent |
| $50-70K price ceiling | Cost | Zen prices at $200-500K |
| VN metocean conditions (Bien Dong) | Operation | Zen targets Indian Ocean |
| Modular product line (LITE→FIXED→FULL→CORTEX) | Production | Zen has single FAC Sim product |

---

## 3B — CONCEPTUAL ALTERNATIVES (Zen approach as "Concept Z")

### Morphological Matrix: Zen Solutions vs WX Solutions

| Sub-Function | Zen Solution ("Z") | WX Solution (PA-2) | Alt WX (future) | WX Rationale |
|-------------|-------------------|-------------------|-----------------|-------------|
| **SF-01 Motion** | 6-DOF Stewart platform ($30-50K) | 2-DOF electric ($1.5-2.5K) | 3-DOF (+heave) for FULL | 2-DOF sufficient for gunnery. 6-DOF = ship handling training (not WX scope) |
| **SF-02 Visual** | 360° cylindrical + 6-8 projectors ($40-80K) | 180° 3-screen + 3 projectors ($8-12K) | 240° for FIXED | 180° adequate for 1-station. Cost 5-8× less |
| **SF-03 Recoil** | Electromech actuator ($2-5K) | Solenoid ≥25N ($50-100) | Pneumatic ($200-500) if solenoid fails | Cost 20-50× less. **PoC 2026-05-07 decides** |
| **SF-04 Ship dynamics** | Proprietary hydrodynamic model | Unity physics + custom | Same | WX adequate for gunnery platform motion |
| **SF-05 Ballistics** | Integrated FCS model | Ray-trace ballistic model | Same | WX approach validated by D5 research |
| **SF-06 AI coaching** | AI IOS (adaptive, shipped) | ACH Layer 1 (planned) | ACH Layers 1-7 | **WX must ship in v1.0.** Different AI philosophy (ACH vs traditional ITS) |
| **SF-07 Haptic controls** | Force-feedback servos ($3-5K) | Standard switches ($50-100) | Haptic option for FULL | WX LITE = gunnery focus, not ship handling |
| **SF-08 EO/IR** | EO/IR sensor simulation | Day-only visual | EO/IR in FULL v2.0 | Deferred by design — day training sufficient for LITE |
| **SF-09 Ocean render** | Proprietary engine | Unity + custom ocean shader | Same + improve | WX must match quality (competitive) |
| **SF-10 AAR** | Recording + AAR (likely) | AAR planned (SS5) | AAR + AI analytics | WX must include basic AAR in v1.0 |
| **SF-14 Threat AI** | General threats (conventional naval) | C-UAS specific (FPV, swarm, USV) | Expanding threat library | **WX deeper in niche** |

### Cost Comparison per SF

| SF | Zen Est. Cost | WX Est. Cost | WX Savings | Sacrifice |
|:--:|:------------:|:------------:|:----------:|-----------|
| SF-01 | $30-50K | $1.5-2.5K | **95%** | 4 DOF (heave, surge, sway, yaw) |
| SF-02 | $40-80K | $8-12K | **80-85%** | 180° FOV (not 360°) |
| SF-03 | $2-5K | $0.05-0.5K | **90%** | Lower recoil force (GAP) |
| SF-06 | $20-40K (dev) | $5-10K (dev) | **60-75%** | Simpler initial AI (ACH Layer 1 only) |
| SF-07 | $3-5K | $0.05-0.1K | **98%** | No haptic feedback |
| SF-08 | $5-10K | $0 (deferred) | **100%** | No EO/IR in LITE |
| **TOTAL HW** | **$100-190K** | **$12-18K** | **85-90%** | Scope-appropriate sacrifices |

**Insight:** WX saves 85-90% on hardware by making SCOPE DECISIONS, not by cutting corners. Every sacrifice is deliberate and documented.

---

## 3C — VDI 2225 EVALUATION (Zen "Z" vs WX "PA-2")

Scoring against WX's C-UAS maritime gunnery training mission (not Zen's full FAC mission).

| Criterion | Weight | Zen "Z" | WX "PA-2" | Notes |
|-----------|:------:|:-------:|:---------:|-------|
| C-UAS training effectiveness | 25% | 2/4 (not primary focus) | **4/4** (designed for this) | WX niche advantage |
| Maritime gunnery fidelity | 20% | **3/4** (recoil + weapon feel) | 2/4 (solenoid gap) | Zen hardware advantage |
| VN manufacturability | 20% | 1/4 (Indian supply chain) | **4/4** (CNC + COTS + VN labor) | WX structural advantage |
| Sovereignty (ITAR-free + own IP) | 15% | 2/4 (Indian, not VN) | **4/4** (VN-made, own source code) | WX advantage |
| Cost-to-value ratio | 10% | 1/4 ($200-500K) | **4/4** ($50-70K) | WX 3-7× cheaper |
| AI coaching capability | 10% | **3/4** (shipped, adaptive) | 2/4 (planned, not shipped) | Zen leads — WX must close gap |
| **WEIGHTED TOTAL** | | **2.10/4** | **3.40/4** | **WX wins for WX's mission** |

**Key:** Zen wins on general naval training fidelity. WX wins decisively on C-UAS mission fit + VN context. This validates WX's independent design.

---

## 3D — DIVERGENCE MAP

### KEPT from Zen's approach (WX validates same decision)

| Feature | Zen | WX | Why Keep |
|---------|-----|-----|---------|
| Projection over VR | 360° cylindrical | 180° 3-screen | Both chose projection for crew visibility + instructor observation. Validated by D2 research (30% motion sickness VR) |
| AI-enabled coaching | AI IOS | ACH principle | Both recognize AI as primary differentiator. Validated as solution-determining SF |
| Recoil simulation | Electromech | Solenoid (different tech, same intent) | Both include recoil. Training transfer requires tactile feedback |
| Modular/scalable architecture | Single→multi-ship | LITE→FIXED→FULL→CORTEX | Both design for growth. WX product-line approach is more structured |
| Indigenous IP ownership | Make in India | Made in Vietnam | Both leverage national defense policy. Strategic alignment |
| AAR/debrief system | Recording + review | SS5 AAR module | Both include post-exercise analysis. Industry standard |

### MODIFIED from Zen's approach (WX deliberately different)

| Feature | Zen | WX | Why Modify |
|---------|-----|-----|-----------|
| Motion DOF | 6-DOF ($30-50K) | 2-DOF ($1.5-2.5K) | WX = gunnery trainer, not ship handling sim. 2-DOF provides adequate vestibular cues for gunner |
| Display FOV | 360° (6-8 projectors) | 180° (3 projectors) | Single-station gunnery doesn't need rear view. 180° = 5× cheaper |
| Weapon interface | 2 fixed types (MMG+RWS) | 5 types MWI NFC swap | WX covers more weapon families. NFC auto-detect = unique |
| Recoil mechanism | Electromech ($2-5K) | Solenoid ($50-100) | 20-50× cost reduction. ACH compensates: AI coaches technique while solenoid provides cue |
| Controls | Haptic force-feedback ($3-5K) | Standard switches ($50) | WX LITE = gunner only, no ship driving. Haptic deferred to FULL |
| Sim engine | Proprietary (closed) | Unity (open ecosystem) | WX gains VN dev talent pool + asset store + moddability |
| AI approach | Traditional ITS (adaptive difficulty) | ACH (AI compensates hardware) | WX's AI does MORE: compensates for cheaper hardware, not just adapts scenarios |
| Price | $200-500K | $50-70K | Different market segment entirely (Niche Fortress Law) |

### ADDED by WX (Zen doesn't have)

| Feature | WX Has | Why Zen Doesn't | WX Advantage |
|---------|--------|----------------|-------------|
| **C-UAS specific scenarios** | FPV drone, swarm, USV, mixed threats | Zen focuses conventional naval threats | Mission-specific moat |
| **MWI NFC multi-weapon** | 5 weapon types, <5 min swap, auto-detect | Zen has 2 fixed weapons | Revenue diversification |
| **Lead angle error metric** | Primary training KPI | Zen tracks general performance | Training science-based |
| **Product line architecture** | 4 variants (LITE→CORTEX) + 5 extensions | Zen has single FAC product | Customer growth path |
| **HYBRID-BRIDGE** | Sim↔live fire integration (BB-01 LOMAH) | No LOMAH equivalent | Unique WX ecosystem moat |
| **$50-70K price point** | Structural cost floor | Zen can't reach without cannibalization | Niche Fortress Law |
| **VN-specific metocean** | Bien Dong conditions, Gepard/Molniya platforms | India-specific (Indian Ocean) | Local market fit |

### REMOVED by WX (Zen has, WX deliberately omits)

| Feature | Zen Has | WX Omits | Why Remove |
|---------|---------|----------|-----------|
| Ship handling training | Helm + throttle + navigation | Removed — gunnery only | Different product scope. Ship handling = separate product (ARI Bridge Sim equivalent) |
| 6-DOF ship motion | Full heave/surge/sway/yaw | 2-DOF roll+pitch only | 4 DOF unnecessary for stationary gunner training |
| EO/IR thermal | Night + thermal targeting | Day-only (LITE) | Deferred to FULL v2.0. Day training sufficient for initial capability |
| Haptic controls | Force-feedback helm/throttle | Standard switches | No ship driving in LITE. Haptic = FULL variant |
| Multi-ship networking | DIS/HLA federation | Standalone | Deferred to CORTEX. LITE = single station |
| Engine room sim | ARI Multi-Simulator Complex | Not applicable | WX is weapon trainer, not ship systems trainer |
| VR Submarine module | Part of ARI suite | Not applicable | Different product entirely |

---

## STAGE 3 SUMMARY

```
=== STAGE 3 COMPLETE — Zen FAC Sim DIVERGENCE MAP ===

DIVERGENCE ANALYSIS:
  KEPT from Zen: 6 features (validated same design decision)
  MODIFIED from Zen: 8 features (deliberately different, documented rationale)
  ADDED by WX: 7 features (Zen doesn't have — WX moat)
  REMOVED by WX: 7 features (Zen has, WX deliberately omits — scope control)

VDI 2225 (against WX's mission): WX PA-2 = 3.40/4 vs Zen "Z" = 2.10/4
  → WX wins for C-UAS maritime gunnery mission
  → Zen wins for full FAC crew training mission

HW COST SAVINGS: WX saves 85-90% vs Zen by SCOPE DECISIONS (not corner-cutting)

KEY VALIDATION:
✅ WX's 2-DOF decision = correct for gunnery-only scope
✅ WX's 180° 3-screen = adequate for single-station
✅ WX's solenoid recoil = correct philosophy (ACH compensates), pending ≥25N validation
✅ WX's Unity choice = correct (open ecosystem vs Zen proprietary lock-in)
✅ WX's MWI NFC = genuine differentiator (Zen has 2 fixed weapons)
✅ WX's C-UAS niche = uncontested by Zen FAC (though C-UAS sim exists separately)
⚠️ WX's AI coaching = MUST accelerate to v1.0 (Zen already shipped AI IOS)

PHASE 3 EMBODIMENT PRIORITIES (informed by RE):
1. SS1 recoil ≥25N — PoC 2026-05-07 (CRITICAL)
2. ACH Layer 1 (lead angle coaching) in v1.0 (HIGH)
3. Ocean rendering quality ≥ Zen's engine (HIGH)
4. Basic AAR in v1.0 (MEDIUM)
5. MWI NFC prototype (MEDIUM)

CEO: approve Stage 3? Skip 3P (Partnership) since WX builds own product?
```
