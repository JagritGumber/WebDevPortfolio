import { About } from "@/components/about";
import { Connect } from "@/components/connect";
import { Contributions } from "@/components/contributions";
import { Experience } from "@/components/experience";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { Skills } from "@/components/skills";
import { SomeProjects } from "@/components/some-projects";
import { Separator } from "@/components/ui/separator";
import { client } from "@/sanity/lib/client";
import { PROJECTS_QUERY, type ProjectSummary } from "@/sanity/lib/queries";
import { urlFor } from "@/sanity/lib/image";

export default async function Home() {
  const rawProjects = await client.fetch<ProjectSummary[]>(PROJECTS_QUERY, {}, { next: { revalidate: 60 } });

  const projects = rawProjects.map((p) => ({
    ...p,
    imageUrl: p.mainImage ? urlFor(p.mainImage).url() : null,
  }));

  return (
    <div className="bg-background">
      <Header />
      <main className="mx-auto max-w-4xl relative flex flex-col">
        <Hero />
        <Separator />
        <Profile />
        <Separator />
        <About />
        <Separator />
        <Experience />
        <Separator />
        <Skills />
        <Separator />
        <SomeProjects projects={projects} />
        <Separator />
        <Contributions />
        <Separator />
        <Connect />
        <Separator />
        <Footer />
      </main>
    </div>
  );
}
