import { cn } from "@/lib/utils";

const socialItems = [
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
      className="flex flex-col sm:flex-row gap-4 relative"
    >
      <img
        src="/profile-pic.jpg"
        alt="Jagrit Gumber"
        className="w-32 h-32 rounded-md"
      />
      <div className="flex flex-col gap-2 py-2">
        <span className="text-4xl font-handwriting text-foreground flex gap-2">
          Jagrit Gumber <span className="i-bxs:badge-check text-primary" />
        </span>
        <span className="text-md text-muted-foreground">
          20 - Full Stack Engineer - Polyglot
        </span>
      </div>
      <div className="absolute right-0 top-0 sm:ml-auto sm:mt-auto flex gap-4 sm:static">
        {socialItems.map(({ name, link, icon }, idx) => (
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
    </section>
  );
};
