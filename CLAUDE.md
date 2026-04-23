# CLAUDE.md — IPARAG Vault State

> Workshop X vault. Agentic rules in Global CLAUDE.md (KN-Stack).
> Cập nhật lần cuối: 2026-04-23 | Review tiếp theo: 2026-04-30

---

## Cấu Trúc Thư Mục

```
Workshop_X/
├── Home.md                    ← Dashboard chính
├── CLAUDE.md                  ← File này (vault state only)
├── 0_Inbox/                   ← Tiếp nhận mọi thứ (Inbox Zero achieved)
├── 1_Projects/                ← 8 active + 2 on hold | 79 variants | $15.7M/5yr realistic [L3-L4]
│   │                           PRODUCTION HISTORY: 1,064 HW units + 8 sim systems shipped
│   │
│   │  ── TIER 1: CASH COWS (scale + upsell) ──
│   ├── Towed Target (30mm+12.7mm)/          **550 shipped** | Tier 1 Cash Cow | TRL 9
│   ├── VN-MGM/                              **300 shipped** | Tier 1 Cash Cow | TRL 9 | 12 variants
│   ├── TARGET-DRONE-001/                    **200 shipped** (simple) | Tier 1 Cash Cow | TRL 9 | 11 variants
│   ├── Naval Sim (Vega Prime)/              **8 systems** (6 toàn tàu + 2 AK630/176) | Tier 1 Cash Cow | TRL 9
│   │
│   │  ── TIER 1: ACTIVE DEVELOPMENT ──
│   ├── VN-CUAV-SIM-001/                **Tier 1 Upgrade** (Vega→Unity, Phase 2 DONE G2 3.71, Phase 3 starting, LITE-PA2 C4 selected, gate 2026-05-07)
│   ├── VN-XUONG-UUV/                   **Tier 1 Prototype** (1 đang chế tạo, Phase 2, 9 variants)
│   │
│   │  ── TIER 2: SCALE + UPGRADE ──
│   ├── BB-01_LOMAH/                     **3 shipped** | Tier 2 Scale (Phase 1, 9 variants)
│   ├── VN-AST-MSL-001 Towed Target/    **2 bộ deployed** | Tier 2 Upgrade (Phase 2 done, TRÒN, 10 variants)
│   ├── VN-USV-SS-001/                   Tier 2 New (Phase 0, 10 variants, gate 2026-05-09)
│   │
│   │  ── TIER 3: CONCEPT ──
│   ├── Practice-ICDM/                   Tier 3 Learning (6 weeks, 14h, anchor CUAV-SIM, Wk1 DONE, Wk2 starting)
│   ├── VN-AICC/                         Tier 3 Concept (Phase 3 paused, 9 variants, CM4 blocker)
│   ├── [ON HOLD] VN-12.7MM-SIM/        Absorbed by VN-CUAV-SIM MWI
│   └── [ON HOLD] ACH-Thesis-Publication/ Bandwidth reallocation
├── 2_Areas/                   ← 4 Areas (BRIDGE x FORGE x HELIX = Compound Law)
│   ├── BRIDGE — Operations/           (Finance, Team, Legal, Viettel, Defense Ecosystem)
│   ├── FORGE — Product Strategy/      (ACH Principle, Portfolio, Tech Roadmap, Market Intel, IP)
│   ├── HELIX — Design Execution/      (Pahl-Beitz, AI, Physical-Validation/Monthly-Log, V-SMASH)
│   └── CEO-Self/                      (Skill Stack, Learning, Health, Network, CC V2)
├── 3_Resources/               ← Tài liệu tham khảo (dùng, không chỉ lưu)
├── 4_Archives/                ← 13+ archived projects
└── 5_Galaxy/                  ← Zettelkasten: 160 permanent notes, CẤU TRÚC PHẲNG
```

---

## Galaxy State (160 notes, 9 clusters)

**Hub notes** (ưu tiên link đến khi tạo note mới):
- `Phán đoán không thể uỷ thác cho AI` (12+ links) — judgment core
- `Physical-World Interface` (10+ links) — validation anchor
- `Shifting the Burden Archetype` (8+ links) — systems thinking core
- `Nguyên Tắc Atomic Note` (8 links) — KM foundation

**9 Topic Clusters:**

| Cluster | Chủ đề | Notes |
|---------|--------|-------|
| A | KM Fundamentals | Nguyên Tắc Atomic Note, Cấu trúc phẳng, Forced Link Rule, Temporal Lifecycle, Taste |
| B | Network Effects | Activation Threshold, Serendipity, Valley of Despair |
| C | Judgment & Agency | Phán đoán không thể uỷ thác, Skin in the Game, Paradigm Law, Physical-World Interface, ACH Boundary Rule, Training Value Index |
| D | AI Failure Modes | AI Dependency Spiral (R3), Context Drift Loop (R4), Context vs Capability, dJ/dt > dD/dt, Edge First, Training Scars |
| E | Systems Archetypes | Shifting the Burden, Nested Shifting the Burden, Musk Sequence, Tool Overload Trap |
| F | Knowledge Lifecycle | Vault = Graveyard, Analyst Trap, Muscle Memory Law |
| G | Pahl-Beitz Technical | PZT vs MEMS, Charge Amplifier, VDI 2225 Sensitivity, LoRa 433MHz, Contact Piezo LOMAH, Slew Rate, L3 Pneumatic, ESC Tension Rule, Backing Plate Rule, Hybrid Mooring FEM Trap, Nylon Derating Cascade, Friction Coefficient Trap, CTE Mismatch Rule, V-Model Macro-Micro, Concern Logic, Three Strands, MBSE-CAx Gap, Siloed Engineering Trap, CSR Linear Trap, CSR Subjectivity Trap |
| H | Physical Design | Foam-Filled HDPE, 6-Fold Symmetry, Trihedral Corner Reflector, RCS Scaling Law, Reliability Trumps Precision, Through-Hull Compression, GM/B Ratio, Mooring Weight Trap, UHMWPE Chafe Pad, VN Metocean Design Envelope, Compression Tube Protocol |
| I | AI Agent Architecture | HOK Law, Muscle Memory Law, Tool Overload Trap |

---

## Product Support (8 product lines, 79 variants, $15.7M/5yr realistic [L3-L4])

**PRODUCTION HISTORY: 1,064 HW units + 8 simulator systems shipped. $3-6M historical revenue.**

**Design paradigms per product line:**
| Product Line | Shipped | Paradigm | Lead Product |
|---|---|---|---|
| Towed Target | **550** | Target Generation (SIGNATURE) | 30mm + 12.7mm (production mature) |
| VN-MGM | **300** | Heavy Pointing (FORCE) | V1-NAVAL-12.7 (production mature) |
| Target UAV / TARGET-DRONE | **200** | Airspace Detectability (SIGNATURE) | Simple (mature) → V4-FULL (upgrade) |
| Naval Sim (Vega Prime) | **8 sys** | Experience Simulation | 6 toàn tàu + 2 AK630/176 |
| VN-CUAV-SIM | 0 (new engine) | Human Motor Skill Training (UPGRADE from Vega→Unity) | LITE PA-2 (gate 2026-05-07) |
| BB-01 LOMAH | **3** | Impact Event Detection (ACOUSTIC) | STANDARD (scale 3→50) |
| VN-AST-MSL-001 | **2 bộ** | Sea Surface Target (SIGNATURE) | TRÒN = premium upgrade |
| VN-XUONG-UUV | 1 building | Marine Heavy-Object Transfer | V4-LARS (Phase 2) |
| VN-USV-SS-001 | 0 | Low-Observable Maritime Autonomy (STEALTH) | V1-PATROL (gate 2026-05-09) |

**BB-01 hard constraints**: Piezo CONTACT sensors (NOT MEMS), miss/hit detection ONLY
**BB-01 signal chain**: Piezo → Charge Amp (Q→V) → Bandpass → Gain → Clamp → ADC
**BB-01 op-amps**: LM358, TL072 (Vietnam market)

**Sim engine:** Naval Sim = **Vega Prime** (Presagis, licensed). VN-CUAV-SIM = **Unity** (migration, owned IP). 40-50% know-how reuse (ballistics, scoring, weapon kinematics). 3D models + terrain = rebuild.

**IRONMESH** = shared platform governance artifact (not a project). Located in `2_Areas/FORGE/IRONMESH/`. Product-First approach — platform code extracted FROM working products, not built separately. 7 modules tracked, 0 extraction triggers fired. Quarterly review.

**MAINT-KIT opportunity:** 1,064 installed units × $300/yr = **$320K/yr recurring** with near-zero NRE. Highest-ROI action across entire portfolio.

**Cross-product ecosystem (closed loop):**
```
CUAV-SIM (train) → TARGET-DRONE + VN-AST (test) → BB-01 (measure) → HYBRID-BRIDGE (correlate) → VN-AICC (analyze) → back to CUAV-SIM (improve)
```

**Strategic assessment:** See `2_Areas/FORGE/WX_Portfolio_Strategic_Assessment_2026-04.md`

---

## Survival Metrics

| Metric | Target | Current |
|--------|--------|---------|
| **dP/dt** | > 0, tăng | Check Physical-Validation-Log |
| dJ/dt > dD/dt | Luôn dương | — |
| AI Dependency Ratio | < 40% | — |
| Galaxy growth | ≥ 3-5 notes/tuần | 160 total |
| Link density | ≥ 3 links/note | — |
| Physical gate < 30 days | ≥ 1 project | VN-CUAV-SIM (2026-05-07) |
| **Units shipped** | 1,200 by Q4 2026 | 1,064 + 8 |
| **Portfolio depth** | 79 variants | $15.7M/5yr |
| **Recurring revenue** | $320K/yr | MAINT-KIT pending |
| **Ecosystem closure** | 8/8 | 6/8 |

---

*Review mỗi tuần (N trong THỊNH). Agentic rules: Global CLAUDE.md + KN-Stack.*
