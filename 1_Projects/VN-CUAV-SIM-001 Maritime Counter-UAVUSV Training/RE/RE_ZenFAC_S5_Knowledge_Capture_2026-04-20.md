---
created: 2026-04-20
updated: 2026-04-20
type: project
status: active
method: RE MECHA Stage 5 — KNOWLEDGE CAPTURE
version: v1.0
tags: [#type/project, #status/active]
pipeline: reverse-engineering v3.0 --mode mecha
product: Zen FAC Simulator
project: VN-CUAV-SIM-001
input: RE_ZenFAC_S1→S2→S3
---

# RE STAGE 5: KNOWLEDGE CAPTURE — Zen FAC Simulator
## Three Laws + Design Patterns + Galaxy Candidates

**Date:** 2026-04-20
**Pipeline:** Stage 0→1→2→3→5 (skipped 3P Partnership + Stage 4 Audit — competitive intel RE, not acquisition)

---

## 5A — RE TECHNICAL DOSSIER (Summary)

### Executive Summary

Zen Technologies' AI-enabled FAC Simulator (via ARI Simulation subsidiary) is a full-spectrum naval crew trainer: ship handling + gunnery + navigation + EO/IR targeting in a 360° immersive environment with 6-DOF motion. Priced $200-500K, targeting Indian Navy and export markets.

**For WX CUAV-SIM:** Zen validates WX's core design decisions (projection, AI coaching, recoil sim) while confirming WX's niche is structurally different (C-UAS gunnery at $50-70K vs full FAC training at $200-500K). The only genuine gap is recoil force (Zen 50-150N vs WX 8-25N target) and AI coaching (Zen shipped, WX planned).

### RE Pipeline Results

| Stage | Key Output |
|-------|-----------|
| S0 Legal Gate | GO UNCONDITIONAL — OSINT-only, clean-room, all GREEN |
| S1 Deconstruct | 24 components, 4-domain: Mech 20% / Elec 17% / SW 48% / Ctrl 15% |
| S2 Decode | 33 reqs (22D+8W), 15 sub-functions, SF-06 (AI) = solution-determining, AMBER complexity |
| S3 Reconstruct | 6 kept / 8 modified / 7 added / 7 removed. WX 3.40/4 vs Zen 2.10/4 for C-UAS mission |

---

## 5B — DESIGN PATTERNS + HEURISTICS

### Reusable Patterns from Zen FAC RE

| # | Pattern Name | Context | Problem | Solution | WX Application |
|---|-------------|---------|---------|----------|---------------|
| P1 | **Acquire-Don't-Build for Domain Entry** | Zen entering naval sim market | No naval sim expertise in-house | Acquired ARI (76%→100%) to gain 30+ years marine sim expertise in months | WX alternative: build internally (slower but full IP). Consider acquisition IF entering new domain (e.g., air defense sim) |
| P2 | **AI IOS as Instructor Multiplier** | Naval training centers with limited instructors | Instructors are bottleneck — each sim station needs one | AI IOS replaces routine instructor tasks, human instructor oversees multiple stations | WX: ACH Layer 1 enables unmanned training sessions. Instructor does debrief, not real-time coaching |
| P3 | **Multi-Sim Complex Integration** | Multiple training types needed (bridge, engine, gunnery, C2) | Separate sims = fragmented training | ARI Multi-Simulator Complex: Bridge + Engine Room + C2 + War Gaming + Platform Management — shared scenario, networked | WX: CORTEX variant is this concept. Validate architecture early even if build later |
| P4 | **Modified Real Weapon for Recoil** | Maximum weapon handling fidelity needed | Replica weapons feel "fake" to experienced operators | Use REAL decommissioned weapon, modified with sim interface (AWeSim approach) | WX: CNC replica is cheaper. But for FULL variant, consider sourcing decommissioned weapons for premium fidelity |
| P5 | **Dome Projection for Air Defense** | IADCS needs 360° sky + terrain for air targets | Flat screens can't show overhead threats | HD dome projection with 3D air threats, 24×7 time cycle, weather effects | WX: relevant for CORTEX variant or future air defense sim. IADCS dome approach = reference architecture |
| P6 | **Combat Readiness Score (CRS)** | Subjective instructor evaluation inconsistent | Different instructors give different scores | Digital metric from scientifically measured parameters (IADCS) | WX: lead angle error metric is WX's equivalent. Expand to composite CRS in v2.0 |

### Heuristics Database

| # | Heuristic | Domain | Evidence | Confidence | WX Application |
|---|-----------|--------|----------|:----------:|---------------|
| H1 | AI IOS is 90% software — no expensive HW needed | SW | Stage 2 cross-domain analysis | H | WX ACH Layer 1 = SW investment, not HW |
| H2 | 6-DOF is for ship HANDLING, 2-DOF is sufficient for GUNNERY | MECH | Zen 6-DOF serves helmsman, WX gunner doesn't need heave/surge/sway/yaw | H | Validates WX 2-DOF decision |
| H3 | Recoil force threshold: 50-150N for "authentic feel", ≥25N for "perceptible cue" | MECH | Zen electromech achieves 50-150N, industry literature suggests 25N minimum | M | SS1 PoC target ≥25N justified |
| H4 | 360° cylindrical projection costs 5-8× more than 180° flat 3-screen | ELEC | Cost comparison Zen ($40-80K) vs WX ($8-12K) | M | WX decision validated |
| H5 | Acquiring sim expertise takes ~6 months via acquisition vs 2-3 years building | ORG | Zen ARI acquisition Feb 2025 → FAC Sim announce Sep 2025 = 7 months | H | WX builds internally (longer but owns IP) |
| H6 | AI fog/EW adaptation is IADCS feature, not FAC Sim | SW | NLM corrected: environmental adaptation evidence only for IADCS | H | Don't assume Zen FAC has this — differentiate search |
| H7 | Counter-UAS sim is a standalone product at Zen, not integrated into FAC | SW/PROD | I/ITSEC 2025 lists C-UAS Sim separately from FAC in Naval suite | M | Zen C-UAS may be land-based, not maritime C-UAS. Needs deeper investigation |
| H8 | Product family approach: Mini Bridge → FAC → Cyber Attack → VR Submarine | PROD | Zen/ARI naval suite at I/ITSEC 2025 | H | WX product line (LITE→CORTEX) is more structured. Both validate family approach |

---

## 5C — THREE LAWS EXTRACTION

### Ba Quy Luật — RE: Zen FAC Simulator

### Quy Luật 1: Software-Determines Law — Trong Hệ Mô Phỏng, 90% Giá Trị Nằm Ở Phần Mềm

Phần cứng đắt tiền (6-DOF $30-50K, 360° projection $40-80K, haptic controls $3-5K) chỉ chiếm ~20% kiến trúc hệ thống. Phần mềm chiếm ~48% — và SF quyết định (AI IOS) là 90% phần mềm. Hệ quả: đầu tư vào AI/SW cho ROI cao hơn gấp bội so với đầu tư vào HW đắt tiền hơn.

- **Tại sao đây là quy luật:** Zen đầu tư HW đắt (6-DOF, haptic) nhưng differentiator thật sự là AI IOS — phần mềm thuần. WX có thể match AI quality với 1/10 chi phí HW.
- **Phản trực giác:** Trực giác nói "simulator đắt = tốt hơn" → thực tế: simulator THÔNG MINH = tốt hơn, bất kể giá HW.

### Quy Luật 2: Scope-As-Moat Law — Thu Hẹp Scope = Tạo Pháo Đài Mà Đối Thủ Rộng Không Tấn Công Được

Zen FAC covers 7 training functions (ship handling, gunnery, nav, comms, EO/IR, C2, ASW). WX LITE covers 1 (C-UAS gunnery). Nhưng WX sâu hơn 7× trong 1 function đó — và rẻ hơn 5× vì không phải carry 6 functions khác.

- **Tại sao đây là quy luật:** Đối thủ toàn diện (Zen) không thể strip features để cạnh tranh giá → cannibalize sản phẩm chính. Đối thủ niche (WX) không thể bị tấn công từ trên xuống.
- **Phản trực giác:** "Nhiều tính năng hơn = thắng" → sai trong niche market. "Ít tính năng hơn nhưng sâu hơn + rẻ hơn = pháo đài"

### Quy Luật 3: Acquisition-vs-Build Timing Law — Mua Capability = 7 Tháng, Xây = 3 Năm

Zen mua ARI (Feb 2025) → ra FAC Sim (Sep 2025) = 7 tháng. WX xây CUAV-SIM từ Phase 0 (2026-04) → LITE v1.0 (target Q4 2026) = ~9 tháng. Cả hai approaches work nhưng trade-off khác nhau: Mua = nhanh + risk IP dependency. Xây = chậm + full IP ownership.

- **Tại sao đây là quy luật:** Trong defense, IP ownership > speed. Nhưng nếu market window closing (Zen C-UAS Sim exists), speed matters. CEO phải cân bằng.
- **Phản trực giác:** "Build = always better for sovereignty" → không nếu đối thủ kịp ship trước bạn. Timing quyết định.

---

## 5D — GALAXY CANDIDATES

### Candidate 1: "Software-Determines Law — 90% Giá Trị Mô Phỏng Nằm Ở Phần Mềm"
- **Cluster:** G (Pahl-Beitz Technical) + C (Judgment)
- **Links:** [[Physical-World Interface]], [[Phán đoán không thể uỷ thác cho AI]], [[Niche Fortress Law — Giá Rẻ 3× Tạo Phân Khúc Không Đối Thủ]]
- **3-question gate:** (1) Thay đổi cách thiết kế? YES — invest in SW/AI, not expensive HW. (2) Chiến lược? YES — ACH is the right bet. (3) Cảnh báo? YES — don't over-invest in HW fidelity when AI coaching is the real differentiator.
- **PASS**

### Candidate 2: "Scope-As-Moat Law — Thu Hẹp Scope Tạo Pháo Đài"
- **Cluster:** C (Judgment)
- **Links:** [[Niche Fortress Law — Giá Rẻ 3× Tạo Phân Khúc Không Đối Thủ]], [[Phán đoán không thể uỷ thác cho AI]]
- **3-question gate:** (1) Thay đổi cách thiết kế? YES — design for 1 function deep, not 7 functions shallow. (2) Chiến lược? YES — resist feature creep from "what Zen has". (3) Cảnh báo? YES — adding ship handling training to LITE would DESTROY the moat.
- **PASS** — nhưng có overlap với Galaxy #134 (Niche Fortress Law). Có thể merge?

### Candidate 3: ~~Acquisition-vs-Build Timing Law~~
- **3-question gate:** (1) YES. (2) YES. (3) YES.
- **However:** This is well-known (build vs buy). Not sufficiently unique for Galaxy. The TIMING aspect (7 months vs 3 years) is interesting but specific to Zen's case.
- **FAIL — too generic.** Capture as heuristic (H5) instead.

---

## 5E — CAPABILITY BUILDING MAP

| RE Output | Capability Gained | Sovereignty Contribution | Next RE Target |
|-----------|------------------|------------------------|---------------|
| Stage 1 OSINT architecture | Understanding of 6-DOF + 360° sim system design | None (observation only) | — |
| Stage 2 AI IOS requirements | AI coaching requirement spec for WX ACH | HIGH — defines WX's AI roadmap | Zen IADCS (CRS metric, fog/EW adaptation) |
| Stage 3 Divergence Map | Validated 15 WX design decisions against Zen | HIGH — confidence in WX approach | — |
| NLM notebook (14 sources) | Persistent knowledge base on Zen/ARI | MEDIUM — competitive intel | Zen C-UAS Sim (I/ITSEC 2025) |

### Next Recommended RE Targets

| Priority | Target | Mode | Why |
|:--------:|--------|------|-----|
| 1 | **Zen Counter-UAS Simulation Solution** | TECHNOLOGY | Discovered at I/ITSEC 2025. Need to determine: maritime or land? Integrated with FAC or standalone? Threat to WX niche? |
| 2 | **Zen IADCS (Air Defense Sim)** | MECHA | CRS metric + fog/EW AI adaptation + dome projection = relevant for WX CORTEX variant |
| 3 | **WX Naval Sim (Vega Prime)** | FIELD | 8 systems deployed. WX's OWN naval sim expertise — extract before it's forgotten |

---

## STAGE 5 SUMMARY

```
=== RE MECHA COMPLETE — Zen FAC Simulator ===

Pipeline: Stage 0→1→2→3→5 (skipped 3P+4 — competitive intel, not acquisition)
NLM notebook: re-zenfac (14 sources, 3 queries, conversation 0c363d93)
Duration: 1 session

DELIVERABLES:
1. RE_ZenFAC_S1_Deconstruction_2026-04-20.md — 24 components, 4-domain
2. RE_ZenFAC_S2_Decode_2026-04-20.md — 33 reqs, 15 SFs, AI=solution-determining
3. RE_ZenFAC_S3_Reconstruct_2026-04-20.md — Divergence Map (6/8/7/7)
4. RE_ZenFAC_S5_Knowledge_Capture_2026-04-20.md — 3 Laws, 6 patterns, 8 heuristics

KNOWLEDGE CAPTURED:
- Design patterns: 6 reusable (Acquire-Don't-Build, AI Instructor Multiplier, Multi-Sim Complex, Modified Real Weapon, Dome Projection, CRS)
- Heuristics: 8 (AI=90% SW, 2-DOF sufficient for gunnery, recoil ≥25N threshold, etc.)
- Three Laws: Software-Determines, Scope-As-Moat, Acquisition-vs-Build Timing
- Galaxy candidates: 1 PASS (Software-Determines), 1 MERGE candidate (Scope-As-Moat → merge with #134 Niche Fortress), 1 FAIL (too generic)

COMPOUND VALUE:
- Patterns reusable for: CUAV-SIM Phase 3, future CORTEX design, VN-USV autonomy sim
- Heuristics applicable to: all WX sim products (Naval Sim, future upgrades)
- Three Laws: inform all WX product design decisions (SW-first, scope-as-moat)

WX CUAV-SIM PHASE 3 ACTIONS (from complete RE):
1. SS1 recoil ≥25N — CRITICAL (PoC 2026-05-07)
2. ACH Layer 1 in v1.0 — HIGH (Zen already shipped AI IOS)
3. Ocean rendering quality — HIGH (competitive)
4. Basic AAR in v1.0 — MEDIUM (Zen IADCS has AAR+CRS)
5. MWI NFC prototype — MEDIUM (WX-unique differentiator)
6. Monthly Zen watch — ACTIVATED (C-UAS Sim discovery)

CEO: approve Stage 5 + Galaxy candidates?
```
