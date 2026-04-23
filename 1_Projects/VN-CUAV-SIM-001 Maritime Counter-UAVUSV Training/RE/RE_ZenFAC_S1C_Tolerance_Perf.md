---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 1C — Tolerance & Performance (OSINT)
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 1C: TOLERANCE & PERFORMANCE — Zen FAC Simulator

## Critical Performance Parameters

| Parameter | Zen FAC (inferred) | WX LITE Target | Gap | Conf. |
|-----------|-------------------|---------------|:---:|:-----:|
| Visual latency (render→display) | ≤20 ms | ≤33 ms (30 Hz) | WX acceptable | M |
| Motion latency (command→movement) | ≤50 ms (6-DOF servo) | ≤100 ms (2-DOF) | WX acceptable for gunnery | M |
| Weapon encoder resolution | ≤0.05° (servo-driven) | ±0.1° (WX spec R-023) | WX acceptable | M |
| Recoil force | 50-150 N (electromechanical) | ≥25N (target), 8N (current solenoid) | **GAP — WX 2-6× lower** | M |
| Recoil cycle rate | 600-900 RPM equivalent | Matches RPM via solenoid pulse timing | WX achievable | M |
| FOV | 360° (cylindrical) | 180° (3-screen) | Design choice, not gap | H |
| Resolution (ppd) | ~15-25 ppd (HD × 6-8 over 360°) | ~30 ppd (FHD × 3 over 180°) | **WX higher ppd** | M |
| Motion DOF | 6 (roll, pitch, heave, surge, sway, yaw) | 2 (roll, pitch) | Design choice | H |
| Target detection range | 1-5 km (EO/IR) | 0.5-3 km (visual only) | Different scope | M |
| Scenario complexity | Multi-threat (surface+air+sub) | C-UAV + C-USV only | Design choice (niche) | H |

## Performance Insight

**Only genuine performance gap: RECOIL FORCE.** Zen 50-150N electromechanical vs WX 8N solenoid (target 25N). SS1 PoC (2026-05-07) is the critical test. All other differences are deliberate scope decisions, not gaps.

**WX advantage: higher pixels-per-degree** (~30 ppd vs Zen ~15-25 ppd) — fewer projectors covering narrower FOV = denser pixel coverage = better target detection at range.
