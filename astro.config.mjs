import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  site: "https://erinmurphy.dev",
  integrations: [sitemap(), mdx()],
  markdown: {
    shikiConfig: {
      theme: "css-variables",
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
