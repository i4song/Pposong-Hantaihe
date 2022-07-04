import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { adorableCSS } from "adorable-css/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte(), adorableCSS()],
});