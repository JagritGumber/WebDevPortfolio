import { createFileRoute } from "@tanstack/react-router";
import { About, Hero, Navbar } from "../components";
import Education from "~/components/Education";

export const Route = createFileRoute("/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Education />
    </>
  );
}
