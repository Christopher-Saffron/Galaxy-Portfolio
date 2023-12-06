import Footer from "@/components/pl/Footer";
import Mainthreed from "@/components/Mainthreed";
import Nav from "@/components/pl/Nav";

export const metadata = {
  title: "Krzysztof Szafran Portfolio",
  description: "Web Development i Organizacja Ruchu",
};

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <Mainthreed />
      {children}
      <Footer />
    </>
  );
}
