import { Header, Hero, Profile } from "@/components";

export const Home = () => {
  return (
    <>
      <Header />
      <main className="py-4 mx-auto max-w-4xl h-[200vh]">
        <Hero />
        <Profile />
      </main>
    </>
  );
};
