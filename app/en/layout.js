import Footer from "@/components/en/Footer";
import MilkyWay from "@/components/MilkyWay";
import Nav from "@/components/en/Nav";
import NoSsr from "@/components/no-ssr";
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
