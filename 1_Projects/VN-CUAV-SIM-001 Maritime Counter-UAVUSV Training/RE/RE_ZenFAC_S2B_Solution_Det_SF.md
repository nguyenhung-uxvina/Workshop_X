---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 2B — Solution-Determining Sub-Function
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
---

# RE STAGE 2B-SF: SOLUTION-DETERMINING SUB-FUNCTION

## Candidates

| SF | Why Solution-Determining? | If Changed, What Cascades? | WX Capability |
|:--:|--------------------------|---------------------------|:-------------:|
| SF-01 | Motion platform defines physical envelope | Display, weapon station, safety all adapt to platform | M (2-DOF vs 6-DOF) |
| SF-06 | AI IOS defines training paradigm | Scenario gen, scoring, difficulty, AAR all flow from AI | M (ACH planned) |
| SF-02 | Display defines visual immersion architecture | Render cluster, projector count, room layout adapt | H (Unity 3-screen) |

## Selected: SF-06 — Adapt training difficulty from performance data (AI IOS)

**Rationale (from NLM analysis):**
"If the mechanism that generates and adapts the scenario changes, it cascades changes to almost all other sub-functions: the motion platform must map to new sea states, the rendering must display newly synthesized threats, and the performance evaluation must update scoring baselines."

**Cascade chain:**
```
SF-06 (AI adapts) → SF-14 (threats change) → SF-02 (visual updates)
                   → SF-04 (sea state changes) → SF-01 (motion responds)
                   → SF-10 (scoring recalibrates) → SF-05 (ballistic context)
```

**WX implication:** WX's ACH Layer 1 (lead angle coaching) IS the solution-determining SF for CUAV-SIM. If AI coaching architecture changes, everything downstream changes. Must nail this in v1.0.

⚠️ P&B principle: "Giải pháp cho SF quyết định → cascade toàn bộ thiết kế"
   (Galaxy: [[Solution-Determining SF Law]])
