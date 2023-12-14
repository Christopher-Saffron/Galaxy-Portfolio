import Image from "next/image";

export default function ScreenClouds() {
  return (
    <>
      <div className="relative w-full h-[7045px] animation-space1">
        <Image
          src={"/animation/satellite2.svg"}
          sizes={"50vw"}
          width={0}
          height={0}
          className="w-[900px] h-auto absolute right-[15%] top-[2%] "
          alt=""
        />
        <div className="absolute w-full h-fit bottom-[3700px]">
          <Image
            src={"/animation/fade1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] relative  "
            alt=""
          />
          <Image
            src={"/animation/comet3.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[25%] bottom-[50%] "
            alt=""
          />
          <Image
            src={"/animation/comet2.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[9%] bottom-[53%] "
            alt=""
          />
          <Image
            src={"/animation/comet1.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute right-[2%] bottom-[40%] "
            alt=""
          />
        </div>
        <div className="absolute w-full h-fit bottom-[2700px] ">
          <Image
            src={"/animation/moonBackground.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto]   "
            alt=""
          />
          <Image
            src={"/animation/moon.svg"}
            sizes={"100vw"}
            width={0}
            height={0}
            className="w-auto h-[auto] absolute top-0 right-[5%]  "
            alt=""
          />
        </div>
        <Image
          src={"/animation/rocketFlying1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[2000px] left-[70%]"
          alt=""
        />
        <Image
          src={"/animation/rocketFlying2.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[1600px] left-[80%]"
          alt=""
        />
        <Image
          src={"/animation/satellite1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[1000px] left-48"
          alt=""
        />
        <Image
          src={"/animation/waves1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-0 left-0"
          alt=""
        />
      </div>
      <div className="relative w-full h-[2542px] border-4 border-orange-500 animation-clouds">
        <Image
          src={"/animation/balloon2.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[600px] right-1/4"
          alt=""
        />
        <Image
          src={"/animation/balloon1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[500px] left-1/4"
          alt=""
        />
        <Image
          src={"/animation/smallClouds.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[500px] left-1/2 -translate-x-1/2"
          alt=""
        />
        <Image
          src={"/animation/fields.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-[110px] left-0"
          alt=""
        />
        <Image
          src={"/animation/clouds3.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-12 left-0"
          alt=""
        />
        <Image
          src={"/animation/clouds2.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-6 left-0"
          alt=""
        />
        <Image
          src={"/animation/clouds1.svg"}
          sizes={"100vw"}
          width={0}
          height={0}
          className="w-auto h-[auto] absolute bottom-0 left-0"
          alt=""
        />
      </div>
    </>
  );
}
