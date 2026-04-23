import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY, type ProjectSummary } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Separator } from "@/components/ui/separator";
import { ProjectsGrid } from "@/components/projects-grid";

export const metadata = {
  title: "Projects | Jagrit Gumber",
  description: "A collection of things I've built.",
};

export default async function ProjectsPage() {
  const rawProjects = await client.fetch<ProjectSummary[]>(
    PROJECTS_QUERY,
    {},
    { next: { revalidate: 60 } }
  );

  const projects = rawProjects.map((p) => ({
    ...p,
    imageUrl: p.mainImage ? urlFor(p.mainImage).url() : null,
  }));

  return (
    <div className="bg-background">
      <Header />
      <main className="mx-auto max-w-4xl relative flex flex-col">
        <section aria-label="All Projects" className="pt-4 lg:pt-8 flex flex-col">
          <div className="px-4 lg:px-8 mb-6">
            <h1 className="font-serif text-3xl text-foreground">Projects</h1>
            <span className="text-muted-foreground block">
              A collection of things I&apos;ve built over the years.
            </span>
          </div>
          {projects.length === 0 ? (
            <p className="text-muted-foreground text-center py-12 px-4">
              No projects yet. Check back soon.
            </p>
          ) : (
            <ProjectsGrid projects={projects} />
          )}
        </section>
        <Separator />
        <Footer />
      </main>
    </div>
  );
}
