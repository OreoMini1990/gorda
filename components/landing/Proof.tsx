"use client";

import { motion } from "framer-motion";
import { SectionCanvas } from "@/components/layout/SectionCanvas";

const TILES = [
  {
    id: "bit",
    bg: "bg-primary",
    labelColor: "text-white/50",
    titleColor: "text-accent",
    headColor: "text-white",
    descColor: "text-white/75",
    label: "Partnership",
    title: "BIT × GORDA",
    head: "심사청구 전문 인력 양성 파트너십",
    sub: "국내 1위 EMR 기업과 함께, 최신 고시 기반 심사청구 교육으로 실무 표준을 만듭니다.",
    icon: "handshake",
    iconBg: "bg-white/15 text-white",
  },
  {
    id: "medifirst",
    bg: "bg-white border-2 border-gray-100",
    labelColor: "text-primary/50",
    titleColor: "text-primary",
    headColor: "text-gray-800",
    descColor: "text-gray-500",
    label: "Platform",
    title: "MEDIFIRST · 의료운영의 모든 것",
    head: "1차의료 운영·직무 커뮤니티 플랫폼",
    sub: "직무별 채널 · 운영 Q&A · 심사청구/구인구직 · 케이스 기반 노하우 공유",
    icon: "group",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    id: "koonja",
    bg: "bg-white border-2 border-gray-100",
    labelColor: "text-primary/50",
    titleColor: "text-primary",
    headColor: "text-gray-800",
    descColor: "text-gray-500",
    label: "Publishing",
    title: "군자출판사",
    head: "운영관리·심사청구 전문직무 교과서 집필",
    sub: "병원 운영관리와 심사청구 전문직무의 표준 지식을 체계화해, 현장과 교육 모두에서 통하는 레퍼런스",
    icon: "menu_book",
    iconBg: "bg-primary/10 text-primary",
  },
  {
    id: "academy",
    bg: "bg-accent",
    labelColor: "text-primary/60",
    titleColor: "text-primary",
    headColor: "text-primary",
    descColor: "text-primary/75",
    label: "Academy",
    title: "온라인 직무 교육",
    head: "운영관리·심사청구 전문직무 과정",
    sub: "병원 운영관리 · 심사청구 실무 · 삭감 예방 · 최신 고시 반영 프로토콜",
    icon: "play_circle",
    iconBg: "bg-primary/10 text-primary",
  },
];

const PROOF_LABELS = [
  { icon: "monitoring",   main: "운영지표 기반 개선",        sub: "매출·순익·통계" },
  { icon: "badge",        main: "인력·직무교육 체계",        sub: "팀 표준화" },
  { icon: "receipt_long", main: "청구·심사대응 프로토콜",    sub: "최신 고시 반영" },
  { icon: "hub",          main: "커뮤니티 기반 네트워크",    sub: "실무자 연결" },
];

export function Proof() {
  return (
    <SectionCanvas id="proof" chapter="Chapter 03. The Proof">
      <div className="items-start gap-10 lg:grid lg:[grid-template-columns:2fr_3fr]">

        {/* ─── 좌측: 메인 카피 ─── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-3 text-[10px] font-bold uppercase tracking-widest text-primary/40"
          >
            Chapter 03 · The Proof
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 text-2xl font-bold leading-snug text-primary md:text-3xl"
          >
            검증된 파트너십과
            <br />
            커뮤니티 인프라로 증명합니다.
          </motion.h2>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10 space-y-3 text-base leading-relaxed text-gray-600"
          >
            <p>
              <span className="font-semibold text-gray-900">
                GORDA는 개원 컨설팅을 '
                <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-gray-900">
                  한 번의 프로젝트
                </span>
                '로 보지 않습니다.
              </span>
            </p>
            <p>
              개원 이후에 더 복잡해지는{" "}
              <span className="font-semibold text-primary">
                운영·인력·청구·지표 관리
              </span>
              까지, 병원이 '
              <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-primary-dark">
                돌아가게
              </span>
              ' 만드는 일을 함께합니다.
            </p>
            <p>
              단순 매출 기반 수수료를 받는 구조가 아니라,
              <br />
              <span className="rounded bg-amber-100 px-1.5 py-0.5 font-semibold text-primary-dark">
                현장에 남아 성과를 관리하는 운영 파트너
              </span>
              입니다.
            </p>
          </motion.div>

          {/* 팩트형 라벨 4개 */}
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {PROOF_LABELS.map((label, i) => (
              <motion.div
                key={label.main}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="flex items-center gap-3 rounded-xl border border-gray-100 bg-gray-50 px-4 py-3"
              >
                <span className="material-symbols-outlined shrink-0 text-xl text-primary">
                  {label.icon}
                </span>
                <span className="flex flex-col">
                  <span className="text-sm font-semibold leading-tight text-gray-800">
                    {label.main}
                  </span>
                  <span className="text-xs text-gray-400">
                    {label.sub}
                  </span>
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ─── 우측: 2×2 Proof Tiles ─── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mt-12 grid grid-cols-2 gap-4 lg:mt-0"
        >
          {TILES.map((tile, i) => (
            <motion.div
              key={tile.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + i * 0.07 }}
              className={`flex flex-col gap-4 rounded-2xl p-6 ${tile.bg}`}
            >
              {/* 아이콘 + 카테고리 라벨 */}
              <div className="flex items-center justify-between">
                <div className={`rounded-xl p-3 ${tile.iconBg}`}>
                  <span className="material-symbols-outlined text-2xl">
                    {tile.icon}
                  </span>
                </div>
                <span className={`text-[10px] font-bold uppercase tracking-[0.15em] ${tile.labelColor}`}>
                  {tile.label}
                </span>
              </div>

              {/* 타이틀 + 헤드 + 서브 */}
              <div className={`border-t pt-4 ${tile.id === "bit" ? "border-white/20" : "border-gray-100"}`}>
                <p className={`font-bold leading-snug ${tile.titleColor}`}>
                  {tile.title}
                </p>
                <p className={`mt-1.5 text-sm font-medium leading-snug ${tile.headColor} opacity-80`}>
                  {tile.head}
                </p>
                <p className={`mt-2 text-xs leading-relaxed ${tile.descColor} opacity-80`}>
                  {tile.sub}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </SectionCanvas>
  );
}
