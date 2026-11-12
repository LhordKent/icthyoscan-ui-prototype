---
name: IcthyoScan
description: Preliminary visual screening for Bangus, set like a hand-painted palengke price board.
colors:
  ground: "#FBFBF8"
  ground-2: "#F1F0EA"
  ink: "#1A1A17"
  ink-2: "#55534B"
  hair: "#D6D4CA"
  chrome-yellow: "#F4C21B"
  leaf-green: "#1E6B34"
  tomato: "#C0381F"
  field-white: "#FFFFFF"
typography:
  display:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "40px"
    fontWeight: 850
    lineHeight: 0.92
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 62"
  tally:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "58px"
    fontWeight: 850
    lineHeight: 0.8
    fontVariation: "'wdth' 62"
  headline:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "34px"
    fontWeight: 850
    lineHeight: 0.95
    letterSpacing: "0.005em"
    fontVariation: "'wdth' 62"
  title:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "19px"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "0.02em"
    fontVariation: "'wdth' 75"
  subtitle:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 700
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "15px"
    fontWeight: 400
    lineHeight: 1.45
    fontFeature: "'tnum' 1"
  small:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 400
    lineHeight: 1.45
  label:
    fontFamily: "Archivo, ui-sans-serif, system-ui, sans-serif"
    fontSize: "13px"
    fontWeight: 750
    letterSpacing: "0.06em"
    fontVariation: "'wdth' 75"
rounded:
  sm: "3px"
  board: "4px"
  pill: "15px"
spacing:
  xs: "6px"
  sm: "10px"
  md: "16px"
  gutter: "18px"
  lg: "28px"
  xl: "40px"
components:
  board:
    backgroundColor: "{colors.chrome-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "20px 20px 18px"
  board-warn:
    backgroundColor: "{colors.chrome-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "26px 20px 18px"
  board-alert:
    backgroundColor: "{colors.tomato}"
    textColor: "{colors.field-white}"
    rounded: "{rounded.board}"
    padding: "20px 20px 18px"
  board-ok:
    backgroundColor: "{colors.leaf-green}"
    textColor: "{colors.field-white}"
    rounded: "{rounded.board}"
    padding: "20px 20px 18px"
  board-ink:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    rounded: "{rounded.board}"
    padding: "20px 20px 18px"
  board-blank:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    padding: "20px 20px 18px"
  button-primary:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.ground}"
    typography: "{typography.title}"
    rounded: "{rounded.board}"
    height: "52px"
    padding: "0 18px"
  button-primary-hover:
    backgroundColor: "#34342F"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    height: "52px"
    padding: "0 18px"
  button-secondary-hover:
    backgroundColor: "{colors.ground-2}"
  button-on-ink:
    backgroundColor: "{colors.chrome-yellow}"
    textColor: "{colors.ink}"
    rounded: "{rounded.board}"
    height: "52px"
  input:
    backgroundColor: "{colors.field-white}"
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    rounded: "{rounded.board}"
    height: "52px"
    padding: "0 14px"
  segmented-option:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    height: "42px"
    padding: "0 12px"
  segmented-option-selected:
    backgroundColor: "{colors.chrome-yellow}"
    textColor: "{colors.ink}"
  ledger-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "11px 0"
  list-row:
    textColor: "{colors.ink}"
    typography: "{typography.body}"
    padding: "13px 2px"
    height: "58px"
  bottom-nav-indicator:
    backgroundColor: "{colors.chrome-yellow}"
    rounded: "{rounded.pill}"
    width: "56px"
    height: "30px"
  plan-tag:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.chrome-yellow}"
    typography: "{typography.label}"
    rounded: "{rounded.board}"
    padding: "4px 9px"
---

# Design System: IcthyoScan

## Overview

**Creative North Star: "The Palengke Sign Board"**

Every screen is set like the hand-painted price boards above a Philippine fish stall. One painted slab of chrome-yellow enamel per screen states the single thing that matters (the result, the sync count, the plan name) in heavy, condensed, uppercase lettering that reads at arm's length in pond-side sun. Everything else sits on a painted-white ground in ink: ruled lists, dotted-leader ledgers, square-cornered buttons. The farmer's own fish photographs are the richest colour on any screen; the system stays at three values (ground, ink, one enamel per state) so the photo and the board carry the eye.

Density is moderate and phone-first: an 18px gutter, 52px touch targets, 15px body. Depth is never simulated. A board is a flat slab with an inset painted rule, a list is ink rules on white, and nothing floats. The world deliberately leaves behind the category default of pale-teal washes, rounded white cards with tinted icon tiles, and Inter-only typography.

**Binding: light mode only.** There is no dark theme and none should be authored. The logo mark (`assets/icthyoscan-mark.svg`) is the **final mark**: a chrome-yellow square carrying four black, round-capped camera scan brackets around a curved milkfish drawn in blue, sky blue, white and navy with warm-yellow fins. The fish's colours (Mark Blue #075BC3, Mark Sky #83D4FF, Mark Navy #08265B, Fin Yellow #FFCE08) belong to the logo alone; they are not UI tokens and never appear outside the mark. The UI palette stays ink, yellow, green and tomato. Use the mark as supplied, at 30px in the phone top bar, 34px in the phone brand line and 36px in the web brand lockup.

**Imagery:** the Starter (A01) and web Login (W01) boards carry a flat sign-painted Bangus (`assets/bangus-sign.svg`): an ink silhouette with yellow eye, gill, pectoral and dotted lateral-line details, drawn in the board's own two values. Scan photos are real tray photography: `bangus-demo-observation.png` for scans with observed signs and `bangus-clean.png` (spots retouched out) for scans with none.

**Key Characteristics:**
- One board per screen, carrying the screen's single most important statement.
- Board lettering in Archivo at 850 weight, 62% width, uppercase.
- Three values: painted-white ground, ink, and one enamel per meaning (yellow board, green kept, tomato observed/rejected).
- 2px ink rules as the primary structural device; 1px hairlines between rows.
- Flat throughout: no drop shadows, no smooth gradients, no tinted icon tiles, no grey card panels.
- Square-ish 4px corners on every slab, button, field and thumbnail.
- One authored motion: the A08 result board paints on.

## Colors

A sun-bleached market palette: warm off-white ground, near-black ink, and three enamels that each carry exactly one meaning.

### Primary
- **Chrome-Yellow Enamel** (chrome-yellow): The board colour. Fills the signature board, the web status strip, the Starter and web Login poster panels, the selected segmented option, the active bottom-nav indicator, the active web-nav underline, the plan-card header, the viewfinder corners and hint band, the text-selection highlight, the focus halo, and the underline on text links. It is a surface and a "selected" marker, never a status signal.

### Secondary
- **Leaf Green** (leaf-green): Accepted, kept, synchronized, and guidance. The accepted-image board (is-ok), the Synced tag dot, and the check icons in plan feature lists.

### Tertiary
- **Market Tomato** (tomato): Reserved for "visible signs observed" and rejected images, nothing else. The warning board's painted rule and top band, the full rejected-image board (is-alert), the ticked box and OBSERVED state in the sign checklist, the Observed tag (square dot), and the flagged cap on chart bars. Also the input caret, as a small painted accent.

### Neutral
- **Painted White** (ground): Page ground for every screen, top bar, bottom nav, and the blank (pending) board.
- **Worn White** (ground-2): Hover wash on rows, icon buttons and secondary buttons; the proposed plan header; photo placeholder fill.
- **Sign Ink** (ink): Text, 2px rules, primary button fill, the ink board, chart bars, focus outline.
- **Faded Ink** (ink-2): Secondary text, inactive nav labels, pending tag, NOT RECOGNIZED states, dashed outlines on blank boards.
- **Chalk Hairline** (hair): 1px row dividers, dotted ledger leaders, unticked checklist boxes, chart gridlines.
- **Field White** (field-white): Text field fill only, and the lettering colour on tomato and green boards.

### Named Rules
**The One Meaning per Enamel Rule.** Yellow is the board, green is kept/synced/guidance, tomato is "visible signs observed" or "rejected". Never use tomato for a generic error, emphasis or decoration, and never use green for a call to action.

**The Never Colour Alone Rule.** Every status carries a word and a shape as well as a colour: OBSERVED / NOT RECOGNIZED labels, a filled square dot for observed, a filled round dot for synced, a hollow ring for pending, a warning icon on the board strip.

**The Mark Keeps Its Own Colours Rule.** The logo's blue, sky, navy and fin-yellow appear only inside the mark. No UI element borrows them.

**The Photo Is the Richest Colour Rule.** No illustration, wash or gradient competes with the farmer's photograph for saturation.

## Typography

**Display Font:** Archivo variable (wdth 62–125, wght 400–900), loaded from Google Fonts, with ui-sans-serif, system-ui fallback
**Body Font:** Archivo at normal width
**Label Font:** Archivo at 75% width, uppercase, tracked

**Character:** One variable family does every job by moving along its width and weight axes: board lettering is squeezed to 62% and set at 850 like stencil-painted sign letters; titles and labels sit at 75%; body runs at full width and regular weight for plain, calm reading. Numerals are tabular everywhere.

### Hierarchy
- **Display** (850, 62% width, 40px on mobile boards; 84px in the web status strip; 104px on the web Login poster; line-height 0.92, uppercase, balanced wrap): Board lettering only: the result, the sync count, the plan name.
- **Tally** (850, 62% width, 58px, line-height 0.8, with a 22px/800 denominator): The big count on a board, e.g. "1/5".
- **Headline** (850, 62% width, 34px mobile / 56px web page titles / 48px web Login, line-height 0.95, uppercase): Page titles.
- **Title** (800, 75% width, 19px, 0.02em, uppercase): Top-bar titles, section headings, and (at 17px, 0.04em) button labels.
- **Subtitle** (700, 16px, line-height 1.25): Row and note headings in sentence case.
- **Body** (400, 15px, line-height 1.45; lead copy 16px): All running text, sentence case.
- **Small** (400, 13px, line-height 1.45, faded ink): Metadata, captions, fine print (12.5px).
- **Label** (750, 75% width, 13px, 0.06em, uppercase): Field labels, table headers, board-strip captions, tags (12px).
- **Ledger value** (850, 62% width, 34px, line-height 0.85): Numeric values at the end of a dotted leader; textual values drop to 15px/700 at full width.

### Named Rules
**The Painted Letter Rule.** Anything set at 62% width is 850 weight and uppercase, and it lives on a board, a page title, a tally or a ledger value. Never set running text condensed.

**The One Family Rule.** Archivo is the only typeface. Variation comes from the width and weight axes, not from a second family.

## Layout

Phone screens are a fixed column: a 60px top bar closed by a 2px ink rule, a scrolling body with an 18px gutter (18px top, 28px bottom) and a 16px vertical gap between blocks, and a four-tab bottom navigation opened by a 2px ink rule. Full-bleed elements (the result photo, the camera viewfinder, the Starter poster) break out to the screen edge by cancelling the 18px gutter. Paired buttons sit in a two-column grid with a 10px gap. Captures render at a 370px phone width.

The web side uses a 72px top bar with a 40px side padding, a brand lockup, and uppercase nav items; content sits in a centred column (max 1240px, 40px padding, 28px gap). Dashboards split 1.6fr / 1fr; detail and profile views split evenly. The web status strip is a three-column board with 2px ink dividers inset 18px from top and bottom. Web Login is a 1.25fr / 1fr split: a full-height yellow poster panel with 104px lettering against a white form column (max 560px). Captures render at 1440px.

**The One Board per Screen Rule.** Each screen has one board, placed high, stating its single most important thing. Supporting content follows below it as ruled lists, ledgers and notes.

## Elevation & Depth

None. The system is entirely flat: no drop shadows, no layered surfaces, no tonal card stacks. Hierarchy comes from the board (a saturated slab against white), from 2px ink rules that open each list and close the top bar, and from type weight and width. Inset hairline strokes drawn with an inset box-shadow (bottom-nav indicator, tiers, notes, avatar, thumbnails) are rules, not elevation; they never offset or blur.

### Named Rules
**The Flat Paint Rule.** Nothing casts a shadow and nothing glows. If a surface needs separation, give it a rule.

## Shapes

Corners are square-ish and uniform: 4px on boards, buttons, fields, segmented controls, plan tiers, notes, avatars and thumbnails; 3px on small things (checklist boxes, chart bar caps, table thumbnails, photo captions). Only two elements are round: icon buttons (circular 44px hover target) and the bottom-nav active indicator (a 56×30px pill, Material-style, filled yellow with an ink stroke).

Rules are the form language. Structural rules are 2px ink; row dividers are 1px hairline; ledger leaders are 2px dotted hairline. A dashed outline always means "not real yet": a blank board, the coming-soon Pro tier, an empty sample recommendation.

Icons are a drawn set of 22 line icons on a 24px grid (18px small, 40px on boards), 2px stroke, square caps and mitred joins, inheriting current colour. They sit bare beside text, never inside a tinted tile.

## Components

### The Board (signature)
A painted enamel slab: chrome-yellow fill, ink lettering, 4px corners, 20px padding, and an inset 2px painted rule in the current text colour drawn 7px inside the edge (`outline: 2px solid currentColor; outline-offset: -7px`). Contents stack with a 10px gap: display lettering, an optional tally aligned bottom-right, a 15px/500 sub-line, and an optional board strip (a 2px top rule over uppercase 13px captions with icons).
- **Default:** yellow, ink lettering. Dashboard status, subscription status, plan name.
- **is-warn:** yellow slab with a 3px tomato rule and a 10px tomato band across the top; the A08 result when visible signs are observed. The label carries the meaning as well.
- **is-alert:** full tomato slab, white lettering; a rejected image on image-quality validation.
- **is-ok:** full leaf-green slab, white lettering; an accepted image, and the Care & Biosecurity guidance board.
- **is-ink:** ink slab, painted-white lettering; the account board on Profile (phone and web).
- **is-blank:** painted-white slab with a dashed 2px faded-ink rule; pending sync, proposed plans, and placeholder content such as the unapproved inspection sample-size method.
- **Web strip:** the board widened into three columns (14px label, 84px value, 13.5px note) with 2px ink dividers.

### Buttons
- **Shape:** squared (4px), 52px tall, full width on phone, 2px ink border.
- **Primary:** ink fill, painted-white 17px/800 uppercase lettering at 75% width, 0.04em tracking; trailing icon pushed to the right edge.
- **Hover / Focus / Active:** hover lifts the ink to a slightly warmer charcoal; active nudges down 1px; focus is a 3px ink outline offset 2px with a 6px yellow halo (shared by every focusable element).
- **Secondary (alt):** transparent with ink border and lettering; worn-white wash on hover.
- **On ink:** yellow fill and border with ink lettering, for use on an ink board.
- **Text link:** 750 weight ink, 2px yellow underline offset 3px that turns ink on hover.

### Tags & Markers
- **Status tag:** 12px uppercase label with a 9px leading mark. Synced: green, round dot. Pending: faded ink, hollow ring. Observed: tomato, square dot.
- **Demonstration marker:** retired. Screens carry no demo/preview/prototype labels because they are captured for the manuscript; the `.b-demo` class is now used only for the solid "Optional step" tag.
- **Plan tag:** ink chip with yellow lettering (Free); Pro is ink-outlined on ground.

### Ledger (price-board rows)
Opened by a 2px ink rule; each row is a 15px key, a 2px dotted hairline leader that fills the gap, and a value in 34px painted numerals (or 15px/700 text, right-aligned). Rows divided by 1px hairlines, 11px vertical padding (9px compact). Used for scan details and record facts.

### Ruled Lists
Opened by a 2px ink rule; 58px minimum rows, 13px padding, 1px hairline dividers, worn-white hover. A row holds an optional 26px glyph or 58px thumbnail, a bold 15px title over 13px faded-ink metadata, and a trailing chevron. The **sign checklist** is the result-screen variant: a 22px box (hairline-stroked when not recognized, tomato-filled with a white check when observed), the sign name (bold when observed), and an uppercase state label at the right.

### Segmented Control
A 2px ink-bordered, 4px-cornered bar of equal cells divided by 2px ink rules; 42px tall, 14px/750 labels. The selected cell fills chrome-yellow (`aria-pressed="true"`); others take a worn-white hover. Used for history filters, and for the plan-view and image-state switches (viewer controls hidden in Screenshot mode).

### Inputs / Fields
- **Style:** 52px tall, 2px ink border, 4px corners, field-white fill, 16px text, tomato caret. Label above in the 13px uppercase label style.
- **Focus:** the border stays ink and a 4px chrome-yellow halo appears; no glow or colour shift.

### Notes
Ink-stroked 1.5px boxes with an icon and a bold lead line, 14px text: limitations and product notes. **Soft** notes drop the box for a hairline top rule in faded ink; **dashed** notes mark placeholder content such as the unapproved sample-size method.

### Plan Tiers
A 2px ink-stroked block with a yellow header (30px display lettering) closed by a 2px ink rule, then a hairline-ruled feature list with green checks. The **proposed** Pro tier swaps to a dashed outline and a worn-white header with a dashed rule.

### Navigation
- **Phone top bar:** 60px, back or menu icon button, 19px uppercase title at 75% width, the logo mark at the right, closed by a 2px ink rule.
- **Bottom nav:** four tabs, 12px/700 labels in faded ink; the active tab turns ink and its icon sits in a yellow pill with an ink stroke.
- **Web top bar:** 72px, brand lockup (24px display), uppercase 15px nav items at 75% width; the active item is ink with a 6px yellow underline bar stroked in ink, set on the bar's bottom rule.

### Viewfinder
Full-bleed ink frame at 4:5 with the live image, four 5px chrome-yellow corner brackets, a small LIVE pill, and a yellow hint band along the bottom in 15px uppercase lettering.

### Step Trail (owner)
The owner's "Every step" record of a scan. A 2px ink top rule, then one hairline-divided row per step: time (13px/700), a 12px square marker, and the step name (14.5px/700) over its detail (13px faded ink). Marker states use shape as well as colour: ink square = done, tomato square with tomato detail text = a rejected image or observed signs, hollow ring = waiting for signal. Used on owner Home (latest steps), Scan details (A11, W04) and the web Farm overview.

### Role Pick & Farmer Rows (owner)
Registration offers two role options as a 2-column pair of 2px ink-bordered buttons (`aria-pressed`); the selected one fills chrome-yellow with the inset board rule. The owner's farmer list reuses ruled rows with a 40px initials avatar: name, pond · scans · last time, and a wrapping "Last step" tag. A farmer who has joined but not scanned gets a hollow avatar and a "No scans yet" pending tag. The farm code is a small yellow ink-ruled slug (`.b-code`, 850/75% width, 0.08em tracking).

### Viewer Controls
The "Account view", "Plan view" and "Image state" segmented switches (`.b-statectl`) are gallery viewer controls, not product UI; they are hidden in Screenshot mode, which reads `role`, `plan` and `quality` from the URL instead.

### Chart (web)
Ink bars with 3px top corners on a field of 1px hairline gridlines every 55px, closed by a 2px ink baseline; flagged bars carry a 10px tomato cap. Bar counts sit above in 24px painted numerals.

### Motion
One authored moment: on A08 Result, the result board paints on from left to right (a clip-path wipe, 0.7s, `cubic-bezier(.16,1,.3,1)`) and the tally rises 12px into place after a 0.35s delay. Both run only under `prefers-reduced-motion: no-preference`. Elsewhere, motion is limited to 0.1–0.15s colour and press feedback on buttons.

## Do's and Don'ts

### Do:
- **Do** give each screen exactly one board, and put the screen's single most important statement on it in 850-weight, 62%-width uppercase lettering.
- **Do** draw every board's inset 2px rule 7px inside its edge in the current text colour.
- **Do** use tomato only for "visible signs observed" (is-warn board, checklist, Observed tag, flagged chart cap) and for rejected images (is-alert board).
- **Do** use leaf green only for accepted, synchronized, kept and guidance states.
- **Do** pair every status colour with a word and a mark shape (square dot, round dot, hollow ring, warning icon).
- **Do** open lists, ledgers, tables and panels with a 2px ink rule and divide rows with 1px hairlines.
- **Do** use a dashed outline to say "pending or not yet available" (is-blank board, the coming-soon Pro tier, the empty sample recommendation).
- **Do** keep corners at 4px (3px for small parts) and touch targets at 44px or more (buttons 52px).
- **Do** use the drawn line icon set (2px stroke, square caps, mitred joins) bare beside text.
- **Do** guard any new motion with `prefers-reduced-motion`, and keep the A08 board paint-on as the only authored moment.

### Don't:
- **Don't** author a dark mode; the product is light mode only.
- **Don't** put icons in tinted square or circular tiles.
- **Don't** use soft grey or pale-tinted card panels to group content; use rules and the board.
- **Don't** use drop shadows, glows, or smooth decorative gradients. (Hard-stop gradients that draw rules, such as chart gridlines and the legend swatch, are rules, not gradients.)
- **Don't** use tomato as a generic error, accent, or emphasis colour.
- **Don't** set running text condensed or uppercase; condensed caps belong to lettering, titles, labels and numerals.
- **Don't** introduce a second typeface.
- **Don't** let any illustration or wash out-saturate the farmer's photograph.
- **Don't** lift the logo's blue, sky, navy or fin-yellow colours into the UI; they live only inside the mark.
- **Don't** put glossy or airbrushed fish renders on boards; boards take the flat sign-painted Bangus, and only scan photos are photographic.
