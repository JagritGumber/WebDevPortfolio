import BlurhashView from "@annatarhe/blurhash-react";
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
    description: (
      <>
        <p>
          Building some pretty crazy stuff. Interesting workplace, unlike most
          other workplaces where Backend people understand Frontend. It was a
          reverse and oh boy it's interesting.
        </p>
        <p>
          Some of the things I built include:{" "}
          <span className="text-primary">Load Balancer</span> for handling
          multiple users stream connections along with a lot of Generative AI.
          Was it Interesting? A lot. And this is just one of the many crazy
          things I built that I can disclose without messing up my terms.
        </p>
      </>
    ),
  },
];

export const Experience = () => {
  return (
    <section aria-label="Experience" className="flex flex-col p-4 lg:p-8">
      <h2 className="font-handwriting text-3xl text-foreground">Experience</h2>
      <span className="text-muted-foreground mb-4">What I work on</span>
      {experienceRows.map((exp) => {
        return (
          <div key={exp.src} className="py-4 relative">
            <div className={cn("lg:px-4 flex flex-col gap-4 items-topline")}>
              <div
                className={cn(
                  exp.contClassName,
                  "size-16 rounded-full flex items-center justify-center"
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
              <div className="absolute top-4 right-0 md:ml-auto">
                <span className="text-foreground">
                  {exp.start} - {exp.end}
                </span>
              </div>
            </div>
            <div className="pt-4 lg:pt-0 lg:m-4 text-foreground text-md flex flex-col gap-4">
              {exp.description}
            </div>
          </div>
        );
      })}
    </section>
  );
};
