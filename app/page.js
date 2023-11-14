import Nav from "@/components/Nav";
import Mainthreed from "@/components/Mainthreed";
import Title from "@/components/Title";
import NameCard from "@/components/NameCard";
import NameCardImage from "@/components/NameCardImage";
import Summary from "@/components/Summary";
import History from "@/components/History";
import Offer from "@/components/Offer";
import Languages from "@/components/Languages";
import Media from "@/components/Media";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className=" font-lato text-textSub bg-bgcolor">
      <Nav />
      <main className="main-grid  max-w-fit mx-auto">
        <Mainthreed />
        <Title />
        <NameCard />
        <NameCardImage />
        <Summary />
        <History />
        <Offer />
        <Languages />
        <Media />
      </main>
      <Footer />
    </div>
  );
}
