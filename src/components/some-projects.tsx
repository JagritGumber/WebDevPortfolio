"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps, buttonVariants } from "./ui/button";
import { ProjectShowcaseModal } from "./ui/project-showcase-modal";
import { Icon } from "@iconify/react";
import Image from "next/image";

const projects = [
  {
    name: "Particle System",
    imgSrc: "/particle-system-rs.png",
    imgHash: "data:image/png;base64,LNA^C600%Nxu^-IBxaoyM,%MM_V[",
    desc: "To learn Rust, I cooked in Rust",
    techUsed: [
      {
        name: "Rust",
        icon: "simple-icons:rust",
      },
    ],
    details: (
      <>
        <p className="mb-4">
          Sometimes the best way to learn isn't through tutorials. It's by
          jumping into something you're passionate about and figuring it out as
          you go.
        </p>
        <p className="mb-4">
          I didn't have the motivation to learn Rust the traditional way. Didn't
          know structs, ownership rules, or any of the "proper" stuff. So I did
          what I always do: <strong>learn by doing</strong>. I picked a project
          I was genuinely excited about. A simple particle system, and started building.
        </p>
        <p className="mb-4">
          Coming from a <strong>game development background</strong>, particle
          systems were something I'd used countless times. I knew how they
          should behave, how they should look. Building one from scratch in Rust
          meant I could focus on learning the language while working on
          something familiar.
        </p>
        <p className="mb-4">
          And it worked. As I built it, <strong>Rust concepts clicked</strong>—
          ownership, borrowing, lifetimes—all made sense in the context of
          actual code. Plus, it was a great way to refresh my game dev knowledge
          while picking up a new language.
        </p>
        <p className="italic">
          The particle system emits and animates particles just like you'd see
          in a game engine. Proof that passion projects are the best teachers.
        </p>
      </>
    ),
    github: "https://github.com/JagritGumber/particle_system_rs",
    xlink: "https://x.com/Jagrit_Gumber/status/1987193468142428305?s=20",
    ytLink: "https://www.youtube.com/embed/WlP2TUcT4nA?si=ys92uGnkTMY1MmL0",
  },
  {
    name: "ArtBox",
    imgHash: "data:image/png;base64,LHK1wN00MwNL.9r;o$Ri~q?bM{tR",
    imgSrc: "/artbox.png",
    desc: "A showcase of curated artwork",
    techUsed: [
      {
        name: "React",
        icon: "simple-icons:react",
      },
      {
        name: "JavaScript",
        icon: "simple-icons:javascript",
      },
      {
        name: "CSS3",
        icon: "simple-icons:css3",
      },
      {
        name: "Framer Motion",
        icon: "simple-icons:framer",
      },
      {
        name: "Cloudflare Pages",
        icon: "simple-icons:cloudflarepages",
      },
    ],
    details: (
      <>
        <p className="mb-4">
          You know those moments when you're staring at a blank canvas (or code
          editor) and your creative brain just... won't? That's what ArtBox is
          for.
        </p>
        <p className="mb-4">
          It's a <strong>curated gallery of stunning artwork</strong> I
          handpicked from Pixabay. It's full of vibrant colors, mesmerizing
          compositions, the kind of visual candy that makes you go "WOW." When
          you're not in the mood to create but need that spark of inspiration,
          this is your go-to.
        </p>
        <p className="mb-4">
          This was one of my <strong>first real web projects</strong> diving
          into React and JavaScript. I wanted to learn by building something
          beautiful, so I went all-in on animations with{" "}
          <strong>Framer Motion</strong> powered smooth transitions, elegant
          reveals, throughout the whole application. Every piece flows
          seamlessly as you browse.
        </p>
        <p className="mb-4">
          Perfect for <strong>color palette inspiration</strong>, composition
          ideas, or just taking a mental breather with something visually
          stunning. Sometimes you don't need to be productive, you just need to
          feed your eyes.
        </p>
        <p className="italic">
          Deployed on Cloudflare Pages because speed matters when beauty is the
          product.
        </p>
      </>
    ),
    github: "https://github.com/JagritGumber/ArtBox",
    webUrl: "https://artbox.jagritgumber.com",
  },
  {
    name: "Learnysvia",
    imgSrc: "/learnysvia.png",
    imgHash: "data:image/png;base64,L3S6GLXTTw$$?vw}I:n5~p}]M{Z%",
    desc: "Bridging the gap between teaching and understanding",
    techUsed: [
      {
        name: "React",
        icon: "simple-icons:react",
      },
      {
        name: "TypeScript",
        icon: "simple-icons:typescript",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        name: "Daisy UI",
        icon: "simple-icons:daisyui",
      },
      {
        name: "Elysia",
        icon: "simple-icons:firefox",
      },
    ],
    details: (
      <>
        <p className="mb-4">
          Ever been in a class where the teacher asks "Did everyone get it?" and
          you just hear silence? That's the problem Learnysvia solves.
        </p>
        <p className="mb-4">
          It's a <strong>real-time classroom polling tool</strong> that lets
          teachers check comprehension instantly, no more waiting until test day
          to discover gaps. Teachers create rooms in seconds, students join with
          a single link (no accounts needed!), and results stream in live.
        </p>
        <p className="mb-4">
          What makes this special is the <strong>complete anonymity</strong> for
          students, they can answer honestly without fear of judgment. I built
          this because I saw firsthand how traditional teaching misses real-time
          feedback.
        </p>
        <p className="mb-4">
          The tech stack? <strong>React + TypeScript</strong> for the frontend,{" "}
          <strong>Elysia.js</strong> backend with <strong>Bun runtime</strong>{" "}
          for blazing speed, <strong>Turso</strong> (distributed SQLite) for
          data, <strong>WebSockets</strong> for real-time magic, and{" "}
          <strong>DaisyUI</strong> for that clean interface.
        </p>
        <p>
          The whole setup takes under 2 minutes—teachers can focus on teaching,
          not tech.{" "}
          <span className="italic">
            Built for teachers, by someone who understands the classroom
            struggle.
          </span>
        </p>
      </>
    ),
    github: "https://github.com/JagritGumber/learnysvia",
  },
];

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
            <div className="relative aspect-video">
              <Image
                blurDataURL={project.imgHash}
                src={project.imgSrc}
                alt={project.name}
                className="object-cover"
                fill
              />
            </div>
            <div className="content p-4">
              <span className="text-2xl text-foreground font-serif block">
                {project.name}
              </span>
              <span className="text-muted-foreground block">
                {project.desc}
              </span>
            </div>

            <div className="flex mt-auto justify-end px-4 pb-4">
              <ProjectShowcaseModalButton
                title={<h1 className="text-3xl font-serif">{project.name}</h1>}
                body={
                  <div className="modal-body mt-4 flex flex-col gap-4 text-align-justify relative">
                    {project.ytLink ? (
                      <iframe
                        width="100%"
                        className="aspect-video rounded-md"
                        src={project.ytLink}
                        title={`${project.name} Youtube Video`}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    ) : (
                      <div className="relative w-full aspect-video rounded-md overflow-hidden">
                        <Image
                          alt={project.name + " Image"}
                          src={project.imgSrc}
                          blurDataURL={project.imgHash}
                          fill
                          className="w-full aspect-video h-fit object-cover"
                        />
                      </div>
                    )}

                    <div className="flex flex-col gap-3">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Description
                        </h3>
                        <div className="text-muted-foreground leading-relaxed">
                          {project.details || project.desc}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          Technologies Used
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.techUsed.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-muted-background border border-border text-foreground text-sm font-medium hover:bg-primary/10 hover:border-primary transition-colors"
                            >
                              <Icon icon={tech.icon} className="size-4" />
                              {tech.name}
                            </span>
                          ))}
                        </div>
                      </div>

                      {(project.github || project.xlink) && (
                        <div>
                          <h3 className="text-lg font-semibold text-foreground mb-2">
                            Links
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {project.github && (
                              <a
                                href={project.github}
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
                            {project.xlink && (
                              <a
                                href={project.xlink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                              >
                                <Icon
                                  icon="simple-icons:x"
                                  className="size-5"
                                />
                                View on X
                              </a>
                            )}
                            {!project.webUrl ? null : (
                              <a
                                href={project.webUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
                              >
                                <Icon
                                  icon={"fa:paperclip"}
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
