# VN-12.7MM-SIM-021: GALAXY REFERENCE MAP
## Phase 3: Embodiment Design — Knowledge Traceability

**Document**: VN-12.7MM-SIM-021-GRM | **Version**: 1.0 | **Date**: 2026-03-08
**Project Code**: VN-12.7MM-SIM-001
**Purpose**: Map Galaxy permanent notes to design decisions, ensuring institutional knowledge compounds across projects.

---

# 1. TRAINING FIDELITY (Core Design Justification)

These Galaxy notes justify the L3 pneumatic recoil architecture:

| Galaxy Note | Key Insight | Application |
|-------------|-------------|-------------|
| [[Recoil Fidelity Threshold — 70% Lực Đủ Cho Training Transfer]] | 70% recoil force = 80% training value | Validates magnetic brake as sufficient (no need for full pneumatic recoil) |
| [[L3 Pneumatic — 80 20 Rule Của Huấn Luyện Bắn]] | L3 delivers 80% value at 20% of L5 cost | Cost-effectiveness argument for procurement |
| [[Training Value Index — Ultra-Realism Không Bằng Better Learning]] | Fidelity in critical channels > visual ultra-realism | Budget allocation: recoil > visual fidelity |
| [[Training Scars — Luyện Tập Sai Tệ Hơn Không Luyện]] | L0-L2 creates bad habits; L3 is safety minimum | L3 is REQUIREMENT, not feature |

**Decision supported**: V2 Standard Trainer (76.3% VDI 2225) — recoil through magnetic brake, not just screen-based.

---

# 2. ACH BOUNDARY (AI Compensation Strategy)

| Galaxy Note | Key Insight | Application |
|-------------|-------------|-------------|
| [[ACH Boundary Rule — Information vs Physical Forces]] | AI compensates bits, not newtons | Recoil MUST be hardware; AI coaching compensates visual/scoring |
| [[Computational Photography Analogy — ACH Là Night Mode Cho Hardware]] | Cheap hardware + good AI = expensive system outcome | I-08 ACH variant storytelling for procurement |
| [[Edge First — Thiết Kế Cho Offline Trước Cloud Sau]] | Inference must run locally at training range | CORTEX engine: Jetson Orin Nano, ONNX format, <50ms latency |

**Decision supported**: I-08 (HONG HAI MASTER) variant architecture — ACH for scoring/coaching, NOT for recoil.

---

# 3. SYSTEMS THINKING & METHODOLOGY

| Galaxy Note | Key Insight | Application |
|-------------|-------------|-------------|
| [[VDI 2225 — Sensitivity Analysis Kiểm Tra Robustness]] | Concept must survive ±20% weight shifts | 012_CE v2.0: V2 robust across 3 scenarios ✓ |
| [[Design Space Collapse — Khi Chỉ Còn Một Concept]] | When physics eliminates alternatives, shift eval to sub-system | Recoil: magnetic brake is only viable at cost target → evaluate sub-components |
| [[Musk Sequence — Serial Development Cho Solo Engineer]] | 1 engineer = serial development | VN-12.7MM-SIM is Tier 2, after BB-01 (Tier 1) |
| [[Interface Ownership — Đẩy Function Qua Biên Giới Hệ Thống]] | Push function across boundary to collapse complexity | Magazine management: trainer task, not simulator scope |
| [[Shifting the Burden Archetype]] | Buying COTS ≠ building design capability | Custom pneumatic/brake design builds judgment |
| [[Flexibility Là Output, Không Phải Input]] | Rigid phases → flexible execution | Phase 2 locked concept → Phase 3 free to optimize sub-systems |

---

# 4. JUDGMENT & DELEGATION

| Galaxy Note | Key Insight | Application |
|-------------|-------------|-------------|
| [[Phán đoán không thể uỷ thác cho AI]] | AI executes methodology, not judgment | Brake sizing, fidelity threshold = CEO Core decisions |
| [[Judgment Primacy — Nguyên Tắc Không Thể Chuyển Giao]] | Instructor 30-year recoil judgment is asset | FLAG-TAB-01/TAC-01: SME interview critical path |
| [[dJ dt lớn hơn dD dt — Điều Kiện Sống Còn]] | Manual prototyping before AI automation | 10 manual brake tests → then AI-driven iteration |
| [[Context vs Capability — Sự Khác Biệt]] | Good CLAUDE.md ≠ AI design capability | Hands-on brake prototype required |

---

# 5. TECHNICAL DESIGN (Signal & Detection)

| Galaxy Note | Key Insight | Application |
|-------------|-------------|-------------|
| [[Slew Rate — Thông Số Ẩn Quyết Định Chất Lượng Tín Hiệu]] | Slew rate > GBW for fast impulses | Hit detection signal chain: TL072 (13 V/µs), not LM358 |
| [[Reliability Trumps Precision — Bài Học Từ Bia Điện Tử Thương Mại]] | Zero false negatives > high precision | Hit detection: reliability first, threshold energy-based |
| [[Contact Piezo LOMAH — Lấp Khoảng Trống Dưới Âm Tốc]] | Contact sensing works at all velocities | Cross-reference to BB-01 signal chain knowledge |

---

# 6. KNOWLEDGE MANAGEMENT (Process)

| Galaxy Note | Key Insight | Application |
|-------------|-------------|-------------|
| [[Muscle Memory Law — Skill Compounds, Tool Accumulates]] | Design procedures > tools | Invest in brake design SOP, not more CAD tools |
| [[HOK Law — Tay Não Ký Ức Của Agent]] | Hands × Orchestrator × Knowledge = multiplicative | Missing SKILL.md for brake design → zero output |
| [[Tool Overload Trap — Khi Kết Nối Không Bằng Sử Dụng]] | No tool without SKILL.md | Gate rule: DR-2026-03-08-01 |

---

# 7. CROSS-REFERENCE MATRIX

| Phase 3 Document | Most Relevant Galaxy Notes |
|------------------|---------------------------|
| 014 Magnetic Brake Test Plan | Recoil Fidelity Threshold, L3 Pneumatic, dJ/dt > dD/dt |
| 015 System Architecture v2.0 | ACH Boundary Rule, Edge First, Interface Ownership |
| 016 Interface Control Document | Interface Ownership, Design Space Collapse |
| 017 Preliminary BOM | Musk Sequence, Shifting the Burden |
| 018 Power Budget | (no direct Galaxy link) |
| 019 DfX Review | Reliability Trumps Precision, Slew Rate, Training Scars |
| 020 Risk Register | Training Scars, Context vs Capability, Shifting the Burden |

---

# 8. DOCUMENT CONTROL

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 2026-03-08 | AI (Offload) | Initial release — 25 Galaxy notes mapped to 6 domains |

**COD Classification**: O (Offload) — CEO review recommended for training fidelity decisions (Section 1).
