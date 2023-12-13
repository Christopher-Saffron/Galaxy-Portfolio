"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";

const mainPathVariant = {
  transition: {
    duration: 2,
    delay: 2,
  },
  variants: {
    visible: {
      pathLength: 1,
    },
    hidden: {
      pathLength: 0,
    },
  },
};

export default function EnterAnimation() {
  //   animate(0, 100, {
  //     onUpdate: (latest) => console.log(latest),
  //     duration: 3,
  //   });

  return (
    <div className="w-full  border-2 border-green-500">
      {/* // <div className="fixed top-0 left-0 w-screen h-screen border-2 border-green-500 z-20 scroll"> */}

      {/* ////////////// CLOUDS - THIRD SCREEN ////////////// */}
      <div className="relative w-full h-[6645px] bg-[#01070D]">
        {/* ////////////// MARS ////////////// */}
        {/* <div className="absolute w-full h-[100%] max-h-[1200px] border-2 border-orange-500 bottom-[1100px] ">
          <Image
            src={"/animation/pathMars.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1170px] absolute left-0 top-0  "
            alt=""
          />
          <Image
            src={"/animation/mars.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[10%] bottom-[55%] "
            alt=""
          />
        </div> */}
        {/* ////////////// JUPITER ////////////// */}
        <div className="absolute w-full h-[100%] max-h-[1200px] border-2 border-orange-500 bottom-[1100px] ">
          <Image
            src={"/animation/pathJupiter.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1100px] absolute left-0 top-0  "
            alt=""
          />
          <Image
            src={"/animation/jupiter.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[10%] bottom-[55%] "
            alt=""
          />
        </div>
        {/* ////////////// NEPTUNE ////////////// */}
        <div className="absolute w-full h-[100%] max-h-[1200px] border-2 border-orange-500 bottom-[1100px] ">
          <Image
            src={"/animation/pathNeptune.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1100px] absolute left-0 top-0  "
            alt=""
          />
          <Image
            src={"/animation/neptune.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[10%] bottom-[55%] "
            alt=""
          />
        </div>
        {/* ////////////// SATURN ////////////// */}
        <div className="absolute w-full h-[100%] max-h-[1200px] border-2 border-orange-500 bottom-0 ">
          <Image
            src={"/animation/pathSaturn.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[890px] absolute left-0 top-0  "
            alt=""
          />
          <Image
            src={"/animation/saturn.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute left-10% bottom-[18%] "
            alt=""
          />
        </div>
      </div>
      {/* ////////////// CLOUDS - SECOND SCREEN ////////////// */}
      <div className="relative w-full h-[7045px] animation-space1">
        <Image
          src={"/animation/satellite2.svg"}
          sizes={"50vw"}
          width={0}
          height={0}
          className="w-[900px] h-auto absolute right-[15%] top-[2%] "
          alt=""
        />
        <div className="absolute w-full h-fit bottom-[3700px]">
          <Image
            src={"/animation/fade1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] relative  "
            alt=""
          />
          <Image
            src={"/animation/comet3.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[25%] bottom-[50%] "
            alt=""
          />
          <Image
            src={"/animation/comet2.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[9%] bottom-[53%] "
            alt=""
          />
          <Image
            src={"/animation/comet1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[2%] bottom-[40%] "
            alt=""
          />
        </div>
        <div className="absolute w-full h-fit bottom-[2700px] ">
          <Image
            src={"/animation/moonBackground.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto]   "
            alt=""
          />
          <Image
            src={"/animation/moon.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute top-0 right-[5%]  "
            alt=""
          />
        </div>
        <Image
          src={"/animation/rocketFlying1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[2000px] left-[70%]"
          alt=""
        />
        <Image
          src={"/animation/rocketFlying2.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[1600px] left-[80%]"
          alt=""
        />
        <Image
          src={"/animation/satellite1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[1000px] left-48"
          alt=""
        />
        <Image
          src={"/animation/waves1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-0 left-0"
          alt=""
        />
      </div>
      <div className="relative w-full h-[2542px] border-4 border-orange-500 animation-clouds">
        <Image
          src={"/animation/balloon2.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[600px] right-1/4"
          alt=""
        />
        <Image
          src={"/animation/balloon1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[500px] left-1/4"
          alt=""
        />
        <Image
          src={"/animation/smallClouds.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[500px] left-1/2 -translate-x-1/2"
          alt=""
        />
        <Image
          src={"/animation/fields.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[110px] left-0"
          alt=""
        />
        <Image
          src={"/animation/clouds3.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-12 left-0"
          alt=""
        />
        <Image
          src={"/animation/clouds2.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-6 left-0"
          alt=""
        />
        <Image
          src={"/animation/clouds1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-0 left-0"
          alt=""
        />
      </div>

      {/* ////////////// THE INITIAL SCREEN ////////////// */}
      <div className="relative w-full h-screen overflow-y-scroll bg-white ">
        <Image
          src="/animation/shootForTheMoon.png"
          width={0}
          height={0}
          sizes="100vw"
          //   style={{ width: "auto", height: "416px" }} // optional
          // className=" w-auto h-[416px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          className=" w-auto max-h-[416px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
          alt=""
        />
      </div>
      <div className=" w-screen fixed left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2">
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
      </div>
      <svg
        width="max"
        height="max"
        viewBox="0 0 169 62"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <motion.path
          d="M101.11 1.28101L56.4492 1.28101L56.4492 60.5965L101.11 60.5965"
          stroke="white"
          //   strokeWidth="2"
          strokeLinejoin="bevel"
          //   strokeDasharray="4 4"
          {...mainPathVariant}
          animate="visible"
          initial="hidden"
          style={{ fill: "none", fillRule: "evenodd", strokeLinejoin: "bevel" }}
        /> */}
        {/* <path
          d="M101.11 1.28101L56.4492 1.28101L56.4492 60.5965L101.11 60.5965"
          stroke="white"
          strokeWidth="2"
          strokeLinejoin="bevel"
          strokeDasharray="4 4"
        /> */}
        {/* <path
          d="M101.11 1.28101L56.4492 1.28101L56.4492 60.5965L101.11 60.5965"
          stroke="white"
          stroke-width="2"
          stroke-linejoin="bevel"
          stroke-dasharray="4 4"
        /> */}
        {/* <motion.path
          d="M101.11 1.28101L56.4492 1.28101L56.4492 60.5965L101.11 60.5965"
          stroke="white"
          strokeWidth="2"
          strokeLineJoin="bevel"
          strokeDashArray="4 4"
          //   animate="visible"
          //   initial="hidden"
          //   {...mainPathVariant}
        /> */}
      </svg>
    </div>
  );
}
