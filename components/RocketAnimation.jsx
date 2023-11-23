import Image from "next/image";

export default function RocketAnimation() {
  return (
    <div className="test">
      <div className=" max-w-[420px] mx-auto my-6 text-center flex flex-col gap-4">
        <div className=" relative h-[190px] mx-auto w-[190px] overflow-hidden">
          <Image
            src="./images/cloudsLOOP.svg"
            height={768}
            width={188}
            alt=""
            className="cloudsLOOP"
          />
          <Image
            src="./images/notFoundRocket.svg"
            height={164}
            width={60}
            className="moving-rocket"
            alt=""
          />

          <div className=" not-found-rocket-shadow absolute w-full h-full top-0 left-0 " />
        </div>
      </div>
    </div>
  );
}
