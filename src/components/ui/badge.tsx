import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-block rounded-lg px-3 py-1 text-sm font-medium",
  {
    variants: {
      variant: {
        primary:
          "bg-green-100 text-green-500 dark:bg-green-900/20 dark:text-green-400",
        secondary:
          "bg-gray-100 text-gray-500 dark:bg-gray-900/20 dark:text-gray-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
