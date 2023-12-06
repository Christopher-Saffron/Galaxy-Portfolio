import Image from "next/image";

export default function History() {
  return (
    <div className="test  my-3">
      <p className=" textTitle mb-7">Historia</p>
      <div className=" font-catamaran text-base flex flex-col gap-3">
        <div className="flex  gap-8">
          <span className="dark:text-textSub3 font-lato font-bold">1999</span>
          <span className="font-catamaran ">
            Urodziłem się w <span className="text-main">Krakowie, Polska</span>
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="dark:text-textSub3 font-lato font-bold">2018</span>
          <span>
            Oficjalnie rozpocząłem pracę jako{" "}
            <span className="text-main">
              Projektant Tymczasowej Organizacji Ruchu{" "}
            </span>
            oraz rozpocząłem i zapauzowałem studia na kierunku Inżynieria Metali
            na AGH w Krakowie.
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="dark:text-textSub3 font-lato font-bold whitespace-nowrap">
            2022 do teraz
          </span>
          <span>
            W pełni skupiam się na projektowaniu Zarządzania Ruchem w firmie{" "}
            <span className="text-main">SZAFRAN PROJEKT</span>, a także uczę się
            i wykorzystuję programowanie, w celu zmiany ścieżki zawodowej na web
            development.
          </span>
        </div>
      </div>
    </div>
  );
}
