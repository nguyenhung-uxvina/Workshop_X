---
created: 2026-03-26
source: research-pipeline-v3
notebook: cat-lars
topic: "Catamaran UUV Recovery Between Hulls — Center Aperture LARS"
type: nlm-output
status: active
tags: [#type/nlm-output, #status/active, #product]
source_quality:
  tier_s: 6
  tier_a: 4
  tier_b: 5
  pro_ratio: "67%"
---

# Research: Catamaran UUV LARS — Center Aperture Recovery

> 15 sources, 14 ingested to NLM cat-lars. Context: VN-XUONG-UUV Concept D (PARKED).

## Key Findings

### 1. Precedents EXIST but at SMALLER scale

| System | LOA | UUV Size | Recovery Method | Sea State |
|--------|-----|----------|----------------|-----------|
| **Pioneer SWATH** | 14.2m | Not specified (payload bay) | Center aperture, heave compensation only | SS outperforms 3× monohull |
| **WAM-V 16ft** | 4.85m | REMUS 100 (38kg, 1.6m) | Taut line + acoustic homing OR telescopic arm | **SS 2 max** (rigid LARS) |
| **C-Worker 24** | Large | ROV class | 5.55m × 3.45m moon pool | Not specified |
| **U-SWATH** | 5m | Small payloads | Flat deck between hulls | Research platform |

### 2. SCALING PROBLEM — 550kg on 8m is EXTREME

- WAM-V max payload: 220kg. VN-XUONG-UUV UUV = 550kg → **2.5× over max**
- **Pendulum effect ("wrecking ball"):** 550kg swinging through splash zone on 8m vessel = severe stability + damage risk
- **CG shift:** 550kg moving from deck to water = massive CG change on small vessel → custom profile mounts needed
- **Moon pool on 8m:** UUV 5000mm long → moon pool opening = 62% of hull length → **structurally impossible**

### 3. Recovery Mechanisms That Work in Waves

| Mechanism | Wave Performance | For 550kg? |
|-----------|:----------------:|:----------:|
| **Cursor system** (guided rails) | ★★★ Best in heavy weather | YES — designed for heavy ROV |
| **Rigid telescopic arm** + gas springs | ★★ Good, prevents pendulum | MAYBE — needs scale design |
| **Taut line + acoustic homing** | ★ Poor — waves cause collision | NO — too light for 550kg |
| **Submerged docking cradle** | ★★ Good — underwater capture | MAYBE — complex for 8m |

### 4. SWATH vs Standard Catamaran

SWATH (submerged torpedo-hull pontoons) >> standard catamaran for L&R because:
- Waterplane area minimal → almost eliminates roll/pitch
- Only vertical heave remains → much simpler compensation
- Pioneer SWATH 14.2m = stability of 42m monohull

Standard pontoon catamaran still rolls/pitches more than SWATH.

## Verdict for VN-XUONG-UUV Concept D

**CENTER APERTURE RECOVERY = PROVEN for small AUVs (≤55kg).**
**NOT PROVEN for 550kg UUV on 8m vessel.**

### Physics blockers:
1. **550kg pendulum through splash zone** on 8m hull = stability crisis
2. **5m UUV in center aperture** of 8m vessel = structural challenge (62% of LOA)
3. **SS 3 recovery** with 550kg between hulls = no precedent at this scale
4. **Cursor system** (best for heavy weather) requires vessel size >> 8m

### Path forward (if CEO wants to pursue):
1. SWATH hull form (not standard catamaran) — reduces motion to heave only
2. Vessel LOA increase to 10-12m — accommodate 5m UUV + structure
3. Cursor-type guided rails between hulls — prevent pendulum
4. Scale model test (1:5) — validate recovery dynamics before commitment

### Recommendation: KEEP PARKED
Concept D catamaran remains physically valid for LAUNCH (gravity drop = excellent). Recovery at 550kg/SS3 on 8m = too many unknowns. Monohull + stern ramp (baseline) is safer path for Gate 2.

If VN-XUONG-UUV succeeds → future generation could be 12m SWATH with center aperture. That's a Phase 0 pre-study, not a Phase 2 design change.

---

*Research Pipeline v3.0 | NLM notebook: cat-lars | 2026-03-26*
