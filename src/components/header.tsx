"use client";

import Link from "next/link";
import { useScroll } from "@/hooks/use-scroll";
import { useModalStore } from "@/lib/modal-store";
import { cn } from "@/lib/utils";
import { ThemeToggleButton } from "./theme-toggle-button";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
] as const;

export function Header() {
  const scrolled = useScroll(10);
  const modalOpen = useModalStore((s) => s.count > 0);
  const compact = scrolled || modalOpen;

  return (
    <header
      className={cn(
        "sticky top-0 z-50 mx-auto max-w-6xl w-full border-b border-transparent md:rounded-full md:border md:transition-all md:duration-300 md:ease-out",
        {
          "bg-background/90 backdrop-blur-md border-border md:top-4 md:max-w-3xl md:shadow":
            compact,
        }
      )}
    >
      <nav className="flex h-14 w-full items-center justify-between px-8 md:h-16 md:transition-all md:ease-out border-none">
        <Link href="/" className="text-2xl font-handwriting text-foreground">
          Jagrit
        </Link>
        <div className="flex items-center gap-4 sm:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggleButton />
        </div>
      </nav>
    </header>
  );
}
