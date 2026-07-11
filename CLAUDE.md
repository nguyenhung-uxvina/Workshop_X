# CLAUDE.md — IPARAG Vault State

> Workshop X vault. Agentic rules in Global CLAUDE.md (KN-Stack).
> Cập nhật lần cuối: 2026-07-10 (Delete Pass v2 — barbell) | Review tiếp theo: 2026-07-24 (AICC clock) + 2026-08-10 (BB-01 clock)

---

## Cấu Trúc Thư Mục

```
Workshop_X/
├── Home.md                    ← Dashboard chính
├── CLAUDE.md                  ← File này (vault state only)
├── 0_Inbox/                   ← Tiếp nhận mọi thứ (Inbox Zero achieved)
├── 1_Projects/                ← DELETE PASS v2 (2026-07-10, barbell): 3 mặt trận CEO + 2 clock | $15.7M/5yr [L3-L4]
│   │                           PRODUCTION HISTORY: 1,064 HW units + 8 sim systems shipped
│   │
│   │  ── VẬN HÀNH / SAFE END (nuôi công ty) ──
│   ├── Towed Target (30mm+12.7mm)/      **550 shipped** | Cash Cow production | TRL 9
│   ├── VN-MGM/                          **300 shipped** production + 🟢 N10-MAINT-KIT = revenue line | [FROZEN] V5-MOTORIZED design
│   ├── TARGET-DRONE-001/                **200 shipped** production | [FROZEN 07-10] RE pipeline (chờ TAI ITAR cert)
│   ├── Naval Sim (Vega Prime)/          **8 systems** | Cash Cow | TRL 9
│   │   ⚠️ Sau EXH-BPS hủy: safe end = production + MAINT-KIT ONLY. Không còn deadline hợp đồng ngoài nào — mọi kỷ luật dP/dt giờ là TỰ ÁP ĐẶT (2 clock bên dưới).
│   │
│   │  ── CONVEX END (≤2 vé lồi) ──
│   ├── VN-CUAV-SIM-001/                🔴 **U-2 của 2026** — Phase 3. SS1 PoC gate 05-07 CHƯA THỰC HIỆN (trôi 64 ngày). CẦN CHỐT gate mới ≤ 2026-08-09 — physical gate quan trọng nhất portfolio
│   ├── VN-AICC/                         Vé lồi #2 — ⏰ CM4 benchmark trước **2026-07-24** hoặc AUTO ON-HOLD
│   │
│   │  ── CHỜ TÍN HIỆU ──
│   ├── VN-XUONG-UUV/                    Tier 1 — ✅ OEM reply RECEIVED (07-10), nội dung chưa nạp vault → nạp ICD response + resolve SA-02/SA-04 → Gate 2
│   ├── BB-01_LOMAH/                     ⏰ Bench test trước **2026-08-10** hoặc AUTO-FREEZE — ✅ components đã đặt mua, clock chạy | absorbed VN-TGT-F Module-PROTO
│   │
│   │  ── CANCELLED ──
│   ├── [CANCELLED 07-10] VN-EXH-BPS-001/ HỦY: không phù hợp chiến lược (one-off project ≠ product) + timeline quá ngắn. Phase 1 artifacts = reference
│   │
│   │  ── ON HOLD / MERGED ──
│   ├── [MERGED→BB-01] VN-TGT-F/         Catalog 13 SKU bia BQP, kích hoạt khi có đơn
│   ├── [ON HOLD 07-11] VN-AST-MSL-001/  Phase 2 done G2 3.85 (điểm dừng sạch) — resume khi có đơn TRÒN, vào thẳng Phase 3 (OI-1 weld coupon)
│   ├── [ON HOLD] VN-USV-SS-001, VN-AIA-128, VN-12.7MM-SIM, ACH-Thesis, WX-ERP-001
│   │             (WX-ERP resume như OPS task khi MAINT-KIT cần invoice — giao NV Tổng hợp)
│   └── [ARCHIVED 07-10] Practice-PB, Practice-ICDM, WX-KPIPE-001 → 4_Archives/Projects/
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
