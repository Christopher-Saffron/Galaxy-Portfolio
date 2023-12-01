import Projects from "@/components/pl/work/Projects";
import WorkWebDevelopment from "@/components/pl/work/WorkWebDevelopment";
import { WORKTYPES } from "@/data/data";

export default function Page({ params }) {
  return params.workType === "web-development" ? (
    <WorkWebDevelopment />
  ) : (
    <Projects category={params.workType} />
  );
}

export async function generateStaticParams() {
  return WORKTYPES.map((workType) => {
    return {
      workType: workType,
    };
  });
}
