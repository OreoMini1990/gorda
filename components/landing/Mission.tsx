"use client";

import { MISSION } from "@/lib/constants";
import { motion } from "framer-motion";

export function Mission() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-section-h2 font-semibold text-gray"
        >
          {MISSION.title}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 text-body font-medium text-navy"
        >
          {MISSION.statement}
        </motion.p>
      </div>
    </section>
  );
}
