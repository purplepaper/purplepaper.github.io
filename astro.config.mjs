import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.sahoism.com',
  trailingSlash: 'always',
  integrations: [
    // Leave the old Jekyll URLs, which only redirect, out of the sitemap.
    sitemap({ filter: (page) => !/\/\d{4}\/\d{2}\/\d{2}\//.test(page) }),
  ],
});
