# Decision Record: DEC-005

## Processing Platform Selection for V-SMASH Phase 1

| Attribute | Value |
|-----------|-------|
| **Decision ID** | DEC-005 |
| **Date** | 2026-01-26 |
| **Status** | PROPOSED |
| **Category** | TECH |
| **Stakeholders** | Design Team, Program Office |
| **Related Decisions** | DEC-002 (Detection Approach), DEC-004 (Concept Selection) |

---

## Context

Team đang tranh luận chọn **Jetson Nano** hay **Jetson Xavier NX** cho V-SMASH Phase 1. V4 (Phased Development) approach đã được chọn, yêu cầu:

- **Phase 1**: HOG+SVM detection (classical CV)
- **Phase 2**: Upgrade to YOLOv8-nano (deep learning)

Original BOM assumes Jetson Nano ($150) for Phase 1, with upgrade path to Xavier NX ($400) for Phase 2.

**Question**: Is Jetson Nano sufficient for Phase 1? What are the risks?

---

## Options Considered

### Option A: Jetson Nano ($150)

**Pros:**
- Lower cost ($150 vs $400)
- Sufficient for HOG+SVM (Phase 1 workload)
- Established community, plenty of tutorials
- Lower power consumption (5-10W)

**Cons:**
- **YOLOv8n achieves only ~6-16 FPS** (far below 30 FPS real-time target)
- 4GB RAM limits model size
- End-of-life concerns (Nano is older generation)
- Upgrade to Xavier NX requires carrier board redesign

### Option B: Jetson Xavier NX ($400)

**Pros:**
- **YOLOv8n achieves ~66 FPS with TensorRT INT8** (exceeds 30 FPS target)
- 8GB RAM supports larger models + thermal processing
- 21 TOPS vs 0.5 TOPS - 40x more AI performance
- Future-proof for Phase 2+ requirements
- Tensor cores accelerate INT8 inference

**Cons:**
- Higher initial cost ($250 more per unit)
- Higher power consumption (10-15W)
- May be "overkill" for Phase 1 HOG+SVM

### Option C: Jetson Orin Nano ($200-250)

**Pros:**
- **YOLOv8n achieves ~43 FPS** (exceeds 30 FPS target)
- Newer generation, better long-term support
- Price between Nano and Xavier NX
- Better power efficiency than Xavier NX

**Cons:**
- Newer platform, less community resources
- Still may need upgrade for thermal processing

---

## Analysis

### Performance Requirements Check

| Workload | Requirement | Jetson Nano | Xavier NX | Orin Nano |
|----------|-------------|-------------|-----------|-----------|
| **Phase 1: HOG+SVM** | 30 FPS | ✅ ~60 FPS | ✅ ~100+ FPS | ✅ ~80 FPS |
| **Phase 2: YOLOv8n** | 30 FPS | ❌ ~6-16 FPS | ✅ ~66 FPS | ✅ ~43 FPS |
| **Phase 2: YOLOv8n + Thermal** | 30 FPS | ❌ Impossible | ✅ Capable | ⚠️ Marginal |

### Cost Analysis

| Scenario | Jetson Nano Path | Xavier NX Direct |
|----------|------------------|------------------|
| Phase 1 hardware | $150 | $400 |
| Phase 2 upgrade cost | $400 + $100 (new carrier) | $0 |
| Engineering time for upgrade | 40 hours × $50/hr = $2,000 | $0 |
| **Total for 1 unit** | **$2,650** | **$400** |
| **Total for 10 prototypes** | **$7,000** | **$4,000** |

### Risk Assessment

| Risk | Nano Path | Xavier NX Path |
|------|-----------|----------------|
| Phase 1 fails to meet spec | Low | Very Low |
| Phase 2 upgrade delays project | **High** | None |
| Supply chain (availability) | Medium (older) | Low (current gen) |
| Carrier board redesign needed | **Yes** | No |
| Team learning curve | Medium | Medium |

---

## Decision

### RECOMMENDED: Option B - Jetson Xavier NX

**Rationale:**

1. **Total Cost of Ownership is LOWER** despite higher upfront cost
   - Nano path: $2,650+ per unit when including Phase 2 upgrade
   - Xavier NX: $400 per unit, no upgrade needed

2. **Risk Mitigation**
   - Eliminates Phase 2 hardware upgrade risk
   - No carrier board redesign required
   - Single platform simplifies development

3. **Future-Proof**
   - Supports YOLOv8n at 66 FPS (2x requirement)
   - Headroom for thermal sensor integration
   - Can support V-SMASH-PRO variant

4. **Aligned with V4 Philosophy**
   - V4 (Phased Development) is about reducing RISK, not minimizing initial cost
   - Spending $250 more now saves $2,250+ later

### Alternative: Option C - Jetson Orin Nano

If budget is extremely constrained, Orin Nano is acceptable fallback:
- Meets Phase 2 requirements (43 FPS)
- Newer platform than Xavier NX
- But Xavier NX provides more headroom for growth

---

## Trade-offs Accepted

1. **Higher initial BOM cost** ($400 vs $150)
   - Justified by: Eliminating upgrade path costs and risks

2. **Higher power consumption** (10-15W vs 5-10W)
   - Acceptable: Still within battery budget (4+ hours operation)

3. **"Overkill" for Phase 1**
   - Acceptable: Extra capacity provides safety margin

---

## Implications

### If Approved:

1. **Update BOM** in working-principles.md
   - Processing: Jetson Xavier NX, $400 (was Jetson Nano, $150)
   - New total: $894 (was $644)

2. **Update system-architecture.md**
   - Change processing module reference

3. **Update VDI 2225 evaluation**
   - C4 (Production Cost) score may decrease slightly
   - C6 (Supply Chain) and C7 (Local Match) unchanged

4. **Carrier board design**
   - Design for Xavier NX form factor from start
   - Pin-compatible with Orin NX for future

### Development Impact:

- No change to software architecture
- Same JetPack/TensorRT environment
- Slightly faster development cycle (no Phase 2 hardware change)

---

## Approval

| Role | Name | Decision | Date |
|------|------|----------|------|
| Technical Lead | | ☐ Approve / ☐ Reject | |
| Program Manager | | ☐ Approve / ☐ Reject | |
| Budget Authority | | ☐ Approve / ☐ Reject | |

---

## References

- [Seeed Studio YOLOv8 Jetson Benchmarks](https://www.seeedstudio.com/blog/2023/03/30/yolov8-performance-benchmarks-on-nvidia-jetson-devices/)
- [Arxiv: YOLOv8 Edge Deployment Study](https://www.arxiv.org/pdf/2502.15737)
- [ReadyTensor: YOLOv8 on Jetson Nano](https://app.readytensor.ai/publications/accelerating-edge-vision-yolov8-object-detection-on-jetson-nano-4D88m4ggztQt)
- [[working-principles#WP-009]] - Current Jetson specs
- [[vdi-2225-evaluation]] - Concept evaluation context
- [[decisions/log#DEC-002]] - Detection approach decision

---

*Decision follows Pahl & Beitz systematic evaluation methodology*
*Template: decision-record.md*
