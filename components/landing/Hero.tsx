"use client";

import { useState } from "react";
import { motion } from "framer-motion";

/* 픽 카드 4개 — 레퍼런스와 동일 항목/아이콘 */
const PICK_ITEMS = [
  { id: "location", label: "입지 분석", icon: "location_on",    defaultSelected: false },
  { id: "funding",  label: "자금/금융", icon: "account_balance", defaultSelected: true  },
  { id: "interior", label: "인테리어",  icon: "architecture",    defaultSelected: false },
  { id: "marketing",label: "마케팅/HR", icon: "campaign",        defaultSelected: true  },
];

export function Hero() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(PICK_ITEMS.filter((i) => i.defaultSelected).map((i) => i.id))
  );

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <section className="relative z-10 overflow-hidden pt-40 pb-32 lg:pt-48 lg:pb-40">
      {/* 방사형 배경 글로우 */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/3 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/25 blur-[120px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[300px] w-[300px] translate-x-1/2 rounded-full bg-accent/10 blur-[100px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">

          {/* ─── 좌측 헤드라인 ─── */}
          <div className="lg:col-span-7">
            <motion.div
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.09 } } }}
              className="space-y-8"
            >
              {/* 배지 */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
              >
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-sm font-medium text-accent backdrop-blur-sm">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-accent" />
                  Premium Medical Consultancy
                </span>
              </motion.div>

              {/* 헤드라인 */}
              <motion.h1
                variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
                className="text-5xl font-bold leading-[1.15] tracking-tight text-white md:text-7xl"
              >
                전부 맡기지 마십시오.
                <br />
                <span className="bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">
                  필요한 것만
                </span>
                <br />
                고르십시오.
              </motion.h1>

              {/* 헤드라인 서브태그 */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                className="text-2xl font-bold tracking-tight text-white/70 md:text-3xl"
              >
                <span className="mr-2 text-accent/70">—</span>
                <span className="text-white">고르다</span>는 &ldquo;
                <span className="bg-gradient-to-r from-accent to-yellow-200 bg-clip-text text-transparent">잘하고 자신있는 것</span>
                &rdquo;만 합니다.
              </motion.p>

              {/* 서브카피 */}
              <motion.p
                variants={{ hidden: { opacity: 0, y: 16 }, show: { opacity: 1, y: 0 } }}
                className="max-w-2xl text-xl font-light leading-relaxed text-white/40"
              >
                기존의 불투명하고 무거운 컨설팅은 잊으세요.
                <br />
                <span className="font-semibold text-white">GORDA</span>는
                원장님께{" "}
                <span className="font-semibold text-white">꼭 필요한 서비스만</span>{" "}
                <span className="font-bold text-accent">'Pick'</span>하여
                합리적으로 제공합니다.
              </motion.p>

              {/* CTA 버튼 */}
              <motion.div
                variants={{ hidden: { opacity: 0, y: 12 }, show: { opacity: 1, y: 0 } }}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <a
                  href="#contact"
                  className="group flex items-center justify-center gap-2 rounded-xl border border-primary bg-primary px-8 py-4 text-base font-bold text-white shadow-lg shadow-primary/30 transition-all hover:bg-primary/90"
                >
                  무료 상담 신청하기
                  <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                    arrow_forward
                  </span>
                </a>
                <a
                  href="#solution"
                  className="flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-8 py-4 text-base font-medium text-white backdrop-blur-sm transition-all hover:bg-white/10"
                >
                  서비스 소개서 다운로드
                </a>
              </motion.div>
            </motion.div>
          </div>

          {/* ─── 우측 Pick 카드 ─── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.55 }}
            className="lg:col-span-5"
          >
            <div
              className="relative rounded-2xl border border-white/10 bg-white p-6 shadow-2xl transition-transform duration-500 ease-out hover:rotate-0"
              style={{ transform: "rotate(3deg)" }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLDivElement).style.transform = "rotate(0deg)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLDivElement).style.transform = "rotate(3deg)")
              }
            >
              {/* 뱃지 */}
              <div className="absolute -right-4 -top-4 z-20 rounded-lg bg-accent px-4 py-2 font-bold text-primary shadow-lg">
                Pick Your Success
              </div>

              {/* 2×2 그리드 */}
              <div className="grid grid-cols-2 gap-3">
                {PICK_ITEMS.map((item) => {
                  const isOn = selected.has(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => toggle(item.id)}
                      className={`relative flex flex-col items-center gap-2 overflow-hidden rounded-xl p-4 text-center transition-all duration-200 ${
                        isOn
                          ? "border-2 border-primary bg-primary/5"
                          : "border border-gray-100 bg-gray-50 opacity-60"
                      }`}
                    >
                      {/* check_circle 표시 */}
                      {isOn && (
                        <span className="material-symbols-outlined absolute right-2 top-2 text-lg text-primary">
                          check_circle
                        </span>
                      )}
                      {/* 아이콘 */}
                      <div
                        className={`rounded-full p-2 shadow-md ${
                          isOn
                            ? "bg-primary text-white"
                            : "bg-primary/10 text-primary"
                        }`}
                      >
                        <span className="material-symbols-outlined text-xl">
                          {item.icon}
                        </span>
                      </div>
                      {/* 레이블 */}
                      <span
                        className={`text-sm font-bold ${
                          isOn ? "text-primary" : "text-gray-800"
                        }`}
                      >
                        {item.label}
                      </span>
                      {/* 미선택 라디오 원 */}
                      {!isOn && (
                        <div className="h-4 w-4 rounded-full border-2 border-gray-300" />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* 선택 카운트 */}
              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-sm text-gray-500">Selected Services</span>
                <span className="text-lg font-bold text-primary">
                  {selected.size} Items
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
