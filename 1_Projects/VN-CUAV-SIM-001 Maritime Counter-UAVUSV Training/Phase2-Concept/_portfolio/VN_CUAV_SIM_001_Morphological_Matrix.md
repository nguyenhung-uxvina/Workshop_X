---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
pipeline: helix-concept-generate v3.2 --icdm
block: BB
method: Pahl & Beitz §6.4 + ICDM DSO + WTP Filter
---

# BB UNIFIED MORPHOLOGICAL MATRIX — VN-CUAV-SIM-001
## Working Principle Search, DSO Pre-Ranking, Concept Variant Paths

**Ngày:** 2026-04-14
**Sources:** Morpho SS1-SS5 (existing) + BA TRIZ candidates + ICDM WTP/CSR filter
**Design Type:** ADAPTIVE (3.3) → deep search on F1.6, F2.3, F7.3-7.4; shallow on rest

---

## 1. DSO SCORING LEGEND

| Quality Q | Risk R | DSO = Q×R |
|:---------:|:------:|:---------:|
| 4 = Exceeds target | 4 = COTS proven | ≥12 = **Strong** |
| 3 = Meets target | 3 = Proven tech, custom integration | 6-11 = **Viable** |
| 2 = Partially meets | 2 = Prototype needed | ≤5 = **Weak** |
| 1 = Barely meets | 1 = New R&D | |

**WTP Priority:** (E)ssential → search first | (B)eneficial → search second | (L)uxurious → search last

---

## 2. UNIFIED MORPHOLOGICAL MATRIX

> Sorted per SF: WPs left-to-right by DSO score (highest = leftmost). **★** = selected for PA-2 baseline. **[NEW]** = TRIZ-derived from BA.

### SS1: WEAPON STATION

| SF | WTP | WP-1 (best DSO) | WP-2 | WP-3 | WP-4 | WP-5 |
|----|:---:|-----------------|------|-------|-------|-------|
| **F1.1 Traverse** | E | **★ Slip clutch + encoder** Q4 R4 **DSO 16** $150 | Magnetic brake + encoder Q4 R4 DSO 16 $200 | Servo motor torque Q4 R3 DSO 12 $300-500 | Free bearing Q2 R4 DSO 8 $50 | |
| **F1.2 Elevation** | E | **★ Free rotation + counterweight + encoder** Q4 R4 **DSO 16** $80 | Gas spring + encoder Q3 R3 DSO 9 $200 | Worm gear + encoder Q3 R2 DSO 6 $250 | Linear servo Q3 R3 DSO 9 $400 | |
| **F1.6 Recoil ≥25N** ⚠️ | E | **★ Solenoid 24VDC** Q3 R4 **DSO 12** $80-120 | **[NEW] Mass-enhanced solenoid (masselotte)** Q4 R2 **DSO 8** $120-180 | Pneumatic cylinder Q4 R3 **DSO 12** $400-600 | Linear voice coil Q4 R2 DSO 8 $300+ | **[NEW] [HYB] Hybrid solenoid+pneumatic** Q4 R1 DSO 4 $300-500 |
| **F1.3 Trigger** | E | **★ Microswitch 1.5-4kg** Q4 R4 **DSO 16** $2-5 | Hall effect Q3 R4 DSO 12 $10-15 | Load cell Q4 R3 DSO 12 $50-80 | Optical break Q3 R4 DSO 12 $8-12 | |
| **F1.4 Resistance** | B | **★ Magnetic powder brake 0-10Nm** Q4 R4 **DSO 16** $120-180 | Friction plate Q2 R4 DSO 8 $20-40 | Servo programmable Q4 R3 DSO 12 $300+ | Free spin Q1 R4 DSO 4 $0 | |
| **F1.5 Body/Mockup** | E | **★ CNC nhôm 6061** Q4 R4 **DSO 16** $400-600 | 3D print + metal insert Q2 R3 DSO 6 $100-150 | Composite shell Q3 R2 DSO 6 $500 | Deactivated real weapon Q4 R1 DSO 4 legal | |
| **F1.7 Sight** | E | **★ Replica iron sight + overlay** Q4 R4 **DSO 16** $30-50 | Virtual reticle only Q3 R4 DSO 12 $0 | Camera-through-optic Q4 R2 DSO 8 $200+ | ~~AR eyepiece~~ ❌ CEO removed | |
| **F1.8 Mount** | B | **★ Thép hàn 3-position** Q4 R4 **DSO 16** $150-200 | Nhôm profile modular Q4 R3 DSO 12 $200-300 | Tripod adapt Q2 R3 DSO 6 $100 | | |
| **F1.9 Safety** | E | **★ SW + mechanical dual** Q4 R4 **DSO 16** $50-80 | SW only Q2 R4 DSO 8 $0 | Mechanical only Q3 R4 DSO 12 $30-50 | | |
| **F7.1-7.4 MWI** ⚠️ | E | **★ Quick-release + 12-pin MIL + NFC auto-config** Q4 R3 **DSO 12** $50-80 | Quick-release + DIP switch manual Q3 R4 DSO 12 $30 | Quick-release + USB config file Q3 R3 DSO 9 $20 | | |

**SS1 Subtotal (selected path):** ~$1,330 (cradle) + $650/weapon module

### SS1 WP 3-Component Notation (VDI 2221:2019)

| SF | Selected WP | [Effect] | [Geometry] | [Material] |
|----|------------|----------|-----------|-----------|
| F1.1 Traverse | Slip clutch + encoder | Friction coupling | Disc + shaft | Steel/bronze clutch plate |
| F1.2 Elevation | Free rotation + counterweight | Gravitational balance | Cylindrical pivot + mass | Steel shaft + lead counterweight |
| F1.6 Recoil ★ | Solenoid 24VDC | Electromagnetic impulse | Linear plunger + coil | Steel core + copper winding |
| F1.6 Recoil [NEW] | Masselotte solenoid | Electromagnetic + momentum | Plunger + sliding mass | Steel core + tungsten mass |
| F1.6 Recoil [HYB] | Hybrid sol+pneumatic | Electromagnetic + pneumatic | Plunger + cylinder + valve | Steel + aluminium + rubber seal |
| F1.3 Trigger | Microswitch | Mechanical contact | Lever arm + snap dome | Beryllium copper contact |
| F1.4 Resistance | Magnetic powder brake | Electromagnetic friction | Disc + powder chamber | Iron powder + steel disc |
| F1.5 Body | CNC aluminium 6061 | Machined solid | Tubular + grip profile | Al 6061-T6 |
| F1.7 Sight | Replica + overlay | Optical alignment | Post + ring + software | CNC Al + rendered reticle |
| F7.1-7.4 MWI | NFC + 12-pin MIL | RFID electromagnetic | Tag + reader + quick-release plate | NFC NTAG215 + MIL-spec connector |

---

### SS2: VISUAL DISPLAY & ENVIRONMENT ENGINE

| SF                      | WTP | WP-1 (best DSO)                                                       | WP-2                                                             | WP-3                                      | WP-4                                         |
| ----------------------- | :-: | --------------------------------------------------------------------- | ---------------------------------------------------------------- | ----------------------------------------- | -------------------------------------------- |
| **F3.1 Display**        |  E  | **★ 3× short-throw projector + curved screen** Q4 R4 **DSO 16** $3-6K | 3× LCD 55" curved Q3 R4 DSO 12 $4-8K                             | Laser ultra-wide Q3 R2 DSO 6 $5-10K       | VR headset Q3 R4 DSO 12 $0.5-3K ❌ instructor |
| **F2.1 Engine**         |  E  | **★ Unity 6 LTS + HDRP** Q4 R4 **DSO 16** free                        | UE5 Q4 R3 DSO 12 free                                            | Godot 4 Q2 R3 DSO 6 free                  | Custom OpenGL Q2 R2 DSO 4 free               |
| **F2.2 Ocean**          |  E  | **★ Procedural FFT Gerstner** Q4 R3 **DSO 12** $50-150                | Pre-baked ocean tiles Q2 R4 DSO 8 free                           | Crytek water Q3 R2 DSO 6 high             |                                              |
| **F2.3 Target AI** ⚠️   |  E  | **★ Scripted waypoint + perturbation (L0+L1)** Q3 R4 **DSO 12** low   | **Layered behavior (L0+L1+L2 reactive)** Q4 R3 **DSO 12** medium | FSM behavior trees Q3 R2 DSO 6 medium     | ML-trained evasion Q4 R1 DSO 4 high          |
| **F2.5 Ballistic**      |  E  | **★ V-SMASH 6DOF reuse** Q4 R4 **DSO 16** reuse                       | Custom raycast 3DOF Q2 R3 DSO 6 medium                           | Hitscan Q1 R4 DSO 4 low                   |                                              |
| **F3.3-3.4 Audio**      |  B  | **★ FMOD 5.1 surround** Q4 R4 **DSO 16** free                         | Unity built-in stereo Q2 R4 DSO 8 free                           | Binaural headphones Q4 R3 DSO 12 $200-400 |                                              |
| **F5.1-5.3 AAR**        |  E  | **★ Full session log 10Hz + 3D replay** Q4 R3 **DSO 12** medium       | Screenshot + scorecard Q2 R4 DSO 8 low                           | Video capture Q2 R3 DSO 6 low             |                                              |
| **F6.1-6.5 Instructor** |  E  | **★ Dedicated PC + 2 monitors** Q4 R4 **DSO 16** $1.5-2K              | Same PC second monitor Q2 R4 DSO 8 $0                            | Tablet remote Q2 R3 DSO 6 $500            |                                              |

**SS2 Subtotal (selected path):** ~$8,450-12,100

---

### SS3: MOTION PLATFORM

| SF | WTP | WP-1 (best DSO) | WP-2 | WP-3 | WP-4 |
|----|:---:|-----------------|------|-------|-------|
| **F4.1-4.2 Roll+Pitch** | B | **★ 2-DOF electric linear (ball-screw)** Q4 R3 **DSO 12** $2-3.5K | 3-DOF electric (+heave) Q4 R2 DSO 8 $4-6K | Pneumatic cylinders Q3 R3 DSO 9 $3-5K | No motion Q1 R4 DSO 4 $0 |
| **F4.3 Seat** | B | **★ Racing bucket + 4-point harness** Q4 R4 **DSO 16** $200-400 | Industrial office chair Q2 R4 DSO 8 $150-300 | Standing platform Q2 R3 DSO 6 $50-100 | |
| **F4.4 Controller** | B | **★ ESP32 + BTS7960 + UDP 50Hz** Q4 R3 **DSO 12** $50-100 | SimTools dedicated Q3 R3 DSO 9 $200-500 | PLC industrial Q3 R2 DSO 6 $500-1K | |
| **F4.5 Structure** | B | **★ Thép hàn 60×40 + universal joint** Q4 R4 **DSO 16** $300-500 | Nhôm profile 80×80 Q3 R3 DSO 9 $500-800 | Plywood prototype Q2 R3 DSO 6 $100 | |

**SS3 Subtotal (selected path):** ~$1,580-2,420

---

### SS4+SS5: SCENARIO ENGINE & SYSTEM INTEGRATION

| SF | WTP | WP-1 (best DSO) | WP-2 | WP-3 |
|----|:---:|-----------------|------|-------|
| **F6.1 Authoring** | E | **★ GUI drag-drop (no coding)** Q4 R3 **DSO 12** | JSON config edit Q2 R4 DSO 8 | Lua scripting Q3 R2 DSO 6 |
| **F5.2 Scoring** | E | **★ Multi-criteria weighted** Q4 R3 **DSO 12** | Hit/miss only Q2 R4 DSO 8 | Pass/fail Q1 R4 DSO 4 |
| **F5.4 Progression** | B | **★ Trainee profile + 5-skill + auto-recommend** Q4 R3 **DSO 12** | Manual instructor assign Q2 R4 DSO 8 | |
| **F6.6 Architecture** | E | **★ Render PC + Instructor PC + 2×MCU** Q4 R4 **DSO 16** | All-in-one PC Q2 R3 DSO 6 | |
| **F-Power** | E | **★ 220V → UPS 2kVA → PDU** Q4 R4 **DSO 16** $300-500 | Direct outlet Q2 R4 DSO 8 $0 | |
| **F-Deploy** | E | **★ Pre-imaged SSD + USB offline** Q4 R4 **DSO 16** | Cloud-based ❌ L-04 Q3 R3 DSO 9 | |
| **F-Diagnostics** | B | **★ Boot self-test ≤ 2min + dashboard** Q4 R3 **DSO 12** | Manual checklist Q2 R4 DSO 8 | |

**SS4+SS5 Subtotal (selected path):** ~$1,200-1,700

---

### ICDM: SERVICE DELIVERY MODEL (BB Extension)

| SF | WTP | WP-1 | WP-2 | WP-3 |
|----|:---:|------|------|-------|
| **Service Model** | B | **★ Product sale + annual MAINT-KIT ($300-600/yr)** Q4 R4 **DSO 16** | Product + extended warranty (3yr) Q3 R4 DSO 12 | Lease + per-session fee Q3 R2 DSO 6 |
| **SW Updates** | B | **★ Annual scenario pack ($500-1K)** Q4 R3 **DSO 12** | Included in MAINT-KIT Q3 R4 DSO 12 | None (static) Q1 R4 DSO 4 |

---

## 3. RECOIL TRADE STUDY MATRIX (F1.6 — Deep Search)

> CEO approved WP-F (masselotte) for SS1 PoC 2026-05-07. Full trade study below.

| Criterion (ICDM weight) | WP-A Solenoid | WP-F Masselotte | WP-B Pneumatic | WP-D Voice Coil | WP-E Hybrid |
|--------------------------|:------------:|:---------------:|:--------------:|:---------------:|:-----------:|
| **Peak force ≥25N** (F-01, 8%) | 20-30N ⚠️ marginal | **25-40N** ✅ | **30-100N** ✅✅ | **10-50N** ✅ | **25-60N** ✅ |
| **ROF programming** (O-04) | ✅ 600rpm+ | ✅ 600rpm+ | ✅ programmable | ✅ programmable | ✅ programmable |
| **Cost** (SC-4, 8.9%) | **$80-120** ★ | $120-180 | $400-600 ❌ | $300+ | $300-500 |
| **VN manufacturing** (P-01) | ✅ easy | ✅ easy | ⚠️ compressor | ❌ import | ⚠️ mixed |
| **Reliability** (Ma-01) | ⚠️ heat at 25N sustained | ★ mass absorbs heat | ✅ high | ✅ high | ⚠️ complex |
| **BB-01 synergy** (IRONMESH) | ✅ reuse driver | ✅ same driver + mass | ❌ new system | ❌ new system | ⚠️ partial |
| **Noise** (Er-05) | ★ quiet | ★ quiet | ❌ compressor hiss | ★ quiet | ⚠️ mixed |
| **Weapon feel realism** | ⚠️ tap not impulse | ★ impulse from mass | ✅ strong push | ✅ smooth | ✅ strong |
| **DSO Score** | **12** | **8** (R=2 prototype) | **12** | **8** | **4** (R=1) |

**Recommendation:**
1. **PoC 2026-05-07:** Test WP-A (solenoid baseline) and WP-F (masselotte) side-by-side
2. **Decision gate:** If WP-F hits ≥25N with acceptable feel → adopt as primary (best cost/feel balance)
3. **Fallback:** WP-B pneumatic if electric solutions can't reach 25N → adds compressor complexity + cost

---

## 4. TARGET AI ARCHITECTURE (F2.3 — Deep Search)

> CEO confirmed Layers 0+1+2 for Phase 1.

| Layer | Description | Phase | Dev Effort | DSO |
|:-----:|------------|:-----:|:----------:|:---:|
| **L0** | Base path (scripted waypoints) | **1** | Low | Q3 R4 = 12 |
| **L1** | Perturbation (Gaussian noise + jink frequency, parametric) | **1** | Low | Q3 R4 = 12 |
| **L2** | Reaction (if aimed within 5° → evasive maneuver) | **1** | Medium | Q4 R3 = 12 |
| L3 | Data-driven (real flight data overlay from OSINT) | 2 | Medium | Q4 R2 = 8 |
| L4 | Adaptive difficulty (ML-based, ACH opportunity) | 2+ | High | Q4 R1 = 4 |

**Phase 1 composite DSO (L0+L1+L2):** avg 12 — **Strong**. No ML dependency. Differentiation vs Zen (scripted-only) comes from L2 reactive behavior.

---

## 5. VARIANT CONCEPT PATHS

> Each path through the morpho matrix defines a product variant.

### Path A: LITE PA-2 (Reference Concept)

| SF | Selected WP |
|----|-------------|
| All SS1 | ★ baseline (solenoid or masselotte pending PoC) |
| All SS2 | ★ baseline (3 projectors, 180°, Unity 6, L0+L1+L2 AI) |
| All SS3 | ★ baseline (2-DOF, racing seat, ESP32) |
| All SS4+SS5 | ★ baseline |
| **BOM:** | ~$12,560-17,550 |
| **Sell:** | $50-70K |

### Path B: FIXED PA-8

| SF | Delta vs LITE |
|----|---------------|
| SS1 | ×2 stations (cradle + modules) |
| SS2 SF1 | 4× projectors, 240° FOV, 7680×1080 |
| SS2 SF3 | 5 island/platform/port environments (no open ocean FFT) |
| SS3 | **REMOVED** (no motion — fixed position) |
| SS4 | +Crew scoring, +sector overlay, +IFF zones, +7 FXD scenarios |
| SS5 | 8×8m room, 5 cases, 2.5kW |
| **BOM:** | ~$10,860-14,860 |
| **Sell:** | $55-80K |

### Path C: FULL PA-6

| SF | Delta vs LITE |
|----|---------------|
| SS1 | ×2-3 stations |
| SS2 SF1 | 6× projectors, **360° cylindrical Ø8m**, 7.1 surround |
| SS2 SF4 | Swarm 12-20, crew scenarios CREW-01→10 |
| SS3 | **Shared deck 3×4m** (4-6 actuators, ±15°/±10°, ≥400kg) |
| SS4 | +Threat assignment, +fire discipline, +crew composite scoring, +voice recording |
| SS5 | 10×10m room, 8 cases, 5kW, 3kVA UPS |
| **BOM:** | ~$28,000-38,000 |
| **Sell:** | $120-200K |

### Path D: CORTEX PA-9 (SW overlay)

| SF | Delta vs standalone nodes |
|----|--------------------------|
| Per node | Unchanged — LITE/FIXED/FULL HW intact |
| +CORTEX Node Agent | ~50MB SW on each node Render PC |
| +C2 Command Hub | Server + 4×55" + switch + VPN + voice intercom |
| +Shared Battlespace | Swarm Distribution Engine + State Sync + Kill Arbiter |
| +Joint Scoring/AAR | 3-level scoring + synchronized timeline |
| **C2 Hub cost:** | ~$26-35K |
| **Per-node SW:** | $5K license/yr |
| **Deploy (3 nodes):** | $300K+ |

---

## 6. PLATFORM COMMONALITY FLAGS (IRONMESH)

| WP / Component | Shared across | Commonality |
|----------------|:------------:|:-----------:|
| Universal cradle (SS1) | LITE, FIXED, FULL | **100%** |
| Weapon modules WM-01→05 | LITE, FIXED, FULL | **100%** |
| NFC + MWI protocol | LITE, FIXED, FULL | **100%** |
| V-SMASH ballistic engine | LITE, FIXED, FULL | **100%** |
| Unity 6 render core | LITE, FIXED, FULL, CORTEX | **100%** |
| Scoring engine (individual) | LITE, FIXED, FULL | **90%** (crew extension) |
| Scenario authoring GUI | LITE, FIXED, FULL | **85%** (crew scenarios add-on) |
| AAR engine | LITE, FIXED, FULL | **80%** (crew replay extension) |
| Motion platform | LITE only | 25% (FULL = shared deck, FIXED = none) |
| Projector calibration tool | LITE (3), FIXED (4), FULL (6) | **70%** (parametric, N-projector) |
| Solenoid driver circuit | LITE, FIXED, FULL + BB-01 | **100%** (BB-01 LOMAH reuse) |

**Overall platform commonality: ~90%** — confirmed from ICDM BD analysis.

---

## 7. COMPATIBILITY MATRIX

> Key cross-SF compatibility checks.

| Pairing | Compatible? | Risk |
|---------|:----------:|:----:|
| Solenoid recoil × ESP32 motion | ✅ Independent 24VDC circuits | LOW |
| MWI NFC × Unity ballistic table swap | ✅ NFC read → config ID → table lookup | LOW |
| 3× projector × RTX 4090 (6 HDMI) | ✅ 4090 has 4× DP + 1× HDMI, use DP→HDMI adapters for 3 | LOW |
| 6× projector (FULL) × single RTX 4090 | ⚠️ **CEO: Matrox splitter** (TripleHead2Go ×2 or DualHead2Go ×3). Single GPU + Matrox = simpler than 2×GPU. | MEDIUM → LOW |
| Shared deck motion × weapon station encoder | ⚠️ Platform vibration → encoder noise. Need mechanical isolation or digital filter. | MEDIUM |
| Pneumatic recoil × indoor room 6×8m | ⚠️ Compressor noise. Need sound isolation or external placement. | MEDIUM |
| Unity 6 × 4 viewport (FIXED) | ✅ Multi-display documented, 4×FHD within 4090 capability | LOW |
| **Temporal:** Recoil pulse (2ms) × audio sync | ✅ Both triggered from same Unity frame. Audio latency ≤5ms (FMOD). | LOW |
| **Temporal:** Motion platform (50Hz) × render frame (60fps) | ✅ Async OK — motion interpolates between render frames. UDP 50Hz vs 60fps = minor phase offset, imperceptible. | LOW |
| **Environmental:** Salt/humidity (M-03) × electronics | ⚠️ Encoder, ESP32, solenoid driver need conformal coating or sealed enclosure for naval base deployment. O-10 compliance. | MEDIUM |
| **Environmental:** Temperature 0-50°C (O-10) × projector/GPU | ✅ Indoor AC-controlled room. Projector rated 5-40°C. GPU throttles >90°C but AC keeps room <35°C. | LOW |

---

## 8. CEO CREATIVE INPUT REQUEST

> P&B §6.4: AI proposes WPs, CEO MUST add/remove before proceeding.

**CEO — xin bổ sung hoặc loại bỏ WP:**

1. **F1.6 Recoil:** 5 WPs đề xuất (A, B, D, E-new, F-new). CEO có giải pháp khác từ kinh nghiệm thực tế? Ví dụ: spring-return piston? Cam-actuated striker?
2. **F2.3 Target AI:** Layered architecture (L0-L4). CEO có input về UAV behavior patterns từ thực tế Việt Nam / OSINT?
3. **Service model:** Product + MAINT-KIT được chọn. CEO có muốn thêm option lease/per-session cho CORTEX?
4. **WPs nào cần LOẠI BỎ** vì không phù hợp thực tế VN? (ví dụ: AR eyepiece, deactivated real weapon)
5. **Compatibility concern:** FULL 6-projector × single GPU — CEO có preference 2×GPU hay Matrox splitter?

---

## 9. BB DELIVERABLE SUMMARY

| Deliverable | Status |
|-------------|:------:|
| Unified morphological matrix (31 SFs) | ✅ |
| DSO scores per WP (Q×R, sorted) | ✅ |
| ICDM WTP filter applied | ✅ |
| TRIZ-derived new WPs (WP-E, WP-F recoil) | ✅ |
| Recoil trade study matrix | ✅ |
| Target AI layered architecture | ✅ |
| 4 variant concept paths (LITE/FIXED/FULL/CORTEX) | ✅ |
| Platform commonality flags | ✅ |
| Compatibility matrix | ✅ |
| Service model row (ICDM extension) | ✅ |
| CEO creative input request | ✅ Pending |

---

*BB Working Principle Search complete. Ready for CEO creative input → Block BC: Develop.*
