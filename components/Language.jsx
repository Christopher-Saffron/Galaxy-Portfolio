"use client";

import Image from "next/image";
import React, { useState } from "react";

function Language() {
  const [showMenu, setShowMenu] = useState(false);
  // const [animationClass, setAnimationClass] = useState("animate-appearFromTop");
  // const handleAnimationEnd = () => {
  //   if (!showMenu) {
  //     setShowMenu(false);
  //   }
  // };

  // const handleToggleMenu = () => {
  //   if (!showMenu) {
  //     setShowMenu(true);
  //     setAnimationClass("animate-appearFromTop");
  //   } else {
  //     setAnimationClass("animate-disappearToTop");
  //   }
  // };

  return (
    <div
      className="flex relative gap-2 cursor-pointer"
      onClick={() => {
        setShowMenu((prev) => !prev);
      }}
    >
      <div className="group relative w-[32px] h-[24px]">
        <Image src="/images/flag_gb.svg" fill objectFit="" alt="" />
        <div className="w-full h-full absolute bg-gradient-to-t from-black opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm ">
            EN
          </div>
        </div>
      </div>
      <Image
        src="/images/LanguagesSVG.svg"
        width={15}
        height={15}
        alt=""
        className={`transition duration-200 ${
          showMenu ? "rotate-180" : "rotate-0"
        }`}
      />
      {/* <div
          onAnimationEnd={handleAnimationEnd}
          className={`absolute h-fit w-[100px] ${animationClass} top-[155%] rounded-md left-1/2 -translate-x-1/2 flex flex-col border-[#303030] border-2 bg-[#161616] `}
        > */}
      {/* <div className="absolute h-fit w-[100px] animate-appearFromTop top-[155%] rounded-md left-1/2 -translate-x-1/2 flex flex-col border-[#303030] border-2 bg-[#161616] "> */}
      {showMenu && (
        <div className="navLanguageTab text-textMain">
          <div className="navLanguageChoice ">
            <Image
              src="/images/flag_gb.svg"
              width={"32"}
              height={"24"}
              alt=""
            />
            <span>EN</span>
          </div>
          <hr className="w-2/4 mx-auto border-[#2E2E2E] border" />
          <div className="navLanguageChoice ">
            <Image
              src="/images/flag_pl.svg"
              width={"32"}
              height={"24"}
              alt=""
            />
            <span>PL</span>
          </div>
          <hr className="w-2/4 mx-auto border-[#2E2E2E] border" />
          <div className="navLanguageChoice ">
            <Image
              src="/images/flag_jp.svg"
              width={"32"}
              height={"24"}
              alt=""
            />
            <span>JP</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default Language;
