import { About } from "@/components/about";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Profile } from "@/components/profile";
import { Separator } from "@/components/ui/separator";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="p-4 lg:px-0 mx-auto max-w-4xl h-[200vh] relative flex flex-col gap-4">
        <Hero />
        <Separator />
        <Profile />
        <Separator />
        <About />
        <Separator />
      </main>
    </>
  );
};
