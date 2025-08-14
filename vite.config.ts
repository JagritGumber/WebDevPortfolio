import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), tanstackStart({
    target: "cloudflare-module"
  })],
});
