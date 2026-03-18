// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://co2-steuer-rechner-fuer-heizung.de',
  integrations: [
    tailwind(),
    sitemap(),
  ],
});
