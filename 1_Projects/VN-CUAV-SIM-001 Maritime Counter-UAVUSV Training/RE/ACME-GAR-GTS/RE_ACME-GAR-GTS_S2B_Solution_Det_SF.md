---
project: VN-CUAV-SIM-001
product: ACME GAR GTS → VN-CUAV-SIM MWI Recoil Subsystem
stage: 2B — Solution-Determining Sub-Function
created: 2026-04-21
---

# SOLUTION-DETERMINING SF ANALYSIS — ACME GAR GTS

## Candidate SFs for Solution-Determining Role

| SF | Why Solution-Determining? | If Changed, What Cascades? | WX Capability |
|----|--------------------------|---------------------------|:------------:|
| **SF-01** Convert E→linear impulse | **THIS IS THE ONE.** Motor type determines: power supply, control electronics, firmware, mechanical interface, thermal management, reliability, cost, IP risk. | Motor→gearbox→linkage→tray→bearings→controller→firmware→power supply = entire recoil subsystem architecture | HIGH (multiple alternatives available) |
| SF-03 Modulate frequency | Depends on SF-01 choice. Electric motor: firmware. Pneumatic: valve. Mechanical: cam speed. | Control architecture only | HIGH |
| SF-08 Resist traverse | Already decided (magnetic particle brake). Independent of SF-01. | Channel A only | HIGH (decided) |
| SF-14 Generate visual | Already decided (Unity 3-screen). Independent of recoil. | Visual subsystem only | HIGH (decided) |

## SELECTED SOLUTION-DETERMINING SF: **SF-01** — Convert Electrical Energy → Linear Impulse

**Rationale:** SF-01 is the architectural pivot point. ACME chose rotary BLDC + mechanical linkage. Haptech chose linear electromagnetic motor. Dvorak/ELI chose pneumatic. WX's choice here determines:

1. **Power architecture** (BLDC: 24-48V, linear motor: 72V, pneumatic: compressor + solenoid valve, masselotte: solenoid 12-24V)
2. **Control complexity** (BLDC: PID position loop, linear: FOC + Hall sensors, pneumatic: on/off valve timing, masselotte: simple trigger)
3. **IP risk** (BLDC + slide tray: ACME patent, linear motor: Haptech patent, pneumatic: patent-free, masselotte: patent-free)
4. **Cost** (BLDC: $500-2000, linear motor: $1000+, pneumatic: $400-600 + compressor, solenoid: $80-120, masselotte: $120-180)
5. **VN manufacturability** (all import motor, but control complexity varies 10×)
6. **Thermal management** (72V linear motor: critical, others: manageable)
7. **Reliability** (electromagnetic: millions of cycles, pneumatic: lower, solenoid: moderate)

**Stage 3 implication:** Morphological matrix for SF-01 must include ≥5 working principles. Other SFs adapt around SF-01's solution choice.

⚠️ **P&B principle:** "Giải pháp cho SF quyết định → cascade toàn bộ thiết kế"
(Galaxy: [[Solution-Determining Subfunction — Không Phải Mọi Function Đều Bằng Nhau]])

## WX Context: SF-01 Already Partially Explored

From VN-CUAV-SIM Recoil Trade Study (5 candidates evaluated):
- WP-A: Solenoid (baseline, $80-120, may not reach 25N)
- WP-B: Pneumatic (fallback, $400-600, highest force)
- WP-D: Voice coil (expensive, $300+, import)
- WP-E: Hybrid solenoid+pneumatic ($300-500, complex)
- **WP-F: Masselotte (★ PoC candidate, $120-180, TRIZ #3 Local Quality)**

**CEO decision from Phase 2:** Channel A = magnetic brake (decided). Channel B (SF-01) = masselotte PoC candidate, with pneumatic as fallback.

**RE insight from ACME:** ACME's rotary motor + slide tray approach is over-engineered for WX's ≥25N target. ACME designs for "full-force" at up to 100N across 9 weapon types. WX needs 25N for 1-2 weapon types. Masselotte or solenoid likely sufficient.

---

## Save to: `RE_ACME-GAR-GTS_S2B_Solution_Det_SF.md` ✅
