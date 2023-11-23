import RocketAnimation from "@/components/RocketAnimation";
import Image from "next/image";

export default function Resume() {
  return (
    <main className="main-grid max-w-fit mx-auto">
      <div className="test">
        <p className=" font-lato text-[32px]  font-bold text-main w-fit mb-3">
          Resumes
        </p>
      </div>
      <div className=" col-start-2 col-end-9 flex flex-col ">
        <div className="py-3 border-b-2 border-[#1A1A1A] w-full  flex justify-between">
          <div className="resumeLink hoverMain">
            Krzysztof Szafran CV - 01.08.2023 - PL
          </div>
          <div className="flex gap-6 ">
            <div className="flex items-center gap-2">
              <Image src="/images/EyeFill.svg" width={18} height={18} alt="" />
              <span className="download-view-pdf hoverMain">View pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/Download.svg" width={18} height={18} alt="" />
              <span className="download-view-pdf hoverMain">Download pdf</span>
            </div>
          </div>
        </div>
        <div className="py-3 border-b-2 border-[#1A1A1A]  flex justify-between">
          <div className="resumeLink hoverMain">
            Christopher Saffron CV - 01.08.2023 - EN
          </div>
          <div className="flex gap-6 ">
            <div className="flex items-center gap-2">
              <Image src="/images/EyeFill.svg" width={18} height={18} alt="" />
              <span className="download-view-pdf hoverMain">View pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/Download.svg" width={18} height={18} alt="" />
              <span className="download-view-pdf hoverMain">Download pdf</span>
            </div>
          </div>
        </div>
        <div className="py-3 border-b-2 border-[#1A1A1A]  flex justify-between">
          <div className="resumeLink hoverMain font-medium">
            Christopher Saffron 履歴書 - 01.08.2023 - JP
          </div>
          <div className="flex gap-6 ">
            <div className="flex items-center gap-2">
              <Image src="/images/EyeFill.svg" width={18} height={18} alt="" />
              <span className="download-view-pdf hoverMain">View pdf</span>
            </div>
            <div className="flex items-center gap-2">
              <Image src="/images/Download.svg" width={18} height={18} alt="" />
              <span className="download-view-pdf hoverMain">Download pdf</span>
            </div>
          </div>
        </div>
      </div>
      <div className="test mt-24">
        <RocketAnimation />
      </div>
    </main>
  );
}
