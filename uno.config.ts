import { defineConfig, presetIcons, presetWebFonts, presetWind4 } from "unocss";
import { presetAnimations } from "unocss-preset-animations";

export default defineConfig({
  presets: [
    presetWind4({
      preflights: {
        reset: true,
        property: false,
      },
      dark: "class",
    }),
    presetIcons({
      autoInstall: true,
      iconifyCollectionsNames: ["simple-icons", "bxs"],
    }),
    presetWebFonts({
      provider: "google",
      fonts: {
        handwriting: "Ovo",
        sans: "Poppins",
        serif: "Ovo",
      },
    }),
    presetAnimations(),
  ],
  theme: {
    colors: {
      border: "var(--border)",
      background: "var(--background)",
      "muted-background": "var(--muted-background)",
      foreground: "var(--foreground)",
      "muted-foreground": "var(--muted-foreground)",
      primary: "var(--primary)",
      "primary-foreground": "var(--primary-foreground)",
      secondary: "var(--secondary)",
      "secondary-foreground": "var(--secondary-foreground)",
      accent: "var(--accent)",
      "accent-foreground": "var(--accent-foreground)",
      tertiary: "var(--tertiary)",
      "tertiary-foreground": "var(--tertiary-foreground)",
    },
    animation: {
      keyframes: {
        marquee:
          "{0%{transform:translateX(-50%)}100%{transform:translateX(0%)}}",
        "marquee-reverse":
          "{0%{transform:translateX(0%)}100%{transform:translateX(-50%)}}",
      },
      counts: {
        marquee: "infinite",
        "marquee-reverse": "infinite",
      },
      durations: {
        marquee: "40s",
        "marquee-reverse": "40s",
      },
      timingFns: {
        marquee: "linear",
        "marquee-reverse": "linear",
      },
    },
  },
});
