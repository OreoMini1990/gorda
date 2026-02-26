"use client";

import { motion } from "framer-motion";

const PARTNERS = [
  { id: "bit",      name: "비트컴퓨터",    sub: "EMR · 심사청구 교육",  logo: "/brand/bit-logo.png", hideText: true },
  { id: "habit",    name: "좋은습관통증의학과", sub: "병원 운영 컨설팅", logo: "/brand/habit-logo.png", hideText: true },
  { id: "huvert",   name: "휴버트",        sub: "의료 전문 파트너",      logo: "/brand/huvert-logo.png", hideText: true },
  { id: "wimento",  name: "위멘토",        sub: "직무 교육 플랫폼",      logo: "/brand/wimento-logo.png", hideText: true },
  { id: "dakun",    name: "다큰",          sub: "의료 인력 솔루션",      logo: "/brand/dakun-logo.png", hideText: true },
  { id: "ando",     name: "안도공간",      sub: "의료 운영 재단",        logo: "/brand/ando-logo.png", hideText: true },
];

export function Medifirst() {
  return (
    <section id="medifirst" className="relative z-10 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* ─── 헤더 ─── */}
        <div className="mb-16 text-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 block text-sm font-bold uppercase tracking-[0.25em] text-accent"
          >
            Alliance Network
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.3)] md:text-5xl"
          >
            개원은 시작일 뿐입니다.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.2)]"
          >
            운영·인력·청구·지표는{" "}
            <span className="text-xl font-semibold text-accent">
              &apos;관리&apos;
            </span>
            되지 않으면 무너집니다.
            <br />
            그래서 저희는{" "}
            <span className="font-semibold text-accent">
              검증된 전문 파트너사들과 함께
            </span>{" "}
            1차의료기관의 운영을 만들어갑니다.
          </motion.p>
        </div>

        {/* ─── Trusted Partners ─── */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-sm font-bold uppercase tracking-[0.2em] text-white"
        >
          Trusted Partners with <span className="text-accent">고르다</span>
        </motion.p>

        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-6">
          {PARTNERS.map((p, i) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={`flex flex-col items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-center backdrop-blur-sm transition-all hover:bg-white/10 ${p.hideText ? "px-6 py-6" : "px-5 py-8"}`}
            >
              {/* 로고: 파일 있으면 이미지, 없으면 이니셜 */}
              <div className={`flex w-full items-center justify-center ${p.hideText ? "min-h-[132px] flex-1" : "mb-4 h-12"}`}>
                {p.logo ? (
                  <span className={`flex items-center justify-center overflow-hidden rounded-xl bg-white shadow-sm ${p.hideText ? "h-[116px] w-full max-w-[220px] p-1.5" : "px-4 py-3"}`}>
                    <span className="flex min-h-0 min-w-0 flex-1 items-center justify-center rounded-lg bg-white">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.logo}
                        alt={p.name}
                        width={160}
                        height={80}
                        className={`object-contain ${p.hideText ? "h-full w-full" : "h-10 w-auto max-h-[52px]"}`}
                        style={{ display: "block", backgroundColor: "#fff" }}
                      />
                    </span>
                  </span>
                ) : (
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15">
                    <span className="text-xl font-bold text-white/80">
                      {p.name[0]}
                    </span>
                  </div>
                )}
              </div>
              <p className={`font-bold text-white ${p.hideText ? "mt-2 whitespace-nowrap text-sm" : "mt-3 text-base"}`}>{p.name}</p>
              {!p.hideText && (
                <p className="mt-1 text-xs text-white/55">{p.sub}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
