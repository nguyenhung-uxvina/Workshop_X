---
created: 2026-03-17
updated: 2026-03-17
source: research-pipeline-v3 (Claude-only)
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active]
source_quality:
  tier_a: 4
  tier_b: 3
  tier_s: 1
  pro_ratio: "63%"
---

# Reverse Engineering — SubSeaSail HORUS Semi-Submersible AUSV

> Mục đích: Tài liệu tham khảo cho VN-USV-SS-001. HORUS là closest comparable — cùng class semi-submersible, cùng size range, cùng low-observable concept.
> ĐÂY LÀ BENCHMARK TRỰC TIẾP cho VN-USV-SS-001 (khác Inspector — surface USV).

---

## 1. Product Family Overview

SubSeaSail (SSS) phát triển 2 dòng AUSV:

| Model | Type | LOA | Weight | Speed | Depth | Mission |
|-------|------|-----|--------|-------|-------|---------|
| **HORUS** | Semi-sub monohull | 1.6 m | 32 kg | 0.5-4 kts | 100 m | ISR/observation |
| **HERMES** | Fast trimaran | Larger | Heavier | Higher | Surface | Cargo/UAV platform |
| **Gen6 (G6)** | Semi-sub platform | 1.5 m | 28 kg | 0.5-3 kts | 10 m | Sensor/comms |

**TRL:** HORUS = TRL 7 (2025). DoD NSIC funded.

---

## 2. Hull Architecture ★★★

### Design Concept

```
HORUS HULL CONFIGURATION:

        ┌─ Transparent wingsail (wind propulsion)
        │  └─ Solar panels on wingsail surface
        │
   ~~~~~│~~~~~~ Mặt nước ~~~~~~~~~~~~~~~~~~~~~~~~~~
        │
   ┌────┴────────────────────────┐
   │  MONOHULL (semi-submerged)  │
   │  ├─ Electronics bay         │
   │  ├─ Battery (NiMH) = ballast│
   │  ├─ Payload bay             │
   │  └─ Ballast system          │
   └─────────────────────────────┘

Key: Toàn bộ hull DƯỚI mặt nước → no wave-making drag, near-zero visual signature
     Chỉ wingsail nhô lên → transparent = low radar + low visual
```

### Design Decisions

| Decision | HORUS Choice | Rationale | VN-USV-SS Lesson |
|----------|-------------|-----------|-----------------|
| Hull form | Monohull torpedo-like | Simplest, lowest drag submerged | ✅ VN-USV-SS cùng approach — HDPE torpedo |
| Hull position | Fully below waterline | Zero wave-making drag, stealth | ✅ Core concept — validate in lab demo |
| Material | Composite/plastic | Light, corrosion-free | VN-USV-SS: HDPE roto-mold — cheaper, VN-available |
| Depth capability | 100 m (HORUS), 10 m (G6) | Evasion + weather survival | VN-USV-SS: 0-2 m — chỉ cần semi-sub, không deep dive |
| Stability method | Battery as ballast (lowest point) | Passive stability, no active system | ★★★ VN-USV-SS nên áp dụng — pin ở đáy hull = tự ổn định |
| Wingsail | Transparent, passive control | No electronics needed = ultra-reliable | VN-USV-SS: không dùng sail — BLDC thruster instead |

### Critical Insight: Battery-as-Ballast ★★★

> HORUS đặt NiMH battery ở **đáy hull** — vừa cung cấp điện, vừa làm ballast tĩnh (điểm nặng nhất ở thấp nhất). Không cần active ballast khi ở chế độ surface.

**VN-USV-SS-001 áp dụng:** LiFePO4 48V battery pack (15-30 kg) đặt ở đáy HDPE cylinder = passive stability + chỉ cần ballast pump cho chuyển đổi surface ↔ semi-submerged.

---

## 3. Propulsion & Energy ★★★

### HORUS Energy Architecture

```
ENERGY SYSTEM (100% harvesting):

PRIMARY PROPULSION: Wind (wingsail)
├─ Patented passive wingsail control
├─ No electronics, pulleys, or lines
├─ Single mechanical control point
├─ 0.5-2.5 kts sailing speed
└─ Works in wind > 5 kts

SECONDARY PROPULSION: Electric thruster
├─ For station-keeping in calm conditions
├─ Up to 4 kts
└─ Powered by solar-charged battery

ENERGY HARVESTING:
├─ Solar: 30W peak (on wingsail) + 10W peak (on deck) = 40W total
├─ Wind: Passive sail — zero electrical consumption
└─ Battery: NiMH 450 Wh

TOTAL ELECTRICAL LOAD: < 1 Watt (sailing mode!)
→ Chỉ cần <1W cho navigation + comms khi chạy bằng gió
→ Endurance: MONTHS (theoretically unlimited with wind+solar)
```

### Design Decision Analysis

| Feature | HORUS | VN-USV-SS-001 | Lesson |
|---------|-------|---------------|--------|
| Primary propulsion | Wind (sail) | Electric (BLDC) | VN-USV-SS cần controllable speed — sail too unpredictable |
| Endurance | Months (energy harvest) | 12-24h (battery) | Trade-off: VN-USV-SS faster but shorter range |
| Power budget cruise | < 1W (!) | ~260W | HORUS 260× more efficient — paradigm khác hoàn toàn |
| Battery | NiMH 450 Wh | LiFePO4 2.4-4.8 kWh | VN-USV-SS cần 5-10× more energy for active propulsion |
| Solar | 40W (wingsail + deck) | Optional 100-200W | VN-USV-SS: solar extends station-keeping significantly |
| Speed range | 0.5-4 kts | 3-6 kts | VN-USV-SS faster — biên phòng cần respond time |

> **Paradigm comparison:**
> - HORUS = "ultra-persistent, near-zero power, drift + sail" → months at sea
> - VN-USV-SS = "active propulsion, moderate endurance, controllable" → 12-24h missions
>
> **Cả hai đều valid.** VN-USV-SS chọn active approach vì biên phòng cần respond + relocate nhanh. Nhưng HORUS's solar-assisted station-keeping concept **nên adopt** cho extended surveillance mode.

---

## 4. Autonomy & Navigation ★★

### HORUS Approach

```
AUTONOMY (minimal — by design):
├─ Waypoint following (GPS-based)
├─ Station-keeping (thruster-assisted)
├─ Depth control (ballast)
├─ Weather evasion (auto-submerge)
└─ Total electrical load < 1W sailing
    → Extreme power efficiency enables months-long missions

NAVIGATION:
├─ GPS (surface mode)
├─ Dead reckoning (submerged mode — no GPS underwater)
├─ Compass + IMU (basic heading)
└─ No obstacle avoidance (relies on low profile + ocean openness)

C2 LINK:
├─ Satellite (Iridium SBD — for position reports)
├─ Cellular (near-shore)
└─ Low duty cycle: report every X hours, not continuous
```

### Key Difference from VN-USV-SS

| Aspect | HORUS | VN-USV-SS | Why Different |
|--------|-------|-----------|---------------|
| Autonomy level | Level 2 (waypoint) | Level 2-3 (waypoint + supervised) | VN-USV-SS cần higher situational awareness |
| Obstacle avoidance | None | ArduSub + sonar | Coastal waters = ships, boats, fishing nets |
| Comms duty cycle | Low (hours between reports) | High (continuous telemetry) | Biên phòng needs real-time awareness |
| AI onboard | None | Optional Jetson (YOLO) | VN-USV-SS ISR payload needs processing |

> **Bài học:** HORUS chứng minh rằng **autonomy tối giản + power tối giản = endurance tối đa.** VN-USV-SS nên có **2 modes:** (1) Active patrol (full autonomy, 12-24h) + (2) Passive surveillance (HORUS-like, solar + minimal comms, days-weeks).

---

## 5. Stealth/Signature Architecture ★★★

### HORUS Low-Observable Design

```
SIGNATURE MANAGEMENT:

RADAR (RCS):
├─ Hull 100% submerged → zero radar return from hull
├─ Wingsail: TRANSPARENT material → near-zero RCS
├─ Only mast tip (GPS antenna) above water → minimal target
└─ Estimated RCS: < 0.01 m² (insect-class)

VISUAL:
├─ Hull invisible (submerged)
├─ Wingsail transparent → hard to see against sky/sea
├─ No wake (hull below wave zone)
└─ At range: effectively invisible to naked eye

INFRARED (IR):
├─ No engine exhaust (wind + electric)
├─ No significant heat source
├─ Hull temperature = sea water temperature
└─ Essentially zero IR signature

ACOUSTIC:
├─ No propeller noise when sailing (wind only)
├─ Thruster noise minimal (small electric, low speed)
└─ Much quieter than any diesel/gas USV

ELECTROMAGNETIC (EM):
├─ Low duty cycle comms → minimal RF emission
├─ Passive wingsail control → no servo/actuator EM noise
└─ Near-zero EM signature when sailing
```

### VN-USV-SS Signature Comparison

| Signature | HORUS | VN-USV-SS | Gap |
|-----------|-------|-----------|-----|
| Radar (RCS) | < 0.01 m² | Low (hull sub) but mast + frame visible | VN-USV-SS mast taller, frame above water — higher RCS |
| Visual | Near-invisible | Low but open frame visible | Trade-off: payload access vs stealth |
| IR | Near-zero | Low (electric, no exhaust) | Comparable |
| Acoustic | Near-zero (sail) | Low (BLDC thruster) | VN-USV-SS louder when thrusting |
| EM | Near-zero | Moderate (LoRa + 4G continuous) | VN-USV-SS emits more — needs comms discipline |

> **Bài học:** HORUS = **stealth benchmark.** VN-USV-SS sẽ không đạt cùng mức stealth vì:
> 1. Open frame nhô trên mặt nước (payload access trade-off)
> 2. Active propulsion = acoustic signature
> 3. Continuous comms = EM signature
>
> **Mitigation:** (1) Retractable mast, (2) Low-speed quiet mode, (3) Burst comms thay vì continuous

---

## 6. Depth Control & Ballast ★★★

### HORUS/G6 Approach

```
BALLAST SYSTEM:

PASSIVE STABILITY:
├─ Battery pack at hull bottom = lowest CG
├─ Buoyancy foam at top = reserve buoyancy
└─ Self-righting by design (metacentric height positive)

ACTIVE DEPTH CONTROL:
├─ Ballast tanks in float assembly
├─ Pump water in → sink
├─ Pump water out → rise
├─ Depth range: 0 to 100m (HORUS) / 0 to 10m (G6)
└─ Auto-surface on power loss (positive buoyancy design)

FAIL-SAFE:
├─ Default state = BUOYANT (positive buoyancy without ballast)
├─ Ballast system failure → float to surface automatically
├─ No compressed air needed (unlike submarine)
└─ NiMH battery non-flammable in water
```

### Critical Design Principles for VN-USV-SS

| Principle | From HORUS | Apply to VN-USV-SS |
|-----------|-----------|-------------------|
| **Positive buoyancy default** | Without ballast = floats | ✅ HDPE inherently buoyant + foam fill |
| **Battery at bottom** | Passive stability | ✅ LiFePO4 pack at cylinder bottom |
| **Auto-surface on fault** | Design intent, not emergency | ✅ NC solenoid valve = dump ballast on power loss |
| **No compressed air** | Simple pump system | ✅ 12V bilge pump sufficient for 0-2m range |
| **Foam reserve buoyancy** | ≥50% buoyancy reserve | ✅ Already in TS-001 spec (≥50% reserve) |

> **★★★ Bài học quan trọng nhất:** HORUS chứng minh rằng **positive buoyancy by default + pump ballast** là đủ cho semi-sub depth control. Không cần compressed air, dive planes, hay variable buoyancy engine. **Simplest approach = most reliable.**

---

## 7. Patent Landscape ★★

SubSeaSail claims 11 issued + 8 pending + 3 provisional patents (as of 2025):

| Patent Area | Description | FTO Risk for VN-USV-SS |
|-------------|------------|:----------------------:|
| Passive wingsail control | Mechanical wingsail angle control without electronics | NONE — VN-USV-SS dùng BLDC, không sail |
| Transparent wingsail | Low-RCS sail material | NONE — VN-USV-SS không dùng sail |
| Semi-sub hull with sail | Hull below waterline + wingsail above | LOW — concept chung, VN-USV-SS không dùng sail |
| Reconfigurable passive acoustic array | Acoustic detection at low cost | NONE — khác payload type |
| Battery-as-ballast | Battery placement for stability | MONITOR — general concept, có thể bị claim |

> **FTO Assessment:** ⚠️ LOW RISK — VN-USV-SS không dùng wingsail (core patents của SSS). Semi-submersible hull concept quá general để patent (prior art rất nhiều). Battery-as-ballast cần monitor nhưng likely unenforceable (obvious engineering practice).

---

## 8. Cost Architecture ★★

| Metric | HORUS (est.) | VN-USV-SS-001 (est.) | Notes |
|--------|-------------|---------------------|-------|
| Unit cost | >$50,000 | $3,000-6,500 | VN-USV-SS ~10× cheaper |
| Operating cost | Near-zero (energy harvesting) | Low (battery charge) | HORUS wins on OPEX |
| Total cost of ownership (3yr) | ~$55,000 | ~$10,000-15,000 | VN-USV-SS wins on TCO |
| Deployment cost | Ship + crane (32 kg but ocean deploy) | 2 people from shore | VN-USV-SS easier near-shore |

> **Paradigm:** HORUS = premium persistent platform ($50K, months at sea). VN-USV-SS = affordable tactical tool ($3-6.5K, 12-24h missions, mass-deployable).

---

## 9. So Sánh Toàn Diện: HORUS vs Inspector vs VN-USV-SS

| Feature | HORUS | Inspector 125 | VN-USV-SS-001 |
|---------|-------|---------------|---------------|
| **Type** | Semi-sub AUSV | Surface USV | Semi-sub USV |
| **LOA** | 1.6 m | 12.3 m | 2.5-4.0 m |
| **Weight** | 32 kg | 13,500 kg | 30-80 kg |
| **Speed** | 0.5-4 kts | 25 kts | 3-6 kts |
| **Endurance** | Months | 48 h | 12-24 h |
| **Depth** | 100 m | Surface only | 0-2 m |
| **Payload** | ~5 kg sensors | 2,500 kg | 15-40 kg |
| **Stealth** | ★★★★★ | ★★ | ★★★ |
| **Cost** | >$50K | >$1M | $3-6.5K |
| **Autonomy** | Level 2 | Level 3-4 | Level 2-3 |
| **Propulsion** | Wind + small electric | 2×410HP waterjet | 2× BLDC thruster |
| **Energy** | 100% harvesting | Diesel | Battery + optional solar |
| **Deployment** | Ocean (ship) | Crane/harbor | Beach/pier (2 people) |
| **Indigenous content** | 0% (US) | 0% (France) | 50-75% (Vietnam) |

### VN-USV-SS-001 Positioning

```
                  Endurance
                     ▲
          HORUS ●    │
         (months)    │
                     │
                     │
                     │    ● VN-USV-SS
                     │    (12-24h)
        Inspector ●  │
          (48h)      │
                     └──────────────────▶ Speed
                   0    5    10   15   25 kts

VN-USV-SS = middle ground: faster than HORUS, stealthier than Inspector,
            cheaper than both, mass-deployable by Biên phòng
```

---

## 10. Design Decisions — Áp Dụng Cho VN-USV-SS-001

### Adopt từ HORUS

| # | Pattern | Áp dụng |
|---|---------|---------|
| 1 | **Battery-as-ballast** — pin ở đáy hull = passive stability | LiFePO4 pack ở đáy HDPE cylinder |
| 2 | **Positive buoyancy default** — float without power | HDPE + foam = inherently buoyant |
| 3 | **Simple ballast pump** — no compressed air, no dive planes | 12V bilge pump + NC solenoid valve |
| 4 | **Dual-mode operation** — sail mode + thruster mode | Active patrol + Passive surveillance (solar station-keeping) |
| 5 | **Ultra-low power station-keeping** — <1W concept | "Sleep mode": GPS + LoRa burst only, solar sustain |
| 6 | **Auto-surface fail-safe** — design intent, not emergency | NC valve + positive buoyancy = physics-guaranteed surface |

### Reject từ HORUS (không phù hợp VN-USV-SS mission)

| # | HORUS Feature | Lý do bỏ |
|---|--------------|----------|
| 1 | Wind propulsion (wingsail) | Không controllable đủ cho biên phòng patrol — cần respond time |
| 2 | 100m depth | Overkill — VN-USV-SS chỉ cần 0-2m semi-submerged |
| 3 | Months endurance | Biên phòng missions = hours-days, không cần months |
| 4 | NiMH battery | LiFePO4 tốt hơn cho active propulsion (higher discharge rate) |
| 5 | No obstacle avoidance | Coastal waters = busy — cần COLREGS awareness |

---

## 11. Galaxy Candidates

- [ ] "Battery-as-Ballast — Biến Bất Lợi (Trọng Lượng Pin) Thành Lợi Thế (Ổn Định)" → cluster H (Physical Design)
  - Links: [[Physical-World Interface]], [[Reliability Trumps Precision]]
  - Confidence: ★★★ (proven by HORUS TRL 7 + Gen6 sea trials)

- [ ] "Dual-Mode USV — Active Patrol + Passive Surveillance" → cluster C (Judgment & Agency)
  - Links: [[ACH Boundary Rule]], [[Shifting the Burden Archetype]]
  - Confidence: ★★ (concept valid, chưa validated cho VN-USV-SS)

---

## Sources

- [SubSeaSail Official — Technology](https://subseasail.com/unmanned-autonomous-surface-vessels/our-tech) (Tier A)
- [SubSeaSail Official — About](https://subseasail.com/unmanned-autonomous-surface-vessels/about-us) (Tier A)
- [SubSeaSail Official — Applications](https://subseasail.com/unmanned-autonomous-surface-vessels/applications) (Tier A)
- [SubSeaSail Wingsails](https://subseasail.com/unmanned-autonomous-surface-vessels/wingsails) (Tier A)
- [SubSeaSail G6 Platform Test — Marine Technology News](https://www.marinetechnologynews.com/news/subseasail-platform-passes-600139) (Tier B)
- [Hybrid Multi-Domain USV — Marine Technology News](https://www.marinetechnologynews.com/news/hybrid-theory-multi-domain-656317) (Tier B)
- [SubSeaSail NSIC Award — Marine Technology News](https://www.marinetechnologynews.com/news/subseasail-receives-national-security-641395) (Tier B)
- [Wind-Solar USSV — Plastiverse](https://www.plastiverse.org/tools/wind-propelled-solar-powered-unmanned-semi-submersible-sailing-vessels-ussvs) (Tier B)
- [USV Hull Design Perspective — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0029801824023151) (Tier S)
- [Unmanned Semi-Submersible Development — ResearchGate](https://www.researchgate.net/publication/224119647_Development_of_a_new_Unmanned_Semi-Submersible_USS_vehicle) (Tier S)
