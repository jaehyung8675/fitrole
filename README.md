# FitRole

FitRole is a mobile-first React prototype for AI-assisted job matching. It presents recommended jobs in a ranked discovery feed, explains the fit score, and lets users save jobs or track applications.

## Mobile UI Rules

- Treat `/preview.html` as the base design-system catalog. App styling should use the same tokens, component states, and interaction grammar unless a mobile constraint requires a narrower variant.
- The phone frame is the app boundary; overlays and sheets should stay inside `.phone` / `.app-screen`.
- Scrollable mobile surfaces should support touch or wheel scrolling without visible desktop scrollbars.
- Bottom navigation and sheet actions should remain fixed while the main content area scrolls.
- Discover uses a scrollable ranked feed, not stacked cards, so users can compare all visible opportunities before acting.
- In Discover, Save toggles a job into Saved, Apply adds it to Applications while keeping it visible with an Applied badge, and Skip removes it from the feed with an Undo option.
- UI changes should follow [design.md](./design.md), use shared tokens/components from [public/design-system.css](./public/design-system.css), and keep [public/preview.html](./public/preview.html) and [public/preview-dark.html](./public/preview-dark.html) aligned when reusable components change.

## Design Previews

- `/preview.html` shows the light design-system catalog.
- `/preview-dark.html` shows the dark-surface catalog.
- `src/styles.css` imports the shared design-system layer and adapts it to the phone-framed app.

## Scripts

- `npm run dev -- --port 5176`
- `npm run build`
