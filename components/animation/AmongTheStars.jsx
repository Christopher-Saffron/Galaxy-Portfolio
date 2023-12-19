import { motion } from "framer-motion";
import Image from "next/image";

export default function AmongTheStars() {
  return (
    <motion.div
      initial={{ opacity: 0, y: "-30%", x: "-50%" }}
      animate={{ opacity: 1, y: "-50%", x: "-50%" }}
      transition={{ delay: 20, duration: 2 }}
      // className="fixed flex  items-center gap-5 top-1/2 -translate-y-1/2 right-[15%] z-50  font-catamaran text-[#D1D1D1] font-bold text-center text-[64px]  tracking-tight leading-[130%]"
      className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 w-screen px-5 "
    >
      <div className=" ">
        <Image
          src="/animation/amongTheStars.svg"
          sizes="100vw"
          height={0}
          width={0}
          alt=""
          className="w-auto mx-auto max-h-[50%]"
        />
      </div>
    </motion.div>
  );
}
