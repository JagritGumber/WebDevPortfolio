import { Button } from "./button";
import { Icon } from "@iconify/react";

export const ProjectShowcaseModal = ({
  open = false,
  onClose,
  title,
  body,
}: {
  open?: boolean;
  onClose: () => void;
  title: React.JSX.Element;
  body: React.JSX.Element;
}) => {
  return (
    <dialog
      open={open}
      data-state={open ? "open" : undefined}
      className="inset-0 fixed w-full h-full bg-background/0 border-none transition-all duration-300 ease-out opacity-0 translate-y-10 scale-[0.97] pointer-events-none data-[state=open]:bg-background/95 data-[state=open]:opacity-100 data-[state=open]:backdrop-blur-md data-[state=open]:translate-y-0 data-[state=open]:scale-100 data-[state=open]:pointer-events-auto overflow-auto z-10"
    >
      <div className="max-w-4xl mx-auto h-fit p-4 pt-18 md:pt-28 md:pb-8 w-full text-foreground">
        <div className="flex items-center justify-between">
          {title}
          <Button size={"icon"} variant={"outline"} onClick={onClose}>
            <Icon icon="bxs:x-circle" className="size-6" />
          </Button>
        </div>

        {body}
      </div>
    </dialog>
  );
};
