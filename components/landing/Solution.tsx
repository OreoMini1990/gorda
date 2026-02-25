"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionCanvas } from "@/components/layout/SectionCanvas";

const SERVICES = [
  { id: "location", icon: "location_on",      title: "입지 분석",      desc: "빅데이터 기반 상권 분석 및 경쟁 병원 현황 파악" },
  { id: "funding",  icon: "account_balance",  title: "자금/금융",      desc: "닥터론 최저 금리 비교, 예산 운용 포트폴리오",    default: true },
  { id: "interior", icon: "architecture",     title: "인테리어",       desc: "진료 동선 최적화 설계 및 시공사 경쟁 입찰" },
  { id: "legal",    icon: "gavel",            title: "법무/세무/노무", desc: "의료법 검토, 사업자 등록, 세무 기장 및 절세 전략" },
  { id: "equip",    icon: "medical_services", title: "의료장비/의약품",desc: "필수 장비 리스트업 및 최적가 구매 대행" },
  { id: "market",   icon: "campaign",         title: "마케팅",         desc: "온/오프라인 통합 마케팅 전략, BI 개발",          default: true },
  { id: "ops",      icon: "bar_chart",        title: "운영지원",       desc: "매출·원가·환자구성 데이터 기반 KPI 분석 및 개선안 제시" },
  { id: "claim",    icon: "receipt_long",     title: "심사청구",       desc: "최신 고시·심사기준 청구 최적화, 삭감 예방 및 심사 대응" },
  { id: "hr",       icon: "group",            title: "인사/직무교육",  desc: "인력 공급·직무별 교육 체계 구축, 실무 역량 표준화" },
];

export function Solution() {
  const [selected, setSelected] = useState<Set<string>>(
    () => new Set(SERVICES.filter((s) => s.default).map((s) => s.id))
  );

  const toggle = (id: string) =>
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  return (
    <SectionCanvas id="solution" chapter="Chapter 02. The Solution" panelClassName="!p-8 md:!p-12">
      {/* 헤더 */}
      <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-2 text-2xl font-bold text-primary-darker md:text-3xl"
          >
            GORDA Pick &amp; Build
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm text-gray-500"
          >
            필요한 조각만 선택하세요. 원하는 모듈만 맞춤 제안서로 보내드립니다.
          </motion.p>
        </div>
        <span className="hidden items-center gap-1.5 rounded-lg bg-gray-100 px-3 py-1.5 text-sm font-medium text-gray-600 md:inline-flex">
          <span className="material-symbols-outlined text-base text-primary">check_circle</span>
          원하시는 서비스만 선택하세요
        </span>
      </div>

      {/* 서비스 카드 그리드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const isOn = selected.has(s.id);
          return (
            <motion.label
              key={s.id}
              htmlFor={`svc-${s.id}`}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative cursor-pointer"
            >
              <input
                id={`svc-${s.id}`}
                type="checkbox"
                checked={isOn}
                onChange={() => toggle(s.id)}
                className="sr-only"
              />
              <div
                className={`h-full rounded-xl border-2 p-4 transition-all duration-200 ${
                  isOn
                    ? "border-primary bg-primary/5"
                    : "border-gray-100 bg-white hover:border-primary/30"
                }`}
              >
                <div className="mb-3 flex items-start justify-between">
                  <div
                    className={`rounded-lg p-2 transition-colors ${
                      isOn ? "bg-primary text-white" : "bg-gray-50 text-gray-600"
                    }`}
                  >
                    <span className="material-symbols-outlined">{s.icon}</span>
                  </div>
                  <div
                    className={`flex h-5 w-5 items-center justify-center rounded-full border-2 transition-all ${
                      isOn ? "border-primary bg-primary" : "border-gray-200"
                    }`}
                  >
                    {isOn && (
                      <span className="material-symbols-outlined text-[12px] text-white">check</span>
                    )}
                  </div>
                </div>
                <h4 className="mb-1.5 text-base font-bold text-gray-900">{s.title}</h4>
                <p className="text-sm leading-relaxed text-gray-500">{s.desc}</p>
              </div>
            </motion.label>
          );
        })}
      </div>

      {/* 견적 버튼 → 클릭 시 상담 섹션으로 이동 */}
      <div className="mt-8 text-center">
        <motion.a
          href="#contact"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block rounded-xl bg-primary px-10 py-3.5 font-bold text-white shadow-lg transition-all hover:bg-primary/90"
        >
          선택한 {selected.size}개 항목 견적 확인하기
        </motion.a>
      </div>
    </SectionCanvas>
  );
}
