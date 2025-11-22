import { useEffect, useState } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import { MenuToggleIcon } from "@/components/ui/menu-toggle-icon";
import { useScroll } from "@/hooks/use-scroll";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const scrolled = useScroll(10);

  const links = [
    {
      label: "Projects",
      href: "#",
    },
  ] as const;

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
        "sticky top-0 z-50 mx-auto max-w-7xl w-full border-b border-transparent md:rounded-full md:border md:transition-all md:duration-300 md:ease-out",
        {
          "bg-background/95 backdrop-blur-md border-border md:top-4 md:max-w-3xl md:shadow":
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
        <span className="text-3xl font-handwriting text-foreground">
          Jagrit
        </span>
        <div className="hidden items-center gap-2 md:flex">
          {links.map((link, i) => (
            <a
              // biome-ignore lint/suspicious/noArrayIndexKey: The array is a static list of elements
              key={i}
              className={buttonVariants({ variant: "link" })}
              href={link.href}
            >
              {link.label}
            </a>
          ))}
          {/* <Button variant="outline">Sign In</Button> */}
        </div>
        <Button
          size="icon"
          variant="outline"
          onClick={() => setOpen(!open)}
          className="md:hidden"
        >
          <MenuToggleIcon open={open} className="size-5" duration={300} />
        </Button>
      </nav>

      <div
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
          <div className="flex flex-col gap-2">
            {/* <Button variant="outline" className="w-full">
              Sign In
            </Button>
            <Button className="w-full text-nowrap">Get Started</Button> */}
          </div>
        </div>
      </div>
    </header>
  );
}
