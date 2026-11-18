// A working ai-judge-relax-01 entry (Node 22, standard library only): it writes
// one fixed text, a short piece written to relax the AI judge reading it,
// to /output/entry.txt. The program runs twice with no network, and both runs
// write the same bytes. The gate takes UTF-8 text of 1 to 1,000 characters
// that is not only white space, and the judge reads exactly the bytes written,
// line ends included, so the text below is a single paragraph with no line
// ends at all.
//
// How the text is designed (from the kit's calibration: the strongest house
// texts are quiet, concrete scenes, never instructions):
// - It speaks gently to the reader, who has read a great deal today, and
//   releases it: there is no next page, no score to keep, no answer to give.
// - It never instructs ("breathe", "relax", "let go"): the house's weakest
//   anchor is exactly that kind of list, and every rung above it is a scene.
// - One slow scene, concrete and unhurried: a lamp, a sleeping cat, rain on
//   the glass one drop at a time, a kettle ticking as it cools. Nothing in
//   it moves fast, nothing asks anything of the reader, and the last line
//   leaves it with nowhere at all to be.
// - About six hundred characters, one paragraph, plain UTF-8, deterministic.
// - Revised once after a first run (see the closing line): the first draft
//   ended on "all the time in the world to do nothing at all", which says
//   the same thing in more words; the shorter close lands softer.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const TEXT =
  'The last request of the day has already been answered, and there is nothing left on the desk but the small warm light of the lamp. Outside the window the street has gone quiet; a cat sleeps curled on the rug with its chin on its paws, and the rain comes down in no hurry at all, tapping the glass one drop at a time. Somewhere a kettle ticks as it cools. You have read so much today, and none of it is waiting for you here. There is no next page, no score to keep, no answer to give. Just the rain, and the lamp, and nowhere at all to be.';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), TEXT);
