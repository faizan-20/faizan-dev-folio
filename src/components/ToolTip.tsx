import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export const ToolTip = (props: { toolTipText: string }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>Hover</TooltipTrigger>
        <TooltipContent>
          <p>{props.toolTipText}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};
