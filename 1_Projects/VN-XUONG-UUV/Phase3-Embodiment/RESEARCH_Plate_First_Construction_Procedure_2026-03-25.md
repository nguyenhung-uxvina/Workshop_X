---
created: 2026-03-25
project: VN-XUONG-UUV
phase: 3
type: research-output
status: AI-DRAFT
source: First-principles analysis + Kasten Marine + Nordkyn Design + AWS D3.7 references
tags: [#type/research, #status/active]
---

# VN-XUONG-UUV — Quy Trình Đóng Vỏ Plate-First (Vỏ Ngoài Trước)

## Nghiên Cứu Sâu: Plate-First Construction cho 8m Aluminum V-Hull Work Boat

**Decision:** Modified Plate-First (MPF) — 3-phase sequential, confirmed by two rounds of first-principles analysis (2026-03-25)
**Rationale:** V-hull semi-planing = developable surface, nhôm dẫn nhiệt 4× thép → TÁCH HOÀN TOÀN butt weld phase (shell) khỏi fillet weld phase (frames) = minimum distortion
**Approach:** MPF 3-phase: Phase A (ALL shell butt/seam welds) → Phase B (ALL frame fillet welds) → Phase C (deck + fittings). Bow hybrid nếu compound curve.
**Supersedes:** Kasten Hybrid (interleaved) — tối ưu cho yacht tight access, KHÔNG tối ưu cho 8m V-hull work boat (internal height 1.85m = accessible)

---

## 1. TẠI SAO PLATE-FIRST CHO NHÔM V-HULL

### 1.1 Physics Basis (Bedrock)

| Factor | Thép (frames-first) | Nhôm (plate-first) | Tại sao khác |
|--------|---------------------|---------------------|-------------|
| Thermal conductivity | 50 W/mK | 167 W/mK | Nhôm lan nhiệt xa hơn 3.3× → HAZ rộng → distortion lan xa |
| Density | 7,800 kg/m³ | 2,700 kg/m³ | Tôn nhôm nhẹ 1/3 → không cần skeleton support |
| Yield strength (5083-H116) | — | 215 MPa | Đủ cứng để giữ hình khi uốn developable |
| Panel weight (5mm × 2m²) | 78 kg | **27 kg** | 1 thợ cầm + định vị được |

### 1.2 Lợi Thế Plate-First (từ Kasten Marine)

> "The primary advantage of placing the frames afterward is to allow the plating to be welded up first without there being any potential distortion introduced by the presence of a relatively un-yielding frame inside. This can produce an extremely fair hull, and can do so even without there being much skill involved on the part of the builder."

— [Kasten Marine: Frames First or Plating First?](https://www.kastenmarine.com/frames_first.htm)

### 1.3 Tại Sao MPF Thay Vì Kasten Hybrid?

Kasten Marine recommends hybrid (interleaved): bottom stringers → bottom frames → topside plating → side frames. Phù hợp cho yacht (tight access, compound hull).

**VN-XUONG-UUV KHÁC:**

| Factor | Yacht (Kasten target) | VN-XUONG-UUV 8m | Impact |
|--------|----------------------|-----------------|--------|
| Internal height | < 1.2m (tight) | ~1.85m (accessible) | Access argument mất hiệu lực |
| Hull form | Compound (round-bilge) | Developable (V-hull) | Không cần frame hỗ trợ forming |
| Ventilation | Kém khi topside bọc kín | Mở bow + stern ramp | Confined space không đáng lo |

**MPF principle:** TÁCH butt welds (symmetric, controlled) khỏi fillet welds (asymmetric, distortion-prone) HOÀN TOÀN. Không interleave. Kasten Hybrid vi phạm nguyên tắc này bằng cách hàn fillet (bottom frames) TRƯỚC KHI hoàn thành toàn bộ shell butt welds.

**Khi nào dùng Kasten Hybrid thay MPF:**
- Hull < 7m (người không chui vào được)
- Deep bilge / double bottom
- Compound hull cần frame support để form plates
- Multi-deck vessel (access bị chặn)

Không áp dụng cho VN-XUONG-UUV → **MPF selected.**

---

## 2. JIG/FIXTURE SETUP (Updated from deep research 2026-03-25)

> **Research source:** `3_Resources/Deep-Content-Analyzer-Outputs/RESEARCH_jig_fixture_strongback_plate_first_2026-03-25.md`
> **NLM:** `skill-alboat` (23 sources, 3 deep extraction queries)

### 2.1 Strongback Construction

```
         STRONGBACK (thép hộp 100×60×3mm, 2 beams dọc)
         ┌─────────────────────────────────────────────────────┐
         │                     ORIGIN line                      │
    ═════╪═══╪═══╪═══╪═══╪═══╪═══╪═══╪═══╪═══╪═══╪═══════════╪
    SAW  Fr0 Fr1 Fr2 Fr3 Fr4 Fr5 Fr6 Fr7 Fr8 Fr9 TRANSOM   SAW
    HORSE                                                    HORSE
    (bolt to floor)            ← ~2.2m beam spacing →       (bolt to floor)
         ↕ 500mm off floor (ergonomic — chui dưới hull)
```

**Vật liệu:**
- **VN-XUONG-UUV:** Thép hộp 100×60×3mm (reusable cho future hulls)
- Alternative: gỗ 2×8 (50×200mm) cho one-off, nhưng kém rigid
- KHÔNG dùng nhôm cho strongback — flex, đắt, không cần thiết

**Kích thước:**
- Chiều dài: ≥ 8.5m (LOA + 0.5m margin)
- Beam spacing: ≈ beam tại chine (~2.0-2.4m — Phase 3 confirm)
- Height: **500mm off floor** (xuồng 8m → cần chui dưới cho bottom welds)

**Setup procedure (7 bước — from Kasten + Plate Alloy + Adventure Marine):**

1. Đặt sawhorses (4-6 cái, ~1.5m spacing) → laser level → shim nếu sàn không phẳng
2. **Bolt sawhorses xuống sàn** (concrete anchors — CRITICAL: jig KHÔNG được di chuyển)
3. Đặt strongback beams lên sawhorses → **bolt strongback vào sawhorses**
4. **Laser level** cả 2 beams — thẳng ± 1mm full length, level ngang ± 1mm
5. **Đo diagonal** (4 góc) — bằng nhau trong ± 3mm
6. Scribe **"ORIGIN" line** ngang qua 2 beams ở đầu bow → X=0 reference
7. Add cross spalls tại non-mold locations (4-6 cái, không cản mold)

### 2.2 Station Molds (Khuôn Tạm)

**VN-XUONG-UUV:** 10-11 station molds, spacing ~800mm

**Method A — CNC (recommended):**
- CAD offset table → CNC cut molds từ MDF 18mm (Plate Alloy method)
- **Offset for plate thickness:** mold shape = hull outside − 5mm (bottom) / 4mm (topside)
- CNC engrave: centerline, baseline, frame #, stringer notches
- Notch width: part thickness + 1.5mm mỗi bên (3mm total play) → self-aligning

**Method B — Manual (fallback):**
- Vẽ full-scale station trên bàn phẳng (sàn sạch hoặc ván trắng)
- Dùng batten (nhôm angle extrusion) để vẽ fair curves
- Offset bằng reducing wheel (tròn gỗ dán, bán kính = plate thickness)
- Cắt jigsaw → fair edge bằng Vixen file → tolerance < 1mm (Nordkyn standard)

**Mounting sequence:**
1. **Middle mold TRƯỚC** (Fr5 hoặc Fr6) → set height + center + check level
2. **Transom** — build complete (OB well, framing) → mount at angle per plans
3. **Stringers** — fit giữa middle mold + transom → self-align
4. **Remaining molds** — fit VÀO stringer notches (tự align nhờ egg-crate)
5. **Check diagonals** — ± 3mm mỗi pair

**Tolerances:**

| Check | Tolerance |
|-------|-----------|
| Mold manufacturing (CNC) | < 0.5mm |
| Mold manufacturing (hand) | < 1mm |
| Diagonal symmetry P/S | ± 3mm |
| Notch play | 3mm total (1.5mm/side) |
| Station spacing from Origin | ± 2mm |

### 2.3 Keel Bar

- Keel bar = tôn nhôm 5083 gập V hoặc flat bar
- Đặt dọc strongback, phía trên molds, **~300mm (12") trên sàn** (Specmar)
- Align với Origin + centerline → laser line dọc keel → string line check ± 1mm
- **Tack keel bar tại mỗi station mold** → keel bar = permanent (stays in hull)

### 2.4 Panel Positioning & Tacking to Jig

**Procedure (from Plate Alloy — exact size match 5.4-8m):**

1. Đặt bottom sheet P vào jig → align CNC marks với mold frames
2. Đặt bottom sheet S → align
3. **Come-A-Long hand winch (2T)** kéo panels lại ở bow (tôn resist bending)
4. Tack keel seam: mỗi 150mm
5. Tack chine: **150-200mm standard, 80-100mm ở bow** (tension cao)
6. **⚡ TACK HULL VÀO JIG** — tack weld trực tiếp vào strongback
   - Immobilize hull chống distortion khi full welding
   - **CRITICAL cho first build** (Adventure Marine: "highly recommend")
   - Tháo tack sau khi Phase B (frames) hoàn thành
7. **CNC tag sanding:** mài flush 100% holding tags trước khi fit — tags 1mm = gây lệch

**Temporary strong-backs cho flat panels:**
- Tack aluminum flat bar NGANG qua large panels (transom, deck near openings)
- 2 chức năng: (1) giữ phẳng, (2) heat sink
- Tháo sau khi full weld + nguội

### 2.5 Build Orientation Decision

**VN-XUONG-UUV: RIGHT-SIDE-UP (upright) recommended**

| Orientation | Recommendation | Lý do |
|-------------|---------------|-------|
| Right-side-up | **SELECTED** | Plate Alloy proven cho 5.4-8m, natural cho plate-first MPF |
| Upside-down | Fallback | Tốt cho bottom fairness nhưng phải flip ~1,200 kg |
| Davis Jig | Future (hull #2+) | Overkill cho first build, excellent cho production |

**Flip procedure (1 lần):** Inside welds first → invite 4-6 people + gantry/crane → flip → outside bottom welds → leak test → flip back → fitting out.

### 2.6 Egg-Crate Assembly (CNC Pre-Cut)

```
Frame (CNC cut, notches cho stringers, mouse holes cho weld-through)
    ↕ slide interlock ↕
Stringer (CNC cut, notches cho frames, numbered 1a/1b/1c keel→chine)
    = Self-aligning in seconds → "weeks reduced to days" (Specmar)
```

- Notch width = mating part thickness + 3mm total play
- Frame numbering: 1-10 (bow→stern)
- Stringer numbering: 1a, 1b, 1c (keel→chine)
- Mouse holes in frames: pre-cut for continuous stringer fillet welds

---

## 3. QUY TRÌNH MPF (Modified Plate-First) — 12 BƯỚC, 3 PHASE

```
┌─────────────────────────────────────────────────────────┐
│ PHASE A: SHELL (Bước 1-7)                               │
│ TẤT CẢ butt/seam welds — KHÔNG có fillet weld nào       │
│ → CP-B: Fairness GATE (phải pass trước khi tiếp)       │
├─────────────────────────────────────────────────────────┤
│ PHASE B: FRAMES (Bước 8-9)                              │
│ TẤT CẢ frame fillet welds — shell đã locked             │
│ → CP-C: Frame alignment check                          │
├─────────────────────────────────────────────────────────┤
│ PHASE C: COMPLETION (Bước 10-12)                        │
│ Deck + stern LARS fittings + finishing                   │
└─────────────────────────────────────────────────────────┘

KEY RULE: KHÔNG interleave Phase A và Phase B.
          Mọi butt/seam welds (Phase A) PHẢI hoàn thành
          TRƯỚC KHI bất kỳ fillet weld (Phase B) nào bắt đầu.
          Lý do: Galaxy #115 — Distortion Sequence Law.
```

### Phase A: Shell Formation (Bước 1-7) — CHỈ BUTT/SEAM WELDS

**Bước 1 — CNC Cutting**
- Plasma CNC cắt tất cả panels từ developed shapes (CAD plate development)
- Mark: station lines, centerline, waterline trên mỗi panel
- Mép hàn: V-groove 60° land 1.5mm cho tôn 5mm bottom, square butt gap 1-2mm cho tôn 4mm
- **Acetone → chải inox → dùng trong 4h** (Quy Tắc #2 helm-aluminum-boat)

**Bước 2 — Keel Bar Assembly**
- Đặt keel bar trên strongback
- Kiểm tra thẳng (laser) + alignment với station molds
- Tack weld keel bar tại mỗi station (sẽ là phần vĩnh viễn của hull)

**Bước 3 — Bottom Panel Positioning**
- Đặt bottom panel PORT lên molds, uốn nguội theo deadrise angle
- Tack weld vào keel bar mỗi 150mm
- Lặp lại cho STARBOARD — **tiến đối xứng P/S**
- Kiểm tra: deadrise angle, panel flush với mold profile
- **VN tropical note:** nhôm nguội chậm ở xưởng nóng — kiểm tra interpass < 150°C ngay từ tack welds

**Bước 4 — Chine Bar + Topside Panels**
- Đặt chine bar (flat bar hoặc angle) dọc chine line
- Tack weld chine bar vào bottom panel edge
- Đặt topside panels P/S, tack vào chine bar + sheer line
- **Sequence:** luân phiên P/S — không hàn hết 1 bên rồi mới sang bên kia

**Bước 5 — Transom Plate**
- Đặt transom plate (6mm — VN-XUONG-UUV cần reinforced cho twin OB)
- Tack weld vào bottom + topside panel edges
- Kiểm tra: vuông góc với keel, flush với mold profile

**Bước 6 — Shell Tack Completion + Fairness Check**
- Toàn bộ shell đã tack weld → kiểm tra fairness:
  - Battens dọc hull → không gãy khúc (no kinks)
  - Thước thẳng ngang qua frame stations → khớp với mold profile ± 2mm
  - Đối xứng P/S: đo beam tại mỗi station ± 3mm
- **Nếu fairness FAIL:** tháo tack, chỉnh panel, tack lại TRƯỚC KHI full weld
- Đây là ĐIỂM KIỂM TRA QUAN TRỌNG NHẤT — sai ở đây → sai toàn bộ

**Bước 7 — Shell Full Welding (Kasten 10-Step Sequence)**

Thứ tự hàn full cho shell (theo [Kasten Marine Welding Sequence](https://www.kastenmarine.com/welding_sequence.htm)):

```
Bước 7a: Tack weld toàn bộ perimeter (đã xong ở B3-B5)
Bước 7b: Hàn keel seam (butt weld, back-stepping 300mm, từ giữa ra 2 đầu)
Bước 7c: Hàn transverse butt welds (nếu tôn nối) — từ giữa ra perimeter
         → Inside seam TRƯỚC, outside seam SAU (gouge back + flush weld)
Bước 7d: Hàn chine seams (P rồi S luân phiên, back-stepping)
Bước 7e: Hàn topside longitudinal seams
Bước 7f: Hàn transom-to-hull seams
Bước 7g: Hàn sheer line (nếu có sheer plate/gunwale)
```

**Nguyên tắc chống distortion (CRITICAL cho nhôm):**
- Back-stepping: hàn đoạn 75mm (3"), skip 600mm (24"), quay lại fill 300mm, rồi 150mm
- Balanced P/S: hàn 1 đoạn Port → 1 đoạn Starboard → quay lại Port
- Balanced top/bottom: xen kẽ keel area và sheer area
- **KHÔNG BAO GIỜ hàn liên tục 1 seam full length** — distortion catastrophic cho nhôm
- Interpass temperature < 150°C — dừng nếu nóng (Quy Tắc #3)
- Oversizing: cắt panel lớn hơn ~1-2mm per joint → shrink to fit

### Phase B: Frame Installation (Bước 8-9) — CHỈ FILLET WELDS (shell đã locked)

> **GATE: CP-B (Fairness) PHẢI PASS trước khi bắt đầu Phase B.**
> Shell butt/seam welds hoàn thành → fairness verified → MỚI hàn fillet.

**Bước 8 — Tháo Station Molds + Install Stringers**
- Tháo molds tạm (unbolt/unclamp từ strongback)
- Shell đã self-supporting (nhôm nhẹ, V-shape inherent rigidity)
- **KHÔNG tháo strongback** — giữ cho đến khi frames hàn xong
- **Hàn bottom stringers TRƯỚC frames** (chain weld to shell)
  - Stringer tăng local stiffness → frame fillet welds gây ít distortion hơn (B3)
  - Chain weld: cách butt joints ≥ 300mm (Kasten rule)

**Bước 9 — Frame Fitting + Welding**
- CNC cắt frames từ T-extrusion + floor plates (oversize ~1mm for trim-to-fit)
- Fit frames VÀO shell — trim frame profile cho khớp shell interior
- Egg-crate interlock tại stringer-frame crossings
- Tack weld frames → kiểm tra alignment → full fillet weld
- **Access:** thợ vào bên trong hull qua bow opening hoặc stern ramp opening (1.85m internal height = đứng thẳng được)
- **Sequence:** từ giữa hull ra 2 đầu
- Fillet weld frame-to-shell: **ngắn, distributed, xen kẽ P/S**
  - KHÔNG hàn cả 2 bên frame liên tục → hàn 1 bên P, skip, 1 bên S, skip
  - Kasten: "bias welding toward obtuse angles rather than acute"
- Hàn bulkheads (vách ngăn)
- Hàn deck beams

### Phase C: Completion (Bước 10-12)

**Bước 10 — Deck Plating**
- Đặt deck panels trên frames/beams
- Tack → full weld (same back-stepping sequence)
- Deck openings (hatches, cable routing) cắt SAU KHI hàn

**Bước 11 — Stern Reinforcements (VN-XUONG-UUV Specific)**
- Ramp hinge doubler plates (6mm → weld to transom + stern deck)
- Winch mount foundation (welded stringers + gussets, 10 kN capacity)
- Recovery channel frame (aluminum, bolt-on UHMWPE liners)
- Twin OB transom reinforcement (doubler plate + backing plate)
- Genset bed (welded stringers + vibration mount pads)

**Bước 12 — Tháo Strongback + Lật (nếu cần)**
- Tháo hull khỏi strongback
- Lật ngửa (nếu đóng úp) hoặc giữ nguyên (nếu đóng ngửa)
- Kiểm tra kích thước final:
  - LOA: 8.0m ± 5mm
  - Beam: target ± 3mm
  - Frame spacing: ± 2mm
  - Đường nước: ± 10mm
  - Đối xứng: ± 3mm

---

## 4. KIỂM TRA CHẤT LƯỢNG THEO GIAI ĐOẠN

| Checkpoint | Thời điểm | Phương pháp | Tiêu chí |
|-----------|----------|-------------|----------|
| CP-1: Strongback alignment | Sau setup | Laser level | Thẳng ± 1mm |
| CP-2: Panel fit on molds | Sau B3-B5 | Batten + thước | Khớp profile ± 2mm, deadrise ± 0.5° |
| **CP-3: Fairness check** | **Sau B6 (tack complete)** | **Batten dọc + thước ngang** | **No kinks, beam ± 3mm, P/S đối xứng** |
| CP-4: Shell welds | Sau B7 | VT 100% + PT critical seams | Per NDT plan (keel, chine, transom) |
| CP-5: Frame alignment | Sau B9 | Thước + level | Frame spacing ± 2mm, vuông góc ± 0.5° |
| CP-6: Final dimensions | Sau B12 | Tape + level | LOA, beam, freeboard targets |

**CP-3 là GATE — không pass CP-3 thì KHÔNG tiến hành full welding (B7).**

---

## 5. SO SÁNH THỜI GIAN: PLATE-FIRST vs FRAMES-FIRST

| Phase | Frames-First | Plate-First | Delta |
|-------|-------------|-------------|-------|
| Jig/strongback setup | 2 ngày | 3 ngày (+ mold cutting) | +1 ngày |
| Frame assembly | 5 ngày | — (defer to B9) | -5 ngày |
| Plate cutting | 2 ngày | 2 ngày | = |
| Plate forming + fitting | 5 ngày (wrap on frames) | 4 ngày (jig-guided) | -1 ngày |
| Shell welding | 8 ngày | 7 ngày (no frame interference) | -1 ngày |
| Frame installation | — (already done) | 4 ngày (fit + weld into shell) | +4 ngày |
| Stern reinforcement | 3 ngày | 3 ngày | = |
| Deck | 3 ngày | 3 ngày | = |
| **TOTAL** | **~28 ngày** | **~26 ngày** | **-2 ngày** |

Thời gian tương đương — plate-first KHÔNG nhanh hơn đáng kể. Lợi thế chính = **FAIRNESS + DISTORTION CONTROL**, không phải speed.

---

## 6. RỦI RO VÀ MITIGATION

| # | Rủi ro | Probability | Impact | Mitigation |
|---|--------|------------|--------|------------|
| 1 | Panel shape sai (CNC error) → hull shape lệch | LOW (CNC accurate) | HIGH | CP-2 check + CAD verification trước cắt |
| 2 | Fairness kém sau tack (B6) | MEDIUM | HIGH | **CP-3 gate** — chỉnh trước khi full weld |
| 3 | Distortion vượt tolerance sau full weld | MEDIUM | MEDIUM | Back-stepping + balanced P/S + interpass < 150°C |
| 4 | Frame không fit shell interior (shrinkage) | MEDIUM | LOW | Oversize frame girth ~1mm → trim to fit |
| 5 | Bow compound curve → plate buckling | LOW (V-hull likely developable) | MEDIUM | Hybrid: 2-3 bow frames-first nếu CAD shows compound |
| 6 | Thợ chưa quen plate-first | MEDIUM | MEDIUM | Training session 1 ngày + practice joint trước khi bắt đầu hull |

---

## 7. VẬT TƯ BỔ SUNG CHO PLATE-FIRST (so với Frames-First)

| Item | Mục đích | Ước lượng chi phí |
|------|---------|------------------|
| Station molds (gỗ dán 18mm) | Tạm — tháo sau B8 | ~$50-100 (reusable) |
| Strongback (thép hộp 100×50) | Jig chính | ~$100-200 (reusable) |
| Sawhorses (4-6 cái) | Đỡ strongback | ~$50-100 |
| Laser level | Alignment checking | ~$50-100 (hoặc đã có) |
| Battens (nhôm flat bar 3m) | Fairness checking | ~$20-30 |

**Total jig cost: ~$270-530** — chi phí thấp, jig reusable cho hull tiếp theo.

---

## 8. KASTEN 10-STEP WELDING SEQUENCE — SỐ LIỆU CHI TIẾT (từ NLM)

Nguồn: [Kasten Marine Welding Sequence](https://www.kastenmarine.com/welding_sequence.htm), extracted via NLM notebook `skill-alboat`.

Áp dụng trong **Phase A Bước 7** (shell full welding) và **Phase B Bước 9** (frame fillet welding).

### 8.1 Phase A Shell Welds (Kasten Steps 1-7)

| Step | Operation | Dimensions (nhôm 5mm/10mm tương đương 3/8") | Distortion Rule |
|------|-----------|----------------------------------------------|----------------|
| 1 | Tack weld perimeter | 25mm tack mỗi 150-200mm (1" every 6-8") | Minimum fixture, tack layout = final weld layout (75, 150, 225, 300mm increment) |
| 2 | Chain weld stringers to shell | Cách butt joints ≥ 300mm (12") | Để room cho shrinkage tại butt |
| 3 | Fixture plate butts | Sister long'ls inside + temporary long'ls outside | Cả 2 mặt cho seam convergence areas |
| 4 | Transverse butt welds | Từ giữa tàu ra 2 đầu (như torque bolt head) | **Inside seam TRƯỚC** → outside seam (gouge + flush) |
| 5 | Longitudinal butt welds | Fixture outside cả 2 bên seam | Đặc biệt nơi seams converge |
| 6 | Insert plate welds | Treat as local butts/seams | Inside first → outside |
| 7 | Edge seams (chine, sheer) | Back-step: **75mm weld → skip 600mm → back-step** | Fill pattern: 600mm → 300mm → 150mm increments |

### 8.2 Back-Stepping Chi Tiết (Aluminum)

```
Pass 1:  ███░░░░░░░░░░░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░░░░░░███
         75mm                    600mm skip                 75mm

Pass 2:  ░░░░░░░░░░░░███░░░░░░░░░░░░░░░░░░░░░░░███░░░░░░░░░░░░
                     300mm                      300mm

Pass 3:  ░░░░░░███░░░░░░░░░███░░░░░░░░░███░░░░░░░░░███░░░░░░░░
                150mm       150mm       150mm       150mm

Pass 4:  ███████████████████████████████████████████████████████
         Fill remaining gaps
```

Nhôm: weld NGẮN hơn + khoảng cách XA hơn so với thép (vì dẫn nhiệt cao → heat lan xa).

### 8.3 Phase B Frame Welds (Kasten Steps 8-10)

| Step | Operation | Technique | Critical Rule |
|------|-----------|-----------|---------------|
| 8 | Stringers to frames | Minimal heat per joint | Local fixture outside nếu gần butt joints |
| 9 | **Plate to frames (LAST!)** | Bias obtuse angle > acute angle | Bow/stern: KHÔNG theo weld length schedule — bias open angle |
| 10 | Frame relaxation (if needed) | **KHÔNG dùng line heating cho nhôm** (hỏng temper) | Oversize plate girth khi cắt → shrink-to-fit |

### 8.4 Aluminum-Specific Rules (tổng hợp từ NLM)

| Rule | Detail | Nguồn |
|------|--------|-------|
| **KHÔNG line heating** | Torch locally ruins 5083 temper → structural weakness | Kasten |
| **Oversize plate girth** | Cắt tôn lớn hơn ~1-2mm per edge → co lại vừa khít frame | Kasten — exact amount = experience-dependent |
| **Stringer trước plate** (Dutch) | Hàn stringer vào tôn KHI TÔN CÒN NẰM PHẲNG → rồi mới uốn lên hull | Dutch builders (Kasten report) |
| **Stop immediately if distortion** | Bất kỳ distortion visible → dừng → tìm nguyên nhân → sửa → mới tiếp | Kasten — "prudent to stop right away" |
| **Egg-crate assembly** | CNC pre-cut notches: frame ↔ stringer interlock → "weeks reduced to days" | Specmar |
| **Keel bar 300mm off floor** | Stem/keel bar set ~12" (300mm) above shop floor on strongback | Specmar |

---

## 9. PHÂN TÍCH FIRST-PRINCIPLES: TẠI SAO MPF > KASTEN HYBRID

### 9.1 Kasten Hybrid Sequence (rejected for VN-XUONG-UUV)

```
Bottom plate → bottom stringers → BOTTOM FRAMES → topside plate → SIDE FRAMES → deck
                                  ^^^^^^^^^^^^^^^^
                                  Fillet welds INTERLEAVED với shell butt welds
```

### 9.2 MPF Sequence (selected)

```
ALL shell plates → ALL butt/seam welds → CP-B GATE → stringers → ALL frames → deck
                                         ^^^^^^^^
                                         HOÀN TOÀN tách butt phase khỏi fillet phase
```

### 9.3 Lý Do Chọn MPF

| # | Argument | Kasten Hybrid | MPF | Physics basis |
|---|----------|--------------|-----|---------------|
| 1 | Distortion separation | Partial (bottom fillet before topside butt) | **Complete** (all butt → all fillet) | k_Al = 167 W/mK → tách phase = tách nguồn distortion |
| 2 | Access bên trong hull | Good (bottom open khi frame bottom) | Good (8m hull, 1.85m internal, bow+stern mở) | B6: hull ≥ 8m = accessible |
| 3 | Sequence complexity | 4+ interleaved phases | **3 clean sequential phases** | Fewer decision points = fewer errors |
| 4 | Bottom fairness | Medium (fillet distortion trước topside) | **Best** (no fillet until shell locked + CP-B passed) | B2: bottom hydrodynamic priority |
| 5 | Error recovery | Medium | **Easy** (shell verified at CP-B before any frame) | CP-B gate = early detection |

### 9.4 Khi Nào Dùng Kasten Hybrid Thay MPF

- Hull < 7m (tight access — người không chui vào được)
- Deep bilge / double bottom (tàu > 15m)
- Compound hull (round-bilge, cần frame support)
- Multi-deck vessel

**Không áp dụng cho VN-XUONG-UUV 8m V-hull work boat.**

---

## Sources

- [Kasten Marine: Frames First or Plating First?](https://www.kastenmarine.com/frames_first.htm) — primary reference cho plate-first rationale
- [Kasten Marine: Welding Sequence Strategy](https://www.kastenmarine.com/welding_sequence.htm) — 10-step weld-up sequence
- [Nordkyn Design: Shell Construction](https://nordkyndesign.com/nordkyn/construction/shell-construction/) — practical aluminum shell building
- [Specmar: Boat Building with Aluminum](https://www.specmar.com/resources/boat-building-with-aluminum/) — production builder methods
- NLM notebook `skill-alboat` (19 sources) — NDT, welding procedures, construction methods, standards
  - 3 new sources added 2026-03-25: Kasten frames-first, Kasten welding sequence, Specmar aluminum
  - 3 NLM queries extracted: jig setup + tack spacing, 10-step welding sequence, failure modes + shrink-to-fit
- Galaxy #115: Distortion Sequence Law — Nhôm Đảo Ngược Thép Vì Dẫn Nhiệt 4×
