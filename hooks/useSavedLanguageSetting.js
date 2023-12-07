import { useState } from "react";

export default function useSavedLanguageSetting() {
  const [lang, setLang] = useState("en");

  function changeLanguage(lang) {
    console.log("Changing language to =", lang);
  }

  return [lang, changeLanguage];
}
