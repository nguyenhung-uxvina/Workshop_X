---
created: 2026-04-15
updated: 2026-04-15
type: phase3-preflight
project: VN-CUAV-SIM-001
variant: LITE-PA2
pipeline: helix-embody-realize v3.2
block: B0
mode: icdm (shore-based indoor installation)
pahl-beitz: 7.1 Step 1-2
---

# B0 Preflight Report — VN-CUAV-SIM-001 LITE PA-2

## 1. Phase 2 Verification

| Check | Result | Evidence |
|-------|--------|----------|
| Phase 2 pipeline complete | ✅ | 6/6 blocks COMPLETE (2026-04-14) |
| Gate 2 passed | ✅ | PASS 3.71/4.0 (2026-04-15) |
| Concept selected | ✅ | PA-2 LITE STANDARD — CEO confirmed |
| VDI 2225 score | ✅ | 76.0% (VDI 2225), 93.2% (ICDM DQM) |
| CFMA complete | ✅ | 10 FMs, all Rev-SFD ≤54 |
| P02 QC Gate | ✅ | PASS 5/5 |
| Function structure | ✅ | 7 L1, 41 L2, 6-flow, 101/101 traced |
| ICD baseline | ✅ | v1.5, 24 sub-interfaces, 5 groups, 4 unresolved |
| ICDM overlay | ✅ | B0→BE complete, CEO reviewed |

## 2. Embodiment-Determining Requirements

P&B 7.1: Requirements that determine size, arrangement, and material choices. These drive the layout.

### 2.1 Size-Determining (Geometry + Spatial)

| ID | Requirement | Value | Impact on Layout |
|----|------------|-------|-----------------|
| G-01 | Min room footprint | 6 × 8 m, ceiling ≥3 m | Bounding box for entire system |
| G-02 | Weapon mockup dimensions | ±5mm vs real weapon | Drives SS1 CNC tooling |
| G-03 | Visual FOV | 180° H, ≥60° V | Screen 4m × 2m, radius ~3m → dominates room layout |
| G-04 | Weapon station + motion | ≤2 × 2 m footprint | SS1+SS3 combined envelope |
| Tr-01 | Transport cases | 4 cases, each ≤200 kg, pass 900×2100mm door | Max module size constraint |
| Er-01 | Cradle height | 155-185 cm (3 positions) | Pedestal design, floor anchor |

### 2.2 Arrangement-Determining (Spatial Relations)

| Relationship | Constraint | Rationale |
|-------------|-----------|-----------|
| Projector ↔ Shooter | ≥2 m behind (IEC 62471 eye safety) | Safety — non-negotiable |
| Screen ↔ Shooter | ~3 m (throw ratio 0.8-1.0) | Optical geometry |
| SS1 ↔ SS3 | Bolted together, centered on platform | Rigidity, vibration coupling |
| Instructor ↔ Shooter | Line of sight, separate desk, 2×27" | Ergonomics |
| UPS/PDU | Near power inlet, accessible | Maintenance |
| Speakers (5.1) | 5 around shooter + 1 sub floor | Spatial audio geometry |
| E-stop | Within arm's reach of instructor AND shooter | Safety |

### 2.3 Material-Determining

| Component | Material | Rationale |
|-----------|----------|-----------|
| Cradle body | CNC Aluminium 6061 | WX CNC capability, corrosion resistance (maritime), metal feel |
| Weapon modules | CNC Aluminium 6061 | Same, ±5mm accuracy for training transfer |
| Pedestal/mount | Welded steel 60×40mm | Maximum rigidity, vibration damping, bolt-to-deck |
| Motion platform | Welded steel + universal joint | Load 130 kg, 2-DOF, bolt-to-floor |
| Screen frame | Aluminium profile | Lightweight, corrosion resistant (maritime) |
| Screen surface | Matt white projection fabric, gain 1.0-1.3 | Optical performance |
| Connectors | 12-pin MIL-spec (bayonet) | Reliability, robust connection |
| Fasteners | Standard zinc-plated steel | Indoor environment, cost-effective |

## 3. Spatial Constraints Map

```
═══════════════════════════════════════════════════════════
  ROOM LAYOUT — 6m × 8m minimum (top view)
═══════════════════════════════════════════════════════════

  8m
  ┌─────────────────────────────────────────────────┐
  │                                                 │
  │   ┌─────────────────────────────────────┐       │  ← CURVED SCREEN
  │   │   4m × 2m curved, R~3m              │       │    (wall-mounted or
  │   │   3× projectors behind screen       │       │     free-standing)
  │   │   (rear projection) OR ceiling      │       │
  │   └─────────────────────────────────────┘       │
  │                                                 │
  │              ~3m throw distance                  │
  │                                                 │
  │         ┌───────────────┐                       │
  │         │  SS1 + SS3    │ ←── 2×2m footprint    │  6m
  │         │  Weapon Stn   │     (bolted to floor) │
  │         │  + Motion     │                       │
  │         │  Platform     │                       │
  │         └───────────────┘                       │
  │              ↑ shooter faces screen             │
  │                                                 │
  │   ┌──────────┐    ┌──────────┐                  │
  │   │Instructor│    │  UPS/PDU │ ← near wall      │
  │   │  Desk    │    │  Rack    │   power inlet     │
  │   │ 2×27"   │    └──────────┘                   │
  │   └──────────┘                                  │
  │         ↑ line-of-sight to shooter              │
  │   [E-STOP]  ← within reach                     │
  │                                                 │
  └─────────────────────────────────────────────────┘
  
  SPEAKERS: FL/FR flanking screen, C above screen,
            SL/SR flanking shooter, SUB under platform
```

### Shore-Based Indoor Installation Considerations

| Factor | Constraint | Phase 3 Action |
|--------|-----------|----------------|
| Floor type | Concrete or tile (training room) | Bolt-down with expansion anchors or weighted base |
| Climate | Vietnam tropical indoor: 25-40°C, 40-80% RH | Air-conditioned room required (projector + PC cooling) |
| Power quality | Shore 220V ±10%, 50Hz | UPS 2 kVA sufficient (no AVR needed) |
| Lighting | Room must be darkened for projection | Blackout curtains or dedicated windowless room |
| Noise | Acoustic isolation from adjacent rooms | Door seal, wall insulation if needed |
| Access | Standard 900×2100mm doorway | All cases pass through standard door |

## 4. Design Type Classification

| Factor | Score | Notes |
|--------|-------|-------|
| Technology novelty | 3/5 | Known tech (projectors, encoders, Unity) in new combination |
| Market novelty | 4/5 | First C-UAV simulator in Vietnam |
| Function structure novelty | 3/5 | 41 sub-functions, 6-flow — moderate complexity |
| Manufacturing novelty | 3/5 | WX CNC + welding + COTS integration |
| **Overall** | **ADAPTIVE (3.3/5)** | Not original design, not pure variant |

**Implication:** Embodiment can leverage existing WPs and proven subsystem configurations. Focus on integration and maritime adaptation rather than fundamental invention.

## 5. ICDM Extensions — Gap Closing Plan

### 5.1 Phase 2 ICDM Outputs Loaded

| ICDM Doc | Key Data | Phase 3 Use |
|----------|----------|-------------|
| B0 Innovation Context | WTP 3-category, innovation 3.3 | Guides layout ambition level |
| BA EQFD v1.1 | 18 CN, 22 EC, HOQ cross-ref | EC weights → DfX priority |
| BB WTP-CSR | 102 WTP (72E/21B/9L), 10 CSR, Group A/B | CSR Group A drives layout decisions |
| BC Solution-Free | PASS all 4 checks | Concept is solution-free verified |
| BD Platform Innovation | 90% commonality, IRL 3.2 | Module boundary = platform boundary |
| BE Evaluation Criteria | Group A (7, 79.4%), DQM framework | DQM re-calculation at Gate 3 |

### 5.2 RTA Knowledge Gaps → Phase 3 Tasks

| KG# | Knowledge Gap | Severity | Phase 3 Resolution | Deadline |
|-----|-------------- |----------|-------------------|----------|
| KG-1 | Solenoid recoil ≥25N sustained at ROF | **HIGH** | SS1 PoC physical test | 2026-05-07 |
| KG-2 | Projector input lag ≤17ms | **HIGH** | Benchmark 3 projector models | Phase 3 BA |
| KG-3 | Unity 6 + RTX 4090 latency budget | MEDIUM | Render pipeline benchmark | Phase 3 BA |
| KG-4 | 3-projector edge-blend quality | MEDIUM | Prototype blend test | Phase 3 BB |
| KG-5 | Motion platform resonance with weapon | LOW | Frequency analysis | Phase 3 BC |
| KG-6 | NFC read through 3mm Al plate | LOW | Bench test | Phase 3 BA |
| KG-7 | V-SMASH 6DOF accuracy vs TM tables | MEDIUM | Validation at 5 ranges | Phase 3 BC |

**HIGH severity KGs MUST be resolved before Phase 4.** KG-1 has physical gate 2026-05-07. KG-2 must be resolved in layout (BA) to lock projector selection.

### 5.3 CDTC Cost Model Baseline

| Cost Factor | Phase 2 Estimate | Pareto Rank | Phase 3 Refinement |
|-------------|-----------------|-------------|-------------------|
| Projectors (3×) | $4,500-7,500 | **#1 (42%)** | Lock model + get quotes |
| Render PC (RTX 4090) | $2,500-3,500 | **#2 (20%)** | Configure exact build |
| SW NRE (6 person-months) | $6,000-10,000 | **#3 (NRE)** | Refine scope in Phase 3 |
| Weapon modules (×2) | $1,385 | #4 | Firm up after PoC |
| Motion actuators (×2) | $200-400 | #5 | Select model |
| All other | $2,735-4,205 | — | Detail in BOM (BD) |

**Top 2 Pareto items = 62% of HW cost.** Both are COTS → procurement risk, not design risk.

### 5.4 CSR Group A → Layout Priority

| Rank | CSR | Weight | Layout Implication |
|------|-----|--------|-------------------|
| 1 | A1 Target AI Realism (18.2%) | Highest | GPU headroom for ≥5 AI agents + ≥60fps |
| 2 | A2 Ballistic Fidelity (14.2%) | Sacred | V-SMASH integration, unit test suite |
| 3 | A3 Assessment Depth (11.1%) | High | Scoring engine architecture, 10Hz logging |
| 4 | A4 Scenario Flexibility (10.7%) | High | GUI architecture, SQLite schema |
| 5 | A5 Logistics Independence (8.9%) | Hard | ≤$18K BOM, 6×8m room — bounding box |
| 6 | A6 Visual Immersion (8.4%) | **CLIFF** | **≤50ms latency, ≥180° FOV — ZERO margin** |
| 7 | A7 Ship Motion (7.9%) | High | 2-DOF platform, JONSWAP, bolt-down |

**A6 is the layout-critical CLIFF:** Any latency >50ms causes satisfaction to drop catastrophically. This makes projector selection and cable routing the #1 layout decision.

## 6. CFMA Priority Actions for Phase 3

| CFMA FM | SFD | Rev SFD | Phase 3 Block | Action |
|---------|-----|---------|---------------|--------|
| F1.6 Recoil | 180 | 54 | BA (PoC) | Physical test solenoid ≥25N @ ROF |
| F3.1 Display latency | 96 | 32 | BA (projector) | Benchmark ≤17ms input lag |
| F2.3 Target render | 84 | 28 | BA (GPU) | LOD tuning + visual cue |
| F2.5 Ballistic calc | 60 | 20 | BC (V-SMASH) | Validate at 5 ranges |
| F4.1 Motion sync | 54 | 27 | BC (PID) | PID tuning on physical platform |
| F1.1 Traverse signal | 48 | 24 | BA (encoder) | Cable strain relief design |

## 7. Layout Strategy Recommendation

Based on embodiment-determining requirements, ICDM CSR Group A, and CFMA priorities:

### Proposed Layout Strategy

```
STRATEGY: MODULAR CONTAINER / ROOM-IN-BOX

Core principle: All subsystems designed as discrete modules that:
  (a) Assemble in 6×8m room in ≤4 hours (2 technicians)
  (b) Pack into 4 flight cases for transport
  (c) Bolt to floor for maritime installation
  (d) Can be tested independently before integration

Module breakdown:
  M1: Weapon Station (SS1) — cradle + weapon module + pedestal
      → 1 flight case (~40 kg)
  M2: Motion Platform (SS3) — frame + seat + actuators + harness
      → 1 flight case (~50 kg)  
  M3: Visual System (SS2-HW) — screen frame + fabric + 3 projectors + mounts
      → 1 flight case (~60 kg, screen frame disassembles)
  M4: Electronics Rack (SS2-PC + SS5) — render PC + instructor PC + UPS + PDU
      + audio amp + network switch + cables
      → 1 flight case (~80 kg, wheeled)

Assembly sequence:
  1. M4 (power first — test power quality)
  2. M3 (screen + projectors — alignment)
  3. M2 (platform — bolt to floor)
  4. M1 (weapon station — mount on platform)
  5. Cabling + calibration
  6. Self-test → ready
```

### Critical Layout Decisions for CEO (Block BA)

| # | Decision | Options | Recommendation | Why |
|---|----------|---------|----------------|-----|
| L1 | Projection type | Front vs Rear | **Front** (simpler, cheaper screen) | Rear needs translucent screen + more depth |
| L2 | Projector mounting | Ceiling vs Shelf | **Ceiling** (clear floor space) | But needs ≥3m ceiling |
| L3 | Screen construction | Rigid curved vs Flexible fabric | **Rigid frame + fabric** | Self-fabricated, transportable |
| L4 | Platform-weapon coupling | Integrated vs Separate bases | **Integrated** (single bolt pattern) | Reduces footprint, simplifies alignment |
| L5 | Electronics location | Distributed vs Centralized rack | **Centralized rack** (1 case) | Easier cooling, maintenance, transport |
| L6 | **Projector model** | Optoma ZU607TST vs alternatives | **Must benchmark** (KG-2) | A6 CLIFF — ≤17ms input lag mandatory |

## 8. Gate 2 Conditions Tracking

| Condition | Status | Phase 3 Block |
|-----------|--------|---------------|
| C1: 4 unresolved ICD interfaces | OPEN | BC (ICD v3 freeze) |
| C2: Solenoid TRL [L5] validation | OPEN | BA (PoC 2026-05-07) |
| C3: P2-P5 gate dates | OPEN | BE (compile) |
| C4: GPU/projector EOL strategy | OPEN | BB (DfU review) |
| C5: Recoil safety oversight | OPEN | BB (DfX safety) |

## 9. Pipeline Configuration

| Parameter | Value |
|-----------|-------|
| Mode | ICDM + Maritime |
| Variant | LITE PA-2 |
| Output path | `Phase3-Embody/LITE-PA2/` |
| File prefix | `VN_CUAV_SIM_001_LITE_PA2_` |
| Physical gate | 2026-05-07 (SS1 PoC) |
| Design type | ADAPTIVE (3.3/5) |
| 4 transport modules | M1 Weapon, M2 Motion, M3 Visual, M4 Electronics |
| Installation | Shore-based indoor, air-conditioned, darkened room |
| Maritime extensions | NONE (shore-based) |
| ICDM extensions | CSR-guided layout, CDTC refinement, DQM re-eval at Gate 3 |

---

**B0 STATUS: ✅ COMPLETE — Ready for Block BA (Preliminary Layout)**

**CEO Layout Strategy confirmation required before BA proceeds.**
