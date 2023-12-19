import { motion } from "framer-motion";

export default function Blackbars() {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen">
      {/* <div className="absolute top-0 left-0 w-[10%] h-screen bg-black z-50 "></div>
      <div className="absolute top-0 right-0 w-[10%] h-screen bg-black z-50 "></div> */}

      <motion.div
        // initial={{ y: "-100%" }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        initial={{ y: 0, scale: 1 }}
        animate={{ y: 0, scale: 10 }}
        transition={{ delay: 25, duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 w-screen h-[10%] bg-bgcolor z-50  "
      ></motion.div>
      <motion.div
        // initial={{ y: "100%" }}
        // animate={{ y: 0 }}
        // transition={{ duration: 0.8, ease: "easeOut" }}
        initial={{ y: 0, scale: 1 }}
        animate={{ y: 0, scale: 10 }}
        transition={{ delay: 25, duration: 0.8, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-screen h-[10%] bg-bgcolor z-50 "
      ></motion.div>
    </div>
  );
}
