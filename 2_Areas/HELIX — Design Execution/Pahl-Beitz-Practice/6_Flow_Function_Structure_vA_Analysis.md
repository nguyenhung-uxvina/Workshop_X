# 6-Flow Function Structure: Mở Rộng Ngôn Ngữ Thiết Kế Cho Kỷ Nguyên AI
## Phân Tích Đa Khung vA — Từ E/M/S (1977) Sang E/M/S/D/C/T (2026)

**Nội dung gốc:** "3-Flow → 6-Flow function structure. E/M/S (1977) thiếu Data, Computation, Trust — 3 flows CRITICAL cho sản phẩm AI-enabled. Quan trọng hơn: 6-flow là nơi ACH opportunities PHÁT SINH. Khi thấy C-flow và S-flow cùng phục vụ 1 function → trade sensor quality (hardware cost) for compute quality (AI cost)."
**Mode:** vA (Analysis Only — no debate, no ARCHITECT)
**Ngữ cảnh:** Workshop X — sản phẩm quốc phòng cơ-điện-AI-nhúng, CEO compound stack
**Ngày:** 25/02/2026

---

# PART 1: CLARIFICATION — Feynman + Taxonomy

## 1.1 Giải Thích 60 Giây

Function structure là "bản đồ" cho thấy sản phẩm LÀM GÌ — không phải nó TRÔNG NHƯ THẾ NÀO (CAD) hay được LÀM TỪ GÌ (BOM), mà nó BIẾN ĐỔI cái gì thành cái gì. Pahl & Beitz (1977) nói: mọi sản phẩm kỹ thuật biến đổi 3 thứ — Energy (năng lượng), Material (vật chất), Signal (tín hiệu). Đúng cho máy cơ khí: động cơ biến điện thành torque (E), bơm di chuyển nước (M), cảm biến đọc nhiệt độ (S).

Nhưng sản phẩm 2026 có AI bên trong. AI không chỉ xử lý "signal" — nó xử lý DATA (có phân phối xác suất, uncertainty, provenance), tiêu thụ COMPUTATION (TOPS, watts, memory), và hoạt động trong chuỗi TRUST/AUTHORITY (ai được phép ra lệnh, dữ liệu classified hay không). 3-flow không diễn tả được những thứ này. Giống như cố vẽ bản đồ 3D trên giấy 2D — bạn mất chiều thứ 3.

6-flow = upgrade ngôn ngữ thiết kế. Và ngôn ngữ mới này PHÁT HIỆN CƠ HỘI mà ngôn ngữ cũ ẩn: khi cùng 1 function cần cả S-flow (sensor) lẫn C-flow (compute), bạn có thể TRADE — thay sensor đắt bằng compute rẻ + AI thông minh. Đây chính là nguyên lý ACH.

## 1.2 Taxonomy: Phân Loại 6 Flows

### Flows Cổ Điển (P&B 1977)

| Flow | Ký hiệu | Bản chất vật lý | Công cụ phân tích | Ví dụ Workshop X |
|------|---------|-----------------|-------------------|-----------------|
| **Energy** | E | Năng lượng: điện, nhiệt, cơ, quang | Thermodynamics, circuit analysis | Pin → motor → quay tháp pháo |
| **Material** | M | Vật chất: chất rắn, lỏng, khí | Materials science, fluid dynamics | Đạn nạp → bắn → bay |
| **Signal** | S | Tín hiệu vật lý: điện áp, áp suất, ánh sáng | Control theory, Laplace transforms | Cảm biến đo vận tốc → PLC → servo |

**Đặc trưng chung:** Deterministic. Cùng input → cùng output. Có transfer function rõ ràng.

### Flows Mở Rộng (2026)

| Flow | Ký hiệu | Bản chất | Công cụ phân tích | Ví dụ Workshop X |
|------|---------|---------|-------------------|-----------------|
| **Data** | D | Thông tin có cấu trúc: phân phối, uncertainty, provenance, context | Statistics, information theory, ML theory | Camera frame → YOLO → bounding box + confidence score |
| **Computation** | C | Phép tính: inference ops, training iterations, memory | Computer architecture, complexity theory | Jetson: 472 GFLOPS, 4GB RAM, 10W → 30 fps inference |
| **Trust/Authority** | T | Quyền hạn: ai quyết định, classification, override authority | Game theory, institutional design, military doctrine | Operator enable → AI detect → operator confirm → fire |

**Đặc trưng chung:** Probabilistic (D), Resource-consuming (C), Socially-constructed (T). KHÔNG deterministic.

## 1.3 Tại Sao "Signal" ≠ "Data" — Sự Khác Biệt Nền Tảng

Đây là lỗi phổ biến nhất: "Signal bao gồm Data, không cần thêm flow."

```
SIGNAL (S):                           DATA (D):
─────────────────────                 ─────────────────────
Giá trị vô hướng                     Cấu trúc có ngữ nghĩa
Deterministic: 3.7V là 3.7V          Probabilistic: "chắc 87% là xe tăng"
Không có uncertainty                  Có confidence interval
Không có provenance                   Có nguồn gốc, bias, freshness
Không drift theo thời gian            Distribution shift liên tục
Phân tích: Laplace, Fourier          Phân tích: Bayesian, ML metrics
Fail mode: nhiễu, saturation         Fail mode: drift, adversarial, bias

PHYSICS ANALOGY:
S = Classical mechanics (deterministic, reversible, exact)
D = Statistical mechanics (probabilistic, irreversible, approximate)

Dùng công cụ S để thiết kế cho D = dùng thước cứng đo vật liệu đàn hồi.
Đo được — nhưng đo SAI.
```

## 1.4 Tại Sao "Signal" ≠ "Computation" — Không Phải Mọi Processing Đều Như Nhau

```
SIGNAL PROCESSING:                    COMPUTATION (C):
─────────────────────                 ─────────────────────
Transforms signal: filter, amplify    Processes data: infer, predict, learn
Cost: ~0 (analog circuit, FPGA)       Cost: TOPS × Watts × $/chip × cooling
Latency: microseconds                 Latency: milliseconds → seconds
Hardware: fixed-function              Hardware: programmable, UPGRADABLE
Scaling: linear (2x signal ≈ 2x HW)  Scaling: non-linear (2x accuracy ≠ 2x compute)

KEY INSIGHT FOR ACH:
S-processing cannot be traded for C-processing (different physics)
BUT: S-quality (sensor resolution) CAN be traded for C-quality (AI model)
This trade is INVISIBLE in 3-flow because C doesn't exist as a flow
```

## 1.5 Tại Sao Cần "Trust/Authority" — Flow Không Tồn Tại Trong Kỹ Thuật Dân Sự

```
QUỐC PHÒNG ĐẶC THÙ:

Consumer product: User presses button → device acts. Simple.

Defense product: 
  Who authorized this AI to act?
  What happens if AI acts without authorization?
  Is this data classified? Can it leave this device?
  Can the operator override AI recommendation?
  What's the human-in-loop policy for lethal decisions?
  What classification level can this system process?

Trust/Authority flow KHÔNG PHẢI "nice to have" — nó là LEGAL REQUIREMENT.
MIL-STD-882E (System Safety): mọi autonomous function phải có defined authority chain.
If T-flow not designed → product CANNOT be deployed.
If T-flow not in function structure → designer CANNOT reason about it.
```

---

# PART 2: SYSTEMS THINKING

## 2.1 Stock-Flow Map: 6-Flow Design Capability Như Hệ Thống

### 7 Stocks Cốt Lõi

| # | Stock | Current | Units | Type | Flows That Feed It |
|---|-------|---------|-------|------|-------------------|
| S1 | **3-Flow Proficiency** | Medium-High | Skill level 1-5 | BUFFER | Có sẵn từ engineering education |
| S2 | **Data Flow Literacy** | Low | Skill level 1-5 | CONSTRAINT ⚠️ | AI/ML training, practice |
| S3 | **Computation Flow Literacy** | Low-Medium | Skill level 1-5 | CONSTRAINT | Computer architecture + AI deployment experience |
| S4 | **Trust Flow Literacy** | Very Low | Skill level 1-5 | CONSTRAINT ⚠️ | Defense doctrine + system safety training |
| S5 | **ACH Discovery Rate** | Very Low | Opportunities found/quarter | CONSTRAINT | Depends on S2 × S3 (both needed) |
| S6 | **Design Language Expressiveness** | 50% (3/6 flows) | % of product reality captured | CONSTRAINT | S1+S2+S3+S4 combined |
| S7 | **Integration Surprise Rate** | High | Surprises/project | ANTI-STOCK (want it LOW) | Inversely related to S6 |

### Hidden Stock: Design Language Expressiveness (S6)

**Đây là finding quan trọng nhất:** S6 là meta-stock — nó đo khả năng NGÔN NGỮ THIẾT KẾ diễn tả thực tế sản phẩm. Hiện tại ở 50% (3 flows / 6 flows needed). Mọi thứ không diễn tả được → invisible → không thiết kế được → trở thành integration surprise (S7).

```
Stock: DESIGN LANGUAGE EXPRESSIVENESS (S6)
Current Level: ~50% (3-flow captures 3/6 product realities)
Units: % of product reality that design language can express

Inflows:
  1. Add D-flow literacy → S6 jumps to ~65%    (Data capture)
  2. Add C-flow literacy → S6 jumps to ~80%    (Compute capture)
  3. Add T-flow literacy → S6 reaches ~95%     (Authority capture)
  Rate: Each flow addition is DISCRETE JUMP, not gradual

Outflows:
  1. Technology complexity growth → new realities exceed language
     Rate: Slow (~5%/year as products become more complex)

CRITICAL INSIGHT:
  S6 at 50% means 50% of product reality is INVISIBLE to designers.
  Integration Surprise Rate (S7) ∝ (1 - S6)
  Current S7 high BECAUSE S6 is only 50%.
  
  UPGRADE S6 from 50% → 80% (add D + C flows) =
  S7 drops by ~60% (integration surprises cut by more than half)
  
  This is NOT incremental improvement. This is PHASE TRANSITION.
  Like going from 2D blueprint to 3D CAD — you don't see 10% more,
  you see QUALITATIVELY DIFFERENT things.
```

### Flow Relationships

```
S1 (3-Flow) ───is foundation for──→ S2, S3, S4 (extended flows)
S2 (Data) ───×──→ S5 (ACH Discovery): need D-flow to see D×C tradeoffs
S3 (Compute) ─×──→ S5 (ACH Discovery): need C-flow to see C×S tradeoffs  
S2+S3+S4 ───build──→ S6 (Language Expressiveness)
S6 (Language) ───reduces──→ S7 (Integration Surprises)
S5 (ACH Rate) ───produces──→ Cost savings, capability premium, local content

VIRTUOUS DIRECTION:
  Learn D/C/T → Language expressive → See more → Design better 
  → Fewer surprises → More ACH found → Better products → Learn more

CURRENT STATE:
  S2/S3/S4 low → S6 at 50% → S7 high → surprises → firefighting 
  → no time to learn D/C/T → S2/S3/S4 stay low
  = STAGNATION TRAP
```

## 2.2 Feedback Loops

### Reinforcing Loops (Growth/Collapse)

**R1: ACH Discovery Spiral** (DORMANT → highest potential)
```
6-flow function structure used → C-flow and S-flow mapped together
→ ACH opportunity visible → ACH substitution attempted
→ Cost saving + capability gain → team trusts 6-flow more
→ 6-flow used more consistently → more ACH discovered
Speed: Medium (3-6 months to compound)
Status: DORMANT — because 6-flow not yet standard practice
Activation: CEO mandates 6-flow for next product design review
```

**R2: Language Lock-In** (ACTIVE — vicious)
```
3-flow is standard → new engineers learn 3-flow only
→ function structures miss D/C/T → integration surprises attributed to "complexity"
→ "complexity" addressed with more reviews (not better language)
→ 3-flow remains standard → next generation learns 3-flow only
Speed: Slow (years — generational)
Status: ACTIVE — P&B textbooks, university curricula, team habits all reinforce 3-flow
Danger: Self-reinforcing cultural norm. Feels "correct" because everyone does it.
```

**R3: Expressiveness Compound** (NASCENT)
```
6-flow adopted → interface design captures D/C/T requirements
→ ICD is more complete → Integration Debt lower
→ projects run smoother → team trusts methodology
→ 6-flow deepened further (more detail per flow)
Speed: Medium
Status: NASCENT — needs first successful application to bootstrap
```

**R4: Cross-Domain Bridge** (DORMANT → critical for Workshop X)
```
6-flow function structure → D/C/T flows cross domain boundaries
→ Mechanical engineer SEES AI data requirements
→ AI engineer SEES mechanical constraints on compute
→ Cross-domain understanding improves
→ ICD quality improves → Integration Debt decreases
→ Better products → 6-flow validated
Speed: Medium
Status: DORMANT — because 6-flow not used, each domain speaks own language
```

**R5: Invisible Interface Spiral** (ACTIVE — vicious)
```
D/C/T interfaces not in function structure → not in ICD
→ Engineers make ASSUMPTIONS about D/C/T interfaces
→ Assumptions diverge during development (Mech assumes sealed, AI assumes ventilated)
→ Discovered at integration → expensive redesign
→ "Integration is always hard" → accepted as normal → no language improvement
Speed: Medium (per project cycle)
Status: ACTIVE — this is happening NOW at Workshop X
```

### Balancing Loops

**B1: Learning Overhead** (Will activate when 6-flow adopted)
```
6-flow adopted → more complexity in function structure
→ more time to create → engineers resist ("too much work")
→ adoption slows
Counter: DEMONSTRATE that 6-flow SAVES more time (fewer surprises) than it COSTS (more upfront work)
```

**B2: Over-Specification Risk**
```
6-flow with all detail → function structure becomes unwieldy
→ hard to communicate → team ignores it
→ reverts to simpler 3-flow
Counter: Tiered detail — top-level 6-flow for system, domain-specific detail only where D/C/T cross boundaries
```

### System Archetype: "Limits to Growth" + "Shifting the Burden"

```
LIMITS TO GROWTH:
  3-flow "works" for simple products (growth engine)
  As products become Mech-AI integrated, 3-flow hits ceiling
  Integration surprises increase (limit)
  Team works harder (symptomatic: more reviews) instead of smarter (fundamental: better language)

SHIFTING THE BURDEN:
  Problem: "Integration surprises keep happening"
  
  Symptomatic solution: More reviews, more meetings, more coordination
    → Short-term: catches some problems
    → Side effect: atrophies need for better design language
    → Side effect: "coordination overhead" blamed, not "language inadequacy"
  
  Fundamental solution: Upgrade design language to 6-flow
    → D/C/T interfaces visible in function structure
    → ICD captures actual interfaces
    → Surprises prevented by design, not caught by review

  CEO DETECTION:
  "Are we ADDING REVIEWS or IMPROVING LANGUAGE?"
  If answer is "reviews" → Shifting the Burden active
```

## 2.3 Leverage Points

| Rank | Level | Point | Intervention | Impact |
|:----:|:-----:|-------|-------------|--------|
| 1 | **L2** | **Paradigm: "Function structure is a LANGUAGE, not a diagram"** | Shift mental model: function structure quality = design language quality. Poor language = invisible interfaces = guaranteed surprises. This is not about "being thorough" — it's about WHAT YOU CAN SEE. | Transformative |
| 2 | **L6** | **Information: Make D/C/T interfaces VISIBLE** | 6-flow function structure → D/C/T interfaces appear in design artifact → appear in ICD → appear in reviews → appear in consciousness | Very High |
| 3 | **L5** | **Rules: "No design review without 6-flow function structure"** | Mandate: every product design review must include 6-flow. Not 3-flow with notes about AI. FULL 6-flow. Makes R1 (ACH Discovery) activate automatically. | High |
| 4 | **L10** | **Structure: 6-flow function structure TEMPLATE** | Create standardized template with all 6 flows pre-printed. When engineer opens blank function structure, D/C/T fields are already there. Structure guides behavior. | High |
| 5 | **L3** | **Goals: Measure "ACH opportunities discovered" not "function structures completed"** | Change what's valued: not bureaucratic compliance but design insight. 6-flow valued because it FINDS things, not because it's "complete." | Medium-High |
| 6 | **L7** | **Loop gain: Activate R4 (Cross-Domain Bridge)** | First 6-flow applied to real product → mechanical engineer sees AI data requirements → "I didn't know camera needed 30fps minimum!" → trust in 6-flow grows | Medium-High |
| 7 | **L9** | **Delay: Reduce time from "6-flow drawn" to "first ACH discovered"** | Workshops with guided ACH discovery: when 6-flow done, facilitator walks through C×S overlaps → ACH visible in hours, not months | Medium |

---

# PART 3: META-LEARNING FRAMEWORKS

## 3.1 Feynman Deepening: 3 Concepts Cần Master

### Concept 1: "Flow Orthogonality" — 6 Flows Là Độc Lập

```
💡 60-SECOND EXPLANATION
6 flows không thể "collapse" vào nhau. E ≠ C (năng lượng ≠ phép tính).
S ≠ D (tín hiệu ≠ dữ liệu). M ≠ T (vật chất ≠ quyền hạn).
Mỗi flow cần thiết kế, interface, và validation RIÊNG.

🏠 EVERYDAY ANALOGY
Một ngôi nhà có: nước (M), điện (E), wifi (S), nội dung trên wifi (D),
CPU trong router (C), và quyền admin của router (T).
Bạn không thể nói "wifi = internet content" — wifi là medium, content là information.
Thiết kế ống nước KHÔNG bao gồm thiết kế security policy.
6 thứ riêng biệt cần 6 hệ thống riêng biệt.

🎯 DEFENSE EXAMPLE
V-SMASH: Camera cần điện (E), mounting bracket (M), video signal (S),
image frames annotated for YOLO (D), Jetson GPU cycles (C), 
và operator authority to enable detection (T).
Thiếu BẤT KỲ flow nào → system không hoạt động.
Thiếu flow nào TRONG FUNCTION STRUCTURE → không thiết kế được interface cho nó.

⚠️ COMMON MISUNDERSTANDING
"Data là 1 loại Signal" — SAI
Signal: deterministic, 3.7V = 3.7V everywhere
Data: probabilistic, "87% confident this is a tank" depends on training data, 
model version, lighting conditions, adversarial inputs
Confusing them → design interfaces WRONG → integration failure
```

### Concept 2: "C×S Substitutability" — Nền Tảng Của ACH

```
💡 60-SECOND EXPLANATION
Khi 1 function cần cả S-flow (sensor signal) lẫn C-flow (computation),
có thể TRADE: sensor tệ hơn + AI tốt hơn = kết quả TƯƠNG ĐƯƠNG hoặc TỐT HƠN.
Đây là nguyên lý ACH: camera $5 + YOLO > sensor $500 + simple algorithm.
6-flow PHÁT HIỆN cơ hội này vì C-flow visible. 3-flow ẨN nó.

🏠 EVERYDAY ANALOGY
Nghe nhạc: micro tốt ($500) + không xử lý = âm thanh tốt.
HOẶC: micro thường ($20) + AI noise cancellation = âm thanh TƯƠNG ĐƯƠNG.
Bạn "trade" chất lượng micro (S) cho compute (C).
Nhưng nếu "bản thiết kế" chỉ ghi "micro → âm thanh" (3-flow),
bạn KHÔNG BAO GIỜ nghĩ đến AI noise cancellation.

🎯 ACH DISCOVERY PROTOCOL (from 6-flow):
Bước 1: Draw 6-flow function structure
Bước 2: For each function, mark: which flows serve it?
Bước 3: Find functions where BOTH S and C serve same output
Bước 4: Ask: "Can I trade S-quality for C-quality?"
Bước 5: If YES → ACH OPPORTUNITY → run SHIFT checklist

Bước 3 is IMPOSSIBLE without C as explicit flow.
```

### Concept 3: "T-Flow As Design Constraint" — Quốc Phòng Đặc Thù

```
💡 60-SECOND EXPLANATION
Trong quốc phòng, KHÔNG PHẢI mọi function đều "free to act."
Mỗi function có authority level: fully autonomous, human-on-the-loop,
human-in-the-loop, manual only. T-flow maps who authorizes what.
Without T-flow, autonomy decisions are IMPLICIT — and implicit autonomy
in weapons systems = legal/safety catastrophe.

🏠 EVERYDAY ANALOGY
Company email: bạn CÓ THỂ gửi email cho đồng nghiệp (authority level: free).
Bạn cần approval của manager để gửi cho CEO (authority level: supervised).
Bạn KHÔNG THỂ gửi email thay CEO (authority level: prohibited).
Nếu email system không encode authority levels → ai cũng gửi gì cũng được → chaos.
Same with weapons: if T-flow not designed → AI acts without authority → catastrophe.

🎯 DEFENSE EXAMPLE
V-SMASH target detection:
  AI detects: T-level = AUTONOMOUS (AI decides what's a target)
  AI recommends fire: T-level = HUMAN-IN-THE-LOOP (operator confirms)
  System fires: T-level = HUMAN-AUTHORIZED (operator pulls trigger)
  System self-destructs: T-level = DUAL-AUTHORITY (2 people required)

Each function in function structure needs its T-LEVEL specified.
3-flow cannot express this. 6-flow can.
```

## 3.2 Chunking: 6-Flow Breakdown Into Learnable Modules

```
MODULE MAP (learning sequence):

Module 0: PREREQUISITES (already have)
├── P&B function structure basics (E/M/S)
├── Decomposition principle (overall → sub-functions)
└── Interface concept (inputs/outputs per function)

Module 1: D-FLOW FUNDAMENTALS (1 week)
├── Chunk 1.1: Data vs. Signal distinction
│   (distribution, uncertainty, provenance, drift)
├── Chunk 1.2: Data flow notation in function structure
│   (annotate: format, bandwidth, latency, classification)
├── Chunk 1.3: Data interface design
│   (ICD for data: format spec, API, error handling)
└── Practice: Add D-flow to V-SMASH function structure

Module 2: C-FLOW FUNDAMENTALS (1 week)
├── Chunk 2.1: Computation as resource flow
│   (TOPS, watts, memory, thermal budget)
├── Chunk 2.2: C-flow notation in function structure
│   (annotate: compute requirement, platform, latency budget)
├── Chunk 2.3: C×S substitutability analysis
│   (ACH discovery method — the key skill)
└── Practice: Identify 3 C×S tradeoffs in current products

Module 3: T-FLOW FUNDAMENTALS (1 week)
├── Chunk 3.1: Authority levels (autonomous → manual spectrum)
├── Chunk 3.2: T-flow notation (authority annotations per function)
├── Chunk 3.3: T-flow in defense context (MIL-STD-882E, human-in-loop)
└── Practice: Add T-flow to V-SMASH, verify against safety requirements

Module 4: INTEGRATION (2 weeks)
├── Chunk 4.1: Full 6-flow function structure methodology
├── Chunk 4.2: ACH discovery protocol (systematic C×S scan)
├── Chunk 4.3: ICD generation from 6-flow
├── Chunk 4.4: 6-flow → integration debt identification
└── Practice: Full 6-flow for 1 complete product, present to team
```

## 3.3 Mnemonic: DÒNG CHẢY

**D** — **D**ata: Dữ liệu có uncertainty, distribution, provenance → KHÔNG phải signal
**Ò** — **Ò** (nghĩ lại): Signal VÀ Data cùng phục vụ 1 function → ACH opportunity!
**N** — **N**ăng lượng (Energy): Flow cổ điển, vẫn nền tảng
**G** — **G**round truth (Computation): Compute biến data thành quyết định → cần resource budget

**C** — **C**hất liệu (Material): Flow cổ điển, vẫn nền tảng
**H** — **H**ệ thống tín hiệu (Signal): Flow cổ điển, nhưng giờ là SUBSET không phải SUPERSET
**Ả** — **Ả**nh hưởng quyền lực (Trust/Authority): Ai cho phép? Classified? Override?
**Y** — **Y**êu cầu: Mọi flow cần interface design trong ICD

"DÒNG CHẢY" = "flows" in Vietnamese. 8 chữ cái, mỗi chữ = 1 khái niệm key.

**Retrieval trigger:** Mỗi lần vẽ function structure, hỏi: "DÒNG CHẢY đủ chưa?"
- D: Data flow có chưa? (format, bandwidth, uncertainty?)
- C: Compute flow có chưa? (TOPS, watts, thermal?)
- Ả: Authority flow có chưa? (ai authorize, classification?)
- Nếu thiếu BẤT KỲ → function structure CHƯA XONG

## 3.4 Self-Assessment Rubric: 6-Flow Capability

| Dimension | 1 (Chưa biết) | 3 (Đang xây dựng) | 5 (Thành thạo) |
|-----------|---------------|-------------------|----------------|
| **E/M/S (Classic)** | Có nghe nhưng chưa vẽ | Vẽ được cho 1 domain | Vẽ cross-domain E/M/S fluently |
| **D-Flow (Data)** | "Data = Signal" | Phân biệt D vs S; annotate data format | Full D-flow: distribution, drift, provenance, uncertainty per function |
| **C-Flow (Computation)** | Không nghĩ compute là flow | Annotate compute requirement per AI function | Full C-flow budget: TOPS, watts, memory, thermal, latency allocation |
| **T-Flow (Trust)** | Không tồn tại trong thiết kế | Biết cần authority levels, ghi một số | Full T-flow per function: authority level, classification, override, human-in-loop |
| **C×S Substitutability** | Không biết ACH | Hiểu concept, chưa tìm được trong design | Systematic scan mỗi function for C×S overlap → ACH opportunities |
| **6-Flow → ICD** | ICD chỉ có mechanical interfaces | ICD có D interfaces | Full ICD: E/M/S/D/C/T interfaces specified per domain boundary |
| **6-Flow → Integration Debt** | Không liên kết | Biết 6-flow giúp ICD | Use 6-flow to PREDICT integration issues before they occur |

**Scoring:**
- 7-14: **CƠ BẢN** — vẫn dùng 3-flow, chưa nhận thức gap
- 15-24: **ĐANG CHUYỂN ĐỔI** — thêm D/C/T nhưng chưa systematic
- 25-35: **THÀNH THẠO** — 6-flow là default, ACH discovery systematic, ICD complete

**Workshop X Team Current Estimate:** CEO ~18/35 (ĐANG CHUYỂN ĐỔI), Team ~9/35 (CƠ BẢN)

## 3.5 Targeted Drills

### Drill 1: "Flow Annotation Sprint" (Weekly, 30 phút)

**Purpose:** Build D/C/T flow literacy
**Loop:** Directly builds S2, S3, S4 → feeds S6 (Language Expressiveness)

**Instructions:**
1. Take 1 sub-function from any active product
2. Draw standard 3-flow (E/M/S) — 5 minutes
3. Now ADD: D-flow (what data flows in/out? what format? what uncertainty?)
4. ADD: C-flow (what computation required? what platform? what latency?)
5. ADD: T-flow (what authority level? who authorizes? what classification?)
6. Compare: what did 6-flow reveal that 3-flow MISSED?

**Progression:**
- Week 1-2: Single sub-function, simple product
- Week 3-4: Multi-function subsystem with cross-domain flows
- Week 5+: System-level with full E/M/S/D/C/T and interface extraction

**Scoring:** ≥3 D/C/T annotations per function = competent. "New insight discovered" = learning.

### Drill 2: "ACH Scanner" (Bi-weekly, 45 phút)

**Purpose:** Build ACH discovery capability (S5)
**Loop:** Activates R1 (ACH Discovery Spiral)

**Instructions:**
1. Take 6-flow function structure from Drill 1 output
2. For EACH function: list which flows serve it
3. Find functions where S AND C both contribute to same output
4. For each S×C overlap, ask:
   - Can S-quality be reduced if C-quality increases? (cheaper sensor + better AI?)
   - What's the current S cost? What would reduced-S + added-C cost?
   - Is training data available for the AI approach?
   - Is fallback feasible?
5. Document: ACH Opportunity or NOT, with rationale

**Scoring:** ≥1 genuine ACH opportunity found per session = the method works.

### Drill 3: "ICD From 6-Flow" (Monthly, 60 phút)

**Purpose:** Build complete interface design capability
**Loop:** Directly reduces S7 (Integration Surprise Rate)

**Instructions:**
1. Take complete 6-flow function structure for 1 product
2. Identify EVERY point where a flow CROSSES domain boundary
   (Mech → Electronics, Electronics → AI, Mech → AI)
3. For each crossing: specify interface in ICD
   - E: voltage, current, thermal path
   - M: mounting, dimensions, tolerances
   - S: signal type, voltage levels, protocol
   - D: data format, bandwidth, latency, error handling
   - C: compute allocation, power budget, memory
   - T: authority handoff, classification boundary, override protocol
4. Compare with existing ICD: what was MISSING before?

**Scoring:** ≥5 previously-undocumented interfaces found = 6-flow is working.

## 3.6 Interleaving Schedule: 8-Week 6-Flow Mastery

| Week | Morning (90 min) | Afternoon (60 min) | Drill |
|:----:|-----------------|-------------------|:-----:|
| 1 | D-flow fundamentals: data vs. signal | D-flow notation practice | Flow Annotation Sprint |
| 2 | C-flow fundamentals: compute as resource | C×S substitutability theory | — |
| 3 | T-flow fundamentals: authority in defense | T-flow notation + MIL-STD-882E | Flow Annotation Sprint |
| 4 | ACH discovery method (full protocol) | Apply to V-SMASH function structure | ACH Scanner |
| 5 | 6-flow → ICD extraction method | Practice: extract ICD from V-SMASH 6-flow | Flow Annotation Sprint |
| 6 | Integration Debt prediction from 6-flow | Workshop: predict integration issues | ACH Scanner |
| 7 | 6-flow for LOMAH-AD (new product application) | Cross-product comparison: V-SMASH vs LOMAH | ICD From 6-Flow |
| 8 | **INTEGRATION: Full 6-flow for 1 product + ACH scan + ICD** | Present to team | All drills + assessment |

---

# PART 4: CONCEPT EVALUATION

## 4.1 6-Flow vs. Alternatives

| Approach | Expressiveness | ACH Discovery | Learning Cost | ICD Quality | Verdict |
|----------|:-------------:|:-------------:|:------------:|:-----------:|---------|
| **3-Flow (P&B standard)** | 50% | Cannot find C×S | Zero (known) | Misses D/C/T | INSUFFICIENT for AI products |
| **3-Flow + "notes"** | 60% | Ad-hoc, person-dependent | Low | Inconsistent | BRITTLE — depends on who writes notes |
| **SysML Activity Diagrams** | 85% | Possible but complex | High | Good if used | OVERKILL for chế thử workshop |
| **6-Flow (proposed)** | 80-90% | Systematic via C×S scan | Medium | Good + D/C/T | OPTIMAL for Workshop X |
| **Full MBSE** | 95% | Embedded in toolchain | Very High | Excellent | FUTURE — when org scales |

**Recommendation:** 6-Flow is Goldilocks — expressive enough to find ACH and prevent integration surprises, simple enough to adopt in 8 weeks, doesn't require new tools.

## 4.2 VDI 2225 Evaluation Adapted

| Criterion | Weight | 3-Flow | 6-Flow | Rationale |
|-----------|:------:|:------:|:------:|-----------|
| Interface Completeness | 0.25 | 2 | 5 | 6-flow captures D/C/T interfaces that 3-flow misses entirely |
| ACH Discovery | 0.20 | 1 | 5 | Impossible without C-flow visible; 6-flow enables systematic scan |
| Learning Effort | 0.15 | 5 | 3 | 6-flow requires ~8 weeks additional training |
| Integration Surprise Prevention | 0.20 | 2 | 4 | 6-flow predicts 60-80% of surprises that 3-flow misses |
| Tool Compatibility | 0.10 | 5 | 4 | 6-flow works with existing tools, just expanded notation |
| Team Adoption Likelihood | 0.10 | 5 | 3 | Resistance expected; needs CEO mandate + demonstrated wins |
| **Weighted Total** | **1.00** | **2.8** | **4.2** | **6-Flow wins by 50%** |

---

# PART 5: USE CASES

## 5.1 Audience Map

| Audience | Priority Module | Immediate Action |
|----------|:-------------:|-----------------|
| **CEO Workshop X** | ACH Discovery (Module 2: C×S) | Mandate 6-flow for next design review |
| **Mechanical Engineers** | D-flow + C-flow (thermal implications) | Drill 1: add D/C to mechanical function structures |
| **AI/Software Engineers** | T-flow (authority levels for AI functions) | Drill 3: ensure all AI functions have T-level |
| **Electronics Engineers** | C-flow (compute budget allocation) | Map compute budget as flow: allocation per function |
| **Systems Engineers** | Full 6-flow → ICD | Drill 3: extract complete ICD from 6-flow |
| **Vietnamese defense engineers (general)** | D/C/T awareness + ACH | 8-week schedule + DÒNG CHẢY mnemonic |

## 5.2 Product Application Priority

| Product | 6-Flow Urgency | ACH Potential from 6-Flow | Recommended Action |
|---------|:--------------:|:------------------------:|-------------------|
| **VN-LOMAH-AD** | ★★★★★ | High (drone classifier, payload detection) | FIRST 6-flow application — in concept phase, maximum value |
| **V-SMASH** | ★★★★ | Medium (already ACH, but 6-flow may find MORE) | Retrofit: apply 6-flow to existing design, find hidden ACH |
| **SCOREBOARD** | ★★★ | Medium (shot analysis AI) | Apply during next design iteration |
| **Target Drone** | ★★★★ | High (autonomous navigation) | Apply for T-flow: critical authority questions |
| **OVERWATCH** | ★★★ | Medium | Apply when concept phase begins |

---

# PART 6: SYNTHESIS

## 6.1 The Single Most Important Insight

**Function structure is not a diagram — it's a LANGUAGE. And your language determines what you can SEE.**

Workshop X currently designs with a language that can express 50% of product reality (3-flow). The other 50% — data distribution, compute budget, authority chains — exists in reality but NOT in design artifacts. Things that don't exist in design artifacts don't get designed. Things that don't get designed become integration surprises.

Upgrading from 3-flow to 6-flow is not "being more thorough." It's the difference between describing the world in 3 dimensions versus 6. You don't see "more of the same" — you see QUALITATIVELY DIFFERENT things. Specifically, you see ACH opportunities (C×S substitutability) that are invisible in 3-flow.

## 6.2 What The Content Says vs. What It Misses

| Content Claims | Valid? | What's Missing |
|---------------|:------:|---------------|
| E/M/S insufficient for AI products | ✅ Yes | HOW insufficient: specific failure modes when D/C/T missing |
| D, C, T are the 3 missing flows | ✅ Yes | Whether 6 is ENOUGH — could there be 7th, 8th flow? |
| C×S substitutability = ACH | ✅ Yes | The LIMITS of substitutability: where C CANNOT replace S |
| 6-flow reveals ACH opportunities | ✅ Yes | The organizational RESISTANCE to 6-flow adoption |
| | | **Hidden stock: Design Language Expressiveness (S6)** — the meta-capability that determines ALL design quality |
| | | **R2 (Language Lock-In)** — cultural inertia of 3-flow is the real barrier, not technical difficulty |
| | | **B1 (Learning Overhead)** — adoption cost is real and must be addressed, not ignored |

## 6.3 Meta-Pattern Observations

| Pattern | Confirmed? | This Analysis |
|---------|:----------:|-------------|
| "Shifting the Burden" archetype | ✅ 7/8 (88%) | More reviews instead of better language |
| L2 (Paradigm) as top leverage | ✅ 8/8 (100%) | "Function structure = language" paradigm shift |
| Hidden stock = key finding | ✅ 7/8 (88%) | Design Language Expressiveness (S6) |
| Flat list → 3±1 layers | ✅ 6/6 (100%) | 6 flows → 3 layers (Classic, Extended, Meta) |

---

# PART 7: PROGRESS TRACKING

## 7.1 Current Position

```
HIỆN TẠI:
  CEO: ~18/35 (ĐANG CHUYỂN ĐỔI) — understands theory, partial application
  Team: ~9/35 (CƠ BẢN) — 3-flow only, D/C/T not in consciousness
  
  S6 (Design Language Expressiveness): ~50%
  S5 (ACH Discovery Rate): ~0.5 per quarter (accidental, not systematic)
  S7 (Integration Surprise Rate): HIGH (per project)

TARGET 8 WEEKS:
  CEO: 25/35 (THÀNH THẠO threshold)
  Team: 15/35 (ĐANG CHUYỂN ĐỔI)
  
  S6: ~80% (D + C flows added)
  S5: 2-3 per quarter (systematic scan)
  S7: -40% (measurable reduction)

TARGET 6 MONTHS:
  CEO: 30/35
  Team: 22/35
  
  S6: ~90% (all 6 flows standard)
  S5: 5+ per quarter
  S7: -60%
```

## 7.2 CEO Actions This Week

1. **Day 1:** Print/create 6-flow function structure template with all 6 flows pre-printed. Distribute.
2. **Day 2:** Apply 6-flow to V-SMASH personally. Find ≥1 previously-invisible interface.
3. **Day 3:** Schedule "6-Flow Workshop" for team (Week 2). Prepare V-SMASH as case study.
4. **Day 5:** Run ACH Scanner drill on V-SMASH 6-flow. Document any new ACH opportunity.

## 7.3 Weekly Review Questions (DÒNG CHẢY Check)

```
Mỗi design review, CEO hỏi:
1. "Function structure có D-flow không?" (Data: format, uncertainty, drift?)
2. "Function structure có C-flow không?" (Compute: TOPS, watts, memory, thermal?)
3. "Function structure có T-flow không?" (Authority: who authorizes, classification?)
4. "Có function nào mà S và C cùng phục vụ?" (→ ACH opportunity?)
5. "ICD có reflect tất cả 6 flows ở domain boundaries không?"

Nếu bất kỳ câu = "Không" → function structure CHƯA XONG.
```

---

*Phân tích vA sử dụng: Stock-Flow Mapper, Feedback Loop Detector, Meadows' Leverage Point Analyzer, Engineering-Feynman, Engineering-Chunking-Breakdown, Engineering-Mnemonic-Creator, Engineering-Self-Assessment-Rubric-Generator, Engineering-Targeted-Drill-Master, Engineering-Interleaving-Scheduler, Engineering-Concept-Evaluation-Assistant, Engineering-Design-Review-Mentor, Engineering-Learning-Journal-Keeper*
