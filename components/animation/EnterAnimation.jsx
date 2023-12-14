"use client";

import { animate, motion } from "framer-motion";
import Image from "next/image";
import Blackbars from "./Blackbars";
import ScreenPlanets from "./ScreenPlanets";
import ScreenClouds from "./ScreenClouds";
import ScreenInitial from "./ScreenInitial";
import ScreenMainRocket from "./ScreenMainRocket";
import EvenIfYouMiss from "./EvenIfYouMiss";

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
    <div className="w-full border border-red-500   top-0 left-0 z-50 ">
      {/* <div className="w-full border border-red-500  fixed top-0 left-0 z-50 "></div> */}
      {/* ////////////// PASKI ////////////// */}
      {/* <Blackbars /> */}

      <motion.div
        initial={{ y: "-100%" }}
        animate={{ y: "0" }}
        transition={{ duration: 3 }}
        className="relative h-full border-4 border-blue-500"
      >
        {/* ////////////// CLOUDS - THIRD SCREEN ////////////// */}
        {/* <ScreenPlanets /> */}
        {/* ////////////// CLOUDS - SECOND SCREEN ////////////// */}
        <ScreenClouds />

        {/* ////////////// THE INITIAL SCREEN ////////////// */}
      </motion.div>
      <ScreenInitial />

      {/* ////////////// MAIN ROCKET ////////////// */}
      <ScreenMainRocket />
      {/* <EvenIfYouMiss /> */}
    </div>
  );
}
