"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SectionCanvas } from "@/components/layout/SectionCanvas";

const FAQ_LIST = [
  {
    q: "상담 비용은 어떻게 되나요?",
    a: "기본적인 초기 상담은 무료로 진행됩니다. 이후 원하시는 서비스 모듈을 선택하시면 구체적인 견적을 투명하게 안내해 드립니다.",
  },
  {
    q: "지방 개원도 컨설팅 가능한가요?",
    a: "네, 가능합니다. 고르다컴퍼니는 전국 주요 도시에 네트워크를 보유하고 있으며, 지역 특성에 맞는 맞춤형 컨설팅을 제공합니다.",
  },
  {
    q: "개원까지 보통 얼마나 걸리나요?",
    a: "규모와 준비 상황에 따라 다르지만, 통상적으로 입지 선정부터 개원까지 약 3~6개월 정도 소요됩니다.",
  },
  {
    q: "특정 파트만 의뢰할 수 있나요?",
    a: "아닙니다. 필요하신 분야를 의뢰하시면 상황에 맞게 컨설팅해 드리며, 전체적인 솔루션을 원하실 경우 상담을 통해 결정됩니다.",
  },
  {
    q: "개원 단계만 지원하나요? 이미 진료 중인데 운영·관리도 받을 수 있나요?",
    a: "개원 준비 단계뿐 아니라, 이미 개원하여 진료 중이신 경우에도 운영·정산·심사청구 등 개원 후 실무 지원이 가능합니다. 개원 후까지 이어지는 연결된 지원을 지향합니다.",
  },
];

const DEPARTMENTS = ["선택하세요", "정형외과", "재활의학과", "신경외과", "마취통증의학과", "기타"];
const PLANNED_LOCATIONS = [
  "선택하세요",
  "서울특별시",
  "경기도",
  "인천광역시",
  "강원도",
  "충청도(세종, 대전 포함)",
  "경상도(대구,부산,울산 포함)",
  "전라도(광주 포함)",
  "제주도",
];
const PLANNED_SCHEDULES = ["선택하세요", "3개월 이내", "6개월 이내", "1년 이내", "기타"];

export function ContactSection() {
  const [form, setForm] = useState({ name: "", contact: "", department: "", plannedLocation: "", plannedSchedule: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const text = await res.text();
      const data = text ? (() => { try { return JSON.parse(text); } catch { return {}; } })() : {};
      if (!res.ok) {
        const msg = data?.error || "제출에 실패했습니다. 잠시 후 다시 시도해 주세요.";
        setError(msg);
        return;
      }
      setSent(true);
      setTimeout(() => setSent(false), 5000);
      setForm({ name: "", contact: "", department: "", plannedLocation: "", plannedSchedule: "", message: "" });
    } catch {
      setError("네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <SectionCanvas id="contact" chapter="Chapter 04. Start Now" panelClassName="pb-0" panelOverflowVisible sectionClassName="scroll-mt-20">
      <div className="grid gap-16 pb-10 lg:grid-cols-2">

        {/* ─── 좌측: FAQ ─── */}
        <motion.div
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="mb-8 text-3xl font-bold text-primary-darker">자주 묻는 질문</h2>
          <div className="space-y-0">
            {FAQ_LIST.map((faq, i) => (
              /* details + group → group-open: 변형 활성화 */
              <details
                key={i}
                className="group border-b border-gray-100 pb-4 pt-4 first:pt-0"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium text-gray-900 transition-colors hover:text-primary">
                  <span>{faq.q}</span>
                  <span className="ml-2 shrink-0 text-gray-400 transition-transform duration-200 group-open:rotate-180">
                    <span className="material-symbols-outlined">expand_more</span>
                  </span>
                </summary>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{faq.a}</p>
              </details>
            ))}
          </div>
        </motion.div>

        {/* ─── 우측: 상담 신청 폼 ─── */}
        <motion.div
          initial={{ opacity: 0, x: 16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <div className="rounded-2xl bg-gray-50 p-8">
            <h2 className="mb-6 text-2xl font-bold text-gray-900">상담 신청</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  성함
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                  placeholder="홍길동 원장님"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  연락처
                </label>
                <input
                  type="tel"
                  required
                  value={form.contact}
                  onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
                  placeholder="010-0000-0000"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  진료과목
                </label>
                <select
                  value={form.department}
                  onChange={(e) => setForm((p) => ({ ...p, department: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {DEPARTMENTS.map((it) => (
                    <option key={it} value={it === "선택하세요" ? "" : it}>
                      {it}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  개원 예정지
                </label>
                <select
                  value={form.plannedLocation}
                  onChange={(e) => setForm((p) => ({ ...p, plannedLocation: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {PLANNED_LOCATIONS.map((it) => (
                    <option key={it} value={it === "선택하세요" ? "" : it}>
                      {it}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  개원 희망 일정
                </label>
                <select
                  value={form.plannedSchedule}
                  onChange={(e) => setForm((p) => ({ ...p, plannedSchedule: e.target.value }))}
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm text-gray-900 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                >
                  {PLANNED_SCHEDULES.map((it) => (
                    <option key={it} value={it === "선택하세요" ? "" : it}>
                      {it}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-gray-700">
                  문의 내용 <span className="text-gray-400">(선택)</span>
                </label>
                <textarea
                  rows={3}
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  placeholder="궁금한 사항을 간단히 적어주세요"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
              <p className="text-xs text-gray-400">
                제출된 정보는 상담 목적으로만 사용되며 제3자에게 제공되지 않습니다.
              </p>
              {error && (
                <p className="rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600">
                  {error}
                </p>
              )}
              <button
                type="submit"
                disabled={loading}
                className="w-full rounded-lg bg-primary py-3 font-bold text-white shadow-lg transition-all hover:bg-primary/90 disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {sent ? "신청 완료! 곧 연락드리겠습니다 ✓" : loading ? "제출 중…" : "무료 상담 신청하기"}
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </SectionCanvas>
  );
}
