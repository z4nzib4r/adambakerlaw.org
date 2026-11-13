// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.adambakerlaw.org',
  trailingSlash: 'ignore',
  // Preserve old URLs from the previous site
  redirects: {
    '/location': '/contact-me/#location',
    '/sitemap': '/',
  },
});
