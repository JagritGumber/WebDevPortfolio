import BlurhashView from "@annatarhe/blurhash-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button, type ButtonProps, buttonVariants } from "./ui/button";
import { ProjectShowcaseModal } from "./ui/project-showcase-modal";

const projects = [
  {
    name: "Particle System",
    imgSrc: "/particle-system-rs.png",
    imgHash: "LNA^C600%Nxu^-IBxaoyM,%MM_V[",
    desc: "To learn Rust, I cooked in Rust",
    techUsed: [
      {
        name: "Rust",
        icon: "i-simple-icons:rust",
      },
    ],
    details:
      "Particle system built in Rust. It can emit particles in the same way as you would see in a Game Engine. I worked on this to learn Rust as I was initially learning Rust and I come from a game development background I tried to build something that I was really familiar with and have used a lot of times.",
    github: "https://github.com/JagritGumber/particle_system_rs",
    xlink: "https://x.com/Jagrit_Gumber/status/1987193468142428305?s=20",
    ytLink: "https://www.youtube.com/embed/WlP2TUcT4nA?si=ys92uGnkTMY1MmL0",
  },
  {
    name: "ArtBox",
    imgHash: "LHK1wN00MwNL.9r;o$Ri~q?bM{tR",
    imgSrc: "/artbox.png",
    desc: "My first website in React",
    techUsed: [
      {
        name: "React",
        icon: "i-simple-icons:react",
      },
      {
        name: "JavaScript",
        icon: "i-simple-icons:javascript",
      },
      {
        name: "CSS3",
        icon: "i-simple-icons:css3",
      },
      {
        name: "Framer Motion",
        icon: "i-simple-icons:framer",
      },
      {
        name: "Cloudflare Pages",
        icon: "i-simple-icons:cloudflarepages",
      },
    ],
    details: "Artbox is a website of curated artwork I found ",
    github: "https://github.com/JagritGumber/ArtBox",
  },
  {
    name: "Learnysvia",
    imgSrc: "/learnysvia.png",
    imgHash: "L3S6GLXTTw$$?vw}I:n5~p}]M{Z%",
    desc: "Full stack real time poll application",
    techUsed: [
      {
        name: "React",
        icon: "i-simple-icons:react",
      },
      {
        name: "TypeScript",
        icon: "i-simple-icons:typescript",
      },
      {
        name: "Tailwind CSS",
        icon: "i-simple-icons:tailwindcss",
      },
      {
        name: "Daisy UI",
        icon: "i-simple-icons:daisyui",
      },
      {
        name: "Elysia",
        icon: "i-simple-icons:firefox",
      },
    ],
    details: "",
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
            <BlurhashView
              blurhashValue={project.imgHash}
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

            <div className="flex mt-auto justify-end px-4 pb-4">
              <ProjectShowcaseModalButton
                title={<h1 className="text-3xl font-serif">{project.name}</h1>}
                body={
                  <div className="modal-body mt-4 flex flex-col gap-4 text-align-justify">
                    <iframe
                      width="100%"
                      className="aspect-ratio-video"
                      src={project.ytLink}
                      title={`${project.name} Youtube Video`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                    {project.details}
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
