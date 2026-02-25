"use client";

import Image from "next/image";
import { useState } from "react";
import { LogoSvg } from "./LogoSvg";

const LOGO_PATH = "/brand/gorda-logo.png";

interface LogoProps {
  className?: string;
  /** pill: 흰 pill 컨테이너 안에 로고 표시 (다크 헤더용) */
  variant?: "default" | "pill";
}

export function Logo({ className = "", variant = "pill" }: LogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return <LogoSvg className={className} variant={variant} />;
  }

  if (variant === "pill") {
    return (
      <a
        href="#"
        className={`inline-flex items-center rounded-full bg-white px-5 py-2 shadow-lg ${className}`}
      >
        <Image
          src={LOGO_PATH}
          alt="GORDA COMPANY"
          width={120}
          height={32}
          priority
          className="h-7 w-auto object-contain"
          unoptimized
          onError={() => setFailed(true)}
        />
      </a>
    );
  }

  return (
    <a href="#" className={`inline-flex items-center ${className}`}>
      <Image
        src={LOGO_PATH}
        alt="GORDA COMPANY"
        width={160}
        height={44}
        priority
        className="h-10 w-auto object-contain"
        unoptimized
        onError={() => setFailed(true)}
      />
    </a>
  );
}
