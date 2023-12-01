"use client";
import Image from "next/image";
import Zoom from "react-medium-image-zoom";
export default function ImageGallery({ images }) {
  return (
    <div className="flex flex-wrap  w-full col-span-full justify-evenly gap-y-9 items-center mb-16">
      {images.length > 1 &&
        images.map((item, i) => (
          <>
            {/* //////////////////////////////// ZOOM DOES NOT TAKE IN ANY CLASSES - OR OVERRIDES THEM */}
            <Zoom className="relative w-full h-full ">
              <div
                key={i}
                className=" relative projectSecondaryImg  projectLoad skeleton-shine  shadow-lg hidden sm:block "
              >
                <Image
                  src={item}
                  fill
                  alt=""
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
            </Zoom>
            {/* ////////////////////// TEMPORARY FIX FOR MOBILE - POSSIBLE MANUAL ZOOM - NO NEED FOR CODE */}
            <div
              key={i}
              className=" relative projectSecondaryImg  projectLoad skeleton-shine  shadow-lg block sm:hidden"
            >
              <Image
                src={item}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </>
        ))}
    </div>
  );
}
