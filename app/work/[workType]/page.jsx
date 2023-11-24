import Projects from "@/components/work/Projects";
import WorkType from "@/components/work/WorkType";
import { WORKTYPES } from "@/data/data";

export default function Page({ params }) {
  return <Projects category={params.workType} />;
}

export async function generateStaticParams() {
  return WORKTYPES.map((workType) => {
    return {
      workType: workType,
    };
  });
}
