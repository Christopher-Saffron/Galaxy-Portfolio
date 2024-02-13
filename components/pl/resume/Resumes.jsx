import Image from "next/image";
import Link from "next/link";
import ResumeLink from "@/components/pl/resume/ResumeLink";

export default function Resumes() {
  return (
    <div className=" col-span-full lg:col-start-2 lg:col-end-9 flex flex-col ">
      <ResumeLink
        previewImgs={["/portfolio/test1.png", "/portfolio/test2.png"]}
        downloadLink={"Krzysztof_Szafran_Resume_PL_28-07-2023.pdf"}
        fileName={"Krzysztof Szafran CV PL"}
      />
      <ResumeLink
        previewImgs={["/portfolio/en1.png"]}
        downloadLink={"Krzysztof_Szafran_Resume_EN_28-07-2023.pdf"}
        fileName={"Christopher Saffron CV EN"}
      />
      {/* <ResumeLink
        previewImgs={["/portfolio/pl1.jpg", "/portfolio/pl2.jpg"]}
        downloadLink={"Krzysztof_Szafran_Resume_JP_28-07-2023.pdf"}
        fileName={"Christopher Saffron 履歴書 JP"}
      /> */}
    </div>
  );
}
