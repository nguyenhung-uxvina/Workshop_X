---
project: VN-CUAV-SIM-001
product: ACME Gun Active Recoil (GAR®) Gunnery Training System (GTS)
stage: 2A — Requirements Reconstruction (17 P&B Categories)
mode: MECHA
created: 2026-04-21
sources: Patent US8690575B1, US10001338, US9719748B2, ACME website, NLM KB re-gar
cross-ref: VN_CUAV_SIM_001_LITE_PA2_Requirements_v1.0.md (F1.6 ≥25N)
---

# STAGE 2A: RECONSTRUCTED REQUIREMENTS — ACME GAR GTS

## Step 2A-1: Requirements Reconstruction (17 P&B Categories)

| Cat# | P&B Category | ID | Requirement | D/W | Evidence in Artifact | Confidence | WX F1.6 Mapping |
|------|-------------|-----|-------------|:---:|---------------------|:----------:|----------------|
| **1** | **Geometry** | | | | | | |
| | | R-001 | Slide tray stroke: 2.5–12.7mm (pref 7.6mm / 0.30") | D | Patent §FIG 4-7 "0.10"–0.5"" | H | WX: TBD (design param) |
| | | R-002 | Weapon replica dimensions match real weapon ±5% | D | Patent "accurately reproduces weight and CG" | H | WX LITE-01: modular cradle |
| | | R-003 | System fits through standard office door (~900mm) | W | Website "wheeled platforms fit through office doors" | H | WX: container-based |
| | | R-004 | Projector throw distance ≤ 457mm (18") | W | Website "18 inches clearance" | H | WX: 3-screen direct, not projector |
| | | R-005 | Screen size: 3.66m W × 3.05m H | W | Website "12ft × 10ft" | H | WX: 3× FHD monitors |
| **2** | **Kinematics** | | | | | | |
| | | R-006 | Weapon traverse (azimuth): adjustable via stops | D | Patent §FIGS 6-7 "adjustable azimuth stops" | H | WX K-01: ≥60°/s traverse |
| | | R-007 | Weapon elevation: adjustable via stops | D | Patent "adjustable elevation stops" | H | WX K-02: -10°→+85° |
| | | R-008 | Recoil motion: linear fore-aft, 1-DOF | D | Patent "slides fore and/or aft on linear bearings" | H | WX: may differ (Two-Channel) |
| | | R-009 | Charging handle: back-and-forth articulation | W | Patent "moves back and forth" | M | WX: include for fidelity |
| | | R-010 | Top cover: articulated open/close for ammo loading | W | Patent "latch release and flips up" | M | WX: include for fidelity |
| **3** | **Forces** | | | | | | |
| | | R-011 | Recoil force: "full-force" matching real weapon impulse | D | Patent + website "full-force recoil" | H | **WX F-01: ≥25N (D)** — lower threshold |
| | | R-012 | Recoil at any firing angle (no gravity dependency) | D | Website "full-force recoil at any firing angle" | H | WX: mounted weapon → mostly horizontal |
| | | R-013 | Windload torque: simulate aerodynamic drag on barrel | D | Website "variable torque windloading system" | H | **WX F1.4: Channel A mount resistance** |
| | | R-014 | Trigger pull force: realistic (adjustable hard stop) | D | Patent "adjustable hard stop 30" cap screw | H | WX F-05: 1.5-4kg trigger |
| | | R-015 | Weapon weight matches real weapon ±10% | D | Patent "accurately reproduces weight and CG" | H | WX: weapon module spec |
| **4** | **Energy** | | | | | | |
| | | R-016 | Input power: 120VAC/15A single connection (US) | D | Patent + M240 page "120VAC 15A" | H | WX: 220VAC/10A (VN standard) |
| | | R-017 | Alt power: 12/24VDC from vehicle | W | M240 page "12/24VDC from Vehicles" | M | WX: possible for field deployment |
| | | R-018 | All-electric (no pneumatic, no consumables) | D | Patent "does not use compressed air" | H | WX: NOT constrained to electric |
| | | R-019 | Muzzle flash: LED visible + near-IR (NVG compatible) | W | Patent "LEDs for visible and near infrared spectrum" | H | WX: include for fidelity |
| **5** | **Material** | | | | | | |
| | | R-020 | Weapon body: composite/stainless steel/aluminum | D | Patent "composite steel, stainless steel and/or aluminum" | H | WX: Al + FRP for weight savings |
| | | R-021 | Barrel: aluminum or stainless steel, threaded | W | Patent "aluminum or stainless steel barrel" | H | WX: Al 6061-T6 |
| | | R-022 | Mounting pintles: aircraft/vehicle compatible | D | Patent "CH-46, CH-53 pintles" | H | WX: ship/boat mount (different) |
| | | R-023 | All-metal replica weapons | D | Website "all-metal, replica weapons" | H | WX: metal + composite acceptable |
| **6** | **Signals** | | | | | | |
| | | R-024 | Trigger sensor: electronic, proximity type | D | Patent "threaded barrel type proximity switch" | H | WX S-04: trigger detect |
| | | R-025 | Safety sensor: physical interlock + electronic signal | D | Patent "safety 26" + host override | H | WX: include |
| | | R-026 | Ammo status sensor: loaded/empty | D | Website "ammunition loaded" sensor | M | WX: include for training fidelity |
| | | R-027 | Feed cover sensor: open/closed | W | Website "Open/Closed Feed Covers" | M | WX: include |
| | | R-028 | Charging handle sensor: position | W | Website "Charging Handles" | M | WX: include |
| | | R-029 | Selector switch sensor: safe/semi/auto | D | Website "Firing Selectors" | M | WX: include |
| | | R-030 | Host interface: Ethernet (DIS-compatible) | D | Patent "Ethernet interface" | H | WX: Unity + Open-DIS |
| | | R-031 | Coaxial laser for shot placement | D | Patent "infrared laser system 1200" | H | WX S-07: hit detection ≥95% |
| **7** | **Safety** | | | | | | |
| | | R-032 | Physical safety prevents trigger depression | D | Patent "safety 26 activated → trigger will not depress" | H | WX: include |
| | | R-033 | Host computer cease-fire override | D | Patent "cease fire signal initiated by host computer" | H | WX: instructor override |
| | | R-034 | No live ammunition capability | D | Patent "unable to fire any type of rounds" | H | WX SC-1: 100% simulation |
| | | R-035 | E-stop capability | D | Inferred from safety design | M | WX: include |
| **8** | **Ergonomics** | | | | | | |
| | | R-036 | Weapon handling identical to real weapon (grips, trigger reach) | D | Patent "grips 28, trigger 24 can be adjusted" | H | WX: weapon module spec |
| | | R-037 | Elevated platform simulates vehicle/aircraft position | W | Website "elevated modular platforms" | M | WX: platform per deployment |
| | | R-038 | Instructor station below/behind trainee | W | Website "pull-out instructor station below and behind" | M | WX: separate IOS |
| **9** | **Production** | | | | | | |
| | | R-039 | Modular assembly: weapon swappable on same cradle | D | Patent "use actual or simulated weapons with minimum modifications" | H | WX LITE-01: MWI < 5 min swap |
| | | R-040 | Electronic chassis inside ammo container | W | Patent "inside modified ammo container 38" | M | WX: different enclosure |
| | | R-041 | All-metal replica manufacturing (FRP/machining/welding) | D | Patent + website materials | H | WX: VN manufacturing capable |
| **10** | **Quality** | | | | | | |
| | | R-042 | Weapon CG accuracy ±10% of real weapon | D | Patent "accurately reproduces weight and CG" | M | WX: include per weapon module |
| | | R-043 | Firing rate accuracy ±5% of target weapon rate | D | Inferred from "specific weapon" matching | M | WX: software configurable |
| **11** | **Assembly** | | | | | | |
| | | R-044 | Quick weapon swap (same GAR cradle, different weapons) | D | Website multi-weapon support | H | WX LITE-01: NFC auto-detect |
| | | R-045 | Single power connection for entire system | D | Website "single input power point" | H | WX: include |
| **12** | **Transport** | | | | | | |
| | | R-046 | Wheeled, fits through standard doors | W | Website "wheeled platforms fit through office doors" | H | WX: container or wheeled |
| | | R-047 | Retractable screen | W | Website "retractable screen" | H | WX: N/A (monitors) |
| **13** | **Operation** | | | | | | |
| | | R-048 | Firing rate range: 750–3,000 RPM (weapon dependent) | D | Patent "750-1500 rpm" + website "up to 3,000 RPM" | H | WX: 600-900 RPM (12.7mm focus) |
| | | R-049 | Variable intensity (tuneable per weapon) | D | M240 page "variable intensity to fine tune recoil" | H | WX: software weapon profiles |
| | | R-050 | Day/night operation (NVG compatible) | D | Website "day/night operations" | M | WX T-06: day/dusk/night |
| | | R-051 | Multiple mission environments (land/sea/air) | D | Website "air, sea or land" | H | WX: sea focus (maritime) |
| | | R-052 | Intelligent targets (vehicles + personnel) | D | Website "selectable, intelligent targets" | H | WX T-05: ≥5 UAV + ≥3 USV |
| **14** | **Maintenance** | | | | | | |
| | | R-053 | No consumables in recoil system (no CO2, no blanks) | D | Patent "does not require blank ammunition, compressed air" | H | WX: NOT constrained (pneumatic OK) |
| | | R-054 | Self-contained electronics (on-board) | D | Website "self-contained electronics on-board" | H | WX: include |
| | | R-055 | GAR Manager diagnostic software | W | Website "troubleshooting and testing" in GAR Manager | M | WX: self-test in Unity |
| **15** | **Recycling** | | | | | | |
| | | R-056 | No hazardous materials in consumables (no CO2/blanks) | W | Implied by all-electric design | L | WX: N/A |
| **16** | **Cost** | | | | | | |
| | | R-057 | System price: est. $50-150K per GTS unit | W | Inferred from defense COTS pricing | L | **WX SC-4: ≤$70K (LITE)** |
| | | R-058 | Near-zero OPEX (no consumables) | D | All-electric design intent | H | WX: lower OPEX = advantage |
| **17** | **Schedule** | | | | | | |
| | | R-059 | COTS availability: 350+ units shipped | W | Website "more than 350" | H | WX: development needed |
| | | R-060 | Multi-weapon support from single platform | D | Patent + website design intent | H | WX LITE-01: MWI architecture |

**Total: 60 requirements** (42 Demand, 18 Wish) across 17/17 P&B categories.

---

## Step 2A-2: D/W Classification

**COD: Core** — CEO validates D/W.

### AI-Proposed D/W Rationale

| Category | Demand Evidence | Wish Evidence |
|----------|----------------|---------------|
| Forces (R-011 to R-015) | All 5 = D: recoil, windload, trigger are structurally critical for training fidelity | — |
| Signals (R-024 to R-031) | 6 D (trigger, safety, ammo, selector, Ethernet, laser) = functional necessity | 2 W (feed cover, charging handle) = nice-to-have |
| Safety (R-032 to R-035) | All 4 = D: non-negotiable for military training device | — |
| Geometry (R-001 to R-005) | 2 D (stroke, weapon dims) = functional | 3 W (door fit, projector, screen) = deployment convenience |
| Cost (R-057 to R-058) | 1 D (OPEX) = operational; 1 W (price est.) = market-driven | Price is W (not structural) |

### CEO Validation Required

⚠️ **CEO: Kiểm tra kỹ D/W classification. Đặc biệt:**
- R-011 (full-force recoil) vs WX F-01 (≥25N): ACME = full-force (D), WX = ≥25N threshold (D). WX target is DELIBERATELY LOWER per [[Recoil Fidelity Threshold — 70%]].
- R-018 (all-electric): ACME = D (their USP), WX = W (pneumatic is OK per [[Pneumatic Patent Freedom]]).
- R-048 (750-3000 RPM): ACME = D (multi-weapon), WX = narrower range OK (12.7mm focus).

---

## Step 2A-3: TVDT (Target Values Decision Table)

| Rank | Req ID | Parameter | Unit | ACME Value (inferred) | VN Target | Tolerance | Trade-off | Weight % |
|------|--------|-----------|------|----------------------|-----------|-----------|-----------|---------|
| 1 | R-011 | Peak recoil force | N | 50-100N (.50 cal) | **≥25N** | +unlimited, -0 | WX = L3 fidelity, not full-force | 20% |
| 2 | R-048 | Firing rate range | RPM | 750–3,000 | **600–900** | ±5% | 12.7mm DShK/NSV focus | 15% |
| 3 | R-030 | Control latency (trigger→recoil) | ms | <10 | **<20** | -0, +5 | L3 perception threshold | 12% |
| 4 | R-013 | Mount resistance torque | Nm | 5-20 (variable) | **≥10** | ±2 | Channel A via magnetic brake | 10% |
| 5 | R-039 | Weapon swap time | min | ~5 (different weapon + cradle) | **<5** | -0, +2 | NFC auto-detect = WX advantage | 8% |
| 6 | R-016 | Input power | V/A | 120VAC/15A | **220VAC/10A** | Standard VN grid | Trivial PSU adaptation | 5% |
| 7 | R-015 | Weapon weight accuracy | % | ±10% of real | **±15%** | Relaxed for cost | Training transfer OK per TVI | 5% |
| 8 | R-042 | CG accuracy | % | ±10% of real | **±15%** | Relaxed for cost | Training transfer OK per TVI | 5% |
| 9 | R-043 | Firing rate accuracy | % | ±5% | **±5%** | Same as ACME | Software-controlled = easy | 5% |
| 10 | R-001 | Recoil stroke | mm | 7.6 (0.30") | **TBD** | Design parameter | Depends on mechanism choice | 5% |
| 11 | R-057 | Unit price | USD | $50-150K | **≤$70K** | Hard ceiling (SC-4) | WX Two-Channel = cost advantage | 5% |
| 12 | R-031 | Hit detection accuracy | % | Not specified | **≥95%** | -0, +5 | WX S-07 | 5% |

**Key insight:** WX targets are DELIBERATELY relaxed vs ACME on force/rate/latency (per [[Recoil Fidelity Threshold]]) but TIGHTER on cost (SC-4 ≤$70K vs ACME est. $50-150K). The Two-Channel Law enables both simultaneously.

---

## RED FLAGS

| Flag | Category | Description | Impact |
|------|----------|-------------|--------|
| 🔴 Over-designed | R-011 | ACME "full-force" = max fidelity. WX needs only 70% per Galaxy. COPYING ACME = over-engineering. | Cost: $15K vs $1.5K |
| 🔴 Over-designed | R-048 | 3,000 RPM (M134 Minigun) irrelevant for VN 12.7mm (600-900 RPM). Don't design for irrelevant weapon types. | Complexity reduction |
| 🟡 Under-designed | R-055 | ACME has GAR Manager diagnostic SW. WX must build equivalent in Unity. | SW development effort |
| 🟡 Unusual | R-018 | ACME's "all-electric" is patent strategy, not physics requirement. Pneumatic = cheaper + patent-free for WX. | Architecture decision |
| 🔵 Missing | Transport | ACME designed for US training facilities. VN = tropical, coastal, shipboard. Environmental requirements needed. | Add VN-specific reqs in Stage 3 |
| 🔵 Missing | Recycling | Minimal — defense product lifecycle is 15-20 years. | Low priority |

**Save to:** `RE_ACME-GAR-GTS_S2A_Requirements.md` ✅
