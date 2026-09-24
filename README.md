# IKM Practice — ITIL 4

Timed practice quiz built from IKM past papers. Static site: open `index.html` or deploy the folder as-is.

## Sets
- **Set 1** (`data_set1.js`): merged from IKM_past_questions_2_3_1, KPM_Answered_Questions and KPM_Answered_Questions_clean. 48 source questions became 31 after deduplication and validation.
- To add Set 2: create `data_set2.js` with `"set": "set2"` on each question, add a `<script>` tag in `index.html`. The setup screen picks it up automatically.

## Questions
Most are "select all that apply" and are graded only on an exact match. Each has a hint (never reveals the answer) and an explanation. Tags: **V4 Aligned** (concept unchanged in ITIL 4) or **V4 Rewrite** (converted from ITIL v3; the explanation says what changed).

## Validation notes
The source documents contained AI-generated notes and several wrong or conflicting answer keys, so keys were re-derived rather than copied. Answers were checked against ITIL 4 / ITIL v3 practice descriptions from general knowledge, not against a purchased ITIL manual. Treat it as a study aid and cross-check anything doubtful.

Dropped (no ITIL 4 equivalent, unverifiable, or missing content): Q8 (figure missing), Q10, Q14, Q15, Q16, Q17, Q20, Q21, Q25, Q27, Q30, Q34, Q38, Q40, Q42, Q43, Q45.

`build/set1.py` regenerates `data_set1.js`.
