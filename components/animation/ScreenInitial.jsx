import Image from "next/image";
import { easeInOut, motion } from "framer-motion";

export default function ScreenInitial() {
  return (
    <motion.div
      animate={{ y: "200%" }}
      transition={{ duration: 2, delay: 1.5, ease: "easeInOut" }}
      className="relative z-[15] w-full h-screen  bg-white    "
    >
      {/* ///// CLOUDS DIV */}
      <div className=" w-full h-screen absolute bottom-full left-0">
        <motion.div
          animate={{ y: 40 }}
          transition={{ duration: 0.6, delay: 1.9, ease: "easeInOut" }}
          className="absolute z-[10] bottom-0 left-0 w-full h-full "
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/clouds3.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-auto absolute bottom-0 left-0"
            alt=""
          />
        </motion.div>
        <motion.div
          animate={{ y: 90 }}
          transition={{ duration: 0.7, delay: 1.8, ease: "easeInOut" }}
          className="absolute z-[12] bottom-0 left-0 w-full h-full "
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/clouds2.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-auto absolute bottom-0 left-0"
            alt=""
          />
        </motion.div>
        <motion.div
          animate={{ y: 170 }}
          transition={{ duration: 0.8, delay: 1.7, ease: "easeInOut" }}
          className="absolute z-[13] bottom-0 left-0 w-full h-full "
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/clouds1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-auto absolute bottom-0 left-0"
            alt=""
          />
        </motion.div>
      </div>

      {/* ///// SHOOT FOR THE MOON DIV */}
      <motion.div
        initial={{ y: "10%", opacity: 0, scale: 0.9 }}
        animate={{ y: "0%", opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute w-full h-full z-[13] "
      >
        <Image
          src="/animation/shootForTheMoon.png"
          width={0}
          height={0}
          sizes="100vw"
          priority
          className=" w-auto max-h-[416px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </motion.div>
    </motion.div>
  );
}
