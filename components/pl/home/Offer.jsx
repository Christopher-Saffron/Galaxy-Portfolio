export default function Offer() {
  return (
    <div className="default-grid-item my-3">
      <p className="textTitle mb-7">Co mogę zaoferować?</p>
      <div className="font-catamaran text-[16px] md:text-base font-bold flex flex-col gap-6 md:gap-3">
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Front-end</span>
          <span className="font-catamaran">
            Doświadczenie z{" "}
            <span className="text-main">
              React (Redux, NEXT.JS, Tailwind), Vue, Typescript, Three.js
            </span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Design</span>
          <span>
            <span className="text-main">FIGMA</span> - Do tworzenia logotypów,
            szkiców stron internetowych oraz ikon / rysunków SVG
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Back-end</span>
          <span>
            <span className="text-main">Node.js z Express.js</span> do tworzenia
            serwerów i uruchamiania skryptów na maszynach. Wkrótce planuję
            nauczyć się również PHP.
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Bazy danych</span>
          <span>
            <span className="text-main">MongoDB, Firebase</span> a także trochę
            MySQL
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Modelowanie 3D</span>
          <span>
            Jeden z najlepszych projektów open-source -{" "}
            <span className="text-main">Blender</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">AutoCAD</span>
          <span>
            <span className="text-main">AutoCAD / BricsCAD</span> do
            projektowania zarządzania ruchem drogowym
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Montaż wideo</span>
          <span>
            <span className="text-main">Sony Vegas Pro</span> oraz{" "}
            <span className="text-main">DaVinci Resolve</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Edycja Obrazów</span>
          <span>
            Do poprawek i edycji zdjęć i obrazów używam{" "}
            <span className="text-main">Gimp</span>
          </span>
        </div>
        <div className="flex flex-col md:flex-row gap-2 md:gap-8">
          <span className="offerCategory">Sztuczna Inteligencja</span>
          <span>
            Używam <span className="text-main">ChatGPT</span> i{" "}
            <span className="text-main">Stable Diffusion</span>
          </span>
        </div>
      </div>
    </div>
  );
}
