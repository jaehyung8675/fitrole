---
version: alpha
name: FitRole-design-system
description: A mobile-first job matching interface adapted from the Cal.com DESIGN.md structure. FitRole uses a white canvas, black primary CTAs, Cal Sans-style display typography, light-gray product cards, real job-match UI fragments, and a scarce dark surface for preview/footer contexts. The core product surface is a ranked job feed with visible comparison, strong match evidence, lightweight save state, and decisive full-width Skip / Apply controls.
sourceOfTruth: "/preview.html is the base visual catalog. public/design-system.css holds reusable tokens and component classes. src/styles.css adapts those choices to the phone-framed React app."

colors:
  primary: "#111111"
  primary-active: "#242424"
  primary-disabled: "#e5e7eb"
  ink: "#111111"
  body: "#374151"
  muted: "#6b7280"
  muted-soft: "#898989"
  hairline: "#e5e7eb"
  hairline-soft: "#f3f4f6"
  canvas: "#ffffff"
  app-shell: "#e9e7de"
  surface-soft: "#f8f9fa"
  surface-card: "#f5f5f5"
  surface-strong: "#e5e7eb"
  surface-dark: "#101010"
  surface-dark-elevated: "#1a1a1a"
  on-primary: "#ffffff"
  on-dark: "#ffffff"
  on-dark-soft: "#a1a1aa"
  brand-accent: "#3b82f6"
  success: "#10b981"
  warning: "#f59e0b"
  error: "#ef4444"
  badge-orange: "#fb923c"
  badge-pink: "#ec4899"
  badge-violet: "#8b5cf6"
  badge-emerald: "#34d399"

typography:
  display-xl:
    fontFamily: "Cal Sans, Manrope, Inter, sans-serif"
    fontSize: 64px
    fontWeight: 600
    lineHeight: 1.05
    letterSpacing: -2px
  display-lg:
    fontFamily: "Cal Sans, Manrope, Inter, sans-serif"
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -1.5px
  display-md:
    fontFamily: "Cal Sans, Manrope, Inter, sans-serif"
    fontSize: 36px
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: -1px
  display-sm:
    fontFamily: "Cal Sans, Manrope, Inter, sans-serif"
    fontSize: 28px
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: -0.5px
  title-lg:
    fontFamily: "Inter, sans-serif"
    fontSize: 22px
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: -0.3px
  title-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 18px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  title-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: 0
  body-md:
    fontFamily: "Inter, sans-serif"
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  body-sm:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  caption:
    fontFamily: "Inter, sans-serif"
    fontSize: 13px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0
  code:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: 14px
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: 0
  button:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 600
    lineHeight: 1
    letterSpacing: 0
  nav-link:
    fontFamily: "Inter, sans-serif"
    fontSize: 14px
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: 0

rounded:
  xs: 4px
  sm: 6px
  md: 8px
  lg: 12px
  xl: 16px
  pill: 9999px
  full: 9999px

spacing:
  xxs: 4px
  xs: 8px
  sm: 12px
  md: 16px
  lg: 24px
  xl: 32px
  xxl: 48px
  section: 96px

components:
  phone-frame:
    backgroundColor: "{colors.canvas}"
    borderColor: "{colors.primary}"
    rounded: 42px
    width: 430px
  status-bar:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    height: 48px
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-primary-active:
    backgroundColor: "{colors.primary-active}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-disabled:
    backgroundColor: "{colors.primary-disabled}"
    textColor: "{colors.muted}"
    rounded: "{rounded.md}"
  button-secondary:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-danger-soft:
    backgroundColor: "#fef2f2"
    textColor: "#b91c1c"
    typography: "{typography.button}"
    rounded: "{rounded.md}"
    padding: 12px 20px
    height: 40px
  button-icon-circular:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  button-text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.button}"
  text-link:
    backgroundColor: transparent
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
  top-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    height: 64px
  bottom-nav:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.muted-soft}"
    activeTextColor: "{colors.ink}"
    activeBackgroundColor: "{colors.surface-card}"
    typography: "{typography.caption}"
    height: 76px
  nav-pill-group:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
    padding: 6px
  category-tab:
    backgroundColor: transparent
    textColor: "{colors.muted}"
    typography: "{typography.nav-link}"
    padding: 8px 14px
    rounded: "{rounded.pill}"
  category-tab-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.nav-link}"
    rounded: "{rounded.pill}"
  mobile-screen:
    backgroundColor: "{colors.surface-soft}"
    textColor: "{colors.ink}"
  job-feed:
    backgroundColor: "{colors.surface-soft}"
    gap: 10px
  job-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: 18px
  job-card-actions:
    layout: two-column
    gap: 8px
    primaryAction: "{component.button-primary}"
    destructiveAction: "{component.button-danger-soft}"
  detail-sheet:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: 0
  product-mockup-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.lg}"
    padding: 24px
  feature-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.title-md}"
    rounded: "{rounded.lg}"
    padding: 32px
  feature-icon-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-sm}"
    rounded: "{rounded.lg}"
    padding: 24px
  testimonial-card:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.lg}"
    padding: 24px
  pricing-tier-card:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  pricing-tier-card-featured:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark}"
    typography: "{typography.title-lg}"
    rounded: "{rounded.lg}"
    padding: 32px
  text-input:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    typography: "{typography.body-md}"
    rounded: "{rounded.md}"
    padding: 10px 14px
    height: 40px
  text-input-focused:
    backgroundColor: "{colors.canvas}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
  avatar-circle:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    rounded: "{rounded.full}"
    size: 36px
  badge-pill:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.caption}"
    rounded: "{rounded.pill}"
    padding: 4px 12px
  keyword-chip-match:
    backgroundColor: "#f0fdf4"
    textColor: "#15803d"
    rounded: "{rounded.pill}"
    padding: 5px 9px
  keyword-chip-gap:
    backgroundColor: "#fef2f2"
    textColor: "#b91c1c"
    rounded: "{rounded.pill}"
    padding: 5px 9px
  score-ring:
    strokeColor: "{colors.primary}"
    backgroundStrokeColor: "{colors.hairline-soft}"
    typography: "{typography.caption}"
  cta-band-light:
    backgroundColor: "{colors.surface-card}"
    textColor: "{colors.ink}"
    typography: "{typography.display-sm}"
    rounded: "{rounded.lg}"
    padding: 48px
  footer:
    backgroundColor: "{colors.surface-dark}"
    textColor: "{colors.on-dark-soft}"
    typography: "{typography.body-sm}"
    padding: 64px
---

## Overview

FitRole's product surface is a clean, friendly modern-SaaS mobile interface: white canvas (`{colors.canvas}` — #ffffff), black primary CTAs (`{colors.primary}` — #111111), Cal Sans-style display typography, and light-gray / white cards holding real job-match UI fragments. The system reads as confidently engineered without trying to impress. Every screen has clear hierarchy, generous whitespace, and one obvious primary action.

`/preview.html` is the base design-system catalog. When the app style and catalog disagree, update the app toward the light preview first, then mirror contrast-only changes in `/preview-dark.html`. `public/design-system.css` owns shared tokens and reusable classes; `src/styles.css` should only adapt those choices to mobile app constraints.

The core experience is not a dating-style card stack anymore. Discover is a ranked, scrollable job feed where users can compare multiple opportunities before acting. Each job card exposes the same decision grammar: tap to inspect, bookmark to save, Skip to remove with undo, Apply to track the role.

Type voice splits cleanly into two roles: **Cal Sans semantics** for h1, h2, h3, and hero headlines, and **Inter** for everything else: body, buttons, nav, captions, chips, filters, and form fields. Because Cal Sans is not bundled, FitRole uses Manrope as the display substitute while preserving the Cal.com weight + negative-tracking signature.

Component voltage comes from **product UI fragments shown directly inside cards**: score rings, keyword chips, job metadata, status pills, and real decision controls. FitRole should show the job matching product clearly rather than decorating around it.

The dark surface (`{colors.surface-dark}` — #101010) is scarce. It belongs to preview/footer contexts and special catalog surfaces, not to the main app feed. The product app stays light for scanning and comparison.

**Key Characteristics:**
- White canvas with black primary CTAs (`{colors.primary}` — #111111). Buttons are `{rounded.md}` (8px) with confident weight-600 labels.
- Cal Sans-style display type with negative letter-spacing. Manrope is the local substitute.
- Light-gray card/support surfaces (`{colors.surface-card}` — #f5f5f5) and white job cards with hairline borders.
- Real product UI fragments embedded directly in cards: score rings, chips, metadata rows, button rows.
- Nav-pill-group (`{component.nav-pill-group}`) for grouped feed filters such as Best match / Recent / Remote.
- The phone frame is the hard app boundary; detail sheets and toasts stay inside it.
- Scrollable mobile surfaces hide desktop scrollbars while preserving touch/wheel scrolling.
- Border radius is hierarchical: `{rounded.md}` for buttons, inputs, tabs, and mobile job cards; `{rounded.lg}` for larger content cards; `{rounded.pill}` for chips and filter groups; `{rounded.full}` for circular icon controls.

## Colors

### Brand & Accent

- **Primary** (`{colors.primary}` — #111111): The dominant action color. Used for primary CTAs, h1/h2 display type, score rings, and active selected controls.
- **Primary Active** (`{colors.primary-active}` — #242424): Pressed/active state for primary controls.
- **Primary Disabled** (`{colors.primary-disabled}` — #e5e7eb): Disabled primary control background.
- **Brand Accent** (`{colors.brand-accent}` — #3b82f6): Used sparingly on informational strips or links. It should not become the action color.
- **Badge Pastels**: `{colors.badge-orange}`, `{colors.badge-pink}`, `{colors.badge-violet}`, `{colors.badge-emerald}` are reserved for avatar fills or small catalog accents. They do not belong on primary CTAs.

### Surface

- **Canvas** (`{colors.canvas}` — #ffffff): Main app and preview floor.
- **App Shell** (`{colors.app-shell}` — #e9e7de): External desktop preview backdrop around the phone frame only.
- **Surface Soft** (`{colors.surface-soft}` — #f8f9fa): Mobile screen background, nav-pill-group background, soft section dividers.
- **Surface Card** (`{colors.surface-card}` — #f5f5f5): Inactive nav item backgrounds, neutral cards, catalog cards, chip backgrounds.
- **Surface Strong** (`{colors.surface-strong}` — #e5e7eb): Disabled backgrounds and stronger dividers.
- **Surface Dark** (`{colors.surface-dark}` — #101010): Dark catalog/footer surface only.
- **Surface Dark Elevated** (`{colors.surface-dark-elevated}` — #1a1a1a): Nested cards in dark preview/footer contexts.
- **Hairline** (`{colors.hairline}` — #e5e7eb): Default 1px border.
- **Hairline Soft** (`{colors.hairline-soft}` — #f3f4f6): Very soft dividers and score-ring background strokes.

### Text

- **Ink** (`{colors.ink}` — #111111): Headlines, primary text, score numbers, active nav labels.
- **Body** (`{colors.body}` — #374151): Default running text.
- **Muted** (`{colors.muted}` — #6b7280): Secondary metadata, captions, subtitles.
- **Muted Soft** (`{colors.muted-soft}` — #898989): Tertiary nav labels and fine print.
- **On Primary / On Dark** (`{colors.on-primary}` / `{colors.on-dark}` — #ffffff): Text on primary buttons and dark surfaces.
- **On Dark Soft** (`{colors.on-dark-soft}` — #a1a1aa): Secondary copy on dark surfaces.

### Semantic

- **Success** (`{colors.success}` — #10b981): Matched keywords, positive confirmation, profile strength.
- **Warning** (`{colors.warning}` — #f59e0b): Save-related accent or warning states.
- **Error** (`{colors.error}` — #ef4444): Destructive/error tone. In the feed, Skip uses a soft red treatment rather than solid red.

## Typography

### Font Family

The system runs **Cal Sans semantics** for display + brand wordmark and **Inter** for everything else. Cal Sans is represented locally by Manrope because the real Cal Sans font is not bundled. Inter handles body, buttons, navigation, captions, chips, score metadata, and form controls.

The split is functional:
- Display family, 600 weight, negative tracking: h1, h2, h3, hero copy.
- Inter, 400-600 weight, 0 tracking: paragraphs, labels, buttons, nav, chips.

### Hierarchy

| Token | Size | Weight | Line Height | Letter Spacing | Use |
|---|---|---|---|---|---|
| `{typography.display-xl}` | 64px | 600 | 1.05 | -2px | Marketing hero h1 |
| `{typography.display-lg}` | 48px | 600 | 1.1 | -1.5px | Preview/catalog hero headings |
| `{typography.display-md}` | 36px | 600 | 1.15 | -1px | Section headings |
| `{typography.display-sm}` | 28px | 600 | 1.2 | -0.5px | CTA-band heads, app landing h1 |
| `{typography.title-lg}` | 22px | 600 | 1.3 | -0.3px | Large card titles, profile names |
| `{typography.title-md}` | 18px | 600 | 1.4 | 0 | Feature card titles, screen headings |
| `{typography.title-sm}` | 16px | 600 | 1.4 | 0 | Job card titles, list labels |
| `{typography.body-md}` | 16px | 400 | 1.5 | 0 | Default running text |
| `{typography.body-sm}` | 14px | 400 | 1.5 | 0 | Detail body, metadata |
| `{typography.caption}` | 13px | 500 | 1.4 | 0 | Captions, chips, status text |
| `{typography.code}` | 14px | 400 | 1.5 | 0 | Code snippets and token docs |
| `{typography.button}` | 14px | 600 | 1.0 | 0 | Button labels |
| `{typography.nav-link}` | 14px | 500 | 1.4 | 0 | Navigation and filter labels |

### Principles

Display weight stays at 600. Do not push display headings to 700/800 to create emphasis. Use size, spacing, or layout first.

Body copy never uses display type. Button/chip/nav labels never use display type. This boundary keeps the system precise.

### Note on Font Substitutes

If Cal Sans is unavailable, Manrope 600/700 or Inter 600 with negative tracking is acceptable. In the live FitRole app, Manrope is the display substitute and Inter is the UI font.

## Layout

### Spacing System

- **Base unit:** 4px.
- **Tokens:** `{spacing.xxs}` 4px · `{spacing.xs}` 8px · `{spacing.sm}` 12px · `{spacing.md}` 16px · `{spacing.lg}` 24px · `{spacing.xl}` 32px · `{spacing.xxl}` 48px · `{spacing.section}` 96px.
- **Mobile screen padding:** 15-18px horizontal padding.
- **Card internal padding:** 18px for mobile job cards; 24px for larger product cards; 32px for marketing cards.
- **Decision row gap:** 8px between equal-width Skip and Apply buttons.
- **Feed gap:** 10px between cards.

### Grid & Container

- **Phone frame width:** 430px max in desktop preview.
- **Mobile app:** Single-column, fixed top/status area, scrollable content, fixed bottom nav.
- **Discover feed:** Single-column ranked list. Users must be able to see multiple cards by vertical scrolling.
- **Catalog previews:** Max content width ~1120-1200px, 3-up grids on desktop, 1-up on mobile.
- **Detail sheet:** Absolute overlay inside `.app-screen`, with fixed header/actions and scrollable body.

### Whitespace Philosophy

FitRole should feel useful before it feels decorative. Use enough whitespace to make comparison easy, but keep density higher than a marketing page. Job cards should scan quickly: company/title, score, metadata, keywords, decision buttons.

## Elevation & Depth

| Level | Treatment | Use |
|---|---|---|
| Flat | No shadow, no border | Screen background, nav zones |
| Soft hairline | 1px `{colors.hairline}` border | Inputs, buttons, cards |
| Card surface | White or `{colors.surface-card}` with soft hairline | Job cards, profile cards, catalog cards |
| Subtle drop shadow | Low-alpha shadow | Phone frame, cards that need separation |
| Dark surface | `{colors.surface-dark}` | Dark preview/footer only |

The elevation philosophy is soft and practical. No heavy shadows, no glassmorphism, no neumorphism. Depth should support scanning, not visual drama.

### Decorative Depth

FitRole's best decorative asset is the product UI itself: match score rings, keyword chips, status badges, and job metadata. Avoid abstract background decoration when a real product fragment can explain the interface.

## Shapes

### Border Radius Scale

| Token | Value | Use |
|---|---|---|
| `{rounded.xs}` | 4px | Rare accent details |
| `{rounded.sm}` | 6px | Small inline controls |
| `{rounded.md}` | 8px | Buttons, inputs, category tabs, mobile job cards |
| `{rounded.lg}` | 12px | Larger content cards |
| `{rounded.xl}` | 16px | Hero/mockup cards |
| `{rounded.pill}` | 9999px | Filter groups, chips, badges |
| `{rounded.full}` | 9999px / 50% | Icon buttons, avatars |

### Geometry

Company logos use rounded-square geometry at 8px. Score rings and bookmark icon buttons use circular geometry. Job cards use 8px radius to stay professional and compact.

## Components

### App Shell

**`phone-frame`** — The desktop preview shell for the mobile app. Width caps at 430px, border is black, radius is large enough to read as a phone. This is a preview artifact, not an in-app component.

**`mobile-screen`** — The internal app canvas. Background `{colors.surface-soft}`. It contains fixed status/header zones, scrollable content, and fixed bottom nav.

### Navigation

**`status-bar`** — Compact white bar at the top of the app. It carries simulated time, FitRole wordmark, and battery status.

**`bottom-nav`** — Fixed bottom app nav. White background, hairline top border, muted inactive labels, surface-card active item. Badge counters use semantic red.

**`nav-pill-group`** — A pill-radius wrapper around grouped feed filters. Background `{colors.surface-soft}`, internal padding 6px, rounded `{rounded.pill}`. Active segment can be black for stronger filter emphasis in the app, or white in catalog/marketing contexts.

### Buttons

**`button-primary`** — Primary action. Background `{colors.primary}`, text `{colors.on-primary}`, type `{typography.button}`, rounded `{rounded.md}`, min height 40px. Used for Apply and onboarding completion.

**`button-secondary`** — White button with hairline outline and ink text. Used for Back, Save, and secondary sheet actions.

**`button-danger-soft`** — Soft red destructive action. Used for Skip in the Discover card. Background stays light; the product should not make skipping feel as visually dominant as applying.

**`button-icon-circular`** — Circular icon-only action. Used for bookmark/save and settings. 34-40px in the current app, with hairline border.

**`button-text-link`** — Inline text control with no background. Use for small actions like Undo in toast.

### Cards & Containers

**`job-card`** — The primary Discover unit. White surface, hairline border, 8px radius, subtle separation. Contains company logo, title/company, match score, metadata row, matched/missing keyword chips, status badges, and full-width two-column Skip / Apply buttons. Tapping any non-control area opens the detail sheet.

**`job-card-actions`** — Two equal-width buttons at the bottom of a job card. Left: Skip (`{component.button-danger-soft}`). Right: Apply (`{component.button-primary}`). Apply remains visually dominant.

**`detail-sheet`** — Full-screen overlay inside `.app-screen`. Header and action footer are fixed. Body scrolls without visible scrollbars. It contains hero job info, why-match explanation, score breakdown, keyword chips, responsibilities, requirements, and benefits.

**`product-mockup-card`** — Used in previews and future marketing screens to show real FitRole UI fragments. White surface, hairline border, rounded `{rounded.lg}`, padding `{spacing.lg}`.

**`feature-card`** — Light-gray card for abstract feature claims in preview/marketing surfaces. Background `{colors.surface-card}`, rounded `{rounded.lg}`, padding `{spacing.xl}`.

**`testimonial-card`** — Light-gray quote card for future trust surfaces. Top row uses avatar-circle + name/role.

**`pricing-tier-card`** and **`pricing-tier-card-featured`** — Reserved for future monetization pages. Featured card is the only appropriate dark card on a light marketing page.

### Inputs & Forms

**`text-input`** — White input, ink text, body-md type, 8px radius, 1px hairline border, 40px height.

**`text-input-focused`** — Border shifts to ink or thickens. Avoid colored focus unless needed for accessibility.

### Tags / Badges

**`badge-pill`** — Neutral pill label. Background `{colors.surface-card}` or documented pastel fills. Type `{typography.caption}`.

**`keyword-chip-match`** — Green chip for matched skills/tools. Used on job cards and detail sheets.

**`keyword-chip-gap`** — Soft red chip for missing keywords. It indicates a gap without implying form validation error.

**`status-badge`** — Neutral or semantic pill for Saved, Applied, Interviewing, Offer, Rejected, Archived.

**`avatar-circle`** — 36px circular avatar or initials mark.

### Product-Specific UI

**`score-ring`** — Circular match score. Current stroke is black for brand consistency. Semantic color may be introduced later only if it improves scan speed without making the feed noisy.

**`insight-strip`** — Soft informational strip inside Discover. Blue is acceptable here because it is informational, not an action layer.

**`undo-toast`** — In-app toast for Skip undo. Black surface, white text, soft green/contrast Undo action. Positioned above bottom nav inside the phone boundary.

### CTA / Footer

**`cta-band-light`** — Future marketing pre-footer surface. Light-gray card, display-sm heading, centered primary CTA.

**`footer`** — Dark closing surface for marketing/catalog pages. It should not appear inside the core mobile feed.

## Do's and Don'ts

### Do

- Reserve `{colors.primary}` for primary CTAs, display text, active controls, and score-ring emphasis.
- Use display font semantics for every display headline. Pair with Inter body.
- Apply negative letter-spacing on display sizes.
- Use `{component.job-card}` as the central Discover primitive.
- Keep Discover as a ranked list, not a stacked deck.
- Use full-width two-column Skip / Apply buttons in job cards.
- Keep Save as a lightweight bookmark action, not a primary CTA.
- Use real product UI fragments inside cards and previews.
- Hide scrollbars inside the phone frame while preserving scroll behavior.
- Keep overlays, sheets, and toasts inside `.phone` / `.app-screen`.
- Use `{token.refs}` in documentation and CSS variables in implementation.

### Don't

- Don't use blue primary CTAs.
- Don't make Skip a solid red primary-weight button.
- Don't make both Skip and Apply equally dark. Apply is the primary decision.
- Don't return Discover to a stacked/swipe-only deck.
- Don't show desktop scrollbars inside the phone.
- Don't let detail sheets escape the phone frame.
- Don't use rounded radius beyond `{rounded.xl}` on cards.
- Don't introduce dark cards in the app feed.
- Don't use one-off colors unless they become documented tokens.
- Don't add hover states to the spec; document default and active/pressed states only.

## Responsive Behavior

### Breakpoints

| Name | Width | Key Changes |
|---|---|---|
| Mobile | < 768px | Full-screen app shell; phone chrome disappears; feed remains 1-up; buttons stay 2-column |
| Tablet | 768-1024px | Preview/catalog grids become 2-up; app can remain phone-framed |
| Desktop | 1024-1440px | Phone frame centered in app shell; preview catalogs use 3-up grids |
| Wide | > 1440px | Content width caps around 1120-1200px; extra room becomes outer breathing space |

### Touch Targets

- `{component.button-primary}` at minimum 40 x 40px.
- Discover card Skip / Apply buttons are 44px minimum height.
- Icon-only bookmark/settings controls should be at least 34px visible size, with sufficient surrounding tap space.
- `{component.text-input}` height is 40px.
- Bottom nav items use the full nav cell as tap target.

### Collapsing Strategy

- On mobile, the phone frame becomes the viewport; borders and outer shadow are removed.
- Discover remains a single-column ranked feed at every breakpoint.
- Detail sheet remains in-app and full-screen within `.app-screen`.
- Preview/catalog grids reduce columns rather than scaling cards below readable sizes.
- Button rows remain two-column unless copy no longer fits; then buttons may stack.

### Scroll Behavior

- `.content` and `.detail-body` can scroll.
- Scrollbars are hidden inside `.phone`.
- Fixed bottom nav and detail-sheet action footer must not scroll away.

### Image / Product Fragment Behavior

- Product UI fragments retain legible proportions.
- Company logos stay rounded-square and do not stretch.
- Score rings stay circular.
- Avatar photos or initials crop to circles.

## Iteration Guide

1. Focus on one component at a time. Reference its YAML key directly, e.g. `{component.job-card}` or `{component.detail-sheet}`.
2. Variants of an existing component (`-active`, `-disabled`, `-focused`) live as separate entries in `components:`.
3. Use `{token.refs}` everywhere in docs and CSS variables from `public/design-system.css` in implementation.
4. Never document hover. Default and active/pressed states only.
5. Display headlines stay Cal Sans semantics / Manrope substitute at 600 with negative letter-spacing. Body stays Inter.
6. The dark surface is scarce. Do not add dark cards casually.
7. For app decisions, make the primary next step obvious before making the card decorative.
8. When in doubt about emphasis: improve hierarchy and spacing before adding color.
9. Update `/preview.html` and `/preview-dark.html` when adding a new reusable component.
10. After UI changes, run `npm run build` and redeploy to Netlify.

## Preview Files

- `/preview.html`: Light design-system catalog.
- `/preview-dark.html`: Dark-surface catalog for contrast checking.
- `public/design-system.css`: Shared token and catalog component CSS.

## Known Gaps

- Cal Sans is licensed to Cal.com and not available as a bundled public web font; FitRole uses Manrope as the local display substitute.
- The app currently uses static mock job data. Real ATS/job-board integrations may require additional states for expired, promoted, hidden, or duplicate roles.
- Match scoring is visual/mock logic only; production scoring may require more semantic score categories and explanation states.
- Form validation states beyond focused text input are not fully specified.
- Dark mode for the core app is not specified. `preview-dark.html` is a dark-surface catalog, not an app dark-mode mandate.
- Animation timings for detail-sheet transitions, toast entrance, and save/apply feedback are not yet specified.
- Accessibility color contrast should be rechecked when adding any new semantic color.
- The preview catalogs are static HTML; they should be manually kept aligned with React components until a generated catalog exists.
