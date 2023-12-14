import Footer from "@/components/en/Footer";
import Mainthreed from "@/components/Mainthreed";
import Nav from "@/components/en/Nav";

export const metadata = {
  title: "Christopher Saffron Portfolio",
  description: "Web development and Traffic Management",
};

export default function Layout({ children }) {
  return (
    <>
      {/* <Nav />
      <Mainthreed /> */}
      {children}
      {/* <Footer /> */}
    </>
  );
}
