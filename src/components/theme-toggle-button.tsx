"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const currentTheme =
      document.body?.getAttribute("data-theme") ??
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(currentTheme);
    document.body?.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const root = document.body;
    if (!root) {
      return;
    }
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "light") {
      root.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      root.setAttribute("data-theme", "light");
      setTheme("light");
    }
  };

  if (!mounted) {
    return (
      <Button
        size={"icon"}
        variant={"outline"}
        className="p-2 text-foreground aspect-square hover:bg-primary"
      >
        <Icon icon="bxs:moon" className="size-6" />
      </Button>
    );
  }

  return (
    <Button
      size={"icon"}
      variant={"outline"}
      className="p-2 text-foreground aspect-square hover:bg-primary"
      onClick={toggleTheme}
    >
      <Icon 
        icon={theme === "light" ? "bxs:moon" : "bxs:sun"} 
        className="size-6" 
      />
    </Button>
  );
};
