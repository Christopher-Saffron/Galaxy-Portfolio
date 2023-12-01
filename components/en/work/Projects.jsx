import { Suspense } from "react";
import ProjectLink from "@/components/en/work/ProjectLink";
import PROJECTS from "@/data/data";

export default function Projects({ category }) {
  return (
    <Suspense fallback={"Loading...."}>
      <div className="test grid grid-cols-2 my-12 gap-14 gap-x-12  items-start ">
        {PROJECTS.filter((project) => project.category === category).map(
          (project) => (
            <ProjectLink key={project.id} project={project} />
          )
        )}
      </div>
    </Suspense>
  );
}
