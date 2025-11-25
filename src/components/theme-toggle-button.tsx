import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState(
    document.body?.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"),
  );
  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="p-2 text-foreground aspect-square hover:bg-primary"
      onClick={() => {
        const root = document.body;
        if (!root) {
          return;
        }
        const theme = root.getAttribute("data-theme");

        if (theme === "light") {
          root.setAttribute("data-theme", "dark");
          setTheme("dark");
        } else {
          root.setAttribute("data-theme", "light");
          setTheme("light");
        }
      }}
    >
      <span className={cn(theme === "light" ? "i-bxs:moon" : "i-bxs:sun")} />
    </Button>
  );
};
