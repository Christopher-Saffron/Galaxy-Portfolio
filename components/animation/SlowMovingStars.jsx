import { motion } from "framer-motion";

export default function SlowMovingStars() {
  return (
    <motion.div
      initial={{ y: 0 }}
      whileInView={{ y: -300 }}
      transition={{ duration: 12 }}
      // viewport={{ once: true }}
      className=" absolute h-full bottom-0 left-0 w-screen  bg-stars bg-[length:500px_500px]"
    />
  );
}
