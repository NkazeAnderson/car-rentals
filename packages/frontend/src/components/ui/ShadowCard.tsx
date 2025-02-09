import React from "react";
import { motion } from "motion/react";

function ShadowCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ rotateY: 90 }}
      whileInView={{ rotateY: 0, transition: { duration: 1 } }}
      className=" customShadow rounded-md p-4"
    >
      {children}
    </motion.div>
  );
}

export default ShadowCard;
