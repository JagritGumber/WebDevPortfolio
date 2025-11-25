import { Icon } from "@iconify/react";

const socials = [
  {
    name: "GitHub",
    icon: "simple-icons:github",
    link: "https://github.com/JagritGumber",
  },
  {
    name: "X (Formerly Twitter)",
    icon: "simple-icons:x",
    link: "https://x.com/Jagrit_Gumber",
  },
  {
    name: "Mail",
    icon: "simple-icons:gmail",
    link: "mailto:gumberjagrit@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: "simple-icons:linkedin",
    link: "https://www.linkedin.com/in/jagrit-gumber-2841a52a9",
  },
] as const;

export const Connect = () => {
  return (
    <section aria-label="Connect" className="p-4 lg:p-8 flex flex-col">
      <h2 className="font-serif text-3xl text-foreground">Work Together?</h2>
      <span className="text-muted-foreground">
        Connect with me in any of your preferred way, and let's work together to
        build something great!
      </span>

      <div className="flex gap-4 pt-8">
        {socials.map(({ name, link, icon }, idx) => (
          <a
            href={link}
            target={link.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            // biome-ignore lint/suspicious/noArrayIndexKey: Static list, index can be used
            key={idx}
            aria-label={name}
          >
            <Icon icon={icon} className="size-6 text-foreground" />
          </a>
        ))}
      </div>
    </section>
  );
};
