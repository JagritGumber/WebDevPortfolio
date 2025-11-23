import { cn } from "@/lib/utils";

const experienceRows = [
  {
    companyName: "Algo One AI",
    role: "Frontend Developer",
    src: "/algo-one-ai.png",
    contClassName: "bg-white",
    imgClassName: "-translate-x-[1px] -translate-y-[3px]",
    start: "2024",
    end: "Present",
    description:
      "Building end to end solutions for clients and internal projects.",
  },
];

export const Experience = () => {
  return (
    <section aria-label="Experience" className="flex flex-col px-4">
      <h2 className="font-handwriting text-3xl text-foreground">Experience</h2>
      {experienceRows.map((exp) => {
        return (
          <div key={exp.src} className="py-4">
            <div className={cn("px-4 flex gap-4 items-topline")}>
              <div
                className={cn(
                  exp.contClassName,
                  "size-16 rounded-full flex items-center justify-center",
                )}
              >
                <img
                  src={exp.src}
                  alt={exp.companyName}
                  className={cn(exp.imgClassName, "size-12")}
                />
              </div>
              <div>
                <h3 className="text-lg text-bold font-serif text-foreground">
                  {exp.companyName}
                </h3>
                <span className="text-md text-muted-foreground block">
                  {exp.role}
                </span>
              </div>
              <div className="ml-auto">
                <span>
                  {exp.start} - {exp.end}
                </span>
              </div>
            </div>
            <p className="ml-24">{exp.description}</p>
          </div>
        );
      })}
    </section>
  );
};
