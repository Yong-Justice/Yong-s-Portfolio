"use client";

import { motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function Reveal({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const reduced = useReducedMotion();
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => setHydrated(true), []);

  if (!hydrated || reduced) return <div className={className}>{children}</div>;

  return <motion.div className={className} initial={reduced ? false : { opacity: 0, y: 34, scale: .975 }} whileInView={reduced ? {} : { opacity: 1, y: 0, scale: 1 }} viewport={{ once: true, amount: .16 }} transition={{ duration: .68, delay, ease: [.22, 1, .36, 1] }}>{children}</motion.div>;
}
