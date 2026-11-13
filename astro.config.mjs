// @ts-check
import { defineConfig } from 'astro/config';

// SITE / BASE_PATH are set by the GitHub Pages workflow. Locally (and on a custom
// domain) the site is served from the root.
const site = process.env.SITE ?? 'https://www.adambakerlaw.org';
const base = process.env.BASE_PATH ?? '/';
const withBase = (/** @type {string} */ p) => base.replace(/\/$/, '') + p;

// https://astro.build/config
export default defineConfig({
  site,
  base,
  trailingSlash: 'ignore',
  // Preserve old URLs from the previous site
  redirects: {
    '/location': withBase('/contact-me/#location'),
    '/sitemap': withBase('/'),
  },
});
