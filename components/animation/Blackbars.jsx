import { motion } from "framer-motion";

export default function Blackbars({ setIsAnimating }) {
  return (
    <div className="fixed top-0 left-0 z-50 w-screen h-screen">
      {/* <div className="absolute top-0 left-0 w-[10%] h-screen bg-black z-50 "></div>
      <div className="absolute top-0 right-0 w-[10%] h-screen bg-black z-50 "></div> */}

      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 10 }}
        transition={{ delay: 25, duration: 1.3, ease: "easeOut" }}
        onAnimationComplete={() => {
          setIsAnimating(false);
        }}
        className="absolute top-0 left-0 w-screen h-[10%] bg-bgcolor z-50  "
      >
        {" "}
      </motion.div>
      <motion.div
        initial={{ scale: 1 }}
        animate={{ scale: 10 }}
        transition={{ delay: 25, duration: 1.3, ease: "easeOut" }}
        className="absolute bottom-0 right-0 w-screen h-[10%] bg-bgcolor z-50 "
      ></motion.div>
    </div>
  );
}
