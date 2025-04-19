// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [react()],

  //  This uses the @astrojs/node adapter, which is required to deploy your app using Node.js for SSR.
  adapter: node({
    mode: "standalone", // <--------- tells Astro to bundle everything into a single executable. This is ideal if you're deploying to a custom server or using platforms like Heroku or DigitalOcean.
  }),
});
