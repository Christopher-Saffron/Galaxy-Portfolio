import Nav from "@/components/Nav";
import "react-medium-image-zoom/dist/styles.css";
import "./globals.css";
import "@/styles/navbar.css";
import "@/styles/checkbox.css";
import "@/styles/work.css";
import "@/styles/project.css";
import "@/styles/resume.css";

import Footer from "@/components/Footer";
import Mainthreed from "@/components/Mainthreed";
// import ModalProvider from "@/components/ModalProvider";

export const metadata = {
  title: "Christopher Saffron Portfolio",
  description: "Web development and Traffic Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-lato text-textSub bg-bgcolor">
        <Nav />
        <Mainthreed />
        {/* <ModalProvider>{children}</ModalProvider> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
