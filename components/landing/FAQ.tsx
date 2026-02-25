"use client";

import { Accordion } from "@/components/ui/Accordion";
import { FAQ_ITEMS } from "@/lib/constants";
import { motion } from "framer-motion";

export function FAQ() {
  const items = FAQ_ITEMS.map((faq) => ({
    id: faq.id,
    title: faq.q,
    content: <p>{faq.a}</p>,
  }));

  return (
    <section id="faq" className="bg-gray-light/10 py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section-h1 font-bold text-navy"
        >
          자주 묻는 질문
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-8 rounded-card border border-gray-light/50 bg-white p-6 shadow-subtle"
        >
          <Accordion items={items} />
        </motion.div>
      </div>
    </section>
  );
}
