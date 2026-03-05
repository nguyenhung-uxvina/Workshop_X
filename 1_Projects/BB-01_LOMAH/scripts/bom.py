#!/usr/bin/env python3
"""
BB-01 LOMAH Bill of Materials Generator
=========================================
Danh sach linh kien cho 1 kenh BB-01 voi nguon cung ung Viet Nam.

Component list for 1 BB-01 channel with Vietnam market sourcing.
Prices in VND from Nhat Tao / Dien Tu Thanh markets.

Usage:
    python bom.py              # ASCII table output
    python bom.py --csv        # Export to CSV
    python bom.py --csv -o bom_export.csv  # Export to specific file
"""

import argparse
import csv
from dataclasses import dataclass
from typing import List


@dataclass
class Component:
    """Mot linh kien trong BOM."""

    subsystem: str       # He thong con (Piezo, ChargeAmp, Filter, ...)
    ref: str             # Ky hieu tham chieu (R1, C1, U1, ...)
    description: str     # Mo ta tieng Anh
    value: str           # Gia tri (100pF, 10MOhm, ...)
    package: str         # Kieu chan (0805, DIP-8, ...)
    part_number: str     # Ma linh kien
    quantity: int        # So luong
    unit_price_vnd: int  # Don gia VND
    source: str          # Noi mua
    import_required: bool  # Can nhap khau?
    notes: str = ""      # Ghi chu


# ---------------------------------------------------------------------------
# Du lieu BOM (BOM Data)
# ---------------------------------------------------------------------------
# Gia tri khop voi SignalChainConfig trong bb01_acoustic_sim.py

def get_bom() -> List[Component]:
    """Tra ve BOM day du cho 1 kenh BB-01."""
    return [
        # === Cam bien (Piezo Sensor) ===
        Component(
            subsystem="Piezo",
            ref="PZ1",
            description="PZT-5A disc 20mm x 1mm",
            value="150pC/N, 500pF",
            package="20mm disc",
            part_number="PZT-5A-20",
            quantity=1,
            unit_price_vnd=15000,
            source="Nhat Tao",
            import_required=False,
            notes="d33=150pC/N, Cp=500pF",
        ),
        Component(
            subsystem="Piezo",
            ref="J1",
            description="Piezo connector, 2-pin",
            value="-",
            package="JST-PH 2P",
            part_number="JST-PH-2",
            quantity=1,
            unit_price_vnd=1000,
            source="Nhat Tao",
            import_required=False,
        ),
        # === Bo khuech dai dien tich (Charge Amplifier) ===
        Component(
            subsystem="ChargeAmp",
            ref="U1",
            description="Op-amp, JFET input",
            value="-",
            package="DIP-8",
            part_number="TL072",
            quantity=1,
            unit_price_vnd=5000,
            source="Dien Tu Thanh",
            import_required=False,
            notes="GBW=3MHz, low input bias, dual supply +/-5V",
        ),
        Component(
            subsystem="ChargeAmp",
            ref="Cf1",
            description="Feedback capacitor, C0G/NP0",
            value="3.3nF",
            package="0805",
            part_number="C0G-3N3-50V",
            quantity=1,
            unit_price_vnd=500,
            source="Nhat Tao",
            import_required=False,
            notes="Charge amp feedback, C0G for stability. F1 fix: was 100pF",
        ),
        Component(
            subsystem="ChargeAmp",
            ref="Rf1",
            description="Feedback resistor, high value",
            value="10MOhm",
            package="0805",
            part_number="RC0805-10M",
            quantity=1,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
            notes="Low-freq pole at 4.8Hz (with 3.3nF Cf)",
        ),
        Component(
            subsystem="ChargeAmp",
            ref="R1",
            description="Input bias resistor",
            value="10MOhm",
            package="0805",
            part_number="RC0805-10M",
            quantity=1,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
            notes="Bias path for non-inverting input",
        ),
        Component(
            subsystem="ChargeAmp",
            ref="C1",
            description="Decoupling cap, supply",
            value="100nF",
            package="0805",
            part_number="X7R-100nF-25V",
            quantity=2,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
            notes="VCC/VEE decoupling for U1",
        ),
        # === Bo loc thong dai (Bandpass Filter) ===
        Component(
            subsystem="Filter",
            ref="U2",
            description="Op-amp, dual, Sallen-Key filter",
            value="-",
            package="DIP-8",
            part_number="TL072",
            quantity=1,
            unit_price_vnd=5000,
            source="Dien Tu Thanh",
            import_required=False,
            notes="One half for HPF, one for LPF. Dual supply +/-5V",
        ),
        Component(
            subsystem="Filter",
            ref="R2,R3",
            description="HPF resistors (2kHz cutoff)",
            value="8.2kOhm",
            package="0805",
            part_number="RC0805-8K2",
            quantity=2,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
            notes="Sallen-Key HPF, fc=2kHz",
        ),
        Component(
            subsystem="Filter",
            ref="C2,C3",
            description="HPF capacitors",
            value="10nF",
            package="0805",
            part_number="C0G-10nF-50V",
            quantity=2,
            unit_price_vnd=300,
            source="Nhat Tao",
            import_required=False,
            notes="C0G for filter accuracy",
        ),
        Component(
            subsystem="Filter",
            ref="R4,R5",
            description="LPF resistors (8kHz cutoff)",
            value="2kOhm",
            package="0805",
            part_number="RC0805-2K0",
            quantity=2,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
            notes="Sallen-Key LPF, fc=8kHz",
        ),
        Component(
            subsystem="Filter",
            ref="C4,C5",
            description="LPF capacitors",
            value="10nF",
            package="0805",
            part_number="C0G-10nF-50V",
            quantity=2,
            unit_price_vnd=300,
            source="Nhat Tao",
            import_required=False,
            notes="C0G for filter accuracy",
        ),
        # === Tang khuech dai (Gain Stage) ===
        Component(
            subsystem="Gain",
            ref="U3",
            description="Op-amp, gain stage",
            value="-",
            package="DIP-8",
            part_number="LM358",
            quantity=1,
            unit_price_vnd=3000,
            source="Dien Tu Thanh",
            import_required=False,
            notes="Non-inverting, gain=10x, single +5V supply, biased to 1.65V",
        ),
        Component(
            subsystem="Gain",
            ref="R6",
            description="Gain feedback resistor",
            value="9.1kOhm",
            package="0805",
            part_number="RC0805-9K1",
            quantity=1,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
            notes="Gain = 1 + R6/R7 = 10.1x",
        ),
        Component(
            subsystem="Gain",
            ref="R7",
            description="Gain ground resistor",
            value="1kOhm",
            package="0805",
            part_number="RC0805-1K0",
            quantity=1,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
        ),
        Component(
            subsystem="Gain",
            ref="C6",
            description="Decoupling cap, supply",
            value="100nF",
            package="0805",
            part_number="X7R-100nF-25V",
            quantity=1,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
        ),
        # === Mang thien ap (Bias Network) — F3 fix ===
        Component(
            subsystem="Bias",
            ref="R9",
            description="Bias divider high-side",
            value="10kOhm",
            package="0805",
            part_number="RC0805-10K",
            quantity=1,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
            notes="Vbias = 3.3V * R10/(R9+R10) = 1.65V",
        ),
        Component(
            subsystem="Bias",
            ref="R10",
            description="Bias divider low-side",
            value="10kOhm",
            package="0805",
            part_number="RC0805-10K",
            quantity=1,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
            notes="Matched pair with R9 for accurate 1.65V",
        ),
        Component(
            subsystem="Bias",
            ref="C15",
            description="Bias decoupling capacitor",
            value="100nF",
            package="0805",
            part_number="X7R-100nF-25V",
            quantity=1,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
            notes="Stabilizes Vbias node",
        ),
        # === Bao ve kep (Clamp/Protection) ===
        Component(
            subsystem="Clamp",
            ref="D1,D2",
            description="Schottky clamping diodes",
            value="-",
            package="SOD-323",
            part_number="BAT54S",
            quantity=2,
            unit_price_vnd=500,
            source="Nhat Tao",
            import_required=False,
            notes="Clamp to 0V and 3.3V rails",
        ),
        Component(
            subsystem="Clamp",
            ref="R8",
            description="Series limiting resistor",
            value="100Ohm",
            package="0805",
            part_number="RC0805-100R",
            quantity=1,
            unit_price_vnd=100,
            source="Nhat Tao",
            import_required=False,
            notes="Limits clamp diode current",
        ),
        # === ADC/MCU ===
        Component(
            subsystem="ADC/MCU",
            ref="U4",
            description="MCU with 12-bit ADC",
            value="-",
            package="LQFP-64",
            part_number="STM32F411CEU6",
            quantity=1,
            unit_price_vnd=65000,
            source="Dien Tu Thanh",
            import_required=True,
            notes="12-bit ADC, 200kSps, 3.3V, ARM Cortex-M4",
        ),
        Component(
            subsystem="ADC/MCU",
            ref="Y1",
            description="Crystal oscillator",
            value="8MHz",
            package="HC-49S",
            part_number="HC49S-8MHz",
            quantity=1,
            unit_price_vnd=2000,
            source="Nhat Tao",
            import_required=False,
        ),
        Component(
            subsystem="ADC/MCU",
            ref="C7,C8",
            description="Crystal load capacitors",
            value="20pF",
            package="0805",
            part_number="C0G-20pF-50V",
            quantity=2,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
        ),
        Component(
            subsystem="ADC/MCU",
            ref="C9-C12",
            description="MCU decoupling capacitors",
            value="100nF",
            package="0805",
            part_number="X7R-100nF-25V",
            quantity=4,
            unit_price_vnd=200,
            source="Nhat Tao",
            import_required=False,
        ),
        # === Nguon (Power) — F3 fix: dual supply for analog ===
        Component(
            subsystem="Power",
            ref="U5",
            description="+5V LDO for analog section",
            value="5.0V, 800mA",
            package="SOT-223",
            part_number="AMS1117-5.0",
            quantity=1,
            unit_price_vnd=2000,
            source="Nhat Tao",
            import_required=False,
            notes="Input 7-12V, +5V for TL072/LM358 analog",
        ),
        Component(
            subsystem="Power",
            ref="U6",
            description="3.3V LDO for MCU/ADC",
            value="3.3V, 300mA",
            package="SOT-223",
            part_number="AMS1117-3.3",
            quantity=1,
            unit_price_vnd=2000,
            source="Nhat Tao",
            import_required=False,
            notes="Input from +5V rail, output 3.3V for STM32",
        ),
        Component(
            subsystem="Power",
            ref="U7",
            description="Charge pump -5V inverter",
            value="-5V",
            package="DIP-8",
            part_number="ICL7660",
            quantity=1,
            unit_price_vnd=3000,
            source="Nhat Tao",
            import_required=False,
            notes="Converts +5V to -5V for TL072 negative rail",
        ),
        Component(
            subsystem="Power",
            ref="C13,C14",
            description="LDO I/O capacitors (5V)",
            value="10uF",
            package="0805",
            part_number="X5R-10uF-16V",
            quantity=2,
            unit_price_vnd=500,
            source="Nhat Tao",
            import_required=False,
            notes="Input/output caps for U5 (AMS1117-5.0)",
        ),
        Component(
            subsystem="Power",
            ref="C16,C17",
            description="LDO I/O capacitors (3.3V)",
            value="10uF",
            package="0805",
            part_number="X5R-10uF-16V",
            quantity=2,
            unit_price_vnd=500,
            source="Nhat Tao",
            import_required=False,
            notes="Input/output caps for U6 (AMS1117-3.3)",
        ),
        Component(
            subsystem="Power",
            ref="C18,C19",
            description="Charge pump capacitors",
            value="10uF",
            package="0805",
            part_number="X5R-10uF-16V",
            quantity=2,
            unit_price_vnd=500,
            source="Nhat Tao",
            import_required=False,
            notes="Flying cap + output cap for ICL7660",
        ),
    ]


# ---------------------------------------------------------------------------
# Hien thi (Display functions)
# ---------------------------------------------------------------------------

def print_ascii_table(bom: List[Component]):
    """In bang BOM dang ASCII."""

    # Header
    print("\n" + "=" * 110)
    print("  BB-01 LOMAH -- Bill of Materials (1 Channel)")
    print("=" * 110)

    # Tinh tong
    total_cost = sum(c.unit_price_vnd * c.quantity for c in bom)
    total_parts = sum(c.quantity for c in bom)
    import_parts = [c for c in bom if c.import_required]

    # In theo he thong con
    subsystems = []
    seen = set()
    for c in bom:
        if c.subsystem not in seen:
            subsystems.append(c.subsystem)
            seen.add(c.subsystem)

    header = (
        f"  {'Ref':<10} {'Description':<32} {'Value':<14} "
        f"{'Pkg':<10} {'Qty':>3} {'Unit(VND)':>10} {'Total(VND)':>10} {'Src':<14} {'Imp':>3}"
    )
    separator = "  " + "-" * 106

    for subsys in subsystems:
        parts = [c for c in bom if c.subsystem == subsys]
        subsys_cost = sum(c.unit_price_vnd * c.quantity for c in parts)

        print(f"\n  [{subsys}]  (subtotal: {subsys_cost:,} VND)")
        print(separator)
        print(header)
        print(separator)

        for c in parts:
            total = c.unit_price_vnd * c.quantity
            imp_flag = " !!" if c.import_required else ""
            print(
                f"  {c.ref:<10} {c.description:<32} {c.value:<14} "
                f"{c.package:<10} {c.quantity:>3} {c.unit_price_vnd:>10,} "
                f"{total:>10,} {c.source:<14}{imp_flag}"
            )

    # Tong ket
    print("\n" + "=" * 110)
    print(f"  TOTAL COMPONENTS:  {total_parts}")
    print(f"  TOTAL COST:        {total_cost:>10,} VND  (~${total_cost/25000:.2f} USD)")
    print(f"  IMPORT REQUIRED:   {len(import_parts)} component(s)")

    if import_parts:
        print("\n  [!!] Import-required components:")
        for c in import_parts:
            print(f"       - {c.ref}: {c.part_number} ({c.description})")

    print("=" * 110)


def export_csv(bom: List[Component], filename: str):
    """Xuat BOM ra file CSV."""

    with open(filename, "w", newline="", encoding="utf-8") as f:
        writer = csv.writer(f)
        writer.writerow([
            "Subsystem", "Ref", "Description", "Value", "Package",
            "Part Number", "Qty", "Unit Price (VND)", "Total (VND)",
            "Source", "Import Required", "Notes",
        ])
        for c in bom:
            writer.writerow([
                c.subsystem, c.ref, c.description, c.value, c.package,
                c.part_number, c.quantity, c.unit_price_vnd,
                c.unit_price_vnd * c.quantity,
                c.source, "Yes" if c.import_required else "No", c.notes,
            ])

    total = sum(c.unit_price_vnd * c.quantity for c in bom)
    print(f"\n  CSV exported to: {filename}")
    print(f"  {len(bom)} line items, total {total:,} VND")


# ---------------------------------------------------------------------------
# Cross-check voi simulation config
# ---------------------------------------------------------------------------

def print_crosscheck():
    """In bang doi chieu BOM <-> sim config."""

    print("\n" + "=" * 70)
    print("  BOM <-> Simulation Cross-Reference")
    print("=" * 70)
    checks = [
        ("Piezo d33",      "150 pC/N",   "piezo_d33 = 150e-12"),
        ("Piezo Cp",       "500 pF",     "piezo_capacitance = 500e-12"),
        ("Cf (ChargeAmp)", "3.3 nF",     "charge_amp_Cf = 3.3e-9"),
        ("Rf (ChargeAmp)", "10 MOhm",    "charge_amp_Rf = 10e6"),
        ("Analog supply",  "+/-5V",      "analog_supply = +5/-5"),
        ("Bias voltage",   "1.65V",      "bias_voltage = 1.65"),
        ("Bandpass",       "2-8 kHz",    "bp_low=2000, bp_high=8000"),
        ("Gain",           "10x",        "gain_factor = 10.0"),
        ("Clamp",          "0-3.3V",     "clamp_low=0, clamp_high=3.3"),
        ("ADC",            "12-bit/3.3V","adc_bits=12, adc_vref=3.3"),
        ("ADC rate",       "200 kSps",   "adc_sample_rate = 200000"),
    ]

    print(f"  {'Parameter':<20} {'BOM Value':<14} {'Sim Config':<30} {'Match':>5}")
    print("  " + "-" * 66)
    for name, bom_val, sim_val in checks:
        print(f"  {name:<20} {bom_val:<14} {sim_val:<30} {'OK':>5}")
    print("=" * 70)


# ---------------------------------------------------------------------------
# CLI
# ---------------------------------------------------------------------------

def main():
    parser = argparse.ArgumentParser(
        description="BB-01 LOMAH Bill of Materials Generator"
    )
    parser.add_argument(
        "--csv",
        action="store_true",
        help="Export BOM to CSV file",
    )
    parser.add_argument(
        "-o", "--output",
        type=str,
        default="bb01_bom.csv",
        help="CSV output filename (default: bb01_bom.csv)",
    )
    parser.add_argument(
        "--crosscheck",
        action="store_true",
        help="Print BOM vs simulation cross-reference",
    )
    args = parser.parse_args()

    bom = get_bom()

    print_ascii_table(bom)

    if args.crosscheck:
        print_crosscheck()

    if args.csv:
        export_csv(bom, args.output)


if __name__ == "__main__":
    main()
