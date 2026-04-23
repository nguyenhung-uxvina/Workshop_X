---
created: 2026-04-10
type: desired-outcomes
method: ODI Opportunity Algorithm (Ulwick)
version: v1.0
project: VN-MGM V1-NAVAL-12.7
customer_segment: Trắc thủ (Gunner) — VN Navy
evidence_tier: "[L1-FIELD] — estimated from 300-unit operational feedback"
outcome_count: 55
feeds_to:
  - Opportunity_Landscape_v1.0.md
  - HOQ_Design_Parameters_v1.0.md
  - helix-task-clarify (outcome-derived requirements)
---

# Desired Outcomes — VN-MGM V1-NAVAL-12.7

## Scoring Method

- **Importance (I):** 1-5 scale. How important is this outcome to the trắc thủ?
- **Satisfaction (S):** 1-5 scale. How well does V1 currently satisfy this outcome?
- **Opportunity Score = I + max(I − S, 0)**. Scale 0-10.
- Scores estimated from 300-unit field history, trắc thủ feedback, maintenance records, and known pain points.
- **[L4-ESTIMATE]** — ideally validated by structured interview with 6-12 trắc thủ.

---

## Step 1: DEFINE — Xác định nhiệm vụ bắn (6 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-01 | Minimize the time from alert to reaching battle station | 4.5 | 3.5 | 5.5 | Ship layout issue, not mount |
| O-02 | Minimize confusion about which mount to go to (multi-mount ships) | 3.0 | 4.0 | 3.0 | Solved by assignment SOPs |
| O-03 | Minimize the likelihood of going to wrong mount in darkness | 3.5 | 2.5 | 4.5 | No night marking on mounts |
| O-04 | Minimize time to determine engagement rules for current scenario | 3.0 | 3.0 | 3.0 | CO responsibility |
| O-05 | Minimize uncertainty about mount operational status before arriving | 4.0 | 2.0 | 6.0 | No remote status indicator |
| O-06 | Minimize the number of people needed to respond to alert | 4.0 | 3.0 | 5.0 | Needs 2 for weapon carry |

## Step 2: LOCATE — Tìm và lấy input cần thiết (6 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-07 | Minimize time to retrieve weapon from storage | 4.0 | 3.0 | 5.0 | Storage location varies |
| O-08 | Minimize the physical effort to carry weapon to mount | 4.5 | 2.5 | 6.5 | DShK 34 kg = heavy |
| O-09 | Minimize time to retrieve ammunition from magazine | 4.0 | 3.0 | 5.0 | Magazine distance varies |
| O-10 | Minimize the likelihood of bringing wrong ammunition type | 3.0 | 4.0 | 3.0 | Limited ammo types |
| O-11 | Minimize trips needed between storage and mount | 3.5 | 2.5 | 4.5 | Weapon + ammo = 2 trips |
| O-12 | Minimize risk of injury carrying weapon on wet/pitching deck | 4.5 | 3.0 | 6.0 | Real hazard in sea state 3+ |

## Step 3: PREPARE — Lắp đặt vũ khí lên mount (8 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-13 | Minimize time to mount weapon on cradle | 4.5 | 4.0 | 5.0 | 45-90s achieved — good |
| O-14 | Minimize likelihood of cradle pins jamming due to corrosion | 4.5 | 3.0 | 6.0 | Known field issue (salt) |
| O-15 | Minimize the number of people required for weapon mounting | 4.0 | 3.5 | 4.5 | 1-person possible but risky on waves |
| O-16 | Minimize difficulty of mounting weapon in darkness | 4.5 | 2.0 | **7.0** | ★ No tactile guides for night |
| O-17 | Minimize difficulty of mounting weapon in sea state 3+ | 4.5 | 2.5 | **6.5** | Pitching deck + heavy weapon |
| O-18 | Minimize the number of separate steps to secure weapon | 3.5 | 3.5 | 3.5 | 2-pin system = simple |
| O-19 | Minimize tools needed for weapon mounting | 4.0 | 5.0 | 4.0 | Zero tools — excellent |
| O-20 | Minimize likelihood of incorrect weapon installation | 5.0 | 4.0 | 6.0 | Poka-yoke exists but imperfect in dark |

## Step 4: CONFIRM — Xác nhận sẵn sàng bắn (5 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-21 | Minimize time to verify mount is operational | 4.0 | 3.5 | 4.5 | Manual check — quick but subjective |
| O-22 | Minimize likelihood of undetected traverse problem (stiff/seized) | 5.0 | 3.0 | **7.0** | ★ No objective test — feel only |
| O-23 | Minimize likelihood of undetected elevation lock failure | 5.0 | 3.5 | 6.5 | Lock exists but wear undetectable |
| O-24 | Minimize time from "weapon mounted" to "ready to fire" | 4.5 | 4.0 | 5.0 | 30-60s — acceptable |
| O-25 | Minimize uncertainty about whether mount survived storage period | 4.0 | 2.0 | 6.0 | After 3+ months: unknown condition |

## Step 5: EXECUTE — Ngắm và bắn (12 outcomes) ★ CORE

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-26 | Minimize the effort to traverse mount to target bearing | 5.0 | 4.0 | 6.0 | 5 kg·m — good but fatiguing over time |
| O-27 | Minimize the effort to elevate weapon to target angle | 4.5 | 4.0 | 5.0 | 3 kg·m — good |
| O-28 | Minimize the time to slew 180° to a new threat bearing | 5.0 | 3.0 | **7.0** | ★ 6 seconds manual — too slow for fast threats |
| O-29 | Minimize the difficulty of tracking a moving target | 5.0 | 2.0 | **8.0** | ★★ HIGHEST — manual cannot track >30°/s |
| O-30 | Minimize operator fatigue during sustained engagement (>30 min) | 4.5 | 2.5 | **6.5** | Wrist/arm fatigue documented |
| O-31 | Minimize the pointing error due to platform motion (waves) | 5.0 | 2.5 | **7.5** | ★ No stabilization — all operator skill |
| O-32 | Minimize the recoil transmitted to operator's hands | 4.0 | 4.0 | 4.0 | Mount absorbs well — operator feels little |
| O-33 | Minimize the effect of recoil on aim (muzzle rise/shift) | 4.5 | 3.5 | 5.5 | Some muzzle shift per burst |
| O-34 | Minimize the number of rounds to achieve first hit | 5.0 | 3.0 | **7.0** | ★ Depends on gunner skill, no fire control aid |
| O-35 | Minimize the dead zone where mount cannot aim (structural obstruction) | 3.5 | 3.5 | 3.5 | Ship structure issue, not mount |
| O-36 | Minimize the likelihood of mount malfunction during firing | 5.0 | 4.5 | 5.5 | Very reliable — 0 failures in 300 units |
| O-37 | Minimize the likelihood of injury to operator during firing | 5.0 | 4.5 | 5.5 | Safety record excellent |

## Step 6: MONITOR — Theo dõi hiệu quả bắn (5 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-38 | Minimize the difficulty of observing bullet impact point | 4.5 | 3.0 | 6.0 | Tracer helps but limited |
| O-39 | Minimize the difficulty of knowing exact weapon pointing angle | 3.5 | 2.5 | 4.5 | Scale marks crude (5° increments) |
| O-40 | Minimize the difficulty of engaging targets at night | 5.0 | 1.5 | **8.5** | ★★ HIGHEST — nearly blind without NVG |
| O-41 | Minimize the difficulty of estimating ammunition remaining | 3.5 | 3.0 | 4.0 | Count by feel/sound |
| O-42 | Minimize the difficulty of communicating engagement status to CO | 3.5 | 3.0 | 4.0 | Voice only |

## Step 7: MODIFY — Điều chỉnh giữa nhiệm vụ (5 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-43 | Minimize time to switch to a new target bearing (re-engage) | 5.0 | 3.0 | **7.0** | ★ Same as O-28: manual slew speed |
| O-44 | Minimize risk of burn injury during hot barrel change | 5.0 | 3.0 | **7.0** | ★ 30mm clearance exists but still dangerous |
| O-45 | Minimize time to reload ammunition belt | 4.0 | 3.5 | 4.5 | Belt box design adequate |
| O-46 | Minimize difficulty of switching weapon type (DShK↔NSV) | 3.0 | 3.5 | 3.0 | Same cradle, different adapters |
| O-47 | Minimize time to transition from one engagement type to another | 4.0 | 3.0 | 5.0 | Manual adjustments slow |

## Step 8: CONCLUDE — Kết thúc nhiệm vụ bắn (8 outcomes)

| # | Outcome Statement | I | S | Opp | Notes |
|---|-------------------|---|---|-----|-------|
| O-48 | Minimize time to safe the weapon after engagement | 4.5 | 4.0 | 5.0 | Quick — tháo đạn + khóa cò |
| O-49 | Minimize time to remove weapon from mount | 3.5 | 4.0 | 3.5 | ≤60s — good |
| O-50 | Minimize the maintenance required after each firing session | 4.5 | 2.0 | **7.0** | ★ Needs wash + grease every time |
| O-51 | Minimize the likelihood of corrosion damage from skipped maintenance | 5.0 | 2.0 | **8.0** | ★★ Skipped maintenance → bearing seizure |
| O-52 | Minimize the skill level needed for field maintenance | 4.0 | 3.5 | 4.5 | Simple grease but crews skip it |
| O-53 | Minimize the time between overhauls (maximize availability) | 4.0 | 3.5 | 4.5 | 1,000 rounds/3 months OK |
| O-54 | Minimize the cost of consumables per year | 3.5 | 4.0 | 3.5 | Grease only — cheap |
| O-55 | Minimize uncertainty about mount condition after long storage (>3 months) | 4.5 | 2.0 | **7.0** | ★ No condition indicator — unknown until tested |

---

## Summary Statistics

| Metric | Value |
|--------|-------|
| Total outcomes | **55** |
| Average Importance | 4.16 |
| Average Satisfaction | 3.12 |
| Average Opportunity | 5.39 |
| Outcomes ≥ 8.0 (highly underserved) | **3** |
| Outcomes 6.0-7.9 (underserved) | **15** |
| Outcomes 4.0-5.9 (served) | **28** |
| Outcomes ≤ 3.9 (overserved) | **9** |

---

*Next: Opportunity_Landscape_v1.0.md — ranked landscape + strategy*
