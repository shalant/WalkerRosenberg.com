# WalkerRosenberg.com

Walker's website, built with him. Astro, hosted on GitHub Pages at https://shalant.github.io/WalkerRosenberg.com/.

## Status (2026-11-17)

- Added: Astro project, GitHub Pages deploy workflow (`.github/workflows/deploy.yml`), and a placeholder home page.
- Added: Claude Artifact with 5 layout options (dark Geometry Dash look, teal primary, coral accents) for Walker to choose from. Saved in `ui-lab/artifacts/WalkerRosenberg.com/`.
- Added (2026-11-17): first build of the "The Run" layout (the pick for the first version) in `src/pages/index.astro` on branch `build-the-run`. A sideways-scrolling level: a teal cube runs along a floor and hops spikes as you scroll; one panel per topic. Panel text is placeholder (`???`); Walker fills in real favorites.
- Open: not yet viewed in a browser (the Chrome tool couldn't reach the local server). Build passes; look at it with `npm run dev` before showing Walker.
- Open: confirm Walker likes The Run; the other four layouts are in the artifact if he changes his mind.
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
