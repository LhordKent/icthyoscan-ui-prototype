# IcthyoScan UI Prototype Gallery

This build is a **static navigable UI prototype gallery**, created because the supplied workspace contains no Android/Kotlin application or existing web-dashboard repository to extend. It does not connect to Firebase, run YOLOv8n, access a camera/gallery, process a payment, or synchronize data.

## Included interface inventory

- Android: Starter, Login, Registration, Dashboard, optional Inspection Sample guide, Capture/Upload, Image Quality, Preliminary Result, Care & Biosecurity, History, Scan Details, Profile, Edit Profile, Plan Comparison, and Subscription Status demonstration.
- Web: Login, Monitoring Dashboard, Synchronized History, Individual Details, Profile, Edit Profile, and Plan Comparison.

## Scope safeguards implemented

- Uses **preliminary visual screening** language, never a confirmed vibriosis diagnosis.
- Does not introduce disease mapping, medication, BFAR reporting, IoT, web scanning, manual sync, record editing/deletion, prices, benefits, billing periods, or scan limits.
- Free and Pro views use only clearly labelled placeholders where approval is still required.

## Gallery routes

- `/prototype/gallery` — full screen inventory
- `/prototype/android/starter` through `/prototype/android/pro-status` — Android previews
- `/prototype/web/login` through `/prototype/web/web-plans` — web previews
- `/prototype/subscription` and `/prototype/subscription/status` — plan interfaces
- `/prototype/screenshots?screen=android/starter&frame=off` — clean screenshot mode; replace the screen value with `android/<screen-key>`, `web/<screen-key>`, or `subscription/<screen-key>`.

Use the **Screenshot mode** control on any gallery screen for the correct clean capture URL. Screens carry no demo/preview labels, so captures read as the real app.

**Farmer and Owner accounts.** Registration (A03) lets the user pick Farmer or Fishpond owner. Owner is a second view of the existing screens (Home, History, Scan details, Profile and the web dashboard, history, details and profile): one owner, many farmers, with each farmer's every step. Switch with **Account view** on the Home screens, or add `&role=owner` to a screenshot URL. The Plan view (`&plan=pro`) and Image state (`&quality=rejected`) switches work the same way. All three switches are hidden in Screenshot mode. It hides the gallery UI completely. The mobile toolbar also lets you remove the phone frame before opening it.

The gallery can also be opened by double-clicking `index.html`. Local files use `#/prototype/...` links so screen navigation works without a server. Screenshot view opens a separate tab containing only the selected screen; return to the original tab to select another. The overview now displays the actual screens side by side. Refresh an already open tab after updating these files.

### Android routes

| ID | Screen | Route |
| --- | --- | --- |
| A01 | Starter Screen | `/prototype/android/starter` |
| A02 | Login Screen | `/prototype/android/login` |
| A03 | Registration Screen | `/prototype/android/register` |
| A04 | Mobile Dashboard | `/prototype/android/dashboard` |
| A05 | Inspection Sample Size Recommendation | `/prototype/android/sample` |
| A06 | Capture or Upload Bangus Image | `/prototype/android/capture` |
| A07 | Image Quality Validation & AI Analysis | `/prototype/android/quality` |
| A08 | Preliminary Scan Result | `/prototype/android/result` |
| A09 | Care & Biosecurity Guidance | `/prototype/android/guidance` |
| A10 | Scan History | `/prototype/android/history` |
| A11 | Scan Details | `/prototype/android/details` |
| A12 | Profile | `/prototype/android/profile` |
| A13 | Edit Profile | `/prototype/android/edit` |

### Subscription routes

| ID | Screen | Route |
| --- | --- | --- |
| S01 | Subscription / Plan Comparison | `/prototype/subscription` |
| S02 | Subscription Status demonstration | `/prototype/subscription/status` |

### Web routes

| ID | Screen | Route |
| --- | --- | --- |
| W01 | Web Login | `/prototype/web/login` |
| W02 | Online Monitoring Dashboard | `/prototype/web/dashboard` |
| W03 | Synchronized Scan History | `/prototype/web/web-history` |
| W04 | Individual Scan Details | `/prototype/web/web-details` |
| W05 | Web Profile | `/prototype/web/web-profile` |
| W06 | Web Edit Profile | `/prototype/web/web-edit` |
| W07 | Web Subscription / Plan Comparison | `/prototype/web/web-plans` |

## Run locally

Open `index.html` in a browser, or run `node preview-server.cjs` from this folder and open `http://127.0.0.1:4173/prototype/gallery`. No dependency installation is required. The included preview server also supports every direct route.

## Vercel

1. Create a new Vercel project and import this `icthyoscan-ui-prototype` directory or its Git repository.
2. Select **Other** / static-site settings. Do not set a build command.
3. Deploy. `vercel.json` rewrites every direct route to `index.html`, so individual screen URLs remain accessible after deployment.
4. Open `/prototype/gallery` on the deployed domain and use **Screenshot mode** for clean manuscript captures.

The gallery has no server-side environment variables, database, account credentials, or external API keys.

## Assets

- `assets/icthyoscan-logo-mark.png`
- `assets/bangus-scan-hero.png`
