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
    <html lang="en" className="dark">
      {/* bg-[#f0f0f0] */}
      <body className="font-lato  bg-[url('../public/cloudy0.svg')]  bg-contain bg-bottom bg-no-repeat dark:text-textSub dark:bg-bgcolor transition all duration-500">
        <Nav />
        <Mainthreed />
        {/* <ModalProvider>{children}</ModalProvider> */}
        {children}

        <Footer />
      </body>
    </html>
  );
}
