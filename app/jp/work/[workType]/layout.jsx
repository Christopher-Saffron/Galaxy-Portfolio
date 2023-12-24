import FooterBreak from "@/components/jp/FooterBreak";
import WorkType from "@/components/jp/work/WorkType";

export default function Layout({ children, params }) {
  return (
    <>
      <main className="default-grid-holder transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3  max-w-fit mx-auto">
        <WorkType workType={params.workType} />
        {children}
      </main>
      <FooterBreak height={6} />
    </>
  );
}
