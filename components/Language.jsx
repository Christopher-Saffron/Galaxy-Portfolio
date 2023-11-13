"use client";

import Image from "next/image";
import React, { useState } from "react";

function Language() {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div
      className="flex gap-2 cursor-pointer"
      onClick={() => setShowMenu((prev) => !prev)}
    >
      <div className="group relative w-[32px] h-[24px]">
        <Image src="/images/flag_gb.svg" fill objectFit="" alt="" />
        <div className="w-full h-full absolute bg-gradient-to-t from-black opacity-0 group-hover:opacity-100 transition-all duration-200">
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
    </div>
  );
}

export default Language;
