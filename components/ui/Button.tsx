"use client";

import { forwardRef } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  asChild?: boolean;
  href?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-navy text-white hover:bg-navy-dark shadow-subtle active:scale-[0.98]",
  secondary:
    "bg-white border-2 border-navy text-navy hover:bg-navy/5 active:scale-[0.98]",
  ghost: "text-navy hover:bg-navy/5",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = "",
      variant = "primary",
      children,
      asChild,
      href,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 rounded-button px-6 py-3 text-body font-semibold transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none";
    const styles = `${base} ${variantStyles[variant]} ${className}`;

    if (href != null && (asChild !== false)) {
      return (
        <a href={href} className={styles}>
          {children}
        </a>
      );
    }

    return (
      <button ref={ref} className={styles} {...props}>
        {children}
      </button>
    )
  }
);

Button.displayName = "Button";
