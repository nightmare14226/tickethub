import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const headerButtonVariants = cva(
  "inline-flex items-center whitespace-nowrap rounded-md text-sm font-medium border-2 shadow-none text-[#B4BDC9]",
  {
    variants: {
      variant: {
        default: "bg-transparent text-[#B4BDC9] ",
        destructive: "bg-transparent text-[#B4BDC9]",
        outline: " hover:bg-transparent",
        clear: "border-none",
        secondary: "bg-transparent text-[#B4BDC9]",
        ghost: "hover:bg-transparent hover:text-[#B4BDC9]",
        link: "text-[#B4BDC9] underline-offset-4 hover:underline",
        glow: "btn btn--wide !rounded-md",
      },
      size: {
        default: "h-6 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "size-8",
      },
      float: {
        default: "justify-center",
        left: "justify-start",
        right: "justify-end",
      },
    },
    defaultVariants: {
      float: "default",
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof headerButtonVariants> {
  asChild?: boolean
}

const HeaderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, float, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        aria-label="lang"
        className={cn(
          headerButtonVariants({ variant, size, className, float })
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
HeaderButton.displayName = "HeaderButton"

export { HeaderButton, headerButtonVariants }
