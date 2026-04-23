# Skill: MTBF Analysis

> **Use When**: Estimating system reliability, comparing designs
> **Output**: MTBF calculation, FIT breakdown, improvement recommendations
> **Gate**: Gate 2 (DfR component of DfX Review)

---

## Purpose

MTBF (Mean Time Between Failures) quantifies expected reliability:
- **Higher MTBF = More reliable**
- Used to compare design options
- Required for warranty/service planning
- Key DfR (Design for Reliability) metric

---

## Key Concepts

### FIT (Failures In Time)

**FIT = Failures per 10^9 hours of operation**

| Relationship | Formula |
|--------------|---------|
| MTBF from FIT | MTBF = 10^6 / FIT (hours) |
| FIT from MTBF | FIT = 10^6 / MTBF |

### Typical FIT Values

| Component Type | FIT Range | Notes |
|----------------|-----------|-------|
| Microcontrollers | 20-100 | Industrial grade lower |
| Op-amps | 10-50 | |
| Voltage regulators | 20-50 | |
| RF modules | 30-80 | LoRa, WiFi, BLE |
| Passive components | 1-10 | Resistors, capacitors |
| Connectors | 10-50 per pin | Major failure source |
| PCB | 1-10 | Per board |
| Electrolytic caps | 50-200 | Temperature sensitive |
| Ceramic caps | 1-5 | Much more reliable |

---

## MTBF Calculation Process

### Step 1: List All Components

```markdown
| Component | Quantity | Base FIT | Total FIT |
|-----------|----------|----------|-----------|
| MCU | 1 | 50 | 50 |
| Op-amp | 2 | 20 | 40 |
| Buck converter | 1 | 25 | 25 |
| LoRa module | 1 | 40 | 40 |
| Connectors | 4×10pin | 5/pin | 200 |
| Passives | ~100 | 0.1 ea | 10 |
| PCB | 1 | 5 | 5 |
| **TOTAL** | | | **370** |
```

### Step 2: Apply Derating Factors

Derating improves FIT:

| Derating Level | FIT Multiplier |
|----------------|----------------|
| 0% (at limit) | 1.5× |
| 25% | 1.0× |
| 50% | 0.7× |
| 75% | 0.5× |

### Step 3: Apply Environmental Factors

| Environment | Multiplier |
|-------------|------------|
| Lab/office | 1.0× |
| Ground fixed | 1.5× |
| Ground mobile | 3.0× |
| Naval sheltered | 4.0× |
| Naval exposed | 6.0× |
| Airborne | 8.0× |

### Step 4: Calculate System MTBF

```
System FIT = Σ(Component FIT × Derating × Environment)
System MTBF = 10^6 / System FIT (hours)
```

---

## MTBF Analysis Template

```markdown
# MTBF Analysis: [System Name]

> **Version**: 1.0
> **Date**: YYYY-MM-DD
> **Environment**: [Ground Fixed / Naval / etc.]
> **Requirement**: ≥ XXXX hours

---

## 1. Component FIT Breakdown

| Component | Part Number | Qty | Base FIT | Derating | Adj FIT | Total |
|-----------|-------------|-----|----------|----------|---------|-------|
| MCU | STM32H743 | 1 | 50 | 25% | 50 | 50 |
| Op-amp | TL074 | 1 | 20 | 50% | 14 | 14 |
| Buck | MP2315 | 1 | 25 | 30% | 23 | 23 |
| LoRa | SX1276 | 1 | 40 | 11% | 38 | 38 |
| Connectors | JST-XH | 40 pins | 5 | - | 5 | 200 |
| Passives | Various | ~100 | 0.1 | 50% | 0.07 | 7 |
| PCB | - | 1 | 5 | - | 5 | 5 |
| **SUBTOTAL** | | | | | | **337** |

---

## 2. Environmental Adjustment

| Factor | Value |
|--------|-------|
| Base FIT | 337 |
| Environment | Naval sheltered |
| Multiplier | 1.0 (already designed for) |
| **Adjusted FIT** | **337** |

---

## 3. MTBF Calculation

| Metric | Value |
|--------|-------|
| Total System FIT | 337 |
| **System MTBF** | **2,967 hours** |
| Requirement | ≥2,000 hours |
| **Margin** | **+48%** |
| **Status** | **PASS** |

---

## 4. FIT Distribution

```
Connectors     ████████████████████  59%
MCU            █████                 15%
LoRa           ████                  11%
Buck           ███                    7%
Op-amp         ██                     4%
Passives       █                      2%
PCB            █                      1%
```

---

## 5. Improvement Opportunities

| Component | Current FIT | Action | New FIT | Savings |
|-----------|-------------|--------|---------|---------|
| Connectors | 200 | Mil-spec | 100 | 100 |
| LoRa | 38 | Redundant | 8 | 30 |

**Potential MTBF**: 10^6 / (337-130) = **4,831 hours**

---

## 6. Single Points of Failure

| Component | Failure Impact | Mitigation |
|-----------|----------------|------------|
| MCU | System dead | Watchdog, brown-out detect |
| LoRa | No comms | Accept for v1, redundant v2 |
| Power | System dead | TVS, fuse protection |

---

## 7. Conclusions

| Finding | Status |
|---------|--------|
| MTBF meets requirement | PASS |
| SPOF identified | 1 (accepted) |
| Improvement path | Documented |
```

---

## Redundancy Calculations

### Parallel (Active) Redundancy

Two components, either can do the job:

```
Effective FIT = (FIT_A × FIT_B) / (FIT_A + FIT_B)
```

**Example**: Two LoRa modules (FIT=40 each)
```
Effective FIT = (40 × 40) / (40 + 40) = 1600/80 = 20
```
MTBF improvement: 2× for 2× cost

### Standby Redundancy

Backup only activates on primary failure:

```
Effective FIT ≈ FIT_primary × P_switchover_fail
```
Typically better than active if switching is reliable.

---

## Common Mistakes

1. **Forgetting connectors** - Often 50%+ of total FIT
2. **Ignoring environment** - Lab ≠ field
3. **No derating** - Components at limits fail faster
4. **Counting once** - Remember quantity multipliers
5. **Optimistic estimates** - Use published data, not hopes

---

## Data Sources

| Source | Use For |
|--------|---------|
| MIL-HDBK-217F | Military/aerospace |
| Telcordia SR-332 | Commercial electronics |
| FIDES Guide | European standard |
| Manufacturer data | Specific components |

---

## Related Skills

- [[dfx-analysis]] - DfR section uses MTBF
- [[decision-log]] - Document reliability decisions
- [[risk-register]] - MTBF feeds risk assessment

---

*Skill Version: 1.0*
*Based on BB-01 MCU Box MTBF Analysis*
