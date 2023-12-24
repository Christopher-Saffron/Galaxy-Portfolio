import Image from "next/image";
import Link from "next/link";

export default function Summary() {
  return (
    <div className="default-grid-item">
      <p className="textTitle">Podsumowanie zawodowe</p>
      <p className="font-catamaran text-[16px] md:text-base text-justify">
        Pasja do{" "}
        <span className="text-main dark:text-textSub3">
          pracy, nauki i swobody tworzenia
        </span>{" "}
        tego, co mam na myśli. Praca w dziedzinie{" "}
        <span className="text-main">Inżynierii Lądowej</span> wzmocniła moje
        umiejętności komunikacyjne i zdolności rozwiązywania problemów. Moje
        umiejętności w <span className="text-main">modelowaniu 3D</span>,
        montażu wideo i obróbce zdjęć były moim oknem na wyrażanie siebie w
        świecie. Ale to kodowanie wzbudziło moje zainteresowanie. Tworzenie
        aplikacji internetowych i skryptów do automatyzacji wypełnia moją głowę
        tysiącami pomysłów, które jeszcze nie zostały stworzone.
      </p>

      <Link
        href="/pl/work/web-development"
        className="summary-button w-fit duration-200 transition-all ease-in-out hover:bg-[#6dc4ec] hover:scale-[1.03] border-2 border-transparent shadow-md shadow-[#80c9ff] hover:border-[#4aabf3]  "
      >
        <span>Zobacz co potrafię</span>
        <Image src="/images/threearrows.svg" alt="" width={32} height={21} />
      </Link>
    </div>
  );
}
