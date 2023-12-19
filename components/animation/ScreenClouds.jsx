import Image from "next/image";
import SlowMovingStarsBefore from "./SlowMovingStarsBefore";
import { motion } from "framer-motion";

export default function ScreenClouds() {
  return (
    <>
      {/* /////////// DIV 1 ////////////// */}
      {/* /////////// DIV 1 ////////////// */}
      {/* /////////// DIV 1 ////////////// */}
      {/* <motion.div
        animate={{ y: "-100%" }}
        transition={{ duration: 5 }}
        className="absolute z-100 w-screen h-fit "
      > */}
      <div className="relative w-full h-[5525px]  animation-space1 overflow-hidden">
        <SlowMovingStarsBefore />
        <motion.div
          initial={{ x: "0%", y: "0%" }}
          whileInView={{ x: "9%", y: "-2%" }}
          transition={{ duration: 6 }}
          className="absolute bottom-0 left-0 w-full h-full "
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
        <div className="absolute w-full h-fit bottom-[3000px] overflow-hidden">
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
            transition={{ duration: 8, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full "
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
            transition={{ duration: 7, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full "
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
            transition={{ duration: 6, delay: 1 }}
            className="absolute bottom-0 left-0 w-full h-full "
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
            whileInView={{ x: "7%" }}
            transition={{ duration: 5 }}
            className="absolute bottom-0 left-0 w-full h-full "
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
          whileInView={{ y: "-8%" }}
          transition={{ duration: 9 }}
          className="absolute bottom-0 left-0 w-full h-full "
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
          whileInView={{ y: "-7%" }}
          transition={{ duration: 9 }}
          className="absolute bottom-0 left-0 w-full h-full "
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
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ x: "-25%" }}
          transition={{ duration: 6 }}
          className="absolute bottom-0 left-0 w-full h-full "
        >
          <Image
            loading={"eager"}
            priority={true}
            src={"/animation/satellite1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute bottom-[1000px] left-[30%]"
            alt=""
          />
        </motion.div>
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
      {/* /////////// DIV 2 ////////////// */}
      {/* /////////// DIV 2 ////////////// */}
      {/* /////////// DIV 2 ////////////// */}
      <div className="relative w-full h-[2042px]  animation-clouds">
        <motion.div
          // animate={{ y: 0 }}
          whileInView={{ x: "15%" }}
          transition={{ duration: 5, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full "
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
          whileInView={{ x: "10%" }}
          transition={{ duration: 6 }}
          className="absolute bottom-0 left-0 w-full h-full "
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
          className="absolute bottom-0 left-0 w-full h-full "
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
        {/* <motion.div
          // animate={{ y: 0 }}
          whileInView={{ y: 40 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-0 left-0 w-full h-full "
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
          className="absolute bottom-0 left-0 w-full h-full "
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
          className="absolute bottom-0 left-0 w-full h-full "
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
        </motion.div> */}
      </div>
      {/* </motion.div> */}
    </>
  );
}
