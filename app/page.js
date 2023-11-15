import Title from "@/components/Title";
import NameCard from "@/components/NameCard";
import NameCardImage from "@/components/NameCardImage";
import Summary from "@/components/Summary";
import History from "@/components/History";
import Offer from "@/components/Offer";
import Languages from "@/components/Languages";
import Media from "@/components/Media";

export default function Home() {
  return (
    <main className="main-grid  max-w-fit mx-auto">
      <Title />
      <NameCard />
      <NameCardImage />
      <Summary />
      <History />
      <Offer />
      <Languages />
      <Media />
    </main>
  );
}
