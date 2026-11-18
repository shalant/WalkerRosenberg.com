# WalkerRosenberg.com

Walker's website, built with him. Astro, hosted on GitHub Pages at https://shalant.github.io/WalkerRosenberg.com/.

## Status (2026-11-17)

- Added: Astro project, GitHub Pages deploy workflow (`.github/workflows/deploy.yml`), and a placeholder home page.
- Added: Claude Artifact with 5 layout options (dark Geometry Dash look, teal primary, coral accents) for Walker to choose from. Saved in `ui-lab/artifacts/WalkerRosenberg.com/`.
- Open: Walker picks a layout; then build it in `src/pages/index.astro`.
- Open: topics to feature are Geometry Dash, soccer, basketball, Chicago Bears, and food. Nothing else is confirmed, so don't invent facts about him.
- Open: add the site to `career-development/docs/SITE_OPS_REGISTRY.md` at launch.

## Run it

```
npm install
npm run dev      # http://localhost:4321/WalkerRosenberg.com
npm run build    # output in dist/
```

## Deploy

Pushing to `main` runs the workflow and publishes `dist/`. Pages Source is set to "GitHub Actions".
