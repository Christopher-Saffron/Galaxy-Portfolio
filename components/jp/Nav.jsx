import Image from "next/image";
import NavThemeChangev2 from "@/components/jp/NavThemeChangev2";
import Language from "@/components/jp/Language";
import Link from "next/link";
import Hamburger from "./Hamburger";

export default function Nav() {
  return (
    <nav className=" dark:bg-bgcolor2 bg-[#ffffff]  duration-300  p-5  z-10 border-b-4 dark:border-bgcolor2 border-main shadow-xl ">
      <div className="flex items-center justify-between px-6 lg:px-0 lg:justify-evenly  ">
        <div className="flex gap-[60px]">
          <Link href="/jp">
            <Image
              className="logo-dark"
              src="/logo/christophersaffronlogo.svg"
              alt=""
              priority
              height={60}
              width={166}
            />
            <Image
              className="logo-light"
              src="/logo/christophersaffronlogolight.svg"
              alt=""
              priority
              height={60}
              width={166}
            />
          </Link>
          <ul className="items-center gap-7 text-xl hidden lg:flex">
            <Link href="/jp/work/web-development" className=" link">
              ポートフォリオ
            </Link>
            <Link
              href="https://bloghavir.vercel.app/"
              className=" link rounded-md cursor-pointer bg-main px-6 py-4 dark:text-black hover:text-white font-bold"
            >
              ブログ
            </Link>
            <Link href="/jp/resume" className="link">
              履歴書
            </Link>
          </ul>
        </div>

        <div className=" w-fit  items-center gap-5 hidden lg:flex">
          <NavThemeChangev2 />
          <div className="border h-[30px] border-main" />
          <Language />
        </div>
        <Hamburger />
      </div>
    </nav>
  );
}
