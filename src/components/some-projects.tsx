import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { buttonVariants } from "./ui/button";

export const SomeProjects = () => {
  return (
    <section aria-label="Some Projects" className="p-4 lg:p-8 flex flex-col">
      <h2 className="font-serif text-3xl text-foreground">
        Some Cool Projects
      </h2>
      <span className="text-muted-foreground mb-4">
        I've more cool things in store these are just a few
      </span>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {projects.slice(0, 3).map((project, idx) => (
          <div
            // biome-ignore lint/suspicious/noArrayIndexKey: Static list
            key={idx}
            className="flex flex-col bg-muted-background rounded-md overflow-hidden border border-border"
          >
            <img
              src={project.imgSrc}
              alt={project.name}
              className="aspect-[16/9] cover"
            />
            <div className="content p-4">
              <span className="text-2xl text-foreground font-serif block">
                {project.name}
              </span>
              <span className="text-muted-foreground block">
                {project.desc}
              </span>
            </div>
          </div>
        ))}
      </div>
      {projects.length - 3 <= 0 ? (
        <div className="mb-2" />
      ) : (
        <a
          href="/projects"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-muted-foreground mt-4 block text-align-right",
          )}
        >
          View {projects.length - 3} more projects{" "}
          <span className="i-bxs:right-arrow size-6" />
        </a>
      )}
    </section>
  );
};
