---
created: 2026-03-19
source: research-pipeline-v3
notebook: hdpe-hull
topic: "HDPE Torpedo Hull Construction for Semi-Submersible USV"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #topic/technology, #product]
source_quality:
  tier_s: 10
  tier_a: 3
  tier_b: 6
  tier_c: 0
  pro_ratio: "68%"
sources_analyzed:
  - title: "A Research on Design and Production of HDPE Boat Structural Elements"
    tier: S
    url: "https://www.researchgate.net/publication/375998690"
  - title: "Analysis of tensile and flexural strength of HDPE joints in ship construction"
    tier: S
    url: "https://www.researchgate.net/publication/372202344"
  - title: "Effect of Preheating Parameters on Extrusion Welding of HDPE"
    tier: S
    url: "https://www.mdpi.com/2073-4360/16/21/2992"
  - title: "Analysis and optimization of HDPE pipe butt fusion welding"
    tier: S
    url: "https://www.researchgate.net/publication/396631918"
  - title: "Pressure Hull Design Methods for Unmanned Underwater Vehicles"
    tier: S
    url: "https://www.mdpi.com/2077-1312/7/11/382"
  - title: "IRClass Guidelines on Hull Structure of Thermoplastic Vessels (2021)"
    tier: S
    url: "https://www.irclass.org/media/5537/guidelines-on-thermoplastic-boats.pdf"
  - title: "IRClass Guidelines Rev 1 (Sept 2024)"
    tier: S
    url: "https://www.irclass.org/media/7469/guidelines-on-hull-structure-of-thermoplastic-vessels-provisional-_rev1_sept-2024.pdf"
  - title: "US5517934A — Plastic boat hull roto-molding"
    tier: S
    url: "https://patents.google.com/patent/US5517934"
  - title: "US6325014B1 — Modular boat hull rotomolded PE"
    tier: S
    url: "https://patents.google.com/patent/US6325014"
  - title: "US20020109256A1 — Polymeric watercraft manufacture"
    tier: S
    url: "https://patents.google.com/patent/US20020109256"
  - title: "Tideman Boats — 10 Reasons HDPE"
    tier: A
    url: "https://tidemanboats.com/hdpe-the-new-plastic-10-reasons-to-choose-a-hdpe-workboat/"
  - title: "BK Yacht Design — HDPE Past Present Future"
    tier: A
    url: "https://bkyachtdesign.com/hdpe-the-past-the-present-and-the-future/"
  - title: "Rhino Marine — Manufacturing Process"
    tier: A
    url: "https://www.rhinomarineboats.com/manufacturing-hdpe-work-boats/"
  - title: "boats.com — Plastic Boats Pros/Cons"
    tier: B
    url: "https://www.boats.com/boat-buyers-guide/plastic-boats-advantages-and-disadvantages-of-polyethylene-boat-construction/"
  - title: "Blue Trail Engineering — How to Build ASV/USV"
    tier: B
    url: "https://www.bluetrailengineering.com/post/how-to-build-an-asv"
  - title: "Seahorse Marine Manufacturing (YouTube)"
    tier: B
    url: "https://www.youtube.com/watch?v=G2SVhKSXDos"
  - title: "Wooldridge Rogue HDPE Boat (YouTube)"
    tier: B
    url: "https://www.youtube.com/watch?v=ZBFK43pgHd0"
  - title: "Ocean Green Bay USV Hull"
    tier: B
    url: "https://oceangreenbay.com/usv-hull/"
  - title: "Leister — First HDPE Canal Boat 2025"
    tier: B
    url: "https://www.leister.com/en/Stories/success/2025/08/Making-Waves-First-Ever-HDPE-Canal-Boat-Launched"
---

# RESEARCH: HDPE Torpedo Hull Construction for Semi-Submersible USV

**Research question:** How to construct a 300-500mm diameter HDPE torpedo-shaped hull for VN-USV-SS-001 semi-submersible USV operating in Vietnam coastal waters?

**NLM notebook:** `hdpe-hull` (19 sources) | **Analysis depth:** --deep | **Date:** 2026-03-19

---

## 1. Core Design Principles for HDPE Marine Hulls

### Principle 1: Flooded Hull Preferred for Semi-Sub USV ★★★
- **Source tier:** S + B (academic + Blue Trail Engineering)
- For small USVs that may flip/submerge: fill internal volume with rigid foam for buoyancy
- Electronics in individual waterproof boxes, NOT relying on single hull seal
- Removes single point of failure (hull seal breach = total loss)
- **Galaxy candidate:** YES — "Flooded Hull Principle — Foam Inside, Boxes for Electronics"

### Principle 2: V-Seam Extrusion Welding = Optimal Joint Method ★★★
- **Source tier:** S (academic papers — tensile test data)
- V-seam extrusion welding: UTS = **19.29 MPa**, bending = **37.85 MPa**
- V-seam hot gas welding: UTS = 14.07 MPa (27% weaker)
- X-seam hot gas: UTS = 15.44 MPa
- **Preheating critical:** 260°C optimal. Over 550°C → polymer chains unravel → weak joint
- Process: tack with hot gas → final pass with extrusion welder
- Extrusion welding required for material >6mm thick
- **Galaxy candidate:** YES — "HDPE V-Seam Extrusion Welding — 19 MPa Optimal"

### Principle 3: Temperature Derating Mandatory for Vietnam ★★★
- **Source tier:** S (IRClass standards + academic)
- HDPE softens significantly 20-65°C range
- Shear modulus reduction >80% → permanent deformation under sustained load
- Vietnam tropical: water temp 28-32°C, air 25-45°C, direct sun → hull surface >>45°C
- **MUST use UV-resistant BLACK HDPE** (carbon-filled) to prevent UV brittleness
- Cannot rely on ambient-temperature pipe pressure ratings
- Over-engineer wall thickness OR add internal ring stiffeners
- **Galaxy candidate:** YES — "HDPE Temperature Derating — Vietnam Tropical Penalty"

### Principle 4: Classification Standards Exist ★★★
- **Source tier:** S (IRClass, DNV, BV, TL, KR, CRS)
- IRClass 2021/2024: Guidelines on Hull Structure of Thermoplastic Vessels
- DNV-ST-0342 (2022): Craft rules covering PE materials
- BV NR546 (2022): HDPE structures, panel formulas, welding quality
- ISO 12215 does NOT have PE section — use classification society rules instead
- **Minimum hull thickness for 6-7m vessel: 8.62mm → round to 10-12mm**
- Inner hull ≥ 80% of outer hull thickness
- **For 215mm diameter UUV at 30m depth: minimum 5.08mm wall**
- Compliance: average of 20 measured points ≥ rule thickness, no single point >15% below

### Principle 5: Stiffness Is The Weakness ★★★
- **Source tier:** S + A (cross-validated)
- Industry markets HDPE as "indestructible" — TRUE for impact, FALSE for stiffness
- Low flexural modulus vs FRP/aluminum → needs distributed stiffeners
- Wall must be 5× thicker than aluminum equivalent for same rigidity
- For boat hulls: 15-20mm HDPE vs 4mm aluminum vs 7-9mm FRP
- Aluminum stiffener plates sometimes needed inside HDPE hull

---

## 2. Torpedo-Shaped Hull Specific Challenges

### Challenge 1: Cylindrical Buckling Under External Pressure ★★★
- **Source tier:** S (MDPI — Pressure Hull Design Methods)
- Cylindrical hull collapses at fraction of material yield pressure
- Failure modes: axisymmetric yielding, lobar buckling (shell instability), general instability
- **Must have internal equidistant ring stiffeners + end caps**
- No empirical buckling equations exist specifically for HDPE pipe as pressure hull — RESEARCH GAP

### Challenge 2: Dome/End-Cap Manufacturing ★★★
- **Source tier:** S (academic)
- Thermoforming plastic domes → uneven wall thickness (thinner at center)
- Thin domes → membrane buckling at top
- Thick domes → yielding at flanged base (overturning stress)
- **No source addresses joining thermoformed dome to extruded pipe for semi-sub use** — RESEARCH GAP

### Challenge 3: Internal Mounting in 300-500mm Pipe ★★
- **Source tier:** B (Blue Trail)
- Very tight internal space — how to mount electronics, batteries, ballast system
- No literature on bulkhead/payload mounting inside pre-extruded HDPE pipe
- Risk: stress concentrations from internal attachments compromise hull
- **Galaxy candidate:** NEEDS VERIFICATION

### Challenge 4: HDPE Pipe vs Sheet Construction Decision ★★★
- **Source tier:** S + A (cross-validated)
- **Option A: Extruded HDPE pipe** (500mm diameter available commercially)
  - Pro: seamless cylinder, consistent wall, immediate availability
  - Con: limited to standard diameters, end-cap joining unproven, internal access difficult
- **Option B: CNC-cut HDPE sheets welded into cylinder**
  - Pro: any diameter, custom geometry, proven in boat building
  - Con: weld seams = stress concentrations, more labor, QC needed
- **For VN-USV-SS-001:** Option A (pipe) for lab demonstrator, Option B for production if pipe limits design
- **Galaxy candidate:** YES — "HDPE Pipe vs Sheet — Trade-off for Torpedo Hull"

---

## 3. VN-USV-SS-001 Specific Design Recommendations

### 3.1 Material Selection ★★★
- **PE100 black HDPE** (carbon-stabilized UV protection)
- SDR 11 or SDR 17 pipe for 300-500mm diameter
- Wall thickness: ≥10mm for surface/semi-sub loads (conservative, pending buckling analysis)
- Source: DN500 SDR 11 = 45.4mm wall (massive overkill for semi-sub but available)
- More practical: DN400 SDR 17 = ~23.5mm wall, or DN315 SDR 11 = ~28.6mm

### 3.2 Lab Demonstrator ($140) Approach ★★★
- Use commercial HDPE pipe section (DN315 or DN400, 1-1.5m length)
- Thermoform or machine flat HDPE end caps (simple dish shape)
- Extrusion weld end caps to pipe body
- Fill with rigid foam (flooded hull principle)
- Electronics in waterproof box (IP67 COTS enclosure)
- Test: buoyancy, ballast control, depth hold stability
- **This validates the pipe-as-hull concept before committing to full design**

### 3.3 Welding Specification ★★★
- V-seam extrusion welding for all structural joints
- Preheating: 260°C (±20°C) — never exceed 550°C
- First pass: hot gas tack weld
- Second pass: extrusion weld (full strength)
- QC: visual + 20-point wall thickness measurement per IRClass

### 3.4 Stiffening Strategy ★★
- Internal ring stiffeners every 300-400mm (prevents lobar buckling)
- Material: HDPE rings welded inside OR aluminum rings bolted with compression pads
- End caps: minimum 1.5× wall thickness of cylinder
- Reference: [[Compression Tube Protocol — Truyền Tải Trọng Qua Foam Core]]

---

## 4. Source Contradictions

### Contradiction 1: "Indestructible" vs "Needs Heavy Stiffening"
- **Industry (A):** HDPE is "practically indestructible"
- **Standards (S):** HDPE has low flexural modulus, needs distributed stiffeners, aluminum reinforcement
- **Resolution:** Impact-resistant ≠ structurally stiff. Both are true in different loading modes.

### Contradiction 2: "Lightweight" vs "Thick Walls Required"
- **Industry (A):** HDPE boats are lightweight
- **Academic (S):** 5× thicker than aluminum for same rigidity → can be heavier overall
- **Resolution:** HDPE density is low (0.95 vs aluminum 2.7), but volume needed is much higher. Net weight depends on geometry.

---

## 5. Unanswered Questions (Coverage Gaps)

1. **HDPE pipe buckling equations** — no empirical data for extruded HDPE pipe as semi-sub pressure hull
2. **Dome-to-pipe welding** — no source addresses thermoformed dome joined to extruded pipe
3. **Internal mounting in 300-500mm pipe** — no literature on bulkheads/electronics inside small HDPE pipe
4. **Creep under cyclic semi-submersion** — long-term behavior of HDPE under repeated wet/dry/pressure cycles unknown
5. **Vietnam-specific HDPE suppliers** — no source lists DN400-500 HDPE pipe availability in Vietnam

---

## 6. Galaxy Candidates (THỊNH H — Hóa)

### ★★★ — Ready for Promotion
1. **"HDPE V-Seam Extrusion Welding — 19 MPa Optimal"**
   - Cluster: G (Pahl-Beitz Technical)
   - Links to: [[Foam-Filled HDPE — Thiết Kế Chống Chìm]], [[Through-Hull Compression]]
   - Source: ResearchGate tensile test data — Tier S

2. **"HDPE Temperature Derating — Vietnam Tropical Penalty"**
   - Cluster: H (Physical Design)
   - Links to: [[VN Metocean Design Envelope]], [[CTE Mismatch Rule]]
   - Source: IRClass 2024 + academic — Tier S

3. **"HDPE Pipe vs Sheet — Trade-off for Torpedo Hull"**
   - Cluster: G (Pahl-Beitz Technical) + H (Physical Design)
   - Links to: [[Foam-Filled HDPE]], [[Design Space Collapse]]
   - Source: Cross-validated S + A + B

### ★★ — Medium Confidence
4. **"Flooded Hull Principle — Foam Inside, Boxes for Electronics"**
   - Cluster: H (Physical Design)
   - Links to: [[Foam-Filled HDPE]], [[Reliability Trumps Precision]]
   - Source: Blue Trail (Tier B) + academic inference

---

## 7. Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources found | 27 |
| CEO selected | 19 |
| NLM ingested | 19 (100%) |
| Tier S (Papers) | 5 |
| Tier S (Standards) | 2 |
| Tier S (Patents) | 3 |
| Tier A (OEM) | 3 |
| Tier B (Professional) | 6 |
| Pro ratio (S+A/total) | 68% ✓ |
| ★★★ HIGH confidence | 7 |
| ★★ MED confidence | 2 |
| ★ LOW confidence | 0 |
| Galaxy candidates | 3 ready + 1 medium |

### Patent Landscape
- 3 patents found — ALL expired/abandoned. No FTO concern.
- No active HDPE marine hull patents blocking Workshop X.

### Coverage Gaps
- HDPE pipe buckling under semi-sub pressure — no empirical data
  → Suggested: FEA simulation + lab test with DN400 pipe section
- Vietnam HDPE pipe suppliers — no source
  → Suggested: search Alibaba/local suppliers for DN400-500 PE100 black
- Dome-to-pipe weld reliability — no source
  → Suggested: lab coupon test (part of $140 demonstrator)

### NLM Status
- Notebook: `hdpe-hull` (19 sources, 100% ingested)
- NLM gaps: 0
- Auto-fallback: NO

### Recommendation for Next Research
1. FEA buckling analysis of DN400 HDPE pipe at 0.5-2m depth (semi-sub operating range)
2. Vietnam PE100 pipe supplier survey (DN315-500)
3. HDPE dome thermoforming techniques for small diameter (<500mm)
