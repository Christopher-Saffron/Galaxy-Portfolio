import { motion } from "framer-motion";

export default function SlowMovingStarsBefore() {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: -100 }}
      transition={{ duration: 8 }}
      viewport={{ once: true }}
      className=" absolute h-[70%] top-0 left-0 w-screen border-2 border-green-500 bg-stars bg-[length:800px_800px]"
    />
  );
}
