#!/usr/bin/env python3
"""
Balancing Loop Tuner (L8)

Calculate how balancing (negative feedback) loops respond to disturbances.
Helps tune correction strength and identify if loop is too weak or too strong.

Usage:
    python balancing_loop_tuner.py --target 1000 --current 1200 --strength 0.5 --delay 2
    
    Or interactively:
    python balancing_loop_tuner.py
"""

import argparse
import sys
from typing import List, Tuple
import math


def simulate_balancing_loop(
    target: float,
    initial_value: float,
    correction_strength: float,
    delay_periods: int,
    max_periods: int = 50,
    external_disturbance: float = 0.0
) -> List[Tuple[int, float, float]]:
    """
    Simulate a balancing feedback loop.
    
    Args:
        target: Goal value the system seeks
        initial_value: Starting value
        correction_strength: How aggressively system corrects (0-1)
        delay_periods: Time between measurement and correction
        max_periods: Maximum simulation periods
        external_disturbance: Random disturbance per period
        
    Returns:
        List of (period, value, correction) tuples
    """
    results = [(0, initial_value, 0.0)]
    
    # Queue to handle delays
    correction_queue = [0.0] * delay_periods
    current_value = initial_value
    
    for period in range(1, max_periods + 1):
        # Calculate error (gap from target)
        error = target - current_value
        
        # Proportional correction based on error and strength
        correction_signal = error * correction_strength
        
        # Add to delay queue
        correction_queue.append(correction_signal)
        
        # Apply delayed correction
        applied_correction = correction_queue.pop(0)
        
        # Update value
        current_value = current_value + applied_correction + external_disturbance
        
        results.append((period, current_value, applied_correction))
        
        # Check convergence
        if abs(current_value - target) < 0.01 * abs(target):
            break
    
    return results


def analyze_convergence(results: List[Tuple[int, float, float]], target: float) -> dict:
    """Analyze how well the system converges to target."""
    if len(results) < 2:
        return {}
    
    periods_to_converge = None
    final_value = results[-1][1]
    final_error_pct = abs(final_value - target) / abs(target) * 100
    
    # Find when system gets within 5% of target and stays there
    for i, (period, value, _) in enumerate(results):
        if abs(value - target) <= 0.05 * abs(target):
            # Check if it stays there for next 5 periods (if available)
            stable = True
            for j in range(i, min(i + 5, len(results))):
                if abs(results[j][1] - target) > 0.05 * abs(target):
                    stable = False
                    break
            if stable:
                periods_to_converge = period
                break
    
    # Detect oscillation
    oscillates = False
    if len(results) > 3:
        # Check if value crosses target multiple times
        crosses = 0
        for i in range(1, len(results)):
            prev_sign = 1 if results[i-1][1] >= target else -1
            curr_sign = 1 if results[i][1] >= target else -1
            if prev_sign != curr_sign:
                crosses += 1
        oscillates = crosses > 2
    
    # Calculate overshoot
    max_value = max(r[1] for r in results)
    min_value = min(r[1] for r in results)
    initial_value = results[0][1]
    
    if initial_value < target:
        overshoot_pct = (max_value - target) / (target - initial_value) * 100 if target != initial_value else 0
    else:
        overshoot_pct = (target - min_value) / (initial_value - target) * 100 if target != initial_value else 0
    
    return {
        'converged': periods_to_converge is not None,
        'periods_to_converge': periods_to_converge,
        'final_error_pct': final_error_pct,
        'oscillates': oscillates,
        'overshoot_pct': abs(overshoot_pct)
    }


def classify_loop_performance(analysis: dict, correction_strength: float, delay: int) -> str:
    """Classify the balancing loop's performance."""
    if not analysis.get('converged'):
        return "DIVERGENT - Loop too weak or delay too long, system doesn't stabilize"
    
    periods = analysis['periods_to_converge']
    oscillates = analysis['oscillates']
    overshoot = analysis['overshoot_pct']
    
    if oscillates and overshoot > 50:
        return "POOR - Too strong correction + delay = wild oscillation"
    elif oscillates and overshoot > 20:
        return "MARGINAL - Oscillates before settling, tune correction strength"
    elif periods and periods < 5 * delay:
        return "EXCELLENT - Fast convergence without oscillation"
    elif periods and periods < 10 * delay:
        return "GOOD - Reasonable convergence time"
    elif periods and periods < 20 * delay:
        return "ACCEPTABLE - Slow but stable convergence"
    else:
        return "WEAK - Very slow convergence, strengthen correction"


def format_results(results: List[Tuple[int, float, float]], target: float) -> str:
    """Format simulation results."""
    output = []
    output.append("\nPeriod | Value     | Correction | Error    | % Error")
    output.append("-------|-----------|------------|----------|--------")
    
    for period, value, correction in results[:min(30, len(results))]:
        error = value - target
        error_pct = (error / target) * 100 if target != 0 else 0
        output.append(
            f"{period:6d} | {value:9,.2f} | {correction:10,.2f} | {error:8,.2f} | {error_pct:7.1f}%"
        )
    
    if len(results) > 30:
        output.append(f"... ({len(results) - 30} more periods)")
    
    return "\n".join(output)


def recommend_tuning(
    correction_strength: float,
    delay: int,
    analysis: dict
) -> List[str]:
    """Provide tuning recommendations."""
    recommendations = []
    
    if not analysis.get('converged'):
        recommendations.append("❌ System doesn't converge - CRITICAL ISSUE")
        recommendations.append("   → Increase correction strength")
        recommendations.append("   → Reduce delay if possible (L9 intervention)")
        recommendations.append("   → Check if disturbances are too large")
        return recommendations
    
    oscillates = analysis['oscillates']
    overshoot = analysis['overshoot_pct']
    periods = analysis['periods_to_converge']
    
    if oscillates and overshoot > 50:
        recommendations.append("⚠️  Wild oscillation detected")
        recommendations.append(f"   → Reduce correction strength from {correction_strength:.2f} to {correction_strength * 0.5:.2f}")
        recommendations.append(f"   → Or reduce delay from {delay} to {delay // 2}")
    
    elif oscillates and overshoot > 20:
        recommendations.append("⚠️  Noticeable oscillation")
        recommendations.append(f"   → Slightly reduce correction strength to {correction_strength * 0.8:.2f}")
    
    elif periods and periods > 20 * delay:
        recommendations.append("⚠️  Very slow convergence")
        recommendations.append(f"   → Increase correction strength from {correction_strength:.2f} to {correction_strength * 1.5:.2f}")
        recommendations.append("   → Verify balancing loop isn't being overwhelmed by reinforcing loop (L7)")
    
    elif periods and periods < 5 * delay:
        recommendations.append("✅ Well-tuned balancing loop")
        recommendations.append("   No changes needed")
    
    else:
        recommendations.append("✅ Acceptable performance")
        recommendations.append("   Minor optimization possible but not critical")
    
    # General advice
    recommendations.append("")
    recommendations.append("GENERAL PRINCIPLES:")
    recommendations.append("  • Correction strength: 0.2-0.8 typical range")
    recommendations.append("  • Higher strength = faster but more overshoot")
    recommendations.append("  • Lower strength = slower but more stable")
    recommendations.append("  • Delay amplifies oscillation - reduce if possible (L9)")
    
    return recommendations


def interactive_mode():
    """Run calculator in interactive mode."""
    print("=" * 60)
    print("Balancing Loop Tuner (L8)")
    print("=" * 60)
    print("\nThis simulates how well a balancing loop corrects deviations.")
    print("Examples:")
    print("  - Inventory control (target stock level)")
    print("  - Code review quality (maintain standards)")
    print("  - Manufacturing quality (error correction)")
    print("  - Project schedule (get back on track)")
    print()
    
    try:
        target = float(input("Target value (e.g., 1000): "))
        current = float(input("Current value (e.g., 1200 if 20% over): "))
        strength = float(input("Correction strength 0-1 (e.g., 0.5 for moderate): "))
        delay = int(input("Delay periods (e.g., 2): "))
        
        # Simulate
        results = simulate_balancing_loop(target, current, strength, delay)
        analysis = analyze_convergence(results, target)
        performance = classify_loop_performance(analysis, strength, delay)
        recommendations = recommend_tuning(strength, delay, analysis)
        
        # Display
        print(format_results(results, target))
        print()
        print("=" * 60)
        print("ANALYSIS")
        print("=" * 60)
        print(f"Performance: {performance}")
        if analysis.get('converged'):
            print(f"Converges in: {analysis['periods_to_converge']} periods")
            print(f"Final error: {analysis['final_error_pct']:.2f}%")
            print(f"Overshoot: {analysis['overshoot_pct']:.1f}%")
            print(f"Oscillates: {'Yes' if analysis['oscillates'] else 'No'}")
        print()
        print("RECOMMENDATIONS:")
        for rec in recommendations:
            print(rec)
        
    except (ValueError, KeyboardInterrupt):
        print("\nInvalid input or cancelled.")
        sys.exit(1)


def main():
    parser = argparse.ArgumentParser(
        description="Tune balancing feedback loops (L8)",
        formatter_class=argparse.RawDescriptionHelpFormatter,
        epilog="""
Examples:
  # Inventory too high: target 1000, current 1200, moderate correction
  python balancing_loop_tuner.py --target 1000 --current 1200 --strength 0.5 --delay 2
  
  # Bug rate too high: target 20, current 50, aggressive correction
  python balancing_loop_tuner.py --target 20 --current 50 --strength 0.8 --delay 1
  
  # Schedule behind: target 100% progress, current 70%, slow correction
  python balancing_loop_tuner.py --target 100 --current 70 --strength 0.3 --delay 5
        """
    )
    
    parser.add_argument('--target', type=float, help='Target value (goal)')
    parser.add_argument('--current', type=float, help='Current value')
    parser.add_argument('--strength', type=float, help='Correction strength (0-1)')
    parser.add_argument('--delay', type=int, help='Delay periods')
    parser.add_argument('--disturbance', type=float, default=0.0,
                       help='External disturbance per period')
    
    args = parser.parse_args()
    
    if not all([args.target, args.current, args.strength, args.delay]):
        interactive_mode()
    else:
        results = simulate_balancing_loop(
            args.target, args.current, args.strength, args.delay,
            external_disturbance=args.disturbance
        )
        analysis = analyze_convergence(results, args.target)
        performance = classify_loop_performance(analysis, args.strength, args.delay)
        recommendations = recommend_tuning(args.strength, args.delay, analysis)
        
        print(format_results(results, args.target))
        print()
        print(f"Performance: {performance}")
        if analysis.get('converged'):
            print(f"Converges in: {analysis['periods_to_converge']} periods")
        print()
        for rec in recommendations:
            print(rec)


if __name__ == "__main__":
    main()
