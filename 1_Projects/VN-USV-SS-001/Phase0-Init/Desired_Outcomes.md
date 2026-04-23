---
created: 2026-03-20
updated: 2026-03-20
type: project
status: active
tags: [#type/project, #topic/odi, #topic/jtbd]
project: VN-USV-SS-001
skill: forge-job-map
---

# Desired Outcomes — VN-USV-SS-001 (Semi-Sub USV)

**Total: 52 outcomes | Status: AI DRAFT — awaiting Biên phòng validation**

## Step 1: DEFINE (5 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-01 | Minimize the time from intel alert to USV deployment decision | 4.5 | 2.0 | 9.0 |
| O-02 | Minimize the likelihood of deploying to wrong patrol area | 3.5 | 3.0 | 5.0 |
| O-03 | Minimize the effort to plan a multi-waypoint patrol mission | 4.0 | 1.5 | 8.0 |
| O-04 | Minimize the dependency on weather conditions for deployment decision | 4.5 | 1.5 | 9.0 |
| O-05 | Minimize the number of personnel required for deployment decision | 3.0 | 3.0 | 3.0 |

## Step 2: LOCATE (5 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-06 | **Minimize the time to charge battery for next mission** | 4.5 | 1.0 | **9.5** |
| O-07 | Minimize the likelihood of deploying with insufficient battery | 4.5 | 2.0 | 9.0 |
| O-08 | Minimize the number of spare parts needed on hand | 3.0 | 3.0 | 3.0 |
| O-09 | Minimize the time to verify all subsystems functional before transport | 3.5 | 2.0 | 6.5 |
| O-10 | Minimize the effort to prepare mission plan in QGroundControl | 3.5 | 2.0 | 6.5 |

## Step 3: PREPARE (7 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-11 | **Minimize the number of people needed to launch USV** | 4.5 | 1.5 | **9.0** |
| O-12 | **Minimize the weight of the system for transport and launch** | 4.5 | 1.0 | **9.5** |
| O-13 | Minimize the time from arrival at shore to USV in water | 4.0 | 1.5 | 8.0 |
| O-14 | Minimize the risk of damage during launch (surf, rocks) | 4.0 | 2.0 | 8.0 |
| O-15 | **Minimize the time to acquire GPS lock after launch** | 4.0 | 1.5 | 8.0 |
| O-16 | Minimize the skill level needed to launch and arm the system | 3.5 | 2.0 | 6.5 |
| O-17 | Minimize the visibility of launch operation to adversary | 3.5 | 2.5 | 5.5 |

## Step 4: CONFIRM (5 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-18 | Minimize the time to complete pre-mission system check | 3.5 | 2.0 | 6.5 |
| O-19 | **Minimize the uncertainty about fail-safe valve operation** | 4.5 | 1.5 | **9.0** |
| O-20 | Minimize the effort to verify LoRa/4G link before going auto | 3.5 | 2.0 | 6.5 |
| O-21 | Minimize the time to confirm depth hold accuracy | 4.0 | 1.5 | 8.0 |
| O-22 | Minimize the likelihood of launching with misconfigured mission | 3.5 | 2.5 | 5.5 |

## Step 5: EXECUTE — Tuần tra / Giám sát (10 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-23 | **Minimize the likelihood of losing communication with USV** | 5.0 | 1.0 | **10.0** |
| O-24 | **Minimize the endurance gap vs mission duration requirement** | 5.0 | 1.5 | **10.0** |
| O-25 | **Minimize the detection range gap (target visible → alert)** | 4.8 | 1.0 | **9.8** |
| O-26 | Minimize the false alarm rate from camera/sensor | 4.0 | 2.0 | 8.0 |
| O-27 | **Minimize the depth hold error in semi-sub mode** | 4.5 | 1.0 | **9.5** |
| O-28 | **Minimize pitch instability at speed >6 knots (semi-sub)** | 4.5 | 1.0 | **9.5** |
| O-29 | Minimize the RCS in semi-sub mode (low-observable) | 4.0 | 1.5 | 8.0 |
| O-30 | Minimize the noise signature underwater | 3.5 | 2.5 | 5.5 |
| O-31 | Minimize the camera image degradation in night/fog | 4.0 | 1.0 | 8.0 |
| O-32 | Minimize the GPS position error during patrol | 3.5 | 3.0 | 4.0 |

## Step 6: MONITOR (6 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-33 | **Minimize the operator information overload (too many parameters)** | 4.5 | 1.0 | **9.5** |
| O-34 | Minimize the delay between USV status change and operator alert | 4.0 | 1.5 | 8.0 |
| O-35 | Minimize the likelihood of undetected critical fault (leak, motor fail) | 4.5 | 1.5 | 9.0 |
| O-36 | Minimize the effort to estimate remaining mission time from current state | 4.0 | 1.5 | 8.0 |
| O-37 | Minimize the operator fatigue during long missions (>4h) | 3.5 | 2.0 | 6.5 |
| O-38 | Minimize the bandwidth required for real-time monitoring | 3.5 | 2.0 | 6.5 |

## Step 7: MODIFY (5 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-39 | **Minimize the latency of mission modification commands** | 4.5 | 1.5 | **9.0** |
| O-40 | Minimize the effort to redirect USV to new target mid-mission | 4.0 | 1.5 | 8.0 |
| O-41 | Minimize the time to switch between surface and semi-sub mode | 4.0 | 1.5 | 8.0 |
| O-42 | **Minimize the effort for emergency recall (RTL)** | 4.5 | 2.0 | **9.0** |
| O-43 | Minimize the likelihood of command rejection / communication failure during modify | 4.0 | 1.5 | 8.0 |

## Step 8: CONCLUDE (9 outcomes)

| # | Outcome Statement | Imp (est.) | Sat (est.) | Opp (est.) |
|---|-------------------|:----------:|:----------:|:----------:|
| O-44 | **Minimize the risk during USV recovery from water (swell, weight)** | 4.5 | 1.0 | **9.5** |
| O-45 | **Minimize the number of people needed for recovery** | 4.0 | 1.0 | **8.0** |
| O-46 | Minimize the time for post-mission wash (anti-corrosion) | 3.5 | 2.0 | 6.5 |
| O-47 | Minimize the time to download mission data (video, GPS, telemetry) | 3.5 | 1.5 | 7.0 |
| O-48 | **Minimize the effort to generate patrol report for CO** | 4.0 | 1.0 | **8.0** |
| O-49 | Minimize the inter-mission turnaround time (recovery → next deployment) | 4.5 | 1.0 | 9.5 |
| O-50 | Minimize the salt corrosion damage between deployments | 3.5 | 2.0 | 6.5 |
| O-51 | Minimize the maintenance skill level required (đồn cấp kỹ thuật viên) | 3.5 | 2.5 | 5.5 |
| O-52 | Minimize the likelihood of data loss after mission | 3.5 | 2.0 | 6.5 |

## Notes

- **Bold** = high-confidence (derived from semi-sub physics research + coastal defense context)
- All I×S scores are AI ESTIMATES
- Satisfaction universally LOW (1.0-2.0) because **NO semi-sub USV exists for VN Biên phòng today**
- Recommended: 8 interviews (3 operator-level + 3 CO-level + 2 kỹ thuật)
- Step 5 EXECUTE dominates top outcomes — expected for autonomous vehicle product
- Step 3 PREPARE and Step 8 CONCLUDE have hidden high-value outcomes (launch/recovery = physical danger)
