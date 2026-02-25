"use client";

import { motion } from "framer-motion";
import { SectionCanvas } from "@/components/layout/SectionCanvas";

const PAIN_POINTS = [
  { id: "1", icon: "visibility_off", title: "비용의 불투명성",      desc: "세부 내역 없이 뭉뚱그려 청구되는 컨설팅 비용의 문제점" },
  { id: "2", icon: "block",          title: "강매형 패키지",        desc: "필요하지 않은 서비스까지 포함된 올인원 계약 강요" },
  { id: "3", icon: "person_off",     title: "비전문가 진행",        desc: "계약은 대표가, 실무는 경험 부족한 신입 직원이 진행" },
  { id: "4", icon: "sync_problem",   title: "소통의 부재",          desc: "원장님의 니즈보다 업체의 편의를 우선시하는 일방통행" },
  { id: "5", icon: "money_off",      title: "명분없는 수수료", desc: "해주는 것은 없어도 매달 발생하는, 정당하지 않은 명분 없는 세전매출 기반 수수료" },
];

export function Problem() {
  return (
    <SectionCanvas id="problem" chapter="Chapter 01. The Problem">
      {/* 헤딩 */}
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6 text-3xl font-bold text-primary-darker md:text-4xl"
        >
          왜 개원 컨설팅은 항상 불투명하고 비쌀까요?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600"
        >
          전체 패키지라는 명목 하에 불필요한 비용이 청구되고, 전문가가 아닌
          영업사원이 대행하는 관행.
          <br />
          이제는 바뀌어야 합니다.
        </motion.p>
      </div>

      {/* 카드 그리드 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {PAIN_POINTS.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.07 }}
            className="group flex flex-col items-center rounded-2xl border border-transparent bg-gray-50 p-8 text-center transition-all duration-300 hover:border-gray-100 hover:bg-white hover:shadow-xl"
          >
            <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gray-200 transition-colors group-hover:bg-primary">
              <span className="material-symbols-outlined text-2xl text-gray-500 transition-colors group-hover:text-white">
                {p.icon}
              </span>
            </div>
            <h3 className="mb-2 text-base font-bold text-gray-900">{p.title}</h3>
            <p className="text-sm leading-relaxed text-gray-400">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </SectionCanvas>
  );
}
