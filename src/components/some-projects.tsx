import Link from "next/link";
import { Icon } from "@iconify/react";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";
import {
  ProjectShowcase,
  type ProjectWithImage,
} from "./project-showcase";

export const SomeProjects = ({ projects }: { projects: ProjectWithImage[] }) => {
  const remaining = projects.length - 3;

  return (
    <section aria-label="Some Projects" className="p-4 lg:p-8 flex flex-col">
      <h2 className="font-serif text-3xl text-foreground">Some Cool Projects</h2>
      <span className="text-muted-foreground mb-4">
        I&apos;ve more cool things in store these are just a few
      </span>
      {projects.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">
          No projects yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project) => (
            <ProjectShowcase key={project._id} project={project} />
          ))}
        </div>
      )}
      {remaining > 0 && (
        <Link
          href="/projects"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-muted-foreground mt-4 block text-align-right"
          )}
        >
          View {remaining} more project{remaining === 1 ? "" : "s"}{" "}
          <Icon icon="bxs:right-arrow" className="size-6 inline" />
        </Link>
      )}
    </section>
  );
};
