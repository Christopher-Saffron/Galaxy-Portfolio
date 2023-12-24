"use client";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
export default function ImageGallery({ images }) {
  return (
    <div className="flex flex-wrap  w-full col-span-full justify-evenly gap-y-9 items-center mb-16">
      {images.length > 1 &&
        images.map((item, i) => (
          <Zoom className="relative w-full h-full " key={i}>
            <div className=" relative projectSecondaryImg  projectLoad skeleton-shine  shadow-lg hidden sm:block ">
              <Image
                src={item}
                fill
                alt=""
                sizes="20vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </Zoom>
        ))}
    </div>
  );
}
