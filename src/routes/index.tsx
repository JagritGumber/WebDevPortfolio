import { About } from "@/components/about";
import { Connect } from "@/components/connect";
import { Contributions } from "@/components/contributions";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { Skills } from "@/components/skills";
import { SomeProjects } from "@/components/some-projects";
import { Separator } from "@/components/ui/separator";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="p-4 lg:px-0 mx-auto max-w-4xl relative flex flex-col gap-4">
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
        <SomeProjects />
        <Separator />
        <Contributions />
        <Separator />
        <Connect />
        <Separator />
      </main>
    </>
  );
};
