---
created: 2026-03-20
type: project
project: VN-USV-SS-001
skills: [forge-validate, forge-trust]
---

# VN-USV-SS-001 — Validation Plan + Trust Evidence
## forge-validate + forge-trust Combined Output

---

# PART A: VALIDATION PLAN (forge-validate)

## Staged Validation — Outcome-Driven

### Stage 1: LAB DEMONSTRATOR ($140, deadline 2026-04-17)

| Test # | Name | Outcome | Pass Criteria |
|--------|------|---------|---------------|
| L1 | Depth hold accuracy | O-27 (9.5) | ±50 mm at 0.3m depth, 60s sustained |
| L2 | Ballast valve fail-safe | O-19 (9.0) | NC valve → auto-surface ≤30s on power cut |
| L3 | Ballast cycle time | O-41 (8.0) | Surface → semi-sub ≤60s, semi-sub → surface ≤30s |
| L4 | ArduSub waypoint follow | O-23 (10.0) | Complete 3-waypoint mission in pool/lake |
| L5 | Comms loss → auto-RTL | O-23 (10.0) | Kill LoRa mid-mission → USV returns to launch point |
| L6 | Battery endurance (scaled) | O-24 (10.0) | ≥30 min at cruise speed (scaled to predict 12h full-scale) |

**GO/NO-GO Gates:**
- GO-1: Depth hold ±50 mm — **KILL** if fail (core ACH premise)
- GO-2: NC valve auto-surface — **KILL** if fail (safety)
- GO-3: ArduSub waypoint — **KILL** if fail (autonomy)
- GO-4: Comms-loss RTL — must work before any open-water test

**Cost:** $140 (PVC pipe hull + Arduino/Pixhawk + ballast pump + battery)
**Duration:** 2 weeks build + 1 week test

### Stage 2: SHELTERED WATER (SS 1-2, after Stage 1 PASS)

| Test # | Name | Outcome | Pass Criteria |
|--------|------|---------|---------------|
| S1 | Full-scale depth hold | O-27 | ±100 mm at target depth, 30 min sustained |
| S2 | Endurance test | O-24 | ≥12h at 3 kts cruise |
| S3 | LoRa range test | O-23 | ≥3 km line-of-sight |
| S4 | 4G failover | O-23 | LoRa loss → 4G auto-switch ≤5s |
| S5 | Camera stream quality | O-25, O-31 | Recognizable vessel at 500m day / 200m night |
| S6 | Launch by 2 persons | O-11 (9.0) | 2 persons launch from shore in ≤10 min |
| S7 | Recovery safety | O-44 (9.5) | Recovery by 2 persons, no injury, ≤15 min |
| S8 | Pitch stability at speed | O-28 (9.5) | Stable transit at 6 kts for 10 min (no pitch > 15°) |
| S9 | RCS measurement | O-29 (8.0) | RCS in semi-sub < surface mode (qualitative) |
| S10 | Turnaround time | O-49 (9.5) | Recovery → battery swap → relaunch ≤2h |

### Stage 3: OPEN WATER (SS 3, after Stage 2 PASS)

| Test # | Name | Pass Criteria |
|--------|------|---------------|
| O1 | 24h endurance patrol | Complete mission, auto-RTL on low battery |
| O2 | Biên phòng operator eval | 3 operators × 2 missions each, satisfaction ≥3.5/5 |
| O3 | Target detection (real vessel) | Detect approaching boat at ≥500m in semi-sub mode |
| O4 | SS 3 survivability | Complete mission in SS 3 without damage |
| O5 | Auto-report generation | Mission log → PDF patrol report ≤60s |

### Performance Envelope (Template — fill after Stage 1-2)

| Condition | Depth Hold | Endurance | Comms | Category |
|-----------|-----------|-----------|-------|----------|
| Calm (SS 0-1) | ±50 mm | 12h+ | LoRa 5km | ✅ WORKS WELL |
| Moderate (SS 2) | ±100 mm | 10h | LoRa 3km | ✅ WORKS |
| Rough (SS 3) | ±200 mm | 8h | LoRa 2km + 4G | ⚠️ DEGRADED |
| Storm (SS 4+) | FAIL | — | — | 🔴 NOT OPERATIONAL |
| >6 knots transit | Pitch unstable | — | OK | 🔴 SPEED LIMIT |

---

# PART B: TRUST EVIDENCE PACKAGE (forge-trust)

## Evidence Summary

| Evidence Type | Status | Strength |
|--------------|:------:|:--------:|
| Lab demonstrator video | ⏳ After Stage 1 (04-17) | Strong when available |
| NC valve fail-safe demo | ⏳ After L2 test | **Very Strong** (safety proof) |
| Cost comparison | ✅ Available now | Very Strong ($3-6K vs $500K+) |
| Endurance data | ⏳ After Stage 2 | Strong |
| ACH SHIFT GO assessment | ✅ Done (Session 52) | Strong |
| Competitor analysis | ✅ Done (Session 52) | Strong |

## Audience-Specific Messages

### For Biên Phòng Operator
> *"USV bán ngầm chạy tự động theo waypoint, khó phát hiện, endurance 12 giờ. Mất liên lạc → tự quay về. Pin hết → tự nổi. Anh/chị chỉ cần xem camera và ra lệnh khi cần."*

### For Chỉ Huy Đồn
> *"Giám sát 24/7 vùng biển mà không cần ca nô tuần tra. 1 USV = 1 ca nô + 3 người × 12 giờ. Chi phí $3-6K/chiếc — triển khai 5-10 chiếc cùng lúc giá bằng 1 ca nô."*

### For Bộ Tư Lệnh BĐBP
> *"Sản phẩm nội địa, nội dung VN ≥50% (target 75%). Không phụ thuộc nước ngoài. ArduSub open-source — không bị kiểm soát xuất khẩu. Giá 1/100 so với sản phẩm Israel/Mỹ."*

## Anticipated Concerns

| # | Concern | Response |
|---|---------|----------|
| C-1 | "USV bị sóng lật" | NC ballast valve = auto-surface. Hull self-righting tested Stage 2 |
| C-2 | "Đối phương bắt USV" | Encrypted comms + auto-scuttle option (ballast open → sink) |
| C-3 | "Ai sửa khi hỏng ở đồn xa?" | Modular design, kỹ thuật viên cấp đồn sửa được. Phụ tùng local. |
| C-4 | "ArduSub = phần mềm hobby?" | ArduSub triển khai trên 100K+ phương tiện toàn cầu. BlueROV2 dùng cho quân sự NATO. |
| C-5 | "Camera ban đêm?" | IR camera module (Phase 2 upgrade). Baseline = low-light CMOS. |

## Trust-Building Milestones

| Date | Evidence | Action |
|------|---------|--------|
| **2026-04-17** | Lab demo video (depth hold + auto-RTL) | Share video với Biên phòng PoC |
| 2026-06 | Sheltered water test | **Invite Biên phòng witness** |
| 2026-09 | Open water patrol | **Biên phòng operator drives USV** |
| 2027-Q1 | 30-day deployment at đồn | Sustained trust evidence |

---

*VN-USV-SS-001 Validation + Trust v1.0*
