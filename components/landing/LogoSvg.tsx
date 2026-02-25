"use client";

const GRID = [
  "primary", "primary", "accent",
  "primary", "accent",  "primary",
  "accent",  "primary", "primary",
];

interface LogoSvgProps {
  className?: string;
  /** dark: 다크 배경에서 로고 단독 표시, pill: 흰 pill 컨테이너 안에 표시 */
  variant?: "default" | "pill";
}

export function LogoSvg({ className = "", variant = "default" }: LogoSvgProps) {
  const inner = (
    <div className="flex items-center gap-2">
      <div className="grid h-6 w-6 grid-cols-3 grid-rows-3 gap-0.5">
        {GRID.map((c, i) => (
          <div
            key={i}
            className={`h-full w-full ${c === "accent" ? "bg-accent" : "bg-primary"}`}
          />
        ))}
      </div>
      <span className="text-lg font-bold tracking-tight text-primary">
        GORDA
      </span>
    </div>
  );

  if (variant === "pill") {
    return (
      <a
        href="#"
        className={`inline-flex items-center rounded-full bg-white px-5 py-2 shadow-lg ${className}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <a
      href="#"
      className={`inline-flex items-center gap-3 ${className}`}
    >
      <div className="grid h-7 w-7 grid-cols-3 grid-rows-3 gap-0.5">
        {GRID.map((c, i) => (
          <div
            key={i}
            className={`h-full w-full ${c === "accent" ? "bg-accent" : "bg-white/80"}`}
          />
        ))}
      </div>
      <span className="text-xl font-bold tracking-widest text-white">
        GORDA
      </span>
    </a>
  );
}
