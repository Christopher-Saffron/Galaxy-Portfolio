import Image from "next/image";

export default function History() {
  return (
    <div className="test">
      <p className=" textTitle mb-7">History</p>
      <div className=" font-catamaran text-base flex flex-col gap-3">
        <div className="flex  gap-8">
          <span className="text-textSub3 font-lato font-bold">1999</span>
          <span className="font-catamaran ">
            I was born in <span className="text-main">Cracow, Poland</span>
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="text-textSub3 font-lato font-bold">2018</span>
          <span>
            Officially began working as a Temporary{" "}
            <span className="text-main">Traffic Management Designer</span>, as
            well as started and paused studying Metallurgical Engineering at AGH
            University of Science and Technology in Cracow.
          </span>
        </div>
        <div className="flex  gap-8">
          <span className="text-textSub3 font-lato font-bold whitespace-nowrap">
            2022 to present
          </span>
          <span>
            Fully focusing on Traffic Management Designing in{" "}
            <span className="text-main">SZAFRAN PROJEKT</span> as well as
            learning and utilizing programming and design on the side, with the
            goal of switching career paths to web development.
          </span>
        </div>
      </div>
    </div>
  );
}
