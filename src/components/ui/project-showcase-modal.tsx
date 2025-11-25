import { Button } from "./button";

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
      className="inset-0 fixed flex w-full h-full items-center justify-center bg-background/0 border-none transition-all duration-300 ease-out opacity-0 translate-y-10 scale-[0.97] pointer-events-none data-[state=open]:bg-background/95 data-[state=open]:opacity-100 data-[state=open]:backdrop-blur-md data-[state=open]:translate-y-0 data-[state=open]:scale-100 data-[state=open]:pointer-events-auto overflow-auto"
    >
      <div className="content max-w-4xl mx-auto h-full sm:mt-60 w-full p-4 text-foreground">
        <div className="header-row flex items-center justify-between">
          {title}
          <Button
            size={"icon"}
            variant={"ghost"}
            className="float-right"
            onClick={onClose}
          >
            <span className="i-bxs:x-circle" />
          </Button>
        </div>

        {body}
      </div>
    </dialog>
  );
};
