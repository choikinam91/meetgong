"use client";

import { motion, type MotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}

export function FadeIn({ children, className, delay = 0, y = 16 }: FadeInProps) {
  const animation: MotionProps = {
    initial: { opacity: 0, y },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.55, delay, ease: "easeOut" }
  };

  return (
    <motion.div className={className} {...animation}>
      {children}
    </motion.div>
  );
}
