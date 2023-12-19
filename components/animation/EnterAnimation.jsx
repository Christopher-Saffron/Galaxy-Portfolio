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
import AmongTheStars from "./AmongTheStars";

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
    <motion.div className="   w-screen h-screen  top-0 left-0   bg-white ">
      <ScreenInitial />
      <motion.div
        // initial={{ y: "calc(0% + -100vh)" }}
        animate={{
          y: [
            "calc(-100% + 0vh)",
            // "calc(-40% + 0vh)",
            // "calc(-30% + 0vh)",
            // "calc(-5% + -100vh)",
            "calc(0% + -100vh)",
          ],
        }}
        transition={{
          duration: 22,
          delay: 2.3,
          // ease: "linear",
          // times: [0, 0.95, 1],
        }}
        className="overflow-hidden"
      >
        <ScreenPlanets />
        <ScreenClouds />
      </motion.div>

      <ScreenMainRocket />
      <EvenIfYouMiss />
      <AmongTheStars />
      {/* <Blackbars /> */}
    </motion.div>
  );
}

// return (
//   <div className="w-full   top-0 left-0 z-[100] overflow-hidden bg-white ">
//     {/* <div className="w-full border border-red-500  fixed top-0 left-0 z-50 "></div> */}
//     {/* ////////////// PASKI ////////////// */}
{
  /* <Blackbars /> */
}
//     {/* <Preloading /> */}
//     <motion.div
//       // initial={{ y: "100%" }}
//       animate={{
//         y: [
//           // "calc(-100% + 100vh)",
//           // "calc(0% + 100vh)",
//           "calc(-100% + 100vh)",
//           "calc(0% + 0vh)",
//         ],
//         // scale: [0, 0.5],
//       }}
//       transition={{
//         duration: 16,
//         // y: { delay: 0, duration: 15, times: [0, 0.1, 0.3, 1] },
//         y: { delay: 2, duration: 15 },
//         // scale: { duration: 0.001, delay: 0 },
//         // times: [0, 0.001, 0.002, 1],
//       }}
//       className="relative  h-full z-100  "
//     >
//       {/* ////////////// CLOUDS - THIRD SCREEN ////////////// */}
//       {/* <ScreenPlanets /> */}
//       {/* ////////////// CLOUDS - SECOND SCREEN ////////////// */}
//       <ScreenClouds />
//       <ScreenInitial />
//       {/* ////////////// THE INITIAL SCREEN ////////////// */}
//     </motion.div>
//     <ScreenMainRocket />

//     {/* ////////////// MAIN ROCKET ////////////// */}
//     {/* <ScreenMainRocket /> */}
//     {/* <EvenIfYouMiss /> */}
//   </div>
// );
