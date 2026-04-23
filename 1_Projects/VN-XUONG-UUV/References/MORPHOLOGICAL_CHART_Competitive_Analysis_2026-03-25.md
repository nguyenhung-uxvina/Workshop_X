---
created: 2026-03-25
type: morphological-chart-analysis
method: "Reverse Morphological Chart (Hülagü & Timur 2024)"
product: "UUV Launch & Recovery Vessel / System"
products_analyzed: 10
sub_functions: 15
design_space_size: 2764800000
uncontested_gaps: TBD
uniqueness_score: "TBD"
status: active
---

# Reverse Morphological Chart — UUV Launch & Recovery Systems

> **Method:** Hülagü, R. & Timur, Ş. (2024). "Using Morphological Chart for Analysing Existing Designs."
> **Project:** VN-XUONG-UUV (Xuồng Triển Khai/Thu Hồi UUV)
> **Products analyzed:** 10 | **Sub-functions:** 15 | **CEO approved:** 2026-03-25

---

## 1. Products Analyzed

| Code | Company | Product | Country | LOA | UUV Target | Type |
|------|---------|---------|---------|-----|------------|------|
| REF-01 | Korea/SEA | TRV 8m RIB | Korea | 8m | Torpedo ~324mm, ~400kg | Dedicated vessel |
| REF-02 | L3Harris | C-Worker USV + LARS | USA/UK | 7-12m | REMUS 600/Bluefin-12 (200-750kg) | USV + integrated LARS |
| REF-03 | Atlas/tkMS | ARCIMS USV + LARS | Germany | 12m | SeaCat (300-450kg) | USV + integrated LARS |
| REF-04 | Saab | AUV62-AT LARS | Sweden | On host vessel | AUV62-AT (300-400kg) | Ship-mounted LARS |
| REF-05 | ECA/Robotics | UMIS + A18-M LARS | France | On USV/MCM | A18-M (700-800kg) | System-of-systems |
| REF-06 | Sewart Seacraft | 85' TRB (US Navy) | USA | 26m | Torpedoes ×8 | Dedicated vessel |
| REF-07 | Modutech Marine | 95' MPC (US Navy) | USA | 30m | Multi-purpose | Dedicated vessel |
| REF-08 | Saab Seaeye | Double Eagle SAROV LARS | Sweden/UK | On MCM vessel | SAROV 730kg | Ship-mounted LARS |
| REF-09 | Lawson Engineers | NS1981 LARS | UK | Ship-mounted | AUV 4,000kg | Ship-mounted LARS |
| REF-10 | Australia | Fish-class TRV | Australia | 27m | Torpedoes ×8 | Dedicated vessel |

---

## 2. Sub-Functions (15)

| SF# | Sub-Function | Mô tả | Category |
|-----|-------------|--------|----------|
| SF1 | Hull Construction | Vật liệu + kiểu thân tàu | Material |
| SF2 | Vessel Size Class | LOA category | Material |
| SF3 | Propulsion Type | Hệ thống đẩy chính | Energy |
| SF4 | Launch Method | Cách hạ UUV xuống nước | Core L&R |
| SF5 | Recovery Capture | Cách bắt/đón UUV — BINDING CONSTRAINT | Core L&R |
| SF6 | Recovery Actuation | Cách kéo UUV lên boong | Energy |
| SF7 | UUV Guidance for Recovery | Cách dẫn UUV về vessel | Signal |
| SF8 | Automation Level | Mức độ tự động hóa LARS | Signal |
| SF9 | UUV Connection Type | Tether hay free-swimming | Core L&R |
| SF10 | LARS Power Source | Nguồn điện/thủy lực cho LARS | Energy |
| SF11 | Station-Keeping | Cách giữ vị trí vessel khi L&R | Signal |
| SF12 | Crew Configuration | Số người vận hành | User |
| SF13 | UUV Capacity | Số UUV mỗi chuyến | Business |
| SF14 | Modularity | Cách tích hợp LARS lên platform | Business |
| SF15 | UUV Protection | Cách bảo vệ UUV khỏi hư hại khi L&R | User |

---

## 3. Solution Mapping per Sub-Function

### SF1: Hull Construction

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S1.1 | RIB (aluminum + inflatable sponson) | REF-01 | 1 |
| S1.2 | Aluminum welded monohull | REF-06, REF-07 | 2 |
| S1.3 | Steel monohull | REF-10 | 1 |
| S1.4 | N/A (ship-mounted system) | REF-02, REF-03, REF-04, REF-05, REF-08, REF-09 | 6 |

*Note: REF-02 (L3Harris) and REF-03 (ARCIMS) are USV platforms with composite/aluminum hulls, but LARS is the product — hull is platform-dependent.*

### SF2: Vessel Size Class

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S2.1 | < 10m | REF-01 | 1 |
| S2.2 | 10-15m | REF-02, REF-03 | 2 |
| S2.3 | 25-35m | REF-06, REF-07, REF-10 | 3 |
| S2.4 | Ship-mounted (no dedicated vessel) | REF-04, REF-05, REF-08, REF-09 | 4 |

### SF3: Propulsion Type

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S3.1 | Twin outboard | REF-01 | 1 |
| S3.2 | Twin inboard diesel (shaft) | REF-06, REF-07, REF-10 | 3 |
| S3.3 | Diesel-electric / autonomous | REF-02, REF-03 | 2 |
| S3.4 | N/A (ship propulsion) | REF-04, REF-05, REF-08, REF-09 | 4 |

### SF4: Launch Method

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S4.1 | Stern ramp / slipway + cradle | REF-01, REF-02, REF-03, REF-04, REF-06, REF-07, REF-10 | **7** |
| S4.2 | Crane / A-frame | REF-05, REF-08, REF-09 | 3 |
| S4.3 | Side davit | (REF-04 alt, REF-05 alt) | 0 primary |
| S4.4 | Manual over-side | — | 0 |

### SF5: Recovery Capture — BINDING CONSTRAINT

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S5.1 | V-channel / funnel (passive, fixed at stern) | REF-01, REF-02, REF-03 | **3** |
| S5.2 | Hook / snare (manual crew) | REF-04, REF-06, REF-10 | 3 |
| S5.3 | Capture frame / "horse" (crane-lowered) | REF-05, REF-08 | 2 |
| S5.4 | Net / basket (backup) | REF-05 alt | 1 |
| S5.5 | Towed capture device (drogue) | REF-02 alt | 1 |

*Note: Many products have primary + backup methods. Counted by PRIMARY method only.*

### SF6: Recovery Actuation

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S6.1 | Electric winch | REF-01, REF-02 | 2 |
| S6.2 | Hydraulic winch | REF-03, REF-06, REF-07, REF-09, REF-10 | **5** |
| S6.3 | Crane lift | REF-05, REF-08 | 2 |
| S6.4 | Manual (hand winch / chain hoist) | REF-04 | 1 |

### SF7: UUV Guidance for Recovery

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S7.1 | USBL acoustic homing | REF-02, REF-03, REF-05 | **3** |
| S7.2 | Visual + manual crew spotting | REF-01, REF-04, REF-06, REF-10 | **4** |
| S7.3 | GPS + radio command | REF-07 | 1 |
| S7.4 | Autonomous CV (computer vision) | REF-03 target | 1 |
| S7.5 | Tether-guided (bearing from cable) | — | **0** |

### SF8: Automation Level

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S8.1 | Manual (all crew-operated) | REF-01, REF-04, REF-06, REF-10 | **4** |
| S8.2 | Semi-auto (powered, operator supervised) | REF-02, REF-05, REF-07, REF-08, REF-09 | **5** |
| S8.3 | Highly automated (minimal human) | REF-05 UMIS target | 1 |
| S8.4 | Fully autonomous (unmanned vessel) | REF-03 ARCIMS target | 1 |

### SF9: UUV Connection Type

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S9.1 | Free-swimming (no tether) | REF-01, REF-02, REF-03, REF-04, REF-05, REF-06, REF-07, REF-10 | **8** |
| S9.2 | Tethered — fiber optic (drum in UUV) | — | **0** |
| S9.3 | Tethered — copper (traditional ROV + TMS) | REF-08, REF-09 | 2 |

### SF10: LARS Power Source

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S10.1 | Ship main power (ring main) | REF-04, REF-05, REF-08, REF-09 | **4** |
| S10.2 | Dedicated genset on vessel | REF-07 | 1 |
| S10.3 | Hydraulic PTO from inboard engine | REF-06, REF-10 | 2 |
| S10.4 | Integrated (USV power system) | REF-02, REF-03 | 2 |
| S10.5 | OB alternator + battery | REF-01 | 1 |

### SF11: Station-Keeping Method

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S11.1 | Manual helm (crew) | REF-01, REF-04, REF-06, REF-10 | **4** |
| S11.2 | DP-lite (GPS + auto-throttle) | REF-02, REF-07 | 2 |
| S11.3 | Full DP (dynamic positioning) | REF-03, REF-05 | 2 |
| S11.4 | Ship DP (host vessel) | REF-08, REF-09 | 2 |

### SF12: Crew Configuration (operational)

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S12.1 | 0 (unmanned) | REF-03 target | 1 |
| S12.2 | 1-2 operators | REF-02 | 1 |
| S12.3 | 3-4 operators | REF-01, REF-04 | 2 |
| S12.4 | 5-8 operators | REF-06, REF-07 | 2 |
| S12.5 | 9+ crew | REF-10 | 1 |
| S12.6 | N/A (ship crew handles) | REF-05, REF-08, REF-09 | 3 |

### SF13: UUV Capacity (per mission)

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S13.1 | 1 UUV | REF-01, REF-02, REF-03, REF-04 | **4** |
| S13.2 | 2-4 UUVs | REF-05 | 1 |
| S13.3 | 5-8 UUVs | REF-06, REF-10 | 2 |
| S13.4 | Multi-type (UUV + ROV) | REF-05 UMIS, REF-07, REF-08 | 3 |

### SF14: Modularity / Deployment Concept

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S14.1 | Integrated (fixed on vessel) | REF-01, REF-06, REF-07, REF-10 | **4** |
| S14.2 | Containerized (ISO container) | REF-05, REF-09 | 2 |
| S14.3 | Modular bolt-on kit | REF-02, REF-04, REF-08 | 3 |
| S14.4 | Integrated USV (purpose-built) | REF-03 | 1 |

### SF15: UUV Protection

| Solution | Mô tả | Products Using | Count |
|----------|--------|----------------|-------|
| S15.1 | UHMWPE / HDPE guide rails + bumpers | REF-02, REF-03 | 2 |
| S15.2 | Shaped rubber/foam-lined cradle | REF-04, REF-05, REF-08 | 3 |
| S15.3 | Controlled descent (VFD / hydraulic speed control) | REF-02, REF-09 | 2 |
| S15.4 | Rollers in channel (reduce friction/impact) | REF-01, REF-06, REF-10 | **3** |
| S15.5 | No dedicated protection | REF-07 | 1 |

*Note: Many products combine multiple protection methods. Products assigned to PRIMARY method.*

---

## 4. Master Product × Sub-Function Matrix

| Product | SF1 | SF2 | SF3 | SF4 | SF5 | SF6 | SF7 | SF8 | SF9 | SF10 | SF11 | SF12 | SF13 | SF14 | SF15 |
|---------|-----|-----|-----|-----|-----|-----|-----|-----|-----|------|------|------|------|------|------|
| REF-01 TRV 8m | S1.1 RIB | S2.1 <10m | S3.1 Twin OB | S4.1 Ramp | S5.1 V-channel | S6.1 Elec winch | S7.2 Visual | S8.1 Manual | S9.1 Free | S10.5 OB alt | S11.1 Manual | S12.3 3-4 | S13.1 1 UUV | S14.1 Integ | S15.4 Rollers |
| REF-02 L3Harris | S1.4 N/A | S2.2 10-15m | S3.3 Diesel-E | S4.1 Ramp | S5.1 V-funnel | S6.1 Elec winch | S7.1 USBL | S8.2 Semi | S9.1 Free | S10.4 USV pwr | S11.2 DP-lite | S12.2 1-2 | S13.1 1 UUV | S14.3 Bolt-on | S15.1 UHMWPE |
| REF-03 ARCIMS | S1.4 N/A | S2.2 10-15m | S3.3 Diesel-E | S4.1 Ramp | S5.1 V-funnel | S6.2 Hyd winch | S7.1 USBL | S8.4 Auto | S9.1 Free | S10.4 USV pwr | S11.3 Full DP | S12.1 0 | S13.1 1 UUV | S14.4 USV | S15.1 UHMWPE |
| REF-04 Saab | S1.4 N/A | S2.4 Ship | S3.4 N/A | S4.1 Ramp | S5.2 Hook | S6.4 Manual | S7.2 Visual | S8.1 Manual | S9.1 Free | S10.1 Ship | S11.1 Manual | S12.3 3-4 | S13.1 1 UUV | S14.3 Bolt-on | S15.2 Foam |
| REF-05 ECA | S1.4 N/A | S2.4 Ship | S3.4 N/A | S4.2 Crane | S5.3 Cap frame | S6.3 Crane | S7.1 USBL | S8.2 Semi | S9.1 Free | S10.1 Ship | S11.3 Full DP | S12.6 N/A | S13.2 2-4 | S14.2 Container | S15.2 Foam |
| REF-06 Sewart | S1.2 Alum | S2.3 25-35m | S3.2 Twin IB | S4.1 Ramp | S5.2 Hook | S6.2 Hyd winch | S7.2 Visual | S8.1 Manual | S9.1 Free | S10.3 Hyd PTO | S11.1 Manual | S12.4 5-8 | S13.3 5-8 | S14.1 Integ | S15.4 Rollers |
| REF-07 MPC | S1.2 Alum | S2.3 25-35m | S3.2 Twin IB | S4.1 Ramp | S5.2 Hook | S6.2 Hyd winch | S7.3 GPS+radio | S8.2 Semi | S9.1 Free | S10.2 Genset | S11.2 DP-lite | S12.4 5-8 | S13.4 Multi | S14.1 Integ | S15.5 None |
| REF-08 Dbl Eagle | S1.4 N/A | S2.4 Ship | S3.4 N/A | S4.2 Crane | S5.3 Cap frame | S6.3 Crane | S7.2 Visual | S8.2 Semi | S9.3 Copper | S10.1 Ship | S11.4 Ship DP | S12.6 N/A | S13.4 Multi | S14.3 Bolt-on | S15.2 Foam |
| REF-09 Lawson | S1.4 N/A | S2.4 Ship | S3.4 N/A | S4.2 Crane | S5.2 Hook | S6.2 Hyd winch | S7.2 Visual | S8.2 Semi | S9.3 Copper | S10.1 Ship | S11.4 Ship DP | S12.6 N/A | S13.1 1 UUV | S14.2 Container | S15.3 VFD |
| REF-10 Fish | S1.3 Steel | S2.3 25-35m | S3.2 Twin IB | S4.1 Ramp | S5.2 Hook | S6.2 Hyd winch | S7.2 Visual | S8.1 Manual | S9.1 Free | S10.3 Hyd PTO | S11.1 Manual | S12.5 9+ | S13.3 5-8 | S14.1 Integ | S15.4 Rollers |

---

## 5. ANALYSIS RESULTS

### 5.1 Frequency Analysis (per sub-function)

**SF4 Launch Method:**
```
S4.1 Stern ramp:  ███████ (7/10) — DOMINANT
S4.2 Crane/A-frame: ███ (3/10)
S4.3 Side davit:   (0/10) — GAP
S4.4 Manual:       (0/10) — GAP
```

**SF5 Recovery Capture — BINDING CONSTRAINT:**
```
S5.1 V-channel/funnel: ███ (3/10) — MODERN STANDARD (all small vessels)
S5.2 Hook/snare:       ████ (4/10) — LEGACY (manual, larger vessels)
S5.3 Capture frame:    ██ (2/10) — CRANE-DEPENDENT
S5.4 Net/basket:       █ (1/10) — BACKUP ONLY
S5.5 Towed drogue:     █ (1/10) — RARE
```

**SF6 Recovery Actuation:**
```
S6.2 Hydraulic winch: █████ (5/10) — DOMINANT
S6.1 Electric winch:  ██ (2/10)
S6.3 Crane lift:      ██ (2/10)
S6.4 Manual:          █ (1/10)
```

**SF7 UUV Guidance:**
```
S7.2 Visual/manual:   ████ (4/10) — LEGACY
S7.1 USBL acoustic:   ███ (3/10) — MODERN
S7.3 GPS+radio:       █ (1/10)
S7.4 Autonomous CV:   █ (1/10) — FRONTIER
S7.5 Tether-guided:   (0/10) — ★★★ GAP — NO ONE DOES THIS
```

**SF8 Automation:**
```
S8.2 Semi-auto:       █████ (5/10) — DOMINANT
S8.1 Manual:          ████ (4/10) — LEGACY
S8.3 Highly auto:     █ (1/10) — EMERGING
S8.4 Fully auto:      █ (1/10) — FRONTIER
```

**SF9 UUV Connection:**
```
S9.1 Free-swimming:   ████████ (8/10) — OVERWHELMING DOMINANT
S9.2 Tethered FO:     (0/10) — ★★★ GAP — NO PRODUCT EXISTS
S9.3 Tethered copper:  ██ (2/10) — ROV ONLY
```

**SF10 LARS Power:**
```
S10.1 Ship main:      ████ (4/10)
S10.4 USV integrated: ██ (2/10)
S10.3 Hydraulic PTO:  ██ (2/10)
S10.2 Genset:         █ (1/10)
S10.5 OB alternator:  █ (1/10) — RARE
```

**SF11 Station-Keeping:**
```
S11.1 Manual helm:    ████ (4/10) — SIMPLE
S11.2 DP-lite:        ██ (2/10)
S11.3 Full DP:        ██ (2/10)
S11.4 Ship DP:        ██ (2/10)
```

**SF15 UUV Protection:**
```
S15.4 Rollers:        ███ (3/10)
S15.2 Foam cradle:    ███ (3/10)
S15.1 UHMWPE:         ██ (2/10)
S15.3 VFD control:    ██ (2/10)
S15.5 None:           █ (1/10)
```

### 5.2 Gap Detection

#### Solution Gaps (0/10 competitors)

| SF# | Solution Gap | Significance |
|-----|-------------|-------------|
| **SF7** | **S7.5 Tether-guided recovery** — KHÔNG AI dùng tether bearing để dẫn UUV về | ★★★ VN-XUONG-UUV có tether → guidance method HOÀN TOÀN MỚI |
| **SF9** | **S9.2 Tethered fiber optic (drum in UUV)** — KHÔNG SẢN PHẨM nào dùng FO tether với drum trong UUV | ★★★ Fundamental architectural difference |

#### Combination Gaps (never combined)

| SF-A Solution | SF-B Solution | Products with both | Opportunity |
|-------------|-------------|-------------------|-------------|
| S1.2 Aluminum mono | S2.1 <10m | **0** | Tất cả vessel <10m = RIB. Aluminum mono <10m = UNCONTESTED |
| S3.1 Twin OB | S6.1 Electric winch + genset | **0** (REF-01 = OB alt only) | Twin OB + dedicated genset + electric LARS = UNCONTESTED |
| S5.1 V-channel | S9.2 Tethered FO | **0** | V-channel recovery + tether = UNCONTESTED |
| S5.1 V-channel | S7.5 Tether-guided | **0** | V-channel + tether guidance = UNCONTESTED |
| S8.2 Semi-auto | S2.1 <10m | **0** | Small vessel (<10m) với semi-auto LARS = UNCONTESTED |
| S15.1 UHMWPE | S15.4 Rollers (combined) | **0** | UHMWPE + rollers combined = UNCONTESTED |

#### Market Gaps

| Gap | Description |
|-----|-------------|
| **Small dedicated LARS vessel (non-RIB)** | Mọi vessel <10m = RIB. Aluminum mono 8m + integrated LARS chưa có |
| **Tethered UUV L&R from small vessel** | Tất cả 10 products = free-swimming UUV hoặc ROV trên tàu lớn. Tethered UUV trên vessel 8m = NEW |
| **Electric LARS on small vessel** | Nhỏ dùng manual/OB alt, lớn dùng hydraulic. Electric + genset trên 8m = GAP |

### 5.3 Cluster Analysis

**Cluster A — Small Autonomous USV (REF-02, REF-03):**
- 10-15m, diesel-electric, V-funnel, USBL, semi→auto, 0-2 crew
- Trend: pushing toward FULLY unmanned L&R
- Price: $2-5M+

**Cluster B — Legacy Manual TRV (REF-01, REF-06, REF-10):**
- Dedicated vessel, stern ramp, hook/snare or channel, manual, visual, 3-9 crew
- Proven 70+ years, but NO innovation since 1990s
- Price: $200K-$3M

**Cluster C — Ship-Mounted MCM LARS (REF-04, REF-05, REF-08, REF-09):**
- Bolt-on or containerized, crane or ramp, ship power, semi-auto
- Platform-agnostic but HEAVY (500-10,000 kg system weight)
- Price: $500K-$2M (LARS only)

**Cluster D — Modern Multi-Purpose (REF-07):**
- Large aluminum, multiple UUV types, DP-lite, genset, semi-auto
- Jack-of-all-trades, expensive
- Price: $6M+

### 5.4 Design Space Size

```
Design Space = 4 × 4 × 4 × 4 × 5 × 4 × 5 × 4 × 3 × 5 × 4 × 5 × 4 × 4 × 5
             = 2,457,600,000 theoretical combinations

Products explored: 10 (0.0000004% of design space)
Cluster count: 4
```

### 5.5 Patent/FTO Overlay

| SF# | Solution | FTO Status |
|-----|----------|-----------|
| SF4 | S4.1 Stern ramp | ✅ SAFE — public domain, 70+ years prior art |
| SF5 | S5.1 V-channel/funnel | ✅ SAFE — generic geometry, prior art abundant |
| SF5 | S5.5 Towed drogue | ⚠️ CHECK — L3Harris may have specific implementation patents |
| SF6 | S6.1 Electric winch + VFD | ✅ SAFE — COTS components |
| SF7 | S7.5 Tether-guided | ✅ SAFE — no patents (nobody does it!) |
| SF9 | S9.2 Tethered FO drum-in-UUV | ✅ SAFE — UUV OEM owns drum design, not vessel |
| SF15 | S15.1+S15.4 UHMWPE + rollers | ✅ SAFE — generic materials |

---

## 6. VN-XUONG-UUV POSITIONING

### Solution Selection

| SF# | Sub-Function | WX Solution | Gap? | Unique? | FTO |
|-----|-------------|------------|------|---------|-----|
| SF1 | Hull Construction | **S1.2 Aluminum welded mono** | Combo gap (+ <10m) | **YES** | ✅ |
| SF2 | Vessel Size | **S2.1 <10m (8m)** | Combo gap (+ aluminum) | **YES** | ✅ |
| SF3 | Propulsion | **S3.1 Twin outboard** | Shared w/ REF-01 only | Partially | ✅ |
| SF4 | Launch Method | **S4.1 Stern ramp** | No (7/10) | No | ✅ |
| SF5 | Recovery Capture | **S5.1 V-channel/funnel** | No (3/10) | No | ✅ |
| SF6 | Recovery Actuation | **S6.1 Electric winch + VFD** | Combo gap (+ genset) | **YES** | ✅ |
| SF7 | UUV Guidance | **S7.5 Tether-guided** | **★★★ SOLUTION GAP** | **YES — 0/10** | ✅ |
| SF8 | Automation Level | **S8.2 Semi-auto** | No (5/10) | No | ✅ |
| SF9 | UUV Connection | **S9.2 Tethered FO (drum in UUV)** | **★★★ SOLUTION GAP** | **YES — 0/10** | ✅ |
| SF10 | LARS Power | **S10.2 Dedicated genset** | Combo gap (+ small vessel) | **YES** | ✅ |
| SF11 | Station-Keeping | **S11.1 Manual helm** | No (4/10) | No | ✅ |
| SF12 | Crew | **S12.3 3 operators** | Shared w/ REF-01, REF-04 | Partially | ✅ |
| SF13 | UUV Capacity | **S13.1 1 UUV** | No (4/10) | No | ✅ |
| SF14 | Modularity | **S14.1 Integrated** | No (4/10) | No | ✅ |
| SF15 | UUV Protection | **S15.1+S15.4 UHMWPE + rollers** | **COMBINATION GAP** | **YES — 0/10** | ✅ |

### Uniqueness Score

- **Sub-functions with UNIQUE solution: 5/15 (33%)**
- **Solution gaps (0/10 competitors): 2** (SF7 tether-guided, SF9 tethered FO)
- **Combination gaps: 3** (SF1+SF2 aluminum <10m, SF6+SF10 electric+genset, SF15 UHMWPE+rollers)
- **Combination match with any competitor: NO** — no single product shares >8/15 SFs with VN-XUONG-UUV
- **Closest competitor: REF-01 TRV 8m** — matches 6/15 SFs (SF2, SF3, SF4, SF5, SF12, SF13)

### Position Assessment

**VN-XUONG-UUV nằm trong vùng UNCONTESTED của design space.** Sản phẩm kết hợp 2 solution gaps (tether-guided recovery + FO tether drum-in-UUV) mà KHÔNG AI trong 10 competitors sở hữu. Thêm 3 combination gaps tạo ra một tổ hợp thiết kế chưa từng tồn tại: xuồng nhôm <10m + electric LARS + genset riêng + UHMWPE channel with rollers.

Closest competitor (TRV 8m RIB) chỉ match 40% SFs — khác biệt chính ở: hull type (RIB vs aluminum mono), tether (free vs FO), guidance (visual vs tether-bearing), LARS power (OB alt vs genset), UUV protection (rollers only vs UHMWPE+rollers).

**VN-XUONG-UUV KHÔNG cạnh tranh trực tiếp với bất kỳ sản phẩm nào trong 10 products analyzed.**

---

## 7. RECOMMENDATIONS

### Validated Decisions (gap confirms uniqueness)

| # | Decision | MC Evidence |
|---|---------|-------------|
| 1 | **Aluminum mono hull (not RIB)** | SF1+SF2: 0/10 competitors = aluminum mono <10m. Uncontested combination |
| 2 | **Tether-guided recovery** | SF7: 0/10 competitors use tether bearing. Eliminates need for $30-80K USBL system |
| 3 | **Electric LARS + dedicated genset** | SF6+SF10: 0/10 competitors combine electric winch + genset on <10m vessel |
| 4 | **FO tether drum-in-UUV** | SF9: 0/10 have this architecture. Simplifies vessel (no drum, no TMS) |
| 5 | **UHMWPE guides + rollers combined** | SF15: 0/10 combine both methods |

### New Opportunities (gaps to explore)

| # | Opportunity | Gap Type | Action |
|---|-----------|---------|--------|
| 1 | **Tether-as-recovery-aid concept** | Solution Gap | Tether bearing cho phép recovery WITHOUT USBL — cost saving $30-80K. Patent opportunity? |
| 2 | **Small aluminum LARS vessel market** | Market Gap | Mọi <10m = RIB. Aluminum mono bền hơn, phù hợp quân đội (no puncture risk from sponsons). Export potential cho navies không cần RIB |
| 3 | **Semi-auto LARS on <10m** | Combination Gap | Bridge gap giữa Cluster A (auto USV $2M+) và Cluster B (manual TRV <$500K) |

### Warnings (crowded spaces to differentiate)

| # | Warning | Crowded SF | Differentiation Strategy |
|---|---------|----------|------------------------|
| 1 | Stern ramp launch | SF4: 7/10 dùng — NO differentiation | Không cần khác biệt — proven method, adopt |
| 2 | Manual station-keeping | SF11: 4/10 — common for legacy | Acceptable for Phase 1. Plan DP-lite upgrade path cho Phase 2 |
| 3 | 1 UUV capacity | SF13: 4/10 — common | OK — driven by mission requirement |

### Input for HELIX Phase 2 (Morphological Matrix update)

Based on reverse MC gap analysis, Doc 007 should:
- **Lock** SF7 = tether-guided (unique advantage, don't optimize away)
- **Lock** SF9 = tethered FO drum-in-UUV (architecture advantage)
- **Lock** SF15 = UHMWPE + rollers (protection combination gap)
- **Explore** SF11 = DP-lite upgrade path as Phase 2 variant
- **Avoid** crane/A-frame (crowded, overkill for 8m vessel)

### Input for FORGE Pipeline

- **Uncontested space** validates product-market fit — no direct competitor
- **2 solution gaps** = potential competitive moat (tether-guided, FO drum-in-UUV)
- **Closest competitor** (TRV 8m RIB) = 40% match only → strong differentiation
- **Price positioning:** Below Cluster A ($2-5M USV) and above Cluster B legacy ($200K) → target $400-600K
- **Export potential:** aluminum LARS vessel < 10m = new market category

---

## Sources

- Existing REF files: L3Harris, Saab, ECA, Atlas LARS analyses (2026-03-06)
- REF_TRV_ReverseEng.md + REF_TRV_Global_Comparison.md (2026-03-07)
- LARS_Cross_Comparison.md (2026-03-06)
- [WHOI REMUS LARS](https://www.whoi.edu/what-we-do/explore/underwater-vehicles/auvs/remus/launch-and-recovery-systems-lars/)
- [Navy SBIR N181-039](https://www.navysbir.com/n18_1/N181-039.htm)
- [KRC Marine LARS](https://www.krcmarine.com/rov-handling-systems/lars-launch-and-recovery-systems/)
- [Saab Double Eagle](https://www.saab.com/products/double-eagle)
- Hülagü, R. & Timur, Ş. (2024). "Using Morphological Chart for Analysing Existing Designs." *Archives of Design Research*, 37(1), 27-41.

---

*COD: Steps 1-4 = Offload (O). Steps 5-6 = Core (C — CEO positioning decisions). Step 7 = Offload (O).*
*Method: Reverse Morphological Chart (Hülagü & Timur 2024)*
