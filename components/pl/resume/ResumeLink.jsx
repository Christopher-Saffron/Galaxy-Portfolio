"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Zoom from "react-medium-image-zoom";

export default function ResumeLink({ downloadLink, fileName, previewImgs }) {
  const [showImgs, setShowImgs] = useState(false);
  return (
    <div className="  flex flex-col">
      <div className="py-3 border-b-2 border-gray-300 dark:border-[#1A1A1A] w-full  flex flex-col md:flex-row justify-between ">
        <div
          className="resumeLink hoverMain text-black dark:text-textSub2"
          onClick={() => setShowImgs((n) => !n)}
        >
          {fileName}
        </div>
        <div className="flex ml-2 md:ml-0 gap-4 md:gap-6 ">
          <div
            onClick={() => setShowImgs((n) => !n)}
            className={`flex items-center gap-2`}
          >
            <Image
              className={`${showImgs && "hidden"}`}
              src="/images/EyeFill.svg"
              width={18}
              height={18}
              alt=""
            />
            <span className="download-view-pdf hoverMain">
              {showImgs ? "Schowaj" : "Pokaż"}
            </span>
          </div>
          {/* <Link
            href={`https://www.christophersaffron.com/api/${downloadLink}`}
            className="flex items-center gap-2"
          >
            <Image src="/images/Download.svg" width={18} height={18} alt="" />
            <span className="download-view-pdf hoverMain">Pobierz pdf</span>
          </Link> */}
        </div>
      </div>
      {showImgs &&
        previewImgs.map((img, i) => (
          <Zoom key={i}>
            <div
              className={`w-full h-[200px] md:h-[300px] lg:h-[600px] my-1 relative ${
                i === 0 && "mt-6"
              }`}
            >
              <Image src={img} alt="" fill style={{ objectFit: "contain" }} />
            </div>
          </Zoom>
        ))}
    </div>
  );
}
