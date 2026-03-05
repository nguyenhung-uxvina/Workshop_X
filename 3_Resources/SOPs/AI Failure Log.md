# AI Failure Log — Workshop X Delegation System

## Format: Date | Template | Output Type | Result | Failure Pattern | Fix Added to Template

| Date | Template | Output | Result | Root Cause | Template Update |
|------|----------|--------|--------|------------|-----------------|
| 2026-02-23 | A2 | hit_detector.py | Fixed | `EventType.MISS` defined but never assigned — only HIT/NOISE codepaths existed | Added M2 to CLAUDE.md §5; added `min_channels_miss` config field |
| 2026-02-23 | A2 | hit_detector.py | Fixed | `np.isnan()` check missed `np.inf` — inf input would permanently kill channel state | Added M1 to CLAUDE.md §5; added `np.isinf()` guard |
| 2026-02-23 | A2 | hit_detector.py | Fixed | `speed_of_sound_m_s()` modeled air propagation (~350 m/s) but contact sensors propagate through steel frame (~5000 m/s) | Added M3 to CLAUDE.md §5; renamed helpers to `_air_` suffix with WARNING docstrings |
| 2026-02-23 | A2 | scoring.py | Fixed | `duration = end - start` without clamp — NTP clock jump backward produces negative duration | Added M4 to CLAUDE.md §5; added `max(0.0, ...)` clamp |
