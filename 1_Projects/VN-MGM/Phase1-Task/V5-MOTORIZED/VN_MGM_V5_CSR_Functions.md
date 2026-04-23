---
created: 2026-04-11
type: csr-functions
block: BB (ICDM supplement)
pipeline: helix-task-clarify v3.1
project: VN-MGM
variant: V5-MOTORIZED
mode: icdm
method: "EQFD — Enriched Quality Function Deployment (Hari & Weiss)"
status: COMPLETE
characteristic_count: 15
group_a_count: 5
group_b_count: 10
feeds_to:
  - Phase 2 helix-concept-generate BC (CSR-weighted evaluation)
  - VN_MGM_V5_ICDM_Evaluation_Criteria.md
---

# CSR Functions — VN-MGM V5-MOTORIZED (EQFD/ICDM)

> **CSR = Customer Satisfaction Rating** (Hari & Weiss, ICDM).
> Each design characteristic has a satisfaction function: Target Value = 100%. Below = decreasing %. Above = capped at 100%.
> **Group A** (≥70% weight) = Pugh SCREENING in Phase 2.
> **Group B** (≥95% weight) = FINAL concept selection in Phase 2.

---

## 1. WTP Classification of V5 Requirements

### WTP Categories (from EQFD)

| Category | Definition | V5 Examples | Budget Share |
|----------|-----------|-------------|:------------:|
| **Essential** | Primary reasons customer pays. MUST be met. | Motor slew ≥60°/s, fail-safe manual, recoil survival, STANAG interface | 70% |
| **Beneficial** | Secondary needs — customer pays small premium. | Position data output, UPS backup, encoder precision ±0.5° | 25% |
| **Luxurious** | Nice-to-have — customer will NOT pay extra. | OLED display, wireless joystick backup, backlash monitoring | 5% |

### WTP Tags on Top Requirements

| Req ID | Requirement | WTP | Rationale |
|--------|------------|:---:|-----------|
| K-03 | Az slew ≥60°/s | **E** | Primary reason for V5 over V1 |
| K-04 | El slew ≥30°/s | **E** | Primary reason |
| SF-01 | Auto-fallback ≤1s | **E** | Weapon never dies — non-negotiable |
| SF-04 | E-stop ≤50ms | **E** | Safety — non-negotiable |
| F-01 | Recoil ≥50 kN | **E** | Physics — weapon fires at this force |
| K-09 | Position accuracy ±0.5° | **B** | Improves accuracy but V1 works without it |
| S-04 | Data port RS485+CAN | **B** | Platform enabler — customer pays small premium for future upgrade path |
| E-05 | UPS ≥10 min | **B** | Backup power — beneficial but ship has generators |
| F-06 | Recoil recovery ≤0.5s | **B** | Improves burst accuracy — beneficial but not survival |
| CO-01 | BOM ≤$10K | **E** | Margin — business viability |
| TR-01 | Weight ≤100 kg | **E** | Operations — 2-person carry |
| OP-05 | Salt fog ≥500h (motor) | **E** | Environment — tropical marine |
| IX-02 | Data port protocol defined | **B** | Platform future-proofing |
| PC-01 | Motor commonality V5↔N12 | **B** | Portfolio cost synergy |
| FD-06 | Data port write protection | **B** | Security — beneficial for defense context |

---

## 2. EQFD Characteristics — Top 15 (Filtered from 110 Requirements)

### EQFD Filter: 15 most critical system-level characteristics

| # | Characteristic | Mapped DP | Weight | Linked Req | WTP | Target Value | Best Competitor |
|---|---------------|-----------|:------:|-----------|:---:|-------------|:---------------:|
| C1 | **Motor traverse speed** | DP1 | 17.5% | K-03 | E | ≥60°/s (target 90°/s) | SARP: 90°/s |
| C2 | **First hit accuracy** | DP7 | 14.9% | K-09, F-06 | E | ±0.5°, recovery ≤0.5s | CROWS: ±0.3° |
| C3 | **Corrosion endurance** | DP5 | 14.0% | OP-05, M-01 | E | ≥500h salt fog (motor) | V1: 1000h (structure) |
| C4 | **Elevation precision** | DP3 | 10.8% | K-04, K-09 | E | ≥30°/s, ±0.5° | SARP: 45°/s |
| C5 | **Night capability** | DP4 | 10.4% | S-04 (data port) | B | Data port enables future camera | None (V5 has no optics) |
| C6 | **Maintenance burden** | DP6 | 10.0% | MA-01, MA-04 | B | MTBF ≥2000h, motor service ≥2000h | V1: zero motor (no motor) |
| C7 | **Condition observability** | DP10 | 8.7% | IM-01 (data log) | B | Field data downloadable | None (V1 has zero data) |
| C8 | **Manual fallback** | — | WTP-E | SF-01, SF-02 | E | Auto ≤1s, manual ≤5s | None (no competitor has this) |
| C9 | **Traverse effort** | DP2 | 5.8% | ER-01 | E | Joystick ≤5N | V1: 40 N·m manual |
| C10 | **Unit cost** | — | WTP-E | CO-01 | E | BOM ≤$10K, sell $10-18K | Import RCWS: $50-200K |
| C11 | **Weight** | — | WTP-E | TR-01 | E | ≤100 kg | V1: 75 kg |
| C12 | **Recoil shock protection** | — | WTP-E | F-07 | E | ≥40% attenuation at motor | None (new for V5) |
| C13 | **Platform extensibility** | — | WTP-B | IX-01 to IX-07 | B | Modular SW, data port, power headroom | None (V5 unique) |
| C14 | **Portfolio commonality** | — | WTP-B | PC-01 to PC-06 | B | Same motor/clutch/controller as N12 | N/A (WX internal) |
| C15 | **Installation time** | DP8 | 4.7% | — | E | ≤20 min, 2 persons | V1: ≤15 min |

---

## 3. CSR Functions — Satisfaction Graphs

### CSR Function Type Legend:
- **LINEAR:** Satisfaction scales linearly from 0% at worst to 100% at target.
- **STEP:** Pass/fail — either 100% (meets) or 0% (fails).
- **EXPONENTIAL:** Satisfaction rises slowly then sharply near target (critical threshold).
- **ASYMPTOTIC:** Satisfaction rises fast then flattens (diminishing returns).

### CSR Table

| # | Characteristic | CSR Type | 0% (Fail) | 50% | 100% (Target) | Cap | Notes |
|---|---------------|:--------:|:---------:|:---:|:--------------:|:---:|-------|
| C1 | Motor traverse speed | **LINEAR** | ≤30°/s (=V1 manual) | 60°/s | 90°/s | 100% | Below 30°/s = no improvement over V1 → zero satisfaction |
| C2 | First hit accuracy | **EXPONENTIAL** | ±5 mrad | ±2 mrad | ±0.5° (±8.7 mrad) | 100% | Accuracy near threshold has high marginal value |
| C3 | Corrosion endurance | **STEP** | <200h | — | ≥500h | 100% | Either survives tropical marine or doesn't |
| C4 | Elevation speed | **LINEAR** | ≤15°/s (=V1) | 30°/s | 45°/s | 100% | Below 15°/s = no improvement |
| C5 | Night capability | **STEP** | No data port | — | Data port present + protocol defined | 100% | Binary: port exists or not. Camera is future add-on. |
| C6 | Maintenance burden | **ASYMPTOTIC** | MTBF <500h | 1500h | ≥2000h | 100% | After 2000h, marginal value drops |
| C7 | Condition observability | **STEP** | No data logging | — | Data downloadable via port | 100% | Binary: logging works or not |
| C8 | Manual fallback | **EXPONENTIAL** | >10s or no fallback | 3s | ≤1s auto | 100% | Critical safety — exponential near 1s threshold |
| C9 | Traverse effort | **ASYMPTOTIC** | ≥40 N·m (=V1 manual) | 5 N | ≤0.5 N (joystick) | 100% | V5 joystick = near-zero effort. Huge satisfaction jump from V1 |
| C10 | Unit cost | **LINEAR** | >$20K | $14K | ≤$10K BOM | 100% | Cost sensitivity is linear in this range |
| C11 | Weight | **ASYMPTOTIC** | >120 kg (3-person) | 100 kg | ≤95 kg | 100% | After 2-person threshold (100 kg), marginal returns |
| C12 | Recoil protection | **STEP** | <20% attenuation | — | ≥40% | 100% | Motor either survives or breaks — threshold behavior |
| C13 | Platform extensibility | **LINEAR** | 0/7 IX requirements met | 4/7 | 7/7 IX-01 to IX-07 | 100% | Each IX requirement adds incremental platform value |
| C14 | Portfolio commonality | **LINEAR** | 0/6 PC requirements met | 3/6 | 6/6 PC-01 to PC-06 | 100% | Each shared component reduces portfolio cost |
| C15 | Installation time | **ASYMPTOTIC** | >60 min | 30 min | ≤20 min | 100% | After "acceptable" threshold, diminishing returns |

---

## 4. Group A/B Split

### Group A — Pugh Screening (≥70% satisfaction weight)

| # | Characteristic | Weight | Cumulative | WTP |
|---|---------------|:------:|:----------:|:---:|
| C1 | Motor traverse speed | 17.5% | 17.5% | E |
| C2 | First hit accuracy | 14.9% | 32.4% | E |
| C3 | Corrosion endurance | 14.0% | 46.4% | E |
| C4 | Elevation precision | 10.8% | 57.2% | E |
| C8 | Manual fallback | 8.0%* | 65.2% | E |
| C10 | Unit cost | 6.0%* | **71.2%** | E |

*C8 and C10 weights estimated from WTP-Essential priority (not in original HOQ — added for V5).

**Group A = 6 criteria, 71.2% coverage.** All Essential WTP. Used for initial Pugh screening in Phase 2 BC.

### Group B — Final Selection (≥95% satisfaction weight)

Group B = Group A + additional criteria:

| # | Characteristic | Weight | Cumulative | WTP |
|---|---------------|:------:|:----------:|:---:|
| C5 | Night capability | 10.4% | 81.6% | B |
| C6 | Maintenance burden | 10.0% | 91.6% | B |
| C9 | Traverse effort | 5.8% | 97.4% | E |

**Group B = 9 criteria, 97.4% coverage.** Used for final CSR-weighted concept selection + DQM calculation in Phase 2 BC/BE.

---

## 5. DQM Framework (Design Quality Measurement)

**DQM = Σ (weight_i × CSR_i)** across Group B criteria.

For each concept variant in Phase 2:
1. Estimate performance on each characteristic.
2. Look up CSR function → get satisfaction %.
3. Multiply by weight.
4. Sum = DQM score (0-100%).

**DQM ≥ 70% = viable concept.** DQM < 50% = eliminate.

Concept with highest DQM = recommended (but CEO selects — Core decision).

---

*CSR Functions | EQFD/ICDM | 15 characteristics, Group A (6, 71.2%), Group B (9, 97.4%) | 2026-04-11*
