import Image from "next/image";
import { motion } from "framer-motion";

export default function ScreenInitial() {
  return (
    <div className=" w-full h-screen  bg-white z-[500]  ">
      <motion.div
        initial={{ y: 50, opacity: 0, scale: 0.9 }}
        animate={{ y: 0, opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="relative w-full h-full "
      >
        <Image
          src="/animation/shootForTheMoon.png"
          width={0}
          height={0}
          sizes="100vw"
          priority
          //   style={{ width: "auto", height: "416px" }} // optional
          // className=" w-auto h-[416px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          className=" w-auto max-h-[416px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </motion.div>
    </div>
  );
}
