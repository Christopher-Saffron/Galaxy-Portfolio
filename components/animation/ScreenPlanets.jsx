import Image from "next/image";
import SlowMovingStars from "./SlowMovingStars";
import { motion } from "framer-motion";

export default function ScreenPlanets() {
  return (
    <div className="relative w-full h-[3600px] bg-[#01070D] bg-stars bg-[length:400px_400px] overflow-hidden">
      {/* ////////////// SLOW MOVING STARS////////////// */}
      <SlowMovingStars />
      {/* ////////////// 4 TOP PLANET PATHS ////////////// */}
      {/* <div className="absolute w-full   h-[100%] max-h-[1600px] border-2 border-blue-500 top-0 bg-4paths ">
          <Image
            src={"/animation/4paths.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full absolute left-0 top-0 origin-top origin  "
            alt=""
          />
        </div> */}
      {/* <div className="absolute w-full   h-[100%] max-h-[1600px] border-2 border-blue-500 top-0 ">
          <Image
            src={"/animation/4paths.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full absolute left-0 top-0 origin-top origin  "
            alt=""
          />
        </div> */}
      {/* ////////////// SUN ////////////// */}
      <motion.div
        // initial={{ x: "45%", y: "-45%", rotateZ: 0 }}
        // whileInView={{ scale: 1.03, x: "45%", y: "-45%", rotateZ: 63 }}
        initial={{ x: "-45%", y: "-40%", rotateZ: 0 }}
        whileInView={{ scale: 1.03, x: "-45%", y: "-40%", rotateZ: -33 }}
        transition={{ duration: 6 }}
        className="absolute w-full h-full max-h-[1200px] max-w-[1200px] origin-center  overflow-hidden   left-0 -translate-x-[45%]  -translate-y-[45%]   "
      >
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/sun.svg"}
          sizes={"100vw"}
          fill
          className="w-auto absolute left-0 top-0 object-contain"
          alt=""
        />
      </motion.div>
      {/* <div className="absolute w-[100%] origin-center  overflow-hidden max-w-[9100%] h-[100%]  border-4 border-blue-500 top-0 ">
          <Image
            src={"/animation/sun.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto absolute left-0 top-0"
            alt=""
          />
        </div> */}
      {/* ////////////// MERCURY ////////////// */}
      <motion.div
        whileInView={{ rotate: 15 }}
        transition={{ duration: 8 }}
        className="absolute w-full origin-top-right  h-[100%] max-h-[1400px]  bottom-[3200px] "
      >
        {/* <Image
            src={"/animation/pathVenus.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1270px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/mercury.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute right-[30%] bottom-0"
          alt=""
        />
      </motion.div>
      {/* ////////////// Venus ////////////// */}
      <motion.div
        whileInView={{ rotate: -15 }}
        transition={{ duration: 8 }}
        className="absolute w-full origin-top-right  h-[100%] max-h-[1400px]  bottom-[3250px] "
      >
        {/* <Image
            src={"/animation/pathVenus.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1270px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/venus.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute left-[30%] bottom-0"
          alt=""
        />
      </motion.div>
      {/* ////////////// EARTH ////////////// */}
      {/* <div className="absolute w-full h-[100%] max-h-[1500px]  bottom-[3050px] ">
          <Image
            src={"/animation/pathEarth.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1470px] absolute left-0 top-0  "
            alt=""
          />
        </div> */}
      {/* ////////////// MARS ////////////// */}
      <motion.div
        whileInView={{ rotate: 25, x: "-25%" }}
        transition={{ duration: 8 }}
        className="absolute origin-top-right w-full h-[100%] max-h-[1200px]  bottom-[2000px] "
      >
        {/* <Image
            src={"/animation/pathMars.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1170px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/mars.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute right-[19%] bottom-[40%]"
          alt=""
        />
      </motion.div>
      {/* ////////////// JUPITER ////////////// */}
      <motion.div
        whileInView={{ x: "15%", y: "5%", rotateZ: -5 }}
        transition={{ duration: 8 }}
        className="absolute w-full origin-top h-[100%] max-h-[1200px]  bottom-[2250px] "
      >
        {/* <Image
            src={"/animation/pathJupiter.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1100px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/jupiter.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute left-[10%] bottom-[1%]"
          alt=""
        />
      </motion.div>
      {/* ////////////// NEPTUNE ////////////// */}
      <motion.div
        whileInView={{ x: "15%", y: "13%", rotateZ: -15 }}
        transition={{ duration: 8 }}
        className="absolute w-full h-[100%] max-h-[1200px]  bottom-[1100px] "
      >
        {/* <Image
            src={"/animation/pathNeptune.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1100px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/neptune.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] origin-top-right absolute left-[40%] bottom-[55%] "
          alt=""
        />
      </motion.div>
      {/* ////////////// SATURN ////////////// */}
      <motion.div
        whileInView={{ rotate: 15 }}
        transition={{ duration: 8 }}
        className="absolute w-full h-[100%] max-h-[1200px]  bottom-0 "
      >
        {/* <Image
            src={"/animation/pathSaturn.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[890px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          loading={"eager"}
          priority={true}
          src={"/animation/saturn.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute left-10% bottom-[18%] "
          alt=""
        />
      </motion.div>
    </div>
  );
}
