import adapter from "@sveltejs/adapter-static";
import preprocess from "svelte-preprocess";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: preprocess(),

  kit: {
    adapter: adapter({
      pages: "dist",
      assets: "dist",
    }),

    prerender: {
      crawl: true,
      enabled: true,
      default: true,
    },

    // Override http methods in the Todo forms
    methodOverride: {
      allowed: ["PATCH", "DELETE"],
    },
  },
};

export default config;
