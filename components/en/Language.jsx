"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { flushSync } from "react-dom";

function Language() {
  const [showMenu, setShowMenu] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const pathname = usePathname();
  const router = useRouter();
  // const regex = /\/(pl|en|jp)\//;
  const regex = /\/(pl|en|jp)\/?/;

  function handleLanguageChange(lang) {
    console.log(localStorage.getItem("saffronLang"), "and", lang);

    ////clicking the same option does nothing
    if (lang === localStorage.getItem("saffronLang")) {
      return;
    } else {
      flushSync(() => {
        localStorage.setItem("saffronLang", lang);
        setCurrentLanguage(lang);
      });
      const newPathname = pathname.replace(regex, `/${lang}/`);
      console.log(newPathname);

      router.replace(newPathname);
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////// CLICK OUTSIDE THE LANGUAGES TO CLOSE THE BOX
  ////////////////////////////////////////////////////////////////////////////////////////////////
  // useEffect(() => {
  //   function handleClickOutside(e) {
  //     console.log("what the fuck");
  //     // console.log(e.target.classList);
  //     console.log(showMenu, e.target.classList.contains("navLanguagesTab"));
  //     if (showMenu && e.target.classList.contains("navLanguageTab") === false) {
  //       console.log("closing it");
  //       setShowMenu(false);
  //     }
  //   }

  //   window.addEventListener("click", handleClickOutside);

  //   return () => {
  //     window.removeEventListener("click", handleClickOutside);
  //   };
  // }, []);

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////// CHECK FOR MANUAL PATH CHANGE
  ////////////////////////////////////////////////////////////////////////////////////////////////

  ////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////// CHECK LOCAL STORAGE FOR ALREADY EXISTING LANGUAGE SETTINGS
  ////////////////////////////////////////////////////////////////////////////////////////////////

  useEffect(() => {
    //first visit
    if (!localStorage.getItem("saffronLang")) {
      localStorage.setItem("saffronLang", navigator.language);

      /////////////////////////////
      //////////////////////// ENGLISH
      /////////////////////////////
      if (navigator.language.includes("en")) {
        flushSync(() => {
          localStorage.setItem("saffronLang", "en");
          setCurrentLanguage("en");
        });

        /////////////////////////////
        //////////////////////// POLISH
        /////////////////////////////
      } else if (navigator.language.includes("pl")) {
        flushSync(() => {
          localStorage.setItem("saffronLang", "pl");
          setCurrentLanguage("pl");
        });

        /////////////////////////////
        //////////////////////// JAPANESE
        /////////////////////////////
      } else if (navigator.language.includes("ja")) {
        flushSync(() => {
          localStorage.setItem("saffronLang", "ja");
          setCurrentLanguage("ja");
        });
      } else {
        localStorage.setItem("saffronLang", "en");
        setCurrentLanguage("en");
      }
    } else {
      ///reocurring visit
      setCurrentLanguage(localStorage.getItem("saffronLang"));
    }

    /////////////////////////////
    //////////////////////// CHECK IF WE ARE USING THE PROPER LANGUAGE PAGE
    /////////////////////////////
    const match = regex.exec("pathname");
    if (match) {
      const newPathname = pathname.replace(regex, `/${lang}/`);
      router.replace(newPathname);
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
