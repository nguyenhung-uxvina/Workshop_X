---
project: VN-RANGE-001
step: A3 — Equipment Configuration (Factory)
type: config-specification (A-CONFIG generates from BOM + survey → technician flashes devices)
deployment_id: DEP-VNR-001
customer: Trường bắn Suối Hai — E12/D3
config_source: A1 survey §9 (auto-config params) + A2 BOM
version: 1.0
created: 2026-02-20
status: DRAFT — awaiting A3-H HITL verification
automation: 75% — auto-generated from survey data; technician spot-checks before batch flash
---

# CORTEX RANGE — Equipment Configuration Specification
## DEP-VNR-001: Trường bắn Suối Hai (10 lanes)

> **This document is the single source of truth for all device configuration.**
> Every parameter traces to the A1 survey. Nothing is invented.
> Technician: flash devices from these specs. If a value looks wrong → STOP → ask KN.

---

## 1. DEPLOYMENT IDENTITY

```yaml
deployment:
  id: DEP-VNR-001
  range_id: SUOIHAI-E12
  range_name: "Trường bắn Suối Hai"
  unit: "Tiểu đoàn 3, Trung đoàn 12, Sư đoàn 302"
  location: "Ba Vì, Hà Nội"
  gps: "21.125N, 105.395E"
  lane_count: 10
  primary_distance_m: 100
  ammo_type: "7.62x39mm"
  scoring_standard: "TCVN_military_infantry"
  environment: "semi_outdoor"
  ip_rating: "IP65"
  created: "2026-02-20"
```

---

## 2. NETWORK CONFIGURATION

```yaml
network:
  mode: self_wifi           # No existing LAN — CORTEX provides all network

  wifi_ap:
    ssid: "CORTEX_RANGE_SUOIHAI"
    security: WPA2-PSK
    password: "[generated — 16 char alphanumeric]"  # Generate at flash time
    channel: auto            # Auto-select to avoid interference
    band: 5GHz_preferred     # 2.4GHz fallback
    power: 20dBm             # Outdoor rated
    mount_height_m: 4        # Survey §5.7 — pole at command post

  edge_node:
    hostname: "edge-suoihai"
    ip_static: 192.168.10.1
    subnet: 255.255.255.0
    gateway: 192.168.10.1    # EDGE is the gateway
    dns: 192.168.10.1        # Local DNS for cortex.range
    dhcp_range: 192.168.10.100-192.168.10.200  # For sensors + tablets
    local_domain: "cortex.range"

  lte_backup:                # F4 mitigation — commander remote viewing
    enabled: true
    modem: "4G LTE + external antenna"
    apn: "[Viettel APN]"     # Configure on-site
    purpose: "PULSE remote access for Đại tá Sơn"
    failover: true           # Auto-switch if WiFi down

  sensor_network:
    protocol: ethernet       # PoE via switch H11
    switch_ip: 192.168.10.2
    sensor_ip_range: 192.168.10.10-192.168.10.19  # .10=L1, .11=L2, ...
```

---

## 3. SENSOR CONFIGURATION (VN-LOMAH × 10)

### 3.1 Common Config (all sensors)

```yaml
sensor_common:
  model: "VN-LOMAH-v2"
  firmware: "v2.1.0"         # Latest stable
  sample_rate_hz: 192000     # 192kHz for acoustic TDOA
  detection_threshold_db: -40 # Adjustable at C12 calibration
  ip_rating: IP65
  mount_height_m: 1.2        # Survey §5.2 — existing post height
  mount_type: bolt_m8        # Survey §5.4 — steel Ø48mm
  lateral_offset_m: 0.0      # Center of lane (±0.5m acceptable)
  cable_gland: waterproof
  led_status: true           # Green = connected, Red = fault
  data_format: CDM_v1        # Write to CDM via EDGE
  heartbeat_interval_s: 5    # Health check every 5s
```

### 3.2 Per-Lane Config

| Lane | Sensor ID | IP Address | Cable Length | Serial # | Position (m from L-edge) | Notes |
|------|-----------|------------|-------------|----------|--------------------------|-------|
| L01 | LOMAH-SUOIHAI-01 | 192.168.10.10 | 5m (standard) | [fill at flash] | 0.75 | Left edge |
| L02 | LOMAH-SUOIHAI-02 | 192.168.10.11 | 5m | [fill] | 2.25 | |
| L03 | LOMAH-SUOIHAI-03 | 192.168.10.12 | 5m | [fill] | 3.75 | |
| L04 | LOMAH-SUOIHAI-04 | 192.168.10.13 | 5m | [fill] | 5.25 | |
| L05 | LOMAH-SUOIHAI-05 | 192.168.10.14 | 5m | [fill] | 6.75 | Center-left |
| L06 | LOMAH-SUOIHAI-06 | 192.168.10.15 | 5m | [fill] | 8.25 | Center-right |
| L07 | LOMAH-SUOIHAI-07 | 192.168.10.16 | 5m | [fill] | 9.75 | |
| L08 | LOMAH-SUOIHAI-08 | 192.168.10.17 | 5m | [fill] | 11.25 | |
| L09 | LOMAH-SUOIHAI-09 | 192.168.10.18 | 10m (extension) | [fill] | 12.75 | Far end — longer cable |
| L10 | LOMAH-SUOIHAI-10 | 192.168.10.19 | 10m (extension) | [fill] | 14.25 | Far end |
| SPARE | LOMAH-SUOIHAI-SP | 192.168.10.20 | 5m | [fill] | — | Pre-configured spare |

> **Position calculation:** Lane 1 starts at 0.75m (half lane width from left edge).
> Each subsequent lane = previous + 1.5m (lane_width from §2.2).
> Total: 0.75 + (9 × 1.5) = 14.25m → fits within 18m total width (§2.6). ✓

---

## 4. EDGE NODE CONFIGURATION

```yaml
edge_node:
  hardware: "NVIDIA Jetson Orin Nano"
  storage: "1TB NVMe"
  os: "JetPack 6.x + Ubuntu 22.04"
  location: "Command post — locked cabinet"
  power: "220V via UPS (H13)"

  services:
    cdm:
      name: "CORTEX CDM v1.0"
      port: 5432              # PostgreSQL + TimescaleDB
      data_retention_days: 365 # Survey §7.8
      backup: daily_local     # To NVMe, 30-day rolling
      schema: "cdm_v1_range"

    scoreboard:
      name: "SCOREBOARD Engine v1.0"
      port: 8080
      ai_engine: "BallisticAI v1.0"
      model_file: "ballisticai_7.62x39mm_v1.onnx"  # Ammo-specific model
      lanes: 10
      scoring_mode: "TCVN_military_infantry"
      confidence_threshold: 0.85
      max_latency_ms: 50

    pulse:
      name: "PULSE Dashboard v1.0"
      port: 80                # http://cortex.range
      ssl: false              # Local network — no cert needed
      auth: true
      default_admin: "admin"  # Change on first login
      org_structure:
        levels: ["Trung đoàn", "Tiểu đoàn", "Đại đội", "Trung đội", "Tiểu đội"]
        commander_view: true
        remote_access: true   # Via 4G LTE (F4)
      alerts:
        cease_fire: true
        ammo_warning_threshold: 10  # Rounds remaining
        sensor_offline: true

    clawdbot:
      name: "Clawdbot Support Agent"
      port: 8443
      mode: "range_officer_assist"
      language: "vi"          # Vietnamese primary

  deploy_sequence:
    - "deploy-cdm.sh"
    - "deploy-scoreboard.sh"
    - "deploy-pulse.sh"
    - "deploy-integration.sh"

  rollback: "rollback.sh"    # Restores last known-good state

  health_check:
    interval_s: 30
    services: [cdm, scoreboard, pulse, clawdbot]
    alert_on_failure: true
    alert_target: "KN_phone"
```

---

## 5. TABLET CONFIGURATION (× 2)

```yaml
tablet:
  model: "10-inch ruggedized Android (IP54)"
  qty: 2

  tablet_1:
    id: "TAB-SUOIHAI-01"
    role: "Range Officer Primary"
    wifi_ssid: "CORTEX_RANGE_SUOIHAI"
    bookmark: "http://cortex.range"
    app: "PULSE PWA (add to home screen)"
    user: "range_officer_1"

  tablet_2:
    id: "TAB-SUOIHAI-02"
    role: "Range Officer Secondary / Commander Demo"
    wifi_ssid: "CORTEX_RANGE_SUOIHAI"
    bookmark: "http://cortex.range"
    app: "PULSE PWA"
    user: "range_officer_2"
```

---

## 6. CALIBRATION PARAMETERS (Pre-loaded, adjusted at C12)

```yaml
calibration:
  ammo_profile: "7.62x39mm_K56"     # Vietnamese standard AK ammo
  muzzle_velocity_mps: 715           # Nominal for 7.62x39mm
  speed_of_sound_mps: 343            # Adjusted on-site for temperature
  temperature_correction: true        # Auto-adjust based on ambient sensor

  acceptance_criteria:
    accuracy_mm: 5                    # ≤5mm miss distance
    hit_rate_pct: 95                  # ≥95% shots scored
    latency_ms: 50                    # ≤50ms detection
    min_calibration_shots: 20         # Per lane

  distances:                          # Pre-load all available distances
    - distance_m: 25
      tdoa_offset_us: 73             # Calculated from geometry
    - distance_m: 50
      tdoa_offset_us: 146
    - distance_m: 100
      tdoa_offset_us: 291            # Primary — most calibration here

  noise_profile:
    adjacent_range: true              # F3 flag — range 200m away
    mitigation: "cross_correlation_filter"
    calibrate_when: "adjacent_range_cold"  # Per F3 resolution
```

---

## 7. CONFIGURATION FLASH CHECKLIST

> Technician: execute this checklist in order. Check each box. If ANY step fails → STOP → report to KN.

### 7.1 Pre-Flash

- ☐ All 11 sensors (10 + spare) present and physically inspected
- ☐ EDGE node powered on, JetPack verified
- ☐ Config files generated from this document (auto-config script)
- ☐ Serial numbers recorded in §3.2 table

### 7.2 Sensor Flash (repeat per sensor)

- ☐ Connect sensor to flash station
- ☐ Flash firmware v2.1.0
- ☐ Load lane-specific config (sensor_id, ip_address, lane_position)
- ☐ Verify LED: GREEN = connected
- ☐ Run self-test: acoustic ping → response within 50ms
- ☐ Label sensor with lane number (waterproof marker)
- ☐ Record serial number → §3.2 table

### 7.3 EDGE Flash

- ☐ Deploy OS + services via deploy sequence (§4)
- ☐ Verify all 4 services report RUNNING
- ☐ Load calibration parameters (§6)
- ☐ Load network config (§2)
- ☐ Verify PULSE accessible at http://localhost:80
- ☐ Change default admin password
- ☐ Configure org structure in PULSE

### 7.4 Spot-Check (CRITICAL — before batch ship)

- ☐ Connect 1 flashed sensor to EDGE via PoE switch
- ☐ Verify sensor appears in PULSE dashboard (Lane status: GREEN)
- ☐ Generate test acoustic signal (hand clap near sensor)
- ☐ Confirm PULSE registers event
- ☐ Verify CDM database has new entry
- ☐ **If spot-check FAILS → DO NOT SHIP. Debug before proceeding.**

### 7.5 Pack

- ☐ All sensors in labeled anti-static bags (lane number on bag)
- ☐ EDGE node in padded case
- ☐ WiFi AP + mounting kit
- ☐ Tablets charged and in cases
- ☐ All cables coiled and labeled
- ☐ Installation materials (brackets, bolts, cable protectors)
- ☐ Quick-reference cards (5 copies)
- ☐ This config document printed (1 copy for field reference)

---

## 8. VALIDATION MATRIX

| Config Parameter | Source | Value | Cross-Check Against | Match? |
|-----------------|--------|-------|---------------------|--------|
| lane_count=10 | A1 §2.1 | 10 | BOM sensor qty (H01) | ☐ |
| lane_width=1.5m | A1 §2.2 | 1.5 | Sensor positions (§3.2) | ☐ |
| ammo=7.62x39mm | A1 §7.4 | 7.62x39mm | AI model file (§4 scoreboard) | ☐ |
| distance=100m | A1 §2.4 | 100 | TDOA offset (§6) | ☐ |
| network=self_wifi | A1 §4.1 | self | AP config (§2) | ☐ |
| retention=365d | A1 §7.8 | 365 | CDM config (§4) | ☐ |
| mount=bolt_m8 | A1 §5.4 | bolt | Bracket type (BOM H02) | ☐ |
| scoring=TCVN_mil | A1 §7.5 | TCVN | SCOREBOARD mode (§4) | ☐ |

> **Rule:** Every config value must trace to A1 survey or A2 BOM. If a value has no source → flag it.

---

*A3 Equipment Config v1.0 — DEP-VNR-001 (Trường bắn Suối Hai, 10 lanes)*
*Generated by A-CONFIG from A1 survey + A2 BOM*
*Status: DRAFT — awaiting A3-H HITL verification by KN*
