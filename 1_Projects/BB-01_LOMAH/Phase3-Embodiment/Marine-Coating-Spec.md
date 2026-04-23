# Marine Coating Specification - BB-01 Enclosure

> **Issue ID**: DfM-001
> **Status**: ✅ COMPLETE
> **Date**: 2026-01-28

---

## 1. Requirement

| Ref | Requirement | Value |
|-----|-------------|-------|
| EN.03 | Chống ăn mòn mặn | ≥12 tháng |
| SF.01 | IP Rating enclosure | ≥IP65 |

**Problem**: Enclosure coating không được specify → Risk ăn mòn trong môi trường biển.

---

## 2. Coating Selection

### 2.1 Options Evaluated

| Coating | Salt Spray (hrs) | UV Resist | Cost | Local Avail |
|---------|------------------|-----------|------|-------------|
| Powder coat (epoxy) | 500-1000 | Medium | Low | ✅ Yes |
| **Marine polyurethane** | **1000-2000** | **High** | **Medium** | ✅ **Yes** |
| Zinc-rich primer + PU | 2000+ | High | High | ✅ Yes |
| Anodizing (Al only) | 1000+ | High | Medium | N/A (ABS) |

### 2.2 Selected: Marine Polyurethane (2-coat system)

**Rationale**:
1. Exceeds 1000 hrs salt spray (≈12 months marine exposure)
2. Good UV resistance for outdoor use
3. Available locally (Jotun, Hempel, International)
4. Compatible with ABS plastic enclosure
5. Cost-effective (~$5/unit)

---

## 3. Specification

### 3.1 Coating System

| Layer | Product | Thickness | Color |
|-------|---------|-----------|-------|
| Primer | Jotun Vinyl Primer | 25-40 µm | Grey |
| Topcoat | Jotun Hardtop XP | 50-75 µm | International Orange (SF.03) |
| **Total DFT** | | **75-115 µm** | |

### 3.2 Application Requirements

| Parameter | Specification |
|-----------|---------------|
| Surface prep | Clean, degrease, light sand (P320) |
| Application method | Spray (HVLP) or brush |
| Coats | 1 primer + 2 topcoat |
| Flash time between coats | 4-6 hours @ 25°C |
| Full cure | 7 days @ 25°C |
| Temperature | 15-35°C, <85% RH |

### 3.3 Performance Requirements

| Test | Standard | Requirement | Expected |
|------|----------|-------------|----------|
| Salt spray | ASTM B117 | ≥1000 hrs | 1500 hrs |
| Adhesion | ASTM D3359 | ≥4B | 5B |
| UV exposure | ASTM G154 | ≥1000 hrs | 1500 hrs |
| Impact resistance | ASTM D2794 | ≥20 in-lb | 40 in-lb |

---

## 4. Process Integration

### 4.1 Manufacturing Flow Update

```
BEFORE:
Receive box → Drill holes → Tap threads → [No coating] → Assembly

AFTER:
Receive box → Drill holes → Tap threads → COATING → Cure 7 days → Assembly
                                            ↑
                                     New step added
```

### 4.2 Lead Time Impact

| Item | Before | After | Change |
|------|--------|-------|--------|
| Enclosure prep | 1 day | 8 days | +7 days (cure time) |

**Mitigation**: Batch coating - prep 10+ enclosures at once

---

## 5. Quality Control

### 5.1 Incoming Inspection (if outsourced)

| Check | Method | Accept |
|-------|--------|--------|
| DFT | Coating thickness gauge | 75-115 µm |
| Adhesion | Cross-cut tape test | ≥4B |
| Visual | 100% inspection | No runs, sags, bare spots |
| Color | Visual vs standard | Match RAL 2004 |

### 5.2 Documentation

- Coating batch number traceable
- Cure date recorded
- QC sign-off before assembly

---

## 6. Cost Impact

| Item | Cost |
|------|------|
| Primer (per unit) | $1.00 |
| Topcoat (per unit) | $2.50 |
| Labor (per unit) | $1.50 |
| **Total coating cost** | **$5.00/unit** |

**BOM Impact**: $105 → $110 (+4.8%)

---

## 7. Supplier Options (Vietnam)

| Supplier | Product | Location | MOQ |
|----------|---------|----------|-----|
| Jotun Vietnam | Hardtop XP | HCMC | 1L |
| Hempel Vietnam | Hempadur + Hempathane | Hai Phong | 1L |
| International Paint | Interthane 990 | HCMC | 1L |

**Recommended**: Jotun (local stock in Hai Phong)

---

## 8. References

- [[DfX-Review-MCU-Box]] - Original issue identification
- [[v1.3-summary]] - EN.03 requirement
- Jotun Hardtop XP TDS

---

*Specification closes DfM-001*
*Per Workshop X 3-Gate Quality System*
