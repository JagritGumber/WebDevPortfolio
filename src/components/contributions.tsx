import { GitHubCalendar } from "react-github-calendar";

export const Contributions = () => {
  return (
    <section aria-label="Contributions" className="px-4 flex flex-col gap-4">
      <h2 className="font-serif text-3xl text-foreground">Contributions</h2>
      <div className="mx-auto">
        <GitHubCalendar
          username="JagritGumber"
          colorScheme="dark"
          blockMargin={3}
          blockSize={12}
          theme={{
            light: ["hsl(0, 0%, 92%)", "firebrick"],
            dark: ["var(--muted-background)", "var(--secondary)"],
          }}
        />
      </div>
    </section>
  );
};
