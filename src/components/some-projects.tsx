import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import {
  ProjectShowcase,
  type ProjectWithImage,
} from "./project-showcase";

export const SomeProjects = ({ projects }: { projects: ProjectWithImage[] }) => {
  const featured = projects.slice(0, 3);
  const remaining = projects.length - featured.length;

  return (
    <section aria-label="Some Projects" className="pt-4 lg:pt-8 flex flex-col">
      <div className="px-4 lg:px-8 mb-4 flex items-end justify-between gap-4">
        <div>
          <h2 className="font-serif text-3xl text-foreground">
            Some Cool Projects
          </h2>
          <span className="text-muted-foreground">
            I&apos;ve more cool things in store these are just a few
          </span>
        </div>
        {remaining > 0 && (
          <Link
            href="/projects"
            className="text-muted-foreground hover:text-foreground transition-colors text-sm whitespace-nowrap inline-flex items-center gap-1"
          >
            View {remaining} more
            <Icon icon="bxs:right-arrow" className="size-3" />
          </Link>
        )}
      </div>
      {featured.length === 0 ? (
        <p className="text-muted-foreground text-center py-12 px-4">
          No projects yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3">
          {featured.map((project, i) => (
            <div
              key={project._id}
              className={cn(
                "border-dotted border-border",
                i > 0 && "border-t md:border-t-0",
                i > 0 && "md:border-l"
              )}
            >
              <ProjectShowcase project={project} />
            </div>
          ))}
        </div>
      )}
    </section>
  );
};
