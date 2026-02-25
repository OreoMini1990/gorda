"use client";

import { useState } from "react";
import { Sheet } from "@/components/ui/Sheet";
import { PrivacyContent, TermsContent } from "@/components/landing/LegalContent";

const GRID = ["w","w","a","w","a","w","a","w","w"] as const;

export function Footer() {
  const [sheet, setSheet] = useState<"terms" | "privacy" | null>(null);

  return (
    <>
      <footer className="relative z-10 border-t border-white/10 bg-canvas">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            {/* 좌측: 로고 + 설명 + 주소 */}
            <div>
              <div className="mb-4 flex items-center gap-2">
                <div className="grid h-5 w-5 grid-cols-3 grid-rows-3 gap-0.5 opacity-80">
                  {GRID.map((c, i) => (
                    <div
                      key={i}
                      className={`h-full w-full ${c === "a" ? "bg-accent" : "bg-white/80"}`}
                    />
                  ))}
                </div>
                <span className="text-xl font-bold text-white">GORDA</span>
              </div>
              <p className="mb-4 max-w-sm text-xs leading-relaxed text-[rgba(255,255,255,0.75)]">
                고르다컴퍼니는 의료인의 성공적인 개원을 위한 최적의 파트너입니다.
                <br />
                데이터와 경험을 바탕으로 한 맞춤형 솔루션을 제공합니다.
              </p>
              <p className="text-[10px] text-gray-500">
                서울특별시 서초구 서초대로74길 33 | 대표전화 010-7523-2342 | 사업자등록번호 572-07-01798
              </p>
            </div>

            {/* 우측: 링크 + 저작권 */}
            <div className="flex flex-col items-start gap-2 md:items-end">
              <div className="flex gap-6">
                <button
                  type="button"
                  onClick={() => setSheet("terms")}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  이용약관
                </button>
                <button
                  type="button"
                  onClick={() => setSheet("privacy")}
                  className="text-sm text-gray-400 transition-colors hover:text-white"
                >
                  개인정보처리방침
                </button>
              </div>
              <p className="text-[10px] text-gray-600">
                © 2026 고르다컴퍼니. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Sheet
        open={sheet === "terms"}
        onClose={() => setSheet(null)}
        title="이용약관"
      >
        <TermsContent />
      </Sheet>
      <Sheet
        open={sheet === "privacy"}
        onClose={() => setSheet(null)}
        title="개인정보처리방침"
      >
        <PrivacyContent />
      </Sheet>
    </>
  );
}
