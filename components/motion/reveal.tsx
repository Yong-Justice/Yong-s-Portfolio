"use client";

import { motion, useReducedMotion } from "motion/react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  return <motion.div className={className} initial={false} whileInView={reduced ? {} : { opacity: [0.72, 1], y: [8, 0] }} viewport={{ once: true, margin: "-8%" }} transition={{ duration: .45, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
