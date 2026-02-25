import { forwardRef } from "react";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = "", hover = false, children, ...props }, ref) => {
    const hoverClass = hover
      ? "transition-shadow duration-200 hover:shadow-card"
      : "";
    return (
      <div
        ref={ref}
        className={`rounded-card bg-white p-6 shadow-subtle ${hoverClass} ${className}`}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
