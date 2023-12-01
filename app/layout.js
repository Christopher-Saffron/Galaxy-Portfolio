import "react-medium-image-zoom/dist/styles.css";
import "./globals.css";
import "@/styles/navbar.css";
import "@/styles/checkbox.css";
import "@/styles/work.css";
import "@/styles/project.css";
import "@/styles/resume.css";

export const metadata = {
  title: "Christopher Saffron Portfolio",
  description: "Web development and Traffic Management",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className="font-lato  bg-[url('../public/cloudy0.svg')]  bg-contain bg-bottom bg-no-repeat dark:text-textSub dark:bg-bgcolor transition all duration-500">
        {children}
      </body>
    </html>
  );
}
