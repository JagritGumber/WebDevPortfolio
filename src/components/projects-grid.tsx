import {
  ProjectShowcase,
  type ProjectWithImage,
} from "./project-showcase";

export const ProjectsGrid = ({
  projects,
}: {
  projects: ProjectWithImage[];
}) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
    {projects.map((project) => (
      <ProjectShowcase key={project._id} project={project} />
    ))}
  </div>
);
