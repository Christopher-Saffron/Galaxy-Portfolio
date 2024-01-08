"use client";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1, transition: { duration: 0.4 } },
  exit: { opacity: 0, transition: { duration: 0.4 } },
};

export default function Template({ children }) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <AnimatePresence mode="wait">
      <motion.div
        variants={variants}
        initial="hidden"
        animate="enter"
        transition={{ type: "linear" }}
        key={pathName}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
