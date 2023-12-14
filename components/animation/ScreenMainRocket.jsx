import Image from "next/image";
import { motion } from "framer-motion";

export default function ScreenMainRocket() {
  return (
    <div className=" w-screen fixed left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        initial={{ x: 0, y: 0, scale: 1 }}
        animate={{
          x: ["0%", "-3%", "-4%", "6%", "-2%", "5%", "-9%", "0%"],
          y: [0, 30, 35 - 20, 15, -45, 25, 1],
          scale: [1, 1.05, 0.95, 1, 1.02, 0.98, 1],
        }}
        transition={{
          //   delay: 1,
          duration: 10,
          //   times: [0, 0.5, 1],
          ease: "easeInOut",
          repeat: Infinity,
        }}
        className="relative border border-red-500"
      >
        <motion.div
          initial={{ scaleX: 1 }}
          animate={{ scaleX: 0 }}
          transition={{ duration: 4, delay: 5 }}
          className="relative border"
        >
          <Image
            src="/animation/rocketFumes.svg"
            width={0}
            height={0}
            sizes="100vw"
            //   style={{ width: "auto", height: "416px" }} // optional
            // className=" w-auto h-[416px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            className=" w-auto px-28 absolute left-1/2  -translate-x-1/2 "
            alt=""
          />
        </motion.div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [5, -5, 5] }}
          transition={{ duration: 0.8, delay: 1, ease: "linear", repeat: 10 }}
          className="relative"
        >
          <Image
            src="/animation/rocketMiddle.svg"
            width={0}
            height={0}
            sizes="100vw"
            //   style={{ width: "auto", height: "416px" }} // optional
            // className=" w-auto h-[416px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            className=" w-auto  px-28 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            alt=""
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
