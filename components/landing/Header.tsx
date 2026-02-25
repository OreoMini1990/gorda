"use client";

import { useState, useEffect } from "react";

const NAV_LINKS = [
  { label: "문제점",    href: "#problem"   },
  { label: "솔루션",   href: "#solution"  },
  { label: "증명",     href: "#proof"     },
  { label: "파트너",    href: "#medifirst" },
];

function useScrollSpy(ids: string[]) {
  const [activeId, setActiveId] = useState("");
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: "-20% 0px -60% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return activeId;
}

/* 로고 3×3 그리드 (참고 레이아웃과 동일 패턴) */
const LOGO_GRID = ["p","p","a","p","a","p","a","p","p"] as const;

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useScrollSpy(NAV_LINKS.map((l) => l.href.slice(1)));

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-white/10 bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">

        {/* 로고 — 흰 pill */}
        <a
          href="#"
          className="flex items-center gap-3 rounded-full bg-white px-5 py-2 shadow-lg"
        >
          <div className="grid h-6 w-6 grid-cols-3 grid-rows-3 gap-0.5">
            {LOGO_GRID.map((c, i) => (
              <div
                key={i}
                className={`h-full w-full ${c === "a" ? "bg-accent" : "bg-primary"}`}
              />
            ))}
          </div>
          <span className="text-lg font-bold tracking-tight text-primary">
            GORDA
          </span>
        </a>

        {/* 데스크탑 nav */}
        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-base font-medium transition-colors ${
                activeId === link.href.slice(1)
                  ? "text-accent"
                  : "text-[rgba(255,255,255,0.75)] hover:text-accent"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full bg-accent px-6 py-2.5 text-sm font-bold text-primary-darker shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-yellow-300"
          >
            상담 신청하기
          </a>
          {/* 모바일 햄버거 */}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="rounded-full p-2 text-white hover:bg-white/10 md:hidden"
            aria-label="메뉴"
          >
            <span className="block h-5 w-6">
              <span className={`block h-0.5 w-full bg-current transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
              <span className={`mt-1.5 block h-0.5 w-full bg-current transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
              <span className={`mt-1.5 block h-0.5 w-full bg-current transition-all ${mobileOpen ? "opacity-0" : ""}`} />
            </span>
          </button>
        </div>
      </div>

      {/* 모바일 드롭다운 */}
      {mobileOpen && (
        <div className="border-t border-white/10 bg-canvas/95 px-4 py-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block py-3 text-base font-medium text-white/75 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
