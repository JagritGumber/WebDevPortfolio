import { GitHubCalendar } from "react-github-calendar";

export const Contributions = () => {
  return (
    <section aria-label="Contributions" className="p-4 lg:p-8 flex flex-col">
      <h2 className="font-serif text-3xl text-foreground">Contributions</h2>
      <span className="text-muted-foreground mb-4">GitHub - @JagritGumber</span>
      <div className="mx-auto w-full">
        <GitHubCalendar
          username="JagritGumber"
          colorScheme="dark"
          blockMargin={3}
          style={{
            overflow: "scroll",
            color: "var(--foreground)",
          }}
          blockSize={12}
          theme={{
            light: ["var(--muted-background)", "var(--secondary)"],
            dark: ["var(--muted-background)", "var(--secondary)"],
          }}
        />
      </div>
    </section>
  );
};
