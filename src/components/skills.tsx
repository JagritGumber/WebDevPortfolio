import { cn } from "@/lib/utils";

const skillRows = [
  {
    name: "Web",
    items: [
      {
        name: "React",
        icon: "i-simple-icons:react",
      },
      {
        name: "Svelte",
        icon: "i-simple-icons:svelte",
      },
      {
        name: "Nuxt",
        icon: "i-simple-icons:nuxt",
      },
      {
        name: "CSS",
        icon: "i-simple-icons:css3",
      },
      {
        name: "HTML",
        icon: "i-simple-icons:html5",
      },
      {
        name: "Next.js",
        icon: "i-simple-icons:nextdotjs",
      },
      {
        name: "Tailwind CSS",
        icon: "i-simple-icons:tailwindcss",
      },
      {
        name: "UnoCSS",
        icon: "i-simple-icons:unocss",
      },
      {
        name: "Solid",
        icon: "i-simple-icons:solid",
      },
      {
        name: "Vue",
        icon: "i-simple-icons:vuedotjs",
      },
    ],
  },
  {
    name: "Frameworks and Libraries",
    items: [
      {
        name: "Capacitor",
        icon: "i-simple-icons:capacitor",
      },
      {
        name: "React Native",
        icon: "i-simple-icons:react",
      },
      {
        name: "Flutter",
        icon: "i-simple-icons:flutter",
      },
      {
        name: "Expo",
        icon: "i-simple-icons:expo",
      },
      {
        name: "Express",
        icon: "i-simple-icons:express",
      },
      {
        name: "Django",
        icon: "i-simple-icons:django",
      },
      {
        name: "FastAPI",
        icon: "i-simple-icons:fastapi",
      },
      {
        name: "Hono",
        icon: "i-simple-icons:hono",
      },
    ],
  },
  {
    name: "Languages",
    items: [
      {
        name: "C",
        icon: "i-simple-icons:c",
      },
      {
        name: "C#",
        icon: "i-simple-icons:csharp",
      },
      {
        name: "C++",
        icon: "i-simple-icons:cplusplus",
      },
      {
        name: "Rust",
        icon: "i-simple-icons:rust",
      },
      {
        name: "Python",
        icon: "i-simple-icons:python",
      },
      {
        name: "Golang",
        icon: "i-simple-icons:go",
      },
      {
        name: "Ruby",
        icon: "i-simple-icons:ruby",
      },
      {
        name: "Dart",
        icon: "i-simple-icons:dart",
      },
      {
        name: "Javascript",
        icon: "i-simple-icons:javascript",
      },
      {
        name: "Typescript",
        icon: "i-simple-icons:typescript",
      },
    ],
  },
  {
    name: "Tools",
    items: [
      {
        name: "Firebase",
        icon: "i-simple-icons:firebase",
      },
      {
        name: "Supabase",
        icon: "i-simple-icons:supabase",
      },
      {
        name: "Appwrite",
        icon: "i-simple-icons:appwrite",
      },
      {
        name: "PostgreSQL",
        icon: "i-simple-icons:postgresql",
      },
      {
        name: "SQLite",
        icon: "i-simple-icons:sqlite",
      },
      {
        name: "MySQL",
        icon: "i-simple-icons:mysql",
      },
      {
        name: "DuckDB",
        icon: "i-simple-icons:duckdb",
      },
      {
        name: "Unity",
        icon: "i-simple-icons:unity",
      },
      {
        name: "Godot",
        icon: "i-simple-icons:godotengine",
      },
      {
        name: "Aseprite",
        icon: "i-simple-icons:aseprite",
      },
      {
        name: "VSCode",
        icon: "i-simple-icons:visualstudiocode",
      },
      {
        name: "Vim",
        icon: "i-simple-icons:vim",
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
    <div className="group flex flex-col overflow-hidden py-2 flex-row max-w-full [mask-image:linear-gradient(to_right,_rgba(0,_0,_0,_0),rgba(0,_0,_0,_1)_10%,rgba(0,_0,_0,_1)_90%,rgba(0,_0,_0,_0))]">
      {skillRows.map((row, rIdx) => (
        <div
          key={row.name}
          className={cn(
            "flex flex-row w-max",
            rIdx % 2 === 0 ? "animate-marquee" : "animate-marquee-reverse",
          )}
        >
          {[...row.items, ...row.items].map((item, idx) => (
            <div
              // biome-ignore lint/suspicious/noArrayIndexKey: Static list
              key={idx}
              className={cn(
                "flex gap-2 items-center justify-center px-4 py-2",
                "text-foreground bg-background border-border border",
              )}
            >
              <div className={cn(item.icon, "size-6 fill-foreground")} />
              <span className="text-sm text-nowrap">{item.name}</span>
            </div>
          ))}
          ,
        </div>
      ))}
    </div>
  );
};
