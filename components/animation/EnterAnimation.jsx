"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";
import ScreenPlanets from "./ScreenPlanets";
import ScreenClouds from "./ScreenClouds";
import ScreenInitial from "./ScreenInitial";
import ScreenMainRocket from "./ScreenMainRocket";
import EvenIfYouMiss from "./EvenIfYouMiss";
import { useRef } from "react";
import Blackbars from "./Blackbars";
import Preloading from "./Preloading";

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
    <div className="w-full   top-0 left-0 z-50 overflow-hidden ">
      {/* <div className="w-full border border-red-500  fixed top-0 left-0 z-50 "></div> */}
      {/* ////////////// PASKI ////////////// */}
      <Blackbars />
      <Preloading />
      <motion.div
        initial={{ y: "100%" }}
        animate={{
          y: [
            "calc(-100% + 100vh)",
            "calc(0% + 100vh)",
            "calc(-100% + 100vh)",
            "calc(0% + 0vh)",
          ],
          scale: [0, 1],
        }}
        transition={{
          duration: 16,
          y: { delay: 0, duration: 15, times: [0, 0.1, 0.3, 1] },
          scale: { duration: 2, delay: 0 },
          // times: [0, 0.001, 0.01, 1],
        }}
        className="relative  h-full  "
      >
        {/* ////////////// CLOUDS - THIRD SCREEN ////////////// */}
        <ScreenPlanets />
        {/* ////////////// CLOUDS - SECOND SCREEN ////////////// */}
        <ScreenClouds />
        <ScreenInitial />

        {/* ////////////// THE INITIAL SCREEN ////////////// */}
      </motion.div>

      {/* ////////////// MAIN ROCKET ////////////// */}
      <ScreenMainRocket />
      <EvenIfYouMiss />
    </div>
  );
}
