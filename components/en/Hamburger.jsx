"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        className="p-2 group block lg:hidden  cursor-pointer transition hover:scale-105 "
        onClick={() => setIsOpen((prev) => !prev)}
      >
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
      {isOpen && (
        <div className="h-screen w-full  fixed top-0 left-0 bg-bgcolor2  ">
          <div className="flex flex-col  mt-[40px] pt-12 gap-6 items-center tracking-tighter font-inter  justify-between">
            <Link
              href="/en"
              className="text-main text-[50px] underline underline-offset-8"
            >
              HOME
            </Link>
            <Link
              href="/en/work"
              className="text-main text-[50px] rounded-md cursor-pointer bg-main px-16 py-2 dark:text-black hover:text-white "
            >
              BLOG
            </Link>
            <Link href="/en/work" className="text-main text-[50px]">
              WORK
            </Link>
            <Link href="/en/work" className="text-main text-[50px]">
              RESUME
            </Link>
          </div>
          <div
            className="absolute right-8 top-8 group cursor-pointer"
            onClick={() => setIsOpen((prev) => !prev)}
          >
            <svg
              width="54"
              height="54"
              viewBox="0 0 54 54"
              fill="none"
              className="  stroke-white group-hover:stroke-main transition duration-150"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 52L51.3636 2.00002"
                stroke="inherit"
                strokeWidth="4.5"
              />
              <path
                d="M2.63593 2L51.9996 52"
                stroke="inherit"
                strokeWidth="4.5"
              />
            </svg>
          </div>
        </div>
      )}
    </>
  );
}
