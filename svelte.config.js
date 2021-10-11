/** @type {import('@sveltejs/kit').Config} */
import netlify from "@sveltejs/adapter-netlify"
import preprocess from "svelte-preprocess"

export default {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",
    adapter: netlify(),
  },
  preprocess: preprocess(),
}
