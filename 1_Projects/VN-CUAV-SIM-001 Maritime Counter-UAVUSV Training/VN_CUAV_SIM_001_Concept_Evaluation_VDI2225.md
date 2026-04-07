---
created: 2026-04-06
updated: 2026-04-06
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: VDI 2225
decision: PA-2 STANDARD — CONFIRMED 2026-04-06
---

# VN-CUAV-SIM-001 — Concept Evaluation (VDI 2225)

**Ngày đánh giá:** 2026-04-06
**Phương pháp:** VDI 2225 weighted scoring
**Kết quả:** PA-2 STANDARD — xác nhận bởi user

---

## Các Phương Án Đã Đánh Giá

| | PA-1: ENTRY | **PA-2: STANDARD ✓** | PA-3: VR COMPACT | PA-4: ELITE |
|---|---|---|---|---|
| Display | 1 màn hình (60°) | **3-screen projection (180°)** | VR headset | Curved LED wall (180°) |
| Ship motion | Visual only | **Visual + seat motion** | VR 6DOF | Seat motion platform |
| Weapon | Mockup + encoder | **Authentic mockup + recoil** | Ergonomic mockup | Full replica + motorized recoil |
| Deployment | Fixed | **Fixed/shore** | Ultra-portable | Container-mobile |
| Mode | Pure virtual | **Virtual + AR-ready** | Virtual + limited AR | Virtual + AR + Live-sim |
| Giá ước tính | ~$25-35K | **~$50-70K** | ~$30-45K | ~$90-130K |

---

## Tiêu Chí & Trọng Số

| # | Tiêu chí | Trọng số |
|---|----------|----------|
| C1 | Hiệu năng huấn luyện | 0.30 |
| C2 | Độ tin cậy | 0.15 |
| C3 | Chi phí toàn đời (LCC) | 0.25 |
| C4 | Khả năng triển khai | 0.10 |
| C5 | Tự chủ công nghệ VN | 0.10 |
| C6 | Thời gian phát triển | 0.05 |
| C7 | Tích hợp IRONMESH | 0.05 |

---

## Kết Quả Điểm Số

| | PA-1 | **PA-2** | PA-3 | PA-4 |
|---|---|---|---|---|
| Tổng điểm | 2.85 | **2.90** | 3.05 | 2.65 |
| Giá TB ($K) | 30 | **60** | 37.5 | 110 |
| Cost-effectiveness | 0.095 | **0.048** | 0.081 | 0.024 |
| Xếp hạng điểm | 3 | **2** | 1 | 4 |

**Lý do chọn PA-2 thay vì PA-3 (điểm cao hơn):**
- PA-2 bền hơn trong môi trường biển (salt, humidity, vibration) — C2
- Weapon handling transfer cao hơn VR (muscle memory, ergonomics thực)
- Sensitivity analysis: PA-2 thắng khi C2 Reliability tăng trọng số → phù hợp điều kiện hải quân
- AR-ready → upgrade path rõ ràng lên PA-4

---

## Đặc Tả PA-2 STANDARD

| Hạng mục | Thông số |
|----------|----------|
| **Display** | 3 màn hình projection, 180° FOV, 1080p-4K |
| **Ship motion** | Visual horizon tilt + seat motion ($5-15K add-on) |
| **Weapon mockup** | 12.7mm DSHK/NSV authentic ergonomics + encoder + recoil solenoid |
| **Targeting** | Reticle overlay, lead computing display, night/thermal mode |
| **Software mode** | Pure virtual (Phase 1) + AR-ready hooks |
| **Compute** | Single GPU workstation (RTX 4090 class) |
| **Scenario** | JSON/XML scenario editor, Instructor Station |
| **Scoring** | Real-time hit/miss + AAR + performance analytics |
| **Price target** | $50-70K per unit |
| **Dev timeline** | 12-15 tháng (Phase 1 deliverable) |

---

## Upgrade Path

```
PA-2 STANDARD (Phase 1) ──► AR Mode (Phase 2) ──► PA-4 ELITE (Phase 3)
   $50-70K                    +$10-20K               +$40-60K upgrade
   12-15 months               +3-4 months             +6-9 months
```

---

## Rủi Ro & Biện Pháp

| Rủi ro | Mức | Biện pháp |
|--------|-----|-----------|
| 3D maritime rendering fidelity | MEDIUM | Unreal Engine 5 + maritime plugins, prototype month 3 |
| Recoil simulator cơ khí | MEDIUM | Adapt BB-01 solenoid driver design |
| Timeline 12-15 tháng | LOW | Modular: PA-1 deliverable tháng 8, full PA-2 tháng 15 |

---

## Next Actions (Phase 2 — Conceptual Design)

- [ ] Xây dựng Requirements List đầy đủ từ Phase 1 documents
- [ ] Morphological matrix cho từng subsystem (SS1–SS5)
- [ ] Prototype ballistic engine (tái sử dụng V-SMASH model)
- [ ] Evaluate Unreal Engine 5 vs Unity cho maritime rendering
- [ ] Thiết kế weapon mockup interface (encoder + recoil driver)
