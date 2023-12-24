import Title from "@/components/jp/home/Title";
import NameCard from "@/components/jp/home/NameCard";
import NameCardImage from "@/components/jp/home/NameCardImage";
import Summary from "@/components/jp/home/Summary";
import History from "@/components/jp/home/History";
import Offer from "@/components/jp/home/Offer";
import Languages from "@/components/jp/home/Languages";
import Media from "@/components/jp/home/Media";

import { AnimatePresence, motion, Spring } from "framer-motion";
import Clouds from "@/components/jp/Clouds";
import FooterBreak from "@/components/jp/FooterBreak";

export default function Home() {
  return (
    <>
      <main className="default-grid-holder transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3 max-w-fit mx-auto ">
        <Title />
        <NameCard />
        <Summary />
        <History />
        <Offer />
        <Languages />
        <Media />
      </main>
      <FooterBreak height={6} />
    </>
  );
}
