import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [tsConfigPaths(), tanstackStart()],
});
