# Project Guidelines

## Deployment (CRITICAL)

This is a **GitHub Pages** site served directly from the repository root (`/`).
The Angular build output in `dist/` must be copied to the root after every build.

**After ANY code change, ALWAYS run:**

```bash
npm run deploy
```

This executes `node scripts/bump-version.js && ng build && cp -a dist/. .` — bumping the version, building for production, and copying the output to the repo root so GitHub Pages serves the latest version.

**Never skip this step.** If you modified any file under `src/`, you must run `npm run deploy` before the session ends.

### Version numbering

Every deploy auto-increments the version badge displayed on every page.
- Source of truth: `src/version.ts` — exports `APP_VERSION` string
- Format: `Ver.YYYY.MM.DD.N` (N resets to 1 on each new day, increments within the same day)
- `scripts/bump-version.js` updates `src/version.ts` before each build
- The `<app-version-badge>` component (in `src/app/shared/components/version-badge/`) reads this value and renders it fixed to the bottom-right of every page via `app.ts`

## Tech Stack

- Angular 21 (standalone components, SCSS)
- Vitest for testing
- GitHub Pages deployment from repo root (not `dist/`)

## Project Structure

- `src/` — Angular source code
- `src/app/features/books/` — 66 Bible book pages (one `.ts` + `.html` + `.scss` per book)
- `src/app/shared/components/` — Shared UI components (`scene-verse`, `scene-heading`, etc.)
- `dist/` — Build output (intermediate, copied to root by deploy)
- Root `.js`, `.css`, `.html` files — Production build artifacts served by GitHub Pages

## Conventions

- Every `<section class="scene">` must contain an `<app-scene-verse>` component
- Scene IDs in HTML must match those declared in the corresponding `.ts` file
- Chinese (Traditional) is the primary UI language
