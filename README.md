# IKM Practice — ITIL 4

Timed practice quiz built from IKM past papers. Static site: open `index.html` or deploy the folder as-is.

## Sets
- **Set 1** (`data_set1.js`): merged from IKM_past_questions_2_3_1, KPM_Answered_Questions and KPM_Answered_Questions_clean. 48 source questions became 31 after deduplication and validation.
- **Set 2** (`data_set2.js`): from IKM_ChatGPT_Generated.docx (30 Qs, AI-generated, its own answer key). 29 kept after validation.
- **Set 3** (`data_set3.js`): from IKM_PRACTICE_QUESTIONS___1_.docx (100 Qs, AI-generated, its own answer-key section). 54 kept after validation.
- To add Set 4+: create `data_setN.js` with `"set": "setN"` on each question, add a `<script>` tag in `index.html`. The setup screen picks it up automatically.

## Set 2 & 3 validation notes
Both files were AI-generated (one explicitly named "ChatGPT_Generated"), so answer keys were checked rather than trusted, and both were checked against each other and against Set 1 for overlap. Combined, 130 source questions across the two files were reduced to 83 kept:
- ~30 were dropped for being near-duplicates of a cleaner version elsewhere in the same two files, too vague to grade fairly, referencing an option that never existed (one question's option A was blank), or resting on ITIL v3 concepts with no defensible ITIL 4 mapping (Service Design, Service Design Package).
- 5 more (all from Set 3's source file) turned out to be near-identical to questions already in Set 1 and were dropped from Set 3 rather than kept as a duplicate.
- A handful of answer keys were corrected, most notably: "Technical management practices" wrongly included capacity, availability and service request management, which are all *service* management practices in ITIL 4 — only deployment management belongs. "Four dimensions of service management" offered "Products and services" as if it were one of the four (it isn't), alongside two real dimensions that were never named as options. An "essential elements of change control" question listed "change denial" as essential while omitting "change approval". A CAB (Change Advisory Board) question is kept as asked but flagged: ITIL 4 uses the broader term "change authority" instead of mandating a CAB.

## Questions
Most are "select all that apply" and are graded only on an exact match. Each has a hint (never reveals the answer) and an explanation. Tags: **V4 Aligned** (concept unchanged in ITIL 4) or **V4 Rewrite** (converted from ITIL v3; the explanation says what changed).

## Validation notes
The source documents contained AI-generated notes and several wrong or conflicting answer keys, so keys were re-derived rather than copied. Answers were checked against ITIL 4 / ITIL v3 practice descriptions from general knowledge, not against a purchased ITIL manual. Treat it as a study aid and cross-check anything doubtful.

Dropped (no ITIL 4 equivalent, unverifiable, or missing content): Q8 (figure missing), Q10, Q14, Q15, Q16, Q17, Q20, Q21, Q25, Q27, Q30, Q34, Q38, Q40, Q42, Q43, Q45.

`build/set1.py` regenerates `data_set1.js`.
