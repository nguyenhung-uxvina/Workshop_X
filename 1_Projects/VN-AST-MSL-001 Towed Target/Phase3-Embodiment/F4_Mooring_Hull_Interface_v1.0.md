---
created: 2026-03-08
updated: 2026-03-08
type: embodiment-design
document_id: VN-AST-MSL-001-F4-IF-001
version: "1.0"
status: active
subsystem: F4 — Mooring System
tags: [#type/embodiment, #status/active]
source: "/research v2.1 — HDPE Hull Mooring Interface (18 sources)"
decision: "Option (e) Through-Hull Chain Pipe — CEO confirmed 2026-03-08"
---

# F4 Mooring Hull Interface — Through-Hull Chain Pipe

## 1. Design Decision

**Selected:** Option (e) — Through-Hull Chain Pipe + Backing Plate Sandwich
**Decision date:** 2026-03-08
**Decision basis:** /research v2.1 (18 sources: 4S + 4A + 5B + 5C), NLM cross-source synthesis
**OI-4 Status:** RESOLVED

### Why Option (e)?
- HDPE stays in **compression only** at all attachment points → **ESC risk = 0**
- Steel pipe carries all chain load through hull, not HDPE
- Backing plates distribute bolt clamping over large area
- Proven in commercial HDPE marine vessels (Tideman Marine, IRClass Rev.1)

### Alternatives Rejected

| Option | Reason Rejected |
|--------|----------------|
| (a) Embedded steel plate welded into hull | Stiffness mismatch, stress concentrator |
| (b) Through-bolted backing plate only | Tensile loading on HDPE → ESC risk |
| (c) External clamp bracket | Corrosion risk, maintenance burden |
| (d) Extrusion-welded HDPE padeye | Permanent tension = ESC guaranteed |

## 2. Assembly Cross-Section

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

## 3. Design Rules (7 Mandatory)

| # | Rule | Rationale | Source |
|---|------|-----------|--------|
| DR-1 | HDPE in **compression only** at all attachment points | ESC only occurs under tensile stress | PMC/MDPI S-tier |
| DR-2 | Welded HDPE compression tubes through foam at each bolt location | Prevents foam crush, transfers bolt clamp to hull skins | IRClass Rev.1 S-tier |
| DR-3 | 316SS backing plates: ≥10× bolt diameter, ≥0.5× bolt thickness | Load distribution on soft material | Practical Sailor + IRClass |
| DR-4 | Backing plate edges: tapered, rounded corners (no sharp edges on HDPE) | Stress concentration prevention | PPI TN-38 S-tier |
| DR-5 | Steel chain pipe with welded flanges top/bottom | Structural load path bypasses HDPE entirely | Tideman Marine A-tier |
| DR-6 | UHMWPE or nylon wear pads at chain contact surfaces | Chafe protection | NLM synthesis |
| DR-7 | No adhesive as structural bond — mechanical clamping only | Low surface energy + ESC risk from solvents | INEOS + ABG Technical |
| DR-8 | Belleville washers on all bolts + slotted holes (1 fixed + rest slotted) | CTE mismatch 6-12×: 0.5-1.1mm differential per 200mm per 30°C | ALLVAR + Becht engineering |

## 4. Material Specification

| Component | Material | Grade | Note |
|-----------|----------|-------|------|
| Chain pipe | Stainless steel | AISI 316 / 316L | Marine grade, welded flanges |
| Backing plates (top/bottom) | G10 fiberglass OR SS316 | — | NOT HDPE (creeps under bolt load) |
| Hull penetration tubes | HDPE | Same as hull | Extrusion welded to hull skins |
| Wear pads | UHMWPE | 10-15mm thick | At chain contact points, 6× wear resistance of steel, 10+ year life |
| Bolts | SS316 | M12–M16 TBD | Torque per PPI TN-38 |
| Belleville washers | SS316 | To match bolt size | CTE mismatch compensation (HDPE 120-200 vs SS316 16 µm/m·°C) |
| Sealant (non-structural) | Polyurethane | Sikaflex 291 or equiv. | Sealant only, NOT adhesive bond |

## 5. Installation & Maintenance

### Installation Sequence
1. Core out foam at chain pipe location
2. Extrusion-weld HDPE compression tubes through foam at bolt holes
3. Insert 316SS chain pipe through hull
4. Place top and bottom backing plates with UHMWPE wear pads
5. Bolt through with SS316 fasteners — torque per PPI TN-38
6. Seal pipe-hull interface with polyurethane sealant

### Maintenance Schedule
| Action | Interval | Note |
|--------|----------|------|
| Re-torque bolts | After 4 hours of first installation | HDPE cold-flow / creep relaxation |
| Re-torque bolts | Every 6 months | Ongoing creep compensation |
| Inspect UHMWPE wear pads | Every 6 months | Replace if >2mm worn |
| Inspect chain pipe for corrosion | Annually | 316SS in saltwater |
| Check hull skin around penetration | Annually | Visual for crazing (ESC indicator) |

## 6. Open Items for Phase 3 Completion

| # | Item | Priority | Owner |
|---|------|----------|-------|
| 1 | Chain pipe ID/OD sizing (match chain dia) | High | AI |
| 2 | Bolt pattern layout (4-bolt or 6-bolt flange) | High | AI |
| 3 | Backing plate FEA or hand calc (bearing stress) | Medium | AI |
| 4 | Foam compression tube length calc | Medium | AI |
| 5 | Torque value from PPI TN-38 for selected bolt size | Medium | AI |
| 6 | Prototype: weld test of HDPE compression tube to hull skin | High | CEO |

## 7. Galaxy Links

Design informed by these permanent notes:
- [[ESC Tension Rule — HDPE Chỉ Nứt Khi Kéo Không Nứt Khi Nén]]
- [[Backing Plate Rule — 10x Bolt Dia Trên Vật Liệu Mềm]]
- [[Through-Hull Compression — Bypass ESC Bằng Cách Giữ HDPE Trong Nén]]
- [[Foam-Filled HDPE — Thiết Kế Chống Chìm]]
- [[Nylon Derating Cascade — Hệ Số An Toàn Nhân Chồng Ẩn Chi Phí]]
- [[Friction Coefficient Trap — Khi Tiêu Chuẩn Bất Đồng 3 Lần]]

## 8. References

- IRClass Guidelines on Hull Structure of Thermoplastic Vessels Rev.1 (2024) — S-tier
- PPI TN-38: Bolt Torque for Polyethylene Flanged Joints (2021) — S-tier
- PPI Handbook Ch.10: Marine Installations — S-tier
- ESC of HDPE — LEFM (PMC/MDPI 2022) — S-tier
- Tideman Marine — Custom HDPE Hulls — A-tier
