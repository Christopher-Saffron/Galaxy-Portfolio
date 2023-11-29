"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function NavThemeChangev2() {
  const [darkMode, setDarkMode] = useState(true);

  // useEffect(() => {
  //   const theme = localStorage.getItem("theme");
  //   if (theme === "dark") setDarkMode(true);
  // }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      // localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      // localStorage.setItem("theme", "light");
    }
  }, [darkMode]);
  return (
    <div
      onClick={() => setDarkMode((prev) => !prev)}
      className={`modeChangeBackground border-gray-500`}
    >
      {/* <div className={`ball ${darkMode ? "darkModeBall" : "lightModeBall"}`}> */}
      <div className={`ball  ${darkMode ? "darkModeBall" : "lightModeBall"}`}>
        <div
          className={`lightModePlanetContainer  duration-500 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="modeChangeBackgroundLightMode" />

          <Image src="/images/SUN BALL.svg" alt="" width={55} height={30} />
          <div className="modeChangeClouds">
            <Image src="/images/CLOUDS.svg" alt="" fill={true} />
          </div>
        </div>
        <div
          className={`darkModePlanetContainer  duration-500 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="modeChangeBackgroundDarkMode" />
          <Image src="/images/MOON BALL.svg" alt="" width={55} height={30} />
          <div className="modeChangeStars">
            <Image src="/images/STARS.svg" alt="" fill={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
