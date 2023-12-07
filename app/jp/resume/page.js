import FooterBreak from "@/components/jp/FooterBreak";
import RocketAnimation from "@/components/jp/RocketAnimation";
import Resumes from "@/components/jp/resume/Resumes";

export default function Resume() {
  return (
    <>
      <main className="main-grid transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3 max-w-fit mx-auto">
        <div className="test">
          <p className=" font-lato text-[32px]  font-bold text-main w-fit mb-3">
            履歴書
          </p>
        </div>
        <Resumes />
        <div className="test mt-24">
          <RocketAnimation />
        </div>
      </main>
      <FooterBreak height={6} />
    </>
  );
}
