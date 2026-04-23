---
project: VN-CUAV-SIM-001
product: ACME GAR GTS → VN-CUAV-SIM MWI Recoil Subsystem
stage: 2A — TVDT (Target Values Decision Table)
created: 2026-04-21
---

# TARGET VALUES DECISION TABLE — Recoil Subsystem (from ACME GAR RE)

**Purpose:** Feeds VDI 2225 evaluation criteria in Stage 3C.

| Rank | Req ID | Parameter | Unit | ACME Original | VN Target (WX) | Tolerance | Weight % | Rationale |
|------|--------|-----------|------|:------------:|:--------------:|-----------|:--------:|-----------|
| 1 | R-011/F-01 | Peak recoil force | N | 50-100 | **≥25** | +∞, -0 | 20 | Galaxy: 70% threshold, L3 fidelity |
| 2 | R-048 | Firing rate | RPM | 750-3000 | **600-900** | ±5% | 15 | 12.7mm DShK/NSV only (Phase 1) |
| 3 | R-030 | Trigger→recoil latency | ms | <10 | **<20** | -0, +5 | 12 | Perception threshold, not exact |
| 4 | R-013 | Mount resistance torque | Nm | 5-20 | **≥10** | ±2 | 10 | Channel A, magnetic brake decided |
| 5 | LITE-01 | Weapon swap time | min | ~5 | **<5** | -0, +2 | 8 | NFC auto-detect = WX innovation |
| 6 | R-016 | Input power | V/A | 120/15 | **220/10** | VN grid | 5 | PSU adaptation |
| 7 | R-015 | Weight accuracy | % | ±10 | **±15** | Relaxed | 5 | TVI: weight feel, not exact mass |
| 8 | R-042 | CG accuracy | % | ±10 | **±15** | Relaxed | 5 | TVI: balance feel, not exact CG |
| 9 | R-043 | Rate accuracy | % | ±5 | **±5** | Same | 5 | SW-controlled, easy to achieve |
| 10 | R-001 | Recoil stroke | mm | 7.6 | **TBD** | Design param | 5 | Depends on mechanism |
| 11 | SC-4 | Unit price | USD | 50-150K | **≤70K** | Hard cap | 5 | Sacred Constraint |
| 12 | R-031/S-07 | Hit detection | % | N/S | **≥95** | -0, +5 | 5 | WX requirement |

**TVDT Summary:** WX targets = ACME -30% force, -70% rate range, +100% latency margin, -50% cost. Enabled by Two-Channel Law + ACH (AI coaching fills L3→L5 gap).
