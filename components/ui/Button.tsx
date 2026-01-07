import * as React from "react";

import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
};

export default function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition",
        variant === "primary"
          ? "bg-neutral-900 text-white hover:bg-neutral-800"
          : "border border-neutral-900 text-neutral-900 hover:bg-neutral-50",
        className
      )}
      {...props}
    />
  );
}
