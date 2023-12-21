import Image from "next/image";

export default function NameCard() {
  return (
    <>
      <div className="default-grid-item planet relative block lg:hidden">
        {/* // <div className="test planet relative"></div> */}
        {/* <Image src="./images/EARTH.svg" fill /> */}
        <div className="relative w-[170px] mx-auto h-[170px]  rounded-full ">
          <Image
            src="/images/11.jpg"
            fill
            alt=""
            style={{ objectFit: "cover" }}
            className=" rounded-full"
          />
        </div>
      </div>
      <div className="default-grid-item saffron lg:my-0 flex flex-col items-start justify-center lg:h-[170px]">
        <h2 className=" text-[24px] md:text-[42px] mx-auto md:mx-0 lg:text-[56px] font-bold text-black dark:text-textMain">
          Christopher Saffr<span className="on">on</span>
        </h2>
        <h4 className=" text-base  mx-auto lg:mx-0 font-catamaran text-gray-800 dark:text-[#939292] lg:text-[24px]">
          Full-stack Developer / BricsCAD Designer
        </h4>
      </div>
      <div className="default-grid-item planet relative hidden lg:block">
        {/* // <div className="test planet relative"></div> */}
        {/* <Image src="./images/EARTH.svg" fill /> */}
        <div className="relative w-[170px] mx-auto h-[170px]  rounded-full ">
          <Image
            src="/images/11.jpg"
            fill
            alt=""
            style={{ objectFit: "cover" }}
            className=" rounded-full"
          />
        </div>
      </div>
    </>
  );
}
