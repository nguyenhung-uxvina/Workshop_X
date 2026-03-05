# PHASE 2: CONCEPTUAL DESIGN
## HỆ THỐNG GIÁM SÁT BIÊN GIỚI TỰ ĐỘNG
## VN-AICAM-BORDER-001 "BIÊN CƯƠNG"

---

| **Document** | Conceptual Design v1.0 |
|--------------|------------------------|
| **Project** | VN-AICAM-BORDER-001 |
| **Phase** | 2 - Conceptual Design |
| **Input** | Requirements List v1.0 (193 requirements) |
| **Date** | 30/01/2026 |
| **Status** | DRAFT |

---

# PART 1: PROBLEM ABSTRACTION
## (Pahl & Beitz 5-Step Method)

### 1.1 Purpose of Abstraction

Trước khi tạo Function Structure, chúng ta cần **abstraction** để:
- Loại bỏ solution bias và fixed ideas
- Xác định **essential problem** theo cách solution-neutral
- Mở rộng design space để tìm optimal solutions
- Tránh "thiết kế hệ thống camera AI" → thay vào đó tìm "cách tốt nhất để phát hiện xâm nhập biên giới"

---

### 1.2 Step 1: Eliminate Personal Preferences

**Review requirements for solution bias:**

| Original Requirement | Assessment | Action |
|---------------------|------------|--------|
| "NVIDIA Jetson" (AI.04) | Solution bias - specifies platform | Reformulate: "Process AI inference in real-time with power ≤25W per node" |
| "YOLO-based" (AI.01) | Solution bias - specifies algorithm | Reformulate: "Detect targets with ≥95% accuracy, ≤30ms latency" |
| "PTZ camera" (CAM.06-08) | Solution preference | Reformulate: "Provide wide-area coverage with target identification capability" |
| "ONVIF integration" (INT.01) | **Retained** - Industry standard for interoperability | Keep as interface constraint |
| "Edge computing" (Architecture) | Solution bias | Reformulate: "Process data locally to minimize latency and bandwidth" |

**Result:** 5 solution biases identified and reformulated into solution-neutral functional statements.

---

### 1.3 Step 2: Omit Non-Essential Requirements

**Main Function Statement:**
> "Automatically detect, classify, and track border intrusions to enable rapid response by security forces"

**Essential vs Non-Essential Classification:**

| Requirement Type | Essential (Retain) | Non-Essential (Omit for Abstraction) |
|------------------|-------------------|-------------------------------------|
| **Core Function** | DET.01-13, CLS.01-13, BEH.01-11, TRK.01-09 | - |
| **Critical Constraints** | ENV.01-08 (environment), SEC.01-09 (security) | PRO.05 (UV resistance - detail) |
| **Interface Mandates** | INT.01-06 (C4I, GIS) | UI.12 (mobile interface - nice-to-have) |
| **Physical Limits** | GEO.01-04, PWR.01-08 | GEO.05 (portable option - variant) |
| **Operational** | ALR.01-08, COM.01-10 | ALR.09 (mobile alerts - nice-to-have) |

**Retained for Essential Problem:** ~150 requirements (core function + critical constraints)

---

### 1.4 Step 3: Transform Quantitative → Qualitative

| Quantitative Specification | Qualitative Essence |
|---------------------------|---------------------|
| "Detection range ≥500m (person, day)" | Detect humans at tactically significant distances |
| "Detection probability ≥95%" | Highly reliable detection minimizing missed intrusions |
| "False alarm rate ≤5/hour" | Low nuisance alarms to maintain operator trust |
| "Latency ≤200ms (detection to alert)" | Near-instantaneous warning enabling rapid response |
| "Classification accuracy ≥90%" | Reliably distinguish threat types from non-threats |
| "-10°C to +55°C operating" | Function across Vietnamese climate extremes |
| "IP67, IK10 protection" | Survive harsh outdoor border environment |
| "≥72 hours offline operation" | Autonomous operation during communication loss |
| "Local content ≥40%" | Indigenous capability building for defense self-reliance |
| "Cost ≤30% of Western systems" | Affordable for wide-area deployment |

---

### 1.5 Step 4: Generalize the Results

| Specific Formulation | Generalized Formulation | Assessment |
|---------------------|------------------------|------------|
| "AI camera system" | "Automated intrusion detection system" | Good - allows non-camera sensors |
| "Edge AI processing" | "Distributed intelligent processing" | Good - allows cloud/hybrid |
| "PTZ camera cluster" | "Multi-sensor coverage array" | Good - allows fixed cameras, radar |
| "YOLO object detection" | "Real-time target detection algorithm" | Good - allows other AI approaches |
| "Vietnamese border" | "Remote perimeter environment" | Good - applicable to other scenarios |

**Generalization Boundary:** We maintain specificity for:
- Border security context (not general surveillance)
- Vietnamese operational environment
- Military/defense customer requirements
- NDAA compliance constraint

---

### 1.6 Step 5: Solution-Neutral Problem Formulation

**ESSENTIAL PROBLEM STATEMENT:**

```
┌─────────────────────────────────────────────────────────────────────────┐
│                                                                         │
│  KHÔNG PHẢI: "Thiết kế hệ thống camera AI giám sát biên giới"          │
│              (Design an AI camera border surveillance system)           │
│                                                                         │
│  MÀ LÀ:      "Phát hiện, phân loại và theo dõi tự động các hoạt động   │
│               xâm nhập biên giới trong điều kiện môi trường khắc nghiệt │
│               để cho phép phản ứng nhanh của lực lượng an ninh"         │
│                                                                         │
│              (Automatically detect, classify, and track border          │
│               intrusion activities in harsh environmental conditions    │
│               to enable rapid response by security forces)              │
│                                                                         │
│  ESSENTIAL CONSTRAINTS:                                                 │
│  • Remote, unattended operation                                         │
│  • Extreme weather (tropical, highland, coastal)                        │
│  • Limited infrastructure (power, connectivity)                         │
│  • 24/7 persistent monitoring                                           │
│  • Human-in-the-loop decision making                                    │
│  • Indigenous manufacturing capability                                  │
│  • Affordable for wide-area deployment                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

**Solution-Neutral Function Formulation:**

| Don't Design... | Instead, Look For... |
|-----------------|---------------------|
| "AI camera" | Best way to **sense intrusion** in border environment |
| "Edge server" | Best way to **process and fuse** sensor data locally |
| "YOLO detection" | Best way to **recognize threats** from sensor inputs |
| "PTZ tracking" | Best way to **maintain target contact** across coverage area |
| "Alert system" | Best way to **notify operators** of confirmed threats |

---

# PART 2: FUNCTION STRUCTURE

### 2.1 Overall Function

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         OVERALL FUNCTION                                │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  INPUT:                          OUTPUT:                                │
│  ┌──────────────┐               ┌──────────────────────────────┐       │
│  │ • Light      │               │ • Threat alerts              │       │
│  │ • IR energy  │    ┌─────┐    │ • Target classification      │       │
│  │ • Thermal    │───►│ F0  │───►│ • Track history              │       │
│  │ • RF signals │    └─────┘    │ • Evidence recordings        │       │
│  │ • Power      │               │ • Situational awareness      │       │
│  │ • Commands   │               │                              │       │
│  └──────────────┘               └──────────────────────────────┘       │
│                                                                         │
│  F0: AUTOMATICALLY DETECT, CLASSIFY, AND TRACK BORDER INTRUSIONS       │
│      TO ENABLE RAPID SECURITY RESPONSE                                  │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 2.2 Function Decomposition (Level 1)

```
                              F0: Border Intrusion Detection
                                          │
           ┌──────────────┬───────────────┼───────────────┬──────────────┐
           │              │               │               │              │
           ▼              ▼               ▼               ▼              ▼
    ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐
    │   F1     │   │   F2     │   │   F3     │   │   F4     │   │   F5     │
    │  SENSE   │   │ PROCESS  │   │ ANALYZE  │   │ RESPOND  │   │ SUPPORT  │
    │ ENVIRON- │──►│  DATA    │──►│ THREATS  │──►│ & ALERT  │   │ SYSTEM   │
    │  MENT    │   │          │   │          │   │          │   │          │
    └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘
         │              │               │               │              │
    Acquire raw    Process &      Detect,         Generate      Provide
    sensor data    enhance        classify,       alerts &      power,
    from border    imagery        track           record        comms,
    environment                   targets         evidence      maintenance
```

---

### 2.3 Function Structure (Level 2) - Detailed Breakdown

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           FUNCTION STRUCTURE - LEVEL 2                              │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  F1: SENSE ENVIRONMENT                                                              │
│  ├── F1.1: Capture visible light images                                             │
│  │         [Energy: Light → Signal: Video]                                          │
│  ├── F1.2: Capture infrared/thermal images                                          │
│  │         [Energy: IR → Signal: Thermal data]                                      │
│  ├── F1.3: Illuminate scene (active IR)                                             │
│  │         [Energy: Electrical → Energy: IR]                                        │
│  ├── F1.4: Pan/Tilt/Zoom sensor                                                     │
│  │         [Signal: Command → Kinematics: Orientation]                              │
│  └── F1.5: Protect sensor from environment                                          │
│            [Material: Housing → Function: Protection]                               │
│                                                                                     │
│  F2: PROCESS DATA                                                                   │
│  ├── F2.1: Digitize and encode video                                                │
│  │         [Signal: Analog → Signal: Digital]                                       │
│  ├── F2.2: Enhance image quality                                                    │
│  │         [Signal: Raw → Signal: Enhanced]                                         │
│  ├── F2.3: Compress video for storage/transmission                                  │
│  │         [Signal: Full → Signal: Compressed]                                      │
│  ├── F2.4: Fuse multi-camera data                                                   │
│  │         [Signal: Multiple → Signal: Fused]                                       │
│  └── F2.5: Timestamp and geotag data                                                │
│            [Signal: Data → Signal: Metadata]                                        │
│                                                                                     │
│  F3: ANALYZE THREATS                                                                │
│  ├── F3.1: Detect objects in scene                                                  │
│  │         [Signal: Video → Signal: Detections]                                     │
│  ├── F3.2: Classify detected objects                                                │
│  │         [Signal: Detections → Signal: Classifications]                           │
│  ├── F3.3: Track objects across frames                                              │
│  │         [Signal: Detections → Signal: Tracks]                                    │
│  ├── F3.4: Analyze behavior patterns                                                │
│  │         [Signal: Tracks → Signal: Behaviors]                                     │
│  ├── F3.5: Correlate tracks across cameras                                          │
│  │         [Signal: Multiple tracks → Signal: Fused tracks]                         │
│  ├── F3.6: Assess threat level                                                      │
│  │         [Signal: Classification + Behavior → Signal: Threat level]               │
│  └── F3.7: Detect geo-fence violations                                              │
│            [Signal: Track + Map → Signal: Violation alert]                          │
│                                                                                     │
│  F4: RESPOND & ALERT                                                                │
│  ├── F4.1: Generate visual alerts                                                   │
│  │         [Signal: Threat → Signal: Visual notification]                           │
│  ├── F4.2: Generate audio alerts                                                    │
│  │         [Signal: Threat → Energy: Sound]                                         │
│  ├── F4.3: Transmit alert to command                                                │
│  │         [Signal: Alert → Signal: Remote notification]                            │
│  ├── F4.4: Record evidence video                                                    │
│  │         [Signal: Video → Material: Storage]                                      │
│  ├── F4.5: Display situational awareness                                            │
│  │         [Signal: All data → Signal: UI display]                                  │
│  └── F4.6: Escalate unacknowledged alerts                                           │
│            [Signal: Timeout → Signal: Escalation]                                   │
│                                                                                     │
│  F5: SUPPORT SYSTEM                                                                 │
│  ├── F5.1: Convert and distribute power                                             │
│  │         [Energy: AC/DC → Energy: Regulated DC]                                   │
│  ├── F5.2: Provide backup power                                                     │
│  │         [Energy: Battery → Energy: Backup DC]                                    │
│  ├── F5.3: Transmit data (WAN link)                                                 │
│  │         [Signal: Local → Signal: Remote]                                         │
│  ├── F5.4: Receive commands (WAN link)                                              │
│  │         [Signal: Remote → Signal: Local]                                         │
│  ├── F5.5: Secure communications                                                    │
│  │         [Signal: Plain → Signal: Encrypted]                                      │
│  ├── F5.6: Monitor system health                                                    │
│  │         [Signal: Sensors → Signal: Diagnostics]                                  │
│  ├── F5.7: Enable remote maintenance                                                │
│  │         [Signal: Remote → Function: Update/Configure]                            │
│  └── F5.8: Synchronize time across nodes                                            │
│            [Signal: NTP/GPS → Signal: Synchronized time]                            │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 2.4 Function Structure Diagram (Flow View)

```
┌─────────────────────────────────────────────────────────────────────────────────────────────────────┐
│                                    FUNCTION STRUCTURE DIAGRAM                                       │
│                                      VN-AICAM-BORDER-001                                           │
├─────────────────────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                                     │
│    INPUTS                      MAIN FUNCTION CHAIN                              OUTPUTS            │
│    ═══════                     ═══════════════════                              ═══════            │
│                                                                                                     │
│    ┌─────────┐                                                                                      │
│    │ Light   │───┐                                                                                  │
│    │(visible)│   │     ┌─────────────┐                                                             │
│    └─────────┘   │     │   F1.1      │                                                             │
│                  ├────►│ Capture     │──┐                                                          │
│    ┌─────────┐   │     │ Visible     │  │                                                          │
│    │ IR      │───┤     └─────────────┘  │                                                          │
│    │ Energy  │   │                      │    ┌─────────────┐                                       │
│    └─────────┘   │     ┌─────────────┐  │    │   F2.1-2.3  │                                       │
│                  ├────►│   F1.2      │──┼───►│ Digitize,   │──┐                                    │
│    ┌─────────┐   │     │ Capture IR/ │  │    │ Enhance,    │  │                                    │
│    │ Thermal │───┘     │ Thermal     │  │    │ Compress    │  │                                    │
│    │ Energy  │         └─────────────┘  │    └─────────────┘  │                                    │
│    └─────────┘                          │                      │                                    │
│                                         │                      │    ┌─────────────┐                │
│                        ┌─────────────┐  │    ┌─────────────┐  │    │   F3.1      │                │
│    ┌─────────┐         │   F1.3      │  │    │   F2.4      │  ├───►│ Detect      │──┐             │
│    │ Elec.   │────────►│ Illuminate  │──┘    │ Fuse Multi- │──┘    │ Objects     │  │             │
│    │ Power   │         │ (Active IR) │       │ Camera      │       └─────────────┘  │             │
│    └─────────┘         └─────────────┘       └─────────────┘                        │             │
│        │                                           ▲                                │             │
│        │                                           │                                │             │
│        │               ┌─────────────┐             │        ┌─────────────┐        │             │
│        │               │   F1.4      │             │        │   F3.2      │        │             │
│        ├──────────────►│ Pan/Tilt/   │─────────────┘        │ Classify    │◄───────┤             │
│        │               │ Zoom        │                      │ Objects     │        │             │
│        │               └─────────────┘                      └─────────────┘        │             │
│        │                     ▲                                    │                │             │
│        │                     │                                    │                │             │
│        │                     │       ┌─────────────┐              │                │             │
│    ┌─────────┐               │       │   F3.3      │              │                │             │
│    │ Commands│───────────────┘       │ Track       │◄─────────────┴────────────────┤             │
│    │ (User)  │                       │ Objects     │                               │             │
│    └─────────┘                       └─────────────┘                               │             │
│                                            │                                       │             │
│                                            ▼                                       │             │
│                                      ┌─────────────┐                               │             │
│                                      │   F3.4      │                               │             │
│                                      │ Analyze     │◄──────────────────────────────┘             │
│                                      │ Behavior    │                                             │
│                                      └─────────────┘                                             │
│                                            │                                                     │
│                                            ▼                                                     │
│                        ┌─────────────┐     │     ┌─────────────┐                                │
│                        │   F3.5      │     │     │   F3.7      │                                │
│                        │ Correlate   │◄────┴────►│ Geo-fence   │                                │
│                        │ Cross-Cam   │           │ Detection   │                                │
│                        └─────────────┘           └─────────────┘                                │
│                              │                         │                                         │
│                              ▼                         ▼                                         │
│                        ┌─────────────────────────────────┐                                       │
│                        │           F3.6                  │                                       │
│                        │     Assess Threat Level         │                                       │
│                        └─────────────────────────────────┘                                       │
│                                       │                                                          │
│                                       ▼                                                          │
│         ┌──────────────┬──────────────┼──────────────┬──────────────┐                           │
│         │              │              │              │              │                           │
│         ▼              ▼              ▼              ▼              ▼                           │
│   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐    OUTPUTS          │
│   │  F4.1    │   │  F4.2    │   │  F4.3    │   │  F4.4    │   │  F4.5    │    ═══════          │
│   │ Visual   │   │ Audio    │   │ Transmit │   │ Record   │   │ Display  │                     │
│   │ Alert    │   │ Alert    │   │ to Cmd   │   │ Evidence │   │ SA       │                     │
│   └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘                     │
│        │              │              │              │              │                            │
│        ▼              ▼              ▼              ▼              ▼                            │
│   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐   ┌─────────┐                          │
│   │ Screen  │   │ Buzzer/ │   │ Network │   │ Storage │   │ Map/    │                          │
│   │ Popup   │   │ Speaker │   │ Message │   │ Archive │   │ Video   │                          │
│   └─────────┘   └─────────┘   └─────────┘   └─────────┘   └─────────┘                          │
│                                                                                                 │
│   ════════════════════════════════════════════════════════════════════════════════════         │
│                           SUPPORT FUNCTIONS (F5)                                               │
│   ════════════════════════════════════════════════════════════════════════════════════         │
│                                                                                                 │
│   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐   ┌──────────┐                     │
│   │  F5.1    │   │  F5.2    │   │  F5.3-4  │   │  F5.5    │   │  F5.6-8  │                     │
│   │ Power    │   │ Backup   │   │ WAN      │   │ Encrypt  │   │ Health   │                     │
│   │ Convert  │   │ (UPS)    │   │ Tx/Rx    │   │ Comms    │   │ Monitor  │                     │
│   └──────────┘   └──────────┘   └──────────┘   └──────────┘   └──────────┘                     │
│        │              │              │              │              │                            │
│        └──────────────┴──────────────┴──────────────┴──────────────┘                           │
│                                      │                                                          │
│                              Supports all F1-F4                                                 │
│                                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 3: WORKING PRINCIPLES SEARCH

### 3.1 Working Principles for Main Sub-Functions

#### F1: SENSE ENVIRONMENT

| Sub-Function | Physical Effect | Working Principle | Pros | Cons |
|--------------|-----------------|-------------------|------|------|
| **F1.1: Capture visible** | Photoelectric effect | CMOS image sensor | Low cost, HD, color | Limited in darkness |
| | | CCD image sensor | High quality | Higher power, cost |
| **F1.2: Capture IR/Thermal** | Pyroelectric effect | Uncooled microbolometer | No cooling, compact | Lower sensitivity |
| | | Photoconductive | Cooled thermal (MWIR) | High sensitivity | Expensive, power |
| | | Photovoltaic | SWIR InGaAs | All-weather | Very expensive |
| **F1.3: Illuminate** | LED emission | IR LED array | Low cost, reliable | Limited range |
| | | Laser diode | IR laser illuminator | Long range | Eye safety, cost |
| **F1.4: Point sensor** | Electric motor | Pan-tilt servo | Precise, reliable | Size, power |
| | | Fixed multi-camera | Array coverage | No moving parts | More cameras needed |
| | | Panoramic lens | 360° fixed | Simple | Distortion, lower res |
| **F1.5: Protect sensor** | Material barrier | Sealed housing (IP67) | Robust | Weight |
| | | Active heating/cooling | Temp-controlled enclosure | Extended temp range | Power, complexity |

#### F3: ANALYZE THREATS

| Sub-Function | Physical Effect | Working Principle | Pros | Cons |
|--------------|-----------------|-------------------|------|------|
| **F3.1: Detect objects** | Pattern recognition | CNN (YOLO family) | Fast, accurate | Training data needed |
| | | Classical CV (HOG+SVM) | Low compute | Lower accuracy |
| | | Motion detection (BGS) | Simple | High false alarms |
| | | Radar detection | RF reflection | All-weather, range | Cost, different sensor |
| **F3.2: Classify objects** | Pattern recognition | CNN classification | Multi-class accurate | Compute intensive |
| | | Template matching | Fixed templates | Simple | Limited categories |
| | | Ensemble models | Multiple classifiers | High accuracy | Complexity |
| **F3.3: Track objects** | State estimation | Kalman filter | Real-time, efficient | Linear motion assumption |
| | | Particle filter | Non-linear capable | More compute |
| | | Deep SORT | Re-ID capable | State-of-art | Training needed |
| | | IoU tracker | Simple overlap | Very fast | No motion model |
| **F3.4: Analyze behavior** | Pattern recognition | Rule-based (heuristic) | Explainable | Manual rules |
| | | LSTM/Transformer | Learn complex patterns | Data hungry |
| | | Graph neural network | Relationship modeling | Complex |

#### F4: RESPOND & ALERT

| Sub-Function | Physical Effect | Working Principle | Pros | Cons |
|--------------|-----------------|-------------------|------|------|
| **F4.1-2: Alert generation** | Signal output | On-screen popup | Immediate | Operator must watch |
| | | Audio alarm | Attention-getting | Noise fatigue |
| | | SMS/Push notification | Remote reach | Latency |
| **F4.3: Transmit** | Electromagnetic waves | Fiber optic | High bandwidth, secure | Infrastructure |
| | | Microwave link | High bandwidth | Line-of-sight |
| | | 4G/LTE cellular | Widely available | Bandwidth limited |
| | | VSAT satellite | Anywhere | Latency, cost |
| **F4.4: Record evidence** | Magnetic/Electronic | SSD local storage | Fast, reliable | Capacity limited |
| | | HDD RAID array | High capacity | Size, vibration |
| | | Cloud storage | Unlimited | Bandwidth, security |

#### F5: SUPPORT SYSTEM

| Sub-Function | Physical Effect | Working Principle | Pros | Cons |
|--------------|-----------------|-------------------|------|------|
| **F5.1-2: Power** | Electromagnetic | Grid power + UPS | Reliable, high capacity | Infrastructure needed |
| | Photovoltaic | Solar + battery | Off-grid capable | Weather dependent |
| | Electrochemical | Fuel cell | Long duration | Fuel supply |
| | Thermodynamic | Generator | High power | Fuel, maintenance |
| **F5.5: Secure comms** | Cryptographic | AES-256 encryption | Strong security | Processing overhead |
| | | Physical isolation | Air-gapped network | No remote access |
| | | VPN tunnel | Proven technology | Bandwidth overhead |

---

# PART 4: MORPHOLOGICAL MATRIX

### 4.1 Morphological Matrix - Core Functions

| Sub-Function | Solution 1 | Solution 2 | Solution 3 | Solution 4 |
|--------------|-----------|-----------|-----------|-----------|
| **F1.1: Visible imaging** | CMOS (2MP) | CMOS (4K) | CCD (2MP) | - |
| **F1.2: Night imaging** | IR-enhanced CMOS | Uncooled thermal | Cooled thermal | Starlight CMOS |
| **F1.3: Illumination** | IR LED (850nm) | IR LED (940nm) | Laser illuminator | None (passive) |
| **F1.4: Coverage method** | PTZ camera | Fixed multi-camera array | Panoramic 360° | Hybrid PTZ+Fixed |
| **F1.5: Protection** | IP67 housing | IP67 + heater | IP67 + wiper | Pressurized housing |
| **F3.1: Detection** | YOLO (v8/v11) | SSD MobileNet | Faster R-CNN | Classical CV |
| **F3.2: Classification** | Same CNN | Separate classifier | Ensemble | Rule-based |
| **F3.3: Tracking** | Deep SORT | ByteTrack | Kalman + IoU | Particle filter |
| **F3.4: Behavior** | Rule-based | LSTM | Transformer | Hybrid |
| **F4.3: Transmission** | Fiber | 4G LTE | VSAT | Microwave |
| **F5.1: Primary power** | Grid AC | Solar + battery | Generator | Hybrid grid+solar |
| **F5.2: Backup power** | UPS (Li-ion) | UPS (LiFePO4) | Generator | Supercapacitor |
| **F5.5: Security** | AES-256 + VPN | End-to-end encrypt | Physical isolation | MIL-grade crypto |

---

### 4.2 Concept Generation - Combining Working Principles

Based on morphological matrix, we generate **4 distinct concepts**:

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                           CONCEPT VARIANTS SUMMARY                                  │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│  CONCEPT V1: "EDGE AI STANDARD"                                                     │
│  ════════════════════════════════                                                   │
│  Philosophy: Maximum edge processing, minimal cloud dependency                       │
│  Imaging: CMOS 4K + IR LED (850nm) + PTZ                                           │
│  AI: YOLO v8-nano on Jetson Orin Nano                                              │
│  Tracking: ByteTrack + Rule-based behavior                                         │
│  Comms: 4G LTE primary, VSAT backup                                                │
│  Power: Grid + UPS (LiFePO4)                                                       │
│                                                                                     │
│  ─────────────────────────────────────────────────────────────────────────────     │
│                                                                                     │
│  CONCEPT V2: "THERMAL FUSION"                                                       │
│  ════════════════════════════                                                       │
│  Philosophy: All-weather capability with thermal + visible fusion                   │
│  Imaging: CMOS 2MP + Uncooled thermal 640×512 (dual-sensor)                        │
│  AI: YOLO v8-small on Jetson Orin NX (more compute for fusion)                     │
│  Tracking: Deep SORT + LSTM behavior                                               │
│  Comms: Fiber primary, 4G backup                                                   │
│  Power: Grid + UPS (Li-ion)                                                        │
│                                                                                     │
│  ─────────────────────────────────────────────────────────────────────────────     │
│                                                                                     │
│  CONCEPT V3: "DISTRIBUTED ARRAY"                                                    │
│  ═══════════════════════════════                                                    │
│  Philosophy: Multiple fixed cameras, no moving parts, high reliability             │
│  Imaging: Fixed multi-camera array (8×CMOS 2MP) + shared IR illuminator            │
│  AI: Lightweight SSD MobileNet on each camera, fusion at edge server               │
│  Tracking: Kalman + IoU (simple, fast)                                             │
│  Comms: Microwave link primary, 4G backup                                          │
│  Power: Solar + battery (off-grid capable)                                         │
│                                                                                     │
│  ─────────────────────────────────────────────────────────────────────────────     │
│                                                                                     │
│  CONCEPT V4: "HYBRID PREMIUM"                                                       │
│  ════════════════════════════                                                       │
│  Philosophy: Best-of-all with redundancy                                           │
│  Imaging: 4K CMOS + Thermal + PTZ + Fixed array (panoramic coverage)               │
│  AI: Ensemble (YOLO + SSD) on Jetson AGX Orin                                      │
│  Tracking: Deep SORT + Transformer behavior                                        │
│  Comms: Fiber + VSAT (dual redundant)                                              │
│  Power: Grid + Solar + UPS + Generator (quad redundant)                            │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

### 4.3 Concept Sketches

#### CONCEPT V1: "EDGE AI STANDARD"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT V1: EDGE AI STANDARD                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│     CAMERA NODE (x8 per station)           EDGE SERVER                  │
│     ════════════════════════════           ═══════════                  │
│                                                                         │
│     ┌─────────────────────┐                ┌─────────────────────┐     │
│     │     PTZ DOME        │                │   INDUSTRIAL PC     │     │
│     │   ┌───────────┐     │    PoE         │                     │     │
│     │   │  4K CMOS  │     │    Cat6        │  ┌───────────────┐  │     │
│     │   │  sensor   │     │═══════════════►│  │ Intel i7/Xeon │  │     │
│     │   └───────────┘     │    Video       │  │ + RTX GPU     │  │     │
│     │   ┌───────────┐     │    + AI        │  │               │  │     │
│     │   │ IR LED    │     │    metadata    │  │ Multi-stream  │  │     │
│     │   │ (850nm)   │     │                │  │ fusion        │  │     │
│     │   └───────────┘     │                │  └───────────────┘  │     │
│     │   ┌───────────┐     │                │                     │     │
│     │   │ Jetson    │     │                │  ┌───────────────┐  │     │
│     │   │ Orin Nano │     │                │  │ 4TB SSD RAID  │  │     │
│     │   │ (YOLO v8) │     │                │  │ 30-day storage│  │     │
│     │   └───────────┘     │                │  └───────────────┘  │     │
│     │                     │                │                     │     │
│     │   IP67 Housing      │                │  ┌───────────────┐  │     │
│     │   -10°C to +55°C    │                │  │ 4G LTE Modem  │  │     │
│     └─────────────────────┘                │  │ (Primary WAN) │  │     │
│                                            │  └───────────────┘  │     │
│     Power: PoE+ (25W)                      │                     │     │
│     Detection: ≤30ms                       │  LiFePO4 UPS (4hr) │     │
│     Cost: ~$1,500/node                     └─────────────────────┘     │
│                                                                         │
│     STATION COST ESTIMATE: ~$18,000 (8 cams + server + installation)   │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### CONCEPT V2: "THERMAL FUSION"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT V2: THERMAL FUSION                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│     DUAL-SENSOR CAMERA NODE (x4 per station)                           │
│     ════════════════════════════════════════                           │
│                                                                         │
│     ┌───────────────────────────────────┐                              │
│     │        PTZ DUAL-SENSOR            │                              │
│     │                                   │                              │
│     │   ┌───────────┐  ┌───────────┐   │                              │
│     │   │ Visible   │  │ Thermal   │   │                              │
│     │   │ CMOS 2MP  │  │ 640×512   │   │       FUSION OUTPUT          │
│     │   │           │  │ Uncooled  │   │    ═══════════════════       │
│     │   └───────────┘  └───────────┘   │                              │
│     │         │              │         │    ┌─────────────────┐       │
│     │         └──────┬───────┘         │    │ Combined image  │       │
│     │                ▼                 │───►│ - Color (day)   │       │
│     │        ┌───────────────┐         │    │ - Thermal (night│       │
│     │        │ Jetson        │         │    │ - Overlaid      │       │
│     │        │ Orin NX       │         │    └─────────────────┘       │
│     │        │ (Sensor Fusion│         │                              │
│     │        │  + YOLO v8-s) │         │                              │
│     │        └───────────────┘         │                              │
│     │                                   │                              │
│     │   IP67, Heated enclosure          │                              │
│     └───────────────────────────────────┘                              │
│                                                                         │
│     Advantages:                                                         │
│     + 24/7 all-weather detection                                       │
│     + See through fog, smoke, rain                                     │
│     + Fewer cameras needed (wider detection)                           │
│                                                                         │
│     Disadvantages:                                                      │
│     - Higher per-camera cost (~$8,000)                                 │
│     - More compute needed for fusion                                   │
│                                                                         │
│     STATION COST ESTIMATE: ~$45,000 (4 dual-sensor + server)           │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### CONCEPT V3: "DISTRIBUTED ARRAY"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                   CONCEPT V3: DISTRIBUTED ARRAY                         │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│     FIXED CAMERA ARRAY (8 cameras, 360° coverage)                      │
│     ═════════════════════════════════════════════                      │
│                                                                         │
│                    CAM1 (N)                                             │
│                       ●                                                 │
│              CAM8 ●       ● CAM2                                       │
│                    \     /                                              │
│                     \   /                                               │
│          CAM7 ●──────╳──────● CAM3                                     │
│                     / \                                                 │
│                    /   \                                                │
│              CAM6 ●       ● CAM4                                       │
│                       ●                                                 │
│                    CAM5 (S)                                             │
│                                                                         │
│     Each camera:                     Central tower:                     │
│     ┌─────────────────┐              ┌─────────────────┐               │
│     │ Fixed CMOS 2MP  │              │ IR Illuminator  │               │
│     │ 45° FOV         │              │ Array (360°)    │               │
│     │ SSD MobileNet   │              │                 │               │
│     │ (on-camera AI)  │              │ Solar panels    │               │
│     │                 │              │ + Battery bank  │               │
│     │ IP67, No moving │              │                 │               │
│     │ parts           │              │ Edge server     │               │
│     └─────────────────┘              │ (in cabinet)    │               │
│                                      └─────────────────┘               │
│     Advantages:                                                         │
│     + No mechanical failures (no PTZ motors)                           │
│     + Off-grid capable (solar)                                         │
│     + Lower maintenance                                                │
│     + Instant 360° awareness                                           │
│                                                                         │
│     Disadvantages:                                                      │
│     - No zoom capability                                               │
│     - More cameras = more cables                                       │
│     - Lower detail at distance                                         │
│                                                                         │
│     STATION COST ESTIMATE: ~$15,000 (8 fixed cams + solar + server)    │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

#### CONCEPT V4: "HYBRID PREMIUM"

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    CONCEPT V4: HYBRID PREMIUM                           │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│     Multi-layer sensor architecture                                     │
│     ════════════════════════════════                                   │
│                                                                         │
│     LAYER 1: PANORAMIC AWARENESS (4×360° cameras)                      │
│     ┌─────────────────────────────────────────────────────────┐        │
│     │  ●───●───●───●  Fixed panoramic ring                    │        │
│     │  Continuous 360° situational awareness                  │        │
│     │  Low-res, motion detection trigger                      │        │
│     └─────────────────────────────────────────────────────────┘        │
│                          │ Trigger                                      │
│                          ▼                                              │
│     LAYER 2: PTZ DETAIL (2×PTZ dual-sensor)                            │
│     ┌─────────────────────────────────────────────────────────┐        │
│     │        ◉           ◉                                    │        │
│     │   PTZ Visible  +  PTZ Thermal                           │        │
│     │   30x zoom        20x zoom                              │        │
│     │   Slews to detection, provides ID-quality imagery       │        │
│     └─────────────────────────────────────────────────────────┘        │
│                          │                                              │
│                          ▼                                              │
│     LAYER 3: PREMIUM PROCESSING                                        │
│     ┌─────────────────────────────────────────────────────────┐        │
│     │  Jetson AGX Orin (275 TOPS)                             │        │
│     │  Ensemble AI: YOLO + SSD + Custom classifier            │        │
│     │  Deep SORT tracking + Transformer behavior analysis     │        │
│     │  8TB storage (90-day retention)                         │        │
│     └─────────────────────────────────────────────────────────┘        │
│                                                                         │
│     COMMS: Fiber primary + VSAT backup (dual redundant)                │
│     POWER: Grid + Solar + UPS + Generator (quad redundant)             │
│                                                                         │
│     Advantages:                                                         │
│     + Highest detection capability                                     │
│     + Maximum redundancy                                               │
│     + Best for critical border sectors                                 │
│                                                                         │
│     Disadvantages:                                                      │
│     - Highest cost (~$80,000/station)                                  │
│     - Complex installation & maintenance                               │
│     - May be overkill for many locations                               │
│                                                                         │
│     STATION COST ESTIMATE: ~$80,000 (premium sensors + redundancy)     │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

# PART 5: VDI 2225 CONCEPT EVALUATION

### 5.1 Evaluation Criteria (Weighted)

Based on Requirements List priorities:

| # | Criterion | Description | Weight (g) | Rationale |
|---|-----------|-------------|------------|-----------|
| 1 | **Detection capability** | Detection range, Pd, FAR | 0.20 | Core function |
| 2 | **All-weather operation** | Night, rain, fog, temperature | 0.15 | Border 24/7 requirement |
| 3 | **Reliability/MTBF** | Uptime, maintenance frequency | 0.15 | Remote locations |
| 4 | **Unit cost** | Cost per station | 0.15 | Wide deployment |
| 5 | **Local content** | Vietnamese manufacturing % | 0.10 | Defense self-reliance |
| 6 | **Ease of deployment** | Installation complexity | 0.08 | Rapid rollout |
| 7 | **Power efficiency** | Off-grid capability | 0.07 | Remote sites |
| 8 | **Scalability** | Ease of expansion | 0.05 | Future growth |
| 9 | **Cybersecurity** | Data protection | 0.05 | Defense requirement |
| **TOTAL** | | | **1.00** | |

---

### 5.2 VDI 2225 Scoring Matrix

**Scale: 0 = Unsatisfactory, 1 = Just tolerable, 2 = Adequate, 3 = Good, 4 = Very good (ideal)**

| Criterion | Weight (g) | V1: Edge AI | V2: Thermal | V3: Distributed | V4: Hybrid |
|-----------|------------|-------------|-------------|-----------------|------------|
| | | Score (p) | Score (p) | Score (p) | Score (p) |
| 1. Detection capability | 0.20 | 3 | 4 | 2 | 4 |
| 2. All-weather operation | 0.15 | 2 | 4 | 2 | 4 |
| 3. Reliability/MTBF | 0.15 | 3 | 3 | 4 | 2 |
| 4. Unit cost | 0.15 | 4 | 2 | 4 | 1 |
| 5. Local content | 0.10 | 3 | 2 | 4 | 2 |
| 6. Ease of deployment | 0.08 | 3 | 2 | 4 | 1 |
| 7. Power efficiency | 0.07 | 3 | 2 | 4 | 1 |
| 8. Scalability | 0.05 | 3 | 3 | 4 | 3 |
| 9. Cybersecurity | 0.05 | 3 | 3 | 3 | 4 |

---

### 5.3 Weighted Score Calculation

**Formula: Weighted Score = Σ (gi × pi)**

| Criterion | g | V1: p×g | V2: p×g | V3: p×g | V4: p×g |
|-----------|---|---------|---------|---------|---------|
| 1. Detection | 0.20 | 0.60 | 0.80 | 0.40 | 0.80 |
| 2. All-weather | 0.15 | 0.30 | 0.60 | 0.30 | 0.60 |
| 3. Reliability | 0.15 | 0.45 | 0.45 | 0.60 | 0.30 |
| 4. Cost | 0.15 | 0.60 | 0.30 | 0.60 | 0.15 |
| 5. Local content | 0.10 | 0.30 | 0.20 | 0.40 | 0.20 |
| 6. Deployment | 0.08 | 0.24 | 0.16 | 0.32 | 0.08 |
| 7. Power | 0.07 | 0.21 | 0.14 | 0.28 | 0.07 |
| 8. Scalability | 0.05 | 0.15 | 0.15 | 0.20 | 0.15 |
| 9. Cybersecurity | 0.05 | 0.15 | 0.15 | 0.15 | 0.20 |
| **TOTAL** | **1.00** | **3.00** | **2.95** | **3.25** | **2.55** |
| **Rating (%)** | | **75.0%** | **73.8%** | **81.3%** | **63.8%** |
| **Rank** | | **2** | **3** | **1** | **4** |

---

### 5.4 Evaluation Results

```
┌─────────────────────────────────────────────────────────────────────────┐
│                    VDI 2225 EVALUATION RESULTS                          │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  RANKING:                                                               │
│  ════════                                                               │
│                                                                         │
│    #1  V3: DISTRIBUTED ARRAY     ████████████████████░░░░  81.3%       │
│                                                                         │
│    #2  V1: EDGE AI STANDARD      ███████████████████░░░░░  75.0%       │
│                                                                         │
│    #3  V2: THERMAL FUSION        ██████████████████░░░░░░  73.8%       │
│                                                                         │
│    #4  V4: HYBRID PREMIUM        ████████████████░░░░░░░░  63.8%       │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────     │
│                                                                         │
│  ANALYSIS:                                                              │
│                                                                         │
│  V3 (Distributed Array) scores highest due to:                         │
│  • Lowest cost per station (~$15,000)                                  │
│  • Highest reliability (no moving parts)                               │
│  • Best for off-grid deployment                                        │
│  • Maximum local content potential                                     │
│                                                                         │
│  V1 (Edge AI Standard) is strong runner-up:                            │
│  • Good balance of capability and cost                                 │
│  • PTZ provides zoom for identification                                │
│  • Proven technology approach                                          │
│                                                                         │
│  V2 (Thermal Fusion) excels in detection but:                          │
│  • Higher cost limits deployment scale                                 │
│  • Lower local content (thermal sensors imported)                      │
│                                                                         │
│  V4 (Hybrid Premium) best for critical sites but:                      │
│  • Too expensive for wide deployment                                   │
│  • Complex maintenance                                                 │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

### 5.5 Sensitivity Analysis

**Testing robustness of ranking by varying criterion weights:**

| Scenario | Weight Change | V1 Rank | V2 Rank | V3 Rank | V4 Rank |
|----------|---------------|---------|---------|---------|---------|
| **Baseline** | As defined | 2 | 3 | **1** | 4 |
| **Detection priority** | Detection: 0.30, Cost: 0.10 | 2 | **1** | 3 | **1** |
| **Cost priority** | Cost: 0.25, Detection: 0.15 | 2 | 4 | **1** | 4 |
| **Reliability priority** | Reliability: 0.25, Cost: 0.10 | 2 | 3 | **1** | 4 |
| **All-weather priority** | All-weather: 0.25 | 3 | **1** | 4 | **1** |

**Conclusion:** V3 remains top choice except when all-weather/detection capability is heavily prioritized, in which case thermal (V2) or hybrid (V4) becomes preferred.

---

### 5.6 Recommendation

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         RECOMMENDATION                                  │
├─────────────────────────────────────────────────────────────────────────┤
│                                                                         │
│  PRIMARY CONCEPT: V3 - DISTRIBUTED ARRAY (modified)                     │
│  ══════════════════════════════════════════════════                    │
│                                                                         │
│  RATIONALE:                                                             │
│  • Best overall score (81.3%) across weighted criteria                 │
│  • Highest reliability for remote, unattended operation                │
│  • Lowest cost enables wide-area deployment                            │
│  • Maximum local content supports defense self-reliance                │
│  • Off-grid capability critical for remote border posts                │
│                                                                         │
│  MODIFICATION: Add optional PTZ camera to V3                           │
│  • Hybrid V3+V1: Fixed array for detection + 1 PTZ for identification  │
│  • Preserves V3 advantages while adding zoom capability                │
│  • Moderate cost increase (~$3,000 for PTZ option)                     │
│                                                                         │
│  ─────────────────────────────────────────────────────────────────     │
│                                                                         │
│  VARIANT STRATEGY:                                                      │
│                                                                         │
│  Tier 1 (80% of stations): V3 Distributed Array                        │
│  • Standard border posts, lower threat areas                           │
│  • Cost: ~$15,000/station                                              │
│                                                                         │
│  Tier 2 (15% of stations): V3 + PTZ Hybrid                             │
│  • Key crossing points, medium threat areas                            │
│  • Cost: ~$18,000/station                                              │
│                                                                         │
│  Tier 3 (5% of stations): V2 Thermal Fusion                            │
│  • Critical/high-threat sectors requiring 24/7 all-weather             │
│  • Cost: ~$45,000/station                                              │
│                                                                         │
│  This tiered approach optimizes cost-effectiveness while ensuring      │
│  appropriate capability at each border location.                        │
│                                                                         │
└─────────────────────────────────────────────────────────────────────────┘
```

---

# PART 6: SELECTED CONCEPT DETAIL

### 6.1 V3-Modified: "DISTRIBUTED ARRAY + OPTIONAL PTZ"

```
┌─────────────────────────────────────────────────────────────────────────────────────┐
│                    SELECTED CONCEPT: V3-MODIFIED                                    │
│                    "DISTRIBUTED ARRAY + OPTIONAL PTZ"                               │
├─────────────────────────────────────────────────────────────────────────────────────┤
│                                                                                     │
│                              STATION LAYOUT                                         │
│                              ══════════════                                         │
│                                                                                     │
│                                   N                                                 │
│                                   │                                                 │
│                              CAM1 ●                                                 │
│                                  /│\                                                │
│                                 / │ \                                               │
│                            CAM8●  │  ●CAM2                                         │
│                               /   │   \                                             │
│                              /    │    \                                            │
│                         CAM7●─────┼─────●CAM3                                      │
│                              \    │    /                                            │
│                               \   │   /                                             │
│                            CAM6●  │  ●CAM4                                         │
│                                 \ │ /                                               │
│                                  \│/                                                │
│                              CAM5 ●                                                 │
│                                   │                                                 │
│                                   S                                                 │
│                                                                                     │
│                            [OPTIONAL: PTZ in center for Tier 2/3]                  │
│                                                                                     │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                     │
│  CAMERA SPECIFICATIONS (Fixed Array):                                              │
│  ────────────────────────────────────                                              │
│  • Sensor: Sony IMX290 CMOS (1/2.8", 2MP, Starlight)                              │
│  • Resolution: 1920×1080 @ 30fps                                                   │
│  • FOV: 90° horizontal (45° each side of centerline)                              │
│  • Low light: 0.001 lux (starlight)                                               │
│  • IR: Integrated 850nm LED, 100m range                                           │
│  • AI: On-camera SSD MobileNet v2 (detection only)                                │
│  • Processor: Amlogic A311D or equivalent                                         │
│  • Interface: Gigabit Ethernet (PoE)                                              │
│  • Housing: IP67, IK10, -10°C to +55°C                                            │
│  • Power: PoE (12W typical)                                                        │
│  • Size: 150mm × 100mm × 100mm                                                     │
│  • Weight: 1.2 kg                                                                  │
│  • Local content: Housing, cables, mounting (60%+)                                │
│  • Estimated cost: $400/unit                                                       │
│                                                                                     │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                     │
│  EDGE SERVER SPECIFICATIONS:                                                        │
│  ──────────────────────────────                                                    │
│  • Processor: Intel Core i5-12500 (or Vietnamese-assembled equivalent)            │
│  • GPU: NVIDIA RTX 3050 (8-stream AI processing)                                  │
│  • RAM: 32GB DDR4                                                                  │
│  • Storage: 2×2TB SSD (RAID 1)                                                    │
│  • OS: Ubuntu Server 22.04 LTS                                                     │
│  • AI Framework: TensorRT + DeepStream                                            │
│  • Video: 8×1080p30 decode/encode                                                  │
│  • Network: 2×Gigabit Ethernet + 4G LTE modem                                     │
│  • Power: 220V AC, 200W typical                                                    │
│  • UPS: LiFePO4, 4-hour backup                                                    │
│  • Enclosure: IP54 outdoor cabinet                                                │
│  • Local content: Cabinet, wiring, assembly (50%+)                                │
│  • Estimated cost: $3,000/unit                                                     │
│                                                                                     │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                     │
│  OPTIONAL PTZ (Tier 2/3):                                                          │
│  ───────────────────────────                                                       │
│  • Sensor: Sony IMX415 (4K)                                                        │
│  • Zoom: 20× optical                                                               │
│  • PTZ: 360° pan, -30° to +90° tilt                                               │
│  • AI: Jetson Orin Nano (YOLO v8-nano)                                            │
│  • Auto-tracking: Slew to detection from fixed array                              │
│  • Estimated cost: $2,500/unit                                                     │
│                                                                                     │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                     │
│  POWER SYSTEM (Off-grid option):                                                   │
│  ─────────────────────────────────                                                 │
│  • Solar panels: 4×400W (1.6kW total)                                             │
│  • Battery: LiFePO4 48V 200Ah (9.6kWh)                                            │
│  • Autonomy: 3 days (no sun)                                                       │
│  • Hybrid: Grid + Solar where available                                            │
│  • Estimated cost: $2,500 (solar system)                                          │
│                                                                                     │
│  ═══════════════════════════════════════════════════════════════════════════════   │
│                                                                                     │
│  STATION COST SUMMARY:                                                             │
│  ───────────────────────                                                           │
│                                                                                     │
│  Tier 1 (Basic):                                                                   │
│  • 8× Fixed cameras: $3,200                                                        │
│  • Edge server: $3,000                                                             │
│  • IR illuminator array: $500                                                      │
│  • Cabling & mounting: $1,000                                                      │
│  • UPS: $800                                                                       │
│  • Installation: $1,500                                                            │
│  • SUBTOTAL: ~$10,000                                                              │
│  • Contingency (20%): $2,000                                                       │
│  • TOTAL TIER 1: ~$12,000/station                                                  │
│                                                                                     │
│  Tier 2 (+ PTZ):                                                                   │
│  • Tier 1 base: $10,000                                                            │
│  • PTZ camera: $2,500                                                              │
│  • TOTAL TIER 2: ~$15,000/station                                                  │
│                                                                                     │
│  Tier 3 (+ Solar):                                                                 │
│  • Tier 2 base: $12,500                                                            │
│  • Solar system: $2,500                                                            │
│  • TOTAL TIER 3: ~$18,000/station                                                  │
│                                                                                     │
└─────────────────────────────────────────────────────────────────────────────────────┘
```

---

# PART 7: NEXT STEPS

### 7.1 Transition to Phase 3: Embodiment Design

| Task | Description | Output | Duration |
|------|-------------|--------|----------|
| 7.1.1 | Develop preliminary layout drawings | Station layout, camera arrangement | 2 weeks |
| 7.1.2 | Conduct material selection | Housing, enclosure, structure specs | 1 week |
| 7.1.3 | Perform DfX analysis | DfM, DfA, DfMaintenance review | 1 week |
| 7.1.4 | Develop electrical schematics | Power distribution, signal routing | 2 weeks |
| 7.1.5 | Create software architecture | AI pipeline, data flow, interfaces | 2 weeks |
| 7.1.6 | Prototype planning | BOM, procurement, assembly plan | 1 week |

### 7.2 Open Issues for Phase 3

| ID | Issue | Impact | Action Required |
|----|-------|--------|-----------------|
| P3-01 | Camera supplier selection | Component availability | Evaluate 3+ vendors |
| P3-02 | AI model training data | Detection accuracy | Dataset collection plan |
| P3-03 | Edge server sourcing | Local content % | Vietnamese integrator RFQ |
| P3-04 | Mounting structure design | Environmental survival | Structural analysis |
| P3-05 | Communication protocol | C4I integration | Interface specification |

---

## DOCUMENT APPROVAL

| Role | Name | Signature | Date |
|------|------|-----------|------|
| Project Engineer | | | |
| Systems Engineer | | | |
| AI/Software Lead | | | |
| Customer Representative | | | |
| Program Manager | | | |

---

## REVISION HISTORY

| Version | Date | Author | Changes |
|---------|------|--------|---------|
| 1.0 | 30/01/2026 | Claude (P&B Methodology) | Initial Phase 2 Conceptual Design |

---

*Document prepared following Pahl & Beitz Systematic Design Methodology (VDI 2221)*
*Phase 2: Conceptual Design - VN-AICAM-BORDER-001 "BIÊN CƯƠNG"*

**END OF DOCUMENT**
