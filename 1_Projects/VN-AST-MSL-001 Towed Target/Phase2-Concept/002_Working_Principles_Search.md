---
created: 2026-03-08
updated: 2026-03-08
type: working-principles
status: draft
document-id: VN-AST-MSL-001-WP-001
version: "1.0"
tags: [#type/project, #status/active]
---

# WORKING PRINCIPLES SEARCH — VN-AST-MSL-001 "THANH TRI"

| | |
|--|--|
| **Phase** | 2 — Conceptual Design |
| **Date** | 2026-03-08 |
| **Status** | Draft — awaiting CEO review |
| **Method** | Literature, competitor analysis, cross-domain, DMIR reference |

---

## Search Strategy

Focused on 10 key sub-functions that drive concept differentiation. SF-06/07/12 (electrical) are COTS-driven with minimal variant space. SF-09/10/11/14 are lifecycle functions whose solutions follow from primary SF choices.

**Sources used:**
1. Naval architecture references (DNV, IMO guidelines)
2. Competitor products (ASTRO Systems KillFLASH, Meggitt Hammerhead, BAE Helo Towed Target)
3. Cross-domain (oil & gas buoys, navigation marks, offshore platforms)
4. DMIR reverse-engineered conceptual design (VN-AST-MSL-001-CD-001 v1.0)
5. Galaxy notes: RCS Scaling Law, Foam-Filled HDPE, Trihedral Corner Reflector, 6-Fold Symmetry, Mooring Weight Trap

---

## SF-01: Phản xạ sóng radar (RCS ≥ 1,000 m², X-band, ≥ 330° azimuth)

| # | Working Principle | Physical Effect | TRL | Est. Cost (M VND) | Local Content | Advantages | Disadvantages |
|---|-------------------|----------------|:---:|:-----------------:|:------------:|------------|---------------|
| WP-01.1 | **Trihedral corner reflector array** | Triple-bounce retroreflection | 9 | 50-100 | ≥ 80% | Proven, simple fabrication (Al sheet), high RCS per unit, passive | Directional per unit → need array for omni; large size for 1,000 m² (edge ~1.0m per unit) |
| WP-01.2 | **Octahedral cluster reflector** | 8 trihedral corners in sphere | 8 | 100-200 | ≥ 60% | Near-omnidirectional from single unit, standard naval use | Heavy (15-30 kg/unit), limited RCS per unit (~100 m² for 0.5m), need multiple |
| WP-01.3 | **Luneburg lens** | Graded-index spherical lens | 7 | 300-500 | ≤ 20% | True omnidirectional, compact | Very expensive, heavy (50+ kg), fragile, not available locally |
| WP-01.4 | **Flat plate array** | Specular reflection | 9 | 30-60 | ≥ 90% | Cheapest, simplest fabrication | Very narrow beam per plate, needs many plates, low RCS unless large |
| WP-01.5 | **Dihedral + trihedral combination** | Corner + edge reflection | 8 | 60-120 | ≥ 70% | Good elevation coverage, supplements trihedral gaps | More complex mounting, mixed RCS pattern |

**Analysis:**
- RCS ≥ 1,000 m² at X-band requires either ~8-12 trihedral reflectors with edge ≈ 0.8-1.0m (Galaxy: RCS Scaling Law — σ = 12πa⁴/λ²), or many more smaller units.
- Trihedral array (WP-01.1) is dominant solution in competitor products and naval practice.
- Luneburg lens eliminated on cost and local content.
- **Recommended for matrix:** WP-01.1 (trihedral array), WP-01.2 (octahedral), WP-01.4 (flat plate), WP-01.5 (dihedral+trihedral)

---

## SF-02: Cung cấp sức nổi (Buoyancy SF ≥ 2.0, chống chìm)

| #       | Working Principle               | Physical Effect                         | TRL | Est. Cost (M VND) | Local Content | Advantages                                            | Disadvantages                                                                   |
| ------- | ------------------------------- | --------------------------------------- | :-: | :---------------: | :-----------: | ----------------------------------------------------- | ------------------------------------------------------------------------------- |
| WP-02.1 | **HDPE pipe ring, foam-filled** | Archimedes, closed-cell foam redundancy |  8  |      80-150       |     ≥ 90%     | Unsinkable, corrosion-free, weldable PE, local supply | Heavy foam, HDPE welding requires equipment, limited shapes                     |
| WP-02.2 | **Steel pontoon barge**         | Archimedes, welded sealed compartments  |  9  |      200-400      |     ≥ 95%     | High payload, proven, any shape, local fabrication    | Corrosion (needs coating), heavy, expensive, not unsinkable without foam        |
| WP-02.3 | **GRP (fiberglass) hull**       | Archimedes, composite shell             |  8  |      150-300      |     ≥ 70%     | Light, corrosion-free, good shape freedom             | Mold cost, skilled labor, harder to repair in field                             |
| WP-02.4 | **Modular COTS pontoon array**  | Archimedes, multiple sealed units       |  9  |       40-80       |     ≤ 30%     | Cheapest, fastest, replaceable units                  | Low individual buoyancy, many connections, not foam-filled → sinks if punctured |
| WP-02.5 | **Concrete/ferrocement barge**  | Archimedes, cement composite            |  7  |      100-200      |     ≥ 95%     | Very cheap materials, local, corrosion resistant      | Very heavy, poor weight:buoyancy ratio, difficult to transport                  |

**Analysis:**
- Need ~8,000+ kg buoyancy for 5,000 kg dry weight + SF 2.0.
- HDPE foam-filled (WP-02.1) = Galaxy insight (Foam-Filled HDPE note). Unsinkable is a D-requirement (R-B04).
- Steel (WP-02.2) traditional but corrosion + weight penalty.
- COTS pontoons (WP-02.4) cheapest but fail R-B04 (chống chìm khi thủng).
- **Recommended for matrix:** WP-02.1 (HDPE foam), WP-02.2 (steel), WP-02.3 (GRP), WP-02.4 (COTS pontoon)

---

## SF-03: Duy trì ổn định (GM ≥ 0.5m, including under tow SS 5)

| # | Working Principle | Physical Effect | TRL | Est. Cost (M VND) | Local Content | Advantages | Disadvantages |
|---|-------------------|----------------|:---:|:-----------------:|:------------:|------------|---------------|
| WP-03.1 | **Wide circular waterplane** | Large Ixx → high BM | 8 | Included in hull | — | Omnidirectional stability, inherent GM | Large footprint, transport challenge |
| WP-03.2 | **Outrigger pontoons** | Increase Ixx via offset buoyancy | 8 | +30-60 | ≥ 80% | Very high GM, can fold for transport | Complexity, tow drag increase, wave slamming on arms |
| WP-03.3 | **Low COG design (ballast)** | Reduce KG → increase GM | 9 | +10-30 | ≥ 95% | Simple, proven | Adds weight → more buoyancy needed, conflicts with transport |
| WP-03.4 | **Multi-hull (catamaran/trimaran)** | Widely spaced hulls → very high BM | 8 | +50-100 | ≥ 70% | Extremely stable, good deck area | Complex structure, tow stability uncertain, expensive |

**Analysis:**
- GM ≥ 0.5m is easily achievable with any wide hull. The real challenge is GM > 0.3m **under tow at SS 5** (asymmetric loading).
- Circular waterplane (WP-03.1) gives omnidirectional stability but needs diameter ≥ 5m.
- Outriggers (WP-03.2) from DMIR reference: Galaxy note 6-Fold Symmetry.
- **Tow stability** is the differentiator — low tow point + symmetric hull favored.
- **Recommended for matrix:** WP-03.1, WP-03.2, WP-03.3, WP-03.4

---

## SF-04: Giữ vị trí trên biển (Mooring design load 125 kN, depth ≥ 50m)

| # | Working Principle | Physical Effect | TRL | Est. Cost (M VND) | Local Content | Advantages | Disadvantages |
|---|-------------------|----------------|:---:|:-----------------:|:------------:|------------|---------------|
| WP-04.1 | **Drag anchor + chain catenary** | Gravity + friction + catenary spring | 9 | 30-80 | ≥ 90% | Proven, simple, local supply | Heavy chain at 50m (Galaxy: Mooring Weight Trap), large watch circle |
| WP-04.2 | **Drag anchor + chain/nylon hybrid** | Gravity + friction + nylon elasticity | 8 | 40-100 | ≥ 80% | Lighter than all-chain (Option D: 1,440 kg), shock absorption | Nylon chafe at seabed interface, inspection needed |
| WP-04.3 | **Helix/screw anchor** | Mechanical interlock with soil | 7 | 60-120 | ≥ 60% | High holding per weight, small watch circle | Needs installation equipment, soil-dependent, recovery difficult |
| WP-04.4 | **Concrete sinker (deadweight)** | Gravity only | 9 | 20-40 | ≥ 95% | Simplest, cheapest, any seabed | Very heavy (3-5 tấn for 125 kN), transport/deployment difficult |
| WP-04.5 | **Multi-point spread mooring** | Load distribution across 2-3 anchors | 8 | 80-150 | ≥ 80% | Smallest watch circle, highest holding | Complex deployment, 2-3x anchor cost, tangling risk |

**Analysis:**
- 125 kN design load at 50m depth → chain weight trap is real (Galaxy #51).
- All-chain catenary at 50m = ~2,500 kg chain alone → conflicts with deployment logistics.
- Chain/nylon hybrid (WP-04.2) from RESEARCH: Option D = 1,440 kg total, saves 1,060 kg.
- Helix anchor (WP-04.3) from DMIR: good but needs specialized equipment.
- Single-point mooring baseline (watch circle ≤ 50m meets R-D05).
- **Recommended for matrix:** WP-04.1, WP-04.2, WP-04.3, WP-04.4

---

## SF-05: Chịu tải môi trường (SS 4 operational, SS 5-6 survival, 5 yr life)

| # | Working Principle | Physical Effect | TRL | Est. Cost (M VND) | Local Content | Advantages | Disadvantages |
|---|-------------------|----------------|:---:|:-----------------:|:------------:|------------|---------------|
| WP-05.1 | **HDPE structure** | Polymer — corrosion immune, UV-stabilized | 8 | Included in hull | ≥ 90% | Zero corrosion maintenance, flexible (absorbs impact), 20+ yr life | Lower stiffness, creep under sustained load, UV additives needed |
| WP-05.2 | **Marine-grade steel (hot-dip galvanized)** | Metal — high strength, coated | 9 | Included in hull | ≥ 95% | High strength, proven in naval, easy to weld, local | Corrosion (5-10 yr coating life), heavy, maintenance required |
| WP-05.3 | **Aluminum 5083/6061** | Metal — lightweight, natural oxide layer | 9 | Included in hull | ≥ 60% | Light, good corrosion resistance, weldable | Expensive, specialized welding (TIG), fatigue-sensitive |
| WP-05.4 | **GRP/composite** | Fiber-reinforced polymer | 8 | Included in hull | ≥ 60% | Light, corrosion-free, moldable | Mold cost, skilled labor, difficult field repair |

**Note:** This SF is strongly coupled with SF-02 (material selection for hull = material for structure).

---

## SF-08: Cho phép vận chuyển (≤ 3 modules, fit xe tải, ≤ 5T crane)

| # | Working Principle | Physical Effect | TRL | Est. Cost (M VND) | Local Content | Advantages | Disadvantages |
|---|-------------------|----------------|:---:|:-----------------:|:------------:|------------|---------------|
| WP-08.1 | **Bolted flanged joints** | Mechanical clamping | 9 | +10-20 | ≥ 95% | Repeatable, no special tools, field assembly | Seal integrity, bolt fatigue, corrosion |
| WP-08.2 | **Pin + clevis connections** | Pin shear joints | 9 | +10-20 | ≥ 95% | Fast connect/disconnect, high shear capacity | Wear, alignment critical |
| WP-08.3 | **Fold-down/hinged structure** | Mechanical hinge + lock | 7 | +20-40 | ≥ 80% | No disassembly needed, fast deploy | Hinge reliability, added weight, complexity |
| WP-08.4 | **Integral (no disassembly)** | Monolithic structure | 9 | 0 | — | Strongest, simplest, no joints | Transport limited to overall dimensions → likely exceeds 2.4m |

**Analysis:**
- RCS ≥ 1,000 m² drives reflector size (edge ~1.0m) → overall height ≥ 3.5m.
- If hull diameter > 2.4m → must disassemble for transport.
- WP-08.1 (bolted) is baseline for Pahl-Beitz "division of tasks" principle.
- Fold-down (WP-08.3) interesting for reflectors specifically.
- **Recommended for matrix:** WP-08.1, WP-08.2, WP-08.3

---

## SF-13: Chịu kéo ra (64 kN bridle, SS 5, RCS intact)

| # | Working Principle | Physical Effect | TRL | Est. Cost (M VND) | Local Content | Advantages | Disadvantages |
|---|-------------------|----------------|:---:|:-----------------:|:------------:|------------|---------------|
| WP-13.1 | **V-bridle (2-point bow)** | Load split to 2 hull points, 37 kN/point | 8 | +15-30 | ≥ 90% | Balanced load, directional control, simple | 2 reinforced points, bridle rigging |
| WP-13.2 | **Single towing eye (center bow)** | Single point, 64 kN | 9 | +10-20 | ≥ 95% | Simplest, proven | All load on 1 point, platform yaws more |
| WP-13.3 | **Towing notch/horn** | Integrated hull feature with wear plate | 7 | +20-40 | ≥ 80% | Low snag risk, clean force path | Requires specific hull form, more fabrication |
| WP-13.4 | **Through-hull tow bar** | Structural member through hull, load to keel | 8 | +20-40 | ≥ 85% | Very strong, low COG tow point → stable | Hull penetration (waterproofing), weight |

**Analysis:**
- V-bridle (WP-13.1) recommended in RESEARCH analysis: 37 kN/point manageable.
- Single eye (WP-13.2) simplest but 64 kN at one point → heavy reinforcement.
- Tow stability (R-J02) favors low tow point → WP-13.4 interesting but complex.
- For a blunt hull (L/B ≈ 1), directional stability under tow is challenging regardless.
- **Recommended for matrix:** WP-13.1, WP-13.2, WP-13.4

---

## SF-04 × SF-13 Coupling: Mooring-Towing Interface

**Key insight:** Mooring attachment (125 kN) is ~2x towing load (64 kN). If mooring and towing share the same structural attachment points, the structure sized for mooring automatically satisfies towing. This creates a design opportunity to combine SF-04.1 and SF-13.1 into shared reinforced hard points.

| Approach | Description | Pro | Con |
|----------|-------------|-----|-----|
| **Shared points** | Same hull reinforcement for mooring + towing | Weight savings, fewer penetrations | Can't tow while moored (obvious), load paths differ in direction |
| **Separate points** | Dedicated tow + dedicated mooring | Clean separation of function | More weight, more hull reinforcements |

**Recommendation:** Shared structural reinforcement, separate attachment hardware (mooring shackle vs tow bridle).

---

## Summary: Key Working Principles per Sub-Function

| SF | Primary WP for Matrix | Count |
|----|----------------------|:-----:|
| SF-01 RCS | Trihedral array, Octahedral, Flat plate, Dihedral combo | 4 |
| SF-02 Buoyancy | HDPE foam, Steel, GRP, COTS pontoon | 4 |
| SF-03 Stability | Wide circular, Outrigger, Low COG, Multi-hull | 4 |
| SF-04 Mooring | Drag+chain, Chain/nylon hybrid, Helix, Concrete sinker | 4 |
| SF-05 Structure | HDPE, Steel galv, Aluminum, GRP | 4 |
| SF-08 Transport | Bolted flange, Pin/clevis, Fold-down | 3 |
| SF-13 Towing | V-bridle, Single eye, Through-hull bar | 3 |
| **Total** | | **26** |

---

*Working Principles Search v1.0 | VN-AST-MSL-001 | HELIX Phase 2*
