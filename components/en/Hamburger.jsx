import Image from "next/image";

export default function Hamburger() {
  return (
    <>
      <div className="p-2 group block lg:hidden  cursor-pointer transition hover:scale-105 ">
        {/* <Image src="/images/Hamburger.svg" alt="" width={42} height={42} /> */}
        <svg
          width="40"
          height="32"
          viewBox="0 0 52 38"
          fill="none"
          className="  stroke-white group-hover:stroke-main transition duration-150"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M49 35L3 35"
            stroke="inherit"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M49 19L3 19"
            stroke="inherit"
            strokeWidth="5"
            strokeLinecap="round"
          />
          <path
            d="M49 3L3 3"
            stroke="inherit"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="h-screen w-1/2 border border-red-500 fixed top-0 left-0"></div>
    </>
  );
}
