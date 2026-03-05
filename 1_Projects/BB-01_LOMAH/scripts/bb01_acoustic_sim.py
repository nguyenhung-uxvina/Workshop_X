#!/usr/bin/env python3
"""
BB-01 LOMAH Signal Chain Simulation
====================================
Time-domain simulation of the analog front-end:
  Impact -> Piezo (Q=d33*F) -> Charge Amp (Q->V, dual supply +/-5V)
         -> Bandpass (2-8kHz) -> Gain (10x, biased to 1.65V)
         -> Clamp (0-3.3V) -> ADC (12-bit, 200kSps)

Chuoi tin hieu BB-01: Mo phong mien thoi gian tu va cham den ADC.

Usage:
    python bb01_acoustic_sim.py            # Default simulation
    python bb01_acoustic_sim.py --sweep-cf # Sweep Cf from 100pF to 100nF
    python bb01_acoustic_sim.py --cf 4700  # Override Cf in pF
    python bb01_acoustic_sim.py --force 500 # Override impact force in N
"""

import argparse
from dataclasses import dataclass
from typing import Tuple

import numpy as np
from scipy import signal
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt


# ---------------------------------------------------------------------------
# Cau hinh (Configuration)
# ---------------------------------------------------------------------------
@dataclass
class SignalChainConfig:
    """Tham so chuoi tin hieu BB-01 -- tat ca gia tri SI."""

    # Thoi gian mo phong (Simulation time)
    fs: float = 1_000_000          # Hz  -- sample rate for continuous sim
    t_duration: float = 0.005      # s   -- 5 ms window

    # Va cham (Impact model) -- 7.62mm tren tam thep
    impact_force_N: float = 5000.0
    impact_duration_s: float = 50e-6  # 50 us half-sine

    # Cam bien ap dien (Piezo sensor) -- dia PZT-5A 20mm
    piezo_d33: float = 150e-12     # C/N  -- 150 pC/N
    piezo_capacitance: float = 500e-12  # F -- 500 pF

    # Bo khuech dai dien tich (Charge amplifier) -- TL072, +/-5V dual supply
    charge_amp_Cf: float = 3.3e-9   # F -- 3.3 nF feedback cap (F1 fix)
    charge_amp_Rf: float = 10e6     # Ohm -- 10 MOhm feedback resistor
    # Low-freq pole: f_low = 1/(2*pi*Rf*Cf) = 4.8 Hz

    # Nguon cap op-amp (Op-amp supply rails) -- F3 fix
    analog_supply_pos: float = 5.0   # V -- +5V from AMS1117-5.0
    analog_supply_neg: float = -5.0  # V -- -5V from ICL7660 charge pump

    # Bo loc thong dai (Bandpass filter) -- Sallen-Key Butterworth
    bp_low_hz: float = 2000.0
    bp_high_hz: float = 8000.0
    bp_order: int = 2

    # Tang khuech dai (Gain stage) -- LM358, single +5V supply
    gain_factor: float = 10.0
    gain_gbw_hz: float = 1.1e6     # GBW cua LM358
    bias_voltage: float = 1.65     # V -- mid-rail bias (Vcc_adc / 2)

    # Bao ve kep (Clamp/protection)
    clamp_low_v: float = 0.0
    clamp_high_v: float = 3.3

    # ADC -- STM32F4
    adc_bits: int = 12
    adc_vref: float = 3.3
    adc_sample_rate: float = 200_000  # 200 kSps


# ---------------------------------------------------------------------------
# Cac tang xu ly tin hieu (Signal chain stage functions)
# ---------------------------------------------------------------------------

def generate_impact_signal(cfg: SignalChainConfig) -> Tuple[np.ndarray, np.ndarray]:
    """Tao xung luc va cham dang nua hinh sin.

    Half-sine impact pulse: F(t) = F_peak * sin(pi * t / T_impact)
    for 0 <= t <= T_impact, zero elsewhere.
    """
    t = np.arange(0, cfg.t_duration, 1.0 / cfg.fs)
    force = np.zeros_like(t)

    # Xung nua sin trong khoang [0, impact_duration]
    impact_mask = t <= cfg.impact_duration_s
    force[impact_mask] = cfg.impact_force_N * np.sin(
        np.pi * t[impact_mask] / cfg.impact_duration_s
    )
    return t, force


def piezo_charge_output(force: np.ndarray, cfg: SignalChainConfig) -> np.ndarray:
    """Chuyen luc thanh dien tich: Q = d33 * F.

    Piezo produces charge proportional to applied force.
    """
    return cfg.piezo_d33 * force


def charge_amplifier(
    charge: np.ndarray, cfg: SignalChainConfig
) -> np.ndarray:
    """Bo khuech dai dien tich: H(s) = -1 / (Cf * (1 + s*Rf*Cf)).

    Implements the charge-to-voltage conversion using bilinear transform.
    Output swings bipolar around 0V (dual supply +/-5V).
    Output is rail-clipped to analog supply limits.
    Cuc tan so thap: f_low = 1 / (2*pi*Rf*Cf).
    """
    Cf = cfg.charge_amp_Cf
    Rf = cfg.charge_amp_Rf

    # Ham truyen lien tuc: V_out(s) = -Q(s) / (Cf * (1 + s*Rf*Cf))
    # Numerator: [-1/Cf], Denominator: [Rf*Cf, 1] (in descending s powers)
    num = np.array([-1.0 / Cf])
    den = np.array([Rf * Cf, 1.0])

    # Chuyen sang mien roi rac bang phep bien doi song tuyen
    b, a = signal.bilinear(num, den, cfg.fs)

    # Loc tin hieu dien tich
    voltage = signal.lfilter(b, a, charge)

    # Gioi han theo nguon cap op-amp (clip to supply rails)
    voltage = np.clip(voltage, cfg.analog_supply_neg, cfg.analog_supply_pos)

    return voltage


def bandpass_filter(
    voltage: np.ndarray, cfg: SignalChainConfig
) -> np.ndarray:
    """Bo loc thong dai Butterworth bac 2, 2-8 kHz.

    Sallen-Key topology in hardware; scipy Butterworth in simulation.
    Output is AC-coupled (no DC bias).
    """
    sos = signal.butter(
        cfg.bp_order,
        [cfg.bp_low_hz, cfg.bp_high_hz],
        btype="bandpass",
        fs=cfg.fs,
        output="sos",
    )
    return signal.sosfilt(sos, voltage)


def gain_stage(
    voltage: np.ndarray, cfg: SignalChainConfig
) -> np.ndarray:
    """Tang khuech dai 10x (LM358) voi dien ap thien ap giua nguon.

    Non-inverting gain with mid-rail bias.
    V_out = bias + gain * V_in
    LM358 at +5V single supply, output biased to 1.65V for ADC range.
    GBW check: 8kHz * 10 = 80kHz << 1.1MHz GBW.
    """
    return cfg.bias_voltage + voltage * cfg.gain_factor


def clamp_protection(
    voltage: np.ndarray, cfg: SignalChainConfig
) -> Tuple[np.ndarray, dict]:
    """Bao ve kep 0-3.3V. Tra ve (tin hieu kep, thong tin cat).

    Hard clamp with Schottky diodes in hardware.
    Returns (clamped_signal, clip_info) with separate high/low flags.
    """
    clips_high = bool(np.any(voltage > cfg.clamp_high_v))
    clips_low = bool(np.any(voltage < cfg.clamp_low_v))
    clamped = np.clip(voltage, cfg.clamp_low_v, cfg.clamp_high_v)
    clip_info = {
        "any": clips_high or clips_low,
        "high": clips_high,
        "low": clips_low,
    }
    return clamped, clip_info


def adc_sample(
    voltage: np.ndarray,
    t: np.ndarray,
    cfg: SignalChainConfig,
) -> Tuple[np.ndarray, np.ndarray, np.ndarray]:
    """ADC 12-bit, 200 kSps: giam mau va luong tu hoa.

    Decimates from simulation rate to ADC rate, then quantizes.
    Returns (t_adc, v_analog_decimated, adc_codes).
    """
    # Giam mau (Decimate)
    decimation = int(cfg.fs / cfg.adc_sample_rate)
    v_decimated = voltage[::decimation]
    t_decimated = t[::decimation]

    # Luong tu hoa (Quantize)
    n_levels = 2 ** cfg.adc_bits
    lsb = cfg.adc_vref / n_levels
    codes = np.floor(v_decimated / lsb).astype(int)
    codes = np.clip(codes, 0, n_levels - 1)

    return t_decimated, v_decimated, codes


# ---------------------------------------------------------------------------
# Duong ong xu ly (Pipeline orchestrator)
# ---------------------------------------------------------------------------

def run_signal_chain(cfg: SignalChainConfig) -> dict:
    """Chay toan bo chuoi tin hieu, tra ve ket qua tung tang."""

    # Tang 1: Va cham
    t, force = generate_impact_signal(cfg)

    # Tang 2: Cam bien piezo
    charge = piezo_charge_output(force, cfg)

    # Tang 3: Bo khuech dai dien tich (bipolar output, dual supply)
    v_chargeamp = charge_amplifier(charge, cfg)

    # Tang 4: Bo loc thong dai (AC output, no bias)
    v_bandpass = bandpass_filter(v_chargeamp, cfg)

    # Tang 5: Khuech dai + thien ap (biased to 1.65V)
    v_gained = gain_stage(v_bandpass, cfg)

    # Tang 6: Bao ve kep
    v_clamped, clip_info = clamp_protection(v_gained, cfg)

    # Tang 7: ADC
    t_adc, v_adc_analog, adc_codes = adc_sample(v_clamped, t, cfg)

    return {
        "t": t,
        "force": force,
        "charge": charge,
        "v_chargeamp": v_chargeamp,
        "v_bandpass": v_bandpass,
        "v_gained": v_gained,
        "v_clamped": v_clamped,
        "clip_info": clip_info,
        "t_adc": t_adc,
        "v_adc_analog": v_adc_analog,
        "adc_codes": adc_codes,
    }


# ---------------------------------------------------------------------------
# So lieu (Metrics)
# ---------------------------------------------------------------------------

def compute_metrics(results: dict, cfg: SignalChainConfig) -> dict:
    """Tinh cac chi so hieu nang chuoi tin hieu."""

    adc_codes = results["adc_codes"]
    n_levels = 2 ** cfg.adc_bits
    clip_info = results["clip_info"]

    # Bien do dinh AC (peak swing from bias, before and after clamp)
    v_gained = results["v_gained"]
    peak_swing_before = float(np.max(np.abs(v_gained - cfg.bias_voltage)))
    peak_swing_after = float(np.max(np.abs(results["v_clamped"] - cfg.bias_voltage)))

    # SNR uoc tinh: bien do dinh / nhieu luong tu hoa
    # Chi co nghia khi khong cat (Only meaningful when not clipping)
    lsb = cfg.adc_vref / n_levels
    quantization_noise_rms = lsb / np.sqrt(12)
    if quantization_noise_rms > 0 and peak_swing_after > 0 and not clip_info["any"]:
        snr_db = 20 * np.log10(peak_swing_after / quantization_noise_rms)
    elif clip_info["any"]:
        # SNR khong co nghia khi cat -- bao hieu nguoi dung
        snr_db = float("nan")
    else:
        snr_db = 0.0

    # Su dung ADC (ADC utilization) -- tinh tu bien do so voi phan nua dai
    adc_max_code = int(np.max(adc_codes))
    adc_min_code = int(np.min(adc_codes))
    bias_code = int(cfg.bias_voltage / lsb)
    max_swing_codes = max(adc_max_code - bias_code, bias_code - adc_min_code)
    available_swing = bias_code  # codes from bias to 0 (or bias to max)
    if available_swing > 0:
        adc_utilization = max_swing_codes / available_swing * 100
    else:
        adc_utilization = 0.0

    # Dien tich dinh (Peak charge)
    peak_charge = float(np.max(np.abs(results["charge"])))

    # Dien ap charge amp dinh
    peak_chargeamp = float(np.max(np.abs(results["v_chargeamp"])))

    return {
        "peak_charge_pC": peak_charge * 1e12,
        "peak_chargeamp_V": peak_chargeamp,
        "peak_swing_before_V": peak_swing_before,
        "peak_swing_after_V": peak_swing_after,
        "clip_info": clip_info,
        "snr_db": snr_db,
        "adc_max_code": adc_max_code,
        "adc_min_code": adc_min_code,
        "adc_utilization_pct": adc_utilization,
    }


def print_metrics(metrics: dict, cfg: SignalChainConfig):
    """In ket qua chi so."""

    clip = metrics["clip_info"]
    f_low = 1.0 / (2 * np.pi * cfg.charge_amp_Rf * cfg.charge_amp_Cf)

    print("\n" + "=" * 60)
    print("  BB-01 LOMAH Signal Chain Metrics")
    print("=" * 60)
    print(f"  Impact force:         {cfg.impact_force_N:.0f} N")
    print(f"  Impact duration:      {cfg.impact_duration_s*1e6:.0f} us")
    print(f"  Piezo sensitivity:    {cfg.piezo_d33*1e12:.0f} pC/N")
    print(f"  Charge amp Cf:        {cfg.charge_amp_Cf*1e9:.1f} nF")
    print(f"  Charge amp Rf:        {cfg.charge_amp_Rf/1e6:.0f} MOhm")
    print(f"  Low-freq pole:        {f_low:.1f} Hz")
    print(f"  Analog supply:        {cfg.analog_supply_neg:+.0f}V / {cfg.analog_supply_pos:+.0f}V")
    print(f"  Bias voltage:         {cfg.bias_voltage:.2f} V")
    print("-" * 60)
    print(f"  Peak charge:          {metrics['peak_charge_pC']:.1f} pC")
    print(f"  Peak charge amp out:  {metrics['peak_chargeamp_V']:.3f} V")
    print(f"  Peak swing (pre-clamp):  {metrics['peak_swing_before_V']:.3f} V")
    print(f"  Peak swing (post-clamp): {metrics['peak_swing_after_V']:.3f} V")

    # Chi tiet cat (Clipping details)
    if clip["any"]:
        parts = []
        if clip["high"]:
            parts.append("HIGH (>3.3V)")
        if clip["low"]:
            parts.append("LOW (<0V)")
        print(f"  Clipping:             YES -- {', '.join(parts)}")
    else:
        print(f"  Clipping:             No")

    snr = metrics["snr_db"]
    if np.isnan(snr):
        print(f"  SNR (est):            N/A (clipping)")
    else:
        print(f"  SNR (est):            {snr:.1f} dB")

    print(f"  ADC code range:       {metrics['adc_min_code']} - {metrics['adc_max_code']}"
          f" / {2**cfg.adc_bits - 1}")
    print(f"  ADC utilization:      {metrics['adc_utilization_pct']:.1f}%")
    print("=" * 60)

    # Kiem tra vat ly (Physics sanity check)
    expected_v_static = (cfg.piezo_d33 * cfg.impact_force_N) / cfg.charge_amp_Cf
    print(f"\n  [Sanity] Static Q/Cf = {cfg.piezo_d33*cfg.impact_force_N*1e12:.0f}pC"
          f" / {cfg.charge_amp_Cf*1e9:.1f}nF = {expected_v_static:.1f} V"
          f" (DC equilibrium, not reached for short pulses)")
    print(f"  [Sanity] Actual dynamic peak = {metrics['peak_chargeamp_V']:.3f} V"
          f" (charge amp frequency response shapes the pulse)")
    actual_swing = metrics["peak_swing_before_V"]
    biased_peak = cfg.bias_voltage + actual_swing
    biased_neg = cfg.bias_voltage - actual_swing
    print(f"  [Sanity] ADC window: {biased_neg:.2f}V to {biased_peak:.2f}V"
          f" (bias +/- {actual_swing:.3f}V)")
    if biased_peak > cfg.clamp_high_v or biased_neg < cfg.clamp_low_v:
        print(f"  [Sanity] -> CLIPS (outside 0-3.3V window)")
    else:
        print(f"  [Sanity] -> OK (fits in 0-3.3V window)")


# ---------------------------------------------------------------------------
# Ve do thi (Plotting)
# ---------------------------------------------------------------------------

def plot_signal_chain(results: dict, cfg: SignalChainConfig, save_path: str = None):
    """Ve 6 bang tin hieu tai moi tang."""

    t_ms = results["t"] * 1e3  # Doi sang ms
    t_adc_ms = results["t_adc"] * 1e3

    fig, axes = plt.subplots(6, 1, figsize=(12, 14), sharex=False)
    fig.suptitle("BB-01 LOMAH Signal Chain Simulation", fontsize=14, fontweight="bold")

    # 1. Luc va cham
    axes[0].plot(t_ms, results["force"], "k-", linewidth=1.5)
    axes[0].set_ylabel("Force (N)")
    axes[0].set_title("Stage 1: Impact Force (half-sine)")
    axes[0].set_xlim(0, 0.5)
    axes[0].grid(True, alpha=0.3)

    # 2. Dien tich piezo
    axes[1].plot(t_ms, results["charge"] * 1e9, "b-", linewidth=1.5)
    axes[1].set_ylabel("Charge (nC)")
    axes[1].set_title("Stage 2: Piezo Charge Output (Q = d33 * F)")
    axes[1].set_xlim(0, 0.5)
    axes[1].grid(True, alpha=0.3)

    # 3. Dien ap charge amp (bipolar, dual supply)
    axes[2].plot(t_ms, results["v_chargeamp"], "r-", linewidth=1.5)
    axes[2].axhline(y=0, color="k", linestyle="-", alpha=0.3)
    axes[2].axhline(y=cfg.analog_supply_pos, color="gray", linestyle=":",
                    alpha=0.5, label=f"+{cfg.analog_supply_pos:.0f}V rail")
    axes[2].axhline(y=cfg.analog_supply_neg, color="gray", linestyle=":",
                    alpha=0.5, label=f"{cfg.analog_supply_neg:.0f}V rail")
    axes[2].set_ylabel("Voltage (V)")
    axes[2].set_title(f"Stage 3: Charge Amp Output (Cf={cfg.charge_amp_Cf*1e9:.1f}nF, dual supply)")
    axes[2].legend(loc="upper right", fontsize=8)
    axes[2].grid(True, alpha=0.3)

    # 4. Sau bo loc thong dai
    axes[3].plot(t_ms, results["v_bandpass"], "g-", linewidth=1.5)
    axes[3].axhline(y=0, color="k", linestyle="-", alpha=0.3)
    axes[3].set_ylabel("Voltage (V)")
    axes[3].set_title("Stage 4: Bandpass Filter Output (2-8 kHz, AC-coupled)")
    axes[3].grid(True, alpha=0.3)

    # 5. Sau khuech dai + kep (with bias)
    axes[4].plot(t_ms, results["v_gained"], "m-", linewidth=1, alpha=0.5, label="Before clamp")
    axes[4].plot(t_ms, results["v_clamped"], "m-", linewidth=1.5, label="After clamp")
    axes[4].axhline(y=cfg.clamp_high_v, color="r", linestyle="--", alpha=0.5, label="3.3V limit")
    axes[4].axhline(y=cfg.clamp_low_v, color="r", linestyle="--", alpha=0.5, label="0V limit")
    axes[4].axhline(y=cfg.bias_voltage, color="blue", linestyle=":", alpha=0.5,
                    label=f"Bias={cfg.bias_voltage:.2f}V")
    axes[4].set_ylabel("Voltage (V)")
    axes[4].set_title("Stage 5-6: Gain (10x) + Bias (1.65V) + Clamp (0-3.3V)")
    axes[4].legend(loc="upper right", fontsize=8)
    axes[4].grid(True, alpha=0.3)

    # 6. ADC codes
    axes[5].stem(
        t_adc_ms, results["adc_codes"],
        linefmt="C0-", markerfmt="C0.", basefmt="k-",
    )
    axes[5].set_ylabel("ADC Code")
    axes[5].set_xlabel("Time (ms)")
    axes[5].set_title(f"Stage 7: ADC Output ({cfg.adc_bits}-bit, {cfg.adc_sample_rate/1e3:.0f} kSps)")
    axes[5].set_ylim(0, 2**cfg.adc_bits)
    # Danh dau bias code
    bias_code = int(cfg.bias_voltage / (cfg.adc_vref / (2 ** cfg.adc_bits)))
    axes[5].axhline(y=bias_code, color="blue", linestyle=":", alpha=0.5)
    axes[5].grid(True, alpha=0.3)

    plt.tight_layout()

    if save_path:
        plt.savefig(save_path, dpi=150, bbox_inches="tight")
        print(f"\n  Plot saved to: {save_path}")
    else:
        plt.savefig("bb01_signal_chain.png", dpi=150, bbox_inches="tight")
        print("\n  Plot saved to: bb01_signal_chain.png")

    plt.close()


# ---------------------------------------------------------------------------
# Quet Cf (Cf sweep mode)
# ---------------------------------------------------------------------------

def sweep_cf(cfg: SignalChainConfig, save_path: str = None):
    """Quet Cf tu 100pF den 100nF, ve do thi bien do dinh va cat."""

    cf_values = np.logspace(-10, -7, 60)  # 100pF to 100nF (F2 fix)
    peak_chargeamp = []
    peak_swing = []
    adc_utilizations = []
    clips_high_flags = []
    clips_low_flags = []

    for cf in cf_values:
        test_cfg = SignalChainConfig(
            fs=cfg.fs,
            t_duration=cfg.t_duration,
            impact_force_N=cfg.impact_force_N,
            impact_duration_s=cfg.impact_duration_s,
            piezo_d33=cfg.piezo_d33,
            piezo_capacitance=cfg.piezo_capacitance,
            charge_amp_Cf=cf,
            charge_amp_Rf=cfg.charge_amp_Rf,
            analog_supply_pos=cfg.analog_supply_pos,
            analog_supply_neg=cfg.analog_supply_neg,
            bp_low_hz=cfg.bp_low_hz,
            bp_high_hz=cfg.bp_high_hz,
            bp_order=cfg.bp_order,
            gain_factor=cfg.gain_factor,
            gain_gbw_hz=cfg.gain_gbw_hz,
            bias_voltage=cfg.bias_voltage,
            clamp_low_v=cfg.clamp_low_v,
            clamp_high_v=cfg.clamp_high_v,
            adc_bits=cfg.adc_bits,
            adc_vref=cfg.adc_vref,
            adc_sample_rate=cfg.adc_sample_rate,
        )
        results = run_signal_chain(test_cfg)
        metrics = compute_metrics(results, test_cfg)

        peak_chargeamp.append(metrics["peak_chargeamp_V"])
        peak_swing.append(metrics["peak_swing_before_V"])
        adc_utilizations.append(metrics["adc_utilization_pct"])
        clips_high_flags.append(metrics["clip_info"]["high"])
        clips_low_flags.append(metrics["clip_info"]["low"])

    cf_nF = cf_values * 1e9

    fig, (ax1, ax2, ax3) = plt.subplots(3, 1, figsize=(10, 10))
    fig.suptitle("BB-01 LOMAH: Cf Sweep Analysis (with mid-rail bias)",
                 fontsize=14, fontweight="bold")

    # Panel 1: Bien do dinh theo Cf
    ax1.semilogx(cf_nF, peak_chargeamp, "b-o", markersize=3, label="Charge Amp peak")
    ax1.semilogx(cf_nF, peak_swing, "r-o", markersize=3, label="Swing at ADC input")
    max_swing = cfg.bias_voltage  # max swing before clipping
    ax1.axhline(y=max_swing, color="r", linestyle="--", alpha=0.5,
                label=f"Max swing ({max_swing:.2f}V)")
    ax1.set_xlabel("Cf (nF)")
    ax1.set_ylabel("Peak Voltage (V)")
    ax1.set_title("Peak Amplitude vs Feedback Capacitance")
    ax1.legend(fontsize=8)
    ax1.grid(True, alpha=0.3)

    # Panel 2: ADC utilization
    ax2.semilogx(cf_nF, adc_utilizations, "g-s", markersize=3, linewidth=2)
    ax2.axhline(y=80, color="orange", linestyle=":", alpha=0.7, label="80% target")
    ax2.axhline(y=100, color="r", linestyle="--", alpha=0.5, label="100% (clipping)")
    ax2.fill_between(cf_nF, 60, 90, alpha=0.1, color="green", label="Sweet spot (60-90%)")
    ax2.set_xlabel("Cf (nF)")
    ax2.set_ylabel("ADC Utilization (%)")
    ax2.set_title("ADC Utilization vs Cf")
    ax2.set_ylim(0, 120)
    ax2.legend(fontsize=8)
    ax2.grid(True, alpha=0.3)

    # Panel 3: Vung cat -- tach rieng high va low (F2 fix)
    clips_h = np.array(clips_high_flags, dtype=float)
    clips_l = np.array(clips_low_flags, dtype=float)
    ax3.fill_between(cf_nF, 0, clips_h * 1.0, alpha=0.3, color="red",
                     label="Clips HIGH (>3.3V)")
    ax3.fill_between(cf_nF, 0, clips_l * -1.0, alpha=0.3, color="blue",
                     label="Clips LOW (<0V)")
    ax3.semilogx(cf_nF, clips_h, "r-", linewidth=1.5)
    ax3.semilogx(cf_nF, -clips_l, "b-", linewidth=1.5)
    ax3.set_xlabel("Cf (nF)")
    ax3.set_ylabel("Clipping")
    ax3.set_title("Clipping Regions (separate high/low)")
    ax3.set_ylim(-1.3, 1.3)
    ax3.set_yticks([-1, 0, 1])
    ax3.set_yticklabels(["LOW clip", "No clip", "HIGH clip"])
    ax3.legend(fontsize=8)
    ax3.grid(True, alpha=0.3)

    # Danh dau Cf mac dinh
    default_cf_nF = cfg.charge_amp_Cf * 1e9
    for ax in (ax1, ax2, ax3):
        ax.axvline(x=default_cf_nF, color="k", linestyle="--", alpha=0.5)
        ax.annotate(
            f"Default Cf={default_cf_nF:.1f}nF",
            xy=(default_cf_nF, 0),
            fontsize=8,
            rotation=90,
            va="bottom",
        )

    plt.tight_layout()

    out = save_path or "bb01_cf_sweep.png"
    plt.savefig(out, dpi=150, bbox_inches="tight")
    print(f"\n  Cf sweep plot saved to: {out}")
    plt.close()


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="BB-01 LOMAH Signal Chain Simulation"
    )
    parser.add_argument(
        "--sweep-cf",
        action="store_true",
        help="Sweep Cf from 100pF to 100nF and plot results",
    )
    parser.add_argument(
        "--cf",
        type=float,
        default=None,
        help="Override Cf value in pF (e.g. --cf 3300)",
    )
    parser.add_argument(
        "--force",
        type=float,
        default=None,
        help="Override impact force in N (e.g. --force 3000)",
    )
    parser.add_argument(
        "--output",
        type=str,
        default=None,
        help="Output plot filename",
    )
    args = parser.parse_args()

    cfg = SignalChainConfig()

    # Ghi de tham so neu co
    if args.cf is not None:
        cfg.charge_amp_Cf = args.cf * 1e-12
    if args.force is not None:
        cfg.impact_force_N = args.force

    if args.sweep_cf:
        sweep_cf(cfg, save_path=args.output)
    else:
        # Chay chuoi tin hieu chinh
        results = run_signal_chain(cfg)
        metrics = compute_metrics(results, cfg)
        print_metrics(metrics, cfg)
        plot_signal_chain(results, cfg, save_path=args.output)


if __name__ == "__main__":
    main()
