---
created: 2026-04-10
type: operational-analysis
version: v1.0
project: VN-MGM
variant: V5-MOTORIZED vs V1-MANUAL
status: CEO-validated
evidence: "[L2-CEO] — confirmed by CEO based on field feedback from trắc thủ"
---

# Phân Tích Thao Tác Trắc Thủ — V1-MANUAL vs V5-MOTORIZED

> CEO validated 2026-04-10: "có đúng" — analysis matches field feedback.

## Kịch Bản: FPV Drone 100 km/h Tiếp Cận Tàu Từ 2km

### Angular Rate vs Distance (Physics)

| Khoảng cách | Angular rate (100 km/h) | V1 (30°/s max) | V5 (90°/s max) |
|---|---|---|---|
| 2,000m | 1.6°/s | ✅ | ✅ |
| 1,000m | 3.2°/s | ✅ | ✅ |
| 500m | 6.4°/s | ✅ (gắng sức) | ✅ |
| 300m | 10.6°/s | ⚠️ Cận giới hạn | ✅ |
| 200m | 15.9°/s | 🔴 KHÔNG THEO KỊP | ✅ |
| 100m | 31.8°/s | 🔴 BẤT KHẢ THI | ⚠️ Cận giới hạn |

**V1 mất mục tiêu ở ≤300m. V5 bám đến ~100m.**

### Engagement Timeline

| Phase | V1-MANUAL | V5-MOTORIZED |
|---|---|---|
| DETECT (quay về hướng) | 5-9s | 2-3s |
| TRACK (bám mục tiêu) | 8-15s | 5-8s |
| AIM (ngắm chính xác) | 3-5s | 2-3s |
| FIRE (khai hỏa) | 3-5s | 3-5s |
| TRANSITION (chuyển mục tiêu) | 7-10s | 2-4s |
| **TOTAL / target** | **26-44s** | **14-23s** |

### Performance Summary

| Metric | V1 | V5 | Delta |
|---|---|---|---|
| Time / target | 26-44s | 14-23s | **-43%** |
| Effective zone | 300-2000m | 100-2000m | **+200m** |
| Accuracy | ±2-5 mrad | ±0.5-2 mrad | **+2-3×** |
| Endurance | 30-60 min | 2-4 hours | **+3-5×** |
| Swarm (3 FPV) | 1.25/3 kill | 2.1/3 kill | **+68%** |
| Manning | Rotate 30-60 min | Rotate 2-4 hours | **-2-4×** |

### Swarm Attack Scenario (3 FPV, 30s Apart)

| Target | V1 Kill Probability | V5 Kill Probability |
|---|---|---|
| FPV #1 | 60% | 75% |
| FPV #2 | 40% (mệt) | 70% (không mệt) |
| FPV #3 | 25% (rất mệt) | 65% (hơi mệt mắt) |
| **Expected kills** | **1.25/3** | **2.1/3** |

### Key Insight

V5 biến trắc thủ từ "người vận cơ" → "người ra quyết định." Thay vì sức cơ bắp quay súng → tập trung 100% phát hiện, nhận diện, quyết định bắn.

Với C-UAV/FPV threat, V5 không phải "nice to have" — là **yêu cầu sinh tồn.** V1 manual KHÔNG THEO KỊP FPV ở cự ly ≤300m.
