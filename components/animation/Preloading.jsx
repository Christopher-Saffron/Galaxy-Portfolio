import Image from "next/image";

export default function Preloading() {
  return (
    <div>
      <Image
        loading={"eager"}
        priority={true}
        src={"/animation/sun.svg"}
        sizes={"100vw"}
        fill
        className="w-auto absolute left-0 top-0 object-contain"
        alt=""
      />
    </div>
  );
}
