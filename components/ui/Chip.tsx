"use client";

interface ChipProps extends React.HTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
  children: React.ReactNode;
}

export function Chip({
  selected = false,
  className = "",
  children,
  ...props
}: ChipProps) {
  return (
    <button
      type="button"
      className={`inline-flex items-center rounded-button border-2 px-4 py-2 text-small font-medium transition-all duration-200 ${
        selected
          ? "border-yellow bg-yellow/15 text-navy"
          : "border-gray-light bg-white text-gray-dark hover:border-navy/50"
      } ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
