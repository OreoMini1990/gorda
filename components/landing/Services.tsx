"use client";

import { Card } from "@/components/ui/Card";
import { SERVICES_LIST } from "@/lib/constants";
import { motion } from "framer-motion";

export function Services() {
  return (
    <section className="bg-gray-light/10 py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section-h1 font-bold text-navy"
        >
          서비스 영역
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-2 text-body text-gray-dark"
        >
          필요한 모듈만 선택해 조합할 수 있습니다.
        </motion.p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES_LIST.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
            >
              <Card hover className="h-full">
                <h3 className="font-semibold text-navy">{s.title}</h3>
                <p className="mt-1 text-small text-gray-dark">{s.desc}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
