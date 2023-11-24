import WorkType from "@/components/work/WorkType";

export default function Layout({ children, params }) {
  return (
    <main className="main-grid  max-w-fit mx-auto">
      <WorkType workType={params.workType} />
      {children}
    </main>
  );
}
