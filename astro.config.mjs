import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://blog.sahoism.com',
  trailingSlash: 'always',
  integrations: [sitemap()],
});
