///WE ARE CHECKING IF THE PATH HAS THE SAME LANGUAGE AS THE ONE SAVED IN THE LOCAL STORAGE

export default function useLanguageCheck(pathname) {
  const currentLang = localStorage.getItem("saffronLang");
  const pattern = `\/${currentLang}\/?`;
  const currentLanguageRegex = new RegExp(pattern);
  const match = currentLanguageRegex.exec(pathname);
  return Boolean(match);
}
