import { socials } from "@/data/socials";
import { cn } from "@/lib/utils";

export const Connect = () => {
  return (
    <section aria-label="Connect" className="px-4 flex flex-col">
      <h2 className="font-serif text-3xl text-foreground">
        Not a mail person?
      </h2>
      <span className="text-muted-foreground">
        Connect with me on your preferred platform
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
            <div className={cn(icon, "size-6")} />
          </a>
        ))}
      </div>
    </section>
  );
};
