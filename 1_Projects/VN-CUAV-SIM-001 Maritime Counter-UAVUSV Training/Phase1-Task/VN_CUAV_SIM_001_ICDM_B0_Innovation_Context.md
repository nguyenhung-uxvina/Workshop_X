---
created: 2026-04-14
updated: 2026-04-14
type: project
status: active
tags: [#type/project, #status/active, #pahl]
method: ICDM (Hari & Weiss, Technion) — Step 1
mode: RETROACTIVE (Phase 1 done, adding ICDM overlay)
pipeline: helix-task-clarify v3.2 --icdm
block: B0
---

# B0 ICDM: Customer & Innovation Context — VN-CUAV-SIM-001

**Date:** 2026-04-14
**Mode:** RETROACTIVE — ICDM extensions applied to existing Phase 1 deliverables

---

## 1. WTP (Willingness to Pay) Assessment

> **ICDM principle:** Classify product scope into 3 WTP categories to focus requirements on what customers ACTUALLY pay for.

### Customer: Hải quân Việt Nam (MoD procurement via Viettel/direct)

|  WTP Category  | Definition                                             | Requirements in This Category                                                                                                                   | Customer Behavior                               |
| :------------: | ------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------- |
| **Essential**  | Primary reasons customer pays. MUST be met or no sale. | Ballistic accuracy (T-03), latency (S-01), weapon fidelity (G-02, F-01), FOV (G-03), safety (Sa-01→06), GUI tiếng Việt (Er-03), scenarios (O-05→07), sovereignty/offline (L-04) | Customer walks away if ANY Essential is missing |
| **Beneficial** | Secondary needs — customer pays small premium          | Motion platform (K-03→04), AAR replay (T-07), multi-weapon MWI, trainee progression tracking, PDF reports, price ≤$70K (C-01)             | Customer pays $5-10K more for these features    |
| **Luxurious**  | Nice-to-have — customer will NOT pay extra             | Heave motion (K-06), aesthetic OD green paint (M-05), standby power mode (E-05), advanced AI coaching (F5.6), multi-station CORTEX (PA-9)       | Customer says "nice" but won't increase budget  |

### WTP Insight (from FORGE Cost Analysis)

Live-fire alternative costs **$510/h** = **$102K/yr** for 200h training. *(CEO verified)*
→ Customer WTP for simulator = **$50-70K** (payback < 1 year).
→ Essential features must deliver **equivalent training outcome** to live fire.
→ Beneficial features differentiate from competitors (Zen $200-500K).
→ Luxurious features can be future upsell (CORTEX, advanced AI).

---

## 2. Innovation Type Classification

| Dimension | Score (1-5) | Rationale |
|-----------|:----------:|-----------|
| **Technology novelty** | 3 | Core tech (projection, encoders, Unity) = proven. Novel combination: MWI + C-UAV scenario + solenoid recoil + ray-trace scoring. No single component is breakthrough. |
| **Market novelty** | 4 | VN has ZERO maritime C-UAV simulators. Market exists (Zen, L3Harris) but no VN product. First-mover in VN defense. |
| **Business model novelty** | 3 | Product + MAINT-KIT recurring revenue. Standard for defense. Novel: 4-variant product line from shared platform (IRONMESH pattern). |
| **Overall Innovation Level** | **3.3** | **ADAPTIVE INNOVATION** — proven technologies in novel combination for new market segment |

### Innovation Level Implications for ICDM

| Level | Typical ICDM Approach | Our Adaptation |
|-------|----------------------|----------------|
| Level 1-2 (Incremental) | Standard EQFD, low creativity | — |
| **Level 3 (Adaptive)** | **EQFD + focused TRIZ on novel SFs** | **Use EQFD for core, TRIZ for C-UAV specific novelty (target AI, scoring, MWI)** |
| Level 4-5 (Radical) | Heavy creativity, broad exploration | — |

---

## 3. Creativity Readiness Assessment

| Factor | Score (1-5) | Evidence |
|--------|:----------:|---------|
| Cross-functional input | 3 | CEO + 3 chuyên gia: cơ khí, điện tử, phần mềm AI nhúng. Chưa có end-user (xạ thủ) input. Mitigated: CEO has 10yr defense industry experience + field access. |
| External benchmarking | 4 | Reverse Engineering doc: 6 competitors analyzed (Zen, L3Harris, Saab, etc). Reverse Morphological Chart v1.0. 4 deep research reports (90+ sources). |
| TRIZ resources available | 3 | TRIZ 40 principles + Su-field in skill references. Contradictions identified in FORGE. Not yet systematically applied per SF. |
| Design space explored | 4 | Morpho SS1-SS5 complete. 9 variants evaluated. VDI 2225 done. Product line 4 variants. |
| Customer access for validation | 3 | HD128 Hải quân contact exists. No formal VOC yet. Demo planned post-P3. |
| **Overall Creativity Readiness** | **3.3** | **ADEQUATE** — strong benchmarking + morpho, 4-person cross-functional team, weak on end-user input |

### Creativity Gap → Action

| Gap | Impact | Action |
|-----|--------|--------|
| No end-user (xạ thủ) input | Requirements may miss operator ergonomics | V-02/V-05/V-06 validation tests involve real gunners at P3 |
| TRIZ not systematically applied | May miss innovative solutions for novel SFs | Phase 2 BA (frame) should run TRIZ on solution-determining SFs |
| Chưa có phản hồi từ xạ thủ/instructor thực tế | VOC validation pending | Schedule 3-5 phỏng vấn tại HD128 post-PoC |

---

## 4. Collaboration Maturity (ICDM Step 1 Extension)

| Aspect | Score (1-5) | Notes |
|--------|:----------:|-------|
| Internal team integration | 3 | CEO + 3 chuyên gia (cơ khí, điện tử, phần mềm AI nhúng). Triple Helix coverage: MECH ✅, ELEC ✅, SW ✅. CEO coordinates. |
| Supplier engagement | 2 | COTS components identified but no supplier relationships established |
| Customer co-development | 2 | HD128 Hải quân contact exists, no formal co-dev agreement |
| Knowledge management | 4 | IPARAG vault, Galaxy notes, NLM notebooks, structured HELIX pipeline |
| **Overall Collaboration** | **2.8** | **LOW-MED** — 4-person team covers all domains. Gap: supplier + customer engagement. |

> **Team composition:** CEO (systems/mechanical lead) + Chuyên gia cơ khí (manufacturing) + Chuyên gia điện tử (PCB/sensor/actuator) + Chuyên gia phần mềm AI nhúng (Unity/embedded). Team competence IRL upgraded from 2.5 → 3.5.

---

## Summary

| ICDM B0 Output | Value | Feeds Into |
|----------------|-------|-----------|
| WTP Classification | Essential / Beneficial / Luxurious (sovereignty=E, price=B) | BB (tag per requirement) |
| Innovation Level | 3.3 (Adaptive) — CEO approved | BA (EQFD depth calibration) |
| Creativity Readiness | 3.3 (Adequate) — 4-person team | BA (gap-filling actions) |
| Collaboration Maturity | 2.8 (Low-Med — CEO + 3 experts) | BE (IRL scoring) |

---

*Next: Block BA ICDM (EQFD Process)*
