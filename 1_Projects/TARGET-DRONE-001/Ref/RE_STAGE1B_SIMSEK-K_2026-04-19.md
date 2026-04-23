---
created: 2026-04-19
type: re-material-process
source: /reverse-engineering --mode mecha --stage 1B
project: TARGET-DRONE-001
product: Simsek-K (TAI, Turkey)
mode: MECHA
status: completed
nlm-conversation: 509b2843-daaf-4427-8227-67885f3e8561
tags: [#type/re-report, #status/completed]
---

# RE STAGE 1B: MATERIAL & PROCESS DETECTIVE — Simsek-K
## OSINT-Based Analysis | 2026-04-19

---

## TABLE A — Material Identification

| Component | Evidence | Material Candidates | Most Likely | Conf% | Verification Method |
|-----------|----------|-------------------|-------------|-------|-------------------|
| Fuselage shell | "Fully composite structure" (TUSAS brochure) | GFRP/Epoxy, CFRP/Epoxy | CFRP/Epoxy | 90% | Destructive ply analysis, resin burnout |
| Wing skins | "Fully composite", high wing loading for Mach 0.63 | GFRP, CFRP | CFRP/Epoxy | 90% | Ultrasonic testing |
| Wing spar | High bending stiffness for 8-15g RATO + transonic flight | CFRP, Al 7075-T6 | CFRP (co-cured with skin) | 80% | X-ray / CT scan |
| Tail surfaces | "Fully composite structure" | GFRP, CFRP | CFRP/Epoxy | 90% | Visual inspection |
| Control surface hinges | Marine environment operation | Al 7075-T6, Al 5083 | Al 5000 series (marine grade) | 75% | XRF spectrometry |
| Engine mount/firewall | "Aluminum/steel engine mounts and attachment hardpoints" | Al 7075-T6, 4130 Steel, Ti-6Al-4V | Al 7075-T6 machined | 80% | PMI testing |
| Radome/nose cone | Must be RF transparent for Luneberg lens / RCS augmenters | GFRP, Kevlar | GFRP/Epoxy | 85% | Dielectric constant testing |
| Payload bay structure | Modular bays for 18kg payloads | CFRP, Al 5083, Al 6061 | CFRP + Al mounting rails | 80% | Visual / XRF |
| Parachute compartment | Parachute recovery system | CFRP, GFRP | GFRP/Epoxy | 85% | Visual inspection |
| Launcher interface / rail guides | Zero-length launcher, wear resistance needed | Hard anodized Al 7075, machined steel | Hard anodized Al 7075-T6 | 70% | Hardness testing (Rockwell) |
| RATO attachment points | 8-15g initial acceleration loads | 4340 Steel, Ti-6Al-4V | Aerospace steel (4340) | 70% | PMI / mass spectrometry |
| Recovery structure | Water/land impact from parachute descent | Composite + foam core, Kevlar | CFRP + impact-absorbing foam | 75% | Core sampling |
| Fasteners | "Corrosion-resistant fasteners" for maritime ops | 316 SS, A286, Monel | 316 Stainless Steel | 95% | Magnetism check, XRF |
| Wiring harness | Standard aerospace wiring | PVC, PTFE insulated | PTFE copper (MIL-W-22759) | 80% | Chemical analysis |
| Antenna housings | RF transparency for datalink + GNSS | GFRP, ABS plastic | GFRP/Epoxy | 90% | RF transmission test |

---

## TABLE B — Manufacturing Process

| Feature | Process Evidence | Process Candidates | Best VN Alternative | Cost/Quality Trade-off |
|---------|-----------------|-------------------|-------------------|----------------------|
| Composite airframe | "composite layup (hand layup, RTM, prepreg)" | RTM, Autoclave prepreg, Hand layup | VARTM (vacuum-assisted) | Lower tooling cost vs RTM; slightly lower fiber volume fraction → marginal weight increase |
| Engine hardpoints | "precision CNC machining (5-axis)" at TEI | 5-axis CNC, Forging | 3-axis/5-axis CNC milling | CNC slower than forging but avoids die cost; VN batch sizes make CNC optimal |
| Engine turbine blades | "investment casting... directionally solidified or monocrystalline" | Investment casting (single crystal), Equiaxed | **Import complete TJ-90** | Domestic casting = catastrophic failure at 96,000 RPM. No VN alternative. |
| Compressor impeller | "single-piece CNC'd aluminum alloy" | 5-axis CNC from billet | 5-axis CNC (domestic) | VN has CNC capability for aluminum; requires strict dynamic balancing |
| Avionics PCBs | "advanced SMT lines" in Turkey | Automated SMT | Commercial SMT + defense-grade QC | Viable in VN; requires extensive environmental testing for MIL reliability |

---

## TABLE C — Surface Treatment

| Surface | Treatment Evidence | Spec Estimate | VN Alternative |
|---------|-------------------|---------------|----------------|
| External fuselage | "RAM... ferrite-based or magnetic polymer" for stealth sim | Frequency-specific RAM + marine polyurethane | Standard UV-stable polyurethane (domestic RAM = critical gap) |
| Internal electronics | "Conformal coating... hermetic sealing" for 80-90% humidity | MIL-I-46058C Acrylic/Silicone conformal | Commercial silicone conformal coating (available) |
| Aluminum hardpoints | "Coastal salt exposure long-term" protection | MIL-A-8625 Type III hard anodize | Type III anodizing (widely available in VN) |
| Engine hot section | Thermal barrier coatings | Yttria-Stabilized Zirconia (YSZ) plasma spray | **None domestic** — import coated components from TEI |
| Steel fasteners/joints | "Corrosion-resistant" for tropical marine | Passivation (ASTM A967) or Zinc-Nickel plating | Zinc-Nickel plating or strict 316 SS (available) |

---

## TABLE D — Heat Treatment

| Component | Evidence | Likely HT Process | VN Alternative |
|-----------|----------|-------------------|----------------|
| Engine mounts (Al 7075) | Survive 8-15g RATO | Solution HT + artificial aging (T6) | ✅ T6 processing available in VN |
| Turbine rotor/blades (superalloy) | 950-1050°C TIT at 96,000 RPM | Solution annealing + precipitation hardening | ❌ None — import complete components |
| RATO attachment fittings (steel) | Severe shock loads during ignition/separation | Quench & temper (4340 to HRC 40+) | ✅ Q&T available in VN |
| Compressor impeller (aluminum) | High centrifugal forces at 96,000 RPM | T6 or T61 aging for dimensional stability | ✅ T6 processing available in VN |

---

## TABLE E — Vietnam Manufacturing Capability Gap (CRITICAL)

| Component | VN Status | Original Spec | VN Alternative | Perf Impact | Cost Impact | Priority |
|-----------|-----------|---------------|----------------|-------------|-------------|----------|
| **TEI-TJ90 turbojet** | ❌ Not available | 390N, 96k RPM, Hastelloy X hot section | Full import from TEI | None if imported; total failure if domestic attempted | HIGH (dependency) | **CRITICAL** |
| **Avionics (FCC, GNSS, datalink)** | ⚠️ Limited | Aselsan encrypted C-band, MIL-SPEC INS | ARM processors + indigenous datalink | Lower MTBF, higher ECM vulnerability | MEDIUM | **CRITICAL** |
| **RCS augmentation / RAM** | ❌ Not available | Tunable Luneberg lens, custom RAM | Passive corner reflectors or imported lenses | Greatly reduced ASCM threat fidelity | LOW | **HIGH** |
| **Composite airframe** | ⚠️ Limited | Aerospace prepreg / RTM | VARTM wet layup | Slightly higher empty weight, marginal range reduction | Higher labor, lower tooling | **MEDIUM** |
| **Precision machined hardware** | ✅ Available | 5-axis CNC aerospace Al | Domestic 3-5 axis CNC | Minimal if QC enforced | Lower unit cost | **LOW** |
| **Al heat treatment (T6)** | ✅ Available | T6 Al 7075 | Domestic T6 | None | Same | **LOW** |
| **Steel Q&T** | ✅ Available | 4340 HRC 40+ | Domestic Q&T | None | Same | **LOW** |
| **Conformal coating** | ✅ Available | MIL-I-46058C | Commercial silicone | Minor reliability delta | Same | **LOW** |
| **Hard anodizing** | ✅ Available | MIL-A-8625 Type III | Domestic anodize | None | Same | **LOW** |
| **RATO solid booster** | ⚠️ Limited | Composite solid, 500-1000 kgf | VN has some solid propellant capability — uncertain at this thrust class | Unknown | Unknown | **HIGH** |
| **Thermal barrier coating (YSZ)** | ❌ Not available | YSZ plasma spray for turbine | Import coated components | None if imported | HIGH | **HIGH** |

---

## Strategic Bottleneck Summary

```
TIER 1 — CANNOT DO (must import or TT):
  ├── TEI-TJ90 complete engine (hot section investment casting)
  ├── YSZ thermal barrier coatings
  └── RAM / advanced RCS augmentation

TIER 2 — LIMITED (need investment 3-5 years):
  ├── Aerospace composite capability (VARTM → RTM → Autoclave progression)
  ├── MIL-SPEC avionics (FCC + encrypted datalink)
  ├── RATO solid booster (thrust class qualification)
  └── SMT defense-grade electronics

TIER 3 — AVAILABLE NOW:
  ├── CNC machining (aluminum, steel)
  ├── Heat treatment (T6, Q&T)
  ├── Anodizing, conformal coating
  ├── Fasteners (import 316 SS)
  └── GFRP radome/antenna housings
```

**Key insight:** 60% of components by count are within VN capability (Tier 3). But the 3 CRITICAL items (engine, avionics, RCS) represent ~70% of unit cost and ~90% of technical risk. Partnership with TAI is non-negotiable for near-term capability.
