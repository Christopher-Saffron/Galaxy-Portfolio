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

      {/* ////////////// CLOUDS - SECOND SCREEN ////////////// */}
      <div className="relative w-full h-[2542px] border-4 border-orange-500 animation-clouds">
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
          className=" w-auto h-[416px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
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
