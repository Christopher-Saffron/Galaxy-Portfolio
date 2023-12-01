import Footer from "@/components/pl/Footer";
import Mainthreed from "@/components/Mainthreed";
import Nav from "@/components/pl/Nav";

export const metadata = {
  title: "Christopher Saffron Portfolio",
  description: "Web development and Traffic Management",
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
