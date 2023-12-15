import EnterAnimation from "@/components/animation/EnterAnimation";

export default function Home() {
  return (
    // <AnimatePresence mode="wait">
    <div className="relative border border-red-500 h-screen overflow-hidden">
      aaa
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
    </div>
    // </AnimatePresence>
  );
}
