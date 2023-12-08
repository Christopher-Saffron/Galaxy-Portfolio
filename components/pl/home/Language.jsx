"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, easeInOut } from "framer-motion";

function Language() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");

  function handleLanguageChange(lang) {
    setCurrentLanguage(lang);
    localStorage.setItem("saffronLang", lang);
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

  useEffect(() => {
    console.log(navigator.language);

    //first visit
    if (!localStorage.getItem("saffronLang")) {
      localStorage.setItem("saffronLang", navigator.language);

      if (navigator.language.includes("en")) {
        localStorage.setItem("saffronLang", "en");
        setCurrentLanguage("en");
      } else if (navigator.language.includes("pl")) {
        localStorage.setItem("saffronLang", "pl");
        setCurrentLanguage("pl");
      } else if (navigator.language.includes("ja")) {
        localStorage.setItem("saffronLang", "ja");
        setCurrentLanguage("ja");
      } else {
        localStorage.setItem("saffronLang", "en");
        setCurrentLanguage("en");
      }
    } else {
      ///reocurring visit
      setCurrentLanguage(localStorage.getItem("saffronLang"));
    }
  }, []);

  return (
    <div
      className="flex relative gap-2 cursor-pointer select-none border-2 border-gray-500 hover:border-main transition duration-200 py-1 px-2 rounded-2xl"
      onClick={() => {
        setShowMenu((prev) => !prev);
      }}
    >
      <div className="group relative w-[32px] h-[24px] ">
        <Image
          src={`/images/flag_${currentLanguage}.svg`}
          fill
          objectFit=""
          alt=""
          className="border dark:border-bgcolor shadow-md rounded-md"
        />
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

      <AnimatePresence mode="wait">
        {showMenu && (
          <motion.div
            initial={{ scale: 0, opacity: 0, y: -60, x: -35 }}
            animate={{ scale: 1, opacity: 1, y: 40, x: -35 }}
            exit={{ scale: 0, opacity: 0, y: -60, x: -35 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="navLanguageTab bg-gray-100 border-main dark:bg-[#161616] dark:border-[#303030] text-textMain"
          >
            <div
              onClick={() => handleLanguageChange("en")}
              className="navLanguageChoice "
            >
              <Image
                src="/images/flag_en.svg"
                width={"32"}
                height={"24"}
                alt=""
                className="dark:border dark:border-bgcolor shadow-md"
              />
              <span>EN</span>
            </div>
            <hr className="w-2/4 mx-auto border-main dark:border-[#2E2E2E] border" />
            <div
              onClick={() => handleLanguageChange("pl")}
              className="navLanguageChoice "
            >
              <Image
                src="/images/flag_pl.svg"
                width={"32"}
                height={"24"}
                alt=""
                className="dark:border dark:border-bgcolor shadow-md"
              />
              <span>PL</span>
            </div>
            <hr className="w-2/4 mx-auto border-main dark:border-[#2E2E2E] border" />
            <div
              onClick={() => handleLanguageChange("jp")}
              className="navLanguageChoice "
            >
              <Image
                src="/images/flag_jp.svg"
                width={"32"}
                height={"24"}
                alt=""
                className="dark:border dark:border-bgcolor shadow-md"
              />
              <span>JP</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default Language;
