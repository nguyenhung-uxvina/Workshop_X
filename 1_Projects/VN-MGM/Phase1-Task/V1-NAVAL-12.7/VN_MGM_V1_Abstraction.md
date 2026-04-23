---
created: 2026-04-10
type: abstraction
block: BC
pipeline: helix-task-clarify v3.1
method: "Pahl-Beitz §6.1-6.2 (5-step abstraction) + Weiss & Hari 2015"
project: VN-MGM V1-NAVAL-12.7
mode: retroactive (300 shipped, TRL 9)
status: COMPLETE
feeds_to:
  - BC_Essential_Problem.md
  - BC_TVDT.md
  - BD_Function_Structure.md (6-flow)
  - Phase 2 helix-concept-generate
---

# BC Abstraction — VN-MGM V1-NAVAL-12.7

## 1. P&B 5-Step Abstraction (§6.1)

### Step 1: Eliminate personal preferences
Remove solution-biased language from requirements.

| Original (solution-biased) | Abstracted (solution-neutral) |
|---------------------------|------------------------------|
| "Slewing ring bearing" (G-01) | "360° continuous rotation about vertical axis" |
| "Worm gear + handwheel" (K-04) | "Controllable angular velocity in elevation, self-locking" |
| "Hot-dip galvanize + epoxy" (QC-04) | "Surface protection achieving ≥1,000h salt fog resistance" |
| "Cradle with trunnion pins" (F-03) | "Weapon retention system: support 25-55 kg, withstand 50 kN recoil, quick-release" |
| "Standard metric wrenches" (AS-04) | "Installation requires only widely-available hand tools" |

### Step 2: Omit requirements that don't influence overall function
Requirements filtered (still tracked but not function-driving):

| Omitted from abstraction | Reason |
|--------------------------|--------|
| TR-03: Transport crate dimensions | Logistics, not function |
| SH-01/02/03: Schedule requirements | Business, not function |
| CO-02/03: Sell price, margin | Business, not function |
| S-02: Elevation angle indicator | Nice-to-have, not core function |

### Step 3: Transform quantitative into qualitative
Convert numbers to functional descriptions.

| Quantitative | Qualitative |
|-------------|-------------|
| ≥50 kN peak recoil, 50,000 cycles | "Withstand weapon reaction forces for full service life" |
| 360° azimuth, -15° to +85° elevation | "Full spherical coverage above platform horizon" |
| ≤5 kg·m traverse, ≤3 kg·m elevation | "Operable by single person with moderate effort" |
| ≤75 kg total weight | "Portable by 2 persons without mechanical aids" |
| ≥1,000h salt fog | "Survive extended exposure to marine tropical environment" |

### Step 4: Expand to broader scope (FORGE data enrichment)

From FORGE job-map — the customer job is BROADER than the product:

```
Product scope:  "Mount that holds and aims weapon"
Job scope:      "Engage threats accurately from moving platform
                 in all conditions (day/night, calm/rough sea,
                 fresh/fatigued operator) while maintaining
                 readiness between engagements"
```

FORGE expansion reveals 3 gaps in archive abstraction:
1. **Night operations** (O-40, Opp 8.5) — not in original abstraction
2. **Condition awareness** (O-51, Opp 8.0) — not in original abstraction
3. **Sustained operation fatigue** (O-30, Opp 6.5) — underweighted

### Step 5: Formulate the essential problem

**Archive Level 2 (2026-01):**
> "Enable accurate engagement of surface and low-air targets from a moving platform, operable by personnel with minimal training, without modification to existing platform structure"

**Enhanced Level 2 (2026-04, FORGE-enriched):**
> "Provide a platform-mounted system that enables a single operator to accurately direct a heavy weapon (25-55 kg) toward any threat in the upper hemisphere, maintaining readiness and effectiveness across all environmental conditions (day/night, sea state 0-3, tropical marine), without external power, while preserving the weapon and operator through the full engagement cycle (prepare → fire → conclude)."

**Differences from archive:**
| Dimension | Archive | Enhanced | Source |
|-----------|---------|----------|--------|
| Operator count | "personnel" (vague) | "single operator" | Field data (ER-04) |
| Conditions | "moving platform" | "day/night, sea state 0-3, tropical marine" | FORGE O-40, O-17, OP-01 |
| Power | Not mentioned | "without external power" | SC-2 |
| Lifecycle | "engagement" only | "full engagement cycle (prepare→fire→conclude)" | FORGE job map Steps 1-8 |
| Readiness | Not mentioned | "maintaining readiness" | FORGE O-51, O-55 |

---

## 2. Essential Problem Statement

See separate file: [BC_Essential_Problem.md](BC_Essential_Problem.md)

## 3. TVDT — Target Values Decision Table

See separate file: [BC_TVDT.md](BC_TVDT.md)

---

## 4. TRIZ Resources Available (from requirements + FORGE)

| Resource | Present? | Exploitable? | How |
|----------|----------|:------------:|-----|
| Operator's muscle | Yes | ✅ | All traverse/elevation force |
| Deck bolt holes | Yes | ✅ | Mounting interface — no new holes |
| Ship's standard tools | Yes | ✅ | 10,13,17mm — no special tools |
| Marine grease | Yes | ✅ | Lubrication, corrosion barrier |
| Weapon's own mass | Yes | ⚠️ | CG management (self-balancing?) |
| Recoil energy | Yes | ⚠️ | Currently wasted as heat — could auto-lubricate? |
| Salt spray | Yes (harmful) | ⚠️ | Could indicate corrosion (sensor) |
| Platform vibration | Yes (harmful) | ⚠️ | Could power small sensor (energy harvesting) |
| Ambient light | Yes | ✅ | Day operations; night = absence = problem |
| Thermal radiation | Yes | ✅ | Target detection in dark (SF-C thermal) |

**TRIZ insight:** Recoil energy (50 kN × 2mm stroke = 100 J per shot) is currently dissipated. At 600 rpm × 100 J = 1 kW average during firing. Even 0.1% capture = 1W — enough to power a condition monitoring sensor indefinitely. This is a "free resource" per TRIZ Principle 25 (Self-service).

---

## 5. Abstraction Quality Check (P&B §6.1 criteria)

| # | Check | Result |
|---|-------|--------|
| 1 | Essential problem is solution-neutral? | ✅ No mention of pedestal, slewing ring, worm gear |
| 2 | All sacred constraints preserved? | ✅ SC-1 (50 kN), SC-2 (no power), SC-3 (salt fog), SC-4 (75 kg) |
| 3 | Broader than archive but not too abstract? | ✅ Enhanced with FORGE lifecycle + conditions |
| 4 | Could lead to fundamentally different concepts? | ✅ "Platform-mounted system" allows suspended, recessed, rail-mounted, not just pedestal |
| 5 | TRIZ resources identified? | ✅ 10 resources, 4 exploitable |

**BC VERDICT: COMPLETE — proceed to BD (Function Structure)**
