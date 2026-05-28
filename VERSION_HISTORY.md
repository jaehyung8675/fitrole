# Version History

FitRole keeps case-study milestones in three places:

- `VERSION_HISTORY.md` for the story, dates, deploy links, and notes.
- Local Git commits/tags for source-code checkpoints.
- Netlify immutable deploy URLs or deploy aliases for browser-reviewable versions.

No code is pushed unless explicitly requested.

## v0.1 - First Mobile Prototype

Date: 2026-05-25

Status: Production deploy preserved

Netlify production URL: https://fitrole.netlify.app

Immutable deploy URL: https://6a1528d09b12b60e6d829d18--fitrole.netlify.app

Notes:
- Mobile-first FitRole prototype with onboarding, job discovery, saved roles, applications, and profile.
- Design system based on the local `preview.html` and `preview-dark.html` catalogs.
- iPhone chrome, sticky screen heading, bottom navigation, and mobile scrollbar hiding.

## v0.2 - Discover Carousel Decisions

Date: 2026-05-27

Status: Production deploy preserved

Netlify production URL: https://fitrole.netlify.app

Immutable deploy URL: https://6a17bd5038d26a0c2ea95cde--fitrole.netlify.app

Named version URL: https://v0-2-discover-carousel--fitrole.netlify.app

Notes:
- Discover changed from a scrolling list to a one-card carousel.
- Next card peeks from the right so users know another job is ready.
- Progress bar shows current position and resizes by remaining job count.
- Save and Skip actions live inside the job card.
- Saved and skipped jobs leave Discover.
- Upward drag on the active job card opens the detail sheet.
- When Discover is clear, a completion card points the user to Saved.
