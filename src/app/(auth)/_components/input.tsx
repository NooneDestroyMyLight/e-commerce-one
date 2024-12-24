import { cn } from "@/lib/utils";
import { forwardRef, ComponentProps, memo } from "react";

let Input = forwardRef<HTMLInputElement, ComponentProps<"input">>(
  ({ className = "", type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "shadow-[0_1px_8px_rgba(0,0,0,0.05)] px-[20px] pt-[22px] pb-[22px] text-[14px] leading-[20px] rounded-[4px] w-full placeholder:select-none ",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// Input = memo(Input);

export { Input };
