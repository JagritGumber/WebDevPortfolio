import { defineConfig, presetIcons, presetWebFonts, presetWind4 } from "unocss";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
        property: false,
      },
      dark: "class",
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        handwriting: "Style Script",
        sans: "Poppins",
      },
    }),
    presetIcons(),
  ],
  theme: {
    colors: {
      background: "var(--background)",
      primary: "var(--primary)",
      border: "var(--border)",
      foreground: "var(--foreground)",
      secondary: "var(--secondary)",
      "primary-foreground": "var(--primary-foreground)",
      "secondary-foreground": "var(--secondary-foreground)",
      "muted-foreground": "var(--muted-foreground)",
      "muted-background": "var(--muted-background)",
    },
  },
});
