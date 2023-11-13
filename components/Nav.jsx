import Image from "next/image";
import NavThemeChangev2 from "./NavThemeChangev2";
import Language from "./Language";

export default function Nav() {
  return (
    <nav className="border border-gray-500 p-5 flex items-center justify-evenly">
      <div className="flex gap-[60px]">
        <Image
          src="/logo/christophersaffronlogo.svg"
          alt=""
          priority
          height={60}
          width={166}
        />
        <ul className="flex items-center gap-7 text-xl">
          <li>Work</li>
          <li className="rounded-md bg-main px-6 py-4 text-black font-bold">
            Blog
          </li>
          <li>Resume</li>
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
