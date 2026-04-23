---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Morphological Matrix
subsystem: SS4 Scenario Engine + SS5 System Integration
---

# SS4 + SS5: Scenario Engine & System Integration — Morphological Matrix
## VN-CUAV-SIM-001 | Phase 2: Conceptual Design

---

# SS4: Scenario Engine

**Scope:** Scenario authoring, scoring, library management, training progression
**Requirements liên quan:** O-04, O-05, O-06, O-07, Er-04, Er-06, T-08, T-09, S-06

## Sub-functions

```
SS4: SCENARIO ENGINE
├── SF1: Scenario authoring — tạo/chỉnh sửa bài tập
├── SF2: Scoring engine — chấm điểm + xếp hạng
├── SF3: Scenario library — quản lý + phân loại bài tập
└── SF4: Training progression — theo dõi tiến bộ xạ thủ
```

---

### SF1: Scenario Authoring

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | GUI drag-drop: waypoint + target + trigger | JSON/XML config file edit | Scripting (Lua/Python) |
| **Instructor cần code? (Er-04)** | Không ✓ | Cần hiểu cấu trúc | Cần biết lập trình |
| **Thời gian tạo (Er-06)** | ≤ 15 phút ✓ | 30-60 phút | 1-2 giờ |
| **Flexibility** | Trung bình (preset components) | Cao | Rất cao |
| **Dev effort** | Cao (custom UI) | Thấp | Trung bình |

**★ Chọn WP-A:** GUI drag-drop trong instructor station. Đặt waypoint trên map → assign target type → set timing → save. Template system cho quick creation. Er-04 bắt buộc: instructor không cần code.

---

### SF2: Scoring Engine

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Multi-criteria weighted: accuracy + reaction time + ammo economy + target priority | Simple hit/miss percentage | Pass/fail binary |
| **Metrics** | Hit rate, first-round time, ammo per kill, threat prioritization, engagement window utilization | Hit rate only | Pass/fail |
| **Comparison** | Peer ranking + personal trend | Peer ranking | Không |
| **Export** | CSV + PDF certificate | PDF | Log only |
| **Phù hợp PA-2** | Tối ưu — đủ data cho debrief | Thiếu depth | Thiếu |

**★ Chọn WP-A:** Multi-criteria scoring: accuracy (hit/miss/near-miss), reaction time (detect → first shot), ammo economy (rounds per kill), threat priority (engage high-threat first). Weighted composite score. Personal trend tracking qua sessions.

---

### SF3: Scenario Library

| | **WP-A** ★ | **WP-B** |
|---|---|---|
| **Nguyên lý** | Local database (SQLite) + file-based scenarios | Cloud-synced library |
| **Pre-built (O-07)** | ≥ 10 scenarios delivered ✓ | Same |
| **Categories** | By threat (UAV/USV/mixed), difficulty (beginner/intermediate/advanced), sea state, time of day | Flat list |
| **Sovereignty (L-04)** | On-premise ✓ | Cloud dependency ✗ |

**★ Chọn WP-A:** SQLite + file-based. 10+ pre-built scenarios delivered:

1. **UAV-01:** Single DJI Mavic approach (beginner)
2. **UAV-02:** FPV kamikaze dive 120 km/h (intermediate)
3. **UAV-03:** Pop-up reconnaissance (intermediate)
4. **UAV-04:** Loitering munition orbit → dive (advanced)
5. **UAV-05:** Swarm 4 units coordinated (advanced)
6. **USV-01:** Single approach straight 30 kts (beginner)
7. **USV-02:** Zigzag approach 40 kts (intermediate)
8. **USV-03:** High-speed attack 60 kts (advanced)
9. **MIX-01:** UAV distraction + USV main attack (advanced)
10. **MIX-02:** Night engagement, 2 UAV + 1 USV (expert)

---

### SF4: Training Progression

| | **WP-A** ★ | **WP-B** |
|---|---|---|
| **Nguyên lý** | Trainee profile + skill tree + auto-recommend next scenario | Manual instructor assignment |
| **Tracking** | Per-trainee database: scores, strengths, weaknesses | Paper log |
| **Auto-recommend (T-09)** | Basic: "tiếp theo nên luyện..." based on lowest score area | Không |
| **Synergy** | AAR data (SS2 SF7) feeds directly | Manual input |

**★ Chọn WP-A:** Trainee profile database. Track 5 skills: detection, tracking, lead angle, burst control, threat priority. Auto-recommend scenario targeting weakest skill. T-09 adaptive difficulty = PA-3 upgrade path (AI adjusts within scenario), nhưng scenario recommendation = PA-2.

---

# SS5: System Integration

**Scope:** Kết nối tất cả SS1-SS4, power management, packaging, deployment
**Requirements liên quan:** E-01, E-02, E-03, G-01, G-04, G-05, A-01, A-02, A-03, A-04, Tr-01, O-01, O-02, Ma-01 đến Ma-06, L-01, L-03

## Sub-functions

```
SS5: SYSTEM INTEGRATION
├── SF1: System architecture — data flow + communication
├── SF2: Power management — UPS + distribution
├── SF3: Packaging — physical layout + enclosures
├── SF4: Software deployment — install + update
└── SF5: Diagnostics — self-test + health monitoring
```

---

### SF1: System Architecture

| | **WP-A** ★ | **WP-B** |
|---|---|---|
| **Nguyên lý** | Central render PC + instructor PC via Gigabit LAN + weapon MCU via USB serial + motion MCU via UDP | All-in-one single PC |
| **Latency (S-01)** | ≤ 50ms total chain ✓ | ≤ 30ms (everything local) |
| **Scalability (S-08)** | Multi-trainee via LAN ✓ | Single trainee only |
| **Failure isolation** | Motion failure ≠ render failure | Single point of failure |
| **Dev/debug** | Modular — test each subsystem independent | Monolithic |

**★ Chọn WP-A:** Modular architecture.

```
Data Flow:
─────────
Render PC (Unity)
  ├── [USB Serial] → Weapon MCU (ESP32) → encoders + trigger + recoil
  ├── [UDP 50Hz]   → Motion MCU (ESP32) → 2 actuators
  ├── [HDMI ×3]    → 3 projectors → curved screen
  ├── [USB Audio]   → FMOD → 5.1 speakers
  └── [Gigabit LAN] → Instructor PC → 2 monitors

All data paths < 20ms. Total loop: input → render → display ≤ 50ms (S-01).
```

---

### SF2: Power Management

| | **WP-A** ★ | **WP-B** |
|---|---|---|
| **Nguyên lý** | Single-phase 220V/20A feed → UPS 2kVA → PDU labeled | Direct wall outlet × multiple |
| **UPS (E-03)** | 2kVA = ~15 min runtime ✓ | No UPS |
| **Total power (E-02)** | Render PC ~500W + Instructor ~200W + 3 proj ~900W + motion ~200W + audio ~100W + misc ~100W = **~2.0kW** ✓ | Same |
| **Safety** | Grounded, RCBO protected | Basic |

**★ Chọn WP-A:** UPS 2kVA (APC/CyberPower, có sẵn VN). PDU with labeled outlets. Total ~2.0kW well within E-02 (≤5kW) and 20A circuit.

---

### SF3: Packaging & Physical Layout

Room layout cho G-01 (6×8m minimum):

```
┌──────────────────────────────────────────────┐
│                  6m × 8m ROOM                │
│                                              │
│  ╔══════════════════════════════════╗         │
│  ║   CURVED SCREEN 4m × 2m        ║  ← 0.5m │
│  ╚══════════════════════════════════╝  wall   │
│                                              │
│         2.5m from screen                     │
│                                              │
│              ┌─────────┐                     │
│              │ MOTION  │                     │
│              │PLATFORM │                     │
│              │ + SEAT  │                     │
│              │ + GUN   │                     │
│              └─────────┘                     │
│                 2×2m (G-04)                  │
│                                              │
│                         ┌──────────┐         │
│                         │INSTRUCTOR│  side   │
│                         │ STATION  │  wall   │
│                         └──────────┘         │
│                                              │
│  ┌──────┐                                    │
│  │RACK: │ UPS + Render PC + audio amp        │
│  │ PDU  │ (against side wall)                │
│  └──────┘                                    │
└──────────────────────────────────────────────┘
```

**Transport (Tr-01):** 4 kiện:
1. Weapon station + mount (~25kg)
2. Motion platform + seat (~55kg)
3. Screen frame + fabric (rolls) (~20kg)
4. Electronics: PCs + projectors + speakers + UPS (~60kg)

Mỗi kiện ≤ 200kg ✓. Custom flight cases cho kiện 4.

---

### SF4: Software Deployment

| | **WP-A** ★ | **WP-B** |
|---|---|---|
| **Nguyên lý** | Pre-imaged SSD + USB installer | Cloud-based deployment |
| **Install (A-01)** | HW assembly ≤ 4h + SW boot from SSD ≤ 1h = total ≤ 8h ✓ | Depends on internet |
| **Update** | USB stick + offline installer | Online only |
| **Sovereignty (L-04)** | 100% on-premise ✓ | Cloud dependency |

**★ Chọn WP-A:** Pre-imaged NVMe SSD. Mỗi unit giao đã cài sẵn OS + Unity runtime + scenarios + calibration. Update qua USB stick (offline). No internet required.

---

### SF5: Diagnostics (Q-05)

| | **WP-A** ★ | **WP-B** |
|---|---|---|
| **Nguyên lý** | Boot-time self-test: encoder check, projector detect, motion range test, audio test | Manual checklist |
| **Time (Q-05)** | ≤ 2 phút ✓ | 5-10 phút |
| **Report** | On-screen status dashboard + error log | Paper |
| **Remote (S-09)** | VPN-ready log export (wish) | Không |

**★ Chọn WP-A:** Auto self-test khi khởi động: check encoder response, verify 3 projector outputs, motion platform range test (±2° sweep), audio channel test. Dashboard hiện trạng hệ thống trên instructor monitor.

---

## Concept Tổng Hợp SS4 + SS5 — PA-2 STANDARD

```
SS4: SCENARIO ENGINE
════════════════════
AUTHORING:     GUI drag-drop, no coding (Er-04)
SCORING:       Multi-criteria (accuracy, reaction, ammo, priority)
LIBRARY:       SQLite local, 10+ pre-built scenarios
PROGRESSION:   Trainee profiles, 5-skill tracking, auto-recommend

SS5: SYSTEM INTEGRATION
═══════════════════════
ARCHITECTURE:  Render PC + Instructor PC (LAN) + 2× ESP32 MCU (USB/UDP)
POWER:         220V single-phase, UPS 2kVA, total ~2.0kW
LAYOUT:        6×8m room, 4 transport cases ≤ 200kg each
SOFTWARE:      Pre-imaged SSD, offline update via USB
DIAGNOSTICS:   Boot self-test ≤ 2 min, error dashboard
```

---

## Ước Tính Chi Phí SS4 + SS5

| Hạng mục | Chi phí ước tính |
|----------|-----------------|
| **SS4 Scenario Engine** | |
| Software development (GUI + scoring + library) | Included in SW dev budget |
| Scenario content (10 pre-built) | Included in SW dev budget |
| **SS5 System Integration** | |
| UPS 2kVA (APC/CyberPower) | $300-500 |
| PDU + cables + connectors (labeled, keyed) | $150-200 |
| Equipment rack / cabinet | $200-300 |
| Flight cases ×4 (transport) | $400-600 |
| Network switch + Ethernet cables | $50-100 |
| Misc (cable ties, labels, tools kit) | $100 |
| **TỔNG SS4+SS5 (hardware)** | **~$1,200-1,700** |

---

## TỔNG HỢP CHI PHÍ PA-2 STANDARD — All Subsystems

| Subsystem | Chi phí | % |
|-----------|---------|---|
| SS1: Weapon Station | $1,330 | 5% |
| SS2: Visual Display & Engine | $8,450-12,100 | 55% |
| SS3: Motion Platform | $1,580-2,420 | 10% |
| SS4+SS5: Scenario + Integration | $1,200-1,700 | 7% |
| **Hardware subtotal** | **$12,560-17,550** | **77%** |
| Software development (estimated 6 person-months) | $6,000-10,000 | 23% |
| **TỔNG R&D COST** | **$18,560-27,550** | 100% |
| **Target sell price** | **$50,000-70,000** | |
| **Gross margin** | **~55-73%** | |

---

## Full Requirements Coverage Matrix

All 101 requirements mapped:
- **SS1:** 13 requirements ✓
- **SS2:** 22 requirements ✓
- **SS3:** 6 Demand + 1 Wish deferred ✓
- **SS4:** 9 requirements ✓
- **SS5:** 21 requirements ✓
- **Cross-system (covered by architecture):** remaining ~30 requirements

**Blocking constraint resolved:** Morphological Matrix SS1-SS5 COMPLETE.

---

## Next Steps

1. **Gate 1 formal review** — validate Phase 1→2 transition
2. **Define physical gate date** (Tier 1: ≤ 30 ngày)
   - Đề xuất: **Weapon station mockup PoC** (SS1 only) — CNC body + encoder + trigger → 30 ngày
3. **Phase 2 consolidation** — Concept Description document (Doc 010 equivalent)
4. **Function Structure v1.0** — 6-flow diagram all subsystems
