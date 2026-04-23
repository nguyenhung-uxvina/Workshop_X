---
created: 2026-03-17
updated: 2026-03-17
source: research-pipeline-v3 (Claude-only — NLM unavailable)
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active]
source_quality:
  tier_a: 5
  tier_b: 3
  tier_s: 2
  pro_ratio: "70%"
---

# Reverse Engineering — ECA Group Inspector USV Family

> Mục đích: Tài liệu tham khảo cho VN-USV-SS-001. Phân tích kiến trúc hệ thống, quyết định thiết kế, và bài học áp dụng.
> Lưu ý: ECA Group Inspector KHÔNG phải semi-submersible — nó là surface USV. Tuy nhiên kiến trúc hệ thống (propulsion, autonomy, payload, comms) rất có giá trị tham khảo.

---

## 1. Inspector Family Overview

| Model | LOA | Beam | Draft | Weight | Speed | Endurance | Payload | Sea State | Era |
|-------|-----|------|-------|--------|-------|-----------|---------|-----------|-----|
| **Inspector Mk2** | 9.0 m | 2.95 m | 0.6 m | ~4.5 t | 20 kts | ~24 h | ~500 kg | SS 3 | 2010s |
| **Inspector 90** | 9.0 m | 2.95 m | 0.6 m | ~5 t | 35 kts | ~24 h | ~600 kg | SS 3-4 | 2018 |
| **Inspector 120** | 12.0 m | ~3.5 m | ~0.7 m | ~10 t | 25 kts | ~36 h | ~1.5 t | SS 4 | 2018 |
| **Inspector 125** | 12.3 m | 4.2 m | 0.7 m | 13.5 t | 25 kts | 48 h | 2.5 t | SS 4 | 2019 |

**Key Insight:** Mỗi thế hệ tăng LOA + payload capacity. Inspector 125 là flagship cho Belgian-Dutch rMCM program (17 units ordered).

---

## 2. Hull Architecture ★★★

### Design Decisions

| Decision | Inspector Choice | Rationale | VN-USV-SS-001 Lesson |
|----------|-----------------|-----------|---------------------|
| Hull form | Planing hull (V2 NG rescue boat platform) | Speed + seakeeping | VN-USV-SS khác: semi-sub = displacement, chấp nhận tốc độ thấp |
| Material | GRP composite (fiberglass) | Light weight, corrosion resistant | VN-USV-SS: HDPE roto-mold — rẻ hơn, dễ sản xuất VN hơn |
| Unsinkability | Foam-filled compartments | "Unsinkable" — survive mine blast | VN-USV-SS: cần tương tự — foam-filled HDPE = inherently buoyant |
| Anti-roll | Active anti-roll system | Giảm 40% roll → stable payload platform | VN-USV-SS: semi-sub inherently stable (phần lớn chìm) — không cần active anti-roll |
| Signature | Low magnetic + low acoustic | MCM requirement — avoid triggering mines | VN-USV-SS: low RCS (radar) thay vì magnetic — khác requirement |

### Structural Insight

Inspector dùng **proven rescue boat hull** (Mauric V2 NG) thay vì thiết kế mới. Đây là bài học quan trọng:

> **"Dùng hull platform đã proven, customize thượng tầng"** — giảm risk Phase 3 embodiment

VN-USV-SS-001 có thể áp dụng: dùng ống HDPE tiêu chuẩn Nhựa Bình Minh (đã proven cho dẫn nước) thay vì custom mold.

---

## 3. Propulsion Architecture ★★★

### Inspector 125

| Component | Spec | Notes |
|-----------|------|-------|
| Engines | 2 × 410 HP diesel | Redundancy — 1 engine fail → still maneuverable |
| Propulsion | 2 × waterjet | No exposed propeller → safe for MCM ops, towed sonar |
| Speed | 25 kts max, ~8 kts cruise | Cruise = MCM operational speed |
| Fuel | Diesel tanks | 48h endurance at operational speed |

### Inspector 90

| Component | Spec | Notes |
|-----------|------|-------|
| Speed | 35 kts max | Faster than 125 — lighter hull |
| Propulsion | Waterjet (inferred from speed) | Consistent with family |

### Design Decision Analysis

| Decision | Why Waterjet (not propeller) | VN-USV-SS Relevance |
|----------|---------------------------|---------------------|
| No exposed rotating parts | MCM safety — no mine cable snagging | VN-USV-SS: propeller OK — not MCM mission |
| High speed possible | Planing hull + waterjet = 35 kts | VN-USV-SS: 3-6 kts — BLDC + propeller sufficient |
| Reversibility | Waterjet nozzle deflection = instant reverse | VN-USV-SS: differential thrust = maneuverable enough |
| Cost | Waterjet system ~$50K+ | VN-USV-SS: BLDC thruster ~$170-500 = 100× cheaper |

> **Bài học:** Inspector overspecified propulsion cho MCM mission. VN-USV-SS mission (ISR/decoy) cho phép propulsion đơn giản hơn rất nhiều. **Cost saving: $50K → $500 (100×)**

---

## 4. Autonomy & Navigation ★★★

### Inspector 125 Autonomy Stack

```
AUTONOMY LEVELS:
├─ Remote Control: Operator drives via radio link
├─ Waypoint Following: Pre-planned route, auto-execution
├─ Supervised Autonomy: Auto-plan, human approves key decisions
└─ Full Autonomous MCM: Detect → Identify → Neutralize pipeline

NAVIGATION:
├─ GNSS (multi-constellation)
├─ INS (inertial navigation)
├─ Acoustic tracking system (for underwater comms with AUV)
├─ ECDIS integration (electronic chart display)
└─ Collision avoidance (COLREGS compliant)

C2 LINK:
├─ Stand-off distance: 18 nautical miles from mothership
├─ Extended via SKELDAR V-200 UAV relay
├─ Data: Real-time telemetry + payload data
└─ Lost-link: Auto-RTH or continue mission (configurable)
```

### Design Decision Analysis

| Feature | Inspector | VN-USV-SS-001 |
|---------|-----------|---------------|
| Autonomy level | Level 3-4 (supervised → full auto) | Level 2-3 (waypoint → supervised) — sufficient for initial |
| Navigation | Military-grade INS + GNSS | COTS: Pixhawk + u-blox — 10× cheaper, Level 2-3 adequate |
| Collision avoidance | COLREGS-compliant | ArduSub basic obstacle avoidance → upgrade path to COLREGS |
| Acoustic tracking | Yes (for AUV taxi) | Not needed — no AUV interaction |
| Communication relay | UAV relay (SKELDAR) | LoRa + 4G — simpler, cheaper, adequate for coastal |

> **Bài học:** Inspector 125 dùng military-grade navigation ($50K+). VN-USV-SS dùng COTS ArduSub + Pixhawk ($300-800) — **đủ cho Level 2-3.** ACH principle: COTS hardware, AI compensates.

---

## 5. Communication System ★★

### Inspector 125

```
COMMS ARCHITECTURE:
├─ Primary: Broadband radio data link (ship-to-USV)
│   └─ Range: 18 NM LOS
├─ Secondary: Acoustic communication (USV-to-AUV underwater)
│   └─ For AUV taxi mode coordination
├─ Extended: UAV relay (SKELDAR V-200 as airborne repeater)
│   └─ Extends range beyond LOS
├─ Safety: AIS transponder
└─ Protocol: NATO STANAG 4586 compatible
```

### VN-USV-SS-001 Comparison

| Feature | Inspector | VN-USV-SS | Cost Delta |
|---------|-----------|-----------|:----------:|
| Primary link | Military broadband (~$20K) | LoRa 868MHz (~$30) | 666× cheaper |
| Bandwidth | High (video + telemetry) | LoRa: telemetry only; 4G: video | Adequate |
| Range | 18 NM (33 km) | LoRa: 20 km, 4G: cell coverage | Comparable |
| Backup | UAV relay | Iridium SBD ($250) | Simpler |
| Underwater | Acoustic modem | Not needed | — |
| Standard | STANAG 4586 | MAVLink v2 | Open-source |

> **Bài học:** Inspector's multi-link architecture (radio + acoustic + UAV relay) là gold standard. VN-USV-SS đạt 80% capability với 1% cost bằng LoRa + 4G + optional Iridium.

---

## 6. Payload Architecture ★★★

### Inspector 125 — Modular Payload Concept

```
PAYLOAD CONFIGURATIONS (swap < 6 hours):
├─ Config A: AUV Taxi Mode
│   ├─ AUV (e.g., A18-M mine hunter) on stern deck
│   ├─ LARS (Launch And Recovery System)
│   └─ Acoustic tracking for AUV control
│
├─ Config B: Towed Sonar
│   ├─ Towed body with side-scan sonar
│   ├─ Winch + cable management
│   └─ Real-time sonar data to mothership
│
├─ Config C: MIDS (Mine Disposal)
│   ├─ SEASCAN identification ROV
│   ├─ K-STER C neutralization ROV
│   └─ Launch + recovery equipment
│
└─ Config D: Diver Support
    ├─ Protection unit
    └─ Diver deployment platform

PAYLOAD INTERFACE:
├─ Generic power + control cabinet (compatible ALL payloads)
├─ Hydraulic power unit (for LARS, winch)
├─ Acoustic tracking pole
├─ Aft deck: 2.5 tons capacity
└─ Swap time: < 6 hours between configurations
```

### Design Decision: "Generic Interface" ★★★

**Critical insight cho VN-USV-SS-001:**

Inspector dùng **generic power + control cabinet** — 1 interface chuẩn cho TẤT CẢ payloads. Đây là ICD architecture decision quan trọng nhất:

```
GENERIC PAYLOAD INTERFACE (Inspector pattern):
├─ Power: [voltage] DC bus từ main system
├─ Data: [protocol] cho command + telemetry
├─ Physical: Mounting pattern chuẩn trên deck
└─ Mechanical: Lift point + securing points

→ VN-USV-SS-001 nên áp dụng:
├─ Power: 12V rail từ 48V main bus (DC-DC)
├─ Data: RS-485 hoặc Ethernet (ROS2 topic)
├─ Physical: Mounting plate trên open frame (nhôm 6mm, 4× M6)
└─ Mechanical: Quick-release clamp
```

> **Bài học lớn nhất:** Payload modularity qua generic interface, KHÔNG phải custom integration cho mỗi payload. Giảm Phase 3 effort rất nhiều.

---

## 7. Deployment Method ★★

### Inspector Deployment

```
DEPLOYMENT OPTIONS:
├─ Mothership crane: Lift on/off from support vessel
├─ Self-transit: Navigate independently to/from area
├─ Harbor launch: Standard slipway/ramp
└─ Return: Auto-RTH to mothership vicinity

MOTHERSHIP INTEGRATION:
├─ Davit system on support vessel
├─ Data link setup at 18 NM stand-off
└─ Operator console on mothership bridge
```

### VN-USV-SS-001 Deployment Comparison

| Aspect | Inspector (13.5t) | VN-USV-SS (30-80 kg) |
|--------|-------------------|---------------------|
| Launch | Crane/davit (heavy) | 2 person manual lift, or small boat ramp |
| Recovery | Crane/davit | Manual lift or tow alongside |
| Transport | Trailer (special) | Pickup truck + roof rack |
| Setup time | Hours | Minutes |

> **Bài học:** VN-USV-SS massive advantage in deployability — 100× lighter → no crane needed, any beach/pier, 2 people deploy. Đây là competitive edge vs. imported systems.

---

## 8. Cost Architecture ★★

| Component | Inspector 125 (est.) | VN-USV-SS-001 (est.) | Ratio |
|-----------|---------------------|---------------------|:-----:|
| Hull + structure | $200K-500K | $400-800 | 500× |
| Propulsion | $100K-200K | $500-1,000 | 200× |
| Power system | $50K-100K | $600-1,200 | 80× |
| Navigation/autopilot | $50K-100K | $400-800 | 125× |
| Communication | $50K-100K | $100-300 | 500× |
| Payload | Mission-dependent | $200-500 | — |
| Integration + test | $100K-200K | $200-500 | 400× |
| **TOTAL** | **>$1M-2M per unit** | **$3K-6.5K** | **200×** |

> **Paradigm:** Inspector = "military-grade everything" ($1M+). VN-USV-SS = "COTS + indigenous + AI compensation" ($3K-6.5K). Khác biệt 200× cho phép deployment quantity hoàn toàn khác (1 Inspector vs 50-100 VN-USV-SS cùng budget).

---

## 9. Design Decisions Summary — Áp Dụng Cho VN-USV-SS-001

### Nên Áp Dụng (Adopt)

| # | Pattern từ Inspector | Áp dụng cho VN-USV-SS |
|---|---------------------|----------------------|
| 1 | **Proven hull platform** — dùng rescue boat hull, không thiết kế mới | Dùng ống HDPE tiêu chuẩn Nhựa Bình Minh |
| 2 | **Generic payload interface** — 1 cabinet chuẩn cho mọi payload | Mounting plate + power/data connector chuẩn hóa |
| 3 | **Modular payload swap** — < 6 hours between configs | Design payload bay với quick-release, swap < 30 min (nhỏ hơn) |
| 4 | **Unsinkability** — foam-filled compartments | HDPE inherently buoyant + foam fill |
| 5 | **Multi-link comms** — primary + backup + relay | LoRa (primary) + 4G (bandwidth) + Iridium (backup) |
| 6 | **Lost-link fail-safe** — auto-RTH or continue mission | ArduSub RTH + auto-surface (NC ballast valve) |

### Không Nên Áp Dụng (Reject — overspec for VN-USV-SS mission)

| # | Inspector Feature | Lý do bỏ |
|---|------------------|----------|
| 1 | Waterjet propulsion | Quá đắt, không cần tốc độ cao |
| 2 | Military-grade INS | COTS GPS/IMU đủ cho Level 2-3 |
| 3 | Acoustic tracking system | Không có AUV interaction |
| 4 | UAV communication relay | Overkill — LoRa + 4G đủ range |
| 5 | Low magnetic signature | Không làm MCM — khác mission |
| 6 | Active anti-roll | Semi-sub inherently stable |

---

## 10. Galaxy Candidates

- [ ] "Generic Payload Interface — Chuẩn Hóa Thay Vì Custom Cho Mỗi Mission" → cluster H (Physical Design)
  - Links: [[Interface Ownership]], [[Reliability Trumps Precision]]
  - Confidence: ★★★ (proven by Inspector 17-unit production)

- [ ] "Proven Hull Platform — Dùng Cái Có Sẵn, Customize Thượng Tầng" → cluster G (Pahl-Beitz)
  - Links: [[Musk Sequence]], [[Physical-World Interface]]
  - Confidence: ★★★ (Inspector dùng V2 NG rescue boat hull)

**Decision:** Evaluate after VN-USV-SS-001 Phase 1 — promote if patterns validated in practice.

---

## Sources

- [Inspector 125 — Naval Technology](https://www.naval-technology.com/projects/inspector-125/) (Tier A)
- [Inspector 125 — ECA Group OEM](https://www.ecagroup.com/en/solutions/unmanned-surface-vehicle-inspector-125) (Tier A)
- [Inspector 90 — ECA Group OEM](https://www.ecagroup.com/en/solutions/unmanned-surface-vehicle-inspector-90) (Tier A)
- [Inspector 120 — Army Recognition](https://www.armyrecognition.com/news/navy-news/2018/eca-group-unveils-new-inspector-120-12-meters-usv-for-mcm) (Tier B)
- [Inspector 125 Belgian-Dutch rMCM — Naval News](https://www.navalnews.com/naval-news/2021/03/ecas-inspector-125-usv-selected-for-belgian-dutch-rmcm-program/) (Tier A)
- [Inspector 125 — ROV Planet](https://www.rovplanet.com/inspector-125--eca-group-unveils-its-new-unsinkable-unmanned-surface-vehicle-usv-from-sea-proven-platform-17-02-2019) (Tier B)
- [Inspector 125 — Exail](https://www.exail.com/inspector-125-keeping-crews-out-of-the-danger-zone-2/) (Tier A)
- [Semi-submersible USV hull design — ScienceDirect](https://www.sciencedirect.com/science/article/abs/pii/S0029801824023151) (Tier S)
- [Unmanned Semi-Submersible development — ResearchGate](https://www.researchgate.net/publication/224119647_Development_of_a_new_Unmanned_Semi-Submersible_USS_vehicle) (Tier S)
- [Pioneer USV — Navy Lookout](https://www.navylookout.com/stability-over-speed-pioneer-a-different-approach-to-uncrewed-surface-vessels/) (Tier B)
