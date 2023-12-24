"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavThemeChangev2 from "./NavThemeChangev2";
import Language from "./Language";

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
          className=" stroke-black dark:stroke-white group-hover:stroke-main transition duration-150"
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
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="h-screen w-full block lg:hidden  fixed top-0 right-0 bg-white dark:bg-bgcolor2  "
          >
            <div className="flex flex-col   mt-[40px] pt-12  items-center  font-inter  justify-between">
              <div className="flex flex-col  justify-between items-center gap-6 dark:text-textMain  text-[32px]">
                <Link
                  href="/pl"
                  className=" underline underline-offset-8 hover:text-main transition duration-100"
                  onClick={() => setIsOpen(false)}
                >
                  O MNIE
                </Link>
                <Link
                  href="/pl"
                  className=" rounded-md cursor-pointer bg-main px-16 py-2 dark:text-black hover:text-white "
                  onClick={() => setIsOpen(false)}
                >
                  BLOG
                </Link>
                <Link
                  href="/pl/work/web-development"
                  className="hover:text-main transition duration-100"
                  onClick={() => setIsOpen(false)}
                >
                  PRACA
                </Link>
                <Link
                  href="/pl/resume"
                  className="hover:text-main transition duration-100"
                  onClick={() => setIsOpen(false)}
                >
                  MOJE CV
                </Link>
              </div>
              <div className="relative flex gap-6 my-12">
                <NavThemeChangev2 />
                <Language />
              </div>

              <div className="relative flex gap-6">
                <div className="cursor-pointer hover:scale-105 transition duration-100 fill-black dark:fill-white hover:fill-main">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 10 20"
                    fill="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.82129 20V11H9.55368L10 7H6.82129V5.05176C6.82129 4.02176 6.8476 3 8.2869 3H9.74469V0.140137C9.74469 0.0971367 8.49249 0 7.22568 0C4.57999 0 2.9234 1.6572 2.9234 4.7002V7H0V11H2.9234V20H6.82129Z"
                      fill="inherit"
                    />
                    <path
                      d="M6.82129 20V11H9.55368L10 7H6.82129V5.05176C6.82129 4.02176 6.8476 3 8.2869 3H9.74469V0.140137C9.74469 0.0971367 8.49249 0 7.22568 0C4.57999 0 2.9234 1.6572 2.9234 4.7002V7H0V11H2.9234V20H6.82129Z"
                      fill="inherit"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer hover:scale-105 transition duration-100 fill-black dark:fill-white hover:fill-main">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 20 20"
                    fill="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 20H16V13.001C16 11.081 15.153 10.0098 13.634 10.0098C11.981 10.0098 11 11.126 11 13.001V20H7V7H11V8.46191C11 8.46191 12.255 6.25977 15.083 6.25977C17.912 6.25977 20 7.98611 20 11.5581V20ZM2.442 4.9209C1.093 4.9209 0 3.81896 0 2.45996C0 1.10196 1.093 0 2.442 0C3.79 0 4.883 1.10196 4.883 2.45996C4.884 3.81896 3.79 4.9209 2.442 4.9209ZM0 20H5V7H0V20Z"
                      fill="inherit"
                    />
                  </svg>
                </div>
                <div className="cursor-pointer hover:scale-105 transition duration-100 fill-black dark:fill-white hover:fill-main">
                  <svg
                    width="60"
                    height="60"
                    viewBox="0 0 20 20"
                    fill="inherit"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.99999 0C15.523 0 20 4.58992 20 10.2529C20 14.7819 17.138 18.6239 13.167 19.9809C12.66 20.0819 12.48 19.7617 12.48 19.4887C12.48 19.1507 12.492 18.0468 12.492 16.6748C12.492 15.7188 12.172 15.0948 11.813 14.7768C14.04 14.5228 16.38 13.6558 16.38 9.71776C16.38 8.59776 15.992 7.68381 15.35 6.96581C15.454 6.70681 15.797 5.66395 15.252 4.25195C15.252 4.25195 14.414 3.97722 12.505 5.30322C11.706 5.07622 10.85 4.962 9.99999 4.958C9.14999 4.962 8.29499 5.07622 7.49699 5.30322C5.586 3.97722 4.746 4.25195 4.746 4.25195C4.203 5.66395 4.546 6.70681 4.649 6.96581C4.01 7.68381 3.619 8.59776 3.619 9.71776C3.619 13.6458 5.954 14.5261 8.17499 14.7851C7.88899 15.0411 7.62999 15.4927 7.53999 16.1557C6.96999 16.4177 5.52199 16.8712 4.62999 15.3042C4.62999 15.3042 4.101 14.3191 3.097 14.2471C3.097 14.2471 2.122 14.2341 3.029 14.8701C3.029 14.8701 3.684 15.1851 4.139 16.3701C4.139 16.3701 4.726 18.2001 7.50799 17.5801C7.51299 18.4371 7.52199 19.2447 7.52199 19.4887C7.52199 19.7597 7.33799 20.0769 6.83899 19.9819C2.86499 18.6269 0 14.7829 0 10.2529C0 4.58992 4.47799 0 9.99999 0Z"
                      fill="inherit"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="absolute right-14 top-8 group cursor-pointer"
              onClick={() => setIsOpen((prev) => !prev)}
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 54 54"
                fill="none"
                className=" stroke-black dark:stroke-white group-hover:stroke-main transition duration-150"
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
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
