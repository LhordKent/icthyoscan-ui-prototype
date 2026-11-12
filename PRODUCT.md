# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

The deliverable is a static web gallery that previews two product surfaces: an Android app (phone-framed screens) and a web monitoring dashboard. The Android screens are web mock-ups and not native code, but they should still read as a believable Android app.

## Users

- **Primary end users (simulated):** Bangus (milkfish) farmers in the Philippines. They use the Android app at the pond, outdoors and often in bright sun, on modest Android phones with patchy connectivity. Their job is to photograph a fish, get a preliminary visual screening for visible abnormalities associated with vibriosis, read general care and biosecurity guidance, and keep a history of observations. The web dashboard lets the same farmer account review synchronized records.
- **Immediate audience:** the thesis/capstone panel and advisers. They evaluate the prototype, and screenshots of its screens go into the manuscript.

## Product Purpose

IcthyoScan is a thesis/capstone project. This repository is a navigable UI prototype gallery. It does not run the model, open the camera, use Firebase or sync data. All results are demonstration data.

Current goal: **raise the visual quality of the screens**. The existing UI reads as generic and AI-generated. The work is UI only: no functionality needs to be wired up.

Success means each screen looks like a credible, carefully crafted product, both in a manuscript screenshot and to a panel member clicking through the gallery.

## Positioning

An offline-capable phone tool that screens Bangus specifically for visible abnormalities on the device, with one farmer account across Android and web. It is careful never to overclaim: it observes and advises, and it does not diagnose.

## Operating Context

- Scan flow: Starter, then Login/Register, then Dashboard, then an optional inspection-sample guide, then Capture/Upload, then Image Quality validation, then Preliminary Result, then Care & Biosecurity guidance. History, Details, Profile and Edit Profile follow.
- Completed scans save locally and sync automatically when connectivity returns. Rejected images never enter the history.
- The web side covers login, the monitoring dashboard, synchronized history, scan details, profile and plan comparison.
- Screenshot mode (`/prototype/screenshots?screen=…&frame=off`) produces clean captures for the manuscript and must keep working.

## Capabilities and Constraints

- **Binding: gallery structure is fixed.** Keep the gallery's layout and the way screens are arranged, framed and navigated: screen inventory, IDs (A01–A13, S01–S02, W01–W07), routes and screenshot mode stay the same. **Inside each screen, design freedom is wide open.**
- **Two account types (user decision, 2026-11-11).** Farmer and Fishpond Owner are separate accounts, chosen at registration (A03). An owner has many farmers under them: farmers join with the owner's farm code. The owner follows every step each farmer takes (inspection sample, capture, image check accept/reject, result, care guidance, sync) and sees all farmers' scans. A farmer sees only their own scans. Owner is a second view of the existing screens (A04, A10, A11, A12, W02–W05), switched by an "Account view" viewer control, hidden in Screenshot mode and carried by `?role=owner`. No new screens were added.
- **UI only.** Interactions stay demonstration controls, and no real functionality is required.
- Stack is fixed: static HTML/CSS/vanilla JS (`index.html`, `styles.css`, `gallery.css`, `polish.css`, `app.js`, `aligned-ui.js`), with no build step. It deploys to Vercel as a static site (`vercel.json` rewrites routes), and `dist/` mirrors the root files.
- UI copy is in English only.
- Terminology: "preliminary visual screening", "Bangus", "farmer account", "synchronized records", "Free Preview / Pro Preview".
- Open: the inspection sample-size method is unapproved, so the screen shows an empty recommendation (no number, no formula). The user did not mark this as a binding rule.

## Brand Commitments

- Name: **IcthyoScan** (spelled this way). Logo mark: `assets/icthyoscan-mark.svg` (final mark: chrome-yellow square, black scan brackets, curved milkfish; its blue/navy fish colours belong to the mark only). The original raster `assets/icthyoscan-logo-mark.png` is retired from the screens.
- Voice: calm, careful and plain. Example line: "Keep observing. Keep informed."
- **Binding: light mode only** for all screens.
- Palette is fully open: the screens need not follow the logo colors (navy, teal-green, sky blue), and the logo colors may be reconsidered later.
- What the redesign must leave behind (user's verdict on the current UI): generic rounded cards everywhere, bland pale-teal wash, flat Inter-only typography, and screens that read as a mock-up rather than a real app.

## Evidence on Hand

- Imagery: `assets/bangus-scan-hero.png` and `assets/bangus-demo-observation.png` (synthetic example of red spots on the flank).
- Supported visible signs: red spots or hemorrhagic discoloration, skin lesions or ulcers, fin deterioration, scale loss, cloudy eyes.
- Plan feature lists exist for Free and Pro (see `aligned-ui.js`). There are **no prices, billing periods, scan limits, real users, testimonials or accuracy metrics**. Never invent them.

## Product Principles

1. **Never claim a diagnosis.** Results are always preliminary visual screening. Never state that vibriosis is confirmed or that a fish is disease-free.
2. **No pricing or billing.** No price, payment provider, billing period, scan limit or successful activation appears anywhere.
3. **Stay in scope.** No disease mapping, medication, BFAR reporting, IoT, web-based scanning, manual sync, or record editing/deletion.
4. **Built for the pond.** Screens must be legible and tappable outdoors, in one hand, on a modest phone, and must handle an offline or pending-sync state well.
5. **Screens read as the real app.** The screens are captured for the manuscript, so no demo, preview, prototype or synthetic labels appear inside them (user decision, 2026-11-11). Prototype status lives in the gallery chrome and README only. In-screen state switches (plan view, image state) are viewer controls and are hidden in Screenshot mode.

## Accessibility & Inclusion

Outdoor, bright-light use calls for high contrast and large touch targets. Status (accepted/rejected, synced/pending, abnormality observed/not recognized) must never rely on color alone.
