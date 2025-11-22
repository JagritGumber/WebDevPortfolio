import presetWind4 from "@unocss/preset-wind4";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
        property: false,
      },
    }),
  ],
  rules: [["border-border", { "border-color": "var(--border)" }]],
});
