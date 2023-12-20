import Footer from "@/components/jp/Footer";
import Nav from "@/components/jp/Nav";
import NoSsr from "@/components/no-ssr";
import MilkyWay from "@/components/MilkyWay";

export const metadata = {
  title: "Christopher Saffron Portfolio",
  description: "Web development and Traffic Management",
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
