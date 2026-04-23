---
created: 2026-03-25
source: research-pipeline-v3
notebook: skill-alboat
topic: "Jig/fixture/strongback setup for plate-first aluminum V-hull 8m"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active]
source_quality:
  tier_s: 0
  tier_a: 4
  tier_b: 4
  tier_c: 3
  pro_ratio: "36%"
sources_analyzed:
  - title: "Kevin Morin: Metal Boatbuilding Notes (86+ posts)"
    tier: A
    url: "https://glenlforum.com/phpBB2/viewtopic.php?t=27976"
  - title: "Kasten Marine: Frames First or Plating First?"
    tier: A
    url: "https://www.kastenmarine.com/frames_first.htm"
  - title: "Kasten Marine: Welding Sequence Strategy"
    tier: A
    url: "https://www.kastenmarine.com/welding_sequence.htm"
  - title: "Specmar: Boat Building with Aluminum"
    tier: A
    url: "https://www.specmar.com/resources/boat-building-with-aluminum/"
  - title: "Plate Alloy 5.4-8m Build Guide"
    tier: B
    url: "https://www.platealloy.com/DOWNART-PAB-5-4-8m-build.pdf"
  - title: "Adventure Marine: 7 Tips"
    tier: B
    url: "https://adventuremarine.ca/7-tips-to-building-an-aluminum-boat-successfully-the-first-time/"
  - title: "Boat Builder Central: Self-Aligning Jig System"
    tier: B
    url: "https://boatbuildercentral.com/support-tutorials/Tutorials/self-aligning-jig-system.pdf"
  - title: "Nordkyn Design: Shell Construction"
    tier: A
    url: "https://nordkyndesign.com/nordkyn/construction/shell-construction/"
---

# RESEARCH: Jig/Fixture/Strongback Setup — Plate-First Aluminum V-Hull 8m

## Executive Summary

Deep research on jig/fixture setup for VN-XUONG-UUV plate-first construction, using NLM notebook `skill-alboat` (23 sources). Three NLM queries extracted detailed procedures from 8 sources (4 Tier A + 4 Tier B). Key findings synthesized below.

---

## 1. STRONGBACK DESIGN & MATERIALS

### 1.1 Material Options

| Material | When to use | Size for 8m boat | Source |
|----------|-------------|-------------------|--------|
| Lumber 2×8 (50×200mm) | Budget, one-off build | 2 beams × 8.5m | Boat Builder Central (B) |
| Steel box tube | Professional, reusable, wheeled jig | 4"×6" main beam (20' jig), trussed for 30'+ | Kevin Morin (A) |
| Steel angle frame + MDF molds | Kit builder (CNC pre-cut jig) | Per kit drawing | Plate Alloy (B) |

★★★ **Recommendation cho VN-XUONG-UUV:** Steel box tube (thép hộp 100×60×3mm) — reusable cho future hulls, rigid enough for 8m, weldable for jacking bolts.

### 1.2 Sizing Rules

| Parameter | Rule | VN-XUONG-UUV value |
|-----------|------|-------------------|
| Length | = LOA or slightly longer | 8.5m |
| Beam spacing | ≈ beam at chine | ~2.0-2.4m (Phase 3 confirm) |
| Height off floor | 300mm (12") minimum — higher = better ergonomics | 500mm recommended (xuồng 8m = lớn, cần chui dưới) |
| Cross spalls | At non-mold locations, không cản station molds | ~4-6 cross pieces |

### 1.3 Leveling & Squaring Procedure

**Step-by-step (★★★ combined from 4 sources):**

1. Place strongback trên sawhorses (hoặc steel frame trên wheels)
2. **Laser level** cả 2 beams — thẳng ± 1mm full length
3. **Shim** nếu sàn không phẳng (shim dưới sawhorses, không dưới strongback)
4. **Đo diagonal** giữa 4 góc — bằng nhau trong ± 3mm (1/8")
5. **Bolt sawhorses xuống sàn** (concrete anchors hoặc heavy base)
6. **Bolt strongback vào sawhorses** (hoặc tack weld nếu thép)
7. Scribe **"Origin" line** ngang qua 2 beams ở đầu bow — mọi phép đo bắt đầu từ đây

**Plate Alloy production method:** Steel frame + wheels + jacking bolts ở 4 góc + giữa → level → lock → wheels lift off floor.

### 1.4 Davis Jig Rotisserie (Advanced — Optional cho WX)

Kevin Morin's Davis Jig cho phép xoay hull 360° để hàn ở tư thế flat/horizontal:

| Component | Material | Dimension |
|-----------|----------|-----------|
| Main beam | Steel box 4"×6" (20') hoặc trussed (30') | = LOA |
| Vertical uprights | 4"×4" steel tube, telescoping | ~1.5m adjustable |
| Pivot pin | 2-1/2" pipe | ~300mm per side |
| Clamp bushing | 3" Schedule 40 pipe, slit + flanges + 4 bolts | Clamp on pivot pin |
| Base | Triangle caster frames | ~1m triangle |
| Gantry (lifting) | 12' tall A-frame, I-beam + chain fall | 2 units (bow + stern) |

**VN-XUONG-UUV decision:** Davis Jig = overkill cho first build. **Stationary jig + lật 1 lần** đủ cho 8m work boat. Consider Davis Jig cho production run (hull #2+).

---

## 2. STATION MOLDS

### 2.1 Modern Method (CNC — recommended)

1. CAD lines plan → offset table → station cross-sections tại mỗi frame location
2. **Offset for plate thickness:** mold shape = hull outside - plate thickness (5mm bottom, 4mm topside)
3. CNC cut molds từ 18mm MDF hoặc gỗ dán (Plate Alloy method)
4. Mark trên mold: centerline, baseline/waterline, frame # (CNC engrave)
5. Molds có notches cho stringers — self-aligning khi assemble

### 2.2 Manual Backup (nếu không có CNC cho MDF)

1. Vẽ full-scale station trên bàn phẳng (sàn hoặc ván) — tolerance < 1mm (Nordkyn)
2. Dùng batten (nhôm angle extrusion) để vẽ fair curves
3. Offset bằng reducing wheel (tròn gỗ dán, lỗ bút ở giữa, bán kính = plate thickness)
4. Cắt mold bằng jigsaw → fair edge bằng Vixen file

### 2.3 Mounting Sequence (★★★ from Boat Builder Central)

1. **Middle mold TRƯỚC** (giữa tàu) → set height + center
2. **Transom** — built complete (framed, OB well cut) → mount at angle per plans
3. **Stringers** — fit between middle mold + transom
4. **Remaining molds** — fit VÀO stringer notches (tự align)
5. **Check diagonal** — ± 3mm (1/8")

### 2.4 Tolerances

| Check | Tolerance | Source |
|-------|-----------|--------|
| Mold manufacturing (CNC) | < 0.5mm | CNC accuracy |
| Mold manufacturing (hand) | < 1mm | Nordkyn (A) |
| Diagonal symmetry | ± 3mm (1/8") | Boat Builder Central (B) |
| Stringer-frame notch play | 3mm total (1.5mm each side) | Boat Builder Central (B) |
| Station spacing | ± 2mm | WX standard |

---

## 3. KEEL BAR SETUP

| Step | Action | Detail |
|------|--------|--------|
| 1 | Set keel bar trên strongback | ~300mm (12") trên sàn (Specmar) |
| 2 | Align với Origin mark + centerline | Laser line dọc keel bar |
| 3 | Tack keel bar tại mỗi station mold | Keel bar = permanent (stays in hull) |
| 4 | Check straightness | String line + feeler gauge ± 1mm |

---

## 4. PANEL POSITIONING & TACKING TO JIG

### 4.1 Procedure (★★★ from Plate Alloy)

1. Place bottom sheet P vào jig → align CNC marks với mold frames
2. Place bottom sheet S → align
3. **Come-A-Long hand winch (2T)** để kéo panels lại ở bow (tôn resist bending)
4. Tack keel seam: mỗi 150mm
5. Tack chine: mỗi 150-200mm standard, **80-100mm ở bow** (tension cao hơn)
6. **TACK BOAT VÀO JIG** — tack weld hull trực tiếp vào strongback/sawhorses
   - Immobilize hull chống distortion khi full welding
   - **CRITICAL cho first build** (Adventure Marine confirmed)
7. Fit side plates → align marks → tack 150-200mm, 80-100mm ở bow

### 4.2 Temporary Strong-backs (Stiffeners)

Cho large flat panels (transom area, deck near openings):
- Tack temporary aluminum flat bar NGANG qua panel
- 2 chức năng: (1) giữ panel phẳng, (2) heat sink giảm distortion
- Tháo sau khi full weld xong + nguội

### 4.3 CNC Tag Sanding (★★ important detail)

CNC cut parts có holding tags → **PHẢI mài flush hoàn toàn** trước khi fit. Tags ~1mm = đủ gây lệch panel fitment → distortion khi hàn.

---

## 5. BUILD ORIENTATION: UPSIDE-DOWN vs RIGHT-SIDE-UP

| Orientation | Advantages | Disadvantages | When to use |
|-------------|-----------|---------------|-------------|
| **Upside-down (male jig)** | Perfect running bottom (no hook/rocker), gravity helps plating, overhead welds become flat | Must flip heavy hull (~400kg+ for 4.8m, 1000kg+ for 8m), need gantry or crane | Fast planing hull where bottom fairness = critical |
| **Right-side-up (upright)** | No flip needed, easier fitting out, natural for plate-first | Bottom welds = overhead (or flip once for outside), gravity pulls panels away from mold | Kit builds, work boats, plate-first method |
| **Davis Jig (rotisserie)** | Any orientation anytime, all welds flat position, best quality | Cost + complexity of jig, overkill for single build | Production, serious amateur, 2+ hulls |

**★★★ VN-XUONG-UUV recommendation:** **Right-side-up** (Plate Alloy method for 5.4-8m) — plate-first MPF, weld inside first → flip once for outside bottom welds → kiểm tra leak → fitting out. Flip weight ~1,200 kg hull structure → cần gantry hoặc crane (WX xưởng có crane?).

---

## 6. EGG-CRATE ASSEMBLY (CNC Production Method)

Specmar + Plate Alloy method:

```
Frame (CNC cut) có notches cho stringers
    ↕ interlock ↕
Stringer (CNC cut) có notches cho frames
    = Self-aligning assembly → "weeks reduced to days"
```

| Detail | Specification |
|--------|-------------|
| Notch width | = mating part thickness + 1.5mm each side (3mm total play) |
| Numbering | CNC engrave: stringer 1a, 1b, 1c (keel→chine), frame 1-10 (bow→stern) |
| Assembly | Slide together without tools → tack weld at intersections |
| Mouse holes | Pre-cut in frames for weld-through (continuous stringer welds) |

---

## Source Quality Report

| Metric | Value |
|--------|-------|
| Total sources searched | 11 |
| Sources added to NLM | 4 new (19→23 total) |
| Tier A | 4 (Kasten ×2, Morin, Specmar) |
| Tier B | 4 (Plate Alloy, Adventure Marine, BBC, Nordkyn) |
| Pro ratio (A/total analyzed) | 50% |
| NLM queries | 3 deep extractions |
| Insights extracted | 22 |
| ★★★ HIGH | 8 |
| ★★ MED | 10 |
| ★ LOW | 4 |

### Coverage Gaps
- **No Tier S (standards)** — AWS D3.7 covers welding but NOT jig construction. ISO 12215 covers scantlings but NOT construction sequence. Jig design = builder knowledge, not standardized.
- **Rotating jig details** — Kevin Morin's Davis Jig described but no engineering drawings. WX would need to design from description.
- **Plate development/offset transfer** — NLM sources emphasize CNC bypass of manual lofting. Manual offset→mold procedure available from WoodenBoat School but NOT tested against aluminum-specific requirements.

### Galaxy Candidates

**★★★ Ready for promotion:** None new — Distortion Sequence Law (#115) already covers the core physics. Jig setup is procedural, not conceptual.

**★★ Potential corollary to #115:** "Tack-to-Jig Rule — bolt jig xuống sàn + tack hull vào jig = first build distortion insurance" — but this may be too procedural for Galaxy. CEO decide.
