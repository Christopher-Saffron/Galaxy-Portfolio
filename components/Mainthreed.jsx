import Image from "next/image";

export default function Mainthreed() {
  return (
    <div className="w-[840px] relative mx-auto  h-[400px] col-span-full items-center justify-center flex overflow-hidden">
      <Image
        src="/images/galaxy.png"
        alt=""
        fill={true}
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}
