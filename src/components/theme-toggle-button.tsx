"use client";

import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { Icon } from "@iconify/react";

export const ThemeToggleButton = () => {
  const [theme, setTheme] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const storedTheme = localStorage.getItem("theme");
    const currentTheme =
      storedTheme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
    if (!storedTheme) {
      localStorage.setItem("theme", currentTheme);
    }
  }, []);

  const toggleTheme = () => {
    const html = document.documentElement;
    if (!html) {
      return;
    }
    const currentTheme = html.getAttribute("data-theme") || "light";
    const newTheme = currentTheme === "light" ? "dark" : "light";

    if (!document.startViewTransition) {
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
      return;
    }

    const transition = document.startViewTransition(() => {
      html.setAttribute("data-theme", newTheme);
      localStorage.setItem("theme", newTheme);
      setTheme(newTheme);
    });
  };

  if (!mounted) {
    return (
      <Button
        size={"icon"}
        variant={"outline"}
        className="p-2 text-foreground aspect-square hover:bg-primary"
      >
        <Icon icon="bxs:sun" className="size-6" />
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
