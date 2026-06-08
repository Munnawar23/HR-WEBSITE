import React, { forwardRef } from "react";
import { cn } from "@src/lib/utils";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      leftIcon,
      rightIcon,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-xl font-semibold transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-50 disabled:pointer-events-none cursor-pointer transform active:scale-98 select-none";

    const variants = {
      primary:
        "bg-primary text-white shadow-lg shadow-primary/25 hover:bg-primary-hover hover:shadow-primary/35 focus-visible:outline-primary",
      secondary:
        "bg-secondary text-primary shadow-lg shadow-secondary/15 hover:bg-secondary-hover hover:text-primary focus-visible:outline-secondary",
      outline:
        "border border-border bg-white text-primary hover:bg-tag-bg focus-visible:outline-primary",
      ghost:
        "text-primary hover:bg-primary/5 hover:text-primary focus-visible:outline-primary",
      danger:
        "bg-red-600 text-white shadow-lg shadow-red-600/20 hover:bg-red-700 focus-visible:outline-red-600",
    };

    const sizes = {
      sm: "px-4 py-2 text-xs md:text-sm",
      md: "px-5 py-2.5 text-sm md:text-base",
      lg: "px-8 py-4 text-base md:text-lg",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              target="_blank"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {!isLoading && leftIcon && <span className="mr-2 inline-flex">{leftIcon}</span>}
        {children}
        {!isLoading && rightIcon && <span className="ml-2 inline-flex">{rightIcon}</span>}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
