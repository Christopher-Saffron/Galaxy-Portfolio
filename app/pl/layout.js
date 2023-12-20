import Footer from "@/components/pl/Footer";
import Nav from "@/components/pl/Nav";
import NoSsr from "@/components/no-ssr";
import MilkyWay from "@/components/MilkyWay";

export const metadata = {
  title: "Krzysztof Szafran Portfolio",
  description: "Web Development i Organizacja Ruchu",
};

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <NoSsr>
        <MilkyWay />
      </NoSsr>
      {children}
      <Footer />
    </>
  );
}
