---
created: 2026-04-07
updated: 2026-04-07
type: project
status: active
tags: [#type/project, #status/active, #topic/technology]
method: Pahl & Beitz — Morphological Matrix
subsystem: SS2 Visual Display & Environment Engine
---

# SS2: Visual Display & Environment Engine — Morphological Matrix
## VN-CUAV-SIM-001 | Phase 2: Conceptual Design

**Scope:** 3-screen projection 180° FOV, maritime scene rendering, UAV/USV targets, day/night/dusk
**Requirements liên quan:** G-03, S-01, T-01, T-02, T-03, T-04, T-05, T-06, T-07, T-10, P-03, E-02, Sa-04, Er-05, L-04, Q-02

---

## Sub-functions của SS2

```
SS2: VISUAL DISPLAY & ENVIRONMENT ENGINE
├── SF1: Projection / Display hardware — hiển thị hình ảnh 180° FOV
├── SF2: Render engine — tạo scene 3D real-time
├── SF3: Maritime environment — biển, trời, thời tiết, ánh sáng
├── SF4: Target models — UAV/USV 3D models + behavior AI
├── SF5: Ballistic engine — trajectory, hit detection, effects
├── SF6: Audio engine — tiếng súng, sóng biển, gió, engine UAV/USV
├── SF7: AAR (After Action Review) — ghi + replay session
└── SF8: Instructor station — điều khiển scenario, inject target
```

---

## Morphological Matrix

### SF1: Projection / Display Hardware

| | **WP-A** ★ | **WP-B** | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | 3× short-throw projector trên curved screen | 3× LCD monitor 55" cong (concave array) | 1× laser ultra-wide (180° fish-eye) | VR headset (Quest 3 / Varjo) |
| **FOV** | 180° ngang, 60° dọc | ~150° ngang (khe ghép) | 180° nhưng distortion | 360° nhưng cô lập |
| **Brightness** | 3000-5000 lumens/each | 300-500 nit | 2000+ lumens | N/A (cá nhân) |
| **Resolution** | 3× 1920×1080 = 5760×1080 | 3× 3840×2160 | Single 4K | 2× 2064×2208 |
| **Immersion** | Cao — peripheral vision | Trung bình (khe + bezel) | Cao nhưng distortion tại cạnh | Rất cao nhưng isolated |
| **Chi phí** | $3,000-6,000 (3 proj + screen) | $4,000-8,000 (3 màn 55") | $5,000-10,000 | $500-3,000 |
| **Multiplayer observe** | Instructor nhìn chung ✓ | Instructor nhìn chung ✓ | Instructor nhìn chung ✓ | Instructor không thấy ✗ |
| **VN availability** | Epson/BenQ có sẵn ✓ | Samsung/LG có sẵn ✓ | Ít lựa chọn | Quest có, Varjo import |
| **Eye safety (Sa-04)** | Cần kiểm soát vùng projection | Không vấn đề | Laser safety concern | Không vấn đề |

**★ Chọn WP-A:** 3 short-throw projector chiếu lên curved screen. Immersion tốt nhất cho weapon sim (xạ thủ đứng/ngồi, cần peripheral vision để detect mục tiêu từ bên). Instructor quan sát được. Epson/BenQ có sẵn tại VN, giá hợp lý. Zen Technologies cũng dùng pattern này.

**Screen spec:** Curved projection screen 4m rộng × 2m cao, bán kính cong ~3m, vải matt white gain 1.0-1.3. Workshop X có thể tự chế tạo khung nhôm profile + vải projection.

---

### SF2: Render Engine (Game Engine)

| | **WP-A** | **WP-B** ★ | **WP-C** | **WP-D** |
|---|---|---|---|---|
| **Nguyên lý** | Unreal Engine 5 | Unity 6 LTS | Godot 4.x | Custom OpenGL/Vulkan |
| **Quality** | Cinematic (Nanite, Lumen) | Production-ready | Đang phát triển | Tùy khả năng dev |
| **Performance 3-screen** | Tốt (multi-viewport) | Tốt (HDRP) | Chưa mature | N/A |
| **Maritime assets** | Ocean plugin có sẵn | Ocean tools có sẵn | Ít | Tự xây |
| **License** | Free < $1M revenue | Free < $200K/yr | MIT (free forever) | Free |
| **VN developer pool** | Trung bình | Lớn nhất ✓ | Nhỏ | Rất nhỏ |
| **L-04 sovereignty** | Runtime royalty-free ✓ | On-prem OK ✓ | Hoàn toàn tự do ✓ | Hoàn toàn tự do |
| **Ballistic integration** | C++ plugin ✓ | C# plugin ✓ | GDScript limited | Native |
| **Multi-display** | nDisplay (production) | Custom script | Limited | Custom |

**★ Chọn WP-B (Unity 6 LTS):** VN developer pool lớn nhất → dễ tuyển. HDRP cho maritime rendering quality tốt. License on-prem đáp ứng L-04. V-SMASH ballistic engine đã build trên Unity (synergy Q5). Multi-display cần custom nhưng well-documented.

**Lưu ý:** UE5 nDisplay là giải pháp production tốt hơn cho multi-screen, nhưng VN UE5 developer khó tìm hơn Unity.

---

### SF3: Maritime Environment

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Procedural ocean (FFT Gerstner waves) + HDRI skybox + volumetric fog | Pre-baked ocean tiles + static sky | Crytek-style water + dynamic sky |
| **Sea state** | Adjustable SS 0-5 ✓ | Fixed 3-4 preset | Adjustable nhưng heavy |
| **Ship motion sync** | Wave height → seat motion (K-03/K-04) ✓ | Không sync | Có thể sync |
| **Day/night cycle (T-06)** | ✓ sun position + post-process exposure | Pre-baked 3 preset | ✓ |
| **Weather** | Rain, fog, haze (visibility 500m-10km) | Static preset | Rain, fog ✓ |
| **Performance (60fps)** | Tốt với LOD | Rất tốt | Nặng |
| **Assets** | Unity HDRP ocean asset ~$50-150 | Free/custom | Expensive |

**★ Chọn WP-A:** Procedural ocean cho phép điều chỉnh sea state real-time (instructor control). FFT Gerstner waves = industry standard cho maritime sim. Wave height data sync với seat motion (SS3). Day/night/dusk đáp ứng T-06. Unity asset store có sẵn (Crest, KWS).

---

### SF4: Target Models (UAV / USV)

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Scripted waypoint paths + random perturbation | Finite State Machine (FSM) behavior trees | Full AI (ML-trained evasion) |
| **UAV profiles (T-05)** | 5+ profiles coded: straight, jinking, kamikaze, pop-up, swarm ✓ | Flexible nhưng dev-heavy | Adaptive — khó kiểm soát |
| **USV profiles (O-06)** | 3+ profiles: straight, zigzag, high-speed ✓ | Flexible ✓ | Adaptive ✓ |
| **Swarm (T-05)** | Flocking algorithm + leader-follower | Complex behavior tree | Emergent |
| **Size/RCS fidelity (T-02)** | Scale model đúng + visual LOD (DJI Mavic 30cm visible ≥ 300m) ✓ | Same | Same |
| **Dev effort** | Thấp — đủ cho PA-2 | Trung bình | Cao — research-grade |
| **Instructor inject (S-05)** | ≤ 1s spawn at waypoint ✓ | ≤ 1s spawn ✓ | Uncertain timing |
| **Adaptive difficulty (T-09)** | Không (fixed profile) | Có thể | Tốt nhất |

**★ Chọn WP-A:** Scripted waypoint + random perturbation đủ cho PA-2 STANDARD. 5 UAV + 3 USV profiles coded trực tiếp. Swarm dùng flocking algorithm đơn giản (4-8 units). T-09 adaptive difficulty → upgrade path PA-3/PA-4, không cần cho PA-2.

**3D Model sources:** Sketchfab (DJI Mavic, FPV drone) + custom USV model (simple boat mesh). Low-poly cho performance, LOD cho distance rendering.

---

### SF5: Ballistic Engine

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | V-SMASH ballistic core (reuse) + 12.7mm tables | Custom raycasting + drag model | Hitscan (simplified) |
| **Physics** | 6DOF trajectory: gravity, drag, wind, lead angle | 3DOF (gravity + drag) | Instant hit (no travel time) |
| **Accuracy (T-03)** | ±5% TM tables @ 100-1500m ✓ | ±10% | Not applicable |
| **Lead computing** | Correct (target V + bullet ToF) ✓ | Approximate | Not applicable |
| **Ship motion compensation** | ✓ (weapon → world transform includes ship roll/pitch) | ✓ | Partial |
| **Hit detection (S-07)** | Collision volume on target mesh, ≥ 95% accuracy ✓ | Raycast, ~90% | 100% (hitscan) |
| **Effects** | Tracer, splash, target damage model, smoke | Tracer, splash | Flash only |
| **Dev effort** | Thấp (reuse V-SMASH) | Trung bình | Thấp |
| **Synergy** | BB-01 LOMAH hit detection, V-SMASH engine ✓ | Không | Không |

**★ Chọn WP-A:** Tái sử dụng V-SMASH ballistic core — đã có 12.7mm B-32 trajectory model (6DOF). Thêm wind effect + ship motion compensation. Hit detection dùng collision volume trên target mesh. Tracer rendering (streak particle) cho visual feedback. IRONMESH synergy maximum.

---

### SF6: Audio Engine

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Unity FMOD / Wwise middleware + 5.1 speakers | Unity built-in audio + stereo | Binaural headphones only |
| **Channels** | 5.1 surround (target direction) | Stereo (L/R panning) | Binaural 3D |
| **Gunfire** | Sampled 12.7mm (layered: muzzle, crack, echo) | Single sample | Binaural sample |
| **Environment** | Ocean waves, wind, UAV buzz, USV engine | Basic ambient loop | Full 3D audio |
| **Directional** | Target approach direction qua surround ✓ | Basic L/R | Excellent |
| **Volume (Er-05)** | ≥ 85dB qua 5 speakers ✓ | ≥ 85dB qua 2 speakers | Headphone limited |
| **Chi phí** | $300-500 (speakers) + free/low license | $100-200 | $200-400 |

**★ Chọn WP-A:** 5.1 surround cho spatial audio — xạ thủ nghe UAV đến từ hướng nào (critical cho detection training). FMOD free cho <$200K revenue. 12.7mm gunfire sampled + layered effects. Binaural headphones (Er-07) = optional upgrade.

---

### SF7: After Action Review (AAR)

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Full session recording: aim path + shots + targets + replay viewer | Screenshot + scorecard | Video recording (screen capture) |
| **Data (S-06)** | Aim path (continuous), shot timing, hit/miss, target trajectory, score ✓ | Score + shot count only | Visual only, no data |
| **Replay (T-07)** | 3D replay bất kỳ góc nhìn, rewind, slow-mo ✓ | Không | Video replay only |
| **Storage** | ~50MB/session (binary log) | ~1KB/session | ~2GB/session (video) |
| **Export** | CSV + replay file + PDF report | PDF report | Video file |
| **Dev effort** | Trung bình (custom replay system) | Thấp | Thấp (OBS/screen cap) |

**★ Chọn WP-A:** Full session recording — ghi aim path liên tục (10Hz), shot events, target positions. Replay viewer cho instructor debrief (T-07). Export CSV cho training analytics. ~50MB/session = lưu trữ dễ dàng (1TB = ~20,000 sessions).

---

### SF8: Instructor Station

| | **WP-A** ★ | **WP-B** | **WP-C** |
|---|---|---|---|
| **Nguyên lý** | Dedicated PC + 2 monitors (overview + controls) | Same PC, second monitor | Tablet (remote control) |
| **View** | God-eye view (top-down + 3D chase) + trainee view mirror | Trainee view only | Limited |
| **Control (S-05)** | Inject target < 1s, pause, change weather, adjust difficulty ✓ | Same | Subset |
| **Multi-trainee (S-08)** | ≤ 4 trainees via LAN ✓ | 1 trainee | ≤ 4 via WiFi |
| **AAR access** | Instant replay on instructor monitor ✓ | Shared screen | Limited |
| **UI (Er-04)** | GUI tiếng Việt, no coding needed ✓ | Same | Same |
| **Chi phí** | $1,500-2,000 (PC + 2 monitors) | $0 (shared) | $500 (tablet) |

**★ Chọn WP-A:** Dedicated instructor PC với 2 monitors — overview map + trainee POV mirror. GUI tiếng Việt (Er-03/Er-04). Target inject ≤ 1s (S-05). LAN connection cho multi-trainee expansion (S-08). AAR replay trực tiếp trên instructor screen.

---

## Concept Tổng Hợp SS2 — PA-2 STANDARD

```
SS2: VISUAL DISPLAY & ENVIRONMENT — SELECTED CONCEPT
═══════════════════════════════════════════════════════

DISPLAY:      3× short-throw projector (Epson/BenQ 3000+ lm)
              Curved screen 4m×2m, 180° FOV
              Resolution: 5760×1080 (3×FHD)

ENGINE:       Unity 6 LTS + HDRP
              GPU: NVIDIA RTX 4080/4090 (P-03)
              Multi-display: custom triple output

OCEAN:        Procedural FFT Gerstner waves (Crest/KWS)
              Sea state 0-5, day/night/dusk cycle
              Weather: rain, fog, haze (visibility 500m-10km)

TARGETS:      Scripted waypoint + perturbation
              5 UAV profiles + 3 USV profiles + swarm 4-8
              3D models: Sketchfab + custom

BALLISTICS:   V-SMASH core reuse (6DOF, 12.7mm B-32)
              Ship motion compensation
              Tracer rendering + collision hit detection

AUDIO:        FMOD 5.1 surround, 5 speakers
              Sampled gunfire + spatial UAV/USV approach
              Er-05: ≥ 85dB

AAR:          Full session log (aim path 10Hz + shots + targets)
              3D replay viewer + CSV export + PDF report

INSTRUCTOR:   Dedicated PC + 2 monitors
              GUI tiếng Việt, inject target < 1s
              Multi-trainee ≤ 4 via LAN
```

---

## Ước Tính Chi Phí SS2 (BOM sơ bộ)

| Hạng mục | Chi phí ước tính |
|----------|-----------------|
| 3× projector short-throw (Epson EB-L200SW hoặc tương đương) | $3,000-4,500 |
| Curved projection screen (tự chế tạo: khung nhôm + vải) | $300-500 |
| Render PC: RTX 4090 + i9/Ryzen 9 + 64GB RAM + NVMe | $3,000-4,000 |
| Instructor PC: RTX 4060 + 2× 27" monitors | $1,500-2,000 |
| 5.1 speaker system (5 speakers + subwoofer + amplifier) | $400-600 |
| Software licenses (Unity: free, FMOD: free, ocean asset: $100-150) | $150-300 |
| Network switch + cabling (LAN multi-trainee ready) | $100-200 |
| **TỔNG SS2** | **~$8,450-12,100** |

**SS2 chiếm ~60-70% tổng chi phí hệ thống** — display + compute là dominant cost.

---

## Requirements Coverage Check

| Req ID | Yêu Cầu | Covered by | Status |
|--------|---------|------------|--------|
| G-03 | 3 màn, FOV ≥ 150° ngang, ≥ 50° dọc | 3 projector 180°×60° | ✓ |
| S-01 | Latency ≤ 50ms | Unity HDRP + low-latency proj | ✓ (need verify Q-02) |
| T-01 | ≥ 60 fps | RTX 4090, HDRP optimized | ✓ |
| T-02 | UAV Group 1 visible ≥ 300m | LOD model + resolution 5760px | ✓ |
| T-03 | Ballistic ±5% TM tables | V-SMASH core reuse | ✓ |
| T-04 | Ship motion SS 1-4 | Procedural ocean sync | ✓ |
| T-05 | ≥ 5 UAV attack profiles | 5 scripted profiles | ✓ |
| T-06 | 3 lighting conditions | Day/dusk/night cycle | ✓ |
| T-07 | AAR replay per-shot | Full session recording | ✓ |
| P-03 | GPU NVIDIA RTX 4080/4090 | Specified | ✓ |
| E-02 | ≤ 5kW total | Render PC ~500W + proj 3×300W + audio ~100W = ~1.5kW (SS2 phần) | ✓ |
| Sa-04 | Eye safety projection | Projector behind operator + screen distance ≥ 2m | ✓ |
| Er-05 | Audio ≥ 85dB | 5.1 system rated | ✓ |
| L-04 | On-premise, no foreign server | Unity runtime + all local | ✓ |
| Q-02 | Latency test before delivery | Test protocol needed | ✓ (define in Phase 3) |
| S-05 | Instructor inject ≤ 1s | Dedicated instructor station | ✓ |
| S-06 | AAR full recording | WP-A: aim path + shots + targets | ✓ |
| S-07 | Hit accuracy ≥ 95% | Collision volume detection | ✓ |
| Er-03 | UI 100% tiếng Việt | Unity localization | ✓ |
| Er-04 | No programming for instructor | GUI-based scenario | ✓ |
| O-05 | ≥ 5 UAV target profiles | 5 profiles + swarm | ✓ |
| O-06 | ≥ 3 USV target profiles | 3 profiles | ✓ |
| O-07 | ≥ 10 pre-built scenarios | Scripted scenario library | ✓ (content task) |

**Coverage: 22/22 requirements liên quan — FULL** ✓

---

## Next: SS3 Motion Platform (Seat Motion Simulation)
