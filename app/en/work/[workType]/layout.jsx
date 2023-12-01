import FooterBreak from "@/components/en/FooterBreak";
import WorkType from "@/components/en/work/WorkType";

export default function Layout({ children, params }) {
  return (
    <>
      {/* <main className="main-grid  max-w-fit my-36 mx-auto"> */}
      <main className="main-grid transition duration-200 shadow-md  bg-white dark:bg-bgcolor px-3  max-w-fit mx-auto">
        <WorkType workType={params.workType} />
        {children}
      </main>
      <FooterBreak height={6} />
    </>
  );
}
