"use client";

import { useState } from "react";
import Image from "next/image";
import { ProjectShowcaseModal } from "./ui/project-showcase-modal";
import { PortableText } from "./portable-text";
import { Button } from "./ui/button";
import type { ProjectSummary } from "@/sanity/lib/queries";

export type ProjectWithImage = ProjectSummary & { imageUrl: string | null };

export const ProjectShowcase = ({ project }: { project: ProjectWithImage }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col bg-muted-background rounded-md overflow-hidden border border-border">
      {project.imageUrl && (
        <div className="relative aspect-video">
          <Image
            src={project.imageUrl}
            alt={project.title ?? ""}
            className="object-cover"
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        </div>
      )}
      <div className="p-4 flex-1 flex flex-col">
        <span className="text-2xl text-foreground font-serif block">
          {project.title}
        </span>
        <span className="text-muted-foreground block">
          {project.description}
        </span>
        <div className="mt-auto pt-4 flex justify-end">
          <Button onClick={() => setOpen(true)}>View More</Button>
        </div>
      </div>

      <ProjectShowcaseModal
        open={open}
        onClose={() => setOpen(false)}
        title={<h1 className="text-3xl font-serif">{project.title}</h1>}
        body={<ProjectShowcaseBody project={project} />}
      />
    </div>
  );
};

const ProjectShowcaseBody = ({ project }: { project: ProjectWithImage }) => (
  <div className="mt-4 flex flex-col gap-4 text-align-justify relative">
    {project.ytLink ? (
      <iframe
        width="100%"
        className="aspect-video rounded-md"
        src={project.ytLink}
        title={`${project.title} Youtube Video`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    ) : project.imageUrl ? (
      <div className="relative w-full aspect-video rounded-md overflow-hidden">
        <Image
          alt={`${project.title} Image`}
          src={project.imageUrl}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 896px"
        />
      </div>
    ) : null}
    {project.body && project.body.length > 0 && (
      <Section title="Description">
        <div className="text-muted-foreground leading-relaxed">
          <PortableText value={project.body} />
        </div>
      </Section>
    )}
    {project.tags && project.tags.length > 0 && (
      <Section title="Technologies Used">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted-background border border-border text-foreground text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </Section>
    )}
    {project.links && project.links.length > 0 && (
      <Section title="Links">
        <div className="flex flex-wrap gap-2">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-foreground text-background hover:bg-foreground/90 transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Section>
    )}
  </div>
);

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div>
    <h3 className="text-lg font-semibold text-foreground mb-2">{title}</h3>
    {children}
  </div>
);
