import Image from "next/image";

export default function NameCardImage() {
  return (
    <div className="test planet relative">
      <Image src="./images/EARTH.svg" fill />
    </div>
  );
}
