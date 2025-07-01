import * as SliderPrimitive from "@radix-ui/react-slider";
import * as React from "react";

import { cn } from "../../lib/utils";

// const Slider = React.forwardRef<
//   React.ComponentRef<typeof SliderPrimitive.Root>,
//   React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
// >(({ className, ...props }, ref) => (
//   <SliderPrimitive.Root
//     ref={ref}
//     className={cn(
//       "relative flex w-full touch-none select-none items-center",
//       className
//     )}
//     {...props}
//   >
//     <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden bg-[#E0EDFF]   rounded-full bg-primary/20">
//       <SliderPrimitive.Range className="absolute h-full bg-primaryBrand" />
//     </SliderPrimitive.Track>
//     <SliderPrimitive.Thumb className="block w-4 h-4 transition-colors border rounded-full shadow border-primary/50 bg-primaryBrand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50" />
//   </SliderPrimitive.Root>
// ));
// Slider.displayName = SliderPrimitive.Root.displayName;

const Slider = React.forwardRef<
  React.ComponentRef<typeof SliderPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root>
>(({ className, ...props }, ref) => (
  <SliderPrimitive.Root
    ref={ref}
    className={cn(
      "relative flex w-full touch-none select-none items-center",
      className
    )}
    {...props}
  >
    <SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden bg-[#E0EDFF] rounded-full bg-primary/20">
      <SliderPrimitive.Range className="absolute h-full bg-primaryBrand" />
    </SliderPrimitive.Track>

    {/* Renders one thumb for each value */}
    {(props.value ?? props.defaultValue ?? []).map((_, index) => (
      <SliderPrimitive.Thumb
        key={index}
        className="block w-4 h-4 transition-colors border rounded-full shadow border-primary/50 bg-primaryBrand focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      />
    ))}
  </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
