import { cn } from "@/lib/utils";

const socials = [
  {
    name: "GitHub",
    icon: "i-simple-icons:github",
    link: "https://github.com/JagritGumber",
  },
  {
    name: "X (Formerly Twitter)",
    icon: "i-simple-icons:x",
    link: "https://x.com/Jagrit_Gumber",
  },
  {
    name: "Mail",
    icon: "i-simple-icons:gmail",
    link: "mailto:gumberjagrit@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "i-simple-icons:linkedin",
    link: "https://www.linkedin.com/in/jagrit-gumber-2841a52a9",
  },
] as const;

export const Profile = () => {
  return (
    <section
      aria-label="Profile Section"
      className="flex flex-col sm:flex-row gap-4 relative p-4 lg:p-8"
    >
      <div className="flex justify-between sm:contents">
        <img
          src="/profile-pic.jpg"
          alt="Jagrit Gumber"
          className="w-32 h-32 rounded-md"
        />
        <OpenToWorkBadge className="sm:hidden" />
      </div>

      <div className="flex flex-col py-2">
        <h1 className="text-4xl font-handwriting text-foreground flex gap-2">
          Jagrit Gumber <span className="i-bxs:badge-check text-primary" />
        </h1>
        <span className="text-md text-muted-foreground">
          20 - Full Stack Engineer - Polyglot
        </span>
      </div>
      <div className="ml-auto justify-between flex flex-col gap-4">
        <OpenToWorkBadge className="hidden sm:flex" />
        <div className="flex gap-4">
          {socials.map(({ name, link, icon }, idx) => (
            <a
              href={link}
              target={link.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              // biome-ignore lint/suspicious/noArrayIndexKey: Static list, index can be used
              key={idx}
              aria-label={name}
            >
              <div className={cn(icon, "size-6")} />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

const OpenToWorkBadge = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  return (
    <div
      className={cn(
        "bg-muted-background ml-auto rounded-full text-sm w-fit h-fit mb-auto px-4 py-2 border border-border flex gap-3 items-center",
        className,
      )}
      {...props}
    >
      Open to Work
      <div tabIndex={-1} className="size-3 bg-secondary rounded-full" />
    </div>
  );
};
