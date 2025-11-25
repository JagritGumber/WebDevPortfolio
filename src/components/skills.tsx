import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";

const skillRows = [
  {
    name: "Web",
    items: [
      {
        name: "React",
        icon: "simple-icons:react",
      },
      {
        name: "Svelte",
        icon: "simple-icons:svelte",
      },
      {
        name: "Nuxt",
        icon: "simple-icons:nuxt",
      },
      {
        name: "CSS",
        icon: "simple-icons:css3",
      },
      {
        name: "HTML",
        icon: "simple-icons:html5",
      },
      {
        name: "Next.js",
        icon: "simple-icons:nextdotjs",
      },
      {
        name: "Tailwind CSS",
        icon: "simple-icons:tailwindcss",
      },
      {
        name: "UnoCSS",
        icon: "simple-icons:unocss",
      },
      {
        name: "Solid",
        icon: "simple-icons:solid",
      },
      {
        name: "Vue",
        icon: "simple-icons:vuedotjs",
      },
    ],
  },
  {
    name: "Frameworks and Libraries",
    items: [
      {
        name: "Capacitor",
        icon: "simple-icons:capacitor",
      },
      {
        name: "React Native",
        icon: "simple-icons:react",
      },
      {
        name: "Flutter",
        icon: "simple-icons:flutter",
      },
      {
        name: "Expo",
        icon: "simple-icons:expo",
      },
      {
        name: "Express",
        icon: "simple-icons:express",
      },
      {
        name: "Django",
        icon: "simple-icons:django",
      },
      {
        name: "FastAPI",
        icon: "simple-icons:fastapi",
      },
      {
        name: "Hono",
        icon: "simple-icons:hono",
      },
    ],
  },
  {
    name: "Languages",
    items: [
      {
        name: "C",
        icon: "simple-icons:c",
      },
      {
        name: "C#",
        icon: "simple-icons:csharp",
      },
      {
        name: "C++",
        icon: "simple-icons:cplusplus",
      },
      {
        name: "Rust",
        icon: "simple-icons:rust",
      },
      {
        name: "Python",
        icon: "simple-icons:python",
      },
      {
        name: "Golang",
        icon: "simple-icons:go",
      },
      {
        name: "Ruby",
        icon: "simple-icons:ruby",
      },
      {
        name: "Dart",
        icon: "simple-icons:dart",
      },
      {
        name: "Javascript",
        icon: "simple-icons:javascript",
      },
      {
        name: "Typescript",
        icon: "simple-icons:typescript",
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        name: "Firebase",
        icon: "simple-icons:firebase",
      },
      {
        name: "Supabase",
        icon: "simple-icons:supabase",
      },
      {
        name: "Appwrite",
        icon: "simple-icons:appwrite",
      },
      {
        name: "PostgreSQL",
        icon: "simple-icons:postgresql",
      },
      {
        name: "SQLite",
        icon: "simple-icons:sqlite",
      },
      {
        name: "MySQL",
        icon: "simple-icons:mysql",
      },
      {
        name: "DuckDB",
        icon: "simple-icons:duckdb",
      },
      {
        name: "Unity",
        icon: "simple-icons:unity",
      },
      {
        name: "Godot",
        icon: "simple-icons:godotengine",
      },
      {
        name: "Aseprite",
        icon: "simple-icons:aseprite",
      },
      {
        name: "VSCode",
        icon: "simple-icons:visualstudiocode",
      },
      {
        name: "Vim",
        icon: "simple-icons:vim",
      },
    ],
  },
];

export const Skills = () => {
  return (
    <section aria-label="Skills" className="flex flex-col p-4 lg:p-8">
      <h2 className="font-handwriting text-3xl text-foreground">
        Technologies I use
      </h2>
      <span className="text-muted-foreground mb-4">
        These've helped me through the highs and lows of my complex projects.
      </span>
      <SkillsScroller />
    </section>
  );
};

const SkillsScroller = () => {
  return (
    <div className="group flex flex-col overflow-hidden py-2 max-w-full mask-[linear-gradient(to_right,rgba(0,0,0,0),rgba(0,0,0,1)_10%,rgba(0,0,0,1)_90%,rgba(0,0,0,0))]">
      {skillRows.map((row, rIdx) => (
        <div
          key={row.name}
          className={cn(
            "flex flex-row w-max",
            rIdx % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse"
          )}
        >
          {[...row.items, ...row.items].map((item, idx) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Static list
              key={idx}
              className={cn(
                "flex gap-2 items-center justify-center px-4 py-2",
                "text-foreground bg-background border-border border"
              )}
            >
              <Icon icon={item.icon} className="size-6" />
              <span className="text-sm text-nowrap">{item.name}</span>
            </div>
          ))}
          ,
        </div>
      ))}
    </div>
  );
};
