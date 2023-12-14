import { motion } from "framer-motion";

export default function EvenIfYouMiss() {
  return (
    <div className="fixed flex  items-center gap-5 top-1/2 -translate-y-1/2 right-[15%] z-50  font-catamaran text-[#D1D1D1] font-bold text-center text-[64px]  tracking-tight leading-[130%]">
      <div className=" ">
        <svg
          width="7"
          height="244"
          viewBox="0 0 7 255"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M5.69727 0.294434L5.69725 254.794"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1, delay: 1 }}
            stroke="#D1D1D1"
            strokeWidth="7"
          />
        </svg>
      </div>
      <motion.div
        transition={{ duration: 1, delay: 1.5 }}
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        className=""
      >
        <p>EVEN IF</p>
        <p>YOU MISS</p>
      </motion.div>
    </div>
  );
}
