import Image from "next/image";
import { motion } from "framer-motion";

export default function ScreenMainRocket() {
  return (
    <div className=" w-screen fixed left-1/2 top-[55%] z-[11] -translate-x-1/2 -translate-y-1/2">
      <motion.div
        animate={{ scale: [1, 0.7, 1, 3], y: ["50%", "40%", "50%", "5%"] }}
        transition={{
          duration: 24,
          ease: "backInOut",
          times: [0, 0.4, 0.9, 1],
        }}
        className=" w-full h-screen"
      >
        <motion.div
          initial={{ x: 0, y: 0, scale: 1 }}
          animate={{
            x: ["0%", "-3%", "-4%", "6%", "-2%", "5%", "-9%", "0%"],
            y: [0, 30, 35, -20, 15, -45, 25, 1],
            rotate: [0, 2, -2, 1, 0, 2, -2, 0],
            scale: [1, 1.05, 0.95, 1, 1.02, 0.98, 1],
          }}
          transition={{
            duration: 10,
            ease: "easeInOut",
            repeat: Infinity,
          }}
          className="relative "
        >
          <motion.div
            initial={{ scaleX: 1 }}
            animate={{ scaleX: 0 }}
            transition={{ duration: 4, delay: 5 }}
            className="relative "
          >
            <Image
              src="/animation/rocketFumes.svg"
              width={0}
              height={0}
              sizes="100vw"
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
            <motion.div
              animate={{
                rotate: [0, 3, -3, 7, -7, 0],
                scaleY: [2, 1],
                scale: [1, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 10,
                scaleY: { duration: 5, repeat: 0 },
                scale: { duration: 6, repeat: 0, delay: 5 },
              }}
              className=" origin-top"
            >
              <Image
                src="/animation/rocketFire.svg"
                width={0}
                height={0}
                sizes="100vw"
                className=" w-auto top-full px-28 absolute left-1/2 -translate-x-1/2 "
                alt=""
              />
            </motion.div>
            <Image
              src="/animation/rocketMiddle.svg"
              width={0}
              height={0}
              sizes="100vw"
              className=" w-auto  px-28 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
              alt=""
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
}
