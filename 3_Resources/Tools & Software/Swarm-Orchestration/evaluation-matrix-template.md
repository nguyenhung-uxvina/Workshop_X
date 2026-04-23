# VDI 2225 Weighted Evaluation Matrix — BB-01 LOMAH Microphone Selection

**Task:** task-002
**Worker:** worker-02 (analyst)
**Date:** 2026-02-06
**Status:** Complete

---

## 1. Methodology

**Standard:** VDI 2225 (Technisch-wirtschaftliches Konstruieren — Design Engineering Methodics)

**Scoring Scale (0–4):**

| Score | Descriptor | Meaning |
|-------|------------|---------|
| 0 | Unsatisfactory | Does not meet requirement; eliminatory |
| 1 | Just tolerable | Barely acceptable; significant limitations |
| 2 | Adequate | Meets requirement satisfactorily |
| 3 | Good | Exceeds requirement with useful margin |
| 4 | Very good / Ideal | Optimal solution for this criterion |

**Technical Utility Value (TUV):**

```
TUV = Σ(wᵢ × sᵢ) / (4 × Σwᵢ)
```

Where:
- wᵢ = weight of criterion i (percentage)
- sᵢ = score of criterion i (0–4)
- Denominator = maximum achievable score (all criteria scored 4)
- TUV range: 0.00 (worst) to 1.00 (ideal)
- **Threshold:** TUV ≥ 0.60 is the minimum acceptable for concept selection

**Elimination Rule:** Any candidate scoring **0** on criteria C1 (Max SPL) or C2 (Frequency Response) is automatically eliminated regardless of total score, as these are must-have requirements for LOMAH function.

---

## 2. Criteria Definition & Weight Assignment

### Category 1: Acoustic Performance — 35%

> **Rationale for 35%:** The primary function of the microphone in LOMAH is acoustic detection of supersonic shock waves. Failure here means the system cannot perform its mission. This is the highest-weighted category.

| ID | Criterion | Weight | Rationale |
|----|-----------|--------|-----------|
| **C1** | **Max SPL handling** | **12%** | Must handle ≥140 dB SPL without distortion. Higher margin reduces risk of signal clipping from close-range high-caliber rounds. This is the non-negotiable requirement from the BB-01 specification. |
| **C2** | **Frequency response bandwidth** | **13%** | Supersonic bullet N-wave primary energy is 3–7 kHz, but the shock front rise time contains significant energy well above 20 kHz. Higher bandwidth enables sharper TDOA measurement, directly impacting hit-location accuracy (±5 mm target). Worker-01 flagged this as the critical differentiator across candidates (10 kHz to 80 kHz spread). Weighted highest within acoustic performance. |
| **C3** | **Dynamic range** | **10%** | LOMAH must detect rounds from .22 caliber (lower SPL) through 12.7 mm / 120 mm (very high SPL). Wide dynamic range avoids the need for different sensor configurations per caliber. Also affects ability to resolve signal in the presence of range background noise. |

---

### Category 2: Environmental Robustness — 15%

> **Rationale for 15%:** BB-01 LOMAH operates on outdoor firing ranges in tropical climate (Vietnam). Sensors are exposed to heat, humidity, rain, dust, and mechanical shock from nearby impacts. However, the target frame provides some physical protection, so environmental factors are important but not dominant.

| ID | Criterion | Weight | Rationale |
|----|-----------|--------|-----------|
| **C4** | **Operating temperature range** | **8%** | Vietnam climate: typical range 5 °C (highland winter) to 50 °C (direct sun on metal target frame). Extended temp range (−40 °C to +120 °C) provides margin for solar heat soak and cold storage. Weighted higher than IP rating because temperature cycling is the most common failure mode for acoustic sensors in tropical outdoor use. |
| **C5** | **Ingress protection & mechanical robustness** | **7%** | Outdoor range: rain, dust, humidity (>80% RH), and mechanical vibration/shock from bullet impacts on the target frame. Sensors need to survive repeated vibrational impulses and moisture ingress. Hermetic sealing preferred but can be achieved at the enclosure level rather than sensor level. |

---

### Category 3: Signal Chain Integration — 15%

> **Rationale for 15%:** The sensor's electrical interface determines signal conditioning complexity, cable routing, noise immunity, and compatibility with the BB-01 TDOA processing electronics. A well-matched signal chain reduces BOM cost and development time.

| ID | Criterion | Weight | Rationale |
|----|-----------|--------|-----------|
| **C6** | **Signal-to-noise ratio (SNR)** | **7%** | Higher SNR improves TDOA timing precision in the presence of range background noise (wind, adjacent lanes). For ±5 mm accuracy, timing jitter must be minimized. SNR directly affects the reliability of threshold-crossing detection algorithms. |
| **C7** | **Power requirements** | **4%** | LOMAH targets may be powered by battery (portable) or wired (fixed range). Low-voltage, low-current sensors simplify power distribution across 3–4 sensors per target. ICP/CCP sensors requiring 18–30 V constant current add power supply complexity. |
| **C8** | **Output interface compatibility** | **4%** | Analog differential output is preferred for noise immunity on cable runs (sensor to target electronics). Digital output (PDM/I2S) eliminates cable noise but requires on-sensor ADC and clock routing. Single-ended analog is acceptable for short runs (<1 m). Charge output (pC) requires external charge amplifier — added complexity. |

---

### Category 4: Physical Integration — 10%

> **Rationale for 10%:** Sensors mount on or behind the target frame. Space is limited (target frame cross-section), and weight adds to lifter motor load. However, the target is not a miniaturized consumer device — moderate sensor size is acceptable.

| ID | Criterion | Weight | Rationale |
|----|-----------|--------|-----------|
| **C9** | **Package size & target mounting suitability** | **7%** | Sensors must fit within or behind the target frame (typically aluminum channel profile). SMD MEMS sensors mount on a PCB that integrates into the frame. Larger measurement-grade mics require custom brackets and cable routing. Smaller is better but not at the expense of acoustic performance. |
| **C10** | **Weight** | **3%** | Target lifter mechanisms have weight budgets. Each target typically has 3–4 sensors. Difference between MEMS (<0.1 g each) and measurement mics (1–57 g each) is meaningful at the system level (4× sensors + cables + preamps). Lower weight allows the remaining budget for ballistic protection. |

---

### Category 5: Programmatic — 25%

> **Rationale for 25%:** BB-01 is a defense training product intended for multi-target deployment across Vietnamese military ranges. Unit cost, availability, and supply chain reliability directly affect production feasibility, logistics sustainment, and lifecycle cost. This is the second-highest weighted category because a technically perfect but unaffordable or unavailable sensor is useless.

| ID | Criterion | Weight | Rationale |
|----|-----------|--------|-----------|
| **C11** | **Unit cost** | **12%** | Each target requires 3–4 sensors. A 20-target range = 60–80 sensors. At $2,200/unit (GRAS 46BE), sensor cost alone = $132k–$176k — potentially exceeding the entire target system budget. At $4/unit (MEMS), sensor cost = $240–$320. Cost is a decisive factor for production viability. Weighted highest in the programmatic category. |
| **C12** | **Availability & lead time** | **7%** | Long lead times (4–8 weeks quote-based) delay production and complicate field replacement. In-stock COTS components from major distributors (DigiKey, Mouser) enable rapid prototyping and field replacement. Pre-production products (e.g., sensiBel SBM100B) carry schedule risk. |
| **C13** | **Supply chain robustness** | **6%** | Defense products require long-term supply assurance. Single-source components risk obsolescence. Multi-source availability (multiple distributors, second-source parts) and vendor financial stability reduce lifecycle risk. TDK (global conglomerate) > Vesper (startup) > sensiBel (startup, pre-production). |

---

## 3. Weight Summary

| Category | Criteria | Weight Subtotal |
|----------|----------|-----------------|
| 1. Acoustic Performance | C1 (12%) + C2 (13%) + C3 (10%) | **35%** |
| 2. Environmental Robustness | C4 (8%) + C5 (7%) | **15%** |
| 3. Signal Chain Integration | C6 (7%) + C7 (4%) + C8 (4%) | **15%** |
| 4. Physical Integration | C9 (7%) + C10 (3%) | **10%** |
| 5. Programmatic | C11 (12%) + C12 (7%) + C13 (6%) | **25%** |
| **TOTAL** | **13 criteria** | **100%** |

---

## 4. Scoring Guidelines per Criterion

### C1: Max SPL Handling (12%)
| Score | Guideline |
|-------|-----------|
| 0 | < 135 dB — cannot function in LOMAH application |
| 1 | 135–139 dB — marginal, high risk of clipping |
| 2 | 140–149 dB — meets requirement with limited margin |
| 3 | 150–165 dB — good margin for high-caliber rounds |
| 4 | > 165 dB — excellent margin, handles extreme cases |

### C2: Frequency Response Bandwidth (13%)
| Score | Guideline |
|-------|-----------|
| 0 | Upper limit < 5 kHz — cannot capture shock wave |
| 1 | Upper limit 5–10 kHz — captures primary N-wave energy but poor TDOA resolution |
| 2 | Upper limit 10–20 kHz — adequate for basic TDOA |
| 3 | Upper limit 20–50 kHz — good TDOA precision |
| 4 | Upper limit > 50 kHz — excellent, captures shock front detail for ±5 mm accuracy |

### C3: Dynamic Range (10%)
| Score | Guideline |
|-------|-----------|
| 0 | < 60 dB — insufficient for multi-caliber detection |
| 1 | 60–80 dB — limited caliber range |
| 2 | 80–100 dB — adequate for standard military calibers |
| 3 | 100–125 dB — good, covers .22 to 12.7 mm |
| 4 | > 125 dB — excellent, full multi-caliber with margin |

### C4: Operating Temperature Range (8%)
| Score | Guideline |
|-------|-----------|
| 0 | Does not cover 0–50 °C |
| 1 | 0–50 °C only (no margin) |
| 2 | −10 to +70 °C (moderate margin) |
| 3 | −20 to +85 °C or better |
| 4 | −40 to +105 °C or better (full industrial/military) |

### C5: Ingress Protection & Mechanical Robustness (7%)
| Score | Guideline |
|-------|-----------|
| 0 | Open construction, no environmental protection |
| 1 | Basic protection; vulnerable to moisture |
| 2 | Can be environmentally protected at enclosure level; moderate shock tolerance |
| 3 | Inherently robust (sealed, no moving parts); good shock/vibration tolerance |
| 4 | Hermetically sealed; MIL-spec shock/vibration rating; proven field use |

### C6: Signal-to-Noise Ratio (7%)
| Score | Guideline |
|-------|-----------|
| 0 | SNR < 40 dBA or equivalent |
| 1 | SNR 40–55 dBA |
| 2 | SNR 55–65 dBA |
| 3 | SNR 65–80 dBA |
| 4 | SNR > 80 dBA or measurement-grade (inherent noise < 30 dBA) |

### C7: Power Requirements (4%)
| Score | Guideline |
|-------|-----------|
| 0 | Requires specialized / unavailable power supply |
| 1 | Requires 18–30 VDC constant current (ICP/CCP) — dedicated supply needed |
| 2 | Requires charge amplifier (external conditioning) |
| 3 | Runs from 3.3–5 V standard logic supply, moderate current |
| 4 | Runs from 1.5–3.6 V, µA-level current (battery-optimal); or self-generating |

### C8: Output Interface Compatibility (4%)
| Score | Guideline |
|-------|-----------|
| 0 | Incompatible with standard ADC/DAQ chains |
| 1 | Charge output (pC) — requires charge amplifier |
| 2 | Single-ended analog — susceptible to cable noise |
| 3 | Differential analog — good noise rejection |
| 4 | Digital output (PDM/I2S) or differential analog with built-in conditioning |

### C9: Package Size & Target Mounting (7%)
| Score | Guideline |
|-------|-----------|
| 0 | Too large to mount on/in target frame |
| 1 | Requires significant custom mounting (brackets, standoffs) |
| 2 | Can be mounted with minor adaptation |
| 3 | Small, mounts easily on PCB or simple bracket |
| 4 | SMD, directly PCB-mountable, minimal board area |

### C10: Weight (3%)
| Score | Guideline |
|-------|-----------|
| 0 | > 100 g per sensor (excessive for target lifter) |
| 1 | 20–100 g per sensor |
| 2 | 5–20 g per sensor |
| 3 | 1–5 g per sensor |
| 4 | < 1 g per sensor |

### C11: Unit Cost (12%)
| Score | Guideline |
|-------|-----------|
| 0 | > $3,000 per unit — prohibitive for production |
| 1 | $1,000–$3,000 per unit — lab-grade pricing |
| 2 | $100–$1,000 per unit — expensive but feasible for low volume |
| 3 | $10–$100 per unit — good for production |
| 4 | < $10 per unit — excellent for mass deployment |

### C12: Availability & Lead Time (7%)
| Score | Guideline |
|-------|-----------|
| 0 | Not commercially available / pre-production only |
| 1 | Available but long lead time (>8 weeks), quote-based |
| 2 | Available from manufacturer, 4–8 week lead time |
| 3 | In stock at distributors, 1–2 week delivery |
| 4 | In stock at multiple distributors, same-week delivery |

### C13: Supply Chain Robustness (6%)
| Score | Guideline |
|-------|-----------|
| 0 | Single-source startup, no track record |
| 1 | Single-source, small/medium vendor |
| 2 | Single-source, large/stable vendor |
| 3 | Multi-distributor, established vendor; no second source |
| 4 | Multi-distributor, major vendor (TDK, Knowles, PCB, GRAS); second source available |

---

## 5. Blank Scoring Template

*To be completed in task-004 after receiving candidate data (task-001) and system constraints (task-003).*

| Criterion | Wt (%) | PIEZO-1 377C01 | PIEZO-2 46BE | PIEZO-3 2510 | PIEZO-4 378A06 | MEMS-1 VM2020 | MEMS-2 SBM100B | MEMS-3 ICS-40638 |
|-----------|--------|------|------|------|------|------|------|------|
| C1: Max SPL | 12 | | | | | | | |
| C2: Freq. BW | 13 | | | | | | | |
| C3: Dyn. Range | 10 | | | | | | | |
| C4: Temp Range | 8 | | | | | | | |
| C5: Env. Protect | 7 | | | | | | | |
| C6: SNR | 7 | | | | | | | |
| C7: Power Req. | 4 | | | | | | | |
| C8: Output I/F | 4 | | | | | | | |
| C9: Size/Mount | 7 | | | | | | | |
| C10: Weight | 3 | | | | | | | |
| C11: Unit Cost | 12 | | | | | | | |
| C12: Availability | 7 | | | | | | | |
| C13: Supply Chain | 6 | | | | | | | |
| **Weighted Total** | **100** | | | | | | | |
| **TUV** | | | | | | | | |

**TUV Calculation:**
```
TUV = Weighted Total / (4 × 100) = Weighted Total / 400
```

**Decision Thresholds:**
- TUV ≥ 0.80: Strong candidate — proceed to validation
- TUV 0.60–0.79: Acceptable — proceed with risk mitigations
- TUV < 0.60: Reject — does not meet minimum viability

---

## 6. References

- VDI 2225 Blatt 3: [VDI Standards](https://www.vdi.de/en/home/vdi-standards/details/vdi-2225-blatt-3-design-engineering-methodics-engineering-design-at-optimum-cost-valuation-of-costs)
- VDI 2225 Scoring Scale: [ResearchGate](https://www.researchgate.net/figure/Value-scale-for-VDI-guideline-2225-evaluation-technique_tbl1_363345867)
- Supersonic bullet shock wave spectrum: [IEEE Xplore](https://ieeexplore.ieee.org/document/1161921/)
- LOMAH system overview: [Inveris Training](https://www.inveristraining.com/live-fire-training/military/lomah-location-of-miss-and-hit/)
- Bullet acoustic signature frequency: [Maher, IEEE DSP 2006](https://www.montana.edu/rmaher/publications/maher_ieeedsp_0906_257-261.pdf)
