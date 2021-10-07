/** @type {import('@sveltejs/kit').Config} */
import adapter from "@sveltejs/adapter-netlify"
import preprocess from "svelte-preprocess"

const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: adapter(),
  },
}

export default {
  config,
  preprocess: preprocess(),
}
