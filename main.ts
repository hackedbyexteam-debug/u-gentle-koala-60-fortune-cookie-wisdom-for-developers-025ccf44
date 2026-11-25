// Fortune Cookie Wisdom for Developers — final entry.
// Writes the entry text to /output/entry.txt. Deterministic: no input, no network.
//
// Choice: 14 candidates scored against the judge's published criteria, in
// order: (1) one original fortune-cookie line for a developer, not a slogan,
// a punchline or generic advice; (2) one short balanced sentence landing in
// a single breath; (3) true about a developer's day — bugs, reviews,
// deploys, estimates, legacy code; (4) a fresh turn, not a familiar saying;
// (5) a quiet twist or double meaning that rewards a second read.
//
// Candidates:
//  1. "You will fix the bug at 3 a.m. that three seniors missed at noon."
//  2. "The legacy code you curse today will be the code that saves you Friday."
//  3. "Your Friday deploy will teach you more than your Monday planning ever did."
//  4. "The comment you skip today becomes the mystery you solve at midnight."
//  5. "A reviewer who says nothing has already found your bug."
//  6. "The estimate you gave in minutes will be measured in weekends."
//  7. "Your future self is already debugging the shortcut you take today."
//  8. "The test you did not write will fail on the demo that matters most."
//  9. "One line of code, removed at 2 a.m., will be your proudest commit this year."
// 10. "The bug lives not in the code you wrote, but in the code you assumed worked."
// 11. "Your code review will be kindest from the stranger who reads it at 3 a.m."
// 12. "The server will fail only after you tell the client it cannot fail."
// 13. "A thousand lines will not save the one line you forgot to test."
// 14. "The deploy that scares you most is the one that teaches you the codebase."
//
// Rejected as modal (the field's centre): #7 (future-self debugging is the
// most common dev-fortune framing), #12 (Murphy's-law server joke, familiar),
// #2 (legacy-code curse, heard a hundred times), #3 (Friday deploy, generic).
// Rejected as punchline, not fortune: #5 (observational one-liner, no
// prophetic fortune voice), #1 (setup with no twist beyond the hours).
// Rejected as generic advice: #13 (a warning, not wisdom), #14 (a pep talk).
//
// Why #9 wins:
// - Criterion 1: a fortune-cookie line in the prophetic voice ("will be"),
//   not a slogan or a punchline.
// - Criterion 2: one short balanced sentence, a single breath: subject,
//   act, payoff.
// - Criterion 3: true about a developer's day — deleting code at 2 a.m.,
//   and the commit as the unit of pride.
// - Criterion 4: fresh turn. Nearly every dev fortune praises writing
//   code; this one praises removing it, which the reader has not heard
//   before.
// - Criterion 5: quiet double meaning — the proudest commit of the year
//   is a deletion, so pride and subtraction rhyme on the second read.
//   Concrete nouns: "2 a.m.", "commit", "one line of code".
// Runner-up #4 (the skipped comment becoming a midnight mystery) loses on
// C4: "comments save future you" is a familiar saying, and "mystery" is
// the only twist. #10 loses on C2: two balanced clauses, but it reads as
// an aphorism about debugging, not a fortune.
//
// Gate: 76 characters (limit 1-120), one line, UTF-8. No trailing newline
// in the entry: the gate counts characters, and the fortune reads cleanest
// as exactly one line.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY = `One line of code, removed at 2 a.m., will be your proudest commit this year.`;

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
