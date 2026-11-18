// @ts-check
import { defineConfig } from 'astro/config';

// GitHub Pages project site: https://shalant.github.io/WalkerRosenberg.com/
// If we later point a custom domain at the site, delete `base`, set `site`
// to the custom domain, and add public/CNAME.
export default defineConfig({
  site: 'https://shalant.github.io',
  base: '/WalkerRosenberg.com',
});
