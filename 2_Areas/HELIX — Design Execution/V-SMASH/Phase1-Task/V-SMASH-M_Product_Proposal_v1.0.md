---
project: V-SMASH-M
phase: 0
type: product-proposal
prompt: P11
version: 1.0
created: 2026-02-21
status: draft
family: V-SMASH
parent: V-SMASH-L (V-L)
p10_idea: I-02 (Micro-Sight)
---

# V-SMASH-M (Micro-Sight) — Product Proposal (P11)

> **Family position:** Entry-level — below V-L (LITE). Minimum viable AI fire control.

---

## 1. PRODUCT SUMMARY

| Field | Value |
|-------|-------|
| **Product name** | V-SMASH-M (Micro-Sight) |
| **Product code** | V-M |
| **Family position** | Entry-level — below V-L (LITE) |
| **Primary function** | Provide AI-computed lead indicator overlay for engaging moving aerial targets, without automated fire gate |
| **Customer** | Vietnamese Army Logistics Command (mass procurement for infantry units) |
| **End-user** | Infantry soldier — basic rifleman, not specialist |
| **Target market** | Volume equipping of infantry battalions for baseline C-UAS capability |

**One-sentence pitch:** A clip-on AI aiming aid that turns any rifle with a Picatinny rail into a drone-capable weapon — no training beyond "follow the dot."

---

## 2. STRATEGIC FIT

| Factor | Assessment |
|--------|------------|
| **Workshop X capability leveraged** | Same YOLOv8-nano AI core as V-L. Same CMOS pipeline. Simpler housing (no fire gate, no solenoid). |
| **IRONMESH integration** | Optional — V-M can log engagement data via Bluetooth to phone app (IRONMESH LITE), but operates fully standalone. Fleet telemetry is value-add, not core. |
| **R2 loop benefit** | Volume play: V-M drives IRONMESH device count. 1,000 V-M units = 1,000 IRONMESH nodes reporting field data. Data improves AI models for entire V-SMASH family. |
| **Local content strategy** | Housing (100% local, simpler than V-L), PCB assembly (local), battery (local). Imported: CMOS sensor, Jetson module, optics. Target: **75% local**. |
| **ACH thesis** | **Purest ACH expression** — minimum hardware ($300-500 BOM), maximum AI value. Proves AI > hardware. |

---

## 3. PRELIMINARY REQUIREMENTS

| # | Requirement | Target | Source |
|---|-------------|--------|--------|
| 1 | Drone detection range (daylight) | ≥200m | O04 adapted (smaller optic) |
| 2 | Lead indicator accuracy at 150m | ≤1 mrad angular error | O13 adapted |
| 3 | System latency (detection → indicator update) | ≤150ms | O14 adapted (no fire gate) |
| 4 | Weight (with battery) | ≤0.5 kg | Rifle balance constraint |
| 5 | Unit cost | ≤$500 | Mass procurement threshold |
| 6 | Battery life | ≥8 hours continuous | Full patrol duration |
| 7 | First unit delivery | Q4 2026 (12 mo from V-L P4 start) | Fastest family product |
| 8 | **IFF: AI confidence gating** | FR-IFF-01/02/04 (family req — see P10). FR-IFF-03 (civilian proximity) N/A for V-M (no fire gate). | Test + Analysis |

- **Cost target:** ≤$500 unit cost (≤3% of import equivalent)
- **Delivery target:** First unit Q4 2026
- **Key constraint:** Must clip onto existing red dot sight rail position — no dedicated mounting. Soldier carries V-M as supplementary, not primary optic.

---

## 4. WORKING PRINCIPLE OPTIONS (Phase 2 selects)

| Option | Description | Pros | Cons |
|--------|-------------|------|------|
| **A: See-through OLED overlay (Recommended)** | Same as V-L — holographic-style lead indicator on see-through display | Proven in V-L, reuses optical design | Heavier, more expensive optics |
| **B: External LED ring indicator** | LED ring around objective lens — lights up in direction of needed lead | Ultra-simple, ultra-cheap, rugged | Less precise, no magnification, novel UX |
| **C: Smartphone HUD bridge** | V-M streams lead indicator to phone mounted on rail or wrist | Lowest BOM (no display HW), IRONMESH-native | Phone dependency, daylight visibility |

**Recommended: Option A** — proven optics from V-L, de-risks fastest. Option C interesting for V2.

---

## 5. RISK ASSESSMENT

| Category | Level | Top Concern |
|----------|-------|-------------|
| **Technical** | LOW | Core AI pipeline reused from V-L. Risk is miniaturizing housing + optics to ≤0.5 kg. |
| **Schedule** | LOW | 12 months achievable — V-L Phase 4 provides all AI SW, BOM sources, test procedures. V-M is a subset. |
| **Market** | **MEDIUM** | **Cannibalization risk:** if V-M is "good enough," why buy V-L at 6× price? Must segment clearly — V-M = volume equipping, V-L = specialist C-UAS. |

### Kill Condition

Pk at 150m < 25% after 2 tuning iterations. (Target: ≥40%. No fire gate — human trigger timing adds variance. Kill threshold accounts for this.)

Also kill if unit cost > $600 — margin over "no AI" is insufficient for mass procurement.

---

## 6. NEXT STEP

- **If PROCEED:** Phase 1 Task Clarification — derive V-M requirements from V-L list (subset + miniaturization delta) + V-M-specific outcomes (OM01-OM05). ~60-80 requirements.
- **If PAUSE:** Resume after further market validation of Segment B (mass infantry).

---

## Family Dependency (v1.2 — REVISED)

```
V-L (LITE) ─── V-M (Micro)     ← PARALLEL DEVELOPMENT (no blocking gate)
  Shared: YOLOv8-nano, Kalman filter, 3DOF ballistic model (via A-SYNC, non-blocking)
  Delta: no fire gate, smaller optic, lighter housing, reduced detection range
  V-M validates independently — accepts rework risk for faster time-to-market
  Hard boundary: V-M NEVER gets fire gate (that's V-L's differentiator)
```

**v1.2 change (2026-02-21):** DG-8 removed. V-M and V-L are developed in parallel. V-M proceeds through all phases independently. V-L SW core changes propagate to V-M via A-SYNC as non-blocking coordination (V-M incorporates at next session-opening protocol). If V-L prototype reveals AI core issue, V-M is notified — KN decides whether to continue or pause. Estimated rework risk: LOW (V-M is a simpler subset; worst case = 4-6 weeks Phase 3 rework).

**ODI basis:** V-M's Segment B (mass infantry) has the highest opportunity score in the family (OM04=19). Waiting for V-L validation delayed addressing a 10× larger market by ~6 months. See ODI Report v1.1 Section 6.7.
