import FooterBreak from "@/components/en/FooterBreak";
import RocketAnimation from "@/components/en/RocketAnimation";
import Resumes from "@/components/en/resume/Resumes";

export default function Resume() {
  return (
    <>
      <main className="default-grid-holder transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3 max-w-fit mx-auto">
        <div className="default-grid-item">
          <p className=" font-lato text-[32px] text-center w-full  font-bold text-main  mb-3">
            Resumes
          </p>
        </div>
        <Resumes />
        <div className="default-grid-item md:mt-20">
          <RocketAnimation />
        </div>
      </main>
      <FooterBreak height={6} />
    </>
  );
}
