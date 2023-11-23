import Image from "next/image";
import NavThemeChangev2 from "./NavThemeChangev2";
import Language from "./Language";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className=" bg-bgcolor2  p-5 flex items-center justify-evenly z-10">
      <div className="flex gap-[60px]">
        <Link href="/">
          <Image
            src="/logo/christophersaffronlogo.svg"
            alt=""
            priority
            height={60}
            width={166}
          />
        </Link>
        <ul className="flex items-center gap-7 text-xl">
          <Link href="/work" className=" link">
            Work
          </Link>
          <Link
            href="/"
            className=" link rounded-md cursor-pointer  transition duration-200 bg-main px-6 py-4 text-black font-bold"
          >
            Blog
          </Link>
          <Link href="/resume" className="link">
            Resume
          </Link>
        </ul>
      </div>
      <div className=" w-fit flex items-center gap-5">
        <NavThemeChangev2 />
        <div className="border h-[30px] border-[#414141]" />
        <Language />
      </div>
    </nav>
  );
}
