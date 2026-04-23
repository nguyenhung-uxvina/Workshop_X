# Operating Environment — Workshop X Products

---

## Climate: Vietnam Tropical

```
Temperature:     25-45°C operating range
                 (Speed-of-sound MUST be parameterized for this range)
Humidity:        40-100% RH
                 (Condensation risk at dawn/dusk temperature transitions)
Rain:            Monsoon season — products must handle heavy rain exposure
Solar radiation: High UV — material degradation consideration
Salt air:        Coastal installations, naval products
```

---

## MIL-STD-810H Applicable Methods

| Method | Test | Relevance |
|--------|------|-----------|
| 501 | High Temperature | 45°C sustained operation |
| 502 | Low Temperature | 25°C floor (tropical) |
| 507 | Humidity | 40-100% RH cycling |
| 509 | Salt Fog | Coastal/naval deployment |
| 510 | Sand and Dust | Field deployment |
| 514 | Vibration | Vehicle/naval mount |
| 516 | Shock | Transport and handling |

---

## Deployment Scenarios

### Outdoor Firing Range (VN-RANGE-001 — Primary)
```
Location:     Open-air military firing range
Exposure:     Full weather — sun, rain, wind, dust
Power:        Military generator (±10% voltage variation) or grid
Network:      Wired Ethernet backbone + WiFi for mobile devices
Mounting:     Fixed posts, target frames, control building
Maintenance:  Limited technician access — must be robust
```

### Indoor Range (Future)
```
Location:     Enclosed firing range building
Exposure:     Controlled — but still hot/humid (no AC typically)
Power:        Grid power (more stable)
Network:      Wired Ethernet
```

### Naval Vessel (VN-SMASH, RCWS)
```
Location:     Ship deck / weapon station
Exposure:     Salt spray, vibration, extreme humidity
Power:        Ship power bus (variable quality)
Network:      Ship LAN
Motion:       Continuous — roll, pitch, yaw compensation required
```

---

## Power Considerations

```
Grid power (urban/base):
  - 220V AC, 50Hz, generally stable
  - Use standard AC-DC PSU

Military generator:
  - ±10% voltage variation
  - Frequency may drift
  - Must use regulated DC-DC after rectification
  - Brownout/surge protection required

Battery (portable):
  - LiFePO4 preferred (thermal stability in 45°C)
  - Charge management for tropical temperatures
  - Runtime calculation must account for heat derating

Solar (remote):
  - Trickle charge only — not primary power
  - Panel degradation in UV/humidity
```

---

## Network Assumptions

```
DESIGN PRINCIPLE: Edge-first — assume NO network, add connectivity as bonus

Primary:    Wired Ethernet (reliable, always prefer)
Secondary:  WiFi (field deployment, mobile devices)
Tertiary:   LoRa (long-range telemetry, low bandwidth)
Never:      Depend on cloud/internet for core functionality

Data policy:
  - ALL processing happens locally
  - Network used for: sync, reporting, remote management
  - System MUST operate fully offline
  - Queue data during outage, sync when connection returns
```
