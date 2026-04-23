# Meadows Leverage Points Analyzer - Quick Start

## What This Skill Does

Analyzes any system description and identifies Donella Meadows' 12 leverage points (L1-L12), ranking them by effectiveness and providing concrete intervention recommendations.

## Installation

1. Copy the `meadows-leverage-analyzer` folder to your Claude skills directory
2. The skill will automatically trigger when you ask Claude to analyze systems

## Testing the Skill

### Test Case 1: Simple Manufacturing Problem
```
Claude, analyze this system:

Our small defense contractor produces UAV components. We have one CNC machine 
that's our bottleneck - it's always busy while other stations wait. We're 
thinking of buying a second CNC machine for $200K. Should we?
```

**Expected Output**: Claude should identify this as L10 (physical structure) intervention - low leverage. Should recommend checking L3 (goal alignment), L5 (scheduling rules), and L6 (information flow) first before capital investment.

### Test Case 2: Policy Resistance
```
Analyze this system:

We implemented a "zero defects" policy requiring 100% inspection. Quality 
improved initially, but now workers are gaming the system - they slow down 
production so much that fewer units get inspected. Management keeps adding 
more inspectors, which makes the problem worse.
```

**Expected Output**: Should identify "Fixes That Fail" archetype, detect L12 (adding inspectors) as low leverage, recommend L3 (goal misalignment), L5 (rules creating wrong incentives), and L2 (paradigm about quality vs speed).

### Test Case 3: Information Flow Problem
```
Find the leverage points in this:

Our engineering team keeps repeating the same design mistakes across projects. 
We have a lessons-learned database that no one uses. Training hasn't helped. 
Engineers say they don't have time to check the database during design work.
```

**Expected Output**: Should identify L6 (information flow disconnect), L5 (rules not incentivizing knowledge use), L2 (paradigm that "experienced engineers don't need checklists"). Should recommend integrating lessons into workflow, not just maintaining separate database.

## Skill Structure

```
meadows-leverage-analyzer/
└── SKILL.md (main skill file with complete instructions)
```

## Key Features

1. **4-Step Analysis Workflow**:
   - System Mapping (identify stocks, flows, goals)
   - Leverage Point Detection (find L1-L12 present)
   - Ranking & Prioritization (effectiveness + feasibility)
   - Intervention Recommendations (specific actions)

2. **Pattern Recognition**: Automatically detects common system archetypes:
   - Fixes That Fail
   - Shifting the Burden
   - Seeking Wrong Goal

3. **Integration**: References your project knowledge files for deeper theory when needed

4. **Practical Output**: Concrete interventions, not abstract advice

## How It Works

The skill triggers when users:
- Ask to "analyze this system"
- Request "leverage points"
- Describe a problem with multiple failed solutions
- Ask "where should I intervene?"
- Mention "unintended consequences"

Claude will automatically:
1. Map the system (stocks, flows, feedback loops)
2. Detect which leverage points (L1-L12) are present
3. Rank by effectiveness (L1 most powerful → L12 least)
4. Recommend top 3-5 interventions with specific actions

## Expected Behavior

✅ **Good**: Specific recommendations like "Change performance reviews to reward error prevention (L5) rather than speed"

✅ **Good**: Clear ranking showing why L3 (goal change) beats L12 (parameter tweak)

✅ **Good**: Warnings about unintended consequences and resistance points

❌ **Bad**: Vague advice like "improve communication" without linking to specific leverage point

❌ **Bad**: Only identifying low-leverage points (L10-L12) when higher ones available

## Iteration Ideas

After testing the basic version, you might want to add:
1. **References file**: Detailed examples for each leverage point type
2. **Scripts**: System dynamics calculation tools for L7-L9 quantification
3. **Templates**: Pre-filled analysis formats for common system types
4. **Decision trees**: Visual guides for leverage point selection

## Questions to Validate

- Does Claude correctly identify the leverage point hierarchy?
- Are recommendations specific enough to act on?
- Does it catch "Fixes That Fail" and other archetypes?
- Does it integrate with your project knowledge files?
- Does it avoid just recommending parameter tweaks (L12)?

## Next Steps

1. Test with the three test cases above
2. Try it on a real problem from your work
3. Share feedback on what works/what doesn't
4. Iterate based on actual usage patterns
