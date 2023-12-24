import { Suspense } from "react";
import ProjectLink from "@/components/pl/work/ProjectLink";
import PROJECTS from "@/data/dataPL";

export default function ProjectsWebDevOnly() {
  return (
    <Suspense fallback={"Loading...."}>
      <div className="default-grid-item">
        <div className="rocketBorder relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
          <span>Top Projekty</span>
        </div>
      </div>
      <div className="default-grid-item grid grid-cols-1 lg:grid-cols-2 my-8 mb-12 gap-x-4 gap-y-12 lg:gap-y-24 items-start">
        {PROJECTS.slice(0, 6).map((project) => (
          <ProjectLink key={project.id} project={project} />
        ))}
      </div>
      <div className="default-grid-item">
        <div className="rocketBorder relative text-[24px] dark:text-textSub2 font-bold pb-3 w-fit">
          <span>Inne Projekty</span>
        </div>
      </div>
      <div className="default-grid-item grid grid-cols-1 lg:grid-cols-2 gap-5 my-8 mb-12 gap-x-4 gap-y-12 lg:gap-y-24 items-start">
        {PROJECTS.slice(6, -1)
          .filter((item) => item.category === "web-development")
          .map((project) => (
            <ProjectLink key={project.id} project={project} />
          ))}
      </div>
    </Suspense>
  );
}
