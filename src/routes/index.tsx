import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Hero,
  Navbar,
  SomeProjects,
  Education,
  ContactForm,
} from "~/components";

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
      <SomeProjects />
      <ContactForm />
    </>
  );
}
