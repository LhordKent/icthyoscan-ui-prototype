---
version: 1
slug: "aligned-ui-js"
primary_target: "aligned-ui.js"
related_targets: ["app.js"]
---

# Surface brief: IcthyoScan screen interiors (Android A01–A13, S01–S02, web W01–W07)

Scope: the inside of every prototype screen. The gallery shell (sidebar, toolbar, phone frame, routes, screenshot mode) is fixed and out of scope.
Visitor mode: Operate. Audience: Bangus farmers at the pond (simulated); thesis panel via manuscript screenshots.
Constraints: light mode only; never claim diagnosis; no pricing; no out-of-scope features; UI only.

## Direction contract

THESIS: The app is set like the hand-painted price boards at a palengke fish stall: one large painted board states the answer, readable at arm's length in sun. It rejects the category default of pale-teal cards with icon tiles.

OWN-WORLD: Painted-white ground #FBFBF8 and ink #1A1A17. Chrome-yellow enamel is the board colour (primary surfaces and actions). Leaf green marks "kept/synced/accepted". Tomato appears only for "visible signs observed" and rejected images. Shapes are flat: square-ish 4px corners, 2px ink rules, no shadows, no gradients and no tinted icon tiles. Type: Archivo Black / Archivo Narrow-style condensed caps for board lettering, and Archivo for body.

STORY: The farmer sees the state of their fish at a glance, reads what was seen in plain words, is told it is preliminary, then takes the next step.

FIRST VIEWPORT: For A08 Result, the photo is full width, then a full-width painted board (yellow, or tomato edge on the warning state) carrying the result in heavy condensed caps plus a count of 5 supported signs. The signs list sits below as ruled rows, the limitation sits in a ruled ink box, and the primary ink button is at the bottom. The other screens follow the same pattern: one board per screen states its single most important thing.

FORM: palengke hand-painted price board; candidate 3 of 7 on the ordered list; seed:dbde3475f33d91d2. Raises kept: three values only (ink, ground, one enamel per state; from centre-rail reference setting); the farmer's photos are the richest colour (from the streaming catalog wall).

SIGNATURE MOVE: the "board", a painted status slab with stencil-weight condensed caps used for the result, dashboard status, the sync state and the plan name.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
