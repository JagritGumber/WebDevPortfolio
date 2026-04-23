import { cn } from "@/lib/utils";
import {
  ProjectShowcase,
  type ProjectWithImage,
} from "./project-showcase";

export const ProjectsGrid = ({
  projects,
}: {
  projects: ProjectWithImage[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-3">
    {projects.map((project, i) => {
      const isFirstRow = i < 3;
      const isFirstCol = i % 3 === 0;
      return (
        <div
          key={project._id}
          className={cn(
            "border-dotted border-border",
            i > 0 && "border-t",
            "md:border-t-0",
            !isFirstRow && "md:border-t",
            !isFirstCol && "md:border-l"
          )}
        >
          <ProjectShowcase project={project} />
        </div>
      );
    })}
  </div>
);
