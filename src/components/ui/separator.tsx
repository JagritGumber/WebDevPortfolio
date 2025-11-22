import { cn } from "@/lib/utils";

export const Separator = ({ vertical = false }: { vertical?: boolean }) => {
  return (
    <div
      tabIndex={-1}
      aria-hidden
      className={cn(
        "border-border border-dotted",
        vertical ? "w-[1px] h-full border-l" : "w-full h-[1px] border-t",
      )}
    />
  );
};
