"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps, buttonVariants } from "./ui/button";
import { ProjectShowcaseModal } from "./ui/project-showcase-modal";
import { Icon } from "@iconify/react";
import { PortableText } from "./portable-text";
import type { ProjectSummary } from "@/sanity/lib/queries";

type ProjectWithImage = ProjectSummary & { imageUrl: string | null };

export const SomeProjects = ({
  projects,
}: {
  projects: ProjectWithImage[];
}) => {
  return (
    <section aria-label="Some Projects" className="p-4 lg:p-8 flex flex-col">
      <h2 className="font-serif text-3xl text-foreground">
        Some Cool Projects
      </h2>
      <span className="text-muted-foreground mb-4">
        I've more cool things in store these are just a few
      </span>
      {projects.length === 0 ? (
        <p className="text-muted-foreground text-center py-12">
          No projects yet. Check back soon.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {projects.slice(0, 3).map((project) => (
            <div
              key={project._id}
              className="flex flex-col bg-muted-background rounded-md overflow-hidden border border-border"
            >
              {project.imageUrl && (
                <div className="relative aspect-video">
                  <img
                    src={project.imageUrl}
                    alt={project.title ?? ""}
                    className="object-cover w-full h-full"
                  />
                </div>
              )}
              <div className="content p-4">
                <span className="text-2xl text-foreground font-serif block">
                  {project.title}
                </span>
                <span className="text-muted-foreground block">
                  {project.description}
                </span>
              </div>

              <div className="flex mt-auto justify-end px-4 pb-4">
                <ProjectShowcaseModalButton
                  title={
                    <h1 className="text-3xl font-serif">{project.title}</h1>
                  }
                  body={
                    <div className="modal-body mt-4 flex flex-col gap-4 text-align-justify relative">
                      {project.imageUrl && (
                        <div className="relative w-full aspect-video rounded-md overflow-hidden">
                          <img
                            alt={`${project.title} Image`}
                            src={project.imageUrl}
                            className="w-full aspect-video h-fit object-cover"
                          />
                        </div>
                      )}

                      <div className="flex flex-col gap-3">
                        {project.body && project.body.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              Description
                            </h3>
                            <div className="text-muted-foreground leading-relaxed">
                              <PortableText value={project.body} />
                            </div>
                          </div>
                        )}

                        {project.tags && project.tags.length > 0 && (
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              Technologies Used
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted-background border border-border text-foreground text-sm font-medium hover:bg-primary/10 hover:border-primary transition-colors"
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}

                        {(project.repoUrl || project.projectUrl) && (
                          <div>
                            <h3 className="text-lg font-semibold text-foreground mb-2">
                              Links
                            </h3>
                            <div className="flex flex-wrap gap-2">
                              {project.repoUrl && (
                                <a
                                  href={project.repoUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
                                >
                                  <Icon
                                    icon="simple-icons:github"
                                    className="size-5"
                                  />
                                  GitHub
                                </a>
                              )}
                              {project.projectUrl && (
                                <a
                                  href={project.projectUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                                >
                                  <Icon
                                    icon="fa:paperclip"
                                    className="size-5"
                                  />
                                  View Live
                                </a>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  }
                >
                  View More
                </ProjectShowcaseModalButton>
              </div>
            </div>
          ))}
        </div>
      )}
      {projects.length - 3 <= 0 ? (
        <div className="mb-2" />
      ) : (
        <a
          href="/projects"
          className={cn(
            buttonVariants({ variant: "link" }),
            "text-muted-foreground mt-4 block text-align-right"
          )}
        >
          View {projects.length - 3} more projects{" "}
          <Icon icon="bxs:right-arrow" className="size-6 inline" />
        </a>
      )}
    </section>
  );
};

const ProjectShowcaseModalButton = ({
  onClick,
  title,
  body,
  ...props
}: Omit<ButtonProps, "onClick" | "title" | "body"> & {
  onClick?: (open: boolean) => void;
  title: React.JSX.Element;
  body: React.JSX.Element;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        {...props}
        onClick={() => {
          if (open) {
            setOpen(false);
            onClick?.(false);
          } else {
            setOpen(true);
            onClick?.(true);
          }
        }}
      />
      <ProjectShowcaseModal
        open={open}
        onClose={() => setOpen(false)}
        title={title}
        body={body}
      />
    </>
  );
};
