"use client"

import { useEffect, useState } from "react";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./theme-toggle-button";

export function Header() {
  const [open] = useState(false);
  const scrolled = useScroll(10);

  // const links = [
  //   {
  //     label: "Projects",
  //     href: "#",
  //   },
  // ] as const;

  useEffect(() => {
    if (open) {
      // Disable scroll
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll
      document.body.style.overflow = "";
    }

    // Cleanup when component unmounts (important for Next.js)
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto max-w-6xl w-full border-b border-transparent md:rounded-full md:border md:transition-all md:duration-300 md:ease-out",
        {
          "bg-background/90 backdrop-blur-md border-border md:top-4 md:max-w-3xl md:shadow":
            scrolled && !open,
          "bg-background/90": open,
        },
      )}
    >
      <nav
        className={cn(
          "flex h-14 w-full items-center justify-between px-8 md:h-16 md:transition-all md:ease-out border-none",
          {
            "md:px-8": scrolled,
          },
        )}
      >
        <span className="text-2xl font-handwriting text-foreground">
          Jagrit
        </span>
        <ThemeToggleButton />
      </nav>

      {/* <div
        className={cn(
          "bg-background/90 fixed top-14 right-0 bottom-0 left-0 z-50 flex flex-col overflow-hidden border-y md:hidden",
          open ? "block" : "hidden",
        )}
      >
        <div
          data-slot={open ? "open" : "closed"}
          className={cn(
            "data-[slot=open]:animate-in data-[slot=open]:zoom-in-95 data-[slot=closed]:animate-out data-[slot=closed]:zoom-out-95 ease-out",
            "flex h-full w-full flex-col justify-between gap-y-2 p-4",
          )}
        >
          <div className="grid gap-y-2">
            {links.map((link) => (
              <a
                key={link.label}
                className={buttonVariants({
                  variant: "ghost",
                  size: "lg",
                  className: "justify-start",
                })}
                href={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div> */}
    </header>
  );
}
