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
      <div className="py-3 border-b-2 border-gray-300 dark:border-[#1A1A1A] w-full  flex justify-between ">
        <div
          className="resumeLink hoverMain text-black dark:text-textSub2"
          onClick={() => setShowImgs((n) => !n)}
        >
          {fileName}
        </div>
        <div className="flex gap-6 ">
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
              {showImgs ? "Hide Images" : "Preview"}
            </span>
          </div>
          <Link
            href={`http://localhost:3000/api/${downloadLink}`}
            className="flex items-center gap-2"
          >
            <Image src="/images/Download.svg" width={18} height={18} alt="" />
            <span className="download-view-pdf hoverMain">Download pdf</span>
          </Link>
        </div>
      </div>
      {showImgs &&
        previewImgs.map((img, i) => (
          <Zoom key={i}>
            <div
              className={`w-full h-[600px] my-1 relative ${i === 0 && "mt-6"}`}
            >
              <Image src={img} alt="" fill style={{ objectFit: "contain" }} />
            </div>
          </Zoom>
        ))}

      {/* <div className="w-full h-[800px] relative border border-blue-500">
        <Image
          src="/portfolio/pl1.jpg"
          alt=""
          fill
          style={{ objectFit: "contain" }}
        />
      </div> */}
    </div>
  );
}
