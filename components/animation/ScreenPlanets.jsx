import Image from "next/image";

export default function ScreenPlanets() {
  return (
    <div className="relative w-full h-[3600px] bg-[#01070D]  overflow-hidden">
      {/* ////////////// 4 TOP PLANET PATHS ////////////// */}
      {/* <div className="absolute w-full   h-[100%] max-h-[1600px] border-2 border-blue-500 top-0 bg-4paths ">
          <Image
            src={"/animation/4paths.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full absolute left-0 top-0 origin-top origin  "
            alt=""
          />
        </div> */}
      {/* <div className="absolute w-full   h-[100%] max-h-[1600px] border-2 border-blue-500 top-0 ">
          <Image
            src={"/animation/4paths.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full absolute left-0 top-0 origin-top origin  "
            alt=""
          />
        </div> */}
      {/* ////////////// SUN ////////////// */}
      <div className="absolute w-full h-full max-h-[1200px] max-w-[1200px] origin-center  overflow-hidden   right-0 translate-x-[45%] -translate-y-[45%]   ">
        <Image
          src={"/animation/sun.svg"}
          sizes={"100vw"}
          fill
          className="w-auto absolute left-0 top-0 object-contain"
          alt=""
        />
      </div>
      {/* <div className="absolute w-[100%] origin-center  overflow-hidden max-w-[9100%] h-[100%]  border-4 border-blue-500 top-0 ">
          <Image
            src={"/animation/sun.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto absolute left-0 top-0"
            alt=""
          />
        </div> */}
      {/* ////////////// MERCURY ////////////// */}
      <div className="absolute w-full  h-[100%] max-h-[1400px]  bottom-[3200px] ">
        {/* <Image
            src={"/animation/pathVenus.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1270px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          src={"/animation/mercury.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute right-[30%] bottom-0"
          alt=""
        />
      </div>
      {/* ////////////// Venus ////////////// */}
      <div className="absolute w-full  h-[100%] max-h-[1400px]  bottom-[2850px] ">
        {/* <Image
            src={"/animation/pathVenus.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1270px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          src={"/animation/venus.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute left-[20%] bottom-0"
          alt=""
        />
      </div>
      {/* ////////////// EARTH ////////////// */}
      {/* <div className="absolute w-full h-[100%] max-h-[1500px]  bottom-[3050px] ">
          <Image
            src={"/animation/pathEarth.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1470px] absolute left-0 top-0  "
            alt=""
          />
        </div> */}
      {/* ////////////// MARS ////////////// */}
      <div className="absolute w-full h-[100%] max-h-[1200px]  bottom-[2000px] ">
        {/* <Image
            src={"/animation/pathMars.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1170px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          src={"/animation/mars.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute right-[6%] bottom-[40%]"
          alt=""
        />
      </div>
      {/* ////////////// JUPITER ////////////// */}
      <div className="absolute w-full h-[100%] max-h-[1200px]  bottom-[2200px] ">
        {/* <Image
            src={"/animation/pathJupiter.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1100px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          src={"/animation/jupiter.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute left-[10%] bottom-[1%]"
          alt=""
        />
      </div>
      {/* ////////////// NEPTUNE ////////////// */}
      <div className="absolute w-full h-[100%] max-h-[1200px]  bottom-[1100px] ">
        {/* <Image
            src={"/animation/pathNeptune.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[1100px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          src={"/animation/neptune.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute right-[10%] bottom-[55%] "
          alt=""
        />
      </div>
      {/* ////////////// SATURN ////////////// */}
      <div className="absolute w-full h-[100%] max-h-[1200px]  bottom-0 ">
        {/* <Image
            src={"/animation/pathSaturn.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-full h-full max-h-[890px] absolute left-0 top-0  "
            alt=""
          /> */}
        <Image
          src={"/animation/saturn.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute left-10% bottom-[18%] "
          alt=""
        />
      </div>
    </div>
  );
}
