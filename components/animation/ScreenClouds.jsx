import Image from "next/image";
import SlowMovingStarsBefore from "./SlowMovingStarsBefore";
import { motion } from "framer-motion";

export default function ScreenClouds() {
  return (
    <>
      <div className="relative w-full h-[7045px] animation-space1 overflow-hidden">
        <SlowMovingStarsBefore />
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ x: "6%", y: "-2%" }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/satellite2.svg"}
            sizes={"50vw"}
            width={0}
            height={0}
            className="w-[900px] h-auto absolute right-[15%] top-[2%] "
            alt=""
          />
        </motion.div>
        <div className="absolute w-full h-fit bottom-[3700px] overflow-hidden">
          <div>
            <Image
              loading={"eager"}
              priority={true}
              src={"/animation/fade1.svg"}
              sizes={"100vw"}
              width={0}
              height={0}
              className="w-auto h-[auto] relative  "
              alt=""
            />
          </div>
          <motion.div
            // animate={{ y: 0 }}
            whileInView={{ x: "-90%", y: "20%" }}
            transition={{ duration: 5, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
          >
            <Image
              loading={"eager"}
              priority={true}
              src={"/animation/comet3.svg"}
              sizes={"100vw"}
              width={0}
              height={0}
              className="w-auto h-[auto] absolute right-[25%] bottom-[50%]  "
              alt=""
            />
          </motion.div>
          <motion.div
            // animate={{ y: 0 }}
            whileInView={{ x: "-90%", y: "20%" }}
            transition={{ duration: 4, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
          >
            <Image
              loading={"eager"}
              priority={true}
              src={"/animation/comet2.svg"}
              sizes={"100vw"}
              width={0}
              height={0}
              className="w-auto h-[auto] absolute right-[9%] bottom-[53%] "
              alt=""
            />
          </motion.div>
          <motion.div
            // animate={{ y: 0 }}
            whileInView={{ x: "-90%", y: "20%" }}
            transition={{ duration: 3, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
          >
            <Image
              loading={"eager"}
              priority={true}
              src={"/animation/comet1.svg"}
              sizes={"100vw"}
              width={0}
              height={0}
              className="w-auto h-[auto] absolute right-[2%] bottom-[40%] "
              alt=""
            />
          </motion.div>
        </div>
        <div className="absolute w-full h-fit bottom-[2700px] ">
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/moonBackground.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto]   "
            alt=""
          />
          <motion.div
            // animate={{ y: 0 }}
            whileInView={{ x: "5%" }}
            transition={{ duration: 3, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
          >
            <Image
              loading={"eager"}
              priority={true}
              src={"/animation/moon.svg"}
              sizes={"100vw"}
              width={0}
              height={0}
              className="w-auto h-[auto] absolute top-0 right-[5%]  "
              alt=""
            />
          </motion.div>
        </div>
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ y: -200 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/rocketFlying1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute bottom-[2000px] left-[70%]"
            alt=""
          />
        </motion.div>
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ y: -290 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/rocketFlying2.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute bottom-[1600px] left-[80%]"
            alt=""
          />
        </motion.div>
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/satellite1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[1000px] left-48"
          alt=""
        />
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/waves1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-0 left-0"
          alt=""
        />
      </div>
      <div className="relative w-full h-[2542px] border-4 border-orange-500 animation-clouds">
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ x: 80 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/balloon2.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute bottom-[600px] right-1/4"
            alt=""
          />
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/balloon1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute bottom-[500px] left-1/4"
            alt=""
          />
        </motion.div>
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ x: 40 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/smallClouds.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-auto absolute bottom-[500px] left-1/2 -translate-x-1/2"
            alt=""
          />
        </motion.div>
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ y: 30 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/fields.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-auto absolute bottom-[110px] left-0"
            alt=""
          />
        </motion.div>
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ y: 40 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
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
          // animate={{ y: 0 }}
          whileInView={{ y: 80 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
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
          // animate={{ y: 0 }}
          whileInView={{ y: 190 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full border-4 border-pink-500"
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
    </>
  );
}
