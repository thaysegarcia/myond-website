import { motion } from "motion/react";
import type { ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  direction?: "up" | "left" | "right";
  delay?: number;
}

const directionOffset = {
  up: { y: 40, x: 0 },
  left: { y: 0, x: -40 },
  right: { y: 0, x: 40 },
};

function MotionSection({
  children,
  direction = "left",
  delay = 0,
}: MotionSectionProps) {
  const offset = directionOffset[direction];

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: "easeIn", delay }}
    >
      {children}
    </motion.div>
  );
}

export default MotionSection;
