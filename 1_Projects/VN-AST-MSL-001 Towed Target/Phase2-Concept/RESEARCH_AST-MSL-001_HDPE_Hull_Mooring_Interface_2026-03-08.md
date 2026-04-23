---
created: 2026-03-08
source: research-pipeline-v2
notebook: hdpe-mooring
topic: "HDPE Hull Mooring Interface — Attachment Methods for VN-AST-MSL-001"
type: nlm-output
status: inbox
tags: [#type/nlm-output, #status/inbox, #topic/electronics, #topic/technology]
source_quality:
  tier_s: 4
  tier_a: 4
  tier_b: 5
  tier_c: 5
  pro_ratio: "44%"
sources_analyzed:
  - title: "IRClass Guidelines on Hull Structure of Thermoplastic Vessels Rev.1 (2024)"
    tier: S
    url: "https://www.irclass.org/media/7469/guidelines-on-hull-structure-of-thermoplastic-vessels-provisional-_rev1_sept-2024.pdf"
  - title: "PPI TN-38: Bolt Torque for Polyethylene Flanged Joints (2021)"
    tier: S
    url: "https://www.plasticpipe.org/common/Uploaded%20files/Technical/PPI-TN-38.pdf"
  - title: "PPI Handbook Ch.10: Marine Installations"
    tier: S
    url: "https://plasticpipe.org/common/Uploaded%20files/1-PPI/Manuals-Design%20Guides/Handbook%20of%20PE%20Pipe/SECOND_EDITION_HANDBOOK_OF_PE_PIPE_2008/Chapter_10_-_Marine_Installations/Chapter%2010%20-%20Marine%20Installations.pdf"
  - title: "Environmental Stress Cracking of HDPE — LEFM (PMC/MDPI 2022)"
    tier: S
    url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC9228290/"
  - title: "A Research on Design and Production of HDPE Boat Structural Elements"
    tier: A
    url: "https://www.researchgate.net/publication/375998690"
  - title: "Study of Structural Design of Polyethylene Pleasure Boat"
    tier: A
    url: "https://www.researchgate.net/publication/263649201"
  - title: "Fasteners For PE Sheets: Thread Types, Inserts, Pull-Out Strength"
    tier: A
    url: "https://uhmwpe-manufacturer.com/fasteners-for-pe-sheets-thread-types-inserts-and-pull-out-strength/"
  - title: "Tideman Marine — Why HDPE (Custom Hulls)"
    tier: A
    url: "https://tideman-marine.com/custom-hulls/"
  - title: "How Big Does a Backing Plate Need to Be? (Practical Sailor)"
    tier: B
    url: "https://www.practical-sailor.com/boat-maintenance/how-big-does-a-backing-plate-need-to-be/"
  - title: "The Critical World of Backing Plates (BoatUS)"
    tier: B
    url: "https://www.boatus.com/expert-advice/expert-advice-archive/2020/september/the-critical-world-of-backing-plates"
  - title: "Mounting Hardware on Rotomolded Hull (Sailing Anarchy)"
    tier: B
    url: "https://forums.sailinganarchy.com/threads/mounting-hardware-on-rotomolded-hull.195081/"
  - title: "ESCR of HDPE (ABG Technical)"
    tier: B
    url: "https://abg-geosynthetics.com/technical/geosynthetic-properties/durability-escr-environmental-stress-crack-resistance-of-hdpe/"
  - title: "ESCR of PE (INEOS Technical Bulletin)"
    tier: B
    url: "https://www.ineos.com/globalassets/ineos-group/businesses/ineos-olefins-and-polymers-usa/products/technical-information--patents/ineos-environmental-stress-crack-resistance-of-pe.pdf"
  - title: "Hulls Made of HDPE (Boat Design Net)"
    tier: C
    url: "https://www.boatdesign.net/threads/hulls-made-of-hdpe.7683/"
  - title: "Strength Analysis of Recycled HDPE (Legacy HDPE)"
    tier: C
    url: "https://legacyhdpe.com/strength-analysis-of-recycled-hdpe-in-boat-construction/"
  - title: "Starboard as Backing Plate? (Sailing Anarchy)"
    tier: C
    url: "https://forums.sailinganarchy.com/threads/starboard-as-backing-plate.172693/"
  - title: "HDPE Boats Rules and Regulations (Boat Design Net)"
    tier: C
    url: "https://www.boatdesign.net/threads/hdpe-boats-rules-and-regulations.52807/"
  - title: "Backing Plate Material and Adhesive (JetBoaters)"
    tier: C
    url: "https://jetboaters.net/threads/backing-plate-material-and-adhesive.32863/"
---

# RESEARCH: HDPE Hull Mooring Interface — VN-AST-MSL-001

> **Design Question:** How should VN-AST-MSL-001 attach a permanent single-point mooring to its foam-filled HDPE hull to withstand wave, current, and towing loads without ESC, creep failure, or chafing?
>
> **Context:** This was flagged as an UNANSWERED GAP from the OI-04 mooring research — ALL standards address fairleads and chain stoppers for steel/concrete hulls. NO source provided guidance on attaching high-tension mooring to a relatively soft HDPE plastic hull.

---

## Analysis

### Insight 1: ESC Only Occurs in Tension — Compression is Safe
- **Source tier:** S (PMC/MDPI paper, ABG Technical, INEOS)
- **Confidence:** ★★★ HIGH
- **Cross-validated by:** All 18 sources agree
- **Detail:** Environmental Stress Cracking (ESC) is a brittle failure that occurs ONLY when HDPE is under constant tensile stress — even at loads well below yield strength. ESC does NOT occur when HDPE is in compression. This is the single most important design principle for mooring attachment: **design the interface to keep HDPE in compression, not tension.**
- **Mechanism:** Stress cracking agents (surfactants, seawater contaminants) lower cohesive forces maintaining tie molecules in crystallites, facilitating "pull-out" and disentanglement from lamellae. Accelerated by: UV, high temperature, cyclic loading, stress concentrations.
- **Galaxy candidate:** YES — "ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo"

### Insight 2: Through-Bolt + Oversized Rigid Backing Plate = Mandatory for Mooring Loads
- **Source tier:** S/A (IRClass, PPI, Practical Sailor, Fastener guide)
- **Confidence:** ★★★ HIGH
- **Cross-validated by:** All tiers unanimous
- **Detail:** Through-bolting with massive backing plates is the ONLY recommended method for safety-critical, high-load joints on HDPE. Sizing rules:
  - Backing plate diameter: ≥ 10× bolt diameter (for cored/foam-filled hulls)
  - Backing plate thickness: ≥ 0.5× bolt diameter
  - Rounded corners: minimum radius 5× bolt diameter
  - Tapered edges to prevent "cookie-cutter" shear effect
  - Material: G10 fiberglass, 316 stainless, or marine-grade aluminum (NEVER HDPE/Starboard)
- **Galaxy candidate:** YES — "Backing Plate Rule — Phân Bổ Tải Trên HDPE"

### Insight 3: Five Attachment Options Ranked for AST-MSL-001
- **Source tier:** S/A/B cross-synthesis (NLM)
- **Confidence:** ★★★ HIGH (synthesis across all sources)
- **Ranking:**

| Rank | Option | Load Capacity | ESC Risk | Complexity | Long-term Reliability |
|------|--------|--------------|----------|------------|----------------------|
| **1** | **(e) Through-hull chain pipe + steel reinforcement ring** | Very High | Very Low (HDPE in compression) | Moderate | Excellent |
| **2** | **(b) External steel fairlead frame + through-bolts + backing plates** | Very High | Low-Med | Moderate | High |
| 3 | (c) HDPE-to-steel transition fittings | High | Low | High (custom fab) | High |
| 4 | (a) Embedded steel plate welded into hull | High | Med-High (stiffness mismatch) | High | Moderate |
| 5 | (d) Extrusion-welded HDPE padeye/bollard | Moderate | **HIGH** (constant tension) | Low | **Poor** |

- **Key insight:** Option (e) wins because it places HDPE strictly in compression — completely bypassing ESC vulnerability. Option (d) is the worst because permanent mooring tension = constant tensile stress = ESC guaranteed.
- **Galaxy candidate:** YES — "Through-Hull Compression — Cách Duy Nhất Neo HDPE An Toàn"

### Insight 4: HDPE Creep Causes Bolt Torque Loss — Re-Torque Required
- **Source tier:** S (PPI TN-38), A (Fastener guide)
- **Confidence:** ★★★ HIGH
- **Detail:** HDPE's viscoelastic nature means bolt clamp load will aggressively relax after installation. PPI limits compressive stress on PE flange faces to 1800 psi, dropping to ~600 psi. Bolts must be:
  - Torqued in 4 incremental stages (2-5% compression of HDPE face thickness)
  - Re-torqued after 4 hours
  - Periodically checked (maintenance schedule required)
- **Galaxy candidate:** NO — too specific, covered by Nylon Derating Cascade concept

### Insight 5: Avoid Hard Points — IRClass Classification Requirement
- **Source tier:** S (IRClass Rev.1 2024)
- **Confidence:** ★★★ HIGH
- **Detail:** IRClass guidelines for thermoplastic vessels explicitly state: "Hard points in the structure are to be avoided where practicable, with stiffening distributed evenly over the hull." This means:
  - No abrupt stiffness transitions (steel insert welded directly to HDPE wall)
  - Backing plates must have tapered edges
  - Load distribution must be as homogeneous as possible
- **Galaxy candidate:** NO — subsumable under Backing Plate Rule

### Insight 6: NEVER Use HDPE as Backing Plate Material
- **Source tier:** B/C confirmed by S principles
- **Confidence:** ★★★ HIGH
- **Cross-validated by:** Practical Sailor testing, JetBoaters forum, material science
- **Detail:** HDPE (including marine-grade Starboard) creeps, distorts, and cracks under compression loads over time. It provides zero protection against flexing and will fail. Starboard manufacturers themselves do not recommend it under compression loads.
- **Galaxy candidate:** NO — covered by Backing Plate Rule

### Insight 7: Adhesive Bonding to HDPE is Unreliable — Contradiction Flag
- **Source tier:** CONTRADICTION between B (forums recommend 3M 5200) and S/A (material science says ESC risk)
- **Confidence:** ★★ MED — needs CEO judgment
- **Detail:** Community sources frequently recommend bedding hardware with marine adhesives (3M 5200, Six10 epoxy). But HDPE has extremely low surface energy → adhesives don't bond well without flame treatment or chemical prep. Worse: some solvents in adhesives can ACT AS stress cracking agents, accelerating ESC.
- **CEO Decision Required:** For AST-MSL-001, rely on **mechanical clamping only** (through-bolts). Use adhesive ONLY as sealant against water intrusion, NOT as structural bond. Flame-treat surface if using G-Flex.

### Insight 8: Fatigue Crack Growth Follows Paris-Erdogan Law
- **Source tier:** S (PMC/MDPI paper)
- **Confidence:** ★★★ HIGH
- **Detail:** Crack propagation rate: da/dt = C · K_I^m. Rate increases exponentially with stress intensity factor. Goes through slow "pre-cracking" phase before accelerating rapidly. Implications for mooring: any initial micro-crack at a bolt hole will grow predictably under cyclic wave loading.
- **Galaxy candidate:** NO — too specialized for Galaxy, reference in design docs

### Insight 9: Foam-Core Compression — CRITICAL UNANSWERED GAP
- **Source tier:** NLM Cross-Source Synthesis (gap identified)
- **Confidence:** ★ LOW — no source addresses this
- **Detail:** NO source provides specific protocols for through-bolting foam-filled HDPE hulls. Applying massive torque to secure a mooring plate could crush the internal foam core. Likely requires welded HDPE compression sleeves (through-tubes) — but this is NOT explicitly detailed in any source.
- **Action Required:** Custom engineering. Design HDPE compression tubes welded through foam core at each bolt location to transfer load directly between inner and outer HDPE skins. This is analogous to "cored deck" practice in fiberglass boats (replace core with solid laminate at load points).

### Insight 10: Chafing Protection — CRITICAL UNANSWERED GAP
- **Source tier:** NLM Cross-Source Synthesis (gap identified)
- **Confidence:** ★ LOW — no source addresses this
- **Detail:** Complete absence of data on protecting soft HDPE hull exterior from abrasive chafing of mooring chains/lines. HDPE is significantly softer than steel or fiberglass. Chain links will cut into HDPE surface over time.
- **Action Required:** Steel or stainless fairlead liner at chain contact points. Consider: UHMWPE wear pad (higher abrasion resistance than HDPE) or nylon fairlead liner (per ScienceDirect low-friction fairlead research).

### Insight 11: Thermal Expansion Mismatch — IGNORED DIMENSION
- **Source tier:** NLM Deep Analysis (identified gap)
- **Confidence:** ★ LOW — no source quantifies this
- **Detail:** Sources recommend bolting large metal plates to HDPE but completely ignore differing coefficients of thermal expansion:
  - HDPE: ~120-200 μm/m·°C
  - Steel: ~12 μm/m·°C
  - Aluminum: ~23 μm/m·°C
  - → 10:1 ratio steel:HDPE, could cause significant shear at attachment during tropical temperature swings
- **Action Required:** Use slotted bolt holes or allow slight movement in non-critical bolt positions. Size primary load-bearing bolts for worst-case thermal differential.

---

## Design Recommendation for VN-AST-MSL-001

**Primary Concept: Through-Hull Chain Pipe (Option E) + Backing Plate Sandwich (Option B hybrid)**

```
                    Mooring Chain
                         │
                    ┌────┴────┐
                    │  Steel   │  ← 316SS fairlead/hawse pipe
                    │  Pipe    │     (welded flange at top)
          ┌────────┼──────────┼────────┐
          │  316SS │          │ 316SS  │  ← Top backing plate (G10 or SS)
          │  plate │  HDPE    │ plate  │     ≥10× bolt dia, tapered edges
          ├────────┼──────────┼────────┤
          │        │  FOAM    │        │  ← Foam core (compressed by HDPE tubes)
          ├────────┼──────────┼────────┤
          │  316SS │  HDPE    │ 316SS  │  ← Bottom backing plate
          │  plate │          │ plate  │
          └────────┼──────────┼────────┘
                   │  Steel   │
                   │  Pipe    │  ← Chain exits to anchor/sinker
                   └────┬────┘
                        │
                   Mooring Line
```

**Key Design Rules:**
1. HDPE in **compression only** at all attachment points
2. Welded HDPE compression tubes through foam at each bolt location
3. 316SS backing plates: ≥10× bolt diameter, ≥0.5× bolt thickness, rounded corners
4. Steel chain pipe with welded flanges top/bottom
5. UHMWPE or nylon wear pads at chain contact surfaces
6. Re-torque bolts after 4 hours, then periodic maintenance schedule
7. No adhesive as structural bond — mechanical clamping only

---

## Galaxy Candidates (THỊNH H — Hóa)

### ★★★/★★ — Ready for Promotion
1. **"ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo, Không Nứt Khi Nén"**
   - Cluster: G (Pahl-Beitz Technical) + H (Physical Design)
   - Links to: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Nylon Derating Cascade]], [[Reliability Trumps Precision]]
   - Source: PMC/MDPI peer-reviewed + INEOS + ABG Technical (★★★)

2. **"Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm"**
   - Cluster: G (Pahl-Beitz Technical)
   - Links to: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Friction Coefficient Trap]], [[VDI 2225 — Sensitivity Analysis]]
   - Source: IRClass S-tier + Practical Sailor B-tier (★★★)

3. **"Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén"**
   - Cluster: H (Physical Design) + G (Pahl-Beitz Technical)
   - Links to: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Design Space Collapse]], [[Mooring Weight Trap]]
   - Source: NLM cross-source synthesis of 18 sources (★★★)

### ★ — Needs Verification Before Galaxy
1. **"Thermal Expansion Mismatch Steel-HDPE"** → potential title: "CTE Mismatch Trap"
   - Missing: quantitative FEA or test data for steel-bolted-to-HDPE under thermal cycling
   - Search suggestion: "thermal expansion coefficient mismatch steel HDPE bolted joint FEA"

2. **"Foam Core Compression Tube"** → potential title: "Compression Tube Rule cho Foam-Core"
   - Missing: specific engineering protocol for HDPE foam-filled hull through-bolting
   - Search suggestion: "foam core through-bolt compression tube HDPE marine construction"

**CEO: which ★★★/★★ candidates to promote to Galaxy? (Core decision)**
**CEO: any ★ insights worth pursuing with targeted search? (Core decision)**

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 18 |
| Tier S (Standards) | 4 |
| Tier A (Authority) | 4 |
| Tier B (Professional) | 5 |
| Tier C (Community) | 5 |
| Pro ratio (S+A/total) | 44% |
| Insights extracted | 11 |
| ★★★ HIGH confidence | 7 |
| ★★ MED confidence | 1 |
| ★ LOW confidence | 3 |
| Galaxy candidates | 3 ready, 2 needs verification |

### Coverage Gaps
1. **Foam-core through-bolting protocol** — no Tier S/A source found
   → Suggested search: "foam core compression sleeve through-bolt marine HDPE construction protocol"
   → Suggested source: Tideman Marine (direct inquiry — they build foam-filled HDPE workboats)
2. **Chafing protection for HDPE exterior** — only Tier C coverage (generic advice)
   → Suggested source: ScienceDirect "Low-friction low-abrasion fairlead liners" paper
3. **Quantitative backing plate sizing formula for HDPE** — no formula specific to HDPE (only FRP rules adapted)
   → Suggested search: "backing plate sizing formula polyethylene hull mooring load calculation"
4. **Thermal expansion mismatch quantification** — no source addresses CTE differential at bolted joints
   → Suggested search: "thermal expansion coefficient mismatch steel HDPE bolted joint analysis"

### Contradiction Requiring CEO Judgment
- **Adhesive bonding to HDPE:** Community says use 3M 5200; material science says ESC risk from solvents.
  → Recommendation: mechanical clamping only, adhesive as sealant with flame-treated surface.

### Recommendation for Next Research
1. Contact Tideman Marine for foam-core bolting protocol (they are the world's leading HDPE boat builder)
2. Search for UHMWPE wear pad specifications for chain fairlead applications
3. Run FEA on CTE mismatch for tropical temperature range (25-60°C deck surface)
