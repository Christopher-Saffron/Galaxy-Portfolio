import Image from "next/image";

export default function NameCardImage() {
  return (
    <div className="default-grid-item planet relative ">
      {/* // <div className="test planet relative"></div> */}
      {/* <Image src="./images/EARTH.svg" fill /> */}
      <div className="relative w-[170px] mx-auto h-[170px]  rounded-full">
        <Image
          src="/images/11.jpg"
          fill
          alt=""
          style={{ objectFit: "cover" }}
          className=" rounded-full"
        />
      </div>
    </div>
  );
}
