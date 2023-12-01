import Image from "next/image";
import Link from "next/link";
import ResumeLink from "@/components/jp/resume/ResumeLink";

export default function Resumes() {
  return (
    <div className=" col-start-2 col-end-9 flex flex-col ">
      <ResumeLink
        previewImgs={["/portfolio/pl1.jpg", "/portfolio/pl2.jpg"]}
        downloadLink={"Krzysztof_Szafran_Resume_PL_28-07-2023.pdf"}
        fileName={"Krzysztof Szafran CV PL"}
      />
      <ResumeLink
        previewImgs={["/portfolio/pl1.jpg", "/portfolio/pl2.jpg"]}
        downloadLink={"Krzysztof_Szafran_Resume_EN_28-07-2023.pdf"}
        fileName={"Christopher Saffron CV EN"}
      />
      <ResumeLink
        previewImgs={["/portfolio/pl1.jpg", "/portfolio/pl2.jpg"]}
        downloadLink={"Krzysztof_Szafran_Resume_JP_28-07-2023.pdf"}
        fileName={"Christopher Saffron 履歴書 JP"}
      />
      {/* <div className="py-3 border-b-2 border-[#1A1A1A]  flex justify-between">
        <div className="resumeLink hoverMain">
          Christopher Saffron CV - 01.08.2023 - EN
        </div>
        <div className="flex gap-6 ">
          <div className="flex items-center gap-2">
            <Image src="/images/EyeFill.svg" width={18} height={18} alt="" />
            <span className="download-view-pdf hoverMain">Preview</span>
          </div>
          <Link
            href="http://localhost:3000/api/Krzysztof_Szafran_Resume_PL_28-07-2023.pdf"
            className="flex items-center gap-2"
          >
            <Image src="/images/Download.svg" width={18} height={18} alt="" />
            <span className="download-view-pdf hoverMain">Download pdf</span>
          </Link>
        </div>
      </div>
      <div className="py-3 border-b-2 border-[#1A1A1A]  flex justify-between">
        <div aria-current={false} className="resumeLink hoverMain font-medium">
          Christopher Saffron 履歴書 - 01.08.2023 - JP
        </div>
        <div className="flex gap-6 ">
          <div className="flex items-center gap-2">
            <Image src="/images/EyeFill.svg" width={18} height={18} alt="" />
            <span className="download-view-pdf hoverMain">Preview</span>
          </div>
          <Link
            href="http://localhost:3000/api/Krzysztof_Szafran_Resume_JP_28-07-2023.pdf"
            className="flex items-center gap-2"
          >
            <Image src="/images/Download.svg" width={18} height={18} alt="" />
            <span className="download-view-pdf hoverMain">Download pdf</span>
          </Link>
        </div>
      </div> */}
    </div>
  );
}
