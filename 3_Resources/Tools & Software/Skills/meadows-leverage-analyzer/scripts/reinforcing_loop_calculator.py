#!/usr/bin/env python3
"""
Reinforcing Loop (L7) Calculator
Analyzes exponential growth/decay dynamics and feedback loop strength
"""

import math
from typing import Tuple, List

def calculate_doubling_time(growth_rate: float) -> float:
    """
    Calculate doubling time for exponential growth
    
    Args:
        growth_rate: Growth rate per time period (e.g., 0.1 = 10% growth)
    
    Returns:
        Time periods to double
    
    Formula: t_double = ln(2) / ln(1 + r)
    """
    if growth_rate <= -1:
        return float('inf')  # Decay to zero
    return math.log(2) / math.log(1 + growth_rate)


def calculate_half_life(decay_rate: float) -> float:
    """
    Calculate half-life for exponential decay
    
    Args:
        decay_rate: Decay rate per time period (negative value)
    
    Returns:
        Time periods to halve
    """
    if decay_rate >= 0:
        return float('inf')  # Growth, not decay
    return math.log(0.5) / math.log(1 + decay_rate)


def simulate_reinforcing_loop(
    initial_value: float,
    gain: float,
    periods: int
) -> List[Tuple[int, float]]:
    """
    Simulate reinforcing loop: dX/dt = k*X
    
    Args:
        initial_value: Starting value
        gain: Feedback strength (k in equation)
        periods: Number of time periods to simulate
    
    Returns:
        List of (time, value) tuples
    """
    results = [(0, initial_value)]
    current = initial_value
    
    for t in range(1, periods + 1):
        current = current * (1 + gain)
        results.append((t, current))
    
    return results


def simulate_arms_race(
    a_initial: float,
    b_initial: float,
    response_rate: float,
    periods: int
) -> List[Tuple[int, float, float]]:
    """
    Simulate two-party arms race
    
    Model:
        A(t+1) = A(t) + response_rate * B(t)
        B(t+1) = B(t) + response_rate * A(t)
    
    Args:
        a_initial: Initial spending by party A
        b_initial: Initial spending by party B
        response_rate: How aggressively each responds to other
        periods: Number of time periods
    
    Returns:
        List of (time, a_spending, b_spending) tuples
    """
    results = [(0, a_initial, b_initial)]
    a_current = a_initial
    b_current = b_initial
    
    for t in range(1, periods + 1):
        a_next = a_current + response_rate * b_current
        b_next = b_current + response_rate * a_current
        results.append((t, a_next, b_next))
        a_current = a_next
        b_current = b_next
    
    return results


def calculate_loop_gain(
    initial: float,
    final: float,
    periods: int
) -> float:
    """
    Calculate effective gain from observed behavior
    
    Args:
        initial: Starting value
        final: Ending value
        periods: Number of periods
    
    Returns:
        Gain parameter that produces observed growth
    """
    if initial <= 0 or final <= 0:
        raise ValueError("Values must be positive")
    
    return (final / initial) ** (1/periods) - 1


def technical_debt_spiral(
    initial_debt: float,
    initial_velocity: float,
    pressure_response: float,
    periods: int
) -> List[Tuple[int, float, float, float]]:
    """
    Simulate technical debt death spiral
    
    Model:
        Debt(t+1) = Debt(t) + Shortcuts(t)
        Velocity(t) = Base_Velocity / (1 + 0.1 * Debt(t))
        Pressure(t) = Target_Velocity - Velocity(t)
        Shortcuts(t) = pressure_response * Pressure(t)
    
    Args:
        initial_debt: Starting technical debt (arbitrary units)
        initial_velocity: Starting development velocity
        pressure_response: How much shortcuts taken when under pressure
        periods: Number of time periods
    
    Returns:
        List of (time, debt, velocity, shortcuts) tuples
    """
    results = []
    debt = initial_debt
    base_velocity = initial_velocity
    target_velocity = initial_velocity
    
    for t in range(periods + 1):
        velocity = base_velocity / (1 + 0.1 * debt)
        pressure = max(0, target_velocity - velocity)
        shortcuts = pressure_response * pressure
        
        results.append((t, debt, velocity, shortcuts))
        
        # Update for next period
        debt = debt + shortcuts
    
    return results


def calculate_break_even_time(
    current_rate: float,
    improved_rate: float,
    improvement_cost: float
) -> float:
    """
    Calculate when improvement investment pays off
    Used for deciding whether to slow reinforcing loop
    
    Args:
        current_rate: Current growth/problem rate
        improved_rate: Rate after intervention
        improvement_cost: One-time cost of intervention
    
    Returns:
        Time periods until break-even
    """
    rate_difference = current_rate - improved_rate
    if rate_difference <= 0:
        return float('inf')  # Never breaks even
    
    return improvement_cost / rate_difference


def intervention_effectiveness(
    before_gain: float,
    after_gain: float,
    periods: int
) -> float:
    """
    Calculate effectiveness of intervention on reinforcing loop
    
    Args:
        before_gain: Loop gain before intervention
        after_gain: Loop gain after intervention
        periods: Time horizon for comparison
    
    Returns:
        Percentage reduction in final value
    """
    before_final = (1 + before_gain) ** periods
    after_final = (1 + after_gain) ** periods
    
    return (before_final - after_final) / before_final * 100


if __name__ == "__main__":
    print("=== Reinforcing Loop Calculator ===\n")
    
    # Example 1: Arms Race
    print("Example 1: Arms Race Dynamics")
    print("-" * 50)
    arms_race = simulate_arms_race(
        a_initial=100,
        b_initial=100,
        response_rate=0.15,
        periods=10
    )
    print("Year | Nation A | Nation B | Total")
    for t, a, b in arms_race[:6]:  # First 6 years
        print(f"{t:4d} | ${a:7.0f}M | ${b:7.0f}M | ${a+b:7.0f}M")
    print(f"...  |    ...   |    ...   |    ...")
    t, a, b = arms_race[-1]
    print(f"{t:4d} | ${a:7.0f}M | ${b:7.0f}M | ${a+b:7.0f}M")
    print(f"\nTotal military spending increased {((a+b)/200 - 1)*100:.0f}% in {t} years")
    print(f"Intervention: Reduce response_rate from 0.15 to 0.05")
    
    slow_race = simulate_arms_race(100, 100, 0.05, 10)
    _, a_slow, b_slow = slow_race[-1]
    reduction = (1 - (a_slow + b_slow)/(a + b)) * 100
    print(f"Result: {reduction:.0f}% reduction in final spending\n")
    
    # Example 2: Technical Debt
    print("\nExample 2: Technical Debt Spiral")
    print("-" * 50)
    debt_spiral = technical_debt_spiral(
        initial_debt=10,
        initial_velocity=10,
        pressure_response=0.3,
        periods=12
    )
    print("Month | Debt | Velocity | Shortcuts")
    for t, debt, velocity, shortcuts in debt_spiral[::3]:  # Every 3 months
        print(f"{t:5d} | {debt:4.0f} | {velocity:8.1f} | {shortcuts:9.1f}")
    
    print(f"\nInterpretation:")
    print(f"- Initial velocity: 10 features/month")
    t, debt, velocity, _ = debt_spiral[-1]
    print(f"- Final velocity: {velocity:.1f} features/month ({(1-velocity/10)*100:.0f}% slower)")
    print(f"- Technical debt increased from 10 to {debt:.0f}")
    print(f"- This is a vicious reinforcing loop (L7)")
    print(f"\nIntervention: Break the loop with circuit breaker")
    print(f"- If debt > 50, stop features, pay down debt")
    print(f"- If velocity < 7, mandatory tech debt sprint")
    
    # Example 3: Doubling Time
    print("\n\nExample 3: Doubling Time Analysis")
    print("-" * 50)
    growth_rates = [0.05, 0.10, 0.15, 0.20]
    print("Growth Rate | Doubling Time | 10-Period Growth")
    for rate in growth_rates:
        doubling = calculate_doubling_time(rate)
        final = (1 + rate) ** 10
        print(f"{rate:11.0%} | {doubling:13.1f} | {final:16.2f}x")
    
    print(f"\nKey Insight: Small differences in growth rate")
    print(f"create large differences over time (exponential)")
    print(f"L7 intervention: Reduce growth rate early")
