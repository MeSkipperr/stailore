"use client";

import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import HoverText from "@/components/hover-text";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-text text-white hover:bg-text/90",
        destructive:
          "bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        outline:
          "border border-text shadow-xs hover:bg-text hover:text-white",
        secondary:
          "bg-secondary text-white hover:bg-secondary/90",
        ghost:
          "hover:bg-text/10 ",
        link: "text-primary underline-offset-4 hover:underline",
        disable:
          "hover:bg-text/10 ",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8  gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10  px-6 has-[>svg]:px-4",
        icon: "size-9",
        "icon-sm": "size-8",
        "icon-lg": "size-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  transition?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, transition = true, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    const content = transition ? <HoverText>{children}</HoverText> : children;

    const commonProps = {
      "data-slot": "button",
      className: cn(buttonVariants({ variant, size, className })),
      ref,
      ...props,
    };


    return <Comp {...commonProps}>{content}</Comp>;
  }
);

Button.displayName = "Button";

export { Button, buttonVariants };
