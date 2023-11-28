import Projects from "@/components/work/Projects";
import WorkType from "@/components/work/WorkType";
import WorkWebDevelopment from "@/components/work/WorkWebDevelopment";
import { WORKTYPES } from "@/data/data";

export default function Page({ params }) {
  return params.workType === "web-development" ? (
    <WorkWebDevelopment />
  ) : (
    <Projects category={params.workType} />
  );
}

// export default function Page({ params }) {
//   return <Projects category={params.workType} />;
// }

export async function generateStaticParams() {
  return WORKTYPES.map((workType) => {
    return {
      workType: workType,
    };
  });
}
