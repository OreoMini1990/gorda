"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { FINAL_CTA, CONTACT_INTERESTS } from "@/lib/constants";
import { motion } from "framer-motion";

export function FinalCTA() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    interests: [] as string[],
    message: "",
  });

  const toggleInterest = (item: string) => {
    setForm((prev) => ({
      ...prev,
      interests: prev.interests.includes(item)
        ? prev.interests.filter((x) => x !== item)
        : [...prev.interests, item],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", form);
    setForm({ name: "", contact: "", interests: [], message: "" });
  };

  return (
    <section id="contact" className="bg-navy py-14 sm:py-20 text-white">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section-h1 font-bold text-center"
        >
          {FINAL_CTA.headline[0]}
          <br />
          {FINAL_CTA.headline[1]}
        </motion.h2>

        <motion.form
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="mt-10 space-y-6 rounded-card border border-white/20 bg-white/5 p-6 backdrop-blur-sm"
        >
          <div>
            <label htmlFor="name" className="block text-small font-medium text-white/90">
              이름
            </label>
            <input
              id="name"
              type="text"
              required
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
              className="mt-1 w-full rounded-button border border-white/30 bg-white/10 px-4 py-3 text-body text-white placeholder:text-white/50 focus:border-yellow focus:outline-none focus:ring-1 focus:ring-yellow"
              placeholder="이름을 입력하세요"
            />
          </div>
          <div>
            <label htmlFor="contact" className="block text-small font-medium text-white/90">
              연락처
            </label>
            <input
              id="contact"
              type="tel"
              required
              value={form.contact}
              onChange={(e) => setForm((p) => ({ ...p, contact: e.target.value }))}
              className="mt-1 w-full rounded-button border border-white/30 bg-white/10 px-4 py-3 text-body text-white placeholder:text-white/50 focus:border-yellow focus:outline-none focus:ring-1 focus:ring-yellow"
              placeholder="연락처를 입력하세요"
            />
          </div>
          <div>
            <span className="block text-small font-medium text-white/90">
              관심 항목 (복수 선택)
            </span>
            <div className="mt-2 flex flex-wrap gap-2">
              {CONTACT_INTERESTS.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => toggleInterest(item)}
                  className={`rounded-button border px-3 py-1.5 text-small transition-colors ${
                    form.interests.includes(item)
                      ? "border-yellow bg-yellow text-navy"
                      : "border-white/30 text-white/90 hover:bg-white/10"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="message" className="block text-small font-medium text-white/90">
              문의내용
            </label>
            <textarea
              id="message"
              rows={4}
              value={form.message}
              onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
              className="mt-1 w-full rounded-button border border-white/30 bg-white/10 px-4 py-3 text-body text-white placeholder:text-white/50 focus:border-yellow focus:outline-none focus:ring-1 focus:ring-yellow"
              placeholder="문의 내용을 간단히 적어주세요"
            />
          </div>
          <p className="text-small text-white/70">
            제출된 정보는 상담 목적으로만 사용되며, 동의 없이 제3자에게 제공되지 않습니다.
          </p>
          <Button type="submit" variant="primary" className="w-full !bg-yellow !text-navy hover:!bg-yellow-light">
            {FINAL_CTA.button}
          </Button>
        </motion.form>
      </div>
    </section>
  );
}
