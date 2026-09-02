 "use client";
import { motion } from "framer-motion";
export function Motion({ children }: { children: React.ReactNode }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: .08 }} transition={{ duration: .55, ease: "easeOut" }}>{children}</motion.div>;
}