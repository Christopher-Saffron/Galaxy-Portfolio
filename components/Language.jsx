"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

function Language() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const menuRef = useRef(null);

  function handleLanguageChange(lang) {
    setCurrentLanguage(lang);
  }

  useEffect(() => {
    function handleClickOutside(e) {
      if (showMenu && e.target.classList.contains("navLanguageTab") !== false) {
        setShowMenu(false);
      }
    }

    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div
      className="flex relative gap-2 cursor-pointer select-none"
      onClick={() => {
        setShowMenu((prev) => !prev);
      }}
    >
      <div className="group relative w-[32px] h-[24px]">
        <Image
          src={`/images/flag_${currentLanguage}.svg`}
          fill
          objectFit=""
          alt=""
        />
        <div className="w-full h-full absolute bg-gradient-to-t from-black opacity-0 group-hover:opacity-100 transition-all duration-300">
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-sm ">
            {currentLanguage.toUpperCase()}
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

      {showMenu && (
        <div ref={menuRef} className="navLanguageTab text-textMain">
          <div
            onClick={() => handleLanguageChange("en")}
            className="navLanguageChoice "
          >
            <Image
              src="/images/flag_en.svg"
              width={"32"}
              height={"24"}
              alt=""
            />
            <span>EN</span>
          </div>
          <hr className="w-2/4 mx-auto border-[#2E2E2E] border" />
          <div
            onClick={() => handleLanguageChange("pl")}
            className="navLanguageChoice "
          >
            <Image
              src="/images/flag_pl.svg"
              width={"32"}
              height={"24"}
              alt=""
            />
            <span>PL</span>
          </div>
          <hr className="w-2/4 mx-auto border-[#2E2E2E] border" />
          <div
            onClick={() => handleLanguageChange("jp")}
            className="navLanguageChoice "
          >
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
