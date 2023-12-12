import Title from "@/components/en/home/Title";
import NameCard from "@/components/en/home/NameCard";
import NameCardImage from "@/components/en/home/NameCardImage";
import Summary from "@/components/en/home/Summary";
import History from "@/components/en/home/History";
import Offer from "@/components/en/home/Offer";
import Languages from "@/components/en/home/Languages";
import Media from "@/components/en/home/Media";

import { AnimatePresence, motion, Spring } from "framer-motion";
import Clouds from "@/components/en/Clouds";
import FooterBreak from "@/components/en/FooterBreak";
import EnterAnimation from "@/components/EnterAnimation";

export default function Home() {
  return (
    // <AnimatePresence mode="wait">
    <>
      {/* <main className="main-grid transition duration-200 shadow-md dark:shadow-main bg-white dark:bg-bgcolor px-3 max-w-fit mx-auto"></main> */}

      {/* <main className="main-grid transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3 max-w-fit mx-auto ">
        <Title />
        <NameCard />
        <NameCardImage />
        <Summary />
        <History />
        <Offer />
        <Languages />
        <Media />
      </main>
      <FooterBreak height={6} /> */}
      <EnterAnimation />
      {/* <Clouds /> */}
    </>
    // </AnimatePresence>
  );
}
